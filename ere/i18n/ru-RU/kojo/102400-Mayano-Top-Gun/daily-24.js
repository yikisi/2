/**
 * @file 摩耶重炮 - 日常
 * @author 黑奴二号
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

module.exports = {
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
   */
  good_morning(maya, callname, call_3) {
    const buffer = [];
    if (era.get('base:24:体力') === era.get('maxbase:24:体力')) {
      if (era.get('relation:24:0') > 75) {
        buffer.push(
          () => maya.say('Динь-дон-динь-дон—♪ Я пришла тебя будить~🌟'),
          () =>
            maya.say([
              'Доброе утро! Эх-хе-хе~ С самого утра так хотелось попасться ',
              callname,
              '  на глаза, вот я и примчалась!',
            ]),
        );
      } else {
        buffer.push(
          () => maya.say('Доброе утро—! Сегодня я тоже взлечу полная сил!'),
          () =>
            maya.say([
              callname,
              ', доброе утро! Ты часом не~ меня ищешь? Эх-хе-хе, я здесь~♪',
            ]),
        );
      }
    } else if (era.get('status:24:熬夜')) {
      if (era.get('relation:24:0') > 75) {
        buffer.push(() =>
          maya.say(
            'Фуаа… Сегодня рано встала, чтобы собрать бэнто… Эх-хе-хе, жди обед с нетерпением♪」',
          ),
        );
      } else {
        buffer.push(() =>
          maya.say([
            'Фуаа… Вчера с ',
            call_3,
            '  не спали допоздна~ Спать хочется ужасно, но такое чувство, будто я чуть-чуть как взрослая…',
          ]),
        );
      }
    } else if (era.get('relation:24:0') > 75) {
      buffer.push(
        () =>
          maya.say(
            'Эй-эй! Пойдём на тренировку? Я в любой момент готова идти с тобой🌟 К долгому счастливому будущему!',
          ),
        () =>
          maya.say([
            'Цель захвачена🌟 Сегодняшний запал заправлю ',
            callname,
            '  улыбкой~♪',
          ]),
      );
    } else {
      buffer.push(
        () =>
          maya.say([
            callname,
            '~! Какую тренировку сегодня делаем? Я в любой момент готова к экстренному взлёту!',
          ]),
        () =>
          maya.say([
            'Пойдём, ',
            callname,
            '! Сегодня тоже взлетаем на поиски чего-то волнующего и сверкающего!',
          ]),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async talk(maya, callname) {
    const buffer = [];
    switch (era.get('cflag:24:干劲')) {
      case -2:
        buffer.push(
          () =>
            maya.say_and_wait(
              'Странно…? Тело будто не слушается…? Что это со мной такое…?',
            ),
          () =>
            maya.say_and_wait('Нн~? Такое чувство, будто дух резко просел…?'),
        );
        break;
      case -1:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait(
                'Я постараюсь, так что потом мне награда, ладно? А то как-то не особо тянет…',
              ),
            () =>
              maya.say_and_wait(
                'Не волнуйся! У меня часто состояние внезапно выправляется! Так что чуть-чуть плохое состояние — это ерунда!',
              ),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait(
                'Нн… Такое чувство, что состояние не очень. Я сейчас разобьюсь~',
              ),
            () =>
              maya.say_and_wait(
                'Я сейчас не хочу стараться! Что бы кто ни говорил! Не хочу — значит не хочу—!',
              ),
          );
        }
        break;
      case 0:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                'С ',
                callname,
                '  тренироваться — сразу весело! Вот и появляется желание стараться!',
              ]),
            () =>
              maya.say_and_wait([
                'Нельзя, чтоб мне надоело, ясно? Хотя с ',
                callname,
                '  мне не надоест.',
              ]),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait(
                'Готова, OK!! Maya в любой момент может взлететь',
              ),
            () =>
              maya.say_and_wait(
                'Видимость отличная! Жду приказа! Указания наготове? Я в любой момент могу взлететь!',
              ),
          );
        }
        break;
      case 1:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                callname,
                '! Разве я сейчас не сверкаю? Эх-хе-хе♪',
              ]),
            () =>
              maya.say_and_wait(
                'Я буду стараться~! Если получится — не забудь меня похвалить🌟',
              ),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait(
                'Может, найдётся что-нибудь захватывающее, чем заняться~♪',
              ),
            () =>
              maya.say_and_wait(
                'М-м-м! Тело лёгкое и гибкое! Такое чувство, что я могу бежать очень далеко~!',
              ),
          );
        }
        break;
      case 2:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                'Лишь бы вместе с ',
                callname,
                ' , и что ни делай — будто всё будет интересно! У меня впервые такое чувство!',
              ]),
            () =>
              maya.say_and_wait([
                'Я обязательно стану сверкающей взрослой Скаковой ',
                maya.uma_sex_title,
                '! Так что смотри на меня с самого близкого места!',
              ]),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait(
                'Какую угодно тренировку — давай! Я её шух~ — и сразу доделаю!',
              ),
            () =>
              maya.say_and_wait(
                'Моё состояние всё летит вверх! Такое чувство, что выступление будет очень сверкающим!',
              ),
          );
        }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maya 摩耶重炮 */
  async s_a_tree_hollow(maya) {
    await maya.say_and_wait([
      'Я же взрослая ',
      maya.get_colored_name(),
      ', н-не буду плакать?',
    ]);
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async s_a_dating(maya, callname) {
    await maya.say_and_wait([
      'Пойдём на свидание! Я с ',
      callname,
      '  станем самой подходящей парой в академии!',
    ]);
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async s_r_lunch(maya, callname) {
    await maya.say_and_wait([
      'Maya сделала для ',
      callname,
      '  бэнто, давай есть вместе!',
    ]);
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   * @param {boolean|undefined} fish_success 钓鱼是否成功，当且仅当是钓鱼的时候才有值
   */
  async out_river(maya, you, callname, fish_success) {
    if (fish_success !== void 0) {
      await era.printAndWait([
        'Вместе с ',
        maya.get_colored_name(),
        '  отправились на речку рыбачить.',
      ]);
      await maya.say_and_wait([
        'С ',
        callname,
        '  на свидании-рыбалке… Такое чувство, будто это уже занятие для взрослых~ шух~',
      ]);
      if (fish_success) {
        await maya.say_and_wait('Maya поняла! Если вот так… а! Клюёт!');
        await era.printAndWait([
          maya.get_colored_name(),
          '  кажется, быстро ухватила суть.',
        ]);
      } else {
        await maya.say_and_wait(
          'Ааа… Как скучно… Почему так долго никто не клюёт?',
        );
        await era.printAndWait([
          'Из-за нехватки терпения ',
          maya.get_colored_name(),
          '  ничего не поймала.',
        ]);
      }
      return;
    }
    const buffer = [
      async () => {
        await maya.say_and_wait([
          callname,
          ', ты что берёшь~? Я — температуру ещё горячее, плюс мёд и взбитые сливки, кастомный спецзаказ…',
        ]);
        era.printButton('О чём ты?', 1);
        await era.input();
        await maya.say_and_wait(
          'Про напиток! Ну вот, если идти по этой дорожке, в руке обязательно должен быть стакан кофе!',
        );
        await maya.say_and_wait([
          'Когда пройдём эту дорожку, я отдам свой кофе ',
          callname,
          '♪',
        ]);
        await maya.say_and_wait([callname, '! Прими красивую позу!']);
        await maya.say_and_wait('Три, два, один!');
        await maya.say_and_wait('……');
      },
      async () => {
        await maya.say_and_wait(
          'Набережная как взлётная полоса… Если по ней бежать — будто сейчас взлетишь~',
        );
        await maya.say_and_wait([callname, ', догони меня🌟']);
        era.printButton('Смотри не упади', 1);
        await era.input();
        await maya.say_and_wait([
          'Ничего, я верю, ',
          callname,
          '  меня поймает!',
        ]);
        await era.printAndWait([
          'После этого ',
          you.get_colored_name(),
          '  продолжил(а) с ',
          maya.get_colored_name(),
          '  свидание…',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async out_shopping(maya, you, callname) {
    const ret = [];
    era.print('Куда вместе пойдём на торговой улице?');
    era.printButton('Пойти в караоке', 1);
    era.printButton('Пойти в игровые автоматы', 2);
    era.printButton('Пойти за покупками', 3);
    ret.push(await era.input());
    switch (ret[0]) {
      case 1:
        await era.printAndWait([
          'Вместе с ',
          maya.get_colored_name(),
          '  сходили в караоке…',
        ]);
        await maya.say_and_wait([
          'Сегодня я обязательно очарую своим пением ',
          callname,
          '!',
        ]);
        await maya.say_and_wait('Ну как, чувствуешь обаяние Maya?');
        era.printButton('「Такая милая!」', 1);
        era.printButton('「Такая сексуальная!」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait([
            'Нн…! Неужели ',
            callname,
            '  считает, что такая песня для меня ещё рано!?',
          ]);
          era.printButton('「Я вовсе не это имел(а) в виду.」', 1);
          await era.input();
          await maya.say_and_wait(
            'М-м… То есть моё обаяние — это не только сексуальность!',
          );
          await era.printAndWait([
            'Хотя вроде вышло небольшое недопонимание, но у ',
            maya.get_colored_name(),
            '  настроение стало очень хорошим.',
          ]);
        } else {
          await maya.say_and_wait([
            'Еее～♪ Maya так и знала, что ',
            callname,
            ' так и скажет!',
          ]);
          await maya.say_and_wait([
            callname,
            ' ты и правда супер любишь Maya～♪',
          ]);
        }
        await era.printAndWait([
          'Вместе с ',
          maya.get_colored_name(),
          ' ты славно провёл(а) время.',
        ]);
        break;
      case 2:
        await era.printAndWait([
          'Вместе с ',
          maya.get_colored_name(),
          ' ты сходил(а) в зал автоматов…',
        ]);
        await maya.say_and_wait(['Вау～～～! ', callname, ', смотри-смотри!']);
        await maya.say_and_wait('Смотри, вон та игрушка—');
        await era.printAndWait([
          you.get_colored_name(),
          ' туда, куда ',
          maya.get_colored_name(),
          ' указала. Там стоит автомат с плюшами на тему Скаковая ',
          maya.uma_sex_title,
          '.',
        ]);
        await maya.say_and_wait(
          'Это же коняшки-плюшки, да!? Супер милые～ Maya так хочет～!',
        );
        await maya.say_and_wait('Но карманные у Maya почти кончились…');
        await era.printAndWait([
          'Только что с блестящими глазами ',
          maya.get_colored_name(),
          ' вдруг поникла.',
        ]);
        era.printButton('「Давай я тебе выловлю?」', 1);
        await era.input();
        await maya.say_and_wait('Правда!? Тогда Maya будет рядом болеть!!');
        await maya.say_and_wait(['Давай-давай, жми-жми! ', callname, '♪']);
        ret.push(get_random_value(0, 2));
        switch (ret[1]) {
          case 0:
            await maya.say_and_wait('Уу, как жалко～ ещё чуть-чуть…!');
            era.printButton('「Прости…」', 1);
            await era.input();
            await maya.say_and_wait([
              'Вау, не бери в голову, ',
              callname,
              '!!',
            ]);
            await maya.say_and_wait(
              'ты так старался(ась) ради Maya — и Maya уже счастлива!',
            );
            await era.printAndWait([
              'Хоть ты ничего и не выловил(а), ',
              maya.get_colored_name(),
              ' всё равно светится.',
            ]);
            break;
          case 1:
            await maya.say_and_wait(['Супер! ', callname, ', спасибо тебе!']);
            await maya.say_and_wait([
              'Когда Maya увидела, как ',
              callname,
              ' так серьёзно ловит игрушку, сердце ёкнуло…♪',
            ]);
            await maya.say_and_wait([
              'Хе-хе, куда бы поставить～? Это же воспоминание Maya и ',
              callname,
              ' , так тяжело выбрать!',
            ]);
            await era.printAndWait([
              maya.get_colored_name(),
              ' кажется, довольна.',
            ]);
            break;
          case 2:
            await maya.say_and_wait(
              'Вау～ какие милашки～! И столько штук! Как круто!!',
            );
            await maya.say_and_wait([
              'Хе-хе, и всё благодаря ',
              callname,
              ' — ты так старался(ась) помочь Maya.',
            ]);
            await maya.say_and_wait('Maya сейчас так… счастлива!!');
            await maya.say_and_wait([
              'Maya будет тискать эти плюшки как ',
              callname,
              ', каждый день — крепко-крепко!',
            ]);
            await era.printAndWait([
              maya.get_colored_name(),
              ' кажется, просто в восторге.',
            ]);
        }
        break;
      case 3:
        await era.printAndWait([
          'Вместе с ',
          maya.get_colored_name(),
          ' ты сходил(а) по магазинам…',
        ]);
        if (Math.random() < 0.5) {
          await maya.say_and_wait(
            'Ой～ какая милашка～♪ Это не слишком взросло? Но если чуть с контрастом — может, ещё милее?',
          );
          await maya.say_and_wait([
            'В такие моменты… ',
            callname,
            '! помай себе голову вместе с Maya～!',
          ]);
          await maya.say_and_wait(
            'Сейчас скидки♪ Maya накупит кучу милых вещей～♪',
          );
          await maya.say_and_wait(
            'А потом-потом — и застряла～! Карманные в этом месяце поджимают!',
          );
          await maya.say_and_wait(
            'У этой в акцентах самые свежие аксессуары — прямо техничный лук!',
          );
          await maya.say_and_wait(
            'А эта милая, но с манёвренностью — старшая из магазина сказала, практичность просто зверь!',
          );
          await maya.say_and_wait([
            'Нэ, ',
            callname,
            '! Как думаешь, какая больше идёт Maya～?',
          ]);
          era.printButton('「Лук с самой свежей техникой!」', 1);
          era.printButton('「Практичный лук с манёвренностью!」', 2);
          if ((await era.input()) === 1) {
            await maya.say_and_wait(
              'Точно～! Maya тоже так думает! Надо быть на самом острие моды♪',
            );
            await maya.say_and_wait('Девушка～ извините～!');
            await maya.say_and_wait([
              'Кажется, Maya ближе к тому, чтобы стать взрослой ',
              maya.phy_sex_title,
              ' — ещё на шаг…!',
            ]);
          } else {
            await maya.say_and_wait(
              'Поняла～! С высокой манёвренностью меньше устаёшь, и гулять можно на полную♪',
            );
            await maya.say_and_wait('Решено, берём эту! Так— идём покупать♪');
            await maya.say_and_wait([
              'Ну всё, ',
              callname,
              ', Take off! Сегодняшнее свидание ещё не закончилось, ок?',
            ]);
          }
        } else {
          await maya.say_and_wait(
            'Ой～ тут сладости продают! У Maya столько снеков хочется попробовать!',
          );
          era.printButton('「Следи за весом, можно только одно.」', 1);
          await era.input();
          await maya.say_and_wait('Мм… ладно… так какое же выбрать～!?');
          await maya.say_and_wait(
            'Сезонное ограниченное! Новый вкус『Морковные чипсы: Аддиктивный драйв』～?',
          );
          await maya.say_and_wait(
            'Или must-buy, который Maya лично советует,『Супер-сладкие-сладкие шоколадки』?',
          );
          await maya.say_and_wait([
            'Нн～ не могу выбрать～ ',
            callname,
            ', выбери за Maya!',
          ]);
          era.printButton('「Новый вкус — челлендж!」', 1);
          era.printButton('「Must-buy — самый топ!」', 2);
          if ((await era.input()) === 1) {
            await maya.say_and_wait(
              'Да-да! Без драйва никак♪ Maya хоть и боится острого, но челлендж так челлендж!',
            );
            await era.printAndWait([
              'В итоге ',
              maya.get_colored_name(),
              ' покраснела от острого до ушей, но всё равно доела снек до конца.',
            ]);
          } else {
            await maya.say_and_wait(
              'Так вот～ когда выбираешь сладости, надёжность и правда важна.',
            );
            await maya.say_and_wait(
              'Всё-таки если попадётся невкусное — сплошное разочарование! Так— тогда Maya берёт вот это!',
            );
            await maya.say_and_wait(['Давай разделим! ', callname, ', а————']);
            await era.printAndWait([
              'Под стать названию, ',
              maya.get_colored_name(),
              ' выбрала шоколад — и он очень сладкий.',
            ]);
          }
        }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   * @param {0|1|2} result 抽签结果，数字越大好感奖励越多
   * @param {boolean} rm_debuff 是否去除训练 debuff
   */
  async out_church(maya, callname, result, rm_debuff) {
    await maya.say_and_wait([
      'Говорят, здешние жребии на любовь знамениты♪ ',
      callname,
      ', давай тоже вытянем! —',
    ]);
    await maya.say_and_wait(
      'Хотя даже без богов и гаданий мы — пара мечты🌟…но сердце всё равно ёкает!',
    );
    await era.printAndWait([
      'Чтобы исполнить желание ',
      maya.get_colored_name(),
      ' , решили вытянуть「жребий любви」.',
    ]);
    await maya.say_and_wait('Ну что, вытянул? Дай глянуть, дай глянуть!');
    switch (result) {
      case 0:
        await maya.say_and_wait('В будущем…будет прогресс?');
        await maya.say_and_wait('Э…старания Maya вообще не дошли?');
        break;
      case 1:
        await maya.say_and_wait('Чув…чувства вроде ничего…?!');
        await maya.say_and_wait('Вроде…вроде…вроде как…это насколько…?');
        break;
      case 2:
        await maya.say_and_wait(
          '…Вау!!『Горячая любовь — прямой курс』!! Это просто супер~♪',
        );
        await maya.say_and_wait('Хе-хе-хе~~ даже боги нас признали~~~');
    }
    if (rm_debuff) {
      era.println();
      await era.printAndWait([
        maya.get_colored_name(),
        ' тренировки, кажется, пошли ещё глаже…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async out_station(maya, you, callname) {
    const buffer = [];
    era.print('Чем заняться вместе на вокзале?');
    era.printButton('Поесть', 1);
    era.printButton('Свидание', 2);
    era.printButton('Кино', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await maya.say_and_wait([
          ', свидание, свидание🌟 ',
          callname,
          ', куда мы идём🎵',
        ]);
        buffer.push(
          async () => {
            await maya.say_and_wait('Ауаааа…');
            await maya.say_and_wait(
              'Maya…Maya уже зрелая взрослая, она точно всё доест!',
            );
            await era.printAndWait([
              'Вместе с ',
              maya.get_colored_name(),
              ' отведали китайскую кухню, и хотя ',
              maya.sex,
              ' не выносит острого, всё равно бросила вызов легендарному мапо-тофу…',
            ]);
          },
          async () => {
            await maya.say_and_wait([callname, ', ну покорми Maya! Ах…']);
            await era.printAndWait([
              'Вместе с ',
              maya.get_colored_name(),
              ' сходили в семейный ресторан; даже простые блюда оба умяли с удовольствием.',
            ]);
          },
          async () => {
            await maya.say_and_wait(
              'Не…неужели это легендарный ужин при свечах!',
            );
            await maya.say_and_wait(
              'Maya сегодня наконец ступит на лестницу взрослых?',
            );
            await era.printAndWait([
              'Вместе с ',
              maya.get_colored_name(),
              ' сходили в европейский ресторан; изящная атмосфера — и ',
              maya.sex,
              ', её сердце понеслось вскачь.',
            ]);
          },
        );
        await get_random_entry(buffer)();
        break;
      case 2:
        if (Math.random() < 0.5) {
          await era.printAndWait([
            'С ',
            maya.get_colored_name(),
            ' договорились встретиться на вокзале.',
          ]);
          await maya.say_and_wait([
            callname,
            ' вот и ты~! Тогда пойдём на свидание♪',
          ]);
          await maya.say_and_wait(
            'Слушай, вот так вот назначить встречу — разве не тянет на…парочку?',
          );
          await maya.say_and_wait(
            'Шучу! Сердце колотится? Уже смотришь на Maya другими глазами, да?',
          );
          await maya.say_and_wait(
            'Операция сразить сердце взрослым шармом』 прошла на ура🌟',
          );
          await era.printAndWait([
            'Хотя не очень хочется признавать, но ',
            you.get_colored_name(),
            ' , возможно, и правда уже под чарами ',
            maya.get_colored_name(),
            ' — кто знает.',
          ]);
        } else {
          await era.printAndWait([
            'С ',
            maya.get_colored_name(),
            ' прошлись по улице у вокзала.',
          ]);
          await maya.say_and_wait('Вау…на улице сегодня столько народу…');
          await maya.say_and_wait([
            callname,
            ', чтобы не потеряться, давай возьмёмся за руки!',
          ]);
          await maya.say_and_wait(
            'Хе-хе…идти вот так за ручку — прямо как парочка, да♪',
          );
          await era.printAndWait([
            'Хотя со стороны, может, больше похоже на взрослого с ребёнком…но как ни крути, ',
            maya.get_colored_name(),
            ' была рада — и ладно.',
          ]);
        }
        break;
      case 3:
        await era.printAndWait([
          'Вместе с ',
          maya.get_colored_name(),
          ' сходили на новый фильм.',
        ]);
        if (Math.random() < 0.5) {
          await maya.say_and_wait([callname, ' ', callname, '!ты это видел?!']);
          await maya.say_and_wait(
            'Это же самолёт! Да ещё и папа Maya за штурвалом!',
          );
          await maya.say_and_wait(
            'И когда-нибудь Maya тоже взмоет в синее небо🌟',
          );
          await maya.say_and_wait([
            'Так что ',
            callname,
            ' , только не отставай, ясно?',
          ]);
          await era.printAndWait([
            'То ли случай, то ли нет, но будто специально попался боевик с отцом ',
            maya.get_colored_name(),
            ' , и ',
            maya.get_colored_name(),
            ' светилась от счастья.',
          ]);
        } else {
          await maya.say_and_wait(
            'Преступник и правда тот самый! Maya с самого начала так и знала!',
          );
          await maya.say_and_wait([
            ', ну как, Maya умница, да♪ ',
            callname,
            ' Ещё похвали, можно?',
          ]);
          await era.printAndWait([
            'Хотя ',
            maya.get_colored_name(),
            ' угадала финал, но, кажется, всё равно здорово провела время?',
          ]);
        }
    }
    return ret;
  },
};
