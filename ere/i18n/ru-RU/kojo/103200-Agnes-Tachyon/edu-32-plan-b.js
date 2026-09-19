/**
 * @file 爱丽速子 - 育成 - Plan B
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ws_b_betray: (() => {
    const title = 'Betray';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait(
        'Доверить мечту другому… пусть это и жестокий путь, но',
      );
      await era.printAndWait(
        'если рассуждать здраво, именно у этой надежды больше всего шансов сбыться',
      );
      await era.printAndWait([
        'Оставим в стороне судьбу, о которой говорит ',
        tachyon.sex,
        ', и ноги, на которых бежит ',
        tachyon.sex,
        '… Ни как тренер, ни как фанат, что восхищается ',
        tachyon.get_colored_name(),
        ' —',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' никак не может закрыть глаза на то, что на этом пути ',
        tachyon.sex,
        ' может получить увечья и боль',
      ]);
      await era.printAndWait('шансов слишком мало');
      await era.printAndWait('и дорога впереди сплошь в шипах');
      await era.printAndWait([
        you.get_colored_name(),
        ' не может. Пусть сочтут трусом — всё равно',
      ]);
      await era.printAndWait([
        'Лишь бы ',
        tachyon.get_colored_name(),
        ' была здорова, и всё',
      ]);
      await era.printAndWait('а кроме этого…');
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает: есть и вторая подопечная, за которую отвечает ',
        you.get_colored_name(),
        ' — ещё одна ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        'Вспоминает, как ',
        tachyon.sex,
        ' точно так же завораживала ',
        you.get_colored_name(),
        ' своим бегом и статью',
      ]);
      await era.printAndWait('Заменить — слово надменное и себялюбивое');
      await era.printAndWait(
        'Никто не может заменить другого, и никто не рождён для того, чтобы кого-то заменять',
      );
      if (relation >= era.get('relation:25:0')) {
        await era.printAndWait([
          'Но если кто и способен 「перенять」 мечту, которой живёт ',
          tachyon.get_colored_name(),
          ' — то…',
        ]);
        era.println();
        await era.printAndWait([
          'то это, конечно, ',
          coffee.get_colored_name(),
          ' и никто другой',
        ]);
        era.println();
        await era.printAndWait([
          'Видя, как молчит ',
          you.get_colored_name(),
          ', ',
          tachyon.get_colored_name(),
          ' тоже угадывает, какое решение ',
          you.get_colored_name(),
          ' принял(а) в глубине души',
        ]);
        await era.printAndWait([
          'Просто ждёт, когда ',
          you.get_colored_name(),
          ' начнёт разговор, только и всего',
        ]);
      } else {
        await era.printAndWait(['Особенно ', coffee.get_colored_name()]);
        era.printButton(`「…Кафе — ${coffee.sex} никому не замена」`, 1);
        await era.input();
        await tachyon.say_and_wait([
          'Хе-хе, вот, значит, как ',
          tachyon.sex,
          ' тебе дорога…',
        ]);
        await tachyon.say_and_wait([
          'Спокойно, я не говорила, что ',
          tachyon.sex,
          ' — чья-то замена…',
        ]);
        await tachyon.say_and_wait([
          'Именно так: просто одна добрая ',
          tachyon.uma_sex_title,
          ', что проходила мимо, предложила помощь ',
          coffee.get_colored_name(),
          ' и её тренеру, только и всего',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          coffee.get_colored_name(),
          ' и тренер ',
          coffee.get_colored_name(),
          '」 — произнося это, ',
          tachyon.get_colored_name(),
          ' лицом выдаёт разочарование, которого невозможно не заметить',
        ]);
        await era.printAndWait([
          '…Да, после такого выбора ты и правда становишься тренером ',
          coffee.get_colored_name(),
          ' — окончательно и полностью… Но этот выбор наверняка лучший и для ',
          tachyon.get_colored_name(),
          ' тоже, наверное',
        ]);
      }
      era.printButton('「…Я выбираю Plan B」', 1);
      await era.input();
      await tachyon.say_and_wait('…Вот как');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' слышит, какой выбор сделал(а) ',
        you.get_colored_name(),
        ' — и ничего не говорит, только кивает',
      ]);
      await era.printAndWait([
        'В комнате повисает молчание, от которого нечем дышать, и как раз когда ',
        you.get_colored_name(),
        ' не выдерживает этой тишины и хочет что-то сказать',
      ]);
      era.println();
      await tachyon.say_and_wait('…Ха-ха-ха-ха!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' вдруг разражается смехом, и ',
        you.get_colored_name(),
        ' аж вздрагивает',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Отлично, отлично! Значит, правильный выбор ты сделать всё-таки можешь!',
      );
      era.println();
      await era.printAndWait('Правильный выбор… да?');
      era.println();
      await tachyon.say_and_wait(
        'Честно говоря, я даже немного боялась, что ты выберешь Plan A. Всё-таки такой, как я, куда больше подходит возиться с исследованиями за кулисами, чем тренировки и забеги, ха-ха-ха!',
      );
      era.println();
      await era.printAndWait([
        '…Раз уж ',
        tachyon.sex,
        ' сама так говорит, значит, это и есть правильно, разве нет?',
      ]);
      await era.printAndWait([
        'Это же лучшее, что могла бы получить ',
        tachyon.sex,
        ', самый разумный выбор, разве нет?',
      ]);
      await era.printAndWait('Наверняка так');
      await era.printAndWait('Точно так');
      await era.printAndWait([
        'Иначе… выходит, что ты сдался(ась), предал(а) свою подопечную ',
        tachyon.uma_sex_title,
        ', свой собственный свет (Tachyon)?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Кстати, ',
        callname,
        ', не забудь завтра прийти на пробу зелья',
      ]);
      await era.printAndWait(
        '…Э? И после этого всё равно надо пробовать зелья?',
      );
      await era.printAndWait([
        'Наверное, из-за ошарашенного лица, с которым застыл(а) ',
        you.get_colored_name(),
        ', ',
        tachyon.get_colored_name(),
        ' смеётся в голос',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Хе-хе… разумеется. Вот только зелья, которые начнём пробовать с завтрашнего дня, все до единого пойдут на ',
        call_25,
        '…',
      ]);
      await tachyon.say_and_wait(
        'Так что готовься: с завтрашнего дня зелий на пробу станет только больше, ясно?',
      );
      await tachyon.say_and_wait([
        'Чтобы ',
        call_25,
        ' добрала базу, нужную для выхода на предел, работы теперь куда больше, чем раньше',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' со смехом выходит из комнаты отдыха. Похоже, от твоего выбора ',
        tachyon.sex,
        ' ничуть не пошатнулась… или всё-таки?',
      ]);
      await era.printAndWait([
        'На душе всё-таки тревожно, но ',
        you.get_colored_name(),
        ' быстро выбрасывает эту тревогу из головы: не только ради ',
        coffee.get_colored_name(),
        ', но и ради ',
        tachyon.get_colored_name(),
        ', и теперь надо стараться ещё больше',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' принимает участие в Кубке Лавра',
      ]);
      await era.printAndWait([
        'И соперницы старшего класса, у которых взросление уже завершилось, и сильнейшие из ровесниц, и даже семпаи из Кубка Мечты — всех обходит ',
        tachyon.sex,
        ', обходит одинаково',
      ]);
      await era.printAndWait('Всё тот же ослепляющий бег');
      await era.printAndWait('Всё тот же бег, будто свет');
      await era.printAndWait('Бег как свет, что гаснет в одно мгновение');
      era.println();
      await era.printAndWait([
        'После этого ',
        tachyon.get_colored_name(),
        ' объявляет, что почти навсегда прекращает выступления в Сияющей серии',
      ]);
      await era.printAndWait('Это заявление поднимает в прессе настоящую бурю');
      await era.printAndWait([
        'Но всё это никак не помешает тому, что ',
        you.get_colored_name(),
        ' и ',
        tachyon.sex,
        ' идут дальше вместе',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_47_31: (() => {
    const title = 'Лунный свет';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {string} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, coffee, you, callname, t_call_c, relation) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Тахион-семпай в последнее время… кажется, каждую ночь бегает на пляже',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'Ничего особенного, но кажется, будто Тахион-семпай бежит… с большим трудом',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'C', [
        'Нам ведь Тахион-семпай столько помогала… Тахион-семпай, ',
        tachyon.sex,
        ' правда в порядке?',
      ]);
      era.println();
      await era.printAndWait([
        'Из-за того, что за неё волнуются многие ',
        tachyon.uma_sex_title,
        ', ',
        you.get_colored_name(),
        ' глубокой ночью выходит из общежития тренеров и направляется к пляжу, где проходят сборы',
      ]);
      await era.printAndWait([
        'Понадобилась подсказка от других ',
        tachyon.uma_sex_title,
        ', чтобы заметить: со своей ',
        tachyon.uma_sex_title,
        ' что-то не так. Вот уж… тренер никуда не годный',
      ]);
      await era.printAndWait([
        'Хотя… благодарить за помощь, которую оказала ',
        tachyon.sex,
        ', значит?… Пусть ',
        tachyon.sex,
        ' и считает это просто опытом, но люди, которым помогли лекарства, что делает ',
        tachyon.sex,
        ', и правда существуют',
      ]);
      await era.printAndWait([
        'И непонятно, от какой причины и от какого чувства, но ',
        you.get_colored_name(),
        ' ни с того ни с сего ощущает наплыв чувств',
      ]);
      era.println();
      await tachyon.say_and_wait('Ха-а… ха-а… ха-а…');
      era.println();
      await era.printAndWait([
        'На пляже перед ',
        you.get_colored_name(),
        ' предстаёт та, что и на сборах без устали вместе с ',
        you.get_colored_name(),
        ' исследует, как улучшить бег ',
        coffee.get_colored_name(),
        ' — это ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        'Поглощённая бегом, ',
        tachyon.sex,
        ' под покровом ночи так и не замечает, что ',
        you.get_colored_name(),
        ' уже пришёл(ла)',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' тоже молча смотрит, не нарушая тишины этого мига',
      ]);
      era.println();
      await era.printAndWait([
        'Там, на песке, ',
        tachyon.sex,
        ' бежит далеко не идеально',
      ]);
      await era.printAndWait([
        'Уж не говоря о том, как она бежала на Satsuki Sho, — даже если сравнить с тем, как бежала куда раньше ',
        tachyon.get_colored_name(),
        ' — всё выглядит до крайности неуклюже',
      ]);
      await era.printAndWait([
        'Мало того что она будто не решается раскрыться, оберегая крепость ног, — так и сам этот бег вовсе не тот, которым всегда была сильна ',
        tachyon.get_colored_name(),
        ' — совсем не её привычная манера',
      ]);
      await era.printAndWait([
        'И всё же под луной ',
        tachyon.sex,
        ' всё равно приковывает к себе взгляд ',
        you.get_colored_name(),
        ', ',
      ]);
      await era.printAndWait([
        'Безупречно или нет — неважно: тот бег, которым бежит ',
        tachyon.get_colored_name(),
        ' — уже сам по себе притягивает взгляд ',
        you.get_colored_name(),
        ' — как свет; даже самый слабый луч всё равно свет, за которым гонятся как одержимые',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' не выдерживает и делает шаг вперёд, чтобы поймать этот свет…',
      ]);
      era.println();
      await tachyon.say_and_wait(['Кто здесь? …А, ', callname, ', значит']);
      era.println();
      await era.printAndWait([
        'Прервав бег, ',
        tachyon.sex,
        ' быстро замечает фигуру неподалёку и заговаривает',
      ]);
      era.printButton('「Что ты делаешь так поздно?」', 1);
      await era.input();
      await tachyon.say_and_wait([
        'Ничего особенного. Просто ради ',
        t_call_c,
        ' ставлю опыты с новой манерой бега, только и всего…',
      ]);
      await tachyon.say_and_wait([
        'Ты, наверное, только что и сам(а) видел(а). Пусть бегу я как-то ни то ни сё, но если бы в эту сторону удалось улучшить бег ',
        t_call_c,
        ' — вот тогда…',
      ]);
      era.println();
      await era.printAndWait('Слова, что готовы были сорваться, застревают');
      await era.printAndWait([
        'Всё верно, всё это ради ',
        tachyon.get_colored_name(),
        ' — ради её Plan B',
      ]);
      await era.printAndWait([
        'И вместе с тем — ради того, чтобы ',
        coffee.get_colored_name(),
        ' поднялась на самую вершину',
      ]);
      if (relation <= 225) {
        await era.printAndWait('Это решение принято ещё тогда');
        await era.printAndWait(
          'Если рассуждать здраво, это же и есть самый разумный выбор, разве нет?',
        );
        await era.printAndWait('Поэтому');
      } else {
        await era.printAndWait('Это решение принято ещё тогда');
        await era.printAndWait([
          'Ведь ',
          you.get_colored_name(),
          ' больше не хочет смотреть, как ',
          tachyon.get_colored_name(),
          ' снова терпит такую боль, — разве нет?',
        ]);
        await era.printAndWait('Поэтому');
      }
      era.printButton('「…И всё-таки не забывай отдыхать」', 1);
      await era.input();
      await tachyon.say_and_wait([
        'Поняла. Да и ты тоже: не спишь в такую пору — а что завтра будет с ',
        t_call_c,
        ' и её тренировкой?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' выдавливает лишь такую пустую, наигранную заботу и уходит с пляжа',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_47_40: (() => {
    const title = 'Иная возможность';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} coffee_kiku_sho 曼城茶座是否参加菊花赏
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        'В ту ночь ',
        you.get_colored_name(),
        ' видит сон',
      ]);
      await era.printAndWait([
        'Взявшая Kikuka Sho, ',
        tachyon.sex,
        ' стоит на дорожке и машет рукой, укутанной в белый халат',
      ]);
      await era.printAndWait([
        'Все до одного выкрикивают её имя — имя, которое носит ',
        tachyon.sex,
        ' одна',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' оборачивается и смотрит на трибуны, туда, где сидит ',
        you.get_colored_name(),
      ]);
      await era.printAndWait('А лицо — сплошная чернота');
      await you.say_as_passer_by_and_wait(
        'Зрители',
        '⬛⬛⬛⬛!⬛⬛⬛⬛!⬛⬛⬛⬛!',
      );
      await era.printAndWait([
        'Зрители вокруг выкрикивают её имя — имя, которое носит ',
        tachyon.sex,
        ' одна',
      ]);
      await era.printAndWait([tachyon.sex, '… как её зовут?']);
      await era.printAndWait([tachyon.sex, '… кто это?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' просыпается от кошмара и долго не может прийти в себя',
      ]);
      await era.printAndWait([
        'Сон слишком уж настоящий, и ',
        you.get_colored_name(),
        ' до сих пор не может отойти от испуга',
      ]);
      await era.printAndWait([
        'Остаток ночи ',
        you.get_colored_name(),
        ' всё так же ворочается без сна, до самого рассвета',
      ]);
      era.println();
      await era.printAndWait([
        'Едва рассвело, ',
        you.get_colored_name(),
        ' торопливо выходит из общежития тренеров',
      ]);
      await era.printAndWait([
        'Хоть и знаешь, что ',
        tachyon.sex,
        ' уже объявила прессе о приостановке выступлений',
      ]);
      await era.printAndWait([
        'Хоть и знаешь, что ',
        tachyon.sex,
        ' при всём желании не смогла бы тайком от тебя записаться на гонку',
      ]);
      await era.printAndWait('и всё равно тревожно, всё равно страшно');
      await era.printAndWait([
        'И всё равно нужно, чтобы ',
        tachyon.sex,
        ' оказалась прямо перед глазами, — только тогда убедишься, что во сне всё было неправдой',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Надо же, ',
        callname,
        '? Сегодня ты и правда рано',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' врывается в лабораторию — и видит, что с самого утра преспокойно попивает чёрный чай ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Хотя сегодня всё-таки Kikuka Sho, так что нервничать — дело нормальное',
      ]);
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait(
          'Попозже выдвинемся вместе. Хе-хе… это ведь первый раз, когда бегу не я, а я с трибун смотрю, как бежит кто-то другой',
        );
      } else {
        await tachyon.say_and_wait([
          'Ты уж постарайся. Хотя, раз ',
          call_25,
          ' ',
          tachyon.sex,
          ' участвовать не собирается, я просто посмотрю трансляцию отсюда. Покажи себя как следует',
        ]);
      }
      era.println();
      await tachyon.say_and_wait('…Или ты хотел(а) сказать что-то ещё?');
      era.println();
      await era.printAndWait(
        'Ведь ты так внезапно ворвался(ась) в лабораторию',
      );
      await era.printAndWait('Ведь ты хотел(а) выплеснуть этот кошмар');
      await era.printAndWait([
        'Но в тот самый миг, когда появляется ',
        tachyon.sex,
        ', ни одно слово не идёт с языка',
      ]);
      era.println();
      await era.printAndWait('Как же это сказать?');
      await era.printAndWait([
        'Сказать, что мне приснилось, как ',
        you.get_colored_name(),
        ' выигрывает Kikuka Sho?',
      ]);
      await era.printAndWait([
        'Сказать, что во сне у ',
        you.get_colored_name(),
        ' нет ни лица, ни имени?',
      ]);
      await era.printAndWait('Сказать, что жалеешь…');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' с силой мотает головой, небрежно бросает в ответ, что всё в порядке, и позорно уходит из лаборатории',
      ]);
      await era.printAndWait('Да и что тут скажешь');
      await era.printAndWait('Да и что тут можно сказать');
      await era.printAndWait(
        'Сейчас, когда всё уже решено, вдруг жалеть о собственном выборе — у шуток тоже должен быть предел',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' уходит из лаборатории и отправляется готовиться к сегодняшнему Kikuka Sho',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_limited_tachyon: (() => {
    const title = 'Фотон, остановившийся у предела';
    /**
     * Plan B 专属，茶座参加菊花赏后触发
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait(['Kikuka Sho окончена']);
      await era.printAndWait([
        'Через несколько дней ',
        you.get_colored_name(),
        ' проводит тренировавшуюся до ночи ',
        coffee.get_colored_name(),
        ' в комнату и велишь ей. Пусть ',
        tachyon.sex,
        ' отдохнёт как следует, а ты… возвращаешься в академию',
      ]);
      await era.printAndWait(
        'Тебе бы тоже отдохнуть… но работа ещё не кончена',
      );
      era.println();
      await era.printAndWait([
        'Едва входишь в тёмный кабинет тренера — ',
        you.get_colored_name(),
        ' сразу замечает: в комнате ещё кто-то',
      ]);
      await era.printAndWait([
        'Не потому что у ',
        you.get_colored_name(),
        ' чутьё такое острое — просто у той в руках зелье, от которого люди светятся',
      ]);
      era.printButton('「…Тахион」', 1);
      await era.input();
      await era.printAndWait([
        'Месяцами помогала ',
        coffee.get_colored_name(),
        ' — и она же твоя подопечная. ',
        you.get_colored_name(),
        ' ведёт ',
        tachyon.uma_sex_title,
        ' — ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' держит в руках зелье: в лунном свете оно переливается всеми цветами',
      ]);
      era.println();
      await tachyon.say_and_wait(['Kikuka Sho кончилась, да']);
      era.printButton('「…Да」', 1);
      await era.input();
      await era.printAndWait('Не из-за плохих отношений');
      await era.printAndWait([
        'В конце концов ',
        tachyon.sex,
        ' всё ещё твоя. ',
        you.get_colored_name(),
        ' ведёт ',
        tachyon.uma_sex_title,
        ', и на быту вы всё равно пересекаетесь',
      ]);
      await era.printAndWait(
        'Так что нормальный разговор должен быть возможен',
      );
      await era.printAndWait([
        'Но месяцами почти каждый разговор крутился вокруг ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait(' Плюс то, что было на сборах…');
      await era.printAndWait([
        'Вдруг ',
        you.get_colored_name(),
        ' не находит, о чём с ней говорить — ',
        tachyon.sex,
        ' — и говорить не о чем',
      ]);
      era.println();
      await tachyon.say_and_wait(callname);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' — короткие каштановые волосы в тусклой луне цвета вина, алые глаза как у зверя, жаждущего крови, жадно смотрят на ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        ' В тот миг ',
        you.get_colored_name(),
        ' думает о многом: сэмпаи-тренеры твердили — с ',
        tachyon.uma_sex_title,
        ' держи безопасную дистанцию',
      ]);
      await era.printAndWait([
        'Вспоминаешь лекцию про ',
        tachyon.uma_sex_title,
        ' и их собственничество',
      ]);
      await era.printAndWait([
        'Вспоминаешь курс физиологии ',
        tachyon.uma_sex_title,
        ': на уроке говорили про ',
        tachyon.uma_sex_title,
        ' и течку…',
      ]);
      await era.printAndWait([
        'Но всё это не поможет сейчас: безоружным, лицом к лицу с подопечной ',
        tachyon.uma_sex_title,
        ' — это ты',
      ]);
      await era.printAndWait([
        'Даже если благодаря зельям ',
        tachyon.get_colored_name(),
        ' у тебя и есть силы чуть сопротивляться, ',
      ]);
      await era.printAndWait('И то — всего лишь чуть-чуть');
      await era.printAndWait([
        tachyon.sex,
        ' неспешно подходит ближе; невольно ',
        you.get_colored_name(),
        ' тоже понемногу отступает',
      ]);
      await era.printAndWait('Шаг за шагом — и ты у стены');
      await era.printAndWait([
        tachyon.sex,
        ' прижимает к стене сжавшегося в углу ',
        you.get_colored_name(),
        ' и ровно говорит',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, ', можно… пробежаться со мной?']);
      era.println();
      await era.printAndWait([
        'Просьба, которую ',
        you.get_colored_name(),
        ' ждал(а) — и всё же хуже, чем ',
        you.get_colored_name(),
        ' мог(ла) представить',
      ]);
      era.drawLine();
      await era.printAndWait('Ночь. Тренировочное поле, пустая дорожка');
      await era.printAndWait([
        'На всём треке только ',
        tachyon.get_colored_name(),
        ' бежит одна',
      ]);
      await era.printAndWait([
        'Под луной ',
        tachyon.sex,
        ' бежит совсем не так, как должна',
      ]);
      await era.printAndWait([
        'Это и понятно: почти три месяца без тренировок ',
        tachyon.sex,
        ', ',
        'даже гений не перескочит время: атрофия мышц, притупление чувства — для атлета смертельные раны',
      ]);
      await era.printAndWait([
        'С нынешней ',
        tachyon.get_colored_name(),
        ' справился(ась) бы, пожалуй, даже ',
        you.get_colored_name(),
        ' …',
      ]);
      await era.printAndWait([
        'Звучит дико, но тело, каждый день кованое зельями, и правда может обогнать давно не тренировавшуюся ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await era.printAndWait(' Тогда почему…');
      await era.printAndWait([you.get_colored_name(), ' мучительно думаешь']);
      era.println();
      await era.printAndWait([
        'Почему даже такой жалкий бег в глазах ',
        you.get_colored_name(),
        ' всё так же сияет, как в первую встречу',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        'Незаметно ',
        tachyon.sex,
        ' уже финишировала и стоит рядом. Рядом с ',
        you.get_colored_name(),
        ' ловит воздух',
      ]);
      await era.printAndWait(['Раньше ', tachyon.sex, ' такой не была']);
      await era.printAndWait([
        'Даже с травмой ног ',
        tachyon.sex,
        ' не должна была стать такой',
      ]);
      await era.printAndWait([
        'Так ',
        tachyon.sex,
        ' стала такой из-за того, кто должен был быть рядом с ней и верить ей — ',
        tachyon.sex,
        ' должна была иметь рядом того, кто верит — ',
        tachyon.sex,
        ' ждала того человека',
      ]);
      await era.printAndWait(['Это ', you.get_colored_name()]);
      era.println();
      await tachyon.say_and_wait('…Хе-хе. Бежала жалко, да');
      era.println();
      await era.printAndWait([
        'Нет, ',
        you.get_colored_name(),
        ' хочет утешить её. Пусть ',
        tachyon.sex,
        ' услышит',
      ]);
      await era.printAndWait([
        'Но ',
        tachyon.sex,
        ' смотрит так, что не позволит ',
        you.get_colored_name(),
        ' соврать',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', помнишь? На Laurel Cup — что я тогда сказала',
      ]);
      era.println();
      await era.printAndWait('Помнить? Как забыть');
      await era.printAndWait('До сих пор это кошмар, что приходит в полночь');
      await era.printAndWait([
        'Та, что несла свою мечту и чужие, ',
        tachyon.uma_sex_title,
        ' увяла на глазах',
      ]);
      await era.printAndWait(
        'Дальше — ругань, упрёки, стоны: к любому ты готов(а)',
      );
      era.println();
      await era.printAndWait(['Но ', tachyon.sex, ' говорит не об этом']);
      era.println();
      await tachyon.say_and_wait(
        'Осталось несколько раз в полную силу… сейчас шанс',
      );
      await tachyon.say_and_wait([
        'Kikuka Sho: ',
        call_25,
        ' уже явила ',
        tachyon.sex,
        ' свет… без оговорок 『сильнейшая』 ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await era.printAndWait([
        ' Самая быстрая ',
        tachyon.uma_sex_title,
        ' берёт Satsuki Sho',
      ]);
      await era.printAndWait([
        'Самая сильная ',
        tachyon.uma_sex_title,
        ' берёт Kikuka Sho',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминаешь слова, что ходят с давних пор',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Дальше… к концу года ',
        tachyon.sex,
        ' непременно дойдёт до вершины',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' грезит о возможности, какой рисует себе',
      ]);
      await era.printAndWait('…Уже не её возможность');
      era.println();
      await tachyon.say_and_wait([
        'Но чтобы ',
        tachyon.sex,
        ' превзошла предел, нужен точильный камень…',
      ]);
      era.println();
      await era.printAndWait(
        'Уже без своей возможности — а в глазах всё тот же свет',
      );
      await era.printAndWait([
        'Если такая ',
        tachyon.sex,
        ', ты бы точно согласился(ась). Раз ',
        tachyon.sex,
        ' готова сжечь всё ради мечты — составить компанию нетрудно — ',
        tachyon.sex,
        ' рядом — плевое дело',
      ]);
      await era.printAndWait('Как всегда сладко примешь приказы');
      await era.printAndWait('Но…');
      era.println();
      await tachyon.say_and_wait([
        'Поэтому, ',
        callname,
        ', мне нужна твоя помощь',
      ]);
      await tachyon.say_and_wait([
        'В следующем году я вернусь: чтобы ',
        call_25,
        ' взяла более высокий предел. Только я выстрою тактику точечно под неё. Пусть ',
        tachyon.sex,
        ' получит план, от которого не уйти, и я заставлю. Пусть ',
        tachyon.sex,
        ' дойдёт до предела',
      ]);
      await tachyon.say_and_wait('…Ты мне поможешь, да');
      era.println();
      await era.printAndWait(
        'Если правда готова всем пожертвовать ради другого — почему на лице такая горечь',
      );
      await era.printAndWait('Почему в глазах слёзы');
      era.println();
      await tachyon.say_and_wait('Молчание — согласие');
      era.println();
      await era.printAndWait('Отказывать, в сущности, и не из чего');
      await era.printAndWait([
        'Чтобы ',
        coffee.get_colored_name(),
        ' взошла на вершину',
      ]);
      await era.printAndWait([
        'Чтобы исполнить ',
        tachyon.get_colored_name(),
        ' 「завещание」',
      ]);
      await era.printAndWait([
        'Отказать вроде не из чего. Только ',
        you.get_colored_name(),
        ' любопытно',
      ]);
      await era.printAndWait(
        'Что сейчас думает эта каштановолосая гениальная голова?',
      );
    };
    f.title = title;
    return f;
  })(),
  we_b_47_47: (() => {
    const title = 'Померкшее сияние';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} coffee_arim_kin 曼城茶座是否参加有马纪念
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_arim_kin,
    ) => {
      await tachyon.say_and_wait([
        'Кстати, завтра ведь уже Arima Kinen, ',
        callname,
      ]);
      era.println();
      await era.printAndWait([
        'Тренирующаяся под луной ',
        tachyon.get_colored_name(),
        ' заговаривает об этом с ',
        you.get_colored_name(),
        ' — походя, без всякого умысла',
      ]);
      await era.printAndWait([
        'С тех пор как закончился Kikuka Sho, у вас так и держатся эти отношения: тренировки и наставления по вечерам',
      ]);
      await era.printAndWait([
        'Разговоры, поначалу неловкие, за два месяца общения понемногу вернулись к прежней привычной лёгкости',
      ]);
      await era.printAndWait(
        'Пусть так говорить и жестоко, но если спросить, что ты чувствуешь от нынешнего положения',
      );
      await era.printAndWait('то это, наверное, удовольствие');
      await era.printAndWait([
        'Днём выкладываться ради ',
        coffee.get_colored_name(),
        ' — а ночью помогать ',
        tachyon.get_colored_name(),
        ' восстанавливаться',
      ]);
      await era.printAndWait([
        'Работы стало больше прежнего, но если сравнить с тем, каким до Kikuka Sho был ',
        you.get_colored_name(),
        ' — груз на душе, можно сказать, с каждым днём легчает',
      ]);
      await era.printAndWait([
        '…И потому ',
        you.get_colored_name(),
        ' почти забывает про время',
      ]);
      era.println();
      if (coffee_arim_kin) {
        await tachyon.say_and_wait([
          'Завтра у ',
          call_25,
          ' последняя гонка в этом году',
        ]);
      } else {
        await tachyon.say_and_wait('Завтра — конец сезона в этом году');
      }
      era.println();
      await era.printAndWait(['А после Arima Kinen']);
      await era.printAndWait([
        'наступит то, с чем ',
        you.get_colored_name(),
        ' всё это время боялся(ась) столкнуться, — следующий год',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'В следующем году… те гонки, где собирается бежать ',
        call_25,
        ' — я изо всех сил постараюсь поспеть за каждой, не пропустив ни одной',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит в глаза, которыми глядит ',
        tachyon.sex,
        ', — а внутри то, что горит ради ',
        coffee.get_colored_name(),
        ' — решимость и жар',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Так что и в следующем году прошу — рассчитываю на тебя',
      );
      era.println();
      await era.printAndWait('Без сияния');
      await era.printAndWait([
        'Свет, что всё это время жёг глаза ',
        you.get_colored_name(),
        ' — свет в глазах ',
        tachyon.get_colored_name(),
        ' — потускнел так, что его почти не разглядеть',
      ]);
      era.printButton('「И в следующем году… рассчитываю на тебя」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' устраивает пресс-конференцию сразу после Arima Kinen',
      ]);
      await era.printAndWait(
        'Весть о возвращении на дорожку, наверное, поднимет в обществе настоящую бурю',
      );
      await era.printAndWait(
        'Но всё, что будет потом, к вам двоим сейчас не имеет ни малейшего отношения',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_1: (() => {
    const title = 'Новый год, когда решение принято';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {string} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait('Новый год');
      await era.printAndWait(
        'Полагалось бы, чтобы это был праздник: проводить старый год, встретить новый',
      );
      await era.printAndWait(
        'Сходить в храм на поклонение — это ведь и значит смыть с себя всё прошлогоднее и встретить приход нового года',
      );
      era.println();
      await era.printAndWait(
        'Однако… дурную связь смыть чаще всего не выходит',
      );
      await era.printAndWait(
        'С кем угодно, где угодно — даже храм не исключение',
      );
      await era.printAndWait(
        'Липнет тенью, таскается следом и не отвязывается — отвратительное существо',
      );
      await era.printAndWait(
        'Именно так, то, что зовётся дурной связью, и есть —',
      );
      era.println();
      await tachyon.say_and_wait(['Надо же, ', callname, '… какое совпадение']);
      era.printButton('「Та… Тахион!」', 1);
      era.printButton('「Не до этого, бежим!」', 2);
      await era.input();
      await tachyon.say_and_wait('А, погоди…');
      await era.printAndWait([
        'Не дожидаясь, пока ',
        tachyon.get_colored_name(),
        ' ответит, ',
        you.get_colored_name(),
        ' тянет её за собой; ',
        tachyon.sex,
        ' ныряет следом в глубь храма, и оба быстро пропадают в толпе',
      ]);
      await you.say_as_passer_by_and_wait('Репортёр A', 'Кх… упустили');
      await you.say_as_passer_by_and_wait(
        'Репортёр B',
        'Кто бы подумал, что без свечения её так трудно найти…',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        'Репортёр C',
        '…Караулим здесь, ни в коем случае не упустить',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' тащит за собой ',
        tachyon.get_colored_name(),
        ' и прячется вместе с ней в толпе; только убедившись, что репортёры с камерами следом не бегут, наконец переводит дух',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' сразу после Arima Kinen вдруг объявляет о возвращении — для прессы это, можно сказать, самый громкий повод',
      ]);
      await era.printAndWait([
        'Но из-за тревоги за ',
        tachyon.get_colored_name(),
        ' и за её состояние ',
        you.get_colored_name(),
        ' отказывается от всех интервью на эту тему',
      ]);
      await era.printAndWait('Но кто бы подумал, что они явятся прямо сюда…!');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait([
        'Тут-то ',
        you.get_colored_name(),
        ' и вспоминает: ',
        you.get_colored_name(),
        ' только что, недолго думая, схватил(а) за руку ',
        tachyon.get_colored_name(),
        ' и побежал(а)…',
      ]);
      era.printButton('「Тахион, с ногами всё в порядке?!」', 1);
      await era.input();
      await era.printAndWait('…Ничего, просто немного испугалась, хе-хе');
      await era.printAndWait([
        'Я всё-таки ',
        tachyon.uma_sex_title,
        ', а у ',
        tachyon.uma_sex_title,
        ', даже если ноги не в порядке, тело куда крепче человеческого. Тем более что я — бывшая G1-',
        tachyon.uma_sex_title,
        ', которая в этом году возвращается на дорожку',
      ]);
      era.println();
      await you.say_and_wait('…Да, возвращение на дорожку', true);
      era.printButton('「Тахион」', 1);
      era.printButton('「Расписание гонок в этом году…」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'Ну разумеется… такое же, как у ',
        call_25,
        ' — об этом и говорить нечего',
      ]);
      era.println();
      await era.printAndWait('Так и есть');
      await era.printAndWait([you.get_colored_name(), ' кивает']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ушла с дорожки, и причина ухода — всё ради ',
        coffee.get_colored_name(),
        '———',
        you.get_colored_name(),
        ' — вот чья это вторая подопечная ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        'Значит, среди тех немногих гонок, что можно выбрать, первыми, само собой, должны идти те, в которых бежит ',
        coffee.get_colored_name(),
        ' — им и приоритет…',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? Что-то случилось?']);
      era.println();
      await era.printAndWait('В голове всё равно само собой всплывает');
      await era.printAndWait([
        'Выражение лица, которое было у ',
        tachyon.get_colored_name(),
        ' на летних сборах',
      ]);
      await era.printAndWait([
        'Взгляд, который был у ',
        tachyon.get_colored_name(),
        ' после Kikuka Sho',
      ]);
      await era.printAndWait([
        'Перед Arima Kinen… то лицо, с каким ',
        tachyon.get_colored_name(),
        ' принимала решение',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' только теперь замечает, что ',
        tachyon.get_colored_name(),
        ' уже какое-то время не сводит глаз с ',
        you.get_colored_name(),
        ' — спохватывается и спрашивает, в чём дело',
      ]);
      era.println();
      await tachyon.say_and_wait('…Ничего, просто скоро наша очередь');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' показывает на храм, и только тогда ',
        you.get_colored_name(),
        ' замечает: то, куда вы второпях вбежали, — это длинная очередь перед главным святилищем, к молитве о божьей защите',
      ]);
      era.printButton('「Тахион, ты же в такое не веришь?」', 1);
      await era.input();
      await era.printAndWait([
        'Слова уже вылетели, и ',
        you.get_colored_name(),
        ' сразу чувствует, что дело плохо',
      ]);
      if (relation <= 0) {
        await tachyon.say_and_wait(
          '…О, вот уж не подумала бы: оказывается, тебе не всё равно, чего хочу я',
        );
        era.println();
        await era.printAndWait([
          'И, как и следовало ждать, ',
          tachyon.sex,
          ' отвечает холодной насмешкой',
        ]);
      } else if (relation <= 225) {
        era.println();
        await tachyon.say_and_wait('…Разве не ты меня сюда притащил(а)?');
        era.println();
        await era.printAndWait([
          'Если подумать, ты ведь ещё ничего не объяснил(а) ',
          tachyon.get_colored_name(),
          ' насчёт всего этого…',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' торопливо рассказывает про репортёров',
        ]);
        await era.printAndWait([
          'Выслушав, ',
          tachyon.sex,
          ' особо не реагирует, только роняет: вот как',
        ]);
      } else if (relation <= 525) {
        await tachyon.say_and_wait(
          'Хоть я и не верю… но пусть это будет твоим добрым порывом. Да и разве не ты меня сюда затащил(а)?',
        );
        era.println();
        await era.printAndWait([
          'Если подумать, ты ведь ещё ничего не объяснил(а) ',
          tachyon.get_colored_name(),
          ' насчёт всего этого…',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' торопливо рассказывает про репортёров',
        ]);
        await era.printAndWait([
          'Выслушав, ',
          tachyon.sex,
          ' смотрит чуть виновато',
        ]);
      } else {
        await tachyon.say_and_wait(
          'Я верю не в богов, а в тебя: ведь это ты меня сюда привёл(а)',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' вдруг говорит что-то до неловкости смущающее',
        ]);
        await era.printAndWait([
          'Если подумать, ты ведь ещё ничего не объяснил(а) ',
          tachyon.get_colored_name(),
          ' насчёт всего этого…',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' торопливо рассказывает про репортёров',
        ]);
        await tachyon.say_and_wait(
          'Хм, кучка бездарной мошкары — и они смеют в нас сомневаться?',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' презрительно усмехается',
        ]);
      }
      era.println();
      await era.printAndWait([
        'За разговором вы уже оказались в самом начале очереди',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит на статую божества перед собой',
      ]);
      await era.printAndWait('Ну что… какое же загадать желание');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' думает долго, перебирает множество желаний',
      ]);
      await era.printAndWait('Складываешь ладони и молишься богам');
      await era.printAndWait([
        'Пусть у ',
        tachyon.get_colored_name(),
        ' с ногами всё будет хорошо, пусть добежит здоровой',
      ]);
      await era.printAndWait([
        'Пусть у ',
        tachyon.get_colored_name(),
        ' гонка выйдет такой же блестящей, как всегда',
      ]);
      await era.printAndWait([
        'Пусть… у ',
        coffee.get_colored_name(),
        ' тренировки тоже пройдут спокойно',
      ]);
      era.println();
      await era.printAndWait([
        'Закончив молитву, ',
        you.get_colored_name(),
        ' поднимает голову и смотрит на стоящую рядом ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' давно закончила свою формальную молитву и просто ждёт ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        'Вы вдвоём выбираетесь из толпы, осторожно обходите не оставивших надежды репортёров и возвращаетесь в академию',
      ]);
      era.println();
      await tachyon.say_and_wait(['Ну и… о чём же ты молился(ась)?']);
      era.println();
      await era.printAndWait([
        'Непонятно почему, но ',
        tachyon.get_colored_name(),
        ' явно сгорает от любопытства',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' отвечает, и всё это слышит ',
        tachyon.sex,
        '…',
      ]);
      era.printButton('Здоровье Тахион (Силы+20%)', 1);
      era.printButton('Гонка Тахион (случайный параметр+20)', 2);
      era.printButton('Тренировка Кафе (очки навыков+30)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' отвечает, и всё это слышит ',
            tachyon.sex,
            ': ',
            you.get_colored_name(),
            ' молился(ась), чтобы были здоровы ноги, на которых бежит ',
            tachyon.sex,
            ' сама',
          ]);
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('…Скучное желание');
            await tachyon.say_and_wait(
              'Если просить только о здоровье… так не проще ли мне вообще не возвращаться на дорожку?',
            );
            await tachyon.say_and_wait([
              'Уже решил(а) отбросить всё — и загадываешь такое… ',
              callname,
              ' — решимости тебе не хватает',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' отвечает очень едко',
            ]);
            await era.printAndWait([
              'Звучит так, будто она от всей души насмехается над желанием, которое высказал(а) ',
              you.get_colored_name(),
              ' вслух',
            ]);
          } else {
            await tachyon.say_and_wait('…Здоровье, значит');
            await tachyon.say_and_wait('Нет, ничего, просто… хе-хе');
            await tachyon.say_and_wait('Да, было бы хорошо добежать здоровой');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' говорит это как бы между прочим',
            ]);
            await era.printAndWait(
              'Будто это всего лишь обычный разговор — да так оно и есть — и не более',
            );
          }
          era.println();
          await era.printAndWait([
            'Но ',
            you.get_colored_name(),
            ' не упускает этого из виду',
          ]);
          await era.printAndWait([
            'В тот самый миг, когда прозвучало желание, в глазах ',
            tachyon.get_colored_name(),
            ' вспыхнули надежда и жажда',
          ]);
          await era.printAndWait('…Но что толку, даже если увидел(а)?');
          await era.printAndWait([
            'Дорогу к такой возможности несколько месяцев назад ',
            you.get_colored_name(),
            ' собственными руками и запечатал(а)',
          ]);
          await era.printAndWait([
            'Нынешние ',
            you.get_colored_name(),
            ' и ',
            tachyon.sex,
            ' просто несутся по дороге к самоуничтожению, только и всего',
          ]);
          era.println();
          await era.printAndWait('Поэтому остаётся только вознести молитву');
          await era.printAndWait('Хотя бы в это последнее оставшееся время');
          await era.printAndWait([
            tachyon.sex,
            ' — лишь бы без боли, без травм',
          ]);
          era.println();
          await tachyon.say_and_wait('…Раз ничего такого, я пойду');
          era.printButton('「Отдыхай как следует」', 1);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' отвечает, и всё это слышит ',
            tachyon.sex,
            ': ',
            you.get_colored_name(),
            ' молился(ась), чтобы гладко прошли гонки, в которых бегут ',
            tachyon.sex,
            ' и ',
            coffee.get_colored_name(),
            ', обе',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Ха-ха, а желание-то неплохое, разве нет?',
          );
          await tachyon.say_and_wait([
            call_25,
            ' уже доказала, на что ',
            tachyon.sex,
            ' способна… дальше моя очередь',
          ]);
          await tachyon.say_and_wait([
            'Я же сама говорила, что стану ступенькой, по которой поднимется ',
            tachyon.sex,
            ' — значит, топтаться на месте мне нельзя, иначе я в лучшем случае просто булыжник',
          ]);
          era.println();
          await era.printAndWait([
            'Хоть ',
            tachyon.get_colored_name(),
            ' и твердит без умолку, что всё ради ',
            coffee.get_colored_name(),
          ]);
          await era.printAndWait([
            'но ',
            you.get_colored_name(),
            ' всё равно не упускает…',
          ]);
          await era.printAndWait([
            'В тот миг, когда речь заходит о гонках, в глазах ',
            tachyon.get_colored_name(),
            ' вспыхивает боевой азарт',
          ]);
          await era.printAndWait([
            'Всё-таки ',
            tachyon.get_colored_name(),
            ' всё ещё жаждет вернуться на дорожку',
          ]);
          await era.printAndWait('…Но что толку от этой жажды');
          await era.printAndWait([
            'Дорогу к такой возможности несколько месяцев назад ',
            you.get_colored_name(),
            ' собственными руками и запечатал(а)',
          ]);
          await era.printAndWait([
            'Нынешние ',
            you.get_colored_name(),
            ' и ',
            tachyon.sex,
            ' просто несутся по дороге к самоуничтожению, только и всего',
          ]);
          era.println();
          await era.printAndWait('Поэтому остаётся только вознести молитву');
          await era.printAndWait('Хотя бы в это последнее оставшееся время');
          await era.printAndWait([
            'Пусть в оставшееся время ',
            tachyon.sex,
            ' сполна насладится теми днями',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Хе-хе, раз ты так ждёшь, надо немедленно браться за тренировки',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' довольная уходит в сторону Тренировочного поля',
          ]);
          era.printButton('…Осторожнее на тренировках', 1);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' отвечает, и всё это слышит ',
            tachyon.sex,
            ': ',
            you.get_colored_name(),
            ' молился(ась) о том, чтобы у ',
            coffee.get_colored_name(),
            ' гладко шли тренировки',
          ]);
          era.println();
          await tachyon.say_and_wait('…Угу');
          await tachyon.say_and_wait([
            'Разумеется… ведь всё, что мы делаем, — ради того, чтобы ',
            call_25,
            ' смогла шагнуть дальше и превзойти предел',
          ]);
          await tachyon.say_and_wait([
            'Если ',
            tachyon.sex,
            ' споткнётся на тренировках, тогда… всё пойдёт впустую',
          ]);
          await tachyon.say_and_wait(
            'Вот это и есть самое важное… Я рада, что ты не забываешь про порядок приоритетов',
          );
          era.println();
          await era.printAndWait([
            'Хоть ',
            tachyon.get_colored_name(),
            ' и твердит без умолку, что всё ради ',
            coffee.get_colored_name(),
          ]);
          await era.printAndWait([
            'но ',
            you.get_colored_name(),
            ' всё равно не упускает… стоит зайти речи о ',
            coffee.get_colored_name(),
            ' — и ',
            tachyon.sex,
            ' смотрит с тоской',
          ]);
          await era.printAndWait([
            'Всё-таки не надо было заговаривать о ',
            coffee.get_colored_name(),
            ' — так ведь?',
          ]);
          await era.printAndWait([
            'Сейчас, когда ты тренер ',
            tachyon.get_colored_name(),
            ' — думать надо о том, чего хочет ',
            tachyon.sex,
            ', так ведь',
          ]);
          await era.printAndWait([
            'Но… право думать о том, чего хочет ',
            tachyon.sex,
            ', ты сам(а) отбросил(а) ещё несколько месяцев назад',
          ]);
          await era.printAndWait([
            'Нынешние ',
            you.get_colored_name(),
            ' и ',
            tachyon.sex,
            ' просто несутся по дороге к самоуничтожению, только и всего',
          ]);
          era.println();
          await era.printAndWait('Потому и остаётся только вознести молитву');
          await era.printAndWait(
            'Пусть удастся обеспечить все внешние обстоятельства',
          );
          await era.printAndWait([
            'Исполнить то, чего хочет ',
            tachyon.sex,
            ', исполнить то, что оставила ',
            tachyon.get_colored_name(),
            ' — её 「последнюю волю」',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Хе-хе, раз ты так ждёшь, дальше и мне проигрывать нельзя: надо восстановиться настолько, чтобы встать на одну сцену с ',
            call_25,
            ' — иначе никак',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' договаривает это ровным тоном и уходит в сторону лаборатории',
          ]);
          era.printButton('「…Осторожнее с опытами」', 1);
      }
      await era.input();
      await era.printAndWait([
        tachyon.sex,
        ' машет рукой в ответ — мол, поняла',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_14: (() => {
    const title = 'Фестиваль благодарности фанатам';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        'Тело подготовлено ещё не до конца, и потому ',
        tachyon.get_colored_name(),
        ' отказывается от мероприятий и интервью, связанных с Фестивалем благодарности фанатам',
      ]);
      await era.printAndWait([
        'Из-за этого вокруг по поводу 「',
        tachyon.get_colored_name(),
        ' возвращается」 пошли шаткие настроения и сомнения',
      ]);
      await era.printAndWait([
        'Но всё это не про ',
        you.get_colored_name(),
        ' и не про ',
        tachyon.get_colored_name(),
        ' — сомнения…',
      ]);
      await era.printAndWait(
        'Нет: если идти по плану, который вы двое наметили, то чем больше сомнений, тем, пожалуй, легче этот план провернуть',
      );
      await era.printAndWait([
        '…И потому, слыша, как эти люди бранят ',
        tachyon.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' только молча стискивает зубы и уходит прочь',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_15: (() => {
    const title = 'Мерцающий фотон';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {string} callname_25 曼城茶座对玩家的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25, callname_25) => {
      await era.printAndWait('Ночное Тренировочное поле');
      await era.printAndWait('Должно быть пусто, в этот час никого…');
      era.println();
      await tachyon.say_and_wait('…Ха-ха, как людно…');
      era.println();
      await era.printAndWait('Неожиданно трек полон тех, кто тренируется сам');
      await era.printAndWait([
        'Старт линии G1 — нервные ',
        tachyon.uma_sex_title,
        ' сами выходят тренироваться; в этот сезон в Трейсен обычная картина',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        'А, Тахион-сэм… э, тренер- ',
        you.adult_sex_title,
        '!?',
      ]);
      era.println();
      await era.printAndWait([
        'Младшая увидела ',
        tachyon.get_colored_name(),
        ' и хотела поздороваться — но заметила, кто спрятался за ней — ',
        tachyon.sex,
        ' заслоняет ',
        you.get_colored_name(),
        ', и младшая сразу замирает',
      ]);
      await era.printAndWait('Самостоятельные тренировки всё же не поощряют…');
      await era.printAndWait([
        'Впрочем, кто сам пришёл с подопечной ',
        tachyon.uma_sex_title,
        ' на самоволку — ',
        you.get_colored_name(),
        ' тоже не в праве пенять на ',
        tachyon.couple_title,
        ' же',
      ]);
      era.printButton('「Тсс」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' с кривой усмешкой ',
        tachyon.sex,
        ' делаешь «тсс», и ',
        tachyon.sex,
        ' схватывает на лету и делает вид, что не видит ',
        you.get_colored_name(),
        ', и дальше говорит с ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Тахион-сэмпай! Я тоже в классику! Satsuki Sho жаль~~ не успела выйти, но на Derby выложусь!',
      );
      await tachyon.say_and_wait('Хе-хе. Тогда постарайся');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Блин~~ пик формы пришёл слишком поздно, тренер снял меня с Satsuki Sho… есть способ ускорить созревание?',
      );
      await tachyon.say_and_wait(
        'Лучше как идёт само… форсировать рост — всегда оставит скрытый изъян…',
      );
      era.println();
      await era.printAndWait([
        'Когда говорит с младшими, ',
        tachyon.get_colored_name(),
        ', мягче, чем ',
        you.get_colored_name(),
        ' ждал(а)',
      ]);
      await era.printAndWait([
        'Трудно поверить, что это ',
        tachyon.get_colored_name(),
        ' могла сказать',
      ]);
      await era.printAndWait('…Хотя если подумать — как раз логично');
      await era.printAndWait([
        'Для кого возможность — всё, ',
        tachyon.get_colored_name(),
        ' ни за что не позволит ради сиюминутного результата жертвовать ',
        tachyon.uma_sex_title,
        ' и её возможностью',
      ]);
      await era.printAndWait(
        'Тем более если это младшая, у которой возможность ещё шире',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'А… уже поздно, Тахион-сэмпай! Я пойду!',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        'И ещё… Tenno Sho (Spring): Кафе-сэмпай сильна, но я верю — Тахион-сэмпай победит!',
      ]);
      era.println();
      await era.printAndWait([
        'Полная восторга ',
        tachyon.sex,
        ' — в глазах искры',
      ]);
      era.drawLine();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' сильна — это само собой',
      ]);
      await era.printAndWait([
        'Даже без помощи ',
        tachyon.get_colored_name(),
        ' и твоей, ',
        coffee.get_colored_name(),
        ' всё равно сильна',
      ]);
      await era.printAndWait([
        'В честной борьбе ',
        tachyon.get_colored_name(),
        ' пришлось бы тяжко',
      ]);
      await era.printAndWait('Кроме того…');
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await era.printAndWait([
          'Сил хватает, но по опыту гонок и месяцам вне трека ',
          tachyon.get_colored_name(),
          ' слабее, чем ',
          coffee.get_colored_name(),
        ]);
      } else {
        await era.printAndWait([
          ' По силе нынешняя ',
          tachyon.get_colored_name(),
          ' слабее, чем на Satsuki и Derby. Слабее, чем тогда ',
          tachyon.sex,
        ]);
      }
      await era.printAndWait(' Как ни восстанавливай — предел есть');
      era.println();
      await era.printAndWait([
        'Тем более ',
        tachyon.get_colored_name(),
        ' выходит на старт… не ради победы',
      ]);
      await era.printAndWait([
        'Лишь чтобы ',
        coffee.get_colored_name(),
        ' поднялась выше',
      ]);
      await era.printAndWait(
        'Не «всё равно, кто победит» — нельзя выиграть, и не хочется выиграть',
      );
      await era.printAndWait([
        'Победа значит: мечта ',
        tachyon.get_colored_name(),
        ', последняя надежда ',
        coffee.get_colored_name(),
        ' тоже пала перед ',
        tachyon.get_colored_name(),
        ' и её пределом',
      ]);
      await era.printAndWait('Поэтому…');
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('Поэтому ответить трудно');
      await era.printAndWait('Скажешь ли доверяющей младшей такое?');
      await era.printAndWait(['Что Tenno Sho (Spring) не выиграть']);
      await era.printAndWait(
        'Когда восторг в глазах стынет в недоумение — скажешь?',
      );
      era.println();
      await era.printAndWait([
        'По идее сейчас выручить ',
        tachyon.get_colored_name(),
        ' должен(на) именно ',
        you.get_colored_name(),
        ': но почему-то ни шагнуть, ни открыть рот',
      ]);
      await era.printAndWait([
        'Может, ',
        you.get_colored_name(),
        ' тоже ждёт ответа',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ', правда плевать на победу?',
      ]);
      await era.printAndWait('Правда отдаст победу своими руками?');
      await era.printAndWait(
        'Скажет «сдаюсь» перед возможностью, которую сама ценит?',
      );
      era.println();
      await era.printAndWait('Неизвестно, сколько прошло');
      await era.printAndWait([
        'Пока остальные, что тренировались сами, ',
        tachyon.uma_sex_title,
        ' уже ушли, тишина стала нормой ночи',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        call_25,
        ' ',
        tachyon.sex,
        ', и правда сильный соперник',
      ]);
      era.println();
      await era.printAndWait('…Да');
      await era.printAndWait('Это и есть само собой');
      era.println();
      await era.printAndWait([
        'В сущности, если ',
        tachyon.get_colored_name(),
        ' всерьёз захочет эту победу — хуже всего будет тебе',
      ]);
      await era.printAndWait([
        'И эту фарсовую затею ты принял(а) потому, что это для ',
        coffee.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' выигрыш обеих',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' берёт славу, ',
        tachyon.get_colored_name(),
        ' получает то, чего ',
        tachyon.sex,
        ' хочет от опыта',
      ]);
      await era.printAndWait([
        'Если ',
        tachyon.get_colored_name(),
        ' теперь передумает — в тупике окажешься ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Но… я выиграю. Как бы ни была сильна ',
        call_25,
        ' ',
        tachyon.sex,
        ' — выиграю я',
      ]);
      era.println();
      await era.printAndWait('!');
      await era.printAndWait('Контрудар…?');
      await era.printAndWait('Плохо…');
      await era.printAndWait([
        'Даже если это отписка младшей — такой ответ значит: у ',
        tachyon.get_colored_name(),
        ' сердце уже дрогнуло',
      ]);
      await era.printAndWait('Иначе зачем столько молчать');
      await era.printAndWait('Тогда… что тебе делать');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' зовёт ',
        callname_25,
        ', ',
        tachyon.get_colored_name(),
        ' зовёт ',
        callname,
      ]);
      await era.printAndWait(' Как выбрать?');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Да! В тот день обязательно приду болеть за Тахион-сэмпай!',
      );
      era.println();
      await era.printAndWait([
        'Весёлые шаги уходят — вы двое на тихом Тренировочном поле, со звёздами',
      ]);
      era.println();
      await era.printAndWait([
        'Выбрать ',
        tachyon.get_colored_name(),
        ' — кем тогда был(а) ты, выбравший(ая) Plan B?',
      ]);
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          'Если и дальше помогать ',
          tachyon.get_colored_name(),
          ' — можно ли смотреть в глаза. Та ',
          tachyon.teen_sex_title,
          ', ради которой ты выкладывался(ась) до конца? И кофе, что ',
          tachyon.sex,
          ' варит?',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Значит, помогать ',
        coffee.get_colored_name(),
        ', да?',
      ]);
      await era.printAndWait([
        'Значит, спросить ',
        tachyon.get_colored_name(),
        ', точно ли ',
        tachyon.sex,
        ' сказала лишь слова для младшей',
      ]);
      await era.printAndWait('Значит… в такой миг не должно быть радости?');
      era.println();
      await era.printAndWait('Почему тогда так радостно');
      await era.printAndWait('Неужели изначально ты и правда хотел(а) Plan A?');
      await era.printAndWait([
        'Неужели помощь ',
        coffee.get_colored_name(),
        ' шла против сердца',
      ]);
      await era.printAndWait('…Нет. Вот это можно отрицать наверняка');
      await era.printAndWait(
        'Тогда почему… должно рвать — а сердце всё равно не унимается',
      );
      await era.printAndWait([
        'Невольно ',
        you.get_colored_name(),
        ' спрашивает',
      ]);
      era.printButton(
        '「Тахион… то, что только что сказала, — не всерьёз?」',
        1,
      );
      era.printButton(
        '「Тахион… то, что только что сказала, — шутка, да?」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait(
        'Конечно. Считать победы — право детей… нам нужны только данные опыта, и всё',
      );
      await era.printAndWait('Слова лгут');
      await era.printAndWait('Голос лжёт');
      await era.printAndWait(
        'Те, кто мнит себя вечно рациональным, лгут ради своей выгоды',
      );
      await era.printAndWait('Но… то, что трогает, — нет');
      era.println();
      await era.printAndWait([
        'Сколько тут правды, сколько лжи, ',
        you.get_colored_name(),
        ' не знает',
      ]);
      await era.printAndWait([
        'Но… ',
        tachyon.sex,
        ' — в глазах свет, что месяцы назад почти погас',
      ]);
      await era.printAndWait([
        'Жёг ',
        you.get_colored_name(),
        ' глаза — свет, что трогал и уже погас',
      ]);
      await era.printAndWait('А этой ночью снова затеплился слабым огоньком');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_end: (() => {
    const title = 'Понимаю';
    /**
     * Plan B & 曼城茶座同时参赛
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {string} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} tachyon_win 爱丽速子是否获胜
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tachyon_win,
    ) => {
      await era.printAndWait('Ах, вот оно что');
      era.println();
      await era.printAndWait(['Tenno Sho (Spring)']);
      await era.printAndWait('Глядя на схватку этих двоих на финишной прямой');
      await era.printAndWait('наконец-то доходит');
      era.println();
      await era.printAndWait([
        'Почему тогда, прекрасно понимая, что опорой лягут достижения ',
        tachyon.get_colored_name(),
        ' — всё равно поддержал(а) ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait([
        'Почему в тот вечер ответ, который дала ',
        tachyon.get_colored_name(),
        ', всё-таки обрадовал',
      ]);
      era.println();
      await era.printAndWait([
        'Увидев эту фигуру, обогнавшую свет, и бег, что чёрной гончей вгрызается ей в спину, — наконец понимаешь',
      ]);
      await era.printAndWait([
        'Ещё в тот самый первый раз, когда увидел(а), как бегут ',
        tachyon.couple_title,
        ' —',
      ]);
      await era.printAndWait([
        'уже тогда тебя навсегда захватило то, как бегут ',
        tachyon.couple_title,
        '',
        era.get('love:25') >= 75 && love >= 75 ? '' : ' — их бег',
        '.',
      ]);
      era.println();
      await era.printAndWait([
        'Сверкающая, как свет, — ',
        tachyon.get_colored_sex(),
      ]);
      await era.printAndWait([
        'Чёрная, как тень, — ',
        coffee.get_colored_sex(),
      ]);
      await era.printAndWait(['С самого начала всё было так просто']);
      era.println();
      await era.printAndWait('просто ребяческое, наивное желание');
      await era.printAndWait(
        'хотелось узнать, кто сильнее… нет, просто хотелось увидеть их в одном забеге',
      );
      await era.printAndWait([
        'Сильнее, слабее — не в этом суть, просто хотелось смотреть, как несутся ',
        tachyon.couple_title,
        ' вперёд',
      ]);
      era.println();
      await era.printAndWait(
        'хотелось, чтобы эта прямая перед финишем не кончалась никогда',
      );
      await era.printAndWait([
        'хотелось вечно смотреть на то, как мчатся ',
        tachyon.couple_title,
        ' по дорожке — на эту самую картину',
      ]);
      await era.printAndWait([
        'Незаметно для себя, ',
        you.get_colored_name(),
        ' роняет слёзы',
      ]);
      era.println();
      await era.printAndWait('Свет или тень');
      await era.printAndWait(
        'Всеозаряющий свет, от которого теням негде укрыться',
      );
      await era.printAndWait(
        'или всепоглощающая тьма, что сожрёт свет без остатка',
      );
      era.println();
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Грызня до последнего мгновения, вот это схватка! ',
        coffee.get_colored_name(),
        '! Или же ',
        tachyon.get_colored_name(),
        '! Уйдёт ли сверхсветовая — или небоскрёб настигнет! И вот, финишную черту пересекает…!',
      ]);
      era.drawLine();
      if (tachyon_win) {
        await tachyon.say_and_wait('…Выиграла… да?');
      } else {
        await tachyon.say_and_wait('…Проиграла… да?');
      }
      era.println();
      await tachyon.print_and_wait('Уму непостижимо');
      await tachyon.print_and_wait('Никакой логики');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' выходила на старт ради того, чтобы ',
        coffee.get_colored_name(),
        ' добилась успеха',
      ]);
      await tachyon.print_and_wait([
        'Чтобы ',
        coffee.sex,
        ' взошла на вершину, в забеге давить туда, где ',
        coffee.sex,
        ' всего слабее, чтобы через боль ',
        coffee.sex,
        ' шагнула вперёд',
      ]);
      await tachyon.print_and_wait([
        'А потом… незаметно уйти в тень, чтобы ',
        tachyon.sex,
        ' насладилась наградой по имени победа',
      ]);
      if (tachyon_win) {
        await era.printAndWait('Итог');
        await you.say_as_passer_by_and_wait('Комментатор', [
          'Это ',
          tachyon.get_colored_name(),
          '! Быстрее света — и слава щита на подъёме Ёдо достаётся ',
          tachyon.get_colored_name(),
          '!',
        ]);
      } else {
        await tachyon.print_and_wait('Так ведь и должно было быть, тогда…');
        era.println();
        await you.say_as_passer_by_and_wait('Комментатор', [
          'Это ',
          coffee.get_colored_name(),
          '! Сверхсветовая поглощена — и слава щита на подъёме Ёдо достаётся ',
          coffee.get_colored_name(),
          '!',
        ]);
        era.println();
        await tachyon.print_and_wait('Почему… почему сейчас так… обидно!');
      }
      era.println();
      await tachyon.print_and_wait('Ведь поначалу всё шло как надо');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' и сильна, и слаба одним и тем же — своей стабильностью',
      ]);
      await tachyon.print_and_wait([
        'Благодаря запредельной стабильности ',
        tachyon.sex,
        ' всегда берёт своё на длинных дистанциях, где сила проверяется до предела',
      ]);
      await tachyon.print_and_wait([
        'Но из-за той же чрезмерной стабильности ',
        tachyon.sex,
        ' не выдаёт рывка в решающий миг',
      ]);
      await tachyon.print_and_wait([
        'Поэтому и был сломан покой, в котором ',
        tachyon.sex,
        ' чувствовала себя уверенно: только так ',
        tachyon.sex,
        ' перешагнёт свой предел',
      ]);
      era.println();
      await tachyon.print_and_wait('И вышло неожиданное');
      await tachyon.print_and_wait([
        tachyon.sex,
        ' не только вернула себе ритм, но и шагнула дальше — отточила собственный бег',
      ]);
      await tachyon.print_and_wait(
        'На этом цель забега должна была быть исчерпана',
      );
      await tachyon.print_and_wait('Но…');
      era.println();
      await tachyon.print_and_wait('Причину и думать не надо — и так ясно');
      await tachyon.print_and_wait(
        'Главная причина — тот вечерний разговор с младшей',
      );
      await tachyon.print_and_wait([
        'Но… и младшая — ',
        tachyon.sex,
        ' ведь ни в чём не виновата',
      ]);
      await tachyon.print_and_wait([
        'Виновата тут — ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.print_and_wait(
        'Если бы в душе не было колебаний, тогда и ответ нашёлся бы сразу',
      );
      await tachyon.print_and_wait('Хоть отговоркой, хоть честно');
      await tachyon.print_and_wait('Не будь в душе сомнений, слова бы нашлись');
      era.println();
      await tachyon.say_and_wait('Я…');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ', как ни крути, всё-таки ',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait(
        'и всё равно не может противиться инстинкту — бежать и побеждать',
      );
      await tachyon.print_and_wait([
        'Ведь путей раскрыть, на что способна ',
        tachyon.uma_sex_title,
        ', ещё сколько угодно',
      ]);
      await tachyon.print_and_wait('Вовсе не обязательно цепляться за дорожку');
      await tachyon.print_and_wait([
        'И всё-таки выбор пал на ',
        call_25,
        ' — вот причина, по которой другой путь так и не выбран, пусть и остаётся лишь мучительно смотреть, как бегут другие',
      ]);
      await tachyon.print_and_wait([
        'Потому что… ',
        tachyon.get_colored_name(),
        ' любит бежать, вот и всё',
      ]);
      era.println();
      await tachyon.print_and_wait('Дойдя до этой мысли, вдруг отпускает');
      await tachyon.print_and_wait(
        'Сколько ни прикрывайся высокими предлогами и доводами — всё одно',
      );
      await tachyon.print_and_wait([
        'Как ни старайся, от того, что заложено в ',
        tachyon.uma_sex_title,
        ', не вырваться',
      ]);
      await tachyon.print_and_wait('…да и не хочется вырываться');
      await tachyon.print_and_wait([
        'Хочется стать самой быстрой, самой сильной, какая только бывает — ',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait(
        'Хочется схватиться с соперницей насмерть и держаться до последнего мига',
      );
      await tachyon.print_and_wait('Хочется… доказать, чего стою');
      era.println();
      await tachyon.print_and_wait([
        '…Но если так, то как же мне глядеть в глаза — ведь есть ',
        you.sex,
      ]);
      await tachyon.print_and_wait(
        'Тот, кто всё время помогал мне, кто всегда был рядом и держал',
      );
      await tachyon.print_and_wait([
        'С каким лицом теперь показаться — ведь напротив встанет ',
        you.sex,
      ]);
      await tachyon.print_and_wait([
        '…Даже ',
        you.sex,
        ' — и тот наверняка разозлится',
      ]);
      await tachyon.print_and_wait([
        'Как личный тренер ',
        tachyon.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' —',
      ]);
      await tachyon.print_and_wait([
        'как уговаривались: забег уступить ',
        call_25,
        ', а самой сосредоточиться на работе за кулисами',
      ]);
      era.println();
      await tachyon.print_and_wait('А вышло…');
      if (tachyon_win) {
        await tachyon.print_and_wait(
          'этот неуправляемый, нестабильный трудный ребёнок',
        );
        await tachyon.print_and_wait(
          'поддалась минутной горячке и всё испортила',
        );
      } else {
        await tachyon.print_and_wait([
          'А теперь — услышать это должен ',
          you.sex,
          ': что я… всё-таки хочу бежать дальше?',
        ]);
        await tachyon.print_and_wait(
          'Издеваться над человеком — и то надо знать меру',
        );
      }
      era.println();
      await tachyon.print_and_wait('Незаметно для себя');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' сбежала с ипподрома',
      ]);
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' не вернулась в комнату для участников',
      ]);
      await era.printAndWait([
        'Нигде на ипподроме не было и следа — ',
        tachyon.sex,
        ' как сквозь землю провалилась',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' в тревоге звонит коменданту общежития, чтобы всё выяснить, и только услышав, что ',
        tachyon.get_colored_name(),
        ' уже вернулась в Трейсен, переводит дух',
      ]);
      await era.printAndWait('…Нет, сказать «перевёл(а) дух» тоже нельзя');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — да что с ней… почему сама убежала обратно в академию',
      ]);
      await era.printAndWait([
        'Надо будет при случае поговорить — пусть ',
        tachyon.sex,
        ' выговорится',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_18: (() => {
    const title = 'Вновь вспыхнувший фотон';
    /**
     * 春季天皇赏胜过茶座后触发
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait('Так больше продолжаться не может');
      await era.printAndWait([
        'После того как ',
        tachyon.get_colored_name(),
        ' уже неизвестно в который раз уходит от разговора с ',
        you.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' решается',
      ]);
      await era.printAndWait(
        'На тренировки-то приходит, и опыты ставит как обычно',
      );
      await era.printAndWait([
        'но стоит остановиться и завести речь о том, что было на Tenno Sho (Spring), как ',
        tachyon.sex,
        ' тут же сбегает',
      ]);
      await era.printAndWait('Где угодно, когда угодно — даже посреди опыта');
      era.println();
      await era.printAndWait('Так дальше нельзя');
      await era.printAndWait([
        'Видно, как ',
        tachyon.sex,
        ' день ото дня тускнеет лицом и уже почти сжимается в комок',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' не должна быть такой',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' не смеет быть такой',
      ]);
      era.println();
      await era.printAndWait('Ведь свет в её глазах вернулся таким трудом');
      await era.printAndWait('и дать ему погаснуть из-за такого — ни за что');
      await era.printAndWait(
        'Почему она бегает от разговора — в общем-то понятно',
      );
      if (relation <= 75) {
        await era.printAndWait('хотя часть всё же остаётся тёмной');
      }
      await era.printAndWait('А значит…');
      era.printButton(
        `надо всё сказать напрямую — пусть ${tachyon.sex} услышит`,
        1,
      );
      await era.input();
      era.drawLine();
      await tachyon.print_and_wait('…Уже несколько недель как прячусь');
      await tachyon.print_and_wait([
        'С самого конца Tenno Sho (Spring) я всё время прячусь, а ищет меня ',
        you.sex,
      ]);
      await tachyon.print_and_wait(
        'Прячусь от того, кто ради меня пожертвовал всем',
      );
      await tachyon.print_and_wait([
        'С точки зрения рассудка, и дальше вести ту, что бежать не хочет и будущего не имеет, — ',
        tachyon.uma_sex_title,
        ', — дело бессмысленное, пустая трата места, средств и времени',
      ]);
      await tachyon.print_and_wait([
        'С точки зрения чувств — это разбить мечту, которой жил ',
        you.sex,
        ', разбить тот самый бег, которым ',
        you.sex,
        ' был без ума очарован, и сверх того потребовать, чтобы ',
        you.sex,
        ' подыграл какому-то нелепому Plan B: чтобы мечтой пожертвовал ',
        you.sex,
        ', подстраиваясь под чужое',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'И всё равно ',
        you.sex,
        ' без оглядки пошёл следом',
      ]);
      await tachyon.print_and_wait(
        'Ради моих исследований сам вызвался быть подопытным',
      );
      await tachyon.print_and_wait([
        'Ради моего каприза втянул в это и ',
        call_25,
        ' заодно',
      ]);
      await tachyon.print_and_wait([
        'И потому в обмен хотелось, чтобы ',
        you.sex,
        ' и ',
        call_25,
        ' получили славу — хоть такая, ничтожная, но плата',
      ]);
      await tachyon.print_and_wait('Но…');
      era.println();
      await tachyon.say_and_wait('…Хм?');
      era.println();
      await tachyon.print_and_wait([
        'И сегодня всё так же — нарочно мимо разговора, потому что рядом ',
        you.sex,
        ', мимо всякого общения, кроме самого необходимого; и вот, уже у самой лаборатории',
      ]);
      await tachyon.print_and_wait('Но… у лаборатории меня уже кто-то ждёт');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await tachyon.print_and_wait('Не надо');
      await tachyon.print_and_wait('Нельзя');
      await tachyon.print_and_wait('Только не сейчас');
      era.println();
      await tachyon.print_and_wait('Ведь всё же просто');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' просто проиграет Takarazuka Kinen — и всё',
      ]);
      await tachyon.print_and_wait([
        'Стоит уступить победу на Takarazuka Kinen — и можно будет снова…',
      ]);
      era.println();
      await tachyon.print_and_wait('Нет, уже ничего не поделать');
      await tachyon.print_and_wait('Инстинкт бежать не задавить');
      await tachyon.print_and_wait(
        'Это всего лишь самообман, бегство от того, что есть',
      );
      era.println();
      await tachyon.print_and_wait(
        'Фигура впереди стоит прямо посреди коридора',
      );
      await tachyon.print_and_wait(
        'Всего трясёт… ну да, разумеется, он в ярости',
      );
      await tachyon.print_and_wait('Дура, которая напортачила и всё бегает');
      await tachyon.print_and_wait('Ладно, я уже готова');
      await tachyon.print_and_wait(
        'Выплесни на меня всю свою злость… до капли',
      );
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.drawLine();
      await era.printAndWait('Итак, с чего начать?');
      await era.printAndWait([
        'Наверное, надо сказать первым: пусть ',
        tachyon.sex,
        ' знает, что винить её никто не думает',
      ]);
      await era.printAndWait([
        'В конце концов, победа, доставшаяся потому, что соперница поддалась, — такой победе ',
        coffee.get_colored_name(),
        ' ',
        tachyon.sex,
        ' точно не обрадуется',
      ]);
      await era.printAndWait([
        'Помочь ',
        coffee.get_colored_name(),
        ' подняться на вершину повыше — эта цель никуда не делась',
      ]);
      await era.printAndWait([
        'Скорее наоборот: прежняя мысль, будто ',
        coffee.get_colored_name(),
        ' можно целиком зажать в кулаке и мять как вздумается, — вот это было слишком самонадеянно',
      ]);
      await era.printAndWait(
        'Дальше выходить на забеги, выкладываясь без остатка, и точить друг друга — вот лучший способ исполнить Plan B',
      );
      await era.printAndWait('Поэтому…');
      await era.printAndWait('Да, так и скажу');
      era.printButton('「Тахион…」', 1);
      era.printButton('「На Tenno Sho ты бежала просто потрясающе!」', 2);
      await era.input();
      await tachyon.say_and_wait('…Э?');
      era.println();
      await era.printAndWait('Именно');
      await era.printAndWait(
        'Не всякие там доводы и теории — вот такие слова тебе куда больше к лицу',
      );
      await era.printAndWait([
        'Морская свинка, без ума от того, как бежит ',
        tachyon.get_colored_name(),
        ', и готовая ради этого пожертвовать всем',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' почему-то вдруг смотрит прямо тебе в глаза',
      ]);
      await era.printAndWait(
        'Точно как при первой встрече, и точно как перед Satsuki Sho и Japan Derby',
      );
      await era.printAndWait([
        'Какого же цвета всё-таки твои глаза, если ',
        tachyon.sex,
        ' каждый раз ахает вот так',
      ]);
      era.println();
      await tachyon.say_and_wait('…Но если так, то Plan B…');
      era.printButton(
        `「Кафе, которой для победы нужно, чтобы Тахион поддалась, — разве и правда сможет она перешагнуть предел, отпущенный ${tachyon.uma_sex_title}?」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait('Оттого ли, что мечта ослепила?');
      await era.printAndWait([
        'Или оттого, что вцепилась в ',
        coffee.get_colored_name(),
        ' и не отпускает',
      ]);
      await era.printAndWait([
        'но выходит так, что ',
        tachyon.get_colored_name(),
        ', похоже, забыла самое главное',
      ]);
      if (love >= 75) {
        await era.printAndWait([
          'Если так посмотреть, после замужества ',
          tachyon.get_colored_name(),
          ', чего доброго, окажется из тех, кто души не чает в детях',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        '…Так рассуждает тренер ',
        tachyon.get_colored_name(),
        ', верно? А как же тренер ',
        coffee.get_colored_name(),
        '?',
      ]);
      if (relation <= 75) {
        era.println();
        await era.printAndWait([
          '…От внезапного потрясения ',
          you.get_colored_name(),
          ' забывает слова',
        ]);
        await era.printAndWait([
          'Никак не понять, почему ',
          tachyon.get_colored_name(),
          ' сбегает',
        ]);
        await era.printAndWait([
          'Чувство вины перед ',
          coffee.get_colored_name(),
          ' — это ещё ладно, но почему прятаться от тебя',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '… переживает за тебя…?',
        ]);
      }
      await era.printAndWait([
        'Что ж, тренер ',
        coffee.get_colored_name(),
        ' на это должен(на) ответить',
      ]);
      era.printButton('「Досадно… не смог(ла) привести Кафе к победе」', 1);
      era.printButton(
        '「Поэтому на Takarazuka Kinen Кафе станет сильнее, чем сейчас, и обгонит Тахион!」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait('…Досадно… вот как?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' перекатывает эти слова во рту, но сказано ещё не всё',
      ]);
      era.printButton('「Но как тренер Тахион!」', 1);
      era.printButton(
        '「Я не дам Тахион проиграть Кафе — Takarazuka Kinen тоже будет за Тахион!」',
        2,
      );
      await era.input();
      await era.printAndWait('Всё верно');
      await era.printAndWait([
        'Это и есть ответ, который дал тренер ',
        tachyon.get_colored_name(),
        ' 「и」 тренер ',
        coffee.get_colored_name(),
        ' — один и тот же',
      ]);
      await era.printAndWait(
        'Причина? Разве не сказано было ещё на Tenno Sho (Spring)?',
      );
      await era.printAndWait([
        'Потому что всем сердцем любим тот бег, которым бегут ',
        tachyon.couple_title,
        ' — вот и всё',
      ]);
      if (love >= 75 && era.get('love:25') >= 75) {
        await era.printAndWait([
          'Потому что нам самим нет никого дороже, чем ',
          tachyon.couple_title,
        ]);
      }
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait('Тихий оклик');
      await era.printAndWait('А потом — тягостная тишина');
      await era.printAndWait('И через неизвестно сколько молчания…');
      era.println();
      await tachyon.say_and_wait([
        '…',
        callname,
        ', тебе что, настолько нравится, как я бегу?',
      ]);
      era.println();
      await era.printAndWait(
        'Ответ и говорить не надо: лицо и взгляд уже всё сказали',
      );
      era.println();
      await tachyon.say_and_wait(
        '…Что ж, не хочешь пройти со мной ещё немного пути?',
      );
      await tachyon.say_and_wait('Составь мне компанию — съездим во Францию');
      era.println();
      await era.printAndWait('…Э?');
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_b: (() => {
    const title = 'В одном порыве';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('Кровь кипит');
      await era.printAndWait(
        'Сколько же лет не было этого — жара настоящего забега',
      );
      era.println();
      await tachyon.say_and_wait([callname, '… я пошла']);
      era.printButton(
        `「Давай! Покажи мне предел, на который способна ${tachyon.uma_sex_title}!」`,
        1,
      );
      era.printButton(
        '「Спокойно бери победу — и пусть у меня ещё раз закипит кровь!」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait(
        'Угу… а потом, как кончится Takarazuka Kinen…',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), ' кивает']);
      await era.printAndWait('Тот самый уговор — мир пошире');
      era.printButton('「Впечатаем наш предел в самую вершину мира!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  takz_kin_end_b: (() => {
    const title = 'К пределу';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await tachyon.say_and_wait(['Ха… ха… Ка… ', call_25, '…!']);
      era.println();
      await tachyon.print_and_wait('Хрип, выкрикнутый на последнем усилии');
      await tachyon.print_and_wait('Говорить посреди забега');
      await tachyon.print_and_wait(
        'И с точки зрения опыта, и с точки зрения гонки — поступок совершенно немыслимый',
      );
      await tachyon.print_and_wait([
        'И всё же ',
        tachyon.get_colored_name(),
        ' закричала',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'Перед последней прямой, перед самым финишным рывком',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' роняет заявление, что идёт наперекор всякому здравому смыслу',
      ]);
      era.println();
      await tachyon.say_and_wait('Догонишь — так попробуй!');
      era.println();
      await tachyon.print_and_wait([
        'Бегущая впереди ',
        tachyon.get_colored_name(),
      ]);
      await tachyon.print_and_wait(
        'бросает вызов гончей, что вгрызается ей в спину',
      );
      era.drawLine();
      await coffee.say_and_wait('…Скучно');
      await coffee.say_and_wait(
        'Ты думаешь, кому-то от этого станет радостно?',
      );
      await coffee.say_and_wait(
        'Мне не нужны твои поддавки — я обойду тебя честно… а потом обойду и друга',
      );
      era.println();
      await tachyon.print_and_wait(
        'Призналась в своей ошибке перед забегом — и, само собой, получила по первое число',
      );
      await tachyon.print_and_wait('Хотя… ну, так и правда куда легче');
      await tachyon.print_and_wait([
        'Вот если бы, как ',
        callname,
        ', всё подряд одобряли — тогда бы я и правда забеспокоилась',
      ]);
      await tachyon.print_and_wait(
        'Так что сегодня можно бежать без оглядки, на полную',
      );
      era.println();
      await tachyon.print_and_wait('Уважение к сопернице');
      await tachyon.print_and_wait('Собственная жажда');
      await tachyon.print_and_wait('Долг перед теми, кто поддерживал');
      era.println();
      await tachyon.say_and_wait([
        'Вот с чем выходит ',
        tachyon.get_colored_name(),
        ' в свой последний танец на японской земле',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        tachyon.get_colored_name(),
        '! Или же ',
        coffee.get_colored_name(),
        '! ',
        tachyon.get_colored_name(),
        '! ',
        coffee.get_colored_name(),
        '! ',
        tachyon.get_colored_name(),
        '! ',
        coffee.get_colored_name(),
        '! И вот, обе пересекают черту———————————!',
      ]);
      era.println();
      await tachyon.print_and_wait('Кто выиграл');
      await tachyon.print_and_wait('Кто проиграл');
      await tachyon.print_and_wait('Нет, всё это уже неважно');
      era.println();
      await tachyon.print_and_wait('Вот так всё и кончилось');
      await tachyon.print_and_wait([
        'В сегодняшнем забеге ',
        tachyon.get_colored_name(),
        ' показала свой лучший бег',
      ]);
      await tachyon.print_and_wait(
        'И следующий забег уже в пределах досягаемости',
      );
      era.drawLine();
      era.printButton(
        '「Как сильно, как быстро! И Кафе… и Тахион — обе…!」',
        1,
      );
      era.printButton('「Быть вашим тренером… это… такое счастье!」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'Хе-хе, вдруг такие чувствительные речи, прямо как в финале, — а наши забеги ещё не кончились, ',
        callname,
      ]);
      era.println();
      await era.printAndWait('Ах, да, верно');
      era.println();
      await tachyon.say_and_wait('…Пресс-конференция, скоро уже начнётся');
      era.println();
      await era.printAndWait([
        'Финал первого полугодия, где решается, какая ',
        tachyon.uma_sex_title,
        ' сильнее всех, — на такой забег, ясное дело, слетится тьма журналистов',
      ]);
      era.print('Вот на этой сцене и объявим, куда дальше');
      era.printButton('「Вперёд, Тахион」', 1);
      era.printButton('「Я всегда за твоей спиной」', 2);
      await era.input();
      await tachyon.say_and_wait('…Угу, я пошла');
      era.drawLine();
      await tachyon.say_and_wait([
        "Итак, следующий мой забег по плану — высочайшая вершина мира, Prix de l'Arc de Triomphe. У кого-нибудь из журналистов есть вопросы?",
      ]);
      era.println();
      await era.printAndWait('Мёртвая тишина');
      await era.printAndWait([
        'Даже те журналисты, что ещё до пресс-конференции слышали, будто лагерь ',
        tachyon.get_colored_name(),
        ' сегодня объявит нечто тяжеловесное',
      ]);
      await era.printAndWait('и те не смогли не ахнуть от такой новости');
      era.println();
      await tachyon.say_and_wait(
        '———Если вопросов нет, то на этом сегодняшнее интервью…',
      );
      era.println();
      await era.printAndWait(
        'Только тут журналисты словно очнулись ото сна и наперебой принялись задавать вопросы',
      );
      await era.printAndWait(
        'Но видно: поворот вышел слишком неожиданным, все заготовленные вопросы оказались негодны, и темы приходится искать на ходу',
      );
      await era.printAndWait([
        'А ',
        tachyon.get_colored_name(),
        ' отвечает без всякой спешки',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        'Журналист А',
        'Почему решение принято так внезапно? Это и правда обдуманный план выступлений?',
      );
      await tachyon.say_and_wait(
        'Это решение мы приняли вместе с тренером-куном, и приняли ещё несколько месяцев назад — ничего внезапного и неуместного, просто прессе до сих пор не сообщали',
      );
      await you.say_as_passer_by_and_wait('Журналист Б', [
        'Скажите, ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        " в прошлом году по неизвестной причине приостановила выступления в Twinkle Series — с чем это было связано…? В этом году с Prix de l'Arc de Triomphe ведь ничего такого не…",
      ]);
      await tachyon.say_and_wait([
        "На этот счёт без комментариев, но я могу поручиться: в этом году я непременно выйду на Prix de l'Arc de Triomphe",
      ]);
      await you.say_as_passer_by_and_wait('Журналист Б', [
        '…Э-э, сегодняшний забег был великолепен. Скажите, ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        ' хотела бы что-нибудь сказать сопернице — ',
        coffee.get_colored_name(),
        '?',
      ]);
      await tachyon.say_and_wait(
        "Хм… и правда. Тогда так: 『и тебя, и твоего друга — на Prix de l'Arc de Triomphe я обойду разом』, вот так",
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' стоит за кулисами и смотрит, как на пресс-конференции сияет звёздным светом ',
        tachyon.sex,
      ]);
      await era.printAndWait(
        'Фотон, что однажды померк, сейчас разгорается ярче всего',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_31: (() => {
    const title = 'Фотон, вспыхнувший вновь';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tenn_spr,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' одна бежит по пляжу',
      ]);
      await era.printAndWait('Сцена как год назад — будто уже видел(а)');
      await era.printAndWait([
        'Подумав так, ',
        tachyon.get_colored_name(),
        ' вдруг останавливается',
      ]);
      era.println();
      await era.printAndWait('Этот миг — как тот');
      era.println();
      await tachyon.say_and_wait('…Ты здесь');

      era.printButton('「Я здесь」', 1);
      await era.input();
      await tachyon.say_and_wait('Тебе не следовало');

      era.printButton('「Но я всё равно здесь」', 1);
      era.println();
      await era.printAndWait([
        'Договорённости не было, а ',
        you.get_colored_name(),
        ' всё равно через год в этот же день снова на этом пляже',
      ]);
      era.println();
      await tachyon.say_and_wait('…Ладно, хватит. К делу');
      era.println();
      await era.printAndWait([
        'Не желая подыгрывать ',
        you.get_colored_name(),
        ' дальше, ',
        tachyon.get_colored_name(),
        ' сразу к делу — и речь обрывают',
      ]);
      era.printButton('「Не это」', 1);
      era.printButton('「Можешь сначала пробежаться — покажи мне?」', 2);
      await era.input();
      era.drawLine();
      await era.printAndWait('По сравнению с тем же временем год назад');
      await era.printAndWait([
        'Вернувшаяся к тренировкам ',
        tachyon.get_colored_name(),
        ', бег уже не сравнить с прежним',
      ]);
      await era.printAndWait('Но дело не только в объёме тренировок');
      era.println();
      await era.printAndWait(
        'Как и в прошлом году: форма сырая, бег не собран — а всё равно мерцал свет, от которого не отвести глаз',
      );
      await era.printAndWait([
        'Нынешняя ',
        tachyon.get_colored_name(),
        ' сияет ярче всего, что ',
        you.get_colored_name(),
        ' когда-либо видел(а)',
      ]);
      await era.printAndWait(['Так ярко, что невольно рождается иллюзия']);
      await era.printAndWait(
        '— так ярко, что даже если сейчас погаснет — жалеть будет не о чем',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', ',
        prix_lat,
        ' кончится — я уйду из Twinkle Series',
      ]);
      era.println();
      await era.printAndWait('Не пауза, а выход. Иначе говоря — уход со сцены');
      await era.printAndWait('Выйдешь — и обратного пути уже нет');
      era.println();
      await tachyon.say_and_wait(
        'Ноги… едва выдержали полгода. И этого достаточно',
      );
      await tachyon.say_and_wait([
        "Tenno Sho (Spring), ещё Takarazuka Kinen… и в конце — Prix de l'Arc de Triomphe",
      ]);
      await tachyon.say_and_wait([
        '…Поэтому в конце спрошу, ',
        callname,
        '…ты не жалеешь?',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' говорит — и ',
        you.get_colored_name(),
        ' вспоминает',
      ]);
      await era.printAndWait('Жалеть? О чём?');
      await era.printAndWait([
        'Что дал(а) ',
        tachyon.get_colored_name(),
        ' на ',
        takz_kin,
        ' выложиться полностью?',
      ]);
      await era.printAndWait([
        'Что в ночь перед ',
        tenn_spr,
        ' не остановил(а) ',
        tachyon.get_colored_name(),
        '?',
      ]);
      await era.printAndWait('Что выбрал(а) Plan B?');
      await era.printAndWait([
        'Или… что взял(а) ',
        tachyon.get_colored_name(),
        '?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' задаёшь вопрос, ',
        tachyon.get_colored_name(),
        ' молчит немного',
      ]);
      await era.printAndWait('Потом отвечает');
      era.println();
      await tachyon.say_and_wait('…Всё сразу');
      await tachyon.say_and_wait([
        'Не жалеешь? Что взял(а) такую трудную, то так, то сяк, мечется ',
        tachyon.uma_sex_title,
        ' в подопечные',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait([
          'Что лучше б с самого начала взял(а) только ',
          call_25,
          ' ~ и всё такое?',
        ]);
        era.println();
        await era.printAndWait(
          'Звучит как вопрос — а на вкус ближе к ревности',
        );
      }
      era.println();
      await era.printAndWait([
        'Слыша, как ',
        tachyon.sex,
        ' так говорит, ',
        you.get_colored_name(),
        ' всерьёз вспоминает',
      ]);
      await era.printAndWait([
        'Вспоминая Takarazuka Kinen, в голове только ',
        tachyon.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' на самом пике',
      ]);
      await era.printAndWait([
        'Вспоминая Tenno Sho (Spring) — только ',
        coffee.get_colored_name(),
        ': причудливый бег и… ',
        tachyon.get_colored_name(),
        ' — вспышка, что зажглась снова',
      ]);
      await era.printAndWait([
        'День, когда выбрал(а) Plan B… искренне хотел(а), чтобы ',
        tachyon.get_colored_name(),
        ' была цела',
      ]);
      await era.printAndWait([
        'И наконец тот день на Тренировочном поле — ',
        tachyon.sex,
        ' обожгла глаза бегом — шрам, что не заживёт никогда',
      ]);
      era.printButton('「Не жалею」', 1);
      era.printButton('「Жалею. Жалею, что не встретил(а) Тахион раньше」', 2);
      await era.input();
      await tachyon.say_and_wait('…Хм. Вот как');
      await tachyon.say_and_wait('Тогда и дальше иди за мной…');
      await tachyon.say_and_wait([
        'Вместе взойдём на вершину мира, и я покажу тебе плод исследования — самый полный, самый удовлетворительный бег ',
        tachyon.get_colored_name(),
        '!',
      ]);
      await era.printAndWait(
        'Выдать самый удовлетворительный, самый ослепительный бег из всех, что были',
      );
      await era.printAndWait(
        'Скачка, что удовлетворит самого большого фаната рядом — того, кто всегда смотрел только на неё',
      );
      await era.printAndWait('Сам не замечаешь — губы пересохли');
      await era.printAndWait('Ждёшь скачку ещё ярче, фигуру ещё ослепительнее');
      await era.printAndWait([
        'Раз уж идол, ',
        tachyon.sex,
        ' так сказала — свинке, зачарованной её бегом, что остаётся, кроме как согласиться',
      ]);
      era.printButton('「Вперёд, Тахион」', 1);
      await era.input();
      await era.printAndWait(
        'О прошлом не жалеешь — так с настоящим, так и с будущим',
      );
      await era.printAndWait([
        "Двое ступают во Францию — Prix de l'Arc de Triomphe",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_35: (() => {
    const title = 'Франция (?)';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, call_25) => {
      await tachyon.say_and_wait('Так вот она… Франция');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' смотрит в окно, где ночь слилась с небом в одно',
      ]);
      await tachyon.print_and_wait('Значит, вот она, Франция…');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' бредила этим местом наяву и во сне',
      ]);
      await tachyon.print_and_wait([
        'Место, где сложили оружие бессчётные японские ',
        tachyon.uma_sex_title,
        ' — одна за другой',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' именно здесь, под самый конец, и должна взойти на вершину',
      ]);
      era.println();
      await tachyon.print_and_wait('И всё же…');
      await tachyon.print_and_wait(
        'Кто засмотрелся на звёзды, тот всегда забывает про яму под ногами',
      );
      await tachyon.print_and_wait(
        '«Гнаться за высоким и далёким» — вот слова, в которых собрана мудрость прежних поколений',
      );
      era.drawLine();
      era.printButton('「…Нет, это Дубай」', 1);
      await era.input();
      await tachyon.say_and_wait('…Э?');
      await era.printAndWait([
        "Ясное дело: с головой, занятой одним лишь Prix de l'Arc de Triomphe, ",
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        'попросту не расслышала, как ',
        you.get_colored_name(),
        ' ещё неделю назад говорил(а) про пересадку в Дубае по дороге',
      ]);
      era.printButton(
        '「Хотя скачки в Дубае тоже известны на весь мир, будет случай…」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'На этом месте ',
        you.get_colored_name(),
        ' вдруг умолкает',
      ]);
      await era.printAndWait('Скачки в Дубае и правда известны на весь мир');
      await era.printAndWait(
        'Известны в основном из-за призовых: без всякой ошибки самые 「золотые」 скачки в мире',
      );
      await era.printAndWait('Но…');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — 「случая」 у неё уже не будет',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Угу, будет случай — можно и на дубайские скачки взглянуть. Вписать… потом в план тренировок ',
        call_25,
        ', попробуем?',
      ]);
      era.println();
      await era.printAndWait([
        'И всё же ',
        tachyon.sex,
        ' будто вовсе ничего не заметила',
      ]);
      await era.printAndWait(
        'и мимоходом, легко сама завела тему, которой все избегали',
      );

      era.printButton(
        '「…А когда вернёмся, Тахион так и будет дальше составлять Кафе планы тренировок?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('И спрашивать нечего…');
      await tachyon.say_and_wait([
        "Этот Prix de l'Arc de Triomphe — всего лишь мой личный каприз. А настоящая возможность, настоящая надежда — это по-прежнему ",
        call_25,
        ', и никто другой',
      ]);
      await tachyon.say_and_wait([
        'Кстати, если уж на то пошло — а как быть с ',
        call_25,
        '?',
      ]);
      era.printButton(
        '「Не переживай, мы с Кафе будем на связи через планшет, да и каждый месяц я буду летать в Японию — разбираться с тамошними делами」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('…Каждый месяц?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' с некоторым удивлением смотрит на ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([you.get_colored_name(), ' кивает в ответ']);
      await era.printAndWait('А, ты что, о деньгах беспокоишься?');
      era.printButton(
        '「Это всё-таки считается командировкой, билеты и прочее оплачивает академия, так что об этом не беспокойся」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('…Прости');
      era.printButton('「Ничего」', 1);
      era.printButton('「Я сам(а) так захотел(а)」', 2);
      await era.input();
      await era.printAndWait('Это и правда, и ложь');
      await era.printAndWait(
        '…На самом деле можно было выбрать и заграницу, и дом',
      );
      await era.printAndWait([
        'Можно было целиком уйти в поход вслед за ',
        tachyon.get_colored_name(),
        ', а можно было остаться в Японии рядом с ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait(
        'Как бы ни не хватало людей в академии Трейсен, не настолько, чтобы тренеру приходилось разрываться надвое',
      );
      await era.printAndWait('Но…');
      era.printButton('「Потому что душа не на месте」', 1);
      era.printButton('「И за Тахион, и за Кафе — одинаково」', 2);
      await era.input();
      await era.printAndWait([
        'Сердце не выдержит смотреть, как одинока ',
        tachyon.teen_sex_title,
        ', что гонится за спиной друга',
      ]);
      await era.printAndWait([
        'Сердце не выдержит смотреть, как тоскует ',
        tachyon.teen_sex_title,
        ', что одна в чужом краю бежит в тупик',
      ]);
      await era.printAndWait(
        'Вот и остаётся только такой выбор — в ущерб себе, нерешительный',
      );
      era.println();
      await tachyon.say_and_wait('…Ну и безотказная же ты добрая душа');
      era.printButton('「Но и выгода тут есть」', 1);
      era.printButton(
        '「Так я смогу разом смотреть и на твой бег, и на бег Кафе」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait(
        'Ради такого летать по десять с лишним часов, да ещё туда-обратно — ты с ума сошёл(ла)',
      );
      era.println();
      await you.say_and_wait('Спасибо за похвалу');
      await era.printAndWait([
        you.get_colored_name(),
        ' со смехом отвечает на восклицание, которое вырвалось у ',
        tachyon.get_colored_name(),
        ' самой',
      ]);
      await era.printAndWait(
        'Пусть это будет платой за то, что недавно нечаянно испортил(а) настрой',
      );
      era.println();
      await tachyon.say_and_wait('…Тогда смотри, как я бегу, до самого конца');
      era.println();
      await era.printAndWait('На сцене по имени мир');
      await era.printAndWait([
        tachyon.sex,
        ' к ',
        you.get_colored_name(),
        ' протягивает руку',
      ]);
      await era.printAndWait([
        'Зовёт ',
        you.get_colored_name(),
        ' выйти на сцену вместе, в последний танец, что станцует ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_36: (() => {
    const title = 'Решимость';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (tachyon, you, callname, prix_lat) => {
      await tachyon.say_and_wait('Ха… ха…');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' бежит по Тренировочному полю во Франции',
      ]);
      await tachyon.print_and_wait([
        'Эти дни — те самые, когда ',
        callname,
        ' улетает в Японию',
      ]);
      era.println();
      await tachyon.say_and_wait([
        "А следом — высочайшая вершина мира, Prix de l'Arc de Triomphe…",
      ]);
      era.println();
      await tachyon.print_and_wait([
        'Сейчас ',
        you.sex,
        ', наверное, всё ещё недоумевает',
      ]);
      await tachyon.print_and_wait([
        "Почему всё-таки выбран именно Prix de l'Arc de Triomphe",
      ]);
      await tachyon.print_and_wait([
        'Дойти до того, что лежит за пределом, — такова мечта, которой живёт ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        ' всё время думала, что ради этой цели может поставить на кон всё: лишь бы кто-нибудь дошёл, а будет это она сама или нет — неважно',
      ]);
      await tachyon.print_and_wait([
        '…Но на деле ',
        tachyon.sex,
        ' вовсе не так равнодушна, как ей самой казалось',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'По сути своей ',
        tachyon.sex,
        ' всё ещё та, кто хочет бежать, — ',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait([
        'Но и ',
        tachyon.sex,
        ' не хочет отказываться от мечты перешагнуть предел',
      ]);
      await tachyon.print_and_wait(
        'Так что же делать, как поступить, чтобы вышло и то и другое',
      );
      await tachyon.print_and_wait([
        'Всё просто: пусть ',
        tachyon.get_colored_name(),
        ' сама и станет 「пределом」 — и всё',
      ]);
      era.println();
      await tachyon.print_and_wait(['Потому и выбор — ', prix_lat]);
      await tachyon.print_and_wait(
        'Высочайшая вершина мира, скачки, которые лучше всего и означают предел',
      );
      await tachyon.print_and_wait([
        'На этой сцене — собою самой определить, какова она, ',
        tachyon.uma_sex_title,
        ', и где её предел',
      ]);
      era.println();
      await tachyon.say_and_wait('…Хе-хе');
      era.println();
      await tachyon.print_and_wait(
        'Стоит подумать о том, чтобы обойти всех и стать самим пределом',
      );
      await tachyon.print_and_wait('как тело против воли начинает гореть');
      era.println();
      await tachyon.say_and_wait('Всё-таки я и правда жажду бежать… я');
      era.println();
      await tachyon.print_and_wait('Решимость уже разгорелась');
      await tachyon.print_and_wait(
        'Тогда отбросить всё и думать только о победе, что впереди',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_37: (() => {
    const title = 'Мера предела';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await era.printAndWait("За день до Prix de l'Arc de Triomphe");
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' живёт в этом отеле, и сюда является незваная гостья',
      ]);
      era.println();
      await tachyon.say_and_wait(['…', call_25, '? Ты как здесь…']);
      await coffee.say_and_wait(['…………', c_call_t]);
      era.println();
      await era.printAndWait([
        'Та, что должна была остаться в Японии, — ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait([
        "за день до Prix de l'Arc de Triomphe прилетела во Францию",
      ]);
      era.println();
      await coffee.say_and_wait([
        '…Это я попросила ',
        callname_25,
        ' привезти меня',
      ]);
      await coffee.say_and_wait([callname_25, ' говорит, говорит…']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' тихо сидит на краю кровати и молчит',
      ]);
      await era.printAndWait([
        'Ждёт, пока ',
        coffee.get_colored_name(),
        ' договорит',
      ]);
      era.println();
      await coffee.say_and_wait(['Сказал… ', c_call_t, ', твои ноги…']);
      await tachyon.say_and_wait(
        '…Да, они уже на пределе. Но даже если бы не так, завтра я всё равно выложусь без остатка… не оставлю ничего про запас',
      );
      await coffee.say_and_wait('…Почему');
      era.println();
      await era.printAndWait([
        'Непонятно почему, но по сравнению с самой ',
        tachyon.get_colored_name(),
        ', ',
        coffee.get_colored_name(),
        ' выглядит куда более взвинченной',
      ]);
      await coffee.say_and_wait([
        '…Если это опять как перед Takarazuka Kinen — что ты якобы ради меня, что бежишь ради меня и друга…',
      ]);
      await coffee.say_and_wait(
        'то я этого ни за что не приму — даже если————придётся прямо здесь не пустить тебя на старт',
      );
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' вдруг широко распахивает глаза',
      ]);
      await era.printAndWait([
        'В тот же миг словно незримая исполинская рука перехватила ',
        tachyon.get_colored_name(),
        ' и не даёт ей шевельнуться',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' скована на месте и не может двинуться',
      ]);
      await era.printAndWait([
        'Но даже так ',
        tachyon.sex,
        ' смотрит всё тем же спокойным взглядом',
      ]);
      await era.printAndWait('А потом…');
      era.println();
      await tachyon.say_and_wait('…Хе-хе');
      await coffee.say_and_wait([c_call_t, '…?']);
      await tachyon.say_and_wait('Хе-хе-хе… ха-ха-ха!');
      era.println();
      await era.printAndWait([
        'Будто рассудок помутился: даже в таком положении ',
        tachyon.get_colored_name(),
        ' всё равно смеётся в голос, от души',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Слушай, ',
        call_25,
        '… а ты, часом, не слишком ли много о себе возомнила',
      ]);
      await coffee.say_and_wait('!?');
      await tachyon.say_and_wait(
        'Это ещё что за «бегу ради тебя»… не выдумывай лишнего',
      );
      await tachyon.say_and_wait([
        'Цель у меня от начала и до конца одна: перешагнуть предел, что положен тем, кого зовут ',
        tachyon.uma_sex_title,
        '… доказать, на что способна ',
        tachyon.uma_sex_title,
        ' вообще',
      ]);
      era.println();
      await era.printAndWait([
        'Незаметно сила, что держала ',
        tachyon.get_colored_name(),
        ', уже отпустила',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' неспешно поднимается и отряхивает с себя пыль, которой на ней нет',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Ради этой цели я готова пожертвовать чем угодно — хоть бы и собой',
      );
      await tachyon.say_and_wait([
        'А вот ты, ',
        call_25,
        '… у тебя такая решимость есть? Такая, как сейчас, — ты сможешь меня обойти?',
      ]);
      await coffee.say_and_wait('…!');
      await tachyon.say_and_wait(
        '…Остальное — когда кончится забег… тогда и скажу всё до конца',
      );
      era.println();
      await era.printAndWait([
        'Не дожидаясь ответа, ',
        tachyon.get_colored_name(),
        ' выходит из комнаты',
      ]);
      await era.printAndWait([
        'А в коридоре, всё это время дожидаясь, пока двое договорят, стоит ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(['…', callname, ', пойдём посидим у тебя']);
      era.println();
      await era.printAndWait('…Э?');
      era.println();
      await tachyon.say_and_wait('Что такое?');
      era.printButton(
        '「В комнату к человеку другого пола… всё-таки неловко…」',
        1,
      );
      era.printButton('「Тахион, ты меня соблазняешь?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Болван! …Только что наговорила такого, покрасовалась — а теперь сразу к себе в номер? Так весь эффект насмарку. Вот и дай мне побыть у тебя',
      );
      await tachyon.say_and_wait(
        'Заодно… у тебя же в номере есть приборы для опытов?',
      );
      await tachyon.say_and_wait([
        'Только что увидела ',
        call_25,
        ' в таком виде — и почему-то в голове опять мелькнула идея…',
      ]);
      await tachyon.say_and_wait(
        'Мне ведь завтра на старт, сегодня всякую странную дрянь пить нельзя — ты же выпьешь за меня~~',
      );
      era.println();
      await era.printAndWait([
        'Глядя, как ',
        tachyon.sex,
        ' кривляется, ',
        you.get_colored_name(),
        ' не выдерживает и смеётся',
      ]);
      await era.printAndWait(
        'Что бы ни принёс завтрашний день, сегодняшним стоит хотя бы насладиться',
      );
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_b: (() => {
    const title = 'Остановка на пределе';
    /**
     * Plan B 专属，曼城茶座不能同时参赛
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' взошла на вершину мира',
      ]);
      await era.printAndWait([
        'Прибывшая из Японии ',
        tachyon.uma_sex_title,
        ' побила мировой рекорд',
      ]);
      await era.printAndWait(
        'Бег, что выжег тебе глаза, в первый и в последний раз вспыхнул перед миром самым ослепительным светом',
      );
      era.println();
      await era.printAndWait([
        'Вернувшаяся после забега в комнату отдыха ',
        tachyon.get_colored_name(),
        ' почти ничего не говорит',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' как всегда первым делом проверяет, как ',
        tachyon.sex,
        ' перенесла нагрузку на ноги',
      ]);
      era.println();
      await tachyon.say_and_wait(['…Наверное, уже незачем, ', callname]);
      await tachyon.say_and_wait('Ты же и сам(а) прекрасно знаешь, разве нет?');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' умолкает']);
      await era.printAndWait(
        'Знаешь, чем всё кончится, и всё равно не можешь перестать ждать чуда',
      );
      await era.printAndWait('Однако…');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' ничего лишнего не говорит, просто помогает ',
        tachyon.get_colored_name(),
        ' остудить ноги лекарством и снять с них нагрузку',
      ]);
      await era.printAndWait([
        'И только когда от организаторов приходит слово, что церемония награждения готова, вы медленно идёте к сцене',
      ]);
      era.println();
      await tachyon.say_and_wait('…Ну так что? Этот забег тебя устроил?');
      era.println();
      await era.printAndWait(
        'Отдала всё до последнего, сожгла собственные ноги',
      );
      await era.printAndWait('И победа, добытая такой ценой');
      await era.printAndWait('Как тут не залюбоваться, как тут не сойти с ума');
      era.println();
      await era.printAndWait('Тренер из тебя, наверное, никудышный');
      await era.printAndWait([
        'Как тренер, надо было трезво прикинуть, что для ',
        tachyon.uma_sex_title,
        ' будет лучше всего, чтобы ',
        tachyon.couple_title,
        ' от этого только выиграли',
      ]);
      await era.printAndWait([
        'Но ты — только ради того, чтобы увидеть самый красивый бег, самую сильную стать, — позволил(а) своей подопечной ',
        tachyon.uma_sex_title,
        ' пойти на такое',
      ]);
      await era.printAndWait(
        'К счастью, на этот вопрос отвечать нужно не как тренеру',
      );
      await era.printAndWait([
        'Как фанат, как самый оголтелый, самый преданный фанат ',
        tachyon.get_colored_name(),
        ' —',
      ]);
      era.printButton(
        '「Это был самый захватывающий забег, что я видел(а)」',
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' улыбается так, словно всходит утреннее солнце',
      ]);
      await era.printAndWait([
        'Свет чуть слабее того, что излучает ',
        tachyon.sex,
        ', зато мягче и теплее',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('Глухо ноющие ноги');
      await tachyon.print_and_wait('Отчётливо простреливающая пятка');
      await tachyon.print_and_wait('Но сильнее всего этого — сожаление');
      era.println();
      await tachyon.print_and_wait('Знала заранее, и всё-таки…');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' до самого конца так и не сумела превзойти предел',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'Расстраиваться не из-за чего: всё идёт ровно по плану',
      );
      era.println();
      await you.say_as_passer_by_and_wait('Журналист A', [
        'Тахион ',
        tachyon.adult_sex_title,
        "! Поздравляем вас с сегодняшней победой на Prix de l'Arc de Triomphe! И более того, этот Prix de l'Arc de Triomphe побил рекорд всех прошлых лет!",
      ]);
      await you.say_as_passer_by_and_wait(
        'Журналист A',
        'Насчёт этой победы: есть что сказать соперницам или родным и друзьям в Японии?',
      );
      era.println();
      await tachyon.say_and_wait('…Хе-хе');
      await tachyon.say_and_wait(
        'Тогда напоследок… позвольте сказать пару слов',
      );
      await you.say_as_passer_by_and_wait('Журналист A', 'Напоследок…?');
      await tachyon.say_and_wait([
        'Я верю: у каждой ',
        tachyon.uma_sex_title,
        ' есть своя собственная возможность',
      ]);
      await tachyon.say_and_wait(
        'Какая бы стена ни встала — её непременно можно превзойти',
      );
      await tachyon.say_and_wait(
        'Так что… этот рекорд — только начало, а не конец',
      );
      await tachyon.say_and_wait([
        'Дальше непременно будет всё больше ',
        tachyon.uma_sex_title,
        ', что выйдут на мировую сцену, а потом… превзойдут предел',
      ]);
      await tachyon.say_and_wait(
        'Я в это верю и жду этого от всех вас, а ещё…',
      );
      era.println();
      await tachyon.print_and_wait(
        'Столько надежд на тех, кто придёт следом, — и при этом я надменно объявляю пределом саму себя',
      );
      await tachyon.print_and_wait([
        'Внизу зал полыхает боевым духом и смотрит на сцену, где стоит ',
        tachyon.sex,
      ]);
      await tachyon.print_and_wait([
        'Но ',
        tachyon.sex,
        ' смотрит не на них, а на того, кто до сих пор прячется на трибунах',
      ]);
      await tachyon.print_and_wait('Сцена выстроена');
      await tachyon.print_and_wait('Разогрев закончен');
      await tachyon.print_and_wait(
        'А теперь — сумеешь ли ты всё это превзойти?',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ', обращаясь к ',
        coffee.get_colored_name(),
        ', бросает безмолвный вызов',
      ]);
      era.drawLine();
      await era.printAndWait(["Prix de l'Arc de Triomphe позади"]);
      await era.printAndWait([
        'Сразу после забега ',
        you.get_colored_name(),
        ' везёт ',
        tachyon.get_colored_name(),
        ' в больницу на обследование',
      ]);
      await era.printAndWait('Всё как и ожидалось — и всё же не так');
      await era.printAndWait(
        'Как и ожидалось: травма ног настолько тяжёлая, что без ухода со скачек не обойтись',
      );
      await era.printAndWait(
        'А вот чего не ждали: повреждение куда легче, чем думалось',
      );
      await era.printAndWait(
        'Кроме того, что бегать больше нельзя, ничего серьёзнее нет',
      );
      await era.printAndWait([
        '…Вот только для ',
        tachyon.uma_sex_title,
        ' хуже этого ничего и не бывает',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' уходит со скачек — эта новость мгновенно потрясает весь мир',
      ]);
      await era.printAndWait([
        'Её тренер, ',
        you.get_colored_name(),
        ', оказывается под взглядом всего мира, и без упрёков в свой адрес не обходится',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_39: (() => {
    const title = 'Превзойти предел…?';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      prix_lat,
    ) => {
      await era.printAndWait([
        'С тех пор как ',
        tachyon.get_colored_name(),
        ' ушла со скачек, в лаборатории постоянно слышно, как ',
        tachyon.sex,
        ' радостно шумит',
      ]);
      await tachyon.say_and_wait([
        'Ха-ха-ха! ',
        call_25,
        '! ',
        call_25,
        '! Давай скорее пробуй моё новое зелье!',
      ]);
      await coffee.say_and_wait('…Как надоело');
      era.println();
      await era.printAndWait([
        'Будто вместе с уходом со скачек сбросила с себя всякое давление — ',
        tachyon.sex,
        ' тратит всю без остатка энергию на новые зелья,',
      ]);
      await era.printAndWait([
        'Само собой, первыми под раздачу идут те, к кому ',
        tachyon.sex,
        ' ближе всего, — ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ', кто же ещё',
      ]);
      await era.printAndWait([
        'А ведь всё это время был страх, что ',
        tachyon.sex,
        ' после ухода сломается и не поднимется, — и теперь ',
        you.get_colored_name(),
        ' понемногу успокаивается',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! И ты не вздумай улизнуть! Твоя порция — вот она!',
      ]);
      era.printButton('Молча взять зелье и выпить', 1);
      era.printButton('「Если Тахион будет рада — выпью что угодно!」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('Ой-ой, надо же, сегодня столько рвения?');
        await coffee.say_and_wait([
          '…И что за зелье опять выпил(а) ',
          callname_25,
          ' с твоей подачи? Признавайся честно',
        ]);
        await tachyon.say_and_wait(
          'Мм… вчерашнее было на усиление усвоения питательных веществ, светилось синим, а сегодня…',
        );
        await coffee.say_and_wait([
          'Врёшь… наверняка подмешала какое-то дурманящее зелье, иначе с чего бы ',
          callname_25,
          ' так послушно пил(а) эту странную дрянь',
        ]);
        await tachyon.say_and_wait('Крайне обидная формулировка!');
      } else {
        if (love >= 75) {
          await tachyon.say_and_wait(
            'Ч-что… дурак… с чего вдруг такие приторные слова…',
          );
        } else if (relation <= 225) {
          await tachyon.say_and_wait(
            '…Стоп, с чего вдруг такие противные слова…',
          );
        } else if (relation >= 225) {
          await tachyon.say_and_wait(
            'Э… нет, ну с чего вдруг такие приторные слова',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' с совершенно ошалевшим лицом смотрит на ',
            you.get_colored_name(),
          ]);
          await era.printAndWait('Как жестоко');
        }
        era.println();
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            c_call_t,
            '? ',
            callname_25,
            '? Может, вы объясните, что это за отношения такие? …Я сейчас, пожалуй, не очень спокойна',
          ]);
        } else {
          await coffee.say_and_wait('…Будьте добры, не любезничайте тут');
        }
      }
      era.drawLine();
      await coffee.say_and_wait([
        '…Кстати, ',
        callname_25,
        ', уже почти пора…',
      ]);
      era.println();
      await era.printAndWait([
        'Гвалт улёгся, и подошло время, когда ',
        coffee.get_colored_name(),
        ' идёт тренироваться',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' кивает и собирается вместе с ',
        coffee.get_colored_name(),
        ' выйти на Тренировочное поле',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'О? Снова на тренировку? Что-то в последнее время ',
        call_25,
        ' прямо-таки образец усердия',
      ]);
      await coffee.say_and_wait([
        '…Я всегда занимаюсь всерьёз. Прошу, не путайте меня с ',
        c_call_t,
        ', мы не одно и то же',
      ]);
      await coffee.say_and_wait(
        'К тому же конец года уже близко… я обязана превзойти друга',
      );
      await coffee.say_and_wait('И кроме этого…');
      await coffee.say_and_wait('Есть ещё чей-то вызов…');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' в упор смотрит на ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает: ',
        prix_lat,
        ' — именно тогда ',
        tachyon.get_colored_name(),
        ' сказала те слова',
      ]);
      await coffee.say_and_wait([
        'Я непременно превзойду ',
        c_call_t,
        ', вот увидите',
      ]);
      await tachyon.say_and_wait(
        '…Хм-хм, если можешь — попробуй, сколько душе угодно',
      );
      await tachyon.say_and_wait(['Давай, превзойди предел! ', call_25, '!']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' по-прежнему сверкает глазами всё тем же исступлённым огнём',
      ]);
      await era.printAndWait([
        'Только вот… может, это ',
        you.get_colored_name(),
        ' себе напридумывал(а), но огонь этот словно бы дрогнул',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_cf_japa_cup: (() => {
    const title = 'Превзойти предел';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        coffee.get_colored_name(),
        '! Рекорд Japan Cup побит… нет! Побит мировой рекорд! Мировой рекорд на 2400 м, тот самый, что всего пару месяцев назад побила ',
        tachyon.get_colored_name(),
        ', — этот рекорд угольно-чёрный призрак превосходит снова!',
      ]);
      era.println();
      await tachyon.print_and_wait('И правда превзошла');
      await tachyon.print_and_wait([
        'В тот миг, когда ',
        call_25,
        ' пересекла финишную черту',
      ]);
      await tachyon.print_and_wait('Я ликовала не меньше остальных');
      era.println();
      await tachyon.print_and_wait('Оно и понятно');
      await tachyon.print_and_wait([
        'Хвастовство, конечно, но ',
        tachyon.sex,
        ' — та, в ком я разглядела больше всех шансов превзойти предел, моя избранная ',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait(
        'Вот только «ближе всех» и «смогла превзойти» — вещи совсем разные',
      );
      await tachyon.print_and_wait([
        'Но… ',
        tachyon.sex,
        ' и правда это сделала!',
      ]);
      await tachyon.print_and_wait(
        'Хотя почему-то… в её беге сквозило что-то неуловимо чужое, но это неважно',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — это предел, какого может достичь ',
        tachyon.uma_sex_title,
        ', а вот ',
        coffee.get_colored_name(),
        ' ',
        tachyon.sex,
        ' превзошла этот предел прямо сейчас',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! ',
        callname,
        '! ',
        call_25,
        ' ',
        tachyon.sex,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'Хочется в запале поделиться радостью с тем, кто рядом',
      );
      await tachyon.print_and_wait(
        'Все мучительные исследования наконец дали результат',
      );
      await tachyon.print_and_wait('Однако');
      era.println();
      await tachyon.say_and_wait(['……', callname, '?']);
      era.println();
      await tachyon.print_and_wait('Ответа нет');
      await tachyon.print_and_wait([
        'Тот, кто рядом, — ',
        you.sex,
        ', зрители на трибунах, взгляды всех до единого',
      ]);
      await tachyon.print_and_wait([
        'Всё сошлось на одной — это ',
        tachyon.sex,
        ', та, что в самом центре',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' зовёт — и её голос тонет в оглушительном рёве и овациях',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_47: (() => {
    const title = 'Превзойдённый предел';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, coffee, you, callname, call_25, love) => {
      await tachyon.print_and_wait([
        'Во сне ',
        tachyon.get_colored_name(),
        ' снова возвращается в тот день',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'Рёв всей трибуны, и взгляд, которым смотрит ',
        you.sex,
        ', — всё сошлось на одной: пересекла финишную черту, легко машет рукой, и эта ',
        tachyon.uma_sex_title,
        ' сейчас — центр всего',
      ]);
      await tachyon.print_and_wait([
        'И это в порядке вещей: главная сегодня как-никак ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        'Главная сегодня не я, и раз уж все вокруг смотрят туда, где ',
        tachyon.sex,
        ', это только справедливо',
      ]);
      await tachyon.print_and_wait('Но…');
      await tachyon.print_and_wait('Почему');
      era.println();
      await tachyon.say_and_wait(
        'Мы же договаривались? Что ты всегда будешь смотреть на меня',
        true,
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' больше не может бежать',
      ]);
      await tachyon.print_and_wait([
        'И потому взгляд перекочевал на ',
        coffee.get_colored_name(),
        '?',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'И в толпе вокруг хватало тех, кто кричал: 「Да что там ',
        tachyon.get_colored_name(),
        ', вот ',
        coffee.get_colored_name(),
        ' посильнее будет」',
      ]);
      await tachyon.print_and_wait([
        'Но больнее тех речей, где одну втаптывают, а другую возносят, — взгляд, которым смотрит ',
        you.sex,
        ': вот что ранит по-настоящему',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'Когда-то такой взгляд появлялся, только когда смотрели на меня, — а теперь ',
        you.sex,
        ' смотрит на ',
        call_25,
        ', и в его зрачках — тот же самый взгляд',
      ]);
      await tachyon.say_and_wait('Этот взгляд — разве он не только мой?');
      await tachyon.say_and_wait('Глаза, что я выжгла, уже зажили?');
      await tachyon.say_and_wait('Ты оставишь меня совсем одну?');
      era.println();
      await tachyon.print_and_wait([
        'Во сне ',
        you.sex,
        ' и ',
        call_25,
        ' уходят всё дальше и дальше',
      ]);
      await tachyon.print_and_wait('Оставляя меня в кромешной черноте');
      era.println();
      await tachyon.say_and_wait('Не надо… стойте, подождите меня…');
      era.println();
      await tachyon.print_and_wait('Хочу их догнать');
      await tachyon.print_and_wait('Но… ноги не слушаются');
      await tachyon.print_and_wait('Опускаю взгляд и только тогда вижу… а-а');
      await tachyon.print_and_wait(
        'Как на раздробленных ногах догнать тех, кто бежит вперёд',
      );
      era.println();
      await tachyon.print_and_wait(
        'Будто услышав мой голос, та спина оборачивается',
      );
      await tachyon.print_and_wait('Но света в глазах уже нет');
      await tachyon.print_and_wait('Нет, он не исчез — он перешёл на другую');
      era.println();
      await tachyon.print_and_wait('Не надо');
      await tachyon.print_and_wait('Смотри на меня');
      await tachyon.print_and_wait('Смотри на меня, как раньше');
      await tachyon.print_and_wait('Не бросай меня, не оставляй одну');
      era.println();
      await tachyon.print_and_wait('Но');
      await tachyon.print_and_wait([
        'Какое право ',
        tachyon.get_colored_name(),
        ', которая больше не может бежать, имеет требовать, чтобы её не покидали',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' просыпается ото сна',
      ]);
      await tachyon.print_and_wait('Что снилось — уже толком не помню');
      await tachyon.print_and_wait([
        '…Но судя по тому, как паршиво телу, это опять было про Japan Cup',
      ]);
      await tachyon.print_and_wait([call_25, ' уже превзошла предел']);
      await tachyon.print_and_wait(['Превзошла ', tachyon.get_colored_name()]);
      await tachyon.print_and_wait([
        'Так что… даже если ',
        you.sex,
        ' без ума от ',
        call_25,
        ' — это же в порядке вещей',
      ]);
      await tachyon.print_and_wait([
        'Как-никак этот бег превзошёл саму ',
        tachyon.get_colored_name(),
        ', тут ничего не скажешь',
      ]);
      era.println();
      await tachyon.say_and_wait('…Не надо');
      if (love <= 50) {
        await tachyon.print_and_wait(
          'Понять это только сейчас — не слишком ли поздно?',
        );
        await tachyon.print_and_wait(
          'Столько времени он был рядом со мной, а я принимала это как должное',
        );
        await tachyon.print_and_wait([
          'И только на грани потери я поняла, насколько мне уже нужен ',
          you.sex,
          ', насколько без него никак',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        'Если это ',
        you.sex,
        ' — он ведь и дальше станет заботиться обо мне, как раньше',
      ]);
      await tachyon.print_and_wait([
        'Всё так же, как и прежде, будет делать для ',
        tachyon.get_colored_name(),
        ' всё, что ей нужно',
      ]);
      await tachyon.print_and_wait([
        'Потому что ',
        you.sex,
        ' именно такой человек — мягкий до невозможности',
      ]);
      await tachyon.print_and_wait([
        '…Но одного этого ',
        tachyon.get_colored_name(),
        ' мало',
      ]);
      await tachyon.print_and_wait([
        'Это ',
        you.sex,
        ' со своим светом согрел меня',
      ]);
      await tachyon.print_and_wait('Дал мне надежду, жажду забегов');
      await tachyon.print_and_wait(
        'Так что прошу, не надо… не забирай свет, который принадлежит мне',
      );
      era.println();
      await tachyon.print_and_wait(
        'Jingle bell Jingle bell Jingle all the way～～',
      );
      era.println();
      await tachyon.print_and_wait(
        'Вдруг за окном зазвучала рождественская песня',
      );
      await tachyon.print_and_wait([
        'Рождество вот-вот, а на сердце у ',
        tachyon.get_colored_name(),
        ' всё та же темнота',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_48: (() => {
    const title = 'Обещание святой ночи';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} vega 爱慕织姬
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {boolean} tachyon_win_prix_lat 爱丽速子是否赢取资深年凯旋门赏
     */
    const f = async (
      tachyon,
      coffee,
      vega,
      you,
      callname,
      call_25,
      callname_25,
      tachyon_win_prix_lat,
    ) => {
      let ret = 0;
      await era.printAndWait([
        'В последнее время ',
        tachyon.get_colored_name(),
        ' будто не в себе',
      ]);
      await era.printAndWait([
        'Вечно одна хмурится, не ходит даже на тренировки ',
        coffee.get_colored_name(),
        ', даже опыты почти забросила',
      ]);
      await era.printAndWait([
        'Хоть для главных жертв опытов, ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ', это не то чтобы плохо, но всё равно тревожно',
      ]);
      await era.printAndWait([
        'Вдруг рождественские песни с торговой улицы — и ',
        you.get_colored_name(),
        ' слышит их',
      ]);
      await era.printAndWait([
        'Точно: под предлогом Рождества ',
        tachyon.sex,
        ' пойдёт поговорить по душам',
      ]);
      era.drawLine();
      await era.printAndWait(
        'В сочельник торговая улица ярче и горячее обычного',
      );
      await era.printAndWait('Дело не только в Рождестве, а ещё и…');
      await you.say_as_passer_by_and_wait('Дядька с торговой улицы', [
        'Прогноз на Arima Kinen! Завтрашний Arima Kinen — прогноз перед скачкой!',
      ]);
      await you.say_as_passer_by_and_wait('Прохожий A', [
        'Как там завтрашний Arima Kinen… впрочем, победит, наверное, ',
        coffee.get_colored_name(),
        ', да?',
      ]);
      await you.say_as_passer_by_and_wait('Прохожий B', [
        'Как она бежала на Japan Cup — просто зверь! …Сказать «сильнейшая в истории» — не преувеличение',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait(
        'Молчать дальше тоже нельзя: сейчас самое время заговорить',
      );
      era.printButton(
        '「Завтра Arima Kinen, но у Кафе всё будет в порядке」',
        1,
      );
      era.printButton(
        '「Вон тот медовый напиток вроде как по рождественской акции」',
        2,
      );
      if ((await era.input()) === 1) {
        ret++;
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([tachyon.sex, ' всё так же молчит']);
        await era.printAndWait([
          'Чувствуя неловкость, ',
          you.get_colored_name(),
          ' продолжает болтать про ',
          coffee.get_colored_name(),
          ' — как идут недавние тренировки',
        ]);
      } else {
        await tachyon.say_and_wait('…Ну что ж, тогда по одной');
        era.println();
        await era.printAndWait([
          'После самого сладкого мёда ',
          tachyon.get_colored_name(),
          ' будто немного оттаяла',
        ]);
        await era.printAndWait([
          'Кстати, ',
          you.get_colored_name(),
          ' из солидарности тоже берёт самый сладкий, однако…',
        ]);
        await era.printAndWait([
          'Едва глотнув, ',
          you.get_colored_name(),
          ' чувствует, как зубы сводит',
        ]);
        await era.printAndWait([
          'Смотришь, как ',
          tachyon.get_colored_name(),
          ' весело пьёт мёд, и ',
          you.get_colored_name(),
          ' думает: не пора ли ',
          tachyon.sex,
          ' показаться стоматологу',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Недолго спустя вы у ёлки в центре торговой улицы',
      ]);
      await era.printAndWait([
        'Вдруг порыв ветра швыряет вам под ноги репортажи про Arima Kinen',
      ]);
      await era.printAndWait([
        'В газете — ',
        coffee.get_colored_name(),
        ' на Japan Cup, вид самый что ни на есть бравый',
      ]);
      era.printButton(
        '「Japan Cup… Кафе тогда была так сильна. Неловко, но если с Тахион…」',
        1,
      );
      era.printButton(
        '「Тахион! Вон та лавка со сладкой ватой — выглядит мощно!」',
        2,
      );
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait([
          'Только что, стоило заговорить об Arima Kinen, ',
          tachyon.get_colored_name(),
          ' будто не в духе',
        ]);
        await era.printAndWait([
          'Поэтому ',
          you.get_colored_name(),
          ' сворачивает на Japan Cup',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ': стоит заветному желанию исполниться — и это наверняка взбодрит ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait('Однако…');
        era.println();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' всё так же молчит',
        ]);
        await era.printAndWait('Опять не то…');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь на лавку со сладкой ватой у ёлки: под руками мастера мягкие зверушки лепятся в одно мгновение',
        ]);
        era.println();
        await tachyon.say_and_wait('…Нет, я…');
        era.println();
        await era.printAndWait([
          'Не успела ',
          tachyon.get_colored_name(),
          ' договорить — хозяйка лавки суёт огромную мягкую свинку из сладкой ваты ',
          tachyon.get_colored_name(),
          ' в руку',
        ]);
        await vega.say_as_unknown_and_wait(
          'Когда на душе плохо, помни: предать не может только пушистое',
        );
        if (era.get('cflag:33:招募状态') === recruit_flags.yes) {
          await era.printAndWait('Хозяйка лавки почему-то смутно знакома');
          await era.printAndWait('…Наверное, просто кажется');
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' растерянно принимает свинку из ваты: не отдаёт назад и ничего не говорит',
        ]);
        await era.printAndWait([
          'Потом ',
          tachyon.sex,
          ' приоткрывает алые губы и откусывает крошечный кусочек',
        ]);
        era.println();
        await tachyon.say_and_wait('…Мягкое');
        era.println();
        await era.printAndWait([
          'Почему-то, услышав это, хозяйка лавки гордо расправляет грудь',
        ]);
      }
      era.println();
      await era.printAndWait([
        'В конце концов вы доходите до края торговой улицы',
      ]);
      await era.printAndWait([
        'У дороги книжная: на самом видном месте несколько залежавшихся журналов',
      ]);
      await era.printAndWait('Залежавшихся… так не скажешь');
      await era.printAndWait(
        'Как сводка со скачек — да, уже не свежие; по времени — журналы всего двухмесячной давности',
      );
      await era.printAndWait([
        '— Журнал с интервью ',
        tachyon.get_colored_name(),
        " после Prix de l'Arc de Triomphe",
      ]);
      await you.say_as_passer_by_and_wait(
        'Хозяин книжной',
        'Добро пожаловать!',
      );
      era.printButton('「Это…」', 1);
      era.printButton("「Журнал про Prix de l'Arc de Triomphe?」", 2);
      await era.input();
      await era.printAndWait([
        'Хозяин книжной не замечает: за спиной у ',
        you.get_colored_name(),
        ' голову опустила ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait(' Глядя на журнал, он разглагольствует');
      await you.say_as_passer_by_and_wait('Хозяин книжной', [
        'О! Эти журналы? Сам тут выставил!',
      ]);
      if (tachyon_win_prix_lat) {
        await you.say_as_passer_by_and_wait('Хозяин книжной', [
          'Наконец-то японская ',
          tachyon.uma_sex_title,
          " выиграла мировой Prix de l'Arc de Triomphe! Как же не выставить на память!",
        ]);
      }
      await you.say_as_passer_by_and_wait('Хозяин книжной', [
        'По мне, так те снаружи ни черта не смыслят: ',
        tachyon.get_colored_name(),
        ' — вот кто сильнейшая! Не уйди она со скачек, какая-то там ',
        coffee.get_colored_name(),
        ' и рядом не стояла бы — ',
        tachyon.sex,
        ' вне конкуренции!',
      ]);
      era.printButton('「Ещё как сказать…」', 1);
      era.printButton('「Конечно, Тахион — сильнейшая」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait(['До Japan Cup так оно и было']);
        await era.printAndWait([
          'Но после Japan Cup ',
          coffee.get_colored_name(),
          ' уже стала завершённым видом — так заверила ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'При таком раскладе ',
          coffee.get_colored_name(),
          ', если ещё раз выйдет против ',
          tachyon.get_colored_name(),
          ' …кто кого — ещё вопрос',
        ]);
        await era.printAndWait([
          'Верно: даже если ',
          coffee.get_colored_name(),
          ' уже превзошла предел… в душе всё равно веришь, что ',
          tachyon.get_colored_name(),
          ' точно сможет ',
          tachyon.sex,
          ' потягаться на равных',
        ]);
        await era.printAndWait([
          'Совсем не то, что ',
          tachyon.sex,
          ' сама называла камнем преткновения',
        ]);
        await you.say_as_passer_by_and_wait(
          'Хозяин книжной',
          'Тц, думал, знаток зашёл, а тоже ни черта не смыслит',
        );
        era.println();
        await era.printAndWait([
          'Слыша это, ',
          you.get_colored_name(),
          ' криво усмехается',
        ]);
        await era.printAndWait([
          'Вдруг ',
          you.get_colored_name(),
          ' видит, как ',
          tachyon.get_colored_name(),
          ' подходит к той стопке журналов',
        ]);
        era.println();
        await tachyon.say_and_wait('…Хозяин, одну мне');
        await you.say_as_passer_by_and_wait('Хозяин книжной', [
          'О-хо, ',
          tachyon.sex_code === 1 ? ' паренёк' : 'девчушка',
          ', знаток, однако!',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' нарочно понижает голос, чтобы ',
          tachyon.sex,
          ' не выдала настоящий тембр',
        ]);
        await era.printAndWait(
          'Хотя этот журнал… образцы вроде уже приходили, зачем покупать ещё раз?',
        );
        era.println();
        await tachyon.say_and_wait(
          '…Ничего не поделаешь: кто-то цены этим журналам не знает, вот и берегу сама',
        );
        era.println();
        await era.printAndWait('Э?');
        await era.printAndWait([
          'Смотришь, как ',
          tachyon.get_colored_name(),
          ' украдкой бросает на ',
          you.get_colored_name(),
          ' взгляд — с досадой',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' невольно думаешь: опять сказал(а) что-то не то?',
        ]);
      } else {
        await tachyon.say_and_wait('…!');
        era.println();
        await era.printAndWait('Это ещё спрашивать?');
        await era.printAndWait('Хоть «если бы» и бессмысленно');
        await era.printAndWait([
          'но всё равно не удержаться от «если бы» — так уж устроены ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          ' Что дарят бесконечные возможности и полёт фантазии — ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([' Это и есть ', tachyon.get_colored_name()]);
        await you.say_as_passer_by_and_wait(' Хозяин книжной', [
          'Точно! ',
          you.sex_code === 1 ? ' Братан' : 'Сестрёнка',
          ', с порога ясно: этот точно в теме!',
        ]);
        await you.say_as_passer_by_and_wait('Хозяин книжной', [
          'Я же говорю: ',
          tachyon.get_colored_name(),
          ' — вот кто сильнейшая! Какая-то там ',
          coffee.get_colored_name(),
          ' и в подмётки не годится!',
        ]);
        await you.say_as_passer_by_and_wait('Хозяин книжной', [
          'Скажу по секрету: я слежу за ',
          tachyon.get_colored_name(),
          ' ещё с прошлогоднего Satsuki Sho! Такой бег… сказать, что это предел ',
          tachyon.uma_sex_title,
          ', — ни капли не преувеличение!',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' с хозяином взахлёб толкуешь про скачки ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Пока ',
          tachyon.get_colored_name(),
          ' за спиной не выдерживает, хватает ',
          you.get_colored_name(),
          ' и тянет к выходу',
        ]);
        await era.printAndWait([
          'Почему-то ',
          tachyon.sex,
          ' будто краснеет… наверное, свет так падает',
        ]);
      }
      era.println();
      if (ret >= 2) {
        await era.printAndWait(['Незаметно вы догуливаете до набережной']);
        await era.printAndWait(
          'Тёмный тихий берег — и напротив огни торговой улицы, рождественские песни',
        );
        era.println();
        await tachyon.say_and_wait('…Снег пошёл');
        era.println();
        await era.printAndWait('И правда: вокруг уже кружит мелкий снег');
        await era.printAndWait(
          '…Так поздно, да ещё в снегопад тащиться сюда — всё-таки опасно, да?',
        );
        await era.printAndWait([
          'Так и не вышло спросить, отчего у ',
          tachyon.get_colored_name(),
          ' на душе тяжело, — но сегодня уже слишком поздно',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' как раз хочешь предложить на сегодня закругляться…',
        ]);
        era.println();
        await tachyon.say_and_wait('……фух');
        era.println();
        await era.printAndWait([
          'Вдруг ',
          you.get_colored_name(),
          ' оказывается в объятиях ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait(
          'Совсем внезапно, ни с того ни с сего — объятие',
        );
        era.printButton('「Тахион…?」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' хочешь что-то сказать, но тело в объятиях мелко дрожит, а голова на плече у ',
          you.get_colored_name(),
          ' — и плечо вдруг влажное, — и ',
          you.get_colored_name(),
          ' понимает: сейчас лучше молчать',
        ]);
        era.println();
        await tachyon.say_and_wait('Прости… но… только, только чуть-чуть…');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' замираешь и даёшь ',
          tachyon.get_colored_name(),
          ' плакать у ',
          you.get_colored_name(),
          ' на груди',
        ]);
        await era.printAndWait('Внутри сплошные вопросы');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' — что с ней такое?',
        ]);
        era.drawLine();
        await tachyon.print_and_wait('На самом деле уже догадалась');
        await tachyon.print_and_wait(
          'Сегодняшний выход — лишь ещё раз проверить свою догадку',
        );
        await tachyon.print_and_wait(
          'Но услышать вживую всё равно колет в груди',
        );
        era.println();
        await tachyon.print_and_wait('Ещё по пустой болтовне было ясно');
        await tachyon.print_and_wait([
          you.sex,
          ' в разговоре всё сводит к ',
          call_25,
          ', а в глазах — одно: ждёт, что ',
          tachyon.sex,
          ' оправдает ожидания',
        ]);
        await tachyon.print_and_wait([
          'Тот, для кого во всём первой была ',
          tachyon.get_colored_name(),
          ', — ',
          callname,
          ' уже не здесь',
        ]);
        await tachyon.print_and_wait([
          'А сейчас ',
          you.sex,
          ' — это ',
          call_25,
          ' 「 ',
          callname_25,
          '」',
        ]);
        await tachyon.print_and_wait(
          'И по сердцу, и по разуму это самый верный выбор',
        );
        await tachyon.print_and_wait(
          'Сама она лишь подлая ведьма: очаровала бегом и держала как удобный инструмент',
        );
        await tachyon.print_and_wait([
          'Перешедшая все преграды и в конце превзошедшая предел ',
          coffee.uma_sex_title,
        ]);
        await tachyon.print_and_wait([
          ' Своим бегом сняла ведьминское проклятие — ',
          you.sex,
          ' больше не под чарами, и в конце они жили долго и счастливо',
        ]);
        await tachyon.print_and_wait('Вот он, лучший конец истории');
        era.println();
        await tachyon.print_and_wait('Поэтому…');
        era.println();
        await tachyon.say_and_wait(
          'Последний раз… дай мне, полюби меня ещё раз — и хватит',
        );
        await tachyon.say_and_wait([
          'Хотя бы раз… и больше не влезу между тобой и ',
          call_25,
          '.',
        ]);
        era.println();
        await tachyon.print_and_wait('Под любыми отговорками просит одну ночь');
        await tachyon.print_and_wait(
          'Горько: до самого конца других отговорок у неё нет',
        );
        await tachyon.print_and_wait([
          'Тоном почти как угроза надеется, что ',
          you.sex,
          ' дарует последнюю милость',
        ]);
        await tachyon.print_and_wait('Хотя бы раз');
        await tachyon.print_and_wait([
          'А потом сможет отпустить и от души благословить ',
          you.couple_title,
          '.',
        ]);
        await tachyon.print_and_wait(
          'Отмахивается от шёпота в голове: 「ты правда думаешь, что сможешь отпустить?」',
        );
        await tachyon.print_and_wait('Вот такими словами уговаривает себя');
        era.println();
        await era.printAndWait([
          'Глядя на такую ',
          tachyon.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' выбирает',
        ]);
        era.printButton('「Обнять」', 1);
        era.printButton('「Поцеловать」', 2);
        if ((await era.input()) === 1) {
          await tachyon.print_and_wait(
            'Вдруг слова, что ещё хотела сказать, оборвались',
          );
          await tachyon.print_and_wait(['… ', you.sex, ' обнял(а) её в ответ']);
          await tachyon.print_and_wait('Слова застряли в горле и не выходят');
        } else {
          await tachyon.print_and_wait(
            'Вдруг слова, что ещё хотела сказать, оборвались',
          );
          await tachyon.print_and_wait('…Нежное, тёплое касание');
          await tachyon.print_and_wait(
            'Рождественский поцелуй, будто снимает весь зимний холод',
          );
        }
        era.println();
        await tachyon.print_and_wait('Нет… она не это имела в виду');
        await tachyon.print_and_wait([
          'Или… ',
          tachyon.get_colored_name(),
          ' уже и права быть любимой лишилась?',
        ]);
        await tachyon.print_and_wait('В отчаянии невольно думается и такое');
        era.println();
        await tachyon.say_and_wait(['Нн… ', callname]);
        era.println();
        await tachyon.print_and_wait(' И вот, пока она так думает');
        await tachyon.print_and_wait([
          'Словно сгоняя лишние мысли из её сердца, ',
          you.sex,
          ' сильнее сжимает объятие',
        ]);
        era.printButton('「Хотя бы досмотри завтрашний Arima Kinen」', 1);
        era.printButton('「Я обязательно дам Тахион ответ」', 2);
        await era.input();
        await tachyon.print_and_wait('Ответ… какой ответ');
        await tachyon.print_and_wait('Как… развязка наших отношений?');
        await tachyon.print_and_wait([
          'Глядит в глаза — ',
          you.sex,
          ' ничего ей не выдаёт',
        ]);
        era.println();
        await tachyon.print_and_wait('…Тоже неплохо');
        await tachyon.print_and_wait([
          'Если в последний раз ',
          you.sex,
          ' снова посмотрит тем фанатичным взглядом',
        ]);
        await tachyon.print_and_wait([
          '…Пусть даже этот взгляд направлен уже не на ',
          tachyon.get_colored_name(),
        ]);
      } else {
        await tachyon.say_and_wait('…А, снег');
        era.println();
        await era.printAndWait('Вдруг с неба пошла редкая белая пыль');
        await era.printAndWait([
          'Пора ли назад… и как раз когда ',
          you.get_colored_name(),
          ' так думает, ',
          tachyon.get_colored_name(),
          ' дёргает ',
          you.get_colored_name(),
          ' за одежду',
        ]);
        era.println();
        await tachyon.say_and_wait('Давай сначала сядем где-нибудь');
        era.println();
        await era.printAndWait('Тоже верно: сегодняшняя цель ещё не взята');
        await era.printAndWait([
          'Сначала сядем в какой-нибудь лавке — и выспросим, отчего ',
          tachyon.get_colored_name(),
          ' не в духе',
        ]);
        await era.printAndWait([you.get_colored_name(), ' подбадриваешь себя']);
        era.drawLine();
        era.printButton('「…………」', 1);
        await era.input();
        await tachyon.say_and_wait([callname, '? Не сядешь?']);
        era.printButton('「…Нет, это」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'Так мямлить — на тебя не похоже… или есть, о чём трудно сказать?',
        );
        era.println();
        await era.printAndWait(
          'Нет, если уж говорить, дело не в том, что трудно сказать, а…',
        );
        era.printButton('「Со студентом в идзакая — это уже NG, да?」', 1);
        era.printButton(
          '「С несовершеннолетней в идзакая — это уже статья, да?」',
          2,
        );
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' тащит ',
          you.get_colored_name(),
          ' внутрь — и это идзакая в конце торговой улицы',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Я уже в отставке, ничего же? …Хотя я сама здесь впервые, но проблем быть не должно',
        );
        await tachyon.say_and_wait([
          'Ну ',
          callname,
          ', тебе сколько лет — и даже в идзакая боишься зайти?',
        ]);
        era.printButton(
          '「Проблема не в отставке, а в том, что студентка!」',
          1,
        );
        era.printButton('「…На слабо это не сработает」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' как раз хочешь отказаться и утащить ',
          tachyon.get_colored_name(),
          ' назад, но ',
          tachyon.get_colored_name(),
          ' уже входит внутрь',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Ладно-ладно, давай, просто перекусим на ночь… ну или вроде того',
        );
        await you.say_as_passer_by_and_wait('Хозяйка', 'Добро пожаловать~~');
        era.println();
        await era.printAndWait([
          'Дверь открылась — тёплый воздух против уличного холода, и ',
          you.get_colored_name(),
          ' уже ни ногой',
        ]);
        era.printButton('「…Посидеть, может, и не грех」', 1);
        await era.input();
        await era.printAndWait([
          'Войдя, ',
          you.get_colored_name(),
          ' неожиданно замечает',
        ]);
        await era.printAndWait(
          'В зале хозяйка суетится — и за спиной у неё длинный каштановый хвост',
        );
        era.println();
        await tachyon.say_and_wait('…Ого, да неужели…');
        era.println();
        await you.say_as_passer_by_and_wait(
          'Хозяйка',
          'Добро пожаловать! …Гость, вы, кажется, студент?',
        );
        era.println();
        await tachyon.say_and_wait(
          'Ох, так выглядит? Хотя я уже в отставке, если что',
        );
        era.println();
        await era.printAndWait(
          'Нет, отставка не значит, что ты уже не студент',
        );
        await era.printAndWait(
          'Хочется съязвить, но хозяйка кивает: тогда всё в порядке',
        );
        await era.printAndWait('Нет… что значит «в порядке»');
        era.println();
        await you.say_as_passer_by_and_wait(
          'Хозяйка',
          'Да и тот, кто с тобой, — твой тренер, да? С тренером — вообще без проблем',
        );
        await tachyon.say_and_wait('…О, видно?');
        era.println();
        await era.printAndWait([
          'Проблем полно… но помимо этого ',
          you.get_colored_name(),
          ' тоже хочет понять, как она разглядела в тебе тренера',
        ]);
        await you.say_as_passer_by_and_wait('Хозяйка', [
          you.sex,
          ' взгляд — один в один как у моего мужа: стоит увидеть свою подопечную — и ног под собой не чует',
        ]);
        era.println();
        await era.printAndWait('Ч-что это за формулировка');
        await era.printAndWait('Себя, что ли, за извращенца держать');
        await you.say_as_passer_by_and_wait(
          'Хозяйка',
          'Хе-хе, такой взгляд — обязательная опция хорошего мужа~~ смотри не упусти',
        );
        era.println();
        await era.printAndWait('Сказала — и пошла к другим гостям');
        await era.printAndWait([
          you.get_colored_name(),
          ' боязливо смотришь на ',
          tachyon.get_colored_name(),
          ' и думаешь: сейчас точно ',
          tachyon.sex,
          ' поднимет на смех…',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('Неизвестно, о чём думает');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' будто зависла, ушла в себя',
        ]);
        era.printButton('「Тахион?」', 1);
        await era.input();
        await tachyon.say_and_wait('…А, мм, кх-кх, ничего');
        era.println();
        await era.printAndWait([
          'Придя в себя, ',
          tachyon.get_colored_name(),
          ' — лицо как саморазогревающееся бэнто с отложенным стартом',
        ]);
        await era.printAndWait([
          'Вмиг багровеет, и ',
          you.get_colored_name(),
          ' будто видит, как ',
          tachyon.sex,
          ' пышет паром с лица',
        ]);
        await era.printAndWait([
          'Чтобы скрыть неловкость, ',
          tachyon.sex,
          ' переводит внимание на то, что в зале',
        ]);
        await era.printAndWait([you.get_colored_name(), ' тоже смотришь туда']);
        era.println();
        await era.printAndWait('Хозяйка снуёт туда-сюда, принимая гостей');
        await era.printAndWait([
          'Кто-то в зале и про Arima Kinen перекинется, но это вовсе не главное',
        ]);
        await era.printAndWait(
          'Как про погоду каждый день: наболтаешь скуки ради два слова',
        );
        await era.printAndWait([
          'Доказательство: до сих пор никто не узнал ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          ' Для торговой улицы у академии Трейсен не узнать самую знаменитую в первом полугодии ',
          tachyon.uma_sex_title,
          ' — уже совсем из ряда вон',
        ]);
        era.println();
        await era.printAndWait([
          'Глядя на это, ',
          you.get_colored_name(),
          ' невольно вспоминает: хозяйка тоже ',
          tachyon.uma_sex_title,
          '.',
        ]);
        await era.printAndWait([
          'Раз муж — тренер, значит, ',
          tachyon.sex,
          ' когда-то тоже была скаковой ',
          tachyon.uma_sex_title,
          ', да?',
        ]);
        await era.printAndWait('А после отставки живёт так — почти без скачек');
        await era.printAndWait('Так пресно, так тускло, так… мирно');
        era.println();
        await tachyon.say_and_wait('…Это тоже… одна из возможностей?');
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, ' — возможности']);
        await era.printAndWait([
          'Это ',
          tachyon.get_colored_name(),
          ' вечно вертит на языке',
        ]);
        await era.printAndWait([
          '…Но не каждая ',
          tachyon.uma_sex_title,
          ' становится скаковой ',
          tachyon.uma_sex_title,
          '.',
        ]);
        await era.printAndWait([
          'Даже ',
          tachyon.uma_sex_title,
          ' может выбрать путь в стороне от трассы',
        ]);
        era.println();
        await era.printAndWait([
          'Тогда эта возможность приложима к ',
          tachyon.get_colored_name(),
          ' тоже?',
        ]);
        await era.printAndWait([
          'Вдруг ',
          you.get_colored_name(),
          ' понимает, отчего ',
          tachyon.get_colored_name(),
          ' так пала духом',
        ]);
        await era.printAndWait([
          'Для ',
          tachyon.get_colored_name(),
          ' такая возможность есть?',
        ]);
        await era.printAndWait([
          'Хозяйка чайной — ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          ' Учёная, ушедшая в науку, — ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          ' Обычная ученица, что пошла учиться дальше, стала студенткой, вошла в общество и стала офисным работником, — ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' тоже так сможет — как обычный человек, уйти с трассы и жить своей жизнью?',
        ]);
        era.println();
        await tachyon.say_and_wait(['……', callname, ', ты пойдёшь за мной?']);
        await tachyon.say_and_wait('Если… я выберу эту возможность');
        era.println();
        await era.printAndWait([
          'С ',
          tachyon.get_colored_name(),
          ' вместе — жизнь без скачек, без скорости ',
          tachyon.uma_sex_title,
          ', тихая и мирная',
        ]);
        await era.printAndWait('Такая жизнь, верно, была бы очень хороша');
        await era.printAndWait([
          'Даже в тихой жизни, лишь бы ',
          tachyon.get_colored_name(),
          ' была рядом, скучно точно не будет',
        ]);
        await era.printAndWait([
          'Вместе ',
          tachyon.sex,
          ' — строить жизнь на двоих',
        ]);
        await era.printAndWait('… но сейчас — нельзя');
        era.printButton('「… можно после завтрашней Arima?」', 1);
        era.printButton('「Завтра, после Arima, спроси ещё раз」', 2);
        await era.input();
        await era.printAndWait(
          'Само желание уйти с трассы — тоже возможность, которую можно выбрать',
        );
        await era.printAndWait([
          'Но точно не так, как ',
          tachyon.get_colored_name(),
          ' сейчас — уход, будто бегство',
        ]);
        await era.printAndWait(
          '… остаётся надеяться, что завтрашняя Arima её переубедит',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_b: (() => {
    const title = 'Финальный опыт готов';
    /**
     * Plan B 专属，资深年有马纪念赛前
     * 注意 Plan B 爱丽速子禁止参加资深年有马纪念，所以该事件机制上属于曼城茶座的同阶段赛前事件
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {string} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      arim_kin,
    ) => {
      await tachyon.print_and_wait('Arima Kinen');
      await tachyon.print_and_wait([
        'Если верить тому, что сказал(а) ',
        callname,
        ', после этого забега я получу ответ',
      ]);
      await tachyon.print_and_wait(
        'Немного страшно и в то же время немного радостно',
      );
      await tachyon.print_and_wait(
        'Страшно от финала, который вот-вот наступит',
      );
      await tachyon.print_and_wait(
        'Радостно от правды, которая вот-вот откроется',
      );
      await tachyon.print_and_wait([
        you.sex,
        ' хочет сказать что-то — но что именно',
      ]);
      await tachyon.print_and_wait('Сегодняшний Arima Kinen всё прояснит?');
      era.println();
      await coffee.say_and_wait(['……', c_call_t, '?']);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([c_call_t, '!']);
      await tachyon.say_and_wait('…А?');
      era.println();
      await era.printAndWait([
        'Прихожу в себя: прямо передо мной ',
        call_25,
        ' смотрит на меня, не зная, что со мной делать',
      ]);
      era.println();
      await coffee.say_and_wait(
        'Я зову уже который раз… снова где-то витаете?',
      );
      await tachyon.say_and_wait('…Ничего, всё в порядке');
      await coffee.say_and_wait('…Странно');
      await tachyon.print_and_wait([
        'Если бы не ',
        call_25,
        ', я бы ни за что до такого не дошла',
      ]);
      await tachyon.print_and_wait([
        'Вот если бы я тогда не помогала со всей душой ',
        call_25,
        ' — я бы хоть осталась тем самым ярким светом, который ',
        callname,
        ' хранит в сердце',
      ]);
      await tachyon.print_and_wait([
        '…Ни одна такая мысль, даже краешком, никогда не приходила ',
        tachyon.get_colored_name(),
        ' в голову',
      ]);
      await tachyon.print_and_wait([
        'Появись такая мысль — и это значило бы начисто перечеркнуть ту ',
        tachyon.get_colored_name(),
        ', какой я была раньше',
      ]);
      await tachyon.print_and_wait([
        'Тем более что ',
        call_25,
        ' сама ничего дурного не сделала',
      ]);
      await tachyon.print_and_wait(
        'Просто… всё пошло совсем не так, как ожидалось',
      );
      await tachyon.print_and_wait([
        'Оттого ',
        tachyon.get_colored_name(),
        ' и смотрит с таким невыразимо сложным чувством на ',
        call_25,
      ]);
      era.println();
      await coffee.say_and_wait('Мне уже пора на дорожку');
      await tachyon.say_and_wait('…А-а, удачи');
      await coffee.say_and_wait([c_call_t, '… голос у вас какой-то странный']);
      era.println();
      await tachyon.print_and_wait([
        'Не от слишком ли сильного предвкушения? Голос у ',
        tachyon.get_colored_name(),
        ' садится и хрипнет',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…Ничего особенного, просто вчера ',
        callname,
        ' вытащил(а) меня по магазинам, вот я и простыла немного',
      ]);
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          'Погодите. Вы двое. В Рождество. Ходили по магазинам? …После забега извольте подробно объяснить, что это было',
        );
      } else {
        await coffee.say_and_wait([
          'Опять вас куда-то унесло, и опять рядом ',
          callname_25,
          '… И это сегодня, когда на дворе ',
          arim_kin,
          ', а вы всё туда же',
        ]);
      }
      era.println();
      await era.printAndWait('Дальше слова уже не важны');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ждёт — ждёт того мгновения, когда забег кончится и разгадка откроется',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ending_b: (() => {
    const title = (tachyon, coffee) => [
      { color: 'white', content: 'Самая сильная ' },
      {
        color: coffee.color,
        content: coffee.uma_sex_title,
        fontWeight: 'bold',
      },
      { color: 'white', content: ', самый быстрый ' },
      { color: tachyon.color, content: 'бег', fontWeight: 'bold' },
    ];
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await tachyon.print_and_wait([
        'Сначала ',
        tachyon.get_colored_name(),
        ' просто ждала',
      ]);
      await tachyon.print_and_wait([
        'Ждала конца забега, ждала, когда ',
        callname,
        ' даст ответ — тот, что ',
        you.sex,
        ' приготовил',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        ' не понимала, какой в этом забеге вообще смысл',
      ]);
      await tachyon.print_and_wait([
        'Неужели затем, чтобы я яснее увидела, насколько далеко теперь ушла ',
        call_25,
        ' и какая пропасть между нами?',
      ]);
      await tachyon.print_and_wait(
        'Что, я сейчас недостаточно жалкая? Даже такие отчаянные мысли лезли в голову сами собой',
      );
      await tachyon.print_and_wait([
        'Поэтому ',
        tachyon.sex,
        ' и не следила толком за дорожкой',
      ]);
      await tachyon.print_and_wait('Просто ждала, когда пройдёт время');
      era.println();
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Забег начался! Все ',
        tachyon.uma_sex_title,
        ' ровно выходят из стартовых створок',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'Сначала голос комментатора зацепил: ',
        tachyon.sex,
        ' вдруг ощутила любопытство',
      ]);
      await tachyon.print_and_wait([
        'Пусть бегать уже нельзя, ',
        tachyon.get_colored_name(),
        ' всё равно любопытна ко всему на свете',
      ]);
      await tachyon.print_and_wait([
        'Тем более если речь о той, кого я, по идее, знаю вдоль и поперёк, — это же ',
        call_25,
      ]);
      era.println();
      await tachyon.print_and_wait('Потом — ощущение, что что-то не так');
      await tachyon.print_and_wait(
        'На самом деле это чувство появилось не сейчас',
      );
      await tachyon.print_and_wait([
        'Оно со мной с того самого дня, когда кончился Japan Cup',
      ]);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' бежит теперь… как будто чуть иначе, чем бежала когда-то ',
        tachyon.sex,
        ' сама, — мелочь, но разница есть',
      ]);
      await tachyon.print_and_wait([
        'Если бы я всё это время не сводила глаз с ',
        call_25,
        ' — то, наверное, и не заметила бы этой разницы: настолько она крошечная',
      ]);
      await tachyon.print_and_wait([
        'Но я после Japan Cup ни разу больше не смотрела всерьёз, как бежит ',
        call_25,
        ' — и для меня даже мельчайшая перемена бросается в глаза',
      ]);
      await tachyon.print_and_wait('Особенно…');
      await tachyon.print_and_wait([
        'Да, это по-прежнему её собственный бег, бег, который принадлежит ',
        call_25,
        ' и никому больше, но…',
      ]);
      await tachyon.print_and_wait(
        'А детали… поза на выходе из створок… манера дышать…',
      );
      await tachyon.print_and_wait([
        'Эти детали… это те самые привычки, которых даже сама ',
        tachyon.get_colored_name(),
        ' за собой никогда не замечала',
      ]);
      await tachyon.print_and_wait('Это же…');

      era.printButton(
        `「Это… бег, в котором слились две самые быстрые и самые сильные ${tachyon.uma_sex_title}, каких я знаю」`,
        1,
      );
      await era.input();
      await tachyon.print_and_wait(
        'Тот, о ком я грезила и во сне и наяву, невесть когда оказался рядом со мной',
      );
      await tachyon.print_and_wait([
        'Свет в его глазах всё так же горит и всё так же прикован к той, что бежит сейчас по дорожке, — к этой самой ',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait('Но…');
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        ' смотрит, и в глазах его свет — но ради кого он горит',
      ]);
      await tachyon.print_and_wait([
        'Ради ',
        tachyon.get_colored_name(),
        ' или ради ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        'Раньше я считала само собой разумеющимся: раз мне на дорожку больше не выйти, значит, смотрит он непременно на ',
        call_25,
      ]);
      await tachyon.print_and_wait('Но…');
      era.printButton(
        '「И ещё я твёрдо верю: нет бега ярче, ослепительнее, притягательнее этого」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait('Комментатор', [
        coffee.get_colored_name(),
        '! Угольно-чёрный призрак, обогнавший скорость света! Хозяйка Накаямы на исходе года — ',
        coffee.get_colored_name(),
        '!',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'В забытьи мне будто привиделось, как ',
        tachyon.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' в один и тот же миг пересекают финишную черту',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Чтобы сбылась мечта, которую носит в себе эта ',
        tachyon.teen_sex_title,
        ', — превзойти друга',
      ]);
      await era.printAndWait(
        'Чтобы силуэт, что не отпускает тебя ни во сне, ни наяву, и дальше бежал у тебя перед глазами',
      );
      await era.printAndWait([
        'Чтобы самая сильная ',
        tachyon.uma_sex_title,
        ' соединилась с самой быстрой скоростью',
      ]);
      await era.printAndWait(
        'В голове крутится множество красивых слов, которые полагалось бы сейчас сказать',
      );
      await era.printAndWait(
        'Но в тот самый миг, когда открываешь рот… они снова застревают',
      );
      await tachyon.say_and_wait('Чмок… гльт… чмок-гльт…');
      await era.printAndWait(
        'На трибунах при такой толпе — такой дерзкий поцелуй',
      );
      await era.printAndWait([
        '…Если бы все вокруг не смотрели сейчас в центр дорожки, где ',
        coffee.get_colored_name(),
        ' — не миновать бы новой волны возмущения',
      ]);
      await era.printAndWait([
        'В каком-то смысле это и правда то, на что способна только ',
        tachyon.sex,
        ' одна',
      ]);
      era.println();
      await era.printAndWait([
        'Сколько это тянулось — неизвестно; так долго, что ',
        you.get_colored_name(),
        ' начинает всерьёз опасаться за собственную жизнь, а успокоившиеся зрители вот-вот заметят, что с вами двоими что-то не так,',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' наконец вспоминает про кислород — про то, что и человеку, и ',
        tachyon.uma_sex_title,
        ' важнее всего на свете',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' чуть покраснела лицом — не понять, от нехватки ли воздуха или от каких-то чувств,',
      ]);
      await era.printAndWait([
        'А тёмно-красные глаза, полыхающие безумным блеском — те, что так любит ',
        you.get_colored_name(),
        ' — по-прежнему смотрят в упор, прямо в лицо ',
        you.get_colored_name(),
        ' — глаза в глаза',
      ]);
      await era.printAndWait('А потом…');
      await era.printAndWait([
        'Это ',
        you.get_colored_name(),
        ' видит впервые — что на свете вообще бывает нечто более ослепительное, чем то, как бежит ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
      await era.printAndWait([
        'А именно — улыбка, которая сейчас у ',
        tachyon.get_colored_name(),
        ' на лице',
      ]);
      era.drawLine({ content: 'После возвращения в Трейсен' });
      await coffee.say_and_wait(
        '…Сегодняшний Arima Kinen выиграла я, всё верно?',
      );
      await tachyon.say_and_wait([
        'Ну разумеется, ',
        call_25,
        ', забег был великолепен',
      ]);
      await coffee.say_and_wait([
        'Тогда… может, вы объясните, почему ',
        c_call_t,
        ' с таким самодовольным видом липнет и не отлипает, пока ',
        callname_25,
        ' сидит рядом?',
      ]);
      era.println();
      await era.printAndWait([
        'С самого возвращения с ипподрома ',
        tachyon.get_colored_name(),
        ' так и висит на тебе, не отпуская',
      ]);
      await era.printAndWait([
        'И сейчас так же: как только ',
        you.get_colored_name(),
        ' оказался(лась) на диване, она тут же вцепилась в твою левую руку и не отпускает',
      ]);
      await era.printAndWait([
        'А сверх того — с таким видом, будто вся заслуга её, самодовольно поглядывает на ',
        coffee.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait('Хм-хм~~ а что тут такого, ну что тут такого');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          'Услышав от ',
          tachyon.get_colored_name(),
          ' эти слова, произнесённые тоном злодея из исторической дорамы,',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' сначала вся содрогается',
        ]);
        await era.printAndWait([
          'И как раз когда ',
          you.get_colored_name(),
          ' начинает опасаться, что ',
          tachyon.sex,
          ' сгоряча выкинет что-нибудь,',
        ]);
        await coffee.say_and_wait('— Тогда и я тоже');
        era.println();
        await era.printAndWait([
          'Словно назло, ',
          coffee.get_colored_name(),
          ' в тот же миг втискивается на диван и садится у ',
          you.get_colored_name(),
          ' между колен',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Э-эй, ',
          call_25,
          ', это уже слишком нечестно!',
        ]);
        await coffee.say_and_wait(
          '…Ничего не нечестно. Да и потом… что плохого в хитрости? Сегодня победила я, вообще-то…',
        );
        await tachyon.say_and_wait('Вот же… я тоже хочу сидеть!');
        era.println();
        await era.printAndWait([
          'Глядя на этих двоих, что ссорятся, как дети, ',
          you.get_colored_name(),
          ' невольно горько усмехается',
        ]);
        await era.printAndWait(
          '— Непонятно почему, но вдруг захотелось кофе с чаем',
        );
        await coffee.say_and_wait([
          '…Кстати, ',
          callname_25,
          '… насчёт того, о чём перед забегом обмолвилась ',
          c_call_t,
          ' — про вчерашний вечер, про то, как вы куда-то ходили… не могли бы вы потом всё как следует объяснить?',
        ]);
        await era.printAndWait([
          'Слыша, как ',
          coffee.get_colored_name(),
          ', пользуясь удобным положением, тихонько шепчет на ухо ',
          you.get_colored_name(),
          ' эти слова,',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' застывает с горькой усмешкой на лице',
        ]);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' расплывается в улыбке злого наместника, и рука её всё лежит на ',
          you.get_colored_name(),
          ' — лежит и беспокойно ёрзает',
        ]);
        await era.printAndWait('А потом…');
        era.println();
        await tachyon.say_and_wait('Гуэ————');
        era.println();
        await era.printAndWait([
          'И вдруг ',
          tachyon.get_colored_name(),
          ', словно получив по голове от неведомой безымянной силы, мгновенно отключается',
        ]);
        await coffee.say_and_wait('…Ну честное слово');
        await coffee.say_and_wait([
          'Вот теперь наконец-то потише… Итак, ',
          callname_25,
          ', не желаете чашечку кофе?',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' чуть заметно усмехается через силу и бросает ',
          coffee.get_colored_name(),
          ' короткое 「Если не трудно」',
        ]);
        await era.printAndWait(
          'Вот только чистый кофе почему-то кажется сейчас слишком горьким',
        );
        await era.printAndWait(
          'В кабинете тренера, залитом зимним солнцем, кажется, что именно сейчас',
        );
        await era.printAndWait(
          'лучше подошло бы что-нибудь ещё, добавленное в чашку…',
        );
        era.printButton('「…Слушайте, а может, попробуем кофе с чаем?」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' смотрит на ',
          you.get_colored_name(),
          ', сперва досадливо, а потом, словно что-то поняв, с видом, будто тут уж ничего не поделает',
        ]);
        await coffee.say_and_wait([
          '…Только сегодня. И обязательно так, чтобы не узнала ',
          c_call_t,
          ', иначе ',
          tachyon.sex,
          ' опять поднимет крик',
        ]);
        await era.printAndWait('Глоток чёрного чая, смешанного с кофе');
        await era.printAndWait(
          'Горечь кофе и терпкость чая ослабли, но аромат ничуть не убавился — наоборот, каждый вкус только ярче оттеняет другой',
        );
        await era.printAndWait([
          'Непонятно почему, но ',
          you.get_colored_name(),
          ' чувствует: именно этот вкус сейчас и нужен',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_b: (() => {
    const title = 'Другие возможности';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} win_prix_lat 爱丽速子是否赢取资深年凯旋门赏
     * @param {number} chris_count 圣诞节事件中选 1 的计数
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      love,
      win_prix_lat,
      chris_count,
    ) => {
      await tachyon.say_and_wait('Да, кстати, ещё вот это…');
      await tachyon.say_and_wait([
        'Выбрасывать жалко. Как, ',
        callname,
        '? Пойдём вместе?',
      ]);
      era.println();
      await era.printAndWait('Когда вы случайно прибирались в лаборатории');
      await era.printAndWait([
        'Вы вдвоём обнаруживаете спрятанный в углу конверт',
      ]);
      if (love >= 75) {
        await era.printAndWait('Нг…?');
        await era.printAndWait(
          'Неизвестно почему, но ощущение фальши очень сильное',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' присматриваешься — и сразу видишь зацепку',
        ]);
        await era.printAndWait(
          'Конверт якобы нашли на генеральной уборке, а на нём ни складки, будто его ещё и бережно хранили',
        );
        await era.printAndWait([
          'Сообразив, что это ',
          tachyon.get_colored_name(),
          ' так 「нашла」, ',
          you.get_colored_name(),
          ' в общих чертах догадывается, как всё было',
        ]);
        era.println();
        await tachyon.say_and_wait(['Нг? ', callname, '? Что такое?']);
        era.println();
        await era.printAndWait('… лучше не говорить');
        await era.printAndWait([
          'Иначе ',
          tachyon.get_colored_name(),
          ' вспылит от стыда — это ещё полбеды; беда в том, что когда ',
          tachyon.sex,
          ' вспылит, вечером тебе точно не поздоровится',
        ]);
      }
      era.println();
      await era.printAndWait(
        'Как раз сейчас то, что надо было сделать, почти закончено',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' уже закончила URA Finals',
      ]);
      await era.printAndWait('Будет случай — пойдёте вместе');
      era.drawLine();
      await era.printAndWait('После почти десяти с лишним часов в дороге');
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' наконец добираетесь до онсэн-гостиницы',
      ]);
      era.println();
      await tachyon.say_and_wait('Фух… наконец-то');
      await tachyon.say_and_wait('Слушай… мы точно не свернули не туда?');
      era.printButton('「… на карте и правда здесь」', 1);
      await era.input();
      await era.printAndWait(['И вам двоим не удержаться от сомнения']);
      await era.printAndWait(
        'Место, где вы сейчас, — глушь, которую не стыдно назвать девственным лесом',
      );
      await era.printAndWait('В такой глуши и правда есть онсэн…?');
      era.println();
      await tachyon.say_and_wait(
        'Сейчас найду… погоди, почему здесь даже сигнала нет!?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' достаёшь телефон: в глуши и правда ни сигнала',
      ]);
      await era.printAndWait('Вот теперь… нехорошо');
      era.println();
      await tachyon.say_and_wait([callname, '… или вернёмся?']);
      era.println();
      await era.printAndWait([
        'Как раз когда ',
        you.get_colored_name(),
        ' тоже уже думает дать задний ход',
      ]);
      await era.printAndWait(
        'Раздвинув кусты, прямо перед глазами внезапно — онсэн-гостиница',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ', зарегистрировавшись на стойке, ',
        you.get_colored_name(),
        ' сразу лезет в открытый онсэн',
      ]);
      await era.printAndWait(
        'Зимой, что ещё не отогрелась, после десяти с лишним часов в дороге и ещё пешком по горам — тебя и правда вымотало',
      );
      await era.printAndWait(
        'Но у глуши есть и плюс: во всей гостинице кроме вас двоих никого — считай, весь дом ваш',
      );
      await era.printAndWait('Поэтому онсэн сейчас особенно расслабляет');

      era.printButton('「… Нг?」', 1);
      await era.input();
      await era.printAndWait('Тут у занавески раздевалки слышен кто-то');
      await era.printAndWait(
        'Нг? Только что: никого нет — и сразу кто-то пришёл?',
      );
      era.println();
      await tachyon.say_and_wait([callname, '? Ты внутри?']);
      era.println();
      await era.printAndWait('… а?');
      era.printButton('「Та… Тахион!?」', 1);
      await era.input();
      await tachyon.say_and_wait('Ого, ты здесь. Тогда я сразу вхожу');
      era.println();
      await era.printAndWait([
        'Сказав это, ',
        tachyon.sex,
        ' не дожидаясь ответа от ',
        you.get_colored_name(),
        ', толкает дверь раздевалки и входит',
      ]);
      await era.printAndWait([
        '… глядя, как ',
        tachyon.sex,
        ' стоит, обёрнутая полотенцем, ',
        you.get_colored_name(),
        ' не знает, радоваться или разочароваться',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Ха-ха-ха! Такое лицо — ты что, думал(а), я войду голой?',
      );
      await tachyon.say_and_wait(
        'Хоть какой, а такой здравый смысл у меня ещё есть',
      );
      era.println();
      await era.printAndWait([
        'Хотя тон будто дразнит тебя, ',
        you.get_colored_name(),
        ' всё равно чует: ',
        tachyon.sex,
        ' будто хочет что-то сказать',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Я только что болтала с хозяйкой у стойки… ',
        tachyon.sex,
        ' — совсем не знает, кто я',
      ]);
      await tachyon.say_and_wait([
        'Или даже не знает, кто такая ',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        ' вообще',
      ]);
      era.println();
      await era.printAndWait([
        'Словно боясь, что ',
        you.get_colored_name(),
        ' поймёт неправильно, ',
        tachyon.get_colored_name(),
        ' торопливо добавляет',
      ]);
      await era.printAndWait([
        'Не узнать ',
        tachyon.get_colored_name(),
        ' ещё можно понять: не каждый так болеет за скачки ',
        tachyon.uma_sex_title,
        ', чтобы помнить лицо каждой',
      ]);
      if (win_prix_lat) {
        await era.printAndWait([
          'Но не знать ',
          tachyon.uma_sex_title,
          ' по имени ',
          tachyon.get_colored_name(),
          "… не знать ту, что взяла вершину мира, чемпионку Prix de l'Arc de Triomphe, ",
          tachyon.uma_sex_title,
          ', — на этом свете и правда редкость',
        ]);
      } else {
        await era.printAndWait([
          'Но не знать ',
          tachyon.uma_sex_title,
          ' по имени ',
          tachyon.get_colored_name(),
          ', — на этом свете и правда редкость',
        ]);
      }
      await era.printAndWait(
        'Но вспомнив, какая это глухая гостиница, вдруг снова думаешь: пожалуй, и нормально',
      );
      era.println();
      await tachyon.say_and_wait(
        'Честно… довольно поразительно… что есть люди, которые и правда совсем не знают, не узнают…',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' ждёшь, пока ',
        tachyon.get_colored_name(),
        ' продолжит',
      ]);
      await era.printAndWait([
        'Хотя ',
        you.get_colored_name(),
        ' и правда немного потрясён(а), но ',
        tachyon.get_colored_name(),
        ' и не из тех падких на славу ',
        tachyon.uma_sex_title,
        '; слава — пожалуй, одно из того, на что ',
        tachyon.sex,
        ' кладёт меньше всего',
      ]);
      await era.printAndWait(
        'Что она специально это подняла — верно, есть какая-то другая причина',
      );
      era.println();
      if (chris_count < 2) {
        await tachyon.say_and_wait('Ты ещё помнишь тот день на Рождество?');
        era.println();
        await era.printAndWait([
          'Рождество… ',
          you.get_colored_name(),
          ' вспоминает ту маленькую идзакаю',
        ]);
        await era.printAndWait(
          'Мир трассы с тем местом будто и правда ничем не связан',
        );
        await era.printAndWait('Без скачек жизнь этих людей всё равно идёт');
        await era.printAndWait('Этот миг — точь-в-точь как тот');
        await era.printAndWait([
          '… тогда предложенную ',
          tachyon.get_colored_name(),
          ' возможность ты отверг(ла)',
        ]);
        await era.printAndWait([
          'Потому что тогда ',
          tachyon.sex,
          ' ушла с трассы только чтобы сбежать',
        ]);
        await era.printAndWait('А теперь?');
        await era.printAndWait([
          you.get_colored_name(),
          ' молча ждёшь, пока ',
          tachyon.get_colored_name(),
          ' договорит',
        ]);
        era.println();
        await era.printAndWait([
          'Сидит на берегу, ',
          tachyon.sex,
          ' не произносит ни слова',
        ]);
        await era.printAndWait(
          'В лунном свете — такая тишина, будто внутри картины',
        );
        await era.printAndWait([
          'Всякий, кто знает ',
          tachyon.sex,
          ', знает ',
          tachyon.get_colored_name(),
          ' — эту ',
          tachyon.uma_sex_title,
          ' — такое едва ли вообразит',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ', и вдруг так идёт со словом «тишина»',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '… тот ответ с того дня ты мне так и не дал(а), верно?',
        ]);
        await tachyon.say_and_wait(
          'Такая возможность — она может существовать?',
        );
        await tachyon.say_and_wait(
          'Учёная, что без остановки гналась за возможностями, в какой-то день вдруг устала, без всякого повода,',
        );
        await tachyon.say_and_wait(
          'просто решила: хватит, дальнейший путь пусть берут те, кто придёт следом…',
        );
        await tachyon.say_and_wait(
          'хочет только жить с тем, кого сама ценит, и кто ценит её…',
        );
        await tachyon.say_and_wait(
          'Тебе не кажется, что для такого человека… такое место как раз?',
        );
        era.println();
        await era.printAndWait([
          'Там, где никто не знает ',
          tachyon.get_colored_name(),
          ' — такое место',
        ]);
        await era.printAndWait('Не нужно дальше искать возможности');
        await era.printAndWait(
          'Можно остановиться, перевести дух, или… так и жить здесь, тихо и благополучно',
        );
        await era.printAndWait('Такая возможность…');
      } else {
        await tachyon.say_and_wait('Здесь тихо, да');
        era.println();
        await era.printAndWait(
          '… онсэн-гостиница, где кроме ветра и шума воды нет ни одного человеческого голоса',
        );
        await era.printAndWait([
          'Слишком тихая обстановка в другой миг, пожалуй, пугала бы, но с ',
          tachyon.get_colored_name(),
          ' рядом такое пространство на самом деле вполне выносимо',
        ]);
        era.println();
        await tachyon.say_and_wait('И ещё — большое');
        era.println();
        await era.printAndWait(
          '… всё-таки онсэн-гостиница: сейчас вас только двое, но дом строили на сотни гостей — большой, это естественно',
        );
        era.println();
        await tachyon.say_and_wait('И ещё — почти никого');
        era.println();
        await era.printAndWait('… всё-таки такая глушь');
        await era.printAndWait([
          'Она вывалила кучу бессвязного, и ',
          you.get_colored_name(),
          ' всё меньше понимает, что ',
          tachyon.get_colored_name(),
          ' хочет сказать',
        ]);
        era.println();
        era.println();
        await tachyon.say_and_wait([
          "Такое просторное, тихое, мирное место… должно вместить и одну, с Prix de l'Arc de Triomphe, ",
          tachyon.uma_sex_title,
          ' и её тренера — ',
          tachyon.sex,
          ' там будет не одна, верно?',
        ]);
        await tachyon.say_and_wait(
          'Вот так… жизнь, где никто не знает, тихая, мирная… тоже возможность?',
        );
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, ' — возможности']);
        await era.printAndWait([
          'Это ',
          tachyon.get_colored_name(),
          ' вечно вертит на языке',
        ]);
        await era.printAndWait([
          'Но ',
          tachyon.uma_sex_title,
          ' не могут бежать всю жизнь',
        ]);
        await era.printAndWait([
          'Даже ',
          tachyon.uma_sex_title,
          ' рано или поздно сойдёт с трассы, уйдёт с пути погони за скоростью',
        ]);
        era.println();
        await era.printAndWait([
          'Так можно ли эту возможность перенести и на ',
          tachyon.get_colored_name(),
          ' тоже?',
        ]);
        await era.printAndWait([
          'Для ',
          tachyon.get_colored_name(),
          ' такая возможность есть?',
        ]);
        await era.printAndWait([
          'Хозяйка чайной — ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          ' Учёная, ушедшая в науку, — ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          ' Обычная ученица, что пошла учиться дальше, стала студенткой, вошла в общество и стала офисным работником, — ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' тоже так сможет — как обычный человек, уйти с трассы и жить своей жизнью?',
        ]);
        era.println();
        await tachyon.say_and_wait(['……', callname, ', ты пойдёшь за мной?']);
        await tachyon.say_and_wait('Если… я выберу эту возможность');
        era.println();
        await era.printAndWait([
          'С ',
          tachyon.get_colored_name(),
          ' вместе — жизнь без скачек, без скорости ',
          tachyon.uma_sex_title,
          ', тихая и мирная',
        ]);
        await era.printAndWait('Такая жизнь, верно, была бы очень хороша');
        await era.printAndWait([
          'Даже в тихой жизни, лишь бы ',
          tachyon.get_colored_name(),
          ' была рядом, скучно точно не будет',
        ]);
      }
      era.printButton('「Звучит… вполне»', 1);
      era.printButton('「Может… ещё подумать»', 2);
      await era.input();
      await tachyon.say_and_wait('…хе-хе');
      era.println();
      await era.printAndWait([
        'На ответ ',
        you.get_colored_name(),
        ', ',
        tachyon.get_colored_name(),
        ' больше ничего не сказала',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' ступнёй ведёт по воде, распускает круги',
      ]);
      await era.printAndWait([
        'Вдруг поднимается ветер, ',
        you.get_colored_name(),
        ' слышит: весь лес снова ожил',
      ]);
      await era.printAndWait(
        'Листва сыпется с шорохом, ночные птицы срываются со сна и галдят, мечась',
      );
      await era.printAndWait([
        'Ночную тишину ',
        tachyon.sex,
        ' этой минутной помехой мигом разбила',
      ]);
      era.println();
      await era.printAndWait([
        'Такая ',
        tachyon.sex,
        ' и правда сможет так жить?',
      ]);
      await era.printAndWait([
        'Мысль о возможностях — выйдет или нет — вдруг ',
        you.get_colored_name(),
        ' слегка заводит',
      ]);
      await era.printAndWait([
        'Но выйдет или нет — ты всё равно будешь рядом: ',
        tachyon.sex,
        ' — до самого конца, верно?',
      ]);
      era.println();
      await tachyon.say_and_wait('Кстати');
      era.println();
      await era.printAndWait(
        'Когда вокруг снова зимняя ночь — и тишина, и шум',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' будто вдруг что-то вспомнив, открывает рот',
      ]);
      await era.printAndWait(
        'Говорит — и заодно потихоньку подворачивает подол полотенца, почти до паха',
      );
      era.println();
      await tachyon.say_and_wait('Прости, что в полотенце…');
      await tachyon.say_and_wait('Но снизу и правда ничего нет… посмотреть?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' смотрит игривым взглядом на ',
        you.get_colored_name(),
        ', пальцами потихоньку развязывает узел полотенца',
      ]);
      if (tachyon.sex_code !== 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' видишь под полотенцем то скрытую, то нет, будто влажную щель',
        ]);
        await era.printAndWait('… наверное, вода онсэна');
        await era.printAndWait([
          'Хотя знаешь: ',
          tachyon.get_colored_name(),
          ' ещё даже не входила в воду, ',
          you.get_colored_name(),
          ' всё равно решает себя так обмануть',
        ]);
      }
      era.printButton('「В онсэне… как-то нехорошо…」', 1);
      era.printButton('「Или… пока в комнату не вернёмся…?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Я уже проверила… на эти дни бронь только наша, так что что бы здесь ни творили — без разницы',
      );
      await tachyon.say_and_wait(
        'И ещё… никто не придёт, так что даже если вздумаешь сопротивляться — бесполезно♡',
      );
      await tachyon.say_and_wait('Расслабься и наслаждайся');
      era.println();

      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait([
          'Неизвестно когда сбросив полотенце, голой войдя в онсэн, ',
          tachyon.get_colored_name(),
          ' ложится на ',
          you.get_colored_name(),
          ', наводит на толстый член ту розовую щель, что ещё до воды уже намокла насквозь…',
        ]);
      } else {
        await era.printAndWait([
          'Неизвестно когда сбросив полотенце, голой войдя в онсэн, ',
          tachyon.get_colored_name(),
          ' ложится на ',
          you.get_colored_name(),
          ', ',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async hot_spring_b_sex_end(tachyon, you) {
    await era.printAndWait([
      'После секса ',
      tachyon.get_colored_name(),
      ' первой вылезает из онсэна',
    ]);
    if (tachyon.sex_code !== 1 && you.sex_code > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        ' смотришь, как ',
        tachyon.sex,
        ' довольно гладит слегка округлившийся живот, а по бёдрам течёт прозрачное — то ли вода онсэна, то ли ещё что',
      ]);
      await era.printAndWait(
        'и дырку, что из тонкой черты стала двумя губами, а между губ ещё белеет сперма, которую она только что слопала',
      );
      await era.printAndWait('В паху снова встаёт');
      await era.printAndWait([tachyon.sex, ' будто почуяв, чуть ведёт задом']);
    }
    await era.printAndWait('Похоже, в комнате снова будет жестокий бой…');
    await era.printAndWait([
      'Перед большой битвой ',
      you.get_colored_name(),
      ' смотрит в небо, ловит последнюю тишину перед боем',
    ]);
  },
  palace_b: (() => {
    const title = 'Будущее Plan B';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        'С ',
        tachyon.get_colored_name(),
        ' три года кончились',
      ]);
      era.println();
      await era.printAndWait([
        'После выпуска ',
        you.get_colored_name(),
        ' тоже спрашивал(а), что ',
        tachyon.sex,
        ' собирается делать дальше',
      ]);
      await era.printAndWait([
        '「Увидимся, ',
        callname,
        '」',
        tachyon.sex,
        ' сказала только это',
      ]);
      era.println();
      await era.printAndWait(['Потом ', tachyon.get_colored_name(), ' ушла']);
      await era.printAndWait('Ушла из академии Трейсен, ушла из этой страны');
      await era.printAndWait('Будто исчезла с лица земли');
      await era.printAndWait(['И где теперь ', tachyon.sex, ' сейчас?']);
      await era.printAndWait([
        you.get_colored_name(),
        ' тоже крутил(а) в голове такие вопросы',
      ]);
      await era.printAndWait('Ест ли как следует');
      await era.printAndWait('Спит ли как следует');
      await era.printAndWait([
        'Совсем одна ',
        tachyon.sex,
        ', и правда сможет позаботиться о себе?',
      ]);
      era.println();
      await era.printAndWait(
        'Она уже взрослая, а всё равно не удержишься от такой тревоги',
      );
      await era.printAndWait('Но… на самом деле ты это и так знаешь');
      await era.printAndWait('Эта тревога лишняя');
      await era.printAndWait([tachyon.get_colored_name(), ', — гений']);
      await era.printAndWait('Гений по праву, что знал от рождения');
      await era.printAndWait([
        'Такая ',
        tachyon.sex,
        ' где бы ни была, обязательно засияет, верно?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' с надеждой на ту, о которой не знаешь, где она, — на ',
        tachyon.get_colored_name(),
        ', открываешь дверь дома',
      ]);
      era.println();
      await tachyon.say_and_wait(['оя, ', callname, ', сегодня ты рано']);
      era.println();
      await era.printAndWait([
        'Игнорируешь валяющуюся на диване с закинутыми ногами бездельницу — эту ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait([
        ' Да, ужин, ужин… ',
        callname,
        ', сегодня твоя очередь~~',
      ]);
      era.println();
      await era.printAndWait([
        'Та, что в твоей голове, — гениальная ',
        tachyon.uma_sex_title,
        ', сверхсветовая частица, ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        ' Наверняка всё ещё в каком-то уголке мира ведёт исследования, тесно связанные с будущим ',
        tachyon.uma_sex_title,
        ' как вида',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Да-да, сегодня новая почта… семинар тренеров… на три дня!? Удалить, удалить, какой смысл в таком ходить',
      );
      era.println();
      await era.printAndWait(
        'Точно не та, что после выпуска всё ещё торчит в заброшенном школьном классе и не уходит',
      );
      await era.printAndWait(
        'А жильё — в день выпуска сама, никем не спрошенная, с вещами въехала к тебе домой',
      );
      await era.printAndWait(
        'И теперь твой дом уже целиком считает своей территорией',
      );
      await era.printAndWait([
        'Эта солёная рыба, что до сих пор спокойно лезет в твою личную жизнь, — ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '? ',
        callname,
        '~~~~ну обрати на меня внимание~~~~',
      ]);
      await you.say_and_wait('Так почему Тахион вообще застряла у меня дома!');
      era.println();
      await era.printAndWait('Наконец всё же не выходит её игнорировать');
      await era.printAndWait(
        'Не удерживаешься и орёшь то сомнение, что с первого дня сидело в груди, а из-за её наглой естественности так и не выходило',
      );
      era.println();
      await tachyon.say_and_wait('Ээ——— какая разница?');
      await tachyon.say_and_wait(
        'Да и не то чтобы я совсем ничего по дому не делаю: подмести, полы помыть — и ужин же по очереди~~',
      );
      era.println();
      await era.printAndWait([
        'И правда, если говорить, в чём нынешняя ',
        tachyon.get_colored_name(),
        ' продвинулась против прежней',
      ]);
      await era.printAndWait('Пожалуй, в бытовых навыках');
      await era.printAndWait([
        'Не то что прежняя ',
        tachyon.get_colored_name(),
        ', за которую ты делал(а) всё сам(а)',
      ]);
      await era.printAndWait([
        'Нынешняя ',
        tachyon.get_colored_name(),
        ' и правда растёт',
      ]);
      await era.printAndWait(
        'От мытья посуды после еды до того, что по дому подметает и моет полы',
      );
      await era.printAndWait('Разница крошечная, но она и правда растёт…');
      await era.printAndWait(
        'Но откуда это тихое тепло, будто у старого отца, что смотрит на дочь, которая начала вести хозяйство?',
      );
      await era.printAndWait(
        'Нет, тебя чуть не увели в сторону… суть не в том, почему она живёт у тебя?!',
      );
      era.println();
      await tachyon.say_and_wait('На такие мелочи не смотри, ничего, ничего');
      await tachyon.say_and_wait('Оя, или это оно — вопрос денег?');
      await tachyon.say_and_wait(
        'И правда, делить быт — это не только дом… расходы тоже надо делить',
      );
      await tachyon.say_and_wait(
        'Тогда начнём с того, что разделим расходы этого месяца, ',
      );
      await tachyon.say_and_wait(
        'К счастью, даже не трогая призовые, из того, что я раньше патентовала… отчислений, пожалуй, хватит',
      );
      era.println();
      await era.printAndWait(
        'Суть не в деньгах… нет, деньги важны, но сейчас дело не в деньгах',
      );
      await era.printAndWait([
        'В конце концов… ',
        tachyon.get_colored_name(),
        ' не хочет учиться дальше? Даже за границу, например…?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Слушай, ',
        callname,
        ', ты правда думаешь, что шагать по общей лестнице учёбы мне хоть чем-то поможет?',
      ]);
      await tachyon.say_and_wait(
        'Такое групповое образование удобно посредственностям, что ещё не выбрали путь; для гения вроде меня лучший выбор — мой собственный',
      );
      era.println();
      await era.printAndWait('Как раньше не хотелось признавать');
      await era.printAndWait([tachyon.get_colored_name(), ' и правда гений']);
      await era.printAndWait([
        'Может, тебе и правда не оспорить её выбор: ',
        tachyon.sex,
        ' так решила',
      ]);
      await era.printAndWait(
        'Но кроме этого должны быть ещё вопросы, например… семья…?',
      );
      era.println();
      await tachyon.say_and_wait([
        'Слушай, ',
        callname,
        '… я уже совершеннолетняя, знаешь? По закону я полностью дееспособна, у меня есть право самой выбрать, где жить, да?',
      ]);
      await you.say_and_wait(
        'Я не верю, что закон защищает превращение чужого дома в своё жильё',
      );
      await tachyon.say_and_wait(
        'Ну, места же полно, если я тут потеснюсь — ничего же не будет',
      );
      await tachyon.say_and_wait('… и вообще, тебе меня отпускать жалко?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' сверлит игривым взглядом ',
        you.get_colored_name(),
      ]);
      await era.printAndWait(' Каждый раз одно и то же');
      await era.printAndWait('Точно свинка, на которую уставилась змея');
      await era.printAndWait('Точно бездна, что втягивает всё');
      await era.printAndWait([
        'Стоит ',
        tachyon.get_colored_name(),
        ' глянуть так — и уже не выговоришь ни слова против',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Ты, что так меня любишь, и правда отпустишь меня?',
      );
      await tachyon.say_and_wait(
        'Ты, кого я так люблю, и правда собираешься отвергнуть мою любовь?',
      );
      era.println();
      await era.printAndWait('Во рту пересохло');
      await era.printAndWait([
        'Незаметно ',
        tachyon.get_colored_name(),
        ' уже вплотную перед тобой',
      ]);
      await era.printAndWait([
        'Точь-в-точь как тогда, на Kikuka Sho, ',
        tachyon.sex,
        ' — та же',
      ]);
      await era.printAndWait(
        'Но в отличие от тогда, на этот раз и правда есть предчувствие',
      );
      await era.printAndWait('Ощущение: 「сейчас съедят」');
      era.println();
      await era.printAndWait('Ах');
      await era.printAndWait('В конце концов, это же выбранный тобой путь');
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминаешь ',
        tachyon.get_colored_name(),
        ' — тот разговор из онсэн-поездки',
      ]);
      era.println();
      await era.printAndWait([
        'Тогда ты уже решил(а): какую бы возможность ',
        tachyon.sex,
        ' ни выбрала в конце — ты пойдёшь за ней до края',
      ]);
      await era.printAndWait('Вглядевшийся в бездну будет бездной поглощён');
      await era.printAndWait([
        you.get_colored_actual_name(),
        ' пожалуй, всю жизнь не выберешься: ',
        tachyon.sex,
        ' — бездна в её глазах, верно?',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
