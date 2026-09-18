/**
 * @file 曼城茶座 - 地下室
 * @author Necroz
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  welcome(coffee, you, callname) {
    era.print([
      '…',
      you.get_colored_name(),
      ' медленно открывает глаза. Поза, будто тебя бросили на кровать как попало, заставляет ',
      you.get_colored_name(),
      ' чувствовать себя скверно; голова гудит.',
    ]);
    era.print([
      'Не успеваешь ',
      you.get_colored_name(),
      ' оценить чужой потолок — знакомое лицо уже в поле зрения ',
      you.get_colored_name(),
      '.',
    ]);
    era.println();

    coffee.say(['…Доброе утро, ', callname, ', хотя, может, уже полдень…']);
    coffee.say(['Почему проснулся(ась) здесь…?']);
    coffee.say([
      'Сегодня я обыскала весь Трейсен и не нашла ',
      callname,
      ', в конце друг указал, где ты…',
    ]);
    coffee.say(['…Если так ответить — поверишь?']);
    era.println();

    era.print([
      'Затылок ещё ноет, ',
      coffee.get_colored_name(),
      ' этими словами явно не убеждает ',
      you.get_colored_name(),
      '.',
    ]);
    era.println();

    coffee.say(['…В последнее время ', callname, ' со мной наедине всё реже…']);
    era.println();

    era.print([
      coffee.get_colored_name(),
      ' мягко давит на виски ',
      you.get_colored_name(),
      ' и низко говорит на ухо.',
    ]);
    era.println();

    coffee.say([
      '…Я понимаю, ',
      callname,
      ' тебе тяжело. Тренер Трейсена, наверное, очень устаёт?',
    ]);
    coffee.say([
      '…Но даже уставая, нельзя забывать наш уговор… Захочешь бежать — в погоне я уверена…',
    ]);
    coffee.say(['…Полежи здесь. Снять усталость — как смотришь?']);
    coffee.say([
      'То, что сказала сначала, и правда не ложь… ',
      callname,
      ' сюда привёл не 『я』… Хотя я и не возражала…',
    ]);
    coffee.say(['Итак… пока я не насыщусь, побудь здесь…']);
    era.println();

    era.print([
      coffee.get_colored_name(),
      ' договаривает — и холод подвала стелется ближе…',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async ask_release_agree(coffee, you, callname) {
    await coffee.say_and_wait(['Хочешь выйти…?']);
    era.println();

    await era.printAndWait([
      'Услышав просьбу ',
      you.get_colored_name(),
      ', ',
      coffee.get_colored_name(),
      ' делает чуть озабоченное лицо.',
    ]);
    era.println();

    await coffee.say_and_wait([
      'Можно… ',
      callname,
      ' оказался(ась) здесь случайно, и я уже почти сыта…',
    ]);
    await coffee.say_and_wait(['Дверь там… как знаешь…']);
    await coffee.say_and_wait(['Открыть…? Она никогда не была заперта…']);
    era.println();

    await era.printAndWait(['Серьёзно…']);
    await era.printAndWait([
      you.get_colored_name(),
      ' крутишь ручку — щелчок, дверь легко открывается.',
    ]);
    await era.printAndWait([
      '…В этот миг ',
      you.get_colored_name(),
      ' чувствует: все прошлые «взломы» были как сон.',
    ]);
    era.println();

    await coffee.say_and_wait(['…', callname, '.']);
    era.println();

    await era.printAndWait([coffee.get_colored_name(), ' — голос сзади.']);
    era.println();

    await coffee.say_and_wait(['Пожалуйста… обязательно запомни наш уговор…']);
    await coffee.say_and_wait([
      'В следующий раз, возможно… я сама приведу ',
      callname,
      ' сюда…',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {boolean} is_first 是否是第一次请求释放被拒绝
   */
  async ask_release_reject(coffee, you, callname, is_first) {
    if (is_first) {
      await coffee.say_and_wait([
        'Можно… с самого начала не я привела ',
        callname,
        ' сюда…',
      ]);
      era.println();

      await era.printAndWait([
        'Скрип — и та дверь, о которой мечтал(а) днями, открывается сама.',
      ]);
      await era.printAndWait([
        'Глядя на лестницу наружу, ',
        you.get_colored_name(),
        ' чуть не плачет от радости и сразу шагает.',
      ]);
      await era.printAndWait(['Через ступеньки, повороты…']);
      await you.say_and_wait(['Э…'], true);
      await you.say_and_wait(['Лестница… не слишком ли длинная?'], true);
      era.println();

      await era.printAndWait(['Эйфория побега спадает, голова проясняется.']);
      await you.say_and_wait(['Сколько… я уже на этих ступенях?'], true);
      await era.printAndWait([
        'С этой мыслью ',
        you.get_colored_name(),
        ' вдруг замечает: холод подвала, что всё время обвивал ',
        you.get_colored_name(),
        ', так и не ушёл от ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' бежишь вверх как сумасшедший(ая), мозг убаюкивает: может, кажется; может, в Трейсене и правда такой глубокий подвал?',
      ]);
      await era.printAndWait([
        'Наконец ',
        you.get_colored_name(),
        ' оступается, катится вниз, пока не врезается в стену.',
      ]);
      era.println();

      await era.printAndWait(['Странно… упал(а) с лестницы — а боли нет…']);
      await era.printAndWait([
        'Поднимаешь голову вниз по ступеням: дверь подвала распахнута, как когда уходил(а).',
      ]);
      await era.printAndWait(['Шёл(а) так долго — и снова у двери подвала…']);
      await era.printAndWait(['Вернись, вернись — будто шепчут в ухо.']);
      await era.printAndWait([
        'Молчишь долго, ',
        you.get_colored_name(),
        ' всё же возвращается внутрь.',
      ]);
      era.println();

      await coffee.say_and_wait(['С возвращением, ', callname, '…']);
      era.println();

      await era.printAndWait([
        'Будто знала конец заранее, ',
        coffee.get_colored_name(),
        ' улыбается и тихо смотрит на ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(['Дверь за спиной медленно закрывается.']);
    } else {
      await coffee.say_and_wait([callname, '…Хочешь ещё раз?']);
      era.println();

      await era.printAndWait([
        'Вспомнив прошлый раз, ',
        you.get_colored_name(),
        ' пробирает холодом.',
      ]);
      era.println();

      await coffee.say_and_wait(['Хе-хе… я ещё не сыта, ', callname, '…']);
    }
  },
  /**
   * @param {CharaTalk} coffee
   * @param {string} cur_time
   */
  async ask_time(coffee, cur_time) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait(['Время… сейчас ', cur_time]);
      await coffee.say_and_wait('Не бойся, времени полно…');
    } else {
      await coffee.say_and_wait([cur_time, '…Что-то не так?']);
      await coffee.say_and_wait(
        'Если срочное дело… есть 『кто-то』, кто сделает за тебя',
      );
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async battle_success(coffee, you) {
    await era.printAndWait([
      'Молча извиняешься про себя, ',
      you.get_colored_name(),
      ' сразу валит ',
      coffee.get_colored_name(),
      ' на кровать.',
    ]);
    await era.printAndWait([
      'Под её ждущим взглядом кладёшь руки на белую шею…',
    ]);
    era.println();
    await era.printAndWait(['…Получилось.']);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' с самого начала не сопротивляется, даже кладёт ладони на предплечья ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'Может, ',
      coffee.sex,
      ' принимает это за жёсткую прелюдию…',
    ]);
    await era.printAndWait([
      'Своими руками удушить до обморока подопечную, которая тебя любит… вот это да…',
    ]);
    await era.printAndWait(['…Сначала свалить.']);
  },
  /** @param {CharaTalk} you 玩家 */
  async battle_escape(you) {
    await era.printAndWait([
      'Пошарив какое-то время, ',
      you.get_colored_name(),
      ' наконец понимает: дверь и не была заперта.',
    ]);
    await era.printAndWait([
      'Стоит ',
      you.get_colored_name(),
      ' крутить ручку — с той стороны такая же сила мёртво держит другую.',
    ]);
    await era.printAndWait([
      'Сделать это беззвучно умеет… ',
      you.get_colored_name(),
      ' знает только одного.',
    ]);

    era.printButton('「Друг… это ты?」', 1);
    await era.input();

    await era.printAndWait(['Нет ответа.']);

    era.printButton('「Что не уследил(а) за Кафе вовремя — моя вина…」', 1);
    era.printButton(
      '「Но держать меня в подвале — не выход. Дай шанс исправиться…!」',
      2,
    );
    await era.input();

    await era.printAndWait([
      'Ручка крутится сама, дверь медленно открывается.',
    ]);
    era.println();

    era.printButton('「Спасибо, я——」', 1);
    await era.input();

    await era.printAndWait([
      'Не успеваешь ',
      you.get_colored_name(),
      ' договорить благодарность — ',
      you.get_colored_name(),
      ' пинком вылетает за порог, дверь хлопает.',
    ]);
    await era.printAndWait([
      'Трёшь зад, ',
      you.get_colored_name(),
      ' выходит из подвала.',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async battle_prison(coffee, you, callname) {
    await era.printAndWait([
      'Такой замок ',
      you.get_colored_name(),
      ' никогда не видел(а)…',
    ]);
    await era.printAndWait([
      'Казалось бы, уже должен поддаться — ручка как приварена.',
    ]);
    await era.printAndWait([
      '…',
      you.get_colored_name(),
      ' остаётся только сдаться.',
    ]);
    era.println();
    await coffee.say_and_wait([
      callname,
      ', если выпустил пар… теперь моя очередь…',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async battle_fail(coffee, you, callname) {
    await era.printAndWait([
      'Молча извиняешься про себя, ',
      you.get_colored_name(),
      ' сразу валит ',
      coffee.get_colored_name(),
      ' на кровать.',
    ]);
    await era.printAndWait([
      'Под её ждущим взглядом кладёшь руки на белую шею…',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' недооценил(а) телосложение ',
      coffee.uma_sex_title,
      '.',
    ]);
    await era.printAndWait([
      'Пока ',
      you.get_colored_name(),
      ' не выжал(а) все силы, ',
      coffee.get_colored_name(),
      ' так и не теряет сознание, как ',
      you.get_colored_name(),
      ' рассчитывал(а).',
    ]);
    await era.printAndWait([
      'Мокрый взгляд, красные щёки… явно ',
      you.get_colored_name(),
      ' довёл(а) до течки…',
    ]);
    era.println();

    await coffee.say_and_wait([
      callname,
      ', если выпустил пар… теперь моя очередь…',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {boolean} is_back 曼城茶座是刚回来还是刚醒来
   */
  find_escape(coffee, you, callname, is_back) {
    era.print(['Чёрт, замок не идёт!']);
    era.print([
      'Пока ',
      you.get_colored_name(),
      ' возится с замком, у ',
      you.get_colored_name(),
      ' у лица появляется другое лицо.',
    ]);
    era.println();

    coffee.say([callname, '…Что ты делаешь?']);
    era.println();

    era.print('Кафе?!');
    if (is_back) {
      era.print(['Когда вернулась, я же всё время у двери!']);
    } else {
      era.print(['Когда проснулась — всё, крышка…']);
    }
    era.print([
      you.get_colored_name(),
      ' вздрагиваешь, ноги мягкие; не подхвати ',
      coffee.get_colored_name(),
      ' вовремя ',
      you.get_colored_name(),
      ' — сел(а) бы на пол.',
    ]);
    era.println();

    coffee.say(['Пожалуйста, не делай странного… я растеряюсь…']);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async flatter(coffee, you) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        you.get_colored_name(),
        ' сам(а) подходишь к ',
        coffee.get_colored_name(),
        ', гладишь гладкие длинные волосы — ',
        coffee.sex,
        ' не отстраняется.',
      ]);
      await era.printAndWait([
        'Это явно по нраву ',
        coffee.get_colored_name(),
        ': удобно устраивается на плече ',
        you.get_colored_name(),
        '; лёгкий запах волос мутит ',
        you.get_colored_name(),
        '.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' говоришь ',
        coffee.get_colored_name(),
        ' сладости — самому(ой) ',
        you.get_colored_name(),
        ' аж красно.',
      ]);
      await era.printAndWait([
        'Даже это не сработает——',
        coffee.get_colored_name(),
        ' взгляд ',
      ]);
      await era.printAndWait([
        '…Но ',
        coffee.sex,
        ' хвостом сзади выдаёт обратное.',
      ]);
    }
  },
  /**
   * 限定从PlanB速子地下室救出玩家
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
   */
  async rescue_from_tachyon(coffee, you, callname, c_call_t) {
    await coffee.say_and_wait(
      'Только сейчас изволила открыться… этот вид слишком жалок…',
    );
    await coffee.say_and_wait('Пересуды, сомнения, осуждение… проклятия…');
    await coffee.say_and_wait([
      'Из-за твоего упрямства… ',
      callname,
      ' сколько трудностей, сколько бессонных ночей…',
    ]);
    await coffee.say_and_wait([
      you.sex,
      ' не твоя жертва и не 『морская свинка』 для мечты… это ты сама бросила ',
      you.sex,
      '…',
    ]);
    await coffee.say_and_wait([
      'Кто всегда был с ',
      callname,
      ' — я… ',
      c_call_t,
      '…',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async strike_success(coffee, you) {
    await era.printAndWait(['Невероятно…']);
    await era.printAndWait([
      'Когда ',
      you.get_colored_name(),
      ' внезапно бьёт ребром ладони, ',
      coffee.get_colored_name(),
      ' тихо мычит и валится на пол.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' проверяешь ',
      coffee.get_colored_name(),
      ': и правда без сознания.',
    ]);
    await era.printAndWait([
      coffee.uma_sex_title,
      'Такая хрупкая… или кто-то помог?',
    ]);
    await era.printAndWait(['…Сначала свалить.']);

    await era.printAndWait(['Холод подвала чуть отступил.']);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async strike_fail(coffee, you, callname) {
    await era.printAndWait(['Сейчас!']);
    await era.printAndWait([
      'Пока ',
      coffee.get_colored_name(),
      ' не бережётся, ',
      you.get_colored_name(),
      ' рубит ребром ладони по затылку — и ',
      coffee.sex,
      ' оседает…',
    ]);
    await era.printAndWait(['Вышло…?']);
    era.println();

    await coffee.say_and_wait([callname, '…']);
    era.println();

    await era.printAndWait([
      'Рука ещё не ушла — ',
      coffee.get_colored_name(),
      ' хватает намертво.',
    ]);
    era.println();

    await coffee.say_and_wait([
      'Если бы это была не я, которая тебя любит… так бить ',
      coffee.uma_sex_title,
      ' очень опасно…',
    ]);
    await coffee.say_and_wait(['…Но и смотреть сквозь пальцы я не могу…']);
    await coffee.say_and_wait(['Кто чья вещь — надо объяснить ещё раз…']);
    era.println();

    await era.printAndWait([
      'Холод подвала ползёт на конечности ',
      you.get_colored_name(),
      ', ',
      you.get_colored_name(),
      ' чувства стынут…',
    ]);
  },
};
