/**
 * @file 曼城茶座 - 日常
 * @author Necroz
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {number} b_escape 从地下室逃脱的方式，为 0 是通常情况
   */
  good_morning(coffee, callname, b_escape) {
    if (b_escape > 0) {
      coffee.say([callname, '…как спалось?']);
      coffee.say('…Ты сам(а) сбежал(а), я ничего тебе за это не сделаю…');
    } else {
      const buffer = [];
      if (era.get('base:25:体力') < era.get('maxbase:25:体力') * 0.45) {
        buffer.push(
          () => coffee.say('Кажется… я уже не вытягиваю…'),
          () => coffee.say('Дай мне немного времени… выпью кофе.'),
          () => coffee.say('Ноги тяжёлые… будто корни вросли…'),
        );
      } else {
        buffer.push(
          () => coffee.say('Чтобы… догнать того ребёнка.'),
          () =>
            coffee.say('Чтобы схватить звезду, я, может, и в небо взлечу…!'),
          () => coffee.say('Тень, за которой бегу… я уже вижу её ясно.'),
          () => coffee.say('…Начнём. Друг тоже так сказал…'),
          () => coffee.say('У дракона крылья, у меня — кофе… хе-хе.'),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {boolean} c_awake 茶座是否醒着
   * @param {number} b_escape 从地下室逃脱的方式，为 0 是通常情况
   */
  select(coffee, callname, c_awake, b_escape) {
    if (!c_awake) {
      era.print([
        '…',
        coffee.get_colored_name(),
        ' спит крепко, ресницы вздрагивают — что ей снится?',
      ]);
    } else if (b_escape > 0) {
      coffee.say([callname, '…как спалось?']);
      coffee.say('…Ты сам(а) сбежал(а), я ничего тебе за это не сделаю…');
    } else {
      const buffer = [
        () => coffee.say([callname, ', я здесь.']),
        () => coffee.say('…Мм, как всегда.'),
        () => coffee.say(['Сегодня тоже… побеспокою ', callname, '.']),
      ];
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async office_study(coffee, callname) {
    await coffee.say_and_wait([
      'Так вот оно… ',
      callname,
      ', ты сильнее, чем кажешься…',
    ]);
    await era.printAndWait('Это комплимент, что ли…');
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async office_prepare(coffee, callname) {
    if (era.get('love:25') >= 75) {
      if (Math.random() > 0.5) {
        await coffee.say_and_wait([
          'Чтобы догнать друга, и ',
          callname,
          '… я выложусь до конца…!',
        ]);
      } else {
        await coffee.say_and_wait([
          'То, кем я стала, — всё благодаря ',
          callname,
          ' тебе, так что и я…',
        ]);
      }
    } else {
      await coffee.say_and_wait('Чтобы догнать друга… я выложусь до конца…!');
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {boolean} c_awake 茶座是否醒着
   */
  async talk(coffee, callname, c_awake) {
    if (!c_awake) {
      await era.printAndWait([
        '…Смотришь на спящую ',
        coffee.get_colored_name(),
        ': лицо как у куклы, белое, тонкое, совсем расслабилось, дышит тонко носом.',
      ]);
    } else {
      const buffer = [];
      switch (era.get('cflag:25:干劲')) {
        case -2:
          buffer.push(
            () =>
              coffee.say_and_wait([
                callname,
                ', 『они』 здесь…! Не отходи от меня…!',
              ]),
            () =>
              coffee.say_and_wait(
                'Состояние плохое… кажется, тень… проглотит.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              coffee.say_and_wait([
                callname,
                '…Прости, сейчас неважно… если бы была чашка кофе…',
              ]),
            () =>
              coffee.say_and_wait(
                'Может… всё, что мы прошли, — только сон, мираж…',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              coffee.say_and_wait(
                'Время назад не вернуть… единственное, что могу — сделать всё, на что способна.',
              ),
            () =>
              coffee.say_and_wait(
                '…К тебе они липнут слишком легко… Если случится что-то странное — сразу скажи мне.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              coffee.say_and_wait(
                'С детства друг рядом… Я всё гонюсь за его спиной, и когда-нибудь обязательно…',
              ),
            () => coffee.say_and_wait('Где сейчас друг…? Хе-хе, глянь назад.'),
            () =>
              coffee.say_and_wait(
                'Только что твоя тень сама пошла… хе-хе, шутка.',
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              coffee.say_and_wait(
                'Кит с семицветными крыльями летит в лазуритовое небо… хе-хе, мир во сне забавный.',
              ),
            () =>
              coffee.say_and_wait([
                callname,
                ', сейчас… мм, ты в порядке, с ними, похоже, не столкнёшься.',
              ]),
            () =>
              coffee.say_and_wait(
                'Это особое кофе на сегодня… яркое, как сардоникс… Если можно — попробуем вместе?',
              ),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async office_gift(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        'Это… мне? Спасибо за подарок, ',
        callname,
        '.',
      ]);
    } else {
      await coffee.say_and_wait('Мне, подарок…? А, друг! Не открывай сам!');
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async office_cook(coffee, you, callname) {
    await coffee.say_and_wait([
      'Сегодня сделаем тушёную говядину, как смотришь, ',
      callname,
      '…?',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' на удивление хорошо готовит, ',
      you.get_colored_name(),
      ' почти некуда влезть.',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async office_rest(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        callname,
        ', знаешь язык цветов кофейного дерева? 『Отдохнём вместе』. Говорят, от того, что кофе пьют на отдыхе…',
      ]);
    } else {
      await coffee.say_and_wait([
        callname,
        ', ты слышал(а) чужое сердце? Говорят, этот стук усыпляет… Тогда, ',
        callname,
        ', сейчас позволь мне приложить ухо к груди…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async office_game(coffee, callname) {
    await coffee.say_and_wait([callname, ', я не проиграю…!']);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' вдруг загорелась азартом.',
    ]);
  },
  /** @param {CharaTalk} coffee 曼城茶座 */
  async s_a_tree_hollow(coffee) {
    await coffee.say_and_wait('Друг, я тебя обязательно обойду…!');
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async s_a_dating(coffee, you, callname) {
    if (era.get('love:25') >= 75) {
      await coffee.say_and_wait([callname, ', куда дальше…']);
      await era.printAndWait([
        'Не глядя на чужих ',
        coffee.uma_sex_title,
        ' и тренеров, ',
        coffee.get_colored_name(),
        ' крепко обнимает руку ',
        you.get_colored_name(),
        ' и шепчет на ухо.',
      ]);
    } else {
      await coffee.say_and_wait([callname, ', в Трейсене всё же…']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' растерянно оглядывается: такое свидание в академии ',
        coffee.sex,
        ' не тянет…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async s_r_lunch(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, ', обед — сэндвич и кофе, прошу…']);
      await era.printAndWait([
        'Под взглядом ',
        coffee.get_colored_name(),
        ' обед и правда вкусный.',
      ]);
    } else {
      await coffee.say_and_wait([callname, ' яблочный пирог — очень вкусный…']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' ест пирог и по глотку пьёт кофе — сочетание в точку для ',
        coffee.get_colored_name(),
        '…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async o_r_fishing(coffee, you, callname) {
    await era.printAndWait([
      'С ',
      coffee.get_colored_name(),
      ' на реке, рыбалка…',
    ]);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, ', хорошо ловишь…']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' любит такое тихое время: удочки в руках нет, а всё равно сидит рядом и рада.',
      ]);
      await era.printAndWait([
        '…Только кажется, ',
        coffee.sex,
        ' то и дело смотрит сюда.',
      ]);
    } else {
      await coffee.say_and_wait([callname, ', в этой реке полно 『их』…']);
      await era.printAndWait('А? Шутка, да?');
      await era.printAndWait([
        'Но поплавок в волнах стоит как в мёртвой воде, и ',
        you.get_colored_name(),
        ' всё же придвигается к ',
        coffee.get_colored_name(),
        '…',
      ]);
    }
  },
  /** @param {CharaTalk} coffee 曼城茶座 */
  async o_r_walking(coffee) {
    await era.printAndWait([
      'С ',
      coffee.get_colored_name(),
      ' гуляете по насыпи…',
    ]);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait('…нээ, кидзуйтэ… This is my love song♪…');
      await era.printAndWait([
        'Слышишь тихое напевание рядом: ',
        coffee.get_colored_name(),
        ' явно довольна.',
      ]);
    } else {
      await era.printAndWait(
        'Вдруг руку хватает что-то ледяное. Оборачиваешься — никого.',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' не реагирует, значит друг. Уже почти привык(ла)…',
      ]);
      await era.printAndWait(
        'Пока думаешь так, хватают и вторую — только уже тепло.',
      );
      await era.printAndWait([
        'Чуть поворачиваешь голову: белая рука ',
        coffee.get_colored_name(),
        ', ',
        coffee.sex,
        ' голову опустила, лица не видно.',
      ]);
      await era.printAndWait('…Идём так дальше.');
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async o_s_arcade(coffee, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        'С ',
        coffee.get_colored_name(),
        ' садитесь за автомат с игрушками…',
      ]);
      await era.printAndWait([
        'Вдвоём целитесь в куклу ',
        coffee.get_colored_name(),
        ' снова и снова — промах. Уже бросить, как кукла сама дёргается и прыгает в лоток.',
      ]);
      await coffee.say_and_wait(['Друг… не вернуть ли, ', callname, '?']);
      await era.printAndWait(
        'Чтобы не путать персонал, игрушку всё же забираете.',
      );
    } else {
      await era.printAndWait([
        'С ',
        coffee.get_colored_name(),
        ' играете на автомате…',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' в такие игры слабовата: на экране персонаж ',
        coffee.sex,
        ' не может ответить. Когда ',
        you.get_colored_name(),
        ' уже жмёт последний удар — нет, нет реакции?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' персонаж вдруг замирает по центру, и опомнившаяся ',
        coffee.get_colored_name(),
        ' забивает его в пару ударов.',
      ]);
      await era.printAndWait('…Опять друг?');
      await era.printAndWait([
        'Смотришь на ',
        coffee.get_colored_name(),
        ', ',
        coffee.sex,
        ' будто ничего не заметила и улыбается своей победе.',
      ]);
      await era.printAndWait([coffee.get_colored_name(), ' рада — и ладно?']);
    }
  },
  /** @param {CharaTalk} coffee 曼城茶座 */
  async o_s_drawing(coffee) {
    await coffee.say_and_wait('Лотерея… что выпадет? А, друг, не мешай!');
  },
  /** @param {CharaTalk} coffee 曼城茶座 */
  async o_s_ktv(coffee) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait('Петь? Я не очень…');
      await era.printAndWait([
        'Сначала не хотела, но с подначкой ',
        coffee.get_colored_name(),
        ' всё же запела в голос.',
      ]);
    } else {
      await era.printAndWait([
        'Перед ',
        coffee.get_colored_name(),
        ' поёт, а ',
        coffee.get_colored_name(),
        ' улыбается и отбивает такт.',
      ]);
    }
  },
  /** @param {CharaTalk} coffee 曼城茶座 */
  async o_s_movie(coffee) {
    await coffee.say_and_wait('Фильм? Как насчёт «Пять ночей в Трейсене»?');
    await era.printAndWait([
      'С ',
      coffee.get_colored_name(),
      ' смотрите ужастик, но рядом с ',
      coffee.get_colored_name(),
      ' такого кино почему-то не боишься…',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(coffee, you, callname, dice) {
    await era.printAndWait([
      'Выходя с ',
      coffee.get_colored_name(),
      ', проходите мимо святилища.',
    ]);
    await coffee.say_and_wait(['Мм… ', callname, ', можно зайти?']);
    await era.printAndWait([
      you.get_colored_name(),
      ' соглашаешься на просьбу ',
      coffee.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('В святилище народу мало.');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' внутри как будто что-то ищет, в итоге останавливается у ящика с жребиями и зовёт ',
      you.get_colored_name(),
      '.',
    ]);
    await coffee.say_and_wait([
      callname,
      '…После жребия может случиться что-то странное. Пожалуйста, не пугайся.',
    ]);
    await era.printAndWait([
      'Ты, уже всего насмотревшись, ',
      you.get_colored_name(),
      ' кивает и смотрит, как ',
      coffee.get_colored_name(),
      ' тянет жребий. Выпало——',
    ]);
    if (dice < 0.5) {
      await era.printAndWait('Дайкити. Великая удача.');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          coffee.get_colored_name(),
          ' будто выдыхает, но не успевает ',
          you.get_colored_name(),
          ' подойти с поздравлением — перед глазами странная картина.',
        ]);
        await era.printAndWait([
          'Герои — ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          ', на вид старше нынешних на несколько лет, комната незнакомая.',
        ]);
        await era.printAndWait('Но это не главное.');
        await era.printAndWait([
          'Потому что ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          ' голые и яростно трахаются в этой комнате.',
        ]);
        if (you.sex_code > 0 && coffee.sex_code !== 1) {
          await era.printAndWait([
            'Слабое солнце из окна на двоих, пот на коже золотится. Святости в этом нет: ',
            coffee.get_colored_name(),
            ' сзади яростно долбит киску ',
            you.get_colored_name(),
            ', темп как сваи, и у ',
            you.get_colored_name(),
            ', кто это смотрит против воли, сердце ухает.',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            ' лицом совсем не та, что всегда: в углах глаз слёзы, пот и странные потёки… ладно, сперма, всё смешалось; язык бессильно вывалился и качается в такт телу.',
          ]);
        }
        await era.printAndWait([
          'Так ',
          you.get_colored_name(),
          ' смотрит немое порно себя с ',
          coffee.get_colored_name(),
          ': несколько поз, в конце — лицо ',
          coffee.get_colored_name(),
          ' в остаточном оргазме…',
        ]);
        await era.printAndWait([
          'В святилище ',
          you.get_colored_name(),
          ' и красный ',
          coffee.get_colored_name(),
          ' встречаются глазами, оба отводят взгляд. Тишина.',
        ]);
        await era.printAndWait([
          'С ',
          coffee.get_colored_name(),
          ' отношения от этой странности стали ближе…',
        ]);
      } else {
        await era.printAndWait([
          coffee.get_colored_name(),
          ' будто выдыхает, но не успевает ',
          you.get_colored_name(),
          ' подойти с поздравлением — перед глазами странная картина.',
        ]);
        await era.printAndWait([
          'Герои — ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          ', возраст почти как сейчас, на вас форма тренера и форма Трейсена, место — знакомая комната тренера.',
        ]);
        await era.printAndWait('Но это не главное.');
        await era.printAndWait([
          'Перед глазами ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          ' сидят вплотную на диване комнаты тренера, ',
          you.get_colored_name(),
          ' сзади обнимает ',
          coffee.get_colored_name(),
          ', лицо зарыто в шею ',
          coffee.get_colored_name(),
          ', жадно дышит запахом ',
          coffee.get_colored_name(),
          ', а руки своевольно по груди и между ног ',
          coffee.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' мокрая лицом, форма в беспорядке, на красных щеках — похоть и ожидание.',
        ]);
        await era.printAndWait('Это же сейчас что-то случится!');
        await era.printAndWait([
          'Как раз когда с ',
          coffee.get_colored_name(),
          ' собираются стащить остатки одежды — картина гаснет.',
        ]);
        await era.printAndWait([
          'В святилище ',
          you.get_colored_name(),
          ' и красный ',
          coffee.get_colored_name(),
          ' встречаются глазами. Тишина.',
        ]);
        await era.printAndWait([
          'С ',
          coffee.get_colored_name(),
          ' отношения от этой странности стали ближе…',
        ]);
      }
    } else {
      await era.printAndWait('…Дайкё. Великая беда.');
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          coffee.get_colored_name(),
          ' выглядит потерянной, но не успевает ',
          you.get_colored_name(),
          ' подойти утешить — перед глазами странная картина.',
        ]);
        await era.printAndWait([
          'Герои — ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          ', возраст почти как сейчас, форма тренера и форма Трейсена, место — знакомая комната тренера.',
        ]);
        await era.printAndWait('Но это не главное.');
        await era.printAndWait([
          'Перед глазами ',
          you.get_colored_name(),
          ' будто ссорится с ',
          coffee.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' лицо холодное, а у ',
          coffee.get_colored_name(),
          ' щёки в слезах. На столе рядом какая-то фотография——',
        ]);
        await era.printAndWait([
          'Не успевает ',
          you.get_colored_name(),
          ' разглядеть снимок — картина резко гаснет.',
        ]);
        await era.printAndWait([
          'В святилище ',
          you.get_colored_name(),
          ' едва приходит в себя и видит: ',
          coffee.get_colored_name(),
          ' без лица рвёт жребий в клочья, откуда-то достаёт зажигалку и сжигает обрывки дотла. Вроде слышен слабый вой — то ли нет.',
        ]);
        await era.printAndWait([
          'По дороге назад ',
          you.get_colored_name(),
          ' несколько раз осторожно спрашивает ',
          coffee.get_colored_name(),
          ', что это было, но ',
          coffee.get_colored_name(),
          ' всё спускает на тормозах.',
        ]);
        await era.printAndWait([
          'Так что же это было — ',
          you.get_colored_name(),
          ' так и не понимает.',
        ]);
      } else {
        await era.printAndWait([
          coffee.get_colored_name(),
          ' выглядит потерянной, ',
          you.get_colored_name(),
          ' подходит утешить: пусть успокоится ',
          coffee.sex,
          '.',
        ]);
        await era.printAndWait([
          'По дороге в Трейсен ',
          coffee.get_colored_name(),
          ' молчит, ',
          you.get_colored_name(),
          ' тоже не лезет — ',
          coffee.sex,
          ' в тишине.',
        ]);
        await era.printAndWait('Секрет святилища — в другой раз.');
      }
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async o_s_restaurant(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, ', съесть что-нибудь?']);
      await era.printAndWait([
        'С ',
        coffee.get_colored_name(),
        ' в кафе — кофе и лёгкая еда.',
      ]);
    } else {
      await coffee.say_and_wait('Фух… всё-таки кофе — лучшее…');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' держит чашку и пьёт по глотку.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async o_s_dating(coffee, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        'С ',
        coffee.get_colored_name(),
        ' идёте по улице за руки.',
      ]);
      await era.printAndWait([
        'Будто проверяя, настоящая ли ',
        you.get_colored_name(),
        ', ',
        coffee.get_colored_name(),
        ' то и дело легко сжимает руку ',
        you.get_colored_name(),
        ', ',
        coffee.sex,
        ' тонкие пальцы сверху вниз скользят по кончикам пальцев ',
        you.get_colored_name(),
        ' — лёгкий зуд.',
      ]);
      await era.printAndWait([
        'В ответ ',
        you.get_colored_name(),
        ' тоже сжимает ладонь — ',
        coffee.sex,
        ' не отнимает руку.',
      ]);
    } else {
      await era.printAndWait([
        'Вдруг мягкость. Смотришь: ',
        coffee.get_colored_name(),
        ' прижалась к руке ',
        you.get_colored_name(),
        ', небольшая грудь вплотную к ',
        you.get_colored_name(),
        ' руке.',
      ]);
      await era.printAndWait([
        'Так у ',
        coffee.get_colored_name(),
        ' тоже чуть есть грудь, ',
        you.get_colored_name(),
        ' невольно думает.',
      ]);
      await coffee.say_and_wait([
        callname,
        ', ты сейчас думаешь что-то неприличное…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async o_s_shopping(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        callname,
        ', купить что-нибудь? Например… зёрна?',
      ]);
    } else {
      await coffee.say_and_wait('Растворимый… мм, как-то…');
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {boolean} y_awake 玩家是否醒着
   * @param {boolean} c_awake 曼城茶座是否醒着
   */
  good_night_normal(coffee, you, callname, y_awake, c_awake) {
    if (y_awake && c_awake) {
      era.print([
        'День кончился, ',
        you.get_colored_name(),
        ' провожает ',
        coffee.get_colored_name(),
        ' до двери общежития Михо.',
      ]);
      coffee.say(['Спасибо, ', callname, '… и я, и друг.']);
    } else if (y_awake) {
      era.print([
        'Вдруг за подол кто-то дёргает. Смотришь назад: ',
        coffee.get_colored_name(),
        ' уснула на скамейке неподалёку. Тревожить не хочется — пусть отдыхает ',
        coffee.sex,
        ', ',
        you.get_colored_name(),
        ' накрывает её курткой — так и спит ',
        coffee.sex,
        '. Поднимаешь на руки, принцессой, — и не просыпается ',
        coffee.sex,
        ', когда несёшь в студенческое общежитие.',
      ]);
    } else {
      coffee.say([
        callname,
        '?… А, уснул(а). Слишком вымотал(а) себя… Спокойной ночи, ',
        callname,
        ', пусть сон будет без бака.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {number} check 求爱检定值，如果是大成功则默认同意
   */
  async good_night_sex(coffee, you, callname, check) {
    era.print([
      'Дела на сегодня кончены, ',
      you.get_colored_name(),
      ' как всегда собирается проводить ',
      coffee.get_colored_name(),
      ' домой, в общежитие, где живёт ',
      coffee.sex,
      '. Только ',
      you.get_colored_name(),
      ' трогается — рукав ловит ',
      coffee.get_colored_name(),
      '.',
    ]);
    era.print([
      'Оборачиваешься — и встречаешь мокрый взгляд ',
      coffee.get_colored_name(),
      '.',
    ]);
    coffee.say([callname, ', я уже оформила ночёвку, так что…']);
    era.print([
      coffee.sex,
      'Договорить не договорила, смысл и так ясен. ',
      you.get_colored_name(),
      ' решает——',
    ]);
    let ret;
    if (check === 2) {
      ret = 1;
    } else {
      era.printButton('Согласиться', 1);
      era.printButton('Отказать', 2);
      ret = await era.input();
    }
    if (ret === 1) {
      era.print([
        'Мягко берёшь ',
        coffee.get_colored_name(),
        ' в объятия. По ушам, что бьются о лицо, ',
        you.get_colored_name(),
        ' чувствует радость ',
        coffee.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait([callname, '…Сегодня, прошу…']);
    } else {
      era.print('——Прости.');
      era.print([
        'На лице ',
        you.get_colored_name(),
        ' — ',
        coffee.get_colored_name(),
        ' видишь именно это.',
      ]);
      coffee.say([
        callname,
        ', сегодня слишком устал(а)… вечером отдохни как следует…',
      ]);
      era.print([
        coffee.get_colored_name(),
        ' лёгкая обида на лице не ускользает от ',
        you.get_colored_name(),
        ', но в другой раз возместит — ',
        coffee.sex,
        ' подождёт…',
      ]);
    }
    return ret;
  },
  cl_fans: (() => {
    const title = 'Фестиваль благодарности фанатам';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait(
        'День фестиваля. Говорят, только в этот день в Трейсене…',
      );
      await era.printAndWait('——динь-динь.');
      await coffee.say_and_wait('…Добро пожаловать.');
      await era.printAndWait(
        'открывается уютная кофейня, которой в обычные дни нет.',
      );
      await coffee.say_and_wait([
        callname,
        '…Заставила ждать. Это особо обжаренный манхэттенский бленд.',
      ]);
      await coffee.say_and_wait('Попробуй…');
      await era.printAndWait('взгляд——');
      await era.printAndWait([
        you.get_colored_name(),
        ' будто чувствуешь жгучий взгляд ',
        coffee.get_colored_name(),
        '.',
      ]);
      era.printButton('「…Других гостей не обслужишь?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Других не будет. Эта тишина — самое красивое здесь. И…',
      );
      await coffee.say_and_wait(
        'сюда никто не попадёт. Даже войдя во вход, выйдут сразу в выход…',
      );
      await era.printAndWait('И какой смысл в такой кофейне…');
      await era.printAndWait(
        'Молча ворчишь про себя и пьёшь кофе мелкими глотками.',
      );
      await era.printAndWait('——динь-динь.');
      await coffee.say_and_wait('Э… ещё кто-то…');
      await era.printAndWait('——динь-динь-динь-динь…');
      era.printButton('「…Сразу толпа!」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait('Мужчина', [
        'О, вот оно! Кофейня, что ведёт ',
        coffee.get_colored_name(),
        '!',
      ]);
      await you.say_as_passer_by_and_wait('Женщина', [
        'Да, атмосфера~! И отделка красивая~! Я же фанатка — мне ',
        coffee.sex,
        ' нравится~',
      ]);
      await coffee.say_and_wait('Это…');
      era.printButton('「В итоге все всё равно нашли.」', 1);
      await era.input();
      await coffee.say_and_wait('Да… Но как так…? Почему нашли?');
      era.printButton('「Значит, очень старались искать.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' в последнее время выступает всё ярче — и чем ярче ',
        coffee.sex,
        ', тем выше поддержка.',
      ]);
      await era.printAndWait([
        'Похоже, это ',
        coffee.sex,
        ' со своей известностью и привела фанатов.',
      ]);
      await coffee.say_and_wait([
        'Людей много… но раз пришли — гости… постараюсь.',
      ]);
      await era.printAndWait([
        'Через несколько минут, глядя как ',
        coffee.get_colored_name(),
        ' совсем сбилась, ',
        you.get_colored_name(),
        ' как гость тоже идёт в подсобные официанты.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} coffee 曼城茶座 */
  async end_talk(coffee) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          'Открыть кофейню…? Когда всё кончится, я тебя найду.',
        );
      } else if (era.get('cflag:32:育成用变量')?.plan_b > 0) {
        await coffee.say_and_wait(
          'Забыл(а) наш уговор, взгляд на чужих хлопот… вот и итог…',
        );
      } else {
        await coffee.say_and_wait(
          'Уйти от меня, от них… для тебя, наверное, и лучше…',
        );
      }
    } else {
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          'По частоте и правда слишком… друг тоже так думает…',
        );
      } else if (era.get('cflag:32:育成用变量')?.plan_b > 0) {
        await coffee.say_and_wait([
          'Хочешь так снять наш уговор…? …Не убежишь. Ни от меня, ни от неё: и я, и ',
          coffee.sex,
          ' всегда рядом…',
        ]);
      } else {
        await coffee.say_and_wait(
          'И дальше будь осторожен(на)… они всё ещё рядом…',
        );
      }
    }
  },
  basement_end: (() => {
    const title = 'Новый 「друг」';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' тренер пропал уже несколько дней. Полиция обшарила каждый угол академии — ни следа.',
      ]);
      await era.printAndWait([
        'Как подопечная ',
        coffee.uma_sex_title,
        '——',
        coffee.get_colored_name(),
        ' стала первой подозреваемой. Но подробное расследование и допросы быстро показали, что ',
        coffee.sex,
        ' ни при чём.',
      ]);
      await era.printAndWait('Расследование всё ещё идёт…');
      await era.printAndWait(
        'В общежитии Михо тускло-жёлтые глаза смотрят в окно на снующих полицейских.',
      );
      await coffee.say_and_wait([
        { color: buff_colors[3], content: '——Все тебя ищут, ' },
        callname,
        { color: buff_colors[3], content: '…' },
      ]);
      await coffee.say_and_wait([
        { color: buff_colors[3], content: 'Но они тебя не найдут.' },
      ]);
      await coffee.say_and_wait([
        { color: buff_colors[3], content: 'Потому что…' },
      ]);
      await coffee.say_and_wait([
        callname,
        {
          color: buff_colors[3],
          content: ', ты 『друг』, которого вижу только я.',
        },
      ]);
      await era.printAndWait([
        'Медленно задёргивает штору. В тёмной комнате ',
        coffee.get_colored_name(),
        ' обнимает мутный дух у себя за спиной.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
