/**
 * @file 春乌拉拉 - 爱慕
 * @author 99
 * @desc 在某些条件下乌拉拉的好感度锁定融洽，所以所有好感度都作为参数传入
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    const title = 'Пробуждённая невинность';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {string} self_name 春乌拉拉的自称
     * @param {PrintedSpan} u_call_h 春乌拉拉对圣王光环的称呼
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      self_name,
      u_call_h,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        `Обычно к этому часу ${
          urara.name
        } давно уже должна была уснуть, но этой ночью маленькая ${urara.uma_sex_title} всё же как-то не сомкнёт глаз.`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `С кровати соседки то и дело доносятся глухие стоны, от которых лицо горит, — словно заклинание, и ${urara.sex} уносится мыслями куда-то неведомо куда…`,
      );
      era.drawLine();
      await urara.print_and_wait(
        `Ворочаясь на кровати, ${urara.name} мечется мыслями, словно лодчонку в бурю.`,
      );
      await urara.print_and_wait(
        `Если вот так закрыть глаза, кажется, снова приснится что-то невообразимое, как в прошлый раз, — как с ${self_name} выделывает всякое ${callname} и всё такое.`,
      );
      await urara.print_and_wait(
        `Впрочем, тот, кто так жадно валит ${self_name} — ${callname}, хоть и страшновато, но сейчас вроде можно и принять?`,
      );
      await urara.print_and_wait(
        `И бесстыдный вид той, что во сне обнимает ${callname}, ${urara.uma_sex_title} — будущая ${self_name} тоже станет… такой бесстыдной「${urara.phy_sex_title} 」?`,
      );
      await urara.print_and_wait(
        `Так, в равных объятиях: тогда ${callname} и ${self_name} — кто же кого жаждал…`,
      );
      await urara.print_and_wait(
        'Нельзя-нельзя, сейчас не время мечтать всякое! Надо спать как следует!',
      );
      await urara.print_and_wait([
        `Тогда пойти напомнить `,
        u_call_h,
        ` ? Но так ${urara.sex} точно разозлится, так что лучше ${self_name} ещё чуть постараться…`,
      ]);
      urara.print(
        'уу… тело такое горячее, даже сбросить одеяло — всё равно жарко…',
      );
      era.printButton(
        'Попробовать, только попробовать… (углубить отношения)',
        1,
      );
      era.printButton('нн… но так хочется спать… (пока не углублять)', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (urara.sex_code === 1) {
          await urara.print_and_wait(
            `Но едва пижама спала и рука потянулась к члену, ${urara.teen_sex_title} уже всем нежным телом готова к оргазму.`,
          );
        } else {
          await urara.print_and_wait(
            `Но едва пижама спала и рука забралась в киску, ${urara.teen_sex_title} уже всем нежным телом готова к оргазму.`,
          );
        }
        await urara.print_and_wait(
          `Всего одно лёгкое касание — и у маленькой ${urara.uma_sex_title} тело откликнулось яростнее, чем когда-либо, и неудержимое хлюпанье промочило простыню.`,
        );
        await urara.print_and_wait(
          `И даже крепко зажав рот, чтобы не вырвался звук, среди непрекращающейся дрожи слабый зов к ${callname} всё равно украдкой сбежал из-под натянутого одеяла.`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await urara.print_and_wait(
            'И сама не заметила, как вздыбившаяся от оргазма пара самочьей плоти уже нетерпеливо выдавливает молоко.',
          );
          await urara.print_and_wait([
            'Даже когда тело совсем разморило, сок сам собой всё ещё сочится из сосков — ',
            urara.teen_sex_title,
            ' уже насквозь промочила пижаму.',
          ]);
          era.println();
          era.set('palam:52:胸部快感', era.get('tcvar:52:胸部快感上限') * 0.75);
        }
        await urara.print_and_wait(
          `Тело отзывается непонятно как, ${self_name} чуть в панике, но желанию по-прежнему принадлежит полная власть над телом.`,
        );
        await urara.print_and_wait(
          `Пальцы бесконтрольно входят глубже, сладкие стоны не смолкают — и маленькая ${urara.uma_sex_title} тонет в вожделении к кому-то сильнее, чем когда-либо.`,
        );
        await urara.print_and_wait(
          `Словно юный зверёк, впервые вкусивший течку и жаждущий, чтобы взрослый самец его покорил, ${self_name} без устали крутит бёдрами под простынёй.`,
        );
        await urara.say_and_wait(
          `${callname}…уу… ${callname}, так грубо… нельзя уже, хаа…`,
        );
        await urara.print_and_wait(
          `Бред, будто кто-то подчиняет и мучает, длится, кажется, всю ночь, и ${self_name} даже не замечает, в какой миг уснула.`,
        );
        await urara.print_and_wait(
          `Когда ${urara.teen_sex_title} снова открыла глаза, уже следующий день — разбудил будильник.`,
        );
        await urara.print_and_wait(
          'Сняв желание, спит на удивление спокойно — не считая того, что с постелью совсем плохо, только вот—',
        );
        await urara.say_and_wait(
          `Не очень понимаю, но… ${callname}, так хочется… по-настоящему…`,
        );
        await urara.print_and_wait(
          `И пока ${urara.teen_sex_title} поднималась с постели, всё ещё не насытившись, слова 「какая бесстыдница」 снова тихо сорвались с губ…`,
        );
      } else {
        await urara.say_and_wait(
          `Завтра опять идти к ${callname}, так что лучше скорее спать…`,
        );
        await urara.print_and_wait(
          `Сдерживая разбуженное тело, изо всех сил оттянув хвост в сторону, маленькая ${urara.uma_sex_title} с трудом перевернулась на кровати.`,
        );
        await urara.print_and_wait(
          `Накрыв уши одеялом и подушкой и как следует помучившись, ${callname} наконец уснул(а) под прерывистые стоны соседки.`,
        );
        await urara.print_and_wait(
          `Но во сне маленькая ${urara.uma_sex_title} снова увидела того, кто смотрит на неё так, словно перед ним「${urara.phy_sex_title} 」 и так жаждет, что ${
            urara.sex
          } оказывается снизу — а это ${callname}……`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await urara.print_and_wait(
            'А когда проснулась, две непослушные большие белые крольчихи от течки во сне всё ещё бодро торчат.',
          );
          await urara.print_and_wait(
            'Белая жидкость с торчащих кончиков, пока хозяйка тонула в сне, насквозь промочила грудь пижамы.',
          );
          era.println();
        }
        await urara.print_and_wait(
          `Так, всю ночь опутанная разнузданными мокрыми снами, ${self_name}, на следующий день всё равно проспала.`,
        );
        await urara.say_and_wait(
          `Если бы ${self_name} прошлой ночью не терпела, спалось бы чуток лучше, наверное…`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  50: (() => {
    const title = 'Невинные влажные звуки';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Хотя не очень хочется это признавать…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но под поливом вожделения незрелый плод рано или поздно нальётся в яркое змеиное яблоко.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Так что же, срывать ли потом этот сладкий плод заранее…?',
      );
      era.drawLine();
      await era.printAndWait([
        'Так и не дождавшись, ',
        you.get_colored_name(),
        ' отправляется на поиски и без труда находит ',
        urara.get_colored_name(),
        ' в тени, где та пряталась.',
      ]);
      await era.printAndWait([
        'Словно закрыв уши на правду, с пылающим лицом ',
        urara.get_colored_name(),
        ' изо всех сил вжимает маленькое тело в тёмный, скрытый от света угол холла.',
      ]);
      await era.printAndWait([
        'Но даже несмотря на то, что их разделяет лишь стена, упивающаяся стыдливым наслаждением маленькая ',
        urara.uma_sex_title,
        ' всё равно не замечает, что ',
        you.get_colored_name(),
        ' уже совсем рядом.',
      ]);
      await era.printAndWait(
        'Ткань, которой полагалось сидеть ровно, лишь беспорядочно свисает с тела, а нежные чувствительные местечки без утайки открыты воздуху.',
      );
      if (urara.sex_code - 1) {
        await era.printAndWait(
          'Все десять пальцев изо всех сил исследуют каждый похотливый уголок тела, снова и снова вытягивая из розовой юной дырочки тягучие серебряные нити.',
        );
        await era.printAndWait([
          urara.teen_sex_title,
          'Её похотливые соки непрерывно капают, оставляя на гладком полу маленькую лужицу, полную запретного вожделения.',
        ]);
      }
      if (era.get('talent:52:乳房尺寸') >= 1) {
        await era.printAndWait(
          'А вместе с похотливыми соками проливается ещё и несколько капель запретной и неуместной молочной белизны.',
        );
        await era.printAndWait(
          'Плотно натянутый бандаж откинут, и пара набухших грудей, немного несоразмерных маленькому телу, открывается взгляду.',
        );
        await era.printAndWait(
          'Груди пышно и мягко обвисают, а торчащие вперёд ареолы и соски бесконтрольно источают белый сок.',
        );
        await era.printAndWait([
          'Даже если ',
          urara.teen_sex_title,
          ' складывает руки перед собой и изо всех сил поддерживает двух дрожащих от течки маленьких монстров, молочно-белые пятна под ней всё равно всё прибывают и прибывают.',
        ]);
        await era.printAndWait(
          'А эта пара мягкой, чувствительной до нового полового органа молочной чарующей плоти сама говорит: это крошечное тело давно уже готово —',
        );
        await era.printAndWait(
          'готово в какой-то будущий миг кормить грудью и готово превратить тугой животик в новый мешок для плода…',
        );
      }
      await era.printAndWait([
        'В этот миг ',
        urara.get_colored_name(),
        ' словно сочный крольчонок, по-детски выставляет все свои манящие слабые места перед затаившимся хищником.',
      ]);
      await urara.say_and_wait([
        'Уу… ',
        callname,
        '…… ',
        you.actual_name,
        '…Что же это такое… так хорошо, не остановиться…',
      ]);
      await era.printAndWait([
        'Под аккомпанемент нежного плачущего голоска, способного разжечь жажду покорить, ',
        urara.get_colored_name(),
        ' в непрерывных сладких стонах зовёт ',
        you.get_colored_name(),
        ' по имени.',
      ]);
      await era.printAndWait(
        'Прекрасно зная, что сейчас делает то, чего никто ни за что не должен увидеть, всё же не может сдержать стоны наслаждения.',
      );
      await era.printAndWait([
        'Ещё не распустившаяся ',
        urara.teen_sex_title,
        ', беспомощно и с ожиданием показывает невидимому кому-то самую постыдную сторону своего тела.',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          you.sex,
          'Ещё ждёт меня… нельзя же, вдруг ',
          you.sex,
          ' увидит — не надо…',
        ]);
        await era.printAndWait([
          'С похотливым выражением, будто мозг уже выжжен, ',
          urara.get_colored_name(),
          ' смешивая речь с влажными звуками, похотливо шепчет.',
        ]);
        await era.printAndWait([
          'Крошечная ',
          urara.uma_sex_title,
          ' сейчас словно одержима, без конца теребит тело, чувствительное так, что вспыхнет от одного прикосновения.',
        ]);
        await urara.say_and_wait([
          'Если ',
          callname,
          ' увидит, если ',
          you.actual_name,
          ' увидит, уу…',
        ]);
        await urara.say_and_wait(
          'Так хочется… но нельзя… голова сейчас станет странной —',
        );
      } else {
        await urara.say_and_wait([
          'Я же всё понимаю… ',
          callname,
          ' такой человек, но, ах, хаа…',
        ]);
        await era.printAndWait([
          'Хоть разум и сопротивляется, но павшая в вожделение маленькая ',
          urara.uma_sex_title,
          ' всё равно не может сама остановить пальцы яростной мастурбации.',
        ]);
        await era.printAndWait([
          'В этот миг ',
          urara.get_colored_name(),
          ' её ноги разъехались врозь восьмёркой, а спина от яростного наслаждения выгнулась до предела.',
        ]);
        await urara.say_and_wait([
          'Всё-таки я, ',
          urara.get_colored_name(),
          ', всё ещё хочу верить ',
          callname,
          ', хочу верить ',
          you.actual_name,
          '……',
        ]);
        await urara.say_and_wait([
          'Но… почему, стоит сейчас вспомнить ',
          callname,
          ', как тело —',
        ]);
      }
      await era.printAndWait(
        'В неудержимом крике оргазма крошечное, но развратное тело встречает яростную высшую точку.',
      );
      await era.printAndWait([
        'Брызжущая как при недержании смазка поливает пол, мочит туфли и наполовину снятые гольфы — ',
        urara.teen_sex_title,
        ' насквозь промочила и трусики, и защитные шорты.',
      ]);
      await era.printAndWait([
        'С временно выпущенным желанием ',
        urara.get_colored_name(),
        ' беспамятно прислоняется в углу у стены, уши и хвост бессильно свисают, расфокусированные глаза тупо смотрят куда-то.',
      ]);
      await era.printAndWait([
        'Вот только когда ',
        urara.sex,
        ' неуклюже пытается привести тело в порядок, ноги подкашиваются, и маленькая ',
        urara.uma_sex_title,
        ' всё равно съезжает и садится в ту лужу сока, что постепенно стынет под ней…',
      ]);
      await era.printAndWait([
        'Когда ',
        urara.get_colored_name(),
        ' неприлично одетая, в панике прибегает к ',
        you.get_colored_name(),
        ' на встречу, уже изрядно опоздав к уговору, но на этот раз ',
        you.get_colored_name(),
        ' так и не может даже выговорить напоминание в следующий раз быть аккуратнее.',
      ]);
      await era.printAndWait([
        'Чтобы подавить желание тут же сожрать ',
        urara.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' почти полностью исчерпывает силы, не говоря уже о том, чтобы смотреть прямо в то маленькое лицо, на котором всё ещё горит манящий румянец.',
      ]);
      await era.printAndWait([
        'Но не находя взгляду места, ',
        you.get_colored_name(),
        ' всё равно замечает: под растрёпанной юбкой подопечной прозрачная жидкость непрерывно течёт по краю насквозь мокрых трусиков и смачивает кромку гольфов…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-1': (() => {
    const title = 'Беспокойная любовь';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {string} self_name 春乌拉拉的自称
     * @param {PrintedSpan} u_call_h 春乌拉拉对圣王光环的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      self_name,
      u_call_h,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        'Перевернувшись на кровати, сегодняшняя маленькая ',
        urara.uma_sex_title,
        ' вроде бы и правда не может уснуть…',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'Томящаяся весенней любовью ',
        urara.teen_sex_title,
        ', какой бы юной ни казалась снаружи, внутри всегда такая переменчивая…',
      ]);
      era.drawLine();
      await urara.print_and_wait(
        'Опять, колотящееся сердце никак не успокоится, если забить — завтра снова не встанешь.',
      );
      await urara.print_and_wait(
        'Но чем сильнее заставляешь себя спать, тем чётче всплывает в голове то лицо.',
      );
      await urara.print_and_wait(
        'Даже если изо всех сил прижать уши и туго обмотать хвост вокруг талии, они всё равно начинают дрожать сами по себе.',
      );
      await urara.print_and_wait(
        'Это потому, что они рады? Но почему всегда так? Почему, стоит закрыть глаза, всегда видишь того знакомого человека?',
      );
      await urara.print_and_wait([
        'Тот, кто при первой встрече свалился прямо на глазах; тот, кто из‑за двух простых фраз едва знакомой ',
        urara.uma_sex_title,
        ' сразу пришёл на встречу; ',
      ]);
      await urara.print_and_wait([
        'тот, кто готов болеть за бегущую последней слабую ',
        urara.uma_sex_title,
        ' человека; тот, кто что бы ни случилось шёл вместе с никчёмной ',
        urara.sex,
        ' до сегодняшнего дня…',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          'А когда оглядываешься, уже не представить, как без ',
          callname,
          ' самой ',
          self_name,
          ' дойти до сегодняшнего дня.',
        ]);
        await urara.say_and_wait('Вот так — и правда очень повезло же…');
        await urara.print_and_wait([
          'Но если однажды потеряет ',
          callname,
          ' же? Даже если бежать ради всех, но оторвавшись от того человека, слабая ',
          self_name,
          ' ещё сможет продолжать…',
        ]);
        await urara.print_and_wait(
          'Так тревожно, будущее без той удачи такое страшное, но даже если это будущее можно предвидеть — что тогда?',
        );
        await urara.print_and_wait(
          'Потому что отношения подопечной и тренера однажды всё равно изменятся —',
        );
      } else {
        await urara.print_and_wait([
          'Даже если по будням их отношения выглядят не слишком хорошими, ',
          self_name,
          ' давно уже опирается на ',
          callname,
          '.',
        ]);
        await urara.say_and_wait([
          'И чувство рядом с ',
          callname,
          ' тоже совсем не плохо…',
        ]);
        await urara.print_and_wait([
          'Незаметно, ',
          callname,
          ' в сердце у ',
          self_name,
          ' занимает уже столько места, что даже сама удивилась.',
        ]);
        await urara.print_and_wait(
          'Хотя до сих пор немного растерянно, но если идти рядом — сердце колотится, а когда подбодрят — радуется так, что сама не ждала.',
        );
        await urara.print_and_wait([
          'Что же такое? ',
          self_name,
          ' к ',
          callname,
          ' чувства там, где и не знала, уже изменились?',
        ]);
      }
      urara.say(
        `Тогда чувства, которые я (Урара) испытываю, когда рядом ${you.sex}…`,
      );
      era.printButton(
        '「Всё-таки это чувства «любви»?」(повысить отношения)',
        1,
      );
      era.printButton(
        '「И-или всё же расположение подопечной к тренеру?」(пока не повышать)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.print_and_wait([
          'Тогда… неужели это и есть любовь? ',
          self_name,
          ' к ',
          callname,
          '?',
        ]);
        await urara.print_and_wait([
          'Хотя не до конца понятно, но, наверное, так и есть, а раз так, ',
          callname,
          ' полюбит ',
          self_name,
          ' ?',
        ]);
        await urara.print_and_wait([
          'Стоит подумать об этом — на сердце становится кисло, но… не представить, чтобы ',
          callname,
          ' сделает первый шаг и признается!',
        ]);
        await urara.print_and_wait([
          'Если так дальше, ничего не понимающая ',
          self_name,
          ' навсегда останется для ',
          callname,
          ' всего лишь ребёнком…',
        ]);
        await urara.say_and_wait(
          'Но примут или нет — от своего сердца всё равно не сбежать же!',
        );
        await urara.say_and_wait([
          'Даже если трудно, но если лукавить — потом точно пожалеет же! Это ',
          self_name,
          ' всё-таки знает!',
        ]);
        await urara.print_and_wait([
          '「',
          urara.actual_name,
          ' 」 никогда не была сильной ',
          urara.uma_sex_title,
          ', ',
          urara.sex,
          ' живёт всё теми же глупыми и наивными буднями, с сияющими всеми никак не сравнить…',
        ]);
        await urara.print_and_wait([
          'Но даже такая ',
          self_name,
          ' тем более должна, как когда бежит, изо всех сил к ',
          callname,
          ' сказать правду сердца.',
        ]);
        await urara.print_and_wait([
          'Тогда даже если не возьмёт первое место, даже если ',
          callname,
          ' откажет, сможет как всегда с лёгким сердцем принять —',
        ]);
        if (high_relation) {
          await urara.print_and_wait([
            'Потому что ',
            self_name,
            ' знает: ',
            callname,
            ' на самом деле отличный человек, и что все так любят — тоже не странно.',
          ]);
          await urara.say_and_wait(
            'С завтрашнего дня вслух и громко скажет «люблю» —',
          );
        } else {
          await urara.print_and_wait([
            'Даже если ',
            callname,
            ' слишком уж тот ещё человек, ',
            self_name,
            ' всё равно полюбила этого слишком уж ',
            callname,
            '.',
          ]);
          await urara.say_and_wait([
            'Что бы ни случилось, то, что любит ',
            callname,
            ' — этот факт не изменится…',
          ]);
        }
        await urara.say_and_wait([
          'Поэтому и я тоже наберусь храбрости, чтобы в какой-то день в будущем вместе с ',
          callname,
          ' стать —',
        ]);
        if (has_lover) {
          await urara.say_and_wait([
            'Даже если у ',
            callname,
            ', уже есть другая девушка?',
          ]);
          await urara.print_and_wait([
            'Только что решилась — и тут же, неизвестно откуда, пришёл этот вопрос, но уже готовая ',
            self_name,
            ' лишь стиснула губы под одеялом.',
          ]);
          await urara.say_and_wait(
            '…Я знаю, о? Так делать и не по праву, и это обязательно очень скверно, и всем будет больно…',
          );
          await urara.say_and_wait(
            'Но если обманывать себя — тогда ничего не изменится.',
          );
          await urara.say_and_wait([
            'Хотя ',
            self_name,
            ' глупая, и многого ещё не понимает, но ',
            self_name,
            ' не трусиха.',
          ]);
          await urara.say_and_wait([
            'Я не убегу, чтобы и в следующий раз с гордо поднятой головой быть с ',
            callname,
            ' вместе —!',
          ]);
        }
      } else {
        await urara.say_and_wait([
          'Ну! Всё-таки всё как всегда, ',
          self_name,
          ' и ',
          callname,
          ' всё ещё самые обычные отношения… наверное?',
        ]);
        await urara.print_and_wait([
          'Хотя всё кажется, будто что-то забылось, а может, маленькая ',
          urara.uma_sex_title,
          ' всё ещё не до конца поняла свои чувства.',
        ]);
        await urara.print_and_wait([
          'После того как огромные чувства так долго сжимались в обыденность, ',
          self_name,
          ' всё-таки дошла до предела зависания.',
        ]);
        await urara.print_and_wait([
          'Голова кругом, ',
          self_name,
          ' снова возлагает надежду на надёжную соседку по комнате, может, ',
          urara.sex,
          ' даст какой-то совет?',
        ]);
        await urara.say_and_wait([
          'Впрочем, рядом ',
          u_call_h,
          ' уже спит, а ведь обычно это ',
          self_name,
          ' засыпает первой?',
        ]);
        await urara.say_and_wait([
          'Ну, не надо больше крутить это в голове ',
          self_name,
          ', лучше скорее спать, а то снова сил не будет.',
        ]);
        await urara.print_and_wait([
          'Но телу всё ещё так жарко, может, ещё разок вот это? Скинуть одеяло, пижаму тоже всю снять…',
        ]);
        await urara.say_and_wait('Нн~ хаа…');
        await urara.print_and_wait([
          'Дрожащей рукой снова глубоко проникает в чувствительное место маленькая ',
          urara.uma_sex_title,
          '. Перед глазами ',
          urara.sex,
          ' снова видит того человека, что, жаждая её тела, обернулся зверем.',
        ]);
        await urara.print_and_wait([
          'Тело уже не знает, в который раз кончает, и больше не в силах думать ',
          self_name,
          '  глубоко засыпает на смятой постели…',
        ]);
        await urara.say_and_wait('……');
        await urara.print_and_wait([
          'Выплеснув желание и бросив думать, маленькая ',
          urara.uma_sex_title,
          ' снова на время выгоняет эту мысль из головы.',
        ]);
        await urara.print_and_wait([
          'Но ',
          urara.teen_sex_title,
          ' тоже не сможет вечно игнорировать свои чувства, и, пожалуй, не пройдёт много времени, как ',
          urara.sex,
          ' снова запутается в этих вопросах.',
        ]);
        await urara.print_and_wait([
          'Впрочем, по крайней мере в последнее время ни ',
          you.get_colored_name(),
          ' , ни ',
          urara.sex,
          ' уже не нужно бояться, что кто-то внезапно не уснёт.',
        ]);
        await urara.print_and_wait([
          'Вот только засыпать совсем голой — наутро бедную 「маму-соседку」 точно напугает.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-2': (() => {
    const title = (urara) => ['К так долго ждавшей ', urara.sex];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (urara, inner_urara, you, high_relation, has_lover) => {
      await era.printAndWait([
        ' Может, потому что в тот день случилось столько всего, ',
        you.get_colored_name(),
        ' и ',
        urara.get_colored_name(),
        '  наконец получают шанс побыть наедине — небо уже постепенно темнеет.',
      ]);
      await era.printAndWait([
        'В памяти ',
        urara.get_colored_name(),
        '  поднимает голову к ночному небу, маленькая ',
        urara.uma_sex_title,
        ' тихо считает звёзды, а на вишнёвых зрачках рассыпаны крупицы звёздного света.',
      ]);
      await era.printAndWait([
        'Только сегодняшняя маленькая ',
        urara.uma_sex_title,
        ' всё ещё немного без настроения, уши и хвост лишь задумчиво свисают.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '  конечно знает, почему: даже если память ошибётся, время и пережитое вдвоём никогда не солгут.',
      ]);
      await era.printAndWait([
        'Хочется взять ',
        urara.get_colored_name(),
        '  за руку, хочется увидеть ',
        urara.get_colored_name(),
        '  улыбку, хочется с ',
        urara.get_colored_name(),
        '  шагнуть дальше…',
      ]);
      await era.printAndWait([
        'Даже с рассудком на уме лишь то, что ',
        urara.sex,
        ' всё ещё ждёт чьего-то ответа, и в мыслях уже нет места ничему другому.',
      ]);
      await era.printAndWait([
        'Подопечная всё такая же, как всегда, так что неладное лишь в тренере, что прячется за отговоркой 「осторожность в речах и поступках」.',
      ]);
      await era.printAndWait([
        'Теперь уже, даже накладывая ошибку на ошибку, подлый взрослый истратил все козыри.',
      ]);
      await era.printAndWait([
        'Ну что, решение есть? Впрочем, даже если ещё кажется, что не готов(а), жизнь не даст двух одинаковых ночей.',
      ]);

      await era.printAndWait([
        'Под торопливым звёздным небом ',
        you.get_colored_name(),
        '  наконец —',
      ]);
      era.printButton('Самому взять Урару за руку.', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '  мягко берёт за руку ту, что рядом, а в ответ после лёгкой заминки — тёплое ответное сжатие.',
      ]);
      await era.printAndWait([
        'Тихо скользнув взглядом в сторону, молчаливая ',
        urara.get_colored_name(),
        '  наконец дарит ',
        you.get_colored_name(),
        '  улыбку.',
      ]);
      await era.printAndWait([
        'Хоть всё ещё крошечная ',
        urara.sex,
        ', но почему-то именно сейчас проявляет недетскую спокойность.',
      ]);
      await era.printAndWait([
        'С лицом, будто чуть-чуть всё понимает, совсем как тогда, когда ',
        urara.get_colored_name(),
        '  сама призналась в любви.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          'Хоть чуть позже, чем думала, Урара всё равно вот так любит тренера!',
        );
        await era.printAndWait([
          'Прижавшись рядом, отвечает на ',
          you.get_colored_name(),
          '  чувства, ',
          urara.get_colored_name(),
          '  невольно улыбается.',
        ]);
        await urara.say_and_wait([
          'Прошу любить и жаловать…? Хе-хе~ Ураре такое и правда не идёт!',
        ]);
      } else {
        await urara.say_and_wait([
          'О чём думаешь? Ведь уже так поздно… Ну, в общем, вот так, тренер!',
        ]);
        await era.printAndWait([
          'Хоть всегда есть немного недовольства и тревоги, ',
          urara.get_colored_name(),
          '  всё равно тихонько смеётся.',
        ]);
        await urara.say_and_wait(
          'Если чуть помедленнее — все же не заволнуются?',
        );
      }
      era.println();
      if (has_lover) {
        await urara.say_and_wait(
          'Но, тренер, ночью на дороге правда темно же. Не провожай домой только других, ладно?',
        );
        await urara.say_and_wait(
          'Если вдруг отпустишь — Урара, глядишь, и потеряется…',
        );
        era.println();
      }
      await era.printAndWait([
        'По дороге назад шаги двоих, ставших возлюбленными, сами собой замедляются.',
      ]);
      await era.printAndWait([
        'Ещё в пору наивности маленькая ',
        urara.uma_sex_title,
        ' и тренер уже взрослого возраста — какой бы ни был разрыв, всё равно выбирают друг друга.',
      ]);
      await era.printAndWait([
        'Ночная дорога впереди, неясно, докуда идти, — может, все и заволнуются.',
      ]);
      await era.printAndWait([
        'Впрочем, лишь бы до комендантского часа благополучно вернуться, да? Вспоминая ту дорогу домой, ',
        urara.teen_sex_title,
        ' закрывает ',
        urara.sex,
        ' изрисованные вдоль и поперёк записи.',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        'Пусть будущие Урара и тренер, что бы ни случилось, не заблудятся в ночи.',
        true,
      );
      await inner_urara.say_as_unknown_and_wait([
        'Вспоминая крупицы звёздного света того дня, крошечная ',
        urara.uma_sex_title,
        ' вот так молится.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-3': (() => {
    const title = 'К тебе, кто сделал выбор';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'Сидя за своим рабочим столом над бумагами, ты вспоминаешь сегодняшнюю неожиданную встречу с Урарой.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но назвать это неожиданностью тоже не совсем верно: ведь и до того ты никогда не видел(а) Урару столь 『во всеоружии』.',
      );
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '! А насчёт любви, ',
        callname,
        ' , что думаешь об Ураре?',
      ]);
      await era.printAndWait([
        'Едва услышав этот вопрос, ',
        you.get_colored_name(),
        '  чуть не решает, что это галлюцинация, или что ',
        urara.get_colored_name(),
        '  переняла у кого-то странную шутку?',
      ]);
      await era.printAndWait([
        'Но когда за столом ',
        you.get_colored_name(),
        '  оборачивается и видит: маленькая ',
        urara.uma_sex_title,
        ' стоит прямо за спиной и подаётся ближе с лицом, каким бывает в борьбе за большие призы.',
      ]);
      await era.printAndWait([
        'К обычному ладу это не имеет отношения, и сомнению тоже нет места: ',
        urara.get_colored_name(),
        '  и ',
        you.get_colored_name(),
        '  втискиваются на один стул.',
      ]);
      await era.printAndWait([
        'словно вот-вот возьмёт первое место, ',
        urara.get_colored_name(),
        '  хозяйски уселась на ',
        you.get_colored_name(),
        ' — бёдрах, всем телом прижавшись спереди к тренеру подопечной.',
      ]);
      await urara.say_and_wait([
        'Так что ',
        callname,
        '!Что ты на самом деле думаешь об Ураре? Урара хочет знать прямо сейчас!',
      ]);
      await era.printAndWait([
        'Между вишнёвыми зрачками и ',
        you.get_colored_name(),
        ' — вплотную, маленькая ',
        urara.uma_sex_title,
        ' с серьёзной улыбкой снова спросила ',
        you.get_colored_name(),
        ' .',
      ]);
      await era.printAndWait([
        'Только вот сейчас ',
        urara.get_colored_name(),
        '  перекрыла путь к отступлению ',
        you.get_colored_name(),
        '  это не застало врасплох — напротив, ',
        you.get_colored_name(),
        '  быть может, и в глубине души было ясно, что такой день может настать.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' — ',
        urara.sex,
        ' — тренер, даже ',
        urara.get_colored_name(),
        '  способна разглядеть эти чувства, и даже если не решается признать, ',
        you.get_colored_name(),
        '  тоже знает, что они есть.',
      ]);
      await era.printAndWait(
        'А насколько близко они сейчас — это лишь 「тайна полишинеля」, известная в том числе и окружающим.',
      );
      await era.printAndWait(
        'Воспоминание здесь на миг замешкалось, но ни ожидание, ни сомнение не должны прятаться от чувств подопечной.',
      );
      await era.printAndWait([
        'К тому же даже сама заговорившая об этом ',
        urara.get_colored_name(),
        '  ни капли не растерялась.',
      ]);
      era.println();
      inner_urara.say_as_unknown([
        'Перед спокойно ждущей ',
        urara.get_colored_name(),
        ', тренер ',
        you.adult_sex_title,
        ' (вы) тогда сделали выбор —',
      ]);
      era.printButton(`Обнять ${urara.name}`, 1);
      era.printButton('「Сейчас ещё нельзя…」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'После мгновения колебаний ',
          you.get_colored_name(),
          '  заключил(а) ',
          urara.get_colored_name(),
          '  в объятия.',
        ]);
        await urara.say_and_wait(
          'эх-хе-хе~ Поставила же тренера в трудное положение, но тренер и правда выбрал Урару, так радостно…',
        );
        await era.printAndWait([
          'Напряжённое тело в ',
          you.get_colored_name(),
          ' — объятиях постепенно размякло, ',
          urara.get_colored_name(),
          '  похоже, тоже из-за ',
          you.get_colored_name(),
          ' — выбора выдохнула с облегчением.',
        ]);
        await era.printAndWait([
          'Хоть это немного и не похоже на обычную ',
          urara.get_colored_name(),
          ' , но как ',
          urara.sex,
          ' — тренер ',
          you.get_colored_name(),
          '  тоже знает, почему.',
        ]);
        await era.printAndWait([
          'Малышка, пусть и простовата, всё же понимает, какая она「',
          urara.uma_sex_title,
          ' 」, ',
          urara.sex,
          ' На самом деле ей всегда не хватало чувства безопасности, просто она редко это показывает.',
        ]);
        await era.printAndWait([
          'А обнять「',
          urara.get_colored_name(),
          ' 」 — зачем? Вроде и ответить можно, но из-за тех неправедных желаний язык не поворачивается.',
        ]);
        await era.printAndWait(
          'Например, при первой встрече некий взрослый на теле девушки, с которой делил постель, ощутил покой и ласку?',
        );
        await era.printAndWait(
          'И подбадривание ученицы, без которого не сыскать почти забытый порыв идти вперёд, и на ученице же — вожделенное извращённое тепло.',
        );
        await era.printAndWait([
          'С ',
          urara.get_colored_name(),
          '  заключивший договор тренер — кроме огня в сердце, который ',
          urara.get_colored_name(),
          '  снова разожгла, всё прочее, быть может, сплошь нечистые помыслы.',
        ]);
        await era.printAndWait([
          'Но это всё неважно: какие бы сложные чувства ни вместились, пережитое вместе с ',
          urara.get_colored_name(),
          '  ничуть не фальшиво.',
        ]);
        era.println();
        if (high_relation) {
          await urara.say_and_wait(
            'Тренер, не унижай себя из-за Урары, ну? Потому что это тоже выбор, который сделала Урара.',
          );
          await era.printAndWait([
            'В воспоминании ',
            urara.get_colored_name(),
            '  протянула успокаивающую маленькую руку и потеребила ',
            you.get_colored_name(),
            ' — нерешительность на щеке.',
          ]);
          await era.printAndWait([
            'С лицом, будто чуть-чуть всё понимает, ',
            urara.get_colored_name(),
            '  ответила привычной улыбкой на ',
            you.get_colored_name(),
            ' — объятие.',
          ]);
          await urara.say_and_wait(
            'Когда сердца понимают друг друга — это здорово, мама тоже так говорила! И Урара же не навсегда останется маленькой, ну?',
          );
          await era.printAndWait(
            'Верно, теперь уже не нужно колебаться: те, кто любят друг друга, уже рядом.',
          );
        } else {
          await urara.say_and_wait(
            'Беспокоишься? Но что бы ни случилось, Урара уже полюбила тренера…',
          );
          await era.printAndWait([
            'В воспоминании ',
            urara.get_colored_name(),
            '  хоть выражение только что и было сложным, сейчас всё же с облегчением взяла в ладони ',
            you.get_colored_name(),
            ' — щёки.',
          ]);
          await era.printAndWait([
            'С видом, с которым уже не отступит, девушка храбро ответила на ',
            you.get_colored_name(),
            ' — любовь, в которую, быть может, замешана примесь.',
          ]);
          await urara.say_and_wait(
            'Можно больше не терпеть, тренер: Урара, которая сделала выбор, вот она, рядом с тренером…!',
          );
          await era.printAndWait('Да, теперь уже больше не за что винить…');
        }
        era.println();
        if (has_lover) {
          await urara.say_and_wait(
            'Но теперь, даже если все назовут Урару подлой, назад уже нельзя, ну…',
          );
          await era.printAndWait([
            'Мягко сжавшись в ',
            you.get_colored_name(),
            ' — объятиях, ',
            urara.get_colored_name(),
            '  вдруг прислонилась к ',
            you.get_colored_name(),
            ' — груди и тихо сказала.',
          ]);

          era.printButton('「——」', 1);
          await era.input();

          await era.printAndWait([
            'Только когда ',
            you.get_colored_name(),
            '  выбили из колеи внезапным натиском, ',
            urara.get_colored_name(),
            '  снова покачала головой и нежно успокоила любимого.',
          ]);
          await urara.say_and_wait(
            'Всё хорошо, ну? Урара вовсе не хочет винить тренера: Урара же ещё до того уже была готова.',
          );
          await era.printAndWait('И следом снова — улыбка, словно у ангела.');
          era.println();
        }
        await urara.say_and_wait(
          'И дальше давай всегда любить друг друга, тренер!',
        );
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          'Вспоминая ту крошечную, верную теплоту и мягкость Урары в объятиях, прекрасное воспоминание на время подошло к концу.',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Повод порадоваться? Нет, я не говорю с издёвкой: я тоже хочу верить, что вы будете счастливы.',
        );
      } else {
        await urara.say_and_wait(
          'И правда, вопрос Урары был слишком внезапный! Нельзя же так ставить тренера в тупик!',
        );
        await era.printAndWait([
          'Пока ',
          you.get_colored_name(),
          '  ещё думал, как сказать помягче, ',
          urara.get_colored_name(),
          '  заговорила первой.',
        ]);
        await urara.say_and_wait(
          'Всё-таки тренер — взрослый, взрослые же думают о большем! Тогда Урара и спрашивать не будет!',
        );
        await urara.say_and_wait(
          'Так что потом, если тренер когда-нибудь всё обдумает, обязательно скажи Ураре!',
        );
        era.println();
        if (high_relation) {
          await era.printAndWait([
            'Без тени обиды, просто улыбается как всегда, маленькая ',
            urara.uma_sex_title,
            ' просто потянула тренера за щёку.',
          ]);
          await urara.say_and_wait(
            'Но Урара и не собирается сдаваться! Урара будет ждать и дальше! Тренер уже догадался, да?',
          );
          await urara.say_and_wait(
            'Урара будет ждать, пока тренер не решит, что принять Урару — это нормально!',
          );
        } else {
          await era.printAndWait([
            'Но едва договорив, сразу немного сникла, ',
            urara.get_colored_name(),
            '  и вяло забилась в ',
            you.get_colored_name(),
            ' — объятия.',
          ]);
          await urara.say_and_wait(
            'Тренер знает, сколько Ураре ждать? Хотя тренер Ураре не скажет…',
          );
          await urara.say_and_wait(
            'Если бы Урара была понапористее, тренер бы сейчас согласился? Шучу…',
          );
        }
        era.println();
        await era.printAndWait(
          'Хотя ещё неизвестно, наступит ли тот день, но и так верно: пока лучше оставить как есть, сейчас ещё не время—',
        );
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          'Так что до тех пор, даже если «у моста лодка сама выпрямится», как тогда быть с отношениями двоих?',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Лениво покачиваясь на стуле, ты и Урара так провели какое-то время — праздное и вместе с тем полное тяжёлых мыслей.',
        );
        await inner_urara.say_as_unknown_and_wait('……');
        await inner_urara.say_as_unknown_and_wait(
          'Уже не понять, о чём вы думаете; раз дело зашло так далеко, разве есть причина не соглашаться?',
        );
        await inner_urara.say_as_unknown_and_wait(
          '…Простите, что сказала лишнее. В общем, вы потрудились.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  75: (() => {
    const title = 'Любовь, что постепенно проясняется';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {PrintedSpan|false} u_call_r 春乌拉拉对米浴的称呼，当米浴的爱慕值不足时为 false
     * @param {PrintedSpan|false} u_call_h 春乌拉拉对圣王光环的称呼，当圣王光环的爱慕值不足时为 false
     */
    const f = async (
      urara,
      inner_urara,
      you,
      high_relation,
      u_call_r,
      u_call_h,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'Даже если прятать, чувства когда-нибудь да расцветут и принесут плоды.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Тогда вы, пребывающие в настоящем продолженном, прошу, слушайте вопрос—',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Почему ворон похож на письменный стол?',
      );
      era.drawLine();
      await urara.print_and_wait([
        'Увидев спящего на скамейке в углу ',
        you.get_colored_name(),
        ', прибежавшая Урара осторожно приглушила шаги.',
      ]);
      await urara.say_and_wait(
        'Э? Тренер опять плохо спал ночью? Тогда тихонько…',
      );
      await urara.print_and_wait([
        'Приглушив голос, тихонько подошла к ',
        you.get_colored_name(),
        '  рядом, Урара тоже села на скамейку и, тихо ожидая, смотрела на ',
        you.get_colored_name(),
        ' — спокойный профиль.',
      ]);
      await urara.print_and_wait([
        'Тело постепенно теплело, тёплые чувства снова взяли верх; из опыта, что с самой встречи всё больше её наполнял, нынешняя Урара уже вполне понимала, откуда этот трепет.',
      ]);
      await urara.say_and_wait(
        'Если подумать, сейчас тренер такой же, как при первой встрече, прямо судьба какая-то.',
      );
      await urara.print_and_wait([
        'Медленно приблизилась к спящему ',
        you.get_colored_name(),
        ', приложила ухо к ',
        you.get_colored_name(),
        ' — телу, Урара слушала ',
        you.get_colored_name(),
        ' — дыхание и сердцебиение.',
      ]);
      await urara.print_and_wait([
        you.get_colored_name(),
        ' — подопечная снова вспомнила ',
        you.get_colored_name(),
        '  при первой встрече, ',
        you.get_colored_name(),
        '  в тот день свалился от чрезмерных усилий.',
      ]);
      await urara.print_and_wait([
        'Только в этом повторении встречи и тело, и душа Урары по сравнению с самым началом изменились до основания.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          'Раньше ещё не понимала, а теперь… я и правда люблю тренера.',
        );
        await urara.print_and_wait([
          'Спокойно прижалась к ',
          you.get_colored_name(),
          '  рядом, Урара, словно дитя, нашедшее дорогу домой, тихо обняла спящего ',
          you.get_colored_name(),
          '.',
        ]);
        await urara.print_and_wait([
          'маленькая ',
          urara.uma_sex_title,
          ' чуть более высокая, чем у людей, температура вместе с объятием, полным любви, влила привычное тепло в ',
          you.get_colored_name(),
          ' — тело.',
        ]);
        await urara.print_and_wait([
          'Потому что тренер изменил бег Урары, потому что тренер дал Ураре радость первого места;',
        ]);
        await urara.print_and_wait([
          'потому что тренер изменил жизнь Урары, потому что тренер дал Ураре открыть ещё больше любви, поэтому…',
        ]);
        await urara.say_and_wait('Пусть и дальше я всегда, всегда люблю тебя—');
      } else {
        await urara.say_and_wait(
          'Тренер, я ведь всегда могу тебе доверять, да?',
        );
        await urara.print_and_wait([
          'Влажным взглядом смотрела на всё ещё спящего ',
          you.get_colored_name(),
          ', из уст Урары шептался вопрос, на который она не ждала ответа.',
        ]);
        await urara.print_and_wait([
          'маленькая ',
          urara.uma_sex_title,
          ' просто уговаривала себя чуть набраться храбрости и ещё ближе придвинуться к этому, из-за кого ',
          urara.sex,
          ' чувствовала лёгкую тревогу, предмету обожания.',
        ]);
        await urara.print_and_wait([
          'Как и ',
          urara.sex,
          ' — первый бег: даже если его могут не ценить, ',
          urara.sex,
          ' всё равно хотела всей душой обнять эту неспокойную любовь.',
        ]);
        await urara.print_and_wait([
          'Пусть ',
          urara.sex,
          ' ещё только в возрасте бутона, пусть это чувство, быть может, просто бросят, пусть в конце ',
          you.get_colored_name(),
          '  …',
        ]);
        await urara.say_and_wait('Только не просыпайся сейчас—');
      }
      era.println();
      await urara.say_and_wait('чмок…');
      await urara.print_and_wait([
        'С пылко влюблённой чистой ',
        urara.teen_sex_title,
        ' — стыдливостью и храбростью лёгкий поцелуй подопечной лёг на вот-вот просыпающийся ',
        you.get_colored_name(),
        ' — лоб.',
      ]);
      await urara.print_and_wait([
        'Это было не самое пылкое признание; тем, чему научилась, взрослея, Урара ',
        urara.sex,
        ' понятую 「настоящую любовь」 посвятила ',
        you.get_colored_name(),
        '.',
      ]);
      era.drawLine();
      await urara.print_and_wait([
        'А медленно проснувшийся в знакомом аромате ',
        you.get_colored_name(),
        ', тоже ясно ощутил нежную, но весомую любовь подопечной.',
      ]);

      era.printButton('「……!」', 1);
      await era.input();

      await urara.say_and_wait(
        'Эх-хе-хе~ всё-таки тренер увидел, прости, тренер!',
      );
      await era.printAndWait([
        'Пойманная ',
        you.get_colored_name(),
        '  Урара, словно ребёнок, которого поймали на шалости, явила стыдливую улыбку разоблачения, и в этот миг ',
        urara.teen_sex_title,
        ' с проступившим на щеках лёгким влажным румянцем стыда была милее, чем когда-либо.',
      ]);
      await urara.say_and_wait(
        'Хоть и не получается хорошо описать, но вот так лучше всего подходит к тому, что я сейчас чувствую к тренеру!',
      );
      await era.printAndWait([
        'Села лицом к лицу на ',
        you.get_colored_name(),
        ' — колени, ещё чуть неуклюжая маленькая возлюбленная ',
        you.get_colored_name(),
        '  серьёзно клялась в своих чувствах.',
      ]);
      await urara.say_and_wait(
        'То, что хочу сказать тренеру своими устами… хоть сейчас не получается хорошо выразить, но потом я точно смогу!',
      );
      await urara.say_and_wait(
        'Так что, тренер, подожди ещё меня, подожди ещё Урару!',
      );
      await era.printAndWait([
        'Стараясь, обращалась к ',
        you.get_colored_name(),
        '  с рвущимися из сердца словами; ещё не до конца выросшая девочка изливала любовь, которую пока не могла описать целиком.',
      ]);
      await era.printAndWait([
        'Но даже если не удалось выразить всё как следует, чувства, которые Урара хотела передать, сейчас ',
        you.get_colored_name(),
        '  уже давно понимает сердцем.',
      ]);

      era.printButton('「Я понимаю. Именно поэтому я тоже жду Урару.」', 1);
      await era.input();

      await era.printAndWait([
        'По своей воле берёт ',
        urara.teen_sex_title,
        ' — руку, глядя прямо в пару влажных вишнёвых глаз, ',
        you.get_colored_name(),
        '  не раздумывая дарит Ураре 「взрослое обещание」.',
      ]);
      await era.printAndWait([
        'Сегодняшние мы, и мы отныне — быть может, только сейчас всё начинается.',
      ]);
      if (u_call_r || u_call_h) {
        era.println();
        await era.printAndWait([
          'Вот только в миг, когда тренер ',
          you.adult_sex_title,
          ' отводит взгляд, маленькая ',
          urara.uma_sex_title,
          ' в чистой улыбке мелькнула едва заметная тень.',
        ]);
        await era.printAndWait([
          'Глядя на профиль самого любимого человека, ',
          urara.teen_sex_title,
          ' — в голове в самый неподходящий момент всплывает самая неподходящая картина.',
        ]);
        await era.printAndWait([
          'То была память, которую маленькая ',
          urara.sex,
          ' меньше всего хочет вспоминать: всякий раз, когда её раскрывают, грудь сжимает, ноги путает, и остаётся лишь провожать взглядом уходящих.',
        ]);
        if (u_call_r) {
          await urara.say_and_wait(
            [
              u_call_r,
              '  тоже вот так любит тренера, и тогда ',
              u_call_r,
              '  тоже наверняка сделает с тренером то же самое! Вот так выразит тренеру… любовь?',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              'Идущая рядом с тренером『',
              u_call_r,
              ' 』, близкая с тренером『',
              {
                color: u_call_r.color,
                content: ' Райс Шауэр-сан',
                fontWeight: 'bold',
              },
              '』, чьи силуэты с тренером наложились『',
              {
                color: u_call_r.color,
                content: ' Чёрная——',
                fontWeight: 'bold',
              },
              '』……!',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              'Но ',
              u_call_r,
              '  вовсе не такая, ',
              u_call_r,
              '  —『герой』для всех! Да и ',
              urara.sex,
              ' уже получила обещание тренера, так ведь…',
            ],
            true,
          );
        }
        if (u_call_h) {
          await urara.say_and_wait(
            [
              u_call_h,
              '  и правда любит тренера, и, может, правда больше подходит стоять рядом с тренером, чем ещё наивная Урара, но…',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              'С невиданным прежде выражением『',
              u_call_h,
              ' 』, обнимающаяся с тренером『',
              {
                color: u_call_h.color,
                content: ' Кинг Хэйло-сан',
                fontWeight: 'bold',
              },
              '』, всё ближе к тренеру『',
              {
                color: u_call_h.color,
                content: ' Третьесортная——',
                fontWeight: 'bold',
              },
              '』……!',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              'Неправда! Это совсем не так! ',
              u_call_h,
              '  лучше всех! ',
              u_call_h,
              '  больше всех достойна тренера, так ведь…',
            ],
            true,
          );
        }
        if (u_call_r && u_call_h) {
          era.println();
          await urara.say_and_wait(
            'Те двое и правда любят тренера… но так плохо… плохо — голова болит… плохо — тошнит…',
            true,
          );
          await urara.say_and_wait(
            'Но почему Ураре плохо, разве Урара не должна радоваться?',
            true,
          );
          await urara.say_and_wait(
            'Почему Урара хочет проклясть лучших подруг… но ревновать — у Урары, что пришла позже, нет на это права, так ведь…?',
            true,
          );
        }
        era.println();
        await urara.say_and_wait(
          'Хочется вклиниться сзади, хочется разрушить любовь подруг, — а тот злобный гад, что на самом деле творит плохое, это…?',
          true,
        );
        await urara.say_and_wait(
          'Кажется, будто что-то забыла, ведь не должно быть так, но тренер сказал, что будет ждать Урару! Но тренер…!',
          true,
        );

        era.printButton('「Урара? Что такое? Тебе нехорошо?」', 1);
        await era.input();

        await era.printAndWait([
          'Услышав ',
          you.get_colored_name(),
          ' — зов, и едва заметный хаос на лице Урары рассеялся легче пёрышка.',
        ]);
        await era.printAndWait([
          'Но оно не прекрасно, и однажды корневищами станет грызть ',
          urara.teen_sex_title,
          ' — душу: чёрное семя уже зарыто в сердце Урары.',
        ]);
        await urara.say_and_wait('Прости… но Урара уже…');
        await era.printAndWait([
          'Урара шагнула вперёд и взяла ',
          you.get_colored_name(),
          ' — протянутую руку, и под светлой улыбкой извинение, полное комплекса неполноценности, исчезло в ветре за их спинами…',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  '89-1': (() => {
    const title = 'Решимость больше не оборачиваться';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} u_call_h 春乌拉拉对圣王光环的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      u_call_h,
      high_relation,
      has_lover,
    ) => {
      await urara.print_and_wait(
        'Опять так, да? Если Урара закроет глаза, непременно что-нибудь случится, правда?',
      );
      await urara.print_and_wait(
        'Но в спокойной ночи ничего не происходит: открыв глаза на кровати, всё та же знакомая комната общежития.',
      );
      await urara.print_and_wait([
        'Никаких неожиданных сюрпризов, и нет того, кто в фантазиях делал бы с Урарой то и сё, ',
        callname,
        '.',
      ]);
      await urara.print_and_wait([
        'Что-то всё же… нерадостно? Но кроме той, что спросонья бормочет「первоклассная」, ',
        u_call_h,
        ' , никаких причин портить настроение нет.',
      ]);
      await urara.print_and_wait(
        'Время ложиться спать давно прошло, а Урара снова не спит из-за пустых мыслей.',
      );
      await urara.print_and_wait([
        'Не пройдёт много времени, и Урара, быть может, скоро станет думать только о том, чтобы с ',
        callname,
        ' делать приятные вещи, — плохой девочкой.',
      ]);
      await urara.print_and_wait([
        'Но ещё раньше Урара станет той, в чью голову кроме ',
        callname,
        ' ничего не влезет, — дурочкой.',
      ]);
      era.println();
      if (era.get('exp:52:性爱次数') >= 10) {
        await urara.say_and_wait([
          'В-всё это только из-за ',
          callname,
          ' так и стала такой!',
        ]);
        await urara.print_and_wait(
          'Неужели Урара с самого начала похотливая плохая девочка? Даже Ураре от этого тоскливо.',
        );
        await urara.print_and_wait([
          'Но как ни отрицай, тело Урары уже не может без ',
          callname,
          ' …',
        ]);
      } else {
        await urara.say_and_wait([
          'Если бы ',
          callname,
          '  мог(ла) ещё, ещё больше ласкаться с Урарой, Урара бы не стала плохой девочкой, правда?',
        ]);
        await urara.print_and_wait([
          'Но тело Урары уже для ',
          callname,
          ' готово, ',
          callname,
          '  всё ещё холоден(на) до неприличия.',
        ]);
        await urara.print_and_wait([
          'И правда, ',
          callname,
          ' больше любит чуть более зрелых? Даже немного грустно…',
        ]);
      }
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          'Но даже так я не хочу ненавидеть ',
          callname,
          ', точнее, Урара любит ',
          callname,
          '  — вот так.',
        ]);
        await urara.print_and_wait([
          'По имени「',
          urara.get_colored_name(),
          ' 」 ',
          urara.uma_sex_title,
          ' без ума от ',
          callname,
          ', и даже「отношения любовников」уже не могут насытить.',
        ]);
        await urara.print_and_wait(
          'Но если пойти ещё дальше, разве это не станет очень важной связью? Выше「любовников」должны быть муж и жена, правда?',
        );
        await urara.print_and_wait(
          'Даже если мама сама не говорила, Урара знает: это самое главное в жизни.',
        );
        await urara.print_and_wait([
          'Даже если с ',
          callname,
          ' уже есть молчаливое согласие на близость кожей к коже, такую капризную просьбу всё равно нельзя поднять просто так.',
        ]);
      } else {
        await urara.say_and_wait([
          'Урара и раньше часто сомневалась в себе, только каждый раз обнаруживала, что всё равно вроде любит ',
          callname,
          '.',
        ]);
        await urara.print_and_wait([
          'Даже если это трудно признать, 「',
          urara.get_colored_name(),
          ' 」теперь уже остаётся только дорожить этой неспокойной любовью.',
        ]);
        await urara.print_and_wait([
          'Если бы Урара смогла шагнуть ещё выше и привязать ',
          callname,
          '  к себе? Но если ещё выше…',
        ]);
        await urara.print_and_wait(
          'С кем попало сходиться — счастья не получить, так когда-то мама говорила Ураре.',
        );
        await urara.print_and_wait(
          'Но теперь, даже зная, что станет несчастной, Урара не может выбросить этот опыт, сшитый из заплаток.',
        );
      }
      era.println();
      urara.say(['Тогда сейчас с ', callname, ' — отношения…']);
      era.printButton('「Я не отступлю!」(повысить отношения)', 1);
      era.printButton('「Всё-таки слишком рано…」(пока не повышать)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.print_and_wait('Решено: Урара больше не отступит.');
        await urara.print_and_wait([
          'Урара уже заняла в ',
          callname,
          '  сердце своё собственное место, но этого всё ещё далеко не достаточно.',
        ]);
        await urara.print_and_wait(
          'Потому что даже если Урара не сделает выбор, никогда не остановится на настоящем, как Урара не будет ребёнком вечно.',
        );
        await urara.print_and_wait([
          'Чем продолжать думать о ',
          callname,
          ' — чувствах, лучше Ураре самой что-то предпринять, даже если откажут — не страшно.',
        ]);
        await urara.print_and_wait(
          'Дальше, будь то хорошо или плохо, Урара как взрослая наберётся смелости: раз все могут, то и Ураре ничего!',
        );
        await urara.print_and_wait([
          'И не только обещание «возлюбленных»: Урара ещё хочет с ',
          callname,
          ',хочет с ',
          you.actual_name,
          '  договориться ещё о многом—',
        ]);
        if (has_lover) {
          era.println();
          await urara.print_and_wait([
            'Но сперва, независимо от того, ',
            callname,
            '  согласится или нет, Урара всё равно хочет, чтобы ',
            callname,
            '  уделяли побольше времени.',
          ]);
          await urara.print_and_wait([
            'Даже если Урара не умеет как следует ругать ',
            callname,
            ',хоть в этом она ещё может чуть-чуть притвориться сердитой!',
          ]);
          await urara.print_and_wait([
            'Просто причина, по которой ',
            callname,
            '  любит всех, наверное, всё же в том, что все бегают быстрее? И в дальнейших тренировках надо стараться ещё сильнее…',
          ]);
          era.drawLine();
          await inner_urara.say_as_unknown_and_wait([
            'Раззадоренная влюблённостью, ',
            urara.teen_sex_title,
            ' составила в сердце планы на будущее и с этими мыслями уснула.',
          ]);
          await inner_urara.say_as_unknown_and_wait(
            'Нынешней ночью Урара наконец, набравшись смелости, переступила через тревоги и бессонницу от лишних дум.',
          );
          await inner_urara.say_as_unknown_and_wait([
            'Неважно, когда маленькая ',
            urara.uma_sex_title,
            ' будет готова начать действовать: даже если чуть незрело, это всё равно будет достойное чувство.',
          ]);
        }
      } else {
        await urara.say_and_wait([
          'Верно, сейчас ещё слишком рано, ',
          callname,
          '  точно тоже не согласится.',
        ]);
        await urara.print_and_wait([
          'Просто Урара и не думала, что однажды станет бояться, что ',
          callname,
          '  откажут.',
        ]);
        await urara.print_and_wait(
          'Не то чтобы она не думала, что могут отказать, — она боится, что будет после отказа.',
        );
        await urara.print_and_wait([
          'Если в таком важном деле откажут, сможет ли Урара с ',
          callname,
          '  сохранить нынешние отношения?',
        ]);
        await urara.print_and_wait([
          'И что тогда делать? Прямо попросить ',
          callname,
          ',даже если превратят Урару в питомца — только не бросать Урару?',
        ]);
        await urara.print_and_wait(
          'Стоит подумать, что с ней и правда так поступят, — и телесную горячку снова не унять: Урара и правда стала ужасной плохой девочкой.',
        );
        await urara.say_and_wait([
          'Лучше сначала дать телу остыть, завтра ещё рано вставать… ха-а… ',
          callname,
          '……',
        ]);
        await urara.print_and_wait([
          'Чрезмерная тревога и спрятанная неуверенность вспыхнули вместе, ',
          urara.teen_sex_title,
          ' грубо протянула руку к беспокойному телу.',
        ]);
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait([
          'По крайней мере для маленькой ',
          urara.uma_sex_title,
          ' сейчас с ',
          callname,
          '  шагнуть дальше при сегодняшнем состоянии души и правда не подходит.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'Эх, не говоря уже о том, станут ли ',
          callname,
          '  так обращаться с Урарой, — ведь достаточно было просто набраться смелости…',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-2': (() => {
    const title = 'Ты, что больше не блуждает';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await urara.say_and_wait([callname, ',здесь уже ничего не осталось.']);
      await era.printAndWait([
        'Позже, снова проходя мимо места той свадьбы, по ',
        urara.get_colored_name(),
        ' — напоминанию, ',
        you.get_colored_name(),
        '  снова смотрит сквозь ограду в парк.',
      ]);
      await era.printAndWait([
        'На этот раз на лужайке даже следы того, что кто-то приходил, исчезли без остатка, только ',
        urara.get_colored_name(),
        ' — тихий вздох всё ещё звучит у ',
        you.get_colored_name(),
        ' — уха.',
      ]);
      await era.printAndWait([
        'Пусть ',
        urara.sex,
        ' так мала, что глаз не разглядеть, — по паре поникших ушей на макушке всё равно видно, в каком ',
        urara.sex,
        ' настроении.',
      ]);

      era.printButton('「Урара, давай зайдём внутрь и посмотрим.»', 1);
      await era.input();

      await urara.say_and_wait('Э? М-м…');
      await era.printAndWait([
        'После вспышки удивления — слегка рассеянный ответ, ',
        urara.get_colored_name(),
        '  послушно пошла следом за ',
        you.get_colored_name(),
        ' — шагом, вместе обогнув низенькую ограду.',
      ]);
      await era.printAndWait([
        'Но хотя вместе с ',
        you.get_colored_name(),
        '  они стоят на траве, с которой провожали ту пару молодых, маленькая ',
        urara.uma_sex_title,
        ' хвост всё равно вяло покачивается без интереса.',
      ]);
      await era.printAndWait([
        'Может, ещё погружена в грустные воспоминания о прошлом отказе, ',
        urara.get_colored_name(),
        '  словно потеряла всю прежнюю живость.',
      ]);
      await era.printAndWait([
        'Разумеется: как ни было бы здесь прекрасно, это ',
        urara.teen_sex_title,
        ' питала надежду, но была лично отвергнута любимым человеком, — ранящее сердце место.',
      ]);
      await era.printAndWait([
        'Тогдашняя ',
        urara.get_colored_name(),
        '  ещё, верно, с тревогой сомневалась в том обещании ждать, а тогдашний ',
        you.get_colored_name(),
        '  и правда никудышный взрослый.',
      ]);
      await era.printAndWait(
        'По крайней мере сейчас — время тупому взрослому возместить и снова заполнить пустоту в сердце подопечной.',
      );
      await era.printAndWait(
        'Хочется сказать ещё столько всего, но сейчас получается, как ни крути, только—',
      );

      era.printButton('Самому взять Урару за руку.', 1);
      await era.input();

      await urara.say_and_wait('…а!');
      await era.printAndWait([
        'Может, привычная для двоих слаженность, а может — маленькая ',
        urara.uma_sex_title,
        ' давно жданное чутьё, ',
        urara.get_colored_name(),
        '  глаза округлились: вишнёвые зрачки из удивления вспыхнули радостью.',
      ]);
      await era.printAndWait([
        'В миг прикосновения, ',
        urara.get_colored_name(),
        '  сразу поняла: это не просто то, что делают влюблённые, но и ',
        you.get_colored_name(),
        '  хочет сдержать уговор.',
      ]);
      era.println();

      if (high_relation) {
        await urara.say_and_wait(
          'Не совсем как представляла, но я наконец дождалась, так что тоже довольна, да?',
        );
        await era.printAndWait([
          'Мгновенно с ',
          you.get_colored_name(),
          ' — расстояние сократилось до нуля, ',
          urara.get_colored_name(),
          '  лицо, наивное и полное любви, будто никогда не было так близко.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '  снова обрела то счастливое лицо былых дней бок о бок и сейчас словно невеста, которой вот-вот на этой же зелени наденут кольцо.',
        ]);
        await era.printAndWait([
          'Пусть даже крохотная ',
          urara.sex,
          ' без настоящей фаты и без благословений толпы, но сегодняшняя ',
          urara.sex,
          ' всё равно может стать главной в глазах любимого.',
        ]);
        await urara.say_and_wait([
          'Если бы ',
          callname,
          '  появился чуть раньше — вот бы, так что в компенсацию Ураре дальше будем всегда вместе, ладно?',
        ]);
        await era.printAndWait([
          'Глядя на ',
          urara.get_colored_name(),
          ' — искреннюю улыбку, ',
          you.get_colored_name(),
          '  конечно, тоже дал(а) самый ясный ответ —',
        ]);
      } else {
        await urara.say_and_wait([
          'Специально вернуться сюда, ',
          callname,
          '  не слишком ли это глупо? Хотя Ураре так говорить, наверное, не стоит…',
        ]);
        await era.printAndWait([
          'Изо всех сил пряча радость, ',
          urara.get_colored_name(),
          '  изо всех сил гасит загоревшийся взгляд, но всё равно не может прижать прыгающие уши и хвост.',
        ]);
        await era.printAndWait([
          'Стоя на свежей зелени, исполнившая уговор ',
          urara.get_colored_name(),
          '  наконец развеяла тень в улыбке.',
        ]);
        await era.printAndWait([
          'Пусть любовь двоих и баланс между ними всё ещё очень тонкие, но сейчас ',
          urara.get_colored_name(),
          ' — желание стать парой по-прежнему ничуть не изменилось.',
        ]);
        await urara.say_and_wait([
          'Короче, в этот раз правда всё решил, да? Назад нельзя, ясно, ',
          callname,
          '?',
        ]);
        await era.printAndWait([
          'А глядя на ',
          urara.get_colored_name(),
          ' — полушутливую улыбку, ',
          you.get_colored_name(),
          '  тоже ответил(а) ясным согласием —',
        ]);
      }
      if (has_lover) {
        era.println();
        await urara.say_and_wait([
          'Тогда, может, Урара потом ещё увидит, как ',
          callname,
          '  говорит обещание ещё большему числу людей…',
        ]);
        await urara.say_and_wait([
          'Ничего, Урара может простить ',
          callname,
          ' , да? Потому что Урара тоже ',
          callname,
          ' — жена же!',
        ]);
        await era.printAndWait([
          'И вдруг, сжав ',
          you.get_colored_name(),
          ' — руку, внезапно вложила ',
          urara.uma_sex_title,
          ' силу, ',
          urara.get_colored_name(),
          ' — в улыбке будто прибавился намёк на право клятвы.',
        ]);
        await urara.say_and_wait(
          'Так что какая бы ни была очередь, я хорошенько пожурю непослушных на тренировке, ясно?',
        );
      }
      era.printButton('「Прости, что заставил(а) Урару так долго ждать!」', 1);
      await era.input();

      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'Теперь вы уже не сможете повернуть назад, ясно?',
      );
    };
    f.title = title;
    return f;
  })(),
  '89-3': (() => {
    const title = (urara) => ['Давшая обещание ', urara.sex];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        ' Тот раз, когда проходили мимо свадьбы, был чистой случайностью, но если хочешь сменить траекторию бега, одной случайности довольно.',
      );
      era.drawLine();
      await era.printAndWait([
        'От места свадьбы отделяла лишь ограда; в памяти ',
        you.get_colored_name(),
        ' и ',
        urara.uma_sex_title,
        ', за оградой провожали взглядом молодожёнов сквозь толпу, что слала благословения.',
      ]);
      await era.printAndWait([
        'Словно что-то намекая, из этой пары одна — крохотная ',
        urara.uma_sex_title,
        ', а другая — куда крупнее, чем ',
        urara.sex,
        ', ',
        you.phy_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'В воспоминании ',
        urara.get_colored_name(),
        '  не сказала ни слова, лишь в ясных вишнёвых зрачках при взгляде мелькнула толика томления.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '  тоже дошла до поры создавать семью. Такая превратная мысль — вовсе не то, о чём стоит думать порядочному взрослому.',
      ]);
      await era.printAndWait([
        'Но ничего не поделать: с маленькой ',
        urara.uma_sex_title,
        ' любовниками стали не кто иной, как ',
        urara.sex,
        ' — её тренер.',
      ]);
      await era.printAndWait(
        'Тогда спроси себя честно: если подопечная хочет в будущем создать семью с любимым, готов ли к этому тренер?',
      );
      era.println();

      if (high_relation) {
        await urara.say_and_wait([callname, ', о чём это ты думаешь?']);
        await era.printAndWait([
          urara.get_colored_name(),
          '  невесть когда повернулась и, как всегда, от самого сердца ',
          you.get_colored_name(),
          '  улыбается.',
        ]);
        await era.printAndWait([
          'Быть может, ',
          you.get_colored_name(),
          '  сейчас тоже мало чем отличаются от той пары молодожёнов? Чувствуя прекрасную улыбку любимой, ',
          you.get_colored_name(),
          '  так и решил.',
        ]);
        await era.printAndWait([
          'Так что нынешняя ',
          urara.get_colored_name(),
          '  как раз нуждается в серьёзном обещании, неважно, ',
          urara.sex,
          ' определена как 「взрослая」 или нет.',
        ]);
      } else {
        await urara.say_and_wait([callname, ', тебя что-то беспокоит?']);
        await era.printAndWait([
          'Отведя взгляд, ',
          urara.get_colored_name(),
          '  тихо смотрит на ',
          you.get_colored_name(),
          ' и являет чуть беспомощную, но всё ещё очень радостную улыбку.',
        ]);
        await era.printAndWait([
          'Маленькая ',
          urara.uma_sex_title,
          ' то и дело показывает лицо не к месту, но сказать, что не понимаешь почему, не поверишь, наверное, и сам.',
        ]);
        await era.printAndWait([
          'Но маленькая ',
          urara.uma_sex_title,
          ' чувствует томление или тревогу, или и то и другое — только вот ',
          you.get_colored_name(),
          '  сейчас не может этого подтвердить.',
        ]);
      }
      era.println();

      await urara.say_and_wait([
        callname,
        ', а однажды Урара тоже сможет надеть длинное белое платье?',
      ]);
      await era.printAndWait([
        'Не дав ',
        you.get_colored_name(),
        '  ответить на прошлый вопрос и не оставив больше времени подумать, розово-вишнёвая маленькая возлюбленная спросила снова.',
      ]);
      await urara.say_and_wait([
        'Урара не станет просить большего, но ',
        callname,
        ', рука Урары сейчас всё ещё свободна, знаешь?',
      ]);
      await era.printAndWait([
        'не глядя прямо на ',
        you.get_colored_name(),
        ', ',
        urara.get_colored_name(),
        '  — и всё так же сквозь узкий забор, словно глядя в идущее наяву будущее, всматривается в шумную свадебную церемонию.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' — маленькая рука спокойно ждёт у бока, хоть на ней нет ни белой фаты, ни блестящего кольца.',
      ]);
      await era.printAndWait([
        urara.sex,
        'наверняка понимает всё это, но маленькая ',
        urara.uma_sex_title,
        ' всё равно хочет лишь касания ладоней да обещания сцепленных мизинцев.',
      ]);
      await era.printAndWait([
        'что бы ни ждало впереди, крошечная ',
        urara.sex,
        ' уже решила ждать ',
        you.get_colored_name(),
        ' — ответа.',
      ]);
      inner_urara.say_as_unknown(
        `Перед Урарой, всё ещё ждущей: тренер ${you.adult_sex_title} (вы) — ваше решение…`,
      );
      era.printButton('Взять Урару за руку. (углубить отношения)', 1);
      era.printButton('Сейчас ещё не готов(а). (пока не углублять)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Как с ',
          urara.get_colored_name(),
          ' обстоят отношения, ',
          you.get_colored_name(),
          ' давно это знает.',
        ]);
        await era.printAndWait([
          'Не нужно ничего взвешивать, ',
          you.get_colored_name(),
          ' поднимает маленькую руку возлюбленной, ',
          urara.get_colored_name(),
          ' — напряжённые уши наконец опускаются, будто с облегчением.',
        ]);
        await era.printAndWait([
          'От простого смыкания пальцы переплетаются, маленькая ',
          urara.uma_sex_title,
          ' нежными пальцами чуть застенчиво водит туда-сюда между ',
          you.get_colored_name(),
          ' — ладонями.',
        ]);
        await era.printAndWait([
          'Получившая ответ ',
          urara.get_colored_name(),
          '  всё ещё молчит, но щёки сейчас честно выдают её: ',
          urara.sex,
          ' заливается стыдливым румянцем.',
        ]);
        await era.printAndWait(
          'Гладя руку слишком крохотной возлюбленной, чувство запретности, что всё это время давило в груди, будто выплеснется с одним дыханием.',
        );
        await era.printAndWait('Ни капли обещания — и так правда можно?');
        era.println();
        if (high_relation) {
          await urara.say_and_wait([
            'Вот оно что: взрослый вынужден прятать мысли, но ',
            callname,
            ' — в сердце всё равно стыдно перед Урарой.',
          ]);
          await urara.say_and_wait([
            'Не переживай, ладно? Ураре с самого начала была нипочём ',
            callname,
            ' — разница, поэтому Урара и набралась храбрости заговорить об этом сама.',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '  всё ещё смотрит на ',
            you.get_colored_name(),
            '  и улыбается, словно чуть всё понимающим лицом гладит ',
            you.get_colored_name(),
            ' — самую глубь сердца.',
          ]);
          await urara.say_and_wait([
            'Достаточно и так! ',
            callname,
            '  и без того всё это время было тяжело, так что Ураре ничего не нужно, ладно?',
          ]);
          await urara.say_and_wait([
            callname,
            ', и дальше можно просить заботы? Только уже в более близком качестве, да!',
          ]);
          await era.printAndWait([
            'С ударами свадебных колоколов вишнёво-розовая улыбка постепенно заполняет ',
            you.get_colored_name(),
            ' — взгляд.',
          ]);
          await era.printAndWait(
            'Вот оно что: там, где не видно, маленькая Урара давно уже готова пройти с человеком всю жизнь рука об руку…',
          );
        } else {
          await urara.say_and_wait([
            'О чём это ты переживаешь, ',
            callname,
            '? Уже ведь всё делали, боишься, что Урара передумает?',
          ]);
          await urara.say_and_wait([
            'Ни за что! Урара знает: ',
            callname,
            '  жадина, так что я останусь рядом с ',
            callname,
            '  и сама найду ответ, ладно?',
          ]);
          await era.printAndWait([
            'Всё так же не смотрит на ',
            you.get_colored_name(),
            ', ',
            urara.get_colored_name(),
            ' — взгляд сквозь решётку уходит в небо, будто думает о том, что ждёт на исходе жизни.',
          ]);
          await urara.say_and_wait([
            'И даже если ты такой человек, я всё равно вижу ',
            callname,
            ' — старания, так что Ураре можно ничего не просить.',
          ]);
          await urara.say_and_wait([
            'Впрочем, если сказать по-плохому, Урара думает: ',
            callname,
            '  не вытащит никакого приличного обещания, да?',
          ]);
          await era.printAndWait([
            'Свадебные колокола звенят, маленькая ',
            urara.uma_sex_title,
            ' с улыбкой поворачивается к ',
            you.get_colored_name(),
            ', и на лице — облегчённая любовь.',
          ]);
          await era.printAndWait([
            'Даже если ',
            urara.sex,
            ' знает, что за человек её тренер, ',
            urara.get_colored_name(),
            '  всё равно готова идти рядом…',
          ]);
        }
        era.println();
        await urara.say_and_wait([callname, ', чуть закрой глаза!']);
        await era.printAndWait(
          'Хоть оба чуть дрожат от напряжения, глаза закрываются заодно — и следом поцелуй, параллельный тому, что у героев свадьбы.',
        );
        await era.printAndWait(
          'Может, когда-нибудь и эти двое по ту сторону разделённых параллельных линий тоже станут героями парной церемонии.',
        );
        await era.printAndWait(
          'Даже если будущее неведомо, даже если никто не дал обещания, даже если счастья может стать мало.',
        );
        await era.printAndWait(
          'Раз у влюблённых уже есть решимость друг к другу, остаётся лишь выбор идти вперёд за руки.',
        );
        if (has_lover) {
          era.println();
          await urara.say_and_wait([
            'Впрочем, ',
            callname,
            '  и вправду жадина, хоть это и выбор Урары, всё же лишь бы все Урару не ругали.',
          ]);
          await urara.say_and_wait([
            'Но Урара и ',
            callname,
            '  уже сделали выбор, уже поздно…',
          ]);
          await era.printAndWait([
            'После ласк, склонившись к уху возлюбленной, ',
            urara.teen_sex_title,
            ' — улыбка кажется чуть горькой.',
          ]);
          era.drawLine();
          await inner_urara.say_as_unknown_and_wait(
            'И то правда, ты и в самом деле человек чрезмерный, но чуть соберись, потому что…',
          );
        } else {
          era.drawLine();
        }
        await inner_urara.say_as_unknown_and_wait(
          'Вам уже не повернуть назад…',
        );
      } else {
        await urara.say_and_wait(
          'Сейчас ещё нельзя… ничего, Урара будет ждать и дальше!',
        );
        await era.printAndWait([
          'После напрасного тревожного ожидания сжав всё ещё пустую ладонь, ',
          urara.get_colored_name(),
          '  снова заговаривает, будто утешая себя.',
        ]);
        await urara.say_and_wait([
          'Но если однажды ',
          callname,
          '  всё обдумает… обязательно сразу скажи Ураре!',
        ]);
        await urara.say_and_wait(
          'Потому что Урара тоже набралась огромной храбрости, чтобы это сказать…',
        );
        await era.printAndWait([
          'Так и не взглянув на самого любимого ',
          callname,
          ', даже спрятав покрасневшие вишнёвые глаза в тень, ',
          urara.get_colored_name(),
          ' — улыбка от дрожи в голосе становится печальной.',
        ]);
        await urara.say_and_wait([
          'Всё же немного тяжело… Урара правда очень хочет с ',
          callname,
          '……',
        ]);
        await era.printAndWait(
          'А потом даже натянутая улыбка стала крошиться —',
        );

        era.printButton(
          '「Не грусти, Урара, я не говорю, что нельзя, просто сейчас ещё рано.」',
          1,
        );
        await era.input();

        await urara.say_and_wait('…э?');
        await era.printAndWait([
          'Несколько неожиданно ',
          urara.get_colored_name(),
          ' — дрожащий голос затих, в красных глазах сквозило лёгкое недоумение.',
        ]);
        era.println();
        if (high_relation) {
          await urara.say_and_wait([
            'Урара ещё думала, что ',
            callname,
            ' наконец устал(а), похоже, это не так…',
          ]);
          await era.printAndWait([
            'Не вытерев даже слёзы в уголках глаз, маленькая ',
            urara.uma_sex_title,
            ' сразу же с облегчением прижалась к ',
            callname,
            '.',
          ]);
          await era.printAndWait([
            'С облегчением вдыхая запах любимого, ',
            urara.get_colored_name(),
            ' постепенно успокоила чувства, что вышли из-под контроля от страха быть отвергнутой.',
          ]);
        } else {
          await urara.say_and_wait([
            'Значит, ',
            callname,
            ' не хочет бросить Урару? Даже как-то радостно…',
          ]);
          await era.printAndWait([
            'Украдкой смахивая слёзы с уголков глаз, ',
            urara.teen_sex_title,
            ' тихо произнесла вывод, к которому непонятно как пришла.',
          ]);
          await era.printAndWait([
            'Впрочем, по тому, как они всегда ладили, может, ',
            urara.get_colored_name(),
            ' и не так уж неожиданно пришла к такому выводу…',
          ]);
        }
        era.printButton(
          '「Так что, как Урара и сказала, когда придёт время, я сразу же скажу Ураре!」',
          1,
        );
        await era.input();

        await urara.say_and_wait('Тогда… договорились?');
        await era.printAndWait([
          'После недолгого раздумья ',
          urara.get_colored_name(),
          ' с улыбкой к ',
          you.get_colored_name(),
          ' протянула мизинец.',
        ]);

        era.printButton('「Договорились!」', 1);
        await era.input();

        await era.printAndWait(
          'Когда мизинцы сомкнулись, на свадебной площадке зазвучали праздничные колокола, словно празднуя, что двое дали самое важное обещание в жизни.',
        );
        await era.printAndWait([
          'С таким благословением — ',
          urara.sex,
          ', день, о котором условились, наверняка скоро наступит? Но в каком виде придёт тот день…',
        ]);
        await urara.say_and_wait([
          'Впрочем, если ',
          callname,
          ' откажет, и потом в будущие дни ',
          callname,
          ' будет держать как питомца, может и…',
        ]);
        await urara.say_and_wait('Н-нет, н-ничего?');
        await era.printAndWait([
          'Глядя на ',
          urara.get_colored_name(),
          ', что притворяется, будто ничего не сказала, чудится, что обещанный день незаметно снова отдалился…',
        ]);
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          'На этом остановилась?! Нет… ничего…',
        );
        await inner_urara.say_as_unknown_and_wait(
          'Впрочем, кстати… почему вы так в этом умелы?',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  90: (() => {
    const title = 'Бескомпромиссная любовь';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的爱慕
     * @param {PrintedSpan|false} u_call_r 春乌拉拉对米浴的称呼，当米浴的爱慕值不足时为 false
     * @param {PrintedSpan|false} u_call_h 春乌拉拉对圣王光环的称呼，当圣王光环的爱慕值不足时为 false
     */
    const f = async (urara, inner_urara, you, callname, u_call_h, u_call_r) => {
      await inner_urara.say_as_unknown_and_wait(
        '…эх, в итоге всё равно вышло так…',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Если есть подходящая почва, посеянное семя пустит корни и прорастёт.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Не беспокойтесь, Урара по-прежнему нежна, только весенние краски, оплетённые чёрным, — красивы ли они в ваших глазах?',
      );
      era.drawLine();
      await urara.say_and_wait([callname, ', ты меня тут и ждал(а)!']);
      await era.printAndWait([
        'В отличие от обычной энергичности сегодняшняя ',
        urara.get_colored_name(),
        ' , подойдя к ',
        you.get_colored_name(),
        ' , тихо села на скамейку рядом с ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'А когда ',
        you.get_colored_name(),
        ' только собирается спросить, не случилось ли чего, как тихо улыбающаяся маленькая ',
        urara.uma_sex_title,
        ' в полную силу хватает за ворот.',
      ]);
      await era.printAndWait([
        'Затем ',
        you.get_colored_name(),
        ' чувствует нежность сомкнутых губ и то, как крохотный мягкий язычок подопечной невероятно вскрывает ',
        you.get_colored_name(),
        ' — защиту, вторгаясь в ',
        you.get_colored_name(),
        ' — рот.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' смело проникает в ',
        you.get_colored_name(),
        ' — тело, нежный душистый язычок мягко и властно скользит по зубам и языку, снова и снова поднимая тонкий вязкий влажный звук.',
      ]);
      era.println();
      if (era.get('exp:52:接吻次数') <= 10) {
        await era.printAndWait([
          'Что случилось? Зачем так делать? Урара — ',
          urara.sex,
          '……',
        ]);
        await era.printAndWait([
          'Бесчисленные вопросы кружились у ',
          you.get_colored_name(),
          ' перед глазами. Этот вишнёво-розовый силуэт, что напал, — и правда「',
          urara.get_colored_name(),
          ' 」?',
        ]);
        await era.printAndWait([
          'Но как бы ',
          you.get_colored_name(),
          ' ни пытается собрать уже смешанную вместе с жидкостью изо рта в кашу голову, сейчас уже не выходит найти ответ.',
        ]);
        await era.printAndWait([
          'А одолевшая любимого инстинктом этого тела ',
          urara.get_colored_name(),
          ', с полным удовлетворением прижалась всем телом, давая ',
          urara.sex,
          ' — присутствие всё глубже входит в ',
          you.get_colored_name(),
          ' — всё.',
        ]);
      } else {
        await era.printAndWait([
          'В глазах, что постепенно плыли от нехватки воздуха, распустившиеся вишнёвые зрачки на слишком близком расстоянии занимали у ',
          you.get_colored_name(),
          ' весь обзор.',
        ]);
        await era.printAndWait([
          'Способность мыслить под мягким натиском маленькая ',
          urara.uma_sex_title,
          ' рухнула; тело, из которого постепенно высасывали силы, уже не могло противиться своей подопечной.',
        ]);
        await era.printAndWait(
          'Словно галлюцинация от нехватки воздуха: в глазах крохотной подопечной, что наваливалась с решимостью отнять всё, сквозила любовь, близкая к неистовству.',
        );
      }
      era.println();

      await era.printAndWait([
        'Прежде чем ',
        urara.sex,
        ' решилась запечатлеть своё дыхание на теле того, кого зовут ',
        you.get_colored_name(),
        ', крохотная ',
        urara.uma_sex_title,
        ' долго мучилась, но в конце концов Урара всё же поняла.',
      ]);
      await era.printAndWait(
        'Верить в это чувство или нет; верить в характер любимого или нет;',
      );
      await era.printAndWait([
        callname,
        ' хоть отброс человечества — и что? ',
        callname,
        ' хоть похотник — и что? ',
        callname,
        ' хоть просто хочет заполучить ',
        urara.get_colored_name(),
        ' — и что с того?',
      ]);
      await era.printAndWait([
        'Всё это… и то, как ',
        urara.get_colored_name(),
        ' силой захватила губы любовника подруги — ',
        callname,
        ' — тоже не так уж отличается, да?',
      ]);
      await era.printAndWait([
        'маленькая ',
        urara.uma_sex_title,
        ' наконец освободила своего тренера от глубокого поцелуя, и с плотно прижатых друг к другу кончиков языков потянулась не желающая рваться ниточка…',
      ]);
      await era.printAndWait([
        'Глядя на ',
        you.get_colored_name(),
        '  — растерянное и чуть задыхающееся лицо, ',
        urara.get_colored_name(),
        '  явила улыбку, в простодушии которой мешалась капля чарующей прелести.',
      ]);
      await urara.say_and_wait([
        'Прости, ',
        callname,
        ', но сейчас я уже не отступлю…',
      ]);
      await era.printAndWait([
        'Без тени раскаяния ',
        urara.teen_sex_title,
        ' тихо, одними губами, проронила эти слова; предательство подруги, которым когда-то ',
        urara.sex,
        ' гнушалась, теперь не причиняло ни боли, ни зуда.',
      ]);
      await urara.say_and_wait([
        'Потому что Урара поняла, потому что Урара вспомнила: это всё ',
        callname,
        ' — вина же…',
      ]);
      era.println();
      if (u_call_r && u_call_h) {
        await inner_urara.say_as_unknown_and_wait([
          'Тренер ',
          you.adult_sex_title,
          ' так жаден: уже есть лучшая подруга Урары — и всё равно хочет заполучить ещё и саму Урару.',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'Если бы это была прежняя Урара, ещё ничего не понимавшая, ей было бы куда больнее — но нынешней Ураре всё равно.',
        );
        await inner_urara.say_as_unknown_and_wait([
          'Но нынешняя Урара смотрит на ',
          callname,
          '  с таким самодовольным видом — почему же?',
        ]);
      } else {
        await inner_urara.say_as_unknown_and_wait([
          'Почему тренер ',
          you.adult_sex_title,
          ' может после того, как принял(а) ',
          u_call_r ? u_call_r : u_call_h,
          ' , всё ещё так спокойно относиться к Ураре?',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'Почему, уже обладая чужой любовью, всё равно хочет взять и Урару в объятия?',
        );
        await inner_urara.say_as_unknown_and_wait([
          'Почему Урара, прекрасно зная это, всё равно улыбается и с таким тренером ',
          you.adult_sex_title,
          ' обнимается?',
        ]);
      }
      era.println();
      await urara.say_and_wait(
        [
          'Потому что ',
          callname,
          ' — большой лжец, а Урара полюбила и такого большого лжеца.',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          callname,
          '  отдал(а) Ураре чувства, которые не следовало дарить; и Урара, что забрала их себе, зная, что принимать нельзя, — одинаково виновна, подлинник это или нет.',
        ],
        true,
      );
      await urara.say_and_wait(
        'Урара станет подлым взрослым? Потом Урара станет подлым взрослым? Ураре это неважно, ну?',
        true,
      );
      await urara.say_and_wait(
        'Ну и что, что я как ребёнок пришла позже? Даже если это ужасная ошибка — другие, кто уже погряз, разве намного чище такой Урары?',
        true,
      );
      await urara.say_and_wait([
        callname,
        '  сделал(а) меня такой, так что, пожалуйста, ',
        callname,
        '  как следует возьми ответственность за Урару…',
      ]);
      await era.printAndWait([
        'Не дожидаясь, пока ',
        you.get_colored_name(),
        '  выразит сомнение в этих словах, крошечная подопечная протянула руку и нежным указательным пальцем прижала ',
        you.get_colored_name(),
        ' — губы.',
      ]);
      await urara.say_and_wait(
        [
          'Смысл этих слов Урару не спрашивай, ладно, ',
          callname,
          ' — сам(а) ведь ответ найдёшь?',
        ],
        true,
      );
      await urara.say_and_wait([
        'Не спрашивай, ',
        callname,
        ', а сейчас на этом пока всё…?',
      ]);
      await era.printAndWait([
        'А вместе с тем, как ',
        urara.teen_sex_title,
        ' глядела всё более мутными вишнёвыми глазами: под поливом нечистой любви из уродливого семени распустился один соблазнительный и подлый цветок…',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' — ',
        {
          content: ' оральное мастерство',
          color: buff_colors[3],
        },
        '  стало ещё искуснее…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = 'Ключ от сердца взрослого';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'Ключ — удобная вещь: им можно что-то открыть, а можно и запереть.',
      );
      await inner_urara.say_as_unknown_and_wait(
        'Но один ключ обычно открывает только подходящий замок.',
      );
      await inner_urara.say_as_unknown_and_wait(
        `Так что — своими руками вручить ключ — ${urara.sex}, или ждать, пока ${urara.sex} мало-помалу украдёт ваш ключ?`,
      );
      await inner_urara.say_as_unknown_and_wait(
        '…Хм? Как будто разницы почти нет?',
      );
      era.drawLine();

      await era.printAndWait([
        'Увидев подопечную, что тихо спит на знакомом месте, ',
        you.get_colored_name(),
        '  чуть замедляет шаг.',
      ]);
      await era.printAndWait([
        'С распущенными длинными волосами маленькая ',
        urara.uma_sex_title,
        ' в тёплом солнечном свете беззастенчиво лежит поперёк скамейки и тихо спит.',
      ]);
      await era.printAndWait([
        'Снова не спала ночами? Или слишком выложилась? Даже когда ',
        you.get_colored_name(),
        '  садится рядом — ',
        urara.sex,
        ', и у маленькой ',
        urara.uma_sex_title,
        ' обмякшие уши даже не думают подняться.',
      ]);
      await era.printAndWait([
        'Как в ту самую первую встречу: даже если чистоты уже нет, ',
        urara.get_colored_name(),
        '  всё ещё словно невыросший ребёнок и совершенно беззащитна.',
      ]);
      await era.printAndWait([
        'Но даже если 「Красная Шапочка」 верит, что другие не причинят вреда — ',
        urara.sex,
        ', а самого близкого тренера давно уже ',
        urara.sex,
        ' чистым соблазном превратила в 「Серого Волка」.',
      ]);
      await era.printAndWait(
        'Под аккуратной школьной формой ещё не до конца созревшее маленькое тело на деле давно уже пробудило инстинкт поиска наслаждения.',
      );
      await era.printAndWait(
        'Полные округлые вишнёвые губы в такт дыханию расслабленно приоткрыты — словно спелая ягода, что ждёт, когда кто-нибудь её распробует.',
      );
      await era.printAndWait([
        'Перед свободно щеголяющей телом в ежедневной близости 「плохой ',
        urara.child_sex_title,
        ' 」, и рассудок взрослого постепенно теряет контроль.',
      ]);
      await era.printAndWait([
        'Схватив ту пару тонких запястий, ',
        you.get_colored_name(),
        '  мстительно прижимает ',
        urara.get_colored_name(),
        '  под собой и к манящей ',
        urara.sex,
        ' постепенно опускает тело.',
      ]);
      await urara.say_and_wait([
        '…… ',
        callname,
        ', хотя Ураре всё равно, но если делать это здесь — заметят, ну?',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          'Под ',
          you.get_colored_name(),
          ' , прижатая к скамейке, ',
          urara.get_colored_name(),
          '  уже неясно когда проснулась, но ни капли не сопротивляется и даже покорно следует ',
          you.get_colored_name(),
          ' — и снова щурит глаза.',
        ]);
        await urara.say_and_wait([
          'Впрочем, ',
          callname,
          '  очень хочешь — чувства и тело Урары можно совсем не брать в расчёт, ну?',
        ]);
        await era.printAndWait([
          'Затуманенные глаза влажнеют от постепенно разогревающегося тела, и с распущенными вишнёвыми волосами ',
          urara.sex,
          ' излучает материнство, будто способна принять ',
          you.get_colored_name(),
          ' — всё.',
        ]);
        await urara.say_and_wait([
          'Сейчас Урара всегда рада принять ',
          callname,
          ' — всю целиком, ну?',
        ]);
      } else {
        await era.printAndWait([
          'маленькая ',
          urara.uma_sex_title,
          ' напряжённо смотрит на того, кем ',
          urara.sex,
          ' вот-вот будет обесчещена, — ',
          you.get_colored_name(),
          ', но после лишь символической борьбы отворачивает лицо в сторону — пусть ',
          you.get_colored_name(),
          ' теребит её тело: ',
          urara.sex,
          ' не противится.',
        ]);
        await urara.say_and_wait([
          '…Ничего, что бы ни делал(а) — я стерплю, ',
          callname,
          ' только побыстрее, ну?',
        ]);
        await era.printAndWait([
          'Уголки глаз влажнеют от напряжения, но крохотная ',
          urara.uma_sex_title,
          ' всё равно заставляет тело приготовиться к грубому насилию.',
        ]);
        await urara.say_and_wait('Если всего разок — что угодно приму, ну?');
      }

      era.printButton('「!」', 1);
      await era.input();

      await era.printAndWait([
        'В ',
        urara.get_colored_name(),
        ' — жертвенном шёпоте собиравшийся излить переполняющее желание на невинную возлюбленную ',
        you.get_colored_name(),
        ' наоборот чуть возвращает себе рассудок.',
      ]);
      await era.printAndWait([
        'Лишь когда ',
        you.get_colored_name(),
        ' медлит, не зная, что сказать подопечной, ',
        urara.get_colored_name(),
        ' же, заметив ',
        you.get_colored_name(),
        ' — нерешительность, с облегчением тихо смеётся.',
      ]);
      await urara.say_and_wait([
        'Полегчало, ',
        callname,
        '? В последнее время опять устал(а), да? Ураре правда ничего, ну!',
      ]);
      await era.printAndWait([
        'Не подхватив ',
        you.get_colored_name(),
        ' — молчание, сохраняя вид придавленной возлюбленным, ',
        urara.get_colored_name(),
        ' одиноко заводит будто бы посторонний разговор.',
      ]);
      await urara.say_and_wait([
        'Хоть Урара ещё не стала взрослой как следует, но ',
        callname,
        ' может отдать Ураре『ключ взрослого』?',
      ]);

      era.printButton('「『Ключ взрослого』?」', 1);
      await era.input();

      await urara.say_and_wait([
        'Ага! Недавно одна одноклассница, которая со своим тренером не так уж близка, вдруг получила ключ тренера.',
      ]);
      await urara.say_and_wait([
        'Но как раз когда Урара тоже удивилась, ',
        urara.sex,
        ' сказала Ураре нечто неожиданное —',
      ]);
      await urara.say_and_wait(
        '『Урара с тренером так дружит, а приглашения так и нет? Видно, Урару всё ещё считают ребёнком!』',
      );
      await era.printAndWait([
        'Короткая пауза, и маленькая ',
        urara.uma_sex_title,
        ' — улыбка вдруг вбирает сложные чувства, не идущие к такому детскому лицу.',
      ]);
      await urara.say_and_wait([
        'Поэтому Урара думает: может, до сих пор Урару ',
        callname,
        ' считает ребёнком?',
      ]);
      await urara.say_and_wait([
        'Та, что больше всех любит ',
        callname,
        ' — Урара, когда же ',
        callname,
        ' впустит в комнату?',
      ]);
      await urara.say_and_wait([
        'Или даже если ',
        callname,
        ' повалит — Урара всё равно…',
      ]);
      await era.printAndWait([
        'Всматриваясь в ставший тревожным и печальным взгляд, которым ',
        urara.teen_sex_title,
        ' смотрит на него, ',
        you.get_colored_name(),
        ' наконец понимает ',
        urara.get_colored_name(),
        ' — всю подоплёку, что та хотела донести.',
      ]);
      await era.printAndWait([
        'Наделённых превосходной силой ',
        urara.uma_sex_title,
        ' не сдержать простыми дверями и окнами; вещь, полученная от другого, для ',
        urara.couple_title,
        ' тоже скорее имеет символический смысл.',
      ]);
      await era.printAndWait([
        'Но даже если можно действовать, не неся последствий, ',
        urara.get_colored_name(),
        ' всё равно хочет уважить ',
        you.get_colored_name(),
        ' — выбор.',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        'Всё ждала, когда самый любимый ',
        callname,
        ' сам пригласит ',
        urara.sex,
        ' — тот день, а теперь ',
        you.get_colored_name(),
        ' уже заставил(а) ',
        urara.sex,
        ' ждать слишком долго.',
      ]);

      inner_urara.say_as_unknown(
        `И вот сейчас ключ у тренера ${you.adult_sex_title} в собственных руках —`,
      );
      era.printButton(
        '「Прости, забыл(а) о важном и заставил(а) Урару ждать…」(расположение+10)',
        1,
      );
      era.printButton('「Конечно нет, просто сейчас ещё не время…」', 2);
      const ret = await era.input();

      await era.printAndWait([
        'Но едва ',
        you.get_colored_name(),
        ' ещё не успевает вымолвить, ',
        urara.get_colored_name(),
        ' подаётся вперёд и касанием кожи перекрывает ',
        you.get_colored_name(),
        ' — ответ.',
      ]);
      await era.printAndWait([
        'Не разжимая ',
        you.get_colored_name(),
        ' — зубы, не вырываясь из ',
        you.get_colored_name(),
        ' — рук, лишь простое сложение губ, ',
        urara.get_colored_name(),
        ' отрезает ',
        you.get_colored_name(),
        ' — все пути назад.',
      ]);
      await era.printAndWait([
        'Хотя ласка длилась лишь несколько секунд, будто растянулась на века, и ',
        you.get_colored_name(),
        ' в этом долгом миге отпускает ',
        urara.get_colored_name(),
        ' — тело.',
      ]);
      await era.printAndWait([
        'Пока оба медленно отстраняются с ещё не схлынувшим теплом, ключ незаметно ',
        you.get_colored_name(),
        ' сжимает в руке.',
      ]);
      await era.printAndWait([
        'После короткого молчания, с ',
        urara.get_colored_name(),
        ' обменявшись чувствами, ',
        you.get_colored_name(),
        ' наконец решается и кладёт ключ перед ',
        urara.get_colored_name(),
        ' .',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(['— Спасибо, ', callname, '!']);
        await era.printAndWait([
          'В миг, когда ',
          you.get_colored_name(),
          ' протягивает ключ, ',
          urara.get_colored_name(),
          ' тоже без слов одновременно с ',
          you.get_colored_name(),
          ' протягивает руку.',
        ]);
        await era.printAndWait([
          'с улыбкой принимает ',
          you.get_colored_name(),
          ' — ключ, маленькая ',
          urara.uma_sex_title,
          ' словно сокровище, крепко сжимает самый обычный ключ.',
        ]);
        await era.printAndWait([
          'глядя на сияющее радостью лицо ',
          urara.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' тоже расслабляется и тянется погладить маленькую ',
          urara.uma_sex_title,
          ' — распущенные пряди.',
        ]);
        await era.printAndWait(
          'Может, когда-нибудь в будущем по утрам увидишь хлопочущий на кухне вишнёво-розовый;',
        );
        await era.printAndWait(
          'Может, когда-нибудь в будущем, вернувшись домой, увидишь встречающий тебя вишнёво-розовый…',
        );
        await era.printAndWait([
          'И правда прекрасное будущее, и жаль сейчас лишь того, что ',
          you.get_colored_name(),
          ' не знает наверняка, на месте ли ещё запасной ключ от дома…',
        ]);
        await urara.say_and_wait([
          'эх-хе-хе~ и так можно будет ещё и всем похвастаться! И ',
          callname,
          ' — в комнате наверняка полно классных вещей!',
        ]);
        await era.printAndWait('Эх, так у этого ещё и такая цель была?');
        await era.printAndWait([
          'В последующие дни ',
          you.get_colored_name(),
          ' кажется, тоже из-за того, что отдал(а) ключ ',
          urara.get_colored_name(),
          ' — и многие тыкали пальцами.',
        ]);
        await era.printAndWait('А уж почему… пусть останется в сердце.');
      } else {
        await urara.say_and_wait([
          callname,
          ' есть и ',
          callname,
          ' — свои причины, Урара понимает! Но потом чаще будь с Урарой, ладно?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' с улыбкой отводит ',
          you.get_colored_name(),
          ' — протянутый ключ, а маленькая ладонь забирается на ',
          you.get_colored_name(),
          ' — слегка поникшее лицо.',
        ]);
        await urara.say_and_wait([
          'И вообще, ',
          callname,
          ' всё-таки с улыбкой красивее!',
        ]);
        await era.printAndWait([
          'маленькая ',
          urara.uma_sex_title,
          ' всё же принимает тот самый ',
          callname,
          ' — отказ, и с улыбкой снова завязывает хвост.',
        ]);
        await urara.say_and_wait(
          'Пойдём тогда тренироваться! Чем сегодня займёмся?',
        );
        await era.printAndWait([
          'Даже получив отказ от дорогого человека, ',
          urara.get_colored_name(),
          ' всё равно улыбается как всегда и хочет, чтобы любимый человек не тревожился — пусть ',
          urara.sex,
          ' не вызывает тревоги.',
        ]);
        await era.printAndWait(
          'Как ни крути, даже если в будущем ещё будут шансы, двое бесконечно дорогих друг другу людей снова упустили возможность стать ближе сердцами.',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' — спина, в одиночку собирающая волосы, выглядит чересчур тоскливо…',
        ]);
        await era.printAndWait([
          'Разумеется, в последующие дни ',
          you.get_colored_name(),
          ' из-за того, что ',
          urara.get_colored_name(),
          ' всегда такая мрачная, и многие спрашивали.',
        ]);
        await era.printAndWait(
          'А уж почему… если б тогда получилось быть прямее, было бы лучше, да?',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  101: (() => {
    const title = 'Собственничество';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {string} self_name 春乌拉拉的自称
     */
    const f = async (urara, inner_urara, you, callname, self_name) => {
      await inner_urara.say_as_unknown_and_wait(
        'Маленькая Урара тоже умеет ревновать, вот и всё.',
      );
      era.drawLine();
      await era.printAndWait([
        'Когда ',
        you.get_colored_name(),
        ' появляется у входа на Тренировочное поле и вдруг навстречу с разбегу выскакивает ',
        urara.get_colored_name(),
        ' и врезается прямо в объятия.',
      ]);
      await urara.say_and_wait([
        'Сегодня тоже будь со мной! Если ',
        callname,
        ' захочет — мы можем делать что угодно, да?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' спереди обеими руками крепко хватает ',
        you.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' полностью лишается шанса отвести взгляд и сбежать.',
      ]);
      await era.printAndWait([
        'А теперь, так и не сообразив, что происходит, ',
        you.get_colored_name(),
        ' остаётся лишь слегка напряжённо встретить ',
        urara.get_colored_name(),
        ' — улыбку.',
      ]);
      await urara.say_and_wait([
        'Так что сегодня ещё побудь с ',
        self_name,
        ' ещё чуть-чуть!',
      ]);
      await era.printAndWait([
        'И не дав ',
        you.get_colored_name(),
        ' шанса ответить, ',
        urara.get_colored_name(),
        ' с чуть ненастоящей улыбкой в одностороннем порядке заканчивает разговор.',
      ]);
      await era.printAndWait([
        'Затем ',
        urara.get_colored_name(),
        ' с неожиданной силой полутаща ',
        you.get_colored_name(),
        ' прочь с Тренировочного поля.',
      ]);
      await era.printAndWait([
        'От одиночества, что ли? Впрочем, ',
        urara.get_colored_name(),
        ' появилась здесь… наверное, просто случайность?',
      ]);
      await era.printAndWait([
        'По крайней мере, чем немыслимая заранее устроенная засада Урары, ',
        you.get_colored_name(),
        ' охотнее верит именно в это.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
