/**
 * @file 爱丽数码 - 招募
 * @author 片手虾好评发售中!
 */
const era = require('#/era-electron');

module.exports = {
  rec_start: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      const ret = [];
      await era.printAndWait(
        `Тренировочное поле, обычно служащее ${digital.uma_sex_title} местом будничных тренировок, сегодня забито тренерами: сегодня здесь не только ${digital.uma_sex_title} тренируются, а ещё здесь важное событие: отборочные скачки.`,
      );
      await era.printAndWait(
        `Одарённые ${digital.uma_sex_title} ради встречи с отличным тренером сами показывают класс: отборочные скачки для этого - выбор как нельзя лучше.`,
      );
      await era.printAndWait([
        'Как тренер ',
        you.get_colored_name(),
        ', само собой следит за несущимися ',
        digital.uma_sex_title,
        ', но в какой-то миг ',
        you.get_colored_name(),
        ' краем глаза замечает вдали розовый силуэт, прячущийся в тени трибуны.',
      ]);
      era.println();
      await you.say_and_wait(`Хм… ${digital.uma_sex_title}?`);

      await era.printAndWait(
        `\nОтборочные скачки по правилам собирают всех ${digital.uma_sex_title} ещё без тренера; те ${digital.uma_sex_title}, у кого тренер уже есть, в большинстве своём на эти третьесортные забеги и не смотрят.`,
      );
      await era.printAndWait(`${you.name} решает взглянуть поближе.`);
      await digital.say_and_wait(
        `Уфуфуфу, ноги переплелись, дыхание чуть сбилось, решимость не уступать ни пяди - и встреча, о которой только мечталось… это же слишком-слишком-слишком свяще-свяще-священно…`,
      );
      await era.printAndWait(
        `Когда ${
          you.name
        } по задней лестнице поднимается на трибуну и видит розововолосую, с огромным алым бантом, который сразу бросается в глаза, ${digital.uma_sex_title}, и сейчас ${
          digital.sex
        } высоко вскинула обе руки… болеет?`,
      );

      era.println();
      await era.printAndWait(`${you.name} делает выбор:`);
      era.printButton('(В поддержке мне нет равных по напору!)', 1);
      era.printButton(
        `「Ты же ${digital.uma_sex_title}, нет? Почему ты здесь?」`,
        2,
      );
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          `${you.name} достаёт лайтстик из рюкзака, которого не существует, и тогда…`,
        );
        await era.printAndWait(
          `ути-да, ути-тоби, маэфури - пусть ${digital.sex} словит полный набор!`,
        );
        await you.say_and_wait(`Н-хай, о-хай… уё-хай!`);
        await era.printAndWait(
          `Вымахивает лайтстик, будто колотит моти: сила идёт из ног, через поясницу в руки, через всё тело, и только так call выходит самым яростным!`,
        );
        await digital.say_and_wait(`Э? Здесь кто-то есть? Да не может быть…`);
        await era.printAndWait(
          `подаёт растерянный голос; розовая ${digital.uma_sex_title} смотрит влево, смотрит вправо, оборачивается - и видит тебя.`,
        );
        await digital.say_and_wait(
          `Ва! Концертную поддержку на скачки - вот это да! Ты! Точно без ума от ${digital.uma_sex_title} тренер, да?!`,
        );
        await era.printAndWait(
          `Ещё бы, ${you.name} - центральный тренер, один на сотню. ${you.name} с гордостью убирает лайтстик.`,
        );
        await you.say_and_wait(`Тогда вопрос: почему ты не на отборочных?`);
        await digital.say_and_wait(
          `Э? Это я? Не-не-не, я самая обычная Скаковая ${digital.uma_sex_title}${
            digital.name
          }, а не та, кому место на скаковом круге, ${digital.uma_sex_title}.`,
        );
        await era.printAndWait(
          `${digital.sex}Яростно машет руками, будто хочет сказать, что ${digital.sex} здесь совершенно не к месту.`,
        );
      } else {
        await digital.say_and_wait(
          `Ва-а-а-а, прости-прости! Ты такое увидеть не должен был, я мигом сменю точку!`,
        );
        await era.printAndWait(
          `${digital.sex}Панически машет руками и уже норовит сбежать.`,
        );
        await you.say_and_wait(`Подожди!`);
        await digital.say_and_wait(`Ии?!`);
        await you.say_and_wait(`Ты не пойдёшь на отборочные?`);
        await digital.say_and_wait(
          `Устрицы-устрицы! Я всего лишь обычная ${digital.uma_sex_title}${
            digital.name
          }, мне нельзя вот так вмешиваться и мешать ${
            digital.couple_title
          }! Диджитал довольно смотреть издалека! К таким небожительным ${digital.uma_sex_title} можно только издали!`,
        );
        await era.printAndWait(
          `Видно, как ${digital.sex} мотает головой туда-сюда, будто трещотку.`,
        );
      }
      await era.printAndWait(
        `${you.name} так и не понимает, что ${digital.sex} хочет сказать. Похоже, ${
          digital.sex
        } без ума от ${digital.uma_sex_title}, но при этом не хочет подходить к ${digital.uma_sex_title}. Да и ${
          digital.sex
        } ведь тоже ${digital.uma_sex_title}.`,
      );
      await you.say_and_wait(
        `Почему бы не выйти на отбор и не наблюдать вблизи ${digital.couple_title}?`,
      );
      await digital.say_and_wait(
        `Э? Звучит-то разумно… но я не хочу дебютировать`,
      );
      await digital.say_and_wait(
        `Если я дебютирую, я-я-я уже не смогу вблизи станить ${digital.uma_sex_title} по ту сторону!`,
      );
      await digital.say_and_wait(
        `Для меня это невыносимо: и по траве, и по грязи несущиеся ${digital.uma_sex_title} - все до одной лучшие!`,
      );
      await digital.say_and_wait(`Уо-о-о-о…`);
      await era.printAndWait(
        `${digital.sex}Хватается за голову - видно, как ей мучительно.`,
      );
      await era.printAndWait(
        `Ещё не до конца понимая, в чём ${digital.sex} застряла, ${digital.sex} похоже, тревожится, что из травы и грязи придётся выбрать лишь одно.`,
      );
      await era.printAndWait(
        `И правда, раньше не слыхивали, чтобы какая-нибудь ${digital.uma_sex_title} так красиво неслась и по газону, и по грунту… по крайней мере, на скачках Центра.`,
      );
      await digital.say_and_wait(`Так что мне пора сваливать!`);
      await era.printAndWait(
        `Почему не идёшь на отбор? Поймать своего тренера, дебютировать, оставить имя в скачках — мечта каждой ${digital.uma_sex_title}, разве нет?`,
      );
      return ret;
    };
    f.title = 'Извращенка! Да… да? (Первая часть)';
    return f;
  })(),
  rec_end: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      await era.printAndWait(
        `${you.name}  К ${digital.name} вспыхнуло любопытство, так что спустя день после отбора, ${you.name} повезло на общей тренировочной площадке выйти на ту самую — это была ${digital.sex}.`,
      );
      await digital.say_and_wait(
        `Ухэ-ухэ, это ${digital.uma_sex_title} уже бегала по этому грунту, и пронести вот это тело по земле, которую нельзя осквернить, — вот она, милость Трёх богинь…`,
      );
      await era.printAndWait(
        `Ноги с силой бьют по грунту, пыль взлетает, шаг мощный — чисто грунтовый типаж.`,
      );
      await digital.say_and_wait(
        `Яха, ${digital.uma_sex_title} -тян бегала по этому газону, это просто кайф… с таким раскладом любой забег развернётся в хороший результат, ну прямо карма~`,
      );
      await era.printAndWait(
        `Смахнула пот со лба, расхохоталась в небо, ${digital.sex} явно кайфует по полной.`,
      );
      await era.printAndWait(
        'Погодите, Диджитал только что перешла на газон?! Нет, это же не значит…',
      );
      await era.printAndWait(
        `А это значит, ${digital.sex} пашет вдвое больше, чтобы выйти на такой эффект!`,
      );
      era.println();
      await you.say_and_wait(
        `С такой мощью — и не идти на отбор? Да это талант в помойку!`,
      );
      era.println();
      await digital.say_and_wait(
        `Не-не-не, если я пойду, мозг как попкорн рванёт!`,
      );
      await digital.say_and_wait(`М-м… э! Это ещё что ты здесь?`);
      await era.printAndWait(
        `То ли ещё с прошлого раза ${digital.sex} вынесла хорошее впечатление, то ли ${digital.sex} просто захотела сказать ${you.name} всё начистоту, ${digital.sex} знаком поманила отойти поговорить.`,
      );
      era.drawLine();
      await era.printAndWait(
        `Следом ${digital.sex} завела на трибуны тренировочного поля.`,
      );
      await era.printAndWait(
        `Большинство тренеров наблюдают за ${digital.uma_sex_title} на тренировке с близкой дистанции, так что трибуны как раз почти безлюдны.`,
      );
      await era.printAndWait(
        `Руки на перила, Диджитал смотрит на тренирующихся на поле ${digital.uma_sex_title}.`,
      );
      era.println();
      await digital.say_and_wait(
        `Если честно, я бегу с фантазиями на тех, кого станю.`,
      );
      await era.printAndWait(`Диджитал это сказала и изобразила задумчивость.`);
      await you.say_and_wait(`Фантазии про стан?`);
      await digital.say_and_wait(
        `Э? Особый термин вылез? М-м, если по-простому…`,
      );
      await era.printAndWait(
        `${
          digital.sex
        }И понесло рекой — про любовь к ${digital.uma_sex_title}, как именно запала на ${digital.uma_sex_title}, и как из-за этой любви вгрызлась в учёбу до Трейсена, думала дебютировать — и тут вдруг всплыло…`,
      );
      await digital.say_and_wait(
        `Как видишь, и газон, и грунт мне оба нормально заходят, но именно потому, что оба, выбрать и не могу! Выберешь одно — второе бросишь!`,
      );
      await era.printAndWait(`Диджитал безвыходным жестом развела руками.`);
      await digital.say_and_wait(
        `У каждой ${digital.uma_sex_title} -тян своя прелесть с каждой стороны! Каждая так священна!`,
      );
      await digital.say_and_wait(
        `Вот этого я проглотить не могу! Поэтому я выбросила решимость и не выбираю ни ту, ни эту!`,
      );
      await digital.say_and_wait(`А-ха-ха-ха-ха!`);
      await era.printAndWait(
        `Руки в боки, голова вверх, ${digital.sex} самоуничижительно расхохоталась.`,
      );
      await digital.say_and_wait(
        `Ну что, теперь со мной ничего не сделаешь, да? Я вот такая безвольная Скаковая ${digital.uma_sex_title}!`,
      );
      await you.say_and_wait(`Без решимости, значит…`);
      await era.printAndWait(
        `Как тренер, ${
          you.name
        } уже видел или слышал немало грунтовых ${digital.uma_sex_title}, спринтовых ${digital.uma_sex_title}, которых гложет, что не пробиться на самые хайповые средние газонные скачки в Сияющей серии.`,
      );
      await era.printAndWait(
        `Но к финалу ${digital.couple_title} осознали: у самой скачки такой вес — ценность, которую она несёт, — что популярность рядом даже не в счёт.`,
      );
      await era.printAndWait(
        `А эта ${digital.uma_sex_title}? Та, что зовёт себя ${
          digital.name
        } — та ${digital.uma_sex_title}, мучается, что нельзя нестись сразу по газону и по грунту, но в отличие от других ${digital.uma_sex_title} как раз ${
          digital.sex
        } этим даром обладает.`,
      );
      await era.printAndWait(
        `И ещё… ${digital.sex} вложила в это вдвое больше труда.`,
      );
      await digital.say_and_wait(
        `Фу-фу-фу, язык проглотил, да? Тогда я пошла вперёд~`,
      );
      era.println();
      await you.say_and_wait(
        `Нет, другими словами, именно у тебя решимости больше всех!`,
      );
      await digital.say_and_wait(`Э? Ты это про что?`);
      await era.printAndWait(
        `Да вот же, только что: такая крохотная стать, а по грунту — полная мощь.`,
      );
      await era.printAndWait(
        `И ничуть не слабее грунта — лёгкий бег по газону.`,
      );
      await era.printAndWait(
        `Когда выбрать было никак, ${digital.sex} всё равно пахала на обе стороны до сих пор.`,
      );
      await era.printAndWait(`Именно это теперь можно обратить в силу!`);
      await you.say_and_wait(`Решимость не выбирать!`);
      await era.printAndWait(
        `Да, не выбирать — само по себе выбор, но то, что ${digital.sex} зовёт 「не выбирать」, требует двойных усилий!`,
      );
      await digital.say_and_wait('Э?');
      await you.say_and_wait(
        `Не выбирать! Больше не выбирать между травой и грязью — это же выбрать и траву, и грязь!`,
      );
      await era.printAndWait(
        `Диджитал застыла: даже хвост, что обычно вяло повисал время от времени, замер на месте.`,
      );
      await digital.say_and_wait(
        'Э? Выбрать и траву, и грязь, ты хочешь сказать...',
      );
      await you.say_and_wait(`Точно, бегун-универсал!`);
      await digital.say_and_wait('Не-не-не-не, невозможно');
      await digital.say_and_wait(
        'Бегун-универсал, какого даже в выдумках не решаются запросто вывести?!',
      );
      await era.printAndWait('Н-да, как ни крути, всё же слегка нереально...');
      await digital.say_and_wait('Ты гений?!');
      await digital.say_and_wait(
        `Я смогу и на траве наблюдать за рвущими дёрн ${digital.uma_sex_title}, и на грязи наблюдать за вздымающими пыль ${digital.uma_sex_title}?!`,
      );
      await digital.say_and_wait('Хэйя----!!!!!!!!!!!!!!!!!');
      await era.printAndWait(
        `Диджитал тараторила так быстро, что не дала ${you.name} даже опомниться, ${digital.sex} уже вопила во весь голос, вскинув руки и крутясь на месте.`,
      );
      await era.printAndWait(
        `Кажется, ${digital.sex} поняла, о чём речь, и ${digital.sex} вдруг хочет принять вызов?!`,
      );
      await digital.say_and_wait(
        `Награда за то, что день за днём служила ${digital.uma_sex_title} -тян, наконец стала пышным плодом?!`,
      );
      await digital.say_and_wait('Уя--------!');
      await digital.say_and_wait(
        'Решено! Я, Диджитал-тан, стану королём универсалов!',
      );
      await digital.say_and_wait(
        'Чтобы вплотную соприкоснуться с каждым, кого станю!',
      );
      await you.say_and_wait(`Вот это занятно. Станешь моей подопечной?`);
      await era.printAndWait(`${you.name} протягивает правую руку.`);
      await era.printAndWait(
        `Даже видя, как ${digital.sex} блистала на грязи и на траве, скачки всё же не тренировка, и ${digital.sex} — каким будет путь, это вызывает огромное любопытство.`,
      );
      await digital.say_and_wait(
        `...Сперва уточню: я лишь хочу с самой близкой дистанции станить тех, кого станю, так что не жди от меня слишком многого...`,
      );
      await era.printAndWait(`И чего это сразу в отбой...`);
      await era.printAndWait(
        `Но ${digital.sex} смотрит на редкость твёрдо, и нежная ладошка сжимает руку.`,
      );
      await era.printAndWait(
        `Пусть выглядит странновато, но ${digital.sex} непременно высечет на дорожке совсем другие искры, ${you.name} так и считает.`,
      );
    };
    f.title = 'Извращенка! Это... так? (окончание)';
    return f;
  })(),
};
