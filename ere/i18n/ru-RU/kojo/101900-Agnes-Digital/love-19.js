/**
 * @file 爱丽数码 - 爱慕
 * @author 片手虾好评发售中!
 */
const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

module.exports = {
  shine: (() => {
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait('Ухуху, эхэхэ!');
      await era.printAndWait([
        'В тренировочной ',
        digital.get_colored_name(),
        ' щурит глаза, должно быть, представляет себе ',
        digital.uma_sex_title,
        ', и издаёт смех, от которого кто-нибудь может достать телефон и вызвать полицию, выглядит чрезвычайно довольной.',
      ]);
      await you.say_and_wait('Что такое? Так рада?');
      await digital.say_and_wait(
        'Я думаю, как проводить следующие ивенты поддержки!',
      );
      await era.printAndWait([
        'Затем ',
        digital.get_colored_name(),
        ' вовсю выдала кучу умозаключений, в целом о том, что поддержка может дать ',
        digital.get_colored_name(),
        ' силу, так что поддержка тоже считается тренировкой.',
      ]);
      await era.printAndWait('Нм? Вроде даже звучит логично?');
      await you.say_and_wait('Раз уж так говоришь, тогда я тоже пойду вместе.');
      await era.printAndWait([
        you.get_colored_name(),
        ' решает тоже пойти вместе, заодно можно будет получше узнать ',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait(
        'Э? Попробовать можно... но это очень для хардкорных фанатов, знаешь? Будет тяжело, знаешь?',
      );
      era.drawLine();
      await era.printAndWait([digital.sex, 'Верно сказано.']);
      await digital.say_and_wait(
        'Как же хорошо, что приехали на Скаковую площадку Хансин!! Потрясающий дебютный забег!',
      );
      await digital.say_and_wait([
        'занявшая первое место ',
        digital.uma_sex_title,
        ' -тян, ведь унаследовала у ушедшей в отставку в прошлом году ',
        digital.elder_sibling_sex_title,
        ' волю и с ней дебютировала! Такое чувство преемственности, как же зажигает, вау!',
      ]);
      await era.printAndWait(['Для ', you.get_colored_name(), ', ']);
      await digital.say_and_wait(
        'Двое не уступают друг другу, а прямая на Скаковой площадке Накаяма ведь очень короткая! Вау!',
      );
      await digital.say_and_wait(
        'Ууу... так здорово, конкуренция, что превосходит пригодность и теорию, исходящая из самого сердца, это прекрасно...',
      );
      await era.printAndWait('Хочется за один день, ');
      await digital.say_and_wait(
        'Грунтовая Скаковая дорожка Скаковой площадки Ои, по сравнению с другими Скаковыми дорожками, где в основном мили, это Скаковая дорожка, на которой легче увидеть зрелищное преследование...',
      );
      await digital.say_and_wait([
        'проигнорировавшая эту теорию и решившая выбрать лидирование ',
        digital.sex,
        ', хоть в итоге и проиграла, но радостно улыбнулась',
      ]);
      await era.printAndWait('Обойдя почти все Скаковые площадки Японии, ');
      await digital.say_and_wait([
        'Та вышедшая в этот раз серая ',
        digital.uma_sex_title,
        ', в прошлые разы результаты всё никак не ладились, но ',
        digital.sex,
        ' всё равно стоит там с неукротимым боевым духом!',
      ]);
      await era.printAndWait('Всё же немного... тяжеловато.');
      await digital.say_and_wait([
        'Почувствовал?! ',
        digital.uma_sex_title,
        ' -тян, этот жар! Сияние! Сотрясающее комбо!',
      ]);
      await era.printAndWait('Почувствовал, очень густо, очень мощно!');
      await era.printAndWait(
        'Руки, что махали следом, в какой-то миг потеряли чувствительность, ладони, что хлопали, тоже опухли, а ноги, что бежали, спеша к финишной черте, тоже прошли через муку.',
      );
      await era.printAndWait([
        'Глянув в сторону, ',
        digital.get_colored_name(),
        ', полна энергии, даже не запыхалась, ',
        digital.sex,
        '... не для этого ли рождена?',
      ]);
      await digital.say_and_wait([
        'Э? ',
        callname,
        ' ты что, подустал? М-м, это я не рассчитала, всё-таки слишком тяжело вышло...',
      ]);
      await era.printAndWait(
        'После окончания забега зрители уже давно разошлись, так что можно найти место и присесть.',
      );
      await digital.say_and_wait([
        'И правда, ',
        digital.uma_sex_title,
        ' -тян, тот пыл — это потому, что хотят видеть ',
        digital.couple_title,
        ' такими полными энергии.',
      ]);
      await era.printAndWait([
        'Глядя на то, что осталось после того, как ',
        digital.uma_sex_title,
        ' растерзала ипподром, ',
        digital.get_colored_name(),
        ' произнесла то, что уже давно читалось у неё на лице.',
      ]);
      await era.printAndWait([
        'Взбудоражить атмосферу всей Скаковой площадки, хоть небо перевернуть — вот что такое ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Обе руки увешаны всяким мерчем поддержки, ',
        digital.get_colored_name(),
        ' этот день можно назвать по-настоящему урожайным.',
      ]);
      await digital.say_and_wait([
        'Правда очень рада, не думала, что ',
        callname,
        ' и правда поспел за моим темпом! Тебя уже можно причислить к ядру фанатов! Как и ожидалось от товарища!',
      ]);
      await era.printAndWait([
        'Глядя на невероятно радостную ',
        digital.get_colored_name(),
        ',',
        you.get_colored_name(),
        ' усталость этого дня тоже ушла следом.',
      ]);
      await era.printAndWait(
        'Лишь бы завтра, встав, не ныли поясница и спина.',
      );
    };
    f.title = 'Сияние, ивент поддержки!';
    return f;
  })(),
  univ: (() => {
    const title = 'Понять друг друга во вселенной';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {string} self_call 爱丽数码的自称
     * @param {PrintedSpan} d_call_u 爱丽数码对春乌拉拉的称呼
     */
    const f = async (digital, you, callname, self_call, d_call_u) => {
      await digital.print_and_wait([
        digital.name,
        ', одна, что ради ',
        digital.uma_sex_title,
        ' -тян, существующая в этом мире ',
        digital.uma_sex_title,
        ', сегодня тоже на полную занимается фан-активом!',
      ]);
      await digital.print_and_wait([
        'Эй-я, эй-я, сегодня тоже иду в паломничество по святым местам, чтобы все священные следы, что прежде ',
        digital.uma_sex_title,
        ' -тян сотворили, ещё раз тщательно отполировать!',
      ]);
      await digital.say_and_wait([
        'Охохо, во время паломничества по святым местам для ',
        callname,
        ' захвачу сувенирчиков.',
      ]);
      await you.say_as_unknown_and_wait([
        'Не очень понимаю, но похоже, ты и ',
        callname,
        ' в хороших отношениях, может, сходить вместе с ним?',
      ]);
      await digital.say_and_wait([
        'Что, ты говоришь пойти с ',
        callname,
        ' вместе в паломничество по святым местам? Оо... оооо!',
      ]);
      await digital.print_and_wait([
        'Никогда не представляла себе такой путь, с ',
        callname,
        ' вместе? Паломничество по святым местам!',
      ]);
      await digital.print_and_wait(
        'это ж как в командный сурвайвал взять Беара Гриллса!',
      );
      await digital.say_and_wait('огромное спасибо! сейчас же позову!');
      era.drawLine();
      await era.printAndWait([
        'совсем не ждали, что ',
        digital.get_colored_name(),
        ' сама придёт и позовёт ',
        you.get_colored_name(),
        ' вместе на паломничество по святыням.',
      ]);
      await era.printAndWait([
        'ради своей ',
        digital.uma_sex_title,
        ', как и в прошлый раз, ',
        you.get_colored_name(),
        ' тоже наготове.',
      ]);
      await era.printAndWait([
        'к условленному месту приходят вовремя; ',
        digital.sex,
        ' машет ',
        you.get_colored_name(),
        ' рукой — и видно, какой подъём.',
      ]);
      await era.printAndWait([
        'как всегда, розовая подкладка и серый плащ; по нраву ',
        digital.sex,
        ' ещё вполне могла бы напечатать 「I Love UMA」.',
      ]);
      await digital.say_and_wait([
        'совсем не думала, ',
        callname,
        ', ты и правда придёшь! я уже готовилась, что откажешь...',
      ]);
      await you.say_and_wait('нет-нет-нет, как ни крути, не отказал бы.');
      await digital.say_and_wait(
        'ну, тогда начнём! паломничество по святыням!',
      );
      await era.printAndWait(
        'широко взмахивает и указывает на дорогу к электричке.',
      );
      era.drawLine();
      await era.printAndWait(
        'приходят на самый обычный выпас: за оградой коровки лениво жуют. и это святыня?',
      );
      await digital.say_and_wait([
        'нет-нет-нет, ',
        callname,
        ', нельзя смотреть только на поверхность!',
      ]);
      await era.printAndWait('с напором указывает на... траву?');
      await era.printAndWait(
        'всякий бурьян прёт вовсю — хозяин выпаса, похоже, почти не ухаживает.',
      );
      await you.say_and_wait('кёка суйгэцу? когда это!');
      await digital.say_and_wait('на самом деле я вот на это указывала.');
      await era.printAndWait([
        'и видно: ',
        digital.sex,
        ' поднимает — клевер-четырёхлистник, ещё в росе.',
      ]);
      await digital.say_and_wait([
        'точно! сколько ',
        digital.uma_sex_title,
        ' дарили клевер удачи товарищам, соперникам? бились друг с другом и всё равно желали счастья, уууу—',
      ]);
      await you.say_and_wait(
        'нет-нет-нет, клевер — это же святилище? и обязательно дождь, мокрые тории...',
      );
      await era.printAndWait(
        'с языка срывается память, которой будто не было?',
      );
      await digital.say_and_wait('да ну!');
      await digital.say_and_wait([
        callname,
        'ты так понимаешь! точно! такие святыни надо обсуждать вместе!',
      ]);
      era.drawLine();
      await digital.say_and_wait(
        'тогда следующая станция — вот, на вид обычный парк, а на деле—',
      );
      await digital.say_and_wait('парк, полный силы!');
      await era.printAndWait('си... силы?');
      await digital.say_and_wait([
        'да! бессчётные ',
        digital.uma_sex_title,
        ' здесь собирались, здесь отдыхали, и ещё — вон та песочница!',
      ]);
      await you.say_and_wait(
        'о-о-о? вспомнил: это же песочница, где тренировалась Team Gold?',
      );
      await digital.say_and_wait('точно! это... э? ты сказал...');
      await era.printAndWait('стой, Team Gold — это какая команда?');
      await you.say_and_wait([
        'не, неважно, глянь на ту стойку, ',
        d_call_u,
        ' не ты ли лоток ставил?',
      ]);
      await digital.say_and_wait('о-о-о-о-о!');
      era.drawLine();
      await digital.say_and_wait(
        'вкусно! вкусно! вот он, королевский рамен?! вот это по-королевски!',
      );
      await era.printAndWait(
        'заходят в раменную в глубине переулка: и снаружи, и внутри — сплошное 「скрытый мастер」?',
      );
      await digital.say_and_wait(
        'и порция запредельная! кто одолел такой рамен — тот и есть король!',
      );
      await you.say_and_wait(
        'этот королевский рамен ладно, мне больше любопытно секретное меню...',
      );
      await you.say_as_passer_by_and_wait('хозяин', [
        'о? ',
        you.sex_code === 1 ? ' парень' : 'девушка',
        ', неплохо! так ты знаешь, что у нас ещё и секретное меню!',
      ]);
      await era.printAndWait([
        'хозяин рядом, сито в руках, готовит — слышит и удивлённо бросает вам.',
      ]);
      await digital.say_and_wait(
        'секретное меню? как так? почему я не знала?!',
      );
      await era.printAndWait([
        'ещё миг назад вся в эйфории от победы над королевским раменом ',
        digital.get_colored_name(),
        ', слышит это — и шерсть дыбом.',
      ]);
      era.drawLine();
      await digital.say_and_wait(
        'ияха! плюс та лавка медового напитка только что — все святыни, зачёт!',
      );
      await era.printAndWait(
        'от первого луча на рассвете до проводов заката — день и правда забит.',
      );
      await you.say_and_wait('везде обошли, да.');
      await digital.say_and_wait(
        'ой-ой, такой долгий саппорт — тебе и правда было нелегко, такое рвение достойно почёта!',
      );
      await era.printAndWait('ой-ой, ты ещё и честь отдаёшь.');
      await digital.say_and_wait(
        'и ещё, эхе-хе, так здорово, что всё довели до конца.',
      );
      await digital.say_and_wait(
        'на самом деле сначала хотела, как всегда, одна.',
      );
      await digital.say_and_wait('но...');
      await era.printAndWait([
        'и вот ',
        digital.sex,
        ' вдруг рассказывает: на улице случайно услышала совет прохожей ',
        digital.uma_sex_title,
        ' — позвать ',
        callname,
        ' с собой...',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' от души благодарит эту незнакомую ',
        digital.uma_sex_title,
        ', и потому ',
        you.get_colored_name(),
        ' ещё лучше узнаёт ',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait(
        'А самое счастье — когда и вправду пошли, это было очень! очень весело!',
      );
      await era.printAndWait('Раскидывает руки — и правда так рада.');
      await digital.say_and_wait(
        'Как хорошо, ведь для тебя это драгоценные выходные, да ещё без плана заранее, я уже думала, ты не согласишься...',
      );
      await digital.say_and_wait('Но это и правда великое открытие!');
      await digital.say_and_wait([
        'Я открыла: с ',
        callname,
        ' вместе гоняться за оси, вместе жить оси-кацу — вот это кайф!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' Истинные чувства, что из-за особого хобби раньше почти не показывала, понемногу открывает ',
        you.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait(
        'Я и не думала, что в этой вселенной найдётся кто-то, кто будет со мной на саппорте...',
      );
      await you.say_and_wait('Вселенского масштаба, значит?!');
      await digital.say_and_wait(
        'А-ха-ха, ты же и сам видел: раньше я саппортила одна, а что ты слушаешь мои предельные речи и ещё и чувствуешь то же — мне правда... так радостно',
      );
      await era.printAndWait([
        'Кажется, ',
        digital.get_colored_name(),
        ' глаза так и сверкают.',
      ]);
      await digital.say_and_wait([
        'Я так растрогалась! всё, что сейчас на уме, хочу скорее сказать ',
        callname,
        '!',
      ]);
      await you.say_and_wait('Можно, говори что хочешь.');
      await digital.say_and_wait('Э! правда можно всё?!');
      await digital.say_and_wait(
        'Правда можно? правда можно! договорились, да?!',
      );
      await digital.say_and_wait([
        self_call,
        ' Сейчас начнётся предельная речь!',
      ]);
      await digital.say_and_wait([
        'Едва в первый раз на огромном телеэкране увидела ',
        digital.uma_sex_title,
        ' -тян и сразу поняла такие зажигающие слепящие брызжущие страстью ',
        digital.sex_code === 1 ? ' боги' : 'богини',
        ' — всю жизнь я только к ним и стремилась а потом я рухнула в бездну ой нет не то вознеслась на небеса каждый день молюсь на ',
        digital.uma_sex_title,
        ' -тян, за ',
        digital.couple_title,
        ' саппорт, за ',
        digital.couple_title,
        ' ору, за ',
        digital.couple_title,
        ' рисую додзинси и всем проповедую красу и величие ',
        digital.uma_sex_title,
        ' -тян а потом благодаря редким милостям я наконец в этом пантеоне и могу с каждым ',
        digital.sex_code === 1 ? ' богом' : 'богиней',
        ' быть в одном мире ой нет не то я всего лишь смертная что дышит тем же воздухом но и ',
        digital.couple_title,
        ' меня не гнушается и даже пускает на неприкосновенный трек бежать изо всех сил это же благородные и всё же не гнушающиеся скверны всепринимающие великие ',
        digital.sex_code === 1 ? ' боги' : 'богини',
        ' вот сколько Диджи-тан наговорила а сказать хотела лишь ',
        digital.uma_sex_title,
        ' -тян и правда лучшая!',
      ]);
      await era.printAndWait([
        'Кружит, прыгает, низко рокочет, поёт во весь голос, ',
        digital.get_colored_name(),
        ' выжала всё, на что ',
        digital.sex,
        ' способна за всю жизнь, и выплеснула наружу всё, что хотела сказать.',
      ]);
      await era.printAndWait('Такая чистота — достойно почёта.');
      await digital.say_and_wait(
        'Кхе-кхе-кхе, ха-ха-ха-ха, выговорила... правда... кхе-кхе... до дна, до капли...',
      );
      await era.printAndWait([
        'Дышит как бешеная, грудь ходит ходуном — совсем выдохлась, да, ',
        digital.get_colored_name(),
        ' кашляет-кашляет, спотыкается — и сразу садится на землю.',
      ]);
      await digital.say_and_wait(['Ну как, ', callname, '? хе-хе...']);
      await era.printAndWait([
        'Сидит на земле, ещё и руками опирается, но ',
        digital.sex,
        ' улыбается так радостно.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' тоже садится рядом с ',
        digital.sex,
        ', чтобы поддержать ',
        digital.sex,
        ' и чуть разгрузить ',
        digital.sex,
        ' вес.',
      ]);
      await you.say_and_wait(
        'Очень даже ничего, такую живую предельную речь — даже три богини бы потряслись.',
      );
      await digital.say_and_wait('Хе-хе-хе, вот как...');
      await digital.say_and_wait('И правда, вселенский масштаб...');
    };
    f.title = title;
    return f;
  })(),
  oshi: (() => {
    const title = 'оси';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} palmer 目白善信
     * @param {CharaTalk} helios 大拓太阳神
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} y_call_d 玩家对爱丽数码的称呼
     */
    const f = async (
      digital,
      teio,
      mcqueen,
      opera,
      doto,
      palmer,
      helios,
      taste,
      you,
      callname,
      y_call_d,
    ) => {
      teio.name = 'та, что с виду ребёнок' + teio.uma_sex_title;
      opera.name = 'та, что с виду беспечная' + opera.uma_sex_title;
      doto.name = 'та, что с виду неуклюжая' + doto.uma_sex_title;
      mcqueen.name = 'какая-то сиреневая серая' + mcqueen.uma_sex_title;
      palmer.name = 'какая-то гнедая' + palmer.uma_sex_title;
      helios.name =
        'та, что будто с крашеными синими волосами' + helios.uma_sex_title;
      if (era.get('cflag:0:位置') !== location_enum.beach) {
        await taste.say_and_wait('Гассюку! да, именно, так!');
        await era.printAndWait(
          'Что ни говори, тот ещё председатель: сейчас явно не сезон летних сборов, а вот тебе на.',
        );
      }
      await you.say_and_wait('Гассюку, да? тоже неплохо.');
      await era.printAndWait([
        'Для ',
        digital.uma_sex_title,
        ' это не просто поездка, в программе ещё и тренировки — прямо как летняя домашка.',
      ]);
      await era.printAndWait([
        'К счастью, большинство ',
        digital.uma_sex_title,
        ' обожают тренировки, а у ',
        you.get_colored_name(),
        ' подопечная ',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        ',',
        digital.sex,
        ' тоже не исключение.',
      ]);
      await era.printAndWait([
        'Впрочем, ',
        digital.get_colored_name(),
        ' будто больше наслаждается самим тем, что делает одно дело вместе с осями. Так ',
        digital.sex,
        ' в самом деле любит тренировки как таковые — или нет?',
      ]);
      await era.printAndWait([
        'Пока до места ещё ехать, в голове крутится всякая ерунда; с оборотами колёс золото и лазурь накрывают зелень, ',
        you.get_colored_name(),
        ' прибывает на место сборов.',
      ]);
      await era.printAndWait('Вау, не зря Трейсен: условия ещё ничего так.');
      await era.printAndWait([
        'Глянув по сторонам: повсюду в купальниках ',
        digital.uma_sex_title,
        ',',
        digital.get_colored_name(),
        ' точно канон-умрёт; не говоря уже о тренировках, ',
        digital.sex,
        '… вообще выживет?',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Дан-дан-дан, ',
        digital.get_colored_name(),
        ' появляется в школьном купальнике — том самом, что зовут скусуй: в меру обтягивает, самое удобное для тренировок.',
      ]);
      await era.printAndWait([
        'И вот ',
        digital.sex,
        ' задирает голову, вбирает в себя весь пейзаж и бешено втягивает воздух…',
      ]);
      await digital.say_and_wait(
        'Синее небо… белые облака… веет ветром юности…',
      );
      await digital.say_and_wait([
        'Все здешние ',
        digital.uma_sex_title,
        ' -тян! ах! даже дышать — кощунство…',
      ]);
      await digital.say_and_wait(
        'Так кощунственно — и всё равно не выдержать, вдох…',
      );
      await era.printAndWait([
        'Увидела ',
        you.get_colored_name(),
        ', на полувдохе закашлялась — подавилась.',
      ]);
      await digital.say_and_wait(['Кх-кх-кх, это же ', callname, ' !']);
      await digital.say_and_wait(
        'Ва-ва-ва, давай тренироваться! Я уже давно готова!',
      );
      await era.printAndWait([
        'Широко машет — на вид всё та же ',
        digital.get_colored_name(),
        ', но что-то не так?',
      ]);
      await you.say_and_wait(
        'Редко сюда выбираемся — правда не расслабиться сначала?',
      );
      await era.printAndWait([
        'Как раз мимо — двое явно близких ',
        digital.uma_sex_title,
        ' проходят.',
      ]);
      await palmer.say_and_wait(
        'Ну ты глянь, всё мороженое на лице! И что теперь?',
      );
      await helios.say_and_wait('Эхе, тогда ты мне и вытри!');
      await era.printAndWait([
        'Классика жанра, ',
        digital.get_colored_name(),
        ' косит глазами и расплывается в счастливой улыбке.',
      ]);
      await helios.say_and_wait(
        'Сегодня вечером вроде летний фестиваль, пойдём!',
      );
      await palmer.say_and_wait('Стой, как это вы уже решили?!');
      await era.printAndWait([
        'Погладив живот, говорит «спасибо за угощение» ',
        digital.get_colored_name(),
        ', вдруг как подменили.',
      ]);
      await digital.say_and_wait([
        'Хе-хе… увидела кое-что классное, нет-нет-нет! мм! ',
        callname,
        '! пора на тренировку!',
      ]);
      await era.printAndWait([
        'Стучит себя в грудь, изо всех сил изображая серьёзность, ',
        digital.get_colored_name(),
        ' что такое?',
      ]);
      await era.printAndWait([
        'Глядя, как ',
        digital.sex,
        ' смотрит так серьёзно, ',
        you.get_colored_name(),
        ' и нечего сказать — пора тренироваться.',
      ]);
      era.drawLine();
      await era.printAndWait(
        'Жмёт на секундомер: всё-таки бег по песку — не трава и не грунт, что скорость просела, то нормально.',
      );
      await you.say_and_wait('Отдохни.');
      await era.printAndWait([
        'Протягивает, пусть ',
        digital.sex,
        ' возьмёт воду и полотенце: хоть море кругом и вода везде, пот всё равно вытереть надо.',
      ]);
      await era.printAndWait([
        'Взяв полотенце, ',
        digital.get_colored_name(),
        ' вытирается — и снова косит глазами на пляжное кафе.',
      ]);
      await doto.say_and_wait('П-п-прости! Я на тебя соус капнула!');
      await opera.say_and_wait(
        'Ах, моё сияние от такого не померкнет — напротив, изъян лишь ярче его зажжёт!',
      );
      await era.printAndWait('Ну, колоритная парочка, ещё и знаменитости.');
      await digital.say_and_wait('Врр-врр-врр… ууууу!');
      await era.printAndWait('Звук завода двигателя…?');
      await digital.say_and_wait([
        'А! Тогда, ',
        callname,
        '! я на тренировку, дальше пробежать десять кругов туда-сюда!',
      ]);
      await era.printAndWait('Одной рукой кулак в небо — не перебор?');
      await era.printAndWait('Тогда вот что.');
      await you.say_and_wait(
        'Говорят, сегодня вечером рядом фестиваль — сходим вместе глянуть?',
      );
      await digital.say_and_wait('О…! класс, фестиваль, хорошо-хорошо!');
      await era.printAndWait(['Пусть ', digital.sex, ' немного расслабится.']);
      era.drawLine();
      await era.printAndWait(
        'Фонари, нанизанные сверху вперемежку, красят плитку; лавки по обе стороны дороги в ответ зажигают оранжевый свет.',
      );
      await era.printAndWait([
        'Хоть и приехали на пляжные сборы, немало ',
        digital.uma_sex_title,
        ' привезли и кимоно — и вовсю наслаждаются этим редким фестивалем.',
      ]);
      await digital.say_and_wait([
        'Ой-ой, тогда ',
        callname,
        ', с чего начнём?',
      ]);
      await era.printAndWait(
        'Взгляд скользит: яблоки в карамели, тайяки, шоколадные бананы и прочая еда, ещё эма, маски и сувениры, ну и тиры по шарикам.',
      );
      await era.printAndWait([
        'Глядя, ',
        digital.get_colored_name(),
        ' отмечает одно место.',
      ]);
      await era.printAndWait([
        'Как раз двое ',
        digital.uma_sex_title,
        ' в кимоно ловят золотых рыбок.',
      ]);
      await era.printAndWait(
        'И вот одна из них — проворно смахивает бумажным сачком и сразу вылавливает золотую рыбку, но цена……',
      );
      await teio.say_and_wait(
        'Ха-ха-ха, ловить золотых рыбок — это не воду черпать, глянь, всю одежду промочила!',
      );
      await mcqueen.say_and_wait('Э-э-э?!');
      await digital.say_and_wait('Сс……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' медленно выдыхает, и затем……',
      ]);
      await digital.say_and_wait(
        'Так-так, с какой лавки начнём? Столько хороших прилавков!',
      );
      await era.printAndWait([
        'Если бы как раньше, ',
        digital.sex,
        ' точно с горящими глазами болтала бы без умолку.',
      ]);
      await era.printAndWait('Тогда дальше, наверное……');
      await you.say_and_wait('Есть место, которое я хочу увидеть.');
      era.drawLine();
      await era.printAndWait(
        'Выскальзывают из жаркого фестиваля и приходят на теперь уже тихий берег.',
      );
      await era.printAndWait('Сзади — оранжево-красное, спереди — сине-белое.');
      await era.printAndWait(
        'Смахивает несуществующую пыль и сразу садится на песок.',
      );
      await era.printAndWait(
        'Ночной пляж не назовёшь прохладным: ветер сырой и влажный, прохладу чувствует только попа.',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' смотрит на ',
        you.get_colored_name(),
        ', тоже садится, и вот так неловко смотрят на луну, на море.',
      ]);
      await digital.say_and_wait([
        callname,
        ' хотела просто сесть здесь и смотреть на море?',
      ]);
      await era.printAndWait('Скажи прямее.');
      await you.say_and_wait([y_call_d, ', что-то случилось?']);
      await digital.say_and_wait('Э? Ничего не случилось?');
      await era.printAndWait([
        'Когда это говорит, ',
        digital.get_colored_name(),
        ' виновато, сама не замечая, руками перекрывает сердечную связь.',
      ]);
      await you.say_and_wait('Ты подавляешь то, что сама хочешь сделать?');
      await era.printAndWait('Это же не так?');
      await digital.say_and_wait([
        'Э! Нет, потому что то, что я хочу сегодня, — вместе с ',
        callname,
        ' делать то, что ',
        callname,
        ' хочет делать!',
      ]);
      await you.say_and_wait('……Зачем так?');
      await digital.say_and_wait([
        'Потому что…… ',
        callname,
        ' ведь всегда ходил(а) со мной на support……',
      ]);
      await era.printAndWait([
        'Пока говорит, ',
        digital.get_colored_name(),
        ' клонит голову и мнётся.',
      ]);
      await digital.say_and_wait('И ещё всегда слушал(а) мой бред……');
      await era.printAndWait([
        'Опустив голову, ',
        digital.get_colored_name(),
        ' косит глаза на ',
        you.get_colored_name(),
        ', и лицо красное.',
      ]);
      await digital.say_and_wait(
        'Так support стал ещё интереснее, я и не думала, что каждый день могу быть такой счастливой……',
      );
      await digital.say_and_wait([
        'Уже не вернуться ко временам без ',
        callname,
        ', когда пушила одна!',
      ]);
      await era.printAndWait([
        'Говорит и говорит, ',
        digital.get_colored_name(),
        ' уже руки в боки, будто гордится, что есть ',
        you.get_colored_name(),
        ' — такой товарищ.',
      ]);
      await digital.say_and_wait([
        'То есть ',
        callname,
        ' тоже важное существование!',
      ]);
      await era.printAndWait([
        'Всех ',
        digital.uma_sex_title,
        ' держит у сердца, и ',
        you.get_colored_name(),
        ' тоже держит у сердца.',
      ]);
      await digital.say_and_wait([
        'Столько скаковых ',
        digital.uma_sex_title,
        ' каждый день носятся с пылающими помыслами. ',
      ]);
      await digital.say_and_wait([
        'Этот мир — просто великая ',
        digital.uma_sex_title,
        ' -тян эпоха «канон-смерти»!',
      ]);
      await era.printAndWait([
        'Красиво выбрасывает палец, указывает на ',
        you.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait([
        'Спереди, сзади, слева, справа — повсюду сверкающие ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await digital.say_and_wait(
        'Никогда не знаешь, когда «канон-умрёшь», как на поле боя.',
      );
      await digital.say_and_wait(
        'На этом поле боя бежим вместе: то ловим крит умиления, то делим радость.',
      );
      await digital.say_and_wait('Вот они, боевые товарищи!');
      era.drawLine();
      await digital.say_and_wait(
        'Но не получается ли, что support всегда получаю только я?',
      );
      await digital.say_and_wait(
        'Смириться с этим — не значит ли чуть обнять тьму?',
      );
      await digital.say_and_wait([
        'Поэтому я думаю: я тоже хочу для ',
        callname,
        ' что-то сделать; то, что ',
        callname,
        ' хочет, — я исполню!',
      ]);
      await digital.say_and_wait('Давай-давай! Выложусь на полную!');
      await era.printAndWait([
        digital.get_colored_name(),
        ' не подавляет то, что любит, — и это заставляет ',
        you.get_colored_name(),
        ' расслабиться, и одновременно рад(а), что ',
        digital.sex,
        ' умеет заботиться о ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        digital.sex,
        'Всё время бежит с любовью к ',
        digital.uma_sex_title,
        ', не требующей награды.',
      ]);
      await era.printAndWait([
        'Затем ',
        you.get_colored_name(),
        ' — что хочет сделать?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' именно из желания support-ить этот силуэт и стал(а) ',
        digital.sex,
        ' тренером; хочет именно……',
      ]);
      await you.say_and_wait('Хочу видеть Агнес Диджитал полной энергии.');
      await era.printAndWait([
        'Хочет видеть, как ',
        digital.sex,
        ' выкладывается на support, хочет видеть, как ',
        digital.sex,
        ' на трассе неудержима,',
      ]);
      await era.printAndWait([
        'Хочет видеть, как ',
        digital.sex,
        ' пушит ',
        digital.uma_sex_title,
        ' и «канон-умирает»; хочет видеть, как ',
        digital.sex,
        ' с ',
        you.get_colored_name(),
        ' без умолку говорит о ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Тысяча слов — в одном: хотеть видеть, как ',
        digital.sex,
        ' счастлива.',
      ]);
      await digital.say_and_wait('Видеть меня полной… энергии?');
      await digital.say_and_wait('И к оси у меня те же чувства… те же?');
      await you.say_and_wait('Да.');
      await era.printAndWait([
        'Но ',
        digital.get_colored_name(),
        ' всё ещё очень неуверенна.',
      ]);
      await digital.say_and_wait(
        'Меня…? Ту, что цветку — горшок, солистке — подтанцовка?',
      );
      await digital.say_and_wait('Нет, это… почему? Всё ещё не верится.');
      await digital.say_and_wait(
        'И… у, немного радостно, нет — почётно, или… стыдно?',
      );
      await digital.say_and_wait(
        'Как когда художник выпустил додзин и получил отзыв?',
      );
      await era.printAndWait('И правда очень метко.');
      await digital.say_and_wait('То есть… это—');
      await era.printAndWait([
        digital.get_colored_name(),
        ' стыдливо закрывает лицо руками — это— что такое, забавно.',
      ]);
      await digital.say_and_wait('Э—');
      await digital.say_and_wait(
        'Продолжаю пушить! И больше никаких сомнений!',
      );
      await era.printAndWait('Наконец—');
      await digital.say_and_wait('Буду полной энергии на полную!');
      await era.printAndWait([
        'Это знакомая ',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait([
        'То-то! Скорее впитаем энергию ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await digital.say_and_wait('GOGOGO!');
      await era.printAndWait('Бежим!');
      await era.printAndWait(
        'Синее море красиво, но оранжевые огни всё же лучше подходят празднику.',
      );
      await era.printAndWait([
        'Не на пустой пляж — а с ',
        digital.get_colored_name(),
        ' вовсю прыгать на фестивале!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  49: (() => {
    const title = 'Классика: мокрое тело, но это ты';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} d_call_t 爱丽数码对爱丽速子的称呼
     * @param {PrintedSpan} t_call_d 爱丽速子对爱丽数码的称呼
     */
    const f = async (digital, tachyon, you, callname, d_call_t, t_call_d) => {
      await era.printAndWait(
        'У тренера помимо обычных тренировок есть и прочая мелочь.',
      );
      await era.printAndWait([
        'Хотя сегодня у ',
        digital.uma_sex_title,
        ' выходной, но ',
        you.get_colored_name(),
        ' всё равно пришёл(а) в учебный корпус сдать ',
        digital.uma_sex_title,
        ' предварительные заявки.',
      ]);
      await era.printAndWait([
        'Когда ',
        you.get_colored_name(),
        ' заканчивает дела и выходит из кабинета — за окном уже сеет дождь.',
      ]);
      await era.printAndWait([
        'К счастью, ',
        you.get_colored_name(),
        ' взял(а) зонт.',
      ]);
      await era.printAndWait([
        'Собираясь уходить, ',
        you.get_colored_name(),
        ' замечает розовый силуэт под навесом коридора.',
      ]);
      await era.printAndWait([
        'Это ',
        digital.get_colored_name(),
        ': уши опущены, без сил, без зонта. Классика сцен.',
      ]);
      await era.printAndWait([
        'Но странно: ',
        you.get_colored_name(),
        ' недалеко под дождём видит с зонтом ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait('Не окликнешь Тахион?');
      await digital.say_and_wait(['……Э, ты же понимаешь? ', callname, '?']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' показывает жестами.',
      ]);
      await era.printAndWait([
        'За столько времени ',
        you.get_colored_name(),
        ' уже понимает характер ',
        digital.get_colored_name(),
        ': похоже, ',
        digital.sex,
        ' не хочет мешать ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait('Ок, понял(а). Тогда под одним зонтом со мной?');
      await digital.say_and_wait('Спасибо!');
      await era.printAndWait([
        'Так ',
        you.get_colored_name(),
        ' держит зонт: под ним ',
        you.get_colored_name(),
        ' и ',
        digital.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Дождь усиливается; хуже — ветер, да ещё и непредсказуемый.',
      );
      await era.printAndWait([
        'Дождь будто живой лезет с стороны, противоположной наклону зонта ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' старается не намочить ',
        digital.get_colored_name(),
        ', наклоняя зонт к ',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait([
        callname,
        ', пусть мне самой мокнуть под дождём нехорошо, но твоё тело, как ни крути, всё равно ',
        digital.uma_sex_title,
        ' слабее, да? Если ты простудишься — это уже плохо!',
      ]);
      await era.printAndWait([
        'Видно, что ',
        digital.get_colored_name(),
        ' разозлилась, ушки так и заложило назад.',
      ]);
      await you.say_and_wait('Это... как будто задело.');
      await era.printAndWait([
        'Чтобы разрядить обстановку, вместе с ',
        digital.get_colored_name(),
        ' всю дорогу посмеиваясь «аха-ха», шли дальше.',
      ]);
      await era.printAndWait([
        'Но ',
        you.get_colored_name(),
        ' не отступила и всё равно изо всех сил укрывала ',
        digital.sex,
        '.',
      ]);
      await era.printAndWait([
        'Очевидно, цена упрямства такова: вернувшись в тренировочную, ',
        you.get_colored_name(),
        ' вся промокла, зато ',
        digital.get_colored_name(),
        ' почти не промокла.',
      ]);
      await digital.say_and_wait([
        'Ахаххаха, ',
        callname,
        ', ты мне только не двигайся.',
      ]);
      await era.printAndWait([
        'Не-не-не, тут ',
        you.get_colored_name(),
        ' осознала: хотя подопечной ',
        digital.uma_sex_title,
        ' промокнуть — плохо, но и самой стоять мокрой перед подопечной ',
        digital.uma_sex_title,
        ' тоже как-то неловко.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' взяла полотенце и вытерла капли воды у ',
        you.get_colored_name(),
        ' на голове.',
      ]);
      await era.printAndWait(
        'Сняла одежду, вытерла тело и накрыла сухим полотенцем — лишь временная мера.',
      );
      await you.say_and_wait('Большое спасибо, дальше я сама.');
      await era.printAndWait([
        'Когда так вытирают тело, ',
        you.get_colored_name(),
        ' всё же немного смутилась, ',
      ]);
      await era.printAndWait([
        'В конце концов, ',
        you.get_colored_name(),
        ' всё-таки взрослая. ',
        digital.get_colored_name(),
        ' опустила голову, ',
        you.get_colored_name(),
        ' не видит у ',
        digital.sex,
        ' выражения и судит лишь по ушкам: ',
        digital.sex,
        ' вроде не сердится...',
      ]);
      await era.printAndWait('Нормально ведь?');
      era.drawLine();
      await digital.say_and_wait(
        'Фух, промокнуть под дождём, принять ванну и залезть под одеяло, хорошо поспать — и завтра будет больше сил на стан-актив!',
      );
      await digital.print_and_wait([
        'Соседка по комнате ',
        d_call_t,
        ' вроде всё ещё в лаборатории, хотя как обычно.',
      ]);
      await digital.print_and_wait(
        'Э-э, кажется, дневник так и не написала...',
      );
      await digital.print_and_wait(
        'Ладно, залезу под одеяло, прокручу сегодняшнее стан-актив и подготовлюсь к завтрашнему дню!',
      );
      await digital.print_and_wait([
        'Ага-ага, утром сперва нежилась на траве, по которой бегала ',
        digital.uma_sex_title,
        ' -тян, в полдень в столовой заправилась энергией для стан-актив, а после обеда...',
      ]);
      await digital.print_and_wait([
        'После обеда... это ',
        callname,
        '... э-э это... белая нежная кожа, слегка проступающий пресс, волосы, с которых капает...',
      ]);
      await digital.print_and_wait('Нет-нет-нет, Диджитал, о чём ты думаешь?!');
      await digital.print_and_wait([
        'Похоже, тот тип, что очень нравится ',
        digital.uma_sex_title,
        '...',
      ]);
      await digital.print_and_wait(
        'Нет-нет-нет, Диджитал-тан, давай сперва разберём это имеющимися знаниями. Диджитал-тан, ты же кучу додзинси перечитала и ещё сама немало нарисовала.',
      );
      await digital.print_and_wait('Давай-давай, поищи-ка ответ там!');
      await digital.print_and_wait([
        'Это история, как ',
        callname,
        ' берёт под крыло ',
        digital.uma_sex_title,
        ', а потом раскрывает ',
        digital.sex,
        ' талант, да?!',
      ]);
      await digital.print_and_wait('А дальше что там было?');
      await digital.print_and_wait([
        'Это ',
        digital.uma_sex_title,
        ' -тян замечает...',
      ]);
      await digital.print_and_wait('А потом мастурбирует...');
      await digital.say_and_wait(
        'Нет-нет-нет! Почему я это с этим связала, как ни крути...',
      );
      await tachyon.say_and_wait(['Оя-оя, ', t_call_d, ', ты о чём это?']);
      await digital.say_and_wait('Иии----!');
      await digital.print_and_wait([
        'Похоже, ',
        d_call_t,
        ' вернулась не вовремя.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-first': (() => {
    const title = 'Запись';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, you, callname) => {
      await digital.print_and_wait([
        'Сегодня долгожданные отборочные дебютанток ',
        digital.uma_sex_title,
        ' -тян! Снова восхищаюсь безграничным потенциалом богинь!',
      ]);
      await digital.print_and_wait([
        'А потом... встретила странного человека! То ли «встретила», то ли «странного»... похоже, ',
        you.sex,
        ' тоже фанатка.',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        'И вот сегодня я, Диджитал-тан, наконец решила, бежать по траве или по грунту! Потом чуть-чуть попраздную, но сейчас сначала запишу.',
      );
      await digital.print_and_wait([
        'Тот самый человек, ',
        you.sex,
        ' вдруг выдала идеальный план! Одним словом разбудила спящую.',
      ]);
      await digital.print_and_wait([
        'В итоге я приняла от ',
        you.sex,
        ' приглашение и стала ',
        you.sex,
        ' подопечной ',
        digital.uma_sex_title,
        '.',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        'Правда, вот это сюрприз: не думала, что ',
        callname,
        ' вдруг пойдёт со мной на саппорт!',
      ]);
      await digital.print_and_wait(
        'Раньше мне и в голову не приходило, что найдётся человек, который поспеет за моим темпом!',
      );
      await digital.print_and_wait(
        'А потом мы обошли кучу мест, и если сейчас вспоминать...',
      );
      await digital.print_and_wait([
        'Сейчас-то ясно: к концу ',
        callname,
        ' уже цветом лица не блистала -- совсем вымоталась.',
      ]);
      await digital.print_and_wait([
        'Но даже так ',
        callname,
        ' достойна звания 「товарищ」!',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        'А потом мы обошли кучу мест -- опять, опять, это же паломничество по святыням!...',
      );
      await digital.print_and_wait(
        'То есть ходить туда, где бывали оси, в места, важные и для оси, и копировать то, что оси делали!',
      );
      await digital.print_and_wait([
        'Ёлки-палки, ',
        callname,
        ' вдруг согласилась на моё приглашение и готова вместе со мной тащиться по этим мучениям.',
      ]);
      await digital.print_and_wait(
        'Это же резонанс масштаба Дуврского пролива, вибрация до сердечной травмы!',
      );
      await digital.print_and_wait([
        'И ещё, и ещё: ',
        callname,
        ' столько всего знает! Есть про оси такое, чего я совсем не знала! Все-таки я как DD уже не тяну...',
      ]);
      await digital.print_and_wait([
        'А под конец я обрушила на ',
        callname,
        ' предельный спич! Честно не думала, что во всей вселенной найдётся человек, который согласится слушать мой предельный спич, -- я даже не могла себя сдержать...',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        'Скоро летние сборы, и тогда можно будет увидеть в купальниках ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await digital.print_and_wait([
        'Под лучами солнца ярче самого солнца сияют именно -- ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await digital.print_and_wait('Брызги арбуза -- чьих же это рук дело.');
      await digital.print_and_wait(
        'Сверхбыстрый волейбольный мяч -- кто же его примет.',
      );
      await digital.print_and_wait([
        'И ещё какигори, морепродукты -- всё это ради ',
        digital.uma_sex_title,
        ' -тян, чтобы им было ещё краше!',
      ]);
      await digital.print_and_wait([
        'Тогда и приглашу ',
        callname,
        ' пойти повеселиться вместе!',
      ]);
      await digital.print_and_wait('...ах');
      await digital.print_and_wait([
        '(Сидящая перед блокнотом розовая ',
        digital.teen_sex_title,
        ', остановила ручку)',
      ]);
      await digital.say_and_wait(
        'Я что, всё это время думала только о своём...',
      );
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        'Если положить эгоизм и ',
        digital.uma_sex_title,
        ' на чаши весов и взвесить -- чаша точно качнётся вправо.',
      ]);
      await digital.print_and_wait([
        'А если положить ',
        digital.uma_sex_title,
        ' и ',
        callname,
        ' на чаши весов?',
      ]);
      await digital.print_and_wait(
        'Хоть и трудно признать, но я, Диджитал, судя по тому, как себя веду, этой внутренней чашей всё равно клонюсь влево.',
      );
      await digital.print_and_wait([
        'Поэтому хотя бы завтра, на летних сборах, я для ',
        callname,
        ' сделаю то, что ',
        you.sex,
        ' хочет.',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait('Как же это описать...');
      await digital.print_and_wait(
        'Если честно, даже сейчас вспоминать стыдно...',
      );
      await digital.print_and_wait(
        'Правда, я, Диджи-тан, впервые узнала, что есть человек, который так меня пушит -- и это ещё и тот самый, мой тренер.',
      );
      digital.print('——');
      await digital.print_and_wait(
        'Если честно, с того дня всё стало странно...',
      );
      await digital.print_and_wait([
        'Стоило увидеть ',
        callname,
        ' -- и уже не находила себе места, не знала, что делать.',
      ]);
      await digital.print_and_wait(
        'Я понимаю, в общем-то понимаю, так что... слушать, как колотится сердце, или не обращать внимания на то, что оно говорит?',
      );
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        'Я вынуждена признаться: у меня к ',
        callname,
        ' появились мысли -- да, именно такие, такие любовные.',
      ]);
      await digital.print_and_wait(
        'Если честно, когда так вот вдумаешься -- что-то здесь не так, нет?',
      );
      await digital.print_and_wait([
        'Диджи-тан, ты подумай: вместе с ',
        callname,
        ' ходить на оси-кацу, ',
      ]);
      await digital.print_and_wait(
        'вместе выходить, вместе смотреть кино, вместе гулять по фестивалю, на пляже говорить о чувствах...',
      );
      await digital.print_and_wait('Погодите, это не то?');
      await digital.print_and_wait('Да это же свидания?!');
      await digital.print_and_wait(
        '(Хотя свидание -- это не только в таком смысле.)',
      );
      await digital.print_and_wait([
        'Неужели я на самом деле уже давно с ',
        callname,
        ' встречаюсь, просто забыла об этом?!',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        'Кранты-кранты, вчера не записала, а сегодня вспоминаю -- и понимаю, что всё плохо!',
      );
      await digital.print_and_wait('И что теперь делать...');
      digital.print('……');
      era.println();
      await digital.print_and_wait('Сегодня, ');
      await digital.print_and_wait([
        'опять с ',
        callname,
        ' ходила на паломничество по святыням, и хоть ',
        digital.uma_sex_title,
        ' -тян по-прежнему так сияют, ',
      ]);
      await digital.print_and_wait([
        'но сидя рядом с ',
        callname,
        ', я всё время в смятении украдкой поглядывала на ',
        callname,
        '……',
      ]);
      await digital.print_and_wait([
        'Если сейчас вспомнить, ',
        you.sex,
        ' и правда такая крутая, да и ',
        you.sex,
        ' своим духом заставляет меня восхищаться!',
      ]);
      await digital.print_and_wait('...решила.');
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        'сегодня, в отличие от обычного, я пишу этот дневник утром.',
      );
      await digital.print_and_wait(
        'Диджитал, ты сможешь! э-э, нет, стоп: если так подумать, во мне же нет никакого шарма?',
      );
      await digital.print_and_wait(
        'тощее тело… можно сказать, мелкое… да и в обычной жизни — как самая заурядная…',
      );
      await digital.print_and_wait('нет, ещё больше на извращенку похожа!');
      await digital.print_and_wait([
        'стоит заикнуться про ',
        digital.uma_sex_title,
        ' — и слова рекой, стоит зайти на знакомую тему — темп всё быстрее; это ж не извращенка ли?',
      ]);
      await digital.print_and_wait([
        'нет, кроме ',
        callname,
        ', я правда ни с кем другим уже не смогу встречаться, да?',
      ]);
      await digital.print_and_wait([
        'эх, что повстречала ',
        callname,
        ' — это ж удача на максимум: упустишь — другого такого не будет! больше не найти человека, который так меня понимает и так ко мне добр!',
      ]);
      await digital.print_and_wait(
        'Диджитал, Диджитал, вот сейчас и надо действовать сразу!',
      );
      await digital.print_and_wait(
        'упустишь — и всю оставшуюся жизнь будешь в подушку выть, накрывшись одеялом с головой, да?',
      );
      await digital.print_and_wait([
        callname,
        ' тоже меня любит, да? иначе не пошёл бы со мной на оэн?',
      ]);
      await digital.print_and_wait(
        'хорошо-хорошо-хорошо, шанс совсем не маленький!',
      );
      await digital.print_and_wait('давай-давай-давай, хватит ждать!');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' глянула в телефон: по идее сейчас ',
        digital.get_colored_name(),
        ' уже то время, когда давно начинают тренировку, хотя до официальной ещё рано…',
      ]);
      await era.printAndWait([
        'невольно вспоминает недавнее поведение ',
        digital.get_colored_name(),
        ': после того разговора на пляже ',
        digital.get_colored_name(),
        ' вроде стала всё внимательнее смотреть на ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'похоже, ',
        digital.sex,
        ' кроме оэна ',
        digital.uma_sex_title,
        ' -тян, ещё куча всего на уме.',
      ]);
      await era.printAndWait([
        'пока так думает, ',
        digital.get_colored_name(),
        ' уже бежит сюда издалека.',
      ]);
      await era.printAndWait('м? чего это лицо такое пунцовое?');
      await era.printAndWait(
        'не ушиблась ли, оттого и такая? да и сегодня чуть позже обычного.',
      );
      await you.say_and_wait('Диджитал! стой!');
      await digital.say_and_wait('э?!');
      await era.printAndWait([
        'быстрым шагом подбегает к замершей от удивления ',
        digital.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'присев, внимательно осматривает ноги ',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait(['это… ', callname, '?']);
      await era.printAndWait('м… по крайней мере, красноты и отёка не видно…');
      await you.say_and_wait('ноги не ушибла? в медпункт не сходить?');
      await digital.say_and_wait('э?');
      await era.printAndWait([
        'чёрт, ',
        digital.get_colored_name(),
        ' ещё вроде не поняла; похоже, сначала надо осмотреть.',
      ]);
      await era.printAndWait(
        'сначала колено: левой держит наружный выступ, правой слегка жмёт внутреннюю связку; м, жёсткости нет.',
      );
      await digital.say_and_wait('это, я говорю…');
      await era.printAndWait(
        'потом бедро: и двуглавая, и прямая мышца отлично расслаблены.',
      );
      await digital.say_and_wait('можно сначала… остановиться?');
      await you.say_and_wait('как тут остановиться!');
      await era.printAndWait('дальше голень: икроножные на вид в идеале.');
      await era.printAndWait(
        'остались ступни, но сначала снять обувь: стащить напрямую — если есть травма, точно будет повторный ущерб…',
      );
      await digital.say_and_wait([callname, '! у меня всё в порядке!']);
      await you.say_and_wait('тогда почему сегодня такое странное состояние?');
      await era.printAndWait([
        'всё ещё на корточках, задирает голову и смотрит в лицо ',
        digital.get_colored_name(),
        ': кажется, ещё краснее.',
      ]);
      await digital.say_and_wait(
        'это… сна! сначала в тренировочную, там и объясню!',
      );
      await you.say_and_wait('но…');
      await digital.say_and_wait('……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' лишь молча сверлит взглядом ',
        you.get_colored_name(),
        '.',
      ]);
      era.drawLine();
      await you.say_and_wait('ну, можно объяснять? ноги в порядке, да?');
      await digital.say_and_wait('это… сначала: ноги точно в порядке.');
      await you.say_and_wait('…тогда почему…');
      await era.printAndWait([
        digital.get_colored_name(),
        ' опустила голову, теребит пальцы, слова выталкивает по одному.',
      ]);
      await digital.say_and_wait('на самом деле… я… с тех пор как… э…');
      await era.printAndWait([
        'на полуслове ',
        digital.get_colored_name(),
        ' опять вздыхает.',
      ]);
      await you.say_and_wait('давай я сначала скажу.');
      await you.say_and_wait(
        'тут тоже неудобно говорить, пойдём лучше наружу.',
      );
      await digital.say_and_wait('…а.');
      await era.printAndWait(
        'встают, открывают дверь тренировочной, выходят на поле, поднимаются на трибуну.',
      );
      await era.printAndWait([
        'трасса: утреннее солнце — как раз для усердно тренирующихся ',
        digital.uma_sex_title,
        ' — лучший кофе.',
      ]);
      await digital.say_and_wait(['это, ', callname, '?']);
      await you.say_and_wait('пойдём в следующее место.');
      await digital.say_and_wait('а?');
      await era.printAndWait([digital.get_colored_name(), ' пойдёт следом.']);
      await era.printAndWait(
        'река: под полуденным солнцем вода так сверкает, что глаза режет.',
      );
      await digital.say_and_wait([callname, ', ты что, хочешь...']);
      await era.printAndWait(
        'святилище: после полудня пятна теней как раз укрывают место поклонения.',
      );
      await digital.say_and_wait('……');
      await era.printAndWait(
        'парк: солнце ещё не ушло со смены, а фонари уже заступили на вахту.',
      );
      await digital.say_and_wait('……');
      await era.printAndWait(
        'берег: синее побережье без фонарей освещает лишь луна.',
      );
      await digital.say_and_wait('……');
      await digital.say_and_wait(
        'прошли круг следом — и уже всё равно, как ни поверни.',
      );
      await you.say_and_wait('ну и хорошо.');
      await digital.say_and_wait([callname, '.']);
      await you.say_and_wait('м.');
      await digital.say_and_wait('я тебя люблю.');
      era.print(['в этот миг ', you.get_colored_name(), ' выбирает:']);
      era.printButton('принять', 1);
      era.printButton('отказать', 2);
      const ret = await era.input();
      await digital.print_and_wait([
        'какая неловкость... не думала, что даже признание поведёт ',
        callname,
        '.',
      ]);
      if (ret === 1) {
        await digital.print_and_wait('но получилось.');
        await digital.print_and_wait('да, получилось.');
        await digital.print_and_wait(
          'вообще-то радость должна быть сильнее, но сейчас больше...',
        );
        await digital.print_and_wait('переполняющее счастье.');
      } else {
        await digital.print_and_wait('ха-ха-ха-ха, в итоге всё равно провал.');
        await digital.print_and_wait([
          'но я поняла: мои отношения с ',
          callname,
          ' — это не только роман.',
        ]);
        await digital.print_and_wait('тут куда более сложные чувства...');
        await digital.print_and_wait(
          'думала о многом, хотела много написать, но рука не идёт... дневник весь мокрый...',
        );
        await digital.print_and_wait('всё равно так обидно...');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-after': (() => {
    const title =
      'раз с одного раза не вышло — будет второй! это же естественно!';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     */
    const f = async (digital, you) => {
      await digital.print_and_wait(
        'Диджитал, Диджитал, столько времени прошло, и я наконец выбралась из бездны страданий!',
      );
      await digital.print_and_wait(
        'но если так подумать — точно! всё ещё люблю! люблю так, что сильнее некуда!',
      );
      await digital.print_and_wait(
        'поэтому — ещё раз! в этот раз, Диджитал, у тебя точно получится!',
      );
      era.print(['ещё раз ', you.get_colored_name(), ' выбирает:']);
      era.printButton('принять', 1);
      era.printButton('отказать', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.print_and_wait('уааааа! получилось!');
        await digital.print_and_wait('почему?');
        await digital.print_and_wait('неважно, главное — получилось!');
      } else {
        await digital.print_and_wait('нет, так не годится, да?');
        await digital.print_and_wait('уаааа, нельзя!');
        await digital.print_and_wait('даже я, Диджитал, тоже чего-то хочу!');
        await digital.print_and_wait('я обязательно — возьму!');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-first': (() => {
    const title = 'жить вместе! так ведь и должно было выйти, да?';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} machan 真弓快车
     * @param {CharaTalk} tarumae 北港火山
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} y_call_d 玩家对爱丽数码的称呼
     * @param {string} child 玩家对孩子的称呼（孩子一定是马娘,所以也会受到游戏选项角色性别的影响）
     * @param {string} parent 玩家对孩子的关系
     */
    const f = async (
      digital,
      mcqueen,
      coffee,
      tachyon,
      machan,
      tarumae,
      you,
      callname,
      y_call_d,
      child,
      parent,
    ) => {
      await era.printAndWait(
        'если каждый день, закончив хлопотную работу, возвращаешься домой, чувствуешь запах с кухни и ещё слышишь, как кто-то напевает, — значит, тебя случайно увёз огромный грузовик и стёр память.',
      );
      await era.printAndWait([
        'так с какого вообще момента ',
        y_call_d,
        ' взяла ключ и пришла в дом к ',
        you.get_colored_name(),
        '?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' всё ещё ясно помнит: однажды ночью на пляже ',
        y_call_d,
        ' призналась в любви к ',
        you.get_colored_name(),
        ', и дальше, как само собой разумеется, ',
        y_call_d,
        ' стала девушкой ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'на деле... свидания почти не отличались от обычных дней...',
      );
      await era.printAndWait(
        'всё так же вместе оси-кацу, вместе паломничество по святыням.',
      );
      await era.printAndWait('и дальше?');
      await digital.say_and_wait('нельзя, так ведь вообще нет разницы?!');
      await digital.say_and_wait('это мои прежние догадки были верны...? нет!');
      await era.printAndWait([
        'м... а потом, чтобы что-то изменить, говорят, ',
        y_call_d,
        ' сверилась с какой-то додзинси и одолжила ключ у ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'ключ-то взяла, но первые несколько дней ничего не происходило; подумалось, что это просто вспышка, и дело отодвинули в сторону.',
      );
      await era.printAndWait([
        'так что когда однажды ',
        you.get_colored_name(),
        ', еле волоча усталое тело, с трудом вставила ключ в замок и, пока сознание блуждало, услышала звук помимо скрежета металла, всё же немного удивилась.',
      ]);
      await era.printAndWait([
        'а потом ',
        y_call_d,
        ' стала приходить к ',
        you.get_colored_name(),
        ' домой всё чаще.',
      ]);
      await era.printAndWait(
        'прежний однотонный воздух дома постепенно смешался с другими красками.',
      );
      await era.printAndWait([
        'но больше всего ',
        you.get_colored_name(),
        ' нашла чуть странным и смешным то, что первым комнату ',
        you.get_colored_name(),
        ' заняло...',
      ]);
      await era.printAndWait(['всякие ', digital.uma_sex_title, ' гудзы.']);
      await era.printAndWait([
        'например, ',
        tachyon.get_colored_name(),
        ' — чайные чашки, ',
        coffee.get_colored_name(),
        ' — кофейные чашки, ',
        mcqueen.get_colored_name(),
        ' — коврики для мыши, ',
        machan.get_colored_name(),
        ' — куклы...',
      ]);
      await era.printAndWait([
        'больше всего ',
        you.get_colored_name(),
        ' поразило то, что там была даже кукла Томачопа — маскот Томакомая, родного города ',
        tarumae.get_colored_name(),
        '!',
      ]);
      await era.printAndWait([
        'а ещё однажды дома ',
        y_call_d,
        ' тащит сушилку, чтобы поставить в комнату, и ',
        you.get_colored_name(),
        ' понимает: так дальше нельзя! пора бить наотмашь!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' хотя и есть много самой драгоценной на свете атрибутики ',
        y_call_d,
        ': победные флаги, прототипные куклы и тому подобное... но почти всё либо в тренировочной, либо на официальном хранении.',
      ]);
      await era.printAndWait([
        'пошли-пошли-пошли! в супермаркет, всю атрибутику ',
        y_call_d,
        ' набрать по нескольку штук!',
      ]);
      await era.printAndWait('пусть продавцы сразу привезут к порогу!');
      await era.printAndWait([
        'с удовольствием снова разглядывать ',
        y_call_d,
        ' в разных скачках. потом куклу на диван, куклу на кровать, куклу на компьютер, куклу на телевизор...',
      ]);
      await era.printAndWait([
        'потом давно тайком бережённые работы ',
        y_call_d,
        ' из укромного уголка выставить к дивану...',
      ]);
      await era.printAndWait([
        'хахаха, готово! так хочется увидеть, какое лицо у ',
        y_call_d,
        '!',
      ]);
      await era.printAndWait('однако в итоге —');
      await era.printAndWait([
        'для ',
        y_call_d,
        ' этот удар слишком силён, и ',
        you.get_colored_name(),
        ' может только беспомощно смотреть, как ',
        digital.sex,
        ' всё краснее и краснее и в итоге с глухим стуком валится на пол.',
      ]);
      await era.printAndWait(
        'кроме этих относительно занятных историй, повседневная жизнь на деле куда спокойнее.',
      );
      await era.printAndWait(
        'будничная, как рис с белым паром, что поднимается, едва откроешь рисоварку.',
      );
      await era.printAndWait([
        'поэтому когда у ',
        you.get_colored_name(),
        ' и ',
        y_call_d,
        ' родился ребёнок, помимо радости вдруг приходит осознание: вот оно как давно уже...',
      ]);
      await era.printAndWait([
        'память о том, как обнаружилось, что ',
        digital.sex_code === 1 ? ' сама' : y_call_d,
        ' беременна, тоже лишь туманна и едва уловима, с тёплой струйкой.',
      ]);
      await era.printAndWait([
        'с самого начала ',
        child,
        ' совсем не доставляла хлопот: стоит увидеть ',
        y_call_d,
        ', увидеть всякую ',
        digital.uma_sex_title,
        ' атрибутику — и сразу спокойна, лишь изредка передразнивает ',
        y_call_d,
        ', издавая странные звуки.',
      ]);
      await era.printAndWait([
        child,
        'очень похожа на ',
        y_call_d,
        ',',
        digital.sex,
        'с малых лет очень любит ',
        digital.uma_sex_title,
        ', особенно любит сидеть перед телевизором и смотреть ',
        y_call_d,
        ' Live.',
      ]);
      await era.printAndWait([
        'или скорее это ',
        you.get_colored_name(),
        ', как ',
        parent,
        ', так часто ставит записи ',
        y_call_d,
        '?',
      ]);
      await era.printAndWait([
        'а каждый раз, видя, как ',
        you.get_colored_name(),
        ' и ',
        child,
        ' смотрят записи, ',
        y_call_d,
        ' поначалу вечно превращалась в паровую машину и пряталась в комнате увлажнять воздух, но потом стала прижиматься к ',
        you.get_colored_name(),
        ', обнимая ',
        child,
        ', и смотреть вместе.',
      ]);
      await era.printAndWait([
        'как бы то ни было, ',
        child,
        ' под заботливым уходом выросла здоровой.',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        'выросла так быстро, что в мгновение ока ',
        digital.sex,
        ' уже должна поступать в академию Трейсен.',
      ]);
      await era.printAndWait([
        'с ',
        y_call_d,
        ' посовещались, и ',
        y_call_d,
        ' решила: судя по тому, как ',
        child,
        ' любит ',
        digital.uma_sex_title,
        ', если ',
        digital.sex,
        ' сама пойдёт на церемонию открытия, будет беда.',
      ]);
      await era.printAndWait([
        'но всё же решили, что это ',
        digital.sex,
        ' должна прочувствовать сама.',
      ]);
      await era.printAndWait([
        'но вот, вечером накануне проводов, ',
        y_call_d,
        ' снова перебирает багаж, пытаясь впихнуть ещё больше припасов.',
      ]);
      await era.printAndWait([
        'ведь дом так близко к Трейсен, ведь ',
        you.get_colored_name(),
        ' всё ещё тренер Трейсен, ведь ',
        child,
        ' в любой момент может вас увидеть, но ',
        you.get_colored_name(),
        ' тоже мучается, не хватает ли ещё чего необходимого.',
      ]);
      await era.printAndWait([
        y_call_d,
        ' тоже смеётся: это ж не навек прощаемся.',
      ]);
      await era.printAndWait([
        child,
        'зато ревёт в голос — вас двоих утешать её приходится долго.',
      ]);
      await era.printAndWait([
        'впрочем, завтра всё равно станет сегодня, и сейчас ',
        digital.sex,
        ' должна идти в школу.',
      ]);
      await era.printAndWait(
        'ночной туман ещё не рассеялся, даль горизонта лишь чуть краснеет — даже фонари ещё горят.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' вместе с ',
        y_call_d,
        ' несут вещи, вместе с ',
        child,
        ' спускаются вниз.',
      ]);
      await era.printAndWait([
        'хотя ',
        child,
        ' твёрдо хочет нести сама, но ',
        you.get_colored_name(),
        ' и ',
        y_call_d,
        ' так и не разжимают рук.',
      ]);
      await era.printAndWait([
        'против вас не выстоять, ',
        child,
        ' остаётся только сдаться.',
      ]);
      await era.printAndWait([
        'прямо впереди полоса ',
        digital.uma_sex_title,
        ': по ней мигом до Трейсена, и как ',
        digital.uma_sex_title,
        ', даже такси звать не нужно.',
      ]);
      await era.printAndWait([
        'ставят вещи — немного, но для ',
        you.get_colored_name(),
        ' всё равно тяжело — куда больше, чем у ',
        y_call_d,
        '.',
      ]);
      await era.printAndWait([
        'эх, ночь без сна, ещё и с утра таскать вещи, ',
        you.get_colored_name(),
        ' слегка плывёт.',
      ]);
      await era.printAndWait([
        y_call_d,
        ' заботливо подпирает собой ',
        you.get_colored_name(),
        ', но по тому, как ',
        digital.sex,
        ' смотрит, ',
        you.get_colored_name(),
        ' понимает: ',
        digital.sex,
        ' тоже не выспалась.',
      ]);
      await era.printAndWait([
        'что такое? ',
        you.get_colored_name(),
        ' оглядывается: ',
        child,
        ' где?',
      ]);
      await era.printAndWait(['о-о-о! да вот же, у ', y_call_d, ' сбоку.']);
      await era.printAndWait([
        child,
        'крепко обнимает ',
        y_call_d,
        ', потом так же крепко обнимает ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'почти невесомая: только в крепком объятии чувствуется, что ',
        digital.sex,
        ' здесь; ещё растущая ',
        digital.sex,
        ' и невысокая — почти как ',
        y_call_d,
        '.',
      ]);
      await you.say_as_passer_by_and_wait(child, 'ну, я пошла! пока!');
      await era.printAndWait(['машет рукой, ', child, ' срывается с места.']);
      await era.printAndWait('эй! подожди, вещи-то не взяла!');
      await era.printAndWait([
        'в тревоге хочет, чтобы ',
        y_call_d,
        ' догнала, и вдруг ',
        y_call_d,
        ' просто смотрит вслед ',
        child,
        ' вдаль.',
      ]);
      await era.printAndWait('подожди-ка! что такое?');
      await digital.say_and_wait([
        callname,
        ' а, раз ',
        child,
        ' всё равно в Трейсене, так пусть ',
        digital.sex,
        ' получит вещи на месте: разве не удобно?',
      ]);
      await you.say_and_wait([
        'нет, ',
        y_call_d,
        ',',
        child,
        digital.sex,
        '!',
        digital.sex,
        '……',
      ]);
      await era.printAndWait(
        'как перекрёсток, мимо которого вечно ходишь, лавка, куда вечно заходишь, игра, в которую вечно играешь, — и вдруг: дорогу перекрыли, лавка закрывается, сервер гасят…',
      );
      await era.printAndWait([
        'то чувство абсурда — казалось, навеки так и будет, а оно вдруг пропало — сейчас внезапно заполняет грудь у ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'ещё раз вглядываются — ',
        child,
        ' уже и след простыл.',
      ]);
      await you.say_and_wait([y_call_d, '! это… это что такое! это… почему…']);
      await digital.say_and_wait(
        'говорят: то ли фантазия, то ли болезнь, то ли мистика…',
      );
      await digital.say_and_wait([
        'принято считать: душевная болезнь… как передаётся — неясно, круг лишь ',
        digital.uma_sex_title,
        ' и те, кого они касаются…',
      ]);
      await era.printAndWait(
        'тогда… зачем… создали лишь затем, чтобы разлучить?',
      );
      await era.printAndWait([
        'и вот, ещё в прострации, ',
        you.get_colored_name(),
        ' видит: ',
        y_call_d,
        ' сейчас смотрит в сторону Трейсена и больше ни слова.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' резко понимает: ',
        y_call_d,
        ' и ',
        you.get_colored_name(),
        ' чувствуют одно и то же.',
      ]);
      await era.printAndWait([
        'в будни как тренер всегда поддерживает ',
        y_call_d,
        ' — это ',
        you.get_colored_name(),
        ', а в этот раз ',
        digital.sex,
        ' поддерживает ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        digital.sex,
        'Пытаясь как можно спокойнее сгладить ',
        you.get_colored_name(),
        ' грусть. Обняв сзади ',
        y_call_d,
        ', только тогда обнаружилось, что ',
        y_call_d,
        ' дрожит.',
      ]);
      await era.printAndWait(
        'И без того миниатюрное тело казалось ещё более хрупким.',
      );
      await era.printAndWait(
        'Камень упал в спокойную озёрную гладь и поднял огромные волны.',
      );
      await digital.say_and_wait('...у-у-у...');
      await digital.say_and_wait('Я... я давно должна была это понять...');
      await digital.say_and_wait(
        'На самом деле... я... Диджитал-тан... давно знала...',
      );
      await digital.say_and_wait(
        'Когда... поняла, что память об одном отрезке времени такая мутная и неясная...',
      );
      await digital.say_and_wait(
        'Когда... заметила, что запасы для малыша дома никогда не убывают...',
      );
      await digital.say_and_wait(
        'Когда... наткнулась на старые нарисованные додзинси...',
      );
      await digital.say_and_wait('Вот тогда-то... я уже всё поняла...');
      await digital.say_and_wait([
        'это потому, что я люблю ',
        callname,
        ' слишком сильно... и всё же не решалась... идти ещё глубже...',
      ]);
      await digital.say_and_wait([
        'И ещё... ',
        callname,
        ' тебя это тоже затронуло...',
      ]);
      await digital.say_and_wait([
        'Поэтому-то... ',
        child,
        ' появилась на свет...',
      ]);
      await digital.say_and_wait(['В этом вся ', digital.sex, '...']);
      await era.printAndWait([
        'В ',
        y_call_d,
        ' словах, прерываемых всхлипами, ',
        you.get_colored_name(),
        ' наконец понял, что ',
        child,
        ' — порождение желания ',
        y_call_d,
        '.',
      ]);
      await digital.say_and_wait([
        'Лишь бы... лишь бы мы забыли то, что только что случилось... тогда мы ещё сможем увидеть ',
        child,
        '……',
      ]);
      await digital.say_and_wait([
        'Если... мы запомним, тогда ',
        child,
        '...то... и правда исчезнет...',
      ]);
      await digital.say_and_wait(
        'Хе-хе-хе... по сути, это же выбор — смотреть правде в глаза или нет... разве это не то, что называют душевной болезнью...',
      );
      era.printButton('Запомнить (повысить отношения)', 1);
      era.printButton('Забыть (пока не повышать)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait('Неправда!');
        await you.say_and_wait([
          child,
          digital.sex,
          'Это не плод твоего воображения! ',
          digital.sex,
          ' — символ нашей любви!',
        ]);
        await era.printAndWait([
          'Именно когда двое застыли в нерешительности, это ',
          child,
          ' взяла за руки ',
          y_call_d,
          ' и ',
          you.get_colored_name(),
          '.',
        ]);
        await you.say_and_wait([
          child,
          digital.sex,
          'Напомнило мне: пора, нам нужно стать ещё ближе!',
        ]);
        await era.printAndWait([
          'Развернул ',
          y_call_d,
          ' к себе, и у ',
          y_call_d,
          ' глаза, которые уже почти перестали лить слёзы, снова увлажнились.',
        ]);
        await digital.say_and_wait('Ты хочешь сказать...?');
        await you.say_and_wait([y_call_d, ', давай поженимся.']);
        await digital.say_and_wait(
          'Ха-ха-ха... получается, я и правда дура, что из-за этого переживала...',
        );
        await era.printAndWait([
          y_call_d,
          ' рассмеялась, и капли слёз в глазах обратились в жемчуг — то, что ',
          you.get_colored_name(),
          ' ценит больше всего на свете.',
        ]);
        await era.printAndWait([you.get_colored_name(), ' поцеловал её.']);
        await era.printAndWait('Солёный.');
        await era.printAndWait('Должно быть, это слёзы восторга');
        await era.printAndWait('Горький.');
        await era.printAndWait('Должно быть, это слёзы обиды.');
        await era.printAndWait('...Сладкий.');
        await era.printAndWait('Должно быть... это уже не слёзы.');
        await era.printAndWait(
          'Языки сплелись, тела прижались, пальцы переплелись.',
        );
        await era.printAndWait(['Больше никто не сможет вас разлучить.']);
      } else {
        await era.printAndWait(
          'Всё это было словно кошмар, но на самом деле ничего не произошло.',
        );
        await era.printAndWait([
          'Ваша ',
          child,
          ' благополучно поступила в Трейсен, ',
          you.get_colored_name(),
          ' как ',
          parent,
          ' естественно стал тренером ',
          child,
          '.',
        ]);
        await era.printAndWait([
          y_call_d,
          ' как ',
          digital.sex_code === 1 ? ' отец' : 'мать',
          ', и тоже часто тренируется вместе с ',
          child,
          '.',
        ]);
        await era.printAndWait(
          'Большая и маленькая (хотя большая тоже весьма мала) тренируются вместе — какая редкая картина.',
        );
        await era.printAndWait([
          'Ради ',
          child,
          ' роста, ',
          you.get_colored_name(),
          ' хотел, чтобы ',
          digital.sex,
          ' оставалась ночевать в Трейсен.',
        ]);
        await era.printAndWait([
          'однако ',
          digital.sex,
          ', кажется, всё ещё сильно скучает по родителям; приставаниям не устояли, так что пока пусть ',
          digital.sex,
          ' живёт дома.',
        ]);
        await era.printAndWait([
          'всё вполне обычно, кроме ',
          child,
          ' — вроде тоже чуть похоже на раннюю ',
          y_call_d,
          ' — так же часто отключается, нн… хотя ',
          y_call_d,
          ' сейчас тоже примерно так.',
        ]);
        await era.delay(1000);
        era.println();
        await digital.say_and_wait('……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-after': (() => {
    const title = 'в конце концов — лишь мираж, пузырь сна';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {string} child 玩家对孩子的称呼（孩子一定是马娘,所以也会受到游戏选项角色性别的影响）
     */
    const f = async (digital, you, callname, child) => {
      await you.say_and_wait([
        'уже выходные — может, среди всей этой беготни навестить ',
        child,
        '?',
      ]);
      await you.say_and_wait([
        'как раз у дверей студенческого общежития, думал позвонить ',
        child,
        ', и тут…',
      ]);
      await digital.say_and_wait(['э? ', callname, ', ты что здесь делаешь?']);
      era.printButton(`да что ты, я жду ${child}.`, 1);
      await era.input();
      await era.printAndWait([
        'услышав это, ',
        digital.get_colored_name(),
        ' почему-то опустила голову.',
      ]);
      await digital.say_and_wait(
        ['…п-пора ли… снова сказать ', callname, ' правду…'],
        true,
      );
      await digital.print_and_wait('что мне делать…');
      era.printButton('рассказать (повысить отношения)', 1);
      era.printButton('не рассказывать (пока не повышать)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.say_and_wait(
          'я… я думала, снова сказать — это лишь… слёзы—',
          true,
        );
        await digital.say_and_wait(
          [
            'впрочем, это чувство… когда ',
            callname,
            ' обнимает и делает предложение… и правда так хорошо…',
          ],
          true,
        );
      } else {
        await digital.say_and_wait([
          'ладно, пусть так: каждый день с ',
          callname,
          ' и ',
          child,
          ' — сплошное счастье',
        ]);
        await digital.say_and_wait(
          'я хочу, чтобы такие дни длились и дальше. прости меня.',
          true,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = 'письмо';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} y_call_d 玩家对爱丽数码的称呼
     * @param {string} child 玩家对孩子的称呼（孩子一定是马娘,所以也会受到游戏选项角色性别的影响）
     */
    const f = async (digital, you, callname, y_call_d, child) => {
      await you.say_as_unknown_and_wait(
        'слышь, у Диджитал-сэнсэй новый выпуск скоро в продаже',
      );
      await you.say_as_unknown_and_wait(
        'э? правда? столько времени прошло, наконец-то новый выпуск?',
      );
      await you.say_as_unknown_and_wait(
        'как раз в следующем месяце, на ивенте в Токио!',
      );
      era.println();
      await era.printAndWait('так вот… кто это вообще слух запустил?!');
      await era.printAndWait([
        'не прошло и нескольких дней, как в сети всё вскипело, и теперь все фанаты Диджитал-сэнсэй думают, что ',
        y_call_d,
        ' в следующем месяце выпустит новый выпуск.',
      ]);
      await era.printAndWait([
        'а ',
        y_call_d,
        ', увидев эти твиты, первым делом… устыдилась.',
      ]);
      await digital.say_and_wait(
        'если подумать… я же давно не выпускала ничего нового… а-а-а, правда миллион извинений.',
      );
      await era.printAndWait(
        'опустила голову к экрану, извиняясь перед фанатами по ту сторону.',
      );
      await era.printAndWait([
        'затем ',
        y_call_d,
        ' обернулась, схватила ',
        you.get_colored_name(),
        ' за руку: в глазах блестели слёзы, такое лицо, будто сейчас расплачется.',
      ]);
      await era.printAndWait([
        'эх, опять это, ',
        you.get_colored_name(),
        ' думает.',
      ]);
      await era.printAndWait([
        'это значит, ',
        digital.sex,
        ' уходит в затвор: всю домашнюю работу дальше делает ',
        you.get_colored_name(),
        ', готовку тоже.',
      ]);
      await era.printAndWait(
        'не то чтобы очень тяжело, просто в эти дни будет не хватать…',
      );
      await era.printAndWait([
        'энергии от ',
        y_call_d,
        ', нельзя больше впитывать ',
        y_call_d,
        ', нельзя гладить волосы, нельзя мять ушки, нельзя грызть хвостик…',
      ]);
      await digital.say_and_wait('ну пожалуйста!');
      await you.say_and_wait('я же тебя не первый день знаю.');
      await era.printAndWait(
        'в итоге всё равно согласился. и был ли вообще случай, когда не соглашался?',
      );
      era.drawLine();
      await era.printAndWait([
        'во время уборки сладкая ломота в плечах и спине напоминает ',
        you.get_colored_name(),
        ', что пора потренироваться.',
      ]);
      await era.printAndWait(
        'подмести, помыть пол — сначала думал купить робот-мойщик, но тут же понял: витрины он не достанет.',
      );
      await era.printAndWait([
        'да, у ',
        you.get_colored_name(),
        ' дома самое трудное для уборки — витрины: много витрин, много мерча.',
      ]);
      await era.printAndWait('эх, взять махровку и слегка пройтись — и ладно.');
      await era.printAndWait([
        'вдруг белая фотография притянула взгляд ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'фото, от которого у ',
        you.get_colored_name(),
        ' разлилась теплота, — свадебный снимок ',
        you.get_colored_name(),
        ' и ',
        y_call_d,
        '.',
      ]);
      await era.printAndWait([
        'белоснежный ',
        digital.sex_code === 1 ? ' костюм' : 'свадебный наряд',
        ' украшает розовую ',
        digital.uma_sex_title,
        ', на макушке красный бант по-прежнему заявляет о себе, изящная шея, руки, что будят желание беречь, и ещё те полные слёз серо-голубые глаза.',
      ]);
      await era.printAndWait([
        'хотя кажется, прошло совсем мало, в воспоминаниях ',
        digital.sex_code === 1 ? ' костюм' : 'свадебное платье',
        ' на ',
        y_call_d,
        ' всё ещё перед глазами, и всё же будто прошли годы.',
      ]);
      await era.printAndWait([
        'как ни крути, глядя на эту свадебную фотографию, ',
        you.get_colored_name(),
        ' здорово подзарядилась.',
      ]);
      await era.printAndWait(
        'тогда уж почистить вещи, что несут важные воспоминания.',
      );
      await era.printAndWait([
        'толкает дверь в коллекционную: внутри несколько огромных полностью прозрачных витрин, забитых всяким ',
        digital.uma_sex_title,
        ' мерчем.',
      ]);
      await era.printAndWait([
        'эта комната сначала была гостевой, потом, потому что ',
        y_call_d,
        ' насобирала столько, что одним витринам в гостиной места не хватило, и одну комнату всё же освободили под весь этот мерч.',
      ]);
      await era.printAndWait([
        'кстати, ',
        you.get_colored_name(),
        ' раньше собирала ',
        y_call_d,
        ' мерч — он в самой дальней витрине.',
      ]);
      await era.printAndWait([
        'эх, раньше ',
        digital.sex,
        ' так упиралась, твердила「а-ва-ва-ва! нельзя-нельзя, всё-таки слишком стыдно!」, так что всё равно убрали сюда.',
      ]);
      await era.printAndWait([
        'подходит к витрине с ',
        y_call_d,
        ' мерчем, всякие облики ',
        y_call_d,
        ' — глядя, ',
        you.get_colored_name(),
        ' вспоминает прежние сцены.',
      ]);
      await era.printAndWait([
        'с поднятым пенлайтом и слюной у рта — ',
        y_call_d,
        ', вряд ли у какой ещё ',
        digital.uma_sex_title,
        ' есть такой мерч.',
      ]);
      await era.printAndWait([
        'смотрит-смотрит, постепенно доходит до края витрин, и ',
        you.get_colored_name(),
        ' видит — кучу багажа.',
      ]);
      await era.printAndWait('это...');
      await era.printAndWait([
        'вспомнилось: это вещи ',
        child,
        ', ',
        digital.sex,
        ' оставляла вещи.',
      ]);
      era.drawLine();
      await digital.print_and_wait(
        'ой-ой, наконец-то почти доделала, дальше осталось только... о-о-о... как раз пора есть.',
      );
      await digital.print_and_wait('а что сегодня на обед~');
      await digital.print_and_wait(
        'открывает дверь — а там стол заставлен едой?!',
      );
      await digital.print_and_wait(
        'сегодня какой-то особый день? я, Диджитал, в хлопотах забыла?!',
      );
      await digital.print_and_wait(
        'плохо-плохо, Диджитал, ах Диджитал, как ты могла... э?',
      );
      await you.say_and_wait([
        y_call_d,
        ', по этому лицу — думаешь, будто что-то пропустила?',
      ]);
      await digital.say_and_wait(
        'э-э-э? моя, моя вина, хлопотала-хлопотала и забыла! мне б, Диджитал, на небо, к...',
      );
      await you.say_and_wait(
        'стоп-стоп-стоп-стоп, подожди, это потому что я нашла вот это, полное воспоминаний—',
      );
      await digital.print_and_wait([
        'видит, как ',
        callname,
        ' берёт... конверт?',
      ]);
      await digital.say_and_wait(
        'в наши дни письмо увидеть — редкость, может, это письмо в будущее, или письмо от призрака...',
      );
      await you.say_and_wait('угадала, но, может, не совсем то, что думаешь.');
      await digital.print_and_wait([
        'принимает у ',
        callname,
        ' письмо, ещё и с оттиском печати, узор как раз с того мерча Трейсена, что я покупала раньше, смотрю, подпись...',
      ]);
      await digital.print_and_wait([
        'о-о-о-о! вот это страх, не думала — письмо от ',
        child,
        '.',
      ]);
      await digital.say_and_wait(
        'это что, письмо с той стороны?! так оно и правда бывает?!',
      );
      await digital.say_and_wait(
        'а если открыть — как в хоррор-игре, вселение злого духа?!',
      );
      await you.say_and_wait('э, раз так, может, открыть и проверить?');
      await digital.say_and_wait(
        'нет-нет-нет, будто сначала надо освятить, достать ту офуду с хэллоуинского победного костюма...',
      );
      await digital.print_and_wait(
        'на деле конверт в руках, всё мелет кругами, а руки будто без сил: даже лёгкое письмецо не удержать.',
      );
      await you.say_and_wait('……');
      await digital.print_and_wait([
        'глядя на ',
        callname,
        ',',
        you.sex,
        '……',
        you.sex,
        'наверное, так и есть.',
      ]);
      await digital.print_and_wait([
        'приваливается к ',
        callname,
        ' и садится, вдвоём на один стул.',
      ]);
      await digital.print_and_wait([
        you.sex,
        'протягивает руки, обнимает меня крепко... прямо чувствуется: ',
        you.sex,
        ' покрылась холодным потом на ладонях.',
      ]);
      await digital.print_and_wait('открывай.');
      await digital.print_and_wait('ш-ш... это бумага шуршит внутри.');
      await digital.print_and_wait(
        'снимает печать, раскрывает конверт, вынимает сложенный лист...',
      );
      await digital.print_and_wait('разворачивай.');
      await digital.print_and_wait('разворачивает письмо, внутри написано—');
      era.println();
      era.drawLine();
      await era.waitAnyKey();
      era.setOffset(8);
      era.setWidth(8);
      await era.printAndWait('папа, мама:');
      await era.printAndWait('спасибо вам.', {
        align: 'center',
        isParagraph: true,
      });
      await era.printAndWait(['— ваша ', child], { align: 'right' });
      era.drawLine();
      await era.waitAnyKey();
      era.setWidth(24);
      era.setOffset(0);
      era.println();
      await digital.say_and_wait(
        ' уха, да что ж такое, конечно, конечно там написано именно это!',
      );
      await you.say_and_wait('ну ещё бы!');
      await digital.say_and_wait(
        'уо-о-о, давай-давай, есть так есть, хорошенько отдохнём!',
      );
      await digital.print_and_wait([
        'Дымящиеся вкуснейшие блюда, поднимающаяся дымка, тепло ',
        callname,
        ', нежная котлета хамбагу, которую кладут прямо в рот.',
      ]);
      await digital.print_and_wait([
        'Глядя, как ',
        callname,
        ' улыбается, протягивая кусочек, — конечно, этим нужно хорошенько насладиться.',
      ]);
      await digital.print_and_wait([
        'Похлопав ',
        callname,
        ' по бедру. Мм, в последнее время и правда качаешься домашними делами...',
      ]);
      await you.say_and_wait([
        y_call_d,
        '? Сейчас? Здесь? Не собираешься доесть?',
      ]);
      await digital.say_and_wait(
        'Всё равно же, до еды или после — итог один, да? И то и другое всё равно есть, нет? Кху-хе-хе... хлюп--',
      );
      await digital.print_and_wait(
        'Вах, кажется, я издала какой-то очень сомнительный звук.',
      );
      await digital.say_and_wait(
        'Нго-о-о-о, да-да-да, именно сейчас, уже целая неделя, я терпела до этого момента! Ууу, ты знаешь, как я эту неделю прожила?!',
      );
      await digital.say_and_wait(
        'Ведь, ведь я, Диджитал, целую неделю рисовала додзинси, а по традиции после окончания разве не положено немного отпраздновать?!',
      );
      await you.say_and_wait([
        'Не-не-не, это же твоя проблема! И ещё, ',
        y_call_d,
        ', ты дорисовала?',
      ]);
      await digital.say_and_wait(
        '...Е-ещё чуть-чуть, но правда совсем чуть-чуть осталось! И разве это важно? Разве не я важнее?',
      );
      await you.say_and_wait(
        'А-а-а, так ты меня эту неделю тоже забросила! Теперь ещё есть захотела, да?! А убирать потом опять мне!',
      );
      await digital.print_and_wait('Что... что-то даже совестно... но...');
      await digital.say_and_wait('Очень извини! Тогда потом уборка на тебе!');
    };
    f.title = title;
    return f;
  })(),
};
