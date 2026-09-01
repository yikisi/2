/**
 * @file 春乌拉拉 - 地下室
 * @author 99
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async first_prison(urara, inner_urara, you, callname) {
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      'Эх, вы… почему же всё стало так?',
    );
    await inner_urara.say_as_unknown_and_wait([
      'Впрочем, к счастью, Урара не будет к тренеру ',
      urara.uma_sex_title,
      ' (вы) слишком жестока — не то что другие…',
    ]);
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      ' растерянно поднимается с кровати: под собой незнакомая постель, перед глазами лишь тёмный потолок, а рядом всё не смолкают прерывистые всхлипы.',
    ]);
    await era.printAndWait([
      'Заметив, что ',
      you.get_colored_name(),
      ' просыпается, сжавшаяся в комок у края кровати маленькая ',
      urara.uma_sex_title,
      ' торопливо и бессильно поднимает уши, трёт заплаканное личико и поворачивается к ',
      you.get_colored_name(),
      ' спиной.',
    ]);
    await urara.say_and_wait([
      'Прости, но хотя бы в этот раз! Можно остаться? Потом Урара снова станет хорошей девочкой! Поэтому…!',
    ]);
    await era.printAndWait([
      'Даже когда слёзы без конца капают на подогнутые колени, даже когда слова — как неприкрытая ловушка, ',
      urara.teen_sex_title,
      ' всё равно не смогла стать 「подлой」, как хотела.',
    ]);
    await era.printAndWait([
      'По крайней мере, полуприкрытая дверь камеры не заперта.',
    ]);

    era.println();

    await inner_urara.say_as_unknown_and_wait([
      '…Ха-а… тогда, тренер ',
      you.adult_sex_title,
      ' (вы) ваш выбор —',
    ]);
    era.printButton('Остаться здесь', 1);
    era.printButton('Развернуться и уйти', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        'Медленно придвигается вплотную к маленькой ',
        urara.uma_sex_title,
        ' сзади, ',
        you.get_colored_name(),
        ' сзади берёт за руку ',
        urara.sex,
        ' — ледяную, маленькую.',
      ]);
      await urara.say_and_wait([
        'Э? ',
        callname,
        ' правда останешься… правда? Урара, правда можно быть плохой девочкой…?',
      ]);
      await era.printAndWait([
        'Кое-как вытерев размазанные от слёз щёки, сквозь слёзы улыбаясь, ',
        urara.get_colored_name(),
        ' разворачивается и мягко валит ',
        you.get_colored_name(),
        ' под себя.',
      ]);
      await urara.say_and_wait([
        'Тогда сегодня, завтра и послезавтра тоже… нет, так слишком своевольно, так что хватит и сейчас, да…?',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'Очевидно: хотя вас сюда и привели, ',
        urara.sex,
        ' так и не решилась. В общем, вам остаётся просто наслаждаться.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Впрочем, уходя, лучше убаюкать Урару, хорошо? — ',
        urara.sex,
        ' ведь сегодня очень долго плакала.',
      ]);
    } else {
      await era.printAndWait([
        'Больше не смотрит на ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' молча встаёт и, не оглядываясь, идёт к двери в конце комнаты.',
      ]);
      await urara.say_and_wait([
        '…Урара поняла: плохой девочкой быть нельзя, прости… но отдать ',
        callname,
        ' другим…',
      ]);
      await urara.say_and_wait([
        'Но даже просто место рядом… ',
        callname,
        ', если будет ещё раз, если будет ещё раз…!',
      ]);
      await era.printAndWait([
        'Под глухой стук отпружинившей тяжёлой двери не получившая ответа маленькая ',
        urara.uma_sex_title,
        ', брошена в дырявой тьме.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '…Не слишком ли сговорчиво? 『Решиться стать подлой』 — такое ',
        urara.sex,
        ' всё-таки вряд ли осилит…',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'И вы тоже хватили через край. Вы же должны знать: если Урара потом и впрямь что-нибудь выкинет, я, как правило, буду не на вашей стороне, ясно?',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  welcome(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      'Как и следовало ждать: в таких делах есть только первый раз и бессчётное множество… и права выбора нет.',
    );
    inner_urara.say_as_unknown(
      'Впрочем, не тревожьтесь так: раз уж вы здесь — почему бы не насладиться своеволием Урары?',
    );
    era.drawLine();
    era.print([
      'Проснувшись в незнакомой и вместе с тем знакомой комнате, ',
      you.get_colored_name(),
      ' оказывается в на удивление тёплом сумраке, а лежащая у ',
      you.get_colored_name(),
      ' сбоку ',
      urara.get_colored_name(),
      ' — зардевшиеся вишнёвые глаза жаркие и вязкие.',
    ]);
    urara.say([
      'Урара и правда стала плохой девочкой, но раз уж быть плохой — то ещё своевольнее, так что ',
      callname,
      '……',
    ]);
    urara.say([
      'в этот раз побудь со мной подольше, и… это ',
      callname,
      ' без права отказаться, ясно?',
    ]);
    era.print([
      'Не дожидаясь, пока ',
      you.get_colored_name(),
      ' ответит, маленькая ',
      urara.uma_sex_title,
      ' обеими руками с силой прижимает ',
      you.get_colored_name(),
      ' под себя, и нежное детское улыбающееся лицо постепенно заливает румянцем.',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      'Простите, Урара всё-таки стала плохой девочкой — и тут уж я бессильна.',
    ]);
    inner_urara.say_as_unknown([
      'Если вы захотите что-нибудь сделать, в большинстве случаев я закрою на это глаза. Наслаждайтесь, хорошо?',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async ask_release_agree(urara, inner_urara, you, callname) {
    await era.printAndWait([
      'Если то, что думает ',
      you.get_colored_name(),
      ', обосновано, ',
      urara.get_colored_name(),
      ' почти наверняка согласится. Даже в заточении эта тонкая молчаливая связь всё ещё держится.',
    ]);
    await urara.say_and_wait([
      'М-м! Ничего, ',
      callname,
      ' так говорит тоже ради Урары, да? Тогда я теперь тоже не могу своевольничать дальше…',
    ]);
    await urara.say_and_wait([
      callname,
      ', выйдя, Урара пока не сможет тебя защитить, так что будь осторожнее! Увидимся завтра…?',
    ]);
    await era.printAndWait([
      'Сдерживая слёзы, не давая им упасть, ',
      urara.get_colored_name(),
      ' слегка трёт зардевшиеся уголки глаз и, не в силах расстаться, открывает для ',
      you.get_colored_name(),
      ' механизм на двери.',
    ]);
    await era.printAndWait([
      'Глядя на поникшую в тени маленькую ',
      urara.uma_sex_title,
      ', на миг у ',
      you.get_colored_name(),
      ' вдруг снова вспыхивает тонкая мысль ещё побыть рядом, пока ',
      urara.sex,
      ' здесь?',
    ]);
    await era.printAndWait([
      'Но остаться сейчас уже невозможно. Волоча ставшие неподъёмно тяжёлыми шаги, ',
      you.get_colored_name(),
      ' идёт к какой-то пустой 「свободе」…',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Но, как и сказала Урара, лучше будьте осторожны и не возвращайтесь сюда просто так, хорошо?',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   */
  async ask_release_reject(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      'Слишком рано, да? Забудьте пока об этих мелочах: по крайней мере сейчас я не дам вам легко раскрыть рот.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Чего бы вы ни хотели добиться, для меня это ничуть не важнее 『текущего мига Урары』.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Хорошо, пока оставьте мысль выйти. Теперь можете дышать.',
    ]);
    await era.printAndWait([
      'С концом декларации удушающая сила отпускает у ',
      you.get_colored_name(),
      ' горло, едва собравшееся подать голос, но ледяное чувство чужого взгляда в спину ползёт на шею.',
    ]);
    await era.printAndWait([
      'Краем глаза глянув назад, пепельно-чёрная и прозрачная, почти слившись с окружением 「 ',
      inner_urara.get_colored_actual_name(),
      ' 」 отвечает ледяным взглядом на ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'Кроме уловок и отговорок необходимо ещё и терпение…',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {string} cur_time 当前时间
   */
  async ask_time(urara, callname, cur_time) {
    await urara.say_and_wait([
      'Э? А, подожди секунду… сейчас время ',
      cur_time,
      '.',
    ]);
    await urara.say_and_wait([
      callname,
      ' Что, вспомнилось что-то важное? Прости, Урара обычно не умеет следить за временем, и сейчас тоже не подумала…',
    ]);
    await urara.say_and_wait([
      'Но раз уж получилось остаться, можно ещё побыть с Урарой? Урара ещё…',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  back_basement(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      'В этом деле, как водится, есть только первый раз и бесчисленные… и выбора нет вовсе.',
    );
    inner_urara.say_as_unknown(
      'Впрочем, не тревожьтесь так: раз уж вы здесь, почему бы не насладиться капризами Урары?',
    );
    era.drawLine();
    era.print([
      'Проснувшись в незнакомой и вместе с тем знакомой комнате, ',
      you.get_colored_name(),
      ' поднимается из тёплой полутьмы и обнаруживает, что в комнате никого нет.',
    ]);
    era.print([
      'И как раз когда ',
      you.get_colored_name(),
      ' гадает, кто зачинщик, из-за двери вдалеке доносятся мелкие шажки, а следом — звук отпираемого замка.',
    ]);
    urara.say([
      callname,
      ', ты уже не спишь! Хе-хе… и в этот раз тоже побудь со мной подольше, ладно?',
    ]);
    era.print([
      'Увидев, как розово-вишнёвая маленькая зачинщица вприпрыжку и с силой, смеясь, бросается навстречу, у ',
      you.get_colored_name(),
      ' едва проснувшееся сознание снова идёт кругом.',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      'Простите, Урара всё же стала плохой девочкой — тут уж и я ничего не могу поделать.',
    ]);
    inner_urara.say_as_unknown([
      'Если захотите что-нибудь предпринять, в большинстве случаев я закрою на это глаза. Наслаждайтесь?',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   */
  async battle_escape(urara, inner_urara, you) {
    await era.printAndWait([
      'Изо всех сил скинув ',
      urara.get_colored_name(),
      ' её хватку, ',
      you.get_colored_name(),
      ' тащит тяжёлое тело к последнему механизму.',
    ]);
    await era.printAndWait([
      'К счастью, оставшихся сил всё ещё хватает, чтобы ',
      you.get_colored_name(),
      ' смог(ла) сбежать отсюда. Распахнув тяжёлую дверь, ',
      you.get_colored_name(),
      ' делает шаг к далёкой точке света — символу свободы.',
    ]);
    await era.printAndWait([
      'В миг выхода из комнаты беспричинный озноб вместе с низким стоном, бьющим прямо в мозг, сзади взбирается на ',
      you.get_colored_name(),
      ' спину.',
    ]);
    await era.printAndWait([
      'Обернувшись, ',
      you.get_colored_name(),
      ' словно видит ещё одну ',
      inner_urara.get_colored_name(),
      ' стоит у двери, и исходящая от неё злоба стынет до дрожи.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Итак, наш герой вот так безответственно сбежал. Поздравить?',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '…Беги. На этот раз будем считать, что я тебя не поймала.',
    ]);
    await era.printAndWait([
      'Под взглядом, что колет в спину, ',
      you.get_colored_name(),
      ' изо всех сил вырывается из подвала и падает на твёрдую землю — только тогда это кончается.',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async battle_prison(urara, inner_urara, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' на удивление гладко сбрасывает ',
      urara.get_colored_name(),
      ' её хватку и выходит к последней преграде. Стоит снять этот механизм — и можно——',
    ]);
    await you.say_and_wait('……');
    await era.printAndWait([
      'Жаль только, что застыв на месте ',
      you.get_colored_name(),
      ', сколько ни пытайся, так и не может разгадать этот простой до жестокости механизм:',
    ]);
    await era.printAndWait([
      'По сравнению с наглухо запертой тяжёлой дверью 「 ',
      callname,
      ' 」 и 「Урара」 на совместном фото улыбки обоих тонки и хрупки, как цикадовые крылья на солнце.',
    ]);
    await era.printAndWait(['Следом — 「насмешка дьявола」.']);
    await inner_urara.say_as_unknown_and_wait([
      'Очень просто: тренеру достаточно взяться за ручку и рвануть это фото с той стороны, где Урара.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'М~ колеблетесь? Но для вас, кто применял к Ураре насилие, это ерунда, верно?',
    ]);
    await era.printAndWait([
      'Вглядываясь в улыбку на фото, ',
      you.get_colored_name(),
      ' всё же бессильно отводит дрожащую руку, и проклятие у уха после холодного фырканья рассеивается.',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {boolean} is_back 春乌拉拉是刚回来还是刚醒来
   */
  find_escape(urara, inner_urara, you, callname, is_back) {
    if (is_back) {
      era.print([
        'Пока ',
        urara.get_colored_name(),
        ' нет, ',
        you.get_colored_name(),
        ' собирается поскорее сбежать, но как раз когда ',
        you.get_colored_name(),
        ' бьётся над механизмами до изнеможения, дверь вдруг открывается.',
      ]);
      urara.say([
        'Э? ',
        callname,
        ' даже это не по зубам? Урара уже ушла на какое-то время, а сбежать так и не вышло!',
      ]);
      era.print([
        'Дверь медленно запирает свет снаружи, ',
        urara.teen_sex_title,
        ' — крошечное чистое личико вместе с накрывшей тьмой окрашивается лёгкой насмешкой и издёвкой.',
      ]);
    } else {
      era.print([
        'Пока ',
        urara.get_colored_name(),
        ' ещё не проснулась, ',
        you.get_colored_name(),
        ' решает бежать, но когда ',
        you.get_colored_name(),
        ' бьётся над механизмами до изнеможения, сзади подаёт голос ',
        urara.teen_sex_title,
        '.',
      ]);
      urara.say([
        'Э? ',
        callname,
        ' ещё не открылось? Урара уже проснулась, знаешь? ',
        callname,
        ' мозги и правда куда слабее, чем у Урары?',
      ]);
      era.print([
        'Тихо стоя позади, наблюдает за ',
        you.get_colored_name(),
        ' в тщетных усилиях, ',
        urara.teen_sex_title,
        ' — крошечное чистое личико в полутьме окрашено лёгкой насмешкой и издёвкой.',
      ]);
    }
    urara.say([
      callname,
      ' замер же, но оправдываться не надо, хорошо? Я вовсе не злюсь!',
    ]);
    era.print([
      'Словно маленький взрослый, перед ',
      you.get_colored_name(),
      ' замершая ',
      urara.get_colored_name(),
      ' словно учитель, что воспитывает озорного ученика, кидает на ',
      you.get_colored_name(),
      ' взгляд 「с живым интересом」.',
    ]);
    era.print([
      'Хоть и говорит это легко, дальше без смеха в улыбке ',
      urara.get_colored_name(),
      ' всё равно к ',
      you.get_colored_name(),
      ' прижимается ещё теснее.',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async flatter(urara, you, callname) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait([
        'Э? ',
        callname,
        ' это от души? Но мне и так радостно, что хочешь сказать, так что… кхлюп~ ха-нн~~',
      ]);
      await urara.say_and_wait([
        'Хе-хе~ это награда для ',
        callname,
        ', если тренер чуть-чуть сильнее полюбит Урару — будет ещё лучше!',
      ]);
      await era.printAndWait([
        'С румянцем на щеках плюхается к ',
        you.get_colored_name(),
        ' на колени, и маленькая ',
        urara.uma_sex_title,
        ' влажным вязким глубоким поцелуем затыкает ',
        you.get_colored_name(),
        ' сладкие речи.',
      ]);
    } else {
      await urara.say_and_wait([
        'Э? А! Я понимаю ',
        callname,
        ', и даже если это не от души — ничего, ведь Урара тоже виновата.',
      ]);
      await urara.say_and_wait([
        'Урара уже счастлива просто быть с ',
        callname,
        ', но стоит подумать о том, что снаружи — сразу становится так тревожно…',
      ]);
      await urara.say_and_wait([
        'Раз уж сейчас ',
        callname,
        ' хочешь, то… Урара тоже сможет ненадолго забыть тревоги, да?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  get_up(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      'Как и следовало ожидать, в этом деле есть только первый раз и бессчётное множество раз… и даже права выбора нет.',
    );
    inner_urara.say_as_unknown(
      'Впрочем, вы тоже не слишком тревожьтесь: раз уж пришли — как насчёт насладиться своеволием Урары?',
    );
    era.drawLine();
    era.print([
      'Просыпаешься в незнакомой и в то же время знакомой комнате, проводишь взглядом тепло рядом — маленькая ',
      urara.uma_sex_title,
      ' даже во сне всё ещё крепко обнимает ',
      you.get_colored_name(),
      '.',
    ]);
    era.print([
      'Кажется, тоже отозвалась на пробуждение ',
      you.get_colored_name(),
      ', с распущенными длинными волосами ',
      urara.get_colored_name(),
      ' тоже постепенно открывает в полутьме влажные, но лишённые блеска вишнёвые глаза.',
    ]);
    urara.say([
      'А-а~ ',
      callname,
      ', как спалось? Который сейчас час, а? Полежим ещё чуть-чуть? Эх-хе-хе~ чмок-мм~~~',
    ]);
    era.print([
      'Перевернувшись, наваливается на ',
      you.get_colored_name(),
      ' телом, не дав и рта открыть, ',
      urara.teen_sex_title,
      ' мягкими губами и языком нежно и без права отказа затыкает слова у самого рта.',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      'Прости, Урара всё-таки стала плохой девочкой, и с этим я уже ничего не поделаю.',
    ]);
    inner_urara.say_as_unknown([
      'Если вы захотите что-нибудь сделать, в большинстве случаев я закрою на это глаза. Хорошенько насладитесь?',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   */
  async strike_success(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      'Вот так, тренер- ',
      you.adult_sex_title,
      ' (вы) внезапным нападением на маленькую подопечную успешно сбежал(а) из подвала… эх…',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '…Вы ещё и рука у вас не дрогнула, но раз уж вы сделали такой выбор, мне и комментировать нечего.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Право не знаю, что такого требовало от вас именно этого способа, но ладно: я пока и сама не хочу видеть ваше лицо.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '…Не волнуйтесь, я помогу вам утешить Урару: всё вернётся как было, целиком…',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   */
  async strike_fail(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      'Вот так, тренер- ',
      you.adult_sex_title,
      ' (вы) рассчитывал(а) внезапно напасть на маленькую подопечную — и, как и следовало ожидать, был(а) вырублен(а).',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Додзё после GAME OVER и всё такое… такого нет, и даже если бы было — конструктивных советов всё равно не будет, ясно?',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'Вы тоже хорошенько подумайте: Урара, как ни крути, всё это время держится на подъёме как ',
      inner_urara.uma_sex_title,
      ', так что этот результат не так уж странен, правда?',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'И напоследок… простите: хотя первым ошиблись вы, но то, что Урара бьёт без меры, я как следует скажу — ',
      inner_urara.sex,
      '…',
    ]);
  },
};
