/**
 * @file 杂项
 * @author 雞雞
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

module.exports = {
  /**
   * 办公室初见
   * @param {CharaTalk} aoi 桐生院葵
   * @param {CharaTalk} riko 㭴本理子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} r_call_a 㭴本理子对桐生院葵的称呼
   * @param {boolean} empty_team 是否没有队伍成员
   */
  async welcome_trainer_office(aoi, riko, you, r_call_a, empty_team) {
    await printAndWait([
      you.get_colored_name(),
      ' приходит в общую тренерскую — там уже двое.',
    ]);
    await riko.say_as_unknown_and_wait([
      'Здравствуйте, вы и есть новый ',
      you.actual_name,
      ' тренер?',
    ]);
    await riko.say_and_wait([
      'Я ',
      riko.get_colored_actual_name(),
      ', поработаем вместе во славу Центрального Трейсена.',
    ]);
    await aoi.say_and_wait([
      'Приветствую, я ',
      aoi.get_colored_actual_name(),
      ', прошу вашего расположения.',
    ]);
    if (empty_team) {
      await riko.say_and_wait([
        'Подопечной у вас пока нет; если что-то не заладится — обращайтесь ко мне или вот к ',
        r_call_a,
        '.',
      ]);
    }
  },

  /**
   * 以下是 URA 颁奖典礼的地文
   */

  ura_reward: (() => {
    /**
     * URA 颁奖典礼
     * @author 雞雞
     * @param {CharaTalk} etusko
     * @param {CharaTalk} you
     * @param {function(TextContent):Promise} report 用于主持人发言的回调函数
     * @param {string} year 年度
     * @param {string} uma 马郎 or 马娘
     * @param {boolean} is_etusko 是否是乙名史主持（乙名史怀孕或育成期间不会主持）
     * @param uma_list_cb 用于输出选手立绘列表的回调函数们
     * @param {function} uma_list_cb.g1 G1 马娘
     * @param {function} uma_list_cb.best_trainer 年度训练员
     * @param {function} uma_list_cb.junior 最佳新秀马娘
     * @param {function} uma_list_cb.classic 最佳经典马娘
     * @param {function} uma_list_cb.senior 最佳资深马娘
     * @param {function} uma_list_cb.uoty 年度马娘
     * @param {string} uma_list_cb.default_best_trainer 如果玩家没赢得年度训练员，作为替代的训练员名
     * @returns {Promise<void>}
     */
    const f = async (
      etusko,
      you,
      report,
      year,
      uma,
      is_etusko,
      uma_list_cb,
    ) => {
      await report([
        'Скаковые ',
        uma,
        ', болельщики, добрый вечер! Главное событие года, которого все так ждали, — церемония URA — начинается!',
      ]);
      await report([
        'Как всегда, оргкомитет учредил несколько наград — в честь тех ',
        uma,
        ', кто выложился без остатка и подарил нам блестящие выступления, и в честь тренеров, что молча стояли за спиной у ',
        uma,
        '!',
      ]);
      if (is_etusko) {
        await report([
          'В этом году церемонию снова веду я, ',
          etusko.get_colored_actual_name(),
          ', прошу любить и жаловать!',
        ]);
      }
      println();
      await report([
        'Прежде чем начать, вспомним ',
        year,
        ' год: какие скаковые ',
        uma,
        ' блистали в скачках G1!',
      ]);
      println();
      if (typeof uma_list_cb.g1 === 'function') {
        uma_list_cb.g1();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(имена нескольких участниц — жаль, никого из команды ',
            you.get_colored_name(),
            ')',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('Ещё раз спасибо всем участницам за их труд!');
      println();
      await report('Что ж, не будем тянуть — переходим к наградам!');
      println();
      await report('Первая… «Лучший тренер года»!');
      println();
      if (typeof uma_list_cb.best_trainer === 'function') {
        uma_list_cb.best_trainer();
        await waitAnyKey();
        await report([
          you.get_colored_actual_name(),
          'Труд тренера видно всем!',
        ]);
      } else {
        if (typeof uma_list_cb.default_best_trainer === 'string') {
          await report([
            uma_list_cb.default_best_trainer,
            'Труд тренера видно всем!',
          ]);
        } else {
          await report('В этом году подходящих кандидатов не нашлось…');
          await report(
            'Очень жаль; надеемся, в следующем счастливчик найдётся!',
          );
        }
      }
      println();
      await report('Далее… «Лучший новичок года»!');
      println();
      if (typeof uma_list_cb.junior === 'function') {
        uma_list_cb.junior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(имя и фото той, кто только что закончила юниорский год, — жаль, не из команды ',
            you.get_colored_name(),
            ')',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('Надеемся, она и дальше будет светить на дорожке!');
      println();
      await report('Дальше… «Лучшая классического года»!');
      println();
      if (typeof uma_list_cb.classic === 'function') {
        uma_list_cb.classic();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(имя и фото той, кто только что закончила классический год, — жаль, не из команды ',
            you.get_colored_name(),
            ')',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('Уже видно, как из неё вырастает опора!');
      println();
      await report('Затем… «Лучшая старшего года»!');
      println();
      if (typeof uma_list_cb.senior === 'function') {
        uma_list_cb.senior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(имя и фото той, кто только что закончила старший год, — жаль, не из команды ',
            you.get_colored_name(),
            ')',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('Тут и сомнений нет — настоящий ветеран!');
      println();
      await report([
        'И наконец! Мгновение, что решает, кто в этом году быстрее, выше и сильнее всех! Кто из ',
        uma,
        ' оставит свой единственный след среди великих имён?!',
      ]);
      await report([
        '«Представительница года среди ',
        uma,
        '» — высшая честь достаётся…',
      ]);
      println();
      if (typeof uma_list_cb.uoty === 'function') {
        uma_list_cb.uoty();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(имя и фото участницы — жаль, не из команды ',
            you.get_colored_name(),
            ')',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('Вот и определился сильнейший!');
      println();
      await report(
        'Спасибо, что были с нами сегодня; до встречи в следующем году!',
      );
    };
    f.title = 'Церемония URA';
    return f;
  })(),
  /** 乙名史怀孕或育成期间，URA 颁奖典礼的主持人称呼 */
  ur_alternative_reporter: 'Ведущая',
  /**
   * 训练员年度成绩
   * @param {PrintedSpan} total 总胜场
   * @param {PrintedSpan} money 总赏金
   * @param {PrintedSpan} g1_wins G1 胜利数
   * @param {PrintedSpan} all_wins 重赏胜利数
   */
  get_ur_trainer_reward(total, money, g1_wins, all_wins) {
    return [
      'Побед команды за год: ',
      total,
      { isBr: true },
      'Призовых команды за год: ',
      money,
      ' ма-монет',
      { isBr: true },
      'Побед команды в G1 за год: ',
      g1_wins,
      { isBr: true },
      'Побед команды в рейтинговых скачках за год: ',
      all_wins,
    ];
  },
  /**
   * 训练员年度成绩
   * @param {PrintedSpan} total 总胜场
   * @param {PrintedSpan} money 总赏金
   * @param {PrintedSpan} g1_wins G1 胜利数
   * @param {PrintedSpan} all_wins 重赏胜利数
   */
  get_ur_uma_reward(total, money, g1_wins, all_wins) {
    return [
      'Побед за год: ',
      total,
      { isBr: true },
      'Призовых за год: ',
      money,
      ' ма-монет',
      { isBr: true },
      'Побед в G1 за год: ',
      g1_wins,
      { isBr: true },
      'Побед в рейтинговых скачках за год: ',
      all_wins,
    ];
  },

  /**
   * 重复育成
   * @author 天马闪光蹄
   */

  sc_event_name: '「Сон」',
  get_sc_buttons: () =>
    get('flag:初见重复育成') === 1
      ? {
          yes: '«Я за этим и пришёл»',
          no: '«…Хватит»',
        }
      : {
          yes: 'Идти дальше',
          no: 'Повернуть назад',
        },
  /**
   * 事件前半段
   * @param {CharaTalk} you 玩家
   */
  async sc_event_former(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait('Глухая ночь.');
      await printAndWait([
        you.get_colored_name(),
        ' одиноко идёт в центр академии Трейсен.',
      ]);
      await printAndWait('Там спокойно стоит статуя трёх богинь.');
      await printAndWait([
        you.get_colored_name(),
        ' глубоко вдыхает, подходит к источнику и опускает в воду письмо, написанное заранее.',
      ]);
      await printAndWait([
        'Лунный отблеск в воде вдруг качнулся, поплыло тусклое свечение — и ',
        you.get_colored_name(),
        ' услышал, как в голове разом зазвучало несколько голосов:',
      ]);
      await printAndWait(
        'Жизнь непостоянна. И храбрец, что вырывается вперёд, и владыка поколения, и император, держащий свой удел, — путь ни у кого не гладок, и свет ли, тьма ли, всё в конце концов пена сна.',
      );
      await printAndWait(
        'Но кошмар минует, а хороший сон может сбыться. И в пене бывает то, что хочется выловить и сберечь.',
      );
      await you.say_as_unknown_and_wait('Так скажи мне, в чём твоя решимость.');
    } else {
      await printAndWait([you.get_colored_name(), ' снова вернулся сюда.']);
      await printAndWait([
        'Это… который раз? ',
        you.get_colored_name(),
        ' странно не может этого вспомнить.',
      ]);
      await printAndWait('Впрочем, не в этом суть…');
      await printAndWait([
        you.get_colored_name(),
        ' — важно то, что у него на сердце.',
      ]);
    }
  },
  sc_limit_template: 'Выберите, кого снова воспитывать (не больше %LIMIT%)',
  sc_name_template: '%NAME%',
  sc_name_inherited_template: '%NAME%(уже унаследована)',
  /**
   * 事件前半段
   * @param {CharaTalk} you 玩家
   */
  async sc_event_latter(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' смотрит статуе в лицо, вглядывается в три пары живых, будто настоящих глаз, и склоняет голову.',
      ]);
      await printAndWait('А потом всё залило сиянием…');
      await printAndWait('Пора искать правду «следующего раза».');
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' смотрит на изваяния трёх богинь; водяная дымка размывает их лица, и ',
        you.get_colored_name(),
        ' хочет что-то сделать, только приоткрыл рот и протянул руку — как вдруг…',
      ]);
      await printAndWait('Всё перед глазами перекосилось.');
      await printAndWait(
        'И тут же вернулось на место, будто ничего и не было.',
      );
      await printAndWait('……');
      await printAndWait('Всё как обычно… или всё-таки нет?');
      await printAndWait('Что же… я такое сделал?');
    }
  },

  /**
   * 超得地文
   */

  /**
   * 超得，但是队伍已达限额
   * @param {CharaTalk} taste 理事长
   */
  async star_drew_limited(taste) {
    await taste.say_and_wait(
      'Не  по  ня  тно! В твоей команде уже достаточно участников!',
    );
  },
  /**
   * 超得，但是不在招募季
   * @param {CharaTalk} taste 理事长
   */
  async star_drew_wrong_date(taste) {
    await taste.say_and_wait(
      'Сом  не  ние! Сейчас не время набирать подопечных!',
    );
  },
  /**
   * 超得开场白
   * @param {CharaTalk} taste 理事长
   */
  star_drew_intro(taste) {
    taste.say(
      'Со  об  ща  ю! Талантливых детей, ещё не в команде, академия разрешает уже зарекомендовавшим себя тренерам брать в прямое наставничество — но нужна репутация, которой поверят!',
    );
    taste.say(
      'Вни  ма  ние! Даже после такого назначения всё равно выстраивай отношения с нуля!',
    );
  },
  star_drew_options: [
    'Выбрать из списка',
    'Назначить по имени',
    'Назначить по ID',
    'Ещё подумать',
  ],
  star_drew_filter_template: 'Персонажи с %FILTERS%',
  star_drew_filter_kojo_template: 'коджо %KOJO%',
  star_drew_filter_image: 'особый спрайт дрессуры',
  star_drew_bt_filter_kojo_r: 'Набор',
  star_drew_bt_filter_kojo_d: 'Быт',
  star_drew_bt_filter_kojo_ed: 'Воспитание',
  star_drew_bt_filter_kojo_l: 'Влюблённость',
  star_drew_bt_filter_kojo_er: 'Дрессура',
  star_drew_bt_filter_kojo_b: 'Подвал',
  star_drew_bt_filter_image: 'Спрайт',
  sd_f_title_kojo_r:
    'Коджо набора: особые сцены и тексты при вступлении в команду.',
  sd_f_title_kojo_d:
    'Бытовое коджо: особые сцены и тексты в повседневности и на праздниках.',
  sd_f_title_kojo_ed:
    'Коджо воспитания: особые сюжеты и линии в ходе воспитания.',
  sd_f_title_kojo_l:
    'Коджо влюблённости: особые сцены и события при росте влюблённости до определённых ступеней.',
  sd_f_title_kojo_er:
    'Коджо дрессуры: особые сцены и тексты при секс-взаимодействии во время дрессуры.',
  sd_f_title_kojo_b:
    'Коджо подвала: особые сцены и тексты, когда персонаж похищает и держит игрока взаперти.',
  sd_f_title_image:
    'Особый спрайт дрессуры: уникальные позы персонажа во время дрессуры.',
  get_star_drew_selected: (name) => `${name} [назначена]`,
  star_drew_all_chara: 'Доступные для назначения',
  star_drew_other_chara: 'Другие персонажи',
  star_drew_chara_name_input: 'Введите имя персонажа для назначения',
  star_drew_chara_id_input: 'Введите ID персонажа для назначения',
  /**
   * 超得，但是重复选择
   * @param {CharaTalk} taste 理事长
   * @param {CharaTalk} chara 被超得的对象
   */
  async star_drew_duplicate(taste, chara) {
    await taste.say_and_wait([
      'На  по  ми  на  ние! ',
      chara.get_colored_name(),
      ' уже ждёт на тренировочном поле!',
    ]);
  },
  /**
   * 超得，但是没有选中任何人
   * @param {CharaTalk} taste 理事长
   */
  async star_drew_no_one(taste) {
    await taste.say_and_wait('Сом  не  ние! Такого человека нет!');
  },
  /**
   * 超得
   * @param {CharaTalk} taste 理事长
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} chara 被超得的对象
   * @param {boolean} changed 是否是变更超得对象
   * @returns {Promise<number>}
   */
  async star_drew(taste, you, chara, changed) {
    taste.say(['Вы  бор! Попросить академию помочь связаться с ', chara, '?']);
    printButton('「Сверхнабор!!」', 1);
    printButton('「Стоп!!」', 2);
    const ret = await input();
    if (ret === 1) {
      await taste.say_and_wait([
        'Жар  ко! ',
        chara,
        ' скоро часто будет на тренировочном поле — не упусти!',
      ]);
      if (changed) {
        await taste.say_and_wait([
          'Не  до  воль  на! Но в следующий раз, тренер ',
          you.get_colored_actual_name(),
          ', сначала подумай, потом решай!',
        ]);
      }
    } else {
      await taste.say_and_wait('Гнев! Сначала реши, потом приходи!');
    }
    return ret;
  },
  grand_live_header: 'В следующем году большая сцена на скачках:',

  /**
   * 投资理财地文
   */

  /**
   * 不够1k马币，拒绝投资
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} callname 百炼对玩家的称呼
   */
  async fund_reject(bryne, callname) {
    await bryne.say_and_wait([
      'Прости, ',
      callname,
      ', но у тебя вроде не хватает денег? Через мои каналы никто не берёт микроинвестиции меньше 1 000 ма-монет…',
    ]);
  },
  /**
   * 现在的投资总额和收益
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} funds 投资总额
   * @param {PrintedSpan} income 周收益
   */
  fund_summary(bryne, funds, income) {
    print([
      'Сейчас в ',
      bryne.get_colored_name(),
      ' вложено ',
      funds,
      ' ма-монет, они дают ',
      income,
      ' ма-монет в неделю.',
    ]);
  },
  bt_fund: 'Инвестировать (шаг 1000 ма-монет)',
  bt_ransom: 'Вывести',
  fund_confirm: 'Сколько ма-монет вложить?',
  /**
   * 追加投资额和总收益
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} new_funds 追加投资额
   * @param {PrintedSpan} income 追加后的周收益
   */
  async fund_result(bryne, new_funds, income) {
    await printAndWait([
      'В ',
      bryne.get_colored_name(),
      ' добавлено ',
      new_funds,
      ' ма-монет, они дают ',
      income,
      ' ма-монет в неделю.',
    ]);
  },
  get_ransom_confirm(funds) {
    return ['Сколько ма-монет вывести? Всего вложено ', funds, ' ма-монет:'];
  },
  /**
   * 赎回投资额、剩余投资额和总收益
   * @param {PrintedSpan} ransomed 赎回额度
   * @param {PrintedSpan|boolean} funds 赎回后的剩余投资额，如果还有就是 Object 类型，否则会是其他类型（Boolean）
   * @param {PrintedSpan} income 赎回后的周收益
   */
  async ransom_result(ransomed, funds, income) {
    print(['Выведено ', ransomed, ' ма-монет.']);
    if (typeof funds === 'object') {
      await printAndWait([
        'Осталось ',
        funds,
        ' ма-монет; в неделю это даёт ',
        income,
        ' ма-монет дохода.',
      ]);
    }
  },

  /**
   * 周年庆事件
   */

  /**
   * 十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   */
  async TEN(you, uma) {
    await printAndWait('Время бежит: три года, потом ещё три, потом ещё три.');
    await printAndWait([
      'Сакура цвела и облетала, облетала и цвела — ',
      you.get_colored_name(),
      ' провёл в академии Трейсен уже десять лет.',
    ]);
    await printAndWait([
      'За эти десять лет ',
      you.get_colored_name(),
      ' видел, как растёт одна скаковая ',
      uma,
      ' за другой, а ',
      you.get_colored_name(),
      ' из зелёного новичка стал в академии уважаемым человеком.',
    ]);
    await printAndWait([
      'Спасибо ',
      you.get_colored_name(),
      ' за то, что молча оберегал и шёл рядом с ',
      uma,
      '.',
    ]);
    await printAndWait([
      'Именно потому, что был ',
      you.get_colored_name(),
      ', эти десять лет вышли такими яркими.',
    ]);
  },
  /**
   * 二十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   * @param {string} they 她们 or 他们
   */
  async TWENTY(you, uma, they) {
    await printAndWait('Двадцать лет пролетели как белый конь мимо щели.');
    await printAndWait([
      'На тренировочном поле Трейсена шаги ',
      uma,
      ' всё не смолкают.',
    ]);
    await printAndWait([
      'Спасибо ',
      you.get_colored_name(),
      ' за то, что не отказался ни от одной мечты.',
    ]);
    await printAndWait([
      they,
      ' — в каждом её рывке есть тень ',
      you.get_colored_name(),
      '.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      'Листая дела нового набора, думаешь: может, среди этих незрелых имён родится следующая, кто перепишет историю.',
    ]);
  },
  /**
   * 三十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   */
  async THIRTY(you) {
    await printAndWait([
      'Тридцать лет — достаточно, чтобы ',
      you.get_colored_name(),
      ' стал(а) легендой в сердцах целого поколения.',
    ]);
    await printAndWait(
      'Трасса всё так же кипит, герб Трейсена всё так же светится.',
    );
    await printAndWait([
      'А историю ',
      you.get_colored_name(),
      ' уже помнят бессчётные люди.',
    ]);
    await printAndWait([
      'Спасибо, что ',
      you.get_colored_name(),
      ' тридцатью годами упорства и веры написал(а) неповторимую легенду.',
    ]);
  },
  /**
   * 四十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   * @param {string} they 她们 or 他们
   */
  async FORTY(you, uma, they) {
    await printAndWait([
      'Сорок лет — как щелчок пальцев: история ',
      you.get_colored_name(),
      ' уже неотделима от академии Трейсен.',
    ]);
    await printAndWait([
      'Годы сменяют годы, но упорство ',
      you.get_colored_name(),
      ' не меняется.',
    ]);
    await printAndWait([
      'Скаковые ',
      uma,
      ' снова и снова превосходят себя, бегут ради общих мечт, а ',
      you.get_colored_name(),
      ' всегда остаётся самым тёплым присутствием за спиной у ',
      they,
      '.',
    ]);
    await printAndWait([
      'На одной из стен славы академии висят фотографии сорока лет — на каждом снимке след ',
      you.get_colored_name(),
      '.',
    ]);
  },
  /**
   * 五十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   * @param {string} they 她们 or 他们
   */
  async FIFTY(you, uma, they) {
    await printAndWait(
      'Жизни человеку — пятьдесят лет, и всё как сон, как морок.',
    );
    await printAndWait(
      'Сакура цветёт как прежде, а академия Трейсен встретила своё полувековое сияние.',
    );
    await printAndWait(
      'Полвека хватит, чтобы изменилось всё, но кое-что не изменилось.',
    );
    await printAndWait([
      'Кто-то из прежних ',
      uma,
      ' стал легендой, кто-то ушёл за кулисы, но история ',
      they,
      ' продолжается благодаря ',
      you.get_colored_name(),
      '.',
    ]);
    await printAndWait([
      'А ',
      you.get_colored_name(),
      ' всё так же стоит на тренировочном поле и смотрит, как бегут новые скаковые ',
      uma,
      '.',
    ]);
  },
};
