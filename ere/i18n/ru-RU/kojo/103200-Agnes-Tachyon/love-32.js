/**
 * @file 爱丽速子 - 爱慕
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 * @author Matemi
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  25: (() => {
    const title = (tachyon) => [
      '「',
      tachyon.name,
      '」? 「',
      tachyon.uma_sex_title,
      'A」?',
    ];
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      callname_25,
      t_call_c,
      c_call_t,
    ) => {
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' — её лаборатория, место, из-за которого в академии вечно переполох, эти дни на удивление тиха',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Что ещё за дела, бросил любимую кобылку одну в академии, а сам укатил в командировку',
      );
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' ставит в лаборатории опыт и попутно ворчит себе под нос',
      ]);
      await coffee.print_and_wait(
        'На кого ворчит? Разумеется, на некую свинку, которую отправили в командировку и которой не будет целую неделю',
      );
      era.println();
      await tachyon.say_and_wait(
        'Бэнто мне теперь самой разогревать… такое небрежение переходит все границы',
      );
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' всё бубнит, бубнит, бубнит',
      ]);
      await coffee.print_and_wait(
        'Если бы только бубнила, это ещё можно было бы стерпеть…',
      );
      era.println();
      await tachyon.say_and_wait([
        'Тебе не кажется, что это уже самое настоящее издевательство? ',
        t_call_c,
      ]);
      await coffee.say_and_wait('…не втягивай меня в ваши воркования');
      era.println();
      await coffee.print_and_wait([
        'Когда ',
        tachyon.sex,
        ' и не думает останавливаться, да ещё и норовит втянуть в разговор её саму, у той, с кем ',
        tachyon.sex,
        ' делит пустой класс, у ',
        coffee.get_colored_name(),
        ', терпение наконец кончается',
      ]);
      await coffee.say_and_wait([
        c_call_t,
        '… эти слова ты повторила уже трижды',
      ]);
      await tachyon.say_and_wait('Всего-то три раза, не так уж и много');
      await coffee.say_and_wait([
        callname_25,
        ' уехал только сегодня, это ведь первый день командировки…',
      ]);
      await tachyon.say_and_wait('…и всё равно, три раза — это не так уж…');
      await coffee.say_and_wait([
        you.sex,
        ' ушёл из академии меньше получаса назад',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' вздыхает: как же вышло, что эта одноклассница, у которой раньше опыт был превыше всего, после сближения с тренером стала совсем другой',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait(
          '…хотя, если подумать, понять можно — это же он',
        );
      } else {
        await coffee.print_and_wait(
          'Была холодная, без всякой этики, чужая жизнь ей и в грош… кажется, я хватила лишку',
        );
      }
      await coffee.print_and_wait([
        'Глядя, как ',
        tachyon.sex,
        ' всё бубнит и бубнит, ',
        coffee.get_colored_name(),
        ' вдруг чувствует, как поднимается раздражение, и невольно выпаливает',
      ]);
      era.println();
      await coffee.say_and_wait([
        'И вообще… ',
        callname_25,
        ' не собственность одной только ',
        c_call_t,
        '.',
      ]);
      await tachyon.say_and_wait('…ты это к чему?');
      await coffee.say_and_wait([
        'К чему я — ',
        c_call_t,
        ' и сама прекрасно знает, разве нет? ',
        callname_25,
        ' сказал «командировка» — а сказал, куда едет и зачем?',
      ]);
      await coffee.say_and_wait([
        '…Нет. С начала и до конца ',
        you.sex,
        ' сказал мне только, что уезжает в командировку',
      ]);
      era.println();
      await coffee.print_and_wait([
        'Ещё бы. Командировка — это одно название: на самом деле его срочно выдернули разбирать утечку из опыта, которую ',
        c_call_t,
        ' устроила на днях. А про такое тот, кто слишком печётся о чувствах ',
        tachyon.uma_sex_title,
        ', то есть ',
        callname,
        ', конечно, ничего не скажет — пусть ',
        tachyon.sex,
        ' узнаёт сама',
      ]);
      if (era.get('cflag:25:招募状态') === 1) {
        await coffee.print_and_wait('…аж завидно становится');
      }
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' думает про себя',
      ]);
      era.println();
      await coffee.say_and_wait([
        'Тогда… а нет ли и такой возможности, что ',
        callname_25,
        ' вовсе не в командировке, а… на свидании с кем-то?',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        'В самом деле… ',
        c_call_t,
        ' до того хлопотная, что будь я на месте ',
        callname_25,
        ', давно бы уже была сыта по горло',
      ]);
      await tachyon.say_and_wait([
        '… ',
        you.sex,
        ' говорил, что ',
        you.sex,
        ' покорён моим бегом и моими возможностями',
      ]);
      await coffee.say_and_wait('Хе-хе…');
      await tachyon.say_and_wait('Что тут смешного');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' отпивает кофе, наслаждаясь тем, как сейчас держится ',
        tachyon.get_colored_name(),
        ' — вот этим её видом',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait(
          'Заставить ту, что в последнее время без конца воркует со «своим» тренером, сделать такое встревоженное лицо… плохо дело, это затягивает',
        );
      } else {
        await coffee.print_and_wait(
          'Заставить ту, что в последнее время без конца воркует с тренером, сделать такое встревоженное лицо… плохо дело, это затягивает',
        );
      }
      era.println();
      await coffee.say_and_wait([
        'Иначе говоря, ',
        tachyon.get_colored_name(),
        ' как ',
        tachyon.uma_sex_title,
        ' сама по себе ничуть не привлекательна, и ',
        you.sex,
        ' не видит в ней ничего — так, что ли?',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        'Бег, возможности… ',
        you.sex,
        ' смотрит — на кого? На ',
        tachyon.get_colored_name(),
        ', вот эту ',
        tachyon.uma_sex_title,
        ', или на «некую ',
        tachyon.uma_sex_title,
        ' А, у которой всё это есть»?',
      ]);
      await tachyon.say_and_wait('…нет…');
      await coffee.say_and_wait([
        'И наоборот: если убрать всё это, чем ',
        tachyon.get_colored_name(),
        ', вот эта ',
        tachyon.uma_sex_title,
        ', вообще привлекательна? Что в ней такого нашёл ',
        you.sex,
        ', если не это?',
      ]);
      await tachyon.say_and_wait('…………');
      era.println();
      await coffee.print_and_wait([
        'От прежней досады не осталось и следа: настроение сегодня поднялось до самого Max, и ',
        coffee.get_colored_name(),
        ', напоследок, будто сбросив атомную бомбу, произносит последнюю фразу и выходит из класса',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.say_and_wait([
          'Кстати, ',
          callname_25,
          ' — его бэнто и правда очень недурны… может, пусть ',
          callname_25,
          ' и мне впредь готовит?',
        ]);
      } else {
        await coffee.say_and_wait([
          'Кстати, ',
          callname_25,
          ' — его бэнто и правда очень недурны… будет случай — пусть ',
          you.sex,
          ' и мне сделает',
        ]);
      }
      era.drawLine();
      await tachyon.say_and_wait('…………');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' уходит, оставив ',
        tachyon.get_colored_name(),
        ' одну в лаборатории',
      ]);
      await tachyon.print_and_wait([
        'Голова у неё светлая, и ',
        tachyon.sex,
        ' давно поняла: всё это ',
        coffee.get_colored_name(),
        ' говорит нарочно, чтобы ',
        tachyon.sex,
        ' завелась',
      ]);
      await tachyon.print_and_wait([
        'Больше того, ',
        tachyon.sex,
        ' догадывается даже, зачем ',
        coffee.get_colored_name(),
        ' так делает',
      ]);
      era.println();
      await tachyon.say_and_wait('Воркования…?');
      era.println();
      await tachyon.print_and_wait([
        'Если верить ',
        coffee.get_colored_name(),
        ', то в чужих глазах она и ',
        callname,
        ' смотрятся именно так — так их видит и ',
        tachyon.sex,
        ' сама',
      ]);
      await tachyon.print_and_wait('Но ведь это странно');
      await tachyon.print_and_wait(
        'Ворковать — это когда пара или двое влюблённых напоказ, не оглядываясь на чужие взгляды, выказывают свою нежность',
      );
      await tachyon.print_and_wait([
        'Но ведь она и ',
        callname,
        ' вовсе не в таких отношениях',
      ]);
      await tachyon.print_and_wait('Пара, влюблённые…');
      await tachyon.print_and_wait([
        'Значит, в чужих глазах она и ',
        callname,
        ' выглядят именно так?',
      ]);
      await tachyon.print_and_wait([callname, ' и я… любовь…']);
      era.println();
      await tachyon.say_and_wait('…!?');
      era.println();
      await tachyon.print_and_wait(
        'В тот миг, как эта мысль всплывает, сердце будто накачали стимулятором и оно заходится, а от избытка крови начинают гореть щёки',
      );
      await tachyon.print_and_wait('Это… это же выходит, будто она сама…');
      era.println();
      await tachyon.say_and_wait([
        'К-к-как это вообще возможно… он же просто подопытное животное… вот именно! В конце концов ',
        you.sex,
        ' всего-навсего жалкая свинка!',
      ]);
      await tachyon.say_and_wait([
        'С чего мне вообще волноваться, что ',
        you.sex,
        ' любит — меня саму или мой бег и мои возможности!',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'Верно: раз он свинка, довольно и того, что цель у нас общая',
      );
      await tachyon.print_and_wait([
        'Никаких лишних чувств тут не нужно: чувства в опыте только всё портят',
      ]);
      await tachyon.print_and_wait([
        'Их отношения — это исследователь и свинка, тренер и ',
        tachyon.uma_sex_title,
      ]);
      tachyon.print('Всё прочее не нужно');
      era.printButton('Так ли это?', 1);
      era.printButton('Верно, именно так', 2);
      if ((await era.input()) === 1) {
        await tachyon.print_and_wait('Ну да, ведь именно так');
        await tachyon.print_and_wait('Тогда почему');
        await tachyon.print_and_wait(
          'От того, что их приняли за пару, внутри всё прыгает и подскакивает, и это никак не унять',
        );
        await tachyon.print_and_wait([
          'От того, что ',
          you.sex,
          ' сделал бэнто для ',
          coffee.get_colored_name(),
          ', внутри никак не унять ревность и злость',
        ]);
        await tachyon.print_and_wait([
          '…От слов ',
          coffee.get_colored_name(),
          ' — что он и не видит её вовсе — внутри никак не унять страх и оторопь',
        ]);
        era.println();
        await tachyon.say_and_wait('…да что со мной такое');
        await tachyon.say_and_wait('Это же прямо как… как будто');
        era.println();
        await tachyon.print_and_wait([
          'Как будто мне нравится ',
          callname,
          ', вот что',
        ]);
        era.println();
        await tachyon.print_and_wait(
          'Чувство, в котором не разобралась и та, кого оно касается, вместе с жарким выдохом поднимается к потолку и тает в опустевшей лаборатории',
        );
      } else {
        await tachyon.print_and_wait('Верно');
        await tachyon.print_and_wait('Именно так');
        await tachyon.print_and_wait(
          'Довольно им быть просто свинкой и исследователем',
        );
        await tachyon.print_and_wait('Довольно и дальше жить вот так');
        await tachyon.print_and_wait(
          'Своенравный гений-учёный и безропотный помощник, он же подопытный образец',
        );
        await tachyon.print_and_wait('Пусть отношения так и остаются');
        await tachyon.print_and_wait('Остаются до… до каких пор?');
        await tachyon.print_and_wait(
          'Год? Два? До выпуска? До поступления в университет? До выхода во взрослую жизнь?',
        );
        await tachyon.print_and_wait(
          'А продержатся ли такие отношения до тех пор?',
        );
        era.println();
        await tachyon.say_and_wait('Эх…');
        era.println();
        await tachyon.print_and_wait(
          'Но как бы там ни было, выбор уже сделан, и сейчас пусть будет так',
        );
      }
      era.println();
      await tachyon.say_and_wait(['Возвращайся скорее, ', callname, '…']);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {string} callname 爱丽速子对玩家的称呼
   */
  async 49(tachyon, you, callname) {
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      'В одной из спален общежития Рицуто одна ',
      tachyon.uma_sex_title,
      ' зажимает рот подушкой и тихо выдавливает невнятные звуки',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      'Как правило, такие сцены в этой комнате уже ничем особенным не были, ',
    );
    await tachyon.print_and_wait([
      'Обычно какая-нибудь розоволосая ',
      tachyon.uma_sex_title,
      ' обнимает подушку и тихо изливает к ',
      tachyon.uma_sex_title,
      ' всю свою любовь',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('Но сегодняшняя героиня чуть другая');
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      'С розоволосой ',
      tachyon.uma_sex_title,
      ' в одной комнате каштановолосая ',
      tachyon.uma_sex_title,
      ', теперь сама творит то, что раньше делала соседка и что тогда так ставило её в тупик',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      'Тогда ',
      tachyon.sex,
      ' всё думала: такое поведение — чистая лишняя морока',
    ]);
    await tachyon.print_and_wait(
      'Если правда хочется сказать — зачем тогда стесняться?',
    );
    await tachyon.print_and_wait(
      'А если стесняешься — так не говори вслух, разве не лучше?',
    );
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      'Теперь ',
      tachyon.sex,
      ' наконец поняла причину такого поведения',
    ]);
    await tachyon.print_and_wait('Стыдно — потому что в словах любовь');
    await tachyon.print_and_wait(
      'Сказать же нужно: не скажешь — и огню внутри некуда деться',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      'Поэтому теперь ',
      tachyon.sex,
      ' может лишь так: в подушку и в опустевшую комнату — соседка на выезде на CM — в одиночку изливать душу',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '…Хотя так сказано, но в чём на самом деле корень этого чувства, ',
      tachyon.sex,
      ' до сих пор так и не разобралась',
    ]);
    await tachyon.print_and_wait(
      'Остаётся только снова и снова звать имя того, кто ей беспрекословно послушен —',
    );
    await tachyon.print_and_wait([
      ' и кто сейчас виновник её раздражения ',
      you.sex,
      '.',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      'При первой встрече — обращение, взятое чисто из интереса к образцу',
    );
    await tachyon.print_and_wait(
      'На старте — обращение, в интересе которого ещё звучали оценка и холод',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      'Теперь же стало обращением со сложным чувством: каждый раз, как произнесёшь, сердце вздрагивает',
    );
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('Это чувство — что оно такое');
    await tachyon.print_and_wait(
      'И сладкое, и горькое, тёплое — и всё же страшное',
    );
    await tachyon.print_and_wait(
      'Столь противные друг другу свойства — и все в одном чувстве',
    );
    await tachyon.print_and_wait('Как странно, как жарко, как… страшно?');
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait(
      'К неизвестному она всегда относилась с ожиданием и радостью',
    );
    await tachyon.print_and_wait(
      'Почему же это неведомое чувство рождает в ней страх',
    );
    await tachyon.print_and_wait([
      'Чего бояться в этом чувстве? Или ',
      callname,
      '?',
    ]);
    await tachyon.print_and_wait(['Я буду бояться… ', callname, '?']);
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait(
      'Ещё сильнее дрогнувшее сердце открывает ответ',
    );
    await tachyon.print_and_wait(['Я боюсь ', callname, '?']);
    await tachyon.print_and_wait(['Боюсь: ', you.sex, ' — чего в нём?']);
    await tachyon.print_and_wait(['Ведь это всего лишь ', callname, ' ']);
    await tachyon.print_and_wait(' Но… это и не чистый страх');
    await tachyon.print_and_wait('Что же это за сложное чувство');
    await tachyon.print_and_wait(
      'Напряжение, беспокойство, тревога, возбуждение, радость, страх, паника',
    );
    await tachyon.print_and_wait(
      'Будто к каждой эмоции есть касание — и ни одной не принадлежит',
    );
    await tachyon.print_and_wait(['Ведь это всего лишь ', callname, ' ']);
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.println();
    await tachyon.print_and_wait(
      '…Нет, на самом деле и гадать-то не о чем, правда?',
    );
    await tachyon.print_and_wait([
      'Каждый раз, когда зову его по имени, ток простреливает сердце — ',
      you.sex,
      '.',
    ]);
    await tachyon.print_and_wait([
      'Каждый раз, когда слышу его голос, в груди частое биение — ',
      you.sex,
      '.',
    ]);
    await tachyon.print_and_wait([
      'Каждый раз, когда вижу его улыбку, мозг бросает в беспорядочные мысли — ',
      you.sex,
      '.',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('А-а, так и есть');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('Нет, даже сверх воображения');
    era.println();
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('Не думала');
    await tachyon.print_and_wait('Всего лишь выкрикнуть с 「любовью」');
    await tachyon.print_and_wait('И настроение так переменится');
    era.println();
    await tachyon.print_and_wait('Прежняя тревога стала наслаждением');
    await tachyon.print_and_wait('Прежняя паника стала покоем');
    await tachyon.print_and_wait('Прежнее беспокойство стало радостью');
    await tachyon.print_and_wait('Прежний страх…');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await tachyon.print_and_wait('Почему, почему страх всё ещё здесь');
    await tachyon.print_and_wait('Ведь я уже признала, нет?');
    await tachyon.print_and_wait(['Ведь я уже полюбила ', callname, ' , нет?']);
    await tachyon.print_and_wait('Почему всё ещё страшно');
    await tachyon.print_and_wait('Почему всё ещё страх');
    era.println();
    await tachyon.print_and_wait('А-а…');
    await tachyon.print_and_wait('Ответ же очевиден, нет?');
    await tachyon.print_and_wait('Раз уж эта радость рождена любовью');
    await tachyon.print_and_wait('Тогда причина, почему страшно');
    await tachyon.print_and_wait('Конечно же, это страх 「нелюбви」');
    era.println();
    await tachyon.print_and_wait([
      'А если ',
      you.sex,
      ' не любит меня — как быть',
    ]);
    await tachyon.print_and_wait([
      'А если ',
      you.sex,
      ' ненавидит меня — как быть',
    ]);
    await tachyon.print_and_wait([
      'А если ',
      you.sex,
      ' полюбит другого — как быть',
    ]);
    await tachyon.print_and_wait([
      'А если… ',
      you.sex,
      ' любит не 「меня」 — как быть',
    ]);
    era.println();
    await tachyon.print_and_wait([
      'Стиль бега, потенциал… ',
      you.sex,
      ' смотрит — это ',
      tachyon.get_colored_name(),
      ' — эта ',
      tachyon.uma_sex_title,
      ', или 「некая ',
      tachyon.uma_sex_title,
      ' A, у которой это есть」?',
    ]);
    await tachyon.print_and_wait([
      'И наоборот: кроме всего этого, ',
      tachyon.get_colored_name(),
      ' — эта ',
      tachyon.uma_sex_title,
      ', что ',
      you.sex,
      ' в ней находит привлекательного?',
    ]);
    era.println();
    await tachyon.print_and_wait([
      'Вспоминаю его безумный взгляд — ',
      you.sex,
      '.',
    ]);
    await tachyon.print_and_wait([
      you.sex,
      ' заворожён(а) не ',
      tachyon.get_colored_name(),
      ', а ',
      tachyon.get_colored_name(),
      ' — её стиль бега',
    ]);
    await tachyon.print_and_wait([
      you.sex,
      ' хочет помочь не ',
      tachyon.get_colored_name(),
      ', а ',
      tachyon.get_colored_name(),
      ' — её мечте',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '…………']);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '… впрочем, всего лишь приложение',
    ]);
    await tachyon.print_and_wait([
      'Если я умру, ',
      you.sex,
      ' будет от этого в тревоге?',
    ]);
    await tachyon.print_and_wait([
      'Если я больше не смогу бежать, ',
      you.sex,
      ' будет от этого с разбитым сердцем?',
    ]);
    await tachyon.print_and_wait([
      'Если я брошу мечту, ',
      you.sex,
      ' будет об этом жалеть?',
    ]);
    era.println();
    await tachyon.print_and_wait('…Нет, на эти вопросы ответ наверняка 「да」');
    await tachyon.print_and_wait('Но, но');
    era.println();
    await tachyon.print_and_wait([
      'Если ',
      tachyon.get_colored_name(),
      ' потеряет ноги, мечту, потенциал, ',
      you.sex,
      ' всё ещё будет любить ',
      tachyon.get_colored_name(),
      ' ?',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      'Вопрос, которому не суждено получить ответ, тонет в вате подушки',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('А-а, нельзя');
    await tachyon.print_and_wait(
      'Каждый раз, открывая рот, всё ещё чувствуется удар, как молния',
    );
    await tachyon.print_and_wait('Каждый зов — всё ещё дрожь безумия в мозгу');
    await tachyon.print_and_wait('Но');
    await tachyon.print_and_wait(
      'Каждый вопрос — тень в сердце длиннее на пядь',
    );
    await tachyon.print_and_wait(
      'Каждое сомнение — страх в мозгу сильнее на долю',
    );
    era.println();
    await tachyon.print_and_wait('Как страшно');
    await tachyon.print_and_wait('Как тревожно');
    await tachyon.print_and_wait('Как больно');
    era.println();
    await tachyon.print_and_wait('Это и есть — нравится?');
    await tachyon.print_and_wait('Это и есть влюблённость?');
    await tachyon.print_and_wait('Это и есть любовь?');
    era.println();
    tachyon.print('Если да… тогда');
    era.printButton('…Надо что-то сделать (повысить отношения)', 1);
    era.printButton('…Нет, лучше не надо (пока не повышать)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await tachyon.print_and_wait('Нужно что-то сделать');
      await tachyon.print_and_wait('Такая тревога ничего не меняет');
      await tachyon.print_and_wait([
        'В конце концов, ',
        tachyon.get_colored_name(),
        ' — не та хрупкая, что только ждёт принца, ',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait(
        ' Свести имеющиеся переменные и доказать экспериментом',
      );
      await tachyon.print_and_wait('Вот что следует делать исследователю');
      await tachyon.print_and_wait('Подумай как следует');
      era.println();
      await tachyon.print_and_wait([
        'Единственная цель опыта — доказать, какое место занимает ',
        tachyon.get_colored_name(),
        ' у ',
        callname,
        '.',
      ]);
      await tachyon.print_and_wait(
        'Протокол эксперимента… есть, но опасность и риски…',
      );
      era.println();
      await tachyon.say_and_wait('…хе-хе');
      era.println();
      await tachyon.print_and_wait('Что ещё обдумывать?');
      await tachyon.print_and_wait([
        'Без того человека рядом ',
        tachyon.get_colored_name(),
        ', есть ли ещё смысл существовать?',
      ]);
      await tachyon.print_and_wait(
        'Уже дошло до такого — ещё себя обманывать?',
      );
      era.println();
      await tachyon.print_and_wait('А-а');
      await tachyon.print_and_wait([
        'Это ты сделал(а) из исследователя обычную ',
        tachyon.teen_sex_title,
      ]);
      await tachyon.print_and_wait([
        ' Поэтому прими ответственность, мой дорогой ',
        callname,
      ]);
      await tachyon.print_and_wait(' Моё признание, моё 「письмо」');
      await tachyon.print_and_wait('Прошу, прими как следует');
    } else {
      await tachyon.print_and_wait('Нельзя…');
      era.println();
      await tachyon.print_and_wait('Если что-то изменится');
      await tachyon.print_and_wait([
        'Если потом ',
        you.sex,
        ' больше не сможет со мной увидеться',
      ]);
      await tachyon.print_and_wait([
        'Если больше не съем бенто, что ',
        you.sex,
        ' готовит',
      ]);
      await tachyon.print_and_wait([
        'Если больше не увижу тот безумный взгляд',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ', больше не сможет жить',
      ]);
      era.println();
      await tachyon.print_and_wait('Этого точно не хочу');
      await tachyon.print_and_wait('Этого точно нельзя');
      era.println();
      await tachyon.print_and_wait([
        'Ради ',
        callname,
        ' и ',
        tachyon.get_colored_name(),
        ' будней',
      ]);
      await tachyon.print_and_wait('Чтобы сохранить эти дни');
      await tachyon.print_and_wait('Сдерживайся');
      await tachyon.print_and_wait('Подавляй');
      await tachyon.print_and_wait('Терпи');
      era.println();
      await tachyon.print_and_wait('Сдержи волнение');
      await tachyon.print_and_wait('Подави жар');
      await tachyon.print_and_wait('Терпи беспокойство');
      era.println();
      await tachyon.print_and_wait('Только…');
      await tachyon.print_and_wait(
        'Даже сильная пружина однажды ломается под давлением',
      );
      await tachyon.print_and_wait([
        'Пружина по имени ',
        tachyon.get_colored_name(),
        ' — до какого дня выдержит?',
      ]);
    }
    return ret;
  },
  74: (() => {
    const title = 'Исповедь ведьмы';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        ', перед тем как пить сегодняшнее лекарство, я расскажу тебе историю',
      ]);
      era.println();
      await era.printAndWait([
        'Сегодня ',
        you.get_colored_name(),
        ' как всегда приходит в лабораторию ',
        tachyon.get_colored_name(),
        ' — ',
        tachyon.sex,
        ' как всегда принимает бенто и протягивает тебе зелье — ',
        you.get_colored_name(),
        ' берёт,',
      ]);
      await era.printAndWait('словно обмен товара на товар');
      era.println();
      await era.printAndWait([
        'Но когда ',
        you.get_colored_name(),
        ' уже собирается выпить, ',
        tachyon.get_colored_name(),
        ' останавливает действие — ',
        you.get_colored_name(),
        ' замирает.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' недоумённо смотришь — ',
        tachyon.sex,
        ', а ',
        tachyon.sex,
        ' смотрит очень серьёзно в ответ — ',
        you.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait('…Тот взгляд, будто поставила на кон жизнь');
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', слышал(а) ли ты сказку о русалочке-принцессе',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' не ждёт, пока ',
        you.get_colored_name(),
        ' ответит — будто и не собиралась дать слово. ',
        you.get_colored_name(),
        ' молчит, и продолжает',
      ]);
      await era.printAndWait(
        '…Но это иная история, не та русалочка-принцесса из сказки Андерсена',
      );
      era.println();
      await tachyon.say_and_wait(
        'Давным-давно жила на дне моря русалочка-принцесса; с детства жаждала ног — бегать по земле вволю',
      );
      await tachyon.say_and_wait(
        'Но у неё был лишь рыбий хвост ниже пояса: не то что бег — даже стоять нельзя',
      );
      era.println();
      await era.printAndWait('Она самоиронично смотрит на свои ноги…');
      await era.printAndWait(
        'Хрупкие, как стекло: хоть и стоят, хоть и бегут,',
      );
      await era.printAndWait('ломаются от бега — чем лучше хвоста?');
      era.println();
      await tachyon.say_and_wait(
        'Принцесса не встретила ведьму и не хотела отдавать ноги ненадёжной ведьме,',
      );
      await tachyon.say_and_wait(
        'ей нужны были настоящие свои ноги — поэтому она сама начала учить колдовство',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' взмахивает руками — откуда ни возьмись две пробирки, будто фокус… или колдовство',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Принцесса верила: если стараться, однажды получит свои ноги,',
      );
      await tachyon.say_and_wait(
        'тогда будет бегать без страха — пока однажды…',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — голос вдруг становится призрачным, будто во сне',
      ]);
      era.println();
      await tachyon.say_and_wait('Она встретила человека');
      await tachyon.say_and_wait(
        'Не принца — всего лишь водолаза; не принца, упавшего в море и ждущего спасения',
      );
      await tachyon.say_and_wait(
        'а тот, кто в море случайно увидел принцессу, собиравшую данные у поверхности, и невольно поддался сирене',
      );
      await tachyon.say_and_wait(
        'нырнул в море и добровольно помог в эксперименте — обычный человек; назовём его пока — свинка-кун',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' тут хихикает, будто вспомнила шутку',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Сначала у принцессы к свинке-куну не было чувств — просто интересный объект,',
      );
      await tachyon.say_and_wait(
        'на нём куча опытов: рост, свечение, клонирование, смена пола… хе-хе',
      );
      await tachyon.say_and_wait(
        'Наивная принцесса думала, что меняется только свинка-кун,',
      );
      await tachyon.say_and_wait('забыв главный закон — реакция взаимна,');
      await tachyon.say_and_wait('и в химии, и в отношениях');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' вздыхает; во взгляде тоска и нежность, всё ещё во сне',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Свинка-кун водил принцессу под видом экспериментов смотреть на множество вещей,',
      );
      await tachyon.say_and_wait(
        'Они вместе с нарвалом ходили на охоту и прочувствовали, как сильный пожирает слабого, смотрели, как синий кит умирает и падает на дно моря, и постигли смысл рождения, старости, болезни и смерти,',
      );
      await tachyon.say_and_wait(
        'смотрели, как дельфины ухаживают и спариваются, — и оба невольно покраснели до ушей',
      );
      await tachyon.say_and_wait(
        'Постепенно принцесса поняла: мир за пределами экспериментов на самом деле так прекрасен',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' неторопливо рассказывает, рисуя то прекрасные, то величественные картины,',
      ]);
      await era.printAndWait(
        'Голос по-прежнему мягок, но теперь в нём ниточка сожаления — будто прекрасный сон вот-вот кончится',
      );
      era.println();
      await tachyon.say_and_wait('И вот, наконец, однажды');
      await tachyon.say_and_wait(
        'принцесса поняла, что больше не может сосредоточиться на экспериментах',
      );
      await tachyon.say_and_wait(
        'Всякий раз, когда она хотела спокойно заняться исследованиями, важнее результатов, что принесут опыты,',
      );
      await tachyon.say_and_wait(
        'ей было увидеть лицо свинки-куна, когда он услышит о новом исследовании.',
      );
      await tachyon.say_and_wait(
        'Всякий раз, когда она думала подняться на поверхность собирать данные, важнее людей, которых видела наверху,',
      );
      await tachyon.say_and_wait(
        'ей было увидеть свинку-куна, который ждал её на дне.',
      );
      await tachyon.say_and_wait(
        'Всякий раз, когда она хотела сделать новое лекарство, важнее эффекта зелья,',
      );
      await tachyon.say_and_wait(
        'ей была реакция свинки-куна, когда он его выпьет',
      );
      era.println();
      await era.printAndWait([
        'Наконец, ',
        tachyon.get_colored_name(),
        ' — выражение лица снова стало ясным, будто она наконец очнулась от прекрасного сна',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Она начала бояться — бояться, что однажды полностью утонет во времени, проведённом со свинкой-куном,',
      );
      await tachyon.say_and_wait(
        'бояться, что однажды… сама цель — обрести ноги — станет пустой фразой',
      );
      await tachyon.say_and_wait(
        'Тогда такая она будет всего лишь обычным учёным и больше не сможет быть исследователем…',
      );
      era.println();
      await tachyon.say_and_wait('И тогда появилась ведьма');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' встаёт со стула и подходит к ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' — её рука легла на ладонь у ',
        you.get_colored_name(),
        ' …но не стиснула, ',
        tachyon.sex,
        ' гладит то, что сжато у ',
        you.get_colored_name(),
        ' в руке, — ту пробирку',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Выходит, с самого начала ведьма жила в сердце принцессы — ведьма и есть принцесса!',
      );
      await tachyon.say_and_wait(
        'Ведьма, что олицетворяла разум в её сердце, сказала принцессе: источник всего этого — та свинка; не будет его — и всё вернётся как было',
      );
      await tachyon.say_and_wait(
        'Если та свинка уйдёт… нет, ухода мало — нельзя оставлять лазейку…',
      );
      await tachyon.say_and_wait(
        'Стоит лишь дать той свинке 『исчезнуть』 — и принцесса станет прежней, снова той принцессой, что жила только экспериментами',
      );
      era.println();
      await tachyon.say_and_wait(
        '…Верно, всего лишь 『стать прежней』 — никто не может гарантировать,',
      );
      await tachyon.say_and_wait(
        'что, став прежней, принцесса и вправду добудет ноги экспериментами; известно лишь одно: 『есть такая возможность』',
      );
      await tachyon.say_and_wait(
        'Напротив, если остаться со свинкой-куном… эту возможность',
      );
      await tachyon.say_and_wait(
        'уже никогда не вернуть. Сказав это, ведьма руками принцессы изготовила лекарство',
      );
      await tachyon.say_and_wait(
        'Она сказала принцессе: пусть свинка как обычно выпьет это зелье —',
      );
      await tachyon.say_and_wait(
        'и всё кончится, они вернутся к прежней жизни',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' сказав это, снова забирает из рук ',
        you.get_colored_name(),
        ' зелье',
      ]);
      era.println();
      await tachyon.say_and_wait('Но…');
      era.println();
      await era.printAndWait('Рука, что сжимала зелье, вдруг слегка дрогнула');
      era.println();
      await tachyon.say_and_wait(
        'Трусливая принцесса рассказала всё свинке-куну',
      );
      await tachyon.say_and_wait(
        '…Не из любви, не из жалости, не потому что не хватило духу',
      );
      await tachyon.say_and_wait('А из трусости, малодушия, слабости');
      await tachyon.say_and_wait(
        'Не думай, будто принцесса добрая: в конце концов ведьма — лишь грань её сердца, а суть её — та самая холодная и безжалостная ведьма',
      );
      await tachyon.say_and_wait(
        'Цель принцессы, что произнесла это… всего лишь не брать на себя ответственность',
      );
      era.println();
      await era.printAndWait([
        'Затем ',
        tachyon.get_colored_name(),
        ' снова поднимает зелье в руке',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Не хочет нести вину за убийство того, кого любит',
      );
      await tachyon.say_and_wait(
        'Не хочет брать на себя ответственность за то, что сама зарежет того, к кому привязана',
      );
      await tachyon.say_and_wait(
        'Хочет… чтобы та свинка, которую она вот-вот сотрёт, сама пожертвовала собой ради принцессы, — эгоизм',
      );
      era.println();
      await era.printAndWait('Зелье снова протянуто');
      await era.printAndWait([
        you.get_colored_name(),
        ' не видит, как выглядит опустившая голову ',
        tachyon.get_colored_name(),
        ' — какое сейчас у неё выражение на лице',
      ]);
      await era.printAndWait('Плачет? Из-за смерти любимого?');
      await era.printAndWait(
        'Смеётся? Потому что цепи, что связывали её, вот-вот снимут?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' лишь молча ждёт, пока она договорит',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Так что… ',
        callname,
        ', пожалуйста, сделай выбор за эту эгоистичную исследовательницу',
      ]);
      era.println();
      await era.printAndWait([
        'В этот миг ',
        tachyon.sex,
        ' сказала и вправду крайне эгоистичные слова',
      ]);
      await era.printAndWait('Хочет, чтобы тот пожертвовал собой ради неё');
      await era.printAndWait(
        'И ради одной лишь 「возможности」, да ещё не абсолютной',
      );
      await era.printAndWait(
        'Иначе говоря, 「ты должен умереть ради меня, но даже если умрёшь, я не знаю, получится ли у меня」 — вот такие, и правда, безответственные слова',
      );
      era.println();
      era.print(['Поэтому ', you.get_colored_name(), ' выбирает…']);
      era.printButton('Не пить (повысить отношения)', 1);
      era.printButton('Пить (пока не повышать)', 2);
      era.printButton('Заставить Тахион выпить лекарство【!】', 3);
      era.print(
        [
          '【Внимание: если выбрать этот вариант, отношения с ',
          tachyon.get_colored_name(),
          ' уже не восстановить! Академия Трейсен не простит отказ от подопечной!】',
        ],
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
  '74-accept': (() => {
    const title = 'Сверхсветовая принцесса';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' берёт из рук ',
        tachyon.get_colored_name(),
        ' зелье',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' поднимает голову, в глазах тревога',
      ]);
      await era.printAndWait([
        'Боится, что ты выпьешь зелье, или боится, что ты… не захочешь его пить?',
      ]);
      await era.printAndWait([
        'Честно говоря, даже ',
        you.get_colored_name(),
        ' сам не знает наверняка, правильно ли то, что будет дальше',
      ]);
      await era.printAndWait([
        'Но ',
        you.get_colored_name(),
        ' может поручиться: всё, что дальше, — от чистого сердца',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' выливает зелье из рук… в стоящую рядом бочку для утилизации лекарств',
      ]);
      era.println();
      await tachyon.say_and_wait('……а');
      era.println();
      await era.printAndWait([
        'Пока ',
        you.get_colored_name(),
        ' выливает пробирку, ',
        tachyon.get_colored_name(),
        ' так и не издаёт ни звука,',
      ]);
      await era.printAndWait([
        'И лишь когда ',
        you.get_colored_name(),
        ' всё выливает до капли, и после времени, длинного словно век, ',
        tachyon.sex,
        ' тихо произносит «а», будто только сейчас сообразила, что надо как-то отреагировать',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '… ты знаешь, что это значит?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' переворачивает пробирку, проверяя: зелья не осталось ни капли',
      ]);
      await era.printAndWait([
        'Тогда ',
        tachyon.get_colored_name(),
        ' наконец подбирает слова и изливает сплетённую речь',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Моя мечта… возможность, которую я преследую, — твой выбор значит, что',
      );
      await tachyon.say_and_wait([
        'ты хочешь, чтобы я, ',
        tachyon.get_colored_name(),
        ', полностью от всего отказалась, наотрез отказалась, стала самой обычной, как любая другая юная ',
        tachyon.teen_sex_title,
        ' без какой-либо разницы…',
      ]);
      await tachyon.say_and_wait([
        'обычную влюблённую — ',
        tachyon.child_sex_title,
        ', ты хочешь, чтобы я отказалась от прочих возможностей и выбрала возможность быть с тобой…',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, ' тараторит, запинаясь']);
      await era.printAndWait(
        'Будто уговаривает тебя передумать, пока не поздно, хочет дать понять, какой это неблагоразумный выбор, ',
      );
      await era.printAndWait([
        'надеется, что ты пожертвуешь собой ради неё — ',
        tachyon.sex,
        ' этого хочет, но не желает выглядеть злодеем, поэтому так эгоистично и бесстыдно предостерегает тебя',
      ]);
      era.println();
      await era.printAndWait([
        'Но рядом — ',
        tachyon.sex,
        '. Тот, кто давно с ней рядом, ',
        you.get_colored_name(),
        ' видит: ',
        tachyon.sex,
        ' — правду, спрятанную в словах',
      ]);
      await era.printAndWait(
        'Запинается от страха — страха, что всё это лишь её ошибка',
      );
      await era.printAndWait(
        'Тараторит, чтобы не услышать «я передумал» — будто ребёнок нарочно бормочет невнятно, лишь бы выманить согласие',
      );
      await era.printAndWait(
        'Точь-в-точь как страховой агент, что перед подписью снова и снова твердит условия договора, лишь бы сторона не передумала',
      );
      await era.printAndWait(
        'Судить об этом позволяет хвост: слова — отказ, а он всё равно без остановки виляет, ',
      );
      await era.printAndWait(
        'уши торчком, и на лице — она, верно, думает, что не видно, — явное облегчение',
      );
      era.println();
      await tachyon.say_and_wait([
        'Понимаешь, ',
        callname,
        '… ты же всегда хотел увидеть ту сторону возможности? Если так, то и правда…',
      ]);
      era.println();
      await era.printAndWait('Хватит');
      await era.printAndWait([
        'Хотя смотреть, как долго ещё ',
        tachyon.sex,
        ' будет хорохориться, тоже занятно',
      ]);
      await era.printAndWait([
        'Но тогда потом точно вспылившая от стыда ',
        tachyon.sex,
        ' отомстит',
      ]);
      await era.printAndWait([
        'Поэтому ',
        you.get_colored_name(),
        ' думает, как явить ',
        you.get_colored_name(),
        ' самую глубокую решимость',
      ]);
      era.print([you.get_colored_name(), ' решает…']);
      era.printButton(`Обнять — ${tachyon.sex}`, 1);
      era.printButton(` Поцеловать — ${tachyon.sex}`, 2);
      era.printButton(
        ` Легко прикусить за ухо — пусть ${tachyon.sex} вздрогнет`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            'Когда человек сталкивается с внезапным, двум делам сразу ума не хватает, ',
            tachyon.uma_sex_title,
            ' — тоже',
          ]);
          await era.printAndWait([
            'Потому естественно: ',
            you.get_colored_name(),
            ' вдруг обнимает — она цепенеет, тонет в знакомом запахе самца, ',
          ]);
          await era.printAndWait([
            'Вовсю пьющая эту нежность ',
            tachyon.get_colored_name(),
            ', конечно, уже не может раскрыть рот: длинную речь ',
            tachyon.sex,
            ' так и не продолжит',
          ]);
          break;
        case 2:
          await era.printAndWait(
            'Метод признания в любви, что передают с древности, — быть может, и есть сильнейший навык: и рот заткнуть, и чувство выразить',
          );
          await era.printAndWait([
            tachyon.sex,
            ' — её губы точно как ',
            tachyon.sex,
            ' сама: казавшаяся жёсткой оборона в миг касания рушится, являя мягкую нежную сердцевину.',
          ]);
          await era.printAndWait(
            'Зубная крепость тверда как стена, но от языка рушится вмиг, и остаётся лишь пустить врага вглубь, ',
          );
          await era.printAndWait(
            'А язык, что казался верным, едва коснувшись твоего толстого длинного языка, становится кротким, как пташка, и даёт срывать себя',
          );
          break;
        case 3:
          await era.printAndWait(
            'Вместо этого с губ срывается невольный сладкий стон',
          );
          await era.printAndWait([
            'Как всем известно, у большинства ',
            tachyon.uma_sex_title,
            ' есть органы, которых нет у людей, — ',
            tachyon.couple_title,
            ' самые чувствительные места',
          ]);
          await era.printAndWait([
            'Так виновата ли ',
            tachyon.get_colored_name(),
            ' в этом стоне, от которого мысли лезут не туда',
          ]);
          await era.printAndWait([
            'Скорее, ',
            you.get_colored_name(),
            ' держит в объятиях и мнёт ухо — а она всё ещё стоит и не обмякает в объятиях ',
            you.get_colored_name(),
            ' — ',
            tachyon.get_colored_name(),
            ', это уже весьма достойно',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '…нет… погоди… щекотно…']);
          era.println();
          await era.printAndWait([
            'Слыша ',
            tachyon.get_colored_name(),
            ' и её голос, в котором отказ звучит скорее приглашением, ',
            you.get_colored_name(),
            ' меняет хватку и уже грубее, жёстче мнёт и растирает у ',
            tachyon.uma_sex_title,
            ' упругие, чувствительные кончики ушей',
          ]);
          era.println();
          await tachyon.say_and_wait('И-и… погоди… нельзя…');
          era.println();
          await era.printAndWait([
            'Продержавшись целых полминуты, ',
            tachyon.get_colored_name(),
            ' наконец сдаётся и обмякает в объятиях — её держит ',
            you.get_colored_name(),
            '.',
          ]);
      }
      await era.printAndWait([
        'Только когда ',
        tachyon.sex,
        ' совсем перестаёт вырываться, ',
        you.get_colored_name(),
        ' разжимает руки — и наконец свободна ',
        tachyon.sex,
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' словно ещё не вынырнула из того, что только что было, и никак не придёт в себя',
      ]);
      await era.printAndWait([
        'И в этот самый миг ',
        you.get_colored_name(),
        ' начинает говорить то, что говорят раз в жизни',
      ]);
      era.printButton('「Я люблю тебя, Агнес Тахион」', 1);
      await era.input();
      await tachyon.say_and_wait('!!!!????');
      era.println();
      await era.printAndWait([
        'Слова эти произносит ',
        you.get_colored_name(),
        ' — и, услышав их, ',
        tachyon.sex,
        ' мгновенно вздыбливает хвост, точно кошка, у которой шерсть встала дыбом',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname.substring(0, 1).repeat(5),
        callname,
        '!? Ты что такое говоришь!?',
      ]);
      era.println();
      await era.printAndWait([
        'Ой-ой, неужели ',
        tachyon.get_colored_name(),
        ' туговата на ухо?',
      ]);
      await era.printAndWait('Ну что ж, тогда повторю ещё пару раз');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает первую встречу с ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' бежит так, как никто, ',
        tachyon.sex,
        ' призрачна, как мираж',
      ]);
      await era.printAndWait([
        'И от того, и от другого ',
        you.get_colored_name(),
        ' сходит с ума, теряет голову — и всему виной ',
        tachyon.sex,
      ]);
      await era.printAndWait(['Верно, это 「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает её дебют — тот забег, в котором ',
        tachyon.sex,
        ' впервые вышла на дорожку',
      ]);
      await era.printAndWait(
        'Словно свет — легко и само собой вышла на старт, само собой обошла всех, само собой выиграла забег',
      );
      await era.printAndWait([
        'Та, что бросила 「забег — не больше чем проверка результатов опыта」, с застывшим лицом, с ледяным холодом встречавшая любую гонку, — ',
        tachyon.sex,
      ]);
      await era.printAndWait(['Верно, это 「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает тот день, когда ',
        you.get_colored_name(),
        ' впервые готовил(а) бэнто, и есть его должна была ',
        tachyon.sex,
        '.',
      ]);
      await era.printAndWait(
        'Хочет своими глазами увидеть предел собственных возможностей — и ради этого готова стать подопытной сама',
      );
      await era.printAndWait([
        'Ждущая возможности, что превзойдёт воображение и пробьёт любой предел, с безумием во взгляде — ',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait(['Верно, это 「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает ту, что не спала ночами напролёт и ставила опыты до утра, — ',
        tachyon.sex,
      ]);
      await era.printAndWait(
        'Ради исследования готова отдать своё тело, ради мечты — выбросить здоровье',
      );
      await era.printAndWait([
        'Тело измотано и неопрятно, а в глазах горит тяга к мечте — такая ',
        tachyon.sex,
      ]);
      await era.printAndWait(['Верно, это 「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает, какой была в первую их совместную вылазку в город ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        'Переполох с меняющим цвет капустным соком — и то, как надулась ',
        tachyon.sex,
        ' от обиды',
      ]);
      await era.printAndWait([
        'Капризничает из-за такой ерунды, радуется вытащенной из автомата игрушке — вот такая, самая обыкновенная ',
        tachyon.sex,
      ]);
      await era.printAndWait(['Верно, это 「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        'И наконец… та, что сейчас стоит перед ',
        you.get_colored_name(),
        ', — ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        'Нервно бегающий взгляд — ждёт, когда снова заговорит ',
        you.get_colored_name(),
        ', — ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        'Прежде равнодушные ко всему глаза теперь полны счастья и любви — такая ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        'Щёки горят румянцем, и на вид… просто по уши влюблённая, самая обыкновенная ',
        tachyon.teen_sex_title,
        ' — ',
        tachyon.sex,
      ]);
      era.printButton(
        '「Я люблю тебя, Агнес Тахион, я люблю именно 『тебя』, а не твой бег, не твою мечту, не твои возможности」',
        1,
      );
      await era.input();
      await era.printAndWait('Всё так');
      await era.printAndWait(['Средоточие всего — ', tachyon.sex, '']);
      await era.printAndWait([
        'Сначала — да, наверное, тебя и вправду влекли только бег и безумие, которыми жила ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait([
        'Но теперь ',
        tachyon.get_colored_name(),
        ' — эта ',
        tachyon.uma_sex_title,
        ' — в сердце у ',
        you.get_colored_name(),
        ' стоит уже выше всего того',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' и сам(а) давно думает иначе',
      ]);
      await era.printAndWait([
        'Не 「ради того, чтобы сбылась мечта, которой живёт ',
        tachyon.get_colored_name(),
        ', тянуть любую лямку」',
      ]);
      await era.printAndWait([
        'А 「ради ',
        tachyon.get_colored_name(),
        ' отдать всё, что есть, без остатка」',
      ]);
      await era.printAndWait('Поэтому…');
      era.printButton(
        '「Даже если однажды ты перестанешь бежать и не захочешь больше гнаться за возможностями, я всё равно буду любить тебя, как любил(а) всегда」',
        1,
      );
      await era.input();
      await era.printAndWait(
        'В сущности, с начала и до конца вопрос был проще некуда',
      );
      await era.printAndWait([
        'Тот же вопрос, что и 「мать с женой упали в воду — кого спасёшь первой」, только героями в нём стали 「',
        tachyon.get_colored_name(),
        '」 и 「талант, которым владеет ',
        tachyon.get_colored_name(),
        '」',
      ]);
      await era.printAndWait([
        '…Так запутать столь простой вопрос — в этом, пожалуй, тоже вся ',
        tachyon.sex,
        ', её особый дар',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' не может сдержать кривой усмешки: до чего же ',
        tachyon.sex,
        ' хлопотная',
      ]);
      await era.printAndWait('Но теперь-то, наверное, можно выдохнуть');
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        'Так думает ',
        you.get_colored_name(),
        ' — и видит: ',
        tachyon.sex,
        ' плачет от счастья, а лицо расцветает улыбкой',
      ]);
      await era.printAndWait(['Нежная и яркая, как космея после ливня']);
      era.drawLine();
      await tachyon.say_and_wait([callname, '~~ вот и сегодняшнее зелье']);
      era.println();
      await era.printAndWait([
        'На следующий день ',
        you.get_colored_name(),
        ' смотрит на ту, что ещё вчера уверяла, будто больше не сможет заниматься исследованиями, — на некую ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait(
        'В руках — светящееся зелье, на вид ещё подозрительнее обычного, и вприпрыжку она влетает в комнату тренера',
      );
      era.println();
      await tachyon.say_and_wait(
        'Быстрее, быстрее, сегодняшнее зелье — венец всей светящейся серии, выпьешь и засветишься двадцатью четырьмя тысячами оттенков RGB~~',
      );
      await tachyon.say_and_wait(
        'Да, кстати, на выходных выезжаем на полевой опыт, так что все прежние планы отменяй. Понятно?',
      );
      await tachyon.say_and_wait(
        'И ещё: сегодняшнее бэнто принеси на полчаса раньше, есть важный опыт',
      );
      await tachyon.say_and_wait(
        'И помни… а, и постарайся без жидкого, оно портит условия опыта',
      );
      era.println();
      await era.printAndWait(
        'Едва войдя, возбуждённая исследовательница затрещала об опытах и исследованиях',
      );
      await era.printAndWait([
        'Даже ',
        you.get_colored_name(),
        ', увидев такое, надолго застывает',
      ]);
      await era.printAndWait(
        'Конечно, не из-за её нахальных требований — обычно они бывают куда нахальнее, — а из-за…',
      );
      era.printButton(
        '「А где же обещанное «больше не могу заниматься исследованиями»?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' ещё помнит, какой жалкой была вчера ',
        tachyon.get_colored_name(),
        ' — заплаканная, твердившая, что больше не сможет ни исследовать, ни находить возможности',
      ]);
      await era.printAndWait([
        'А нынешняя ',
        tachyon.sex,
        ' — по ней и не скажешь, что вчера была раздавлена и сломлена',
      ]);
      era.println();
      await tachyon.say_and_wait(['…Я ведь правду говорю, ', callname, ' ']);
      await tachyon.say_and_wait(
        'Я теперь и правда не могу больше сосредоточиться на изучении собственных возможностей,',
      );
      await tachyon.say_and_wait('В голове круглые сутки только ты…');
      await tachyon.say_and_wait(
        'Даже сейчас в голове одно: как ты радуешься, как злишься, как смущаешься, как нервничаешь…',
      );
      await tachyon.say_and_wait(
        'Из-за тебя я стала такой, так что отвечать теперь тебе',
      );
      era.printButton('「П… прости?」', 1);
      await era.input();
      await era.printAndWait('Это… это что же, ты виноват(а)?');
      await era.printAndWait(
        'И вообще, когда тебе вот так, в лоб, признаются в любви, всё-таки жутко стыдно…',
      );
      await era.printAndWait(
        'Нет, погоди, при чём тут вообще то, о чём она говорила раньше',
      );
      await era.printAndWait(
        'Так и не объяснила, почему всё равно, как всегда, занимается исследованиями, разве нет?',
      );
      era.println();
      await tachyon.say_and_wait(
        'Вот и я о том… я больше не могу думать только о себе',
      );
      await tachyon.say_and_wait(
        'Все возможности, какие я теперь способна помыслить… все они требуют тебя рядом. Наверное, впредь я смогу думать только о возможностях 『вместе с тобой』',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' вдруг перестаёт понимать, о чём ',
        tachyon.sex,
        ' говорит, и только таращится на ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ', на которую вот так смотрит ',
        you.get_colored_name(),
        ', и сама начинает чувствовать себя неловко',
      ]);
      await era.printAndWait(
        'А потом, будто прорвало плотину: невозмутимое лицо не выдержало последней соломинки — взгляда того, кого она любит',
      );
      await era.printAndWait('И мгновенно сменилось краской стыда во всё лицо');
      era.println();
      await tachyon.say_and_wait(
        'Так вот… в общем… опыт на выходных… ты ведь освободишь время…',
      );
      await tachyon.say_and_wait(
        'Это чтобы проверить, насколько применимо к нам двоим то, что обычные люди называют, э-э, ну, свиданием…',
      );
      await tachyon.say_and_wait(
        'В общем! В субботу в девять утра, не сметь опаздывать! И завтрак мне принести! Всё!',
      );
      await tachyon.say_and_wait(
        'И ещё, сегодняшнее обеденное бэнто… если можно… сделай так, чтобы удобно было есть по кусочку…',
      );
      await tachyon.say_and_wait(
        'Это… хочу замерить, как действие 『а-а — ам』 влияет на пульс в отношениях влюблённых… можно?',
      );
      era.println();
      await era.printAndWait([
        'Видя, как ',
        tachyon.sex,
        ', сгорая от стыда, всё-таки договаривает до конца, ',
        you.get_colored_name(),
        ' не может сдержать смешка',
      ]);
      await era.printAndWait('И что тут отвечать?');
      await era.printAndWait(
        'Этой вздорной, своевольной, самой милой безумной учёной',
      );
      await era.printAndWait([
        'Этой родной, трогательной, самой любимой — влюблённая ',
        tachyon.teen_sex_title,
      ]);
      era.println();
      await you.say_and_wait([
        'Да… ',
        tachyon.sex_code - 1 ? 'моя принцесса' : 'мой принц',
        '.',
      ]);
      return [];
    };
    f.title = title;
    return f;
  })(),
  '74-reject-1': (() => {
    const title = 'Шестерни приходят в движение';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминает картину той первой встречи с ',
        tachyon.get_colored_name(),
        ' — с той, кого называют ',
        tachyon.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' бежит так, как никто, ',
        tachyon.sex,
        ' призрачна, как мираж, ',
        tachyon.sex,
        ' — сама возможность',
      ]);
      await era.printAndWait([
        'Ослепила ',
        tachyon.sex,
        ', выжгла глаза — и разве не тогда ',
        you.get_colored_name(),
        ' поклялся(ась) пожертвовать всем ради неё, ради той, кем была ',
        tachyon.sex,
        ' в тот миг',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' ничего не говорит — просто берёт пробирку из рук, которые протянула ',
        tachyon.sex,
        '.',
      ]);
      await era.printAndWait([
        'Помнится, ',
        tachyon.sex,
        ' как-то сказала, что у неё безумные глаза',
      ]);
      await era.printAndWait([
        'Тогда источник этого безумия — наверняка отблеск сияния, которое излучает ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' безумна из-за мечты, которой живёт ',
        tachyon.sex,
        ', а ',
        you.get_colored_name(),
        ' сходит с ума из-за того, что есть на свете ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait([
        'Раз так — ради мечты, которой живёт ',
        tachyon.sex,
        ', ради того, чтобы ',
        tachyon.sex,
        ' и дальше сияла так же ярко, почему бы и не пожертвовать собой?',
      ]);
      era.println();
      await era.printAndWait([
        'Сейчас ',
        you.get_colored_name(),
        ' — точно ревностный верующий, да, по сути, так оно и есть',
      ]);
      await era.printAndWait([
        'А божество в сердце у ',
        you.get_colored_name(),
        ', единственный свет, теперь из-за ',
        you.get_colored_name(),
        ' срывается во тьму',
      ]);
      await era.printAndWait('Такого, разумеется, допустить нельзя');
      await era.printAndWait('К счастью, всё ещё поправимо');
      era.println();
      await era.printAndWait([
        'Стоит тебе исчезнуть — и ',
        tachyon.sex,
        ' снова засияет тем светом, который так хочет видеть ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton(
        '「Спасибо тебе… увидимся по ту сторону возможностей」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' верит в ',
        tachyon.get_colored_name(),
        ' — верит слепо, до одержимости',
      ]);
      await era.printAndWait([
        'Но при этом в душе у ',
        you.get_colored_name(),
        ' всё-таки живёт тень страха',
      ]);
      await era.printAndWait([
        'А вдруг после твоей смерти ',
        tachyon.sex,
        ' окажется не такой сильной, как тебе думалось',
      ]);
      await era.printAndWait([
        'А вдруг ',
        tachyon.sex,
        ' вовсе не такая сильная, какой ',
        tachyon.sex,
        ' сама себя считает',
      ]);
      await era.printAndWait([
        'Поэтому ',
        you.get_colored_name(),
        ' и заготовил(а) на всякий случай эти оковы',
      ]);
      era.println();
      await era.printAndWait([
        'Не то чтобы тебе казалось, будто ты и правда так много значишь для той, кем стала ',
        tachyon.sex,
        ', но если, вдруг, ',
        tachyon.sex,
        ' и впрямь сломается… тогда эти оковы, вернее сказать, это проклятие',
      ]);
      await era.printAndWait([
        'Проклятие от того, кого ',
        tachyon.sex,
        ' когда-то любила, будет гнать её вперёд — гнать, пока ',
        tachyon.sex,
        ' не дойдёт до того, к чему стремится ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait([
        'А если всё это только твоё самомнение и в сердце, которым живёт ',
        tachyon.sex,
        ', ты вовсе не занимаешь такого места,',
      ]);
      await era.printAndWait([
        'то и того лучше: ',
        tachyon.sex,
        ' уж точно не даст какой-то там подопытной свинке сбить себя с шага и пойдёт дальше упрямо и твёрдо',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' на это и надеется, подносит пробирку к губам, выпивает — и…',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' с радостным изумлением видит, как ',
        tachyon.sex,
        ' поднимает голову и на лице у неё всё та же привычная улыбка',
      ]);
      await era.printAndWait([
        'Значит, всё хорошо: ',
        tachyon.sex,
        ' обязательно, обязательно пойдёт своей дорогой дальше…',
      ]);
      era.setToBottom();
      await era.printAndWait('В следующий миг');
      era.setToBottom();
      await era.printAndWait([
        you.get_colored_name(),
        ' чувствует, как что-то коснулось губ — губ, что у ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('Мягкие, тёплые, нежные — два лепестка розы');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' целует в губы ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      await era.printAndWait([
        'Мало того: ',
        tachyon.sex,
        ' языком раздвигает губы ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' хозяйничает языком во рту у ',
        you.get_colored_name(),
        ', шарит, требует',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' жадно, с наслаждением проходится языком по зубам ',
        you.get_colored_name(),
        ', по кончику языка ',
        you.get_colored_name(),
        ', по дёснам ',
        you.get_colored_name(),
        ' — и всё же не в этом цель, которую поставила себе ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' целит в другое — всё случилось так внезапно, что ',
        you.get_colored_name(),
        ' не успевает опомниться и даже проглотить не успевает — зелье, что осталось во рту у ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' только теперь приходит в себя и в панике пытается её остановить',
      ]);
      await era.printAndWait('Но всё уже поздно');
      await era.printAndWait([
        'Зелье во рту у ',
        you.get_colored_name(),
        ' — большую часть его уже забрала себе ',
        tachyon.sex,
        ' сама',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' даже спросить не успевает, зачем это делает ',
        tachyon.sex,
        '; остаётся лишь рвануть язык назад, чтобы остановить то, что творит ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait([
        'Но человеку в силе не тягаться, если против него ',
        tachyon.uma_sex_title,
        ', и даже ',
        you.get_colored_name(),
        ', на ком поставили столько опытов, — не исключение',
      ]);
      era.println();
      await era.printAndWait(
        'Наконец этот поцелуй, длившийся будто целый век, кончается',
      );
      await era.printAndWait([
        'Оторвавшись друг от друга, вы оба тяжело дышите, и ',
        you.get_colored_name(),
        ', всё ещё задыхаясь, рвётся вперёд — заставить ',
        tachyon.get_colored_name(),
        ' выплюнуть всё… но невольно замирает на месте',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        ' — выражение её лица, её чувство сейчас таковы, что ',
        you.get_colored_name(),
        ' их понять не в силах',
      ]);
      await era.printAndWait(
        'Если это радость, почему по щекам одна за другой катятся слёзы',
      );
      await era.printAndWait([
        'А если горе, откуда тогда улыбка, какой ',
        you.get_colored_name(),
        ' ни разу не видел(а), — улыбка, какой ',
        tachyon.sex,
        ' не улыбалась никогда, безупречная до последней чёрточки',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          'А потом зелье, что осталось во рту у ',
          you.get_colored_name(),
          ', вдруг меняет вкус: раньше оно было без цвета и без вкуса, а теперь…',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            'Надо же, а последний поцелуй на вкус — как рис со свининой',
          );
        } else {
          await tachyon.say_and_wait(
            'Надо же, а первый поцелуй на вкус — как рис со свининой',
          );
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' вспоминает тот шоколад с Дня святого Валентина',
        ]);
        await era.printAndWait([
          'Ты, кого каждый день поили зельями, и та, кого веселили твои реакции, — ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait(
          'Как хочется, чтобы это чудесное время длилось вечно',
        );
        await era.printAndWait(
          'Как хочется, чтобы запах того чёрного чая не менялся никогда',
        );
        await era.printAndWait('Ведь решение вроде бы было твёрдым');
        await era.printAndWait(
          'Почему же сейчас вдруг накатила тоска по тем дням',
        );
        era.println();
        await tachyon.say_and_wait([callname, ', прости, я тебя обманула']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' всё так же держит эту ослепительную улыбку, и слёзы всё так же катятся по лицу бусинами',
        ]);
        era.println();
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          ' — на самом деле вовсе не такая уж великая ',
          tachyon.uma_sex_title,
        ]);
        await tachyon.say_and_wait([
          'Не та, что ради возможностей готова бросить всё, — не такая ',
          tachyon.uma_sex_title,
        ]);
        await tachyon.say_and_wait([
          'Не та, что ради мечты способна отправить любимого на смерть, — не такая ',
          tachyon.uma_sex_title,
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' говорит это, качая головой, а ',
          you.get_colored_name(),
          ' хочет что-то сказать — и почему-то не может раскрыть рта',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…Нет, и так сказать неверно. Вернее будет: ',
          tachyon.sex,
          ' когда-то и была такой ',
          tachyon.uma_sex_title,
        ]);
        await tachyon.say_and_wait([
          'Но, как уже было сказано, принцесса изменилась из-за свинки-куна и узнала, что такое любовь, и потому… ',
          tachyon.sex,
          ' больше так не может',
        ]);
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          ' — если разобраться, просто самая обыкновенная ',
          tachyon.child_sex_title,
          ', и только',
        ]);
        await tachyon.say_and_wait([
          'И потому ',
          tachyon.sex,
          ' может влюбиться, может бояться и тревожиться — вдруг тот, кто ей нравится, вовсе её не любит…',
        ]);
        await tachyon.say_and_wait(
          'Бояться, что тот, кто ей нравится, видит перед собой вовсе не её',
        );
        era.println();
        await era.printAndWait([
          'С начала и до конца 「',
          callname,
          '」 видел(а) и любил(а) только одно: 「как бежит ',
          tachyon.get_colored_name(),
          '」, 「о чём мечтает ',
          tachyon.get_colored_name(),
          '」',
        ]);
        await era.printAndWait(['А как же… ', tachyon.get_colored_name(), '?']);
        await era.printAndWait([
          'Нет… ',
          tachyon.get_colored_name(),
          '… это вообще кто?',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…А, зелье подействовало… а я ведь хотела сказать ещё пару слов',
        );
        era.println();
        await era.printAndWait([
          'Перед тобой ',
          tachyon.teen_sex_title,
          ' — слёзы на её лице уже не текут, а улыбка всё так же сияет',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…Хотя, по крайней мере, меня не бросили, то есть, во всяком случае, ещё не отказали,',
        );
        await tachyon.say_and_wait(
          'Правда? И этого хватит… да, этого хватит, ха-ха-ха!',
        );
        era.println();
        await era.printAndWait('Ха-ха-ха-ха-ха');
        await era.printAndWait([
          tachyon.teen_sex_title,
          ' хохочет во весь голос, и ',
          you.get_colored_name(),
          ', видя, как ',
          tachyon.sex,
          ' заходится смехом, вспоминает вдруг чей-то силуэт…',
        ]);
        await era.printAndWait([
          'Стоило тебе что-нибудь выпить, и 「',
          tachyon.sex,
          '」, кажется, всегда вот так же смотрела на тебя и хохотала,',
        ]);
        await era.printAndWait([
          '「',
          tachyon.sex,
          '」 — как её зовут? 「',
          tachyon.sex,
          '」 — это и есть та ',
          tachyon.teen_sex_title,
          ', что стоит перед тобой?',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Прости уж, ',
          callname,
          ', столько времени я тебя мучила, а в конце всё обратилось в пену…',
        ]);
        await tachyon.say_and_wait([
          'Но считай это последним капризом, который позволила себе ',
          tachyon.get_colored_name(),
          '… А в следующий раз ни за что не влюбляйся в такую, как я: хлопотная ',
          tachyon.phy_sex_title,
          ' — вот кто я такая',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          tachyon.get_colored_name(),
          '」, 「',
          callname,
          '」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' изо всех сил старается удержать в голове эти смутно знакомые, за что-то цепляющие слова,',
        ]);
        await era.printAndWait(
          'Но мозг будто засунули в барабан стиральной машины, и память отстирывается, как грязь',
        );
        await era.printAndWait([
          'Даже та ',
          tachyon.teen_sex_title,
          ', что стоит перед тобой, теперь призрачна, как пена, тающая в утреннем свете',
        ]);
        era.setToBottom();
        await tachyon.say_and_wait(['Спокойной ночи, ', callname, ' ']);
        era.setToBottom();
        await era.printAndWait([
          'После этих слов сознание ',
          you.get_colored_name(),
          ' срывается в бездну',
        ]);
        era.setToBottom();
        era.drawLine();
        await tachyon.say_as_unknown_and_wait('…Очнись');
        await tachyon.say_as_unknown_and_wait('…Очнись же, очнись');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' просыпается']);
        await era.printAndWait([
          'Разбуженный(ая) чьим-то голосом, ',
          you.get_colored_name(),
          ' открывает глаза и видит незнакомый потолок',
        ]);
        era.printButton('「Где это я?」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait('…Это моя лаборатория');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' поворачивается туда, откуда шёл голос',
        ]);
        await era.printAndWait([
          'Перед тобой рыжая ',
          tachyon.uma_sex_title,
          ': короткая аккуратная стрижка и белый халат говорят, что ',
          tachyon.sex,
          ' — исследовательница,',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' разглядывает изучающим взглядом ',
          you.get_colored_name(),
          ', и почему-то у ',
          you.get_colored_name(),
          ' мурашки по коже',
        ]);
        era.printButton('「Ты кто?」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          'Это скорее мой вопрос к тебе… Ты что за человек? Почему валяешься у меня в лаборатории?',
        );
        await era.printAndWait([
          'Рыжая ',
          tachyon.uma_sex_title,
          ' говорит это',
        ]);
        await era.printAndWait([
          'Только теперь ',
          you.get_colored_name(),
          ' замечает, что до сих пор лежит на полу, и торопливо поднимается',
        ]);
        era.printButton(`「Я ${you.actual_name}, тренер」`, 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '…Вот как? И что же, тренер-кун, ты тут делаешь на полу',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' пробует вспомнить, чем до этого занимался(ась) ',
          you.get_colored_name(),
          ', — и не может вспомнить никак',
        ]);
        era.println();
        await tachyon.say_as_unknown_and_wait(
          '…Не помнишь — и ладно. Я и сама почему-то будто память потеряла, не помню, чем занималась до этого…',
        );
        await tachyon.say_as_unknown_and_wait([
          'Ладно, забудь. В общем, я ',
          tachyon.get_colored_name(),
          '. Прошу любить и жаловать, тренер-кун',
        ]);
        era.println();
        await era.printAndWait([tachyon.get_colored_name()]);
        await era.printAndWait([
          'От этого имени сердце ',
          you.get_colored_name(),
          ' будто пропускает удар',
        ]);
        await era.printAndWait('Ведь это имя ты вроде бы слышишь впервые');
        await era.printAndWait([
          'И знакомой она быть не должна — эта ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait('Но почему-то она кажется знакомой');
        era.println();
        era.printButton('「Мы… не встречались где-то раньше?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'Ой-ой, такие замшелые подкаты нынче уже не в моде, тренер-кун',
        );
        await era.printAndWait([
          tachyon.sex,
          ' смотрит на ',
          you.get_colored_name(),
          ' и озорно улыбается, а ',
          you.get_colored_name(),
          ' торопливо объясняет, что всё не так',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Шучу… Хотя не знаю почему, но у меня то же чувство',
        );
        era.println();
        await era.printAndWait([
          'Почему-то тренерское чутьё подсказывает ',
          you.get_colored_name(),
          ': эта ',
          tachyon.uma_sex_title,
          ' точно способна на такой бег, что ',
          you.get_colored_name(),
          ' ахнет,',
        ]);
        await era.printAndWait([
          'Но при этом в голове у ',
          you.get_colored_name(),
          ' снова и снова всплывает одна картинка: кажется, там та, кого зовут ',
          tachyon.get_colored_name(),
          ', — эта самая ',
          tachyon.uma_sex_title,
          '…',
        ]);
        await era.printAndWait('Как она без конца выпрашивает бэнто???');
        await era.printAndWait([
          'Опомнившись, ',
          you.get_colored_name(),
          ' обнаруживает, что уже предлагает контракт, а слушает это предложение ',
          tachyon.sex,
          ' сама',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…Слушай, разве контракт предлагают вот так, с ходу? Тут ведь на кону вся жизнь, которую проживёт ',
          tachyon.uma_sex_title,
          ', — не думаешь, что стоило бы отнестись серьёзнее?',
        ]);
        era.printButton('「У меня чувство, что мы отлично сработаемся」', 1);
        await era.input();
        await era.printAndWait([
          'Едва ',
          you.get_colored_name(),
          ' договорил(а), как понял(а): всё пропало',
        ]);
        await era.printAndWait(
          'О чём ты вообще думаешь? Пусть от неё и веет чем-то знакомым, но так вот сразу контракт не предлагают!!',
        );
        await era.printAndWait(
          'Всё, конец: мало того что откажут, так ещё и высмеют как следует…',
        );
        era.println();
        await era.printAndWait([
          'Так и есть: та, чьё имя ',
          tachyon.get_colored_name(),
          ', — эта ',
          tachyon.uma_sex_title,
          ' сначала опешила, потом расхохоталась, а потом…',
        ]);
        await tachyon.say_and_wait('Можно');
        era.println();
        await era.printAndWait('Ну вот, так и знал(а)…');
        await era.printAndWait('?????');
        await era.printAndWait([
          you.get_colored_name(),
          ' невольно смотрит на неё с целым лицом вопросительных знаков',
        ]);
        await era.printAndWait([
          'А ',
          tachyon.sex,
          ' вытирает выступившие от смеха слёзы и говорит',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Не знаю почему, но у меня то же чувство… Хотя откуда оно берётся, надо будет обязательно выяснить,',
        );
        await tachyon.say_and_wait(
          'Но, по-моему, ты не плохой человек, а сверх того — точно человек очень интересный…',
        );
        await tachyon.say_and_wait(
          'Хе-хе, так что прошу любить и жаловать, тренер… нет, свинка-кун',
        );
        era.println();
        await era.printAndWait('「Свинка-кун」');
        await era.printAndWait([
          tachyon.sex,
          ' вдруг переиначила обращение, и от этого делается как-то не по себе, даже слегка страшно…',
        ]);
        await era.printAndWait([
          'Всё-таки «подопытная свинка» — прозвище так себе, а если добавить, что ',
          tachyon.sex,
          ' выглядит как форменный маньяк от науки…',
        ]);
        await era.printAndWait([
          'Но кроме этого ',
          you.get_colored_name(),
          ' чувствует ещё и нотку какой-то близости',
        ]);
        era.printButton('「Прошу любить и жаловать, Агнес Тахи… Тахион」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_actual_name(),
          ' познакомился(ась) с ',
          tachyon.get_colored_name(),
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  '74-reject-2': (() => {
    const title = 'Время повернуло вспять';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, taste, minoru, you) => {
      await era.printAndWait('Будто так и должно было быть');
      await era.printAndWait([
        you.get_colored_name(),
        ' и необъяснимо знакомая рыжая ',
        tachyon.uma_sex_title,
        ' — ',
        tachyon.get_colored_name(),
        ' — заключили контракт',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' решает, что контракт надо зарегистрировать, и отправляется к ',
        minoru.get_colored_name(),
        ' и ',
        taste.get_colored_name(),
      ]);
      await era.printAndWait([
        '…Почему ',
        minoru.couple_title,
        ' смотрит на тебя такими печальными глазами',
      ]);
      await minoru.say_and_wait('Понимаю. Опять зелье той девочки, да…');
      await era.printAndWait('В смысле? Какой ещё девочки?');
      await taste.say_and_wait([
        'Крепись! Я верю, что тренер ',
        you.actual_name,
        ' быстро вернёт себе память',
      ]);
      await era.printAndWait([
        'Это ещё что значит… ',
        minoru.couple_title,
        ' знает, что ',
        you.get_colored_name(),
        ' потерял(а) память? Неужели у ',
        you.get_colored_name(),
        ' потеря памяти или что-нибудь в этом роде — обычное дело?',
      ]);
      era.println();
      await era.printAndWait('Ничего не понятно… ну и пусть будет так');
      await era.printAndWait([
        'Как бы то ни было, ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' — воспитание началось!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-reject-3': (() => {
    const title = 'Остановившиеся часы';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        'Итак… для начала поставим опыт на притирку в паре, ',
        callname,
        ', смотри как следует, как я бегу, хе-хе',
      ]);
      era.println();
      await era.printAndWait('И всё-таки… что-то здесь не так');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' и её бег… Глядя, как ',
        tachyon.sex,
        ' несётся по дорожке, ты понимаешь: что-то не так',
      ]);
      await era.printAndWait(
        'Бежит ведь быстро, бежит ведь так, что дух захватывает',
      );
      await era.printAndWait([
        'Но ',
        you.get_colored_name(),
        ' сейчас не может об этом думать',
      ]);
      await era.printAndWait(
        'Да, быстро, да, ослепительно, но, кажется, дело не только в этом',
      );
      await era.printAndWait('Кажется… такой бег тебе уже доводилось видеть');
      await era.printAndWait([
        'Точно свет на поверхности воды, оно дразнит где-то в глубине сознания у ',
        you.get_colored_name(),
        ', не даёт покоя,',
      ]);
      await era.printAndWait([
        'но стоит ',
        you.get_colored_name(),
        ' рвануться вверх, к поверхности, как оно исчезает без следа',
      ]);
      era.println();
      await you.say_and_wait('Как странно…', true);
      era.println();
      await era.printAndWait([
        'И как раз когда ',
        you.get_colored_name(),
        ' в досаде чешет затылок…',
      ]);
      era.printButton('「!?」', 1);
      await era.input();
      await era.printAndWait(
        'На Тренировочном поле вдруг начинается что-то странное',
      );
      await era.printAndWait([
        'Та, что обещала всего лишь показать свой бег, — ',
        tachyon.get_colored_name(),
        ' — понемногу разгоняется всё сильнее',
      ]);
      await era.printAndWait('То, что было… это была просто разминка?');
      await era.printAndWait([
        'В обычной спортивной форме ',
        tachyon.get_colored_name(),
        ' легко несётся по Тренировочному полю',
      ]);
      await era.printAndWait('Всё быстрее, всё быстрее');
      await era.printAndWait([
        'Почему-то в груди у ',
        you.get_colored_name(),
        ' вдруг поднимается тревожная спешка',
      ]);
      await era.printAndWait('Что-то вроде нетерпения и острой необходимости');
      era.println();
      await era.printAndWait([
        'Так гнать — а ноги, которыми бежит ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        ', разве выдержат?',
      ]);
      await era.printAndWait('…? А почему бы им не выдержать?');
      await era.printAndWait([
        'Потому что ноги, на которых бежит ',
        tachyon.sex,
        '…',
      ]);
      await era.printAndWait([tachyon.sex, ' — её ноги ведь… такие хрупкие']);
      await era.printAndWait([
        'Откуда ты вообще знаешь, что ',
        tachyon.sex,
        ' слаба ногами',
      ]);
      era.println();
      await era.printAndWait('Непонятно. Но понять хочется');
      await era.printAndWait([
        'Жажда докопаться до правды гонит ',
        you.get_colored_name(),
        ' думать и думать',
      ]);
      await era.printAndWait([
        'И словно вторя тому, как быстро думает ',
        you.get_colored_name(),
        ',',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' тоже разгоняется дальше',
      ]);
      await era.printAndWait([
        'До самого… предела, до которого простирается сознание ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('То самое главное, что спрятано в глубине памяти');
      await era.printAndWait([
        tachyon.uma_sex_title,
        ' и её предельная скорость',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' знает, каков предел, отпущенный ',
        tachyon.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        '— ',
        tachyon.get_colored_name(),
        ' и её предельная скорость',
      ]);
      era.println();
      await era.printAndWait([
        'Та ',
        tachyon.get_colored_name(),
        ', что перед глазами, понемногу сливается с неуловимым светом в глубине памяти',
      ]);
      await era.printAndWait([
        'И тогда ',
        you.get_colored_name(),
        ' пробует в последний раз — тянет руку к поверхности воды',
      ]);
      await era.printAndWait('— Дотянулся(ась)');
      await era.printAndWait('— Вспомнил(а)');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — та, за кого отвечает ',
        you.get_colored_actual_name(),
        ', подопечная ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait('Вспомнилась встреча, вспомнились забеги, и ещё…');
      era.println();
      await era.printAndWait('И ещё…?');
      await era.printAndWait('Не знаю');
      await era.printAndWait('Забыл(а)');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — твоя подопечная ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        you.get_colored_actual_name(),
        ' — тот, кого ',
        tachyon.get_colored_name(),
        ' зовёт свинкой-куном',
      ]);
      await era.printAndWait('Пока что всё верно');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' и всё до мелочей, что было в её забегах',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' бежит — и каждую мелочь этого бега ты помнишь до последней чёрточки',
      ]);
      await era.printAndWait('Но…');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' — что она любит']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — какие у неё привычки',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — чем она увлекается',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' — как она одевается в жизни',
      ]);
      await era.printAndWait(
        'Кроме еды: вкусовые пристрастия почему-то остались в памяти — наверное, потому что связаны с режимом перед скачками,',
      );
      await era.printAndWait(
        'А всё прочее — будто ты с этим никогда и не сталкивался(ась)',
      );
      era.println();
      await era.printAndWait('Неестественно');
      await era.printAndWait(
        'Только и остаётся чувствовать, что это неестественно',
      );
      await era.printAndWait('Столько знакомы, столько всего вместе было');
      await era.printAndWait([
        'Как ',
        tachyon.sex,
        ' бежит и как выступает — ты знаешь наперечёт',
      ]);
      await era.printAndWait([
        'И всё же будто совсем не знаешь, кто такая ',
        tachyon.get_colored_name(),
        ' — эта ',
        tachyon.uma_sex_title,
        '.',
      ]);
      era.println();
      await tachyon.say_and_wait(['Фух… Ну что, свинка-кун, как тебе?']);
      era.printButton('「Отличный бег!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' машинально отвечает то, что, судя по памяти, отвечал(а) уже много раз',
      ]);
      await era.printAndWait('Всё равно кажется, что-то не так');
      await era.printAndWait('Непонятно, что вообще происходит');
      await era.printAndWait('Но…');
      era.println();
      await era.printAndWait('В тот миг, когда всё это вспомнилось');
      await era.printAndWait(
        'В душе полная уверенность: ты точно услышал(а) одну фразу',
      );
      era.println();
      era.printButton(
        `「На этот раз не обмани того, что чувствует ${tachyon.sex}」`,
        1,
      );
      await era.input();
      await era.printAndWait('Что бы это значило… стоит как следует подумать');
    };
    f.title = title;
    return f;
  })(),
  '74-betray': (() => {
    const title = [{ color: buff_colors[3], content: 'Зелье ведьмы' }];
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' вдруг чувствует усталость',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' суёт пробирку обратно в руки ',
        tachyon.get_colored_name(),
        '.',
      ]);
      era.println();
      await tachyon.say_and_wait(['…………', callname, '?']);
      era.printButton('「Я устал(а), хочешь пить — пей сама」', 1);
      await era.input();
      await era.printAndWait(
        'С какого момента всё это началось? В чём причина?',
      );
      await era.printAndWait([
        'Может, ',
        you.get_colored_name(),
        ' больше не выносит ',
        tachyon.get_colored_name(),
        ' — эту ',
        tachyon.uma_sex_title,
        ' с её вечными капризами',
      ]);
      await era.printAndWait([
        'А может, ',
        you.get_colored_name(),
        ' уже потерял(а) терпение к ',
        tachyon.get_colored_name(),
        ' окончательно',
      ]);
      await era.printAndWait([
        'Или, может, ',
        you.get_colored_name(),
        ' решил(а), что это очередная шутка — ',
        tachyon.sex,
        ' ведь вечно шутит',
      ]);
      await era.printAndWait([
        'В конце концов, ',
        tachyon.sex,
        ' же сама и хочет, чтобы ты сдох(ла) — эта дура что, издевается?',
      ]);
      era.println();
      await era.printAndWait([
        'Как бы то ни было, ',
        you.get_colored_name(),
        ' пихает пробирку обратно: пусть пьёт сама ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' даже не думает о том, правда ли это зелье способно убить',
      ]);
      await era.printAndWait(
        'Нет, если оно и правда убивает — может, оно и к лучшему',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' ловит себя даже на такой мрачной мысли',
      ]);
      era.println();
      await tachyon.say_and_wait('…А, вот как… я поняла');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' не устраивает никакой бурной сцены',
      ]);
      await era.printAndWait([
        'Обычно ',
        tachyon.sex,
        ' ведёт себя совсем не так, и от этой непривычной выходки ',
        you.get_colored_name(),
        ' даже слегка оживляется',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' видит, как наконец поднимает голову ',
        tachyon.sex,
        ' — на лице облегчённая, освобождённая улыбка',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…И правда, ответов у этой задачи всегда было больше двух',
      );
      await tachyon.say_and_wait(
        'Кроме жизни и смерти есть третий вариант: чтобы умер тот, кто эту задачу задал. Верно?',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), ' невольно хмурится']);
      await era.printAndWait('Болтовни много. Пьёшь или нет?');
      await era.printAndWait([
        '…Нет, по сути, эта привыкшая опаивать других зельями ',
        tachyon.phy_sex_title.substring(0, 1),
        ',',
      ]);
      await era.printAndWait(
        'сама наверняка ни разу и не думала глотнуть своего зелья',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' вздыхает над очередным балаганом и собирается уйти из лаборатории',
      ]);
      era.drawLine();
      await era.printAndWait([
        'И в тот самый миг, когда ',
        you.get_colored_name(),
        ' уже разворачивается к двери —',
      ]);
      era.println();
      await tachyon.say_and_wait('М-мгх…!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' получает поцелуй силой',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' пытается вырваться, но человеку не тягаться с силой, какая есть у ',
        tachyon.uma_sex_title,
        ' — даже если этого человека зовут ',
        you.get_colored_name(),
        ' и зелья перекраивали это тело не раз',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' просовывает язык между губ ',
        you.get_colored_name(),
        ' и без остановки хозяйничает во рту у ',
        you.get_colored_name(),
        ' и ведёт за собой',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' с наслаждением обводит языком зубы ',
        you.get_colored_name(),
        ' и кончик языка ',
        you.get_colored_name(),
        ' и внутреннюю сторону дёсен ',
        you.get_colored_name(),
        ' — но не это цель, которой добивается ',
        tachyon.sex,
        ' на самом деле',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' добивается другого: перегнать то зелье, что ещё не проглочено, то самое, от которого человек «исчезает», прямо в рот к ',
        you.get_colored_name(),
        ' — вот куда',
      ]);
      era.println();
      await you.say_and_wait('Мгх…! М-м-мх…!!!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' отчаянно бьётся, извивается всем телом, но остановить её не выходит',
      ]);
      await era.printAndWait([
        'Как ни бьётся ',
        you.get_colored_name(),
        ' — всё впустую: зелье поделено пополам, и одна половина теперь внутри ',
        you.get_colored_name(),
        ' — а вторая внутри неё',
      ]);
      era.println();
      await you.say_and_wait('Чёрт…!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' не сдерживается и ругается вслух',
      ]);
      await era.printAndWait([
        'О чём вообще думает эта ',
        tachyon.phy_sex_title.substring(0, 1),
        ' — помирать, так с собой кого-нибудь утащить?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' свирепо смотрит туда, где стоит ',
        tachyon.sex,
        ', уже готов(а) разразиться бранью… но в самый миг, когда слова должны сорваться, замирает',
      ]);
      era.println();
      era.println();
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' плачет']);
      await era.printAndWait([
        'Нет… точнее, ',
        tachyon.sex,
        ' льёт слёзы и изо всех сил пытается выдавить улыбку, но выходит улыбка страшнее любого плача',
      ]);
      await era.printAndWait([
        'С того дня, как ',
        you.get_colored_name(),
        ' и ',
        tachyon.sex,
        ' познакомились, впервые видно, до чего ',
        tachyon.sex,
        ' растрёпана и жалка',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'Ха… ха-ха-ха, ',
        callname,
        ', прости, я тебя обманула',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        ' пытается говорить как ни в чём не бывало, но сорванный всхлипами голос делает это почти невозможным',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Это, между прочим, вовсе не яд… наоборот, это зелье «начать заново», вот так',
      );
      era.println();
      await era.printAndWait([
        'Хоть ',
        tachyon.sex,
        ' так и говорит, но рука, которой ',
        tachyon.sex,
        ' всё ещё держит пробирку, сейчас беспрерывно дрожит, и потому ',
        you.get_colored_name(),
        ' не верит ни единому слову, которое говорит ',
        tachyon.sex,
        ' сейчас',
      ]);
      era.println();
      await era.printAndWait(
        '…Не веришь, да? Ничего, подействует — и сам(а) узнаешь',
      );
      era.println();
      await era.printAndWait('Ты издеваешься…!');
      await era.printAndWait([
        you.get_colored_name(),
        ' хочет крикнуть это вслух, но обнаруживает, что тело уже не слушается',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          'И тут остатки зелья во рту у ',
          you.get_colored_name(),
          ' вдруг меняют вкус: бесцветное и безвкусное на глотке, теперь оно на вкус…',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            'Надо же, последний в жизни поцелуй — и на вкус как свинина с рисом',
          );
        } else {
          await tachyon.say_and_wait(
            'Надо же, первый поцелуй — и на вкус как свинина с рисом',
          );
        }
        await era.printAndWait([
          you.get_colored_name(),
          ' вспоминает шоколад, полученный на День святого Валентина',
        ]);
        await era.printAndWait([
          'С того самого дня эта ',
          tachyon.uma_sex_title,
          ' без конца мучает тебя своими странными зельями',
        ]);
        await era.printAndWait(
          'И каждый раз хохочет, глядя, как ты глотаешь очередное и что с тобой потом делается',
        );
        await era.printAndWait(
          'И что теперь плохого в том, что терпеть всё это больше не хочется?',
        );
      }
      await era.printAndWait([
        'Да, поначалу ',
        you.get_colored_name(),
        ' и правда находил(а) любопытной манеру бега, которой отличается ',
        tachyon.get_colored_name(),
        ' — эта ',
        tachyon.uma_sex_title,
        ' — и мечту, которую вынашивает ',
        tachyon.sex,
        ' сама',
      ]);
      await era.printAndWait([
        'Да, ',
        you.get_colored_name(),
        ' когда-то искренне хотел(а), чтобы ',
        tachyon.sex,
        ' не осталась одна, чтобы ',
        tachyon.sex,
        ' была под защитой, чтобы ',
        tachyon.sex,
        ' дошла до самой своей мечты',
      ]);
      await era.printAndWait([
        'Но ',
        you.get_colored_name(),
        ' сыт(а) по горло',
      ]);
      await era.printAndWait([
        'На одной чаше весов — злость, обида, тоска, отвращение, и всему виной ',
        tachyon.sex,
        '. Эта чаша уже перевесила вторую, где надежда, любовь и восхищение, а будила их всё та же ',
        tachyon.sex,
        ' сама',
      ]);
      era.println();
      await era.printAndWait([
        'Теперь ',
        you.get_colored_name(),
        ' хочет одного: поскорее отделаться от этой ',
        tachyon.uma_sex_title,
        ' — а вместо этого приходится глотать такую отраву,',
      ]);
      await you.say_and_wait(
        'Мне некогда играть с такой, как ты, в Ромео и Джульетту!',
        true,
      );
      await era.printAndWait([
        'Но говорить не выходит, и ',
        you.get_colored_name(),
        ' может только молча слушать, пока ',
        tachyon.get_colored_name(),
        ' не договорит, и хотя бы сверлить злобным взглядом ',
        tachyon.get_colored_name(),
        ' — хоть какая-то отдушина для злости',
      ]);
      era.println();
      await tachyon.say_and_wait('Если честно, мне правда очень страшно');
      await tachyon.say_and_wait(
        'Любить кого-то и не знать, любит ли он тебя в ответ — это правда очень страшно',
      );
      await tachyon.say_and_wait(
        'Волнует сильнее любого результата опыта, гонит сердце быстрее любого результата забега',
      );
      await tachyon.say_and_wait('Если честно, мне правда очень страшно');
      await tachyon.say_and_wait(
        'А если он любит не меня, а лишь «кое-что», что у меня есть,',
      );
      await tachyon.say_and_wait(
        'что тогда делать. А если в его глазах только моя «мечта», а не я сама — что тогда',
      );
      await tachyon.say_and_wait(
        'Я всё время боялась именно этого… и забыла о самом главном, о самой страшной возможности',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' кривится в усмешке, насмехаясь над собой — слишком наивной, слишком благодушной',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Возможность того, что он попросту её не любит, не любит в ней ничего, включая, но не ограничиваясь, мечту',
      );
      era.println();
      await era.printAndWait([
        'Наконец ',
        tachyon.get_colored_name(),
        ' не удерживает на лице улыбку — если это вообще можно назвать улыбкой — и та рассыпается',
      ]);
      await era.printAndWait('Лицо становится откровенно плачущим');
      era.println();
      await tachyon.say_and_wait(
        'Вот оно как… значит, так и чувствуется несчастная любовь… у-у… как тяжело… как страшно… сердце будто вот-вот расколется…',
      );
      await tachyon.say_and_wait(
        'Вот оно как… меня бросили… как больно… как больно сердцу…',
      );
      await tachyon.say_and_wait(
        'Почему… почему всего лишь оттого, что один человек тебя не любит… почему сердцу так тяжело… у-у-у… не хочу…',
      );
      await tachyon.say_and_wait(
        'Не хочу… знала бы, что будет так больно, ни за что бы не влюблялась… в следующий раз, в следующий раз… не надо… больше никогда… как больно…',
      );
      await tachyon.say_and_wait([
        callname,
        '…',
        callname,
        '… где ты… почему я тебя не нахожу… куда ты делся…',
      ]);
      await tachyon.say_and_wait([
        'Почему, когда мне так больно, тебя нет рядом… ',
        callname,
        '… я больше не буду ставить на тебе опыты… это всё я виновата… так что… так что вернись, ладно…',
      ]);
      await tachyon.say_and_wait(
        'Здесь так страшно… забери меня обратно, обратно в нашу лабораторию… я больше не буду капризничать…',
      );
      await tachyon.say_and_wait([
        'Одежду буду стирать сама… коробки из-под бэнто перестану бросать где попало… ',
        callname,
        '… ',
        callname,
        '…',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит на ',
        tachyon.get_colored_name(),
        ' — та с какого-то момента будто забыла, кто она такая',
      ]);
      await era.printAndWait([
        'Смотрит прямо на тебя, а всё зовёт и зовёт: ',
        callname,
        ', будто ищет кого-то, кого здесь нет',
      ]);
      await era.printAndWait(['Нет… ', callname, '…?']);
      await era.printAndWait([
        'Кто это? ',
        you.get_colored_name(),
        ' ведь ни разу не слышал(а) этого имени, разве нет?',
      ]);
      await era.printAndWait([
        'А эта ',
        tachyon.uma_sex_title,
        ' перед глазами — кто она такая, и знакома ли вообще ',
        tachyon.sex,
        ' тебе?',
      ]);
      era.println();
      await era.printAndWait('Голова болит, болит, раскалывается');
      await era.printAndWait('Чем больше думаешь, тем больше забываешь');
      era.println();
      await era.printAndWait([
        'И наконец, среди воплей, что снова и снова зовут ',
        callname,
        ' и захлёбываются, в бездну проваливается ',
        you.get_colored_name(),
        ' вместе со всем своим сознанием',
      ]);
      era.setToBottom();

      await tachyon.say_as_unknown_and_wait('…Эй');
      await tachyon.say_as_unknown_and_wait('…Эй, просыпайся');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' просыпается']);
      await era.printAndWait([
        'Чей-то голос будит, и ',
        you.get_colored_name(),
        ', открыв глаза, видит незнакомый потолок',
      ]);
      era.printButton('「Где я?」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait('…Это моя лаборатория');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' поворачивается туда, откуда шёл голос',
      ]);
      await era.printAndWait([
        'Перед тобой каштановая ',
        tachyon.uma_sex_title,
        ': короткая аккуратная стрижка и белый халат ясно говорят, что ',
        tachyon.sex,
        ' из исследователей,',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' разглядывает изучающим взглядом ',
        you.get_colored_name(),
        ', и почему-то ',
        you.get_colored_name(),
        ' чувствует, как по спине бегут мурашки',
      ]);
      era.printButton('「Ты кто?」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        'Это мне полагается задать такой вопрос… ты кто такой? Почему ты валяешься в моей лаборатории?',
      );
      await era.printAndWait([
        'Каштановая ',
        tachyon.uma_sex_title,
        ' говорит',
      ]);
      await era.printAndWait([
        'Только теперь ',
        you.get_colored_name(),
        ' замечает, что до сих пор лежит на полу, и торопливо поднимается',
      ]);
      era.printButton(`「Я — ${you.actual_name}, тренер」`, 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '…О? И зачем же, тренер-кун, ты тут разлёгся',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' пробует вспомнить, чем вообще занимался(ась) до этого ',
        you.get_colored_name(),
        ' — и не вспоминает ровным счётом ничего',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait(
        '…Не помнишь — и ладно. Я почему-то тоже будто память потеряла: не могу вспомнить, чем сама только что занималась…',
      );
      await tachyon.say_as_unknown_and_wait([
        'Ладно, не будем об этом. В общем, я — ',
        tachyon.get_colored_name(),
        ', тренер-кун, прошу любить и жаловать',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name()]);
      await era.printAndWait([
        'Звучит и правда странно… впрочем, имена у ',
        tachyon.uma_sex_title,
        ' почти все такие, а придираться к чужим именам нехорошо',
      ]);
      await era.printAndWait([
        'Но почему-то чутьё подсказывает ',
        you.get_colored_name(),
        ': держись подальше от этой ',
        tachyon.uma_sex_title,
        ', что стоит перед тобой',
      ]);
      era.println();
      era.printButton(
        `「Что ж, на сегодня закончим. Прошу прощения, что вломился(ась) в твою лабораторию; позже приду извиниться как следует. Пусть ${tachyon.name} меня простит」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '…Нет, не нужно. Если вдуматься, чтобы двое разом лишились памяти…',
      );
      await tachyon.say_and_wait(
        'Ладно, пусть будет так. И приходить специально потом не надо, тренер-кун',
      );
      era.println();
      await era.printAndWait([
        'И вот ',
        you.get_colored_name(),
        ' покидает лабораторию ',
        tachyon.get_colored_name(),
        ' и уходит',
      ]);
      await era.printAndWait([
        'Перед самой дверью ',
        you.get_colored_name(),
        ' вдруг оборачивается',
      ]);
      era.println();
      await tachyon.say_and_wait('М? Тренер-кун, ещё что-то?');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' чувствует: стоит переступить этот порог — и, наверное, больше никогда не будет ничего общего с этой ',
        tachyon.uma_sex_title,
        ', что стоит здесь',
      ]);
      era.println();
      await you.say_and_wait('Ничего. Наверное, просто показалось');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' выходит за дверь лаборатории — на этот раз без малейших колебаний',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = 'Now or Forever';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} scarlet 大和赤骥
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} shakur 空中神宫
     * @param {CharaTalk} pocket 森林宝穴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} t_call_s 爱丽速子对空中神宫的称呼
     * @param {PrintedSpan} t_call_p 爱丽速子对森林宝穴的称呼
     */
    const f = async (
      tachyon,
      scarlet,
      digital,
      coffee,
      shakur,
      pocket,
      you,
      callname,
      t_call_c,
      t_call_s,
      t_call_p,
    ) => {
      await tachyon.say_and_wait([callname, '～～']);
      await tachyon.say_and_wait([callname, '～～～?']);
      await tachyon.say_and_wait([callname, '!!']);
      await tachyon.say_and_wait([
        callname,
        '… а, точно, ',
        callname,
        ' же сегодня, кажется, не придёт',
      ]);
      await tachyon.say_and_wait([
        'Кх… но если не испытать зелье по свежести, весь эффект пропадёт. Ничего не поделаешь, ',
        t_call_c,
        '~~',
      ]);
      await tachyon.say_and_wait([
        '…Э? Значит, и ',
        t_call_c,
        ' тоже отсутствует?!',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' произносит это в лаборатории с наигранно глупым видом',
      ]);
      await tachyon.print_and_wait([
        'Жаль только, в лаборатории нет ни души — некому поддеть в ответ, как бы ',
        tachyon.sex,
        ' ни напрашивалась',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ' — ладно, допустим… но и ',
        t_call_c,
        ' почему-то тоже нет… или, скажем, ',
        t_call_p,
        '… ',
        t_call_s,
        '…',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'Если подумать, дело не только в ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        pocket.get_colored_name(),
        ', ',
        shakur.get_colored_name(),
        ', ',
        digital.get_colored_name(),
        ' — и даже любимую младшую, ',
        scarlet.get_colored_name(),
        ' — в последнее время почти не видно',
      ]);
      await tachyon.print_and_wait([
        'Причина… умная ',
        tachyon.get_colored_name(),
        ', опираясь на невиданный ум, каким наделена ',
        tachyon.sex,
        ', и на объективность выше всякого «сверх-я», разумеется, догадывается обо всём без труда',
      ]);
      await tachyon.print_and_wait('Именно…');
      era.println();
      await tachyon.say_and_wait([
        '…Так и есть: это потому, что я всё время говорю про ',
        callname,
        ' и его дела',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'Хотя, если честно, речь не просто о возлюбленном по прозвищу морская свинка, а точнее — о том, что между нами происходит; а если совсем прямо, то это называется хвастаться своей любовью',
      );
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.print_and_wait([
          'Если бы разговор держался на уровне нежностей и смутных чувств, то окружающие, во всяком случае ',
          scarlet.get_colored_name(),
          ' и ',
          digital.get_colored_name(),
          ' слушали бы с превеликим удовольствием,',
        ]);
        await tachyon.print_and_wait([
          'Но разговор вечно сползает к постельным делам, так что неудивительно, что от таких тем заливается краской ',
          tachyon.couple_title,
          ' сама',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        'Даже ',
        coffee.get_colored_name(),
        ' не выдерживает и спрашивает',
      ]);
      await tachyon.print_and_wait(
        'Почему вы ни на минуту не перестаёте хвастаться своими чувствами',
      );
      era.println();
      await tachyon.say_and_wait('…Но я же просто не могу удержаться');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' бормочет это в пустой комнате',
      ]);
      era.println();
      await tachyon.print_and_wait('Радость поцелуя с любимым');
      await tachyon.print_and_wait('Жар объятий с тем, кто дан судьбой');
      await tachyon.print_and_wait(
        'Нежность близости с тем, с кем свела добрая связь',
      );
      await tachyon.print_and_wait(
        'Тоскующая любовь к тому, с кем держишься до конца',
      );
      era.println();
      await tachyon.print_and_wait(
        'Эти чувства, эти слова — если их никому не выплеснуть',
      );
      await tachyon.print_and_wait(
        'то этот чудовищный жар выжжет меня изнутри дотла',
      );
      era.println();
      await tachyon.print_and_wait('Так люблю');
      await tachyon.print_and_wait('Такой милый');
      await tachyon.print_and_wait('Такой красивый');
      await tachyon.print_and_wait('Такой обворожительный');
      await tachyon.print_and_wait('Такой статный');
      await tachyon.print_and_wait('Такой лихой');
      await tachyon.print_and_wait('Такой сексуальный');
      await tachyon.print_and_wait('Такой дьявольски притягательный');
      era.println();
      await tachyon.print_and_wait([
        'Любой эпитет — и всё равно мало, ведь речь про то, каков ',
        you.sex,
        ' на самом деле',
      ]);
      await tachyon.print_and_wait([
        'Для рассудочной ',
        tachyon.get_colored_name(),
        ' помешательство на любви — несомненно, глупость',
      ]);
      await tachyon.print_and_wait(
        'И правда, внутри всё время звучит голос, который насмехается — насмехается надо мной, выставляющей себя такой дурой',
      );
      await tachyon.print_and_wait('Но…');
      era.println();
      await tachyon.print_and_wait(
        'Если рассудок требует отбросить такое чувство',
      );
      await tachyon.print_and_wait([
        'Если объективность требует любить слабее — любить того, кем ',
        you.sex,
        ' является',
      ]);
      era.println();
      await tachyon.print_and_wait('Тогда я лучше откажусь от рассудка');
      await tachyon.print_and_wait('И стану шутом, пляшущим в пламени страсти');
      era.println();
      await tachyon.say_and_wait('А-а… я, наверное, сошла с ума');
      era.println();
      await tachyon.print_and_wait('Всё верно');
      await tachyon.print_and_wait('Такая, как сейчас, я точно сумасшедшая');
      await tachyon.print_and_wait(
        'Даже если не вспоминать, какой я была раньше: по сравнению с обычными парами моя любовь дошла до настоящего безумия',
      );
      await tachyon.print_and_wait(
        'Но безумна я или нет — разве это не решено давным-давно',
      );
      era.println();
      await tachyon.print_and_wait([
        'Весь мир знает: ',
        tachyon.get_colored_name(),
        ' — безумная ',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait([
        'Но ',
        tachyon.get_colored_name(),
        ' плевать хотела на весь мир',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        ' знает, что ',
        tachyon.get_colored_name(),
        ' именно такая ',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait([
        'А ',
        tachyon.get_colored_name(),
        ' не дорожит никем, кроме одного, и этот один — ',
        you.sex,
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' боится только одного: что однажды ',
        you.sex,
        ' её возненавидит',
      ]);
      await tachyon.print_and_wait([
        'Мои повадки — под стать ли они тому, кем ',
        you.sex,
        ' является?',
      ]);
      await tachyon.print_and_wait([
        'Моя любовь — ',
        you.sex,
        ' её вообще примет?',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' — может ли она стать тем, с кем плечом к плечу пройдёт всю дорогу ',
        you.sex,
        ' сам',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'А-а, в конце концов всё сводится вот к этому',
      );
      era.println();
      await tachyon.print_and_wait(
        'Горящая любовь ослепительна — и так же мимолётна',
      );
      await tachyon.print_and_wait('Такая любовь долго не длится');
      await tachyon.print_and_wait(
        'Я сейчас — всего лишь мотылёк, увязший в свете пламени',
      );
      era.println();
      await tachyon.print_and_wait('Хочу');
      await tachyon.print_and_wait('Хочу');
      await tachyon.print_and_wait('Хочу нерушимой любви, хочу вечной любви');
      await tachyon.print_and_wait(
        'Хочу любви как алмаз — вечной и сверкающей',
      );
      await tachyon.print_and_wait([
        'Хочу любви, при которой само собой разумеется быть рядом с тем, кем ',
        you.sex,
        ' является',
      ]);
      era.println();
      await tachyon.print_and_wait('Но такая, как я, — правда ли я гожусь');
      await tachyon.print_and_wait(
        'Правда ли я тот человек, которому можно доверить всю жизнь?',
      );
      await tachyon.print_and_wait([
        you.sex,
        ' готов пообещать, что будет любить меня такую вечно',
      ]);
      await tachyon.print_and_wait([
        'А смогу ли я вечно любить его таким, каким ',
        you.sex,
        ' и есть',
      ]);
      era.println();
      tachyon.say('Я…');
      era.printButton('Выбрать вечность (поднять отношения)', 1, {
        buttonType: '',
        color: tachyon.color,
      });
      era.printButton('Продолжать гореть (пока не поднимать)', 2, {
        buttonType: '',
        color: tachyon.color,
      });
      const ret = await era.input();
      if (ret === 1) {
        await tachyon.print_and_wait([
          'Стоять плечом к плечу, и рядом — ',
          you.sex,
          ' сам',
        ]);
        await tachyon.print_and_wait([
          'Взяться за руки, и держать за руку будет ',
          you.sex,
          ' сам',
        ]);
        await tachyon.print_and_wait([
          'Построить семью, и строить её будет ',
          you.sex,
          ' сам',
        ]);
        await tachyon.print_and_wait([
          'Дать начало новой жизни, и отцом ей станет ',
          you.sex,
          ' сам',
        ]);
        era.println();
        await tachyon.print_and_wait('Хочу… устойчивой, спокойной любви');
        await tachyon.print_and_wait(
          'Ответ настолько прост, что я сама испугалась',
        );
        era.println();
        await tachyon.print_and_wait([
          'Возвращаться с работы и видеть, что у двери уже ждёт ',
          you.sex,
        ]);
        await tachyon.print_and_wait([
          'А если освобожусь раньше — приготовить еду и ждать, пока не вернётся ',
          you.sex,
          ' сам',
        ]);
        await tachyon.print_and_wait([
          'Готовить я не умею, но ради того, кем ',
          you.sex,
          ' является, ',
          tachyon.get_colored_name(),
          ' готова пустить руки, когда-то поклявшиеся служить науке, на сковородку и кастрюлю',
        ]);
        await tachyon.print_and_wait(
          'В выходной выбираться куда-нибудь вдвоём — всё равно куда',
        );
        await tachyon.print_and_wait(
          'Парк, мебельный, а то и лавка лабораторной посуды или магазин химических реактивов',
        );
        await tachyon.print_and_wait([
          'Ссориться с тем, кем ',
          you.sex,
          ' является, из-за такой ерунды, как место для дивана',
        ]);
        await tachyon.print_and_wait(
          'Двое упрямцев, до самого вечера не желающих признать вину, в конце концов мирятся из-за одного тёплого объятия — и не понять, кто первым его начал',
        );
        await tachyon.print_and_wait([
          'В день, когда новый дом будет готов, наверняка вымотаешься так, что даже ',
          tachyon.uma_sex_title,
          ' со всей своей выносливостью не устоит',
        ]);
        await tachyon.print_and_wait([
          'Так хотелось понежиться в наконец достроенном доме, а вместо этого просто рухнуть в объятия, которые раскроет ',
          you.sex,
          ' сам, и уснуть прямо так',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await tachyon.print_and_wait(
            'В день, когда я забеременею, он точно обрадуется до изумления',
          );
          await tachyon.print_and_wait(
            'Но так сразу говорить нельзя, а то от вспышки, которую он выдаст, соседи пожалуются на шум',
          );
          await tachyon.print_and_wait(
            'Выбрать удачный момент — днём, за завтраком',
          );
          await tachyon.print_and_wait(
            'И как ни в чём не бывало сказать: 「Дорогой, ты станешь папой♡」',
          );
          await tachyon.print_and_wait(
            'Какое у него будет лицо в этот момент?',
          );
          await tachyon.print_and_wait(
            'Хочу, когда родится ребёнок, вместе с ним рассматривать наши фотографии',
          );
          await tachyon.print_and_wait(
            'Смотреть, как я тогда влюбилась в свой исходный подопытный образец',
          );

          await tachyon.print_and_wait(
            'Наверное, ребёнок решит, что папу жалко: мама вон как его изводит',
          );
          await tachyon.print_and_wait(
            'Правда, в постели изводят как раз маму♡',
          );
          await tachyon.print_and_wait(
            'Хочу, когда ребёнок вырастет и заведёт свою семью, утешать его, тихо плачущего под одеялом',
          );
          await tachyon.print_and_wait(
            '…А может, всё наоборот; может, я вдруг окажусь неожиданно любящей матерью',
          );
          era.println();
        }
        await tachyon.print_and_wait([
          'Не потому я выбрала быть вместе с тем, кем ',
          you.sex,
          ' является, что это интересно',
        ]);
        await tachyon.print_and_wait([
          'А потому, что каждый день рядом с тем, кем ',
          you.sex,
          ' является, оказывается таким интересным',
        ]);
        await tachyon.print_and_wait(
          'Пусть даже это скучная, пресная повседневность',
        );
        await tachyon.print_and_wait([
          'Стоит подумать, что рядом со мной будет ',
          you.sex,
          ', и я не могу сдержать невероятного предвкушения',
        ]);
        era.println();
        await you.say_and_wait(
          'Тахион! Говорят, ты меня искала. Что случилось?',
        );
        era.println();
        await tachyon.print_and_wait(
          'Кто-то добрый передал? Или это сердца отозвались друг другу?',
        );
        await tachyon.print_and_wait('Да неважно');
        await tachyon.print_and_wait(
          'Надо хорошенько подумать: как это сказать?',
        );
        await tachyon.print_and_wait('Мм… пусть будет так');
        era.println();
        await tachyon.say_and_wait([
          callname,
          ', я тут подумала: не пора ли нам… перейти на следующую ступень?',
        ]);
        await tachyon.print_and_wait(
          'В миг, когда слова прозвучали, будто послышался колокол церкви',
        );
      } else {
        await tachyon.print_and_wait('Вечность… значит?');
        era.println();
        await tachyon.print_and_wait('Не знаю');
        await tachyon.print_and_wait('Страшно и думать');
        era.println();
        await tachyon.print_and_wait('Смогу ли я стать таким спутником');
        await tachyon.print_and_wait([
          'Смогу ли я быть рядом всю жизнь с тем, кем ',
          you.sex,
          ' является',
        ]);
        era.println();
        await tachyon.print_and_wait([
          'В конце концов, ',
          tachyon.get_colored_name(),
          ' — эта ',
          tachyon.phy_sex_title,
          ' — правда ли способна стать таким спутником, такой парой, такой…',
        ]);
        await tachyon.print_and_wait('Возлюбленной?');
        era.println();
        await tachyon.print_and_wait('Я, которая не умеет готовить');
        await tachyon.print_and_wait('Я, которая тонет в себе самой');
        await tachyon.print_and_wait('Я с моим ленивым нравом');
        await tachyon.print_and_wait('Я, у которой нет терпения');
        era.println();
        await tachyon.print_and_wait('Сейчас с этим, может, ещё мирятся');
        await tachyon.print_and_wait('А что дальше');
        await tachyon.print_and_wait('А через десять лет?');
        await tachyon.print_and_wait('А через двадцать?');
        await tachyon.print_and_wait('А через шестьдесят, семьдесят?');
        era.println();
        await tachyon.print_and_wait(
          'Такое чувство — правда ли оно способно длиться вечно?',
        );
        era.println();
        await tachyon.print_and_wait('Не знаю');
        await tachyon.print_and_wait('Страшно и думать');
        era.println();
        await you.say_and_wait(
          'Тахион! Говорят, ты меня искала. Что случилось?',
        );
        era.println();
        await tachyon.print_and_wait(
          'Какой-то доброхот передал? Или это некстати отозвались сердца',
        );
        await tachyon.print_and_wait('…Да неважно');
        await tachyon.print_and_wait('Придавить. Заморозить. Запечатать');
        await tachyon.print_and_wait('Запечатать эту свою смехотворную мысль');
        era.println();
        await tachyon.say_and_wait('…Ничего');
        era.println();
        await tachyon.print_and_wait(
          'Пусть это пламя, зовущееся любовью, горит дальше, а топливом ему будут мои же тревоги и страхи',
        );
        await tachyon.print_and_wait(
          'Наверное, это и есть вечная кара, которую должна нести я, вечно нерешительная',
        );
        era.drawLine();
        await tachyon.print_and_wait([
          you.get_colored_name(),
          ' мотает головой, разгоняет странные мысли и без колебаний выходит за дверь',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = 'Tachyon';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, ', можешь позвать меня по имени?']);
      era.println();

      await era.printAndWait(['Имя?']);
      await era.printAndWait([
        you.get_colored_name(),
        ' с любопытством смотрит на ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Сегодня, стоит войти в комнату тренера, как ',
        tachyon.get_colored_name(),
        ' силой вжимает тебя в диван.',
      ]);
      await era.printAndWait([
        'Затем ',
        tachyon.sex,
        ' вытаскивает маленькую доску для тренировочных планов и принимает вид учительницы, готовой начать урок. Это… опять непонятно, что за представление.',
      ]);
      era.println();

      await tachyon.say_and_wait(['Ну давай, скорее, скорее, позови.']);

      era.printButton('「Агнес Тахион」', 1);
      await era.input();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ', имя твоей единственной и неповторимой подопечной.',
      ]);
      await era.printAndWait([
        'Услышав это, ',
        tachyon.get_colored_name(),
        ' щурится с таким видом, будто ей это невероятно приятно',
      ]);
      era.println();

      await tachyon.say_and_wait(['Мм… неплохо']);
      await tachyon.say_and_wait([
        'Так вот… ты знаешь, что значит «тахион» (tachyon)?',
      ]);
      era.println();

      await era.printAndWait(['Тахион?']);

      era.printButton('「Не знаю…」', 1);
      era.printButton('「Это… частица быстрее света, да?」', 2);

      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          'Уу… раз уж ты моя подопытная свинка, такие вещи обязан(а) держать в голове.',
        );
      } else {
        await tachyon.say_and_wait('Именно. Зачёт, так и быть.');
      }

      await tachyon.say_and_wait([
        'Тахион — это частица, которая движется быстрее света и идёт сквозь мнимое время.',
      ]);
      await tachyon.say_and_wait([
        'В специальной теории относительности тахион обладает пространственноподобным четырёхимпульсом и мнимым собственным временем; это гипотетическая частица, чьё взаимодействие с обычным веществом почти незаметно, так что засечь её пока невозможно. Если исходить из механизма электромагнитного излучения…',
      ]);

      era.printButton('「По-подожди!」', 1);
      await era.input();

      await tachyon.say_and_wait([
        'Тишина в аудитории, ',
        callname,
        ', дай мне договорить.',
      ]);
      era.println();

      await era.printAndWait([
        'От вида формул, которые ',
        tachyon.get_colored_name(),
        ' одну за другой пишет на доске, голова идёт кругом, и ',
        you.get_colored_name(),
        ' торопливо просит паузу, чтобы всё это переварить.',
      ]);
      await era.printAndWait([
        'Но ',
        tachyon.get_colored_name(),
        ' хлопает по доске и как ни в чём не бывало продолжает.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        'Дальше… из-за различия между времениподобным и пространственноподобным у существования тахиона есть два непреодолимых препятствия.',
      ]);
      era.println();

      await era.printAndWait([
        'На этом месте ',
        tachyon.get_colored_name(),
        ' делает паузу.',
      ]);
      await era.printAndWait([
        'Хороший ученик, когда учитель явно тянет интригу, должен вовремя задать вопрос.',
      ]);
      await era.printAndWait([
        'Незаметно для себя ',
        you.get_colored_name(),
        ' и правда входит в роль.',
      ]);

      era.printButton('「Препятствия?」', 1);
      await era.input();

      await tachyon.say_and_wait([
        'Именно… ограничения, с которыми тахион столкнётся, если он и вправду существует.',
      ]);
      await tachyon.say_and_wait([
        'Проще говоря, это… «невозможность соприкоснуться с веществом, движущимся медленнее света» и «невозможность замедлиться ниже скорости света». Начнём с первого: причина невозможности контакта — нарушение причинности…',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' продолжает объяснение',
      ]);
      await era.printAndWait([
        'Но ',
        you.get_colored_name(),
        ' уже не удерживает в голове ни слова из тех невнятных разборов, которыми сыплет ',
        tachyon.sex,
        ' — от них будто насилуют мозг знанием.',
      ]);
      era.println();

      await era.printAndWait([
        'Всё оттого, что рядом ',
        tachyon.get_colored_name(),
        ' собственной персоной: даже зная, что «тахион» — это сверхсветовая частица tachyon, всё равно невольно думаешь про ту, что сидит рядом, — про ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Мало-помалу ',
        you.get_colored_name(),
        ' вдруг видит внутренним взором картину.',
      ]);
      era.println();

      await era.printAndWait([
        'Где-то в мире выше скорости света, в пространстве, куда не добраться веществу медленнее света.',
      ]);
      await era.printAndWait([
        'В этом мире, где даже время кажется слишком медленным, существует один-единственный — ',
        { color: tachyon.color, content: 'Тахион' },
        '.',
      ]);
      await era.printAndWait([
        'Не способный соприкоснуться с миром ниже скорости света, существующий только в сверхсветовом виде — ',
        { color: tachyon.color, content: 'Тахион' },
        '.',
      ]);
      await era.printAndWait(['Абсолютная скорость, абсолютное одиночество.']);
      era.println();

      await tachyon.say_and_wait(['…………']);
      era.println();

      await era.printAndWait([
        'Незаметно для себя ',
        you.get_colored_name(),
        ' замечает, что голос, разбиравший всё это фоном, когда-то уже смолк.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' приходит в себя и обнаруживает, что ',
        tachyon.get_colored_name(),
        ' пристально смотрит — и неизвестно, сколько уже так смотрит.',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, '? О чём задумался(ась)?']);

      era.printButton('「Ни о чём…」', 1);
      era.printButton(
        '「Просто подумал(а), что если так, то тахиону очень одиноко…」',
        2,
      );
      await era.input();

      await era.printAndWait([
        'Стоит ',
        tachyon.get_colored_name(),
        ' спросить, и ',
        you.get_colored_name(),
        ' выкладывает свою мысль.',
      ]);
      await era.printAndWait([
        'В каком-то смысле прежняя ',
        tachyon.get_colored_name(),
        ' была немного такой же.',
      ]);
      await era.printAndWait([
        'Из-за чрезмерного ума окружающие не могли увидеть тот же мир, что видела ',
        tachyon.sex,
        ' сама.',
      ]);
      await era.printAndWait([
        'Отрезанный от мира, видящий перед собой только собственную цель — ',
        { color: tachyon.color, content: 'Tachyon' },
        '.',
      ]);
      await era.printAndWait([
        'И всё же… даже такая ',
        tachyon.get_colored_name(),
        ' могла соприкасаться с людьми и поддаваться их влиянию.',
      ]);
      await era.printAndWait([
        'А если отрезано даже физическое пространство, то ',
        { color: tachyon.color, content: 'Тахион' },
        '…',
      ]);
      await era.printAndWait([
        'Нет, речь ведь о сверхсветовой частице, а вовсе не о том, кто такая ',
        tachyon.get_colored_name(),
        ' — разве не так?',
      ]);
      await era.printAndWait([
        'За такое отступление от темы ',
        tachyon.get_colored_name(),
        ' наверняка рассердится?',
      ]);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' уже готов(а) к тому, что ',
        tachyon.get_colored_name(),
        ' с напускной сердитостью отчитает и поправит эту мысль.',
      ]);
      await era.printAndWait(['Но…']);
      era.println();

      await tachyon.say_and_wait(['О? ', callname, ', ты правда так думаешь?']);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' говорит это спокойно, отодвигает доску и придвигается ближе к сидящему(ей) на диване ',
        you.get_colored_name(),
        ' вплотную.',
      ]);
      await era.printAndWait([
        'Тусклые красные глаза смотрят на ',
        you.get_colored_name(),
        ', и, как всегда, не понять, о чём ',
        tachyon.sex,
        ' вообще думает.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        'Но что, если это и есть плата за то, чтобы перешагнуть предел? Что, если — просто предположим… потерять всё, что есть, и стать абсолютно одинокой и есть та цена, которую надо отдать за преодоление предела… ты сможешь это принять, ',
        callname,
        '?',
      ]);
      era.println();

      await era.printAndWait(['Странно.']);
      await era.printAndWait(['Очень странно.']);
      await era.printAndWait([
        'Расстояние между тобой и ',
        tachyon.get_colored_name(),
        ' не стало ни меньше, ни больше.',
      ]);
      await era.printAndWait([
        'Но ',
        tachyon.get_colored_name(),
        ' перед глазами вдруг рождает странную иллюзию.',
      ]);
      await era.printAndWait(['Будто близко и будто далеко.']);
      await era.printAndWait(['Так близко, что можно коснуться рукой.']);
      await era.printAndWait([
        'Так далеко, что в следующий миг исчезнет из этого мира.',
      ]);
      await era.printAndWait([
        'Но важнее сейчас всё-таки дать ответ, разве нет?',
      ]);
      await era.printAndWait(['Если хорошенько подумать…']);
      era.println();

      await era.printAndWait([you.get_colored_name(), ' считает…']);

      era.printButton('「Могу」 (поднять отношения)', 1);
      era.printButton('「Не могу」 (пока не поднимать)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Если плата за преодоление предела именно такова…',
        ]);
        await era.printAndWait([
          'Тогда тому, кто поддерживает её опыты, положено одно: признать правильным то, что решила ',
          tachyon.sex,
          ', и проводить взглядом, как ',
          tachyon.sex,
          ' идёт к своей цели.',
        ]);
        await era.printAndWait(['Это твой долг как «подопытной свинки».']);
        await era.printAndWait([
          'Поэтому ',
          you.get_colored_name(),
          ' выбирает уважать то, как поступает ',
          tachyon.get_colored_name(),
          ' сама.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' именно так и объясняет всё ',
          tachyon.get_colored_name(),
          ' прямо в глаза.',
        ]);
        era.println();

        await tachyon.say_and_wait(['…Вот как? Значит, таков твой выбор?']);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' по-прежнему не выдаёт, о чём думает ',
          tachyon.sex,
          ' сама, и голос всё такой же ровный.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' невольно тревожится: не сказал(а) ли чего-то не то.',
        ]);
        await era.printAndWait(['Но выбор уже сделан.']);
        era.println();

        era.printButton('「Раз уж я свинка Тахион, так и надо…」', 1);
        era.printButton('「…но я буду стараться догнать Тахион!」', 2);
        await era.input();

        await era.printAndWait([
          'Тебе не следует мешать ',
          tachyon.get_colored_name(),
          ' расти.',
        ]);
        await era.printAndWait([
          'Скорее наоборот: это тебе надо изо всех сил догонять ',
          tachyon.get_colored_name(),
          ' — вот как правильно.',
        ]);
        await era.printAndWait([
          'Если превзойти скорость света означает вечное одиночество.',
        ]);
        await era.printAndWait([
          'Тогда твоё дело — сделать так, чтобы ',
          tachyon.sex,
          ' больше не была одинока.',
        ]);
        await era.printAndWait([
          'Пусть даже кроме тебя не будет никого — изо всех сил быть там, где ',
          tachyon.sex,
          ', рядом с ней.',
        ]);
        await era.printAndWait([
          'Как «свинка» ',
          tachyon.get_colored_name(),
          ' и как… возлюбленный(ая) ',
          tachyon.get_colored_name(),
          ' — вот чего ты хочешь в глубине души.',
        ]);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait(['если подумать, я ведь так и не сказала.']);
        await tachyon.say_and_wait(['мой выбор———']);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' смотрит с таким спокойным лицом, что становится страшно.',
        ]);
        await era.printAndWait(['Спокойное, как морская гладь перед штормом.']);
        era.println();

        await tachyon.say_and_wait([
          'я выберу перейти ту черту, превзойти скорость света, превзойти предел———',
        ]);
        era.println();

        await era.printAndWait(['А-а, так и есть.']);
        await era.printAndWait([
          'Это и есть ответ, какой должна дать та, кем ',
          you.get_colored_name(),
          ' восхищается, — ',
          tachyon.uma_sex_title,
          '.',
        ]);
        await era.printAndWait([
          'Неожиданностью это не назовёшь — разве что чем-то само собой разумеющимся.',
        ]);
        await era.printAndWait([
          'Но… откуда тогда в груди эта лёгкая пустота?',
        ]);
        await era.printAndWait([
          'Только вот ',
          tachyon.get_colored_name(),
          ' ещё не договорила',
        ]);
        era.println();

        await tachyon.say_and_wait(['————вместе с тобой.']);
        era.println();

        await era.printAndWait(['Вдруг.']);
        await era.printAndWait(['Затишье перед бурей опрокидывается.']);
        await era.printAndWait([
          you.get_colored_name(),
          ' понимает, что недавнее сравнение было не совсем точным.',
        ]);
        await era.printAndWait(['Не затишье перед бурей, а — морская бездна.']);
        await era.printAndWait([
          'Не буря надвигается — ты уже с головой в ней.',
        ]);
        era.println();

        await tachyon.say_and_wait([
          'Вдвоём перейти предел———стать Тахион (Tachyon).',
        ]);
        era.println();

        await era.printAndWait([
          'Невольно ',
          you.get_colored_name(),
          ' кивает в знак согласия.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' смотрит ей в глаза, а ',
          tachyon.sex,
          ' мерцает в ответ, как свет.',
        ]);
        await era.printAndWait([
          'Будто свет приманки — последнее, что видит заплывшая в бездну рыбёшка перед тем, как её проглотит глубоководный хищник.',
        ]);

        era.drawLine();

        await tachyon.print_and_wait([
          'Я вглядываюсь в глаза, которыми ',
          you.sex,
          ' смотрит на меня.',
        ]);
        await tachyon.print_and_wait([
          'В них — растерянность того, кто понял лишь наполовину.',
        ]);
        await tachyon.print_and_wait([
          'На душе наполовину досада, наполовину облегчение.',
        ]);
        await tachyon.print_and_wait([
          'Почему же ',
          you.sex,
          ' никак не может понять?',
        ]);
        await tachyon.print_and_wait([
          'Но и хорошо, что ',
          you.sex,
          ' так и не понял.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'Не так, что сгодился бы и ',
          you.sex,
          ' один.',
        ]);
        await tachyon.print_and_wait([
          'А так, что нужен только ',
          you.sex,
          ' — и никто больше.',
        ]);
        await tachyon.print_and_wait(['Одиночества я не боюсь.']);
        await tachyon.print_and_wait([
          'Боюсь я одного: что ',
          you.sex,
          ' больше не встанет рядом, что силуэт его исчезнет.',
        ]);
        await tachyon.print_and_wait(['Поэтому…']);
        era.println();

        await tachyon.print_and_wait(['По ту сторону предела.']);
        await tachyon.print_and_wait([
          'Край за скоростью света, куда никому больше не добраться.',
        ]);
        await tachyon.print_and_wait(['И ещё…']);
        await tachyon.print_and_wait([
          'Мир, где кроме нас двоих никто уже не помешает.',
        ]);
        era.println();

        await tachyon.say_and_wait(
          [
            'Пусть даже по ту сторону скорости света, пусть даже тело и разум сгорят дотла…',
          ],
          true,
        );
        await tachyon.say_and_wait(
          'всё равно будь рядом со мной вечно, вечно, хорошо?',
          true,
        );
        await tachyon.say_and_wait(['мой дорогой ', callname, '❤️'], true);
      } else {
        await era.printAndWait([
          'Если бы вышло, что ',
          tachyon.get_colored_name(),
          ' одна проведёт вечность в одиночестве — ты бы ни за что этого не допустил(а).',
        ]);
        await era.printAndWait([
          'Но… а если на другой чаше весов окажется то, о чём мечтает ',
          tachyon.get_colored_name(),
          ' — её мечта?',
        ]);
        await era.printAndWait([
          'Или, может, эта самая вечность — как раз то, к чему всё это время и стремится ',
          tachyon.get_colored_name(),
          ' сама?',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' наверняка всё это знает и, зная, всё равно поставила себе цель — гнаться за пределом',
        ]);
        await era.printAndWait([
          'Тогда, если ',
          tachyon.sex,
          ' — та, для кого ты ',
          callname,
          ', если ',
          tachyon.sex,
          ' — та, с кем у тебя любовь…',
        ]);
        await era.printAndWait([
          'Разве не следует поддержать её — пусть ',
          tachyon.sex,
          ' гонится за своей мечтой?',
        ]);
        era.println();

        await era.printAndWait(['Поэтому…']);

        era.printButton('「Я отказываюсь」', 1);
        await era.input();

        await era.printAndWait([
          'Долг свинки, пожалуй, исполнен. А что до долга того, кто любит ',
          tachyon.get_colored_name(),
          ' — долга возлюбленного?',
        ]);
        await era.printAndWait([
          'Ты и ',
          tachyon.sex,
          ' — связанные, будто в беге на трёх ногах, шли вперёд вместе, прошли через всё и лишь тогда с трудом дождались, что любовь расцвела…',
        ]);
        await era.printAndWait([
          'Можно ли допустить такой конец? Можно ли допустить, чтобы с ',
          tachyon.get_colored_name(),
          ' развело навеки, будто живого с мёртвым?',
        ]);
        await era.printAndWait(['Ответ, конечно же… нет.']);

        era.printButton('「Пусть даже это эгоистично.」', 1);
        era.printButton(
          '「Я тоже хочу, чтобы Тахион осталась рядом со мной навсегда.」',
          2,
        );
        await era.input();

        await era.printAndWait(['Страшно, что она уйдёт.']);
        await era.printAndWait(['Всего лишь такая вот эгоистичная причина.']);
        await era.printAndWait(['Нынешнему тебе к такому уже не привыкнуть.']);
        await era.printAndWait([
          'Вечером перед сном не для кого готовить обед.',
        ]);
        await era.printAndWait([
          'Утром придёшь в лабораторию — и не увидишь ту спину, склонённую над опытом.',
        ]);
        await era.printAndWait([
          'В полдень не увидишь, как некто мило и жалобно клянчит поесть.',
        ]);
        await era.printAndWait([
          'Днём на тренировке не увидишь того ослепительного бега.',
        ]);
        await era.printAndWait([
          'Тебе теперешнему уже не вернуться в те прежние, пресные дни.',
        ]);
        await era.printAndWait(['Поэтому, поэтому.']);

        era.printButton(
          '「Если бы можно было… я хотел(а) бы вместе с Тахион дойти до той стороны, что за скоростью света.」',
          1,
        );
        era.printButton('「Но… если способа нет…」', 2);
        await era.input();

        await era.printAndWait([
          'Потому что страшно, что сам(а) ты ту черту не перейдёшь.',
        ]);
        await era.printAndWait([
          'И потому хочется схватить её за руку — пусть ',
          tachyon.sex,
          ' не уходит.',
        ]);
        await era.printAndWait([
          'Пусть ',
          tachyon.sex,
          ' останется в мире, что ниже скорости света.',
        ]);
        await era.printAndWait(['Останется ради тебя.']);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait(['…хе-хе.']);
        era.println();

        await era.printAndWait(['Спокойная улыбка.']);
        await era.printAndWait(['Улыбка, смысл которой не разгадать.']);
        await era.printAndWait(['От неё невольно берёт страх.']);
        await era.printAndWait([tachyon.sex, ' ответит — но что же именно…']);
        era.println();

        await tachyon.say_and_wait(['это и есть… твой ответ?']);
        await tachyon.say_and_wait([
          '…ты и правда всегда ломаешь мои ожидания…',
        ]);
        era.println();

        await era.printAndWait([tachyon.sex, ' — что же у неё на уме?']);
        await era.printAndWait([
          'В это самое мгновение — ',
          tachyon.sex,
          ' смеётся: насмешка это, издёвка или просто радостная улыбка оттого, что ты обманул(а) её ожидания?',
        ]);
        era.println();

        await tachyon.say_and_wait([
          'ну что ж… ради тебя, мой дорогой ',
          callname,
          '.',
        ]);
        await tachyon.say_and_wait([
          'я, вечно, вечно, буду здесь, рядом с тобой.',
        ]);

        era.drawLine();

        await tachyon.print_and_wait(['Чувство в груди не описать словами.']);
        await tachyon.print_and_wait([
          'Но в целом, пожалуй, верх берёт то, что зовётся радостью.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'Человек, который всегда превосходит мои ожидания, и в этот раз снова их оправдал — и в хорошую сторону.',
        ]);
        await tachyon.print_and_wait([
          'Я-то думала, что ',
          you.sex,
          ' непременно сморозит какую-нибудь глупость: мол, ради мечты Тахион я готов от всего отказаться.',
        ]);
        await tachyon.print_and_wait(['Честное слово…']);
        await tachyon.print_and_wait([
          'Стоит подумать о такой возможности, и ',
          tachyon.get_colored_name(),
          ' просто опускает руки.',
        ]);
        await tachyon.print_and_wait([
          'Ну почему же ',
          you.sex,
          ' всё никак не поймёт?',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' — крайне ненасытная ',
          tachyon.uma_sex_title,
          '.',
        ]);
        await tachyon.print_and_wait([
          'Выбрать одно из двух? Нет, ',
          tachyon.sex,
          ' хочет и то и другое.',
        ]);
        await tachyon.print_and_wait([
          'Если бы ',
          you.sex,
          ' и правда сказал такое.',
        ]);
        await tachyon.print_and_wait([
          'Тогда — пусть грубо, пусть даже так, что ',
          you.sex,
          ' будет отнят у кого-то другого.',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          ' всё равно, ни с чем не считаясь, сделает так, что ',
          you.sex,
          ' будет уволочён туда — за скорость света, в мир, где могут быть только они двое.',
        ]);
        await tachyon.print_and_wait(['Но…']);
        era.println();

        await tachyon.print_and_wait(['Если уж говорить — этот человек.']);
        await tachyon.print_and_wait([
          'Этот до умиления простодушный ',
          callname,
          ' вдруг…',
        ]);
        await tachyon.print_and_wait([
          'Редкий случай — он показал свою жадность, своё желание.',
        ]);
        await tachyon.print_and_wait([
          'Желание, чтобы ',
          tachyon.get_colored_name(),
          ' осталась рядом.',
        ]);
        await tachyon.print_and_wait([
          'Желание силой добиться, чтобы ',
          tachyon.get_colored_name(),
          ' отказалась от своей мечты.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'Ведь ',
          you.sex,
          ' мне уже необходим, и остаётся лишь с радостью позволить ему вертеть мною как вздумается.',
        ]);
        await tachyon.print_and_wait([
          'Кто кому принадлежит — когда же это успело перевернуться?',
        ]);
        await tachyon.print_and_wait(['Нет, не перевернулось…']);
        await tachyon.print_and_wait(['Связывая, я и сама оказалась связана.']);
        await tachyon.print_and_wait([
          'Ах, вот это, наверное, и есть чувство по имени любовь.',
        ]);
        await tachyon.print_and_wait([
          callname,
          ' любит ',
          tachyon.get_colored_name(),
          ', а ',
          tachyon.get_colored_name(),
          ' любит в ответ того, кто ей дорог, — ',
          callname,
          '.',
        ]);
        await tachyon.print_and_wait([
          'Нет никакого мира за скоростью света, а за пределом и подавно ничего нет…',
        ]);
        await tachyon.print_and_wait([
          'Есть только обычный человек и обычная ',
          tachyon.uma_sex_title,
          ', которые любят друг друга, — и всё.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
