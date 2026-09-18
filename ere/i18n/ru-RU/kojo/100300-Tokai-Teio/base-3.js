/**
 * @file 东海帝王 - 地下室
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} another
   * @param {CharaTalk} you
   */
  first_time(another, you) {
    era.print([
      'за общежитием ',
      you.get_colored_name(),
      ' как раз встречает ',
      another.get_colored_name(),
      ' и ',
      another.sex,
      ' болтает с удовольствием какое-то время.',
    ]);
    era.print([
      'но ',
      you.get_colored_name(),
      ' не замечает: невдалеке пара глаз не отпускает вас, и чем дольше ',
      you.get_colored_name(),
      ' и ',
      another.sex,
      ' — тем личнее разговоры, тем громче смех; зрачки дрожат и темнеют…',
    ]);
    era.println();

    era.print(['руки их хозяина стискивают всё вокруг до белых суставов.']);
    era.println();

    era.print([
      you.get_colored_name(),
      ' оборачивается и резко открывает глаза.',
    ]);
    era.print(['явь? сон?']);
    era.print([
      you.get_colored_name(),
      ' понимает: лежит на двуспальной кровати с чуть детским убором…',
    ]);
    era.print(['над головой чужой потолок…']);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async flatter(teio, you, callname) {
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait([
        'прости, ',
        callname,
        ', но как ни крути, я не хочу, чтобы ты уходил…',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' пытается утешить подопечную по-старому — бесполезно.',
      ]);
      era.println();

      await teio.say_and_wait([callname, ' … теперь решает великая Тэйо.']);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async ask_release_agree(teio, you, callname) {
    era.printButton('「наигрались, Тэйо. выпускай.」', 1);
    era.printButton('「великая Тэйо… понял, отпусти меня.」', 2);
    await era.input();

    await teio.say_and_wait('…ха.');
    await era.printAndWait([
      'верхом на стуле напротив маленькая ',
      teio.uma_sex_title,
      ' наклоняется всем телом, сине-чёрные глаза не мигая смотрят на ',
      you.get_colored_name(),
      ', как пара чёрных створок, глотающих любой свет.',
    ]);
    await teio.say_and_wait('такое сказать… мой тренер.');
    await era.printAndWait([
      you.get_colored_name(),
      ' кожа на голове стынет, но слабости сейчас не дашь: сверлишь в ответ. Перед тобой ',
      teio.sex,
      ' — и всё ещё надеешься найти за искажённой радужкой того ребёнка, которого берег.',
    ]);
    await era.printAndWait([
      'после взгляда длиной в полвека ',
      teio.get_colored_name(),
      ' опускает голову.',
    ]);
    await teio.say_and_wait(['прости… ', callname, ', я виновата.']);
    await teio.say_and_wait('дверь… сейчас открыта, как хочешь.');
    await era.printAndWait([
      'сказав, ',
      teio.sex,
      ' обхватывает свои ноги, отворачивается боком к ',
      you.get_colored_name(),
      ', освобождая путь.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' идёт к двери, краем глаза видит ту, которую ',
      you.get_colored_name(),
      ' знал — ',
      teio.child_sex_title,
      ' дрожит всем телом—',
    ]);
    era.printButton('оставить', 1);
    era.printButton(`пусть ${teio.sex} идёт с тобой`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' не теряет секунды, шагает в свободный мир — а ',
        teio.sex,
        '? Пора дать урок.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' не колеблясь подходит к сжатому комом силуэту и гладит по голове — там, где ',
        teio.sex,
        ' свернулась; дальше от корня косы вниз по спине до кончика хвоста, и маленькая ',
        teio.uma_sex_title,
        ' сначала дрожит сильнее, потом стихает.',
      ]);
      await era.printAndWait([
        'ближе, ладони к вискам ',
        teio.sex,
        ', пальцем просит обернуться; медленно выходит знакомое лицо, ',
        you.get_colored_name(),
        ' смотрит в небесно-голубые зрачки, промытые слезами, и сам улыбается.',
      ]);
      await you.say_and_wait('пойдём. вместе.');
      await teio.say_and_wait('у…');
      await era.printAndWait([
        teio.sex,
        ' утирает лицо, одной рукой осторожно и крепко ловит ',
        you.get_colored_name(),
        ' за рукав, соскальзывает на пол, плетётся впереди и ведёт ',
        you.get_colored_name(),
        ' наружу.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async ask_release_reject(teio, you) {
    era.printButton('「наигрались, Тэйо. выпускай.」', 1);
    era.printButton('「великая Тэйо… понял, отпусти меня.」', 2);
    await era.input();

    await teio.say_and_wait('…ха.');
    await era.printAndWait([
      'верхом на стуле напротив маленькая ',
      teio.uma_sex_title,
      ' наклоняется всем телом, сине-чёрные глаза не мигая смотрят на ',
      you.get_colored_name(),
      ', как пара чёрных створок, глотающих любой свет.',
    ]);
    await teio.say_and_wait('такое сказать… мой тренер.');
    await era.printAndWait([
      you.get_colored_name(),
      ' кожа на голове стынет, но слабости сейчас не дашь: сверлишь в ответ. Перед тобой ',
      teio.sex,
      ' — и всё ещё надеешься найти за искажённой радужкой того ребёнка, которого берег.',
    ]);
    await teio.say_and_wait('тренер…');
    await era.printAndWait([
      teio.sex,
      ' склоняет голову и улыбается — ',
      you.get_colored_name(),
      ' видел этот жест сто раз, но будто впервые смотрит на этого ',
      teio.sex_code === 1 ? 'самца' : 'самку',
      '.',
    ]);
    await teio.say_and_wait(
      'ты же учил… не питаться лишними иллюзиями насчёт яви.',
    );
    await era.printAndWait([
      'хотя ',
      you.get_colored_name(),
      ' не знает, чего ждал, но сейчас всё ясно.',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   * @param {number} security_level
   * @param {string} cur_time
   */
  async ask_time(teio, you, callname, security_level, cur_time) {
    await era.printAndWait([
      you.get_colored_name(),
      ' спрашивает ',
      teio.get_colored_name(),
      ' который час…',
    ]);
    const buffer = [];
    if (security_level > 3 - era.get('status:3:腿伤')) {
      buffer.push(() =>
        teio.say_and_wait(
          'иное лучше не знать… хи-хи, когда вы меня ребёнком считали, эту фразу очень любили.',
        ),
      );
    } else {
      buffer.push(
        () => teio.say_and_wait('время вместе… на всю жизнь❤️'),
        () =>
          teio.say_and_wait([
            cur_time,
            '～ фу… хе-хе, не гони, ',
            callname,
            ' взрослый, умеет ждать, да',
          ]),
      );
      if (era.get('status:3:腿伤') > 0) {
        buffer.push(() =>
          teio.say_and_wait([
            cur_time,
            '…ещё почти не прошло, уже не терпишь меня, ',
            callname,
            '?',
          ]),
        );
      }
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_success(teio, you) {
    await era.printAndWait('как… нельзя…');
    await era.printAndWait([
      you.get_colored_name(),
      'крутит в голове нынешнее, проигрывает планы — всё либо не выйдет, либо уже пробовал впустую. ',
      you.get_colored_name(),
      ' открывает глаза: самый простой путь — в лоб побить ту, кто ',
      you.get_colored_name(),
      ' держит здесь, — ',
      { color: teio.color, content: 'Тэйо' },
      '.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      'вспоминает приёмы силой мышц, что сам когда-то задавал подопечной, глубоко вдыхает, готовясь снова проверить на себе.',
    ]);
    era.println();
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_escape(teio, you) {
    await teio.say_and_wait(['это что, шутка…']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' рабочей рукой рубит по затылку — и ',
      teio.sex,
      ' оседает.',
    ]);
    await era.printAndWait([
      teio.sex,
      ' поднимает руку на плечо ',
      you.get_colored_name(),
      ', губы будто хотят сказать — и тело мягко падает.',
    ]);
    await era.printAndWait([
      'победитель ',
      you.get_colored_name(),
      ' осторожно держит ',
      teio.sex,
      ', сажает ',
      teio.sex,
      ' к стене и поворачивается к запертой двери.',
    ]);
    await era.printAndWait([
      'пора… столько заключения, осадка, боя — нужен итог.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' из-под одежды достаёт тайно снятый в глине отпечаток ',
      teio.get_colored_name(),
      ' и ведёт к месту замка в памяти.',
    ]);
    await era.printAndWait([
      'если ',
      you.get_colored_name(),
      ' не ошибается в расчётах… так и выйдет.',
    ]);
    era.println();
    await era.printAndWait([
      'вдруг писк, ',
      you.get_colored_name(),
      ' вздрагивает — слава богу, только автозвук замка. ',
      you.get_colored_name(),
      ' выдыхает и идёт к светлой улице…',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_prison(teio, you) {
    await teio.say_and_wait(['это что, шутка…']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' рабочей рукой рубит по затылку — и ',
      teio.sex,
      ' оседает.',
    ]);
    await era.printAndWait([
      teio.sex,
      ' поднимает руку на плечо ',
      you.get_colored_name(),
      ', губы будто хотят сказать — и тело мягко падает.',
    ]);
    await era.printAndWait([
      'победитель ',
      you.get_colored_name(),
      ' осторожно поддерживает, чтобы ',
      teio.sex,
      ' не осела; потом ',
      teio.sex,
      ' садится спиной к стене, а сам(а) поворачивается к запертой двери.',
    ]);
    await era.printAndWait([
      'пора… столько заключения, осадка, боя — нужен итог.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' из-под одежды достаёт тайно снятый в глине отпечаток ',
      teio.get_colored_name(),
      ' и ведёт к месту замка в памяти.',
    ]);
    await era.printAndWait([
      'если ',
      you.get_colored_name(),
      ' не ошибается в расчётах… так и выйдет.',
    ]);
    era.println();
    await era.printAndWait([
      'писк, щелчок — дверь снова на замок. ',
      you.get_colored_name(),
      ' чует беду, отступает, выдыхает, сгибает колени, всей жизнью и весом бьёт в дверь.',
    ]);
    era.println();

    await era.printAndWait([
      'грохот гуляет под землёй, ',
      you.get_colored_name(),
      ' отбрасывает, искры в глазах, боль после схватки с ',
      teio.uma_sex_title,
      ' вспыхивает разом, ',
      you.get_colored_name(),
      ' хрипит, центр тяжести садится сам — и взгляд как раз на спящее лицо подопечной.',
    ]);
    era.println();

    await era.printAndWait([
      teio.sex,
      ' выглядит как та, которую ',
      you.get_colored_name(),
      ' знает — ',
      teio.uma_sex_title,
      '.',
    ]);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' криво усмехается, пальцем снимает каплю с её ресниц. Больше не сопротивляется ',
      teio.sex,
      ', принимает ',
      you.get_colored_name(),
      ' нынешнюю судьбу.',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async battle_fail(teio, you, callname) {
    await era.printAndWait('как… нельзя…');
    await era.printAndWait([
      you.get_colored_name(),
      'крутит в голове нынешнее, проигрывает планы — всё либо не выйдет, либо уже пробовал впустую. ',
      you.get_colored_name(),
      ' открывает глаза: самый простой путь — в лоб побить ту, кто ',
      you.get_colored_name(),
      ' держит здесь, — ',
      { color: teio.color, content: 'Тэйо' },
      '.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      'вспоминает приёмы силой мышц, что сам когда-то задавал подопечной, глубоко вдыхает, готовясь снова проверить на себе.',
    ]);
    era.println();
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait([callname, '? п-прости! но… больше не уходи…']);
    } else {
      await teio.say_and_wait([callname, '?! ты жив… такой ход…']);
      await era.printAndWait([
        you.get_colored_name(),
        ' — и ',
        teio.teen_sex_title,
        ' — легко уложила; похоже, ',
        teio.sex,
        ' удивлена сильнее, чем зла.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async strike_success(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' закрывает глаза, делает вид, что спит, и думает о нынешнем.',
    ]);
    await era.printAndWait([
      'ясно: на помощь не жди, надейся на себя. А при том, как сейчас ',
      you.get_colored_name(),
      ' подопечная… ',
      you.get_colored_name(),
      ' нет уверенности, что ',
      teio.sex,
      ' отпустит — и лоб в лоб тоже не вариант.',
    ]);
    await era.printAndWait(['значит, путь один.']);
    await era.printAndWait([
      you.get_colored_name(),
      ' головой тренера кладёт тактику, сам входит в партию, ждёт мига.',
    ]);
    await era.printAndWait(['мелкие шаги ближе, дыхание, шуршание одежды…']);
    await era.printAndWait([
      'сейчас! ',
      you.get_colored_name(),
      ' из тишины — вскакивает с постели, руки врозь, тянется схватить за волосы и хвост, а ',
      teio.sex,
      '—',
    ]);
    era.println();
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait(['а—']);
      era.println();

      await era.printAndWait([
        teio.sex,
        ' реагирует мгновенно, тело на миг запаздывает — и ',
        you.get_colored_name(),
        ' срывается, обхватывает голень, и ',
        teio.sex,
        ' валится следом — оба обратно в мягкое…',
      ]);
      era.println();

      await teio.say_and_wait([callname, '…не уходи…']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит, как стоит ',
        teio.sex,
        ', хочет сказать — и не открывает рот.',
      ]);
      await era.printAndWait([
        'тренер и подопечная, которую растит ',
        you.sex,
        ', — ',
        teio.uma_sex_title,
        ', — долго смотрят друг на друга и оба по молчаливому уговору отворачиваются.',
      ]);
      era.println();

      await teio.say_and_wait(['…ладно, выпущу.']);
      era.println();

      await era.printAndWait([
        teio.sex,
        'ведёт ',
        you.get_colored_name(),
        ' к двери — и тихий, но ясный голос долетает до ',
        you.get_colored_name(),
        ', до самого уха.',
      ]);
      era.println();

      await teio.say_and_wait(['прости.']);
    } else {
      await teio.say_and_wait(['ай!']);
      era.println();

      await era.printAndWait([
        'давно не слышный ',
        teio.teen_sex_title,
        ' крик своим голосом — ',
        teio.sex,
        ' в руках ',
        you.get_colored_name(),
        ', роли снова наоборот.',
      ]);
      era.println();

      await teio.say_and_wait(['…', callname, '.']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' отвечает смесью привычного массажа и любовной дразни ',
        teio.sex,
        ', ',
        teio.sex,
        ' слабеет, голос уходит в стон…',
      ]);
      era.println();

      await teio.say_and_wait(['нет… ключа… у меня нет…']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' понимает ',
        teio.sex,
        ': несёт ',
        teio.sex,
        ' к двери и толкает.',
      ]);
      era.println();

      await era.printAndWait(['дверь поддаётся легко…']);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async strike_fail(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' закрывает глаза, делает вид, что спит, и думает о нынешнем.',
    ]);
    await era.printAndWait([
      'ясно: на помощь не жди, надейся на себя. А при том, как сейчас ',
      you.get_colored_name(),
      ' подопечная… ',
      you.get_colored_name(),
      ' нет уверенности, что ',
      teio.sex,
      ' отпустит — и лоб в лоб тоже не вариант.',
    ]);
    await era.printAndWait(['значит, путь один.']);
    await era.printAndWait([
      you.get_colored_name(),
      ' головой тренера кладёт тактику, сам входит в партию, ждёт мига.',
    ]);
    await era.printAndWait(['мелкие шаги ближе, дыхание, шуршание одежды…']);
    await era.printAndWait([
      'сейчас! ',
      you.get_colored_name(),
      ' из тишины — вскакивает с постели, руки врозь, тянется схватить за волосы и хвост, а ',
      teio.sex,
      '—',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' падает на кровать в смешной позе.',
    ]);
    era.println();

    await teio.say_and_wait([callname, '…ты что делаешь.']);
    era.println();

    await era.printAndWait([
      'итог: чуть не рассмешил(а) подопечную, и только осторожнее стала ',
      teio.sex,
      '.',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  find_escape(teio, you) {
    era.print([
      'неясно почему ',
      teio.get_colored_name(),
      ' уже нет довольно давно.',
    ]);
    era.print([
      'на пару? тренировку? праздник? или — едва подумалось, ',
      you.get_colored_name(),
      ' ещё тяжелее в голове — врёт администрации про своё исчезновение?',
    ]);
    era.print([
      'больше нельзя тянуть, ',
      you.get_colored_name(),
      ' думает: ждать спасения хуже, чем самому рвануть.',
    ]);
    era.println();
    era.print([
      you.get_colored_name(),
      ' тихо толкает дверь — и на этот раз не заперто! ',
      you.get_colored_name(),
      ' рад, шагает за порог и невольно гладит грудь, чтобы бешеное сердце стихло и не вспугнуло тьму…',
    ]);
    teio.say('эх…');
    era.print(['в миг кровь, что только что кипела, стынет.']);
    era.print([
      'тёплое пахнущее тело льнёт, тонкие сильные руки обхватывают ',
      you.get_colored_name(),
      ' за талию, и ',
      you.get_colored_name(),
      ' не двинется.',
    ]);
    teio.say(
      'этим же приёмом когда-то проверяли, не филоню ли на самостоятельной… взрослая уловка, хе-хе.',
    );
    era.print([
      'роли наоборот, ',
      you.get_colored_name(),
      ' только и может, что подчиниться: ',
      teio.sex,
      ' ведёт обратно в комнату — ждать「кары」…',
    ]);
  },
};
