/**
 * @file 东海帝王 - 爱慕
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('…не понять.');
      await teio.print_and_wait([
        'стоит увидеть ',
        callname,
        ' — и сердце само стучит, как перед скачкой… а если ',
        you.sex,
        ' болтает с другой ',
        teio.phy_sex_title,
        ', сразу не по себе; а когда после пробежки ',
        you.sex,
        ' идёт навстречу с улыбкой — телу ещё жарче…',
      ]);
      await teio.say_and_wait('у— да что ж такое!');
      await teio.print_and_wait(
        `спрашиваешь подруг, ${teio.couple_title} либо краснеют и сворачивают разговор, либо ржут без толку, а кто-то полушутя спрашивает, ${teio.sex} не влюбилась ли в своего тренера, чёрт, такое…`,
      );
      await teio.print_and_wait('такое тренеру не спросишь же а-а!!');
      await era.printAndWait(
        `побарахтавшись на кровати, с распущенными волосами ${teio.uma_sex_title} качает голенями, пальцы ног раз за разом касаются края.`,
      );
      await teio.say_and_wait('ладно, даже любовь великую Тэйо не остановит.');
      await teio.print_and_wait(
        `${you.name} смотрит, как подопечная поднимает уже красное лицо и сама решает, кем вы будете дальше…`,
      );
      // TALENTNAME:0 = 情感活动
      if (era.get('talent:3:0') !== 1) {
        era.println();
        era.print([teio.get_colored_name(), ' становится [чувствительна]!']);
      }
    };
    f.title = 'Трепет';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `день как день, ${you.name} как всегда стоит на дорожке и смотрит, как бежит подопечная.`,
      );
      await era.printAndWait(
        `сколько уже? ${you.name} невольно думает. С парка ${teio.sex} попалась навстречу — и до сейчас будто недолго, и будто ${teio.sex} уже столько всего с вами.`,
      );
      await era.printAndWait(
        `кадры всплывают: ${teio.sex} в поту, пашет на тренировке, ${teio.sex} щурит глаза, смеётся, ${teio.sex} стиснув зубы рвёт финиш, ${teio.sex} — живая, юная тень…`,
      );
      await era.printAndWait(
        `с каким настроем ты тогда при всех рванул, чтобы ${teio.sex} стала твоей? думал, ${teio.sex} выведет карьеру на пик? или ${teio.sex} заразила бегом, уверенностью, солнцем?`,
      );
      await era.printAndWait(
        `или… просто ${teio.sex} попалась на глаза? с первого взгляда — импульс: только вместе, и ${teio.sex} станет подопечной?`,
      );
      era.println();
      await teio.say_and_wait(`тренер?`);
      era.println();

      era.printButton('「что?」', 1);
      await era.input();

      await era.printAndWait(
        `подопечная, что принадлежит только ${you.name}, — ${teio.uma_sex_title} одной рукой лениво заправляет волосы, что растрепались на бегу, и одновременно другой берёт бутылку из рук ${you.name} — уже открученную, — и пьёт мелкими глотками.`,
      );
      await era.printAndWait(
        `с бледной кожи капает — пот или вода, ${
          you.name
        } спешит отвести взгляд — и попадает на затылок ${teio.uma_sex_title}: волосы заправлены, шея открыта.`,
      );
      await teio.say_and_wait(`тренер, ${you.name} что с тобой?`);
      era.println();
      await era.printAndWait(
        `${you.name} ещё не собрал слова и сам выдаёт ерунду`,
      );
      era.printButton(
        '「м? а! ничего, просто думал, как на тебя смотреть.」',
        1,
      );
      await era.input();

      await teio.say_and_wait(`…?`);
      era.println();
      await era.printAndWait(
        `маленькая ${teio.uma_sex_title} не держит улыбку, ставит стакан, чуть краснея, оборачивается и ловит взгляд ${
          you.name
        }.`,
      );
      era.println();
      await teio.say_and_wait(`тогда ${callname} как ты на меня смотришь?`);
      era.println();
      await era.printAndWait(
        `${teio.sex} смотрит в упор на ${you.name}, в взгляде стыд и чуть ожидания.`,
      );
      era.println();
      await era.printAndWait(`${you.name} скажет—`);
      era.printButton(
        `「…это, может, не тому, кто я сейчас」(повысить отношения)`,
        1,
      );
      era.printButton(
        `「отличный, живой, милый, но озорной ${teio.child_sex_title}… или ${teio.younger_sibling_sex_title}」(пока не повышать)`,
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await teio.say_and_wait('тогда кем ты хочешь стать?');
        await era.printAndWait(
          `${teio.teen_sex_title} глаза дёрнулись — и хихикает, докидывая вопрос.`,
        );
        await era.printAndWait('вот ведь чертовка!');
        await era.printAndWait(`${you.name} невольно дуреет и сам бурчит`);
        await you.say_and_wait(
          'эх… если так и дальше, как нам потом вместе жить.',
        );
        await teio.say_and_wait('в… вместе?');
        await era.printAndWait(
          `${teio.teen_sex_title} теряется, закрывает нижнюю половину лица, ${
            you.name
          } видя это, тоже идёт ва-банк.`,
        );
        await you.say_and_wait(
          'я… с самого начала хотел бежать с тобой дальше. примешь приглашение?',
        );
        await teio.say_and_wait(`/////`);
        await era.printAndWait(
          `${teio.teen_sex_title} закрывает глаза, дышит ртом, с глубоким вдохом ${
            teio.sex
          } опускает руки и смотрит на ${you.name}.`,
        );
        await teio.say_and_wait(
          'только без отката, великая непобедимая Тэйо тоже умеет дуться!',
        );
        era.println();
      } else {
        await teio.say_and_wait(`вот как…`);
        await era.printAndWait(
          `${teio.uma_sex_title} невольно надувает губы, ${
            you.name
          } спешно прочищает горло и читает сегодняшний план тренировки.`,
        );
      }
      return ret;
    };
    f.title = 'Не меняйся';
    return f;
  })(),
  '89-hurt': (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('комната тренера');
      await era.printAndWait('тишина.');
      await era.printAndWait(
        `${
          you.name
        } смотрит на ту перед собой: глаза закрыты, капли на лице, тело чуть дрожит — ${teio.uma_sex_title}${teio.teen_sex_title}.`,
      );
      await era.printAndWait(
        `потом ${you.name} как раньше берёт тёплое мягкое полотенце, и ${teio.sex} вытерта с головы до ног. Потом расчёска и фен — и ${teio.sex} расчёсана.`,
      );
      await era.printAndWait(
        `с тех пор ${teio.sex} часто заходит в общежитие — туда, где живёт ${you.name}, — помыться. А после ванны снова ${you.name} берётся вытирать, и ${teio.sex} выходит сухой, заодно и уход. Уже привычка.`,
      );
      await era.printAndWait(
        `вытерли, ${you.name} кладёт вещи на столик рядом и делает обычный массаж ног подопечной — ${teio.sex} восстанавливается.`,
      );
      await era.printAndWait(
        `${
          you.name
        } : мозолистые, чуть грубые руки на ${teio.uma_sex_title}${teio.teen_sex_title} — на самых важных ступнях и голенях гладят вверх-вниз, нет-нет легко нажмут.`,
      );
      await era.printAndWait(
        `гладкая упругая кожа отзывается под пальцами ${you.name}: снаружи ноги сильны и красивы, внутри — беда. Именно на них и держалась ${teio.sex}: шаг, бег, скачки. А теперь…`,
      );
      era.println();
      await teio.say_and_wait('эй, тренер.');
      era.println();
      await era.printAndWait(
        `${you.name} поднимает голову, внутри уже чует, что ${teio.sex} скажет, но всё равно отвечает`,
      );
      await you.say_and_wait('что, Тэйо?');
      era.println();
      await teio.say_and_wait('я… ты… дальше как будем?');
      era.println();
      await era.printAndWait(
        `${teio.sex} чуть кивает, смотрит на ноги: когда-то ${teio.sex} рядом бились, а теперь безжизненные, неясно оправятся ли — товарищи, и смотрит на ${you.name}.`,
      );
      era.printButton(`「вот мой ответ.」(повысить отношения)`, 1);
      era.printButton(`「…」(пока не повышать)`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' достаёт коробочку. Не успевает ',
          teio.uma_sex_title,
          teio.teen_sex_title,
          ' опомниться: мягко берёт левую ступню, которую ',
          teio.sex,
          ' даже не отдёрнула. Вскрывает упаковку, и кольцо садится на четвёртый палец, который ',
          teio.sex,
          ' и разглядеть не успевает.',
        ]);
        await era.printAndWait(
          `кольцо, что ${you.name} выбрал сам: размер в самый раз, держится и пальцу не мешает.`,
        );
        await era.printAndWait(
          `подушечками привычно мнёт точки на стопе ${teio.uma_sex_title}, что расслабляют и гонят кровь, `,
        );
        await era.printAndWait(
          `потом ${you.name} поднимает голову снизу вверх — и ловит пунцовое лицо подопечной, глаза будто в слезе.`,
        );
        era.printButton('「ты согласна?」', 1);
        await era.input();
        await teio.say_and_wait('…согласна!');
        era.println();
        await era.printAndWait(
          `${teio.teen_sex_title} сквозь слёзы смеётся, раскрывает руки, ${you.name} встаёт — и ${
            teio.sex
          } оказывается в объятиях — уже не разомкнуть.`,
        );
        // TALENTNAME:53 = 神之足
        if (!era.get('talent:3:53')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' получает ',
            {
              color: buff_colors[2],
              content: '[Божественная стопа]',
            },
            '!',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name} что сказать? ${you.name} что надо сказать? ${you.name} что можно сказать? в итоге только вздох.`,
        );
        await era.printAndWait(
          `${
            you.name
          } молча доделывает остальное, потом тихо ${teio.teen_sex_title} поднимает и ставит, выходит за дверь, прощается.`,
        );
      }
      return ret;
    };
    f.title = 'Договор скреплён';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('комната тренера');

      await teio.say_and_wait(`мёд～`);
      era.println();
      await era.printAndWait(
        `${you.name} экает и усаживает маленькую ${teio.uma_sex_title} к себе на колени (чтобы ${
          teio.sex
        } не ёрзала), привычным движением берёт полотенце — и вот уже ${teio.sex} с сухими волосами.`,
      );
      await era.printAndWait(
        'вторая рука не простаивает: мышь, файлы тренировок на экране.',
      );
      era.println();
      await teio.say_and_wait('н…');
      era.println();
      await era.printAndWait(
        `маленькая ${teio.uma_sex_title} пьёт медовый напиток из холодильника и тоже смотрит на ${
          you.name
        } файлы на компьютере.`,
      );
      era.println();
      await you.say_and_wait('…');
      era.println();
      await era.printAndWait('не выдержал.');
      await era.printAndWait(
        `только из ванны ${teio.teen_sex_title}: запах, кожа бёдер, то и дело по животу ${teio.uma_sex_title} шерсть…`,
      );
      await era.printAndWait(
        `${you.name} чувствует: кровь уже пошла по физиологическому руслу.`,
      );
      era.println();
      await teio.say_and_wait('тренер～ эта страница уже давно стоит.');
      era.println();
      await you.say_and_wait('…');
      era.println();
      await era.printAndWait(
        `сидя на ${you.name} коленях, она сама естественно откидывается назад, ${you.name} невольно деревенеет всем телом, `,
      );
      await era.printAndWait(
        `следом ${teio.sex}: голова снова прижимается к груди ${you.name}, маленькое лошадиное ухо описывает живой круг и ложится на сердце ${you.name}.`,
      );
      era.println();
      await teio.say_and_wait(`сердце стучит быстро, да.`);
      await era.printAndWait(`${you.name}——`);
      era.printButton(
        'наклониться и взять ухо подопечной в рот (повысить отношения)',
        1,
      );
      era.printButton('насильно встать (пока не повышать)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait(
          `не помня себя, ${you.name} наклоняется и легко берёт кончик уха Тэйо; сквозь рот ${you.name} чувствует: ${teio.sex} неловко вздрагивает, потом стихает, молча принимает и ждёт, что дальше сделает ${you.name}.`,
        );
        era.println();
        await you.say_and_wait('Тэйо… пойдёшь со мной дальше, ещё дальше.');
        era.println();
        await era.printAndWait(
          `${teio.sex} — лицо уже пунцовое, что-то шепчет и чётко кивает.`,
        );
        // TALENTNAME:62 = 淫身
        if (!era.get('talent:3:62')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' становится ',
            {
              color: buff_colors[2],
              content: '[Похотливое тело]',
            },
            '!',
          ]);
        }
      } else {
        await era.printAndWait(
          `${
            you.name
          } давит вполне обычный телесный порыв, придерживает ${teio.uma_sex_title} и ${
            teio.sex
          } оказывается сбоку: встаёт, кашляет, будто ничего. ${
            teio.name
          } выглядит чуть обиженной.`,
        );
      }
      return ret;
    };
    f.title = 'Together, forever';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} tname 获得的特性名
     */
    const f = async (teio, you, tname) => {
      const ret = [];
      await era.printAndWait(
        `${you.name} дышит свежим воздухом, гуляет в солнце.`,
      );
      await era.printAndWait(
        `вдруг сзади шорох, мягкое упругое с талии, белые нарукавники — руки крепко берут ${you.name}.`,
      );
      era.println();
      await you.say_and_wait(
        `среди бела дня ${teio.uma_sex_title} обнимает старшего тренера — что люди подумают.`,
      );
      era.println();
      await teio.say_and_wait(
        `какое счастье. увижу такого, кого так держат, а он ещё обижен — сразу ${you.sex} полетит ногой в море.`,
      );
      era.println();
      await you.say_and_wait('пощади уж.');
      era.println();
      await teio.say_and_wait('ничего. я теперь не чужая.');
      era.println();
      await era.printAndWait(
        `${you.name} краем глаза видит: ${teio.sex} довольно качает хвостом.`,
      );
      era.println();
      await teio.say_and_wait('и… чужих сейчас тоже нет.');
      era.println();
      await era.printAndWait('это так.');
      await era.printAndWait(
        `неясно почему, ${you.name} и ${teio.sex} стали парой — и вдруг выиграли приз на школьном празднике.`,
      );
      await era.printAndWait(
        'приз: бесплатный день на круизе на двоих плюс прокат свадебных платьев.',
      );
      await era.printAndWait(
        `${you.name} вспоминает взгляды тех сотрудников — план удался — и двусмысленные улыбки, сам криво усмехается.`,
      );
      era.println();
      await you.say_and_wait('…если так прижиматься, легко выйдет осечка.');
      era.println();
      await teio.say_and_wait('сейчас же день, да ещё на корабле?');
      era.println();
      await you.say_and_wait('поэтому и тупик. и как мне это решать?');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        {
          content: `「…тренер ${you.adult_sex_title}, не из тех ли извращенцев, что ведутся на свою подопечную?」`,
          color: teio.color,
        },
        '(смех)',
      ]);
      era.println();
      await you.say_and_wait('нет… э, не скажу… нет, не может быть!');
      era.println();
      await teio.say_and_wait('хе-хе… тогда объясни?');
      era.println();
      await era.printAndWait(
        `подопечная ${teio.uma_sex_title} прижимается ещё ближе, ${
          you.name
        } чувствует сухость во рту, сердце сбилось, спешит сказать`,
      );
      era.println();
      await you.say_and_wait('просто на свою волю никаких иллюзий не питаю.');
      era.println();
      await teio.say_and_wait('а я-то… те вещи уже тоже поняла…');
      era.println();
      await era.printAndWait(
        `красная ${teio.uma_sex_title}${teio.teen_sex_title} бормочет и уходит от ${you.name}. Приятное тепло уходит.`,
      );
      await era.printAndWait(
        `ан нет, ${teio.sex} сразу возвращается. Подопечная обходит ${you.name} и норовит залезть под пальто.`,
      );
      era.println();
      await you.say_and_wait('ещё хуже.');
      era.println();
      await teio.say_and_wait('может.');
      era.println();
      await you.say_and_wait('если разжуёшь мне похоть — что тогда?');
      era.println();
      await teio.say_and_wait('тогда и скажем.');
      era.println();
      await you.say_and_wait('…безответственно.');
      era.println();
      await teio.say_and_wait('хе-хе.');
      era.println();
      await you.say_and_wait('холодно?');
      era.println();
      await teio.say_and_wait('н…');
      era.println();
      await era.printAndWait(
        `судно не быстрое, ветер с моря как раз. Но у уха всё равно режет — похолодало? ${you.name} сам невольно отводит полу пальто и ${teio.name} прячет в объятиях. В белом платье—`,
      );
      await era.printAndWait(
        `— больше как у подружки невесты — маленькая ${teio.uma_sex_title} высовывается из чёрного ворота ${you.name} и всем телом опирается на ${you.name}.`,
      );
      await era.printAndWait('а… вот и тепло.');
      era.println();
      await teio.say_and_wait('…');
      era.println();
      await you.say_and_wait('…');
      era.println();
      await teio.say_and_wait('всё будет хорошо.');
      era.println();
      await you.say_and_wait('…?');
      era.println();
      await era.printAndWait(
        `на руках ${teio.teen_sex_title} вдруг выдаёт вот это.`,
      );
      await era.printAndWait(
        `взгляд. Перед глазами улыбка, что дует ${you.name}, и ясные глаза, не знающие сомнения.`,
      );
      era.println();
      await teio.say_and_wait('глаза прячешь, да.');
      era.println();
      await you.say_and_wait('…');
      await era.printAndWait(
        `не отмахнуться: ${you.name} и правда чуть поплыл — дальше начнётся ваша новая жизнь.`,
      );
      await era.printAndWait(
        `жизнь отдать. Половина — ${teio.sex}, и взаимно ${teio.sex} тоже владеет половиной ${you.name}. Потянет ли эту тяжесть?`,
      );
      era.println();
      await teio.say_and_wait(`обязательно выйдет, ${you.actual_name}.`);
      era.println();
      await era.printAndWait(
        `— и ${teio.child_sex_title} так утешает — ещё неловче и растеряннее.`,
      );
      await era.printAndWait(
        `${you.name} улыбается, кладёт руку ей на голову и ерошит как попало. Жмурится ${teio.sex} от удовольствия, и ${teio.sex} довольно мычит себе под нос.`,
      );
      await era.printAndWait('сокровище на руках — такая красота.');
      await era.printAndWait(
        `эта ${teio.uma_sex_title} несёт чистую веру и отдала ей тело. А ${
          teio.sex
        } — сама душа, сияющая, как солнце.`,
      );
      await era.printAndWait(
        `эта ${teio.teen_sex_title}… и есть то, чем ${you.name} чуть не бросил мечту.`,
      );
      era.printButton(
        `「не отпускать — пусть ${teio.sex} будет рядом, идти вместе」(повысить отношения)`,
        1,
      );
      era.printButton(
        '「разжать руки, остаться на месте」(пока не повышать)',
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1 && tname) {
        era.println();
        era.print([
          teio.get_colored_name(),
          ' становится ',
          {
            color: buff_colors[2],
            content: `[${tname}]`,
          },
          '!',
        ]);
      }
      return ret;
    };
    f.title = 'Завтра ещё';
    return f;
  })(),
};
