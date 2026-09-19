# @file 目白麦昆 - 日常
# @author 伊兰
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Доброе утро, %CALLNAME%. Давай вместе в столовую позавтракаем и потом на тренировку.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Добрый день! И сегодня давай держать тот пыл, с каким начался наш договор.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Добрый день. И этот день давай проведём изящно.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ради заветной мечты семьи Мэдзиро я готова на что угодно.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Облик — основа дня. Чтобы сонное лицо не утащить в свет, я каждое утро тщательно собираюсь.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Доброе утро. Чтобы день был хорошим, давай взбодримся.」"
    # STATUSNAME:1 = 熬夜
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Как %UMA% семьи Мэдзиро почти опоздать из-за бессонной ночи… какой стыд.」"
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ха-а～ вчерашний бейсбол, кстати, был так хорош… я ничего не говорила! Честно, ничего!」"
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Очень прошу прощения: легла вовремя, но приснился кошмар про Голд Шип… стоит только вспомнить — мурашки…」"

select:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「И сегодня я стараюсь, чтобы слава семьи Мэдзиро жила дальше.」"
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「И сегодняшнюю тренировку тоже прошу тебя, %CALLNAME%.」"
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ты меня ищешь, %CALLNAME%?」"
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      random: true
      lines:
        - "「Спит…」"
        - "%YOU% смотрит на спящую в кабинете тренера Маккуин — чувства путаются."

good_night:
  sync: true
  lines:
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      lines:
        - if: era.get('status:13:39') === 0
          content: "「Вечно себя загоняет…」"
        - "%YOU% с некоторым трудом несёт выдохшуюся Маккуин на руках, как принцессу, вниз к общежитию."
        - "「Тогда уж прошу, отведи %SEX% обратно.」"
        - "Староста общежития кивает и осторожно принимает Маккуин."
        - "%YOU% наконец отпускает эту ношу, глубоко вдыхает, смотрит на ярко освещённое студенческое общежитие и поворачивает к своему."
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Спасибо за труд, %CALLNAME%, до завтра!」"
        - "День наконец кончен: %YOU% стоит у входа в общежитие и смотрит вслед, как Маккуин уходит внутрь."
        - "%YOU% смотрит на машущую Мэдзиро Маккуин и с улыбкой отвечает тем же."
        - "Только когда Мэдзиро Маккуин поднимается наверх и %SEX% уже не видно, %YOU% оборачивается и идёт к себе в общежитие."


