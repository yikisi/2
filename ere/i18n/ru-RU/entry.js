/**
 * @file Russian language pack (ru-RU)
 * @author Matemi
 */
module.exports = class extends require('#/i18n/zh-CN/entry') {
  language = 'Русский';

  speed = 'Скорость';
  endurance = 'Выносливость';
  strength = 'Сила';
  toughness = 'Воля';
  intelligence = 'Интеллект';

  hp = 'Силы';
  tp = 'Энергия';

  abbr_hp = 'СЛ';
  abbr_tp = 'ЭН';

  ui_mot = 'Настрой';
  mot_0 = 'Ужасный';
  mot_1 = 'Плохой';
  mot_2 = 'Обычный';
  mot_3 = 'Хороший';
  mot_4 = 'Превосходный';

  a_g_grass = 'Трава';
  a_g_dirt = 'Грунт';
  a_d_short = 'Короткая';
  a_d_mile = 'Миля';
  a_d_medium = 'Средняя';
  a_d_long = 'Длинная';
  a_s_nige = 'Front Runner';
  a_s_senko = 'Pace Chaser';
  a_s_sashi = 'Late Surger';
  a_s_okimi = 'End Closer';

  adapt_template = 'Пригодность: %ADAPT%';

  edu_0 = 'Начальный год';
  edu_1 = 'Классический год';
  edu_2 = 'Выпускной год';
  pre_edu = 'Ожидание зачисления';

  a_edu_0 = 'Новичок';
  a_edu_1 = 'Классика';
  a_edu_2 = 'Выпускник';

  oot_0 = 'Тренированный';
  oot_1 = 'Зал славы';

  honour_m = 'Дисквалифицирован';
  honour_0 = 'Новичок';
  honour_1 = 'Опытный';
  honour_2 = 'Ударник';
  honour_3 = 'Элита';
  honour_4 = 'Легенда';

  title_0 = 'Тренер';
  title_1 = 'Умамусумэ';
  title_2 = 'Секс-раб';
  title_3 = 'Овуляшка';

  ui_rl_mark_with_value = '%MARK% (%VAL%)';

  ui_love_icon = '❤️';
  ui_love = 'Влечение';
  ui_love_template = 'Влечение: %LOVEINFO%';
  get_ui_colored_love = (love) => ['Влечение: ', love];
  love_u = '?';
  love_0 = 'Нейтральное';
  love_1 = 'Слабое';
  love_2 = 'Неоднозначное';
  love_3 = 'Вожделение';
  love_4 = 'Влюбленное';
  love_5 = 'Родственное';
  love_6 = 'Зависимость';

  ui_relation_icon = '🤝';
  ui_relation = 'Симпатия';
  ui_relation_template = 'Симпатия: %RELATIONINFO%';
  get_ui_colored_relation = (relation) => ['Симпатия: ', relation];
  relation_u = '?';
  relation_0 = 'Разочарованная';
  relation_1 = 'Подозрительная';
  relation_2 = 'Равнодушная';
  relation_3 = 'Дружеская';
  relation_4 = 'Тёплая';
  relation_5 = 'Нежная';
  relation_6 = 'Близость';
  relation_7 = 'Верная';

  celebration_template = '[%CELEBRATION%]';
  cl_new_year = 'Новый год';
  cl_valentine = 'День святого Валентина';
  cl_palace = 'Неделя зала славы';
  cl_fans = 'День благодарности фанатам';
  cl_temple_fair = 'Храмовый фестиваль';
  cl_halloween = 'Хэллоуин';
  cl_christmas = 'Рождество';

  tt_disclaimer = 'Дисклеймер';
  tt_disclaimer_content = [
    '1. Эта игра сделана разработчиком для собственного развлечения и практики в коде.  Она существует потому, что у разработчика низменные вкусы и пошлые мысли, и она не приносит экономической прибыли и не преследует коммерческих целей.',
    { isBr: true },
    '2. Эта игра содержит откровенный эротический контент для взрослых. В игре могут присутствовать следующие сцены: групповой секс, тренировки, легкий садомазохизм, секс без согласия, инцест и многое другое. В игре не будет следующих сцен: NTR, жесткий садомазохизм, гуро, сцены 18+ с жесткостью и многое другое.',
    { isBr: true },
    '3. По задумке и содержанию игра сшита из серии игр ERA и похожих работ. Подходит лишь игрокам серии игр ERA или поклонникам текстовых эроге, не для обычной аудитории. Несовершеннолетним строго запрещено.',
    { isBr: true },
    '4. Материалы представлены самодельные, скачанные из сети и от соавторов. Разработчик и соавторы происходят из разных миров, рас, стран и народов, и между ними отсутствуют экономические связи.',
    { isBr: true },
    '5. Единственный официальный адрес публикации — ',
    { content: 'репозиторий', url: 'https://gitgud.io/umaera/erauma' },
    '. В силу специфики данной игры, категорически запрещается демонстрировать или распространять её в любых общественных местах, доступных несовершеннолетним, а также строго запрещается кому бы то ни было использовать эту игру в любых коммерческих (продажа, раздача и т. п.) и публичных (прямые трансляции и т. п.) мероприятиях.',
    { isBr: true },
    '6. Если явно указан источник, нет коммерции и соблюдаются этот отказ, ',
    {
      content: 'лицензия GPL 2.0 only',
      fontWeight: 'bold',
      url: 'https://gnu.ac.cn/licenses/old-licenses/gpl-2.0.html',
    },
    ' и ',
    {
      content: 'соглашение о создании коджо',
      fontWeight: 'bold',
      url: 'https://gitgud.io/umaera/erauma/-/wikis/LICENSE',
    },
    ', разрешены правки и производные (мод-версии). Это право есть у всех игроков; отдельного разрешения разработчика не нужно, но в названии и на титульном экране мод должен быть явно помечен и отличаться от оригинала.',
    { isBr: true },
    '7. Толкование заявления — за разработчиком. Текст может меняться в обновлениях, поэтому просим руководствоваться последней версией.',
    { isBr: true },
    '8. После стольких оговорок, если сомневаетесь, рекомендуем прямо сейчас закрыть окно и удалить игру. Если вы её не удалите, по умолчанию будет считаться, что вы поняли и принимаете условия данного заявления. Любые последствия при нарушении к разработчику отношения не имеют.',
  ];
  tt_disclaimer_accept =
    'Я прочитал(а) и понял(а) все восемь пунктов. Отвечаю за себя. Не удаляю. Буду играть.';
  tt_disclaimer_reject = 'Мне это не сдалось. Я ухожу!';
  tt_birthday_notify = (birth_list) => [
    'Сегодня у ',
    ...birth_list,
    ' день рождения',
  ];
  tt_version_template = 'Версия: v%VERSION%';
  tt_version_resource = 'Версия пакета ресурсов: ';
  tt_new_game = 'Новая игра';
  tt_load_game = 'Загрузить сохранение';
  tt_achieve = 'Достижения';
  tt_chara_achieve = 'Достижения персонажей';
  tt_help = 'Справка';
  tt_copyrights = 'Титры';
  tt_links = 'Ссылки:';
  tt_link_release = 'Релизы EraUma';
  tt_link_desk_engine = 'Движок EraElectron (ПК)';
  tt_link_app_engine = 'Движок ere.app (Android)';
  tt_link_community = 'ERA Академия Трейсен (сообщество Discord)';
  tt_link_wiki = 'Wiki (гайды, найстройки, написанию диалогов… )';

  cr_title_copyrights = 'Титры';
  cr_header_susai = 'Руководитель';
  cr_header_architecture = 'Архитектура';
  cr_header_engine = 'Движок';
  cr_header_developer = 'Разработчик';
  cr_header_art = 'Графика';
  cr_header_translate_reference = 'Опора для перевода';
  cr_header_tr_repo = "Trainers' Legend G (кит. перевод)";
  cr_header_tr_wiki = 'Uma Musume Wiki (кит.)';
  cr_header_kojo = 'Диалоги';
  cr_kojo_tip = 'По возрастанию наименьшего ID персонажа';
  cr_thanks_detail = 'Особая благодарность';
  cr_kojo_suffix_template = ' (%SUFFIX%)';
  cr_kojo_suffix_temporary = 'временно';
  cr_kojo_suffix_part = 'частично';
  cr_timon_recruit = 'Набор (общие тексты)';
  cr_timon_daily = 'Повседневность';
  cr_timon_edu = 'Воспитание';
  cr_timon_love = 'Влюблённость';
  cr_timon_ero = 'Дрессура (эро)';
  cr_timon_basement = 'Подвал';
  cr_timon_special = 'Особые персонажи (временно)';
  cr_timon_mejiro = 'Зов Мэдзиро';
  cr_timon_random = 'Случайные события';
  cr_timon_guide = 'Обучение новичков';
  cr_timon_guide_b = 'Обучение: подвал';
  cr_header_image = 'Эро-спрайты';
  cr_image_common = 'Общие спрайты';
  cr_image_gif = 'Анимации команд';
  cr_header_lib_en_us = 'Перевод на Английский';
  cr_header_lib_ru_ru = 'Перевод на Русский';
  cr_header_lib_ja_jp = 'Перевод на Японская';
  cr_header_kojo_make = 'Скрипты коджо';
  cr_header_test = 'Тесты и отзывы';
  cr_header_community_management = 'Модерация сообщества';
  cr_header_community_assistant = 'Помощь сообщества';
  cr_header_special_thanks = 'Особая благодарность (хехе)';
  cr_umamusme_pretty_derby = 'Um*usume Pretty Derby';

  tk_speak_border = ['「', '」'];
  tk_think_border = ['（', '）'];
  tk_past_border = ['（', '）'];
  tk_unknown = '???';

  nt_ask = 'Посмотреть связанную записку?';
  nt_no = 'Проверьте чуть позже на титульном экране';

  ui_comma = ', ';
  ui_comma2 = ', ';
  ui_period = '.';
  ui_exclamation = '!';
  ui_conjunction = ' и ';
  ui_ellipses = '…';
  ui_semicolon = '; ';
  ui_back = 'Назад';
  ui_back_title = 'На титул';
  ui_achieve_title = 'Новое достижение!';
  ui_on = 'Вкл.';
  ui_off = 'Выкл.';
  ui_yes = 'Подтвердить';
  ui_no = 'Отмена';
  ui_yes2 = 'Да';
  ui_no2 = 'Нет';
  ui_reset = 'Сброс';
  ui_skip = 'Пропустить';
  ui_nothing = 'Нет';
  ui_money_template = '%MONEY% УМонет';
  ui_get_date = (year, month, week) => [
    year,
    ' г., ',
    month,
    ' мес., ',
    week,
    '-я неделя',
  ];
  ui_date_without_year_template = '%MONTH% мес., %WEEK%-я неделя';
  ui_month_template = '%MONTH% мес.';
  ui_too_long_template =
    '(не длиннее %WIDTH% полноширинных или %WIDTH*2% полуширинных символов — введите снова!)';
  ui_et_prev = 'Предыдущий';
  ui_et_next = 'Следующий';
  ui_pg_prev = 'Пред. страница';
  ui_pg_next = 'След. страница';
  ui_ch_prev = 'Пред.';
  ui_ch_next = 'След.';
  ui_pagination_template = 'Стр. %CURR% из %TOTAL%';
  ui_default = 'По умолчанию';
  ui_game_over = 'GAME OVER';
  ui_invalid_value = '-';
  ui_unknown_value = '?';
  ui_all = 'Все';
  ui_increase = 'выше';
  ui_decrease = 'ниже';
  ui_end = 'Готово';
  ui_cancel = 'Передумал(а)';
  ui_signature_result = 'Коронные победы';
  ui_agree = 'Согласиться';
  ui_disagree = 'Отказать';

  get_ui_reward_header = (chara) => [chara, 'изменились параметры:'];
  get_ui_change_attr = (attr, change_mark, change_val) => [
    attr,
    ' ',
    change_mark,
    ' на ',
    change_val,
  ];
  get_ui_add_skills = (chara, skills) => [chara, ' освоила ', ...skills];
  ui_get_pt_template = 'Получено очков навыков: %PT%!';
  ui_train_level_up_template = 'Тренировка «%ATTR%» теперь даётся лучше!';
  get_ui_change_motivation = (chara, motivation) => [
    chara,
    ' — настрой сейчас: ',
    motivation,
  ];
  get_ui_change_relation = (chara, target, change_mark, val, result) => [
    chara,
    ' — симпатия к ',
    target,
    ' стала ',
    change_mark,
    ' на ',
    val,
    '! Сейчас: ',
    result,
  ];
  get_ui_find_betrayed = (chara, you) => [
    you,
    ' изменяет, и ',
    chara,
    ' в ярости…',
  ];
  get_ui_change_love = (chara, you, change_mark, val, result) => [
    chara,
    ' — влечение к ',
    you,
    ' стало ',
    change_mark,
    ' на ',
    val,
    '! Сейчас: ',
    result,
  ];
  get_trigger_love_event = (chara) => [
    '(С ',
    chara,
    ' отношения, кажется, можно продвинуть дальше…)',
  ];
  ui_love_level_up = 'Обратной дороги уже нет…';
  get_ui_hurt_uma = (chara) => ['[', chara, ' получила травму!]'];
  get_ui_hurt_uma_plus = (chara) => ['[Травма ', chara, ' усугубилась!]'];
  get_ui_hurt_tired_uma = (chara) => [
    '[Из-за усталости ',
    chara,
    ' получила более тяжёлую травму!]',
  ];
  get_ui_add_titles = (chara) => ['[', chara, ' получила новый титул]'];
  get_ui_ignore_event_punish = (chara, you) => [
    '[Из-за того, что ',
    you,
    ' не уделяет внимания, ',
    chara,
    ' немного разочарована]',
  ];
  get_ui_ignore_event_punish2 = (chara, you) => [
    '[Из-за того, что ',
    you,
    ' не уделяет внимания, ',
    chara,
    ' сильно разочарована]',
  ];

  ui_time_flow = '[Время пошло]';
  ui_new_week = '[Началась новая неделя]';

  ui_hd_no_save = 'Сохранение не загружено';
  get_ui_hd_location = (location) => ['Место: ', location];
  get_ui_hd_honour = (honour) => [honour, ' репутации'];
  ui_hd_income_template = '(%INCOME%)';
  get_ui_hd_money = (money, income = []) => [money, ...income, 'УМонет'];
  ui_billing_title_start = 'Счёт: ';
  ui_billing_invest_template = '%INCOME% (доход %CHARA% от вложений)';
  ui_billing_bonus_template = '%INCOME% (зарплата + премия)';
  ui_billing_salary_template = '%INCOME% (месячная зарплата)';
  ui_billing_borrow_template = '%INCOME% (%CHARA%%MAIN%, ещё %TIMER% нед.)';
  ui_billing_borrow_main = ' · основной';
  ui_billing_slave_template = '%INCOME% (дань от %CHARA%)';
  ui_hd_current_race = 'Скачки на этой неделе';
  ui_hd_races = 'Показать все';

  ui_no_target = 'Никто не выбран для общения';
  get_ui_cur_chara_info = (
    title,
    name,
    palace,
    growth,
    motivation,
    edu,
    race,
  ) => [
    'Сейчас: ',
    ...title,
    name,
    palace,
    ' (',
    growth,
    ')',
    ...motivation,
    edu,
    ...race,
  ];
  ui_palace_template = '[%PALACE%]';
  get_ui_motivation = (motivation) => [this.ui_mot, '·', motivation];
  ui_edu_template = '%EDU%';
  get_ui_race_indicator = (race, delta) => [
    '(до ',
    race,
    ' — ',
    delta,
    ' нед.)',
  ];
  get_ui_curr_race_indicator = (race) => ['(на этой неделе: ', race, ')'];

  ui_select_hd_info_template = 'Чьё досье открыть (%COUNT%)';
  ui_select_hd_interact_template = 'С кем взаимодействовать (%COUNT%)';
  ui_select_hd_name = 'Имя';
  ui_select_hd_score = 'Оценка';
  ui_select_hd_races = 'Результаты';
  ui_select_hd_edu = 'Воспитание';
  ui_select_hd_playthrough = 'Прохождение';
  ui_select_clear = 'Сбросить выбор';
  ui_select_no_character = 'В команде больше никого нет';
  ui_select_event_filter_tooltip =
    '* Красная кнопка — на этой неделе есть особое событие';
  ui_select_event_filter_template = 'Только с особыми событиями [%STATUS%]';
  ui_select_order_marks = ['▼', '▲'];

  ui_change_image = 'Сменить спрайт';
  ui_show_team = 'Состав команды';
  ui_train = 'Тренировка';
  ui_self_train = 'Самостоятельная тренировка';
  ui_goto_race = 'Выйти на скачки';
  ui_register_race = 'Записаться на скачки';
  ui_goto_sex = 'Пригласить в постель';
  ui_next_turn = 'Отдых до следующей недели';
  ui_office_study = 'Заниматься учёбой';
  ui_office_prepare = 'Готовиться к скачкам';
  ui_talk = 'Поболтать';
  ui_office_gift = 'Подарить подарок';
  ui_self_cook = 'Перекусить';
  ui_office_cook = 'Перекусить вместе';
  ui_self_rest = 'Вздремнуть';
  ui_office_rest = 'Вздремнуть вместе';
  ui_self_game = 'Поиграть';
  ui_office_game = 'Поиграть вместе';
  ui_change_take_care = 'Сменить, за кем присматривают';
  ui_ask_take_care = 'Попросить присмотреть';
  ui_self_update = 'Прокачать свои секс-навыки';
  ui_ero_update = 'Прокачать её секс-навыки';
  ui_borrow_money = 'Занять денег';
  ui_celebration_template = 'Отпраздновать %CELEBRATION%';
  ui_birthday = 'Отпраздновать день рождения';
  ui_check_love = 'Снова вызвать событие влюблённости';
  ui_basement_me = 'Умолять о безумной любви';
  ui_recruit = 'Тренировочное поле (набор)';
  ui_trainer_office = 'В кабинет тренера';
  ui_clinic = 'В медпункт';
  ui_god_together = 'Вместе к статуе Трёх богинь';
  ui_god_alone = 'К статуе Трёх богинь';
  ui_atrium_together = 'Вместе во внутренний двор';
  ui_atrium_alone = 'Во внутренний двор';
  ui_rooftop_together = 'Вместе на крышу';
  ui_rooftop_alone = 'На крышу';
  ui_chairman_office = 'В кабинет председателя';
  ui_visitors = 'В комнату для гостей';
  ui_school_shop = 'В буфет';
  ui_out_together = 'Выйти вместе';
  ui_out_alone = 'Выйти';
  ui_info_page = 'Досье';
  ui_storage = 'Инвентарь';
  ui_races = 'Расписание скачек';
  ui_office_filter_template = 'Скрыть занятия в кабинете [%STATUS%]';
  ui_out_filter_template = 'Скрыть выходы [%STATUS%]';
  ui_save_game = 'Сохранить историю';
  ui_load_game = 'Загрузить сохранение';

  ui_foreign_study_template = 'Учить %LAN%';
  ui_foreign_rest = 'Отдых и восстановление';
  ui_foreign_train = 'Адаптационная тренировка';
  ui_foreign_travel = 'Осмотр достопримечательностей';

  ui_act_event_tip = 'У этого действия есть событие';
  ui_loc_npc_tip_template = 'Здесь %COUNT% чел.';
  ui_loc_back_tip = 'Есть событие при возвращении';
  ui_loc_event_tip = 'В этом месте есть событие';
  ui_loc_celebration_tip_template = 'У %COUNT% чел. здесь праздничные события';

  ui_cost_chara_stamina_tip_template = 'У неё мало сил (нужно: %STAMINA%)';
  ui_cost_chara_time_tip_template = 'У неё мало энергии (нужно: %TIME%)';
  ui_cost_you_stamina_tip_template = 'Мало сил (нужно: %STAMINA%)';
  ui_cost_you_time_tip_template = 'Мало энергии (нужно: %TIME%)';
  ui_cost_money_tip_template = 'Не хватает УМонет (нужно: %MONEY%)';
  ui_foreign_lan_max_tip_template = '%LAN% уже на отличном уровне';
  ui_foreign_rest_max_tip = 'Тело уже в порядке';
  ui_foreign_train_max_tip = 'К трассе уже полностью привыкла';
  ui_celebration_remote_tip = 'Праздновать на расстоянии нельзя';

  ui_moon_well_partner_tip = 'Рядом кто-то ещё есть';

  ui_rec_chara_info = 'Досье';
  ui_rec_edu_info = 'Превью';
  ui_rec_exit = 'Просто уйти';

  ui_rec_c_info_template = 'Досье %NAME%';
  ui_rec_c_body_template = 'Параметры тела: %NAME%';
  ui_rec_c_talent_template = 'Черты характера: %NAME%';
  ui_rec_c_image_template = 'Эро-спрайты: %NAME%';
  ui_rec_e_train_template = 'Бонусы к тренировкам: %NAME%';
  ui_rec_e_train_buff_template = '%ATTR%: +%BUFF%%';
  ui_rec_e_adapt_template = 'Пригодность к стратегии: %NAME%';
  ui_rec_e_skill_template = 'Гоночные навыки: %NAME%';
  ui_rec_e_aim_template = 'Цели воспитания: %NAME%';
  ui_rec_e_title_template = 'Личный титул: %NAME%';
  ui_rec_e_skill_init = 'В начале: ';
  ui_rec_e_skill_init_pt = 'Очки навыков +680';
  ui_rec_e_skill_classic = 'Открывается в классическом году: ';
  ui_rec_e_skill_after_pt = 'Очки навыков +400';
  ui_rec_e_skill_senior = 'Открывается в старшем году: ';

  ui_train_base = 'Базовые параметры';
  ui_train_score = 'Оценка';
  ui_train_pt = 'Очки навыков';
  ui_train_race = 'Гоночные параметры';
  ui_train_adapt_track = 'Покрытие';
  ui_train_adapt_dis = 'Дистанция';
  ui_train_adapt_style = 'Стратегия';
  ui_train_adapt_ui_conjunction = '·';
  ui_train_learnt_skills = 'Изученные навыки';
  ui_train_learn_skill = 'Выучить навык';
  ui_train_reset_skill = 'Сбросить навыки';
  ui_train_with_s_rate_template = '%ATTR% ур.%LEVEL%\nШанс: %SUCCESS%%';
  ui_train_reset_skill_confirm = 'Сбросить навыки за 100 очков навыков?';
  ui_train_skill_header_template = 'Выбор навыка для %NAME%';
  get_ui_train_skill_pt_info = (pt) => ['Очки навыков: ', pt];
  ui_train_skill_enable_filter = 'Включить фильтр';
  ui_train_skill_disable_filter = 'Выключить фильтр';
  get_ui_train_learn_skill = (skill) => ['Выучить ', ...skill, '?'];
  get_ui_train_replace_skill = (skill, remove) => [
    'Выучить ',
    ...skill,
    '? Это заменит ',
    ...remove,
    '.',
  ];

  get_ui_reg_header = (chara) => ['Записать ', chara, ' на следующие скачки'];
  ui_reg_race_template = '%NAME% (%COUNTRY%) %GRAND% %MARK%';
  ui_grand_live_mark = '🎤';
  ui_reg_registered = '[▲ записана]';
  get_ui_reg_tip_1_before_begin = (chara) => [
    chara,
    ' сначала должна выйти в дебютной гонке',
  ];
  get_ui_reg_tip_1_after_begin = (chara) => [
    chara,
    ' особенно смотрит на гонки, отмеченные красным',
  ];
  ui_reg_tip_2 = 'На скачках со звёздочкой (*) может случиться что-то особое';
  ui_reg_tip_3 =
    'Скачки с 🎤, это что есть большая сцена; за участие дают больше репутации';
  ui_reg_tip_4 =
    'Пометки вроде «(FR)» - зарубежные скачки: запись за две недели, выезд тоже за две недели до старта';
  ui_reg_race_filter_template = 'Скрыть невыгодные скачки [%STATUS%]';
  ui_reg_race_more_info = 'Подробнее [%STATUS%]';

  get_ui_race_select_contestants = (race) => [
    'Эти участницы команды записаны на ',
    race,
    '. Потребовать, чтобы они снялись?',
  ];
  ui_race_select_contestant_template = '%NAME% [%STATUS%]';
  ui_race_select_selected = 'Участвует';
  ui_race_select_prevent = 'Отступить';
  ui_race_select_done = 'Подтвердить состав';
  get_ui_race_your_tp = (you) => [you, 'Энергия '];
  ui_race_prev_template = 'Пред.\n%NAME%';
  ui_race_next_template = 'След.\n%NAME%';
  ui_race_item_prev_template = 'След. %NAME%';
  ui_race_item_next_template = 'След. %NAME%';
  get_ui_race_preview_contestant_entry = (score, motivation, pop, pop_mark) => [
    score,
    { isDivider: true },
    ...motivation,
    { isDivider: true },
    ' № ',
    pop,
    ' по популярности ',
    pop_mark,
  ];
  ui_race_preview_contestant_attr = '%ATTR% (%RANK%)';
  ui_race_preview_contestant_style = 'Стратегия на скачках';
  get_ui_race_preview_contestant_adapt = (name, adapt) => [name, ' ', adapt];
  ui_race_preview_contestant_tip =
    '* Участницы по возрастанию номера дорожки; зелёные — ваша команда, красные — сильные соперницы';
  ui_race_bt_go = 'На старт!';
  ui_race_bt_chart = 'Данные трассы';
  ui_race_bt_item = 'Секс-игрушки';
  get_ui_race_preview_equip_item = (chara) => [
    'Надеть секс-игрушки на ',
    chara,
    '  выбор:',
  ];
  ui_race_preview_equip_item_part_template = 'Игрушка на %PART% для %NAME%';
  get_ui_race_preview_item_stg_template = 'Ещё %COUNT% шт.';
  ui_race_preview_equip_item_v_tip = 'Она ещё девственница!';
  ui_race_preview_equip_item_a_cond =
    'Нужно: анальных актов ≥ %REQUIRE% (сейчас: %CURRENT%)';
  ui_race_start_event = 'Кому сказать напутствие перед стартом?';
  ui_race_speed_1 = 'Смотреть ×1';
  ui_race_speed_2 = 'Смотреть ×2';
  ui_race_speed_4 = 'Смотреть ×4';
  ui_race_few_contestants = 'Меньше участниц на экране';
  ui_race_skip_race = 'Сразу к результатам';
  ui_race_timer_template = 'Таймер: %TIMER%';
  ui_race_progress = 'Ход гонки';
  ui_race_contestant_no = '№';
  ui_race_contestant_name = 'Имя';
  ui_race_contestant_style = 'Стратегия';
  ui_race_contestant_total_time = 'Время';
  ui_race_contestant_speed = 'Скорость';
  ui_race_contestant_loc = 'Отставание';
  ui_race_contestant_rank = 'Место';
  ui_race_contestant_progress_template =
    '%LOCATION% (%LANE% %SLOPE% %BLOCKED% %TEMPTATION%)';
  ui_race_start = 'Старт!';
  ui_race_bad_start = 'Поздний старт!';
  ui_race_reporter = 'Комментатор';
  ui_race_result_summary = 'Табло';
  get_ui_race_result_summary_header = (track, race) => [track, ' ', race];
  ui_race_result_location = 'Позиции';
  ui_race_result_location_header = 'Отставание от лидера';
  ui_race_result_speed = 'Скорость';
  ui_race_result_speed_header = 'График скорости';
  ui_race_result_endurance = 'Выносливость';
  ui_race_result_endurance_header = 'График выносливости';
  ui_race_result_skills = 'Сработавшие навыки';
  ui_race_result_log = 'Протокол скачек';
  get_ui_race_result = (chara, race, rank) => [
    chara,
    ' заняла ',
    race,
    ' в ',
    rank,
    '!',
  ];
  ui_race_end_event = 'Кого поздравить или утешить?';
  ui_race_event_chara_template = '%NAME% (%RANK%)';
  ui_race_event_end = 'Закончить';
  ui_race_event_tip = '* Персонажи с красная кнопкой имеют личный сюжет';
  get_ui_race_honour_reward = (you, up_info) => [
    'Благодаря отличным выступлениям команды оценка ',
    you,
    ' обществом стала ',
    up_info,
    '!',
  ];
  get_ui_race_honour_pregnant_punish = (you, down_info) => [
    'Хотя команда выступила отлично, скандал с внебрачным ребёнком действующего тренера всё же привёл к тому, что оценка ',
    you,
    ' обществом стала ',
    down_info,
    '!',
  ];
  get_ui_race_honour_hentai_punish = (you, down_info) => [
    'Из-за извращённого поведения членов команды оценка ',
    you,
    ' обществом стала ',
    down_info,
    '!',
  ];
  get_ui_race_honour_lose_punish = (you, down_info) => [
    'Из-за поражений команды на скачках оценка ',
    you,
    ' обществом стала ',
    down_info,
    '!',
  ];
  get_ui_race_money_reward = (money) => ['Доля от призовых: ', money, 'УМонет'];

  get_ui_out_confirm = (chara) => ['Куда пойти вместе с ', chara, ' сегодня?'];
  ui_out_self_confirm = 'Куда пойти одному?';
  get_ui_bt_talk_with_npc_template = 'Заговорить с %NAME%';
  ui_deep_interact_with_npc_template =
    'Вы ещё недостаточно близки (нужно: расположение ≥ %R_REQUIRE%, сейчас %R_CURRENT%; либо влюблённость ≥ %L_REQUIRE%, сейчас %L_CURRENT%)';
  get_ui_out_bye = (chara, you) => [
    '[Попрощавшись с ',
    chara,
    ', ',
    you,
    ' ушёл(ла)]',
  ];
  ui_moon_well_close_tip = 'Секретные купальни пока закрыты';
  ui_mejiro_city_alone_tip = 'В городе Мэдзиро одиноких путников не ждут';
  ui_mejiro_city_love_tip_template =
    'Вы ещё недостаточно близки (нужно ≥ %REQUIRE%, сейчас %CURRENT%)';

  ui_select_action_atrium = 'Что делать во внутреннем дворе?';
  ui_action_atrium_tree_hollow = 'Заглянуть в дупло сухого дерева';
  ui_action_atrium_date = 'Свидание';
  ui_select_action_river = 'Что делать у реки?';
  ui_action_river_fish = 'Рыбалка';
  ui_action_river_walk = 'Прогулка';
  ui_select_action_shopping = 'Что делать на торговой улице?';
  ui_action_shopping_arcade = 'В игровой зал';
  ui_action_shopping_drawing = 'Лотерея';
  ui_action_shopping_ktv = 'Караоке';
  ui_action_shopping_movie = 'В кино';
  ui_action_shopping_ero_item = 'Зайти в секс-шоп';
  ui_select_action_station = 'Что делать у вокзала?';
  ui_action_station_restaurant = 'Поесть';
  ui_action_station_date = 'Свидание';
  ui_action_station_shopping = 'По магазинам';

  ui_race_report_header = 'План выхода на скачки';

  ui_shop_limited_item_entry_template = '%ITEM% (лимит)';
  ui_shop_hold = 'Есть';
  ui_shop_max = 'Макс.';
  ui_shop_buy_template = 'Купить (%PRICE% УМонет)';
  ui_shop_tip =
    '* Нажмите на предмет, чтобы прочитать описание\n** Товар с пометкой «лимит» можно иметь только в одном экземпляре';
  get_ui_shop_bargain = (item, discount) => [
    '*** Акция недели!',
    item,
    ' ',
    discount,
    '！',
  ];
  ui_shop_30_off = '30%off';
  ui_shop_50_off = '50%off';
  ui_shop_acc_switch_template = 'Скрыть горячие клавиши [%STATUS%]';
  get_ui_shop_buy = (item, count) => ['Куплено: ', count, ' × ', item];

  get_ui_take_care = (chara) => ['За кем попросить присмотреть ', chara, '?'];
  get_ui_take_care_change_confirm = (chara, curr) => [
    chara,
    ' сейчас присматривает за ',
    curr,
    '. Сменить подопечную?',
  ];
  ui_take_care_aim_continue_template = '%NAME% (присматривает)';
  ui_take_care_aim_taken_template = '%NAME% (присматривает %TEACHER%)';
  ui_take_care_bt_cancel = 'Отменить присмотр';
  ui_take_care_bt_keep = 'Оставить как есть';
  get_ui_take_care_continue = (chara, curr) => [
    chara,
    ' и дальше будет присматривать за ',
    curr,
  ];
  get_ui_take_care_cancel = (chara, prev) => [
    chara,
    ' за ',
    prev,
    ' больше не присматривает',
  ];
  get_ui_take_care_change = (chara, next) => [
    chara,
    ' отныне будет присматривать за ',
    next,
  ];

  ui_storage_have_items =
    'У вас есть следующие предметы (нажмите, чтобы использовать или прочитать описание):';
  ui_storage_no_items = 'В инвентаре пусто';
  ui_storage_select_header_template = 'На кого использовать %ITEM%';
  ui_storage_no_targets_template = 'Некого выбрать для %ITEM%';

  ui_bt_self_info = 'О себе';
  ui_bt_chara_info = 'О ней';

  ui_wur_sleep = 'Просто наслаждаться';
  ui_wur_wake = 'Проснуться';

  ui_sex_bt_setting = 'Настройки';
  ui_sex_bt_touch = 'Прикосновения';
  ui_sex_bt_stain = 'Грязь на теле';
  ui_sex_bt_turn_around = 'Повернуться';

  bs_info_template = 'Тёмная комната… %DURABILITY%…';
  bs_no_one_info_template = 'Тёмная пустая комната… %DURABILITY%…';
  ui_bs_durability_0 = 'но охраны почти нет';
  ui_bs_durability_1 = 'но, кажется, хватит небольшой уловки';
  ui_bs_durability_2 = 'дверь, похоже, не так-то просто открыть';
  ui_bs_durability_3 = 'кругом полно серьёзных преград';
  ui_bs_durability_4 = 'все укрепления будто неприступны';
  ui_bs_durability_5 = 'любое сопротивление здесь бесполезно';

  ui_bs_flatter = 'Подлизываться и тянуть время';
  ui_bs_unlock = 'Попытаться вырваться';
  ui_bs_relax = 'Просто сидеть';
  ui_bs_sleep = 'Вздремнуть';
  ui_bs_eat = 'Чуть поесть';
  ui_bs_sex = 'Пригласить в постель';
  ui_bs_strike = 'Ударить исподтишка';
  ui_bs_battle = 'Открыто сопротивляться';
  ui_bs_release = 'Просить отпустить';
  ui_bs_clock = 'Спросить, сколько времени';
  ui_bs_guide = 'Инструкция по побегу';

  ui_save_game_header = 'В какой слот сохранить?';
  ui_auto_save_template = '%NAME% (авто)';
  ui_empty_save = 'Пустой слот';
  ui_save_rename = 'Переименовать';
  ui_save_name_save = 'Дать этой истории имя';
  ui_save_remove_save = 'Убрать имя истории';
  ui_save_name_save_header = 'Введите название сохранения:';
  ui_save_name_save_confirm_template = 'Назвать историю «%NAME%»?';
  ui_save_name_save_result_template = 'История названа «%NAME%»';
  ui_save_name_remove_confirm_template = 'Убрать название «%NAME%»?';
  ui_save_name_remove_result =
    'Название снято; при следующем сохранении будет имя по умолчанию';
  ui_save_override_confirm_template = 'Перезаписать слот №%NO%?';
  ui_save_save_result_template = 'Сохранено в слот №%NO%';
  ui_save_rename_confirm_template = 'Переименовать слот №%NO% в «%NAME%»?';
  ui_save_rename_result_template = 'Слот №%NO% переименован';
  ui_save_rename_cancel_template = 'Переименование слота №%NO% отменено';

  ui_load_game_header = 'Из какого слота загрузить?';
  ui_load_remove = 'Удалить';
  ui_load_fail_template = 'Не удалось загрузить слот №%NO%';
  ui_load_remove_success_template = 'Слот №%NO% удалён';

  name = new (require('#/i18n/ru-RU/chara/names'))();
  title = new (require('#/i18n/ru-RU/chara/titles'))();
  title_desc = new (require('#/i18n/ru-RU/chara/title-desc'))();
  feature = new (require('#/i18n/ru-RU/chara/feature'))();
  detail = new (require('#/i18n/ru-RU/chara/detail'))();

  kojo = new (require('#/i18n/ru-RU/kojo/entry'))();
  timon = new (require('#/i18n/ru-RU/timon/entry'))();

  new_game = new (require('#/i18n/ru-RU/new-game'))();
  location = new (require('#/i18n/ru-RU/location'))();
  vehicle = new (require('#/i18n/ru-RU/vehicle'))();
  note = new (require('#/i18n/ru-RU/notes'))();
  achievement = new (require('#/i18n/ru-RU/achieve'))();
  achieve_desc = new (require('#/i18n/ru-RU/achieve-desc'))();

  tb_abl = new (require('#/i18n/ru-RU/table/abl'))();
  tb_exp = new (require('#/i18n/ru-RU/table/exp'))();
  tb_item = new (require('#/i18n/ru-RU/table/item'))();
  tb_mark = new (require('#/i18n/ru-RU/table/mark'))();
  tb_param = new (require('#/i18n/ru-RU/table/param'))();
  tb_stain = new (require('#/i18n/ru-RU/table/stain'))();
  tb_status = new (require('#/i18n/ru-RU/table/status'))();
  tb_talent = new (require('#/i18n/ru-RU/table/talent'))();
  abl_desc = new (require('#/i18n/ru-RU/table/abl-desc'))();
  item_desc = new (require('#/i18n/ru-RU/table/item-desc'))();
  status_desc = new (require('#/i18n/ru-RU/table/status-desc'))();
  talent_desc = new (require('#/i18n/ru-RU/table/talent-desc'))();

  sex = new (require('#/i18n/ru-RU/sex/main'))();
  train_action = new (require('#/i18n/ru-RU/sex/actions'))();
  body_part = new (require('#/i18n/ru-RU/sex/parts'))();
  jewel_shop = new (require('#/i18n/ru-RU/sex/shop'))();
  inmon = new (require('#/i18n/ru-RU/sex/inmons'))();
  inmon_desc = new (require('#/i18n/ru-RU/sex/inmon-desc'))();

  clothe = new (require('#/i18n/ru-RU/race/clothes'))();
  race = new (require('#/i18n/ru-RU/race/races'))();
  skill = new (require('#/i18n/ru-RU/race/skills'))();
  skill_desc = new (require('#/i18n/ru-RU/race/skill-desc'))();
  inherit_shop = new (require('#/i18n/ru-RU/race/inherit'))();
  gene = new (require('#/i18n/ru-RU/race/genes'))();
  gene_desc = new (require('#/i18n/ru-RU/race/gene-desc'))();
  mob = require('#/i18n/ru-RU/race/uma-mob.json');
};
