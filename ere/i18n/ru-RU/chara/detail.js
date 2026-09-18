module.exports = class extends require('#/i18n/zh-CN/chara/detail') {
  base_title = 'Личное досье';
  get_base_summary_info = (
    skin,
    hair,
    body_hair,
    characteristic,
    sex_title,
  ) => [
    'Кожа: ',
    skin,
    '; ',
    hair,
    ' ',
    body_hair,
    ' ',
    characteristic,
    ' ',
    sex_title,
  ];
  base_hair_info_template = 'Причёска: %HAIR%';
  base_birthday_info_template = 'Родилась %DATE%.%MONTH%.%YEAR%';
  base_birthday_info_no_year_template = 'Родилась %DATE%.%MONTH%';
  base_header_body = 'Параметры тела';
  get_base_body_info = (height, weight) => [
    'Рост: ',
    height,
    'cm',
    { isDivider: true },
    'Вес: ',
    weight,
  ];
  base_body_weight_fat = 'С-счастливый жирок…';
  base_body_weight_heavy = 'Чуть прибавила';
  base_body_weight_normal = 'Под контролем';
  base_body_hidden = 'Больше данных нет';
  get_base_female_info = (bust, cup, waist, hip) => [
    'Обхваты: B',
    bust,
    ' (',
    cup,
    ' Cup) · W',
    waist,
    ' · H',
    hip,
  ];
  /** @param {CharaTalk} chara */
  get_base_hair_select = (chara) => [
    'Выберите новую причёску для ',
    chara.get_colored_name(),
    ' — новая причёска',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_auto_select = (chara, clothe) => [
    'Сейчас ',
    chara.get_colored_name(),
    ' на скачках одевается по случаю и праздникам; на церемонии URA и в неделю зала славы после воспитания — победный костюм [',
    clothe,
    '].',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_keep_some = (chara, clothe) => [
    'Сейчас ',
    chara.get_colored_name(),
    ' на скачках, церемонии URA и в неделю зала славы после воспитания носит победный костюм [',
    clothe,
    '].',
  ];
  base_clothe_change_confirm = 'Сменить?';
  base_clothe_bt_auto_select = 'По ситуации';
  base_clothe_bt_keep_current = 'Оставить';

  edu_title = 'Воспитание';
  get_edu_score = (score) => ['Оценка: ', score];
  edu_date_template = '%YEAR% %MONTH% мес., неделя %WEEK%';
  edu_date_with_playthrough_template =
    '%YEAR% %MONTH% мес., неделя %WEEK% (круг %PLAYTHROUGH%)';
  get_edu_pt = (pt) => ['Очки навыков: ', pt, ' PT'];
  edu_header_attr = 'Базовые параметры';
  get_edu_attr = (attr_name, attr) => [attr_name, ': ', attr];
  edu_header_adapt = 'Пригодность к скачкам';
  get_edu_adapt = (adapt_name, adapt) => [adapt_name, ': ', adapt];
  edu_header_aim_template = 'Цели воспитания (%CURRENT%/%TOTAL%)';
  edu_header_aim_finished = 'Цели воспитания (готово!)';
  edu_aim_template = '%DESC% %CURRENT%/%REQUIRE% %MARK%';
  edu_aim_template_in_rec = '%DESC% %REQUIRE%';
  edu_aim_desc_template = '%EDUTIME% %RACE%';
  edu_aim_common_desc_1 = 'G1 — в призах';
  edu_aim_common_desc_2 = 'G2 и выше — топ-3';
  edu_aim_common_desc_3 = 'Любая гонка — 1-е место';
  edu_aim_require_template = '%REQUIRE% раз';
  edu_aim_require_1 = '1-е';
  edu_aim_require_2 = 'топ-2';
  edu_aim_require_3 = 'топ-3';
  edu_aim_require_4 = 'топ-4';
  edu_aim_require_5 = 'в призах';
  edu_aim_require_20 = 'старт';
  edu_aim_mark_done = '✔';
  edu_aim_mark_no = '✘';
  edu_header_language = 'Языки';

  skill_title = 'Гоночные навыки';
  skill_header_learnt = 'Изученные';
  skill_no_skill = 'Нет';
  skill_header_available = 'Доступны к изучению';
  skill_header_gene = 'Наследование факторов';
  skill_no_gene = 'Нет';
  skill_header_gene_available = 'Можно унаследовать';

  race_title = 'Результаты скачек';
  race_header_race = 'Статистика';
  race_no_race = 'Не выходила';
  get_race_summary = (race_count, win, reward) => [
    race_count,
    ' стартов, ',
    win,
    ' побед, призовые ',
    reward,
  ];
  get_race_result = (year, race, result) => [year, ' г. ', race, ' · ', result];
  race_result_tip_template = 'Популярность №%POP% · %STYLE%';
  race_header_title = 'Личные титулы';

  relation_title = 'Связи';
  relation_header_relation = 'Отношения';
  get_relation_entry = (name, relation) => [name, ': ', relation];
  relation_no_relation = 'Никого особо';
  get_relation_take_care = (chara) => ['Присматривает за ', chara, ' сейчас'];
  get_relation_be_taken_care = (chara) => [
    'За ней присматривает ',
    chara,
    ' сейчас',
  ];
  relation_header_family = 'Ближайшая родня';
  get_relation_family_parents = (father, mother) => [
    'Отец: ',
    father,
    ', мать: ',
    mother,
  ];
  get_relation_first_child_as_father = (date, _, __, chara, is_boy) => [
    is_boy ? 'Старший сын' : 'Старшая дочь',
    ' ',
    chara,
    ' родился(ась) ',
    date,
  ];
  get_relation_first_child_as_mother = (date, _, __, chara, is_boy) => [
    'Роды ',
    date,
    ' — первенец: ',
    is_boy ? 'сын' : 'дочь',
    ' ',
    chara,
  ];
  relation_family_children_template = 'Сейчас: %INFO%';
  relation_family_as_father_template = 'отец %COUNT% детей';
  relation_family_as_mother_template = 'мать %COUNT% детей';
  relation_family_child_boy_title_template = '%NUMBER%-й сын';
  relation_family_child_girl_title_template = '%NUMBER%-я дочь';
  get_relation_family_child_entry_as_father = (title, child, mother) => [
    title,
    ' ',
    child,
    ', мать: ',
    mother,
  ];
  get_relation_family_child_entry_as_mother = (title, child, father) => [
    title,
    ' ',
    child,
    ', отец: ',
    father,
  ];
  relation_no_family = 'Некого представить';
  relation_bt_change_callname_to_you_template =
    'Изменить обращение к тебе, %YOU%';
  relation_bt_reset_callname_to_you_template = 'Сбросить, как %YOU% вас зовёт';
  relation_bt_change_callname_template =
    'Как звать этого персонажа (%CALLNAME%)';
  relation_bt_reset_callname = 'Сбросить обращение';
  get_relation_change_callname_to_you_confirm = (chara, you) => [
    'Как ',
    chara,
    ' должна звать ',
    you,
    '?',
  ];
  get_relation_change_callname_confirm = (chara) => ['Как звать ', chara, '?'];
  get_relation_change_callname_result = (caller, callee, callname) => [
    caller,
    ' теперь зовёт ',
    callee,
    ' «',
    callname,
    '»',
  ];

  sex_title = 'Секс';
  sex_exp_slave_2_accept =
    'Приняла роль секс-рабыни и наслаждается службой умамусумэ';
  sex_exp_slave_2_reject =
    'Сопротивляется роли секс-рабыни, ещё не утонула в жёстком удовольствии';
  sex_exp_slave_3_accept =
    'Приняла роль беременной шлюхи и наслаждается вынашиванием для умамусумэ';
  sex_exp_slave_3_reject =
    'Сопротивляется роли беременной шлюхи, цепляется за человеческую гордость';
  sex_header_inmon = 'Настройка клейма Похоти';
  get_sex_exp = (you, sex_count, sleep_info, prison_info) => [
    'С ',
    you,
    ' в постели ',
    sex_count,
    ' раз',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp = (sleep_count) => [', из них ', sleep_count, ' во сне'];
  get_sex_prison_exp = (prison_count) => ['; заточений: ', prison_count, '.'];
  get_sex_exp_you = (sex_count, sleep_info, prison_info) => [
    'С другими в постели ',
    sex_count,
    ' раз',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp_you = (sleep_count) => [
    ', из них ',
    sleep_count,
    ' спящей',
  ];
  get_sex_prison_exp_you = (prison_count) => [
    '; в заточении: ',
    prison_count,
    '.',
  ];
  sex_header_abl = 'Секс-навыки';
  get_sex_abl_entry = (abl, level) => [abl, ': ', level];
  sex_header_jewel = 'Факторы';
  sex_header_mark = 'Клейма';
  sex_image_bt_change_template = 'Сменить эро-спрайт (сейчас: %CURRENT%)';
  sex_image_set_template = 'Набор %SET%';
  sex_image_set_common = 'Общий';
  sex_image_common_info = 'Общие эро-спрайты';
  sex_image_personal_info = 'Есть личные эро-спрайты';

  exp_mouth_title = 'Рот';
  exp_mouth_gift_desc =
    'Идеальный рот: врождённая сила всасывания обезоруживает любого';
  exp_mouth_trained_desc = 'Всегда чешется и тоскует… уже похотливые губы';
  exp_mouth_drink_semen = 'На губах лёгкая белизна…';
  exp_mouth_drink_semen_template =
    'Похоже, только что выпила %SEMEN% мл спермы';
  get_exp_mouth_kiss = (date, chara) => [
    'Первый поцелуй ',
    date,
    ' отдала ',
    chara,
  ];
  get_exp_mouth_unknown_kiss = (date, chara) => [
    'На самом деле первый поцелуй ещё ',
    date,
    ' достался не тебе, а ',
    chara,
    '.',
  ];
  get_exp_mouth_kiss_count = (count) => ['Поцелуев принято: ', count, '.'];
  get_exp_mouth_blow_job = (date, chara) => [
    ' с ',
    date,
    ' — вместе с ',
    chara,
    '.',
  ];
  get_exp_mouth_be_blow_job = (date, chara) => [
    'Пользоваться ртом иначе научилась ',
    date,
    ' — у ',
    chara,
    '.',
  ];
  get_exp_mouth_unknown_be_blow_job = (date, chara) => [
    'На самом деле ещё ',
    date,
    ' её рот впервые оказался в распоряжении ',
    chara,
    '.',
  ];
  get_exp_mouth_suck_count = (count) => ['Ласк ртом: ', count, '.'];
  get_exp_mouth_blow_job_count = (count) => ['Сосала: ', count, ' раз'];
  get_exp_mouth_drink_semen = (date, chara) => [
    'Впервые попробовала на вкус ',
    date,
    ' — сперму ',
    chara,
    ', и почему-то этот густой рыбный запах её заворожил.',
  ];
  get_exp_mouth_unknown_drink_semen = (date, chara) => [
    'На самом деле уже ',
    date,
    ' она привыкла ко вкусу спермы ',
    chara,
    '.',
  ];
  get_exp_mouth_drink_semen_count = (count) => [
    'Выпила спермы: ',
    count,
    ' мл.',
  ];
  exp_mouth_poisoned_sens = 'Каждый глоток тёплой спермы будоражит горло';
  exp_mouth_poisoned_meek = 'Каждый глоток тёплой спермы приносит счастье';
  exp_mouth_poisoned_both =
    'Каждый глоток тёплой спермы делает горло счастливо беспокойным';
  get_exp_mouth_drink_secretion = (date, chara) => [
    date,
    ', и впервые испила сладкий сок наслаждения из вишнёвой щёлки ',
    chara,
    '.',
  ];
  get_exp_mouth_unknown_drink_secretion = (date, chara) => [
    'На самом деле ещё ',
    date,
    ' её напоили похотливым соком ',
    chara,
    '.',
  ];
  get_exp_mouth_drink_secretion_count = (count) => [
    'Выпила смазки: ',
    count,
    ' мл.',
  ];
  get_exp_mouth_drink_milk = (date, chara) => [
    date,
    ' впервые сосала грудь ',
    chara,
    ' не от голода — понравился ли вкус?',
  ];
  get_exp_mouth_drink_milk_count = (count) => [
    'Выпила молока: ',
    count,
    ' мл.',
  ];
  get_exp_mouth_orgasm = (count) => ['Оргазмов: ', count, '.'];

  exp_breast_title = 'Грудь';
  exp_breast_summary_man = 'Крепкие мышцы груди';
  exp_breast_nipple_pink = 'розовые ягодки';
  exp_breast_nipple_deep = 'тёмные вишенки';
  exp_breast_nipple_inverted = 'втянутые озёра';
  get_exp_breast_summary_woman = (nipple, size) => [
    'Соски ',
    nipple,
    ' с ',
    size,
    '.',
  ];
  exp_breast_gift_desc = 'Идеальные формы и упругость — любой «гость» не уйдёт';
  exp_breast_trained_desc =
    'Всегда чешутся и тоскуют… уже похотливая пара грудей';
  exp_breast_milk = 'Если лиф чуть влажный… это точно не пот…';
  exp_breast_milk_template =
    'Зажимы не дают выйти: скопилось %MILK% мл молока… соски болят';
  get_exp_breast_self_milk = (date) => [
    'Впервые сама приласкала соски ',
    date,
    ' — и они встали.',
  ];
  get_exp_breast_be_milk = (date, chara) => [
    'Впервые ей приласкали соски ',
    date,
    ' — руками ',
    chara,
    ', и они встали.',
  ];
  get_exp_breast_unknown_be_milk = (date, chara) => [
    'На самом деле эта грудь давно стала игрушкой для ',
    chara,
    ' — и началось это ',
    date,
    '.',
  ];
  get_exp_milk_count = (count) => ['Ласкали: ', count, ' раз'];
  get_exp_breast_tit_job = (date, chara) => [
    chara,
    ': член заводится от груди — поняла это ',
    date,
    '.',
  ];
  get_exp_breast_be_tit_job = (date, chara) => [
    chara,
    'Член ',
    date,
    ' возбуждается от груди — научили ',
  ];
  get_exp_breast_unknown_be_tit_job = (date, chara) => [
    'На самом деле с ',
    date,
    ' грудь привыкла к члену ',
    chara,
    ', хотя сама не знает',
  ];
  get_exp_breast_tit_job_count = (count) => ['Пайзури: ', count, ' раз'];
  get_exp_breast_semen_count = (count) => ['Спермы на груди: ', count, ' мл.'];
  /**
   * @param {string} date
   * @param {PrintedSpan} chara
   * @param _ 这个参数是第二参加者的占位符，不能删！
   * @param {string} cup
   * @returns {TextContent}
   */
  get_exp_breast_milking = (date, chara, _, cup) => [
    date,
    ', и дала ',
    chara,
    ' впервые распробовать, что течёт из её груди размера ',
    cup,
    '.',
  ];
  get_exp_breast_double_milking = (date, chara, supporter, cup) => [
    date,
    ', и дала ',
    chara,
    ' и ',
    supporter,
    ' впервые распробовать, что течёт из её груди размера ',
    cup,
    '.',
  ];
  get_exp_breast_milking_count = (count) => ['Кормила: ', count, ' раз'];
  get_exp_breast_milking_amount = (amount) => ['Дала молока: ', amount, ' мл.'];
  get_exp_breast_orgasm = (count) => ['Оргазмов: ', count, '.'];

  exp_body_title = 'Тело';
  exp_body_no_armpit_hair = 'Подмышки от природы гладкие';
  exp_body_clean_armpit_hair = 'Подмышки сейчас гладкие';
  get_exp_body_armpit_hair = (armpit_hair) => ['Подмышки: ', armpit_hair];
  exp_body_trained_desc = 'Жаждет чужого тепла… тело словно само — похоть';
  get_exp_body_face_semen = (date, chara) => [
    'Впервые залили лицо спермой ',
    date,
    ' — и это была сперма ',
    chara,
    '.',
  ];
  get_exp_body_unknown_face_semen = (date, chara) => [
    'На самом деле лицо ещё ',
    date,
    ' было залито спермой ',
    chara,
    '.',
  ];
  get_exp_body_face_semen_count = (count, amount) => [
    'На лицо: ',
    count,
    ' раз, ',
    amount,
    ' мл.',
  ];
  get_exp_body_body_sex = (date, chara) => [
    date,
    ' — в этот день её тело впервые приняло член и похоть ',
    chara,
    '.',
  ];
  get_exp_body_be_body_sex = (date, chara) => [
    date,
    ' — в этот день её тело впервые наполнил похотью член ',
    chara,
    '.',
  ];
  get_exp_body_unknown_be_body_sex = (date, chara) => [
    'На самом деле с ',
    date,
    ' её сонное лицо, её дыхание, её беззащитное тело — всё это уже чехол для члена ',
    chara,
    '.',
  ];
  get_exp_body_body_sex_count = (count) => ['Ласк телом: ', count, '.'];
  get_exp_body_semen_amount = (amount) => ['Спермы на теле: ', amount, ' мл.'];
  exp_body_poisoned_sens = 'Каждая тёплая сперма на коже будоражит';
  exp_body_poisoned_meek = 'Каждая тёплая сперма на коже приносит счастье';
  exp_body_poisoned_both =
    'Каждая тёплая сперма на коже делает её счастливо беспокойной';
  get_exp_body_orgasm = (count) => ['Оргазмов: ', count, '.'];

  exp_hf_title = 'Руки и ноги';
  exp_hf_header_hand = 'Руки';
  exp_hand_gift_desc = 'Ласка как дар богов: пальцы сводят с ума';
  get_exp_hf_hand_job = (date, chara) => [
    'Пальцы — лучший инструмент; ',
    date,
    ' благодаря ',
    chara,
    ' это поняла',
  ];
  get_exp_hf_self_hand_job = (date) => [
    'Пальцы — лучший инструмент; ',
    date,
    ' научилась сама',
  ];
  get_exp_hf_be_hand_job = (date, chara) => [
    'Пальцы — самая простая и самая безотказная игрушка для утех; научилась этому у ',
    chara,
    ', ',
    date,
    '.',
  ];
  get_exp_hf_unknown_be_hand_job = (date, chara) => [
    'На самом деле ещё ',
    date,
    ' её пальцы пропитались похотливым запахом смазки ',
    chara,
    '.',
  ];
  get_exp_hf_hand_job_count = (count) => ['Дрочила: ', count, ' раз'];
  get_exp_hf_touch_vagina_count = (count) => [
    'Ласк киски пальцами: ',
    count,
    '.',
  ];
  get_exp_hf_touch_anal_count = (count) => [
    'Ласк ануса пальцами: ',
    count,
    '.',
  ];
  get_exp_hf_touch_body_count = (count) => ['Ласк тела пальцами: ', count, '.'];
  get_exp_hf_touch_breast_count = (count) => ['Разминаний груди: ', count, '.'];
  exp_hf_header_foot = 'Ноги';
  exp_foot_gift_desc = 'Движения ног точны до миллиметра; футджоб как дар';
  get_exp_hf_foot_job = (date, chara) => [
    'Впервые оказался под её ступнёй ',
    date,
    ' — член ',
    chara,
    '.',
  ];
  get_exp_hf_unknown_be_foot_job = (date, chara) => [
    'На самом деле стопы и пальцы — игрушки для члена ',
    chara,
    ' — и так с ',
    date,
    '; не скучно ли ходить?',
  ];
  get_exp_hf_foot_job_count = (count) => ['Футджоб: ', count, ' раз'];
  get_exp_hf_step_on_vagina_count = (count) => [
    'Ласк киски ступнёй: ',
    count,
    '.',
  ];
  get_exp_hf_step_on_body_count = (count) => ['Топтаний тела: ', count, '.'];

  get_exp_pv_pubic_hair = (pubic_hair) => ['На лобке: ', pubic_hair];

  exp_penis_title = 'Член';
  exp_penis_no_pubic_hair = 'От природы гладко';
  exp_penis_clean_pubic_hair = 'Сейчас гладко';
  exp_penis_drug = 'полученный от лекарства';
  get_exp_penis_summary = (drug, color, size) => [
    'Внизу',
    drug,
    ' ',
    color,
    ' и ',
    size,
    ' член',
  ];
  exp_penis_gift_desc = 'Идеальный гигант; предэякулят будто уже оплодотворяет';
  exp_penis_trained_desc = 'Слабый контроль — легко кончает';
  get_exp_penis_lose_virgin = (date, chara) => [
    'Невинность отдана ',
    date,
    ', и отдана ',
    chara,
  ];
  get_exp_penis_lose_virgin_sleep = (date, chara) => [
    'в ',
    date,
    '  тайком отдал девственность  ',
    chara,
  ];
  get_exp_penis_be_lose_virgin = (date, chara) => [
    'девственность в ',
    date,
    '  был ',
    chara,
    '.',
  ];
  get_exp_penis_unknown_be_lose_virgin = (date, chara) => [
    'на самом деле, уже в ',
    date,
    '  был ',
    chara,
    ' забрал девственность',
  ];
  get_exp_penis_fuck_body_count = (count) => ['мял ', count, ' раз'];
  get_exp_penis_fuck_vagina_count = (count) => ['мял ', count, ' раз'];
  get_exp_penis_fuck_anal_count = (count) => ['мял ', count, ' раз'];
  get_exp_penis_cum_semen_exp = (date, chara, _, amount) => [
    'впервые к ',
    chara,
    '  тела впрыснул ',
    amount,
    'ml семени, это в ',
    date,
  ];
  get_exp_penis_unknown_cum_semen_exp = (date, chara, _, amount) => [
    'На самом деле ',
    date,
    ' похотливая киска ',
    chara,
    ' уже выжала ',
    amount,
    'ml спермы',
  ];
  get_exp_penis_cum_count = (count) => ['выстрелил ', count, ' раз'];
  get_exp_penis_cum_amount = (amount) => [
    'Всего спермы: ',
    amount,
    'ml спермы',
  ];
  get_exp_penis_fuck_sleep_vagina = (count, you) => [
    'однажды воспользовался её сном и надругался ',
    you,
    ' ',
    count,
    ' раз',
  ];
  get_exp_penis_fuck_sleep_vagina_you = (count) => [
    'Пока другие спали, трахал(а) ',
    count,
    ' раз',
  ];
  get_exp_penis_be_sleep_fuck = (count) => [
    'Пока спал(а), трахали ',
    count,
    ' раз — и не заметил(а)',
  ];

  exp_vagina_title = 'Киска';
  exp_vagina_no_pubic_hair = 'Гладкая от природы, нежная';
  exp_vagina_clean_pubic_hair = 'Сейчас гладкая и нежная';
  exp_vagina_pink = 'нежно-розовая';
  exp_vagina_purple = 'румяно-фиолетовая';
  exp_vagina_deep = 'зрелая, глубокая';
  get_exp_vagina_summary = (color) => ['с ', color, ' маленькой щели'];
  exp_vagina_gift_desc =
    'Живая дыра: любой «гость» только и может — отдавать семя';
  exp_vagina_clitoris_trained_desc =
    'От лёгкого трения набухает… уже похотливый клитор';
  exp_vagina_vagina_trained_desc =
    'Вечно мокрая и ждёт члена… уже похотливая киска';
  exp_vagina_semen = 'На бёдрах пятнышки…';
  exp_vagina_semen_template =
    'внутри маленькой щели примерно ещё %SEMEN%ml спермы есть';
  get_exp_vagina_lose_virgin = (date, chara, _, penis) => [
    'в ',
    date,
    '  тайком отдал девственность  ',
    chara,
    ' ',
    penis,
    ' члена',
  ];
  get_exp_vagina_lose_virgin_sleep = (date, chara, _, penis) => [
    ' тайком отдала девственность члену ',
    date,
    '  тайком отдал девственность  ',
    chara,
    ' ',
    penis,
    ' члена',
  ];
  get_exp_vagina_be_lose_virgin = (date, chara, _, penis) => [
    'девственность в ',
    date,
    '  был ',
    chara,
    ' ',
    penis,
    ' члена забрал',
  ];
  get_exp_vagina_unknown_be_lose_virgin = (date, chara, _, penis) => [
    'на самом деле, уже в ',
    date,
    '  был ',
    chara,
    ' ',
    penis,
    ' члена забрал девственность',
  ];
  get_exp_vagina_vagina_touched_count = (count) => ['был мят ', count, ' раз'];
  get_exp_vagina_fucked_count = (count) => ['был введён ', count, ' раз'];
  get_exp_vagina_cumed_exp = (date, chara, _, amount) => [
    'принял ',
    chara,
    ' тела ',
    amount,
    'ml семени, это в ',
    date,
  ];
  get_exp_vagina_unknown_cumed_exp = (date, chara, _, amount) => [
    'на самом деле, ценное влагалище и матка в  ',
    date,
    ' только что был ',
    chara,
    ' тела ',
    amount,
    'ml спермы',
  ];
  get_exp_vagina_out_semen = (amount) => [
    'Спермы снаружи: ',
    amount,
    'ml спермы',
  ];
  get_exp_vagina_cumed_semen = (count, amount) => [
    'Внутрь кончали ',
    count,
    ' раз, ',
    amount,
    'ml спермы',
  ];
  exp_vagina_poisoned_sens = 'Каждая тёплая порция внутри будоражит матку';
  exp_vagina_poisoned_meek = 'Каждая тёплая порция внутри приносит счастье';
  exp_vagina_poisoned_both =
    'Каждая тёплая порция внутри делает матку счастливо беспокойной';
  get_exp_vagina_squirt_exp = (date, chara) => [
    date,
    ' перед ',
    chara,
    ' впервые брызнула похотливым соком',
  ];
  get_exp_vagina_squirt_exp_both = (date, chara, supporter) => [
    date,
    ' перед ',
    chara,
    ' и ',
    supporter,
    ' впервые брызнула',
  ];
  get_exp_vagina_squirt_exp_self = (date) => [
    date,
    ' впервые довела себя до сквирта',
  ];
  get_exp_vagina_unknown_squirt_exp = (date, chara) => [
    'на самом деле, в ',
    date,
    ' только что был ',
    chara,
    ' собрал нектар',
  ];
  get_exp_vagina_unknown_squirt_exp_both = (date, chara, supporter) => [
    'на самом деле, в ',
    date,
    ' и ',
    chara,
    ' с ',
    supporter,
    ' собрал нектар',
  ];
  get_exp_vagina_unknown_squirt_exp_self = (date) => [
    'На самом деле ',
    date,
    ' уже сама пустила первую струйку',
  ];
  get_exp_vagina_clitoris_orgasm = (count) => [
    'кончала от клитора ',
    count,
    ' раз',
  ];
  get_exp_vagina_vagina_orgasm = (count) => [
    'из-за маленькой щели кончил ',
    count,
    ' раз',
  ];
  get_exp_vagina_squirt_count = (count, amount) => [
    'Сквиртов: ',
    count,
    ', смазки ',
    amount,
    'ml',
  ];
  get_exp_vagina_squirt_amount = (amount) => ['Всего смазки: ', amount, 'ml'];
  get_exp_vagina_fuck_sleep_penis = (count, you) => [
    'однажды воспользовался её сном и надругался ',
    you,
    ' ',
    count,
    ' раз',
  ];
  get_exp_vagina_fuck_sleep_penis_you = (count) => [
    'Пока другие спали, насиловала ',
    count,
    ' раз',
  ];
  get_exp_vagina_be_sleep_fuck = (count) => [
    'Пока спала, насиловали ',
    count,
    ' раз — и не заметила',
  ];
  exp_vagina_pregnant_in_growth = 'Менархе ещё не было';
  exp_vagina_pregnant_menstrual_period = 'Месячные';
  exp_vagina_pregnant_too_many_birth = 'Больше семян не выдержит';
  exp_vagina_pregnant_timer_template = '%DESC% (%TIMER% нед.)';
  exp_vagina_pregnant_egg_prepared = 'Яйцеклетка ждёт оплодотворения ❤️';
  exp_vagina_pregnant_egg_growth = 'Растёт новая яйцеклетка';
  exp_vagina_pregnant_egg_out = 'Яйцеклетка неактивна, ждёт выхода';
  exp_vagina_pregnant_prob_template = '%DESC% (шанс беременности %PROB%%)';
  exp_vagina_pregnant_desc_resume = 'Ребёнок родился; время заняться телом';
  exp_vagina_pregnant_desc_no = 'Комната для малыша ждёт папу ❤️';
  exp_vagina_pregnant_desc_embryo = 'Маленькая жизнь уже растёт';
  exp_vagina_pregnant_desc_fetal = 'Плацента сформирована; нужны белки';
  exp_vagina_pregnant_desc_late = 'Плод дозревает, живот высоко';
  exp_vagina_pregnant_desc_pre_birth = 'Скоро роды — готовьтесь';
  exp_vagina_pregnant_desc_showing = 'Живот уже сильно заметен';
  exp_vagina_pregnant_desc_known =
    'Живота ещё нет, но привычки и анализы уже выдают новую жизнь';
  get_exp_vagina_pregnant_father = (chara) => ['Отец ребёнка: ', chara];
  get_exp_vagina_pregnant_father_you = (you) => [
    you,
    ' знает, что отец — ',
    you,
  ];

  exp_anal_title = 'Жопа';
  exp_anal_gift_desc = 'Тугая дыра, будто чёрная дыра — кто вошёл, не выйдет';
  exp_anal_trained_desc = 'Вечно хочет быть заполненной… уже похотливый анус';
  exp_anal_semen = 'Сзади штаны мокрые…';
  exp_anal_semen_template =
    'потому что в заднице ещё %SEMEN%ml спермы застряло';
  get_exp_anal_anal_sex_exp = (date, chara) => [
    date,
    ' благодаря ',
    chara,
    ' впервые поняла сексуальный смысл жопы',
  ];
  get_exp_anal_be_anal_sex_exp = (date, chara) => [
    date,
    ', был ',
    chara,
    ' впервые показал, на что годится зад',
  ];
  get_exp_anal_unknown_be_anal_sex_exp = (date, chara) => [
    'на самом деле, в ',
    date,
    ' только что был ',
    chara,
    ' мят , наверное, не вернётся обратно',
  ];
  get_exp_anal_anal_sex_count = (count) => ['Анал: ', count, ' раз'];
  get_exp_anal_cum_in_anal_count = (count, amount) => [
    'В анус кончали ',
    count,
    ' раз, ',
    amount,
    'ml спермы',
  ];
  exp_anal_poisoned_sens = 'Каждая тёплая порция внутри будоражит прямую кишку';
  exp_anal_poisoned_meek = 'Каждая тёплая порция внутри приносит счастье';
  exp_anal_poisoned_both =
    'Каждая тёплая порция внутри делает кишку счастливо беспокойной';
  get_exp_anal_orgasm = (count) => [
    'из-за удовольствия кончил ',
    count,
    ' раз',
  ];

  exp_sm_title = 'Садизм / мазохизм';
  exp_sm_sex_title_0 = 'кобыла';
  exp_sm_sex_title_1 = 'жеребец';
  exp_sm_sex_title_10 = 'футанари мать';
  exp_sm_sadism_talent_template =
    'прирождённая садистка %TITLE%, достаточно вообразить, как унижаешь других, чтобы возбудиться';
  exp_sm_machoism_abuse_talent_template =
    'прирождённая мазохистка %TITLE%, достаточно вообразить, как тебя ругают, чтобы возбудиться';
  exp_sm_machoism_hit_talent_template =
    'прирождённая мазохистка %TITLE%, достаточно вообразить, как тебя бьют, чтобы возбудиться';
  exp_sm_machoism_all_talent_template =
    'прирождённая мазохистка %TITLE%, достаточно вообразить, как тебя унижают, чтобы возбудиться';
  get_exp_sm_sadism_exp = (date, chara) => [
    'в ',
    date,
    ' впервые поиздевался ',
    chara,
  ];
  get_exp_sm_abuse_count = (count) => ['ругал других ', count, ' раз'];
  get_exp_sm_hit_count = (count) => ['бил других ', count, ' раз'];
  get_exp_sm_sadism_count = (count) => [
    'из-за садистских ощущений кончил ',
    count,
    ' раз',
  ];
  get_exp_sm_machoism_exp = (date, chara) => [
    'в ',
    date,
    ' впервые был ',
    chara,
    ' изнасиловал',
  ];
  get_exp_sm_be_abused_count = (count) => ['был обруган ', count, ' раз'];
  get_exp_sm_be_hit_count = (count) => ['был побит ', count, ' раз'];
  get_exp_sm_machoism_count = (count) => [
    'из-за мазохистских ощущений кончил ',
    count,
    ' раз',
  ];

  desc_conjunction = '\nТакже: ';
  human_info = 'Просто человек';
  no_reward_info = 'Пока нечем хвастаться';
  cannot_join_race_info = 'Не может выходить на скачки';
  growth_info = 'Ещё растёт';
  no_exp_info = 'Пока нет опыта';
  no_known_info = 'Пока мало знаете';
  no_part_info = 'Этой части нет';

  prev_template = 'Пред. — %NAME%';
  next_template = 'След. — %NAME%';

  /*
   * Порядок ребёнка: «3» для «%NUMBER%-й сын», «3» для «%NUMBER%-я дочь».
   *
   * Китайский складывает 十 и 一 в 十一 — иероглифы разрядов и дают число.
   * Сложить так же «10» и «1» нельзя: выйдет «101». И «старш» в шаблоне
   * «%NUMBER%-й сын» давало «старш-й сын». Поэтому здесь просто цифры.
   *
   * Массивы ниже — те же тринадцать литералов, что и в оригинале: сторож
   * структуры сверяет их счёт, и выбросить их нельзя.
   */
  get_child_number(num) {
    const first = '1';
    const second = '2';
    const n10 = ['1', '2', '3', '4'];
    const n0 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (num === 1) {
      return first;
    } else if (num === 2) {
      return second;
    } else if (num < 10) {
      return n0[num - 1];
    } else if (num < 50) {
      const десятки = n10[Math.floor(num / 10) - 1];
      const единицы = num % 10;
      return единицы ? десятки + n0[единицы - 1] : десятки + String(0);
    }
    return num.toString();
  }
};
