module.exports = class extends require('#/i18n/zh-CN/chara/title-desc') {
  undef = 'Won 6 or more G1 races';
  got = 'Obtained ✔';
  personal_template = 'Achieve %DESC% within a single training.';
  achieve_template =
    'Completed all goals in a single training; in the same time, %DESC%.';

  tip_template = '[%NAME%]: %DESC%';

  l_hello_world = 'Reach level 5 in every overseas language.';

  r_3crown_c =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho) in a single career.';
  r_3crown_ci =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho) undefeated in a single career.';
  r_3crown_f =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) in a single career.";
  r_3crown_fi =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) undefeated in a single career.";
  r_3crown_m =
    'Won a mixed Triple Crown (Satsuki Sho or Oka Sho, Japanese Derby or Japanese Oaks, Kikuka Sho or Shuka Sho) in a single career.';
  r_3crown_mi =
    'Won a mixed Triple Crown (Satsuki Sho or Oka Sho, Japanese Derby or Japanese Oaks, Kikuka Sho or Shuka Sho) undefeated in a single career.';
  r_3crown_d =
    'Won the Dirt Triple Crown (Haneda Cup, Tokyo Derby, Japan Dirt Derby) in a single career.';
  r_3crown_di =
    'Won the Dirt Triple Crown (Haneda Cup, Tokyo Derby, Japan Dirt Derby) undefeated in a single career.';
  r_3crown_a =
    'Won the American Triple Crown (Kentucky Derby, Preakness Stakes, Belmont Stakes) in a single career.';
  r_3crown_ai =
    'Won the American Triple Crown (Kentucky Derby, Preakness Stakes, Belmont Stakes) undefeated in a single career.';
  r_6crown =
    "Won both the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho) and the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) in a single career.";
  r_6crown_i =
    "Won both the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho) and the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) undefeated in a single career.";

  e_above_all =
    'Raced in 10 or more G1 races in a single career and won them all as the heavy favorite.';
  e_30 = 'Raced 30 or more times in a single career.';
  e_30g =
    'Raced 30 or more times in a single career, with at least one G1 win.';
  e_100 =
    'Raced 100 or more times excluding the debut race in a single career.';
  e_100w =
    'Raced 100 or more times excluding the debut race in a single career and won every one.';
  e_virgin_1 =
    'Still a virgin at the end of a career (excluding Unaware, Hidden, and Regen).';
  e_virgin_2 =
    'Still a virgin at the end of a career (excluding Unaware, Hidden, and Regen), and won 2 or more G1s as the favorite.';
  e_virgin_r1 = 'Still a virgin at the end of a career.';
  e_virgin_r2 =
    'Still a virgin at the end of a career, and won 2 or more G1s as the favorite.';

  s_be_father = 'Won a race after successfully impregnating someone that turn.';
  s_dirty =
    'Won a race while carrying semen in the womb, vagina, and anus at the same time.';
  s_with_baby = 'Won a race while pregnant.';
  s_hentai = 'Came 6 or more times during a single race.';
  s_unlucky_1 = 'Came during a race without wearing any sex toys.';
  s_unlucky_2 =
    'Came 6 or more times during a race without wearing any sex toys.';
  s_father =
    'At least 8 cries of "Daddy" greet you when you walk through the door...';
  s_mother = 'Contributed at least 8 subjects to the Three Goddesses.';
  s_p_slave =
    "Dedicated every knowledge, dignity, body, and womb — I lost everything... It feels so good... I'm... I'm cumming❤.";
  s_p_preg =
    'Being a broodmare for the Uma Musume is my greatest honor, Hell yeah.';

  es_egg_3 =
    'Lose control of yourself in that perfectly trained Uma Musume body.';
  es_egg_179 = 'I like tall girls like this (points & make weird gestures).';
  es_egg_621 = " How pathetic. You can't even beat an Uma Musume.";

  get_trainer_title_desc(buff, level, extra) {
    let ret = '';
    if (buff > 0) {
      ret += `Training success rate and effect boost +${buff}`;
      if (extra.length > 0) {
        ret += ` (↑${extra.join('+')})`;
      }
      ret += ', ';
    }
    ret += `Takes a ${4 * level + 4}% cut of the trainee's prize money.`;
    return ret;
  }

  // Character Achievements
  100101 =
    'Won the Japanese Derby by 5 lengths or more as the favorite, and also won the Tenno Sho (Spring), Tenno Sho (Autumn), and Japan Cup.';
  100201 =
    'Achieved 6 or more consecutive graded stakes wins with a front-running strategy, and won the Takarazuka Kinen with a front-running strategy.';
  100301 =
    'Won the undefeated Double Crown (Satsuki Sho, Japanese Derby) and the Arima Kinen in the senior year.';
  100302 =
    'Remained undefeated throughout the career and won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho) plus the Arima Kinen in the senior year.';
  100303 =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho), then won the Japan Cup and Arima Kinen in the senior year while injured—miraculous comeback, reborn from the ashes.';
  100401 = 'Achieved 8 or more consecutive wins.';
  100501 =
    'Won the debut race by 8 lengths, and won the Asahi Hai Futurity Stakes and Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho) as the favorite.';
  100601 =
    'Started 6 or more G1s as the favorite and won the Mile Championship, Yasuda Kinen, and Arima Kinen.';
  100701 =
    'Won the Satsuki Sho, Kikuka Sho, Tenno Sho (Spring), senior-year Takarazuka Kinen, senior-year Tenno Sho (Autumn), and senior-year Arima Kinen.';
  100702 = "Competed in the Prix de l'Arc de Triomphe twice.";
  100801 =
    'Won 7 or more G1 races including the Japanese Derby, Yasuda Kinen, Tenno Sho (Autumn), and Victoria Mile.';
  100901 =
    'Won 10 or more graded stakes including the Oka Sho, Shuka Sho, and Queen Elizabeth II Cup, finishing 2nd or better in every race.';
  101001 =
    'Won 5 or more mile graded stakes including the Unicorn Stakes, Yasuda Kinen, and Mile Championship.';
  101101 =
    'Won the Asahi Hai Futurity Stakes, senior-year Takarazuka Kinen, and two Arima Kinens while in Good or worse condition.';
  101201 =
    'Won 6 consecutive graded stakes as the favorite using a closer strategy.';
  101301 =
    'Won the Kikuka Sho and Tenno Sho (Spring), and reached 1,200+ base Stamina.';
  101401 =
    'Finished 2nd or better in every race and won the classic-year Japan Cup with a stalker strategy.';
  101501 =
    'Achieved 8 consecutive graded stakes wins including the Tenno Sho (Spring), Takarazuka Kinen, Tenno Sho (Autumn), Japan Cup, and Arima Kinen.';
  101601 =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho) and two Arima Kinens.';
  101701 =
    'Won the undefeated Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho), Japan Cup, Tenno Sho (Spring), and two Arima Kinens.';
  101801 = 'Won the Japanese Oaks and Tenno Sho (Autumn).';
  101901 =
    'Won the Japan Dirt Derby, Mile Championship, February Stakes, Yasuda Kinen, Tenno Sho (Autumn), and senior-year Arima Kinen.';
  102101 =
    'Won 8 graded stakes including the Tenno Sho (Spring), senior-year Takarazuka Kinen, and senior-year Tenno Sho (Autumn).';
  102201 =
    'Previously undefeated, won the Shuka Sho, classic-year Queen Elizabeth II Cup, and classic-year Arima Kinen as the favorite, winning the Shuka Sho by 3½ lengths or more.';
  102301 =
    'Won the Kikuka Sho, Tenno Sho (Spring), and Takarazuka Kinen, finished in the top 2 in every race, and completed all career goals.';
  102401 = 'Won a G1 with each of the four running styles.';
  102501 =
    'Won the Kikuka Sho, Tenno Sho (Spring), and two Arima Kinens with a closer strategy, and reached 1,200+ base Stamina.';
  102601 =
    'Won the Asahi Hai Futurity Stakes, Satsuki Sho, and Japanese Derby undefeated as the favorite with a front-running strategy, and reached 1,200+ base Stamina.';
  102701 = 'Won the Kikuka Sho, Takarazuka Kinen, and Arima Kinen.';
  102801 =
    'Won the Yasuda Kinen, Mile Championship, and Sprinters Stakes consecutively, and reached 1,200+ base Power.';
  102901 =
    "Won a graded stakes at Morioka Racecourse and the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho).";
  103001 =
    'Raced in 23 or more G3+ races and won the Kikuka Sho, Tenno Sho (Autumn), and senior-year Takarazuka Kinen.';
  103101 =
    'Won the Asahi Hai Futurity Stakes, Satsuki Sho, Japanese Derby, and senior-year Japan Cup with a front-running strategy, and reached 1,200+ base Speed and Guts.';
  103201 =
    'Won the Hopeful Stakes, Yayoi Sho, and Satsuki Sho undefeated, and reached 1,200+ base Speed.';
  103301 =
    'Won the Satsuki Sho, Japanese Derby, and Takarazuka Kinen as the favorite.';
  103401 =
    'Won 4 or more races on both turf and dirt, won the Tokyo Daishoten and senior-year Takarazuka Kinen with a stalker strategy, and won the Tenno Sho (Spring) and Arima Kinen with a closer or chaser strategy.';
  103501 =
    'Won the Yayoi Sho, Satsuki Sho, Japanese Derby, and Kikuka Sho as the favorite, plus the classic-year Arima Kinen.';
  103601 =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho), Tenno Sho (Spring), senior-year Takarazuka Kinen, and senior-year Tenno Sho (Autumn), and reached 1,200+ base Wit.';
  103701 = 'Won the Japan Cup and Tenno Sho (Autumn) with a closer strategy.';
  103801 =
    'Won 9 races of 1,200m or shorter including the Takamatsunomiya Kinen and Sprinters Stakes.';
  103901 =
    'Remained undefeated for the entire career and won the Japanese Oaks, Shuka Sho, and Queen Elizabeth II Cup.';
  104001 =
    'Raced every race in Great condition, won the Hanshin Juvenile Fillies, and had all training facilities above level 3.';
  104101 =
    'Won 11 or more races of 1,400m or shorter, and won the senior-year Sprinters Stakes as the favorite.';
  104201 =
    'Won the Oka Sho, NHK Mile Cup, Japanese Oaks, Shuka Sho, Takamatsunomiya Kinen, and senior-year Sprinters Stakes.';
  104301 = 'Won the February Stakes and reached 1,200+ base Power.';
  104401 =
    'Won the Tulip Sho and Shuka Sho with a chaser strategy, and won the senior-year Takarazuka Kinen, Queen Elizabeth II Cup, and Arima Kinen with a closer or chaser strategy.';
  104501 =
    'Won 6 or more graded stakes of 2,400m or longer including the Kikuka Sho and Tenno Sho (Spring).';
  104601 =
    'Won the JBC Classic, Teio Sho, and Tokyo Daishoten with a front-running strategy, and achieved 9 or more consecutive dirt graded stakes (G3+) wins with a front-running strategy.';
  104602 =
    'Won the Japan Dirt Derby, February Stakes, Teio Sho, and senior-year Champions Cup, plus two consecutive wins in the JBC Classic and Tokyo Daishoten.';
  104701 =
    'Won the senior-year Tenno Sho (Autumn), Japan Cup, and Arima Kinen as the favorite.';
  104801 =
    'Won the Japan Cup, Tenno Sho (Spring), and two Tenno Sho (Autumn)s.';
  104901 =
    'Won the senior-year Takarazuka Kinen and Japan Cup with no training failures.';
  105001 =
    'Won the Satsuki Sho and Tenno Sho (Spring) with a chaser strategy, and reached 1,200+ base Guts.';
  105101 = 'Won the Hanshin Juvenile Fillies, Oka Sho, and Sprinters Stakes.';
  105201 =
    'Your deeds inspired countless fans; fan count reached 250,000 or more.';
  105202 = 'Won the senior-year Arima Kinen.';
  105203 = 'Won the Arima Kinen twice.';
  105301 =
    'Won the senior-year Yasuda Kinen, Takarazuka Kinen, Sprinters Stakes, and Mile Championship, and raced in 23 or more graded stakes.';
  105401 =
    'Won two consecutive Sprinters Stakes and the senior-year Mile Championship as the favorite.';
  105501 =
    'Won the senior-year Osaka Hai and Takarazuka Kinen, finishing every race in Great condition.';
  105601 =
    'Raced in 15 or more G2+ races in Great condition and won 3 consecutive G2+ races including the Kikuka Sho.';
  105701 =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho) and Tenno Sho (Spring) as the favorite using a chaser strategy.';
  105801 =
    'Achieved 9 consecutive graded stakes wins including the Tenno Sho (Spring), Takarazuka Kinen, and Arima Kinen.';
  105901 =
    "Won the Hanshin Juvenile Fillies and Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) as the favorite with a closer strategy, and won two consecutive Queen Elizabeth II Cups.";
  106001 =
    'Finished in the top 3 in four G1s and won the senior-year Arima Kinen.';
  106201 =
    'Won 4 or more graded stakes of 2,500m or longer including the Kikuka Sho and senior-year Arima Kinen, and raced in 12 or more G1s.';
  106301 =
    'Raced in 30 or more graded stakes, won the senior-year Yasuda Kinen and Takarazuka Kinen, and reached 1,200+ base Guts.';
  106401 =
    'Won the Takarazuka Kinen and Arima Kinen with a front-running strategy, and reached 1,200+ base Speed and Stamina.';
  106402 =
    'With 5 or fewer graded stakes wins before the senior year, won the Takarazuka Kinen and two consecutive Arima Kinens with a front-running strategy, and reached 1,200+ base Speed and Stamina.';
  106501 =
    'Won the Mile Championship and two consecutive Mile Championship Cups (or equivalent), finished every race in Great condition, and reached 1,200+ base Power.';
  106601 =
    'Won the senior-year Arima Kinen with a front-running strategy and reached 1,200+ base Speed.';
  106701 =
    "Won the Prix de l'Arc de Triomphe, Kikuka Sho, Tenno Sho (Spring), Japan Cup, and two Arima Kinens.";
  106801 =
    'Won 7 or more G1s including the Kikuka Sho, Tenno Sho (Spring), Tenno Sho (Autumn), and Takarazuka Kinen.';
  106901 =
    'Won the Asahi Hai Futurity Stakes, Satsuki Sho, Japanese Derby, and Japan Cup.';
  107001 = 'Won the Japanese Derby by 3 lengths.';
  107101 =
    'Won the Japanese Derby and two Tenno Sho (Autumn)s with no training failures, finishing every race in Great condition.';
  107201 =
    'Won the Satsuki Sho as the first G1 victory, plus the senior-year Osaka Hai, Yasuda Kinen, Takarazuka Kinen, and Arima Kinen, and reached 1,200+ base Power.';
  107301 = 'Won 6 or more G1 races.';
  107401 =
    'Won 4 or more G1 or G2 races of 3,000m or longer including the Tenno Sho (Spring).';
  107601 =
    'Won the Tenno Sho (Spring) and senior-year Arima Kinen, and reached 1,200+ base Stamina.';
  107701 =
    'Won four G1 races of 2,500m or longer, reached S aptitude in Long distance, and 1,200+ base Stamina.';
  107801 =
    'Won two consecutive Yasuda Kinens, the Sprinters Stakes, and senior-year Tenno Sho (Autumn), and reached 1,200+ base Speed.';
  107901 =
    'Won one G1 each at Kawasaki, Oi, and Funabashi racecourses, and reached 1,200+ base Guts.';
  108001 =
    'Won two consecutive Champions Cups, the Leopard Stakes, Keisei Hai, February Stakes, Teio Sho, and JBC Classic, and reached 1,200+ base Wit.';
  108101 =
    'Won 9 or more G1s including the Mile Championship, Champions Cup, February Stakes, and Kashiwa Kinen.';
  108201 =
    'Won the classic-year Fuchu Himba Stakes, Shuka Sho, Mile Championship, senior-year Yasuda Kinen, and senior-year Mile Championship Cup, and reached 1,200+ base Speed.';
  108301 =
    'Won the Tenno Sho (Autumn) and two Arima Kinens, and reached 1,200+ base Power.';
  108401 =
    'Remained undefeated for the career using a chaser strategy and won the Satsuki Sho, NHK Mile Cup, and Japanese Derby.';
  108501 =
    'Won the Oka Sho, Queen Elizabeth II Cup, senior-year Yasuda Kinen, and senior-year Sprinters Stakes.';
  108601 =
    'Won the Oka Sho, Japanese Oaks, classic-year Arima Kinen, and senior-year Queen Elizabeth II Cup.';
  108701 = 'Completed all career goals and won the Oka Sho.';
  108801 =
    'Won the undefeated Yayoi Sho, Satsuki Sho, Japanese Derby, Osaka Hai, Takarazuka Kinen, Tenno Sho (Autumn), and Hong Kong Vase (or Hong Kong Cup), and reached 1,200+ base Power.';
  108901 = 'Won the Japan Cup twice and the Arima Kinen twice.';
  109001 =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho), Victoria Mile, and Queen Elizabeth II Cup, and reached 1,200+ base Guts.";
  109101 =
    'Won 6 or more graded stakes as the favorite, including the Shuka Sho, senior-year Queen Elizabeth II Cup, and Victoria Mile.';
  109201 = 'Won the senior-year Takarazuka Kinen.';
  109301 = 'Won the Sprinters Stakes and reached 1,200+ base Speed and Guts.';
  109401 = 'Won the Japanese Derby and two consecutive Japan Cups.';
  109501 =
    'Won the classic-year Centaur Stakes by 4 lengths or more, plus the Sprinters Stakes and Takamatsunomiya Kinen.';
  109502 =
    'Completed a career while holding the [White Turbidity Stained] title.';
  109601 =
    'Won the Satsuki Sho as the second favorite or lower, raced the Kikuka Sho as the favorite, and won the Japanese Derby, senior-year Takarazuka Kinen, senior-year Tenno Sho (Autumn), and senior-year Japan Cup.';
  109701 =
    'Won the Oka Sho, Japanese Oaks, Shuka Sho, Queen Elizabeth II Cup, and Takarazuka Kinen, and reached 1,200+ base Wit.';
  109801 =
    'Won 11 or more dirt G1s, finished every race in Great condition, and completed all career goals.';
  109901 = 'Won 10 or more dirt G1 races.';
  110001 =
    'Won the Tokyo Daishoten, Kashiwa Kinen, Teio Sho, and JBC Classic, and reached 1,200+ base Guts.';
  110201 = 'Won the Kikuka Sho, senior-year Japan Cup, and two Arima Kinens.';
  110301 = 'Won the Aoba Sho and Japanese Derby.';
  110401 =
    'Won the Tenno Sho (Spring), senior-year Japan Cup, and Arima Kinen.';
  110501 =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho), classic-year Takarazuka Kinen, classic-year Japan Cup, Osaka Hai, and Tenno Sho (Spring), and reached 1,200+ base Wit.';
  110601 =
    'Won the Kikuka Sho, Tenno Sho (Spring), and senior-year Takarazuka Kinen.';
  110701 = 'Won the senior-year Takarazuka Kinen and Japan Cup.';
  110801 = 'Won 7 or more G1s including the Satsuki Sho and Japanese Derby.';
  110901 =
    'Won the Oka Sho, NHK Mile Cup, Shuka Sho, and senior-year Queen Elizabeth II Cup.';
  111001 =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) and Japan Cup, and reached 1,200+ base Speed.";
  111101 =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho), Victoria Mile, and two consecutive Queen Elizabeth II Cups, and reached 1,200+ base Wit.";
  111201 =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) and reached 1,200+ base Power.";
  111301 =
    'Won two consecutive Queen Elizabeth II Cups and finished every race in Great condition.';
  111401 =
    'Won the Oka Sho, Japanese Oaks, Shuka Sho, Tenno Sho (Autumn), Japan Cup, and Arima Kinen, racing every race as the favorite.';
  111501 =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho), senior-year Takarazuka Kinen, and two consecutive Arima Kinens, with the senior Arima Kinen won by 8 lengths or more.';
  111601 =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) and two consecutive Japan Cups, winning the Japanese Oaks by 5 lengths or more, and reached 1,200+ base Power.";
  111701 =
    'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho), Tenno Sho (Spring), senior-year Takarazuka Kinen, and senior-year Arima Kinen, and reached 1,200+ base Guts.';
  111801 =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) and two consecutive Queen Elizabeth II Cups.";
  111901 =
    'Won the Kikuka Sho, senior-year Takarazuka Kinen, and senior-year Arima Kinen, and reached 1,200+ base Wit.';
  112001 =
    'Won 9 sprint graded stakes with a front-running strategy, including two consecutive Ibis Summer Dash and a 4-length win in the Sprinters Stakes.';
  112101 =
    'Won two consecutive Sprinters Stakes and Mile Championship, and reached 1,200+ base Power.';
  112401 =
    'Won the Asahi Hai Futurity Stakes, Satsuki Sho, Japanese Derby, Japan Cup, Takarazuka Kinen, and two consecutive Tenno Sho (Autumn), and reached 1,200+ base Wit.';
  112701 = 'Won 6 or more G1s including the Tenno Sho (Spring).';
  112901 =
    "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho) and Japan Cup, finishing every race in Great condition.";
  113001 =
    'Won the Hanshin Juvenile Fillies, Osaka Hai, and two consecutive Queen Elizabeth II Cups, with the senior Queen Elizabeth II Cup won as the favorite.';
  113101 =
    'Won 5 mile G1s including the Oka Sho, Yasuda Kinen, and Mile Championship, and reached 1,200+ base Power.';
  113201 =
    'Won the Japanese Oaks and Queen Elizabeth II Cup while in Lust or higher relationship.';
  113301 =
    'Won the Shuka Sho, Takarazuka Kinen, and Arima Kinen (by 6 lengths or more), and reached 1,200+ base Wit.';
  113401 =
    'Won the Sweetpea Stakes, Japanese Oaks, Shuka Sho, and Tenno Sho (Spring), and reached 1,200+ base Wit.';
  113501 = 'Finished 3rd or better in every race.';
  113601 = "Won the Fillies' Triple Crown (Oka Sho, Japanese Oaks, Shuka Sho).";
  113701 =
    'Won the Kikuka Sho with a closer strategy and the senior-year Japan Cup with a front-running strategy.';
  200501 =
    "Won every French race as the favorite, including two consecutive Prix de l'Arc de Triomphe.";
  400001 =
    'Won the American Triple Crown (Kentucky Derby, Preakness Stakes, Belmont Stakes) and two Arima Kinens.';
  904601 = 'Won the Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho).';
  904701 =
    "Won the Takarazuka Kinen, Prix de l'Arc de Triomphe, Tenno Sho (Spring), and two consecutive Arima Kinens.";
  904801 =
    'Earned 500 or more reputation for the trainer through G1 victories.';
};
