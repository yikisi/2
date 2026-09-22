/**
 * @file 东海帝王 - 育成 - 断腿线
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ws_95_14_h: (() => {
    const title = 'Праздник благодарности болельщикам';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `Перед самым выходом ${you.name} снова помогает Тэйо привести в порядок шерсть.`,
      );
      await era.printAndWait(
        `На деле сегодня это проделано уже несколько раз, но вы оба молчаливо не подаёте виду: может быть, так приводят в порядок и то, что внутри.`,
      );
      await era.printAndWait(
        'Выйдя на площадку навстречу собравшимся болельщикам, Тэйо, как всегда, держится уверенно, и внезапная «Поступь Тэйо · изменённая» раскаляет зал до предела.',
      );
      await era.printAndWait(
        `${you.name} же тихо уходит за кулисы и думает о близящемся забеге.`,
      );
      await era.printAndWait(
        `Чем ярче Тэйо сегодня, тем громче тревожный звон, который слышит ${you.name} у себя в голове…`,
      );
    };
    f.title = title;
    return f;
  })(),
  // TODO Synced from the current i18n template; this new scene is not translated yet.
  bs_broken: (() => {
    const title = '折翼';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {TextContent} leg_hurt_notification 腿伤的提示信息
     */
    const f = async (teio, you, leg_hurt_notification) => {
      await era.printAndWait(
        `医生的存在就是为了救死扶伤，我心爱的人一定会好起来的——不错，人们站在病房的门口，往往就会这么想。可是，这种想法，到底有几分真实，几分自我安慰呢？如果能够挽救的话，那么即使有医生的存在，这个世界依然无法避免伤亡的出现，难道是因为医生不够活跃？不够尽心？不……或者只是因为自己运气不好罢了。`,
      );
      era.println();
      await era.printAndWait(
        `如此想着，${you.name} 不自觉拿惯用手扶了扶额，呆呆地望着面前穿着白色大褂的中年男人。他的嘴唇在翕动——说话？他有在说什么吗？闲置的手处传来毛发的触感，不，不似以往，精心打理的柔顺马尾仿佛受惊一般，从内部炸开，掌心处传来一阵瘙痒。${you.name} 有点想笑，这孩子，怎么跑个步把自己搞成这样，一会得好好——`,
      );
      await era.printAndWait(
        `${you.name} 转头，努力微笑着看向自家担当，随后看到了那双无神的双眸，将 ${you.name} 的思想吸回现实。`,
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '主治医生',
        `${teio.actual_name_with_title}，以及 ${
          you.actual_name_with_title
        }，${teio.sex}的训练员，我必须再次强调一遍，要做好此生放弃赛跑的准备。`,
      );
      era.println();
      await era.printAndWait(
        '——任何逃避的想法，终究抵挡不住现实的车轮。现实就在眼前，除了接受之外别无二选。',
      );
      era.println();
      await era.printAndWait(
        `${you.name} 看着主治医生拿出一根金属小杖，再度在屏幕显示的照片上指点起来。之前不愿接受而自主屏蔽的回忆与现在的影像重叠，${you.name} 完全知道他都说了些什么。「髌骨脱位」「习惯性骨折」「裂纹」「小腿」……不错，所有地方 ${you.name} 都知道，所有情况 ${you.name} 都清楚。`,
      );
      era.println();
      await era.printAndWait(
        `可是这种事情依然发生了。${you.name} 忍住了情绪，尽力将自己压在原地。`,
      );
      await era.printAndWait('马尾在动，似要抽离。');
      await you.say_and_wait(
        '对我感到失望了吗，也没关系，是我作为训练员的失职',
        true,
      );
      await era.printAndWait(
        `${you.name} 这么想着，主动将手往回缩了一点……但失败了。`,
      );
      era.println();
      await era.printAndWait(
        `一只与蕴含力量不相称的小手放在了 ${you.name} 的掌面上，接着是从下方握住的另一只。一阵温暖传来，而同时，${you.name} 又感觉到了一股轻颤，如孩童扯住亲密的人衣角一般，${teio.name} 拉着 ${you.name} 的手。${you.name} 长叹一声，回握住${teio.sex}，再未松开。`,
      );
      era.println();
      if (era.get('talent:3:身体素质') === 1) {
        era.print(['【', teio.get_colored_name(), ' 不再 [体壮] 了！】']);
      }
      if (era.get('talent:3:自信程度') !== 1) {
        era.print(['【', teio.get_colored_name(), ' 变得 [自卑] 了！】']);
      }
      if (era.get('talent:3:淫乱') !== 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          ' 变得 ',
          {
            color: buff_colors[2],
            content: '[淫乱]',
          },
          ' 了！】',
        ]);
      }
      era.print(leg_hurt_notification);
    };
    f.title = title;
    return f;
  })(),
  ws_95_17_h: (() => {
    const title = 'Пресс-конференция';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        ` ${you.name} поправляет галстук и последний раз оглядывает себя в зеркале.`,
      );
      await era.printAndWait('— Мм, сказать нечего.');
      await era.printAndWait('И сделать уже нечего.');
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит на часы: времени в обрез, уговорить себя потянуть ещё немного уже не выйдет.',
      ]);
      await era.printAndWait('Глубокий вдох, попытка расслабиться.');
      await era.printAndWait(
        ` ${you.name} выходит из уборной и идёт навстречу собственной гибели.`,
      );
      era.println();
      await era.printAndWait(
        `На эту пресс-конференцию ${you.name} Тэйо не взял: для публики сказано, что ей нужны лечение и покой. Да и сам ${you.name} считает: в таком состоянии ${teio.sex} только навредит себе — ${teio.sex} не выиграет от этого ничего. Плохо другое: теперь ${you.name} вынесет всё один.`,
      );
      await era.printAndWait(
        `Впрочем, надо думать, ${you.name} давно был к этому готов, не так ли?`,
      );
      era.println();
      await era.printAndWait(
        `В зале, под бесчисленными софитами и объективами, отбиваясь от зубастых репортёров, ${you.name} тратит все силы, чтобы держаться ровно и отвечать по существу. Рубашка под пиджаком уже насквозь мокрая, но, кажется, вот-вот всё кончится. Спасибо Трейсену за выучку, — думает про себя ${you.name} и сосредоточенно отвечает на каверзные вопросы один за другим. А самое страшное наконец —`,
      );
      era.println();
      await era.printAndWait(
        `Журналист A 「Скажите. Специалисты разбирали травму Токай Тэйо и сходятся на том, что причина — особая манера бега, которой владеет ${teio.sex}. А вы ей тренер, тот самый, кого выбрала ${teio.sex}, и не знать об этом не могли. Выходит, вы знали о беде — и всё равно на дорожку вышла ${teio.sex}, и вот чем это кончилось?」`,
      );
      era.println();
      await era.printAndWait('— Началось.');
      await era.printAndWait('Тут надо осторожно.');
      await era.printAndWait(
        `Может статься, от этого ответа зависит, останется ли в профессии ${you.name}.`,
      );
      await era.printAndWait(`${you.name} решает —`);
      era.printButton(
        `「Не вполне знал. Токай Тэйо сама просила выпустить её, а я лишь пошёл навстречу желанию подопечной」`,
        1,
      );
      era.printButton(
        `「Тренер — это я, и выбрала меня ${teio.sex}. Вся ответственность на мне.」`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `Зал ещё долго перешёптывается, прежде чем утихнуть. Как они отзовутся, ${you.name} знает и без того, но ему уже всё равно.`,
        );
      } else {
        await era.printAndWait('Поднимается шум.');
        await era.printAndWait(
          'Впрочем, после такой фразы, разорвавшейся как бомба, отбиваться дальше уже почти не от чего.',
        );
        await era.printAndWait('Наконец всё это кончилось.');
        await era.printAndWait(
          `Софиты гаснут, репортёры и операторы, задав свои вопросы, понемногу расходятся, и на сцене остаётся один ${you.name}. И вот когда ${you.name} переводит дух и уже собирается уходить —`,
        );
        era.println();
        await era.printAndWait('Болельщик A 「Почему…」');
        era.println();
        await era.printAndWait(` ${you.name} недоумённо поднимает голову.`);
        era.println();
        await era.printAndWait('Болельщик B 「Проклятье…」');
        era.println();
        await era.printAndWait(
          `В зале вдруг оказываются двое незнакомых людей: похоже, проскользнули, когда толпа разошлась.`,
        );
        era.println();
        await era.printAndWait(
          `Болельщик A 「Из-за тебя погибла ${teio.sex}!」`,
        );
        era.println();
        await era.printAndWait(
          `Болельщик B 「Из-за твоего эгоизма, из-за того, что тебе важны одни результаты, а до того, каково самой ${teio.uma_sex_title}, тебе дела нет, — вот во что превратилась Токай Тэйо!」`,
        );
        era.println();
        await era.printAndWait(
          `Болельщик A 「А ты, называющий себя тренером… ты просто отряхнёшься и уйдёшь! Твоя хвалёная ответственность — это пара слов на людях, поклон да извинение, а как шумиха уляжется, подпишешь договор с новым дарованием! А прежняя твоя подопечная, та ${teio.uma_sex_title}, — у неё вся жизнь пошла прахом!」`,
        );
        era.println();
        await era.printAndWait(
          `Оба подступают ближе и с яростью смотрят на того, кто перед ними, — на ${you.name}. И ${you.name} встречает их взгляд, но так и не решается заговорить.`,
        );
        await era.printAndWait(
          'В их глазах, кроме гнева и горькой обиды, есть ещё и пустота.',
        );
        await era.printAndWait('Так смотрят те, кто потерял мечту.');
        await era.printAndWait(`——${you.name} торгует мечтой.`);
        await era.printAndWait(`——${you.name} убил того, кто дарил нам мечту.`);
        await era.printAndWait(
          'Три пары глаз прячут своё внутри и смотрят друг на друга в упор.',
        );
        era.printButton(`「Я отвечу за это.」`, 1);
        await era.input();
        await you.say_and_wait(
          `Придёт день, и ${teio.sex} вернётся на дорожку… И тогда вы увидите: ${teio.sex} всё та же Тэйо.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_17_h: (() => {
    const title = 'Опора';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('Дождливая ночь. Ни звука.');
      await era.printAndWait(
        `${
          you.name
        } в одиночку в общежитии сверлишь экран с материалами, то пишешь, то замираешь, правишь план тренировок подопечной ${teio.uma_sex_title} на следующий этап. На деле это ${
          you.name
        } давно закончил, и всё же непонятно, зачем ${
          you.name
        } снова тянет работу до глубокой ночи: выпустить тяжесть из груди? Или прячется в работе от того, что есть?`,
      );
      await era.printAndWait(
        `Стук по клавишам всё злее, звук лезет в уши, в голову, ${you.name} хлопает крышку, трёт виски, закрывает глаза, глубоко вдыхает, долго выдыхает.`,
      );
      await era.printAndWait('…Звук не стих.');
      await era.printAndWait(
        `${
          you.name
        } на миг застываешь, потом быстро к двери, взгляд в глазок — и створка настежь. Звонок ещё тянется, дверь открыта, в самой середке глубокой ночи — промокшая насквозь ${teio.uma_sex_title} стоит перед ${
          you.name
        }. Дождь стекает по плащу, длинная загнутая белая чёлка прибита водой к крылу носа и снова легко снята — и вместе с тем, как ${
          teio.sex
        } поднимает капюшон, ${you.name} видит пару тусклых синих глаз.`,
      );
      await era.printAndWait(
        `В этот миг, ${you.name} появляется ничем не подкреплённая уверенность — будто всю ночь ты только и ждёт, пока ${teio.sex} придёт. Ждёшь. И вот — ${teio.sex}.`,
      );
      await era.printAndWait(
        `С облегчением — и с каплей злости — ${you.name} молчит и боком уступает дорогу — ${teio.sex} входит.`,
      );
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title} молча сидит на диване, позволяет ${
          you.name
        } накрыть голову горячим полотенцем и водить им. ${
          you.name
        } несколько раз хочет заговорить — выходит только бормотание, бросает. Человек и лошадь тонут в странной тишине.`,
      );
      await era.printAndWait(
        `Даже ${
          you.name
        } без тренерского опыта с одного взгляда видит, что ${teio.uma_sex_title}${teio.teen_sex_title} на грани срыва.`,
      );
      await era.printAndWait(
        `${
          teio.sex
        } безжизненно сидит, ладони вместе — не молитва, скорее ищет, на что опереться, прижимает лоб к рукам. Эта ${teio.teen_sex_title} будто заперта в тихой тьме, отсекает и свет, и звук, ${
          you.name
        } даже невольно боится, взаправду ли ${teio.sex} здесь.`,
      );
      await era.printAndWait(`— н-да, ${teio.sex} точно здесь.`);
      await era.printAndWait(
        `Ощущение у пояса закрепляет её здесь — ${teio.sex} точно в реальности. Кончик хвоста тихо, осторожно обвивает ${you.name}, будто утопающий хватается за единственный трос, туго обвивает ${you.name} по стану.`,
      );
      era.printButton('「Тэйо…」', 1);
      await era.input();
      await era.printAndWait(
        `Ни звука. Только ${teio.teen_sex_title} легко дрожит телом, будто отвечает ${
          you.name
        }.`,
      );
      era.println();

      await you.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `Ещё не видел ${teio.teen_sex_title} такого вида. Шерсть, что всегда гладко стояла, взъерошена, глаза пустые, тусклые, и без того маленькое тело дрожит в такт дыханию и пульсу. ${
          you.name
        } снова зовёт по имени — ${
          teio.sex
        }, чуть громче, чем только что, но сдерживаешь силу. На этот раз есть ответ. Вдруг. ${
          teio.name
        } резко вскидывает голову и смотрит в упор на ${you.name}, моргает, будто проверяет.`,
      );
      await era.printAndWait('И тогда — бросок.');
      await era.printAndWait(
        `Маленькое тело оказывается у ${you.name} на руках.`,
      );
      era.println();

      await teio.say_and_wait(`——`);
      era.println();

      await era.printAndWait(
        `Ни всхлипа. Ни слёз. Но явно ${teio.sex} держит эту волну.`,
      );
      await era.printAndWait(
        `Стоит воле дрогнуть хоть на шаг — и ${
          teio.sex
        } потеряет и то сопротивление, что ещё держится: ${teio.teen_sex_title} заплачет — и уже не остановится.`,
      );
      await era.printAndWait(
        `А это уже крах ${teio.name}, этой ${teio.uma_sex_title}.`,
      );
      await era.printAndWait(
        'По здравому смыслу: если на душе тяжело — что плохого в том, чтобы выплакаться. Так и есть. У слёз великая сила: смывают муть, любую боль делают легче.',
      );
      await era.printAndWait(
        'После слёз люди снова находят силы смотреть правде в глаза.',
      );
      await era.printAndWait(
        `Но — для той, кого зовут ${
          teio.name
        }, эта ${teio.uma_sex_title} сейчас даже это — не выход.`,
      );
      await era.printAndWait(
        `Если здесь, прислонившись к ${you.name}, плакать — не бегство ли это от ответственности?`,
      );
      await era.printAndWait(
        `Ещё с дебюта трубили про Тройную корону, цель без равных — эта ${teio.uma_sex_title} надорвалась на своей же уникальной манере бега, которую сама считала самой верной, сшитой под свой дар. А в конце ещё и по своеволию взвалила ответственность на верного тренера ( ${
          you.name
        }). И при таком раскладе с каким лицом плакать рядом с ${
          you.name
        }, сбрасывать всё и снова ждать, что ${you.name} вытащит её. А ${teio.sex} — ради чего?`,
      );
      await era.printAndWait(
        `Может, сейчас пролить слёзы и сбежать от всего для ${
          teio.name
        } это и было бы счастьем. Но тогда та, несгибаемая, что уверенно заявляла о себе на глазах у мира, — эта ${teio.uma_sex_title} сдалась и ушла с круга.`,
      );
      await era.printAndWait(
        `Поэтому ${teio.teen_sex_title} просто прижимается к ${
          you.name
        } в объятиях, кусает губу, глаза зажмурены, тело дрожит почти смешно.`,
      );
      await era.printAndWait(
        ` ${you.name} мягко гладишь ${teio.uma_sex_title} по спине, чтобы ${
          teio.sex
        } успокоилась.`,
      );
      await era.printAndWait(
        `Тепло идёт между вами. Та, что тыкалась в ${you.name}, как маленькое солнце грела ${you.name} тело и душу — подопечная, — теперь наоборот греет её ты, ${you.name}.`,
      );
      era.println();
      await teio.say_and_wait('…Тренер.');
      era.println();
      await era.printAndWait(
        `${you.name} пальцами по привычке медленно расчёсываешь ей шерсть — ${teio.sex} — и машинально мычишь в ответ.`,
      );
      era.println();
      await teio.say_and_wait(
        'Я… не знаю, что сказать, и не знаю, что делать.',
      );
      await era.printAndWait(
        ` ${you.name} молчишь в ответ, пальцы замедляются.`,
      );
      era.println();
      await teio.say_and_wait('Мне теперь… только ты.');
      era.println();
      await era.printAndWait(
        `Гордые ноги, крылья, что несли мечту, — всё сошло с неё, и ${teio.teen_sex_title} осталась без них.`,
      );
      era.println();
      await teio.say_and_wait('Я хочу твою силу. Вот эту.');
      era.println();
      await you.say_and_wait('Такое я тебе дам.');
      era.println();
      await teio.say_and_wait('Тогда… прими и моё.');
      era.println();
      await era.printAndWait(
        `Тонкий пальчик осторожно лезет ${you.name} под ворот, скользит по ключице вниз на грудь, ${you.name} чувствует, как кожа стянулась.`,
      );
      await era.printAndWait(`${you.name} решаешь —`);
      era.printButton(`「Оттолкнуть — ${teio.sex}. Встать.」`, 1);
      era.printButton('「Кивнуть.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} берёшь её за плечи — ${teio.sex} — и телом даёшь ответ. Потом вызываешь такси, отвозишь — ${teio.sex} едет обратно в школу, всю дорогу без слов — может, просто ${you.name} не может смотреть ей в лицо — ${teio.sex}.`,
        );
      } else {
        await era.printAndWait(
          `Сомнение. То, на что ${teio.sex} намекает без слов, ${you.name} чувствует простую радость. И возбуждение.`,
        );
        await era.printAndWait(
          `Но можно ли отдать тело этой волне. Правда ли это спасёт эту ${teio.teen_sex_title}?`,
        );
        await era.printAndWait(
          `— И всё же ${you.name} уже решил отдать всё ей. Не ${teio.sex} ли сама решает.`,
        );
        await era.printAndWait(
          `Раз уж это решение ${teio.sex} приняла. Тогда ${you.name} остаётся одно — уважить решение, что ${teio.sex} приняла.`,
        );
        era.println();

        await you.say_and_wait('Я, может, не из нежных');
        era.println();

        await teio.say_and_wait('Ничего… я — нн!');
        era.println();
        await era.printAndWait(
          `${you.name} поднимаешь ей подбородок — ${teio.sex} целуешь в губы — ${teio.sex} не столько этикет, сколько чтобы ${teio.sex} чуть выдохнула.`,
        );
        await era.printAndWait(
          `Но этот жест выпустил на волю то, что у ${you.name} сидело глубоко внутри.`,
        );
        await era.printAndWait(
          `Жар и мягкость — и ${
            you.name
          } пробует ${teio.uma_sex_title} на вкус. Да: это существо с рождения жадное до людей! Та сладость, в которую проваливаешься, тянет наружу похоть — и вот ${
            you.name
          } уже во власти этого желания.`,
        );
        await era.printAndWait(
          `Охота прижать её — ${teio.sex} — повалить под себя, взять тело: волна, которой не устоять, в этот миг встаёт и бьёт от сердца до кончиков пальцев.`,
        );
        await era.printAndWait('Часть тебя уже становится зверем.');
        await era.printAndWait(
          `Может, чует перемену в ${you.name}: в охапке ${
            teio.name
          } дрожит. Без внимания к этому ${
            you.name
          } продолжает начатое — язык раздвигает ей губы и лезет внутрь — ${teio.teen_sex_title}.`,
        );
        await era.printAndWait(
          `По гладким зубам до упругой десны. Язык поддевает ${teio.teen_sex_title} верхнюю губу, лижет изнутри.`,
        );
        await era.printAndWait(
          `Трудно сказать, правильно ли так с ней обращаться — ${teio.teen_sex_title} тут ни при чём. Но порыв не унять.`,
        );
        await era.printAndWait(
          `${teio.name} наверняка до смерти напугана, но ${teio.sex} очень послушна. Не сопротивляется, не уворачивается, кротко отдаёт тело ${you.name}.`,
        );
        await era.printAndWait(
          `Такая покорность ещё сильнее будит в ${you.name} зверя.`,
        );
        await era.printAndWait(
          ` ${you.name} прижимаешься лицом, губы и языки с подопечной, жидкость бурлит и мешается у вас во ртах. Малышка, которой без жалости лезут в рот, дрожит — и всё равно не сдаётся, тянет мягкий язык и обвивает ${you.name}, этого захватчика.`,
        );
        await era.printAndWait('Кровь кипит. Мозг больше не думает.');
        await era.printAndWait(
          `${teio.teen_sex_title} тонкий язык беспомощно мнут. В глазах от этой жестокости стоят слёзы — капля падает на слипшиеся губы и выдаёт: с ней обошлись жёстче, чем она ждала.`,
        );
        era.println();

        await era.printAndWait('— Невыносимо сладко.');
        await era.printAndWait(
          `${you.name} из глубины груди вырывается сытое рычание.`,
        );
        await era.printAndWait(
          `Всего лишь ${teio.sex_slave_title}, не больше.`,
        );
        await era.printAndWait(
          `Мысль вспыхнула — и у ${you.name} и так почти не осталось 「вида наставника」, теперь его нет вовсе.`,
        );
        await era.printAndWait(
          `Губы сосут в ритме, пьют то, что течёт из щели между плотью и плотью. Пошлое хлюпанье. Всё тело бессильно, ${
            you.name
          } полуобняв, держит в охапке ${teio.teen_sex_title}, и тело вдруг горячее — от стыда, наверное.`,
        );
        await era.printAndWait(`Это ещё сильнее распаляет ${you.name} похоть.`);
        await era.printAndWait(
          `${you.name} всё ещё оккупируешь рот, пока у ${teio.name} не пересохнет во рту. Нет, всё мало.`,
        );
        await era.printAndWait(
          `${
            you.name
          } обвиваешь язык ${teio.teen_sex_title}, тащишь его к себе в рот. Легко кусаешь — жест, которым запирают добычу.`,
        );
        await era.printAndWait(
          `Как ты со мной поступишь. И ${teio.sex}, съёжившись жёстким телом, бросает на ${you.name} немой вопрос.`,
        );
        await era.printAndWait('— Хех.');
        await era.printAndWait('Ещё спрашиваешь?');
        await era.printAndWait(
          `Порыв не остановится. И не может. Будто для последнего штриха ${you.name} вязко проводит кончиком по изнанке языка ${teio.name} — по этой тонкой нежной земле.`,
        );
        era.println();

        await teio.say_and_wait(`— нн-ах!`);
        era.println();

        await era.printAndWait(
          `и это тайное место тоже разграблено — ${teio.teen_sex_title} теряет голову: ${
            teio.sex
          } не знает, куда деться, тело само рвётся прочь, но ${
            you.name
          } сжимает руки: не смей сопротивляться, ${
            teio.sex
          } затихает… в глазах страх, растерянность — и всё равно не до них.`,
        );
        await era.printAndWait(
          'подопечная, обычно упрямая и дуется по-детски, теперь сжалась в нежный комок — тронь, и лопнет.',
        );
        era.println();

        await you.say_and_wait('и у тебя бывает такой взгляд!', true);
        era.println();

        await era.printAndWait(
          `внутренний голос: так силой взять ${teio.uma_sex_title} — и ${
            you.name
          } пьянеет без удержу. ${
            you.name
          } без удержу сосу во рту то, что уже только твоё — ${teio.sex} отдаёт жидкости — ты выжимаешь, грабишь.`,
        );
        await you.say_and_wait('это ты. из-за тебя мы стали такими.', true);
        await you.say_and_wait(
          'твоя блажь и моя поблажка довели до этого дна.',
          true,
        );
        await you.say_and_wait('так что я заберу плату.', true);
        await era.printAndWait(
          `${teio.name} слабо гладит по спине ${you.name} . только кончики пальцев, без сопротивления, молят пощады.`,
        );
        await era.printAndWait('не обращаешь внимания.');
        await era.printAndWait(
          `вдруг ${teio.teen_sex_title} трясёт насквозь. Кожа сразу жжётся, как в жару.`,
        );
        await era.printAndWait(
          `всё это — реакция, что ${you.name} насильно выжал руками.`,
        );
        await era.printAndWait(`…кончила, да?`);
        await era.printAndWait(
          `это совсем пошлое слово тихо звучит у ${you.name} в груди.`,
        );
        await era.printAndWait(`дальше. ещё далеко не сыт.`);
        await era.printAndWait(
          `${teio.name} тоже наверняка так думает. Одежду ещё не всю сняли, а уже стоп — это точно не то, чего ${teio.sex} хочет.`,
        );
        await era.printAndWait(
          `${teio.sex} уже говорила: хочу, чтобы ${you.name} сделал так. ${
            you.name
          } сейчас делает не чтобы насытить похоть или выплеснуть злость — просто по воле ${teio.teen_sex_title}.`,
        );
        await era.printAndWait('раз так — к следующему.');
        await era.printAndWait(
          `${teio.teen_sex_title} — взгляд плывёт, не собрать. ${you.name} под взглядом ${
            teio.sex
          } тянет руки к одежде ${teio.sex}.`,
        );
        await era.printAndWait(
          `${teio.teen_sex_title} — тело уже жжётся, как в те дни.`,
        );
        await you.say_and_wait(
          `${teio.name}— ты и правда такая женщина!`,
          true,
        );
        await era.printAndWait(
          `в голове одна чернота, ${you.name} скалит рот, трогает кожу — ${teio.sex}. Язык. Поцелуй в шею — ${teio.sex} не отстраняется. Сосёшь пот. Дальше лижешь кожу, сосёшь нежное мясо — оставляешь уродливый след.`,
        );
        era.println();
        await teio.say_and_wait('аа…');
        era.println();
        await era.printAndWait(
          `снова маленькая добыча, ${teio.teen_sex_title} стонет, ни во сне ни наяву.`,
        );
        await era.printAndWait(
          `в обычные дни такая гордая и упрямая, на дорожке летит конём — и всего лишь такая ${teio.phy_sex_title}!`,
        );
        await era.printAndWait(
          `мелочь, из-за которой ${you.name} хлебнул горя, теперь сладкий нежный ягнёнок на жертву — прямо перед ${you.name} !`,
        );
        await era.printAndWait(
          `даже если ${you.name} не удержал этот гадкий угол души… разве ${teio.sex} тут ни капли не виновата?! Тень бывает там, где светит солнце — разве это не правда?!`,
        );
        await era.printAndWait(
          `${you.name} руками бродит по белоснежной коже. Накрывает не особенно большую грудь.`,
        );
        await era.printAndWait(
          'ладонь сверху, легко дразнит. Подушечками — по розовым горошинам.',
        );
        await era.printAndWait(
          `${teio.teen_sex_title} будто невтерпёж, крутит телом. Это точно соблазн для ${
            you.name
          }. ${you.name} думает, обходит рану ${teio.teen_sex_title}, трётся о ещё не выросшую задницу ${
            teio.sex
          }, потом руки на другое, сильнее. Без предупреждения жестоко мнёт ещё жёсткие холмики.`,
        );
        era.println();
        await teio.say_and_wait('ай…');
        era.println();
        await era.printAndWait(
          `${teio.name} тихо вскрикивает. Это естественно. ${teio.name} — тело ещё не умеет принимать такое.`,
        );
        await era.printAndWait(
          `${you.name} знает — и всё равно. Именно этой боли и хочет, поэтому так.`,
        );
        await era.printAndWait(
          `поэтому и дальше. Наотмашь грубо мнёт ей второе тайное место — ${teio.teen_sex_title} в похоти, на груди будто масло, а размер ${
            teio.sex
          } — в самый раз, как яичница-глазунья в точку, так и тянет.`,
        );
        await era.printAndWait(
          `${you.name} переносит губы на другой холмик, сосёт — снова пошлый след.`,
        );
        await era.printAndWait(
          `${teio.name} смотрит жалостно на ${you.name}. В тот же миг кровь ударила.`,
        );
        await era.printAndWait(
          `тёмная сторона перед тем, кто не сопротивляется — ${teio.teen_sex_title} — на полную.`,
        );
        await era.printAndWait(
          `н-да, точно ${teio.sex} нарочно дразнит жар ${you.name} . Идеальная маленькая самка.`,
        );
        await era.printAndWait('тогда… к делу.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async we_95_17_h_sex_end(teio, you) {
    era.printButton('「прости」', 1);
    await era.input();

    await teio.say_and_wait('нн—!');
    era.println();
    await era.printAndWait(
      `в итоге ${you.name} не сдержался целых четыре часа — уже чересчур.`,
    );
    await era.printAndWait(
      `среди ${
        you.name
      } бесконечных извинений и обещаний маленькая ${teio.uma_sex_title} всё-таки приняла извинение ${
        you.name
      } и легла спать.`,
    );
    await era.printAndWait(
      `${you.name} тоже умылся и лёг спать не раздеваясь.`,
    );
    await era.printAndWait(
      `как только глаза закрылись — будто что-то придвинулось и прильнуло к ${you.name} .`,
    );
  },
  ws_95_19_h: (() => {
    const title = 'Переговоры';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {boolean} abandon_disabled 是否已与帝王发生关系，若有则无法抛弃
     */
    const f = async (teio, you, abandon_disabled) => {
      await you.say_and_wait('Что на этот раз…');
      await era.printAndWait(
        `${you.name} смотрит на незнакомую комнату, мешкает, но всё же стучит. Дверь открывается сразу. ${you.name} входит.`,
      );
      era.println();
      await era.printAndWait(
        `Тогда, после Tenno Sho (Spring), ${you.name} вызвали на отдельную встречу с руководством академии и велели ${
          you.name
        } сходить за советом к заслуженной наставнице, давно отошедшей от дел. В цеху её знают все, она вырастила бессчётное число ${teio.uma_sex_title}, и когда ${
          you.name
        } сам ещё учился, ему выпало счастье целый семестр быть её студентом. ${
          you.name
        } не имел причин отказываться и потому пришёл сюда сегодня.`,
      );
      era.println();
      await era.printAndWait(
        `Женщина средних лет чинно сидит на стуле и ждёт — ждёт ${you.name}. На столе какие-то бумаги. ${you.name} кланяется, садится и мимоходом окидывает стол взглядом: так и есть, бланки о договорных отношениях.`,
      );
      era.println();
      await era.printAndWait(
        `Женщина средних лет 「Так ты и есть ${you.actual_name}? Я тебя помню. Смотри-ка, стал тренером не из последних.」`,
      );
      era.println();
      await era.printAndWait(`${you.name} кивает — вот и весь ответ.`);
      era.println();
      await era.printAndWait(
        `Женщина средних лет 「Я здесь по поручению академии: поговорить о тебе и о твоей подопечной, о той ${teio.uma_sex_title} ${
          teio.name
        }.」`,
      );
      era.println();
      await era.printAndWait(
        `Услышав, как назвали ${teio.sex}, ${you.name}, хоть и готовился, всё же чувствует, как ёкнуло внутри. Значит, всё-таки началось, — думает ${you.name}.`,
      );
      era.println();
      await era.printAndWait(
        `Женщина средних лет 「Давай без обиняков. К сегодняшнему поражению привело то, что ты пошёл навстречу желанию своей ${teio.uma_sex_title}, верно? Вины на тебе нет. И по правде, у тренера довольно случаев добиться своего: одно неудачное воспитание — и ты вполне можешь расторгнуть договор и подписать новый, с другой ${teio.uma_sex_title}. Сегодня я предлагаю тебе такой выбор: расторгни договор с нынешней подопечной. Обещаю, что после этого ты сможешь заключить договор с другими славными детьми, и обещаю, что твоей прежней подопечной мы обеспечим самый лучший уход.」`,
      );
      await era.printAndWait(
        `Хоть ${you.name} и готовил себя к тому, что услышит нечто подобное, он всё же оторопел.`,
      );
      era.println();
      await era.printAndWait(
        'Женщина средних лет 「В тебе есть задатки — жаль растратить их здесь, не находишь? Подумай о собственном будущем. Не привязывай себя к одному дереву.」',
      );
      era.println();
      await era.printAndWait(`${you.name} отвечает так —`);
      era.printButton('「Я… согласен с вами.」', 1, {
        disabled: abandon_disabled,
      });
      era.print(
        '【Если выбрать это, ничего уже не вернуть! Убедитесь, что сохранились!】',
        {
          offset: 1,
          width: 23,
          color: buff_colors[3],
        },
      );
      era.printButton('「Нет.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} молча ставит своё имя на бумаге о расторжении, как в тумане улаживает формальности, выходит из комнаты и идёт всё быстрее, и у ${you.name} уже не совладать с чувствами; наконец, под изумлёнными взглядами прохожих, ${you.name} с криком бежит домой, будто спасаясь.`,
        );
        await era.printAndWait(
          `${you.name} так и не нашёл в себе смелости увидеться с ${teio.name}, и ${teio.sex} и ${you.name} — их жизни на этом разошлись.`,
        );
      } else {
        await era.printAndWait(
          `${you.name} слышит, как его собственный голос отдаётся в комнате.`,
        );
        era.println();
        await you.say_and_wait(
          `Вы совершенно правы… у тренера впереди ещё много случаев. Ради собственного будущего лучше вовремя отказаться от неудавшейся подопечной и выбрать другую — не ${teio.sex}, а кого-то ещё…`,
        );
        era.println();
        await era.printAndWait(
          `Женщина средних лет чинно сидит на стуле и, прищурившись, слушает ответ — ответ, который даёт ${you.name}.`,
        );
        era.println();
        await you.say_and_wait(
          'Я понимаю: упрямо держаться за студентку, у которой нет будущего, дурно для нас обоих. И понимаю, на какие уступки приходится идти в профессии.',
        );
        era.println();
        await you.say_and_wait(
          'Но услышать это от вас… да ещё и повторить своими устами… с этим я смириться не могу.',
        );
        era.println();
        era.printButton('「А потому — отказываюсь.」', 1);
        await era.input();
        await you.say_and_wait(
          `Тренерский уклад Трейсена — незаменимая часть того, как растёт ${teio.uma_sex_title}. А задача тренера — отвечать за свою подопечную, за свою ${teio.uma_sex_title}.`,
        );
        era.println();
        era.printButton(
          `Я — тренер, которого выбрала ${teio.name}, и я сделаю то, что должно.`,
          1,
        );
        await era.input();
        await era.printAndWait('Женщина средних лет 「Хороший мальчик.」');
        await era.printAndWait('Женщина средних лет усмехается');
        await era.printAndWait(
          `Она поднимает руку, убирает бумаги со стола, а потом снова улыбается — улыбается ${you.name}.`,
        );
        era.println();
        await era.printAndWait(
          'Женщина средних лет 「Дорога опасная, но ты её выбрал, и это достойно. Держись. Я желаю вам удачи — и помогу, чем смогу.」',
        );
        era.println();
        await era.printAndWait(
          `${you.name} выпровожен из комнаты; в голове ещё туман, но в глубине души у ${you.name} уже утвердилось решение — помочь ${teio.name} исполнить то, о чём мечтает ${teio.sex}.`,
        );
        era.println();
        await era.printAndWait(
          `После этого, неизвестно почему, пересудов про ${you.name} стало заметно меньше, да и Трейсен оказал ${you.name} кое-какую поддержку.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_95_20_h: (() => {
    const title = 'Возвращение';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('Ха-а…');
      era.println();

      await teio.print_and_wait(
        `После тренировки ${you.name} спешно вызвали работники академии, и Тэйо пошла в общежитие одна. И вот ${teio.sex} пересекает внутренний двор — и вдруг останавливается`,
      );
      era.println();

      await teio.print_and_wait(
        `${teio.uma_sex_title} — её взгляд цепляется за полый ствол дерева в углу —`,
      );
      era.println();

      await teio.print_and_wait(
        'В некотором смысле это академическая мусорка, только собирают в неё не мусор, а чувства и слова здешних обитателей.',
      );
      era.println();

      await teio.print_and_wait(
        'Выкрикнуть сюда во весь голос то, что на душе, давно стало обычаем.',
      );
      era.println();

      await teio.say_and_wait('…');
      era.println();

      await teio.print_and_wait(
        `И вот незаметно ${teio.sex} уже стоит перед дуплом.`,
      );
      era.println();

      await teio.say_and_wait(`Я… (хочу всё бросить)`);
      era.println();

      await teio.print_and_wait(
        'Слова уже на языке, но выговорить их оказывается так трудно. Оттого ли, что сказать вслух — значит признать самой? А признать — значит сделать это непоправимой явью?',
      );
      era.println();

      await teio.print_and_wait(
        'Но явь есть явь, и её не отменить тем, что ты не желаешь её принимать.',
      );
      era.println();

      await teio.say_and_wait('Я правда —');
      era.println();

      await era.printAndWait('(?) 「Ты и правда молодец. Досталось тебе.」');
      era.println();

      await teio.say_and_wait('?! Тренер?');
      era.println();

      await era.printAndWait(
        `(?) 「Ты выбрала верно, будь увереннее. Разве ты не довела дело до конца? Разве не пора одуматься и повернуть назад? Ничего страшного, я побуду с тобой.」`,
      );
      era.println();

      await era.printAndWait('(?) 「А дальше мы с тобой всласть —」');
      era.println();

      await teio.say_and_wait('Ты кто такой?!');
      era.println();

      await era.printAndWait('(?) 「Не узнаёшь меня? Тэйо?」');
      era.println();

      await era.printAndWait(
        `(?) 「Вчера, да и в прежние дни, разве я не так же с тобой говорил? Ты сделала уже достаточно — пора отдохнуть.」`,
      );
      era.println();

      await era.printAndWait(
        `(?) 「Хе-хе, ведь ни о чём не жалеешь? Одно твоё слово — и я останусь с тобой, а потом мы —」`,
      );
      era.println();

      await teio.say_and_wait('— Как же ты надоел.');
      era.println();

      await teio.say_and_wait('Никакой ты не мой тренер!');
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title} невольно кричит во весь голос, и морок отступает, но голос не смолкает. В голове снова вскипают слова.`,
      );
      era.println();

      await teio.print_and_wait([
        teio.get_colored_name(),
        `(?) 「Что бы там ни говорили, всё пережитое за эти годы — твоё богатство, и немало людей переменили свою жизнь, увидев, как бежит ${you.name}. ${you.name} давно уже стала легендой!」`,
      ]);
      era.println();

      await teio.say_and_wait(`Да что ты такое несёшь!!`);
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title} сжимает кулаки, дрожит всем телом и кричит изо всех сил`,
      );
      era.println();

      await teio.say_and_wait(
        'Никакой легендой я никогда не была! Я ни одного дела не довела до конца! Тому, о чём я жалею, и счёту нет! И вообще — ни настоящая я, ни тренер такого сказать не могли бы! Ты всего лишь тень жалости к себе, неловкая и убогая! Я не приму такого утешительного оправдания! Всё это попросту страх, что после возвращения не будет никакого результата! А мне плевать! Я хочу бежать дальше! Я хочу подняться в тот зал славы, и там мне будет ещё жарче и радостнее!',
      );
      era.println();

      await you.say_and_wait('Тэйо?');
      era.println();

      await teio.say_and_wait('Ты чего до сих пор — м?');
      era.println();

      era.printButton(
        '「Э-э, мм, я только что вернулся, ничего не видел.」',
        1,
      );
      await era.input();

      await teio.say_and_wait('…Хм.');
      era.println();

      await era.printAndWait(
        `В уголках губ у подопечной — у той, кого опекает ${you.name}, — расцветает улыбка.`,
      );
      era.println();

      await teio.say_and_wait(
        `Даже если ты всё слышал, не беда. Тренер, всё, что я сейчас говорила, — всерьёз. Идём же — дальше.`,
      );
      era.println();

      era.printButton(
        `「Идти рядом с непобедимой Тэйо ${teio.adult_sex_title}, что родилась заново, — большая честь.」`,
        1,
      );
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_h_s: (() => {
    const title = 'Новый подъём';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} сам провожает подопечную на дорожку, желает ${teio.sex} удачи и возвращается на своё место у трибун.`,
      );
      await era.printAndWait('Рядом пусто.');
      await era.printAndWait(
        `${you.name} вздыхает: те болельщики Тэйо, что были на пресс-конференции, так и не пришли.`,
      );
      await era.printAndWait(
        `Впрочем, неважно, — думает ${you.name}, — лишь бы Тэйо смогла исполнить свою мечту. Он отворачивается и снова сосредотачивается на поле.`,
      );
      await era.printAndWait(
        'Вот только идёт всё, кажется, вовсе не так гладко.',
      );
      await era.printAndWait(
        `Сбившаяся в один клубок толпа ${teio.uma_sex_title} бьётся за место, и пробиться сквозь неё Тэйо никак не может.`,
      );
      await era.printAndWait(`${you.name} Ладони у `);
      era.drawLine();
      await era.printAndWait(' сами собой взмокли.');
      await era.printAndWait(
        'Прохожий A 「Какая жалость… тебя опять не взяли.」',
      );
      await era.printAndWait(
        'Болельщик A 「…А-ха-ха, ничего, я ведь и играю паршиво.」',
      );
      await era.printAndWait(
        'Болельщик A (Проклятье… я ведь тоже старался изо всех сил, вставал ни свет ни заря и тренировался!)',
      );
      await era.printAndWait(`——${you.name} торгует мечтой.`);
      era.println();

      await era.printAndWait(
        'Болельщик B 「Опять отчитали… ведь не моя вина, а свалили всё на меня.」',
      );
      await era.printAndWait(
        'Болельщик B 「Ладно… пойду лучше в приставку поиграю, хоть что-то и у меня получается, хе-хе.」',
      );
      await era.printAndWait(
        `——${you.name} торгует мечтой, и всякий держится от неё то ближе, то дальше: признать, что она ему нужна, не хочет, а душой всё равно тянется.`,
      );
      era.println();

      await era.printAndWait('Болельщик A 「…А-а」');
      await era.printAndWait('Болельщик B 「Ничего нет…」');
      await era.printAndWait('— И вот теперь людям как раз и нужна мечта.');
      era.println();

      await era.printAndWait(
        'Болельщик A 「Ладно… посмотрю-ка лучше телевизор… сегодня, кажется, Japan Cup…」',
      );
      await era.printAndWait(
        'Болельщик B 「Проклятье… включу-ка телевизор, погляжу скачки.」',
      );
      await era.printAndWait(
        '— Людям хочется слышать, что всё хорошо: что небо воздаёт за усердие, что старание вознаграждается, что твёрдая вера одолевает беду.',
      );
      era.println();

      await era.printAndWait(
        `Болельщик A 「${teio.name}…… ${teio.sex} правда вышла?」`,
      );
      await era.printAndWait(`Болельщик B 「${teio.sex} и есть…」`);
      await era.printAndWait(
        `——${you.name} — способна ли она написать такую историю?`,
      );
      era.drawLine();
      await era.printAndWait(`??? 「${you.elder_sibling_sex_title}」`);
      era.println();
      await era.printAndWait(
        `${you.name} оборачивается и видит: женщина ведёт за руку смутно знакомую девочку — и они идут к нему, к ${you.name}.`,
      );
      era.println();
      await era.printAndWait(
        `Девочка 「${you.elder_sibling_sex_title}? Помнишь меня?」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name} смотрит и вспоминает: это та самая девочка, которую он встретил, когда ${you.name} впервые столкнулся с Тэйо. Они здороваются, и обе садятся рядом — рядом с ${you.name} — смотреть забег. Девочка вся сияет: неужели впервые здесь?`,
      );
      era.println();
      await era.printAndWait(
        `Девочка 「${
          you.elder_sibling_sex_title
        }, я так давно хотела хоть раз увидеть, как бежит Тэйо ${teio.adult_sex_title}… только всё случая не было, а вот теперь наконец получилось! Я вышла первой в классе, и мама сказала — вот тебе награда, поедем смотреть. Тэйо такая лихая, ${
          teio.sex
        } ведь непременно возьмёт первое место, правда?」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name} смотрит на лицо — на лицо, которым сияет ${teio.sex}, — и невольно улыбается.`,
      );
      era.printButton(`「Да, ${teio.sex} непременно возьмёт.」`, 1);
      await era.input();
      era.drawLine();
      await teio.say_and_wait('Плохо дело…', true);
      await era.printAndWait(
        `Её конёк — идти в голове — здесь не даёт никакого преимущества: толпа ${teio.uma_sex_title} подпирает друг друга, и пробиться немыслимо.`,
      );
      await era.printAndWait('Правда ли… справлюсь ли я.');
      era.println();
      await teio.say_and_wait('Я непременно справлюсь!', true);
      era.println();
      await era.printAndWait(
        `Бегущие ${teio.uma_sex_title} то сходятся, то расходятся, и вот открывается узкая, едва заметная щель шириной всего в полкорпуса —`,
      );
      era.println();
      await era.printAndWait(`Комментатор 「Эй, это же — ${teio.name}?!」`);
      era.println();
      await era.printAndWait(
        'Мышцы голени вдруг отпускают, потом сжимаются — и снова отпускают! Нога взлетает высоко, и, невзирая на поднятую пыль и брызги грязи, — толчок!',
      );
      await era.printAndWait(
        `Тот самый сказочный шаг, каким владеет только ${teio.sex}.`,
      );
      await era.printAndWait(
        `Тот самый танец, каким владеет только ${teio.sex}.`,
      );
      await era.printAndWait('То, чем она являет себя всем, — Поступь Тэйо!');
      era.println();
      await era.printAndWait(
        `Комментатор 「Да разве это возможно — точно видение наяву: ${teio.name} вырвалась вперёд, ${teio.sex} рвётся к первому месту —」`,
      );
      era.println();
      await era.printAndWait('В одно мгновение всё решено.');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_h_s: (() => {
    const title = 'Чудесное возвращение (часть первая)';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      era.printButton('「Готова?」', 1);
      await era.input();

      await teio.say_and_wait('Я хочу… чтобы всё это и вправду стало моим.');
      era.println();

      await teio.say_and_wait(
        'Хочу написать здесь легенду Тэйо — твою, мою и всех, кто нас поддерживает.',
      );
      era.println();

      await teio.say_and_wait(
        'Думаю… это как сон наяву. Но что толку нам с тобой в одних только снах?',
      );
      era.println();
      era.printButton(
        `「Толку никакого (смеётся). И всё же мы дошли до этого дня.」`,
        1,
      );
      await era.input();

      await teio.say_and_wait('Верно. И скоро всё это будет наше.');
      era.println();

      era.printButton(`「Ну вот, по тебе видно — ты готова.」`, 1);
      await era.input();

      await teio.say_and_wait(
        'За этот год мы потеряли всё и только бежали дальше, держась за крупицу надежды и упрямства —',
      );
      era.println();

      era.printButton(
        '「Потому у нас и есть всё необходимое. Какой у нас выбор, кроме как бежать дальше?」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `${teio.teen_sex_title} приподнимает уголки губ, поднимает голову и встречается взглядом с ${you.name} —`,
      );
      if (era.get(`relation:3:0`) > 150) {
        await era.printAndWait(
          `${teio.sex} протягивает обе руки и кладёт в ${you.name} раскрытые ладони, ${
            you.name
          } мягко сжимает руки подопечной, тепло, пальцы чувствуют ${teio.teen_sex_title} здоровую упругую кожу и под ней пульс, чуть чаще.`,
        );
        await era.printAndWait(
          ` ${you.name} смотрит ей в глаза, ясные и прозрачные, как сапфиры. Стойкость, вера, надежда — ими полна ${
            teio.sex
          }, ими держится ${teio.teen_sex_title}; и всё это, преломляясь, отражается в зрачках — в зрачках ${
            you.name
          }. И ${you.name} тоже улыбается, но чувствует, что глаза немного увлажнились.`,
        );
        era.println();

        era.printButton('「Ступай. Пусть твоё имя гремит до небес.」', 1);
        await era.input();

        await teio.say_and_wait('Непременно.');
        era.println();

        await era.printAndWait(
          `Стук шагов отдаётся в маленькой комнате: ${teio.teen_sex_title} лихо разворачивается, машет рукой и твёрдо шагает вперёд.`,
        );
      } else {
        await era.printAndWait(
          `Вы оба, не сговариваясь, протягиваете рабочую руку, слабо сжимаете кулак — и стукаетесь.`,
        );
        await era.printAndWait(
          `Сила, скрытая в маленьком теле, и солнечное тепло передаются через это касание. Вы смотрите друг на друга и невольно смеётесь вслух.`,
        );
        era.println();

        era.printButton('「Пусть удача будет на твоей стороне」', 1);
        await era.input();

        await teio.say_and_wait('Смотри внимательно, как я бегу.');
        await era.printAndWait(
          `${teio.sex} убирает руку, чётко разворачивается и уходит в солнечный свет.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_h_s: (() => {
    const title = 'Чудесное возвращение (часть вторая)';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('Всё получится.');
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.teen_sex_title} обращается в пылающий метеор и бежит по дорожке, до предела растрачивая себя в этом огне.`,
      );
      era.println();

      await teio.say_and_wait('Она может выиграть.');
      era.println();

      await era.printAndWait(
        `${you.name} поднимается с тренерского места, не сводя глаз с той размытой красной тени — с той, кого опекает ${you.name}: она выкладывается вся, выжимая работу из каждого мышечного волокна, лишь бы дойти этот забег до конца.`,
      );
      await era.printAndWait(`Исполнить вашу мечту.`);
      era.println();

      await era.printAndWait(
        `Синее небо, белые облака, красное солнце, свежий ветер — погода лучше не бывает, но ${you.name} совсем не расположен ею любоваться: он весь, без остатка, там, у той маленькой фигурки.`,
      );
      await era.printAndWait(`${you.name} Его подопечная, ${teio.name}.`);
      await era.printAndWait(
        `Мир будто отдаляется — отдаляется от глаз ${you.name} — и снова сходится в одной точке, и точка эта — ${teio.sex}. Все звуки мутнеют, как помехи, — постойте.`,
      );
      era.println();

      await era.printAndWait(`Комментатор 「— ${teio.name}, кажется, —」`);
      era.println();

      await era.printAndWait('Что-то не так.');
      era.println();

      await era.printAndWait(
        `${you.name} вцепляется в перила, подаётся вперёд и кричит изо всех сил.`,
      );
      era.println();

      await era.printAndWait(
        `Комментатор 「— теряет ход! Неужели старая травма ноги —」`,
      );
      era.println();

      await teio.say_and_wait('Ха… ха…');
      era.println();

      await teio.say_and_wait('Тело… не слушается', true);
      era.println();

      await teio.say_and_wait('Вдох — выдох — воздуха не хватает', true);
      era.println();

      await teio.say_and_wait('Рёбра, лёгкие, сердце… как в огне.', true);
      era.println();

      await teio.say_and_wait('Рук и ног… не чувствую', true);
      era.println();

      era.printButton('「— Тэ — йо —」', 1);
      await era.input();

      await teio.say_and_wait('Кто это…', true);
      era.println();

      await teio.say_and_wait(
        'Голос… взгляд… всё мутно… ничего не вспомнить, так и упасть…',
        true,
      );
      era.println();

      await era.printAndWait('Корпус клонится вперёд, голова падает вниз.');
      era.println();

      await era.printAndWait('Нет, постойте.');
      await era.printAndWait('Не таким должен быть конец.');
      era.println();

      await teio.say_and_wait('Неправильно', true);
      era.println();

      await teio.say_and_wait('Что же я делаю —', true);
      era.println();

      era.printButton(`「${teio.name}!!!」`, 1);
      await era.input();

      await teio.say_and_wait('А-а…');
      era.println();

      await era.printAndWait(`Комментатор 「— Ох! ${teio.name} нагоняет?」`);
      era.println();

      await teio.say_and_wait('Кажется, я вспомнила.');
      era.println();

      await era.printAndWait(
        `Тяжёлые ноги, горящие лёгкие, ноющие руки — боль вернулась в тело, в тело той ${
          teio.name
        }, которую зовут ${teio.uma_sex_title}.`,
      );
      await era.printAndWait('Но вместе с ней вернулись и злость, и вера.');
      era.println();

      await teio.say_and_wait('Я вспомнила!');
      era.println();

      await era.printAndWait(
        `Стопы касаются земли, трение, отдача от толчка гонит вперёд измученное болью тело; корпус кренится, чтобы взять всё ускорение, какое даёт этот наклон, —`,
      );
      era.println();

      await era.printAndWait(
        `Комментатор 「Сейчас первая — постойте, это же, ${teio.name} рвётся вперёд! Это ${teio.name}!」`,
      );
      era.println();

      await teio.say_and_wait('Дышать больно', true);
      era.println();

      await teio.say_and_wait('Но пусть лёгкие лопнут — не беда', true);
      era.println();

      await teio.say_and_wait('Шаг тяжёл, но идти ещё могу', true);
      era.println();

      await teio.say_and_wait('Я… столько раз уже спотыкалась', true);
      era.println();

      await teio.say_and_wait('И в тот раз… и в тот тоже', true);
      era.println();

      await teio.say_and_wait('Больше всех спотыкалась я', true);
      era.println();

      await teio.say_and_wait('Больше всех не могла смириться я', true);
      era.println();

      await teio.say_and_wait('Больше всех хотела выиграть я', true);
      era.println();

      await teio.say_and_wait('Ни за что не уступлю', true);
      era.println();

      await teio.say_and_wait('Это буду, это буду', true);
      era.println();

      await teio.say_and_wait('Это буду я!', true);
      era.println();

      await teio.say_and_wait('Вперёд', true);
      era.println();

      await teio.say_and_wait('Вперёд', true);
      era.println();

      await teio.say_and_wait('Вперёд, лети', true);
      era.println();

      await teio.say_and_wait('Решим, кто сильнее!', true);
      era.println();

      await era.printAndWait(
        `Комментатор 「Это ${teio.name}! ${teio.name} нагоняет! И вот ${teio.sex} всё ближе к лидеру, разрыв тает на глазах!」`,
      );
      era.println();

      await era.printAndWait('Осталось меньше 200 метров');
      era.println();

      await era.printAndWait(
        `Комментатор 「Сможет ли догнать ${teio.name}, вернувшаяся на дорожку после года перерыва? Вот ${
          teio.sex
        } обходит — нет, другие ${teio.uma_sex_title} липнут вплотную — липнут к ней, ${
          teio.sex
        } идёт из последних сил, нагоняя ${teio.name}!」`,
      );
      era.println();

      await era.printAndWait(
        `Комментатор 「${teio.name} рвётся вперёд изо всех сил! А соперница не уступает ни пяди — всего корпус разницы!」`,
      );
      era.println();

      await era.printAndWait(
        `Комментатор 「Ещё чуть-чуть, ещё чуть-чуть! А ${teio.name} никак не может подойти ближе!」`,
      );
      era.println();

      await era.printAndWait(
        'Комментатор 「Вот она, сила рекордсменки Kikuka Sho, — не уступает!」',
      );
      era.println();

      await era.printAndWait(
        `Комментатор 「Но — ${teio.name} подходит! Тэйо, вернувшаяся на дорожку, сокращает и сокращает разрыв!」`,
      );
      era.println();

      await era.printAndWait('100 метров\nПоследняя схватка');
      era.println();

      await era.printAndWait(
        `Комментатор 「Неужели уже вровень с лидером? ${teio.name}! Кто же взойдёт на трон — новая владычица или низложенная государыня былых дней —」`,
      );
      era.println();

      await era.printAndWait(
        'Всё поле будто содрогается. Ипподром Накаяма — не ждёт ли и он победителя Arima Kinen?',
      );
      era.println();

      await teio.say_and_wait('А-а-а-а-а-а-а-а-а-а!');
      era.println();

      await era.printAndWait(`Комментатор 「Это ${teio.name}!」`);
      era.println();

      await era.printAndWait(
        `Комментатор 「${teio.name} вышла вперёд? ${
          teio.name
        } чуть впереди — неужели покажет норов ${teio.uma_sex_title}, что взяла Дерби?!」`,
      );
      era.println();

      await era.printAndWait(
        'Комментатор 「Но перевес крошечный, соперница вцепилась намертво!」',
      );
      era.println();

      await era.printAndWait('Комментатор 「Которая же, которая?!」');
      era.println();

      await era.printAndWait(`Скаковая ${teio.uma_sex_title} 「Это я —」`);
      era.println();

      await teio.say_and_wait('— Победа —');
      era.println();

      await era.printAndWait('Алая радуга разрывает финишную черту.');
      era.println();

      await era.printAndWait(
        'На миг весь ипподром будто немеет, а потом обрушивается вал голосов.',
      );
      await era.printAndWait(
        'Крик вскипевшей толпы гремит до самого неба, и в нём звучит одно имя.',
      );
      era.println();

      await era.printAndWait(`Зритель 「${teio.name}!」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 1 / 3),
        fontSize: '1.125rem',
      });
      await era.printAndWait(`Зритель 「${teio.name}!!」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 2 / 3),
        fontSize: '1.25rem',
      });
      await era.printAndWait(`Зритель 「${teio.name}!!!」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.375rem',
      });
      era.println();

      await era.printAndWait(
        `Комментатор 「${teio.name} — чудесное возвращение!」`,
        {
          align: 'center',
          color: teio.color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
    };
    f.title = title;
    return f;
  })(),
  we_143_5_h: (() => {
    const title = 'Свет за поворотом';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        ` ${you.name} идёт по дороге, чуть влажная рубашка липнет к ${you.name} .`,
      );
      await era.printAndWait(
        `чуть впереди подопечная ${you.name} — Токай Тэйо, и ${teio.sex} держит ${
          you.name
        } за руку, шагом для ${teio.uma_sex_title} чуть медленнее, но как раз чтобы нагрузить ${
          you.name
        } скоростью. Ладони вместе, иногда слегка качаются. Закатный свет на лбу, ${
          you.name
        } ступает по мраморной дорожке, смотрит вперёд — бледно-золотые пятна мелькают на белой чёлке ${
          teio.sex
        }.`,
      );
      await era.printAndWait(
        `у лестницы ${teio.sex} останавливается перевести дух, ${you.name} тоже стоит и смотрит на то, что впереди.`,
      );
      await era.printAndWait(
        'На закате земля берёт последний свет уходящего солнца и укутывается им, будто накинула ткань, и по её неровной поверхности бегут крупицы золотых нитей. Снега, чтобы отражать свет, нет — есть только проклюнувшиеся зелёные ростки, что жадно тянут из него силу.',
      );
      await era.printAndWait('Скоро придёт весна.');
      await era.printAndWait(`И ваш сон тоже кончился.`);
      await era.printAndWait('Пора сказать…');
      era.println();

      era.printButton('「Этой минуты ждали слишком долго — мы оба.」', 1);
      await era.input();

      await teio.say_and_wait('Да');
      era.println();

      await teio.say_and_wait(
        'Я помню, как на Tenno Sho (Spring) мне стало страшно — и не от боли и болезни в теле, а от мысли, что то, чего я хотела с самого начала, может навсегда обратиться в пустоту.',
      );
      await teio.say_and_wait('А хуже всего то… что мой страх сбылся.');
      era.println();

      await era.printAndWait(
        `Обернувшись к закатному солнцу, ${teio.teen_sex_title} разводит руки, расправляет плечи и говорит неспешно. Свет падает сверху — и ${
          teio.sex
        } ложится тенью на лицо, на лицо ${you.name}. ${you.name} молчит, а в голове всплывает всё пережитое: как ${
          teio.sex
        } падала на самое дно, как ${teio.sex} терялась, как ${teio.sex} билась о преграды, а ${
          you.name
        } смотрел на это и ничего не мог поделать — только держался за придуманную им самим надежду и стискивал зубы; и рядом с ним была ${
          teio.sex
        }, и вместе они держались дальше.`,
      );
      await era.printAndWait('Не уступать, не сдаваться.');
      era.println();

      await teio.say_and_wait(
        'Но я — мы вместе — выдержали. И теперь рядом со мной ты, и свет, и люди, и мечта.',
      );
      era.println();

      await teio.say_and_wait(
        'Потому что когда-то мы твёрдо верили в одно — и вот оно сбылось.',
      );
      era.println();

      era.printButton('「Тэйо」', 1);
      await era.input();

      await teio.say_and_wait('Что?');
      era.println();

      era.printButton('「Ты… веришь?」', 1);
      await era.input();

      await era.printAndWait(
        `${teio.uma_sex_title} не отвечает сразу — не отвечает ${
          you.name
        }, а склоняет голову навстречу закату, потом легко качает хвостом и, обернувшись, улыбается.`,
      );
      era.println();

      await teio.say_and_wait('Всё это время — верила без тени сомнения.');
      era.println();

      await era.printAndWait(
        `А потом раздаётся её смех, ${teio.sex} смеётся так, что не заслушаться нельзя, и ${you.name} невольно смеётся следом. И вы вдвоём идёте дальше.`,
      );
      await era.printAndWait(
        `История, которая принадлежит вам, ещё продолжится.`,
      );
      era.println();
      if (era.get('talent:3:自信程度') === 1) {
        era.print([
          teio.get_colored_name(),
          ' больше не [сомневается в себе]!',
        ]);
      }
      era.print([
        teio.get_colored_name(),
        ' — её ',
        {
          color: buff_colors[3],
          content: '[травма ноги]',
        },
        ' зажила!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async ws_palace_h(teio) {
    await teio.say_and_wait('Вот он, наш памятный знак —');
  },
  op_rehabilitation: (() => {
    const title = 'Восстановительные тренировки';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `в деревянном чане тёплая вода, ${you.name} берёт голые ступни любимой лошади и медленно опускает в воду.`,
      );
      await era.printAndWait(
        `по точкам: мнёт, щиплет. Ясные белые ноги от стимуляции краснеют, наливаются, ${you.name} ушёл в эту ежедневную работу с головой.`,
      );
      await era.printAndWait(
        'план с врачом, как вернуть Тэйо ноги, каждый день без срыва; сейчас — последний шаг на ночь.',
      );
      await era.printAndWait(
        `глядя на её внешне идеальные ноги, ${teio.teen_sex_title} видишь: снаружи они идеальны, ${
          you.name
        } всё равно сжимается внутри. Рана там, наверное, уже не заживёт.`,
      );
      await era.printAndWait(
        'в конце концов, твои усилия вообще что-то значат — или это просто утешение для вас обоих?',
      );
      era.println();

      await era.printAndWait(
        `${
          you.name
        } вспоминает, как врач с глазу на глаз говорил про таких же больных ${teio.uma_sex_title}, и ${
          teio.couple_title
        } без исключений не встали, ушли в отставку. Тогда Тэйо…`,
      );
      era.println();

      await teio.say_and_wait('тренер.');
      era.println();

      await era.printAndWait(
        `голос тише обычного режет пар и плывёт к ${you.name} .`,
      );
      era.println();

      await teio.say_and_wait(
        `я… знаю, вопрос глупый, но я всё равно хочу, чтобы ${you.name} сам сказал мне… то, что мы делаем сейчас, правда помогает?`,
      );

      era.printButton('опустить голову(выносливость&характер&интеллект+15)', 1);
      era.printButton(
        '「наша вера не останется без ответа.」(скорость&сила+15, расположение+5, настрой↑)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' опускает голову, не хочет или не смеет ответить, только ухаживает за ногами ',
          teio.uma_sex_title,
          '.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  be_dead: (() => {
    const title = 'DEAD ENDING';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} kita 犯人（以北黑的代表色暂定）
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} k_call_t 北部玄驹对东海帝王的称呼
     */
    const f = async (teio, kita, you, k_call_t) => {
      await era.printAndWait(
        '🎶You made one mistake, you got burned at the stake🎶',
        { align: 'center', isParagraph: true },
      );
      await era.printAndWait([
        teio.get_colored_name(),
        ' складывает зонт, крюком на вешалку, заодно снимает шляпу, ',
        teio.sex,
        ' из низа шкафа тащит чемодан, к кровати, садится на него и закидывает ногу.',
      ]);
      await era.printAndWait(
        'шляпу надевает набекрень, закрывает лошадиные уши, перед синими глазами плывёт пыль, свет из окна пробивается и сыплет на них золотом.',
      );
      await era.printAndWait([
        'подперев подбородок, ',
        teio.sex,
        ' смотрит на спящее лицо ',
        you.get_colored_name(),
        ' , свет течёт сквозь ',
        you.get_colored_name(),
        ' ресницы. Взгляд по ритму крыльев носа, чуть белым губам, застёгнутому воротнику.',
      ]);

      await era.printAndWait(
        "🎶You're finished, you're foolish, you failed🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      era.printButton('「с добрым утром.」', 1);
      await era.input();

      await era.printAndWait([
        teio.get_colored_name(),
        ' бросается вперёд и хватает за горло ',
        you.get_colored_name(),
        ' , левым коленом давит ',
        you.get_colored_name(),
        ' правый локоть, правой ногой в грудь, под конец выкручивает большой палец левой руки.',
      ]);
      await era.printAndWait([
        'чуть нагибается, ',
        teio.sex,
        ' таращится на улыбку ',
        you.get_colored_name(),
        ' .',
      ]);
      await you.say_and_wait(
        'н, моя дорогая подопечная хочет поцелуй на доброе утро — кха!',
      );
      era.println();

      await era.printAndWait([
        teio.get_colored_name(),
        ' давит обеими руками, ',
        you.get_colored_name(),
        ' — лицо дёргается всё сразу.',
      ]);

      await era.printAndWait(
        "🎵There's always a hope on this slippery slope🎵",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await you.say_and_wait('ты, ещё не, э-угх, завтракал, да?');
      era.println();

      await era.printAndWait(
        'поднятый угол рта дёргается без остановки, слюна с перегаром.',
      );
      await era.printAndWait([
        teio.get_colored_name(),
        ' щурит глаза, правое колено вниз. ',
        you.get_colored_name(),
        ' руки дёргаются, и левая несколько раз бьёт по её руке — бьёт по тыльной стороне ладони, а сверху всё давит ',
        teio.sex,
        '.',
      ]);
      await era.printAndWait([
        'колотит ещё, уголки рта ползут вниз, кровь обступает ',
        you.get_colored_name(),
        ' глаза.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' закрывает глаза, всхлип, дрожащий указательный медленно пишет S на тыльной стороне руки ',
        teio.get_colored_name(),
        ' .',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        ' клонит голову, ждёт, пока O на тыльной стороне дойдёт до половины, ',
        teio.sex,
        ' отпускает горло. ',
        you.get_colored_name(),
        ' кашляет, обе руки обмякли.',
      ]);
      await you.say_and_wait(
        'кха, кх-кха, господи, завтрак нельзя, э-кха, есть поздно.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' с каждым кашлем в груди ноет.',
      ]);

      await era.printAndWait('🎵Somewhere a ghost of a chance🎵', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait(
        'хм, но ты вроде почти в одиннадцать только встал.',
      );
      era.println();
      await you.say_and_wait(
        'прости! правда прости, не надо было в твоё отсутствие тайком курить и пить.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' только договорил — снова маленькие руки на мясо шеи. ',
        you.get_colored_name(),
        ' ноги дёрнулись, глаза полезли.',
      ]);
      era.println();
      await you.say_and_wait(
        'хорошо-хорошо-хорошо, тьфу, не-не-не! больше не надо! правда больше не надо! фух, я понял.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' глубоко вдыхает и смотрит прямо в ',
        teio.get_colored_name(),
        ' синие зрачки:',
      ]);
      era.println();

      era.printButton('「я виноват, я жалею!」', 1);
      await era.input();

      await era.printAndWait(
        '🎵To get back in that game and burn off your shame🎵',
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        teio.get_colored_name(),
        ' смотрит вниз на лицо ',
        you.get_colored_name(),
        ' , медленно убирает руки, колени сходят с ',
        you.get_colored_name(),
        ' тела. Видит, что большой палец всё ещё выкручен, ',
        you.get_colored_name(),
        ' поднимает бровь и говорит',
      ]);
      era.println();
      await you.say_and_wait(
        'Ты же не заставишь меня одной рукой жарить тебе завтрак, пока ты меня держишь?',
      );
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' отпускает, придерживает шляпу на голове и легко спрыгивает с кровати назад.',
      ]);
      era.println();
      await teio.say_and_wait('Я не голодная.');
      era.println();
      await era.printAndWait([
        teio.sex,
        ' идёт к окну, кривит голову, опирается на тёмную штору. ',
        you.get_colored_name(),
        ' трёт локоть, садится, поджимает губы и говорит',
      ]);
      era.println();
      await you.say_and_wait('Не голодная — тогда это с собой зачем?');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' оборачивается — и видит: ',
        you.get_colored_name(),
        ' в правой ладони лежит завёрнутая булочка. И вот ',
        teio.sex,
        ' поджимает губы, делает шаг вперёд, ',
        you.get_colored_name(),
        ' спешит замахать руками.',
      ]);
      era.println();
      await you.say_and_wait(
        'Расслабься, моя хорошая подопечная. В следующий раз бери — ешь горячим. И если просто хотела поесть со мной… утром ты знаешь, как меня будить.',
      );
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' шарит по карману, заливается и легонько пинает ',
        you.get_colored_name(),
        ' по жопе.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' трёт жопу, открывает шкаф, расстёгивает пижаму, достаёт неброскую клетчатую рубашку и меняет.',
      ]);
      await era.printAndWait([
        teio.sex,
        ' смотрит, как ',
        you.get_colored_name(),
        ' переодевается, и вместе с ',
        you.get_colored_name(),
        ' выходит из комнаты.',
      ]);

      await era.printAndWait('🎶And dance with the big boys again🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        you.get_colored_name(),
        ' одной рукой стелет скатерть, другой ставит тарелку с яичницей и колбасками, раскладывает свои приборы, кладёт салфетку на бедро.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' пьёт свежевыжатый апельсиновый под звук ',
        teio.get_colored_name(),
        ' жевания ест. Потом ',
        you.get_colored_name(),
        ' режет яйцо, накалывает и несёт к ',
        teio.get_colored_name(),
        ' губам.',
      ]);
      era.println();
      await you.say_and_wait('Попробуй, хватит ли вкуса.');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' заглатывает за раз, жуёт и режет кусок мяса, тычет вилкой ',
        you.get_colored_name(),
        ' перед носом. ',
        you.get_colored_name(),
        ' наклоняется, берёт вилку зубами и заворачивает мясо в рот.',
      ]);
      era.println();

      era.printButton('「Нм, ешь больше, на здоровье и рост.」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' под столом носок ',
        teio.uma_sex_title,
        ' легко наступает.',
      ]);

      await era.printAndWait("🎶It's a strange, strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        'Сколько уже прошло с тех пор, как вы узнали друг друга, пошли рядом — и до сейчас? Может, года три–пять, только вам двоим как будто всё равно.',
      ]);
      era.println();
      await era.printAndWait([
        'Всё-таки для вас Трейсен, скачки — всё прошлое уже кончено.',
      ]);
      era.println();
      await era.printAndWait([
        'В жизни вдвоём вы нарочно обходите эти темы — хотя ',
        teio.sex,
        ' к ',
        you.get_colored_name(),
        ' обращение давно сменила на ',
        you.get_colored_actual_name(),
        ', но ',
        you.get_colored_name(),
        ' всё равно по привычке зовёт ',
        teio.sex,
        ' своей подопечной, кажется, ',
        teio.sex,
        ' против этого ничего не имеет.',
      ]);
      era.println();
      await era.printAndWait([
        teio.sex,
        ' после травмы ноги — вы хоть и старались, но не спасли главного: оборвалась ',
        teio.sex,
        ', карьера ',
        teio.uma_sex_title,
        ', — после возвращения сплошные поражения, и снялась как попало.',
      ]);
      await era.printAndWait(
        'Без цветов и оваций, самым тихим способом вышли из всей системы.',
      );
      await era.printAndWait([
        'Чтобы ухаживать за ней — ',
        teio.sex,
        ' (или просто не отпускал её — ',
        teio.sex,
        '), ',
        you.get_colored_name(),
        ' тоже подал(а) на увольнение, и с помощью Трейсена вы вдвоём — ты и ',
        teio.sex,
        ' — устроили в тихой деревне новый дом на двоих.',
      ]);

      await era.printAndWait('🎶Such a shame, shame, shame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('Нн… кажется, только что что-то забыли купить.');
      era.println();
      await era.printAndWait([
        'Поздний завтрак позади, ',
        you.get_colored_name(),
        ' и ',
        teio.sex,
        ' вместе моют посуду на кухне: ',
        teio.sex,
        ' убирает, на цыпочках открывает холодильник — и вдруг такая фраза.',
      ]);
      era.println();
      await you.say_and_wait('А? Тогда потом вместе ещё раз сходим?');
      era.println();
      await teio.say_and_wait('Нн—');
      era.println();
      await era.printAndWait([
        'Вдруг из других комнат шум. Вы смотрите друг на друга, и ',
        teio.sex,
        ' пропадает за дверью. Не проходит и минуты — и снова перед ',
        you.get_colored_name(),
        ' лицом.',
      ]);
      era.println();
      await teio.say_and_wait('В кладовой с потолка течёт, кусок обвалился.');
      era.println();

      era.printButton('「Тогда потом я починю, а ты сходи за покупками.」', 1);
      await era.input();

      await era.printAndWait([
        teio.sex,
        ' мнется, смотрит на ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();

      era.printButton(
        '「Ничего не будет, я сделаю — ты не волнуйся. Тебе до верха не достать, одной мне хватит, разделим работу — как раз управимся.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' бывшая подопечная долго молчит и всё же кивает, согласна с ',
        you.get_colored_name(),
        ' мыслью.',
      ]);
      await era.printAndWait([
        teio.sex,
        ' стоит у двери, ',
        you.get_colored_name(),
        ' в последний раз помогает ей — ',
        teio.sex,
        ' — поправить одежду, спрятать хвост и уши, довольно хлопает в ладоши, потом лёгкий поцелуй, прощание, открывает дверь.',
      ]);
      await era.printAndWait([teio.sex, ' идёт во внешний мир.']);
      await era.printAndWait([
        you.get_colored_name(),
        ' закрывает дверь и из окна смотрит, как уходит ',
        teio.sex,
        ', и силуэт её тает вдали; выдыхает, тянет штору и идёт работать.',
      ]);

      await era.printAndWait('🎶You got to carry the blame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        'Минут через пятнадцать звонок срывает ',
        you.get_colored_name(),
        ' внимание с молотка, гвоздей и доски.',
      ]);
      await era.printAndWait([
        'Сначала ',
        you.get_colored_name(),
        ' не реагирует, но за дверью явно упёртый: трезвон без конца — как ',
        you.get_colored_name(),
        ' на тренировке выносливости. В конце ',
        you.get_colored_name(),
        ' всё же не выдерживает, идёт к двери, в глазок, ',
        you.get_colored_name(),
        ' видит—',
      ]);
      await era.printAndWait('Пара лошадиных ушей.');
      await era.printAndWait(
        'Пара карих, маленьких треугольных лошадиных ушей.',
      );

      await era.printAndWait('🎶In this strange game🎶', {
        align: 'center',
        isParagraph: true,
      });

      await you.say_and_wait(
        ['Маскировку спалили? Что, ', teio.sex, ' так спешила домой?'],
        true,
      );
      await era.printAndWait([
        'В панике ',
        you.get_colored_name(),
        ' сразу дёргает дверь — и следом резкая боль в груди.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' опускает голову и видит: клинок ловко прошёл между рёбрами и сел в сердце.',
      ]);
      era.println();

      await you.say_and_wait('Угх…');

      await era.printAndWait(
        "🎶You're out on a limb and you're trying to gеt in🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        'Алая кровь бьёт фонтаном и уносит ',
        you.get_colored_name(),
        ' жизнь — вместе вытекает из тела. ',
        you.get_colored_name(),
        ' тупо моргает и впускает в зрачок убийцу — будто чуть знакомую ',
        teio.uma_sex_title,
        ' — в зрачок.',
      ]);
      era.println();
      await kita.say_as_unknown_and_wait([
        'Это ты… погубил ',
        k_call_t,
        ' жизнь.',
      ]);
      await kita.say_as_unknown_and_wait([
        'Из своей корысти закрыл глаза: как там ',
        teio.sex,
        ', что у неё с ногами, — тебе было всё равно. Воспользовался слабостью и прикинулся: вот ',
        teio.sex,
        ' и поверила, что ты её единственная душевная опора и всё такое… вот тебе и конец!',
      ]);
      await kita.say_as_unknown_and_wait([
        'Но ',
        k_call_t,
        '… уже слишком тобой ослеплена, ничего не сделает. Только мне, фанату, вызволять кумира! Я этого шанса ждала!',
      ]);

      await era.printAndWait("🎶It's a strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        'Аа, ',
        kita.sex,
        ' вроде с праведным гневом что-то орёт.',
      ]);
      await era.printAndWait([
        'Но ',
        you.get_colored_name(),
        ' уже не обрабатывает эту информацию.',
      ]);
      await you.say_and_wait(
        'Жаль… не успел бросить вино и сигареты, чтобы Тэйо порадовать.',
        true,
      );
      await era.printAndWait([
        'С последним сознанием, ',
        you.get_colored_name(),
        ' падает в густую тьму и закрывает глаза навсегда.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async be_dead_end() {
    await era.printAndWait('Do you want to play this a strange game again?', {
      align: 'center',
      isParagraph: true,
    });
  },
  be_normal: (() => {
    const title = 'Бесплодный конец';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        'Расторгнув договор с ',
        teio.get_colored_name(),
        ', чтобы переждать шумиху, уйти подальше от пересудов и найти покой, ',
        you.get_colored_name(),
        ' покинул Трейсен и начал тренерскую работу заново на новом месте. Однако, неведомо почему, те ',
        you.get_colored_name(),
        ', которых вёл ',
        teio.uma_sex_title,
        ', больше не показывали выдающихся результатов, да и сам ',
        you.get_colored_name(),
        ' — его состояние и умение так и не вернулись к той высоте, что была в паре с ',
        teio.get_colored_name(),
        '… И путь, которым шёл ',
        you.get_colored_name(),
        ', вот так просто и оборвался: мечта, которая была у ',
        you.get_colored_name(),
        ' и у ',
        teio.get_colored_name(),
        ', в конце концов так и не сбылась.',
      ]);
      await era.printAndWait([
        'Чувствуя, будто внутри чего-то не хватает, ',
        you.get_colored_name(),
        ' повторяет изо дня в день одно и то же, работа понемногу становится обузой, и ',
        you.get_colored_name(),
        ' начинает искать бодрости и утешения в табаке и вине. Незаметно ',
        you.get_colored_name(),
        ' забыл то, к чему стремился вначале, растерял всякий запал и без всякого следа дожил вторую половину своей тренерской жизни — жизни ',
        you.get_colored_name(),
        '.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
