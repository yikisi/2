/**
 * @file 持有道具 - 系统提示
 * @author 黑奴队长
 */
const { print, printAndWait } = require('#/era-electron');

module.exports = {
  single_vehicle_info_template: 'Сейчас в одиночку используется %ITEM%! Снять?',
  single_vehicle_canceled: 'Снято: %ITEM%',
  single_vehicle_replace_confirm_template:
    'Сейчас в одиночку используется %ITEM%! Заменить на %NEW%?',
  single_vehicle_equip_confirm_template:
    'Дальше передвигаться в одиночку на %ITEM%?',
  single_vehicle_equip_template: 'Экипировано как одиночный транспорт: %ITEM%',

  multiple_vehicle_info_template:
    'Сейчас при выходе с кем-то используется %ITEM%! Снять?',
  multiple_vehicle_canceled: 'Снято: %ITEM%',
  multiple_vehicle_replace_confirm_template:
    'Сейчас при выходе с кем-то используется %ITEM%! Заменить на %NEW%?',
  multiple_vehicle_equip_confirm_template:
    'Дальше выходить с другими на %ITEM%?',
  multiple_vehicle_equip_template:
    'Экипировано как совместный транспорт: %ITEM%',

  no_glass_template: 'Некуда поставить %LENS%!',
  glass_have_lens_template: 'На %GLASS% уже стоят %LENS%',
  glass_equip_confirm_template: 'Поставить %LENS% на %GLASS%?',
  glass_replace_confirm_template:
    'Поставить %NEW% на %GLASS%? Старые %LENS% сломаются!',
  glass_equip_template: 'На %GLASS% поставлены %LENS%',
  glass_lens_broken_template: '%LENS% сломались',

  use_mind_reader_select:
    'Сколько карт баллов «Заклинателя лошадей» использовать?',
  use_mind_reader_confirm_template:
    'Использовать %COUNT% карт баллов «Заклинателя лошадей»?',
  mind_reader_welcome_timer_template:
    'Добро пожаловать в приложение «Заклинатель лошадей»! Ваша подписка истечёт через %TIMER% нед.',
  mind_reader_continue_timer_template:
    'Спасибо за продление «Заклинателя лошадей»! Ваша подписка истечёт через %TIMER% нед.',
  mind_reader_notify_timer_template: 'Подписка истекает через %TIMER% нед.',

  in_ero_item_common_description: 'Только во время дрессуры',
  before_ero_item_common_description: 'Только перед дрессурой',

  drop_confirm_template: 'Выбросить %ITEM%?',
  async drop_quilt() {
    await printAndWait('Выбросили 【прозрачное одеяло】…');
    await printAndWait('…но перед этим изнутри выпало несколько купюр…');
  },
  async drop_family_uma_s() {
    await printAndWait('Выбросили 【семейную упаковку Uma Jump S】…');
    await printAndWait('…и за выброс химиката оштрафовали на 100 ма-монет');
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  use_inmon_item(chara, iname) {
    print([
      'Под предлогом «согреть живот» на ',
      chara.get_colored_name(),
      ' наклеили ',
      iname,
      '…',
    ]);
    print([
      chara.get_colored_name(),
      ' — на низу живота проступило затейливое клеймо Похоти…',
    ]);
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  get_chara_use_medicine: (chara, iname) => [
    chara.get_colored_name(),
    ' приняла ',
    iname,
  ],
  /** @param {CharaTalk} chara */
  get_chara_use_milk_medicine: (chara) => [
    chara.get_colored_name(),
    ' начала выделять грудное молоко!',
  ],

  anti_condom_for_man:
    'Мужчины не могут использовать 【растворитель презервативов】',
  anti_condom_duplicate: '【Растворитель презервативов】 уже использован',
  anti_condom_confirm: 'Использовать 【растворитель презервативов】?',
  /**
   * @param {CharaTalk} you
   * @param {string} iname
   */
  async use_anti_condom(you, iname) {
    await printAndWait([
      you.get_colored_name(),
      ' капнул(а) несколько капель ',
      iname,
      ' у половых губ',
    ]);
  },

  eat_chocolate_confirm: 'Съесть 【валентиновский шоколад】?',
  /** @param {CharaTalk} you */
  get_eat_chocolate_disabled: (you) => [you.get_colored_name(), ' уже сыт(а)'],

  /** @param {CharaTalk} chara */
  get_chara_pressure_down: (chara) => [
    chara.get_colored_name(),
    ' — стресс снизился',
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_down: (chara) => [
    chara.get_colored_name(),
    ' — похоть улеглась',
  ],
  /** @param {CharaTalk} chara */
  get_chara_all_down: (chara) => [chara.get_colored_name(), ' стала спокойнее'],
  /** @param {CharaTalk} chara */
  get_chara_lust_up: (chara) => [
    chara.get_colored_name(),
    ' слегка возбудилась',
  ],
  /** @param {CharaTalk} chara */
  get_chara_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' больше не полнеет',
  ],
  /** @param {CharaTalk} chara */
  get_chara_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' — мигрень прошла',
  ],
  /** @param {CharaTalk} chara */
  get_chara_drink_tea: (chara) => [
    chara.get_colored_name(),
    ' выпила 【здоровый чай】',
  ],

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_hate_drug(chara, you) {
    await printAndWait([
      'Тайком подсыпали ',
      chara.get_colored_name(),
      ' «Зелье отвращения»',
    ]);
    await printAndWait([
      chara.sex,
      'Расположение к ',
      you.get_colored_name(),
      ' начало таять…',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_limit_drug(chara, you) {
    await printAndWait([
      'Тайком подсыпали ',
      chara.get_colored_name(),
      ' «Подавитель»',
    ]);
    await printAndWait([
      chara.sex,
      'Влюблённость в ',
      you.get_colored_name(),
      ' подавлена…',
    ]);
  },
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' временно не полнеет',
  ],
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' — мигрень отступила на время',
  ],

  to_sell_milk_template: 'Сколько %ITEM% продать?',
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   */
  get_sell_milk_confirm: (count, item) => [
    'Продать через тёмный веб ',
    count,
    ' бут. ',
    item,
    '?',
  ],
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   * @param {PrintedSpan} money
   */
  get_sell_milk_result: (count, item, money) => [
    'Продано ',
    count,
    ' бут. ',
    item,
    ', получено ',
    money,
    ' ма-монет',
  ],

  /** @param {CharaTalk} chara */
  async make_armpit_hair_longer(chara) {
    await printAndWait([
      'Использовали крем для роста волос на ',
      chara.get_colored_name(),
      '.',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ': волосы в подмышках растут гуще',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛后的腋毛生长等级
   */
  async make_armpit_hair_shorter(chara, talent) {
    await printAndWait([
      'Для ',
      chara.get_colored_name(),
      ' пустили в ход «Крем для депиляции»',
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' — волосы под мышками растут медленнее',
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' — подмышки стали гладкими, ни волоска!',
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  async make_pubic_hair_longer(chara) {
    await printAndWait([
      'Использовали крем для роста лобковых волос на ',
      chara.get_colored_name(),
      '.',
    ]);
    await printAndWait([chara.get_colored_name(), ': лобок зарастает сильнее']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛后的阴毛生长等级
   */
  async make_pubic_hair_shorter(chara, talent) {
    await printAndWait([
      'Для ',
      chara.get_colored_name(),
      ' пустили в ход «Крем для интимной депиляции»',
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' — лобковые волосы растут медленнее',
      ]);
    } else if (chara.sex_code > 0) {
      await printAndWait([
        chara.get_colored_name(),
        ' — там стало гладко, ни волоска!',
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' — там теперь нежно-розовый безволосый «белый тигр»!',
      ]);
    }
  },

  fixer_start: '【Пробой реальности…】',
  fixer_stop: '【Законы реальности восстановлены.】',
};
