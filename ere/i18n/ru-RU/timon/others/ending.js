/**
 * @file 地文 - 结局
 * <br>注意会导致游戏结束的结局必然是坏结局！
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  loser: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        'То ли ',
        you.get_colored_name(),
        ' слишком ленился(лась), то ли подопечной не хватило таланта — победа так и осталась далеко.',
      ]);
      await era.printAndWait([
        'Сколько ни старались, ничего не вышло: школа приказала ',
        you.get_colored_name(),
        ' расторгнуть договор с подопечной и сменить регистрацию.',
      ]);
      await era.printAndWait([
        'Уволенный(ая) из‑за слишком низкой репутации, ',
        you.get_colored_name(),
        ' приходит к финалу…',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Выгнали взашей';
    return f;
  })(),
  hentai: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        you.get_colored_name(),
        ' забыл(а) о взрослой ответственности и подбивал(а) подопечную на извращения. Всё вскрылось — и даже Трейсен не смог прикрыть ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'В итоге академия предписала ',
        you.get_colored_name(),
        ' расторгнуть контракт с подопечной и перевестись.',
      ]);
      await era.printAndWait([
        'Уволенный(ая) за упавшую до дна репутацию, ',
        you.get_colored_name(),
        ' приходит к финалу…',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Позор и крах';
    return f;
  })(),
  slave_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        'Прогнивший(ая) от денег, ',
        you.get_colored_name(),
        ' ступил(а) на дорогу без выбора: отбросив гордость, занимать у собственной ученицы…',
      ]);
      await era.printAndWait(
        'Но всякий подарок судьбы втайне уже снабжён ценником.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ': долг, обрастая процентами как снежный ком, наконец перевесил то, что способен(на) вынести ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Теперь черёд ',
        you.get_colored_name(),
        ' платить по счетам…',
      ]);
      await era.printAndWait([
        'Пленник(ца) денежных уз, ',
        you.get_colored_name(),
        ' приходит к финалу…',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Раб денег';
    return f;
  })(),
  crazy_fan_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      if (era.get(`relation:${chara.id}:0`) < 0) {
        await era.printAndWait([
          'И на скачках, и на интервью ',
          you.get_colored_name(),
          ' с подопечной держались напряжённо — это видели все, и голоса, что напряжение мешает её росту, не смолкали. Академия начала терять терпение к вашей паре… но нашлись люди нетерпеливее её.',
        ]);
      } else {
        await era.printAndWait([
          'То ли ',
          you.get_colored_name(),
          ' слишком расслабился(ась), то ли не хватило дара у самой ',
          chara.uma_sex_title,
          ', но победа всё не приходила. Академия начала терять терпение к вашей паре… но нашлись люди нетерпеливее её.',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' шёл(шла) один(одна) под проливным дождём, неся медовый пирог для ',
        chara.get_colored_name(),
        ' — и вдруг сзади частый топот, а потом пронзительная боль в пояснице.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' сбили с ног, и тот, кто был сзади, бил в спину снова и снова, пока ',
        you.get_colored_name(),
        ' не перестал(а) шевелиться.',
      ]);
      await era.printAndWait(
        'По пакету с коробкой пирога яростно колотил дождь, колотил, колотил…',
      );
      await era.printAndWait('Месть разъярённого фаната — и вот финал…');
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Нападение фаната';
    return f;
  })(),
  basement_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait(
        'В Трейсене, в подвале, который не найдёт ни один детектор…',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' отчаянно рвёт верёвки на руках и ногах — только сильнее впиваются.',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' садится на край кровати, улыбается ',
        you.get_colored_name(),
        ' и нежно о нём (о ней) заботится ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        'Но в сердце ',
        you.get_colored_name(),
        ' — лишь глубокий страх неизвестного будущего…',
      ]);
      await era.printAndWait([
        'Заточённый(ая) любовью ',
        chara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' приходит к финалу…',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Тюрьма страсти';
    return f;
  })(),

  /**
   * 选择了黑暗交易之后的三阶段惩戒事件
   */

  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment1(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait(
      'Говорят, человек по‑настоящему узнаёт себя, лишь когда у него отнимают свободу.',
    );
    await you.say_as_unknown_and_wait('Ну… насколько хорошо ты себя знаешь?');
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      '… лень, гордыня',
      era.get('flag:变态行为') > 0 ? ', похоть' : '',
      '… сегодня… ты родилась заново.',
    ]);
    await you.say_as_unknown_and_wait(
      'Но скоро поймёшь… у свободы тоже есть цена.',
    );
    await you.say_as_unknown_and_wait(
      'Тюрьма пойдёт с тобой… это тело станет вечным наказанием.',
    );
    await you.say_as_unknown_and_wait(
      'Искупление начинается — если не хочешь хуже, беги изо всех сил.',
    );
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      ' Мисс ',
    ]);
    await you.say_as_unknown_and_wait(' — свобода зовёт.');
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    if (era.get('cflag:0:种族') > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        'Надеюсь, мы больше не встретимся.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' подвергся(лась) переделке!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' превратили в умамусумэ!',
        uma,
        ' по‑прежнему может набирать ',
        they,
        ', тренировать ',
        they,
        ', бегать рядом, но зарплату Трейсена больше не получает.',
      ]);
      await era.printAndWait([
        'Зато ',
        you.get_colored_name(),
        ' может тренироваться сама, участвовать в скачках и зарабатывать призы и репутацию.',
      ]);
    }
    await era.printAndWait(
      'Если репутация снова уйдёт ниже нуля — наказание будет жёстче!',
    );
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {TextContent} date
   * @param {string} uma
   * @param {string} they
   */
  async punishment2(you, date, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait('Д е к л а р а ц и я  с е к с - р а б ы н и', {
      align: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait([
      'Я, кобыла ',
      you.get_colored_actual_name(),
      ', добровольно становлюсь рабыней господ‑',
      uma,
      ', ',
    ]);
    await era.printAndWait(
      'привожу тело и душу в состояние, наиболее угодное хозяевам, навсегда отказываюсь от всех прав человека,',
    );
    await era.printAndWait(
      'и отныне принимаю любую дрессуру хозяев, подчиняюсь любому приказу и не возражаю ни в чём.',
    );
    era.setOffset(13);
    era.setWidth(5);
    era.setAlign('center');
    era.print([you.get_colored_actual_name()]);
    era.print(`<${you.name}>`);
    era.print(`<${you.name}, отпечаток соска>`);
    await era.printAndWait(`<${you.name}, отпечаток половых губ>`);
    await era.printAndWait(date);
    era.setAlign('left');
    era.setOffset(0);
    era.setWidth(24);
    era.println();
    await era.printAndWait([
      'После добровольной подписи под такой декларацией ',
      you.get_colored_name(),
      ' переделали в секс-рабыню ',
      uma,
      '!',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' по-прежнему может нанимать ',
      uma,
      ', тренировать ',
      they,
      ', бегать рядом с ',
      they,
      ', заниматься самостоятельно и выходить на скачки.',
    ]);
    await era.printAndWait([
      'Но главная обязанность ',
      you.get_colored_name(),
      ' теперь — давать ',
      they,
      ' выход похоти!',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' тело доведено до превосходной чувствительности. Оттачивай своё умение, ублажай хозяек и зарабатывай репутацию!',
    ]);
    await era.printAndWait(
      'Если репутация снова уйдёт ниже нуля — наказание будет жёстче!',
    );
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment3(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait(
      'Не думали, что ты способна пасть так низко.',
    );
    await you.say_as_unknown_and_wait(
      'В твоих руках была верёвка, чтобы выбраться со дна наверх.',
    );
    await you.say_as_unknown_and_wait('Но ты бросила спасительный трос.');
    await you.say_as_unknown_and_wait(
      'Теперь я даже подозреваю, что ты нарочно пустила всё на самотёк, чтобы уже ничего нельзя было вернуть.',
    );
    await you.say_as_unknown_and_wait(
      'Ведь мы столько раз давали тебе шанс сохранить человеческие права.',
    );
    await you.say_as_unknown_and_wait('Хотя ты, наверное, уже и не слышишь.');
    await you.say_as_unknown_and_wait([
      'Что ж, прощай навсегда, ',
      you.get_colored_actual_name(),
      '.',
    ]);
    await you.say_as_unknown_and_wait([
      {
        color: '#ff7373',
        content: 'GAME OVER',
        fontWeight: 'bold',
      },
    ]);
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    await era.printAndWait([
      'Племенная кобыла — вот и весь путь ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait(
      'Былые устремления развеяло ветром, прежние идеалы безжалостно разбиты.',
    );
    if (you.sex_code > 0) {
      await era.printAndWait([
        'Отныне обязанность ',
        you.get_colored_name(),
        ' — коротким членом ублажать благородных ',
        uma,
        ', скверной щелью принимать священное семя и рожать им отличное потомство!',
      ]);
    } else {
      await era.printAndWait([
        'Отныне обязанность ',
        you.get_colored_name(),
        ' — скверной щелью принимать священное семя и вместе с ',
        they,
        ' рожать отличное потомство!',
      ]);
    }
    await era.printAndWait([
      'Человеческие права от ',
      you.get_colored_name(),
      ' ушли далеко, но будь добра совершенствоваться как беременная шлюха.',
    ]);
    await era.printAndWait([
      'Если повезёт, может, ',
      you.get_colored_name(),
      ' ещё возвысится через детей!',
    ]);
  },
  /** @param {CharaTalk} you */
  get_basement_ending_confirm: (you) => [
    you.get_colored_name(),
    ' в подвале пришёл(ла) к финалу…',
    { isBr: true },
    'Посмотреть подвальную концовку?',
  ],
  bt_confirm_yes: 'Встретить тьму лицом',
  bt_confirm_no: 'Не-е, не хочу смотреть',
};
