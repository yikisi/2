/**
 * @file 爱丽速子 - 调教
 * @author 幽白書
 * @author Matemi
 */
const era = require('#/era-electron');

const { part_enum } = require('#/data/ero/part-const');

module.exports = {
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} y_call_t 玩家对爱丽速子的称呼
   */
  async kiss(tachyon, you, y_call_t) {
    await you.print_and_wait([y_call_t, ' мягкие губы ложатся на твои.']);
    await tachyon.say_and_wait('Чмок… чвак… чмок…');
    await you.print_and_wait(
      'Сначала только лёгкие клювы, потом языки сплетаются…',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async lure_by_tachyon(tachyon, you, y_call_t) {
    await you.print_and_wait([y_call_t, ' смотрит томно, завлекает.']);
    if (tachyon.sex_code > 0 && era.get('tcvar:32:发情') > 0) {
      await you.print_and_wait(
        'И верхние, и нижние губы в соке, ждут счастья быть заполненными…',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_success 调情是否成功
   */
  async lure(tachyon, you, callname, y_call_t, is_success) {
    await you.print_and_wait(['Тянешься гладить ', y_call_t, ' по жопе…']);
    if (is_success || era.get('tcvar:32:发情') > 0) {
      era.println();
      await tachyon.say_and_wait(['М-м… ', callname, '❤️']);
      era.println();
      await you.print_and_wait([
        'Чтобы было сподручнее гладить, ',
        y_call_t,
        ' сама подставляет жопу.',
      ]);
      await you.print_and_wait('Вся ладонь набирается мяса ягодиц…');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async pet_breast(tachyon, you) {
    await tachyon.say_and_wait('Так любишь грудь…❤️');
    era.println();
    await you.print_and_wait(
      'Спелые плоды перед глазами качаются в такт рукам.',
    );
    await you.print_and_wait(
      'Мягкая грудь под ловкими пальцами принимает любую форму.',
    );
    era.println();
    await tachyon.say_and_wait('А… не суй туда голову…');
    era.println();
    await you.print_and_wait(
      'Зарываешься лицом в ложбинку и глубоко вдыхаешь.',
    );
    await you.print_and_wait('Девичий запах смешался с течкой умамусумэ…');
    await you.print_and_wait('Плод уже спелый — можно пробовать.');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async finger_fuck(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await you.print_and_wait(
        'Стоит пальцам войти, смазка как из стока течёт из дырки.',
      );
      era.println();
      await you.say_and_wait([y_call_t, ' какая похотливая.']);
      await you.say_and_wait('Здесь уже так мокро.');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '…Такое… можно и не говорить вслух…',
      ]);
    } else {
      await tachyon.say_and_wait('М-м…❤️');
      era.println();
      await you.print_and_wait(
        'Пальцы будто в болото: мокрая почва ждёт, пока её разработают.',
      );
      era.println();
      await tachyon.say_and_wait(['Скорее… давай же, ', callname, '❤️']);
      era.println();
      await you.print_and_wait(
        'Прозрачная смазка капает из щели без остановки.',
      );
      await you.print_and_wait([
        'Жопа всё качается, соблазняя ',
        you.get_colored_name(),
        ' взять её.',
      ]);
      await you.print_and_wait('Похоже, к случке уже совсем готова.');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async prepare_virgin(tachyon, you, callname, y_call_t) {
    if (era.get('mark:32:同心') <= 1) {
      await tachyon.say_and_wait('…Жестоко…');
      era.println();
      await you.print_and_wait([
        'Щёки горят, но раз не отказала — ',
        y_call_t,
        ' говорит одно, хочет другое, да?',
      ]);
      await you.print_and_wait('Только так скучновато…');
      await you.print_and_wait('Может, попросишь вслух?');
      era.println();
      await tachyon.say_and_wait('Ну и гадость…');
      await tachyon.say_and_wait([
        'Пожалуйста… чтобы эта похотливая дырка, чей хозяин — ',
        callname,
        ', могла служить ',
        callname,
        '…',
      ]);
      await tachyon.say_and_wait('Играй… с моей блядской киской❤️');
      era.println();
      await you.print_and_wait('Сама же заставила сказать…');
      await you.print_and_wait([
        'Но по ',
        y_call_t,
        ' видно: от этих слов тоже вспыхнула…',
      ]);
    } else {
      await tachyon.say_and_wait([callname, '❤️']);
      era.println();
      await you.print_and_wait('Всё в капающей смазке.');
      await you.print_and_wait([y_call_t, ' раскрывает нежный ротик внизу.']);
      await you.print_and_wait('Ждёт, когда войдёт то, чего так давно хотела…');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async pet_anal(tachyon, you, callname, y_call_t) {
    await you.print_and_wait([
      'Смазав соком течки ',
      y_call_t,
      ', кладёшь руку к ',
      y_call_t,
      ' жопе.',
    ]);
    if (era.get('abl:32:肛门耐性') >= 3) {
      await you.print_and_wait(
        'Место, что должно быть выходом, от нажима само чуть раскрывается.',
      );
      await you.print_and_wait('Жопа сама качается в такт нажиму.');
      era.println();
      await tachyon.say_and_wait([callname, '❤️туда нельзя❤️']);
      era.println();
      await you.print_and_wait('Слова отказ, а голос просит продолжать.');
      await you.print_and_wait(
        'Дальше не идёшь — только дразнишь лёгким нажимом…',
      );
    } else {
      era.println();
      await tachyon.say_and_wait('Стой! Туда!');
      era.println();
      await you.print_and_wait([
        'Делаешь вид, что не слышал(а), и легко давишь пальцем на жопу ',
        y_call_t,
        '.',
      ]);
      await you.print_and_wait('Плотный вход дрожит, не привык.');
      await you.print_and_wait(
        'Но такая сырость как раз и стоит того, чтобы дрессировать, нет?',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async prepare_anal(tachyon, you, callname, y_call_t) {
    if (era.get('abl:32:肛门耐性') >= 3) {
      await tachyon.say_and_wait(
        'Скорее… накажи эту похотливую блядскую жопу❤️',
      );
      era.println();
      await you.print_and_wait([
        'Разводит дырку изо всех сил ',
        y_call_t,
        ', орёт похоть и умоляет вставить член',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Та, что ',
        callname,
        ' разработал(а)… жопа, которой ',
        callname,
        ' пользуется как вздумается… скорее, вставляй❤️',
      ]);
      await tachyon.say_and_wait([
        'Большим членом ',
        callname,
        ' жёстко… долби❤️',
      ]);
      await tachyon.say_and_wait([
        'Сделай из меня ту, что кончает одной жопой, похотливую ',
        tachyon.uma_sex_title,
        '❤️',
      ]);
      era.println();
      await you.print_and_wait([
        'Спокойно смотришь, как ',
        y_call_t,
        ' сходит с ума от просьб; складки ануса дрожат, иногда дуешь — смотришь, как ',
        y_call_t,
        ' трясётся всем телом.',
      ]);
      await you.print_and_wait([
        'Всегда такая властная, ',
        y_call_t,
        ' так умоляет — зрелище редкое.',
      ]);
      await you.print_and_wait(
        'И умоляет о том, что только для кайфа, без всякого смысла родить.',
      );
      await you.print_and_wait([
        'Только не доведи ',
        y_call_t,
        ' до настоящей ярости… но ещё чуть-чуть посмаковать можно…',
      ]);
    } else {
      await tachyon.say_and_wait(['…Правда так, ', callname, '…']);
      await tachyon.say_and_wait('Сюда… не войдёт же… точно…');
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' послушно руками разводит ягодицы, анус настежь.',
      ]);
      await you.print_and_wait('Но на лице всё ещё страх.');
      await you.print_and_wait(
        'И понятно: если вдруг сказать, что дырку для кала сделают дыркой для секса, любой бы испугался.',
      );
      await you.print_and_wait('Но…');
      era.println();
      await you.print_and_wait('Будет хорошо, не бойся.');
      await you.print_and_wait(['Хлопаешь ', y_call_t, ' по жопе в залог.']);
      await you.print_and_wait('Складки ануса вздрагивают, будто отвечают.');
    }
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async ask_blow_job(tachyon) {
    await tachyon.say_and_wait('Ну… ничего с тобой не поделать…');
    await tachyon.say_and_wait('Давай… как метку во рту оставить…');
    await tachyon.say_and_wait(
      'Чтобы пищевод, желудок — всё было в твоих факторах❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ask_deep_blow_job(tachyon, you, callname) {
    await tachyon.print_and_wait([
      'Смотришь на ту, кого признал(а), — ',
      you.phy_sex_title,
      ' несёт запах, от которого сходишь с ума.',
    ]);
    await tachyon.print_and_wait(
      'выдаёт просьбу, от которой сама сходит с ума.',
    );
    era.println();
    await tachyon.say_and_wait('М-м… ах❤️');
    era.println();
    await tachyon.print_and_wait(
      'будто хочет выжечь в мозгу: 「только я могу дать тебе такой кайф」…',
    );
    await tachyon.print_and_wait(
      'то и дело глотает слюну, чавкает пошло и сосёт изо всех сил.',
    );
    await tachyon.print_and_wait(
      'то и дело загоняет до горла, ловит, как пахнущая самцом шерсть щекочет нос, ловит ощущение, что жизнь и смерть у того в руках.',
    );
    await tachyon.print_and_wait([
      'жажда ',
      callname,
      ' и импульс так низко унижаться — больше в эту умную головку ничего не лезет…',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async force_blow_job(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait(['Что? ', callname, ', не войдёшь?']);
    await tachyon.say_and_wait(
      'Не боишься, что кончишь слишком быстро и тебя засмеют?',
    );
    await tachyon.say_and_wait(
      'Ничего, индивидуальный разброс я тоже могу уч… у… мпп… чмок…',
    );
    era.println();
    await you.print_and_wait(['не выдерживаешь, как ', y_call_t, ' дразнит.']);
    await you.print_and_wait([
      'целишься в ',
      y_call_t,
      ' — в болтливый рот — и силой вгоняешь член.',
    ]);
    await you.print_and_wait(
      'грубо долбишь туда-сюда по влажному скользкому рту.',
    );
    await you.print_and_wait('этот рот… для слов и правда слишком жалко…');
    await you.print_and_wait('как дырка для члена он стоит куда больше.');
    if (
      era.get('talent:32:喜欢责骂') > 0 ||
      era.get('talent:32:喜欢痛苦') > 0
    ) {
      era.println();
      await you.print_and_wait('М?');
      await you.print_and_wait(
        'сам того не замечая — кроме ощущения, что долбишь рот как вздумается.',
      );
      await you.print_and_wait([
        y_call_t,
        ' тоже начинает ртом подыгрывать и сама сосёт, даря кайф.',
      ]);
      era.println();
      await tachyon.say_and_wait('ещё… ещё насилуй… мой грязный рот…', true);
      era.println();
      await you.print_and_wait([y_call_t, ' смотрит блаженно…']);
    }
  },
  /**
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async force_deep_blow_job(you, y_call_t) {
    await you.print_and_wait([
      'Хоть это и насилие, ',
      y_call_t,
      ' сама сосёт в ответ.',
    ]);
    await you.print_and_wait('языком обвивает член и ведёт его вглубь горла.');
    await you.print_and_wait(
      'блаженное лицо снова и снова будит желание мучить…',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async blow_job(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await you.print_and_wait('член дёргается и встаёт.');
      await you.print_and_wait([
        'вонь спермы из уретры бьёт ',
        y_call_t,
        ' в нос.',
      ]);
      era.println();
      await tachyon.say_and_wait('хе-хе, дёрнулся');
      await tachyon.say_and_wait([callname, '…так ждёшь мой рот?']);
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' смотрит снизу вверх на ',
        you.get_colored_name(),
        ' — и томно говорит.',
      ]);
      await you.print_and_wait(
        'безумные глаза, как жалюзи, сейчас светятся похотливым зовом.',
      );
    } else if (
      Array.isArray(era.get('tcvar:0:接近高潮')) &&
      era.get('tcvar:0:接近高潮').includes(part_enum.penis)
    ) {
      await you.print_and_wait('по языку чувствуешь, как бёдра ускоряются.');
      await you.print_and_wait([
        y_call_t,
        ' ускоряется, лицом снова и снова насаживается на ствол; щека, надутая членом, дарит головке ещё больше кайфа.',
      ]);
      await you.print_and_wait(
        'двойной кайф — долбёжка и сосание — топит тебя в блаженстве…',
      );
      era.println();
      await tachyon.say_and_wait('М-м… м-чмок… м-чвак…');
      await tachyon.say_and_wait([callname, ' …всё… до капли…']);
    } else {
      await you.print_and_wait(
        'в маленьком рту влажный скользкий язык без остановки кружит по головке, бьёт точечно.',
      );
      await you.print_and_wait([
        'беспрерывно двигаешь бёдрами, чтобы член ещё глубже чувствовал, какой кайф даёт ',
        y_call_t,
        '.',
      ]);
    }
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async ask_hand_job(tachyon) {
    await tachyon.say_and_wait('Ну и…');
    await tachyon.say_and_wait('всё равно хочешь кончить мне на лицо, да?❤️');
    await tachyon.say_and_wait(
      'можно… пусть моё лицо покроет вонючая сперма свинки-куна…',
    );
    await tachyon.say_and_wait('какая густая вонь❤️');
    await tachyon.say_and_wait('кончай на меня сколько влезет❤️');
    if (era.get('tcvar:32:喜欢责骂') || era.get('tcvar:32:喜欢痛苦')) {
      await tachyon.say_and_wait(
        'можешь тереться мной как тряпкой, как вздумается❤️',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async ask_tit_job(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait(
      'ума не приложу, что хорошего в этих кусках жира…',
    );
    await tachyon.say_and_wait('можно, давай❤️');
    era.println();
    await you.print_and_wait([
      'член в тисках груди от того, как ',
      y_call_t,
      ' мнёт сиськи, становится ещё твёрже.',
    ]);
    await you.print_and_wait('но только так… мало…');
    era.println();
    await you.print_and_wait([
      'хватаешь двумя руками грудь ',
      y_call_t,
      ' и сдавливаешь сиськи вокруг ствола.',
    ]);
    await you.print_and_wait([
      'до конца берёшь стоящую перед тобой подопечную ',
      tachyon.uma_sex_title,
      ' и используешь как секс-инструмент…',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_tit(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait('А, стой…');
      era.println();
      await you.say_and_wait([
        'не слушаешь ',
        y_call_t,
        ' и яростно долбишь ',
        y_call_t,
        ' в упругие сиськи.',
      ]);
      await you.print_and_wait([
        'по ходу ',
        y_call_t,
        ' будто полностью становится сливом для похоти и покорно слушается.',
      ]);
      await you.print_and_wait([
        'ощущение, что свою подопечную ',
        tachyon.uma_sex_title,
        ' используешь как инструмент, заставляет тебя дрожать от возбуждения…',
      ]);
    } else {
      await tachyon.say_and_wait('М-н…❤️');
      era.println();
      await you.print_and_wait(
        'сначала поднимаешь всю грудь, трёшь, жмёшь — потом бульк, отпускаешь на место.',
      );
      await you.print_and_wait('потом долбишь без оглядки, просто жестоко…');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_you_erect 玩家是否勃起
   */
  async tit_job(tachyon, you, callname, y_call_t, is_you_erect) {
    if (is_you_erect) {
      await you.print_and_wait([
        'берёшь грудь ',
        y_call_t,
        ' и обхватываешь ею член, уже до боли твёрдый.',
      ]);
    }
    await you.print_and_wait([y_call_t, ' ладонями собирает свою грудь.']);
    await you.print_and_wait(
      'дырка из сисек широко обхватывает ствол и месит его.',
    );
    await you.print_and_wait('вытекающий предэякулят смазывает ход.');
    era.println();
    await tachyon.say_and_wait([callname, '…хорошо?❤️']);
    era.println();
    await you.print_and_wait('какой смысл отвечать?');
    await you.print_and_wait('скорее: есть ли что-то лучше этого?');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async tit_and_blow_job(tachyon, callname) {
    await tachyon.print_and_wait([
      callname,
      ' чуть подаёт бёдра вверх — головка, что только выглядывала, мигом упирается ей в шею.',
    ]);
    await tachyon.print_and_wait(
      'предэякулят с головки капает, от тычков члена мажет от подбородка до шеи и стекает в дырку груди, добавляет скольжения.',
    );
    await tachyon.print_and_wait(
      'пошлые звуки трения члена о грудь смешиваются с шлепками по сиськам.',
    );
    await tachyon.print_and_wait('вонь спермы в комнате густеет.');
    era.println();
    await tachyon.say_and_wait('чмок… чмок-чмок…');
    era.println();
    await tachyon.print_and_wait('во рту сухо… язык пересох…');
    await tachyon.print_and_wait('столько сока — если стечёт… слишком жалко…');
    await tachyon.print_and_wait(
      'так что поцеловать и взять в рот — само собой, да?…',
    );
    await tachyon.print_and_wait(
      'как головку смачивает слюна, грудь скользит ещё легче…',
    );
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async ask_non_penetrative(tachyon) {
    await tachyon.say_and_wait('хе-хе, как обезьяна…');
    await tachyon.say_and_wait(
      'нет, кто так только вертит задом… скорее как щенок❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_lubrication 爱丽速子阴道是否润滑
   */
  async self_finger_fuck(tachyon, you, callname, y_call_t, is_lubrication) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait(['смотри… ', callname, '…']);
      await tachyon.say_and_wait('ну как моя киска выглядит?❤️');
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' ловкими пальцами играет со своей киской и сама себе дарит кайф.',
      ]);
      await you.print_and_wait(
        'ноги врозь, пальцы как на приманку лезут в дырку всё глубже.',
      );
      await you.print_and_wait([
        tachyon.sex,
        ' тянет из киски похотливую нить: кончики пальцев на свету блестят.',
      ]);
      if (is_lubrication) {
        era.println();
        await tachyon.say_and_wait('уже готова… не вставишь?❤️');
        era.println();
        await you.print_and_wait(
          'низ насквозь пропитан смазкой — трахать можно в любой миг…',
        );
      }
    } else {
      await tachyon.say_and_wait([callname, '…❤️']);
      await tachyon.say_and_wait('быстрее… вставь❤️');
      era.println();
      await you.print_and_wait([y_call_t, ' сама разводит ягодицы.']);
      await you.print_and_wait(
        'мокрая киска и чуть дышащий анус — самка перед тобой подставляет их почти как сдачу.',
      );
      if (is_lubrication) {
        era.println();
        await you.print_and_wait('хлюп…');
        await you.print_and_wait(
          'киска чавкает, два пальца без остановки раздвигают и смыкают.',
        );
        await you.print_and_wait(
          'пошлый сок медленно течёт из раскрытого мяса…',
        );
      }
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait(['Вах, ', callname, ' стой…❤️']);
      era.println();
      await you.print_and_wait([
        'не сдерживаешься, валишь ',
        y_call_t,
        ' на пол.',
      ]);
      await you.print_and_wait([
        tachyon.sex,
        ' бьётся жопой и бёдрами, от входа их сводит без остановки…',
      ]);
    } else {
      await you.print_and_wait(
        'киска и до входа была сверхчувствительной — после удара мелкий оргазм идёт снова и снова.',
      );
      await you.print_and_wait([
        'каждый толчок заставляет ',
        y_call_t,
        ' трястись без контроля, а она всё равно сжимает член и не отпускает…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait(
        'эта поза — та, в которой самца принимают целиком.',
      );
      await tachyon.say_and_wait('с точки зрения эргономики… нх!');
      era.println();
      await you.print_and_wait([
        'пока ',
        y_call_t,
        ' несёт ахинею, ловишь момент — и входишь в киску, которую ',
        tachyon.sex,
        ' держит нараспашку.',
      ]);
      era.println();
      await you.say_and_wait('что, язык проглотила?');
      await you.print_and_wait(['нарочно спрашиваешь ', y_call_t, '.']);
      await you.print_and_wait([
        y_call_t,
        ' краснеет и тонет в радости, что её заполнили до конца.',
      ]);
    } else {
      await tachyon.say_and_wait('как глубоко❤️ одним разом до краёв…❤️');
      era.println();
      await tachyon.print_and_wait(
        'член яростно входит в дырку и пробивает киску, у которой оборона давно пала.',
      );
      await tachyon.print_and_wait(
        'тесная самчья дырка радостно сжимается и сосёт член…',
      );
    }
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async hug_standing(tachyon) {
    await tachyon.say_and_wait('так люблю❤️');
    await tachyon.say_and_wait('как у подопытной: чистый кайф случки❤️');
    await tachyon.say_and_wait(
      'быстрее, быстрее, как зверь, залей мою блядскую дырку для секса❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async stimulate_g_spot(tachyon, callname) {
    await tachyon.say_and_wait('ах❤️');
    await tachyon.say_and_wait(
      'нельзя❤️ мозг сломается❤️ так хорошо❤️ кончаю❤️ сейчас кончу❤️ сейчас и мозги вместе выйдут❤️',
    );
    era.println();
    await tachyon.print_and_wait(
      'каждый раз, как глубоко бьёт в точку G, в голове белое поле.',
    );
    await tachyon.print_and_wait([
      'в голове только случка с ',
      callname,
      ' , кайф, когда ',
      callname,
      ' жёстко насилует…',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async ask_stimulate_glans_by_virgin(tachyon, you) {
    await tachyon.say_and_wait('жестоко…');
    era.println();
    await you.print_and_wait(
      'орёт «жестоко», а честная киска всё равно чмок — сжимается ещё туже, чтобы член, который играет в отказника, получил её круговую службу дыркой…',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hit_anal(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
        await you.print_and_wait([
          'сильно шлёпаешь ',
          y_call_t,
          ' по жопе — звонкий отклик.',
        ]);
        await you.print_and_wait(
          'на белых ягодицах остаётся бледный след ладони.',
        );
        era.println();
        await tachyon.say_and_wait(['Больно!?… ', callname, '…?']);
        era.println();
        await you.print_and_wait([
          y_call_t,
          ' жалко скулит, а зад всё равно задирает выше — будто и мысли нет сопротивляться.',
        ]);
      } else if (era.get('talent:32:喜欢痛苦') > 0) {
        await you.print_and_wait('ну и шлюха…');
        await you.print_and_wait([
          'сильно шлёпаешь ',
          y_call_t,
          ' по жопе — звонкий отклик.',
        ]);
        await you.print_and_wait('на одной ягодице бледный след ладони.');
        era.println();
        await tachyon.say_and_wait('сильнее… ещё сильнее, пожалуйста…❤️');
        era.println();
        await you.print_and_wait([y_call_t, ' стонет пошло.']);
        await you.print_and_wait(
          'румяная жопа тихо крутится влево-вправо, ждёт, когда её ещё помнут.',
        );
        await you.print_and_wait('не удерживаешься, мнёшь рукой, и потом…');
        era.println();
        await you.print_and_wait('Шлёп!');
        era.println();
        await tachyon.say_and_wait('Ах~~❤️');
        era.println();
        await you.print_and_wait(
          'сочная волна зада взлетает, следом — томный упрёк.',
        );
        await you.print_and_wait(
          'теперь обе ягодицы как персики: свежие, вот-вот брызнут.',
        );
      } else {
        await you.print_and_wait([
          'сильно шлёпаешь ',
          y_call_t,
          ' по жопе — звонкий отклик.',
        ]);
        await you.print_and_wait(
          'на белых ягодицах остаётся бледный след ладони.',
        );
        era.println();
        await tachyon.say_and_wait(['Больно!?… ', callname, '…?']);
        era.println();
        await you.print_and_wait([y_call_t, ' невольно вскрикивает от боли.']);
        await you.print_and_wait(
          'жалко, да… но такой зад — не шлёпнуть было бы растранжирить, нет?',
        );
      }
    } else {
      await you.print_and_wait(
        'без остановки шлёпаешь крутую белую жопу Тахион — звонкий отклик.',
      );
      await you.print_and_wait('теперь она вся в алых следах ладоней.');
      await you.print_and_wait([
        'с каждым шлепком ',
        y_call_t,
        ' не удерживается: из щели между ног прёт смазка и незаметно мажет тебе руки…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async hit_face(tachyon, you, callname, y_call_t) {
    await you.print_and_wait(['даёшь ', y_call_t, ' пощёчину.']);
    if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
      await you.print_and_wait([
        y_call_t,
        ' пунцовеет щекой и снизу смотрит покорно.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '…нет, если господин ещё хочет бить…',
      ]);
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' двумя руками берёт ',
        you.get_colored_name(),
        ' за руку — ',
        tachyon.sex,
        ' подставляет другую щеку…',
      ]);
    } else if (era.get('talent:32:喜欢痛苦') > 0) {
      await you.print_and_wait([
        y_call_t,
        ' пунцовеет щекой, двумя руками берёт ',
        you.get_colored_name(),
        ' за руку и тихо лижет пальцы, сдаваясь.',
      ]);
      era.println();
      await tachyon.say_and_wait('господин… дай свинье ещё награду…❤️');
      era.println();
      await you.print_and_wait([
        'и снова — ',
        tachyon.sex,
        ' получает пощёчину.',
      ]);
      await you.print_and_wait([
        'розовый отпечаток ладони мгновенно расцветает на щеке — там, где ',
        tachyon.sex,
        ' подставляет лицо.',
      ]);
    } else {
      await you.print_and_wait('смотрят на тебя с недоверием.');
      era.println();
      await tachyon.say_and_wait([callname, '…почему…']);
      era.println();
      await you.print_and_wait(['трогает краснеющую щеку — ', y_call_t, '.']);
      await you.print_and_wait([
        'жалко, да… но вид, как ',
        tachyon.sex,
        ' делает такое жалостливое лицо, всё равно возбуждает до тряски…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async use_love_eggs_in_anal(tachyon, you, y_call_t) {
    await tachyon.say_and_wait('ооо❤️ жопа❤️ нельзя❤️');
    era.println();
    await you.print_and_wait([
      'в миг, как яйцо входит, вибрация в кишках заставляет ',
      y_call_t,
      ' запрокинуть голову.',
    ]);
    era.println();
    await tachyon.say_and_wait('нельзя❤️ тело❤️ станет странным❤️');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async ask_fuck(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait([callname, '…быстрее, быстрее❤️']);
    await tachyon.say_and_wait('сильнее… заполни мою самчью дырку❤️');
    era.println();
    await you.print_and_wait([
      y_call_t,
      ' задирает жопу, бёдра без остановки ходят.',
    ]);
    await you.print_and_wait('жирная жопа пляшет пошло и разжигает похоть…');
  },
  betrayed1: (() => {
    /**
     * 机制上属于曼城茶座的调教结束事件
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     */
    const f = async (tachyon, coffee, you, callname, callname_25) => {
      await tachyon.say_and_wait(['ха-а… ха-а…']);
      era.println();

      await tachyon.print_and_wait(['руки и ноги горят.']);
      await tachyon.print_and_wait(['голова горит.']);
      era.println();

      await tachyon.say_and_wait(['сс… ха-а… ха-а…']);
      era.println();

      await tachyon.print_and_wait(['грудь пылает.']);
      await tachyon.print_and_wait(['промежность жжёт.']);
      era.println();

      await tachyon.say_and_wait([callname, '…', callname, '…']);
      era.println();

      await tachyon.print_and_wait(['горло горит.']);
      await tachyon.print_and_wait(['кончик языка горит.']);
      await tachyon.print_and_wait(['поэтому невольно зову.']);
      await tachyon.print_and_wait(['источник, от которого горит всё тело.']);
      era.println();

      await tachyon.say_and_wait([callname, '…дай мне… умоляю…']);
      era.println();

      await tachyon.print_and_wait([
        'в дымке ',
        you.sex,
        ' возникает перед глазами.',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        ' — руки, ',
        you.sex,
        ' — глаза, ',
        you.sex,
        ' — рот, ',
        you.sex,
        ' — кожа.',
      ]);
      await tachyon.print_and_wait([you.sex, ' — и всё в нём сводит с ума.']);
      await tachyon.print_and_wait([
        'поэтому вся жажда — ',
        you.sex,
        ', всё желание — ',
        you.sex,
        '.',
      ]);
      await tachyon.print_and_wait([
        'хочется, чтобы ',
        you.sex,
        ' мучил, чтобы ',
        you.sex,
        ' сломал.',
      ]);
      await tachyon.print_and_wait([
        'всё равно… тело, которое уже не побежит.',
      ]);
      await tachyon.print_and_wait([
        'бросить всё и утонуть в похоти — какая разница.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '…трогай меня… обними… целуй… люби…',
      ]);
      era.println();

      await tachyon.print_and_wait(['аа, ласка с напором.']);
      await tachyon.print_and_wait([
        'хотя вместо него работают мои тонкие слабые пальцы.',
      ]);
      await tachyon.print_and_wait([
        'если бы сейчас ',
        you.sex,
        ' гладил пальцами.',
      ]);
      await tachyon.print_and_wait(['если бы ', you.sex, ' лизал языком.']);
      await tachyon.print_and_wait(['если бы ', you.sex, ' утешил поцелуем.']);
      await tachyon.print_and_wait([
        'если бы ',
        you.sex,
        ' заполнил изнутри и снаружи, ',
        you.sex,
        ' ласкал.',
      ]);
      era.println();

      await tachyon.print_and_wait([
        'в галлюцинации ',
        you.sex,
        ' прижимается телом.',
      ]);
      era.println();

      await tachyon.print_and_wait(['да.']);
      await tachyon.print_and_wait(['дай, скорее дай.']);
      await tachyon.print_and_wait(['я, у которой уже нет цены как бегуна.']);
      await tachyon.print_and_wait([
        'осталась только цена женщины, разве нет.',
      ]);
      await tachyon.print_and_wait(['заполни меня.']);
      await tachyon.print_and_wait(['залей меня.']);
      await tachyon.print_and_wait([
        'пустоту внутри залей своей любовью до краёв, пока не польётся.',
      ]);
      await tachyon.print_and_wait(['сделай меня женщиной только твоей.']);
      await tachyon.print_and_wait(['и сам стань… только моим…']);
      era.println();

      await coffee.say_and_wait(['м-м… ах… ', callname_25, '…пожалуйста…']);
      era.println();

      await tachyon.print_and_wait([
        'бред в груди рвёт стон из соседней лаборатории.',
      ]);

      era.drawLine();

      await tachyon.print_and_wait(['фантазия перед глазами меняет форму.']);
      await tachyon.print_and_wait([
        'тот, кого ',
        you.sex,
        ' прижимает, вмиг меняет облик.',
      ]);
      await tachyon.print_and_wait([
        'чёрные волосы, золотые глаза — не меняется только любовь в взгляде.',
      ]);
      era.println();

      await coffee.say_and_wait([callname_25, '…заполни меня… пожалуйста.']);
      era.println();

      await tachyon.print_and_wait([
        'будто наваждение: в фантазии ',
        you.sex,
        ' возбуждён даже сильнее, чем когда был со мной.',
      ]);
      await tachyon.print_and_wait([
        'хочется всё отрицать, но это и есть реальность за стеной.',
      ]);
      await tachyon.print_and_wait([
        '…жалкая ',
        tachyon.uma_sex_title,
        ', реальность, которой тешишь себя, подставляя себя на то место.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        'не надо… ',
        callname,
        '…умоляю… смотри на меня… обними… люби…',
      ]);
      era.println();

      await tachyon.print_and_wait([
        'даже невольная мольба сама падает шёпотом.',
      ]);
      await tachyon.print_and_wait([
        'страх, что любящая пара за стеной услышит.',
      ]);
      await tachyon.print_and_wait([
        'увидят, что ',
        tachyon.get_colored_name(),
        ' — такая жалкая ',
        tachyon.uma_sex_title,
        '.',
      ]);
      era.println();

      await tachyon.print_and_wait([
        you.couple_title,
        ' — вот кто друг другу пара.',
      ]);
      await tachyon.print_and_wait([
        you.couple_title,
        ' — вот кто подходит лучше всех.',
      ]);
      await tachyon.print_and_wait([
        'нежный тренер и та, в ком вспыхнула любовь и для кого он воплотил мечту, — ',
        tachyon.uma_sex_title,
        '.',
      ]);
      await tachyon.print_and_wait([
        'рядом с этим своё существование скорее как третье лишнее.',
      ]);
      era.println();

      await tachyon.print_and_wait([
        'те двое в галлюцинации выглядят так сладко.',
      ]);
      await tachyon.print_and_wait([
        'тоже хочется… стать такой же кайфовой, как ',
        you.couple_title,
        '.',
      ]);
      era.println();

      await tachyon.print_and_wait(['руки сами, не спросясь, тянутся вниз.']);
      await tachyon.print_and_wait(['нельзя…']);
      await tachyon.print_and_wait(['нельзя…']);
      await tachyon.print_and_wait([
        'внутри предчувствие: тронешь сейчас — и пути назад не будет.',
      ]);
      await tachyon.print_and_wait([
        'если материалом бреда станет картина, где любимый — это ',
        you.sex,
        ', а рядом другая женщина.',
      ]);
      await tachyon.print_and_wait(['пути назад не будет…']);
      await tachyon.print_and_wait(['поэтому…']);
      await tachyon.print_and_wait(['поэтому стой…']);
      era.println();

      await coffee.say_and_wait([
        callname_25,
        '…сильнее… люби меня… ещё сильнее.',
      ]);
      era.println();

      await tachyon.print_and_wait(['аа…']);
      await tachyon.print_and_wait(['всё, не могу.']);
      await tachyon.print_and_wait([
        'в миг, как стон из соседней комнаты проходит сквозь стену в ухо.',
      ]);
      await tachyon.print_and_wait(['низ тоже выплёскивает мутную жидкость.']);
      await tachyon.print_and_wait(['ведь… даже не трогала.']);
      await tachyon.print_and_wait(['ведь если бы вытерпела…']);
      era.println();

      await tachyon.print_and_wait(['пути назад нет.']);
      await tachyon.print_and_wait([
        'будто разом забрать всё, что только что терпела.',
      ]);
      await tachyon.print_and_wait([
        'жестоко, силой, которую можно назвать растоптать.',
      ]);
      await tachyon.print_and_wait(['цеплять, ковырять, мять, вставлять.']);
      await tachyon.print_and_wait(['всем сразу: стимул, боль, кайф.']);
      await tachyon.print_and_wait(['утопить себя в похоти.']);
      await tachyon.print_and_wait(['пустить жар обнять тело.']);
      era.println();

      await tachyon.say_and_wait(['так хорошо… так хорошо…']);
      era.println();

      await tachyon.print_and_wait([
        'в голове ',
        you.couple_title,
        ' всё ещё любятся.',
      ]);
      await tachyon.print_and_wait([
        'в голове я смотрю, как ',
        you.couple_title,
        ' любятся, и тихо грызу палец.',
      ]);
      await tachyon.print_and_wait(['низ снова бьёт струёй.']);
    };
    f.title =
      'Aromatic Hydrocarbon Addiction (аддикция к ароматическим углеводородам)';
    return f;
  })(),
  betrayed2: (() => {
    /**
     * 机制上属于曼城茶座的调教结束事件
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {string} y_call_t 玩家对爱丽速子的称呼
     * @param {PrintedSpan} item 「嫁衣」道具
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      callname_25,
      c_call_t,
      y_call_t,
      item,
    ) => {
      const ret = [];
      await tachyon.print_and_wait(['так хорошо, так сладко.']);
      await tachyon.print_and_wait([
        'сегодня я снова слушаю стоны ',
        callname,
        ' и ',
        t_call_c,
        ' как гарнир к дрочке.',
      ]);
      await tachyon.print_and_wait(['так утонуть в любви, может, и не худо…']);
      era.println();

      await tachyon.print_and_wait(['вдруг стоны случки смолкают.']);
      await tachyon.print_and_wait([
        'будто остановили на самом краю — я сгораю от нетерпения.',
      ]);
      await tachyon.print_and_wait(['почему не продолжают.']);
      await tachyon.print_and_wait(['почему остановились.']);
      await tachyon.print_and_wait(['со стонами в комнате разом тишина.']);
      era.println();

      await tachyon.print_and_wait(['топ.']);
      await tachyon.print_and_wait(['топ.']);
      await tachyon.print_and_wait(['топ.']);
      await tachyon.print_and_wait([
        'поэтому… шаги за дверью слышны особенно ясно.',
      ]);
      await tachyon.print_and_wait(['шаги останавливаются у двери.']);
      await tachyon.print_and_wait(['что хочет тот, кто за дверью.']);
      await tachyon.print_and_wait(['откроет?']);
      await tachyon.print_and_wait([
        'если откроет — я вот такая, такая жалкая.',
      ]);
      await tachyon.print_and_wait(['меня… меня увидят.']);
      await tachyon.print_and_wait([
        'надо спрятаться, так нельзя, надо найти куда спрятаться.',
      ]);
      await tachyon.print_and_wait(['поэтому… почему тогда руки снова сами…']);
      era.println();

      await tachyon.print_and_wait(['щёлк.']);
      await tachyon.print_and_wait(['аа… открыли.']);
      await tachyon.print_and_wait([
        'когда в дверях появляется силуэт — чёрные волосы, золотые глаза.',
      ]);
      await tachyon.print_and_wait([
        'оргазм бьёт на пределе: самый горячий из всех до сих пор.',
      ]);
      era.println();

      await coffee.say_and_wait(['…как жалко, ', c_call_t, '.']);
      await tachyon.say_and_wait([t_call_c, ', почему…']);
      await coffee.say_and_wait([
        'кричишь так громко… только не ',
        tachyon.uma_sex_title,
        ', ',
        callname_25,
        ' мог(ла) не заметить.',
      ]);
      era.println();

      await tachyon.print_and_wait(['промах.']);
      await tachyon.print_and_wait(['нашли.']);
      await tachyon.print_and_wait(['что делать, как быть.']);
      await tachyon.print_and_wait([
        'жалко то, о чём сейчас думаешь в первую очередь.',
      ]);
      await tachyon.print_and_wait([
        'а самое главное… как умолить ',
        t_call_c,
        ' разрешить слушать, как ',
        you.couple_title,
        ' занимаются любовью, и тем себя гладить.',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, ' ', you.sex, '…']);
      await coffee.say_and_wait([
        'не бойся… я сказала ',
        callname_25,
        ', что вышла за вещью.',
      ]);
      await coffee.say_and_wait([
        c_call_t,
        '…пробирку на поясе… можно одну, пожалуйста?',
      ]);
      await coffee.say_and_wait(['ты же знаешь… какую я хочу.']);
      era.println();

      await tachyon.print_and_wait(['смотришь на неё тупо.']);
      await tachyon.print_and_wait([
        'на поясе… то, чего ',
        t_call_c,
        ' может захотеть…',
      ]);
      await tachyon.print_and_wait([
        'стимулятор овуляции, который сама смешала?',
      ]);
      await tachyon.print_and_wait([
        'сама, не спросясь, вынимаешь с пояса… лекарство, которое должно было быть только для тебя и ',
        callname,
        '.',
      ]);
      era.println();

      await coffee.say_and_wait([c_call_t, ', можно… дашь мне?']);
      era.println();

      await tachyon.print_and_wait(['она понимает, что говорит?']);
      await tachyon.print_and_wait([
        'хочет, чтобы ты сама отдала зелье, которое на сто процентов ведёт к беременности.',
      ]);
      await tachyon.print_and_wait([
        'своими руками поднести, своими руками отдать.',
      ]);
      await tachyon.print_and_wait([
        'пусть идёт любиться с тем, кого любишь ты, и выносит ребёнка, который должен был быть твоим.',
      ]);
      await tachyon.print_and_wait([
        'можно сказать: поставить тебя под ноги и унизить до дна.',
      ]);
      await tachyon.print_and_wait(['но почему… рука всё равно тянется.']);
      await tachyon.print_and_wait(['почему тело так горит.']);
      era.println();

      await coffee.say_and_wait([c_call_t, '…ты так далеко, я же не достану.']);
      await coffee.say_and_wait(['подойди, протяни.']);
      era.println();

      await tachyon.print_and_wait(['не надо.']);
      await tachyon.print_and_wait(['не слушай её.']);
      await tachyon.print_and_wait(['швырни зелье.']);
      await tachyon.print_and_wait(['или выпей сама.']);
      await tachyon.print_and_wait([
        'всё равно ',
        callname,
        ' за стеной… выпьешь — и заберёшь своё.',
      ]);
      await tachyon.print_and_wait(['да, вот так.']);
      await tachyon.print_and_wait([
        'сейчас идёшь к двери не затем, чтобы отдать ей зелье, а затем… ради себя…',
      ]);
      await tachyon.print_and_wait(['э… рука, почему…']);
      era.println();

      await coffee.say_and_wait([
        '…не думала, что ты и правда зайдёшь так далеко.',
      ]);
      await coffee.say_and_wait(['правда… тошнотворно.']);
      await coffee.say_and_wait(['но я не из тех, кто добивает…']);
      await coffee.say_and_wait(['только слушать — наверное, тяжело?']);
      era.println();

      await tachyon.print_and_wait([
        'будто в миг, как отдала зелье, отдала и душу.',
      ]);
      await tachyon.print_and_wait([
        'только плетёшься за силуэтом в лабораторию, половина которой должна была быть твоей.',
      ]);
      await tachyon.print_and_wait([
        'но… даже после такого, когда видишь ',
        callname,
        ', разум сам возвращается.',
      ]);
      era.println();

      await tachyon.say_and_wait([t_call_c, '…']);
      await coffee.say_and_wait([
        'не бойся… друг уже закрыл ',
        callname_25,
        ' глаза и уши… сейчас ',
        you.sex,
        ' не видит нас и не слышит.',
      ]);
      await tachyon.say_and_wait(['ты хочешь сказать…']);
      await coffee.say_and_wait([
        'выбор оставляю ',
        c_call_t,
        ' … войти — или смотреть одной?',
      ]);
      await tachyon.say_and_wait(['…']);
      era.println();

      await tachyon.print_and_wait(['последний шанс.']);
      await tachyon.print_and_wait([
        'последний… если сейчас согласиться, ещё можно вдвоём.',
      ]);
      await tachyon.print_and_wait([
        'если не ответить — второго раза не будет.',
      ]);
      await tachyon.print_and_wait(['такое предчувствие.']);
      era.println();

      await tachyon.print_and_wait(['поэтому…']);
      era.printButton('согласиться', 1, { color: tachyon.color });
      era.printButton('молчать', 2, { color: tachyon.color });
      ret.push(await era.input());
      if (ret[0] === 1) {
        await tachyon.print_and_wait(['кто лучше пара — это ', t_call_c, '.']);
        await tachyon.print_and_wait([
          'кто ',
          you.sex,
          ' выберет — тоже ',
          t_call_c,
          '.',
        ]);
        await tachyon.print_and_wait([
          'если ',
          you.sex,
          ' выиграет — я должна отказаться… да?',
        ]);
        era.println();

        await tachyon.print_and_wait(['не понимаю, не могу понять.']);
        await tachyon.print_and_wait([
          'любить человека — вот такое непонятное дело.',
        ]);
        await tachyon.print_and_wait([
          'по разуму здесь надо бы от души благословить ',
          you.couple_title,
          '.',
        ]);
        await tachyon.print_and_wait(['а не, а не…']);
        era.println();

        await tachyon.print_and_wait(['сама не заметила.']);
        await tachyon.print_and_wait([
          'снова смотришь на кровать — ',
          you.sex,
          '.',
        ]);
        await tachyon.print_and_wait([
          '…кто всегда терпел мои капризы — ',
          you.sex,
          '.',
        ]);
        await tachyon.print_and_wait([
          'только в этот раз… прости ещё раз мою своевольность.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'в миг, как тянешься к ',
          t_call_c,
          ' рукой.',
        ]);
        await tachyon.print_and_wait([
          'видишь, как на кровати ',
          you.sex,
          ' вдруг изумляется.',
        ]);
        await tachyon.print_and_wait([
          'больше не удерживаешь то, что внутри, и бросаешься к любимому на кровати.',
        ]);

        era.printButton(`「Вах, ${y_call_t}, когда!?」`, 1);
        await era.input();

        await tachyon.print_and_wait([
          you.sex,
          ' — в лице и удивление, и оторопь, и даже вина.',
        ]);
        await tachyon.print_and_wait(['но главное… ', you.sex, ' — тело.']);
        await tachyon.print_and_wait(['так тепло, так спокойно.']);
        await tachyon.print_and_wait([
          'только сейчас будто проснулась от долгого-долгого кошмара.',
        ]);
        await tachyon.print_and_wait(['о чём только что думала.']);
        await tachyon.print_and_wait([
          'зачем самой отдавать это тепло и ещё смотреть, как им греется кто-то другой.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'ужас и страх догоняют ',
          tachyon.get_colored_name(),
          ' только сейчас.',
        ]);
        await tachyon.print_and_wait([
          'если бы только что промолчала, если бы правда отпустила ',
          callname,
          '…',
        ]);
        era.println();

        await tachyon.say_and_wait([callname, '…прости… прости!']);
        await tachyon.say_and_wait(['не хочу… больше никому тебя не отдам!']);
        await tachyon.say_and_wait([
          'ненавижу… ненавижу! это мой ',
          callname,
          '… на всю жизнь мой…!',
        ]);
        era.println();

        await tachyon.print_and_wait(['орёт как ребёнок.']);
        await tachyon.print_and_wait(['стыдно, но…']);
        await tachyon.print_and_wait([
          'пусть растерян, но нежно гладит — и ',
          you.sex,
          ' обнимает, правда… так хорошо.',
        ]);

        era.drawLine();

        await era.printAndWait([
          'растерянно смотришь на ту, что всё ещё держит тебя и плачет, — ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' тоже слегка растерян(а).',
        ]);
        await era.printAndWait([
          'от того, как ',
          tachyon.get_colored_name(),
          ' вдруг взялась из воздуха в лаборатории, до этого рёва — всё подряд ставит в тупик — ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' сам смотришь на единственную, кто, кажется, знает, что случилось, — ',
          coffee.get_colored_name(),
          ', но…',
        ]);
        era.println();

        await coffee.say_and_wait([
          'сегодня… уступи ей… ',
          callname_25,
          ', утешь её как следует, пока не насытится.',
        ]);
        await coffee.say_and_wait([
          'взамен… сегодня досталось очень нужное зелье… ',
          callname_25,
          ', завтра дай мне ту же меру любви.',
        ]);
        await era.printAndWait([
          'сказав это, ',
          coffee.get_colored_name(),
          ' открывает дверь и уходит.',
        ]);
        await era.printAndWait(['…так что же всё-таки случилось.']);
        era.println();

        await tachyon.say_and_wait([callname, '…', callname, '…']);
        era.println();

        await era.printAndWait([
          'сама не заметила: та, что только что плакала, — ',
          tachyon.get_colored_name(),
          ' сильнее сжимает ',
          you.get_colored_name(),
          '.',
        ]);
        era.println();

        await tachyon.say_and_wait(['прости… но… можно любить меня… глубже…']);
        await tachyon.say_and_wait([
          'мне сейчас нужно… ещё теплее, ещё жарче, чтобы тело прогрелось изнутри и снаружи.',
        ]);
        await tachyon.say_and_wait([callname, '…умоляю… можно, можно мне.']);
        era.println();

        await era.printAndWait([
          'смотришь на её глаза: мольба, страх и похоть сразу.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' переворачиваешься и прижимаешь её.',
        ]);
        era.drawLine();
        await era.printAndWait(['получен предмет ', item, '…']);
      } else {
        await coffee.say_and_wait(['…если это твой выбор.']);
        await coffee.say_and_wait([
          'мне всё равно… я и сама не хочу отдавать ',
          callname_25,
          ' кому-то ещё.',
        ]);
        await coffee.say_and_wait(['просто… как жалко.']);
        era.println();

        await tachyon.print_and_wait(['пути назад нет.']);
        await tachyon.print_and_wait(['больше нет пути назад.']);
        await tachyon.print_and_wait(['всё кончено… но почему.']);
        await tachyon.print_and_wait(['на душе вдруг… легко.']);
        await tachyon.print_and_wait(['да, я и правда жалкая женщина.']);
        await tachyon.print_and_wait([
          'потому что… смотришь, как любимый человек и ',
          you.sex,
          ' — его женщина — вьются друг с другом.',
        ]);
        await tachyon.print_and_wait(['и ты… улыбаешься.']);
        era.println();

        await coffee.say_and_wait([
          'простите… ',
          callname_25,
          ', я заставила ждать.',
        ]);
        await coffee.say_and_wait([
          'м? ничего… просто вспомнила, что не взяла зелье, которое просила у ',
          c_call_t,
          '…',
        ]);
        await coffee.say_and_wait([
          '…чего это вы так смотрите, едва я сказала ',
          c_call_t,
          '? простите? но… слова словами, а внизу всё равно так встал?',
        ]);
        await coffee.say_and_wait([
          'чмок… хлюп… пха… ',
          callname_25,
          '…кончьте… в рот, так как раз… вместе с зельем…',
        ]);
        await coffee.say_and_wait([
          'какое зелье? …то, что кристаллизует нашу любовь, не бойтесь… ',
          c_call_t,
          ' уже согласилась.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'на этих словах ',
          t_call_c,
          ' бросает взгляд на тебя, сидящую у кровати.',
        ]);
        await tachyon.print_and_wait(['какое сейчас у тебя лицо?']);
        await tachyon.print_and_wait([
          'грусть? боль? ненависть? мёртвое сердце?',
        ]);
        await tachyon.print_and_wait(['аа…']);
        await tachyon.print_and_wait([
          'по ',
          t_call_c,
          ' — по презрению в глазах — и так ясно.',
        ]);
        await tachyon.print_and_wait(['точно не одно из тех.']);
        era.println();

        await coffee.say_and_wait([callname_25, '…', callname_25, '…']);
        era.println();

        await tachyon.print_and_wait([
          t_call_c,
          ' садится сверху — ',
          you.sex,
          ' под ней.',
        ]);
        await tachyon.print_and_wait([
          'потом стон, от которого самой дешёвой шлюхе было бы стыдно.',
        ]);
        await tachyon.print_and_wait(['…нет, это только твой грязный взгляд.']);
        await tachyon.print_and_wait([
          'на деле это, наверное, счастливый, радостный стон.',
        ]);
        await tachyon.print_and_wait(['но неважно.']);
        await tachyon.print_and_wait([
          'наоборот: представить первое — и возбуждение сильнее.',
        ]);
        await tachyon.print_and_wait(['твой любимый.']);
        await tachyon.print_and_wait(['твой ', callname, '.']);
        await tachyon.print_and_wait(['прижат и оседлан тем, кто хуже шлюхи.']);
        era.println();

        await coffee.say_and_wait(['эй… ', callname_25, '…нет, тренер-кун…']);
        era.println();

        await tachyon.print_and_wait([
          'вдруг ',
          t_call_c,
          ' — голос становится совсем томным.',
        ]);
        await tachyon.print_and_wait([
          'меняется и речь: тон чужой… и всё же знакомый.',
        ]);
        era.println();

        await coffee.say_and_wait([
          'оя, ',
          callname_25,
          '… что это, вдруг так сильно?',
        ]);
        await coffee.say_and_wait(['неужели… сквозь меня видите кого-то?']);
        era.println();

        await tachyon.print_and_wait(['нет…']);
        await tachyon.print_and_wait(['не надо.']);
        await tachyon.print_and_wait(['подожди, ', t_call_c, ', не надо.']);
        await tachyon.print_and_wait(['не вытерпела.']);
        await tachyon.print_and_wait(['всё равно открыла рот, крикнула.']);
        await tachyon.print_and_wait(['но…']);
        era.println();

        await coffee.say_and_wait(
          [you.sex, ' не видит тебя и не слышит.'],
          true,
        );
        era.println();

        await tachyon.print_and_wait(['будто кто-то сзади говорит тебе.']);
        await tachyon.print_and_wait(['это… ', t_call_c, ' 『друг』?']);
        await tachyon.print_and_wait(['нет, это неважно.']);
        await tachyon.print_and_wait([t_call_c, ', ты——.']);
        era.println();

        await coffee.say_and_wait(['жестоко, да, ', callname_25, '.']);
        era.println();

        await tachyon.print_and_wait([
          'вдруг ',
          t_call_c,
          ' — голос снова свой.',
        ]);
        era.println();

        await coffee.say_and_wait([
          'ведь вы её любите… а она вот так топчет ваше чувство, разве нет?',
        ]);
        era.println();

        await tachyon.print_and_wait(['ч…']);
        await tachyon.print_and_wait([t_call_c, '…ты что несёшь.']);
        await tachyon.print_and_wait(['нет… ты… про кого…?']);
        era.println();

        await coffee.say_and_wait([
          'ведь ',
          callname_25,
          ' столько отдал ',
          c_call_t,
          '.',
        ]);
        await coffee.say_and_wait([
          'ведь давно уже перешли черту тренера и ',
          tachyon.uma_sex_title,
          '.',
        ]);
        await coffee.say_and_wait([
          'но… когда я сказала, 『это зелье — чтобы вместе с ',
          callname_25,
          '』… она просто отдала его.',
        ]);
        era.println();

        await tachyon.print_and_wait([callname, '…любимый… человек…']);
        await tachyon.print_and_wait([
          'нет, ',
          you.sex,
          ' и ',
          t_call_c,
          ' — вот кто пара, разве нет.',
        ]);
        await tachyon.print_and_wait(['это я — третья лишняя…']);
        era.println();

        await coffee.say_and_wait(['н… вдруг… вдруг так сильно…❤️.']);
        await coffee.say_and_wait(['эй… ', callname_25, '…внутрь… внутрь…']);
        await coffee.say_and_wait([
          c_call_t,
          ' не хочет — я вам позволю… ',
          c_call_t,
          ' отказала вам, а я удовлетворю вдвое сильнее.',
        ]);
        era.println();

        await tachyon.print_and_wait(['нет.']);
        await tachyon.print_and_wait(['я не.']);
        await tachyon.print_and_wait(['я…']);
        era.println();

        await tachyon.print_and_wait(['а.']);
        await tachyon.print_and_wait(['не так.']);
        await tachyon.print_and_wait(['я же отказала.']);
        era.println();

        await tachyon.print_and_wait(['последний шанс.']);
        await tachyon.print_and_wait(['уже брошен тобой самой.']);
        await tachyon.print_and_wait(['теперь и правда шанса нет.']);
        era.println();

        await tachyon.print_and_wait(['но почему…']);
        await tachyon.print_and_wait(['почему тело трясётся без остановки…']);
        await tachyon.print_and_wait(['ведь это твой любимый.']);
        await tachyon.print_and_wait(['ведь тот, кто любит тебя.']);
        await tachyon.print_and_wait(['ведь третья лишняя — она.']);
        era.println();

        await tachyon.print_and_wait([
          callname,
          ' и ',
          t_call_c,
          ' вдруг меняются местами.',
        ]);
        await tachyon.print_and_wait([
          callname,
          ' кладёт ',
          t_call_c,
          ' на кровать раком.',
        ]);
        await tachyon.print_and_wait([
          'поршень без остановки, будто выместить всё.',
        ]);
        await tachyon.print_and_wait([
          t_call_c,
          ' уже закатила глаза и даже высунула язык.',
        ]);
        await tachyon.print_and_wait(['однако… ', you.sex, ' — губы.']);
        await tachyon.print_and_wait([
          callname,
          ' губами без остановки шепчет одно слово.',
        ]);
        await tachyon.print_and_wait(['это… ', y_call_t, '.']);
        era.println();

        era.println();

        await tachyon.print_and_wait(['…если сейчас.']);
        await tachyon.print_and_wait([t_call_c, ' уже без сознания.']);
        await tachyon.print_and_wait(['что ни сделай — наверное, не заметят.']);
        await tachyon.print_and_wait([
          'если и правда, как она сказала, 『друг』 спрячет все следы.',
        ]);
        await tachyon.print_and_wait(['тогда… даже если я…']);
        era.println();

        await coffee.say_and_wait(['чмок… чмок…']);
        era.println();

        await tachyon.print_and_wait(['не ствол.']);
        await tachyon.print_and_wait(['не яйца.']);
        await tachyon.print_and_wait([
          'я ведь сама ушла — ',
          you.sex,
          ' мне больше не принадлежит. И какое у меня право переступать черту, если ',
          you.sex,
          ' давно не со мной.',
        ]);
        await tachyon.print_and_wait([
          'просто жидкость, что течёт из места, где они соединены.',
        ]);
        await tachyon.print_and_wait(['себя — как тряпку для уборки.']);

        era.printButton('「!?」', 1);
        await era.input();

        await tachyon.print_and_wait(['ведь только лижешь.']);
        await tachyon.print_and_wait([you.sex, ' вдруг оборачивается.']);
        await tachyon.print_and_wait(['подожди.']);
        await tachyon.print_and_wait(['не смотри.']);
        await tachyon.print_and_wait(['не смотри, какая я низкая.']);
        await tachyon.print_and_wait(['умоляю, умоляю…']);

        era.printButton('「ты… кто?」', 1);
        await era.input();

        await tachyon.print_and_wait(['…э?']);
        await tachyon.print_and_wait([
          callname,
          ' смотрит растерянно, стыдливо, в смятении.',
        ]);
        await tachyon.print_and_wait([
          'ни одно из этих лиц не то, что должно быть, когда видят「меня」.',
        ]);
        era.println();

        await coffee.say_and_wait([
          'она… тоже ребёнок, что тянется к ',
          callname_25,
          '.',
        ]);
        await coffee.say_and_wait([
          'просто… эта стесняется, поэтому я попросила друга спрятать её лицо…',
        ]);
        await coffee.say_and_wait([
          'или… ',
          callname_25,
          ' хотите увидеть её?',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'сердце чуть отпустило — и в миг, как ',
          t_call_c,
          ' сказала последнее, снова сжалось.',
        ]);
        era.println();

        await you.say_and_wait(
          'нет… если не хочет, чтобы видели… лучше не заставлять.',
        );
        await coffee.say_and_wait([callname_25, '…какой нежный…']);
        era.println();

        await tachyon.print_and_wait(['да…']);
        await tachyon.print_and_wait(['правда, слишком нежный.']);
        await tachyon.print_and_wait(['почему-то в голове всплывает.']);
        await tachyon.print_and_wait([
          'если ',
          you.sex,
          ' узнает, что ',
          tachyon.get_colored_name(),
          ' — такая ',
          tachyon.uma_sex_title,
          '.',
        ]);
        await tachyon.print_and_wait([
          'если ',
          you.sex,
          ' увидит тебя такой низкой.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          ' каким презрением будет смотреть на тебя?',
        ]);
        await tachyon.print_and_wait(['какими холодными словами будет крыть.']);
        await tachyon.print_and_wait(['или…']);
        await tachyon.print_and_wait(['а если ', you.sex, ' простит тебя.']);
        await tachyon.print_and_wait(['простит уже такую безнадёжную…']);
        await tachyon.print_and_wait([
          'тогда, если снова предашь ',
          t_call_c,
          ', тогда ',
          you.sex,
          ' какой возбуждающий вид покажет.',
        ]);
        era.println();

        await coffee.say_and_wait([
          'впрочем… этот ребёнок и правда очень любит ',
          callname_25,
          '.',
        ]);
        await coffee.say_and_wait([
          'поэтому, если ',
          callname_25,
          ' не против… можно этой постоять рядом и смотреть?',
        ]);
        await coffee.say_and_wait([
          'не бойтесь, только смотреть… я обещаю, больше сама не полезет… правда?',
        ]);
        era.println();

        await tachyon.print_and_wait([
          t_call_c,
          ' садится на край кровати и носком поддевает тебе подбородок.',
        ]);
        await tachyon.print_and_wait(['как учат непослушного щенка.']);
        await tachyon.print_and_wait([
          'ведь это твоя соперница, ведь это твой противник.',
        ]);
        await tachyon.print_and_wait(['но…']);
        await tachyon.print_and_wait([
          'смотришь: из промежности ',
          t_call_c,
          ' медленно течёт по икре вниз.',
        ]);
        await tachyon.print_and_wait(['даже тыл стопы, даже кончики пальцев.']);
        await tachyon.print_and_wait([
          'след случки: белая смесь их смазки и спермы.',
        ]);
        await tachyon.print_and_wait(['я…']);
        await tachyon.print_and_wait([
          'сама не своя, лижешь стопу ',
          t_call_c,
          '.',
        ]);
        await tachyon.print_and_wait([
          'сладко, горько, унизительно, возбуждающе.',
        ]);
        await tachyon.print_and_wait(['во рту взрываются самые разные вкусы.']);
        await tachyon.print_and_wait([
          'сама не заметила: всю стопу уже вылизала.',
        ]);
        await tachyon.print_and_wait(['нет больше…']);
        await tachyon.print_and_wait(['ещё, ещё этого вкуса…']);
        await tachyon.print_and_wait(['какая бы ни была цена…']);
        era.println();

        await tachyon.print_and_wait(['ложишься на пол в позе сдачи.']);
        await tachyon.print_and_wait([
          'кладёшь стопу ',
          t_call_c,
          ' себе на живот осторожно.',
        ]);
        await tachyon.print_and_wait(['пусть топчет достоинство как угодно.']);
        await tachyon.print_and_wait(['лишь бы снова получить награду.']);
        era.println();

        await coffee.say_and_wait(['айя… какая хорошая девочка.']);
        await coffee.say_and_wait(['какое… славное представление.']);
        await coffee.say_and_wait([
          'если и дальше будешь так играть… иногда дать награду — тоже можно…',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'вдруг ',
          t_call_c,
          ' шепчет на ухо так, что слышит только ',
          tachyon.uma_sex_title,
          '.',
        ]);
        era.println();

        await coffee.say_and_wait([
          'увеселяй меня как следует, ',
          c_call_t,
          ' ❤️.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'и ',
          t_call_c,
          ' возвращается на кровать.',
        ]);
        await tachyon.print_and_wait(['потом кровать снова трясётся.']);
        await tachyon.print_and_wait([
          'под кроватью ',
          tachyon.get_colored_name(),
          ' только высовывает язык.',
        ]);
        await tachyon.print_and_wait([
          'на своём особом месте трясётся телом жалко, как лягушка.',
        ]);
        await tachyon.print_and_wait([
          'изо всех сил гладит себя и одновременно увеселяет соперницу на кровати.',
        ]);
        await tachyon.print_and_wait([
          'молит, чтобы ту стало жалко эту ничтожную и дала чуть-чуть, чуть-чуть награды.',
        ]);
      }
      return ret;
    };
    f.title =
      'Aromatic Hydrocarbon Poisoning (отравление ароматическими углеводородами)';
    return f;
  })(),
  ero_start_reward1: (() => {
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('наконец кончилось…');
      await era.printAndWait([
        you.get_colored_name(),
        ' потягиваешься и невольно думаешь',
      ]);
      await era.printAndWait([
        'в последнее время опыты ',
        tachyon.get_colored_name(),
        ' всё чаще, всё сложнее и противнее.',
      ]);
      await era.printAndWait([
        'опасность не так высока, но вместе с работой тренера суета такова, что ',
        you.get_colored_name(),
        ' даже скучает по тем опасным опытам',
      ]);
      era.println();
      await tachyon.say_and_wait(['устала, ', callname, '…']);
      await tachyon.say_and_wait('не бойся, потом как следует награжу');
      await era.printAndWait('\nнаграда…?');
      await era.printAndWait([
        'неясно что именно, но слово «награда» всё равно подстёгивает усталую ',
        you.get_colored_name(),
      ]);
      await era.printAndWait('\nкогда приборы убраны');
      era.println();
      await tachyon.say_and_wait('тогда… в награду я тебе помогу с этим');
      await tachyon.say_and_wait('то, что копилось эти дни❤');
      era.println();
      await era.printAndWait('…э?');
      era.println();
      await tachyon.say_and_wait('такая реакция… не отказ ли?');
      await tachyon.say_and_wait('ведь мы уже любовники, разве нет?');
      era.println();
      await era.printAndWait('мясо само в рот лезет — какой смысл не есть!');
      await era.printAndWait(
        'да и… из-за опытов эти дни почти не сбрасывал похоть…',
      );
      await era.printAndWait('тогда пусть любимая поможет… вроде не слишком?');
      era.println();
      await era.printAndWait([
        'сама рука тянется, ',
        you.get_colored_name(),
        ' снимает штаны',
      ]);
      era.println();
      await tachyon.say_and_wait('сс…');
      era.println();
      await era.printAndWait([
        'хотя не как в аниме с паром, но член, что парился весь день, всё равно несёт запах, от которого любая ',
        tachyon.uma_sex_title,
        ' вспыхивает похотью',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' смотрит на член в упор, глаз не оторвать',
      ]);
      era.println();
      await tachyon.say_and_wait('нельзя… не выдержу…❤');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' чуть не забыл: эти дни из-за опытов копилось не только у ',
        you.get_colored_name(),
        ' одного',
      ]);
      await era.printAndWait([
        'та, что всё время ставила опыты рядом, ',
        tachyon.get_colored_name(),
        ' наверное, так же',
      ]);
      await era.printAndWait('значит… не столько награда, сколько предлог…');
      era.println();
      await era.printAndWait([
        'подумав так, ',
        you.get_colored_name(),
        ' невольно заводится на пакость',
      ]);
      await era.printAndWait([
        'видя, как ',
        you.get_colored_name(),
        ' вынимает член и замирает, ',
        tachyon.get_colored_name(),
        ' смотрит нетерпеливо на ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '…чего ещё ждать, быстрее, входи']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' складывает губы трубочкой, розовый язык ходит туда-сюда, пытаясь разжечь ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'но ',
        you.get_colored_name(),
        ' всё равно не двигается; поняв, чего хочет — ',
        you.get_colored_name(),
        ', ',
        tachyon.get_colored_name(),
        ' смотрит обиженно',
      ]);
      era.println();
      await tachyon.say_and_wait('…жестоко');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' садится на корточки и снизу смотрит на торчащий член, будто молит',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'умоляю, ',
        callname,
        '… дай по чавкать… как следует попробовать… ',
        callname,
        ' член…❤️',
      ]);
      era.println();
      await era.printAndWait([
        'видя, что ',
        you.get_colored_name(),
        ' наконец медленно подходит, ',
        tachyon.get_colored_name(),
        ' жадно тычет нос к члену и несколько раз глубоко втягивает',
      ]);
      await era.printAndWait('непослушная рука хлюпает в киске и стонет');
      await era.printAndWait(
        'перед самцом, которого признали и разум и чувства, самка может только стоять на коленях',
      );
      era.println();
      await tachyon.say_and_wait('сс… ха… сс…');
      await tachyon.say_and_wait('член… запах члена');
      await tachyon.say_and_wait([
        'пожалуйста… дай ещё понюхать… ',
        callname,
        ' …член…',
      ]);
      await tachyon.say_and_wait('в носу… всё… запах самца');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' держишь член, весь в предэякуляте',
      ]);
      await era.printAndWait([
        'пакостно водит им по кончику носа той, что уже на коленях, — ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'будто метку: соком и запахом мажет нос ',
        tachyon.get_colored_name(),
        '.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'жестоко… если… нюхать такое… и правда… пути назад не будет…',
      );
      era.println();
      await era.printAndWait('не нравится — тогда ладно?');
      await era.printAndWait([
        you.get_colored_name(),
        ' делаешь вид, что отойдёшь, а ',
        tachyon.get_colored_name(),
        ' ползёт следом, нос ни на сантиметр не отпускает член',
      ]);
      era.println();
      await tachyon.say_and_wait('от одного запаха… сейчас кончу…');
      era.println();
      await era.printAndWait('будто боясь новой пакости');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' наоборот носом без остановки трётся о твою головку — ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'будто запомнить запах навсегда — яростно втягивает вонь члена',
      );
      era.println();
      await tachyon.say_and_wait('нельзя… не выдержу…');
      await tachyon.say_and_wait('дай взять в рот… умоляю, дай лизнуть');
      era.println();
      await era.printAndWait('хочется скорее лизнуть');
      await era.printAndWait('хочется получить право сосать член');
      await era.printAndWait('член любимого стоит перед глазами');
      await era.printAndWait([
        'тая от запаха, ',
        tachyon.get_colored_name(),
        ' всё же не выдерживает и глотает слюну',
      ]);
      era.println();
      await tachyon.say_and_wait('хлюп');
      await tachyon.say_and_wait('м-члюррр… члюк… чмок…');
      era.println();
      await era.printAndWait([
        'ещё без разрешения ',
        tachyon.get_colored_name(),
        ' уже сосёт член',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' тоже выдыхаешь: ещё немного — и не сдержался(ась) бы уже ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' широко открывает рот и заглатывает член до корня за раз',
      ]);
      await era.printAndWait('без остановки ходит вверх-вниз, пошлые хлюпы');
      era.println();
      await tachyon.say_and_wait('вкусно… так вкусно…');
      await tachyon.say_and_wait(['член… ', callname, ' вонючий член❤❤']);
      era.println();
      await era.printAndWait([
        'от корня до головки целиком обхватывает и сосёт',
      ]);
      await era.printAndWait(
        'как помаду — хочет без остатка втереть вкус члена себе в рот',
      );
      era.println();
      await era.printAndWait('вечер: почти все уже дома или в общежитии');
      await era.printAndWait(
        'в лаборатории пошлые хлюпы: нарочно или уже не до того, чтобы следить за звуком?',
      );
      await era.printAndWait([
        'жажда ',
        you.get_colored_name(),
        ', жажда члена, и может ещё стыд вот так низко унижаться',
      ]);
      await era.printAndWait(
        'служа члену, качает жопой, трётся об пол и пальцы, ища утешение',
      );
      await era.printAndWait('но… самое вкусное всё равно член во рту');
      await era.printAndWait([
        'служба с любовью без слов говорит, как ',
        tachyon.get_colored_name(),
        ' помешалась на этом члене',
      ]);
      await era.printAndWait([
        'если сейчас ',
        tachyon.sex,
        ' поклянётся всю жизнь быть рабой члена, возможно ',
        tachyon.sex,
        ' согласится',
      ]);
      era.println();
      await era.printAndWait([
        'вдруг ',
        you.get_colored_name(),
        ' гладит ',
        tachyon.get_colored_name(),
        ' по голове',
      ]);
      await era.printAndWait(['послушно ', tachyon.sex, ' сразу понимает']);
      era.println();
      await tachyon.say_and_wait(
        'внутрь… кончай внутрь… в мой рот… всё… я выпью❤❤',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' сразу ближе берёт в рот твой член — ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('наконец белая жижа рвётся во рту');
      era.println();
      await tachyon.say_and_wait('чмок… хлюп… пха');
      await tachyon.say_and_wait('ха-а… ха… м-м… чмок…');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' медленно жуёт сперму, что кончили в рот',
      ]);
      await era.printAndWait('нарочно чавкает и выпивает всю');
      await era.printAndWait('потом, чтобы не оставить ни капли');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' снова берёт обмякший член и без остановки сосёт, вычищает',
      ]);
      await era.printAndWait([
        'видя, как ',
        tachyon.sex,
        ' так помешалась, ',
        you.get_colored_name(),
        ' внизу снова твердеет сам',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'в следующий опыт тоже на тебя рассчитывать, ',
        callname,
        ' ',
      ]);
      await tachyon.say_and_wait('…конечно, награда тоже будет');
      await tachyon.say_and_wait('не откажешься… любимый❤');
      era.println();
      await era.printAndWait([
        'глядя, как ',
        tachyon.sex,
        ' томно косит глазами, ',
        you.get_colored_name(),
        ' снова затыкает этот рот, что без остановки командует',
      ]);
    };
    f.title = 'Награда за опыт · I';
    return f;
  })(),
  ero_start_reward2: (() => {
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        '~ и сегодняшний опыт был нелёгкий',
      ]);
      await tachyon.say_and_wait('тогда… нужна награда?❤️');
      await you.say_and_wait('давай');
      era.println();
      await era.printAndWait('хлюп-хлюп');
      await era.printAndWait('лаборатория полна пошлых звуков');
      era.println();
      await tachyon.say_and_wait([callname, '…', callname, '❤️']);
      await tachyon.say_and_wait('быстрее… заполни мою блядскую дырку❤️');
      await tachyon.say_and_wait(
        'как следует выдрессируй эту… киску, что текла без остановки ещё во время опыта',
      );
      await era.printAndWait(
        'киска ещё до входа насквозь мокрая и туго обхватывает член',
      );
      await era.printAndWait([
        'с каждым толчком смазка брызжет, стол и пол в вонючем соке ',
        tachyon.get_colored_name(),
        '.',
      ]);
      era.println();
      await tachyon.say_and_wait('у… так сильно❤️');
      await tachyon.say_and_wait('чуть… чуть медленнее…❤️');
      await tachyon.say_and_wait('голос… а-н❤️');
      era.println();
      await era.printAndWait('сама так завлекала — и ещё просит тише?');
      await era.printAndWait([
        you.get_colored_name(),
        ' сильно шлёпает ',
        tachyon.get_colored_name(),
        ' по жопе',
      ]);
      await era.printAndWait('без оглядки ускоряется');
      era.println();
      await tachyon.say_and_wait([callname, '…', callname, '❤️']);
      await tachyon.say_and_wait('ах❤️ н-ах❤️ ах❤️ а-а❤️');
      await tachyon.say_and_wait([callname, '…дай❤️ дай ещё❤️']);
      era.println();
      await era.printAndWait([
        'войдя во вкус, бёдра даже больше не слушают ',
        you.get_colored_name(),
        ' и сами ускоряются',
      ]);
      await era.printAndWait([
        'такая охотная обвивка поднимает возбуждение ',
        you.get_colored_name(),
        ' ещё выше: хочется отдать тело самки инстинкту самца',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'как хорошо❤️ ',
        callname,
        ' член❤️ какой мощный❤️',
      ]);
      era.println();
      await era.printAndWait('шлепки тел ещё громче');
      await era.printAndWait('вся лаборатория в пошлом запахе и звуке');
      era.println();
      await tachyon.say_and_wait('опять… опять больше❤️');
      await tachyon.say_and_wait([
        'сейчас кончишь… внутрь, внутрь❤️ так хочу… ',
        callname,
        ' малышей❤️',
      ]);
      await tachyon.say_and_wait([
        'люблю… больше всего, когда ',
        callname,
        ' кончает внутрь❤️',
      ]);
      await tachyon.say_and_wait([
        'в киску… кончай сколько влезет… хочу родить ',
        callname,
        ' ребёнка❤️ хочу ',
        callname,
        ' вывести помёт маленьких свинок❤️',
      ]);
      era.println();
      await era.printAndWait([
        'услышав ',
        tachyon.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' ещё без оглядки быстрее и глубже',
      ]);
      await era.printAndWait([
        'даже тело ',
        tachyon.uma_sex_title,
        ' может только вторить ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' щиплет два качающихся кончика спереди и сильно тянет вниз',
      ]);
      era.println();
      await tachyon.say_and_wait('хо-оооооо❤️');
      await tachyon.say_and_wait(
        'кон, кончаю❤️ сейчас кончу, когда соски тянут❤️',
      );
      era.println();
      await era.printAndWait('бульк, бульк, шлюррр❤️');
      await era.printAndWait(
        'под конец несколько самых глубоких толчков — и шлюз спермы рвётся',
      );
      await era.printAndWait([
        'белая жижа заливает киску ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'в миг, как жижа входит, ',
        tachyon.get_colored_name(),
        ' тоже сводит всем телом на пике',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'сколько дней не пробовала… ',
        callname,
        ' член❤️ э-хе-хе❤️',
      ]);
      await tachyon.say_and_wait(['как хорошо… ', callname, ' … так н-н❤️']);
      era.println();
      await era.printAndWait([
        'решив, что всё кончено, ',
        tachyon.get_colored_name(),
        ' не договаривает вздох',
      ]);
      await era.printAndWait([
        'как ',
        you.get_colored_name(),
        ' снова затыкает рот членом',
      ]);
      era.println();
      await tachyon.say_and_wait('чмок… чмок-чмок❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' покорно помогает ',
        you.get_colored_name(),
        ' вычистить член.',
      ]);
      await era.printAndWait([
        'член в её соке и сперме ',
        callname,
        ': для ',
        tachyon.get_colored_name(),
        ' сейчас хоть поставь перед носом бэнто ',
        callname,
        ', ',
        tachyon.sex,
        ' скорее выберет член',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'следующий опыт… тоже на тебя❤️ чмок❤️ чвак❤️',
      );
      await tachyon.say_and_wait('н! н-чмок❤️ члюк❤️');
      era.println();
      await era.printAndWait([
        'услышав, как ',
        tachyon.get_colored_name(),
        ' на разные лады говорит「давай ещё в следующий раз」, ',
        you.get_colored_name(),
        ' снова твердеет',
      ]);
      await era.printAndWait([
        'перед глазами приманка: ',
        tachyon.uma_sex_title,
        ' снова смотрит как самка',
      ]);
    };
    f.title = 'Награда за опыт · II';
    return f;
  })(),
  ero_start_reward3: (() => {
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        '~ и сегодняшний опыт был нелёгкий',
      ]);
      await tachyon.say_and_wait('тогда… нужна награда?❤️');
      await you.say_and_wait('давай');
      await tachyon.print_and_wait('всё-таки это не та дырка, да?');
      await tachyon.print_and_wait(
        'внизу блядская киска тоже чешется без удержу',
      );
      await tachyon.print_and_wait('почему тогда вставляют туда');
      await tachyon.print_and_wait('да ещё такая… такая поза');
      era.println();
      await tachyon.print_and_wait([
        'тесный анус обхватывает ',
        callname,
        ' толстый член',
      ]);
      await tachyon.print_and_wait([
        'складок больше, чем в киске: анус дарит ',
        callname,
        ' больше кайфа и ей самой — вдвое против киски',
      ]);
      await tachyon.print_and_wait(
        'с этой стороны для похоти и правда удобнее киски… но…',
      );
      era.println();
      await tachyon.say_and_wait(
        'поза как у щенка… плюс эта дырка… так это и есть настоящий щенок?❤️',
        true,
      );
      era.println();
      await tachyon.print_and_wait('но… если подумать, вроде и можно❤️');
      await tachyon.print_and_wait([callname, ' — мой личный ', callname]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — ',
        callname,
        ' личная сучка',
      ]);
      await tachyon.print_and_wait(
        'стоит так подумать — тело будто сразу входит в роль, радостно крутит хвостом, заискивая перед хозяином',
      );
      era.drawLine();
      await era.printAndWait([
        'будто чуя её бред, ',
        you.get_colored_name(),
        ' шлёпает ',
        tachyon.get_colored_name(),
        ' по жопе: пусть ',
        tachyon.sex,
        ' не отвлекается.',
      ]);
      await era.printAndWait([
        'но уже полностью в роли ',
        tachyon.get_colored_name(),
        ' ещё сильнее крутит жопой и сжимает анус',
      ]);
      await era.printAndWait([
        'внезапный удар — и ',
        you.get_colored_name(),
        ' на миг теряет шлюз',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' держит ',
        tachyon.get_colored_name(),
        ' за талию и в жопе сбрасывает всю сперму, что копилась днями',
      ]);
      await era.printAndWait([
        'под тобой ',
        tachyon.get_colored_name(),
        ' в этот миг как сука, что хочет донести хозяину своё счастье',
      ]);
      await era.printAndWait('радостно писает, показывая, что чувствует');
      await era.printAndWait([
        'но ',
        you.get_colored_name(),
        ' не успевает ответить — второй удар ещё тяжелее',
      ]);
      era.println();
      await tachyon.say_and_wait('гав… гав-гав❤️');
      await era.printAndWait([
        'увидев на лице ',
        you.get_colored_name(),
        ' растерянность, ',
        tachyon.get_colored_name(),
        ' будто только сейчас понимает, что натворила',
      ]);
      await era.printAndWait('щёки мигом пунцовые');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '…нет, я… не… это не то, что ты думаешь…',
      ]);
      era.println();
      await era.printAndWait(
        'неясно что случилось, но пока сделаем вид, что ничего',
      );
    };
    f.title = 'Награда за опыт · III';
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
   */
  async ero_start_cuckold(tachyon, callname, t_call_c) {
    if (era.get('cflag:25:招募状态') === 1 && Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '…',
        callname,
        ', слушай, не позвать ',
        t_call_c,
        '… вместе?',
      ]);
      await tachyon.say_and_wait('сегодня только со мной… а, понятно.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' почему-то выглядит чуть разочарованной.',
      ]);
    } else {
      await tachyon.say_and_wait(['…прости, ', callname, ', прости.']);
      era.println();
      await era.printAndWait([
        'непонятно почему перед постелью ',
        tachyon.get_colored_name(),
        ' без остановки извиняется.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
   */
  async ero_start_cuckold_coffee(tachyon, callname, t_call_c) {
    await tachyon.say_and_wait([t_call_c, ', давай']);
    await tachyon.say_and_wait([
      'верно, намочи языком, так потом ',
      callname,
      ' легче войти',
    ]);
    await tachyon.say_and_wait('если будешь хорошей — потом ещё дам лизнуть');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ero_end_cuckold_coffee(tachyon, callname) {
    await tachyon.say_and_wait([
      'сперму и смазку ',
      callname,
      ' мешать в кофе? так вкуснее?',
    ]);
    await tachyon.say_and_wait('или ты просто пробуешь унижение и поражение?');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async cum_in_mouth_tr_tit(tachyon, you, callname) {
    await tachyon.say_and_wait('чмок❤️ хлюп❤️ члюк❤️');
    era.println();
    await era.printAndWait([
      'вышедшая сперма заливает горло ',
      tachyon.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'но объёма всё равно больше, чем ',
      tachyon.get_colored_name(),
      ' может выпить за раз.',
    ]);
    await era.printAndWait([
      'белая сперма с уголка рта течёт на грудь, ',
      tachyon.get_colored_name(),
      ' спешно одной рукой собирает сиську и снова ловит капли ртом.',
    ]);
    era.println();
    await tachyon.say_and_wait('чмок❤️ члюк❤️');
    await tachyon.say_and_wait('ещё…');
    await tachyon.say_and_wait([
      'это же всё важные факторы ',
      callname,
      ' ❤️ нельзя тратить❤️',
    ]);
    era.println();
    await era.printAndWait([
      'только вылизала с себя, ',
      tachyon.get_colored_name(),
      ' уже целится в член, ещё в отходе.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      ' сильно сосёт и вытягивает остаток спермы из ствола.',
    ]);
    era.println();
    await tachyon.say_and_wait('так… чисто❤️');
    era.println();
    await era.printAndWait([
      'собрав сперму во рту и дав тебе разглядеть, ',
      tachyon.get_colored_name(),
      ' не спеша глотает белую жижу.',
    ]);
    await era.printAndWait([
      'горло пошло ходит, будто хочет, чтобы ',
      you.get_colored_name(),
      ' видел весь глоток.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'ха-а… опять пусто❤️ не кончишь ещё и не войдёшь?❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async cum_in_throat_force(tachyon, you) {
    await tachyon.say_and_wait('м-ууу❤️ м-н❤️ н-кх❤️');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' сильно держит голову ',
      tachyon.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'головку намертво вгоняет в горло ',
      tachyon.get_colored_name(),
      ' и начинает кончать.',
    ]);
    await era.printAndWait([
      'даже когда кончил, ',
      you.get_colored_name(),
      ' всё ещё затыкает членом, чтобы сперма пропитала каждый угол желудка ',
      tachyon.get_colored_name(),
      '.',
    ]);
    era.println();
    await era.printAndWait([
      'похоже, от нехватки воздуха, когда член выходит, ',
      tachyon.get_colored_name(),
      ' смотрит тупо.',
    ]);
    await era.printAndWait(
      'но всё равно машинально забирает в рот белую жижу с губ и кудрявые волоски…',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async cum_in_throat(tachyon, you, callname) {
    await tachyon.say_and_wait('м-м… гульк… глоть…');
    era.println();
    if (Math.random() < 0.5) {
      await era.printAndWait('будто ждала этого мига очень давно.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' глоток за глотком радостно выпивает всю белую жижу.',
      ]);
      era.println();
      await tachyon.say_and_wait('пха…');
      era.println();
      await era.printAndWait('в открытом рту на языке всё ещё белая нить.');
      await era.printAndWait([
        'и ',
        tachyon.get_colored_name(),
        ' так и держит рот, языком сгоняет всю сперму в кучу.',
      ]);
      await era.printAndWait('и снова глотает.');
      era.println();
      await tachyon.say_and_wait('спасибо за угощение❤️');
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' перед ',
        you.get_colored_name(),
        ' высовывает язык и показывает, сколько спермы выжала.',
      ]);
      await era.printAndWait([
        'всегда гордое лицо, измазанное белой жижей, будит желание ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'вот они, факторы ',
        callname,
        '… если в опыт…',
      ]);
      era.println();
      await era.printAndWait('говорит так, но поиграв во рту…');
      era.println();
      await tachyon.say_and_wait('хлюп… хлюп… пха❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' к ',
        you.get_colored_name(),
        ' открывает уже пустой ротик.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'всё выпила… тогда ничего не остаётся, как ещё раз, да?❤️',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async cum_in_tit(tachyon, you, callname) {
    await tachyon.say_and_wait('какая густая…❤️');
    await tachyon.say_and_wait(['всё на лице… полный запах ', callname, '❤️']);
    era.println();
    await era.printAndWait('густая жижа с лица стекает на грудь.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' сначала стирает с лица всю сперму и собирает на руке.',
    ]);
    await era.printAndWait('а с груди будто случайно не задела.');
    await era.printAndWait([
      'на голых сиськах полно вонючей белой жижи, что выпустил ',
      you.get_colored_name(),
      '.',
    ]);
    era.println();
    await tachyon.say_and_wait('айя… и правда забыла❤️');
    era.println();
    await era.printAndWait([
      'видя, что взгляд ',
      you.get_colored_name(),
      ' весь на груди.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' только тогда явно, нарочно и деланно ахает.',
    ]);
    await era.printAndWait(
      'снимает белую жижу с груди слой за слоем и кладёт в рот.',
    );
    era.println();
    await tachyon.say_and_wait('чмок… члюк❤️ спасибо за угощение❤️');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      ' сосёт пальцы, открывает рот и показывает чистый язык: ничего не пропустила.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async orgasm_non_penetrative(tachyon, callname) {
    await tachyon.say_and_wait('кон… сейчас кончу❤️');
    await tachyon.say_and_wait([
      'сейчас стану личной сучкой ',
      callname,
      ' ооооо❤️',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async cum_in_missionary(tachyon, you) {
    await era.printAndWait([
      'прижать всегда главную ',
      tachyon.get_colored_name(),
      ' и насиловать — от этого желание кончить у ',
      you.get_colored_name(),
      ' только растёт.',
    ]);
    era.println();
    await tachyon.say_and_wait('ах❤️ а-н❤️ свинка-кун❤️');
    await tachyon.say_and_wait('киска… внутри киски❤️ так хорошо❤️');
    era.println();
    await you.say_and_wait('сейчас выйду…');
    await era.printAndWait([you.get_colored_name(), ' рычит']);
    await era.printAndWait('бульк❤️ бульк❤️ гу-шлюрр❤️');
    era.println();
    await era.printAndWait(
      'когда член выходит, густая белая жижа из полости медленно течёт…',
    );
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async cum_in_back(tachyon) {
    await tachyon.say_and_wait('ха-а… н-ах… о… у-ооооо❤️');
    await tachyon.say_and_wait('как зверя кончили внутрь ооооо❤️❤️❤️');
    await tachyon.say_and_wait(
      'разум уйдёт❤️ стану зверем, у которого в голове только член и сперма❤️❤️❤️',
    );
    era.println();
    await era.printAndWait('жопа под роды отлично пружинит.');
    await era.printAndWait(
      'каждый раз, как член бьёт в зев матки, смазка прёт струёй.',
    );
    await era.printAndWait('вся киска волнами дразнит член.');
    await era.printAndWait(
      'скоро головка жмёт зев матки и льёт сперму внутрь.',
    );
    await era.printAndWait('biu～biu～biu～');
    await era.printAndWait('долгий посев, похоже, ещё не скоро кончится.');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async cum_in_anal_missionary(tachyon, you) {
    await tachyon.say_and_wait('кон… кон-кон-кон!');
    await tachyon.say_and_wait('анусом, жопой кончаю оооооо❤️');
    if (tachyon.sex_code !== 1) {
      era.println();
      await era.printAndWait(
        'после нескольких жёстких толчков пустая киска гонит струи за струями.',
      );
      await era.printAndWait(
        'и то, что брызжет на тебя, и то, что медленно течёт из дырки, стекается к органу, которым вы соединены, и дальше смазывает ход.',
      );
      era.println();
      await you.say_and_wait('удобный секс-инструмент, ещё и сам смазку даёт.');
      await era.printAndWait([
        'услышав шутку ',
        you.get_colored_name(),
        ', ',
        tachyon.get_colored_name(),
        ' хочет сильно сжать член в знак обиды, но тело совсем без сил — даже этого не может, мало того: от такого сжатия киска снова мелко кончает.',
      ]);
    }
  },
  /**
   * 获得欢愉刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   * @param {number} love 爱慕值
   */
  async mark_pleasure(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait(
            'н… горячо и чешется… телу нехорошо… побочный эффект зелья?',
          );
        } else {
          await tachyon.say_and_wait('м-м… горячо и чешется…');
          await tachyon.say_and_wait(
            'нет, не плохо… н… давай ещё… ощущение какое-то странное…',
          );
        }
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(
            'нельзя… ведь это только гормоны… только нормальная реакция тела… но, но… почему… так хорошо…',
          );
        } else {
          await tachyon.say_and_wait(
            'подожди… внутри ещё не отошло… если, если ещё лучше… ии!',
          );
          await tachyon.say_and_wait(
            'нельзя, знаю что нельзя дальше, но тело само… голова… не думает',
          );
        }
        break;
      case 3:
        if (love < 75) {
          await tachyon.say_and_wait([
            'уже… думать нельзя… так хорошо… ещё… ещё, ',
            callname,
            '…дай… ещё хочу…',
          ]);
        } else {
          await tachyon.say_and_wait([callname, '❤️', callname, '❤️']);
          await tachyon.say_and_wait(
            'ещё… дай ещё… заполни меня изнутри и снаружи целиком…❤️',
          );
          await tachyon.say_and_wait(
            'это ты меня такой сделал… поэтому хочу ещё❤️ чтобы умная голова больше не думала ни о чём, кроме случки❤️',
          );
        }
    }
  },
  /**
   * 获得同心刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   * @param {number} love 爱慕值
   */
  async mark_meek(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait(
            'иногда выключить голову и дать собой вертеть… в каком-то смысле тоже снятие стресса?',
            true,
          );
          await tachyon.say_and_wait([callname, '…нет, о чём я думаю!']);
        } else {
          await tachyon.say_and_wait([
            'м❤️ м-ах❤️ ',
            callname,
            ' ❤️ стой… стоп, стоп❤️',
          ]);
          await tachyon.say_and_wait('ха-а… ха-а…');
          await tachyon.say_and_wait(
            'ведь… ты остановился, как я сказала, почему телу всё равно странно…',
            true,
          );
          await tachyon.say_and_wait(
            [
              'будто… я хочу, чтобы ',
              callname,
              ' плевал на мои слова… и дальше… довёл меня до отключки… о чём я вообще думаю!',
            ],
            true,
          );
        }
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' вдруг яростно мотает головой',
        ]);
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(['подожди… ', callname, '…не так…']);
          await tachyon.say_and_wait(`нет, почему ещё жёстче…!`);
          await tachyon.say_and_wait([
            'кх… ведь это всего лишь ',
            callname,
            '… ведь должен слушаться моих приказов…',
          ]);
          await tachyon.say_and_wait(
            'почему… телу ещё лучше, чем раньше… я что, мазохистка…',
            true,
          );
        } else {
          await tachyon.say_and_wait([
            'м-н… ',
            callname,
            ', стой… слишком сильно… ии❤️',
          ]);
          await tachyon.say_and_wait('мерзко… нет, и нет…');
          await tachyon.say_and_wait('стой! опять вдруг так… н-ах❤️❤️');
          await tachyon.say_and_wait([
            'я же сказала стоп… ',
            callname,
            ' ты, эх',
          ]);
          await tachyon.say_and_wait('ведь… власть должна быть у меня', true);
          await tachyon.say_and_wait(
            'почему я наоборот… хочу, чтобы мной владели…',
            true,
          );
          await tachyon.say_and_wait('плохо… правда плохо❤️', true);
        }
        break;
      case 3:
        await tachyon.say_and_wait(
          'бросить думать и стать чьей-то добычей — вот какой это кайф…',
          true,
        );
        await tachyon.say_and_wait(
          'аа… чему вообще сопротивлялась прежняя я',
          true,
        );
        await tachyon.say_and_wait([
          callname,
          '…нет, господин… дайте мне, ещё хочу…❤️',
        ]);
        await tachyon.say_and_wait(
          'ничего… это просто… просто… игра для остроты',
          true,
        );
        await tachyon.say_and_wait(
          'потом всё станет как было… да… поэтому…',
          true,
        );
        await tachyon.say_and_wait('дайте ещё… больше приказов…❤️');
    }
  },
  /**
   * 获得苦痛刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   * @param {number} love 爱慕值
   */
  async mark_pain(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait([
            'Больно!? да ещё такое хозяину, ',
            callname,
            ' ты о чём думаешь!',
          ]);
        } else {
          await tachyon.say_and_wait([
            'Больно!? ',
            callname,
            '…можно не так грубо?',
          ]);
        }
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(
            'не надо… стоп! больно… больше не трогай!',
          );
        } else {
          await tachyon.say_and_wait([
            callname,
            '!? я, я где-то провинилась… почему, почему так со мной…',
          ]);
        }
        break;
      case 3:
        if (love < 75) {
          await tachyon.say_and_wait(
            'больно… страшно… прости… это я виновата… это я виновата… больше не трогай… больно, больно…',
          );
        } else {
          await tachyon.say_and_wait([
            'больно… ',
            callname,
            '…почему… почему так со мной… я не понимаю…',
          ]);
          await tachyon.say_and_wait(
            'это и есть любовь? почему так со своим любимым… я не понимаю…',
          );
        }
    }
  },
  /**
   * 获得羞耻刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   */
  async mark_shame(tachyon, callname, level) {
    switch (level) {
      case 1:
        await tachyon.say_and_wait('такое… слишком стыдно', true);
        await tachyon.say_and_wait(
          'спокойно… спокойно… как опыт, да, опыт',
          true,
        );
        break;
      case 2:
        await tachyon.say_and_wait('всё… опытом это уже не прикрыть', true);
        await tachyon.say_and_wait(
          'даже я — часть общества… и мне от такого стыдно',
          true,
        );
        await tachyon.say_and_wait(
          'кх… но… почему тогда кайф… что с моим телом…',
          true,
        );
        break;
      case 3:
        await tachyon.say_and_wait('ха-ха… а-ха-ха…', true);
        await tachyon.say_and_wait(
          'даже будучи безумным учёным, которому плевать на чужое мнение… я не думала, что когда-нибудь стану такой',
          true,
        );
        await tachyon.say_and_wait(
          'давай, как угодно… уже, бросила думать…',
          true,
        );
    }
  },
  /**
   * 获得反抗刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   * @param {number} love 爱慕值
   */
  async mark_hate(tachyon, you, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 50) {
          await tachyon.say_and_wait('…у моего терпения есть предел.');
          await tachyon.say_and_wait([
            'не испытывай мой предел, ',
            callname,
            '.',
          ]);
        } else {
          await tachyon.say_and_wait([callname, '…?']);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' застывает, будто самый близкий и надёжный дал пощёчину.',
          ]);
          await era.printAndWait('больше оторопь и недоверие, чем злость.');
        }
        break;
      case 2:
        if (love < 50) {
          await tachyon.say_and_wait('я тебя предупреждала.');
          await tachyon.say_and_wait('два раза — предел.');
        } else {
          await tachyon.say_and_wait([
            'почему… ',
            callname,
            '…я где-то провинилась?',
          ]);
          await tachyon.say_and_wait([
            'это я виновата… скажи, ',
            callname,
            '…',
          ]);
          await tachyon.say_and_wait(
            'иначе… иначе… я не пойму… почему ты так делаешь!',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' смотрит с бездонной болью на ',
            you.get_colored_name(),
            ', в сердце сплошное непонимание и сомнение.',
          ]);
          await era.printAndWait([
            'непонимание ',
            you.get_colored_name(),
            ' и сомнение в себе.',
          ]);
        }
        break;
      case 3:
        if (love < 50) {
          await era.printAndWait([
            'в миг жжение поднимается по горлу ',
            you.get_colored_name(),
            ' и прёт обратно.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' невольно кашляет и в ужасе видит на полу жижу с нитями крови.',
          ]);
          await tachyon.say_and_wait(['это уже третий раз, ', callname, '.']);
          await tachyon.say_and_wait(
            'ты должна благодарить… что номинально ты моё подопытное животное.',
          );
          await tachyon.say_and_wait(
            'а мой принцип — не тратить годный образец, так что благодари, что от тебя ещё есть толк… спокойно… как опыт, да, опыт.',
          );
          await tachyon.say_and_wait(
            'впрочем… даже как образец я обещаю: тебе будет хуже смерти.',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' в глазах отвращение и ненависть.',
          ]);
        } else {
          await tachyon.say_and_wait('аа… хватит.');
          await tachyon.say_and_wait('уже хватит.');
          await era.printAndWait('красные жалюзи закрываются наглухо.');
        }
    }
  },
};
