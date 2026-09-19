/**
 * @file 比赛相关 - 系统提示
 * @author 黑奴队长
 */
const { get } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  contestants_conjunction: ' и ',
  prepare_report_sim: 'Проверяют подковы…',
  /** @param {PrintedSpan} chara 第一人气选手名 */
  get_prepare_report_high_mot: (chara) => [
    'Фаворит №1, ',
    chara,
    ', сегодня выглядит полна настроя!',
  ],
  /** @param {PrintedSpan} chara 第一人气选手名 */
  get_prepare_report_low_mot: (chara) => [
    'Фаворит №1, ',
    chara,
    ', сегодня выглядит без особого настроя!',
  ],
  /** @param {PrintedSpan} chara 第一人气选手名 */
  get_prepare_report_normal_mot: (chara) => [
    'Фаворит №1, ',
    chara,
    ', сегодня настрой средний!',
  ],
  prepare_record_sim: 'Проверяют дорожку…',
  /**
   * @param {PrintedSpan} race 比赛名
   * @param {string} uma 马娘 or 马郎
   */
  get_prepare_record_default: (race, uma) => [
    'На трассе ',
    race,
    ' сегодня все ',
    uma,
    ' выложатся, чтобы подарить вам мечту.',
  ],
  /**
   * @param {PrintedSpan} chara 第一人气选手名
   * @param {string} uma 马娘 or 马郎
   */
  get_prepare_record_sats_sho: (chara, uma) => [
    chara,
    ' спокойно входит в станок — чувствуется будущая великая ',
    uma,
    '.',
  ],
  /** @param {string} uma 马娘 or 马郎 */
  get_prepare_record_toky_yus: (uma) => [
    'Единственное в жизни Дерби для ',
    uma,
    ' — скоро станет известно, кто победит.',
  ],
  /** @param {PrintedSpan} race 比赛名 */
  get_prepare_record_kiku_sho: (race) => [
    'В этом году ',
    race,
    ' — как эпоха воюющих княжеств: сильных соперниц полно.',
  ],
  /** @param {PrintedSpan} chara 第一人气选手名 */
  get_prepare_record_takz_kin: (chara) => [
    'Чья мечта сбудется? Моя мечта — ',
    chara,
  ],
  beginning_report_sim: [
    'Проверяют станки…',
    'Проверяют стартовый пистолет…',
    'Участницы в станках…',
    'Старт!',
  ],
  /**
   * @param {PrintedSpan} race 比赛名
   * @param {string} gates 参赛选手人数
   * @param {string} uma 马娘 or 马郎
   * @returns {TextContent}
   */
  get_beginning_report(race, gates, uma) {
    const buffer = [
      [
        ['Все ', uma, 'Все '],
        ['Все ', uma, ' готовы…'],
        'Приготовиться…',
        '— ворота открыты!',
      ],
      [
        ['Каждая ', uma, ' на месте…'],
        'В любой миг — старт…',
        'Приготовились…',
        '— пошли!',
      ],
      [
        'Скачка вот-вот начнётся…',
        ['На старте ', uma, ' ', gates, ' — вот сколько…'],
        [get('flag:当前年').toString(), '…', race, '……'],
        '— начали!',
      ],
    ];
    return get_random_entry(buffer);
  },
  /** @param {string} uma 马娘 or 马郎 */
  get_first_report_no_bad_start: (uma) => [
    'Старт! Все ',
    uma,
    ' выходят ровно!',
  ],
  /**
   * @param {PrintedSpan} first 率先出闸选手名
   * @param {PrintedSpan} last 出迟选手名
   * @param {string} uma 马娘 or 马郎
   */
  get_first_report: (first, last, uma) => [
    'Старт! ',
    first,
    ' первой вырывается вперёд! Остальные ',
    uma,
    ' следом, последней — ',
    Math.random() < 0.5 ? 'задержавшаяся ' : 'отставшая ',
    last,
    '!',
  ],
  location_change_location_report_template: 'Входят на %LANE%',
  get_location_change_slope_report: (up_slope) =>
    `Сейчас — ${up_slope ? 'подъём' : 'спуск'}`,
  get_location_change_slope_over_report: (up_slope) =>
    `Позади ${up_slope ? 'подъём' : 'спуск'}`,
  location_change_report_template: 'Сейчас %MESSAGE%',
  location_in_order_report_template: 'Сейчас %LANE%',
  /**
   * @param {PrintedSpan} chara
   * @param {string} rank
   * @param {string} no
   * @returns {TextContent}
   */
  get_order_report(chara, rank, no) {
    return [`На ${rank}-м месте — номер ${no}, `, chara];
  },
  full_speed_push_reports: [
    (contestants) => [...contestants, ' идут на полный спринт!'],
    (contestants) => [...contestants, ' ускоряются ради последней победы!'],
    (contestants) => [
      'За пределами возможного! ',
      ...contestants,
      ' всё ещё ускоряются!',
    ],
  ],
  lost_stamina_reports: [
    (contestants) => [...contestants, ' — потеря скорости!'],
    (contestants) => [...contestants, ' сбились с шага — уже не держат темп!'],
    (contestants) => [...contestants, ' замедляются!'],
    (contestants) => [...contestants, ' — предел?!'],
  ],
  orgasm_reports: [
    (contestants) => [...contestants, ' — лицо красное: выложились до конца?…'],
    (contestants) => ['От ', ...contestants, ' валит пар!'],
    (contestants) => [
      'Отчего победный костюм ',
      ...contestants,
      ' такой мокрый…?',
    ],
    (contestants) => [
      ...contestants,
      ' чуть споткнулись, но скорости не потеряли!',
    ],
  ],
  loc_mind_nige_ex_reports: [
    (contestants) => [
      'Убегающей не место позади! Вперёд, ',
      ...contestants,
      '!',
    ],
    (contestants) => [
      'Это не ваша позиция! ',
      ...contestants,
      ' бегом предостерегают!',
    ],
    (contestants) => [...contestants, ' отвоёвывают позицию лидера!'],
    (contestants) => [
      ...contestants,
      ' продолжают ускоряться — уйти ещё дальше!',
    ],
  ],
  loc_mind_other_ex_reports: [
    (contestants) => [...contestants, ' широким шагом к своей позиции!'],
    (contestants) => [
      'Это не ',
      contestants.length > 1 ? 'ваше' : 'твоё',
      ' место! Давай, ',
      ...contestants,
      '!',
    ],
    (contestants) => [...contestants, ' бьются за свою позицию!'],
  ],
  loc_mind_nige_over_take_reports: [
    (contestants) => [...contestants, ' без колебаний рвётся в лидеры!'],
    (contestants) => [...contestants, ' борется за первое место!'],
    (contestants) => [...contestants, ' видит только первое место!'],
  ],
  loc_mind_nige_speed_up_reports: [
    (contestants) => [
      ...contestants,
      ' ускоряются, чтобы ещё сильнее оторваться!',
    ],
    (contestants) => [...contestants, ' уходят ещё дальше!'],
    (contestants) => ['Бегите, бегите до края света, ', ...contestants, '!'],
  ],
  loc_mind_other_quick_reports: [
    (contestants) => [
      ...contestants,
      ' не хотят, чтобы оторвались, — догоняют!',
    ],
    (contestants) => ['Слишком далеко! ', ...contestants, ' рвутся вдогон!'],
    (contestants) => [...contestants, ' держат дистанцию!'],
  ],
  loc_mind_other_relax_reports: [
    (contestants) => [
      ...contestants,
      ' будто бережёт силы — дерзкая тактика!!',
    ],
    (contestants) => [...contestants, ' сбавляет темп, осторожнее!!'],
    (contestants) => [...contestants, ', расслабляться — злейший враг!'],
  ],
  blocked_reports: [
    (contestants) => [...contestants, ' зажали — жаль!'],
    (contestants) => [...contestants, ' не прорвались!'],
    (contestants) => [...contestants, ' увязли в группе!'],
  ],
  temptation_reports: [
    (contestants) => [
      ...contestants,
      ' сбивается с ритма — кажется, нервничает!',
    ],
    (contestants) => [...contestants, ' начинает горячиться!'],
    (contestants) => [...contestants, ' поддалась нервам!'],
  ],
  temp_end_reports: [
    (contestants) => [...contestants, ' снова нашли нормальный ритм!'],
    (contestants) => [...contestants, ' будто успокоились!'],
    (contestants) => [...contestants, ' вышли из раздражения!'],
  ],
  temp_continue_reports: [
    (contestants) => [
      ...contestants,
      ' всё никак не поймает ритм — плохо дело!',
    ],
    (contestants) => [...contestants, ' увязла в нервах и не может выбраться!'],
    (contestants) => [
      'Успокойся, ',
      ...contestants,
      '! Так и момент упустишь!',
    ],
  ],
  temp_wrong_style_reports: [
    (contestants) => [...contestants, ' будто сменили стиль бега!'],
    (contestants) => [...contestants, ' — зачем так рвутся вперёд!'],
  ],
  /**
   * @param {PrintedSpan} target
   * @param {PrintedSpan} aim
   * @returns {TextContent}
   */
  get_compete_fight_report(target, aim) {
    return ['Целясь в ', aim, ', ', target, ' прибавляет скорость!'];
  },
  /**
   * @param {PrintedSpan} chara
   * @returns {TextContent}
   */
  get_final_push_report: (chara) => [chara, ' идёт на финальный рывок!'],
  /**
   * @param {TextContent} contestants
   * @param {boolean} at_same_time
   * @returns {TextContent}
   */
  get_final_push_multi_report(contestants, at_same_time) {
    return [
      ...contestants,
      at_same_time
        ? ' одновременно идут на финальный рывок!'
        : ' почти одновременно идут на финальный рывок!',
    ];
  },
  /**
   * @param {TextContent} contestants
   * @returns {TextContent}
   */
  get_final_push_follow_report(contestants) {
    return [...contestants, ' тоже идут на финальный рывок!'];
  },
  overtake_reports: [
    (top, over) => [over, ' вмиг обходит ', top, '!'],
    (top, over) => [over, ' берёт верх в дуэли с ', top, '!'],
    (top, over) => [
      'Обойдя ',
      top,
      ', именно для ',
      over,
      ' — время побеждать!',
    ],
    (top) => [top, ' впереди! Закрепит победу?!'],
  ],
  /**
   * @param {PrintedSpan} first
   * @param {PrintedSpan} second
   * @returns {TextContent}
   */
  get_battle_start_report(first, second) {
    return [first, ' и ', second, ' сходятся в жёсткой дуэли!'];
  },
  battle_reports: [
    { w: 0.6, h: (first, second) => [first, '! ', second, '!'] },
    {
      w: 0.3,
      h: (first, second) => [
        first,
        ' и ',
        second,
        ' продолжают схватку! Обе выкладываются ради победы!',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        'Накал! Накал!',
        first,
        ' и ',
        second,
        ' — обе увязли, никому не уйти!',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        'Кто же — ',
        first,
        ' или ',
        second,
        '?! Неужели развязка только на последних метрах!',
      ],
    },
  ],
  top_reports: [
    (top) => [top, ' крепко держит первую!'],
    (top) => ['Слишком быстро! ', top, ' уходит в отрыв!'],
    (top) => [top, ' в отличной форме! Унесёт до конца?!'],
    (top) => ['Продолжает вести! На финише ', top, ' будто не догнать!'],
    (top) => [top, ' вот-вот победит!'],
    (top) => [top, '! ', top, '!'],
  ],
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report(champion, bashin_behind) {
    return [champion, ' первой на линии с отрывом ', bashin_behind, '!'];
  },
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report_begin_race(champion, bashin_behind) {
    return [
      champion,
      ' первой на линии с отрывом ',
      bashin_behind,
      '!',
      Math.random() < 0.5
        ? ' Поздравляем с дебютом!'
        : ' Ждём дальнейших выступлений!',
    ];
  },
  ero_common_reports: [
    'Угххххххх мммффф…',
    'Что-то вместе с потом стекает вниз… это моя слюна?❤️❤️❤️',
    'Дыхание… услышат?… не дыши так громко❤️❤️❤️',
    'Мало… совсем мало❤️❤️❤️',
    'Даже если кончу прямо на скачке — никто не увидит——❤️❤️❤️',
    'Ааа❤️❤️❤️ жар разносится по телу, больше не могу❤️❤️❤️',
  ],
  ero_team_reports: ['Смотришь?❤️❤️❤️ Наверное, очень заметно❤️❤️❤️'],
  ero_breast_reports: [
    'Соски, которые всё мучали❤️❤️❤️ красные, опухшие, твёрдые как камешки❤️❤️❤️',
  ],
  ero_penis_reports: [
    'Стыдно❤️❤️❤️ но желание кончить совсем не уходит❤️❤️❤️',
    'Камера на нижней половине тела… хочу кончить❤️❤️❤️ стыдно, чтобы смотрели, как кончаю до слабости в ногах ааааа❤️❤️❤️',
    'Чувствую запах предэякулята, как тяжело ооооаааа❤️❤️❤️',
    'Мм❤️❤️❤️… сперма вот-вот польётся…',
  ],
  ero_clitoris_reports: [
    'Клитор вынужденно на воздухе, стоит — как стыдно——❤️❤️❤️',
    'Клитор зажат, больно… но так сладко—— мокрые соки текут❤️❤️❤️',
    'Клитор твёрдый, будто током…❤️❤️❤️',
    'Скользкие соки по бёдрам❤️❤️❤️ все видят…!',
  ],
  ero_vagina_reports: [
    'Ха-а, игрушка внутри — сжимается так, что не дышать, мм-ха…❤️❤️❤️',
    'На ногах и в киске полно воды❤️❤️❤️ скользко и стыдно!',
    'Не могу, судороги внутри слишком сильные❤️❤️❤️…!',
    'Как это❤️❤️❤️ таким штукой насытиться ааа——❤️❤️❤️',
  ],
  ero_vagina_dildo_reports: [
    'Игрушка❤️❤️❤️ долбит матку… но всё мало…❤️❤️❤️',
    'Мм❤️❤️❤️ упирается вглубь❤️❤️❤️ бульк-бульк… таю～❤️❤️❤️',
    'Трут и вставляют, чем меньше думаешь — тем сильнее❤️❤️❤️ не надо…!',
    'Бегу и кончаю от дилдо внутри ммм ооо❤️❤️❤️!',
  ],
  ero_anal_reports: [
    'Жопу растянуло❤️❤️❤️ жжёт и дёргается…❤️❤️❤️',
    'Ха-а❤️❤️❤️ трение в анусе такое тяжёлое ооо❤️❤️❤️',
    'Только бы не выскочило❤️❤️❤️ страх «выдавить» ужасный❤️❤️❤️',
  ],
  ero_tail_reports: ['Шевеление❤️❤️❤️ такое сильное… будто второй хвост❤️❤️❤️'],
  ero_in_body_reports: ['Ау❤️❤️❤️ бегу — а игрушка внутри двигается——❤️❤️❤️!'],
  ero_multi_item_reports: ['Мм оооо❤️❤️❤️ всё тело вибрирует❤️❤️❤️——!'],
  orgasm_common_reports: ['О-хоооо❤️❤️❤️ хоооооо❤️❤️❤️——'],
  orgasm_breast_reports: [
    'Соски твердеют… а❤️❤️❤️ тело дрожит…',
    'Соски, соски так тверды, будто треснут мм оооо❤️❤️❤️!',
  ],
  orgasm_penis_reports: [
    'Внизу так твёрдо… вышло❤️❤️❤️…!',
    '!!!——хочу кончить ещё——❤️❤️❤️!',
  ],
  orgasm_clitoris_reports: ['Ооаа❤️❤️❤️ клитор раздавят❤️❤️❤️'],
  orgasm_vagina_reports: ['Матка дёргается, будто порвётся хоооооо❤️❤️❤️——!'],
  orgasm_vagina_dildo_reports: ['Киску❤️❤️❤️ дилдо раздувает——❤️❤️❤️'],
  orgasm_anal_reports: [
    'Если выйдет здесь — вся жизнь…❤️❤️❤️ не надо❤️❤️❤️',
    'А～❤️❤️❤️ жопу ебут до жара❤️❤️❤️ туда-сюда～❤️❤️❤️',
  ],
  orgasm_bv_reports: [
    'Грудь и киска под игрушками❤️❤️❤️ соки брызжут невидимо❤️❤️❤️ дышу как зверь❤️❤️❤️!',
  ],
  orgasm_va_reports: [
    'Киску и жопу рвут твёрдые штуки оооо❤️❤️❤️ всё тело будто рвут❤️❤️❤️——!',
  ],

  in_race_pregnant_info:
    '【Участие беременной участницы вызвало пересуды в обществе】',
  in_race_orgasm_info:
    '【Открытый оргазм участницы на скачке всколыхнул общество】',
};