talk:
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Сейчас форма отличная — вот какой должна быть я, %UMA% семьи Мэдзиро!」"
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Сегодня сил полно. Давай, %CALLNAME%, какую ни дашь нагрузку — я приму!」"
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, какая сегодня тренировка? Смотри, закончу быстрее обычного.」"
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Форма будто лучше обычного.」"
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Давай, %CALLNAME%, с чего начнём?」"
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「И сегодня буду стараться на тренировке, %CALLNAME%.」"
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Прости, %CALLNAME%, сегодня внимание плохо держится…」"
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Уу… сегодня будто сил нет…」"
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Знаю, что надо бодрее, но тело будто не пускает…」"
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%UMA% семьи Мэдзиро не падёт от такого…」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Семья Мэдзиро огромная: в детстве я помечала путь мягкими игрушками, чтобы не заблудиться.」"
  # CFLAGNAME:66 = 招募状态
  - if: era.get('cflag:7:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALL_7%… не знаю почему, но с тех пор как мы случайно познакомились, так и липнет ко мне.」"
  - if: era.get('cflag:63:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Не смотри на суровый вид %CALL_63%: на деле очень мягкий человек.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Как насчёт как-нибудь зайти на чашку послеобеденного чая? Угощу тебя по обычаю семьи Мэдзиро.」"
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「В следующий раз вместе на бейсбол? Если стерпишь, как я там себя веду…」"
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「У %UMA% нашей семьи Мэдзиро у всех свои тайные увлечения, так что ничего особенного.」"

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Это мне подарок? Искренне благодарю. Надо ответить так, чтобы видна была щедрость семьи Мэдзиро…」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Подарок от %CALLNAME% я буду беречь.」"

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Чтобы желание сбылось, давай пройдём весь обряд до конца.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Стоит подумать, сколько умамусумэ в истории Трейсена ушло с травмами — и всё равно страшно.」"

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Смотреть на поплавок у пруда и каждую секунду держать внимание ради рыбы — может, в этом и суть рыбалки.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Какая большая рыба. Сфотографируемся с ней вместе?」"

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Стоит вечером пройтись у реки в прохладе — на душе сразу легче, и заботы на время отпускаешь.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ветер у реки такой приятный. В следующий раз пробежаться здесь вместе?」"

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Если не вытащить — может, просто купим?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ах, Тэйо-сан очень любит этот танцевальный автомат.」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Хочешь вытащить мою куклу? Ну правда, я же сама уже рядом.」"

o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Если представить, что удача уже при тебе — наверное, и выпадет что-то хорошее.」"
  - "Маккуин берёт из рук %YOU% билет розыгрыша и с надеждой крутит."
  - "Гур-рур-рур…"
  - "Только когда шарик в барабане выпадает, Маккуин останавливается."
  - if: d.hot_spring === 1
    random: true
    lines:
      - "Маккуин с горящими глазами подходит к %YOU%."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, мне выпал билет на поездку к источникам!」"
      -
      - acc: 1
        content: "「Поздравляю!」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Хотя у семьи Мэдзиро там есть отличные источники, но раз с %CALLNAME% — лучше как обычные люди.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Так когда используем этот билет? Похоже, он без срока?」"
      -
      - acc: 1
        content: "「Как насчёт расслабиться так после выпуска Маккуин?」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「И то правда. Так что %CALLNAME% хорошенько сохрани этот билет.」"
      - "Сказав это, Маккуин протягивает билет к источникам, а %YOU% проводит по нему пальцами и аккуратно кладёт в кошелёк."

o_s_ktv:
  - random: true
    lines:
      - "Потому что нужна репетиция сцены победителя, %YOU% с Маккуин приходят в караоке."
      - "「Голос Маккуин и правда небесный.」"
      - "%YOU% дослушивает пение Маккуин и невольно расплывается в отеческой улыбке."
  # CFLAGNAME:57 = 扩展变量
  - if: era.get('cflag:13:57')?.love_40 === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Вышиби вон—YATAKA!!」"
      - "%YOU% сзади смотрит, как Маккуин, долго сдерживавшаяся, будто изо всех сил орёт любимую кричалку своей бейсбольной команды."
      - "Н-да… зато редко увидеть Маккуин такой детской — уже стоило."
  - if: era.get('love:13') > 75
    random: true
    lines:
      - "「Той, кто ветер понесла～♫」"
      - "「Взгляд чуть горячий～♫」"
      - "Непонятно почему, но с тех пор как с Маккуин перешли ту грань, эти две строки у %YOU% всегда вырываются с жаром."
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Waiting for Tomorrow～♫」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Можно идти по чуть-чуть～♫」"
      - "Лёгкий аккомпанемент сливается с нежным голосом Маккуин."
      - "Как же хорошо."

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「К… как %YOUNG_LADY% семьи Мэдзиро я не могу пугаться такой ерунды…!」"
      - "%YOU% смотрит: у Маккуин холодный пот, ноги дрожат, и поневоле берёт %SEX% за руку, чтобы %SEX% удержалась стоя."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Фильм про любовь… %CALLNAME% неожиданно с девичьим сердцем. Кстати, очень хочется узнать, как %CALLNAME% смотрит на любовь.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Если про любимое кино — наверное, детективы. В хорошем фильме большой поворот, когда всё уже легло, — вот это всегда сюрприз и восторг!」"

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, после еды можно чуть заказать десерт? Честно, лишнего не возьму!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Мясо в этом хотпоте первосортное. Может, в следующий раз тоже сюда?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Раз я уже следила за весом, можно мне порцию? Тогда я приступаю!」"

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Прости～ я чуть подкрасилась, поэтому заставила тебя ждать. Куда сегодня пойдём?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「В благодарность за то, как %CALLNAME% меня всё это время учит, сегодня счёт за мной.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Через дорогу спокойнее, когда держимся за руки～」"
  - if: era.get('love:13') >= 51
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「А давай попробуем вот так… да, за руки. Как-то волнительно, если фанаты узнают.」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, ноги устали? Тогда найти место потише и дать тебе подушку на коленях?」"
      - "И вот на скамейке в тени %YOU% под лёгкими поглаживаниями Маккуин закрывает глаза и понемногу отпускает."

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Одежда… как смотрится?」"
      - "Маккуин открывает дверь примерочной и крутится перед %YOU%."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「На первых этажах некоторых торговых центров обычно стоят дорогие бренды, и вещи там куда дороже. Показать тебе, %CALLNAME%?」"

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Старшие нашей семьи наверняка смотрят на меня, что несёт эту ношу.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Иногда я, на кого столько надежд, тоже чувствую, как это всё связывает до удушья.」"

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「За руки — и в академии? Если нас увидят…」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Кажется, на нас столько глаз… спокойно, спокойно…」"

s_r_lunch:
  - random: true
    lines:
      - "Сегодня вместе с Маккуин поднимаетесь на крышу; Маккуин принесла бенто, чтобы разделить его с %YOU%."
      - "%YOU% после кучи дел набрасывается на еду, как на спасительную соломинку."
  - random: true
    lines:
      - "Только что вместе поели — а Маккуин уже неподвижно на плече %YOU%. Так быстро клонит в сон?"
      - "%YOU% чуть не может высвободиться и потом растерянно держит позу, лишь бы не разбудить Маккуин."
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, а—」"
      - "С тех пор как переступили ту грань, даже обед сам собой тянется дольше."
      - "Наверное, потому что Маккуин кормит %YOU% ложка за ложкой."
      - "%YOU% понемногу привыкает и с улыбкой принимает кормление Маккуин."

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ну… я хочу парфе.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Годы в одиночестве — и готовка уже в тягость? Пока я рядом, %CALLNAME% всё ещё так думаешь?」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Недавно я расспросила слуг про готовку, так что сегодня принесла бенто сама. Попробуешь?」"

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Даже %UMA% семьи Мэдзиро знает не всё.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Поэтому, %CALLNAME%, прошу тебя меня наставить.」"

office_rest:
  - random: true
    lines:
      - "Хотела лишь чуть закрыть глаза от сонливости — и нечаянно уснула."
      - "%YOU% чувствует что-то странное на плече, смотрит вбок — и это спящая Мэдзиро Маккуин."
      - "И %YOU% невольно ещё несколько минут так и сидит."
  - random: true
    lines:
      - "「Тихо… не двигайся, вот так…」"
      - "%YOU% не обращает внимания на покрасневшие щёки Маккуин у себя на коленях и ватной палочкой чистит ей уши — %SEX% лежит."
      - "Только на ощупь конские уши куда страннее человеческих…"
  - if: era.get('love:13') >= 41
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Я принесла кассету с бейсбольным матчем. Посмотрим бейсбол?」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Нравится подушка на моих коленях? Если %CALLNAME% любит — я всегда готова так.」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - "「Маккуин, иди сюда, обнимемся.」"
      - "Получив согласие Маккуин, %YOU% крепко обнимает её тело и жадно вдыхает запах её волос — %SEX% в объятиях."
      - "Нет ничего слаще, чем так прилипнуть к близкой подопечной."

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ты все приёмы монстра уже читаешь, крутишь его в ладони — как же здорово.」"
      - "%YOU% так ловко ведёт игру, что Маккуин рядом в шоке закрывает рот рукой."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Такая игра проверяет, одно ли у нас сердце и одно тело, — я обязательно её пройду.」"
      - "Неумелая Маккуин силится привыкнуть к геймпаду и играет с %YOU% вдвоём."

# 新秀年
birthday1:
  title: "День рождения при знакомстве"
  lines:
    - "В кабинете тренера в день рождения Маккуин присутствующие %UMA% семьи Мэдзиро сидят по местам тихо, будто сговорились, и все глаза смотрят в одну точку."
    - "А куда смотрят %THEY% — конечно, на сегодняшнюю виновницу."
    - "%YOU% кладёт руки на плечи Маккуин с повязкой на глазах и медленно ведёт %SEX% к большому столу."
    - acc: 1
      content: "「Готово.」"
    - "Когда %YOU% снимает повязку, %UMA% семьи Мэдзиро за большим столом хором кричат"
    - content:
        - fontWeight: bold
          content: "Все"
        - "「С днём рождения, Маккуин!!!!!!」"
    - "Перед глазами — не только самые родные сёстры семьи Мэдзиро, но и празднично убранная стена, а на ней полотно с ясными буквами 「С днём рождения, Мэдзиро Маккуин!」."
    - "Маккуин чуть удивляется — и сладко улыбается."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Спасибо всем.」"
    - "Когда Маккуин садится, Рамону с лёгкой улыбкой протягивает ей письмо."
    - color: %COLOR_86%
      content:
        - fontWeight: bold
          content: %RAMONU%
        - "「Письмо тебе от бабушки.」"
    - "Услышав это, Маккуин сразу серьёзно поднимает уши, берёт письмо, вскрывает и читает внимательно."
    - "Поздравление с первым днём рождения в академии, снова слова о заветной мечте семьи Мэдзиро и напоследок наказ Маккуин хорошо тренироваться в стенах академии…"
    - "Спустя долгое время %SEX% аккуратно складывает письмо."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я продолжу славу Мэдзиро.」"
    - acc: 1
      content: "「В общем, сначала давай просто весело отметим день рождения.」"
    - "Маккуин чуть удивлённо смотрит на %YOU% за спиной и инстинктивно закрывает текст письма."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И то верно.」"
    - "%SEX% убирает письмо — и лицо сразу теплеет."
    - "Общая песня, желание, торт — когда всё пройдено, день тоже закрывается праздником Маккуин."

birthday2:
  title: "День рождения на второй год"
  lines:
    - "На этой неделе, ко дню рождения Маккуин, %YOU% ведёт её к себе в квартиру."
    - acc: 1
      content: "「Сядь здесь, хоть книгу, хоть телевизор — только не вставай.」"
    - "%YOU% так говорит Маккуин, а та лишь тихо бурчит пару фраз и соглашается на твою просьбу."
    - "Через несколько минут %YOU% двумя руками выносит из кухни дынное парфе и ровно ставит перед Маккуин."
    - "%YOU% с усмешкой смотрит, как Маккуин не отрывает глаз от парфе, и с улыбкой садится напротив %SEX%."
    - "「Чтобы поздравить сегодняшнюю именинницу, я специально сделал(а) это парфе.」"
    - "Слова %YOU% будто успокаивают Маккуин: %SEX% берёт длинную ложку и всё не решается откусить."
    - "%SEX% тоже начинает колебаться — это уже на лице."
    - acc: 1
      content: "「Боишься поправиться? В этом парфе всё на низкой калорийности.」"
    - "%YOU% склоняет голову и смотрит на Маккуин."
    - "Но Маккуин качает головой."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Просто парфе от %CALLNAME% своими руками… жалко так сразу съесть.」"
    - acc: 1
      content: "「Я и в обычные дни тебе готовлю, но если ещё будешь тянуть — парфе растает.」"
    - "Выслушав %YOU%, Маккуин остаётся взять парфе одной рукой, ложку другой, осторожно зачерпнуть чуть мороженого и медленно смаковать."
    - "Потом гладит щёку и делает то самое сладкое лицо, когда вкус на самом пике."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Парфе %CALLNAME% всё-таки вкуснее, чем в любой кондитерской.」"
    - "И всё же %SEX% по-прежнему пробует маленькой ложкой за маленькой."
    - "А %YOU% смотрит на наслаждение на лице %SEX% и вместе так тратит время."

birthday3:
  title: "День рождения на третий год"
  lines:
    - "Вечер дня рождения Маккуин."
    - "Маккуин с повязкой на глазах, ведомая %YOU%, идёт к кабинету тренера."
    - "В миг, как снимают повязку, друзья Маккуин в кабинете тренера кричат хором."
    - content:
        - fontWeight: bold
          content: "Все"
        - "「С днём рождения, Маккуин!!!!!!」"
    - "Кроме того, слева и справа от Маккуин рвутся две хлопушки."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Все…」"
    - "Видя такую пышность, Маккуин закрывает рот, силясь спрятать, как её проняло."
    - acc: 1
      content: "「Сегодня вечером не держи нервы в струне, расслабься вволю.」"
    - "%YOU% берёт Маккуин за руку — и %SEX% садится рядом, перед тортом."
    - "Дальше — классика: вместе поют день рождения, загадывают желание."
    - "А на подарках каждый отдаёт Маккуин что-то своё, только %YOU% всё не подносит."
    - "%YOU% открывает шкафчик у рабочего стола и берёт одну вещь."
    - "「Хотя сейчас это, может, не совсем к месту.」"
    - "%YOU% показывает Маккуин подарок."
    - "—щит Tenno Sho (Spring) из бумаги."
    - "「В этом месяце как раз Tenno Sho (Spring), в общем желаю победы.」"
    - "Маккуин перед ними держит щит двумя руками и лишь спустя паузу открывает рот."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Какой ты глупый, %CALLNAME%.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Жди—я принесу настоящий щит Tenno Sho.」"
    - "Маккуин с решимостью на лице гладит 「щит」, что %SEX% получила в подарок от %YOU%."
    - acc: 1
      content: "「В общем, сначала насладимся днём рождения.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И то верно.」"
    - "Положив тот щит на рабочий стол, %YOU% и Маккуин сразу возвращаются в празднующую толпу."