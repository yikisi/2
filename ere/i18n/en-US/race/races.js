module.exports = class extends require('#/i18n/zh-CN/race/races') {
  name_with_class_template = '%NAME% (%CLASS%)';

  g1 = 'G1';
  g2 = 'G2';
  g3 = 'G3';
  op = 'OP';
  pre_op = 'Pre-OP';
  spe = 'Spe';

  // Surface abbreviations
  g_a_grass = 'Turf';
  g_a_dirt = 'Dirt';

  // Distance abbreviations
  d_a_short = 'Short';
  d_a_mile = 'Mile';
  d_a_medium = 'Medium';
  d_a_long = 'Long';

  // Running styles
  s_a_nige = 'Front';
  s_a_senko = 'Pace';
  s_a_sashi = 'Late';
  s_a_okimi = 'End';

  // Direction
  r_left = 'Counterclockwise';
  r_right = 'Clockwise';
  r_straight = 'Straight';

  // Weather
  w_sunny = 'Sunny';
  w_cloudy = 'Cloudy';
  w_rain = 'Rain';
  w_snow = 'Snow';

  // Track condition
  m_well = 'Firm';
  m_semi = 'Good';
  m_heavy = 'Soft';
  m_bad = 'Heavy';

  // Country abbreviations
  c_china = 'CHN-HK';
  c_america = 'USA';
  c_france = 'FRA';
  c_arab = 'ARA';

  // Racecourses
  t_playground = 'Training Grounds';
  t_sapporo = 'Sapporo';
  t_hakodate = 'Hakodate';
  t_niigata = 'Niigata';
  t_fukushima = 'Fukushima';
  t_nakayama = 'Nakayama';
  t_tokyo = 'Tokyo';
  t_chukyo = 'Chukyo';
  t_kyoto = 'Kyoto';
  t_hanshin = 'Hanshin';
  t_kokura = 'Kokura';
  t_ohi = 'Oi';
  t_kawasaki = 'Kawasaki';
  t_funabashi = 'Funabashi';
  t_morioka = 'Morioka';
  t_longchamp = 'Longchamp';
  t_santa_anita = 'Santa Anita Park';
  t_del_mar = 'Del Mar';
  t_st_cloud = 'Saint-Cloud';
  t_chantilly = 'Chantilly';
  t_bashang = 'Conghua';
  t_shatin = 'Sha Tin';
  t_kentucky = 'Churchill Downs';
  t_baltimore = 'Pimlico';
  t_new_york = 'Belmont Park';
  t_meydan = 'Meydan';

  track_name_template = '%NAME% Racecourse';

  d_day = 'Day';
  d_night = 'Night';

  summary_template = '%WIN%/%RACE%';
  summary_tip_template = '%RACE% Starts, %WIN% Wins';
  result_template = 'Place %RANK%';
  no_result = 'Did Not Start';
  no_win = 'No Wins';

  lan_lan_template = '%INDEX% Straight';
  lan_curve_template = '%INDEX% Turn';
  lan_lan_abbr_template = '%INDEX% Str.';
  lan_curve_abbr_template = '%INDEX% Turn';

  lan_index_final = 'Final';
  lan_index_final_abbr = 'Fin.';
  lan_index_template = '%INDEX% ';

  get_preview_header_env = (date, daytime) => [...date, ' ', daytime];
  preview_header_race_template =
    '%TRACK% %GROUND% %SPAN%m (%DISTANCE%) %ROTATION% · %WEATHER% %MESS%';

  chart_title_template = '%TRACK% %GROUND% %SPAN%m Course %ROTATION%';
  chart_buff_attr_template = 'Bonus Stats: %ATTR%';
  chart_splitter_1_template = 'Early ⬅ %DISTANCE% ⮕ Mid';
  chart_splitter_2_template = 'Mid ⬅ %DISTANCE% ⮕ Late';
  chart_splitter_loc_mind = 'Positioning Phase Ends';
  chart_slope_name = 'Gradient';

  r_start = "They're off!";
  r_bad_start = 'Slow start!';

  slope_up = 'Uphill';
  slope_down = 'Downhill';

  s_blocked = 'Blocked!';
  s_temptation = 'Rushed!';

  first_contestant = 'Leader';

  d_hanasa = 'Nose';
  d_atamasa = 'Head';
  d_kubisa = 'Neck';
  d_oosa = 'Wide Margin';
  d_bashin_template = '%DIS%L';

  sim = 'Practice Race';

  0 = 'Debut Race';
  // GENERATED START
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
  19 = 'Kyodo News Hai';
  20 = 'Kyoto Kinen';
  21 = 'Kumotori Sho';
  22 = 'Hyacinth Stakes';
  23 = 'February Stakes';
  24 = 'Kyoto Himba Stakes';
  25 = 'Kokura Daishoten';
  26 = 'Diamond Stakes';
  27 = 'Sumire Stakes';
  28 = 'Nakayama Kinen';
  29 = 'Hankyu Hai';
  30 = 'Tulip Sho';
  31 = 'Yayoi Sho Deep Impact Kinen';
  32 = 'Ocean Stakes';
  33 = "Hochi Hai Fillies' Revue";
  34 = 'Kinko Sho';
  35 = 'Nakayama Himba Stakes';
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
  74 = 'Tokyo Yushun';
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
  89 = 'Radio NIKKEI Sho';
  90 = 'CBC Sho';
  91 = 'Japan Dirt Derby';
  92 = 'Procyon Stakes';
  93 = 'Tanabata Sho';
  94 = 'Hakodate Nisai Stakes';
  95 = 'Hakodate Kinen';
  96 = 'Ibis Summer Dash';
  97 = 'Chukyo Kinen';
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
  133 = 'JBC Sprint';
  134 = "JBC Ladies' Classic";
  135 = 'JBC Classic';
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
  150 = 'Challenge Cup';
  151 = 'Zen-Nippon Nisai Yushun';
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
  // GENERATED END
};
