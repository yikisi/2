/**
 * @file 第一红宝石 - 育成 - NTR 结局
 * @author 梦露
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  be_ntr: (() => {
    const title = '「Дайити Руби, глядишь, сменит тренера」';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait(
        '[WARNING]\n!!!!ВНИМАНИЕ: NTR!!!!\nВ этой концовке полно концентрированного NTR. Продолжить?',
        {
          align: 'center',
          color: buff_colors[3],
          fontSize: '2rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
      );
      era.printMultiColumns(
        ['Неси уже скорее', 'Лучше унеси обратно……'].map((e, i) => ({
          accelerator: i * 100,
          config: { width: 12, align: 'center' },
          content: e,
          type: 'button',
        })),
      );
      const ret = await era.input();
      if (ret === 0) {
        await era.printAndWait('(Её уже предупредили)', {
          align: 'center',
          color: buff_colors[3],
          fontSize: '2rem',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait([
          'Спустя какое-то время ',
          you.get_colored_name(),
          ' получила от ',
          ruby.get_colored_name(),
          ' диск, который та поручила дворецкому передать ей.',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          'Блондин',
          'Ну всё, Дайити Руби, снимай.',
        );
        await ruby.say_and_wait('……Ах, хорошо.');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' будто собравшись с духом, кладёт руки на трусы жениха.',
        ]);
        await era.printAndWait([
          'Она выдыхает, стараясь успокоить сердце. И когда изо всех сил одним рывком стаскивает трусы, огромный член с напором выскакивает и оказывается перед ',
          ruby.get_colored_name(),
          '.',
        ]);
        await ruby.say_and_wait('Ай……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' издаёт короткий вскрик.',
        ]);
        await era.printAndWait('Его огромный член мощно торчит кверху.');
        await era.printAndWait('Сама стать — истинный символ самца.');
        await era.printAndWait([
          'Огромный член словно смотрит на ',
          ruby.get_colored_name(),
          ', налитой яростным чёрным блеском.',
        ]);
        await era.printAndWait('Какой огромный……');
        await era.printAndWait(
          'Его огромный член уже стоит — чёрный и толстый, как спелый банан. Размером с пластиковую бутылку, весь в набухших венах, вздувается, словно живое существо.',
        );
        await ruby.say_and_wait('Ах……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' невольно ахает от размеров члена. Глаза, кажется, не в силах оторваться от этого ствола и широко раскрыты от изумления. Она потрясённо смотрит на невероятно огромный хуй перед собой.',
        ]);
        await ruby.say_and_wait('Какой же он…… неужели…… вот такой……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' хвалит его огромный член и, задыхаясь, с первого взгляда влюбляется именно в длину.',
        ]);
        await era.printAndWait([
          'Она обхватывает рукой огромное основание; у ',
          ruby.get_colored_name(),
          ' пальцы длинные и красивые, но чужой несоразмерный член им совершенно не под стать, и она заново убеждается в его величине.',
        ]);
        await era.printAndWait(
          'Блондин「Как думаешь, у кого член больше — у меня или у твоего тренера?」',
        );
        await era.printAndWait([
          'С надменной ухмылкой он спрашивает ',
          ruby.get_colored_name(),
          ', и цель ей совершенно ясна. Но заставить её, свою невесту, сказать это вслух — само по себе имеет смысл.',
        ]);
        await ruby.say_and_wait('……! Такое… я не скажу.');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' — лицо плывёт; жених кладёт руку на голову ',
          ruby.get_colored_name(),
          ' и ласкает.',
        ]);
        await era.printAndWait('Блондин「Говори.」');
        await era.printAndWait([
          'С резким выражением лица он приказывает ',
          ruby.get_colored_name(),
          ', и она бормочет, будто сдавшись.',
        ]);
        await ruby.say_and_wait('У вас…… больше.');
        await era.printAndWait('Блондин「Больше, чем у кого? Скажи прямо.」');
        await ruby.say_and_wait(
          'У вас лучше……! Больше и лучше, чем у тренера……!',
        );
        await era.printAndWait('Блондин「Вот, умница.」');
        await era.printAndWait([
          'Совершенно не так, как мгновение назад, с мягким лицом он гладит ',
          ruby.get_colored_name(),
          ' по голове.',
        ]);
        await ruby.say_and_wait('Прости……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' смотрит в камеру с виноватым лицом.',
        ]);
        await era.printAndWait(
          'Глядя на неё, тренер осознаёт, что была любима.',
        );
        await era.printAndWait([
          'Когда их взгляды встречаются, между ними внезапно вторгается огромный член. Перед глазами — один его ствол, и ',
          ruby.get_colored_name(),
          ' тоже уже отвела взгляд от камеры: взгляд целиком похищен громадиной перед глазами.',
        ]);
        await era.printAndWait([
          'Он как попало хватает ',
          ruby.get_colored_name(),
          ' за волосы и прижимает к своему паху. Насильно разжимает рот, вкручивает огромный член ей в рот и грубо таскает за волосы вверх-вниз.',
        ]);
        await ruby.say_and_wait('Мн…… мн…… мн……!');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' страдальчески хмурится. Каждый раз, когда тёмный огромный член входит в крохотный рот ',
          ruby.get_colored_name(),
          ' или выходит из него, слюна капля за каплей стекает с уголка губ.',
        ]);
        await era.printAndWait(
          'В её крохотном рту огромному члену некуда деться, и он наконец вторгается в горло, раздувая её тонкую прекрасную шею.',
        );
        await ruby.say_and_wait('Мн~! Мн……!');
        await era.printAndWait(
          'Обычно столь величавое и прекрасное лицо залито от чрезмерной муки слезами и соплями.',
        );
        await era.printAndWait('Блондин「Кончаю! Выпей всё до капли!」');
        await era.printAndWait(
          'Сказав это, жених одним движением вжимает её голову до самого основания и кончает. Сперма в чудовищном количестве хлещет у неё из носа и изо рта.',
        );
        await ruby.say_and_wait('Мн…… мн……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' булькает, проглатывая сперму до конца.',
        ]);
        await ruby.say_and_wait('Ха-а……! Нн…… ха……');
        await era.printAndWait([
          'Наконец вынутый из горла ',
          ruby.get_colored_name(),
          ' огромный член весь в тягучей сперме и слюне; нитка слюны тянется от её пухлых губ.',
        ]);
        await era.printAndWait(
          'Глаза не могут сфокусироваться — будто от нехватки воздуха, взгляд плывёт. Уголки губ, раз она принимала до самого основания, облеплены мужским волосом, который забрался ей даже в рот.',
        );
        await era.printAndWait([
          'Жених кладёт огромный член на лицо ',
          ruby.get_colored_name(),
          ' и растирает вытекающую сперму по её прекрасной щеке.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' — лицо сплошь в сперме, изо рта капает слюна, она едва может дышать.',
        ]);
        await era.printAndWait(
          'Сопротивляться она уже, видимо, не собирается.',
        );
        await ruby.say_and_wait('Мн♥а♥а♥а♥');
        await ruby.say_and_wait('О♥♥о♥♥♥♥');
        await ruby.say_and_wait('Нньааа♥ннн♥');
        await ruby.say_and_wait('Гуох♥ннх♥');
        await ruby.say_and_wait('Оо~оо♥');
        await era.printAndWait(
          'Это почти звериный голос. Похабная лесть сильному самцу, гигантскому члену.',
        );
        await you.say_and_wait('Руби…?', true);
        await era.printAndWait([
          ' невозможно. ',
          ruby.get_colored_name(),
          ' Чтобы она так грязно и беспомощно стенала.',
        ]);
        await era.printAndWait(
          'Огромный смуглый самец насилует белоснежную самку.',
        );
        await era.printAndWait(
          'Самец прижимает её сверху и мощно качает бёдрами; самка, грязно стеная, обвивает ногами его талию, будто обнимая.',
        );
        await era.printAndWait([
          'Из лона ',
          ruby.get_colored_name(),
          ' входит и выходит иссиня-чёрный гигантский член, выгибаясь огромной дугой от своих чудовищных размеров.',
        ]);
        await era.printAndWait(
          'Он грубо долбит бёдрами, вгоняя гигантский член в женское тело — это почти изнасилование.',
        );
        await era.printAndWait(
          'Глядя друг другу в глаза, они снова и снова глубоко целуются. Поза такой близости должна быть только у любовников.',
        );
        await ruby.say_and_wait(
          'Ох♥ох♥ох! Как же хорошо♥ до самого дна♥ уоооааа!',
        );
        await era.printAndWait(
          'Она так пошло кричит, и жених, явно довольный, спрашивает её.',
        );
        await era.printAndWait(
          'Блондин「Писюн тренера или мой гигант — что лучше?」',
        );
        await ruby.say_and_wait(
          'Ах! Этот! Этот большой♥ достаёт туда, куда тренер не достаёт♥',
        );
        await era.printAndWait(
          'Блондин「Ха-ха, ты и правда любишь гигантские члены!」',
        );
        await ruby.say_and_wait(
          'Люблю!♥ люблю здоровенные!♥ с писюн-тренером это другой биологический уровень♥',
        );
        await era.printAndWait(
          'Блондин「Вот именно, такого мусорного тренера и выкинь!」',
        );
        await ruby.say_and_wait(
          'Нельзя♥ не говори о нём плохо♥ просто член небольшой♥ детский писюн с фимозом♥ просто люблю его нежность♥ нельзя♥',
        );
        await era.printAndWait(
          'Блондин「Даже если нежный — как мужчина он бесполезный мусор!」',
        );
        await ruby.say_and_wait('Нельзя♥ по правде нельзя♥');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' стеная, всё кричит это, и услышав её слова, он всё быстрее двигает бёдрами и переходит к финальному рывку.',
        ]);
        await ruby.say_and_wait('Уааооо♥ нельзя♥ нельзя♥ нельзя♥ кончаю~♥♥♥');
        await era.printAndWait(
          'Затем и жених, дрожа всем телом, начинает кончать.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' издаёт стон 「хо-хо-хо♥」, выпрямляет обвитые вокруг него ноги и дрожит от наслаждения.',
        ]);
        await era.printAndWait([
          'Едва он отстраняется от её тела и встаёт, из лона ',
          ruby.get_colored_name(),
          ' скользко выскальзывает гигантский член. Разумеется, без презерватива — сперма капает с него капля за каплей.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' закатывает глаза, ноги и тело сводит судорогой. Из её лона вытекает сперма, которой больше некуда деваться.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' приняла сперму внутрь.',
        ]);
        await era.printAndWait([
          'Жених легко поднимает совсем обмякшую ',
          ruby.get_colored_name(),
          ', подхватывая её под милые коленки.',
        ]);
        await era.printAndWait([
          'Словно отливающий чёрным блеском член снова вгоняется в насквозь мокрое лоно ',
          ruby.get_colored_name(),
          '.',
        ]);
        await ruby.say_and_wait('Ваа!♥');
        await era.printAndWait([
          'Потому что он одним рывком жёстко упёрся в самую глубину, ',
          ruby.get_colored_name(),
          ' грязно стонет. С каждым жёстким толчком поршня у ',
          ruby.get_colored_name(),
          ' пышная нежная грудь колышется.',
        ]);
        await ruby.say_and_wait(
          'Не смотри♥ не смотри♥ на такую меня♥ прошу♥ ооо♥♥♥',
        );
        await era.printAndWait(
          'Она велит тренеру не смотреть. Это слишком далеко от образа, который она обычно держит; не хочет, чтобы такое её кто-то видел.',
        );
        await era.printAndWait(
          'Тогда жених шепчет ей на ухо. Она, выдыхая, кивает. Затем говорит тренеру.',
        );
        await ruby.say_and_wait(
          'Не смотри♥ извращенец♥ писюн-извращенец, сдохни♥ сдохни♥',
        );
        await era.printAndWait(
          'Ей нечем дышать, и всё равно она бросает в тренера унизительные слова.',
        );
        await ruby.say_and_wait(
          'Фимозник, сдохни♥ мусор, у которого увели любимую умамусумэ, сдохни♥ сдохни♥ сдохни♥ сдохни♥',
        );
        await era.printAndWait(
          'Услышав это, жених вгоняет ещё жёстче. Верно, шёпот ей на ухо был чем-то вроде приказа 「Я сделаю тебе ещё приятнее, так что ругай тренера」.',
        );
        await ruby.say_and_wait(
          'Сдохни♥ сдохни, неполноценные гены♥ тебе не место в этом мире♥',
        );
        await you.say_and_wait('Это правда то, что думает Руби?', true);
        await ruby.say_and_wait('Уэ♥ аа~♥');
        await era.printAndWait(
          'Ноги вытягиваются, сводит судорогой. Слюна капает изо рта, глаза закатываются. Пытаясь хоть как-то сбежать от пронзившего всё тело наслаждения, она обмякает.',
        );
        await era.printAndWait([
          'Увидев это, жених швыряет ',
          ruby.get_colored_name(),
          ' на кровать.',
        ]);
        await ruby.say_and_wait(['…Прости, ', callname, '……']);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
