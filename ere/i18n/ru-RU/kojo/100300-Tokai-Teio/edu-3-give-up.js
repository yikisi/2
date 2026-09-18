/**
 * @file 东海帝王 - 育成 - 避战线
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  ws_95_14_g: (() => {
    const title = 'Праздник благодарности болельщикам';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `Хотя ${you.name} и Токай Тэйо уже объявили, что снимаются с забегов, болельщики всё так же горячи.`,
      );
      await era.printAndWait(
        `Услышав про травму ноги, все один за другим сказали, что понимают, и пожелали вам удачи.`,
      );
      await era.printAndWait(
        `И лицо Тэйо, кажется, снова стало таким же бодрым, как раньше…`,
      );
      await era.printAndWait(
        `Может быть. Если ${you.name} один раз побудет злодеем и ${teio.sex} останется такой навсегда, то дело того стоит…`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_g_s: (() => {
    const title = 'Заветное желание бежать (часть первая)';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        'Тренер, ты помнишь? После нашего первого забега… ты сказал, что будешь бежать вместе со мной.',
      );
      era.println();

      await era.printAndWait(
        `Солнце льётся от входа, и ${teio.sex} вся окутана золотым светом; ${teio.sex} оборачивается с улыбкой и обращается к ${you.name}.`,
      );
      era.println();

      await teio.say_and_wait(
        'Я ведь серьёзно… И вот теперь я спрошу ещё раз: ты побежишь со мной?',
      );
      era.println();

      era.printButton('「Побегу, обязательно… всегда буду!」', 1);
      await era.input();
      await era.printAndWait(
        `${teio.teen_sex_title} коротко кивает, поворачивается, широко взмахивает рукой; плащ взлетает, как вставшее пламя, — и шагом выходит на поле, растворяясь в свете впереди.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_g_s: (() => {
    const title = 'Заветное желание бежать (часть вторая)';
    /** @param {CharaTalk} teio 东海帝王 */
    const f = async (teio) => {
      await era.printAndWait('Чудо принадлежит каждому.');
      await era.printAndWait('Но на этой дорожке родится только одно чудо.');
      era.println();

      await teio.say_and_wait('Ха —');
      era.println();

      await teio.say_and_wait('Слишком зажалась', true);
      await teio.say_and_wait('Хуже, чем в прошлый раз —', true);
      await teio.say_and_wait(
        'Никак не обойти… ни тех, кто ведёт впереди отрывом, ни таких же, как я, идущих в голове… ни тех, кто выжидает сзади и метит на рывок или на догон…',
        true,
      );
      await teio.say_and_wait('Все… все рвутся вперёд изо всех сил', true);
      era.println();

      await era.printAndWait(
        `Впереди ${teio.uma_sex_title} несётся, как ветер, кончики разлетающихся серебряных волос достают до самого носа; а сбоку рыжая ${teio.uma_sex_title} липнет вплотную, будто пляшущее красное пламя, готовое в любой миг поглотить всё, что впереди.`,
      );
      await era.printAndWait(
        'Выжать свой дар до предела, тренироваться до седьмого пота, выйти на дорожку с решимостью не проигрывать — если только это, то даже досадно.',
      );
      await era.printAndWait(
        `Потому что всё это — не диковина, а лишь то, без чего на эту сцену вообще не выходят.`,
      );
      era.println();

      await teio.say_and_wait('Проклятье…', true);
      await teio.say_and_wait(
        `Может, тренер тогда был прав… на свете была и всегда есть не одна, что сильнее меня, — не одна ${teio.uma_sex_title}`,
        true,
      );
      await teio.say_and_wait(
        'Но сегодня… сегодня я правда не хочу, не собираюсь и не могу проиграть!',
        true,
      );
      era.println();

      await era.printAndWait(
        'Дышит во весь рот, жадно вбирает кислород, обращает его в нужную силу — за предел.',
      );
      era.println();

      await teio.say_and_wait('Час славы у каждого… а когда он был?', true);
      await teio.say_and_wait('У меня… он прямо сейчас!', true);
      era.println();

      era.printButton('「Тэйо!」', 1);
      await era.input();
      await era.printAndWait(`Комментатор 「— это ${teio.name}——」`);
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title} пригибается и бросается в последний рывок.`,
      );
    };
    f.title = title;
    return f;
  })(),
  async ws_palace_g(teio) {
    await teio.say_and_wait('Меня зовут Токай Тэйо. Токай — Тэйо!');
  },
};
