/**
 * @file 春乌拉拉 - 育成
 * @author 99
 */
const era = require('#/era-electron');

const { gacha, get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {string} callname 春乌拉拉对玩家的称呼
   */
  async train(urara, callname) {
    const buffer = [
      () => urara.say_and_wait('Оставь на меня! Сейчас начнём!'),
      () => urara.say_and_wait(`О! Начинаем, ${callname}!`),
      () => urara.say_and_wait('Сейчас начнём стараться!'),
      () => urara.say_and_wait('В этот раз получится! Начинаю!'),
      () => urara.say_and_wait('Хорошо! Урара, надо поднажать!'),
    ];
    await get_random_entry(buffer)();
  },
  ts_add: (() => {
    const title = 'Дополнительная самостоятельная тренировка!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_15 春乌拉拉对好歌剧的称呼
     * @param {PrintedSpan} callname_15 好歌剧对玩家的称呼
     */
    const f = async (urara, opera, you, callname, call_15, callname_15) => {
      await era.printAndWait([
        'После сегодняшней тренировки ',
        urara.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' вместе возвращаются отдыхать к дорожке Тренировочного поля.',
      ]);
      await urara.say_and_wait([
        'Сегодня тоже так старательно занимаешься, ',
        callname,
        ', потом вместе сходим в столовую… хм? А это кто там?',
      ]);
      await era.printAndWait([
        'По направлению, куда ',
        urara.get_colored_name(),
        ' шевелит ушами, ',
        you.get_colored_name(),
        ' замечает ещё одну фигуру, стоящую на Тренировочном поле.',
      ]);
      await urara.say_and_wait([
        'А! Это ',
        call_15,
        '! ',
        call_15,
        ' тоже собирается отдыхать?',
      ]);
      await era.printAndWait([
        'маленькая ',
        urara.uma_sex_title,
        ' останавливается перед ней, а театральная Повелительница тоже поворачивается к ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        '.',
      ]);
      await opera.say_and_wait([
        'О! Это же Урара и ',
        callname_15,
        ' ? Я как раз собиралась на пробежку! Вместе с Вечерней звездой!',
      ]);
      await urara.say_and_wait([
        'Пробежка вместе с Вечерней звездой? Очень в духе ',
        call_15,
        ', да и звучит так круто!',
      ]);
      if (era.get('cflag:15:殿堂') > 0) {
        await opera.say_and_wait(
          'Как же так? Чтобы под звёздами снова начистить свой блеск? Или развеять смятение после праздности?',
        );
        await urara.say_and_wait(
          'Вот оно что, Урара тоже понимает! У взрослых свои взрослые трудности~',
        );
      } else {
        await opera.say_and_wait(
          'Верно! Сиянием звёзд я отшлифую и красоту, и эти ноги! Ради завтрашнего блеска!',
        );
        await urara.say_and_wait([
          'Вот как, Урара поняла, такая старательная ',
          call_15,
          ' и правда такая молодец!',
        ]);
      }
      await urara.say_and_wait([
        'М-м… тогда, ',
        callname,
        ', время ещё есть, нам тоже попробовать?',
      ]);
      era.printButton('「Пойдём, попробуем вместе.」', 1);
      era.printButton('「Хорошо отдыхать тоже важно, знаешь?」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Услышав, как ',
          you.get_colored_name(),
          ' отзывается на слова ',
          urara.get_colored_name(),
          ', ',
          opera.get_colored_name(),
          ' тут же ловит настрой и щёлкает пальцами.',
        ]);
        await opera.say_and_wait([
          `Добро пожаловать! Но самый сияющий трон ${era.get('love:15') >= 90 ? ' и самых любимых приближённых' : ''} я тебе так просто не отдам — отбери изо всех сил!`,
        ]);
        await urara.say_and_wait([
          'М-м! Раз ',
          call_15,
          ' так говорит, то Урара тоже догонит изо всех сил!',
        ]);
        await opera.say_and_wait([
          'Ха—ха-ха-ха! Похоже, сегодняшняя пробежка будет очень интересной! Правда же, ',
          callname_15,
          '?',
        ]);
        await era.printAndWait([
          'И хотя, как и ожидалось, не удалось угнаться за ',
          opera.get_colored_name(),
          ', но ',
          urara.get_colored_name(),
          ' всё же упрямо продержалась до конца дополнительной тренировки.',
        ]);
      } else {
        await urara.say_and_wait([
          'Э? Правда? А Урара думала, ',
          callname,
          ' точно согласится?',
        ]);
        await era.printAndWait([
          'А когда ',
          urara.get_colored_name(),
          ' задаёт вопрос, следом ',
          opera.get_colored_name(),
          ' с пониманием уговаривает.',
        ]);
        await opera.say_and_wait(
          'Вот именно! Без отдыха даже сияние покроется тенью, я тоже — вчера нежась приняла ванну с лепестками роз!',
        );
        await urara.say_and_wait(
          'О! Поняла! Чтобы стать сильнее, буду хорошо отдыхать! Но… ванна с лепестками роз…?',
        );
        await era.printAndWait([
          'В итоге, когда ',
          opera.get_colored_name(),
          ' пообещала чуть позже поделиться, ',
          urara.sex,
          ' получит немного роз, и ',
          urara.get_colored_name(),
          ' тоже, помахав ',
          opera.get_colored_name(),
          ' на прощание, тянет за собой ',
          you.get_colored_name(),
          ' и бежит в столовую…',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {string} callname 春乌拉拉对玩家的称呼
   * @param {number} train 训练类型，0-5分别对应速度耐力力量根性智力
   */
  tf_message(urara, callname, train) {
    switch (train) {
      case attr_enum.speed:
        urara.say('Э? Почему здесь…? Не могу пошевелиться…');
        break;
      case attr_enum.endurance:
        urara.say('…ха, ха… го-голова кружится…');
        break;
      case attr_enum.strength:
        urara.say([
          'Смо-смотри, ',
          callname,
          ', на небе вроде маленькие звёздочки мигают…',
        ]);
        break;
      case attr_enum.toughness:
        urara.say([callname, '…потяни меня~~']);
        break;
      case attr_enum.intelligence:
        urara.say('Так спать хочется… гуэ…');
    }
  },
  train_fail: (() => {
    const title = 'Береги себя!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'Обнаружив, что ',
        urara.get_colored_name(),
        ' во время тренировки неважно себя чувствует, ',
        you.get_colored_name(),
        ' берёт с собой, и ',
        urara.sex,
        ' оказывается в медпункте на осмотре.',
      ]);
      await era.printAndWait(
        'Хотя в медпункте пока никого нет, к счастью, с обычным осмотром тренер справится и без помощи.',
      );
      await era.printAndWait([
        'Вот только всегда такая крепкая маленькая ',
        urara.uma_sex_title,
        ' всё же слегка беспечно принимает тревогу ',
        you.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([
        'Урара же в порядке, такая мелочь — ерунда, ',
        callname,
        ' вечно всё переживаешь.',
      ]);

      await urara.say_and_wait(
        'Не переживай, даже если нажать сюда, Урара не… ай, больно!',
      );
      era.printButton('「…А ведь правда больно?」', 1);
      era.printButton('「Может, всё-таки как следует отлежаться?」', 2);
      const ret = await era.input();

      await era.printAndWait([
        'Когда ',
        you.get_colored_name(),
        ' осторожно нажимает на подозрительно опухшее место на ноге, внезапно вскрикнувшая от боли маленькая ',
        urara.uma_sex_title,
        ' со слезами на глазах замирает.',
      ]);
      await urara.say_and_wait(
        'Ауу… п-почему ты так злишься? Я тебе говорю, мне правда совсем не больно…',
      );
      await era.printAndWait([
        'С обиженным видом смотрит на внезапно посерьезневшего ',
        you.get_colored_name(),
        ', ',
        urara.get_colored_name(),
        ' а в ещё полных слёз глазах — сплошное недоумение.',
      ]);
      await urara.say_and_wait(
        'Смотри! Даже если я вот так сделаю — вообще ничего… ай, больно!',
      );
      await era.printAndWait([
        'Снова хватает палец ноги, ушибленный из-за ',
        urara.get_colored_name(),
        ' бесшабашных пинков, ',
        you.get_colored_name(),
        ' протягивает палец и щёлкает маленькую ',
        urara.uma_sex_title,
        ' по лбу.',
      ]);

      era.printButton(
        '「Будешь ещё дёргаться — я правда рассержусь, ясно? Сломаешь тело — уже не победишь.»',
        1,
      );
      await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'После двух вспышек боли и предупреждения со стороны ',
          you.get_colored_name(),
          ', маленькая ',
          urara.uma_sex_title,
          ' непоседливые уши на макушке наконец уныло повисли.',
        ]);
        await urara.say_and_wait(
          '…уу, поняла… я буду осторожна! Нет же ничего, что меня поранит! Есть ли что-то болючее…',
        );
        await urara.say_and_wait([
          'Ах… ',
          callname,
          ', палец ноги вроде… ещё с того момента немного болит…',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' сразу по словам маленькой ',
          urara.uma_sex_title,
          ' поднимает её ногу — ',
          urara.sex,
          ' не противится — и, внимательно осмотрев, обнаруживает, что место, которое только что ушибли, тоже немного опухло…',
        ]);
        await era.printAndWait([
          'Заодно с ',
          urara.get_colored_name(),
          ' новой раной, обработав мазью и перевязав, ',
          you.get_colored_name(),
          ' даёт ',
          urara.sex,
          ' в этот день хорошенько отдохнуть.',
        ]);
      } else {
        await era.printAndWait([
          'Но даже если ',
          you.get_colored_name(),
          ' так говорит, маленькая ',
          urara.uma_sex_title,
          ' и без того непоседливый хвост мотается ещё сильнее.',
        ]);
        await urara.say_and_wait(
          '…поняла! И когда бегаю, и когда учусь — Урара впредь будет осторожна!',
        );
        await urara.say_and_wait(
          'Поэтому… можно нам продолжить тренировку? Если просто делать другую простую — уже не поранимся же!',
        );
        await urara.say_and_wait([
          'Потому что я тоже по-настоящему хочу первое место! Поэтому Урара хочет, чтобы ',
          callname,
          '  знал(а), что я буду хорошенько осторожна!',
        ]);
        await era.printAndWait([
          'Ладно, раз уж ',
          urara.sex,
          ' так говорит… ',
          you.get_colored_name(),
          ' вздыхает и, обработав ',
          urara.get_colored_name(),
          ' рану, осторожно возобновляет тренировку.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = 'Нельзя через силу!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (urara, you, callname, fail_again) => {
      await era.printAndWait([
        'Потому что ',
        urara.get_colored_name(),
        ' на тренировке нечаянно тяжело упала, поэтому ',
        you.get_colored_name(),
        ' сразу поднимает ',
        urara.sex,
        ' на руки и относит в медпункт.',
      ]);
      await era.printAndWait([
        'А после напряжённого осмотра, услышав, что ничего серьёзного, ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        ' тоже с облегчением выдыхают.',
      ]);
      await urara.say_and_wait(
        'Фух~ хорошо, что это просто обычная лёгкая травма, лицо врача выглядело супер страшно, я думала, заболела и будут укол ставить!',
      );
      await urara.say_and_wait(
        'Хе-хе~ да и укол больнее этого намного, а если только маленькие ранки — то ничего!',
      );

      await urara.say_and_wait([
        callname,
        ', когда вернёмся, можно продолжить тренировку—',
      ]);
      era.printButton('「Короче, сейчас сначала хорошенько отдохни.»', 1);
      era.printButton('「Нельзя через силу, сегодня иди отдыхать!»', 2);
      const ret = await era.input();
      await era.printAndWait([
        'И вот, глядя, как ',
        urara.sex,
        ' всё ещё немного неестественно идёт, ',
        you.get_colored_name(),
        ' не дожидаясь, пока ',
        urara.get_colored_name(),
        ' договорит, сразу отвергает просьбу, с которой обратилась ',
        urara.sex,
        '.',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(
          'Отдыхать? Но Урара же ещё полна сил, нельзя продолжить тренировку?',
        );

        era.printButton(
          '「Потому что как ни крути, всё равно же волнуюсь.»',
          1,
        );
        await era.input();

        await urara.say_and_wait(
          'Н-да… вот как, тогда поняла! Урара будет хорошенько отдыхать!',
        );
        await urara.say_and_wait([
          'Потому что когда вижу ',
          callname,
          '  в таком унынии, Ураре тоже очень грустно, так что не грусти, ладно?',
        ]);
        await urara.say_and_wait(
          'Просто хорошенько отдыхать… все тренируются, и всё кажется, что Урару оставили позади…',
        );
        await urara.say_and_wait(
          'Как подумаешь — всё тело чешется, отдых того и гляди такой же тяжёлый, как укол…',
        );
        await era.printAndWait([
          'Впрочем, хотя ',
          urara.get_colored_name(),
          ' и выглядит скучающей, но после этого ',
          urara.sex,
          ' и правда пошла на поправку: рана начала заживать.',
        ]);
      } else {
        await urara.say_and_wait([
          'Э? ',
          callname,
          '  п-почему вдруг злишься?',
        ]);

        era.printButton(
          '「…врач сказал, если рана ухудшится, будет больнее укола, ясно?»',
          1,
        );
        await era.input();

        await urara.say_and_wait(
          'Ну что ты, Урара уже не маленький ребёнок, даже если правда так больно — ничего же!',
        );
        if (fail_again) {
          await urara.say_and_wait([
            'И ещё ',
            callname,
            '  смотри! Урара даже вот так — вообще ничего— уаа!',
          ]);
          await urara.say_and_wait(['…б-больно… как больно… ', callname, '……']);
          await era.printAndWait([
            'Что я говорил(а)? Поднимает начавшую вытирать слёзы маленькую ',
            urara.uma_sex_title,
            ', ',
            you.get_colored_name(),
            ' молча снова тащит ',
            urara.sex,
            ' обратно в медпункт неподалёку.',
          ]);
          await era.printAndWait([
            'Как и следовало ожидать, ',
            urara.get_colored_name(),
            ' из-за того, что через силу дёргалась, рана ухудшилась, и время восстановления стало ещё дольше.',
          ]);
        } else {
          await urara.say_and_wait([
            '…н? ',
            callname,
            '? почему вдруг молчишь? н-неужели правда так серьёзно…?',
          ]);

          era.printButton(
            '「А как же считает Урара, которая не маленький ребёнок?»',
            1,
          );
          await era.input();

          await urara.say_and_wait(
            'Как так! Хотя отдыхать очень скучно… но больнее укола… ещё больнее укола…',
          );
          await urara.say_and_wait([
            urara.get_colored_name(),
            ' сразу поправлюсь! Поэтому пока не смогу бегать… ',
            callname,
            '  можно всё время быть со мной…?',
          ]);
          await era.printAndWait([
            'И вот, хотя у ',
            urara.get_colored_name(),
            ' рана заживала немало времени, но ',
            urara.sex,
            ' всё-таки поправилась.',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = 'Ободрение перед скачкой';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, callname) => {
      const buffer = [
        () => urara.say_and_wait('Хорошо! Пора на скачку──!'),
        () =>
          urara.say_and_wait(
            'Все такие сильные! Тогда Урара тоже не должна проиграть!',
          ),
        () =>
          urara.say_and_wait(
            `${callname}!В этот раз тоже хорошенько смотри на мой бег!`,
          ),
        () => urara.say_and_wait('Надо просто бежать как всегда, да? Поняла!'),
        () =>
          urara.say_and_wait(
            `Не волнуйся, ${callname}, если бежать изо всех сил, обязательно получится!`,
          ),
      ];
      switch (era.get('cflag:52:干劲')) {
        case -1:
          buffer.push(() =>
            urara.say_and_wait(
              'Хоть и весело бежать столько скачек, тело сейчас такое тяжёлое…',
            ),
          );
          break;
        case -2:
          buffer.push(() =>
            urara.say_and_wait('Опять скачка… Я, я постараюсь…'),
          );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_high_moti: (() => {
    const title = 'Боевой трепет';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait(['О——! ', callname, '!Сегодня я полна сил!']);
      await era.printAndWait([
        'Стоя у ',
        you.get_colored_name(),
        ' сбоку, ',
        urara.get_colored_name(),
        ' возбуждённо смотрит вперёд.',
      ]);

      era.printButton('「Тогда сейчас выложусь по полной!»', 1);
      era.printButton('「Ага, пусть все увидят, как ты выросла.»', 2);
      await era.input();

      await urara.say_and_wait('Хорошо! Ожидания всех обязательно оправдаю!');
      await era.printAndWait([
        urara.get_colored_name(),
        ' возбуждённо прыгает вперёд и мчится на скаковое поле.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'Победа в скачке!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      let buffer = [
        () =>
          urara.say_and_wait(
            `А? Э… Здорово! Победила! ${callname}!Видел(а)? Я победила!`,
          ),
        () =>
          urara.say_and_wait(
            'Ваа…! Я взяла первое место! Я правда взяла первое место!',
          ),
        () =>
          urara.say_and_wait(
            'У меня получилось! Первое место — значит, ожидания всех дошли!',
          ),
        () =>
          urara.say_and_wait(
            `${callname}!Видел(а)? Я только что вжух—— пронеслась через финиш!`,
          ),
        () =>
          urara.say_and_wait(
            `Как и думала, достаточно бежать как всегда! В этот раз я тоже победила, ${callname}!`,
          ),
        () =>
          urara.say_and_wait(
            'Получилось… У меня получилось! Правда получилось!',
          ),
      ];
      await get_random_entry(buffer)();
      era.drawLine();
      await era.printAndWait([
        'Смахнув пот с лица, ',
        urara.get_colored_name(),
        ' сразу после скачки рысцой несётся к ограде, перед которой ',
        you.get_colored_name(),
        ' ждёт.',
      ]);
      await era.printAndWait([
        'В ликовании толпы поднимает залитое солнцем личико, маленькая ',
        urara.uma_sex_title,
        ' к тому, кто протянул полотенце и воду, ',
        you.get_colored_name(),
        ' показывает победную улыбку.',
      ]);
      await urara.say_and_wait(
        'Хе-хе～ Кажется, дяденьки даже кричали «ура», Урара правда такая крутая?',
      );

      await urara.say_and_wait([
        'Кстати, ',
        callname,
        '!Только что видел(а)? Урара вроде победила!',
      ]);
      era.printButton('「Точно, Урара справилась, сегодня первое место!»', 1);
      era.printButton('「Все рады, да? Но дальше есть дело поважнее!»', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          'Получив от ',
          you.get_colored_name(),
          ' одобрение, ',
          urara.get_colored_name(),
          ' радостно трясёт ушами и хвостом, милая улыбка становится ещё ярче.',
        ]);
        await urara.say_and_wait(
          'Так и есть! Тогда ради улыбок всех в следующий раз тоже обязательно возьму первое место!',
        );
        await urara.say_and_wait([
          callname,
          ' тоже! Потому что сейчас у ',
          callname,
          ' улыбка тоже очень красивая!',
        ]);
        await era.printAndWait(
          'В сияющих после победы вишнёвых глазах сейчас с улыбкой отражаются улыбки всех.',
        );
      } else {
        await era.printAndWait([
          'Быстро вытерев пот с лица, ',
          urara.get_colored_name(),
          ' сильно поднимает уши, и улыбка на лице становится ещё решительнее.',
        ]);
        await urara.say_and_wait(
          'Ага! Я тоже так думаю! Потому что Урара ещё мало пробежала!',
        );
        await urara.say_and_wait([
          callname,
          ', какую скачку бежать дальше — можно Ураре чуть-чуть предвкушать?',
        ]);
        await era.printAndWait([
          'В сияющих после победы вишнёвых глазах ',
          you.get_colored_name(),
          ' видит, что огонёк в них сильнее, чем прежде.',
        ]);
      }
      era.drawLine();
      buffer = [
        () =>
          urara.say_and_wait(
            `Live начинается! ${callname} ждёшь? Я тоже очень жду!`,
          ),
        () =>
          urara.say_and_wait(
            'Потом обязательно смотри на меня! Я тоже буду стараться танцевать!',
          ),
        () =>
          urara.say_and_wait('Все вроде уже готовы! Я тоже разволновалась!'),
      ];
      if (era.get('love:52') >= 75) {
        buffer.push(() =>
          urara.say_and_wait(
            `Я тоже не уступлю всем! Обязательно, обязательно как следует очарую ${callname} !`,
          ),
        );
      }
      if (era.get('love:52') === 100) {
        buffer.push(() =>
          urara.say_and_wait(
            `${callname}!Потом на сцене тоже всё время смотри на Урару!`,
          ),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'Финиш в призах!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {number} rank 比赛名次
     */
    const f = async (urara, you, callname, rank) => {
      const buffer = [
        () =>
          urara.say_and_wait(
            'Все такие сильные! Но в следующий раз я точно не проиграю!',
          ),
        () =>
          urara.say_and_wait(
            'Хоть первое место не взяла, но как же весело! В следующий раз снова побежим!',
          ),
        () =>
          urara.say_and_wait(
            `Хе-хе～ В этот раз первое место не взяла, я буду стараться дальше, ${callname} тоже не грусти!`,
          ),
      ];
      switch (rank) {
        case 2:
          buffer.push(() =>
            urara.say_and_wait(`Видел(а), ${callname}!Я ведь вторая──!`),
          );
          break;
        case 3:
          buffer.push(() => urara.say_and_wait('Я третья! Круто, да?'));
      }
      await get_random_entry(buffer)();
      await era.printAndWait([
        'Под поздравления всех, ',
        urara.get_colored_name(),
        ' всё ещё с улыбкой быстрым шагом бежит к ограде, у которой ',
        you.get_colored_name(),
        ' стоит.',
      ]);
      await urara.say_and_wait(
        'Хе-хе～ Скачки со всеми и правда весёлые, и правда чувствуется, что стала сильнее!',
      );
      await urara.say_and_wait(
        'Хотя нынешней Ураре до первого места всё же ещё далековато…',
      );

      await urara.say_and_wait([
        callname,
        ' как думаешь? В этот раз совсем чуть-чуть не хватило!',
      ]);
      era.printButton('「Молодец, Урара, ты и так отлично справилась.»', 1);
      era.printButton('「Сначала отдохни, как ощущения в этот раз?»', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait([
          'Спасибо, ',
          callname,
          '!Но в этот раз всё равно как-то жаль, где не хватило?',
        ]);
        await urara.say_and_wait(
          'Но если стараться в таком же ритме, в следующий раз я, наверное, смогу взять первое место!',
        );
      } else {
        await urara.say_and_wait(
          'В этот раз бежать было весело! И я понемногу догоняю всех, но ещё чуть-чуть не хватает!',
        );
        await urara.say_and_wait([
          'Но сейчас спрашивать у ',
          callname,
          ' её мнение вроде рановато, тогда после возвращения?',
        ]);
      }
      era.printButton(
        '「Вот так. Когда вернёмся, вместе подумаем, что делать в следующий раз.」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Ага! Поняла! Урара тоже будет стараться ещё сильнее — ради первого места в следующий раз!',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = 'Поражение в скачках!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      const buffer = [
        () =>
          urara.say_and_wait(
            'Все такие сильные! Но в следующий раз я точно не проиграю!',
          ),
        () =>
          urara.say_and_wait(
            'Хоть первое место и не взяла, всё равно было очень весело! В следующий раз снова побежим!',
          ),
        () =>
          urara.say_and_wait(
            `Хе-хе～ в этот раз первое место не взяла, буду и дальше стараться, ${callname} тоже не грусти!`,
          ),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait([
        'Пошатываясь подходит к ',
        you.get_colored_name(),
        ', неясно, не от усталости ли, у ',
        urara.get_colored_name(),
        ' улыбка, вся в поту, кажется чуть натянутой.',
      ]);
      await urara.say_and_wait(
        'В итоге опять проиграла… как-то даже неловко стало…',
      );
      await urara.say_and_wait(
        'Только подумала: 『Сегодня все такие быстрые～』, и в следующий миг меня обогнали!',
      );
      await urara.say_and_wait(
        'Но я тоже слышала, да? Крик поддержки Урары так и не смолкал!',
      );

      await urara.say_and_wait(
        'Я до финиша добежала изо всех сил, но ответила ли Урара на ожидания всех…',
      );
      era.printButton(
        '「Не унывай, на самом деле в этот раз вышло неплохо.」',
        1,
      );
      era.printButton('「В следующий раз ответь им результатом.」', 2);
      await era.input();

      await era.printAndWait([
        'С помощью ',
        you.get_colored_name(),
        ' вытирает полотенцем пот с лица, маленькая ',
        urara.uma_sex_title,
        ' и под ободрение ',
        you.get_colored_name(),
        ' энергично кивает.',
      ]);
      await urara.say_and_wait(
        'Верно! Всего одно поражение, если можно бежать дальше — всё в порядке, в следующих скачках надо постараться победить!',
      );
      await era.printAndWait([
        'Перед следующей скачкой ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        ' дают обещание「в следующий раз обязательно всех обогнать」.',
      ]);
      await urara.say_and_wait(
        'Хе-хе～ все говорят, что привыкать к поражениям — нехорошо, но Урара всё равно может бежать дальше!',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = 'В следующий раз не проиграю!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait(
        'Бежать так весело, но всё-таки немного досадно…',
      );

      await era.printAndWait([
        'Уныло льнёт к ',
        you.get_colored_name(),
        ', а сегодняшняя ',
        urara.get_colored_name(),
        ' будто из-за поражения в скачках потеряла прежнюю улыбку.',
      ]);
      await urara.say_and_wait(
        'Урара опять проиграла… а я думала, в этот раз точно всё получится…',
      );
      await urara.say_and_wait(
        'Скачки — это весело, но чувство, когда берёшь первое место, всё-таки другое!',
      );
      await urara.say_and_wait(
        'В груди и жарко, и тесно… если б можно было пробежать ещё раз…',
      );

      urara.say([callname, ', а как в такой момент выиграть?']);
      era.printButton(
        '「Соберись с духом и в следующий раз отыграй эту досаду.」',
        1,
      );
      era.printButton(
        '「Не спеши, в общем, как вернёмся — сразу к тренировке.」',
        2,
      );
      if ((await era.input()) === 1) {
        await urara.say_and_wait(
          'Ага! Надо просто превратить расстройство в боевой дух — все так говорят!',
        );
        await urara.say_and_wait([
          'Пока не выиграем — ни за что нельзя расслабляться! ',
          callname,
          ' давай тоже вместе править плохие привычки!',
        ]);
        await era.printAndWait([
          'В итоге по возвращении, чтобы следить друг за другом, у ',
          you.get_colored_name(),
          ' лакомства тоже урезала ',
          urara.get_colored_name(),
          '.',
        ]);
      } else {
        await urara.say_and_wait(
          'И правда, если начать стараться сейчас, в следующий раз точно можно выиграть!',
        );
        await urara.say_and_wait([
          'Так что ',
          callname,
          ', давай скорее назад! Если поспешим, может, ещё и сегодня продолжим тренировку?',
        ]);
        await era.printAndWait([
          'В итоге по возвращении ',
          urara.get_colored_name(),
          ' и правда сразу тащит ',
          you.get_colored_name(),
          ' на дополнительную тренировку.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  we_after_begin: (() => {
    const title = 'Контакт Урары';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await inner_urara.say_as_unknown_and_wait(
        'С этой точки история начинается по-настоящему.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Это будет история, которую вы напишете вместе с нами. Ваша и наша история.',
      );
      era.drawLine();
      await era.printAndWait([
        'Приведя в порядок одежду и сдержав волнение, ',
        you.get_colored_name(),
        ' с напускной лёгкостью выходит на Тренировочное поле.',
      ]);
      await era.printAndWait(
        'На раннем этапе контакта с новой подопечной нужна особая осторожность.',
      );
      await era.printAndWait(
        'Поначалу звучит как преувеличение, но среди тренеров это важный опыт, что передают из уст в уста.',
      );
      await era.printAndWait(
        'В учебниках такого не пишут, но логика почти как у смотрин: в начале общения оставить о себе хорошее впечатление — очень важный шаг.',
      );
      await era.printAndWait(
        'Если посторонний спросит, не слишком ли опасно сравнивать「общение с ученицей」со「смотринами」, все отвечают одно и то же:',
      );
      await era.printAndWait([
        'Общение с неспокойной, созревшей в пубертате ',
        urara.uma_sex_title,
        ' в социальном смысле опасно, словно ходьба по канату.',
      ]);
      await era.printAndWait([
        'Впрочем, судя по расслабленной походке на учебную площадку, на этот раз ',
        you.get_colored_name(),
        ' считает, что беспокоиться не о чем.',
      ]);
      await era.printAndWait([
        'Ведь даже если ',
        you.get_colored_name(),
        ' потом и пожалеет, поняв, в чём дело, — это уже другая история.',
      ]);
      await era.printAndWait([
        '「Наивная и беззаботная маленькая ',
        urara.uma_sex_title,
        ' в погоне за чистой мечтой», что опасного в таком воодушевляющем раскладе?',
      ]);
      await era.printAndWait([
        'К тому же ',
        urara.get_colored_name(),
        ' тоже страстно хочет「взять первое место」 — ',
        urara.sex,
        ' наверняка будет полна задора и станет усердно тренироваться!',
      ]);
      await era.printAndWait([
        'С горячим желанием помочь той, кого зовут「',
        urara.get_colored_actual_name(),
        ' », маленькая ',
        urara.uma_sex_title,
        ' осуществить желание, ',
        you.get_colored_name(),
        ' приходит на условленное место.',
      ]);
      await era.printAndWait('Хотя намерения были хорошими…');
      await urara.say_and_wait([
        'А, это ',
        callname,
        '! С сегодняшнего дня прошу любить и жаловать!',
      ]);
      await era.printAndWait([
        'Припозднившаяся, но полная энергии, ',
        urara.get_colored_name(),
        ' с милой улыбкой машет рукой и останавливается у ',
        you.get_colored_name(),
        '.',
      ]);

      era.printButton('「С сегодняшнего дня давай стараться вместе!」', 1);
      await era.input();

      await urara.say_and_wait('Ага! Урара начинает!');
      await era.printAndWait([
        'Сделав разминку, ',
        urara.get_colored_name(),
        '  начала сегодняшнюю тренировку, но…',
      ]);
      await urara.say_and_wait([callname, '!Тут такая красивая бабочка!']);
      await you.say_and_wait('А, правда… хм?');
      await urara.say_and_wait([
        callname,
        '!Вон то облако разве не на что-то похоже?',
      ]);
      await you.say_and_wait('О! Подожди, это не…');
      await urara.say_and_wait([
        callname,
        '!Вон в воде такая большая-пребольшая рыба!',
      ]);
      await you.say_and_wait('Стоп, это вообще что за ерунда?');
      await era.printAndWait([
        urara.get_colored_name(),
        '  сбитый(ая) с ритма ',
        you.get_colored_name(),
        ', несколько секунд смотрит на своё отражение в воде и наконец приходит в себя.',
      ]);
      await era.printAndWait(
        'Сейчас… какой это круг? Нет, стоп — почему вы двое вообще у реки?',
      );
      await era.printAndWait(
        'Сначала же были на Тренировочном поле Трейсена? Что случилось-то… не вспомнить?!',
      );
      await era.printAndWait([
        'Растерянно смотришь на уже ушедшее на запад солнце и косишься на прыгнувшую в реку за рыбой ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        '  и беспомощно вздыхает.',
      ]);
      await era.printAndWait([
        'Затем уже гнавшийся(аяся) за ',
        urara.get_colored_name(),
        '  целый день ',
        you.get_colored_name(),
        '  бросает думать и присоединяется к шалостям подопечной.',
      ]);
      await era.printAndWait([
        'Всё равно о тренировке уже не поговоришь — так лучше просто получать удовольствие. ',
        you.get_colored_name(),
        '  так смиренно думает.',
      ]);

      await era.printAndWait(
        'Потратив в шалостях целый день 「прекрасного времени」, тренер и подопечная вместе повалились на траву под собой.',
      );
      await urara.say_and_wait([
        'Ну… кажется, я забыла какую-то важную штуку! Прости, ',
        callname,
        '!',
      ]);
      await era.printAndWait([
        'Приподнимается с травы, ',
        urara.get_colored_name(),
        '  наконец что-то вспоминает, но глядя на маленькую ',
        urara.uma_sex_title,
        ' — вялую реакцию, ',
        you.get_colored_name(),
        '  только и улыбается.',
      ]);
      await era.printAndWait(
        'Спешить-то в общем некуда, к тому же это только первый день настоящего знакомства — пусть будет частью того, чтобы узнать друг друга лучше.',
      );
      await era.printAndWait('Но делом всё равно надо заниматься.');
      await era.printAndWait([
        'Вместе с ',
        urara.get_colored_name(),
        '  сидит на траве под закатом, ',
        you.get_colored_name(),
        '  обращается к глядящей на алую зарю маленькой ',
        urara.uma_sex_title,
        ' с вопросом:',
      ]);

      era.printButton(
        '「Урара, в чём корень твоего желания взять первое место?»',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '  не из тех, кто только говорит. Всё, что ',
        urara.child_sex_title,
        ', ',
        urara.sex,
        ' делает, — искренние поступки.',
      ]);
      await era.printAndWait([
        'Отсутствие таланта понять можно, жажда бежать очевидна, но сейчас трудно увидеть, как ',
        urara.sex,
        ' стремится к 「победе」.',
      ]);
      await era.printAndWait([
        'Обычно, хоть и не принято делать первое место смыслом ',
        urara.uma_sex_title,
        ' всей жизни, но выбравшие 「победу」 ',
        urara.uma_sex_title,
        ' часто сильно помешаны на первом месте.',
      ]);
      await era.printAndWait([
        'Но у ',
        urara.get_colored_name(),
        '  этого как будто не видно — или, скорее, ',
        urara.sex,
        ' хранит в сердце что-то поважнее первого места.',
      ]);
      await era.printAndWait([
        'Тогда что же важнее? Хоть и неясно, насколько ',
        urara.get_colored_name(),
        '  понимает себя, но с установкой «попробуем», ',
        you.get_colored_name(),
        '  всё равно задаёт вопрос в лоб.',
      ]);
      era.printButton('「Урара, ты что, не любишь первое место?»', 1);
      await era.input();
      await era.printAndWait([
        'Не отвечая прямо на вопрос взрослого, маленькая ',
        urara.uma_sex_title,
        ' напротив, бросает ',
        you.get_colored_name(),
        '  другой вопрос в ответ.',
      ]);
      await urara.say_and_wait([callname, ', тебе сейчас весело?']);
      await era.printAndWait([
        'Хм? После совместных игр и правда весело, но это…? Не дожидаясь ',
        you.get_colored_name(),
        ' — ответа, маленькая ',
        urara.uma_sex_title,
        ' продолжает с улыбкой:',
      ]);
      await urara.say_and_wait(
        'Знаю, что я слабая, но всё равно хочу бегать! Раз так — цель точно первое место!',
      );
      await era.printAndWait([
        'Чуть прислоняется к ',
        you.get_colored_name(),
        '  сбоку, ',
        urara.get_colored_name(),
        '  светло улыбается, ',
        urara.teen_sex_title,
        ' — в похожих на сакуру глазах отражается нежная алая заря.',
      ]);
      await urara.say_and_wait(
        'Просто хоть и очень хочется много первых мест, но если забыть важное, сколько ни бери первых — смысла не будет!',
      );

      era.printButton('「Про причину бегать?»', 1);
      await era.input();

      await urara.say_and_wait(
        'Ага! Потому что я хочу бегом дарить всем улыбки!',
      );
      await urara.say_and_wait(
        'Вот только Урара не нарочно от тренировки бегает! Просто отвлечёшься — и уже не вспомнишь, что ещё тренировка…',
      );
      await era.printAndWait([
        'Вот оно что, по имени 「',
        urara.get_colored_actual_name(),
        ' 」 ',
        urara.uma_sex_title,
        ' неожиданно малость хлопотная, но к счастью ',
        urara.sex,
        ' отлично знает, чего хочет.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '  одержимость первым местом лежит не в самой спортивной победе.',
      ]);
      await era.printAndWait([
        'Не то чтобы не жаждала победы, но для ',
        urara.get_colored_name(),
        '  победа не так важна, как сам бег, и это одна из главных причин, почему ',
        urara.sex,
        ' так трудна в тренировках:',
      ]);
      await era.printAndWait([
        'Бег должен быть в радость, так что даже без особого таланта ',
        urara.sex,
        ' всё равно может спокойно улыбаться.',
      ]);
      await era.printAndWait([
        urara.sex,
        'Не только чтобы, как большинство, 「доказать себя」 или 「плыть по течению」, а чтобы наделить всех за оградой ещё большей гаммой чувств.',
      ]);
      await era.printAndWait(
        'Например радость, например надежду, например трепет первой встречи с измученным незнакомцем.',
      );
      await era.printAndWait(
        'Но одна лишь направленность чувств вовне очень 「опасна」, даже долг тренера помочь подопечной победить приходится отложить:',
      );
      await era.printAndWait(
        'Хоть мысль и хороша, но если дух недостаточно 「стойкий」, однажды ранят — чужие или даже свои перемены, нарочно или нет.',
      );
      await era.printAndWait([
        'А при ',
        urara.get_colored_name(),
        ' — нынешнем положении без полной выкладки мест не взять, так дальше бежать трудно.',
      ]);
      await era.printAndWait([
        'Невнимательность и трёхминутный запал — одна сторона, с другой нужно пробудить ',
        urara.get_colored_name(),
        '  полный дух соперничества — иначе никак.',
      ]);
      await era.printAndWait('В таком случае…');

      era.printButton(
        '「Ясно, чего хочет Урара: составлю подходящую ей программу тренировок.」',
        1,
      );
      await era.input();

      await era.printAndWait(
        'И правда: чтобы наверняка, лучше составить план с нуля.',
      );
      await urara.say_and_wait(
        'Прямо как фирменный приём главного героя манги?',
      );

      era.printButton(
        '「Верно, как фирменный приём главного героя манги!」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Ага! Урара тоже ждёт! Я буду внимательно слушать ',
        callname,
        ' — слова!',
      ]);
      await era.printAndWait([
        'Увидев, как ',
        callname,
        '  серьёзно поднимает большой палец, ',
        urara.get_colored_name(),
        '  тоже искренне улыбается в ответ.',
      ]);
      await era.printAndWait([
        'Как хорошо, эта чистота без дистанции, только вот ',
        urara.sex,
        ' так доверяет едва знакомому человеку — разве всё в порядке?',
      ]);
      await era.printAndWait([
        'Похоже, впредь как следует заботиться, чтобы ',
        urara.sex,
        ' была в порядке, — это, пожалуй, тоже войдёт в распорядок.',
      ]);
      await era.printAndWait([
        'Что до выполнения плана, лишь бы больше не дать ',
        urara.get_colored_name(),
        '  утащить за собой в бег — проблем быть не должно; дальше бы всё шло гладко—?',
      ]);
      await era.printAndWait([
        'Взгляд по инерции мысли скользнул в сторону: сняв мокрую спортивную куртку, маленькая ',
        urara.uma_sex_title,
        ' мирно прислоняется к ',
        you.get_colored_name(),
        '  сбоку.',
      ]);
      await era.printAndWait([
        urara.sex,
        'А под рубашкой, намокшей в воде до полупрозрачности, прямо просвечивает то хрупкое, но полное здоровой плоти тело…',
      ]);
      await era.printAndWait([
        'Но ещё не успев ощутить маленькая ',
        urara.uma_sex_title,
        ' — влажное тепло, ',
        you.get_colored_name(),
        '  в ужасе осознаёт, что что-то не так.',
      ]);

      era.printButton('「Урара, а твоё… это самое?」', 1);
      await era.input();

      await era.printAndWait([
        'В ',
        you.get_colored_name(),
        '  дрожащем голосе, ',
        urara.get_colored_name(),
        '  с лёгким недоумением опускает взгляд на свою нежно-розовую грудь, с которой сквозь одежду просвечивает цвет кожи.',
      ]);
      await era.printAndWait([
        'Подняв голову и подумав, маленькая ',
        urara.uma_sex_title,
        ' словно наконец что-то вспомнив, прозревает и к притихшему ',
        you.get_colored_name(),
        '  показывает слегка застенчивую улыбку.',
      ]);
      await urara.say_and_wait([
        'А! Прости, ',
        callname,
        '!Когда сегодня выходила, я забыла надеть бельё!',
      ]);
      await era.printAndWait('За-забыла надеть? И ещё так прямо сказала?!');
      await urara.say_and_wait([
        'Кажется, обе забыла, эх-хе-хе~… Хотя утром маленькая Кинг Хало ещё напоминала мне не быть такой рассеянной, прости!',
      ]);
      await era.printAndWait([
        'Перед такой беспечной маленькой ',
        urara.uma_sex_title,
        ', ',
        you.get_colored_name(),
        '  совершенно теряет дар речи.',
      ]);
      await era.printAndWait([
        'Избегая маленькая ',
        urara.uma_sex_title,
        ' всё плотнее прижимающегося тела и слегка недоумённой улыбки, ',
        you.get_colored_name(),
        '  печально смотрит на закат, в глазах сплошь ',
        urara.get_colored_name(),
        ' — тревога.',
      ]);
      await era.printAndWait([
        'С ',
        urara.get_colored_name(),
        '  общее будущее во всех отношениях — долгий путь с тяжёлой ношей…',
      ]);

      if (era.get('cflag:61:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'Впрочем, как ',
          urara.get_colored_name(),
          ' — соседке по комнате ещё и исполнять работу 「мамы」: Кинг Хало и правда несладко…',
        ]);
        await era.printAndWait([
          'Но, может, там, где ',
          urara.sex,
          ', можно разузнать полезные для ',
          urara.get_colored_name(),
          '  тренировок сведения — тоже ведь может быть?',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'Короче, с маленькая ',
        urara.uma_sex_title,
        ' время общего пути наконец пришло в движение.',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');

      await inner_urara.say_as_unknown_and_wait(
        'Итак, каково вам официально начать ладить с 『Урарой』?',
      );
      era.printButton(
        `「Этой ставки ${urara.sex} стоит: так я хочу ей отплатить — ${urara.sex} это заслужила.」(расположение+20)`,
        1,
      );
      era.printButton(
        '「Ещё мало знаю, но это ощущение беззащитного зверька неожиданно мило.」(влюблённость+5)',
        2,
      );
      const ret = await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Вот как, понятно. Хотя не мне это говорить, но поверьте мне…',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Всякое начало трудно, так что впредь, пожалуйста, сохраняйте ',
        urara.sex,
        ' — терпение и веру.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Пусть и не ярка, но если будет расти всерьёз, то даже маленький цветок у стены весной сможет распуститься.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_after_begin: (() => {
    const title = 'Тренировки в стиле Урары';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {CharaTalk} spe 特别周
     * @param {PrintedSpan} sp_call_u 特别周对春乌拉拉的称呼
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} sky 青云天空
     * @param {PrintedSpan} callname_20 青云天空对玩家的称呼
     * @param {PrintedSpan} sk_call_u 青云天空对春乌拉拉的称呼
     * @param {CharaTalk} rice 米浴
     * @param {PrintedSpan} ri_call_u 米浴对春乌拉拉的称呼
     * @param {CharaTalk} doto 名将怒涛
     * @param {PrintedSpan} d_call_u 名将怒涛对春乌拉拉的称呼
     * @param {CharaTalk} halo 圣王光环
     * @param {PrintedSpan} h_call_u 圣王光环对春乌拉拉的称呼
     * @param {CharaTalk} road 成田路
     * @param {PrintedSpan} ro_call_u 成田路对春乌拉拉的称呼
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      {
        spe,
        sp_call_u,
        opera,
        sky,
        callname_20,
        sk_call_u,
        rice,
        ri_call_u,
        doto,
        d_call_u,
        halo,
        h_call_u,
        road,
        ro_call_u,
      },
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        'Наблюдая за бегом Урары, тренер ',
        you.adult_sex_title,
        ' (вы) всё ещё обдумывает ',
        urara.sex,
        ' персональный план тренировок.',
      ]);
      era.drawLine();
      await urara.say_and_wait(['Эй-эй! ', callname, '!глянь туда——']);

      era.printButton('「Сейчас ещё тренировка, ну?」', 1);
      await era.input();

      await urara.say_and_wait('Прости! Тогда я ещё кружок пробегу!');
      await era.printAndWait([
        'Глядя, как подопечная снова уходит в тренировку, ',
        you.get_colored_name(),
        '  продолжает разбирать у маленькая ',
        urara.uma_sex_title,
        ' модель поведения.',
      ]);
      await era.printAndWait([
        'Побыв с ',
        urara.get_colored_name(),
        '  какое-то время на тренировках, ',
        you.get_colored_name(),
        '  постепенно прощупывает часть того, из чего складывается ',
        urara.sex,
        ' нынешнее положение.',
      ]);
      await era.printAndWait([
        'Во-первых, ',
        urara.sex,
        ' очень непостоянна, но и нехватка сосредоточенности тоже оттого, что ',
        urara.sex,
        ' такая по характеру, и именно поэтому…',
      ]);
      await urara.say_and_wait([callname, ', у всех здесь вроде есть——']);

      era.printButton('「Кхм-кхм.」', 1);
      await era.input();

      await urara.say_and_wait(
        'Прости! Тут ещё тренировка, давай в другой раз поболтаем!',
      );
      await era.printAndWait([
        'Вот так: стоит только голосом её одёрнуть — и ',
        urara.sex,
        ' сразу кается, но тут же отвлекается, утянутая чем-то поинтереснее.',
      ]);
      await era.printAndWait(
        'Каждый день так — урывками, и соревновательного духа не хватает; так тренировки эффекта не дадут.',
      );
      await era.printAndWait([
        'На самом деле, когда ',
        you.get_colored_name(),
        ' специально расспросил(а) знакомых с ',
        urara.get_colored_name(),
        ' близких ',
        urara.uma_sex_title,
        ', ',
        urara.couple_title,
        ' — ответы тоже оказались не слишком похожими.',
      ]);
      era.println();

      const buffer = gacha(
        [
          () =>
            halo.say_and_wait([
              'Цель быть в числе лучших — хорошо, но ',
              h_call_u,
              ' не может стабильно тренироваться — ',
              urara.sex,
              ' самой себе тоже нехорошо, верно?',
            ]),
          () =>
            sky.say_and_wait([
              'А-а~ я поняла, ',
              callname_20,
              ' в последнее время из-за ',
              sk_call_u,
              ' — дурных привычек совсем замучило, да?',
            ]),
          () =>
            spe.say_and_wait([
              sp_call_u,
              ' — принесённая морковь очень вкусная! Просто часто такая рассеянная, что забывает, куда отдала.',
            ]),
          () =>
            rice.say_and_wait([
              'Э? ',
              ri_call_u,
              ' — хоть бегать очень любит, в настроении всегда чуть не хватает терпения…',
            ]),
          () =>
            road.say_and_wait([
              ro_call_u,
              ' очень крутая… короче, просто очень крутая! Просто с учёбой немного не лады!',
            ]),
          () =>
            opera.say_and_wait(
              'Н-н~ цветок привередливо вбирает питание, но оставаться бутоном — тоже ведь своего рода нерешительность, так?',
            ),
          () =>
            doto.say_and_wait([
              d_call_u,
              ' всегда готова помочь мне разгрести хлопоты, хотя иногда становится ещё хлопотнее…',
            ]),
        ],
        3,
      );
      for (const talk of buffer) {
        await talk();
      }
      era.println();

      await era.printAndWait([
        'Даже среди одноклассников ',
        urara.get_colored_name(),
        ' — всякие мелкие слабости тоже на слуху.',
      ]);
      await era.printAndWait([
        'И в теории достаточно удовлетворить ',
        urara.get_colored_name(),
        ' — 「интересное」, и всё — но что тогда туда включать…',
      ]);
      await era.printAndWait([
        'Похоже, воображения всё же не хватает. Чтобы придумать решение, сейчас важнее всего получше узнать ',
        urara.get_colored_name(),
        ' — иначе никак.',
      ]);
      await era.printAndWait([
        'Сложив купленное необходимое в пакет, ',
        you.get_colored_name(),
        ' задумчиво направился(ась) в следующий магазин на торговой улице.',
      ]);
      await urara.say_and_wait([
        'А, ',
        callname,
        '!Добро пожаловать! Тут яблоки — супервкусные! Может, взять несколько?',
      ]);

      era.printButton('「М-м? Урара? Ты… здесь помогаешь?»', 1);
      await era.input();

      await urara.say_and_wait(
        'Ага! Как есть свободное время — всегда прихожу сюда помогать! Так весело!',
      );
      await era.printAndWait([
        'Поверх школьной формы просто повязав фартук, ',
        urara.get_colored_name(),
        ' сияя улыбкой, подошла ближе.',
      ]);

      const relation = era.get('relation:52:0');
      if (relation > 150) {
        await urara.say_and_wait([
          callname,
          ' попробуешь? Ничего, дядя-хозяин уже разрешил!',
        ]);
        await era.printAndWait([
          'Не давая сказать ни слова, выбрала самое большое яблоко и сунула в ',
          you.get_colored_name(),
          ' — руку, ',
          urara.get_colored_name(),
          ' кажется, намекает попробовать прямо сейчас.',
        ]);
        await era.printAndWait([
          'На только что вымытом плоде блестят прозрачные капли, гладкая кожица отражает ',
          urara.get_colored_name(),
          ' — ещё более наливное и милое, чем яблоко, личико.',
        ]);
        await urara.say_and_wait(
          'Сегодняшние яблоки дядя-хозяин рекомендовал, точно сладкие, я могу поручиться!',
        );
      } else {
        await urara.say_and_wait([
          'Тут для ',
          callname,
          ' можно чуть уступить, да? Конечно, дядя-хозяин уже разрешил!',
        ]);
        await era.printAndWait([
          'Хоть улыбка на лице настоящая, ',
          urara.get_colored_name(),
          ' — в словах всё же чувствуется какая-то отстранённость.',
        ]);
        await era.printAndWait([
          'Но даже так ',
          urara.sex,
          ' всё равно достала большое яблоко и сунула в ',
          you.get_colored_name(),
          ' — руку.',
        ]);
        await urara.say_and_wait([
          'Если никак не выбрать, ',
          callname,
          ' можно сначала попробовать, да? Очень вкусно!',
        ]);
      }
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        'О, добро пожаловать! Ты друг Урары? Тогда надо тебе ещё добавить!',
      );
      await urara.say_and_wait([
        'Не только друг, дядя! Это ещё и тренер Урары!',
      ]);
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        'О-о, так это тренер… тренер?! Урары?!',
      );
      await era.printAndWait([
        'Подошедший на голос хозяин-дядька, услышав ',
        urara.get_colored_name(),
        ' — ответ, сначала замер, а потом вдруг побежал на улицу—',
      ]);
      await era.printAndWait([
        'Не прошло и пяти минут, как соседи с торговой улицы обступили ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        ' — так плотно, что яблоку негде упасть.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        'Ой, у Урары наконец-то тоже появился контрактный тренер! Вот это радость!',
      );
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        'Теперь и с дебютом будет спокойно, потом как у Урары-тян будут скачки — все обязательно придём болеть!',
      );
      await you.say_as_passer_by_and_wait('Человек с торговой улицы', [
        'Тренер ',
        you.adult_sex_title,
        '!Дитя это хоть и чуть рассеянное, но ',
        urara.sex,
        ' очень старается!',
      ]);

      era.printButton('「Ага! И дальше тоже оставьте на меня!»', 1);
      await era.input();

      await era.printAndWait([
        'Отвечая на хлынувшие приливом поздравления и надежды, ',
        you.get_colored_name(),
        ' украдкой взглянул(а) в сторону ',
        urara.get_colored_name(),
        ' ——',
      ]);

      if (relation > 150) {
        await you.say_as_passer_by_and_wait(
          'Человек с торговой улицы',
          'Что будущее подстраховали — хорошо, но Урару ведь не обманули?',
        );
        await you.say_as_passer_by_and_wait(
          'Человек с торговой улицы',
          'Что за скверные речи тут? Да и глянь — Урара же так рада?',
        );
        await you.say_as_passer_by_and_wait('Человек с торговой улицы', [
          'Но я тоже слышал, что многие тренеры Трейсена со своими подопечными ',
          urara.uma_sex_title,
          '……',
        ]);
        await you.say_as_passer_by_and_wait(
          'Человек с торговой улицы',
          'Так чего ты завёлся? Что? Если Урара потом найдёт того, кто нравится, ты и тогда не смиришься?',
        );
        await era.printAndWait('М-м… и что в такой момент сказать…');
      } else {
        await you.say_as_passer_by_and_wait(
          'Человек с торговой улицы',
          'Вот бы у Урары дальше тоже всё гладко шло — да будто не так?',
        );
        await you.say_as_passer_by_and_wait(
          'Человек с торговой улицы',
          'Что за гадости ты несёшь? Как можно так говорить про тренера Урары?',
        );
        await you.say_as_passer_by_and_wait(
          'Человек с торговой улицы',
          'Но Урара выглядит не особо довольной…',
        );
        await you.say_as_passer_by_and_wait('Человек с торговой улицы', [
          'Что? Это же ты каждый раз заставляешь Урару делать кучу работы, и ',
          urara.sex,
          ' вымоталась?',
        ]);
        await era.printAndWait('…И всё-таки лучше сейчас лишнего не говорить…');
      }

      await era.printAndWait([
        'Похоже, все на этой улице и правда очень любят ',
        urara.get_colored_name(),
        ' ! Кажется, я понемногу начинаю понимать, ',
        urara.get_colored_name(),
        ' — в чём сила.',
      ]);
      await era.printAndWait([
        'После этого хозяева лавок на торговой улице, приговаривая 「потому что ',
        urara.get_colored_name(),
        ' была у тебя на попечении」, по очереди вручали гостинцы.',
      ]);
      await you.say_and_wait(
        'Только вот подарков как будто слишком много…?',
        true,
      );
      await era.printAndWait([
        'Хотя ',
        you.get_colored_name(),
        ' не считает, что сделал(а) что-то особенное, — скорее это ',
        urara.get_colored_name(),
        ' с самого начала позаботилась о ',
        you.get_colored_name(),
        ' — вот как было.',
      ]);
      await era.printAndWait([
        'Но как ни было неловко, ',
        you.get_colored_name(),
        ' сразу так и не придумал(а), как отказаться от этой лавины доброты, которую свалили разом.',
      ]);
      await urara.say_and_wait([
        callname,
        ', столько всего досталось! Давай я помогу нести!',
      ]);
      await era.printAndWait([
        'А заметив чужое затруднение, ',
        urara.get_colored_name(),
        ' сразу вызвалась помочь и быстро накладывала на себя окружавшие ',
        you.get_colored_name(),
        ' вещи — одну за другой, себе на плечи.',
      ]);

      era.printButton(
        '「Знать бы меру! Если помогать — хватит вот этого…」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Ничего, оставь всё мне! Урара ведь ',
        urara.uma_sex_title,
        ' о… уэ, тяжело! Но Урара постарается!',
      ]);
      await era.printAndWait([
        'С улыбкой отказавшись от ',
        you.get_colored_name(),
        ' — предложения, ',
        urara.get_colored_name(),
        ' изо всех сил взвалила на себя груз почти соразмерный себе и дальше, кажется, сосредоточилась на каждом шаге…',
      ]);
      await you.say_and_wait('А? Погоди, сосредоточилась? Вот сейчас?', true);
      await era.printAndWait([
        'Наконец нащупав подходящую идею для тренировки ',
        you.get_colored_name(),
        ', коротко поприветствовал(а) всё ещё стоящих вокруг людей с торговой улицы —',
      ]);
      era.println();
      await urara.say_and_wait(
        'Ага! Нужно перенести этот ящик яблок, чем быстрее, тем лучше, да? Поняла! Но…',
      );

      era.printButton('「Н-но?»', 1);
      await era.input();

      await urara.say_and_wait(
        'Можно и не надрываться, знаешь? Если вещи тащить — Урара одна справится!',
      );

      era.printButton(
        '「Н-н-ничего, мы же договорились помогать вместе, да и я вроде справлюсь —」',
        1,
      );
      await era.input();

      await you.say_as_passer_by_and_wait('Дети с торговой улицы', [
        'Урара ',
        urara.elder_sibling_sex_title,
        '! Если замедлишься — не успеешь, знаешь?',
      ]);
      await urara.say_and_wait('А! Все, бегите помедленнее! Осторожно!');
      await era.printAndWait([
        'Пока ',
        you.get_colored_name(),
        ' не почувствовал(а), что поясница вот-вот сломается, живущие у торговой улицы маленькие ',
        urara.uma_sex_title,
        ' тут же с места рядом с ',
        you.get_colored_name(),
        ' перехватили ',
        you.get_colored_name(),
        ' — ношу.',
      ]);
      await era.printAndWait([
        'Взвалив ящик, ',
        urara.get_colored_name(),
        ' всерьёз побежала вслед за шагом маленьких ',
        urara.uma_sex_title,
        ', а ',
        you.get_colored_name(),
        ' же, закончив свой отрезок, чуть не плюхнулся(ась) на землю.',
      ]);
      await era.printAndWait([
        'Когда удалось получить помощь всех с торговой улицы, метод тренировки, в котором ',
        urara.get_colored_name(),
        ' сама проявляет охоту, успешно заработал.',
      ]);
      await era.printAndWait([
        'Что до ',
        urara.get_colored_name(),
        ' — то проблема с постоянством тренировок в целом решена, и результаты, должно быть, скоро будут видны.',
      ]);
      await era.printAndWait([
        'А то, что после каждой тренировки тело на нуле… ',
        you.get_colored_name(),
        ' считает, что кроме чьей-то недостаточной физической формы тут нет никаких проблем.',
      ]);
      await era.printAndWait(
        'Как бы не так. Если и дальше так тренироваться, то, если повезёт не попасть в больницу, кто-то, пожалуй, и сам сможет выйти на скачки.',
      );
      await era.printAndWait([
        'Но как поднять ',
        urara.get_colored_name(),
        ' — соревновательный дух — это, видимо, уже другая долгая задача.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Разумеется, вы пока не знаете, что эта тревога разрешится сама после одного случая в будущем —',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Я понимаю, что такой спойлер вас не порадует, но по крайней мере на первых порах я хочу, чтобы вы были спокойны.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Ваша с нами история, боюсь, не будет особенно богата крутыми поворотами, но всё же прошу вас терпеливо идти вперёд.',
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race_first: (() => {
    const title = 'Навстречу дебютной скачке!';
    /**
     * 新秀年 6 月 4 周出道战
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'После долгого взаимного поиска с тренером, с которым был заключён контракт, двое постепенно по-настоящему подготовились.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'По имени ',
        urara.get_colored_actual_name(),
        ' маленькая ',
        urara.uma_sex_title,
        ', наконец выйдет на 『дебютную скачку』 —',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        'Наконец-то дебют? Тогда сегодня тоже выложимся 『по-Урара』!',
      );

      era.printButton('「Урара, расслабься, не нервничай так.»', 1);
      await era.input();

      await era.printAndWait([
        'Вместе с ',
        urara.get_colored_name(),
        ' стоя в тоннеле ипподрома, ',
        you.get_colored_name(),
        ' успокаивает стоящую рядом, с улыбкой на лице, но с дрожью в теле ',
        urara.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Проверка плодов тренировок — сегодня, ',
        urara.get_colored_name(),
        ' тоже знает, что дебютных 「шансов」 мало, и победа в этот раз очень важна.',
      ]);
      await era.printAndWait(
        'Появляющееся соревновательное чутьё — хорошо, но излишнее возбуждение может сорвать выступление, и тех, кто от нервов так и не выходит на старт, тоже немало.',
      );
      await era.printAndWait([
        'Поэтому, в отличие от нескольких коллег вокруг, что до сих пор читают нотации ещё не дебютировавшим подопечным, пусть ',
        urara.sex,
        ' побежит в радости — вот верный ход.',
      ]);
      await urara.say_and_wait(
        'Ага! И правда же! Хе-хе~ Сама не заметила, как занервничала!',
      );
      await era.printAndWait([
        'Услышав ',
        you.get_colored_name(),
        ' — напоминание, расслабила плечи и, хоть и через силу, ',
        urara.get_colored_name(),
        ' всё равно навострила уши и улыбнулась ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          'Но ведь наконец-то можно дебютировать! Я думаю, дебютировать уже сейчас — это очень круто!',
        );
        await urara.say_and_wait([
          'После дебюта можно будет бежать ещё больше скачек! Если буду брать больше первых мест, ',
          callname,
          '  и все будут рады!',
        ]);
        await era.printAndWait([
          'Энергично виляя хвостом, ',
          urara.get_colored_name(),
          '  в ещё чуть детском голосе явно чувствуется боевой дух ради тех, кто её поддерживает.',
        ]);
        await era.printAndWait([
          'Так и кажется, будто стала главной героиней героического сериала, ',
          urara.get_colored_name(),
          ', прямо невероятный ребёнок…',
        ]);
      } else {
        await urara.say_and_wait(
          'Но скоро уже дебют же! Хоть и кажется рановато, но пора идти вперёд!',
        );
        await urara.say_and_wait(
          'Я соберусь с духом! Если смогу взять первое место, все, наверное, тоже улыбнутся!',
        );
        await era.printAndWait([
          'Словно подбадривая боевой дух в своей груди, ',
          urara.get_colored_name(),
          '  энергично виляет хвостом, и на лице появляется ещё немного серьёзности.',
        ]);
        await era.printAndWait([
          'Даже без уверенности в себе всё равно выкладывается полностью ради всех, кто о ней заботится, ',
          urara.get_colored_name(),
          ', такой хороший ребёнок…',
        ]);
      }
      era.println();
      await urara.say_and_wait([
        'И ещё: я чувствую, что стала сильнее, чем раньше! ',
        callname,
        ' — способ и правда очень помог!',
      ]);
      await urara.say_and_wait([
        'Хоть ещё и не знаю, ',
        callname,
        ', твоё тело тоже—',
      ]);

      era.printButton(
        `「Всё хорошо, я же сколько раз уже говорил(а)? ${callname}  точно в порядке!」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Э? Правда? Тогда ',
        callname,
        '  тоже чуть расслабься, ладно?',
      ]);

      era.printButton('「Правда! Урара может быть спокойна!」', 1);
      await era.input();

      await era.printAndWait([
        'В беседе с ',
        you.get_colored_name(),
        '  фраза за фразой перед скачкой, ',
        urara.get_colored_name(),
        '  напряжённое выражение постепенно смягчается.',
      ]);
      await era.printAndWait([
        'Так, наверное, всё будет в порядке? Украдкой придерживая всё ещё сильно дрожащие ноги, ',
        you.get_colored_name(),
        '  снова меняет позу телу, которому даже стоять тяжело.',
      ]);
      await era.printAndWait(
        'Хоть тело до сих пор ломит до смерти, но раз старания и правда не пропали даром, то и помучиться стоило.',
      );
      await era.printAndWait([
        'Выровняв дыхание и поправив гимнастическую форму и нагрудник, ',
        urara.get_colored_name(),
        '  по объявлению о выходе делает шаг вперёд.',
      ]);

      era.printButton('「Первый раз — готова?」', 1);
      await era.input();

      await urara.say_and_wait(
        'Ага! Я думаю, сегодня я точно прибегу первой! Нет, я обязательно побежу!',
      );
      await urara.say_and_wait([
        'Тогда я выхожу! Вопрос! ',
        callname,
        ', как Ураре бежать—?',
      ]);
      await era.printAndWait([
        'Глядя на ',
        urara.get_colored_name(),
        ' — улыбку навстречу свету, ',
        you.get_colored_name(),
        '  уверенно отвечает — ',
        urara.sex,
        '.',
      ]);

      era.printButton('「Как ни крути, беги весело—!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'Всё в порядке?';
    /**
     * 此后的出道战和未胜利战
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Хоть и не удивительно, что Урара дошла до этого шага, на душе всё равно тяжело это принять — во всех смыслах.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Вы и ',
        urara.sex,
        ' обе в порядке? Если история так просто закончится, я этого не приму, знаете ли?',
      ]);
      era.drawLine();
      await era.printAndWait([
        'С тревогой глядя на подопечную рядом, ',
        you.get_colored_name(),
        '  колеблется, не зная, как заговорить.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '  понимает, что сейчас ',
        urara.get_colored_name(),
        '  наверное, не так спокойна, как кажется снаружи, но раз уж выбран дебют, стоящие впереди преграды придётся брать.',
      ]);
      await era.printAndWait([
        'Стоит ли прямо сказать — ',
        urara.sex,
        ' что будет, если в этот раз снова не взять победу? Так и не получается выговорить.',
      ]);
      await era.printAndWait([
        'К тому же сейчас уже поздно об этом говорить: даже если ',
        urara.get_colored_name(),
        '  давно это чует, сейчас прямо заговорить — лишь зря добавить давления.',
      ]);
      await era.printAndWait([
        'В итоге сказать можно, наверное, лишь чтобы ',
        urara.sex,
        ' бежала так же весело, как всегда, но тогда…',
      ]);
      await urara.say_and_wait([
        callname,
        ', не волнуйся за Урару, ладно? Я понимаю, как бежать!',
      ]);
      await era.printAndWait([
        'Словно насквозь видя ',
        you.get_colored_name(),
        ' — смятение, ',
        urara.get_colored_name(),
        '  глядя на ',
        you.get_colored_name(),
        '  мягко улыбается, словно ',
        urara.sex,
        ' и есть тренер, провожающий подопечную на старт.',
      ]);
      await urara.say_and_wait([
        'Потому что ',
        callname,
        '  такой крутой? Так что у Урары точно всё будет хорошо!',
      ]);

      era.printButton('「…Бежать весело, да?」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          'Ага! Какой бы ни был результат, Урара не бросит бег! Так что ',
          callname,
          '  не волнуйся!',
        ]);
        await era.printAndWait([
          'В ответ на ',
          you.get_colored_name(),
          ' — слова, ',
          urara.get_colored_name(),
          '  показывает успокаивающую улыбку.',
        ]);
        await urara.say_and_wait([
          'Хе-хе~ похоже, ',
          callname,
          '  ещё помнит, что я говорила, как и думала, ',
          callname,
          '  такой крутой!',
        ]);
        await era.printAndWait([
          'Верно: сейчас тревожиться уже нет смысла, дальше остаётся лишь доверить бег ',
          urara.get_colored_name(),
          '  — и всё.',
        ]);
      } else {
        await urara.say_and_wait(
          'Верно! Так что даже если снова проиграю, Урара всё равно будет бежать!',
        );
        await era.printAndWait([
          'Хоть и не глядя на ',
          you.get_colored_name(),
          ', но ',
          urara.get_colored_name(),
          '  на лице всё равно проступает улыбка.',
        ]);
        await urara.say_and_wait(
          'Так что дальше остаётся только и дальше стараться и бежать!',
        );
        await era.printAndWait([
          'Да, ',
          urara.get_colored_name(),
          '  именно такая сильная ',
          urara.uma_sex_title,
          ', а тревожиться, наверное, стоит лишь мне, кто не хочет довериться — ',
          urara.sex,
          '…',
        ]);
      }
      era.println();
      await era.printAndWait([
        'После глубокого вдоха, успокоив сердце, ',
        you.get_colored_name(),
        ' тоже с ',
        urara.get_colored_name(),
        ' смеётся, хотя больше это была самоирония.',
      ]);
      await era.printAndWait([
        'Ведь это же ',
        urara.get_colored_name(),
        ' — скачка, а ощущение такое, будто бежать предстоит тебе самому. Только что думал(а), как утешить ',
        urara.get_colored_name(),
        ', а в итоге утешают всё равно тебя.',
      ]);
      await era.printAndWait([
        'Но по крайней мере ',
        you.get_colored_name(),
        ' понимает: теперь не о чем колебаться, ведь ',
        urara.get_colored_name(),
        ' непременно будет идти вперёд.',
      ]);
      await era.printAndWait([
        'Не став, в отличие от окружающих тренеров с подопечными, продолжать разговор, ',
        you.get_colored_name(),
        ' и прижавшаяся рядом маленькая ',
        urara.uma_sex_title,
        ' спокойно ждут, пока не раздаётся объявление о выходе на поле.',
      ]);
      await urara.say_and_wait(['Пора, ', callname, '! Я выхожу!']);

      era.printButton(
        '「В этот раз обязательно возьмём любимое первое место!»',
        1,
      );
      await era.input();

      await urara.say_and_wait('Ага! Обязательно!');
      await era.printAndWait([
        'После короткого уверенного ответа, навстречу солнцу за тоннелем, ',
        urara.get_colored_name(),
        ' снова с улыбкой выходит на скаковое поле.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win_first: (() => {
    const title = 'Первая победа!';
    /**
     * 新秀年 6 月 4 周出道战胜利
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        'Хоть это ещё только дебют, но как же непросто: по имени ',
        urara.get_colored_actual_name(),
        ' — маленькая ',
        urara.uma_sex_title,
        ', взяла первое место—',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Увидев, как ',
        urara.get_colored_name(),
        ' пересекает финиш, ',
        you.get_colored_name(),
        ' сразу, невзирая на ломоту в теле, встаёт и мчится к самому первому ряду трибун.',
      ]);
      await era.printAndWait(
        'Камень с души падает, ломота в мышцах и напряжение перед подтверждением первого места рассеиваются вместе с приближением подопечной.',
      );
      await era.printAndWait([
        'Когда напряжённый дух переходит в расслабление, мысль хорошенько потрепать ',
        urara.get_colored_name(),
        ' тоже вырывается из-под сдерживания.',
      ]);
      await era.printAndWait([
        'Так, не заботясь, смотрят ли посторонние, вдобавок к поздравлениям, ',
        you.get_colored_name(),
        ' сразу протягивает руки к ',
        urara.get_colored_name(),
        ' мягкому личику и ушам.',
      ]);
      await era.printAndWait([
        'С влажной гимнастической формы струится ',
        urara.teen_sex_title,
        ' — свежий аромат, но в отличие от первой встречи сегодня в запахе есть и цветочный дух победы.',
      ]);
      await era.printAndWait([
        'В ',
        you.get_colored_name(),
        ' — растрёпывании, ',
        urara.get_colored_name(),
        ' тоже, словно зверёк, тянет маленькие ручки и легонько цепляется за ',
        you.get_colored_name(),
        ', а на кукольном личике, покрытом потом, выступает лёгкий румянец.',
      ]);
      await era.printAndWait([
        'Если бы можно было, ',
        you.get_colored_name(),
        ' так и готов(а) сию секунду подхватить этого мягкого крошку и вжаться носом, но уцелевший рассудок вовремя удерживает ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait(
        'И правда, всё-таки вымотался(ась)? Кстати, почему голова немного кружится…',
        true,
      );
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          'Эх-хе-хе~ ',
          callname,
          ', хватит теребить! Щекотно!',
        ]);
        await era.printAndWait([
          'Застенчиво убирая ',
          you.get_colored_name(),
          ' перевозбуждённые руки, ',
          urara.get_colored_name(),
          ' возбуждённо виляет хвостом, а в расцветшей улыбке — радость от самого сердца.',
        ]);
        await urara.say_and_wait([
          'Сегодня я первая! Первый раз вижу, что впереди никто не бежит! И в зоне победителей тоже первый раз!',
        ]);
      } else {
        await urara.say_and_wait([callname, '! Не надо так! Все же смотрят!']);
        await era.printAndWait([
          'Смущённо надув губки, отбивает ',
          you.get_colored_name(),
          ' всё ещё теребящую руку, ',
          urara.get_colored_name(),
          ' и на лице, тронутом стыдливостью, наконец расцветает улыбка.',
        ]);
        await urara.say_and_wait([
          'Хе-хе, но всё равно спасибо, ',
          callname,
          '! Сегодня я правда первая~!',
        ]);
      }
      era.println();
      era.printButton('「Каково первое место? Вид впереди красивый, да?»', 1);
      await era.input();

      await urara.say_and_wait(
        'Ага! Ещё радостнее, чем я думала! Хочу ещё много раз брать первое место!',
      );
      await urara.say_and_wait(
        'Потом мы ещё во много скачек пойдём, да? Я буду и дальше стараться!',
      );
      await era.printAndWait([
        'Похоже, ',
        urara.get_colored_name(),
        ' — дух соперничества уже просыпается: стоит продолжать — и впереди непременно явится миг качественного скачка.',
      ]);
      await era.printAndWait([
        'Тогда, помимо всех за оградой, ',
        urara.sex,
        ' тоже сможет в соперничестве с другими найти то желание, что хочет преследовать на скаковом поле.',
      ]);
      await era.printAndWait([
        'Растирая почему-то слегка онемевшие виски, ',
        you.get_colored_name(),
        ' продолжает включать мышление со стороны тренера.',
      ]);
      await era.printAndWait(
        'Впредь, чтобы и дальше наращивать силу, для начала копить опыт стартов и сделать это одной из целей — пожалуй, тоже неплохо.',
      );

      era.printButton(
        '「Хорошо! Тогда дальше скачек станет больше — нормально?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(['Хорошо—! А? ', callname, ', туда!']);

      era.printButton('「Что такое?»', 1);
      await era.input();

      await urara.say_and_wait('Все с торговой улицы пришли!');
      await era.printAndWait([
        'Проследив за взглядом ',
        urara.get_colored_name(),
        ' , видишь тех, с кем у маленькой ',
        urara.uma_sex_title,
        ' тесные узы, — соседи с торговой улицы явились все до одного.',
      ]);
      await era.printAndWait(
        'Житель торговой улицы「Урара смотрит сюда! Все, приготовиться—!»',
      );
      await era.printAndWait(
        'Жители торговой улицы「Урара! Поздравляем с успешным дебютом!»',
      );
      await era.printAndWait(
        'Когда поздравления сливаются в гул, жители торговой улицы навстречу ветру поднимают растяжку с надписью «Урара, поздравляем с дебютом».',
      );
      await era.printAndWait(
        'Житель торговой улицы「Урара! И дебют, и первое место — всё здорово!»',
      );
      await era.printAndWait(
        'Житель торговой улицы「И дальше беги вволю! Мы тоже всегда будем тебя поддерживать!»',
      );
      await era.printAndWait([
        'Хоть это всего лишь успешный дебют, все радуются, будто на фестивале, и даже понимая, каковы у всех к ',
        urara.get_colored_name(),
        ' чувства, ',
        you.get_colored_name(),
        ' всё равно вздрагивает от неожиданности.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' украдкой смахивает «пот», что едва не застил глаза, затем с улыбкой изо всех сил отвечает всем.',
      ]);
      await urara.say_and_wait(
        'Спасибо всем! Впредь я! буду бежать всегда, всегда!',
      );
      await era.printAndWait('Люди с торговой улицы「О! Давай——!」');
      await era.printAndWait(
        'Человек с торговой улицы「Дальше Урару тоже тебе доверяем! Тренер, и ты давай!」',
      );
      await era.printAndWait([
        'Дружные благословения застали врасплох, ',
        you.get_colored_name(),
        '  замирает на месте, будто от испуга.',
      ]);
      await era.printAndWait(
        'Нет, может, и вправду был испуг. Если подумать: бывало ли раньше, чтобы на тебя так надеялись?',
      );
      await era.printAndWait([
        'А сразу увидев ',
        you.get_colored_name(),
        ' — растерянность, ',
        urara.get_colored_name(),
        '  с улыбкой хватает ',
        you.get_colored_name(),
        ' — руку и начинает ',
        you.get_colored_name(),
        '  подбадривать.',
      ]);
      await urara.say_and_wait([
        callname,
        '! Пользуясь случаем, скажи и ты что-нибудь всем!',
      ]);
      era.printButton('「Э? А? Я? Но что именно…」', 1);
      await era.input();

      await urara.say_and_wait(
        'Ничего! Просто выкрикни что на сердце — и всё! Давай!',
      );
      await era.printAndWait([
        'Раз так, остаётся только ответить на ожидания всех. Под ',
        urara.get_colored_name(),
        ' — сияющим взглядом, ',
        you.get_colored_name(),
        '  глубоко вдыхает—',
      ]);
      await era.printAndWait([
        'Но не успевает выговорить даже первое слово: от чрезмерного усилия рвётся последняя нить сознания, и ',
        you.get_colored_name(),
        '  валится навзничь.',
      ]);
      await urara.say_and_wait([
        'М? ',
        callname,
        ', что случилось… э? Э! ',
        callname,
        '! ',
        callname,
        ' ——',
      ]);
      await era.printAndWait([
        'С невысказанной благодарностью, среди криков ',
        urara.get_colored_name(),
        '  и окружающих на исходе сил ',
        you.get_colored_name(),
        '  снова валится, кругом голова.',
      ]);
      await era.printAndWait([
        'Чёрт, картина-то душещипательная, ну почему? Даже не сдержавшись, ',
        you.get_colored_name(),
        '  с улыбкой закрывает глаза…',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('Нсс…');
      await inner_urara.say_as_unknown_and_wait(
        'Кхм, это… дебютный забег, тяжело было?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Всё-таки это не силою решить. Впредь вам бы следить за телом…',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_lose_first: (() => {
    const title = 'Дальше вперёд!';
    /**
     * 新秀年 6 月 4 周出道战失败
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Ожидаемое всё же случилось. Не падайте духом: если это вы, в следующий раз должно получиться…',
      );
      era.drawLine();
      await era.printAndWait([
        'Видя, что ',
        urara.get_colored_name(),
        '  не взяла первое место, но есть прогресс в ожидаемых пределах, ',
        you.get_colored_name(),
        '  чуть выдыхает, и накопленная усталость становится заметно легче.',
      ]);
      await era.printAndWait(
        'Усилия всех дают плоды: даже если всякое начало трудно, это всё же неплохое открытие.',
      );
      await era.printAndWait([
        'Голова от долгого напряжения всё ещё побаливает, но по сравнению с ',
        urara.get_colored_name(),
        ' — дебютом это всё ерунда.',
      ]);
      await era.printAndWait([
        'Глядя на вытирающую пот у дорожки ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        '  медленно встаёт, обходит толпу и идёт в первый ряд, к ближайшему к ',
        urara.get_colored_name(),
        '  месту.',
      ]);

      era.printButton('「Постаралась. Первый дебютный забег — каково?」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await era.printAndWait([
          'Увидев ',
          you.get_colored_name(),
          ' — машущий силуэт, ',
          urara.get_colored_name(),
          '  берёт себя в руки и, как всегда, с улыбкой подбегает.',
        ]);
        await urara.say_and_wait([
          'Спасибо, ',
          callname,
          '! И мне вовсе не тяжело! Потому что бежать всё равно весело!',
        ]);
        await urara.say_and_wait(
          'Но… первое место так и не взяла… зато добежала до конца как следует!',
        );
        await era.printAndWait([
          'Хоть голос и не прячет тоску, ',
          urara.get_colored_name(),
          '  всё же за миг разгоняет свою грусть.',
        ]);
        await urara.say_and_wait([
          callname,
          '! Если потом возьму первое, можно будет бежать ещё больше скачек, да?',
        ]);
      } else {
        await era.printAndWait([
          'Увидев ',
          you.get_colored_name(),
          ' — силуэт, ',
          urara.get_colored_name(),
          '  смахивает со щёк солёные капли и подбегает к ',
          you.get_colored_name(),
          ' — боку.',
        ]);
        await urara.say_and_wait([
          'Спасибо, ',
          callname,
          ', но мне вовсе не тяжело, и бежать всё равно весело!',
        ]);
        await urara.say_and_wait(
          'Просто… первое место так и не взяла… но в этот раз добежала до конца как следует!',
        );
        await era.printAndWait([
          'Хоть голос и не прячет тоску, ',
          urara.get_colored_name(),
          '  всё же за миг возвращает себе улыбку.',
        ]);
        await urara.say_and_wait(
          'Я хочу бежать и дальше! Вот, дебютировала — значит, потом можно взять первое место, да?',
        );
      }
      era.println();
      await era.printAndWait([
        'Похоже, у ',
        urara.get_colored_name(),
        '  воля к победе уже просыпается: если и дальше так, непременно попадётся миг качественного скачка.',
      ]);
      await era.printAndWait([
        'Тогда, помимо всех за оградой, ',
        urara.sex,
        ' сможет и в борьбе с другими найти желание, которого хочет на самой дорожке.',
      ]);
      await era.printAndWait([
        'Растирая всё ещё ноющий висок, ',
        you.get_colored_name(),
        '  снова включает тренерские мысли.',
      ]);
      await era.printAndWait(
        'Но сперва, чтобы потом попасть в ещё больше скачек, всё же лучше поскорее закрепить первую победу.',
      );

      era.printButton(
        '「Хорошо! Тогда начинается новый круг спецтренировок, нормально?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(['Хорошо——! М? ', callname, ', туда!']);

      era.printButton('「Что-то случилось?」', 1);
      await era.input();

      await urara.say_and_wait('Все с торговой улицы пришли!');
      await era.printAndWait([
        'Следуя ',
        urara.get_colored_name(),
        ' — взгляду, видно: все те, с кем у маленькой ',
        urara.uma_sex_title,
        ' крепкая дружба — соседи с торговой улицы все как один.',
      ]);
      await era.printAndWait(
        'Человек с торговой улицы「Урара! Даже без первого места ты молодец!」',
      );
      await era.printAndWait(
        'Человек с торговой улицы「И дальше беги от души! Мы всегда будем за тебя!」',
      );
      await era.printAndWait(
        'Хоть это всего лишь удачный дебют и даже без первого места, все радуются, будто справляют праздник.',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '  украдкой смахивает 「пот」, что едва не застлал глаза, и с улыбкой изо всех сил отвечает всем.',
      ]);
      await urara.say_and_wait(
        'Спасибо всем! В следующий раз я непременно поскорее возьму первое место — вот увидите!',
      );
      await era.printAndWait('Люди с торговой улицы「О! Давай——!」');
      await era.printAndWait(
        'Человек с торговой улицы「Тренер, и тебе спасибо за труды! Спасибо, что заботишься о малышке Ураре!」',
      );
      await era.printAndWait([
        'Поздравления от всех разом застают врасплох, ',
        you.get_colored_name(),
        ' будто от испуга застывает на месте.',
      ]);
      await era.printAndWait(
        'Нет, может, и правда стало страшно. Если подумать, бывало ли раньше, чтобы на тебя так надеялись?',
      );
      await era.printAndWait([
        'И тут же увидев ',
        you.get_colored_name(),
        ' — растерянность, ',
        urara.get_colored_name(),
        ' с улыбкой хватает ',
        you.get_colored_name(),
        ' — руку и принимается подбадривать ',
        you.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([
        callname,
        '! Пользуясь случаем, скажи и ты всем что-нибудь!',
      ]);
      era.printButton('「А? Я? Но мне и сказать-то нечего…」', 1);
      await era.input();

      await urara.say_and_wait([
        'Ничего! В следующий раз у нас точно получится, так что ',
        callname,
        ', крикни сейчас что на сердце!',
      ]);
      await era.printAndWait([
        'Раз так, придётся оправдать всеобщие ожидания. Под ',
        urara.get_colored_name(),
        ' — лучистым взглядом, ',
        you.get_colored_name(),
        ' глубоко вдыхает —',
      ]);
      await era.printAndWait([
        'Но даже первое слово не успевает сорваться с языка: слишком сильно натужившись, рвёт последнюю нить сознания, ',
        you.get_colored_name(),
        ' глухо опрокидывается на спину.',
      ]);
      await urara.say_and_wait([
        'Нм? ',
        callname,
        ', что с тобой… ээ? Ээ! ',
        callname,
        '! ',
        callname,
        ' ——',
      ]);
      await era.printAndWait([
        'С невысказанной благодарностью в груди, среди криков ',
        urara.get_colored_name(),
        ' и окружающих, на пределе сил, ',
        you.get_colored_name(),
        ' сразу падает, потеряв ориентацию…',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Эх, ради дебюта Урары и вам пришлось нелегко.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Вам бы поберечься: не доведите до того, что Урара ещё без первого места, а тренер уже рухнул…',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Наконец, первая…';
    /**
     * 此后的出道战和未胜利战胜利
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Как ни крути, сердце, застывшее в тревоге, наконец можно ненадолго отпустить — благодаря первой победе.',
      );
      era.drawLine();
      await era.printAndWait([
        'Едва ',
        urara.get_colored_name(),
        ' первой пересекает финишную доску, ',
        you.get_colored_name(),
        ' тоже растирает затёкшие плечи и встаёт.',
      ]);
      await era.printAndWait(
        'Тело всё ещё устало, но куда легче, чем в прошлый раз, — а когда подопечная спокойно взяла первое место, и вовсе сделалось легко.',
      );
      await era.printAndWait([
        'На этот раз точно не свалится у всех на глазах; глядя на крохотную фигурку, бегущую издалека, ',
        you.get_colored_name(),
        ' поднимает руку навстречу тому розовому пятнышку.',
      ]);
      await era.printAndWait([
        'Пропитанная потом гимнастическая форма пахнет ',
        urara.teen_sex_title,
        ' — лёгким ароматом; завидев ',
        you.get_colored_name(),
        ' — приветствие, с другой стороны прибегает маленькая ',
        urara.uma_sex_title,
        ' и с победной улыбкой останавливается перед ',
        you.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([
        'Уо-о—! Первое место! ',
        callname,
        '! Я взяла первое место—!',
      ]);
      await urara.say_and_wait(
        'Ах, плохо! Я вбежала в зону победителей, это же ничего?…',
      );

      era.printButton('「Нет, Урара, спокойнее, ты же первая.»', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await era.printAndWait([
          'Потянувшись, мнёт маленькой ',
          urara.uma_sex_title,
          ' щёки, ',
          you.get_colored_name(),
          ' с улыбкой успокаивает подопечную, слишком возбуждённую первой победой.',
        ]);
        await era.printAndWait([
          'Словно наслаждаясь ',
          you.get_colored_name(),
          ' — лаской; под ',
          you.get_colored_name(),
          ' — пальцами постепенно затихает ',
          urara.get_colored_name(),
          ' тоже принимает блаженный вид.',
        ]);
        await urara.say_and_wait(
          'А, кажется, и правда! Урара уже не та, что раньше~',
        );
        await urara.say_and_wait([
          'Ну что, ',
          callname,
          ', видел(а)? Я только что правда первой пересекла финишную доску!',
        ]);
      } else {
        await era.printAndWait([
          'Протягивает полотенце и спортивный напиток запыхавшейся маленькой ',
          urara.uma_sex_title,
          ', ',
          you.get_colored_name(),
          ' тихо напоминает ещё слегка осовевшей подопечной.',
        ]);
        await era.printAndWait([
          'Хлопает себя по щекам, берёт воду и полотенце, ',
          urara.get_colored_name(),
          ' и наконец к ',
          you.get_colored_name(),
          ' поворачивается с улыбкой, будто камень с души упал.',
        ]);
        await urara.say_and_wait(
          'А, и правда! Кажется, в этот раз я и в самом деле выиграла!',
        );
        await urara.say_and_wait([
          'Устала, конечно, но ',
          callname,
          ', я правда сейчас первой пронеслась?',
        ]);
      }

      era.printButton(
        '「Конечно! И не только я — все, кто пришёл на тебя посмотреть, тоже видели!」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' глядит туда, куда ',
        you.get_colored_name(),
        ' указывает: по уговору люди с торговой улицы снова поднимают баннеры поддержки.',
      ]);
      await era.printAndWait([
        '「Урара, поздравляем с первым местом» — победы ещё не было, но те, кто верил, что ',
        urara.get_colored_name(),
        ' победит, всё равно заранее сделали этот транспарант.',
      ]);
      await era.printAndWait([
        'Тянет руку и изо всех сил машет тем, кто всегда её поддерживал, ',
        urara.get_colored_name(),
        ' — и улыбка будто сияет ярче прежнего.',
      ]);
      await era.printAndWait([
        'Хоть это лишь первая победа после дебюта, для ',
        urara.get_colored_name(),
        ' и всех, чьей поддержкой ',
        urara.sex,
        ' окружена, это всё равно памятный опыт.',
      ]);
      await era.printAndWait([
        'Глядя на всё это и понимая, что дело наконец пошло своим ходом, ',
        you.get_colored_name(),
        ', тоже может наконец закрыть глаза и выдохнуть.',
      ]);
      await era.printAndWait([
        'Когда они возвращаются в тоннель для участниц, ',
        urara.get_colored_name(),
        ' всё ещё оживлённо болтает с ',
        you.get_colored_name(),
        ' о всевозможных 「впервые」.',
      ]);

      era.printButton(
        '「Урара, 『впервые』 стоять самой первой — и правда здорово, да?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Ага! Когда бежишь самой первой, вид такой красивый, даже не ждала!',
      );
      await urara.say_and_wait(
        'Когда лидируешь, ветер правда сильный! Но если бежать вперёд, он будто сам расступается!',
      );
      await urara.say_and_wait(
        'И ещё… первое место — это правда так радостно! И улыбки всех тоже такие радостные!',
      );

      era.printButton('「Тогда так и продолжай, ради следующей победы.»', 1);
      await era.input();

      await urara.say_and_wait('Ну! Я точно снова возьму первое место!');
      await urara.say_and_wait([
        callname,
        '! И дальше так вместе — мы точно сможем пройти ещё дальше!',
      ]);
      await era.printAndWait([
        'Взяв протянутую маленькой подопечной руку-приглашение, ',
        urara.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ', сейчас всё только начинается.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Вот так. Дебютный забег дался нелегко, я тоже немного выдохнула.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Как вам? Итак, готовы ли вы к дням вместе с Урарой?',
      );
    };
    f.title = title;
    return f;
  })(),
  os_34: (() => {
    const title = 'Улыбка, которую все так любят?';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Сегодня Урара выступила в разминочном забеге на одном мероприятии — и снова проиграла: неожиданно и в то же время вполне ожидаемо.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Стандартное развитие, впрочем, тренер ',
        you.adult_sex_title,
        ' (вы) тут изрядно голову сломаете.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'В чём же дело? По дороге обратно кто-то, пожалуй, до ответа так и будет рассеянным… впрочем…',
      );
      era.drawLine();
      await era.printAndWait([
        'Но в официальных скачках ведь получается выиграть — почему же на ивенте всё равно остаётся последней? ',
        urara.get_colored_name(),
        ' тоже не станет спустя рукава эта ',
        urara.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Может, все просто слишком сильны, но при ',
        urara.get_colored_name(),
        ' нынешнем положении не должна бы финишировать последней да ещё и с таким отрывом.',
      ]);
      await era.printAndWait(
        'Кроме того, что концентрация не та, что на официальных, и прочих психологических факторов — неужели соревновательный дух всё ещё слишком слаб? Тогда, если так…',
      );
      await era.printAndWait([
        'На редкость не глядя на лицо подопечной рядом, ',
        you.get_colored_name(),
        ' бросает взгляд и мысли дальше, в толпу.',
      ]);
      await era.printAndWait([
        'Сколько ни проиграй, ',
        urara.get_colored_name(),
        ' всё равно остаётся оптимисткой. Это не обязательно целиком к добру — напротив, тут может скрываться и другая беда.',
      ]);
      await urara.say_and_wait(
        'Если всё время стараться, в следующий раз обязательно отыграемся!',
      );
      await era.printAndWait([
        'Про сегодняшние скачки ',
        urara.sex,
        ' сказала вот так, а ещё раньше ',
        you.get_colored_name(),
        ' узнал(а) от её друзей, что ',
        urara.sex,
        ' всегда была такой: ',
        urara.sex,
        ' каждый раз после проигрыша говорила то же.',
      ]);
      await era.printAndWait([
        '«В следующий раз точно выиграем» — кого, в сущности, утешают эти слова? Эта мысль — не попытка мерить своими предрассудками ',
        urara.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'С более трезвыми ожиданиями от скачек ',
        you.get_colored_name(),
        ' настроение и правда ровное, а вот говорящая «в следующий раз выиграем» ',
        urara.get_colored_name(),
        ' и впрямь ли так же весела, как снаружи?',
      ]);
      await era.printAndWait([
        'Держа ',
        urara.get_colored_name(),
        ' — маленькую руку, шагая в потоке встречных, ',
        you.get_colored_name(),
        ' думает о вопросе, с которым, быть может, однажды придётся столкнуться.',
      ]);
      await era.printAndWait([
        'Хотя и хочется, чтобы ',
        urara.get_colored_name(),
        ' могла и дальше бодро, светло и старательно побеждать, но как сделать, чтобы ',
        urara.sex,
        ' и её тренер ещё быстрее узнавали друг друга?',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          ' я не потеряюсь, ну? Обычно же тоже так за руку идём? ',
          callname,
          ' Не надо так крепко!',
        ]);
        await era.printAndWait([
          'Прижавшись к ',
          you.get_colored_name(),
          ' боку, ',
          urara.get_colored_name(),
          ' улыбаясь, слегка сжимает в ответ ',
          you.get_colored_name(),
          ' — пальцы.',
        ]);
        await urara.say_and_wait([
          'И ещё: мне кажется, улыбка больше к лицу ',
          callname,
          ', так что не хмурься и не думай с таким лицом!',
        ]);
        await era.printAndWait([
          'В улыбке подопечной ',
          you.get_colored_name(),
          ' расслабляет межбровье и пальцы и к ',
          urara.get_colored_name(),
          ' тоже отвечает виноватой улыбкой.',
        ]);
        await era.printAndWait([
          'И правда. Вот это промах. Только и думал о своих обязанностях — чуть не забыл, что важнее ',
          urara.sex,
          ' сама ещё рядом.',
        ]);
        await era.printAndWait(
          'А с каких это пор: стоит вдвоём пойти погулять — и руки сами, с радостью, всегда и везде сплетаются.',
        );
      } else {
        await urara.say_and_wait([
          callname,
          '? Слишком сильно, ну? Даже у Урары рука так не выдержит!',
        ]);
        await era.printAndWait([
          'Дёрнула руку, которую ',
          you.get_colored_name(),
          ' держит, ',
          urara.get_colored_name(),
          ' — в улыбке будто слегка натянуто.',
        ]);
        await urara.say_and_wait(
          'На дороге народу много, ну? Если не смотреть — опасно. Лучше вместе весело дойти до дома, да?',
        );
        await era.printAndWait([
          'На доброе предупреждение подопечной, похожее на ворчание, очнувшись, ',
          you.get_colored_name(),
          ' с запалом расслабляет своё тело.',
        ]);
        await era.printAndWait([
          'А с каких это пор — настроение то и дело меняется, но ',
          urara.get_colored_name(),
          ' всякий раз сама берёт ',
          you.get_colored_name(),
          ' — руку.',
        ]);
        await era.printAndWait([
          'Нынешняя ',
          urara.sex,
          ' какие же чувства к ',
          you.get_colored_name(),
          ' питает? Или ',
          urara.sex,
          ' на самом деле ещё не до конца сознаёт противоположный пол…',
        ]);
      }
      era.println();
      await era.printAndWait([
        'В глазах большинства это, может, всего лишь жест опекуна с ребёнком, но для ',
        you.get_colored_name(),
        ' это несёт совсем другой смысл.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' стал(а) её тренером потому, что ',
        urara.get_colored_name(),
        ' тронула и увлекла; но теперь всякий раз, когда ',
        urara.sex,
        ' рядом, когда ',
        urara.sex,
        ' прикасается, ',
        you.get_colored_name(),
        ' словно теряет ещё толику рассудка.',
      ]);
      await era.printAndWait([
        'Пока ',
        urara.sex,
        ' рядом — ласка естественна, объятия естественны; но так же естественно и то, что ',
        urara.sex,
        ' — наивное юное тело — понемногу будит 「интерес」.',
      ]);
      await era.printAndWait(
        'Всё больше кажется: так дальше — и взрослой жизни крышка. Неужели и вправду—',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'Но как раз когда тренер ',
        you.adult_sex_title,
        ' (вы) уже готов погрузиться в другое подозрение — слышно пересуды тех, кто проходит вплотную.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Это двое прохожих с виду молодых студентов, о ',
        urara.get_colored_name(),
        ' — пересуды.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Прохожий A「Вон та ',
        urara.child_sex_title,
        ', это та, что только что пришла последней на скачках?»',
      ]);
      await era.printAndWait([
        'Прохожий B「Вроде Хару Урара? Ну это же всего лишь показательные скачки, можно и спустя рукава.»',
      ]);
      await era.printAndWait([
        'Прохожий A「Да нет же, ',
        urara.sex,
        ' вообще не выигрывает, до дебюта сплошные поражения, ещё непонятно, как ',
        urara.sex,
        ' вообще дебютировала.»',
      ]);
      await era.printAndWait([
        'Прохожий B「Ничего себе, как ',
        urara.sex,
        ' вообще попала в Центральный Трейсен?»',
      ]);
      await era.printAndWait([
        'Прохожий A「Наверное, ',
        urara.sex,
        ' — тренер что-то устроил, судя по тому, какие они близкие, опять легенды Трейсена…»',
      ]);
      await era.printAndWait(
        'Прохожий B「Вот оно как, значит, тот тренер выбрал, к кому проще подступиться…»',
      );
      await era.printAndWait([
        'Даже понимая, что всё это пустая болтовня, ',
        you.get_colored_name(),
        '  всё равно от бесконечных пересудов прохожих понемногу начинает раздражаться.',
      ]);
      await era.printAndWait([
        'Что о тебе говорят — неважно, но ',
        urara.get_colored_name(),
        ' пусть и слабая, не заслуживает таких пересудов.',
      ]);
      await era.printAndWait([
        'Но как раз когда ',
        you.get_colored_name(),
        '  собирается увести ',
        urara.get_colored_name(),
        '  подальше от этой склоки, маленькая ',
        urara.uma_sex_title,
        ' же задрала голову и увидела ',
        you.get_colored_name(),
        '  — плохо скрытое выражение, и сама отпустила руку.',
      ]);

      era.printButton('「Подожди…」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' — действие всё же опоздало на шаг, и пока ',
        you.get_colored_name(),
        '  успевает среагировать, ',
        urara.get_colored_name(),
        '  уже стоит перед теми, кто нёс ',
        urara.sex,
        ' — пересуды.',
      ]);
      await era.printAndWait([
        'Когда ',
        you.get_colored_name(),
        '  подходит следом, ',
        urara.get_colored_name(),
        '  как раз нависает над теми двумя, которых ',
        urara.sex,
        ' напугала до съёживания, и хорошо хоть на лице — добрая улыбка.',
      ]);
      await urara.say_and_wait(
        'Вы, кажется, про Урару говорите! Вы тоже смотрели только что скачки?',
      );
      await era.printAndWait('Прохожий A「Э, это, мы…」');
      await era.printAndWait([
        'маленькая ',
        urara.uma_sex_title,
        ' мотает ушами, в чистых вишнёвых глазах отражаются растерянные лица двух прохожих.',
      ]);
      await era.printAndWait([
        'Перед теми двумя, что только что судачили о ней, ',
        urara.get_colored_name(),
        '  — лицо всё такое же весеннее, как всегда.',
      ]);
      await urara.say_and_wait([
        'хе-хе~ Верно же! Я и правда не крутая ',
        urara.uma_sex_title,
        ', бегаю не очень быстро, и почти каждый раз проигрываю!',
      ]);
      await urara.say_and_wait(
        'Но если слышу голоса всех, я всё равно полна сил!',
      );
      await era.printAndWait('Прохожий B「Т-такое… и правда можно…」');
      await urara.say_and_wait(
        'Верно! Я верю! Потому что есть бег, который я очень люблю, и все, кто меня подбадривает, так что в следующий раз я точно выиграю!',
      );
      await era.printAndWait([
        'Перед двумя, что почти онемели, ',
        urara.get_colored_name(),
        '  всё так же виляет хвостом, в светлом голосе ни капли скверны.',
      ]);
      await urara.say_and_wait(
        'Так что если не против, в следующий раз тоже придёте посмотреть мои скачки?',
      );
      await era.printAndWait(
        'Прохожие A и B「…Ладно, мы, мы придём, наверное…」',
      );
      era.println();
      if (high_relation) {
        await era.printAndWait([
          'Услышав их запинающееся обещание, ',
          urara.get_colored_name(),
          '  сначала радостно кивает, а потом вдруг серьёзные слова вытесняют тёплую доброту.',
        ]);
        await urara.say_and_wait(
          'И ещё, тренер — тот, кто всегда помогает Ураре, больше не говорите про тренера плохо…?',
        );
        await era.printAndWait('Прохожие A и B「…!」');
        await era.printAndWait([
          'Увидев, как у двух бедолаг лица прошли путь от стыда и исцеления до испуга, маленькая ',
          urara.uma_sex_title,
          ' снова надевает милую улыбку.',
        ]);
        await urara.say_and_wait([
          'эх-хе-хе~ Но я не сержусь! Просто как подумаю, что на тренера всегда так смотрят, сразу немного завожусь!',
        ]);
        await era.printAndWait('Прохожие A и B「О… о!」');
      }
      era.println();
      await urara.say_and_wait(
        'Ага! Вот так! Спасибо, что выслушали! Тогда я пошла! По дороге осторожнее!',
      );
      await era.printAndWait([
        'Махнув на прощание двум прохожим, у которых от потрясения не вышло ни слова, ',
        urara.get_colored_name(),
        '  снова прибегает к ',
        you.get_colored_name(),
        '  — боку.',
      ]);
      await era.printAndWait([
        'А туда, где ',
        urara.sex,
        ' только что стояла, глядя — двое молодых, что говорили с ',
        urara.get_colored_name(),
        ' , на лицах сейчас застыло потерянное выражение, тихо торчат на месте.',
      ]);
      await era.printAndWait(
        'Долго смотрев друг на друга, наконец опомнившись, двое всё так же запинаясь разворачиваются и уходят.',
      );
      await era.printAndWait([
        'Прохожий A「…Буду тогда за того ребёнка болеть. Что-то ',
        urara.sex,
        ' вроде очень старается…»',
      ]);
      await era.printAndWait(
        'Прохожий B「Т-тогда и я… тот ребёнок даже обо мне переживает…»',
      );
      await era.printAndWait('Прохожий A「Да что ты, это же мне сказали…»');
      await era.printAndWait('Прохожий B「Неправда, это же мне…»');
      await era.printAndWait('…Нынешняя молодёжь вся такая?');
      await era.printAndWait([
        'Глядя вслед двоим, что уходят уже какими-то странными, ',
        you.get_colored_name(),
        '  без сил качает головой и снова переводит внимание на ',
        urara.get_colored_name(),
        ' .',
      ]);

      era.printButton('「Урара, ты в порядке?」', 1);
      await era.input();

      await urara.say_and_wait([
        callname,
        '  беспокоится обо мне? Урара в порядке!',
      ]);

      era.printButton(
        '「Но если Урара вдруг поранится чужими словами, будет слишком тяжко.»',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Ага! Поэтому что бы ни случилось, Урара и правда хочет поблагодарить ',
        callname,
        '  же!',
      ]);
      await era.printAndWait([
        'В ответ на ',
        you.get_colored_name(),
        '  — заботу, маленькая ',
        urara.uma_sex_title,
        ' тоже ещё раз к ',
        you.get_colored_name(),
        '  выказывает чистую благодарность.',
      ]);
      await era.printAndWait([
        'Наслаждаясь наедине ',
        urara.get_colored_name(),
        '  — успокаивающей улыбкой и вспоминая тех двоих, ',
        you.get_colored_name(),
        '  вдруг как будто что-то понимает.',
      ]);

      if (era.get('cflag:38:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'Погодите, вид тех двоих после разговора с ',
          urara.get_colored_name(),
          ' — разве не доводилось где-то такое видеть?',
        ]);
        await era.printAndWait([
          'После того как Карен провела проповедь милоты, те, кого только что пленила милота Карен, вроде бы выглядели так же?',
        ]);
      }
      era.println();
      await era.printAndWait('…Вот оно что, и правда так.');
      await era.printAndWait([
        'Для скаковой ',
        urara.uma_sex_title,
        ' поддержка фанатов весьма важна, а ',
        urara.get_colored_name(),
        '  же обладает редкой чертой — люди охотно поддерживают ',
        urara.sex,
        ', и даже ',
        you.get_colored_name(),
        '  тоже среди них.',
      ]);
      await era.printAndWait([
        'То есть ',
        urara.sex,
        ' бессознательно пускает в ход своё оружие? ',
        urara.get_colored_name(),
        '  уж не суккуб ли ещё тот?',
      ]);
      await era.printAndWait([
        'Впрочем, на душе немного смешанно, но ',
        you.get_colored_name(),
        '  знает: даже без такой черты мало кто сможет отказать такому доброму хорошему ребёнку.',
      ]);
      await era.printAndWait(
        'И всё же при нынешней степени взаимного понимания ответа на вопрос, с которого всё началось, по-прежнему нет.',
      );
      await era.printAndWait([
        'Как ни крути, спешить нельзя: сейчас главное — чтобы ',
        urara.sex,
        ' могла стабильно побеждать в скачках.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '  так думая, снова берёт ',
        urara.get_colored_name(),
        ' — протянутую маленькую руку, и вытянутые тени двоих снова сливаются под солнцем.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Хоть скандала не вышло, но на удивление неприятно, господа прохожие.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'И ещё прошу прощения: сейчас снова отниму немного вашего времени.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Хотя на этот раз вопрос был лёгким, но если позже встретится трудность, с которой Урара не справится, — как вы поступите?',
      );
      era.printButton(
        '「Здоровье души и тела подопечной тоже входит в обязанности тренера.» (расположение +20)',
        1,
      );
      era.printButton(
        `「В решающий миг не сбегу, я защищу ${urara.sex}.» (влюблённость +5)`,
        2,
      );
      const ret = await era.input();
      await inner_urara.say_as_unknown_and_wait([
        'Что бы ни стояло за этим, вы всё равно будете дорожить 『',
        urara.get_colored_actual_name(),
        ' 』? Вот оно что, вы, кому доверяет 『я』…',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Поняла. Внутри я не стану сетовать на вас, так что снаружи, пожалуйста, продолжайте заботиться о том, чтобы ',
        urara.sex,
        ' была в порядке.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'И от души надеюсь, что не настанет день, когда Урара станет топтаться на месте.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47: (() => {
    const title = 'Неожиданный разговор в конце года!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30
     * @param {PrintedSpan} call_61
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_30,
      call_61,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        'Сегодня Урара рано явилась в пустой кабинет тренера, и одна-одинёшенька ',
        urara.sex,
        ' — есть ли что-то на душе?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'А о чём ',
        urara.sex,
        ' хочет посоветоваться с тренером- ',
        you.adult_sex_title,
        ' (с вами) — извольте выслушать лично.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'В одиночестве идя по улице после праздников, ',
        you.get_colored_name(),
        '  изредка останавливается растереть ноющие суставы пальцев и, спотыкаясь, добредает обратно до Трейсена.',
      ]);
      await era.printAndWait(
        'Оставшаяся праздничная атмосфера и всё ещё радушные соседи по торговой улице увлекли тебя, и набранного снова оказалось сильно сверх меры.',
      );
      await era.printAndWait([
        'Если бы рядом была ',
        urara.get_colored_name(),
        '. Даже если ноша стала бы только тяжелее, настроение на обратном пути хотя бы было бы светлее.',
      ]);
      await era.printAndWait([
        'Бессильно растирая окоченевшие руки, ',
        you.get_colored_name(),
        '  распахивает дверь кабинета тренера, но воображаемой пустой прохлады так и не наступает.',
      ]);
      await era.printAndWait(
        'Тот, кто пришёл раньше, уже включил в комнате обогреватель и свет, и рождественские украшения, которые на днях так и не успели убрать, тоже сверкают.',
      );
      await era.printAndWait(
        'В пушистой зимней одежде розовый зверёк под кольцом тёплого света весело приводит комнату в порядок.',
      );
      await era.printAndWait([
        'А завидев того, кто входит в дверь ',
        you.get_colored_name(),
        ', давно ждавшая маленькая ',
        urara.uma_sex_title,
        ' игриво приподнимается с дивана — ',
        urara.sex,
        ' хлопает вишнёво-розовыми глазами, глядя на своего тренера.',
      ]);
      await urara.say_and_wait([
        callname,
        '  так ты на торговую улицу ходил(а)! Давай заходи, снаружи ещё очень холодно!',
      ]);
      await era.printAndWait(
        'Неожиданный сюрприз. Секунду назад ты ещё думал(а) о своей подопечной — и в следующую она правда появилась.',
      );

      era.printButton('「О… о!»', 1);
      await era.input();

      await era.printAndWait([
        'Отвечая прибежавшей помочь разобрать вещи маленькая ',
        urara.uma_sex_title,
        ', ',
        you.get_colored_name(),
        '  кажется, замечает, что что-то не так.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '  придёт прибрать кабинет тренера — не удивительно, но с другой стороны, вместо того чтобы терпеливо ждать, ',
        urara.sex,
        ' больше любит самой идти в наступление.',
      ]);
      await era.printAndWait([
        'А по напиткам и горе печенья, ещё до входа стоявшим на столе, нетрудно понять: на этот раз маленькая ',
        urara.uma_sex_title,
        ' и правда специально ждала ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Неужели ',
        urara.sex,
        ' тоже хочет с ',
        you.get_colored_name(),
        '  встретить Рождество? Но если бы ',
        urara.get_colored_name(),
        '  захотела — непременно явилась бы в сам праздник, так к чему эти приготовления?',
      ]);
      await urara.say_and_wait([
        callname,
        ', чего это ты застыл(а)! Комната уже убрана, быстрее садись!',
      ]);
      await era.printAndWait([
        'Прервав ',
        you.get_colored_name(),
        ' — размышления, маленькая ',
        urara.uma_sex_title,
        ' усаживает застывшего гостя на стул и пододвигает горку печенья на блюде прямо перед ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Эти причудливые печенья перед глазами, хоть и сохранили лишь базовую узнаваемость, зато источают натуральный аромат, какого не бывает у праздничных акционных сладостей.',
      ]);

      era.printButton('「М-м… это что?»', 1);
      await era.input();

      await urara.say_and_wait([
        'Это зайчик! Это котик! Это морковка! Это… ',
        call_61,
        '  и ',
        call_30,
        '? Ладно, неважно же!',
      ]);
      await era.printAndWait([
        'В ответ на ',
        you.get_colored_name(),
        ' — двусмысленный вопрос, ',
        urara.get_colored_name(),
        '  подумав, решает сначала ответить на тот, что конкретнее.',
      ]);
      await era.printAndWait([
        'Похоже, туда ещё замешалось нечто серьёзное, но, впрочем, как и сказала ',
        urara.get_colored_name(),
        ' — это не главное.',
      ]);
      await era.printAndWait([
        'Под ожидающим взглядом сакуровых глаз подопечной ',
        you.get_colored_name(),
        '  поднимает с блюда одно из более удачных печений и кладёт в рот.',
      ]);
      await urara.say_and_wait([
        'Хе-хе~ это всё я сделала! Всем их порции я уже разнесла, так что это всё ',
        callname,
        ' — !',
      ]);
      await urara.say_and_wait([
        callname,
        ', печенье, что Урара испекла, вкусное? Какие впечатления?',
      ]);
      await era.printAndWait([
        'Пока сладкий молочный вкус постепенно и ровно растекается по языку, невольно, ',
        you.get_colored_name(),
        '  протягивает руку к следующему на блюде.',
      ]);
      await era.printAndWait([
        'Весьма вкусно. Даже если форму не разобрать, как печенье оно ничуть не уступает ',
        you.get_colored_name(),
        ' — недавно отведанным самодельным подаркам.',
      ]);
      await era.printAndWait([
        'Единственная проблема, пожалуй, лишь ',
        urara.get_colored_name(),
        ' — пыл, не уступающий всем с торговой улицы, — уж слишком много напекла.',
      ]);
      await era.printAndWait([
        'Слегка проглотив второе печенье, ',
        you.get_colored_name(),
        '  к серьёзно ждущей маленькой ',
        urara.uma_sex_title,
        ' полушутя даёт свою высшую оценку.',
      ]);

      era.printButton(
        '「Раз такой вкус получается, Урара потом точно станет хорошей женой.»',
        1,
      );
      await era.input();

      if (high_relation) {
        await urara.say_and_wait(
          'Э? А, э? М-м! Урара потом станет хорошей женой!',
        );
        await urara.say_and_wait([
          'Так что ',
          callname,
          '  потом тоже станет хорошим мужем! Эх-хе-хе~ хе-хе… уу…',
        ]);
        await era.printAndWait([
          'От стыда прижав уши, вместе с всё ниже сходящим хвостиком голоса, ',
          urara.get_colored_name(),
          ' — и без того крохотное тельце на глазах сжалось ещё.',
        ]);
        await urara.say_and_wait(
          'Даже если я не очень понимаю, мама говорила: шутя так, надо учитывать, что тот, с кем шутишь, может воспринять всерьёз, да…?',
        );
        await era.printAndWait([
          'Из-за горки печенья высунув половину напряжённого и пунцового личика, ',
          urara.get_colored_name(),
          '  говорит — на треть растерянно, на семь застенчиво.',
        ]);
        await era.printAndWait('…Правда не понимает?');
      } else {
        await urara.say_and_wait(['Э? ', callname, '! Так говорить нельзя!']);
        await urara.say_and_wait(
          'Хоть я не очень понимаю, мама говорила мне: такие шутки просто так не шутят!',
        );
        await era.printAndWait([
          'Хоть на словах и твердит, что не понимает, ',
          urara.get_colored_name(),
          ' — тело честно прячет зардевшееся лицо за обратной стороной горки печенья.',
        ]);
        await urara.say_and_wait([
          callname,
          ' Не говорил(а) же такое многим? Нельзя! Если все воспримут всерьёз — будет плохо!',
        ]);
        await era.printAndWait([
          'Словно браня нескромного взрослого, выглянувшая из-за укрытия пара розовых чехлов на ушах суетливо ',
          you.get_colored_name(),
          '  тычет пальцами.',
        ]);
        await era.printAndWait('…Так ведь прекрасно понимает?');
      }
      era.println();
      await era.printAndWait([
        'Погоди, только что вроде сказано не то… нет! Что это к ',
        urara.get_colored_name(),
        '  такое говорится?!',
      ]);
      await era.printAndWait([
        'Получив от подопечной неожиданно шокирующий ответ, ',
        you.get_colored_name(),
        '  чувствует проблеск чудной радости и в то же время лёгкую тошноту от собственных слов.',
      ]);
      await era.printAndWait([
        'Сегодняшняя ',
        urara.get_colored_name(),
        '  и так уже странновата, а сам(а) ещё отпускает такие прямолинейные странные шутки — разве это не убило разговор?',
      ]);
      await era.printAndWait([
        'Однако как раз когда ',
        you.get_colored_name(),
        '  печалится о своей опрометчивости, сидящая напротив ',
        urara.get_colored_name(),
        '  сама берёт со стола одно печенье.',
      ]);
      await urara.say_and_wait([
        'Кстати, ',
        callname,
        ', из-за чего стал(а) тренером?',
      ]);
      await era.printAndWait([
        'Сейчас ',
        you.get_colored_name(),
        '  чуть хочет переспросить, почему такая тема, но раз спрашивает маленькая ',
        urara.get_colored_name(),
        ', то и незачем спешить с ответом.',
      ]);
      await era.printAndWait([
        'Даже встречая сейчас что-то неясное, потом всегда будет шанс понять, зачем это было: с ',
        urara.get_colored_name(),
        '  в общении всегда так.',
      ]);

      era.printButton(
        '「Но сначала уточню: интерес и пыл — это ведь не то, что Урара хочет услышать?»',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Я не сомневаюсь в ',
        callname,
        ' — чувствах, но я хочу знать, чего ',
        callname,
        '  хочет получить!',
      ]);
      await era.printAndWait([
        'Не про мечту спрашивает, а про желания, ',
        urara.get_colored_name(),
        '  вот, значит, какая острая? Нынешняя маленькая ',
        urara.uma_sex_title,
        ' и правда не стоит недооценивать.',
      ]);
      await era.printAndWait([
        'Придётся юной в пору роста ',
        urara.teen_sex_title,
        ' рассказывать взрослую историю, полную мирских желаний, мм…',
      ]);
      await era.printAndWait([
        'Чуть собрав мысли, глубоко вдохнув, словно со вздохом, ',
        you.get_colored_name(),
        '  под ',
        urara.get_colored_name(),
        ' — ясным взглядом медленно произносит первое слово.',
      ]);

      era.drawLine({ content: 'Время рассказа' });
      await era.printAndWait(
        'Ничего особенного. Если к самому началу — тот человек хотел простого: стабильную работу, зарплату, или, скажем, деньги?',
      );
      await era.printAndWait([
        you.sex,
        'Просто позже, когда выбирал, пошёл по специальности — в ту самую стабильную и денежную профессию, вот и всё.',
      ]);
      await era.printAndWait(
        'По крайней мере тогда — а может, и сейчас? — эта профессия в глазах людей весьма достойная, а у того человека как раз водился талант.',
      );
      await urara.say_and_wait(
        'Вот оно как. Это потому, что дома не хватало денег?',
      );
      await era.printAndWait(
        'Нет же. Тот человек родом не из бедности, не было ни нужды, ни огромного внешнего давления, просто…',
      );
      await era.printAndWait(
        'Всего лишь не раз проходил мимо ярких витрин и не мог купить даже одну вещь, которую хотел. Вот и всё.',
      );
      await era.printAndWait([
        'Так что, мм… в сущности, просто не хватало чувства безопасности и удовлетворённости, ',
        you.sex,
        ' возможно, хочет этим развеять тревогу, что тянется из прошлого.',
      ]);
      await urara.say_and_wait(
        'Но тот человек в конце концов тоже исполнил желание, да?',
      );
      await era.printAndWait([
        'Но тому человеку очень не хватало амбиций: ',
        you.sex,
        ' потратил(а) уйму сил, чтобы дойти до нынешнего шага, по дороге несколько раз чуть не сдался(ась).',
      ]);
      await era.printAndWait([
        'Благословение Трёх богинь? Или ',
        you.sex,
        ' труслив(а) настолько, что не смеет себя бросить?',
      ]);
      await era.printAndWait(
        'В итоге тот человек, всю дорогу спотыкаясь, всё же благодаря этому вошёл в Центральный — уж слишком легко отделался.',
      );
      await urara.say_and_wait('Тогда… а что тот человек думает сейчас?');
      await era.printAndWait(
        'Профессия-то хорошая, да? Еда и жильё включены, льготы и положение в обществе неплохие; зарплата капает странновато, но хватает.',
      );
      await urara.say_and_wait(
        'Ага-ага! То есть тот человек тоже взял первое место, да!',
      );
      await era.printAndWait([
        'Раньше, пожалуй, сказал(а) бы, что нет. Но сейчас ',
        you.sex,
        ' наверное, вот-вот найдёт своё желанное первое место—',
      ]);
      era.drawLine();

      await you.say_and_wait(
        'И всё это ещё и благодаря тому, что у того человека теперь есть особая подопечная.',
        true,
      );
      await era.printAndWait([
        'Так и не сумев произнести концовку, ',
        you.get_colored_name(),
        '  с горькой усмешкой обрывает рассказ о прошлом. Поднимает голову — ожидаемые брезгливость, жалость, непонимание…',
      ]);
      await era.printAndWait([
        'Так и не появились. ',
        urara.get_colored_name(),
        '  не проявила ни одной привычной черты, ',
        urara.sex,
        ' просто очень серьёзно слушала ',
        you.get_colored_name(),
        ' — рассказ.',
      ]);
      await era.printAndWait([
        'Но вот теперь беда: хоть по лицу ничего не прочесть, ',
        urara.sex,
        ' наверняка думает, что её тренер — такой назойливый, приторный взрослый…',
      ]);
      await urara.say_and_wait([
        'Ага! Урара поняла! ',
        callname,
        '  такой свежий же! Прямо как злодей-босс, который захватил Землю только чтобы смотреть на пейзаж!',
      ]);
      await you.say_and_wait(
        '…А? Свежий?! И что ещё за злодей-босс? Урара, твой тренер хоть и не очень понимает, но тоже не очень понимает—',
        true,
      );
      await era.printAndWait([
        'К сожалению, так и не смогла дать то и дело столбенеющему ',
        you.get_colored_name(),
        '  прямого ответа, ',
        urara.get_colored_name(),
        '  просто радостно улыбалась.',
      ]);
      await era.printAndWait([
        'И не выказала ни брезгливости, ни жалости, ни непонимания к взрослому, который из-за прошлого стал таким отвлечённым, — просто чистая улыбка оттого, что рядом кто-то важный.',
      ]);
      await urara.say_and_wait([
        'Хм-хм~ ',
        callname,
        '  понял『Урара』 и помог мне, сегодня Урара тоже лучше узнала『',
        callname,
        ' 』!',
      ]);
      await urara.say_and_wait([
        'Вот Урара и поняла, как такие трудные вещи рассказывать, чтобы ',
        callname,
        '  слушал и понял же!',
      ]);
      await era.printAndWait([
        'Глядя на радостную улыбку маленькой умамусумэ, ',
        you.get_colored_name(),
        '  наконец стало ясно. Ну и ну, взрослый со своими домыслами — вот дурак.',
      ]);

      era.printButton(
        '「Урара, в следующий раз, если ещё захочешь что-то узнать, спрашивай прямо, твой тренер ничего не станет утаивать.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Но такой ритм бега — это же здорово! Прямо как ',
        call_30,
        ' — книжка со сказками!',
      ]);
      await era.printAndWait([
        'Эта малышка в самом деле ангел? Взвешивая будто бы многозначительные слова маленькой подопечной, ',
        you.get_colored_name(),
        '  протянул(а) руку к следующей печеньке на блюде.',
      ]);
      await era.printAndWait([
        'Вместе с ',
        you.get_colored_name(),
        '  вместе замерли, ',
        urara.get_colored_name(),
        '  словно наконец набравшись храбрости, снова подняла взгляд на ',
        you.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([
        callname,
        ', недавно мне приснилась одна очень похожая на Урару, но очень одинокая ',
        urara.uma_sex_title,
        '.',
      ]);
      await urara.say_and_wait([
        'Во сне ',
        urara.sex,
        ' не бежала, и от всех держалась поодаль, так что Урара захотела пригласить — ',
        urara.sex,
        '.',
      ]);
      await urara.say_and_wait([
        'Но ',
        urara.sex,
        ' — улыбка и правда была очень печальной, раз за разом отдалялась от меня и в конце совсем исчезла.',
      ]);
      await urara.say_and_wait([
        'Хоть с виду мы одинаковые, Урара, если плохо, может заплакать, ',
        urara.sex,
        ' же только так молча улыбается.',
      ]);
      await era.printAndWait([
        'Опустив взгляд на свои руки, хоть улыбка ещё держалась на лице, ',
        urara.get_colored_name(),
        ' — уши уже печально повисли.',
      ]);
      await urara.say_and_wait([
        'Я ни за что не хочу, чтобы ',
        urara.sex,
        ' так и оставалась совсем одна, но ',
        urara.sex,
        ' вроде бы только и думает, что так и надо…',
      ]);
      await urara.say_and_wait([
        'Когда совсем нет сил… ',
        callname,
        '  что тогда делает?',
      ]);

      await inner_urara.say_as_unknown_and_wait([
        '…Ну и внезапная, да ещё ключевая консультация. Тогда, тренер ',
        you.adult_sex_title,
        ' (вы) какого мнения?',
      ]);
      era.printButton(
        '「Дай подумать… Как бы ни было трудно, иди в ту сторону, куда сама хочешь.」(пригодность к траве повышается)',
        1,
      );
      era.printButton(
        '「Ну… Научиться радоваться нынешним трудностям — тоже ведь счастье, да?」(пригодность к средней и длинной повышается)',
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await urara.say_and_wait([
          'Но если так, вдруг ',
          urara.sex,
          ' станет ещё печальнее…',
        ]);
        await you.say_and_wait(
          'Может, Урара сейчас ещё не согласится, но где-то с кем-то чуть-чуть поспорить всё равно не избежать, правда?',
        );
        await you.say_and_wait([
          'И Урара ведь ещё не донесла до той ',
          urara.uma_sex_title,
          ' то, что у неё на сердце? Раз ещё даже не начала — бояться нечего.',
        ]);
        await era.printAndWait([
          'Прямо как ',
          urara.get_colored_name(),
          ' — будни: приведи чувства в порядок и дальше смело иди вперёд.',
        ]);
        await era.printAndWait([
          'Вынув с блюда одно будто улыбающееся「',
          call_61,
          ' 」 печенье, ',
          you.get_colored_name(),
          '  с улыбкой отправил(а) его в ',
          urara.get_colored_name(),
          ' — маленький рот.',
        ]);
        await era.printAndWait([
          'Медленно ',
          you.get_colored_name(),
          ' — слова жевала вместе с печеньем, и, вспомнив что-то, ',
          urara.get_colored_name(),
          '  взгляд тоже посветлел—',
        ]);
      } else {
        await urara.say_and_wait('Нынешние трудности…?');
        await you.say_and_wait(
          'Урара впервые споткнулась, заводя друзей, но когда разберёшься с трудностью и оглянешься — кроме роста ещё и радость будет, правда.',
        );
        await you.say_and_wait(
          'И Урара же точно не хочет вот так сдаться? Цель Урары — чтобы всем было радостно, разве нет?',
        );
        await era.printAndWait([
          'Как ',
          urara.get_colored_name(),
          '  шаг вперёд: стоит стиснуть зубы — и даже тревога вызовет понимающую улыбку.',
        ]);
        await era.printAndWait([
          'Вынув с блюда одно с будто надутыми щёками「',
          call_30,
          ' 」 печенье, ',
          you.get_colored_name(),
          '  с улыбкой положил(а) его в ',
          urara.get_colored_name(),
          ' — ладошку.',
        ]);
        await era.printAndWait([
          'Задумчиво глядя на печенье в ладони, ',
          urara.get_colored_name(),
          '  словно что-то поняв, с улыбкой отправила его в рот—',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Похоже, маленькая ',
        urara.uma_sex_title,
        ' уже придумала ответ в сердце. С довольством к ',
        urara.get_colored_name(),
        '  кивнув, ',
        you.get_colored_name(),
        '  снова перевёл(а) взгляд на стол.',
      ]);
      await era.printAndWait(
        'По мере того как шло время, даже та гора сладостей посредине — словно преграда между сердцами — незаметно растаяла в откровенном разговоре двоих.',
      );
      await era.printAndWait([
        'Но именно поэтому сейчас уже поздновато: вместе с ',
        you.get_colored_name(),
        '  в ту же минуту понявшая это ',
        urara.get_colored_name(),
        '  тоже бросила взгляд на настенные часы у ',
        you.get_colored_name(),
        '  за плечом.',
      ]);
      await urara.say_and_wait([callname, ', дальше… а! Уже столько времени!']);
      await era.printAndWait([
        'Глянув на часы, ну да, уже время 「Dorm Curfew Sho」. Видя, как ',
        you.get_colored_name(),
        '  выпрямляет спину, ',
        urara.get_colored_name(),
        '  тоже понимающе встаёт.',
      ]);
      await era.printAndWait([
        'Но как раз перед тем, как выйти из кабинета тренера и побежать, ',
        urara.get_colored_name(),
        '  с нежеланием расставаться вставляет последний вопрос.',
      ]);
      await urara.say_and_wait([
        'Кстати! ',
        callname,
        ', скоро же Новый год! Можно нам будет и тогда вот так, как сегодня вечером?',
      ]);
      await urara.say_and_wait([
        'Я ещё много сладостей приготовлю! Так что тогда, ',
        callname,
        '  ещё будет время поиграть и со мной?',
      ]);

      era.printButton('「Если Урара захочет — то в любое время!»', 1);
      await era.input();

      await era.printAndWait([
        'Прежде чем они вдвоём весело выбежали в холодный ветер, ',
        you.get_colored_name(),
        '  удовлетворённо улыбается ',
        urara.get_colored_name(),
        '  в ответ.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Но если в следующий раз Урара приготовит сладости чуть умереннее, будет ещё лучше…',
      );
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'Сегодняшняя Урара весьма довольна, что смогла лучше узнать вас, и ещё раз благодарит за ваше терпение.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но раз Урара уже успокоилась, дальше я хотела бы, чтобы вы ответили мне ещё на один вопрос.',
      );

      await inner_urara.say_as_unknown_and_wait(
        'Так что те слова про деньги и прочее — это ваши слова от сердца? Или, иначе говоря, ваша правда?',
      );
      era.printButton(
        '「Это правда — хотя если так сказать, пошлость всё равно злит.»(расположение+20)',
        1,
      );
      era.printButton(
        '「По крайней мере, я выбрал(а) не стать тем, кого ненавижу больше всего… взрослым?»(влюблённость+5)',
        2,
      );
      ret.push(await era.input());
      await inner_urara.say_as_unknown_and_wait(
        'Вот как? Тогда и наши отношения на этом конец — шутка. Я вас не настолько ненавижу.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Да, именно 『ненавижу』. Я ненавижу большую часть людей и ',
        urara.uma_sex_title,
        ', просто вас — не настолько, по крайней мере, вы достаточно искренни.',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'Ха-а… вы ведь заметили? На нынешней Ураре сейчас проявляется невероятная способность.',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.uma_sex_title,
        'Нерешённых загадок на ней — как звёзд, и, пожалуй, лишь Три богини смогли бы объяснить, какое благословение на Ураре.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Я не люблю чудеса без оснований: доверять надежде без роду и племени — только раниться.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Я не для того, чтобы лить холодную воду, — просто я тоже когда-то… простите, я не хочу ничего скрывать, просто с чего начать эту небылицу…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но вы и впрямь ведёте будущее подопечной, так что, пожалуйста, постарайтесь нести ответственность за свой выбор.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'А та одинокая ',
        urara.uma_sex_title,
        '… думаю, своенравная ',
        urara.sex,
        ' и одна, наверное, тоже ничего.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '… привыкнет, привыкнет когда-нибудь, ко всему-всему…',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Новогодние стремления';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_15 春乌拉拉对好歌剧的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     * @param {PrintedSpan} call_77 春乌拉拉对成田路的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      opera,
      you,
      callname,
      call_15,
      call_30,
      call_61,
      call_77,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait(
        'Как вы ладите с другими, я не оцениваю, но рядом с Урарой вы, пожалуй, неожиданно сможете стать счастливым человеком.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Ха? Мама Урары… вовсе нет. 『Мамы』 Урары рассердятся.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Простите, немного разошлась: Новый год же, редкий случай —',
      );
      era.drawLine();
      await urara.print_and_wait([
        'Стоя в дверях с пакетом, полным сладостей, ',
        urara.get_colored_name(),
        '  задумчиво шевелит ушами и думает, какой сюрприз преподнести, когда увидит ',
        callname,
        ' :',
      ]);
      await urara.print_and_wait([
        call_61,
        '  сказала, что важную благодарность надо произносить официально, так что ',
        urara.get_colored_name(),
        '  хочет этим Новым годом обратиться к ',
        callname,
        '  и ещё раз всерьёз выразить свои чувства.',
      ]);
      await urara.print_and_wait(
        'В этот раз печенья в самый раз, но двоим-то хватит? И если сделать то же самое ещё раз — это ещё сюрприз?',
      );
      await urara.print_and_wait([
        'Но в прошлый раз же хвалили, так что если ',
        callname,
        '  понравится — вот и ладно! ',
        call_30,
        '  и ',
        call_77,
        '  тоже говорили, что в подарке главное — сердце!',
      ]);
      await urara.print_and_wait([
        'Точно! Подарок готов, слова благодарности выучены, всё в порядке! Налёт на ',
        callname,
        '  — подготовка OK, Урара GO!',
      ]);
      await urara.print_and_wait([
        'Глубоко вдохнув и прокрутив в голове порядок 「серьёзной благодарности」, маленькая ',
        urara.uma_sex_title,
        ' медленно тянет руку к ',
        callname,
        '  — звонку у жилья…',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Затем, обнаружив, что маленькая ',
        urara.uma_sex_title,
        ' стоит в дверях и всё никак не двинется, ',
        you.get_colored_name(),
        '  на шаг раньше открывает дверь — и удавшийся налёт всё равно пугает того, кто открыл.',
      ]);
      await urara.say_and_wait([
        'Э? ',
        callname,
        '… с Новым годом! Эм… ещё! В прошлом году ',
        callname,
        '  — столько заботы! Д-дальше…',
      ]);

      era.printButton(
        '「Спасибо! Короче, давай скорее заходи! На улице так холодно, не надо себя мучить, ладно?»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Растерянную от того, что её раскрыли, ',
        urara.teen_sex_title,
        ' пригласив в тёплую комнату, ',
        you.get_colored_name(),
        '  улыбается и тёплыми ладонями прикрывает маленькой ',
        urara.uma_sex_title,
        ' — замёрзшее до красна личико.',
      ]);
      await era.printAndWait([
        'По мере того как ледяные щёки оттаивают, ',
        urara.get_colored_name(),
        '  на лице замёрзшая улыбка тоже постепенно возвращает привычную тёплую и яркую дугу.',
      ]);
      await urara.say_and_wait([
        'Хе-хе～ прости, ',
        callname,
        ', остальное, как и думала, так и не вспомнила…',
      ]);

      era.printButton(
        '「Ничего, благодарность я уже получил(а), да и 『Simple is best』, вот.»',
        1,
      );
      await era.input();

      if (era.get('abl:52:英语') < 2) {
        await urara.say_and_wait('Sim…? Мм… а это что значило?');
        await era.printAndWait([
          'То, что ',
          urara.get_colored_name(),
          '  плохо знает английский, ещё в пределах ожидаемого. Бессильно гладя её по голове — ',
          urara.teen_sex_title,
          ' не противится — ',
          you.get_colored_name(),
          '  принимает пакет, полный сладостей, который ',
          urara.sex,
          ' сама и протягивает.',
        ]);
      }
      await era.printAndWait([
        'Полные выдумки самодельные печенья вместе со свежими мандаринами расставлены на столе, а маленькая печка сбоку уже готова принять моти.',
      ]);
      await era.printAndWait([
        'Любопытным взглядом осматривая ',
        callname,
        '  — жильё, маленькая ',
        urara.uma_sex_title,
        ' тоже в атмосфере, что быстро стала тёплой, сбрасывает скованность первого визита.',
      ]);
      await era.printAndWait([
        'Вместе у стола едят сладости и фрукты, и в неизменном чувстве покоя ',
        you.get_colored_name(),
        '  и ',
        urara.get_colored_name(),
        '  с паузами болтают о всяком разном.',
      ]);
      await era.printAndWait([
        'Раз ещё в конце года договорились встретить Новый год вместе, то сразу позвал(а) ',
        urara.get_colored_name(),
        '  к себе домой — и это оказалось весьма неплохим решением.',
      ]);
      await era.printAndWait([
        'Глядя на сверкающими глазами уставившуюся на пузырящиеся моти ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        '  — будто снова видит милую зверушку.',
      ]);

      era.printButton(
        '「Урара, на Новый год какие у тебя на будущие дни… амбиции?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Положив кусочек поджаренного моти в ',
        urara.get_colored_name(),
        '  — миску, ',
        you.get_colored_name(),
        '  не спеша заговаривает с тыкающей моти палочками маленькая ',
        urara.get_colored_name(),
        '  о следующем.',
      ]);
      await urara.say_and_wait(
        '『Ам』,『биции』? Это что такое… а, про эклеры, что ли?',
      );
      await era.printAndWait([
        'С длиннющей нитью моти во рту ',
        urara.get_colored_name(),
        '  склонила голову и бросила вопрос обратно.',
      ]);

      era.printButton(
        '「… Понятно, захочешь эклеров — в следующий раз куплю, но 『амбиции』 — это цели на этот год, ясно?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Так это цели! Тогда же как раньше, да? Опять бегать от души и брать кучу первых мест!',
      );
      await urara.say_and_wait([
        'Я буду бежать изо всех сил! ',
        callname,
        '  будет и дальше помогать Ураре, да? Надо всех осчастливить!',
      ]);
      await era.printAndWait([
        'Но разве не этим мы занимаемся с самого контракта? Перед ',
        urara.get_colored_name(),
        '  — милой улыбкой, ',
        you.get_colored_name(),
        '  остаётся лишь развести руками.',
      ]);
      await era.printAndWait([
        urara.sex,
        ' — слова как всегда туманны: то ли сказать, что ',
        urara.sex,
        ' всё ещё совсем ребёнок, или всё же думает, но слишком многое опускает?',
      ]);
      await era.printAndWait([
        'Но время не ждёт: раз подопечная говорит, что готова, пора составлять план следующих шагов.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Итак, столь искусный в загадках тренер ',
        you.adult_sex_title,
        ' (вы) считаете, чем в ближайшее время Ураре лучше всего заняться —',
      ]);
      era.printButton(
        '「Кстати, как оценки за недавние экзамены на конец года? Есть прогресс?」(характер+10)',
        1,
      );
      era.printButton(
        '「Сейчас же Новый год, редкий шанс передохнуть — может, побольше отдохнёшь?」(выносливость+10)',
        2,
      );
      era.printButton(
        '「Кстати, Урара, что ты в последнее время смотришь на отдыхе — мангу или аниме?」(очки навыков+20)',
        3,
      );
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await urara.say_and_wait('Э-э-э-э-э~!?');
          await era.printAndWait(
            'На Новый год про учёбу — чистый дьявольский замысел! Нет на свете более противного взрослого!',
          );
          await era.printAndWait([
            'В ',
            callname,
            '  — будто невзначай брошенном вопросе даже вечно оптимистичная ',
            urara.get_colored_name(),
            '  впала в сильнейшее смятение!',
          ]);
          await era.printAndWait([
            'Конечно, ',
            you.get_colored_name(),
            '  давно знает ',
            urara.get_colored_name(),
            '  — успеваемость: такой вопрос всего лишь повод слегка одёрнуть 「трёхминутную ',
            urara.teen_sex_title,
            ' 」 — лёгкое предупреждение.',
          ]);
          if (era.get('abl:52:英语') < 2) {
            await era.printAndWait(
              'Да и не знать даже такой простой английский — уже слишком: воспитатель не может просто закрыть на это глаза.',
            );
          }

          era.printButton(
            '「Не бойся, Урару не ругают: просто постарайся перебороть, с задором станет лучше.」',
            1,
          );
          await era.input();

          await urara.say_and_wait(
            'У-у… но бегать и скачки всё равно интереснее! Но, но… я поняла…',
          );
          await era.printAndWait([
            urara.get_colored_name(),
            '  Ах, не вини ',
            callname,
            '  в подлости: это не удар по подопечной, просто не трёхминутный пыл, а постоянство даёт бежать быстрее, ясно?',
          ]);
          await era.printAndWait([
            'Перед маленькая ',
            urara.uma_sex_title,
            ' с двумя обиженными сакурами в глазах и набитыми моти, как у хомячка, щёчками, ',
            you.get_colored_name(),
            '  виновато отводит взгляд.',
          ]);
          await urara.say_and_wait([
            'Как же так… я же ещё хотела ночевать у ',
            callname,
            '  дома…',
          ]);
          await you.say_and_wait('Нет, так я и говорю… э?!');
          break;
        case 2:
          await urara.say_and_wait(
            'А? Больше отдыхать? Но я и так всегда отлично сплю!',
          );

          era.printButton(
            '「Раз уж Новый год, лучше закончить всё здоровой: выпала передышка — нечего спешить.」',
            1,
          );
          await era.input();

          await era.printAndWait([
            'Для отличной скаковой ',
            urara.uma_sex_title,
            ' самое главное — здоровье: если отдых не брать всерьёз, сколько ни тренируйся в будни, при травме это не пригодится.',
          ]);
          await era.printAndWait([
            'Да и дальше тренировки, скорее всего, будут всё жёстче: беречь здоровье очень важно, особенно для ',
            urara.get_colored_name(),
            ' .',
          ]);
          await urara.say_and_wait([
            'Тогда… раз ',
            callname,
            '  так говорит, я теперь буду чаще докучать ',
            callname,
            ' , хорошо?',
          ]);
          await era.printAndWait([
            'Хотя хотелось сказать, чтобы ',
            urara.get_colored_name(),
            '  в последнее время побольше спала: ребёнок всё-таки растёт, но раз ',
            urara.sex,
            ' готова приходить, то ',
            you.get_colored_name(),
            '  тоже не против.',
          ]);
          await urara.say_and_wait([
            'Так что сегодня я как раз уже собралась ночевать у ',
            callname,
            '  дома!',
          ]);
          await era.printAndWait([
            'Тогда, может, и неплохо… погоди — ',
            urara.sex,
            ' что сказала последней фразой?',
          ]);
          break;
        case 3:
          await urara.say_and_wait([
            'Н-н… в последнее время смотрю ',
            call_15,
            '  — рекомендованное аниме! Про гонки! И ещё, и ещё…',
          ]);
          await era.printAndWait([
            'В ',
            urara.get_colored_name(),
            '  — возбуждённом рассказе, достав телефон, ',
            you.get_colored_name(),
            '  быстро находит это фантастическое аниме про гонки.',
          ]);
          await era.printAndWait(
            'Связка гонщика и ИИ, конфликт идей — ИИ ведёт гонку за пилота или изо всех сил его поддерживает, поединок лучших друзей на весь газ…',
          );
          await era.printAndWait([
            'Может, для тренировок найдётся вдохновение — вот, это! Хотя кто бы мог подумать, что ',
            opera.get_colored_name(),
            '  порекомендует такое аниме.',
          ]);
          await urara.say_and_wait([
            'Кстати, ',
            callname,
            ', как раз сегодня вечером я ночую, так что давай вечером посмотрим вместе!',
          ]);

          era.printButton(
            '「Хорошо! Как съедим сладости — сразу смотрим… стоп, что?」',
            1,
          );
          await era.input();
      }
      era.println();
      await urara.say_and_wait([
        'А! Я забыла сказать ',
        callname,
        ' ! Ничего, Урара уже всем сказала, и заявку на ночёвку тоже оформила!',
      ]);
      await era.printAndWait([
        'Глядя на ',
        you.get_colored_name(),
        '  — внезапно очнувшееся удивлённое лицо, маленькая ',
        urara.uma_sex_title,
        ' думает, что ',
        you.get_colored_name(),
        '  беспокоится, что ',
        urara.sex,
        ' не подготовилась, и спешит к ',
        you.get_colored_name(),
        '  объясняет.',
      ]);

      era.printButton(
        '「Нет, подожди, я не про то, я к тому… ну, а если твой тренер — плохой человек?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Э? То есть ',
        callname,
        ' считает себя плохим человеком?',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          'На самом деле ',
          you.get_colored_name(),
          ' хочет сказать ',
          urara.get_colored_name(),
          ' даже будучи ',
          urara.uma_sex_title,
          ' должна беречь себя и не доверять просто так взрослому, которого знает всего полгода.',
        ]);
        await era.printAndWait(
          'Таких случаев в обществе полно: даже если это тренер, с которым день и ночь рядом, нельзя поручиться, что знаешь до конца.',
        );
        await era.printAndWait([
          'Но насчёт того, плохой ли человек… поднимая взгляд на ',
          urara.get_colored_name(),
          ' — на её улыбку — даже если и так, трудно признаться ей в лицо, пока ',
          urara.sex,
          ' так улыбается.',
        ]);
        await era.printAndWait([
          'Но при первой встрече кто-то явно хотел тогда ещё незнакомую маленькую ',
          urara.uma_sex_title,
          ' лапать…',
        ]);
      } else {
        await era.printAndWait([
          'Хотя изначально хотелось, чтобы ',
          urara.get_colored_name(),
          ' не доверяла просто так взрослому, которого знает всего полгода, но эти слова из ',
          you.get_colored_name(),
          ' — уст звучат уже не совсем уместно.',
        ]);
        await era.printAndWait([
          'Может, и правда плохой человек? В общем, обращая к ',
          urara.get_colored_name(),
          ' такие увещевания, ',
          you.get_colored_name(),
          ' от своих прежних слов и дел тоже не может откреститься.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' хотя в действиях всё время держится близко, но ',
          you.get_colored_name(),
          ' хорошо знает, что ',
          urara.sex,
          ' далеко не так весела, как улыбка на лице.',
        ]);
        await era.printAndWait([
          'Может, и до сих пор маленькая ',
          urara.uma_sex_title,
          ' лишь через силу терпит упадок духа — только чтобы ',
          urara.sex,
          ' могла жаться к своему тренеру. Тоже возможно.',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Кажется, поняв, почему ',
        you.get_colored_name(),
        ' замолчал(а), ',
        urara.get_colored_name(),
        ' с улыбкой ставит миску и палочки, пододвигает стул и садится рядом с ',
        you.get_colored_name(),
        ' — боку.',
      ]);
      await urara.say_and_wait([
        'Плохой — тоже ничего? Потому что я хочу доверять ',
        callname,
        '!',
      ]);

      era.printButton(
        '「Это не та проблема, которую одним доверием решишь…」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Но я не хочу по одним чувствам отдаляться от ',
        callname,
        ', даже если ',
        callname,
        ' плохой человек, Урара всё равно будет жаться к ',
        callname,
        ' — боку!',
      ]);
      await urara.say_and_wait([
        'К тому же ',
        callname,
        ' помогает Ураре и не такой уж плохой! Так что даже если плохой — обязательно сможет стать хорошим!',
      ]);
      await urara.say_and_wait([
        'Поэтому я и ',
        callname,
        ' вместе! Вдвоём обязательно сможем, как в трёхногом забеге…? так и дальше!',
      ]);
      await era.printAndWait([
        'Сейчас ',
        urara.get_colored_name(),
        ' сияет, как герой из токусацу, а может, ',
        urara.sex,
        ' всегда была такой.',
      ]);
      await era.printAndWait([
        'Впрочем, трёхногий забег? ',
        urara.get_colored_name(),
        ' и вправду знает такое слово? Кто научил ',
        urara.sex,
        ' этому?',
      ]);
      if (
        era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数') ||
        era.get('love:52') >= 50
      ) {
        await urara.say_and_wait([
          'И хотя знакомы всего полгода, но ',
          callname,
          ' давно уже столько-столько всего с Урарой сделал(а), да?',
        ]);
        await urara.say_and_wait([
          'Урара ведь совсем не испугалась, а ',
          callname,
          ' вдруг бьёт отбой! Что, ',
          callname,
          ' стесняется?',
        ]);
        await era.printAndWait([
          'Ха-а, вот уж правда ',
          urara.get_colored_name(),
          ' ткнула в больное. Перед таким фактом ',
          you.get_colored_name(),
          ' остаётся лишь ответить горькой улыбкой.',
        ]);
      }
      era.println();
      era.printButton(
        '「Хм… но есть ещё вариант: а если твой тренер на самом деле большой серый волк, который хочет съесть Урару?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Не то вспомнив что-то, не то просто желая продолжить разговор, сменив лицо на более серьёзное, ',
        you.get_colored_name(),
        ' продолжает спрашивать.',
      ]);
      await urara.say_and_wait([
        'Большой серый волк правда страшный! ',
        callname,
        ' правда так сделает? Урара будет Красной Шапочкой?',
      ]);
      await urara.say_and_wait([
        'Эх-хе-хе~ ',
        callname,
        ' говорит, что съест Урару, — так Ураре ждать этого или нет?',
      ]);
      if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
        await urara.say_and_wait(
          'А, нечаянно забыла! Большой серый волк на самом деле уже давно съел Красную Шапочку!',
        );
        await urara.say_and_wait([
          'Тогда, большой серый волк ',
          you.adult_sex_title,
          ', Урара-то вкусная?',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Как ни странно, хотя жалась прямо к ',
        you.get_colored_name(),
        ' — боку, ',
        urara.get_colored_name(),
        ' вдруг с наивной улыбкой отвечает почти вызовом.',
      ]);
      await era.printAndWait([
        'С чистым лицом полного недоверия ',
        urara.get_colored_name(),
        ' озорно моргает, и на лице сплошное 「',
        urara.sex_code - 1 ? ' маленькая девочка' : 'маленький мальчик',
        ' — самодовольство」.',
      ]);
      await era.printAndWait(
        'Похоже, хотя тягаться с ребёнком нехорошо, всё же стоит как следует вернуть себе место.',
      );
      await era.printAndWait([
        'Встаёшь с озорным умыслом, не дожидаясь, пока ',
        urara.get_colored_name(),
        ' среагирует, ',
        you.get_colored_name(),
        ' тут же протягивает руки и ',
        urara.sex,
        ' заключает в объятия.',
      ]);

      era.printButton(
        `「Раз Урара так говорит, тогда тренер сейчас и попробует, какова ${urara.sex} на вкус.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(['И-и, э? ', callname, '……?']);
      await era.printAndWait([
        'Не обращая внимания на то, что ',
        urara.teen_sex_title,
        ' совсем растерялась, ',
        you.get_colored_name(),
        ' подхватывает принцессой — раз, и ',
        urara.sex,
        ' уже на руках — и ловко заносит её в какую-то комнату с кроватью.',
      ]);
      await era.printAndWait([
        'Неожиданно лёгкая ноша — ',
        urara.get_colored_name(),
        ' — 「небрежно」 отправляется на кровать, а ',
        you.get_colored_name(),
        '  обратным движением 「с силой」 захлопывает дверь спальни.',
      ]);
      await era.printAndWait([
        'В миг, когда тело шмякнулось на постель, ',
        urara.teen_sex_title,
        ' — выражение с прежней застенчивой растерянности вспыхивает румянцем вперемешку со страхом.',
      ]);
      await era.printAndWait([
        'Кажется, даже вырываться забыла: перед недобрым умыслом маленькая ',
        urara.uma_sex_title,
        ' лишь прижимает уши, зажимает хвост и в страхе сворачивается на кровати в комочек.',
      ]);
      await urara.say_and_wait([
        callname,
        '? Сейчас Урара ещё не хочет спать, ну? ',
        callname,
        '…? Уа-а~',
      ]);
      await era.printAndWait([
        'И тут же среди ',
        urara.teen_sex_title,
        ' — звонкого вскрика растерянная, совсем беспомощная ',
        urara.get_colored_name(),
        '  — ',
        you.get_colored_name(),
        '  хватает за оба запястья и грубо прижимает к кровати.',
      ]);
      await era.printAndWait([
        'Придавленная самым близким взрослым, чувствуя, как тело постепенно обволакивают, ',
        urara.teen_sex_title,
        ' в широко раскрытых вишнёвых зрачках собираются слёзы.',
      ]);
      era.println();
      if (
        era.get('talent:52:喜欢痛苦') ||
        era.get('exp:52:受虐高潮次数') >= 2
      ) {
        await urara.say_and_wait(
          'Сейчас съедят, надо скорее сопротивляться… но тело опять не слушается, не двигается…',
          true,
        );
        await urara.say_and_wait([
          'Рассерженный(ая) ',
          callname,
          '  что со мной сделает? С Урарой поступят ещё жесточе, чем раньше?',
        ]);
        await urara.say_and_wait([
          'Может, в этот раз ',
          callname,
          '  даже запрёт — и когда Урара снова увидит всех, тело и душа уже сломаются, тоже может быть;',
        ]);
        await urara.say_and_wait(
          'Но стоит только подумать об этом — тело само не может не возбуждаться. Может, меня уже давно сломали…',
        );
        await urara.say_and_wait('Вот бы… поласковее…', true);
      } else if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
        await urara.say_and_wait(
          [
            callname,
            '  здесь будет делать такое? ',
            callname,
            '  Сейчас вид такой странный…',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            'Но ведь сейчас нельзя, а тело само обмякает, и ',
            callname,
            '  когда это делает, всегда довольно бережно, так что…',
          ],
          true,
        );
        await urara.say_and_wait(
          'С Урарой поступят грубо? Будет больно? Случится что-то страшное?',
          true,
        );
        await urara.say_and_wait(
          'Но почему, стоит подумать, что сделают и то и сё, тело так ужасно горячее?',
          true,
        );
        await urara.say_and_wait(
          ['Если ', callname, '  так хочет — тогда и Урара тоже…'],
          true,
        );
      } else {
        await urara.say_and_wait(
          [
            'Сейчас надо скорее вырваться, даже если это ',
            callname,
            '  — всё равно нельзя, но почему, стоит взглянуть на ',
            callname,
            ', руки и ноги совсем не держат силы…',
          ],
          true,
        );
        await urara.say_and_wait(
          'В груди так больно колотится, а тело становится мягким-мягким, будто… даже если этот человек съест — тоже ничего…',
          true,
        );
        await urara.say_and_wait(
          [
            'Дальше с Урары сорвут одежду и силой изнасилуют, совсем как ',
            call_30,
            '  в припрятанной манге — с героиней там было так же…',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            'Запах взрослого, так близко… ',
            callname,
            ' — запах такой хороший, приятно до того, что не хочется сопротивляться, но почему так…',
          ],
          true,
        );
        await urara.say_and_wait(
          ['Так и вправду можно? Отдать тело ', callname, '  и всё такое…'],
          true,
        );
      }
      era.println();
      await era.printAndWait([
        'Словно приняв судьбу, ',
        urara.teen_sex_title,
        ' под ',
        you.get_colored_name(),
        '  закрывает глаза.',
      ]);
      await era.printAndWait([
        'Но маленькая ',
        urara.uma_sex_title,
        ' так и не дождалась жуткой участи из фантазий: отпустив ',
        urara.get_colored_name(),
        ' — руку, ',
        you.get_colored_name(),
        '  заносит палец — и ',
        urara.teen_sex_title,
        ' получает лёгкий щелчок по лбу: 「па」.',
      ]);
      await urara.say_and_wait('Уэ?');
      await era.printAndWait([
        'Изумлённо раскрыв ещё мокрые от слёз глаза, ',
        urara.get_colored_name(),
        '  видит уже снова как всегда: стоит в сторонке, не зная, плакать или смеяться, ',
        you.get_colored_name(),
        '.',
      ]);

      era.printButton(
        `「Вот поэтому: ведь ${urara.uma_sex_title} запросто может оттолкнуть человека — так что это сейчас что такое было?»`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Но… это потому, что ',
        callname,
        '  это ',
        callname,
        '……',
      ]);

      era.printButton(
        '「А если Урара потом встретит других, с кем придётся быть близко, и они тоже окажутся серыми волками?»',
        1,
      );
      await era.input();

      await urara.say_and_wait('Уу… это…');
      await era.printAndWait([
        'Видя, что и вправду вот-вот расплачется, ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        '  бессильно садится туда, где ',
        urara.sex,
        ', и осторожно гладит её волосы — ',
        urara.sex,
        ' понемногу затихает.',
      ]);
      await era.printAndWait([
        'После того как немного уняли, наконец успокоившаяся ',
        urara.get_colored_name(),
        '  будто от усталости прислоняется к ',
        you.get_colored_name(),
        ' — боку.',
      ]);
      await era.printAndWait([
        'Не слишком ли зашли? Но когда ',
        you.get_colored_name(),
        '  опрокидывает, ',
        urara.get_colored_name(),
        '  показывает такое лицо, будто 「жаждущая случки ',
        urara.phy_sex_title,
        ' 」…',
      ]);
      await era.printAndWait([
        'Сильно потёрла глаза и нежно прижавшись к ',
        you.get_colored_name(),
        '  маленькая ',
        urara.uma_sex_title,
        ' влажным взглядом смотрит на ',
        you.get_colored_name(),
        '.',
      ]);

      await urara.say_and_wait([
        'Тогда… ',
        callname,
        '  правда уже не будет делать?',
      ]);
      era.printButton(
        '「…Сейчас хорошей девочке пора умыться и спать, ну? Я приберу стол и лягу снаружи.»(расположение+20)',
        1,
      );
      era.printButton(
        '「…Даже серый волк не станет в такой неподходящий момент съедать Красную Шапочку.»(влюблённость+5)',
        2,
      );
      ret.push(await era.input());

      await era.printAndWait([
        'Глядя на ',
        you.get_colored_name(),
        '  уходящую спину, ',
        urara.get_colored_name(),
        '  открывает рот, хочет что-то сказать, но лишь вслед за ',
        you.get_colored_name(),
        '  поднимается.',
      ]);
      await era.printAndWait([
        'И снова ',
        you.get_colored_name(),
        '  относит обратно в комнату, так и не смогла выговорить просьбу остаться, лишь провожает взглядом ',
        you.get_colored_name(),
        '  небрежно гасит свет, и силуэт скрывается за дверью.',
      ]);
      await urara.say_and_wait([
        'В голове всё ещё каша… но Урара всё равно хочет вместе с ',
        callname,
        '  стоять бок о бок…',
      ]);
      await urara.say_and_wait([
        'Просто в этот раз тоже не вышло найти момент и с ',
        callname,
        '  поговорить про Урару…',
      ]);
      await urara.say_and_wait([
        'Уу… здесь всё сплошь ',
        callname,
        '  — запах же…',
      ]);
      await urara.say_and_wait(
        'Но это чужая кровать, так что самой себе приятное делать нельзя же…',
      );
      await era.printAndWait([
        'с лёгким сожалением бормоча вполголоса, отказавшаяся сопротивляться теплу и чувству покоя маленькая ',
        urara.uma_sex_title,
        ', в ',
        you.get_colored_name(),
        '  — одеяле тихонько уснула.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Нынешней ночью вы, породнившиеся сердцем с Урарой, довольны?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Двое на трёх ногах — формулировка и романтичная, и бесполезная, да ещё одно из самых нелюбимых мною выражений.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Но вкусы тут ни при чём, ведь это непременно будет история, которую『вы』и『',
        urara.get_colored_name(),
        ' 』напишете вместе.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Итак, вы, чья история официально вступила в середину, — вы сейчас『хороший тренер』или『злой серый волк』?',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = 'Внезапный натиск сердца!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Валентинов день и шоколад — в сущности лишь связка маркетинга и товара, просто на удивление не противно.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Не поймите превратно: наблюдать за дурацкими парочками, утопающими в праздничной атмосфере, мне куда менее интересно, чем шоколад.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Мм? Нет уж? Вовсе не то чтобы особенно нравился вкус шоколада.',
      );
      era.drawLine();
      await era.printAndWait(
        'Рано утром: подъём, умывание, одежда, наспех проглоченный завтрак и, стоя у двери, мимоходом взгляд на календарь.',
      );
      await era.printAndWait([
        'Сегодня Валентинов день, но даже так есть установленное расписание. Коротко поправив одежду, ',
        you.get_colored_name(),
        '  толкает дверь жилья.',
      ]);
      await era.printAndWait([
        'Затем нежданный зверёк тотчас высунул из-за двери два ушка и слишком рано вломился в ',
        you.get_colored_name(),
        '  сегодняшнее расписание.',
      ]);
      await era.printAndWait([
        'Едва устоявшая на ногах, обложенная сумками и свёртками ',
        urara.get_colored_name(),
        '  опустила палец, которым уже собиралась стучать, шагнула вперёд и с улыбкой обняла ',
        you.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([callname, '!Рассвело, доброе утро—!']);

      era.printButton('「О! Добр… Урара?!」', 1);
      await era.input();

      await urara.say_and_wait('Хе-хе~ прости, что побеспокоила—!');
      await era.printAndWait([
        'В крепких объятиях ',
        urara.get_colored_name(),
        '  сжатый(ая), чуть теплее человека маленькая ',
        urara.uma_sex_title,
        ' сквозь зимнюю одежду своему ',
        callname,
        '  передаёт ',
        urara.sex,
        ' — уникальное тепло.',
      ]);
      await era.printAndWait([
        'Февральский воздух всё ещё не назовёшь тёплым, но раз прибежала, сейчас маленькая ',
        urara.uma_sex_title,
        ' — тело источает тёплый живой аромат.',
      ]);
      await era.printAndWait([
        'А в сегодняшнем первом близком касании, окутанный(ая) чуть детским объятием подопечной, ',
        you.get_colored_name(),
        '  тоже улавливает в этом нотку непривычной двусмысленности.',
      ]);

      era.printButton('「Стой, ты чего вдруг прибежала?」', 1);
      await era.input();

      if (high_relation) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait([
            'Почему же? ',
            callname,
            ' , хочешь угадать? Хотя и без угадывания ясно: сегодня же особый день!',
          ]);
          await era.printAndWait([
            'Разжав объятия, с мягким лицом маленькая ',
            urara.uma_sex_title,
            ' привстала на цыпочки и озорно на ',
            you.get_colored_name(),
            '  — губах оставила маленький сладкий поцелуй.',
          ]);
          await urara.say_and_wait([
            'Это ',
            callname,
            '  — самый любимый поцелуй! И ещё фирменный урарин『шоколад хонмэй』… так ведь говорят, да?',
          ]);
          await era.printAndWait([
            'Достав из-под одежды изящно упакованную коробочку, ',
            urara.get_colored_name(),
            '  вложила ещё хранящий тепло тела шоколад ',
            you.get_colored_name(),
            '  — в руки.',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            '  точно знаешь, да? Даже Урара помнит, что сегодня надо делать!',
          ]);
          await era.printAndWait([
            'Выпустив из объятий ',
            you.get_colored_name(),
            ', маленькая ',
            urara.uma_sex_title,
            ' пошарив в кармане пальто, вытащила изящно упакованную коробочку.',
          ]);
          await urara.say_and_wait([
            'Та-дам—! ',
            callname,
            ' , знаешь, что внутри? Внутри то, от чего всем будет радостно!',
          ]);
          await urara.say_and_wait([
            'Сегодня подарю ',
            callname,
            '  шоколад марки Урара! Сейчас же открывай и смотри!',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          'Э? ',
          callname,
          ' , не помнишь, какой сегодня день? Н-н… тогда Урара расскажет ',
          callname,
          '  же!',
        ]);
        await era.printAndWait([
          'Смущённо достав из-за пазухи изящную коробочку, ',
          urara.get_colored_name(),
          '  вложила ещё хранящий тепло тела шоколад ',
          you.get_colored_name(),
          '  — в руки.',
        ]);
        await urara.say_and_wait([
          'Валентинов『шоколад хонмэй』…? Так ведь говорят? Короче, для ',
          callname,
          ' ! И ещё вот это…',
        ]);
        await era.printAndWait([
          'Заодно с тем, как всунула шоколад, маленькая ',
          urara.uma_sex_title,
          ' тоже тихонько привстала на цыпочки и, пока не смотрят, вишнёвыми губами на ',
          you.get_colored_name(),
          '  — щеке легонько клюнула.',
        ]);
      } else {
        await urara.say_and_wait(
          'Потому что сегодня же Валентинов день? Так что Урара всем наделала много шоколада! Подожди чуть…',
        );
        await era.printAndWait([
          'Покопавшись в сумках рядом, ',
          urara.get_colored_name(),
          '  вложила красиво упакованную коробку шоколада ',
          you.get_colored_name(),
          '  — в руки.',
        ]);
        await urara.say_and_wait(
          'Н-н… н! Это гири, да! Шоколад гири… по крайней мере все сказали, что надо так говорить!',
        );
        await urara.say_and_wait([
          'Но Урара ведь очень благодарна ',
          callname,
          ', так что этот тоже особый! ',
          callname,
          ' , хочешь сейчас открыть и посмотреть?',
        ]);
      }
      await era.printAndWait([
        'В ',
        urara.get_colored_name(),
        '  — торопящем взгляде разворачиваешь обёртку, а внутри явно рыжеватый… нет, густо-оранжевый шоколад.',
      ]);
      await era.printAndWait(
        'Это правда тот цвет, какой бывает у шоколада? И что вообще добавили, чтоб шоколад стал таким ярким…',
      );

      era.printButton('「Цвет… очень яркий…」', 1);
      await era.input();

      await urara.say_and_wait('Ну как? Выглядит очень вкусно, да?');
      await urara.say_and_wait(
        'День святого Валентина — это день, когда даришь шоколад тем, кто обычно о тебе заботится! Поэтому вчера вечером я очень старалась это сделать!',
      );
      await era.printAndWait([
        'Чтобы защитить маленькая ',
        urara.uma_sex_title,
        ' — чувства, ',
        you.get_colored_name(),
        '  с силой проглатывает вторую половину фразы «словно предупреждающая окраска ядовитых растений и животных».',
      ]);

      era.printButton('「Спасибо, но это… со вкусом апельсина?»', 1);
      await era.input();

      await urara.say_and_wait(
        'Нет, это со вкусом моркови! Получилось удачно, да? Урара ещё и заветную морковь потратила!',
      );

      era.printButton('「Морковь…?»', 1);
      await era.input();

      await urara.say_and_wait('Ага, морковь! И я её специально отобрала!');
      await urara.say_and_wait([
        'Я подумала, что ',
        callname,
        ' тоже, наверное, любит шоколад с морковью, вот я так и попробовала!',
      ]);
      await era.printAndWait([
        'Как сказать, этот ответ и внезапный, и по делу? Глядя на эту оранжевую до блеска плитку в коробке, ',
        you.get_colored_name(),
        '  погружается в раздумья.',
      ]);
      await era.printAndWait([
        'Хотя и ясно, что ',
        urara.uma_sex_title,
        ' — существо, которое очень любит морковь, но происхождение этого вещества, пожалуй, уже из области алхимии…',
      ]);
      await era.printAndWait([
        'Ладно, от ',
        urara.get_colored_name(),
        '  пугаться давно пора привыкнуть, да и получить шоколад на день святого Валентина само по себе радость.',
      ]);

      era.printButton('「Эм, шоколад, можно я прямо сейчас попробую?»', 1);
      await era.input();

      await urara.say_and_wait('Хе-хе~ угощайся! Можно и залпом всё съесть!');
      await era.printAndWait([
        'Получив ',
        urara.get_colored_name(),
        '  — разрешение, ',
        you.get_colored_name(),
        '  осторожно отламывает уголок содержимого коробки, и шоколад особенного цвета издаёт самый обычный хруст.',
      ]);
      await era.printAndWait(
        'Когда шоколад оказывается во рту, сначала идёт характерный для моркови «овощной вкус», а следом — слегка горьковатая чистая сладость.',
      );
      await era.printAndWait([
        'Только вот в отличие от ',
        urara.get_colored_name(),
        '  — самодельного печенья, этот шоколад не столько вкусный, сколько несёт неформальный душок вроде «мапо тофу со вкусом матча»…',
      ]);
      await era.printAndWait(
        'Но при всём том, даже если цвет и вкус нелегко описать, его всё же можно спокойно положить в рот.',
      );
      await era.printAndWait([
        '…Но с другой стороны, за короткое время из совсем уж запредельных ингредиентов вывести вкус, который можно есть, — неужели ',
        urara.get_colored_name(),
        '  и вправду гений…?',
      ]);

      await urara.say_and_wait([
        callname,
        ', как на вкус фирменный шоколад Урары?',
      ]);
      era.printButton(
        '「Ссс… хоть и слегка странновато, но вкус этого шоколада на удивление неплох…」(расположение+20)',
        1,
      );
      era.printButton(
        '「М-м… м! Я впервые ем шоколад с таким вкусом, довольно свежо…」(влюблённость+5)',
        2,
      );
      const ret = await era.input();

      await urara.say_and_wait([
        'Правда! Дальше я понесу раздавать на торговую улицу! ',
        callname,
        ' не пойдёшь вместе? Все тоже очень обрадуются!',
      ]);

      era.printButton(
        '「Нет причины не идти, но сколько шоколада Урара приготовила?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Шоколад для всех Урара давно приготовила! Всё Урара сделала своими руками!',
      );
      await era.printAndWait([
        'Заранее всё приготовив, вытаскивает спрятанные за спиной большие пакеты, ',
        urara.get_colored_name(),
        '  улыбаясь, перед ',
        you.get_colored_name(),
        '  хвастается.',
      ]);
      await urara.say_and_wait(
        'И ещё! Шоколад, который я всем понесу, тоже получился очень крутой! У каждого магазина свой вкус!',
      );
      await era.printAndWait([
        'Ага, разные вкусы… погоди? Глядя на наивную улыбку Урары, недоброе предчувствие в ',
        you.get_colored_name(),
        '  сердце не перестаёт клубиться.',
      ]);
      await urara.say_and_wait(
        'Вот они! Для овощной лавки я добавила овощи, для рыбной — рыбу, для мясной — мясо…',
      );
      await era.printAndWait([
        'Дрожа, принимает у ',
        urara.get_colored_name(),
        '  из рук пакет, в котором может оказаться нечто неназываемое, ',
        you.get_colored_name(),
        '  так и не решается открыть коробки внутри и проверить.',
      ]);
      await era.printAndWait([
        'Не то чтобы после пробы не хотелось верить ',
        urara.get_colored_name(),
        ', но смесь тех чудных ингредиентов с шоколадом чем дальше слушаешь, тем тревожнее и тревожнее.',
      ]);
      await era.printAndWait([
        'Вкус моркови ещё укладывался в ожидаемое, но чтобы и у тех вкус получился… ',
        urara.get_colored_name(),
        '  и вправду алхимик, пожалуй…',
      ]);
      await era.printAndWait([
        'В итоге, ',
        you.get_colored_name(),
        '  бросает бессмысленные раздумья — в общем, ',
        urara.get_colored_name(),
        '  гений, и всё!',
      ]);

      era.printButton('「Н-н, ну, а, Урара пр-правда крутая!»', 1);
      await era.input();

      await urara.say_and_wait('Правда? Так жду, когда увижу улыбки всех—');
      await era.printAndWait([
        'Увидишь обязательно, все ради ',
        urara.get_colored_name(),
        '  точно изо всех сил выдавят улыбку, а вот потом останется только молиться за желудки…',
      ]);
      await era.printAndWait([
        'С противоречием и решимостью в груди, ',
        you.get_colored_name(),
        '  вместе с ',
        urara.get_colored_name(),
        '  направляется на торговую улицу, готовясь провести «необычайно шумный» день святого Валентина.',
      ]);
      await era.printAndWait(
        'Что до изначального расписания на сегодня… пусть будет как всегда: 『планы не успевают за переменами』.',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Хм… впрочем, шоколад всевозможных вкусов, шоколад же, шоколад…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Что такое, что значит этот ваш взгляд? Насчёт сладостей — у меня не такой инфантильный вкус, как у Урары, знаете ли?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Э? Вы ещё не спрашивали? А… тц, ну и тип же вы…',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_47_12: (() => {
    const title = 'Айдол торговой улицы!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     */
    const f = async (urara, nature, inner_urara, you, callname, call_61) => {
      await urara.say_and_wait([
        'Кхе-кхе… Всем привет! Я заступаю на этой торговой улице как… 『витринная скаковая ',
        urara.uma_sex_title,
        ' 』? Урара!',
      ]);
      await urara.say_and_wait(
        'Ещё не очень поняла, но я буду стараться! Все, прошу любить и жаловать—!',
      );
      await era.printAndWait([
        'Стоя на особой сцене торговой улицы, ',
        urara.get_colored_name(),
        '  горячо машет всем и украдкой вниз, на ',
        you.get_colored_name(),
        '  подмигивает.',
      ]);
      await era.printAndWait([
        'Смешавшись с толпой под сценой ',
        you.get_colored_name(),
        ', получив от ',
        urara.get_colored_name(),
        '  — сигнал, тут же украдкой к ',
        urara.get_colored_name(),
        '  показывает большой палец.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Начало этой истории стоит отмотать на несколько дней назад.',
      );
      era.drawLine();
      await era.printAndWait([
        'Приглашать популярных действующих ',
        urara.uma_sex_title,
        ' для коммерческой рекламы — такие акции не редкость, и ',
        urara.get_colored_name(),
        '  пригласят — тоже было в общем-то ожидаемо.',
      ]);
      await era.printAndWait([
        'Впрочем, эти для ',
        urara.get_colored_name(),
        '  внезапные приглашения хоть места и разные, стоит приглядеться — все из одного района.',
      ]);
      await era.printAndWait([
        'Все на торговой улице и правда очень любят ',
        urara.get_colored_name(),
        ' ах. Думая так, ',
        you.get_colored_name(),
        ' аккуратно складывает на стол целую стопку поручений.',
      ]);
      await urara.say_and_wait('Мм… то есть все хотят попросить Урару помочь?');

      era.printButton(
        '「Но в этот раз это настоящая работа, ничего, Ураре достаточно делать как всегда.»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Отвечая на ',
        urara.get_colored_name(),
        ' — вопрос, ',
        you.get_colored_name(),
        ' передаёт письмо с поручением подошедшей маленькая ',
        urara.uma_sex_title,
        '.',
      ]);
      await era.printAndWait(
        'Сейчас у обоих нет причин не принимать поручения:',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' хочет отплатить тем людям, чьей заботой в жизни окружена ',
        urara.sex,
        ', и если станет настоящей вывеской торговой улицы, то ',
        urara.sex,
        ' сможет более по делу помогать всем;',
      ]);
      await era.printAndWait([
        'А с точки зрения тренера, взявшись за работу, можно эффективно поднять известность, и для нынешней ',
        urara.get_colored_name(),
        ' уровень поддержки важен не меньше тренировок.',
      ]);
      await era.printAndWait([
        'Вот только даже если выбор у обоих один, ',
        urara.get_colored_name(),
        ' наверное так и не поняла, в чём дело? Что же делать…',
      ]);
      if (era.get('cflag:60:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'Вроде всё нормально? Может, спросить ',
          nature.get_colored_name(),
          ' — мнение? Всё-таки ',
          urara.sex,
          ' тоже очень популярная на торговой улице ',
          urara.uma_sex_title,
          '.',
        ]);
        await era.printAndWait([
          'Идти? Хотя если ',
          urara.sex,
          ' сейчас будет потревожена — выйдет некстати, тем более это всего лишь ',
          you.get_colored_name(),
          ' и ',
          urara.get_colored_name(),
          ' — работа, но если вдруг провалят — будет головная боль…',
        ]);
      }
      era.println();
      await era.printAndWait(
        'Ладно, тревожиться всё равно бесполезно, к мосту лодка сама выправится.',
      );
      await urara.say_and_wait([
        'Но ',
        call_61,
        ' сказал(а) мне, 『Раз это работа, надо следить за вежливостью!』, так что сейчас я очень серьёзная, о?',
      ]);
      await urara.say_and_wait(
        'Дяди и тёти с торговой улицы говорят, что можно как всегда, но я буду следить, о?',
      );
      await era.printAndWait([
        'Вернувшись сейчас на торговую улицу, шагая у ',
        you.get_colored_name(),
        ' — боку, ',
        urara.get_colored_name(),
        ' у ',
        you.get_colored_name(),
        ' бока тихо говорит.',
      ]);
      await era.printAndWait([
        'Благополучно закончив вступление, сейчас ',
        urara.get_colored_name(),
        ' по требованию поручения обходит магазин за магазином вдоль торговой улицы.',
      ]);
      await era.printAndWait([
        'Раз уж ',
        urara.get_colored_name(),
        ' уже поняла, что делать, беспокоиться, наверное, больше не о чем.',
      ]);
      await urara.say_and_wait(
        'А, дядя, привет! Сегодняшний товар тоже свежий же! Мм! В следующий раз я снова приду помогать!',
      );
      await urara.say_and_wait(
        'Тётя, доброе утро! Верно, надо купить овощей домой! Урара вот это берёт!',
      );
      await urara.say_and_wait([
        'Давай я помогу! Ничего, ',
        urara.uma_sex_title,
        ' — сила-то большая, ну тогда погнали—!',
      ]);
      await urara.say_and_wait(
        'Здесь сначала вперёд, потом направо! Не стоит благодарности? Сёстры, и вы в пути осторожнее!',
      );
      await urara.say_and_wait(
        'Не плачь, о? Мальчикам надо быть чуть крепче! Твоя мама должна быть ещё рядом… ах! Нашла! Сюда—!',
      );
      await urara.say_and_wait([
        'Мм? А ',
        urara.elder_sibling_sex_title,
        ' — скаковая ',
        urara.uma_sex_title,
        ' о! В следующий раз будешь болеть за меня? Спасибо!',
      ]);
      await era.printAndWait([
        'Тепло общаясь и со знакомыми, и с незнакомыми, ',
        urara.get_colored_name(),
        ' — природная непосредственность где ни появится излучает тёплое обаяние.',
      ]);
      await era.printAndWait([
        'Словно сказка, что бывает только в книжке с картинками, ',
        urara.get_colored_name(),
        ' где ни появится — вокруг собирается народ, и стоит оживление, будто цветы распустились.',
      ]);
      await era.printAndWait([
        'Как хорошо. Когда в последний раз доводилось видеть такую тёплую сцену? Держась на расстоянии, идёт следом за ',
        urara.get_colored_name(),
        ' позади, молча оберегая ',
        urara.sex,
        ' — ',
        you.get_colored_name(),
        ' так вздыхает.',
      ]);
      await era.printAndWait([
        'При такой людской любви, если ещё поднять силу бега, в будущем, наверное, можно будет исполнить ',
        urara.get_colored_name(),
        ' — желание, да?',
      ]);
      await era.printAndWait([
        'Если, как ',
        urara.get_colored_name(),
        ' говорила, ',
        urara.sex,
        ' будет бежать и бежать…',
      ]);
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        'Тут… вы, что рядом, вы тренер Урары?',
      );
      await era.printAndWait([
        'Но как раз когда ',
        you.get_colored_name(),
        ' обдумывает происходящее, проходящая мимо женщина тихо окликает ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' узнаёт в этой женщине члена организации по оживлению торговой улицы; говорят, с тех пор как ',
        urara.get_colored_name(),
        ' только поступила, та всё время её опекала: ',
        urara.sex,
        ' ей давно знакома.',
      ]);

      era.printButton(
        '「Мм, спасибо, что согласились дать Ураре поручение.»',
        1,
      );
      await era.input();

      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        `Это нам стоит сказать спасибо. Благодаря тому, что есть Урара, ${urara.sex} и правда очень нам помогла.`,
      );
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        'С тех пор как пришла Урара, эта торговая улица стала живее, а раньше улица и правда совсем захирела.',
      );
      await era.printAndWait([
        'Слушая её благодарность, ',
        you.get_colored_name(),
        ' тоже вспоминает кое-что об этой улице.',
      ]);
      await era.printAndWait(
        'Из-за развития торговых комплексов традиционным торговым улицам, которым не хватает функций, в городе всё теснее сжимают место.',
      );
      await era.printAndWait([
        'Меньше людей — значит тишина и упадок, но ',
        urara.get_colored_name(),
        ' после появления множество тёплых поступков снова вдохнуло в эту улицу новую жизнь.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' — пыл без расчёта, но ',
        urara.sex,
        ' ещё очень давно ненароком помогала всем на этой улице, просто…',
      ]);
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        '…Урара не очень сильна, да? Я и раньше слышала, что этот ребёнок всё никак не выигрывает…',
      );
      await era.printAndWait([
        'Прервав ',
        you.get_colored_name(),
        ' — мысли, женщина перед глазами после колебаний снова заговорила.',
      ]);

      era.printButton('「Но Урара тоже понемногу становится сильнее.」', 1);
      await era.input();

      await era.printAndWait([
        'Хотя ',
        you.get_colored_name(),
        ' твёрдо стоит на своём выводе и может его подтвердить, но всё равно чувствует, что атмосфера какая-то не та.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        `Ну, я верю, что ${urara.sex} точно очень старалась, но… ${urara.sex} — талант всё же не сравнится с другими?`,
      );
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        'Так что ничего, если станет помедленнее: пока Урара бежит с радостью, мы уже очень воодушевлены.',
      );
      await you.say_as_passer_by_and_wait(
        'Человек с торговой улицы',
        'Ещё раз спасибо вам: если так и будет, мы уже будем рады.',
      );
      await era.printAndWait([
        'Она говорила это, нежно глядя на ',
        urara.get_colored_name(),
        ', и в глазах было то тепло, с каким родители смотрят на ребёнка.',
      ]);
      await era.printAndWait([
        'Люди, что с родительским сердцем оберегают маленькую ',
        urara.uma_sex_title,
        ', возможно, искренне считают「лишь бы ',
        urara.sex,
        ' могла с радостью бежать — и ладно」.',
      ]);
      await era.printAndWait([
        'Но если и впрямь только так — это точно не лучший ответ. Глядя вслед женщине, ушедшей после прощания, ',
        you.get_colored_name(),
        ' со смешанными чувствами качает головой.',
      ]);
      await era.printAndWait([
        'Это не отрицание чужой доброты — просто ',
        you.get_colored_name(),
        ' знает ',
        urara.get_colored_name(),
        ' — желание, и видит, что растущая ',
        urara.sex,
        ' никогда этим не ограничится.',
      ]);
      await era.printAndWait(
        'Но впереди ещё много времени: чтобы все увидели, как желание расцветает, правильный ответ — идти дальше.',
      );
      await era.printAndWait([
        'Держа только что купленный напиток, ',
        you.get_colored_name(),
        ' с улыбкой машет рукой ищущей после работы в толпе ',
        you.get_colored_name(),
        ' — ',
        urara.get_colored_name(),
        '.',
      ]);

      era.printButton('「Урара, ты хорошо поработала!」', 1);
      await era.input();

      await urara.say_and_wait([callname, '! Сегодня Урара всем помогла?']);
      await era.printAndWait([
        'После работы, отдыхая на скамейке, ',
        urara.get_colored_name(),
        ' навстречу закату берёт ',
        you.get_colored_name(),
        ' — протянутый сок.',
      ]);
      await era.printAndWait([
        'Стоя рядом с той, кто после целого дня хлопот наконец сбавила шаг, ',
        urara.get_colored_name(),
        ' рядом, ',
        you.get_colored_name(),
        ' снова обдумывает то самое「но」.',
      ]);
      await era.printAndWait(
        '……Это не простое «бей мобов — качайся», а столкновение со сменой старого и нового на переломе времён.',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' под силу ненадолго: пока не будет большего перелома, в одиночку так не выдержать.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' чувствует, как кто-то тянет за край одежды. Обернувшись, видит: мягкий закат ложится на ',
        urara.get_colored_name(),
        ' , заливая ',
        urara.sex,
        ' — спокойное личико тонет в тёплом свете.',
      ]);
      await urara.say_and_wait([
        callname,
        ', я же знаю. Всем на улице тяжело, и тем, что Урара делает сейчас, будущее почти не сдвинуть.',
      ]);
      await urara.say_and_wait(
        'Но даже если однажды торговой улицы не станет и все разбредутся, то, что Урара хочет делать, не изменится.',
      );
      await era.printAndWait([
        'Глядя на алое солнце вдали, маленькая ',
        urara.uma_sex_title,
        ' — в серьёзной улыбке светится решимость взять своё.',
      ]);
      await urara.say_and_wait(
        'Все увидят: Урара станет здешним идолом и принесёт всем на торговой улице улыбки и надежду!',
      );
      await urara.say_and_wait(
        'И все в Трейсен тоже очень любят это место: пока не сдались — выход найдётся, Урара всем покажет!',
      );
      await era.printAndWait([
        'Последняя тень сомнения в ',
        urara.get_colored_name(),
        ' — ответе рассеялась, и незаметно солнце уже кладёт ослепительный закат на ',
        you.get_colored_name(),
        '.',
      ]);

      era.printButton('「Пойдём обратно вместе.」', 1);
      await era.input();

      await urara.say_and_wait('Ага, пора обратно!');
      await era.printAndWait([
        'Собравшись с чувствами, ',
        you.get_colored_name(),
        ' к ',
        urara.get_colored_name(),
        ' протягивает руку, а ',
        urara.get_colored_name(),
        ' с улыбкой берёт ',
        you.get_colored_name(),
        ' — протянутую руку.',
      ]);
      await era.printAndWait([
        'Если бежать дальше, выход всегда найдётся: и у не такой уж сильной ',
        urara.get_colored_name(),
        ', и у тех рядом, кто встречает жизнь лицом.',
      ]);
      await era.printAndWait([
        'Навстречу закату ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        ' ступают на обратный путь.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Но разве и впрямь можно кого-то спасти одним только этим, одной лишь старательностью?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Простите, опять сказала то, чего говорить не следовало. Итак, дорогой вы, а как смотрите на это вы?',
      );
      era.printButton(
        '「Мы же в конце прошлого года уже это обсуждали?」(пригодность к средней и длинной повышается)',
        1,
      );
      era.printButton(
        '「Времени ещё много, не попробуешь — не узнаешь.」(пригодность к траве повышается)',
        2,
      );
      era.printButton(
        '「Раз выбор сделан, то и отвечать до конца.」(все параметры +2, мастерство тренировок растёт)',
        3,
      );
      const ret = await era.input();
      await inner_urara.say_as_unknown_and_wait(
        '……Так это неожиданность или нет? Вы вот так думаете… На самом деле и『Урара』 почти так же.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Я по-прежнему при своём, но и не хочу, чтобы ',
        urara.sex,
        ' пострадала, так что, пожалуйста, берегите в нынешнем темпе ',
        urara.sex,
        '.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Просто — легко или тяжело — сильнее становишься, лишь когда идёшь с ношей и с решимостью, и сколько ни проходи через это, всё равно противно…',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_47_27: (() => {
    const title = 'Клуб поддержки!?';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_61,
      high_relation,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        'Возможно, не совсем точно, но тренер ',
        you.adult_sex_title,
        ' (вы) и Урара и впрямь перешагнули прошлое, какого себе и не представляли.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Как же завидно: даже если герой истории по-прежнему не силён, уже оставил прохожих позади.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но каково тем, кого оставили позади… Простите, сейчас не об этом.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'А теперь, пожалуйста, насладитесь нелегко доставшейся наградой.',
      );
      era.drawLine();
      await era.printAndWait([
        'Это случилось в один из дней после рекламной работы на торговой улице, по пути с ',
        urara.get_colored_name(),
        ' на совместной прогулке.',
      ]);
      await urara.say_and_wait([
        'Сегодняшняя прогулка была такая весёлая! ',
        callname,
        ', потом вместе пойдём есть сладости!',
      ]);

      era.printButton(
        '「После этого тоже не забывай как следует тренироваться, ладно?」',
        1,
      );
      await era.input();

      await urara.say_and_wait('Хорошо—');
      await era.printAndWait([
        'Без колебаний отвечая на ',
        you.get_colored_name(),
        '  — просьбу, выросшая маленькая ',
        urara.uma_sex_title,
        ' уже не выдаёт той растерянности перед тренировками, что была вначале.',
      ]);
      await era.printAndWait([
        'По мере того как понимание друг друга всё крепнет, ',
        you.get_colored_name(),
        '  чувствует, что маленькая ',
        urara.uma_sex_title,
        ' сейчас идёт по пути эволюции.',
      ]);
      await era.printAndWait([
        'Но как бы ни менялась, ',
        urara.get_colored_name(),
        '  всё равно останется той, что бегает ради всех, ',
        urara.get_colored_name(),
        '  — вот и всё.',
      ]);
      await era.printAndWait([
        'Обернувшись, видит, как на зелёный перебежала улицу поддержать бабушку ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        '  тоже уже привычно бросается вдогонку — туда, куда ',
        urara.sex,
        ' так радушно спешит.',
      ]);
      await era.printAndWait([
        'А когда вместе с ',
        urara.get_colored_name(),
        '  выручили кого-то из беды, ',
        you.get_colored_name(),
        '  и маленькая ',
        urara.uma_sex_title,
        ' снова получают порцию доброты — ту, что ',
        urara.sex,
        ' завязала.',
      ]);
      await era.printAndWait([
        'Бабушка「Так вы и есть ',
        urara.sex,
        ' — её родитель, да? Эта девочка такая бодрая.」',
      ]);
      await urara.say_and_wait([
        'Верно, моя сильная сторона — это бодрость! Но ',
        callname,
        '  не мой родитель, а ',
        callname,
        '  же!',
      ]);
      await era.printAndWait([
        'Услышав ',
        urara.get_colored_name(),
        '  — слова, бабушка сперва улыбчиво оглядывает ',
        you.get_colored_name(),
        '  — вид, и снова переводит ласковый взгляд на вишнёвый цвет рядом.',
      ]);
      await era.printAndWait('Бабушка「Так вот как… ты ученица Трейсена?」');
      await urara.say_and_wait(
        'Ага! Меня зовут Хару Урара, я уже давно дебютировала!',
      );
      await era.printAndWait(
        'Бабушка「Урара… так ты и правда Урара, точь-в-точь как все говорили, сразу можно догадаться.」',
      );

      era.printButton('「То есть вы и раньше слышали про Урару?」', 1);
      await era.input();

      await era.printAndWait(
        'Бабушка「Ага, я же и сама часто хожу на ту торговую улицу, тамошнего талисмана, ясное дело, знаю.」',
      );
      await era.printAndWait(
        'Бабушка「Недавно тамошние лавочники говорят, что хотят создать 『клуб поддержки Урары』, даже вся молодёжь улицы уже взялась за дело.」',
      );

      era.printButton('「А? Клуб поддержки?」', 1);
      await era.input();

      await era.printAndWait([
        'Совсем внезапно, ',
        you.get_colored_name(),
        '  в самом неожиданном месте получает совсем нежданные вести: вот уж не думал(а), что ',
        urara.get_colored_name(),
        '  тоже обзаведётся клубом поддержки.',
      ]);
      await urara.say_and_wait([
        'Клуб поддержки…? ',
        callname,
        ', я не очень понимаю, клуб поддержки — это вообще что такое?',
      ]);

      era.printButton(
        '「Как сказать… это вроде объединения, которое поддерживает конкретного человека, даёт деньги и всякую помощь…」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Так вот… ага! Совсем не поняла! Короче, все хотят меня ещё сильнее поддерживать, да?',
      );
      await era.printAndWait([
        'Что ж, нельзя требовать, чтобы сразу поняла, но ',
        urara.get_colored_name(),
        '  всё равно ',
        urara.get_colored_name(),
        '. Впрочем, с точки зрения ',
        urara.sex,
        ' такое понимание тоже не ошибка?',
      ]);
      await era.printAndWait(
        'Бабушка「Но маленькая Урара как раз не ошиблась? Вот невероятный ребёнок, я тоже в клуб поддержки запишусь.」',
      );
      await urara.say_and_wait([
        'Э? Правда? Тогда… ',
        callname,
        ', в тот клуб поддержки я тоже могу вступить?',
      ]);

      inner_urara.say_as_unknown([
        'Э? Это… тренер ',
        you.adult_sex_title,
        ' (вы) как скажете—',
      ]);
      era.printButton(
        '「Нет, про моё вступление потом, разве бывает, чтобы болеть за себя?」(расположение+10)',
        1,
      );
      era.printButton(
        '「Я-то точно захочу вступить, но Урара себе самой собралась болеть?」(влюблённость+2)',
        2,
      );
      const ret = await era.input();

      await urara.say_and_wait([
        'Ага! Да… э? Как будто что-то не так? ',
        callname,
        ', меня опять будут дразнить?',
      ]);
      await era.printAndWait([
        'Когда даже сама поняла, что что-то не так, ',
        urara.get_colored_name(),
        '  тоже немного смущается.',
      ]);
      await era.printAndWait(
        'Бабушка「Хо-хо-хо, какой занятный ребёнок. Недаром все так любят о тебе говорить…」',
      );
      await era.printAndWait([
        'Глядя, как меняется улыбка на лице старушки, ',
        you.get_colored_name(),
        '  ещё глубже понимает, как сильно подопечная 「умеет нравиться людям」.',
      ]);
      await era.printAndWait([
        { isBr: true },
        'Попрощавшись с бабушкой, которой помогли, привалившись к ',
        you.get_colored_name(),
        '  — боку, ',
        urara.get_colored_name(),
        '  кажется, всё ещё думает про 「клуб поддержки」.',
      ]);
      if (high_relation) {
        await urara.say_and_wait(
          'Значит, даже там, где и не знаешь, столько всех, кто меня любит, что не сосчитать.',
        );
        await urara.say_and_wait(
          'Как-то даже тяжеловато! Но ничего, просто нужно ещё чуть сильнее стараться, да?',
        );
        await urara.say_and_wait([
          'И ещё! Когда все болеют, я и правда будто бегу быстрее! ',
          callname,
          '  как думаешь?',
        ]);
        await era.printAndWait([
          'Может, и правда так. Глядя на ',
          urara.get_colored_name(),
          '  — улыбку, ',
          you.get_colored_name(),
          '  вспоминает кое-какие ',
          urara.uma_sex_title,
          ' поверья.',
        ]);
      } else {
        await urara.say_and_wait('Все такие тёплые, но как-то тяжеловато!');
        await urara.say_and_wait([
          'Но, наверное, ничего! Даже ',
          call_61,
          '  говорит, что без давления не будет и драйва!',
        ]);
        await urara.say_and_wait(
          'И раз все готовы меня поддерживать, я ведь тоже смогу бежать быстрее?',
        );
        await era.printAndWait([
          'Так, наверное, и есть? Перед ',
          urara.get_colored_name(),
          ', ',
          you.get_colored_name(),
          '  будто вспоминает какие-то городские легенды.',
        ]);
      }
      era.println();
      await era.printAndWait([
        '「Чем больше сторонников, тем сильнее крепнет Скаковая ',
        urara.uma_sex_title,
        ' сила」,「можно чужие благословения обратить в собственную силу」.',
      ]);
      await era.printAndWait([
        'Звучит как сеттинг какой-нибудь манги про суперспособности, но если это подобная духу ',
        urara.uma_sex_title,
        ', тогда возможно всё.',
      ]);
      await era.printAndWait([
        'По крайней мере, именно у ',
        urara.get_colored_name(),
        ' это проявляется особенно ярко.',
      ]);

      era.printButton(
        '「Ну, тогда дальше будем держать как есть — пусть ещё больше людей увидят бег Урары.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Держать как есть — значит и дальше наращивать число фанатов, а ',
        you.get_colored_name(),
        ' никогда не ставит под сомнение ',
        urara.get_colored_name(),
        ' — способности в этом.',
      ]);
      await era.printAndWait(
        'Продолжать ли выходить на скачки или снова сместить акцент на тренировки — возможно, всё это стоит продумать заново.',
      );
      await era.printAndWait([
        'Но ',
        urara.get_colored_name(),
        ', где бы и когда бы ни было, в конце концов всегда выбирает одно: ',
        urara.sex,
        ' верит тому, кто для неё — ',
        callname,
        ', — и дарит ободряющую улыбку.',
      ]);
      await urara.say_and_wait([
        'Поняла! Как всегда! Урара будет идти вперёд вместе с ',
        callname,
        '!',
      ]);
      if (era.get('love:52') >= 50) {
        era.println();
        await era.printAndWait([
          { isBr: true },
          'Но перед всё более любимой всеми ',
          urara.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' — тревога, спрятанная на дне сердца, незаметно стала ещё тяжелее.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' с равной добротой заботится о других, так что не странно, если ',
          urara.sex,
          ' однажды окажется уведена от тебя людьми с задней мыслью.',
        ]);
        await era.printAndWait([
          'Тренер, которого исцелила ',
          urara.sex,
          ', радуется росту подопечной — но, как ни противоречиво, то, чем делится ',
          urara.sex,
          ', — 「любовь」 — рождает в нём 「ревность」.',
        ]);
        await era.printAndWait(
          'Даже зная, что сама мысль неверна, даже если дурные чувства на самом деле не сильны, всё равно не можешь не хотеть завладеть.',
        );
        await era.printAndWait([
          'Завладеть той светлой улыбкой; завладеть тем маленьким мягким телом; завладеть той полоской весеннего света по имени 「',
          urara.get_colored_actual_name(),
          ' 」.',
        ]);
        await era.printAndWait([
          'Незаметно наивная юная маленькая ',
          urara.uma_sex_title,
          ', кажется, снова посадила в сердце дорогого человека семечко 「демоничности」…',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'В последующие дни, хотя так и неизвестно, чем кончилось с клубом поддержки, число фанатов Урары тихо выросло.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Впрочем, из-за пережитого тренер ',
        you.adult_sex_title,
        ' (вы) на самом деле не слишком удивлены.',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'Если преувеличить, Урара, которую любят все, однажды станет чем-то само собой разумеющимся, да?',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Лишь бы ',
        urara.sex,
        ' как всегда не брала в голову давление перемен снаружи… хотя это ведь Урара…',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Да ну, она же не Син-○-Аканэ.',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Летний сбор (классический год) начинается';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Как школьная поездка, да? Но в итоге всё равно тренироваться, да?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но лишь бы было весело, да? Лишь бы было весело…',
      );
      era.drawLine();
      await era.printAndWait([
        'Центральный Трейсен каждый год проводит летние сборы, чтобы усилить ',
        urara.uma_sex_title,
        '. На этот раз ',
        you.get_colored_name(),
        ' тоже записывает ',
        urara.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Для ',
        urara.get_colored_name(),
        ' это отличный шанс нарастить силу, хотя по чувствам маленькой ',
        urara.uma_sex_title,
        ' восторг от поездки явно берёт верх.',
      ]);
      await era.printAndWait([
        'Впрочем, ',
        urara.get_colored_name(),
        ' и в таком состоянии хорошо: бодрый дух и здоровое тело куда действеннее жёстких тренировок.',
      ]);
      await era.printAndWait([
        'Тем более ',
        urara.sex,
        ' и так ещё ребёнок, который не до конца вырос…',
      ]);
      await urara.say_and_wait([
        callname,
        '! Там небо такое далёкое! Куда же оно тянется?',
      ]);
      await urara.say_and_wait([
        'А! Море уже чуть видно! ',
        callname,
        ', по берегу бегать приятно?',
      ]);
      await era.printAndWait([
        'Глядя в окно, у ',
        you.get_colored_name(),
        ' под боком ',
        urara.get_colored_name(),
        ' не может скрыть восторг и без умолку спрашивает ',
        you.get_colored_name(),
        '.',
      ]);
      if (high_relation) {
        await urara.say_and_wait(
          'Хе-хе~ все вместе на ночёвке! Урара так долго ждала!',
        );
        await urara.say_and_wait([
          callname,
          ' тоже весело? Урара хочет вместе с ',
          callname,
          ' каждый день плескаться у моря!',
        ]);
        await era.printAndWait([
          'Прижавшись мягким телом к ',
          you.get_colored_name(),
          ', ',
          urara.get_colored_name(),
          ' как розовая птичка радостно напевает у ',
          you.get_colored_name(),
          ' — уха.',
        ]);
      } else {
        await urara.say_and_wait(
          'Ага! Урара первый раз ночует вместе со всеми!',
        );
        await urara.say_and_wait([
          callname,
          ' тоже с другими на ночёвке был(а), да? ',
          callname,
          ' думаешь, так было весело?',
        ]);
        await era.printAndWait([
          'Хотя на вид не так весело, как в голосе, ',
          urara.get_colored_name(),
          ' всё же честно прижимается телом к ',
          you.get_colored_name(),
          ' вплотную.',
        ]);
      }
      if (era.get('love:52') >= 50) {
        era.println();
        await urara.say_and_wait([
          'Ещё-ещё! Не знает, пригодится ли, но Урара уже готова к обнимашкам и тисканьям с ',
          callname,
          ', о?',
        ]);
        await urara.say_and_wait([
          'Хоть на пляже, хоть вечером наедине — Ураре всё нипочём~ ',
          callname,
          ' ждёшь?',
        ]);
        await era.printAndWait([
          callname,
          ' считает, что тебе лучше поумерить пыл, о? Перед ',
          urara.get_colored_name(),
          ' — наивной и всё же томной улыбкой не желающий(ая) смотреть ',
          you.get_colored_name(),
          ' молча отворачивает голову.',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Хотя в таком возрасте маленькой ',
        urara.uma_sex_title,
        ' игривость — хорошо, но ',
        urara.get_colored_name(),
        ', кажется, перевозбудилась — всё в порядке?',
      ]);
      await era.printAndWait([
        'Хотя даже если тревожно, время и маленькая ',
        urara.uma_sex_title,
        ' никого не ждут — выкладывайся на полную.',
      ]);
      await era.printAndWait('Летние сборы начинаются!');
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = 'Летний сбор (классический год) — в пути';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     * @param {PrintedSpan} callname_30 米浴对玩家的称呼
     * @param {PrintedSpan} r_call_u 米浴对春乌拉拉的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      rice,
      you,
      callname,
      call_30,
      call_61,
      callname_30,
      r_call_u,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        '『Лишь бы ',
        urara.sex,
        ' была счастлива — и достаточно』, поэтому ',
        urara.sex,
        ' всегда бежит с улыбкой — вот что такое『',
        urara.get_colored_actual_name(),
        ' 』.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Но под этой личиной, быть может, есть и ',
        urara.sex,
        ' — ещё не встречавшая себя сторона…',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Однажды днём на летних сборах, выйдя развеяться, ',
        you.get_colored_name(),
        ' под морским ветром приходит на пляж, где ',
        urara.uma_sex_title,
        ' проводят тренировки.',
      ]);
      await era.printAndWait([
        'Тренировка на сегодня уже закончилась, но на пляже, где никого не должно было быть, ',
        you.get_colored_name(),
        ' всё же видит одинокую маленькую фигурку.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' всё ещё в купальнике сидит одна у моря, в руках распущенная лента, мокрые вишнёвые волосы до плеч отражают закатное зарево.',
      ]);
      await era.printAndWait([
        'Сейчас маленькая ',
        urara.uma_sex_title,
        ' заворожённо смотрит на закат, постепенно уходящий в море, и руками разминает ноги, задеревеневшие от чрезмерной тренировки.',
      ]);
      await era.printAndWait([
        'В дневном совместном забеге на 2500 метров ',
        urara.sex,
        ' проиграла очень сильно, а ',
        you.get_colored_name(),
        ' тоже знает: эта дистанция ',
        urara.sex,
        ' — слишком длинная, телу тяжело — само собой.',
      ]);
      await era.printAndWait([
        'Только, кажется, дело не только в теле: в одиночестве глядящая вдаль ',
        urara.get_colored_name(),
        ', и выражение лица будто тоже что-то сдерживает.',
      ]);
      era.printButton(
        '「Сегодня Урара будто не очень рада, что случилось?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'Подойдя к ',
        urara.get_colored_name(),
        ' сбоку, ',
        you.get_colored_name(),
        ' протягивает руку и осторожно снимает с ',
        urara.get_colored_name(),
        ' — уже промокшие от морской воды чехлы на уши и спрашивает — ',
        urara.sex,
        ' шёпотом.',
      ]);
      await era.printAndWait([
        'А маленькая подопечная, давно услышавшая приближающиеся шаги, ',
        you.get_colored_name(),
        ' — появление не удивляет, только наспех надетая улыбка чуть натянута.',
      ]);
      await urara.say_and_wait([
        'Всё хорошо, ',
        callname,
        ', просто после совместного забега Урара кое о чём подумала…',
      ]);
      era.printButton(
        '「Совместный забег? Ничего, та дистанция и правда слишком длинная, если совсем тяжело — завтра можно отдохнуть.」',
        1,
      );
      await era.input();
      await urara.say_and_wait([
        'Нет! Просто думала… ',
        callname,
        ', Урара слишком уж разгромно проиграла?',
      ]);
      await era.printAndWait([
        'Хм? Слишком разгромно… от других такое ещё ожидаемо, но ',
        urara.get_colored_name(),
        '?',
      ]);
      await era.printAndWait([
        'Впрочем, если подумать, ',
        you.get_colored_name(),
        ' вроде и правда ещё не видел(а), чтобы ',
        urara.get_colored_name(),
        ' из-за поражения выглядела особенно грустной и потерянной.',
      ]);
      await era.printAndWait([
        'Вместе с ',
        urara.get_colored_name(),
        ' у моря, сев рядом, ',
        you.get_colored_name(),
        ' спокойно ждёт, пока подопечная соберётся рассказать, как всё было.',
      ]);
      await urara.say_and_wait([
        'Это на самом деле связано с ',
        call_30,
        ' , но ',
        call_30,
        ' ничего странного не говорила, просто я не очень поняла.',
      ]);

      era.printButton(`「${call_30.content}? Это Райс?」`, 1);
      await era.input();

      await urara.say_and_wait([
        'М-м, в тот день, утешив после неудачи в тренировочной скачке ',
        call_30,
        ' , ',
        call_30,
        ' спросила у меня секрет, как не грустить, даже проиграв.',
      ]);
      await urara.say_and_wait(
        'Как всегда говорю: не побежишь — первое место не взять, да? Я тоже хочу, чтобы все увидели, как я побеждаю.',
      );
      await urara.say_and_wait(
        'Вот я и подумала: если я выиграю, всем будет ещё радостнее, так что я хочу прибежать первой!',
      );
      await urara.say_and_wait([
        'Но когда я так сказала, ',
        call_30,
        ' задала мне столько вопросов, о которых я раньше никогда не думала…',
      ]);
      era.drawLine();
      await rice.say_and_wait([
        'Так значит, победа, к которой теперь ',
        r_call_u,
        ' стремится, — разве только ради других?… ',
        r_call_u,
        ', не упустила ли важное?',
      ]);
      await rice.say_and_wait([
        'Не то чтобы ',
        r_call_u,
        ' делает плохо: хотеть побеждать ради других — это здорово, Райс тоже считает, что так можно, но ',
        r_call_u,
        ' — а та часть, где думаешь о себе?',
      ]);
      await rice.say_and_wait([
        'Райс знает: все на ',
        r_call_u,
        ' — бег проецируют разные ожидания, но ',
        r_call_u,
        ' как сама на это смотрит — тоже важно.',
      ]);
      await rice.say_and_wait([
        'Если просто считать, что главное — выложиться, то не падающая духом от проигрыша ',
        r_call_u,
        ', возможно, тоже не ',
        r_call_u,
        ' — настоящие чувства, знаешь?',
      ]);
      if (era.get('love:30') >= 50) {
        await rice.say_and_wait([
          'И ещё: хотеть победы и одновременно считать, что проигрыш тоже приемлем, — это тоже высокомерие, знаешь?',
        ]);
        await rice.say_and_wait([
          'Раз ',
          r_call_u,
          ' считает, что проигрыш не важен, тогда ',
          callname_30,
          ' можно отдать Райс, да?',
        ]);
      }
      era.drawLine();
      await urara.say_and_wait([
        'С тех пор я всё думала над ',
        call_30,
        ' — вопросы, пока сегодня на совместном забеге меня все не оставили позади.',
      ]);
      await urara.say_and_wait(
        'Снова осталась одна, и как вспомню тот вопрос — в груди так больно, но это не как при беге…',
      );
      await urara.say_and_wait([
        callname,
        ', почему Ураре так тяжело… всё равно не понимаю…',
      ]);
      if (era.get('love:30') >= 50) {
        await era.printAndWait([
          'Как и ',
          urara.get_colored_name(),
          ' , ',
          you.get_colored_name(),
          ' тоже сразу не берёт в толк. Трудно представить, что обычно нежная ',
          rice.get_colored_name(),
          ', вдруг выдала подруге такую властную декларацию.',
        ]);
        await era.printAndWait([
          'Впрочем, 「отдать ',
          callname_30,
          ' — ',
          rice.sex,
          ' 」 и всё такое, ',
          rice.get_colored_name(),
          ' в какие-то моменты неожиданно так крута.',
        ]);
        await era.printAndWait([
          'Что до ',
          rice.get_colored_name(),
          ' почему стала такой — наверное, кое-кто знает лучше всех… Ладно, разговор ушёл в сторону, вернёмся к делу.',
        ]);
      }
      era.println();
      await era.printAndWait([
        'увидев ',
        urara.get_colored_name(),
        ' , хотя и мучается, по-настоящему осознал(а), что проблема есть, ',
        you.get_colored_name(),
        ' зато даже немного рад(а).',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' Совет с позиции близкой подруги и правда попал не в бровь, а в глаз. Скорее даже сейчас стоит поблагодарить ',
        rice.get_colored_name(),
        ' как раз.',
      ]);
      await era.printAndWait([
        'Грустить и переживать после поражения — чувство нормальное и даже важное, но ',
        urara.get_colored_name(),
        '  же невольно упустила это из виду.',
      ]);
      await era.printAndWait([
        'Возможно, потому что ',
        urara.sex,
        ' считает, что「бег должен быть в радость」, поэтому и прятала「ту сторону, что грустит после поражения」.',
      ]);
      await era.printAndWait([
        'Звучит не слишком здраво, но смышлёные дети так или иначе себя надрывают; к счастью, все вокруг таковы, что ',
        urara.sex,
        ' окружена нежностью.',
      ]);
      await era.printAndWait([
        'Но когда ',
        urara.get_colored_name(),
        '  снова обращает внимание на обойдённый дух соперничества, скопившееся давление и жажда первого места постепенно всплывут на поверхность.',
      ]);
      await era.printAndWait([
        'Проще говоря, хотя выход на следующий шаг найден, всё же будто не слишком на пользу маленькая ',
        urara.uma_sex_title,
        ' — здоровью души и тела.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'И всё же нужное наставление вы всё равно дадите, верно? Тогда, тренер ',
        you.adult_sex_title,
        ' (вы)…',
      ]);
      era.printButton(
        '「Урара и правда не знает? Своё『жажду первое место』— это вовсе не『проиграла — и ладно』.」(интеллект+10)',
        1,
      );
      era.printButton(
        '「Вот каково давление, что тянется из обиды; научившись принять его, наверное, получится бежать быстрее.」(скорость+10)',
        2,
      );
      ret.push(await era.input());
      if (high_relation) {
        await era.printAndWait([
          'Кажется, поняла ',
          you.get_colored_name(),
          ' — смысл ответа, и ',
          urara.get_colored_name(),
          ' — поникшие цветы в глазах постепенно светлеют.',
        ]);
        await urara.say_and_wait([
          'Ага! Это как печаль в силу… будто и не то! Но, наверное, примерно так? ',
          call_61,
          '  тоже так говорила!',
        ]);
        await era.printAndWait([
          'Тихо телом и хвостом крепко обвивает ',
          you.get_colored_name(),
          ' — тело, маленькая ',
          urara.uma_sex_title,
          ', чьё тело обёрнуто лишь тонким слоем ткани, совсем вплотную.',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          ' — щёки и кожа будто от света заката залиты румянцем, в чуть солоноватом вечернем ветре к ',
          you.get_colored_name(),
          '  передаёт влажное тепло.',
        ]);
        await urara.say_and_wait([
          'Да и ',
          callname,
          '  тоже рядом! Даже если будет тяжело, потом обязательно справлюсь—',
        ]);
      } else {
        await era.printAndWait([
          'Хоть на лице ещё тень колебания, маленькая ',
          urara.uma_sex_title,
          ' — внутри, кажется, уже приняла ',
          you.get_colored_name(),
          ' — ответ.',
        ]);
        await urara.say_and_wait(
          'Наверное, так и есть, у самой к первому месту чувство такое же, хоть и очень тяжко, но…',
        );
        await era.printAndWait([
          'Осторожно прижимается к ',
          you.get_colored_name(),
          ' — боку, жаждая касания и утешения, ',
          urara.get_colored_name(),
          '  тихо кладёт голову и уши на ',
          you.get_colored_name(),
          ' — плечо.',
        ]);
        await era.printAndWait([
          'Нежная маленькая рука тихо всползает на ',
          you.get_colored_name(),
          ' — пальцы, маленькая ',
          urara.uma_sex_title,
          ', чья температура чуть выше человеческой, через тыл ладони разносит дивное тепло по всему телу.',
        ]);
        await urara.say_and_wait([
          'Но как ',
          call_30,
          '  сказала: принять своё желание точно не ошибка—',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Уложив уже размявшиеся ноги на песок, ',
        urara.get_colored_name(),
        '  сама шлёт ',
        you.get_colored_name(),
        ' — приглашение к следующему шагу.',
      ]);

      await urara.say_and_wait([
        'Так что ',
        callname,
        ', я сейчас хочу ещё два круга пробежать, вместе потренируемся?',
      ]);
      era.printButton(
        '「Тогда вон там ещё есть покрышки, попробуем?」(сила+10)',
        1,
      );
      era.printButton(
        '「Можно, до заката ещё есть время, побежим?」(характер+10)',
        2,
      );
      ret.push(await era.input());

      await era.printAndWait([
        'Стряхнув с себя песок, ',
        urara.get_colored_name(),
        '  и ',
        you.get_colored_name(),
        '  вместе встают с залитого закатом песка.',
      ]);
      await era.printAndWait([
        'В отличие от прежнего, навстречу морю, что отливает золотом, ',
        urara.get_colored_name(),
        ' — в глазах вспыхнула крохотная искра боевого духа.',
      ]);
      await era.printAndWait([
        'Возможно, ',
        urara.sex,
        ' ещё не до конца понимает свои чувства — нужно больше времени, так что сейчас ',
        urara.teen_sex_title,
        ' выбирает самый простой и понятный способ сделать первый шаг.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Пусть Урара встретит собственный выбор лицом к лицу… нет, это как раз и есть выбор самой Урары.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Так и вправду хорошо? Я знаю это не лучше вас. Что до ваших мыслей… даже не спрашивая, и так угадаю.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Хоть в ваших глазах я, верно,『пораженец』, но『сойти со стремнины вовремя』отродясь не было среди вариантов.',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = 'Конец летних сборов(классический год)';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} accept_sex 是否接受性爱
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      accept_sex,
    ) => {
      await inner_urara.say_as_unknown_and_wait('…так тоже ничего?');
      await inner_urara.say_as_unknown_and_wait(
        'Ага, сборы вот-вот кончатся, давай хорошо проведём эту ночь…',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '  сначала думал(а), что это будет тихая и неловкая ночь, но теперь ',
        urara.get_colored_name(),
        '  жмётся к ',
        you.get_colored_name(),
        ' — боку, а в улыбке ',
        urara.teen_sex_title,
        ' — застенчивость.',
      ]);
      await era.printAndWait([
        '…Не то чтобы от этого стало не тихо и не неловко: просто в этой комнате сидит, не зная куда деть руки, только ',
        you.get_colored_name(),
        '  один(а).',
      ]);
      await era.printAndWait([
        'А ',
        urara.get_colored_name(),
        '? Сначала в пижаме без всякой причины врывается в ',
        you.get_colored_name(),
        ' — комнату ночлега, и сама тянет ',
        you.get_colored_name(),
        '  и играет до самого отбоя.',
      ]);
      await era.printAndWait([
        'А теперь совсем не прогонишь маленькая ',
        urara.uma_sex_title,
        ' самовольно лежит на самой же расстеленной постели, будто поклялась: эту ночь ',
        urara.sex,
        ' проведёт со своим ',
        callname,
        '  — до утра.',
      ]);
      await era.printAndWait([
        'Втихаря позвонить другим, пусть утащат маленькая ',
        urara.uma_sex_title,
        ' обратно… если б и вправду было так просто.',
      ]);
      await era.printAndWait([
        'Чувствуя тягу от маленькой руки, высунувшейся из-под тонкого одеяла, ',
        you.get_colored_name(),
        ' понимает, что уже ',
        urara.get_colored_name(),
        ' отрезала путь к отступлению.',
      ]);
      await era.printAndWait([
        'Хотя неизвестно, о чём ',
        urara.sex,
        ' думает, но стоит только взять телефон — сразу случится, что маленькая ',
        urara.uma_sex_title,
        ' под видом шалости повалит.',
      ]);
      await era.printAndWait([
        'Впрочем, так просто сдаваться тоже нельзя. Цепляясь за последнюю надежду 「вдруг кто-нибудь заметит」, ',
        you.get_colored_name(),
        ' вполголоса уточняет у ',
        urara.get_colored_name(),
        '.',
      ]);
      era.printButton('「Того… Урара, все знают, что ты сюда пришла?」', 1);
      await era.input();
      await urara.say_and_wait(
        'Не знаю? Если б все знали, меня сюда точно не пустили бы.',
      );
      await urara.say_and_wait([
        'Но не волнуйся! Всего-то не знают, что Урара пойдёт к ',
        callname,
        ' — вот и всё!',
      ]);
      await era.printAndWait([
        'Словно догадавшись о ',
        you.get_colored_name(),
        ' — цели, ',
        urara.get_colored_name(),
        ' моргает и, точно улыбающийся хищник, словами преграждает ',
        you.get_colored_name(),
        ' — путь к отступлению.',
      ]);
      await urara.say_and_wait([
        'Так что ',
        callname,
        ' почему, выключив свет, всё ещё сидишь? Уже пора спать, ну?',
      ]);
      await era.printAndWait([
        'В итоге снова, как и следовало ждать, помощи ждать неоткуда. Поддавшись маленькой ',
        urara.uma_sex_title,
        ' — уговорам, ',
        you.get_colored_name(),
        ' обречённо падает на составленные в ряд кровати.',
      ]);
      await era.printAndWait([
        'Надо было давно понять: даже если в обычные дни мила и послушна, у этого малыша как у ',
        urara.uma_sex_title,
        ' инстинкт всё равно — засада, которая вцепится и не отпустит…',
      ]);
      await urara.say_and_wait(
        'Ну и наигрались же: в море вволю поплавали, и с всеми столько всего наговорили!',
      );
      await urara.say_and_wait([
        'Хе-хе~ Столько летних воспоминаний. ',
        callname,
        ', в следующем году мы тоже приедем?',
      ]);
      await era.printAndWait([
        'Летние воспоминания… если бы в конце тебя не атаковала маленькая ',
        urara.uma_sex_title,
        ' так жёстко, было бы лучше… ',
        urara.get_colored_name(),
        ' ведь не такой ребёнок?',
      ]);
      era.printButton(
        '「Наверное, можно, да и воспоминания о тренировках тоже… сейчас лучше не вспоминать…」',
        1,
      );
      await era.input();
      if (high_relation) {
        await urara.say_and_wait([
          'Нет же! Воспоминания о тренировках тоже весёлые, и с ',
          callname,
          ' вместе тоже радостные воспоминания.',
        ]);
        await era.printAndWait([
          'Расстояние между ними словно стало чуть ближе: крошечные пальцы подопечной забрались в постель с другой стороны и легонько щекочут ',
          you.get_colored_name(),
          ' — ладонь.',
        ]);
        await era.printAndWait([
          'Крохотное тело тихо скользит в ',
          you.get_colored_name(),
          ' — постель, и стук сердца сквозь маленькая ',
          urara.uma_sex_title,
          ' мягкую плоть доносит до ',
          you.get_colored_name(),
          ' ритмичное тепло.',
        ]);
        await era.printAndWait([
          'Сейчас лунный свет как раз хорош: чуть отвести взгляд — и наверняка ',
          urara.teen_sex_title,
          ' ответит взглядом озарённых луной вишнёвых глаз.',
        ]);
      } else {
        await urara.say_and_wait([
          'Ничего! Воспоминания о тренировках тоже важные, и ',
          callname,
          ' тоже помог(ла) Ураре, да?',
        ]);
        await era.printAndWait([
          'Неизвестно когда тихо подобравшись, ',
          urara.get_colored_name(),
          ' — маленькая рука пользуется моментом и хватает ',
          you.get_colored_name(),
          ' за запястье, которое тянется прочь.',
        ]);
        await era.printAndWait([
          'Тихо втискивается на одну постель вместе с ',
          you.get_colored_name(),
          ', и в тихом трении ткани ',
          you.get_colored_name(),
          ' чувствует, как ',
          urara.teen_sex_title,
          ' постепенно поворачивается лицом к ',
          you.get_colored_name(),
          ' — профилю.',
        ]);
        await era.printAndWait([
          'Сейчас маленькая ',
          urara.uma_sex_title,
          ' при свете луны, падающем в комнату, сложным взглядом разглядывает ',
          you.get_colored_name(),
          ' — профиль.',
        ]);
      }
      await era.printAndWait([
        'В тишине ',
        urara.get_colored_name(),
        ' — рука постепенно обвивает ',
        you.get_colored_name(),
        ' — пальцы. Хотя ещё лето, ',
        urara.get_colored_name(),
        ' — с ладони всё же веет холодком.',
      ]);
      await era.printAndWait([
        'В миг, когда близкий взгляд отводится, прильнувшая к ',
        you.get_colored_name(),
        ' сбоку маленькая ',
        urara.uma_sex_title,
        ' снова заговорила.',
      ]);
      await urara.say_and_wait(
        'Я долго думала, и вышло: Урара, которая раньше всем показывала только улыбку, всё будто… будто…',
      );
      await urara.say_and_wait(
        'Будто…『плыть по течению』? Это же так говорится? Урара ведь не ошиблась?',
      );

      era.printButton('「…Урара думает, что раньше плыла по течению?」', 1);
      await era.input();

      await urara.say_and_wait(
        'Я чуть не забыла, как лучше делать… и что чувства с желаниями не спорят, и чего сама хочу.',
      );
      await urara.say_and_wait(
        'Но стоит вспомнить, как раньше всё время проигрывала, — на сердце сразу неспокойно, и даже в обычные дни становится тревожно…',
      );
      await era.printAndWait(
        'Так вот оно: слишком чутко ловит перемены в душе и тревожится, потому инстинктивно ищет надёжного взрослого, чтобы успокоиться… тогда, в таком случае…',
      );

      era.printButton('「Ясно. Урара, если тяжело — просто скажи, и ещё—」', 1);
      await era.input();

      await urara.say_and_wait([
        'И ',
        callname,
        ' будет всегда рядом с Урарой? Хе-хе~ Я тоже знаю, да? Мы же уже так договорились.',
      ]);
      await era.printAndWait([
        'Словно вовсе не против давно угаданного ответа, ',
        you.get_colored_name(),
        ' — у уха раздаётся ',
        urara.teen_sex_title,
        ' довольный смешок.',
      ]);
      await era.printAndWait([
        'Сбоку ',
        urara.sex,
        ' обхватывает ближнюю к себе руку, и маленькая ',
        urara.uma_sex_title,
        ' — мягкое дыхание щекотно теребит ',
        you.get_colored_name(),
        ' — ухо.',
      ]);
      await urara.say_and_wait([
        'Я понимаю, ',
        callname,
        ' очень тяжело, так что так — нормально, да?',
      ]);
      await era.printAndWait([
        'Хотя совершенно не хочется беспричинно подозревать ',
        urara.get_colored_name(),
        ', но теперь снова приходится сомневаться, зачем ей это.',
      ]);
      await era.printAndWait([
        'а будто собирается「проверить」 ',
        you.get_colored_name(),
        ' — тревогу, пока ',
        you.get_colored_name(),
        ' погружается в застывшее молчание, а на руках маленькая ',
        urara.uma_sex_title,
        ' продолжает нашептывать нежности.',
      ]);

      await urara.say_and_wait([
        'Ну… ',
        callname,
        ', как думаешь, Урара ведь немного выросла?',
      ]);
      era.printButton(
        '「Если спрашиваешь, не загорела ли, то Ураре я так не отвечу.」(расположение+10)',
        1,
      );
      era.printButton(
        '「Если сказать, что Урара стала взрослее прежнего, Урара обрадуется?」(влюблённость+2)',
        2,
      );
      if (era.get('love:52') >= 50 && accept_sex && urara.sex_code - 1 !== 0) {
        era.printButton(
          '「Если предложить оставить『особые воспоминания』, Урара согласится?」(расположение+10, влюблённость+2)',
          3,
        );
      }
      const ret = await era.input();
      if (ret !== 3) {
        await era.printAndWait([
          'Услышав, как ',
          you.get_colored_name(),
          ' нарочно строит ответы так, словно ни ',
          urara.teen_sex_title,
          ', ни то, что ',
          urara.sex,
          ' держит на сердце, не в счёт, ',
          urara.teen_sex_title,
          ' из‑под одеяла с лёгкой обидой легонько щипнула ',
          you.get_colored_name(),
          ' — запястье.',
        ]);
        await era.printAndWait([
          'Но стоило обернуться, как ',
          urara.get_colored_name(),
          ' уже забилась в сгиб руки и уложила голову на ',
          you.get_colored_name(),
          ' — плечо и, глядя на ',
          you.get_colored_name(),
          ', тихо улыбается.',
        ]);
        await urara.say_and_wait([
          callname,
          ', завтра ведь уже ехать обратно, да? Тогда сегодня вроде надо пораньше лечь.',
        ]);
        await urara.say_and_wait([
          'Эх-хе-хе~ какая особенная ночь. Если в следующий раз получится, чтобы ',
          callname,
          ' увидел(а) другую Урару…',
        ]);
        await urara.say_and_wait('Ну тогда спокойной ночи?');
        await era.printAndWait([
          '…По крайней мере, что подозрение так и не подтвердилось — уже удача, да? Когда ',
          urara.get_colored_name(),
          ' расслабила тело, ',
          you.get_colored_name(),
          ' тоже постепенно выдыхает.',
        ]);
      } else {
        await era.printAndWait([
          'Услышав ',
          you.get_colored_name(),
          ' — полушутливую просьбу, ',
          urara.teen_sex_title,
          ' сначала растерянно округлила глаза, а затем позволила смущению заползти на щёки — ',
          urara.sex,
          ' вся зарделась.',
        ]);
        await urara.say_and_wait([
          callname,
          ' всегда говорит такое, от чего неловко, но если ',
          callname,
          ' хочет…',
        ]);
        await era.printAndWait([
          'Телом приподняв тонкое летнее одеяло, ',
          urara.teen_sex_title,
          ' — выражение теплеет, и ',
          urara.sex,
          ' легко садится верхом перед ',
          you.get_colored_name(),
          ', рука тянется к своим пуговицам.',
        ]);
        await urara.say_and_wait([
          'Все твердят, что на летних сборах без юности никак, Урара не очень понимает, но ',
          callname,
          ' тоже этого ждёт, да?',
        ]);
        await era.printAndWait([
          'Пижама соскальзывает, выпуская ',
          urara.teen_sex_title,
          ' — свежий аромат, и сбросившая последний барьер маленькая ',
          urara.uma_sex_title,
          ' в вишнёвых зрачках отражает лишь для ',
          you.get_colored_name(),
          ' переполняющее вожделение.',
        ]);
        await era.printAndWait([
          'Тихим шёпотом говорит о чистом желании, ',
          urara.teen_sex_title,
          ' в мягком полусвете тихо дышит и показывает ',
          you.get_colored_name(),
          ' неприкрашенную плоть.',
        ]);
        await era.printAndWait(
          'Чувствительные соски перед любовником забываются и твердеют, будто уже готовы, чтобы их ласкали вплоть до обморока от наслаждения.',
        );
        if (era.get('talent:52:乳房尺寸') > 0) {
          await era.printAndWait([
            'Два огромных маленьких монстра наконец сбросили путы пижамы, и пара чарующих грудей — а ведь ',
            urara.teen_sex_title,
            ' так миниатюрна телом — трясётся вверх-вниз, ',
          ]);
          await era.printAndWait(
            'Даже приёмы, которыми при доении заставляют самку сдаться, соблюдать незачем: стоит лишь легко взять в ладони и чуть подразнить кончиком языка,',
          );
          await era.printAndWait([
            'и эти давно изнывающие молочные мешки послушно выжмут густое липкое молоко вместе с маленькой ',
            urara.uma_sex_title,
            ' — потерянным нежным всхлипом.',
          ]);
        }
        await era.printAndWait(
          'Сложенные за спиной пальцы беспокойно лезут в похотливую заднюю дырку, что служит половым органом, и перед любовником нетерпеливо яростно онанируют,',
        );
        await era.printAndWait([
          'Сбросив повседневную кротость и миловидность, маленькая идолка, что бежит для всех, теперь всего лишь ',
          callname,
          ' — личная рабыня дырки-хризантемы.',
        ]);
        await era.printAndWait([
          'А маленькая ',
          urara.uma_sex_title,
          ' — та юная дырка, что легко давит на ',
          you.get_colored_name(),
          ' пах, тоже слегка дрожит, будто не терпится принять и втягивать-выпускать соки вожделения, ',
        ]);
        await era.printAndWait([
          'и пока ',
          urara.teen_sex_title,
          ' виляет разгорячённым телом в развратном танце, на низ живота того, кого домогается, беспрестанно капают тёплые серебряные нити.',
        ]);
        await urara.say_and_wait([
          'Ха-а~ научи Урару сейчас… нн~ ',
          callname,
          ' ~ чего же ждёшь~?',
        ]);
        if (era.get('flag:惩戒力度') >= 2) {
          await era.printAndWait([
            'Быть может, маленькая кобыла перед глазами, что похотливо выставляет, выставляет тело, ещё больше, чем ',
            you.get_colored_name(),
            ', словно ',
            era.get('flag:惩戒力度') === 2
              ? ' секс-рабыня'
              : 'мешок для беременности',
            ', ',
            urara.sex,
            ' быть может, ещё сильнее жаждет, чтобы её ',
            you.get_colored_name(),
            ' растерзывает — так и надо.',
          ]);
          await era.printAndWait([
            'Но ',
            urara.sex,
            ' всё же для ',
            you.get_colored_name(),
            ' — 「',
            urara.uma_sex_title,
            ' госпожа», и унижением от подлого ',
            you.get_colored_name(),
            ' не насытится ',
            urara.sex,
            '.',
          ]);
          await era.printAndWait([
            'Но хотя бы как ',
            era.get('flag:惩戒力度') === 2
              ? ' секс-рабыня'
              : 'мешок для беременности',
            ', ',
            you.get_colored_name(),
            ' всё ещё может дать ',
            urara.sex,
            ' удовольствие.',
          ]);
          await era.printAndWait([
            'Нежно и со смаком вбирает выглянувшую из ложбинки груди фута- ',
            urara.uma_sex_title,
            ' — головку, ',
            you.get_colored_name(),
            ' языком осторожно ублажает член подопечной.',
          ]);
          await era.printAndWait([
            'Ничего, лишь бы ',
            urara.sex,
            ' была рада, лишь бы ',
            urara.get_colored_name(),
            '  была счастлива — разве раньше мы не были такими?…',
          ]);
          await era.printAndWait(
            'Кончиком языка во рту понемногу раздвигает крайнюю плоть вокруг, затем сосёт и лижет с силой, что оставляет следы, — всё словно давно врезалось в тело инстинктом.',
          );
          await era.printAndWait([
            'Но у так усердно прислуживающей рабыни- ',
            urara.uma_sex_title,
            ', ',
            urara.get_colored_name(),
            ' — в глазах мелькнула невыразимая печаль.',
          ]);
          await era.printAndWait([
            'Чем-то ',
            urara.get_colored_name(),
            '  стало плохо? Сама ошиблась? Нет… надо сделать лучше, так совсем не годится ',
            urara.sex,
            '……',
          ]);
          await era.printAndWait([
            'Увидев выражение того, кому служит, ',
            you.get_colored_name(),
            '  даже в мозгу, где само мышление уже до конца переделали, проскальзывает бессчётное сомнение в себе из-за провала как унитаза.',
          ]);
          await era.printAndWait([
            'Но когда ',
            you.get_colored_name(),
            '  медлит, ',
            urara.get_colored_name(),
            '  всё же из ',
            you.get_colored_name(),
            '  рта осторожно вынула член и в ответ нежно прижала ',
            you.get_colored_name(),
            ' — тело.',
          ]);
          await urara.say_and_wait([
            'Ничего, даже если к прежнему уже не вернуться… тогда давай я сама отвечу на ',
            callname,
            ' — ожидание, хорошо?',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32_after_sex: (() => {
    const title = '';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {boolean} do_sex 是否性爱
     */
    const f = async (urara, inner_urara, you, do_sex) => {
      if (do_sex) {
        await era.printAndWait([
          'Свернувшись рядом с ',
          you.get_colored_name(),
          ', тихо пожелала спокойной ночи, и удовлетворённая ',
          urara.get_colored_name(),
          '  наконец спокойно уснула.',
        ]);
        await era.printAndWait([
          'Та маленькая ',
          urara.uma_sex_title,
          ' выросла? На этот вопрос, быть может, ',
          urara.sex,
          ' сама ответит лучше…',
        ]);
        await era.printAndWait([
          'Мягко обняв ту нежность, что прижалась к телу, ',
          you.get_colored_name(),
          '  тоже медленно закрывает глаза.',
        ]);
        await era.printAndWait(
          'Как бы то ни было, это на удивление бурное лето уже подходит к концу.',
        );
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '…Нет, вовсе не хорошо, сейчас забираю слова назад… всё-таки не выйдет же…',
      );
      await inner_urara.say_as_unknown_and_wait('…у-у…');
    };
    f.title = title;
    return f;
  })(),
  ws_47_43: (() => {
    const title = '「Перемена」&「Выбор」';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} m_summer1 是否触发了经典年夏合宿开始事件
     * @param {number} fans 粉丝数
     * @param {number} best_mvp 目前重赏最佳名次，Infinity 是未参加过重赏
     * @param {PrintedSpan} negi_sta 根岸锦标（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      m_summer1,
      fans,
      best_mvp,
      negi_sta,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        'Говорят, есть по имени Урара скаковая ',
        urara.uma_sex_title,
        ', сколько раз ни проиграет, всё равно очень старается.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'В один из дней, когда такое говорят повсюду на ипподроме, —',
      );
      era.drawLine();
      await urara.say_and_wait(
        'Н-н— хоть уже и решила, выиграть всё равно так трудно! Кажется, все『вжух』и сразу вырываются вперёд—',
      );
      await era.printAndWait([
        'На дорожке пробного заезда та, кому так спокойно веришь, снова пришла последней, ',
        urara.get_colored_name(),
        '  немного надувшись, плюхнулась в ',
        you.get_colored_name(),
        ' — объятия.',
      ]);
      await era.printAndWait(
        'После того как научилась выражать досаду от проигрыша в скачках, этот пушистый розовый комочек стал ещё больше похож на зверёныша.',
      );
      if (!m_summer1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' Когда это вдруг появилась такая прыть? Не случилось ли чего на летних сборах?',
        ]);
        await era.printAndWait([
          'К счастью, ничего серьёзного не случилось, похоже, ',
          urara.get_colored_name(),
          '  и одна может хорошо расти, вот ведь хорошая девочка…',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Тщательно разминая ',
        urara.get_colored_name(),
        ' — тело, с лицом, будто его исцелило, ',
        you.get_colored_name(),
        '  резко контрастирует с милым существом на руках, которое всё ещё дуется.',
      ]);
      await era.printAndWait([
        'Конечно, ',
        you.get_colored_name(),
        '  теперь тоже понимает, почему ',
        urara.sex,
        ' в обычных забегах вечно приходит последней: концентрации и так мало, а на повседневных скачках сил ещё меньше.',
      ]);
      await era.printAndWait([
        'Не стоит требовать слишком многого, ',
        urara.uma_sex_title,
        ' — тело имеет предел, в быту незачем так натягиваться, а для ',
        urara.get_colored_name(),
        '  это ещё важнее.',
      ]);
      await era.printAndWait(
        'Сначала иногда ещё казалось, что это проблема, которую надо решать, но теперь уже почти ясен самый подходящий для маленькой подопечной режим роста.',
      );
      await era.printAndWait([
        'Сейчас достаточно понемногу копить условия для победы до настоящей скачки и на самой скачке показать результат — для ',
        urara.get_colored_name(),
        '  это уже успех.',
      ]);

      era.printButton(
        '「Не торопись, сначала остынь. Как Урара думает, как можно выиграть?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Пусть Урара одна бежит, и всё! Если бегу только я, тогда первое место точно моё!',
      );
      await era.printAndWait([
        'А? Что? На миг не разобрать, ',
        urara.get_colored_name(),
        '  шутит или нет, ',
        you.get_colored_name(),
        '  едва не поскальзывается и не падает у края Тренировочного поля.',
      ]);

      await inner_urara.say_as_unknown_and_wait(
        'Вы… аха… в общем, скорее скажите хоть что-нибудь…',
      );
      era.printButton(
        '「Такой совет, наверное, уложит вице-президента надолго.»(расположение+15)',
        1,
      );
      era.printButton(
        '「Н-неужели Урара и вправду гений?」(влюблённость+3)',
        2,
      );
      ret.push(await era.input());

      await urara.say_and_wait([
        'Эх-хе-хе~ меня ',
        callname,
        '  подколол(а)! Ну, это да, так уже не скачка.',
      ]);
      await urara.say_and_wait(
        'Но всё равно немного злюсь на себя. Хоть и понимаю, что не надо себя так жать, я всё равно такая медленная…',
      );
      await urara.say_and_wait(
        'Как бы я ни проигрывала, все как прежде меня не винят, так что я должна сама скорее измениться.',
      );

      era.printButton(
        '「Но когда Урара себя поняла, она ведь и правда стала сильнее?»',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Н-да, как ',
        callname,
        '  сказал(а), Урара тоже стала сильнее, и на скачки болеть приходит ещё больше народу.',
      ]);
      await urara.say_and_wait(
        'На торговой улице говорят, в группе поддержки народу всё больше, и много новых фанатов подбадривают, чтобы я бежала свободно!',
      );
      await era.printAndWait([
        'И правда, в недавних скачках много новых лиц тоже влилось в ',
        urara.get_colored_name(),
        ' — поддержку, и даже на повседневные заезды посмотреть, как ',
        urara.sex,
        ' бежит, приходит уже очень много народу.',
      ]);
      await era.printAndWait([
        'И даже зная, что ',
        urara.get_colored_name(),
        ' может выступить нестабильно, болельщики всё равно каждый раз желают, чтобы ',
        urara.sex,
        ' обязательно победила.',
      ]);
      await era.printAndWait([
        'Может, всех не только трогает ',
        urara.get_colored_name(),
        ' — пыл, ещё и хотят увидеть, как ',
        urara.sex,
        ' из большинства поражений ухватит самую важную победу.',
      ]);
      await urara.say_and_wait(
        'Но когда услышали, что я хочу выложиться до конца и победить, многие дядьки и тёти с торговой улицы сделали тревожные лица.',
      );
      await urara.say_and_wait(
        'Многие, кто меня опекает, всё ещё боятся, что я травмируюсь, но теперь я уже не буду колебаться, так что…',
      );
      await era.printAndWait([
        'А, это они. Слушая ',
        urara.get_colored_name(),
        ' — рассказ, ',
        you.get_colored_name(),
        '  быстро вспоминает женщину, что в тот полдень на рекламной работе заговорила.',
      ]);
      await era.printAndWait([
        'Впрочем, раз уж ',
        urara.get_colored_name(),
        ' больше не станет колебаться — разрешить противоречие будет лишь вопросом времени.',
      ]);

      era.printButton(
        '「Так что, словами как из манги: достаточно в следующей скачке показать решимость Урары.»',
        1,
      );
      await era.input();

      await urara.say_and_wait('Ага! Вот именно! Я и дальше буду стараться——!');
      await era.printAndWait([
        'И всё же сейчас не хватает повода. Обдумывая 「проявление решимости」, ',
        you.get_colored_name(),
        ' снова погружается в раздумья.',
      ]);
      await era.printAndWait([
        'Возможно, когда-нибудь ',
        urara.get_colored_name(),
        ' тоже будет важная скачка, в которой сама захочет участвовать, и тогда ',
        urara.sex,
        ' какую скачку выберет?',
      ]);
      await era.printAndWait([
        'Кстати об этом, расписание выпускного года тоже пора утвердить? Следуя мыслям о будущем, ',
        you.get_colored_name(),
        ' опускает голову и роется в своих записях.',
      ]);
      await era.printAndWait([
        'Что именно делать в конце года — не очень представляется, но первая этапная цель на следующий год… хоть это и не обязательно, но в общем сначала попробовать ',
        negi_sta,
        '?',
      ]);
      era.println();
      if (best_mvp === Infinity) {
        await era.printAndWait([
          'После года с лишним подстройки нынешняя ',
          urara.get_colored_name(),
          ' должна уже обладать силой, чтобы бороться в G-скачках.',
        ]);
        await era.printAndWait([
          'И заодно прощупать воду — может, подобные скачки станут для ',
          urara.get_colored_name(),
          ' отправной точкой в G-скачки.',
        ]);
      } else if (best_mvp === 1) {
        await era.printAndWait([
          urara.uma_sex_title,
          ' — тело постоянно меняется, и в выпускной год ',
          urara.get_colored_name(),
          ' возможно, тоже придётся подстраиваться под перемену обычного состояния.',
        ]);
        await era.printAndWait([
          'Раз уж сейчас ',
          urara.get_colored_name(),
          ' уже есть сила для G-скачек — так что разведать новый год через G-скачку тоже неплохо.',
        ]);
      } else {
        await era.printAndWait([
          'Хотя раньше уже пробовали выйти на G-скачки, но ',
          urara.get_colored_name(),
          ' даже выложившись на бегу так и не смогла победить — видно, тогда было ещё рано.',
        ]);
        await era.printAndWait([
          'Но нынешняя ',
          urara.get_colored_name(),
          ' должна уже быть достаточно готова — так что с этого момента бросить повторный вызов, пожалуй, тоже можно.',
        ]);
      }
      if (fans >= 25000) {
        era.println();
        await era.printAndWait(
          'К тому же прежняя стратегия копить фанатов и репутацию здесь тоже сработает, например система голосования фанатов.',
        );
        await era.printAndWait(
          'Среди стратегий, которые допускает официал скачек, если поддержка фанатов достаточно высока, можно ещё через голосование расширить круг доступных скачек.',
        );
        await era.printAndWait([
          'А ещё, как уже говорилось, если на скачке, пока ',
          urara.sex,
          ' бежит, за неё болеет достаточно людей, то ',
          urara.get_colored_name(),
          ' и правда может бежать быстрее обычного.',
        ]);
        await era.printAndWait([
          'Звучит как читерство, да? Но это и вправду ',
          urara.get_colored_name(),
          ' — часть силы; по крайней мере, это та часть, которую 「Три богини」 допускают.',
        ]);
        await era.printAndWait([
          'Кстати, у ',
          urara.get_colored_name(),
          ' сколько сейчас фанатов-то? А, нашёл(а)… ээ?!',
        ]);
        await era.printAndWait(
          'G-скачки… нет, при такой поддержке не то что доступные G-скачки — даже 「Arima Kinen」…',
        );
        await era.printAndWait([
          'Понемногу пролистывая сведения в телефоне, ',
          you.get_colored_name(),
          ' постепенно приходит к дерзкому замыслу.',
        ]);
      }
      era.println();
      await era.printAndWait(
        'Как ни составляй план — сначала всё равно нужно спросить мнение самой заинтересованной.',
      );
      await era.printAndWait([
        'Отложив записи и телефон, ',
        you.get_colored_name(),
        ' смотрит на заворожённо глядящую на мчащихся по Тренировочному полю одноклассниц ',
        urara.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Почувствовав ',
        you.get_colored_name(),
        ' — взгляд, маленькая ',
        urara.uma_sex_title,
        ' тоже сразу, давно этого ожидая, к ',
        you.get_colored_name(),
        '  посылает бодрый знак.',
      ]);
      await urara.say_and_wait([
        callname,
        ', я уже отдохнула! Сейчас, наверное, уже можно начать тренировку?',
      ]);

      era.printButton(
        '「Можно. Но перед этим — у самой Урары какие мысли насчёт плана на следующий год?」',
        1,
      );
      await era.input();

      urara.say([
        'План на следующий год? Хе-хе~ я как раз думала, что ',
        callname,
        ' тоже уже пора спросить!',
      ]);
      era.printButton(
        'Дальше по дистанции (рост пригодности к средней и длинной)',
        1,
      );
      era.printButton('Попробовать траву (рост пригодности к траве)', 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await urara.say_and_wait(
          'Если смогу бежать дальше, меня заметит больше людей, да?',
        );
      } else {
        await urara.say_and_wait(
          'Если смогу бежать по траве, я смогу бросить вызов большему числу скачек, да?',
        );
      }

      await era.printAndWait(
        'Ээ? Ответила так прямо — когда успела решить? Погоди…?',
      );
      await era.printAndWait([
        'Услышав ',
        urara.get_colored_name(),
        ' — ответ без раздумий, ',
        you.get_colored_name(),
        ' немного радуется, но тут же чует: что-то не так. 「',
        callname,
        ' тоже уже пора спросить」,это что значит?',
      ]);
      await era.printAndWait([
        'Впрочем, даже если маленькая ',
        urara.get_colored_name(),
        ' прочла мысли — это не так уж важно… да?',
      ]);
      await era.printAndWait([
        'Не решаясь глянуть, нет ли в улыбке маленькой подопечной рядом глубокого смысла, ',
        you.get_colored_name(),
        ' словно спасаясь, входит в режим тренера.',
      ]);

      era.printButton(
        '「Ладно, тогда потом вместе сходим на торговую улицу, а сейчас для начала пробегись кружок на пробу!」',
        1,
      );
      await era.input();

      await urara.say_and_wait('О! Урара GO——!');
      await era.printAndWait([
        'Под ',
        you.get_colored_name(),
        ' — руководством уже готовая маленькая ',
        urara.uma_sex_title,
        ', сразу выросшей фигурой врезается в бегущую по Тренировочному полю толпу.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '——Хотя будущее непросто предвидеть, но ныне ',
        urara.sex,
        ' — рост точно не ошибка',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait([
        'Не думала, что даже Ураре придётся вовремя делать выбор. Право же, вы не ',
        urara.sex,
        ' — тренер?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Это не о том, чтобы ',
        urara.sex,
        ' вечно была вами защищена? Просто мне кажется, так тоже неплохо.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Когда-нибудь ',
        urara.sex,
        ' тоже будет цель, которую сама захочет преследовать…',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      if (fans >= 25000) {
        era.println();
        await inner_urara.say_as_unknown_and_wait(
          'Простите, прежде чем уйти, прошу вас… выслушайте меня.',
        );
        await inner_urara.say_as_unknown_and_wait([
          'Я не говорю, что Ураре нельзя бросать вызов G-скачкам, но вам незачем ради повода вселять в неё надежды, которые ',
          urara.sex,
          ' не сможет осуществить.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'Что вы столько раз давали Ураре побеждать, я вам очень благодарна и рада, что ',
          urara.sex,
          ' смогла одерживать победы.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'Даже если вы хотите, чтобы ',
          urara.sex,
          ' приносила вам наживу — я могу смотреть сквозь пальцы, но…',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'Но чтобы попытаться встать на вершине, нужна готовность нести этот вес, а ',
          urara.sex,
          '…совсем не так крепка, как вы себе представляете.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'Даже если вы, кто столько ради этого трудились, давно с запасом сил, всё равно не сможете разделить ношу, которую несёт ',
          urara.sex,
          ', — даже на вес пёрышка.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'Прошу, не давайте ',
          urara.sex,
          ' слишком много надежд: ',
          urara.sex,
          ' хочет лишь разделить со всеми то маленькое счастье, разве не так?',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'В общем, прошу вас ещё раз всё хорошенько обдумать, очень прошу…',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = 'Решимость идти вперёд!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {number} best_mvp 目前重赏最佳名次，Infinity 是未参加过重赏
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      best_mvp,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'Почему… я же всё сказала… почему вы всё равно так поступаете… ну что вы за человек…',
      );
      era.drawLine();
      await era.printAndWait([
        'В просторном тоннеле для участников ',
        urara.get_colored_name(),
        '  оглядывается по сторонам, совсем не в лад с напряжённой атмосферой вокруг.',
      ]);
      await era.printAndWait([
        'А рядом с перевозбуждённой маленькой ',
        urara.uma_sex_title,
        ' стоит ',
        urara.sex,
        ' со слегка разболевшейся головой ',
        callname,
        '.',
      ]);
      await urara.say_and_wait([
        callname,
        '! Не думала, что Урара и правда попала на ',
        arim_kin,
        '  же!',
      ]);
      await era.printAndWait([
        'И правда, это застало многих врасплох: даже организовавший голосование ',
        you.get_colored_name(),
        '  не думал(а), что ход с голосованием фанатов и правда сработает.',
      ]);
      await era.printAndWait([
        'Смелая идея сама по себе была лишь смелой идеей, но ',
        you.get_colored_name(),
        '  всё же недооценил(а) любовь к ',
        urara.get_colored_name(),
        ' — вздымающийся пыл всех.',
      ]);
      await era.printAndWait([
        'Стоило мельком глянуть на лица окружающих ',
        urara.uma_sex_title,
        ' и тренеров — убийственный настрой так и прёт — и сразу ясно: единственная, кому тут, пожалуй, недостаёт напряжения, — это ',
        urara.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([
        'хе-хе~ У всех такие напряжённые лица… Ураре тоже надо выглядеть чуть напряжённее?',
      ]);
      await era.printAndWait([
        'Подстроив голос под атмосферу вокруг участников, ',
        urara.get_colored_name(),
        '  легонько потянула ',
        you.get_colored_name(),
        ' — край одежды.',
      ]);

      era.printButton(
        '「Н-не страшно, Ураре не нужно нервничать, просто считай это репетицией будущего…」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Э? ',
        callname,
        '  думает, что Урара в следующий раз ещё сможет прийти? Похоже, ',
        callname,
        '  и все очень верят в Урару!',
      ]);
      await urara.say_and_wait([
        'Но это же ',
        arim_kin,
        '  о! ',
        urara.get_colored_name(),
        '  ещё все ждут, так что если выиграть, если выиграть—!',
      ]);
      await era.printAndWait([
        'Услышав ',
        urara.get_colored_name(),
        ' — желание победы, ',
        you.get_colored_name(),
        '  и без того ноющая голова от чувства вины закачалась ещё сильнее.',
      ]);
      if (best_mvp === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '  и правда думает, как выиграть. Возможно ли? Неизвестно. Но раз уже брала престижные скачки, чуть-чуть надежды тоже…',
        ]);
        await era.printAndWait(
          'Какое «тоже» — проблем выше крыши, разве это одно и то же? Даже трёх богинь спрашивать не надо: это совершенно другое.',
        );
      } else {
        await era.printAndWait([
          'Надежды на победу не то что туманны: сейчас, пожалуй, лишь чудо — и маленькая ',
          urara.uma_sex_title,
          ' выиграет этот забег.',
        ]);
        await era.printAndWait([
          'Даже если сами три богини видят, как маленькая ',
          urara.uma_sex_title,
          ' старается, сейчас ',
          urara.sex,
          ' может дождаться отклика лишь от тех, кто готов болеть, пока ',
          urara.sex,
          ' бежит.',
        ]);
      }
      era.println();
      await era.printAndWait(
        'Вот теперь худо, это же просто тренерский провал: решение уже сейчас лезть в Arima Kinen и правда было слишком опрометчивым.',
      );
      await era.printAndWait([
        'Победу и не ждали, но хотя бы этот забег ',
        urara.get_colored_name(),
        '  если бы пришла, как следует подготовившись…',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          'Ураре ничего, слышишь? ',
          callname,
          '  просто будь как всегда, ведь Урара эту возможность не упустит!',
        ]);
        await era.printAndWait([
          'Заметив ',
          you.get_colored_name(),
          ' — непривычное лицо, маленькая ',
          urara.uma_sex_title,
          ' без стеснения обняла ',
          you.get_colored_name(),
          ', и явила материнскую улыбку, какой успокаивают ребёнка.',
        ]);
        await urara.say_and_wait([
          'Если в первый раз разгром — во второй просто снова встанешь, с Урарой всё будет в порядке! Тогда ',
          callname,
          ', до встречи чуть позже!',
        ]);
        await urara.say_and_wait(
          'Во время скачки всё время смотри на Урару, ладно!',
        );
      } else {
        await urara.say_and_wait([
          callname,
          '  мучается? Да какая разница, мы же всегда так всё куролесили?',
        ]);
        await era.printAndWait([
          'Словно насквозь видя ',
          you.get_colored_name(),
          ' — мысли, ',
          urara.get_colored_name(),
          '  вдруг тихо обняла, улыбка нежная, как у матери, которой ничего не поделать.',
        ]);
        await urara.say_and_wait([
          'И уже пора выходить, слышишь? ',
          callname,
          '  как всегда на трибуне со всеми жди, пока Урара вернётся!',
        ]);
        await urara.say_and_wait('Как и раньше, взгляд не отводи, ладно?');
      }
      era.println();
      await era.printAndWait([
        'После долгого мига маленькая ',
        urara.uma_sex_title,
        ' — объятие оборвалось, и следом в ',
        you.get_colored_name(),
        ' — ушах раздалось объявление о выходе на скачку.',
      ]);
      await urara.say_and_wait([
        'На душе чуть спокойнее? хе-хе~ ',
        callname,
        '  всегда так легко копит напряжение!',
      ]);
      await urara.say_and_wait([
        'Но кое-что только ',
        callname,
        '  может сделать, правда? Потому что мы — ',
        callname,
        '  и подопечная!',
      ]);
      await era.printAndWait([
        'Словно это уже стало ритуалом перед выходом, спиной к свету за тоннелем, ',
        urara.get_colored_name(),
        '  улыбаясь, машет ',
        you.get_colored_name(),
        '  на прощание в последний раз.',
      ]);
      await era.printAndWait([
        'Так же маша вслед, провожая, как ',
        urara.get_colored_name(),
        '  бежит к полю, и наконец ',
        you.get_colored_name(),
        '  тоже крепко надавил(а) на виски и, повернувшись, пошёл(шла) туда, куда следует.',
      ]);
      era.println();
      await era.printAndWait('Однако.');
      await inner_urara.say_as_unknown_and_wait(
        '…Перед уходом не ответите ли вы мне ещё на один вопрос?',
      );
      await era.printAndWait(
        'Стоя в безлюдном туннеле участников, в мире, где всё слилось в серо-белое, словно время нажало паузу.',
      );
      await era.printAndWait([
        'А теперь навстречу ',
        you.get_colored_name(),
        '  прямо шагает та, чьё лицо носит незнакомую мрачность, — всегда самый знакомый вишнёво-розовый.',
      ]);
      await era.printAndWait([
        'но ',
        urara.sex,
        ' — не ',
        urara.get_colored_name(),
        ', хотя голос точь-в-точь тот же, и сердитое личико совсем как тогда, но ',
        urara.sex,
        ' — точно не ',
        urara.get_colored_name(),
        ';',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '  не станет вежливой до неузнаваемости и уж точно не наденет такое мрачное, сложное лицо;',
      ]);
      await era.printAndWait([
        urara.sex,
        'конечно, не ',
        urara.get_colored_name(),
        ', сейчас ',
        urara.get_colored_name(),
        '  уже вышла на трассу: ни из воздуха сзади не явится, ни в школьной форме не стоит;',
      ]);
      await era.printAndWait([
        'но ',
        urara.sex,
        ' быть может, и есть「',
        inner_urara.get_colored_actual_name(),
        ' 」,а может, ',
        you.get_colored_name(),
        '  и ',
        urara.sex,
        ' много раз виделись во сне, только всякий раз к пробуждению всё таяло без следа—',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Я ведь уже говорила вам — зачем же всё ещё требовать, чтобы ',
        urara.sex,
        ' себя пересиливала……',
      ]);
      await era.printAndWait([
        'В пространстве, где, кажется, стынет даже рассудок, суровый допрос в облике ',
        inner_urara.get_colored_name(),
        ' неотступно подступает к ',
        you.get_colored_name(),
        ' — груди.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Я спрашиваю вас: зачем вы заставляете ',
        urara.sex,
        ' сейчас выходить на скачки… я спрашиваю вас, почему вы заставляете Урару прямо сейчас бежать Arima Kinen!',
      ]);
      await era.printAndWait([
        'Колебание в забытьи будто зажгло ',
        urara.teen_sex_title,
        ' — ярость; скопившийся гнев с силой ',
        urara.uma_sex_title,
        ' вжал ',
        you.get_colored_name(),
        ' — тело к стене туннеля.',
      ]);
      await era.printAndWait([
        'Боль от удара со спины расползлась по всему телу и принесла к растерянному ',
        you.get_colored_name(),
        '  немного колкой ясности.',
      ]);
      await era.printAndWait([
        'Застывший мир — не сон, и「',
        inner_urara.get_colored_actual_name(),
        ' 」 тоже по-настоящему существует.',
      ]);
      await era.printAndWait([
        'Но тяжёлая хватка на теле держала лишь несколько секунд, и крохотная вишнёво-розовая ',
        urara.uma_sex_title,
        ' тут же бессильно, словно плача, разжала ',
        you.get_colored_name(),
        ' — лацкан.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Потому-то вы оба одинаковы: даже оставить вас в покое — всё равно без конца будете меняться, хоть себе же во вред…',
      );
      await era.printAndWait([
        'Не сумев продолжить всхлипывающие слова, с улыбкой, в которой сдерживалась печаль,「',
        inner_urara.get_colored_actual_name(),
        ' 」 подняла голову и разгладила ',
        you.get_colored_name(),
        ' — край одежды.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Простите, я потеряла самообладание. С самого начала не стоило надеяться, что вы остановитесь…',
      );

      era.printButton(
        '「Простите, я не знаю, что случилось, но мне нужно смотреть скачки подопечной…」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Перед лицом этой прямо-таки жуткой сцены ',
        you.get_colored_name(),
        '  сохраняет удивительное спокойствие и лишь собирается обойти ',
        urara.uma_sex_title,
        ', чтобы снова смотреть ',
        urara.get_colored_name(),
        ' — скачки.',
      ]);
      await era.printAndWait([
        'Словно сейчас перед тобой не только「странная ',
        urara.get_colored_name(),
        ' 」, но и давно знакомый, хоть имя неизвестно,「хлопотный друг」.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вы тревожитесь за『Урару』? Ничего, ',
        urara.sex,
        ' ещё не настолько, чтобы тебе из-за этого так спешить.',
      ]);

      era.println();
      if (high_relation) {
        await inner_urara.say_as_unknown_and_wait(
          'Впрочем, ваше чувство я понимаю, да? Вы и вправду искренне заботитесь об Ураре, недаром Урара так на вас опирается.',
        );
        await era.printAndWait([
          'Мягко заступая ',
          you.get_colored_name(),
          ' — груди, безымянный хлопотный друг, словно успокаивая сердце, явил точь-в-точь как у маленькой ',
          urara.uma_sex_title,
          ' улыбку.',
        ]);
      } else {
        await inner_urara.say_as_unknown_and_wait([
          'Разве в обычное время вы так уж заботитесь об Ураре? Отчего же такая нервозность? Тренер ',
          you.adult_sex_title,
          ' (вы)?',
        ]);
        await era.printAndWait([
          'Неотступно перехватывая ',
          you.get_colored_name(),
          ' — путь;「друг」, без имени и фамилии, насмехается над внезапно струхнувшим негодным взрослым перед собой.',
        ]);
      }
      era.println();
      await inner_urara.say_as_unknown_and_wait([
        'Не те ли это перемены, что вы и ',
        urara.sex,
        ' хотели совершить? Так что теперь чуть потерпите.',
      ]);
      await era.printAndWait([
        urara.sex,
        'Сказано, быть может, верно… нет, ',
        urara.sex,
        ' скорее права. В тихом воздухе ',
        you.get_colored_name(),
        '  словно безоговорочно доверяя, останавливается.',
      ]);
      await era.printAndWait([
        'Обернувшись, глядишь: надев безрадостно-беспечальную「маску」,「',
        urara.sex,
        ' 」стоит на месте и ждёт внимания「вас」.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Сейчас я расскажу вам маленькую историю — много времени не займёт…',
      );
      await era.printAndWait([
        'Шагнув вперёд, плечом к плечу с ',
        you.get_colored_name(),
        '  глядя наружу из туннеля, вишнёво-розовая ',
        urara.teen_sex_title,
        ' качает ушами и хвостом и тянет руку к небу, где не понять — ясно или хмуро.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'То история одной столь ничтожной, что дальше некуда… ',
        urara.uma_sex_title,
        ' — история.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_c: (() => {
    const title = (inner_urara) => [
      { color: inner_urara.color, content: `「${inner_urara.sex} 」` },
      ' — силуэт ',
      { color: inner_urara.color, content: `「${inner_urara.sex} 」` },
      ' — имя',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {number} rank 比赛名次
     */
    const f = async (urara, inner_urara, you, callname, rank) => {
      await inner_urara.print_and_wait('С чего же начать эту историю?');
      await inner_urara.print_and_wait([
        'Когда-то, быть может, и не так давно, одна своенравная, заурядных задатков маленькая ',
        inner_urara.uma_sex_title,
        ' на каком-то ранчо как попало родилась.',
      ]);
      await inner_urara.print_and_wait([
        'Но даже такую хлопотную и обыкновенную ',
        inner_urara.child_sex_title,
        ', всё же те, кто первым любил ',
        inner_urara.sex,
        ', даровали милое, словно благословение, имя.',
      ]);
      await inner_urara.print_and_wait([
        'А ',
        inner_urara.sex,
        ' — её жизнь, как это милое имя, после случайной удачи была обласкана эпохой и Тремя богинями.',
      ]);
      await inner_urara.print_and_wait([
        'Хотя за дни бега ни одной скачки не выиграла, ',
        inner_urara.sex,
        ' всё же раз за разом находила всеобщую жалость и заботу.',
      ]);
      await inner_urara.print_and_wait([
        'Потому ',
        inner_urara.sex,
        ' ненавидела бег, ненавидела людей, чьи надежды ',
        inner_urara.sex,
        ' несла на себе, ненавидела сородичей, что так запросто ставили на кон жизнь, — всех одинаково.',
      ]);
      await inner_urara.print_and_wait([
        'Просто даже столь трусливая и чудная ',
        inner_urara.sex,
        ' всё равно подобрала на раскисшей из-за себя дороге две последние доли 「крошечного счастья」.',
      ]);
      await inner_urara.print_and_wait(
        'Одна — покой, сложенный из любви всех, где чего-то не хватает, но всё же можно укрыться, а другая — маленькая шутка Трёх богинь.',
      );
      await inner_urara.print_and_wait([
        'И вот посреди пути благословлённая 「',
        inner_urara.sex,
        ' 」 и столь же любимая другими 「',
        urara.sex,
        ' 」 сели в один поезд,',
      ]);
      await inner_urara.print_and_wait([
        'Шедшая по благословлённой дороге, на деле не способная ни на что 「',
        inner_urara.sex,
        ' 」 и слабая, но желающая стать надеждой 「',
        urara.sex,
        ' 」 встретились.',
      ]);
      await inner_urara.print_and_wait(
        'В том будто сновидении счастливом пути бок о бок двое, что должны были быть разными, постепенно стали обликом друг друга.',
      );
      await inner_urara.print_and_wait([
        inner_urara.sex,
        'Без разбора гнушаясь той слишком слепящей надеждой, но тот луч солнца всё же осветил в своенравной ',
        inner_urara.sex,
        ' душе самую мягкую лужайку.',
      ]);
      await inner_urara.print_and_wait([
        'Вот бы ',
        urara.sex,
        ' всегда так радостно росла, вот бы ',
        urara.sex,
        ' обрела ',
        urara.sex,
        ' желанное крошечное счастье…',
      ]);
      await inner_urara.print_and_wait([
        'Но столь крохотному и всё же упрямо выбравшему бег вишнёво-розовому где же искать 「улыбки всех」, которых нет даже у самой себя?',
      ]);
      await inner_urara.print_and_wait([
        'И всё же ',
        inner_urara.sex,
        ' нашла, нашла того, с кем маленькая ',
        urara.uma_sex_title,
        ' обретёт счастье и вместе напишет целую историю, 「тренера」.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Когда голос стих, глядя, как слушает ',
        you.get_colored_name(),
        ', прижавшись к ',
        you.get_colored_name(),
        ' — ',
        inner_urara.teen_sex_title,
        ' холодные щёки постепенно налились вязким пунцовым.',
      ]);
      await era.printAndWait([
        'В невесть когда начавшемся соприкосновении кож, привстав на цыпочки, ',
        inner_urara.teen_sex_title,
        ' сложила мягкие влажные вишнёвые губы на ',
        you.get_colored_name(),
        ' — губы.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'А что до того, что 『',
        urara.sex,
        '』 чувствует к 『вам』, так уж почувствуйте сами…',
      ]);
      await era.printAndWait([
        'Тёплая мягкость, сплетаясь с липким влажным звуком, просачивалась внутрь; похожая на ',
        urara.get_colored_name(),
        '  маленькая ',
        inner_urara.uma_sex_title,
        ' — ',
        inner_urara.sex,
        ', пользуясь своим выражением лица, у ',
        you.get_colored_name(),
        '  забирала своё.',
      ]);
      await era.printAndWait([
        'Нельзя, чтобы ',
        urara.sex,
        ' такое делала, нет времени, скорее оттолкни её — ведь ',
        urara.sex,
        ', ',
        urara.sex,
        ' — не ',
        urara.get_colored_name(),
        ', и нельзя, чтобы ',
        urara.sex,
        ' делала такое с тобой…',
      ]);
      await era.printAndWait(
        'Но даже когда сознание изо всех сил держалось за ясность, тело полностью скользнуло в объятия с другой стороны.',
      );
      await era.printAndWait([
        'Не в чувствах дело и сомневаться не нужно, ',
        urara.sex,
        ' телом пахнет самой важной подопечной, 「',
        urara.get_colored_name(),
        ' 」 прямо здесь…',
      ]);
      await era.printAndWait([
        'Затем в этом ',
        urara.sex,
        ' начатом и ведомом поцелуе-забытьи ',
        urara.teen_sex_title,
        ' сильно впилась в постепенно оседающие губы другой стороны.',
      ]);
      await era.printAndWait(
        'Хотя боль подавляли возбуждённые нервы, сладковато-кровавый запах всё равно постепенно растекался во рту у обоих.',
      );
      await era.printAndWait([
        'Прищурившись, всасывала смешанное с кровью вожделение, и утопавшая в нём ',
        urara.sex,
        ' всё ещё без конца вторгалась в ',
        you.get_colored_name(),
        ' — тело и дух.',
      ]);
      await era.printAndWait(
        'Что же таилось в этом неотвязном поцелуе: тяжёлое вожделение, примешанная благодарность или искажённое омерзение — а может, всё сразу?',
      );
      await era.printAndWait([
        'Единственное, что ясно: избравшая 「вас」 「',
        urara.sex,
        ' 」 жаждет ',
        you.get_colored_name(),
        ' — всё, от плоти до души…',
      ]);
      await era.printAndWait([
        'Медленно оборвав мстительный глубокий поцелуй, целиком хищная ',
        urara.teen_sex_title,
        ' ещё не натешившись, лизнула серебряную нить, всё ещё тянувшуюся от губ.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вот так. Вы поняли? Если нет — тоже ничего, ведь впереди у вас ещё больше времени, пока ',
        urara.sex,
        ' рядом…',
      ]);
      await era.printAndWait([
        'Легко выскользнув из ',
        you.get_colored_name(),
        ' — объятий, а та, что перед глазами, ',
        urara.sex,
        ' убрала жар во взгляде и вернула ту холодную отстранённость к чужим.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'О себе сказано. Тогда напоследок, перед уходом, скажу ещё пару слов о том, как сейчас у Урары.',
      );
      if (rank === 1) {
        await inner_urara.say_as_unknown_and_wait(
          'Как все и желали, вы скоро увидите чудо: 『лучшее』 первое место Урары.',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Быть может, всему есть причина и следствие, но для всех остолбеневших зрителей это и есть чудо?',
        );
      } else if (rank <= 5) {
        await inner_urara.say_as_unknown_and_wait(
          'На самом деле до чуда — всего один шаг, правда? Урара очень старалась, и ваша интуиция всегда была точной.',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Впрочем, для всех, кто так любит Урару, и такого результата хватит, чтобы расплакаться.',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          'Как большинство и думало, да? Но все рады, и Урара тоже довольна — этого довольно, правда?',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Просто на мой взгляд, в этот раз вы были чересчур радикальны.',
        );
      }
      await inner_urara.say_as_unknown_and_wait(
        'Если в следующий раз Урара пострадает, я заберу право дописывать историю себе.',
      );
      await era.printAndWait([
        'После короткой паузы, словно сама собой внезапно явившись, 「',
        inner_urara.get_colored_actual_name(),
        ' 」 снова сама по себе развернулась и ушла.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Ведь довольно было бы просто принять тёплое сияние, но крохотные друг с другом непременно должны взяться за руки и гнаться за солнцем.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Тогда дайте и мне увидеть, пока крылья из воска не растаяли, ',
        urara.sex,
        ' и вы насколько близко сможете подойти к солнцу—',
      ]);
      await era.printAndWait(
        'Вместе с угрозой, брошенной на прощание, серо-белое зрение снова окрасилось, а вернувшийся в движение воздух влил в проход кипящие голоса толпы.',
      );
      await era.printAndWait([
        'А обнаружив, что тело наконец снова слушается, ',
        you.get_colored_name(),
        '  спешит вперёд перехватить уже входящую в свет ',
        urara.uma_sex_title,
        ', но ',
        urara.sex,
        ' не останавливается — рука проходит сквозь её силуэт.',
      ]);
      era.printButton(
        '「Стой! Хватит говорить загадками! Что это вообще за сцена? Ты-то кто…」',
        1,
      );
      await era.input();
      await inner_urara.say_as_unknown_and_wait([
        'Подумайте ещё как следует, тренер ',
        you.adult_sex_title,
        ' (вы), моё имя — неужели вы не угадаете?',
      ]);
      await era.printAndWait([
        'Стоя у выхода из тоннеля, ',
        urara.teen_sex_title,
        ' оставила многозначительную фразу и растаяла в солнечном свете, словно лёгкий туман.',
      ]);
      await era.printAndWait([
        'А споткнувшись выскочивший из тени и нечаянно вырвавшийся из тоннеля ',
        you.get_colored_name(),
        ', увидел(а) именно то, о чём говорила другая ',
        inner_urara.get_colored_name(),
        ' — исход скачки.',
      ]);
      await era.printAndWait([
        'За завесой из всё ещё орущей и ликующей толпы и порхающих бумажных обрезков выглянувшее из-за облаков солнце сейчас и впрямь слепило.',
      ]);
      await you.say_and_wait('Три богини…', true);
      era.drawLine();
      await era.printAndWait([
        'От края дорожки до раздевалки за кулисами, даже пот не вытерев, восторженная ',
        urara.get_colored_name(),
        ' всё ещё делилась с ',
        you.get_colored_name(),
        ' впечатлениями о скачке.',
      ]);
      if (rank === 1) {
        await era.printAndWait([
          'Впрочем, сейчас, пожалуй, кто угодно возбуждённо обсуждал бы итог скачки — ведь «красиво взявшая первое» неожиданно — 「',
          urara.get_colored_actual_name(),
          ' 」.',
        ]);
        await urara.say_and_wait(
          'Вот так! Но победа какая-то ненастоящая, будто что-то странное—',
        );
        await era.printAndWait([
          'Так-то оно так, ',
          urara.get_colored_name(),
          ' сегодня не то что блестяще пробежала — прямо не та, что обычно… хотя так говорить — ',
          urara.sex,
          ' как будто жалко.',
        ]);

        era.printButton(
          '「Урара хочет ещё раз? На Arima Kinen в следующем году.」',
          1,
        );
        await era.input();

        await urara.say_and_wait('Ага! Все как будто и не особо обрадовались!');
        await era.printAndWait([
          'Хотя это, скорее всего, потому что слишком потрясло. С кривой улыбкой вытирая полотенцем ',
          urara.get_colored_name(),
          ' — улыбающееся лицо, ',
          you.get_colored_name(),
          ' беспомощно подумал(а).',
        ]);
      } else if (rank <= 5) {
        await era.printAndWait([
          'Впрочем, сейчас, пожалуй, кто угодно возбуждённо обсуждал бы итог скачки — ведь ',
          urara.get_colored_name(),
          ' — выступление и впрямь слишком неожиданное.',
        ]);
        await urara.say_and_wait(
          'У-у— все молчат, но тогда правда чуть-чуть не хватило!',
        );
        await era.printAndWait([
          'На самом деле и в призах уже здорово; потом ещё раз посмотрим запись скачки. Так думая, ',
          you.get_colored_name(),
          ' протянул(а) полотенце и воду ',
          urara.get_colored_name(),
          '.',
        ]);

        era.printButton(
          '「Именно поэтому так просто оставлять нельзя, правда?」',
          1,
        );
        await era.input();

        await urara.say_and_wait(
          'Ага! Я почувствовала! Предчувствие, что в следующий раз сама выиграю!',
        );
        await era.printAndWait([
          'С пылающей боевым духом ',
          urara.get_colored_name(),
          ' стукнувшись кулачками, ',
          you.get_colored_name(),
          ' и впрямь почувствовал(а) в этом незаменимую слаженность между ними двумя.',
        ]);
      } else {
        await era.printAndWait([
          'Видно, все, кто её поддерживал, улыбнулись — сейчас ',
          urara.get_colored_name(),
          ' прямо как ребёнок, получивший подарок на день рождения.',
        ]);
        await urara.say_and_wait(
          'Но вот… эх-хе-хе~ это же ожидаемый результат, да? Знакомое чувство вроде опять вернулось…',
        );
        await era.printAndWait([
          'Не то чтобы, просто Arima Kinen для ',
          urara.get_colored_name(),
          ' во всех отношениях слишком тяжёлая. Так думая, ',
          you.get_colored_name(),
          ' с улыбкой потёр(ла) маленькая ',
          urara.uma_sex_title,
          ' — щёки.',
        ]);

        era.printButton('「Значит, в выпускном…」', 1);
        await era.input();

        await urara.say_and_wait(
          'Ага! В следующем году я ещё раз попробую! Я покажу всем, как выросла Урара!',
        );
      }
      await era.printAndWait(
        'И правда, как «та ',
        urara.sex,
        '» сказала, сейчас даже если ',
        you.get_colored_name(),
        ' остановится, ',
        urara.get_colored_name(),
        ' всё равно выберет эту скачку…',
      );
      await era.printAndWait([
        'Стоп! Точно, ещё «та ',
        urara.sex,
        ' » — дело, но… как это ещё ',
        urara.get_colored_name(),
        ' объяснить?',
      ]);

      era.printButton(
        '「Ах да, Урара, я вроде только что, эм… встретил(а)…」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Но пока ',
        you.get_colored_name(),
        ' ещё думал(а), как ',
        urara.get_colored_name(),
        ' рассказать о только что пережитом — будто галлюцинации, — вдруг услышал(а) маленькая ',
        urara.uma_sex_title,
        ' — вскрик.',
      ]);
      await urara.say_and_wait([
        'Ах, ',
        callname,
        '! У тебя на губах! Где натёрло, что ли?',
      ]);
      await era.printAndWait([
        'Услышав ',
        urara.get_colored_name(),
        ' — растерянное предупреждение, ',
        you.get_colored_name(),
        ' только тогда в запоздалой вспышке боли рефлекторно прижал(а) палец к губам.',
      ]);
      await era.printAndWait(
        'Это… кровь? Вглядываясь в каплю застывшей красноты, снятую с раны, тот болезненный поцелуй сквозь полусон наконец прояснился в голове.',
      );
      await era.printAndWait([
        'Под ',
        urara.get_colored_name(),
        ' — тревожным и недоумённым взглядом ',
        you.get_colored_name(),
        ' ненадолго замолчал(а) — похоже, 「',
        inner_urara.sex,
        ' 」 и правда приходила…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_48: (() => {
    const title = (inner_urara) => [
      { color: inner_urara.color, content: `「${inner_urara.sex} 」` },
      ' — слова, ',
      { color: inner_urara.color, content: `「${inner_urara.sex} 」` },
      ' — имя',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对玩家的称呼
     * @param {number} fans 粉丝数
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_30,
      fans,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        'Будущее, что сама преследует, — какого цвета должна быть эта мечта? Тренер ',
        you.adult_sex_title,
        ' (вы) знаете ответ?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '…Ха, я же говорила, что уберегу ',
        urara.sex,
        ' — …',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Незаметно дни, когда ',
        urara.get_colored_name(),
        ' бросала вызов классическому классу, тоже почти кончились — за два года с той встречи сколько же всего случилось…',
      ]);
      await era.printAndWait([
        'Держась за руки с ',
        urara.get_colored_name(),
        ' и вместе гуляя по улице, глядя на ясное небо, зимняя атмосфера как будто и не такая холодная.',
      ]);
      await era.printAndWait([
        'Вместе с ',
        you.get_colored_name(),
        ' — чувствами в груди рядом любопытно озирающаяся ',
        urara.get_colored_name(),
        ' тоже высказала свои свежие впечатления от пустынной улицы.',
      ]);
      await urara.say_and_wait(
        'Сегодня как-то тихо, людей на улице тоже поменьше, совсем не как представляла.',
      );

      era.printButton(
        '「Потому что Arima Kinen только что кончилась? Может, вместо холода все охотнее дома обсуждают скачку.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Хе-хе~ ',
        callname,
        '! Когда этот год кончится, я тоже смогу выходить на более важные скачки, да?',
      ]);

      era.printButton('「Урара сегодня так рада.»', 1);
      await era.input();

      await urara.say_and_wait([
        'Ну это же само собой! Все нас поддерживают, ',
        callname,
        ' всегда так старается, в следующем году я тоже обязательно побегу ещё быстрее!',
      ]);
      await era.printAndWait([
        'Верно, вместе с ',
        urara.get_colored_name(),
        ' всё, что сделано до сих пор, не было напрасным. Дальше, лишь бы мы не останавливались —',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Постойте, что это за дурное предчувствие? Эй, вы же не думаете о чём-то странном?',
      );
      await era.printAndWait([
        'Вместе с внезапной прохладой за спиной невесть откуда, тоже смутно почувствовав, что дело плохо, ',
        you.get_colored_name(),
        ' и поспешно сменил(а) тему.',
      ]);

      era.printButton('「Кстати, почему Урару так тянет к Arima Kinen?」', 1);
      await era.input();

      await era.printAndWait([
        'Вместе с подопечной глядя на повтор скачки на огромном уличном экране, ',
        you.get_colored_name(),
        ' тихо спрашивает вновь заворожённую этим ',
        urara.get_colored_name(),
        ' .',
      ]);
      await era.printAndWait([
        'Несомненно, на нём как раз крутят вчерашний 「',
        arim_kin,
        ' 」.',
      ]);
      await era.printAndWait([
        'Это скачка, на которую ',
        urara.get_colored_name(),
        ' сама попросила вместе с ',
        you.get_colored_name(),
        ' отправиться смотреть на месте, и та, на которой ',
        urara.get_colored_name(),
        ' перед всеми оставила 「заявление об участии」.',
      ]);
      await era.printAndWait([
        'Только вот на ',
        you.get_colored_name(),
        ' — вопрос, ',
        urara.get_colored_name(),
        ' не отвела взгляд, а заговорила 「не по теме」.',
      ]);
      await urara.say_and_wait([
        'М-м— ',
        callname,
        ' с самой первой встречи с Урарой всегда так легко копишь напряжение!',
      ]);
      await urara.say_and_wait([
        'Но некоторые вещи под силу только ',
        callname,
        ' , да? Я и все остальные нуждаемся в ',
        callname,
        ', и это не изменится!',
      ]);
      await urara.say_and_wait([
        'Я уже сделала свой выбор, так что ',
        callname,
        ' тоже взбодрись, ладно?',
      ]);

      era.printButton(
        '「Так это потому, что решила? Урара идёт на Arima?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Уже решила! Я буду участвовать в ',
        arim_kin,
        '!',
      ]);
      await urara.say_and_wait(
        'Потому что все в Трейсен сказали, что можно через голосование, так что если постараться — у меня тоже получится!',
      );
      await urara.say_and_wait([
        'И ещё я хочу узнать: все с торговой улицы, люди, что поддерживают Урару, и ',
        callname,
        '……',
      ]);
      await urara.say_and_wait(
        'Чтобы оправдать надежды всех, хочу узнать, как высоко сама смогу взлететь —',
      );
      await era.printAndWait([
        'С ',
        urara.get_colored_name(),
        ' — немигающего профиля, ',
        you.get_colored_name(),
        ' увидел(а): пусть ',
        urara.sex,
        ' ещё юна лицом, на нём — небывалая острота.',
      ]);
      await era.printAndWait([
        'То был облик тех, кто стоит на скаковом поле и готовится вырваться из стартовой кассеты, — под стать 「бывалой скаковой ',
        urara.uma_sex_title,
        ' 」.',
      ]);
      await era.printAndWait([
        'Сейчас, пожалуй, многие сомневаются, ',
        urara.get_colored_name(),
        ' не блажь ли это, но сейчас ',
        you.get_colored_name(),
        ' уже подтвердил(а), что ',
        urara.sex,
        ' никак не могла вспыхнуть по капризу.',
      ]);
      await era.printAndWait([
        'Кажется, больше слов не нужно. ',
        you.get_colored_name(),
        ' снова обращает взгляд к тем, кто сверкает в скачке на экране.',
      ]);

      era.printButton(
        '「Эта дорога будет тяжёлой, и радости, может, будет немного. Готова?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Ага! Сейчас я, пожалуй, самый смелый человек на свете!',
      );
      await era.printAndWait([
        'Даже без взгляда глаза в глаза решимость подопечной без остатка дошла до ',
        you.get_colored_name(),
        ' — сердца.',
      ]);
      await era.printAndWait([
        'Может, сейчас ',
        urara.get_colored_name(),
        ' до сверкающих всех — всего лишь тонкий экран.',
      ]);
      await era.printAndWait(
        'С позиции тренера суметь выбрать целевую скачку — это радость, даже если цель почти недостижима.',
      );
      await era.printAndWait([
        'И к тому же ',
        urara.get_colored_name(),
        ' наконец нашла цель, которой сама хочет бросить вызов, и раз ',
        urara.sex,
        ' так решила — значит, ',
        urara.sex,
        ' должна получить самую серьёзную поддержку.',
      ]);
      await era.printAndWait([
        'Верить, что ',
        urara.get_colored_name(),
        ' , вложившись до конца, принесёт чудо? Тоже хорошо, ведь при первой встрече ',
        urara.sex,
        ' уже…',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Да, в конце концов, что бы ни случилось, вы всё равно будете верить в Урару, не так ли?',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Даже если ',
        urara.sex,
        ' не так сильна, как вы себе представляете, — всё равно.',
      ]);
      await era.printAndWait([
        'Похожий и непохожий на ',
        urara.get_colored_name(),
        ' голос раздался — и в то же мгновение всё вокруг застыло, словно нажали паузу.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' думал(а), что испугается, но и тело, и дух остались спокойны, будто давно ко всему привыкли.',
      ]);
      await era.printAndWait([
        'Словно в смутном сне, что уже снился бессчётное число раз, ',
        you.get_colored_name(),
        ' медленно поворачивает шею и встречается взглядом с 「',
        inner_urara.get_colored_actual_name(),
        ' 」.',
      ]);
      await era.printAndWait(
        'Редкие прохожие вокруг застыли вместе с воздухом, но слегка искажённые тени скачки на экране всё ещё продолжают состязание, чей исход уже известен.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Словно так суждено, правда? Вот хотя бы вы и я — встречаемся не в первый раз, просто вы не помните.',
      );
      await era.printAndWait([
        'На том же лице — улыбка, схожая с ',
        urara.get_colored_name(),
        ' по нраву, но зрелая и отчуждённая, ',
        urara.sex,
        ', не меняя позы, продолжает разговор с ',
        you.get_colored_name(),
        ' .',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Раз вы и ',
        urara.sex,
        ' желаете этого, я продолжу вести запись. А до того позвольте поговорить с вами?',
      ]);
      await era.printAndWait([
        'Не дожидаясь ',
        you.get_colored_name(),
        ' — ответа, или снова, как ',
        urara.get_colored_name(),
        ' , уловила ',
        you.get_colored_name(),
        ' — молчаливое согласие, ',
        urara.sex,
        ' как сторонний рассказчик заводит 「историю」.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вы любите слушать истории? Это история одной столь ничтожной, что ничтожнее уже некуда… ',
        urara.uma_sex_title,
        ' — история—',
      ]);
      era.drawLine();
      await inner_urara.print_and_wait([
        'Когда-то — может, и не так уж давно — одна своенравная, заурядная маленькая ',
        inner_urara.uma_sex_title,
        ' совершенно буднично родилась на каком-то пастбище.',
      ]);
      await inner_urara.print_and_wait([
        'Но именно такой хлопотной и заурядной ',
        inner_urara.child_sex_title,
        ', однако те, кто с самого начала любил ',
        inner_urara.sex,
        ', даровали благословенное милое имя.',
      ]);
      await inner_urara.print_and_wait([
        'А ',
        inner_urara.sex,
        ' — жизнь, подобно этому милому имени, после случайной удачи была обласкана эпохой и тремя богинями.',
      ]);
      await inner_urara.print_and_wait([
        'Хотя за дни бега ни разу не выиграла ни одной скачки, ',
        inner_urara.sex,
        ' всё же снова и снова получала жалость и заботу всех.',
      ]);
      await inner_urara.print_and_wait([
        'Поэтому ',
        inner_urara.sex,
        ' ненавидела бег, ненавидела людей, чьи надежды ',
        inner_urara.sex,
        ' несла на себе, ненавидела сородичей, что так запросто ставили на кон жизнь, — всех одинаково.',
      ]);
      await inner_urara.print_and_wait([
        'Но даже такая трусливая и странная ',
        inner_urara.sex,
        ', всё равно на разгрязнённой собой дороге подняла две последние оставшиеся 「маленькие радости」.',
      ]);
      await inner_urara.print_and_wait(
        'Одна — покой, собранный из любви всех, где чего-то везде не хватает, но всё же можно укрыться; а другая — маленькая шутка трёх богинь.',
      );
      await inner_urara.print_and_wait([
        'И вот посреди пути благословенная 「',
        inner_urara.sex,
        ' 」 и столь же любимая другими 「',
        urara.sex,
        ' 」 сели в один и тот же поезд,',
      ]);
      await inner_urara.print_and_wait([
        'Идущая по благословенной дороге, на деле не способная ни на что 「',
        inner_urara.sex,
        ' 」 и слабая, но желающая стать надеждой 「',
        urara.sex,
        ' 」 встретились.',
      ]);
      await inner_urara.print_and_wait(
        'В том счастливом, словно сон, совместном пути двое, кто должны были быть разными, постепенно стали похожи друг на друга.',
      );
      await inner_urara.print_and_wait([
        inner_urara.sex,
        'Без разбора гнушалась той слишком яркой надеждой, но тот луч солнца осветил в своенравной ',
        inner_urara.sex,
        ' самый мягкий клочок травы в сердце.',
      ]);
      await inner_urara.print_and_wait([
        'Если бы ',
        urara.sex,
        ' могла так и расти в радости, если бы ',
        urara.sex,
        ' смогла обрести ',
        urara.sex,
        ' — желанную маленькую радость…',
      ]);
      await inner_urara.print_and_wait([
        'Но где же столь малой и всё же упрямо выбравшей бег вишнёво-розовой искать 「улыбки всех」, которых нет даже у неё самой?',
      ]);
      await inner_urara.print_and_wait([
        'И всё же ',
        inner_urara.sex,
        ' нашла, нашла того, кто даст маленькой ',
        urara.uma_sex_title,
        ' обрести счастье и вместе дописать целую историю 「тренера」.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Когда голос стих, глядя на слушающего ',
        you.get_colored_name(),
        ', прижимаясь к ',
        you.get_colored_name(),
        ' — ',
        inner_urara.teen_sex_title,
        ' холодные щёки постепенно наливаются вязким румянцем.',
      ]);
      await era.printAndWait([
        'В касании кожи, начавшемся неизвестно когда, поднявшись на цыпочки, ',
        inner_urara.teen_sex_title,
        ' сложила мягкие влажные вишнёвые губы на ',
        you.get_colored_name(),
        ' — губы и зубы.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'А что до того, что 『',
        urara.sex,
        '』 чувствует к 『вам』, пожалуйста, почувствуйте сами…',
      ]);
      await era.printAndWait([
        'Тёплая мягкость, сплетаясь с липким влажным звуком, впитывается вместе; на ',
        urara.get_colored_name(),
        '  похожая маленькая ',
        inner_urara.uma_sex_title,
        ' как раз пользуется ',
        inner_urara.sex,
        ' — выражением лица требует у ',
        you.get_colored_name(),
        '  вымогает.',
      ]);
      await era.printAndWait([
        'Нельзя, чтобы ',
        urara.sex,
        ' такое делала, нет времени, скорее оттолкни её — ведь ',
        urara.sex,
        ', ',
        urara.sex,
        ' — не ',
        urara.get_colored_name(),
        ', и нельзя, чтобы ',
        urara.sex,
        ' делала такое с тобой…',
      ]);
      await era.printAndWait(
        'Но даже если сознание изо всех сил держится за ясность, тело полностью соскальзывает в объятия с другой стороны.',
      );
      await era.printAndWait([
        'К чувствам это не имеет отношения, и колебаться не нужно, ',
        urara.sex,
        ' — от тела веет запахом самой важной подопечной, 「',
        urara.get_colored_name(),
        ' 」 уже здесь…',
      ]);
      await era.printAndWait([
        'Затем в этом ',
        urara.sex,
        ' — инициированном и ведомом дурманящем поцелуе ',
        urara.teen_sex_title,
        ' сильно прикусила оседающие губы другой стороны.',
      ]);
      await era.printAndWait(
        'Хотя ощущение боли глушат возбуждённые нервы, кроваво-сладкий запах всё же постепенно растекается во ртах обеих.',
      );
      await era.printAndWait([
        'Прищурившись, всасывает смешанное с кровью вожделение, и утонувшая в этом ',
        urara.sex,
        ' всё ещё без конца насилует ',
        you.get_colored_name(),
        ' — тело и дух.',
      ]);
      await era.printAndWait(
        'Что же заключено в этом поцелуе, из которого не вырваться: тяжёлое вожделение, примешанная благодарность или искажённое отвращение — или все три сразу?',
      );
      await era.printAndWait([
        'Единственное, что можно подтвердить: избравшая 「вас」 「',
        urara.sex,
        ' 」 жаждет ',
        you.get_colored_name(),
        ' — всего, от плоти до души…',
      ]);
      await era.printAndWait([
        'Медленно закончив глубокий поцелуй, словно в отместку, чистый хищник ',
        urara.teen_sex_title,
        ' не в силах остановиться, слизывает серебряную нить, всё ещё тянущуюся у губ.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вот так. Вы поняли? Хотя не понять — тоже ничего, ведь впереди у вас ещё больше времени, пока ',
        urara.sex,
        ' рядом…',
      ]);
      await era.printAndWait([
        'Легко выскользнув из ',
        you.get_colored_name(),
        ' — объятий, а та, что перед глазами, ',
        urara.sex,
        ' убрала жар из взгляда, вернув ту отстранённую холодность к внешнему.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Тогда напоследок ещё чуть-чуть поговорим о нынешних делах Урары.',
      );
      if (fans < 25000) {
        await inner_urara.say_as_unknown_and_wait([
          'Для нынешней Урары, если она хочет участвовать в ',
          arim_kin,
          '  нужно сначала накопить показатели поддержки в скачках с градацией.',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'У вас, конечно, есть решимость сопровождать Урару к победе, но есть ли у Урары решимость выдержать давление, прежде чем выйти на скачки?',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          'Вы тогда услышали мою просьбу. Вы очень надёжный человек, поэтому Урара и полагается на вас всегда.',
        );
        await inner_urara.say_as_unknown_and_wait([
          'Поэтому ',
          urara.sex,
          ' хочет участвовать в ',
          arim_kin,
          ' — дело, я с самого начала не должна была рассчитывать, что вы остановите ',
          urara.sex,
          '.',
        ]);
      }

      await inner_urara.say_as_unknown_and_wait(
        'Если в следующий раз Урара пострадает, я возьму власть дописывать историю в свои руки.',
      );
      await era.printAndWait([
        'После короткой паузы, словно сама собой внезапно возникнув, прямо перед глазами「',
        inner_urara.get_colored_actual_name(),
        ' 」 снова сама по себе разворачивается и уходит.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Хватило бы просто принимать тёплое сияние, но крошечные двое непременно берутся за руки и гонятся за солнцем.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Тогда позвольте и мне увидеть, пока крылья из воска не растают, ',
        urara.sex,
        ' и вы — насколько близко сможете подойти к солнцу—',
      ]);
      await era.printAndWait(
        'Когда угроза спала, серо-белое зрение снова окрасилось, и холодный ветер, вновь пришедший в движение, снова влился в спешащую толпу.',
      );
      era.printButton(
        '「Подожди! Хватит говорить загадками! Что это вообще такое? Кто ты…」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'Почувствовав, что тело наконец снова слушается, ',
        you.get_colored_name(),
        '  оборачивается, чтобы спросить ещё, но видит лишь улыбку, тонкую, как дымка.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Подумайте ещё внимательнее, тренер ',
        you.adult_sex_title,
        ' (вы), моё имя — неужели вы не догадаетесь?',
      ]);
      await era.printAndWait([
        'Оставив последнюю многозначительную фразу, осевшая на ',
        urara.get_colored_name(),
        '  — лице дымка растворилась в воздухе, словно никогда не существовала.',
      ]);
      await era.printAndWait([
        'А оставшаяся рядом с ',
        you.get_colored_name(),
        '  по-прежнему та, что всё ещё возбуждённо болтает со своим тренером о будущем「',
        urara.get_colored_actual_name(),
        ' 」.',
      ]);
      await era.printAndWait('Ну и ну, среди бела дня призрак, о три богини—');
      await era.printAndWait([
        'Но, может, как ',
        urara.sex,
        ' и говорила, нынешняя ',
        urara.get_colored_name(),
        '  возможно, ещё не хватает готовности к будущему, но разве не в этом смысл собственного существования?',
      ]);
      await era.printAndWait([
        'Сжав окоченевшие от ветра пальцы, ',
        you.get_colored_name(),
        '  снова переводит внимание на ',
        urara.get_colored_name(),
        '  — улыбающееся лицо.',
      ]);
      await urara.say_and_wait(
        '…И ещё, на самом деле, когда я в самом начале увидела такие скачки, у меня в груди как будто особенно сильно колотилось!',
      );
      await urara.say_and_wait([
        'хе-хе~ Но эту фразу ',
        call_30,
        '  запретила разносить со словами『прозвучит как первая любовь — люди неправильно поймут』.',
      ]);
      await urara.say_and_wait([
        'Но даже так я считаю, что должна сказать ',
        callname,
        '  это! Всё-таки когда Урара в первый раз увидела тренировку, в груди тоже сильно колотилось…',
      ]);
      await era.printAndWait(
        '…Что-то в этом звучит не так, но это не главное — ладно.',
      );
      await era.printAndWait(
        'Впрочем, и правда, как「та ',
        urara.sex,
        '」 говорила, сейчас даже если ',
        you.get_colored_name(),
        '  остановится, ',
        urara.get_colored_name(),
        '  всё равно выберет эти скачки…',
      );
      await era.printAndWait([
        'Стоп, точно, ещё「та ',
        urara.sex,
        ' 」 дело, но как об этом сказать ',
        urara.get_colored_name(),
        '?',
      ]);

      era.printButton(
        '「А, точно, Урара, я только что вроде, мм… встретил(а)…」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Но пока ',
        you.get_colored_name(),
        '  ещё думает, как рассказать ',
        urara.get_colored_name(),
        '  о только что пережитом, похожем на галлюцинацию, как вдруг слышит, как маленькая ',
        urara.uma_sex_title,
        ' вскрикивает.',
      ]);
      await urara.say_and_wait([
        'А, ',
        callname,
        '! у тебя на губах! Где это стёрлось?',
      ]);
      await era.printAndWait([
        'Услышав ',
        urara.get_colored_name(),
        '  — слегка паническое предупреждение, ',
        you.get_colored_name(),
        '  только тогда от запоздалой вспышки боли рефлекторно прижимает пальцы к губам.',
      ]);
      await era.printAndWait(
        'Это… кровь? Глядя на каплю застывшей красноты, снятую с раны, тот болезненный поцелуй из полусна наконец проясняется в голове.',
      );
      await era.printAndWait([
        'Под ',
        urara.get_colored_name(),
        '  — встревоженным и недоумённым взглядом, ',
        you.get_colored_name(),
        '  ненадолго замолкает — похоже,「',
        inner_urara.sex,
        ' 」 и правда приходила…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async we_47_48_or_else(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      'Прошу, запомните моё последнее, тренер ',
      you.adult_sex_title,
      ' (вы)',
    ]);
  },
  oc_95_1: (() => {
    const title = 'Новогоднее посещение храма';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait(
        'Нм! Хотя сказать особенно нечего, но с благополучным вступлением вместе с Урарой в выпускной год — поздравляю, да?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '…Что такое? Что ощущение изменилось — всего лишь ваша иллюзия, я ничуть не изменилась?',
      );
      era.drawLine();
      await era.printAndWait([
        'Стоя в новогодней шумной толпе, ',
        you.get_colored_name(),
        '  ждёт у подножия длинной лестницы храма товарища, с которым договорились вместе помолиться.',
      ]);
      await era.printAndWait([
        'Сегодняшняя ',
        urara.get_colored_name(),
        '  на редкость опоздала: хотя с назначенного времени прошло лишь несколько минут, но обычная, всё ещё игривая ',
        urara.sex,
        ' обыкновенно успевает прийти ещё раньше.',
      ]);
      await era.printAndWait([
        'Не застряла ли в новогоднем потоке людей? Хотя не то чтобы тревожусь, что ',
        urara.uma_sex_title,
        ' зажмут в толпе, а вот если ',
        urara.get_colored_name(),
        '  не найдёт дорогу…',
      ]);
      await era.printAndWait([
        'Но как раз когда ',
        you.get_colored_name(),
        '  собирается повернуть назад искать подопечную, как тут же неподалёку слышит ',
        urara.teen_sex_title,
        ' — знакомый звонкий зов.',
      ]);
      await urara.say_and_wait([callname, '! я здесь! Урара здесь!']);
      await era.printAndWait([
        'Пока ',
        you.get_colored_name(),
        '  оборачивается искать, порыв красно-белого вишнёвого весеннего ветра, опережая потепление, врывается в ',
        you.get_colored_name(),
        '  — объятия.',
      ]);
      await era.printAndWait([
        'Опустив взгляд: в праздничном наряде красного и розового ',
        urara.get_colored_name(),
        '  смотрит на ',
        you.get_colored_name(),
        '  и счастливо улыбается, а глаза, в которых распускается сакура, сверкают.',
      ]);

      urara.say([
        'хе-хе~ Все говорили, что лучше поофициальнее, так что сегодня готовилась чуть долго! ',
        callname,
        '  как тебе?',
      ]);
      era.printButton(
        '「Мм, Урара сегодня очень красивая!」(расположение+20)',
        1,
      );
      era.printButton('「Ну, Урара снова меня очаровала!」(влюблённость+5)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await urara.say_and_wait([
          'Хе-хе~ правда? Я так долго приводила себя в порядок с помощью всех! ',
          callname,
          '  тоже рад(а) — как же хорошо!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '  радостно кружится перед тобой, показывая себя, а широкие рукава и длинная юбка трепещут вслед, словно крылья птички.',
        ]);
        await urara.say_and_wait([
          'Но это же «красивая», а не «милая»… неужели ',
          callname,
          '  наконец решил(а), что Урара стала как взрослая?',
        ]);

        era.printButton(
          '「Неверно? Дело вовсе не в том, что стала как взрослая: Урара во все времена куда красивее любых 『взрослых』.」',
          1,
        );
        await era.input();
      } else {
        await urara.say_and_wait(
          'Правда же! Я так долго приводила себя в порядок с помощью всех… э? Э-э—',
        );
        await era.printAndWait([
          'Услышав неожиданный ответ, ',
          urara.get_colored_name(),
          '  сначала замирает, а затем поспешно широкими рукавами парадного наряда закрывает зардевшиеся щёки.',
        ]);
        await urara.say_and_wait([
          callname.substring(0, 1),
          ', ',
          callname,
          '  не говори больше того, чего Урара не понимает… хотя очень радостно! Но Урара уже не ребёнок…',
        ]);

        era.printButton(
          '「Прости, я впредь буду осторожнее, но я вовсе не шутил(а) с Урарой, ясно?」',
          1,
        );
        await era.input();
      }
      await era.printAndWait([
        'Затем, взяв ',
        urara.get_colored_name(),
        '  — ставшую застенчивой маленькую руку, ',
        you.get_colored_name(),
        '  вместе с подопечной ступает на длинную лестницу к святилищу помолиться.',
      ]);
      await era.printAndWait([
        'Но по мере подъёма ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        '  оба замечают перемены вокруг — не говоря о прочем, лестница святилища… неужели она такая длинная?',
      ]);
      await era.printAndWait(
        'Что лестница святилища высока — известно всем, но по обычным впечатлениям она, кажется, ещё не доходила до того, чтобы ни начала, ни конца не разглядеть с одного взгляда.',
      );
      await era.printAndWait(
        'И с какого-то момента вокруг постепенно исчезли прежде шумные паломники, а лес стал всё гуще и гуще.',
      );
      await era.printAndWait(
        'На некоторых деревьях даже рано повисли молодые листья — совсем не то зрелище, какого ждать в сезон, когда холодный ветер ещё не стих.',
      );
      await era.printAndWait(
        'Хотя при повседневных молитвах диковины тоже случаются, сегодняшние перемены уж слишком явные.',
      );
      await era.printAndWait(
        'Можно сказать наверняка: эти перемены не из злобы — они даже стёрли усталость, которую двое должны были чувствовать при подъёме.',
      );
      await era.printAndWait([
        'Но даже так этот склон стал уже слишком длинным. Глядя вверх на прямую дорогу впереди, высокую до скуки, ',
        you.get_colored_name(),
        '  глубоко вздыхает.',
      ]);
      await era.printAndWait(
        'Развернуться сейчас? Но даже назад, боишься, ступени тоже без конца… что же делать…',
      );
      await era.printAndWait([
        'Но как раз когда ',
        you.get_colored_name(),
        '  мучается, что делать дальше, стоящая рядом ',
        urara.get_colored_name(),
        '  сама заговаривает с ',
        you.get_colored_name(),
        ' — неожиданной темой.',
      ]);
      await urara.say_and_wait([
        callname,
        ', на самом деле Урара знает, да? Такой, какой Урара была сначала, самой до Трейсена не добраться.',
      ]);
      await era.printAndWait([
        'Словно этот внезапный выпад ударил в затылок, ',
        you.get_colored_name(),
        '  едва не оступается и не скатывается с лестницы.',
      ]);
      await era.printAndWait([
        'Когда ',
        urara.get_colored_name(),
        '  только открыла рот, ',
        you.get_colored_name(),
        '  думает о маленькой ',
        urara.uma_sex_title,
        ' — десяти тысячах манер заговорить, но никак не ожидает, что тема окажется такой серьёзной и тяжёлой.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '  напряжённо смотрит на ',
        urara.get_colored_name(),
        ', но сейчас ',
        urara.sex,
        ' тихо смотрит ещё выше, чем край взгляда.',
      ]);
      await urara.say_and_wait(
        'Мама раньше говорила: лестницу святилища строят такой высокой, чтобы быть ближе к богам!',
      );
      await urara.say_and_wait(
        'Боги и правда живут высоко-высоко, но мама ещё говорила: когда идёшь в гости, лучше приготовить гостинец, чтоб показать своё сердце.',
      );
      await era.printAndWait([
        'Опустив взгляд с высоты на того, кто рядом, послушно держа взрослую руку, ',
        urara.get_colored_name(),
        '  с тихой милой улыбкой обращается к ',
        you.get_colored_name(),
        ' с приглашением.',
      ]);
      await urara.say_and_wait([
        'Урара вроде говорит поздновато, но ',
        callname,
        '  послушаешь сейчас, как Урара расскажет про прежнее?',
      ]);
      await era.printAndWait([
        'Встретившись с ',
        urara.get_colored_name(),
        ' — задумчивым взглядом и прочтя в нём что-то, ',
        you.get_colored_name(),
        '  тоже тихо кивает.',
      ]);
      era.drawLine();
      await urara.print_and_wait([
        'Невидимый друг, ',
        callname,
        '  знаешь? Верно: все говорят, такого друга встречают только одинокие дети.',
      ]);
      await urara.print_and_wait(
        'Чудно, да? И хотя все твердят, будто невидимый друг — лишь фантазия, Урара думает: может, это не так.',
      );
      await urara.print_and_wait(
        'Ага! Друзей у Урары всегда было много, но и невидимый друг у Урары тоже есть, да? Вылитая Урара!',
      );
      await urara.print_and_wait([
        'Но не так, как все говорят про всегда добрых друзей: ',
        urara.sex,
        ' всегда носит печальное лицо и только смотрит на Урару издалека.',
      ]);
      await urara.print_and_wait([
        'Нельзя же, чтобы ',
        urara.sex,
        ' так и оставалась без присмотра, и, так подумав, Урара сама пошла посмотреть, как ',
        urara.sex,
        ' там, да ещё водила её всюду — где только ',
        urara.sex,
        ' не побывала.',
      ]);
      await urara.print_and_wait([
        'С тех пор мы стали неразлучными друзьями, хотя ',
        urara.sex,
        ' всё ещё часто бывала невесела, но понемногу стала чаще улыбаться.',
      ]);
      await urara.print_and_wait([
        'Пока однажды друг вдруг не сказал Ураре: какое у Урары желание? Только скажи, ',
        urara.sex,
        ' всеми силами поможет Ураре исполнить.',
      ]);
      await urara.print_and_wait([
        'Поэтому Урара сказала другу: хочу, чтобы всегда такая печальная ',
        urara.sex,
        ', однажды тоже обрела счастье, где уже не будет грусти!',
      ]);
      await urara.print_and_wait(
        'Но друг, услышав ответ Урары, стал ещё мрачнее, чем прежде…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Прости, одно это желание я сама исполнить не могу: ведь моё счастье — чтобы Урара была счастлива…',
      );
      await urara.say_and_wait(
        'Н-ну… тогда давай попробуем сделать Урару ещё счастливее! Тогда и ты сможешь порадоваться, да?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Какое же счастье хочет Урара? Чтобы любили? Или спокойную жизнь? Или…',
      );
      await urara.say_and_wait(
        'Все смеются, когда видят, как я бегу, так что хочу, чтобы все видели надежду и улыбались от радости!',
      );
      await urara.print_and_wait([
        'В итоге друг очень испугался, услышав желание Урары, но ',
        urara.sex,
        ' всё равно приняла желание Урары.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Поняла. Времени ещё много: я найду тех, кто поможет, чтобы Урара смогла написать 『нашу историю』.',
      );
      await urara.print_and_wait(
        'А после того — как Урара стала чуть старше, мама вдруг отправила меня учиться в Трейсен.',
      );
      await urara.print_and_wait([
        'А дальше… эх-хе-хе~ Урара на Тренировочном поле повстречала упавш(его/ую) ',
        callname,
        ' же!',
      ]);
      await urara.print_and_wait(
        'Но-но! Когда Урара пришла в Трейсен, хоть всё время не выигрывала, сразу поняла очень многое!',
      );
      await urara.print_and_wait(
        'Когда мама отправила Урару в Трейсен, как раз была весна, так что Урара поняла: она, должно быть, удачливая.',
      );
      await urara.print_and_wait(
        'Потому что Ураре повезло, она может приходить вслед за весной; потому что все считают весну прекрасной, весна всегда дарит всем улыбки.',
      );
      await urara.print_and_wait(
        'Так что то, из-за чего Урара мучилась — фантазия ли невидимый друг, и в одном ли они мире с Урарой, — на самом деле неважно!',
      );
      await urara.print_and_wait(
        'Ведь если дать всем надежду, в которую можно верить, всё должно обрести смысл, и все смогут улыбаться.',
      );
      await urara.print_and_wait([
        'Так что, как ',
        callname,
        ' видел(а): Урара в конце всё-таки выбрала бег, чтобы сдержать обещание другу!',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Улыбкой маленькая ',
        urara.uma_sex_title,
        ' всё завершилось, и незаметно ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        ' наконец взобрались на вершину лестницы, что была куда длиннее обычного.',
      ]);
      await era.printAndWait([
        'Вот оно что: вот каковы у ',
        urara.get_colored_name(),
        ' и «',
        urara.sex,
        ' » отношения, ',
        urara.get_colored_name(),
        ' многое, верно, опустила, но в целом уже ясно.',
      ]);
      await era.printAndWait([
        'Вот только даже согласившись помочь ',
        urara.get_colored_name(),
        ' исполнить желание, ',
        urara.sex,
        ' всё равно навязывает своё определение счастья. Ну и родители — какая жажда контроля.',
      ]);
      await era.printAndWait([
        'Пройдя сквозь алые тории, ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        ' вошли во двор святилища, который в разгар сезона был пуст, но жутким от этого не казался.',
      ]);

      era.printButton(
        '「Хоть снова поднимать это уже и ворчливо… Урара считает, что попала в Центральный Трейсен благодаря тому 『невидимому другу』?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Это, наверное, мама что-то сделала? Соседи говорили, что мама в молодости была крутой скаковой умамусумэ Централа.',
      );
      await urara.say_and_wait(
        'И перед тем как отвести меня в Трейсен, мама только что вернулась из Централа, да ещё Урара тогда даже вступительный тест не сдавала…',
      );
      await era.printAndWait(
        'Ого, ответила без малейших колебаний, да ещё и ответ такой неожиданно жутковатый…',
      );
      await urara.say_and_wait(
        'Но и не совсем так, потому что мама — единственная, кто считал, что невидимый друг Урары существует.',
      );
      await urara.say_and_wait([
        'Так что, может, мама тоже видела друга Урары и — ',
        urara.sex,
        ' болтала тоже, кто знает!',
      ]);
      await era.printAndWait([
        'Вместе с ',
        you.get_colored_name(),
        ' бросив монетки в ящик для подношений и звякнув колокольчиком на верёвке, ',
        urara.get_colored_name(),
        ' продолжила улыбаться и тихо сказала.',
      ]);
      await urara.say_and_wait([
        'Но ',
        callname,
        ' иногда… и правда ворчлив(а)!',
      ]);

      era.printButton('「Урара?!」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' чуть не поскальзывается, отступив на шаг, но перед богами и подопечной всё же не срамится.',
      ]);
      await era.printAndWait([
        'Чёрт, как это даже ',
        urara.get_colored_name(),
        ' так думает? И что плохого, если ',
        you.phy_sex_title,
        ' немного ворчит — что в этом плохого!',
      ]);
      await urara.say_and_wait([
        'Хе-хе~ пора писать желания! ',
        callname,
        ' всё в порядке?',
      ]);

      era.printButton('「Н-нет проблем, ведь тренер Урары уже взрослый…」', 1);
      await era.input();

      await era.printAndWait([
        'Хоть как-то удержав образ взрослого, ',
        you.get_colored_name(),
        ' берёт у ',
        urara.get_colored_name(),
        ' протянутую другую ручку.',
      ]);
      urara.say(['Так, ', callname, ' какое желание хочешь загадать?']);
      era.printButton(
        '「В общем, пожелать всем вокруг здоровья?」(выносливость +30)',
        1,
      );
      era.printButton(
        '「Успехов в делах… в общем, что-то такое?」(все параметры +5)',
        2,
      );
      era.printButton(
        '「Пусть в новом году легко преодолеваются трудности?」(очки навыков +35)',
        3,
      );
      ret.push(await era.input());
      await era.printAndWait([
        'Быстро дописав задуманное с самого начала и отложив ручку, ',
        you.get_colored_name(),
        ' поворачивается к всё ещё сосредоточенно пишущей желание ',
        urara.get_colored_name(),
        '.',
      ]);

      era.printButton('「Какое желание загадывает Урара?»', 1);
      await era.input();

      urara.say(
        'Ага! У меня много чего хочется загадать, но если выбрать одно, то всё-таки——',
      );
      era.printButton(
        'Подальше дистанцию(пригодность к средней и длинной↑)',
        1,
      );
      era.printButton('Попробовать траву(пригодность к траве↑)', 2);
      ret.push(await era.input());
      if (ret[2] === 1) {
        await urara.say_and_wait(
          'Потому что дистанция Arima Kinen длинная, так что 『хочу бегать ещё дальше』!',
        );
      } else {
        await urara.say_and_wait(
          'Потому что Arima Kinen — трава, так что 『хочу на траве бегать быстрее』!',
        );
      }
      await era.printAndWait([
        'Наблюдая, как ',
        urara.get_colored_name(),
        ' черта за чертой выводит неожиданное желание, ',
        you.get_colored_name(),
        ' и теплеет на душе, и вместе с тем чувствует сложную смесь.',
      ]);

      era.printButton(
        '「…Неожиданно серьёзно. Это потому, что цель поставлена и появился задор?»',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Точно! Но ',
        callname,
        ' ведь не потащит меня тренироваться сразу, как сегодня вернёмся?',
      ]);
      await era.printAndWait([
        'Услышав ',
        urara.get_colored_name(),
        ' — прямой намёк, уже развесив желания обоих, ',
        you.get_colored_name(),
        ' оборачивается с хитрой улыбкой взрослого на шалости.',
      ]);

      era.printButton(
        '「Вообще-то нет, но раз Урара такая рьяная… лестница сейчас стала куда длиннее, да?»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Как бы не так: даже если бы ',
        urara.get_colored_name(),
        ' не была такой рьяной, тренировка на рельефе всё равно началась бы сама собой, верно?',
      ]);
      await urara.say_and_wait([
        'Э-э— не начинай прямо сейчас, ',
        callname,
        '! Не пользуйся так добротой богов!',
      ]);
      await urara.say_and_wait(
        'Даже если к лоткам под святилищем уже не поиграть, ну дай Ураре ещё побродить по святилищу——',
      );
      await era.printAndWait([
        'Канючить тоже нельзя! Потому что ',
        urara.get_colored_name(),
        ' — хорошая девочка, а хорошим детям канючить бесполезно!',
      ]);

      era.printButton(
        '「Ладно! Тогда, чтобы исполнить желание Урары поиграть у лотков, побежали! Смотри под ноги, ладно?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Как так! Боги рассердятся! Я же ещё хотела вместе поесть моти и печенье——',
      );
      await era.printAndWait([
        'Хоть и говорила со слезами на глазах, ',
        urara.get_colored_name(),
        ' и всё же, утерев уголок глаза, чуть обиженно последовала за ',
        you.get_colored_name(),
        ' — шагом того, кто первым спрыгнул со ступеней.',
      ]);
      await era.printAndWait([
        'Это не так, знаешь? Ведь это ради ',
        urara.get_colored_name(),
        ' — будущего первого места, так что даже боги закрыли бы на это глаза.',
      ]);
      await era.printAndWait([
        'А тогда, если только не бросать путь вперёд, желание обязательно сбудется, и полная надежды ',
        urara.sex,
        ' тоже с многообещающим будущим, верно?',
      ]);
      await era.printAndWait([
        'глядя назад на красно-розовую вишнёвую масть, что вот-вот пронесётся мимо того, кто впереди, ',
        you.get_colored_name(),
        ' улыбка на лице тоже постепенно сменяется умиротворённой.',
      ]);
      await era.printAndWait(
        'Ещё на шаг ближе в любом смысле — новогоднее посещение святилища, разве не прекрасно?',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Урара наговорила вам много странного, но в прошлый раз я тоже хватила почти так же через край, так что я вас прощаю!',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Как, не попробовать иногда говорить в манере 『Урары』? Э, не похоже? Н-н… вы такой человек…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Мм? Моё отношение изменилось? Вовсе нет, я же говорила — вам показалось—',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Кхм, простите, редко же Новый год, я тоже немного перевозбудилась.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Только вот, 『сильная жажда контроля』, вы разве не такой же? По-ураровски — лишь бы было весело, разве нет?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'И ещё: насчёт святилища — это тоже не я делала, ясно?',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_negi_sta: (() => {
    const title = 'Навстречу Negishi Stakes!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} joined_g3 是否参与过重赏
     * @param {number|false} arim_kin_rank_c 经典年有马纪念的名次，false 为未参加过有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} negi_sta 根岸锦标（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      joined_g3,
      arim_kin_rank_c,
      arim_kin,
      negi_sta,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'Хотя что задора нет — понять можно, но…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Ладно, лишь бы не спустя рукава.',
      );
      era.drawLine();

      era.printButton('「Урара, готова? Сегодняшние скачки.」', 1);
      await era.input();

      await urara.say_and_wait([
        'Хорошо—! Только ',
        callname,
        ', сегодняшние — стейкс?',
      ]);

      era.printButton(
        '「Сегодня стейкс, да? Только не поддавайся атмосфере остальных, ладно?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Мм! Что-то кажется, в этот раз ',
        callname,
        ' — выбранные скачки чем как раньше, а чем другие?',
      ]);
      await urara.say_and_wait(
        'А вот ат-мо-сфе-ра…? Это слово Урара в этот раз не перепутала! Хе-хе~',
      );

      era.printButton(
        '「…Прогресс в неожиданном месте. В общем, в привычном темпе — выкладывайся на дорожке, как раньше.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Спокойно стоя в проходе участников, ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        ' вдвоём перед скачками то да то нет перебрасываются пустяками.',
      ]);
      await era.printAndWait(
        'Глядишь, прохожий и засомневается: такой разговор, как 「что ели в обед」, и это перед стейкс, серьёзно?',
      );
      await era.printAndWait(
        'Хотя по их виду будто отвечают недостаточно серьёзным 「да」, по крайней мере не вялые — просто никак не находят в себе волнения.',
      );
      await era.printAndWait(
        'Раньше они и правда перебирали кучу вариантов насчёт стейкс, но когда в выпускном году вышли на трассу — оказалось, ничего особенного.',
      );
      await era.printAndWait([
        'Ведь ',
        urara.sex,
        ' — это 「',
        urara.get_colored_name(),
        ' 」,а ',
        you.get_colored_name(),
        ' — ',
        urara.sex,
        ' — 「тренер」, выиграют или проиграют — лишь бы каждый раз выкладываться на полную.',
      ]);
      await era.printAndWait([
        'Но по итогу всё же выбрали явиться сюда, ',
        negi_sta,
        '.',
      ]);
      if (joined_g3) {
        await era.printAndWait([
          'Если уж зачем пришли — в основном как раньше договаривались: взять ',
          urara.get_colored_name(),
          ' попробовать, какова глубина выпускного года.',
        ]);
        await era.printAndWait([
          'И всё же хочется, чтобы в отличие от прежних стейкс эти скачки дали ',
          urara.get_colored_name(),
          ' пробежать чуть свободнее.',
        ]);
      } else {
        await era.printAndWait([
          'Хотя можно было и не этот, но всё же это ',
          urara.get_colored_name(),
          ' — первый раз на стейкс, так что чуть подобрали потоньше для ',
          urara.get_colored_name(),
          ' попроще.',
        ]);
        await era.printAndWait([
          'И всё же при ',
          urara.get_colored_name(),
          ' в нынешнем состоянии даже поражение уже не должно ставить в тупик, как в самом начале.',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await you.say_and_wait(
            'И самое главное: Arima мы… вроде выиграли? Даже если в этот раз и правда не зажглись, нас вряд ли кто обвинит…?',
            true,
          );
        } else {
          await era.printAndWait([
            'В конце концов, уже бежали ',
            arim_kin,
            ', ',
            urara.get_colored_name(),
            ' и не находит в себе волнения — тоже в пределах ожидаемого.',
          ]);
          await era.printAndWait([
            'Так что пока можно предвидеть: хорошо пробежит или нет, ',
            urara.get_colored_name(),
            ' в этот раз больших душевных качелей, должно быть, не будет.',
          ]);
        }
      }
      era.println();
      await urara.say_and_wait(['Ну что, ', callname, ', я пошла—!']);
      await era.printAndWait([
        'На фоне лёгкого возгласа, что прозвучал вместе с вызовом на выход, ',
        urara.get_colored_name(),
        ' делает шаг вперёд и бросается к ',
        you.get_colored_name(),
        ' и поднимает руку.',
      ]);

      era.printButton('「О! Не забудь бежать веселее, ладно?」', 1);
      await era.input();

      await era.printAndWait([
        'В самом привычном для них двоих ответном взмахе, ',
        urara.get_colored_name(),
        ' снова срывается бежать к трассе—',
      ]);
    };
    f.title = title;
    return f;
  })(),
  negi_sta_win: (() => {
    const title = 'Что дальше?';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {number} best_g1 目前 G1 最佳名次，Infinity 是未参加过 G1
     * @param {number|false} arim_kin_rank_c 经典年有马纪念的名次，false 为未参加过有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      best_g1,
      arim_kin_rank_c,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'Победа как по заказу, поздравляю?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Если б нечаянно проиграли, я бы вас и не винила, но в следующий раз будьте чуть серьёзнее.',
      );
      era.drawLine();
      await era.printAndWait([
        'Едва подходишь к краю переднего ряда, как вылетевший с трассы вишнёво-розовый зверёк тут же прыг-скок бьёт ладонь о ладонь с ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Перегнувшись через ограждение, видишь внизу всё то же сияющее лицо, с которого ещё не успели вытереть пот.',
      );
      await urara.say_and_wait([callname, '!Первое место, это первое место—!']);
      await urara.say_and_wait(
        'Хе-хе~ Потому что короткая, в которой Урара сильна? Ощущение, будто сразу добежала!',
      );
      await urara.say_and_wait(
        'Но бежать впереди — ощущение как раньше, вид с самого переда очень красивый~',
      );

      era.printButton(
        '「М-м, в этот раз вышло неплохо. Какие впечатления?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Впечатлений много, но в конце Урара всё равно считает: рвануть вперёд изо всех сил ей подходит лучше всего!',
      );
      await urara.say_and_wait(
        'А если отвлечься от сегодняшних скачек как таковых… кажется, Урара может и в более крутых поучаствовать!',
      );
      await era.printAndWait([
        'И то правда: при ',
        urara.get_colored_name(),
        ' — нынешнем положении, и по сей день ',
        urara.sex,
        ' в исполнении тактики всё ещё довольно ограничена.',
      ]);
      await era.printAndWait([
        'С другой стороны, и не ошиблась: нынешняя ',
        urara.sex,
        ' и правда имеет право бросить вызов скачкам уровнем выше.',
      ]);

      era.printButton(
        `「Тогда вариантов тоже немало, но… пока рекомендую February Stakes. Как?」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Февраль… а! В учебнике вроде было! Кажется, это G1?',
      );
      await urara.say_and_wait([
        'То есть ',
        callname,
        ' советуешь в следующий раз бросить вызов G1? Это чтоб к Arima Kinen в этом году накопить, да?',
      ]);

      era.printButton(
        '「М-м… вроде того. В общем, готовься к следующим скачкам!」',
        1,
      );
      await era.input();

      await urara.say_and_wait('Мм!');
      if (best_g1 === 1) {
        await era.printAndWait([
          'Как ',
          urara.get_colored_name(),
          ' сама сказала, нынешняя ',
          urara.sex,
          ' уже выросла в сильную, с победой в G1 в активе, ',
          urara.uma_sex_title,
          '.',
        ]);
        await era.printAndWait([
          'Трудно представить, что та сонная, которой поначалу даже тренировки давались с трудом, маленькая ',
          urara.uma_sex_title,
          ' и выросла в вечно побеждающую ',
          urara.uma_sex_title,
          '.',
        ]);
        await era.printAndWait([
          'Неужели все ошибались, а ',
          urara.get_colored_name(),
          ' — гений, которого трудно разглядеть?',
        ]);
      } else {
        await era.printAndWait([
          'На самом деле это не только подготовка к последней гонке: ещё важнее, что ',
          urara.get_colored_name(),
          ' рано или поздно должна перешагнуть этот порог — G1.',
        ]);
        await era.printAndWait([
          'Хотя, вступив в выпускной год, ',
          urara.get_colored_name(),
          ' — времени уже не так много, но это всё равно испытание, которое ',
          urara.sex,
          ' должна пройти хотя бы раз.',
        ]);
        await era.printAndWait([
          'По крайней мере, пусть ',
          urara.sex,
          ' не оставит сожалений, пока ещё может бежать.',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await era.printAndWait([
            'Впрочем, 「готовиться к ',
            arim_kin,
            ' 」… Хоть изначально так и не задумывалось, но раз уж один раз уже выиграли, это и правда необходимо.',
          ]);
          await era.printAndWait([
            'Стоит один раз выиграть важную гонку — и соперницы с той же дорожки возьмут на заметку, а 「',
            urara.get_colored_actual_name(),
            ' может выиграть Arima Kinen」 — это уже жуткая химическая реакция.',
          ]);
          await era.printAndWait(
            'Какой выйдет эта Arima Kinen — даже представить трудно, так что до того остаётся лишь делать всё, что можно.',
          );
        } else {
          await era.printAndWait([
            'Что до 「готовиться к ',
            arim_kin,
            ' 」, даже если ',
            urara.get_colored_name(),
            ' не подчёркивает, как тренер ',
            you.get_colored_name(),
            ' всё равно запомнит.',
          ]);
          await era.printAndWait([
            'Впрочем, теперь маленькая ',
            urara.uma_sex_title,
            ' уже не столько ради радости бега: в этом году жажда победы, похоже, будет ещё сильнее.',
          ]);
          await era.printAndWait(
            'Но выиграть Arima Kinen всё же… В общем, как тренеру остаётся лишь делать всё, что можно.',
          );
        }
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'Так тренер ',
        you.adult_sex_title,
        ' (вы) и ',
        urara.get_colored_name(),
        ' наметили цель на следующую гонку.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вот только ',
        urara.sex,
        ' до какой степени сможет замахнуться — ведают, пожалуй, лишь Три богини.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Когда увидимся в следующий раз, так просто уже, боюсь, не будет…',
      );
    };
    f.title = title;
    return f;
  })(),
  negi_sta_lose: (() => {
    const title = 'Что дальше?';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {number} best_g1 目前 G1 最佳名次，Infinity 是未参加过 G1
     * @param {number|false} arim_kin_rank_c 经典年有马纪念的名次，false 为未参加过有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      best_g1,
      arim_kin_rank_c,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'Вот уж не думала, что и правда проиграете… хм… что я там вначале говорила?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Эх… в следующий раз отнеситесь серьёзнее.',
      );
      era.drawLine();
      await era.printAndWait([
        'Спокойно выйдя к краю дорожки, ',
        you.get_colored_name(),
        ' видит вдалеке, как ',
        urara.get_colored_name(),
        ' бежит сюда, смахивая пот с лица.',
      ]);
      await urara.say_and_wait(
        'Фух — в этот раз быстро же закончилось! Но я всё-таки нечаянно проиграла…',
      );
      await urara.say_and_wait(
        'Но бежалось в этот раз очень весело! А кроме этого ещё что-то нужно иметь в виду?',
      );

      era.printButton(
        '「Ничего страшного, просто была не в форме; в следующий раз главное — обязательно выиграть.»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Протягиваешь полотенце чуть натянуто улыбающейся ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' улыбаясь тянется и легонько треплет ',
        urara.sex,
        ' — поникшие уши.',
      ]);
      await era.printAndWait([
        'Оставаться собой перед любой гонкой и правда ',
        urara.get_colored_name(),
        ' сильная сторона, но сейчас явно важнее поправить форму.',
      ]);
      await era.printAndWait([
        'Дальше стоит попробовать гонки, где все выкладываются по полной: так, может, ',
        urara.get_colored_name(),
        ' быстрее найдёт ритм нового года.',
      ]);
      await era.printAndWait([
        'А чтобы готовиться к цели, которую выбрала ',
        urara.get_colored_name(),
        ', пора снова бросать вызов гонкам рангом выше.',
      ]);

      era.printButton(
        `「Урара, в следующий раз попробуем гонку рангом повыше? Кстати, я рекомендую February Stakes.»`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Февраль… а! В учебнике вроде проходили! Это же G1?',
      );
      await urara.say_and_wait(
        'Но я же в этот раз проиграла, так нормально будет…?',
      );

      era.printButton(
        '「Ничего, право выйти на старт всё ещё есть; если поправить форму — проблем не будет.»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'С этими словами, ',
        you.get_colored_name(),
        ' продолжает утешать расстроенную маленькую ',
        urara.uma_sex_title,
        ', пока ',
        urara.sex,
        ' снова хоть чуть-чуть не улыбнётся как всегда.',
      ]);
      if (best_g1 === 1) {
        await era.printAndWait([
          'Конечно, ',
          you.get_colored_name(),
          ' — слова не вовсе одно утешение: сейчас ',
          urara.get_colored_name(),
          ' и правда способна бросить вызов G1 и выиграть.',
        ]);
        await era.printAndWait([
          'Это уже совсем не как вначале: одного поражения больше не довольно, чтобы ',
          urara.sex,
          ' снова всплывала в разговорах из-за 「проигрыша」.',
        ]);
        await era.printAndWait([
          'Может, ',
          urara.get_colored_name(),
          ', в чём-то и правда гений.',
        ]);
      } else {
        await era.printAndWait([
          'Впрочем, это не только подготовка к последней гонке: ещё важнее, что ',
          urara.get_colored_name(),
          ' рано или поздно должна перешагнуть этот порог — G1.',
        ]);
        await era.printAndWait([
          'Хотя, вступив в выпускной год, ',
          urara.get_colored_name(),
          ' — времени уже не так много, но это всё равно испытание, которое ',
          urara.sex,
          ' должна пройти хотя бы раз.',
        ]);
        await era.printAndWait([
          'По крайней мере… пусть ',
          urara.sex,
          ' не оставит сожалений, пока ещё может бежать.',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await era.printAndWait([
            'Так вот, хотя обычно ',
            urara.get_colored_name(),
            ' и правда выступает нестабильно, но ',
            urara.sex,
            ' как на этот раз умудрилась проиграть?',
          ]);
          await era.printAndWait([
            'При этой мысли ',
            you.get_colored_name(),
            ' снова хватается за лоб, и время будто откатывается к тому головокружительному полудню первой тренировки в дебютный год.',
          ]);
          await era.printAndWait(
            'В общем, в следующий раз такого конфуза уже не будет, верно?',
          );
        } else {
          await era.printAndWait([
            'Что до 「готовиться к ',
            arim_kin,
            ' 」, даже если ',
            urara.get_colored_name(),
            ' не подчёркивает, как тренер ',
            you.get_colored_name(),
            ' всё равно запомнит.',
          ]);
          await era.printAndWait([
            'Впрочем, теперь маленькая ',
            urara.uma_sex_title,
            ' уже не столько ради радости бега: в этом году жажда победы, похоже, будет ещё сильнее.',
          ]);
          await era.printAndWait([
            'Но выиграть Arima Kinen всё-таки… короче, сначала приведём в порядок ',
            urara.get_colored_name(),
            ' — состояние как первоочередную цель.',
          ]);
        }
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'Итак, тренер ',
        you.adult_sex_title,
        ' (вы) и ',
        urara.get_colored_name(),
        '  наметили цель следующих скачек.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вот только насколько далеко ',
        urara.sex,
        ' сможет зайти… остаётся лишь просить вас: подстегните её ещё разок, чтобы ',
        urara.sex,
        ' прошла чуть дальше.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Когда увидимся в следующий раз, так легко уже не будет…',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'Налёт чувств! II!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait('……');
      era.drawLine();
      await era.printAndWait(
        'Рано утром встаёшь, умываешься, одеваешься, наспех проглатываешь завтрак и, стоя у двери, между делом глядишь на календарь.',
      );
      await era.printAndWait([
        'Но, разглядев дату, ',
        you.get_colored_name(),
        '  сразу посерьёзнел(а). Сегодня День святого Валентина — особый день, когда, пожалуй, надо быть начеку.',
      ]);
      await era.printAndWait([
        'Как в тот самый миг, когда планы вечно не успевают за переменами, у крыльца, вздохнув, ',
        you.get_colored_name(),
        '  открывает дверь, в которую почти наверняка вот-вот постучат.',
      ]);
      await era.printAndWait([
        'Как ',
        you.get_colored_name(),
        '  и ожидал(а), из-за двери снова выглядывают те же, что 「в прошлый раз」, розовые чехлы на уши и милая зверюшкина улыбка.',
      ]);

      era.printButton(
        '「И в этот раз так рано… не перенапрягайся, ладно?」',
        1,
      );
      await era.input();

      if (high_relation) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait(
            'Не перенапрягаюсь! Урара к сегодняшнему много готовила, вчера даже всем шоколад уже раздала!',
          );
          await urara.say_and_wait([
            'Потому что это ',
            callname,
            ', поэтому в этот раз я хочу сделать всё посерьёзнее! Ну редкий же День святого Валентина!',
          ]);
          await era.printAndWait([
            'К ',
            you.get_colored_name(),
            '  игриво улыбается, маленькая ',
            urara.uma_sex_title,
            ' качает пакетом в руках и прижимается к ',
            you.get_colored_name(),
            ' — телу, и двусмысленная атмосфера становится ещё гуще.',
          ]);
        } else {
          await urara.say_and_wait([
            'Урара себя не перенапрягает! Просто всем шоколад я ещё вчера заранее раздала, сегодня только ',
            callname,
            '!',
          ]);
          await urara.say_and_wait([
            'Но все погрузились в праздник, так что сегодня ',
            callname,
            '  ещё немного со мной поиграешь, можно же?',
          ]);
          await era.printAndWait([
            'С наивной милой улыбкой маленькая ',
            urara.uma_sex_title,
            ' у ',
            you.get_colored_name(),
            ' — в прихожей прыгает-скачет, поднимая пакет со сладостями.',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          'Не перенапрягаюсь, правда? Урара ещё вчера всем шоколад раздала, но ',
          callname,
          ' — …особенный!',
        ]);
        await urara.say_and_wait([
          'И я тоже хочу с ',
          callname,
          '  вместе провести День святого Валентина, так что… вот, это для ',
          callname,
          ' — !',
        ]);
        await era.printAndWait([
          'Легко поднимая бумажный пакет у груди, маленькая ',
          urara.uma_sex_title,
          ' с чуточкой ',
          urara.teen_sex_title,
          ' — двусмысленности, медленно прижимается телом к ',
          you.get_colored_name(),
          ' — телу.',
        ]);
      } else {
        await urara.say_and_wait([
          'На самом деле это и не перенапряжение? Просто вчера, когда раздавала шоколад, ',
          callname,
          '  забыла…',
        ]);
        await urara.say_and_wait([
          'Поэтому сегодня я специально ',
          callname,
          ' — шоколад принесла, но… на улице холодновато, ',
          callname,
          '……?',
        ]);
        await era.printAndWait([
          'Подувая на ладошки, маленькая ',
          urara.uma_sex_title,
          ' достаёт из-за пазухи пакет с шоколадом.',
        ]);

        if (
          era.getAddedCharacters().filter((e) => era.get(`love:${e}`) >= 75)
            .length > 2
        ) {
          await urara.say_and_wait([
            ' И Урара поняла: сегодня много кто придёт осаждать популярного ',
            callname,
            ', так что Урара тоже берёт инициативу!',
          ]);
          await era.printAndWait([
            'М-м… э? А? Внезапно ',
            urara.get_colored_name(),
            ' — словами как обухом по голове, ',
            you.get_colored_name(),
            '  на миг смущается и не знает, что сказать.',
          ]);
          await era.printAndWait([
            'А будто уловив ',
            you.get_colored_name(),
            '  смущение на лице, ',
            urara.get_colored_name(),
            '  хоть и держит озорную улыбку, но вовремя сворачивает тему.',
          ]);
          await urara.say_and_wait([
            'Хе-хе~ ничего нет, Урара ничего не говорила~ ',
            callname,
            '  не так услышал(а)~',
          ]);
          await era.printAndWait([
            '…Это и правда похоже на желание свернуть тему? Да и ',
            urara.sex,
            ' такие способы дразнить взрослых где только выучила…',
          ]);
        }
      }
      await era.printAndWait([
        'Легко проскальзывает в ',
        you.get_colored_name(),
        ' — жильё, и когда оба садятся за стол, ',
        urara.get_colored_name(),
        '  смеясь вываливает содержимое пакета на тарелку.',
      ]);
      await era.printAndWait([
        'По сравнению с прошлогодним слишком изобретательным разновкусным шоколадом, в этом году маленькая ',
        urara.uma_sex_title,
        ' — подарки уже не такие детские.',
      ]);
      await era.printAndWait([
        'Но глядя на гору сердечек из шоколадного печенья перед собой, ',
        you.get_colored_name(),
        ' — память медленно уносит к первому концу года после встречи…',
      ]);
      await urara.say_and_wait([
        'Потому что ',
        callname,
        '  всё равно больше любит печенье Урары, да? Поэтому я снова его испекла!',
      ]);
      await urara.say_and_wait([
        callname,
        ', давай сейчас откуси и попробуй! Обещаю: в этот раз так вкусно, что даже язык растает!',
      ]);
      await era.printAndWait([
        '«Даже язык растает» — звучит как-то опасно. Так про печенье не говорят, или ',
        urara.get_colored_name(),
        '  снова что-то подмешала?',
      ]);
      await era.printAndWait([
        'Среди ',
        urara.get_colored_name(),
        ' — ждательного поторапливания, ',
        you.get_colored_name(),
        '  задумчиво тянется к ещё чуть тёплому печенью.',
      ]);
      await era.printAndWait(
        'И правда… очень вкусно. Форма по-прежнему весьма крошеная, но вкус куда тоньше и слаще, чем в тот конец года…',
      );
      await era.printAndWait([
        'А прочтя ',
        you.get_colored_name(),
        '  потрясение на лице 「язык растаял」, ',
        urara.get_colored_name(),
        '  тоже тихонько подсаживается к ',
        you.get_colored_name(),
        '  сбоку.',
      ]);
      await urara.say_and_wait(
        'На самом деле тут есть вкусный секрет! Хотя надо бы молчать, но Урара может тебе исключение сделать!',
      );
      await urara.say_and_wait([
        callname,
        ', если хочешь узнать — ну-ка наклони ухо…?',
      ]);
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          'Как раз когда ',
          you.get_colored_name(),
          ' собирается слушать, ',
          urara.get_colored_name(),
          ' в следующую секунду меняется в лице. Внезапно садится верхом на ',
          you.get_colored_name(),
          ' — поясницу, маленькая ',
          urara.uma_sex_title,
          ' прижимает ',
          you.get_colored_name(),
          ' под собой.',
        ]);
        await era.printAndWait([
          'Крохотным мягким телом прижимается к ',
          you.get_colored_name(),
          ' — телу, ',
          urara.teen_sex_title,
          ' алые щёки и вишнёвые зрачки расцветают любовным вожделением.',
        ]);
        await urara.say_and_wait([
          'И для ',
          callname,
          ' — благословение тоже, и для ',
          callname,
          ' — любовь тоже, Урара добавила очень-очень много…',
        ]);
        await urara.say_and_wait([
          'Так что раз уж это такое редкое угощение, тогда ',
          callname,
          ' непременно съест это вместе с Урарой, да?',
        ]);
        if (era.get('talent:52:乳房尺寸') > 0) {
          await urara.say_and_wait([
            'И кроме ',
            callname,
            ' — 『любви』, Урара ещё по чужим слухам добавила кое-что ещё…',
          ]);
          await era.printAndWait([
            'Верхом на ',
            you.get_colored_name(),
            ' — теле легонько распахивает куртку, маленькая ',
            urara.uma_sex_title,
            ' расстёгивает уже дрожащий в течке, липко насквозь мокрый бандаж.',
          ]);
          await era.printAndWait(
            'А следом, колыхаясь, в глаза бросается пара нежной груди, с задранных кончиков которой всё ещё то и дело сочится молочно-белое.',
          );
          await era.printAndWait([
            'Сгибами рук подхватывает две чарующие груди, несоразмерные крохотному телу, ',
            urara.get_colored_name(),
            ' — на зардевшемся личике проступает ещё и взрослая томность.',
          ]);
          await urara.say_and_wait([
            'Кроме слюны, молоко, которым Урара пекла печенье, тоже своё, знаешь? Так что… ',
            callname,
            ' съест ещё немного, да?',
          ]);
        }
        await era.printAndWait([
          'Зажав печенье губами, маленькая ',
          urara.uma_sex_title,
          ' наклоняется и вместе с тающей сладкой слюной отправляет мягкие нежные губы и язык в ',
          you.get_colored_name(),
          ' — рот.',
        ]);
        await era.printAndWait([
          'От беспокойного желания оттолкнуть до сплетённых пальцев, где даже мысли тают в посасывании, с ',
          you.get_colored_name(),
          ' обвившаяся ',
          urara.teen_sex_title,
          ' расслабляет тело…',
        ]);
        await era.printAndWait([
          'С переменой ролей, с мутным взором маленькая ',
          urara.uma_sex_title,
          ' в ',
          callname,
          ' — тугих объятиях и сладких глубоких поцелуях издаёт мягкие стоны.',
        ]);
        await era.printAndWait([
          'Перед полностью попавшим в ловушку дня святого Валентина ',
          you.get_colored_name(),
          ', крохотная ',
          urara.uma_sex_title,
          ' спокойно отдаёт любимому право распоряжаться своим телом…',
        ]);

        await era.printAndWait('Сейчас дозволено что угодно…');
        era.printButton('Съесть Урару здесь… (влюблённость +5)', 1);
        era.printButton('Пока ничего не делать… (расположение +20)', 2);
        ret.push(await era.input());
        if (ret[0] === 2) {
          await era.printAndWait([
            'Качает головой, ',
            you.get_colored_name(),
            ' отпускает растрёпанную ',
            urara.get_colored_name(),
            ', но сверх ',
            you.get_colored_name(),
            ' — ожиданий, в этот момент маленькая ',
            urara.uma_sex_title,
            ' недовольства всё же не выказывает.',
          ]);
          await era.printAndWait([
            'Тихо подтягивает полуснятую одежду, маленькая ',
            urara.uma_sex_title,
            ' на всё ещё залитом румянцем личике появляется озорная улыбка неудавшейся шалости.',
          ]);
          await urara.say_and_wait([
            callname,
            ' поступил(а) верно, да? С самого утра так — немного чересчур, но раз уж редкий день святого Валентина, давай съедим всё вместе…?',
          ]);
          await urara.say_and_wait(
            'Смотри, здесь ещё много, да? Рот открой — дальше будет очень весело!',
          );
          await era.printAndWait([
            'И точно: всё ещё не сдаётся ',
            urara.get_colored_name(),
            ' берёт следующее печенье, в которое намешано слишком много 「приправ」, и со сладкой улыбкой зажимает сладость во рту.',
          ]);
          await era.printAndWait(
            'Похоже, этот день святого Валентина суждено пережить с трудом…',
          );
        }
      } else {
        await era.printAndWait([
          'У ',
          you.get_colored_name(),
          ' — уха тихонько дышит, ',
          urara.teen_sex_title,
          ' — аромат вместе с праздничным благословением вплывает в ',
          you.get_colored_name(),
          ' — ухо.',
        ]);
        await urara.say_and_wait([
          'На самом деле… Урара вложила столько сердца, потому что я хочу, чтобы ',
          callname,
          ' каждый день был счастлив!',
        ]);
        await urara.say_and_wait(
          'И ещё то, что все говорили: последний шаг, чтобы магическое заклинание сработало… чмок~',
        );
        await era.printAndWait([
          'Прижавшись к ',
          you.get_colored_name(),
          ' — боку на расстоянии шёпота, ',
          urara.get_colored_name(),
          ' дарит ',
          you.get_colored_name(),
          ' — щеке крохотный лёгкий поцелуй, словно благословение ангела.',
        ]);
        await era.printAndWait([
          'Ещё даже не любовники, но маленькая ',
          urara.uma_sex_title,
          ' всё же решает поднести такой драгоценный подарок. Что же все ',
          urara.sex,
          ' наговорили такое…',
        ]);
        await era.printAndWait([
          'Краем глаза ловит, как ',
          urara.teen_sex_title,
          ' всё так же сияет весенней улыбкой, и у ',
          you.get_colored_name(),
          ' сердцебиение само невольно отбивает такт.',
        ]);

        await urara.say_and_wait([
          'Хе-хе~ ',
          callname,
          ' как оно? Заклинание Урары сработало?',
        ]);
        era.printButton(
          '「Так рад(а), что весь день теперь не осмелюсь умыться!」(влюблённость +5)',
          1,
        );
        era.printButton(
          '「Ага! Магия Урары — полный успех!」(расположение +20)',
          2,
        );
        ret.push(await era.input());
        await urara.say_and_wait([
          'Правда? Та магия, от которой ',
          callname,
          ' и сердце замирает, и так радостно — и правда сильная! Не зря все передают этот способ до сих пор!',
        ]);
        await era.printAndWait([
          'Так что это 「магическое заклинание」 и правда не про дружбу, да? Глядя на ликующую маленькую ',
          urara.uma_sex_title,
          ', кое-что поняв, ',
          you.get_colored_name(),
          ' отводит взгляд.',
        ]);
        await urara.say_and_wait([
          'Так что чтобы впредь ',
          callname,
          ' был ещё счастливее, у Урары печенья ещё очень много, знаешь?',
        ]);
        await urara.say_and_wait([
          callname,
          '! Вместе с Урарой давай съедим будущее хорошее настроение!',
        ]);
        await era.printAndWait([
          ' с улыбкой берёт следующий кусочек валентиновского подарка с благословением, ',
          urara.get_colored_name(),
          '  с улыбкой, от которой сердце колотится, засовывает его в ',
          you.get_colored_name(),
          ' — рот.',
        ]);
        await era.printAndWait([
          ' в незаметно ставшей двусмысленной атмосфере «дружбы», ',
          you.get_colored_name(),
          ' и ',
          urara.get_colored_name(),
          ' вместе делят шоколадное печенье, проводя утро Дня святого Валентина.',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait('Я-я в порядке же…? Эх…');
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_febr_sta: (() => {
    const title = 'Навстречу February Stakes!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await inner_urara.say_as_unknown_and_wait(
        'Иногда даже мне приходится усомниться: может, в удаче, судьбе и всём таком и правда что-то есть.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'А вы как считаете? Впрочем, вести ',
        urara.uma_sex_title,
        ' за пределы судьбы — тоже как тренер ',
        you.adult_sex_title,
        ' (вас) — миссия, пожалуй.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Но те не сумевшие превзойти судьбу ',
        urara.uma_sex_title,
        ' смогут ли, как ',
        urara.sex,
        ' того желала, вместе найти счастье?',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Вместе с ',
        urara.get_colored_name(),
        '  уже и не вспомнить, в который раз стоят в разных тоннелях для участниц, ',
        you.get_colored_name(),
        ' и ',
        urara.sex,
        ' уже по привычке обмениваются словами перед скачкой.',
      ]);
      await era.printAndWait([
        'Впрочем, на этот раз, возможно, заразившись атмосферой вокруг, хоть по-прежнему и не слишком волнуется, но маленькая ',
        urara.uma_sex_title,
        ' всё же без привычной улыбки.',
      ]);
      await urara.say_and_wait([
        callname,
        ', снаружи и правда народу много же, да и лица у всех здесь серьёзнее, чем в прошлый раз.',
      ]);

      era.printButton(
        '「Впрочем, Урара, как и в прошлый раз, не особенно волнуется, да?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Ага, поэтому Урара волнуется вот за ту сторону.',
      );
      await era.printAndWait([
        'По взгляду подопечной ',
        you.get_colored_name(),
        '  замечает ту, с кем, кажется, несколько раз пересекались на Тренировочном поле, ',
        urara.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'словно отгорожена от окружающей атмосферы, ',
        urara.sex,
        ' в одиночестве разминается перед скачкой у края тоннеля, и выражение тоже натянуто до жути.',
      ]);
      await era.printAndWait([
        urara.sex,
        'Это ',
        urara.get_colored_name(),
        ' — подруга, верно? Но почему ',
        urara.sex,
        ' стоит здесь одна — сама пришла на скачку? И где её тренер?',
      ]);
      await era.printAndWait([
        'И ещё по ',
        you.get_colored_name(),
        ' — лицу считывает недоумение, ',
        urara.get_colored_name(),
        '  сразу к ',
        you.get_colored_name(),
        '  начинает объяснять, как всё было.',
      ]);
      await urara.say_and_wait([
        urara.sex,
        'Это подруга Урары. Мы познакомились, потому что часто бегаем парой на тренировках: дистанции у нас вроде хорошо совпадают.',
      ]);
      await urara.say_and_wait([
        'Но в отличие от Урары, ',
        urara.sex,
        ' с давних пор очень сильная и даже без тренера бежит до сих пор.',
      ]);
      await era.printAndWait([
        'Если с ',
        urara.get_colored_name(),
        '  пригодность почти такая же, вместе на тренировках — нормально, вот только встретиться на скачках, кажется, ещё впервые.',
      ]);
      await era.printAndWait([
        'Но как же без тренера? Неужели ',
        urara.sex,
        ' с дебюта сама тренируется и одна выходит на скачки?',
      ]);
      await urara.say_and_wait([
        'Потому что ',
        urara.sex,
        ' такая честолюбивая ',
        urara.uma_sex_title,
        ', да ещё всегда ставила целью G1, так что эту скачку ',
        urara.sex,
        ' точно очень ценит.',
      ]);
      await urara.say_and_wait([
        'Но, готовясь к скачке, ',
        urara.sex,
        ' уже давно не радовалась; если эту скачку ',
        urara.sex,
        ' удастся выиграть, то, наверное, станет полегче…',
      ]);
      await era.printAndWait(
        'Вот оно что. Впрочем, это уже не то, что решить сейчас; может, потом специально найти момент поговорить, но сейчас…',
      );

      era.printButton(
        '「Но сейчас Урара же не отдаст первое место подруге вот так.»',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Конечно! Я понимаю ',
        callname,
        ' — смысл, да и Урара уже решила: я постараюсь и выиграю!',
      ]);
      await urara.say_and_wait([
        'Просто ',
        urara.sex,
        ' сейчас выглядит так, что Урара всё равно очень волнуется…',
      ]);

      era.printButton(
        '「Понятно. В общем, сначала выложись на скачке, а об остальном подумаем потом?»',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'И то правда: одним беспокойством ничего не решить. Тогда ',
        callname,
        ', я побежала!',
      ]);

      era.printButton('「Ага! Сегодня тоже давай!»', 1);
      await era.input();

      await era.printAndWait([
        'Когда звучит сигнал к выходу на дорожку, к ',
        you.get_colored_name(),
        '  слегка махнув рукой, снова надевшая улыбку ',
        urara.get_colored_name(),
        '  первой впрыгивает на скаковую дорожку.',
      ]);
      await era.printAndWait([
        'Но как раз когда ',
        urara.get_colored_name(),
        ' — подруга сзади с ',
        you.get_colored_name(),
        '  разминувшись плечом, пространство в постепенном выцветании будто кто-то ставит на замедленную съёмку.',
      ]);
      await era.printAndWait([
        'Хоть силуэта и не видно, но как появление демона всегда сопровождает шёпот, тот знакомый тон снова обвивает ',
        you.get_colored_name(),
        ' — уши.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Не беспокойтесь? Как интуиция Урары: даже если Урара, может, проиграет, ',
        urara.sex,
        ' может, и следующего раза не будет.',
      ]);
      await era.printAndWait([
        'Сегодня «',
        inner_urara.sex,
        ' » её речь кажется резковатой; конечно, на слова, что звучат не слишком пристойно, вряд ли ответят ласково.',
      ]);

      era.printButton(
        '「И что это значит? Насилу до скачки дожили — нельзя ли хоть кому-нибудь сказать что-то доброе?»',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Не поймите превратно: я говорю буквально, знаете? Раз вы тренер, взгляните-ка, каковы ноги у этой одноклассницы?',
      );
      await era.printAndWait([
        'В замедленном времени ',
        you.get_colored_name(),
        '  смотрит на ту пару ног, что несёт ',
        urara.teen_sex_title,
        ' к надежде, но следом хмурится, будто заранее видит, как мечта разбивается.',
      ]);
      await era.printAndWait([
        'Как бы сказать… если не совсем грубо, ',
        urara.sex,
        ' как скаковая ',
        urara.uma_sex_title,
        ' — «срок годности», похоже, уже почти на исходе.',
      ]);
      await era.printAndWait([
        'И правда: даже без тренера ',
        urara.sex,
        ' во всём справляется отлично, но даже с храбростью дебютировать в одиночку ',
        urara.sex,
        ' так и не снискала благосклонности трёх богинь.',
      ]);
      await era.printAndWait(
        'Снова та же тема, от которой не уйти: 「предел посредственности」, 「конец дарования」 и 「большинство, которому не суждено сбыться」.',
      );
      await era.printAndWait([
        'Впрочем, сейчас не время спорить об этом, ',
        you.get_colored_name(),
        '  и не собирается снова подхватывать ритм, который задаёт ',
        urara.sex,
        '.',
      ]);
      await era.printAndWait(
        'К тому же, как бы сурово ни было, на этот вопрос, ответ на который есть только у Трёх богинь, простой тренер всё равно не ответит.',
      );

      era.printButton(
        `「В конце концов, ${urara.sex} — состояние не то, о чём посторонний может судить на глаз, да и ${urara.sex} возможно, и не такая, какой кажется…」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        'Затем ',
        you.get_colored_name(),
        ' — попытку перехватить инициативу прервала насмешка, сложенная из ',
        inner_urara.get_colored_name(),
        ' звонкого смеха, по содержанию же вполне чистая.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Я не против ваших рассуждений, о? Но вы же знаете, кого я имею в виду: ту маленькую трудягу, с которой скоро выйдет на одну дорожку ',
        urara.sex,
        '?',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Маленькая Урара, что выбрала победу, готова к тому, что перед финишем, возможно, увидит подругу, теряющую всё?',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        'Сможет ли подарить своей вот-вот падающей подруге улыбку, которую даже тот 『идеальный председатель』 не может дать всем?',
      ]);
      await era.printAndWait(
        'Кажется, внутри что-то вспыхнуло. Ах так, вот как спрашиваешь? Откуда этот мелкий выскочка —',
      );

      era.printButton(
        '「Я отказываюсь отвечать на твои загадки. Ураре ещё бежать, если нахулиганила вдоволь — прошу немедленно уйти.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Стараясь в гневе сохранить хотя бы основные приличия, ',
        you.get_colored_name(),
        '  бросила той ',
        { color: inner_urara.color, content: '「Неприкасаемая Урара」' },
        ' приказ убираться.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Ах, и то правда, Урара ведь даже не знает, какой станет ',
        urara.sex,
        ' — подруга.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Ещё не видели, как ',
        urara.sex,
        ' жалеет, ',
        urara.sex,
        ' — тренер- ',
        you.adult_sex_title,
        ' naturally и не ответит на такое, недаром сердитесь.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Ну что ж, до следующей встречи, не забудьте позаботиться об Ураре, о?',
      );

      era.printButton(
        '「Сколько раз уже сказано — позабочусь! Так что в следующий раз говори со мной нормально!」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'В воздухе, что снова начал течь, ',
        you.get_colored_name(),
        '  в гневе обернулся(ась) и со всего маха ударил(а) кулаком в голос, что таял за спиной.',
      ]);
      await era.printAndWait([
        'Разумеется, ',
        you.get_colored_name(),
        '  в проходе для участниц уже ни души, так что ничего и не произойдёт…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_win: (() => {
    const title = 'Не смирилась?';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} elm_sta 榆树锦标赛（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
      elm_sta,
    ) => {
      await era.printAndWait([
        'После скачки ',
        you.get_colored_name(),
        '  и ',
        urara.get_colored_name(),
        '  идут вместе по проходу к комнате отдыха участниц.',
      ]);
      await era.printAndWait([
        'А кажется, всё ещё в атмосфере скачки, и хотя только что всё было наяву, ',
        urara.get_colored_name(),
        '  всё равно без умолку болтает с ',
        you.get_colored_name(),
        '  о том, как бежала.',
      ]);
      await urara.say_and_wait(
        'Хе-хе~ И все так за меня рады! Ещё и первое место — так здорово!',
      );
      await urara.say_and_wait([
        'Если я буду бежать и дальше, все так и будут улыбаться, да? ',
        callname,
        ', какую скачку бежать следующей?',
      ]);
      era.printButton(
        '「Кстати об этом… Урара, есть скачка, которую хочешь бежать следующей?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'М? Выиграть, конечно, лучше, но лишь бы бежать — на самом деле всё равно —',
      );
      await era.printAndWait([
        'Ответ как и ожидалось, хотя ',
        you.get_colored_name(),
        '  чувствует, что пора дать ',
        urara.get_colored_name(),
        '  самой выбрать скачку, но с таким нравом ',
        urara.sex,
        ', пожалуй, всё равно ничего внятного не выберет.',
      ]);
      await era.printAndWait([
        'Да и при выборе календаря, если конечная цель — 「',
        arim_kin,
        ' 」, то для ',
        urara.get_colored_name(),
        '  выбор и вовсе невелик.',
      ]);

      era.printButton(
        `「Тогда… в следующий раз пробежать 『Elm Stakes』?」`,
        1,
      );
      await era.input();

      await era.printAndWait(
        'Хотя эта скачка, возможно, не лучший выбор, но взвесив плюсы и минусы, остаётся пока запланировать её.',
      );
      await urara.say_and_wait([
        'Хорошо, поняла! Скажу всем на торговой улице и в группе поддержки, что следующая — ',
        elm_sta,
        ' ——',
      ]);

      era.printButton(
        `「Кстати, если правда бежать эту, всем будет труднее добраться: 『Elm Stakes』 проходит на Хоккайдо.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Э? Правда!? Это же так далеко! Но вроде и ничего, все же и откуда угодно увидят Урару!',
      );
      await urara.say_and_wait(
        'Пока все думают об Ураре — совсем не страшно, так что тогда останется только как-нибудь выиграть!',
      );

      era.printButton(
        '「Но перед этим вечером ещё Live, все ждут, чтобы увидеть крутую сторону Урары, о?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Поняла! Тогда Урара пойдёт готовиться к концерту! ',
        callname,
        '  если есть дела — иди пока займись!',
      ]);

      era.printButton(
        '「О! Тогда я сначала в закулисье сцены, если что — сразу свяжись!」',
        1,
      );
      await era.input();

      await urara.say_and_wait('Хорошо—');
      era.drawLine();
      await urara.print_and_wait([
        'С ',
        callname,
        '  попрощалась и проводила взглядом, как ',
        you.sex,
        ' скрылась из виду, я повернулась и вошла в комнату отдыха.',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          '  оглядывается каждые три шага — даже мило, совсем как будто ',
          callname,
          '  ребёнок, а Урара — мама.',
        ]);
        await urara.print_and_wait([
          'Вот бы каждый день ',
          callname,
          '  так всё смотрел(а) — но это уже слишком капризно?',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          '  как всегда поворачивается и уходит, вот бы ещё раз обернулся(ась) и посмотрел(а) на Урару…',
        ]);
        await urara.print_and_wait([
          'Но почему Урара вообще об этом думает? ',
          callname,
          '  вроде и так нет времени всё смотреть на Урару?',
        ]);
      }
      await urara.print_and_wait([
        'Всё-таки не понять… М? В том углу кто-то свернулся, и лицо такое плохое… А! Это ',
        urara.sex,
        '……',
      ]);
      await urara.print_and_wait([
        'Потому что не взяла G1 и теперь раздавлена? Урара первый раз видит, какая сильная ',
        urara.sex,
        ' такая хрупкая…',
      ]);
      await urara.print_and_wait([
        'Но раз так — тем более нельзя бросать, хотя Урара не умеет как ',
        callname,
        ' … в общем, сначала подойду и спрошу!',
      ]);
      await urara.say_and_wait('Эм, ты в порядке? Где-то болит?');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「…А, Урара… М-м, не переживай, я в порядке…」',
      ]);
      await urara.say_and_wait(
        'Но лицо у тебя такое мученое! Скоро же концерт, ты в порядке?',
      );
      await urara.say_and_wait(
        'Не силуй себя, ладно? Я с тобой побуду, так что пока улыбка не вернётся—',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Сейчас не трогай меня!」',
      ]);
      await urara.say_and_wait('…Э? Больно…!');
      await urara.print_and_wait([
        'Протянутую руку отшлёпнули ',
        urara.uma_sex_title,
        ' — силой, и по тыльной стороне отброшенной руки постепенно расползается жгучая боль.',
      ]);
      await urara.print_and_wait([
        'А когда подняла голову, ',
        urara.sex,
        ' ведь всегда такая улыбчивая ',
        urara.uma_sex_title,
        ', а сейчас передо мной — потерянное и печальное лицо.',
      ]);
      await urara.print_and_wait([
        'Как вообще смотреть на такое лицо? Но если сейчас уйти, только ',
        urara.sex,
        ' ещё сильнее расстроится.',
      ]);
      await urara.print_and_wait([
        'Всё-таки уйти нельзя. Прикусив губу и прикрыв распухшую ноющую правую руку, я сажусь на корточки ',
        urara.sex,
        ' — рядом и жду ',
        urara.sex,
        ' — продолжения.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Как тут улыбнуться…!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Насилу попала в G1, я тоже хотела стоять в центре сцены! Редкий шанс — а я такая слабая…」',
      ]);
      await urara.print_and_wait(
        'Если другому горько — сначала выслушай до конца, что на сердце. Мама всегда так говорила.',
      );
      await urara.print_and_wait([
        'Сейчас ',
        urara.sex,
        ' должна стать полегче? Но этот профиль будто где-то уже видела. Что это за выражение такое?',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Прости… Урара, я не хотела так… но мне правда так трудно улыбнуться…」',
      ]);
      await urara.say_and_wait(
        'Нет, Урара совсем не чувствует боли! Ты правда в порядке?',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「…Урара совсем не похожа на ту, кому не больно, лицо же сейчас расплачется…」',
      ]);
      await urara.say_and_wait('Э? Правда… нет! Урара правда в порядке!');
      await urara.print_and_wait([
        'Хотя больно-то больно… может, не так сильно! Но, кажется, увидев моё лицо, ',
        urara.sex,
        ' чуть подняла дрожащие уголки губ.',
      ]);
      await urara.print_and_wait(
        'Цель Урары достигнута, да, но правда ли это того уровня, чтоб от слёз к смеху? Лицо Урары…',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Не в этом дело… но я в порядке. Когда выйду на сцену, смогу нормально улыбнуться.」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Урара всегда готова выслушать, и в этот раз спасибо тебе. Так что и ты перед выходом поправь лицо!」',
      ]);
      await urara.say_and_wait(
        'Мгу! Ничего! Сколько угодно раз Урара тебя выслушает!',
      );
      await urara.print_and_wait([
        'Сказав спасибо, сама встала, и уже успокоившаяся ',
        urara.sex,
        ' легонько подняла и меня.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Да… сколько угодно раз… в следующий раз я точно… встану точно в центр!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Обязательно… будет ещё следующий раз…!」',
      ]);
      await urara.print_and_wait([
        'Сказав 「увидимся потом」, ',
        urara.sex,
        ' будто стараясь что-то скрыть, повернулась и ушла.',
      ]);
      await urara.print_and_wait([
        'Но хотя на поверхности уже как всегда, ',
        urara.sex,
        ' — спина всё равно тонкая, будто из неё выкачали все силы.',
      ]);
      await urara.print_and_wait([
        urara.sex,
        ' — ноги, кажется, затекли от долгого сидения на корточках, и эта хромота делает её ещё более 「потерянной」.',
      ]);
      await urara.print_and_wait([
        'Урара ещё впервые видит ',
        urara.sex,
        ' такой: и слишком печальное лицо только что, и эту поникшую спину сейчас,',
      ]);
      await urara.print_and_wait([
        'Впрочем, я наконец вспомнила, ',
        urara.sex,
        ' сейчас выглядит так, будто уже упустила последний в жизни шанс и всё равно делает вид, что спокойна…',
      ]);
      await urara.print_and_wait(
        'Всё кажется, будто случилось что-то непоправимое. Это Урара слишком чувствительная?',
      );
      await urara.print_and_wait([
        'Но ',
        urara.sex,
        ' права: скоро ещё на сцену, остальное подумаю после, в оставшееся время!',
      ]);
      await urara.print_and_wait([
        'Шлёпнув себя по щекам, чтобы снова взбодриться, я тоже поворачиваюсь и догоняю ',
        urara.sex,
        ' — спину и вместе бежим за кулисы Live.',
      ]);
      await urara.print_and_wait([
        'Под звук упругих шагов идущая впереди ',
        urara.sex,
        ' будто снова стала лучистой.',
      ]);
      await urara.print_and_wait(
        'Это Урара обозналась? Точно я слишком чувствительная… да, точно так…',
      );
      era.drawLine();
      await era.printAndWait([
        'Сегодняшний Live прошёл очень гладко. Обойдя из-за кулис на зрительские места, где все с торговой улицы и из группы поддержки, ',
        you.get_colored_name(),
        ' с отрадой думает.',
      ]);
      await era.printAndWait([
        'Вот именно: какое бы место ни заняла, на какой бы позиции ни стояла, ',
        urara.get_colored_name(),
        ' всё равно может показать всем свою лучшую улыбку.',
      ]);
      await era.printAndWait([
        'Потому-то все так любят ',
        urara.get_colored_name(),
        ', всем нравится, даже проиграв, даже не сумев победить, всё равно полная сил улыбающаяся ',
        urara.sex,
        '.',
      ]);
      await era.printAndWait([
        'И может, не каждый раз выйдет, но нынешняя ',
        urara.sex,
        ' бесспорно уже имеет силу выигрывать скачки.',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы A「…Урара ',
        urara.sex,
        ' — правда здорово старается, прежнее беспокойство, похоже, можно отпустить.»',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы B「Да, даже если в душе думаешь, лишь бы ',
        urara.sex,
        ' была счастлива, ',
        urara.sex,
        ' потом только такими мыслями и будет спотыкаться.»',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы C「Нынешняя маленькая Урара уже выросла, как раз я тоже хочу на ',
        arim_kin,
        ' поглядеть, как ',
        urara.sex,
        ' улыбается.»',
      ]);
      await era.printAndWait([
        'Сзади тихонько подставляю ухо: те, кто поддерживает ',
        urara.get_colored_name(),
        ' — все тоже, глядя на концерт, о чём-то говорят.',
      ]);
      await era.printAndWait([
        'Впрочем, похоже, ',
        you.get_colored_name(),
        ' — стратегия постепенно сбывается: стоит держаться, и те, кто поддерживает ',
        urara.get_colored_name(),
        ' со временем признают ',
        urara.sex,
        ' — путь вперёд.',
      ]);
      await era.printAndWait([
        'Трудности сами собой разрешились… ладно, сначала запишу это и по возвращении тихонько ',
        urara.get_colored_name(),
        ' обрадую вестью.',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы A「Впрочем, последняя цель Урары вроде ',
        arim_kin,
        ', а отбор на ту скачку вроде довольно строгий.»',
      ]);
      await era.printAndWait(
        'Человек с торговой улицы C「Но нет ли чего, в чём мы могли бы помочь? Просто смотреть на маленькую Урару — на душе неспокойно.»',
      );
      await era.printAndWait(
        'Человек с торговой улицы D「На самом деле, у меня идея есть. Как тогда, когда мы возрождали торговую улицу…」',
      );

      if (join_arim_kin_c) {
        await era.printAndWait(
          'Человек с торговой улицы C「Сила в людях, да? Но Урару уже один раз отбирали, разве ещё нужно?»',
        );
        await era.printAndWait(
          'Человек с торговой улицы D「Может, и правда все слишком волнуются, но сюрпризы лучше обходить, всё-таки это тот ребёнок…」',
        );
      }
      await era.printAndWait(
        'М? И это ещё о чём? Неужели все скрывают от тебя, что делают что-то ещё?',
      );
      await era.printAndWait([
        'Интуиция подсказывает ',
        you.get_colored_name(),
        ' что это важно, но когда ',
        you.get_colored_name(),
        ' хочет пододвинуться и послушать, подняв голову, обнаруживает, что Live уже почти кончается.',
      ]);
      await era.printAndWait([
        'Хотя разговоры всех очень занимали, но чтобы вовремя проверить ',
        urara.get_colored_name(),
        ' — состояние, ',
        you.get_colored_name(),
        ' всё же сразу бежит в комнату отдыха.',
      ]);
      await era.printAndWait([
        'Ни на сцене ',
        urara.get_colored_name(),
        ' — едва заметная неполная улыбка, частое 「',
        urara.sex,
        ' 」, ни тот мрачный ',
        urara.child_sex_title,
        '.',
      ]);
      await era.printAndWait(
        'Теперь даже чужие разговоры наедине вселяют тревогу. В чём дело, почему в последнее время так чувствительно?',
      );
      await era.printAndWait(
        'Всё чудится, что когда-нибудь случится что-то. Хоть бы это были пустые тревоги…',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Можно с вами просто поболтать?',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Кстати, тренер- ',
        you.adult_sex_title,
        ' (вы) же прекрасно знаете: ',
        urara.uma_sex_title,
        ' накопленные в беге повреждения трудно лечить.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Потому что от природы иное строение тела и часть конституции, и потому что многое ещё нельзя объяснить.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Плюс профессиональным спортсменам часто приходится превышать нагрузку на тело, и такие травмы в обычных случаях почти неизлечимы.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Почему вдруг эта тема? Ничего, просто вдруг подумалось: Урара, кажется, всё это время везучая.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Надо, чтобы ',
        urara.sex,
        ' и дальше была окружена заботой — и нельзя, чтобы ',
        urara.sex,
        ' тоже стала одной из тех, кто сбился с пути…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_lose: (() => {
    const title = '';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} elm_sta 榆树锦标赛（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
      elm_sta,
    ) => {
      await era.printAndWait([
        'После скачки, будто нечаянно упустив победу, ',
        urara.get_colored_name(),
        ' выглядит немного подавленной.',
      ]);
      await era.printAndWait([
        'Но это длилось недолго: подумав о всех, маленькая ',
        urara.uma_sex_title,
        ' быстро подняла уши и вернула улыбку.',
      ]);
      await urara.say_and_wait(
        'Но все равно все очень рады! И потом ещё на сцену, так что сейчас не время унывать!',
      );
      await urara.say_and_wait([
        'Ах да! ',
        callname,
        ', в какой скачке будем участвовать в следующий раз?',
      ]);
      era.printButton(
        '「Кстати об этом… Урара, есть скачка, в которой хочешь бежать следующей?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'М? Выиграть, конечно, лучше, но если можно бежать — на самом деле всё равно о—',
      );
      await era.printAndWait([
        'Всё тот же ответ, что и ожидалось, хотя ',
        you.get_colored_name(),
        ' считает, что пора дать ',
        urara.get_colored_name(),
        ' самой выбрать скачку, но с таким нравом ',
        urara.sex,
        ', пожалуй, всё равно ничего внятного не выберет.',
      ]);
      await era.printAndWait([
        'И если при составлении расписания учесть, что конечная цель — 「',
        arim_kin,
        ' 」, то для ',
        urara.get_colored_name(),
        ' выбор и вправду очень ограничен.',
      ]);

      era.printButton(
        `「Тогда… в следующий раз выступить в 『Elm Stakes』?」`,
        1,
      );
      await era.input();

      await era.printAndWait(
        'Хотя эта скачка, возможно, не лучший выбор, но взвесив всё, пока можно наметить только её.',
      );
      await urara.say_and_wait([
        'Хорошо, поняла! Урара скажет всем на торговой улице и в группе поддержки, что следующая — ',
        elm_sta,
        ' ——',
      ]);

      era.printButton(
        `「Кстати, если правда бежать эту, всем будет труднее добраться: 『Elm Stakes』 на Хоккайдо.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Э? Правда!? Это же так далеко! Но вроде не страшно: Урару же отовсюду видно!',
      );
      await urara.say_and_wait(
        'Пока все думают об Ураре — совсем не страшно, так что тогда останется только как-нибудь победить!',
      );

      era.printButton(
        '「Но перед этим попозже ещё Live, все ждут, когда увидят крутую Урару, да?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Я поняла! Тогда Урара пойдёт готовиться к концерту! ',
        callname,
        ' если есть дела — иди пока занимайся!',
      ]);

      era.printButton(
        '「О! Тогда я сначала за сцену, если что — сразу свяжись!」',
        1,
      );
      await era.input();

      await urara.say_and_wait('Хорошо—');
      era.drawLine();
      await urara.print_and_wait([
        'Попрощавшись с ',
        callname,
        ' и проводив взглядом ',
        you.sex,
        ' скрывается из виду, я повернулась и вошла в комнату отдыха.',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          ' на каждом шагу оглядывается — такое милое, будто ',
          callname,
          ' ребёнок, а Урара — мама.',
        ]);
        await urara.print_and_wait([
          'Вот бы каждый день ',
          callname,
          ' так без отрыва смотрел(а) на Урару — но не слишком ли это капризно?',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          ' всё как всегда поворачивается и уходит. Вот бы ещё раз обернуться и посмотреть на Урару…',
        ]);
        await urara.print_and_wait([
          'Впрочем, почему Урара это переживает? ',
          callname,
          ' вроде и без того некогда всё время смотреть на Урару?',
        ]);
      }
      await urara.print_and_wait([
        'И всё-таки так сложно понять… м? В том углу кто-то свернулся, и цвет лица такой плохой… а! Это ',
        urara.sex,
        '……',
      ]);
      await urara.print_and_wait([
        'Неужели из-за того, что не выиграла G1, так ударило? Урара первый раз видит, чтобы такая волевая ',
        urara.sex,
        ' была такой хрупкой…',
      ]);
      await urara.print_and_wait([
        'Но раз так, тем более нельзя бросать. Хоть я и не смогу, как ',
        callname,
        ' … в общем, сначала подойти и спросить!',
      ]);
      await urara.say_and_wait('Эм, ты в порядке? Где-то больно?');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「…а, Урара… мм, не волнуйся, я в порядке…」',
      ]);
      await urara.say_and_wait(
        'Но по лицу так тяжело! Скоро же концерт, точно ничего?',
      );
      await urara.say_and_wait(
        'Не надо через силу, ладно? Я с тобой, так что пока улыбка не вернётся—',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Сейчас не трогай меня!」',
      ]);
      await urara.say_and_wait('…э? Больно…!');
      await urara.print_and_wait([
        'Протянутую руку отбили ',
        urara.uma_sex_title,
        ' — силой, и по отброшенной тыльной стороне постепенно разлилось жжение.',
      ]);
      await urara.print_and_wait([
        'А когда подняла голову, ',
        urara.sex,
        ' ведь всегда такая улыбчивая ',
        urara.uma_sex_title,
        ', а сейчас показывает мне растерянное и печальное лицо.',
      ]);
      await urara.print_and_wait([
        'И как вообще смотреть на такое лицо? Но если сейчас уйти, ',
        urara.sex,
        ' станет только ещё печальнее.',
      ]);
      await urara.print_and_wait([
        'Всё-таки нельзя уходить. Закусив губу и прикрыв распухшую ноющую правую руку, я присела туда, где ',
        urara.sex,
        ', и стала ждать, когда ',
        urara.sex,
        ' продолжит изливать душу.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Как тут улыбнёшься…!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Я с таким трудом попала на G1, я тоже хочу стоять в самом центре сцены! Такой редкий шанс — а я такая слабая…」',
      ]);
      await urara.print_and_wait(
        'Если кому-то грустно, сначала выслушай, что у него на сердце, — мама всегда так говорила.',
      );
      await urara.print_and_wait([
        'Теперь-то ',
        urara.sex,
        ' должна бы чуть выдохнуть? Но этот профиль — будто уже где-то видела, что это за выражение такое?',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Прости… Урара, я не нарочно так… но мне правда очень трудно улыбнуться…」',
      ]);
      await urara.say_and_wait(
        'Нет, Урара совсем не чувствует боли! Ты правда в порядке?',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「…Да где на Ураре видно, что не больно, лицо же такое, будто вот-вот расплачется…」',
      ]);
      await urara.say_and_wait('Э? Правда… нет! Урара правда в порядке!');
      await urara.print_and_wait([
        'Ну да, больно — это да… может, не настолько! Но, кажется, увидев моё лицо, ',
        urara.sex,
        ' — и дрожащие уголки губ тоже понемногу поднялись.',
      ]);
      await urara.print_and_wait(
        'Цель Урары вроде достигнута, но разве этого хватит, чтобы рассмешить сквозь слёзы? Выражение Урары…',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Я не про это… но я в порядке, когда выйдем на сцену, я смогу нормально улыбнуться.」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Урара всегда готова меня выслушать, и в этот раз тоже спасибо, так что и ты перед выходом на сцену поправь лицо!」',
      ]);
      await urara.say_and_wait(
        'Угу! Ничего! Сколько угодно раз Урара тебя выслушает!',
      );
      await urara.print_and_wait([
        'Сказав спасибо, сама встала — наконец успокоившаяся ',
        urara.sex,
        ' легко подняла и меня.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Да, сколько угодно раз… в следующий раз я точно… встану точно посередине!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Обязательно… ещё будет следующий раз…!」',
      ]);
      await urara.print_and_wait([
        'Сказав 「увидимся чуть позже」, ',
        urara.sex,
        ' словно скрывая что-то, повернулась и ушла.',
      ]);
      await urara.print_and_wait([
        'Но хоть на поверхности всё уже как обычно, ',
        urara.sex,
        ' — спина всё равно будто выкачали все силы, такая тонкая.',
      ]);
      await urara.print_and_wait([
        urara.sex,
        ' — ноги, кажется, затекли от долгого приседания, и эта хромота делает вид ещё более 「потерянным」.',
      ]);
      await urara.print_and_wait([
        'Урара ещё впервые видит ',
        urara.sex,
        ' в таком виде: и то чересчур печальное выражение только что, и эту потерянную спину сейчас, когда уходит,',
      ]);
      await urara.print_and_wait([
        'Впрочем, я наконец вспомнила: ',
        urara.sex,
        ' сейчас выглядит так, будто даже упустив какой-то последний в жизни шанс, всё ещё делает вид, что спокойна…',
      ]);
      await urara.print_and_wait(
        'Всё кажется, будто случилось что-то непоправимое. Это Урара слишком чувствительная?',
      );
      await urara.print_and_wait([
        'Но ',
        urara.sex,
        ' права: скоро ещё выходить на сцену, остальное обдумаю в оставшееся после окончания время!',
      ]);
      await urara.print_and_wait([
        'Шлёпнув себя по щекам, чтобы снова встряхнуться, я тоже повернулась и догнала ',
        urara.sex,
        ' — спину и вместе побежала за кулисы Live.',
      ]);
      await urara.print_and_wait([
        'Под звук уверенных шагов идущая впереди ',
        urara.sex,
        ' вроде снова засияла по-прежнему.',
      ]);
      await urara.print_and_wait(
        'Урара обозналась? Точно я слишком чувствительная… угу, точно так…',
      );
      era.drawLine();
      await era.printAndWait([
        'Сегодняшний Live прошёл весьма гладко. Обойдя из-за кулис сцены к зрительским местам, где сидят все с торговой улицы и из клуба поддержки, ',
        you.get_colored_name(),
        ' с отрадой думает.',
      ]);
      await era.printAndWait([
        'Вот именно: какое бы место ни занять в забеге, на какой бы позиции ни стоять, ',
        urara.get_colored_name(),
        ' всё равно может показать всем свою самую лучшую улыбку.',
      ]);
      await era.printAndWait([
        'Потому-то все так и любят ',
        urara.get_colored_name(),
        ', все любят даже когда проиграет, даже когда не выиграет, всё равно полную сил улыбающуюся ',
        urara.sex,
        '.',
      ]);
      await era.printAndWait([
        'И пусть получается не каждый раз, но нынешняя ',
        urara.sex,
        ' бесспорно уже обладает силой выигрывать скачки.',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы A「…Урара ',
        urara.sex,
        ', правда очень старалась, прежнее беспокойство, кажется, можно отпустить.»',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы B「Да, даже если в душе думаешь, лишь бы ',
        urara.sex,
        ' была счастлива — и ладно, ',
        urara.sex,
        ' потом только эти мысли и будут путаться под ногами.»',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы C「Нынче маленькая Урара уже выросла, как раз и я хочу на ',
        arim_kin,
        ' поглядеть, как ',
        urara.sex,
        ' улыбается.»',
      ]);
      await era.printAndWait([
        'Сзади, украдкой склонив ухо, те, кто болеет за ',
        urara.get_colored_name(),
        ' — все тоже, поглядывая на концерт, о чём-то говорят.',
      ]);
      await era.printAndWait([
        'Впрочем, похоже, ',
        you.get_colored_name(),
        ' — стратегия постепенно сбывается: стоит лишь держаться, и те, кто поддерживает ',
        urara.get_colored_name(),
        ' — люди со временем признают ',
        urara.sex,
        ' — движение вперёд.',
      ]);
      await era.printAndWait([
        'Трудности сами собой разрешаются, не успеешь заметить… Ладно, сначала запишу это и по возвращении украдкой поделюсь с ',
        urara.get_colored_name(),
        ' радостной вестью.',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы A「Впрочем, последняя цель Урары вроде ',
        arim_kin,
        ', а отбор на ту скачку вроде довольно строгий.»',
      ]);
      await era.printAndWait(
        'Человек с торговой улицы C「Но нет ли чего, чем мы могли бы помочь? Просто смотреть на маленькую Урару — на сердце неспокойно.»',
      );
      await era.printAndWait(
        'Человек с торговой улицы D「На самом деле, у меня как раз есть идея — вроде того, что мы когда-то делали, чтобы возродить торговую улицу…」',
      );

      if (join_arim_kin_c) {
        await era.printAndWait(
          'Человек с торговой улицы C「Мол, в единстве сила, да? Но Урару уже один раз отбирали, разве ещё нужно?»',
        );
        await era.printAndWait(
          'Человек с торговой улицы D「Может, мы и правда слишком переживаем, но лучше по возможности избежать сюрпризов, всё-таки это тот ещё ребёнок…」',
        );
      }
      await era.printAndWait(
        'Хм? И о чём это они? Неужели все что-то затевают за спиной?',
      );
      await era.printAndWait([
        'Интуиция подсказывает ',
        you.get_colored_name(),
        ' это дело важное, но когда ',
        you.get_colored_name(),
        ' хочет подобраться послушать, поднимает голову — а Live уже вот-вот закончится.',
      ]);
      await era.printAndWait([
        'Хоть и очень любопытно, о чём все толкуют, но чтобы вовремя проверить ',
        urara.get_colored_name(),
        ' — состояние, ',
        you.get_colored_name(),
        ' всё же сразу спешит в комнату отдыха.',
      ]);
      await era.printAndWait([
        'Будь то на сцене ',
        urara.get_colored_name(),
        ' едва заметная неполная улыбка, 「',
        urara.sex,
        ' 」 то и дело мелькает, или тот мрачный ',
        urara.child_sex_title,
        '.',
      ]);
      await era.printAndWait(
        'Теперь даже чужие разговоры за спиной вселяют какую-то тревогу. Что такое, почему в последнее время так всё задевает?',
      );
      await era.printAndWait(
        'Всё чуется, будто в какой-то день в будущем что-то случится. Хоть бы это были пустые тревоги…',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('Можно просто поболтать?');
      await inner_urara.say_as_unknown_and_wait([
        'Кстати, тренер ',
        you.adult_sex_title,
        ' (вы) прекрасно знаете: ',
        urara.uma_sex_title,
        ' накопленные в беге травмы трудно излечить.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Из-за врождённого строения тела и некоторых особенностей конституции, а ещё из-за множества явлений, которые пока не объяснить.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Плюс профессиональным спортсменам часто приходится выходить за предел нагрузки тела, и полученные так травмы в обычных условиях почти не вылечить.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Почему вдруг зашёл этот разговор? Ничего, просто внезапно подумалось, что Урара, кажется, всё это время была очень везучей.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Продолжайте хорошо заботиться — ',
        urara.sex,
        ' О, не позволяйте, чтобы ',
        urara.sex,
        ' тоже стала одной из тех, кто затерялся по дороге…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_95_14: (() => {
    const title = 'Фестиваль благодарности фанатам!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     */
    const f = async (urara, inner_urara, you, callname, join_arim_kin_c) => {
      await era.printAndWait([
        'На краю зрительских мест ',
        you.get_colored_name(),
        '  как всегда ждёт с другого конца поля маленькую ',
        urara.uma_sex_title,
        ' покачиваясь, подходит к ',
        you.get_colored_name(),
        '  ближе.',
      ]);
      await era.printAndWait([
        'Сегодня фестиваль благодарности фанатам, а ',
        urara.get_colored_name(),
        '  — ',
        urara.sex,
        ' пускает в ход избыток энергии и под общим подбадриванием участвует в самых разных состязаниях.',
      ]);
      await era.printAndWait([
        'Впрочем, даже если намерение доброе, на деле решает не намерение — совсем как перед ',
        you.get_colored_name(),
        '  эта готовая свалиться от усталости маленькая ',
        urara.uma_sex_title,
        '.',
      ]);
      await urara.say_and_wait([
        'Фух, фух… ',
        callname,
        '!Я всё пробежала, вот… забег с покрышкой! Хоть и последняя — !',
      ]);
      await urara.say_and_wait(
        'Аха-ха～ На тренировках-то уже столько раз бегала, а большая покрышка всё равно такая тяжёлая!',
      );

      era.printButton('「М-м, потрудилась, я всё видел(а).」', 1);
      await era.input();

      await era.printAndWait([
        'По правде, не только в забеге с покрышкой, ',
        urara.get_colored_name(),
        '  за весь заход почти ни разу не попала в тройку.',
      ]);
      await era.printAndWait([
        'Даже на собственном фестивале благодарности фанатам маленькая ',
        urara.uma_sex_title,
        ' всё равно блюдёт — ',
        urara.sex,
        ' традиционное правило 「вне настоящих скачек не выиграть」.',
      ]);
      await urara.say_and_wait(
        'Ну, хоть победить опять не вышло, с всеми вместе бежать — и правда весело!',
      );
      await era.printAndWait([
        'Смахнув пот с лица, ',
        urara.get_colored_name(),
        '  улыбается и машет только что вместе бежавшим ',
        urara.uma_sex_title,
        ' фанатам, и заодно стягивает ленту для волос и нагрудный номер.',
      ]);
      await era.printAndWait([
        'Хоть апрельская погода ещё не то чтобы тёплая, но для только что закончившей бег ',
        urara.get_colored_name(),
        '  всё равно немного душно.',
      ]);
      await era.printAndWait([
        'Когда пропитанные потом розовые длинные волосы распускаются, у маленькой ',
        urara.uma_sex_title,
        ' по телу словно тоже веет дивный свежий аромат с гормонами юности.',
      ]);
      await era.printAndWait([
        'Края промокшей и оттого стянувшейся гимнастической формы впиваются в ещё не раскрывшееся тело — ',
        urara.teen_sex_title,
        ' вот-вот расцветёт — и прорисовывают все изгибы: ',
        urara.sex,
        ' юная, но уже пышная, мясистая.',
      ]);
      await era.printAndWait([
        'А стоило снять прикрытие нагрудного номера, как пропитанная водой и оттого полупрозрачная на солнце одежда ещё расплывчатее выдаёт ',
        urara.teen_sex_title,
        ' — довольно соблазнительный контур…',
      ]);
      await era.printAndWait([
        'И вот, под горячими взглядами вокруг и объективами с нечистыми побуждениями, ',
        you.get_colored_name(),
        '  молча накидывает куртку на беззащитные плечи маленькой ',
        urara.uma_sex_title,
        '.',
      ]);

      urara.say([
        'Э? У меня же сейчас всё тело в поту? Испачкаю ',
        callname,
        '  — куртку!',
      ]);
      era.printButton(
        '「Ничего, к тому же сейчас ещё не так тепло: если Урара простудится — будет плохо.」(расположение+10)',
        1,
      );
      era.printButton(
        '「Так нельзя, я же не могу позволить, чтобы тело моей подопечной кто попало разглядывал.」(влюблённость+2)',
        2,
      );
      const ret = await era.input();
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          'Сдерживая сердце, что так и колотится рядом с этой невольно разливающей соблазн 「маленькой взрослой」, ',
          you.get_colored_name(),
          '  качает головой перед ',
          urara.get_colored_name(),
          ' .',
        ]);
        await era.printAndWait(
          'Пусть фанаты и без умысла, но перед столькими людьми ни капли осторожности — а что потом, когда останется одна…',
        );
        await urara.say_and_wait([
          'Э? Это потому что тело Урары могут увидеть чужие, поэтому ',
          callname,
          '  нервничает…?',
        ]);
        await era.printAndWait([
          'Услышав ',
          you.get_colored_name(),
          '  — ответ, нарочно прижавшись мягким телом к ',
          you.get_colored_name(),
          ', маленькая ',
          urara.uma_sex_title,
          ' красными щеками застенчиво и соблазнительно трётся о ворот куртки.',
        ]);
        await urara.say_and_wait([
          'Ничего, Урара тело только важным людям показывает, да? И ещё… здесь весь ',
          callname,
          '  — запах～',
        ]);
        await era.printAndWait([
          'Стараясь не смотреть на милую улыбку маленькой возлюбленной, изо всех сил сдерживая порыв сразу утащить — ',
          urara.sex,
          ' за кулисы и там заняться ласками, ',
          you.get_colored_name(),
          '  скованно возвращает разговор к забегу.',
        ]);
      } else {
        await urara.say_and_wait([
          'Да? Хе-хе～ Я даже не заметила! Но у Урары есть ',
          callname,
          '  рядом, так что бояться нечего!',
        ]);
        await era.printAndWait([
          'Тихо прижимая ладонью сбившийся ритм сердца, ',
          you.get_colored_name(),
          '  легонько хлопает маленькую ',
          urara.uma_sex_title,
          ' по макушке. На волоске — ещё немного, и можно влюбиться в ',
          urara.get_colored_name(),
          ' .',
        ]);
        await era.printAndWait([
          'Не говоря уже о том, как уберечь от бесстыдного подглядывания ',
          urara.get_colored_name(),
          ', если даже тренер влюбится в беззащитный вид подопечной — это уже совсем плохо.',
        ]);
        await era.printAndWait([
          'Стараясь с едва не бросившейся обниматься ',
          urara.get_colored_name(),
          '  держать дистанцию, ',
          you.get_colored_name(),
          '  и ',
          urara.sex,
          ' тоже говорят о ходе дальнейшей программы.',
        ]);
      }
      era.printButton(
        '「Кстати, дальше вроде ещё забег, всё нормально? Может, ещё отдохнёшь?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Даже если ',
        urara.get_colored_name(),
        '  — тело как ни крепко, нагрузка от забегов подряд всё равно слишком велика, так что ',
        you.get_colored_name(),
        '  предлагает, чтобы ',
        urara.sex,
        ' ещё немного отдохнула.',
      ]);
      await urara.say_and_wait(
        'Не надо, все же ждут меня, да и сегодня фестиваль благодарности фанатам, так что пусть Урара набегается вволю!',
      );
      await era.printAndWait([
        'Хоть и поняла ',
        you.get_colored_name(),
        '  — тревогу, но готовая к следующему забегу маленькая ',
        urara.uma_sex_title,
        ' всё равно с улыбкой снова суёт куртку ',
        you.get_colored_name(),
        '  — в руки.',
      ]);
      await urara.say_and_wait(
        'И следующая гонка — это 『грунтовая гонка』, да? Хоть и измажемся сильно, Урара точно не поранится!',
      );
      await urara.say_and_wait([
        'И раз это грунт, то когда Урара добежит, ',
        callname,
        '  только больше не накидывай пальто, ладно?',
      ]);
      await era.printAndWait([
        'Затем, снова развернувшись и рванув к дорожке, ',
        urara.get_colored_name(),
        '  снова машет — и едва ',
        urara.sex,
        ' вскидывает руку, все, кто за неё болеет, разражаются ликованием.',
      ]);
      await era.printAndWait([
        'Каждый раз, когда ',
        urara.get_colored_name(),
        '  выходит на состязание, фанаты вспыхивают, и все будто любуются ',
        urara.sex,
        ' — тем, как она не сдаётся, сколько бы раз ни проиграла.',
      ]);
      await era.printAndWait([
        'Если подумать, может, и без нарочного акцента ',
        urara.sex,
        ' спокойно пройдёт порог поддержки фанатов для участия в Arima Kinen.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вы всё же беспокоитесь, да? Атмосфера любви к Ураре всё жарче, но ',
        urara.sex,
        ' всё ещё ничего не понимает?',
      ]);
      await era.printAndWait([
        'В вдруг замедлившемся серо-белом мире ',
        you.get_colored_name(),
        '  — рядом снова раздался уже такой знакомый, что почти можно принять за 「родителя подопечной」, голос.',
      ]);

      era.printButton(
        '「Не волноваться невозможно, но это и так была грязная дорога, да и уверенности мне тоже не занимать.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Да, глядя на Урару, что сейчас собралась всерьёз, даже у меня появилась лишняя уверенность.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'К тому же ',
        urara.sex,
        ' вроде вот-вот победит; в неофициальной гонке так серьёзно — будто сегодня в первый раз?',
      ]);
      await era.printAndWait([
        'В замедленном кадре — на тяжёлом грунте, где летит грязь, стиснув зубы держит лидирование маленькая ',
        urara.uma_sex_title,
        ', и даже суровая ',
        urara.sex,
        ' чуть поднимает уголки губ.',
      ]);
      await era.printAndWait([
        'Впрочем, задумчиво окинув взглядом трибуны, ',
        urara.teen_sex_title,
        ' — лицо снова заволакивает серьёзная тень, и она решает развернуться и уйти.',
      ]);

      era.printButton(
        '「Почему сегодня так спешишь, не подождёшь ещё немного, прежде чем уйти? Хотя бы увидишь, как Урара выиграет.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Потому что говорить особенно нечего: 『ошибочная доброта ещё труднее зла』, сегодня я лишь затем и пришла, чтобы сказать вам это.',
      );
      await era.printAndWait([
        'Не оборачиваясь, будто ни о чём, с ',
        you.get_colored_name(),
        '  переговаривается, и та розово-серая ',
        urara.get_colored_name(),
        '  как и прежде исчезает без следа.',
      ]);
      await era.printAndWait([
        'Когда остановленное время снова нажимает воспроизведение и взлетевшая грязь падает, ',
        urara.get_colored_name(),
        '  первой проносится через финиш.',
      ]);
      await era.printAndWait([
        'Страстный комментарий поля и овации зрителей звучат вместе: выложившись до конца, маленькая ',
        urara.uma_sex_title,
        ' снова успешно заводит зал.',
      ]);
      await urara.say_and_wait(
        'Все — дальше я тоже буду изо всех сил бежать и выигрывать дальше —!',
      );
      await era.printAndWait('Зрители「ооооо——!!」');
      if (join_arim_kin_c) {
        await era.printAndWait([
          'Если так можно и дальше копить фанатов, то и до мечты превзойти Arima станет на шаг ближе, ',
          urara.get_colored_name(),
          '  оттого, видно, и собралась всерьёз.',
        ]);
        await era.printAndWait([
          'Но как「',
          urara.sex,
          ' 」перед уходом сказала, внимательно следя за реакцией зрителей, ',
          you.get_colored_name(),
          '  тоже чувствует, что в нынешней атмосфере что-то не так.',
        ]);
        await era.printAndWait([
          'Часть зрителей「Урара всё такая милая… кстати, ',
          urara.sex,
          ' уже один раз участвовала в Arima Kinen, да?」',
        ]);
        await era.printAndWait(
          'Часть зрителей「И всё благодаря системе голосования фанатов, а у Урары правда будет второй шанс попасть на Arima?」',
        );
        await era.printAndWait(
          'Часть зрителей「Так ведь достаточно просто попасть, нет? Лишь бы Урара была рада — разве не так?」',
        );
        await era.printAndWait(
          'Часть зрителей「М-м… тогда у группы поддержки Урары на торговой улице вроде какое-то мероприятие, пойдём вместе глянем…」',
        );
        await era.printAndWait(
          'Тц, то есть даже сейчас куча сторонников до сих пор не воспринимает всерьёз, что「Урара тоже хочет победы」.',
        );
      } else {
        await era.printAndWait([
          'Если так можно и дальше копить фанатов, то и до мечты попасть на Arima станет на шаг ближе, ',
          urara.get_colored_name(),
          '  оттого, видно, и собралась всерьёз.',
        ]);
        await era.printAndWait([
          'Но как「',
          urara.sex,
          ' 」перед уходом сказала, внимательно следя за реакцией зрителей, ',
          you.get_colored_name(),
          '  тоже чувствует, что в нынешней атмосфере что-то не так.',
        ]);
        await era.printAndWait(
          'Часть зрителей「Урара так популярна, и правда потому что милая —」',
        );
        await era.printAndWait([
          'Часть зрителей「',
          urara.sex,
          ' вроде говорила, что хочет на Arima Kinen; при такой популярности, если пустить в ход голосование фанатов, может, и правда попадёт.」',
        ]);
        await era.printAndWait([
          'Часть зрителей「Голосование… я, наверное, тоже проголосую за то, чтобы ',
          urara.sex,
          ' прошла, всё-таки ',
          urara.sex,
          ' такая милая, да и я хочу увидеть, как ',
          urara.sex,
          ' выйдет на Arima.」',
        ]);
        await era.printAndWait(
          'Часть зрителей「Почти как я и думал(а); тогда у группы поддержки Урары на торговой улице вроде мероприятие, пойдём вместе глянем…」',
        );
        await era.printAndWait([
          'Непонятно почему, ',
          you.get_colored_name(),
          '  всё равно чувствует: даже сейчас многие сторонники будто из любви потакают ',
          urara.get_colored_name(),
          '.',
        ]);
      }
      await era.printAndWait(
        'И что это такое, этот разговор уже где-то звучал? Все кругом улыбаются, а внутри всё сильнее поднимается тревога…',
      );
      await urara.say_and_wait([
        callname,
        ', ',
        callname,
        '!Все говорят, хотят со мной фото! Считаем до трёх и снимаемся вместе, камеру тебе —!',
      ]);
      await era.printAndWait([
        'Зов подопечной прерывает ',
        you.get_colored_name(),
        '  — мысли. Так рада, что даже грязь с лица не утирает, ',
        urara.get_colored_name(),
        '  с камерой возбуждённо к ',
        you.get_colored_name(),
        '  подбегает.',
      ]);

      era.printButton('「А, хорошо, оставляй мне!」', 1);
      await era.input();

      await era.printAndWait([
        'Напоследок бросив взгляд вслед нескольким зрителям, ',
        you.get_colored_name(),
        '  без сил качает головой, потом с улыбкой принимает ',
        urara.get_colored_name(),
        '  — протянутую камеру—',
      ]);
      await era.printAndWait([
        'Так или иначе, пока ',
        urara.get_colored_name(),
        '  всерьёз блистала, фестиваль благодарности фанатам так благополучно и закрылся.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_15: (() => {
    const title = 'Клуб поддержки · с цепи!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {number|false} febr_sta_rank 二月锦标的名次，false 为未参加过二月锦标
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} febr_sta 二月锦标（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      join_arim_kin_c,
      febr_sta_rank,
      arim_kin,
      febr_sta,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        'Вы говорили, что непременно защитите Урару, верно? Не беспокойтесь, я не сомневаюсь в тренере ',
        you.adult_sex_title,
        ' (вы)',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Просто порой, даже если ',
        urara.sex,
        ' и спрятана за вашей спиной, — как вы потом почините раненую душу?',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Глядя на листовки, что протянули люди с торговой улицы, ',
        you.get_colored_name(),
        '  едва не темнеет в глазах.',
      ]);

      era.printButton(
        '「Это что, неужели тот самый способ, который все придумали?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Человек с торговой улицы「Нм? Что такое, тренер ',
        you.sex_code === 1 ? ' парень' : 'девушка',
        ', а в чём проблема? Даже сама Урара раздаёт, знаешь ли?」',
      ]);
      await era.printAndWait([
        'Дрожа сжимая в руке тонкий листок, ',
        you.get_colored_name(),
        ' изо всех сил сдерживает желание вспылить на месте.',
      ]);
      await era.printAndWait([
        'На листовке напечатано: 「Проголосуйте за ',
        urara.get_colored_name(),
        ' на Arima Kinen», и у тренера ',
        you.get_colored_name(),
        ' настроение почти взорвалось — как от внезапной головной боли.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' Зная, что все действуют из добрых побуждений, и потому не решаясь ничего сказать, ',
        you.get_colored_name(),
        ' ясно понимает и то, что притянутая сюда ',
        urara.get_colored_name(),
        ' скорее всего вообще не соображает, что происходит.',
      ]);
      await era.printAndWait([
        'Но в конце концов, даже если это и не запрещено, способ, который почти перечёркивает старания других ',
        urara.uma_sex_title,
        ', однозначно неверен.',
      ]);

      if (join_arim_kin_c) {
        await era.printAndWait([
          'Кстати, они что, в прошлый раз тоже так делали? И в этот раз ещё и ',
          urara.get_colored_name(),
          ' тоже позвали заниматься таким?',
        ]);
        await era.printAndWait([
          'Дядьки, тётки, ',
          urara.get_colored_name(),
          ' — тренер не то чтобы не понимает ',
          you.get_colored_name(),
          ' искренних стараний, но это не такая простая штука, как акция…',
        ]);
      }
      era.printButton('「…Урара сейчас где?」', 1);
      await era.input();

      await era.printAndWait([
        'Человек с торговой улицы「Нм? Если поискать вдоль улицы, вроде должна попасться… Погоди, ',
        you.sex_code === 1 ? ' парень' : 'девушка',
        ' куда это ты так спешишь?」',
      ]);

      era.printButton(
        '「Прости! Внезапно вспомнилось срочное дело, вещи пока оставлю здесь, заберу, когда вернусь!」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Бросив только что купленные овощи и фрукты вместе с листовкой, ',
        you.get_colored_name(),
        ' после беглого прощания с хозяином лавки сразу протискивается в праздничную толпу торговой улицы.',
      ]);
      await era.printAndWait([
        'По мере того как ',
        urara.get_colored_name(),
        ' — бег шёл в гору, улица тоже выбралась из былой разрухи, но нынешнее процветание неожиданно стало для ',
        you.get_colored_name(),
        ' немалой проблемой.',
      ]);
      await era.printAndWait([
        'И наконец в самом людном месте, ',
        you.get_colored_name(),
        ' издали замечает комок сакурово-розового, со всех сторон обхваченный потоком прохожих.',
      ]);
      await era.printAndWait([
        'Но чувство облегчения не задержалось ни на миг, ',
        you.get_colored_name(),
        ' в толпе видит, как постепенно приближается ещё один человек, и только что успокоившееся сердце снова падает на самое дно.',
      ]);
      await era.printAndWait([
        'Это подруга, что когда-то вместе с ',
        urara.get_colored_name(),
        ' бежала в 「',
        febr_sta,
        ' », но вот ',
        urara.sex,
        ' нынешняя: ноги туго обмотаны тяжёлыми бинтами.',
      ]);
      await era.printAndWait([
        'Словно все её не замечают, с мрачным лицом ',
        urara.sex,
        ' тащит израненные ноги и всё же на удивление ловко обходит толпу.',
      ]);
      await era.printAndWait([
        'А та, что застыла перед ',
        urara.get_colored_name(),
        ' — ',
        urara.sex,
        ', и в бессильно свисающей вдоль тела руке всё ещё сжимает мятую листовку…',
      ]);
      await era.printAndWait([
        'Поняв, что сейчас случится, ',
        you.get_colored_name(),
        ' изо всех сил рвётся сквозь окружившую ',
        urara.get_colored_name(),
        ' толпу, но холодный людской поток, наоборот, уносит всё дальше и дальше.',
      ]);
      await you.say_and_wait(
        'Погоди, только не говори, не так, даже если этого не избежать — подожди—',
      );
      await urara.say_and_wait(
        '—А, давно не виделись! Урара тебя в школе что-то давно не встречала, чем ты последнее время занята?',
      );
      await urara.say_and_wait(
        'А, и ещё ноги… ты поранилась? Когда это вообще…',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「…Ничего, на самом деле всё не так страшно, но Урара, это опять что… чтобы участвовать в 『',
        arim_kin,
        ' 』?」',
      ]);
      await era.printAndWait([
        'Холодно оборвав пыл Урары, подруга со смешанным лицом кладёт листовку перед маленькой ',
        urara.uma_sex_title,
        '.',
      ]);
      await urara.say_and_wait([
        'Нм? Правда? Но все говорят, это связано с Урарой и ',
        arim_kin,
        ' имеет отношение, так что Урара пришла помочь!',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「',
        urara.get_colored_actual_name(),
        ', ты и правда не понимаешь, что делаешь? Это что за шутки…」',
      ]);
      await urara.say_and_wait(
        'Ну, хотя сама тоже не очень понимаю, Урара вроде всем листовки раздаёт?',
      );
      await urara.say_and_wait(
        'Э? Что такое? Тебе правда ничего? У тебя лицо совсем плохое…',
      );
      await era.printAndWait([
        'От разочарования к отчаянию и к срыву — всего несколько секунд, и давшая волю всему тёмному ',
        urara.teen_sex_title,
        ' резко отталкивает подругу, что хотела подойти ближе.',
      ]);
      await era.printAndWait(
        'Следом — звонкая пощёчина и срыв в почти истерический окрик.',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Хватит шутить! Урара, прошу, не веди себя так по-детски! Внимательно посмотри на этот листок! Ты понимаешь, что делаешь?!」',
      ]);
      await era.printAndWait([
        'Под внезапным ударом подруги ',
        urara.get_colored_name(),
        ' вместе с выбитыми из рук листками вразброс оседает на землю.',
      ]);
      await era.printAndWait([
        'В недоверии зажимая пылающую опухшую щёку, растерянные беспомощные слёзы обидой наполняют глаза маленькой ',
        urara.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Но даже если ещё непонятно, в чём же проступок, прорвавшиеся чувства не оставляют даже коротко потерявшей дар речи ',
        urara.sex,
        ' ни крупицы места для оправдания.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Все сейчас стараются ради скачек, в которых хотят бежать… ради скачек, в которых хотят победить! Даже ставят на кон всё!」',
      ]);
      await era.printAndWait([
        'Сквозь слёзы кричит, ',
        urara.teen_sex_title,
        ', и голос, что копился в груди от крушения и обиды, выплёскивается наружу.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「А теперь, Урара, ты вдруг… вдруг правда хочешь чужими руками запросто исполнить мечту…」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Можешь, конечно, сказать, что не знала, но тогда… те, кто сжигает себя, — они тогда кто?!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Раз Урара ради себя готова даже стать обманщицей… тогда уж лучше вообще больше не выходи на скачки!」',
      ]);
      await urara.say_and_wait('…Я не… Урара не такая… прости… но…');
      await era.printAndWait([
        'Сдавленное всхлипывание под осуждением подруги постепенно срывается в тихий плач, и маленькая ',
        urara.uma_sex_title,
        ' — и без того незащищённое сердце больше не удерживает слёзы в уголках глаз.',
      ]);
      await era.printAndWait([
        'Но даже если ',
        urara.get_colored_name(),
        ' хочет оправдаться, сорванное душевным ударом горло не выдавливает ни одной целой фразы.',
      ]);
      await era.printAndWait([
        'А в этой безнадёжной, застывшей паузе раненая ',
        urara.teen_sex_title,
        ' всё же первой смахивает слёзы и молча делает к ',
        urara.get_colored_name(),
        '  шаг……',
      ]);
      await era.printAndWait([
        'Наконец прорвавшись сквозь зевак, которых внезапность случившегося не дала никому решиться остановить, ',
        you.get_colored_name(),
        '  хватает ту протянутую к маленькой ',
        urara.uma_sex_title,
        ' руку за запястье.',
      ]);
      await era.printAndWait([
        'Испугавшись ',
        you.get_colored_name(),
        ' — внезапного поступка, постепенно приходящая в себя ',
        urara.uma_sex_title,
        ' виновато отдёргивает руку и, волоча неуклюжую раненую ногу, возвращается на прежнее место.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Прости, ты тренер Урары? Я просто хотела поднять — ',
        urara.sex,
        ' на ноги……」',
      ]);

      era.printButton(
        '「Раз уж успокоилась — подумай хорошенько: сейчас для Урары ты так же страшна, как те вокруг, кто только глазеет.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Изо всех сил сдерживая гнев, ',
        you.get_colored_name(),
        '  загораживает их собой и протягивает руку назад к дрожащей ',
        urara.get_colored_name(),
        '.',
      ]);

      era.printButton(
        '「Ученица, не то чтобы я не понимаю твоих чувств, но кем ты себя воображаешь, раз сейчас ранишь подругу?」',
        1,
      );
      await era.input();
      era.printButton(
        `「Сорвавшая злость на ни в чём не повинной подруге, ты не имеешь права винить — ${urara.sex}, а сейчас держись от Урары подальше!」(расположение+20)`,
        1,
      );
      era.printButton(
        `「Не думай, что раз ${urara.sex} готова тебя стерпеть, то ${urara.sex} обязана и сносить твои срывы — хватит сцен, сейчас же прочь от Урары!」(влюблённость+5)`,
        2,
      );
      const ret = await era.input();

      await era.printAndWait(
        'То ли её устрашил не до конца сдержанный гнев стоящего перед ней взрослого, то ли донеслись шаги людей с торговой улицы, что спешили сюда.',
      );
      await era.printAndWait([
        'Глядя на дружбу, разбитую её порывом и уже не подлежащую возврату, сломленная ',
        urara.teen_sex_title,
        ' наконец хрипло говорит, зачем на самом деле пришла.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……Прости, я просто хотела перед уходом из Трейсена навестить Урару, а вышло вот так……」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「Я хотела сказать что-то радостное, нормально попрощаться, правда, прости……」',
      ]);
      await era.printAndWait([
        'Сказав это, ',
        urara.teen_sex_title,
        ' волочит тяжёлое тело, поворачивается и уходит — хромающая спина медленно тает в постепенно рассеивающейся толпе.',
      ]);
      await era.printAndWait([
        'А бессильно опираясь на ',
        you.get_colored_name(),
        ' — плечо рядом с собой, крохотная ',
        urara.uma_sex_title,
        ' сейчас не в силах ни догнать ту спину, ни придумать, как удержать.',
      ]);
      await urara.say_and_wait([
        callname,
        ', ',
        urara.sex,
        '…… ',
        urara.sex,
        ' Неужели……',
      ]);
      await era.printAndWait([
        'Только вот связной речи ещё не складывается, но ',
        urara.get_colored_name(),
        '  всё же изо всех сил выдавливает голос и уточняет у ',
        you.get_colored_name(),
        '  слова подруги перед уходом.',
      ]);

      era.printButton(
        `「……Ага, ${urara.sex} — её ноги уже не могут бежать, ${urara.sex} уже…… нет следующего раза, чтобы исполнить мечту.」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        'К сожалению, на этот раз 「больше не увидимся」 — не злая шутка, и ',
        you.get_colored_name(),
        '  тоже не в силах, когда правда уже перед глазами, выдумывать несбыточную надежду.',
      ]);
      if (febr_sta_rank) {
        if (febr_sta_rank === 1) {
          await urara.say_and_wait([
            'Тогда…… ',
            callname,
            ', это Урара…… отняла у неё…… а ',
            urara.sex,
            '…… это Урара……',
          ]);
          await urara.say_and_wait([
            'Тот, кто украл улыбку подруги…… это Урара своими руками…… украла то, чем ',
            urara.sex,
            ' была счастлива……',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            '……это Урара?…… только что это Урара……',
          ]);
          await urara.say_and_wait([
            'это Урара…… растоптала улыбку подруги…… всё это время, что же я……',
          ]);
        }
      }
      era.printButton('「Урара, не говори так, это не твоя вина!」', 1);
      await era.input();

      await urara.say_and_wait([
        'Но даже так…… тогда ',
        urara.sex,
        ' — её улыбка, ',
        urara.sex,
        ' — её счастье…… почему ',
        urara.sex,
        ' столкнулась с таким……',
      ]);
      await urara.say_and_wait(
        'Всё, что делала Урара…… всё было ошибкой?…… Что же нужно, чтобы все могли……',
      );
      await urara.say_and_wait('Если так…… бег Урары…… я…… и скачки тоже……');
      await era.printAndWait([
        'Почти харкая кровью, ',
        urara.get_colored_name(),
        '  каждое слово, что срывается теперь, словно хлещет плетью и отрицает её саму.',
      ]);
      await era.printAndWait([
        'И оттого истекающей кровью оказывается не только ',
        urara.get_colored_name(),
        '  одна, ',
        you.get_colored_name(),
        '  и каждый, кто пришёл сюда ради ',
        urara.get_colored_name(),
        ' , почти задыхается в надломленном голосе маленькой ',
        urara.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Все прекрасно понимают: это не ',
        urara.sex,
        ' — её вина, и весенний ветер, что хочет принести другим надежду, никогда не захочет никого ранить.',
      ]);
      await era.printAndWait([
        'Но сейчас ',
        you.get_colored_name(),
        '  может лишь одно: позволить ',
        urara.get_colored_name(),
        '  спрятаться в объятиях и пока без оглядки излить свою печаль.',
      ]);
      await era.printAndWait([
        'Хотя эта печаль, рождённая другими, с самого начала не должна была принадлежать доброй ',
        urara.sex,
        ', а тем, кто эгоистично и жёстко навязал так называемую 「доброту」 ',
        urara.sex,
        ' — взрослым.',
      ]);
      await era.printAndWait([
        'Человек с торговой улицы「',
        you.sex_code === 1 ? ' парень' : 'девушка',
        ', что теперь делать……」',
      ]);

      era.printButton(
        '「……Короче, что бы вы ни делали, что бы ни сделали — сейчас всё остановите……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Крепче прижимая к себе подопечную, что всё ещё выплакивает печаль, ',
        you.get_colored_name(),
        '  тоже с укором к себе закрывает глаза.',
      ]);
      await era.printAndWait([
        'Если бы тогда получилось прийти хоть немного раньше, может, ',
        urara.get_colored_name(),
        '  смогла бы……',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Акцию торговой улицы с ',
        urara.get_colored_name(),
        '  — рекламу к Arima — в тот же день объявляют прекращённой, ',
        you.get_colored_name(),
        '  тоже уводит ',
        urara.get_colored_name(),
        '  обратно в Трейсен.',
      ]);
      await era.printAndWait([
        'Но даже изо всех сил утешая ',
        urara.get_colored_name(),
        ', маленькая ',
        urara.uma_sex_title,
        ' — разбитое горем лицо всё равно глубоко запечатлелось в сердце каждого.',
      ]);
      await era.printAndWait([
        'Прежний ',
        you.get_colored_name(),
        ' ради того, чтобы ',
        urara.get_colored_name(),
        ' избежала 「опасности», перебрал(а) бессчётное множество вариантов, но от этой незаслуженной беды ',
        urara.sex,
        ' всё равно не ушла.',
      ]);
      await era.printAndWait([
        'Почему непременно ',
        urara.get_colored_name(),
        '? ',
        urara.get_colored_name(),
        ' — что от этого останется в сердце? И что ',
        urara.sex,
        ' снова сделала не так…',
      ]);
      await era.printAndWait([
        'Пока не найдётся способ залечить маленькая ',
        urara.uma_sex_title,
        ' — сердечную рану, многие, верно, не смогут сомкнуть глаз…',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '…Смотрите, чья-то надежда снова разбилась. Пока Урара упрямо рвалась всё изменить, она об этом, верно, и не думала?',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Впрочем, ',
        urara.sex,
        ', верно, снова заставит себя быть как всегда, потому что ',
        urara.sex,
        ' — Урара, ',
        urara.sex,
        ' не хочет слишком обременять других.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Так что до конца истории остаётся лишь пытаться потихоньку починить сердце, что ',
        urara.sex,
        ' носит в груди, — иного пути нет…',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Но история на этом не кончится. Пожалуйста, обязательно дотяните до конца…',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_19: (() => {
    const title = '「Переписка глубокой ночью」';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} rice
     * @param {CharaTalk} halo
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     * @param {PrintedSpan} r_call_u 米浴对春乌拉拉的称呼
     * @param {PrintedSpan} callname_61 圣王光环对玩家的称呼
     * @param {PrintedSpan} h_call_u 圣王光环对春乌拉拉的称呼
     */
    const f = async (
      urara,
      inner_urara,
      rice,
      halo,
      you,
      callname,
      call_30,
      call_61,
      r_call_u,
      callname_61,
      h_call_u,
    ) => {
      const urara_say_in_lines = (content) =>
        era.printAndWait(
          [
            '「',
            ...(Array.isArray(content) ? content : [content]),
            ' 」',
            urara.get_colored_name(),
          ],
          { align: 'right', color: urara.color },
        );
      era.drawLine({ content: '【XX мая 「Урара」 и 「Райс Шауэр」 10:32】' });
      await rice.say_and_wait([
        r_call_u,
        '  у тебя вроде ещё горит «онлайн», ты ещё не спишь?',
      ]);
      era.println();
      await urara_say_in_lines(
        'Ага! В последнее время что-то не спится, и каждый раз, как опомнюсь, уже вот такое время!',
      );
      await urara_say_in_lines([
        'Но уже такой час, ',
        call_30,
        '  у тебя что-то случилось?',
      ]);
      era.println();
      await rice.say_and_wait([
        'Про тот раз, ',
        r_call_u,
        '  всё ещё очень тяжело?',
      ]);
      era.println();
      await urara_say_in_lines([
        'А? Э? Урара вовсе нет-нет, о? ',
        call_30,
        '  почему ты так говоришь?',
      ]);
      era.println();
      await rice.say_and_wait([
        'Потому что ',
        r_call_u,
        '  плохо умеет притворяться. В последнее время совсем без сил, даже что Райс Шауэр каждый день шла за тобой следом — а ты и не заметила, о?',
      ]);
      era.println();
      await urara_say_in_lines('Э, шла следом? Правда? Я совсем не заметила!');
      era.println();
      await rice.say_and_wait([
        'Прости! Ну, потому что ',
        r_call_u,
        '  в последнее время как будто совсем без сил, а я всё никак не находила случая заговорить…',
      ]);
      era.println();
      await urara_say_in_lines([
        'Ничего! И потом ',
        call_30,
        '  ни в чём не виновата, о? Но я и сама не очень понимаю, так что не знаю, как быть.',
      ]);
      await urara_say_in_lines(
        'Я тоже думаю, что так дальше нельзя, но стоит только вспомнить тот день — и слёзы опять готовы политься…',
      );
      era.println();
      await rice.say_and_wait([
        'Прости! ',
        r_call_u,
        '  если правда совсем тяжело, сначала успокойся!',
      ]);
      await rice.say_and_wait([
        'И ещё вот что: Райс Шауэр, конечно, не очень надёжная, но если ',
        r_call_u,
        '  не против, можно послушать, что скажет Райс Шауэр?',
      ]);
      era.println();
      await urara_say_in_lines([
        call_30,
        '  какая спокойная, неужели ',
        call_30,
        '  часто с таким сталкивается?',
      ]);
      era.println();
      await rice.say_and_wait([
        'Ча-часто — это уж нет… Хоть ситуация, может, и не совсем та, но Райс Шауэр тоже говорили такие жестокие слова.',
      ]);
      if (era.get('cflag:30:殿堂') > 0) {
        await rice.say_and_wait([
          r_call_u,
          '  наверняка тоже слышала: когда-то Райс Шауэр нечаянно выиграла скачку, которая для кого-то была очень важна.',
        ]);
        await rice.say_and_wait(
          'И вот, кругом тогда были только разочарованные вздохи, и многие из-за этого злились. Совсем без смысла, да?',
        );
        era.println();
        await urara_say_in_lines([
          'Ага, тогда ',
          call_30,
          '  наверняка было очень обидно…',
        ]);
        era.println();
        await rice.say_and_wait(
          'Прежняя Райс Шауэр и правда была в растерянности, но даже тогда Райс Шауэр не считала себя виноватой.',
        );
        await rice.say_and_wait([
          r_call_u,
          '  наверняка удивлена, но мнение Райс Шауэр с тех пор ни разу не менялось, о?',
        ]);
        await rice.say_and_wait(
          'Вздохи страшные, но если не сдаваться, однажды все всё равно взглянут на тебя как есть.',
        );
        await rice.say_and_wait([
          'Поэтому Райс Шауэр никогда не извинялась за победу: если легко склониться перед упрёками — это предать благословения, которыми все так долго делились.',
        ]);
      } else {
        await rice.say_and_wait([
          r_call_u,
          '  наверняка тоже слышала: Райс Шауэр нечаянно отняла победу, которая для кого-то была очень важна.',
        ]);
        await rice.say_and_wait(
          'И вот, кругом одни разочарованные вздохи, и многие из-за этого злились. Совсем без смысла, да…',
        );
        era.println();
        await urara_say_in_lines([
          'Ага, тогда ',
          call_30,
          '  было очень обидно…',
        ]);
        era.println();
        await rice.say_and_wait([
          'Но Райс Шауэр теперь и вправду всё же победительница, да…',
        ]);
        await rice.say_and_wait([
          r_call_u,
          '  не кажется ли это странным? Но Райс Шауэр и правда так думает, о?',
        ]);
        await rice.say_and_wait(
          'Хоть вздохи чуть не сбили с ног, но если продолжать бежать, незаметно для себя благословений вокруг тоже стало больше.',
        );
        await rice.say_and_wait([
          'Поэтому ради всех, кто благословляет Райс Шауэр, нынешняя Райс Шауэр тоже будет побеждать и дальше, о?',
        ]);
      }
      await rice.say_and_wait([
        'Вот так, ',
        r_call_u,
        '  не надо слишком переживать, о? Так что дальше просто беги как раньше —',
      ]);

      era.drawLine({ content: '【XX мая 「Урара」 и 「Кинг Хэйлоу」 11:01】' });
      await halo.say_and_wait([
        h_call_u,
        ', ещё не спишь в такой час? Если завтра проспишь, ',
        callname_61,
        '  тоже будет несладко, да?',
      ]);
      era.println();
      await urara_say_in_lines(['Но ', call_61, '  тоже ведь не спишь?']);
      era.println();
      if (era.get('cflag:61:殿堂') > 0) {
        await halo.say_and_wait(
          'У меня уже нет такой жёсткой нужды в скачках, о? Сейчас это почти как временно жить в общежитии.',
        );
        await halo.say_and_wait([
          'А вот ты, ',
          h_call_u,
          '. На кровати напротив свет телефона сочится из-под одеяла.',
        ]);
        era.println();
        await urara_say_in_lines([call_61, '  ты злишься…']);
        era.println();
        await halo.say_and_wait([
          'Вовсе нет, просто в последнее время вижу, ',
          h_call_u,
          '  всё время витаешь в облаках. Всё ещё переживаешь из-за тех дней?',
        ]);
      } else {
        await halo.say_and_wait(
          'На самом деле я уже спокойно спала, но оно выдало, о? Свет телефона из-под одеяла.',
        );
        await halo.say_and_wait(
          'Я же говорила: даже если смотришь телефон ночью, не ставь яркость так высоко.',
        );
        era.println();
        await urara_say_in_lines('Прости, о…');
        era.println();
        await halo.say_and_wait([
          'Да не извинения я жду, просто в последнее время ',
          h_call_u,
          '  даже тело своё не бережёшь. Наверное, всё ещё очень тяжело?',
        ]);
      }
      era.println();
      await urara_say_in_lines('Ага, на самом деле—');
      await urara_say_in_lines('——');

      era.drawLine({ content: '【5 мая, XX「Урара」 и 「Кинг Хэйло」11:13】' });
      await urara_say_in_lines(['Вот так, ', call_30, ' так и сказала…']);
      await urara_say_in_lines([
        call_61,
        ', ты сказала, что если я буду ещё стараться, никому не будет грустно?',
      ]);
      await urara_say_in_lines(
        'Если я буду держаться дальше, никто больше не станет думать 『Урара не должна выходить на скачки』?',
      );
      era.println();
      await halo.say_and_wait([
        '…Прости, ',
        h_call_u,
        ', я должна была сказать тебе раньше. И способ Райс Шауэр не совсем подходит к твоей ситуации.',
      ]);
      era.println();
      await urara_say_in_lines(['Э? ', call_61, ', это что значит?']);
      era.println();
      await halo.say_and_wait([
        'Эх… то, что я сейчас скажу, может сделать ',
        h_call_u,
        ' ещё больнее — но, пожалуйста, дослушай до конца.',
      ]);
      await halo.say_and_wait(
        '——Всем никак не может быть не грустно, да? Не все, проиграв, спокойно скажут победителю 『поздравляю』.',
      );
      await halo.say_and_wait([
        'Нынешняя ',
        h_call_u,
        ' уже знает: для огромного большинства ',
        urara.uma_sex_title,
        ' некоторые скачки за всю жизнь бывают лишь раз.',
      ]);
      await halo.say_and_wait(
        'Свалиться на пути к мечте или заблудиться, даже не увидев цели, — такого не счесть.',
      );
      await halo.say_and_wait(
        'Может прозвучать жестоко, но стоит выбрать борьбу за победу — и осчастливить всех уже нельзя.',
      );
      era.println();
      await urara_say_in_lines(['Как так… тогда и Кинг Хэйло тоже?']);
      era.println();
      await halo.say_and_wait(
        'Поэтому я приму чужие проклятия и побегу честно, с гордо поднятой головой, пусть даже это несправедливо.',
      );
      await halo.say_and_wait([
        'Потому что для первоклассной ',
        urara.uma_sex_title,
        ' хотя это и раздражает, чужие пересуды и злоба на самом деле не важны.',
      ]);
      await halo.say_and_wait([
        'Важно, как ',
        urara.sex,
        ' будет смотреть на собственную победу, и ответить может только ',
        urara.sex,
        ' сама.',
      ]);
      await halo.say_and_wait([
        h_call_u,
        ', ты раньше говорила, что хочешь выиграть, да?',
      ]);
      era.println();
      await urara_say_in_lines(
        'Угу. Не только ради всех — теперь Урара тоже хочет побеждать дальше, но случилось такое.',
      );
      era.println();
      await halo.say_and_wait(
        'Раз так — пока оставь как есть. Просто продолжай побеждать с гордо поднятой головой — и ответ обязательно найдётся.',
      );
      await halo.say_and_wait([
        'Поэтому, ',
        h_call_u,
        ' не нужно всё время об этом горевать.',
      ]);
      era.println();
      await urara_say_in_lines([
        call_61,
        ' — слова всегда такие непонятные, ну. Но раз уж ',
        call_61,
        ' уже сказала — Урара тоже попробует!',
      ]);
      era.println();
      await halo.say_and_wait([
        'М-м, спасибо… ',
        h_call_u,
        ' ты точно справишься.',
      ]);
      await halo.say_and_wait([
        'Потому что ты сейчас тоже 『первоклассная Урара』——',
      ]);

      era.drawLine({ content: '【5 мая, XX「Урара」 и 「Урара?」??:??】' });
      await inner_urara.say_as_unknown_and_wait(
        'Опять оно. Так называемые друзья по-прежнему сыплют лишь словами из заботы.',
      );
      era.println();
      await urara_say_in_lines(
        'Так нельзя говорить, ладно? И ты тоже друг Урары.',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait([
        'Я знаю. Но Урара тоже понимает, правда? ',
        urara.couple_title,
        ' на самом деле не может по-настоящему помочь тебе.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Подсмотреть можно, но чужой ответ не списать. Весь этот путь прошли Урара и тренер, разве нет?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но если больно — опереться на меня тоже можно. У меня как раз есть доза 『противоядия』, о?',
      );
      era.println();
      await urara_say_in_lines(
        '…эх-хе-хе~ Опять ты. Хитрая какая — вечно говоришь другу такую жестокую правду.',
      );
      await urara_say_in_lines(
        'И если я соглашусь на твою просьбу — ты тогда правда сможешь улыбнуться по-настоящему?',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        'Разумеется. Я разве не говорила много раз? Счастье Урары — и моё счастье…',
      );
      era.println();
      await urara_say_in_lines(
        'Но если отвечать Ураре — я не сочту твой способ правильным, ясно?',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'А-ха, жаль. Урара снова отказала.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но я правда никогда не хотела ранить Урару. Хоть в этом пусть Урара мне поверит.',
      );
      era.println();
      await urara_say_in_lines(
        'Угу, мы всегда верим друг в друга — поэтому Урара никогда не может согласиться на твою просьбу, ясно?',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        'Как и думала: снова ничего не вышло——',
      );

      era.drawLine();
      await urara.print_and_wait([
        'Вместе со странным треском тока 「',
        urara.sex,
        ' 」 тоже ушла; темнота снова заползла под маленькое одеяло — холодно и тревожно.',
      ]);
      await urara.print_and_wait(
        'Прямо как будто за хвост схватили: если Урара сейчас заснёт — точно приснится кошмар.',
      );
      await urara.print_and_wait([
        'Но если сейчас не уснуть — будут волноваться. Теперь я уже не могу заставлять ',
        callname,
        ' волноваться!',
      ]);
      await urara.say_and_wait([callname, ', ', callname, '……'], true);
      await urara.print_and_wait(
        'Смахнув каплю, что тихо готовилась прыгнуть с уголка глаза, под туго укутавшим одеялом только что отложенный телефон ещё хранит тепло.',
      );
      await urara.print_and_wait(
        'За это могут отчитать, и завтра, глядишь, не высплюсь и не смогу бежать, но…',
      );
      await urara.print_and_wait(
        'С этой последней капризностью на вечер я складываю уши и в темноте снова зажигаю квадратный экран величиной с ладонь.',
      );
      await urara.print_and_wait([
        'Не чат и не что-то ещё… Звонить так поздно точно побеспокоит ',
        callname,
        ' — ещё, глядишь, и Кинг Хэйло рассердится.',
      ]);
      await urara.print_and_wait([
        'Но пожалуйста, пусть даже отчитают — я хочу прямо сейчас увидеть ',
        callname,
        ', Урара хочет прямо сейчас услышать ',
        callname,
        ' — голос!',
      ]);
      await urara.print_and_wait([
        'Поэтому, ',
        callname,
        ', пожалуйста, возьми трубку——',
      ]);
      era.drawLine({
        content: `【5 мая, XX「Урара」 и 「${callname} 」11:50】`,
      });
      await urara_say_in_lines('——');
      await urara_say_in_lines([callname, ', ты ещё здесь?']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Начало летних сборов (выпускной год)';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        'Хотя это уже было однажды, маленькая ',
        urara.uma_sex_title,
        ' всегда растёт.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'В одну реку не входят дважды; стоящая на том же пляже ',
        urara.sex,
        ' тоже будет другой, правда?',
      ]);
      era.drawLine();
      await era.printAndWait([
        'С сегодняшнего дня — летние сборы третьего года, ',
        you.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' — подопечная снова приехали к морю на сборы.',
      ]);
      await era.printAndWait([
        'Широкая морская гладь всегда уносит тревоги путника, ',
        urara.get_colored_name(),
        ' наконец хоть ненадолго перестала силой тащить себя.',
      ]);
      await era.printAndWait([
        'И хотя свежесть первого раза на песке уже пропала, маленькая ',
        urara.uma_sex_title,
        ' по-прежнему любит под солнцем радостно смотреть вдаль.',
      ]);
      await era.printAndWait([
        'Под полуснятой курткой — тёмно-синий школьный купальник; намокшая, обтянувшая тело ткань обрисовывает ',
        urara.sex,
        ' — нежные, но здоровые и пышные изгибы тела;',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          'Натянутые купальником груди тяжёлыми мешками свисают на хрупком теле — ',
          urara.sex,
          ' вся соблазнительно покачивается: и грудь, и чрезмерно развитая пышная ягодичная плоть;',
        ]);
        await era.printAndWait([
          'маленькая ',
          urara.uma_sex_title,
          ' пышная плоть неохотно извивается под не слишком сидящей обтягивающей тканью, мягкая грудная плоть печатает впереди два маленьких бугорка;',
        ]);
      }
      await era.printAndWait([
        'Розовые уши и хвост естественно взмахивают на солнце, распущенные пряди на морском ветру мягко скользят по плечам — ',
        urara.sex,
        ' совсем миниатюрная.',
      ]);
      await era.printAndWait([
        'Возможно, солнце ударило в глаза, и на миг ',
        you.get_colored_name(),
        ' даже не осмеливается узнать в том силуэте ',
        you.get_colored_name(),
        ' — ',
        urara.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([callname, ', я тут, о!']);
      await era.printAndWait([
        'Заметив ',
        you.get_colored_name(),
        ' — взгляд, маленькая ',
        urara.uma_sex_title,
        ' шлёпает по воде от границы волн и пляжа к ',
        you.get_colored_name(),
        ' бежит, оставляя позади цепочку мелких следов.',
      ]);
      await era.printAndWait([
        'Остановившись перед ',
        you.get_colored_name(),
        ', просто откидывает рассыпавшиеся спереди вишнёвые волосы за плечо, ',
        urara.get_colored_name(),
        ' — цветки в зрачках мягко сияют на солнце.',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        'Зреющий нрав и всё ещё наивно-детское лицо, как чай с молоком в одной чашке, начинают в ',
        you.get_colored_name(),
        ' — глазах клубиться и сливаться.',
      ]);
      await era.printAndWait([
        urara.sex,
        'Это она… стала как маленькая взрослая?',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          callname,
          '!В этот раз ты чуть поздновато, ну? Урара ещё с утра всё собрала!',
        ]);
        await era.printAndWait([
          'Полная задора, подбежала к ',
          you.get_colored_name(),
          ' — боку, откинувшая распущенные волосы за плечо маленькая ',
          urara.uma_sex_title,
          ' с лёгким смешком тянет ',
          you.get_colored_name(),
          ' — руку.',
        ]);
        await urara.say_and_wait(
          'Потом ещё важный заезд, надо хорошенько постараться! Так что давай уже тренироваться!',
        );
      } else {
        await urara.say_and_wait([
          'И не думала, что в этот раз бездельничать захочет как раз ',
          callname,
          ' же? В этот раз я тебя заждалась, ну!',
        ]);
        await era.printAndWait([
          'Вбегает мелкой трусцой и встаёт к ',
          you.get_colored_name(),
          ' — боку, ',
          urara.get_colored_name(),
          ' с улыбкой хватает ',
          you.get_colored_name(),
          ' — запястье и сразу ведёт к Тренировочному полю.',
        ]);
        await urara.say_and_wait(
          'Потом ещё очень важный заезд, так что в этот раз можно и пожестче, ну?',
        );
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        ' сейчас всё настоящее без подделки, хотя то, как ',
        urara.sex,
        ' держится духом, всё ещё тревожит, но чтобы ответить на ожидания подопечной, как ',
        callname,
        ' остаётся только поднажать.',
      ]);
      await era.printAndWait([
        'Лишь ощущая сейчас прижатую к руке настоящую и мягкую плоть, ',
        you.get_colored_name(),
        ' — в мозгу что-то тоже вот-вот порвётся.',
      ]);
      await era.printAndWait([
        'Наивная ',
        urara.sex,
        ' когда это стала такой「соблазнительной」? Что-то даже накатывает…',
      ]);

      if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          'А ещё когда останемся вдвоём, Урара может чуть-чуть понадеяться на ',
          callname,
          ' — как себя покажешь?',
        ]);
        await era.printAndWait('Это… пока воздержусь.');
        await era.printAndWait([
          'Не хватает смелости встретить ',
          urara.get_colored_name(),
          ' — жаркий взгляд и соблазнительную плоть, ',
          you.get_colored_name(),
          ' бросает уклончивый взгляд на дальнее море…',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_elm_sta_s: (() => {
    const title = 'Навстречу Elm Stakes!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait([
        'Сквозь толпу, стоя в последнем ряду зрительских мест у трассы, ',
        you.get_colored_name(),
        ' под тусклым небом молча стоит на самом верху трибун вместе с ещё одной вишнёво-розовой.',
      ]);
      await era.printAndWait([
        'Картина в глазах всё ещё дрожит, будто в замедленной съёмке, но 「',
        urara.sex,
        '」 давно привычна, и ',
        you.get_colored_name(),
        ' лишь спокойно ждёт предстоящего разговора.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'В тот вечер о чём говорили вы и ',
        urara.sex,
        '?',
      ]);
      await era.printAndWait([
        'Словно наконец не выдержав раздражения от отсутствия темы, мрачная вишнёво-розовая задаёт ',
        you.get_colored_name(),
        ' неожиданный вопрос.',
      ]);

      era.printButton(
        `「Уже три месяца, а ты всё ещё не знаешь; ты не ${urara.sex} — 『самый близкий』 друг?」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        'Слова ещё не стихли, как взгляд, будто желающий просверлить насквозь, сразу вонзается в ',
        you.get_colored_name(),
        ', но в конце ',
        urara.sex,
        ' всё же притворяется, будто всё равно, и отворачивает голову в сторону.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '…Ладно, не хотите говорить — и не надо, мне и не обязательно знать.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'А в этот раз ты вдруг не с Урарой? Не пойдёшь, как раньше, туда, где ',
        urara.sex,
        ', — проводить её, пока ',
        urara.sex,
        ' не ушла?',
      ]);

      era.printButton(
        '「Потому что Урара сказала, что хочет побыть одна, да и у меня тут свои планы. Будешь смотреть до конца?」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Не надо, вы ещё думаете, что у меня такое терпение?',
      );

      era.printButton('「Вот как жаль.」', 1);
      await era.input();

      await era.printAndWait([
        'Пока голос сбоку уходит, даже не обернувшись, глядя на небо, которому возвращается цвет, ',
        you.get_colored_name(),
        ' беспомощно качает головой.',
      ]);
      await era.printAndWait([
        'Погода-то вроде ничего, так почему, стоит другой ',
        inner_urara.get_colored_name(),
        ' оказаться здесь, всё становится серым-серым?',
      ]);
      await era.printAndWait([
        'Впрочем, даже будь ещё учтивее, ',
        urara.sex,
        ' — характер всё равно такой же скверный, так что дальше, пожалуй, и правда не лучше, чем ',
        urara.sex,
        '.',
      ]);
      await era.printAndWait([
        'Сверив время выхода участниц, ',
        you.get_colored_name(),
        ' подаёт сигнал стоящим в переднем ряду「всем」—',
      ]);

      era.drawLine();
      await urara.print_and_wait(
        'Вот-вот входить. А какое же сейчас своё состояние?',
      );
      await urara.print_and_wait(
        'С телом проблем не было, Урара тоже хочет бежать, но всё равно встаёт же — грустное лицо подруги…',
      );
      await urara.print_and_wait([
        'Нерешительно ступает в свет за тоннелем, по привычке оборачивается махнуть рукой — и видит, что ',
        callname,
        ' рядом нет.',
      ]);
      await urara.print_and_wait([
        'Ну да, это Урара сказала, что в этот раз сама тоже справится, так что и ',
        callname,
        ' тоже прогнали, но так и не успокоилась…',
      ]);
      await urara.print_and_wait(
        'Да и все остальные тоже не здесь: в забеге в одиночку всё будто чего-то не хватает, но сейчас уже некогда думать.',
      );
      await urara.print_and_wait(
        'Но когда Урара вышла на трассу, навстречу хлынувшему снаружи свету, она снова услышала до боли знакомые крики поддержки:',
      );
      await urara.print_and_wait([
        'Те самые, что звучат на каждом забеге, — от всех, от ',
        callname,
        ' — голос.',
      ]);
      await era.printAndWait('Болельщики「Эй—Урара—!」');
      await urara.print_and_wait(
        'Ошиблась слухом? Но голоса будто совсем рядом, такие ясные — вряд ли это галлюцинация.',
      );
      await urara.print_and_wait(
        'Только когда Урара глянула в ту сторону, откуда шла «галлюцинация», фантазия, на которую уже не смела надеяться, мигом стала явью.',
      );
      await urara.print_and_wait(
        'Под поднятым баннером поддержки знакомые все с теми же знакомыми улыбками ждали Урару совсем рядом.',
      );
      await era.printAndWait('Болельщики「Эй—Урара—сюда—!」');
      await urara.say_and_wait(
        'А? Это все… подождите, здесь же вроде Хоккайдо, да!? Как они——',
      );
      await urara.print_and_wait(
        'Словно сквозь шум прочитали сомнение Урары, все, кто её поддерживает, принялись каждый по-своему говорить ей то, что на сердце.',
      );
      await era.printAndWait(
        'Болельщики「Хоккайдо это или куда угодно — если Ураре нужна помощь, мы примчимся!」',
      );
      await era.printAndWait(
        'Люди с торговой улицы「И ещё—Урара, прости!Раньше мы только и твердили, что рады уже тому, что видим, как Урара бежит…」',
      );
      await era.printAndWait(
        'Люди с торговой улицы「Но это же вообще не доверие к Ураре, и за поддержку такое не считается!」',
      );
      await urara.print_and_wait(
        'Да ведь всё нормально, Ураре достаточно просто бежать дальше, даже без этого все бы всё равно…',
      );
      await era.printAndWait(
        'Люди с торговой улицы「Но теперь иначе…!Урара, побеждай же, ты обязательно должна победить!」',
      );
      await urara.say_and_wait('……!');
      await era.printAndWait(
        'Болельщики「Давай же, Урара!На тебе же наши мечты!」',
      );
      await era.printAndWait(
        'Болельщики「Покажи нам, как Урара бежит за первое место!」',
      );
      await urara.print_and_wait(
        'Сейчас каждый, кто поддерживает Урару, улыбается той улыбкой, которой почти не было с тех пор, и по-настоящему благословляет Урару, выбравшую бежать.',
      );
      await urara.print_and_wait([
        'А на самом краю всеобщей поддержки — ',
        callname,
        ' изо всех сил машет рукой в толпе.',
      ]);

      era.printButton('「Урара!Улыбку!Забыла взять с собой!」', 1);
      await era.input();

      await urara.print_and_wait(
        'Улыбку… точно, что-то же забыла, получается, сегодняшняя Урара забыла улыбку?',
      );
      await urara.print_and_wait(
        'Точно!Все по-прежнему ждут Урару, даже если ещё что-то не решено, хотя бы ради этого мига Урара ещё не может остановиться.',
      );
      await urara.say_and_wait(
        '…Ага!Урара поняла, Урара — победит, вот все и увидят!',
      );
      await urara.print_and_wait(
        'И чтобы ответить на ожидания всех, Урара тоже крикнула в их сторону благодарность.',
      );
      await urara.print_and_wait([
        'Урара вернула улыбку? Сама себя Урара не видит, но судя по облегчённым лицам всех и ',
        callname,
        ' —',
      ]);
      await urara.print_and_wait(
        'Нынешняя Урара, должно быть, снова несёт на себе ожидания всех!',
      );
    };
    f.title = title;
    return f;
  })(),
  elm_sta_win_s: (() => {
    const title = 'Обязательно стану ещё сильнее!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Опять победа, и состояние Урары тоже… даже у меня к вам явилась лишняя уверенность.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Только ',
        urara.sex,
        ' — вид… я пока просто поздравлю вас, хотя изначально и не следовало вас винить.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Раз в вашем сердце всё ещё живёт мечта о счастливом финале, попробуйте выстоять до конца вдвоём: вы и ',
        urara.sex,
        '.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Только не потеряйте до того даже ',
        urara.sex,
        ' — улыбку.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Едва ступив в проход для участниц, победившая маленькая ',
        urara.uma_sex_title,
        ' тут же, невзирая на усталость тела, рванула к ',
        you.get_colored_name(),
        ' .',
      ]);
      await era.printAndWait([
        'Кажется, план собрать всех вместе удался. С желанием встретить ',
        urara.get_colored_name(),
        '  — улыбку, ',
        you.get_colored_name(),
        ' тоже выходит навстречу своей подопечной.',
      ]);
      await era.printAndWait([
        'Но ',
        you.get_colored_name(),
        ' ещё не успевает обратиться к ',
        urara.get_colored_name(),
        ' с поздравлением после тяжёлого забега, маленькая ',
        urara.uma_sex_title,
        ' тут же хватает ',
        you.get_colored_name(),
        ' за руку и бежит в сторону паддока.',
      ]);
      await urara.say_and_wait([
        callname,
        ', когда всё уладим, давайте сегодня же помчимся обратно!',
      ]);

      era.printButton(
        '「Не торопись, с таким трудом взяла первое, не отдохнёшь сначала?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'Почувствовав ',
        urara.get_colored_name(),
        '  — странность, ',
        you.get_colored_name(),
        ' в панике останавливается, но ',
        urara.get_colored_name(),
        ' чуть не стаскивает с ног.',
      ]);
      await era.printAndWait([
        'С удивлением подняв голову, ',
        you.get_colored_name(),
        ' и вправду видит ',
        urara.get_colored_name(),
        '  — улыбку, только до той мягкой и целебной, что мерещилась, ей всё ещё далеко.',
      ]);
      await urara.say_and_wait(
        'Но тренировки же важнее? До конца года уже недалеко, Ураре ещё нужно стать сильнее!',
      );
      await era.printAndWait([
        'Иначе говоря, в той улыбке, что сейчас ',
        urara.get_colored_name(),
        ' являет, вместо ',
        urara.sex,
        ' былой радости главное место вдруг занимает… усталая пустота.',
      ]);
      await urara.say_and_wait(
        'Если и дальше побеждать, все же признают, правда? Если меня признают, все обязательно станут ещё счастливее!',
      );
      await urara.say_and_wait(
        'Даже те, кого Урара нечаянно ранила, обязательно, обязательно тоже…',
      );
      era.printButton(
        '「Урара, чуть спокойнее, поспешность до добра не доведёт.」',
        1,
      );
      await era.input();
      await urara.say_and_wait(
        'А? Урара спокойная!Всё же нормально!Дальше вот так и вернёмся, распишем тренировки?',
      );
      await era.printAndWait([
        '「Раз так, и в следующем забеге бери первое」, — глядя на ',
        urara.get_colored_name(),
        '  — почти увядшие вишнёвые глаза: такие слова с языка не сходят.',
      ]);
      await era.printAndWait([
        'План вместе со всеми подбодрить ',
        urara.get_colored_name(),
        ' и правда удался, только внешние симптомы хоть и спали, оставшийся корень болезни сидит слишком глубоко.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' Теперь иначе, нынешняя ',
        urara.sex,
        ' полностью обрела склад ума, где победа — единственная цель, но тем самым и поставила себя на самый край обрыва.',
      ]);
      await era.printAndWait([
        'Если сейчас не заставить ',
        urara.get_colored_name(),
        ' сбавить ход, то ',
        urara.sex,
        ' по возвращении точно без оглядки рванёт куда попало.',
      ]);
      await era.printAndWait([
        'Но чтобы ',
        urara.sex,
        ' сейчас успокоилась душой, остаётся лишь сначала выслушать маленькую ',
        urara.uma_sex_title,
        ' до конца — как ',
        urara.sex,
        ' хочет бежать дальше.',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          'Всё в порядке, ',
          callname,
          ' не волнуйся же? Я сделаю так, что ',
          callname,
          ' увидит победу!',
        ]);
        await urara.say_and_wait(
          'Нынешняя Урара, глядишь, и G1 запросто выиграет! Так что в следующий раз дай Ураре снова бросить вызов G1!',
        );
        await era.printAndWait([
          'Попытавшись запрыгнуть в ',
          you.get_colored_name(),
          ' — объятия, ',
          urara.get_colored_name(),
          ' — жажда выжить всё так же наступает шаг за шагом, но улыбка наконец постепенно возвращается к обычной.',
        ]);
      } else {
        await urara.say_and_wait(
          'Ничего, в следующий раз я снова побегу ради всех и ради первого места!',
        );
        await urara.say_and_wait(
          'Так что в следующий раз пусть Урара снова выйдет на G1! Сейчас я точно смогу выиграть!',
        );
        await era.printAndWait([
          'Осторожно обхватывает ',
          you.get_colored_name(),
          ' — талию, ',
          urara.get_colored_name(),
          ' хоть слова всё ещё сжаты, но лицо хоть немного смягчается.',
        ]);
      }
      await era.printAndWait([
        'Сама вслух сказала, как сильно хочет бежать, — похоже, ',
        urara.get_colored_name(),
        ' — рост далеко превзошёл всякое воображение.',
      ]);
      await era.printAndWait([
        'Конечно, если бы ',
        urara.sex,
        ' сказала это не почти выжимая себя досуха, ',
        you.get_colored_name(),
        ' был(а) бы ещё чуть радостнее.',
      ]);
      await era.printAndWait([
        'Только стоит подумать, как ',
        urara.sex,
        ' сейчас выглядит в своей 「одержимости」, — даже если ',
        urara.sex,
        ' говорит правду, ',
        you.get_colored_name(),
        ' чувствует лишь тяжесть.',
      ]);

      era.printButton(
        '「『JBC Sprint』 пока, я временно рекомендую эту, да и до следующей ещё довольно долго, так что торопиться всё равно бесполезно, ладно?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Э? Мм… ну, раз ',
        callname,
        ' так говорит, Урара пока потерпит…',
      ]);
      await era.printAndWait([
        'Грунт, короткая дистанция — для нынешней ',
        urara.get_colored_name(),
        ' и впрямь скачка, где шанс взять первое место очень велик, и заодно ',
        you.get_colored_name(),
        ' — уловка, чтобы выиграть время.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' доволен(льна)? По крайней мере сейчас маленькая ',
        urara.uma_sex_title,
        ' наконец угомонилась и больше не ломится назад с упрямством.',
      ]);
      await era.printAndWait([
        'Только в этот раз даже ',
        you.get_colored_name(),
        ' тоже немного тревожится, удастся ли вместе с ',
        urara.get_colored_name(),
        ' спокойно провести последние месяцы из трёх лет.',
      ]);
      await era.printAndWait(
        'Всё решится здесь: выберешь держаться — прорыв всегда найдётся. Жми на полную.',
      );
    };
    f.title = title;
    return f;
  })(),
  elm_sta_lose_s: (() => {
    const title = 'Я буду ещё сильнее стараться!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Опять проигрыш? Впрочем, состояние Урары ещё неплохое — даже у меня в вас завелась лишняя уверенность.',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Только ',
        urara.sex,
        ' — вид… я пока просто поздравлю вас, хотя мне и не следовало вас винить.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Раз в вашем сердце всё ещё хочется счастливого финала, попробуйте продержаться до конца вместе — вы и ',
        urara.sex,
        '.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Только не лишитесь до того даже ',
        urara.sex,
        ' — улыбки.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Едва зайдя в проход для участниц, выигравшая скачку маленькая ',
        urara.uma_sex_title,
        ' тотчас, не глядя на усталость тела, бросается к ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'План собрать всех, должно быть, удался? Прихватив утешение для ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' тоже спешит навстречу своей подопечной.',
      ]);
      await era.printAndWait([
        'Но не успевает ',
        you.get_colored_name(),
        ' сказать первое слово утешения — ',
        urara.sex,
        ' не ждёт: маленькая ',
        urara.uma_sex_title,
        ' сразу хватает ',
        you.get_colored_name(),
        ' — руку и бежит в сторону задней площадки.',
      ]);

      era.printButton(
        '「Что такое? Едва добежала скачку — не отдохнёшь сначала?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'Почувствовав ',
        urara.get_colored_name(),
        ' — неладное, ',
        you.get_colored_name(),
        ' поспешно останавливается, но едва не теряет равновесие — ',
        urara.get_colored_name(),
        ' сдёргивает с шагу.',
      ]);
      await era.printAndWait([
        'С удивлением подняв голову, ',
        you.get_colored_name(),
        ' и впрямь видит ',
        urara.get_colored_name(),
        ' — улыбку, только та по-прежнему далека от мягкой, целительной, какой её рисовали.',
      ]);
      await urara.say_and_wait(
        'Но тренировки всё-таки важнее, да? До конца года уже не так много времени, Ураре надо стать ещё сильнее!',
      );
      await era.printAndWait([
        'Или скорее, та улыбка, что сейчас ',
        urara.get_colored_name(),
        ' являет, — в ней уже не та радость, какой ',
        urara.sex,
        ' светилась в прежние дни: главное место вдруг заняла… усталая пустота.',
      ]);
      await urara.say_and_wait(
        'Все хотели, чтобы Урара выиграла, а я не смогла ответить на их чувства, так что сейчас надо стараться ещё сильнее!',
      );
      await urara.say_and_wait([
        'И если не доказать себя… ',
        urara.sex,
        ' тоже… ',
        urara.sex,
        ' тоже Урару не простит, да…',
      ]);
      era.printButton('「Урара, поспокойнее.»', 1);
      await era.input();
      await urara.say_and_wait(
        'Н? Урара очень спокойная! Всё же хорошо! Дальше вот так и пойдём назад расписать тренировки, да?',
      );
      await era.printAndWait([
        '「Раз так, на следующей скачке тоже возьми первое место」, глядя в ',
        urara.get_colored_name(),
        ' — почти увядшие вишнёвые глаза: такие слова с языка не сходят.',
      ]);
      await era.printAndWait([
        'План вместе со всеми подбодрить ',
        urara.get_colored_name(),
        ' и впрямь сработал, только внешние симптомы хоть и отступили, а оставшийся корень болезни сидит слишком глубоко.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' теперь другое: нынешняя ',
        urara.sex,
        ' полностью вошла в склад ума, где победа только ради цели, — и сама же поставила себя на край обрыва.',
      ]);
      await era.printAndWait([
        'Если сейчас не заставить ',
        urara.get_colored_name(),
        ' сбавить ход, то ',
        urara.sex,
        ' по возвращении точно без оглядки рванёт куда попало.',
      ]);
      await era.printAndWait([
        'Но если нужно, чтобы ',
        urara.sex,
        ' сейчас совладала с настроем, остаётся лишь сначала выслушать маленькую ',
        urara.uma_sex_title,
        ' до конца: как ',
        urara.sex,
        ' дальше хочет бежать.',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          'Всё в порядке, ',
          callname,
          ' не волнуйся, ладно? В следующий раз Урара победит.',
        ]);
        await urara.say_and_wait(
          'И сейчас ведь нужно, чтобы ещё больше людей признали Урару, да? Так что в следующий раз дай Ураре снова бросить вызов G1!',
        );
        await era.printAndWait([
          'Попытавшись запрыгнуть в ',
          you.get_colored_name(),
          ' — объятия, ',
          urara.get_colored_name(),
          ' жажда выжить по-прежнему неотступно теснит, но улыбка наконец постепенно возвращается к обычной.',
        ]);
      } else {
        await urara.say_and_wait(
          'Ничего, в следующий раз ещё будет шанс, да? Да и после поражения тем более не получится расслабиться, правда?',
        );
        await urara.say_and_wait(
          'Так что в следующий раз дай Ураре выступить в G1! Сейчас без признания всех никак нельзя.',
        );
        await era.printAndWait([
          'Осторожно обхватив ',
          you.get_colored_name(),
          ' — за талию, ',
          urara.get_colored_name(),
          ' хотя слова всё ещё напряжённые, выражение лица всё же немного смягчилось.',
        ]);
      }
      await era.printAndWait([
        'Раз уж сама вслух сказала, как сильно хочет выступать, похоже, ',
        urara.get_colored_name(),
        '  выросла далеко за пределы ожиданий.',
      ]);
      await era.printAndWait([
        'Конечно, если бы ',
        urara.sex,
        ' сказала это не почти выжимая себя досуха, ',
        you.get_colored_name(),
        '  был(а) бы ещё чуть радостнее.',
      ]);
      await era.printAndWait([
        'Только стоит представить, как ',
        urara.sex,
        ' сейчас выглядит в этой「одержимости」, даже если ',
        urara.sex,
        ' говорит правду, ',
        you.get_colored_name(),
        '  всё равно чувствует лишь тяжесть.',
      ]);

      era.printButton(
        '「『JBC Sprint』, пожалуй. Пока рекомендую её, да и до следующего ещё довольно долго, так что спешить бесполезно, ладно?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Э? Мм… ну раз уж ',
        callname,
        '  сказал(а), Урара пока потерпит…',
      ]);
      await era.printAndWait([
        'Грунт, короткая дистанция — для нынешней ',
        urara.get_colored_name(),
        ' это и правда гонка, где очень велик шанс взять первое место, и заодно ',
        you.get_colored_name(),
        ' — уловка, чтобы выиграть время.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' доволен(льна)? По крайней мере сейчас маленькая ',
        urara.uma_sex_title,
        ' наконец успокоилась и больше не ломалась настойчиво, требуя вернуться.',
      ]);
      await era.printAndWait([
        'Только вот на этот раз даже ',
        you.get_colored_name(),
        ' немного тревожится, получится ли вместе с ',
        urara.get_colored_name(),
        '  благополучно провести последние месяцы этих трёх лет.',
      ]);
      await era.printAndWait(
        'Всё решится здесь. Выстоишь — прорыв рано или поздно найдётся. Выкладывайся на полную.',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = 'Летний сбор (выпускной год) окончен';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} accept_sex 是否接受性爱
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      accept_sex,
      arim_kin,
    ) => {
      await urara.say_and_wait([
        callname,
        ', нынешняя Урара снова стала сильнее, чем раньше?',
      ]);
      await era.printAndWait([
        'В перерыве тренировки сидят на послеполуденном пляже, ',
        urara.get_colored_name(),
        ' и рядом ',
        you.get_colored_name(),
        ' вместе смотрят, как только-только начинает садиться послеполуденное солнце.',
      ]);

      era.printButton(
        '「Конечно, нынешняя Урара сильна, просто не хватает кое-чего более важного.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Глядя на вынужденно ставшую чересчур стойкой маленькая ',
        urara.uma_sex_title,
        ', ',
        you.get_colored_name(),
        ' всё же решает говорить прямо.',
      ]);
      await era.printAndWait([
        'Нынешняя ',
        urara.get_colored_name(),
        ' уже обладает всеми условиями для победы, но ',
        you.get_colored_name(),
        '  так же ясно понимает, что то дело до сегодняшнего дня так и не закончилось.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '  сейчас вернулась к прежнему состоянию, но это лишь внешне — состояние「способна бежать」.',
      ]);
      await era.printAndWait([
        'Что до ',
        you.get_colored_name(),
        ' той ночью отдал(а) ',
        urara.sex,
        ' — напутствие: скорее не то что ',
        urara.get_colored_name(),
        ' не поняла, а то что ',
        urara.sex,
        ' просто всё ещё не верит, что ответ так прост.',
      ]);
      await era.printAndWait([
        'Как это дитя в странных местах становится всё упрямее? — ',
        you.get_colored_name(),
        ' так и хочет посетовать, но вспоминает: неуклюже взрослеть — тоже часть роста.',
      ]);
      await era.printAndWait([
        'А услышав ',
        you.get_colored_name(),
        ' — прямой отзыв, ',
        urara.get_colored_name(),
        '  только слегка кивает, затем спрашивает голосом ещё тоньше летнего морского ветра.',
      ]);
      await urara.say_and_wait([
        callname,
        ', те недавние события — сколько подробностей ты ещё помнишь?',
      ]);

      era.printButton(
        '「Забыть невозможно, почему спрашиваешь? Опять что-то новое случилось?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '…Урара потом искала ',
        urara.sex,
        ' очень долго, однокурсницы говорили, что ',
        urara.sex,
        ' и правда ушла очень далеко.',
      ]);
      await urara.say_and_wait([
        'Но однокурсницы ещё сказали мне, что во время ',
        arim_kin,
        ' , ',
        urara.sex,
        ' тоже отдаст голос за Урару.',
      ]);
      await urara.say_and_wait(
        '『Наговорила столько жестокого — не буду просить у Урары прощения, на самом деле я правда очень хочу, чтобы Урара вышла на Arima Kinen』.',
      );
      await urara.say_and_wait(
        'Мне так все пересказали, но даже если другие так говорят, Урара всё равно пренебрегла чужой мечтой, да?…',
      );

      era.printButton(
        `「Но раз так, ${urara.sex} с самого начала ведь не специально пришла винить Урару, да?」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Урара всегда так думала, но наверняка есть ещё больше тех, кого я нечаянно ранила и кто хочет, чтобы я больше не бежала…',
      );

      era.printButton(
        '「Так что Урара с самого начала не виновата, по-моему лучше не брать весь этот негатив на себя—」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Но даже если это отрицают, Урара всё равно хочет нести их улыбки, даже если к Ураре одна лишь злоба — неважно.',
      );
      await urara.say_and_wait(
        'Хотя это Урара только после прошлой гонки придумала… хе-хе~ не слишком ли противно прозвучало?',
      );
      await era.printAndWait([
        'Произнеся ответ, которого ',
        you.get_colored_name(),
        ' даже не ожидал(а), мокрая насквозь маленькая ',
        urara.uma_sex_title,
        ' снова показывает улыбку, которой в обычные дни всё меньше, но которая по-прежнему полна надежды.',
      ]);

      era.printButton('「…Такой милой противной Урары можно и побольше.」', 1);
      await era.input();

      await era.printAndWait([
        'Глядя прямо на тень, что всё ещё прячется под улыбкой, ',
        you.get_colored_name(),
        ' с некоторой беспомощностью кладёт полотенце на пряди — ',
        urara.teen_sex_title,
        ' вся в каплях воды.',
      ]);

      era.printButton(
        '「Но если бездумно тащить на себе слишком много, можно и сломаться, знаешь? Как там Урара, которая с самого начала не была готова?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Э? ',
        callname,
        ' не говори так, будто… будто ты подруга Урары! С Урарой всё в порядке—',
      ]);
      await era.printAndWait([
        'Хорошо-хорошо, ',
        urara.get_colored_name(),
        ' ничего. Потирая маленькая ',
        urara.uma_sex_title,
        ' мягкие уши и личико, ',
        you.get_colored_name(),
        ' тихо вздыхает.',
      ]);
      await era.printAndWait([
        'Снова ожидаемый отказ, впрочем и верно: если ',
        urara.get_colored_name(),
        ' сама не перешагнёт этот порог, чужие слова ничего не значат.',
      ]);
      await urara.say_and_wait([
        'У-у— раз уж ',
        callname,
        ' всё ещё не верит… тогда ',
        callname,
        ' пусть запишет слова той ночи!',
      ]);
      await era.printAndWait('А? Это ещё что вдруг такое…');
      await urara.say_and_wait([
        'Сейчас ещё не очень понятно, но когда в нужный момент услышит ',
        callname,
        ' — слова, Урара обязательно сможет воспрянуть!',
      ]);
      await you.say_and_wait(
        [
          'Ты и правда не понимаешь? И что это за «нужный момент»? Впрочем, раз уж ',
          urara.get_colored_name(),
          ' так говорит — значит, есть ',
          urara.sex,
          ' — соображения, в общем, сначала записать…',
        ],
        true,
      );
      await era.printAndWait(
        'Незаметно нынешний разговор иссяк, молчание снова легло между ними двоими, но по крайней мере сейчас, в этот миг, такое чувство вовсе не плохое.',
      );
      await era.printAndWait([
        'Вот только нынешняя ',
        urara.sex,
        ', о каком будущем думает?',
      ]);
      era.drawLine();
      await urara.print_and_wait(
        'Впрочем, то, о чём думает сейчас Урара, едва ли кто-то из знающих это станет хвалить.',
      );
      await urara.print_and_wait([
        'Может, нынешняя Урара и правда лишь отнимает у других счастье — но такую мысль ',
        callname,
        ' высказать не может.',
      ]);
      await urara.print_and_wait([
        'Стоит представить, как ',
        callname,
        ' печалится за Урару — и сердце Урары тоже полнится тоской, и она постепенно становится не собой.',
      ]);
      await urara.print_and_wait([
        'Какие бы чувства Урара ни питала к ',
        callname,
        ' , Урара не хочет отдаляться от ',
        callname,
        ', и тем более не хочет, чтобы ',
        callname,
        ' грустил(а).',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          'Стоит лишь прижаться к ',
          callname,
          ' , и тепло сильнее, чем она представляла, мало-помалу переходит вместе со стуком сердца.',
        ]);
        await urara.print_and_wait(
          'Как спокойно… будто сейчас, стоит лишь отпустить своё желание и остаться в гавани одного человека, можно безмятежно спать и спать.',
        );
        await urara.print_and_wait([
          'Больше не нужно стараться ради чужого признания, и никто больше не будет винить — достаточно утонуть в ',
          callname,
          ', утонуть в любви всех…',
        ]);
      } else {
        await urara.print_and_wait([
          'Рядом с ',
          callname,
          ' — свернувшись калачиком, можно почувствовать тепло и сердцебиение другого.',
        ]);
        await urara.print_and_wait([
          callname,
          ' — объятиях наверняка так спокойно… есть ли там место для Урары? Место, где Урара сможет спокойно уснуть?',
        ]);
        await urara.print_and_wait([
          'Стоит лишь чем-то поступиться — и можно получить ',
          callname,
          ' — любовь, да? Если не обращать внимания, все ведь и дальше будут поддерживать Урару…',
        ]);
      }
      await urara.print_and_wait([
        'Но так делать нельзя: ведь это и подведёт ',
        callname,
        ' и всех, и сама потом пожалеет.',
      ]);
      await urara.print_and_wait([
        'Если бы Урара смогла стать как ',
        callname,
        ' такой же надёжной взрослой, ',
        callname,
        ' — то наверняка смог(ла) бы справиться лучше Урары.',
      ]);
      await urara.print_and_wait(
        'Как же устала… но Урара ещё не может остановиться, так что хотя бы разок, пусть Урара ещё чуть-чуть обопрётся… так что…',
      );
      await urara.say_and_wait([
        callname,
        ', перед тем как вернуться… Урара может получить『взрослые объятия』?',
      ]);
      if (era.get('love:52') >= 50) {
        await urara.print_and_wait([
          'Услышав внезапную просьбу Урары, ',
          callname,
          ' на миг хмурится, в лице будто проскальзывает смятение. Урара слишком много попросила?',
        ]);

        era.printButton('「Урара, ты всё-таки…」', 1);
        await era.input();

        await urara.print_and_wait([
          'М-м? Неужели ',
          callname,
          ' уже давно понял(а) мысли Урары? Впрочем, это всё уже не важно—',
        ]);
        await urara.print_and_wait(
          'Ведь мы уже не в обычных отношениях, и теперешняя Урара уже не прежний наивный ребёнок;',
        );
        await urara.print_and_wait([
          'Потому что ',
          callname,
          ' ещё не успел(а) отказать, а нынешняя Урара и не даст ',
          callname,
          ' так просто отказаться.',
        ]);
      } else {
        await urara.print_and_wait([
          'Услышав внезапную просьбу Урары, ',
          callname,
          ' и правда вздрагивает: даже настоящая пара вряд ли стала бы просить о таком внезапно.',
        ]);

        era.printButton('「Урара, даже так это слишком…!」', 1);
        await era.input();

        await urara.print_and_wait([
          'Э? ',
          callname,
          ' неужели уже раскусил(а) мысли Урары? Впрочем, это всё уже не важно—',
        ]);
        await urara.print_and_wait([
          'Если это ',
          callname,
          ' — то Ураре так тоже ничего, так что Урара ни за что не даст ',
          callname,
          ' отказаться.',
        ]);
        await urara.print_and_wait([
          'Даже если вы не пара — ничего, пусть Урара узнает, как сильно… ',
          callname,
          ' любит свою подопечную?',
        ]);
      }
      await urara.print_and_wait(
        'Ничего, с этого момента Урара будет идти дальше ради счастья всех, так что хотя бы сейчас крепко обними Урару…',
      );
      await urara.say_and_wait(
        'Урара поправится, ясно? Скоро поправится… так что начнём с обнимашек?',
      );
      await urara.print_and_wait([
        'И всего-то один палец легонько упирается в ',
        callname,
        ' — губы, застывшие на полуслове, ',
        callname,
        ' сразу теряет всякое сопротивление.',
      ]);
      await urara.print_and_wait([
        'Ведь это всего лишь ',
        callname,
        ' и подопечной обнимашки, так что даже на виду у всех сидеть на пляже в тесных объятиях — ничего, да?',
      ]);
      await urara.print_and_wait([
        'Спереди усевшись верхом на ',
        callname,
        ' — колени, легонько обхватывает задеревеневшую от напряжения шею, Урара плотно прижимает тело к ',
        callname,
        ' вплотную.',
      ]);
      await urara.print_and_wait([
        callname,
        ' наверняка очень скоро заёрзает от нетерпения: за тонким слоем ткани — вся мягкость подопечной.',
      ]);
      await urara.print_and_wait([
        'А, это потому что взрослый запах так действует? У Урары даже вот эти два местечка на груди тоже торчат…',
      ]);
      await urara.print_and_wait(
        'Но ещё нельзя, ясно? Ведь это всего лишь те самые「обнимашки」, что каждый день по сто раз, так что ничего такого нельзя, хорошо?',
      );
      await urara.print_and_wait(
        'Урара терпит, даже когда тело уже горячее до головокружения, ясно? И целоваться тоже нельзя! Потому что… нас же увидят～',
      );
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.print_and_wait([
          'Два пышных мягких плода легонько прижимаются к ',
          callname,
          ' , и томительная дрожь с набухших кончиков без конца расходится по всему телу.',
        ]);
        await urara.print_and_wait([
          callname,
          ' тоже это любит, да? С тех пор как они стали такими большими, ',
          callname,
          ' — взгляд всегда подолгу задерживается вот на этом месте Урары.',
        ]);
        await urara.print_and_wait(
          'Так что потрогай? Сделай вид, будто невзначай кладёшь руку Ураре на грудь, и, пока никто вокруг не смотрит, тихонько сдави…',
        );
        await urara.print_and_wait([
          'Ха~нн~! Даже молоко выдавили… Ну правда, так сильно, ',
          callname,
          ' ведь уже не ребёнок!',
        ]);
      }
      if (you.sex_code > 0) {
        await urara.print_and_wait([
          'А, кажется, что-то твёрдое упёрлось Ураре в живот… Как все и говорили, ',
          callname,
          ' — извращенец~',
        ]);
        await urara.print_and_wait(
          'Урара знает, о? Стоит рукой слегка помассировать — и Урару всю измажет белым.',
        );
        await urara.print_and_wait([
          'Но дразнить взрослых при всех нельзя, так что даже если ',
          callname,
          ' сейчас попросит, Урара ни капельки не тронет, ясно?',
        ]);
      }
      if (you.sex_code !== 1) {
        await urara.print_and_wait([
          'Теперь даже ',
          callname,
          ' — грудь тоже встала, и когда Урара прижимается и кусает ',
          callname,
          ' — шею, как раз чувствуется мягкость.',
        ]);
        await urara.print_and_wait(
          'И когда зубами и губами оставляешь следы на груди и шее, можно не бояться, что кто-то увидит, но слишком громко — уже плохо, ясно?',
        );
        await urara.print_and_wait([
          'Но если Урара украдкой прикусит у ',
          callname,
          ' две маленькие бусинки на груди, ',
          callname,
          ' какие ещё милые звуки издаст?',
        ]);
      }
      await urara.print_and_wait([
        callname,
        ' — на лице в забытьи больше изумления или страха? Но как ни крути, ',
        callname,
        ' всё равно уже не может вымолвить ни слова.',
      ]);
      await urara.print_and_wait([
        'А раз ',
        callname,
        ' не может говорить, то и не откажет Ураре ни в одной просьбе, хе-хе~ Урара прямо гений~',
      ]);
      await urara.print_and_wait([
        'Но сколько же времени прошло? Урара и ',
        callname,
        ' наконец с неохотой разомкнули тела, что сплелись почти в одно.',
      ]);
      await urara.print_and_wait([
        'Но даже когда желание на время стихло, ',
        callname,
        ' — в глазах всё ещё вовсю полыхают под закатом полные вожделения вишнёвые зрачки…',
      ]);
      await urara.print_and_wait([
        'Раз ',
        callname,
        ' так и не отказал(а), то уж ',
        urara.sex,
        ' — Урара — не даст, чтобы её ',
        callname,
        ' так легко сбежал(а).',
      ]);
      await urara.say_and_wait([
        callname,
        ', Урара и правда такая странная, так что пока Урара не станет прежней, продолжай дарить Ураре любовь даром, хорошо?',
      ]);
      await urara.say_and_wait(
        'Как при первой встрече… напитай Урару, сделай снова той беззаботной хорошей девочкой…?',
      );
      await urara.say_and_wait([
        callname,
        ', пойдём туда, где нас никто не увидит? Но сейчас можно ',
        callname,
        ' отказаться, ясно…?',
      ]);
      you.say('……');
      era.printButton(
        `Даже согласиться — ${urara.sex} тоже ничего… (влюблённость+5)`,
        1,
        {
          disabled: !accept_sex,
        },
      );
      era.printButton(
        `Сейчас оттолкнуть — ${urara.sex} ещё не поздно… (расположение+20)`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'Хе-хе~ ',
          callname,
          ' всё-таки не смог(ла) отказать, да? Тогда пойдём с Урарой?',
        ]);
        await urara.print_and_wait([
          'И вот Урара, так и не получив отказа, утащила ',
          callname,
          ' в безлюдный угол и легонько стянула с себя тонкий купальник.',
        ]);
        if (urara.sex_code !== 1) {
          if (era.get('exp:52:性爱次数') - era.get('exp:52:睡奸次数') >= 10) {
            await urara.print_and_wait([
              'Сама не заметила, как там внизу уже всё мокро, но как бы Урара ни стала развратной, ',
              callname,
              ' всё равно не откажет, правда?',
            ]);
            await urara.print_and_wait([
              'Верно, и сноровка лишь бы порадовать любимого, и глупая головушка, что дуреет при виде того, кто нравится, — всё это ',
              callname,
              ' — желанный вид, ясно?',
            ]);
            await urara.print_and_wait([
              'Видишь? И соски, что торчат сквозь одежду, стоит на них смотреть, и юная дырочка, что уже капает без остановки, — всё это ',
              callname,
              ' виноват(а)…',
            ]);
          } else {
            await urara.print_and_wait([
              'Стоит лишь ',
              callname,
              ' взглянуть — и внизу уже так мокро, ',
              callname,
              ' до чего же хочет довести Урару?',
            ]);
            await urara.print_and_wait([
              'Но раз ',
              callname,
              ' любит, то какую угодно часть Урары можно сделать ',
              callname,
              ' — самой любимой игрушкой, ясно?',
            ]);
            await urara.print_and_wait(
              'Потому что Урара тоже уже решила: Урара хочет отдать своё тело извращённому взрослому, что своими руками его вырастило…',
            );
          }
          await urara.print_and_wait([
            'Голая, навстречу ',
            callname,
            ' раскрыла объятия и, подражая маме, прижала к себе ребёнка, которого так хочется напоить.',
          ]);
          await urara.print_and_wait([
            'Так что… ',
            callname,
            ' хочет нежничать — пока Урара не станет прежней, скорее обними Урару?',
          ]);
          if (urara.sex_code !== 1) {
            await urara.print_and_wait([
              'Только из-за ',
              callname,
              ' сладко стонущие губы, только ',
              callname,
              ' можно как угодно терзать обе дырочки, только для ',
              callname,
              ' зачинающая матка…',
            ]);
          }
          await urara.print_and_wait([
            'Нужно каждый дюйм тела, что принадлежит только ',
            callname,
            ' , заполнить целиком, ясно?',
          ]);
        }
      } else {
        await urara.say_and_wait([
          '…Хе-хе~ ',
          callname,
          ' и правда отказал(а)? У взрослых всегда какие-то странные принципы…',
        ]);
        await urara.say_and_wait(
          'Но раз так, в качестве компенсации Ураре давай ещё обниматься?',
        );
        await urara.print_and_wait([
          'Хоть ',
          callname,
          ' неожиданно отказал(а), но увидев ',
          callname,
          ' на лице ещё более ошарашенное выражение, Урара всё равно довольно улыбнулась.',
        ]);
        await urara.print_and_wait([
          'В отместку за отказ Ураре ',
          callname,
          ', пока ленивое солнце не сядет, Урара не разомкнёт объятия.',
        ]);
        await urara.print_and_wait(
          'Пока Урара не станет прежней, так и не разомкнёт, ясно…',
        );
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_s: (() => {
    const title = 'Потому что не хочу проигрывать!';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {number} fans 粉丝数
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      join_arim_kin_c,
      fans,
    ) => {
      await urara.print_and_wait(
        'Стоит выйти из этого длинного тёмного тоннеля — и дальше уже последние остановки перед Arima Kinen.',
      );
      await urara.print_and_wait([
        'И правда одной улыбкой заставила ',
        callname,
        ' поверить, да? Похоже, Урара уже стала плохой девочкой.',
      ]);
      await urara.print_and_wait([
        'Но ничего, когда выиграет — перед ',
        callname,
        ' извинится и как следует поспит — только бы пережить эту гонку.',
      ]);
      await urara.print_and_wait(
        'Урара… Урара никому не проиграет! Сейчас Урара не хочет проигрывать никому, сейчас Урара не может проиграть никому!',
      );
      await urara.print_and_wait(
        'Нельзя проиграть… нельзя проиграть… нельзя проиграть… ведь все ещё ждут Урару, Урара ещё должна всем доказать…',
      );
      await urara.print_and_wait(
        'И так Урару простят, да? Так можно будет выйти на сцену уже всеми признанной…',
      );
      await urara.print_and_wait(
        'Тело такое тяжёлое, но Урара обязательно сможет бежать; в груди так больно, но стоит только повесить улыбку — и другие не будут волноваться.',
      );
      await urara.print_and_wait(
        'Как страшно… какой же самой стать? Урара сейчас и правда стоит здесь ради всех?',
      );
      await urara.print_and_wait(
        'Но хотя бы в этот раз, прошу, дай мне непременно победить…',
      );
      era.drawLine();
      await you.say_and_wait(
        [
          'Может, мне не следовало выпускать Урару на скачки, но сейчас, пожалуй, уже поздно.',
        ],
        true,
      );
      await you.say_and_wait(
        [
          'Потому что ',
          urara.uma_sex_title,
          ' уже ступили в стартовые ворота; тренеру остаётся только провожать взглядом свою подопечную и молиться, чтобы ',
          urara.sex,
          ' смогла пережить это испытание.',
        ],
        true,
      );
      await you.say_and_wait(
        [
          'Почему Ураре удалось меня обмануть? Может, в душе я всё ещё верю той видимости, что показывает Урара…',
        ],
        true,
      );
      await you.say_and_wait(
        'Урара так и не набралась смелости поверить, что выбранный ею путь всё это время был верным?',
        true,
      );
      await you.say_and_wait(
        [
          'Слишком мягкая ',
          urara.sex,
          ' всё ещё нуждается во внешней силе, чтобы вскрыть всё плотнее закрывающееся сердце? Или ',
          urara.sex,
          ' на самом деле боится своего будущего…',
        ],
        true,
      );
      if (join_arim_kin_c && fans >= 25000) {
        await you.say_and_wait(
          [
            'Это моя вина? Что не остановил(а), когда ',
            urara.sex,
            ' стала подавать признаки, не сдержал(а) — ',
            urara.sex,
            ', и в итоге Урара стала не жалеть даже себя.',
          ],
          true,
        );
        await you.say_and_wait(
          [
            'Мы же почти дошли до вершины, нет? Может, и я, и ',
            urara.sex,
            ' в ходе перемен забыли смысл 「улыбки」…',
          ],
          true,
        );
      } else {
        await you.say_and_wait(
          [
            'Это моя вина? Из-за моей ошибки ',
            urara.sex,
            ' стала почти той, кто загоняет себя к саморазрушению.',
          ],
          true,
        );
        await you.say_and_wait(
          [
            'Если бы при встрече я был(а) более умелым тренером, если бы ',
            urara.sex,
            ' встретила более умелого тренера…',
          ],
          true,
        );
      }
      await you.say_and_wait(
        'Впрочем, поднимать сейчас эти пустые фантазии уже бессмысленно.',
        true,
      );
      await you.say_and_wait(
        [
          'Теперь, когда Урара уже вышла на трассу, остаётся лишь верить, что ',
          urara.sex,
          ' сможет опереться на своё шаткое «я» и пережить этот забег.',
        ],
        true,
      );
      await you.say_and_wait(
        [
          'Раз уж так вышло, мне как тренеру тем более нельзя терять спокойствие: как бы ни стало хуже, помочь — ',
          urara.sex,
          ' — могу только я…',
        ],
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_s: (() => {
    const title = 'Вперёд, вперёд…';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.print_and_wait(
        'То, что только что пронеслось мимо, — это же финишная доска, да?… Урара, победила?',
      );
      await urara.print_and_wait(
        'Как хорошо, сегодняшняя Урара тоже никому не проиграла, Урара получила признание всех? Все наверняка очень рады?',
      );
      await urara.print_and_wait(
        'Сегодняшняя форма и правда хорошая, хоть тело немного тугое, но уже не болит, и эта ломота по всему телу пропала…',
      );
      await urara.print_and_wait(
        'Но почему у всех такие странные взгляды? Это потому, что сейчас лицо Урары выглядит ужасно?',
      );
      await urara.print_and_wait(
        'Ничего, Урара просто немного кружится голова, сейчас улыбнётся, так что все не волнуйтесь…',
      );
      await urara.print_and_wait([
        '…… ',
        callname,
        '! Сегодня Урара тоже взяла первое место! Хоть и страшно, хоть и противно, но Урара победила!',
      ]);
      await urara.print_and_wait(
        'Так что не надо такое страшное лицо, так перелезать через ограждение трассы опасно, и все тоже, улыбнитесь…',
      );

      era.printButton('「Урара! Ты в порядке? Ещё слышишь меня? — ?!」', 1);
      await era.input();

      await urara.print_and_wait([
        callname,
        ', слишком переживаешь? Урара просто немного устала, совсем не нужно было так спешно бежать…',
      ]);
      await urara.print_and_wait([
        'Но разве не ',
        callname,
        ' — голос всё тише, почему Урара всё хуже разбирает, что ',
        callname,
        ' говорит?',
      ]);
      await urara.print_and_wait(
        'Как странно, почему руки не поднимаются? Почему ноги не движутся? Почему тела не чувствуется?',
      );
      await urara.print_and_wait(
        'Как странно, почему поле зрения всё уже? Почему небо всё темнее?',
      );
      await urara.print_and_wait('Как странно, почему не получается говорить?');
      await urara.print_and_wait('……');
      await urara.print_and_wait(
        '…Больно, темно… Урара упала? Что же случилось…',
      );
      await urara.print_and_wait(
        '…Как страшно… Все сейчас бросят Урару? Не надо…',
      );
      await urara.print_and_wait('…Урара же ещё может бежать…');
      await urara.print_and_wait(['…… ', callname, '……']);

      era.drawLine();
      await inner_urara.print_and_wait('К главной героине в центре сцены:');
      await inner_urara.print_and_wait(
        'Крылья из сценического реквизита всё же слишком хрупки, но даже если упадёшь — ничего, разве нет?',
      );
      await inner_urara.print_and_wait(
        'Если страшно — спрячься в своём сердце; если устала — пусть усталый цветок завянет.',
      );
      await inner_urara.print_and_wait(
        'Если тревожно — ищи защиты у надёжного человека; если кажется, что не выдержать — даже бегство никто не осудит, правда?',
      );
      await inner_urara.print_and_wait(
        'Всё хорошо, я всегда буду защищать Урару, когда бы то ни было: разве мы не договорились об этом давно?',
      );
      await inner_urara.print_and_wait('К тренеру за кулисами:');
      await inner_urara.print_and_wait([
        'Как жаль, всего чуть-чуть не хватило, разве нет? В итоге крылья растаяли, и ',
        urara.sex,
        ' всё же приняла облик обыкновенного чужого.',
      ]);
      await inner_urara.print_and_wait([
        'Но это не ваша вина, просто вы и ',
        urara.sex,
        ' зашли слишком далеко. Разве не так — все соки исчерпаны?',
      ]);
      await inner_urara.print_and_wait(
        'И я ведь уже говорила: власть дописывать историю я держу в своих руках.',
      );
      await inner_urara.print_and_wait(
        'Я говорила, что не стану винить вас, но к следующей официальной беседе подготовьтесь морально.',
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_lose_s: (() => {
    const title = 'Вперёд, вперёд…';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.print_and_wait(
        'Забег уже закончился? Тогда… Урара опять проиграла?',
      );
      await urara.print_and_wait(
        'Так нельзя, когда вернёмся — обязательно будем как следует тренироваться, в следующий раз точно ещё будет шанс…',
      );
      await urara.print_and_wait(
        'И состояние тела тоже восстановилось, уже не болит, и эта ломота по всему телу тоже пропала…',
      );
      await urara.print_and_wait(
        'Но почему у всех такие странные взгляды? Это потому, что сейчас лицо Урары выглядит ужасно?',
      );
      await urara.print_and_wait(
        'Ничего, Урара просто немного кружится голова, сейчас улыбнётся, так что все не волнуйтесь…',
      );
      await urara.print_and_wait([
        '…… ',
        callname,
        '! Сегодня Урара тоже взяла первое место! Хоть и страшно, хоть и противно, но Урара победила!',
      ]);
      await urara.print_and_wait(
        'Так что не надо такое страшное лицо, так перелезать через ограждение трассы опасно, и все тоже, улыбнитесь…',
      );

      era.printButton('「Урара! Ты в порядке? Ещё слышишь меня? — ?!」', 1);
      await era.input();

      await urara.print_and_wait([
        callname,
        ', слишком переживаешь? Урара просто немного устала, совсем не нужно было так спешно бежать…',
      ]);
      await urara.print_and_wait([
        'Но разве не ',
        callname,
        ' — голос всё тише, почему Урара всё хуже разбирает, что ',
        callname,
        ' говорит?',
      ]);
      await urara.print_and_wait(
        'Как странно, почему руки не поднимаются? Почему ноги не движутся? Почему тела не чувствуется?',
      );
      await urara.print_and_wait(
        'Как странно, почему поле зрения всё уже? Почему небо всё темнее?',
      );
      await urara.print_and_wait('Как странно, почему не получается говорить?');
      await urara.print_and_wait('……');
      await urara.print_and_wait(
        '…Больно, темно… Урара упала? Что же случилось…',
      );
      await urara.print_and_wait(
        '…Как страшно… Все сейчас бросят Урару? Не надо…',
      );
      await urara.print_and_wait('…Урара же ещё может бежать…');
      await urara.print_and_wait(['…… ', callname, '……']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_1: (() => {
    const title = (inner_urara) => [
      '「',
      inner_urara.get_colored_sex(),
      ' 」 — молитва',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await you.say_and_wait(
        'Что происходит, я же помню, что вечером заснул(а) у себя? Это… перед статуями Трёх богинь академии? Почему я сплю здесь?',
        true,
      );
      await you.say_and_wait(
        'Голова так болит, я что, прошлой ночью ходил(а) во сне? Но на мне же всё надето как надо, да и время сейчас… уже столько?',
        true,
      );
      await you.say_and_wait(
        'Всё кажется, будто что-то выпало из памяти, но сегодня есть дело поважнее; если что и упущено — потом.',
        true,
      );
      await you.say_and_wait(
        'Сначала пойду на Тренировочное поле встретиться с Урарой, сегодня обязательно…',
        true,
      );
      era.drawLine();
      era.printButton(
        '「Урара, в конце месяца уже Arima Kinen, с телом сейчас всё в порядке?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Так я же говорю — уже всё нормально! Сейчас Урара совсем ничего плохого не чувствует!',
      );
      await urara.say_and_wait([
        callname,
        ', сегодня уже не надо вести меня в больницу на повторный осмотр, да? В тот день я просто из-за плохого состояния упала, вот и всё!',
      ]);

      era.printButton(
        '「Тогда и хорошо. Так что сегодня я вовсе не затем, чтобы вести Урару в больницу на осмотр.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'В пустом коридоре бродят шаги лишь двоих, ',
        you.get_colored_name(),
        ' и Урара проходят сквозь тихую, но однообразную белизну больницы.',
      ]);
      await era.printAndWait([
        'С тех пор как Урара упала в обморок на скачках, но чудом всё оказалось в порядке, регулярные походы в больницу на осмотр стали для них двоих недавней нормой.',
      ]);
      await era.printAndWait([
        'Как большинство ровесников ненавидят сложные осмотры и вездесущий запах антисептика, Урара, конечно, тоже каждый раз поднимала маленький протест.',
      ]);
      await era.printAndWait([
        '…по крайней мере поначалу. Пока однажды, ',
        you.get_colored_name(),
        ' в едва заметном уголке находит брошенное невесть кем маленькое животное.',
      ]);
      await era.printAndWait([
        'Отворив ту будто забытую комнату, ',
        you.get_colored_name(),
        ' подводит стоящую рядом 「Хару Урару」 к кровати посреди комнаты.',
      ]);
      await era.printAndWait([
        'На белой больничной койке, свернувшись калачиком, вишнёво-розовая ',
        urara.teen_sex_title,
        ' легко покачивает лошадиными ушами и хвостом и тихо спит, дыша ровно и здорово.',
      ]);
      await era.printAndWait([
        urara.sex,
        ' — у кровати нет никакой медтехники, она даже одета в форму Трейсена, будто собралась в школу, а розовая лента туго завязана, словно только что.',
      ]);
      await era.printAndWait([
        'Но эта, что выглядит так, будто просто проспала учебный день, маленькая ',
        urara.uma_sex_title,
        ', ничем не отличается от той, что сейчас стоит рядом с ',
        you.get_colored_name(),
        ' , замершей в молчании 「',
        urara.sex,
        ' 」.',
      ]);

      era.printButton(
        '「Перед падением кому угодно было видно, что состояние ненормальное, а когда проснулась — и телом, и душой здорова, будто ничего не случилось.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Глядя на другой вишнёво-розовый комочек, свернувшийся на белой простыне, ',
        you.get_colored_name(),
        ' не поднимая головы продолжает разговор с той, что зовётся 「',
        urara.sex,
        '」.',
      ]);
      await era.printAndWait([
        'Даже не глядя на чужое лицо, ',
        you.get_colored_name(),
        ' давно уже знает, кто такая неотлучно бывшая рядом 「',
        inner_urara.get_colored_actual_name(),
        ' 」.',
      ]);

      era.printButton(
        `「Урара и правда очень крепкий ребёнок, но я не помню, чтобы ${urara.sex} была Морковным героем.」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        'С переменой манеры и выражения садится на край койки та, что похожа на ',
        urara.get_colored_name(),
        ' 「',
        urara.sex,
        ' 」,снимает маску и показывает истинное лицо, полное печали.',
      ]);
      await inner_urara.say_as_unknown_and_wait('…Когда вы догадались?');

      if (high_relation) {
        era.printButton(
          '「Перемена в поведении слишком бросалась в глаза. Сначала казалось, Урара злится, но это длилось уже слишком долго.」',
          1,
        );
        await era.input();
        await you.say_and_wait(
          [
            'Спасибо, что была рядом, но до подражания всё же чуть-чуть не хватило. Прости, ',
            urara.get_colored_name(),
            ' стала такой — тебе тоже тяжело, да…',
          ],
          true,
        );
        await era.printAndWait([
          'Подняв взгляд, глядя прямо в ту пару вишнёвых зрачков, что в сравнении с 「',
          urara.get_colored_actual_name(),
          ' 」 куда тусклее, ',
          you.get_colored_name(),
          ' и ',
          urara.sex,
          ' встречаются взглядами.',
        ]);
      } else {
        era.printButton(
          '「Сначала и правда не получалось заметить, но всё равно казалось, что что-то не так, да и в последнее время Урара как будто стала куда замкнутее.」',
          1,
        );
        await era.input();
        await you.say_and_wait(
          'Да и с моей стороны ошибок тоже полно, разве нет? Тебе незачем было заходить так далеко, да?',
          true,
        );
        await era.printAndWait([
          'Виновато потерев усталое лицо, ',
          you.get_colored_name(),
          ' всё же встречается с той парой тусклых вишнёвых зрачков.',
        ]);
      }
      await inner_urara.say_as_unknown_and_wait(
        'Но я и могу только так. Это уже финал — никому нельзя узнать, что Урара упала, иначе будет ещё хуже.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'И если я так не сделаю, ещё неизвестно, что вы вытворите, а если Урара проснётся и вас не увидит — вот тогда беда.',
      );
      await era.printAndWait([
        'Протягивает руку и гладит всё ещё сладко спящую рядом ',
        urara.get_colored_name(),
        ',「',
        urara.sex,
        ' 」 — выражение тоже смягчается, словно у матери, что успокаивает ребёнка.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        'И то правда, ',
        urara.sex,
        ' до каких пор ещё спать? Тебе же ещё бежать Arima Kinen. Ну же, просыпайся.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        callname,
        ' тоже уже нашёл(ла) тебя, да? А если так и не встанешь, я и сама не знаю, когда исчезну, знаешь?',
      ]);

      era.printButton(
        `「…Исчезнешь? Ты существуешь по-настоящему, и не совсем же ${urara.sex}, да? Даже так 『невидимый друг』 тоже исчезнет?」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        'Услышав ',
        you.get_colored_name(),
        ' — тихий вопрос, 「',
        urara.sex,
        ' 」 снова поворачивается к ',
        you.get_colored_name(),
        ', и снова натягивает ту улыбку, в которой всегда читается печаль.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Просто такое предчувствие: может, я и не настоящая, а всего лишь чей-то осколок, чьё-то отражение.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Так что в конце, если Урара сможет здоровой и телом, и душой закончить историю, то мне и исчезнуть всё равно.',
      );

      era.printButton(
        '「Ты тоже поспокойнее: хоть ты и властная мамочка, не слишком ли ты так про себя?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Ясно же: облик один в один как у маленькой ',
        urara.uma_sex_title,
        ', а речи всё пессимистичные — зрелище и впрямь невыносимое.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вот как? Мне ещё не нужно, чтобы этот ворчливый ',
        urara.sex_code === 1 ? ' шота' : 'лоли',
        'кон- ',
        you.adult_sex_title,
        ' (вы) ко мне придирались.',
      ]);
      await era.printAndWait([
        'Услышав ',
        you.get_colored_name(),
        ' — ответ, ',
        urara.sex,
        ' — улыбка будто теряет немного самоуничижительной печали, но всё же почти не смягчившись перескакивает через эту тему самоотрицания.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Так вот, о чём я… После того как ',
        urara.sex,
        ' упала, мне вдруг вспомнилось: может, я смогу ненадолго одолжить её тело — пока ',
        urara.sex,
        ' без сознания — и вместо неё бежать дальше, как бежала бы ',
        urara.sex,
        ' сама.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вот я и спрятала ненадолго её дух — потому ',
        urara.sex,
        ' и не просыпается: этого не должны были найти, а вы всё равно нашли.',
      ]);
      await era.printAndWait([
        '「',
        urara.sex,
        ' 」 гладя ',
        urara.get_colored_name(),
        ' — рука медленно погружается в маленькую ',
        urara.uma_sex_title,
        ' — тело, словно проходит сквозь проекцию, что бросает проектор.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'И это и правда способ, который проблемы не решит: даже если я смогу попасть на Arima Kinen, толку не будет…',
      );
      await inner_urara.say_as_unknown_and_wait([
        'и ещё благодаря тому, что даже когда ',
        urara.sex,
        ' заснула, всё равно всё время направляла ничего не умевшую меня, как бежать, — я и смогла играть до сих пор.',
      ]);

      era.printButton(
        '「Почему Урара стала такой… этот вопрос, наверное, мне стоит обдумать самой…」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'Но я должна прямо подчеркнуть вам: рядом с вами ',
        urara.sex,
        ' даже забыла, как сильно боится.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Поэтому полностью пробудившаяся ',
        urara.sex,
        ' первым делом спряталась — спряталась в ту глубь сердца, из которой ',
        urara.sex,
        ' и сама не знает, когда проснётся.',
      ]);
      await era.printAndWait([
        'Быть может, именно поэтому: «хорошие дети хоть немного пренебрегают своим сердцем»… поэтому «',
        urara.sex,
        ' » и всё твердит, что ',
        urara.get_colored_name(),
        ' не такая уж сильная.',
      ]);
      await era.printAndWait(
        'Потому что слишком нежная, боится ранить других, боится чужих пересудов, боится перемен в душе — вплоть до того, что боится собственной победы и желаний;',
      );
      await era.printAndWait(
        'Потому что не хочет обременять других, не идёт к ним выговориться; потому что слишком долго всё глушила, забитое сердце стало ещё упрямее;',
      );
      await era.printAndWait(
        'Потому что хочет вернуть душевный покой после самоотрицания, даже теряет рассудок и ищет у наставника рядом телесного утешения…',
      );
      await era.printAndWait([
        'Вот это да, хоть и не хочется так говорить, но эта чересчур чуткая строптивая лошадка — на кого же в семье ',
        urara.sex,
        ' похожа?',
      ]);

      era.printButton(
        `「Но всё это так и не удалось вовремя заметить; желания Урары стали тяжёлыми — ${urara.sex} сделала этот выбор сама, но и я тоже…」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'Вы и так достаточно хороши, да и сможете ли вы вправду ожесточиться против Урары? К тому же без вас рядом с Урарой ',
        urara.sex,
        ' давно бы уже сломалась.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Более того, вы всё это время были правы: развязать узел должен тот, кто его завязал, Урара не может 『проснуться』 сама, и чужими руками этот узел не развязать…',
      );

      era.printButton(
        `「Так в итоге ни как ${era.get('love:52') >= 75 ? ' возлюбленн(ый/ая)' : 'друг'} или как тренер — так и не смог(ла) по-настоящему помочь под конец?!」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' хотел(а) врезать кулаком по тумбочке рядом, но, взглянув на ',
        urara.get_colored_name(),
        ' — спокойный профиль, так и не смог(ла) опустить дрожащую руку.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Вы тоже не так спокойны, как кажетесь, впрочем, сейчас мы все в одном положении.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Заурядный тренер, которому вечно чуть-чуть не хватает умения и который не умеет озлобиться на весь мир; фантом, что ничего не может, но бредит насильно впихнуть другим счастье…',
      );
      await inner_urara.say_as_unknown_and_wait([
        '…и ещё: словно безмолвно нас обвиняя, всё никак не проснётся ',
        urara.sex,
        ', — кругом полный развал.',
      ]);

      era.printButton(
        `「Что ты такое говоришь, разве ты не ${urara.sex} — бедному тренеру натворила кучу жестокостей?」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Так что теперь уже нет. Я говорила, что ожесточусь и возьму конец этой истории в свои руки.',
      );

      era.printButton(
        '「Но теперь, при таком раскладе, я тем более не брошу Урару, так что тебе меня не прогнать.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Не нервничайте же, я вас вовсе не прогоню, о? Напротив, я знаю способ, как разбудить маленькую спящую красавицу, о?',
      );
      await era.printAndWait([
        'Глядя на ',
        you.get_colored_name(),
        ' — взгляд на семь частей настороженный, на три — недоумённый, «',
        urara.sex,
        ' » напротив, явила самую спокойную улыбку, но этот жест лишь сильнее заставил ',
        you.get_colored_name(),
        ' забить тревогу во все колокола.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Вы тоже видели, не так ли? Упавшая Урара спряталась в самую глубь своего убежища…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Тогда я воплощу картины из убежища в реальность — и Урара счастливо проснётся, счастливо будет жить дальше, верно?',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Вот какой конец я сейчас напишу, и Урара ведь затем тебя и звала: чтобы ',
        urara.sex,
        ' была найдена, — в этом и цель, а?',
      ]);
      await era.printAndWait([
        'В то мгновение, как ',
        you.get_colored_name(),
        ' отступает, окружающее пространство мигом окрашивается в знакомый серо-белый, и давящая тяжесть снова опускается сверху.',
      ]);
      await era.printAndWait([
        'Всё это время сидевшая у края кровати «',
        urara.sex,
        ' » поднимается и хватает ',
        you.get_colored_name(),
        ' — руку, которую хочет отдёрнуть, и ',
        you.get_colored_name(),
        ' силой ',
        urara.uma_sex_title,
        ' легко оказывается повален(а) на больничную койку.',
      ]);
      await era.printAndWait([
        'Пока мир переворачивается, ',
        you.get_colored_name(),
        ' видит, как два облика постепенно сливаются с ',
        urara.get_colored_name(),
        ', и та медленно открывает глаза—',
      ]);
      era.drawLine();
      await inner_urara.print_and_wait([
        'Не кажется ли, что сейчас всё очень похоже на ту пору, когда вы встретились с Урарой, забывчивый ',
        urara.sex_code === 1 ? ' шотта' : 'лоли',
        'кон-',
        you.adult_sex_title,
        ' (вы)?',
      ]);
      await inner_urara.print_and_wait(
        'Почему взгляд такой тяжёлый? Ах, простите, забыла, что сейчас вы не можете говорить, впрочем, сейчас и я тоже.',
      );
      await inner_urara.print_and_wait([
        'Да, почему именно вы? Почему это вы, хотя ',
        urara.sex,
        ' уже так боится, а вы всё равно хотите идти вперёд вместе — почему вы?',
      ]);
      await inner_urara.print_and_wait(
        'Зачем мне писать эту историю? Зачем вам её завершать? Почему это наша история?',
      );
      await inner_urara.print_and_wait(
        'Хотя собственных проблем у меня горы, сейчас я хочу лишь продолжать смотреть на вас; быть может, первой вами пленилась как раз я…',
      );
      await inner_urara.print_and_wait(
        'Как хорошо, ваше тело такое же тёплое, как прежде; не становится ли уже приятнее?',
      );
      await inner_urara.print_and_wait(
        'Ничего, будь то прикосновение или насилие, — нас двоих, которых вы к себе влекли, уже ничто от вас не оттолкнёт, так что можно и честнее, о?',
      );
      await inner_urara.print_and_wait(
        'Почему уворачиваетесь? Потому что не хотите принять такое счастье? Жаль, но сейчас у вас нет права отказать.',
      );
      await inner_urara.print_and_wait(
        'Не беспокойтесь, я создам мир, в котором Ураре, вам и всем будет радостно.',
      );
      await inner_urara.print_and_wait(
        'Хотя завтра вы ничего не вспомните, но когда снова откроете глаза, Урара уже счастливо вернётся к вам, о?',
      );
      await inner_urara.print_and_wait('Тогда хорошенько поспите.');
      era.drawLine();
      await era.printAndWait([
        'Резко проснувшись от кошмара, ',
        you.get_colored_name(),
        ' придерживает тихо ноющий лоб и размытым взглядом оглядывается вокруг.',
      ]);
      await era.printAndWait(
        'Кажется, это скамейка перед статуей Трёх богинь в школе; почему сам(а) уснул(а) здесь? И что собирался(ась) делать раньше?',
      );
      await era.printAndWait([
        'Будто только что приснился довольно жуткий сон, но ',
        you.get_colored_name(),
        ' никак не вспоминает ни крупицы его содержания.',
      ]);
      await era.printAndWait([
        'А перед ',
        you.get_colored_name(),
        ' стоит всё ещё улыбающаяся, хотя неизвестно сколько уже ждала, ',
        urara.get_colored_name(),
        '.',
      ]);

      era.printButton(
        '「Прости, что уснул(а), Урара, мы сегодня уже были в больнице…」',
        1,
      );
      await era.input();

      await you.say_and_wait(
        [
          'В… больницу? Почему я сказал(а) «в больницу», ведь подопечная перед глазами здорова до невозможности, зачем я хотел(а) вести ',
          urara.sex,
          ' в больницу?',
        ],
        true,
      );
      await era.printAndWait(
        'Что-то не так, всё кажется, что где-то не так, точно забыл(а) что-то очень важное, но… что же это…?',
      );
      await urara.say_and_wait([
        'Э? Больница? ',
        callname,
        ' Спросонья поплыло? Ураре ещё не надо на медосмотр, ну?',
      ]);
      await era.printAndWait([
        'Спиной к мягкому до нереальности солнцу, с улыбкой на всём лице ',
        urara.get_colored_name(),
        ' в тени протягивает полусонному(-ой) ',
        you.get_colored_name(),
        ' руку помощи.',
      ]);

      era.printButton(
        '「Н-н, а, и то верно, прости, я и правда спросонья поплыл(а)—」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Но едва ',
        you.get_colored_name(),
        ' берёт ',
        urara.get_colored_name(),
        ' за протянутую руку, как обнаруживает, что огромный кампус — даже трава и деревья — стих до полной немоты—',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_2: (() => {
    const title = 'Жажда 「пустоты」';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        ' Считаешь, желание Урары достойно всеобщего бега?',
      ]);
      await urara.say_and_wait([
        callname,
        ' Считаешь, желание Урары достойно общей помощи?',
      ]);
      await urara.say_and_wait([
        callname,
        ' — рука куда больше, чем у Урары, ну, одной хватит обхватить шею Урары.',
      ]);
      await urara.say_and_wait([
        callname,
        ', сложи обе руки на шее Урары и надави изо всех сил?',
      ]);
      await urara.say_and_wait([
        callname,
        ', пусть Урара, что сбежала от стыда перед всеми, станет куклой, которой ты вертишь как хочешь—',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Уже не в который раз вскакивая от кошмара, ',
        you.get_colored_name(),
        ' на скамейке перед статуей Трёх богинь придерживает тихо ноющий лоб.',
      ]);
      await era.printAndWait(
        'Сегодня снова вот так, непонятно почему, просыпаешься в странном месте, и вокруг снова тихо до жути.',
      );
      await era.printAndWait(
        'Не то чтобы остальные пропали — скорее само пространство вокруг будто замерло, лишившись всех шумов среды.',
      );
      await era.printAndWait(
        'И это ещё не самое тяжёлое: как только началась эта неделя, время в буквальном смысле встало.',
      );
      await era.printAndWait(
        'Не только уличные часы — наручные, телефон, компьютер, все знаки времени, какие видит глаз, застыли на одном миге.',
      );
      await era.printAndWait(
        'Но благодаря тому, что спрашивать время у других ещё срабатывает, пока ещё удаётся держать обычный быт.',
      );
      await era.printAndWait(
        'И именно поэтому все остальные, кто после потери нормального чувства времени и пространства всё ещё живёт как ни в чём не бывало, сейчас кажутся особенно странными.',
      );
      await era.printAndWait([
        'С точки зрения человека со здравым смыслом в такой ситуации спятил(а) сам(а), но для нынешнего ',
        you.get_colored_name(),
        ' это, пожалуй, мир и сам(а) сошли с ума вместе.',
      ]);
      await era.printAndWait([
        'И про ',
        urara.get_colored_name(),
        ' кошмары тоже, жуткие перемены вокруг тоже, всё не так, но так и выпало из памяти, почему всё стало так…',
      ]);
      await era.printAndWait([
        'Но едва ',
        you.get_colored_name(),
        ' с трудом поднимает мутную голову, как слабое ощущение неладного в груди разом резко раздувается—',
      ]);
      await era.printAndWait([
        'Вместе с ощущением неладного приходит и дежавю: ведь прямо перед ',
        you.get_colored_name(),
        ' стоит, ждавшая неизвестно сколько и всё ещё с улыбкой, ',
        urara.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([
        callname,
        '!Сегодня же договорились вместе погулять? Что опять здесь уснул(а), устал(а)—',
      ]);

      era.printButton('「Урара, сколько уже прошло?»', 1);
      await era.input();

      await era.printAndWait([
        'Внезапно подняв голову и оборвав ',
        urara.get_colored_name(),
        ' — приветствие, наконец поняв, что случилось, ',
        you.get_colored_name(),
        ' серьёзно смотрит на ',
        urara.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([
        'А, ',
        callname,
        ' в последнее время всё спрашиваешь, который час, ну, но и не проспал(а) так уж долго? Дай подумать…',
      ]);

      era.printButton(
        `「Не сегодняшнее время, Урара, твой ${callname} спрашивает: 『сколько прошло с тех пор, как время остановилось』.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('——');
      await era.printAndWait([
        'Словно пережив тихий ливень, после долгого молчания ',
        urara.get_colored_name(),
        ' тихо садится на другой край скамейки.',
      ]);
      await era.printAndWait([
        'Только на этот раз ',
        urara.sex,
        ' — на маленьком лице больше нет обычной улыбки, только вина, как у ребёнка, что натворил дел.',
      ]);
      await urara.say_and_wait(
        'Прости, Урара на самом деле тоже не знает, какая это уже неделя…',
      );
      await urara.say_and_wait([
        'Потому что 『',
        urara.sex,
        ' 』 сказала, что здесь можно быть сколько угодно, но… всё-таки ',
        callname,
        ' всё равно вспоминает…',
      ]);
      await urara.say_and_wait(
        'Урара ясно знает, что так нельзя, но всё равно тонет в фальшивых днях…',
      );
      await era.printAndWait([
        'Похоже, ',
        urara.sex,
        ' на этот раз и правда что-то сделала не так, хотя ',
        you.get_colored_name(),
        ' спрашивает не потому, что что-то вспомнил(а) ',
        urara.sex,
        '.',
      ]);

      era.printButton(
        '「На самом деле и сейчас ничего не вспоминается, просто вдруг дошло, что где-то не так, и всё. В последнее время ещё что-то случилось?»',
        1,
      );

      await urara.say_and_wait([
        'Нет, ну? Просто каждый раз, как ',
        callname,
        ' вспоминает что-то, 『',
        urara.sex,
        ' 』 появляется и забирает ',
        callname,
        ' — память, так что…',
      ]);
      await era.printAndWait(
        'Если подумать — оно и так: та балующая родительница не позволит нестабильному фактору своевольничать, сейчас это разве что прореха в тысяче мер.',
      );
      await era.printAndWait([
        'И ',
        you.get_colored_name(),
        ' тоже ни за что не упустит этот шанс: по крайней мере нынешняя ',
        urara.get_colored_name(),
        ' куда нормальнее, чем в 「прошлом месяце」, и если сейчас…',
      ]);
      await era.printAndWait([
        'Но не успевает ',
        you.get_colored_name(),
        ' открыть рот, как ',
        urara.get_colored_name(),
        ' на шаг раньше смотрит умоляющим взглядом на самого близкого взрослого рядом.',
      ]);
      await urara.say_and_wait([
        'Пожалуйста, не убегай, ',
        callname,
        ' точно так и скажет, ну, но… Урара ещё хочет побыть здесь немного…',
      ]);

      era.printButton(
        `「Даже зная, что всё нынешнее — лишь бумажный ящик-сад, что подруга Урары создала ради того, чтобы ${urara.sex} могла здесь оставаться, — и всё равно хочешь?»`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Но здесь правда так спокойно, ',
        callname,
        ' тоже это чувствуешь, правда? Даже если…',
      ]);
      await era.printAndWait([
        'Вслед за тем, как ',
        urara.get_colored_name(),
        ' внезапно смолкает, и в этой тишине ',
        you.get_colored_name(),
        ' вздыхает и подхватывает дальше.',
      ]);

      era.printButton(
        '「Урара, те странные сны, что мне всё время снятся… не буду про содержание, всё это правда происходило, да?»',
        1,
      );
      await era.input();

      await urara.say_and_wait('Н-н…');
      await era.printAndWait([
        'Хоть и угадал(а) верно, но когда ',
        urara.get_colored_name(),
        ' признаётся, смотреть уже не хочется. ',
        urara.get_colored_name(),
        ' так вот значит… ребёнок с настолько извращёнными 「увлечениями」?',
      ]);

      era.printButton(
        `「Даже если в конце тебя каждый раз ранит собственный ${callname}, тебе всё равно? Не мучай себя так.»`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Потому что Урара очень боится: если однажды Урара проиграет, если однажды больше не сможет встать…',
      );
      await urara.say_and_wait([
        'Поэтому если однажды ни все, ни ',
        callname,
        ' не будут рядом с Урарой…',
      ]);
      await urara.say_and_wait(
        '…Нет, Урара знает, что такого не будет, но всё равно в страхе убежала…',
      );
      await urara.say_and_wait('Это…');

      era.printButton(
        '「Это потому, что Ураре никогда не было всё равно, верно? Но Урара слишком всё на себя берёт, пора чуть полегче.»',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Но, ',
        callname,
        ' не хочешь быть с Урарой всегда? Даже если хватит только ',
        callname,
        ' одного…',
      ]);

      era.printButton(
        '「Но если так, чем то, что хочет Урара, отличается от того, что хочет твой тот мрачный друг?»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Смотря прямо в глаза ',
        urara.get_colored_name(),
        ', что вот-вот прольются слезами, ',
        you.get_colored_name(),
        ' сдерживает желание смягчиться и снова говорит.',
      ]);
      await era.printAndWait([
        'Хотя бы в этот раз не как раньше, к тому же ',
        urara.get_colored_name(),
        '  — ',
        callname,
        ' уж не хочет снова видеть ',
        urara.get_colored_name(),
        '  с таким же мрачным лицом, какое показывает 「',
        urara.sex,
        '」.',
      ]);

      era.printButton(
        `「Сейчас Урара, может, хочет лишь ту надежду, что несёт ${callname}, но моя надежда — увидеть завтрашний день Урары.»`,
        1,
      );
      await era.input();

      await era.printAndWait([
        'И в этот раз тоже стоя на солнце, но уже решительно ',
        you.get_colored_name(),
        ' протягивает руку к ',
        urara.get_colored_name(),
        ', чей взгляд постепенно светлеет. Разве не всегда так было?',
      ]);
      await era.printAndWait(
        'Как бы ни было растерянно, будущее можно преодолеть вместе, даже на пороге финала. Чем бесплодное молчание — лучше хоть раз снова довериться друг другу.',
      );

      era.printButton(
        '「Каким будет итог — потом, я всегда буду стоять за спиной Урары, так что пусть все увидят, как Урара бежит на Arima Kinen.»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Глядя на своего тренера, ',
        urara.get_colored_name(),
        ' как будто постепенно обретает смелость встать со скамейки и слегка кладёт пальцы на ',
        you.get_colored_name(),
        ' — руку.',
      ]);
      await urara.say_and_wait([
        'Тогда… ',
        callname,
        ' пойдёшь со мной туда, где 『',
        urara.sex,
        '』, — извиниться перед ней?',
      ]);

      era.printButton(
        `「Конечно, без проблем, да и немало упрёков ${inner_urara.sex} от меня ещё выслушает.»`,
        1,
      );
      await era.input();

      await urara.say_and_wait('Ага! Тогда вот так…');
      await era.printAndWait([
        'Затем под давлением, от которого зрение стало серо-белым, силой подменила стоящую перед ',
        you.get_colored_name(),
        ' маленькую ',
        urara.uma_sex_title,
        ',「',
        urara.sex,
        ' 」 в ярости отбивает ',
        you.get_colored_name(),
        '  — руку, протянутую к ',
        urara.get_colored_name(),
        '.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Вы только отвлекись — уже тут, какой смысл давить на Урару? Не лучше ли уважать то, чего ',
        urara.sex,
        ' хочет?',
      ]);

      era.printButton(
        '「Не сравнивай меня с грибом, да и разве не договорились вместе пойти к тебе извиниться? Ну и мелочная же ты.»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Перед хищно сверлящей взглядом 「',
        urara.sex,
        ' 」, ',
        you.get_colored_name(),
        ' вынужденно держит дистанцию от розового котёнка перед глазами, у которого вся шерсть встала дыбом.',
      ]);

      era.printButton(
        '「Да и если подумать, сейчас больше всех тревожится о положении не Урара, а…」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'Да! Вот за это я вас и ненавижу! Ты, и Урара, и те, кто вокруг ',
        urara.sex,
        ', все как один!',
      ]);
      await era.printAndWait([
        'Вспылив от того, что больше невмоготу, шагнув вперёд и изо всех сил схватив ',
        you.get_colored_name(),
        '  — одежду, ',
        urara.teen_sex_title,
        ' в слезах изливает загнанную на дно души ненависть к миру.',
      ]);
      await era.printAndWait(
        'Неизвестно с какого мига вокруг сыплются хрупкие удары бьющегося стекла, и с каждой упавшей слезой декорации мира вокруг постепенно рассыпаются.',
      );
      await era.printAndWait([
        'Но даже стоя в центре аномалии, остановиться уже поздно. Позволяя 「',
        urara.sex,
        ' 」 тянуть себя, ',
        you.get_colored_name(),
        ' спокойно продолжает разговор.',
      ]);

      era.printButton(
        '「…Хоть и из отвращения, но ты ведь всё это время помогала Ураре, нет?»',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'Да, почему? Ведь достаточно было смотреть, как ',
        urara.sex,
        ' проиграет, и дать ',
        urara.sex,
        ' бросить своё желание — и всё!',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Тогда ',
        urara.sex,
        ' могла бы вернуться домой к обычной жизни… нет, с самого начала стоило просто отвергнуть слова, с которыми ',
        urara.sex,
        ' подошла, — и всё!',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Если бы с самого начала получилось не поддаться, когда ',
        urara.sex,
        ' улыбнулась… но это мой собственный выбор…',
      ]);
      await era.printAndWait([
        'И нынешняя ',
        urara.sex,
        ' — как её описать? После печали и гнева, что отвергают всё, ещё и… неизвестно, к ревности и бессилию?',
      ]);
      await era.printAndWait([
        'Неспособная быть честной ',
        urara.sex,
        ', с одной стороны копит отвращение к окружающим, а с другой, ничего не умея, питает к миру ',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Да, больше я вам ни за что не помогу, один и другой — просто дураки какие-то…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Ради пустоты под именем 『надежда и сияние』 ставить всё, так отчаянно рваться — если проиграешь, разве не конец?!',
      );

      era.printButton(
        '「Потому что жизнь одна: не идя в завтра, и в прошлом не застыть — совсем как то, что ты сейчас делаешь —」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Ха! Вам всё мало? Урара уже принесла вам несколько, несколько первых мест, о каких я и мечтать не смела!',
      );
      await inner_urara.say_as_unknown_and_wait(
        'До чего уже дошло! Если идти ради бескорыстного желания — и дальше ранить других, то что такого в том, чтобы чуть побыть эгоисткой!',
      );
      await era.printAndWait([
        'Сорвавшись, оборвав ',
        you.get_colored_name(),
        '  — речь, ',
        urara.teen_sex_title,
        ' сквозь слёзы выдавливает улыбку, от которой больно, будто это сломанная кукла.',
      ]);
      await era.printAndWait([
        'Но даже когда ',
        urara.sex,
        ' душит так, что не вздохнуть, ',
        you.get_colored_name(),
        ' всё равно не собирается снова подчиняться тому, чего ',
        urara.sex,
        ' хочет: бросить всё.',
      ]);

      era.printButton(
        `「Урара никогда не бежала ради меня, и если я сейчас эгоистично этим воспользуюсь, ${urara.sex} — все усилия пропадут даром.」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'Хватит морочить голову! То, что ты называешь напрасными усилиями, — это Урара или твоя карьера?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'И ведь я ещё…… с самого начала вас любила…… в конце концов вы ничем не отличаетесь от остальных……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Чем позволять Ураре и дальше стараться и снова ранить других и себя, лучше сейчас же, сейчас же……',
      );
      await era.printAndWait([
        'Слова захлебнулись собственными слезами, и бессильно отпустила ',
        you.get_colored_name(),
        ' — одежду, ',
        urara.teen_sex_title,
        ' в отчаянии снова плюхнулась на скамью позади.',
      ]);
      await era.printAndWait([
        'Уж не говоря о том, чтобы спугнуть ',
        you.get_colored_name(),
        ' , нынешняя маленькая ',
        urara.uma_sex_title,
        ' словно вот-вот падающая ',
        urara.get_colored_name(),
        ' , и её вот-вот раздавит собственная изломанность.',
      ]);

      era.printButton('「Так и есть: больше всех боишься ты……」', 1);
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '……простите……я всё время говорила жестокие вещи……но мне правда очень страшно……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Вы всегда честно говорите правильные ответы, но противная я никак не смогу стать такой, какой вы хотите……',
      );
      await era.printAndWait(
        'Совсем ни во что не верить и при этом упрямо верить в любовь — вот так задачка мирового масштаба.',
      );
      await era.printAndWait([
        'Как на это реагировать? Когда тебя любит такая печальная и уставшая от мира, какое же обещание дать, чтобы ',
        urara.sex,
        ' приняла его?',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Так и есть, ничего не говорите…… а я думала…… вы в конце хоть чуть-чуть ответите на мою капризность, пусть даже солжёте, что готовы остаться……',
      );
      await urara.say_and_wait([
        'Не так же? Просто твои чувства слишком горячие, и оттого изначально『свежий』 ',
        callname,
        '  стал(а)『хлопотным』— вот и всё!',
      ]);
      await era.printAndWait([
        'Дробный треск будто размыл границу между неподвижностью и течением, а теперь рядом с ',
        you.get_colored_name(),
        '  плечом к плечу стоит вишнёво-розовая вспышка, невесть когда возникшая.',
      ]);
      await era.printAndWait([
        'Герой выходит на сцену? По крайней мере в этот раз ',
        urara.get_colored_name(),
        '  наконец вместе с ',
        you.get_colored_name(),
        '  встала перед той, что зовётся 「',
        urara.sex,
        '」.',
      ]);
      await era.printAndWait(
        'Жаль только: почему иной герой, едва примчавшись, сразу говорит, что её тренер「стал хлопотным」?',
      );
      await era.printAndWait([
        'А увидев ',
        urara.get_colored_name(),
        ' , хоть глаза уже опухли от слёз, но「',
        urara.sex,
        ' 」 всё равно, словно старшая сестра, что хорохорится перед младшей, вытерла слёзы.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Ха-а…… в итоге Урара тоже всё ещё хочет быть героем для всех…… да говорю же тебе…… разве бежать впереди всех так красиво?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Разве не лучше просто радостно быть собой, как все с самого начала и говорили? Ты и правда думаешь, что сможешь их спасти?',
      );
      await era.printAndWait([
        'Но перед напором другого себя ',
        urara.get_colored_name(),
        '  наоборот, чем когда вначале говорила с ',
        you.get_colored_name(),
        ' , стала ещё твёрже.',
      ]);
      await urara.say_and_wait(
        'Урара о таком не думала, потому что все очень сильные, Урара хочет отплатить всем, и ещё……',
      );
      await urara.say_and_wait(
        'Урара только что услышала: тебе тоже всё это время было обидно, но так я тем более не могу убегать.',
      );
      await urara.say_and_wait(
        'Прости, Урара в первый раз слышит твои чувства, но раз так — Ураре тем более нужно бежать дальше!',
      );
      await era.printAndWait([
        'Крошечная ',
        urara.uma_sex_title,
        ' сжала ладони, и в колышущихся вишнёвых зрачках отразилось другое я, будто ',
        urara.elder_sibling_sex_title,
        ' себя.',
      ]);
      await urara.say_and_wait(
        'Потому что здесь же есть те, кому Урара нужнее, так что поверь в Урару ещё раз……?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Ха…… потому что Урара тоже хочет меня пожалеть……',
      );
      await urara.say_and_wait(
        'Потому что хотя другие не видят, но ты, что росла вместе с Урарой и всё время её защищала, тоже мой герой!',
      );
      await urara.say_and_wait([
        'Так что всё равно, Урара или ',
        callname,
        '  или все — как угодно, пойдём с нами……!',
      ]);
      await era.printAndWait([
        'Стоя перед ',
        you.get_colored_name(),
        '  лицом к лицу с другим, спрятанным в сердце ',
        urara.get_colored_name(),
        ', вишнёво-розовая ',
        urara.sex,
        ' будто в одно мгновение сбросила всю прежнюю наивность.',
      ]);
      await era.printAndWait([
        'Наблюдая ',
        urara.get_colored_name(),
        '  перемену, не только всё время ради этого старавшегося ',
        you.get_colored_name(),
        ', даже「',
        urara.sex,
        ' 」 тоже широко раскрыла красные опухшие глаза, и на миг мелькнула радость.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Ха-ха…… так вот оно как? В итоге последняя деталь, от которой Урара стала крепче, — это я……',
      );
      await era.printAndWait([
        'Но даже так упрямая ',
        urara.sex,
        ' всё равно не приняла в растрескавшемся в пустоту мире ',
        urara.get_colored_name(),
        ' — приглашения.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Вы все такие неразумные, но я не позволю вам так просто закончить……',
      );
      await era.printAndWait([
        'Слова стихли, и сидевшая на скамье「',
        urara.sex,
        ' 」 оставила капризное заявление и исчезла, и несмолкавший вокруг треск тоже разом стих.',
      ]);
      await era.printAndWait([
        'Время снова пошло, птичьи голоса и ветер снова вернулись к двоим, но ',
        urara.sex,
        ' — по словам, цикл, похоже, всё ещё длится.',
      ]);
      await era.printAndWait(
        'Хотя проблема ещё не решена, но сейчас хотя бы оставшиеся двое понемногу успокоились и наконец смогли чуть позаботиться друг о друге.',
      );
      await era.printAndWait([
        'И стоило только перевести взгляд в сторону, как ',
        you.get_colored_name(),
        '  сразу видит ',
        urara.get_colored_name(),
        '  протянула обе ладони и с растерянным лицом всё ловила слёзы, что капали с щёк.',
      ]);
      await urara.say_and_wait([
        'Э? ',
        callname,
        ', у Урары на лице…… Урара плачет? Потому что вдруг стало очень грустно?',
      ]);
      await urara.say_and_wait([
        'Это ',
        urara.sex,
        ' — чувства? Если бы Урара раньше это поняла……',
      ]);

      era.printButton(
        `「Ничего, по крайней мере сейчас эта неделя должна спокойно закончиться, а потом мы пойдём искать, где же ${inner_urara.sex}……」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '……Ага! Но Урара не чувствует ',
        urara.sex,
        ' больше, ',
        urara.sex,
        ' куда же делась?',
      ]);

      era.printButton(
        '「Может, спросить дорогих богинь? Потому что я помню, перед статуями богинь в школе вроде не было скамьи.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Затем ',
        you.get_colored_name(),
        '  и ',
        urara.get_colored_name(),
        '  одновременно посмотрели в сторону статуй трёх богинь, что будто всё это видели и всё время тихо улыбались под завесой——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_3: (() => {
    const title = (urara) => [
      '「все」 — желание, ',
      { color: urara.color, content: `「${urara.actual_name} 」` },
      ' — желание',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        ', готовы идти первыми? Урара сразу следом! Так что сегодня ',
        urara.sex,
        ' непременно должна вернуться обратно!',
      ]);
      era.drawLine();

      era.printButton(
        '「Сегодня погода не очень, да? Сидишь здесь — что-то гложет?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Шагая без остановки по серо-белому пространству, ',
        you.get_colored_name(),
        ' в итоге находит ту крошечную фигурку на широком лугу.',
      ]);
      await era.printAndWait(
        'Впрочем, ты здесь впервые — вот уж чудеса: только что ещё стоял(а) перед статуей богинь…',
      );
      await era.printAndWait([
        'Только хозяйка здешних мест, кажется, яростно гонит гостей. Проигнорировавшая бессвязное приветствие ',
        urara.sex,
        ', и в миг, когда ',
        you.get_colored_name(),
        ' приближается, срывается с травы.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '…Вы как сюда попали? То один, то другой — почему никто не хочет остаться…',
      );
      await era.printAndWait([
        'Бросает полный злобы взгляд на того 「нарушителя」, кому здесь быть нельзя, и маленькая ',
        urara.uma_sex_title,
        ' с тревогой глядит на ',
        you.get_colored_name(),
        ' и спрашивает.',
      ]);

      era.printButton(
        '「Здесь твой мир, и петля снаружи тоже твоя работа, так что обе стороны хотя бы связаны — способ найдётся, верно?」',
        1,
      );
      await era.input();

      await you.say_and_wait(
        'То есть если гость хочет прийти, хозяину достаточно чуть-чуть позволить — и гость явится сюда, как ты и желаешь…',
      );
      await era.printAndWait([
        'Говоря так просто, будто это детская головоломка, ',
        you.get_colored_name(),
        ' беспомощно пожимает плечами.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Я спрашиваю, откуда вы это знаете…',
      );

      era.printButton(
        '「Урара чуть спросила трёх богинь, вот и всё, так что я чуть подготовился(лась) и вошёл(шла)…」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Хотя и правда совершенно непонятно, как ',
        urara.get_colored_name(),
        ' спросила; впрочем, хоть ',
        urara.uma_sex_title,
        ' — дела или дела трёх богинь — не надо же разбирать так уж ясно, верно?',
      ]);
      await era.printAndWait([
        'Так и не выдерживая чужого острого, полного сомнения взгляда, ',
        you.get_colored_name(),
        ' молча отводит глаза.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Снова чужую любовь — отмычкой для взлома? Вы и вправду отброс, что жрёт чужие чувства…!',
      );

      era.printButton(
        '「Я ещё не сказал(а), а ты уже сама… у-ва! Ладно-ладно! Не бей, я виноват(а), можно мне только в этот раз?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Чуть не словив удар копытом в незнакомом месте, на предельной дистанции увернувшись от ',
        urara.uma_sex_title,
        ' — атаку, ',
        you.get_colored_name(),
        ' чувствует, что душа сейчас вылетит.',
      ]);
      await era.printAndWait(
        'Но хорошо, что в этом мире без полиции, что мерит порядок, хозяину поскорее извиниться всё-таки помогает.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Вы опять за своё. Силой взламывать чужое сердце и заставлять принять чужой смысл — разве это не подло?',
      );

      era.printButton(
        '「Может, и так, — и что с того? Урара тоже дала мне 『смысл』 стоять здесь.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Перед прямолинейным ',
        you.get_colored_name(),
        ',「',
        urara.sex,
        ' 」 тоже молчит. Всё — в несказанном, ведь первая встреча была именно такой.',
      ]);
      await era.printAndWait([
        'Если бы не встреча с ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' наверное, до сих пор не было бы ответа в растерянности того дня и не было бы пути сюда.',
      ]);
      await era.printAndWait([
        'Если бы не 「',
        urara.sex,
        ' 」 — выбор, ',
        urara.get_colored_name(),
        ' не встретила бы ',
        you.get_colored_name(),
        ', и трёхлетняя история бега в три ноги на двоих сама не дописалась бы досюда.',
      ]);
      await era.printAndWait([
        'Но копнуть ещё глубже — самое начало, наверное, в том миге, когда ',
        urara.get_colored_name(),
        ' 「жёстко」 втянула замкнутого человека в жизнь.',
      ]);
      await era.printAndWait([
        'Вздохнув, ',
        you.get_colored_name(),
        ' осторожно садится на корточки у молча севшей обратно на серо-белую траву маленькая ',
        urara.uma_sex_title,
        ' рядом.',
      ]);

      era.printButton(
        '「Тогда о другом: в дни подготовки к тебе время не шло вперёд, но Урара жила себе довольно весело.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'И что в итоге? Когда отдохнёте вдоволь, вы всё равно будете толкать её, чтобы ',
        urara.sex,
        ' шла вперёд?',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Даже Урара уже знает: конец истории я держу в своих руках?',
      );
      await era.printAndWait([
        'Кажется, не хочет смотреть на ',
        you.get_colored_name(),
        ' — лицо, 「',
        urara.sex,
        ' 」 прижимает уши и жёстко крутит голову в противоположную от ',
        you.get_colored_name(),
        ' сторону.',
      ]);

      era.printButton(
        '「Мы до сих пор сидим здесь как раз потому, что ты не можешь закончить эту историю.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Хоть лица не видно, но сейчас ',
        urara.sex,
        ' — тело и правда дрожит, будто молния ударила. Похоже, в точку.',
      ]);
      await era.printAndWait([
        'Хотя и неизвестно, как ',
        urara.sex,
        ' это сделала, но петля времени — как раз потому, что ',
        urara.sex,
        ' не может по-настоящему создать желаемый мир.',
      ]);
      await era.printAndWait(
        'Даже если одержимостью к чему-то остановить время на самом исходе трёх лет, по-настоящему застывший мир всё равно не выйдет.',
      );
      await era.printAndWait(
        'Потому что приход завтра не остановить даже трём богиням, и прятки день за днём ничего не дадут.',
      );
      await era.printAndWait([
        'А теперь зашедшая слишком далеко 「',
        urara.sex,
        ' 」 уже не может остановить цикл иначе, чем тихо исчезнуть.',
      ]);

      era.printButton('「— Я не ошибаюсь, да?」', 1);
      await era.input();
      era.printButton('「『Хару Урара』.」', 1);
      era.printButton('「『Хару Урара』.」', 2);
      era.printButton('「『Хару Урара』.」', 3);
      await era.input();

      await era.printAndWait(
        'Ну и ну, упрямиться тоже надо знать меру: так никто не будет счастлив, и это точно не способ решить проблему.',
      );
      await era.printAndWait([
        'Впрочем, хоть давно было ясно, шутка богинь и вправду чересчур: запихнуть в один мир двоих совершенно противоположных ',
        urara.get_colored_actual_name(),
        '.',
      ]);
      await era.printAndWait([
        'Или чтобы стала та, что всего боится и ни во что не верит, маленькая ',
        urara.uma_sex_title,
        ' чуть счастливее? Ну и ладно, сегодняшняя главная задача — чтобы ',
        urara.sex,
        ' вернулась назад.',
      ]);

      era.printButton(
        '「Так что даже если всё перемешалось в кашу, делать такое незачем, верно? Все ещё ждут, пока ты вернёшься.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '…А? Все ждут меня? Вы тоже с ума сошли? Меня знают только —',
      );
      await era.printAndWait(
        'Не успели слова упасть — бессчётные голоса хлынули снаружи в это пространство, и серо-белый луг вмиг стал будто людный двор.',
      );
      await era.printAndWait([
        'То были зовущие голоса самых родных людей, что даже вечно прятавшаяся за ',
        urara.get_colored_name(),
        ' спиной 「',
        urara.sex,
        ' 」 слышала бессчётное число раз.',
      ]);
      await era.printAndWait(
        'Голоса одноклассников из Трейсен, всех с торговой улицы, членов клуба поддержки и даже не таких знакомых болельщиков со всех концов…',
      );
      await era.printAndWait(
        'Словно сдирают сумрачный полог неба, словно подбадривают чей-то бег — нежные, но звонкие голоса сотрясают всё поле.',
      );

      era.printButton(
        '「Раз ты тоже Урара, разве не ты лучше всех знаешь, как здесь понимают друг друга? Здесь же не только твой мир, правда?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Перед потрясённой до того, что в спешке вскочила, «',
        urara.sex,
        ' 」, ',
        you.get_colored_name(),
        ' не торопясь достаёт из кармана свой телефон.',
      ]);
      await era.printAndWait([
        'Здесь — «',
        urara.get_colored_name(),
        ' — мир», и по ',
        urara.get_colored_name(),
        ' собранным благословениям: пока есть хоть один человек, кто думает о ',
        urara.get_colored_name(),
        ', тогда ',
        urara.sex,
        ' дойдёт куда угодно.',
      ]);
      await era.printAndWait([
        'Хотя сейчас, вместо того чтобы дать маленькой ',
        urara.uma_sex_title,
        ' 「путь к победе」, скорее уж ',
        urara.get_colored_name(),
        ' самой «пробить стену сердца».',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' станет сильнее благодаря всем, кто поддерживает ',
        urara.sex,
        ', и потому сможет вернуть всем, кто любит ',
        urara.sex,
        ', то, что только ',
        urara.sex,
        ' сможет почувствовать.',
      ]);
      await era.printAndWait([
        'Так что даже без памяти все и раньше смутно чувствовали, что у той, кого зовут «',
        urara.get_colored_actual_name(),
        ' » маленькой ',
        urara.uma_sex_title,
        ' будто есть и другая сторона.',
      ]);
      await era.printAndWait([
        'И вот при ',
        you.get_colored_name(),
        ' — поддержке, ',
        urara.get_colored_name(),
        ' в этом круге носилась и делилась историей «',
        urara.sex,
        ' » со всеми, кому небезразлична ',
        urara.sex,
        '.',
      ]);
      await era.printAndWait([
        'Так что где бы ни пряталась другая ',
        urara.sex,
        ', ',
        urara.get_colored_name(),
        ' всё равно, следуя «желаниям всех», найдёт самую глубину сердца.',
      ]);
      await era.printAndWait([
        'И правда: дай только время — любые перемены становятся сами собой разумеющимися, а ',
        urara.get_colored_name(),
        ' и ',
        urara.sex,
        ' — тренер тоже невероятно везучие.',
      ]);

      era.printButton(
        '「Конечно, раз все готовы верить в『Урару』, то и мне как тренеру точно надо поддержать атмосферу.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Достав последний элемент качественного перелома, что когда-то ненароком собрал(а), на глазах у той, кого зовут «',
        urara.sex,
        '», ',
        you.get_colored_name(),
        ' с улыбкой нажимает кнопку воспроизведения телефонной записи.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Закончив разминку, поправив форму для скачек и стоя в коридоре у входа в серо-белое пространство, ',
        urara.get_colored_name(),
        ' начала сегодняшний бег.',
      ]);
      await era.printAndWait([
        'Дорога впереди наверняка куда длиннее дорожки Arima Kinen, хотя это всего лишь ',
        urara.get_colored_name(),
        ' — чутьё, потому что ',
        urara.sex,
        ' всё ещё очень боится.',
      ]);
      await urara.say_and_wait(
        'Но чего же ты боишься:『Урары』, которую ранят, или『Урары』, которая ничего не сумеет?',
      );
      await era.printAndWait([
        'В скачке, где она одна, ',
        urara.get_colored_name(),
        ' будто беседуя с невидимым другом, тихо бросает встречный вопрос в пустую серо-белую даль впереди.',
      ]);
      await era.printAndWait([
        'Хотя никто не скажет ',
        urara.get_colored_name(),
        ' ответа, но эхо вокруг, что ведёт ',
        urara.get_colored_name(),
        ', будто отвечает на ',
        urara.get_colored_name(),
        ' — слова.',
      ]);
      await era.printAndWait(
        'Это голоса желаний всех: по мере того как впереди становится всё светлее, всё больше голосов появляется по обе стороны скаковой дорожки.',
      );
      await urara.say_and_wait(
        'Стараться не всегда даёт результат, и на пути перемен можно потерять всё. Урара это знает, да?',
      );
      await urara.say_and_wait(
        'А вот выбрать смотреть со стороны и топтаться на месте — вот это точно без результата. Одно понимание правды ещё не делает взрослым.',
      );
      await urara.say_and_wait(
        'Бежать быстрее можно только так: вытереть слёзы и своими руками наклеить пластырь на содранные колени…',
      );
      await urara.say_and_wait(
        'Так что даже если придётся бороться с другими за единственный шанс — не робей, потому что——',
      );
      await era.printAndWait([
        'Среди силуэтов, мелькнувших по обе стороны, ',
        urara.get_colored_name(),
        ' увидела человека, который на скачках всегда стоит на самом верху трибун и смотрит, как ',
        urara.sex,
        ' бежит, — того самого.',
      ]);
      await era.printAndWait([
        'И ещё одну, что даже среди разных голосов желаний всех звучит так ясно, будто прямо у ',
        urara.get_colored_name(),
        ' — уха слышна「телефонная запись」.',
      ]);
      await era.printAndWait(
        'Серо-белое впереди, по которому уже невесть сколько шла, постепенно сдирается светом, и бесчисленные блики, как указатели пути, кружатся в воздухе.',
      );
      await era.printAndWait([
        'Гоня вперёд тело, что бежало невесть сколько, но всё ещё полно боевого духа, ',
        urara.get_colored_name(),
        ' с улыбкой победы за первое место врезается в расколотое зеркало впереди——',
      ]);
      era.drawLine();
      await era.printAndWait([
        callname,
        ' — голос: 「Потому что все хоть и не такие уж крепкие, но и не такие хрупкие, как боится Урара.」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「Не отнять: этот путь и правда жесток: кто-то идёт ради семьи, кто-то бежит, чтобы быть сытым;」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「У кого-то мечта тяжелее горных хребтов, а кто-то хочет сберечь обещание с дорогим человеком…」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「Как кто-то говорил: стоит выйти на скаковую дорожку и взять победу — и уже не получится, чтобы улыбнулись все.」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「Чтобы все сочли『удовлетворительным』, по сути, можно только прибежать последней.」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「Но даже так『счастье и надежда』, о которых молят все, — это вовсе не то, что другой легко решит за них.」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「Даже упав бессчётное число раз, у каждого всё равно есть право гнаться за счастьем, и определение надежды у всех своё.」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「То, что делает Урара, точно не ранит других, так что не думай, будто твой идеал лёгок, как пушинка.」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「『',
        urara.get_colored_actual_name(),
        ' 』 несёт улыбки всех — вес, что принадлежит только ',
        urara.sex,
        ', и его не сможет нести никто другой.」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「Это вовсе не «проиграла — и ладно», и не отказ от своей мечты ради того, чтобы сбылось у других.」',
      ]);
      await era.printAndWait([
        callname,
        ' — голос: 「Так что беги вволю, с надеждой всех и с верой самой Урары в победу——',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……!');
      await era.printAndWait(
        'Запылённый мираж спадает вмиг, осколки пространства проносятся в нём, как метель, и, исчезнув без следа, являют прежний облик, что был скрыт.',
      );
      await era.printAndWait([
        'Бесчисленные краски зажигают отсвет в тусклых глазах «',
        urara.sex,
        ' », и под безоблачной синевой ',
        urara.sex,
        ' с недоумением оглядывает перемены вокруг,',
      ]);
      await era.printAndWait(
        'Это не какая-то важная скачка, но всё же начало всего — Тренировочное поле Трейсен.',
      );

      era.printButton(
        `「Так что ${urara.sex} непременно придёт сюда: та, у которой выросли настоящие крылья,『непобедимая Хару Урара』.」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        'Вместе с ',
        you.get_colored_name(),
        ' — словами с самого края зрения на дорожку врывается вихрь вишнёвого, как весенний ветер.',
      ]);
      await era.printAndWait([
        'Стоя перед другим собой, с расцветшими в глазах цветами, маленькая ',
        urara.uma_sex_title,
        ' дарит тёплую улыбку.',
      ]);
      await urara.say_and_wait(
        'Прости, чуть опоздала! Сегодняшняя Урара наконец тебя нашла!',
      );
      await urara.say_and_wait(
        'Ну вот, мы уже придумали, как всем выбраться целыми! Все тебя ждут, пойдём обратно!',
      );
      await era.printAndWait([
        'Словно не зная, как встретить маленькая ',
        urara.uma_sex_title,
        ' — улыбку, 「',
        urara.sex,
        ' 」 робко пятится назад, но человек перед ней ловит её за обе руки.',
      ]);
      await era.printAndWait([
        'Опустив взгляд на две крепко держащие её, по одной от ',
        you.get_colored_name(),
        ' и от ',
        urara.get_colored_name(),
        ' — руки, одинокая 「',
        urara.sex,
        ' 」 её голос постепенно начинает дрожать.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '…Зачем вы снова заходите так далеко? Стоит мне исчезнуть — и всё кончится…',
      );
      await urara.say_and_wait(
        'Не так! Одно лишь молчание и уступки — это не настоящий конец, так вы только всех запрёте в сердцах!',
      );
      await urara.say_and_wait(
        'И Урара не даст тебе исчезнуть! Помогать своим друзьям — разве не само собой?',
      );
      await era.printAndWait([
        'Глядя на двоих самых дорогих, что так и не разжимают рук, 「',
        urara.sex,
        ' 」 кусает губу, будто героиня, что в финале истории наконец решилась.',
      ]);
      await era.printAndWait([
        'Что бы ещё ни хотелось сказать, героиня истории не станет вечно прятаться за кулисами в унынии.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Ну да, вы та ещё стая дураков, которых никак не оставишь в покое…',
      );
      await era.printAndWait([
        'Резко стряхнув державшие её руки, 「',
        urara.sex,
        ' 」 держится за последнее упрямство и отходит от тех, кто перед ней.',
      ]);
      await era.printAndWait(
        'С металлическим скрипом у старта соседней дорожки возникает калитка, ржавая до серо-белого.',
      );
      await era.printAndWait([
        'А перед калиткой, с всё более острым чёрным взглядом, маленькая ',
        urara.uma_sex_title,
        ' тоже подтягивает такой же, как у другого себя, но безнадёжно полинявший победный костюм.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Раз уж вы так стоите на своём, тогда прошу вас и ',
        urara.sex,
        ', позвольте мне поупрямиться до конца—',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Потому что я тоже 『Хару Урара』!',
      );
      era.drawLine();
      await urara.say_and_wait(
        'Не думала, что бежать придётся с собой! М-м! Нет, как раз потому что это бой с собой, Урара не проиграет!',
      );
      await urara.say_and_wait([
        'Пора в калитку! Ничего, я заберу ',
        urara.sex,
        ' обратно, ведь Урара тоже как следует загадала своё желание!',
      ]);

      era.printButton(
        `「Вот так, пусть ${inner_urara.sex} тоже услышит твоё желание!»`,
        1,
      );
      await era.input();

      await urara.say_and_wait('О! Урара GO—!');
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} bourbon 美浦波旁
   * @param {CharaTalk} rice 米浴
   * @param {CharaTalk} you 玩家
   * @param {string} callname 春乌拉拉对玩家的称呼
   */
  async ws_95_46_3_win(urara, inner_urara, bourbon, rice, you, callname) {
    await inner_urara.print_and_wait(
      'На бесконечно тянущейся дорожке летящий вишнёво-розовый постепенно оставляет тусклого соперника позади — исход уже ясен.',
    );
    await inner_urara.print_and_wait([
      'И правда, мне совсем не тягаться с ней — ',
      urara.sex,
      ' закалена в боях. Даже как ни тянись вперёд рукой, уже не коснуться её ни на йоту — ',
      urara.sex,
      ' впереди…',
    ]);
    await inner_urara.print_and_wait([
      'Глядя, как впереди из поля зрения исчезает когда-то наивное и слабое 「другое я」, ',
      urara.teen_sex_title,
      ' постепенно теряет власть над скоростью.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Не думала, что там, где я не вижу… ',
      urara.sex,
      ' уже умеет летать так высоко…',
    ]);
    await inner_urara.print_and_wait(
      'Пусть израненное взрослением сердце само не срастётся и можно лишь заклеить рану пластырем под именем 「стать сильнее」—',
    );
    await inner_urara.print_and_wait(
      'Но суметь и захотеть чужими глазами пересобрать себя в героя, которого от тебя ждут, — тоже храбрость.',
    );
    await inner_urara.print_and_wait([
      'Словно ',
      urara.get_colored_name(),
      ' — ноги, что вечно падают и часто сплошь в пластырях, но всё равно упрямо бегут.',
    ]);
    await inner_urara.print_and_wait([
      'По имени ',
      urara.get_colored_actual_name(),
      ' — ',
      urara.uma_sex_title,
      ' и правда не сильна, ',
      urara.sex,
      ' просто становится всё крепче от перемен, которые сама выбрала.',
    ]);
    await inner_urara.print_and_wait([
      'И потому ставшая сильной ',
      urara.sex,
      ' принимает всё это и снова ступает на ту самую недосягаемую дорожку.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Значит, теперешняя ',
      urara.sex,
      ' уже не нуждается в защите, а я уже… больше не нужна…',
    ]);
    await inner_urara.say_as_unknown_and_wait(
      'Вы как всегда правы: я всего лишь бессильная, властолюбивая плохая опекунша и плохая подруга…',
    );
    await inner_urara.print_and_wait([
      'Хоть исход уже ясен, дорожка всё равно бесконечно тянется вперёд, а вместо финиша сзади накатывает распад.',
    ]);
    await inner_urara.print_and_wait(
      'Ведь раньше слишком многое перекроили как вздумалось, и в конце остаётся лишь один путь — молча дать тьме себя поглотить.',
    );
    await inner_urara.say_as_unknown_and_wait(
      'Простите, что солгала. Мне уже не вернуться, но так… должно быть ничего…',
    );
    await inner_urara.say_as_unknown_and_wait(
      'Нормально попрощаться и всё такое — в другой раз…',
    );
    await inner_urara.print_and_wait([
      'Перед наступающим по пятам 「концом」 замкнутая ',
      urara.teen_sex_title,
      ' отпускает и без того на исходе волю и заканчивает забег, в котором осталась одна—',
    ]);

    era.printButton(
      '「Потому и говорю! Раз история целая, какой бы скверной ни была, за финал отвечать надо!',
      1,
    );
    await era.input();
    era.printButton('「Сейчас! Беги! Хару Урара!」', 1);
    await era.input();
    await inner_urara.print_and_wait(
      'Для кого этот крик, чья это поддержка, — ответ, быть может, и не нужен.',
    );
    await inner_urara.print_and_wait([
      'Ведь вместе с ',
      you.get_colored_name(),
      ' — криком изо всех сил в самый последний миг поспевает маленькая рука, которой хватает снова дать тепло и силу.',
    ]);
    await inner_urara.print_and_wait([
      'Впереди в миг снова вспыхивает свет, ',
      urara.teen_sex_title,
      ' — прямо впереди доносится крик другого себя, который казалось уже никогда не услышать.',
    ]);
    await inner_urara.print_and_wait(
      'Руку помощи протягивает вишнёво-розовая, что и сама уже на пределе, но так и не бросила улыбку.',
    );
    await urara.say_and_wait('Не сдавайся, ещё чуть-чуть!');
    await inner_urara.print_and_wait(
      'Не так называемые «узы» и не особые слова, а что-то чище, из самого сердца, как цветок весеннего дня.',
    );
    await inner_urara.print_and_wait(
      'С обеих сторон поднимаются голоса; и не заметить, как обвал сзади уходит всё дальше, а на простых трибунах Тренировочного поля давно яблоку негде упасть.',
    );
    await inner_urara.print_and_wait([
      'В беге будто всё замедляется, и ведомая ',
      urara.get_colored_name(),
      ' — ',
      urara.sex,
      ' наконец различает вокруг в призраках всю картину:',
    ]);
    await inner_urara.print_and_wait(
      'Неразлучные 「золотое поколение」 и 「поколение владык」 как всегда стоят у скачки подруги;',
    );
    await inner_urara.print_and_wait([
      'Рядом с ',
      bourbon.get_colored_name(),
      ' и толпой одноклассниц стоит ',
      rice.get_colored_name(),
      ', а в руках ещё свежий альбом, на страницах вишнёво-розовые картинки;',
    ]);
    await inner_urara.print_and_wait(
      'Люди с торговой улицы и из клуба поддержки, и незнакомцы с разных концов, под началом тренера поднимают самые привычные для скачки транспаранты;',
    );
    await inner_urara.print_and_wait([
      'А ещё один человек, хоть и ступает по-прежнему с трудом, но так же с улыбкой стоит в самом первом ряду трибун, следуя за ',
      urara.couple_title,
      ' идущую вперёд ',
      urara.uma_sex_title,
      '……',
    ]);
    await inner_urara.print_and_wait([
      'В гуле благословений бесчисленных людей ',
      urara.sex,
      ' крепко схватила руку другого себя, протянутую вперёд с того края слабого зова о помощи.',
    ]);
    await urara.say_and_wait(
      'Потому что услышала твой голос — что не хочешь уходить, Урара наконец тебя схватила…',
    );
    await urara.say_and_wait(
      'Я не отойду от тебя далеко… вместе с Урарой — пойдём!',
    );
    await inner_urara.say_as_unknown_and_wait(
      'Но вам и не нужно мне отвечать, вам не нужен…',
    );

    era.printButton(
      '「Мы никогда тебя не отрицали. Тот, кто с самого начала защищал Урару, кто собрал нас вместе, — разве это не ты?」',
      1,
    );
    await era.input();

    era.drawLine();
    await era.printAndWait([
      'После того как вместе пересекли финишную доску, бег постепенно стал прогулкой по скаковому полю, а впереди ',
      you.get_colored_name(),
      '  тоже давно уже ждал(а).',
    ]);
    await urara.say_and_wait([
      'М-м! Урара и ',
      callname,
      ', на самом деле всегда очень тебе благодарны, знаешь?',
    ]);
    await urara.say_and_wait(
      'И мы тоже всегда так! Если совсем одной — все ничего не смогут, да?',
    );
    await era.printAndWait([
      'Ради сегодняшнего 「чуда」 ',
      urara.get_colored_name(),
      '  сколько людей в итоге подняла — считать, наверное, давно уже не имеет смысла.',
    ]);
    await era.printAndWait(
      'Может, каждый — чужая сплетня у дороги, каждый — прохожий в чужой жизни, все — звёзды, что сами по себе ничего не могут.',
    );
    await era.printAndWait(
      'Но именно поэтому, стоит только захотеть связаться в нить, и даже короткий проблеск искры всё равно сможет непрерывно освещать всё ночное небо.',
    );
    await era.printAndWait([
      'Ныне всех связала названная 「',
      urara.get_colored_actual_name(),
      ' 」 — ',
      urara.teen_sex_title,
      ' связанных вместе, и всё ещё ткущаяся история, быть может, и есть чудо, что разгоняет тьму.',
    ]);

    era.printButton(
      '「Ты с самого начала из зрителя стал(а) тем, кто меняет, да, и ещё… здесь же ясное небо до края, разве нет?」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      'М-м! Хотя момент не самый тот, Урара считает, что ты на самом деле всегда заслуживаешь этой благодарности!',
    );
    await you.say_and_wait(
      '— Спасибо, что открыл(а) эту историю, позволил(а) крошечным встретиться друг с другом. Теперь мы заберём тебя домой.',
    );
    await era.printAndWait(
      'От дрожи в теле — к всхлипам в нос, и наконец к слезам, которые больше не прячут.',
    );
    await inner_urara.say_as_unknown_and_wait('Вы… вы… правда все…');
    await era.printAndWait([
      'Перед всеми невнятно сетуя, серо-белая маленькая ',
      urara.uma_sex_title,
      ' разразилась самым позорным, но и самым счастливым рыданием в голос.',
    ]);
    await era.printAndWait(
      'Отказ от чужого доверия, яростное до предела человеконенавидение — в корне оттого, что не могла простить себя, трусливую до полной никчёмности.',
    );
    await era.printAndWait(
      'Но если насильно отодрать боль и от страха спрятать настоящее я на дне сердца, делая вид, что его нет, взамен будет лишь пустой и тяжёлый вьюк из ничего.',
    );
    await era.printAndWait(
      'После бессчётных падений и боли даже вся в шрамах всё же смогла стать смелее.',
    );
    await era.printAndWait([
      'Положить последний кусочек пазла? Ту крошечную донельзя, по имени 「',
      urara.get_colored_actual_name(),
      ' 」 — ',
      urara.uma_sex_title,
      ' — историю?',
    ]);
    await era.printAndWait('Пора помириться с переменчивым собой.');
    await era.printAndWait([
      'Плачущая ',
      urara.teen_sex_title,
      ' резко кинулась к улыбающейся ',
      urara.teen_sex_title,
      ' навстречу, а улыбающаяся ',
      urara.teen_sex_title,
      ' мягко заключила плачущую ',
      urara.teen_sex_title,
      ' в объятия.',
    ]);
    await era.printAndWait([
      'Две 「',
      urara.get_colored_actual_name(),
      ' 」 — отражения наложились, слились воедино в свежем солнечном свете, а затем всё вокруг снова начало постепенно таять.',
    ]);
    await era.printAndWait([
      'Быть может, именно так выглядит то, что способно осуществить даже чудо. Прежде чем свет окружил, ',
      you.get_colored_name(),
      '  тоже невольно явил(а) улыбку облегчения.',
    ]);
    era.drawLine();
    await era.printAndWait([
      'Это 「',
      urara.get_colored_actual_name(),
      ' — молитва」,и вместе 「молитва всех」 —',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '  желание — в будущем, которое так просто не кончится, ради улыбок всех бежать и бежать дальше.',
    ]);
    era.drawLine();
    await era.printAndWait([
      'Покоясь у ',
      urara.get_colored_name(),
      '  на груди, ',
      you.get_colored_name(),
      '  проснулся(ась) перед склонившими головы в улыбке статуями Трёх богинь. В спокойном как всегда Трейсене подопечная рядом с улыбкой ждала ',
      you.get_colored_name(),
      '.',
    ]);
    await urara.say_and_wait([', что будем делать дальше? ', callname, '!']);
  },
  we_95_47: (() => {
    const title = (urara, inner_urara) => [
      '「',
      { color: urara.color, content: urara.sex },
      { color: inner_urara.color, content: ' и все' },
      '」 — подарок',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
    ) => {
      const ret = [];
      await era.printAndWait([
        'Сегодня ',
        you.get_colored_name(),
        ', невесть когда снова оказался(ась) в 「',
        inner_urara.get_colored_name(),
        ' 」 — той лужайке в сердце.',
      ]);
      await era.printAndWait(
        'Прежняя дымка уже рассеялась, ночное небо без облаков, в ночно-фиолетовой ясности сверкает звёздное небо, а человек под звёздным светом будто стоит в центре мира.',
      );
      await era.printAndWait([
        'Оглянувшись на звук бега, под ярким лунным светом две похожие лицом ',
        urara.teen_sex_title,
        ' словно уже давно здесь ждали.',
      ]);
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '! Ты тоже пришёл(а)! Хе-хе~ давай вместе ляжем, на траве совсем не холодно, очень приятно!',
      ]);
      await urara.say_and_wait(
        'Сейчас у нас в сердце так красиво, да? Как сказать-то… это… это…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Украшенные фразы и пышные слова не нужны, да? Хотя раньше и правда совсем не замечала, что здесь может быть так красиво…',
      );
      await urara.say_and_wait(
        'Потому что у всех настроение хорошее, да? Как… как после Arima Kinen сразу Рождество! Как же жду~',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Хотя ждать так сладко, наша героиня ни капли не волнуется… Как думаешь, выиграем, ',
        arim_kin,
        '?',
      ]);
      await urara.say_and_wait(
        'Не знаю же, все такие сильные! Но даже если не выиграю, Урара всё равно обязательно побежит!',
      );
      await inner_urara.say_as_unknown_and_wait(
        'М-м, тоже верно. Ведь даже сейчас не все держат надежду 『Урара сможет выиграть』.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но это не история одиночного бега: не только вы и я — все, кого Урара связала вместе, ждут этого мгновения.',
      );

      inner_urara.say_as_unknown([
        'Поэтому… тренер ',
        you.adult_sex_title,
        ', так или иначе, скажите же что-нибудь?',
      ]);
      era.printButton(
        '「Так было всегда, да? Надёжнее не верить, что чудо спустится само, а расти Ураре.»(все характеристики +5)',
        1,
      );
      era.printButton(
        '「У вас уже есть эта красивая лужайка, да? Так что дальше — просто идите вперёд.»(пригодность к траве повышается)',
        2,
      );
      era.printButton(
        '「Удача и чудо — тоже часть силы; чего не хватает, восполните мужеством!»(пригодность к средней и длинной повышается)',
        3,
      );
      ret.push(await era.input());
      await urara.say_and_wait([
        'Так, да? Но раз это ',
        callname,
        ' — совет, тогда Урара точно справится!',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Именно так: какой бы ни стала дорога после встречи — весёлой или нет, то связанное звёздное небо над головой уже стало чертежом пути вперёд…',
      );
      await inner_urara.say_as_unknown_and_wait(
        '…Эх, если бы и я поняла это раньше, Ураре пришлось бы меньше петлять —',
      );
      await urara.say_and_wait(
        'Ну! Больше не думай! Ну вот, нельзя снова падать духом, да? Мы же еле-еле до Рождества добрались!',
      );
      if (join_arim_kin_c) {
        await urara.say_and_wait(
          'Хм-хм~ про рождественский подарок! Хоть один уже дарила, Урара думает, что ничего!',
        );
        await urara.say_and_wait(
          'Хоть и не знаю, получится ли взять первое место в этот раз, но думаю, все будут рады —',
        );
      } else {
        await urara.say_and_wait(
          'Так что на Рождество я тоже всем подарки приготовила, знаешь?',
        );
        await urara.say_and_wait([
          'Сейчас ещё не могу тебе дать, но ',
          callname,
          ' завтра точно увидишь —',
        ]);
      }
      await urara.say_and_wait([
        '『',
        arim_kin,
        ' беге』, Урара хочет этот подарок отдать ',
        callname,
        ', и всем тоже!',
      ]);
      if (era.get('love:52') >= 50) {
        await inner_urara.say_as_unknown_and_wait([
          'Раз уж Рождество, я думала, маленькая Урара отдельно подарит что-нибудь особенное своему тренеру ',
          you.adult_sex_title,
          '?',
        ]);
        await urara.say_and_wait([
          'Ага! Потому что Урара уже ',
          callname,
          ' — собственность же, так что могу подарить только то, что『кроме тела』, да?',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'Пфу… кхе-кхе! Э-это формулировка?! Хоть я и не вовсе в неведении, но закрывать глаза всё-таки не могу!',
        );
        await urara.say_and_wait(
          'Хи-хи~ столько времени прошло, а『Урара』всё такая чистая, ну в чём дело~?',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Не надо мне это говорить! Почему маленькая Урара сейчас такая?!',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait([
          'В итоге подарок общий на всех, но раз уж Рождество, не подарить ли отдельно ',
          callname,
          ' хоть что-нибудь?',
        ]);
        await urara.say_and_wait([
          'Э? Ум… не придумать, что подарить! Точно, Урара себя подарит ',
          callname,
          ' — вот и всё!',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'Погоди-погоди-погоди! Такой подарок даже если мама согласится — я нет, ясно? Для Урары ещё слишком рано…',
        );
        await urara.say_and_wait(
          'Но я уже не ребёнок, ясно? И что вообще слишком рано? Неужели『Урара』о пошлом думает?',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Пфу-кхе…! Ч-что ты такое говоришь, маленькая Урара, я вовсе не такая!',
        );
      }
      inner_urara.say_as_unknown([
        'тренер ',
        you.adult_sex_title,
        ', вы тоже хоть слово скажите——',
      ]);
      era.printButton('「…А разве не хорошо?」(влюблённость+2)', 1);
      era.printButton('「…Как же вы ладите?」(расположение+10)', 2);
      ret.push(await era.input());
      await inner_urara.say_as_unknown_and_wait([
        'тренер ',
        you.adult_sex_title,
        ' (вы)——!!',
      ]);
      era.drawLine();
      await era.printAndWait([
        'С того, как сдерживавшая себя「',
        inner_urara.get_colored_name(),
        ' 」отпустила настоящее сердце, возня двух коней и одного человека ещё долго не стихала на пустом лугу.',
      ]);
      await era.printAndWait(
        'И лишь наигравшись вдоволь, все трое измотанные легли рядком под всё тем же ночным небом и вместе канули в успокаивающую тьму.',
      );
      await era.printAndWait([
        'Среди этого звёздного неба и луга, где время потеряло смысл, между сакурой и каштаном「',
        urara.couple_title,
        ' 」, ',
        you.get_colored_name(),
        ' слушает двоих ',
        urara.teen_sex_title,
        ' — спокойное дыхание.',
      ]);
      await era.printAndWait(
        'Сакуровое дыхание постепенно выравнивается, но с другой стороны каштановая всё не хочет уснуть и будто тихо зовёт.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' снова открывает глаза: чуть полинявшая「',
        urara.sex,
        ' 」сторожит того, кто рядом, взглядом без цветка, но с вернувшимся светом…',
      ]);
      era.println();

      await inner_urara.say_as_unknown_and_wait(
        'Аха, простите, я просто немного… бессонница?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Урара уснула, так что я хотела поговорить с вами наедине… а, не вставайте, всё в порядке, слушайте лёжа.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Впрочем, наедине со мной, что вечно доставляет хлопоты, ваше настроение вряд ли на высоте…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но даже так я ни разу вам не солгала — в том числе в том, что люблю вас с самого начала.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'А почему… я и сама не знаю, может, это даже не любовь, а инстинкт души?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Звучит смешно, да? Какой смысл в любви『Хару Урары』, которая не может надолго остаться рядом с вами?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Даже сказав, я не смогу вам ответить — и ответа от вас после этого тоже не будет…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Я даже праздничный подарок не могу приготовить: можно ли всё ещё называть любовью это призрачное наблюдение и пустое общение?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '…В итоге так и не ответить. Нынешняя я ненамного трезвее вас, что встретили меня в самом начале.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но единственный ответ, что я знаю: даже если смысла нет, эта влюблённость — единственная в своём роде.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'И даже не связана с маленькой Урарой рядом с вами. Я не главная героиня, но это чувство принадлежит только мне и обращено только к вам.',
      );
      if (high_relation) {
        await inner_urara.say_as_unknown_and_wait(
          'Вы, кто в самом начале встретил нас вместе с Урарой, вы, кто смотрел, как Урара бежит, вы, кто вместе с Урарой спас меня…',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Чудо и правда случилось, такое прекрасное, будто сон, — и оттого страшно однажды внезапно проснуться совсем одной.',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Поэтому до пробуждения нужно обязательно передать это чувство по-настоящему, даже если откажут — неважно.',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          'Даже если я самовольно выбрала вас, даже если по пути кругом были ошибки, вы с Урарой в конце всё равно спасли меня.',
        );
        await inner_urara.say_as_unknown_and_wait(
          'За три года я и правда много раз думала, почему выбрала вас, но теперь видно: всё это достойно любви.',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Так что если получится передать это чувство по-настоящему, то даже если однажды сон кончится, я не вернусь к ненависти к миру.',
        );
      }
      await inner_urara.say_as_unknown_and_wait(
        'Даже если меня лишь подзуживает биение души, даже если вы презрите это как фальшь, — я всё равно хочу сказать вам ещё раз.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Может, в день памяти святого этому несказанному чувству, даже ложному, положено отпущение?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Тогда ещё раз, прошу, выслушайте меня…',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        'Это не в первый раз, и вряд ли в последний, но…',
      );
      await inner_urara.say_as_unknown_and_wait([
        'тренер ',
        you.adult_sex_title,
        ', я люблю вас.',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = 'Навстречу финалу——';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     */
    const f = async (urara, inner_urara) => {
      await inner_urara.say_as_unknown_and_wait(
        '…Алло-алло? Слышите? Вы и правда всё слушали, тогда продолжим эту историю как следует.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Эта история, быть может, на середине вас не удовлетворила, до самого финала полна огрехов, и даже придётся учиться прощаться.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но именно поэтому спасибо, что согласились идти с нами бок о бок. Ну что, готовы?',
      );
      await inner_urara.say_as_unknown_and_wait([
        'Это история той, кто мала, меньше некуда, и всё же никем не заменит, по имени『',
        urara.get_colored_actual_name(),
        ' 』 маленькая ',
        urara.uma_sex_title,
        ' ——',
      ]);
      era.drawLine();
      await era.printAndWait(
        `${era.get('flag:当前年')} год, 4-я неделя декабря, ипподром Накаяма.`,
      );
      await era.printAndWait(
        'Под безоблачным небом, в кольце благословений, история переступит финал.',
      );
      await era.printAndWait(
        'В кипящих голосах толпы поздневесенняя сакура пусть в лютой зиме расцветёт вовсю.',
      );
      await era.printAndWait('Это история, что「мы」написали вместе——');

      era.printButton('Так что беги, Хару Урара.', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = 'История по ту сторону конца——';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {number|false} arim_kin_rank_s 资深年有马纪念的名次，false 为未参加过有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      arim_kin_rank_s,
      arim_kin,
    ) => {
      await era.printAndWait([
        'Стоя в проходе для участников, ',
        you.get_colored_name(),
        ' привычно наставляет разогревающуюся ',
        urara.get_colored_name(),
        '.',
      ]);

      era.printButton(
        '「Урара, как ты себя сегодня чувствуешь? Если что — обязательно скажи.»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Нет же, потому что достаточно бежать как в прошлый раз! Тогда сегодня тоже『Урара』выходит!',
      );
      await era.printAndWait([
        'Верно, сейчас достаточно как всегда… хотя ',
        you.get_colored_name(),
        ' помнит, что этот「прошлый раз」вроде был в конце прошлого месяца, ',
        arim_kin,
        '.',
      ]);
      if (arim_kin_rank_s) {
        if (arim_kin_rank_s === 1) {
          await era.printAndWait([
            'И благодаря ',
            urara.get_colored_name(),
            ' — 「чуду победы」, ажиотаж той скачки не улёгся и по сей день.',
          ]);
          await era.printAndWait([
            'Но поверх потрясающего ',
            arim_kin,
            ' — первое место, ',
            urara.get_colored_name(),
            ' тоже с помощью всех получила ещё больше важных сокровищ.',
          ]);
          await era.printAndWait([
            'Но после окончания скачек все вокруг смеялись, ',
            urara.get_colored_name(),
            ' и ',
            you.get_colored_name(),
            '  на глазах у всего зала обнялись и разрыдались.',
          ]);
          await era.printAndWait(
            'А тот пойманный камерой и стыдный, и сияющий вид до сих пор гуляет по всем сетевым площадкам…',
          );
        } else if (arim_kin_rank_s <= 5) {
          await era.printAndWait(
            'Хоть итог скачек и остановился на чуть обидном месте, в сердцах всех это всё равно лучший результат.',
          );
          await era.printAndWait([
            'А ещё до того ',
            urara.get_colored_name(),
            '  с помощью всех получила то, что важнее победы.',
          ]);
          await era.printAndWait([
            'Впрочем, даже говоря, что ничего особенного, когда маленькая ',
            urara.uma_sex_title,
            ' пронеслась за финишную доску, все всё равно не сговариваясь расплакались.',
          ]);
          await era.printAndWait([
            'В слезах было много чувств, но одно не менялось: наверное, растроганность от того, как ',
            urara.get_colored_name(),
            '  растёт…',
          ]);
        } else {
          await era.printAndWait([
            'Хоть итог скачек в целом и совпал с ожиданиями, ',
            urara.get_colored_name(),
            '  всё равно получила благословения всех.',
          ]);
          await era.printAndWait([
            'А ещё до того ',
            urara.get_colored_name(),
            '  с помощью всех получила то, что важнее победы.',
          ]);
          await era.printAndWait([
            'Впрочем, даже если на словах ничего особенного, маленькая ',
            urara.uma_sex_title,
            ' пронеслась за финишную доску, все всё равно не сговариваясь расплакались.',
          ]);
          await era.printAndWait([
            'В слезах было много чувств, но одно не менялось: наверное, растроганность от того, как ',
            urara.get_colored_name(),
            '  растёт…',
          ]);
        }
      }
      await era.printAndWait([
        'А теперь, когда после того выпускной год уже закончился, ',
        urara.get_colored_name(),
        ' — результаты обследования ещё сильнее удивили.',
      ]);
      await era.printAndWait([
        'Хоть ',
        urara.sex,
        ' уже бегала три года, её выход в полную силу не только не обнаруживал спада, напротив, снова появился новый запас роста.',
      ]);
      await era.printAndWait([
        'Конечно, судя по недавним встречам, те, кто близок с ',
        urara.get_colored_name(),
        ', наверное, смогут догадаться об истоке этого явления:',
      ]);
      await era.printAndWait([
        'Хотя «',
        urara.sex,
        ' » по-прежнему стыдится людей, но по сравнению с прежней «замкнутостью» все иногда краем глаза всё же ловят ещё один розовый блик.',
      ]);
      await era.printAndWait([
        'Что до нынешнего 「ковать железо, пока горячо, после Arima Kinen」… на самом деле ',
        urara.get_colored_name(),
        '  упрямилась, что хочет бежать, а ',
        you.get_colored_name(),
        '  не переспорил(а) ',
        urara.sex,
        ' — и всё.',
      ]);

      era.printButton(
        '「Впрочем, если сейчас подумать, ставить точку в истории и правда кажется рановато…」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Следуя ',
        urara.get_colored_name(),
        ' — решению, ',
        you.get_colored_name(),
        '  тоже вспоминает недавние перемены. Даже за короткий месяц многое успело измениться:',
      ]);
      await era.printAndWait(
        'Друзей из Трейсена и говорить нечего, та однокурсница, что ушла со скачек из-за травмы ноги, тоже, кажется, воспрянула и нашла цель на будущее,',
      );
      await era.printAndWait([
        'Хоть долгий путь, чтобы стать тренером, только-только начался, ',
        you.get_colored_name(),
        '  чувствует, что однажды снова встретит ',
        urara.sex,
        ';',
      ]);
      await era.printAndWait(
        'Люди с торговой улицы как раз обсуждают, как ввести современные супермаркеты: это не желание сдаться, а попытка исследовать потенциал, который могут принести перемены,',
      );
      await era.printAndWait([
        'По сравнению с прежним противостоянием и возрождением ныне все под ',
        urara.get_colored_name(),
        ' — вдохновением тоже начинают пробовать сотрудничество новой эпохи и удобство для людей.',
      ]);
      await urara.say_and_wait(
        'Всё так! Как раз потому что все идут вперёд, так что если получится, я тоже буду бежать и дальше!',
      );
      await urara.say_and_wait([
        'И ещё, ',
        urara.sex,
        ' тоже всё время смотрела сюда, только теперь из грусти стало весело!',
      ]);
      await urara.say_and_wait([
        'Так что что бы ни случилось раньше, сейчас ',
        callname,
        '  тоже обязательно хорошенько смотри, как бежит Урара!',
      ]);

      era.printButton(
        '「Это же само собой, нынешняя Урара — 『непобедимая』!」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Под ',
        you.get_colored_name(),
        ' — одобрением, выровняв дыхание и поправив победный костюм, ',
        urara.get_colored_name(),
        '  по объявлению о выходе на поле из динамика шагнула вперёд.',
      ]);

      era.printButton(
        '「Сейчас выход, Урара сама думает, что сможет победить?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Ага! Сегодня я точно выиграю, да? Вот так запросто выиграю!',
      );
      await era.printAndWait([
        'Навстречу солнцу, ',
        urara.get_colored_name(),
        '  к ',
        you.get_colored_name(),
        '  показала безупречную улыбку, словно снова в самом начале.',
      ]);
      await urara.say_and_wait([
        'Тогда я отправляюсь! Вопрос! ',
        callname,
        ', как Урара будет бежать—?',
      ]);
      await era.printAndWait([
        'Глядя на ',
        urara.get_colored_name(),
        '  — улыбку, стоящую в свете, ',
        you.get_colored_name(),
        '  снова решительно отвечает ',
        urara.sex,
        '.',
      ]);

      era.printButton('「Как бы там ни было, выходи с радостью—!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  ws_ticket: (() => {
    const title = 'Успокаивающая пелена тумана';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_child 是否和乌拉拉有后代
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_child,
    ) => {
      await era.printAndWait([
        'Вместе с ',
        urara.get_colored_name(),
        '  пробежав бессчётное число скачек, в один из дней ',
        you.get_colored_name(),
        '  из ящика кабинета тренера вытаскивает знакомый купон.',
      ]);
      await era.printAndWait([
        'В тот же миг дверь кабинета тренера с 「бах」 распахнулась ударом, и следом в комнату влетела сакуровая вспышка.',
      ]);
      await urara.say_and_wait([
        callname,
        '!Самостоятельную тренировку пробежала—!Что дальше делать?',
      ]);
      await era.printAndWait([
        'Смахнув капли, закрывавшие улыбку, в промокшей от пота гимнастической форме ',
        urara.get_colored_name(),
        '  сегодня тоже вовсю сверкает.',
      ]);

      era.printButton('「О! Спасибо за работу! Сейчас сначала отдохни!」', 1);
      await era.input();

      await urara.say_and_wait(['Хорошо—!']);
      await era.printAndWait([
        'Запихнув прочий хлам обратно в ящик, ',
        you.get_colored_name(),
        '  встаёт навстречу старавшейся больше обычного маленькая ',
        urara.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'А обернувшись и увидев только что вытащенную на стол 「маленькую награду」, по внезапному озарению ',
        you.get_colored_name(),
        '  к кружившей вокруг себя маленькая ',
        urara.uma_sex_title,
        ' открывает рот и спрашивает.',
      ]);

      era.printButton(
        '「Урара, пора как-нибудь расслабиться, да? Помнишь, у нас есть купон в горячие источники?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Купон в горячие источники… а! Тот, что тогда вытянули на торговой улице? Урара чуть было не забыла!',
      ]);
      await urara.say_and_wait([
        'Но почему так внезапно говоришь, что идти сейчас? Неужели ',
        callname,
        '  тоже забыл(а) и только сейчас вспомнил(а)?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '  и правда всё острее. Скользнув взглядом по дате истечения на купоне, ',
        you.get_colored_name(),
        '  бессильно улыбается.',
      ]);
      await era.printAndWait([
        'Впрочем, теперь ',
        urara.get_colored_name(),
        '  — расписание куда свободнее прежнего, выбраться расслабиться — тоже хорошо, так что оставлять купон без дела нет причин.',
      ]);

      era.printButton(
        '「Короче… пусть это будет запоздалой наградой. Какого друга Урара хочет пригласить?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'А? ',
        callname,
        '  не пойдёшь? Но больше, чем с друзьями, я хочу с ',
        callname,
        '  вместе в горячие источники, да?',
      ]);

      era.printButton('「Разве с друзьями не свободнее, чем со взрослым?」', 1);
      await era.input();

      await era.printAndWait([
        'Перед ',
        you.get_colored_name(),
        '  — вопрос с позиции 「взрослого」, всё ещё воплощающая 「ребёнка」 ',
        urara.get_colored_name(),
        '  как само собой разумеется отвечает.',
      ]);

      if (high_relation) {
        await urara.say_and_wait([
          'Но ',
          callname,
          '  тоже нужно отдыхать, да? Нельзя, чтобы награду принимала только Урара!',
        ]);
        await urara.say_and_wait([
          'Как только что ',
          callname,
          '  сказал(а), для ',
          callname,
          '  это тоже должна быть запоздалая награда, да?',
        ]);
      } else {
        await urara.say_and_wait([
          'И ещё: это Урара и ',
          callname,
          '  вместе вытянули, с самого начала это было не только Урары!',
        ]);
        await urara.say_and_wait([
          'Так что в этом купоне есть и ',
          callname,
          '  — доля, я думаю, надо с ',
          callname,
          '  вместе пойти!',
        ]);
      }
      if (era.get('love:52') >= 75) {
        await era.printAndWait([
          'Договорив до конца, после короткой паузы, ',
          urara.get_colored_name(),
          '  снова показывает улыбку 「возлюбленной」.',
        ]);
        await urara.say_and_wait([
          'И ещё мне кажется, чтобы вместе с тем, кто нравится, идти в горячие источники, не нужно так много причин, да?',
        ]);
      }

      await era.printAndWait([
        'Раз приглашение такое горячее, отказывать дальше неудобно. Навстречу ожидающему взгляду подопечной, ',
        you.get_colored_name(),
        '  берёт куртку со спинки стула.',
      ]);

      era.printButton(
        '「Я сначала подумаю, что взять, завтра выходим, можно?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'Ага! Тогда Урара тоже пойдёт готовиться, завтра у главных ворот увидимся—',
      ]);
      await era.printAndWait([
        'маленькая ',
        urara.uma_sex_title,
        ' в ',
        you.get_colored_name(),
        '  — голосе согласия снова вылетает за дверь. Лишь бы обошлось без сюрпризов, раз уж ',
        urara.get_colored_name(),
        '  так рада.',
      ]);
      await era.printAndWait([
        'Но когда двое с сумками, полные воодушевления, дошли до стойки гостиницы, сюрприз, как и следовало ждать, уже давно их тут поджидал.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Администратор',
        'Нам очень жаль, одноместные номера в нашей гостинице уже заняты…',
      );
      await you.say_as_passer_by_and_wait(
        'Администратор',
        'Но в качестве компенсации мы можем предоставить вам двухместный номер с собственной маленькой купальней, как гости на это смотрят?',
      );

      if (you.sex_code === 1) {
        await era.printAndWait([
          'В итоге едва приехали — и сразу такой неловкий поворот, с удачей в поездке совсем худо. Но раз уж приехали, пусть так.',
        ]);
        await era.printAndWait([
          'И глянув ещё раз на стоящую рядом всё ещё полную ожидания маленькая ',
          urara.get_colored_name(),
          ', ',
          you.get_colored_name(),
          '  пожалуй, и варианта развернуться домой нет.',
        ]);
        await era.printAndWait([
          'Впрочем, в такой ситуации как вообще делить место на ночь…',
        ]);
        await era.printAndWait([
          'Приняв из рук стойки ключ от комнаты, ',
          you.get_colored_name(),
          '  со смешанными чувствами поднимает багаж и вместе с ',
          urara.get_colored_name(),
          '  сворачивает в коридор гостиницы.',
        ]);
        era.drawLine();
        await era.printAndWait([
          'На шаг раньше ',
          urara.get_colored_name(),
          '  вернувшись в комнату, ',
          you.get_colored_name(),
          '  снимает одежду, берёт полотенце и раздвигает дверь, отделяющую купальню.',
        ]);
        await era.printAndWait([
          'С долгим выдохом расслабленно садится в тёплую воду и, глядя на яркую луну и редкие звёзды, ',
          you.get_colored_name(),
          '  расслабленно закрывает глаза.',
        ]);
        await era.printAndWait([
          'Уже три года… тогда при первой встрече ещё совсем как ребёнок ',
          urara.get_colored_name(),
          ', теперь и сама понемногу обретает зрелый вид…',
        ]);
        await era.printAndWait([
          'Затем лёгкое умиротворение разбивает радостный крик — и ',
          urara.teen_sex_title,
          ' 「яростно」 вышибает раздвижную дверь.',
        ]);
        await urara.say_and_wait([
          'Хе-хе~ Пока ',
          callname,
          '  ещё не здесь, Урара сначала чуть-чуть полежит—!',
        ]);
        await era.printAndWait([
          'Не успев открыть глаза, сбившая хорошее настроение маленькая ',
          urara.uma_sex_title,
          ' тут же с края купальни прыгает и с плеском ныряет в воду.',
        ]);
        await era.printAndWait([
          'Слова назад: так ведь совсем не выросла? Смахнув воду с лица, ',
          you.get_colored_name(),
          '  бессильно смотрит вперёд на вошедшую в воду против правил ',
          urara.get_colored_name(),
          '……',
        ]);
        await era.printAndWait([
          '…Погоди, ',
          urara.get_colored_name(),
          '  зашла?! Сообразив, что что-то не так, ',
          you.get_colored_name(),
          '  быстро встаёт и оборачивает полотенце, брошенное у края перед тем, как войти в воду.',
        ]);
      } else {
        await era.printAndWait([
          'А? Комната роскошнее, чем награда на купоне, и даже время в источниках свободнее. Так это же отличная удача?',
        ]);
        await urara.say_and_wait([
          'Э? Хоть звучит не так шумно, но если только Урара и ',
          callname,
          ', тогда ведь можно внутри плавать?',
        ]);
        era.printButton(
          '「В купальне с горячим источником плавать нельзя, ладно?」',
          1,
        );
        await era.input();

        await era.printAndWait([
          'Слегка похлопав перевозбуждённую маленькая ',
          urara.uma_sex_title,
          ' по макушке, ',
          you.get_colored_name(),
          '  с улыбкой поднимает багаж и вместе с ',
          urara.get_colored_name(),
          '  входит в коридор гостиницы.',
        ]);
        era.drawLine();
        await era.printAndWait([
          'Погуляв под яркой луной чуть дольше обычного, ',
          you.get_colored_name(),
          '  возвращается в комнату, медленно снимает одежду и затем берёт полотенце сбоку.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '  сейчас, наверное, уже в воде? Ведёт себя как хорошая девочка? Не плюхается же там в самом деле?',
        ]);
        await era.printAndWait([
          'Положив руку на дверь, отделяющую купальню, — о чём это думаешь, уже три года? ',
          urara.get_colored_name(),
          '  уже стала большой девочкой, разве нет…',
        ]);
        await era.printAndWait([
          'Раздвинув дверь, ',
          you.get_colored_name(),
          '  сразу слышит, как ',
          urara.get_colored_name(),
          '  принимает источник за бассейн и яростно плюхается в воде.',
        ]);
        await urara.say_and_wait(['Хе-хе~ Как же весело—!']);
        await era.printAndWait([
          'Беру слова назад — всё-таки совсем не выросла. Медленно входя в воду, ',
          you.get_colored_name(),
          ' беспомощно смотрит вперёд на нарушающую правила плескающуюся в воде ',
          urara.get_colored_name(),
          '.',
        ]);
      }
      await era.printAndWait([
        'Сквозь клубящийся пар ещё не заметившая, что рядом есть кто-то, маленькая ',
        urara.uma_sex_title,
        ' щедро выставляет своё здоровое пышное тело.',
      ]);
      await era.printAndWait([
        'Распущенные вишнёвые волосы влажно льнут к гладкой коже, пока ',
        urara.teen_sex_title,
        ' плещется, и вместе с падающей росой затягивают дымкой двусмысленности наивную улыбку, которой ',
        urara.sex,
        ' сияет.',
      ]);
      await era.printAndWait([
        'Три года тренировок не сделали мягкость жёсткой — наоборот, у маленькой ',
        urara.uma_sex_title,
        ' и без того чувственные талия, бёдра и живот стали ещё пышнее и милее.',
      ]);
      await era.printAndWait([
        'По нежным изгибам взгляд скользит к верхнему и нижнему краям — ',
        urara.teen_sex_title,
        ' и не прячется: нежный тайный сад между бёдер умело полускрыт рябью от хвоста на кромке воды;',
      ]);
      await era.printAndWait([
        'а на мягко колышущихся в плеске грудях два милых бутона и плода то скрываются, то проступают в тумане.',
      ]);
      await era.printAndWait([
        'Но завершающим штрихом этой наивной и запретной картины всё же остаётся то, как в перекрёстном сиянии огней, воды и луны ',
      ]);
      await era.printAndWait([
        'покачивая парой крошечных милых ушек, ',
        urara.teen_sex_title,
        ' как всегда цветущие сакурой зрачки сверкают прекрасными красками, точно цветное стекло.',
      ]);
      await era.printAndWait([
        'Единственный изъян — то, что распущенная и эротичная маленькая героиня этой картины постепенно поворачивает взгляд на растерянного ',
        you.get_colored_name(),
        '……',
      ]);

      if (you.sex_code === 1) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait([
            'Нм? А… это ',
            callname,
            ' а, уже внутри, да? Когда это ты зашёл?',
          ]);
          await era.printAndWait([
            'Ни стыда, что на тело смотрят, ни вины за проделки в мутной воде — маленькая ',
            urara.uma_sex_title,
            ' в тумане медленно подходит к ',
            you.get_colored_name(),
            '.',
          ]);
          await urara.say_and_wait([
            'хе-хе~ только что ',
            callname,
            ' как будто смотрел(а) на Урару, да? ',
            callname,
            ' правда так делал(а) или нет?',
          ]);
          await era.printAndWait([
            'Смело только что поднявшегося ',
            callname,
            ' снова прижимает обратно в воду, ',
            urara.teen_sex_title,
            ' с улыбкой полной любви, совершенно голая, легко садится верхом на ',
            you.get_colored_name(),
            ' — теле.',
          ]);
          await era.printAndWait([
            'С какого же это момента ',
            urara.get_colored_name(),
            ' стала такой смелой…',
          ]);
        } else {
          await urara.say_and_wait([
            'Э? ',
            callname,
            '? Почему ',
            callname,
            '…а нет, это…',
          ]);
          await era.printAndWait([
            'Спешно под чужим взглядом прикрывая своё голое тело, ',
            urara.get_colored_name(),
            ' — личико в пару редкостно пропарилось докрасна.',
          ]);
          await urara.say_and_wait([
            callname,
            '…извращенец… не смотри, быстрее отвернись… Ураре так стыдно…',
          ]);
          await era.printAndWait([
            'После того как в панике заслонилась выловленным из воды полотенцем, та самая будто при первой встрече простодушная лошадка тихо выдавила жалобу, какую знает лишь влюблённая ',
            urara.teen_sex_title,
            '.',
          ]);
          await era.printAndWait([
            'Похоже, как ни крути, ',
            urara.get_colored_name(),
            ' хоть немного, но всё-таки выросла…',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          'Нм? ',
          callname,
          ' ты здесь! Урара уже за тебя попробовала, ну? В воде так приятно!',
        ]);
        await era.printAndWait([
          'Кажется, так и не объяснив, зачем мутила воду, ',
          urara.get_colored_name(),
          ' в тумане ступает по воде к ',
          you.get_colored_name(),
          ' и медленно подходит.',
        ]);
        await urara.say_and_wait([
          'Впрочем, ',
          callname,
          ' смотри под ноги, ладно? Дай руку! Хоп~',
        ]);
        await era.printAndWait([
          'Взяв за руку, ',
          you.get_colored_name(),
          ' заводит в бассейн, ',
          urara.get_colored_name(),
          ' с двусмысленной улыбкой самого любимого ',
          callname,
          ' в миг входа в бассейн валит в воду.',
        ]);
        await era.printAndWait([
          'Так и кажется, будто 「',
          urara.get_colored_name(),
          ' сама пригласила」 — но это же опасный приём, да…',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          ' ты здесь! Что такое? Почему всё смотришь на Урару… э?',
        ]);
        await era.printAndWait([
          'Под ',
          you.get_colored_name(),
          ' — взглядом, ',
          urara.get_colored_name(),
          ' только тогда замечает, что полотенце вовсе не сидит на теле, как надо, — наоборот, уже затонуло на дне.',
        ]);
        await urara.say_and_wait([
          'Когда это свалилось? Но здесь же никого больше нет! Так что не завязывать тоже… э? Нельзя?',
        ]);
        await era.printAndWait([
          'Хотя с ',
          you.get_colored_name(),
          ' — помощью только что укутали полотенце и волосы, ',
          urara.get_colored_name(),
          ' тут же снова бросается в бассейн.',
        ]);
        await era.printAndWait([
          'Эх, иногда всё ещё как невыросший ребёнок — но всё равно такая милая…',
        ]);
      }

      await era.printAndWait([
        'После последующей возни… точнее, уговоров и хитростей ',
        you.get_colored_name(),
        ' всё же заставляет ',
        urara.get_colored_name(),
        ' угомониться в воде.',
      ]);
      await era.printAndWait([
        'Всё-таки даже в общественной купальне превращать бассейн в кашу — абсолютно запрещено.',
      ]);
      await era.printAndWait([
        'Когда пар снова окутал двоих, прислонившихся друг к другу, этот бассейн с источником наконец смог исполнить своё настоящее назначение.',
      ]);
      await era.printAndWait([
        'Тёплый пар перекрыл холод поры, когда зима сменяется весной, а звёзды ночного неба как раз кстати мерцают сквозь туман.',
      ]);
      await era.printAndWait([
        'Окружённый тёплым потоком, скользнув большей частью тела в воду, наконец способный вместе с подопечной насладиться покоем ',
        you.get_colored_name(),
        ' в тепле полностью расслабляется.',
      ]);
      await era.printAndWait([
        'Ничего — ведь за три года совместных с ',
        urara.get_colored_name(),
        ' тренировок выносливость сильно выросла, так что уверенность, что так просто не угоришь в купальне, всё же есть.',
      ]);
      await era.printAndWait([
        'Хотя это же значит: даже не уйдя в отставку, ',
        urara.get_colored_name(),
        ' как Скаковая ',
        urara.uma_sex_title,
        ' первые три года тоже полностью закончились.',
      ]);
      await era.printAndWait([
        'Теперь ',
        urara.sex,
        ' уже умеет сама решать, какими будут скачки и тренировки впредь, а как тренер ',
        you.get_colored_name(),
        ' тоже будет знакомиться ещё со многими ',
        urara.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Не то чтобы страх отчуждения между вами — просто, к лучшему или к худшему, так беспечно выставляющая наготу маленькая ',
        urara.uma_sex_title,
        ' пожалуй, всего одна.',
      ]);
      await era.printAndWait([
        'Как бы то ни было, раз уж уже дошли сюда в связке, как в гонке на трёх ногах, ',
        you.get_colored_name(),
        '  пожалуй, остаётся лишь и дальше держать ',
        urara.get_colored_name(),
        '  рядом — другого выбора нет.',
      ]);
      if (has_child) {
        await era.printAndWait([
          'Тем более, раз уж запретный плод сорван не в то время и не в том месте, будь дальше счастье или нет, ',
          you.get_colored_name(),
          '  и ',
          urara.get_colored_name(),
          '  уже давно не свернуть с пути…',
        ]);
      }
      await era.printAndWait([
        'Эх, о чём это мысли? Вот же наконец удалось посидеть в онсэне с подопечной — с чего вдруг загрустить в 「банных причудах」?',
      ]);
      await era.printAndWait([
        'И разве после встречи не было столько хорошего? Например, стоит лишь в грустный момент закрыть глаза — и в сердце одна сплошная ',
        urara.get_colored_name(),
        ' — улыбка.',
      ]);
      await era.printAndWait([
        'Не хочется с ',
        urara.get_colored_name(),
        '  расставаться. Даже если этого не случится, всё равно хочется так вздохнуть.',
      ]);
      await era.printAndWait([
        'Впрочем, если теперь перевернуть и взглянуть на кое-что из прошлого, тревоги и впрямь уже нет такой, как раньше.',
      ]);
      await era.printAndWait([
        'От чувства покоя и удовлетворения? Может, бесцельные мысли в онсэне и правда смывают все заботы тёплой водой.',
      ]);
      await era.printAndWait([
        '…Впрочем, к слову об этом: показалось, или вода всё горячее и горячее?',
      ]);
      await urara.say_and_wait([
        ', хм? ',
        callname,
        ' Лицо-то какое красное! Слушай, в онсэне кружится не из-за выносливости, так что не надо через силу, ладно?',
      ]);
      await era.printAndWait([
        'Что такое? Тело ватное, вдруг так клонит в сон — кажется, вот-вот засну…',
      ]);
      await urara.say_and_wait([
        ', и ещё, если ниже сползти — нос затопит, знаешь? ',
        callname,
        ', слышишь?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' — голос кажется таким далёким, будто всё дальше и дальше…',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Да тут уже пузыри из ноздрей пускают, даже если слышит — всё равно не похоже, что сможет ответить?!',
      ]);
      await era.printAndWait([
        'И правда: в итоге снова переоценили свои силы — кажется, сейчас на дно…',
      ]);
      await urara.say_and_wait([
        ', а! Вот и ты, онсэн такой приятный! Но… сейчас ',
        callname,
        ' как-то странно?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Онсэн потом, главное — скорее вытаскивай тренера ',
        you.adult_sex_title,
        '  наверх!',
      ]);
      await era.printAndWait([
        'Прости, сегодня тоже пришлось побеспокоить 「тебя」. В какой-то замедленной атмосфере, осознав, что его сейчас со всех рук вылавливают, ',
        you.get_colored_name(),
        '  с облегчением опускается плашмя.',
      ]);

      await era.printAndWait([
        'Когда глаза снова открылись, свет над головой уже сменился со звёздного неба на тёплый жёлтый потолочный светильник.',
      ]);
      await era.printAndWait([
        'Но хорошо, что в глаза попали не незнакомые белые стены больницы, а японский интерьер онсэн-гостиницы.',
      ]);
      await era.printAndWait([
        ' — это сколько уже лежать? ',
        urara.get_colored_name(),
        '  же? Ладно, сначала встать…',
      ]);
      await era.printAndWait([
        'Но едва ',
        you.get_colored_name(),
        '  собирается сквозь чуть размытый взгляд поднять корпус — как сопротивление снизу мягко прижимает щёку.',
      ]);
      await urara.say_and_wait([
        callname,
        ', пока не двигайся, отдыхаешь — не надо через силу, ладно?',
      ]);
      await era.printAndWait([
        'По тёплому голосу взгляд поднимается вверх, и на этот раз это маленькая ',
        urara.uma_sex_title,
        ' — улыбка сверху вниз.',
      ]);
      await era.printAndWait([
        'Вместо подушки — аккуратная сидячая поза, ',
        urara.teen_sex_title,
        ' упругие ноги, что прятались в воде, теперь мягко подложены под ',
        you.get_colored_name(),
        ' — затылок.',
      ]);
      await era.printAndWait([
        'В свободном японском наряде ',
        urara.get_colored_name(),
        '  гладит, словно мать, что успокаивает ребёнка, ',
        you.get_colored_name(),
        ' — щёку и заодно поднимает ухочистку в руке.',
      ]);
      await urara.say_and_wait([
        ', эх-хе-хе~ ',
        callname,
        ' сейчас совсем как малыш, да? Потому что всё это время было очень тяжело?',
      ]);
      await urara.say_and_wait([
        'Я от всех слышала, что так можно расслабиться, ',
        callname,
        ', чуть поверни тело набок.',
      ]);
      await urara.say_and_wait([
        'Ничего, сегодняшнему ',
        callname,
        '  можно сколько угодно ласкаться, а если неловко — можно схватить Урару за хвост, ладно?',
      ]);
      await era.printAndWait([
        'Под нежным подталкиванием тело само собой сдвигается, ',
        you.get_colored_name(),
        '  словно ребёнок под маминым утешением сжимает гладкую шерсть перед глазами.',
      ]);
      await urara.say_and_wait([
        'Урара тоже в первый раз, так что если укол будет больно — обязательно скажи мне, ладно?',
      ]);
      await era.printAndWait([
        'Тонкие пальцы гладят ушную раковину и, стряхнув ваткой грязь с наружного уха, ',
        urara.teen_sex_title,
        ' начинает мягко скоблить слуховой проход ухочисткой.',
      ]);
      await era.printAndWait([
        'Покалывающе-нежное ощущение постепенно растекается по всему телу и в том сладком душистом объятии, что ',
        urara.teen_sex_title,
        ' дарит, постепенно переходит в расслабленность, от которой сознание плывёт.',
      ]);
      await era.printAndWait([
        'Разве взрослому годится так вовсю ласкаться на коленях у ребёнка? Но даже если хочется возразить, мозг уже устал думать.',
      ]);
      await urara.say_and_wait([
        'Что бы ни случалось раньше, что бы ни случилось потом, Урара всё равно хочет поблагодарить ',
        callname,
        '.',
      ]);
      await urara.say_and_wait([
        'Хочу, чтобы ',
        callname,
        '  и дальше всегда мог(ла) показать спокойную улыбку — это я хочу отдать ',
        callname,
        ' — подарок.',
      ]);
      await urara.say_and_wait([
        'У Урары рядом всегда будет для ',
        callname,
        '  место, где перевести дух, так что если ',
        callname,
        '  потом снова станет тревожно — приходи к Ураре, ладно?',
      ]);
      await era.printAndWait([
        'Мягким дыханием и салфеткой счищая накопившуюся у уха грязь, ',
        urara.teen_sex_title,
        ' с лёгким смешком тыкает взрослого, что всё глубже тонет в её объятиях.',
      ]);
      await urara.say_and_wait([
        callname,
        ', только не засыпай сразу, ладно? Потом ещё второе ухо осталось.',
      ]);
      await urara.say_and_wait([
        'Сегодня вечером времени ещё очень много, знаешь?',
      ]);
      await era.printAndWait([
        'Погрузившись в ',
        urara.get_colored_name(),
        ' — выстроенный нежный край, ',
        you.get_colored_name(),
        '  спокойно закрывает глаза.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'Фу-фу~ Онсэн и впрямь хорош, особенно когда напряжение уже схлынуло — даже моё настроение прояснилось.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Хоть и без приглашения, но раз вы уже отдыхаете, думаю, вы не станете возражать, если я ненадолго займу онсэн?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'А! И ещё вот это…『За это время вы глубоко прочувствовали незаменимую связь с Урарой~』',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Кхм… впрочем, как бы ни звучало несерьёзно, незаменимая связь и вправду сошла здесь…',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'По крайней мере в этот миг наверняка спокойно и счастливо.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_teach: (() => {
    const title = 'Искусный наставник';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'На обратном пути с торговой улицы после закупок рядом та, что для ',
        you.get_colored_name(),
        '  несёт покупки, — ',
        urara.get_colored_name(),
        '  весело напевает что-то.',
      ]);

      era.printButton(
        '「Настроение прямо отличное, а? Что-то хорошее случилось?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Эх-хе-хе~ точно! Все на торговой улице сказали мне『ты так стараешься』, да ещё и подарки дали! Круто же!',
      );
      await urara.say_and_wait(
        'Раньше все только и говорили『не перенапрягайся』, а теперь тех, кто говорит『ты так стараешься』, стало больше!',
      );
      await era.printAndWait([
        'Подпрыгивая и шурша пакетами в руках, маленькая ',
        urara.uma_sex_title,
        ' к ',
        you.get_colored_name(),
        ' показала благодарную улыбку.',
      ]);
      await urara.say_and_wait(
        'Наверно, это потому, что я бегу быстрее, чем раньше, вот и тех, кто признаёт Урару, стало больше!',
      );
      await urara.say_and_wait([
        'Но если бы не ',
        callname,
        ', Урара бы сюда не дошла! Так что спасибо тебе, ',
        callname,
        '!',
      ]);

      era.printButton('「Раз так, тогда и в следующей скачке тоже —」', 1);
      await era.input();

      await urara.say_and_wait(
        'Точно! Урара и в следующей скачке будет стараться дальше!',
      );
      await era.printAndWait([
        'В ',
        urara.get_colored_name(),
        ' — залитой солнцем улыбке, ',
        you.get_colored_name(),
        ' и ',
        urara.sex,
        ' вместе набрались решимости к следующему разу.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_dance: (() => {
    const title = 'Практика танцев';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' идёт в танцевальный зал за забытой вещью и обнаруживает ',
        urara.get_colored_name(),
        ' и сегодня после уроков снова одна продолжает танцевальную практику.',
      ]);
      await urara.say_and_wait([
        '— Вот, готово! Фух~ как же вспомнилось… а! ',
        callname,
        ' ты здесь!',
      ]);
      await era.printAndWait([
        'Вытирая пот с лица после музыки и завидев идущего тренера, ',
        urara.get_colored_name(),
        ' тоже с улыбкой вышла навстречу ',
        you.get_colored_name(),
        '.',
      ]);

      era.printButton(
        '「Ага! Урара тоже потрудилась! Но что там вспомнилось?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'А, это я маленькой часто танцевала в рабочем сарайчике дома, а друзья с родины даже микрофон из дерева мне сделали!',
      );
      await urara.say_and_wait(
        'Когда Урара ехала в Трейсен, все ещё договорились потом вместе прийти на мой концерт!',
      );
      await urara.say_and_wait(
        'Поэтому мне тоже надо как следует репетировать выступление, нельзя же их разочаровать!',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' — родина, это про друзей в Коти? Вот поэтому ',
        urara.sex,
        ' так старается готовиться к Live после скачки.',
      ]);

      era.printButton('「Нм… можно мне посмотреть, чего Урара добилась?»', 1);
      await era.input();

      await urara.say_and_wait([
        'Конечно! Тогда ',
        callname,
        ', нажмёшь Ураре кнопку магнитофона?',
      ]);
      await era.printAndWait([
        'Под знакомую музыку ',
        urara.get_colored_name(),
        ' начала на глазах у ',
        you.get_colored_name(),
        ' без стеснения показывать, как она всё это время старалась.',
      ]);
      await era.printAndWait([
        'Хотя иногда путает слова, ',
        urara.sex,
        ' жестами всё же вполне передаёт чувства — выступление вполне можно назвать отличным.',
      ]);

      await urara.say_and_wait([
        callname,
        ', ну как Урара? Все обрадуются, если увидят?',
      ]);
      era.printButton('「Ага, все точно будут рады.» (скорость +10)', 1);
      era.printButton(
        '「Если выучить слова, будет ещё лучше.» (интеллект +10)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait(
          'Так и знала! Урара тоже думает, что точно будут! Поэтому на настоящем выступлении я буду стараться ещё сильнее!',
        );
        await urara.say_and_wait(
          'И сейчас, и раньше — я покажу всем, кто меня поддерживает, как Урара выросла!',
        );
        await era.printAndWait([
          'Полная задора ',
          urara.get_colored_name(),
          ' снова сама принялась практиковаться. Как ни крути, такая старательная ',
          urara.sex,
          ' на сцене точно не провалится.',
        ]);
      } else {
        await urara.say_and_wait(
          'И правда, я вроде часто путаю слова! Но если как следует их запомнить, концерт станет ещё круче, да?',
        );
        await urara.say_and_wait(
          'Хорошо! Тогда Урара сейчас как следует выучит слова!',
        );
        await era.printAndWait([
          'Заучив слова, ',
          urara.sex,
          ' стала точнее передавать чувства голосом, и на сцене наверняка ещё сильнее привлечёт внимание.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  op_fans_letr: (() => {
    const title = 'Письмо от фаната';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        urara.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' вместе разбирают подарки от фанатов: среди отправлений в основном от знакомых затесался маленький конверт.',
      ]);
      await era.printAndWait([
        'Как всегда, всерьёз относящаяся к каждому письму, ',
        urara.get_colored_name(),
        ' тоже раскрыла неприметный конверт и вдруг радостно распахнула глаза…',
      ]);
      await urara.say_and_wait([
        callname,
        '! Это вроде письмо от ребёнка, который живёт очень далеко!',
      ]);
      await urara.say_and_wait(
        '『Когда вижу, как ты не сдаёшься, я набираюсь смелости』… так он написал, даже как-то неловко!',
      );
      await urara.say_and_wait(
        'Поэтому я думаю, что в следующий раз точно выиграю! Тогда этот ребёнок ещё больше порадуется за меня?',
      );

      era.printButton(
        '「Конечно, увидеть победу Урары — он точно будет рад.»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Услышав ',
        you.get_colored_name(),
        ' — уверенный ответ, ',
        urara.get_colored_name(),
        ' с улыбкой принялась писать ответ. Получив поддержку издалека, ',
        urara.get_colored_name(),
        ' тоже ещё сильнее загорелась.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_all_like: (() => {
    const title = 'Всеобщая любимица';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'Закончив сегодняшнюю работу, ',
        you.get_colored_name(),
        ' в одиночестве гуляет вокруг академии и, проходя мимо скверика, снова видит знакомый силуэт.',
      ]);
      await era.printAndWait([
        'На газоне парка расстелена чистая скатерть, а ',
        urara.get_colored_name(),
        ' весело сидит и о чём-то болтает с мамой и ребёнком, которые достали бэнто.',
      ]);
      await urara.say_and_wait(
        'А? Моё имя? Хару Урара! Меня зовут Хару Урара!',
      );
      await era.printAndWait(
        'Тётя A「Урара…? Так ты та самая Хару Урара из академии Трейсен, мы все твои скачки смотрели!»',
      );
      await urara.say_and_wait(
        'Э? Урара такая крутая? Эх-хе-хе~ даже как-то неловко, но…',
      );
      await urara.say_and_wait([
        'Мой ',
        callname,
        ' вон там! Так что — ',
        callname,
        '! Поешь с нами бэнто?',
      ]);
      await era.printAndWait([
        'Неизвестно когда заметив вдалеке ',
        you.get_colored_name(),
        ', маленькая ',
        urara.uma_sex_title,
        ' качает ушами и машет рукой на ',
        you.get_colored_name(),
        '.',
      ]);

      era.printButton('「А? Погодите, мне тоже можно?»', 1);
      await era.input();

      await era.printAndWait([
        'Тётя A「Да полно вам, тренер ',
        you.adult_sex_title,
        ', считайте это благодарностью за то, что ваша подопечная поиграла с моим ребёнком!»',
      ]);
      await era.printAndWait([
        'Когда ',
        urara.get_colored_name(),
        ' и тётя с улицы горячо пригласили, ',
        you.get_colored_name(),
        ' всё же слегка смущённо садится на край скатерти.',
      ]);
      await era.printAndWait([
        'А когда ',
        you.get_colored_name(),
        ' тоже сел(а), ',
        urara.get_colored_name(),
        '  снова весело заговорила с мальчиком рядом.',
      ]);
      await urara.say_and_wait(
        'Но у нас же седьмая партия в камень-ножницы-бумагу ещё без победителя! Продолжаем?',
      );
      await era.printAndWait(
        'Мальчик А「Э? Мы же договорились продолжить после еды? И всё равно в следующий раз выиграю я!»',
      );
      await urara.say_and_wait(
        'Ну и храбрости же! Но я тоже ни за что не проиграю! Урара каждый раз в камень-ножницы-бумагу выигрывает, да и голова крутится очень быстро!',
      );
      await era.printAndWait([
        'Мать мальчика провожает нежным взглядом эту пару, а рядом ',
        you.get_colored_name(),
        '  всё же считывает по лицу мальчика тень тревоги…',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '  открытым и таким милым нравом вмиг становится другом кому угодно, ',
        urara.sex,
        ' и потому так любима детьми.',
      ]);
      await era.printAndWait([
        'Но именно поэтому ',
        urara.sex,
        ' и для детей на пороге подросткового возраста притягательна не меньше прочих 「убийц первой любви」, так что…',
      ]);
      await era.printAndWait([
        'Мальчик А「Эм… Урара ',
        urara.elder_sibling_sex_title,
        ', мы потом… потом ещё увидимся?»',
      ]);
      await urara.say_and_wait([
        'Нм? Я ещё приду в этот парк, так что точно увидимся? Правда же, ',
        callname,
        '?',
      ]);
      await era.printAndWait([
        'Перед расставанием, держась за мамину руку, мальчик к этой ',
        urara.uma_sex_title,
        urara.elder_sibling_sex_title,
        ' бросил смутное, но смелое признание.',
      ]);
      await era.printAndWait([
        'Смелость похвальна, но ничего не понявшая ',
        urara.uma_sex_title,
        urara.elder_sibling_sex_title,
        ' просто ответила как само собой разумеется и улыбнулась взрослому, что жался(ась) рядом.',
      ]);
      await era.printAndWait([
        'Не только не дошло — стало ещё хуже? В ',
        urara.get_colored_name(),
        ' — улыбке, так и не решаясь встретить взгляд мальчика, ',
        you.get_colored_name(),
        '  лишь молча кивает.',
      ]);
      await era.printAndWait([
        'Как Скаковая ',
        urara.uma_sex_title,
        ' быть популярной и правда неплохо, но будто что-то само собой пошло не так; в общем, хоть бы тому мальчику всё было хорошо…',
      ]);
      await era.printAndWait([
        'Держа ',
        urara.get_colored_name(),
        ' за руку, так и не выговорившись, ',
        you.get_colored_name(),
        ', и всё ещё смеющаяся и машущая назад ',
        urara.get_colored_name(),
        ', вместе отправились в обратный путь.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_food: (() => {
    const title = 'Тайяки и меры против привередливости';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'В один из дней в передышке выездной тренировки ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        '  вместе стоят у лотка с тайяки, будто перед грозным врагом.',
      ]);
      await urara.say_and_wait([
        callname,
        ', ты готов(а)? Сегодня же обещали есть вместе, да?',
      ]);

      era.printButton(
        '「У меня-то всё в порядке, это ты, Урара… Извините, два тайяки со случайной начинкой.»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Глянув на рвущуюся в бой ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' , обречённо заказывает у продавца две порции 「скрытого меню」.',
      ]);
      await urara.say_and_wait(
        'Ничего! Даже если выпадет нелюбимый вкус, Урара всё равно всё доест!',
      );
      await urara.say_and_wait([
        'Тогда ',
        callname,
        ', кусаем вместе… уа… э-это васаби…!',
      ]);
      await era.printAndWait([
        'В итоге, не успев даже согреть скамейку под собой, маленькая ',
        urara.uma_sex_title,
        ' подскочила, будто её укусила в ответ та сладость в руке.',
      ]);
      await era.printAndWait([
        'А по-взрослому ',
        you.get_colored_name(),
        '  спокойно смотрит на покрасневшую от остроты ',
        urara.get_colored_name(),
        ', заодно съедая свою странную сладость с начинкой из зелёного перца.',
      ]);

      era.printButton(
        '「Урара, ты в порядке? Если не выдержишь, я могу прикончить тот кусок, ладно?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'У-у~ ничего! Урара сама всё доест! Ну, погнали… уа…',
      );
      await era.printAndWait([
        'Глядя на маленькую подопечную — хоть и красную до ушей, но всё ещё полную задора, ',
        you.get_colored_name(),
        '  молча отходит недалеко и, пока ',
        urara.sex,
        ' доедает, покупает ей две чашки сладковатого напитка…',
      ]);
      await era.printAndWait([
        'В общем, хоть сладость и вышла как розыгрыш, но благодаря ',
        you.get_colored_name(),
        ' — поддержке, ',
        urara.get_colored_name(),
        '  — задор только вырос.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_stair: (() => {
    const title = 'Лестничная тренировка и ученические слухи';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'По дороге назад из кабинета директора ',
        you.get_colored_name(),
        '  у одного из лестничных пролётов учебного корпуса натыкается на зачем-то бегающую вверх и вниз ',
        urara.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait('Фух… фух… опять всего… двенадцать ступеней…');

      era.printButton(
        '「Урара, ты что делаешь? Для самостоятельной тренировки лучше на Тренировочное поле, ладно?»',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'А, ',
        callname,
        '! Я слышала от всех: эта лестница каждый вечер прибавляет ступеньку! Прямо как магия!',
      ]);
      await urara.say_and_wait(
        'Мне стало любопытно, вот и прибежала считать, и до сих пор уже больше часа туда-сюда считаю…',
      );
      await era.printAndWait([
        'Так это школьная страшилка. Трейсенские ',
        urara.uma_sex_title,
        ' в конце концов тоже юные ',
        urara.teen_sex_title,
        ' , так что интерес вполне естественен.',
      ]);
      await era.printAndWait([
        'И для тренера ',
        you.get_colored_name(),
        '  не зыбкие байки про духов, а до сих пор окутанные тайнами ',
        urara.uma_sex_title,
        ' куда занятнее.',
      ]);

      era.printButton('「Но больше часа считать — это уже слишком, нет?»', 1);
      await era.input();

      await urara.say_and_wait(
        'Ага! Потому что сколько ни считай… ступеней всё равно двенадцать…',
      );
      await urara.say_and_wait(
        'Поэтому Урара пока не хочет сдаваться: все говорят, что правда, так что я ещё несколько раз посчитаю…',
      );
      await era.printAndWait(
        'Нет, так нельзя же? Не говоря уже о том, что эта байка кончается невезением по самые уши, — паранормальщину так просто на удачу не встретишь, верно?',
      );
      await era.printAndWait([
        'Вот: пять, десять, одиннадцать, двенадцать, тринадцать… Стоп?! Внезапно поняв, что что-то не так, ',
        you.get_colored_name(),
        '  хватается за стынущий затылок…',
      ]);
      await urara.say_and_wait(['…Э? ', callname, '  что ты делаешь… уваа—']);
      await era.printAndWait([
        'Поняв, что дело совсем плохо, ',
        you.get_colored_name(),
        '  сразу хватает маленькая ',
        urara.uma_sex_title,
        ' под мышку и затем на предельной для человека скорости сбегает с того гиблого места.',
      ]);
      await era.printAndWait([
        'В итоге аномалию обошли, но после ',
        urara.get_colored_name(),
        '  от усталости после чрезмерной нагрузки растеряла весь задор; может… это тоже вид невезения?',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_mother: (() => {
    const title = 'Случайная встреча с 「тем человеком」';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（特殊判定：不低于热忱且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        'А-а~ это тот человек. Тренер ',
        you.adult_sex_title,
        ' (Вы), хотя это всего лишь случайная встреча, всё же подготовьтесь, хорошо?',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Впрочем нет: возможно, для того человека это вовсе не случайность?',
      );
      era.drawLine();
      await era.printAndWait([
        'Стоя у двери кабинета директора, ',
        you.get_colored_name(),
        '  наблюдает за умамусумэ в чёрном перед собой, а та спокойно оглядывает идущего мимо ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Это совершенно незнакомое лицо. Бывшая выпускница? Родитель, пришедший посмотреть Трейсен? Знакомая директора? Или…',
      );
      await era.printAndWait([
        'Перед тем, кто не знает, как заговорить, ',
        you.get_colored_name(),
        ', эта статная зрелая умамусумэ опустила уже занесённую для стука руку, повернулась и явила дружелюбную улыбку.',
      ]);
      await era.printAndWait(
        'Зрелая умамусумэ「Прошу прощения, это я была невежлива. Вы ведь тренер здесь, верно? Скажите, не могли бы Вы проводить меня посмотреть Тренировочное поле?」',
      );

      era.printButton('「Э? А, простите, Вы…?」', 1);
      await era.input();

      await era.printAndWait([
        'Зрелая умамусумэ「Скажем, родитель ученицы. У меня ',
        urara.sex_code - 1 ? ' дочь' : 'сын',
        ' тоже учится здесь и уже дебютировала.»',
      ]);
      await era.printAndWait([
        'Хотя ',
        you.get_colored_name(),
        '  прежде никогда с ней не встречался(ась), улыбка этой строгой дамы всё же рождает у ',
        you.get_colored_name(),
        '  чувство давно знакомой близости.',
      ]);

      era.printButton(
        '「…Тренировочное поле — вон в ту сторону, идёмте за мной…」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'После неясной встречи следует столь же неясная просьба, ',
        you.get_colored_name(),
        '  вместе с этой внезапно появившейся таинственной дамой идёт к Тренировочному полю.',
      ]);
      await era.printAndWait([
        'Лишь вот в сравнении с тем, кто застыл до односложных ответов, ',
        you.get_colored_name(),
        ', она сама к знакомому всего первый день ',
        you.get_colored_name(),
        '  пылает странным интересом.',
      ]);
      // 特殊高好感度判定
      if (high_relation) {
        await era.printAndWait([
          'А у ',
          you.get_colored_name(),
          '  она спросила о многом, что связано с ',
          urara.uma_sex_title,
          ' и с Трейсен, и в её приветливой улыбке будто прибавилось благодарности.',
        ]);
        await era.printAndWait(
          'Зрелая умамусумэ「Вам тоже нелегко, ведь без устали радеть за подопечную очень трудно.»',
        );
        await era.printAndWait([
          'Зрелая умамусумэ「На самом деле у меня ',
          urara.sex_code - 1 ? ' дочь' : 'сын',
          ' тоже очень повезло: хоть ',
          urara.sex,
          ' не сильна, но тоже нашла такого же отличного тренера, как Вы.»',
        ]);
        await era.printAndWait([
          'В конце совместного пути вместе с ',
          you.get_colored_name(),
          '  поднимается на смотровую площадку Тренировочного поля, и она, будто знающая всё наперёд, бросает бегущим ',
          urara.teen_sex_title,
          ' улыбку полного умиления.',
        ]);
      } else {
        await era.printAndWait([
          'А после круга вопросов вроде контрольной для плохого ученика она вновь бросает уже острый взгляд на ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait(
          'Зрелая умамусумэ「Впрочем, профессиональный уровень у Вас и впрямь под стать Центру, но душу подопечной Вы, кажется, бережёте слабо…」',
        );
        await era.printAndWait([
          'Зрелая умамусумэ「Только даже если так думать — уже поздно: вышедшая на скачки ',
          urara.uma_sex_title,
          ' стоит лишь побежать, уже не сдастся так просто.»',
        ]);
        await era.printAndWait([
          'В конце совместного пути вместе с ',
          you.get_colored_name(),
          '  поднимается на смотровую площадку Тренировочного поля, и на лице той, что будто знает всё наперёд, прибывает ещё немного печали.',
        ]);
      }
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          'Зрелая умамусумэ「Кстати, сколько умамусумэ Вами восхищаются… даже если я вдруг так спрошу, Вам будет только непонятно, да?»',
        ]);
        await era.printAndWait(
          'Зрелая умамусумэ「Но в эпоху, когда мечту вверяют бегу, влюбиться в того взрослого за спиной, что будто вечно тебя поддерживает…」',
        );
        await era.printAndWait([
          'Зрелая умамусумэ「Правильным это не будет, но среди ',
          urara.couple_title,
          ' в самом цвету юности много ли тех, кто устоит? Даже я тогда не была исключением…」',
        ]);
      }
      era.printButton(
        '「Эм… простите, что перебиваю, но Вы, в конце концов…?」',
        1,
      );
      await era.input();

      await era.printAndWait(
        'Зрелая умамусумэ「Всего лишь обычный родитель, который пришёл посмотреть на ребёнка, вот и всё?»',
      );
      await era.printAndWait([
        'Так и не ответив прямо на ',
        you.get_colored_name(),
        '  — вопрос, глядя на вишнёво-розовый силуэт с другого конца Тренировочного поля, таинственная женщина ',
        you.get_colored_name(),
        '  оставляет последнюю улыбку.',
      ]);
      await era.printAndWait([
        'Зрелая умамусумэ「Это твоя подопечная, верно? Такой милый и статный ребёнок, не сходишь встретить её — вон ',
        urara.sex,
        ' бежит?」',
      ]);

      era.printButton('「А, ладно… э?」', 1);
      await era.input();

      await era.printAndWait(
        'Стоит лишь моргнуть — и от той таинственной умамусумэ в чёрном остаётся лишь далёкая спина метрах в десяти.',
      );
      await era.printAndWait([
        'А с другой стороны вбежавшая на смотровую ',
        urara.get_colored_name(),
        '  возбуждённо бросается в ',
        you.get_colored_name(),
        '  — объятия и ',
        you.get_colored_name(),
        '  только-только собирался(ась) что-то вспомнить — мысли снова сбивает в кашу.',
      ]);
      await urara.say_and_wait([
        callname,
        '!Сегодня у Урары форма супер! Даже учебный заезд выиграла! Ну как? Круто, да?!',
      ]);
      await era.printAndWait([
        'Но когда поднимает голову и смотрит на ',
        you.get_colored_name(),
        '  — ещё чуть растерянное лицо, улыбка всё ещё во весь рот, но маленькая ',
        urara.uma_sex_title,
        ' на лице всё же постепенно проступает недоумение.',
      ]);
      await urara.say_and_wait([
        '…Э? Как странно, почему это я от ',
        callname,
        '  ловлю мамин запах—',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Что скажете? Странная вышла встреча, верно? Но была ли это и впрямь встреча? Или всё было неизбежно?',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Просто для Вас и Урары, и даже для того человека и для меня ещё на входе в Трейсен кости уже были брошены.',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_vs: (() => {
    const title = 'Поединок в армрестлинге';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} spe 特别周
     * @param {CharaTalk} sky 青云天空
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_1 春乌拉拉对特别周的称呼
     * @param {PrintedSpan} callname_20 青云天空对玩家的称呼
     */
    const f = async (urara, spe, sky, you, callname, call_1, callname_20) => {
      await era.printAndWait([
        'В обеденный перерыв ',
        you.get_colored_name(),
        '  ловит шум со внутреннего двора, подходит ближе — а это ',
        urara.get_colored_name(),
        '  соревнуется с одноклассницами в армрестлинге.',
      ]);
      await era.printAndWait([
        'И как на ладони: против этой сильной соперницы нынешняя ',
        urara.get_colored_name(),
        '  сейчас в проигрыше…',
      ]);
      await spe.say_and_wait('У-Урара! Ты уже почти… можешь сдаться!');
      await urara.say_and_wait([
        call_1,
        '  — вот ещё! У тебя же рука тоже дрожит? О—!',
      ]);
      await era.printAndWait([
        'Хотя ',
        urara.get_colored_name(),
        '  ещё находит силы огрызнуться, но ',
        urara.sex,
        ' постепенно уступает — её руку прижимают всё ниже, — и судья рядом всё же объявляет итог схватки.',
      ]);
      await sky.say_and_wait(
        'Есть! Конец! Вот это сила, Спе опять выиграла, это уже который раз?',
      );
      await spe.say_and_wait(
        'Наверное, потому что раньше часто помогала маме на ферме? Да и Урара крутая, что столько продержалась!',
      );
      await urara.say_and_wait([
        'Но в итоге я опять проиграла! Как же выиграть-то… а, ',
        callname,
        '!Как в армрестлинге выиграть?',
      ]);
      await era.printAndWait([
        'Нм? Заметили? Когда это? Глядя, как к зеваке вдалеке ',
        you.get_colored_name(),
        ' машет ',
        urara.get_colored_name(),
        ', всего лишь проходя мимо, ',
        you.get_colored_name(),
        ' тоже остаётся только подойти к ',
        urara.uma_sex_title,
        ' навстречу.',
      ]);

      await era.printAndWait([
        urara.get_colored_name(),
        ' Просто хотеть обыграть ',
        spe.get_colored_name(),
        ' всё ещё слишком трудно, но раз уж ',
        urara.sex,
        ' сама спросила…',
      ]);
      era.printButton('「В армрестлинге нужна техника.» (интеллект+10)', 1);
      era.printButton(
        '「Ну, просто очень-очень стараться, да…?」 (сила+10)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await sky.say_and_wait([
          'А-а~ ',
          callname_20,
          ' здесь речь про точку опоры, точку приложения и точку воздействия? Вот она, техника армрестлинга~',
        ]);
        await urara.say_and_wait(
          'Точка опоры точка приложения точка воздействия……? Не очень понятно, но это, наверное, заклинание старания?」',
        );
        await urara.say_and_wait('Хорошо! Поняла! Тогда давай ещё раз! Спэ!」');
        await era.printAndWait([
          'Нет, так понимать не стоило, да? Хотя говорить особо не о чем, но ',
          urara.get_colored_name(),
          '  ',
          you.get_colored_name(),
          ' лучше бы и правда поняла…',
        ]);
        await spe.say_and_wait(
          'Хорошо! Тогда, тогда Урара тоже своё заклинание старания! 『Если выиграю, сегодня вечером будут морковные гамбурги』!',
        );
        await era.printAndWait(
          'Нет, погоди, это ещё что такое? Ну и любит же морковные гамбурги…',
        );
        await sky.say_and_wait(
          'Главное, чтобы было весело~ Хорошо, обе участницы, на старт… начали!',
        );
        await era.printAndWait([
          'Как и ожидалось, ',
          urara.get_colored_name(),
          ' в итоге всё равно проиграла. Впрочем, ',
          urara.sex,
          ' выглядит довольной, да и 「заклинание」 ей явно понравилось — тоже своего рода добыча, да?',
        ]);
      } else {
        await era.printAndWait([
          'Не говоря уже, знает ли ',
          urara.get_colored_name(),
          ' технику армрестлинга или нет: когда разрыв в силе слишком велик, остаётся только давить сильнее.',
        ]);
        await urara.say_and_wait(
          'О-о, вот оно как! То есть как на скачках, да? Если очень-очень стараться — обязательно выиграешь!',
        );
        await urara.say_and_wait(
          'Хорошо! Тогда, Спэ, давай ещё раз! В этот раз я точно выиграю!」',
        );
        await spe.say_and_wait(
          'Раз Урара так говорит, тогда и я выложусь, как на скачках! Держись, Урара!',
        );
        await era.printAndWait([
          'Но раз уж ',
          spe.get_colored_name(),
          ' тоже выкладывается на полную, исход поединка снова становится очевиден…',
        ]);
        await sky.say_and_wait(
          'Ой-ой~ А Урара тогда ещё и обратно продавить смогла~ Я аж вздрогнула.',
        );
        await spe.say_and_wait(
          'Я тоже на миг напряглась! Не думала, что Урара такая сильная, давай в следующий раз ещё!',
        );
        await urara.say_and_wait([
          'Хе-хе! ',
          callname,
          ', Урара всё-таки крутая, правда? В следующий раз точно не проиграю—',
        ]);
        await era.printAndWait([
          'В итоге, хотя поединок всё равно проигран, зато на полную выложилась ',
          urara.get_colored_name(),
          ' и выглядит очень довольной.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_lost_found: (() => {
    const title = 'Важная пропажа';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} callname_30 米浴对玩家的称呼
     * @param {PrintedSpan} r_call_u 米浴对春乌拉拉的称呼
     */
    const f = async (
      urara,
      rice,
      you,
      callname,
      call_30,
      callname_30,
      r_call_u,
    ) => {
      await urara.say_and_wait([
        'Нм? ',
        call_30,
        ' — лента куда же делась? ',
        callname,
        ', там впереди что-то есть?',
      ]);
      await era.printAndWait([
        'Высунув голову из зелёных кустов на территории академии, ',
        urara.get_colored_name(),
        ' стряхивает листья с головы и спрашивает у ',
        you.get_colored_name(),
        '.',
      ]);

      era.printButton('「Здесь тоже ничего нет, давай поищем дальше.»', 1);
      await era.input();

      await era.printAndWait([
        'Закрыв крышку уличной урны, ',
        you.get_colored_name(),
        ' говорит и тут же поднимает ',
        urara.get_colored_name(),
        ' на руки из кустов.',
      ]);
      await rice.say_and_wait(
        'Н-ничего, это всего лишь лента, Райс просто купит новую…',
      );
      await urara.say_and_wait(
        'Но это же лента, которая тебе очень нравится, да? Раз нравится — значит, важная! Ничего, мы обязательно найдём!',
      );
      await era.printAndWait([
        'Уже не счесть, в который раз перебивая готовую сдаться ',
        rice.get_colored_name(),
        ', ',
        urara.get_colored_name(),
        ' с надёжной улыбкой снова поднимает большой палец подруге рядом.',
      ]);
      await urara.say_and_wait([
        'Ничего, мы обязательно найдём! Ах да, ',
        callname,
        ', давайте сейчас поищем порознь—',
      ]);
      await era.printAndWait([
        'Но как раз когда вы втроём собирались разделиться на поиски, пятна воды у ног расползлись, и дождь внезапно посыпался целыми стаями.',
      ]);
      await rice.say_and_wait([
        'Дождь!? Н-неужели это всё Райс накликала…! П-простите…!',
      ]);

      era.printButton(
        '「Нет, нельзя всё время так про себя говорить: сегодня и в прогнозе дождь обещали.»',
        1,
      );
      await era.input();

      await rice.say_and_wait([
        'Даже если ',
        callname_30,
        ' так говорит… ',
        r_call_u,
        ', правда не надо искать! Простите, что всех побеспокоила!',
      ]);

      await urara.say_and_wait([
        'Ничего, важные вещи надо находить как можно скорее! Правда, ',
        callname,
        '?',
      ]);
      era.printButton(
        '「Верно, ещё чуть подержимся, нас же трое.» (энергия-100 характер+20)',
        1,
      );
      era.printButton(
        '「Уже пошёл дождь, давайте пока вернёмся.» (выносливость+10)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'Точно, ',
          callname,
          ' правду говорит! Сейчас сдаваться ещё рано! Давайте искать вместе!',
        ]);
        await era.printAndWait([
          'И вот под дождём, который постепенно разгулялся, ',
          you.get_colored_name(),
          ' вместе с двумя маленькими ',
          urara.uma_sex_title,
          ' в конце концов, уже почти насквозь промокшие, всё-таки находят ',
          rice.get_colored_name(),
          ' — ленту.',
        ]);
        await urara.say_and_wait(
          'Хе-хе~ Все чуть не промокли до нитки, но как хорошо, что ленту нашли!',
        );
        await rice.say_and_wait([
          'П-простите, и ленту потеряла, и дождь накликала… Райс опять всем наделала хлопот…',
        ]);
        await urara.say_and_wait([
          'Э? Если по словам ',
          call_30,
          ' , выходит… ',
          call_30,
          ' умеет заставлять небо лить дождь? ',
          call_30,
          ' — способность какая крутая!',
        ]);
        await rice.say_and_wait([
          'Нет-нет-нет, не так, Райс не это имела в виду, ',
          r_call_u,
          '……',
        ]);
        await era.printAndWait([
          'Хотя две подруги, кажется, снова упёрлись в очередную маленькую задачу, ',
          rice.get_colored_name(),
          ' — изначально застывшее лицо благодаря ',
          urara.get_colored_name(),
          ' совсем расслабилось.',
        ]);
        await era.printAndWait([
          'А спустя какое-то время, при ',
          you.get_colored_name(),
          ' — помощи высушившие одежду ',
          urara.get_colored_name(),
          ' и ',
          rice.get_colored_name(),
          ' тоже снова улыбнулись—',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          ', Урара в порядке, под дождём же тоже весело! Не об этом сейчас — надо скорее найти ленту!',
        ]);
        await rice.say_and_wait([
          'Но если промокнуть под дождём — можно простудиться! Райс не хочет, чтобы ',
          r_call_u,
          ' тоже простудилась…',
        ]);
        await urara.say_and_wait(
          'Н-ну… тогда поищем, когда дождь кончится, только быстро! Договорились?',
        );
        await era.printAndWait([
          'После того как они разошлись, дождь лил до следующего дня. Но когда ',
          you.get_colored_name(),
          ' и ',
          rice.get_colored_name(),
          ' поспешили на место, ',
          urara.get_colored_name(),
          ' уже ждала там с лентой.',
        ]);
        await urara.say_and_wait([
          call_30,
          '! ',
          callname,
          '! Сюда! Урара нашла ленту—!',
        ]);
        await rice.say_and_wait(['…… ', r_call_u, '……!']);
        await era.printAndWait([
          'Глядя, как ',
          urara.get_colored_name(),
          ' радостно бежит навстречу, даже ещё недавно вся в тревоге ',
          rice.get_colored_name(),
          ' тоже улыбнулась.',
        ]);
        await era.printAndWait([
          'Так и есть: ',
          urara.sex,
          ' с самого утра убежала искать ленту. Догадка подтвердилась, ',
          you.get_colored_name(),
          ' тоже отправил(а) сообщения комендантке общежития и соседке маленькой ',
          urara.uma_sex_title,
          '…',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  op_race_clothe: (() => {
    const title = 'О победном костюме';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'Сегодня, ',
        urara.get_colored_name(),
        ' наконец получила победный костюм, который недавно после случайной порчи отдали чинить.',
      ]);
      await urara.say_and_wait(
        'Хе-хе~ победный костюм Урары наконец вернулся! Урара всегда думала, что выйти на скачку в победном костюме — супер круто—!',
      );
      await era.printAndWait([
        'Прижимая к себе хоть и скромный, но с самого начала бывший рядом — ',
        urara.sex,
        ' — первый победный костюм, ',
        urara.get_colored_name(),
        ' заметно повеселела.',
      ]);
      await era.printAndWait([
        'Впрочем, к дизайну победного костюма обычно сами ',
        urara.uma_sex_title,
        ' имеют самое прямое отношение, так что каждый такой костюм рождается единственным в своём роде.',
      ]);
      await era.printAndWait([
        'Можно сказать, как бы ни судили со стороны — красиво или нет, у этих особенных нарядов есть право называться «парадным убранством мечты ',
        urara.teen_sex_title,
        ' ».',
      ]);
      await era.printAndWait([
        'Просто ',
        urara.get_colored_name(),
        ' сама собрала себе «самую первую форму мечты»; характерно — ',
        urara.sex,
        ', но всё равно кажется слишком «как у всех»…',
      ]);

      era.printButton(
        '「…Кстати, можно спросить: как Урара с самого начала придумала этот наряд?»',
        1,
      );
      await era.input();

      await era.printAndWait([
        'А перед ',
        you.get_colored_name(),
        ' — осторожный, прощупывающий вопрос ',
        urara.get_colored_name(),
        ' ответила открытой улыбкой.',
      ]);
      await urara.say_and_wait(
        'А? Да ничего особенного? Дизайн этого наряда Урара просто взяла с гимнастической формы, в которой в детстве бежала в первый раз!',
      );
      await urara.say_and_wait(
        'Хоть совсем не получалось победить, папа с мамой всё равно хвалили, так что в этом наряде Урара чувствует, будто становится сильнее!',
      );
      await urara.say_and_wait(
        'И когда станет сильнее, Урара ещё хочет, чтобы то чувство, с каким надевает этот наряд, делало всех счастливыми!',
      );
      await era.printAndWait([
        'И правда: ведь ',
        urara.get_colored_name(),
        ' — мечта всегда такая простая и скромная, поэтому и победный костюм такой. И ещё это «когда станет сильнее»…',
      ]);
      await era.printAndWait([
        'Как тут не подумать: иметь победный костюм ещё не значит, что в карьере выпадет шанс его надеть, ',
        urara.get_colored_name(),
        ' тоже это понимает.',
      ]);
      await era.printAndWait([
        'Похоже, даже ещё незрелая ',
        urara.get_colored_name(),
        ' с самого начала была к этому готова —',
      ]);

      urara.say([
        'Ой, ',
        callname,
        '! Раз уж его починили… можно сегодня потренироваться в нём?',
      ]);
      era.printButton(
        '「Если костюм опять испортится — будет плохо.» (скорость +20)',
        1,
      );
      era.printButton(
        '「Если Ураре от этого радостно — почему бы и нет.» (сила +20)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait(
          '— Да, и правда: если опять испортится — плохо. Раз это победный костюм, его надо беречь.',
        );
        await urara.say_and_wait([
          'Урара будет побеждать! Поэтому ',
          callname,
          ', когда Урара его не надевает, можно поберечь его для Урары?',
        ]);
        await era.printAndWait([
          'С предвкушением, как наденет победный костюм, ',
          urara.get_colored_name(),
          ' сложила свою «мечту» и с улыбкой вложила её ',
          you.get_colored_name(),
          ' в руки.',
        ]);
      } else {
        await era.printAndWait([
          'Перед ',
          urara.get_colored_name(),
          ' — полным ожидания лицом, ',
          you.get_colored_name(),
          ' так и не смог(ла) возразить на сияющую улыбку маленькой ',
          urara.uma_sex_title,
          '.',
        ]);
        await urara.say_and_wait([
          'Правда? Спасибо ',
          callname,
          '! Урара будет очень стараться на тренировках, чтобы и на следующих скачках снова его надеть!',
        ]);
        await era.printAndWait([
          'Но когда ',
          urara.get_colored_name(),
          ' вдоволь натешилась, ',
          urara.sex,
          ' всё равно сказала: «До следующего раза надо беречь!», и сама передала хранение победного костюма ',
          you.get_colored_name(),
          '.',
        ]);
      }
      await era.printAndWait([
        'Верно: тренер как раз и есть та профессия, что помогает выбравшей бег «',
        urara.couple_title,
        ' » ухватить мечту, а ',
        you.get_colored_name(),
        ' как раз тот тренер, которому ',
        urara.get_colored_name(),
        ' «доверяет» —',
      ]);
      await era.printAndWait([
        'Нужно помочь ',
        urara.get_colored_name(),
        ' добежать до конца. Чувствуя в груди то же биение, что при встрече с маленькой ',
        urara.uma_sex_title,
        ', ',
        you.get_colored_name(),
        ' крепит решимость, глядя на победный костюм в руках.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_interview: (() => {
    const title = 'Интервью вместе с подругой';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} callname_30 米浴对玩家的称呼
     * @param {PrintedSpan} r_call_u 米浴对春乌拉拉的称呼
     */
    const f = async (
      urara,
      rice,
      etsuko,
      you,
      callname,
      call_30,
      callname_30,
      r_call_u,
    ) => {
      await era.printAndWait([
        'Сегодня, ',
        urara.get_colored_name(),
        ' и ',
        rice.get_colored_name(),
        ' вместе дали особое интервью интернет-изданию — его должны выложить в рубрике «Хорошие друзья: ',
        urara.uma_sex_title,
        ' ».',
      ]);
      await era.printAndWait([
        'Впрочем, перед интервью совершенно незнакомого человека, совсем не похожего на часто мелькающую в академии ',
        etsuko.get_colored_name(),
        ', две маленькие ',
        urara.uma_sex_title,
        ' так и не смогли войти в ритм.',
      ]);
      await era.printAndWait(
        'Журналист А「Тогда скажите: было ли у вас двоих что-то, что особенно запомнилось?»',
      );
      if (
        era.get('cflag:30:招募状态') === recruit_flags.yes &&
        era.get('love:30') >= 50 &&
        era.get('love:52') >= 52
      ) {
        await urara.say_and_wait([
          'Запомнилось? Это про то, как с ',
          callname,
          ' вместе?',
        ]);
        await rice.say_and_wait([
          'Ну, с ',
          callname_30,
          ' когда вместе, и правда сильно врезается в память, хотя держать при себе тоже неплохо…',
        ]);
        await rice.say_and_wait([
          'Но когда Райс и ',
          r_call_u,
          ' вместе набрасываются, ',
          callname_30,
          ' вдруг робеет, правда очень мило.',
        ]);
        await urara.say_and_wait(
          'Правда! Но Урара думает, что тайком уносить сладости — нехорошо, да? Надо же всем сказать, правда?',
        );
        await rice.say_and_wait([
          'Потому что ',
          r_call_u,
          ' ещё ребёнок, а Райс уже в старшей школе, уже взрослая, да…?',
        ]);
        await urara.say_and_wait('Э? Правда так~?');
        await era.printAndWait(
          'Не говоря уже о том, туда ли спрашивает журналистка: атмосфера между двумя подругами как будто не та…?',
        );
        await era.printAndWait([
          'Оглянувшись на журналистку, до дрожи прохваченную той же атмосферой между подругами, ',
          you.get_colored_name(),
          ' сразу понимает, что этот кусок в эфир нельзя——',
        ]);
      } else {
        await urara.say_and_wait(
          'Впечатляет? А что вообще считается впечатляющим? Урара чувствует, что каждый день можно так назвать, да?',
        );
        await rice.say_and_wait([
          'В-впечатляет…! Н-на самом деле Райс тоже… это…!',
        ]);
        await rice.say_and_wait([
          'Хотя впечатления и сильные, Райс, кажется, каждый день всем доставляет хлопоты, правда прости…',
        ]);
        await urara.say_and_wait([
          'Э? ',
          call_30,
          ' чего вдруг снова загрустила? Правда всё хорошо——',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' бессильно смотрит на главную журналистку, а та украдкой отвечает ',
          you.get_colored_name(),
          ' уже привычным, но всё ещё горьким взглядом.',
        ]);
        await era.printAndWait([
          'Видно, у ',
          urara.get_colored_name(),
          ' ',
          urara.couple_title,
          ' нынешняя ситуация, похоже, полностью разошлась с тем, чего ждали интервьюеры.',
        ]);
      }
      await era.printAndWait([
        'И в паузе интервью ',
        you.get_colored_name(),
        ' как опекун, отвечающий за контакт, само собой начинает обсуждать с съёмочной группой, что делать дальше.',
      ]);
      await era.printAndWait([
        'Журналистка А「Очень жаль, но дайте нам немного времени: чтобы лучше показать ',
        urara.couple_title,
        ', сейчас, возможно, придётся заново наметить направление интервью…」',
      ]);

      era.printButton(
        '「Спасибо, что потрудились, я тоже попробую что-нибудь придумать.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'Временно проводив всё ещё благодарящую журналистку, ',
        you.get_colored_name(),
        ' снова переводит взгляд туда, где неподалёку о чём-то говорят Райс и ',
        urara.get_colored_name(),
        '.',
      ]);
      await rice.say_and_wait([
        'Правда очень жаль, Райс только что немного слишком разволновалась… У нас же столько воспоминаний…',
      ]);
      await rice.say_and_wait([
        'Для Райс вместе с ',
        r_call_u,
        ' пройти интервью — правда очень радостно… Надо было просто сказать…',
      ]);
      await urara.say_and_wait([
        'Урара тоже! Потому что вместе с ',
        call_30,
        ' попасть в спецрепортаж — это же прямо как сон!',
      ]);
      await urara.say_and_wait([
        'Так что ничего, ',
        call_30,
        ' просто будь собой, Урара рядом с ',
        call_30,
        '!',
      ]);
      await rice.say_and_wait('Н-но…!');
      await era.printAndWait(
        'С одного взгляда ясно: одна вечно слишком много думает и чересчур тревожится, другая как всегда слишком заводится.',
      );

      era.print([
        'Как в следующем блоке помочь ',
        urara.couple_title,
        ' успокоиться? Есть какой-нибудь хороший способ…',
      ]);
      era.printButton(
        `Угостить ${urara.couple_title} сладостями. (сила +20)`,
        1,
      );
      era.printButton(
        `Сводить ${urara.couple_title} поиграть вместе. (выносливость +20)`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'Э? То есть можно есть сладости? Спасибо, ',
          callname,
          ' ——',
          call_30,
          '! Вот, открой рот!',
        ]);
        await rice.say_and_wait([
          'Э? ',
          rice.get_colored_name(),
          ' тоже можно… уу! ',
          r_call_u,
          ' так разошлась! ',
          rice.get_colored_name(),
          ' может есть сама…!',
        ]);
        await era.printAndWait([
          'По ',
          you.get_colored_name(),
          ' — подталкиванию, ',
          urara.get_colored_name(),
          ' и ',
          rice.get_colored_name(),
          ' начинают оживлённо делиться сладостями, а стоящие рядом сотрудники сразу ставят камеру.',
        ]);
        await rice.say_and_wait(
          '…М-м, потому что в сладости нужно добавить особенную магию, вот тогда от них и чувствуешь счастье…',
        );
        await urara.say_and_wait(
          'Точно! Мы же недавно вместе пекли печенье? И когда добавили ту магическую смесь, о которой все говорили, правда стало ещё вкуснее!',
        );
        await era.printAndWait(
          'Журналистка А「Этот случай очень занятный! Мне тоже интересно, можно ещё чуть-чуть подробнее?」',
        );
        await urara.say_and_wait([
          'Тёте-журналистке тоже интересно? Тогда подождите чуть-чуть… ',
          call_30,
          '! Урара может сходить занять кабинет домоводства?',
        ]);
        await rice.say_and_wait([
          'Э? Прямо сейчас? Тогда ',
          rice.get_colored_name(),
          ' пойдёт поискать материалы, что остались в прошлый раз!',
        ]);
        await era.printAndWait([
          'В повторном интервью после правок спецрепортаж наконец целиком снял живой вид двух маленьких ',
          urara.uma_sex_title,
          ' во время интервью.',
        ]);
        await era.printAndWait(
          'Хотя непонятно, как вторая половина программы вдруг стала каналом про приготовление сладостей, но раз всем весело — тогда ладно.',
        );
      } else {
        await urara.say_and_wait([
          'Э? Можно пойти поиграть? С интервью всё в порядке… а! Урара поняла… ',
          call_30,
          '!',
        ]);
        await rice.say_and_wait([
          'Э-э!? Что сейчас делают… ваа! П-подожди, ',
          r_call_u,
          ', так нельзя~!',
        ]);
        await era.printAndWait([
          'Но где же ошибка? Ведь это просто обычная маленькая ',
          urara.child_sex_title,
          ' возня, почему звучит так ужасно…',
        ]);
        await era.printAndWait(
          'Журналистка А「Зато этот кадр очень хорош, подождите секунду, сейчас!»',
        );
        await era.printAndWait(
          'Сразу заметив, как те двое гоняются и возятся, журналистка сбоку быстро хватает фотоаппарат и начинает снимать серией——',
        );
        await rice.say_and_wait([
          'Уу~ ',
          r_call_u,
          '! Ещё так — и ',
          rice.get_colored_name(),
          ' тоже рассердится——есть! ',
          rice.get_colored_name(),
          ' догнала ',
          r_call_u,
          '!',
        ]);
        await urara.say_and_wait([
          'Подожди-подожди! ',
          call_30,
          ' не надо так! Урара знает, что виновата?!',
        ]);
        await era.printAndWait('…Всё-таки где-то поняли неправильно!');
        await era.printAndWait(
          'Несколько дней спустя в специальном репортаже вышла фотография, где они вдвоём играют. Говорят, этот снимок прозвали божественным кадром и он даже на время стал горячей темой.',
        );
        await era.printAndWait([
          'Хотя почему-то всегда содержится с апокалиптической атмосферой ',
          urara.sex_code === 1 ? ' сёта' : 'лоли',
          'кон-составляющая, но по итогу это можно считать идеальным финалом…?',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_challenge: (() => {
    const title = 'Вызов «легенды»';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} spe 特别周
     * @param {CharaTalk} grass 草上飞
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_1 春乌拉拉对特别周的称呼
     * @param {PrintedSpan} call_11 春乌拉拉对草上飞的称呼
     * @param {PrintedSpan} callname_11 草上飞对玩家的称呼
     * @param {PrintedSpan} g_call_s 草上飞对特别周的称呼
     * @param {PrintedSpan} g_call_u 草上飞对春乌拉拉的称呼
     */
    const f = async (
      urara,
      spe,
      grass,
      you,
      callname,
      call_1,
      call_11,
      callname_11,
      g_call_s,
      g_call_u,
    ) => {
      await era.printAndWait([
        'Как-то днём, как раз когда ',
        you.get_colored_name(),
        ' направлялся(ась) в кабинет тренера, как вдруг увидел(а) в коридоре обсуждающую что-то с кем-то ',
        urara.get_colored_name(),
        '.',
      ]);
      await urara.say_and_wait([
        call_11,
        '!Давай этим шансом вместе побьём ',
        call_1,
        ' о!',
      ]);
      await grass.say_and_wait(
        'Намерение я понимаю… но, э-э… сказать, что уровень этой битвы совсем другой…?',
      );
      era.printButton(
        `「Что такое? Собираетесь бежать наперегонки с Спе-тян?»`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Вот что! На торговой улице в этот раз проводят очень крутое соревнование! Название такое—',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' разворачивает постер в руках: на нём в бесхитростной вёрстке запечатлён ',
        spe.get_colored_name(),
        ' — 「подвиг」 в испытании сверхбольшой порции рамена.',
      ]);
      await era.printAndWait([
        'Глядя на кричащий постер, а затем на улыбающуюся, но с долей колебания ',
        grass.get_colored_name(),
        ' встретившись взглядами, ',
        you.get_colored_name(),
        ' примерно догадался(ась), что будет дальше.',
      ]);
      await urara.say_and_wait(
        '『Брось вызов легенде☆ Спешал Уик! Съешь сверхбольшую миску рамена дочиста!』 Как? Круто, да!',
      );
      await urara.say_and_wait(
        'Я ещё специально сходила спросить в раменную — им как раз нужны двое участников!',
      );
      await urara.say_and_wait([
        'Так что, ',
        call_11,
        ' ~давай вместе бросим вызов! Мы точно сможем победить ',
        call_1,
        ' ~',
      ]);
      await era.printAndWait([
        'Но даже перед ',
        urara.get_colored_name(),
        ' — капризным натиском непробиваемая ямато-надесико, кажется, совсем не шелохнулась.',
      ]);
      await grass.say_and_wait([
        'Но, ',
        g_call_u,
        '… ты точно всё доешь? Я помню, ты каждый раз за обедом ешь меньше меня…',
      ]);
      if (era.get('cflag:11:招募状态') === recruit_flags.yes) {
        await you.say_and_wait(
          [
            'Впрочем, ',
            grass.get_colored_name(),
            ' ты на самом деле из тех, у кого аппетит большой, да? Хоть за раз берёшь немного, но вроде украдкой бегаешь по несколько раз…',
          ],
          true,
        );
        await you.say_and_wait(
          [
            'И ещё ',
            grass.get_colored_name(),
            ' ты на самом деле очень хочешь поесть, да? Хоть ',
            grass.teen_sex_title,
            ' — сдержанность и контроль веса сковывают действия, но ты украдкой сглатываешь слюну, да?',
          ],
          true,
        );
        await era.printAndWait([
          'Только… все эти слова так и остались в мыслях. Глядя на ',
          grass.get_colored_name(),
          ' — ещё добродушную улыбку, ',
          you.get_colored_name(),
          ' проглотил(а) потенциально смертельную информацию.',
        ]);
      }
      await urara.say_and_wait(
        'Всё хорошо! Перед соревнованием просто пропусти несколько приёмов пищи — и всё будет в порядке! В этом и секрет состязаний обжор!',
      );
      await grass.say_and_wait([
        'М-м… правда всё будет хорошо? Я совсем не думаю, что одним этим можно победить ',
        g_call_s,
        ' …?',
      ]);
      await urara.say_and_wait([
        'И то правда, всё-таки ',
        call_1,
        ' легендарная личность, да, но… сейчас отказаться от этого шанса — не слишком ли жалко?',
      ]);
      await grass.say_and_wait([g_call_u, '……']);
      era.print([
        'С самого начала принимая ',
        grass.get_colored_name(),
        ' — намёки взглядом, и теперь ',
        you.get_colored_name(),
        ' наконец нашёл(ла) момент вклиниться в разговор.',
      ]);

      era.printButton(
        `「Лучше всё-таки добейся на скачках того, чтобы ${urara.sex} осталась позади.» (энергия +100, очки навыков +5)`,
        1,
      );
      era.printButton(
        '「Или… давай попробуем бросить вызов?» (энергия +300, очки навыков +10, вес растёт)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await grass.say_and_wait([
          callname_11,
          ' говорит верно: лучше состязаться не в аппетите, а на скаковой дорожке — так куда интереснее.',
        ]);
        await urara.say_and_wait(
          'Раз уж так говорите… м! Урара поняла! В следующих скачках Урара станет ещё круче легендой!',
        );
        await era.printAndWait([
          'Так что при помощи ',
          you.get_colored_name(),
          ' и ',
          grass.get_colored_name(),
          ' сегодня ',
          urara.get_colored_name(),
          ' успешно избежала кризиса набора веса.',
        ]);
        await era.printAndWait(
          'Впрочем, 「стать легендой на скаковой дорожке」? Звучит и правда здорово…',
        );
      } else {
        await era.printAndWait([
          'Хотя скорее всего не победить, но если благодаря этому ',
          urara.get_colored_name(),
          ' чему-то научится, то, может, и не так уж плохо, так что…',
        ]);
        await urara.say_and_wait([
          'М! Раз ',
          callname,
          ' так сказал(а), тогда Урара обязательно пойдёт—',
        ]);
        await grass.say_and_wait(
          'Хо-хо, какая замечательная сила воли, тогда вам двоим очень желаю удачи, хорошо?',
        );

        era.printButton(
          '「А? Подождите, что-то не так, причём здесь «вам двоим»?»',
          1,
        );
        await era.input();

        await grass.say_and_wait(
          'Потому что ты только что сказал(а) 『мы обязательно попробуем бросить вызов』, так что я буду очень старательно болеть за вас.',
        );
        await era.printAndWait([
          'Как и ожидалось от могучей ',
          urara.uma_sex_title,
          ', раз смогла не дрогнув лицом вмиг вырваться из окружения… а, нет! Это ',
          urara.sex,
          ', похоже, подставила вместо себя кого-то другого!',
        ]);
        await urara.say_and_wait([
          'Э-э? ',
          callname,
          ' и правда будет участвовать в ',
          urara.uma_sex_title,
          ' -классовом соревновании? Как здорово! Тогда давай вместе постараемся, ',
          callname,
          '!',
        ]);
        await era.printAndWait([
          'Перед сияющей глазами маленькая ',
          urara.uma_sex_title,
          ', и смотрящей на себя неким 「нежным взглядом」 ',
          grass.get_colored_name(),
          '……',
        ]);
        await era.printAndWait([
          'Облитый(ая) холодным потом ',
          you.get_colored_name(),
          ' всё же опустил(а) руки, которыми собирался(ась) оправдываться, и постарался(ась) сделать лицо не таким 「раздавленным ношей」.',
        ]);
        await era.printAndWait([
          'А несколько дней спустя… как бы сказать, когда легенда всерьёз берётся за дело — это поистине поразительно, и ',
          you.get_colored_name(),
          ' тоже решил(а), что пока не хочет больше видеть никакого рамена…',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_farthest: (() => {
    const title = 'Окольным путём?';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'На обратном пути с прогулки, возможно потому что слишком весело наигралась, ',
        urara.get_colored_name(),
        ' выглядела немного усталой, так что вы решили отдохнуть поблизости.',
      ]);
      await era.printAndWait([
        'Сидя на скамейке в соседнем парке, сначала потратили немного времени, планируя, во что ещё поиграть, затем ',
        you.get_colored_name(),
        ' пошёл(а) к ближайшему автомату и достал(а) две банки напитков.',
      ]);
      await era.printAndWait([
        'Но когда ',
        you.get_colored_name(),
        ' с горячими напитками вернулся(ась) в парк, то обнаружил(а), что ещё недавно относительно бодрая ',
        urara.get_colored_name(),
        ', теперь уже прислонилась к скамейке и уснула.',
      ]);
      await era.printAndWait([
        'Обняв ',
        you.get_colored_name(),
        ' протянутую руку, свернувшаяся калачиком на скамейке маленькая ',
        urara.uma_sex_title,
        ' шепчет во сне и понемногу занимает ',
        you.get_colored_name(),
        ' — объятия.',
      ]);
      await urara.say_and_wait([
        'эх-хе-хе~ ',
        callname,
        '…Давай вместе попробуем… это самые любимые сладости Урары…',
      ]);

      era.print([
        urara.get_colored_name(),
        ' видит прекрасный сон? ',
        you.get_colored_name(),
        ' немного колеблется: разбудить сразу — или пусть ',
        urara.sex,
        ' ещё поспит……',
      ]);
      era.printButton(
        '「Тогда… я съем и порцию Урары, ладно?」(очки навыков+30)',
        1,
      );
      era.printButton(
        `Не тревожа Урару, сразу отнести спящую ${urara.sex} домой на спине.(выносливость+10)`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Тихо склонившись к ',
          urara.get_colored_name(),
          ' у уха, ',
          you.get_colored_name(),
          ' теребит у маленькой ',
          urara.uma_sex_title,
          ' пушок на ушке, тихонько качает сон, что видит ',
          urara.sex,
          '.',
        ]);
        await urara.say_and_wait([
          'Э? Нельзя! Нельзя забирать всё себе, ',
          callname,
          '!',
        ]);
        await era.printAndWait([
          'Затем, потому что ',
          you.get_colored_name(),
          ' забрал(а) сладости, вскочившая ото сна ',
          urara.get_colored_name(),
          ' даже хвост вздыбился и она прямо слетела со скамейки.',
        ]);
        await era.printAndWait([
          'Но когда маленькая ',
          urara.uma_sex_title,
          ' очнулась от дрёмы, в растерянных вишнёвых глазах встретился взгляд тоже испугавшегося тренера.',
        ]);
        await urara.say_and_wait('А? Сла… сладости… а, неужели…?');

        era.printButton('「Точно, даже во сне напор у Урары тот ещё, да?»', 1);
        await era.input();

        await urara.say_and_wait([
          'И то правда, ',
          callname,
          ' не заберёшь сладости Урары… но это же был хороший сон, так что ничего!',
        ]);
        await urara.say_and_wait([
          'Но, ',
          callname,
          ', в следующий раз, если снова будет возможность, можно вместе с Урарой поесть сладости?',
        ]);

        era.printButton('「Конечно, без проблем.»', 1);
        await era.input();

        await era.printAndWait([
          'Протягивает ещё тёплый напиток ',
          urara.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' и сказавшая 「Договорились!」 ',
          urara.get_colored_name(),
          ' заключают ещё одно обещание.',
        ]);
        await era.printAndWait([
          'Потом, выбросив пустую банку в подходящую урну, ',
          you.get_colored_name(),
          ' и ',
          urara.get_colored_name(),
          ' шагают навстречу вечерней заре дальше домой.',
        ]);
      } else {
        await era.printAndWait([
          'Медленно перекладывает ',
          urara.get_colored_name(),
          ' из своих объятий себе на спину, ',
          you.get_colored_name(),
          ' старается не потревожить ',
          urara.get_colored_name(),
          ' — движениями осторожно встаёт.',
        ]);
        await urara.say_and_wait([
          'М-м…? ',
          callname,
          '…Что с Урарой только что было?',
        ]);

        era.printButton(
          '「Проснулась? Надо пораньше вернуться и отдохнуть, справишься?»',
          1,
        );
        await era.input();

        await era.printAndWait([
          urara.get_colored_name(),
          ' будто нечаянно проснулась от тряски на ходу, но сейчас ',
          you.get_colored_name(),
          ' конечно не собирается ',
          urara.sex,
          ' спускать тут же на землю.',
        ]);
        await urara.say_and_wait('Э…? Так Урара уснула… фух…');
        await era.printAndWait([
          'И вот, неся на спине маленькую ',
          urara.uma_sex_title,
          ' ещё какое-то расстояние, ',
          urara.sex,
          ' тут же снова погружается в только что виденный сладкий сон.',
        ]);
        await urara.say_and_wait([
          'эх-хе-хе… вкусно, да… здесь ещё много… ',
          callname,
          ' же взрослый(ая)… больше не стесняйся…',
        ]);
        await era.printAndWait(
          'Хотя не любопытствовать невозможно: что же это за сон такой по содержанию…',
        );
        await era.printAndWait([
          'Чтобы ',
          urara.sex,
          ' не проснулась, ',
          you.get_colored_name(),
          ' медленно идёт обратно в общежитие. В итоге, даже когда по прибытии ',
          urara.sex,
          ' перешла на руки дежурной, ',
          urara.get_colored_name(),
          ' так и не проснулась.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_park: (() => {
    const title = '「Парк аттракционов」 на крыше';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        ', можно сходить с Урарой в одно место? Ничего страшного, всего на минутку!',
      ]);
      await era.printAndWait([
        'На обратном пути после спецтренировки на торговой улице рядом идущая ',
        urara.get_colored_name(),
        ' глядя на здание неподалёку, хватает ',
        you.get_colored_name(),
        ' — рукав.',
      ]);
      await era.printAndWait([
        'А затем ',
        you.get_colored_name(),
        ' следует за ',
        urara.get_colored_name(),
        ' к недавно открывшемуся неподалёку торговому комплексу, садится в наружный смотровой лифт и поднимается до самой крыши.',
      ]);
      await era.printAndWait(
        'Железная дверь медленно открывается под звонкий звонок, и на крыше под стеклянным навесом перед ними постепенно появляется маленький парк аттракционов.',
      );
      await era.printAndWait(
        'Может, потому что ещё будний день, в этом маленьком парке ни души, лишь автомат с билетами и цветные огни аттракционов одиноко мигают.',
      );
      await era.printAndWait([
        'Но ',
        urara.get_colored_name(),
        ' вдруг захотела поиграть в парке аттракционов… явно же нет.',
      ]);

      era.printButton('「Что-то вспомнила?»', 1);
      await era.input();

      await era.printAndWait([
        'Вместе войдя на площадку парка, ',
        urara.get_colored_name(),
        ' смотрит на миниатюрные крутящиеся чашки посреди площадки и тихо начинает говорить.',
      ]);
      await urara.say_and_wait(
        'По выходным дети с торговой улицы все приходят сюда играть: близко же, и билеты дешевле, чем в большом парке.',
      );
      await urara.say_and_wait(
        'И ещё, хотя дядям и тётям, которые хотят возродить торговую улицу, может не нравиться, но здесь что ни делай — всё удобно.',
      );
      await urara.say_and_wait([
        'Поэтому Урара думает: всем на торговой улице нужно, наверное, не то возрождение, о котором все говорят, а повод измениться…',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' и милые чашки тихо слушают ',
        urara.teen_sex_title,
        ' — мысли, а попеременно вспыхивающие цветные огни снова окрашивают ',
        urara.teen_sex_title,
        ' — вишнёвые глаза ещё ярче.',
      ]);
      await urara.say_and_wait(
        'Окружение можно изменить, проблем может быть много, но если стараться — тоже всё получится.',
      );
      await era.printAndWait([
        'Верно сказано: может, всё это вовсе не спорит. Пока люди на месте, пока ',
        urara.get_colored_name(),
        ' всё ещё ',
        urara.get_colored_name(),
        ', всё будет как прежде.',
      ]);
      await era.printAndWait([
        'И правда неожиданно: хоть и выглядит по-детски, но ',
        urara.get_colored_name(),
        ' — мысли становятся всё глубже, даже глубже, чем у многих ',
        urara.sex,
        ' — одноклассниц…',
      ]);

      urara.say([
        'Кстати, ',
        callname,
        ', раз уж пришли — пойдёте с Урарой вместе?',
      ]);
      era.printButton(
        '「Если Урара не устанет — тогда без проблем, да?」(скорость+10)',
        1,
      );
      era.printButton('「Я не пойду, Урара, иди сама.»(сила+10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'Ага! Значит, сегодня можно чуть попозже вернуться, правда, ',
          callname,
          '?',
        ]);
        await era.printAndWait([
          'Услышав ',
          you.get_colored_name(),
          ' — ответ, маленькая ',
          urara.uma_sex_title,
          ' смотрит на ',
          you.get_colored_name(),
          '  с понимающей улыбкой и затем вместе с ',
          you.get_colored_name(),
          '  входит в этот маленький изящный аттракцион.',
        ]);
        await era.printAndWait([
          'Чайные чашки начинают мягко кружиться под музыку, закат сквозь стеклянную крышу ложится на лицо маленькая ',
          urara.uma_sex_title,
          ', устремлённое вдаль.',
        ]);
        await era.printAndWait([
          'О чём сейчас думает этот маленький мыслитель? А может, ',
          urara.sex,
          ' так же чуть-чуть рада, как улыбка на лице?',
        ]);
      } else {
        await urara.say_and_wait([
          'Почему? Потому что ',
          callname,
          '  уже взрослый?',
        ]);
        await era.printAndWait([
          'Услышав ',
          you.get_colored_name(),
          ' — беспомощный ответ, ',
          urara.teen_sex_title,
          ' хоть и немного расстроилась, всё же с улыбкой шутит со взрослым рядом.',
        ]);

        era.printButton('「Потому что уже взрослый.»', 1);
        await era.input();

        await urara.say_and_wait([
          'Тогда пойдём обратно вместе, ',
          callname,
          '? Урара тоже хочет поскорее стать взрослой!',
        ]);
        await era.printAndWait([
          'Так ли это хорошо? Глядя на ',
          urara.get_colored_name(),
          ' — сияющие улыбкой глаза, ',
          you.get_colored_name(),
          '  в итоге так и не задаёт этот вопрос вслух.',
        ]);
        await era.printAndWait([
          'Спиной к закату поднявшись в лифт, ',
          you.get_colored_name(),
          '  и ',
          urara.get_colored_name(),
          '  снова ступают на путь домой.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_forget: (() => {
    const title = 'Забыла поесть?';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'После дня выездной спецтренировки, когда ',
        you.get_colored_name(),
        '  провожает ',
        urara.get_colored_name(),
        '  к воротам школы —',
      ]);
      await urara.say_and_wait([
        'А! ',
        callname,
        '! Кажется, я забыла очень важную вещь!',
      ]);

      era.printButton(
        '「Что случилось?! Что так громко? Что-то важное осталось на месте тренировки?»',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'Нет! Это я по дороге обратно забыла купить! Тайяки с новым вкусом и медовый напиток!',
      );
      await urara.say_and_wait([
        'Хотя ',
        callname,
        '  тоже, кажется, забыл(а) напомнить, но сейчас, наверное, ещё не закрыто — если взять только одно…',
      ]);

      era.printButton('「Э? А — н-ну, о…」', 1);
      await era.input();

      await era.printAndWait([
        'Казалось бы, давно пора привыкнуть, но, услышав ',
        urara.get_colored_name(),
        ' — панику по пустякам, ',
        you.get_colored_name(),
        '  всё равно выдаёт упавший ответ.',
      ]);
      await urara.say_and_wait([
        callname,
        '! Это ещё что за реакция! Урара тоже умеет злиться, знаешь ли!',
      ]);

      urara.say([
        'Впрочем, сейчас ещё должно быть не поздно! ',
        callname,
        ', ',
        you.get_colored_name(),
        ' — совет таков…',
      ]);
      era.printButton(
        '「Медовый напиток ближе, если бежать сейчас — ещё успеем!」(воля+10)',
        1,
      );
      era.printButton(
        '「Тайяки хоть и дальше, но прилавок точно не свернут!」(выносливость+10)',
        2,
      );
      const ret = await era.input();
      await urara.say_and_wait([
        'Хорошо! Раз ',
        callname,
        '  так говорит, то Урара тоже сбегает и сразу вернётся! Подожди чуть-чуть —!',
      ]);
      await era.printAndWait([
        'Оставив ',
        you.get_colored_name(),
        '  у школьных ворот, маленькая ',
        urara.uma_sex_title,
        ' с небывалой скоростью несётся в сторону торговой улицы.',
      ]);

      era.printButton('「Не так быстро! По дороге осторожнее!»', 1);
      await era.input();

      await era.printAndWait([
        'Глядя вслед крошечной фигурке, что ускользает за край взгляда быстрее собственного крика, ',
        you.get_colored_name(),
        '  бессильно качает головой.',
      ]);
      await era.printAndWait([
        'Если бы ',
        urara.get_colored_name(),
        '  хоть часть той сосредоточенности на сладостях отдавала обычным тренировкам и пробным скачкам.',
      ]);
      if (ret === 1) {
        await era.printAndWait([
          'Но спустя какое-то время ',
          you.get_colored_name(),
          '  смотрит на то, что ',
          urara.get_colored_name(),
          '  с улыбкой протянула — медовый напиток, и всё же с теплотой решает как следует распробовать…',
        ]);
      } else {
        await era.printAndWait([
          'Но спустя какое-то время ',
          you.get_colored_name(),
          '  смотрит на то, что ',
          urara.get_colored_name(),
          '  с улыбкой протянула — тайяки, и всё же с теплотой решает как следует распробовать…',
        ]);
      }
      await era.printAndWait([
        '…Вот только для ',
        you.get_colored_name(),
        ' — языка, даже если это не первый раз, эти вещи всё равно слишком сладкие.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = 'Ушедшая весна';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     * @param {boolean} has_begun 乌拉拉是否已经出道
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      has_begun,
      join_arim_kin_c,
    ) => {
      await era.printAndWait(
        'Что значило это слишком внезапно оборвавшееся путешествие — теперь, быть может, уже нет смысла доискиваться.',
      );
      await era.printAndWait([
        'Потому что ',
        you.get_colored_name(),
        '  и ',
        urara.get_colored_name(),
        '  оба понимают: такого финала, где они расходятся, здесь, быть может, и не должно было быть.',
      ]);
      await era.printAndWait([
        'Сжав ручку чемодана, ',
        urara.get_colored_name(),
        '  издаёт лёгкий вздох, какому не место рядом с такой, как ',
        urara.sex,
        '.',
      ]);
      await era.printAndWait([
        'Хотя никто не винит ',
        urara.get_colored_name(),
        ', и даже говорят, что тренеру тоже было нелегко, но ',
        you.get_colored_name(),
        '  и ',
        urara.get_colored_name(),
        '  оба знают: история не должна была сложиться так.',
      ]);
      await era.printAndWait([
        'Хоть документы на перевод уже оформлены, это всё равно скрытый ото всех уход без прощания, и на это прощание только ',
        you.get_colored_name(),
        '  пришёл(а) один(а).',
      ]);
      await era.printAndWait([
        'Но даже так стоящая рядом маленькая ',
        urara.uma_sex_title,
        ' всё равно по-доброму сама утешает упавшего духом ',
        you.get_colored_name(),
        '.',
      ]);
      if (has_begun) {
        await urara.say_and_wait([
          'Ничего, даже если бегать больше не получится — Урара что-нибудь придумает! А вот ',
          callname,
          '  в порядке?',
        ]);
        await era.printAndWait([
          'Хотя говорит слова утешения другим, но ',
          urara.get_colored_name(),
          '  — на лице тоже не скрыть тоску.',
        ]);
        await era.printAndWait([
          'После падения на той скачке, хоть с телом всё в порядке, но ',
          urara.get_colored_name(),
          '  всё же слишком рано потеряла ',
          urara.uma_sex_title,
          ' — способность.',
        ]);
        await era.printAndWait([
          'Тогда не принявшие этого люди направили стрелы на того, при ком ',
          urara.sex,
          ' в самом конце осталась без защиты, — на ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Но чувства против одного человека со временем всё равно рассеются. Поэтому перед ',
          urara.get_colored_name(),
          '  — тревогой, ',
          you.get_colored_name(),
          '  лишь молча качает головой.',
        ]);
        await urara.say_and_wait([
          '…Если ',
          callname,
          '  правда так думает, то ',
          urara.get_colored_name(),
          '  тоже не стоит так переживать, и все тоже: я и так не смогла бы попасть на Arima Kinen…',
        ]);
        if (join_arim_kin_c) {
          await urara.say_and_wait(
            'Но если бы получилось сходить ещё раз — как было бы хорошо…',
          );
        } else {
          await urara.say_and_wait(
            'Впрочем, если бы получилось сходить хоть раз… хотя бы разок…',
          );
        }
      } else {
        await urara.say_and_wait([
          'Ничего, ',
          callname,
          ', не переживай, просто вернулась в регион, я ещё буду бегать!',
        ]);
        await era.printAndWait([
          'Но ',
          you.get_colored_name(),
          '  знает: как бы ни были светлы слова утешения, тоску на лице не скрыть, ',
          urara.get_colored_name(),
          '  тоже.',
        ]);
        await era.printAndWait([
          'Даже так, чтобы скрыть грусть и не дать ',
          you.get_colored_name(),
          '  слишком горевать, маленькая ',
          urara.uma_sex_title,
          ' всё равно заставляет себя говорить урывками.',
        ]);
        await urara.say_and_wait([
          'Многие говорят, что ',
          callname,
          '  просто хотел(а) обмануть Урару, но я знаю: ',
          callname,
          '  не виноват(а), это Урара слишком медленно бегала.',
        ]);
        await urara.say_and_wait(
          'Вот только если вот так вернуться — что мама скажет? Хотя она никогда не сердилась на Урару…',
        );
        await urara.say_and_wait(
          'Если бы перед уходом Урара хоть раз взяла первое место…',
        );
      }
      era.println();
      await era.printAndWait([
        'Увидев вдали уже подходящий к станции поезд, ',
        urara.get_colored_name(),
        '  сдерживая слёзы, притворно храбро разжала схватившую ',
        you.get_colored_name(),
        '  за край одежды маленькую руку.',
      ]);
      await era.printAndWait([
        'Потом маленькая ',
        urara.uma_sex_title,
        ' сдерживаемые до конца слёзы всё равно раньше времени хлынули сами.',
      ]);
      era.println();
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          'Лёгкий поцелуй с солёным вкусом слёз лёг на ',
          you.get_colored_name(),
          '  — губы, перед ',
          you.get_colored_name(),
          '  на цыпочках ',
          urara.get_colored_name(),
          '  уже вся в слезах.',
        ]);
        await urara.say_and_wait([
          'Прости, ',
          callname,
          ', мы ведь ещё увидимся, но… Урара всё равно захотела так…',
        ]);
        await urara.say_and_wait(
          'Как тяжело… но Урара же должна была нормально попрощаться…',
        );
      } else {
        await urara.say_and_wait([
          '…Урара всё-таки хочет с ',
          callname,
          '…увидеть то, что ещё впереди…',
        ]);
        await urara.say_and_wait([
          'Но так нельзя… Урара же уже уходит, не надо было это говорить, прости, ',
          callname,
          '……',
        ]);
        await urara.say_and_wait([
          'Поэтому спасибо, что пришёл проводить, пока, ',
          callname,
          '……',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Прервав своё прощание от нежелания расставаться, ',
        urara.get_colored_name(),
        '  подавив всхлип, не смея обернуться, побежала к поезду, который не станет ждать.',
      ]);
      await era.printAndWait([
        'Собравшаяся толпа разошлась вслед за ушедшим поездом, чужой поток людей сбросил груз чувств и ',
        you.get_colored_name(),
        '  же бросают с людским потоком и оставляют в одиночестве на пустой платформе.',
      ]);
      await era.printAndWait([
        'Шум стих, вокруг так тихо, будто весь мир уехал с этим поездом от ',
        you.get_colored_name(),
        '  прочь.',
      ]);
      await era.printAndWait([
        'Хотя сказано было 「прощай」, но даже без оснований сейчас маленькая ',
        urara.uma_sex_title,
        ' — уход, боюсь, равен 「прощай навсегда」.',
      ]);
      await era.printAndWait([
        'Как после возвращения смотреть в глаза всем на торговой улице? Как встретить ',
        urara.get_colored_name(),
        '  — друзей?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '  сначала так доверяла ',
        you.get_colored_name(),
        ', и даже к 「надёжному взрослому」, что согласился помочь, питала маленькую ',
        urara.teen_sex_title,
        ' привязанность.',
      ]);
      await era.printAndWait([
        'Но теперь, глядя, как ',
        urara.sex,
        ' — спина без улыбки скрылась в вагоне, ',
        you.get_colored_name(),
        '  же не может выговорить ни слова, чтобы удержать.',
      ]);
      await era.printAndWait([
        'Может, нынешний ',
        you.get_colored_name(),
        '  заставит ',
        urara.get_colored_name(),
        '  сильно разочароваться; может, нынешняя ',
        urara.get_colored_name(),
        '  уже не любит ',
        you.get_colored_name(),
        ' ; может, ',
        urara.sex,
        '……',
      ]);
      await era.printAndWait([
        'Но даже если 「может」 громоздятся горой, ни одно не удержит маленькую ',
        urara.uma_sex_title,
        ' — ничуть, и тем более не обратить вспять того, что ',
        urara.sex,
        ' ушла.',
      ]);
      await era.printAndWait([
        'Не желая смотреть на уходящий поезд, будто снова сбежав к исходной точке, ',
        you.get_colored_name(),
        '  с трудом закрывает глаза…',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait([
        'Но простите уж, тренер ',
        you.adult_sex_title,
        ' (Вы) — противный вы человек, — я не дам истории так закончиться.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'Я не собираюсь на вас сердиться, но и не принимаю нынешний конец Урары.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Если будет шанс увидеться снова — прошу вас, соберитесь для меня на все сто двадцать.',
      );
    };
    f.title = title;
    return f;
  })(),
};
