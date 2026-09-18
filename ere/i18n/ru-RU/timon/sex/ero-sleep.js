/**
 * @file 调教地文 - 睡奸
 * @author O口口口口口
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Поцеловал.');
      await attacker.print_and_wait([
        'Потому что губы ',
        a_call_d,
        ', чуть приоткрытые во сне, тёплые и беспомощные — слишком удобные, чтобы не поцеловать.',
      ]);
      await defender.say_and_wait('Мм…');
      await attacker.print_and_wait(
        'Прижимаешь обратно руку, которая вдруг дёрнулась вверх. Если наклониться ещё ниже боком — можно полностью завладеть теплом этих губ.',
      );
      await attacker.print_and_wait(
        'Только… в одиночку всё-таки немного одиноко.',
      );
    } else {
      await defender.say_and_wait('Мм——');
      await attacker.print_and_wait(
        'Голова начинает бессознательно качаться, на лице появляется лёгкий румянец — дыхание, наверное, стало чаще.',
      );
      await attacker.print_and_wait(
        'Пора уже остановиться… или заняться чем-то другим?',
      );
      await defender.say_and_wait('Чмок…');
      await attacker.print_and_wait('Тогда… последний раз?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'Хотя целуешь глубже, держа за лицо, внутри всё равно как-то пусто…',
      );
      await attacker.print_and_wait([
        'Убедиться, что между губ и зубов ',
        a_call_d,
        ' полно твоего запаха — с точки зрения скрытности это уже большая победа…',
      ]);
      await attacker.print_and_wait([
        'Ха… но почему-то хочется, чтобы ',
        a_call_d,
        ' прямо сейчас проснулась и в панике посмотрела на тебя… было бы забавно, да ww',
      ]);
    } else {
      await defender.say_and_wait('Ха… ха…');
      await attacker.print_and_wait('Напряжение, борьба — и сдача.');
      await attacker.print_and_wait([
        'Тело ',
        a_call_d,
        ' — её держат за лицо, язык доводит до румянца — на удивление всё выдаёт, хотя она спит.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Как хорошо…');
      await attacker.print_and_wait(
        'Мягкие, тёплые… и сейчас — никуда не убегут.',
      );
      await defender.say_and_wait('Мм…');
      await attacker.print_and_wait(
        'Стоны, вырывающиеся из чуть приоткрытых мучительных губ, ясно дают понять, как именно эти уши любят, чтобы с ними обращались руками.',
      );
    } else {
      await defender.say_and_wait('Ха…❤️');
      await attacker.print_and_wait(
        'Сначала… просто не хотелось отпускать эти тёплые уши — слишком приятно лежали в руках.',
      );
      await attacker.print_and_wait([
        'А потом захотелось собрать все милые выражения и звуки, которые во сне бессознательно выдаёт ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait('Ничего… времени ещё много.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pull_ear(attacker, defender, a_call_d) {
    const is_trainer = attacker.id === 0 && !attacker.race && attacker.race > 0;
    await attacker.print_and_wait('Так нельзя…');
    await attacker.print_and_wait(
      is_trainer
        ? '…Это не то, что должен делать любовник или тренер…'
        : '…Это не то, что должен делать любовник…',
    );
    await attacker.print_and_wait('…Но');
    await attacker.print_and_wait([
      'Смотря на спящее лицо ',
      a_call_d,
      is_trainer
        ? ' с беззащитным страдальческим выражением, эту недостойную тренера шалость совершенно невозможно остановить.'
        : ' с беззащитным страдальческим выражением, эту шалость совершенно невозможно остановить.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'Не нужно быть осторожным: эти груди, что едва поднимаются с дыханием, всё равно не сбегут из твоих рук.',
      );
      await attacker.print_and_wait(
        'Так что свободно раскрой пальцы и почувствуй мягкость и тепло, будто ускользающие сквозь щели между ними.',
      );
      await attacker.print_and_wait(
        'Можно даже прижаться ртом и носом и вдыхать молочный запах между грудей — днём такого бы точно не разрешили, а сейчас никто не откажет.',
      );
    } else {
      await attacker.print_and_wait([
        'Как стыдно: прижал спящую ',
        a_call_d,
        ' собой, а руки по самые костяшки утонули в мягкой плоти и не хотят вылезать.',
      ]);
      await attacker.print_and_wait([
        'Не замечаешь, как на лице ',
        a_call_d,
        ' всё сильнее хмурятся брови, не обращаешь внимания, как под тобой разогревается нежное тело…',
      ]);
      await attacker.print_and_wait(
        'И даже на эти движения нет ни разрешения, ни стыдливого согласия…',
      );
      await attacker.print_and_wait('…Чёрт, от этой мысли стало ещё горячее.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Хм… показалось?…');
      await attacker.print_and_wait(
        'Кажется, соски твердеют медленнее, чем когда она бодрствует.',
      );
      await attacker.print_and_wait(
        'Раз нельзя жаловаться и отмахнуться инстинктивной борьбой, два пальца, тянущие розовый выступ вверх, двигаются изящно и уверенно.',
      );
      await attacker.print_and_wait('Эх… то есть…');
      if (!attacker.race && attacker.race > 0) {
        await attacker.print_and_wait([
          'Пытаясь представить, какие сладкие и запутанные мысли сейчас у ',
          a_call_d,
          ' под тобой, пока ты тянешь её за соски, недостойный пошлый тренер щурится от улыбки.',
        ]);
      } else {
        await attacker.print_and_wait([
          'Пытаясь представить, какие сладкие и запутанные мысли сейчас у ',
          a_call_d,
          ' под тобой, пока ты тянешь её за соски, ',
          attacker.get_colored_name(),
          ' ',
          ' щурится от улыбки.',
        ]);
      }
    } else {
      if (defender.sex_code === 1) {
        await attacker.print_and_wait(
          'Эти пошлые соски от непрерывных ласк стали твёрдыми, как камень.',
        );
        await attacker.print_and_wait(
          'Тело так жёстко напряжено — будто прямо говорит…',
        );
      } else {
        await attacker.print_and_wait(
          'Может, так и молоко выдавить получится…',
        );
        await attacker.print_and_wait(
          'Глядя на эти пошлые соски, от ласк ставшие твёрдыми как камень, невольно думаешь об этом…',
        );
        await attacker.print_and_wait(
          'И тело так жёстко напряжено — будто прямо говорит…',
        );
      }
      await defender.used_to_say_and_wait(
        'Сюда нельзя! Это чувствительное слабое место!',
      );
      await attacker.print_and_wait('Слишком мило ww');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'Это никто не запомнит — ещё не поздно остановиться…',
      );
      await attacker.print_and_wait([
        'Можно просто украдкой впитать глазами эту развратную картину, а потом в панике натянуть одежду на ',
        a_call_d,
        ' — и тоже ничего.',
      ]);
      await attacker.print_and_wait(
        'Пальцем раздвигаешь крайнюю плоть с розовой горошины и смотришь, как чувствительный клитор, обнажившись на воздухе, из милого розового становится всё более развратно налитым и красным.',
      );
      await attacker.print_and_wait([
        'Тело ',
        attacker.get_colored_name(),
        ' мелко дрожит от запретного возбуждения — и всё равно решает продолжить.',
      ]);
    } else {
      await defender.say_and_wait('Мм…');
      await attacker.print_and_wait(
        'Ах… незаметно стал таким красным и опухшим, жалко смотреть.',
      );
      await attacker.print_and_wait([
        'Всего лишь лёгкие касания и чуть-чуть терпения — и этот маленький чувствительный бугорок заставляет беззащитное спящее тело ',
        a_call_d,
        ' двигаться ещё развратнее…',
      ]);
      await attacker.print_and_wait('Шелест…');
      await attacker.print_and_wait(
        'Без сознания, гонимое одним только удовольствием, спящее тело хочет снять муку, терясь о простыни.',
      );
      await attacker.say_and_wait('Очень жаль…', true);
      await attacker.say_and_wait(
        'Но дай мне посмотреть ещё раз. Последний.',
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   */
  async finger_fuck(attacker) {
    await attacker.print_and_wait('Так вот… как это…');
    await attacker.print_and_wait(
      'Совсем нет того сопротивления, когда тугие влажные стенки пытаются вытолкнуть кончики пальцев, как ты представлял.',
    );
    await attacker.print_and_wait(
      'Скорее наоборот: без барьера рассудка честная киска жадно целует пальцы, которые лишь слегка вошли.',
    );
    await attacker.print_and_wait(
      'Загибать вверх, тереть вниз, по движениям стенок — к бокам…',
    );
    await attacker.print_and_wait(
      'Ха… если так крепко сжимать ноги, дальше не получится, знаешь ли.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async prepare_virgin(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'Не нужно прятаться и беречь чувства ',
      a_call_d,
      ', которая наверняка залилась бы краской стыда.',
    ]);
    await attacker.print_and_wait(
      'Сейчас перед тобой беззащитное тело, которым можно распоряжаться как угодно.',
    );
    await attacker.print_and_wait([
      'Нужно лишь, наглядевшись на узкую тонкую щель киски, что едва поднимается спящим дыханием, слегка развести кончики пальцев обеих рук — и ',
      defender.sex,
      ' раскроется под ними ещё развратнее, ещё влажнее.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Хочется, чтобы ',
        defender.sex,
        ' чувствовала ещё слаще. Хочется, чтобы киска стала ещё мягче, чтобы ',
        defender.sex,
        ' — это красивое спящее тело — от твоих движений извивалась ещё самозабвеннее…',
      ]);
      await attacker.say_and_wait('Ха… ха…');
      await attacker.print_and_wait(
        'Всего-то шевелить пальцами, а от разгулявшихся в голове желаний перехватывает дыхание.',
      );
      await attacker.print_and_wait('Где же… должно быть, уже совсем близко…');
      await defender.say_and_wait('………');
      await defender.say_and_wait('————❤️');
      await attacker.print_and_wait([
        'В отличие от остальных стенок, этот еле заметный бугорок сам притягивает палец, и тогда чувствуешь особый жар и влажную вязкость этой чуть вздутой плоти… а сверить ответ помогает вдруг выгнувшийся низ живота ставшей честной ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait('…нашёл.');
    } else {
      await attacker.print_and_wait('Сжать.');
      await attacker.print_and_wait('Растереть.');
      await attacker.print_and_wait('Ткнуть.');
      await attacker.print_and_wait('Тупым ногтем подразнить.');
      await attacker.print_and_wait(
        'Сознания нет, а значит, когда ни коснись и где ни коснись, взмокшее мягкое тело перед тобой ответит пальцам честнее и жарче некуда.',
      );
      await attacker.print_and_wait('Остановиться, когда натешишься…');
      await attacker.print_and_wait(
        'Только настанет ли вообще миг, когда будет не жаль остановиться…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_anal(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'Ах, даже во сне здесь особенно осторожничает…',
      );
      await attacker.print_and_wait([
        'Палец ',
        attacker.get_colored_name(),
        ' двусмысленно приближается и с чуть шероховатой текстурой, как раз достаточной, чтобы тело насторожилось, водит круги по маленькому входу — и беззаботные ноги ',
        a_call_d,
        ' в панике вытягиваются на кровати.',
      ]);
    } else {
      await defender.say_and_wait('……❤️');
      await attacker.print_and_wait('Наконец-то, что ли…?');
      await attacker.print_and_wait([
        'Держать тело напряжённым не выходит, и у ',
        a_call_d,
        ' задняя дырочка, растопленная смутной лаской, уже потихоньку разошлась — без всякого её ведома стала дырой, куда не удивительно проглотить что угодно.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   */
  async prepare_anal(attacker) {
    await attacker.print_and_wait([
      'Ладонью чувствуя дразнящий жар из пульсирующего отверстия, четыре пальца ',
      attacker.get_colored_name(),
      ' как сваи фиксируют ягодицы, что изо всех сил хотят сомкнуть стыдную дырку и уйти от взгляда ',
      attacker.get_colored_name(),
      '.',
    ]);
    await attacker.print_and_wait(
      'А особенно длинный средний палец занят другим: слегка согнувшись, как хвост скорпиона, подбирается к заднему проходу — и медленно, но решительно входит.',
    );
    await attacker.print_and_wait('Сопротивление сильное.');
    await attacker.print_and_wait([
      'Сами собой шевелящиеся стенки, будто живые, дышат и толкают палец ',
      attacker.get_colored_name(),
      ' — хотя это и не похотливая плоть соседней киски, созданная для секса, сейчас перед пальцем ',
      attacker.get_colored_name(),
      ' она удивительно активна.',
    ]);
    await attacker.print_and_wait('Боится… или радуется?…');
    await attacker.print_and_wait(
      'Жаль, что ответа прямо из уст героини сейчас не получить…',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          'Как тренер, смотреть и гладить ноги своей подопечной… в сексуальном смысле…',
        );
        await attacker.print_and_wait(
          'Стоит лишь сдержанно описать то, что делаешь сейчас — и уже леденящее чувство запрета прокатывается по телу дрожью.',
        );
        await attacker.print_and_wait(
          'Ведь после тренировок иногда гладишь, чтобы проверить состояние, правда?…',
        );
        await attacker.print_and_wait(
          'Но странно: сейчас голова совершенно не связывает эти ноги со «скачками».',
        );
      }
      await attacker.print_and_wait('Сейчас в голове только…');
      await attacker.print_and_wait(
        'Если бы эти ноги перекрестились и обхватили талию — наверняка было бы здорово.',
      );
      await attacker.print_and_wait('Ха… хорошо, что сейчас спит.');
    } else {
      await attacker.print_and_wait('Мягкие и упругие.');
      await attacker.print_and_wait('Изящные и длинные линии.');
      await attacker.print_and_wait(
        'Отличная чувствительность: от ласк пальцев дрожат.',
      );
      if (defender.race > 0) {
        await attacker.print_and_wait('Как жаль…');
        await attacker.print_and_wait(
          'Что такие ноги существуют только ради скачек…',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_tail(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Плохо… совсем плохо…');
    await attacker.print_and_wait([
      'И не только потому, что шерсть хвоста ',
      a_call_d,
      ' так приятна на ощупь и пахнет её телом.',
    ]);
    await attacker.print_and_wait([
      'А ещё потому, что спящую ',
      a_call_d,
      ' ты перевернул на кровати: жопа задрана, одежда спущена — ',
      defender.teen_sex_title,
      ' лежит беззащитно, а ты так грубо рассматриваешь самое сокровенное…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pull_tail(attacker, defender, a_call_d) {
    await defender.say_and_wait('Мм——');
    await attacker.print_and_wait(
      'Чуть прибавь силы — и попа приподнимется, но отпусти сейчас — и поясница тоже провалится…',
    );
    await attacker.print_and_wait([
      'Эй, эй… бедная ',
      a_call_d,
      '… ',
      attacker.phy_sex_title,
      ' смотрит, а ты во сне выгибаешься вот так. Понимаешь вообще, что за представление?',
    ]);
    await attacker.print_and_wait('Но при этом почему-то и чуть-чуть обидно.');
    await attacker.print_and_wait('Потому что…');
    await attacker.say_and_wait(
      [
        a_call_d,
        ' ведь должна была отвечать куда живее на такие грубоватые шалости…',
      ],
      true,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Без контроля разума, перед губами, что дышат жаром, невинная киска ',
        a_call_d,
        ' просто мелко дышит в такт животу.',
      ]);
      await attacker.print_and_wait(
        'Запах, от которого колотится сердце… кисло-сладкая терпкость, тающая с кончика языка по всему телу…',
      );
      await attacker.print_and_wait(
        'Язык, скрученный внутри как для свиста, медленно ползёт вглубь; стенки неумело пульсируют, сопротивляясь тёплому дразнению…',
      );
      await attacker.print_and_wait([
        'Под дыханием двоих ',
        attacker.get_colored_name(),
        ', монопольно наслаждаясь этой развратной картиной, которую видит лишь один, понемногу продвигает кончик языка дальше.',
      ]);
    } else {
      await attacker.print_and_wait(
        'Уже плохо помнишь, как сначала это была узкая чистая щель; от языка, что всё лезет и лезет, дырка мокрая изнутри и снаружи и теперь слегка дрожит, вывернувшись наружу…',
      );
      await attacker.print_and_wait(
        'Ноги, что раньше спокойно лежали врозь, не знают, как ответить на влажное удовольствие между бёдер — только дрожат и крепко обвивают плечи плохого ребёнка.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'От того, что перед глазами, вина поднимается сама собой…',
      );
      await attacker.say_and_wait([
        'Ха… я, что пользуюсь сном ',
        a_call_d,
        '… правда…',
      ]);
      if (defender.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait([
          'Умамусумэ и член — слова, у которых почти нет пересечений, — сейчас липко соединены губами ',
          attacker.get_colored_name(),
          '…',
        ]);
      }
      await attacker.print_and_wait([
        'Даже во сне есть инстинкт податься бёдрами навстречу обслуживанию: губы ',
        attacker.get_colored_name(),
        ' силой раздвигает движущийся член, и там, где должны брать пищу, хозяйничает этот твёрдый стоячий негодяй, вольно источая пошлый запах, от которого тело становится странным.',
      ]);
      await attacker.print_and_wait(
        'Добавляет ли спящее лицо ещё стыда?… Конечно.',
      );
      await attacker.print_and_wait(
        'Только некоторые желания именно поэтому и не удержать…',
      );
    } else {
      await attacker.say_and_wait('Хлюп… чмок～～');
      await attacker.print_and_wait('Незаметно стало ловчее…');
      await attacker.print_and_wait(
        'Чуть запрокинуть голову — и член глубже входит в рот…',
      );
      await attacker.print_and_wait(
        'Если приплюснутым языком слегка лизнуть сбоку — приятно дрожит.',
      );
      await attacker.print_and_wait('А если задействовать губы… сс…');
      await attacker.print_and_wait(
        'Кхе-кхе… густой стыдный вкус заливает голову и кружит её…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async deep_blow_job(attacker, defender, a_call_d) {
    await attacker.say_and_wait('Ещё хочу, глубже…');
    await attacker.print_and_wait([
      'Жадный шёпот; одержимая инстинктом брать удовольствие ',
      attacker.get_colored_name(),
      ' опускает голову.',
    ]);
    await attacker.say_and_wait('Хлюп… чмок…');
    await attacker.print_and_wait([
      '…И с этой минуты рот ',
      attacker.get_colored_name(),
      ' получает, помимо питания, другое назначение: становится пошлым половым органом, что чавкает и обвивает член. Это уже не исправить ❤️',
    ]);
    await attacker.print_and_wait(
      'Мягкой плотью горла встречать головку, ловким кончиком языка лизать налитые жилки, плотным всасыванием без воздуха поднимать член…',
    );
    await attacker.print_and_wait([
      'Чему учишься, что запоминаешь, во что превращаешься… ',
      attacker.get_colored_name(),
      ', сейчас присевшая сбоку у спящей ',
      a_call_d,
      '…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_deep_blow_job(attacker, defender) {
    await attacker.print_and_wait(
      'От того, что перед глазами, вина поднимается сама собой…',
    );
    if (defender.sex_code === 0 && defender.race > 0) {
      await attacker.print_and_wait(
        'Умамусумэ и член — два слова, у которых почти нет пересечений, — сейчас липко соединились…',
      );
    }
    await attacker.print_and_wait([
      defender.teen_sex_title,
      ' спит — а губы уже силой раздвинуты членом; место, которому положено принимать пищу, занял этот твёрдо вставший негодяй и вовсю источает похабный запах, от которого с телом делается странное.',
    ]);
    await attacker.print_and_wait(
      'Возникнет ли лишняя жалость от спящего лица… разумеется, возникнет.',
    );
    await attacker.print_and_wait(
      'Только некоторые желания именно поэтому и не удержать…',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hand_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'Спящая ',
      a_call_d,
      ' ничего не говорит, но ',
      attacker.get_colored_name(),
      ', глядя на раздутый красный налитый член, уже разминает пальцы — они сами знают, что делать.',
    ]);
    await defender.say_and_wait('Мм——');
    await attacker.print_and_wait([
      'Ошеломлённая обжигающей температурой, рука ',
      attacker.get_colored_name(),
      ' на члене инстинктивно дёргается назад. Потом, как ноги зимой в одеяло, понемногу снова приближается.',
    ]);
    await attacker.print_and_wait(
      'Форма довольно злая… от неё у девушки в животе дёргается…',
    );
    await attacker.print_and_wait(
      'Но… когда пальцы обхватывают и слегка проводят — предэякулят пляшет между пальцами… даже мило.',
    );
    await defender.say_and_wait('Ха… ха… мм——');
    await attacker.print_and_wait('Уже понимаю, чего он хочет…');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Кажется, ');
      await attacker.print_and_wait('это на удивление естественное движение…');
      await attacker.print_and_wait(
        'Стоит обеими руками поднять член — и голова сама незаметно тянется ближе.',
      );
      await attacker.print_and_wait(
        'Теплом пальцев согреть, растереть, и потом…',
      );
      await attacker.say_and_wait('Чмок~');
      await attacker.print_and_wait('Такой густой…');
      await attacker.print_and_wait(
        'Совсем превратилась в похабницу, которая тайком что-то ест…',
      );
    } else {
      await attacker.print_and_wait(
        'Отвести член вбок, склонить голову набок и тщательно вылизывать сверху вниз — будто мороженое, у которого уже потекли края.',
      );
      await attacker.say_and_wait('Хлюп… чмок——');
      await attacker.print_and_wait([
        a_call_d,
        ' — головка блестит; чья вина в этом влажном блеске больше, ещё вопрос…',
      ]);
      await attacker.print_and_wait('Совсем… уже ничего не понятно…❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async fuck_tit(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Разве не здорово?');
    await attacker.print_and_wait([
      'Эта поза, когда ',
      a_call_d,
      ' склонилась над тобой и руками сжимает мягкость, какой обладает только ',
      defender.teen_sex_title,
      ', и эта мягкость обнимает горячий член…',
    ]);
    await defender.say_and_wait('Мм…');
    await attacker.print_and_wait(
      'Кажется, дошло: от головки поднимается горячий белый пар, полный похоти.',
    );
    await attacker.print_and_wait(
      'В отличие от бодрствования, когда прячется, беззащитное спящее лицо честное до возбуждения.',
    );
    await attacker.print_and_wait(
      'М-м, выражение уже пропиталось и стало весьма вкусным.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async tit_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      'Никто не просил — а сама стянула верх и выставила груди…',
    );
    await attacker.say_and_wait('До чего же я сдаюсь перед членом…', true);
    await attacker.print_and_wait(
      'А член, обёрнутый мягкостью, гордо стоит так, что киска дрожит от одного вида.',
    );
    await attacker.print_and_wait([
      'Сама сжимая груди ладонями и не смея поднять голову, ',
      attacker.get_colored_name(),
      ' представляет, какое лицо было бы у ',
      a_call_d,
      ', если бы та сейчас проснулась.',
    ]);
    await attacker.print_and_wait([
      'Какое бы выражение ни вообразила — в тихой комнате сердце ',
      attacker.get_colored_name(),
      ' колотится.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async tit_and_blow_job(attacker, defender) {
    await attacker.print_and_wait([
      defender.race > 0
        ? 'Мало, чтобы член, зажатый между грудей, приятно стоял?… Каким же взглядом ты обычно смотришь на свою подопечную…'
        : 'Мало, чтобы член, зажатый между грудей, приятно стоял?… Каким же взглядом ты обычно смотришь на своего партнёра…',
    ]);
    await attacker.say_and_wait('Слюрп-слюрп-слюрп…');
    await attacker.print_and_wait([
      'Груди блестят от предэякулята, капающего на член; но важнее измученных грудей — самая горячая и полная головка, которую ',
      attacker.get_colored_name(),
      ' двумя руками принимает в рот.',
    ]);
    await defender.say_and_wait('Мм…');
    await attacker.print_and_wait(
      'Язык уже не слушается, но стоит головке во рту чуть заскучать — и движения, которыми соски и груди трут член, уже не остановить…',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async suck_nipple(attacker, defender) {
    await attacker.print_and_wait([
      'Никакого инстинкта увести ',
      era.get(`talent:${defender.id}:乳头类型`) > 0
        ? 'красивые розовые соски'
        : 'красивые коричневые соски',
      ' от ',
      attacker.get_colored_name(),
      ', что подбирается всё ближе. Чуть вздымается мягкая грудь — и ',
      defender.teen_sex_title,
      ' послушно отдаёт её в рот негодяю.',
    ]);
    await attacker.say_and_wait('Сос——');
    await attacker.print_and_wait([
      'Понемногу под кончиком языка сама собой раскалившаяся красная точка твердеет по-настоящему, ',
      attacker.get_colored_name(),
      ' осторожно перехватывает эту горошину зубами и — вжик — втягивает.',
    ]);
    await defender.say_and_wait('Мм——');
    await attacker.print_and_wait(
      'Ха… спохватилась дёргаться — поздновато уже ww',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'В миг, когда твёрдый сосок зубами попадает на губы, тело лежащей на спине ',
      a_call_d,
      ' резко каменеет.',
    ]);
    await attacker.print_and_wait('Эх… вот как…');
    await attacker.print_and_wait([
      'Легко работая зубами, оставляешь неровный красный круг вокруг чувствительного соска… а ',
      defender.teen_sex_title,
      ' в объятиях дрожит без остановки…',
    ]);
    await attacker.print_and_wait([
      'Наверное, поняла, куда дальше целишься: едва язык начинает тщательно облизывать и смачивать сосок, ноги ',
      a_call_d,
      ' обвивают талию ',
      attacker.get_colored_name(),
      '…',
    ]);
    await defender.say_and_wait('Мм——');
    await attacker.print_and_wait('Мило.');
    await attacker.print_and_wait([
      'И про ',
      a_call_d,
      ' на руках, и про эти соски, покрытые красными следами опухания.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_armpit_intercourse(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'Спящая ',
      a_call_d,
      ': беззащитную руку опьянённая похотью ',
      attacker.get_colored_name(),
      ' поднимает прямо вверх',
    ]);
    await attacker.print_and_wait([
      'И подмышка ',
      a_call_d,
      ' берётся на ответственное «мытьё» огромной головкой члена.',
    ]);
    await attacker.print_and_wait(
      'Парящая плоть подмышки от толчков заливается алым — будто и правда превращается в эротический орган…',
    );
    await attacker.print_and_wait([
      'Не до конца принимая это как должное, ',
      attacker.get_colored_name(),
      ' двигается с лёгкой нерешительностью…',
    ]);
    await attacker.print_and_wait([
      '……Нерешительно трёшь и входишь членом в «дырку» подмышки ',
      a_call_d,
      ', которая спиной к тебе…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_foot_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      'Фух… это уже совсем то, что называют извращением.',
    );
    await attacker.print_and_wait([
      'Взять руками ступни спящей ',
      a_call_d,
      ' и обслужить ими свой член — это смелость от знания, что ничего не подозревающая ',
      a_call_d,
      ' не бросит прямо сейчас брезгливый взгляд?',
    ]);
    await attacker.print_and_wait([
      'Сперва ступни, коснувшись незнакомого жара, робко хотят уйти, но ',
      attacker.get_colored_name(),
      ' ладонями возвращает их обратно.',
    ]);
    await attacker.print_and_wait('Потом, похоже, она сообразила.');
    await attacker.print_and_wait(
      'Член, что лезет в подошву, — не хрупкая штука.',
    );
    await attacker.print_and_wait([
      a_call_d,
      ' топчет член уже куда естественнее.',
    ]);
    await attacker.print_and_wait([
      'Будто держать член ',
      attacker.get_colored_name(),
      ' под подошвой — какой-то врождённый дар.',
    ]);
    await attacker.print_and_wait('Шшш…');
    await attacker.print_and_wait([
      'Одной этой мысли хватило, чтобы у ',
      attacker.get_colored_name(),
      ' снова стало горячо внизу живота.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   */
  async foot_job(attacker) {
    await attacker.print_and_wait(
      'Из-за того, что стоишь на кровати, даже член, ставший меньше в поле зрения, кажется милее.',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' поднимает ногу и наступает на раздутый красный член.',
    ]);
    await attacker.print_and_wait(
      'Эх… даже такой могучий член, когда его топчут, так мило покачивается ww',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async tail_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Ловко…');
    await attacker.print_and_wait([
      'С ловкостью, которой ',
      attacker.get_colored_name(),
      ' и не ждала, лошадиный хвост с гнущимися волосками обвивает член.',
    ]);
    await attacker.print_and_wait([
      'Густой, кружащий голову запах члена прикрыт «камуфляжем» хвоста — и от этого член ',
      a_call_d,
      ' возбуждён как никогда.',
    ]);
    await attacker.print_and_wait([
      'Значит… ',
      defender.uma_sex_title,
      ' и правда умеет такое хвостом…',
    ]);
    await attacker.print_and_wait([
      '…Чувствуя этот взрывающийся жар, ',
      attacker.get_colored_name(),
      ', спиной к нему и с задранной жопой, даже краснеющими ушами двигает мило.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是性交还是肛交
   */
  async missionary(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait(
      'Может, это и есть… поза, в которой лучше всего чувствуешь тепло друг друга.',
    );
    await attacker.print_and_wait([
      'Так называемая нормальная поза, она же миссионерская: если смотреть на сплетённых спереди, похоже, будто ',
      attacker.get_colored_name(),
      ' уткнулась в грудь и сосёт молоко.',
    ]);
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' накрывает собой тело ',
      a_call_d,
      ', твёрдый член без всякой пощады входит в ',
      is_vagina ? 'киску' : 'анус',
      ', и у бессознательной ',
      a_call_d,
      ' длинные тонкие тугие ноги неловко торчат по бокам ',
      attacker.get_colored_name(),
      ', а ступни закостенело вытянуты вверх…',
    ]);
    await attacker.print_and_wait([
      'Покорное до невозможности спящее тело ',
      a_call_d,
      ' невесомо вминается в объятия.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async doggy_style(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Как щеночек…');
    await attacker.print_and_wait(
      'Эти ноги… эти ноги, где передние подушечки напряжённо привстали на носок, а согнутые колени высоко задирают влажную поясницу…',
    );
    await attacker.print_and_wait(
      'А над ними приподнята… попа, что невольно виляет, как у щеночка.',
    );
    await attacker.print_and_wait([
      'Только жаль: раз ',
      a_call_d,
      ' так и не проснулась вовремя, вся эта поза держится единственно на руках ',
      attacker.get_colored_name(),
      ', обхвативших поясницу.',
    ]);
    await attacker.print_and_wait([
      'Поднятая с постели в такой зазывной позе, как кукла, ',
      a_call_d,
      ' — дрожь в теле не унять, и, увидев это, невольно хочется облизать пересохшие губы.',
    ]);
    await attacker.print_and_wait(
      'Совсем уже одностороннее насилие получается…',
    );
    await attacker.print_and_wait('Хотя… так и хорошо…');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Ещё глубже.');
    await attacker.print_and_wait([
      'Раз ',
      a_call_d,
      ' спит и мольбы не будет — можно входить до самого основания, вминая спящую ',
      a_call_d,
      ' в своё тело.',
    ]);
    await attacker.print_and_wait([
      'Ненасытная ',
      attacker.get_colored_name(),
      ' и на нулевой дистанции не колеблется: член под бёдрами с поднятой талией твёрдо подаётся вперёд, заставляя губы, киску и матку девушки стонать от очарования…',
    ]);
    await defender.say_and_wait('————❤️❤️');
    await attacker.print_and_wait(
      'Точка G — вот такая штука: какой бы девочкой она ни была прежде, доброй ли, светлой ли, стоит раздвинуть эту складку твёрдым, разящим самцом членом — и она разом падает до похотливой самки, помешанной на сексе.',
    );
    await attacker.print_and_wait(
      'Ладное тело от ударов члена сворачивается в комок, в горле остаётся только мутный сладострастный звук, и одна лишь матка совсем рядом раскалена.',
    );
    era.println();
    await attacker.print_and_wait(
      '…………Хотя вот так, пока девочка спит, тайком приручать её тело членом и наслаждением…',
    );
    await attacker.say_and_wait(
      'Пусть даже тот, кто это делает, — ты сам, а всё-таки подло❤️',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_womb(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      'Волшебство, от которого киске хорошо и без члена.',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' уверенно улыбается, растопыривает пять пальцев и кладёт широкую ладонь на низ живота.',
    ]);
    await attacker.print_and_wait('Тепло, правда, но…');
    await defender.say_and_wait('Ммхо-о-ох…');
    await attacker.print_and_wait('Вдруг вырвался совсем неприличный звук…');
    await attacker.print_and_wait([
      defender.get_colored_name(),
      ' — ровный ритм сонного дыхания разом сделался частым и тревожным',
    ]);
    await attacker.print_and_wait([
      'Почти проваливается внутрь… ',
      attacker.get_colored_name(),
      ' ладонь…',
    ]);
    await attacker.print_and_wait(
      'А матка будто наперекор заколотилась от возбуждения…',
    );
    await attacker.print_and_wait([
      'Словно её схватила волшебная рука ',
      attacker.get_colored_name(),
      '…',
    ]);
    await defender.say_and_wait('————❤️');
    await attacker.print_and_wait([
      'Наверное, ',
      a_call_d,
      ' и проснувшись вспомнит это удовольствие, от которого дрожат ноги.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是性交还是肛交
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('Проглотила…');
    await attacker.print_and_wait([
      'Сцепив капризные пальцы с лежащей ',
      a_call_d,
      ', упругие блестящие ноги ',
      attacker.get_colored_name(),
      ' глубоко приседают, а вход трётся, ища момент, чтобы принять огромную головку…',
    ]);
    if (!is_vagina) {
      await attacker.print_and_wait('Здесь… тайком… жопой… ❤️');
    }
    await attacker.print_and_wait([
      'На этот раз не ждать медленных нежных движений ',
      a_call_d,
      ': стоит члену в тугой полости лишь слегка ткнуть в чувствительные стенки — и талии ',
      attacker.get_colored_name(),
      ' некуда деться: остаётся только, как заведённой, без остановки танцевать перед ',
      a_call_d,
      '…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是性交还是肛交
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait(
      'Честно говоря… уже от одного этого душа вон…',
    );
    await attacker.print_and_wait([
      'Всё вперемешку… и то, что ',
      is_vagina ? 'киску' : 'анус',
      ' сейчас берут силой, и то, что телу до безобразия хорошо…',
    ]);
    await attacker.print_and_wait([
      'И ведь довёл ',
      attacker.get_colored_name(),
      ' до такого всего лишь член сонной, ничего не соображающей ',
      a_call_d,
      '❤️',
    ]);
    await attacker.print_and_wait('Ха… если вдохнуть поглубже…');
    await attacker.print_and_wait([
      'С «чмок» всё сжалось; тело и секунды не продержалось — свело судорогой и обмякло, но в тот миг ',
      attacker.get_colored_name(),
      ' — ',
      is_vagina ? 'киска' : 'анус',
      ' с чувством поцеловала головку ',
      a_call_d,
      '.',
    ]);
    await attacker.print_and_wait(
      'Ха… головка дёргается и дёргается — видно, ей очень хорошо…',
    );
    await attacker.print_and_wait([
      'Хоть и сидит верхом на ',
      a_call_d,
      ' и по позе главная — лицо ',
      attacker.get_colored_name(),
      ' сейчас залито краской смятения.',
    ]);
  },
};
