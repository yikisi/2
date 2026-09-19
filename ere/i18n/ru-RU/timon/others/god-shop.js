/**
 * @file 三女神祈祷 - 系统提示
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
} = require('#/era-electron');

const { money_color } = require('#/data/color-const');

module.exports = {
  /**
   * 三女神像，不同气性随行角色的反应
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   * @param {number} chara_chara 角色的气性，可能是被淫纹扭曲过的结果
   * @returns {TextContent}
   */
  get_chara_react(chara, you, chara_chara) {
    switch (chara_chara) {
      case 1:
      case 3:
        return [
          'Рядом ',
          chara.get_colored_name(),
          ' — улыбка полна уверенности, и на ',
          you.get_colored_name(),
          ' она смотрит с доверием.',
        ];
      case -1:
      case 0:
      case 2:
        return [
          'Рядом ',
          chara.get_colored_name(),
          ' серьёзно вглядывается в статуи трёх богинь, потом переводит взгляд на ',
          you.get_colored_name(),
          ' — будто ждёт, что ',
          you.get_colored_name(),
          ' что-нибудь сделает.',
        ];
      case -3:
      case -2:
        return [
          'Рядом ',
          chara.get_colored_name(),
          ' тихо покачивает хвостом и ждёт, что ',
          you.get_colored_name(),
          ' предпримет дальше.',
        ];
    }
  },
  /**
   * 到达三女神像，祈祷前
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} god 三女神其中之一
   * @param {CharaTalk} you 玩家
   * @param {boolean} has_prayed 是否已经祈祷过
   * @param {TextContent} chara_react 随行角色的反应
   */
  start(chara, god, you, has_prayed, chara_react) {
    if (chara.id > 0) {
      if (has_prayed) {
        god.say_as_unknown('……');
        print('Сверху, от статуй трёх богинь, повеяло чем-то загадочным…');
        print([
          'Кто-то смотрит на ',
          you.get_colored_name(),
          ' и ',
          chara.get_colored_name(),
          '…',
        ]);
      } else {
        print([
          you.get_colored_name(),
          ' и ',
          chara.get_colored_name(),
          ' вместе подходят к статуям трёх богинь.',
        ]);
        print(chara_react);
      }
    } else if (has_prayed) {
      god.say_as_unknown('……');
      print('Сверху, от статуй трёх богинь, повеяло чем-то загадочным…');
      print(['Кто-то смотрит на ', you.get_colored_name(), '……']);
    } else {
      print([
        you.get_colored_name(),
        ' в одиночку подходит к статуям трёх богинь.',
      ]);
      print(
        'С плеч величавых и строгих статуй из кувшинов без устали льётся вода.',
      );
      god.say_as_unknown('……');
    }
  },
  bt_pray_honour_buff: 'Молиться о славе (1 000 репутации)',
  bt_pray_money_buff: 'Молиться о богатстве (500 репутации)',
  bt_pray_money: 'Молиться о деньгах сейчас (50+ репутации)',
  bt_pray_your_power: 'Молиться о силе (200 репутации)',
  get_bt_pray_over_limit: (name) =>
    `Молиться, чтобы ${name} пробила предел (50–500 репутации)`,
  bt_pray_self_over_limit: 'Молиться о прорыве предела (50–500 репутации)',
  get_bt_pray_heal: (name) =>
    `Молиться, чтобы ${name} восстановила здоровье (800 репутации)`,
  bt_pray_self_heal: 'Молиться о восстановлении здоровья (800 репутации)',
  /**
   * 祈祷声望加成
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马郎 or 马娘
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_honour_buff(you, uma, finish_cb) {
    print('(Этого ли я хочу?)\nВ голове почему-то мелькает такая мысль…');
    printButton(
      `Да (прирост репутации +${get('global:声望加成')}%->${get('global:声望加成') + 1}%)`,
      1,
    );
    printButton('Пожалуй, всё-таки нет…', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait('Представляя, как тебя окружают и хвалят…');
      await finish_cb();
      println();
      const honour = get('flag:当前声望');
      if (honour >= 2000) {
        await printAndWait([
          you.get_colored_name(),
          ' открывает телефон и вздыхает: слава так и не вышла за пределы Японии.',
        ]);
      } else if (honour >= 1000) {
        await printAndWait([
          you.get_colored_name(),
          ' открывает телефон и вздыхает: известность сама по себе не привела учениц получше.',
        ]);
      } else if (honour >= 500) {
        await printAndWait([
          you.get_colored_name(),
          ' открывает телефон и вздыхает: кроме близких друзей и семьи, никому по-настоящему нет до него дела.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' открывает телефон и вздыхает над короткой, в пару строк, книгой контактов — только друзья да семья.',
        ]);
      }
      await printAndWait('И тут на телефон приходит сообщение от незнакомца.');
      await printAndWait([
        'Пишет тот, кому интересно, как ',
        you.get_colored_name(),
        ' воспитывает ',
        uma,
        ', и кто хочет увидеть результаты тех, кого ',
        you.get_colored_name(),
        ' растит ',
        uma,
        '.',
      ]);
      await printAndWait(
        'После этого таких сообщений стало приходить больше, чем раньше…',
      );
    }
    return ret;
  },
  /**
   * 祈祷金钱加成
   * @param {CharaTalk} you 玩家
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_money_buff(you, finish_cb) {
    print('(Этого ли я хочу?)\nВ голове почему-то мелькает такая мысль…');
    printButton(
      `Да (прирост ма-монет +${get('global:金钱加成')}%->${get('global:金钱加成') + 1}%)`,
      1,
    );
    printButton('Пожалуй, всё-таки нет…', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' представляет, как копилка день за днём становится всё тяжелее…',
      ]);
      await finish_cb();
      println();
      await printAndWait(
        'Непонятно почему, в голове всплывают цифры зарплаты и доли — и кажется, будто они выше прежних.',
      );
      await printAndWait(
        'Хотя в Трейсене платят и так неплохо; наверное, померещилось…',
      );
    }
    return ret;
  },
  /**
   * 祈祷金钱
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马郎 or 马娘
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_money(you, uma, finish_cb) {
    print(
      '(И сколько же, пожалуй, хочется?)\nВ голове вдруг всплывает такой вопрос…',
    );
    const honour = get('flag:当前声望');
    printButton('Хватит и 250 ма-монет… (50 репутации)', 1, {
      disabled: honour <= 50,
    });
    printButton('Хватит и 500 ма-монет… (100 репутации)', 2, {
      disabled: honour <= 100,
    });
    printButton('Хватит и 750 ма-монет… (150 репутации)', 3, {
      disabled: honour <= 150,
    });
    printButton('Хватит и 1 000 ма-монет… (200 репутации)', 4, {
      disabled: honour <= 200,
    });
    printButton('Пожалуй, обойдусь', 99);
    const ret = await input();
    switch (ret) {
      case 1:
      case 2:
        await printAndWait([
          you.get_colored_name(),
          ' представляет, как на эти деньги покупает ',
          uma,
          ' тренажёры…',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          'Вскоре ',
          you.get_colored_name(),
          ' получает известие из академии: там почему-то решили, что его манера учить ',
          uma,
          ' вполне может довести до травм.',
        ]);
        await printAndWait([
          'Следом присылают ',
          (250 * ret).toString(),
          ' ма-монет и требуют, чтобы ',
          you.get_colored_name(),
          ' на эти деньги исправил свой подход к тренировкам…',
        ]);
        break;
      case 3:
      case 4:
        await printAndWait([
          you.get_colored_name(),
          ' представляет, как плавает в море денег…',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          'Вскоре ',
          you.get_colored_name(),
          ' получает известие из академии: ',
          you.get_colored_name(),
          ' назначено особое пособие, и присылают ',
          (250 * ret).toString(),
          ' ма-монет.',
        ]);
        await printAndWait([
          'Но с условием: ',
          you.get_colored_name(),
          ' как тренер Трейсена больше не должен давать поводов для странных слухов…',
        ]);
    }
    return ret;
  },
  /**
   * 祈祷金钱
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} god 三女神其中之一
   * @param {string} uma 马郎 or 马娘
   * @param {boolean[]} disabled_list 一项属性是否满了
   * @param {number} random_select 选择随机属性的情况，实际选中的属性
   * @param {function:Promise} pray_cb 祈祷自己变强之后的通用反应
   * @param {function:Promise} finish_cb 祈祷后的反应
   * @returns {Promise<[number,number]>} 返回两个值，第一个是玩家的选择，第二个是实际选择的属性
   */
  async pray_your_power(
    you,
    god,
    uma,
    disabled_list,
    random_select,
    pray_cb,
    finish_cb,
  ) {
    print('(Что же нужнее всего подтянуть?)');
    print('В голове всплывает такой вопрос…');
    printButton('Скорость (+80)', 0, { disabled: disabled_list[0] });
    printButton('Выносливость (+80)', 1, { disabled: disabled_list[1] });
    printButton('Сила (+80)', 2, { disabled: disabled_list[2] });
    printButton('Воля (+80)', 3, { disabled: disabled_list[3] });
    printButton('Интеллект (+80)', 4, { disabled: disabled_list[4] });
    printButton('Да всё бы подтянуть… (случайный параметр +100)', 5);
    printButton('Подтягивать больше нечего', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] <= 5) {
      switch (ret[0]) {
        // 速度
        case 0:
          await printAndWait([
            'Представляя, как идёт рядом с подопечной скаковой ',
            uma,
            ' на лёгком беге и подсказывает на ходу…',
          ]);
          break;
        // 耐力
        case 1:
          await printAndWait(['Представляя, как без устали учит ', uma, '…']);
          break;
        // 力量
        case 2:
          await printAndWait([
            'Представляя, как помогает подопечной скаковой ',
            uma,
            ' победить в перетягивании каната…',
          ]);
          break;
        // 根性
        case 3:
          await printAndWait([
            'Представляя, как сорванным голосом подбадривает подопечную скаковую ',
            uma,
            '…',
          ]);
          break;
        // 智力
        case 4:
          await printAndWait([
            'Представляя, как составляет для подопечной скаковой ',
            uma,
            ' один безупречный план тренировок за другим…',
          ]);
          break;
        // 随机属性
        case 5:
          await printAndWait([
            'В голове всплывает, как подопечная скаковая ',
            uma,
            ' утешает его…',
          ]);
          ret[1] = random_select;
      }
      await pray_cb();
      println();
      await finish_cb();
      switch (ret[1]) {
        // 速度
        case 0:
          await printAndWait([
            'Тёплое послевкусие ещё держится в голове, и ',
            you.get_colored_name(),
            ' чувствует, как тело стало легче…',
          ]);
          break;
        // 耐力
        case 1:
          await printAndWait([
            'Тёплое послевкусие ещё держится в голове, и ',
            you.get_colored_name(),
            ' чувствует, как дыхание стало ровнее…',
          ]);
          break;
        // 力量
        case 2:
          await printAndWait([
            'Тёплое послевкусие ещё держится в голове, и ',
            you.get_colored_name(),
            ' чувствует, как мышцы налились…',
          ]);
          break;
        // 根性
        case 3:
          await printAndWait([
            'Тёплое послевкусие ещё держится в голове, и ',
            you.get_colored_name(),
            ' чувствует, как в груди поднимается горячая волна…',
          ]);
          break;
        // 智力
        case 4:
          await printAndWait([
            'Тёплое послевкусие ещё держится в голове, и ',
            you.get_colored_name(),
            ' чувствует, как в голове стало необычайно ясно…',
          ]);
      }
    } else {
      await god.say_as_unknown_and_wait('Продолжай в том же духе…');
      await printAndWait('Кажется, послышался такой голос.');
      println();
      await finish_cb();
      await printAndWait('Статуи трёх богинь всё так же стоят в тишине…');
    }
    return ret;
  },
  /**
   * 祈祷突破极限
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马郎 or 马娘
   * @param {string} limited 到达上限的属性数量
   * @param {string} cost 声望消耗
   */
  async pray_over_limit(chara, you, uma, limited, cost) {
    print([
      '(У ',
      limited,
      '. У ',
      chara.get_colored_name(),
      ' — правда ли стоит рваться за новый предел?)',
      { isBr: 1 },
      'В голове всплывает такой вопрос…',
    ]);
    printButton(
      `Согласиться (${cost} репутации, прибавка к тренировкам −10%)`,
      1,
    );
    printButton('Пожалуй, можно и сбавить шаг', 2);
    const ret = await input();
    if (ret === 1) {
      if (chara.id > 0) {
        await printAndWait([
          'Представляя, как скаковые ',
          chara.uma_sex_title,
          ' рядом раз за разом превосходят предшественников и бьют рекорды на дорожке…',
        ]);
        await printAndWait([
          'Домолившись, вместе с ',
          chara.get_colored_name(),
          ' разом открывают глаза.',
        ]);
        println();
        await printAndWait([
          'Открыв глаза, ',
          you.get_colored_name(),
          ' ясно чувствует: в каждом движении ',
          chara.get_colored_name(),
          ' рядом проступил новый запас роста!',
        ]);
      } else {
        await printAndWait(
          'Представляя, как ночами при свете лампы пишет один новый план тренировок за другим…',
        );
        await printAndWait([
          'В темноте едва заметно заструился свет и медленно втёк в тело ',
          you.get_colored_name(),
          '!',
        ]);
        println();
        await printAndWait('Домолившись, медленно открывает глаза…');
        await printAndWait([
          'Тёплое послевкусие ещё держится в голове, и ',
          you.get_colored_name(),
          ' уверился, что способен вырасти дальше.',
        ]);
      }
    } else if (chara.id > 0) {
      await printAndWait([
        'Вспоминая, как ',
        chara.get_colored_name(),
        ' рядом день за днём честно тренируется…',
      ]);
      await printAndWait([
        'Домолившись, ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' рядом разом открывают глаза.',
      ]);
    } else {
      await printAndWait([
        'Вспоминая бесчисленные дни и ночи со скаковыми ',
        uma,
        '…',
      ]);
      await printAndWait('Домолившись, медленно открывает глаза.');
    }
    return ret;
  },
  /**
   * 祈祷恢复健康
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} god 三女神其中之一
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马郎 or 马娘
   * @param {TextContent} chara_react 随行角色的反应
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_heal(chara, god, you, uma, chara_react, finish_cb) {
    print([
      '(Да… больше всего хочется…)',
      { isBr: true },
      you.get_colored_name(),
      ' беспокоится о здоровье ',
      chara.get_colored_name(),
      '…',
    ]);
    printButton('Если молитва поможет…', 1);
    printButton('Вместо молитвы, наверное, всё-таки нужны другие усилия', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        'Представляешь ',
        chara.get_colored_name(),
        ' снова здоровой и полной сил…',
      ]);
      await printAndWait([
        'После молитвы ',
        you.get_colored_name(),
        ' открывает глаза.',
      ]);
      println();
      if (chara.id > 0) {
        await printAndWait([
          'Чувствуя тело, полное сил, ',
          you.get_colored_name(),
          ' вдруг недоумевает: зачем вообще пришёл(ла) к статуе Трёх богинь?',
        ]);
      } else {
        await printAndWait(chara_react);
        println();
        await printAndWait([
          'Только что ',
          chara.get_colored_name(),
          ', полную сил, привёл к статуям трёх богинь — ',
          you.get_colored_name(),
          ' — и что же хотел(а) сделать?',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' обдумывает следующий шаг.',
        ]);
      }
    } else {
      await printAndWait([
        'Представляешь, как после отдыха состояние ',
        chara.get_colored_name(),
        ' всё лучше…',
      ]);
      println();
      await god.say_as_unknown_and_wait('Ты… сможешь…');
      await printAndWait('Кажется, слышится такой голос.');
      println();
      await finish_cb();
      println();
      await printAndWait('Статуи трёх богинь всё так же стоят в тишине…');
    }
    return ret;
  },
  /**
   * 祈祷恢复健康，但是本来就很健康
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_heal_no_need(chara, you, finish_cb) {
    await printAndWait([
      'Молишься, чтобы богини и дальше берегли здоровье ',
      chara.get_colored_name(),
      '…',
    ]);
    println();
    await finish_cb();
    println();
    await printAndWait('Статуи трёх богинь всё так же стоят в тишине…');
  },
  /**
   * 通用祈祷前的行为
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   */
  common_start_pray(chara, you) {
    if (chara.id > 0) {
      print([
        'По слову ',
        you.get_colored_name(),
        ' — ',
        chara.get_colored_name(),
        ' вместе закрывают глаза и молча молятся перед статуями трёх богинь…',
      ]);
    } else {
      print([
        you.get_colored_name(),
        ' молча молится перед статуями трёх богинь в одиночку…',
      ]);
    }
  },
  /**
   * 通用祈祷后的反应
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   */
  async common_finish_pray(chara, you) {
    if (chara.id > 0) {
      await printAndWait([
        'После молитвы ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' рядом одновременно открывают глаза.',
      ]);
    } else {
      await printAndWait([
        'После молитвы ',
        you.get_colored_name(),
        ' медленно открывает глаза.',
      ]);
    }
  },
  /**
   * 祈祷自己变强之后的通用反应
   * @param {CharaTalk} you 玩家
   */
  async common_pray_your_power(you) {
    await printAndWait([
      'В кромешной тьме едва заметно колышется свет и медленно втекает в тело ',
      you.get_colored_name(),
      '!',
    ]);
  },
  /** 祈祷某项选择放弃之后会祈祷和平 */
  async common_pray_peace() {
    await printAndWait('Молишься о мире академии Трейсен…');
  },
  /**
   * 离开三女神像
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   * @param {boolean} has_prayed 是否已经祈祷过
   */
  async leave(chara, you, has_prayed) {
    if (chara.id > 0) {
      if (has_prayed) {
        await printAndWait([
          chara.get_colored_name(),
          ' и ',
          you.get_colored_name(),
          ' вместе уходят от статуи Трёх богинь.',
        ]);
      } else {
        await printAndWait([
          'Коротко поклонившись статуе Трёх богинь, ',
          chara.get_colored_name(),
          ' и ',
          you.get_colored_name(),
          ' вместе уходят.',
        ]);
      }
    } else if (has_prayed) {
      await printAndWait([
        you.get_colored_name(),
        ' разворачивается и идёт к тренировочному залу.',
      ]);
    } else {
      await printAndWait([
        'Коротко поклонившись статуе Трёх богинь, ',
        you.get_colored_name(),
        ' разворачивается и идёт к тренировочному залу.',
      ]);
    }
  },
  /**
   * 到三女神像前，但是三女神已经受肉
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} god 某一个已受肉的女神
   */
  async start_with_no_god(you, god) {
    await printAndWait('Статуи трёх богинь стоят в тишине…');
    if (typeof god === 'object') {
      await printAndWait([
        you.get_colored_name(),
        ' вдруг слышит, как сзади здороваются…',
      ]);
      await printAndWait([
        'Обернувшись, обнаруживает, что ',
        god.get_colored_name(),
        ' незаметно оказалась у ',
        you.get_colored_name(),
        ' за спиной…',
      ]);
    }
  },
  /**
   * 以下是三女神受肉之后，向肉体三女神祈祷的文本
   * <br>三女神受肉之后就不用去女神像了
   */
  bt_pray: 'Молиться богине',
  pray_select: 'О чём молиться?',
  /**
   * 向肉体三女神祈祷声望加成
   * @returns {Promise<number>}
   */
  async handle_pray_honour_buff() {
    print('Точно?');
    printButton(
      `Точно (прирост репутации +${get('global:声望加成')}%->${get('global:声望加成') + 1}%)`,
      1,
    );
    printButton('Пожалуй, обойдусь', 2);
    return await input();
  },
  /**
   * 向肉体三女神祈祷金钱加成
   * @returns {Promise<number>}
   */
  async handle_pray_money_buff() {
    print('Точно?');
    printButton(
      `Точно (прирост ма-монет +${get('global:金钱加成')}%->${get('global:金钱加成') + 1}%)`,
      1,
    );
    printButton('Пожалуй, обойдусь', 2);
    return await input();
  },
  /**
   * 向肉体三女神祈祷变强
   * @param {boolean[]} disabled_list 一项属性是否满了
   * @param {number} random_select 选择随机属性的情况，实际选中的属性
   * @returns {Promise<[number,number]>}
   */
  async handle_pray_your_power(disabled_list, random_select) {
    print('Какой параметр хочешь?');
    printButton('Скорость (+80)', 0, { disabled: disabled_list[0] });
    printButton('Выносливость (+80)', 1, { disabled: disabled_list[1] });
    printButton('Сила (+80)', 2, { disabled: disabled_list[2] });
    printButton('Воля (+80)', 3, { disabled: disabled_list[3] });
    printButton('Интеллект (+80)', 4, { disabled: disabled_list[4] });
    printButton('Что угодно!(случайный параметр +100)', 5);
    printButton('Пожалуй, обойдусь', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] === 5) {
      ret[1] = random_select;
    }
    return ret;
  },
  select_target: 'Выберите цель',
  no_targets: 'Нет подходящих целей',
  get_target_entry_over_limit: (name, cost) =>
    `${name}(−${cost} репутации, бонус тренировок −10%)`,
  get_target_entry_heal: (name, cost) => `${name}(${cost} репутации)`,
  /**
   * 祈祷突破极限
   * @param {CharaTalk} chara
   */
  handle_pray_over_limit(chara) {
    print([chara.get_colored_name(), ' словно пробила предел']);
  },
  /**
   * 祈祷结束
   * @param {CharaTalk} god 三女神之一
   * @param {CharaTalk} you 玩家
   * @param {boolean} has_prayed 是否进行过祈祷
   */
  handle_pray_end(god, you, has_prayed) {
    if (has_prayed) {
      print([
        god.get_colored_name(),
        ' исполнил желание ',
        you.get_colored_name(),
        '.',
      ]);
    } else {
      print([
        you.get_colored_name(),
        ' не стал молиться ',
        god.get_colored_name(),
        '…',
      ]);
    }
  },
  /**
   * 三女神受肉后，借钱会变成祈祷发财
   * @param {CharaTalk} god 三女神之一
   * @param {CharaTalk} you 玩家
   */
  async borrow_money(god, you) {
    const honour = get('flag:当前声望');
    if (honour < 50) {
      return await printAndWait('Репутации не хватает');
    }
    print('Сколько ма-монет хочется?');
    printButton('400 ма-монет (50 репутации)', 1);
    printButton('800 ма-монет (100 репутации)', 2, { disabled: honour < 100 });
    printButton('1 200 ма-монет (150 репутации)', 2, {
      disabled: honour < 150,
    });
    printButton('1600 ма-монет (200 репутации)', 2, { disabled: honour < 200 });
    printButton('Пожалуй, обойдусь', 99);
    const ret = await input();
    if (ret === 99) {
      await printAndWait([
        you.get_colored_name(),
        ' отказался(ась) молить ',
        god.get_colored_name(),
        ' о ма-монетах…',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' получает уведомление о дополнительной субсидии от Трейсена в ',
        { color: money_color, content: (400 * ret).toLocaleString() },
        ' ма-монет… но, похоже, то сообщение смотрело свысока…',
      ]);
    }
    return ret;
  },
};
