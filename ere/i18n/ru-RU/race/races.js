module.exports = class extends require('#/i18n/zh-CN/race/races') {
  name_with_class_template = '%NAME% (%CLASS%)';

  g1 = 'G1';
  g2 = 'G2';
  g3 = 'G3';
  op = 'OP';
  pre_op = 'Pre-OP';
  spe = 'Spe';

  // 跑道类型简称
  g_a_grass = 'тр';
  g_a_dirt = 'гр';

  // 跑道距离简称
  d_a_short = 'спр';
  d_a_mile = 'мил';
  d_a_medium = 'ср';
  d_a_long = 'дл';

  // 跑法
  s_a_nige = 'уб';
  s_a_senko = 'лид';
  s_a_sashi = 'прес';
  s_a_okimi = 'фин';

  // 方向
  r_left = 'против часовой';
  r_right = 'по часовой';
  r_straight = 'прямая';

  // 天气
  w_sunny = 'ясно';
  w_cloudy = 'пасмурно';
  w_rain = 'дождь';
  w_snow = 'снег';

  // 马场情况
  m_well = 'хороший';
  m_semi = 'чуть тяжёлый';
  m_heavy = 'тяжёлый';
  m_bad = 'плохой';

  // 国家缩写
  c_china = 'КН';
  c_america = 'США';
  c_france = 'ФР';
  c_arab = 'ОАЭ';

  // 竞马场
  t_playground = 'Тренировочное поле';
  t_sapporo = 'Саппоро';
  t_hakodate = 'Хакодате';
  t_niigata = 'Ниигата';
  t_fukushima = 'Фукусима';
  t_nakayama = 'Накаяма';
  t_tokyo = 'Токио';
  t_chukyo = 'Тюкё';
  t_kyoto = 'Киото';
  t_hanshin = 'Хансин';
  t_kokura = 'Кокура';
  t_ohi = 'Ои';
  t_kawasaki = 'Кавасаки';
  t_funabashi = 'Фунабаси';
  t_morioka = 'Мориока';
  t_longchamp = 'Лоншан';
  t_santa_anita = 'Санта-Анита';
  t_del_mar = 'Дель-Мар';
  t_st_cloud = 'Сен-Клу';
  t_chantilly = 'Шантийи';
  t_bashang = 'Цунхуа';
  t_shatin = 'Ша Тин';
  t_kentucky = 'Черчилль-Даунс';
  t_baltimore = 'Пимлико';
  t_new_york = 'Белмонт';
  t_meydan = 'Мейдан';

  track_name_template = 'Ипподром %NAME%';

  d_day = 'день';
  d_night = 'ночь';

  summary_template = '%WIN%/%RACE%';
  summary_tip_template = '%RACE% стартов, %WIN% побед';
  result_template = '%RANK% место';
  no_result = 'Не выходила';
  no_win = 'Без побед';

  lan_lan_template = 'Прямая %INDEX%';
  lan_curve_template = 'Поворот %INDEX%';
  lan_lan_abbr_template = 'Пр.%INDEX%';
  lan_curve_abbr_template = 'Пв.%INDEX%';

  lan_index_final = 'финал';
  lan_index_final_abbr = 'фин';
  lan_index_template = '%INDEX%-й ';

  get_preview_header_env = (date, daytime) => [...date, ' ', daytime];
  preview_header_race_template =
    '%TRACK% %GROUND% %SPAN% м (%DISTANCE%) %ROTATION% · %WEATHER% %MESS%';

  chart_title_template = '%TRACK% %GROUND% %SPAN% м %ROTATION%';
  chart_buff_attr_template = 'Бонус: %ATTR%';
  chart_splitter_1_template = 'старт ⬅ %DISTANCE% ⮕ середина';
  chart_splitter_2_template = 'середина ⬅ %DISTANCE% ⮕ финиш';
  chart_splitter_loc_mind = 'конец позиционирования';
  chart_slope_name = 'Уклон';

  r_start = 'Старт!';
  r_bad_start = 'Поздний старт!';

  slope_up = 'в гору';
  slope_down = 'с горы';

  s_blocked = 'Блок!';
  s_temptation = 'Нервы!';

  first_contestant = 'Лидер';

  d_hanasa = 'нос';
  d_atamasa = 'голова';
  d_kubisa = 'шея';
  d_oosa = 'большой отрыв';
  d_bashin_template = '%DIS% корпуса';

  sim = 'Симуляция';

  0 = 'Дебют';
  1 = 'Junior Cup';
  2 = 'Kyoto Kimpai';
  3 = 'Nakayama Kimpai';
  4 = 'Fairy Stakes';
  5 = 'Shinzan Kinen';
  6 = 'Aichi Hai';
  7 = 'Bluebird Cup';
  8 = 'Keisei Hai';
  9 = 'Nikkei Shinshun Hai';
  10 = 'Wakagoma Stakes';
  11 = 'Silk Road Stakes';
  12 = 'Negishi Stakes';
  13 = 'Tokai Stakes';
  14 = 'American Jockey Club Cup';
  15 = 'Kisaragi Sho';
  16 = 'Kawasaki Kinen';
  17 = 'Tokyo Shimbun Hai';
  18 = 'Queen Cup';
  19 = 'Kyodo News Service Hai';
  20 = 'Kyoto Kinen';
  21 = 'Kumotori Sho';
  22 = 'Hyacinth Stakes';
  23 = 'February Stakes';
  24 = 'Kyoto Himba Stakes';
  25 = 'Kokura Daishoten';
  26 = 'Diamond Stakes';
  27 = 'Violet Stakes';
  28 = 'Nakayama Kinen';
  29 = 'Hankyu Hai';
  30 = 'Tulip Sho';
  31 = 'Yayoi Sho';
  32 = 'Ocean Stakes';
  33 = "Hochi Hai Fillies' Revue";
  34 = 'Kinko Sho';
  35 = 'Laurel R.C. Sho Nakayama Himba Stakes';
  36 = 'Keihin Hai';
  37 = 'Spring Stakes';
  38 = 'Falcon Stakes';
  39 = 'Flower Cup';
  40 = 'Fukuryu Stakes';
  41 = 'Diolite Kinen';
  42 = 'Hanshin Daishoten';
  43 = 'Tokyo Sprint';
  44 = 'Mainichi Hai';
  45 = 'Takamatsunomiya Kinen';
  46 = 'Nikkei Sho';
  47 = 'March Stakes';
  48 = 'Osaka Hai';
  49 = 'Lord Derby Challenge Trophy';
  50 = 'Oka Sho';
  51 = 'New Zealand Trophy';
  52 = 'Marine Cup';
  53 = 'Hanshin Himba Stakes';
  54 = 'Satsuki Sho';
  55 = 'Arlington Cup';
  56 = 'Antares Stakes';
  57 = 'Flora Stakes';
  58 = 'Aoba Sho';
  59 = 'Tenno Sho (Spring)';
  60 = 'Milers Cup';
  61 = 'Fukushima Himba Stakes';
  62 = 'NHK Mile Cup';
  63 = 'Kentucky Derby';
  64 = 'Kyoto Shimbun Hai';
  65 = 'Kashiwa Kinen';
  66 = 'Niigata Daishoten';
  67 = 'Haneda Hai';
  68 = 'Prix Perruche Bleue';
  69 = 'Keio Hai Spring Cup';
  70 = 'Yushun Himba';
  71 = 'Hosu Stakes';
  72 = 'Victoria Mile';
  73 = 'Heian Stakes';
  74 = 'Japanese Derby';
  75 = 'Aoi Stakes';
  76 = 'Meguro Kinen';
  77 = 'Preakness Stakes';
  78 = 'Tokyo Derby';
  79 = 'Yasuda Kinen';
  80 = 'Naruo Kinen';
  81 = 'Hakodate Sprint Stakes';
  82 = 'Epsom Cup';
  83 = 'Prix de Diane';
  84 = 'Unicorn Stakes';
  85 = 'Mermaid Stakes';
  86 = 'Takarazuka Kinen';
  87 = 'Teio Sho';
  88 = 'Belmont Stakes';
  89 = 'Radio Tampa Sho';
  90 = 'CBC Sho';
  91 = 'Japan Dirt Derby';
  92 = 'Procyon Stakes';
  93 = 'Tanabata Sho';
  94 = 'Hakodate Nisai Stakes';
  95 = 'Hakodate Kinen';
  96 = 'Ibis Summer Dash';
  97 = 'Toyota Sho Chukyo Kinen';
  98 = 'Queen Stakes';
  99 = 'Leopard Stakes';
  100 = 'Elm Stakes';
  101 = 'Sekiya Kinen';
  102 = 'Kitakyushu Kinen';
  103 = 'Kokura Kinen';
  104 = 'Niigata Nisai Stakes';
  105 = 'Sapporo Kinen';
  106 = 'Keeneland Cup';
  107 = 'Kokura Nisai Stakes';
  108 = 'Sapporo Nisai Stakes';
  109 = 'Niigata Kinen';
  110 = 'Shion Stakes';
  111 = 'Centaur Stakes';
  112 = 'Keisei Hai Autumn Handicap';
  113 = 'Rose Stakes';
  114 = 'St. Lite Kinen';
  115 = 'Kobe Shimbun Hai';
  116 = 'All Comers';
  117 = 'Sprinters Stakes';
  118 = "Prix de l'Arc de Triomphe";
  119 = 'Sirius Stakes';
  120 = 'Mile Championship Nambu Hai';
  121 = 'Saudi Arabia Royal Cup';
  122 = 'Fuchu Himba Stakes';
  123 = 'Mainichi Okan';
  124 = 'Kyoto Daishoten';
  125 = 'Shuka Sho';
  126 = 'Fuji Stakes';
  127 = 'Artemis Stakes';
  128 = 'Kikuka Sho';
  129 = 'Tenno Sho (Autumn)';
  130 = 'Swan Stakes';
  131 = 'Keio Hai Nisai Stakes';
  132 = 'Fantasy Stakes';
  133 = "Japan Breeding Farms' Cup Sprint";
  134 = "Japan Breeding Farms' Cup Ladies'Classic";
  135 = "Japan Breeding Farms' Cup Classic";
  136 = 'Copa Republica Argentina';
  137 = 'Miyako Stakes';
  138 = 'PRC Flat Racing Tournament';
  139 = 'Daily Hai Nisai Stakes';
  140 = 'Queen Elizabeth II Cup';
  141 = 'Musashino Stakes';
  142 = 'Fukushima Kinen';
  143 = 'Tokyo Sports Hai Nisai Stakes';
  144 = 'Mile Championship';
  145 = 'Kyoto Nisai Stakes';
  146 = 'Japan Cup';
  147 = 'Keihan Hai';
  148 = 'Champions Cup';
  149 = 'Stayers Stakes';
  150 = 'Asahi Challenge Cup';
  151 = 'Zennippon Nisai Yushun';
  152 = 'Hanshin Juvenile Fillies';
  153 = 'Hong Kong Sprint';
  154 = 'Hong Kong Mile';
  155 = 'Hong Kong Cup';
  156 = 'Hong Kong Vase';
  157 = 'Capella Stakes';
  158 = 'Chunichi Shimbun Hai';
  159 = 'Asahi Hai Futurity Stakes';
  160 = 'Turquoise Stakes';
  161 = 'Hopeful Stakes';
  162 = 'Tokyo Daishoten';
  163 = 'Arima Kinen';
  164 = 'American Oaks';
  165 = 'Hanshin Cup';
  166 = 'Dubai World Cup';
  167 = 'Dubai Golden Shaheen';
  168 = 'Dubai Sheema Classic';
  169 = 'Dubai Turf';
  170 = 'Al Quoz Sprint';
  171 = 'Fuyo Stakes';
  172 = "Breeders' Cup Turf Sprint";
  173 = "Breeders' Cup Mile";
  174 = "Breeders' Cup Filly & Mare Turf";
  175 = "Breeders' Cup Turf";
  176 = "Breeders' Cup Sprint";
  177 = "Breeders' Cup Filly & Mare Sprint";
  178 = "Breeders' Cup Dirt Mile";
  179 = "Breeders' Cup Distaff";
  180 = "Breeders' Cup Classic";
  181 = 'Sweet Pea Stakes';
};
