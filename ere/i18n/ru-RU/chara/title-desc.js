module.exports = class extends require('#/i18n/zh-CN/chara/title-desc') {
  undef = 'Победа в шести и более скачках G1';
  got = 'Получено ✔';
  personal_template = 'За один цикл воспитания %DESC%';
  achieve_template =
    'За один цикл воспитания выполнены все цели воспитания; также %DESC%';

  tip_template = '[%NAME%]: %DESC%';

  l_hello_world = 'Достигнуть 5-го уровня во всех языках дальних выездов.';

  r_3crown_c =
    'За один цикл воспитания выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho).';
  r_3crown_ci =
    'За один цикл воспитания без поражений выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho).';
  r_3crown_f =
    'За один цикл воспитания выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho).';
  r_3crown_fi =
    'За один цикл воспитания без поражений выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho).';
  r_3crown_m =
    'За один цикл воспитания выиграть смешанную тройную корону (Satsuki Sho или Oka Sho; Japan Derby или Yushun Himba; Kikuka Sho или Shuka Sho).';
  r_3crown_mi =
    'За один цикл воспитания без поражений выиграть смешанную тройную корону (Satsuki Sho или Oka Sho; Japan Derby или Yushun Himba; Kikuka Sho или Shuka Sho).';
  r_3crown_d =
    'За один цикл воспитания выиграть грунтовую тройную корону (Haneda Hai, Tokyo Derby, Japan Dirt Derby).';
  r_3crown_di =
    'За один цикл воспитания без поражений выиграть грунтовую тройную корону (Haneda Hai, Tokyo Derby, Japan Dirt Derby).';
  r_3crown_a =
    'За один цикл воспитания выиграть американскую тройную корону (Kentucky Derby, Preakness Stakes, Belmont Stakes).';
  r_3crown_ai =
    'За один цикл воспитания без поражений выиграть американскую тройную корону (Kentucky Derby, Preakness Stakes, Belmont Stakes).';
  r_6crown =
    'За один цикл воспитания выиграть и тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho), и тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho).';
  r_6crown_i =
    'За один цикл воспитания без поражений выиграть и тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho), и тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho).';

  e_above_all =
    'За один цикл воспитания выйти на 10 и более скачек G1 и выиграть все, будучи фаворитом №1 в каждой.';
  e_30 = 'За один цикл воспитания выйти на 30 и более скачек.';
  e_30g =
    'За один цикл воспитания выйти на 30 и более скачек и хотя бы раз победить в G1.';
  e_100 =
    'За один цикл воспитания, не считая дебюта, выйти на 100 и более скачек.';
  e_100w =
    'За один цикл воспитания, не считая дебюта, выйти на 100 и более скачек и выиграть все.';
  e_virgin_1 =
    'К концу цикла воспитания остаться девственником · девственницей (не считая бессознательную, скрытую и регенерированную).';
  e_virgin_2 =
    'К концу цикла воспитания остаться девственником · девственницей (не считая бессознательную, скрытую и регенерированную) и как фаворит №1 выиграть не менее двух G1.';
  e_virgin_r1 =
    'К концу цикла воспитания остаться девственником · «девственницей»';
  e_virgin_r2 =
    'К концу цикла воспитания остаться девственником · «девственницей» и как фаворит №1 выиграть не менее двух G1.';

  s_be_father =
    'Выйти на скачку и победить в том же ходу, когда удалось оплодотворить.';
  s_dirty =
    'Выйти на скачку и победить, имея сперму одновременно в животе, во влагалище и в кишечнике.';
  s_with_baby = 'Выйти на скачку и победить, будучи беременной.';
  s_hentai = 'За одну скачку кончить 6 и более раз.';
  s_unlucky_1 =
    'За одну скачку кончить, хотя на теле не было ни одной секс-игрушки.';
  s_unlucky_2 =
    'За одну скачку кончить 6 и более раз, хотя на теле не было ни одной секс-игрушки.';
  s_father = 'Войдя домой, услышать «папа» не меньше 8 раз…';
  s_mother = 'Подарить Трём богиням не меньше 8 подданных.';
  s_p_slave =
    'Отдать знания, достоинство, тело, матку — всё, потерять всё… так хорошо… сейчас… кончаю❤.';
  s_p_preg = 'Быть кобылой у госпожи-умамусумэ — моя высшая честь, да!';

  es_egg_3 = 'Погрузись в прекрасное, закалённое тренировками тело умамусумэ.';
  es_egg_179 = 'Любит девушек вот такого роста (показывает).';
  es_egg_621 = 'Тебе не победить умамусумэ. Жалко.';

  get_trainer_title_desc(buff, level, extra) {
    let ret = '';
    if (buff > 0) {
      ret += `Бонус к шансу успеха и эффекту тренировок +${buff}`;
      if (extra.length > 0) {
        ret += ` (↑${extra.join('+')})`;
      }
      ret += ', ';
    }
    ret += `Доля ${4 * level + 4}% от призовых подопечной.`;
    return ret;
  }

  // 角色成就
  100101 =
    'Как фаворит №1 выиграть Japan Derby с отрывом в 5 и более корпусов, а также выиграть Tenno Sho (Spring), Tenno Sho (Autumn) и Japan Cup.';
  100201 =
    'Стратегией «убегающая» взять 6 и более подряд рейтинговых побед и стратегией «убегающая» выиграть Takarazuka Kinen.';
  100301 =
    'Взять непобеждённую двойную корону (Satsuki Sho, Japan Derby) и победить в Arima Kinen старшего года.';
  100302 =
    'Пройти карьеру без поражений и выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho) и Arima Kinen старшего года.';
  100303 =
    'Выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho) и, имея травму ноги, победить в Japan Cup и Arima Kinen старшего года — чудесное возвращение, возрождение из пепла.';
  100401 = 'Взять 8 и более побед подряд.';
  100501 =
    'Выиграть дебют с отрывом в 8 корпусов и как фаворит №1 победить в Asahi Hai Futurity Stakes и тройной короне (Satsuki Sho, Japan Derby, Kikuka Sho).';
  100601 =
    'Выйти фаворитом №1 на 6 и более G1 и выиграть Mile Championship, Yasuda Kinen и Arima Kinen.';
  100701 =
    'Выиграть, в том числе, Satsuki Sho, Kikuka Sho, Tenno Sho (Spring), Takarazuka Kinen старшего года, Tenno Sho (Autumn) старшего года и Arima Kinen старшего года.';
  100702 = "Дважды выйти на Prix de l'Arc de Triomphe.";
  100801 =
    'Выиграть 7 и более G1, включая Japan Derby, Yasuda Kinen, Tenno Sho (Autumn) и Victoria Mile.';
  100901 =
    'Выиграть 10 и более рейтинговых скачек, включая Oka Sho, Shuka Sho и Queen Elizabeth II Cup, и во всех скачках финишировать не хуже 2-го места.';
  101001 =
    'Выиграть 5 и более мильных рейтинговых скачек, включая Unicorn Stakes, Yasuda Kinen и Mile Championship.';
  101101 =
    'С настроением «хороший» или ниже выиграть Asahi Hai Futurity Stakes, Takarazuka Kinen старшего года и дважды Arima Kinen.';
  101201 =
    'Как фаворит №1 стратегией «финиш» взять 6 рейтинговых побед подряд.';
  101301 =
    'Выиграть Kikuka Sho и Tenno Sho (Spring), а базовый параметр выносливости довести до 1 200 и выше.';
  101401 =
    'Все скачки завершить не ниже второго места и стратегией «лидирующая» выиграть Japan Cup классического года.';
  101501 =
    'Взять 8 рейтинговых побед подряд, включая Tenno Sho (Spring), Takarazuka Kinen, Tenno Sho (Autumn), Japan Cup и Arima Kinen.';
  101601 =
    'Выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho) и дважды Arima Kinen.';
  101701 =
    'Взять непобеждённую тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho), Japan Cup, Tenno Sho (Spring) и дважды Arima Kinen.';
  101801 = 'Выиграть Yushun Himba и Tenno Sho (Autumn).';
  101901 =
    'Выиграть Japan Dirt Derby, Mile Championship, February Stakes, Yasuda Kinen, Tenno Sho (Autumn) и Arima Kinen старшего года.';
  102002 =
    'Стратегией «финиш» выиграть Sapporo Kinen, а стратегией «преследование» — Tenno Sho (Autumn).';
  102101 =
    'Выиграть 8 рейтинговых скачек, включая Tenno Sho (Spring), Takarazuka Kinen старшего года и Tenno Sho (Autumn) старшего года.';
  102201 =
    'Без поражений до того как фаворит №1 выиграть Shuka Sho, Queen Elizabeth II Cup классического года и Arima Kinen классического года, причём Shuka Sho — с отрывом 3,5 корпуса и более.';
  102301 =
    'Выиграть Kikuka Sho, Tenno Sho (Spring) и Takarazuka Kinen, во всех скачках финишировать в первых двух и выполнить все цели воспитания.';
  102401 = 'Каждой из четырёх стратегий бега хотя бы раз выиграть G1.';
  102501 =
    'Стратегией «преследование» выиграть Kikuka Sho, Tenno Sho (Spring) и дважды Arima Kinen, а базовый параметр выносливости довести до 1 200 и выше.';
  102601 =
    'Как фаворит №1 стратегией «убегающая» без поражений выиграть Asahi Hai Futurity Stakes, Satsuki Sho и Japan Derby, а базовый параметр выносливости довести до 1 200 и выше.';
  102701 = 'Выиграть Kikuka Sho, Takarazuka Kinen и Arima Kinen.';
  102801 =
    'Выиграть Yasuda Kinen, Mile Championship и дважды подряд Sprinters Stakes, а базовый параметр силы довести до 1 200 и выше.';
  102901 =
    'Выиграть одну рейтинговую скачку на ипподроме Мориока и тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho).';
  103001 =
    'Выйти на 23 и более скачек G3 и выше и выиграть Kikuka Sho, Tenno Sho (Autumn) и Takarazuka Kinen старшего года.';
  103101 =
    'Стратегией «убегающая» выиграть Asahi Hai Futurity Stakes, Satsuki Sho, Japan Derby и Japan Cup старшего года, а базовые параметры скорости и воли довести до 1 200 и выше.';
  103201 =
    'Без поражений выиграть Hopeful Stakes, Yayoi Sho и Satsuki Sho, а базовый параметр скорости довести до 1 200 и выше.';
  103301 =
    'Как фаворит №1 выиграть Satsuki Sho, Japan Derby и Takarazuka Kinen.';
  103401 =
    'Взять по 4 и более побед на траве и на грунте; стратегией «лидирующая» выиграть Tokyo Daishoten и Takarazuka Kinen старшего года; стратегией «преследование» или «финиш» — Tenno Sho (Spring) и Arima Kinen.';
  103501 =
    'Как фаворит №1 выиграть Yayoi Sho, Satsuki Sho, Japan Derby и Kikuka Sho, а также Arima Kinen классического года.';
  103601 =
    'Выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho), Tenno Sho (Spring), Takarazuka Kinen старшего года и Tenno Sho (Autumn) старшего года, а базовый параметр интеллекта довести до 1 200 и выше.';
  103701 =
    'Стратегией «преследование» выиграть Japan Cup и Tenno Sho (Autumn).';
  103801 =
    'Выиграть 9 спринтерских скачек на 1 200 м, включая Takamatsunomiya Kinen и Sprinters Stakes.';
  103901 =
    'Сохранить карьеру без поражений и выиграть Yushun Himba, Shuka Sho и Queen Elizabeth II Cup.';
  104001 =
    'Выйти на все скачки с превосходным настроем, выиграть Hanshin Juvenile Fillies, и чтобы уровни всех тренировочных объектов были выше 3.';
  104101 =
    'Выиграть 11 и более скачек не длиннее 1400 м, а также как фаворит №1 победить в Sprinters Stakes старшего года.';
  104201 =
    'Выиграть Oka Sho, NHK Mile Cup, Yushun Himba, Shuka Sho, Takamatsunomiya Kinen и Sprinters Stakes старшего года.';
  104301 =
    'Выиграть February Stakes и довести базовый параметр силы до 1 200 и выше.';
  104401 =
    'Стратегией «финиш» выиграть Tulip Sho и Shuka Sho, а стратегией «преследование» или «финиш» — Takarazuka Kinen старшего года, Queen Elizabeth II Cup и Arima Kinen.';
  104501 =
    'Выиграть 6 и более рейтинговых скачек на 2400 м и длиннее, включая Kikuka Sho и Tenno Sho (Spring).';
  104601 =
    "Стратегией «убегающая» выиграть Japan Breeding Farms' Cup Classic, Teio Sho и Tokyo Daishoten и стратегией «убегающая» взять 9 и более подряд грунтовых рейтинговых побед (G3 и выше).";
  104602 =
    "Выиграть Japan Dirt Derby, February Stakes, Teio Sho и Champions Cup старшего года, а также дважды подряд Japan Breeding Farms' Cup Classic и Tokyo Daishoten.";
  104701 =
    'Как фаворит №1 выиграть Tenno Sho (Autumn) старшего года, Japan Cup и Arima Kinen.';
  104801 =
    'Выиграть Japan Cup, Tenno Sho (Spring) и дважды Tenno Sho (Autumn).';
  104901 =
    'Выиграть Takarazuka Kinen старшего года и Japan Cup, ни разу не провалив тренировку.';
  105001 =
    'Стратегией «финиш» выиграть Satsuki Sho и Tenno Sho (Spring), а базовый параметр воли довести до 1 200 и выше.';
  105101 =
    'Выиграть Hanshin Juvenile Fillies, Oka Sho и дважды подряд Sprinters Stakes.';
  105201 =
    'Твоя история вдохновила тысячи зрителей; число фанатов 250 000 и выше.';
  105202 = 'Выиграть Arima Kinen старшего года.';
  105203 = 'Выиграть Arima Kinen дважды.';
  105301 =
    'Выиграть Yasuda Kinen старшего года, Takarazuka Kinen, Sprinters Stakes и Mile Championship и выйти на 23 и более рейтинговых скачек.';
  105401 =
    'Взять Sprinters Stakes дважды подряд и как фаворит №1 выиграть Mile Championship старшего года.';
  105501 =
    'Выиграть Osaka Hai и Takarazuka Kinen старшего года и во всех скачках финишировать с превосходным настроем.';
  105601 =
    'С превосходным настроем выйти на 15 и более скачек G2 и выше и взять 3 победы подряд на G2 и выше, включая Kikuka Sho.';
  105701 =
    'Тактикой «финиш» как фаворит №1 выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho) и Tenno Sho (Spring).';
  105801 =
    'Взять 9 рейтинговых побед подряд, включая Tenno Sho (Spring), Takarazuka Kinen и Arima Kinen.';
  105901 =
    'Тактикой «преследование» как фаворит №1 выиграть Hanshin Himba Stakes и тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho), а также дважды подряд Queen Elizabeth II Cup.';
  106001 =
    'Четыре раза войти в тройку на G1 и выиграть Arima Kinen старшего года.';
  106201 =
    'Выиграть 4 и более рейтинговых скачек на 2500 м и длиннее, включая Kikuka Sho и Arima Kinen старшего года, и выйти на 12 и более скачек G1.';
  106301 =
    'Выйти на 30 и более рейтинговых скачек, среди побед — Yasuda Kinen и Takarazuka Kinen старшего года, а базовый параметр воли довести до 1 200 и выше.';
  106401 =
    'Стратегией «убегающая» выиграть Takarazuka Kinen и Arima Kinen, а базовые параметры скорости и выносливости довести до 1 200 и выше.';
  106402 =
    'До старшего года выиграв не больше пяти рейтинговых скачек, стратегией «убегающая» победить в Takarazuka Kinen и дважды подряд в Arima Kinen, а базовые параметры скорости и выносливости довести до 1 200 и выше.';
  106501 =
    'Выиграть Milers Cup и дважды подряд Mile Championship, во всех скачках финишировать с превосходным настроем, а базовый параметр силы довести до 1 200 и выше.';
  106601 =
    'Стратегией «убегающая» выиграть Arima Kinen старшего года, а базовый параметр скорости довести до 1 200 и выше.';
  106701 =
    "Выиграть Prix de l'Arc de Triomphe, Kikuka Sho, Tenno Sho (Spring), Japan Cup и дважды Arima Kinen.";
  106801 =
    'Выиграть 7 и более G1, включая Kikuka Sho, Tenno Sho (Spring), Tenno Sho (Autumn) и Takarazuka Kinen.';
  106901 =
    'Выиграть Asahi Hai Futurity Stakes, Satsuki Sho, Japan Derby и Japan Cup.';
  107001 = 'Выиграть Japan Derby с отрывом в 3 корпуса.';
  107101 =
    'Выиграть Japan Derby и дважды Tenno Sho (Autumn), ни разу не провалив тренировку, и во всех скачках финишировать с превосходным настроем.';
  107201 =
    'Выиграть Satsuki Sho как первую победу в G1; затем Osaka Hai, Yasuda Kinen, Takarazuka Kinen и Arima Kinen старшего года; базовый параметр силы — 1 200 и выше.';
  107301 = 'Выиграть 6 и более скачек G1.';
  107401 =
    'Выиграть 4 и более G1 или G2 на 3 000 м и длиннее, включая Tenno Sho (Spring).';
  107601 =
    'Выиграть Tenno Sho (Spring) и Arima Kinen старшего года, а базовый параметр выносливости довести до 1 200 и выше.';
  107701 =
    'Выиграть 4 G1 на 2 500 м и длиннее, довести пригодность к длинной дистанции до S и базовый параметр выносливости до 1 200 и выше.';
  107801 =
    'Взять Yasuda Kinen дважды подряд, Sprinters Stakes и Tenno Sho (Autumn) старшего года, а базовый параметр скорости довести до 1 200 и выше.';
  107901 =
    'Выиграть по одной G1 на ипподромах Кавасаки, Ои и Фунабаси, а базовый параметр воли довести до 1 200 и выше.';
  108001 =
    "Выиграть Champions Cup дважды подряд, Leopard Stakes, Miyako Stakes, February Stakes, Teio Sho и Japan Breeding Farms' Cup Classic, а базовый параметр интеллекта довести до 1 200 и выше.";
  108101 =
    'Выиграть 9 и более G1, включая Mile Championship, Champions Cup, February Stakes и Kashiwa Kinen.';
  108201 =
    'Выиграть Fuchu Himba Stakes классического года, Shuka Sho, Milers Cup, Yasuda Kinen старшего года и Mile Championship старшего года, а базовый параметр скорости довести до 1 200 и выше.';
  108301 =
    'Выиграть Tenno Sho (Autumn) и дважды Arima Kinen, а базовый параметр силы довести до 1 200 и выше.';
  108401 =
    'Стратегией «финиш» пройти карьеру без поражений и выиграть Satsuki Sho, NHK Mile Cup и Japan Derby.';
  108501 =
    'Выиграть Oka Sho, Queen Elizabeth II Cup, Yasuda Kinen старшего года и Sprinters Stakes старшего года.';
  108601 =
    'Выиграть Oka Sho, Yushun Himba, Arima Kinen классического года и Queen Elizabeth II Cup старшего года.';
  108701 = 'Выполнить все цели воспитания и выиграть Oka Sho.';
  108801 =
    'Без поражений выиграть Yayoi Sho, Satsuki Sho, Japan Derby, Osaka Hai, Takarazuka Kinen, Tenno Sho (Autumn) и Hong Kong Vase (или Hong Kong Cup), а базовый параметр силы довести до 1 200 и выше.';
  108901 = 'Выиграть дважды Japan Cup и дважды Arima Kinen.';
  109001 =
    'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho), Victoria Mile и Queen Elizabeth II Cup, а базовый параметр воли довести до 1 200 и выше.';
  109101 =
    'Как фаворит №1 выиграть 6 и более рейтинговых скачек, а также Shuka Sho, Queen Elizabeth II Cup старшего года и Victoria Mile.';
  109201 = 'Выиграть Takarazuka Kinen старшего года.';
  109301 =
    'Выиграть Sprinters Stakes и довести базовые параметры скорости и воли до 1 200 и выше.';
  109401 = 'Выиграть Japan Derby и дважды подряд Japan Cup.';
  109501 =
    'В Centaur Stakes классического года победить с отрывом 4 корпуса и более, а также выиграть Sprinters Stakes и Takamatsunomiya Kinen.';
  109502 = 'Завершить цикл воспитания, уже имея титул [В сперме].';
  109601 =
    'С популярностью №2 или ниже выиграть Satsuki Sho; как фаворит №1 выйти на Kikuka Sho; также победить в Japan Derby, Takarazuka Kinen старшего года, Tenno Sho (Autumn) старшего года и Japan Cup старшего года.';
  109701 =
    'Выиграть Oka Sho, Yushun Himba, Shuka Sho, Queen Elizabeth II Cup и Takarazuka Kinen, а базовый параметр интеллекта довести до 1 200 и выше.';
  109801 =
    'Выиграть 11 и более грунтовых G1, во всех скачках финишировать с превосходным настроем и выполнить все цели воспитания.';
  109901 = 'Выиграть 10 и более грунтовых G1.';
  110001 =
    "Выиграть Tokyo Daishoten, Kashiwa Kinen, Teio Sho и Japan Breeding Farms' Cup Classic, а базовый параметр воли довести до 1 200 и выше.";
  110201 = 'Выиграть Kikuka Sho, Japan Cup старшего года и дважды Arima Kinen.';
  110301 = 'Выиграть Aoba Sho и Japan Derby.';
  110401 =
    'Выиграть Tenno Sho (Spring), Japan Cup старшего года и Arima Kinen.';
  110501 =
    'Выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho), Takarazuka Kinen классического года, Japan Cup классического года, Osaka Hai и Tenno Sho (Spring), а базовый параметр интеллекта довести до 1 200 и выше.';
  110601 =
    'Выиграть Kikuka Sho, Tenno Sho (Spring) и Takarazuka Kinen старшего года.';
  110701 = 'Выиграть Takarazuka Kinen старшего года и Japan Cup.';
  110801 = 'Всего выиграть 7 и более G1, включая Satsuki Sho и Japan Derby.';
  110901 =
    'Выиграть Oka Sho, NHK Mile Cup, Shuka Sho и Queen Elizabeth II Cup старшего года.';
  111001 =
    'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho) и Japan Cup, а базовый параметр скорости довести до 1 200 и выше.';
  111101 =
    'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho), Victoria Mile и дважды подряд Queen Elizabeth II Cup, а базовый параметр интеллекта довести до 1 200 и выше.';
  111201 =
    'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho) и довести базовый параметр силы до 1 200 и выше.';
  111301 =
    'Взять Queen Elizabeth II Cup дважды подряд и во всех скачках финишировать с превосходным настроем.';
  111401 =
    'Выиграть Oka Sho, Yushun Himba, Shuka Sho, Tenno Sho (Autumn), Japan Cup и Arima Kinen, и во всех скачках выйти фаворитом №1.';
  111501 =
    'Выиграть Satsuki Sho, Japan Derby, Kikuka Sho, Takarazuka Kinen старшего года и дважды подряд Arima Kinen, причём Arima Kinen старшего года — с отрывом 8 корпусов и более.';
  111601 =
    'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho) и Japan Cup дважды подряд; Yushun Himba — с отрывом 5 корпусов и более; базовый параметр силы — 1 200 и выше.';
  111701 =
    'Выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho), Tenno Sho (Spring), Takarazuka Kinen старшего года и Arima Kinen старшего года, а базовый параметр воли довести до 1 200 и выше.';
  111801 =
    'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho) и дважды подряд Queen Elizabeth II Cup.';
  111901 =
    'Выиграть Kikuka Sho, Takarazuka Kinen старшего года и Arima Kinen старшего года, а базовый параметр интеллекта довести до 1 200 и выше.';
  112001 =
    'Стратегией «убегающая» выиграть 9 спринтерских рейтинговых скачек, включая дважды подряд Ibis Summer Dash и Sprinters Stakes с отрывом 4 корпуса.';
  112101 =
    'Взять Sprinters Stakes и Mile Championship дважды подряд, а базовый параметр силы довести до 1 200 и выше.';
  112401 =
    'Выиграть Asahi Hai Futurity Stakes, Satsuki Sho, Japan Derby, Japan Cup, Takarazuka Kinen и дважды подряд Tenno Sho (Autumn), а базовый параметр интеллекта довести до 1 200 и выше.';
  112701 = 'Выиграть 6 и более G1, включая Tenno Sho (Spring).';
  112901 =
    'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho) и Japan Cup, и во всех скачках финишировать с превосходным настроем.';
  113001 =
    'Выиграть Hanshin Juvenile Fillies, Osaka Hai и дважды подряд Queen Elizabeth II Cup, причём Queen Elizabeth II Cup старшего года — как фаворит №1.';
  113101 =
    'Выиграть 5 мильных G1, включая Oka Sho, Yasuda Kinen и Mile Championship, а базовый параметр силы довести до 1 200 и выше.';
  113201 =
    'При отношениях «вожделение» и выше выиграть Yushun Himba и Queen Elizabeth II Cup.';
  113301 =
    'Выиграть Shuka Sho, Takarazuka Kinen и Arima Kinen; Arima Kinen — с отрывом 6 корпусов и более; базовый параметр интеллекта — 1 200 и выше.';
  113401 =
    'Выиграть Sweet Pea Stakes, Yushun Himba, Shuka Sho и Tenno Sho (Spring), а базовый параметр интеллекта довести до 1 200 и выше.';
  113501 = 'Во всех скачках финишировать не хуже 3-го места.';
  113601 = 'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho).';
  113701 =
    'Стратегией «преследование» выиграть Kikuka Sho, а стратегией «убегающая» — Japan Cup старшего года.';
  200501 =
    "Как фаворит №1 выиграть все французские скачки, включая дважды подряд Prix de l'Arc de Triomphe.";
  400001 =
    'Выиграть американскую тройную корону (Kentucky Derby, Preakness Stakes, Belmont Stakes) и дважды Arima Kinen.';
  904601 = 'Выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho).';
  904701 =
    "Выиграть Takarazuka Kinen, Prix de l'Arc de Triomphe, Tenno Sho (Spring) и дважды подряд Arima Kinen.";
  904801 =
    'Победами в G1 принести тренеру 500 и более очков общественной репутации.';
  114101 =
    'Выиграть тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho) и Japan Cup старшего года, а базовый параметр силы довести до 1 200 и выше.';
  114501 =
    'Выиграть Mainichi Hai, тройную корону (Satsuki Sho, Japan Derby, Kikuka Sho), Takarazuka Kinen, Tenno Sho (Autumn), Japan Cup и Arima Kinen, а базовый параметр интеллекта довести до 1 200 и выше.';
  114901 =
    'Выиграть тройную корону кобыл (Oka Sho, Yushun Himba, Shuka Sho) и Queen Elizabeth II Cup старшего года, а базовый параметр воли довести до 1 200 и выше.';
};
