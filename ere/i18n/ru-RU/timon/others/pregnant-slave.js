/**
 * @file 孕袋相关事件
 * @author 幽白書
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  setColor,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { akuochi, buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

const { degeneration_to_evil } = require('#/i18n/ru-RU/snippets');

module.exports = {
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await printAndWait([
      'Объяснив ',
      chara.get_colored_name(),
      ' учебный материал, ',
      chara.get_colored_name(),
      ' краснея смотрит на ',
      you.get_colored_name(),
      ' — теперь очередь сексуального воспитания.',
    ]);
    await printAndWait([
      'Хотя ',
      you.get_colored_name(),
      ' вроде наставник, но ',
      chara.get_colored_name(),
      ' знает твоё тело лучше, чем ',
      you.get_colored_name(),
      ' сам(а). В руках ',
      chara.get_colored_name(),
      ' — ',
      you.get_colored_name(),
      ' вынужден(а) узнать каждую чувствительную точку своего тела и стыдную реакцию, когда их касаются.',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' ведёт ',
      you.get_colored_name(),
      ' к дуплу сухого дерева, ',
    ]);
    await printAndWait([
      'Как раз когда ',
      you.get_colored_name(),
      ` думает, что ${chara.sex} просто срывает стресс, тебя внезапно валят на пень.`,
    ]);
    await printAndWait([
      'Затем ',
      you.get_colored_name(),
      ' с тебя медленно стягивают одежду снизу, и тёплый член упирается в дырку.',
    ]);
    await printAndWait([
      'Если издать звук, эхо дупла разнесёт голос ',
      you.get_colored_name(),
      ' по всему кампусу.',
    ]);
    await printAndWait([
      `Если просочится, что своя подопечная ${chara.uma_sex_title} прижала тебя к дуплу и ебёт, `,
      you.get_colored_name(),
      ' репутация тренера — крышка……',
    ]);
    await printAndWait('Впрочем, той репутации давно уже нет.');
    await printAndWait([
      you.get_colored_name(),
      ' стонешь у дупла, но для ',
      get('flag:35') === 2 ? 'секс-рабыни' : 'беременной шлюхи',
      ' по имени ',
      you.get_colored_name(),
      ' это всего лишь обычный день.',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' ведёт ',
      you.get_colored_name(),
      ' за руку на свидание во внутренний двор.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' сжимает бёдра: по внутренней стороне белой жижей стекает вниз, маска на лице будто пропитана чем-то мокрым и липнет к губам и носу ',
      you.get_colored_name(),
      `; запах течки такой сильный, что проходящие ${chara.uma_sex_title} краснеют и зажимают нос.`,
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async school_rooftop(chara, you) {
    await printAndWait([
      'Публичная выставка на крыше…… Если кто-то сейчас поднимет голову, ',
      you.get_colored_name(),
      ' точно не сдержится.',
    ]);
    await printAndWait(
      `Внизу с крыши по Тренировочному полю бегут ${chara.uma_sex_title}.`,
    );
    await printAndWait(
      'Если увидят — точно кончишь, и сквирт прольётся на тех внизу, как дождь……',
    );
    await printAndWait([
      'Но ',
      chara.get_colored_name(),
      ' задирает тебе ногу, в позе без точки опоры ',
      you.get_colored_name(),
      ' может только держаться за защитную сетку на крыше, пока проволока вдавливает красные полосы в груди.',
    ]);
    // TALENTNAME:32 = 泌乳
    if (get('talent:0:32') > 0) {
      await printAndWait('А-а, выжало……');
      await printAndWait([
        `Ещё до сквирта на головы ${chara.uma_sex_title} внизу уже тонкой струйкой капает молоко с сосков `,
        you.get_colored_name(),
        '.',
      ]);
    }
  },
  race_start: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await printAndWait([
        `Пока другие тренеры дают последние наставления своим подопечным ${chara.uma_sex_title}, `,
        you.get_colored_name(),
        ' вместо этого насасываешь ',
        chara.get_colored_name(),
        ' член, ',
      ]);
      await printAndWait([
        'Пьяная от предстартового адреналина ',
        chara.get_colored_name(),
        // FLAGNAME:35 = 惩戒力度
        ' — твёрдый низ нужно снять: для ',
        get('flag:35') === 2 ? 'секс-рабыни' : 'беременной шлюхи',
        ' по имени ',
        you.get_colored_name(),
        ' это неотъемлемый долг.',
      ]);
      await printAndWait([
        'Проглотив всю сперму, ',
        you.get_colored_name(),
        ' дарит ',
        chara.get_colored_name(),
        ' поцелуй в член — молитву, чтобы скачка прошла гладко.',
      ]);
    };
    f.title = 'Перед скачкой';
    return f;
  })(),
  oyakodon: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} you
     */
    const f = async (child, father, you) => {
      await printAndWait([
        you.get_colored_name(),
        ' зажат(а) между ',
        child.get_colored_name(),
        ' и ',
        father.get_colored_name(),
        ' вплотную, ',
      ]);
      await printAndWait([
        'Два горячих члена сразу долбят ',
        you.get_colored_name(),
        ' спереди и сзади, каждый толчок — новая волна кайфа.',
      ]);
      await printAndWait([
        'В полузабытьи ',
        you.get_colored_name(),
        ' вспоминает, как ',
        child.get_colored_name(),
        ' только родился——',
      ]);
      await you.used_to_say_and_wait(
        'Даже когда ребёнок вырастет…… меня будут трахать вместе с отцом, зажмут с двух сторон, и я утону в мужских членах……',
        true,
      );
      await printAndWait('Та фантазия уже стала явью……');
    };
    f.title = 'Оякодон';
    return f;
  })(),
  /**
   * 被父子丼睡奸惊醒
   * @author 幽白書
   * @param {CharaTalk} chara 孩子的父亲
   * @param {CharaTalk} child 孩子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname_c 孩子对玩家的称呼
   */
  async be_awake_as_slave(chara, child, you, callname_c) {
    await printAndWait([
      'Ночью ',
      you.get_colored_name(),
      ' вдруг просыпается',
    ]);
    await printAndWait(
      'Беременная шлюха не имеет права забывать обязанность даже во сне',
    );
    await printAndWait('Просто сегодня «гости» особые');
    println();
    await printAndWait([
      you.get_colored_name(),
      ' чувствуешь толчки спереди и сзади в разном ритме',
    ]);
    await printAndWait([
      child.get_colored_name(),
      ' тихо зовёт ',
      callname_c,
      ' и качает бёдрами, каждый толчок до самого дна ',
      you.get_colored_name(),
      '.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' стоишь на четвереньках и стыдно чувствуешь, как собственный ребёнок ебёт тебя по-звериному',
    ]);
    await printAndWait(
      'Материнское достоинство — если оно вообще было — в этот миг исчезает полностью',
    );
    await printAndWait([
      'Трясёшь задницей, как сука, жаждая, чтобы обижали; ',
      you.get_colored_name(),
      ' ртом обслуживает ',
      chara.get_colored_name(),
      ' — и тот смеётся',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' только глубже берёшь член в рот и прячешь лицо в густой вони, убегая от реальности',
    ]);
    println();
    await printAndWait([
      'Вскоре ',
      chara.get_colored_name(),
      ' и ',
      child.get_colored_name(),
      ' стреляют густой спермой',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' выплёвываешь сперму изо рта, мажешь руки, засовываешь пальцы в киску и медленно мешаешь; вытекающую белую жижу ',
      you.get_colored_name(),
      ' другой рукой подхватывает и глотает',
    ]);
    if (get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
      await printAndWait([
        chara.get_colored_name(),
        ' — сперма смешалась со спермой ',
        child.get_colored_name(),
        ': кто первым сделает беременной?',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' мечтаешь и не замечаешь, что у ',
        chara.get_colored_name(),
        ' и ',
        child.get_colored_name(),
        ' члены из-за ',
        you.get_colored_name(),
        ' снова встали',
      ]);
    } else {
      await printAndWait([
        'Видя, что делает ',
        you.get_colored_name(),
        ', члены ',
        chara.get_colored_name(),
        ' и ',
        child.get_colored_name(),
        ' снова встают',
      ]);
    }
    await printAndWait('Ночь ещё не кончена……');
  },
  morning_duty: (() => {
    /**
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     * @param {string} your_title 玩家当前头衔（XX性奴/XX孕袋）
     * @param {string} penis_desc 角色阴茎的描述
     */
    const f = async (chara, you, your_title, penis_desc) => {
      const ret = [];
      await printAndWait([
        you.get_colored_name(),
        ' будит удар тёплого по щеке.',
      ]);
      if (chara.sex_code === 0) {
        await printAndWait([
          'Тот, кто всю ночь мучил ',
          you.get_colored_name(),
          ', ',
          chara.get_colored_name(),
          ' снова выпил лекарство и снисходит — вот ',
          chara.sex,
          ' и будит тебя своим благородным ',
          penis_desc,
          ' членом вместо будильника.',
        ]);
      } else {
        await printAndWait([
          'Тот, кто всю ночь мучил ',
          you.get_colored_name(),
          ', ',
          chara.get_colored_name(),
          ' снова снисходит — вот ',
          chara.sex,
          ' и будит тебя своим благородным ',
          penis_desc,
          ' членом вместо будильника.',
        ]);
      }
      await printAndWait([
        '— напоминая ',
        you.get_colored_name(),
        ',',
        you.sex,
        ' ещё не выполнен долг. С утра до ночи, по кругу.',
      ]);
      ret.push(
        await degeneration_to_evil(
          'покорно взять в рот',
          'с отвращением отвернуть лицо',
        ),
      );
      if (ret[0] === 1) {
        await printAndWait([
          'И без лишних стараний: ',
          you.get_colored_name(),
          ' едва приоткрывает губы — член уже нетерпеливо лезет внутрь.',
        ]);
        await printAndWait([
          'Под ',
          chara.get_colored_name(),
          ', что пользуется тобой как хочет, ',
          you.get_colored_name(),
          ' кротко служит губами и языком.',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          ', сегодня тоже помнишь свой долг……',
        ]);
      } else {
        await printAndWait([
          'Даже скатившись так низко, ',
          you.get_colored_name(),
          ' всё ещё с достоинством — или хотя бы с характером——',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' чуть отворачиваешь лицо, собираясь так и заявить, но потерявший терпение ',
          chara.get_colored_name(),
          ' — господин даёт ',
          you.get_colored_name(),
          ' пощёчину, напоминая ',
          you.get_colored_name(),
          ', в каком ты теперь положении.',
        ]);
        await printAndWait([
          'Затем ',
          chara.get_colored_name(),
          ' больше не ждёт согласия ',
          you.get_colored_name(),
          ' и просто берёт этот шведский стол на завтрак.',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          ', сегодня тоже вбивают, какой у тебя долг……',
        ]);
      }
      setColor();
      return ret;
    };
    f.title = 'Утренний долг на следующий день';
    return f;
  })(),
  /**
   * 性奴/孕袋工作事件
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   * @param {string} sex 她 or 他
   * @param {string} they 她们 or 他们
   * @param {string} slave 性奴 or 孕袋
   */
  work(you, uma, sex, they, slave) {
    print([
      '【Сегодня ',
      you.get_colored_name(),
      ' тоже должен(на) отработать как ',
      slave,
      '】',
    ]);
    const buffer = [
      () => {
        print([
          you.get_colored_name(),
          ' ведут в комнату отдыха на ипподроме — утешать проигравших ',
          uma,
          '.',
        ]);
        print([
          'Дверь закрывается — ',
          you.get_colored_name(),
          ' жалкую одежду срывают полностью, тело трясётся под яростными ударами членов.',
        ]);
        print([
          uma,
          ' срывают горечь поражения, оставляя на ',
          you.get_colored_name(),
          ' царапины и следы зубов……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' ведут в комнату отдыха на ипподроме — утешать тех, кто дал яркую скачку, ',
          uma,
          '.',
        ]);
        print([
          'Раньше остальных врывается чемпион-',
          uma,
          ', и перед тем как повалить ',
          you.get_colored_name(),
          ', даже здоровается.',
        ]);
        print([
          sex,
          'Смеётся и крутит бёдрами, изливая в матку ',
          you.get_colored_name(),
          ' сперму вместе с мочой……',
        ]);
      },
      () => {
        print([
          'Перед работой ',
          you.get_colored_name(),
          ' решает сходить в туалет.',
        ]);
        print([
          'Ещё не начал(а) — пять-шесть членов перегораживают путь ',
          you.get_colored_name(),
          '.',
        ]);
        print([
          you.get_colored_name(),
          ' вынужден(а) терпеть позыв и обслуживать ',
          uma,
          '-госпож, и вскоре под белой жижей устраивает бурное недержание……',
        ]);
      },
      () => {
        print([you.get_colored_name(), ' заказывает пара близких ', uma, '.']);
        print([
          they,
          'Выставляют члены и спереди и сзади насилуют низ ',
          you.get_colored_name(),
          '.',
        ]);
        print([
          'От двойной яростной стимуляции ',
          you.get_colored_name(),
          ' с привычным ощущением кремпая устраивает грандиозный оргазм и теряет сознание……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' требуют участвовать в клятвенном собрании ',
          uma,
          '.',
        ]);
        print([
          'Как часть собрания ',
          uma,
          ' выстраиваются в очередь пользоваться ',
          you.get_colored_name(),
          ' каждым похотливым отверстием снаружи и изнутри.',
        ]);
        print([
          'Каждую секунду в теле ходит одна-три члена; не успев наполниться до краёв, ',
          you.get_colored_name(),
          ' уже кончает так, что душа улетает……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' принимает тех, кто вместе тренировался на Тренировочном поле, ',
          uma,
          '.',
        ]);
        print([
          sex,
          'Срывают одежду с ',
          you.get_colored_name(),
          ', не глядя на заляпанный низ, и сразу всаживают.',
        ]);
        print([
          uma,
          'Толкаясь, насмешливо спрашивают ',
          you.get_colored_name(),
          ', не заливает ли подопечная перед каждой тренировкой весь дневной запас',
        ]);
        print([
          'От крайнего кайфа и стыда ',
          you.get_colored_name(),
          ' теряет сознание……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' по дороге на работу перегораживает школьник младшего отделения ',
          uma,
          '.',
        ]);
        print([
          'Не успеваешь отказать — ещё незрелый ',
          uma,
          ' вынимает огромный член, который совершенно не вяжется с возрастом.',
        ]);
        print([
          'Подчиняясь инстинкту переделанного тела, ',
          you.get_colored_name(),
          ' полусопротивляясь, полусоглашаясь, тебя валит на пол школьник, и ты чувствует, как похотливую дырку долбит эта громадина……',
        ]);
      },
    ];
    if (
      get('talent:0:泌乳') > 0 &&
      get('cflag:0:胸围') - get('cflag:0:下胸围') >= 20
    ) {
      buffer.push(() => {
        print([
          you.get_colored_name(),
          ' привязывают ',
          uma,
          ' к стойке: корпус наклонён вперёд, доска с дырами зажимает голову, руки и огромную грудь.',
        ]);
        print([
          you.get_colored_name(),
          ' тело мнут как хотят, ',
          they,
          ' особенно яростно давят на груди, и брызжет белое молоко.',
        ]);
        print([
          uma,
          ' группами по очереди ебут дырку и доят, и только в конце вместе стреляют спермой на груди и лицо ',
          you.get_colored_name(),
          '……',
        ]);
      });
    }
    get_random_entry(buffer)();
  },
  punish_first: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     */
    const f = async (you, taste, minoru) => {
      await you.say_and_wait(['Нн…… гх…… мм……']);
      println();
      await printAndWait([
        'В академии Трейсен есть место, куда обычно никто не заходит.',
      ]);
      await printAndWait([
        'Угол, заваленный стогами сена и обнесённый оградой, ',
      ]);
      await printAndWait([
        'похоже, держат там животных, но следов живого никогда не видно.',
      ]);
      await printAndWait(['Для чего это место?']);
      await printAndWait([you.get_colored_name(), ' тоже недоумевал(а), ']);
      println();
      await printAndWait([
        'теперь ',
        you.get_colored_name(),
        ' наконец знает, для чего оно.',
      ]);
      println();
      await taste.say_as_unknown_and_wait([
        'Наказание! Беременная шлюха уклоняется от долга — карать строго!',
      ]);
      await minoru.say_as_unknown_and_wait([
        'Само по себе быть беременной шлюхой уже самое суровое наказание…… Изначально хотели, чтобы, отдавая силы Трейсен и ',
        taste.uma_sex_title,
        ' будущему, госпожа-тренер хорошенько раскаялась в вине, но, похоже, всё же не хватило крутой меры.',
      ]);
      println();
      await printAndWait(['Как только двое договаривают, ']);
      await printAndWait([
        you.get_colored_name(),
        ' красную распухшую киску, которой они уже воспользовались и из которой всё ещё тонко течёт белая жижа, встречает новый гость.',
      ]);
      const ret = await degeneration_to_evil(
        'Подчиниться',
        'Не сдаваться',
        false,
      );
      await printAndWait([
        'С повязкой на глазах и кляпом во рту ',
        you.get_colored_name(),
        ' не знает, кто пришёл, ',
      ]);
      await printAndWait([
        'даже если пытаешься узнать по голосу — уши закрыты шумоподавляющими наушниками, и даже ',
        taste.uma_sex_title,
        ' этот отличный слух различает только звуки внутри тела.',
      ]);
      println();
      await printAndWait(['Чвак…… чвак……']);
      println();
      await printAndWait(['Липкие шлепки плоти, ']);
      await printAndWait([
        'и поцелуи входа влагалища, будто оно не хочет отпускать член сзади, ',
      ]);
      if (ret === 1) {
        await printAndWait(
          [
            'этот чмок такой громкий, что ',
            you.get_colored_name(),
            ' почти верит: этот член — господин твоего тела——— что, впрочем, не странно: о каждой сегодняшней палке, входящей в ',
            you.get_colored_name(),
            ' тело, ',
            you.get_colored_name(),
            ' уже думал(а).',
          ],
          { color: akuochi[1] },
        );
      } else {
        await printAndWait(
          [
            'Этот чмок такой громкий, что ',
            you.get_colored_name(),
            ' почти верит: этот член — господин твоего тела———',
            you.get_colored_name(),
            ' не хочет так думать, но одурманенный зельем мозг заставляет ',
            you.get_colored_name(),
            ' принять это.',
          ],
          { color: akuochi[0] },
        );
      }
      println();
      await printAndWait(['Хлюп…… хлюп……']);
      println();
      await printAndWait(['Любая защита однажды будет сломана, ']);
      await printAndWait([
        'и тогда уравнение «защита существует, чтобы её ломали» почти верно.',
      ]);
      await printAndWait([
        'Значит, эта притворно стыдливая узкая киска наверняка для того, чтобы ',
        taste.uma_sex_title,
        '-госпожа чувствовала покорение могучим членом: прикидывается холодной, а в миг касания господина-члена обвивается — идеальный переход от целомудренной к шлюхе; звук этого обвивания тоже говорит о воле хозяйки тела.',
      ]);
      await printAndWait([
        'Так хочется забеременеть, до тряски, и прикидываться приличным тренером — только чтобы ',
        taste.uma_sex_title,
        '-госпожа, пользуясь тобой, получила ещё и эмоциональное удовлетворение, ',
      ]);
      await printAndWait([
        'а в итоге потерять шанс, чтобы сперма ',
        taste.uma_sex_title,
        '-госпожи насиловала тебя и чтобы ',
        taste.uma_sex_title,
        '-госпожа научила, какая ты жалкая низкая самка, — какой же убыток.',
      ]);
      println();
      await printAndWait([
        'К счастью, милосердная ',
        taste.uma_sex_title,
        '-госпожа даст тупой беременной шлюхе шанс.',
      ]);
      println();
      await printAndWait(['Тук…… тук……']);
      println();
      await printAndWait([
        'Член вежливо стучит в шейку матки, ожидая, что заслон сдастся без боя, ',
      ]);
      await printAndWait([
        'каждый орган, каждая ткань, каждая клетка уже полностью покорились, ',
      ]);
      await printAndWait([
        'и нынешние удары скорее формальный стук в дверь, чем штурм последней линии, ',
      ]);
      await printAndWait([
        'Сопротивление? Тело беременной шлюхи разве станет сопротивляться вторжению ',
        taste.uma_sex_title,
        '-госпожи? Это базовая логика, врезанная в гены.',
      ]);
      println();
      await printAndWait(['Наконец — самый желанный звук.']);
      await printAndWait([
        'А-а, ',
        you.get_colored_name(),
        ' невольно раздвигает ноги ещё шире, ',
      ]);
      await printAndWait([
        'и когда-то ремни, что держали ',
        you.get_colored_name(),
        ' на станке-кобыле, уже ослабли, ',
      ]);
      await printAndWait(['да и не нужны они были, ']);
      await printAndWait([
        'какая беременная шлюха станет сопротивляться члену ',
        taste.uma_sex_title,
        '-госпожи?',
      ]);
      await printAndWait([
        'Какая беременная шлюха откажется от награды ',
        taste.uma_sex_title,
        '-госпожи?',
      ]);
      println();
      await printAndWait([
        'Наконец то, от чего сердце колотится сильнее, чем на бегу, пьянит сильнее первой любви: ',
      ]);
      await printAndWait([
        taste.uma_sex_title,
        '-госпожа доводит вторжение до конца.',
      ]);
      println();
      await printAndWait(['Шух……… шур-рур-рур-рур……']);
      println();
      await printAndWait(['Идёт.']);
      await printAndWait(['Вот оно.']);
      await printAndWait([you.get_colored_name(), ' в сердце уверен(а): ']);
      await printAndWait(['это войдёт в матку, ']);
      await printAndWait([
        'заставит яйцеклетку, что была здесь хозяйкой, полностью покориться, ',
      ]);
      await printAndWait([
        'то, ради чего пойдёшь в догэдза, будешь лизать ноги и отдашь всё материнское тело, лишь бы задобрить, — ',
        taste.uma_sex_title,
        ' благородная случная сперма.',
      ]);
      await printAndWait(['Сперматозоиды хлещут без остановки, ']);
      await printAndWait([
        'топчут и насилуют каждый уголок тела ',
        you.get_colored_name(),
        ', ',
      ]);
      await printAndWait(['вот оно — счастье беременной шлюхи.']);
      println();
      await printAndWait([', ']);
      println();
      await printAndWait(['Жаль, радость не длится вечно, ']);
      await printAndWait(['даже самый долгий семяизвержение кончается, ']);
      await printAndWait([
        'и пока мозг-отброс беременной шлюхи ещё тонет в радости оргазма и зачатия, влагалище, что касается господина-члена напрямую, ещё жаднее обвивает ствол, умоляя остаться.',
      ]);
      await printAndWait(['Или хотя бы…… запомнить форму, ']);
      await printAndWait([
        '…………пусть это память, которую через пять секунд, со следующим членом, уже забудешь.',
      ]);
      println();
      await printAndWait(
        '【Под поливом спермы зловеще-розовый инмон тихо меняет форму】',
        { color: buff_colors[2] },
      );
    };
    f.title = [
      { color: buff_colors[2], content: 'Наказание за долг беременной шлюхи' },
    ];
    return f;
  })(),
  punish: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {string} uma_sex_title
     * @param {boolean} is_teammate
     */
    const f = async (you, uma_sex_title, is_teammate) => {
      await printAndWait(['Чмок…… чмок……']);
      println();
      await printAndWait(['Ещё одна ночь, снова знакомое место, ']);
      await printAndWait([
        you.get_colored_name(),
        ' снова надевает маску и кляп — знакомый спектакль начинается.',
      ]);
      await printAndWait([
        'Зная, что если и дальше не выполнять долг беременной шлюхи, снова окажешься здесь, ',
      ]);
      await printAndWait([
        'зная, что и подопечная, и ученики, и учителя академии с радостью «помогут» ',
        you.get_colored_name(),
        ' этой «мелочью», ',
      ]);
      await printAndWait([
        'зная, что если остановиться на том шаге, можно самому выбрать, кто станет отцом ребёнка, ',
      ]);
      if ((await degeneration_to_evil('Подчиниться', 'Не сдаваться')) === 1) {
        await printAndWait([
          'значит, цель ',
          you.get_colored_name(),
          ', специально дошедшего сюда, понятна.',
        ]);
        await printAndWait([
          'Не забыть ту ночь, не забыть, как всем телом распоряжаются другие, ',
        ]);
        await printAndWait(['не забыть ощущение чистой дырки.']);
      } else {
        await printAndWait([
          'значит, участь ',
          you.get_colored_name(),
          ', дошедшего сюда, тоже понятна——',
          you.get_colored_name(),
          ' смутно думает.',
        ]);
        await printAndWait([
          'Не забыть ту ночь, не забыть, как всем телом распоряжаются другие?',
        ]);
        await printAndWait(['Или не забыть ощущение чистой дырки?']);
        await printAndWait(['——Такой шёпот у горящих от лекарства ушей.']);
      }
      setColor();
      println();
      await printAndWait(['Хрусть']);
      await printAndWait([
        'жёсткий нажим гонит боль и ещё больше удовольствия от сосков в мозг ',
        you.get_colored_name(),
        ' — нельзя отвлекаться, пока её ебут!',
      ]);
      if (is_teammate) {
        await printAndWait([
          'Но член ',
          uma_sex_title,
          '-госпожи сзади кажется ',
          you.get_colored_name(),
          ' знакомым, ',
        ]);
        await printAndWait([
          'обычно это не проблема: как беременная шлюха, тебя, наверное, уже выебали все ',
          uma_sex_title,
          ' академии, ',
        ]);
        await printAndWait(['но…… эта знакомость, ']);
        await printAndWait([
          'неужели сзади — твоя подопечная, ',
          uma_sex_title,
          '?',
        ]);
        await printAndWait(['Скрыв личность, быть выебанным подопечной, ']);
        await printAndWait([
          'почему-то ',
          you.get_colored_name(),
          ' чувствует напряжение, будто пойман на измене…… и возбуждение.',
        ]);
        await printAndWait(['Наверняка злится, наверняка в ярости, ']);
        await printAndWait([
          'свой тренер, своя секс-рабыня, своя беременная шлюха, ',
        ]);
        await printAndWait([
          'отказывается носить её ребёнка и даже предпочитает быть изнасилованным незнакомцами.',
        ]);
      } else {
        await printAndWait([
          'Но член ',
          uma_sex_title,
          '-госпожи сзади почему-то особенно нетерпелив.',
        ]);
        await printAndWait([
          'Обычно это не проблема: как беременная шлюха, как дырка для сброса, любая грубость закономерна.',
        ]);
        await printAndWait(['но…… такая спешка, даже злость, ']);
        await printAndWait([
          'неужели сзади — твой фанат, ',
          uma_sex_title,
          '?',
        ]);
        await printAndWait(['Скрыв личность, быть выебанным фанатом, ']);
        await printAndWait([
          'почему-то ',
          you.get_colored_name(),
          ' чувствует напряжение, будто пойман на измене…… и возбуждение.',
        ]);
        await printAndWait(['Наверняка злится, наверняка в ярости.']);
        await printAndWait(['Обоготворяемый тренер, объект восхищения, ']);
        await printAndWait([
          'в такой низкой позе топчет чистую любовь маленькой ',
          uma_sex_title,
          '.',
        ]);
      }
      println();
      await printAndWait(['Злишься, да? В ярости, да?']);
      await printAndWait([
        'Значит, эту готовую к любому самку-свинью нужно жёстко осеменить внутри, ',
      ]);
      await printAndWait([
        'разъебать похотливую дырку этой свиньи, сделать её беременной, беременной, беременной, ',
      ]);
      await printAndWait([
        'чтобы она полностью стала собственностью твоего члена.',
      ]);
      println();
      if (is_teammate) {
        await printAndWait([
          'От этой мысли бёдра ',
          you.get_colored_name(),
          ' крутятся ещё веселее.',
        ]);
        await printAndWait([
          'Вскоре член на миг замирает и выстреливает белой жижей, которой ',
          you.get_colored_name(),
          ' ждал сильнее всего, ',
        ]);
        await printAndWait(['а-ах…… какая жалость, ']);
        await printAndWait([
          'ощущение промаха всплывает в сердце ',
          you.get_colored_name(),
          ' в сердце,',
        ]);
        await printAndWait([
          'но следующий знакомый член снова ебёт ',
          you.get_colored_name(),
          ' до неспособности думать о лишнем.',
        ]);
        println();
        await printAndWait([
          'Следующего ребёнка — всё же пусть выносит любимая подопечная ',
          uma_sex_title,
          ', ',
        ]);
        await printAndWait([
          'в забытьи ',
          you.get_colored_name(),
          ' принимает решение, которое, возможно, не сдержит.',
        ]);
      } else {
        await printAndWait([
          'От этой мысли бёдра ',
          you.get_colored_name(),
          ' крутятся ещё веселее.',
        ]);
        await printAndWait([
          'Но, возможно, из-за слишком яростной атаки и слабой защиты, ',
        ]);
        await printAndWait(['а может, просто совпало по времени, ']);
        await printAndWait([
          'когда только собрался всерьёз, твёрдое сзади дрогнуло и излило в дырке огромную порцию белой жижи.',
        ]);
        await printAndWait(['а-ах…… какая жалость, ']);
        await printAndWait([
          'пустое разочарование всплывает в сердце ',
          you.get_colored_name(),
          ' в сердце.',
        ]);
        await printAndWait([
          'но следующий знакомый член снова ебёт ',
          you.get_colored_name(),
          ' до неспособности думать о лишнем.',
        ]);
        println();
        await printAndWait(['В следующий раз — старайся сильнее.']);
        await printAndWait([
          'Чувствуя, как влитые сперматозоиды более яростный член выгребает из дырки, ',
          you.get_colored_name(),
          ' беззвучно шлёт благословение.',
        ]);
      }
      println();
      await printAndWait(
        '【Под поливом спермы зловеще-розовый инмон тихо меняет форму】',
        { color: buff_colors[2] },
      );
    };
    f.title = [
      { color: buff_colors[2], content: 'Наказание за долг беременной шлюхи' },
    ];
    return f;
  })(),
  report_preg_duty: (() => {
    const title = 'Долг';
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} edu_count
     * @param {number} children_count
     */
    const f = async (you, father, edu_count, children_count) => {
      await printAndWait([
        you.get_colored_name(),
        ' смотришь на узор беременности на инмоне живота и бежишь в туалет блевать.',
      ]);
      await printAndWait([
        'Перед этой маленькой жизнью, сбившей ритм, ',
        you.get_colored_name(),
        ' решает——',
      ]);
      const ret = await degeneration_to_evil(
        'Радостно ждать',
        'Бессильно принять факт',
      );
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' радостно мечтает о ']);
        await printAndWait('будущем с ребёнком, о воспитании после рождения……');
        await printAndWait([
          'Но самое важное в сердце ',
          you.get_colored_name(),
          ' всё же ',
        ]);
        println();
        await printAndWait('кто отец ребёнка?');
        await printAndWait(
          `Та, что проиграла скачку и в ярости оставила зубные следы по всему телу, ${father.uma_sex_title}?`,
        );
        await printAndWait(
          `Или та, что выиграла и от радости даже помочилась в матку, ${father.uma_sex_title}?`,
        );
        if (edu_count > 0) {
          await printAndWait(
            `Или подопечная, которая каждый день перед тренировкой сначала заливает в киску весь дневной запас и гонит на Тренировочное поле, сжимая белую жижу, что капает в коридоре, — твоя ${father.uma_sex_title}?`,
          );
        }
        if (children_count > 0) {
          await printAndWait(
            'Или тот, кто в памяти ещё ребёнок, но будто помнит, как выходил из маминого живота, и каждый раз ебёт бесполезную маму в ахегао-свинью — заботливое «маленькое сокровище»?',
          );
        }
        println();
        await printAndWait(
          'Кто бы ни был — рождение новой жизни всегда радость',
        );
        await printAndWait([
          'Но больше всего ',
          you.get_colored_name(),
          ' беспокоит всё же……',
        ]);
        println();
        await printAndWait(
          '(Пока ребёнок не родится — долг беременной шлюхи……)',
        );
        println();
        await printAndWait([
          'Ещё не успев додумать фразу, удар сзади обрывает мысли ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait(
          `Ему плевать на твоё согласие, даже не проверяет, мокрый ли низ——— конечно, после переделки тела и незачем: двадцать четыре часа мокро и ждёт ${father.uma_sex_title}-госпожу——— и сразу всаживает`,
        );
        await printAndWait([
          'Яростными ударами ',
          you.get_colored_name(),
          ' ебёт почти до отключения, и только тогда ',
          father.uma_sex_title,
          ' кое-как кончает, вытирает член лицом ',
          you.get_colored_name(),
          ' и сразу уходит',
        ]);
        await printAndWait([
          'За всё это ',
          you.get_colored_name(),
          ' даже не видел(а), как тот выглядит',
        ]);
        println();
        await printAndWait('Не то что беременность');
        await printAndWait(
          `даже с огромным животом для ${father.uma_sex_title}-хозяина это всего лишь ещё одна зона, которую можно мять`,
        );
        await printAndWait([
          'Поняв это, ',
          you.get_colored_name(),
          ' — низ снова сводит судорогой, неконтролируемый сквирт на солнце даёт радугу, будто поздравляет с беременностью',
        ]);
      } else {
        await printAndWait('Удивляться нечему');
        await printAndWait(
          '———каждый день даже в туалет не пройти: пять-шесть членов за дверью, и потом сам(а) тщательно вылизываешь пол, смешанный со сквиртом, спермой и мочой недержания. Беременность ли так уж немыслима?',
        );
        println();
        await printAndWait('Кто отец ребёнка?');
        await printAndWait([
          you.get_colored_name(),
          ' снова не можешь не подумать——',
        ]);
        await printAndWait(
          `Та пара, что выглядит очень близкой и даже беременную шлюху использует вдвоём, двое ${father.uma_sex_title}?`,
        );
        await printAndWait(
          'Или кто-то из отряда, что клялся перед тобой, залил каждый вход снаружи и изнутри, даже выдох пахнет густой спермой…… и потом пришлось слизывать сперму с тела в рот и запихивать в киску — может, тогда и зачала',
        );
        println();
        await printAndWait([
          'Незаметно ',
          you.get_colored_name(),
          ' в сердце беспричинно боится будущего ребёнка',
        ]);
        if (children_count > 0) {
          await printAndWait(
            `Вспоминая то детство — будто вчера, ${father.sex} уже не чистый малыш, а зверь, который смотрит похотью на дырку, откуда сам вышел`,
          );
          await printAndWait([
            you.get_colored_name(),
            ' невольно боишься, не выебет ли ребёнок тебя снова до стыда, с которым матерью не назовёшься',
          ]);
        } else {
          await printAndWait(
            `Этот будущий ребёнок станет ли как другие ${father.uma_sex_title}, и будет считать тебя беременной шлюхой……`,
          );
          await printAndWait(
            '……Нет, надо исполнять долг: хотя бы вырастить этого ребёнка человеком',
          );
        }
        println();
        await printAndWait(
          'Ребёнок, выращенный беременной шлюхой, правда сможет стать нормальным взрослым?',
        );
        await printAndWait(
          `Каждый день видя, как маму разные ${father.elder_sibling_sex_title} ебут до слюней и соплей, без достоинства умоляющую`,
        );
        await printAndWait('Такой ребёнок правда сможет упрямо вырасти?');
        await printAndWait('Впрочем, смеяться не над чем');
        await printAndWait([
          'Ведь сейчас снова школьник младшего отделения, проходя мимо туалета, ',
          father.uma_sex_title,
          ' валит на пол обслуживать член ',
          you.get_colored_name(),
          ', и надежда остаётся только на такой тонкий луч',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_in_sleep: (() => {
    const title = 'Новая жизнь';
    /**
     * 孕袋被睡奸生子
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} children_count
     * @param {number} edu_count
     */
    const f = async (you, father, children_count, edu_count) => {
      await printAndWait([you.get_colored_name(), ' берёт ребёнка на руки——']);
      const ret = await degeneration_to_evil(
        'Нежно погладить',
        'Беззвучно сопротивляться',
      );
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' в сердце полна нежности',
        ]);
        await printAndWait('Кто отец — уже не важно');
        await printAndWait([
          'скорее, просто выполняя рутину беременной шлюхи, получил такого милого ребёнка…… ',
          you.get_colored_name(),
          ' в душе благодарит неведомого отца',
        ]);
        await printAndWait('Дальше — как следует вырастить этого ребёнка……');
        await printAndWait([
          'Незаметно в сердце ',
          you.get_colored_name(),
          ' снова прорастают ответственность и честь тренера……',
        ]);
        printButton('「!」', 1);
        await input();
        await printAndWait([
          'Внезапная струя смывает ',
          you.get_colored_name(),
          ' из фантазии',
        ]);
        await printAndWait(
          'Ребёнок на руках орошает мать первой в жизни мочой',
        );
        await printAndWait([
          'Стать туалетом для собственного ребёнка — даже по случаю — даёт ',
          you.get_colored_name(),
          ' невероятное удовольствие, будто родился только чтобы этот ребёнок мог использовать его как туалет',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' нежно вылизывает у ребёнка место, откуда вышла моча, затем всю жидкость с себя чисто слизывает в рот и довольно облизывает пальцы',
        ]);
        println();
        await printAndWait(
          'Такая низость — даже у самой низкой беременной шлюхи не хуже',
        );
        await printAndWait(
          'С таким собой разве ещё возможно вернуться к прежней жизни',
        );
        await printAndWait('И разве можно вынести возвращение к той жизни');
        await printAndWait([
          you.get_colored_name(),
          ' нежно смотрит на ребёнка на руках, выражение то же',
        ]);
        await printAndWait('но мысли уже другие');
        await printAndWait(
          '————как вырастить этого ребёнка самым подходящим хозяином для дрессуры себя?',
        );
      } else {
        await printAndWait(
          'К этому ребёнку чувства, которые у матери должны быть, стали тусклыми',
        );
        await printAndWait('Хотя знает: новорождённый невиновен……');
        printButton('「!」', 1);
        await printAndWait(['Вдруг ', you.get_colored_name(), ' вскрикивает']);
        await printAndWait([
          'Первая моча ребёнка будто прицелилась — хлещет и заливает лицо ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait(
          'Медсестра добродушно смеётся, будто радуясь здоровью ребёнка',
        );
        await printAndWait([
          'Но ',
          you.get_colored_name(),
          ' в сердце нет радости — в голове всплывают прошлые дни',
        ]);
        println();
        await printAndWait(
          `Утром вынужден(а) раздвинуть ноги, присесть, открыть рот и для ещё не проснувшейся ${father.uma_sex_title} обработать утренний стояк: проглотить у ${father.uma_sex_title} первую за день сперму и мочу.`,
        );
        await printAndWait(
          `Вечером на Тренировочном поле ${father.uma_sex_title} после тренировки умоляют снять похоть: берёшь в рот член, полный дневного пота и мочевой корочки, и даёшь ${father.couple_title} выместить всю усталость тренировок тебе в рот`,
        );
        if (children_count > 0 || edu_count > 0) {
          await printAndWait([
            you.get_colored_name(),
            ' с горечью вспоминаешь прошлую ночь',
          ]);
          await printAndWait([
            'Даже когда ',
            children_count > 0
              ? 'ребёнок'
              : `подопечная ${father.uma_sex_title}`,
            ' лунатиком зашёл в комнату, полусонно залил киску и силой разжал спящие губы для очистки — ты так и не проснулся(ась)',
          ]);
          println();
          await printAndWait([
            you.get_colored_name(),
            ' даже начинаешь сомневаться: не привык(ла) ли уже к такой жизни……',
          ]);
          await printAndWait([
            'Нет, нельзя так думать, ',
            you.get_colored_name(),
            ' резко трясёт головой',
          ]);
        }
        println();
        await printAndWait('……В итоге всплывает только боль. Но……');
        await printAndWait(
          'глядя на ничего не знающего ребёнка на руках, который даже писает матери на лицо и хихикает',
        );
        await printAndWait('Детская природа вне добра и зла……');
        await printAndWait('Может, ещё есть шанс……?');
        println();
        await printAndWait('Забыв, как дети учатся у окружающего поведения');
        await printAndWait(
          `забыв, что объект службы беременной шлюхи — «все ${father.uma_sex_title}» без различия статуса`,
        );
        await printAndWait(
          'не заметив, что медсестра рядом уже не может терпеть и хочет орального обслуживания беременной шлюхи',
        );
        await printAndWait(
          'тем более не замечаешь, как бессознательно слизал(а) мочу родного ребёнка с себя',
        );
        await printAndWait([
          you.get_colored_name(),
          ' держишь ребёнка, и даже когда силой заставляют сосать толстый член под юбкой медсестры, свет в глазах не гаснет',
        ]);
        println();
        if (get('exp:0:生产次数') > 0) {
          await printAndWait([
            'Снова с пустой мечтой ',
            you.get_colored_name(),
            ' решает: на этот раз точно вырастить ребёнка как следует',
          ]);
        } else {
          await printAndWait([
            'С пустой мечтой ',
            you.get_colored_name(),
            ' решает: обязательно вырастить ребёнка как следует',
          ]);
        }
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_after_raped: (() => {
    const title = 'Новая жизнь';
    /**
     * 孕袋被强奸生子
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' берёт ребёнка на руки——']);
      const ret = await degeneration_to_evil(
        'У ребёнка должен быть папа',
        'Нет, я и сам(а) справлюсь',
      );
      if (ret === 1) {
        await printAndWait('……Как ни крути, сам(а) может и проживёшь');
        await printAndWait(
          'Но хотя бы хочется, чтобы у ребёнка была полная семья',
        );
        println();
        await printAndWait(
          `Смотрит на отца ребёнка и протягивает младенца ${father.sex} посмотреть`,
        );
        await printAndWait(
          `Пусть этот ребёнок пробудит хоть что-то — пусть ${father.sex} наконец поймёт, что такое чувство долга`,
        );
        await printAndWait([
          father.get_colored_name(),
          ' крепко обнимает ',
          you.get_colored_name(),
          ' и ребёнка, клянясь впредь хорошо относиться к ',
          you.get_colored_name(),
          ' и к ребёнку',
        ]);
        await printAndWait('Блудный отец вернулся, мать не бросила');
        await printAndWait(
          'Фантазия про семью из трёх человек будто стала явью',
        );
        println();
        await printAndWait('Однако……');
        await printAndWait([
          'Профессиональный инстинкт беременной шлюхи не даёт ',
          you.get_colored_name(),
          ' пропустить, ',
        ]);
        await printAndWait([
          'как при виде того, как ты кормишь грудью, ',
          father.get_colored_name(),
          ' дрожит между ног',
        ]);
        println();
        await printAndWait('Семейная жизнь…… отличный предлог');
        await printAndWait(
          'Тогда даже если, пока кормишь, в рот сунут член, можно одним словом списать на «добавку питания»',
        );
        await printAndWait([
          'Как муж ',
          father.get_colored_name(),
          ' нежно обнимает тебя с ребёнком на руках — картина, что развеет сомнения любого о вашей семье…… если не заметят толстый член, который в то же время затыкает текущую киску',
        ]);
        await printAndWait(
          'Даже когда ребёнок вырастет…… тебя будут трахать вместе с отцом, зажмут с двух сторон, и ты утонешь в мужских членах……',
        );
        println();
        await printAndWait([
          'Думая о таком будущем, ',
          you.get_colored_name(),
          ' невольно облизывает губы……',
        ]);
        await printAndWait('и начинаешь ждать такого завтра');
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' сверлишь взглядом того, кто тогда с кайфом кончил в тебя без всякой ответственности, ',
          father.get_colored_name(),
        ]);
        await printAndWait(
          `Такой ${father.sex} разве возьмёт на себя отцовство`,
        );
        await printAndWait(
          'Нужен тот, кто в унижении поддержит тебя и ребёнка, защитит ребёнка',
        );
        await printAndWait(
          'а не мразь, которая, когда тебя используют как дырку, заткнёт последнюю голосовую щель членом',
        );
        println();
        await printAndWait('Даже в одиночку вырастишь этого ребёнка');
        await printAndWait([
          'Сейчас ',
          you.get_colored_name(),
          ' явно выбирает самую тяжёлую дорогу',
        ]);
        println();
        await printAndWait('Вдруг ребёнок на руках плачет');
        await printAndWait('Голоден? Хочет молока?');
        await printAndWait('Тогда…… нынешнее ты, это натренированное тело');
        await printAndWait(
          `когда сосут сосок, обязательно вспомнишь тех, кто кусал и лизал соски, тех ${father.uma_sex_title}.`,
        );
        await printAndWait(
          'В миг, когда грудь берут в рот, от воспоминаний вечеров, когда мяли и доили, сразу кончишь',
        );
        await printAndWait(
          'Даже когда ребёнок допьёт и ляжет у груди…… не вспомнишь ли член почти с младенческой теплотой, что метил грудь, а потом заливал густую белую жижу в рот?',
        );
        println();
        await printAndWait(
          'А потом, даже если выдержишь и вырастишь этого ребёнка……',
        );
        await printAndWait(
          'когда ребёнок, ещё не зная, что такое любовь, но инстинктом зная, что такое секс, посмотрит на тебя таким взглядом',
        );
        await printAndWait('что тогда делать');
        println();
        await printAndWait('Дорога впереди будто сплошная тьма……');
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_dedicate: (() => {
    const title = 'Новая жизнь';
    /**
     * 孕袋主动献身生子
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' берёт ребёнка на руки——']);
      const ret = await degeneration_to_evil(
        'Вспомнить наслаждение',
        'Проснуться материнской любви',
      );
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' держит ребёнка, в сердце поднимается волна',
        ]);
        await printAndWait([
          ' и ',
          you.get_colored_name(),
          ' и ',
          father.get_colored_name(),
          ' — ребёнок от соединения',
        ]);
        await printAndWait('……нет…… не соединение');
        await printAndWait([
          'а то, где гены ',
          you.get_colored_name(),
          ' сами пали ниц перед генами ',
          father.get_colored_name(),
          ' и так родились',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' тело не может противиться совместимости, не может противиться голоду на дне генов',
        ]);
        await printAndWait([
          'Глядя на этого ребёнка, ',
          you.get_colored_name(),
          ' в сердце полна нежности',
        ]);
        await printAndWait([
          'Каждая тень ',
          father.get_colored_name(),
          ' в нём — очередное яростное и безжалостное сладкое насилие',
        ]);
        await printAndWait([
          'Думая, как поведёшь его на улицу, будто несёшь доказательство, что ты персональная беременная шлюха ',
          father.get_colored_name(),
          '……',
        ]);
        await printAndWait([you.get_colored_name(), ' низ невольно дрожит']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' держит ребёнка, в сердце поднимается волнение',
        ]);
        await printAndWait([
          ' и ',
          you.get_colored_name(),
          ' и ',
          father.get_colored_name(),
          ' — ребёнок от соединения',
        ]);
        await printAndWait('Нет…… не соединение');
        await printAndWait([
          'а то, где гены ',
          father.get_colored_name(),
          ' насиловали гены ',
          you.get_colored_name(),
          ' и так родились',
        ]);
        await printAndWait([
          'Трудно противиться врождённому рабству этого тела: даже если сердце не принимает и даже ненавидит, переделанное тело само откроет комнату для малыша и приготовится, чтобы ',
          father.get_colored_name(),
          ' осеменил',
        ]);
        await printAndWait([
          'Глядя на ребёнка на руках, ',
          you.get_colored_name(),
          ' должен(на) ненавидеть',
        ]);
        await printAndWait([
          'Каждая тень ',
          father.get_colored_name(),
          ' в нём — очередное яростное и безжалостное насилие',
        ]);
        await printAndWait([
          'В ту ночь, когда зачал(а) этого ребёнка, по требованию ',
          father.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' стоял(а) как щенок, пока не залили спермой и руки не держали тело, ',
          father.get_colored_name(),
          ' только тогда вынул член и засунул в рот ',
          you.get_colored_name(),
          ' — на этом кончил',
        ]);
        await printAndWait([
          'Но, может, гены так и совпали, ',
          you.get_colored_name(),
          ' обнаруживает, что ненавидеть не может: в сердце только то, что зовут материнской любовью',
        ]);
        await printAndWait([
          '— только ',
          you.get_colored_name(),
          ' ещё не знает: когда ребёнок вырастет, это чувство снова станет генетическим подчинением……',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
