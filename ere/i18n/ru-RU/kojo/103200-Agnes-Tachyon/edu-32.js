/**
 * @file 爱丽速子 - 育成
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ...require('#/i18n/ru-RU/kojo/103200-Agnes-Tachyon/edu-32-plan-a'),
  ...require('#/i18n/ru-RU/kojo/103200-Agnes-Tachyon/edu-32-plan-b'),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {string} callname 爱丽速子对玩家的称呼
   * @param {string} call_25 爱丽速子对曼城茶座的称呼
   * @param {number} rel 爱丽速子对玩家的好感度
   * @param {number} love 爱丽速子对玩家的爱慕值
   * @param {number} moti 爱丽速子的干劲
   * @param {number} stmn_rat 爱丽速子的体力百分比
   */
  async train(tachyon, you, callname, call_25, rel, love, moti, stmn_rat) {
    const buffer = [];
    if (love >= 90 && rel > 75 && stmn_rat > 0.45) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            'Пошли-пошли, ',
            callname,
            ' ~~ скорее начнём сегодняшний опыт',
          ]);
          await tachyon.say_and_wait('…Или мне звать тебя «дорогой»❤️');
        },
        async () => {
          await tachyon.say_and_wait([
            'Форма хорошая? Хе-хе, пока рядом ',
            callname,
            ' я в той же отличной форме, какой бы ни был день',
          ]);
          await tachyon.say_and_wait('…Конечно, и в другом смысле тоже❤️');
        },
      );
      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            callname,
            '~~сегодняшнюю тренировку нельзя халтурить',
          ]);
          await tachyon.say_and_wait(
            'Почему? Ну тебя… даже базовой биологии не знаешь?',
          );
          await tachyon.say_and_wait(
            'Недогрузка материнского организма бьёт по здоровью потомства❤',
          );
          await tachyon.say_and_wait(
            'Ради зачатия не жалей, папа нашего ребёнка❤',
          );
        });
      }
    } else if (love >= 75 && rel > 75 && (moti >= 0 || stmn_rat > 0.45)) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([callname, '…Я о чём-то думаю']);
              await tachyon.say_and_wait([
                'На тренировках стоит подумать, что ',
                callname,
                ' смотришь — и сразу прёт мотивация',
              ]);
              await tachyon.say_and_wait(
                'Мм… влияние любви? Тема ничего; в следующий раз сравним, как разные проявления любви бьют по результату тренировки',
              );
            },
            async () => {
              await tachyon.say_and_wait([
                'Говорят, тренер — тот, кто ',
                tachyon.uma_sex_title,
                ' 『приручает』: в «приручении» прячется лошадь, и «приручить» звучит почти как «тренировать»',
              ]);
              await tachyon.say_and_wait([
                'Если так — тренер-кун, который приручил вот такую меня, чего сегодня хочешь❤',
              ]);
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait(
                'Э-э~~ заставляешь любимую в плохой форме ублажать тебя телом?',
              );
              await tachyon.say_and_wait([
                '……',
                callname,
                ', не думала, что ты из таких… уу…',
              ]);
              await tachyon.say_and_wait(
                'Тц-тц, шутка — не надо всерьёз… но если хочешь пожестче, я не против❤',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                'Тренировка? Лучше опыт… сегодняшнее ещё не доделано, куда спешить',
              );
              await tachyon.say_and_wait(
                'Мм? Уже без церемоний? Хе-хе, валяй что умеешь, я жду',
              );
              await tachyon.say_and_wait('Ст… на руки… это слишком стыдно…');
            },
          );
        }
      } else if (moti >= 0) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait(
              'Фух… иногда как следует попотеть — ничего. Отдых? При такой форме жалко отдыхать.',
            );
            await tachyon.say_and_wait([
              'Стой, ',
              callname,
              ', что ты делаешь… не нюхай… сейчас воняю…',
            ]);
            await tachyon.say_and_wait(
              'Л-ладно… пойду отдохну, только не нюхай…',
            );
            await tachyon.say_and_wait([
              'Что значит «можно продолжать»!? ',
              callname,
              ', ты… правда извращенец',
            ]);
            await tachyon.say_and_wait(
              'Ну тебя, хотя та, кого это возбуждает, — тоже извращенка, без вариантов❤',
            );
          },
          async () => {
            await tachyon.say_and_wait('Сил нет, нужен отдых?');
            await tachyon.say_and_wait(
              '…А всё из-за кое-кого на днях… поясница до сих пор ноет…',
            );
            await tachyon.say_and_wait(
              'Эй! …Ну тебя, «поясница ноет» — это фигурально… не драматизируй… так за меня боишься?❤',
            );
          },
          async () => {
            await tachyon.say_and_wait('Хаа… хаа…');
            await tachyon.say_and_wait(
              'Ничего, до «выносливость на нуле» ещё далеко!',
            );
            await tachyon.say_and_wait([
              'Но… если правда не выдержу — восполнишь мне 『семени』 сил, ',
              callname,
              '❤️',
            ]);
          },
        );
      }
    } else if (rel > 225 && (moti >= 0 || stmn_rat > 0.45)) {
      if (moti >= 0) {
        if (stmn_rat > 0.45) {
          buffer.push(
            () =>
              tachyon.say_and_wait(
                'Быстрее-быстрее! Время не ждёт! Сегодняшних данных хватит накрутить пять статей! Два месяца грантов можно не париться!',
              ),
            async () => {
              await tachyon.say_and_wait([
                'Тренировка? Без проблем, но условие, ',
                callname,
                ', сегодня и ты побежишь рядом?',
              ]);
              await tachyon.say_and_wait([
                'Без проблем-без проблем: короткий рывок — и ты уже не уступишь в скорости ',
                tachyon.uma_sex_title,
                '…',
              ]);
              await tachyon.say_and_wait(
                'Без проблем-без проблем, мм, коротко — секунд… пять?',
              );
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                'Тренировка? Опять круги по полю… слушай, ',
                callname,
                ', нельзя что-то повеселее?',
              ]);
              await tachyon.say_and_wait(
                'Например… рулетка зелий? По пять пробирок со случайным эффектом — и гонка?',
              );
              await tachyon.say_and_wait([
                'Сначала найти согласную ',
                tachyon.uma_sex_title,
                '? ',
                call_25,
                '…ээ, нельзя?',
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                'Слушай, ',
                callname,
                ', спокойно разберём: ежедневные нагрузки правда эффективнее исследований?',
              ]);
              await tachyon.say_and_wait(
                'Что? Моё особое событие — +5 за раз, откуда уверенность тягаться с тренировкой?',
              );
              await tachyon.say_and_wait([
                'Нет, стой, ',
                callname,
                ' о чём ты… я не понимаю…',
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                'Ээ… тренировка — морока, хочешь бежать — беги сам(а)',
              );
              await tachyon.say_and_wait([
                '«Хорошая девочка»… слушай, ',
                callname,
                ', ты меня за ребёнка не держишь?',
              ]);
              await tachyon.say_and_wait(
                'Хотя… иногда пробежаться — не вредно, наверное.',
              );
            },
          );
        }
      } else if (stmn_rat > 0.45) {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              '…Я вижу свет… ещё, ещё чуть — догоню… он впереди…',
            ]),
          async () => {
            await tachyon.say_and_wait([
              callname,
              '…дай… лекарство… скорее… не выдержу…',
            ]);
            await tachyon.say_and_wait(
              'А, да-да, именно оно, именно оно — без него как жить…',
            );
            await tachyon.say_and_wait(
              'Мм? Странно говорю? Обычный нутриент, что странного? Как после дозы? Так думает только тот, у кого в башке одно это',
            );
          },
        );
      }
    } else if (rel > 75) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            () => tachyon.say_and_wait([callname, '! Начинаем исследование!']),
            () =>
              tachyon.say_and_wait(
                'Форма — пик! Сегодня точно выбегу рекорд уровня времени Планка!',
              ),
            () => tachyon.say_and_wait('До сверхсвета! До края возможностей!'),
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait('…Скука');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' бормочет себе под нос.',
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                callname,
                '…Я считаю, для опыта озарение критично: успех — 99% труда плюс 1% озарения, но без этого 1% хоть 99%, хоть 99.99% труда — одинаково впустую. Понимаешь, о чём я?',
              ]);
              await tachyon.say_and_wait(
                'Нет, я не для того, чтобы слить тренировку, — констатирую факт,',
              );
              await tachyon.say_and_wait(
                'но раз ты заговорил(а) об этом — давай и подставим: значит, сегодняшняя тренировка…',
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' качаешь головой',
              ]);
              await tachyon.say_and_wait('Тц');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' цокает языком',
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                'Тренировка? Сегодняшний опыт ещё не доделан. Эх… ладно, как закончу опыт — приду',
              );
              await era.printAndWait([
                'В итоге перед тем, как ',
                tachyon.get_colored_name(),
                ' явится на тренировку, ',
                you.get_colored_name(),
                ' ждёт целых три часа — до заката. Только тогда ',
                tachyon.sex,
                ' появляется на Тренировочном поле',
              ]);
            },
          );
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              'Хаа хаа… силы? Нормально, сегодня точно пробью… хаа, хаа…',
            ),
          () =>
            tachyon.say_and_wait(
              'До предела… только на пределе сил виден настоящий прорыв!',
            ),
          () =>
            tachyon.say_and_wait(
              'Разум орёт, что пора отдыхать, а чувства никак не хотят останавливаться… счастливая мука, ха-ха-ха!',
            ),
        );
      }
    } else if (stmn_rat > 0.45) {
      if (moti >= 0) {
        buffer.push(
          () => tachyon.say_and_wait('Итак, начинаем опыт.'),
          () =>
            tachyon.say_and_wait(
              'Быстрее, готовь запись данных, не отвлекайся.',
            ),
          async () => {
            await tachyon.say_and_wait('Хм…');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' молчит, но ',
              you.get_colored_name(),
              ' видит: ',
              tachyon.sex,
              ' пышет запалом.',
            ]);
          },
        );
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              'Что медлишь — готовь запись данных; ошибёшься — шкуру сдеру.',
            ),
          () =>
            tachyon.say_and_wait(
              'Направление неверно… почему… сил полно, а уверенности пробить предел — ноль…',
            ),
          async () => {
            await tachyon.say_and_wait(
              '…Твои опыты последнее время всё скучнее',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' смотрит опасным взглядом на ',
              you.get_colored_name(),
              '.',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('…Начинаем опыт.');
          await tachyon.say_and_wait(
            'Устала? Нет, чую: в этот раз, в этот раз точно пробью потолок…',
          );
        },
        () => tachyon.say_and_wait('Нужно быстрее… гх… тело… не слушается…'),
        async () => {
          await tachyon.say_and_wait(
            'Шутки какие… первое условие пробить предел — дойти до предела.',
          );
          await tachyon.say_and_wait(
            'Ещё быстрее; не дойдя до предела… о каком выходе за него речь…!',
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * 爱慕热恋及以上，好感融洽及以上，体力>45%，高干劲，30%概率触发
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {string} callname 爱丽速子对玩家的称呼
   */
  async train_kiss(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      ', сегодня у меня такой редкий запал к тренировке — разве такой любимой скаковой не полагается награда?',
    ]);
    await tachyon.say_and_wait(
      '…После тренировки? Слушай, я столько ждать не могу',
    );
    await tachyon.say_and_wait('Мм… хлюп… чмок… шлёп… чмок… хлюп');
    await tachyon.say_and_wait(
      'Фух… зачёт пока что; остальное — после тренировки❤️',
    );
  },
  /**
   * 爱慕热恋及以上，好感融洽及以上，体力>45%，低干劲，30%概率触发
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async train_sex(tachyon, you) {
    await tachyon.say_and_wait('Тренировка? Мм… сначала сегодняшнее зелье');
    await tachyon.say_and_wait(
      'Жар по телу? Туман в голове? Ничего-ничего, так и должно',
    );
    await tachyon.say_and_wait('Хм… время вроде подошло,');
    await tachyon.say_and_wait(
      'Итак, сегодняшнее зелье поднимает женские и мужские гормоны, кортизол, гормон роста и вазопрессин выше среднего; по-простому — афродизиак❤️',
    );
    await tachyon.say_and_wait('Тренировку — потом❤️');
    era.printButton('Здесь уж послушаемся члена…', 1);
    era.printButton('「Хватит дурью маяться, на тренировку!」', 2, {
      disabled: era.get('talent:0:钢之意志') > 0,
    });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        'Поддавшись соблазну ',
        tachyon.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' валит — ',
        tachyon.sex,
        ' оказывается на узкой койке в лаборатории…',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' держишься выученной Стальной волей и не поддаёшься',
      ]);
      await tachyon.say_and_wait('И так можно!?');
      await era.printAndWait([
        you.get_colored_name(),
        ' не слушаешь ворчание ',
        tachyon.get_colored_name(),
        ' и силой тащишь — ',
        tachyon.sex,
        ' оказывается на Тренировочном поле.',
      ]);
    }
    return ret;
  },
  tr_help_tyr: (() => {
    const title = 'Пособничество злодею (?)';
    /**
     * 好感喜爱及以上，中高干劲，体力<45%，25%概率触发，每轮育成限1次
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     */
    const f = async (tachyon, coffee, you, callname, c_call_t) => {
      await tachyon.say_and_wait([
        callname,
        ', с чего ты взял(а), что сможешь совладать с силой, которой обладает ',
        tachyon.uma_sex_title,
        '?',
      ]);
      era.println();
      await era.printAndWait([
        'В лаборатории ',
        tachyon.get_colored_name(),
        ' говорит с явным интересом',
      ]);
      await era.printAndWait(
        'Тон звучит совершенно беспечно, в нём — абсолютная уверенность',
      );
      await era.printAndWait(
        'Уверенность, которую дают видовой разрыв и разница в даровании',
      );
      era.println();
      await tachyon.say_and_wait(
        'Ты ведь уже понял(а)? Вот она, разница между нами. Так что, если можно, я бы хотела, чтобы ты…',
      );
      era.println();
      await era.printAndWait([
        'Тело, которое не сдвинуть, сколько ни налегай, и ведь такое маленькое и хрупкое — вот в чём чудо существ по имени ',
        tachyon.uma_sex_title,
        '.',
      ]);
      !you.race &&
        (await era.printAndWait('Но… у человека тоже есть своё достоинство'));
      era.println();
      await tachyon.say_and_wait(
        'О? Ещё и силы лишние остались? Хе-хе, упорство твоё я, так и быть, признаю, но похвалы заслуживает только оно',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' насмехается над бесплодными потугами, которые предпринимает ',
        you.get_colored_name(),
        '. Но всё быстро приедается, и вот ',
        tachyon.sex,
        ' смотрит, как ',
        you.get_colored_name(),
        ' снова и снова повторяет бесплодные попытки, — и ',
        tachyon.sex,
        ' понемногу начинает скучать',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '…прекрати барахтаться. Ты ведь и сам(а) знаешь, разве нет? Все эти трепыхания — просто трата сил, вот именно…',
      ]);
      era.println();
      await era.printAndWait([
        'А-а, ',
        tachyon.sex,
        ' произносит заявление, способное низвергнуть любого тренера в бездну',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Как ты меня ни тяни, на тренировку я с тобой ни за что не пойду',
      );
      era.println();
      await era.printAndWait('Другими словами, дело обстоит так');
      await era.printAndWait([
        'Не желающая идти на тренировку ',
        tachyon.get_colored_name(),
        ', и настаивающий(ая) на том, что сегодня тренировка обязательна, ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        'Она отчаянно упирается в стул, лишь бы её не сгрёб ',
        you.get_colored_name(),
        ', а за талию её отчаянно тянет тот, кто хочет, чтобы ',
        tachyon.sex,
        ' отцепилась от лабораторного стола, чтобы ',
        tachyon.sex,
        ' ушла оттуда, — а именно ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        'Именно так: между этими двумя идёт до крайности скучное перетягивание',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', сдавайся уж, куда человеку… ай, больно!?',
      ]);
      era.println();
      await era.printAndWait([
        'Занеслась — и вот ',
        tachyon.sex,
        ', похоже, забыла, что это именно ',
        tachyon.sex,
        ' всё и переделала, а потому ',
        you.get_colored_name(),
        ' давно обладает силой, пусть и не равной той, что есть у ',
        tachyon.uma_sex_title,
        ', но всё же процентов на семьдесят-восемьдесят от неё',
      ]);
      await era.printAndWait([
        'Благодаря этой чудовищной силе, а ещё тому, что ',
        tachyon.get_colored_name(),
        ' высокомерна и слишком занеслась, ',
        you.get_colored_name(),
        ' быстро подхватывает снизу — и вот ',
        tachyon.get_colored_name(),
        ' уже висит, оторванная от пола по пояс, и только ',
        tachyon.sex,
        ' держится обеими руками, отчаянно цепляясь за лабораторный стол',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Н-не думала, что всё-таки тебя недооценила, ',
        callname,
        '…но такой небрежности во второй раз не будет! Даже если за лабораторный стол цепляются всего две руки, я, Агнес Тахион, всё равно непобедима в этой лаборатории! Ку-хе-хе… ку-ха-ха-ха-ха-ха-ха!… у-уа!?',
      ]);
      era.println();
      await era.printAndWait([
        'Как раз когда вы оба решили, что эта скучная война протянется ещё минут пятнадцать-двадцать, случилось нечто удивительное',
      ]);
      await era.printAndWait([
        'Будто в него вселилась какая-то неведомая сила: для ',
        tachyon.get_colored_name(),
        ' весь лабораторный стол вдруг раскалился, как магма, и ',
        tachyon.sex,
        ' вынуждена была разжать руки',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' валятся на пол оба, а ',
        tachyon.get_colored_name(),
        ', поднявшись, торопливо осматривает свои руки — но на них ни следа ожога, будто всё это ей только почудилось',
      ]);
      era.println();
      await coffee.say_and_wait([
        '…пожалуйста, уведите поскорее ',
        c_call_t,
        ' отсюда… ',
        tachyon.sex,
        ' такая надоедливая…',
      ]);
      era.println();
      await era.printAndWait([
        'Заговорила та, что делит с ',
        tachyon.get_colored_name(),
        ' один и тот же пустой кабинет, — потусторонняя тёмно-гнедая ',
        tachyon.uma_sex_title,
        ', ',
        coffee.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        'Неизвестно, каким способом она добилась того, чтобы ',
        tachyon.get_colored_name(),
        ' разжала руки, но чтобы ',
        tachyon.sex,
        ' снова не нашла повода засесть в лаборатории и не выходить, ',
        you.get_colored_name(),
        ', даже не поблагодарив, хватает ',
        tachyon.get_colored_name(),
        ' и спешно уносится на Тренировочное поле',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tr_incm_cmb: (() => {
    const title = 'Неполное сгорание';
    /**
     * 低干劲，体力<45%，男Tx马娘
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('Сегодняшняя цель… это…');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' тревожно смотришь на ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Сегодня ',
        tachyon.sex,
        ' всё так же ставит опыт ради прорыва предела — иначе говоря, тренируется',
      ]);
      await era.printAndWait([
        'Если ',
        tachyon.sex,
        ' полна сил, но форма плохая — ',
        you.get_colored_name(),
        ' наверняка ожесточится и столкнёт её в опыт: иногда нужна жёсткость',
      ]);
      await era.printAndWait([
        'Если ',
        tachyon.sex,
        ' выдохлась, но форма поразительно хороша — ',
        you.get_colored_name(),
        ' после раздумий всё равно попытается: пусть ',
        tachyon.sex,
        ' продолжает нагрузку, ',
      ]);
      await era.printAndWait([
        'ведь как говорили тренеры-сэмпаи, близость к душе ',
        tachyon.uma_sex_title,
        ' — главная работа тренера',
      ]);
      await era.printAndWait('Но…');
      era.println();
      era.print([
        'Явно обессиленная и рассеянная ',
        tachyon.sex,
        ', ',
        you.get_colored_name(),
        ' правда сможет ожесточиться?',
      ]);
      era.printButton('「…Продолжай」(фактор покорности +100)', 1);
      era.printButton('「…Отдыхай」(настрой↑)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Ради цели и мечты ',
          tachyon.get_colored_name(),
          ' … и капли своей корысти',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь, как сейчас выглядит ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Сквозь промокшую от пота форму просвечивает белая кожа — резко против пятен грязи от бега; облегающая форма ещё сильнее выдаёт: ',
          tachyon.sex,
          ' сложена отлично',
        ]);
        await era.printAndWait(
          'Круглая грудь и жопа, одышка от усталости, румянец на щеках — вроде тренировка, а мысль сама лезет не туда',
        );
        await era.printAndWait(
          'Если бы те прыгающие шары можно было мять в руках как свои',
        );
        await era.printAndWait(
          'Если бы заткнуть губами тот рот, что обычно тебя игнорирует, и оставить только сладкие стоны',
        );
        await era.printAndWait(
          'Для тренера, для взрослого человека такие мысли — табу',
        );
        await era.printAndWait([
          'Но с позиции мужчины желание внутри не даёт ',
          you.get_colored_name(),
          ' возразить',
        ]);
        await era.printAndWait([
          'Колеблясь, жалея, ',
          you.get_colored_name(),
          ' всё равно делает вид, будто не видит: ',
          tachyon.sex,
          ' не в себе. Пусть ',
          tachyon.sex,
          ' продолжает тренировку',
        ]);
        await era.printAndWait([
          '…То ли разглядела в ',
          you.get_colored_name(),
          ' грязь внутри, то ли просто злит, что тренировка идёт дальше, — ',
          tachyon.get_colored_name(),
          ' молчит, но сверлит взглядом ',
          you.get_colored_name(),
          '.',
        ]);
      } else {
        await era.printAndWait('Тренер должен избегать неразумной перегрузки');
        await era.printAndWait([
          you.get_colored_name(),
          ' — как только ',
          tachyon.get_colored_name(),
          ' заканчивает круг, сразу кричишь стоп',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…Конец? Опыт только начался, ещё столько сравн… сравн… ах…',
        );
        await era.printAndWait([
          tachyon.sex,
          ' — жёсткая речь обрывается на полуслове: не выдерживает и стонет',
        ]);
        await era.printAndWait(
          'Кто бы подумал: чуть надавил на внутреннюю сторону голени — и такой жёсткий рот вдруг выдаёт такой сладкий звук',
        );
        await era.printAndWait([
          'Конечно, ',
          you.get_colored_name(),
          ' мнёт не настолько волшебно, чтобы сразу возбудить: корень всего — ',
          tachyon.get_colored_name(),
          ' сама',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' поддерживаешь обмякшую ',
          tachyon.get_colored_name(),
          ' и слегка мнёшь уже чуть опухшие икры — ',
          tachyon.sex,
          ' не дёргается',
        ]);
        era.println();
        await tachyon.say_and_wait('…мм… ах… так… нельзя… стой… ах-мм…');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          ' не может не стонать — и стон пьянит',
        ]);
        await era.printAndWait([
          'Белая кожа уже чуть красная и опухшая; стоит нажать другое место — ',
          tachyon.sex,
          ' издаёт звук, от которого мысль сама лезет не туда, будто ',
          you.get_colored_name(),
          ' занят(а) не здоровым массажем, а чем-то более злым и грязным',
        ]);
        await era.printAndWait([
          'На священном треке такое не остаётся без глаз: незаметно мелкие ',
          tachyon.uma_sex_title,
          ' тоже тянутся на сладкие стоны ',
          tachyon.get_colored_name(),
          '.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Ст… ',
          callname,
          '…ии… нельзя… люди… ааа~~♡',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' мнёшь, будто не слышишь',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' — ноги ещё нежнее и тоньше, чем мерещилось ',
          you.get_colored_name(),
          '. Лёгкая хватка даёт ',
          you.get_colored_name(),
          ' иллюзию, что ',
          tachyon.sex,
          ' целиком в твоей власти',
        ]);
        await era.printAndWait([
          'А каково было бы в постели: смотреть, как ',
          tachyon.sex,
          ' не хочет — и всё равно стонет; взять за ноги, развести — ',
          tachyon.sex,
          ' раскроется, и торжество накроет сильнее всего на свете',
        ]);
        era.println();
        await tachyon.say_and_wait('…! Туда нельзя!');
        era.println();
        await era.printAndWait([
          'И вот уже разгорячённый(ая) ',
          you.get_colored_name(),
          ' забирается выше — к бёдрам',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' с силой дёргает ноги — ',
          you.get_colored_name(),
          ' вдруг в рассудке: ',
          you.get_colored_name(),
          ' видит перед собой — ',
          tachyon.teen_sex_title,
          ', а сила — втрое выше взрослого мужчины, ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' спешно извиняешься — ',
          tachyon.sex,
          ' это слышит',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…П-поняла… сегодня хватит… мне… нужно отдохнуть…',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' выпаливает это скороговоркой и хочет вернуться в лабораторию — но силы кончаются, и она обмякает на груди — ',
          you.get_colored_name(),
          ' держит',
        ]);
        await era.printAndWait([
          'Сейчас вы двое ни капли не похожи на тренера и ',
          tachyon.uma_sex_title,
          ' на обычной тренировке — скорее на девушку в объятиях парня и на того, кто нежно обнимает — ',
          tachyon.sex,
          ' в руках',
        ]);
        await era.printAndWait([
          'Безумный учёный, которого все боятся, сейчас жмётся птенцом к ',
          you.get_colored_name(),
          ' на груди',
        ]);
        await era.printAndWait([
          'И ',
          you.get_colored_name(),
          ' не может не раздуться от гордости',
        ]);
        era.println();
        await tachyon.say_and_wait('…В лабораторию. Сейчас. Немедленно');
        era.println();
        await era.printAndWait([
          'Но взгляд учёного — и ',
          you.get_colored_name(),
          ' снова послушная свинка',
        ]);
        await era.printAndWait([
          'Так вы вдвоём под взглядами окружающих ',
          tachyon.uma_sex_title,
          ' — наполовину восторг, наполовину зависть — медленно идёте в лабораторию',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param callname 爱丽速子对玩家的称呼
   * @param call_25 爱丽速子对曼城茶座的称呼
   * @param stmn_rat 爱丽速子的体力百分比
   * @param plan_b 是否进入 Plan B
   */
  async train_success(tachyon, you, callname, call_25, stmn_rat, plan_b) {
    era.print([tachyon.get_colored_name(), ' успешно завершила тренировку!']);
    era.println();
    const buffer = [];
    if (plan_b && era.get('cflag:32:育成回合计时') < 95 + 16) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            'Чтобы ',
            call_25,
            '… поднялся(ась) ещё на ступень выше',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' закончила тренировку с особым усердием, но лозунг, который ',
            tachyon.sex,
            ' выкрикивала при этом, ставит в тупик',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            'Если я не постараюсь, если не догоню ',
            call_25,
            ', то…',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' закончила тренировку',
          ]);
          await era.printAndWait('Бежит по-прежнему ослепительно');
          await era.printAndWait(
            'Но всё время кажется, что чего-то не хватает',
          );
        },
        async () => {
          await tachyon.say_and_wait('Ради успеха опыта… даже я готова…');
          era.println();
          await era.printAndWait([
            'Закончившая тренировку ',
            tachyon.get_colored_name(),
            ' бормочет это себе под нос, и хотя слова именно такие, в голосе, которым ',
            tachyon.sex,
            ' их произносит, будто сквозит нотка сомнения',
          ]);
          await era.printAndWait([
            '…нет, возможно, это просто ',
            you.get_colored_name(),
            ' сам(а) себе всё это додумал(а)',
          ]);
        },
      );
    } else if (era.get('love:32') >= 75) {
      if (stmn_rat > 0.45) {
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '!']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' после тренировки, вся в поту, бросается навстречу — ',
            you.get_colored_name(),
            '.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' спешишь отодвинуть — ',
            tachyon.sex,
            ' от себя не отходит',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Ну и что, это же жидкости любимой… в крайнем случае вечером вернёшь мне свои♡',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' не слушает протесты ',
            you.get_colored_name(),
            ', обнимает ',
            you.get_colored_name(),
            ' и шепчет на ухо ',
            you.get_colored_name(),
            '.',
          ]);
        });
      } else {
        buffer.push(async () => {
          await tachyon.say_and_wait('Фух… тренировка закончилась… наконец-то');
          await tachyon.say_and_wait(
            'Ну тебя… из спорта я больше люблю не бег, а тот, что ночью…',
          );
          await tachyon.say_and_wait([
            'Ну как, ',
            callname,
            ', удовлетворишь меня, да?♡',
          ]);
        });
      }
    } else if (era.get('love:32') >= 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('Хм-хм, ну как');
          await tachyon.say_and_wait(
            'Снова от меня без ума? Хе-хе, какая напыщенность',
          );
          await tachyon.say_and_wait('Но мне нравится♡');
        },
        async () => {
          await tachyon.say_and_wait([callname, '! ', callname, '…а']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' как обычно собирается броситься к ',
            you.get_colored_name(),
            ', но вдруг останавливается',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '…нет, сейчас, пожалуй, всё-таки не стоит',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' оглядывает свою насквозь пропотевшую спортивную форму и почему-то держится на расстоянии от ',
            you.get_colored_name(),
            '.',
          ]);
          await era.printAndWait('Неужели… её смущает запах?');
          await era.printAndWait([
            'Нет, если это та самая ',
            tachyon.get_colored_name(),
            '… то вряд ли',
          ]);
        },
      );
    } else if (era.get('relation:32:0') > 525) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            'Хм-хм-хм, ',
            callname,
            ', как я сегодня бежала! Можешь хвалить и побольше, ничего страшного!',
          ]);
          era.println();
          await era.printAndWait('Тридцать минут спустя');
          era.println();
          await tachyon.say_and_wait(
            '…нет, до такой степени хвалить всё-таки не обязательно…',
          );
        },
        async () => {
          await tachyon.say_and_wait('Фух… как устала…');
          await tachyon.say_and_wait([
            callname,
            '…отнеси меня на спине обратно отдыхать~~~~',
          ]);
        },
        async () => {
          await tachyon.say_and_wait(
            'Если так и продолжать… обязательно получится дойти',
          );
          await tachyon.say_and_wait('Цель на пределе…');
        },
      );
    } else if (era.get('relation:32:0') > 225) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            'Хм-хм… с такой скоростью, если и дальше стабильно расти, превзойти предел точно не проблема',
          );
          await tachyon.say_and_wait([
            '…не обязательно так спешить, можно и немного отдохнуть? ',
            callname,
            ', в исследованиях стоять на месте — значит откатываться назад. Чтобы расти над собой, нельзя расслабляться ни на миг',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('Ху-ха-ха-ха! Вот так, вот эта скорость!');
          await tachyon.say_and_wait(
            'Ещё быстрее, ещё быстрее, пока… не превзойду скорость света!',
          );
        },
        () =>
          tachyon.say_and_wait(
            'Дай-ка посмотреть время… хм-хм-хм… отлично, если так пойдёт, наша мечта уже недалеко!',
          ),
      );
    } else if (era.get('relation:32:0') > 75) {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            'Отлично, сегодняшний бег — это точно оптимальное решение!',
          ),
        () =>
          tachyon.say_and_wait([
            'Фух… ',
            callname,
            ', дай посмотреть данные… хе-хе, отлично, отлично, по сравнению с прошлой тренировкой опять большой рост. Если так пойдёт, точно всё получится',
          ]),
        () =>
          tachyon.say_and_wait(
            'Отлично, отлично, так прогресс исследования продвинулся ещё на 0.02 процентного пункта',
          ),
      );
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            'Фух, вот оно как… сегодняшний результат опыта неплох',
          ),
        () =>
          tachyon.say_and_wait(
            'Такая простая тренировка выполняется без всякого труда… это контрольная группа для замера силы?',
          ),
        () =>
          tachyon.say_and_wait(
            'Само собой разумеющийся результат, только и всего',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  ts_add_high_rel: (() => {
    const title = 'Погоня';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        '! Скорее задержи, пусть ',
        tachyon.sex,
        ' не убежит!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' только что закончила сегодняшнюю тренировку',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' как раз собираешься махнуть рукой, чтобы ',
        tachyon.get_colored_name(),
        ' возвращалась, но видишь, как ',
        tachyon.get_colored_name(),
        ' гонится за какой-то ',
        tachyon.uma_sex_title,
        ' и несётся прямо на ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        `${tachyon.uma_sex_title}A`,
        'П-помогите!',
      );
      await tachyon.say_and_wait(
        'Не бойся… ничего с тобой не будет! Просто хочу отнять у тебя немного времени, провести пару замеров, задать пару вопросов, а потом… потом… если бы ещё немножко испытать зелья…!',
      );
      era.println();
      await era.printAndWait([
        'Вот уже та самая ',
        tachyon.uma_sex_title,
        ' всё ближе и ближе к ',
        you.get_colored_name(),
        '.',
      ]);
      era.print([you.get_colored_name(), ' решаешь…']);
      era.printButton('Пропустить обеих', 1);
      era.printButton('Остановить Тахион', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          'Тренер ',
          you.adult_sex_title,
          ', почему вы просто смотрите!?',
        ]);
        await tachyon.say_and_wait([
          callname,
          ', почему ты не помог(ла) мне остановить — вон же ',
          tachyon.sex,
          '!?',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' отступаешь в сторону и пропускаешь обеих',
        ]);
        await era.printAndWait(
          'Обе разом выкрикивают возмущение, вот только возмущаются они разным',
        );
        await era.printAndWait([you.get_colored_name(), ' пожимаешь плечами']);
        await era.printAndWait([
          'Хоть и понятно, что ',
          tachyon.get_colored_name(),
          ' поступает нехорошо, но раз уж ты её свинка — а хозяйка тут ',
          tachyon.sex,
          ', — то и опытам её надо помогать, ведь ставит их ',
          tachyon.sex,
          '.',
        ]);
        await era.printAndWait('…вот же дилемма');
        await era.printAndWait([
          'Поэтому ',
          you.get_colored_name(),
          ' решает бросить думать: не помогать ни той, ни другой — так, наверное, и будет правильно',
        ]);
        era.drawLine();
        await era.printAndWait([
          'На следующий день ',
          you.get_colored_name(),
          ', придя в лабораторию, обнаруживает, что зелья, которое обычно стоит на столе для питья, стало вдвое больше',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь на ',
          tachyon.get_colored_name(),
          ', а ',
          tachyon.sex,
          ' лишь с непроницаемым лицом сверлит взглядом ',
          you.get_colored_name(),
        ]);
        await era.printAndWait(
          '…кто бы мог подумать, что пострадавшим всё равно окажется ты сам(а)',
        );
      } else {
        await era.printAndWait('Про опыты пока говорить не будем');
        await era.printAndWait([
          'На сегодняшней тренировке ',
          tachyon.get_colored_name(),
          ' набегала уже достаточно, добавить ещё — можно и навредить организму',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          'Тренер ',
          you.adult_sex_title,
          '! Спасибо вам!',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' удерживает ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          'Маленькая ',
          tachyon.uma_sex_title,
          ' убегает всё дальше, и ',
          tachyon.get_colored_name(),
          ', видя, что догнать уже не выйдет, только злобно зыркает на ',
          you.get_colored_name(),
        ]);
        await era.printAndWait([you.get_colored_name(), ' чует недоброе']);
        era.drawLine();
        await era.printAndWait([
          'На следующий день ',
          you.get_colored_name(),
          ', придя в лабораторию, обнаруживает, что зелья, которое обычно стоит на столе для питья, стало вдвое больше',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь на ',
          tachyon.get_colored_name(),
          ', а ',
          tachyon.sex,
          ' лишь с непроницаемым лицом сверлит взглядом ',
          you.get_colored_name(),
        ]);
        await era.printAndWait('…похоже, вчерашнее предчувствие было верным');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ts_add_low_rel: (() => {
    const title = 'Дополнительный опыт';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await tachyon.say_and_wait('Мало, данных опыта не хватает ещё кучи…');
      await tachyon.say_and_wait(
        'Надо продолжать… если не хочешь продолжать, иди домой, я и сама справлюсь',
      );
      era.println();
      era.print([you.get_colored_name(), ' решаешь']);
      era.printButton('Не мешать', 1);
      era.printButton('Остановить', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          'Если бы речь шла о чистой лишней тренировке, ты, возможно, смог(ла) бы это прекратить',
        );
        await era.printAndWait('Но данных опыта не хватает…');
        era.println();
        await you.say_and_wait(
          'И правда, это довольно критично… тогда сегодня задержимся ещё немного',
        );
        await tachyon.say_and_wait(
          '…я же сказала, что ты можешь идти? Это не лишняя тренировка, просто моему собственному опыту нужны данные',
        );
        you.say('Ага, поэтому');
        era.printButton('「Во время опыта без лаборанта же никак」', 1);
        era.printButton(
          '「Я сейчас не как тренер, это моё свободное время после работы, и как им распорядиться — моё дело, разве нет?」',
          2,
        );
        await era.input();
        await tachyon.say_and_wait('…хе-хе');
        await tachyon.say_and_wait('Тогда помоги мне записывать данные');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' киваешь и смотришь, как ',
          tachyon.sex,
          ' снова пускается бежать',
        ]);
      } else {
        await era.printAndWait('Нельзя');
        await era.printAndWait(
          'Под каким бы предлогом это ни подавалось, лишние тренировки допускать нельзя',
        );
        await era.printAndWait([
          'К тому же ',
          tachyon.get_colored_name(),
          ' и сама знает: так эффективность не вырастет. Наоборот, силком гнать сроки — только наделать ошибок в спешке',
        ]);
        era.println();
        await tachyon.say_and_wait('…цык');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' ничего не говорит и уходит',
        ]);
        await era.printAndWait([
          'Если убеждать разумно, послушается смирно — в этом ',
          tachyon.sex,
          ' и хороша',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = 'Перестроиться и начать заново';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} plan_b 是否进入 Plan B
     * @param {boolean} reg_toky_yus 是否报名日本德比
     * @param {number} fail_count 爱欲及以上情况下训练失败的次数
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      plan_b,
      reg_toky_yus,
      fail_count,
      fail_again,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' смотришь, как на поле тренируется ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        ' Почему-то ',
        you.get_colored_name(),
        ' всё не находит покоя',
      ]);
      await era.printAndWait([
        'Бег ',
        tachyon.get_colored_name(),
        ' вроде в порядке — а тревога всё равно есть',
      ]);
      await era.printAndWait([
        'Лишь бы без ЧП, — ',
        you.get_colored_name(),
        ' молится',
      ]);
      era.println();
      await era.printAndWait('И, как назло, именно сейчас ЧП случается');
      await era.printAndWait([
        'Прямо на глазах ',
        you.get_colored_name(),
        ', ',
        tachyon.get_colored_name(),
        ' вдруг семенит',
      ]);
      era.print('Вот-вот упадёт————');
      era.printButton('「Тахион! Стой!」(принять провал)', 1);
      era.printButton('—————! (попытаться вытянуть)', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (era.get('love:32') >= 50) {
          switch (fail_count) {
            case 0:
              await tachyon.say_and_wait([
                'Больно… ',
                callname,
                ', помассируй чуть, ладно?',
              ]);
              era.println();
              await era.printAndWait([
                'К упавшей ',
                tachyon.get_colored_name(),
                ' подбегаешь. ',
                you.get_colored_name(),
                ' ловко стаскивает обувь и носки — ',
                tachyon.sex,
                ' босая',
              ]);
              era.println();
              await tachyon.say_and_wait('Да… подъём… подошва…');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' слегка мнёшь точки на стопе — ',
                tachyon.sex,
                ' не отнимает ногу',
              ]);
              await era.printAndWait('Вроде бы самое обычное дело');
              await era.printAndWait(
                'Но… после бега стопа в носке преет и вся в поту',
              );
              await era.printAndWait([
                'Пока ',
                you.get_colored_name(),
                ' мнёт, липкий пот покрывает руки. ',
                you.get_colored_name(),
                ' невольно морщится.',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' снова и снова твердишь себе: обычный секрет тела, ничего больше',
              ]);
              await era.printAndWait('Но движения всё равно сами смягчаются');
              era.println();
              await tachyon.say_and_wait('Мм… нн…');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' то и дело стонет — и ',
                you.get_colored_name(),
                ' ещё сильнее возбуждается',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' мнёшь свод и подъём — пора бы остановиться, но руки сами по себе',
              ]);
              era.println();
              await tachyon.say_and_wait('Стой… пальцы…');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' рука медленно берёт за пальцы — ',
                tachyon.sex,
                ' не отнимает стопу',
              ]);
              await era.printAndWait('Обычный точечный массаж делают с маслом');
              await era.printAndWait([
                'Но пот ',
                tachyon.get_colored_name(),
                ' заменяет масло',
              ]);
              era.println();
              await tachyon.say_and_wait(['Стой… ', callname, '…больно!']);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' зовёт — и это возвращает ',
                you.get_colored_name(),
                ' рассудок',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' поднимаешь глаза на её лицо, а ',
                tachyon.sex,
                ' вся горит: похоже, ',
                tachyon.sex,
                ' тоже щёлкнула переключателем',
              ]);
              era.println();
              await tachyon.say_and_wait('…Остальное — в помещении, ладно?');
              break;
            case 1:
              await tachyon.say_and_wait('Больно~~♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' сегодня на тренировке снова 「случайно」 упала',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' смотришь: едва трава — ',
                tachyon.sex,
                ' уже без обуви и носков, и в тебе пол-похоти, пол-бессилия',
              ]);
              era.println();
              await tachyon.say_and_wait([
                callname,
                '~~скорее помассируй меня…♡♡',
              ]);
              era.println();
              await era.printAndWait([
                'Видя, что ',
                you.get_colored_name(),
                ' не двигается, ',
                tachyon.sex,
                ' капризно ступает босой по траве, чтобы привлечь ',
                you.get_colored_name(),
                '.',
              ]);
              await era.printAndWait(
                'Белая, тонкая, хрупкая босая стопа — как вещь из витрины; брызги пыли только оттеняют, какая она чистая',
              );
              era.println();
              await tachyon.say_and_wait('Ну же, ну же, разомни~~');
              era.println();
              await you.say_and_wait('Такую моду дальше пускать нельзя…', true);
              await era.printAndWait([
                you.get_colored_name(),
                ' мягко мнёшь ей стопу — ',
                tachyon.sex,
                ' позволяет',
              ]);
              era.println();
              await tachyon.say_and_wait('Мм-мм♡~~вот так… ах♡ сс♡ хаа♡');
              era.println();
              await era.printAndWait('Как всегда, этот сладкий голос');
              await era.printAndWait([
                'Каждый раз, как ',
                tachyon.get_colored_name(),
                ' открывает рот — это стон, который снова и снова дразнит похоть ',
                you.get_colored_name(),
                '.',
              ]);
              await era.printAndWait([
                'Хватит: ',
                tachyon.sex,
                ' так дальше нельзя',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' меняешь нажим',
              ]);
              era.println();
              await tachyon.say_and_wait([callname, '…ии—']);
              era.println();
              await era.printAndWait('С той силы, что была лаской');
              await era.printAndWait(
                'в миг — ярость, будто стопу сейчас раздавят',
              );
              era.println();
              await tachyon.say_and_wait([
                'Больно! Стой, ',
                callname,
                '! Нельзя! Хватит! Сейчас сломаешь аааааа!',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' не слушаешь — ',
                tachyon.sex,
                ' кричит — ты давишь ещё злее',
              ]);
              await era.printAndWait([
                'В массаже для ',
                tachyon.uma_sex_title,
                ' и в силе нажима тренеру нет равных на свете',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' держишь силу: кости целы, а ',
                tachyon.get_colored_name(),
                ' всё равно больно — и мнёшь всласть',
              ]);
              era.println();
              await tachyon.say_and_wait(
                'Стой, это я виновата! Прошу! Спаси! Не! Пусти! Не надо! Сс…!',
              );
              await tachyon.say_and_wait('Сс… хаа… хаа… хаа…');
              era.println();
              await era.printAndWait([
                'Вскоре ',
                tachyon.get_colored_name(),
                ' уже не голос — только шипение от боли',
              ]);
              await era.printAndWait([
                'Но мало: ',
                tachyon.sex,
                ' должна усвоить урок до конца',
              ]);
              era.println();
              await tachyon.say_and_wait('Мм… сс… хаа… мм♡');
              await tachyon.say_and_wait('Нн♡ мм… хаа♡');
              era.println();
              await era.printAndWait('…Чудится?');
              await era.printAndWait([
                'Или это голос ',
                tachyon.get_colored_name(),
                ' чуть меняет вкус',
              ]);
              await era.printAndWait([
                'Вовремя остановиться ты умеешь. ',
                you.get_colored_name(),
                ' видит: ',
                tachyon.sex,
                ' урок вроде усвоила — и ослабляешь нажим',
              ]);
              era.println();
              await tachyon.say_and_wait('Уу~~~~~');
              await tachyon.say_and_wait(
                'Только что так больно — и вдруг так нежно…',
              );
              await tachyon.say_and_wait('Нельзя… стой… я… сейчас…♡');
              era.println();
              await era.printAndWait('…Сам(а) вроде только массируешь');
              await era.printAndWait('Вскоре массаж кончается');
              await era.printAndWait([
                you.get_colored_name(),
                ' ведёшь в общежитие обессилевшую непонятно отчего ',
                tachyon.get_colored_name(),
                '.',
              ]);
              await era.printAndWait([
                'Так ',
                tachyon.sex,
                ' урок должна была понять',
              ]);
              era.println();
              await era.printAndWait('…Должна же?');
              break;
            case 2:
              await tachyon.say_and_wait([
                'Н-нг~~ ',
                callname,
                ', помассируй меня~~',
              ]);
              await tachyon.say_and_wait('Тот… тот самый массаж♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' гладит свои ноги и многозначительно говорит ',
                you.get_colored_name(),
                '.',
              ]);
              await era.printAndWait('Эта… так и не проняло');
              await era.printAndWait([
                'В этот раз ',
                tachyon.sex,
                ' правда должна усвоить урок',
              ]);
              await era.printAndWait([
                '…Но твой 「урок」 — может, ',
                tachyon.sex,
                ' это скорее награда?',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' спешно гонишь мысль',
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' ещё не должна была дойти до такого',
              ]);
              await era.printAndWait('…Должна же?');
              break;
            case 3:
              await tachyon.say_and_wait(['Больно… ', callname]);
              await tachyon.say_and_wait(' Нет, с ногой вроде всё…');
              await tachyon.say_and_wait('А вот с низом кое-кого — ещё вопрос');
              await tachyon.say_and_wait(
                'Почему, едва я сняла носок, ты вдруг согнулся(ась)?♡',
              );
              await tachyon.say_and_wait('Если травма — плохо… дай гляну♡');
              era.println();
              await era.printAndWait([
                'Услышав ',
                tachyon.get_colored_name(),
                ', ',
                you.get_colored_name(),
                ' деревенеет на месте',
              ]);
              await era.printAndWait([
                'Хочешь подойти проверить ',
                tachyon.get_colored_name(),
                ' — и боишься, что ',
                tachyon.sex,
                ' правда что-то выкинет',
              ]);
              era.println();
              await tachyon.say_and_wait('Нн… не идёшь? Жаль~~');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' отряхивается и встаёт сама',
              ]);
              await era.printAndWait('Эта… так и знал(а), притворялась');
          }
        } else {
          const buffer = [];
          if (era.get('relation:32:0') > 525) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([
                  'Не встану… ',
                  callname,
                  ', понеси на спине~~',
                ]);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' едва слышит голос ',
                  you.get_colored_name(),
                  ' — и сразу плюхается на траву',
                ]);
                await era.printAndWait([
                  'С глазами в слезах орёт на ',
                  you.get_colored_name(),
                  '.',
                ]);
                await era.printAndWait([
                  'А ',
                  tachyon.sex,
                  ' всегда была такой капризулей…?',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' с досадой, но сегодня тренировку точно пора сворачивать',
                ]);
              },
              async () => {
                await tachyon.say_and_wait('Ну тебя… я же ещё могла бежать…');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' пока проверяешь ноги ',
                  tachyon.get_colored_name(),
                  ', ',
                  tachyon.get_colored_name(),
                  ' надувает щёки',
                ]);
                era.println();
                await you.say_and_wait(
                  'Но я не могу дать Тахион так рисковать… Тахион (её ноги) для меня важнее всего',
                );
                await tachyon.say_and_wait('! …Раз ты так говоришь');
                era.println();
                await era.printAndWait([
                  'И почему-то ',
                  tachyon.get_colored_name(),
                  ' вдруг краснеет',
                ]);
                await era.printAndWait(
                  'Хотя что согласилась на осмотр — уже хорошо',
                );
              },
              async () => {
                await tachyon.say_and_wait([
                  'Хе-хе, всего один провал опыта — не думаешь же, что меня этим свалишь, ',
                  callname,
                ]);
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' с тревогой проверяешь ноги ',
                  tachyon.get_colored_name(),
                  '.',
                ]);
                await era.printAndWait('И даже сейчас её волнует опыт?');
                await era.printAndWait([
                  you.get_colored_name(),
                  ' не можешь не почувствовать и бессилие, и злость',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  'И ещё… я верю ',
                  callname,
                  ', ты меня ни за что не подставишь, да?',
                ]);
                era.println();
                await you.say_and_wait('…………');
                await era.printAndWait([
                  'Если подумать: не будь ',
                  tachyon.sex,
                  ' так зациклена на мечте — такой чистой ',
                  tachyon.uma_sex_title,
                ]);
                await era.printAndWait([
                  ', то и ты не пустился(лась) бы в это безумие вслед за такой, как ',
                  tachyon.sex,
                  '.',
                ]);
                await era.printAndWait([
                  'Когда у этого фантазёра в глазах только мечта и ',
                  tachyon.sex,
                  ' несётся вслепую — подсказывать ей, где ямка под ногой',
                ]);
                await era.printAndWait(
                  'В этом, наверное, и есть твоя работа свинки',
                );
                era.println();
                await tachyon.say_and_wait(
                  'Так что… пойдём разберём, что не так, и завтра снова за опыт!',
                );
                await you.say_and_wait('Нет, минимум через три дня');
                era.println();
                await era.printAndWait(
                  'Мечты и дали — потом; сейчас хотя бы ещё два дня понаблюдать',
                );
              },
            );
          } else if (era.get('relation:32:0') > 225) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([callname, '…Больно…']);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' сидит на траве со слезами в глазах и клянчит утешение у ',
                  you.get_colored_name(),
                  '.',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' спешно смотришь раны: ',
                  tachyon.sex,
                  ' в порядке — и только тогда выдыхаешь',
                ]);
              },
              async () => {
                await tachyon.say_and_wait(
                  '…Ничего, всего один сбой… опыт с нуля…',
                );
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' бормочет',
                ]);
                await era.printAndWait('…И даже сейчас думает об опыте');
                await era.printAndWait([
                  you.get_colored_name(),
                  ' с бессилием проверяешь ноги — ',
                  tachyon.sex,
                  ' вроде цела',
                ]);
              },
              async () => {
                await tachyon.say_and_wait([
                  'Гх… ',
                  callname,
                  '…я… я в порядке',
                ]);
                await era.printAndWait('Только… чуть отдохнуть… хаа');
                era.println();
                await you.say_and_wait('Нет');
                await tachyon.say_and_wait('!?');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' самым удобным хватом поднимаешь ',
                  tachyon.get_colored_name(),
                  ' — за шею и подколенки — к себе на руки',
                ]);
                await era.printAndWait([
                  'Сейчас не время: ',
                  tachyon.sex,
                  ' капризничает — а надо срочно в медпункт',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  'Стой! ',
                  callname,
                  '! Я поняла! Пойду, только поставь!',
                ]);
                await you.say_and_wait('Но так же эффективнее, нет?');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' не слушая ',
                  tachyon.get_colored_name(),
                  ', на глазах у всех несёшь ',
                  tachyon.get_colored_name(),
                  ' в медпункт',
                ]);
              },
            );
          } else {
            buffer.push(
              async () => {
                await tachyon.say_and_wait('Гх… всё-таки перебор?');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' послушно останавливается, ',
                  you.get_colored_name(),
                  ' спешит проверить ей ноги — ',
                  tachyon.sex,
                  ' не сопротивляется',
                ]);
                await era.printAndWait('…На сегодня тренировка только досюда');
              },
              async () => {
                await tachyon.say_and_wait('Ноги… не слушаются');
                await tachyon.say_and_wait('Опыт провалился…');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' сделав несколько шатких шагов, останавливается',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' спешишь проверить состояние ',
                  tachyon.get_colored_name(),
                  '.',
                ]);
                await era.printAndWait(
                  'Ничего… чуть подвернула, большой беды не будет',
                );
                await era.printAndWait(
                  'Только сначала в медпункт — отдохнуть…',
                );
              },
              async () => {
                await tachyon.say_and_wait('Мой предел… только такой?');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' бросаешься вперёд и, едва ',
                  tachyon.get_colored_name(),
                  ' шатается, подхватываешь — ',
                  tachyon.sex,
                ]);
                await era.printAndWait([
                  ' Порыв, за который ',
                  tachyon.get_colored_name(),
                  ' ещё и отчитает — но ',
                  you.get_colored_name(),
                  ' всё равно идёт без колебаний',
                ]);
                await era.printAndWait([
                  'И благодаря этому ',
                  you.get_colored_name(),
                  ' слышит слова ',
                  tachyon.get_colored_name(),
                  '.',
                ]);
                era.println();
                await you.say_and_wait(
                  'Ещё можно стать сильнее… предел Тахион — точно не здесь',
                );
                await tachyon.say_and_wait('…………');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' молчит; неясно, дошли ли до неё слова ',
                  you.get_colored_name(),
                  '.',
                ]);
                await era.printAndWait([
                  'Но ',
                  tachyon.sex,
                  ' медленно ступает, ',
                  you.get_colored_name(),
                  ' поддерживает её сбоку, и ',
                  tachyon.sex,
                  ' идёт в медпункт на осмотр',
                ]);
              },
            );
          }
          await get_random_entry(buffer)();
        }
      } else if (fail_again) {
        if (plan_b && era.get('cflag:32:育成回合计时') > 95) {
          era.drawLine();
          await tachyon.say_and_wait('А… сейчас упаду', true);
          era.println();
          await tachyon.say_and_wait('И правда, лучше сдаться', true);
          await tachyon.say_and_wait(
            ['Всё равно ', call_25, ' уже выросла, разве нет?'],
            true,
          );
          await tachyon.say_and_wait('Жалко, но…', true);
          era.println();
          await you.say_and_wait('Тахион! Ты в порядке?!');
          era.println();
          await tachyon.print_and_wait('…Чего так спешишь');
          await tachyon.print_and_wait(
            'Если бы и правда не было никого, кто верит в мою мечту, — тогда ладно',
          );
          await tachyon.print_and_wait([
            'Но… только ',
            you.sex,
            ', ',
            you.sex,
            '… именно эти ожидания…',
          ]);
          await tachyon.print_and_wait(
            'Ладно, попробую ещё… посмотрим, до какого шага это тело ещё выдержит',
          );
          // 47+20=资深年五月四周=日本德比
        } else if (era.get('cflag:32:育成回合计时') > 47 + 20) {
          era.drawLine();
          await tachyon.say_and_wait('А… сейчас упаду', true);
          era.println();
          await tachyon.say_and_wait('И правда, раз так — лучше сдаться', true);
          await tachyon.say_and_wait('Ничего. Есть запасной план…', true);
          await tachyon.say_and_wait('Досадно, но…', true);
          era.println();
          await you.say_and_wait('Тахион! Ты в порядке?!');
          era.println();
          await tachyon.print_and_wait('…Нельзя');
          await tachyon.print_and_wait('Назад уже нельзя');
          await tachyon.print_and_wait([
            you.sex,
            ' своей поддержкой довёл(а) меня досюда',
          ]);
          await tachyon.print_and_wait(
            'Если я сейчас сойду с дистанции — вот это будет анекдот',
          );
          await tachyon.print_and_wait(
            'Ради тех, кто мне верит… ещё подержусь',
          );
        } else if (reg_toky_yus) {
          era.drawLine();
          await tachyon.say_and_wait('А… сейчас упаду', true);
          era.println();
          await tachyon.say_and_wait('И правда, раз так — лучше сдаться', true);
          await tachyon.say_and_wait('Ничего. Есть запасной план…', true);
          await tachyon.say_and_wait('Досадно, но…', true);
          era.println();
          await you.say_and_wait('Тахион! Ты в порядке?!');
          era.println();
          await tachyon.print_and_wait('…Чего так спешишь');
          await tachyon.print_and_wait(
            'Если бы и правда не было никого, кто верит в мою мечту, — тогда ладно',
          );
          await tachyon.print_and_wait([
            'Но… только ',
            you.sex,
            ', ',
            you.sex,
            '… именно эти ожидания…',
          ]);
          await tachyon.print_and_wait(
            'Ладно, попробую ещё… посмотрим, до какого шага это тело ещё выдержит',
          );
        } else {
          await tachyon.say_and_wait('Больно');
          await tachyon.say_and_wait('Страшно');
          await tachyon.say_and_wait('И правда… мой предел это…');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' только тогда приходишь в себя и бежишь к ',
            tachyon.get_colored_name(),
            '.',
          ]);
          await era.printAndWait([
            'Но ',
            tachyon.sex,
            ' только бормочет и бормочет, будто тебя нет',
          ]);
          await era.printAndWait([
            'Лишь спустя долгое время она приходит в себя и, опираясь на ',
            you.get_colored_name(),
            ', идёт в медпункт на лечение',
          ]);
          await era.printAndWait('…Правда всё в порядке? И тело, и душа');
          await era.printAndWait([
            you.get_colored_name(),
            ' хочешь спросить вслух',
          ]);
          await era.printAndWait([
            'Но… тогда не смог(ла) крикнуть, чтобы остановилась ',
            tachyon.sex,
            ' — и у такого меня, пожалуй, нет права сейчас открывать рот',
          ]);
        }
      } else {
        await era.printAndWait('Не успеваешь');
        await era.printAndWait('Не успеваешь даже крикнуть');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' уже ставит ногу твёрдо',
        ]);
        await era.printAndWait('Будто смахивая всю долгую тревогу внутри');
        await era.printAndWait('Ещё шаг вперёд');
        await era.printAndWait('Так и идёт, пока тренировка не кончится');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'Победа в скачках';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {boolean} do_sex 是否兴奋性爱（仅限男/Futa训练员 vs 女/Futa速子）
     */
    const f = async (tachyon, you, callname, do_sex) => {
      era.printButton('「Бежала просто супер!」', 1);
      era.printButton('「Ещё есть что улучшить」', 2);
      const ret = await era.input();
      if (do_sex) {
        await era.printAndWait('Бам');
        era.println();
        await era.printAndWait([
          'Не дав ',
          you.get_colored_name(),
          ' выговорить хвалу или напутствие, ',
          tachyon.get_colored_name(),
          ' сразу наступает и прижимает ',
          you.get_colored_name(),
          ' к стене',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Ха-а… ха-а… прости, ',
          callname,
          '… нечаянно разогналась до перевозбуждения… тело на минутку одолжи',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          ' упирается правой в стену, не давая ',
          you.get_colored_name(),
          ' шанса сбежать, и одновременно поднимает левое колено, упираясь ',
          you.get_colored_name(),
          ' в пах',
        ]);
        era.println();
        await tachyon.say_and_wait('Ничего… ничего… разок… всего разочек…');
        era.println();
        await era.printAndWait([
          'Слова, которым некого убеждать, всё льются; убедившись, что ',
          you.get_colored_name(),
          ' не собирается бежать, ',
          tachyon.sex,
          ' медленно садится на корточки и дрожащими руками стаскивает с ',
          you.get_colored_name(),
          ' штаны',
        ]);
        era.println();
        await era.printAndWait('Плюк');
        await era.printAndWait([
          'Пар, копившийся весь день, вместе с членом бьёт ',
          tachyon.get_colored_name(),
          ' в лицо',
        ]);
        await era.printAndWait(
          'Шальные глаза вмиг стекленеют: видят только слегка вздрагивающий орган перед собой',
        );
        await era.printAndWait(
          'Как котёнок за колоском, сама тянется за качающимся членом',
        );
        await era.printAndWait(
          'Но тело, разожжённое скачкой, от одного выдержанного запаха обмякает, и качаться успевает только нос, что без остановки втягивает вонь члена',
        );
        era.println();
        if (era.get('relation:32:0') <= 0) {
          await era.printAndWait([
            'Тело не слушается, ',
            tachyon.get_colored_name(),
            ' едва выдавливает мольбу',
          ]);
          await era.printAndWait(
            'Человек, к которому в чувствах пусто, даже отвращение',
          );
          await era.printAndWait(
            'Человек, которого тело жаждет и хочет, чтобы им заполнили',
          );
          await era.printAndWait(
            'В конце концов жажда тела перешибает холод чувств',
          );
          era.println();
          await era.printAndWait(
            'К счастью, в дурном смысле ты её не подводишь',
          );
          await era.printAndWait([
            'Точно: без зазрения совести полезет на подопечную ',
            tachyon.uma_sex_title,
            ' — мразь',
          ]);
          era.println();
          await era.printAndWait([
            'Тренер шагает вперёд и забивает членом голодный до слюны ротик — ',
            tachyon.get_colored_name(),
            ' счастливо так и думает',
          ]);
        }
        era.println();
        await era.printAndWait([
          'Видя, как ',
          tachyon.sex,
          ' светится счастьем, ',
          you.get_colored_name(),
          ' тоже хочет продолжить…',
        ]);
        era.println();
        era.printButton('「…Потом Winning Live」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.sex,
          ' сверлит взглядом ',
          you.get_colored_name(),
          ', но ',
          you.get_colored_name(),
          ' всё равно безжалостно вынимает член из её рта — ',
          tachyon.sex,
          ' изо рта',
        ]);
        await era.printAndWait([
          'Ради прежнего плана ',
          tachyon.sex,
          ' — по крайней мере пока вы на ипподроме, нельзя допустить ничего, что ударит по репутации ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' в борьбе разума и чувства всё-таки обуздывает похоть и, не оглядываясь, идёт в комнату отдыха',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' только тогда выдыхаешь с облегчением: не думал(а), что стимул скачки бьёт не только по духу, но и в ту сторону тоже…',
        ]);
        await era.printAndWait([
          'Неужели и дальше после каждой гонки будет как сегодня? ',
          you.get_colored_name(),
          ' невольно вздрагивает',
        ]);
      } else if (ret === 1) {
        if (era.get('relation:32:0') > 225) {
          await tachyon.say_and_wait(
            'Да? Да? Хе-хе, вот он — бег быстрее света',
          );
        } else {
          await tachyon.say_and_wait([
            'Всего-то проверка опыта, а уже такая рожа, ',
            callname,
            ' ты и правда дитя',
          ]);
        }
      } else if (era.get('relation:32:0') > 225) {
        if (Math.random() < 0.5) {
          await tachyon.say_and_wait(
            'Ц… не поспоришь, но похвалить можно было сильнее? Я же так выложилась и выиграла',
          );
        } else {
          await tachyon.say_and_wait([
            'Как жестоко, ',
            callname,
            '. Моя лошадь выиграла, а ты строишь такую мину — для кого? Быстрее-быстрее, хвали меня, бы~~ст~~рее!',
          ]);
        }
      } else if (Math.random() < 0.5) {
        await tachyon.say_and_wait('Хм… знаю, не надо подсказывать');
      } else {
        await tachyon.say_and_wait(
          'Хорошо. Есть новая находка — так этот опыт не зря',
        );
      }
      return [];
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = 'Начало опыта';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        'Здесь академия Трейсен в Футю. Сегодня ',
        you.get_colored_name(),
        ' — и моя мечта тоже здесь растёт и крепнет',
      ]);
      await tachyon.say_and_wait('Тренер-кун, открой рот');
      era.println();
      await era.printAndWait('Растёт и крепнет');
      era.println();
      await tachyon.say_and_wait('Тренер-кун, пробеги круг, проверим скорость');
      era.println();
      await era.printAndWait('Растёт, крепнет');
      era.println();
      await tachyon.say_and_wait(
        'Тренер-кун, подержи таблетку во рту. Глотать — когда скажу',
      );
      era.println();
      await era.printAndWait('Растёт…?');
      era.println();
      await era.printAndWait([
        'С самого утра тебя загнали в лабораторию на опыты, и к этому часу ',
        you.get_colored_name(),
        ' сомнения внутри уже на пике',
      ]);
      era.println();
      await you.say_and_wait(
        [
          'Сейчас должны быть уроки, ',
          tachyon.sex,
          ' разве не надо на занятия?',
        ],
        true,
      );
      await you.say_and_wait(
        'Я в этот час разве не должен(на) сидеть над бумагами?',
        true,
      );
      await you.say_and_wait(
        'Почему ты здесь глотаешь кучу странных таблеток и делаешь всякие опыты?',
        true,
      );
      era.println();
      await tachyon.say_and_wait('Тренер-кун? Ты чего в ступор?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' озадаченно смотрит на ',
        you.get_colored_name(),
        ', на лице сплошное нетерпение',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' — та, кого ',
        you.get_colored_name(),
        ' несколько дней назад видел(а) на Тренировочном поле, та самая ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        ' Тогда ',
        you.get_colored_name(),
        ' видит, как ',
        tachyon.sex,
        ' несётся светом — скоростью и бегом; в порыве заключаешь с ней договор. Пусть ',
        tachyon.sex,
        ' скрепляет его',
      ]);
      await era.printAndWait(
        'А потом в порыве подмахнул(а) ещё кучу странных договоров',
      );
      await era.printAndWait('Вроде бы среди них было и пробы препаратов');
      await era.printAndWait(
        'Выходит, тогдашний ты вот так, без тени сомнения, подписал(а)?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' невольно начинаешь сомневаться в тогдашней своей голове',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' вдруг приходишь в себя',
      ]);
      await era.printAndWait([
        'Воспоминание заняло слишком много времени, ',
        tachyon.get_colored_name(),
        ' только что звала тебя, а ты не ответил(а)',
      ]);
      await era.printAndWait('Крышка, сейчас получишь');
      await era.printAndWait([
        you.get_colored_name(),
        ' вовсе не как взрослый, боязливо поднимаешь взгляд на подопечную ',
        tachyon.uma_sex_title,
        ' и как раз ловишь взгляд: ',
        tachyon.sex,
        ' смотрит на ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        'Те тёмно-красные глаза, словно жалюзи, втягивают взгляд ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('— Нет, точнее, не втягивают');
      await era.printAndWait(
        'Тот взгляд просто тихо есть, где есть, но сам по себе — как окно',
      );
      await era.printAndWait('Само тянет заглянуть, что за рамой');
      await era.printAndWait([
        'Втягивает не взгляд ',
        tachyon.sex,
        ', а твоё любопытство',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, ' — где её предел?']);
      await era.printAndWait([tachyon.sex, ' — что у неё в голове?']);
      await era.printAndWait([
        tachyon.sex,
        ' — каким сиянием может вспыхнуть её будущее?',
      ]);
      await era.printAndWait([tachyon.sex, ' — какой у неё тип?']);
      await era.printAndWait([tachyon.sex, ' — какого цвета трусы?']);
      await era.printAndWait('Презервативы или таблетки?');
      await era.printAndWait('Эрогенные зоны — уши или грудь?');
      await era.printAndWait('Какую позу любит в постели?');
      era.println();
      await era.printAndWait('Всё, всё');
      await era.printAndWait([
        tachyon.sex,
        ' — всё про неё ',
        you.get_colored_name(),
        ' хочет узнать',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' смотрит в глаза — и ',
        you.get_colored_name(),
        ' вдруг ловит улыбку',
      ]);
      era.println();
      await tachyon.say_and_wait('Такой жадный взгляд… прямо как у зверька');
      era.println();
      await era.printAndWait('Зверёк? Ты?');
      await era.printAndWait([you.get_colored_name(), ' невольно стыдишься']);
      await era.printAndWait('Ты ведь взрослый, а тебя держат за зверька');
      era.println();
      await tachyon.say_and_wait('Да… мелкое животное, вроде… подопытного');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' вдруг уходит в себя — о чём думает, не разобрать',
      ]);
      await era.printAndWait('Потом вдруг кивает');
      era.println();
      await tachyon.say_and_wait('…Н-да, есть');
      era.println();
      await era.printAndWait([tachyon.sex, ' говорит с полной уверенностью']);
      era.println();
      await tachyon.say_and_wait(['Отныне будешь свинка-кун!']);
      era.printButton('「Сви… свинка?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'Хе-хе, разве не в точку? Свинка-кун… свинка-кун…',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' открываешь рот — и закрываешь. Ладно, звать как хочет — пусть зовёт',
      ]);
      await era.printAndWait('Ради тех глаз, от которых сносит крышу');
    };
    f.title = title;
    return f;
  })(),
  ws_15: (() => {
    const title = 'Постановка темы опыта';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await tachyon.say_and_wait('Какие скачки хочешь бежать?');
      era.println();
      await era.printAndWait([
        'В старой лаборантской, иначе говоря в лаборатории ',
        tachyon.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' сидит на маленьком диванчике напротив ',
        tachyon.get_colored_name(),
        ' у стола и киваешь',
      ]);
      await era.printAndWait([
        'Хотя это, казалось, надо было спросить в первый день контракта с ',
        tachyon.uma_sex_title,
        ', но тогда ',
        you.get_colored_name(),
        ' слишком заворожён(а), глядя на ',
        tachyon.get_colored_name(),
        ', почти начисто это выпало из головы',
      ]);
      await era.printAndWait([
        'Как ни крути, раз собрались в Сияющую серию, план скачек обязателен. Узнав, что выберет ',
        tachyon.sex,
        ', можно точнее нацелить тренировки — ',
        tachyon.sex,
        ' получит нужный уклон',
      ]);
      await era.printAndWait('Тройная корона, Корона кобыл, или миля?');
      await era.printAndWait([
        'Спринт… вряд ли. Извини, но у ',
        tachyon.get_colored_name(),
        ' той пригодности, похоже, нет',
      ]);
      era.println();
      await tachyon.say_and_wait('…Скачки? Не интересно');
      await tachyon.say_and_wait(
        'В конце концов моё исследование — ради собственной возможности. Что там у других — не моё дело. Мериться силой — детская игра',
      );
      await era.printAndWait([
        'Ответ в духе ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Честно говоря, ',
        tachyon.sex,
        ' так и ответит — ни капли не сюрприз',
      ]);
      await era.printAndWait('Но как тренер у тебя всё же есть долг');
      await era.printAndWait([
        'И ещё… как фанат, чей взгляд поймала ',
        tachyon.sex,
        ', хочешь видеть, как твой кумир засияет на большей сцене, — разве это не естественно?',
      ]);
      era.println();
      await era.printAndWait([
        'Поэтому ',
        you.get_colored_name(),
        ' собирает слова и говорит',
      ]);
      era.println();
      if (love >= 50 && relation <= 225 && tachyon.sex_code !== 1) {
        era.printButton(
          `「Потому что тебе нужны скачки, ${tachyon.uma_sex_title} нужны скачки」`,
          1,
        );
        await era.input();
        await era.printAndWait('Это не догадка и не блеф — констатация факта');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' нужны скачки — как проверка ',
          tachyon.sex,
          ' опытов',
        ]);
        await era.printAndWait([
          tachyon.uma_sex_title,
          ' нужны скачки — чтобы выплеснуть боевой пыл',
        ]);
        await era.printAndWait([
          'Обе нужды закрываются разом, ',
          tachyon.sex,
          ' не отказать',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…Смысл я поняла, но формулировка у тебя редкая гадость',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' холодно смотрит на ',
          you.get_colored_name(),
        ]);
        era.println();
        await era.printAndWait(' Похоже, нужна крутая доза? Тогда…');
        era.println();
        await you.say_and_wait(
          'А, если Тахион отказывается от скачек, потому что боится проиграть, — тогда я ещё пойму,',
        );
        await you.say_and_wait(
          'всё-таки честь Тахион, и в этом наборе полно сильных,',
        );
        await you.say_and_wait([
          'Если явится ',
          tachyon.uma_sex_title,
          ' сильнее Тахион — тогда Тахион, что твердит про предел, станет как…',
        ]);
        era.println();
        await era.printAndWait('как анекдот');
        await era.printAndWait([
          'Стоит увидеть, как ',
          tachyon.get_colored_name(),
          ' одним взмахом выхватывает десять пробирок и на виске вздувается жила, ',
          you.get_colored_name(),
          ' вынужден(а) проглотить то, что хотел(а) сказать дальше',
        ]);
        await tachyon.say_and_wait([
          callname,
          ', ты… не из приятных — ладно, но ещё и лезешь под раздачу, смерти совсем не боишься',
        ]);
        await you.say_and_wait('М-м-м-м…');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' хочешь оправдаться, но ',
          tachyon.get_colored_name(),
          ' зажимает рот рукой — слова не выходят',
        ]);
        era.println();
        await tachyon.say_and_wait('Дай подумать… есть');
        era.println();
        await era.printAndWait([
          'Видимо, держать так всё время ей надоело, ',
          tachyon.get_colored_name(),
          ' осеняет',
        ]);
        await era.printAndWait([
          'И в ту же секунду ',
          you.get_colored_name(),
          ' чувствует, как в мозгу сверкает ток, будто предупреждая: сейчас будет плохо',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' медленно поднимает подол белого халата; к этому мигу ',
          you.get_colored_name(),
          ' предчувствие беды уже на пике, но даже если бежать — куда?',
        ]);
        await era.printAndWait([
          'Тем более — вырваться из рук ',
          tachyon.uma_sex_title,
          '? ',
          you.get_colored_name(),
          ' хоть ',
          tachyon.get_colored_name(),
          ' и зовёт тебя безумным, не дурак и не станешь мечтать о невозможном',
        ]);
        era.println();
        await era.printAndWait(
          'Под белым халатом — чёрные колготки с мокрым блеском',
        );
        await era.printAndWait(
          'С самого утра пышная жопа и тонкие ноги запечатаны в душных колготках; за день, как в погребе, они пропитались насквозь — снаружи и изнутри',
        );
        await era.printAndWait([
          'Плюс в этих колготках — вечно неряшливая ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' в ужасе мотаешь головой, но уже поздно',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          ' медленно стаскивает колготки; в миг, когда они сходят с жопы, ',
          you.get_colored_name(),
          ' будто видит, как тело ',
          tachyon.get_colored_name(),
          ' дёргается от отдачи этих ягодиц',
        ]);
        await era.printAndWait([
          'Колготки медленно сползают до паха; будто не желая отпускать выдержанный запах, чёрный шёлк всё ещё тянет нить — ',
          tachyon.child_sex_title,
          ' — то самое место между ног —',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' сегодня без трусов, что ли? ',
          you.get_colored_name(),
          ' вдруг думает: по этим нитям и так всё ясно',
        ]);
        await era.printAndWait(
          'Словно поднимают занавес: снизу открывается белая кожа бёдер — и это значит, что сейчас начнётся лютая трагедия',
        );
        era.println();
        await tachyon.say_and_wait(['Ну, ', callname, ', открой рот~~']);
        era.printButton('「М-м-м-м!!」', 1);
        await era.input();
        await era.printAndWait([
          'Так нельзя. Под давлением изнутри ',
          you.get_colored_name(),
          ' всё же идёт на бессмысленную попытку',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' в панике на четвереньках пытаешься сбежать из лаборатории, но, как и думал(а), едва шагаешь — и ',
          tachyon.get_colored_name(),
          ' со скоростью, на которую человек не успевает моргнуть, садится тебе на спину',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' сидит верхом на ',
          you.get_colored_name(),
          ' спине и колготками стягивает ',
          you.get_colored_name(),
          ' рот, словно кляпом фиксируя ',
          you.get_colored_name(),
          '; когда уже невтерпёж, ',
          you.get_colored_name(),
          ' открывает рот, и колготки сами врезаются ',
          you.get_colored_name(),
          ' в щёки и уголки губ',
        ]);
        await era.printAndWait([
          'Мгновенно кислая вонь заливает ',
          you.get_colored_name(),
          ' рот — мокрый вкус, и лёгкая блядская вонь из паха лезет ',
          you.get_colored_name(),
          ' в нос; от этого удара запахом ',
          you.get_colored_name(),
          ' конечности слабеют, и ты падает на колени',
        ]);
        era.println();
        await tachyon.say_and_wait('Хм… чуть выпустила пар. К делу.');
        await tachyon.say_and_wait(
          'На скачки выходить, конечно, придётся. Какие именно…',
        );
        await tachyon.say_and_wait(
          'Хе-хе, тогда цель — Тройная корона. После того, что ты сказал(а), ещё посмеешь тянуть назад — шкуру сдеру. Возражений нет?',
        );
        era.println();
        await era.printAndWait([
          'Пока запах не вышиб сознание, ',
          you.get_colored_name(),
          ' — последняя мысль: даже если есть возражения, дай же ',
          you.get_colored_name(),
          ' сказать вслух…',
        ]);
      } else {
        if (
          love >= 50 &&
          relation > 225 &&
          tachyon.sex_code - 1 &&
          you.sex_code > 0
        ) {
          era.printButton('Потому что…', 1);
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' как раз хочешь сказать, но ',
            tachyon.get_colored_name(),
            ' оборачивается и зажимает губы — рта не открыть',
          ]);
          await era.printAndWait([
            tachyon.sex,
            ' встаёт и придавливает к дивану ',
            you.get_colored_name(),
            ', смотрит ',
            you.get_colored_name(),
            ' глаз в глаз',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Я знаю, что ты хочешь сказать, знаю, что и по делу, и лично у меня есть причины и нужда выйти на скачки, но…',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' поворачивается и плюхается жопой ',
            you.get_colored_name(),
            ' на бедро, хлопает ',
            you.get_colored_name(),
            ' по внешней стороне бедра',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Но сейчас мне не хочется на скачки, так что шевели мозгами и скажи что-нибудь приятное. Если настроение поднимется… может, я и соглашусь выйти?',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' кривишь улыбку и обнимаешь ',
            tachyon.get_colored_name(),
            ' за талию',
          ]);
          await era.printAndWait([
            tachyon.sex,
            ' совсем естественно пододвигается ближе, устраивается как удобнее',
          ]);
          era.println();
          await you.say_and_wait('Тахион — самая крутая');
          await you.say_and_wait('Тахион такая милая');
          await you.say_and_wait('Тахион такая красивая');
          await you.say_and_wait([
            'Самая сильная, самая крутая ',
            tachyon.uma_sex_title,
          ]);
          await you.say_and_wait([
            ' быстрее света — ',
            tachyon.sex_code === 1 ? ' принц' : 'принцесса',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' без остановки шепчешь ',
            tachyon.get_colored_name(),
            ' на ухо хвалу. Пусть ',
            tachyon.sex,
            ' слушает эти слова',
          ]);
          await era.printAndWait([
            'А ',
            tachyon.sex,
            ' ушами без остановки подёргивает — видно, как это заходит',
          ]);
          await era.printAndWait([
            tachyon.sex,
            ' расплывается от самодовольства и сильно хлопает ',
            you.get_colored_name(),
            ' по бедру: давай ещё',
          ]);
          era.println();
          await tachyon.say_and_wait('Хм-хм… ещё, ещё, давай ещё!');
          era.println();
          await era.printAndWait([
            'От шлепков уже саднит, ',
            you.get_colored_name(),
            ' вдруг замышляет шалость',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' разжимаешь объятие и переносишь руки на внешнюю сторону бёдер — ',
            tachyon.sex,
            ' не отстраняется',
          ]);
          era.println();
          await tachyon.say_and_wait(['…? ', callname, '?']);
          era.printButton(
            '「Так хочется увидеть, как эта большая жопа Тахион качается на бегу」',
            1,
          );
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' сильно шлёпаешь по пышной жопе — ',
            tachyon.sex,
            ' вздрагивает',
          ]);
          await era.printAndWait([
            tachyon.sex,
            ' всем телом вздрагивает, и по обтягивающим колготкам вспыхивают чёрные волны',
          ]);
          await you.say_and_wait(
            'Так хочется после скачек, в комнате отдыха, набить Тахион изнутри белым до края',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' тон всё такой же мягкий, как когда хвалил(а), а слова — уже совсем грязные',
          ]);
          await era.printAndWait([
            'И всё же, то ли кажется, но у ',
            tachyon.get_colored_name(),
            ' уши, наоборот, ещё торчком',
          ]);
          era.println();
          await you.say_and_wait(
            'А потом заткнуть Тахион изнутри вибратором и так выпустить её на Winning Live',
          );
          await you.say_and_wait(
            'Тахион в сценическом костюме выходит в центр сцены с бугром на животе…',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' медленно гладишь её живот — пусть ',
            tachyon.sex,
            ' слушает, ты хочешь договорить…',
          ]);
          await era.printAndWait([
            'Но ',
            you.get_colored_name(),
            ' руку перехватывают',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' оборачивается на ',
            you.get_colored_name(),
            ': тёмно-красные зрачки сами собой стали бледно-розовыми от похоти',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '… такие слова, чтобы дразнить меня… чем это кончится, ты же понимаешь…❤',
          ]);
          era.println();
          await era.printAndWait('А-а, кажется, заигрался(ась)');
          await era.printAndWait([
            'Незаметно, как ',
            tachyon.get_colored_name(),
            ' жопой прижимается к ',
            you.get_colored_name(),
            ' низу живота',
          ]);
          await era.printAndWait(
            'Без остановки трётся, словно щенок, что ждёт хозяйской дрессуры',
          );
          era.println();
          await era.printAndWait([
            'Можно было бы и сразу начать… но с чего ',
            you.get_colored_name(),
            ' изначально-то хотел(а)…?',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'В гонку выйду❤️Тройная корона❤️цель — Тройная корона❤️ладно… ',
            callname,
            ' ❤️ну же❤️давай❤️',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' улыбаешься и перекатываешь ',
            tachyon.get_colored_name(),
            ' под себя',
          ]);
        } else if (relation <= 225) {
          era.printButton('Пряником', 1);
          await era.input();
          await you.say_and_wait(
            'Если выйти на скачки, призовые же можно пустить на опыты — и вопрос финансирования исследований закрыт',
          );
          era.println();
          await era.printAndWait([
            'Сначала пряником: для такой исследовательницы, как ',
            tachyon.get_colored_name(),
            ', говорить о чувствах было бы смешно; лучше убедить по расчёту',
          ]);
          await tachyon.say_and_wait([
            'Отклонено, ',
            callname,
            ', побочные продукты моих исследований и сами продаются, а время на подготовку к этим скачкам по упущенной выгоде давно перекрывает пользу от призовых',
          ]);
          era.println();
          await you.say_and_wait(
            'А фанаты, которых притянут скачки? Их траты тоже дадут немало денег, нет?',
          );
          era.println();
          await tachyon.say_and_wait(
            'Ты прав(а). Если правда набрать популярность, выгода, возможно, и обойдёт то, что даёт само исследование…',
          );
          await tachyon.say_and_wait(
            'Но тогда на так называемые блага для фанатов уйдёт ещё больше времени: Winning Live, свой публичный образ и прочее — и цена времени только вырастет',
          );
          await tachyon.say_and_wait(
            'Кроме того, ты, кажется, забыл(а) одно: деньги мне нужны как бюджет на опыты. Опыт — моя цель, а не заработок',
          );
          era.println();
          await you.say_and_wait(
            '…Отказаться от скачек — это уже против устава академии Трейсен…',
          );
          await you.say_and_wait(
            'Обычно так далеко не заходит, но у Тахион уже есть провинности… в худшем случае могут отчислить',
          );
          era.println();
          await era.printAndWait('Пряник не взяла — тогда кнутом');
          await era.printAndWait(
            'Стращать так, конечно, некрасиво, но отрицать, что так и может пойти, нельзя…',
          );
          await era.printAndWait([
            'Вот только та директриса такого, скорее всего, не допустит, но сейчас этим ещё можно пугнуть ',
            tachyon.get_colored_name(),
          ]);
          era.println();
          await era.printAndWait([
            ' Но ',
            tachyon.get_colored_name(),
            ' реагирует так, будто услышала смешной анекдот',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            ', ты помнишь нашу первую встречу? Меня уже тогда грозили отчислить. Ты правда думаешь, мне есть дело?',
          ]);
          era.println();
          await you.say_and_wait('!', true);
          await era.printAndWait('Вмиг ткнули в слепое место');
          await era.printAndWait([
            'По памяти, тогда, едва услышав про возможное отчисление, ты сломя голову бросился(ась) искать ',
            tachyon.get_colored_name(),
            '.',
          ]);
          await era.printAndWait([
            'А наоборот? Тогдашняя ',
            tachyon.sex,
            ' как ни в чём не бывало ставила опыты в лаборатории',
          ]);
          await era.printAndWait(
            'И по тому, как она подписывала с тобой договор, запасного плана у неё тоже не видно',
          );
          await era.printAndWait([
            'Иными словами… ',
            tachyon.sex,
            ' и правда плевать, отчислят или нет',
          ]);
          era.println();
          await era.printAndWait([
            'Что делать… ни пряник, ни кнут не берёт — ',
            tachyon.sex,
            ', какой ещё есть ход…',
          ]);
          era.printButton('Сдаться', 1);
          era.printButton('Думать дальше', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              'Тупик — вот, пожалуй, где сейчас ',
              you.get_colored_name(),
              '.',
            ]);
            await era.printAndWait([
              'Уже ничего не остаётся. Для ',
              tachyon.get_colored_name(),
              ' нет нужды: ',
              tachyon.sex,
              ' всё своё берёт не из гонок',
            ]);
            await era.printAndWait([
              'Такой ',
              you.get_colored_name(),
              ' остаётся только ход, который сам(а) меньше всего считал(а) приемлемым',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'Что ж, ',
              callname,
              ', есть ещё способ меня убедить?',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.sex,
              ' смотрит с любопытством на ',
              you.get_colored_name(),
              ', и в следующую секунду интерес на лице сменяется изумлением',
            ]);
            await era.printAndWait(
              'Причина проста: кто угодно удивится, если человек, только что спокойно стоявший перед тобой и говоривший, вдруг опускается на колени',
            );
            era.println();
            era.printButton('「Потому что… хочу видеть」', 1);
            await era.input();
            await you.say_and_wait(
              'Хочу видеть, как Тахион бежит по ипподрому',
            );
            await you.say_and_wait([
              'Хочу видеть, как Тахион с другими ',
              tachyon.uma_sex_title,
              ' бьётся до конца и берёт победу',
            ]);
            await you.say_and_wait(
              'Хочу видеть Тахион в центре Winning Live, на центральной C-позиции, как она сияет!',
            );
            await era.printAndWait(
              'Голос крепнет, и сам(а) всё горячее; последнюю фразу почти кричишь',
            );
            await era.printAndWait([
              'Последний ход — в чувства: выложить то, что внутри, в надежде, что ',
              tachyon.get_colored_name(),
              ' услышит',
            ]);
            await era.printAndWait(
              'Хотя… скорее всего, это только ты себе надумал(а)',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' боязливо прижимаешь лоб к полу и ждёшь ответа',
            ]);
            era.println();
            await tachyon.say_and_wait('…Из-за такого… на колени?');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' не поднимаешь головы, так и стоишь на коленях',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'Мне плевать на скачки, плевать, отчислят или нет',
            );
            await tachyon.say_and_wait([
              'Прямо скажем, идти за такой ',
              tachyon.uma_sex_title,
              ' — одни неприятности, нет?…',
            ]);
            await tachyon.say_and_wait(
              'На твоём месте я бы прямо сейчас из-за разногласий расторгла контракт на подопечную… а ты…',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              ' будто не находит, как назвать поступок ',
              you.get_colored_name(),
              ', и на миг замолкает',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '…Что у тебя в голове. Надо ли это? Стоит ли?',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' молчишь, только поднимаешь голову и смотришь: ',
              tachyon.sex,
            ]);
          } else {
            await era.printAndWait([
              ' И вдруг ',
              you.get_colored_name(),
              ' будто выхватывает озарение из её слов — ',
              tachyon.sex,
              ' попала в точку',
            ]);
            era.println();
            await era.printAndWait([
              'Хотя вы знакомы, может, наверное, возможно, ещё не так давно',
            ]);
            await era.printAndWait([
              'Но по тому, что ',
              you.get_colored_name(),
              ' знает об ',
              tachyon.get_colored_name(),
              ' как об этой ',
              tachyon.uma_sex_title,
              '…',
            ]);
            await era.printAndWait([
              tachyon.sex,
              ' не станет тратить время на бессмыслицу',
            ]);
            await era.printAndWait('Верно, не станет — на бессмыслицу');
            await era.printAndWait('Иными словами');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              ' тратит время только на то, у чего есть смысл',
            ]);
            await era.printAndWait('Итак, вопрос 1');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ', зачем ты поступила в академию Трейсен?',
            ]);
            era.println();
            await era.printAndWait([
              'Если бы нужды не было, ',
              tachyon.sex,
              ' так бы не выбрала',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' что может получить от поступления в Трейсен…',
            ]);
            await era.printAndWait([
              'И думать нечего. С её целью всё ясно — ',
              tachyon.sex,
              ' ищет возможности ',
              tachyon.uma_sex_title,
              ' и то, как перешагнуть их предел',
            ]);
            await era.printAndWait([
              'Раз так, сначала нужно досконально изучить всё про ',
              tachyon.uma_sex_title,
              ', и только тогда говорить о пределе',
            ]);
            await era.printAndWait([
              'Поэтому Трейсен, где собралось больше всего сильных ',
              tachyon.uma_sex_title,
              ', — лучшее место для исследований, без вариантов',
            ]);
            await era.printAndWait([
              'Так что отчисление вовсе не так безразлично, как ',
              tachyon.sex,
              ' говорит',
            ]);
            era.println();
            await era.printAndWait('Вопрос 2');
            await era.printAndWait([
              'Почему ',
              tachyon.get_colored_name(),
              ' входит в академию именно как студентка',
            ]);
            era.println();
            await era.printAndWait([
              'В Трейсен кроме студентов полно разных должностей поддержки, и есть нескаковые ',
              tachyon.uma_sex_title,
              ' отделения; если хотела избежать этой мороки, почему с самого начала не пойти туда?',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' будто ловишь озарение',
            ]);
            era.println();
            await era.printAndWait([
              'Стать ',
              tachyon.uma_sex_title,
              ' — ради того, чтобы выйти на скачки',
            ]);
            await era.printAndWait([
              'Не выходя на скачки, становиться ',
              tachyon.uma_sex_title,
              ' незачем',
            ]);
            await era.printAndWait([
              'На этом можно объявить: то, что ',
              tachyon.get_colored_name(),
              ' говорила про «не хочу на скачки»…',
            ]);
            await era.printAndWait([
              'Не знаешь. Хоть и не знаешь, зачем ',
              tachyon.sex,
              ' так врёт, но',
            ]);
            await era.printAndWait(
              'Если лишь пройти этот разговор — столько и не нужно',
            );
            era.println();
            era.printButton('「Тебе не всё равно: опыту нужна проверка」', 1);
            await era.input();
            await era.printAndWait('Так и есть');
            await era.printAndWait('Вот зачем выходить на скачки');
            await era.printAndWait('Всё — ради исследования и конечной цели');
            era.println();
            await you.say_and_wait([
              'Если не одолеть даже других ',
              tachyon.uma_sex_title,
              ', даже сверстниц — какой там предел скорости?',
            ]);
            await you.say_and_wait([
              'Хоть у нас обоих есть уверенность, что ',
              tachyon.get_colored_name(),
              ' одолеет кого угодно, но проверка опытом всё равно нужна',
            ]);
            era.println();
            await era.printAndWait('Как 1+1=2');
            await era.printAndWait(
              'Пусть все и так знают, верен ответ или нет — всё равно нужны проверка и формула',
            );
            await era.printAndWait(
              'Это не лишний шаг, а строгость исследования',
            );
            await tachyon.say_and_wait(
              '…Красиво сказано. Но есть же пробные скачки?',
            );
            await tachyon.say_and_wait(
              'Даже без настоящих скачек я найду случай сойтись со сверстницами и с теми, кто сильнее, — и людей хватит',
            );
            await tachyon.say_and_wait(
              'Если я и вправду покажу клык, те звери в инстинкте не упустят шанса свести со мной счёт, верно?',
            );
            era.println();
            await era.printAndWait('Ответ звучит очень убедительно');
            await era.printAndWait([
              'Даже на учебной скачке: раз есть шанс сойтись с ',
              tachyon.get_colored_name(),
              ' — такой сильной ',
              tachyon.uma_sex_title,
              ', противница точно не станет жалеть силы',
            ]);
            await era.printAndWait('Но…');
            era.println();
            era.printButton(
              `「Видел(а) хоть раз, как ${tachyon.uma_sex_title} выкладывается на 120%?」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait('…О?');
            await era.printAndWait(
              'Учебные скачки показывают лишь обычную силу — всегда так',
            );
            await era.printAndWait(
              'Перейти предел можно только на настоящем круге',
            );
            await era.printAndWait(
              'С древности сколько на скачках сенсаций — не все ли от этого?',
            );
            era.printButton(
              `「${tachyon.uma_sex_title} сильны тем, что лишь на настоящих скачках выдают силу за пределом」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait(
              '…Так вот как. Это взгляд тренера? А кроме этого? Есть ещё причины?',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              ' всё так же смотрит на ',
              you.get_colored_name(),
              ', ',
              you.get_colored_name(),
              ' невольно чувствует себя неловко',
            ]);
            await era.printAndWait([
              'Но ',
              you.get_colored_name(),
              ' всё же решается и достаёт из самой глубины ',
              you.get_colored_name(),
              ' этот довод',
            ]);
            era.println();
            era.printButton('「…Хочу видеть」', 1);
            await era.input();
            await tachyon.say_and_wait('Н-н?');
            await tachyon.say_and_wait('…………');
            await you.say_and_wait('Хочу видеть, как Тахион бежит по кругу,');
            await you.say_and_wait([
              'Хочу видеть, как Тахион после борьбы с другими ',
              tachyon.uma_sex_title,
              ' всё-таки берёт верх',
            ]);
            await you.say_and_wait(
              'Хочу видеть, как Тахион сияет в центре Winning Live',
            );
            era.println();
          }
          await era.printAndWait([
            tachyon.sex,
            ' внимательно читает лицо ',
            you.get_colored_name(),
            ', затем ловит взгляд ',
            you.get_colored_name(),
            ' — глаза, как в вашу первую встречу, и смотрит ',
            you.get_colored_name(),
            ' насквозь',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '…Хе-хе, безумец к безумцу? Занятно, занятно!',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' с тревогой смотришь — вдруг расхохоталась ',
            tachyon.sex,
          ]);
          await era.printAndWait([
            ' Хотя не очень понятно, отчего ',
            tachyon.sex,
            ' так резко сменила настроение, но кажется… дело поворачивается так, что в выигрыше остаётся ',
            you.get_colored_name(),
            '?',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Раз так, ради рвения подопытной иногда нужна и умеренная награда.',
          );
          await tachyon.say_and_wait(
            'Согласна. Буду выходить на скачки. Раз уж бежать — для начала просто возьмём классическую тройную корону…',
          );
          await tachyon.say_and_wait([
            'Не скажешь же, что не выйдет, ',
            callname,
            '?',
          ]);
          era.println();
          await era.printAndWait(['Но ', tachyon.sex, ' добавляет']);
          era.println();
          await tachyon.say_and_wait([
            'Взамен… только не дай мне заскучать, ',
            callname,
          ]);
        } else {
          era.printButton('「Потому что хочу видеть」', 1);
          await era.input();
          await tachyon.say_and_wait('…А?');
          await you.say_and_wait('Хочу видеть, как Тахион бежит по кругу,');
          await you.say_and_wait([
            'Хочу видеть, как Тахион после борьбы с другими ',
            tachyon.uma_sex_title,
            ' всё-таки берёт верх',
          ]);
          await you.say_and_wait(
            'Хочу видеть, как Тахион сияет в центре Winning Live',
          );
          await era.printAndWait('И ещё, сверх того…');
          await era.printAndWait([
            you.get_colored_name(),
            ' подумал(а) и добавил(а)',
          ]);
          era.println();
          await you.say_and_wait(
            'Конечно, если вдруг, правда, на самый крайний случай — хочу ещё увидеть, как Тахион проиграет, лежит на земле и мучается от злости!',
          );
          await tachyon.say_and_wait('!');
          era.println();
          era.printButton('(Ой, провокация сработала?)', 1);
          await era.input();
          await you.say_and_wait(
            '「Впрочем, если Тахион боится проиграть, это тоже можно понять — тогда и правда лучше не выходить…」',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' снова нарочно косишься на ',
            tachyon.get_colored_name(),
            ' и видишь: ',
            tachyon.sex,
            ' реагирует уже не так — сразу замолкаешь, пока не поздно',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '…Да ещё эффект Калигулы на мне, ',
            callname,
            ' — ну и наглость',
          ]);
          await you.say_and_wait('Я не… гха!!?');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' хочешь возразить, но ',
            tachyon.get_colored_name(),
            ' встаёт и с ускорением свободного падения садится тебе на живот, так что ',
            you.get_colored_name(),
            ' выдавливает звук, будто раздавили лягушку',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Хм… Ради своей корысти хочешь потратить драгоценное время гения вроде меня на эти скучные звериные бои? Ну и наглость',
          ]);
          era.printButton('「Я не это имел(а) в виду…」', 1);
          await era.input();
          await you.say_and_wait(
            'К тому же на скачках тоже можно собрать нужные данные опыта…',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' чуть поправляет. ',
            you.get_colored_name(),
            ' становится живым креслом, чтобы ',
            tachyon.sex,
            ' удобно сидела — живое кресло из мяса',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' тоже сам собой поднимаешь руки ей на плечи — ',
            tachyon.sex,
            ' подставляет плечи — ',
            tachyon.sex,
            ' принимает массаж',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Фух… вот это помощь. Последнее время всё за лабораторным столом, тело ноет так, что хоть волком вой…',
          );
          await tachyon.say_and_wait('Что до скачек…');
          await tachyon.say_and_wait(
            'Впрочем, можно. Цель… начнём с тройной короны,',
          );
          await tachyon.say_and_wait(
            'Если даже первой среди сверстниц не стать — и правда не о чем говорить про предел…',
          );
          await tachyon.say_and_wait([
            'Итак, ',
            callname,
            ', ты ведь вложишься в меня по полной?',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' смотришь: ',
            tachyon.sex,
            ' сверкает безумным взглядом, и ты с улыбкой говоришь',
          ]);
          era.printButton('「Ещё бы」', 1);
          await era.input();
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' и ',
          tachyon.get_colored_name(),
          ' — цель поставлена',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'Анализ осуществимости темы';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        'Если первая встреча ',
        tachyon.uma_sex_title,
        ' и тренера — это миг, когда шестерёнки двоих начинают вращаться',
      ]);
      await era.printAndWait(
        'то этот день — миг, когда звук вращения этих шестерёнок сотрясает мир',
      );
      await era.printAndWait([
        '…По крайней мере, для остальных ',
        tachyon.uma_sex_title,
        ' это было именно так',
      ]);

      era.printButton('「Тахион!」', 1);
      await era.input();
      await era.printAndWait([
        'Если бы твоя ',
        tachyon.uma_sex_title,
        ' и правда прониклась подобным чувством, будто открывается первая страница эпоса, то сейчас не тратила бы драгоценное время предстартовой подготовки на болтовню с другими ',
        tachyon.uma_sex_title,
        ', пожалуй',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Так что так называемое время — всего лишь определение, данное людьми, само по себе просто придуманная человеком единица, а быстро и медленно — и подавно понятия относительные…',
      );
      await tachyon.say_and_wait(['Надо же, ', callname, '? Вот и ты']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' не находит слов: считанные минуты — и на дорожку выйдут все заявленные ',
        tachyon.uma_sex_title,
        ', а ведь это первый дебютный забег, который теоретически бывает раз в жизни,',
      ]);
      await era.printAndWait([
        'А главная фаворитка публики — ',
        tachyon.sex,
        ' — перед самым стартом всё ещё стоит в сторонке и болтает, да ещё на такие пустяковые темы',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' прощается с теми несколькими ребятишками, что заворожённо слушали, как рассуждает ',
        tachyon.get_colored_name(),
        ', а потом тянет за собой ',
        tachyon.get_colored_name(),
        ' вниз, в подтрибунный тоннель',
      ]);
      if (you.sex_code === 1) {
        era.println();
        await tachyon.say_and_wait([
          'Мужчину, который так суетится, начинают недолюбливать, ',
          callname,
        ]);
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' всё так же неторопливо идёт следом за ',
        you.get_colored_name(),
        ', держась чуть позади',
      ]);
      await era.printAndWait([
        'Шаги вас двоих эхом гуляют по пустому тоннелю, и обстановка вдруг делается неловкой',
      ]);

      era.printButton('「…Не думал(а), что ты так хорошо ладишь с людьми」', 1);
      await era.input();
      await era.printAndWait([
        'Явно сказано лишь бы не молчать, но ',
        tachyon.get_colored_name(),
        ', похоже, этой неловкости не замечает — или замечает, но делает вид, что нет, и отвечает',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'А то. Не поработаешь иногда над собственным образом — откуда возьмётся нескончаемый поток подопытных',
      );
      era.println();
      await era.printAndWait(
        'Если бы образ и правда волновал, не делала бы обычно всяких странностей…',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', ты ещё зелёный(ая). Образ — штука такая: больше всего люди любят подыскивать злодею оправдание, а праведнику — изъян',
      ]);
      await tachyon.say_and_wait(
        'Чем лепить безупречный образ и потом попасться на разоблачении, куда лучше дать им самим отыскать безумному учёному причину, по которой его все сторонятся, и проникнуться сочувствием',
      );
      era.println();
      await era.printAndWait([tachyon.sex, ' холодно усмехается']);
      era.println();
      await tachyon.say_and_wait([
        'Тот разговор — просто посаженное семя. А как я выиграю сегодняшний забег, ',
        tachyon.couple_title,
        ' и сами почувствуют, как сегодняшний разговор пустит корни у них в душе',
      ]);
      await tachyon.say_and_wait(
        'А когда в будущем столкнутся с задачкой, сами прибегут за ответом к 『доброй сэмпай Тахион』,',
      );
      await tachyon.say_and_wait([
        'А я, милосердная, разумеется, помогу совершенно бесплатно — ведь именно за этим и придут ',
        tachyon.couple_title,
        '',
      ]);
      await tachyon.say_and_wait(
        'Правда, в благодарность дать мне записать немного данных для опытов — это ведь справедливо?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' невольно покрывается холодным потом: догадаться-то можно было, что дело в образе и всём таком, но что расчёт заходит настолько далеко вперёд, и подумать было нельзя',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait(
          'Ну надо же, надо же, неужели кто-то ревнует?',
        );
        era.println();
        await era.printAndWait([
          'Что-то, похоже, поняв не так, ',
          tachyon.get_colored_name(),
          ' вдруг придвигается и прижимается всем телом к ',
          you.get_colored_name(),
          ' — вплотную',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' вдруг обнимает сзади ',
          you.get_colored_name(),
          ', а тонкие изящные пальцы совсем не невинно шарят по телу — по всему, что есть у ',
          you.get_colored_name(),
          ', и наконец замирают на месте, скрытом под документами',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await era.printAndWait([
            tachyon.sex,
            ' через штаны медленно обводит проступивший бугор, и по мере того как оживает то, что между ног у ',
            you.get_colored_name(),
            ', ',
            tachyon.sex,
            ' уже не просто легонько обрисовывает, а обхватывает и дрочит',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Не переживай, женщинам я всё же предпочитаю ощущение, когда меня заполняют',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' склоняется к уху ',
            you.get_colored_name(),
            ' и говорит, дыша орхидеевой сладостью',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Хотя… если бы ты стал(а) женщиной, может, я бы и приняла, а?',
          );
          era.println();
        }
        await era.printAndWait([
          tachyon.sex,
          ' хихикает, отпускает ',
          you.get_colored_name(),
          ' и как ни в чём не бывало идёт к дорожке',
        ]);
      }
      era.printButton(
        '「…Как ни крути, если не выиграешь, весь твой замысел ведь помрёт, не родившись?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' не оборачивается и идёт прямо туда, где свет',
      ]);
      await era.printAndWait([
        'Из тёмного тоннеля взгляд вырывается наружу так внезапно, что ',
        you.get_colored_name(),
        ' даже щурится — свет режет глаза',
      ]);
      await era.printAndWait([
        'Сквозь пелену слёз ',
        tachyon.sex,
        ', выходящая на дорожку, будто растворяется в свете',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Тебе только и надо, что смирно ждать здесь моего победного возвращения',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Исследовательская база и условия работы';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      era.printButton('「Пробежала великолепно! Прямо как свет!」', 1);
      await era.input();
      await tachyon.say_and_wait([
        'Всего-то проверочный расчёт для опыта, а ты уже так радуешься, ',
        callname,
        ' — до чего же ты наивный(ая)… Ай!',
      ]);
      era.printButton('Что такое!', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит на вдруг вскрикнувшую ',
        tachyon.get_colored_name(),
        ', и внутри всё сжимается',
      ]);
      await you.say_and_wait('После забега… неужели, нога…', true);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' торопливо подаётся вперёд, чтобы проверить, что с ногами у ',
        tachyon.get_colored_name(),
        ', но…',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Провал, провал! Я забыла забрать прибор со стартовых створок — тот, что записывал скорость выхода!',
      );
      era.println();
      if (relation > 225) {
        await era.printAndWait([
          you.get_colored_name(),
          ' вздыхает: так вот в чём дело',
        ]);
        era.printButton('「Всё в порядке, скорость выхода уже записана」', 1);
        await era.input();
        await era.printAndWait([
          'Пусть до чтения мыслей и далеко, но ведь именно тебе выпало быть тренером, а подопечная — ',
          tachyon.get_colored_name(),
          ', не кто-нибудь',
        ]);
        await era.printAndWait([
          'и хоть примерно, но представляешь, какие данные понадобятся, раз их ждёт ',
          tachyon.sex,
          '. Да и вообще беспокоиться о таком не должна та, что бежит по дорожке, — ',
          tachyon.sex,
          ' сама',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'О-о! Отлично сработано, ',
          callname,
          '! Давай прямо сейчас всё и проверим!',
        ]);
        era.println();
        await era.printAndWait([
          'Только что добытая победа, вот-вот начинающийся Winning Live — всё это для вас двоих будто не существует, словно только что был не забег, а обычное исследование',
        ]);
        era.println();
        await era.printAndWait([
          'Вы без конца смотрите записанные данные, выдвигаете одну догадку за другой — и приходите в себя, только когда начинается Winning Live и снаружи раздаётся торопливый стук в дверь',
        ]);
      } else {
        await era.printAndWait('Ч-что это ещё такое!?');
        await era.printAndWait(
          'Стоя в створках в ожидании старта, эта особа ещё и на такое находит настроение?',
        );
        await era.printAndWait(
          'Нет, вообще-то просто так вешать на створки какие-то датчики…',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' невольно чувствует резь в желудке',
        ]);
        era.println();
        await era.printAndWait([
          'После этого, чтобы забрать приборы, ',
          you.get_colored_name(),
          ' и ',
          tachyon.get_colored_name(),
          ' пробираются на дорожку тайком…',
        ]);
        await era.printAndWait([
          'Само собой, вас засекли люди из URA. После долгих извинений ',
          tachyon.get_colored_name(),
          ' всё-таки забрала приборы. Всё прошло на редкость гладко',
        ]);
        await era.printAndWait([
          '…Разве что пока вы их собирали, взгляды сотрудников слегка кололи',
        ]);
        era.println();
        await era.printAndWait('【Репутация упала!】');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_36: (() => {
    const title = 'Составление годового плана исследований';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} pocket 森林宝穴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} hope_sta 希望锦标（上色版名字）
     */
    const f = async (
      tachyon,
      pocket,
      you,
      callname,
      relation,
      love,
      hope_sta,
    ) => {
      await era.printAndWait([
        'Спустя два месяца после дебютного забега ',
        you.get_colored_name(),
        ' вдруг получает вызов в лабораторию — зовёт ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
      await era.printAndWait(
        'Думал(а), что опять как обычно — очередное опытное зелье, но нет…',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', я собираюсь выступить в конце декабря на ',
        hope_sta,
        ', займись оформлением',
      ]);
      era.printButton('「Э? Hopeful Stakes?」', 1);
      await era.input();
      await tachyon.say_and_wait('Хм-м? Какие-то проблемы?');
      era.println();
      await era.printAndWait([
        'Стоит войти, как ',
        tachyon.get_colored_name(),
        ' небрежным тоном, будто обсуждает, что съесть на ужин, обращается к ',
        you.get_colored_name(),
        ' со словами',
      ]);
      await era.printAndWait([
        'Hopeful Stakes… это G1 на среднюю дистанцию в конце декабря, можно сказать, один из важнейших забегов для ',
        tachyon.uma_sex_title,
        ' юниорского класса',
      ]);
      await era.printAndWait(
        'Что до оформления… до забега ещё два месяца, заявку подавать как раз самое время, так что не опоздаем',
      );
      await era.printAndWait([
        'Выиграет ли… честно говоря, об этом и думать незачем: самая быстрая скорость в мире — скорость света, а быстрее света — ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('Единственный вопрос — why do it');
      await era.printAndWait([
        'Почему ',
        tachyon.get_colored_name(),
        ', которой забеги всегда были безразличны, вдруг захотела выступить в одном конкретном?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' честно озвучивает своё недоумение',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' не отвечает, только похлопывает по газете на столе — это сегодняшние спортивные новости, и если не изменяет память…',
      ]);
      await era.printAndWait([
        'Главная новость дня — 「',
        pocket.get_colored_name(),
        ' и Курофунэ подтвердили участие в ',
        hope_sta,
        '」',
      ]);
      era.println();
      await era.printAndWait([
        'Вот оно что… и ',
        pocket.get_colored_name(),
        ', и Курофунэ — из тех, за кем в этом поколении следят больше всего',
      ]);
      await era.printAndWait([
        'Как ни крути, и у ',
        tachyon.get_colored_name(),
        ' есть желание сойтись с сильнейшими своего поколения, наверное…',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Разумеется, ради испытания нового препарата! Как забег без сильных соперниц загонит кого-то к пределу? А если до предела и не дотянуться, то и помощь препарата тем более ни к чему',
      );
      era.println();
      await era.printAndWait(
        'А… ну конечно, всё к этому и шло, так и знал(а)… Хм?',
      );
      era.printButton(
        '「Погоди, препараты на забеге… это же нарушение правил?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        'Хм? Вот ты о чём беспокоишься, ',
        callname,
        '. Расслабься, ты правда думаешь, что их кустарный допинг-контроль способен найти то, чем пользуюсь я?',
      ]);
      era.println();
      await you.say_and_wait('Нет! Дело совсем не в этом!');

      era.printButton(
        '「Это… не будет ли… немного против… духа спорта или как там…?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' с опаской подбирает слова, стараясь не употреблять выражений, которые могли бы её задеть',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Хм? ',
        callname,
        '? Ты что же, решил(а), будто я собираюсь пить что-то вроде допинга? Так вот кем я тебе представляюсь?',
      ]);
      era.println();
      await era.printAndWait([
        'Это что, вор кричит «держи вора»? ',
        you.get_colored_name(),
        ' торопливо мотает головой: нет',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Успокойся, это никакой не допинг, и никакого ускорения на дорожке он не даёт…',
      );
      await tachyon.say_and_wait(
        'Просто это препарат, эффект которого проявится только при достаточно сильных соперницах',
      );
      era.println();
      era.print([
        'Услышав то, что сказала ',
        tachyon.sex,
        ', ',
        you.get_colored_name(),
        '…',
      ]);
      era.printButton('Поверить', 1);
      era.printButton('Поверить наполовину', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          'Вот как. ',
          you.get_colored_name(),
          ' дослушивает объяснение, которое дала ',
          tachyon.sex,
          ', кивает и, ничего не сказав, собирается идти оформлять заявку на забег за ',
          tachyon.get_colored_name(),
          ' — и от этого как раз приходит в замешательство ',
          tachyon.get_colored_name(),
          ' сама',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Нет-нет, погоди… ',
          callname,
          ', ты вот так просто взял(а) и поверил(а) моим словам?',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' кивает, не понимая, почему сама ',
          tachyon.get_colored_name(),
          ' так удивлена',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'А вдруг я… вдруг это и правда… я к тому, что вдруг я тебя обманула?',
        );
        era.println();
        await era.printAndWait([
          'Если бы ',
          tachyon.get_colored_name(),
          ' и правда тебя обманула…',
        ]);
        await era.printAndWait(
          'Такой вопрос никогда и в голову не приходил, но если, вдруг',
        );

        era.printButton('「Даже если обманет — ничего страшного」', 1);
        await era.input();
        await era.printAndWait('Решено ещё с того дня');
        await era.printAndWait([
          'Верить в возможности и во всё, что несёт в себе ',
          tachyon.sex,
          ' сама',
        ]);
        await era.printAndWait([
          'Лишь бы ',
          tachyon.sex,
          ' увидела мир подальше — а обман, ну и что с того',
        ]);
        era.println();
        await tachyon.say_and_wait('…Доверие? Нет, слепая вера?');
        era.println();
        await era.printAndWait('Слепая вера');
        await era.printAndWait('Если вдуматься — так и есть');
        await era.printAndWait([
          'Ты ослеп(ла) — из-за ',
          tachyon.get_colored_name(),
          ' больше ничего другого не видишь',
        ]);
        await era.printAndWait([
          'И как раз потому, что ослеп(ла), тянешься к свету — к самой яркой, а ярче всех ',
          tachyon.sex,
        ]);
        era.println();
        if (relation <= 375) {
          await tachyon.say_and_wait([
            'Хе-хе-хе, ну и ладно. Раз так — не отставай от моего шага, ',
            callname,
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' встряхивает рукавами, возвращается к опытам и тем объявляет разговор оконченным',
          ]);
          era.println();
          await era.printAndWait(
            'Перед тем как закончить, напоследок бросает одну фразу',
          );
          era.println();
          await tachyon.say_and_wait(
            'В награду обещаю: ты с особой трибуны увидишь то, что за гранью возможного!',
          );
        } else {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await era.printAndWait([
            'Непонятно почему, но ',
            tachyon.get_colored_name(),
            ' выглядит чем-то недовольной',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'В обычном случае я бы сейчас обрадовалась: это ведь показатель твоей преданности мне как подопытной свинки',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' недовольно тычет пальцем в ',
            you.get_colored_name(),
            ' — прямо в грудь',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Но такое слепое послушание мне противно. Я хочу, чтобы ты стал(а) напарником, который даёт мне советы и идёт рядом, а не подопытным зверьком, у которого нет своего мнения',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' немного задумывается о собственном поведении и, чтобы что-то изменить, ',
            you.get_colored_name(),
            ' решает задать вопрос',
          ]);
          era.printButton('「Тогда… в чём причина такого решения?」', 1);
          await era.input();
          await tachyon.say_and_wait('…Прости, сейчас сказать тебе не могу');
          await tachyon.say_and_wait(
            'Когда-нибудь обязательно, но… не сейчас. Могу тебе поручиться. А пока просто поверь мне, ладно?',
          );

          era.printButton('「Ты же только что велела не верить слепо?」', 1);
          await era.input();
          await tachyon.say_and_wait(
            'Ну, это… другое. Раньше речь была о вере без причины, а сейчас — о вере в то, что причина есть, но назвать её нельзя',
          );
          era.println();
          await era.printAndWait([
            'Пусть ',
            you.get_colored_name(),
            ' и не понимает, в чём тут разница, но ',
            you.get_colored_name(),
            ' благоразумно решает не спорить',
          ]);
          era.println();
          await era.printAndWait([
            'В общем, следующая цель, которую ставят ',
            you.get_colored_name(),
            ' и ',
            tachyon.get_colored_name(),
            ', — это ',
            hope_sta,
            ', решено',
          ]);
          await era.printAndWait([
            'Если ничего не случится, то пусть ',
            tachyon.sex,
            ' участвует — проблем быть не должно, наверное…',
          ]);
        }
      } else {
        era.println();
        await you.say_and_wait('Правда?', true);
        await era.printAndWait([
          you.get_colored_name(),
          ' в глубине души всё же сомневается, но…',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' пожимает плечами и берётся готовить заявочные документы на забег — за ',
          tachyon.get_colored_name(),
          ', как всегда',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…',
          callname,
          '? Странно, конечно, что я сама это говорю, но неужели у тебя нет ни капли сомнений? Вот так просто поверил(а)?',
        ]);
        era.printButton(
          '「Не верю, но верю, что Тахион выиграет и без препарата」',
          1,
        );
        await era.input();
        await era.printAndWait([
          'Пусть в том, что творит ',
          tachyon.get_colored_name(),
          ', ничего не понятно, и что делает препарат — тоже',
        ]);
        await era.printAndWait([
          'В конце концов, ',
          you.get_colored_name(),
          ' и не считает, что ',
          tachyon.get_colored_name(),
          ' из тех, кто послушно остановится, едва ',
          tachyon.sex,
          ' услышит 「так по правилам нельзя」. Нет, ',
          tachyon.sex,
          ' и не подумает',
        ]);
        await era.printAndWait('Но вот в этом одном сомневаться не приходится');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' победит наверняка и без всякой посторонней помощи вроде препаратов',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' не нуждается ни в каком допинге, и ',
          you.get_colored_name(),
          ' просто в это верит',
        ]);
        era.println();
        if (relation > 0 && love < 50) {
          await tachyon.say_and_wait(
            'Так вот твой ответ? Не доверяешь мне, но доверяешь моему таланту? Недурно! Вот это и есть подобающий исследователю подход!',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' будто очень довольна твоим ответом и кивает: 「угу-угу」',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Ну так и верь себе в мою победу. Иди за мной следом — и я покажу тебе то сияние, которого ты ждёшь',
          );
          era.println();
          await era.printAndWait([
            'И вот следующая цель, которую ставят ',
            you.get_colored_name(),
            ' и ',
            tachyon.get_colored_name(),
            ', — это ',
            hope_sta,
            ', решено',
          ]);
          await era.printAndWait(
            'Только вот… итог подведён красивыми словами, но правда ли всё в порядке с таким участием? Пожалуй, стоит ещё хорошенько подумать',
          );
        } else {
          if (relation <= 0) {
            await tachyon.say_and_wait(
              '…Вот бы ты и в обычное время говорил(а) так же складно',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' произносит это холодно, но, судя по тому, как виляет хвостом ',
              tachyon.sex,
              ' сама, ей это очень даже по вкусу',
            ]);
          } else {
            era.println();
            await tachyon.say_and_wait([
              callname,
              '… эти твои слова звучат так, будто ты совсем мне не веришь',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' недовольно надувает губы и резко отворачивается',
            ]);
            era.println();
            await era.printAndWait(
              'Значит, и верить нельзя, и не верить нельзя…',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' не удерживается и хватается за лоб, а потом, будто уговаривая ребёнка, объясняет ',
              tachyon.get_colored_name(),
              ', как сильно доверяет и как сильно любит ту, что стоит рядом, — а рядом ',
              tachyon.sex,
              ', и лишь с большим трудом добивается, чтобы ',
              tachyon.sex,
              ' перестала капризничать',
            ]);
          }
          era.println();
          await era.printAndWait([
            'И вот следующая цель, которую ставят ',
            you.get_colored_name(),
            ' и ',
            tachyon.get_colored_name(),
            ', — это ',
            hope_sta,
            ', решено',
          ]);
          await era.printAndWait([
            'Только вот… сказано-то сказано, но правда ли не будет беды, если выпустить на дорожку вот такую, какая сейчас ',
            tachyon.sex,
            '? Пожалуй, стоит ещё как следует поволноваться',
          ]);
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_hope_sta: (() => {
    const title = 'Продвижение исследования по теме';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} hope_sta 希望锦标（上色版名字）
     */
    const f = async (tachyon, you, callname, hope_sta) => {
      await era.printAndWait('Наконец настал этот день');
      await era.printAndWait([
        hope_sta,
        ' — можно сказать, самый важный забег второй половины года для тех ',
        tachyon.uma_sex_title,
        ', кто только дебютировал',
      ]);
      await era.printAndWait(
        'Особенно для тех, кто идёт по линии Тройной короны',
      );
      await era.printAndWait([
        'Единственный G1 на среднюю дистанцию в юниорском классе — для многих одарённых ',
        tachyon.uma_sex_title,
        ' это первый шаг в путь за мечтой.',
      ]);
      era.println();
      await era.printAndWait([
        'И вот в такой важный день подопечная, которую ведёт ',
        you.get_colored_name(),
        ', — ',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        '…',
      ]);
      era.println();
      await you.say_and_wait('Э?');
      era.println();
      await era.printAndWait([
        'Ожидалось, что ',
        tachyon.get_colored_name(),
        ' будет носиться где попало, но сегодня, вопреки обыкновению, она смирно сидит в комнате подготовки участниц',
      ]);
      era.println();
      await tachyon.say_and_wait(['Надо же, ', callname, ', вот и ты']);
      era.println();
      await era.printAndWait([
        'Сидя в комнате подготовки, ',
        tachyon.get_colored_name(),
        ' прыскает чем-то из баллончика себе на ноги и поднимает глаза лишь на миг — взглянуть на ',
        you.get_colored_name(),
        ' — и снова сосредоточивается на своём баллончике',
      ]);

      era.printButton('「Это и есть тот самый препарат?」', 1);
      await era.input();
      await tachyon.say_and_wait('Ага. Надеюсь, в этом забеге он пригодится…');
      await tachyon.say_and_wait(
        'На этом этапе скрывать от тебя уже нечего: это препарат, который расслабляет мышцы ног…',
      );
      await tachyon.say_and_wait(
        'Если угодно, что-то вроде охлаждающего средства. Наносится заранее, чтобы участница не получила травму после забега. И если опыт удастся…',
      );
      era.println();
      await era.printAndWait('Вот оно что');
      await era.printAndWait([
        'Услышав это, ',
        you.get_colored_name(),
        ' невольно переводит дух',
      ]);
      await era.printAndWait([
        'Пусть ты и веришь в ',
        tachyon.get_colored_name(),
        ', а в душе всё равно остаётся капелька тревоги',
      ]);
      await era.printAndWait([
        'Дело не в самой ',
        tachyon.get_colored_name(),
        ', просто зелья, которые варит ',
        tachyon.get_colored_name(),
        ', не всякий раз попадают в цель… иначе с чего бы тебе до сих пор светиться всем телом',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Так, всё готово, ',
        callname,
        ', выдвигаемся',
      ]);
      era.println();
      await era.printAndWait('Голос на подъёме — это из-за атмосферы забега?');
      await era.printAndWait(
        'Глаза горят — это от предвкушения сильных соперниц?',
      );
      await era.printAndWait('Или же…');
      era.println();
      await tachyon.say_and_wait(
        'Надеюсь, сегодняшние соперницы выжмут из препарата всё до капли',
      );
      era.println();
      await era.printAndWait('Ну конечно, всё ради опыта');
      await era.printAndWait([
        you.get_colored_name(),
        ' провожает взглядом ту, что осталась верна себе, — ',
        tachyon.sex,
        ' выходит на дорожку',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hope_sta_win: (() => {
    const title = 'Хоупфул';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} hope_sta 希望锦标（上色版名字）
     */
    const f = async (tachyon, you, hope_sta) => {
      era.printButton('「Как же сильно!」', 1);
      await era.input();
      await era.printAndWait([
        'Первая сцена уровня G1 — пусть это и ',
        tachyon.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' всё равно не может не переживать — ведь бежит там ',
        tachyon.sex,
        ', и от волнения потеют ладони',
      ]);
      await era.printAndWait([
        'Но даже на высшем в стране уровне ',
        tachyon.sex,
        ' показывает всё ту же силу, что выше всех прочих',
      ]);
      era.println();
      await tachyon.say_and_wait('Хе-хе, так распаляться — это уж слишком');
      era.println();
      await era.printAndWait([
        'Сойдя с дорожки, ',
        tachyon.get_colored_name(),
        ' возвращается в комнату отдыха, и в голосе у неё слышно удовольствие',
      ]);
      await era.printAndWait([
        'По этому голосу даже ',
        you.get_colored_name(),
        ' всё понимает',
      ]);
      era.printButton('「Опыт удался?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'Да-да! Ох, хороший подопытный образец и правда всё решает! Сегодняшний опыт — полный успех!',
      );
      era.println();
      await era.printAndWait([
        'Похоже, для ',
        tachyon.get_colored_name(),
        ' даже забег уровня G1 — всего лишь чуть более крупная площадка для опытов',
      ]);
      await era.printAndWait([
        'И всё же ',
        tachyon.sex,
        ' показала бег, которым подавила всех остальных',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Да что об этом, скорее возвращаемся, живо готовиться к следующему забегу!',
      );
      era.println();
      await you.say_and_wait('Э? С чего вдруг такой запал?');
      await you.say_and_wait(
        'Вроде бы не должно, но неужели в ней проснулась страсть к забегам…?',
        true,
      );
      era.println();
      await tachyon.say_and_wait(
        'У меня в голове уже готов чертёж опыта для следующего забега! Ха-ха-ха!',
      );
      era.println();
      await era.printAndWait(
        '…Ладно, как ни крути, страсть к опытам — тоже своего рода проснувшаяся страсть',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' — их ',
        hope_sta,
        ' остался позади',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hope_sta_lose: (() => {
    const title = 'Хоупфул';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        'После забега ',
        you.get_colored_name(),
        ' смотрит на молча вернувшуюся в комнату отдыха ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('Всю дорогу никто не проронил ни слова');
      await era.printAndWait([
        'Поражение в этом забеге — тяжелейший удар и для ',
        you.get_colored_name(),
        ', и для той, кем на дорожке была ',
        tachyon.sex,
        ' сама',
      ]);
      era.println();
      await tachyon.say_and_wait('…Опыт, значит, провалился');
      era.println();
      await era.printAndWait([
        'В этом забеге состояние, в котором была ',
        tachyon.get_colored_name(),
        ', явно оказалось совсем не тем…',
      ]);
      await era.printAndWait([
        'Обычный человек, пожалуй, и не разглядит, но в сегодняшнем беге не проявилось то, чем владеет ',
        tachyon.sex,
        ' — то самое… сияние',
      ]);
      await era.printAndWait([
        'Сияние, тусклое с самого начала, к концу забега почти совсем погасло — и потому ',
        tachyon.get_colored_name(),
        ' проиграла',
      ]);
      era.println();
      await tachyon.say_and_wait('……');
      era.printButton(
        '「…Ничего страшного, просто один неудавшийся опыт. Пойдём домой. Разве опыты обязаны получаться?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' невольно принимается утешать, ведь так подавлена сейчас ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        'Но ',
        tachyon.sex,
        ', сидящая на земле, почему-то со странным выражением лица',
      ]);
      await era.printAndWait('Не досада, скорее… будто она что-то терпит?');

      era.printButton('「Тахион…? Твоё тело…」', 1);
      await era.input();
      if (relation <= 225) {
        await tachyon.say_and_wait('Ничего. Не переживай… идём');
        era.println();
        await era.printAndWait([
          'Наверное, тебе всё ещё не пробить ту стену, которой закрылась ',
          tachyon.sex,
          ' сама',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' ничего не говорит и уходит следом — впереди идёт ',
          tachyon.sex,
          ' сама',
        ]);
      } else {
        await tachyon.say_and_wait([
          '…Всё нормально, ',
          callname,
          ', с моими ногами… никаких проблем, в следующий раз подкорректирую — и порядок',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ', наоборот, сама принимается утешать — хочет, чтобы ',
          you.get_colored_name(),
          ' успокоился(лась)',
        ]);
        await era.printAndWait([
          'Стоит вспомнить, какой обычно уверенной в себе бывает ',
          tachyon.sex,
          ', и на душе у ',
          you.get_colored_name(),
          ' понемногу становится спокойнее',
        ]);
        era.println();
        await tachyon.say_and_wait([
          { content: '…запасной план… пожалуй…', fontSize: '0.75rem' },
        ]);
        era.println();
        await era.printAndWait([
          'Только вот ',
          tachyon.sex,
          ' пробормотала это, думая, что её не слышат, и от этих слов у ',
          you.get_colored_name(),
          ' снова сжалось сердце',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Ежегодная проверка';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {boolean} hope_sta_win 希望锦标是否获胜
     */
    const f = async (tachyon, you, callname, relation, hope_sta_win) => {
      await tachyon.say_and_wait([
        'Надо же, ',
        callname,
        ', ты тут что… новогодние надписи?',
      ]);
      era.println();
      await era.printAndWait([
        'Ворвавшаяся без стука в кабинет тренера ',
        tachyon.get_colored_name(),
        ' увидела, что делает ',
        you.get_colored_name(),
        ' своими руками, и задала вопрос, а ',
        you.get_colored_name(),
        ' кивнул(а)',
      ]);
      era.println();
      await era.printAndWait([
        'Сегодня Новый год по лунному календарю, а ',
        you.get_colored_name(),
        ' как раз записывает свои надежды на новый год',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Тройная корона… слушай, ',
        callname,
        ', мне, пожалуй, не по чину такое говорить, но до чего же ты упёртый. Тройная корона для тебя что-то особенное значит?',
      ]);
      era.println();
      await you.say_and_wait('Особого значения… да нет, но если уж говорить');
      era.printButton(
        '「Потому что Тахион согласилась выступать… а я не думаю, что Тахион проиграет」',
        1,
      );
      await era.input();
      if (hope_sta_win) {
        if (relation > 0) {
          await tachyon.say_and_wait(
            'Хм-хм, неплохо, я ведь гений — поражений у меня и вправду нет',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' говорит с самодовольной миной',
          ]);
        } else {
          await tachyon.say_and_wait(
            'Выиграть или проиграть — надо же так гореть тем, что к опыту не имеет никакого отношения',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' говорит холодно',
          ]);
        }
      } else {
        await tachyon.say_and_wait([
          '…',
          callname,
          ', ты что, забыл(а), что я уже проигрывала?',
        ]);
        era.println();
        await era.printAndWait('…А, если так подумать, и правда было такое…');
        era.printButton('「Но Тахион всё равно самая сильная!」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '…Такая наивность, что я даже не знаю, что сказать',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' не удерживается и хватается за лоб',
        ]);
      }
      await tachyon.say_and_wait(
        'Раз так, то почему бы не помечтать подальше?',
      );
      era.println();
      await era.printAndWait('Подальше…?');
      await era.printAndWait([
        you.get_colored_name(),
        ' не сразу понимает, о чём ',
        tachyon.get_colored_name(),
        ' говорит',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Мечту — на первое место, ',
        callname,
        ', твоя мечта, моя мечта — напиши мечту побольше и подальше!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' сияет глазами, во взгляде горит азарт',
      ]);
      era.println();
      await era.printAndWait([
        'Мечта побольше и подальше… ',
        you.get_colored_name(),
        ' задумывается ненадолго, достаёт ещё один лист для надписи и пишет на нём…',
      ]);
      era.printButton('Непобедимость (все параметры +5)', 1, {
        disabled: !hope_sta_win,
      });
      era.printButton('Бесконечность (очки навыков +20)', 2);
      era.printButton('Без травм (выносливость +20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            'Непобедимость. Частице, что превосходит скорость света, невозможно проиграть каким-то смертным',
          );
          era.println();
          await tachyon.say_and_wait(
            'О? В смысле, за год ни одного поражения? Хе-хе, неплохо, на такую цель можно рассчитывать',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' с интересом смотрит на цель, которую поставил(а) ',
            you.get_colored_name(),
            ', но тут же окатывает ведром холодной воды',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Правда… выступать или нет — это уже как мне будет интересно',
          );
          era.println();
          await era.printAndWait([
            'Ведь не выступать — это тоже своего рода непобедимость. ',
            tachyon.get_colored_name(),
            ' хохочет во весь голос и отпускает шутку, которую ',
            you.get_colored_name(),
            ' не находит ни капли смешной',
          ]);
          await era.printAndWait([
            'Такое… кажется, ',
            tachyon.get_colored_name(),
            ' и правда способна выкинуть…',
          ]);
          await era.printAndWait([
            'В первый же день нового года у ',
            you.get_colored_name(),
            ' уже разболелся живот: подопечная ',
            tachyon.uma_sex_title,
            ' покоя не даёт, и похоже, лёгким этот год не будет',
          ]);
          break;
        case 2:
          await era.printAndWait([
            'Бесконечность. Если речь о мечте… то лучшей цели, чем мечта, которой живёт ',
            tachyon.get_colored_name(),
            ', просто не найти',
          ]);
          await era.printAndWait(
            'Превзойти предел, снять все ограничения — потому Бесконечность',
          );
          era.println();
          if (relation <= 0) {
            await tachyon.say_and_wait(
              '…Хе-хе, и такой, как ты, о таком думает? Убери свои приёмчики для соблазнения девочек. Ты всего лишь инструмент, который мне помогает, знай своё место',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' от души и без жалости высмеивает ',
              you.get_colored_name(),
              ' — досталось изрядно',
            ]);
            await era.printAndWait([
              '…Оно и правда, по такому поведению не поверишь, но ',
              you.get_colored_name(),
              ' именно так и думает',
            ]);
            era.println();
            await era.printAndWait([
              'С кривой усмешкой ',
              you.get_colored_name(),
              ' понимает: и этот год лёгким, скорее всего, не будет',
            ]);
          } else if (relation <= 225) {
            await tachyon.say_and_wait(
              'О? Бесконечные возможности? Неплохо, для нас это и правда подходящий вариант. В новом году идём к этой цели',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' выглядит очень довольной — отлично!',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'Итак, чтобы дотянуться до возможности, сегодняшнее зелье…',
            );
            era.println();
            await era.printAndWait('Вот и показался спрятанный кинжал!?');
            await era.printAndWait([
              'Только что наговорив таких громких слов и потому уже не в силах отказаться, ',
              you.get_colored_name(),
              ' через силу проглатывает зелье',
            ]);
            await era.printAndWait([
              'Под нимбом, повисшим над головой, ',
              you.get_colored_name(),
              ' предчувствует, что и этот год лёгким точно не будет',
            ]);
          } else {
            await tachyon.say_and_wait([
              'Хм-хм! Ну конечно, ',
              callname,
              ', ты, разумеется, именно такой выбор и сделаешь!',
            ]);
            await tachyon.say_and_wait(
              'Наша мечта, возможность, за которой мы идём вместе. Ради более широкого будущего — прорвать предел и достичь бесконечности!',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' смотрит с исступлением на ',
              you.get_colored_name(),
              ', и в глазах у неё расцветает безумный взгляд, которым ',
              you.get_colored_name(),
              ' и оказывается пойман(а)',
            ]);
            await era.printAndWait('Именно, ради нашей мечты…');
            era.println();
            await tachyon.say_and_wait(
              'Так что праздничные новогодние блюда сегодня тоже на тебе',
            );
            era.println();
            await era.printAndWait(
              'Погоди, чтобы праздничные блюда ещё и самому готовить — о таком я вообще не слышал(а)!?',
            );
            await era.printAndWait([
              'Вот ',
              tachyon.sex,
              ' смотрит с ожиданием, и ',
              you.get_colored_name(),
              ' покорно берётся за лопатку',
            ]);
            await era.printAndWait('Похоже, и этот год лёгким не будет…');
          }
          break;
        case 3:
          await era.printAndWait(
            'Без травм. Гонки — да неважно, за возможностями пусть гонятся по мере сил; главное — быть здоровой и целой, ради далёкого будущего',
          );
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('…………');

            era.printButton('「Тахион?」', 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' почему-то вдруг замолкает, и ',
              you.get_colored_name(),
              ' недоумённо подаёт голос с вопросом',
            ]);
            era.println();
            await tachyon.say_and_wait('…Скучный ответ');
            await tachyon.say_and_wait([
              'Без травм — как творить историю? Без жертв откуда возьмётся созидание? Без травм… Не думала, что ',
              callname,
              ' даст такой скучный ответ',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' почему-то вдруг сильно не в духе. Неужели сказал(а) что-то не то?',
            ]);
            era.println();
            await tachyon.say_and_wait('Без травм… если бы можно… если бы…');
            era.println();
            await era.printAndWait([
              'Но ',
              you.get_colored_name(),
              ' тут же замечает: злится ',
              tachyon.sex,
              ', кажется, вовсе не на ',
              you.get_colored_name(),
              ', а на что-то… непонятно на что. Да и в конце концов, ',
              you.get_colored_name(),
              ' ведь даже не понимает, почему ',
              tachyon.sex,
              ' злится, разве нет',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '…Да делай что хочешь. Такое скучное желание, такое скучное…',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              ' в бешенстве вылетает из кабинета тренера, оставив там ошалевшего(ую) ',
              you.get_colored_name(),
            ]);
          } else {
            await tachyon.say_and_wait('…Ну да, и то верно');
            era.printButton('「Тахион?」', 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' будто не в своём настроении, и ',
              you.get_colored_name(),
              ' не удерживается и спрашивает с недоумением',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'А, ничего. Да, ведь для тренера первое дело — чтобы была здорова ',
              tachyon.uma_sex_title,
              ', это понятно. Только… немного скучновато',
            ]);
            era.println();
            await era.printAndWait([
              'Скучно… Для той, кто гонится за возможностью, как ',
              tachyon.get_colored_name(),
              ', наверное, и правда так. Но самое важное — чтобы была здорова ',
              tachyon.get_colored_name(),
              ', вот и всё',
            ]);
            await era.printAndWait([
              'Почему-то ',
              tachyon.get_colored_name(),
              ' выглядит немного печальной. Изображает спокойствие, но всё равно чувствуется какая-то беспомощная грусть. Неужели не стоило этого говорить…',
            ]);
            await era.printAndWait('Неужели не стоило этого говорить…');
            era.println();
            await tachyon.say_and_wait(
              '…Ничего. Хе-хе, ну что ж, ради твоего желания сегодня вернусь к себе и как следует отдохну…',
            );
            await tachyon.say_and_wait('Без травм… ага…');
            era.println();
            await era.printAndWait([
              'Такое предложение как раз совпадает с тем, чего хочет ',
              you.get_colored_name(),
              '. Вот только ',
              tachyon.get_colored_name(),
              ' — что с ней вообще такое?',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' смотрит вслед: вот ',
              tachyon.sex,
              ' уходит, а в голове по-прежнему полная неразбериха',
            ]);
          }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = 'Сдача промежуточного отчёта';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {PrintedSpan} hope_sta 希望锦标（上色版名字）
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      hope_sta,
      hoch_sho,
      sats_sho,
    ) => {
      await era.printAndWait(
        'Новый год уже прошёл, но февральская академия Трейсен всё ещё укрыта холодной зимой',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит на Тренировочное поле, и изо рта вырывается белый пар вздохов',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Этот человек и сегодня тут стоит',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        'Тш… потише. Говорят, ',
        you.sex,
        ' вообще-то чей-то тренер',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        'Э… серьёзно — ',
        you.sex,
        ' тут стоит уже третий день, а подопечной, за которую ',
        you.sex,
        ' отвечает, так никто и не видел, никакой ',
        tachyon.uma_sex_title,
        ' рядом нет',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        'Кто ж его знает… Говорят, на другом курсе есть ',
        tachyon.uma_sex_title,
        ', которую вообще никто не замечает, настолько её не видно. Может, та, за кого отвечает ',
        you.sex,
        ', — это как раз ',
        tachyon.sex,
        ', кто его знает',
      ]);
      era.println();
      await era.printAndWait([
        'Ахаха… Тебя тут держат за незаметную ',
        tachyon.uma_sex_title,
        ', слышишь, ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '?',
      ]);
      await era.printAndWait([
        'Впрочем, если самому подойти и заявить, что подопечная ',
        tachyon.uma_sex_title,
        ' — это ',
        tachyon.get_colored_name(),
        ', тоже ведь никто не поверит',
      ]);
      await era.printAndWait([
        'Признавать горько, но кто поверит, что тренер, которого слушается ',
        tachyon.get_colored_name(),
        ', — вот такой ничем не сияющий обычный человек',
      ]);
      await era.printAndWait([
        'Ведь эти несколько дней ты совсем не пил(а) зелья, которые варит ',
        tachyon.get_colored_name(),
        ', вот и не светишься уже который день',
      ]);
      era.println();
      await era.printAndWait([
        'Сегодня уже третий день, как ',
        tachyon.get_colored_name(),
        ' не приходит на тренировки',
      ]);
      await era.printAndWait([
        'Мало того: ',
        you.get_colored_name(),
        ' уже три дня не видел(а) свою подопечную ',
        tachyon.uma_sex_title,
        ', ни разу',
      ]);
      await era.printAndWait([
        'Три дня даже без пробы зелий, и всё это время ',
        you.get_colored_name(),
        ' так и торчит на Тренировочном поле, дожидаясь ту, которой полагалось бы приходить сюда в часы тренировок, но которой нет',
      ]);
      era.println();
      await you.say_and_wait('Похоже, и сегодня не придёт…', true);
      await era.printAndWait([
        'И как раз в тот момент, когда ',
        you.get_colored_name(),
        ' об этом думает',
      ]);
      if (relation <= 225) {
        await tachyon.say_and_wait([
          'Надо же, ',
          callname,
          '? Ты чего тут? Я тебя уже давно ищу',
        ]);
        await you.say_and_wait('……');
        await era.printAndWait([
          'Появилась не спеша, да ещё и говорит это как само собой разумеющееся — на такую ',
          tachyon.get_colored_name(),
          ' теперь уже у ',
          you.get_colored_name(),
          ' и злости не осталось',
        ]);
        await era.printAndWait(
          'В общем, явилась на Тренировочное поле… ладно, всё равно наверняка опять из-за зелья…',
        );
        era.println();
        await tachyon.say_and_wait(
          'В общем, давай быстрее, поможешь мне замерить время',
        );
      } else {
        await tachyon.say_and_wait([
          callname,
          '! Ты куда пропал(а) на эти несколько дней! Я уже сто лет не ела бэнто!!!',
        ]);
        await era.printAndWait([
          'Ещё и первая жалуется! Это же ',
          tachyon.sex,
          ' сама все эти дни держала лабораторию на замке',
        ]);
        await tachyon.say_and_wait(
          'Ладно, не в этом суть. В общем, быстрее помоги мне замерить — новые данные опыта',
        );
      }
      era.println();
      await era.printAndWait('М? Погоди, неужели, быть не может');
      await era.printAndWait([
        'Не веря тому, что происходит перед глазами, ',
        you.get_colored_name(),
        ' оторопело жмёт на секундомер, оторопело смотрит, как ',
        tachyon.get_colored_name(),
        ' пробегает круг и возвращается, и снова оторопело жмёт на стоп',
      ]);
      era.println();
      await tachyon.say_and_wait('Время?');
      era.printButton('「На… на три секунды быстрее прежнего рекорда」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' невольно загорается. Не приходила на тренировки несколько дней? Такую ерунду ',
        you.get_colored_name(),
        ' давно отбросил(а) в сторону. С такой скоростью ',
        tachyon.sex,
        ' точно, обязательно…',
      ]);
      era.println();
      await era.printAndWait([
        'Отлично. ',
        tachyon.get_colored_name(),
        ' довольно хлопает в ладоши',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', тогда сообщу тебе хорошую новость',
      ]);
      await tachyon.say_and_wait([hoch_sho, ', я решила выступать']);
      era.println();
      await era.printAndWait([hoch_sho]);
      era.println();
      await era.printAndWait([
        'Это подготовительный забег перед ',
        sats_sho,
        '. Почти каждая, кто метит в ',
        sats_sho,
        ', — а это всегда ',
        tachyon.uma_sex_title,
        ' — сперва берёт целью ',
        hoch_sho,
        ' или ',
        hope_sta,
        ', набирает на этом популярность и только потом бросает вызов ',
        sats_sho,
      ]);
      await era.printAndWait([
        'Правда… ',
        hoch_sho,
        ' как ни крути, всего лишь G2. С чего бы ',
        tachyon.get_colored_name(),
        ', которой популярности и так хватает, вдруг заинтересовалась этой гонкой…?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…Кое-что нужно проверить до того, как будет ',
        sats_sho,
        ', иначе никак',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' говорит таким тоном, что ',
        you.get_colored_name(),
        ' чувствует лёгкую тревогу',
      ]);
      await era.printAndWait('Впрочем');
      era.printButton('「Если это Тахион, то точно всё будет в порядке」', 1);
      await era.input();
      await tachyon.say_and_wait('Хм, ты что, думаешь, я и G2 не возьму?');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' только криво усмехается и объясняет, что имел(а) в виду не это',
      ]);
      await era.printAndWait([
        'В общем, целью пока что назначен ',
        hoch_sho,
        ', решено',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_hoch_sho: (() => {
    const title = 'Контрольная группа опыта';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} vs_coffee 对手中有曼城茶座
     */
    const f = async (tachyon, you, callname, t_call_c, vs_coffee) => {
      await tachyon.say_and_wait(
        'Хоть я и подготовилась, но… контрольная группа и правда так себе, отметить нечего',
      );
      era.println();
      await era.printAndWait([
        'Но эта гонка — предварительный забег перед Satsuki Sho',
      ]);
      await era.printAndWait([
        'Если целью стоит Satsuki Sho, то результат этой гонки нельзя упускать, сильны соперницы или слабы',
      ]);
      era.println();
      if (vs_coffee) {
        await tachyon.say_and_wait([
          'Кстати, сегодня и ',
          t_call_c,
          ' тоже выступает',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          '… надеюсь, пробежит так, что будет чем полюбоваться, ведь…',
        ]);
      } else {
        await tachyon.say_and_wait([
          'Вот если бы выступала ',
          t_call_c,
          ', опыт наверняка вышел бы куда ценнее',
        ]);
      }
      await tachyon.say_and_wait([
        'Кстати говоря, ',
        callname,
        ', а ты как относишься к ',
        t_call_c,
        '?',
      ]);
      era.println();
      await era.printAndWait('Э?');
      await era.printAndWait([
        'От такого странного вопроса ',
        you.get_colored_name(),
        ' погружается в раздумья',
      ]);
      await era.printAndWait(
        'Серые клеточки мозга принимаются работать без остановки',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' такое сказала — и что же это значит…',
      ]);
      era.println();
      await era.printAndWait([
        'Глядя, как ',
        you.get_colored_name(),
        ' напрягается и уходит в оборону, ',
        tachyon.get_colored_name(),
        ' рассмеялась',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Не напрягайся так, я просто спросила. И ещё — лично мне хотелось бы, чтобы ',
        tachyon.sex,
        ' стала тебе хорошей знакомой… на всякий случай',
      ]);
      era.printButton('「Звучит как-то тревожно…」', 1);
      era.printButton('「Я навсегда останусь тренером Тахион!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Куда тебя понесло… ну правда, всё, хватит, пора на старт',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' берёт тот самый спрей, что уже видели перед Hope Stakes, брызгает им на ноги и готовится выходить',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoch_sho_win: (() => {
    const title = 'Анализ результатов контрольного опыта';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     */
    const f = async (tachyon, you, callname, love, hoch_sho, sats_sho) => {
      await era.printAndWait([
        'Само собой, ',
        tachyon.get_colored_name(),
        ' выиграла ',
        hoch_sho,
      ]);
      era.printButton('「Какая потрясающая гонка!」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'Ху… ху… хе-хе, ну и реакция у тебя, каждый раз такие преувеличения. Я ведь даже не бежала всерьёз, что тут потрясающего',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' говорит с явной насмешкой в голосе',
      ]);
      era.println();
      await you.say_and_wait('Нисколько не преувеличиваю');
      await you.say_and_wait(
        'Всерьёз ты бежишь или нет — бег Тахион всё равно меня завораживает, это как… точно, фотоэлектрон',
      );
      era.println();
      await tachyon.say_and_wait('Фотоэлектрон…?');
      era.println();
      await you.say_and_wait(
        'Луч света, падающий на электрод, независимо от силы выбивает из электрода электроны. Дело в частоте, то есть в разнице самих характеристик',
      );
      await you.say_and_wait(
        'Сильно или слабо, всерьёз или нет — бег Тахион для меня свет иного порядка, единственный, что выбивает электроны из электрода',
      );
      era.println();
      await tachyon.say_and_wait('…Это что за сравнение такое');
      era.println();
      await you.say_and_wait('Э-э… разве не годится');
      await you.say_and_wait(
        'Я ведь долго над ним думал(а), даже был(а) уверен(а)…',
      );
      era.println();
      if (love > 75) {
        await tachyon.say_and_wait(
          'Впрочем… смысл я поняла. То есть на тебе пояс верности, который могу отпереть только я?',
        );
        await era.printAndWait('Нет, это сравнение ещё хуже…');
      } else {
        await tachyon.say_and_wait(
          'Впрочем… смысл я поняла. То есть как бы я ни бежала, лишь бы это была я — и ты доволен(льна), верно?',
        );
      }
      await you.say_and_wait(
        'И всё-таки хотелось бы, чтобы Тахион бежала всерьёз',
      );
      await era.printAndWait([
        'На этом месте ',
        you.get_colored_name(),
        ' вдруг вспоминает про ту проверку, о которой ',
        tachyon.get_colored_name(),
        ' говорила перед гонкой…',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…Проблем нет. По крайней мере, ',
        sats_sho,
        ' пройдёт без проблем',
      ]);
      era.println();
      await era.printAndWait('По крайней мере…?');
      await era.printAndWait([
        'От этих слов, от которых никак не становится спокойнее, ',
        you.get_colored_name(),
        ' тоже замолкает',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Ладно, не будем об этом, скорее вернёмся и продолжим опыт',
      );
      era.println();
      await era.printAndWait([
        'Вот так ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' завершили свой ',
        hoch_sho,
        ', вот и всё',
      ]);
      await era.printAndWait([
        'Следующая цель — ',
        sats_sho,
        ' уже совсем близко!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = 'Одиночный опыт и анализ результатов';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait(
        'Сегодня первый этап классических гонок — Satsuki Sho',
      );
      await era.printAndWait(
        'Зрители в возбуждении ждут удара гонга, и сами участницы перед стартом тоже заражаются этим волнением',
      );
      await era.printAndWait([
        'Именно так, и даже ',
        tachyon.get_colored_name(),
        ' не исключение',
      ]);
      await era.printAndWait([
        'Вот только… ',
        tachyon.sex,
        ' возбуждена по причине, которая слегка отличается от общей',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! Смотри, всё-таки… только на трассе G1 и есть смысл собирать данные!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' в возбуждении носится туда-сюда и даже собирается пробраться в комнаты отдыха других участниц, чтобы собрать данные по каждой',
      ]);
      await era.printAndWait([
        'Хорошо ещё, что ',
        you.get_colored_name(),
        ' встал(а) насмерть и не пустил(а), только поэтому ',
        tachyon.sex,
        ' от этой затеи отказалась',
      ]);
      await era.printAndWait([
        'Перед стартом в возбуждении — ',
        tachyon.get_colored_name(),
        ', а в противоположность ей, перед стартом почему-то в тревоге, — ',
        you.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        'То самое «по крайней мере» на Yayoi Sho: до Satsuki Sho проблем не будет',
      ]);
      await era.printAndWait(['Но… после Satsuki Sho — уже не факт?']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — с её телом что-то не так…?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…',
        callname,
        '? Что такое, сегодня ты молчаливый(ая), совсем на себя не похож(а)',
      ]);
      await era.printAndWait([
        'Дожили: теперь уже ',
        tachyon.get_colored_name(),
        ' волнуется за тебя — так дело не пойдёт',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' торопливо берёт себя в руки и возвращается в форму',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Ладно, сегодня… покажу тебе, каково это всерьёз… настоящий предел, до которого доходит ',
        tachyon.uma_sex_title,
        ', вот что',
      ]);
      era.println();
      await era.printAndWait('Предел…?');
      await era.printAndWait('Нет, всё будет в порядке, обязательно');
      await era.printAndWait([
        you.get_colored_name(),
        ' отбрасывает сомнения и тревогу и провожает взглядом, как ',
        tachyon.get_colored_name(),
        ' выходит на трассу',
      ]);
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = (tachyon) => [tachyon.uma_sex_title, ' — вот он, предел'];
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (tachyon, you, callname, sats_sho, toky_yus) => {
      await tachyon.say_and_wait([callname, ', ты видел(а)?']);
      era.println();
      await era.printAndWait([
        'Пробежав ',
        sats_sho,
        ', ',
        tachyon.get_colored_name(),
        ' срывает самые бурные овации на сегодняшний день',
      ]);
      await era.printAndWait([
        'Почему зрители в таком возбуждении — ',
        you.get_colored_name(),
        ' тоже понимает',
      ]);
      await era.printAndWait([
        'Сегодня ',
        tachyon.get_colored_name(),
        ' выступила безупречно',
      ]);
      await era.printAndWait([
        'Нет, можно сказать так: если у ',
        tachyon.uma_sex_title,
        ' и есть предел, то это непременно сегодняшняя ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait(
        'Скорость как у света, сияние как у света, и как у света… призрачность',
      );
      era.println();
      await era.printAndWait(
        'Бег, который будто вот-вот рассеется, как свет, едва всё кончится',
      );
      await era.printAndWait([
        'В миг, когда она пересекла финиш, никто не смел издать ни звука, и даже ты, всегда веривший(ая) в силу, которой обладает ',
        tachyon.get_colored_name(),
        ', тоже не мог(ла) поверить',
      ]);
      await era.printAndWait([
        'Такой бег объясняется только одним: ',
        tachyon.uma_sex_title,
        ' как вид дошла до своего предела',
      ]);
      await era.printAndWait(
        'Это тот бег, при виде которого сразу чувствуешь: 「Ах, такой бег никто не сможет превзойти」',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        '… вот он, тот предел, который нам предстоит превзойти',
      ]);
      era.println();
      await era.printAndWait('Объявить пределом саму себя');
      await era.printAndWait('До чего же высокомерные слова');
      await era.printAndWait(
        'Но после той гонки с этим высокомерием вынужден согласиться кто угодно',
      );
      era.println();
      await tachyon.say_and_wait(
        '…Именно. Только превзойдя такую скорость, можно говорить о преодолении предела. Иначе всё это пустая болтовня',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' говорит это, глядя тебе прямо в глаза, и ждёт ответа',
      ]);
      await era.printAndWait([
        'Что стоит за этими словами — наверняка ',
        you.get_colored_name(),
        ' понимает',
      ]);
      await era.printAndWait(
        'А ты уверен(а), что сможешь превзойти такую скорость?',
      );
      era.printButton('「Обязательно смогу」', 1);
      era.printButton('「Потому что это Тахион — значит, обязательно」', 2);
      await era.input();
      await era.printAndWait('Можно сказать, мгновенно');
      await era.printAndWait([
        'Уловив смысл, который вложила ',
        tachyon.get_colored_name(),
        ' в свои слова, ',
        you.get_colored_name(),
        ' отвечает мгновенно',
      ]);
      await era.printAndWait('Без раздумий, без лишних размышлений');
      await era.printAndWait([
        'Вот эта ',
        tachyon.uma_sex_title,
        ', что стоит перед тобой, обладает силой превзойти предел',
      ]);
      await era.printAndWait(
        'В этом ты был(а) уверен(а) с самой первой встречи',
      );
      await era.printAndWait([
        'Просто теперь цель, которую поставили ',
        you.get_colored_name(),
        ' и ',
        tachyon.sex,
        ', встала прямо перед глазами',
      ]);
      await era.printAndWait(
        'Раз цель уже видна, значит, её непременно можно превзойти',
      );
      era.println();
      await tachyon.say_and_wait(
        'Такая быстрая реакция… это мысль… нет, инстинкт? Ты…',
      );
      era.println();
      await era.printAndWait([
        'Почему-то ',
        tachyon.get_colored_name(),
        ' смотрит на ',
        you.get_colored_name(),
        ' с каким-то непростым выражением на лице',
      ]);
      await era.printAndWait([
        'Спустя какое-то время ',
        tachyon.sex,
        ' говорит так, будто на что-то решилась',
      ]);
      era.println();
      await tachyon.say_and_wait(['Что ж, давай попробуем, ', callname, '…']);
      await tachyon.say_and_wait('Но сперва определимся со следующей гонкой…');
      await tachyon.say_and_wait([
        'На сегодня точно известно: в ',
        toky_yus,
        ' я выступить могу. К нему и будем готовиться, ',
        callname,
      ]);
      era.println();
      await era.printAndWait('…Опять начинается');
      await era.printAndWait([
        'Если и есть в ',
        tachyon.get_colored_name(),
        ' хоть что-то, от чего ',
        you.get_colored_name(),
        ' тревожится, то только это',
      ]);
      await era.printAndWait(
        '…Эта неопределённость, будто следующая гонка — последняя',
      );
      await era.printAndWait([
        'Но если это ',
        tachyon.get_colored_name(),
        ', то она наверняка переступит через всю эту неопределённость',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' думает с таким вот оптимизмом',
      ]);
      era.println();
      await era.printAndWait(['Следующая гонка — решено, это ', toky_yus, '!']);
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = 'Результаты опыта не подтверждают';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {string} t_call_p 爱丽速子对森林宝穴的称呼
     */
    const f = async (tachyon, you, callname, t_call_p) => {
      await tachyon.say_and_wait([
        'Надо же, надо же, вот это Derby… ',
        t_call_p,
        ' ведь тоже должна выступать. И до чего же интересно, на что способна ',
        tachyon.sex,
        '…',
      ]);
      era.println();
      await era.printAndWait([
        'Derby: говорят, побеждает в ней самая удачливая ',
        tachyon.uma_sex_title,
        ', вот такая гонка',
      ]);
      await era.printAndWait([
        'Самая быстрая ',
        tachyon.uma_sex_title,
        ' берёт Satsuki Sho, самая удачливая ',
        tachyon.uma_sex_title,
        ' берёт Derby, самая сильная ',
        tachyon.uma_sex_title,
        ' берёт Kikuka Sho',
      ]);
      await era.printAndWait([
        'По сравнению с «самая быстрая» и «самая сильная» — вещами вполне определёнными… удача штука до того зыбкая, что ',
        you.get_colored_name(),
        ' невольно перед самой гонкой начинает тревожиться — как там ',
        tachyon.sex,
        ', справится ли',
      ]);
      era.printButton('「Правда всё в порядке?」', 1);
      era.printButton(
        '「Может, всё-таки взять с собой то предсказание на большую удачу из святилища…?」',
        2,
      );
      await era.input();
      await era.printAndWait([
        'Сегодня спозаранку, ради ',
        tachyon.get_colored_name(),
        ', ты влез(ла) по сотне ступеней в святилище и вытянул(а) там счастливое предсказание',
      ]);
      await era.printAndWait([
        'Почему-то, услышав про поступок, который совершил(а) ',
        you.get_colored_name(),
        ', ',
        tachyon.get_colored_name(),
        ' делает странное лицо',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…С утра пораньше побежал(а) тянуть такое… не думала, что ',
        callname,
        ' у нас такой суеверный',
      ]);
      era.println();
      await era.printAndWait([
        'Услышав, что говорит ',
        tachyon.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' качает головой',
      ]);
      era.printButton(
        '「Хоть богам молиться, хоть что угодно — если Тахион от этого побежит быстрее, я сделаю всё!」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '…Хе-хе, такие суеверия оставь себе. Но вот это твоё чувство… его я принимаю. Сегодняшний опыт, пожалуй, даст хороший результат',
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = 'Корректировка цели опыта';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} t_call_p 爱丽速子对森林宝穴的称呼
     */
    const f = async (tachyon, you, t_call_c, t_call_p) => {
      era.printButton('「Тахион! Как круто!」', 1);
      await era.input();
      await tachyon.say_and_wait('У-у…');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' как всегда хочет похвалить то, как бежала ',
        tachyon.get_colored_name(),
        ', но',
      ]);
      era.println();
      await tachyon.say_and_wait('…Опыт не удался');
      era.println();
      await era.printAndWait('М?');
      await era.printAndWait('Бежала ведь блестяще, а опыт всё же не удался');
      era.println();
      await tachyon.say_and_wait([
        t_call_p,
        '… было любопытно, конечно, но ',
        tachyon.sex,
        ' со своими возможностями не совпадает с тем, что я ищу… всё-таки нужна ',
        t_call_c,
        '…',
      ]);
      era.println();
      await era.printAndWait([
        'Почему-то ',
        tachyon.get_colored_name(),
        ' бормочет слова, которых ',
        you.get_colored_name(),
        ' толком не понимает',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…В общем, пока не будем об этом. Дальше мы подходим к ключевой точке опыта',
      );
      era.println();
      await era.printAndWait([
        'Понятно мало что, но ',
        you.get_colored_name(),
        ' смотрит, какое серьёзное лицо у ',
        tachyon.get_colored_name(),
        ', и невольно сам(а) подбирается и садится ровно',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Следующая гонка… пока… ещё не решено… мне нужно кое над чем как следует подумать',
      );
      era.println();
      await era.printAndWait([
        'От этих слов, полных неопределённости, у ',
        you.get_colored_name(),
        ' радость после гонки в один миг обернулась тревогой',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_23: (() => {
    const title = 'Самая быстрая? Самая сильная?';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await tachyon.print_and_wait('Быстрее');
      await tachyon.print_and_wait('Ещё быстрее');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' бежит по ночному Тренировочному полю',
      ]);
      await tachyon.print_and_wait(
        'Гонится за пределом, ни на что не оглядываясь: за пределом скорости, за пределом возможности',
      );
      await tachyon.print_and_wait(
        'Совсем как частица, что обгоняет свет (Tachyon)',
      );
      await tachyon.print_and_wait('Но…');
      era.println();
      await tachyon.say_and_wait('Цк… всё-таки не выходит…');
      era.println();
      await tachyon.print_and_wait('У всего на свете есть своя цена');
      await tachyon.print_and_wait([
        'Говорят, когда-то была ',
        tachyon.uma_sex_title,
        ', которая прорвалась за предел, положенный такому созданию, как ',
        tachyon.uma_sex_title,
        ', и заплатила за это жизнью',
      ]);
      await tachyon.print_and_wait(
        'Если бы такой ценой и правда удавалось прорвать предел — куда ни шло',
      );
      await tachyon.print_and_wait([
        'Однако ноги, которыми располагает ',
        tachyon.get_colored_name(),
        ', не имеют даже права на такое',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Что ни делай, предел не прорвать… смириться с обыденностью или же…',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' останавливается',
      ]);
      era.println();
      await tachyon.say_and_wait('…Мой предел — вот он, здесь?');
      era.println();
      await tachyon.print_and_wait([
        'Это не предел, положенный такой, как ',
        tachyon.uma_sex_title,
        ', это предел, который есть у ',
        tachyon.get_colored_name(),
        ', и только',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Что ж, если этот путь непроходим… выбрать план Б',
      );
      era.println();
      await tachyon.print_and_wait(
        'Отказаться от предела 「самой быстрой」, выбрать предел 「самой сильной」',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' может и проиграть — лишь бы после поражения был кто-то на замену, ведь ',
        tachyon.sex,
        ' не единственная, и этого хватит',
      ]);
      await tachyon.print_and_wait(
        'Доверить мечту другому — выбор, похожий на бегство от самой себя',
      );
      await tachyon.print_and_wait(
        'Раньше, наверное, ещё удалось бы убедить себя: это самый разумный выбор — доверить возможность тому, у кого больше шансов её осуществить',
      );
      await tachyon.print_and_wait('Но…');
      era.println();
      await you.used_to_say_and_wait('Я верю в Тахион');
      await you.used_to_say_and_wait('Если это Тахион, то точно всё получится');
      await you.used_to_say_and_wait([
        'Обязательно. Да что там Тройная корона — пробиться сквозь возможности, отведённые такой, как ',
        tachyon.uma_sex_title,
        ', тоже не проблема…!',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'Доверие, которое этот человек мне оказывает',
      );
      await tachyon.print_and_wait([
        'Это ничем не лучше предательства, а ведь ',
        you.sex,
        ' мне доверился… и правда, всё ли в порядке',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…Нет, это не предательство. Просто так и ',
        you.sex,
        ' получит вариант получше… поэтому…',
      ]);
      era.println();
      await tachyon.print_and_wait('Растерянность');
      await tachyon.print_and_wait('Страх');
      await tachyon.print_and_wait('Смятение');
      await tachyon.print_and_wait('И что же… что теперь делать');
      era.println();
      await tachyon.say_and_wait('…Пусть будет так');
      era.println();
      await tachyon.print_and_wait('Кубок Лавра в следующем месяце');
      await tachyon.print_and_wait(
        'Гонка, которую устраивает председатель студсовета: участвовать может кто угодно, независимо от курса и от того, началась ли полноценная подготовка',
      );
      await tachyon.print_and_wait(
        '…Если участвовать, то короткая передышка от Derby до сегодняшнего дня…',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — ноги у неё такого точно не выдержат',
      ]);
      await tachyon.print_and_wait(
        'Но такую возможность собрать данные упустишь — а будет ли ещё случай?',
      );
      await tachyon.print_and_wait([
        'Нет, если уж на то пошло… ',
        tachyon.get_colored_name(),
        ' — есть ли у неё вообще это 「потом」?',
      ]);
      await tachyon.print_and_wait(
        'А может… просто выложиться в этой гонке до конца…?',
      );
      era.println();
      await tachyon.print_and_wait(
        'Частица света под луной всё ещё в растерянности',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_a_or_b: (() => {
    const title = 'A or B';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} daiwa 大和赤骥
     * @param {CharaTalk} coffee 大和赤骥
     * @param {CharaTalk} tachyon 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, daiwa, coffee, you, callname, t_call_c) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'Правда, что Тахион-семпай будет участвовать в Кубке Лавра!',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'Так жду… бег Тахион-семпая правда завораживает…',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'Обязательно, обязательно пойду смотреть!',
      );
      era.println();
      await era.printAndWait('Главная тема в академии сейчас — Кубок Лавра');
      await era.printAndWait(
        'Кубок Лавра — гонка, которую организует председатель студсовета как ответ финалу URA',
      );
      await era.printAndWait(
        'Участвовать может любая, кто захочет, независимо от курса и от того, началась полноценная подготовка или уже закончилась',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' такой прекрасный случай собрать данные, конечно же, не упустит',
      ]);
      await era.printAndWait([
        'Последние недели тренировки идут на полную выкладку. Как говорит ',
        tachyon.sex,
        ' сама: если не подняться до соответствующего уровня, то как вообще выжать из соперниц их возможности',
      ]);
      era.println();
      await era.printAndWait([
        'Сегодня ',
        tachyon.sex,
        ' тоже усердно гоняет себя на Тренировочном поле',
      ]);
      era.printButton(
        '「Тахион! Сегодняшний результат тренировки снова далеко превзошёл прежний рекорд!」',
        1,
      );
      era.printButton('「Это потрясающе! Тахион!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '…Ха-ха-ха! Я уже привыкла к твоим преувеличениям, но всё равно каждый раз слегка удивляюсь…',
      );
      await tachyon.say_and_wait('Нет, серьёзно, тебе самому-то не неловко');
      era.printButton('「Я говорю от всего сердца!」', 1);
      era.printButton('「Чтобы помочь Тахион, я и жизни не пожалею!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'Преувеличения… чем такие красивые слова, куда полезнее реально помочь моему опыту',
      );
      era.println();
      await era.printAndWait([
        'На этих словах ',
        tachyon.get_colored_name(),
        ' вдруг достаёт из-под халата несколько пробирок',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Кстати, как раз… вот зелье, которое я сварила утром, когда пришло вдохновение…',
      );
      await tachyon.say_and_wait(
        'Ну как? Если выпьешь прямо сейчас и, когда я вернусь со следующего круга, доложишь мне об эффекте, толку будет побольше, чем от твоих этих…?',
      );
      era.println();
      await era.printAndWait([
        'Не договорив до конца, ',
        tachyon.get_colored_name(),
        ' застывает с открытым ртом',
      ]);
      await era.printAndWait([
        'Вот ',
        tachyon.sex,
        ' смотрит, а перед ней, с тремя пустыми пробирками в руках и уже выпитым зельем, — ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait('Ты…');
      era.printButton('「Так Тахион сможет успокоиться, верно?」', 1);
      era.printButton('「Так ведь я помогу Тахион, правда?」', 2);
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' почему-то долго не может выговорить ни слова',
      ]);
      era.printButton('「Тахион?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…Ну правда… до какой степени ты собираешься всё перепутать…',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' хватается за голову, на лице беспомощное выражение, будто хочет что-то сказать',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', погоди, зайди ко мне в лабораторию… есть что обсудить с ',
        you.get_colored_name(),
        ', и не откладывая',
      ]);

      era.drawLine();

      await tachyon.say_and_wait('Что ж… я начинаю');
      era.println();
      await era.printAndWait([
        'В лаборатории ',
        you.get_colored_name(),
        ' сидит прямо и напряжённо, дожидаясь, когда заговорит ',
        tachyon.get_colored_name(),
        ' и начнёт рассказ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Мои ноги… очень может быть, больше не побегут',
      );
      era.println();
      await era.printAndWait('Такое, будто небо рухнуло, а сказано вскользь');
      await era.printAndWait([
        tachyon.sex,
        ' делает паузу, чтобы дать ',
        you.get_colored_name(),
        ' время это принять, и только потом продолжает',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Я сама давно к этому готова… мои ноги изначально слабее, чем у обычной ',
        tachyon.uma_sex_title,
        ', так что принять это нетрудно',
      ]);
      await tachyon.say_and_wait(
        'Но это не значит, что я откажусь от своей мечты',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — вот её мечта: перешагнуть предел, который есть у такой, как ',
        tachyon.uma_sex_title,
        ', и увидеть, на что способна ',
        tachyon.uma_sex_title,
        ' на самом деле',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Пусть это буду не я — неважно. Пусть я смогу только смотреть — неважно… Пусть я останусь всего лишь ступенькой под чужой ногой — тоже неважно',
      );
      await tachyon.say_and_wait([
        'Кто угодно… лишь бы доказал, что это не предел, положенный такой, как ',
        tachyon.uma_sex_title,
        ', лишь бы доказал, что это всего лишь предел, который есть у ',
        tachyon.get_colored_name(),
        ', — и я буду совершенно довольна',
      ]);
      await tachyon.say_and_wait(
        'Я и правда думаю так от всего сердца. И этот Кубок Лавра тоже… чтобы кто-нибудь, кто-нибудь не я, сумел добиться успеха…',
      );
      await tachyon.say_and_wait(
        'Собрать как можно больше данных, выстроить идеальный план… пусть даже выложившись до конца…',
      );
      await tachyon.say_and_wait(
        'Но… тем, кто поколебал мою решимость… оказался ты',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' смотрит каким-то сложным взглядом на ',
        you.get_colored_name(),
      ]);
      await era.printAndWait('Печаль?');
      await era.printAndWait('Боль?');
      await era.printAndWait('Надежда?');
      await era.printAndWait('Отчаяние?');
      await era.printAndWait([
        'Взгляд, в котором словно смешалось множество чувств, устремлён на ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Ты, что каждый раз, когда я хотела сдаться, смотрел(а) на меня этим взглядом…',
      );
      await tachyon.say_and_wait(
        'Правда, если начистоту, ты хоть знаешь, до чего этот взгляд отвратителен тому, кто хочет сдаться?',
      );
      await tachyon.say_and_wait(
        'Такой чистый взгляд, в котором одно лишь доверие…',
      );
      era.println();
      await era.printAndWait([
        'Говорит, что противно, а вот ',
        tachyon.get_colored_name(),
        ' смотрит так, что в этой мешанине чувств одного лишь отвращения и не разглядеть',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Поэтому, ',
        callname,
        ', именно ты и должен(на) взять на себя ответственность за то, что всё перевернул(а)… ответственность за выбор пути',
      ]);
      await tachyon.say_and_wait([
        '…Помнишь, я как-то спрашивала? Как ты смотришь на ',
        t_call_c,
        ', что она для тебя',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' кивает, и в самом деле — ',
        tachyon.get_colored_name(),
        ' уделяет ',
        coffee.get_colored_name(),
        ' куда больше внимания, чем прочим ',
        tachyon.uma_sex_title,
        '… ',
        daiwa.get_colored_name(),
        ' не в счёт',
      ]);
      await era.printAndWait(
        'В любом случае эта забота — точно не то внимание, какое уделяют подопытному образцу',
      );
      await era.printAndWait(
        'О причинах ты и сам(а) думал(а) немало, но разгадка так и не далась',
      );
      era.println();
      await tachyon.say_and_wait([
        'Plan B — на случай, если я больше не смогу бежать… Я собираюсь всё возложить на ',
        t_call_c,
        ', пусть ',
        t_call_c,
        ' вместо меня увидит мир возможностей',
      ]);
      await tachyon.say_and_wait([
        'После этого я откажусь от всех забегов… пока ',
        t_call_c,
        ' не вырастет, пока ',
        tachyon.sex,
        ' не сможет переступить свой предел, я израсходую все оставшиеся возможности выложиться до конца и стану ступенькой, по которой поднимется ',
        tachyon.sex,
        '.',
      ]);
      await tachyon.say_and_wait(
        'Пожертвовать всем ради варианта с наибольшей вероятностью успеха — вот что такое исследователь. Даже если пожертвовать придётся собой',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' как о пустяке произносит выбор, где её собственные чувства вынесены за скобки',
      ]);
      await era.printAndWait([
        'Будто это отрепетировано бессчётное число раз… должно быть, ',
        tachyon.sex,
        ' давно уже приготовилась к тому, что однажды скажет тебе эти слова',
      ]);
      await era.printAndWait([
        'А потом ',
        tachyon.sex,
        ' чуть заметно дрогнула голосом',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'А дальше… второй вариант. Plan A, от которого я отказалась с самого начала',
      );
      await tachyon.say_and_wait([
        'Идти дальше. Я пойду к цели, которую назвал(а) ты, ',
        callname,
        ' — к Тройной короне, и к своей цели, переступить предел…',
      ]);
      await tachyon.say_and_wait(
        '…Выбор, прекрасный как сказка и такой же призрачный. И ты должен(на) быть рядом со мной, пока мечта не сбудется, или пока… всё не осыплется',
      );
      era.println();
      await tachyon.say_and_wait(
        'Сделай выбор… Не стану отрицать: это перекладывание ответственности, я сваливаю всё на тебя, но…',
      );
      await tachyon.say_and_wait(
        'Это ты принёс(ла) мне надежду, значит, это и есть та ответственность, которую тебе следует взять',
      );
      await tachyon.say_and_wait([
        'Ну же, ',
        callname,
        ', твой черёд. Сделай выбор',
      ]);
      era.println();
      era.print([you.get_colored_name(), ' решает…']);
      era.printButton('Выбрать Plan A', 1);
      era.printButton('Выбрать Plan B', 2, {
        disabled:
          era.get('cflag:25:育成回合计时') !== era.get('cflag:32:育成回合计时'),
      });
      era.print(
        '【Внимание, этот выбор заблокирует тренировки и забеги Агнес Тахион】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  os_95_3: (() => {
    const title = 'Лотерея и эффект компенсирующего препарата';
    /**
     * Plan A or B 通用
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {number} dice 抽奖结果，1-面纸，2-胡萝卜，3-大量胡萝卜，4-胡萝卜汉堡排，5-温泉旅行券
     * @param {boolean} plan_b 是否进入 Plan B
     * @param {number} cook_times 给爱丽速子做饭的次数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      relation,
      love,
      dice,
      plan_b,
      cook_times,
    ) => {
      await tachyon.say_and_wait(
        'Надо же… не думала, что оно так легко рванёт',
      );
      await tachyon.say_and_wait([
        call_25,
        ' тоже хороша… Подумаешь, подсыпала немного средства для повышения физических данных в кофейный порошок. С чего так злиться…',
      ]);
      await tachyon.say_and_wait(
        'Похоже, в этот раз всё-таки надо купить мензурки, которые выдержат проклятие?',
      );
      era.printButton('「У кого такое вообще закупать…」', 1);
      era.printButton('「На такое ведь в принципе не бывает спроса…」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'Хм. Каким бы ни был принцип проклятия, которое наложила ',
        tachyon.sex,
        ', в итоге сломать его можно только внешней силой',
      ]);
      await tachyon.say_and_wait(
        'Иными словами, достаточно укрепить их настолько, чтобы никакая внешняя сила их не сломала',
      );
      await tachyon.say_and_wait(
        'Поэтому на этот раз мы ищем мензурки высшего класса из космических материалов, которые выдержат космический холод, жар и давление',
      );
      await tachyon.say_and_wait(['А, нашла, ', callname, ', смотри']);
      era.println();
      await era.printAndWait('Серьёзно?! Ну и торговая улица!');
      era.drawLine({ content: 'Чуть раньше по времени' });
      era.println();
      await era.printAndWait([
        'В тот день ',
        you.get_colored_name(),
        ' вместе с ',
        tachyon.get_colored_name(),
        ' отправились в город за инвентарём для опытов',
      ]);
      await era.printAndWait(
        'Когда покупки закончились и вы собирались домой…',
      );
      await you.say_as_passer_by_and_wait(
        'Мужик с торговой улицы',
        'Подходи, подходи! Распродажа лабораторного оборудования на торговой улице!',
      );
      await you.say_as_passer_by_and_wait(
        'Мужик с торговой улицы',
        'Купи разом космическую стеклянную мензурку, тигель из метеоритной руды и спиртовку на ракетном топливе, и получишь право на розыгрыш!',
      );
      await you.say_as_passer_by_and_wait(
        'Мужик с торговой улицы',
        'Главный приз, путёвка на горячие источники! Первый приз, гигантский морковный гамбург-стейк!',
      );
      era.println();
      await era.printAndWait(
        'Э-э… первое ещё ладно, но остальное, это правда кто-то покупает…',
      );
      era.println();
      await tachyon.say_and_wait([callname, ', идём на розыгрыш']);
      era.printButton('「Ты что, всё это купила?!」', 1);
      era.printButton(
        '「…Спиртовка на ракетном топливе, это точно не проблема?」',
        2,
      );
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          'Само собой. В лаборатории многое нужно пополнить',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' говорит как о само собой разумеющемся',
        ]);
        await era.printAndWait(
          '…И всё-таки что творится с этой торговой улицей',
        );
      } else {
        await tachyon.say_and_wait([
          callname,
          ', ты что, даже про рекламный трюк не понимаешь? Ну конечно же трюк, трюк',
        ]);
        era.println();
        await era.printAndWait(
          '…Нет, если первые несколько настоящие, то усомниться в последнем вполне нормально',
        );
      }
      era.printButton(
        '「Хотя редко бывает, чтобы Тахион заинтересовалась таким жребием」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        'М-м… и правда. Все эти призы можно попросту купить за деньги… а на наши призовые с забегов таких денег хватает',
      );
      era.println();
      await era.printAndWait('В таком случае…');
      era.println();
      await tachyon.say_and_wait('Но моя цель не приз, а наблюдение');
      era.println();
      await era.printAndWait('Наблюдение…?');
      era.println();
      await tachyon.say_and_wait(
        'Помнишь, что я говорила на Новый год? Я хочу заняться изучением влияния чувств…',
      );
      await tachyon.say_and_wait(
        'А для этого, разумеется, нужна контрольная группа. И лучшая контрольная группа, конечно же ты, кто всё время рядом со мной',
      );
      await tachyon.say_and_wait(
        'Дай-ка мне посмотреть на твою реакцию после розыгрыша',
      );
      era.println();
      await era.printAndWait([
        'И вот ',
        you.get_colored_name(),
        ' подходит и крутит барабан…',
      ]);
      switch (dice) {
        case 1:
          await you.say_as_passer_by_and_wait(
            'Хозяин лавки',
            'Утешительный приз, пачка салфеток',
          );
          await era.printAndWait(
            'Утешительный приз… жаль, но ничего не поделаешь',
          );
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait(
              'Хм-м… а реакции-то у тебя почти никакой',
            );
            era.println();
            await era.printAndWait(
              'Да нет… я с самого начала особо не надеялся(ась)',
            );
            era.println();
            await tachyon.say_and_wait(
              'Не надеялся(ась), значит, с самого начала не верил(а), что выпадет? …Отрицать возможность ещё до результата, такого подхода я не одобряю',
            );
            era.println();
            await era.printAndWait('А…');
            era.println();
            await tachyon.say_and_wait('Идём. Пора возвращаться к опытам');
            era.println();
            await era.printAndWait([tachyon.get_colored_name(), ' помрачнела']);
            await era.printAndWait(['Вы молча вернулись в академию']);
          } else {
            await tachyon.say_and_wait(
              'Утешительный приз… ладно, на самом деле неважно',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' поддакивает: в конце концов, это всего лишь маленькая затея торговой улицы',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'Все эти призы мы ведь и так можем себе позволить',
            );
            await tachyon.say_and_wait(
              'И вообще, салфетки штука полезная… смотри, ими же можно что-нибудь вытирать, разве нет?',
            );
            await tachyon.say_and_wait(
              'И ещё… та путёвка на источники… даже выиграй мы её, времени на поездку у нас всё равно нет',
            );
            era.println();
            await era.printAndWait('Хм? С чего вдруг столько слов');
            await tachyon.say_and_wait([
              '…Кстати, ',
              callname,
              ', я слышала, некоторые торговцы в таких розыгрышах ставят механизмы…',
            ]);
            era.println();
            await era.printAndWait([
              'Увидев, что ',
              tachyon.get_colored_name(),
              ' уже тянется проверять лотерейный ящик руками, ',
              you.get_colored_name(),
              ' спешно тащит ',
              tachyon.get_colored_name(),
              ' прочь с торговой улицы',
            ]);
            await tachyon.say_and_wait([
              'Гх… отпусти меня, ',
              callname,
              ', мне плевать на призы, но как у потребителя у меня есть право и обязанность проверить, честно ли всё…!',
            ]);
            era.println();
            await era.printAndWait([
              '…На самом деле ',
              tachyon.sex,
              ' вовсе не так равнодушна, как говорит',
            ]);
          }
          break;
        case 2:
          await you.say_as_passer_by_and_wait(
            'Хозяин лавки',
            'Третий приз, одна отборная морковка!',
          );
          era.println();
          await era.printAndWait('Какая ещё отборная… просто склад расчищают');
          await era.printAndWait([
            you.get_colored_name(),
            ' беспомощно держит в руке морковку',
          ]);
          await era.printAndWait(
            'Не знаю, стоит ли к этому цепляться, но призы этого розыгрыша',
          );
          await era.printAndWait([
            'Почему-то кажется, что всё, кроме утешительных салфеток и путёвки на источники в главном призе, придумано специально для ',
            tachyon.uma_sex_title,
            ', разве нет?',
          ]);
          era.println();
          if (plan_b) {
            await tachyon.say_and_wait(
              'Морковка… если подумать, призы у них в основном довольно практичные',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' ничего не говорит и как ни в чём не бывало забирает морковку, которую держит ',
              you.get_colored_name(),
              ', отламывает кусочек и отправляет в рот',
            ]);
            era.println();
            await tachyon.say_and_wait('Неплохо, довольно сладкая');
          } else if (relation <= 225) {
            await tachyon.say_and_wait([
              'О? ',
              callname,
              ', а выражение лица у тебя сейчас очень даже неплохое',
            ]);
            era.println();
            await era.printAndWait('Э? Выражение лица?');
            era.println();
            await tachyon.say_and_wait(
              'Беспомощность, разочарование, утешение, очень сложное выражение',
            );
            era.println();
            await era.printAndWait([
              'А… если так подумать, розыгрыш ведь был затеян ради того, чтобы ',
              tachyon.get_colored_name(),
              ' могла исследовать чувства',
            ]);
            await era.printAndWait(
              '…Исследовать чувства, прямо как робот, который не понимает человеческого сердца',
            );
            await era.printAndWait([
              'Но стоит посмотреть на ту, что стоит перед тобой, вылитый безумный учёный, ',
              tachyon.get_colored_name(),
              '…',
            ]);
            await era.printAndWait([
              'Даже если ',
              tachyon.sex,
              ' прямо сейчас заявит, что не понимает, что такое человеческое сердце, никто, пожалуй, и не удивится',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'Сегодняшний опыт можно считать удачным. Дальше прошу показать мне побольше других чувств, ',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' без спроса выхватывает морковку, которую держит ',
              you.get_colored_name(),
              ', отламывает кончик и берёт в рот',
            ]);
            era.println();
            await tachyon.say_and_wait('Вкус неплохой');
          } else {
            await tachyon.say_and_wait('О-о, морковка. Разве плохо?');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' подходит со словами утешения к ',
              you.get_colored_name(),
            ]);
            era.println();
            await tachyon.say_and_wait(
              'По сравнению со всеми этими красивыми пустышками то, что восполняет питательные вещества, куда практичнее',
            );
            await tachyon.say_and_wait(
              'Морковка… вернёмся, пожарим яичницу с морковью? Или сразу морковный гамбург-стейк? Или просто выжать морковный сок, тоже неплохо…',
            );
            era.println();
            await era.printAndWait([
              'Услышав, как ',
              tachyon.get_colored_name(),
              ' утешает, ',
              you.get_colored_name(),
              ' не выдерживает и улыбается',
            ]);
            era.printButton('「Тогда одной морковки точно мало」', 1);
            era.printButton('「Надо докупить ещё」', 2);
            await era.input();
            await era.printAndWait([
              'И вот вы возвращаетесь на торговую улицу и покупаете столько моркови, чтобы хватило на ужин',
            ]);
            await era.printAndWait(
              '…Так это же и есть уловка торговцев, на которую вы попались?',
            );
            await era.printAndWait([
              'По дороге назад ',
              you.get_colored_name(),
              ' только теперь спохватывается',
            ]);
          }
          break;
        case 3:
          await you.say_as_passer_by_and_wait(
            'Хозяин лавки',
            'Второй приз, гора моркови высотой с холм!',
          );
          era.println();
          await era.printAndWait('Ва-а! Как много!');
          await era.printAndWait(
            'И правда, в буквальном смысле навалено с небольшую гору',
          );
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('О-о, разве не отлично?');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' радостно сияет',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'В этом месяце, нет, может, и полгода о моркови можно не беспокоиться',
            );
            era.println();
            if (you.race > 0) {
              await era.printAndWait([
                'Нет, но даже ',
                tachyon.uma_sex_title,
                ' столько не съест…',
              ]);
              era.println();
              await tachyon.say_and_wait([
                'Вообще говоря, для ',
                tachyon.uma_sex_title,
                ' верно вот что: чем больше энергии тратишь, тем больше надо восполнять, так что больше ешь = сильнее, это и правда работает',
              ]);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' оценивающе разглядывает ',
                you.get_colored_name(),
                ' — точнее, твоё тело',
              ]);
              era.println();
              await tachyon.say_and_wait(
                'Препарат, повышающий аппетит?… Хе-хе, может, это и неплохой выбор',
              );
              era.println();
              await era.printAndWait([
                'Похоже, эта гора моркови неотвратимо станет заботой, которую взвалит на себя один только ',
                you.get_colored_name(),
                ' — и никто больше',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' понуро тащит тележку моркови и вместе с ',
                tachyon.get_colored_name(),
                ' возвращается в академию Трейсен',
              ]);
            } else {
              await era.printAndWait([
                'Но зачем человеку столько моркови… Так думает ',
                you.get_colored_name(),
                '. И вот ',
                you.get_colored_name(),
                ' выкладывает своё беспокойство, а слушает всё это — ',
                tachyon.get_colored_name(),
              ]);
              era.println();
              await tachyon.say_and_wait([
                'О-о… ты хочешь сказать, поставить опыт над возможностью превратить человека в ',
                tachyon.uma_sex_title,
                '? Такое исследование… пожалуй, и не то чтобы нельзя…',
              ]);
              era.println();
              await you.say_and_wait('…Тахион?');
              era.println();
              await tachyon.say_and_wait([
                'Хе-хе… а ты подкинул(а) новую исследовательскую возможность, ',
                callname,
                '… это, пожалуй, будем считать Plan C на всякий случай',
              ]);
              era.println();
              era.print([
                'От этого до крайности опасного и скверного словечка ',
                you.get_colored_name(),
                ' невольно чувствует, как по спине пробегает дрожь',
              ]);
              era.printButton('「Л-лучше отдать Тахион」', 1);
              era.printButton('「Всё-таки выиграно по твоему билету」', 2);
              await era.input();
              await tachyon.say_and_wait(
                '…И то верно. Жаль, такая была хорошая возможность',
              );
              era.println();
              await era.printAndWait([
                'Кое-как избежавший(ая) очередной беды ',
                you.get_colored_name(),
                ' вместе с ',
                tachyon.get_colored_name(),
                ' тащит тележку моркови обратно в академию Трейсен',
              ]);
            }
          } else {
            era.println();
            await era.printAndWait([
              'В тот миг, когда приз оказался перед глазами, ',
              you.get_colored_name(),
              ' уже прикидывает: столько моркови… на сколько же обедов её хватит, если готовить для ',
              tachyon.get_colored_name(),
              '?',
            ]);
            era.println();
            await tachyon.say_and_wait('Как много…');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' тоже невольно застывает с ошарашенным лицом перед этой грудой моркови',
            ]);
            era.println();
            await tachyon.say_and_wait('В таком случае… придумала…');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' погружается в раздумья',
            ]);
            await era.printAndWait([
              'За столько времени стало ясно, какая ',
              tachyon.sex,
              ' на самом деле, и потому ',
              you.get_colored_name(),
              ' сразу чует неладное',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '…Бесплатная морковь… препарат… найти Огури Кап или Спешал Уик…',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' спешно подаёт голос, чтобы прервать мысли, в которых утонула ',
              tachyon.sex,
              '.',
            ]);
            era.printButton(
              '「Т-точно, давай устроим морковный пир на весь мир!」',
              1,
            );
            era.printButton(
              '「Я, я как раз недавно выучил(а) кучу блюд, где морковь главная!」',
              2,
            );
            await era.input();
            await tachyon.say_and_wait('………………');
            era.println();
            await era.printAndWait('Всё-таки… не выйдет?');
            era.println();
            await tachyon.say_and_wait([
              'Что же ты раньше не сказал(а)! Ох, на пару, варить, жарить, во фритюре… и как же ты это приготовишь～～ ',
              callname,
              ', готовь сколько угодно! С продуктами всё в порядке? Может, надо ещё побольше!',
            ]);
            era.println();
            await era.printAndWait([
              'Уже более чем достаточно — ',
              you.get_colored_name(),
              ' с горькой усмешкой качает головой',
            ]);
            await era.printAndWait([
              'Как же хорошо, что едой удалось отвлечь ',
              tachyon.get_colored_name(),
              '… правда, если дальше приготовишь плохо, наказания уж точно не миновать',
            ]);
            await era.printAndWait(
              'Но уж лучше принять препарат на себя, чем поднимать шум на всю академию…',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' тащит тележку моркови и вместе с воодушевлённой ',
              tachyon.get_colored_name(),
              ' возвращается в Трейсен, а по дороге всё думает, какое блюдо приготовить, чтобы им осталась довольна ',
              tachyon.get_colored_name(),
              '.',
            ]);
          }
          break;
        case 4:
          await you.say_as_passer_by_and_wait(
            'Хозяин лавки',
            'Первый приз — гигантский морковный гамбург-стейк!',
          );
          era.println();
          await era.printAndWait('Э…?');
          await era.printAndWait('И это первый приз?');
          era.println();
          await era.printAndWait(
            '…Вот как, готовил известный шеф-повар. Правда, о нём ты никогда не слышал(а)',
          );
          await era.printAndWait(
            'Кажется, или это и правда хуже, чем тележка моркови на втором призе',
          );
          era.println();
          await tachyon.say_and_wait([
            'О-о, надо же, первый приз… Впрочем, ',
            callname,
            ', по настроению не скажешь, что ты особо рад(а)?',
          ]);
          era.printButton('「Этот приз ведь может съесть только Тахион」', 1);
          era.printButton('「Ощущение… что второй приз был лучше」', 2);
          await era.input();
          await tachyon.say_and_wait(
            'О?… Хм, в каком-то смысле так и есть. Пусть его и готовил великий шеф, в итоге это всё равно морковь да мясо',
          );
          await tachyon.say_and_wait(
            'На уровне сырья ценность и правда уступает тому количеству моркови из второго приза',
          );
          if (love >= 75) {
            await tachyon.say_and_wait(
              'Что ж, тогда позволь мне придать ему подобающую ценность…',
            );
            era.println();
            await era.printAndWait([
              'С этими словами ',
              tachyon.get_colored_name(),
              ' бережно берёт гамбург-стейк, доставшийся в приз',
            ]);
            await era.printAndWait([
              'Отрезает кусочек ровно на один укус и протягивает его к ',
              you.get_colored_name(),
              ' — прямо к губам',
            ]);
            await era.printAndWait('Э, это…');
            era.println();
            await tachyon.say_and_wait(
              'Гамбург-стейк, съеденный вместе с любимым человеком… разве его ценность от этого не выросла?',
            );
            era.println();
            await era.printAndWait([
              'Не дожидаясь, пока ',
              you.get_colored_name(),
              ' ответит, ',
              tachyon.get_colored_name(),
              ' попросту заталкивает стейк прямо в рот к ',
              you.get_colored_name(),
              '.',
            ]);
            await era.printAndWait([
              'И только когда стейк прожёван, ',
              tachyon.sex,
              ' убирает вилку',
            ]);
            era.println();
            await tachyon.say_and_wait('Теперь твой черёд, дорогой(ая)❤');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' открывает рот и ждёт, когда покормит ',
              you.get_colored_name(),
              '.',
            ]);
            await era.printAndWait(['Вы доели этот гамбург-стейк на двоих']);
          } else if (love >= 50) {
            await tachyon.say_and_wait(
              '…К тому же приготовлено хуже, чем у тебя',
            );
            era.println();
            await era.printAndWait('Э…?');
            await era.printAndWait(
              'Такая похвала, конечно, радует, но твоя стряпня вряд ли потягается с известным шеф-поваром…',
            );
            era.println();
            await tachyon.say_and_wait(
              'Хе-хе… важна не питательность и не вкус, а то, с каким сердцем готовили… разве не ты меня этому научил(а)?',
            );
            era.println();
            await era.printAndWait([
              'С этими словами ',
              tachyon.get_colored_name(),
              ' бережно берёт гамбург-стейк, доставшийся в приз',
            ]);
            await era.printAndWait([
              'Отрезает кусочек ровно на один укус и протягивает его к ',
              you.get_colored_name(),
              ' — прямо к губам',
            ]);
            await era.printAndWait('Э, это…');
            era.println();
            await tachyon.say_and_wait(
              'Хотя ты прав(а)… без сравнения и правда ничего не определить. Наука должна быть строгой, верно?',
            );
            await tachyon.say_and_wait(
              'Так что… мастерство без любви и мастерство послабее, но с любовью, что же из них лучше…❤',
            );
            era.println();
            await era.printAndWait([
              'Нежно вложив стейк в рот, который приоткрыл(а) ',
              you.get_colored_name(),
              ', ',
              tachyon.get_colored_name(),
            ]);
            await era.printAndWait(
              'отрезает ещё кусочек и отправляет себе в рот',
            );
            era.println();
            await tachyon.say_and_wait([
              'Так что придётся тебе дома приготовить ещё одну, для сравнения, ',
              callname,
              '❤️',
            ]);
            era.println();
            await era.printAndWait([
              'Так улыбается только ',
              tachyon.sex,
              ' — и перед этой улыбкой',
            ]);
            await era.printAndWait(
              'ты словно и правда становишься подопытной морской свинкой, которой остаётся лишь покорно даться в руки',
            );
          } else if (cook_times === 0) {
            await tachyon.say_and_wait(
              'Впрочем, будто есть это могу только я, вот тут ты ошибаешься',
            );
            era.println();
            await era.printAndWait([
              'С этими словами ',
              tachyon.get_colored_name(),
              ' бережно берёт гамбург-стейк, доставшийся в приз',
            ]);
            await era.printAndWait([
              'Отрезает кусочек ровно на один укус и протягивает его к ',
              you.get_colored_name(),
              ' — прямо к губам.',
            ]);
            await you.say_and_wait('Э, это…');
            era.println();
            await tachyon.say_and_wait(
              'Питательные вещества моркови и для человека весьма полезны, животный белок в стейке тоже…',
            );
            await tachyon.say_and_wait([
              'Скорее наоборот: при человеческой скорости пищеварения потребность в мясе оказывается выше, чем у ',
              tachyon.uma_sex_title,
              ', и намного',
            ]);
            era.println();
            await era.printAndWait(
              'Нет, не то… то есть это значит, что съесть придётся мне?',
            );
            era.println();
            await tachyon.say_and_wait('Цыц… ну же, слушайся. А-а~~');
            era.println();
            await era.printAndWait('И-и что, всё-таки 「а-а~~」');
            await era.printAndWait([
              you.get_colored_name(),
              ' с растроганным видом съедает стейк…',
            ]);
            era.drawLine();
            era.printButton('「…Когда же」', 1);
            await era.input();
            await era.printAndWait(
              'Кто без причины любезничает, тот наверняка что-то замышляет',
            );
            await era.printAndWait(
              'И всё же… от чар красавицы уберечься невозможно',
            );
            await era.printAndWait([
              'Тем более что напротив — та, что вот-вот покормит с ложечки ',
              you.get_colored_name(),
              ', несравненно прекрасная ',
              tachyon.teen_sex_title,
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' смотрит на тёмно-синие огоньки, проступающие по всему телу, и обречённо спрашивает',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'Хм. Если бы моё умение подмешивать зелья раскусил(а) даже ты, то зря я каждый день так старалась, обманом заставляя ',
              call_25,
              ' пить мои составы',
            ]);
            await tachyon.say_and_wait(
              'Остальное… доедай сам(а), меня такое не особо интересует',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '… почему-то ',
              tachyon.sex,
              ' ко всему, что касается еды, предъявляет крайне низкие требования',
            ]);
            await era.printAndWait(
              'Нет, даже не низкие, скорее… вообще никаких',
            );
            await era.printAndWait(
              'Лишь бы восполняло питательные вещества, годится что угодно',
            );
            await era.printAndWait(
              'Но… всё-таки сейчас ещё новогодние дни… можно ведь немного и обнаглеть',
            );
            era.printButton(
              '「…Правда очень вкусно. Тахион не попробует кусочек?」',
              1,
            );
            await era.input();
            await tachyon.say_and_wait(
              'Не надо. Это не вежливость, мне правда не нужно',
            );
            era.printButton(
              '「Но это выиграно по билету Тахион. Если сама не попробуешь, будет нечестно」',
              1,
            );
            await era.input();
            await tachyon.say_and_wait('…И то верно. Съем один кусочек');
            era.println();
            await era.printAndWait([
              'Опомнившись, ',
              you.get_colored_name(),
              ' видит: кусок мяса, наколотый на вилку, уже успела откусить ',
              tachyon.get_colored_name(),
              ' — со скоростью, за которой не уследить',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'Ну вот, вкус и правда неплохой. На этом хватит',
            );
            era.println();
            await era.printAndWait('…Как быстро?!');
            await era.printAndWait('Даже не видно было, как рот шевельнулся…!');
            await era.printAndWait([
              '…Если ',
              tachyon.sex,
              ' и правда распробует еду, за столом из неё выйдет знатная хапуга',
            ]);
            await era.printAndWait([
              'Непонятно почему, но ',
              you.get_colored_name(),
              ' вдруг начинает думать о всякой ерунде',
            ]);
          } else {
            await tachyon.say_and_wait(
              'Что ж… тогда позволь мне придать ему подобающую ценность',
            );
            era.println();
            await era.printAndWait([
              'С этими словами ',
              tachyon.get_colored_name(),
              ' бережно берёт гамбург-стейк, доставшийся в приз',
            ]);
            await era.printAndWait([
              'Отрезает кусочек ровно на один укус и протягивает его к ',
              you.get_colored_name(),
              ' — прямо к губам',
            ]);
            await era.printAndWait('Э, это…');
            if (relation <= 225) {
              await tachyon.say_and_wait([
                'Гамбург-стейк с рук той, кто бежит G1, — ',
                tachyon.uma_sex_title,
                ' по имени ',
                tachyon.get_colored_name(),
                '. Ну как, ценность теперь подобающая?',
              ]);
            } else {
              await tachyon.say_and_wait([
                'Она — красавица, каких свет не видывал, эта ',
                tachyon.teen_sex_title,
                ', и вдобавок бегущая в G1 ',
                tachyon.uma_sex_title,
                ' по имени ',
                tachyon.get_colored_name(),
                '. Сколько ты готов(а) выложить за кусочек гамбург-стейка, поданный её рукой?',
              ]);
            }
            era.println();
            await tachyon.say_and_wait('Ну же, слушайся. А-а~~');
            era.println();
            await era.printAndWait('И-и всё-таки 「а-а~~」');
            await era.printAndWait([
              you.get_colored_name(),
              ' с растроганным видом съедает стейк…',
            ]);
            era.drawLine();
            era.printButton('「…Когда же」', 1);
            await era.input();
            await era.printAndWait(
              'Кто без причины любезничает, тот наверняка что-то замышляет',
            );
            await era.printAndWait(
              'И всё же… от чар красавицы уберечься невозможно',
            );
            await era.printAndWait([
              'Тем более что напротив — та, что вот-вот покормит с ложечки ',
              you.get_colored_name(),
              ', несравненно прекрасная ',
              tachyon.teen_sex_title,
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' смотрит на тёмно-синие огоньки, проступающие по всему телу, и обречённо спрашивает',
            ]);
            era.println();
            await tachyon.say_and_wait([
              'Хм. Если бы моё умение подмешивать зелья раскусил(а) даже ты, то зря я каждый день так старалась, обманом заставляя ',
              call_25,
              ' пить мои составы',
            ]);
            await tachyon.say_and_wait('Остальное… Эй! Оставь и мне кусочек!');
            era.println();
            await era.printAndWait([
              'Обратив горе и досаду в аппетит, ',
              you.get_colored_name(),
              ' отчаянно сражается с ',
              tachyon.get_colored_name(),
              ' за остатки гамбург-стейка',
            ]);
            await era.printAndWait(
              '…Приходится признать: у известного шефа выходит куда лучше, чем у тебя',
            );
          }
          break;
        case 5:
          if (love >= 75) {
            await tachyon.say_and_wait('…Верно, вот сейчас');
            await tachyon.say_and_wait('Крути!');
            era.println();
            await era.printAndWait([
              'Доверяя ',
              tachyon.get_colored_name(),
              ', ',
              you.get_colored_name(),
              ' слышит, что сказала ',
              tachyon.sex,
              ', и тут же крутит барабан',
            ]);
            await you.say_as_passer_by_and_wait(
              'Хозяин лавки',
              'Главный приз! Путёвка на горячие источники!',
            );
            era.println();
            await era.printAndWait(
              'Мужик с торговой улицы что есть силы трясёт колокольчиком',
            );
            await era.printAndWait('Объявляет, что главный приз дня разыгран');
            era.println();
            await tachyon.say_and_wait(
              'О-о… путёвка на источники. Выглядит неплохо',
            );
            era.println();
            await era.printAndWait('Срок… до апреля следующего года');
            await era.printAndWait(
              'Значит, как раз после финала URA будет в самый раз',
            );
            era.printButton('「Тахион, поедем вместе?」', 1);
            await era.input();
            await tachyon.say_and_wait(
              'Разумеется. Вернее, кто ещё, кроме меня, с тобой поедет?',
            );
            era.println();
            await era.printAndWait('До чего безжалостные слова');
            era.println();
            await tachyon.say_and_wait(
              'Шучу. Пусть эта путёвка будет наградой тебе за три года… то, что придёт после всех трудностей и травм… наш happy ending',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' прижимается вплотную к ',
              you.get_colored_name(),
              ' и говорит на самое ухо',
            ]);
            await era.printAndWait([
              'Трудно поверить, что такое может сказать ',
              tachyon.get_colored_name(),
              ', и от этих слов ',
              you.get_colored_name(),
              ' от неожиданности едва не поднимает взгляд…',
            ]);
            era.println();
            await tachyon.say_and_wait('Не двигайся');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' всё так же жмётся вплотную к ',
              you.get_colored_name(),
              ', и вместе с ',
              you.get_colored_name(),
              ' вы вдвоём стоите у лотерейного ящика и мило болтаете',
            ]);
            await era.printAndWait(
              'Странно… почему она не хочет отходить от лотерейного ящика…?',
            );
            era.println();
            await tachyon.say_and_wait(['Ну всё, идём, ', callname]);
            era.println();
            await era.printAndWait('Э');
            await era.printAndWait([
              'Тепло, всё это время льнувшее к боку, вдруг исчезает, и ',
              you.get_colored_name(),
              ' торопливо догоняет ',
              tachyon.get_colored_name(),
              ' и уходит с торговой улицы',
            ]);
            await era.printAndWait([
              'Видно только, как вышедшая с торговой улицы ',
              tachyon.get_colored_name(),
              ' вынимает что-то из левого глаза',
            ]);
            era.println();
            await tachyon.say_and_wait('Фух, наконец-то полегчало');
            era.println();
            await era.printAndWait([
              '…? ',
              tachyon.get_colored_name(),
              ', глаза…?',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' пристально всматривается в ',
              tachyon.get_colored_name(),
              ' и только теперь замечает: обычно ',
              tachyon.sex,
              ' смотрит на мир красными глазами с переливом, а сейчас один из них почему-то кажется чуть бледнее',
            ]);
            era.println();
            await you.say_and_wait('…Цветные линзы?');
            era.println();
            await era.printAndWait([
              'Трудно представить, что ',
              tachyon.get_colored_name(),
              ' из тех, кто носит такое',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'Хе-хе… а, это? Мы с Дзингу-куном разработали это вместе,',
            );
            await tachyon.say_and_wait(
              'Начнём с того, что мой препарат позволяет таким линзам видеть сквозь неживое,',
            );
            await tachyon.say_and_wait(
              'А Дзингу-кун умеет по увиденному просчитывать траекторию движения. Изначально это делалось для анализа бегунов на скачках',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' тараторит без умолку, так что ',
              you.get_colored_name(),
              ' слегка плывёт',
            ]);
            await era.printAndWait('Впрочем…');

            era.printButton(
              '「Неужели… это те самые очки, которые видят насквозь?」',
              1,
            );
            await era.input();
            await tachyon.say_and_wait(
              'Ну, вроде того… правда, из-за пары мелких изъянов,',
            );
            await tachyon.say_and_wait(
              'например, надев их, ты и шагу не сделаешь, пока не привыкнешь к изменившейся картинке,',
            );
            await tachyon.say_and_wait(
              'а при бездумном использовании мозг от избытка информации может и вовсе отключиться,',
            );
            await tachyon.say_and_wait(
              'поэтому мы с Дзингу-куном собирались это законсервировать. Хе-хе, кто бы думал, что оно пригодится вот здесь…',
            );
            era.println();
            await era.printAndWait('Пригодится…?');
            await era.printAndWait('Видеть насквозь + анализ траектории…');
            await era.printAndWait(
              'Двигаться нельзя, поэтому стояла прямо перед лотерейным ящиком…',
            );
            await you.say_and_wait('А');
            era.printButton('「Тот розыгрыш!」', 1);
            era.printButton('「Тахион, ты…」', 2);
            await era.input();
            await tachyon.say_and_wait('Тс-с');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              ' подносит руку к губам и делает знак молчать',
            ]);
            era.println();
            await tachyon.say_and_wait('Я же говорила? Это мой тебе подарок');
            era.println();
            await tachyon.say_and_wait('Не боги и не какая-то незримая удача');
            await tachyon.say_and_wait([
              'Это я, ',
              tachyon.get_colored_name(),
              ', дарю своему любимому человеку новогодний подарок',
            ]);
            await tachyon.say_and_wait([
              'С Новым годом, ',
              you.get_colored_actual_name(),
              '-кун',
            ]);
            era.println();
            await era.printAndWait(
              'Раньше, когда речь заходила о Новом годе, в голове всплывало множество незабываемых воспоминаний',
            );
            await era.printAndWait(
              'Вроде посиделок у очага, семьи в сборе, новогоднего ужина или скучных праздничных передач по телевизору',
            );
            await era.printAndWait(
              'Но с сегодняшнего дня при слове о Новом годе первым в голове будет всплывать только одно',
            );
            await era.printAndWait([
              'Под разгорающимися фонарями, с улыбкой удавшейся хитрости, как у кошки, стащившей рыбу, — ',
              tachyon.sex,
            ]);
            era.println();
            await era.printAndWait('И вкус того поцелуя');
            await era.printAndWait([
              'Вкус того поцелуя был сладким, слаще, чем чай, который заваривает ',
              tachyon.get_colored_name(),
              '.',
            ]);
          } else {
            await you.say_as_passer_by_and_wait(
              'Хозяин лавки',
              'Главный приз! Путёвка на горячие источники!',
            );
            era.println();
            await era.printAndWait(
              'Мужик с торговой улицы что есть силы трясёт колокольчиком',
            );
            await era.printAndWait('Объявляет, что главный приз дня разыгран');
            era.println();
            await era.printAndWait('Выпал главный приз!');
            await era.printAndWait('Да ещё и путёвка на источники на двоих');
            era.println();
            await tachyon.say_and_wait(
              'О-о… путёвка на источники. Выглядит неплохо',
            );
            era.println();
            await era.printAndWait('Срок… до апреля следующего года');
            await era.printAndWait(
              'Значит, как раз после финала URA будет в самый раз',
            );
            era.println();
            if (love >= 50) {
              era.printButton('「Тахион, поедем вместе!」', 1);
              await era.input();
              await tachyon.say_and_wait('Хм-м… вместе?');
              await tachyon.say_and_wait([
                callname,
                ', ты меня приглашаешь, уже понимая, в каких отношениях обычно состоят те, кто 『едет вместе на источники』?',
              ]);
              era.println();
              await era.printAndWait(
                'Те, кто обычно ездит вместе на источники…',
              );
              era.printButton('Супруги', 1);
              era.printButton('Влюблённые', 2);
              era.printButton(
                `「…Обычные ${tachyon.uma_sex_title} с тренером разве и так не ездят?」`,
                3,
              );
              switch (await era.input()) {
                case 1:
                  await era.printAndWait('Вообще говоря… молодожёны');
                  await era.printAndWait(
                    'В свадебное путешествие ведь часто ездят на источники',
                  );
                  await you.say_and_wait('…Я и Тахион, молодожёны…?', true);
                  break;
                case 2:
                  await era.printAndWait('Наверное… влюблённые');
                  await era.printAndWait(
                    'Если отношения не настолько близкие, вдвоём на источники обычно не ездят',
                  );
                  await you.say_and_wait('Я и Тахион… влюблённые?', true);
                  break;
                case 3:
                  await era.printAndWait([
                    '…Нет, обычные ',
                    tachyon.uma_sex_title,
                    ' с тренером разве не ездят туда сплошь и рядом?',
                  ]);
                  await era.printAndWait([
                    'Каждый апрель множество старших ездит со своими подопечными ',
                    tachyon.uma_sex_title,
                    '… и, похоже, все они выигрывают путёвки на торговой улице. Прямо чудеса',
                  ]);
                  await era.printAndWait(
                    'Но всё-таки… ехать на источники только вдвоём, это ведь немного странно…?',
                  );
                  era.println();
                  await tachyon.say_and_wait([
                    'Тогда в каких отношениях ты хочешь быть со мной к тому времени? ',
                    callname,
                    '… Апрель следующего года. Хе-хе, есть чего ждать',
                  ]);
                  era.println();
                  await you.say_and_wait(
                    'Апрель следующего года, твои отношения с Тахион…',
                    true,
                  );
              }
            } else if (relation >= 225) {
              await tachyon.say_and_wait(
                'М-м… вместе? Как площадка для опытов место и правда неплохое',
              );
              await tachyon.say_and_wait(
                'Гостиница при источниках, это ведь то самое место, где любое происшествие, даже смерть, дело обычное',
              );
              await tachyon.say_and_wait(
                'В таком случае пара безвредных опытов вреда точно не принесёт…',
              );
              era.printButton('「Не в этом дело」', 1);
              await era.input();
              await era.printAndWait(
                'Не как площадка для опытов или исследований',
              );
              await era.printAndWait(
                'А как отдых для двоих после трёх лет бега в одной связке',
              );
              era.printButton(
                '「Без тренировок, без опытов, просто отдых… нельзя?」',
                1,
              );
              await era.input();
              await tachyon.say_and_wait('…Апрель следующего года');
              await tachyon.say_and_wait(
                'Хе-хе, тогда пусть это будет наградой свинке',
              );
              await tachyon.say_and_wait(
                'В апреле следующего года, когда наша мечта дойдёт до точки… если к тому времени ты всё ещё будешь рядом со мной, поедем вместе',
              );
              era.printButton('「Ага!」', 1);
              await era.input();
              await tachyon.say_and_wait('Но раз уж награда обещана…');
              await tachyon.say_and_wait(
                'то весь оставшийся год тебе придётся как следует стараться,',
              );
              await tachyon.say_and_wait([
                'Послушно принимать опыты, каждый день готовить мне еду, и ещё, когда ',
                call_25,
                ' соберётся сбежать, ловить и тащить обратно, чтобы ',
                tachyon.sex,
                ' попала ко мне на опыты…',
              ]);
              era.println();
              await era.printAndWait(
                'Погоди, погоди! Последнее же явно невыполнимо!',
              );
              era.println();
              await era.printAndWait([
                'За смехом и шутками вы возвращаетесь в академию Трейсен',
              ]);
              await era.printAndWait('Апрель следующего года… есть чего ждать');
            } else {
              await era.printAndWait([
                'Впрочем… ',
                tachyon.get_colored_name(),
                ' вообще согласится поехать с тобой?',
              ]);
              era.println();
              await tachyon.say_and_wait(
                'Поездка на источники после финала URA… звучит неплохо',
              );
              era.println();
              await era.printAndWait('О? Ты так легко согласилась?');
              await era.printAndWait(
                'А я-то думал(а), откажешься, мол, слишком хлопотно',
              );
              era.println();
              await tachyon.say_and_wait(
                'Гостиница при источниках, это ведь то самое место, где любое происшествие, даже смерть, дело обычное. В таком случае пара безвредных опытов вреда точно не принесёт…',
              );
              era.println();
              await era.printAndWait('…Может, вернём путёвку прямо сейчас?');
            }
          }
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'День святого Валентина';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      if (love >= 75) {
        await tachyon.say_and_wait([
          'На, ',
          callname,
          ', валентиновский шоколад',
        ]);
        era.println();
        await era.printAndWait([
          'Слышишь, как в кабинет тренера врывается ',
          tachyon.get_colored_name(),
          ' и бросает это как ни в чём не бывало, — и ',
          you.get_colored_name(),
          ' наконец соображает: сегодня же день святого Валентина',
        ]);
        await era.printAndWait([
          'Целый день на тренировках у ',
          tachyon.get_colored_name(),
          ' крутился(ась) и час забыл(а)',
        ]);
        era.println();
        await you.say_and_wait('Впрочем… шоколад от Тахион…', true);
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь, как ',
          tachyon.get_colored_name(),
          ' из-за спины достаёт сердце-коробку: внутри в ячейках маленькие шоколадки',
        ]);
        await era.printAndWait('Там внутри, часом, не…');
        era.println();
        await tachyon.say_and_wait(
          'Н-н? Что за лицо. Думаешь, я туда дрянь подмешала?',
        );
        era.printButton('Кивнуть', 1);
        era.printButton('「Разве нет?」', 2);
        await era.input();
        await tachyon.say_and_wait('…Жестоко сказано. Хотя и не возразить');
        await tachyon.say_and_wait(
          'Но сегодня… день всё-таки особый, такую гадость я не выкину',
        );
        await tachyon.say_and_wait('Не веришь — я первую откушу?');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь, как ',
          tachyon.get_colored_name(),
          ' медленно проталкивает шоколад в рот',
        ]);
        await era.printAndWait(
          'Шоколад, зажатый передними зубами, — и вишнёвые губы чуть раскрываются',
        );
        await era.printAndWait('Раз укус, два');
        await era.printAndWait([
          'Пальцы проталкивают — шоколад тает у ',
          tachyon.get_colored_name(),
          ' во рту',
        ]);
        era.println();
        await era.printAndWait('Так… может, и вправду можно есть спокойно');
        await era.printAndWait([
          you.get_colored_name(),
          ' тянешься к шоколаду на столе',
        ]);
        await era.printAndWait('Однако');
        era.printButton('「…?」', 1);
        await era.input();
        await era.printAndWait(
          'Коробку в тот же миг, как рука потянулась, у тебя из пальцев выхватывают',
        );
        await era.printAndWait([
          'И как раз когда ',
          you.get_colored_name(),
          ' недоумевает',
        ]);
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait('Безоружные губы атакованы');
        await era.printAndWait(
          'Ловкий язык вскрывает зубы — и внутрь льётся сладкая липкая жижа',
        );
        await era.printAndWait(
          'Плотно прижатый, упёртый язык становится мостом к той, кто навалилась, — и густая, густая жидкость течёт вниз',
        );
        await era.printAndWait('Сладко, сладко');
        await era.printAndWait([
          'Шоколад — точно под вкус ',
          tachyon.get_colored_name(),
          ' — тает во рту',
        ]);
        await era.printAndWait([
          'Для ',
          you.get_colored_name(),
          ' вкус должен быть слишком сладким, но под языком ',
          tachyon.get_colored_name(),
          ' мешается — и ты вдруг привыкаешь',
        ]);
        await era.printAndWait([
          'Будто тело перестраивают, подгоняют под то, что ',
          tachyon.get_colored_name(),
          ' любит',
        ]);
        await era.printAndWait('…Нет, «подгоняют» — слово, пожалуй, не то');
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          ', шоколада ещё полно, знаешь❤️',
        ]);
        era.println();
        await era.printAndWait(
          'Смотришь в глаза напротив: в них вожделение и звериный голод',
        );
        await era.printAndWait(
          'Ах… 「приготовленный」 ингредиент вот-вот съедят',
        );
      } else if (love >= 50) {
        await tachyon.say_and_wait([
          'Ох, ',
          callname,
          ', с днём святого Валентина!',
        ]);
        era.println();
        await era.printAndWait([
          'Ясное утро — и тишину ломает дверь настежь: за спиной огромный мешок, это ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait('…Странно, сегодня вроде не Рождество');
        era.println();
        await tachyon.say_and_wait([
          'Н-н? Это? От других ',
          tachyon.uma_sex_title,
          ' подарки, вот?',
        ]);
        await tachyon.say_and_wait(
          'Ну и… сколько ни говорила, что не надо. Чем такая дрянь, лучше бы сами легли на опыт — вот тогда бы я обрадовалась…',
        );
        era.println();
        await era.printAndWait([
          'Так ',
          tachyon.get_colored_name(),
          '… настолько всеобщая любимица?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' — в груди вдруг вспыхивает тонкая нитка ревности',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Не об этом. Короче, ',
          callname,
          ' бери уже мой шоколад!',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' роется в сумке, перебирает плитки: размер чуть разный, по сути одна и та же',
        ]);
        await era.printAndWait('Неужели… просто сбагривает чужой шоколад?');
        await era.printAndWait([
          'С ',
          tachyon.get_colored_name(),
          ' вы ещё не так близки, а всё равно лезет: с тобой иначе, тебя должны выделить',
        ]);
        era.printButton('「Это… шоколад из вежливости?」', 1);
        await era.input();
        await era.printAndWait(
          'Как наставник такое спрашивать вообще не следует',
        );
        await era.printAndWait('Но… всё-таки');
        await era.printAndWait([
          'всё равно хочешь знать, что думает ',
          tachyon.get_colored_name(),
          ' на самом деле',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          'Услышав слова ',
          you.get_colored_name(),
          ', ',
          tachyon.get_colored_name(),
          ' останавливает руку в мешке',
        ]);
        await era.printAndWait([
          'Поднимает голову и смотрит прямо на ',
          you.get_colored_name(),
          ', в глаза',
        ]);
        await era.printAndWait([
          'Алые зрачки такие красивые, будто читают ',
          you.get_colored_name(),
          ' насквозь',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Ох, и что эта фраза значит, ',
          callname,
          '?',
        ]);
        await tachyon.say_and_wait('Если скажу — из вежливости, тогда что?');
        await tachyon.say_and_wait(['Или ты надеешься… на какой шоколад?']);
        era.printButton('「Хочу, чтобы Тахион дала специально」', 1);
        era.printButton('「Хочу шоколад, который Тахион дала только мне」', 2);
        await era.input();
        await era.printAndWait(
          'В конце так и не решаешься сказать те два слова',
        );
        await era.printAndWait([
          'Как можно — ты тренер, и спрашивать свою ',
          tachyon.uma_sex_title,
          ', это ли 「настоящая любовь」',
        ]);
        era.println();
        await tachyon.say_and_wait('Тогда — держи');
        era.println();
        await era.printAndWait(
          'Наконец с самого дна мешка достаёт крохотную радужную обёртку — такую не спутаешь',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' суёт шоколад в маленький карман на груди',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'На, дорогая подопытная, в благодарность за год… и за то, что сверх благодарности❤',
        );
        await tachyon.say_and_wait('Так что будь добр(а) — вынь сам(а)');
        era.println();
        if (era.get('exp:0:性爱次数') === era.get('exp:0:睡奸次数')) {
          await era.printAndWait([
            'Видишь, как ',
            tachyon.get_colored_name(),
            ' нарочно выставляет грудь',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' дрожащей рукой тянешься',
          ]);
          await era.printAndWait(
            'Осторожно, не задев грудь, вынимаешь шоколад',
          );
        } else {
          await era.printAndWait([
            'Видишь, как ',
            tachyon.get_colored_name(),
            ' нарочно выставляет грудь',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' протягиваешь руку без церемоний и забираешь шоколад',
          ]);
          await era.printAndWait([
            'По пути задел(а) то мясо, от которого ',
            tachyon.uma_sex_title,
            ' пискнула?',
          ]);
          await era.printAndWait(
            'Наверное, показалось: с чего бы полке для шоколада голос подавать',
          );
        }
        era.println();
        await era.printAndWait([
          'Сняв обёртку, ',
          you.get_colored_name(),
          ' кладёт шоколад в рот',
        ]);
        await era.printAndWait('Стоит положить на язык — и шоколад сразу тает');
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait('Свинина, лук, соус…');
        await era.printAndWait([
          'Совершенно не шоколадный вкус заливает ',
          you.get_colored_name(),
          ' рот',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '? Что с лицом?']);
        await tachyon.say_and_wait(
          'Ну же, ну же, какой эффект?… Снаружи не видно — значит, внутри что-то садится?…',
        );
        await era.printAndWait([
          'Атмосфера только что была двусмысленной — и вдруг ',
          tachyon.get_colored_name(),
          ' возбуждённо спрашивает ',
          you.get_colored_name(),
          ', какова реакция на шоколад',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '? Неужели не оценишь шоколад, который я полдня в лаборатории мешала?',
        ]);
        era.println();
        await era.printAndWait('…Ну и тип');
      } else if (relation > 225) {
        await tachyon.say_and_wait(['Ха-ха-ха! ', callname, '!']);
        era.println();
        await era.printAndWait([
          'С весёлым хохотом в кабинет тренера врывается та, у кого за спиной огромный мешок, — ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait(
          ' Merry Christmas? Happy New Year? Короче какой-то праздник, где можно пихать людям еду, да? Быстрее-быстрее, бери подарок!',
        );
        era.printButton('「…Это про день святого Валентина?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'Нн… неважно. Короче, сегодня можно на законных основаниях пихать людям еду, да?',
        );
        era.println();
        await era.printAndWait('…Так объяснять вроде и не врёт?');
        await era.printAndWait([
          'Но стоит вспомнить, что это ',
          tachyon.get_colored_name(),
          '……',
        ]);
        era.printButton('「…Что ты туда подмешала」', 1);
        era.printButton('「…Скольким уже раздала」', 2);
        await era.input();
        await tachyon.say_and_wait(
          'Это неважно! Бери уже, мой валентиновский подарок!',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' роется в сумке, вытаскивает особенно здоровенную плитку и, не спросив у ',
          you.get_colored_name(),
          ' разрешения, суёт. ',
          you.get_colored_name(),
          ' уже с шоколадом в руке',
        ]);
        await era.printAndWait([
          'Судя по тому, как ',
          tachyon.sex,
          ' ловко это делает, по дороге уже многим раздала',
        ]);
        await era.printAndWait(
          '…Завтра придётся извиняться по всем адресам, но сначала пережить этот раунд',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' боязливо откусываешь шоколад',
        ]);
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait(
          'Светиться, менять форму, отрастить две головы, крылья из спины, растечься в жижу…',
        );
        await era.printAndWait('И все эти метаморфозы… не случились');
        await era.printAndWait(
          'Если уж говорить — наверное, может, возможно, это просто обычный шоколад',
        );
        await era.printAndWait([
          'Но для ',
          tachyon.get_colored_name(),
          ' это и есть штатное 「нормально」',
        ]);
        await era.printAndWait('А вот шоколад для нормальных людей — это уже…');
        era.printButton('Почему… на вкус как кацудон!?', 1);
        await era.input();
        await era.printAndWait('Свинина, лук, соус…');
        await era.printAndWait([
          'Совершенно не шоколадный вкус заливает ',
          you.get_colored_name(),
          ' рот',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '? Что с лицом?']);
        await tachyon.say_and_wait(
          'Ну же, ну же, какой эффект?… Снаружи не видно — значит, внутри что-то садится?…',
        );
        era.println();
        await era.printAndWait(
          'Эта… даже сама не знает, какой эффект, и пихает людям',
        );
        await era.printAndWait([
          'В другой день ладно, но этот, когда парочки везде слащавятся, ',
          tachyon.get_colored_name(),
          ' вот так убивает…',
        ]);
        await era.printAndWait([
          'Странно, почему вдруг кажется, что ',
          tachyon.get_colored_name(),
          ' права',
        ]);
        await era.printAndWait([
          '…В общем, ',
          tachyon.get_colored_name(),
          ' всё равно заслуживает урок',
        ]);
        era.printButton('「Вроде эффекта нет」', 1);
        era.printButton('「Тахион тоже попробуй」', 2);
        await era.input();
        await era.printAndWait([
          'Не дав ',
          tachyon.get_colored_name(),
          ' открыть рот, ',
          you.get_colored_name(),
          ' уже пихает надкушенный шоколад. ',
          tachyon.get_colored_name(),
          ' с полным ртом',
        ]);
        era.println();
        await tachyon.say_and_wait('Нн!? Гуу!?');
        era.println();
        await era.printAndWait([
          'Застигнутая врасплох ',
          tachyon.get_colored_name(),
          ' — рот забит шоколадом',
        ]);
        await era.printAndWait([
          'Собралась что-то сказать — и ',
          tachyon.sex,
          ' невольно проглатывает шоколад',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Погоди, ты что творишь! ',
          callname,
          '!?',
        ]);
        await tachyon.say_and_wait('Уэ… это что за вкус!?');
        await tachyon.say_and_wait([
          'Какой странный вкус!! Почему у шоколада вкус кацудона!',
        ]);
        era.println();
        await era.printAndWait([
          'Завтра, скорее всего, отомстят жестоко, но сейчас, глядя на ',
          tachyon.get_colored_name(),
          ' — на это изумление и омерзение на лице',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' всё равно ловишь злорадство',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' и ',
          tachyon.get_colored_name(),
          ' — шумный Валентинов день позади',
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          '! Ха-ха-ха, с днём святого Валентина!',
        ]);
        era.printButton('「…Тахион?」', 1);
        await era.input();
        await era.printAndWait([
          'Смотришь на такую возбуждённую ',
          tachyon.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' невольно настораживается',
        ]);
        await era.printAndWait([
          'Причина проста: обычно холодная ',
          tachyon.get_colored_name(),
          ' сегодня вдруг на подъёме',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Н-н? ',
          callname,
          '? Что такое, не поздравишь меня? Или… я тебе не нравлюсь… гуу…',
        ]);
        await tachyon.say_and_wait('Уу… нн… голова… кружится…');
        era.println();
        await era.printAndWait([
          'Странно, сегодняшняя ',
          tachyon.get_colored_name(),
          '… какая-то не такая',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' внимательно смотришь в лицо ',
          tachyon.get_colored_name(),
          ': румянец и поволока — списал(а) на холод или на восторг — сразу ',
          you.get_colored_name(),
          ' это замечает',
        ]);
        era.printButton('「…Тахион, ты пила?」', 1);
        await era.input();
        await tachyon.say_and_wait('Нн… вовсе нет…');
        await tachyon.say_and_wait(
          'Просто… просто… нечаянно выпила немного… смесь этанола…',
        );
        era.println();
        await era.printAndWait('Смесь этанола… так это же вино!?');
        await era.printAndWait([
          'Недаром у ',
          tachyon.get_colored_name(),
          ' настроение такое кривое…',
        ]);
        await era.printAndWait('Короче, сегодня тренировать уже не выйдет');
        await era.printAndWait([
          'Лучше пусть ',
          tachyon.sex,
          ' сначала как следует отдохнёт',
        ]);
        era.println();
        await era.printAndWait([
          'Но отдыхать явно не собирается ',
          tachyon.get_colored_name(),
          ': уворачивается от руки ',
          you.get_colored_name(),
          ' и ускользает',
        ]);
        await era.printAndWait(
          'Пошарила по груди и из склянки, что всегда прячет во внутреннем кармане белого халата, едва выудила нечто, обёрнутое лабораторным фильтром',
        );
        await era.printAndWait(
          'Разворачиваешь — внутри радужная плитка шоколада',
        );
        era.println();
        await tachyon.say_and_wait(['Нн… да… точно… ', callname, '…?']);
        await tachyon.say_and_wait('Ва… Валентинов… шоколад…');
        era.drawLine();
        await era.printAndWait(
          'Такой подозрительный валентиновский подарок видишь впервые',
        );
        await era.printAndWait('И правда съесть такой сомнительный шоколад?');
        era.printButton('「Это… из чего?」', 1);
        await era.input();
        await tachyon.say_and_wait('Из… чего? Нн… забыла…');
        await tachyon.say_and_wait(
          'Вроде… вроде… какао… молоко… сахар… соевый соус… лук… сырая свинина?',
        );
        era.println();
        await era.printAndWait(
          'Последнее вообще не из тех вещей, что кладут в шоколад!?',
        );
        await era.printAndWait(
          'Впрочем… хоть яда вроде не клала, и на том спасибо?',
        );
        await era.printAndWait('Вкус, конечно, будет странный');
        era.println();
        await tachyon.say_and_wait('По… почему не ешь…');
        await tachyon.say_and_wait([
          'Ешь же… ',
          callname,
          '… Меня что… не уважаешь…',
        ]);
        era.println();
        await era.printAndWait(
          'С чего вдруг тон, как у дядьки, что наливает!?',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' видит: ',
          you.get_colored_name(),
          ' всё тянет и не берёт — и сама хватает шоколад',
        ]);
        await era.printAndWait('И потом… зажимает зубами');
        era.println();
        await tachyon.say_and_wait(
          'Нн… таг можн кушать, да (так можно съесть, да)',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' легонько зажимает шоколад зубами',
        ]);
        await era.printAndWait([
          'Вишнёвые губы чуть раскрываются, кивок на ',
          you.get_colored_name(),
          ' — кусай с другой стороны',
        ]);
        await era.printAndWait('…Э?');
        era.println();
        await tachyon.say_and_wait(
          'Хи-хи… таг мжет плучитца поцелув (так, глядишь, поцеловать выйдет)',
        );
        era.println();
        await era.printAndWait('…Вот она, сила вина?');
        await era.printAndWait([
          'Та, что обычно не давала тебе доброго лица, ',
          tachyon.get_colored_name(),
          ', вдруг такая мягкая, такая томная',
        ]);
        await era.printAndWait([
          'Невольно ',
          you.get_colored_name(),
          ' подаётся вперёд и кусает шоколад',
        ]);
        era.println();
        await era.printAndWait('Близко, близко');
        await era.printAndWait([
          'Так близко, что чувствуешь дыхание ',
          tachyon.get_colored_name(),
          ' у губ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь на ',
          tachyon.get_colored_name(),
          ' — в глаза',
        ]);
        await era.printAndWait(
          'Те глаза, что гипнотизируют — и сейчас слегка пьяно заволокло',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' кусаешь по чуть-чуть, боясь: кончится шоколад — и этот миг исчезнет',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' тоже медленно подаётся вперёд, так близко, что две пары губ почти касаются… нет, а может, уже коснулись?',
        ]);
        await era.printAndWait('Однако… шоколад всего такого размера');
        await era.printAndWait(
          'То ли температура, то ли кто-то первым оборвал эту хрупкую связку',
        );
        await era.printAndWait([
          'Шоколад тает у вас во ртах, рвётся и оседает у обоих на языке',
        ]);
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait('…Не яд');
        await era.printAndWait([
          'Сколько раз ',
          tachyon.get_colored_name(),
          ' заставляла тебя глотать зелья — ',
          you.get_colored_name(),
          ' смело ставит диагноз: яда нет',
        ]);
        await era.printAndWait('Но этот вкус… этот вкус…');
        era.printButton('「Почему… свинина с рисом…?」', 1);
        await era.input();
        await era.printAndWait(
          'Хотя после тех несусветных ингредиентов в конце уже было предчувствие',
        );
        await era.printAndWait('Но вкус всё равно не лезет в голову');
        await era.printAndWait('Скорее — как из этого вообще сделали шоколад…');
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь на ',
          tachyon.get_colored_name(),
          ', ',
          tachyon.get_colored_name(),
          ' всё молчит',
        ]);
        await era.printAndWait('Неужели… что-то не так…');
        era.println();
        await tachyon.say_and_wait('…Пф');
        await tachyon.say_and_wait(
          'Ха-ха-ха-ха! Это что за вкус! Слишком странно!',
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' вдруг хохочет']);
        await era.printAndWait('Неужели тут шутка, которой ты не знаешь?');
        await era.printAndWait([you.get_colored_name(), ' подумал(а) секунду']);
        await era.printAndWait('Шоколад со вкусом кацудона');
        await era.printAndWait('…Если вдуматься, и правда забавно');
        era.println();
        await era.printAndWait([
          'Невольно ',
          you.get_colored_name(),
          ' тоже улыбается',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('zzz… нн… фью…');
        era.println();
        await era.printAndWait('Ну и… нахулиганила — и сама уснула');
        await era.printAndWait([
          'Неужели ',
          tachyon.get_colored_name(),
          ' и правда может стать таким скверным пьяницей…?',
        ]);
        era.println();
        await tachyon.say_and_wait('Мм… свинка… сп… фью…');
        era.println();
        await era.printAndWait('………Неужели');
        await era.printAndWait(
          'застеснялась и не может сказать вслух, поэтому…',
        );
        await era.printAndWait([
          'Нет, о чём это я, ',
          tachyon.get_colored_name(),
          ' скорее всего и правда случайность… да?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' вытирает ',
          tachyon.get_colored_name(),
          ' слюну с уголка губ',
        ]);
        await era.printAndWait([
          'Ладно… когда ',
          tachyon.sex,
          ' проснётся, надо будет спросить у неё самой. Пусть ',
          tachyon.sex,
          ' и объяснит. Надеюсь, ',
          tachyon.sex,
          ' хотя бы знает, что класть в шоколад, а что нет',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Короткий отдых';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} plan_b 是否进入 Plan B
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      plan_b,
      prix_lat,
      arim_kin,
    ) => {
      const ret = [];
      await tachyon.say_and_wait('Летние сборы, а дальше…');
      if (plan_b) {
        await tachyon.say_and_wait(['и следующий шаг… ', prix_lat, '.']);
        await tachyon.say_and_wait(
          'Да, цель — вершина мира… хе-хе, лучше и не придумать',
        );
      } else {
        era.println();
        await tachyon.say_and_wait([
          'и следующий шаг… ',
          arim_kin,
          ' в конце года.',
        ]);
        await tachyon.say_and_wait(
          'Да, закрыть теорию самым влиятельным забегом… хе-хе, лучше и не придумать',
        );
      }
      era.printButton('「Но перед этим…」', 1);
      era.printButton('「сначала как следует насладимся」', 2);
      await era.input();
      await era.printAndWait('Солнце, пляж, бикини');
      await era.printAndWait([
        'и ',
        tachyon.get_colored_name(),
        ' в купальнике',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — да, в купальнике',
      ]);
      era.println();
      if (love >= 50 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          'Только смотреть… хватит? Не хочется самому потрогать?',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' наклоняешься, смотришь ',
          you.get_colored_name(),
          ' в глаза и ждёт, пока кто-то сделает шаг',
        ]);
        era.printButton('Протянуть руку', 1);
        era.printButton('Отказать', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            you.get_colored_name(),
            ' не удерживается и тянется к ',
            tachyon.get_colored_name(),
            ' груди: две жалкие полоски ткани не держат эти плоды',
          ]);
          era.println();
          await tachyon.say_and_wait('Мм…❤');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' низко стонет, но в зрачках почти ничего не меняется',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' напрягаешься: техника слабая?',
          ]);
          era.println();
          await era.printAndWait(
            'Как ни старайся — всё равно скажет жать сильнее',
          );
          await era.printAndWait([
            'В конце концов силой человека насытить ',
            tachyon.uma_sex_title,
            ' трудно…',
          ]);
          await era.printAndWait([
            'Тут вдруг замечаешь: под купальником два бугорка, которых раньше не было — или не так торчали',
          ]);
          await era.printAndWait([
            'Может, чит-кнопка для спидрана: сам не свой, жмёшь единственный выступ на круглой сфере',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Стой… ии, ',
            callname,
            '! туда, туда нельзя!',
          ]);
          era.println();
          await era.printAndWait([
            'Столько тобой крутили — теперь «стой» не сработает, ',
            you.get_colored_name(),
            ' не слушая, дальше мучает самый кончик',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Я… я виновата… не надо было так говорить… не надо, не жми больше… нельзя, нельзя…',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' реакция куда сильнее, чем ',
            you.get_colored_name(),
            ' думал(а)',
          ]);
          await era.printAndWait([
            'Любопытство берёт верх, ',
            you.get_colored_name(),
            ' вдруг по-детски хочет проверить, от чего ',
            tachyon.get_colored_name(),
            ' дёрнется сильнее всего',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '…хаа… хаа…']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' чуть отпускаешь пальцы; свинка думает, что опасность миновала, расслабляется…',
          ]);
          era.println();
          await tachyon.say_and_wait('ии——————к-кончаю');
          era.println();
          await era.printAndWait('Как у коровы на дойке — резко тянешь вниз');
          await era.printAndWait([
            'Всем телом бьёт дрожь, ',
            tachyon.get_colored_name(),
            ' закатывает глаза, валится вперёд и падает на ',
            you.get_colored_name(),
            '.',
          ]);
          era.println();
          await tachyon.say_and_wait('эхе-хе…');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' легко гладит ',
            tachyon.get_colored_name(),
            ' по спине — ',
            tachyon.sex,
            ' ждёт, пока судорога всего тела стихнет',
          ]);
          era.printButton(
            '「Ну и слабак: только соски помял — и уже кончила?」',
            1,
          );
          era.printButton(
            `「Не скаковая ${tachyon.uma_sex_title}, а кобыла на случку — так точнее」`,
            2,
          );
          await era.input();
          await era.printAndWait([
            'Услышав от ',
            you.get_colored_name(),
            ' оскорбления, ',
            tachyon.get_colored_name(),
            ' снова вздрагивает; прижатая ',
            tachyon.sex,
            ' под ',
            you.get_colored_name(),
            ' чувствует, как тёплое ',
            tachyon.sex,
            ' течёт из промежности',
          ]);
        }
      } else if (relation >= 225 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          'Что, так засмотрелся? Хе-хе, в награду за помощь с опытом можно смотреть ещё',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' изгибается, ещё сильнее выставляя грудь',
        ]);
      } else if (relation > 0 && relation <= 225) {
        era.println();
        await tachyon.say_and_wait(
          'Хе, так любишь вещи с таким вырезом? …Нет, сопротивление воздуха меньше — скорость и правда может вырасти…',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' на полуслове снова проваливается в свои мысли',
        ]);
        await era.printAndWait([
          'Насчёт бонуса купальника к бегу… ',
          you.get_colored_name(),
          ' смотрит, во что одета ',
          tachyon.sex,
          ': кривые шорты и сандалии… ',
          you.get_colored_name(),
          ' думает: дело явно не в купальнике',
        ]);
      } else {
        await tachyon.say_and_wait(
          '…Не требую, чтобы ты, как я, ставил(а) разум выше всего, но хотя бы убери этот взгляд течной обезьяны',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  try_drug: (() => {
    const title = 'Проба зелья';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {1|2|3|4|5} effect 药物效果，1-喷火，2-灵视，3-石化，4-发情，5-发光
     * @param {boolean} do_sex 遇到发情药效是否做爱
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      effect,
      do_sex,
    ) => {
      const colors = [
        'Семь цветов',
        'тёмно-красного',
        'тёмно-оранжевого',
        'тёмно-жёлтого',
        'тёмно-зелёного',
        'тёмно-синего',
        'тёмно-индигового',
        'тёмно-фиолетового',
        'тёмно-серого',
        'тёмно-серебряного',
        'тёмно-золотого',
        'светло-красного',
        'светло-оранжевого',
        'светло-жёлтого',
        'светло-зелёного',
        'светло-синего',
        'светло-индигового',
        'светло-фиолетового',
        'светло-серого',
        'светло-серебряного',
        'светло-золотого',
      ];
      await tachyon.say_and_wait([
        'Ох, ',
        callname,
        ', как раз вовремя: вот сегодняшнее зелье',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' протягивает флакон ',
        get_random_entry(colors),
        ' зелья — ',
        you.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' без слов выпивает зелье',
      ]);
      switch (effect) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' выпиваешь зелье — и горло вдруг чешется',
          ]);
          await era.printAndWait('Хочется кашлянуть — а изо рта летят искры');
          era.println();
          await tachyon.say_and_wait(
            'Ох-ох, «дыхание дракона» работает отлично',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' радостно пишет данные опыта и не ждёт последствий: искры падают на записи рядом, ',
            tachyon.sex,
            ' даже не смотрит',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Что… пахнет палёным… мои данные опыта!!??',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' спешно спасает то, что ещё не горит, ',
            you.get_colored_name(),
            ' хочет помочь, но горло чешется невыносимо',
          ]);
          era.println();
          await tachyon.say_and_wait('Кхе-кхе!!');
          era.println();
          await era.printAndWait([
            'Пока эффект не спал, ',
            tachyon.get_colored_name(),
            ' только и делает, что носится туда-сюда, спасая записи',
          ]);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' выпиваешь зелье — и мир вдруг становится куда чётче,',
          ]);
          await era.printAndWait([
            'но ',
            you.get_colored_name(),
            ' невольно думает, не галлюциноген ли это: у ',
            you.get_colored_name(),
            ' перед глазами лезут странные вещи',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'О? Вроде есть эффект? Это зелье ясновидения: я сделала его по тому чувству «видеть другой мир», о котором говорила ',
            t_call_c,
            '.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            ' что такое сварганила?! Это уже за пределами нормальной химии!?',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Кстати, если сейчас видишь — глянь на меня',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' слышишь это и рефлекторно смотришь на ',
            tachyon.get_colored_name(),
          ]);
          await era.printAndWait([
            ' И тут же ',
            you.get_colored_name(),
            ' сознание отключается',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Вчера, когда я приставала к ',
            t_call_c,
            ', кажется, нечаянно задела, и ',
            coffee.sex,
            ' вспылила; с возвращения вчера тело такое тяжёлое…',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' видишь: какая-то тень двумя руками давит на плечи ',
            tachyon.get_colored_name(),
            '.',
          ]);
          await era.printAndWait([
            'Тень вроде замечает взгляд ',
            you.get_colored_name(),
            ' и пальцем у того, что может быть лицом, делает «тсс»',
          ]);
          await era.printAndWait([
            'Дальше ',
            you.get_colored_name(),
            ' чувствует: слова не идут',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '…странно, правда ничего? Почему тело такое тяжёлое',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' не замечает, что с ',
            you.get_colored_name(),
            ' что-то не так, договаривает себе под нос и выходит',
          ]);
          await era.printAndWait([
            'Только тогда ',
            you.get_colored_name(),
            ' наконец может вздохнуть полной грудью. Та тень… что это было…?',
          ]);
          era.println();
          await era.printAndWait([
            'Кстати, на следующий день ',
            tachyon.get_colored_name(),
            ' уже в норме; похоже, это было лишь лёгкое наказание от ',
            coffee.get_colored_name(),
            '.',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' выпиваешь зелье — и тело вдруг деревенеет',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' в ужасе понимаешь: кроме рта и головы больше ничего не движется',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Ой… хотела зелье на ударную стойкость, а вышло вроде окаменения…',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' некогда слушать, что ',
            tachyon.get_colored_name(),
            ' думает после опыта',
          ]);
          await era.printAndWait([you.get_colored_name(), ' в панике']);
          await era.printAndWait(
            'Пытаешься изо всех сил пошевелиться — ни с места',
          );
          await era.printAndWait(
            'Дальше ещё собрание по расписанию Тренировочного поля: не явишься сегодня — месяц поля не видать',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' объясняешь, насколько всё серьёзно, ',
            tachyon.get_colored_name(),
          ]);
          await era.printAndWait([tachyon.sex, ' тоже чует беду']);
          era.println();
          await tachyon.say_and_wait(
            'Как мне проверять эффект зелья, если на поле не попасть!?',
          );
          era.println();
          await era.printAndWait([
            'Короче, причина не важна: сейчас главное — доставить ',
            you.get_colored_name(),
            ' в конференц-зал',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' силой поднимает ',
            you.get_colored_name(),
            ', чтобы доставить в конференц-зал',
          ]);
          await era.printAndWait([
            'Почему-то после зелья тело ',
            you.get_colored_name(),
            ' стало особенно тяжёлым, даже ',
            tachyon.get_colored_name(),
            ' силой ',
            tachyon.uma_sex_title,
            ' хочет поднять ',
            you.get_colored_name(),
            ' — и то уйма труда',
          ]);
          await era.printAndWait([
            'Наконец с грехом пополам ',
            you.get_colored_name(),
            ' дотащен(а) до зала, и чтобы никто не заметил, что что-то не так, ',
            tachyon.get_colored_name(),
            ' сидит рядом на всём собрании',
          ]);
          era.println();
          await era.printAndWait([
            'После того дня в академии почему-то пошла сплетня про ',
            tachyon.get_colored_name(),
            ' и ',
            you.get_colored_name(),
            '.',
          ]);
          await you.say_as_passer_by_and_wait(
            `Прохожая ${tachyon.uma_sex_title}A`,
            'Говорят, на собрание понесла на руках, как принцессу',
          );
          await you.say_as_passer_by_and_wait(
            'Прохожий тренер A',
            'На собрании тоже всё время рядом, чай носит — прямо как заботливая жёнушка',
          );
          await you.say_as_passer_by_and_wait(
            `Прохожая ${tachyon.uma_sex_title}B`,
            [
              'И не скажешь, что даже ',
              tachyon.get_colored_name(),
              ' тоже влюбилась…',
            ],
          );
          era.println();
          await era.printAndWait('…с чего такая сплетня?');
          await era.printAndWait([
            'И почему после этой сплетни у ',
            tachyon.get_colored_name(),
            ' лицо будто чуть краснеет',
          ]);
          break;
        case 4:
          await era.printAndWait([
            'Зелье, ещё до того как ',
            you.get_colored_name(),
            ' выпьет, взрывается густым розовым туманом и окутывает ',
            you.get_colored_name(),
            ' и ',
            tachyon.get_colored_name(),
            '.',
          ]);
          era.println();
          await tachyon.say_and_wait('Кхе-кхе! Что это!?');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' качаешь головой: не знаешь. Да и откуда ',
            you.get_colored_name(),
            ' знать, если даже эффекта зелья не знает',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'Обычное же зелье бодрости… ладно, сначала откроем окна и дверь, пусть туман выветрится',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' кидается к окну открыть его и выветрить туман, однако',
          ]);
          era.println();
          await tachyon.say_and_wait('Гх, тело не слушается…!');
          era.println();
          await era.printAndWait([
            'Всё это время ',
            you.get_colored_name(),
            ' сидит на стуле и никуда не идёт — дело не в душевном запасе ',
            you.get_colored_name(),
            ',',
          ]);
          if (you.sex_code !== 1) {
            await era.printAndWait([
              'а потому что у ',
              you.get_colored_name(),
              ' киска уже залита',
            ]);
          } else {
            await era.printAndWait([
              'а потому что у ',
              you.get_colored_name(),
              ' член уже стоит колом',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            ' вспоминаешь про зелье бодрости, о котором говорила ',
            tachyon.get_colored_name(),
            ': обычно такое зелье — как раз про то самое',
          ]);
          await era.printAndWait([
            'Почему ',
            tachyon.get_colored_name(),
            ' сделала такое зелье — ',
            you.get_colored_name(),
            ' недоумевает, но сейчас не время об этом думать, потому что…',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '…тело… такое горячее…']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' смотрит на ',
            you.get_colored_name(),
            ' глазами-сердечками: во взгляде капля паники и куда больше похоти',
          ]);
          await era.printAndWait([
            'Видя, как ',
            tachyon.sex,
            ' выглядит, ',
            you.get_colored_name(),
            '……',
          ]);
          if (!do_sex) {
            era.println();
            await era.printAndWait([
              'Нельзя: ',
              tachyon.sex,
              ' — подопечная ',
              you.get_colored_name(),
              ', та ',
              tachyon.uma_sex_title,
              ', ',
              you.get_colored_name(),
              ' не должен(на) так поступать',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' спокойно говорит «нет» — и ',
              tachyon.sex,
              ', к счастью, ',
              tachyon.get_colored_name(),
              ' тоже держится относительно спокойно',
            ]);
            era.println();
            await tachyon.say_and_wait(
              'Ничего… у этого зелья эффект максимум час… если продержаться час…',
            );
            await era.printAndWait([
              'Больше ничего не сказав, ',
              you.get_colored_name(),
              ' и обмякшая на полу ',
              tachyon.sex,
              ' молча ждёте, пока время пройдёт',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' изо всех сил терпишь, но взгляд всё равно ползёт к ',
              tachyon.get_colored_name(),
              '.',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' вся в поту — ',
              you.get_colored_name(),
              ', наверное, тоже — но халат скрывает, и сквозь одежду не просвечивает то, чему светить не стоит',
            ]);
            era.println();
            await era.printAndWait([
              'И всё же дырка нашлась: халат на размер больше от пота облепил ',
              tachyon.get_colored_name(),
              ' по фигуре,',
            ]);
            if (tachyon.sex_code !== 1) {
              await era.printAndWait([
                'От округлой жопы и глубокой ложбинки между ягодицами до не слишком большой, но очень упругой груди — всё чётко встаёт у ',
                you.get_colored_name(),
                ' перед глазами',
              ]);
            }
            era.println();
            await tachyon.say_and_wait([callname, '……']);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' вроде замечает взгляд ',
              you.get_colored_name(),
              ', кричит с упрёком, но под похотью это ',
              callname,
              ' звучит томно, ',
              you.get_colored_name(),
              ' торопливо извиняется и отводит взгляд',
            ]);
            era.println();
            await era.printAndWait('Терпи, терпи, терпи');
            await era.printAndWait([
              'Наконец эффект спадает, ',
              tachyon.get_colored_name(),
              ' с трудом встаёт, бросает «на сегодня всё» и в панике сбегает из кабинета тренера…',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' трясёшь головой, надеясь вытряхнуть сегодняшнее, но ',
              tachyon.get_colored_name(),
              ' — та фигура всё ещё в голове у ',
              you.get_colored_name(),
              ', не забыть…',
            ]);
            era.println();
            await era.printAndWait([
              'Кстати, после ',
              you.get_colored_name(),
              ' спрашивает ',
              tachyon.get_colored_name(),
              ' и узнаёшь: то зелье бодрости шло в некий тайный магазин в академии,',
            ]);
            await era.printAndWait([
              'Говорят, ',
              tachyon.sex,
              ' на исследования берёт деньги в основном отсюда; побродить бы по кампусу — вдруг найдёшь…?',
            ]);
          }
          break;
        case 5:
          await era.printAndWait([
            you.get_colored_name(),
            ' выпиваешь зелье — и всё тело вдруг светится; ',
            you.get_colored_name(),
            ' пугается, но видит: ',
            tachyon.get_colored_name(),
            ' по-прежнему в восторге',
          ]);
          era.println();
          await tachyon.say_and_wait('Живее, раздевайся');
          era.println();
          await era.printAndWait(['Что она несёт!?']);
          await era.printAndWait([
            'Она извращенка!? Это новый модный маньяк Трейсен!?',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' торопливо хватаешься за одежду, но человек всё же не против силы ',
            tachyon.uma_sex_title,
            '; после трёх секунд борьбы у ',
            you.get_colored_name(),
            ' одежду рвут в клочья',
          ]);
          era.println();
          await era.printAndWait([
            'Не в силах сопротивляться, ',
            you.get_colored_name(),
            ' закрывает глаза: раз не побороть — остаётся наслаждаться. Давай, не жалей меня как нежный цветок!',
          ]);
          era.println();
          await tachyon.say_and_wait('…Вот оно что, вот оно что');
          era.println();
          await era.printAndWait([
            'Долго ждёшь — так и не дождавшись того, чего ',
            you.get_colored_name(),
            ' ждал(а), ',
            you.get_colored_name(),
            ' осторожно открывает глаза и видит: ',
            tachyon.get_colored_name(),
            ' смотрит на тело ',
            you.get_colored_name(),
            ' и бормочет, записывая что-то в тетрадь',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' переводишь взгляд на себя: тело и правда светится, но места свечения закономерны, будто…',
          ]);
          era.println();
          if (you.race > 0) {
            await tachyon.say_and_wait('Так вот как это работает…');
          } else {
            await tachyon.say_and_wait(
              `Так вот как устроено человеческое тело… но… разница с ${tachyon.uma_sex_title}…`,
            );
          }
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' слышишь бормотание ',
            tachyon.get_colored_name(),
            ' и понимаешь: это всё ещё опыт, чтобы разгадать тайны ',
            tachyon.uma_sex_title,
            '.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' невольно стыдишься своих мелких мыслей',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Ладно, на сегодня наблюдений хватит, я пойду ставить опыт, ',
            callname,
            ' одежду не забудь надеть!',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' дописав, мигом сбегает из кабинета тренера, оставляя ',
            you.get_colored_name(),
            ' в кабинете в одиночестве',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' смотришь на кучу обрывков, которые уже не одежда, и думаешь: бежать домой под покровом ночи или попросить коллегу принести ',
            you.get_colored_name(),
            ' одежду',
          ]);
      }
    };
    f.title = title;
    return f;
  })(),
  second_chance: (() => {
    const title = 'Eureka';
    /**
     * 选择重复育成速子时触发
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, love) => {
      await era.printAndWait([
        'Сегодня ',
        tachyon.get_colored_name(),
        ' вдруг влетает в комнату тренера, сияя от восторга',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '! ',
        callname,
        '! Я поняла (Eureka)… Я поняла (Eureka)!',
      ]);
      era.println();

      await era.printAndWait([
        'Услышав до странного знакомый оборот, ',
        you.get_colored_name(),
        ' настороженно смотрит на ',
        tachyon.get_colored_name(),
        ', но видит: ',
        tachyon.sex,
        ' не в одном полотенце и не похоже, чтобы выскочила прямо из ванной, — и немного успокаивается',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '! Я нашла… величайшую возможность… именно… и почему я раньше не замечала',
      ]);
      era.println();

      await era.printAndWait('О чём это она вообще');
      await era.printAndWait([
        you.get_colored_name(),
        ' растерянно смотрит на ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        'Непонятно почему, но ',
        you.get_colored_name(),
        ' вдруг чувствует что-то чужое',
      ]);
      await era.printAndWait(
        'Ведь вместе пройдено уже столько, три первых года дались нелегко',
      );
      await era.printAndWait('Они должны знать друг друга как облупленных');
      await era.printAndWait('Почему же вдруг эта необъяснимая чужесть');
      era.printButton('「Ты о чём?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'Ой, я разве не объяснила? Ну надо же… так разволновалась, что совсем забыла',
      );
      await tachyon.say_and_wait(
        'Ну, если попросту, речь о так называемых — параллельных мирах',
      );
      await tachyon.say_and_wait(
        'Если представить время длинной рекой, то в этой реке есть множество рукавов',
      );
      await tachyon.say_and_wait(
        'Почти все эти рукава крошечные, отдельной рекой им не стать',
      );
      await tachyon.say_and_wait(
        'Но… при некоторых условиях река в определённых точках даёт достаточно большой рукав — вот эти точки и есть то, что называют возможностями',
      );
      await tachyon.say_and_wait(
        'Такие рукава тоже становятся реками и текут дальше, и вот эта новая река и есть параллельный мир',
      );
      era.println();

      await era.printAndWait('Параллельные миры');
      await era.printAndWait(
        'Тема, которая то и дело всплывает и в научной фантастике, и в фэнтези',
      );
      await era.printAndWait([
        'Но кто бы мог подумать, что ',
        tachyon.get_colored_name(),
        ' в такое верит',
      ]);
      era.printButton(
        '「Но ведь, в конце концов, проверить, правда это или нет, всё равно никто не может」',
        1,
      );
      await era.input();

      await tachyon.say_and_wait('Мм… ты прав');
      await tachyon.say_and_wait(
        'Наука так или иначе требует осторожной проверки… допустим, гипотеза такая, но как всё-таки доказать, есть параллельные миры или нет…',
      );
      await tachyon.say_and_wait(
        'Как же это доказать… всё-таки нужен кто-то, кто способен перейти, кто умеет ходить между мирами и не путать при этом прежнюю память. Где бы такого взять… вот ведь морока',
      );
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' говорит, а сама то и дело поглядывает в сторону ',
        you.get_colored_name(),
        ', косится и косится',
      ]);

      era.printButton('「……」', 1);
      era.printButton('「В смысле?」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait([
          'Хе-хе… похоже, ты прекрасно понимаешь, о чём я, ',
          callname,
          '…или, может, тебя следует звать… нет, неважно. Мне всё равно, кто ты в других местах: здесь ты мой ',
          callname,
          ', и никем другим ты тут не будешь',
        ]);
      } else {
        await tachyon.say_and_wait([
          'О? Правда не знаешь… или прикидываешься? Ладно, неважно: здесь ты в любом случае мой ',
          callname,
          ', и никем другим ты тут не будешь',
        ]);
      }
      era.println();

      await tachyon.say_and_wait(
        'А всё же любопытно… какие они, Агнес Тахион из других миров, с другими возможностями… бывают ли такие, что давно перешагнули предел, или, наоборот, застряли и остановились, не дойдя до возможности…',
      );
      await tachyon.say_and_wait([
        callname,
        ', ты уж непременно всё как следует запиши. Считай это темой исследования на твою командировку',
      ]);
      era.println();

      await you.say_and_wait('…Э?', true);
      await era.printAndWait('Погоди, что происходит?');
      await era.printAndWait(
        'Почему она с самого начала говорит что-то непонятное',
      );
      await era.printAndWait([
        'Хотя ',
        tachyon.get_colored_name(),
        ' и всегда была из тех, кто говорит сама с собой, но сегодня это уже чересчур',
      ]);

      era.printButton(`「Тахион?」`, 1);
      await era.input();

      await tachyon.say_and_wait('И ещё — ой, похоже, время вышло');
      era.println();

      await era.printAndWait('Время?');
      await era.printAndWait('Какое время?');
      await era.printAndWait([
        you.get_colored_name(),
        ' оборачивается и вдруг обнаруживает, что всё исчезло',
      ]);
      await era.printAndWait('Осталась только пустота');
      await era.printAndWait(
        'В белёсом пространстве впереди — только старая деревянная дверь тёмного дерева',
      );
      await era.printAndWait([
        'Смутно помнится, будто он уже видел это: ступающая по разноцветному свету ',
        tachyon.uma_sex_title,
        ' выбегает из этой двери',
      ]);
      await era.printAndWait([
        'Обернувшись, он видит: ',
        tachyon.get_colored_name(),
        ' куда-то делась, и во всём пространстве остались лишь ',
        you.get_colored_name(),
        ' и эта дверь',
      ]);
      await era.printAndWait([
        'А в пространстве всё ещё звенит последнее, что сказала ',
        tachyon.get_colored_name(),
        '.',
      ]);
      era.println();

      if (love < 50) {
        await tachyon.say_and_wait('Только не забудь про данные опыта!');
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' — её исступлённый голос звенит у ',
          you.get_colored_name(),
          ' в ушах',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' будто наяву видит, как ',
          tachyon.sex,
          ' вся горит от своего исследования',
        ]);
      } else if (love < 90) {
        await tachyon.say_and_wait('Обязательно привези данные опыта');
        era.println();

        await era.printAndWait([
          'Услышав, что ',
          tachyon.sex,
          ' сказала напоследок, ',
          you.get_colored_name(),
          ' замирает',
        ]);
        await era.printAndWait([
          'На словах — ',
          tachyon.sex,
          ' просто помешана на данных опыта',
        ]);
        await era.printAndWait([
          'Но ',
          you.get_colored_name(),
          ' расслышал в этих словах и другое',
        ]);
        await tachyon.say_and_wait('Обязательно вернись', true);
      } else {
        await tachyon.say_and_wait([
          'Вот ведь морока… той мне, из того мира, наверняка тоже понравится ',
          callname,
          ', соперниц прибавилось',
        ]);
        era.println();

        await era.printAndWait(
          'И самым-самым последним — вот такая, будто вовсе не важная, болтовня',
        );
        await era.printAndWait(
          'А потому что… всё остальное объяснять уже не нужно',
        );
        await era.printAndWait([
          'Данные опыта? Он ей любимый — с чего бы ему не утолить любопытство, которым ',
          tachyon.sex,
          ' горит',
        ]);
        await era.printAndWait([
          'Обязательно вернись? Даже если бы ',
          tachyon.sex,
          ' и не сказала, он бы всё равно вернулся',
        ]);
        await era.printAndWait(
          'И всё это так буднично, будто он всего лишь вышел за соевым соусом',
        );
      }
      era.println();

      await era.printAndWait('Ну что ж…');
      await era.printAndWait([
        you.get_colored_name(),
        ' протягивает руку к двери',
      ]);
      await era.printAndWait([
        'Какая же встретится на этот раз ',
        tachyon.get_colored_name(),
        '?',
      ]);
      if (era.get('cflag:32:育成次数') > 1) {
        const buffer = [
          () =>
            tachyon.say_and_wait([
              'О? ',
              callname,
              ', опять отправляешься искать новые возможности?',
            ]),
          () =>
            tachyon.say_and_wait(
              'Ой, раз вернулся — живо сдавай данные опыта!',
            ),
          async () => {
            await tachyon.say_and_wait('Вот как… звучит и правда неплохо');
            await tachyon.say_and_wait('Ну, время примерно вышло, верно?');
            await tachyon.say_and_wait(['Договорим в другой раз, ', callname]);
          },
        ];
        if (love >= 75) {
          buffer.push(async () => {
            await tachyon.say_and_wait([
              'Доброе утро, ',
              callname,
              ', или, может… давно не виделись?',
            ]);
            await tachyon.say_and_wait(
              'Нет, всё-таки вот так будет лучше… с возвращением❤️',
            );
          });
        }
        await get_random_entry(buffer)();
      }
    };
    f.title = title;
    return f;
  })(),
  be_betray: (() => {
    const title = 'И больше он никогда не видел Агнес Тахион';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        'После того дня, когда он ни с того ни с сего потерял сознание там, где ',
        tachyon.get_colored_name(),
        ' ставила свои опыты.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' как тренер должен был искать себе подопечную — ту ',
        tachyon.uma_sex_title,
        ', за которую отвечает.',
      ]);
      await era.printAndWait([
        'Но никто не мог утолить то, чего жаждал ',
        you.get_colored_name(),
        ' в глубине души.',
      ]);
      await era.printAndWait([
        'Будто голос внутри твердил: не ',
        tachyon.sex,
        ', не ',
        tachyon.couple_title,
        '.',
      ]);
      await era.printAndWait([
        'Прошло немного времени, и, так и не взяв под опеку ни одной ',
        tachyon.uma_sex_title,
        ', ',
        you.get_colored_name(),
        ' вылетел из академии Трейсен.',
      ]);
      await era.printAndWait(['Но и так тоже неплохо.']);
      await era.printAndWait([you.get_colored_name(), ' думал бодро.']);
      await era.printAndWait([
        'Чем через силу подстраиваться под ту ',
        tachyon.uma_sex_title,
        ', что тебе не подходит, лучше уж вовсе не браться.',
      ]);

      era.drawLine();
      await era.printAndWait([
        'Уйдя из академии, ',
        you.get_colored_name(),
        ' открыл неподалёку от Трейсена маленький ресторанчик.',
      ]);
      await era.printAndWait([
        'Готовить он, непонятно почему, умел совсем неплохо.',
      ]);
      await era.printAndWait([
        'Что случилось с ним до потери памяти, он не знал, но наверняка был кто-то очень важный, кому он хотел готовить, — иначе так не выходит.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' с этой непонятно откуда взявшейся сноровкой быстро сделал ресторанчику имя: со всей округи Трейсена и даже из самой академии ',
        tachyon.uma_sex_title,
        ' стали захаживать к ',
        you.get_colored_name(),
        ' в заведение.',
      ]);
      await era.printAndWait([
        'Что случилось с ним до потери памяти, он не знал, но наверняка был кто-то очень важный, кому он хотел готовить, — иначе так не выходит.',
      ]);
      await era.printAndWait([
        'И, наверное, именно потому, что этого человека рядом нет, всякий раз у плиты он не чувствует никакого жара.',
      ]);
      era.println();

      await era.printAndWait(['Так и шли дни, один за другим.']);
      await era.printAndWait([
        'Сказать, что хорошо, — нет; сказать, что плохо, — тоже: не так уж он и обделён.',
      ]);
      await era.printAndWait(['Просто жил, и только.']);
      era.println();

      await you.say_as_passer_by_and_wait('Комментатор', [
        'Это ',
        tachyon.get_colored_name(),
        '! ',
        tachyon.get_colored_name(),
        ' — её первый забег после возвращения! И блистательная победа в Arima Kinen!',
      ]);

      era.drawLine();
      await era.printAndWait(['И вдруг.']);
      await era.printAndWait([
        'Та самая ',
        tachyon.uma_sex_title,
        ' прочерчивает небо, как молния.',
      ]);
      await era.printAndWait([
        'И так же, как молния, бьёт ',
        you.get_colored_name(),
        ' прямо в сердце.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ', та самая непонятная ',
        tachyon.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Та ',
        tachyon.uma_sex_title,
        ', которую он не видел с того самого прощания в лаборатории.',
      ]);
      await era.printAndWait([
        'Он всего-то включил в зале телевизор, где шёл главный сюжет конца года — Arima Kinen.',
      ]);
      await era.printAndWait([
        'И не думал, что стоит ей побежать — и он почему-то не сможет отвести глаз.',
      ]);
      await era.printAndWait([
        'И только в тот миг, когда она пересекла финиш, ',
        you.get_colored_name(),
        ' понял, что уже сам не заметил, как заплакал.',
      ]);
      era.println();

      await era.printAndWait([
        'На интервью после забега ',
        tachyon.get_colored_name(),
        ' сказала, что ',
        tachyon.sex,
        ' вернулась, чтобы найти человека — того, без кого ',
        tachyon.sex,
        ' не может обойтись, кто для неё важнее всего.',
      ]);
      await era.printAndWait([
        'Кто же это? Все вокруг только об этом и говорили.',
      ]);
      await era.printAndWait([
        'Кто же это? — спрашивал голос у ',
        you.get_colored_name(),
        ' в голове.',
      ]);
      await era.printAndWait(['Голова болит, болит, раскалывается.']);
      await era.printAndWait([
        'Если в тот миг, когда ',
        tachyon.sex,
        ' побежала, он плакал от того, что его проняло.',
      ]);
      await era.printAndWait([
        'То в тот миг, когда ',
        tachyon.sex,
        ' давала интервью и он услышал, что ',
        tachyon.sex,
        ' говорит, он плакал уже просто от боли.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — кого же она ищет?',
      ]);
      await era.printAndWait([
        'И какое, в конце концов, отношение это имеет к нему?',
      ]);
      era.println();

      await era.printAndWait([
        'Однако частица быстрее света ни ради кого не остановилась.',
      ]);
      await era.printAndWait(['Osaka Hai.']);
      await era.printAndWait(['Tenno Sho (Spring).']);
      await era.printAndWait(['Yasuda Kinen.']);
      await era.printAndWait(['Takarazuka Kinen.']);
      await era.printAndWait(['Tenno Sho (Autumn).']);
      await era.printAndWait(['Japan Cup.']);
      await era.printAndWait([
        'Каждый забег ',
        tachyon.get_colored_name(),
        ' выигрывала начисто, с огромным отрывом, тем самым бегом, от которого не оторваться.',
      ]);
      await era.printAndWait([
        'После каждого забега ',
        tachyon.sex,
        ' всякий раз выговаривалась перед камерой.',
      ]);
      await era.printAndWait(['Иногда — про будни рядом с 「тем человеком」.']);
      await era.printAndWait([
        'Иногда — про раскаяние перед 「тем человеком」.',
      ]);
      await era.printAndWait(['Иногда — про упрёки 「тому человеку」.']);
      await era.printAndWait([
        'А иногда просто говорила, говорила — и захлёбывалась слезами прямо в кадре.',
      ]);
      era.println();

      await era.printAndWait([
        'Каждый забег ',
        you.get_colored_name(),
        ' смотрел жаднее всех.',
      ]);
      await era.printAndWait([
        'После каждого забега, услышав, как ',
        tachyon.sex,
        ' даёт интервью, у ',
        you.get_colored_name(),
        ' раскалывалась голова, и эта боль заставляла ',
        you.get_colored_name(),
        ' снова клясться: в следующий раз ни за что не смотрю, ну или хотя бы пропущу интервью.',
      ]);
      await era.printAndWait(['И ни разу не вышло.']);
      await era.printAndWait(['Распирающая.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 1 / 6),
      });
      await era.printAndWait(['Схватками.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 2 / 6),
      });
      await era.printAndWait(['Тупая.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 3 / 6),
      });
      await era.printAndWait(['Накатами.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 4 / 6),
      });
      await era.printAndWait(['Колющая.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 5 / 6),
      });
      await era.printAndWait(['Разрывающая.'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 6 / 6),
      });
      await era.printAndWait([
        'И с каждой такой болью ',
        you.get_colored_name(),
        ' что-то чувствовал.',
      ]);
      await era.printAndWait(['Скоро. Уже вот-вот.']);
      await era.printAndWait([
        'Будто каждая боль слой за слоем снимала с памяти покров.',
      ]);

      era.drawLine();
      await era.printAndWait(['И наконец — последний Arima Kinen.']);
      era.println();

      await you.say_as_passer_by_and_wait('Комментатор', [
        tachyon.get_colored_name(),
        '! Второй Arima Kinen подряд и год без единого поражения! Это ',
        tachyon.get_colored_name(),
        '! Победа за ней!',
      ]);
      era.println();

      await era.printAndWait(['А-а.']);
      await era.printAndWait(['В тот миг, когда видишь этот бег.']);
      await era.printAndWait(['Будто из тела разом вытянули все силы.']);
      await era.printAndWait(['Вот оно — то, к чему ты всё это время шёл(а).']);
      await era.printAndWait([
        'Вот оно — то, к чему ты всё это время шёл(а) вместе с той, кого зовут 「',
        tachyon.sex,
        '」.',
      ]);
      await era.printAndWait(['Предел… нет, за пределом — безупречный бег.']);
      era.println();

      await era.printAndWait([
        'На экране, после гонки, начали повторять предгоночное интервью.',
      ]);
      era.println();

      await era.printAndWait(
        '(Журналист А 「После Arima Kinen вы объявите об уходе?」)',
      );
      await tachyon.used_to_say_and_wait([
        'Мм… если и так ',
        you.sex,
        ' не найдётся… тогда, думаю, пора менять способ.',
      ]);
      await tachyon.used_to_say_and_wait([
        'Дальше я ухожу с дорожки, а потом… хе-хе, я и сама не знаю… год? Десять лет? Или… всю жизнь? Всё равно. Пока не найдётся ',
        you.sex,
        ', я не сдамся.',
      ]);
      era.println();

      await era.printAndWait([tachyon.get_colored_name(), ', уходит?']);
      await era.printAndWait([
        'Уходит с дорожки, чтобы искать 「того человека」… искать 「кого」?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' — ноги сами идут, будто хочешь прямо сейчас мчаться в академию Трейсен, успеть, пока ',
        tachyon.sex,
        ' не ушла, найти её, пока ',
        tachyon.sex,
        ' там, увидеть её, пока ',
        tachyon.sex,
        ' ещё…',
      ]);
      await era.printAndWait(['И незаметно голова снова заболела.']);
      era.println();

      await era.printAndWait('???「Как больно…」', {
        color: get_gradient_color('#ffffff', tachyon.color, 0 / 8),
      });
      await era.printAndWait('???「Как страшно…」', {
        color: get_gradient_color('#ffffff', tachyon.color, 1 / 8),
      });
      await era.printAndWait('???「Спасите…」', {
        color: get_gradient_color('#ffffff', tachyon.color, 2 / 8),
      });
      await era.printAndWait('???「Спаси меня, свинка-кун!」', {
        color: get_gradient_color('#ffffff', tachyon.color, 3 / 8),
      });
      await era.printAndWait('???「Свинка-кун, ты где?」', {
        color: get_gradient_color('#ffffff', tachyon.color, 4 / 8),
      });
      await era.printAndWait('???「Свинка-кун? Не бросай меня…」', {
        color: get_gradient_color('#ffffff', tachyon.color, 5 / 8),
      });
      await era.printAndWait('???「Вернись ко мне…」', {
        color: get_gradient_color('#ffffff', tachyon.color, 6 / 8),
      });
      await era.printAndWait('???「Прошу тебя, вернись…」', {
        color: get_gradient_color('#ffffff', tachyon.color, 7 / 8),
      });
      await era.printAndWait('???「Я не могу без тебя!」', {
        color: get_gradient_color('#ffffff', tachyon.color, 8 / 8),
      });
      era.println();

      await era.printAndWait([
        { color: tachyon.color, content: 'Головная боль' },
        ' — вот её истинное лицо, и оно открылось.',
      ]);
      await era.printAndWait([
        'Бесчисленные голоса у самого уха всё плакали и выли.',
      ]);
      await era.printAndWait(['Кто это?']);
      await era.printAndWait(['Кто это плачет.']);
      await era.printAndWait(['Кто это воет.']);
      await era.printAndWait(['「Свинка-кун」… кто это?']);
      await era.printAndWait(['Шаги остановились.']);
      await era.printAndWait(['Ноги дрожат, по всему телу холод.']);
      await era.printAndWait(['Ты боишься… чего боишься?']);
      await era.printAndWait([
        'Боишься встретиться лицом к лицу с ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(['Боится узнать правду.']);
      await era.printAndWait(['Боишься узнать… что ты за человек.']);
      era.println();

      await era.printAndWait(['—————————']);
      await era.printAndWait(['——————']);
      await era.printAndWait(['—————']);
      era.println();

      await era.printAndWait([
        'В конце концов ',
        you.get_colored_name(),
        ' так и не сдвинулся(ась) с места.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' больше никогда не видел(а) ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' больше никогда не знал(а) головной боли.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = 'Остановившиеся часы';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} plan_b 是否进入 Plan B
     */
    const f = async (tachyon, you, t_call_c, plan_b) => {
      await tachyon.say_and_wait('Проснись');
      await tachyon.say_and_wait('Проснись');
      await tachyon.say_and_wait('Прошу… очнись');
      era.drawLine();
      await era.printAndWait('Кто я');
      era.println();
      await tachyon.say_and_wait('Ты… свинка-кун, мой личный тренер');
      era.println();
      await era.printAndWait('…кто ты?');
      era.println();
      await tachyon.say_and_wait([
        '…я ',
        tachyon.get_colored_name(),
        ', твоя подопечная ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait('…………');
      era.println();
      await tachyon.say_and_wait('…ты помнишь?');
      await era.printAndWait('…………');
      await tachyon.say_and_wait([
        'Не… не молчи, ты же помнишь меня? Помнишь? Здесь наша лаборатория в академии Трейсен, а там территория ',
        t_call_c,
        '…',
      ]);
      era.println();
      if (plan_b) {
        await era.printAndWait('…прости');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' качаешь головой']);
        await era.printAndWait([
          'Та ',
          tachyon.teen_sex_title,
          ' перед глазами… хоть и не ясно почему, кажется знакомой',
        ]);
        await era.printAndWait('Но сам(а) ты и правда ни капли не знаешь');
        era.println();
        await tachyon.say_and_wait(
          '…ничего, потеря памяти тоже… тоже возможность… надо только память вернуть',
        );
        era.println();
        await era.printAndWait('…возможность');
        await era.printAndWait('Это слово будто будит проблеск в жиже');
        await era.printAndWait('Однако…');
        await era.printAndWait('Проблеск всегда лишь вспыхивает и гаснет');
        era.println();
        await era.printAndWait('Неизвестно');
        await era.printAndWait(
          'Чем больше думаешь, тем больше пустых мест в голове',
        );
        await era.printAndWait('Но всё равно надо силиться вспомнить');
        await era.printAndWait(
          'Молишься нащупать тот проблеск, что только что сверкнул',
        );
        await era.printAndWait('Причина одна');
        await era.printAndWait([
          'Хоть и не знаешь ту, что перед глазами, по имени ',
          tachyon.get_colored_name(),
          ' — ',
          tachyon.teen_sex_title,
        ]);
        await era.printAndWait([
          ' но подсознание орёт: нельзя, чтобы ',
          tachyon.sex,
          ' пострадала, нельзя, чтобы ',
          tachyon.sex,
          ' грустила',
        ]);
        era.println();
        await era.printAndWait([
          'Поэтому, когда ',
          tachyon.sex,
          ' предлагает немного осмотреться и попытаться вспомнить,',
        ]);
        await era.printAndWait([you.get_colored_name(), ' не отказываешься']);
        await era.printAndWait([
          'просто идёшь следом, ',
          tachyon.sex,
          ' ведёт по кампусу (так говорит ',
          tachyon.sex,
          ')',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Свинка-кун… смотри, это Тренировочное поле, мы встретились здесь',
        );
        era.println();
        await era.printAndWait('Встретились…?');
        era.println();
        await tachyon.say_and_wait(
          'Да, хотя тогда я тебя так и не увидела по-настоящему… это ты мне сказал(а)',
        );
        era.println();
        await era.printAndWait('Вот как…');
        await era.printAndWait(
          'Значит, тогда меня наверняка заворожил бег Тахион',
        );
        era.println();
        await tachyon.say_and_wait('! …ты, ты вспомнил(а)!?');
        era.println();
        await era.printAndWait('…прости');
        await era.printAndWait(
          'Просто такое чувство… что Тахион, если побежит, будет очень красива',
        );
        era.println();
        await tachyon.say_and_wait(
          '…да, ты много раз говорил(а)… хотя я сама не вижу: обычный же бег, что в нём такого чарующего',
        );
        era.println();
        await era.printAndWait('…нет');
        await era.printAndWait(
          'У других, может, и так, но бег Тахион… чувствую, меня точно заворожит',
        );
        era.println();
        await tachyon.say_and_wait(
          '…вот как. Тогда посмотреть, как я пробегусь?',
        );
        era.println();
        await era.printAndWait('! Можно!?');
        await era.printAndWait('Но… ноги Тахион…');
        era.println();
        await tachyon.say_and_wait('…ты, ты помнишь?');
        era.println();
        await era.printAndWait('……');
        era.println();
        await era.printAndWait('Молчание — лучший ответ');
        await era.printAndWait([
          'Если сейчас ',
          tachyon.sex,
          ' услышит ложь, будто ты уже всё вспомнил(а)',
        ]);
        await era.printAndWait([tachyon.sex, ' точно обрадуется']);
        await era.printAndWait([
          'Но… так лгать, чтобы ',
          tachyon.sex,
          ' поверила — разве можно?',
        ]);
        era.println();
        await era.printAndWait('Неизвестно почему, голос в груди снова орёт');
        await era.printAndWait([
          'Пусть ',
          tachyon.sex,
          ' больше не будет обманута «снова»',
        ]);
        await era.printAndWait('Не обманывай «снова» себя');
        await era.printAndWait('…почему «снова»?');
        era.println();
        await tachyon.say_and_wait('…ничего, я пробегу круг');
        await tachyon.say_and_wait('Так, может, что-то и вспомнится');
        era.println();
        await era.printAndWait([tachyon.sex, ' пробежала круг']);
        await era.printAndWait([
          'Как ',
          you.get_colored_name(),
          ' и думал(а): бег чрезвычайно прекрасен',
        ]);
        await era.printAndWait('Но… и только');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          ' пробежав круг, собирается остановиться',
        ]);
        await era.printAndWait([
          'Но, видя всё ещё растерянный взгляд ',
          you.get_colored_name(),
          ', ',
          tachyon.sex,
          ' почему-то снова бежит',
        ]);
        await era.printAndWait([
          'Перед застывшим ',
          you.get_colored_name(),
          ', ',
          tachyon.sex,
          ' бежит круг за кругом до темноты',
        ]);
        era.println();
        await era.printAndWait('…прости');
        era.println();
        await tachyon.say_and_wait(
          'Нет, ничего… просто, просто вдруг захотелось бежать',
        );
        era.println();
        await era.printAndWait('Это ложь');
        await era.printAndWait([
          you.get_colored_name(),
          ' слышишь, но не указываешь',
        ]);
        await era.printAndWait('Как указать');
        await era.printAndWait([
          'Выдать, что ',
          tachyon.teen_sex_title,
          ' бьётся впустую — и эту печаль',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…завтра поищем снова; однажды обязательно найдём',
        );
        era.println();
        await era.printAndWait('Поэтому, даже зная, что это впустую');
        await era.printAndWait([
          you.get_colored_name(),
          ' всё равно не можешь выговорить отказ',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Свинка-кун… смотри, обычно мы ставим опыты здесь: каждый раз я варю зелье и даю тебе выпить',
        );
        era.println();
        await era.printAndWait('Ээ… так я же подопытный?');
        era.println();
        await tachyon.say_and_wait(
          'Конечно, а ты как думал(а), что значит свинка-кун',
        );
        era.println();
        await era.printAndWait('…так это и правда лабораторное животное');
        era.println();
        await tachyon.say_and_wait(
          '…так что скоро я займусь: зелье, что вернёт память… ты поможешь?',
        );
        era.println();
        await era.printAndWait('…конечно');
        era.drawLine();
        await tachyon.say_and_wait([
          'Свинка-кун… там территория ',
          t_call_c,
          ', так что осторожнее: тронешь что попало — может выйти беда…',
        ]);
        era.println();
        await era.printAndWait('Э…?');
        await era.printAndWait('…ничего не случилось');
        era.println();
        await tachyon.say_and_wait(
          'А? Быть не может… сейчас… а! Записи опыта горят!',
        );
        era.drawLine();
        await tachyon.say_and_wait(
          'Свинка-кун, ты помнишь, как заваривать чёрный чай?',
        );
        era.println();
        await era.printAndWait('Конечно, чай-то заварить сумею');
        era.println();
        await tachyon.say_and_wait('Нн… это же совсем мимо?');
        era.println();
        await era.printAndWait('Ээ?');
        era.println();
        await tachyon.say_and_wait('Чай и сахар хотя бы 1:1, иначе не то!');
        era.println();
        await era.printAndWait('Это же слишком сладко!?');
        era.drawLine();
        await era.printAndWait(
          'Тахион… кем мы были до того, как я потерял(а) память?',
        );
        era.println();
        await tachyon.say_and_wait('…что? Вдруг что-то вспомнил(а)?');
        await era.printAndWait([
          '…нет, просто по тому, как ты говоришь, кажется, это не только тренер и ',
          tachyon.uma_sex_title,
          '… или подопытный и лабораторное животное',
        ]);
        era.println();
        await tachyon.say_and_wait('…на самом деле мы любовники');
        await era.printAndWait('Правда?');
        era.println();
        await tachyon.say_and_wait([
          '…мм, мы супер-влюблённые, каждый день липнем друг к другу, так слащаво, что ',
          t_call_c,
          ' ',
          tachyon.sex,
          ' уже не выносит',
        ]);
        await era.printAndWait('…прости');
        era.println();
        await tachyon.say_and_wait('Не за что извиняться, разве нет?');
        await era.printAndWait('Если бы… я смог(ла) вспомнить');
        era.println();
        await tachyon.say_and_wait(
          '…что ты такое говоришь: не «если бы вспомнил(а)», а просто ещё не вспомнил(а)… обязательно, обязательно вспомнишь',
        );
        await era.printAndWait('…да. Спасибо, Тахион');
        era.drawLine();
        await tachyon.say_and_wait(
          'Смотри, это торговая улица… обычные приборы для опытов мы берём здесь',
        );
        era.println();
        await era.printAndWait('…слушай, Тахион');
        era.println();
        await tachyon.say_and_wait('Мм? Что?');
        era.println();
        await era.printAndWait(
          '…почему все вокруг смотрят на нас, как на призраков',
        );
        era.println();
        await tachyon.say_and_wait(
          'Да? Может, из-за моего опыта в прошлом месяце',
        );
        era.println();
        await era.printAndWait('…в прошлом месяце?');
        era.println();
        await tachyon.say_and_wait(
          'Ага, тогда опыт нечаянно выкрасил всю улицу в кроваво-красный',
        );
        era.println();
        await era.printAndWait(
          '…Тахион, ты случайно не очень опасный человек?',
        );
        era.println();
        await tachyon.say_and_wait([
          'Какая грубость, я же кристально честная юная ',
          tachyon.teen_sex_title,
          '!',
        ]);
        await tachyon.say_and_wait(
          'Просто без свинки-кун рядом превращаюсь в вышедшее из-под контроля последнее оружие Земли — и только',
        );
        era.println();
        await era.printAndWait('Страшно!');
        era.println();
        await tachyon.say_and_wait(
          '…так что больше никогда меня не покидай, хорошо?',
        );
        era.println();
        await era.printAndWait('…мм');
        era.drawLine();
        await tachyon.say_and_wait('…свинка-кун, ты… не винишь меня?');
        era.println();
        await era.printAndWait('Почему?');
        era.println();
        await tachyon.say_and_wait('Это я приковала твою жизнь сюда, если…');
        era.println();
        await era.printAndWait('…почему');
        await era.printAndWait('Это же тебе меня винить, разве нет?');
        await era.printAndWait(
          'Я без памяти… разве я достоин(на) твоей любви?',
        );
        era.println();
        await tachyon.say_and_wait('! Нет… не так!');
        await tachyon.say_and_wait(
          'Обязательно вспомнишь…! Так что, так что… не говори так…',
        );
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' и свинка-кун исходили все места, где когда-то бывали',
        ]);
        await era.printAndWait(
          'Тренировочное поле, трасса, набережная, святилище',
        );
        await era.printAndWait(
          'В конце так ничего и не вернуло память свинке-кун',
        );
        await era.printAndWait('Но они ни капли об этом не грустят');
        await era.printAndWait(
          'Потому что в этих местах они заново оставили самые прекрасные воспоминания',
        );
        era.println();
        await tachyon.say_and_wait('…тебе нравится такой конец истории?');
        era.println();
        await era.printAndWait('…мм, хорошо');
        era.println();
        await tachyon.say_and_wait('…свинка-кун');
        era.println();
        await era.printAndWait('Не надо. Просто… так — хорошо');
        await era.printAndWait('Я… сейчас умру');
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('Тахион… спасибо');
        await era.printAndWait('Жизнь вышла до невозможности короткой');
        await era.printAndWait('Но эти дни я прожил(а) счастливо');
        await era.printAndWait(
          'Даже не помня прошлого… могу с гордостью сказать',
        );
        await era.printAndWait(
          'Встретить Тахион… лучшее, что было в моей жизни',
        );
        await era.printAndWait('Поэтому — прости');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' и свинка-кун… на этом история заканчивается',
        ]);
        era.println();
        await tachyon.say_and_wait('Если ты хочешь…');
        await era.printAndWait('…прости');
        await era.printAndWait('Но я не хочу больше путаться у тебя в ногах');
        await era.printAndWait('Пусть история закончится здесь');
      } else {
        await era.printAndWait('Прости… я правда не помню');
        era.println();
        await tachyon.say_and_wait('Свин…');
        era.printButton('「— Конечно, это была ложь!」', 1);
        await era.input();
        await tachyon.say_and_wait('…э?');
        era.printButton(
          '「О чём ты думаешь, как я мог(ла) забыть Тахион?」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait('…………');

        era.printButton('「…э? Тахион?」', 1);
        await era.input();
        await era.printAndWait('Тахион вдруг замолкает и опускает голову');
        await era.printAndWait('Вдруг Тахион прижимает тебя');
        era.println();
        await tachyon.say_and_wait('Ты, гад! Ты знаешь, как я волновалась!');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          ' не поднимает головы, но по каплям на полу видно — ',
          tachyon.sex,
          ' плачет',
        ]);
        era.printButton('「Тахион?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'Не… больше так меня не обманывай, прошу, хорошо? Правда, так страшно… не хочу тебя терять…',
        );
        era.printButton('「…хорошо, прости」', 1);
        await era.input();
        await era.printAndWait('Прости');
        await era.printAndWait('Правда прости');
        await era.printAndWait([
          'Хоть и не знаешь, что случилось, ты снова солгал(а), и ',
          tachyon.sex,
          ' поверила',
        ]);
        await era.printAndWait([
          'обманул(а) — ту, что перед глазами, по имени ',
          tachyon.get_colored_name(),
          ' — незнакомая ',
          tachyon.uma_sex_title,
        ]);
        era.println();
        await tachyon.say_and_wait(' Свинка-кун… ты помнишь, что было раньше?');
        era.println();
        await era.printAndWait('Это… наверное, ответить можно');
        await era.printAndWait([you.get_colored_name(), ' качаешь головой']);
        await era.printAndWait('Честно: ничего не знаешь');
        await era.printAndWait([
          'Где это, кто та ',
          tachyon.teen_sex_title,
          ' перед тобой',
        ]);
        await era.printAndWait('Всё, решительно всё — неизвестно');
        await era.printAndWait('Но одно лежит в сердце без изменений');
        await era.printAndWait([
          '— не хочешь, чтобы ',
          tachyon.sex,
          ' страдала',
        ]);
        await era.printAndWait([
          '— не хочешь, чтобы ',
          tachyon.sex,
          ' мучилась',
        ]);
        await era.printAndWait('Ради этого можно хоть ложью прикрыть прошлое');
        era.println();
        await tachyon.say_and_wait(
          '…ничего, тогда ладно: ты сейчас очнулся(ась)… так — хорошо',
        );
        era.println();
        await era.printAndWait([
          'Похоже, ',
          tachyon.sex,
          ' не собирается объяснять',
        ]);
        await era.printAndWait('Тогда ничего не поделать');

        era.printButton('「Кстати, сейчас —」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'Свинка-кун, ты тоже устал(а), наверное, завтра поговорим',
        );
        era.println();
        await era.printAndWait([
          'Как раз хотел(а) спросить который час, когда ',
          tachyon.sex,
          ' нервно сменила тему',
        ]);
        await era.printAndWait(
          'Памяти прошлого нет, но человеческий здравый смысл на месте',
        );
        await era.printAndWait([
          'Видно по лицу: ',
          tachyon.sex,
          ' — ',
          tachyon.sex,
          ' не хочет отвечать',
        ]);
        await era.printAndWait('…тогда ладно, не спрашиваешь');
        await era.printAndWait([
          'Если от этого вопроса ',
          tachyon.sex,
          ' сделает такое испуганное лицо',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          'Ладно, свинка-кун, раз ты очнулся(ась) — первое, что надо сделать, ты знаешь?',
        );
        await you.say_as_passer_by_and_wait('свинка', 'Это…?');
        await tachyon.say_and_wait(
          'Конечно есть! Еда! Живот от голода помирает, свинка-кун, живо готовь поесть!',
        );
        await you.say_as_passer_by_and_wait('свинка', '…ладно');
        era.println();
        await you.say_as_passer_by_and_wait('свинка', 'Ну… как?');
        await tachyon.say_and_wait('…мм');
        await tachyon.say_and_wait('Угх… какая гадость…');
        await tachyon.say_and_wait(
          'Как можно так скверно готовить… свинка-кун, ты…',
        );
        await you.say_as_passer_by_and_wait('свинка', '!?');
        await tachyon.say_and_wait(
          'Наверное… тело ещё не восстановилось, всё-таки столько пролежал(а)',
        );
        await tachyon.say_and_wait(
          'На этот раз спущу, но потом живо восстановись',
        );
        await you.say_as_passer_by_and_wait('свинка', '…а-ха-ха, прости');
        era.drawLine();
        await tachyon.say_and_wait(
          'Тогда… дальше сначала на поле потренироваться',
        );
        await you.say_as_passer_by_and_wait('свинка', '…………');
        await tachyon.say_and_wait('…свинка-кун?');
        await you.say_as_passer_by_and_wait('свинка', 'А, что…');
        await tachyon.say_and_wait(
          'Ты совсем не удивлён(а)? Я, между прочим, сама пошла тренироваться, а?',
        );
        await you.say_as_passer_by_and_wait('свинка', '…э');
        await you.say_as_passer_by_and_wait(
          'свинка',
          '…я рефлекторно подумал(а), что ты снова собралась филонить',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'Тахион, ты правда собралась тренироваться!?',
        );
        await tachyon.say_and_wait('Нет, это уже перебор');
        await you.say_as_passer_by_and_wait('свинка', 'а-ха-ха… вот как');
        era.drawLine();
        await you.say_as_passer_by_and_wait('свинка', 'Торговая улица…?');
        await tachyon.say_and_wait(
          'Ага, приборов для опытов маловато, пройдись со мной',
        );
        await you.say_as_passer_by_and_wait('свинка', 'а, да, конечно');
        await tachyon.say_and_wait(
          'Свинка-кун? Ты куда? Торговая улица не в ту сторону',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          '…а, н-нет, ничего, просто вдруг вспомнил(а), что надо что-то взять',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'хотя если подумать, ничего особо важного, ахахаха',
        );
        await tachyon.say_and_wait('…странно');
        era.println();
        await tachyon.say_and_wait('хм~ хм-хм-хм');
        await you.say_as_passer_by_and_wait('свинка', '…эм, Тахион?');
        await tachyon.say_and_wait('м?');
        await you.say_as_passer_by_and_wait(
          'свинка',
          'почему… взгляды людей на торговой улице на тебя какие-то странные',
        );
        await tachyon.say_and_wait(
          '…е-есть такое? Тебе показалось, свинка-кун',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'нет, есть же, будто смотрят на какого-то опасного человека…',
        );
        await tachyon.say_and_wait('тебе показалось');
        await you.say_as_passer_by_and_wait('свинка', 'но');
        await tachyon.say_and_wait('тебе показалось');
        await you.say_as_passer_by_and_wait('свинка', '…ладно');
        era.drawLine();
        await tachyon.say_and_wait(
          '…слушай, свинка-кун, тебе бы сейчас осторожно положить то, что в руках',
        );
        await you.say_as_passer_by_and_wait('свинка', 'э… что-то не так?');
        await tachyon.say_and_wait([
          'ещё спрашиваешь! Ты забыл(а), что это вещи у ',
          t_call_c,
          '?',
        ]);
        await you.say_as_passer_by_and_wait(
          'свинка',
          'э… ну, если чуть тронуть, ничего же не будет?',
        );
        await tachyon.say_and_wait(
          'как это ничего! В прошлый раз я едва коснулась своих исследовательских материалов — и они мигом вспыхнули!',
        );
        await you.say_as_passer_by_and_wait('свинка', 'но…');
        await tachyon.say_and_wait('………');
        await you.say_as_passer_by_and_wait('свинка', '…………');
        await tachyon.say_and_wait(
          'тогда я тоже попробую… а-а-а! Горит! Скорее спасайте материалы, а-а-а!',
        );
        era.drawLine();
        await tachyon.say_and_wait('эй, эй, свинка-кун');
        await you.say_as_passer_by_and_wait('свинка', 'м? Тахион, что такое?');
        await tachyon.say_and_wait(
          'слушай, с тех пор как ты очнул(а)ся, ты со мной ни разу не нежничал(а), да?',
        );
        await you.say_as_passer_by_and_wait('свинка', '…э?');
        await tachyon.say_and_wait(
          'вот так бросить любимую и не глядеть: даже если раньше списать на то, что ты ещё не оклемал(а)ся… сейчас медосмотр без проблем, пора бы как следует понежничать, нет?',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'нет, подожди, Тахион же ещё ученица',
        );
        await tachyon.say_and_wait('ну да, и в чём проблема?');
        await you.say_as_passer_by_and_wait(
          'свинка',
          'проблема огромная!? Этика и всё такое…',
        );
        await tachyon.say_and_wait(
          '…чего вдруг так завёл(а)ся, ведь поначалу это ты так напористо лез(ла)♡',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          '…я в прошлом был(а) таким отребьем?',
        );
        await tachyon.say_and_wait('? Свинка-кун, ты сейчас что-то сказал(а)?');
        await you.say_as_passer_by_and_wait('свинка', '…нет, ничего');
        await tachyon.say_and_wait(
          'тогда давай быстрее, понежничаем как следует♡',
        );
        era.drawLine();
        await tachyon.say_and_wait(
          'ого, в этот раз бэнто вышло ничего! Свинка-кун! Наконец вернул(а)ся к прежнему уровню!',
        );
        await you.say_as_passer_by_and_wait('свинка', 'п… правда?');
        await tachyon.say_and_wait(
          'твоя отчаянная реабилитация таки дала плод!',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'да… и те книги рецептов тоже',
        );
        await tachyon.say_and_wait(
          'правда… как давно я этого не ела, такой вкус… правда, так давно…',
        );
        await you.say_as_passer_by_and_wait('свинка', '…Тахион, можно вопрос?');
        await tachyon.say_and_wait('м?');
        await you.say_as_passer_by_and_wait(
          'свинка',
          'сколько я… вообще был(а) без сознания',
        );
        await tachyon.say_and_wait('……………');
        await tachyon.say_and_wait('… лет');
        await you.say_as_passer_by_and_wait('свинка', '…………');
        await tachyon.say_and_wait('…свинка-кун?');
        await you.say_as_passer_by_and_wait(
          'свинка',
          'прости… все эти годы ты… наверное, была очень одинока',
        );
        await tachyon.say_and_wait('!');
        await you.say_as_passer_by_and_wait(
          'свинка',
          '…я уже снова здесь, уже можно, можно больше не…',
        );
        await tachyon.say_and_wait('……');
        await tachyon.say_and_wait(
          'свинка-кун… я правда… правда, чуть не сломалась…',
        );
        await tachyon.say_and_wait(
          'если бы… ты не очнул(а)ся… если бы… совсем меня забыл(а)… если бы… если бы…',
        );
        await tachyon.say_and_wait(
          'правда… так страшно… будто кошмар… кошмар, что длился много лет…',
        );
        await you.say_as_passer_by_and_wait('свинка', '……………');
        await tachyon.say_and_wait(
          'но… ты вернул(а)ся, ты всё-таки вернул(а)ся',
        );
        await tachyon.say_and_wait(
          'пообещай… в этот раз больше не оставляй меня… хорошо?',
        );
        await you.say_as_passer_by_and_wait('свинка', '…м, я больше не уйду');
        era.drawLine();
        await you.say_as_passer_by_and_wait(
          'свинка',
          'так… в тот день что же всё-таки…',
        );
        await tachyon.say_and_wait(
          '…в тот день ты был(а) на торговой улице… я лишь ненадолго отошла, и тут некто… назвался фанатом, рванул… и потом…',
        );
        await tachyon.say_and_wait('…если бы тогда я была чуть быстрее,');
        await tachyon.say_and_wait(
          'нет, если бы я всё время оставалась рядом…',
        );
        await tachyon.say_and_wait(
          'этого, этого точно не случилось бы… прости…',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'ничего… ведь сейчас уже всё в порядке, правда?',
        );
        await tachyon.say_and_wait(
          'но… столько лет твоей жизни посередине… ты не ненавидишь меня?',
        );
        await tachyon.say_and_wait(
          'если бы не я… если бы ты не взял(а) меня в подопечные… с тобой, может, этого бы вовсе не случилось',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'с чего бы мне тебя ненавидеть?',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'ведь это не Тахион виновата… и Тахион ещё изо всех сил вытащила меня обратно',
        );
        await you.say_as_passer_by_and_wait(
          'свинка',
          'благодарности не хватит, какая уж ненависть',
        );
        await tachyon.say_and_wait(
          '…ну да, это же ты, конечно, скажешь именно так',
        );
        await you.say_as_passer_by_and_wait('свинка', '? Что ты имеешь в виду');
        await tachyon.say_and_wait('нет… ничего');
        era.drawLine();
        await era.printAndWait('вот так');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' и свинка-кун следами исходили все места, где они когда-то бывали',
        ]);
        await era.printAndWait(
          'Тренировочное поле, ипподром, набережная, святилище',
        );
        await era.printAndWait(
          'чтобы снова вкусить прошлое, чтобы время, остановившееся много лет назад, снова пошло',
        );
        await era.printAndWait(
          'быть может, потерянные годы посередине не восполнить',
        );
        await era.printAndWait(
          'но они всё равно выстроили новую жизнь, что принадлежит только им',
        );
        era.println();
        await tachyon.say_and_wait('…такой конец истории тебя устраивает?');
        era.println();
        await era.printAndWait('…м, хорошо');
        era.println();
        await tachyon.say_and_wait('…свинка-кун');
        era.println();
        await era.printAndWait('не надо, достаточно… вот так');
        await era.printAndWait('я… сейчас умру');
        await tachyon.say_and_wait('…………');
        await era.printAndWait('Тахион… спасибо');
        await tachyon.say_and_wait(
          'ты же обещал(а)… больше не оставишь меня, ты обещал(а)',
        );
        era.println();
        await era.printAndWait('…прости');
        await era.printAndWait('считай, я снова тебя обманул(а)');
        await era.printAndWait('все эти дни я прожил(а) счастливо');
        await era.printAndWait('но это счастье… не моё, а「свинка-кун」');
        await era.printAndWait(
          'встретить Тахион… самое прекрасное в моей жизни',
        );
        await era.printAndWait('поэтому больше не хочу обманывать');
        await era.printAndWait('поэтому мне очень жаль');
        await era.printAndWait('поэтому прости');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' и свинка-кун — их история здесь закончится',
        ]);
        await tachyon.say_and_wait('если… ты хочешь…');
        era.println();
        await era.printAndWait('…прости');
        await era.printAndWait(
          'но я не хочу больше мешаться у тебя под ногами',
        );
        await era.printAndWait('пусть свинка-кун закончится здесь');
      }
      era.println();
      await era.printAndWait(
        'прости, Тахион, я правда очень хочу спать… можно?',
      );
      await tachyon.say_and_wait('…да, спи спокойно, я буду рядом');
      era.drawLine();
      await tachyon.print_and_wait('свинка-кун мирно закрывает глаза');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' не плачет, потому что… это уже не в первый раз',
      ]);
      era.println();
      await tachyon.print_and_wait('разлука со свинкой-кун');
      await tachyon.print_and_wait('первый раз — в тот день на торговой улице');
      await tachyon.print_and_wait('если бы сама не отошла');
      await tachyon.print_and_wait([
        'если бы силой ',
        you.sex,
        ' осталась рядом',
      ]);
      await tachyon.print_and_wait('если бы…');
      await tachyon.print_and_wait('никаких «если бы»');
      era.println();
      if (plan_b) {
        await tachyon.print_and_wait('пусть убийцу стёрли в костяной пепел');
        await tachyon.print_and_wait('пусть торговую улицу выкрасили в алое');
        await tachyon.print_and_wait([you.sex, ' так и не вернулась']);
        await tachyon.print_and_wait([
          'та алость тем более не восполнит кровь, что ',
          you.sex,
          ' потеряла из брюшной полости',
        ]);
        era.println();
        await tachyon.say_and_wait([you.sex, ' всё равно… не винит меня']);
        era.println();
        await tachyon.print_and_wait('пусть даже сама превратила в это');
        await tachyon.print_and_wait(
          'на лице свинки-кун перед глазами — следы юности',
        );
        await tachyon.print_and_wait([you.sex, ' не должна уходить здесь']);
        await tachyon.print_and_wait([you.sex, ' не должна уходить сейчас']);
        await tachyon.print_and_wait([
          'но это из-за ',
          tachyon.get_colored_name(),
        ]);
        await tachyon.print_and_wait([
          ' потому что ',
          you.sex,
          ' в неверное время, в неверном месте встретила… неверного человека',
        ]);
      } else {
        await tachyon.print_and_wait('пусть убийцу стёрли в костяной пепел');
        await tachyon.print_and_wait(
          'пусть на торговой улице сама носилась как безумная',
        );
        await tachyon.print_and_wait([you.sex, ' так и не вернулась']);
        await tachyon.print_and_wait([
          'первая помощь тем более не восполнит кровь, что ',
          you.sex,
          ' потеряла из брюшной полости',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'ведь ты уже так долго меня обманывал(а)… какая разница обмануть ещё раз…',
        );
        era.println();
        await tachyon.print_and_wait('с самого начала уже знала');
        await tachyon.print_and_wait(['это ', you.sex, ', и не ', you.sex]);
        await tachyon.print_and_wait(
          ' хотя и маскировал(а)ся изо всех сил, но ту растерянность на лице человека без памяти так просто не спрятать',
        );
        await tachyon.print_and_wait(
          'тем более… ложь после того была такой убогой',
        );
        era.println();
        await tachyon.print_and_wait([
          'но… ',
          tachyon.get_colored_name(),
          ' — плевать',
        ]);
        await tachyon.print_and_wait([
          'лишь бы это была ',
          you.sex,
          ' — и ладно',
        ]);
        await tachyon.print_and_wait(
          'лишь бы выжила, лишь бы жила дальше — и ладно',
        );
        await tachyon.print_and_wait('нет памяти? Ну и что');
        await tachyon.print_and_wait([
          'лишь бы ',
          you.sex,
          ' жила дальше, ',
          tachyon.get_colored_name(),
          ' с готовностью даст обманывать себя всю жизнь',
        ]);
        await tachyon.print_and_wait('…но');
        await tachyon.print_and_wait([
          'всё так же: даже если「в этот раз」 ',
          you.sex,
          ' обманывала меня целую жизнь',
        ]);
        await tachyon.print_and_wait([
          'всё равно не хочет в самом конце обмануть ',
          tachyon.get_colored_name(),
          ' ещё раз',
        ]);
      }
      era.println();
      await tachyon.print_and_wait('отпивает чай с края кровати');
      await tachyon.print_and_wait([
        'чай, что заварила сама, и тот, что ',
        you.sex,
        ' заваривала, — состав теоретически тот же',
      ]);
      await tachyon.print_and_wait('всё-таки сама заваривает столько лет');
      await tachyon.print_and_wait(
        'что можно было обточить, что можно было сменить, — всё доведено до лучшего',
      );
      await tachyon.print_and_wait('но вкус другой');
      await tachyon.print_and_wait(
        'не может быть тем же, никогда не будет тем же',
      );
      await tachyon.print_and_wait(
        'сегодняшний чай никогда не победит вчерашний вкус',
      );
      era.println();
      await tachyon.say_and_wait('— тогда пора начинать следующий опыт');
      era.drawLine();
      await tachyon.print_and_wait('подвал академии Трейсен');
      era.println();
      await tachyon.say_and_wait('когда я была здесь в последний раз…');
      era.println();
      await tachyon.print_and_wait('три месяца? Пять? Или…');
      await tachyon.print_and_wait(
        'сколько「в этот раз」опять провела со свинкой-кун?',
      );
      era.println();
      await tachyon.say_and_wait('неважно, уже неважно');
      era.println();
      await tachyon.print_and_wait('включает свет');
      await tachyon.print_and_wait('когда глаза понемногу привыкают к свету');
      await tachyon.print_and_wait('перед глазами — тысячи питательных капсул');
      era.println();
      await tachyon.print_and_wait([
        'ах, если бы ',
        you.sex,
        ' узнала, ',
        you.sex,
        ' никогда бы меня не простила',
      ]);
      await tachyon.print_and_wait([
        'но… ',
        you.sex,
        ' всё равно не винит меня',
      ]);
      await tachyon.print_and_wait('значит, это уже согласие');
      era.println();
      await tachyon.say_and_wait(
        'пятьдесят шестой раз: склонности памяти к восстановлению нет, тело без отклонений, срок жизни пять месяцев…',
      );
      era.println();
      await tachyon.print_and_wait([
        'план, что запустила лишь со дня, когда ',
        you.sex,
        ' ушла',
      ]);
      await tachyon.print_and_wait('уже бессчётное число раз проклинала себя');
      await tachyon.print_and_wait('почему додумалась так поздно');
      await tachyon.print_and_wait(
        'неужели пузырчатое счастье так одурманило, что забыла самое базовое для исследователя — готовиться заранее?',
      );
      await tachyon.print_and_wait('поэтому и пришла к такому концу');
      era.println();
      await tachyon.print_and_wait([
        'по капле, словно замок из песка, заново собрала его тело — ',
        you.sex,
        ' снова целый',
      ]);
      await tachyon.print_and_wait(
        'но даже если всё сложено, бесформенное заново не вылепить',
      );
      await tachyon.print_and_wait(
        'мозг, что хранит больше всего тайн тела, — память',
      );
      await tachyon.print_and_wait(
        'то, о чём с самого начала не известно, было ли вообще, — как такое перелепить',
      );
      await tachyon.print_and_wait('остаётся лишь так');
      await tachyon.print_and_wait(
        'опыт за опытом, пробуждение за пробуждением',
      );
      await tachyon.print_and_wait('раз за разом… ждать чуда');
      era.println();
      await tachyon.say_and_wait(
        'причина провала: сепсис на фоне полиорганной недостаточности… воля к жизни: нет',
      );
      era.println();
      await tachyon.print_and_wait(
        'человеческая лепка из глины, верно, век не сравняется с госпожой богиней',
      );
      await tachyon.print_and_wait([
        'поэтому каждый раз вылепленная ',
        you.sex,
        ' всегда такая',
      ]);
      await tachyon.print_and_wait(
        'самое большее — полгода, самое меньшее… две недели',
      );
      await tachyon.print_and_wait(
        'стоит сроку подойти — всегда по той или иной причине погружается в вечный сон',
      );
      await tachyon.print_and_wait('…разумеется');
      await tachyon.print_and_wait(
        'эти болезни, как ни крути, всё ещё в пределах обычного человека',
      );
      await tachyon.print_and_wait([
        'опираясь на ',
        tachyon.get_colored_name(),
        ' и её разработки',
      ]);
      await tachyon.print_and_wait(
        'продлить жизнь на три-пять лет — вообще не проблема, даже… можно дольше',
      );
      await tachyon.print_and_wait(
        'если захочет, будет первые три-пять лет, будут вторые, третьи, четвёртые — до бесконечности',
      );
      era.println();
      await tachyon.say_and_wait([you.sex, ' всё равно… не сказала']);
      era.println();
      await tachyon.print_and_wait('сколько ни повторяй');
      await tachyon.print_and_wait('как ни переделывай тело');
      await tachyon.print_and_wait([
        'в самом конце ',
        you.sex,
        ' говорит всегда почти одно и то же',
      ]);
      era.println();
      await tachyon.say_and_wait('уже конец');
      await tachyon.say_and_wait('уже довольно');
      era.println();
      await tachyon.say_and_wait('какие шутки… какие шутки!');
      await tachyon.say_and_wait(
        'кто позволил тебе самой решить, что довольно! Скажи! Скажи мне! Скажи, что хочешь жить! Скажи, что хочешь жить со мной дальше!',
      );
      await tachyon.say_and_wait(
        'нет памяти — неважно, всю жизнь искать память — неважно, скажи… почему не говоришь… почему… оставляешь меня одну…',
      );
      era.println();
      await tachyon.print_and_wait([
        'если ',
        you.sex,
        ' из ненависти — ненависти к той, из-за кого потеряла жизнь, к ',
        tachyon.get_colored_name(),
        ', и потому скорее умрёт, чем жить с ',
        tachyon.get_colored_name(),
        ' вместе — это ещё можно принять',
      ]);
      await tachyon.print_and_wait([
        'если бы так и было, тогда ',
        tachyon.get_colored_name(),
        ' без слова уйдёт, и ',
        you.sex,
        ' останется лишь при минимальном медицинском контакте',
      ]);
      await tachyon.print_and_wait([
        'если бы в самом конце была хоть капля колебания или хоть капля брезгливости к ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await tachyon.print_and_wait([
        'тогда даже если сердце остановится, сама в последний миг вытащит — ',
        you.sex,
        ' вернётся',
      ]);
      await tachyon.print_and_wait('но… за пятьдесят шесть раз');
      await tachyon.print_and_wait('такого не случилось ни разу');
      era.println();
      await tachyon.print_and_wait('не хочет быть мне обузой');
      await tachyon.print_and_wait('не хочет меня связывать');
      await tachyon.print_and_wait('пусть потеряно всё: и жизнь, и память');
      await tachyon.print_and_wait([
        'за пятьдесят шесть раз, каждый раз ',
        you.sex,
        ' до конца думала о ',
        tachyon.get_colored_name(),
        ' и её возможности',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'но у ',
        tachyon.get_colored_name(),
        ' возможность уже кончилась',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' и её время уже стоит',
      ]);
      await tachyon.print_and_wait(
        'вкус той чашки чая с той секунды уже застыл',
      );
      era.println();
      await tachyon.say_and_wait('пятьдесят седьмой раз, начать');
      era.println();
      await tachyon.print_and_wait(
        'когда капсула спускает питательный раствор, силуэт внутри выпускают наружу',
      );
      era.println();
      await tachyon.print_and_wait([
        'нельзя, чтобы ',
        you.sex,
        ' кончилась; не будет, чтобы ',
        you.sex,
        ' кончилась',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' и свинка-кун — их история должна продолжаться вечно',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'и тогда учёная, что связала прошлое и сама связана прошлым, начинает новый круг опытов',
      );
    };
    f.title = title;
    return f;
  })(),
};
