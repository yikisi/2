/**
 * @file 鲁铎象征 - 爱慕
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} luna 露娜/鲁铎象征
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        'Ещё при рождении ей прочертили всю колею жизни.',
      );
      await luna.print_and_wait([
        'Луна, из семьи Симболи, скаковая ',
        luna.uma_sex_title,
        '.',
      ]);
      await luna.print_and_wait([
        'Как и бессчётные сверстники, ',
        luna.sex,
        ' должна исполнить заветную мечту семьи Симболи.',
      ]);
      await luna.print_and_wait([
        luna.couple_title,
        ' нужно вечно быть сильной, вечно вселять трепет. Проще говоря — гнаться за победой.',
      ]);
      await luna.print_and_wait(
        'Всё прочее ради победы — по желанию, не обязательно, можно выкинуть.',
      );
      await luna.print_and_wait([
        'Иными словами, ',
        luna.couple_title,
        ' тоже вольна творить любой беспредел.',
      ]);
      await luna.print_and_wait('Та тётя ушла с головой в похоть.');
      await luna.print_and_wait('Та тётка ушла с головой в выпивку.');
      await luna.print_and_wait('Та старшая сестра ушла с головой в насилие.');
      await luna.print_and_wait('Лишь бы была победа — всё это дозволено.');
      await luna.print_and_wait(
        'Поэтому, когда Луна явила жуткий потенциал, семейные тузы расцвели любезными улыбками.',
      );
      await luna.print_and_wait(
        'Однажды Луна сама явилась к ним. Им ли было её не знать.',
      );
      await luna.print_and_wait('Тузы ласково спросили: чего ты хочешь?');
      await luna.print_and_wait([
        'Луна же ответила, что ',
        luna.sex,
        ' хочет любви.',
      ]);
      await luna.print_and_wait([
        'Вскоре Луна получила бессчётные новые игрушки; ворота семьи Мэдзиро ',
        luna.sex,
        ' застала распахнутыми; бессчётные красавицы и красавцы угодничали, и ',
        luna.sex,
        ' принимала знаки внимания…',
      ]);
      await luna.print_and_wait(
        'Пусть мирские радости обступили её со всех сторон — Луна всё равно не чувствовала себя любимой.',
      );
      await luna.print_and_wait([
        luna.sex,
        ' хотелось любви не связанной выгодой, не застланной властью — чистой, от сердца, безвозмездной.',
      ]);
      await luna.print_and_wait(
        'По ночам, сидя одна на кровати, Луна сворачивалась калачиком, силясь нащупать хоть крупицу тепла.',
      );
      await luna.print_and_wait([
        'Но лунный свет лился на Луну, и ',
        luna.sex,
        ' чувствовала лишь стужу, продирающую до костей.',
      ]);
      await luna.say_and_wait('…Хоть бы кто…');
      await luna.print_and_wait([
        'Луну колотил ужас: даже вывернув себя наизнанку, вымогая у мира, ',
        luna.sex,
        ' так ничего и не сыскала.',
      ]);
      era.println();

      era.printButton('「У семьи Симболи дом что лабиринт…?」', 1);
      await era.input();
      await luna.print_and_wait('За дверью будто послышался чей-то голос.');

      era.printButton('Спросить', 1);
      await era.input();
      await you.say_and_wait('Это моя комната…?');
      await you.say_and_wait('Прости!? Я не туда попала--э? Ты чего плачешь?!');
      await you.say_and_wait('Не бойся!!! Я не злодей!!! Честно, нет!!!');
      await you.say_and_wait(
        'Всё, ребёнок орёт пуще прежнего, сопли…! Сопли мне об одежду вытерла!',
      );
      await you.say_and_wait('Эх…');
      era.println();

      await luna.print_and_wait('Это была встреча случайнее некуда.');
      await luna.print_and_wait(
        'Малышке, которой нужно было выплеснуться, опереться, согреться, попался человек, что сбился с пути.',
      );
      await luna.print_and_wait(
        'Всю ночь тот второй неуклюже утешал плачущего ребёнка.',
      );
      await luna.print_and_wait(
        'С тех пор у двоих понемногу появились общие темы.',
      );
      await luna.print_and_wait('С тех пор они постепенно стали неразлучны.');
      await luna.print_and_wait(
        'Обиженный ребёнок и человек без свершений отозвались друг другу душами.',
      );
      await luna.say_and_wait(
        'Наверное, именно с тех пор я уже не могла тебя забыть…',
      );
    };
    f.title = 'Пасмурно';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} luna 露娜/鲁铎象征
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        'Ежегодная церемония открытия учебного года. В обычной школе вступительную речь обычно держит почтенный директор.',
      );
      await luna.print_and_wait(
        'Но в академии Трасен эту роль исполняет один-единственный человек.',
      );
      await luna.print_and_wait([
        'Симболи Рудольф — президент студсовета, минуя кланяющуюся толпу, ',
        luna.sex,
        ' взошла на трибуну.',
      ]);
      await luna.print_and_wait(
        'Ученики полны ожидания, преподаватели — воодушевлены.',
      );
      await luna.print_and_wait([
        'Новый семестр: пусть японские скаковые ',
        luna.uma_sex_title,
        ' снова и снова терпят поражения — но с сегодняшнего дня люди понемногу стряхивают уныние.',
      ]);
      await luna.print_and_wait(
        'Потому что есть президент студсовета. Симболи Рудольф — лев семьи Симболи — тот самый Император, и все ликуют.',
      );
      await luna.print_and_wait([
        'Под жаром этих взглядов Луна чувствовала, как желудок скрутило, и ',
        luna.sex,
        ' едва держалась, чтоб не вырвать.',
      ]);
      await luna.print_and_wait(
        'Бессловесная пустота и страх снова будто собирались захлестнуть тело…',
      );
      await luna.print_and_wait(
        'Луна беспомощно обвела взглядом зал и вдруг увидела: кто-то встал на цыпочки и изо всех сил смотрит наверх.',
      );
      await you.say_and_wait('Давай! Луна!');
      await luna.print_and_wait([
        'Хотя было далеко, Луна всё же по губам ',
        you.get_colored_actual_name(),
        ' разглядела, что ',
        you.sex,
        ' хочет сказать.',
      ]);
      await luna.say_and_wait('--Фух.');
      await luna.say_and_wait('Господа--');
      era.drawLine();
      await luna.print_and_wait(
        'Но, может, когда случайностей слишком много, это уже судьба.',
      );
      await luna.print_and_wait(
        'На этой церемонии, что запомнили бессчётные люди, помнят, как Симболи Рудольф воодушевила всех — величественно, и всё же не без остроумия.',
      );
      await luna.print_and_wait([
        'Люди помнят, как ',
        luna.sex,
        ' улыбнулась от сердца.',
      ]);
      await luna.print_and_wait(
        'Но люди не знают: эта улыбка родилась из самого искреннего… невольного смешка.',
      );
      await luna.say_and_wait('На цыпочках, такая напряжённая… фуфу.');
      await luna.print_and_wait([
        'Даже ',
        you.get_colored_actual_name(),
        ' не знает, как надолго этот миг эта недосягаемая скаковая ',
        luna.uma_sex_title,
        ' сохранит в памяти.',
      ]);
    };
    f.title = 'инь';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} luna 露娜/鲁铎象征
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await luna.print_and_wait([
        luna.uma_sex_title,
        'С тренером она видится, по сути, лишь чуть чаще, чем с преподавателями.',
      ]);
      await luna.print_and_wait(
        'Тренировки — расписать тренировки. Скачки — расписать скачки. Кроме этого у них и встретиться-то особо негде.',
      );
      await luna.print_and_wait(
        'А у такой занятой, как Луна, — и вовсе. Именно поэтому Луна взвинчена, как никогда.',
      );
      await luna.print_and_wait(
        'Когда бумаги были доделаны, за окном уже стояла глухая ночь.',
      );
      await luna.print_and_wait(
        'Луна тащит измотанное тело по кампусу — обход.',
      );
      await luna.print_and_wait('Круг за кругом.');
      await luna.print_and_wait([
        'Наконец, ',
        luna.sex,
        ' доходит до командного домика — внутри горит свет.',
      ]);
      await luna.print_and_wait([
        luna.sex,
        'Целый день так и не показалась — и ',
        luna.sex_code === 1 ? ' младший' : 'младшая',
        ' ещё здесь?',
      ]);
      await luna.print_and_wait(
        'Луна толкает дверь. Здесь не то что в её тайном убежище — не запирают.',
      );
      await luna.print_and_wait(
        'Луна с удивлением видит: её тренер лежит на диване, книги и всякие данные раскиданы по полу.',
      );
      await luna.say_and_wait('Только ты…');
      await luna.print_and_wait('Тоже до сих пор работаешь, как я?');
      await luna.print_and_wait(
        'Уголки губ у Луны чуть ползут вверх. Сама она пашет ради академии, а тренер так старается… быть может, только ради неё.',
      );
      await luna.print_and_wait([
        'Сама не знает отчего — сердце Луны колотится так часто, ',
        luna.sex,
        ' пылает лицом.',
      ]);
      await luna.print_and_wait([
        'Словно из-за ',
        you.get_colored_actual_name(),
        ' стучит в груди.',
      ]);
      await luna.print_and_wait([
        'Луна слегка не в себе. ',
        luna.sex,
        ' крепко сжимает одежду у самой груди, ',
        luna.sex,
        ' чувствует, что к тренеру внутри будто что-то сдвинулось.',
      ]);
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        ' уже крепко спит. Здесь только ',
        you.couple_title,
        ', только ',
        you.couple_title,
        '……',
      ]);
      await luna.print_and_wait(
        'Луна задерживает дыхание, чуть откидывается назад — и полуприкрытая дверь с щелчком наглухо захлопывается.',
      );
      await luna.print_and_wait([
        'Потом ',
        luna.sex,
        ' ещё заводит руки за спину и запирает дверь.',
      ]);
      await luna.print_and_wait('— Ведь она прекрасно знает, что так нельзя.');
      await luna.print_and_wait([
        'Тяжёлой поступью Луна подходит к ',
        you.get_colored_actual_name(),
        ' в упор.',
      ]);
      await luna.print_and_wait([
        '——',
        luna.sex,
        'На плечах — долг председателя студсовета и честь семьи Симболи.',
      ]);
      await luna.print_and_wait([
        'Луна снимает обувь и садится рядом с ',
        you.get_colored_actual_name(),
        ' .',
      ]);
      await luna.print_and_wait('— Если кто-нибудь увидит, всё рухнет.');
      await luna.print_and_wait([
        'Луна склоняется и ложится в объятия ',
        you.get_colored_actual_name(),
        ' .',
      ]);
      await luna.print_and_wait([
        'Но ',
        luna.teen_sex_title,
        ' отметает саму возможность. Какое ей дело, каким будет завтра, ',
        luna.sex,
        ' хочет только сейчас.',
      ]);
      await luna.print_and_wait([
        'Свернувшись в объятиях ',
        you.get_colored_actual_name(),
        ' , Луна жадно впитывает тепло.',
      ]);
      await luna.say_and_wait(
        'Столько лет, а твой запах ни капли не изменился.',
      );
      await luna.print_and_wait(
        'Успокаивает. Отпускает. Словно шлюпка посреди океана.',
      );
      await luna.say_and_wait(
        'Я не позволю себе уйти от тебя, что бы ни случилось.',
      );
      await luna.print_and_wait([
        'Луна поворачивается и крепко обнимает ',
        you.get_colored_actual_name(),
        '.',
        luna.sex,
        ' , поднимает голову и принюхивается к губам того, кто в объятиях.',
      ]);
      await luna.say_and_wait('Так что и ты меня не оставляй… хорошо?');
      await luna.print_and_wait([
        'В объятиях ',
        you.get_colored_actual_name(),
        ' , Луна тяжело проваливается в сон.',
      ]);
      await luna.print_and_wait([
        'Редкий раз ',
        luna.sex,
        ' может без кошмаров спокойно проспать до света.',
      ]);
    };
    f.title = 'круг';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} luna 露娜/鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 露娜/鲁铎象征对玩家的称呼
     */
    const f = async (luna, you, callname) => {
      await luna.print_and_wait(
        'Луна лежит в постели и ворочается с боку на бок.',
      );
      await luna.print_and_wait(
        'Снова дома после долгой разлуки — будто ничего не переменилось. Только даже семейные тузы начинают перед ней ходить на цыпочках.',
      );
      await luna.print_and_wait([
        'Отчего всё это? Потому что сама стала сильнее? Как ',
        luna.uma_sex_title,
        ' семьи Симболи, ей стоило бы этим гордиться.',
      ]);
      await luna.print_and_wait(
        'Но Луне ни капли не радостно — наоборот, внутри будто что-то горит.',
      );
      await luna.print_and_wait([
        'Всего лишь съездить домой по обычаю, а ',
        callname,
        ' нельзя просто так взять и поехать следом.',
      ]);
      await luna.print_and_wait(
        'По знакомым коридорам Луна несколько раз едва не врезается в стену.',
      );
      await luna.print_and_wait([
        luna.sex,
        'И вдруг ловит себя: уже привыкла, что у бока кто-то стоит стеной и терпит, как она льнёт всё бессовестнее.',
      ]);
      await luna.print_and_wait('Нет…');
      await luna.print_and_wait('Нет…');
      await luna.print_and_wait('Нет…!');
      await luna.print_and_wait([
        'Луна ловит себя: всего-то из-за того, что ',
        you.get_colored_actual_name(),
        ' нет рядом, ',
        luna.sex,
        ' сразу такая потерянная, будто внутри вырвали кусок.',
      ]);
      await luna.print_and_wait(
        'Ночь опустилась, и лунный свет снова пролился в спальню — совсем как много лет назад.',
      );
      await luna.print_and_wait(
        'Тут по телу поползло ледяное ощущение; деваться некуда — Луна накрылась с головой одеялом и стала вспоминать каждую крупицу мгновений с любимой.',
      );
      await luna.print_and_wait([
        'Если ',
        you.get_colored_actual_name(),
        ' была здесь, лежала на той же кровати. Тогда…',
      ]);
      await luna.print_and_wait(
        '— Их губы не оторвались бы: сосали бы друг друга, сливались, не в силах расцепиться.',
      );
      await luna.print_and_wait(
        '— Тяжёлое дыхание снова и снова било бы ей в лицо.',
      );
      await luna.print_and_wait('— На плечах и ключицах остались бы следы.');
      if (luna.sex_code - 1) {
        await luna.print_and_wait('— Грудь мяли бы снова и снова.');
      }
      await luna.print_and_wait('— Длинные ноги гладили бы без конца.');
      await luna.print_and_wait(
        '— Обе не останавливались бы, всё требуя и требуя ещё!',
      );
      await luna.print_and_wait([
        'Тело Луны задрожало, уши бессильно обвисли, ',
        luna.sex,
        ' длинными пальцами потянулась себе между ног, и ',
        luna.sex,
        ' дёрнулась, будто током пронзило.',
      ]);
      await luna.print_and_wait([
        'Если ',
        you.get_colored_actual_name(),
        ' и вправду была здесь, ',
        luna.sex,
        ' отдалась бы, что бы ни случилось.',
      ]);
      await luna.say_and_wait([
        you.get_colored_actual_name(),
        ', скорее вернись ко мне…',
      ]);
      await luna.print_and_wait(
        'Бормоча имя любимой, Луна погрузилась в тяжёлый сон.',
      );
    };
    f.title = 'не хватает';
    return f;
  })(),
};
