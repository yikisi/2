/**
 * @file 鲁铎象征 - 日常
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} luna 鲁铎象征/露娜
   * @param {CharaTalk} you 玩家
   */
  good_morning_luna(luna, you) {
    const buffer = [
      () =>
        luna.say(
          'Кто бы мог подумать, что мы станем такими… Назад дороги уже нет.',
        ),
      () =>
        luna.say(
          'Те, кто мне доверяет и ждёт меня… я просто не могу упрекнуть их сердца.',
        ),
      () =>
        luna.say(
          'С тобой рядом я шаг за шагом подбираюсь даже к Эдему, который все считают миражом.',
        ),
      () =>
        luna.say(
          'Встать на моё место? Не думаю, что хоть кто-то способен понять моё положение.',
        ),
      () =>
        luna.say(
          'Пишите просьбы студенческому совету на бумажках и несите нам. Я постараюсь исполнить желания, сколько смогу.',
        ),
      () =>
        luna.say(
          'По-твоему, мой победный костюм крут? …Не люблю называть крутой тюрьму.',
        ),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => luna.say('В последнее время то и дело голова раскалывается.'),
        () => luna.say('Я что, сплю всё больше и больше?'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () => luna.say('Не пропадай из виду! Я тебя сейчас не почувствую…!'),
        () =>
          luna.say(
            `${you.actual_name}, ты ещё смотришь на Луну? Кажется… я уже не я—`,
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  good_morning_emperor(emperor) {
    const buffer = [
      () => emperor.say('Не трать время.'),
      () => emperor.say('Не ошибайся.'),
      () => emperor.say('Не разочаруй меня.'),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => emperor.say('Сна всё меньше. Хорошо.'),
        () => emperor.say('Шут, пока я в ударе, устрой побольше охот!'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () =>
          emperor.say('Сотри слабость. Пусть имя Императора гремит повсюду!'),
        () =>
          emperor.say(
            `Кто галдит у меня в голове? Пусть ${emperor.sex} заткнётся.`,
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna 鲁铎象征/露娜
   * @param {CharaTalk} you 玩家
   */
  select_luna(luna, you) {
    const buffer = [
      () => luna.say(`${you.actual_name}?`),
      () => luna.say('Ни одной холодной шутки на ум не идёт…'),
      () => luna.say('Какой сегодня план?'),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  select_emperor(emperor) {
    const buffer = [
      () => emperor.say('Это ты, шут.'),
      () => emperor.say('Я в духе. Не порть мне настроение.'),
      () =>
        emperor.say(
          'У всего есть начало и конец. Даже если я увяну, пусть младшим останется мой аромат.',
        ),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜/皇帝 */
  select_sleep(luna) {
    luna.say('Хсс… фу…');
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_study_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('И не знала, что ты читаешь психологию. Научишь?'),
      () =>
        luna.say_and_wait(
          'В экзамене на лицензию тренера часть вопросов составляла я.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_study_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Мне не нужен профессор-недоучка.'),
      () => emperor.say_and_wait('В любую эпоху мудрецы достойны почтения.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_prepare_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('Я… когда-то очень любила бежать…'),
      () => luna.say_and_wait('Ради нашего общего идеала я не отступлю.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_prepare_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Как сладко. В этот миг кровь кипит!'),
      () =>
        emperor.say_and_wait('Ну же, покажите, как бьются герои и храбрецы!!!'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async talk_luna(luna) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => luna.say_and_wait('Я ещё могу!'),
        () =>
          luna.say_and_wait('Добавь ещё круг. Мои силы далеко не исчерпаны.'),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () =>
              luna.say_and_wait(
                'Состояние 「чрезвычайно」 хорошее, 「вскипает」 жажда тренировки! Фуфу…',
              ),
            () =>
              luna.say_and_wait(
                'Форма лучше обычной. Похоже, я выступлю неплохо.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () => luna.say_and_wait('То, что копишь в будни, многое решает.'),
            () =>
              luna.say_and_wait(
                'Когда тренировка кончится, давай прогуляемся… если будет минутка.',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              luna.say_and_wait(
                'Не скажу, что форма идеальна, но слабой себя не покажу.',
              ),
            () => luna.say_and_wait('Шаг за шагом. Я стерплю.'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              luna.say_and_wait(
                'Надеть победный костюм — сменить личину. Значит, я снова стану Императором…',
              ),
            () =>
              luna.say_and_wait(
                'Нн… форма неважная. Но из-за такой усталости ныть не стану.',
              ),
          );
          break;
        case -2:
          buffer.push(
            () =>
              luna.say_and_wait(
                'Плохо… тело тяжёлое. Но даже день не хочу потерять…',
              ),
            () =>
              luna.say_and_wait(
                'Не могу поймать обычную форму… головой знаю, что так нельзя, но…',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async talk_emperor(emperor) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => emperor.say_and_wait('Усталость копится.'),
        () => emperor.say_and_wait('Верить не обязан. Следовать — обязан.'),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () => emperor.say_and_wait('Час похода настал.'),
            () => emperor.say_and_wait('Пусть имя Императора гремит до небес!'),
          );
          break;
        case 1:
          buffer.push(
            () =>
              emperor.say_and_wait('Империя начинается с кирпича и черепицы.'),
            () => emperor.say_and_wait('М-м…? Шут, расскажи-ка шутку.'),
          );
          break;
        case 0:
          buffer.push(
            () => emperor.say_and_wait('Настроения нет.'),
            () => emperor.say_and_wait('Не порть мне настроение.'),
          );
          break;
        case -1:
          buffer.push(
            () => emperor.say_and_wait('Хм…'),
            () => emperor.say_and_wait('Проваливай с глаз моих.'),
          );
          break;
        case -2:
          buffer.push(
            () => emperor.say_and_wait('Шут, кажется, ты всё запорол?'),
            () => emperor.say_and_wait('Не дерзи мне.'),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_gift_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('Я уже не ребёнок…! Хе-хе, но спасибо!'),
      () =>
        luna.say_and_wait(
          'Мы 「сообщники」 одного идеала. Пока цель не закрыта, ни шагу назад… Прости, слишком тяжело вышло?',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_gift_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait('О? Подарок? …Хм. Что захочу — я возьму сама.'),
      () => emperor.say_and_wait('Дань свали в сокровищницу.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_cook_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Давай наготовим полно вкусного, фуфу. Вообще-то сам процесс тоже в радость. Особенно вместе с тобой.',
        ),
      () =>
        luna.say_and_wait(
          'Утром я закрыла все дела студенческого совета, теперь можно отдаться целиком.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_cook_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('В готовке еды тоже своя наука.'),
      () => emperor.say_and_wait('Жалую. Ешь с благоговением.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_rest_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '…Как стыдно. Когда выросла, даже объятия, что прежде были обычными, стали какими-то жаркими.',
        ),
      () => luna.say_and_wait('Хсс… фу…'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_rest_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('…Сон…'),
      () =>
        emperor.say_and_wait(
          'Если дело будет скверное, шут… разрешаю меня разбудить.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_game_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Игра…? Помню, маленькой ты всегда брал меня на руки и играл.',
        ),
      () => luna.say_and_wait('Играть — так играть, но время зря не трать.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_game_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Как праздное развлечение — ещё сойдёт.'),
      () => emperor.say_and_wait('К охоте ещё не готов?'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async s_a_tree_hollow_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Пробивающаяся воля — пыл это или инстинкт? Невидимая сила гонит меня вперёд.',
        ),
      () =>
        luna.say_and_wait(
          `Три богини, если Эдем и вправду есть, я поведу всех ${luna.uma_sex_title} туда.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async s_a_tree_hollow_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'Я слышу… горечь и злобу тех, кто оставил здесь свою тоску и поражение.',
        ),
      () =>
        emperor.say_and_wait(
          'Пусть империя однажды рухнет — краса этих мест и древности пребудут.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async s_a_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Вот оно, «годы летят стрелой»: будто я так и не выросла, и мы всё ещё бесимся в доме Симболи.',
        ),
      () =>
        luna.say_and_wait(
          'Мы провели врозь несколько лет. С этих пор лучше не расходиться слишком далеко.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async s_a_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'Пока я спала, ты по моей воле как следует берёг эту резиденцию?',
        ),
      () =>
        emperor.say_and_wait(
          'Шут, стоит тебе как следует мне служить — и я дарую тебе славу без края.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async school_rooftop_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Хе-хе-хе… нет имбиря — так это же конь, сорвавшийся с «имбирной» узды… ха-ха-ха-ха!',
        ),
      () =>
        luna.say_and_wait(
          'К вкусу я нетребовательна. Но если подача изящная, а запах манит — тут уж у меня аппетит разыгрывается.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async school_rooftop_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Обычная трапеза. Лишь бы насытиться.'),
      () => emperor.say_and_wait('К еде у меня требований нет.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_r_fishing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Закалить сердце, стерпеть характер, набрать того, чего не умеешь. Рыбалка — наука ещё та.',
        ),
      () =>
        luna.say_and_wait(
          'Даже если клюнет, можно только сфоткать на память — это имущество академии.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_r_fishing_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait('Охота на скачках — разве это не то же ужение?'),
      () => emperor.say_and_wait('Твари водные…'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_r_walking_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Кажется, я чуть-чуть вспомнила детство. Ты ведь всегда был рядом.',
        ),
      () =>
        luna.say_and_wait(
          'А теперь мы уже можем идти плечом к плечу — смотри, я выросла, да?',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_r_walking_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Объезд владений — тоже долг Императора.'),
      () => emperor.say_and_wait('Что там впереди за шум? Шут, разузнай.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna 鲁铎象征/露娜
   * @param {CharaTalk} you 玩家
   */
  async o_s_arcade_luna(luna, you) {
    const buffer = [
      () => luna.say_and_wait('М-м… ещё партию!'),
      () =>
        luna.say_and_wait(
          `Вон ту, и вон ту! ${you.actual_name}, давай во все сыграем!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_arcade_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Шумное место.'),
      () =>
        emperor.say_and_wait(
          'Иллюзорные игры дают лишь пустое утешение. Хочешь истинной забавы — ступай сразиться с героем.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_drawing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Как тебе больше нравится… а может, просто купим гостиницу с онсэном?',
        ),
      () =>
        luna.say_and_wait(
          'Пусть каждому ребёнку, кто тянет жребий, улыбнётся удача.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_drawing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Теория вероятностей — наука глубокая.'),
      () =>
        emperor.say_and_wait(
          'Раз уж решили ехать на источники, к чему этот способ?',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_ktv_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('Пользуясь случаем, вздремну немного.'),
      () =>
        luna.say_and_wait(
          'Кабы всю боль можно было выблевать песней — как было бы хорошо.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_ktv_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Не театр — свой, особый дух.'),
      () =>
        emperor.say_and_wait(
          'Слушать прекрасную музыку — наслаждение из наслаждений.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_movie_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Отличный фильм. Я собиралась подремать, но сюжет и правда цепляет.',
        ),
      () =>
        luna.say_and_wait(
          'Не думала, что нынешнее кино такое живое. Аж холодный пот прошиб.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_movie_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Скука.'),
      () => emperor.say_and_wait('Повторения не будет.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna 鲁铎象征/露娜
   * @param {CharaTalk} you 玩家
   * @param {number} dice 祈祷掷骰结果,0-1 之间的小数,越小越好
   */
  async o_c_pray_luna(luna, you, dice) {
    await era.printAndWait(
      `Для ${you.name} и ${luna.name} святилище — место ничем не особенное.`,
    );
    await era.printAndWait(
      `${you.name} уже не в том возрасте, чтобы молить об удаче, ${luna.name} же всегда берёт своё силой.`,
    );
    await era.printAndWait([
      'Но ',
      you.get_colored_name(),
      ' тешится тем, что ',
      luna.get_colored_name(),
      ' всё так же бесконечно любопытна ко всему новому.',
    ]);
    await era.printAndWait(
      `Нескольких молитв в год хватает, чтобы ${luna.sex} сохраняла достаточно свежести.`,
    );
    await era.printAndWait(
      `${you.name} стоит рядом с ${luna.name}, ожидая, пока ${luna.sex} вытянет жребий, сулящий «удачу».`,
    );
    era.println();
    if (dice < 0.5) {
      await luna.say_and_wait('Похоже, знамение на редкость доброе.');
      await era.printAndWait([
        luna.get_colored_name(),
        ' сияя улыбкой, показывает счастливый жребий ',
        you.get_colored_name(),
        ', а затем вешает его на дерево.',
      ]);
      await era.printAndWait(
        `${you.name} вдруг думает: а не вытянуть ли и себе счастливый жребий?`,
      );
      await era.printAndWait(
        `Лишь бы ${luna.name} была рада — хоть крупицу надежды на вашу ещё незримую, извилистую дорогу вперёд.`,
      );
      await era.printAndWait(
        `Любая подмога хороша. Ах… Три богини, прошу, храните ${luna.name}!`,
      );
    } else {
      await luna.say_and_wait(
        'Похоже, по пути нам встретится ещё немало преград.',
      );
      await era.printAndWait([
        luna.get_colored_name(),
        ' не показывает ',
        you.get_colored_name(),
        ', что написано на жребии, — только тщательно прячет его.',
      ]);
      await era.printAndWait([you.get_colored_name(), ' чуть мрачнеет лицом.']);
      await era.printAndWait([you.get_colored_name(), ' знает.']);
      await era.printAndWait(
        'Если ваш путь и без того незрим и извилист, так ещё и боги начнут корить…',
      );
      await era.printAndWait('Немного… раздражает.');
    }
  },
  /**
   * @param {CharaTalk} emperor 皇帝
   * @param {CharaTalk} you 玩家
   * @param {number} dice 祈祷掷骰结果,0-1 之间的小数,越小越好
   */
  async o_c_pray_emperor(emperor, you, dice) {
    await era.printAndWait(
      `Для ${you.name} и ${emperor.name} святилище — место ничем не особенное.`,
    );
    await era.printAndWait(
      `${you.name} уже не в том возрасте, чтобы вымаливать удачу, ${emperor.name} и всегда брала своё силой.`,
    );
    await era.printAndWait([
      'Но ',
      you.get_colored_name(),
      ' приятно изумился: ',
      emperor.get_colored_name(),
      ' как и Луна, к новому питает ненасытное любопытство.',
    ]);
    await era.printAndWait(
      `Нескольких молитв в году хватает, чтобы ${emperor.sex} сохраняла вкус новизны.`,
    );
    await era.printAndWait(
      `${you.name} стоит рядом с ${emperor.name} и ждёт, пока ${emperor.sex} вытянет жребий, сулящий «удачу».`,
    );
    era.println();
    if (dice < 0.5) {
      await emperor.say_and_wait(
        'Пока сила абсолютна, даже небеса будут благосклонны.',
      );
      await era.printAndWait([
        emperor.get_colored_name(),
        ' небрежно отшвырнула жребий за спину, ',
        you.get_colored_name(),
        ' поспешно поймал и повесил на дерево.',
      ]);
      await era.printAndWait(
        `${you.name} вдруг подумал: а не вытянуть ли и себе счастливый жребий?`,
      );
      await era.printAndWait(
        `Лишь бы ${emperor.name} была рада — хоть крупицу надежды на ваш ещё незримый, извилистый путь.`,
      );
      await era.printAndWait(
        `Всякая подмога хороша. Ах… Три богини, храните ${emperor.name}!`,
      );
    } else {
      await emperor.say_and_wait('Занятно! Я люблю вызов.');
      await era.printAndWait([
        emperor.get_colored_name(),
        ' с живым интересом подняла жребий и расхохоталась.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' слегка помрачнела лицом.',
      ]);
      await era.printAndWait([you.get_colored_name(), ' знает.']);
      await era.printAndWait(
        'Если ваш извилистый путь и без того теряется во мгле, а тут ещё боги навесят кару…',
      );
      await era.printAndWait('Немного… раздражает.');
    }
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_restaurant_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          `Младшие без конца ноют, что хотят угостить меня мороженым… фуфу, надо выбрать день, и ${luna.sex} пойдёт со мной поесть.`,
        ),
      () =>
        luna.say_and_wait(
          'В последнее время у многих детей аппетит прямо зверь, мне надо прикинуть, как увеличить закупку продуктов.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_restaurant_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'Одна из великих радостей похода — вкушать то, что взрастила земля под ногами.',
        ),
      () => emperor.say_and_wait('Подайте яства и вино!'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Коль приснится кошмар — скажи, я посторожу твой сон.',
        ),
      () =>
        luna.say_and_wait(
          'Когда на душе слякоть, приходи «любоваться клёнами» — пусть настроение «не продует ветром»… фуфу, чистый шедевр.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'Шут, раз уж вздумал любезничать — изволь как следует меня потешить.',
        ),
      () =>
        emperor.say_and_wait(
          '…хм, если даже на цыпочки не встанешь, то и в свите тебе делать нечего.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_shopping_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('Нынче лавки уже такие модные? Недаром детей тянет.'),
      () => luna.say_and_wait('Там так людно, пойдём глянем?'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_shopping_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Я люблю города, где кипит жизнь.'),
      () => emperor.say_and_wait('Подданные в ладу и веселье. Неплохо.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
   * @param {CharaTalk} you 玩家
   * @param {boolean} is_good_end 是否是 GE（鲁铎象征形态）
   * @param {boolean} i_emperor 是否是皇帝形态（否则为露娜）
   */
  async load_talk(chara17, you, is_good_end, i_emperor) {
    if (is_good_end) {
      await chara17.say_and_wait('Пусть солнце и луна и дальше будут с тобой');
      await chara17.say_and_wait('…но, прошу, не забудь Императора и Луну');
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' отвернулась, дрожа',
      ]);
      await chara17.say_and_wait('береги… себя, мы ещё встретимся (всхлип)');
    } else if (i_emperor) {
      await chara17.say_and_wait(
        'Шут, опять будешь биться впустую, раз за разом?',
      );
    } else if (era.get('love:17') >= 75) {
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' губы чуть разомкнулись, но не вырвалось ни звука',
      ]);
      await chara17.say_and_wait('——!');
      await chara17.say_and_wait('——не уходи…');
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' всхлипывая, но ',
        you.get_colored_name(),
        ' уже скрылся вдали…',
      ]);
      await chara17.say_and_wait(
        'Ведь ты обещал мне… что что бы ни случилось, не уйдёшь——',
      );
    }
  },
};
