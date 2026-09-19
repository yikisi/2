/**
 * @file 东海帝王 - 调教
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} call_t 玩家对东海帝王的称呼
   */
  async talk_with_hurt(teio, you, call_t) {
    await teio.say_and_wait('…');
    await you.say_and_wait('…');
    await you.print_and_wait(
      'похоть вспыхивает — говорить не хочется: обнимаетесь, трётесь щекой о щёку, губами и дыханием.',
    );
    await you.print_and_wait([
      'едва касаешься, ',
      teio.sex,
      ' вздрагивает кожей, ',
      call_t,
      ' мгновенно напрягается, будто хочет тебя удержать и продлить близость.',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {boolean} success 调情是否成功
   */
  async lure(teio, you, success) {
    await you.print_and_wait([
      'смотришь на это милое существо и невольно обнимаешь — ',
      teio.sex,
      ' оказывается у тебя в руках. Ворошишь волосы, ',
      teio.sex,
      ' льнёт ближе; гладишь по голове, и ',
      teio.sex,
      ' подставляет макушку.',
    ]);
    await teio.say_and_wait('чего… опять как ребёнка…');
    if (success || era.get(`tcvar:${teio.id}:发情`) > 0) {
      await you.print_and_wait('говорит так… а хвост уже виляет.');
      await you.print_and_wait('похоже, хочет, чтобы продолжал.');
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async switch(teio, you, callname) {
    await teio.say_and_wait([callname, '! ты опять меня обижаешь—']);
    await you.print_and_wait([
      'смотришь на надутые щёки малышки и невольно улыбаешься; ладони на хрупких плечах, ',
      teio.sex,
      ' крутится — и ',
      teio.sex,
      ' взлетает…',
    ]);
    await teio.say_and_wait('э?');
    await you.print_and_wait('земля вверх ногами…');
    await you.say_and_wait('теперь твоё время.');
    await you.print_and_wait(
      'говоришь с ухмылкой ещё чуть ошалевшей подопечной.',
    );
    await you.say_and_wait([
      'учительница Тэйо, ',
      you.actual_name,
      ' ждёт, когда его поучишь.',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async pet_anal(teio, you, callname) {
    if (Math.random() >= 0.5) {
      await you.print_and_wait([
        'после ежедневной — и сегодня нарочной — чистки перед тобой милая чистая дверца.',
      ]);
      await you.print_and_wait([
        'поднимается охота напакостить: палец кружит по тайному месту и нет-нет да пробует отжать замок.',
      ]);
      await teio.say_and_wait(['ай… у, ', callname, '!']);
      await you.print_and_wait('…похоже, не отказ — скорее кайф и «давай».');
      await you.print_and_wait([
        'неужели этот бравый маленький ',
        teio.sex_code === 1 ? 'принц' : 'принцесса',
        ' … там так чувствительно?',
      ]);
    } else {
      await teio.say_and_wait(['у-у…']);
      await you.print_and_wait(['признайся: ', teio.sex, ' терпит подлость.']);
      await you.print_and_wait('впрочем, какая разница…');
      await you.print_and_wait('наоборот: так и есть смысл дразнить.');
      await you.print_and_wait(
        'надеваешь презерватив и тихо стучишься в дверцу…',
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async prepare_anal(teio, you) {
    await teio.say_and_wait(['…']);
    await you.print_and_wait([
      'краснеет ',
      teio.teen_sex_title,
      ' — не в себе, ни слова.',
    ]);
    await you.print_and_wait([
      'поднимаешь хвост и внимательно смотришь на это тайное место.',
    ]);
    await you.print_and_wait([
      'милые ягодицы вздрагивают, розовая чистая дырка раскрыта…',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async ask_foot_job_with_hurt(teio, you, callname) {
    await teio.say_and_wait([
      'прости… ',
      callname,
      ', тут я тебе не помощница.',
    ]);
    await you.print_and_wait([
      'вздох — наполовину вина, наполовину злость — и кажется, что сделал что-то не то.',
    ]);
    await you.say_and_wait(['тогда давай загладим.']);
    await you.print_and_wait([
      'не ждёшь, пока ',
      teio.sex,
      ' отзовётся: мягко берёшь пятку, которую ',
      teio.sex,
      ' и убрать не успела; пальцы по нежной коже, потом прижимаешься лицом.',
    ]);
    await teio.say_and_wait(['—!']);
    await you.print_and_wait([
      'уже ухоженные, вымытые ступни ',
      teio.uma_sex_title,
      ' быстро теплеют.',
    ]);
    await you.print_and_wait([
      'с тёмной усмешкой рука вниз, смотришь в глаза подопечной — ',
      teio.sex,
      ' видит, как ты сам(а) себя трогаешь.',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_tail_job(teio, you, is_first) {
    if (is_first) {
      await teio.say_and_wait(['кх… такое…']);
      await you.print_and_wait([
        'просьба, может, и через край, но ',
        teio.sex,
        ' только краснеет и всё равно соглашается…',
      ]);
      await you.print_and_wait(['и, кажется, даже любопытно.']);
      await you.print_and_wait([
        'гладкий живой хвост мигом обвивает стояк — от такого тычка чуть не кончаешь.',
      ]);
      await teio.say_and_wait(['хе-хе…']);
      await you.print_and_wait([
        teio.sex,
        ' светит глазами, хвостом изо всех сил дразнит самое чувствительное.',
      ]);
    } else {
      await you.print_and_wait(['движения грубеют… или просто привыкает.']);
      await teio.say_and_wait(['ва… намочила…']);
      await you.print_and_wait([
        'хвост, вымазанный пошлым соком до липкости, из этого блеска на шерсти всегда что-то вычитывает.',
      ]);
      await you.print_and_wait(['и… не только это…']);
      await you.print_and_wait([
        'хвост дёрнется-свернётся — и верхняя коса тоже вплетена: двойная спираль вокруг.',
      ]);
      await you.print_and_wait([
        'маленькая ',
        teio.uma_sex_title,
        ' сама ещё не замечает: железы хвоста уже пахнут течкой и ещё сильнее будят тех, кто здесь.',
      ]);
      await you.print_and_wait(['дыхание само тяжелеет…']);
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async preg_report(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит вниз на отчёт в руках, принимает то, что там, поднимает взгляд на подопечную у окна.',
      ]);
      await era.printAndWait([
        'закат косо входит в комнату и ложится, где ',
        teio.sex,
        ' гладит живот, и где ',
        teio.sex,
        ' слабо качает голенью.',
      ]);
      await teio.say_and_wait(['тренер… тренер.']);
      await era.printAndWait([
        teio.sex,
        ' улыбается, указывает на живот и манит ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' решается и идёт по тени.',
      ]);
      await era.printAndWait('вы — семья.');
    } else {
      await teio.say_and_wait(['тренер, тренер—']);
      await era.printAndWait([
        you.get_colored_name(),
        ' ещё не понял, что случилось, — руки сами ловят подопечную, что в панике прибежала, и только через миг разбирает, что ',
        teio.sex,
        ' держит в руках.',
      ]);
      await era.printAndWait(['вот так…']);
      await era.printAndWait([
        you.get_colored_name(),
        ' опускает взгляд и упирается в живот, который ',
        teio.sex,
        ' не прячет.',
      ]);
      await you.say_and_wait(['там это, ', teio.sex, ' и я…'], true);
      await era.printAndWait([
        you.get_colored_name(),
        ' в объятиях что-то вздрагивает, ',
        you.get_colored_name(),
        ' приходит в себя и встречает глаза подопечной — ',
        teio.sex,
        ' тоже смотрит на ',
        you.get_colored_name(),
        ', лицо теплеет и взрослеет.',
      ]);
      await era.printAndWait([
        'ну что ж, ',
        you.get_colored_name(),
        ' думает: в планах теперь не только тренировки.',
      ]);
    }
  },
};
