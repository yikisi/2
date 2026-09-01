/**
 * @file 奇锐骏 - 调教
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { vp_status_enum } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async kiss(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(
        'Кончики носов встречаются по капле, жаркое дыхание скользит по гладкой шее.',
      );
      await you.print_and_wait('Любовь такая жаркая, что вот-вот задохнёшься.');
      await acute.say_and_wait('Нн… ха, ха…❤️');
      await you.print_and_wait('Руки на затылке, алые щёки залиты желанием.');
      await you.print_and_wait('…Похоже, ей всё ещё мало.');
    } else {
      await you.print_and_wait(
        'Снова поцелуй, снова объятия — хочется оставить след на её губах.',
      );
      await acute.say_and_wait(['…Слушай, ты знаешь, ', callname, '.']);
      await you.print_and_wait([
        'После короткого разрыва ',
        y_call_a,
        ' говорит тихо, тягуче.',
      ]);
      await acute.say_and_wait('Такого… мне мало, знаешь❤️');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async french_kiss(acute, you, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait('Твой язык ищет во рту.');
      await you.print_and_wait('Ещё глубже, ещё глубже.');
      await you.print_and_wait(['Но вскоре тебя ловит ', y_call_a, ' — язык.']);
      await you.print_and_wait(
        'Язык жёстко прижат во рту: маленький язык Акют зажимает его к нёбу и путает без остановки.',
      );
      await acute.say_and_wait('……❤️～');
      await you.print_and_wait([
        'Открываешь глаза — и видишь ',
        y_call_a,
        ' — смех в глазах.',
      ]);
    } else {
      await you.print_and_wait([
        'Зубы быстро сдаются шаловливому языку, и ',
        y_call_a,
        ' заходит в твой рот без остановки.',
      ]);
      await you.print_and_wait(
        'Будто тебя берут: язык, спрятанный за зубами, теребят сверху и снизу.',
      );
      await you.print_and_wait(
        'Слюна во рту как трофей: её забирают, а взамен силой оставляют свою.',
      );
      await you.print_and_wait([
        'Открываешь глаза: ',
        y_call_a,
        ' — взгляд всё так же томен, и руки на затылке сжимают сильнее.',
      ]);
      await you.print_and_wait([
        '…Никакой уверенности одолеть ',
        y_call_a,
        ' в поцелуе языком.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async relax(acute, you, y_call_a, callname) {
    await acute.say_and_wait(['Фу… ', callname, ', не выпить ли воды?']);
    await you.print_and_wait([
      'Передышка: ',
      y_call_a,
      ' мягко спрашивает, не напиться ли.',
    ]);
    await you.print_and_wait([
      'С лба капают мелкие капли пота. Смотришь: ',
      acute.sex,
      ' — голое белое тело.',
    ]);
    await you.print_and_wait('— Сердце колотится слева.');
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async lure(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      if (Math.random() < 0.5) {
        await you.print_and_wait([
          'Пальцем кружишь по ',
          y_call_a,
          ' её соску и хочешь увидеть, как ',
          y_call_a,
          ' стонет, сдерживаясь.',
        ]);
        await you.print_and_wait([
          'Но ',
          y_call_a,
          ' берёт твою руку и ведёт к низу живота, к матке.',
        ]);
        await acute.say_and_wait(['Слушай… ', callname, '. Сюда… нельзя?']);
        await you.print_and_wait([
          y_call_a,
          ' упирается лбом и смотрит снизу вверх; с алых щёк — манящий низкий стон—',
        ]);
      } else {
        await you.print_and_wait([
          'Тянешься к ',
          y_call_a,
          ' её пальцам, которыми она дразнит, — и тут же ',
          acute.sex,
          ' поглощает их губами и языком.',
        ]);
        await you.print_and_wait(
          'Указательный, большой, средний, безымянный, мизинец, ладонь, тыльная сторона — каждый лижет, каждый сосёт, оставляет след слюны.',
        );
        await you.print_and_wait([
          'Но ',
          y_call_a,
          ' всё ещё мало: прижимается к руке, лижет запястье — ',
          acute.sex,
          ', глаза широко, как у зверя в течке.',
        ]);
        await acute.say_and_wait([
          'Ха, ха… подмышки, ',
          callname,
          ' твой запах… ',
          callname,
          ', можно продолжать?',
        ]);
      }
    } else {
      await you.print_and_wait('Вроде без толку…');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async talk(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        'Не думала, что с ',
        callname,
        ' дойдём до такого…',
      ]);
      await you.print_and_wait([
        'Пальцы скрещены перед собой, и нет ни мысли прикрыть голое тело: ',
        y_call_a,
        ' чуть склоняет голову.',
      ]);
      await acute.say_and_wait('Но раз уж делать… так досыта, хорошо?');
      if (acute.sex_code !== 1) {
        await you.print_and_wait([
          acute.sex,
          ' мягко улыбается и тут же заводит руки за спину: розовые соски как на ладони.',
        ]);
      }
    } else {
      await you.say_and_wait('Понежнее?');
      await you.print_and_wait(['……', y_call_a, ' опустила голову и молчит.']);
      await you.say_and_wait('Тогда жёстче?');
      await you.print_and_wait(['……', y_call_a, ' её хвост качнулся.']);
      await you.print_and_wait(
        'Голая не краснеет, а на такой разговор в глаза не отвечает.',
      );
      await you.print_and_wait(
        'Становится любопытно — шлёпаешь по пышной жопе. 「Плесь」 в ответ — вот и ответ—',
      );
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async switch(acute, you, callname, y_call_a) {
    await acute.say_and_wait('А? Отдаёшь инициативу мне?… Нн—');
    await you.say_and_wait('Нельзя?');
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        'Ну… не то чтобы нельзя… просто, ',
        callname,
        '……',
      ]);
      await acute.say_and_wait('Что бы ни случилось дальше… терпи, хорошо～?');
      await you.print_and_wait([
        'Сказав это, ',
        acute.sex,
        ' тянется руками к груди и ложится тебе на грудь.',
      ]);
      await you.print_and_wait([
        '……',
        y_call_a,
        ' её глаза вспыхивают красным.',
      ]);
    } else {
      await acute.say_and_wait('Ну… не то чтобы нельзя…');
      await you.print_and_wait([
        'На миг в ',
        y_call_a,
        ' её взгляде мелькает жалость—',
      ]);
      await acute.say_and_wait([
        'Тогда, ',
        callname,
        '…если будет больно, скажи, хорошо～?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} success 是否能反抗成功
   */
  async resist(acute, you, callname, y_call_a, success) {
    await acute.say_and_wait([
      'Слушай, ',
      callname,
      ', …лучше не сопротивляйся, хорошо?',
    ]);
    await you.print_and_wait([
      'В глазах пляшет томный блеск: ',
      y_call_a,
      ' валит тебя на пол.',
    ]);
    await acute.say_and_wait('А не то… можешь пораниться.');
    await you.print_and_wait([
      'Запястья крепко сжаты, ',
      acute.sex,
      ' тянется губами к шее…',
    ]);
    era.println();
    if (success) {
      await you.print_and_wait('Пораниться? Какая разница.');
      await you.print_and_wait([
        'С мыслью, что запястья могут вывихнуться, силой поднимаешь корпус, задираешь голову и целуешь ',
        y_call_a,
        '.',
      ]);
      await acute.say_and_wait('Нн!…❤️');
      await acute.say_and_wait('❤️～');
      await acute.say_and_wait(['……', callname, ', слишком хитро.']);
    } else {
      await you.print_and_wait('Бьёшься изо всех сил — и всё впустую.');
      await you.print_and_wait(
        'Как добыча под взглядом зверя: чем сильнее бьёшься, тем ей жарче.',
      );
      await acute.say_and_wait(['Ха❤️～ я буду нежнее, ', callname, '.']);
      await you.print_and_wait([
        'С жарким выдохом ',
        y_call_a,
        ' оставляет след у тебя на шее…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async gargle(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'У раковины вода только наполнила стакан, как в зеркале появляется ',
      y_call_a,
      '.',
    ]);
    await acute.say_and_wait('Вычисти получше～ а то кариес — беда…');
    await you.print_and_wait([
      'Говорит — и ',
      acute.sex,
      ' привычно «достаёт» зубную щётку из-за раковины.',
    ]);
    await acute.say_and_wait([
      'Слушай, почистить зубы ',
      callname,
      '? Я чищу очень чисто～',
    ]);
    await you.print_and_wait('…Не обязательно же весь набор?');
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async wipe_body(acute, you, callname, y_call_a) {
    await acute.say_and_wait('Хей-ш, хей-ш…');
    await you.print_and_wait([
      'Полотенцем цвета матча ',
      y_call_a,
      ' старательно вытирает тело.',
    ]);
    await acute.say_and_wait([
      'Фу, фу… вот и чисто～ слушай, ',
      callname,
      ', ещё где-нибудь надо подмести?',
    ]);
    await you.print_and_wait(
      '…Голая, а привычка всё подметать всё равно торчит.',
    );
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_ear(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Гладишь ',
        y_call_a,
        ' её ухо… как сказать: к такому касанию легко привыкнуть.',
      ]);
      await you.print_and_wait(
        'По пушистому наружному уху в мягкое нутро, указательным ловишь мелкие косточки внутри.',
      );
      await you.print_and_wait('…Если этими ушами с пол-ладони обернуть член—');
      await you.print_and_wait([
        'В голове мелькает неприличная картинка — и ухо ',
        y_call_a,
        ' мигом настороженно 「встаёт」.',
      ]);
      await acute.say_and_wait([
        callname,
        '…ты сейчас думал о чём-то нехорошем, да?',
      ]);
      await you.print_and_wait('…А-ха-ха, попался.');
    } else {
      await acute.say_and_wait([
        'М-м❤️～ ',
        callname,
        ' её руки… немного пошлые.',
      ]);
      await you.print_and_wait('Пошлые? М-м…');
      await you.say_and_wait('Тогда можно чуть лизнуть? Ухо?');
      await acute.say_and_wait('Нельзя～');
      await you.print_and_wait('Под мягким голосом — железная «сюда нельзя».');
      await you.print_and_wait('…И ухо шлёпнуло по руке, даже больно.');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async pull_ear(acute, you, callname, y_call_a) {
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await you.print_and_wait([
        'Для ',
        acute.uma_sex_title,
        ' уши — открытая слабость. Но почему у ',
        acute.uma_sex_title,
        ' такая слабость от рождения?',
      ]);
      await you.print_and_wait(
        'Наверное, чтобы тренер вёл за ухо и держал кнут?',
      );
      await you.print_and_wait([
        'Перед глазами ',
        y_call_a,
        ', у которой за ухо тянут до слёз, всё ещё улыбается и смотрит на тебя.',
      ]);
      await acute.say_and_wait([
        'Слушай, ',
        callname,
        ', что дальше?… Дёрнуть хвост? Пощёчина? Или растоптать меня ногой?',
      ]);
      await acute.say_and_wait(
        'Что угодно выдержу～ лишь бы тебе было хорошо — лучше этого ничего нет❤️～',
      );
      await you.print_and_wait('…В груди вспыхивает странная жестокость.');
    } else {
      await you.print_and_wait([
        'Сильно, без жалости тянешь ',
        y_call_a,
        ' её ухо.',
      ]);
      await you.print_and_wait([
        'Для ',
        acute.uma_sex_title,
        ' уши — открытая слабость; когда так сильно тянут, даже привычная терпеть боль ',
        y_call_a,
        ' уже едва выдерживает.',
      ]);
      await acute.say_and_wait([
        'Легче, чуть легче, ',
        callname,
        '…так правда больно…',
      ]);
      await you.print_and_wait([
        'С виду как всегда, но у ',
        y_call_a,
        ' из уголков глаз от боли сами катятся слёзы…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {boolean} is_huge_tit 奇锐骏是否是巨乳
   */
  async pet_breast(acute, you, callname, y_call_a, is_first, is_huge_tit) {
    if (is_first) {
      if (is_huge_tit) {
        await you.print_and_wait(
          'Одной ладони уже не хватает: мясо груди лезет между пальцами.',
        );
      } else {
        await you.print_and_wait(
          'Не маленькая и не огромная — как раз в ладонь.',
        );
      }
      await you.print_and_wait(
        'Мягко; толкни влево-вправо — в ладони ходит волной.\n',
      );
      await acute.say_and_wait(['Слушай… ', callname, ', помять хочешь?❤️～']);
      await you.print_and_wait(
        'Под изумрудными глазами — уверенность, что всё в её ладони, или бездонное желание?',
      );
      await you.print_and_wait(
        '…Кто знает? Только налитый сосок в ладони жжёт.',
      );
    } else {
      await you.print_and_wait('Мнёшь, мнёшь…');
      await you.print_and_wait('На ощупь как данго, только куда больше.');
      await you.print_and_wait('Жарче теста и пружинистее.');
      await you.print_and_wait(
        'Не сладость, а аппетит всё равно раскрывается.',
      );
      await acute.say_and_wait(
        'Слушай, грудь этой девочки есть нельзя, хорошо?❤️～',
      );
      await you.print_and_wait('…Опять прочла, о чём думаешь.');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_nipple(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait('Трёшь, трёшь…');
      await you.print_and_wait('Налитый сосок неожиданно горячий.');
      await you.print_and_wait('На кончиках пальцев — странное ощущение.');
      await acute.say_and_wait('Нн❤️');
      await you.print_and_wait([
        y_call_a,
        ' стискивает зубы и терпит зуд в груди.',
      ]);
      await you.print_and_wait(
        'Если ещё дразнить, когда-нибудь соски совсем распустятся.',
      );
      await you.print_and_wait('…А до тех пор хочется тереть дальше.');
    } else {
      await you.print_and_wait('Щиплешь сосок и тянешь вверх.');
      await you.print_and_wait('Как за вентиль: вся грудь идёт за пальцами.');
      await you.print_and_wait(
        'Крутишь сосок куда вздумается — и грудь пляшет на кончиках пальцев.',
      );
      await acute.say_and_wait([
        'Нн❤️～ ',
        callname,
        ', не надо… играть с грудью❤️… так щекотно❤️～',
      ]);
      await you.print_and_wait([
        'Даёт играть с сосками, только кусает губу и ладонью закрывает верх лица ',
        y_call_a,
        ', стонет и стонет.',
      ]);
      await you.print_and_wait([
        '…Хочется ещё, увидеть, как ',
        y_call_a,
        ' тонет в похоти на лице.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_clitoris(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['Красный, стоит прямо,']);
      await you.print_and_wait(['чуть тронь — и долго качается влево-вправо.']);
      await acute.say_and_wait([
        'М-м… можно не смотреть всё время? Немного стыдно…',
      ]);
      await you.print_and_wait([
        'Так говорит, а пальцы всё равно скользят по клитору вверх-вниз.',
      ]);
      await you.print_and_wait([
        '…Странное ощущение, хочется ещё чуть-чуть внимательнее потрогать—',
      ]);
    } else {
      await you.print_and_wait([
        'Пробуешь сильнее нажать — и он, ещё краснее и пухлее, тут же отпружинивает.',
      ]);
      await you.print_and_wait([
        'Розовый, красивый. До того красивый, что хочется снять на телефон…',
      ]);
      await acute.say_and_wait([callname, ', нельзя～']);
      await you.print_and_wait([
        'Снова прочла, о чём думаешь, ',
        y_call_a,
        ' отказывает.',
      ]);
      await you.print_and_wait(['…Тогда остаётся нехотя щипнуть.']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async finger_fuck(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['Палец входит совсем легко.']);
      await you.print_and_wait([
        'Мешаешь вверх-вниз — и явно чувствуешь, как дырка сжимается.',
      ]);
      await acute.say_and_wait(['Нн❤️～, м-м❤️～.']);
      await you.print_and_wait([
        y_call_a,
        ' тихо стонет, бёдра сами смыкаются.',
      ]);
      await you.print_and_wait(['…Можно стонать ещё громче?']);
    } else {
      await you.print_and_wait([
        'Средний палец в дырке, большой теребит клитор.',
      ]);
      await you.print_and_wait([
        'Слышно сразу: у ',
        y_call_a,
        ' стон становится громче.',
      ]);
      await acute.say_and_wait(['А❤️～, нн❤️～ там❤️～ как хорошо…']);
      await you.print_and_wait(['На пальцах тёплая волна… можно ещё дальше.']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async prepare_virgin(acute, you, callname) {
    await acute.say_and_wait(['Нн… раз это ', callname, ' её приказ…']);
    await you.print_and_wait([
      'Обеими руками сама разводит тонкую щель внизу,',
    ]);
    await you.print_and_wait([
      'мокрая слизь вместе с жарким дыханием открывает вход.',
    ]);
    await acute.say_and_wait(['Когда так смотрят в упор… немного стыдно～']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async stimulate_g_spot_by_finger(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await acute.say_and_wait(['Нн❤️～～～～～～～']);
      await you.print_and_wait([
        'Нашёл самое чувствительное место ',
        y_call_a,
        ': чуть крючком — и дырка уже сжимается.',
      ]);
      await you.print_and_wait([
        'Язык наружу, дышит ртом; стоит задеть точку G — поясница встаёт дугой.',
      ]);
      await you.print_and_wait(['…Какое развратное уже лицо.']);
    } else {
      await you.print_and_wait([
        'Чуть коснись — и по пальцам проходит жаркая волна.',
      ]);
      await you.print_and_wait([
        'Вынимаешь — между указательным и средним уже тянется нитка слизи.',
      ]);
      await you.say_and_wait([
        'Слушай… ',
        y_call_a,
        ', почему у девочки внутри есть такое место?',
      ]);
      await acute.say_and_wait(['Ха, ха～❤️… ', callname, ', слишком умело.']);
      await you.print_and_wait([
        'Дышит и стонет ',
        y_call_a,
        ', и отвечает вовсе не на вопрос—',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_anal(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Дурного запаха нет: после тщательной чистки здесь совсем чисто.',
      ]);
      await you.print_and_wait([
        'Но даже так: чуть гладишь — и хвост от настороженности встаёт дыбом.',
      ]);
      await acute.say_and_wait([
        'Слушай… ',
        callname,
        ', я думала, нет, но не может быть, тебе туда так интересно— ии❤️～!',
      ]);
      await you.print_and_wait([
        'Не договорила — указательный уже внутри, и ',
        y_call_a,
        ' взвизгивает от касания.',
      ]);
    } else {
      await acute.say_and_wait(['Там… я чистила, ладно.']);
      await you.print_and_wait([
        'Будто что-то поняла: опустила голову и отвела взгляд ',
        y_call_a,
        ', отвечает первой.',
      ]);
      await you.print_and_wait([
        'Тем лучше. Палец без помех скользит, и ',
        acute.sex,
        ' принимает его сзади.',
      ]);
      await you.print_and_wait([
        'Один палец, два; одна фаланга, две… с каждым шагом глубже слышишь, как ',
        y_call_a,
        ' взвизгивает.',
      ]);
      await acute.say_and_wait(['Ха… ', callname, ', ты всё-таки извращенец.']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async prepare_anal(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'Обеими руками разводит зад: в розовой дырке то и дело 「пу, пу」.',
    ]);
    await you.print_and_wait([
      'Если в эту жарко дышащую дырку дунуть воздухом изо рта…',
    ]);
    await acute.say_and_wait([
      'Если так сделаешь, завтра сушёной редьки не дам…',
    ]);
    await you.print_and_wait([
      'Даже та ',
      y_call_a,
      ', сама разводя зад, на такое не согласится…',
    ]);
    await you.print_and_wait([
      '…От этого ещё сильнее хочется дунуть в эту дырку.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_leg(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Тонкие гладкие бёдра — и не скажешь, что от тренировок должны быть крепче.',
      ]);
      await you.print_and_wait([
        'Гладишь вверх-вниз ',
        y_call_a,
        ' её ноги и почему-то хочется сказать 「win～win～」.',
      ]);
      await you.print_and_wait([
        'Стоит шагнуть дальше — и эти белые ноги обвивают талию, как змеи.',
      ]);
      await acute.say_and_wait([
        'Слушай, с самого начала ',
        callname,
        ' гладит… мне тоже можно?',
      ]);
      await you.print_and_wait([
        '…Плохо: совсем не представляешь, как одолеть ',
        y_call_a,
        ', когда её ноги уже обвили талию.',
      ]);
    } else {
      await you.print_and_wait([
        'Гладкие пальцы и подошвы — ни следа долгого бега, странно.',
      ]);
      await you.print_and_wait([
        'Не то чтобы особая слабость — просто хочется взять такую ступню в рот.',
      ]);
      await acute.say_and_wait(['Грибком заразишься, знаешь?']);
      await you.say_and_wait([
        '……',
        y_call_a,
        ', такие красивые ноги без запаха грибком не заболеют.',
      ]);
      await acute.say_and_wait(['Эх… правда?']);
      await you.print_and_wait([
        'Сказав это, с другой стороны ',
        y_call_a,
        ' без колебаний хватает ',
        you.get_colored_name(),
        ' твою ступню — тоже хочет взять в рот.',
      ]);
      await you.say_and_wait(['…Не-не-не, лучше не надо.']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_tail(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['Четыре пальца к корню хвоста, гладишь вниз.']);
      await you.print_and_wait([
        'На ощупь отлично: гладкий, без сечения… видно, всё время бережёт.',
      ]);
      await you.print_and_wait([
        '…Говорят, для некоторых ',
        acute.uma_sex_title,
        ' хвост — табу: тронешь — и ударят… правда ли это.',
      ]);
      await acute.say_and_wait(['Правда～']);
      await you.print_and_wait([
        'Улыбаясь отвечает, а хвост говорит иначе: радостно качается влево-вправо.',
      ]);
    } else {
      await you.print_and_wait(['Нос к кончику хвоста, тихо вдыхаешь.']);
      await you.print_and_wait([
        y_call_a,
        ' её хвост пахнет свежей землёй после весеннего дождя.',
      ]);
      await you.print_and_wait([
        'Хочется уткнуться лицом в хвост целиком и вдоволь пить запах ',
        y_call_a,
        '.',
      ]);
      await acute.say_and_wait([
        'Слушай… ',
        callname,
        ', какие у тебя странные вкусы～',
      ]);
      await you.print_and_wait([
        'Так говорит, а хвост ',
        y_call_a,
        ' качается вверх-вниз, гладит щёку, мешает кончик носа…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async pull_tail(acute, you, callname, y_call_a) {
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await acute.print_and_wait([
        acute.uma_sex_title,
        ' её хвост — вовсе не кнопка только для тренера.',
      ]);
      await acute.print_and_wait([
        'А теперь где угодно: чуть дёрнешь хвост — и зад сам поднимается.',
      ]);
      if (acute.sex_code !== 1) {
        await acute.say_and_wait(
          ['Нн, я, похоже, стала очень дешёвой женщиной—'],
          true,
        );
        await acute.print_and_wait([
          'Зад от боли в хвосте высоко задран и качается, а киска уже течёт, не может ждать.',
        ]);
        await acute.print_and_wait([
          'Хочется ещё: чтобы дёргали хвост, шлёпали по жопе, играли с киской, сверху донизу совсем выиграли, чтобы пропитаться запахом ',
          callname,
          ' и чтобы в голове стало пусто.',
        ]);
        await acute.print_and_wait([
          '…С такими мыслями ',
          acute.uma_sex_title,
          ' наверняка не одна я?',
        ]);
      }
    } else {
      await you.print_and_wait(['Сильно дёргаешь ', y_call_a, ' её хвост.']);
      await you.print_and_wait(['Чуть сильнее — и зад высоко встаёт.']);
      await you.print_and_wait([
        'Хоть это ',
        acute.uma_sex_title,
        ' её запретное место, тронешь — ударят,',
      ]);
      await you.print_and_wait([
        'а когда сильно тянешь этот серо-каштановый хвост, ',
        y_call_a,
        ' не сопротивляется.',
      ]);
      await acute.say_and_wait(['Нн… завтра сушёной редьки не дам, слышишь?']);
      await you.print_and_wait([
        'Губы надуты, маленький протест есть, а задранная жопа уже сама качается.',
      ]);
      await you.print_and_wait(['…Ты этого очень ждёшь, да, ', y_call_a, '?']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async cunnilingus(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'На удивление розовая, пахнет как ',
      acute.child_sex_title,
      '.',
    ]);
    await you.print_and_wait([
      'Маленький язык лижет снизу вверх… трудно сказать, какой это вкус.',
    ]);
    await acute.say_and_wait([callname, ' твой язык… так щекотно.']);
    await you.print_and_wait([
      'А с другой стороны ',
      y_call_a,
      ' протягивает руку и легко гладит по голове того, кто уткнулся и работает.',
    ]);
    await you.print_and_wait([
      '…Вроде ты дрессируешь, а чувствуешь, как тебя саму укротили, и от этого спокойно.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async suck_virgin(acute, you, y_call_a) {
    await you.print_and_wait([
      'Силой разводишь сомкнувшиеся от испуга бёдра и прижимаешь рот к тому, что у неё одно такое — ',
      acute.child_sex_title,
      '.',
    ]);
    await you.print_and_wait([
      'Глотаешь, лижешь, дуешь. Мокрый вход сразу мешается с густой слизью.',
    ]);
    await acute.say_and_wait(['А… там❤️, слабость… задели❤️～']);
    await you.print_and_wait([
      'Голова сама задирается; руки на макушке уже не так легки — обхватывают затылок и тихо толкают.',
    ]);
    await you.print_and_wait([
      'Даже ',
      y_call_a,
      ' хочет ещё выше, ещё сладче.',
    ]);
    await you.print_and_wait([
      '…Так думаешь — и до тёплой волны ещё раз лижешь.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_blow_job(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait(['На коленях, бёдра широко, как у кролика.']);
      await you.print_and_wait([
        'Задирает голову: перед глазами в контровом свете 「корень」.',
      ]);
      await acute.say_and_wait(['Ай-я-я… какой буйный.']);
      await you.print_and_wait([
        'Слушается приказа: ',
        y_call_a,
        ' прижимает алое лицо к члену. Лижет корень и носом водит вверх-вниз, жадно втягивая этот «буйный» запах.',
      ]);
      await acute.say_and_wait(['Ха❤️… какой свежий запах❤️～']);
      await you.print_and_wait([
        'Нежный поцелуй в яйца — и тут же слышно, как капает…',
      ]);
    } else {
      await acute.say_and_wait([
        'И делать 『чистку члена』… ',
        callname,
        ' какие странные вкусы.',
      ]);
      await you.print_and_wait([
        'Ложится перед членом, носом упирается в головку. Нюхает и так отвечает.',
      ]);
      await you.print_and_wait([
        'Скоро язык выскальзывает из розовых губ и лижет борозду головки, будто правда чистит: влево-вправо, полный круг.',
      ]);
      await you.print_and_wait([
        'Грязь собирается на кончике языка, но ',
        y_call_a,
        ' не морщится: мутным взглядом держит её во рту и глотает.',
      ]);
      await acute.say_and_wait([
        'Всё, 『наконечник』 ухожен: кому бы ',
        callname,
        ' ни вздумал 『расширять владения』 — уже можно～',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' мягко говорит, а ',
        acute.sex,
        ' носом всё ещё упирается в член и не думает отстраняться…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async ask_deep_blow_job(acute, you, callname) {
    await acute.print_and_wait([
      'Услышав про глотку, слегка кусает член в знак протеста.',
    ]);
    await acute.print_and_wait([
      'Но протест ненастоящий: тут же сама глотает член целиком.',
    ]);
    await acute.print_and_wait([
      'Глотает вверх-вниз уже до горла, дышит в ритме, как на тренировке нырять.',
    ]);
    await acute.print_and_wait([
      'Носом тянет с члена 「мужской жар」, в уголке губ остаток волоска, что выдернулся при глотке…',
    ]);
    await acute.say_and_wait(['А… это, пожалуй, и в тренировку пойдёт.'], true);
    await acute.print_and_wait([
      'В голове мелькает, как на поле она сама глотает член ',
      callname,
      ' — и от нехватки воздуха мысль смахивается.',
    ]);
    await acute.print_and_wait(['…Уже наготове.']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_blow_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '「Плесь, плесь」 негромко, и на щеке ',
      y_call_a,
      ' остаётся след от члена.',
    ]);
    await you.print_and_wait([
      'Стоячий член упирается ',
      y_call_a,
      ' в нос, бьёт таким «мужским жаром',
    ]);
    await acute.say_and_wait([
      'Нн… как жестоко, ',
      callname,
      '. Членом бить ',
      acute.child_sex_title,
      ' по лицу… так ведь можно и разонравиться, знаешь?',
    ]);
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await you.print_and_wait([
        'Ртом так, а ',
        y_call_a,
        ' её глаза, прикованные к члену, уже предали.',
      ]);
      await you.print_and_wait([
        acute.sex,
        ' сама встаёт как надо, берёт головку в рот и лижет сверху вниз—',
      ]);
      await acute.say_and_wait([
        'Только не надо❤️… так делать с другими❤️ ',
        acute.child_sex_title,
        ' ❤️, хорошо?',
      ]);
      await you.print_and_wait([
        'Хвост радостно мечется, глотает ещё усерднее. Под следом члена на щеке прячется жажда из самой глубины.',
      ]);
    } else {
      await you.print_and_wait(['…А тебе сейчас правда не всё равно?']);
      await you.print_and_wait([
        'Хватаешь ',
        y_call_a,
        ' за волосы и членом прёшь в розовые губы. Зубы не мешают — входит в рот совсем легко.',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' что-то мычит, не разобрать. В тёплом рту спящий язык будят служить вошедшему стволу — и этого довольно.',
      ]);
      await acute.say_and_wait(['Нн❤️… гх-пух❤️～']);
      await acute.say_and_wait(['Меня ', callname, ' использовал❤️～'], true);
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async force_deep_blow_job(acute) {
    await acute.print_and_wait(['Мой протест перед кайфом уже ни к чему.']);
    await acute.print_and_wait(['Волосы схвачены, член легко входит в горло.']);
    await acute.print_and_wait([
      'Ход вверх-вниз, язык, мычание от корня члена… тебе, наверное, от этого горячо?',
    ]);
    await acute.print_and_wait([
      'Чтобы не задохнуться, изо всех сил раскрывает ротик и в каждом толчке ловит воздух.',
    ]);
    await acute.say_and_wait(
      ['Меня используют, используют, используют, используют, используют❤️～'],
      true,
    );
    await acute.print_and_wait(['Противно? Нет… странно.']);
    await acute.print_and_wait([
      'Наоборот… кайф от того, что тебя используют.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_hand_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'Пальцы скользят по стволу; стоит дойти до головки — налитый член дёргается.',
    ]);
    await acute.say_and_wait(['М-м… если долго смотреть, какой-то он милый～']);
    await you.print_and_wait([
      'Сказав, легко дует на член и правой рукой мягко дрочит ствол…',
    ]);
    await acute.say_and_wait(['Слушай, ', callname, ', этого хватит?']);
    await you.print_and_wait([
      'Будто говорит с членом, ',
      y_call_a,
      ' щурит глаза,',
    ]);
    await you.print_and_wait(['томным взглядом смотрит на 「корень」 в руке…']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async ask_hand_and_blow_job(acute, you, callname) {
    await acute.print_and_wait([
      'Глотает головку — и ствол набухает толчками.',
    ]);
    await acute.print_and_wait([
      'По вздутым жилам обе руки по очереди вниз — запах всё гуще.',
    ]);
    await acute.say_and_wait([
      'Гх❤️～ ',
      callname,
      ' твой маленький тренер уже не может ждать—',
    ]);
    await acute.print_and_wait(['Говоря, целует головку.']);
    await acute.say_and_wait([
      'Чмок❤️～～～ давай, если кончишь～ я постараюсь всё выпить❤️～',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_hand_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'Хватаешь ',
      y_call_a,
      ' её руку, кладёшь на свой член и дрочишь вверх-вниз.',
    ]);
    await you.print_and_wait([
      y_call_a,
      ' не сопротивляется, послушно обеими руками скользит. Но всегда такая мягкая ',
      y_call_a,
      ' вдруг улыбается многозначительно.',
    ]);
    await acute.say_and_wait([callname, '…как легко тебя насытить❤️～']);
    await you.print_and_wait([
      'Всё так же спокойно улыбается тебе, а в улыбке всё равно есть вызов.',
    ]);
    await you.print_and_wait(['…Хочется сделать с ', y_call_a, ' ещё гаже.']);
    await you.print_and_wait([
      'Эта мысль вместе с пальцами по стволу всё раздувается—',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_hand_and_blow_job(acute, you, y_call_a) {
    await you.print_and_wait([
      'Ещё ',
      y_call_a,
      ' рукой дрочит ствол, а ты уже жмёшь ',
      y_call_a,
      ' за волосы и вдавливаешь головку в рот.',
    ]);
    await you.print_and_wait([
      '…Это всё ',
      y_call_a,
      ' виновата, да? Всё ',
      y_call_a,
      ' такая пошлая, всё ',
      y_call_a,
      ' такая нежная, всё ',
      y_call_a,
      ' меня соблазнила—',
    ]);
    await you.print_and_wait([
      'Уши дёргаются, а ты всё сильнее жмёшь ',
      y_call_a,
      ' ей на голову.',
    ]);
    await you.print_and_wait([
      'Сопротивления нет: наоборот, головку во рту встречает язык, а руки на стволе всё ещё делают своё.',
    ]);
    await acute.say_and_wait(
      ['Нн❤️～～～ как инструмент, меня используют❤️～'],
      true,
    );
    await acute.say_and_wait(['Такой кайф уже не забыть❤️～～～'], true);
    await you.print_and_wait([y_call_a, ' в изумрудных глазах розовая муть…']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {string} is_huge_tit 奇锐骏是否是巨乳
   */
  async ask_tit_job(acute, you, callname, y_call_a, is_huge_tit) {
    if (is_huge_tit) {
      await you.print_and_wait([
        'Пышная грудь обхватывает медно-красный член; на гладкой головке отражается ',
        y_call_a,
        ' её нежное лицо.',
      ]);
      await acute.say_and_wait([
        'Не думала, что грудью когда-нибудь обниму ',
        callname,
        ' твой член～',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' мягко улыбается и пальцем легко кружит по головке.',
      ]);
      await you.say_and_wait(['…Пора начинать.']);
      await acute.say_and_wait(['Хорошо～']);
      await you.print_and_wait([
        'Легко кивает в ответ, ',
        y_call_a,
        ' кладёт обе руки к груди и сжимает её.',
      ]);
      await acute.say_and_wait([
        'Моя грудь такой большой стала из-за ',
        callname,
        ' ～ так что, слушай, пользуйся вволю❤️～',
      ]);
    } else {
      await acute.print_and_wait([
        'Маленькой груди обхватить медно-красный член физически почти нечем.',
      ]);
      await acute.print_and_wait([
        'Если слишком насиловать — будет как напильником, член только заболит.',
      ]);
      await acute.print_and_wait(['…Но пах совсем не сделать тоже нельзя.']);
      await acute.print_and_wait([
        'Сжимает грудь, розовые соски к стволу, член ходит по мягкой груди вверх-вниз.',
      ]);
      await acute.say_and_wait(['Хей-ш, хей-ш～']);
      await acute.print_and_wait([
        'От касания сосков член понемногу становится больше…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async ask_tit_and_blow_job(acute, you) {
    await you.print_and_wait([
      'Одной стороной мнёт грудь, другой высовывает язык,',
    ]);
    await you.print_and_wait([
      'как рыба на приманку: язык качается вслед за головкой вверх-вниз.',
    ]);
    await you.print_and_wait([
      'Стоит головке подойти к губам — язык непременно заходит в борозду.',
    ]);
    await acute.say_and_wait(['Нн❤️… гх-пух❤️～ пха❤️～ ха❤️～']);
    await you.print_and_wait([
      'На лице ни разврата, а изо рта всё лезут звуки, каких ',
      acute.child_sex_title,
      ' не должна издавать.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {string} is_huge_tit 奇锐骏是否是巨乳
   */
  async fuck_tit(acute, you, callname, y_call_a, is_huge_tit) {
    if (is_huge_tit) {
      await you.print_and_wait([
        'Жёстко валишь ',
        y_call_a,
        ' и вставляешь член в грудь, что под постоянной 「тренировкой」 стала пышной.',
      ]);
      await you.print_and_wait([
        'Обеими руками тянешь розовые соски, бёдрами ходишь в щели груди, вдоволь ловишь мягкость.',
      ]);
      await you.say_and_wait(
        [
          '……',
          y_call_a,
          ' её грудь из-за меня стала большой, она моя, я могу брать вволю—',
        ],
        true,
      );
      await acute.say_and_wait(['Да, моя грудь — ', callname, ' твоя…']);
      await you.print_and_wait([
        'Лицо пылает, будто вовсе не замечает, что её силой берут грудью, ',
        y_call_a,
        ' всё ещё улыбается.',
      ]);
      await acute.say_and_wait([
        'М-м❤️… так что не надо так спешить. Если ',
        callname,
        ' захочет, я грудью помогу～.',
      ]);
      await you.print_and_wait([
        'Соски всё ещё в твоих пальцах, до слёз в уголках глаз, а ',
        y_call_a,
        ' всё равно тянется правой рукой погладить обидчика по лбу.',
      ]);
      await you.print_and_wait(['…Хочется ещё, жёстче взять ', y_call_a, '.']);
    } else {
      await you.print_and_wait([
        'Хочется жёстко войти в ',
        y_call_a,
        ' её грудь.',
      ]);
      await you.print_and_wait([
        'Смотришь на ',
        y_call_a,
        ': вот-вот заплачет и не может, гадко и беспомощно, улыбка и робость. Ловишь это лицо и жёстко долбишь грудь.',
      ]);
      await you.print_and_wait([
        'А когда правда валишь ',
        y_call_a,
        ' и кладёшь член к груди — вдруг не выходит.',
      ]);
      await you.print_and_wait([
        'Грудь слишком мала, не зажмёт. И ',
        y_call_a,
        ' всё ещё улыбается, ни капли страха.',
      ]);
      await acute.say_and_wait([
        'Зажать не выйдет, но если ',
        callname,
        ' очень хочет пах — тогда вставляй сюда❤️～',
      ]);
      await you.print_and_wait([
        'Говорит, будто указывает дорогу. ',
        y_call_a,
        ' перед своими сосками складывает сердечко как раз, чтобы член прошёл.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async fuck_tit_and_mouth(acute, you, y_call_a) {
    await you.print_and_wait(['Тянешь соски, долбишь грудь — и этого мало.']);
    await you.print_and_wait([
      'Хочется, чтобы и ',
      y_call_a,
      ' показала развратное лицо, хочется сломать ',
      y_call_a,
      ' её улыбку.',
    ]);
    await you.print_and_wait([
      'Толстый член жёстко прёт в ',
      y_call_a,
      ' её улыбку.',
    ]);
    await you.print_and_wait([
      'Ломаешь вход, врывешься в рот — сопротивления, какого ждал, нет: встречают язык и слюна.',
    ]);
    await you.print_and_wait([
      'Будто как пойдёт, будто давно знала: в глазах ',
      y_call_a,
      ' расцветает улыбка.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async suck_anal(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        'Нн… не думала, что у ',
        callname,
        ' такой вкус…',
      ]);
      await you.print_and_wait([
        'Значит, такой PLAY даже ',
        y_call_a,
        ' не примет…',
      ]);
      await you.print_and_wait([
        '…Ртом не хочет, а ',
        y_call_a,
        ' всё равно сама встаёт на колени у тебя за спиной.',
      ]);
      await acute.say_and_wait([
        'Нн… такое другим ',
        acute.child_sex_title,
        ' не делай, хорошо?',
      ]);
      await you.print_and_wait([
        'Ворчит — и ',
        y_call_a,
        ' высовывает язык, ведёт им по заду вверх-вниз—',
      ]);
    } else {
      await you.say_and_wait(['Гх-пух… нн❤️～ чмок～ пух-пух…']);
      await acute.print_and_wait([
        'Держит меня за жопу, ',
        callname,
        ' старательно лижет зад. А от ',
        callname,
        ' поцелуев то и дело ток бьёт в голову.',
      ]);
      await acute.print_and_wait(['…Погоди, как-то слишком остро.']);
      await you.say_and_wait([
        'Гх-пух… слушай, ',
        y_call_a,
        ', раз уж дала мне это сделать, я тебя так просто не отпущу, хорошо? Чмок❤️～～～',
      ]);
      await acute.print_and_wait([
        'Смотрит, как тренер перед ней от кайфа теряет голос, и ',
        callname,
        ' тоже от возбуждения чуть «мокнет».',
      ]);
      await acute.print_and_wait(['Кап-кап — не понять, с кого течёт.']);
      await acute.print_and_wait([
        '…Кажется, слишком недооценила ',
        callname,
        ' твой 「запас」.',
      ]);

      await you.say_and_wait(['М-м… у-у, плу-лу, гх·～']);
      await acute.print_and_wait([
        'Лежит у меня за спиной, ',
        callname,
        ' жадно работает губами и языком—',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async suck_nipple(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        'Стоит только попросить пососать соски, как ',
        y_call_a,
        ' сама подносит грудь.',
      ]);
      await acute.say_and_wait([
        'Понежнее, ',
        callname,
        ', и со мной, и с другими ',
        acute.uma_sex_title,
        ' ～',
      ]);
      await you.print_and_wait([
        'Не цепляешься за этот намёк, тянешься лицом и легко сосуешь.',
      ]);
    } else {
      await you.print_and_wait([
        'Алый сосок налит и твёрд, будто давно хочет попасться губам.',
      ]);
      await acute.say_and_wait(['Ай-я-я… я вовсе не ждала, ладно.']);
      await you.print_and_wait([
        'А ты всё равно тянешься лицом и легко сосуешь.',
      ]);
      await acute.say_and_wait(['А❤️～']);
      await you.print_and_wait(['И стон, будто током.']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async bite_nipple(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'Легко прикусываешь сосок — и ',
      y_call_a,
      ' чувствительно стонет.',
    ]);
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        'Нн❤️… ',
        callname,
        ', если так сильно… м-м～ сосок можно откусить, знаешь?',
      ]);
      await you.print_and_wait([
        'Терпит зуд чувствительности и боль, а ',
        y_call_a,
        ' всё ещё гладит тебя у груди.',
      ]);
    } else {
      await you.print_and_wait([
        'Кажется, укусил слишком сильно: в стоне слышна боль.',
      ]);
      await acute.say_and_wait([
        'Фу❤️… ',
        callname,
        ', так кусать — молока не будет, хорошо?',
      ]);
      await you.print_and_wait([
        'Легко стукнула тебя по затылку, ',
        y_call_a,
        ' всё так же нежно держит у груди.',
      ]);
      await you.print_and_wait([
        'Не понять: правда больно или стыдливо отнекивается.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_milk_and_hand_job(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['Сосать грудь и трогать там… можно～']);
      await you.print_and_wait([
        'Лежишь головой на коленях ',
        y_call_a,
        ', спокойно сосёшь грудь перед собой, а толстый член ',
        y_call_a,
        ' нежно гладит.',
      ]);
      await acute.say_and_wait(['Ах… похоже, тебе хорошо～']);
      await you.print_and_wait([
        'Под мягким голосом сквозь бок груди видишь красное лицо ',
        y_call_a,
        ' и взгляд, что то и дело скользит к наливающемуся члену.',
      ]);
    } else {
      await you.print_and_wait([
        'Лежишь боком на коленях ',
        y_call_a,
        ', жадно сосёшь грудь ',
        y_call_a,
        ' слева и справа, оставляешь свой след.',
      ]);
      await you.print_and_wait([
        'Терпит чувствительность груди, изо всех сил улыбается ',
        y_call_a,
        ' и другой рукой тянется вниз.',
      ]);
      await you.print_and_wait([
        'Держать, сжать, обхватить, кольцо, скользить — в этих позах ствол быстро наливается и встаёт.',
      ]);
      await acute.say_and_wait(['Нн～ кончаешь? Можно～ можно не терпеть～']);
      await you.print_and_wait([
        'На душе легко, а от слишком большого покоя чуть бунтуешь: лижешь сосок во рту и чуть сильнее прихватываешь тот, что перед лицом…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 奇锐骏对玩家的称呼
   * @param {PrintedSpan} callname 玩家对奇锐骏的称呼
   */
  async milk(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        'Лежишь головой на коленях ',
        y_call_a,
        ', как дитя сосёшь молоко с налитых розовых сосков,',
      ]);
      await you.print_and_wait([
        'чуть терпко, но пахнет молоком; пьёшь долго — и в горле даже сладко.',
      ]);
      await acute.say_and_wait([
        'М-м… ',
        callname,
        ' так нравится, тогда каждое утро до тренировки специально сцедить несколько бутылок про запас…',
      ]);
      await you.print_and_wait([
        'Обеими руками сцеживает грудь тебе в рот, а головой склоняется ',
        y_call_a,
        ' и задумывается.',
      ]);
    } else {
      await you.print_and_wait([
        'Когда своя подопечная ',
        acute.uma_sex_title,
        ' кормит тебя грудью — стыдно? Конечно.',
      ]);
      await acute.say_and_wait([
        'В последнее время молока из груди многовато… если можно, ',
        callname,
        ', поможешь мне это уладить?',
      ]);
      await you.print_and_wait([
        'Но раз это ',
        y_call_a,
        ' её просьба, то и долг тренера: спокойно лежишь на коленях ',
        y_call_a,
        ', и дальше сосёшь молоко с розовых сосков.',
      ]);
      await you.print_and_wait([
        'А с другой стороны ',
        y_call_a,
        ' одной рукой держит твою голову у колен и улыбается по-матерински…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_non_penetrative(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Стоячий ствол сзади входит и зажимается между бёдрами ',
        y_call_a,
        '.',
      ]);
      await you.print_and_wait([
        'Губы вдоль ствола, течёт смазка, бёдрами ходит вверх-вниз и служит.',
      ]);
      await acute.say_and_wait(['Э-хе-хе… ', callname, ' какой бодрый～']);
      await you.print_and_wait([
        'Ладонью гладит головку и крутит тазом, служит стволу вверх-вниз…',
      ]);
      await you.print_and_wait(['……', y_call_a, ' всё такая же нежная.']);
    } else {
      await you.print_and_wait([
        'Ствол трётся вдоль губ вперёд-назад, и ',
        acute.teen_sex_title,
        ' то и дело чмокает телом.',
      ]);
      await acute.say_and_wait(['Нн❤️… а❤️～']);
      await you.print_and_wait([
        'Дразнить уже слишком: стоит ',
        y_call_a,
        ' стонать — и ствол ловит жар сбоку.',
      ]);
      await acute.say_and_wait(['Нн❤️～ у матки… чуть щекотно～']);
      await you.print_and_wait([
        'Гладит свой низ живота, уже не может ждать, ',
        y_call_a,
        ' ещё охотнее крутит тазом на член.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async sixty_nine(acute, you, y_call_a) {
    await you.print_and_wait([
      'Сочные южные плоды лижешь взахлёб, а ',
      y_call_a,
      ' под тобой тоже не отстаёт.',
    ]);
    await you.print_and_wait([
      'Два тела наложились, языки вышли — каждый тянет своё.',
    ]);
    await acute.say_and_wait(['Гх-пух❤️～ не проиграю… гх-пух❤️～']);
    await you.print_and_wait([
      'Уже залило всё, а ',
      y_call_a,
      ' на другом конце всё равно служит изо всех сил.',
    ]);
    await you.print_and_wait([
      'Не хочет проиграть? Или просто сдалась похоти? Или всё равно—',
    ]);
    await you.print_and_wait([
      '…Пока белое не зальёт всё лицо, ',
      y_call_a,
      '.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {PrintedSpan} call_minoru 奇锐骏对骏川的称呼
   */
  async ask_hair_fuck(acute, you, y_call_a, call_minoru) {
    await you.print_and_wait([
      'Голова набок: серебряные волосы падают на член; хватаешь прядь, три круга вокруг ствола, будто хочет связать.',
    ]);
    await acute.say_and_wait([
      'М-м… если кончишь, волосы наверняка пропитаются запахом члена, не отмоешь…',
    ]);
    await you.print_and_wait([
      y_call_a,
      ' говорит так, а рукой, обмотав волосы, всё дрочит член.',
    ]);
    await acute.say_and_wait([
      'Если увидит ',
      call_minoru,
      '… или другая ',
      acute.uma_sex_title,
      ' запах на волосах… что тогда?',
    ]);
    await you.print_and_wait([
      '…Не думать, ничего не сметь думать. У ',
      y_call_a,
      ' на пальцах вокруг члена всё больше прядей…',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_hair_fuck(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'Хватаешь ',
      y_call_a,
      ' её волосы, спутанные на стволе, сжимаешь в кулак. По серебряно-белым жёстко дрочишь.',
    ]);
    await you.print_and_wait([
      'Другой рукой жмёшь ',
      y_call_a,
      ' её голову к члену, чтобы ',
      acute.sex,
      ' своими глазами смотрела, как её волосы 「используют」.',
    ]);
    await you.print_and_wait([
      '…Хочется оставить метки по всему телу ',
      y_call_a,
      ' … и на волосах тоже.',
    ]);
    await acute.say_and_wait([
      'Даже волосы забрать… ',
      callname,
      ' какой жадный～',
    ]);
    await you.print_and_wait([
      'Улыбаясь говорит и без чужой помощи ',
      y_call_a,
      ' сама склоняет макушку к члену.',
    ]);
    await you.print_and_wait([
      'Словно ',
      acute.teen_sex_title,
      ' перед свадьбой: ждёт, когда член брызнет, и ',
      acute.sex,
      ' получит на волосы чисто белую фату.',
    ]);
    await you.print_and_wait([
      '… ',
      acute.sex,
      ' получит метку на всю жизнь на и без того серо-белых волосах.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_armpit_intercourse(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      ' послушно высоко поднимает руки, гладкие подмышки наружу.',
    ]);
    await you.print_and_wait([
      'Член сразу идёт туда, трётся вдоль впадины вперёд-назад.',
    ]);
    await you.print_and_wait([
      'Не брезгует: наоборот, с интересом смотрит на член, что трётся у неё под мышкой.',
    ]);
    await acute.say_and_wait(['Вот это ', callname, ' любит… какое милое～']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_armpit_intercourse(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'Силой поднимаешь ',
      y_call_a,
      ' её правую руку, и набухший член ходит под мышкой в своё удовольствие.',
    ]);
    await you.print_and_wait([
      'Будто нарочно оставить запах: член под мышкой крутится и трёт как хочет.',
    ]);
    await you.print_and_wait([
      'А ',
      y_call_a,
      ' как всегда не морщится: наоборот, тянет нос и нюхает—',
    ]);
    await acute.say_and_wait([
      'А, этот мужской жар — запах точно не отмоешь❤️～',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async ask_foot_job(acute, you, callname) {
    await you.print_and_wait(['Гладкие подошвы — ни следа скачки.']);
    await you.print_and_wait([
      'А сейчас стопы вместе. Ловкие пальцы ног теребят алый ствол вверх-вниз.',
    ]);
    await acute.say_and_wait([
      'Хей-ш, хей-ш… если качать вверх-вниз, будет ещё лучше?',
    ]);
    await you.print_and_wait([
      'Пальцы ног хватают ствол и качают как игрушку. Всего лишь пальцы ног, а к члену будто врождённый дар.',
    ]);
    await acute.say_and_wait([
      'В следующий раз футджок в колготках? М-м… ну ',
      callname,
      ' ничего не поделаешь～',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async force_foot_job(acute, you, callname) {
    await you.print_and_wait([
      'Хватаешь ноги в колготках и силой заставляешь тереть член.',
    ]);
    await you.print_and_wait([
      'Не для случки, ноги, что завтра понесутся в гонке, ещё и чёрный шёлк колготок. А возбуждение не сдержать — член между стоп всё пухнет.',
    ]);
    await acute.say_and_wait([
      'Ай-я-я… я знаю, о чём ты думаешь, ',
      callname,
      '.',
    ]);
    await you.print_and_wait([
      'А с другой стороны улыбка, будто тихо поёт 「я надела чёрные колготки ради тебя」.',
    ]);
    await acute.say_and_wait([
      'Следующая гонка… хочу в этих колготках, можно?❤️～',
    ]);
    await you.print_and_wait([
      '…После таких слов, какими колготки станут, никто не знает, хорошо?',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_tail_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'Серебристо-серый хвост сам обвивает член; дёрнется — и по хвосту уже густая жидкость.',
    ]);
    await acute.say_and_wait([
      'Слушай, ',
      callname,
      '… уже почти, да? Кроме хвоста и в другие места тоже…',
    ]);
    await you.print_and_wait(['…Нет, мало. Ещё… ещё больше меток на хвосте.']);
    await you.print_and_wait([
      'Входишь в хвост ',
      y_call_a,
      ', снова мешаешь. Чтобы хвост ',
      y_call_a,
      ' вымок в ещё большей жиже.',
    ]);
    await you.print_and_wait([
      '…Чтобы любой с одного взгляда на хвост видел: ',
      y_call_a,
      ' моя.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_tail_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      'Рукой обматываешь ',
      y_call_a,
      ' её хвостом член, дрочишь вверх-вниз, и ',
      acute.sex,
      ' снова получает на хвост белую жидкость.',
    ]);
    await you.print_and_wait([
      'Глянешь — весь серебристо-серый хвост будто вымочен в белом.',
    ]);
    await you.print_and_wait(['…Но мало, далеко не то, чего хочешь.']);
    await acute.say_and_wait(['Ха… ну ', callname, ' ничего не поделаешь.']);
    await you.print_and_wait([
      'А с другой стороны ',
      y_call_a,
      ' вздыхает, а тело предательски капает.',
    ]);
    await acute.say_and_wait([
      'До конца следующей гонки хвост не вымою, ладно… так что—',
    ]);
    await acute.say_and_wait(['Кроме хвоста глянь и в другие места❤️～?']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await acute.say_and_wait('Слушай, входи❤️～');
      await you.print_and_wait([
        'Перед тобой ',
        acute.teen_sex_title,
        ' раскрывает руки и принимает в объятия.',
      ]);
      await you.print_and_wait(
        'Член внизу под 「а」 входит в дырку совсем легко.',
      );
      await you.print_and_wait(
        'Одной стороной ловит широкие руки перед собой, другой гладит выпуклость внизу живота.',
      );
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait('И вспышки боли, что рвут её девственность—');
        await acute.say_and_wait('Вот так, наконец…');
        await acute.say_and_wait([
          'Наконец на всём моём теле твой след, ',
          callname,
          '～',
        ]);
      } else {
        await acute.say_and_wait([
          'А… похоже, дальше меня ',
          callname,
          ' совсем возьмёт❤️～',
        ]);
      }
    } else {
      await you.print_and_wait(
        'Вставлять, вставлять, вставлять… бёдрами без остановки.',
      );
      await you.print_and_wait([
        'Хочется влить ещё семени в тело ',
        y_call_a,
        '.',
      ]);
      await acute.say_and_wait('Гх❤️… там❤️ как хорошо❤️～');
      await you.print_and_wait([
        'Хоть ',
        y_call_a,
        ' стонет с языком наружу, разврата в этом почти не слышно.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary_anal_sex(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['Такой большой член — правда влезет в зад?']);
      await you.print_and_wait([
        'Ещё думаешь, сойдётся ли по телу, а ',
        y_call_a,
        ' сама руками раскрывает зад.',
      ]);
      await acute.say_and_wait(['Слушай… входи～?']);
      await you.print_and_wait([
        'На алом лице улыбка, сама встречает, как 「чужое」 входит в зад.',
      ]);
    } else if (era.get('exp:100:性交次数') > 0) {
      await acute.say_and_wait([
        'Меня берут❤️ не только киску — и жопу тоже❤️～',
      ]);
      await you.print_and_wait([
        'У лица пальцами «V», глаза кверху, язык наружу, ',
        y_call_a,
        ' корчит рожу, будто дразнится.',
      ]);
      await acute.say_and_wait([
        'М-м? Что я делаю? Нн… слышала, такая поза ',
        callname,
        ' ещё сильнее заводит～',
      ]);
      await you.print_and_wait([
        'Говорит — и ',
        y_call_a,
        ' крутит пышной жопой…',
      ]);
      await acute.say_and_wait([
        'Ай-я, чувствую, внутри стал больше❤️～ значит, правда работает～',
      ]);
    } else {
      await acute.say_and_wait(['А❤️, нн❤️… пу-пу, м-м❤️…']);
      await you.print_and_wait([
        'Пока зад раскрывают, стон сам льётся изо рта ',
        y_call_a,
        '.',
      ]);
      await you.print_and_wait([
        'Любит такой зад? Или просто терпит? Всё равно: член в заду всё набухает—',
      ]);
      await acute.say_and_wait(['Нн❤️… кончаешь? Ха❤️… в зад? В киску? Или…']);
      await you.print_and_wait([
        'Будто шутя, ',
        y_call_a,
        ' у рта пальцами показывает 「V」.',
      ]);
      await acute.say_and_wait(['Или кончить мне в рот, да?❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Серебристо-серые волосы падают на спину: белая спина и пышная жопа как на ладони.',
      ]);
      await acute.say_and_wait([
        'В этой позе ',
        callname,
        ' совсем не видно… как же противно～',
      ]);
      await you.print_and_wait([
        'Лицо в постель, ',
        y_call_a,
        ' тихо протестует.',
      ]);
      await you.print_and_wait([
        'Протест, конечно, впустую: набухший член уже к киске под этой жопой—',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['Алая кровь из киски капает вниз.']);
        await you.print_and_wait([
          y_call_a,
          ' тихо стонет, руками вцепляется, чтобы перетерпеть боль внизу.',
        ]);
        await acute.say_and_wait([
          'Не думала, что девственность, которую берегла больше десяти лет, уйдёт, когда даже не видишь.',
        ]);
        await acute.say_and_wait(['Слушай… ', callname, ', отвечай, хорошо?']);
      }
    } else {
      await you.print_and_wait(['Случка как у щенка, по-звериному.']);
      await you.print_and_wait([
        'Мнёшь ',
        y_call_a,
        ' её жопу и без остановки гоняешь член в киске.',
      ]);
      await you.print_and_wait([
        '「Плесь!」 жёстко по жопе — и хватка в дырке резко сильнее.',
      ]);
      await acute.say_and_wait([
        'Пх-гух❤️… мало сжато? Поняла❤️… буду сильнее сжимать❤️～ пу-пу❤️…',
      ]);
      await you.print_and_wait(['Слов нет, а так всё равно разговор.']);
      await you.print_and_wait([
        '……',
        y_call_a,
        ', тебе и правда нравится 「такое」?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style_anal_sex(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '「Плесь, плесь」, звонко, и на белой жопе ',
        y_call_a,
        ' два алых следа.',
      ]);
      await you.print_and_wait([
        'Будто поняла, что значит шлепок по жопе, ',
        y_call_a,
        ' сразу руками к заду, раскрывает дырку.',
      ]);
      await acute.say_and_wait(['А❤️… пу❤️, ха❤️～～～']);
      await you.print_and_wait([
        'Член понемногу глубже, и ',
        y_call_a,
        ' спиной к тебе чуть-чуть постанывает.',
      ]);
      await you.print_and_wait([
        '…Лицом к лицу ещё притворялась скромной, а спиной сразу выдала нутро?',
      ]);
    } else if (era.get('tcvar:100:接近高潮')) {
      await you.print_and_wait(['Плесь! Плесь! Плесь! Плесь!…']);
      await you.print_and_wait([
        'В ритме шлёпаешь ',
        y_call_a,
        ' по жопе и на каждом сжатии зада ловишь сладкий пик.',
      ]);
      await you.print_and_wait([
        'Белая нежная жопа теперь сплошь красная: чуть стукни — и киска уже льёт.',
      ]);
      await acute.say_and_wait(['Ха❤️… нельзя❤️ нельзя❤️… уже, нельзя❤️.']);
      await you.print_and_wait([
        'От кайфа всё развратнее ',
        y_call_a,
        ', уже без обычного запаса: будто просит пощады, в каждом разливе твердит одно и то же.',
      ]);
      await you.print_and_wait([
        'Липкие от низа пальцы к лицу ',
        y_call_a,
        '; ',
        acute.sex,
        ' берёт в рот, и ',
        y_call_a,
        ' жадно сосёт и глотает.',
      ]);
      await acute.say_and_wait([callname, '  твои… пальцы❤️～']);
      await acute.say_and_wait(['Я уже… ', callname, ' твоя вещь❤️.']);
    } else {
      await you.print_and_wait([
        'С каждым толчком чувствуешь, как ',
        y_call_a,
        ' дрожит.',
      ]);
      await you.print_and_wait([
        'Будто нарочно терпит стоны: развратного крика нет, только тихое 「у-у～」.',
      ]);
      await you.print_and_wait(['「Плесь!～」']);
      await acute.say_and_wait(['А❤️']);
      await you.print_and_wait([
        'И стоит в такой миг шлёпнуть ',
        y_call_a,
        ' по жопе — зад сжимается, и пустая киска на глазах мокнет.',
      ]);
      await you.say_and_wait([
        'Слушай, ',
        y_call_a,
        '… это ещё только начало, хорошо?',
      ]);
      await acute.say_and_wait(['……❤️']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sitting(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Лицом к лицу ',
        y_call_a,
        ' садится тебе на бёдра.',
      ]);
      await you.print_and_wait(['Руки вокруг шеи, лица очень близко.']);
      await acute.say_and_wait(['Э-хе-хе… так стыдно.']);
      await you.print_and_wait([
        'Лицо заливает алым; на коленях поднимается ',
        y_call_a,
        ' и медленно садится на член, что упирается в киску…',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['Алая кровь из киски капает вниз.']);
        await you.print_and_wait([
          y_call_a,
          ' чуть хмурится, изо рта само вырывается 「у-у」.',
        ]);
        await you.say_and_wait(['…Больно?']);
        await acute.say_and_wait(['М-м, чуть-чуть…']);
        await acute.say_and_wait([
          'Но… если смотрю на ',
          callname,
          ', любую боль одолею❤️～',
        ]);
        await you.print_and_wait([
          'Держит твоё лицо, ',
          y_call_a,
          ' перед глазами мягко улыбается.',
        ]);
      }
    } else {
      await you.print_and_wait([
        'Обхватив шею, ',
        y_call_a,
        ' крутит тазом перед тобой.',
      ]);
      await acute.say_and_wait([
        'Нн❤️… быстрее? Или так?… М-м❤️～ как ',
        callname,
        ' лучше?',
      ]);
      await you.print_and_wait([
        'Её берут, а она активнее тебя. Член в киске окружён почти дотошной 「заботой」.',
      ]);
      await you.print_and_wait([
        '…Даже не надо нарочно поднимать ',
        y_call_a,
        ' за жопу — ',
        acute.sex,
        ' и сама будет ходить вверх-вниз, да?',
      ]);
      await acute.say_and_wait(['❤️～']);
      await you.print_and_wait([
        'Всё лицо алое: ',
        y_call_a,
        ' смотрит на тебя, полное счастья.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_sitting(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Сидит у тебя на бёдрах, ',
        y_call_a,
        ' прижимается к груди.',
      ]);
      await you.print_and_wait([
        'С серебристо-серых волос пахнет старо и пошло сразу.',
      ]);
      await acute.say_and_wait([
        'Слушай, ',
        callname,
        ', нельзя лицом к лицу?',
      ]);
      await you.print_and_wait([
        'Стоячий член тычет во вход киски и отказывает ',
        y_call_a,
        ' в протесте.',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['Алая кровь из киски капает вниз.']);
        await you.print_and_wait([
          y_call_a,
          ' тихо стонет, изо рта само 「у-у」.',
        ]);
        await you.say_and_wait(['…Больно?']);
        await acute.say_and_wait(['…Больно, знаешь?']);
        await you.print_and_wait([y_call_a, ' трогает влажный уголок глаза.']);
        await acute.say_and_wait([
          'Поэтому… потом всё-таки лицом к лицу, хорошо?',
        ]);
      }
    } else {
      await acute.say_and_wait(['А❤️… пу❤️, ха❤️～～～']);
      await you.print_and_wait([
        'Тихо стонет, ',
        y_call_a,
        ' упирается в колени, ходит вверх-вниз, легко крутит телом.',
      ]);
      await you.print_and_wait([
        'Протест, что нельзя лицом к лицу? Хвост без сил свисает в сторону.',
      ]);
      await you.print_and_wait([
        'Так нельзя… протягиваешь руку и, как надсмотрщик, дёргаешь ',
        y_call_a,
        ' за хвост. В миг в дырке жаркая волна.',
      ]);
      await acute.say_and_wait(['Нн❤️!? ', callname, ', хвост нельзя—']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async standing(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['Прижаты к стене, животы почти вплотную.']);
      await you.print_and_wait([
        'Загнанную в угол ',
        y_call_a,
        ', член подпирает — ',
        acute.sex,
        ' мягкую киску трёт влево-вправо.',
      ]);
      await acute.say_and_wait(['А-ха-ха… уже некуда бежать.']);
      await you.print_and_wait([
        'Сказав, без тени беспомощности ',
        y_call_a,
        ' улыбаясь поднимает правую ногу—',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['Алая кровь из киски капает вниз.']);
        await acute.say_and_wait([
          'Девственность ',
          callname,
          ' забрал～ ничего не поделаешь～',
        ]);
        await you.print_and_wait([
          'Будто вовсе не больно, ',
          y_call_a,
          ' улыбаясь говорит.',
        ]);
        await you.say_and_wait(['…Не больно?']);
        await acute.say_and_wait(['М-м… нормально～']);
        await you.print_and_wait([
          y_call_a,
          ' мягко говорит — и тут же крутит тазом.',
        ]);
        await acute.say_and_wait(['А ', callname, '… не начнёшь?']);
      }
    } else {
      await you.print_and_wait([
        'Животы вплотную, вход матки бьют снова и снова.',
      ]);
      await you.print_and_wait([
        'Даже та нежная ',
        y_call_a,
        ', когда бежать некуда, показывает развратное лицо.',
      ]);
      await acute.say_and_wait([
        'Ха❤️～ нн❤️～ не смотри на меня с таким лицом.',
      ]);
      await you.print_and_wait([
        'Говорит, что не хочет, чтобы видели лицо, а закрывает свои глаза.',
      ]);
      await you.print_and_wait([
        'В этой позе член может глубоко упереться во вход матки.',
      ]);
      await you.print_and_wait([
        '…Если сейчас не убежать, ',
        y_call_a,
        ' её матку член совсем возьмёт, слышишь?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_standing(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['У стены член ходит в киске.']);
      await you.print_and_wait([
        'Загнана в угол, а вход всё равно трётся по стволу вверх-вниз.',
      ]);
      await acute.say_and_wait(['Спиной… в этой позе меня опять обидят～']);
      await you.print_and_wait([
        '…Говорит, что обижают, а хвост уже радостно качается.',
      ]);
      await you.print_and_wait([
        'С уже в течке ',
        acute.uma_sex_title,
        ' не церемонься. Жми ',
        y_call_a,
        ' за жопу и несись вволю—',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['Алая кровь из киски капает вниз.']);
        await you.print_and_wait([
          y_call_a,
          ' тихо стонет, изо рта само 「у-у」.',
        ]);
        await acute.say_and_wait([
          '「Кровь пошла」… ',
          callname,
          ' оставил метку.',
        ]);
        await you.print_and_wait([
          'Лица ',
          y_call_a,
          ' не видно, только ',
          acute.sex,
          ' ушами качается влево-вправо.',
        ]);
        await acute.say_and_wait([
          'В этот раз меня обижают, ничего не поделаешь…',
        ]);
        await acute.say_and_wait([
          'В следующий — непременно лицом к лицу, нежно, хорошо?',
        ]);
      }
    } else {
      await acute.print_and_wait(['По жопе сплошь красные следы.']);
      await acute.print_and_wait([
        'Не только шлёпают по жопе — ещё и хвост ',
        callname,
        ' взял как опору.',
      ]);
      await acute.print_and_wait([
        'Каждый раз, когда член в киске давит на матку, до конца ясно: тебя 「берут」.',
      ]);
      await acute.say_and_wait(['Ха… меня берут, берут, берут❤️～']);
      await acute.print_and_wait([
        'Нельзя, а стоит подумать, что ',
        callname,
        ' берёт, шлёпает по жопе, дёргает за хвост — в груди само вспыхивает.',
      ]);
      await acute.say_and_wait(
        ['Ха, ха… такое лицо ', callname, ' видеть нельзя❤️～'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suspended_congress(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Та, что носится по трассе, ',
        acute.uma_sex_title,
        ', а поднять — совсем не тяжелая.',
      ]);
      await you.print_and_wait([
        'Пальцы легко тонут в пышной жопе: всего лишь зад, а какой жадный.',
      ]);
      await acute.say_and_wait([
        'Ай-я-я… опять поза, откуда совсем не убежать～.',
      ]);
      await you.print_and_wait(['Говорит «убежать», а ноги уже обвили талию.']);
      await you.print_and_wait(['Киска напротив члена сама начинает глотать—']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['Алая кровь из киски капает вниз.']);
        await you.print_and_wait([
          y_call_a,
          ' тихо стонет, изо рта само 「у-у」.',
        ]);
        await you.say_and_wait(['…Больно?']);
        await acute.say_and_wait(['Не больно.']);
        await you.print_and_wait([y_call_a, ' улыбаясь отвечает.']);
        await acute.say_and_wait(['Всё равно не убежать, да?❤️～']);
      }
    } else {
      await acute.print_and_wait([
        'Когда ',
        callname,
        ' держит за жопу в объятиях, кроме как обвить талию, самой ничего не сделать.',
      ]);
      await acute.print_and_wait([
        'Чуть хочешь сползти с члена перевести дух — член тут же догоняет и снова стучит во вход матки.',
      ]);
      await acute.say_and_wait(['Эта поза… правда опасная.'], true);
      await acute.print_and_wait([
        'Будто тебя взяли как игрушку: держат за жопу и гоняют киску вперёд-назад.',
      ]);
      await acute.print_and_wait([
        'Матка всё зудит; с каждым ударом в дырку стон с высунутым языком всё громче.',
      ]);
      await acute.print_and_wait([
        'Ещё немного — и станет 「развратной ',
        acute.child_sex_title,
        ' 」.',
      ]);
      await acute.say_and_wait([
        'А❤️～ ',
        callname,
        ', не смотри на моё лицо.',
      ]);
      await acute.say_and_wait(['Я уже… не сдержусь❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fucked_suspended_congress(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Тебя ',
        y_call_a,
        ' берёт за жопу и поднимает лицом к лицу.',
      ]);
      await you.print_and_wait([
        'Случка, а с виду как бабушка внука на руках.',
      ]);
      await acute.say_and_wait([
        'Какой послушный, ',
        callname,
        ' ❤️～ вставляй медленно.',
      ]);
      await you.print_and_wait([
        'С помощью ',
        y_call_a,
        ' твой член напротив киски и вместе с движением ',
        y_call_a,
        ' медленно входит…',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['Алая кровь из киски капает вниз.']);
        await acute.say_and_wait([
          'Девственность ',
          callname,
          ' забрал～ молодец.',
        ]);
        await you.print_and_wait([
          'Будто свершила что-то великое, ',
          y_call_a,
          ' улыбаясь говорит.',
        ]);
        await you.print_and_wait(['…Не больно? Так хочется спросить—']);
        await acute.say_and_wait([
          'Сейчас поеду, если неприятно — скажи, хорошо? Поезд в тоннель～',
        ]);
        await you.print_and_wait([
          'Похоже, ',
          y_call_a,
          ' вовсе в своё удовольствие.',
        ]);
      }
    } else {
      await you.print_and_wait([
        'Хватаешься за ',
        y_call_a,
        ' её соски и как паразит обвиваешь ',
        y_call_a,
        ' талию.',
      ]);
      await you.print_and_wait([
        'Член ходит в дырке, но бёдрами не ты — та, что держит тебя за жопу, ',
        y_call_a,
        ' качает вверх-вниз.',
      ]);
      await acute.say_and_wait([
        'Нн❤️ а❤️… можно ещё быстрее? Больше угля — поезд быстрее… гх❤️～～～',
      ]);
      await you.print_and_wait([
        'Руки всё быстрее; нежная улыбка уже не столько ласка, сколько похоть.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {string} penis_color 玩家阴茎的颜色
   */
  async hug_suspended_congress(
    acute,
    you,
    callname,
    y_call_a,
    is_first,
    penis_color,
  ) {
    if (is_first) {
      await you.print_and_wait([
        'Берёшь за жопу и спиной к себе ',
        y_call_a,
        ' высоко поднимаешь.',
      ]);
      await you.print_and_wait([
        'Всё тело на руках, алый член без остановки трёт киску.',
      ]);
      await acute.say_and_wait([
        'Совсем не убежать… хотя бы, хотя бы лицом к лицу…',
      ]);
      await you.print_and_wait([
        'В объятиях ',
        y_call_a,
        ' дрожит — не понять, от жара или от страха.',
      ]);
      await you.print_and_wait([
        penis_color,
        ' член в этот миг входит в киску—',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['Алая кровь из киски капает вниз.']);
        await you.print_and_wait([
          y_call_a,
          ' тихо стонет, изо рта само 「у-у」.',
        ]);
        await acute.say_and_wait(['Больно, больно, ', callname, '…?']);
        await acute.say_and_wait(['Поэтому… всё-таки лицом к лицу…']);
        await acute.say_and_wait(['Хорошо?']);
      }
    } else {
      await acute.print_and_wait([
        'Матка дрожью предупреждает, тяжесть сажает киску на член ',
        callname,
        ',',
      ]);
      await acute.print_and_wait([
        'будто тебя взяли как игрушку: в объятиях совсем не пошевелиться.',
      ]);
      await acute.print_and_wait([
        'Если ',
        y_call_a,
        ' разожмёт руки, что держат, а ноги ',
        callname,
        ' ещё не достают до пола — член упрётся в матку и поднимет.',
      ]);
      await acute.print_and_wait(['Тогда точно 「сломнется」.']);
      await acute.say_and_wait([
        'Ха❤️… сейчас упаду❤️, сейчас сломаюсь❤️, меня, меня ',
        callname,
        ' сломает от использования❤️～',
      ]);
      await acute.print_and_wait([
        'Обняв шею тренера, от толчков теряет голос уже не та нежная ',
        y_call_a,
        ', а просто та, кого берут и кому от этого сладко — ',
        acute.teen_sex_title,
        '.',
      ]);
      await acute.say_and_wait(['Сейчас сломаюсь❤️～～～～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cowgirl(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '「Сама двигайся, хорошо?」 — после этих слов ',
        y_call_a,
        ' сама забирается на тебя.',
      ]);
      await you.print_and_wait([
        'Бёдра по бокам бёдер, пальцы сплетены, мокрая киска упирается в стоящий алый член.',
      ]);
      await you.print_and_wait([
        'Дальше ',
        y_call_a,
        ' только медленно опустить таз.',
      ]);
      await acute.say_and_wait([
        'Я всё-таки ',
        acute.uma_sex_title,
        ', ',
        callname,
        ' так что пока мне мало — не остановлюсь.',
      ]);
      await acute.say_and_wait(['Так что, слушай… готов?']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          'Вместе с тем как ',
          y_call_a,
          ' опускает таз, алая кровь из киски капает вниз.',
        ]);
        await you.print_and_wait([
          y_call_a,
          ' тихо стонет, изо рта само 「у-у」.',
        ]);
        await you.say_and_wait(['…Больно?']);
        await acute.say_and_wait([
          'М-м… что ',
          callname,
          ' всё ещё за меня волнуется — мне нравится, ладно.',
        ]);
        await acute.say_and_wait(['Но… лучше сначала о себе подумай.']);
        await acute.say_and_wait([
          'Готова отвечать за то, что я 『пролила кровь』, ',
          callname,
          '?',
        ]);
      }
    } else {
      await you.print_and_wait([
        'Всегда такая тихая в постели ',
        y_call_a,
        ' будто сменила личность и без остановки крутит телом.',
      ]);
      await you.print_and_wait([
        'Качает, крутит, насаживается: киска снова и снова глотает член, член снова и снова меняет форму от сжатия.',
      ]);
      await you.print_and_wait([
        'Сплетённые пальцы ',
        y_call_a,
        ' крепко держит, бёдра внизу зажаты её ногами. Бежать совсем некуда.',
      ]);
      await acute.say_and_wait(['Слушай… ты знаешь, ', callname, '.']);
      await you.print_and_wait([
        'Смотришь снизу на лицо ',
        y_call_a,
        ': на алых щеках опасный блеск.',
      ]);
      await acute.say_and_wait(['Я всё… ждала именно этого, знаешь?']);
      await you.print_and_wait([
        'Словно щёлкнул замок в сердце, и ',
        y_call_a,
        ' на бёдрах начинает плясать телом…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async stimulate_g_spot(acute, you, callname) {
    if (Math.random() < 0.5) {
      await acute.print_and_wait([
        'Член снова и снова, вход матки бьют волнами, в мокрой дырке один пик за другим.',
      ]);
      await acute.print_and_wait([
        'Точку G бьют без остановки — и сама высовывает язык, стонет и стонет.',
      ]);
      await acute.say_and_wait(['Гх-о-о-хо-о❤️～～～～']);
      await acute.print_and_wait([
        'То, что ',
        acute.child_sex_title,
        ' такие звуки нельзя: пошлые, неприличные — а для самки в течке, которой мнут точку G, как раз.',
      ]);
      await acute.say_and_wait(['Гх-хо❤️～ кончаю, кончаю, кончаю❤️～～～～']);
    } else {
      await acute.say_and_wait([
        'Пх-гух❤️～ становлюсь ',
        acute.child_sex_title,
        ', становлюсь самкой❤️～',
      ]);
      await acute.say_and_wait([
        'Меня ',
        callname,
        ' вонючим, тяжёлым членом, что после каждой тренировки встаёт, делают самкой❤️～～～',
      ]);
      await you.say_and_wait(['…Что ты несёшь, самка!']);
      await acute.say_and_wait([
        'Гх-хо❤️～ член внутри стал больше… поймали❤️ что после каждой тренировки я смотрю на ',
        callname,
        ' палатку в штанах, поймали❤️',
      ]);
      await acute.say_and_wait([
        'Меня ',
        callname,
        ' членом жёстко проучит❤️～～～',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async stimulate_large_intestine(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['Нн❤️～～～～ жопа, как хорошо…']);
      await you.print_and_wait(['С каждым ходом члена — жгучая боль и кайф.']);
      await you.print_and_wait(['…Это же зад, тут не должно быть сладко.']);
      await acute.say_and_wait([
        'Жопу… дрессируют в зад ',
        callname,
        ' только для тебя…',
      ]);
    } else {
      await you.print_and_wait([
        'С каждым толчком в зад ',
        y_call_a,
        ' поясница охотно поднимается.',
      ]);
      await you.print_and_wait([
        'Каждый раз, мня S-кишку, хочешь вынуть — сильное сжатие не хочет отпускать член.',
      ]);
      await you.say_and_wait(['…Неужели ', y_call_a, ' такое любит?']);
      await acute.say_and_wait(['Гх-ху❤️～ я не знаю, о чём ты❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async stimulate_womb(acute, you, callname) {
    if (Math.random() < 0.5) {
      await acute.print_and_wait(['Жаркую матку через живот гладит ладонь.']);
      await acute.print_and_wait([
        'А с другой стороны член в заду без остановки давит на матку.',
      ]);
      await acute.print_and_wait(['Спереди и сзади, со всех сторон…']);
      await acute.print_and_wait([
        'Хоть меня как вещь совсем забрали в ладони ',
        callname,
        ', а чувствуешь счастье самки.',
      ]);
      await acute.say_and_wait(['Ха❤️ уже совсем не убежать～']);
    } else {
      await acute.print_and_wait([
        'С одной стороны зад жадно глотает член, с другой — мокрая густая киска.',
      ]);
      await acute.print_and_wait([
        'Под без конца дразнящей маткой слизь с киски капает на пол, как млечный путь.',
      ]);
      await acute.print_and_wait([
        'Не только киска: и слюна изо рта, что стонет, всё скользит с губ.',
      ]);
      await acute.say_and_wait([
        'Хх-ху❤️… ха, живот такой горячий, такой зуд.❤️',
      ]);
      await acute.say_and_wait([
        'Слушай, ',
        callname,
        ' не только зад… хх❤️… и в киску тоже вставь?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async insult(acute, you, callname, y_call_a) {
    const message = [
      async () => {
        await you.say_and_wait('Извращенка, которой нравится, когда унижают!');
        await acute.say_and_wait(
          'Вовсе не нравится, знаешь? Просто чуть-чуть заводит～',
        );
        await you.print_and_wait([
          y_call_a,
          ' мягко улыбается, будто вовсе не чувствует обиды.',
        ]);
        await you.print_and_wait('…Так это же и есть «нравится»!');
      },
      async () => {
        await you.say_and_wait(
          'Силы полно, а лезет в мазохистки, чтобы её брали!',
        );
        await acute.say_and_wait('Силы полно? Вовсе нет～');
        await you.print_and_wait([
          y_call_a,
          ' мягко улыбается, будто вовсе не чувствует обиды.',
        ]);
        await you.print_and_wait([
          '…Боюсь, рано или поздно увижу, как ',
          y_call_a,
          ' выйдет на чемпионат по боксу.',
        ]);
      },
    ];
    if (you.sex_code > 0) {
      message.push(async () => {
        await you.say_and_wait('Развратная жопа, вставишь — и не выпускает!');
        await acute.say_and_wait([
          'Хе-хе～ это развратная жопа ',
          y_call_a,
          ' ～',
        ]);
        await you.print_and_wait([
          y_call_a,
          ' мягко улыбается, будто вовсе не чувствует обиды.',
        ]);
        await you.print_and_wait('…Не делай из этого титул!');
      });
    }
    if (acute.sex_code !== 1) {
      message.push(
        async () => {
          await you.say_and_wait('Ты грязная свинья!');
          await acute.say_and_wait('Не свинья, просто обычная умамусумэ❤️～');
          await you.print_and_wait([
            y_call_a,
            ' мягко улыбается, будто вовсе не чувствует обиды.',
          ]);
          await you.print_and_wait('…「Грязная」 так и не отрекла.');
        },
        async () => {
          await you.say_and_wait('Самка в течке без спроса!');
          await acute.say_and_wait('М-м… не на всех же я теку～');
          await you.print_and_wait([
            y_call_a,
            ' мягко улыбается, будто вовсе не чувствует обиды.',
          ]);
          await you.print_and_wait('…Хоть бы «самка» опровергла.');
        },
        async () => {
          await you.say_and_wait(
            'С виду взрослая и спокойная, а на тренировках точно думаешь пошлости, никчёмная бабка!',
          );
          await acute.say_and_wait(
            'Н-нм… на тренировке я сосредоточена～ пошлое лезет только иногда, в дупле сухого дерева～',
          );
          await you.print_and_wait([
            y_call_a,
            ' мягко улыбается, будто вовсе не чувствует обиды.',
          ]);
          await you.print_and_wait([
            '……',
            y_call_a,
            ' тайную сторону раскрыли!',
          ]);
        },
        async () => {
          await you.say_and_wait('Удобная киска навынос!');
          await acute.say_and_wait(
            'Гх-рм… киска навынос? Постоянно есть с доставки вредно～',
          );
          await you.print_and_wait([
            y_call_a,
            ' мягко улыбается, будто вовсе не чувствует обиды.',
          ]);
          await you.print_and_wait(
            '…Хотя бы в этот раз правда не знает, что такое 「киска навынос」.',
          );
        },
        async () => {
          await you.say_and_wait(
            'Никчёмная киска, шлёпнешь по жопе — сразу сжимает!',
          );
          await acute.say_and_wait(
            'Ну… слишком хорошо, так что ничего не поделаешь～',
          );
          await you.print_and_wait([
            y_call_a,
            ' мягко улыбается, будто вовсе не чувствует обиды.',
          ]);
          await you.print_and_wait('…Это «ничего не поделаешь»?');
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hit_anal(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Ладонь шлёпает по жопе, пышный зад в руке ходит волной.',
      ]);
      await you.print_and_wait([
        'Белая жопа теперь сплошь красная: просто коснись — и киска рядом сама дёргается.',
      ]);
      await you.print_and_wait([
        'Плесь! Ещё шлепок, гладкие губы дёргаются, блестящий сок вместе с развратным криком капает—',
      ]);
      await acute.say_and_wait([
        'Хх-ху-ху～❤️ не надо❤️ стану извращенкой, что кончает от шлепка по жопе❤️ слабость нашли❤️, совсем стану самкой～❤️',
      ]);
    } else {
      await you.print_and_wait([
        'Уже красная и опухшая, а жопа всё равно высоко.',
      ]);
      await you.print_and_wait([
        'Будто ещё мало: пышный зад нарочно качается к тебе влево-вправо.',
      ]);
      await acute.say_and_wait(['Слушай❤️ ', callname, ', тебе ещё мало, да?']);
      await acute.say_and_wait([
        'Я, слушай, вижу: на тебе много давления… так что, слушай, спускай его сюда вволю～❤️',
      ]);
      await acute.say_and_wait(['Потому что моё тело — твоё❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async hit_anal_hard(acute, you, callname) {
    await acute.print_and_wait(['Чем больнее, тем жарче.']);
    await acute.print_and_wait([
      'Жопа уже ничего не чувствует, а после каждого шлепка низ всё равно сотрясается.',
    ]);
    await acute.print_and_wait([
      'Как механизм: шлёпнешь пышный зад — и гладкая киска капает пошлой жижей.',
    ]);
    await acute.print_and_wait([
      'А кроткое лицо, прижатое к полу, кайф уже ломает: глаза кверху, язык наружу, стон в такт шлепкам.',
    ]);
    await acute.print_and_wait([
      'И в этом стоне — уже разбитые в клочья слова—',
    ]);
    await acute.say_and_wait(['Хх～ ху-ху～ ', callname, '…как счастливо❤️～']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hit_face_by_penis(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'Упирается в щёку член, от которого бьёт 「мужской жар」.',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' не шевелится, только смотрит на член и даёт мазать по щеке грязью с головки.',
      ]);
      await acute.say_and_wait(['Какой бодрый запах… это что сейчас—']);
      await you.print_and_wait([
        'Не успела ',
        y_call_a,
        ' договорить: член, обтёртый о щёку, даёт ',
        y_call_a,
        ' пощёчину.',
      ]);
      await you.print_and_wait([
        'Боль в лице, должно быть, ',
        acute.sex,
        ' чуть удивила. Но быстро ',
        y_call_a,
        ' выходит из удивления, будто что-то поняла, и мягко улыбается.',
      ]);
      await acute.say_and_wait(['Так вот… какой 『бодрый』 член❤️']);
    } else if (acute.sex_code !== 1) {
      await you.say_and_wait([
        'Дальше буду бить членом по лицу, пока ',
        y_call_a,
        ' не заплачет.',
      ]);
      await acute.print_and_wait(['Члену перед собой так объявляешь.']);
      await acute.say_and_wait(['Пока не заплачет… да?']);
      await acute.print_and_wait([
        'Только услышать такое — и в низу живота уже жар,',
      ]);
      await acute.print_and_wait([
        'не говоря, когда щёку членом трут, теребят, бьют пощёчину, а нос уже весь занят мужским жаром.',
      ]);
      await acute.say_and_wait(
        ['Пока не заплачешь, всё будут бить членом по лицу…'],
        true,
      );
      await acute.say_and_wait(['Плохо… кажется, совсем не выплакать❤️'], true);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} supporter 助手
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} call_s 奇锐骏对助手的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {PrintedSpan} y_call_s 玩家对助手的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_blow_job(
    acute,
    you,
    supporter,
    callname,
    call_s,
    y_call_a,
    y_call_s,
    is_first,
  ) {
    const message = [];
    if (is_first) {
      message.push(
        async () => {
          await you.print_and_wait([
            'Как только попросили взять в рот, ',
            y_call_a,
            ' сразу улыбаясь прижимает лицо к члену.',
          ]);
          await acute.say_and_wait([
            'М-м… ну ',
            callname,
            ' ничего не поделаешь～ тогда ',
            call_s,
            ', давай вместе 『поцеловаться』～',
          ]);
          await you.print_and_wait([
            'Сказав, под началом ',
            y_call_a,
            ', ',
            y_call_a,
            ' и ',
            y_call_s,
            ' розовыми губами с двух сторон целуют ствол, потом высовывают языки и скользят вокруг—',
          ]);
        },
        async () => {
          await you.print_and_wait([
            'Как только попросили взять в рот, ',
            y_call_s,
            ' ещё не успела опомниться, как ',
            y_call_a,
            ' уже быстро берёт головку в рот.',
          ]);
          await acute.say_and_wait([
            'Э-хе-хе… прости, ',
            call_s,
            ', я не уступлю, хорошо?',
          ]);
          await you.print_and_wait([
            'Говорит — и язык ',
            y_call_a,
            ' уже к борозде головки; низ обдаёт сладкой слабостью.',
          ]);
          await you.print_and_wait([
            'Дело сделано: ртом ещё ворчит, а ',
            y_call_s,
            ' сбоку высовывает язык и служит стволу…',
          ]);
        },
        async () => {
          await acute.say_and_wait([
            callname,
            ' слабость — у борозды головки, знаешь?… Да, вот так, ',
            call_s,
            ', хорошо получается～',
          ]);
          await you.print_and_wait([
            'Языком лижет ствол вверх-вниз ',
            y_call_a,
            ' и заодно учит, как с другой стороны сосать головку, ',
            y_call_s,
            '.',
          ]);
          await acute.say_and_wait([
            'Давай, ',
            call_s,
            '. ',
            callname,
            ' любит, когда глотают глубже…',
          ]);
          await you.print_and_wait([
            'Будто утешить, ',
            y_call_a,
            ' гладит ',
            y_call_s,
            ' по голове. И гладя, ',
            y_call_a,
            ' тихо сильнее давит, чтобы ',
            y_call_s,
            ' взяла ещё глубже…',
          ]);
        },
      );
    } else {
      message.push(
        async () => {
          await acute.say_and_wait('Н-нм н-нм… кх-кх… ха…');
          await you.print_and_wait([
            'По бокам члена ',
            y_call_a,
            ' и ',
            y_call_s,
            ' без остановки лижут и сосут ствол.',
          ]);
          await you.print_and_wait([
            'Не только тебе служат: иногда языки касаются — и обе служащие ещё жарче.',
          ]);
          await acute.say_and_wait([
            'Слушай, ',
            call_s,
            ', 『расслабимся』 вместе?',
          ]);
          await you.print_and_wait([
            y_call_a,
            ' подмигивает с намёком, а ',
            y_call_s,
            ' краснеет от стыда.',
          ]);
          await you.print_and_wait(
            'Скоро оба языка по борозде, вместе берут по полголовки. Служат члену и на кончиках языков путают слюну…',
          );
        },
        async () => {
          await acute.say_and_wait('Гх-мм… пу, плесь… гх-ха…');
          await you.print_and_wait([
            y_call_a,
            ' как зверь за едой яростно глотает то, что во рту, и снова и снова метит член своей слюной.',
          ]);
          await you.print_and_wait([
            'С каждым глотком земля ',
            y_call_s,
            ' всё уже. Чтобы совсем не вытеснить к яйцам, вспыхнувшая ',
            y_call_s,
            ' тоже быстрее лижет и сосёт, споря за член.',
          ]);
          await you.print_and_wait('На миг языки скрещиваются…');
        },
        async () => {
          await supporter.say_and_wait('Нн… нн!!!');
          await you.print_and_wait([
            'С помощью ',
            y_call_a,
            ', ',
            y_call_s,
            ' уже проглотила весь твой член.',
          ]);
          await you.print_and_wait([
            y_call_a,
            ' легко гладит ',
            y_call_s,
            ' по голове и помогает ',
            supporter.sex,
            ' медленно, уже проглотив весь член, служить горлом.',
          ]);
          await you.print_and_wait([
            'А с другой стороны ',
            y_call_a,
            ' наклоняется к корню члена.',
          ]);
          await acute.say_and_wait(['Тогда… давай, ', callname, '～']);
          await you.print_and_wait([
            'Сказав, ',
            y_call_a,
            ' тянется лицом, открывает ротик и легко кусает у корня—',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} supporter 助手
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} call_s 奇锐骏对助手的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {PrintedSpan} y_call_s 玩家对助手的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_suck_nipple(
    acute,
    you,
    supporter,
    callname,
    call_s,
    y_call_a,
    y_call_s,
    is_first,
  ) {
    const message = [];
    if (is_first) {
      message.push(
        async () => {
          await acute.say_and_wait([
            'Э-хе-хе… ',
            callname,
            ' и ',
            call_s,
            ' прямо как дети～',
          ]);
          await you.print_and_wait([
            'На розовых щеках всё та же мягкая улыбка.',
          ]);
          await you.print_and_wait([
            'Гладит ',
            callname,
            ' и ',
            call_s,
            ' по голове, Акют смотрит на детей перед собой с полной нежностью.',
          ]);
        },
        async () => {
          await you.print_and_wait([
            '…Наверное, розовый сосок сосали слишком сильно: ',
            y_call_a,
            ' надувает губы и трижды легко стукает тебя по голове.',
          ]);
          await acute.say_and_wait([
            'Не выпивай всё одна… ',
            call_s,
            ' тоже оставь, хорошо?',
          ]);
          await you.print_and_wait('На алых щеках полная розовая любовь.');
        },
      );
    } else {
      message.push(
        async () => {
          await acute.say_and_wait([
            'М-м～ не надо так спешить, грудь никуда не денется～',
          ]);
          await you.print_and_wait([
            'Гладит двоих, что сосут её соски, и в глазах ',
            y_call_a,
            ' мелькает материнская нежность.',
          ]);
          await acute.say_and_wait([
            'Но грудью не зацикливайтесь, хорошо? Есть и другое～',
          ]);
          await you.print_and_wait(
            'Так говорит, а пальцы теребят — и чья-то розовая щель внизу уже блестит каплями—',
          );
        },
        async () => {
          await acute.say_and_wait([
            callname,
            ' пьёт так вкусно. Как хорошо, ',
            call_s,
            '～',
          ]);
          await you.print_and_wait([
            'Гладит тебя по голове у груди, ',
            y_call_a,
            ' и ',
            y_call_s,
            ' мягко улыбается.',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async sleep_kiss(acute, you, y_call_a) {
    await you.print_and_wait([
      'Спокойно лежит ',
      y_call_a,
      ', дышит маленькими глотками.',
    ]);
    await you.print_and_wait(
      'Розовые губы то открываются, то смыкаются, будто чего-то ждут.',
    );
    await you.print_and_wait('Подходишь и тихо целуешь эти розовые губы—');
    await you.print_and_wait(
      'Поднимаешь голову: губы всё ещё ходят — и уже помечены твоим следом.',
    );
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async sleep_french_kiss(acute, you, y_call_a) {
    await you.print_and_wait([
      'Испачкать розовые губы мало: хочется коснуться ',
      y_call_a,
      ' её языка.',
    ]);
    await you.print_and_wait(
      'Лазутчик во рту зубы не встречает: спокойно открывает засов и доходит до языка.',
    );
    await you.print_and_wait([
      'Пока ',
      y_call_a,
      ' ещё спит, путаешь, теребишь, оставляешь след в глубине.',
    ]);
    await you.print_and_wait(
      'Когда отрываешься, нитка слюны держит кончики языков.',
    );
    await you.print_and_wait([
      '— Смотри, ',
      y_call_a,
      ', в поцелуе языком я тебя одолел.',
    ]);
    await you.print_and_wait([
      '…Так хочется крикнуть вслух, но ',
      y_call_a,
      ' этого знать нельзя.',
    ]);
  },
};
