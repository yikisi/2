/**
 * @file 调教地文 - 强奸
 * @author ALEX
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { stain_enum } = require('#/data/ero/stain-const');

module.exports = {
  /** 沟通系 */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async kiss(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        'Красивые зрачки расширяются от ужаса, тело, схваченное руками ',
        d_call_a,
        ', дрожит.',
      ]);
      await defender.say_and_wait('Ух…');
      await defender.print_and_wait(
        'Язык с тяжёлым дыханием лезет в рот, силой проталкивает кончик сквозь зубы, что пытались его остановить, и агрессивно лижет у корней дёсен.',
      );
      await defender.print_and_wait([
        'Сейчас, когда ею полностью завладели, остаётся только позволять звукам поцелуев и слюне вытекать из губ.',
      ]);
    } else {
      await defender.say_and_wait(['Гхух…']);
      await defender.print_and_wait([
        'Рот, издавший позорный всхлип, тут же снова запечатывают губы ',
        d_call_a,
        '.',
      ]);
      await defender.print_and_wait([
        'Остаётся только беспомощно закрыть глаза и крепче сжать руки, что лежат на теле.',
      ]);
      await defender.print_and_wait([
        'И позволять грабить рот — языки сплетаются, мокрых низких звуков всё больше.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('Ха-а…');
      await defender.print_and_wait([
        'Без всякой жалости грубо взламывают челюсть; растерянный мозг не успевает среагировать и позволяет делать что угодно.',
      ]);
      await defender.print_and_wait([
        'Облизывают каждый сантиметр рта, сосут обмякший язык неизвестно сколько…',
      ]);
      await defender.print_and_wait([
        'Когда сознание возвращается и появляется попытка сопротивляться, остаточная сладкая дрожь во рту едва не заставляет застонать, пока рефлекторно глотается слюна.',
      ]);
    } else {
      await defender.say_and_wait('Ублюдок… хватит… стоп… пчу…');
      await attacker.print_and_wait([
        'Язык не перестаёт брать своё во рту ',
        a_call_d,
        ', а упрямое сопротивление только заставляет языки чавкать ещё громче.',
      ]);
      await attacker.print_and_wait([
        'Слюна, густо пахнущая гормонами, силой заливается в рот; глотка, которой нужно дышать, вынуждена всё это проглатывать.',
      ]);
      await attacker.print_and_wait([
        'Долгий глубокий поцелуй тянется, слёзы ',
        a_call_d,
        ' и блестящая слюна с уголков губ капают на пол.',
      ]);
    }
  },
  /** 爱抚系 */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Без разрешения гладишь уши ',
        a_call_d,
        ' — мелкий пух и уже горячие ушные раковины вторят залитому румянцем лицу перед собой.',
      ]);
      await attacker.print_and_wait([
        'Чуть сильнее сжимаешь — голова мгновенно дёргается в сторону, изо рта вырывается яростный протестующий всхлип.',
      ]);
      await attacker.print_and_wait([
        'Но как бы эта тварь ни билась и ни морщила брови, непрерывное сильное раздражение кончиков ушей через несколько секунд отнимает у ',
        a_call_d,
        ' силы.',
      ]);
    } else {
      await defender.print_and_wait([
        'Дрожа опускаешь голову: этот тип теребит уши так, будто это киска.',
      ]);
      await defender.say_and_wait(['Можно уже закончить…'], true);
      await defender.say_and_wait(['Ух!']);
      await defender.print_and_wait([
        'Чувствительные корни и внутренняя сторона вдруг тыкаются пальцами — уши от испуга рефлекторно встают торчком.',
      ]);
      await defender.print_and_wait([
        'В отместку торчащие лошадиные уши шлёпают по щеке со звуком «па», но это только вызывает у него смех.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait(
      'Лошадиные уши, уже разогретые, неохотно прижимаются к волосам, пытаясь уйти от дальнейшего насилия.',
    );
    await attacker.print_and_wait([
      'Но их всё равно легко хватают и без колебаний тянут как попало — и скаковая ',
      defender.uma_sex_title,
      ' сбивчиво лепечет просьбы о пощаде.',
    ]);
    await attacker.print_and_wait([
      'Кончики ушей, рефлекторно подрагивающие от грубой игры, заливаются милым кровяным розовым.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Ладонь подхватывает мягкую, подрагивающую, как пудинг, грудь, слегка сжимает — и ладонью чувствуешь, как у неё, у ',
        defender.race > 0 ? 'кобылы' : 'самки',
        ', от этого вторжения всё сильнее колотится сердце.',
      ]);
      await defender.say_and_wait([
        'Ни за что! Ни за что тебе этого не прощу…',
      ]);
      await defender.say_and_wait(['Мм!!!']);
      await attacker.print_and_wait([
        'Грубо мнёт грудь то так, то этак — и угроза, которую эта особа собиралась выплюнуть, глохнет от горячего прикосновения к груди.',
      ]);
      await attacker.print_and_wait(['Ну, а в какую форму помять её теперь?']);
    } else {
      await attacker.print_and_wait([
        'Тёплая мякоть груди мнётся и меняет форму под ладонью, и даже сосок между пальцами встаёт всё заметнее.',
      ]);
      await attacker.print_and_wait([
        'Ладонь ходит туда-сюда, будто без конца смакует ощущение.',
      ]);
      await defender.say_and_wait(['Мразь!!!']);
      await attacker.print_and_wait([
        'Грудь мнут как вздумается, и ',
        a_call_d,
        ' бранит того, кто делает с ней что хочет… но на большее её и не хватает.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Сосок и так уже сам поднялся, твёрдый, как ягода; зажимаешь его и тонко перетираешь, вертишь, точно ручку настройки на приёмнике.',
      ]);
      await attacker.print_and_wait([
        'Налившийся кровью алый сосок горячо пылает, будто подчёркивает: вот он я.',
      ]);
      await attacker.print_and_wait([
        'Стоящая перед ним ',
        a_call_d,
        ' от этих ласк стискивает зубы, и на неплотно сжатых губах уже видно, как она терпит.',
      ]);
      await attacker.print_and_wait(['…Тогда добавим-ка силы.']);
    } else {
      await attacker.print_and_wait([
        'Без всякой пощады тянется к торчащему соску: кончики пальцев ловко и быстро дразнят вершинку, снова и снова нажимая на вставший сосок.',
      ]);
      await attacker.print_and_wait([
        'Тянет и мнёт сосок, что делается твёрдым, как рисовое зёрнышко; порозовевшее тело чуть подрагивает… но губы всё так же упрямо сжаты.',
      ]);
      await attacker.print_and_wait([
        'Проще простого: чуть прихватить ногтем…',
      ]);
      await defender.say_and_wait(['Мм——❤️!']);
      await attacker.print_and_wait([
        'И в ответ — ',
        a_call_d,
        ': короткий, высокий похабный вскрик, а на кончике высунутого из уголка рта языка блестит слюна.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Два пальца раздвигают — обнажённый клитор стыдливо подрагивает.',
      ]);
      await defender.say_and_wait(['Эй… ты что…']);
      await attacker.print_and_wait([
        'Ноготь слегка входит между кожи и клитора и тянет вверх — ',
        a_call_d,
        ' рефлекторно выгибает талию, тело похотливо трясётся.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Грубо сдёргиваешь кожицу с клитора, указательным пальцем прижимаешь его, средним и безымянным фиксируешь губы киски.',
      ]);
      await attacker.print_and_wait([
        'Умело трёшь и вибрируешь; налившийся кровью клитор от произвольных щипков и потягиваний становится всё чувствительнее.',
      ]);
      await attacker.print_and_wait([
        'Непрерывный массаж гонит удовольствие по позвоночнику прямо в мозг ',
        a_call_d,
        ' — даже самая твёрдая воля от такой игры даст трещину.',
      ]);
      await defender.say_and_wait(['Нхи…❤️ Клитор… сейчас разотрут… ааааа❤️']);
      await attacker.print_and_wait([
        'Верно… он и правда уже краснеет и отекает.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_hair 被动方的毛发描述词，带颜色
   */
  async finger_fuck(attacker, defender, is_first, a_call_d, d_hair) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = 'нежно-розовая';
        break;
      case 1:
        vagina_desc = 'румяно-фиолетовая';
        break;
      case 2:
        vagina_desc = 'зрелая, глубокая';
    }
    if (is_first) {
      await attacker.print_and_wait([
        'Коротко примерился указательным и средним — и не успела ',
        a_call_d,
        ' опомниться, как два сложенных пальца уже вошли внутрь. Киска у неё ',
        vagina_desc,
        '.',
      ]);
      await defender.say_and_wait(['И-и… не… не надо… мразь!']);
      await attacker.print_and_wait([
        'Голова запрокинута; ',
        d_hair,
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        ' издаёт сладкий стон, в котором боль мешается с наслаждением, — точно лебедь, пронзённый стрелой.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Пальцы грубо ходят в мягкой мокрой плоти, ушедшие вглубь то постукивают, то мнут, то скребут, а свободная рука подыгрывает им, надавливая снаружи, через низ живота.',
      ]);
      await defender.say_and_wait(['Ух…']);
      await attacker.print_and_wait([
        a_call_d,
        ' изо всех сил зажимает ладонью розовые губы, красивые глаза влажны и туманны.',
      ]);
      await attacker.say_and_wait([
        'Похоже, действует неплохо, ',
        a_call_d,
        '.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(['Крутить снаружи — скучно, правда?']);
      await attacker.print_and_wait([
        'Пальцы идут глубже, ищут места, которые ',
        a_call_d,
        ' при мастурбации почти не трогает, пока кончик не скользит по крошечному бугорку на стенке.',
      ]);
      await defender.say_and_wait(['Ха-а… прошу…']);
      await defender.say_and_wait(['——Иия～!']);
      await attacker.print_and_wait([
        'Достаточно лёгкого нажатия — и мольба ',
        a_call_d,
        ' срывается в вольный стон.',
      ]);
      await attacker.print_and_wait([
        'На лице — пошлый ахэгао, какой бывает только в порно.',
      ]);
    } else {
      await defender.say_and_wait(['Ха-а～ это… что…']);
      await attacker.print_and_wait([
        'Беспокойно крутит бёдрами — и от этого уже размягчённая мякоть киски только крепче обвивает пальцы внутри.',
      ]);
      await attacker.print_and_wait([
        'После того как слабое место раскрыли, киска, что сначала пыталась выдавить чужое, теперь сама бугорком трётся о грубую кожу подушечек.',
      ]);
      await attacker.print_and_wait([
        'Пот стекает по гладкой щеке к чуть приоткрытому уголку рта и вместе со слюной с высунутого языка капает вниз.',
      ]);
      await defender.say_and_wait(['Ух…']);
      await attacker.print_and_wait([
        'Глаза полуприкрыты, зрачки закатываются — будто вот-вот потеряет сознание.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {string} d_skin_color 被动方肤色颜色
   */
  async pet_leg(attacker, defender, is_first, a_call_d, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = 'цвета слоновой кости';
        break;
      case 0:
        skin_desc = 'белая-белая';
        break;
      case 1:
        skin_desc = 'румяная';
        break;
      case 2:
        skin_desc = 'светло-коричневая';
    }
    if (is_first) {
      await attacker.print_and_wait([
        'Не врачебный осмотр и не любовная ласка: против её воли он мнёт бёдра той, что перед ним, — ',
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        '.',
      ]);
      await attacker.print_and_wait([
        'Кожа — ',
        { color: d_skin_color, content: skin_desc },
        ', и мякоть под ней ровно такая, как надо.',
      ]);
      await attacker.print_and_wait([
        'Ладонь ведёт по красивой линии ноги, чувствуя, что вышло из тренировок у ',
        a_call_d,
        ': отпустишь — и мякоть тут же упруго возвращается, для пальцев это чистое удовольствие.',
      ]);
      await attacker.print_and_wait(['Похоже, тренировки не прошли даром…']);
    } else {
      await attacker.print_and_wait([
        a_call_d,
        ' — бёдра, в которых разом и мякоть, и линия, под ходящей туда-сюда ладонью наливаются похабным розовым и липким потным блеском.',
      ]);
      await attacker.print_and_wait([
        'Пытается свести бёдра, чтобы уйти от рук, но этим лишь подставляет ещё более чувствительное место у самого их основания.',
      ]);
      await attacker.print_and_wait([
        'Ладонь, зажатая мякотью бёдер, вся целиком наслаждается тем, как трётся о неё тугая плоть.',
      ]);
      await attacker.print_and_wait([
        'Он смотрит на лицо ',
        a_call_d,
        ' — залитое румянцем и полное отвращения — и чувствует себя так, будто без спроса потрогал какой-то половой орган.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_hair 被动方的毛发描述词，带颜色
   */
  async pet_tail(attacker, defender, is_first, a_call_d, d_hair) {
    if (is_first) {
      await attacker.print_and_wait([
        'Свободная рука скользит по спине вниз и едва касается корня хвоста — всё напряжённое тело ',
        a_call_d,
        ' вздрагивает, будто током.',
      ]);
      await defender.say_and_wait(['Ты! Ублюдок! И не думай!']);
      await attacker.print_and_wait([
        'Умамусумэ резко поднимает голову и зло смотрит, но в глазах жалобно блестят слёзы.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Продолжаешь дразняще щекотать корень хвоста, глядя, как ',
        a_call_d,
        ' жалко, но упрямо терпит.',
      ]);
      await defender.say_and_wait(['Ха… ха～ ха～ у… блюдок…']);
      await attacker.print_and_wait([
        'Стискивает зубы, тело мелко дрожит — и от этого только сильнее хочется мучить.',
      ]);
      await attacker.print_and_wait([
        'Ещё жёстче обхватываешь хвост — ',
        d_hair,
        ' — и легко дёргаешь.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_tail(attacker, defender) {
    await defender.say_and_wait('Ии～❤️');
    await defender.print_and_wait([
      'От кончика до корня — и дальше странное ощущение заливает всё тело.',
    ]);
    await defender.print_and_wait([
      'Будто давно неиспользуемый кабель снова подключили: от ноющего корня хвоста к мозгу, а от мозга — к пульсирующей киске.',
    ]);
    await defender.print_and_wait([
      'Отклоняясь назад, инстинктивно виляешь хвостом — выпрашиваешь ласки, как животное.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Прищурившись, близко рассматриваешь уже сам вставший, красный и опухший клитор ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait([
        'Нарочно даёшь дыханию бить по нему — от горячего воздуха клитор ещё чуть встаёт.',
      ]);
      await defender.say_and_wait(['Не надо… не смотри…']);
      await attacker.print_and_wait([
        'Язык ложится на клитор и сильно лижет — и прежний резкий окрик уже несёт нотки мольбы.',
      ]);
      await attacker.print_and_wait([
        'Судорожно сочащаяся соками киска мочит и твои губы.',
      ]);
    } else {
      await defender.print_and_wait([
        'Чувствительный клитор лижет кончик языка; стиснутые зубы всё равно время от времени пропускают всхлипы в такт движениям этого ублюдка.',
      ]);
      await defender.print_and_wait(['Но так просто сдаваться не собираюсь!']);
      await defender.say_and_wait(['Иия!!!']);
      await defender.print_and_wait([
        'Внезапная боль и мгновенный разряд удовольствия выпрямляют тело, уголки рта невольно дёргаются.',
      ]);
      await defender.say_and_wait(['Не! Не кусай там зубами!']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async suck_virgin(attacker, defender, is_first, a_call_d) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = 'нежно-розовая';
        break;
      case 1:
        vagina_desc = 'румяно-фиолетовая';
        break;
      case 2:
        vagina_desc = 'зрелая, глубокая';
    }
    if (is_first) {
      await defender.say_and_wait(['Не… не надо… убирайся…']);
      await attacker.print_and_wait([
        'Не слушая, целует прямо в киску — а киска у ',
        a_call_d,
        ' ',
        vagina_desc,
        ', — и не обращает внимания на бессильную, да ещё и подрагивающую угрозу.',
      ]);
      await attacker.print_and_wait([
        'Лёгкое посасывание — и тёплый мягкий язык входит внутрь.',
      ]);
      await attacker.print_and_wait([
        'Язык ходит туда-сюда по складкам мягкой плоти, и чувствуется, как то и дело сжимающийся ход будто хочет вытолкнуть его наружу.',
      ]);
    } else {
      await defender.say_and_wait(['Не надо… у-у-у…']);
      await defender.print_and_wait([
        'Складки у самого входа уже вылизаны вошедшим туда чужим до последней.',
      ]);
      await defender.print_and_wait([
        'Пока с губ срываются тихие ругательства, ',
        defender.race > 0 ? 'созданные для бега ' : '',
        'ноги уже дрожат и бессильно сжимают голову, зарывшуюся между ними.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        'Вонючую головку, что уже у губ, берёшь в рот; из-за колебаний медленно прижимаешь язык к стволу.',
      ]);
      await attacker.say_and_wait(['Постарайся сильнее.']);
      await defender.say_and_wait(['Дашь палец — откусит…'], true);
      await defender.say_and_wait(['Ух…']);
      await defender.print_and_wait([
        'Но покорная нынешней себе всё же сужает рот, и губы, скользя вверх-вниз, ровно мажут член слюной.',
      ]);
      await defender.print_and_wait([
        'Язык крайне неохотно лижет вздувшиеся вены, и член от твоей слюны становится блестящим.',
      ]);
      await defender.say_and_wait(['Нх… почему он ещё чуть вырос…'], true);
    } else {
      await defender.print_and_wait([
        'Закрываешь глаза — будто если не видеть, то и не важно.',
      ]);
      await defender.print_and_wait([
        'Но надёжное обоняние всё равно честно доносит, что происходит.',
      ]);
      await defender.print_and_wait([
        'Мягкие ароматные губы медленно обхватывают член; язык, натренированный пением, ловко кружит у головки; руки, которым бы держать кубок, держат член.',
      ]);
      await defender.print_and_wait(['Целовать… дышать… вдыхать…']);
      await defender.say_and_wait(['Как воняет…'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Сразу раздувшимся до предела членом раздвигаешь губы ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait([
        'Мягкие губы, как кольцо, скользят по члену вперёд-назад; даже на щеке выпирает бугор.',
      ]);
      await attacker.print_and_wait([
        'Рефлекторно сжатые губы и слизистая щёк складывают для члена крайне узкую киску.',
      ]);
      await attacker.print_and_wait([
        'Но ещё приятнее — блестящие глаза, полные презрения, что смотрят на тебя.',
      ]);
    } else {
      await defender.say_and_wait(['Ха…❤️']);
      await attacker.print_and_wait([
        'Глаза, что только что смотрели только на тебя, теперь без фокуса; между выдохами, когда член выходит изо рта…',
      ]);
      await attacker.print_and_wait([
        '…и ',
        defender.race > 0 ? defender.sex_slave_title : defender.phy_sex_title,
        ' по имени ',
        defender.get_colored_name(),
        ' бессознательно подставляет высунутый язык под член.',
      ]);
      await attacker.print_and_wait([
        'Слюна медленно капает вместе с предэякулятом, а в лёгкие набирается воздух, густо пропитанный запахом члена.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(['Ха-ааа～～～ нн～～ гхн～～']);
      await attacker.print_and_wait([
        'Как изящную ',
        defender.race > 0 ? 'с лошадиными ушами ' : '',
        'секс-куклу, крутишь её под пахом.',
      ]);
      await attacker.print_and_wait([
        'Всё пространство рта занято, складывается почти вакуумная ротовая дыра.',
      ]);
      await defender.say_and_wait(['Гхэ～']);
      await attacker.print_and_wait([
        'Ротик, только что полный нытья, теперь умеет только сосать.',
      ]);
      await defender.say_and_wait(
        ['Ух～ так горячо～ не хватает воздуха～'],
        true,
      );
      await defender.print_and_wait([
        'В ушах только быстрые тяжёлые мокрые звуки.',
      ]);
      await defender.print_and_wait([
        'Взгляд, который старались держать полным отвращения, сменяется красивыми закатившимися зрачками.',
      ]);
      await defender.print_and_wait([
        'Каждый грубый толчок члена сплющивает глотку; раздутый пищевод давит на трахею, дышать нельзя — а мякоть глотки мёртвой хваткой сжимает член этого ублюдка.',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          'И даже нарочно задерживается во рту: размазывает остатки грязного семени по языку и вишнёвым губам и только потом нехотя выходит.',
        ]);
        await defender.print_and_wait([
          'Между шершавой грязной головкой и тонкими губами тянется мутно-белая нить.',
        ]);
      }
      await defender.print_and_wait([
        'Лишняя слизь из горла и слюна тоже проглочены.',
      ]);
      await defender.print_and_wait([
        'И всё это лишь затем, чтобы приготовиться проглотить густое семя из мошонки насильника, который перед ней.',
      ]);
    } else {
      await defender.say_and_wait(['——Гхы!?']);
      await defender.print_and_wait([
        'Член, ушедший глубоко в горло, не даёт даже опустить голову.',
      ]);
      await defender.print_and_wait([
        'Остаётся только выгибаться, а слюну, смешанную с предэякулятом, приходится глотать без остановки.',
      ]);
      await defender.print_and_wait([
        'Рвотный позыв от вторжения чужого — и удушье оттого, что горло забито чем-то смрадным.',
      ]);
      await defender.print_and_wait([
        'А ещё сильнее — унижение: чтобы этот подонок вошёл в горло до самого корня, приходится высоко задирать зад.',
      ]);
      await defender.say_and_wait(['Да выйди ты уже!!!'], true);
      await defender.print_and_wait([
        'Вот только вдыхаемого воздуха всё меньше хватает на грубые движения этого гада.',
      ]);
      await defender.print_and_wait([
        'Щёки чуть лиловеют, руки, что пытались сопротивляться, понемногу теряют силу и обмякают.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      if (defender.race > 0) {
        await defender.print_and_wait([
          'Делаешь вид, что просьба мимо ушей, и продолжаешь только сосать головку губами.',
        ]);
        await defender.print_and_wait([
          'Всё-таки до такого уже дошли — требовать ещё глубже, разве не слишком?',
        ]);
        await defender.say_and_wait(['Ух?']);
        await defender.print_and_wait([
          'По хвосту проходит рука — снова гладить? Другая рука чешет ухо.',
        ]);
        await defender.say_and_wait(['Ух?!']);
        await defender.print_and_wait([
          'Неожиданный рывок за хвост мгновенно выбивает силы из всего тела, а рука на макушке резко давит вниз.',
        ]);
        await defender.print_and_wait([
          'Головка, что сидела лишь между губ и языка, сразу уходит глубоко в глотку.',
        ]);
        await defender.say_and_wait(['Гхух!!']);
        await defender.print_and_wait([
          'Вкусовые рецепторы, нос и мозг, залитые вонью, гонят чувствительное тело в судороги.',
        ]);
      } else {
        await defender.say_and_wait(['Ха-ааа～～～ нн～～ гхн～～']);
        await attacker.print_and_wait(
          'Как изящную секс-куклу, крутишь её под пахом.',
        );
        await attacker.print_and_wait([
          'Всё пространство рта занято, складывается почти вакуумная ротовая дыра.',
        ]);
        await defender.say_and_wait(['Гхэ～']);
        await attacker.print_and_wait([
          'Ротик, только что полный нытья, теперь умеет только сосать.',
        ]);
      }
      await defender.say_and_wait(
        ['Ух～ так горячо～ не хватает воздуха～'],
        true,
      );
      await defender.print_and_wait([
        'В ушах только быстрые тяжёлые мокрые звуки.',
      ]);
      await defender.print_and_wait([
        'Взгляд, который старались держать полным отвращения, сменяется красивыми закатившимися зрачками.',
      ]);
      await defender.print_and_wait([
        'Каждый грубый толчок члена сплющивает глотку; раздутый пищевод давит на трахею, дышать нельзя — а мякоть глотки мёртвой хваткой сжимает член этого ублюдка.',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          'И даже нарочно задерживается во рту: размазывает остатки грязного семени по языку и вишнёвым губам и только потом нехотя выходит.',
        ]);
        await defender.print_and_wait([
          'Между шершавой грязной головкой и тонкими губами тянется мутно-белая нить.',
        ]);
      }
      await defender.print_and_wait([
        'Лишняя слизь из горла и слюна тоже проглочены.',
      ]);
      await defender.print_and_wait([
        'И всё это лишь затем, чтобы приготовиться проглотить густое семя из мошонки насильника, который перед ней.',
      ]);
    } else {
      await defender.say_and_wait(['——Гхы!?']);
      await defender.print_and_wait([
        'Член, ушедший глубоко в горло, не даёт даже опустить голову.',
      ]);
      await defender.print_and_wait([
        'Остаётся только выгибаться, а слюну, смешанную с предэякулятом, приходится глотать без остановки.',
      ]);
      await defender.print_and_wait([
        'Рвотный позыв от вторжения чужого — и удушье оттого, что горло забито чем-то смрадным.',
      ]);
      await defender.print_and_wait([
        'А ещё сильнее — унижение: чтобы этот подонок вошёл в горло до самого корня, приходится высоко задирать зад.',
      ]);
      await defender.say_and_wait(['Да выйди ты уже!!!'], true);
      await defender.print_and_wait([
        'Вот только вдыхаемого воздуха всё меньше хватает на грубые движения этого гада.',
      ]);
      await defender.print_and_wait([
        'Щёки чуть лиловеют, руки, что пытались сопротивляться, понемногу теряют силу и обмякают.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_or_force_hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        'Властью или силой — в любом случае ',
        defender.race > 0 ? 'с лошадиными ушами ' : '',
        defender.phy_sex_title,
        ' по имени ',
        defender.get_colored_actual_name(),
        ' понимает: сейчас остаётся только подчиняться.',
      ]);
      await attacker.print_and_wait([
        'Втыкаешь сочащуюся предэякулятом головку в неохотно протянутую маленькую ладонь.',
      ]);
      await attacker.print_and_wait([
        'Пальцы вокруг члена держат очень слабо — и от этого странно, будто перо скользнуло.',
      ]);
      await attacker.print_and_wait([
        'И ещё — привычное, дурманящее возбуждение от осквернения чего-то прекрасного.',
      ]);
    } else {
      await attacker.say_and_wait(['Сильнее, не просто держи.']);
      await defender.print_and_wait([
        'Отброс перед тобой немедленно требует ещё хуже — приходится плотно прижать обе руки к члену.',
      ]);
      await defender.print_and_wait([
        'И пальцы, уже липкие от предэякулята, и пульсирующие под ними возбуждённые вены.',
      ]);
      await defender.say_and_wait(['Тошно…']);
      await defender.print_and_wait([
        'В отместку ускоряешь движения, нарочно тыкая кончиками в уретру.',
      ]);
      await defender.say_and_wait(
        ['Фух… хоть на лице появилась гримаса…'],
        true,
      );
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Подхватываешь груди ',
        a_call_d,
        ', что стоит на коленях перед тобой и застыла, и сразу всовываешь член между грудями.',
      ]);
      await defender.say_and_wait(['Член… нх… внутри груди…❤️']);
      await attacker.print_and_wait([
        'Бессознательно выпалив дурманящие грязные слова, ',
        a_call_d,
        ' будто обжигается жаром на груди, отходит и пытается обеими руками оттолкнуть член.',
      ]);
      await attacker.print_and_wait([
        'Тогда берёшь её руки и заставляешь самой поддерживать свою грудь.',
      ]);
      await attacker.print_and_wait([
        'Заодно показываешь, как сжиманием и мнущими движениями лучше дрочить уже полностью раззадоренный член.',
      ]);
      await defender.say_and_wait(['Нх…❤️ пульсирует…❤️']);
    } else {
      await defender.print_and_wait([
        attacker.race > 0
          ? 'И жаркий член в ложбинке между грудями, и невыносимая вонь в дыхании, и лошадиные уши, которые обдаёт сбивчивый горячий выдох.'
          : 'И жаркий член в ложбинке между грудями, и невыносимая вонь в дыхании.',
      ]);
      await defender.print_and_wait([
        'С отчаянием сильно мнёшь свою мягкость, неуклюже усиливая трение груди о член — лишь бы отвлечься.',
      ]);
      await defender.print_and_wait([
        'Прижимаешь грудь к члену, потом механически отодвигаешь; незаметно движения сжимания становятся гораздо грубее.',
      ]);
      await defender.say_and_wait(['……Хм.']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_or_force_tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Нарочно толкаешь бёдрами, чтобы головка, выглядывающая из-между грудей, ткнулась в губы — знак ',
        a_call_d,
        ', что пора открыть рот.',
      ]);
      await defender.say_and_wait(['Нх…']);
      await attacker.print_and_wait([
        a_call_d,
        ' только хмурит брови, сжимает губы и чуть оскаливается — рот открывать не хочет.',
      ]);
      await attacker.print_and_wait([
        'Тогда раз за разом бьёшь головкой по щеке и губам, пока глаза со слезами не расширяются и почти не мутнеют.',
      ]);
      await attacker.print_and_wait([
        'Пока ',
        a_call_d,
        ' наконец не открывает рот, показывая нежно-розовые, манящие губы.',
      ]);
      await defender.say_and_wait(['——А—— ух.']);
    } else {
      await defender.say_and_wait(['Хлюп～ чмок～ хлюп～']);
      await defender.print_and_wait([
        'Головку вместе с венцом полностью втягивают и выпускают; иногда ещё надо лизать кончиком языка член.',
      ]);
      await defender.print_and_wait([
        'И даже требуют обеими руками держать грудь, а свободной рукой одновременно сжимать член.',
      ]);
      await defender.print_and_wait([
        'Какое унижение — эта поза с опущенной головой, будто полное подчинение и признание поражения.',
      ]);
      await defender.say_and_wait(['Ух——']);
      await defender.print_and_wait([
        'Недовольно всхлипываешь — а этот насильник перед тобой при следующем глотке только гладит тебя по голове.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async bite_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait(['Нельзя～ нельзя～～ убирайся!']);
      await attacker.print_and_wait([
        'Зубами хватаешь алую ягоду ',
        a_call_d,
        ', уже мокрую от слюны, сильно кусаешь — накопленный зуд и желание вспыхивают разом.',
      ]);
      await defender.say_and_wait(['Нхья!!!❤️']);
      await attacker.print_and_wait([a_call_d, ' не сдерживает нежный стон.']);
      await attacker.print_and_wait([
        'Потом, будто опомнившись, резко отдёргивает голову; с пылающим лицом забирает язык обратно, и серебристая нить слюны капает на грудь.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Зубами кусаешь, оставляя красные следы; иногда жёстко впиваешься, чтобы ',
        a_call_d,
        ', что пытается оттолкнуть, обмякла.',
      ]);
      await defender.say_and_wait(['Нх… ублюдок❤️! От… брос! Насильник❤️!']);
      await attacker.print_and_wait([
        'Даже эти ругательства становятся вязкими и манящими.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} d_body_hair 被动方毛色
   */
  async missionary(attacker, defender, d_body_hair) {
    await defender.say_and_wait('Отброс! Не подходи, проваливай!');
    await defender.print_and_wait([
      'Пытаешься пнуть ногой — но легко хватают за щиколотку и поднимают вверх.',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait([
        'Вынуждая выставить самчью дыру, прикрытую ',
        d_body_hair,
        ' хвостом.',
      ]);
    } else {
      await defender.print_and_wait('Вынуждая выставить пошлую самчью дыру.');
    }
    await defender.print_and_wait([
      'Сведённые запястья этот тип тоже фиксирует — понимаешь, что сопротивляться уже полностью невозможно.',
    ]);
    await defender.say_and_wait('Хоооооооооо!!❤️');
    await defender.print_and_wait(
      'Ругань, сопротивление, окрики, которые должны были прозвучать, в миг входа жгучего члена превращаются в невероятно угодливый похотливый стон.',
    );
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_hair 被动方发色
   */
  async doggy_style(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      'Тянешь за руки ',
      a_call_d,
      ' — чуть силы, и ',
      defender.sex,
      ' вынуждена, как сука, поднять жопу и встать на колени.',
    ]);
    await attacker.print_and_wait([
      'Пытающаяся сопротивляться ',
      defender.race > 0 ? 'кобыла' : 'самка',
      ' нетерпеливо крутит задом, будто убегая — и одновременно будто сама манит.',
    ]);
    await attacker.print_and_wait([
      'Бёдра вперёд — член без остановки входит в киску ',
      a_call_d,
      '.',
    ]);
    await defender.say_and_wait(['Ииаааа❤️!']);
    await attacker.print_and_wait([
      'Как от тока выгибает спину, ',
      d_hair,
      ' колышутся.',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait(['Даже хвост встаёт торчком…']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('Хотела сбежать?');
    await attacker.print_and_wait([
      'Хватаешь ',
      a_call_d,
      ', что шатаясь вставала и пыталась убежать, за голень — один рывок, и она падает в объятия.',
    ]);
    await attacker.print_and_wait([
      'Член тяжело шлёпает по плоскому животу; даже низ живота, кажется, втягивается от страха.',
    ]);
    await attacker.print_and_wait([
      'Значит, непослушную девчонку надо наказать.',
    ]);
    await defender.say_and_wait(['Уаа… вытащи!']);
    await attacker.print_and_wait([
      defender.race > 0
        ? 'Талия резко выгибается, закалённые на ипподроме ноги крепко обвивают твою талию.'
        : 'Талия резко выгибается, ноги крепко обвивают твою талию.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hug_sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('Приятно, да?');
    await attacker.print_and_wait([
      'Прижимаешься сзади к ',
      a_call_d,
      defender.race > 0 ? ' — к стоящим лошадиным ушам — ' : ' — к уху — ',
      'и спрашиваешь.',
    ]);
    await defender.say_and_wait('Отброс! Извращенец!');
    await defender.say_and_wait('Нн-ааа❤️…');
    await attacker.print_and_wait([
      'Обрывочные возражения прерывает нежный похотливый стон; опущенная голова ',
      a_call_d,
      ' опускается ещё ниже.',
    ]);
    await attacker.print_and_wait([
      'Будто не хочет, чтобы ты видел, какое чудесное лицо делает ',
      defender.race > 0 ? 'кобыла' : 'самка',
      ', чья киска при каждом толчке так крепко сжимает.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async standing(attacker, defender, a_call_d) {
    if (defender.race > 0) {
      await attacker.print_and_wait([
        'И правда, скаковые ',
        defender.uma_sex_title,
        ' все как одна гибкие и хорошо держат равновесие.',
      ]);
    }
    await attacker.print_and_wait([
      'Только носок касается пола, мышцы внутренней стороны бедра растянуты, а правая нога медленно поднимается до горизонтали.',
    ]);

    await attacker.print_and_wait([
      'Изо всех сил удерживая ногу отведённой вбок, ',
      a_call_d,
      ' так и выставляет прямо перед ним тонкую талию и манящий бок с ягодицей.',
    ]);
    await attacker.print_and_wait([
      era.get(`cflag:${defender.id}:阴毛`) >= 1
        ? 'Прикрытая волосками'
        : 'Гладкая и милая',
      ' киска то раскрывается, то смыкается в такт напряжённому движению.',
    ]);
    await defender.say_and_wait('Доволен?.. Подонок!');
    await attacker.print_and_wait([
      'Похоже, это ещё не предел — и он сам берётся поправить положение: медленно поднимает державшуюся горизонтально правую ногу выше, пока та не встанет вертикально, в одну линию с левой.',
    ]);
    await defender.say_and_wait('Не, не трогай меня…');
    await attacker.print_and_wait([
      'Ствол входит напрямую, узкий мягкий ход раздвинут силой, раскалённая головка, не замечая слоёв извивающейся и сжимающейся плоти, ударяет в самую сердцевину.',
    ]);
    await defender.say_and_wait('…О-ох❤️!!');
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} d_body_hair 被动方毛色
   */
  async hug_standing(attacker, defender, d_body_hair) {
    await defender.print_and_wait([
      'Обеими руками упираешься в стену, высоко выпятив жопу, пытаясь спросить совсем без эмоций.',
    ]);
    await defender.say_and_wait(['Так сойдёт?']);
    await defender.print_and_wait([
      'Наверное, будет сзади… но всё же лучше, чем прижать к полу…',
    ]);
    await defender.print_and_wait([
      'Так медленно уговариваешь себя, пока на талии вдруг не появляется рука — потом щипки, заставляющие поднять жопу ещё выше.',
    ]);
    await defender.say_and_wait(['Гхух❤️!']);
    if (defender.race > 0) {
      await defender.print_and_wait([
        'Такая поза, в которой член может полностью пронзить киску, — для умамусумэ слишком грязный приём! Даже ',
        d_body_hair,
        ' лошадиный хвост хватают, как кнут, и хлещут по ягодицам.',
      ]);
    } else {
      await defender.print_and_wait(
        'Такая поза, в которой член может полностью пронзить киску, — слишком грязный приём!',
      );
    }
    await defender.print_and_wait([
      'Верх тела сразу обмякает от этих ударов; держат только руки, за которые тянут.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async suspended_congress(attacker, defender) {
    await defender.say_and_wait('Не надо… уаа!?');
    await defender.print_and_wait([
      'Пытаешься уклониться, но всё равно сзади подхватывают под сгиб колен.',
    ]);
    await defender.print_and_wait([
      'Гибкое тело почти складывают пополам, колени почти у плеч; ноги на плечах сильно качаются вверх-вниз в такт толчкам члена.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_hair 被动方毛色或发色
   */
  async hug_suspended_congress(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      'В такой позе ',
      a_call_d,
      ' вся будто висит на тебе.',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait([
        'Плюс в том, что член под своей тяжестью идёт прямо вглубь; ',
        d_hair,
        ' — умамусумэ насажена до упора, органы плотно смыкаются.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Плюс в том, что член под своей тяжестью идёт прямо вглубь; ',
        d_hair,
        ' — женщина насажена до упора, органы плотно смыкаются.',
      ]);
    }
    await defender.say_and_wait('Упаду! …Точно упаду!');
    await attacker.print_and_wait([
      'От невесомости и сильного удовольствия снизу ',
      a_call_d,
      ' почти теряет рассудок и рефлекторно обхватывает руками твою шею сзади.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_cowgirl(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'Оседлавшая его бёдра ',
      era.get(`cflag:${defender.id}:成长阶段`) < 5
        ? defender.teen_sex_title
        : defender.phy_sex_title,
      ' только приподнимается на руках и чуть двигает тазом, да ещё и ладонью зажимает губы — пытается делать вид, что всё в порядке.',
    ]);
    await attacker.print_and_wait([
      'А ведь когда киска только начала его заглатывать, крик был.',
    ]);
    await attacker.print_and_wait([
      'Что ж, похоже, придётся брать дело в свои руки.',
    ]);
    await attacker.print_and_wait([
      'Чуть приподнимает ей ягодицы — и под испуганный вскрик ',
      a_call_d,
      ' резко подаёт бёдра вверх.',
    ]);
    await defender.say_and_wait(['У-а❤️!!!']);
    await attacker.print_and_wait([
      'Под жалобный крик ',
      a_call_d,
      ' всё это повторяется снова и снова: толчок бёдрами, подъём и падение, круговое движение; душистый пот дождём капает на грудь, и мерный звук сталкивающихся тел разносится в воздухе.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_g_spot(attacker, defender) {
    await defender.say_and_wait(['Эй❤️! Не…❤️ не туда…❤️!']);
    await attacker.print_and_wait(['Значит, вот оно, чувствительное место?']);
    await attacker.print_and_wait([
      'Трёшь вздутыми венами члена или бьёшь самой головкой; от беспрерывного трения мякоть, полная нервов, весело дрожит и сжимается.',
    ]);
    await defender.say_and_wait('Гуоооо хоооооооо————❤️❤️❤️');
    await attacker.print_and_wait([
      'Будто проверяя догадку: женщина по имени ',
      defender.get_colored_name(),
      ' сама запрокидывает голову в высокий похотливый крик, жопа подставляется под толчки, чтобы член чаще бил по чувствительной точке.',
    ]);
    await attacker.print_and_wait([
      'Красивые глаза полуоткрыты; остатки рассудка и гордости уходят вместе с соками.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   * @param {string} d_skin_color 被动方肤色颜色
   */
  async continue_fucking(attacker, defender, a_call_d, d_call_a, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = 'цвета слоновой кости';
        break;
      case 0:
        skin_desc = 'белое-белое';
        break;
      case 1:
        skin_desc = 'румяное';
        break;
      case 2:
        skin_desc = 'светло-коричневое';
    }
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('Ско… ха-а❤️… перестань…');
      await defender.print_and_wait([
        'Набухший ствол безо всякой галантности ходит внутри неё, и ясно чувствуется, как бьётся налитая кровью жила, прижатая к складкам плоти.',
      ]);
      await defender.say_and_wait('У-ха… ммм❤️');
      await defender.say_and_wait('Нельзя… если так дальше…', true);
      await defender.print_and_wait([
        'Точно изящную мясную игрушку грубо вертят в руках: раскалённая головка и твёрдый как камень ствол скребут каждую складку внутри.',
      ]);

      await defender.print_and_wait(
        'И приносят не ожидаемую резкую боль, а волну за волной такое сладкое онемение, что мозг вот-вот отнимется.',
      );

      await defender.say_and_wait(
        'Нельзя❤️ больше так… если так дальше…',
        true,
      );
      await defender.say_and_wait('Если так дальше, я… кончу❤️', true);
      await defender.print_and_wait([
        'Хочется сопротивляться, но и потерявшее власть лицо, и вырывающееся сладкое дыхание, и вытянутые в струну тонкие пальцы ног — всё говорит: у тела не осталось ни капли запаса.',
      ]);
    } else {
      const message = [
        async () => {
          await defender.say_and_wait('О-о-гу-у-у!!');
          await attacker.print_and_wait([
            'Толстый ствол безжалостно ходит в самочьей дырке ',
            a_call_d,
            ', и та скулит в голос, а красивые зрачки закатываются.',
          ]);
          await attacker.print_and_wait([
            'Горячий толстый член ходит в киске и ворочается в ней; головка упирается в стенку хода, а вздёрнутый венчик всю дорогу трётся о нежную плоть и упирается прямо в сердцевину…',
          ]);
          await attacker.print_and_wait([
            'Разогнавшаяся до предела головка, смазанная соками, тяжело целует нежный зев матки — и даже на плоском животе проступают смутные очертания венчика.',
          ]);
          await defender.say_and_wait(['О! Пого… по… тише! Прошу…']);
          await attacker.print_and_wait([
            'В мозгу, залитом наслаждением, рождаются лишь обрывки слов, а вместе с ними из уголка рта стекает прозрачная капля.',
          ]);
        },
        async () => {
          await defender.print_and_wait([
            'Как тряпичная кукла, с которой делают что хотят; как послушная машина для секса, которая от каждого движения выдаёт похабный звук.',
          ]);
          await defender.print_and_wait([
            {
              color: d_skin_color,
              content: skin_desc,
            },
            ' — такое тело дрожит и извивается.',
          ]);
          await defender.say_and_wait(['У-у, у-а…']);
          await defender.print_and_wait([
            'Телу сейчас нужнее всего сила, чтобы вырваться из хватки ',
            d_call_a,
            ', но остатки этой силы наслаждение тратит на то, чтобы поджать пальцы ног.',
          ]);
          await defender.print_and_wait([
            'Ощущение, что тебя насилуют и берут силой, и наслаждение от ласк разом опускают ноги, ступни и всё тело до уровня той самой самочьей плоти, что ищет одного удовольствия.',
          ]);
          await defender.say_and_wait(['Ха-а!']);
          await defender.print_and_wait([
            'Изо рта сам вырывается совершенно бесстыдный стон — стыда в нём ни капли.',
          ]);
        },
      ];
      if (defender.race > 0) {
        message.push(async () => {
          await defender.say_and_wait('Ммаа… не надо… перестань… прошу… у-у…');
          await defender.print_and_wait([
            'Пусть губы и лепечут «не надо», тугая плоть внутри уже мягко обнимает вторгшегося, впуская член ещё глубже.',
          ]);
          await defender.print_and_wait([
            'Раскалённый зев матки снова и снова отзывается на удары ствола, венчик глубоко целует кольцо шейки, и даже пытающийся сомкнуться вход в матку вдавливается вверх.',
          ]);
          await defender.print_and_wait(
            'Вставшие торчком от наслаждения лошадиные уши слышат только однообразное «чвак-чвак» — это ствол выдавливает соки наружу.',
          );
          await defender.print_and_wait([
            a_call_d,
            ' понимает: гибкое тело, выкованное ради бега, сейчас — лучший станок, чтобы её трахать.',
          ]);
        });
      }
      await get_random_entry(message)();
    }
  },
};
