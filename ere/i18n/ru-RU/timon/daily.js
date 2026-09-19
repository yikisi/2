/**
 * @file 日常地文
 * @author 雞雞
 * @author 幽白書
 * @author Mr.E.
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { buff_colors, money_color } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} minoru
   */
  good_morning(chara, you, minoru) {
    const buffer = [
      /** @author 雞雞 */
      {
        h() {
          era.print([chara.get_colored_name(), ' показывает большой палец.']);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            ' явно объелась: живот стал круглым.',
          ]);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            ' сосредоточенно что-то читает.',
          ]);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => era.get(`cflag:${chara.id}:65`) < 5,
        h() {
          era.print([
            chara.get_colored_name(),
            ' весело болтает с одноклассницами.',
          ]);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => chara.id !== 301 && !(era.get('cflag:301:48') < 3 * 48),
        h() {
          era.print([
            chara.get_colored_name(),
            ' у стойки расспрашивает ',
            minoru.get_colored_name(),
            ' о чём-то.',
          ]);
        },
      },
      /** @author 幽白書 */
      {
        // TALENTNAME:0 = 情感活动
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' возбуждённо рассказывает ',
            you.get_colored_name(),
            ' шутку, увиденную на выходных по телевизору, и на середине сама не выдерживает и смеётся.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' пересказывает сюжет сериала, что смотрела на выходных, и посреди рассказа снова не выдерживает и плачет.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' видит: ',
            chara.get_colored_name(),
            ' в компании нескольких ',
            chara.uma_sex_title,
            ' собралась в кружок — похоже, рассказывают страшилки; и вот ',
            chara.get_colored_name(),
            ' уже побледнела от страха.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' видит: ',
            chara.get_colored_name(),
            ' — в волосах застряла веточка; и только когда ',
            you.get_colored_name(),
            ' её вынимает, ',
            chara.get_colored_name(),
            ' понимает, что на голове что-то было.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' отчитывает ',
            chara.get_colored_name(),
            ' за то, что переодевается прямо в тренировочной, — и в ответ получает недоумённый взгляд: а почему, собственно, нельзя?',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' будто бы обсуждает с другими ',
            chara.uma_sex_title,
            ' любовные сплетни, ',
            you.get_colored_name(),
            ' видит, как ',
            chara.get_colored_name(),
            ' без остановки выспрашивает у влюблённой ',
            chara.uma_sex_title,
            ' подробности — и не отстаёт, пока та не убегает, красная до ушей.',
          ]);
        },
      },
      {
        // TALENTNAME:1 = 自信程度
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            'Заходя в тренировочную, ',
            you.get_colored_name(),
            ' слышит, как ',
            chara.get_colored_name(),
            ' по обыкновению говорит о себе что-то уничижительное.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' и ',
            chara.get_colored_name(),
            ' здороваются — и ни с того ни с сего его утешает ',
            chara.get_colored_name(),
            '.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' гладит по голове ',
            chara.get_colored_name(),
            ', а ',
            chara.get_colored_name(),
            ' почему-то решает, что ',
            you.get_colored_name(),
            ' собирается её наказать, — и ',
            chara.get_colored_name(),
            ', зажмурившись, замирает.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' стоит посреди тренировочного поля с таким гордым видом, будто она король мира.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' стоит на трибуне и, тыча пальцем, разбирает бег других ',
            chara.uma_sex_title,
            ' на поле, выдавая оценки на свой лад.',
          ]);
        },
      },
      {
        c: () =>
          // CFLAGNAME:1 = 种族
          era.get(`cflag:${chara.id}:1`) > 0 &&
          era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' вздыхает: в академии нет соперницы, с которой стоило бы померяться силами.',
          ]);
        },
      },
      {
        // TALENTNAME:2 = 痛苦感受
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' падает; когда она поднимает голову, ',
            you.get_colored_name(),
            ` видит, что ${chara.sex} вот-вот заплачет: в глазах стоят слёзы.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' играет с подругами; проигравшему — щелбан, ',
            you.get_colored_name(),
            ' видит, как проигравшая ',
            chara.get_colored_name(),
            ' делает испуганное лицо.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' болтает с подругами о кино, и на кровавом эпизоде ',
            chara.get_colored_name(),
            ' невольно прижимает уши.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' падает со всего маху; и как раз когда ',
            you.get_colored_name(),
            ' переживает за ',
            chara.get_colored_name(),
            ', ',
            chara.get_colored_name(),
            ' как ни в чём не бывало отряхивается и встаёт.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' падает, ',
            you.get_colored_name(),
            ' перевязывает ',
            chara.get_colored_name(),
            ', а когда заканчивает и поднимает глаза — ',
            chara.get_colored_name(),
            ' незаметно уснула.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' делится секретами, как терпеть боль… Тема странная, но слушают многие, и притом всерьёз, ещё и записывают.',
          ]);
        },
      },
      {
        // TALENTNAME:3 = 恐惧感受
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' прячется в углу поля — похоже, не хочет иметь дела со слишком солнечными людьми вокруг.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' одна сидит, сжавшись, в тени у поля и веточкой чертит на земле одну и ту же спираль.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' замечает, как ',
            chara.get_colored_name(),
            ' вполголоса говорит сама с собой, глядя в отражающее стекло автомата с напитками.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' замечает, как ',
            chara.get_colored_name(),
            ' украдкой сдувает в небо семена одуванчика и оборачивается с сияющей улыбкой удавшейся шалости.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' раскатывает тренировочную покрышку в огромное колесо и, фальшиво напевая песню с концерта, гонит её по газону.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' идёт вприпрыжку с бутылкой изотоника в обнимку, волосы развеваются на ветру.',
          ]);
        },
      },
      {
        // TALENTNAME:4 = 羞耻忍耐
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' прячется за шторой в тренерской и листает книгу, а заслышав шаги, тут же захлопывает её и прижимает к груди.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' раз за разом подбирает угол у монетоприёмника автомата, чтобы монета падала строго вертикально и без звука.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            'За шкафом в тренерской что-то тихо колышется: ',
            chara.get_colored_name(),
            ' переодевается, спрятавшись там, и, когда ',
            you.get_colored_name(),
            ' это замечает, заливается краской.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' вдруг оказывается на спине у ',
            chara.get_colored_name(),
            ', и та мчится на тренировочное поле: говорит, что даст ',
            you.get_colored_name(),
            ' почувствовать скорость ветра.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' сдвигает вместе гимнастических коней и созывает ',
            chara.uma_sex_title,
            ' на поле: кто перепрыгнет больше всех за раз.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' садится у входа на поле и требует от каждой проходящей мимо ',
            chara.uma_sex_title,
            ' плоскую шутку — иначе не пропустит.',
          ]);
        },
      },
      {
        // TALENTNAME:5 = 反感获取
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' сверлит взглядом проходящих мимо ',
            chara.uma_sex_title,
            `, и дети, на которых ${chara.sex} так посмотрела, испуганно вскрикивают.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' разрисовывает баллончиком барьеры, а заметив ',
            you.get_colored_name(),
            ', с вызовом мажет краской с пальцев по стене.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            'Из раздевалки доносится треск ткани: ',
            chara.get_colored_name(),
            ' кромсает манжеты формы в дыры, нитки сыплются на пол.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            'Из инвентарной пробивается тёплый жёлтый свет: ',
            chara.get_colored_name(),
            ' обматывает бинтом старые блины от штанги — чтобы не били.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' стоит у поля с охапкой бутылок изотоника и, увидев взмокшую от тренировки ',
            chara.uma_sex_title,
            ', тут же подаёт одну.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' убирает с поля щебень, чтобы упавший не поранился второй раз об острый камень.',
          ]);
        },
      },
      {
        // TALENTNAME:6 = 反抗意愿
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ': его расписание перечёркнуто маркером — это ',
            chara.get_colored_name(),
            ' постаралась и вписала вместо него то, что назначила ',
            chara.get_colored_name(),
            ' сама.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' заходит в тренерскую — а она забита вещами, которые ',
            chara.get_colored_name(),
            ' без спросу расставила по комнате.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            'Хотя ни о чём не договаривались, ',
            chara.get_colored_name(),
            ' как о само собой разумеющемся велит ',
            you.get_colored_name(),
            ' после уроков сходить с ',
            chara.get_colored_name(),
            ' за покупками.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' замечает, как ',
            chara.get_colored_name(),
            ' стоит перед дверью тренерской, раз за разом поднимает руку — и всё не решается постучать.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' от внезапно включившихся поливалок пугается и садится на землю с совершенно ошарашенным лицом.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            'Шкафчик в тренерской слегка покачивается: ',
            chara.get_colored_name(),
            ' забилась внутрь, спасаясь от внезапного приглашения побегать наперегонки.',
          ]);
        },
      },
    ];
    get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  select(chara, you, is_sleep) {
    if (is_sleep) {
      era.print([chara.get_colored_name(), ' крепко спит.']);
    } else {
      const buffer = [
        {
          h() {
            era.print([
              chara.get_colored_name(),
              ' к ',
              you.get_colored_name(),
              ' поворачивается и здоровается.',
            ]);
          },
        },
        {
          h() {
            era.print([
              chara.get_colored_name(),
              ' к ',
              you.get_colored_name(),
              ' поворачивается и кивает: мол, готова в любой момент.',
            ]);
          },
        },
      ];
      get_random_entry(buffer).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_gn_sex_message: (chara, you) => [
    'После насыщенного дня ',
    you.get_colored_name(),
    ' провожает ',
    chara.get_colored_name(),
    ' до двери студенческого общежития — ',
    chara.get_colored_name(),
    ' смущённо предлагает переспать вместе…',
  ],
  gn_sex_yes: 'Согласиться',
  gn_sex_no: 'Отказать',
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async gn_sex_accept(chara, you) {
    await era.printAndWait([
      'Под тёплыми взглядами окружающих краснеющая ',
      chara.get_colored_name(),
      ' берёт ',
      you.get_colored_name(),
      ' под руку и медленно уходит…',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async gn_sex_force(chara, you, callname) {
    await era.printAndWait([
      'Ого, у той ',
      chara.get_colored_name(),
      ' лицо переменилось, она тащит ',
      you.get_colored_name(),
      ` силой наружу — явно сейчас ${chara.sex} заставит своего `,
      callname,
      ' встать на колени и постараться телом!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  async gn_sex_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' разочарованно разворачивается и идёт к студенческому общежитию…',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} c_awake
   * @param {boolean} y_awake
   */
  good_night_normal(chara, you, c_awake, y_awake) {
    if (c_awake && y_awake) {
      era.print([
        'После насыщенного дня ',
        you.get_colored_name(),
        ' провожает ',
        chara.get_colored_name(),
        ' до двери студенческого общежития — пожелав спокойной ночи, каждый идёт своей дорогой.',
      ]);
    } else if (y_awake) {
      era.print([
        'Глядя на сладко спящую ',
        chara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' никак не решается разбудить — сам доносит до студенческого общежития и, растирая ноющие плечи, возвращается в квартиру тренера.',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' спит мёртвым сном — только сквозь дрёму будто слышит голос ',
        chara.get_colored_name(),
        ', прощающийся на ночь.',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' в кабинете тренера помогает ',
      chara.get_colored_name(),
      ` с учёбой и успешно разбирает задачу, которую ${chara.sex} не могла решить.`,
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_prepare(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' в кабинете тренера готовятся к скачке — перед предстоящей гонкой нужно собраться по полной.',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  async talk(chara, you, is_sleep) {
    if (is_sleep) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' тихо похрапывает — спит сладко.',
      ]);
    } else {
      // BASENAME:0 = 体力
      const low_stamina =
        era.get(`base:${chara.id}:0`) < 0.45 * era.get(`maxbase:${chara.id}:0`);
      // CFLAGNAME:48 = 育成回合计时
      const in_edu = era.get(`cflag:${chara.id}:48`) < 3 * 48;
      const buffer = [
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' выглядит вялой; надо дать ',
              chara.get_colored_name(),
              ' отдохнуть.',
            ]);
          },
        },
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' умоляюще смотрит на ',
              you.get_colored_name(),
              ', надеясь на разрешение отдохнуть.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' мрачнее тучи, шерсть по всему телу взъерошена и торчит — настрой хуже некуда.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' хмурая, разминка идёт не очень — настроя не хватает.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 0,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' с довольно застывшим лицом, будто немного нервничает — настрой средний.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' с удовольствием разминается на дорожке — настрой хороший.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' радостно скачет по дорожке — настрой отличный.',
            ]);
          },
        },
        {
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' всё это время сохраняет расслабленное лицо.',
            ]);
          },
        },
      ];
      await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_gift(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' дарит подарок ',
      chara.get_colored_name(),
      ' — та очень рада.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_cook(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' готовят вместе в кабинете тренера — сегодня решили взять здоровые органические морковки.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_rest(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' отдыхают вместе в кабинете тренера — оба опустошили головы и просто провели время.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_game(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' играют в приставку в кабинете тренера — провели весёлое время.',
    ]);
  },
  bm_money_message: 'Сколько занять?',
  bm_time_message: 'На сколько недель?',
  get_bm_confirm_message: (amount, time, repay) => [
    'Заём ',
    { ...get_abbr_number(amount), color: money_color },
    ' ма-монет: далее в течение ',
    { content: time.toLocaleString(), color: buff_colors[3] },
    ' нед. еженедельный платёж ',
    { ...get_abbr_number(repay), color: money_color },
    ' ма-монет, всего ',
    {
      ...get_abbr_number(repay * time),
      color: money_color,
    },
    ' ма-монет. Принять?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} amount
   */
  async bm_confirm(chara, you, amount) {
    await era.printAndWait([
      you.get_colored_name(),
      ' к ',
      chara.get_colored_name(),
      ' обращается и занимает ',
      { content: amount.toLocaleString(), color: money_color },
      ' ма-монет…',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе приходят к дуплу сухого дерева во внутреннем дворе.',
    ]);
    await era.printAndWait([
      `Глядя, как ${chara.sex} ревёт в дупло, `,
      you.get_colored_name(),
      ' тоже утверждается в решимости помочь ',
      chara.get_colored_name(),
      ' стать сильнейшей.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' идут на свидание во внутренний двор; ваша пара заставляет студентов вокруг перешёптываться.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_r_lunch(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе едят бэнто на крыше и меняются вкусностями из коробок.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_fishing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе идут ловить рыбу на реку — вдруг будет богатый улов.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_walking(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе гуляют у реки; и сегодня настроение прекрасное.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_arcade(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе идут в зал игровых автоматов на торговой улице — только бы кран не разжал лапу.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_drawing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе идут на розыгрыш на торговой улице — выпадет ли что-нибудь стоящее?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_ktv(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе идут в караоке на торговой улице — друзья с вершины горы, зажигаем!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_movie(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе идут в кино на торговой улице — что там сейчас хорошего?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(chara, you, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе приходят помолиться в святилище.',
    ]);
    if (dice < 0.5) {
      await era.printAndWait([
        'Вытянули предсказание — ',
        dice < 0.05 ? 'великое счастье' : 'счастье',
        '! Прогулка вышла очень радостной.',
      ]);
    } else {
      await era.printAndWait([
        'Вытянули несчастливое предсказание! Всю прогулку вы опасались, что беда свалится с неба.',
      ]);
    }
  },
  /**
   * @author Mr.E.
   * @param {CharaTalk} chara
   * @param {number} dice 祈祷掷骰结果，0-0.05 之间的小数，这里根据数值计算大成功的类型
   */
  async oc_great_luck(chara, dice) {
    // FLAGNAME:122 = 强奸抵抗
    if (dice < 0.0001 && era.get('flag:122') === 1) {
      await era.printAndWait('Подпись — неизвестный магический материал!');
    } else if (dice < 0.01) {
      await era.printAndWait([
        'Перед глазами вдруг мерещится цветные врата — настроение сразу улучшается',
      ]);
    } else if (dice < 0.02) {
      await era.printAndWait([
        'Порывом ветра вас сбивает прямо на ',
        chara.get_colored_name(),
        '?!',
      ]);
    } else if (dice < 0.03 && chara.sex_code !== 1) {
      await era.printAndWait([
        'Порывом ветра юбку рядом стоящей ',
        chara.get_colored_name(),
        ' и правда поднимает?!',
      ]);
    } else {
      await era.printAndWait(['Порывом ветра — и вот вам 150 ма-монет?!']);
    }
  },
  /** @param {CharaTalk} chara */
  oc_remove_train_debuff(chara) {
    era.print([
      '【Тренировки ',
      chara.get_colored_name(),
      ' будто идут легче】',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_restaurant(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе идут поесть у вокзала: китайская кухня, японская или европейская?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе идут на свидание к вокзалу; вы держитесь за руки, и на вас смотрят с завистью.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_shopping(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе идут по торговому центру у вокзала — купим какой-нибудь пустячок в подарок.',
    ]);
  },
  cl_new_year: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'Встречая новый год, ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' как следует отмечают в кабинете тренера.',
      ]);
    };
    f.title = 'Новый год';
    return f;
  })(),
  cl_valentine: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'Сегодня День святого Валентина — ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' в кабинете тренера обмениваются подарками.',
      ]);
      await era.printAndWait([
        'Видя радость другого, ',
        you.get_colored_name(),
        ' тоже радуется.',
      ]);
    };
    f.title = 'День святого Валентина';
    return f;
  })(),
  cl_palace: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'Неделя Зала славы — один из главных праздников для тех ',
        chara.uma_sex_title,
        ', кто живёт бегом.',
      ]);
      // CFLAGNAME:47 = 殿堂
      switch (era.get(`cflag:${chara.id}:47`)) {
        case 2:
          await era.printAndWait([
            'Благодаря ',
            you.get_colored_name(),
            ' и ',
            chara.get_colored_name(),
            ' и её отличным результатам вас, само собой, позвали как главных героев.',
          ]);
          // CFLAGNAME:48 = 育成回合计时
          if (era.get(`cflag:${chara.id}:48`) === 143 + 9) {
            await era.printAndWait([
              'Час настал: ',
              chara.get_colored_name(),
              ' с нескрываемой радостью и гордостью идёт к центру сцены.',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            ' смотрит, как ',
            chara.sex,
            ' шаг за шагом поднимается на сцену и начинает рассказывать о вашем пути, делясь опытом с залом.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' смотрит уже нечётко: невольно вспоминается всё, что между вами было…',
          ]);
          break;
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' и ',
            chara.get_colored_name(),
            ' вместе идут в большой зал академии Трейсен на праздник.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' — уши и хвост подопечной сами собой чуть опустились: похоже, настроения нет.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' смотрит на ',
            chara.get_colored_name(),
            ', вздыхает и осторожно кладёт ладонь ей на плечо — так, чтобы ',
            chara.sex,
            ' могла опереться и идти дальше. И, кажется, ',
            chara.sex,
            ' от этого приободрилась. Во всяком случае, ',
            chara.sex,
            ' шагает бодрее.',
          ]);
          await era.printAndWait([
            'Хотя ',
            you.get_colored_name(),
            ' и ',
            chara.get_colored_name(),
            ' старались, результатов на Зал славы не хватило; но без сожалений жизни не бывает.',
          ]);
          await era.printAndWait([
            'Победителями вы не стали, но праздничным духом всё же заразились и немного отдохнули душой.',
          ]);
          break;
        default:
          // CFLAGNAME:65 = 成长阶段
          if (era.get(`cflag:${chara.id}:65`) === 5) {
            await era.printAndWait([
              `Неделя Зала славы важна не только для действующих ${chara.uma_sex_title}, но и для тех, кто работает рядом: для `,
              you.get_colored_name(),
              ' это тоже день суеты и напряжения.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' и ',
              chara.get_colored_name(),
              ' вместе входят в зал и старательно записывают всё, что происходит на церемонии… время от времени поднимают глаза, встречаются взглядами — и снова сосредоточенно собирают нужное.',
            ]);
          } else {
            await era.printAndWait([
              'К этому времени академия Трейсен всегда устраивает мероприятия; одно из них — пригласить нескольких ',
              chara.uma_sex_title,
              ' из Зала славы, чтобы они несколько дней подряд выступали перед другими ',
              chara.uma_sex_title,
              ' и тренерами и передавали опыт.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' и ',
              chara.get_colored_name(),
              ' с трудом отвоёвывают себе места среди набежавшей публики.',
            ]);
            // CFLAGNAME:1 = 种族
            if (era.get(`cflag:${chara.id}:1`) > 0) {
              await era.printAndWait([
                'На сцене говорит ',
                chara.uma_sex_title,
                ', голос спокойный, но полный страсти; ',
                you.get_colored_name(),
                ' замечает: ',
                chara.get_colored_name(),
                ' сидит прямо, и в глазах, кажется, светится восхищение…',
              ]);
            }
          }
      }
    };
    f.title = ', ';
    return f;
  })(),
  cl_fans: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'На апрельском фестивале благодарности фанатам ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' вместе показывают им свои таланты.',
      ]);
    };
    f.title = 'Фестиваль благодарности фанатам';
    return f;
  })(),
  cl_temple_fair: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'Во время ярмарки ',
        you.get_colored_name(),
        ' решает пригласить ',
        chara.get_colored_name(),
        ' погулять по рынку у площадки летнего сбора.',
      ]);
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        if (era.get(`love:${chara.id}`) >= 50) {
          await era.printAndWait([
            chara.sex,
            'быстро соглашается, и вы на время сбрасываете ярмо взрослых работяг и от души гуляете весь день…',
          ]);
        } else {
          await chara.say_and_wait('Это свидание?');
          await era.printAndWait([
            you.get_colored_name(),
            ' смотрит на уведомление, невольно улыбается и уже собирается ответить, как в глаза бросается новое сообщение.',
          ]);
          await chara.say_and_wait('Значит, решено.');
          await era.printAndWait([
            'Под текстом — селфи: юката, лёгкий макияж, это ',
            chara.sex,
            '. ',
            you.get_colored_name(),
            ' невольно задерживает дыхание…',
          ]);
          await era.printAndWait(
            'Что и говорить, это станет для вас прекрасным воспоминанием.',
          );
        }
      } else if (era.get(`love:${chara.id}`) >= 50) {
        await era.printAndWait([
          chara.sex,
          'быстро соглашается, и вы отбрасываете все дела и от души гуляете весь день…',
        ]);
      } else {
        await era.printAndWait([
          chara.sex,
          'Тут же пишет ',
          you.get_colored_name(),
          ' ответ. ',
          you.get_colored_name(),
          ' нарочно приходит к входу пораньше и, подняв глаза, вдруг видит: в новенькой юкате, тщательно наряженная, — ',
          chara.sex,
          '.',
        ]);
        await era.printAndWait([
          'Не успевает ',
          you.get_colored_name(),
          ' опомниться, как она чуть улыбается, берёт ',
          you.get_colored_name(),
          ' под руку и тянет ',
          you.get_colored_name(),
          ' за собой…',
        ]);
        await era.printAndWait('День вышел чудесный.');
      }
    };
    f.title = 'Храмовая ярмарка';
    return f;
  })(),
  cl_halloween: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        await era.printAndWait([
          'Праздники в Трейсене часто не такие, как везде.',
        ]);
        await era.printAndWait([
          'Вот и сегодня… ',
          you.get_colored_name(),
          ' смотрит на стоящую рядом, наряженную нелепо и жутковато, ',
          chara.sex,
          ' — и вздыхает про себя.',
        ]);
        await era.printAndWait(
          'Вообще-то это праздник, когда наряжаются и балуются дети, а взрослым остаётся сидеть дома и раздавать конфеты. Но начальство академии под предлогом «сблизиться со студентами» уговорило и преподавателей нарядиться и выйти раздавать сладости — ради этого даже дали полдня выходного.',
        );
        await era.printAndWait(
          'А может… кое-кому из взрослых просто нужен был повод подурачиться.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' думает так — и вдруг чувствует сбоку взгляд, полный убийственного намерения; торопливо мотает головой и не отстаёт от ',
          chara.get_colored_name(),
          '.',
        ]);
        await era.printAndWait(
          'Ночь вышла утомительной, но, надо признать, занятной.',
        );
      } else {
        await era.printAndWait([
          'Как раз когда ',
          you.get_colored_name(),
          ' наслаждается свободным вечером, в дверь раздаётся стук — неспешный, но сильный.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' примерно догадывается, чьих это рук дело; открывает дверь и делает вид, что напуган странным нарядом ',
          chara.get_colored_name(),
          ' — а потом составляет ей компанию: ',
          chara.sex,
          ' ведёт его выпрашивать сладости…',
        ]);
        await era.printAndWait(
          'По дороге, кажется, попалось немало странного.',
        );
      }
    };
    f.title = 'Хэллоуин';
    return f;
  })(),
  cl_christmas: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'Пришло Рождество — ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' наряжаются в Санта-Клаусов и празднуют, балуясь до вечера, пока не израсходуют лишнюю энергию.',
      ]);
    };
    f.title = 'Рождество';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async birthday_remote(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' удалённо поздравляет ',
      chara.get_colored_name(),
      ' с днём рождения',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' выглядит очень радостной.',
    ]);
  },
  /**
   * @author 阿格尼斯数码公司
   * @param chara
   * @param you
   */
  async birthday_normal(chara, you) {
    await era.printAndWait([
      'Для ',
      chara.get_colored_name(),
      ' устроил пышную вечеринку по случаю дня рождения!',
    ]);
    const buffer = [
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' как виновница торжества выглядит очень счастливой',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' при мерцающем свете свечей закрывает глаза и загадывает желание на этот год',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' заражается общим весельем, и с лица не сходит улыбка',
          ]);
        },
      },
      {
        c: () =>
          // TALENTNAME:11 = 社交态度
          era.get(`talent:${chara.id.id}:11`) === -1 &&
          // EXPNAME:20 = 过生日次数
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            'Часто гостящая на самых разных вечеринках ',
            chara.get_colored_name(),
            ' совсем не ждала, что ',
            you.get_colored_name(),
            ` задумает для неё праздник. Так что ${chara.sex} просто провела с вами весёлый день в приятном удивлении`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'Тем не менее, ',
            chara.get_colored_name(),
            ', узнав об энтузиазме ',
            you.get_colored_name(),
            ', сумела превратить день рождения, который ',
            you.get_colored_name(),
            ` готовил(а) для неё, в общешкольное празднование, какого никто и не ждал…! Вот такая ${chara.sex}.`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'Тем не менее, ',
            chara.get_colored_name(),
            ' будто бы сама устроила себе вторую половину праздника: две вечеринки слились в одну и разрослись до невиданных размеров…!',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' будто и не ждала такой вечеринки: при виде собравшихся людей выглядит немного оробевшей',
          ]);
          if (era.get(`cflag:${chara.id}:1`) > 0) {
            await era.printAndWait('Но хвост при этом виляет очень быстро');
          } else {
            await era.printAndWait('Но выглядит очень довольной');
          }
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'На этот раз ',
            chara.get_colored_name(),
            ' неожиданно ни на одном этапе не оробела и вместе со всеми пела песню про день рождения',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' всё ещё чуть робеет, но подарок её очень радует',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' молча ест именинный торт, ',
            era.get(`cflag:${chara.id}:1`) > 0
              ? 'подрагивая ушами'
              : 'улыбаясь',
            `, и слушает, как рядом вспоминают всякое былое — ведь ${chara.sex} тут виновница торжества.`,
          ]);
        },
      },
      {
        // TALENTNAME:7 = 坦率程度
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' явно не ждала такого праздника, но на вопрос, стало ли это сюрпризом, отговорилась в духе «да я давно догадалась»',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ` то ворчит про то, чем на празднике недовольна ${chara.sex}, а то `,
            era.get(`cflag:${chara.id}:1`) > 0 ? 'виляя хвостом, ' : 'жадно ',
            'уплетает именинный торт',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' заранее заготовила сотню упрёков в том, что ',
            you.get_colored_name(),
            ' всё делает плохо, — и вот они наконец пригодились',
          ]);
          await era.printAndWait('Но неожиданно похвалила: праздник удался');
        },
      },
    ];
    await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async load_talk(chara, you) {
    // CFLAGNAME:81 = 妊娠阶段
    // CFLAGNAME:57 = 扩展变量
    // EXPNAME:117 = 生产次数
    if (
      era.get(`cflag:${chara.id}:81`) > 2 &&
      !era.get(`cflag:${chara.id}:57`)?.report
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' гладит живот и с отчаянием смотрит вслед уходящему ',
        you.get_colored_name(),
        '.',
      ]);
    }
    if (
      era.get(`cflag:${chara.id}:81`) <= 2 &&
      !era.get(`exp:${chara.id}:117`) > 0
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' с бутылочкой в руке с отчаянием смотрит вслед уходящему ',
        you.get_colored_name(),
        '.',
      ]);
    }
  },
};
