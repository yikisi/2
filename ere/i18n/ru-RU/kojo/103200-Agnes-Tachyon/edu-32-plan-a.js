/**
 * @file 爱丽速子 - 育成 - Plan A
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { adaptability_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ws_a_advanced: (() => {
    const title = 'Advanced';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        'Если и правда, как говорит ',
        tachyon.get_colored_name(),
        ', то надежду ',
        tachyon.sex,
        ' получила от тебя',
      ]);
      await era.printAndWait([
        'Тогда идти рядом, пока ',
        tachyon.sex,
        ' шагает по этой дороге мечты, — тоже твоя ответственность и долг',
      ]);
      await era.printAndWait([
        'Если, как говорит ',
        tachyon.sex,
        ', этот сюжет открыл(а) ты — и до занавеса должен(на) стоять на сцене',
      ]);
      era.println();
      await era.printAndWait('Поэтому…');
      era.printButton('「…Нет」', 1);
      era.printButton('「Не так」', 2);
      await era.input();
      await tachyon.say_and_wait(['……', callname, '?']);
      era.println();
      await era.printAndWait([
        'Не просто сопровождать, пока ',
        tachyon.sex,
        ' идёт, так?',
      ]);
      await era.printAndWait(['И не просто стоять на сцене, так?']);
      era.println();
      await era.printAndWait(['Я — тренер ', tachyon.get_colored_name(), '.']);
      await era.printAndWait([
        'Тренер в одной связке: ты и ',
        tachyon.sex,
        ' идёте вместе',
      ]);
      await era.printAndWait([
        'Идёшь плечом к плечу, а не следом, пока ',
        tachyon.sex,
        ' шагает',
      ]);

      era.printButton('「…Я выбираю Plan A」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…Так? Тогда выложи всё ради меня и смотри… вспыхну я или увяну',
      );
      era.println();
      await era.printAndWait('Нет, не так');
      await era.printAndWait([
        you.get_colored_name(),
        ' качаешь головой и обрываешь ',
        tachyon.get_colored_name(),
        ' на полуслове',
      ]);
      era.println();
      await you.say_and_wait('Не смотреть');
      era.println();
      await tachyon.say_and_wait('…?');
      era.printButton(
        '「Я буду с тобой 『вместе』 — исполним 『нашу』 мечту」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' замолкает']);
      await era.printAndWait([
        tachyon.sex,
        ' смотрит так, будто злится, — и всё же с каплей радости',
      ]);
      await era.printAndWait('Затем…');
      if (relation < 76) {
        era.println();
        await tachyon.say_and_wait(
          '…Свинка — и хочешь статус наравне с человеком?',
        );
        era.println();
        await era.printAndWait([
          'Как всегда высокомерно: ',
          you.get_colored_name(),
          ' падает на дно',
        ]);
        await era.printAndWait(
          'Идти рядом можно, только если другой согласен идти с тобой',
        );
        await era.printAndWait(
          'Если в трёхногой связке тянет только один — вперёд всё равно не сдвинуться',
        );
        await era.printAndWait('Таким тоном, верно…');
        era.println();
        await tachyon.say_and_wait(
          'Тогда догоняй мой шаг. Сияй так, что я не смогу не заметить… докажи свою возможность!',
        );
      } else if (love < 75) {
        await tachyon.say_and_wait('…Хе-хе, ха-ха-ха-ха!');
        era.println();
        await era.printAndWait([
          'Вдруг ',
          tachyon.get_colored_name(),
          ' расплывается в довольной улыбке',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Так, так. Напарник плечом к плечу, соратник… хе-хе, вот это занятно!',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          ' раскидывает руки, склоняет голову и смотрит назад, на ',
          you.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait([
          ' Тогда догоняй, ',
          callname,
          '! Не над и не под — равный. Если уверен(а), что сможешь, — валяй',
        ]);
      } else {
        await tachyon.say_and_wait(['То есть… ', callname, ', ты серьёзно?']);
        era.println();
        await era.printAndWait('Серьёзно…?');
        await era.printAndWait([
          'Да: ты всерьёз хочешь идти с ',
          tachyon.get_colored_name(),
          ' рядом — так?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' киваешь — решимость',
        ]);
        era.println();
        await tachyon.say_and_wait('…И «вместе» — то есть сожительство… нн…');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' резко качает головой',
        ]);
        await era.printAndWait('Неясно, что случилось, но что-то не так…?');
        era.println();
        await tachyon.say_and_wait('…Кхм. Поняла. Тогда вместе к нашей цели');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' говорит уже чуть спокойнее',
        ]);
        await era.printAndWait(
          'Неясно, что случилось, но это, похоже, знак, что тебя приняли',
        );
        await era.printAndWait('И дальше придётся стараться!');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' отказалась от Laurel Cup — и это разносится по всей академии',
      ]);
      await era.printAndWait([
        'Как тренера ',
        you.get_colored_name(),
        ' тоже не минует критика',
      ]);
      await era.printAndWait([
        'Но… это цена пути, который ',
        tachyon.sex,
        ' делит с тобой',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_29: (() => {
    const title = 'Как быть с прессой';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait('Летние сборы');
      await era.printAndWait([
        'Для ',
        tachyon.uma_sex_title,
        ' это время, когда можно и отдохнуть, и подтянуть силы',
      ]);
      await era.printAndWait([
        'А для журналистов это те редкие дни, когда удаётся взять интервью у ',
        tachyon.uma_sex_title,
        ' — ведь вне забегов их на людях так просто не увидишь',
      ]);
      await era.printAndWait(
        'Потому-то папарацци и собрались загодя у самого лагеря сборов',
      );
      await you.say_as_passer_by_and_wait('Журналист A', 'Видно что-нибудь?');
      await you.say_as_passer_by_and_wait(
        'Журналист B',
        'Не спеши, они ещё не все вышли',
      );
      await you.say_as_passer_by_and_wait(
        'Журналист C',
        'Идут, идут! Вон тот самый, тренер, который светится!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' не успевают выйти из машины, как их плотным кольцом обступают журналисты',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' мысленно ахает: дело плохо, — и спешно убавляет собственную яркость, вот только уже поздно',
      ]);
      await you.say_as_passer_by_and_wait('Журналист A', [
        'Скажите, по какой причине ',
        tachyon.get_colored_name(),
        ' отказалась от участия в Gekkei Hai?',
      ]);
      await you.say_as_passer_by_and_wait(
        'Журналист B',
        'Есть какие-то скрытые обстоятельства?',
      );
      await you.say_as_passer_by_and_wait(
        'Журналист C',
        'Это недоверие к председателю студсовета?',
      );
      await era.printAndWait(
        'Ух, сколько неудобных вопросов, а у последнего журналиста мысли и вовсе опасные: он что, стравить нас хочет?',
      );
      await era.printAndWait([
        'Перед такой оравой журналистов ',
        you.get_colored_name(),
        ' решает…',
      ]);
      era.printButton(
        'Терпеливо объяснить (Настрой падает на одну ступень)',
        1,
      );
      era.printButton('Разогнать (Репутация падает)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' терпеливо объясняет журналистам, что цель команды — Kikuka Sho в конце года',
        ]);
        await era.printAndWait(
          'А значит, всё прочее до тех пор приходится отодвинуть; и никакого недовольства нынешним председателем нет',
        );
        await era.printAndWait([
          'На возню с журналистами уходит уйма времени, и Тахион начинает терять терпение',
        ]);
        await era.printAndWait([
          'Видя это, ',
          you.get_colored_name(),
          ' наспех выдумывает предлог, обрывает интервью и уводит ',
          tachyon.get_colored_name(),
          ' в корпус сборов',
        ]);
      } else {
        await era.printAndWait('Ах, как шумно');
        await era.printAndWait([
          you.get_colored_name(),
          ' и ',
          tachyon.get_colored_name(),
          ' переглядываются',
        ]);
        await era.printAndWait([
          'За долгое время сработанности ',
          tachyon.sex,
          ' сразу понимает, что задумал ',
          you.get_colored_name(),
          ', и достаёт из сумки тёмные очки',
        ]);
        await era.printAndWait('А затем…');
        era.printButton('「Сияю всерьёз!」', 1);
        era.printButton('「Солнечный кулак!」', 2);
        await era.input();
        await you.say_as_passer_by_and_wait('Журналист A', 'Мои глаза!');
        await you.say_as_passer_by_and_wait('Журналист B', 'Как ярко!');
        era.println();
        await era.printAndWait([
          'Под свечением, которое ',
          you.get_colored_name(),
          ' выдаёт на все 120% сил, даже солнце меркнет',
        ]);
        await era.printAndWait([
          'Пока журналисты трут глаза, ',
          you.get_colored_name(),
          ' уводит ',
          tachyon.get_colored_name(),
          ' быстрым шагом в корпус сборов',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_31: (() => {
    const title = 'Летний сбор данных';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('Ха-а… ха-а… ха-а…');
      era.println();
      await era.printAndWait([
        'Всё время сборов ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' усердно ведут спецподготовку к Kikuka Sho, и при таком чередовании нагрузки и отдыха результат выходит весьма ощутимый',
      ]);
      era.println();
      await tachyon.say_and_wait('Данные… как они?');

      era.printButton(
        '「Скорость уже вернулась к той, что была до смены манеры бега… если так пойдёт, с Kikuka Sho точно никаких проблем!」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'Ради того, чтобы до предела снять нагрузку с ног, которыми бежит ',
        tachyon.get_colored_name(),
        ', манеру бега переделали, и теперь она доведена до совершенства; трудами их двоих Kikuka Sho наверняка…',
      ]);
      era.println();
      await era.printAndWait([
        'И как раз когда ',
        you.get_colored_name(),
        ' уходит мыслями в будущее, которое ждёт ',
        tachyon.get_colored_name(),
        ', отдышавшаяся ',
        tachyon.get_colored_name(),
        ' подаёт голос',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Так, моя часть тренировки окончена. Теперь твой черёд',
      );
      era.println();
      await era.printAndWait('…Чему быть, того не миновать');
      await era.printAndWait([
        'Это самое чередование нагрузки и отдыха на деле означает вот что: пока тренируется ',
        tachyon.get_colored_name(),
        ', отдыхает ',
        you.get_colored_name(),
        ', а когда отдыхает ',
        tachyon.get_colored_name(),
        '… и тогда, само собой, настаёт черёд, и работать идёт уже ',
        you.get_colored_name(),
        ' сам',
      ]);
      await era.printAndWait([
        'С помощью снадобий, которые варит ',
        tachyon.get_colored_name(),
        ', нынешний ',
        you.get_colored_name(),
        ' по короткому рывку, можно сказать, уже не уступает ',
        tachyon.uma_sex_title,
        ' уровня открытых забегов,',
      ]);
      await era.printAndWait([
        'А снимать данные опытов со снадобьями, где подопытный — ',
        you.get_colored_name(),
        ', это одно из условий, на которых ',
        tachyon.get_colored_name(),
        ' прилежно тренируется всё время сборов',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Сегодня, так и быть, смилуюсь и дам выбрать самому, ',
        callname,
        '… силовая тренировка или на выносливость, что из этого выберешь',
      ]);
      era.println();
      await era.printAndWait('Мм… кажется, что разницы почти нет, но');
      era.printButton('Силовая тренировка (Сила & Упорство +10)', 1);
      era.printButton('Тренировка выносливости (Выносливость & Сила +10)', 2);
      era.printButton('Тренировка скорости (Скорость & Интеллект +10)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait('И так далее, и тому подобное');
          await era.printAndWait([
            'И вот ',
            you.get_colored_name(),
            ' тащит по песку покрышку втрое выше человеческого роста',
          ]);
          await era.printAndWait(
            'Одному богу известно, для какой машины такая покрышка: даже лёжа на боку она втрое выше человека',
          );
          await era.printAndWait([
            'Всё это время ',
            tachyon.get_colored_name(),
            ' сидит сверху на покрышке и подбадривает того, кто тащит, — а тащит ',
            you.get_colored_name(),
            '…',
          ]);
          era.println();
          await tachyon.say_and_wait(['А ну живее, ', callname]);
          await tachyon.say_and_wait(
            'Ну что ты так медленно, скорость, скорость',
          );
          await tachyon.say_and_wait(
            'На худой конец разорви на себе одежду и обратись в Халка',
          );
          era.println();
          await era.printAndWait('Слова… поддержки?');
          era.println();
          await era.printAndWait([
            'Под эти выкрики, которые больше похожи не на поддержку, а на закалку стрессоустойчивости, ',
            you.get_colored_name(),
            ' завершает сегодняшнюю тренировку',
          ]);
          break;
        case 2:
          era.println();
          await tachyon.say_and_wait('Спускайся');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' ошарашенно смотрит на ',
            tachyon.get_colored_name(),
            ', и не из-за тяжести тренировки, а…',
          ]);
          era.printButton('「…То есть просто спуститься и поплавать?」', 1);
          await era.input();
          await tachyon.say_and_wait(
            'Ага, проплыви обычное число кругов, и всё~~',
          );
          era.println();
          await era.printAndWait([
            'По лицу, которое сделала ',
            tachyon.get_colored_name(),
            ', ясно видно: она что-то замышляет, вот только что — не догадаться…',
          ]);
          await era.printAndWait([
            'Нет, вернее сказать так: слишком уж много всего может выкинуть ',
            tachyon.sex,
            ' — вариантов столько, что не угадаешь, чем именно ',
            tachyon.sex,
            ' воспользовалась на этот раз',
          ]);
          await era.printAndWait([
            'Но стоять и ждать без толку, и потому ',
            you.get_colored_name(),
            ' первым(ой) лезет в воду',
          ]);
          era.println();
          await era.printAndWait('Ледяная!');
          await era.printAndWait(
            'Вода в море холодная совсем не так, как обычно, если уж говорить…',
          );
          await era.printAndWait([
            '…точь-в-точь как тот бассейн со льдом, куда ',
            tachyon.get_colored_name(),
            ' когда-то загнала тебя, испытывая зелье от холода',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' в панике озирается по сторонам, но видит, что прочие ученики как ни в чём не бывало резвятся в море',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Хе-хе, сейчас особенно холодно, да? Это действие того зелья, что я дала тебе выпить перед заходом в воду. Препарат, обостряющий восприятие, — да-да, ровно такой, какой попадается в «ТаймаOнин»!',
          );
          era.println();
          await era.printAndWait('Да не называй ты «ТаймаOнин»!?');
          await era.printAndWait(
            'Но странно: кроме того, что по ощущениям сейчас будто зимой сидишь в ванне со льдом, ничего особенного не чувствуется. Будь это как в «ТаймаOнин», сейчас полагалось бы…',
          );
          era.println();
          await tachyon.say_and_wait(
            'Разумеется, это пока лишь полуфабрикат: он всего-навсего повышает чувствительность нервов к холоду. Ну а теперь будь добр(а), доплыви положенное число километров',
          );
          era.println();
          await era.printAndWait('Как холодно…');
          await era.printAndWait([
            'Даже без указаний, которые даёт ',
            tachyon.get_colored_name(),
            ', на таком холоде ',
            you.get_colored_name(),
            ' всё равно вынужден(а) отчаянно двигаться, чтобы выработать тепло, и в конце концов кое-как выполняет норму по плаванию',
          ]);
          era.drawLine({ content: 'К слову' });
          await tachyon.say_and_wait([
            '…И почему это, спрашивается, от простого повышения чувствительности нервов ты умудрился(ась) простыть, ',
            callname,
          ]);
          era.println();
          await you.say_and_wait('…Это не у тебя ли надо спросить?');
          break;
        case 3:
          await era.printAndWait(
            'Что ни возьми, всё выглядит с недобрым умыслом…',
          );
          await era.printAndWait([
            'Сообразительный(ая) ',
            you.get_colored_name(),
            ' выбирает',
          ]);
          era.printButton(
            '「…Я вдруг вспомнил(а), что в общежитии, кажется, не выключил(а) газ, я побежал(а)!」',
            1,
          );
          await era.input();
          await era.printAndWait(
            'Из тридцати шести стратагем лучшая — бегство!',
          );
          era.println();
          await tachyon.say_and_wait([
            'Хо-хо, ты что же, вздумал(а) со мной наперегонки? Похоже, недавняя прибавка в выносливости тебя изрядно раздула, ',
            callname,
            '.',
          ]);
          await tachyon.say_and_wait(
            'Ладно, дам тебе фору в десять секунд. Догоню — сегодняшняя доза удваивается.',
          );
          await tachyon.say_and_wait(
            'Ну же, повесели меня как следует, а-ха-ха-ха-ха-ха!',
          );
          era.println();
          await era.printAndWait([
            'Едва истекают отведённые десять секунд, как у самого уха раздаётся топот: это ',
            tachyon.get_colored_name(),
            ' уже настигает',
          ]);
          await era.printAndWait(
            'Быстрее, быстрее! Ну-ка вспомни, чему на такой случай учили в школе тренеров',
          );
          await you.say_and_wait(
            [
              'Найди препятствие и сбей с шага — с шага, которым несётся ',
              tachyon.uma_sex_title,
              '!',
            ],
            true,
          );
          await era.printAndWait(
            'Так, быстрее… это же пляж, откуда тут взяться препятствиям, а-а-а-а-а-а!!!',
          );
          era.println();
          era.println();
          await tachyon.say_and_wait([
            'Цык-цык, бежишь ты слишком медленно, ',
            callname,
            ', итак, сегодня две ампулы… Так, давай ещё разок, те же десять секунд; догоню опять — станет четыре… продолжаем~~',
          ]);
          await you.say_and_wait('Опять!?');
          await era.printAndWait([
            'Под конец ',
            you.get_colored_name(),
            ' попадается снова и снова: ',
            tachyon.get_colored_name(),
            ' ловит и отпускает четыре раза кряду, и в итоге выходит шестнадцать влитых ампул зелья',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho_low_rel: (() => {
    const title = 'Иная возможность';
    /**
     * 菊花赏赛前 - 低好感
     * Plan A 专属（Plan B 禁止参加菊花赏）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        'Той ночью ',
        you.get_colored_name(),
        ' видит сон',
      ]);
      await era.printAndWait([
        'Сон о том, как та, кого прозвали сверхсветовой частицей, — ',
        tachyon.sex,
        ' — ломает крыло прямо на скаковом поле',
      ]);
      await era.printAndWait([
        'Стеклянные ноги рассыпаются, и брызнувшие во все стороны осколки впиваются в оба глаза, которыми ',
        you.get_colored_name(),
        ' всё это видит',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' просыпается от этого сна в испуге и долго не может успокоиться',
      ]);
      await era.printAndWait([
        'Сон был слишком уж настоящим, и оттого ',
        you.get_colored_name(),
        ' до сих пор не может унять дрожь в груди',
      ]);
      await era.printAndWait([
        'Остаток ночи ',
        you.get_colored_name(),
        ' так и ворочается без сна, до самого рассвета',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Едва начинает светать, ',
        you.get_colored_name(),
        ' второпях покидает общежитие тренеров',
      ]);
      await era.printAndWait([
        'Хоть перед забегом уже бессчётное число раз проверено, в каком состоянии находится ',
        tachyon.sex,
        ' и её тело',
      ]);
      await era.printAndWait(
        'Хоть как ни думай, а расколоться так дико, как во сне, невозможно. И всё равно тревожно, и всё равно страшно',
      );
      await era.printAndWait([
        'И всё-таки нужно увидеть своими глазами, что ',
        tachyon.sex,
        ' цела, — только тогда станет ясно, что всё из сна неправда',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Ох, ',
        callname,
        '? Сегодня ты что-то рано',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' врывается в лабораторию и видит: с самого утра, никуда не торопясь, попивает чёрный чай ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Хотя сегодня всё-таки последний забег тройной короны… нервничать тут нормально',
      );
      await era.printAndWait([
        'Kikuka Sho — забег, выиграть который может только сильнейшая ',
        tachyon.uma_sex_title,
        ' и никто другой',
      ]);
      await era.printAndWait([
        'И вдруг ',
        you.get_colored_name(),
        ' на мгновение теряет дар речи',
      ]);
      await era.printAndWait('А верный ли выбор ты сделал(а)?');
      await era.printAndWait([
        'А вдруг ',
        tachyon.sex,
        ' и вправду расколется, как во сне',
      ]);
      await era.printAndWait('Сумеешь ли ты встретить это спокойно?');
      era.println();
      await tachyon.say_and_wait([callname, '? Что-то случилось?']);
      era.println();
      await era.printAndWait(
        'Ведь ворвался(лась) же в лабораторию на одном порыве',
      );
      await era.printAndWait([
        'Но в тот самый миг, когда перед тобой ',
        tachyon.sex,
        ', ни слова не идёт с языка',
      ]);
      era.printButton('「…Ничего. Kikuka Sho — мы обязательно возьмём」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' только и может, что выговорить слова, которых не хватает даже на то, чтобы утешить себя',
      ]);
      era.println();
      await tachyon.say_and_wait('…Да. Обязательно возьмём');
      era.println();
      await era.printAndWait('Без слов');
      await era.printAndWait('Сегодняшний Kikuka Sho — пусть всё обойдётся');
      await era.printAndWait([
        you.get_colored_name(),
        ' молится богам, буддам и свету',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho_high_rel: (() => {
    const title = 'Победит ли?';
    /**
     * 菊花赏赛前 - 高好感
     * Plan A 专属（Plan B 禁止参加菊花赏）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} coffee_kiku_sho 曼城茶座是否参加菊花赏
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        'Kikuka Sho — забег, выиграть который может только сильнейшая ',
        tachyon.uma_sex_title,
        ' и никто другой',
      ]);
      await era.printAndWait('Сильнейшая — это слово значит: во всём и сразу');
      await era.printAndWait(
        'Скорость, Выносливость, Сила, Упорство, Интеллект',
      );
      await era.printAndWait(
        'Забег, который берут, лишь доведя до высшего уровня все пять способностей, что ценятся среди тренеров превыше всего, и притом в равновесии',
      );
      await era.printAndWait([
        'Но… если это ',
        tachyon.get_colored_name(),
        ', то никаких проблем',
      ]);
      era.println();
      await era.printAndWait('Прирождённая сильнейшая');
      await era.printAndWait([
        'Даже без всяких тренировок ',
        tachyon.sex,
        ' наверняка дошла бы до такого уровня',
      ]);
      await era.printAndWait([
        'Вот это и есть ',
        tachyon.get_colored_name(),
        ' — абсолютная мощь',
      ]);
      await era.printAndWait([
        '…Вернее сказать: а много ли от тебя проку, если ',
        tachyon.sex,
        ' и без того такова?',
      ]);
      if (
        new Array(5).fill(0).some((_, i) => era.get(`base:32:${5 + i}`) < 1200)
      ) {
        await era.printAndWait([
          'В сущности, сегодняшняя ',
          tachyon.sex,
          ' от того предела, которым обладала ',
          tachyon.sex,
          ' когда-то, разве не отстоит ещё очень далеко?',
        ]);
      } else {
        await era.printAndWait([
          'В сущности, сегодняшняя ',
          tachyon.sex,
          ' всего лишь вернулась к тому уровню, который у неё и должен был быть, разве не так?',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        callname,
        '? Ты чего опять перед забегом застыл(а)?',
      ]);
      era.println();
      await era.printAndWait([
        'Из самоедства, в котором тонет ',
        you.get_colored_name(),
        ', выдёргивает голос — это подбивающая подковы ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' выслушивает то, что говорит ',
        you.get_colored_name(),
        ', и, как и предполагал(а) ',
        you.get_colored_name(),
        ', ',
        tachyon.get_colored_name(),
        ' лишь презрительно фыркает',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Скучно. Мои ноги сейчас стоят на моих исследованиях и на твоих тренировках',
      );
      era.println();
      await tachyon.say_and_wait(
        'Не будь твоих трудов, я, может статься, уже не могла бы бежать. Ты что же, хочешь, чтобы вышло именно так?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' поспешно извиняется и говорит, что имел(а) в виду совсем не это',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Поздно. Завтра доза удваивается. Раз ты не чувствуешь, сколько труда во всё это вложено, придётся дать тебе прочувствовать побольше',
      );
      era.println();
      await era.printAndWait(
        'Нет, я и так глотаю их трижды в день, как еду, куда уж больше',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' не можешь удержаться от мысленного возражения',
      ]);
      era.println();
      await era.printAndWait([
        'Пока вы вот так без всякого напряжения болтаете, время забега подходит',
      ]);
      await era.printAndWait(['Вы неспешно идёте к скаковому полю']);
      era.printButton('「Сегодняшний забег — возьмём?」', 1);
      await era.input();
      await tachyon.say_and_wait('Ну как сказать… возьмём или нет~~');
      await tachyon.say_and_wait(
        'Нет, даже если ты говоришь, что спрашиваешь всерьёз, мне и правда трудно ответить…',
      );
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait([
          'Всё-таки ',
          call_25,
          ' и прочие ',
          tachyon.uma_sex_title,
          ' — совсем не один уровень',
        ]);
        await tachyon.say_and_wait([
          'Как ни говори, а ',
          tachyon.sex,
          ' — та, кого я выбрала, кто тоже способен ступить в мир за пределом…',
        ]);
        await tachyon.say_and_wait([
          'А на этой дистанции ',
          call_25,
          '… пожалуй, назвать её сильнейшей в истории не будет преувеличением',
        ]);
      }
      era.printButton('「Значит, проиграешь?」', 1);
      await era.input();
      await tachyon.say_and_wait('Выиграю');
      era.println();
      await tachyon.say_and_wait('『Мы』 обязательно выиграем');
      era.println();
      await era.printAndWait('Больше не провожать взглядом');
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' вместе идёте к скаковому полю',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = 'Выиграем';
    /**
     * Plan A 专属（Plan B 禁止参加菊花赏）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} c_call_y 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} coffee_kiku_sho 曼城茶座是否参加菊花赏
     * @param {boolean} win_triple_crowns 爱丽速子是否赢得三冠
     * @param {boolean} invincible 爱丽速子是否无败
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
      win_triple_crowns,
      invincible,
    ) => {
      if (win_triple_crowns) {
        if (invincible) {
          await you.say_as_passer_by_and_wait('Комментатор', [
            'Непобеждённая тройная корона! Колесо истории снова крутится! ',
            tachyon.get_colored_name(),
            ' — непобеждённая тройная корона!',
          ]);
        } else {
          await you.say_as_passer_by_and_wait('Комментатор', [
            'Тройная корона ',
            tachyon.uma_sex_title,
            ' явилась! Сильнейшая года! Самая быстрая, счастливая и сильная ',
            tachyon.uma_sex_title,
            ' — это ',
            tachyon.get_colored_name(),
            '!',
          ]);
        }
      } else {
        await you.say_as_passer_by_and_wait('Комментатор', [
          'Первой через финиш среди сильных соперниц — сверхсветовая ',
          tachyon.sex_code - 1 ? ' принцесса' : 'принц',
          ', ',
          tachyon.get_colored_name(),
          '! Сильнейшая на Kikuka Sho ',
          tachyon.uma_sex_title,
          ' — это ',
          tachyon.get_colored_name(),
          '!',
        ]);
      }
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' берёт Kikuka Sho — победа по праву',
      ]);
      await era.printAndWait(
        'Но отпраздновать победу не успеваете — является незваный гость',
      );
      era.println();
      await coffee.say_and_wait([c_call_t, '… твой сегодняшний бег…']);
      await tachyon.say_and_wait(['Ох, ', call_25, ', что?']);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — её наследница Plan B',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — её пробный камень Plan A',
      ]);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          'На этой Kikuka Sho ',
          tachyon.get_colored_name(),
          ' — главный враг.',
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'И ещё ',
          you.get_colored_name(),
          ' ведёт ещё одну ',
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, ', твой бег… не как раньше…']);
      await tachyon.say_and_wait(
        'Хе-хе, проблема? Разве бег не эволюционирует?',
      );
      await coffee.say_and_wait(
        'Ничего… просто поздравляю: ты перешагнула другого себя',
      );
      await tachyon.say_and_wait([
        '…Другого себя? Стой, ',
        call_25,
        '! Что это значит!',
      ]);
      await coffee.say_and_wait('…Что значит? Я лишь передаю слова подруги');
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            'И ещё: даже если своя ',
            tachyon.uma_sex_title,
            '… не держи чужую любовь слишком долго, ',
            c_call_t,
          ]);
          await era.printAndWait([
            ' Сказав это, ',
            coffee.get_colored_name(),
            ' целует ',
            you.get_colored_name(),
            ' в лицо — метка',
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            'Сегодня особый день, так что ',
            c_call_y,
            ' одолжу… потом вернёшь',
          ]);
        } else {
          await coffee.say_and_wait([
            'Кстати… не забудь потом вернуть ',
            c_call_y,
            ' мне',
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([call_25, '!… ц, ушла…']);
      await era.printAndWait([
        'Всё в порядке? ',
        you.get_colored_name(),
        ' тревожно смотрит на ',
        tachyon.get_colored_name(),
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            ' Ничего… кстати, ',
            callname,
            ', ты у всех нарасхват',
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            'Ничего… кстати ',
            callname,
            ', долгов сердца у тебя полно',
          ]);
        } else {
          await tachyon.say_and_wait([
            'Ничего… важнее, ',
            callname,
            '… долгов сердца у тебя полно',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' сквозь зубы оборачивается и говорит',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Надо продезинфицировать место, которое испачкала ',
            call_25,
            '!',
          ]);
          era.println();
          await era.printAndWait([
            'Под этим предлогом ',
            tachyon.sex,
            ' без конца целует ',
            you.get_colored_name(),
            ' в щёку — вдесятеро, во сто раз сильнее, чем ',
            coffee.get_colored_name(),
            ' только что оставила метку',
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '. Так или иначе, ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' заканчивают славную Kikuka Sho',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_lose: (() => {
    const title = 'Искра вспыхивает';
    /**
     * Plan A 专属（Plan B 禁止参加菊花赏）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} c_call_y 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} coffee_kiku_sho 曼城茶座是否参加菊花赏
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
    ) => {
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      era.printButton('「…Тахион?」', 1);
      await era.input();
      await era.printAndWait([
        'Гонка окончена. Славная Kikuka Sho — кто сильнейшая ',
        tachyon.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' — твоя ',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        ' проиграла эту скачку',
      ]);
      await era.printAndWait([
        'После скачки, в комнате отдыха, вы двое всё молчите',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' краем глаза смотришь: ',
        tachyon.sex,
        ' не выдаёт лица, мысли ',
        tachyon.sex,
        ' прячет',
      ]);
      await era.printAndWait('Когда давление тишины доходит до предела…');
      era.println();
      await tachyon.say_and_wait('Хе-хе…');

      era.printButton('「Тахион…?」', 1);
      await era.input();
      await tachyon.say_and_wait('Думала, не проиграю… ай, всё же превзошли');
      await tachyon.say_and_wait([
        'И правда: возможности ',
        tachyon.uma_sex_title,
        ' исследуются только в скачке',
      ]);
      await tachyon.say_and_wait('Проиграла, проиграла');
      era.println();
      await era.printAndWait([
        'Тахион держится на удивление легко — ',
        you.get_colored_name(),
        ' такого не ждал(а)',
      ]);
      await era.printAndWait([
        'Да и правда… ',
        tachyon.sex,
        ' всё равно видит в скачке лишь опыт',
      ]);
      await era.printAndWait('Опыт бывает успехом и провалом; скачка — тоже');
      await era.printAndWait('Провалился — извлеки урок');
      era.println();
      await era.printAndWait([
        'Подходит ли такое к скачкам — ещё вопрос, но хотя бы ',
        tachyon.sex,
        ' почти не пострадала',
      ]);
      era.println();
      await era.printAndWait(
        'Но успокоиться не успеваете — является незваный гость',
      );
      era.println();
      await coffee.say_and_wait([c_call_t, '… твой сегодняшний бег…']);
      await tachyon.say_and_wait(['Ох, ', call_25, ', что?']);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — её наследница Plan B',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — её пробный камень Plan A',
      ]);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          'На этой Kikuka Sho ',
          tachyon.get_colored_name(),
          ' — главный враг.',
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'И ещё ',
          you.get_colored_name(),
          ' ведёт ещё одну ',
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, ', твой бег… не как раньше…']);
      await tachyon.say_and_wait(
        'Хе-хе, проблема? Разве бег не эволюционирует?',
      );
      await coffee.say_and_wait(
        'Ничего… просто поздравляю: ты перешагнула другого себя',
      );
      await tachyon.say_and_wait([
        '…Другого себя? Стой, ',
        call_25,
        '! Что это значит!',
      ]);
      await coffee.say_and_wait('…Что значит? Я лишь передаю слова подруги');
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            'И ещё: даже если своя ',
            tachyon.uma_sex_title,
            '… не держи чужую любовь слишком долго, ',
            c_call_t,
          ]);
          await era.printAndWait([
            ' Сказав это, ',
            coffee.get_colored_name(),
            ' целует ',
            you.get_colored_name(),
            ' в лицо — метка',
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            'Сегодня особый день, так что ',
            c_call_y,
            ' одолжу… потом вернёшь',
          ]);
        } else {
          await coffee.say_and_wait([
            'Кстати… не забудь потом вернуть ',
            c_call_y,
            ' мне',
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([call_25, '!… ц, ушла…']);
      await era.printAndWait([
        'Всё в порядке? ',
        you.get_colored_name(),
        ' тревожно смотрит на ',
        tachyon.get_colored_name(),
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            ' Ничего… кстати, ',
            callname,
            ', ты у всех нарасхват',
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            'Ничего… кстати ',
            callname,
            ', долгов сердца у тебя полно',
          ]);
        } else {
          await tachyon.say_and_wait([
            'Ничего… важнее, ',
            callname,
            '… долгов сердца у тебя полно',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' сквозь зубы оборачивается и говорит',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Надо продезинфицировать место, которое испачкала ',
            call_25,
            '!',
          ]);
          era.println();
          await era.printAndWait([
            'Под этим предлогом ',
            tachyon.sex,
            ' без конца целует ',
            you.get_colored_name(),
            ' в щёку — вдесятеро, во сто раз сильнее, чем ',
            coffee.get_colored_name(),
            ' только что оставила метку',
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' заканчивают классическую линию!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_triple_crowns: (() => {
    const title = 'Мечта о тройной короне';
    /**
     * Plan A 专属（Plan B 禁止参加菊花赏，无法赢取三冠）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} pocket 森林宝穴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (
      tachyon,
      coffee,
      pocket,
      you,
      callname,
      call_25,
      relation,
      love,
      sats_sho,
      toky_yus,
    ) => {
      await tachyon.say_and_wait('…Это…');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' вдруг мутнеет',
      ]);
      await tachyon.print_and_wait(
        'Перед глазами — зелёная трава, пустое скаковое поле',
      );
      era.println();
      await tachyon.say_and_wait('…Сон?');
      era.println();
      await tachyon.print_and_wait([
        'Помнит: Kikuka Sho позади, только что рассталась с ',
        callname,
        ' — и свалилась в постель от усталости',
      ]);
      await tachyon.print_and_wait([
        'Kikuka Sho — самый тяжёлый бой, что она брала до сих пор',
      ]);
      await tachyon.print_and_wait('Но всё же выиграла');
      await tachyon.print_and_wait(
        'А перед глазами — не то незабываемое поле, а…',
      );
      era.println();
      await tachyon.print_and_wait('Накаяма?');
      await tachyon.print_and_wait('Если Накаяма, то…');
      era.println();
      await tachyon.print_and_wait([
        'Как и думала: на экране сзади крутится эмблема Satsuki Sho',
      ]);
      await tachyon.print_and_wait([
        'Но табло уже показывает финиш. Первое место — ',
        tachyon.get_colored_name(),
        ', разумеется',
      ]);
      era.println();
      await tachyon.say_and_wait(['…Вернулась ко времени Satsuki Sho?']);
      era.println();
      await tachyon.print_and_wait([
        'Пустое поле, Satsuki Sho без участниц — и уже окончена',
      ]);
      await tachyon.print_and_wait(
        'Даже для сна без логики — слишком против здравого смысла',
      );
      era.println();
      await tachyon.print_and_wait('Итак…');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' таращится на шар света, что возник неизвестно когда',
      ]);
      era.println();
      await tachyon.say_and_wait('Ты… кто? Это ты затащил(а) меня в этот сон?');
      era.println();
      await tachyon.print_and_wait([
        '«Затащить в сон» — не слишком научно, но если… по словам ',
        call_25,
        ' стоит подумать…',
      ]);
      await you.say_as_passer_by_and_wait('???', '…………');
      era.println();
      await tachyon.print_and_wait('Шар молчит, лишь парит на месте');
      era.println();
      await tachyon.say_and_wait('…Не скажешь?');
      await tachyon.say_and_wait('Тогда выскажу свою догадку…');
      await tachyon.say_and_wait([
        'Ты… и есть 「 ',
        tachyon.get_colored_name(),
        ' 」, да',
      ]);
      era.println();
      await tachyon.print_and_wait('Угадать несложно');
      await tachyon.print_and_wait([
        'Достаточно сложить со словами ',
        call_25,
        ' про 「другого себя」',
      ]);
      await tachyon.print_and_wait([
        'Легенда… в ',
        tachyon.uma_sex_title,
        ' обитает душа из другого мира',
      ]);
      await tachyon.print_and_wait([
        '…Хотя, чем в такую сказку, ',
        tachyon.get_colored_name(),
        ' скорее верит в естественную эволюцию',
      ]);
      await tachyon.print_and_wait('Но если легенда правда…');
      era.println();
      await tachyon.print_and_wait('「Другой себя」 — вот оно, должно быть');
      await tachyon.print_and_wait(
        'Душа из иного мира, или то, что зовут 「Uma Soul」',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('………⬛⬛………⬛⬛⬛………');
      await tachyon.say_and_wait('Что?');
      era.println();
      await tachyon.print_and_wait(
        'По шару вдруг пробегает рябь — будто из последних сил выдавил эти звуки',
      );
      await tachyon.print_and_wait([
        'Невольно ',
        tachyon.get_colored_name(),
        ' подходит ближе, чтобы расслышать…',
      ]);
      era.println();
      await tachyon.say_and_wait('…!');
      era.println();
      await tachyon.print_and_wait('Касание');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ': в голове вспыхивают несуществующие воспоминания',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'Тот мир, память существа по имени ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await tachyon.print_and_wait([
        'Как и ждала с самого начала: ноги 「 ',
        tachyon.get_colored_name(),
        ' 」 после Satsuki Sho не выдержали — вынужденный уход',
      ]);
      await tachyon.print_and_wait([
        'В том мире ',
        tachyon.get_colored_name(),
        ' звали воплощением возможности: 「если бы ⬛」, 「призрачная тройная корона ⬛」',
      ]);
      await tachyon.print_and_wait(
        'Никто не сомневался: дай ему шанс — он взял бы тройную корону',
      );
      await tachyon.print_and_wait(
        'Без травмы ног — имя в истории, тот самый ⬛',
      );
      await tachyon.print_and_wait(
        'Без отставки сверстники-⬛ рядом с ним меркли бы',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — ближе всех к тройной короне',
      ]);
      await tachyon.print_and_wait('Но «если»… всего лишь если');
      await tachyon.print_and_wait('Несбыточное если — пустая бумага');
      await tachyon.print_and_wait(
        'Пока сверстники сияли каждый в своей области',
      );
      await tachyon.print_and_wait('Уверенность стала сомнением');
      await tachyon.print_and_wait([
        'На Токио, 2400 метров, правда обошла бы того ',
        pocket.get_colored_name(),
        ' ?',
      ]);
      await tachyon.print_and_wait([
        'На Киото, 3000 метров, правда обошла бы того ',
        coffee.get_colored_name(),
        ' ?',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — тройная корона…?',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'Тут ',
        tachyon.get_colored_name(),
        ' приходит в себя',
      ]);
      await tachyon.print_and_wait([
        'Вдруг ',
        tachyon.sex,
        ' понимает речь шара',
      ]);
      await tachyon.say_as_unknown_and_wait('…Спасибо… спасибо тебе…');
      await tachyon.say_and_wait('…………');
      era.println();
      await tachyon.print_and_wait('Сбывшееся если');
      await tachyon.print_and_wait('Пустая возможность стала явью');
      era.println();
      await tachyon.print_and_wait([
        'Иной 「 ',
        tachyon.get_colored_name(),
        ' 」 не смог',
      ]);
      await tachyon.print_and_wait([
        'А ',
        tachyon.get_colored_name(),
        ' — смогла',
      ]);
      await tachyon.print_and_wait('Доказала свою возможность');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — тройная корона ⬛',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — тройная корона ⬛?',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — тройная корона ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait('…Так');
      era.println();
      await tachyon.print_and_wait('Превзошла прошлое себя');
      await tachyon.print_and_wait('Превзошла себя из другого мира');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' делает новый шаг',
      ]);
      era.println();
      await tachyon.say_and_wait('Тогда мне пора');
      await tachyon.say_as_unknown_and_wait('…?');
      era.println();
      await tachyon.print_and_wait([
        'Слов нет, но почему-то ',
        tachyon.get_colored_name(),
        ' чувствует недоумение шара',
      ]);
      await tachyon.print_and_wait('Куда?');
      await tachyon.print_and_wait('Мечта сбылась, нет?');
      await tachyon.print_and_wait('Цель достигнута, нет?');
      await tachyon.print_and_wait('Что дальше?');
      era.println();
      await tachyon.say_and_wait([
        'Хм, 『 ',
        tachyon.get_colored_name(),
        ' 』: возможность кончается классическим годом?',
      ]);
      await tachyon.say_and_wait('…Нет, так будто ругаю себя… кхм, заново');
      await tachyon.say_and_wait([
        '『',
        tachyon.get_colored_name(),
        '』: возможность, может, только до конца классического года…',
      ]);
      await tachyon.say_and_wait([
        'Нет, от силы — только до Satsuki Sho. Возможности ',
        tachyon.get_colored_name(),
        '…',
      ]);
      await tachyon.say_and_wait('Может, и так');
      era.println();
      await tachyon.print_and_wait('Но');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' вспоминает того, кто готов сгореть ради неё, с безумием в глазах',
      ]);
      era.println();
      if (relation <= 0) {
        await tachyon.say_and_wait([
          'Хотя… дрянной тип. Пусть ',
          you.sex,
          ' сгинет — миру, может, даже лучше',
        ]);
      } else if (love >= 75) {
        await tachyon.say_and_wait(
          'Кого люблю больше всех, кто любит меня, моя любовь',
        );
      } else if (relation <= 225) {
        await tachyon.say_and_wait('Кто идёт со мной, единомышленник');
      } else {
        await tachyon.say_and_wait(
          'Тот, кто понимает всё и кому без колебаний доверишь жизнь',
        );
      }
      era.println();
      await tachyon.print_and_wait('Если бы… того человека не было');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' после ',
        sats_sho,
        ' наверняка выгорела бы дотла',
      ]);
      era.println();
      await tachyon.print_and_wait('Если бы… того человека не было');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' после ',
        toky_yus,
        ' ощутила бы предел и сама бы отступила',
      ]);
      era.println();
      await tachyon.print_and_wait('Если бы… того человека не было');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' бы и о будущем не мечтала',
      ]);
      era.println();
      await tachyon.print_and_wait('Но… если бессмысленно');
      await tachyon.print_and_wait('И это если никогда не сбудется');
      await tachyon.print_and_wait('Поэтому…');
      era.println();
      await tachyon.say_and_wait([
        'Смотри, 『 ',
        tachyon.get_colored_name(),
        ' 』: 『мы』 перешагнули прошлое, стоим в настоящем — дальше творим будущее!',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' идёт к выходу со скакового поля',
      ]);
      await tachyon.print_and_wait([
        'Перед дверью ',
        tachyon.sex,
        ' оборачивается',
      ]);
      era.println();
      await tachyon.print_and_wait('На экране эмблема Satsuki Sho уже исчезла');
      await tachyon.print_and_wait('Экран пустой, белый');
      await tachyon.print_and_wait('Прошлая скачка окончена');
      await tachyon.print_and_wait('Какая следующая загорится на этом поле?');
      era.println();
      await tachyon.print_and_wait('Неизвестно. Но договорились — идти вместе');
      await tachyon.print_and_wait('Поэтому');
      era.println();
      await tachyon.say_and_wait(
        'Продолжим опыт… чтобы увидеть, куда доходит возможность',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_41: (() => {
    const title = 'Второй годовой смотр';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('Итак… пора поговорить о серьёзном');
      era.println();
      await era.printAndWait(['Время — после Kikuka Sho']);
      await era.printAndWait([
        'Место действия — у той, кого зовут ',
        tachyon.get_colored_name(),
        ', в лаборатории',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' с серьёзным видом задёргивает шторы и зажигает лампы',
      ]);
      await era.printAndWait([you.get_colored_name(), ' нервно сглатывает']);
      await era.printAndWait([
        'Такая напряжённая обстановка… а если вспомнить, каков нрав у ',
        tachyon.get_colored_name(),
        ', то…',
      ]);
      await era.printAndWait(
        'Неужели опыт пошёл не так? Какое-то опасное подопытное животное сбежало? В источник воды попал опасный препарат? Или…',
      );
      era.printButton('「Понял(а). Я его поймаю, это на мне」', 1);
      era.printButton('「Понял(а). Я возьму вину на себя」', 2);
      era.printButton('「Понял(а). Иди с повинной, Тахион」', 3);
      await era.input();
      await tachyon.say_and_wait(
        '…Нет, что ты за чушь несёшь, я тебя решительно не понимаю. Я о том, что тройная корона позади и самое время обсудить цели на дальше',
      );
      await era.printAndWait('…Э!?');
      await era.printAndWait([
        'Разговор оказался куда серьёзнее, чем ожидалось, и оттого ',
        you.get_colored_name(),
        ' немеет от изумления',
      ]);
      era.printButton('「Цели…」', 1);
      era.printButton('「А, цели исследования, наверное」', 2);
      await era.input();
      await era.printAndWait([
        'Наверняка так и есть, речь об опытах: ведь ноги, которыми бежит ',
        tachyon.get_colored_name(),
        ', после Kikuka Sho и правда держатся заметно устойчивее прежнего, и сейчас по крайней мере за травмы можно особо не тревожиться',
      ]);
      await era.printAndWait(
        'Значит, и опытам пора переходить на следующую ступень. Точно так, а иначе выходило бы, будто речь о…',
      );
      era.println();
      await tachyon.say_and_wait(
        'Цели опытов… они, конечно, тоже. Но сейчас я хочу обсудить цели по забегам. Уговор был до тройной короны, верно? Тройная корона позади, пора на следующую ступень',
      );
      era.println();
      await era.printAndWait('Э-э-э-э!!!!????');
      await era.printAndWait([
        'На этот раз ',
        you.get_colored_name(),
        ' по-настоящему цепенеет, и до того сильно, что ',
        you.get_colored_name(),
        ' встаёт в позу «Крика»',
      ]);
      await era.printAndWait([
        'Глядя на это, стоящая напротив ',
        tachyon.get_colored_name(),
        ' не выдерживает и смеётся',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Хе-хе… неужели так удивительно, что я сама завела речь о забегах?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит, как держится ',
        tachyon.sex,
        ', и вспоминает ту, что прежде видела в забегах лишь довесок к проверке опытов, — ',
        tachyon.get_colored_name(),
      ]);
      era.printButton('「…Тахион… ты изменилась」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'Если уж на то пошло, неизменного вообще не бывает. А в исследованиях топтаться на месте и вариться в собственном соку — и вовсе самое запретное…',
      );
      await tachyon.say_and_wait(
        'Правда, перемены бывают к лучшему и к худшему. По крайней мере нынешними я вполне довольна, и за это я обязана тебя поблагодарить',
      );
      era.println();
      await era.printAndWait([
        'Услышав, как непривычно прямо говорит ',
        tachyon.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' на миг теряется',
      ]);
      await era.printAndWait([
        'Сегодня и для ',
        you.get_colored_name(),
        ', и для ',
        tachyon.get_colored_name(),
        ' случилось слишком много всего впервые',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Правда не думала, что на одном тогдашнем запале можно дойти до такого…',
      );
      await tachyon.say_and_wait(
        'Даже мне становится немного страшно. Эта самая возможность — точно яд: заставляет забыть про рассудок…',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' смотрит на собственные ноги, и тело чуть заметно дрожит',
      ]);
      await era.printAndWait([
        'Не очень понятно, что имеет в виду ',
        tachyon.sex,
        ', но',
      ]);
      era.printButton(
        '「Тахион, ты хочешь и дальше бросать вызов пределу?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        'Дальше? Нет, ',
        callname,
        ', я всё это время в пути к пределу и ни разу не останавливалась.',
      ]);
      await tachyon.say_and_wait([
        'Kikuka Sho — всего лишь отправная точка. Настоящий путь к пределу начинается уже после него!',
      ]);
      await tachyon.say_and_wait([
        'Osaka Hai, где сильнейшие на средней дистанции; Takarazuka Kinen и Arima Kinen, где из всех действующих ',
        tachyon.uma_sex_title,
        ' выявляют сильнейших первой и второй половины года…',
      ]);
      await tachyon.say_and_wait(
        'Разве целей, которые надо превзойти, и вершин, которых надо достичь, не полным-полно?',
      );
      era.println();
      await era.printAndWait('И потому');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' глядит в упор, прямо в оба глаза, которыми смотрит ',
        you.get_colored_name(),
        ' сам(а)',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'По миру, что лежит за тройной короной, пройди со мной снова вместе, ',
        callname,
      ]);
      await tachyon.say_and_wait(
        'В награду я покажу тебе мир куда более широкий',
      );
      era.printButton('「Да」', 1);
      era.printButton('「Разве это нужно спрашивать? С радостью」', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' — их классическая кампания окончена',
      ]);
      await era.printAndWait('Сениорская кампания вот-вот начнётся!');
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_1: (() => {
    const title = 'Второй годовой отчёт';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_9 爱丽速子对大和赤骥的称呼
     * @param {PrintedSpan} call_25 爱丽速子对爱丽速子的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {number} cook_times 给爱丽速子做饭的次数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_9,
      call_25,
      relation,
      love,
      cook_times,
    ) => {
      await era.printAndWait([
        'Этот год — старший год вместе с ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Цели на этот год… раньше не говорили вслух, но чтобы быть сильнейшими — те две скачки обязательны',
      );
      await era.printAndWait([
        'Takarazuka Kinen и Arima Kinen… и Osaka Hai, если выйдет',
      ]);
      era.println();
      await era.printAndWait([
        'Выиграть все три — и, должно быть, достигнешь предела ',
        tachyon.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Но цель ',
        tachyon.get_colored_name(),
        ' не только в этом: ',
        tachyon.sex,
        ' целится… превзойти предел',
      ]);
      await era.printAndWait(
        'Так что кроме скачек не забыть и помощь в исследованиях…',
      );
      era.println();
      await tachyon.say_and_wait([callname, ', так рано?']);
      era.println();
      await era.printAndWait([
        'Незаметно: ',
        tachyon.get_colored_name(),
        ' — с кем договорились сегодня идти на поклон — уже здесь',
      ]);
      era.printButton(
        '「Конечно! Сениорская кампания в этом году, и куча всего… желаний слишком много!」',
        1,
      );
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait('Так… есть желание ко мне?❤');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' смотрит томно, с намёком, и спрашивает ',
          you.get_colored_name(),
        ]);
        era.print([
          ' Что хочет сделать с ',
          tachyon.get_colored_name(),
          ' за этот год…',
        ]);
        era.printButton('「Больше sex с Тахион」', 1);
        era.printButton('「Чтобы тело Тахион было чувствительнее」', 2);
        era.printButton('「Чтобы Тахион наступала」', 3, {
          disabled: you.sex_code === 0,
        });
        era.printButton('「Чтобы Тахион тренировалась всерьёз」', 4);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait(
              '…Похотливый(ая). Хочешь делать — дома, потом',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' прижимается к ',
              you.get_colored_name(),
              ' и шепчет на ухо',
            ]);
            break;
          case 2:
            await tachyon.say_and_wait([
              'Ну… зельем — проще простого. Но хочу, чтобы ',
              callname,
              ' своими руками сделал(а) меня такой, как тебе нравится❤',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' устраивается на плече у ',
              you.get_colored_name(),
              ' и говорит, довольно',
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              'Такое желание… извращенец, ',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              ' На словах так, а ',
              tachyon.get_colored_name(),
              ' тихо снимает туфлю — подошва в чёрных колготках',
            ]);
            await era.printAndWait(
              'Целый день на поклоне — чёрные колготки настоялись',
            );
            era.println();
            await tachyon.say_and_wait(
              'Хочешь… чтобы такие ступни тебя топтали?',
            );
            await tachyon.say_and_wait(
              'Хочешь, чтобы я прижала их к лицу и набила лёгкие грязным воздухом с подошв?',
            );
            await tachyon.say_and_wait(
              'Хочешь, чтобы я наступала на член, пока весь член не пропитается вонью моих ступней и твоим предэякулятом так, что запах будет слышен за десять метров?',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' смотришь фанатично на ',
              tachyon.get_colored_name(),
              ' — ответ и так ясен',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '…Похотливый(ая). Хочешь делать — дома, потом',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' прижимается к ',
              you.get_colored_name(),
              ' и шепчет на ухо',
            ]);
            break;
          case 4:
            await tachyon.say_and_wait('…Бесчувственный тип');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' скучно цокает',
            ]);
        }
      } else if (love >= 50) {
        await tachyon.say_and_wait('Другие желания… например?');
        era.println();
        era.print([
          tachyon.get_colored_name(),
          ' смотрит с явным интересом на ',
          you.get_colored_name(),
        ]);
        era.printButton('「Хочу… чтобы с Тахион стало ближе」', 1);
        era.printButton('「Хочу… чтобы с другими подопечными стало ближе」', 2);
        era.printButton('「Хочу… чтобы Silksong в этом году вышла!」', 3);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait('Хе-хе, верю: обязательно выйдет❤');
            break;
          case 2:
            await tachyon.say_and_wait(
              '…Специально про других подопечных, чтобы меня взбесить? Жаль, на эту удочку я не клюну',
            );
            era.println();
            await era.printAndWait([
              'Так говорит, а ',
              tachyon.get_colored_name(),
              ' всё равно надувает щёки',
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              'Э… это ещё что… Халлоунест? Холл○у Найт? …Так ',
              callname,
              ' ты так любишь игры?',
            ]);
        }
      } else if (relation <= 0) {
        await tachyon.say_and_wait(
          'Хе, чёртовы чудеса себе в сокровища. Чем это мечтать — лучше думай, как помочь моему опыту',
        );
      } else if (relation <= 225) {
        await tachyon.say_and_wait(
          'Хе-хе, в такие чудеса я не верю, но твоё доброе намерение на всякий случай приму',
        );
      } else {
        await tachyon.say_and_wait(
          'Да? Тогда твоё желание исполнится — это неизбежно',
        );
        era.println();
        await era.printAndWait([
          'Слыша, каким тоном говорит ',
          tachyon.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' немного удивляется',
        ]);
        await era.printAndWait([
          'Ты сначала думал(а): к такой чепухе ',
          tachyon.sex,
          ' если и не фыркнет с презрением, то всерьёз не возьмёт',
        ]);
        await era.printAndWait([
          'Однако ',
          tachyon.sex,
          ' говорит так, будто от души в этом уверена',
        ]);
        era.printButton('「Тахион…?」', 1);
        era.printButton('「Ты же в это не веришь?」', 2);
        await era.input();
        await tachyon.say_and_wait(
          'Конечно. Богам я доверяю меньше, чем исследованиям в руках… но исследованиям я доверяю меньше, чем тебе',
        );
        era.println();
        await era.printAndWait([
          'Точнее — ',
          you.get_colored_name(),
          ' вложил(а) силы',
        ]);
        await era.printAndWait([tachyon.sex, ' добавляет']);
        era.println();
        await tachyon.say_and_wait(
          'Усилия этого года обязательно дадут плоды. Если боги не дадут — дам я',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' говорит это с полной уверенностью. Заменить богов? Прямо в духе ',
          tachyon.get_colored_name(),
          ' — только в святилище так лучше не ляпать',
        ]);
      }
      era.drawLine();
      await era.printAndWait([
        'Новогоднее святилище гудит, но вы всё равно быстро заканчиваете поклон',
      ]);
      await era.printAndWait([
        'После поклона ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' обсуждаете план на год',
      ]);
      era.println();
      await tachyon.say_and_wait('Мм… как в ноябре говорили — вопросов нет');
      era.println();
      await era.printAndWait(
        'Скачки закрыли быстро; дальше — главное на сегодня',
      );
      era.println();
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await tachyon.say_and_wait([
          'Предел… после всего, что мы сделали, я смело скажу: нынешняя я уже упёрлась в предел ',
          tachyon.uma_sex_title,
          '.',
        ]);
      } else {
        await tachyon.say_and_wait(
          'Предел… пока не дошла, но если гнать опыт — дойдёт, так что не проблема',
        );
      }
      era.println();
      await tachyon.say_and_wait('Единственная проблема… перешагнуть предел');
      await tachyon.say_and_wait(
        'А вот с этим… у нынешней меня нет ни единой зацепки',
      );
      era.println();
      await era.printAndWait([
        'Говорит, что ни единой зацепки, а в глазах ',
        tachyon.get_colored_name(),
        ' такая гордость, будто ',
        tachyon.sex,
        ' только что выдала решение гипотезы Римана',
      ]);
      era.printButton('「Ни единой зацепки… звучит скверно」', 1);
      await era.input();
      await era.printAndWait('Вот и приехали');
      await era.printAndWait('Если и правда ни единой зацепки');
      era.println();
      await era.printAndWait('Должно бы выбесить — а на душе спокойно');
      await era.printAndWait('Нет зацепки — значит, искать зацепку');
      era.printButton('「Тогда, Тахион, попробуй вложить силы в скачки?」', 1);
      era.printButton(
        `${tachyon.uma_sex_title} — предел всё равно пробивается только на скачках`,
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '…Есть доля правды, но мне сдаётся, это ',
        callname,
        ' ты просто свою похоть гладишь',
      ]);
      era.printButton(
        '「Ты же сама говорила, что покажешь мне мир шире, нет?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        'Хе-хе, тоже верно. Тогда продолжаем: наши исследования нового года!',
      );
      era.println();
      era.print('Тогда, перед тем как начать…');
      era.printButton('「Сначала моти」(энергия +20%)', 1);
      era.printButton('「Сразу на тренировку」(случайный параметр +20)', 2);
      era.printButton('「Назад к исследованиям」(очки навыков +30)', 3);
      let ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            'Вы вернулись к ',
            tachyon.get_colored_name(),
            ' в лабораторию',
          ]);
          await era.printAndWait(['И первое, что вы делаете…']);
          era.println();
          await tachyon.say_and_wait(
            '…С моей стороны это звучит странно, но мы… только что такое говорили, а сейчас чем заняты',
          );
          era.println();
          await era.printAndWait(
            'Кабинет, где ученики когда-то ставили опыты по естественным наукам',
          );
          await era.printAndWait([
            'Сейчас ',
            you.get_colored_name(),
            ' использует его, чтобы гнать тепло и мерить точку вспышки клейко-рисового сплава',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' и ',
            tachyon.get_colored_name(),
            ' сидите вокруг печки — она же прибор — и греетесь',
          ]);
          await era.printAndWait([
            'Разбрызгиватели? Те ещё раньше, когда ',
            tachyon.get_colored_name(),
            ' гнала через них по кампусу массовый опыт с реагентами, студсовет велел снять насильно — лишь бы ',
            tachyon.get_colored_name(),
            ' до них больше не добралась',
          ]);
          era.printButton('「Вроде пропеклось」', 1);
          era.printButton('「Тахион не будет?」', 2);
          await era.input();
          await tachyon.say_and_wait('Конечно ем');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' берёт у ',
            you.get_colored_name(),
            ' поджаренный рисовый сплав — моти — и сразу кусает; и, как ',
            you.get_colored_name(),
            ' того и ждал(а)…',
          ]);
          era.println();
          await tachyon.say_and_wait('Горячо! …фу-фу');
          era.println();
          if (cook_times < 10) {
            await tachyon.say_and_wait(
              '…Не думала, что у тебя выйдет вкусно. Сюрприз',
            );
          } else {
            await tachyon.say_and_wait(
              'Горячо… но вкусно. Не зря я дрессировала свинку',
            );
          }
          era.println();
          await you.say_and_wait('Почему это вдруг её заслуга…');
          era.println();
          await era.printAndWait(
            'Как ни крути: опыт, тренировка, план на скачки — всё подождёт до другого дня',
          );
          await era.printAndWait(
            'Редкий Новый год: лучше побыть в этой тишине',
          );
          era.println();
          await era.printAndWait('Тахион улыбается и тихо кусает моти');
          await era.printAndWait([
            'В последнее время почему-то стоит сказать 「завтра」 или 「потом」 — и ',
            tachyon.get_colored_name(),
            ' вдруг светлеет',
          ]);
          await era.printAndWait([
            'Любопытство берёт своё: ',
            you.get_colored_name(),
            ', не удерживается и спрашивает',
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, ', мои ноги…']);
          break;
        case 2:
          await era.printAndWait([
            'Чтобы поймать момент, пока ',
            tachyon.get_colored_name(),
            ' редкий раз горит, ',
            you.get_colored_name(),
            ' сразу тащит за собой — ',
            tachyon.sex,
            ' тоже на Тренировочное поле',
          ]);
          await era.printAndWait([
            'Видишь, как ',
            tachyon.sex,
            ' несётся по Тренировочному полю: зрелище тысяча раз знакомое, а ',
            you.get_colored_name(),
            ' всё равно проваливается с головой',
          ]);
          await era.printAndWait(
            'Яркая, как свет, слепящая, как свет… и, как свет, вечная',
          );
          await era.printAndWait(
            'Прежняя хрупкость в беге — уже невесть когда пропала',
          );
          await era.printAndWait('Тревоги нет: остался самый чистый свет');
          await era.printAndWait([
            you.get_colored_name(),
            ' тонешь ещё глубже',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '?… ', callname, '!']);
          era.println();
          await era.printAndWait([
            'Не замечаешь даже, что ',
            tachyon.sex,
            ' уже закончила и вернулась к ',
            you.get_colored_name(),
            '.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Смеешь витать, пока смотришь мою тренировку… ну и наглость…',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' торопливо объясняешь, и ',
            tachyon.sex,
            ' слушает, чем это зрелище отличается',
          ]);
          era.println();
          await tachyon.say_and_wait('…Так');
          await tachyon.say_and_wait(
            'На самом деле… у меня тоже странное ощущение',
          );
          await tachyon.say_and_wait([
            'После Kikuka Sho… ноги… какие-то странные',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            callname,
            ', ту пробирку подай, не болтай: прольётся — пол проест до первого этажа',
          ]);
          await tachyon.say_and_wait([
            callname,
            ', руки заняты: зажги спиртовку и вылей ту пробирку в тигель, до кипения',
          ]);
          await tachyon.say_and_wait([
            'Дальше… так, покрась это в кофейный и сыпь в порошок ',
            call_25,
            ' … ',
            callname,
            '! Ты куда утащил(а)?!',
          ]);
          await tachyon.say_and_wait(
            'Надень маску: дым сейчас сильно валит с ног, без защиты проспишь до выходных',
          );
          await tachyon.say_and_wait([
            'Это… ещё яблочного сока и сахара… зелье? Нет, это потом, когда придёт ',
            call_9,
            ', напиток, который ',
            tachyon.sex,
            ' выпьет',
          ]);
          era.println();
          await era.printAndWait([
            'Помолившись, вы вернулись к ',
            tachyon.get_colored_name(),
            ' в лабораторию; сегодня ',
            tachyon.get_colored_name(),
            ' в ударе как никогда',
          ]);
          await era.printAndWait([
            'Без умолку сыплет приказами. Кроме совсем уж странных приказов ',
            you.get_colored_name(),
            ' выполняет большую часть того, что ',
            tachyon.sex,
            ' велела, но…',
          ]);
          era.println();
          await tachyon.say_and_wait('Не вышло… ц, ещё добавлю');
          await tachyon.say_and_wait(
            'За сегодня… двадцать два клинических теста. Обязательно',
          );
          era.println();
          await era.printAndWait('Прежняя гонка в опытах плюс редкая удача');
          await era.printAndWait('Итого дел — в разы больше');
          era.printButton('「Тахион, нельзя передохнуть?」', 1);
          era.printButton('「Не гони так, завтра тоже можно…」', 2);
          await era.input();
          await tachyon.say_and_wait('Завтра что…');
          era.println();
          await era.printAndWait('Отчитывающий тон обрывается на полуслове');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' замирает, будто нажали паузу',
          ]);
          await era.printAndWait([
            'Пробирка вот-вот хлынет на пол, ',
            you.get_colored_name(),
            ' кидается и ловит ту, про которую говорили: капля — и проест до первого этажа',
          ]);
          era.printButton('「Тахион! Что с тобой…!」', 1);
          era.printButton('「Почему вдруг встала!」', 2);
          await era.input();
          await tachyon.say_and_wait('…ха-ха');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' вдруг смеётся',
          ]);
          era.printButton('「Мозги… наконец поехали?」', 1);
          await era.input();
          await tachyon.say_and_wait([
            '…Потом с тобой посчитаюсь, ',
            callname,
            '…я просто думала',
          ]);
          era.println();
          await era.printAndWait('О чём?');
          era.println();
          await tachyon.say_and_wait('…Мы и правда увидели завтра');
          await era.printAndWait('Завтра?');
          await era.printAndWait('О чём она. Мозги и правда набекрень?');
          await era.printAndWait([
            'Или гений и безумец — одна черта, и ',
            tachyon.get_colored_name(),
            ' наконец съехала с катушек?',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Чувствую, ты думаешь что-то очень грубое… как ты и сказал(а): завтра тоже не поздно, хе-хе',
          );
          await tachyon.say_and_wait(
            'Всё-таки впереди ещё много таких «завтра», да?',
          );
          era.printButton('「Как ни крути, завтра всё равно придёт」', 1);
          era.printButton('「Не думай так много: завтра и продолжим」', 2);
          if ((await era.input()) === 1) {
            await tachyon.say_and_wait(
              'Да… только… такое прекрасное завтра… впервые',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' бормочет что-то неразборчивое',
            ]);
          } else {
            await tachyon.say_and_wait(
              'Хе-хе, конечно, завтра и продолжим, да, завтра',
            );
            era.println();
            await era.printAndWait([
              'Даже когда ',
              you.get_colored_name(),
              ' сбивает настрой, ',
              tachyon.get_colored_name(),
              ' всё равно сияет',
            ]);
          }
          era.println();
          await era.printAndWait([
            'Непонятно почему, но после слова 「завтра」 ',
            tachyon.get_colored_name(),
            ' вдруг делается очень радостной',
          ]);
          await era.printAndWait([
            'Любопытство берёт своё: ',
            you.get_colored_name(),
            ', не удерживается и спрашивает',
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, ', мои ноги…']);
      }
      era.printButton('Что?!', 1);
      era.printButton('Где-то не так?!', 2);
      await era.input();
      await tachyon.say_and_wait([
        '…Хе-хе, не напрягайся так. Я хотела сказать: ноги… после Kikuka Sho вдруг стали куда стабильнее',
      ]);
      era.println();
      await era.printAndWait('Стабильнее… это… разве не хорошо?');
      await era.printAndWait('Э, то есть сейчас поздравлять?');
      await era.printAndWait([
        'Тема срывается слишком внезапно: ',
        you.get_colored_name(),
        ' теряется и не понимает, зачем ',
        tachyon.sex,
        ' вдруг это сказала',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Впервые в жизни я могу отбросить страх за ноги и целиком уйти в одно дело…',
      );
      await tachyon.say_and_wait(
        'Будто можно просто бежать и бежать — хоть на край света',
      );
      await tachyon.say_and_wait(
        'Поэтому… стоит подумать о завтра, о будущем… о том, что для обычных людей самое естественное, и у меня тоже…',
      );
      await tachyon.say_and_wait(
        'Как сказать… по-твоему, я и правда показала радость,',
      );
      await tachyon.say_and_wait(
        'Но это радость от того, что можно целиком уйти в исследование?',
      );
      await tachyon.say_and_wait('…Нн, вроде и не то… стоит копнуть');
      era.println();
      await era.printAndWait([
        'Слыша это, ',
        you.get_colored_name(),
        ' вдруг ловит вспышку',
      ]);
      era.printButton(
        '「А не оттого ли, что бежать можно уже без оглядки?」',
        1,
      );
      era.printButton('「А не оттого ли, что бежать можно уже свободно?」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'Нн… ',
        callname,
        ', я же именно это и имела в виду? Не понимаю, зачем ты повторяешь',
      ]);
      era.printButton('「Не опыт — сам бег」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '…То есть я рада, потому что люблю бег и теперь могу бежать свободно?',
      ]);
      era.println();
      await era.printAndWait([
        'А… так и есть: ',
        tachyon.get_colored_name(),
        ' такое с трудом проглотит',
      ]);
      await era.printAndWait(
        'Всё-таки признать, что чисто рассудочному «я» что-то нравится…',
      );
      await tachyon.say_and_wait('Это…');
      era.println();
      await you.say_and_wait('Это?');
      era.println();
      await tachyon.say_and_wait('Разве это не занятная возможность?!');
      era.println();
      await era.printAndWait('…э?');
      era.println();
      await tachyon.say_and_wait([
        'Интерес к самому бегу… о, какая занятная тема! ',
        callname,
        '! Следующее исследование — вот оно!',
      ]);
      era.println();
      await era.printAndWait('Ис… исследование чего?');
      era.println();
      await tachyon.say_and_wait(
        'Ещё спрашиваешь! Конечно, 『любовь』 к бегу!',
      );
      era.println();
      await era.printAndWait('Исследовать… любовь?');
      await era.printAndWait([
        'Не успеваешь ',
        you.get_colored_name(),
        ' опомниться, как возбуждённая ',
        tachyon.get_colored_name(),
        ' сыплет дальше',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'У меня предчувствие… возможность пробить предел — именно здесь! Дальше цель — исследовать это!',
      );
      era.println();
      await era.printAndWait([
        'Слыша, как ',
        tachyon.get_colored_name(),
        ' это говорит, ',
        you.get_colored_name(),
        ' тоже остывает и взвешивает плюсы и минусы',
      ]);
      await era.printAndWait([
        'Если правда — любой ценой помочь, чтобы ',
        tachyon.get_colored_name(),
        ' дотянулась до цели',
      ]);
      await era.printAndWait([
        'А если только кажется… что ',
        tachyon.get_colored_name(),
        ' начинает кайфовать от бега — само по себе для ',
        you.get_colored_name(),
        ' тоже не беда',
      ]);
      await era.printAndWait(
        'Бежать ради опыта или бежать, потому что любишь: как ни крути, второе лучше',
      );
      era.println();
      await era.printAndWait(
        'Так что, кроме одной загвоздки, решение — сплошная выгода…',
      );
      await era.printAndWait([
        'Обдумав, ',
        you.get_colored_name(),
        ' кивает ',
        tachyon.get_colored_name(),
        '.',
      ]);
      era.printButton('「Пусть это и будет целью!」', 1);
      await era.input();
      await era.printAndWait(
        'Сплошная выгода — если вычесть главную загвоздку',
      );
      await era.printAndWait(
        'Итак, как же исследовать 「чувства」? Давай, свинка!',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = 'Переменная · стимул чувств толпы';
    /**
     * Plan A 专属（Plan B 禁止参加大阪杯）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_5 爱丽速子对富士奇石的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} coffee_sank_hai 曼城茶座是否参加大阪杯
     */
    const f = async (tachyon, you, callname, call_5, love, coffee_sank_hai) => {
      await era.printAndWait('Osaka Cup');
      await era.printAndWait('Первая G1 года на средней и длинной дистанции');
      await era.printAndWait([
        'Для только что вошедших в старший год ',
        tachyon.uma_sex_title,
        ' это первая гонка, где проверяют силу',
      ]);
      await era.printAndWait([
        'Однако… для ',
        tachyon.get_colored_name(),
        ' всё иначе',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Тахион-сэмпай! На Satsuki Sho ты тогда была так крута!',
      );
      await tachyon.say_and_wait(
        'Хе-хе, спасибо за поддержку, но мой бег всё время растёт: по сравнению с Satsuki Sho нынешний… будет ещё ослепительнее',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        'Тахион-сэмпай… видя, как ты бежала на Derby… правда думаю: если у ',
        tachyon.uma_sex_title,
        ' и есть предел — он, наверное, вот такой!',
      ]);
      await tachyon.say_and_wait([
        'Нет, то лишь ',
        tachyon.get_colored_name(),
        ' упёрлась в свой предел… ',
        tachyon.uma_sex_title,
        ' предела нет: я верю, у вас у всех бесконечная возможность',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'Тахион-сэмпай! Как вообще бежать так быстро, как ты…!',
      );
      await tachyon.say_and_wait(
        'О? Правда хочешь знать? Тогда завтра после обеда в корпус естественных…',
      );
      era.printButton('「кхм-кхм」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' кашляешь дважды, намекая ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        ' Мило болтавшая с младшими, ',
        tachyon.sex,
        ' на миг каменеет и за спинами людей продолжает, будто ничего не было',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' без умолку травит про свои скачки — и младшие ',
        tachyon.uma_sex_title,
        ' слушают, не отрываясь',
      ]);
      await era.printAndWait(
        'Снаружи — тёплая сцена, как обычный фан-сервис перед скачкой',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' вздыхаешь и вспоминаешь, что ',
        tachyon.get_colored_name(),
        ' говорила про опыт несколько месяцев назад',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait([
        'По собранным данным… ',
        tachyon.uma_sex_title,
        ' радуются скачке или бегу прежде всего потому, что их хвалят и поддерживают зрители…',
      ]);
      await tachyon.used_to_say_and_wait([
        'Всё-таки возраст средней и старшей школы: жаждать признания нормально',
      ]);
      await tachyon.used_to_say_and_wait(
        'Хотя я думаю, на меня это не подействует… но раз опыт — надо учесть все возможности',
      );
      await tachyon.used_to_say_and_wait(
        'Итого… верно, получить поддержку зрителей…',
      );
      era.println();
      await era.printAndWait(['На этом вы вдруг застряли']);
      era.println();
      await era.printAndWait(
        'Вспоминается лето несколько месяцев назад… и как после того вы отшивали все интервью',
      );
      await era.printAndWait([
        'В глазах публики ',
        tachyon.get_colored_name(),
        ' под гнётом СМИ и нашей же глухоты уже стала главным проблемным ребёнком среди действующих',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Короче, начнём с того, что можно взять внутри Трейсена',
      );
      era.drawLine();
      await era.printAndWait('И вот так, и эдак');
      await era.printAndWait([
        'Хотя видишь не в первый раз, но ',
        tachyon.get_colored_name(),
        ' по части общения всё так же чудовищно сильна…',
      ]);
      await era.printAndWait(
        'Отдай бы часть сил с тех опасных опытов на людские связи…',
      );
      await era.printAndWait([
        'И глядишь, не ',
        tachyon.sex,
        ' заворожила бы тебя',
      ]);
      await era.printAndWait(
        'Та фигура, что ради исследования бросает всё и в любом деле берёт лучшее',
      );
      await era.printAndWait(
        'И бег, что отбрасывает всё и оставляет всех позади',
      );
      await era.printAndWait([
        'И то и другое в одном лице — ',
        tachyon.get_colored_name(),
        ', вот кто кружит голову сильнее всего: ',
        tachyon.sex,
      ]);
      if (love >= 75 && tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait('…Впрочем');
        await era.printAndWait([
          'Смотреть, как любимую так обступают — пусть и своего пола — всё равно ревниво',
        ]);
        await era.printAndWait('В такой момент…');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' украдкой жмёшь кнопку, спрятанную в ладони',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'Тахион-сэмпай! Можно автограф?!',
        );
        await tachyon.say_and_wait('Хе-хе, конечно мож… нн!');
        era.println();
        await era.printAndWait([
          'В миг подписи сработала игрушка — и у ',
          tachyon.get_colored_name(),
          ' росчерк поехал',
        ]);
        await era.printAndWait(
          'К счастью, маленькая фанатка с глазами полными обожания на такую мелочь не смотрит',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' оборачивается и исподтишка сверлит ',
          you.get_colored_name(),
          ' взглядом',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' киваешь с виноватой улыбкой… и прибавляешь пульту одну ступень',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'B',
          'Тахион-сэмпай… сегодня на скачке обязательно выложись!',
        );
        await tachyon.say_and_wait('Хо-уу… о… обязательно…');
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'C',
          'Тахион-сэмпай… что с тобой?',
        );
        await tachyon.say_and_wait('Ни… ничего… просто… просто… гу…');
        era.printButton('「Время уже, пора в комнату отдыха готовиться」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' спешишь выручить ',
          tachyon.get_colored_name(),
          ': под взглядом — ',
          tachyon.sex,
          ' смотрит уже не зло, а так, что похоть не спрятать, — и ',
          tachyon.sex,
          ' уже с тобой в комнате отдыха',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…Ну тебя… не ревнуй так… ещё и младших… ',
          you.sex_code === 1 ? ' Мужчине бы и пошире быть' : '',
        ]);
        era.printButton('「Тогда я гляну, как там у Кафе на скачке」', 1, {
          disabled: !coffee_sank_hai,
        });
        era.printButton('「Тогда я тоже позабочусь о твоих младших」', 2);
        await era.input();
        await tachyon.say_and_wait(
          'Меня уже завёл(а) — и ещё к другим? Так нельзя',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' тихо обнимает сзади',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Перед скачкой… времени хватит?❤️ Брось эту скучную игрушку… разве не хочешь забить меня изнутри сразу?❤️',
        ]);
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' выходит на дорожку',
        ]);
        await era.printAndWait([
          'Впрочем… вот единственный раз, когда повезло: ',
          tachyon.sex,
          ' в глухом гоночном костюме, иначе все бы уже видели, как ',
          tachyon.sex,
          ' топорщит живот',
        ]);
      }
      era.printButton('「Время, Тахион」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'А, точно, тогда на дорожку… поздравьте меня уже после финиша, жеребята',
      );
      era.println();
      await era.printAndWait([
        'Напоследок ещё один томный взгляд — и младшие ',
        tachyon.uma_sex_title,
        ' снова взвизгивают',
      ]);
      era.printButton('「…Жеребята?」', 1);
      await era.input();
      await tachyon.say_and_wait([
        'У ',
        call_5,
        ' переняла… что, тоже хочешь, чтобы так звали? Моя маленькая свинка?',
      ]);
      era.printButton('…Нет, пожалуй, обойдусь', 1);
      await era.input();
      await tachyon.say_and_wait([
        'Ого, засмущался(ась)? Какая чистота, ',
        callname,
      ]);
      era.printButton(
        ' Всё-таки… железом не вышла, такое подражание только…',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' жалостливо смотришь на ',
        tachyon.get_colored_name(),
        ' в грудь',
      ]);
      await tachyon.say_and_wait([
        '…………',
        callname,
        '? Не соблаговолишь объяснить, что за «железо»?',
      ]);
      era.printButton('「…Нет, ничего」', 1);
      await era.input();
      await era.printAndWait(
        'Пока вы так дурачитесь, время скачки уже наступило',
      );
    };
    f.title = title;
    return f;
  })(),
  sank_hai_win: (() => {
    const title = 'Неизвестный фактор';
    /**
     * Plan A 专属（Plan B 禁止参加大阪杯）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        tachyon.get_colored_name(),
        '! Серия G1 нового года открывается ударом сверхсветового колокола! ',
        tachyon.get_colored_name(),
        ' великолепно пересекает финиш!',
      ]);
      era.println();
      await tachyon.print_and_wait('О, выиграла');
      await tachyon.print_and_wait([
        'Прозвучит, наверное, крайне неуважительно, но именно так на самом деле и думает ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
      await tachyon.print_and_wait([
        'На этом поле помешать той, кого зовут ',
        tachyon.get_colored_name(),
        ', может лишь одно — то, чем больна ',
        tachyon.sex,
        ' сама',
      ]);
      await tachyon.print_and_wait([
        'Теперь, когда травмы позади, — пусть это назовут гордыней, всё равно: ',
        tachyon.get_colored_name(),
        ' не может проиграть никому',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        ' беспокоится лишь об одном — о результате опыта',
      ]);
      await tachyon.print_and_wait('Но…');
      era.println();
      await tachyon.say_and_wait(
        'Ни одного возгласа… ну да, где уж такому наспех состряпанному заискиванию сработать… тут нужно время',
        true,
      );
      await tachyon.print_and_wait(
        'Да и будь эти возгласы, на забег они всё равно никак не повлияли бы',
      );
      await tachyon.print_and_wait(
        'Иначе места раздавали бы просто по популярности',
      );
      await tachyon.print_and_wait('Забег окончен… что ж, пора найти свинку…');
      era.println();
      await you.say_as_passer_by_and_wait('Зритель A', 'Вот это да!');
      era.println();
      await tachyon.say_and_wait('…?');
      await you.say_as_passer_by_and_wait('Зритель B', [
        'Какой быстрый бег… так это и есть ',
        tachyon.get_colored_name(),
        '?',
      ]);
      await you.say_as_passer_by_and_wait(
        'Зритель C',
        'Из-за прессы я думал, что она сплошная проблема… да пусть и проблема, на поле-то судят по результату!',
      );
      await you.say_as_passer_by_and_wait('Зритель D', [
        'Да у неё и в классике послужной список против всякого здравого смысла — и вот такая ',
        tachyon.uma_sex_title,
        ' почему-то громит всех в Twinkle Series! Тут хоть из Dream Cup кого приведи, всё равно не обыграет!',
      ]);
      await you.say_as_passer_by_and_wait(
        'Зритель E',
        'Смотрю за ней ещё с классики, и сколько ни смотри — всё равно слишком сильна!',
      );
      era.println();
      await tachyon.say_and_wait('Это…', true);
      era.println();
      await tachyon.print_and_wait(
        'Будто кадр застыл, и лишь спустя миг после финишной черты грянуло',
      );
      await tachyon.print_and_wait('Ликование всей трибуны');
      await tachyon.print_and_wait(
        'Преувеличения, раздутые до небес, похвалы без всяких оснований, нелепейшее бахвальство',
      );
      await tachyon.print_and_wait(
        '…Странно. Разве в этом забеге было что-то особенное?',
      );
      era.println();
      await tachyon.say_and_wait(
        'Нет… так было всегда, просто… просто до сих пор не замечала',
        true,
      );
      await tachyon.print_and_wait('Тревога, что ноги не выдержат');
      await tachyon.print_and_wait('Тревога, что опыт провалится');
      await tachyon.print_and_wait('Тревога, что застрянешь на месте');
      await tachyon.print_and_wait(
        'Вот почему… они не то чтобы не звучали, просто я их не слышала: они были неважны',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Тахион-семпай, вы великолепны!',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        'Всё-таки Тахион-семпай и есть сильнейшая ',
        tachyon.uma_sex_title,
        '!',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'Тахион-семпай, победы вам!',
      );
      await tachyon.print_and_wait('На самом деле, они были всегда');
      await tachyon.print_and_wait([
        'На Satsuki Sho тот человек наверняка кричал 「Обгони скорость света! ',
        tachyon.get_colored_name(),
        '!」',
      ]);
      await tachyon.print_and_wait([
        'На Japan Derby тот человек наверняка кричал 「Дай мне увидеть возможности, что таит ',
        tachyon.uma_sex_title,
        '!」',
      ]);
      await tachyon.print_and_wait([
        'На Kikuka Sho тот человек наверняка кричал 「Докажи мне, что травмы ',
        tachyon.uma_sex_title,
        ' можно превозмочь!」',
      ]);
      era.println();
      await tachyon.print_and_wait('А потом… был Osaka Hai');
      await you.say_and_wait([
        tachyon.get_colored_name(),
        ' и её возможности — это далеко не только тройная корона!',
      ]);
      era.println();
      await tachyon.print_and_wait('А-а');
      await tachyon.print_and_wait('В этот раз я наконец услышала');
      era.println();
      await tachyon.print_and_wait([
        'Оказывается, ',
        tachyon.get_colored_name(),
        ' всё это время была любима',
      ]);
      await tachyon.print_and_wait('фанатами, младшими, всем миром');
      await tachyon.print_and_wait('и ещё… в первом ряду трибун');
      await tachyon.print_and_wait(
        'тот человек, который сам не светится, а всё равно ярче всех',
      );
      era.println();
      await tachyon.print_and_wait('Честное слово, вот дурак');
      await tachyon.print_and_wait('На забеге ведь выкрикивал такие слова');
      await tachyon.print_and_wait(
        'А лицом к лицу выдаёт только эти корявые похвалы?',
      );
      await tachyon.print_and_wait('А если бы я не услышала?');
      await tachyon.print_and_wait(
        'Разве вся эта поддержка не пропала бы зря?',
      );
      await tachyon.print_and_wait(
        'Поддержка… разве её кричат не для того, чтобы тот, кого поддерживают, услышал?',
      );
      await tachyon.print_and_wait(
        '…Тогда настоящая поддержка — та, что кричится не ради того, чтобы её услышали?',
      );
      era.drawLine();
      await tachyon.say_and_wait(['Я вернулась… ', callname]);
      era.printButton(
        '「С возвращением, Тахион, с ногами точно всё в порядке!」',
        1,
      );
      era.printButton('「Сегодня бежала всё так же — правда, потрясающе!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '…Я уж думала, что определение поддержки наконец прояснилось. Всё из-за тебя — придётся исследовать заново',
      );
      era.println();
      await you.say_and_wait('Э-э————почему!?');
      era.println();
      await tachyon.say_and_wait(
        'В наказание… сегодняшнее зелье глушит высшие познавательные функции мозга…',
      );
      await tachyon.say_and_wait(
        'Или, говоря попроще, сыворотка правды. Выпьешь — и обстоятельно обсудим твой взгляд на сегодняшний забег',
      );
      era.println();
      await you.say_and_wait('Э-э—————!?');
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_14: (() => {
    const title = 'Фестиваль благодарности фанатам';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, you, callname, call_25) => {
      await tachyon.say_and_wait([
        'Итак, по результатам моего опыта… на Osaka Hai фанаты…',
      ]);
      await tachyon.say_and_wait(
        'и один человек — их пыл породил силу, и я превзошла прежнюю свою скорость. Значит, у чувств всё-таки есть некоторая сила',
      );
      era.printButton(
        '「Не думал(а), что Тахион поверит в такое идеалистическое понятие」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        'Я верю только в истину и возможность. Пока есть эта возможность, я поставлю на кон всё… ',
        callname,
        ', ты ведь тоже?',
      ]);
      await tachyon.say_and_wait([
        'Материализм, идеализм — всё равно. Лишь бы служило мне, дало превзойти предел и дойти до края возможности… пусть даже это будет ',
        call_25,
        ' со своим другом — одолжить его я не постесняюсь',
      ]);
      await tachyon.say_and_wait(
        '…Хотя если объяснять разумно, дело, наверное, в активности коры головного мозга и центральной нервной системы. Проще говоря… хе-хе, легальный стимулятор?',
      );
      era.printButton('「!?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'Хе-хе, шучу… Но по сути прибавка к телесным данным от такого возбуждения — если оно бессознательное, то и порог возбуждения растёт лишь до предела',
      );
      await tachyon.say_and_wait([
        'По крайней мере уж точно не так высоко, как намерили тогда на Osaka Hai… Неужели дело в моём собственном настрое…',
      ]);
      era.printButton('「Тахион?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…Нет, ничего, нужна ещё проверка, только и всего. Важнее другое: я хочу копнуть глубже… в понятие 『фанаты』',
      );
      era.printButton('「Фанаты…」', 1);
      era.printButton('「То есть…」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Неверно… Я собираюсь поучаствовать в фестивале благодарности фанатам',
      );
      await tachyon.say_and_wait(
        'Контакт с близкого расстояния… На этот раз целей две. Если пойдёт гладко… надеюсь закрыть обе разом',
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait('Фанат A', [
        'Тахион ',
        tachyon.adult_sex_title,
        '! Можно с вами сфотографироваться!',
      ]);
      await tachyon.say_and_wait(
        'Хе-хе, разумеется. Нужна какая-то особая поза?',
      );
      await you.say_as_passer_by_and_wait(
        'Фанат A',
        'Н-нет, не нужно, достаточно вот так скрестить руки на груди!',
      );
      await tachyon.say_and_wait('Вот так?');
      await you.say_as_passer_by_and_wait('Фанат A', 'С-спасибо огромное!');
      era.println();
      await you.say_as_passer_by_and_wait(
        'Фанат B',
        'Тахион! Я давно за тебя болею! На Takarazuka Kinen тоже удачи',
      );
      await tachyon.say_and_wait('Вот как, вот как? Спасибо за поддержку');
      await you.say_as_passer_by_and_wait(
        'Фанат B',
        'Да, надеюсь, Тахион и дальше будет бежать так, чтобы завораживать ещё сильнее!',
      );
      await tachyon.say_and_wait('Непременно, ха-ха-ха-ха!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' размеренно и без запинки отвечает подходящим фанатам',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' в режиме обслуживания и в обычной жизни — разница…',
      ]);
      await era.printAndWait([
        'Иногда разница так велика, что начинаешь сомневаться, с какой же стороны ',
        tachyon.sex,
        ' настоящая',
      ]);
      await era.printAndWait('Довольно скоро мероприятие закончилось');
      era.println();
      await tachyon.say_and_wait('Мм… Собрались весьма любопытные данные');
      await tachyon.say_and_wait(
        'Я свела воедино всех сегодняшних зрителей забега — и тех, кто пришёл за рукопожатием и автографом, и тех, кто за снимком——',
      );
      await tachyon.say_and_wait(
        'далее для краткости 『фанаты』. Цель просмотра забега, а также сердцебиение, дыхание, пульс и скорость отклика при встрече со мной…',
      );
      await tachyon.say_and_wait(
        'По разным высказываниям фанатов сделан вывод',
      );
      await tachyon.say_and_wait([
        '————',
        tachyon.get_colored_name(),
        ', для этих фанатов — нечто вроде награды в опыте',
      ]);
      await tachyon.say_and_wait(
        'Вкладывают усилия под названием поддержка и надеются получить в награду отклик…',
      );
      era.printButton('「…Я так не думаю」', 1);
      era.printButton(
        '「Болеть за Тахион — это не так уж сложно устроено」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '…Мм, самое слабое место этого рассуждения вот в чём: ',
        callname,
        ', а ты-то ради чего меня поддерживаешь',
      ]);
      await tachyon.say_and_wait([
        'Satsuki Sho, Japan Derby, Kikuka Sho, и ещё Osaka Hai… ты ведь везде за меня болел(а)',
      ]);
      await tachyon.say_and_wait(
        'Но в отличие от них… ты, кто был(а) со мной рядом, знал(а): тогда я ещё не считала поддержку фанатов переменной опыта, достойной особого внимания',
      );
      await tachyon.say_and_wait(
        'Значит, твои возгласы и поддержка не приносили никакой отдачи — в отличие от твоей поддержки моих исследований…',
      );
      await tachyon.say_and_wait(
        'Ведь поддерживая мои исследования, ты получал(а) тот бег и те забеги, которые хотел(а) увидеть…',
      );
      await tachyon.say_and_wait(
        'А вот с болением и поддержкой — совершенно не понимаю',
      );
      era.println();
      await era.printAndWait([
        'Услышав вопрос, что задала ',
        tachyon.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' невольно на миг теряет дар речи',
      ]);
      await era.printAndWait([
        'Ответить на вопрос, который задала ',
        tachyon.get_colored_name(),
        ', на самом деле совсем не трудно',
      ]);
      await era.printAndWait(
        'Но… можно ли такие вещи, что живут в чувствах, и правда объяснить словами',
      );
      await era.printAndWait([
        'Видя, что ',
        you.get_colored_name(),
        ' не отвечает, ',
        tachyon.get_colored_name(),
        ' продолжает',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Раз так, сегодняшний опыт можно счесть удавшимся лишь наполовину…',
      );
      await tachyon.say_and_wait([
        'Дальше Takarazuka Kinen. На этот раз надо целиком измерить, как поддержка фанатов влияет на данные',
      ]);
      await era.printAndWait([
        'Среди этого смятения фестиваль благодарности фанатам, где выступала ',
        tachyon.get_colored_name(),
        ', подошёл к концу',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_a: (() => {
    const title = 'Все как один';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        'Когда вы добираетесь до ипподрома Hanshin, трибуны уже гудят от голосов',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait('Зритель A', [
        'Всё-таки главная надежда — это ',
        tachyon.get_colored_name(),
        ', как ни крути',
      ]);
      await you.say_as_passer_by_and_wait('Зритель B', [
        tachyon.get_colored_name(),
        '? Это же… та самая, что раньше…',
      ]);
      await you.say_as_passer_by_and_wait('Зритель C', [
        'Сразу слышно, что прошлый Osaka Hai ты не смотрел! Раз ',
        tachyon.uma_sex_title,
        ' способна бежать вот так, плохой она быть не может!',
      ]);
      await you.say_as_passer_by_and_wait(
        'Зритель D',
        'Хватит уже этой теории, что бег отражает характер… Хотя бег и правда ни на чей не похож',
      );
      await you.say_as_passer_by_and_wait('Зритель E', [
        'Давай! Пробеги ещё раз как на Osaka Hai!',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Ой-ой… А я, оказывается, популярна. И все поминают Osaka Hai… Слушай, мои прошлогодние забеги были настолько скучными?',
      );
      era.printButton('「Прошлый год тоже был великолепен」', 1);
      era.printButton('「Просто Osaka Hai был особенно великолепен」', 2);
      await era.input();
      await era.printAndWait([
        'Прошлогодняя ',
        tachyon.get_colored_name(),
        ' в беге, кроме слепящего света, несла ещё и налёт призрачности',
      ]);
      await era.printAndWait([
        'Поэтому, когда досматриваешь забег, где бежала ',
        tachyon.sex,
        ', вместо восхищения приходит скорее тревога',
      ]);
      await era.printAndWait([
        'Страшно, что ',
        tachyon.sex,
        ' вот так и обратится светом, и исчезнет',
      ]);
      await era.printAndWait('А когда налёт призрачности исчез');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' и её бег — это уже искусство',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Приму это за похвалу. Что ж, такая обстановка как раз годится для второго опыта',
      );
      await tachyon.say_and_wait(
        'Тогда, на Osaka Hai… по ходу забега подтвердить не вышло. Теперь сцена G1 и фанаты, которые болеют. Хе-хе, интересно, до какой отметки удастся дойти',
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_a: (() => {
    const title = 'Рождение мифа';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Финал первой половины года покорён, и в миф обращается ',
        tachyon.get_colored_name(),
        '!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ', как и следовало ожидать, первой пересекает финишную черту',
      ]);
      await era.printAndWait(
        'По всему ипподрому гремят рукоплескания и ликование',
      );
      await era.printAndWait(
        'В воздухе кружит конфетти — снова блистательный и великолепный забег',
      );
      era.println();
      await era.printAndWait(
        'Вдруг с трибун доносится изумлённый вскрик, и шум становится ещё оживлённее',
      );
      await era.printAndWait([
        'Та самая, что после забега всегда небрежно махнёт рукой и уйдёт, — ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait(
        'а сейчас всё ещё остаётся на поле и щедро отвечает на ликование фанатов',
      );
      await era.printAndWait(
        'А этот жест вызывает ещё более бурную поддержку — голоса взмывают до небес',
      );
      era.drawLine({ content: 'После ухода с поля' });
      await tachyon.say_and_wait('…Хе-хе');
      era.printButton('「Тахион!」', 1);
      era.printButton('「Сегодня тоже великолепно!」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'Мм? А, важнее другое, ',
        callname,
        '! Смотри, результаты замеров!',
      ]);
      await tachyon.say_and_wait([
        'В этот опыт, в отличие от Osaka Hai, добавлено больше переменных ликования. По разбору данных после забега',
      ]);
      await tachyon.say_and_wait(
        'оно и правда помогает выходной мощности мышц… Прирост больше, чем даёт обычный подъём настроения…',
      );
      await tachyon.say_and_wait(
        'Проще говоря, опыт удался! Поддержка зрителей и правда влияет, ха-ха-ха-ха-ха-ха!',
      );
      era.println();
      era.print('…Не очень-то понятно, но опыт, похоже, всё-таки удался');
      era.printButton('「Поздравляю!」', 1);
      era.printButton('「Значит, до возможности ещё на шаг ближе!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Хе-хе… Кое-что ещё не выяснено, но применять это в забеге уже можно без помех!',
      );
      await tachyon.say_and_wait(
        'Хотя… выходит, мне и правда приятно от оваций… Всё-таки существо общественное, так, что ли, сказать…',
      );
      era.printButton(
        '「Все всерьёз болеют за Тахион. Если Тахион им ответит, они точно обрадуются」',
        1,
      );
      era.printButton(
        '「Я всерьёз болею за Тахион. Было бы здорово, если бы Тахион это радовало」',
        2,
      );
      if (era.get('love:32') < 50) {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            'Хе-хе, и то верно… Тогда в следующий раз отвечу им. Сочтём это фан-сервисом в награду за поддержку',
          );
          era.println();
          await era.printAndWait([
            'Дело не в награде… хочется сказать это вслух, но ',
            tachyon.get_colored_name(),
            ', наверное, всё равно не поймёт',
          ]);
        } else {
          era.println();
          await tachyon.say_and_wait(
            'Твои овации… да, я их и правда услышала…',
          );
          await tachyon.say_and_wait(
            'Кстати, ты ведь умеешь говорить такие слова — так почему каждый раз после забега выдаёшь эти замшелые банальности?',
          );
        }
      } else {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            'Что ж, в это все ты ведь тоже входишь… И какого отклика ты хочешь от меня в благодарность♡',
          );
        } else {
          await tachyon.say_and_wait(
            'Вот как. Тогда чем же мне отблагодарить своего самого большого фаната',
          );
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' смотрит обольстительным взглядом на ',
          you.get_colored_name(),
        ]);
        await era.printAndWait([
          'На миг ',
          you.get_colored_name(),
          ' и вовсе забывает слова',
        ]);
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' — их Takarazuka Kinen завершён!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_31: (() => {
    const title = 'Чужая возможность';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_2 爱丽速子对无声铃鹿的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, call_2, love) => {
      await era.printAndWait('Солнце, песок');
      await era.printAndWait([
        'И по песку бегут ',
        tachyon.uma_sex_title,
        ' гурьбой',
      ]);
      era.printButton('「Вот это молодость」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '…Глядя на это, ещё и такое сказать — тренер- ',
        you.adult_sex_title,
        ', вы тоже… чего и ждать от тренера Тахион-сэмпай',
      ]);
      era.println();
      await era.printAndWait([
        'На летнем пляже ',
        tachyon.uma_sex_title,
        ' гоняются друг за другом',
      ]);
      await era.printAndWait('Как салки');
      await era.printAndWait(
        'Одна против многих, а почему-то бежит и трусит сторона, где больше людей',
      );
      await era.printAndWait([
        'А та, кого боятся, — самая громкая за первую половину года ',
        tachyon.uma_sex_title,
        ', и ещё ',
        you.get_colored_name(),
        ' ведёт как подопечную ',
        tachyon.uma_sex_title,
        ', ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Ого-ого… вот это да: нынешние дети даже горькое лекарство впрок уже не понимают?',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '…Если бы просто горько — ещё ладно',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'Зелье Тахион-сэмпай… на вкус ничего, ничего, но…!',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'D',
        'Чтобы тело светилось… это же стыд смертный!',
      );
      era.println();
      await era.printAndWait('…э?');
      await era.printAndWait([
        you.get_colored_name(),
        ' смотришь на ',
        tachyon.uma_sex_title,
        ' перед собой… на солнце почти не видно, но на руках, плечах или ногах и правда слабый свет',
      ]);
      await era.printAndWait('Только почему светятся сплошь странные места');
      await era.printAndWait([
        'А? И ещё одна ',
        tachyon.uma_sex_title,
        ' — свет с внутренней стороны бедра…',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Эффект этого зелья — светить места, где кровь гонит быстрее, и держаться должен только тот час тренировки,',
      );
      await tachyon.say_and_wait(
        'но побочка разгоняет активность белка UMA—A в местах, которых коснулись в возбуждении, а свечение от крови как раз через UMA—A',
      );
      era.drawLine();
      await tachyon.say_and_wait(
        'Короче… светится там, где было касание с тем, кто по сердцу, или от кого стучит сердце',
      );
      era.println();
      await era.printAndWait('А, вот оно');
      await era.printAndWait('Теперь понятно, отчего светятся плечи и руки');
      await era.printAndWait('…Стой, тогда внутренняя сторона бедра…');
      await era.printAndWait([
        you.get_colored_name(),
        ' глядишь — ',
        tachyon.sex,
        ' вдруг заливается краской, и тебе уже всё ясно',
      ]);
      await era.printAndWait('…Нынешние дети играют уже не по-детски');
      era.println();
      await tachyon.say_and_wait(
        'Короче… это зелье в основном подмога: без упорной тренировки толку мало',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'Мы… мы будем тренироваться! Правда не схалтурим! Так что зелье…',
      );
      await tachyon.say_and_wait(
        'Хе-хе, так не пойдёт: вместе они дают лучший рост, так что… пей смирно!',
      );
      era.println();
      await era.printAndWait([
        'В мгновение ока ',
        tachyon.get_colored_name(),
        ' — пока ',
        tachyon.uma_sex_title,
        ' теряют бдительность, рывком к одной ',
        tachyon.uma_sex_title,
        ' и молнией вливает зелье — ',
        tachyon.sex,
        ' уже с полным ртом',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Смотрите… навык вливания, вышколенный на ',
        callname,
        '! А-ха-ха-ха-ха-ха!',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'иия———',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'гхва————',
      );
      era.println();
      await era.printAndWait([
        'Как ни крути, это G1- ',
        tachyon.uma_sex_title,
        ', к тому же та, кого ',
        you.get_colored_name(),
        ' признаёт самой быстрой ',
        tachyon.uma_sex_title,
        ', так что эти недоросшие младшие — не соперницы для ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('За несколько минут весь пляж усеян «телами»');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'Та… Тахион-сэмпай что, будто другим человеком стала',
      );
      era.println();
      await era.printAndWait([
        'Выходит, чтобы в глазах младших держать удобную для опытов маску, ',
        tachyon.get_colored_name(),
        ' перед ними обычно играет зрелую сэмпай.',
      ]);
      await era.printAndWait([
        'Если уж говорить — вот это и есть ',
        tachyon.get_colored_name(),
        ' как ',
        tachyon.uma_sex_title,
        ': её натура',
      ]);
      await era.printAndWait(['Впрочем… ', tachyon.sex, ' права.']);
      era.printButton('「Тахион и правда… сильно изменилась」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминаешь, что несколько дней назад ',
        tachyon.get_colored_name(),
        ' сказала',
      ]);
      await tachyon.used_to_say_and_wait(
        'Хотим стать такими же сильными, как Тахион-сэмпай… так мне сказали эти дети!',
      );
      await tachyon.used_to_say_and_wait([
        'Ну же! ',
        callname,
        '! Ради этих детей надо, чтобы ',
        tachyon.couple_title,
        ' получили самое подходящее зелье!',
      ]);
      await era.printAndWait([
        'Нет: не «ради опыта пусть ',
        tachyon.couple_title,
        ' идут на пробу»',
      ]);
      await era.printAndWait([
        'Нет: не «составлять зелья, раз есть ',
        tachyon.couple_title,
        ' »',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Так и есть… куда делась та добрая Тахион-сэмпай…',
      );
      era.println();
      await tachyon.say_and_wait('Ого~~ тут ещё жеребёнок остался?');
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', 'ии!!!');
      era.println();
      await era.printAndWait([
        'Смотришь: последняя, спрятавшаяся рядом с ',
        you.get_colored_name(),
        ', малышка- ',
        tachyon.uma_sex_title,
        ' тоже не ушла от ',
        tachyon.get_colored_name(),
        ': повалила и залила зелье. Жестокий пляжный опыт кончается полной победой ',
        tachyon.get_colored_name(),
        '.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Ну что, ',
        callname,
        ', начнём сегодняшний опыт',
      ]);
      await era.printAndWait('Но это одно не меняется');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' всё так же гонится за пределом и за его пробоем — всё та же ',
        tachyon.uma_sex_title,
      ]);
      era.printButton('「Так какая тема опыта на сегодня?」', 1);
      await era.input();
      if (love < 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          '…Ты в курсе? Недавно ',
          call_2,
          ', кажется, научилась бегать по воде',
        ]);
        await era.printAndWait('…э?');
        era.println();
        await tachyon.say_and_wait(
          'По расчётам, если нестись по воде быстрее 30 м в секунду, и правда выйдет что-то вроде лёгкого шага: ступать по воде',
        );
        era.println();
        await era.printAndWait('…Стой, 30 м? В секунду?');
        await era.printAndWait(
          'Не успеваешь оглянуться — к поясу уже привязан канат',
        );
        await era.printAndWait([
          'А ',
          tachyon.get_colored_name(),
          ' уже на береговом гидроцикле',
        ]);
        await you.say_and_wait(
          '…Почему это ты на гидроцикле, а бежать по воде должна я?!',
        );
        era.println();
        await tachyon.say_and_wait(['Давай, ', callname, ', у тебя получится']);
        era.println();
        await era.printAndWait('Слова ещё в воздухе — и тебя срывает с места');
        await era.printAndWait([
          'Вышел ли лёгкий шаг по воде — неизвестно, но по словам малышек- ',
          tachyon.uma_sex_title,
          ', что видели этот силуэт, это больше походило на камень, который пускают блинчиком',
        ]);
      } else {
        await tachyon.say_and_wait('На сегодня… возьмём опыт позанятнее');
        era.println();
        await era.printAndWait([
          'Вдруг ',
          tachyon.get_colored_name(),
          ' при всех младших берёт ',
          you.get_colored_name(),
          ' за руку',
        ]);
        era.printButton('「Та… Тахион?」', 1);
        await era.input();
        await era.printAndWait([
          'Младшие, что валялись на песке и притворялись трупами, вдруг поднимают глаза и смотрят на вас двоих',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' склоняется к ',
          you.get_colored_name(),
          ' и шепчет на ухо',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Говорила же: хочу понаблюдать за зрителями, или, скажем, за фанатами',
        );
        await tachyon.say_and_wait([
          'Сейчас — провокация чувства… к примеру, если я тебя здесь поцелую, ',
          tachyon.couple_title,
          ' как среагируют?',
        ]);
        era.println();
        await era.printAndWait([
          'Может, солнце слишком жжёт — ',
          you.get_colored_name(),
          ' не решается поднять глаза на ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Вдруг ',
          tachyon.get_colored_name(),
          ' тянется губами к ',
          you.get_colored_name(),
          ' — телом заслоняет, и со стороны совсем как поцелуй',
        ]);
        await era.printAndWait([
          'Стоящие вокруг ',
          tachyon.uma_sex_title,
          ' тихо ахают',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Странно… невероятно. ',
          callname,
          ', не знаю почему: стоило ',
          tachyon.couple_title,
          ' зазвучать — и действовать захотелось сильнее',
        ]);
        await tachyon.say_and_wait(
          'Эффект Калигулы? В публичном месте от такого стыдно — и оттого хочется ещё сильнее',
        );
        era.println();
        await tachyon.say_and_wait('чмок❤');
        era.println();
        await era.printAndWait('Поцеловала');
        await era.printAndWait('Даже отговорки себе больше не подобрать');
        era.println();
        await tachyon.say_and_wait(
          'Что ж… продолжать? Давайте послушаем, что скажет зал❤',
        );
        era.println();
        await era.printAndWait([
          'На последней фразе ',
          tachyon.get_colored_name(),
          ' вдруг повышает голос',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' оборачиваешься к пляжу — а там юные лица, все красные от того, что видят',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Похоже… всем зашло. Не ты ли на Такарадзуке мне толковала про фан-сервис… или как там?',
        ]);
        era.println();
        await era.printAndWait([
          'Плохо: те слова, которыми тогда уговаривал(а) ',
          tachyon.get_colored_name(),
          ', и правда бумерангом?',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' обнимает ',
          you.get_colored_name(),
          ' и следом валит ',
          you.get_colored_name(),
          ' на песок',
        ]);
        era.println();
        await tachyon.say_and_wait('Ещё… хочешь продолжить?');
        era.printButton('「Не хочу」', 1);
        era.printButton('「…Не хочу」', 2);
        await era.input();
        await era.printAndWait(
          'Как ни крути, даже отступив на десять тысяч шагов: при таком количестве глаз это уже через край',
        );
        await era.printAndWait([
          'И если присмотреться, у ',
          tachyon.get_colored_name(),
          ' на лице тоже лёгкий румянец… то ли стыд, то ли возбуждение — кто ж разберёт',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Тогда… потрудись собрать у этих малышек- ',
          tachyon.uma_sex_title,
          ' данные, пока они возбуждены',
        ]);
        era.println();
        await era.printAndWait([
          'Вдруг ',
          tachyon.get_colored_name(),
          ' слезает с ',
          you.get_colored_name(),
          '.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Если ещё захочешь продолжить… принеси данные и тогда ко мне❤',
        );
        era.println();
        await era.printAndWait([
          'Намёк без шёпота, на полный голос, — и окружающие ',
          tachyon.uma_sex_title,
          ' снова ахают пачками',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' трёшь нос: данные собрать легко, а сплетни будут, вернёшься или нет',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_32: (() => {
    const title = 'Опыт со сменой мест';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} kobe_hai 神户新闻杯（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      kobe_hai,
      arim_kin,
    ) => {
      await era.printAndWait('Так и прошли весёлые дни летних сборов');
      await era.printAndWait(
        'Вы собираетесь вернуться в академию на школьном автобусе',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Т-Тахион-семпай! П-подождите, пожалуйста!',
      );
      era.println();
      await era.printAndWait('Мм?');
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' разом недоумённо оборачиваются и смотрят на малышку с огромной белой звёздочкой в волосах, а она — ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        'Этой осенью… я выхожу на ',
        kobe_hai,
        '… Тахион-семпай… придёте тогда за меня поболеть?!',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Поболеть… за тебя?',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Да! Хочу, чтобы Тахион-семпай увидела, как я бегу!',
      );
      era.println();
      await era.printAndWait([
        kobe_hai,
        '… забег в конце сентября. Если просто посмотреть со стороны, это ничему важному не помешает',
      ]);
      await era.printAndWait([
        'Так что весь вопрос в одном: захочет ли ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Мм… Можно. На то время других планов пока нет',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Правда?! Здорово! Я постараюсь и выиграю!',
      );
      era.println();
      await era.printAndWait([
        'Малышка, а она ',
        tachyon.uma_sex_title,
        ', в восторге вскакивает и убегает вприпрыжку — по ней и не скажешь, что в неё только что силой влили зелье',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…До чего же они ослепительны, возможности этих детей',
      );
      era.printButton('「Что за стариковский тон」', 1);
      era.printButton('「Но в моих глазах ярче всех сияет именно Тахион!」', 2);
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait(
          'Вот как? Тогда… ты обязан(а) смотреть на меня всё время. Ведь моя возможность уже без тебя не обходится♡',
        );
        await era.printAndWait([
          'Летние сборы окончены, дальше — ',
          arim_kin,
          '! …Но перед этим — ',
          kobe_hai,
          ' — смотрим с трибун!',
        ]);
      } else if (love >= 50) {
        await tachyon.say_and_wait(
          'Что ж… смотри как следует, куда способна дойти моя возможность',
        );
      } else if (relation >= 225) {
        await tachyon.say_and_wait(
          'Хе-хе, разумеется. Этим детям до того, чтобы меня превзойти, ещё очень далеко!',
        );
      } else if (relation >= 0) {
        await tachyon.say_and_wait(
          'Слушай… ты умрёшь, если не скажешь какую-нибудь приторную гадость?',
        );
      } else {
        await tachyon.say_and_wait(
          'Когда на тебя возлагает надежды такой человек, как ты… до чего же противно',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_35: (() => {
    const title = 'Фактор · установка стороннего наблюдателя';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait(
        'Хотя если подумать… это, пожалуй, первый раз, когда я смотрю забег с трибун',
      );
      era.println();
      await era.printAndWait(['Сегодня Kobe Shimbun Hai']);
      await era.printAndWait([
        'День, когда ',
        tachyon.get_colored_name(),
        ' по приглашению младшей пришла посмотреть забег',
      ]);
      era.printButton('「Ты ведь в основном сама выходишь бежать」', 1);
      era.printButton('「Ты ведь в основном смотришь записи забегов」', 2);
      await era.input();
      await era.printAndWait([
        'Для ',
        tachyon.get_colored_name(),
        ', кроме собственных забегов, поводов появляться на ипподроме, пожалуй, и нет',
      ]);
      await era.printAndWait(
        'Что до разбора данных забега — записи после гонки дают их больше, чем просмотр с трибун',
      );
      await era.printAndWait(
        'Так что сегодня и правда впервые — вернее, впервые она смотрит забег как зритель, а не с исследовательской точки зрения',
      );
      era.println();
      await tachyon.say_and_wait(
        '…Ощущение прямо на месте… всё-таки очень шумно',
      );
      era.println();
      await you.say_as_passer_by_and_wait('Фанат A', 'Давай!');
      await you.say_as_passer_by_and_wait('Фанат B', 'Обязательно выиграй!');
      await you.say_as_passer_by_and_wait('Фанат C', [
        'Kobe Shimbun Hai хоть и называют пробным забегом перед Kikuka Sho, но на деле 2400 метров и проведение на ипподроме Hanshin — оба этих пункта проверкой для Kikuka Sho не считаются…',
      ]);
      await you.say_as_passer_by_and_wait('Фанат C', [
        '…Поэтому трудно утверждать, что та ',
        tachyon.uma_sex_title,
        ', что победила на Kobe Shimbun Hai, обязательно возьмёт и Kikuka Sho',
      ]);
      await you.say_as_passer_by_and_wait('Фанат D', 'С чего вдруг про это');
      era.println();
      await tachyon.say_and_wait(
        'Так вот что обычно творится на трибунах перед моими забегами?',
      );
      era.printButton('「Примерно так, а то и пооживлённее」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…И то верно, это же G1. Ну, чувства их понять можно, но кричать в такой момент всё равно бесполезно',
      );
      era.printButton('「Полезно или нет… это не так считается」', 1);
      era.printButton('「Досмотри — и поймёшь」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Досмотреть, значит… О? Пошли в стартовые ворота',
      );
      era.drawLine();
      await tachyon.print_and_wait('Та девочка вошла в ворота');
      await tachyon.print_and_wait([
        'Но, честно говоря, в этом забеге для ',
        tachyon.get_colored_name(),
        ' по-настоящему стоящих внимания моментов немного',
      ]);
      await tachyon.print_and_wait(
        'Та девочка, в которой есть возможность, — безусловно, самое главное',
      );
      await tachyon.print_and_wait(
        '…Но помимо этого забег — всего лишь G2, ограниченный классик-уровнем',
      );
      era.println();
      await tachyon.say_and_wait('Можно сказать, возможности проиграть нет');
      era.println();
      await tachyon.print_and_wait(
        'И в предстартовом рейтинге она, само собой, первая',
      );
      await tachyon.print_and_wait(
        'Время, место и люди — всё за неё, проиграть невозможно',
      );
      await tachyon.print_and_wait(
        'Предстартовый разбор даёт вероятность победы 97.46%',
      );
      era.println();
      await tachyon.print_and_wait('И всё же…');
      era.println();
      await you.say_as_passer_by_and_wait('Зритель A', 'Не проиграй!');
      await you.say_as_passer_by_and_wait('Зритель B', [
        'Давай! Ещё есть шанс! По внешней — пусть ',
        tachyon.sex,
        ' останется позади!',
      ]);
      await you.say_as_passer_by_and_wait(
        'Зритель C',
        'Не сдавайся! Точно догонишь!',
      );
      era.println();
      await tachyon.print_and_wait([
        'Почему они всё ещё болеют за отставшую ',
        tachyon.uma_sex_title,
        ', за ту, что позади',
      ]);
      await tachyon.print_and_wait('Очевидно же, что догнать уже не выйдет');
      await tachyon.print_and_wait('…Не понимаю');
      await tachyon.print_and_wait([
        'Нет, понять можно. Пусть это и напрасно, но хочется кричать за ту ',
        tachyon.uma_sex_title,
        ', которую поддерживаешь, — вот это я всё-таки понимаю',
      ]);
      await tachyon.print_and_wait(
        'Пусть я и безумный учёный, но я не робот, не понимающий человеческой природы',
      );
      await tachyon.print_and_wait('Но почему же я сама…');
      era.println();
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Догоняет! Идущая позади ',
        tachyon.uma_sex_title,
        ' догоняет!',
      ]);
      era.println();
      await tachyon.say_and_wait('!');
      await tachyon.say_and_wait('…Давай');
      await tachyon.say_and_wait('Давай! Не проиграй!');

      era.printButton('「!」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        'Комментатор',
        'Фи—————ниш! Первая — номер один из первых ворот—————',
      );
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' кричит в поддержку, но её голос тонет в овациях и криках всего ипподрома',
      ]);
      await era.printAndWait([
        'Во всём зале её услышал, пожалуй, только один — тот, рядом с кем стоит ',
        tachyon.sex,
        ', а именно ',
        you.get_colored_name(),
        ', и ещё…',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Семпай! Я слышала, как вы за меня кричали! Спасибо за поддержку, семпай… В тот миг я почувствовала, как во всём теле вдруг прибыло сил!',
      );
      era.println();
      await tachyon.say_and_wait(
        '…Хе-хе, бежала неплохо. И впредь продолжай стараться',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', 'Да!');
      era.println();
      await era.printAndWait([
        'Kobe Shimbun Hai окончен. ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' покидают ипподром',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Теоретически всё уже подтверждено, но вот так, со стороны… вернее, глазами участника — это всё-таки впервые',
      );
      await tachyon.say_and_wait(
        'И другие дети, и та девочка — все в конце… и правда превзошли предел',
      );
      era.println();
      await era.printAndWait([
        'В сегодняшнем забеге сразу несколько ',
        tachyon.uma_sex_title,
        ' — все они',
      ]);
      await era.printAndWait('превзошли предел');
      await era.printAndWait([
        'превзошли то, что намерили до старта, — ту теоретическую наибольшую скорость, на какую ',
        tachyon.couple_title,
        ' были способны',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…',
        callname,
        ', ты ещё помнишь, что было тогда, на фестивале благодарности фанатам?',
      ]);

      era.printButton(
        '「Тахион болела за ту девочку в расчёте на отдачу?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' не отвечает, а лишь задаёт встречный вопрос',
      ]);
      era.println();
      await tachyon.say_and_wait('…Хе-хе');
      await tachyon.say_and_wait(
        'Не оттого, что хочется быть услышанной, и не ради того, чтобы возник отклик…',
      );
      await tachyon.say_and_wait(
        'а чистый выплеск собственных чувств и переживаний в крик',
      );
      await tachyon.say_and_wait('Другими словами — это 『волнение』');
      await tachyon.say_and_wait([
        'Зрителей трогает ',
        tachyon.uma_sex_title,
        ', и они кричат от восторга, а ',
        tachyon.uma_sex_title,
        ' в ответ трогают зрители, и она превосходит свой предел…',
      ]);
      await tachyon.say_and_wait(
        'Понятие вроде бы нелепое — будто левой ногой наступаешь на правую, чистый вечный двигатель, — а происходит на самом деле',
      );
      await tachyon.say_and_wait(
        'Вот уж правда, всего этого в лаборатории не испытаешь, ха-ха-ха-ха!',
      );

      era.printButton(
        '「Значит, это можно считать, что ты 『полюбила』 забеги?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('…Мм, я и сама не знаю');
      era.println();
      await era.printAndWait('…И то верно');
      await era.printAndWait(
        'Ведь в конце концов не я сама выходила на дорожку бежать',
      );
      await era.printAndWait(
        'Нравится или нет — объяснить, пожалуй, всё ещё трудно',
      );
      await era.printAndWait([
        'Но как бы то ни было, с окончанием Kobe Shimbun Hai уже вот-вот подступит Arima Kinen',
      ]);
      await era.printAndWait(
        'Край исследования (Deadline) уже прямо перед глазами',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_39: (() => {
    const title = 'Поиск конечного фактора';
    /**
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
      await era.printAndWait(
        'Осень вступает в свои права, и главная скачка конца года уже у всех на виду',
      );
      era.println();
      await you.say_as_passer_by_and_wait('Журналист A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        ', как вам то, что к Arima Kinen в конце года вы — первая по популярности?',
      ]);
      await tachyon.say_and_wait([
        'Первая по популярности? Ничего такого… нет, спасибо за поддержку. Arima Kinen…',
      ]);
      await tachyon.say_and_wait(
        'Буду бежать так, чтобы превзойти свой предел',
      );
      await you.say_as_passer_by_and_wait('Журналист B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        ' ставит цель превзойти предел ',
        tachyon.uma_sex_title,
        '. Что это значит?',
      ]);
      await tachyon.say_and_wait([
        'Хе-хе… если всё пойдёт гладко, увидите на Arima Kinen',
      ]);
      await you.say_as_passer_by_and_wait('Журналист C', [
        'Какие приготовления к Arima Kinen у ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '?',
      ]);
      await tachyon.say_and_wait(
        'Пробой трассы и тела само собой, но кроме того… на деле я ищу пробой духа',
      );
      era.println();
      await era.printAndWait('Пробой духа');
      await era.printAndWait('От этой темы журналисты на месте слегка плывут');
      await era.printAndWait('Ни по образу снаружи, ни по случайным слухам');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' совсем не похожа на любительницу духовных речей — эта ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(' Журналист A', [
        'Пр… пробой духа? …Всё-таки следующий соперник — та самая ',
        coffee.get_colored_name(),
        ', вот и ищете опору в духе?',
      ]);
      await tachyon.say_and_wait([call_25, '…Соперник…?']);
      await you.say_as_passer_by_and_wait('Журналист A', 'Р-разве нет?');
      await tachyon.say_and_wait(
        '…Нет, это достойная обсуждения возможность, хе-хе',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' оставляет многозначительную фразу и не объясняет',
      ]);
      if (love >= 50 && love < 75) {
        await you.say_as_passer_by_and_wait('Журналист A', [
          'Да… ещё слухи про ',
          tachyon.get_colored_name(),
          ' и тренера',
        ]);
        await you.say_as_passer_by_and_wait(
          'Журналист A',
          'Хотели спросить вас двоих…',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' бросает взгляд на ',
          you.get_colored_name(),
          '. Почему-то ',
          you.get_colored_name(),
          ' чувствует, как внутри всё ёжится',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Ты хочешь спросить, связаны ли я и ',
          you.sex,
          ' любовью?',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' снова смотрит на ',
          you.get_colored_name(),
          '. На этот раз ',
          you.get_colored_name(),
          ' понимает: ',
          tachyon.sex,
          ' спрашивает 「как мне ответить?」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' едва заметно качаешь головой так, чтобы журналисты не видели, лишь бы ',
          tachyon.sex,
          ' заметила',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…Скажем так, ',
          you.sex,
          '…для меня важнее всех…',
        ]);
        await you.say_as_passer_by_and_wait('Журналист A', 'Важнее всех…?');
        era.println();
        await era.printAndWait([
          'Весь зал висит на словах ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' тоже невольно сглатываешь',
        ]);
        era.println();
        await tachyon.say_and_wait('Важнее всех… подопытное животное');
        era.println();
        await era.printAndWait(
          'Журналисты, услышав ответ, все разом спускают воздух',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' тоже выдыхаешь — только от облегчения',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' беззвучно складывает губы в сторону ',
          you.get_colored_name(),
          ': 「должен(на) мне」',
        ]);
        await era.printAndWait([
          'Но сейчас ',
          you.get_colored_name(),
          ' не до этого',
        ]);
        era.println();
        await era.printAndWait('К слову, назавтра в заголовках…');
        await you.say_as_unknown_and_wait([
          tachyon.get_colored_name(),
          ' отвечает на слухи! Называет тренера самым важным!',
        ]);
        await era.printAndWait('…так ничего и не обошли');
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_43: (() => {
    const title = 'Разгоревшийся дух соперничества';
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
     * @param {boolean} invincible 爱丽速子是否无败
     * @param {boolean} beat_c 爱丽速子是否击败过曼城茶座
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
      invincible,
      beat_c,
    ) => {
      await tachyon.say_and_wait('Ха… ха…');
      era.println();
      await era.printAndWait([
        'С окончания Kobe Shimbun Hai и по сей день ',
        tachyon.get_colored_name(),
        ' тренируется, неизменно держась в хорошей форме',
      ]);
      era.println();
      await tachyon.say_and_wait('…сегодня опять всё то же самое');
      era.println();
      await era.printAndWait(
        'но… удерживать уровень — значит не двигаться вперёд',
      );
      await era.printAndWait([
        'время подходит всё ближе к Arima, и оттого ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' понемногу начинают нервничать',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Тахион-сэмпай! Я сегодня тоже пришла!',
      );
      era.println();
      await era.printAndWait([
        'и тут двоих исцеляет та самая младшая ',
        tachyon.uma_sex_title,
        ' со времён Kobe Shimbun Hai',
      ]);
      await era.printAndWait([
        'эта младшая ',
        tachyon.uma_sex_title,
        ' теперь часто ходит за ',
        tachyon.get_colored_name(),
        ' и тренируется вместе с ней',
      ]);
      await era.printAndWait([
        'а ',
        you.get_colored_name(),
        ' как тренер тоже нет-нет да и даст указание, и ',
        tachyon.sex,
        ' его принимает',
      ]);
      await era.printAndWait([
        'и вот, пока ',
        you.get_colored_name(),
        ' от скуки разглядывает эту пару, перед глазами вдруг возникает знакомое лицо',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Что такое? Так увлечённо пялишься — уж не приглянулась ли тебе та девочка?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' торопливо мотает головой',
      ]);
      era.println();
      if (relation >= 0) {
        await tachyon.say_and_wait(
          'хе-хе… у той девочки и правда весьма приличная возможность',
        );
        await tachyon.say_and_wait([
          '…будь я собой прежней, то ',
          tachyon.sex,
          ', пожалуй, и пошла бы у меня в запасные Plan B',
        ]);
        await tachyon.say_and_wait(
          'но весь Plan B — это лишь запасной ход на случай, если Plan A окажется неосуществим',
        );
        await tachyon.say_and_wait([
          'не гонись за второстепенным, забывая главное, ',
          callname,
        ]);
      } else {
        await tachyon.say_and_wait(
          'не смей смотреть такими глазами на младшую, за которой я наблюдаю',
        );
        await tachyon.say_and_wait(
          '…такие, как ты, пусть не портят жизнь другим',
        );
        await tachyon.say_and_wait(
          'держать тебя при себе — вот и всё милосердие, на какое ты можешь рассчитывать',
        );
      }
      if (love >= 75) {
        era.println();
        await tachyon.say_and_wait(
          'а если забудешь — что ж, дай мне снова выжечь тебе глаза…',
        );
        await tachyon.say_and_wait([
          'в этот раз будет сиять до ослепления… пока ты не перестанешь различать, как выглядят все прочие ',
          tachyon.uma_sex_title,
          ' вокруг',
        ]);
      }
      era.println();
      await era.printAndWait([
        'выходит, в некотором смысле ',
        tachyon.get_colored_name(),
        ' просто не желает ни с кем делиться?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' остаётся только отделаться горькой усмешкой',
      ]);
      era.println();
      await era.printAndWait([
        'однако сегодня гостья не одна — и это не только младшая ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait('…ой-ой');
      await coffee.say_and_wait([c_call_t, '……']);
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' — вот кого ',
        tachyon.get_colored_name(),
        ' выбрала главной в Plan B',
      ]);
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'а ещё ',
          you.get_colored_name(),
          ' отвечает за неё как за свою подопечную ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          'та, что вместе с ',
          you.get_colored_name(),
          ' поклялась догнать друга, — важная подопечная',
        ]);
      }
      era.println();
      await era.printAndWait([
        'неизвестно почему, но она вдруг сама явилась к ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([
        call_25,
        '? Пришла принять мой опыт? Если так, я всегда ра…',
      ]);
      await coffee.say_and_wait(
        'Нет… просто хотела спросить: можно устроить со мной тренировочный забег?',
      );
      await tachyon.say_and_wait('…Тренировочный забег?');
      await coffee.say_and_wait('Да… как бы то ни было, очень вас прошу');
      era.println();
      await era.printAndWait(
        '…заявку на тренировочный забег подать проще простого',
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'тем более ',
          you.get_colored_name(),
          ' — тренер обеих: ',
          tachyon.couple_title,
          ' обе тут подопечные',
        ]);
      }
      await era.printAndWait(
        'даже особых договорённостей не нужно — достаточно арендовать поле',
      );
      era.println();
      await era.printAndWait(
        'формальности по заявке уладились довольно быстро',
      );
      await era.printAndWait([
        'на дорожке, где всего двое, ',
        you.get_colored_name(),
        ' встаёт у бровки распорядителем старта',
      ]);
      await era.printAndWait('на душе тревога и волнение');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — ',
        tachyon.sex,
        ' ставит целью превзойти то, что для ',
        tachyon.uma_sex_title,
        ' считается пределом',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' — ',
        coffee.sex,
        ' ставит целью догнать шаг друга',
      ]);
      era.println();
      await era.printAndWait(
        'то ли так распорядилась судьба, то ли это совпадение с дурным вкусом, но',
      );
      await era.printAndWait(['обе выбрали конечной целью Arima Kinen']);
      await era.printAndWait(
        'сегодняшний тренировочный забег… причина неизвестна, но его, пожалуй, можно считать репетицией того дня',
      );
      await era.printAndWait([
        'со сложным чувством на душе ',
        you.get_colored_name(),
        ' опускает флаг',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('Третий поворот, а дальше… финишная прямая');
      await tachyon.print_and_wait([call_25, ' слева? Нет, справа']);
      await tachyon.print_and_wait([
        call_25,
        ' бежит всё так же, как раньше… не ухватишь',
      ]);
      await tachyon.print_and_wait('но закономерность всё-таки поймать можно');
      era.println();
      await tachyon.say_and_wait('вот сейчас… что!?');
      era.println();
      await tachyon.print_and_wait('приходится признать');
      await tachyon.print_and_wait('перед забегом я и правда была беспечна');
      await tachyon.print_and_wait('замена из Plan B');
      if (beat_c) {
        await tachyon.print_and_wait(
          'да вдобавок ещё и та, кого я когда-то побеждала',
        );
      }
      await tachyon.print_and_wait('как бы красиво я ни говорила вслух');
      await tachyon.print_and_wait([
        'мол, ',
        coffee.get_colored_name(),
        ' — самостоятельная личность',
      ]);
      await tachyon.print_and_wait([
        'мол, у ',
        coffee.get_colored_name(),
        ' талант не хуже моего',
      ]);
      await tachyon.print_and_wait(
        'а в душе всё равно рождалось пренебрежение, которое и высокомерием-то назвать нельзя',
      );
      await tachyon.print_and_wait([
        'мол, подделка — как может ',
        coffee.sex,
        ' победить настоящую, да ещё в наилучшей форме',
      ]);
      era.println();
      await tachyon.say_and_wait('и бег, и скорость… всё чужое, незнакомое');
      era.println();
      await tachyon.print_and_wait('что, впрочем, естественно');
      await tachyon.print_and_wait([
        'ведь в последний раз ',
        tachyon.get_colored_name(),
        ' внимательно смотрела на бег и скорость ',
        coffee.get_colored_name(),
        ' ещё в июле год назад',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'теоретик, наивно решивший, что, пока он растёт, соперник послушно топчется на месте, обязан заплатить за такую недооценку',
      );
      await tachyon.print_and_wait('…соперница, значит?');
      era.println();
      await tachyon.print_and_wait('не подделка');
      await tachyon.print_and_wait('не заменитель');
      await tachyon.print_and_wait(
        'чёрная гончая оскалила клыки на горло высокомерной исследовательницы',
      );
      await tachyon.print_and_wait(
        'болью, поражением доказать своё существование',
      );
      await tachyon.print_and_wait([
        'доказать себя: что достойна той сцены, на которой стоит ',
        tachyon.sex,
        ', — достойна имени 「соперница」',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…хе-хе, хотеть одолеть соперницу, хотеть обыграть, хотеть кого-то превзойти… вот оно как, вот, значит, какое это чувство?',
      );
      era.println();
      await tachyon.print_and_wait('ладно, признаю');
      await tachyon.print_and_wait([
        'в этот раз ',
        tachyon.get_colored_name(),
        ' проиграла',
      ]);
      await tachyon.print_and_wait(
        'не хватило решимости, не хватило исследований, не хватило серьёзности',
      );
      await tachyon.print_and_wait(
        'выиграть при таком раскладе — вот это и было бы настоящим пренебрежением к чужому труду',
      );
      await tachyon.print_and_wait([
        'вернее сказать, стоит даже поблагодарить ',
        call_25,
        ' — так будет правильнее',
      ]);
      await tachyon.print_and_wait([
        'если бы всё так и оставалось, а нехватка этого 「последнего элемента」 обнаружилась только на Arima Kinen, второго шанса уже не было бы',
      ]);
      await tachyon.print_and_wait('поэтому…');
      era.println();
      await tachyon.say_and_wait('ах… в этот раз я———');
      era.printButton('「Тахион, не проиграй!」', 1);
      era.printButton('「Кафе, вперёд!」', 2, {
        disabled: era.get('cflag:25:招募状态') !== recruit_flags.yes,
      });
      const ret = await era.input();
      era.println();
      if (ret === 1) {
        await tachyon.print_and_wait(
          'слова уже на языке, а выговорить не получается',
        );
        await tachyon.print_and_wait([
          'будь это прежняя, чистая ',
          tachyon.get_colored_name(),
          ' — признать поражение, что сейчас перед глазами, было бы совсем не трудно',
        ]);
        await tachyon.print_and_wait(
          'забег — как опыт: не бывает так, чтобы он непременно удался',
        );
        await tachyon.print_and_wait(
          'и ничего страшного, что не вышло: извлечь урок, начать заново — только и всего',
        );
        await tachyon.print_and_wait(
          'тем более что это всего лишь тренировочный забег',
        );
        era.println();
        await tachyon.print_and_wait(
          'доводов, чтобы убедить себя сдаться, может быть сколько угодно',
        );
        await tachyon.print_and_wait(
          'довод, чтобы убедить себя стоять до конца, только один',
        );
        await tachyon.print_and_wait(
          'но этот один довод перевешивает все остальные',
        );
        era.println();
        await tachyon.say_and_wait('я хочу… хочу выиграть!');
        era.println();
        await tachyon.print_and_wait(
          'упрямство, которому изумляюсь даже я сама',
        );
        await tachyon.print_and_wait([
          'будь это чистая ',
          tachyon.get_colored_name(),
          ' — она бы сейчас наверняка отступила без раздумий',
        ]);
        await tachyon.print_and_wait(
          'но той исследовательницы — не задетой ничем извне, безупречно холодной — больше нет',
        );
        era.println();
        await tachyon.print_and_wait(
          'когда принимаешь чужую поддержку, когда заражаешься чужим чувством,',
        );
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' уже перестала быть чистой',
        ]);
        await tachyon.print_and_wait([
          'нынешняя ',
          tachyon.get_colored_name(),
          ' бежит ради исследований, ради того, чтобы превзойти предел',
        ]);
        await tachyon.print_and_wait('и ещё…');
        await tachyon.print_and_wait(
          'ради того, кто на любом забеге держится рядом',
        );
        await tachyon.print_and_wait([
          'ради того, кто в любую минуту ставит выше всего то, чего требует ',
          tachyon.get_colored_name(),
          ' сама',
        ]);
        era.println();
        if (love >= 50) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' бежит ради своего единственного любимого человека',
          ]);
        } else if (relation > 225) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' бежит ради товарища, который разделяет её стремления',
          ]);
        } else {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' бежит ради своего единственного подопытного животного',
          ]);
        }
        era.println();
        await tachyon.print_and_wait(
          'реакция взаимна — таков основной закон химии',
        );
        await tachyon.print_and_wait([
          'в тот самый миг, когда морской свинке по имени ',
          you.get_colored_actual_name(),
          ' выжигает глаза бег, которым несётся ',
          tachyon.get_colored_name(),
          ' сама',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' тоже: пока ',
          you.sex,
          ' её поддерживает, ',
          you.sex,
          ' её и меняет',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'не хочу проигрывать, когда ',
          you.sex,
          ' смотрит… не хочу обмануть доверие, которое ',
          you.sex,
          ' мне оказал… и ещё…',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'не хочу — не хочу проиграть ',
          coffee.get_colored_name(),
          '!',
        ]);
      } else {
        await tachyon.say_and_wait('————это я проиграла');
        era.println();
        await tachyon.print_and_wait('но не навсегда');
        await tachyon.print_and_wait(
          'только сейчас, только в этот миг признаю',
        );
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' уступает ',
          coffee.get_colored_name(),
        ]);
        await tachyon.print_and_wait('в следующий раз — Arima Kinen');
        await tachyon.print_and_wait(
          'я развернусь и уже сама, как претендентка,',
        );
        await tachyon.print_and_wait([
          'и тогда ',
          coffee.get_colored_name(),
          ' — её глотку я разорву в клочья, разжую',
        ]);
        era.println();
        await tachyon.print_and_wait('ах… жар, что жжёт не переставая');
        await tachyon.print_and_wait('и никак не спадает');
      }
      era.println();
      await tachyon.print_and_wait('гордыня исследовательницы?');
      await tachyon.print_and_wait('пренебрежение к запасному плану?');
      await tachyon.print_and_wait('нет, дело не в этом');
      await tachyon.print_and_wait(
        'просто хочу победы, хочу превзойти до конца',
      );
      await tachyon.print_and_wait([
        'не хочу проиграть ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        'хочу выиграть у ',
        coffee.get_colored_name(),
      ]);
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait('непременно… надо выиграть!');
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' выиграла тренировочный забег',
        ]);
        await era.printAndWait('но… отрыв ничтожно мал');
        era.println();
        await tachyon.say_and_wait([
          'Ха… ха… фух… фу-ха-ха-ха! Ну как? ',
          call_25,
          ', в итоге всё-таки я выиграла!',
        ]);
        await coffee.say_and_wait(
          '…не думайте, будто это и есть моя настоящая сила… это всего лишь тренировочный забег',
        );
        await tachyon.say_and_wait(
          'Ха-ха-ха! Отрадно, отрадно, обиженный лай проигравшей псины — просто прелесть… гхы!',
        );
        await coffee.say_and_wait('…Запомни это');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' не доводит до конца свой показной хохот: под взглядом ',
          coffee.get_colored_name(),
          ' она вдруг умолкает, будто невидимая рука зажала ей рот и нос',
        ]);
        if (
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 75
        ) {
          await coffee.say_and_wait([
            callname_25,
            '…когда… настанет Arima, если бы вы могли поболеть за меня, я была бы очень рада',
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' уходит с Тренировочного поля, не обернувшись, и оставляет ',
          you.get_colored_name(),
          ' и ',
          tachyon.get_colored_name(),
          ', а заодно и младшую ',
          tachyon.uma_sex_title,
          ', которой всё это время не досталось ни строчки, но которая и правда всё ещё стоит на Тренировочном поле',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'Тахион-сэмпай! Это правда потрясающе!',
        );
        await tachyon.say_and_wait([
          '…хм-хм, это ещё пустяки. Дождитесь Arima Kinen — вот тогда я покажу вам всем самый предельный бег!',
        ]);
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'Тахион-сэмпай～～～～!',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' отделывается от младшей парой фраз, и та тоже уходит с дорожки',
        ]);
        await era.printAndWait('и только теперь…');
        era.printButton(`「…всё, ${tachyon.couple_title} ушли」`, 1);
        await era.input();
        await tachyon.say_and_wait('Ха-а～～');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' вдруг словно выпускает задержанный вдох, приваливается к ',
          you.get_colored_name(),
          ' и обессиленно оседает на землю',
        ]);
        await era.printAndWait([
          'обычно в таком случае ',
          you.get_colored_name(),
          ' с тревогой на лице принимается выяснять, не захворала ли ',
          tachyon.sex,
          ', не плохо ли ей',
        ]);
        await era.printAndWait('но сейчас…');
        era.printButton('「Хорошо поработала」', 1);
        era.printButton('「Устала, наверное」', 2);
        await era.input();
        await era.printAndWait([
          'только ',
          you.get_colored_name(),
          ' видит, что в только что закончившемся забеге ',
          tachyon.get_colored_name(),
          ' и правда выложилась без остатка',
        ]);
        await era.printAndWait([
          'под давлением бега и возможностей — тех, что у ',
          coffee.get_colored_name(),
          ' — выложилась без остатка, насилу, еле-еле, правда еле-еле,',
        ]);
        await era.printAndWait(
          'и победила с отрывом, который впору назвать погрешностью',
        );
        era.println();
        await tachyon.say_and_wait([
          'Мм… ',
          call_25,
          '… выросла настолько, что уже превзошла моё воображение…',
        ]);
        await tachyon.say_and_wait([
          'а я всё ещё… веду себя так, будто ',
          tachyon.sex,
          ' прежняя…',
        ]);
      } else {
        await tachyon.print_and_wait('ах… это чувство — это…');
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' проиграла тренировочный забег',
        ]);
        await era.printAndWait('но проиграла с ничтожно малым отрывом');
        era.println();
        await coffee.say_and_wait(
          '…если это весь ваш уровень, то я разочарована',
        );
        await coffee.say_and_wait([
          'такая ',
          c_call_t,
          ' ничем не поможет мне превзойти друга…',
        ]);
        if (love >= 75) {
          await coffee.say_and_wait([
            'не понимаю… почему ',
            callname_25,
            ' тратит на тебя своё время',
          ]);
          era.println();
          await era.printAndWait([
            coffee.get_colored_name(),
            ' прижимается к ',
            you.get_colored_name(),
            ' вплотную, и от этого ласкового движения рядом с беспощадной отповедью у ',
            you.get_colored_name(),
            ' возникает ощущение странного контраста',
          ]);
          await era.printAndWait([
            'лёгкий травяной запах после бега и чуть заметный запах пота щекочут нос, и всё это ',
            you.get_colored_name(),
            ' улавливает',
          ]);
          await era.printAndWait([
            'чуть влажные волосы и раскрасневшееся после одышки лицо бьют по глазам, и всё это ',
            you.get_colored_name(),
            ' видит',
          ]);
          await era.printAndWait([
            'и невольно ',
            you.get_colored_name(),
            ' уже почти не может совладать со своей рукой',
          ]);
          era.println();
          await coffee.say_and_wait([
            callname_25,
            '… прямо здесь? Когда рядом ',
            c_call_t,
            ' смотрит…?',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' смотрит на распластавшуюся по траве, всё ещё тяжело дышащую ',
            tachyon.get_colored_name(),
            ' — и приходит в себя',
          ]);
          await coffee.say_and_wait([
            callname_25,
            ', то, что было только что… если можно, попозже, прошу…',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            ' оставляет эти двусмысленные слова и уходит',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' бросает на ',
            you.get_colored_name(),
            ' один свирепый взгляд',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' бегает глазами и не решается посмотреть в ту сторону, где ',
            tachyon.sex,
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' ушла, а ',
          tachyon.get_colored_name(),
          ' так и не поднялась с травы',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' с тревогой смотрит на распластавшуюся по траве ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…',
          callname,
          '…',
          call_25,
          ' и правда… выросла настолько, что уже превзошла моё воображение…',
        ]);
        await tachyon.say_and_wait([
          'а я всё ещё… веду себя так, будто ',
          tachyon.sex,
          ' прежняя…',
        ]);
      }
      await tachyon.say_and_wait('…как же… стыдно…');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' говорит это, задыхаясь, и до сегодняшнего дня было не представить, что ',
        tachyon.get_colored_name(),
        ' такое произнесёт',
      ]);
      if (invincible) {
        await era.printAndWait([
          'никогда не знавшая поражения ',
          tachyon.get_colored_name(),
          ' в тот миг по-настоящему ощутила возможность поражения',
        ]);
      } else {
        await era.printAndWait(
          'даже в тех забегах, что она проигрывала раньше, такого давления не было',
        );
      }
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait([
          'если бы… если бы только что я по-настоящему уступила ',
          call_25,
          ' — вот если бы так',
        ]);
        await tachyon.say_and_wait(
          'стоит представить такую возможность — и всё тело начинает дрожать… я противлюсь, противлюсь такой возможности',
        );
      } else {
        await tachyon.say_and_wait([
          'если бы… если бы только что я взяла верх над ',
          call_25,
          ' — вот если бы так',
        ]);
        await tachyon.say_and_wait(
          'стоит представить такую возможность — и всё тело начинает дрожать… я жажду, жажду такой возможности',
        );
      }
      await tachyon.say_and_wait([
        'не хочу проиграть ',
        call_25,
        '… обидно уступать ',
        call_25,
      ]);
      await tachyon.say_and_wait([
        'но… в груди всё равно горит: хочу ещё раз сойтись с ',
        call_25,
        ' и выяснить, кто сильнее, хочу разбить в лоб, наголову — пусть падёт ',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' поднимает голову, и взгляд её упирается в ',
        you.get_colored_name(),
        ' — в самые глаза',
      ]);
      await era.printAndWait([
        'прежде взгляд был как поток фотонов, дурманящий и сводящий с ума, а теперь ',
        tachyon.sex,
        ' смотрит глазами, до краёв полными колебаний чувства',
      ]);
      await era.printAndWait([
        'точно горящий факел; и это буйное пламя ярче и приметнее ровного, без колебаний, фотонного света, и куда сильнее притягивает — так, что ',
        you.get_colored_name(),
        ' не отводит глаз',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'так вот оно… каково это — иметь достойную соперницу?',
      );
      await tachyon.say_and_wait([
        'обидно не то, что проиграла… обидно, что проиграла именно 『',
        coffee.get_colored_name(),
        '』',
      ]);
      await tachyon.say_and_wait(
        'наверняка так и есть, иначе как объяснить этот жар…',
      );
      await tachyon.say_and_wait([
        '…а теперь немедленно возвращаемся! ',
        callname,
        '! Вот оно! Именно оно! Вот чего не хватало под конец!',
      ]);
      era.println();
      await era.printAndWait(['конец года на носу, а дальше — Arima Kinen']);
      return [];
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_48: (() => {
    const title = 'Санта-Клаус на пороге ночи';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait('холодной зимней ночью');
      await era.printAndWait(['завтра — Arima Kinen']);
      await era.printAndWait([
        'надо соблюдать режим, чтобы завтра хватило сил поддержать ',
        tachyon.get_colored_name(),
        ' — иначе никак',
      ]);
      await era.printAndWait('значит, надо лечь пораньше');
      await era.printAndWait('значит…');
      era.println();
      await era.printAndWait(
        'кто это там, в такое время, скрежещет за окном и не даёт спать!',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' в ярости распахивает окно — а за окном, с пробиркой в руке, стоит ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Ой-ой, надо же, ты уже не спишь. Жаль, не выйдет испытать свежесоставленный реагент…',
      );
      era.printButton('「…Что это такое」', 1);
      era.printButton('「…Почему ты за окном」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          'Ну… состав, который беззвучно и без запаха разъедает стекло. Действует только на стекло, так что того, что вышло в прошлый раз, когда я нечаянно прокапала пол насквозь, больше не случится. Правда, побочный эффект…',
        );
        await tachyon.say_and_wait(
          'закончив растворять, он сам затекает в щели, и вычистить его тяжело; так что туда, где он проел, стекло уже не вставишь — разве что разобрать всё подчистую',
        );
        era.println();
        await era.printAndWait('Кошмар какой!?');
      } else {
        await tachyon.say_and_wait(
          'Хе-хе, сюрприз… Но лучше скажи: может, впустишь меня наконец? На улице прохладно',
        );
        era.println();
        await era.printAndWait('Да почему обязательно через окно!!');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' без лишних слов проходит в комнату',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' настороженно смотрит на неё',
      ]);
      era.println();
      await era.printAndWait([
        'и ведь не в первый раз ',
        tachyon.get_colored_name(),
        ' вламывается в чужой дом: всякий раз под предлогом, что до утра с опытом ей не дотерпеть, она опаивает тебя своим зельем',
      ]);
      await era.printAndWait([
        'в обычный день ладно, но в такой важный вечер, накануне Arima, ни в коем случае нельзя, чтобы ',
        tachyon.sex,
        ' опять делала что вздумается',
      ]);
      era.printButton('「Завтра же Arima Kinen」', 1);
      era.printButton('「Иди скорее домой отдыхать」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '…Хм-хм, завтра Arima Kinen. А тогда… что сегодня?',
      ]);
      era.printButton('「Сегодня?」', 1);
      era.printButton('「…День перед Arima Kinen?」', 2);
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('в комнате вдруг наступает молчание');
      await era.printAndWait([
        'будто даже у ',
        tachyon.get_colored_name(),
        ' не нашлось слов',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…',
        callname,
        ', не знаю, попалось ли тебе сегодня на глаза: пекарня на улице вдруг начала торговать тортами-полешками',
      ]);
      era.printButton('「Это что, сейчас модно?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…А в KFO появились наборы с жареной курицей?',
      );
      era.printButton(
        '「А что в OFC, кроме курицы, вообще может быть набором?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '…А костюм-кигуруми на президенте студсовета?',
      );
      era.printButton(
        '「Опять какая-то плоская шутка, меня не проведёшь. Нарядиться ёлкой, что ли… э?」',
        1,
      );
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('в комнате снова повисает молчание');
      era.printButton('「Неужели… сегодня… Рождество?」', 1);
      await era.input();
      await era.printAndWait('Ха-ха-ха');
      await era.printAndWait([
        'по комнате рассыпается смех — ',
        tachyon.sex,
        ' смеётся, точно серебряный колокольчик',
      ]);
      await era.printAndWait(
        'будь этот звук колокольчиком, в приезд Санты, пожалуй, и правда можно было бы поверить',
      );
      era.println();
      await tachyon.say_and_wait([
        'Верно, ',
        callname,
        '! Сегодня Рождество! Итак… есть ли рождественский подарок, которого тебе хочется? Сегодня я, Санта собственной персоной, щедро его исполню!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' достаёт откуда-то колпак Санты, неизвестно где до этого спрятанный, и косо нахлобучивает его на уши',
      ]);
      await era.printAndWait(
        'разводит руки в стороны, встаёт в привычную позу, но с губ слетает не 「начнём опыт」, а 「Merry Christmas」',
      );
      era.printButton('「Merry Christmas」', 1);
      era.printButton('「С Рождеством」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Ну ладно, ладно, говори уже: какой хочешь рождественский подарок!',
      );
      era.printButton('「Поцелуй Тахион」', 1);
      era.printButton('「Победа на Arima」', 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        await era.printAndWait(
          'должно быть, всё из-за рождественского настроения',
        );
        await era.printAndWait([
          'и ненароком, прямо в лицо ',
          tachyon.get_colored_name(),
          ' летит фраза, которая явно выходит за рамки отношений наставника и ученицы',
        ]);
        era.println();
        if (love >= 75) {
          await tachyon.say_and_wait('Э…');
          era.println();
          await era.printAndWait('н… наверное, всё-таки странно');
          await era.printAndWait('может, лучше загадать другое');
          era.println();
          await tachyon.say_and_wait(
            'Нет… просто то, чем мы и так занимаемся изо дня в день, в качестве рождественского желания — это уж слишком дёшево',
          );
          await tachyon.say_and_wait(
            'Рождество ведь бывает не каждый день… Может, загадаешь что-нибудь поособеннее?',
          );
          await tachyon.say_and_wait('Например…');
          era.println();
          await era.printAndWait(
            'медленно приподнимающаяся школьная юбка, а под ней — тёмно-фиолетовое кружево',
          );
          await era.printAndWait(
            'многозначительный взгляд, полный похоти и жажды',
          );
          await era.printAndWait('но…');
          era.printButton('「Завтра… Arima…」', 1);
          await era.input();
          await era.printAndWait(
            'причина, по которой выходит выдавить только эти слова,',
          );
          await era.printAndWait('в том, что рассудка хватает ровно на них');
          await era.printAndWait(
            'на душе наполовину страх, наполовину ожидание',
          );
          await era.printAndWait([
            'страшно, что ',
            tachyon.get_colored_name(),
            ' не послушает уговоров',
          ]);
          await era.printAndWait([
            'и хочется, чтобы ',
            tachyon.get_colored_name(),
            ' уговоров не послушала',
          ]);
          era.println();
          await tachyon.say_and_wait('…ладно, забудь');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' останавливает руки',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' чувствует наполовину облегчение, наполовину сожаление',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Если подумать, дождаться завтра и отпраздновать этим удачный опыт — тоже ведь недурно',
          );
          era.println();
          await era.printAndWait('завтра…');
          await era.printAndWait(
            'похоже, поводов ждать завтрашнего дня стало на один больше',
          );
        } else if (love >= 50) {
          await tachyon.say_and_wait('Можно');
          era.println();
          await era.printAndWait('Э…?');
          await era.printAndWait([
            'не дав ',
            you.get_colored_name(),
            ' опомниться, ',
            tachyon.get_colored_name(),
            ' сама подаётся вперёд',
          ]);
          await era.printAndWait('Стой, что происходит');
          era.println();
          await tachyon.say_and_wait('чмок… чмок… чмо-о-к…');
          era.println();
          await era.printAndWait(
            'долгий поцелуй, растянувшийся на несколько минут',
          );
          await era.printAndWait(
            'в это короткое и бесконечное время в тихой рождественской ночи слышен только звук перетекающей слюны',
          );
          if (!era.get('exp:0:接吻次数')) {
            await era.printAndWait(
              'первый поцелуй — и сразу французский, взасос',
            );
            await era.printAndWait(
              'такое сказочное наваждение, наверное, случается только в рождественскую ночь',
            );
          }
          era.println();
          await tachyon.say_and_wait(
            'Ну как тебе такой рождественский подарок?',
          );
          era.println();
          await era.printAndWait([
            'под луной ',
            tachyon.sex,
            ' смотрит с колдовской и опасной поволокой',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Не волнуйся… я всё же понимаю, что важнее и что срочнее',
          );
          era.println();
          await era.printAndWait([
            'как ни крути, заниматься таким накануне Arima Kinen — величайшее неуважение и к сопернице, и к себе',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Так что… это всего лишь маленькая метка. А когда Arima закончится, хе-хе… подумай хорошенько, чем ты мне на это ответишь',
          ]);
        } else if (relation > 225) {
          await tachyon.say_and_wait(
            'Хм? Какая странная просьба… И только-то?',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' как ни в чём не бывало целует ',
            you.get_colored_name(),
            ' в щёку — один раз',
          ]);
          era.println();
          await era.printAndWait(
            '…и, кажется, ничего особенного не чувствуешь?',
          );
          era.println();
          await tachyon.say_and_wait(
            'Ну ты даёшь. Редкое рождественское желание — и потратить его на такое. Не понимаю я тебя…',
          );
          era.println();
          await era.printAndWait(
            'ощущения-то неплохие, но после таких слов появляется чувство, будто тебя обделили',
          );
          await era.printAndWait('ну раз так…');
          era.println();
          await tachyon.say_and_wait([
            '!… Эй, эй-эй, ',
            callname,
            '… ты что делаешь',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' в ответ обхватывает ',
            tachyon.get_colored_name(),
            ' за талию',
          ]);
          await era.printAndWait(
            'Не ответить на дар — против приличий… так, кажется, говорят? Ну и ладно',
          );
          await era.printAndWait(
            'Рождество бывает не каждый день — разве не занятно будет разок перехватить инициативу?',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' легонько, едва касаясь, целует ',
            tachyon.get_colored_name(),
            ' в лоб',
          ]);
          era.printButton('「С Рождеством」', 1);
          await era.input();
          await tachyon.say_and_wait(
            '…Так и быть, ради Рождества не стану с тобой считаться… но потом ты у меня попомнишь',
          );
          era.printButton(
            '「Говоришь-то ты так, а у Тахион лицо красное…」',
            1,
          );
          await era.input();
          await tachyon.say_and_wait('Молчать!');
        } else if (relation > 0) {
          await tachyon.say_and_wait('О? Правда хочешь?');
          era.println();
          await era.printAndWait('————Э?');
          era.println();
          await tachyon.say_and_wait(
            'Слыхала, будто есть такая штука — поцелуй-клятва, что ли',
          );
          era.println();
          await era.printAndWait('Э-э———!?');
          era.println();
          await tachyon.say_and_wait('Ну раз так — иди сюда');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' договаривает и вдруг придвигается к ',
            you.get_colored_name(),
          ]);
          era.println();
          await tachyon.say_and_wait('Считай это праздничной щедростью…');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' мягко, совсем легко прижимается к ',
            you.get_colored_name(),
            ' — к самому телу',
          ]);
          await era.printAndWait(
            'нежно———и легонько клюёт губами тыльную сторону ладони',
          );
          era.println();
          await tachyon.say_and_wait('Вот и всё');
          era.println();
          await era.printAndWait('…Э?');
          era.println();
          await tachyon.say_and_wait([
            'Кстати говоря, содержание клятвы таково: отныне и навсегда ты — моя ',
            callname,
            ' и принимаешь опыты, ясно?',
          ]);
          era.println();
          await era.printAndWait('Стоп-стоп!?');
          await era.printAndWait(
            'Светский поцелуй в тыльную сторону ладони в обмен на целую жизнь — не слишком ли неравноценный размен!?',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' никак не отвечает: пусть ',
            you.get_colored_name(),
            ' и возмущается, она лишь хихикает',
          ]);
          await era.printAndWait('и не понять, всерьёз она или в шутку');
        } else {
          await tachyon.say_and_wait(
            'Эй-эй, пусть даже Рождество, но такая шутка — это уже перебор',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' опасным взглядом предостерегает ',
            you.get_colored_name(),
          ]);
          await era.printAndWait([
            'и всё же от этого привычного холодного ответа ',
            you.get_colored_name(),
            ' как раз успокаивается',
          ]);
        }
      } else {
        await era.printAndWait([
          'должно быть, всё оттого, что завтра Arima Kinen',
        ]);
        await era.printAndWait([
          'и потому у ',
          you.get_colored_name(),
          ' вскипает голова, и с языка невольно срывается фраза, которую впору назвать KY (не улавливает настроения)',
        ]);
        era.printButton('「Arima…」', 1);
        await era.input();
        await tachyon.say_and_wait('Тс-с');
        era.println();
        await era.printAndWait([
          'фраза обрывается на середине: ',
          tachyon.get_colored_name(),
          ' прижимает к твоим губам указательный палец',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Сегодня ночь чудес и волшебства. Все эти разговоры про реальность оставим на завтра, хорошо?',
        );
        era.println();
        await era.printAndWait([
          'под луной ',
          tachyon.sex,
          ' — совсем как настоящий ангел',
        ]);
        era.printButton(
          '「Кто бы мог подумать, что у Тахион есть такая романтичная сторона」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait(
          'О? Ха-ха-ха! Кстати, разве нет такого выражения? 『Учёные — самые большие романтики на свете』',
        );
        era.println();
        await era.printAndWait(
          'если не веришь во всё это романтическое, чувственное',
        );
        await era.printAndWait(
          'то и не вложишь всю свою жизнь в сухие однообразные исследования',
        );
        await era.printAndWait([
          'в возможности ',
          tachyon.uma_sex_title,
          ' верит ',
          tachyon.sex,
          ', а в возможности ',
          tachyon.get_colored_name(),
          ' верит ',
          you.get_colored_name(),
        ]);
        await era.printAndWait('разве это не двое самых наивных мечтателей?');
        era.println();
        await tachyon.say_and_wait(
          'Ну что, есть ещё какой-нибудь рождественский подарок, которого тебе хочется?',
        );
        era.printButton('「Не надо」', 1);
        await era.input();
        await era.printAndWait('этот сон и есть лучший подарок');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' будто поняла: вот что имеет в виду ',
          you.get_colored_name(),
          ' — и кивает, словно соглашаясь с тем, о чём думает ',
          you.get_colored_name(),
          ' про себя',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          'Ну что ж… подарок по твоему желанию вручён',
        );
        era.println();
        await era.printAndWait('Хм…?');
        await era.printAndWait([
          'когда часть с 「подарком」 закончилась, ',
          tachyon.get_colored_name(),
          ' будто ещё не наигралась и заговаривает снова',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'А теперь черёд подарка, который хочет вручить сам Санта',
        );
        era.println();
        await era.printAndWait([
          'услышав это, ',
          you.get_colored_name(),
          ' тут же напрягается всем нутром',
        ]);
        await era.printAndWait('всё-таки… не отвертеться?');
        era.println();
        await tachyon.say_and_wait([
          callname,
          ', тебе ведь за эти дни тоже досталось',
        ]);
        era.println();
        await era.printAndWait([
          'начав с заботливого зачина — мол, это всё ради ',
          you.get_colored_name(),
          ' — ',
          tachyon.get_colored_name(),
          ' шаг за шагом подходит к кровати, где сидит ',
          you.get_colored_name(),
        ]);
        await era.printAndWait([
          'мало-помалу оттесняя ',
          you.get_colored_name(),
          ' в угол кровати',
        ]);
        await era.printAndWait(
          'что будет на этот раз? Свечение? Смена цвета? Изменение формы?',
        );
        era.println();
        await era.printAndWait(
          'красноглазая тень, что вместе со страхом взбирается на край кровати, всё ближе',
        );
        await era.printAndWait([
          'и наконец, когда расстояние сошло почти на нет, ',
          tachyon.sex,
          ' раскрывает то, ради чего ',
          tachyon.sex,
          ' сюда и явилась',
        ]);
        era.println();
        await tachyon.say_and_wait('————Умница, умница');
        era.println();
        await era.printAndWait('под затылком — шелковистое прикосновение');
        await era.printAndWait([
          'перед глазами — ',
          tachyon.sex,
          ', её ослепительное лицо',
        ]);
        if (tachyon.sex_code - 1) {
          await era.printAndWait(
            '——так хотелось бы сказать, но обзор загораживают две горные гряды',
          );
        }
        await era.printAndWait('это… колени вместо подушки?');
        era.println();
        await tachyon.say_and_wait(
          'Ну что ты. А что, по-твоему, это должно было быть? Я же сказала: сегодня вечером я — самый обычный Санта-Клаус, не больше и не меньше',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' ошалело слушает, как ',
          tachyon.sex,
          ' говорит мягко, будто напевает детскую песенку',
        ]);
        era.println();
        await tachyon.say_and_wait('Досталось тебе———и ещё: спасибо');
        era.println();
        await era.printAndWait([
          'до сегодняшнего вечера тебе всё время приходилось терпеть, как чудит подопечная ',
          tachyon.uma_sex_title,
          ', и подыгрывать ей',
        ]);
        await era.printAndWait(
          'а с завтрашнего утра предстоит Arima Kinen, а после него — финал URA',
        );
        await era.printAndWait('так что хотя бы сейчас, в эту ночь');
        await era.printAndWait('пусть тебе приснится добрый сон');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_a: (() => {
    const title = 'Подготовка к последнему опыту завершена';
    /**
     * 资深年有马纪念赛前，Plan A 限定
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait(
        'когда наступил тот день, всё оказалось неожиданно спокойным',
      );
      await era.printAndWait([
        'накануне вечером сон был сладок, и сегодня, с самого утра и на удивление бодро, ',
        you.get_colored_name(),
        ' встаёт пораньше и заваривает для ',
        tachyon.get_colored_name(),
        ' чёрный чай',
      ]);
      await era.printAndWait(
        'солнце заливает комнату, пылинки танцуют в полосах света',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' не ставит опытов — просто, как обычно, читает утреннюю газету',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' тоже не источает никакого сияния — просто тихо смакует чёрный чай',
      ]);
      await era.printAndWait(
        'вдвоём в лаборатории они наслаждаются последней тишиной перед бурей',
      );
      era.println();
      await you.say_as_passer_by_and_wait('Репортёр A', [
        'Скажите, Тахион ',
        tachyon.adult_sex_title,
        ', есть ли на этом Arima Kinen соперница, за которой вы особенно следите?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…Мм, на днях как раз появилась такая — ',
        coffee.get_colored_name(),
        ', ',
        call_25,
        '… пожалуй, её можно назвать достойной соперницей',
      ]);
      await you.say_as_passer_by_and_wait('Репортёр A', 'Пожалуй…?');
      await tachyon.say_and_wait('Мм, примерно так');
      era.println();
      await era.printAndWait([
        'в те минуты перед выходом на дорожку ',
        you.get_colored_name(),
        ' вдруг вспоминает слова, которые несколько дней назад, на том интервью, сказала ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', тебе доводилось слышать про два облака над физикой?',
      ]);
      await tachyon.say_and_wait(
        'Не доводилось? Ничего-ничего, это всего лишь присказка к истории',
      );
      await tachyon.say_and_wait(
        'Говорят, сэр Кельвин как-то сказал: здание физики уже построено, только в небе над ним осталось два маленьких облачка',
      );
      await tachyon.say_and_wait(
        'И никто не думал, что из этих двух облачков выйдут два столпа современной физики — квантовая механика и теория относительности…',
      );
      await tachyon.say_and_wait([
        'Конечно, эта история процентов на восемьдесят притянута за уши, но… я вот к чему: ',
        call_25,
        ' и есть то самое облако',
      ]);
      await tachyon.say_and_wait([
        'В моей теории ',
        call_25,
        ' — последний недостающий кусочек мозаики… но что потом?',
      ]);
      await tachyon.say_and_wait(
        'Способно ли это облако принести мне потрясение вроде теории относительности? Дай-ка… посмотрю',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_a: (() => {
    const title = 'Превзойти предел';
    /**
     * 资深年有马纪念结束，Plan A 限定
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} coffee_win_kiku_sho 曼城茶座是否赢取菊花赏
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_win_kiku_sho,
    ) => {
      await tachyon.say_and_wait('Ха… ха…');
      era.println();
      await tachyon.print_and_wait('шаги тяжёлые, вязкие');
      await tachyon.print_and_wait('причина… ясна');
      await tachyon.print_and_wait('гончая за спиной источает мощное давление');
      era.println();
      await tachyon.print_and_wait([
        'стоит ',
        call_25,
        ' побежать — и чудовищное давление ощущает любая ',
        tachyon.uma_sex_title,
        ', хоть впереди, хоть позади',
      ]);
      await tachyon.print_and_wait([
        'и ',
        tachyon.sex,
        ' со своим другом — всё это то, чего моя наука объяснить не в силах',
      ]);
      era.println();
      await tachyon.say_and_wait('…Идёт!');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' гонится следом',
      ]);
      await tachyon.print_and_wait([
        'Волоски на затылке встают дыбом: будто вот-вот ',
        tachyon.sex,
        ' дохнёт в самую шею',
      ]);
      await tachyon.print_and_wait('Именно сейчас, именно здесь');
      era.println();
      await tachyon.print_and_wait([
        'Если сказать, что ',
        tachyon.get_colored_name(),
        ' владеет скоростью превыше измерений',
      ]);
      await tachyon.print_and_wait([
        'то ',
        coffee.get_colored_name(),
        ' — это парадокс, шагающий сквозь измерения',
      ]);
      await tachyon.print_and_wait(
        'Не угадать, откуда возникнет, — чужой силуэт, будто шагнувший сюда из зазеркалья',
      );
      era.println();
      await tachyon.print_and_wait([
        'Этот угольно-чёрный призрак в один миг обходит ',
        tachyon.get_colored_name(),
      ]);
      era.drawLine();
      await coffee.say_and_wait('…Прости');
      era.println();
      await coffee.print_and_wait('Ради собственной мечты сбить с ног чужую');
      await coffee.print_and_wait('Тем более что соперница — это…');
      await coffee.print_and_wait('Кто же?');
      await coffee.print_and_wait(
        'Друг? Заклятый враг? Двое, что от рождения не сходятся? Исследователь и подопытный образец?',
      );
      await coffee.print_and_wait([
        'Вытряхнув из головы последний вариант, ',
        coffee.get_colored_name(),
        ' мчится дальше вперёд',
      ]);
      await coffee.print_and_wait(
        'На дороге к мечте даже самое глубокое чувство обращается разве что вот в такое «прости»',
      );
      era.println();
      await coffee.print_and_wait(
        'Стоит перешагнуть здесь — и следующая цель уже 「тот силуэт」…!',
      );
      era.println();
      await coffee.print_and_wait([
        'Но вот ',
        coffee.sex,
        ' просчиталась в одной возможности',
      ]);
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' ещё могла держать силы в запасе — вот эта возможность',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' с самого начала не выкладывалась до конца — вот эта возможность',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' ждала именно этого мига — вот эта возможность',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        'Впереди ',
        tachyon.uma_sex_title,
        ': это… идущая в отрыве ',
        tachyon.uma_sex_title,
        ', а также ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        'Лучшее место — то, что впору именно ',
        tachyon.get_colored_name(),
        ', место, где уютно, как в лаборатории',
      ]);
      await tachyon.print_and_wait('Именно сейчас, именно здесь');
      era.println();
      await tachyon.print_and_wait('Время встало, мир переменился');
      era.println();
      await tachyon.print_and_wait(
        'Перед глазами бескрайнее, бесконечное чёрное пространство',
      );
      await tachyon.print_and_wait('Всё заполнено выкладками и формулами');
      era.println();
      await tachyon.print_and_wait([
        'Хочется обойти ',
        coffee.get_colored_name(),
        ' — добавлена переменная: заклятый враг',
      ]);
      await tachyon.print_and_wait(
        'Среда, что подходит ей лучше всего — добавлена переменная: позиция в забеге',
      );
      await tachyon.print_and_wait(
        'Сплав тренировок и дарования — добавлена переменная: скорость',
      );
      await tachyon.print_and_wait('А затем…');
      era.println();
      await tachyon.print_and_wait(
        'Со спины повеяло теплом и запахом чёрного чая',
      );
      await tachyon.print_and_wait([
        'Но ',
        tachyon.get_colored_name(),
        ' не оборачивается',
      ]);
      await tachyon.print_and_wait(
        'Оборачиваться незачем — это было бы недоверием к нему',
      );
      await tachyon.print_and_wait([
        'Смотреть вперёд и… ждать его, верить, что ',
        you.sex,
        ' непременно догонит и пойдёт рядом',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'Дымящийся чёрный чай оказывается там, где сидит ',
        tachyon.get_colored_name(),
        ', — прямо у неё под носом',
      ]);
      await tachyon.print_and_wait('Совсем как в лаборатории в обычный день');
      await tachyon.print_and_wait('Всё до того само собой разумеется');
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        ' будет рядом с ',
        tachyon.get_colored_name(),
        ' — что тут удивительного',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' само собой разберётся со всякой трудностью, что встанет перед ней',
      ]);
      era.println();
      await tachyon.say_and_wait('Вот он, последний ответ…');
      era.println();
      await tachyon.print_and_wait(
        'В пространстве, похожем на классную доску, выводится формула U=MA2',
      );
      await tachyon.print_and_wait(
        'В тот же миг во тьме пространства все выкладки вспыхивают светом',
      );
      await tachyon.print_and_wait([
        'Вот он и есть — окончательный ответ, к которому пришла ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        tachyon.get_colored_name(),
        ' настигает! ',
        tachyon.get_colored_name(),
        ' настигает!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Идущая впереди всех в отрыве ',
        tachyon.uma_sex_title,
        ' уже выдыхается, и решающая схватка, как и ожидалось, между этими двумя!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        tachyon.get_colored_name(),
        '! ',
        coffee.get_colored_name(),
        '! Почти ноздря в ноздрю вылетают на финишную прямую!',
      ]);
      if (coffee_win_kiku_sho) {
        await you.say_as_passer_by_and_wait('Комментатор', [
          '『Самая сильная ',
          tachyon.uma_sex_title,
          '』 и 『самая быстрая ',
          tachyon.uma_sex_title,
          '』 — здесь и решится, кто кого!',
        ]);
      }
      await tachyon.print_and_wait('А-а');
      await tachyon.print_and_wait('Вроде бы идёт забег');
      await tachyon.print_and_wait('А на душе… до того легко');
      era.println();
      await tachyon.print_and_wait('С соперницей, которую сама признала');
      await tachyon.print_and_wait('Выложиться до последнего');
      await tachyon.print_and_wait('И всё же… этого мало');
      era.printButton('「Превзойдём предел!」', 1);
      await era.input();
      await tachyon.print_and_wait('После нескольких взятых интервью');
      await tachyon.print_and_wait([
        'Превзойти предел, похоже, уже стало у фанатов, которых собрала ',
        tachyon.get_colored_name(),
        ', лозунгом посильнее, чем 「',
        tachyon.get_colored_name(),
        ' сильнее всех」 и 「',
        tachyon.get_colored_name(),
        ' непременно победит」',
      ]);
      await tachyon.print_and_wait([
        'Но даже весь этот нестройный рёв поддержки — рядом с тем, что говорит ',
        you.sex,
        ', звучит до странного глухо',
      ]);
      era.println();
      await tachyon.print_and_wait('Да, верно');
      await tachyon.print_and_wait('Именно сейчас');
      era.println();
      await tachyon.print_and_wait('Предел, что на ступень выше зоны');
      await tachyon.print_and_wait('Превзойдём предел');
      await tachyon.print_and_wait([
        'Превзойти предел, который есть у ',
        tachyon.uma_sex_title,
        ' как у вида',
      ]);
      await tachyon.print_and_wait([
        'Превзойти предел, который есть у ',
        tachyon.get_colored_name(),
        ' самой',
      ]);
      await tachyon.print_and_wait('Превзойти всё, а потом, после этого');
      await tachyon.print_and_wait(
        'К той дали, что ещё дальше, ————— протянуть руку',
      );
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Фини-и-и-иш! По, побит рекорд! Главный финал года! И это ',
        tachyon.get_colored_name(),
        '! Рекорд побит, и сегодня на ипподроме Накаяма царит ',
        tachyon.get_colored_name(),
        '!',
      ]);
      era.println();
      await tachyon.print_and_wait('Всё кончилось');
      await tachyon.print_and_wait('Кончилось… да?');
      era.println();
      await tachyon.print_and_wait('Наверное, всё-таки кончилось');
      await tachyon.print_and_wait('На табло ведь уже выстроились результаты');
      await tachyon.print_and_wait(
        'Но жар в теле ничуть не похож на то, что забег позади',
      );
      await tachyon.print_and_wait(
        'Адреналин будто кипит и всё льётся, без конца',
      );
      era.println();
      await you.say_as_passer_by_and_wait('Зритель A', 'Сделала же!');
      era.println();
      await tachyon.print_and_wait(
        'Внезапный крик заставляет вздрогнуть и разом вернуться в явь',
      );
      await you.say_as_passer_by_and_wait(
        'Зритель B',
        'Правда, правда рекорд побила!',
      );
      await you.say_as_passer_by_and_wait('Зритель C', 'Молодчина!');
      era.println();
      await tachyon.print_and_wait('Весь стадион гремит от восторга');
      await tachyon.print_and_wait(
        '…Они, честное слово, взбудоражены сильнее самой победительницы',
      );
      era.println();
      await tachyon.print_and_wait('Наверное, надо бы им как-то ответить');
      await tachyon.print_and_wait(
        'Как ни крути, полагается изобразить что-то общественно приличное',
      );
      await tachyon.print_and_wait(
        '…Нет, это просто чистая благодарность тем, кто поддерживал',
      );
      await tachyon.print_and_wait('И её положено показать');
      await tachyon.print_and_wait('Но…');
      era.println();
      await tachyon.print_and_wait('Промучившись целую вечность');
      await tachyon.print_and_wait('удаётся разве что через силу поднять руку');
      await tachyon.print_and_wait('Как будто вся она до сих пор живёт во сне');
      era.println();
      await tachyon.print_and_wait('Только вот');
      await tachyon.print_and_wait(
        'одного этого хватает, чтобы поднять восторженный рёв, как волну',
      );
      era.drawLine();
      era.printButton('「Тахион… так это же…!」', 1);
      await era.input();
      await era.printAndWait('Вывод сделать никто не решается');
      await era.printAndWait(
        'Никто не решится выносить приговор тому, чего сам никогда не видел',
      );
      await era.printAndWait(
        'Если это правда, то перед нами область, куда ещё никто не доходил————',
      );
      era.println();
      await era.printAndWait('…………');
      era.printButton('「…Тахион?」', 1);
      await era.input();
      await era.printAndWait('Будто ещё не очнулась ото сна');
      await era.printAndWait([
        'Описать трудно, но ',
        tachyon.get_colored_name(),
        ', что стоит перед тобой, будто ходит во сне',
      ]);
      await era.printAndWait([
        'В таком случае надо бы, наверное, чтобы ',
        tachyon.sex,
        ' очнулась?',
      ]);
      await era.printAndWait('Но как это сделать?');
      await era.printAndWait(
        'Ты ведь и сам(а) невольно сомневаешься: а вдруг всё это перед глазами просто сон',
      );
      await era.printAndWait(
        'Три таких долгих года сегодня наконец получили точку — самый безупречный результат опыта',
      );
      era.println();
      await tachyon.say_and_wait('…Хе-хе');
      await tachyon.say_and_wait('Ха-ха-ха-ха-ха-ха-ха!');
      era.println();
      await era.printAndWait(
        'Если смешок за секунду до этого успокаивал — мол, наконец очнулась',
      );
      await era.printAndWait(
        'то дикий хохот секундой позже заставляет усомниться, всё ли у неё с головой в порядке',
      );
      await era.printAndWait([
        'И как раз когда ',
        you.get_colored_name(),
        ' в тревоге собирается подойти и проверить…',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Ты видел(а)? …Ты же видел(а)! ',
        callname,
        '!',
      ]);
      await tachyon.say_and_wait(
        'Вот он, результат опыта… я показала тебе его! Вот он, мир после предела!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает, что сказала в ноябре прошлого года ',
        tachyon.get_colored_name(),
        ', и слова эти всплывают сами',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait(
        'В награду я дам тебе увидеть мир куда шире',
      );
      era.println();
      await era.printAndWait([tachyon.sex, ' и правда это сделала']);
      await era.printAndWait('Каждый забег был шагом ближе к цели');
      await era.printAndWait('И вот теперь');
      await era.printAndWait(
        'вы двое и правда увидели мир пошире — тот, что за пределом',
      );
      era.printButton('「Да… мы правда это сделали」', 1);
      await era.input();
      await era.printAndWait([
        'Впервые ',
        you.get_colored_name(),
        ' видит, что на свете есть нечто ярче, чем бег, которым бежит ',
        tachyon.get_colored_name(),
        ', — оказывается, есть',
      ]);
      await era.printAndWait([
        'А именно: улыбка, что в этот миг проступила на лице у ',
        tachyon.get_colored_name(),
        ', — вот что',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ending_a: (() => {
    const title = 'Банкет';
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
    ) => {
      await era.printAndWait('На следующий день после Arima Kinen');
      await era.printAndWait([
        'Может, цель достигнута — и ',
        you.get_colored_name(),
        ' наконец выдыхает. За эти три года ',
        you.get_colored_name(),
        ' опаздывает впервые',
      ]);
      await era.printAndWait('Впрочем, цель у вас двоих уже взята');
      await era.printAndWait('Дальше можно спокойно встретить финал URA');
      era.println();
      if (love < 50) {
        await tachyon.say_and_wait(
          'Ты что творишь? Так долго, опыт давно начался',
        );
        era.println();
        await era.printAndWait([
          'Когда ',
          you.get_colored_name(),
          ' входит в лабораторию к ',
          tachyon.get_colored_name(),
          ', там как всегда над опытами ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait(
          ' Вчера на скачке мы лишь доказали, что предел можно пробить. Дальше — сделать это нормой!',
        );
        await tachyon.say_and_wait(
          'Один пробой — случайность, два — совпадение. Настоящий пробой — только когда это держится как норма!',
        );
        await tachyon.say_and_wait(
          'Живо переодевайся в лабораторный халат и за работу!',
        );
        await coffee.say_and_wait([c_call_t, '…ты так орёшь']);
        await tachyon.say_and_wait([
          'Ого-ого, не та ли это вчерашняя проигравшая мне на Arima Kinen ',
          call_25,
          '?',
        ]);
        await tachyon.say_and_wait(
          'Есть что сказать — слушаю. Принять вой проигравшей — тоже долг победителя————',
        );
        await coffee.say_and_wait('ц…');
        await tachyon.say_and_wait(
          'А-а! Мои опытные записи———— горя… не горят?',
        );
        era.println();
        await era.printAndWait([
          'Мгновение — и у ',
          tachyon.get_colored_name(),
          ' вспыхивают записи, но едва ',
          tachyon.get_colored_name(),
          ' кидается спасать, пламя вдруг гаснет',
        ]);
        era.println();
        await coffee.say_and_wait([
          '…Только в этот раз признаю… вчера ',
          c_call_t,
          ' и правда бежала сильно…',
        ]);
        await coffee.say_and_wait(
          'Хоть и обидно… но… нечаянно наложила тебя на 『друга』…',
        );
        await tachyon.say_and_wait([
          'Друг? О? Это… крайне занятно! ',
          call_25,
          ', очень прошу, расскажи подробнее!',
        ]);
        await tachyon.say_and_wait('Заткнись… отойди…');
        era.println();
        await era.printAndWait([
          'Глядя на этот гвалт, ',
          you.get_colored_name(),
          ' надевает лабораторный халат и с кривой усмешкой входит в быт, которому ещё долго идти',
        ]);
      } else if (love > 50) {
        await era.printAndWait([
          'Однако, когда ',
          you.get_colored_name(),
          ' доходит до двери лаборатории',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' слышишь голоса изнутри',
        ]);
        era.println();
        await tachyon.say_and_wait([
          call_25,
          '…Что делать… ',
          callname,
          ' ',
          you.sex,
          ' вдруг и правда не придёт…',
        ]);
        await coffee.say_and_wait('…мне-то что');
        await tachyon.say_and_wait([
          'Вчера я сказала, цель достигнута… вдруг ',
          you.sex,
          ' из-за этого больше не придёт…',
        ]);
        await tachyon.say_and_wait([
          'А может, вся связь за три года — моя фантазия, и ',
          you.sex,
          ' с самого начала ничего этого не делит… не делит…',
        ]);
        await coffee.say_and_wait('…Если и правда так — что будешь делать?');
        await tachyon.say_and_wait([
          '…Ну да: тогда зельем сделать так, чтобы ',
          you.sex,
          ' уже не смог(ла) без меня. Постой, это же нечестно?',
        ]);
        await tachyon.say_and_wait([
          'Держусь только я, а ',
          you.sex,
          ', ',
          you.sex,
          ' без меня живёт как ни в чём не бывало, так что надо срочно сварганить сильно аддиктивное зелье, чтобы ',
          you.sex,
          ' отныне уже никогда не смог(ла) без меня…',
        ]);
        await tachyon.say_and_wait(
          'Или как в романах — яд-гу… не примешь вовремя моё противоядие — и ударит…',
        );
        await coffee.say_and_wait('…Тяжело тебя');
        const coffee_check =
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 50;
        if (coffee_check) {
          await coffee.say_and_wait([
            'Но предупреждаю: не смей такое делать с моим ',
            callname_25,
            '.',
          ]);
        }
        era.println();
        await era.printAndWait([
          'Спину продрало, и ',
          you.get_colored_name(),
          ' торопливо толкает дверь',
        ]);

        era.printButton('「Прости! Проспал(а)!」', 1);
        await era.input();
        await tachyon.say_and_wait([
          callname,
          '!……Ты что творишь? Так долго, опыт давно начался!',
        ]);
        era.println();
        await era.printAndWait([
          'Лицо строгое, дуется — но у ',
          tachyon.get_colored_name(),
          ' хвост за спиной мешает так, что не удержать',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'Кажется, сама заметила: пару раз прижимает, не держится — отворачивается и ворчит дальше, будто ничего не было',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Вчера на скачке мы лишь доказали, что предел можно пробить. Дальше — сделать это нормой!',
        );
        await tachyon.say_and_wait(
          'Один пробой — случайность, два — совпадение. Настоящий пробой — только когда это держится как норма!',
        );
        era.println();
        await tachyon.say_and_wait(
          '…Так что живо переодевайся в лабораторный халат и за работу! …ладно?',
        );
        era.println();
        await era.printAndWait([
          'Смотришь на ту, что пыжится строгой и тревожно глядит на ',
          you.get_colored_name(),
          ', и перед ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' не выдерживаешь: шагаешь вперёд и обнимаешь её — ',
          tachyon.sex,
        ]);
        era.println();
        await tachyon.say_and_wait(['! ', callname, '…!']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' и ',
          tachyon.sex,
          ' — исследователь и подопытное: через три года будет второй срок, третий — и так до вечности…',
        ]);
        era.setToBottom();
        await era.waitAnyKey();
        if (coffee_check) {
          await coffee.say_and_wait([
            '…Не борзей. Верни моего ',
            callname_25,
            '.',
          ]);
          era.println();
          await era.printAndWait([
            'Пока они тянут на себя, ',
            you.get_colored_name(),
            ' с кривой усмешкой входит в этот шумный быт',
          ]);
        } else {
          await coffee.say_and_wait('…Можете не сластить у меня на глазах?');
          era.println();
          await era.printAndWait(
            'Только забыли: в комнате ещё одна, и её как раз кормят чужим сахаром',
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_a: (() => {
    const title = 'Сверхсветовая частица Шрёдингера';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, coffee, you, callname, love) => {
      await tachyon.say_and_wait('Да, кстати, ещё вот это…');
      await tachyon.say_and_wait([
        'Пропадать тоже жалко. Как, ',
        callname,
        '? Пойдём вместе?',
      ]);
      era.println();
      await era.printAndWait('Случайно разбирая лабораторию,');
      await era.printAndWait(['Вы находите конверт, спрятанный в углу']);
      if (love >= 75) {
        await era.printAndWait('Мм…?');
        await era.printAndWait('Почему-то фальшь прёт изо всех щелей');
        await era.printAndWait([
          you.get_colored_name(),
          ' присматриваешься — и ловишь зацепку',
        ]);
        await era.printAndWait(
          'Якобы нашли на генеральной уборке, а на конверте ни складки — будто его бережно хранили',
        );
        await era.printAndWait([
          'Сопоставив, что это ',
          tachyon.get_colored_name(),
          ' «нашла», ',
          you.get_colored_name(),
          ' в общем угадывает, как есть',
        ]);
        era.println();
        await tachyon.say_and_wait(['Мм? ', callname, '? Что такое?']);
        era.println();
        await era.printAndWait('…Лучше не говорить');
        await era.printAndWait([
          'Иначе ',
          tachyon.get_colored_name(),
          ' вспыхнет от стыда — это полбеды; беда, что когда ',
          tachyon.sex,
          ' вспыхнет, ночь тебе точно не поздоровится',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Онсэн-гостиница, куда вы приехали, по меркам акции торговой улицы — место на редкость роскошное',
      ]);
      await era.printAndWait('Своя купель, стандартный васицу, даже кайсэки');
      await era.printAndWait(
        'Скорее… обычная лотерея торговой улицы и правда готовит такой джекпот?',
      );
      await era.printAndWait([
        'Не иначе… это с самого начала устроили и лишь под видом лотереи подсунули ',
        tachyon.uma_sex_title,
        ' и тренеру?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' сидишь в купели и несёшься мыслями куда попало',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? Я вхожу~~']);
      era.println();
      await era.printAndWait([
        'Вдруг крик подопечной ',
        tachyon.uma_sex_title,
        ' за дверью возвращает ',
        you.get_colored_name(),
        ' в реальность',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' машинально отвечаешь «входи» — и только потом вспоминаешь, что сейчас в купели',
      ]);
      await era.printAndWait('Закрыться уже не успеть—————');
      await era.printAndWait([
        you.get_colored_name(),
        ' торопливо уходишь под воду целиком, в надежде, что пар хоть чуть прикроет то, чего видеть не следует',
      ]);
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.say_and_wait([
          callname,
          '—————Чего это ты так стыдливо съёжилась? Видела же уже столько раз',
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          '—————Чего это ты так стыдливо съёжилась? На опытах уже всё видела насквозь',
        ]);
      }
      era.println();
      await era.printAndWait([
        'Так говорит, а у ',
        tachyon.get_colored_name(),
        ' в голосе тоже зажим',
      ]);
      await era.printAndWait([
        'В отличие от ',
        you.get_colored_name(),
        ' без одежды, на ',
        tachyon.get_colored_name(),
        ' накинуто полотенце',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'Сама лезет в купель и тянется к ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Садится рядом с ',
        you.get_colored_name(),
        ' и спокойно приваливается к ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(' Наконец… URA тоже кончилась');
      await tachyon.say_and_wait('Иногда вот так выдохнуть — тоже ничего');
      era.println();
      await era.printAndWait([tachyon.sex, ' удовлетворённо выдыхает']);
      await era.printAndWait(
        'Точно зарплатный раб после крупного проекта: на банкете хлебнул пива и выпустил воздух',
      );
      await era.printAndWait(
        'Не разберёшь: освобождение, свершение, а может… ещё лёгкая пустота, для которой сама не находит причины?',
      );
      await era.printAndWait([
        'Оглядывая эти три года, ',
        you.get_colored_name(),
        ' вместе с ',
        tachyon.get_colored_name(),
        ' и правда взяли кучу высот',
      ]);
      await era.printAndWait([
        'Дорога к тройной короне, тема про чувства, яростные скачки с ',
        coffee.get_colored_name(),
        '…',
      ]);
      await era.printAndWait(
        'И ещё, и ещё — что стоит помянуть и что не стоит',
      );
      await era.printAndWait([
        'Вес этих трёх лет — и ',
        you.get_colored_name(),
        ' невольно выдыхает так же, как ',
        tachyon.get_colored_name(),
        '.',
      ]);
      era.println();
      await era.printAndWait([
        'Дальше вы двое молчите и только приваливаетесь друг к другу',
      ]);
      await era.printAndWait([
        'И только сейчас ',
        you.get_colored_name(),
        ' замечает: рядом ',
        tachyon.sex,
        ' телом такая крохотная',
      ]);
      await era.printAndWait([
        'Сейчас это не гениальная ',
        tachyon.uma_sex_title,
        ' и не безумный учёный',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ', а всего лишь обычная ',
        tachyon.teen_sex_title,
        '.',
      ]);
      era.println();
      await era.printAndWait(
        'В купели среди горячего пара двое тихо берут эту короткую тишину',
      );
      await era.printAndWait([
        'Для тех, кто знает смутьяна ',
        tachyon.get_colored_name(),
        ' и её пособника-тренера, картина, должно быть, невероятная',
      ]);
      await era.printAndWait('Но сейчас вы двое именно так в этом тонете');
      era.drawLine();
      await tachyon.say_and_wait([callname, ', ты знаешь кота Шрёдингера?']);
      era.println();
      await era.printAndWait([
        'Вдруг ',
        tachyon.get_colored_name(),
        ' ломает эту тишину',
      ]);
      await era.printAndWait('Кот Шрёдингера…?');
      era.printButton('「Не знаю」', 1);
      era.printButton('「Знаю」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          'Кот Шрёдингера: сперва мысленный опыт, которым Шрёдингер бил по квантовой механике,',
        );
        await tachyon.say_and_wait(
          'и ирония в том, что теперь это лучший образчик, которым её как раз толкуют',
        );
        await tachyon.say_and_wait(
          'Проще: радиоактивное вещество, выключатель яда, который сработает от излучения, и кот — всё в ящике, наглухо отрезанном от мира',
        );
        await tachyon.say_and_wait(
          'Никто не знает, когда вещество распадётся и даст излучение,',
        );
        await tachyon.say_and_wait(
          'иначе говоря, никто не знает, сработает ли выключатель: пока ящик не открыт, кот сразу и мёртв, и жив — суперпозиция',
        );
      } else {
        await tachyon.say_and_wait(
          'У школ сейчас свои взгляды на этот опыт, но суть одна… ты знаешь, что в нём самое важное?',
        );
      }
      era.printButton('「…Кот?」', 1);
      era.printButton('「…Яд?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Ха-ха, да, без этого опыт вообще не стоит… только оба мимо',
      );
      era.println();
      await era.printAndWait([
        'Вдруг ',
        tachyon.get_colored_name(),
        ' встаёт из купели, лицом к ',
        you.get_colored_name(),
        ', глаза в глаза с ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Винные глаза — как долго выдержанный медовый источник, в них тонешь',
      );
      await era.printAndWait([
        'И вдруг ',
        you.get_colored_name(),
        ' ловит себя на мысли: такая ',
        tachyon.sex,
        ' когда-то сама говорила, что у тебя безумные глаза',
      ]);
      await era.printAndWait([
        'А теперь что видно, пока ',
        tachyon.sex,
        ' смотрит на тебя этими глазами?',
      ]);
      era.println();
      await tachyon.say_and_wait('Ответ—————『наблюдатель』');
      await tachyon.say_and_wait(
        'Мёртв кот или жив — это лишь 『возможно』: бесконечно близко, и всё же не оформлено',
      );
      await tachyon.say_and_wait(
        'Только когда входит наблюдение, возможность наконец затвердевает в итог — живой или мёртвый, неважно',
      );
      era.println();
      await era.printAndWait('Иначе говоря');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' тянет руку, будто хочет коснуться глаз у ',
        you.get_colored_name(),
        ', и дрожит: как бы нечаянно не ранить ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' сам(а) берёт её руку: ',
        tachyon.sex,
        ' медленно, но верно идёт к твоим глазам',
      ]);
      era.println();
      await tachyon.say_and_wait('Ты и есть мой наблюдатель');
      await tachyon.say_and_wait([
        'Тот, кто закрепляет возможности ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await tachyon.say_and_wait([
        'Тот, кто решает, какой будет ',
        tachyon.get_colored_name(),
        ' в этот миг',
      ]);
      await tachyon.say_and_wait(
        'В этом опыте исследователь — ты, а я всего лишь кот, которого ты посадил(а) в ящик',
      );
      era.println();
      await era.printAndWait('Легко — касается');
      await era.printAndWait(
        'Ничего особенного, кроме рези в глазном яблоке от прикосновения',
      );
      await era.printAndWait([
        'Но ',
        tachyon.get_colored_name(),
        ' будто этого и довольно — сама забирает руку',
      ]);
      era.println();
      await tachyon.say_and_wait('Дальнейшие опыты… прошу любить и жаловать');
      await tachyon.say_and_wait('Мой дорогой профессор-кун');
      await tachyon.say_and_wait(
        'Как выйдем — не забудь подарок, что я тебе приготовила',
      );
      era.println();
      await era.printAndWait([
        'Сказав это, ',
        tachyon.get_colored_name(),
        ' первой выходит на берег',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Да, сегодняшнее зелье я добавила в ледяное молоко, не забудь выпить',
      );
      era.println();
      await era.printAndWait(
        '…Хоть ледяное молоко тебе приготовила — это тоже рост?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' думаешь в духе тех, кого обрабатывают по PUA, и решаешь ещё немного посидеть в купели',
      ]);
    };
    f.title = title;
    return f;
  })(),
  palace_a: (() => {
    const title = 'За гранью предела';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        'Три года, прожитые вместе с ',
        tachyon.get_colored_name(),
        ', кончились',
      ]);
      era.println();
      await era.printAndWait([
        'После выпускной церемонии ',
        you.get_colored_name(),
        ' как-то заводил(а) разговор о том, какие планы на будущее строит ',
        tachyon.sex,
        ' дальше',
      ]);
      await tachyon.say_and_wait(
        'Раз я ученица, то главный мой долг — учиться, разве нет?',
      );
      await era.printAndWait([
        tachyon.sex,
        ' только улыбнулась и обронила фразу, которая совсем не вязалась с тем, какая ',
        tachyon.sex,
        ' обычно бывает',
      ]);
      era.println();
      await era.printAndWait('Однако на этот раз, похоже, всё было всерьёз');
      await era.printAndWait([
        you.get_colored_name(),
        ' в списках сдающих общий вступительный экзамен того года находит её имя — да, там значилась ',
        tachyon.sex,
        ' собственной персоной',
      ]);
      await era.printAndWait([
        'В это трудно поверить, но ',
        tachyon.sex,
        ', похоже, решила учиться дальше',
      ]);
      era.println();
      await era.printAndWait(
        'Сегодня во всех университетах церемония начала учебного года',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает тот день несколько месяцев назад, когда вывесили результаты',
      ]);
      await era.printAndWait([
        'Услышав, что ',
        tachyon.sex,
        ' прошла, ',
        you.get_colored_name(),
        ' не знал(а), как назвать то, что творилось внутри',
      ]);
      await era.printAndWait([
        'Полная возможностей — вот какая ',
        tachyon.sex,
        ', и всё же в конце концов и она выходит на дорогу обыкновенных людей',
      ]);
      await era.printAndWait(
        'Как все, поступить, как все, выпуститься, как все, устроиться на работу',
      );
      await era.printAndWait([
        'А потом, рано или поздно, ',
        tachyon.sex,
        '… тоже станет таким же скучным взрослым, как ты сам(а)?',
      ]);
      await era.printAndWait([
        'На том празднике, где были только двое, что говорил(а) ',
        you.get_colored_name(),
        ' той, кем была ',
        tachyon.sex,
        ', и что говорила ',
        tachyon.sex,
        ' в ответ тому, кем был(а) ',
        you.get_colored_name(),
        ', — всё это начисто забылось',
      ]);
      era.println();
      await era.printAndWait([
        'Ты простился(ась) с ней — с той, кем была ',
        tachyon.sex,
        ', — и теперь тебе возвращаться к прежней жизни, принимать следующую подопечную ',
        tachyon.uma_sex_title,
        ' и поддерживать мечту, которую несёт ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait([
        'Но такой, как ',
        tachyon.sex,
        ', — той, что выжигает взгляд, каким смотрит ',
        you.get_colored_name(),
        ', той, что была словно сам свет, — такой ',
        tachyon.uma_sex_title,
        '… больше, пожалуй, уже не встретить',
      ]);
      await era.printAndWait([
        'Сам(а) того не заметив, ',
        you.get_colored_name(),
        ' машинально доходит до пустого кабинета — того, что когда-то был старой препараторской при кабинете естественных наук, потом стал лабораторией, а теперь, само собой, снова превратится в препараторскую',
      ]);
      era.println();
      await you.say_and_wait('Раз уж пришёл(ла), заодно и приберусь');
      await era.printAndWait([
        you.get_colored_name(),
        ' открывает дверь и видит, как всегда, за опытом ',
        tachyon.get_colored_name(),
        ', а в своём углу с кофе — ',
        coffee.get_colored_name(),
        '… ничего подобного, разумеется, нет и в помине',
      ]);
      await era.printAndWait([
        'В этот кабинет после выпускной церемонии никто не заходил, и он так и стоит в том виде, в каком вы оставили его в последний раз',
      ]);
      await era.printAndWait([
        'Пустые пробирки на лабораторном столе, колбы с высохшей на дне жидкостью, чайные пятна на столешнице — по этим следам времени вспоминает ',
        you.get_colored_name(),
        ' всё, что было за эти три года',
      ]);
      era.println();
      await tachyon.say_and_wait(['…А, ', callname]);
      era.println();
      await era.printAndWait([
        'Сзади доносится знакомый оклик, и ',
        you.get_colored_name(),
        ' оборачивается',
      ]);
      await era.printAndWait([
        'Это та, о ком ',
        you.get_colored_name(),
        ' думает с утра до ночи, — ',
        tachyon.sex,
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Раз уж пришёл, живо иди помогать мне таскать вещи',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' в тот же миг, как видит, что перед ней ',
        you.get_colored_name(),
        ', улыбается всё той же улыбкой, и улыбка эта до того светлая, что ',
        you.get_colored_name(),
        ' поддаётся обману: будто между вами ничего и не изменилось',
      ]);
      await era.printAndWait(
        'И правда: раз выпуск уже позади, всю здешнюю лабораторную утварь, само собой, надо вывозить',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' не произносит ни слова и молча шагает туда же, куда ',
        tachyon.get_colored_name(),
        ', держась чуть позади',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' поначалу думал(а), что ',
        tachyon.sex,
        ', наверное, хочет перевезти всё к себе домой, или в нынешнюю свою школу, или… сдать в утиль?',
      ]);
      await era.printAndWait([
        'Но вышло иначе: ',
        tachyon.sex,
        ' перетаскивает всю утварь в соседнюю препараторскую при кабинете естественных наук',
      ]);
      era.println();
      await tachyon.say_and_wait('Ну вот, готово…');
      era.println();
      await era.printAndWait([
        'Напоследок ',
        tachyon.sex,
        ' стоит у двери кабинета, куда, наверное, уже никогда не вернётся, и улыбается — одиноко',
      ]);
      await era.printAndWait([
        'А потом оборачивается и смотрит на ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', давай начнём сегодняшний опыт!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' смотрит, и в глазах у неё всё так же сверкает безумный свет',
      ]);
      await era.printAndWait([
        'Точь-в-точь как все три года, каждый день, — так ',
        tachyon.sex,
        ' здоровалась при каждой встрече',
      ]);
      await era.printAndWait([
        'И сам(а) того не замечая, ',
        you.get_colored_name(),
        ' тоже начинает улыбаться, и чем дальше, тем радостнее, тем громче, — а под конец и вовсе смеётся до слёз',
      ]);
      await era.printAndWait(
        'Может, за эти три года и правда нашлось кое-что, что не изменится никогда',
      );
      await era.printAndWait([
        'Например, то, что связывает ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        '. Например, жажда знаний, которой горит ',
        tachyon.sex,
        '. Например, чувство, которое питает ',
        you.get_colored_name(),
        ' к той, кем была ',
        tachyon.sex,
        ', и чувство, которым отвечает ',
        tachyon.sex,
        ' тому, кем был(а) ',
        you.get_colored_name(),
        ', — вот они',
      ]);
      await era.printAndWait([
        'Ветер шелестит по коридору, будто поддакивает словам, что сказал(а) ',
        you.get_colored_name(),
        ' про себя',
      ]);
      await era.printAndWait('За окном опадают листья: осень пришла');
      era.drawLine({ content: 'Три дня спустя' });
      era.printButton(
        '「…Погоди-ка!? Так в тот день ты приходила не прощаться!?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        '… ',
        callname,
        '? Слушай, три дня прошло, и только теперь до тебя дошло — не медленно ли?',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' и её лаборатория… новая лаборатория по соседству',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' с мыслью 「пусть уж напоследок побуянит ',
        tachyon.sex,
        ', подыграю」 подыгрывает тому, что ',
        tachyon.sex,
        ' назвала своим 「последним」 опытом',
      ]);
      await era.printAndWait('Вот только последний этот тянется целых три дня');

      era.printButton('「Ты же говорила, что поступаешь в университет!?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'Ну да, я поступила на университетское отделение Трейсена',
      );
      era.println();
      await you.say_and_wait(
        'Откуда у Трейсена университетское отделение!? Почему я о таком не слышал(а)!?',
      );
      era.println();
      await tachyon.say_and_wait(
        'В сюжете об этом не говорили, но по официальным материалам у академии Трейсен университетское отделение действительно есть',
      );
      era.printButton('「Какие ещё официальные материалы!?」', 1);
      era.printButton(
        '「Ладно, допустим, оно и правда есть — а на занятия тебе ходить не надо!?」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '… ',
        callname,
        ', я уже начинаю сомневаться, учился(ась) ли ты вообще в университете. Где ты видел(а), чтобы в университете кто-то послушно ходил на пары',
      ]);
      era.println();
      await era.printAndWait(
        'Хочется возразить, но перед тобой та, кто и в старшей школе на уроки ходила через раз, а почти всё прогуливала, — и возражать разом становится нечем',
      );
      era.printButton('「Тогда зачем было вдруг менять кабинет!?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'Нет… мне и самой неловко об этом говорить, но тот кабинет за эти годы мы так использовали…',
      );
      await tachyon.say_and_wait(
        'что с безопасностью там появились кое-какие проблемки…',
      );
      await tachyon.say_and_wait(
        'Поэтому нужны проверка и ремонт… примерно через неделю можно будет вернуться обратно',
      );
      era.printButton(
        '「Всего неделя — так не разыгрывай тут вселенскую грусть!?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        'Ах, ',
        callname,
        ', как ты жесток(а). Тот кабинет всё-таки три года терпел наши изде… эксплуатацию, поблагодарить его — не такая уж и наглость, правда?',
      ]);
      era.println();
      await era.printAndWait('Возразить нечего');
      await era.printAndWait([
        'Сейчас похоже, что всё и правда так, как сказала ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait(
        'Выходит, всё это время грустил(а) в одиночку только ты сам(а)?',
      );
      era.println();
      await tachyon.say_and_wait(
        'Я же ещё в день оглашения результатов сказала тебе и про то, куда поступаю, и про то, что опыты дальше буду просить продолжать с тобой…',
      );
      await tachyon.say_and_wait(
        'А ты всё начисто забыл(а)… Значит, всё-таки в тот день я перебрала с зельем, которое подмешала в напиток?',
      );
      era.println();
      await era.printAndWait(
        'Так, выходит, я не помню тот день не потому, что это красивая условность, а потому, что и вправду упился(лась) до беспамятства!?',
      );
      era.println();
      await tachyon.say_and_wait([
        'Ладно, ладно, хватит болтовни. ',
        callname,
        ', идём скорее. Сегодняшнее зелье, если ничего не случится…',
      ]);
      await tachyon.say_and_wait([
        '… возможно, перевернёт целый мир, в котором живёт ',
        tachyon.uma_sex_title,
        ', кто знает',
      ]);
      era.println();
      await era.printAndWait('Перевернёт… мир…?');
      era.drawLine();
      await era.printAndWait([
        'Передумав так и эдак и додумавшись до сто двадцать четвёртого способа, каким изобретения, что мастерит ',
        tachyon.get_colored_name(),
        ', могут погубить мир, ',
        you.get_colored_name(),
        ' идёт следом, а впереди ',
        tachyon.sex,
        ', и так вы приходите на поле',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' достаёт склянку с зельем — привычную и в то же время невиданную',
      ]);
      await era.printAndWait(
        'Привычную — потому что зелье, как всегда, светится',
      );
      await era.printAndWait(
        'Невиданную — потому что свет у него не похож ни на один из обычных цветов',
      );
      await era.printAndWait(
        'Если уж описывать… это сине-белое сияние, но и не просто смесь синего с белым',
      );
      await era.printAndWait(
        'Может быть, эта склянка и правда способна перевернуть весь мир',
      );
      await era.printAndWait([
        'Непонятно почему, но ',
        you.get_colored_name(),
        ' вдруг ловит себя на этой мысли',
      ]);
      await era.printAndWait([
        'Вот только к добру этот переворот или к худу — ',
        you.get_colored_name(),
        ' пока разобрать не может',
      ]);
      era.println();
      await tachyon.say_and_wait('Ну что ж, я пью');
      era.println();
      await era.printAndWait([
        'Не успеваешь и слова сказать, как ',
        tachyon.get_colored_name(),
        ' мигом откупоривает склянку и опрокидывает её в себя',
      ]);
      era.println();
      await tachyon.say_and_wait('А потом…');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' вдруг срывается с места и бежит. Всё происходит так внезапно, что ',
        you.get_colored_name(),
        ' не успевает даже шевельнуться',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' отбегает обычную тренировочную норму и, не покраснев и не запыхавшись, возвращается туда, где стоит ',
        you.get_colored_name(),
        ', — прямо под бок',
      ]);
      await era.printAndWait([
        'Нагрузка такого уровня для той, какой ',
        tachyon.sex,
        ' стала теперь, давно уже пустяк,',
      ]);
      await era.printAndWait([
        'точнее, если верить вашим тогдашним замерам, та, какой ',
        tachyon.sex,
        ' стала теперь, давно должна была упереться в предел, который есть у ',
        tachyon.uma_sex_title,
        ' как у вида…',
      ]);
      era.println();
      await era.printAndWait([
        'Дойдя до этого, ',
        you.get_colored_name(),
        ' вдруг ловит одну мысль',
      ]);
      await era.printAndWait([
        'Мысль безумная, но если всё так… тогда всему, что делает ',
        tachyon.sex,
        ', всему этому разом находится объяснение',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' дрожащей рукой роется в карманах, ища то, что когда-то ',
        tachyon.sex,
        ' подарила для ',
        you.get_colored_name(),
        ' — ту самую пару очков',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Ну как, ',
        callname,
        '? Та я, которую ты видишь сейчас, — 『это сколько』?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит, и вот ',
        tachyon.sex,
        ': цифры и знаки над её головой — уже не 「SS+ 1200」, что означало предел, а…',
      ]);
      await era.printAndWait('「UG 1205」', {
        color: adaptability_colors.at(-1),
      });
      era.drawLine();
      await tachyon.print_and_wait([
        'Увидев выражение лица у ',
        you.get_colored_actual_name(),
        ', ',
        tachyon.get_colored_name(),
        ' улыбнулась',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        ' и без приборов знает, что с ней происходит: ведь кто лучше, чем ',
        tachyon.sex,
        ', знает собственное тело?',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        ' хочет, по сути, лишь одного: увидеть прямо перед собой у ',
        you.get_colored_actual_name(),
        ' вот такое лицо',
      ]);
      era.println();
      await tachyon.print_and_wait('Три года, пройденные вместе с ним');
      await tachyon.print_and_wait(
        'Те дни, когда ради мечты выкладывались без остатка',
      );
      await tachyon.print_and_wait(
        'Труд двоих, пот и слёзы до последней капли — и только так пробита',
      );
      era.println();
      await tachyon.print_and_wait('преграда по имени предел');
      era.println();
      await tachyon.print_and_wait('Удивлён(а)? Рад(а)? Потрясён(а)?');
      await tachyon.print_and_wait([
        'Мало-помалу ',
        tachyon.get_colored_name(),
        ' уже не справляется с собственным лицом',
      ]);
      await tachyon.print_and_wait(
        'Ах, ведь эту фразу хотелось произнести куда легче, небрежнее',
      );
      await tachyon.print_and_wait(
        'Но уголки губ, как ни держись, ползут вверх',
      );
      await tachyon.print_and_wait(
        'Но из уголков глаз, не слушаясь, текут слёзы',
      );
      await tachyon.print_and_wait('Это и есть — плакать от радости?');
      await tachyon.print_and_wait('Нет, не сдержаться');
      era.println();
      await tachyon.say_and_wait([
        'Ну же, ',
        callname,
        ', давай вместе исследуем мир, что лежит за пределом!',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'Нет, у меня сейчас наверняка жутко глупое лицо',
      );
      await tachyon.print_and_wait(
        'Ну в самом деле, с таким лицом идти на переговоры — кто ж такому поверит',
      );
      await tachyon.print_and_wait(
        'Если кто и доверится тому, у кого такое дурацкое лицо…',
      );
      era.println();
      await tachyon.print_and_wait('Хе-хе, то это наверняка псих или безумец');
      await tachyon.print_and_wait([
        'Например, точно такое же глупое лицо, а в глазах всё так же сверкает сводящий с ума свет, — прямо передо мной ',
        you.get_colored_actual_name(),
        ', такой же',
      ]);
      era.println();
      await era.printAndWait(
        'Безумная учёная и фанатично преданная свинка получили финал, что подходит им обоим',
      );
    };
    f.title = title;
    return f;
  })(),
};
