# @file %CHARA% - 育成
# @author KUN
train:
  # BASENAME:0 = 体力
  - if: era.get('base:64:0') < era.get('maxbase:64:0') * 0.45
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ой, даже у %SELF_CALL% есть предел…」"
      - "%CHARA% криво улыбается, но сборы не бросает."
  - if: era.get('base:64:0') >= era.get('maxbase:64:0') * 0.45
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Ну как, тренер? Сегодняшняя %SELF_CALL% — огонь по полной!」"
          - "Чуть наклоняется на старте, в глазах серьёзный блеск."
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Меня сейчас так прёт…」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Если гольфом мерить — сегодня точно выбью супер-счёт!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Сейчас такое чувство, что могу бежать без остановки.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Понесусь на взрывной скорости… нет, на божественной — и буду вести до конца!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「М-м~ все стараются~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Глядя на это, даже меня завело… отлично!」"
      # CFLAGNAME:40 = 干劲
      - if: era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Хм-хм~ настрой огонь!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Начинаем сегодняшнюю тренировку!」"
      - if: era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Ого, уже время тренировки?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Тогда бежим на полную!」"
      - if: era.get('cflag:64:40') < 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Иногда… хочется просто выключить голову и копать нору~」"
          - "Голос какой-то эфемерный, слегка покачивается"
      # CFLAGNAME:48 = 育成回合计时
      - if: era.get('cflag:64:48') > 47 + 24
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Меня несёт так, что крышу срывает…」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Чтобы ещё сильнее завелась — прошу тебя, %CALLNAME%!」"

ts_add:
  title: "Доп. тренировка"
  lines:
    - "Тренировка кончилась, но вокруг ещё слышны %UMA%, которые собираются на доп."
    - "Уши %CHARA% ловят звуки вокруг и заинтересованно дёргаются."
    - "По плану сейчас уже отдыхать, но раз %CHARA% так хочет…"
    - acc: 1
      key: select
      content: "「Хочешь — иди.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Поняла! Тогда я туда!」"
        - "%CHARA% с улыбкой бежит обратно на Тренировочное поле и без всякой неловкости вливается в тренировку."
        - "Придётся сверхурочить."
    - acc: 2
      content: "「В следующий раз и мы так.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ясно! Тогда сегодня отдыхаю на полную.」"
        - "%CHARA% кладёт руки за голову и мимоходом локтем легонько стукает напарника рядом."

train_fail:
  title: "В медпункте"
  lines:
    - "На тренировке вышла маленькая неприятность…"
    - "Срочно в медпункт: уложив %CHARA% на кровать, наконец выдыхаешь."
    - "%CHARA% смотрит на волнующегося рядом %YOU% и невольно тихо смеётся."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ахаха, не переживай, у %SELF_CALL% тело крепкое.」"
    - acc: 1
      content: "「Так нельзя. Отдыхай как следует」"
    - acc: 2
      content: "「Что ты сама веришь своему телу — важнее всего」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м, ну да.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не волнуйся, скоро спущусь.」"
    - "Поднимает руку и легонько стукает %YOU% в грудь."

race_start:
  title: "Перед скачками"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Готова полностью! Могу хоть сейчас!」"
    - "Ни капли колебаний: в комнате отдыха крутит плечами, уже готова выходить"
    - "Такой Мэдзиро Палмер лишние слова тревоги ни к чему"
    - acc: 1
      content: "「Беги с кайфом!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「О! Поняла!」"
    - "Показывает %YOU% большой палец и расслабленно выходит из комнаты отдыха"

race_end_win:
  title: "Победа в скачках"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё-таки бежать свободно — самое то!」"
    - "Палмер спокойно стоит перед %YOU%, смахивая пот с белой шеи"
    - "Руки после ленивой потягушки сами ложатся за голову"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хехе, и тренеру спасибо~」"

race_end_lose:
  title: "Поражение в скачках"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А… проиграла」"
    - "Палмер руки в боки, уныло смотрит в землю"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ну вот, что я творю…」"

#招募后休息
beginning:
  title: "Мэдзиро Палмер на сцене!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер! Я готова!」"
    - "Палмер на поле машет %YOU%, тело уже в боевой готовности"
    - "Пара лёгких подскоков — всё готово"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Разминка только такая, но хватит, да?」"
    - "Среди всех вокруг её разминка уже самая полная, но Палмер всё равно смотрит на себя с придиркой"
    - acc: 1
      content: "「По-моему, уже хватит」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, да? Ахаха…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я всегда думаю, что этого мало! Вот так」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё-таки когда кто-то смотрит — куда лучше!」"
    - "Глядя на такую Палмер, у %YOU% внутри лёгкое беспокойство"
    - "Записей с Тренировочного поля полно — чуть поищешь, и найдёшь"
    - "Просмотрев записи Палмер, %YOU% уверен(а): %SEX% вовсе не так слаба, как %SEX% говорит, — не хватает чего-то решающего"
    - "Например, та посадка, что в тот день в скачках?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ну, какая сегодня тренировка?」"
    - acc: 1
      content: "「До плана сначала просто побегай как хочется」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, просто побегать?」"
    - "В голосе Палмер удивление"
    - acc: 1
      content: "「Конечно. Своим любимым стилем」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Своим любимым? Но так скажут, что в семье Мэдзиро завёлся какой-то странный самобытный %UMA% — это уже не очень」"
    - acc: 1
      content: "「Я подписал(а) контракт с тобой, Мэдзиро Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э? Это как?」"
    - acc: 1
      content: "「Я хочу, чтобы Палмер бежала своим стилем… а не под именем Мэдзиро」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хаха! Вот оно как!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вот это мой тренер!」"
    - "Смех Палмер звонкий, может, и правда рада"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда я побегу по-своему, ладно?」"
    - acc: 1
      content: "「Ага. Я буду смотреть на тебя」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всегда смотреть — звучит странно… но я рада!」"
    - "Улыбка — лучшее лицо, и сейчас у Палмер самая сияющая из всех, что ты видел(а)"

#进入新秀年5月1周
rumor:
  title: "Маленькие слухи"
  lines:
    - "После тренировки %YOU% один(одна) в своём кабинете разбирает бумаги"
    - "Палмер хорошо идёт по плану, так что план тем важнее довести до идеала"
    - "На середине работы дверь кабинета открывается"
    - "Тренер-сэмпай「А, ты здесь」"
    - "Тренер-сэмпай「Твоя напарница — та Мэдзиро Палмер, да?」"
    - "Тренер-сэмпай「Как сказать… с той девчонкой в паре — не самый лучший выбор」"
    - "Тренер-сэмпай「По моему опыту, %SEX% не из сильных %UMA%, тренировать будет тяжело」"
    - "Слова неприятные, но злобы в них не слышно"
    - "Может, и не врёт — но для %YOU% это уже другое"
    - acc: 1
      content: "「Даже так мне всё равно」"
    - acc: 2
      content: "「Но %SEX% — моя напарница」"
    - "Тренер-сэмпай「Впрочем, я просто так сказал(а), как будет — смотри сам(а)」"
    - "Тренер-сэмпай「Удачи」"
    - "Дверь захлопывают мимоходом, %YOU% только усмехается и продолжает работу"
    - divider: true
      content: "За кабинетом"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вот оно как… тяжело тебе, тренер」"
    - color: %COLOR%
      content: "Случайно услышала весь разговор за дверью и, пока не заметили, сбегает"
    - color: %COLOR%
      content: "Всё-таки убегать — конёк Мэдзиро Палмер"
    - color: %COLOR%
      content: "Вот где Мэдзиро Палмер сильна…"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я… сбежала」"
    - color: %COLOR%
      content: "Бессильно говорит себе в стену"

#新秀年5月2周
strange:
  title: "Странное пространство"
  lines:
    - "На тренировке это видно даже непрофессионалу"
    - "Бег Палмер в последнее время как-то странно просел"
    - "Для тренера %YOU% пора что-то делать"
    - divider: true
      content: "Конец тренировки"
    - "Когда время вышло, Палмер осталась одна, будто подавленная"
    - acc: 1
      content: "「Что-то случилось?」"
    - acc: 2
      content: "「Настроение плохое?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ну… как сказать…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вроде да, наверное」"
    - "Палмер рассеянно пинает дёрн, взгляд уходит от %YOU%"
    - "Может… претензия к %YOU%?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как сказать~ просто…」"
    - "Не то, что ты думал(а): Палмер мучительно подбирает слова, они застревают"
    - "Пока, будто решившись, снова ловит лицо %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「На днях, когда я шла к тебе」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Услышала кое-что… про меня, хотя не очень разборчиво」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ты думал(а)… что я на самом деле не сильная %UMA%?」"
    - acc: 1
      content: "「Вообще нет」"
    - acc: 2
      content: "「С чего бы」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Да? …」"
    - "Чуть опавшие уши Палмер, услышав %YOU%, сразу встают"
    - "С плохим настроением, кажется, разобрались"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ой~ я ещё боялась, что ты тоже так думаешь」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А я накрутила себя~」"
    - "Будто вслед за ушами голос тоже становится естественным"
    - "Напряжённые мышцы на глазах отпускает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Спасибо, тренер, что так веришь」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я уже готовилась начать заново! Вот так~」"
    - "Глядя на естественную улыбку, %YOU% тоже улыбается"
    - "Искренняя улыбка заразительна"

#进入新秀年6月第一周
free_race:
  title: "Пойти на фри-рейс?"
  lines:
    - "Будничные тренировки чуть суховаты, даже Палмер поникла"
    - "Чтобы Палмер развеялась, выходите вдвоём побродить по улице"
    - "Проходящая %UMA%「Там фри-рейс!」"
    - "Проходящая %UMA%「Уже начинается? Я смотреть!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Фри-рейс?」"
    - acc: 1
      content: "「Вроде уличные скачки любительских %UMA%, я тоже только слышал(а)」"
    - "Выслушав %YOU%, Палмер с интересом смотрит в сторону убежавших %UMA%"
    - "(Если в Twinkle Series всё ещё нервничает — может, глянуть фри-рейс)"
    - "Чуть подумав, вы молча срываетесь туда же"
    - divider: true
      content: "Фри-рейс, трасса"
    - "Сравнивать с ипподромом URA… не получится"
    - "Маленькая временная трасса, но жара зрителей не слабее грейдед-скачек"
    - "Стоите среди зрителей, смотрите, как выходят бегуны, настроение поднимается вместе с шумом"
    - "Не дебютировавшие %UMA%, уже выпустившиеся, даже сэмпаи, ушедшие с травмой, — все разминаются на старте"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как шумно…」"
    - "Раскладка трассы не по правилам, но никому нет дела"
    - "Зрители смотрят сами скачки и кричат каждому бегущему %UMA%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вот бы и мои скачки так же заводили всех」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Чтобы болели за меня…」"
    - "Ведущая %UMA%「Эй, %UMA% там! Тебе тоже охота, да?」"
    - "Между %YOU% и Палмер вклинивается %UMA%, что только что вела скачки, и тычет в растерянную Палмер"
    - "Ведущая %UMA%「На фри-рейсе происхождение не спрашиваем, имя есть — и ладно!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э! Правда?!」"
    - "На лице Палмер вспыхивает обычная весёлая улыбка, она с интересом подхватывает"
    - "Для Палмер, скованной именем Мэдзиро, это должен быть совсем новый опыт"
    - acc: 1
      content: "「Тогда попробуй!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Поняла!」"
    - "Подбодрённая Палмер тут же сжимает кулаки и идёт за ней на трассу"
    - "Только когда представляется — чуть промахивается"
    - "Ведущая %UMA%「Итак, имя на скачки!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Имя, да…)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Если взять имя Мэдзиро, глаз будет слишком много, да и бабушка ещё чего скажет…)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(М-м, решено!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Зовите просто Палмер!」"
    - "Ведущая %UMA%「Хм, вроде знакомо? Ну да ладно!」"
    - "Ведущая %UMA%「Добро пожаловать, Палмер!」"
    - "На выход Палмер куда естественнее, чем в школе"
    - "Немного нервничает, но держит спокойный вид"
    - "Зритель「Палмер? Вроде из той семьи?」"
    - "Зритель「Да какая разница, тут на это плевать!」"
    - "На трибунах никому нет дела до происхождения Палмер — только ожидание новой участницы"
    - "Чувствуя чистое ожидание вокруг, Палмер понемногу кладёт всю голову на дорожку"
    - "Любительская трасса, рядом не топ Трейсена"
    - "В такой обстановке Палмер смеётся без удержу"
    - "Семья Мэдзиро, Twinkle Series, Трейсен — всё за спину"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё-таки когда бежишь… супер кайф!」"
    - "Ведёт всю трассу и без всяких сомнений берёт первое"
    - "Ведущая %UMA%「Первое! Сегодняшняя новичок, Палмер!」"
    - "Зрители「Палмер! Палмер! Палмер!」"
    - acc: 1
      content: "(Вот так тебе и надо бежать)"
    - "Услышала ли Палмер голос %YOU% или крики своего имени вокруг"
    - "Палмер на финише показывает трибунам два пальца и смеётся свободно"

# 出道战
begin_race:
  title: "Старт скачек"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё-таки дебютные скачки — это нервы」"
    - "Палмер смотрит на стоящего рядом %YOU% и нервно жмётся к стене"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что делать, тренер, если дебют провалю…」"
    - acc: 1
      content: "「Ничего. Беги по-своему, Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「По-своему… м-м, поняла」"
    - "Дрожь понемногу стихает, она заново собирает тело"
    - "Выровняв дыхание, сжимает кулаки"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Да. Своей посадкой… поняла!」"

# 出道战胜利
begin_race_win:
  title: "Открытие беглянки!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Супер кайф, тренер! Всё-таки своя посадка — это и есть мой стиль!」"
    - "Сходя с трассы, Палмер прыгает перед %YOU% от возбуждения, и тело под номером прыгает вместе с ней"
    - "Чуть остыв, крепко хватает руку %YOU% и говорит всерьёз"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Спасибо, тренер! Без твоего доверия я бы так не смогла!」"
    - "Глядя на взведённую Палмер, %YOU% только неловко чешет затылок и протягивает ей полотенце"
    - "Сейчас нужно одно — верить: %SEX% справится"

#进入新秀年7月
mejiro:
  title: "Тяжесть имени Мэдзиро"
  lines:
    - "Семья Мэдзиро — дом, который почти ни один тренер не обходит"
    - "И для %YOU%, уже подписавшего(ей) с Мэдзиро Палмер, это тоже гора"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, э… тебе не обязательно было идти」"
    - "Палмер неспокойно идёт по дорожке Трейсена и то и дело оглядывается на %YOU% рядом"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И не домой в семью, просто поздороваться со всеми, не надо так нервничать」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Маккуин и Райан %THEY% точно не будут копаться в тебе, правда」"
    - acc: 1
      content: "「Не, нервничаю не я」"
    - "Легко протыкает её слова — и разговор между вами на миг обрывается"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А… спалилась?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ну… да, немного нервничаю」"
    - "Палмер легонько перебирает волосы по бокам, неловко"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Маккуин и Райан же звёзды, на которых все ставят, и когда стоишь с %THEY%…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тоже %UMA% семьи Мэдзиро, тот же год… только я чуть, слабовата」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Да и такая развязная %UMA% как я не пробежит так элегантно, как %THEY%, немного…」"
    - "Не договорила, но сказанное уже ничем не отличается"
    - acc: 1
      content: "「Имя Мэдзиро правда так важно?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э?」"
    - acc: 1
      content: "「Палмер есть Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не, это я знаю, но…」"
    - "На лице Палмер грусть, и уши понемногу опадают"
    - acc: 1
      content: "「Даже без имени Мэдзиро я не считаю тебя слабой %UMA%」"
    - "Медленно, но уши Палмер всё же тихо встают"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Спасибо… снова как-то есть вера」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ты раньше говорил(а), посадка, которая мне подходит, да?」"
    - "Палмер резко сворачивает тему, но %YOU% отлично понимает, что это"
    - "Пока сбежать с этого разговора"
    - acc: 1
      content: "「Да. Вот это и есть твоя посадка」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда давай договоримся, тренер」"
    - "Вдруг останавливается: ветер по лицу шевелит лёгкие волосы Палмер"
    - "Сбитый(ая) её остановкой, замираешь перед Палмер и оборачиваешься"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Выиграть такой посадкой… какая награда тренеру, который в меня поверил?」"
    - acc: 1
      content: "「Тогда я буду ждать тот день, Палмер」"
    - acc: 2
      content: "「В тот день я точно буду рядом」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но сейчас только дебют, не надо так спешить, да? Ахаха…」"
    - "С расслабленным смехом Палмер срывается лёгкой рысцой"
    - "Проскакивает мимо %YOU% и бежит за школу"
    - "Сегодня ещё вечеринка, надо прибавить шаг"

#进入经典年1月1周
new_year_1:
  title: "Новогодние цели"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「С новым годом, тренер!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Дождались~, новый год」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Арэ, а Хелиос?」"
    - acc: 1
      content: "「%SEX% сегодня не придёт」"
    - "Лицо Палмер на миг тупеет, но быстро выравнивается"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Правда?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда сегодняшняя новогодняя тусовка — только мы двое」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как-то странно, обычно мы втроём орём и шумим」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но просто провести как всегда — норм, да? Год начинается с начала~ и всё такое!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Короче, чем заняться? Осечи-BBQ или льву ресницы нарисовать!」"
    - acc: 1
      content: "「Осечи-BBQ!?」"
    - acc: 2
      content: "「Эх, у нас вообще есть танцующий лев?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Нет~ просто в голову пришло」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Кто ж осечи на гриль кинет, ахаха」"
    - "Под изумлением %YOU% Палмер тут же забирает свои предложения"
    - "И правда: вдвоём Палмер не может разогнаться до обычной тусовочной версии"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, точно!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренировки сегодня нет, но я всё равно хочу поставить цель на год」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Типа какие скачки бежать! М-м, какие большие события в этом году…」"
    - "Почему-то лицо Палмер чуть мрачнеет, будто уходит в мысль"
    - "Вот тут и выходит тренер %YOU%"
    - acc: 1
      content: "「Classic Triple Crown」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А… Classic Triple Crown」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Супер~ давящее имя!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Ну да. Я наконец до этого года дожила~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Время жестокое: есть талант или нет — всех одного года вяжут вместе」"
    - "На расслабленном лице проседает тень, давление видно даже так"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Самая сильная в этом году, наверное, Райан」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Звезда скорости, на которую ставит вся семья Мэдзиро…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Чтобы %SEX% и я — на одной трассе? Даже в шутку не хочу представлять」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я тоже пашу, но разрыв в силе всё же…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Жёсткая реальность! Но сделать я могу только одно!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Давай сбежим, тренер!」"
    - acc: 1
      content: "「Сбежать?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага. От реальности!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Цели — это хорошо, но если год так начнётся, я снова стану как раньше!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Нет чего-то весёлого… от чего отпускает~」"
    - "Убирает грусть с лица, возвращается к началу и думает всерьёз"
    - "Как сбежать от реальности, почувствовать свободу, что-то весёлое…"
    - acc: 1
      key: select
      content: "「В поле!」(скорость+20)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「В поле! Точно, этот взрыв юности можно вылить только в землю!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тогда переоделись и вперёд! Полный ход!」"
        - "В школе есть поле, но запал Палмер всё равно застаёт %YOU% врасплох"
        - "Смотришь, как Палмер орёт фразу, где-то слышанную, переодевается в спорт и несётся наружу"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А-а-а-а-а!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Фух, фух, ну как, тренер, этот вид!」"
        - acc: 1
          content: "「Круто, всё сразу готово」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это один из моих коронных трюков — копать ямы!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「С малых лет умею, по скорости вспашки я не проиграю」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тогда начинаем побег! Пока жар не остынет — пока, тренер!」"
        - acc: 1
          content: "「Эй, Палмер!」"
        - "Потный %YOU% пытается схватить Палмер, но после показанного трюка её уже нет за секунды"
        - "Начало года — неожиданный трюк Палмер"
    - acc: 2
      content: "「Закупиться в магазинах!」(выносливость+100)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Закупиться! Идея! Сейчас же пошли!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「В этот сезон как раз начинаются скидки!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Давно хотела купить одну штуку, купим и спустим стресс!」"
        - divider: true
          content: "Торговая улица"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер, смотри, эта рубашка для гольфа, супер, да?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Раз уж пришли — купим и спокойно сыграем в гольф? Заодно прогуляемся」"
        - "Утонув в гольф-товарах, Палмер на время забывает о грядущих скачках и просто кайфует"
    - acc: 3
      content: "「Зайти в кафе выпить?」(очки навыков+20)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Кафе! Да, болтовня и сладкое точно зарядят голову!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Пошли, тренер! Я тоже давно хочу то самое!」"
        - divider: true
          content: "Кафе"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Так, смешать холодный чай и лимонад вот так…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Готово! Это мой любимый авторский напиток!」"
        - acc: 1
          content: "「Ты часто так делаешь?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ага! Дома говорят, что это некультурно, но я не могу остановиться」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это просто мой вкус, есть и другие миксы, хочешь, тренер?」"
        - acc: 1
          content: "「Раз уж шанс — конечно!」(расположение+10)"
        - acc: 2
          content: "「Можно тот, что у тебя в руках?」(влюблённость+2)"
        - "Содовая и молоко, кола и лимонный чай"
        - "Каждый микс неожиданно вкусный"
        - "Палмер и %YOU% вместе гоняют авторские напитки"

#进入经典年3月1周
how:
  title: "Что делать с тройной короной!?"
  lines:
    - "Случайно встречаешь Палмер без обычной светлой улыбки и без приветствий окружающим"
    - "Идёт голова в пол, врезается в грудь %YOU%, вздрагивает, поднимает глаза с извинением — и только тогда видит, в кого"
    - acc: 1
      content: "「Что случилось?」"
    - "Слыша вопрос без упрёка, Палмер снова опускает голову на беспокойные пальцы"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ничего, э…」"
    - "Смотрит вниз на всё ещё дёргающиеся пальцы — и их ловит протянутая спереди рука"
    - "Её руки мёрзнут, а те, что схватили, очень тёплые"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Сказать тренеру… ничего же? Потому что это, ну, тренер)"
    - "Останавливает пальцы, поднимает глаза на напарника"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Про тройную корону」"
    - "Отпускает крепко сжатую руку и чуть думает, как сказать"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, смотри, до тройной короны… до Satsuki Sho уже близко, да?」"
    - acc: 1
      content: "「Да, совсем скоро…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Так вот, тройная корона в любом случае важные скачки, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мне тоже не всё равно! Но… я боюсь, семья Мэдзиро же это очень ценит, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если проиграю, скажут — позор семьи Мэдзиро, да? Поэтому сомневаюсь, идти ли」"
    - "Заговорила, но голос Палмер всё тише, обычной уверенности нет"
    - acc: 1
      content: "「А ты, Палмер? Как сама думаешь」"
    - "Тело Палмер чуть вздрагивает, глаза уходят с %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Такая слабая скаковая %UMA% как я — какой смысл даже выходить? Ничему не научусь, если так думать…」"
    - acc: 1
      content: "「Тогда беги」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Бежать… да?」"
    - "Лицо Палмер уходит в недоумение, но быстро смеётся"
    - acc: 1
      content: "「Точно. Беги — и ищи свой ответ!」"
    - "Короткая тишина, и Палмер весёлым смехом смахивает слезу с угла глаза"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Точно, сначала сбежать — это же про меня!」"
    - "Палмер уже не давит тройная корона: тяжело вдыхает и переключает настроение"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ответ нашёлся!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если в тот момент будет настроение — пойду!」"
    - "Не глядя на остальных, бодро ловит взгляд %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда ты будешь рядом, да, тренер?」"
    - acc: 1
      key: select
      content: "「Да. Я буду смотреть на тебя」(расположение+10)"
    - acc: 2
      content: "「Я буду ждать тебя, Палмер」(влюблённость+2)"
    - "Выражение Палмер чуть меняется: поднятая рука легонько стукает %YOU% в грудь"
    - "Тень в улыбке уже ушла, осталась только её, уверенная улыбка %SEX%"

sats_sho:
  title: "Навстречу Satsuki Sho!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что делать, тренер… сгоряча добежала досюда, а если не потяну имя семьи Мэдзиро!」"
    - "Палмер вся на взводе, хотя слова полны тревоги"
    - "Смотрит на трассу снаружи: даже без слов видно, как тело %SEX% мелко дрожит"
    - acc: 1
      content: "「Страшно?」"
    - acc: 2
      content: "「Взведено?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м… может, да, но уже решила идти」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я не отступлю. Точно」"
    - "Услышав голос %YOU%, дрожь Палмер останавливается"
    - "Поднимает руку, легонько держит %YOU%, тихо глубоко дышит"
    - "Когда снова поднимает голову — уже уверенный вид"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, спасибо」"
    - "С полной улыбкой отпускает руку и выходит из тоннеля"

# 皋月赏胜利
sats_sho_win:
  title: "Сначала одну корону!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Правда выиграла, тренер!」"
    - "Комната отдыха шумит от возвращения победительницы"
    - "Весёлый голос звенит в пространстве на двоих и не думает стихать"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И тебе тоже спасибо, тренер」"
    - acc: 1
      content: "「М? Что?」"
    - "Палмер смотрит в лицо %YOU%, сложные чувства застревают в горле"
    - "Коротко замолкает — и больше не молчит"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Без тебя я бы точно здесь не стояла」"
    - "Шум в комнате пропадает"
    - acc: 1
      content: "「Но это твоя победа」"
    - "Лицо Палмер снова та самая улыбка, крепко хватает руку %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Это победа нас двоих, тренер!」"

# 皋月赏失败
sats_sho_lose:
  title: "Проиграть — тоже нормально!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Проиграла… хаха, всё-таки я не сильная скаковая %UMA%」"
    - "Опирается о стену комнаты отдыха, взгляд ходит между %YOU% и полом"
    - "Пот стекает по лицу, будто слёзы"
    - acc: 1
      content: "「Но ты выложилась, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Выложилась, но…」"
    - acc: 1
      content: "「Важно, что Палмер сама пахала, и скачки не только эти」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Так?」"
    - "Всё ещё прячущийся взгляд Палмер садится на %YOU% перед ней, первой грусти уже нет"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но в следующий раз я выиграю?」"
    - acc: 1
      content: "「Тогда цель — обязательно победить в следующих скачках」"
    - "Первая печаль уже ушла, вместо неё — жёсткий вид"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Да. Не время раскисать」"
    - "Палмер выпрямляется, выдыхает, смахивает пот с лица"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「В следующий раз тоже на тебя, тренер!」"

#进入经典年5月1日，同队目白莱恩且不在同一年时不会触发
sisters:
  title: "%SISTERS% тоже соперницы"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「О, Japanese Derby уже близко」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「В этом году дерби, может, будет сюрприз…」"
    - "Палмер лежит на диване в кабинете и скучно листает телефон"
    - acc: 1
      content: "「Сюрприз?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「В этом году же Райан」"
    - "Палмер гасит телефон и подпрыгивая подходит к %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Про тройную корону у меня идей мало」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А вот Райан %SEX% — другое, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX% с самого начала пашет ради тройной короны, на дерби точно взорвётся!」"
    - "Голос очень светлый, но чего-то не хватает"
    - acc: 1
      content: "「А ты, Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э? Я?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Дерби…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мне на дерби… нормально ли」"
    - "И так тонкая уверенность тает в бормотании Палмер, она чуть понуро отступает на два шага"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Если в тот момент будет настроение… уверенность」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда я с Райан… попробую」"

#进入经典年5月1日，皋月胜利，同队目白莱恩且不在同一年时不会触发
sisters_1crown:
  title: "%SISTERS% тоже соперницы"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「О, Japanese Derby уже близко」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Дерби в этом году, м-м~ попробовать, что ли」"
    - "Палмер лежит на диване в кабинете, листает телефон и косит взгляд в сторону"
    - acc: 1
      content: "「Настроение появилось?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ахаха… просто так сказала」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「В этом году же Райан」"
    - "Палмер гасит телефон и подпрыгивая подходит к %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Про тройную корону и всё такое у меня идей мало」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А вот Райан %SEX% — другое, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX% с самого начала пашет ради тройной короны, на дерби точно взорвётся!」"
    - "Голос очень светлый, но чего-то не хватает"
    - acc: 1
      content: "「Так ты не пойдёшь?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э? Я?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не-не, на Satsuki как пошло — пошла, а дерби уже」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мне на дерби… всё-таки…」"
    - "И так тонкая уверенность тает в бормотании Палмер, она чуть понуро отступает на два шага"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Если в тот момент будет настроение… уверенность」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда попробую… Classic-маршрут и всё такое」"

toky_yus:
  title: "Навстречу Japanese Derby!"
  lines:
    - "Japanese Derby, вторая станция тройной короны"
    - "Для любой %UMA%, которой можно выйти, это праздник, который не обойти"
    - "И Палмер, что стоит здесь сейчас, — та же"
    - "Несёт взгляды за спиной, смахивает прежний страх этих скачек и стоит на трассе лицом вперёд"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Шанс выйти — один раз…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Меня прёт, тренер! Сейчас выход!」"
    - "Тело больше не дрожит от тревоги — трясёт от возбуждения"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Спокойно, тренер, нынешняя %SELF_CALL% точно не проиграет!」"
    - acc: 1
      content: "「Тогда жду хороших новостей」"
    - acc: 2
      content: "「М-м. Я верю в Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Да! Своим стилем сразу схвачу победу!」"
    - if: d.sats_sho === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Satsuki Sho тоже вышло, дерби точно нормально…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Бегу на полную, я!」"
        - "Спиной к %YOU% резко поднимает голову и с уверенным лицом идёт на трассу"

# 日本德比胜利
toky_yus_win:
  title: "Удачливая беглянка"
  lines:
    - "Давно говорят: Japanese Derby берёт самая везучая скаковая %UMA%"
    - "А сегодня самая везучая — Мэдзиро Палмер"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Выиграла! Когда есть уверенность, и удача приходит!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Весь труд %SELF_CALL% — сбылся…」"
    - "Глядя на дрожащие руки, Палмер неверяще поднимает глаза на такого же взведённого %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Правда супер кайф! Пробежать скачки с уверенностью」"
    - acc: 1
      content: "「Точно. Это твоя сила, Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Так? Хехе… спасибо!」"
    - "Поднимает возбуждённые руки и легонько хлопает ладонь тренера"

# 日本德比失败
toky_yus_lose:
  title: "Удача чуть…"
  lines:
    - "Давно говорят: Japanese Derby берёт самая везучая скаковая %UMA%"
    - "Иначе говоря, сегодня Палмер не так везло"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ахаха… удача %SELF_CALL% сегодня не та」"
    - "Понуро возвращается в комнату отдыха и смотрит на себя"
    - acc: 1
      content: "「Палмер, всё нормально」"
    - "Услышав голос %YOU%, Палмер тихо поворачивается к нему"
    - "Взгляд ползёт вперёд, пока не видит человека перед собой"
    - "Тянется, хватает руку %YOU% — холод"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я понимаю, так что… дай мне хотя бы так, чуть отдохнуть」"

hako_kin:
  title: "На Hakodate Kinen!"
  lines:
    - "Стоит в комнате отдыха ипподрома Hakodate, ждёт Мэдзиро Палмер"
    - "Почему-то сегодня Палмер опаздывает и в комнате отдыха тоже мнётся"
    - acc: 1
      content: "「Палмер?」"
    - "Услышав %YOU%, Палмер неловко садится, взгляд шарит в стороны"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, как сказать」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Hakodate я знаю хорошо, просто…」"
    - "Взгляд долго шарит в воздухе и так и не садится на %YOU%"
    - if: era.get('love:64') < 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Просто… после скачек пойдёшь со мной погулять?」"
    - if: era.get('love:64') >= 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「После финиша… можно свидание?」"
    - "Взгляд Палмер украдкой уходит в сторону: подглядывает реакцию %YOU%"
    - "Глядя на такую Палмер, %YOU% только выдыхает: %SEX% в порядке"
    - acc: 1
      content: "「Конечно」"
    - "Услышав ответ, Палмер улыбается и спокойно толкает дверь"
    - if: era.get('love:64') < 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я жду!」"
    - if: era.get('love:64') >= 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Отвечу на полную, тренер!」"

# 函馆纪念胜利
hako_kin_win:
  title: "Сборы на прогулку"
  lines:
    - "Победившая Палмер видит %YOU% уже у двери и едва не кидается в объятия — но ещё помнит пот после скачек"
    - "Остановившись, показывает ждавшему %YOU% жест победы"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не заждался? Видел, как круто бежала %SELF_CALL%?」"
    - acc: 1
      content: "「Ага, очень круто!」"
    - "От похвалы напарника улыбка Палмер ещё ярче"
    - if: era.get('love:64') < 50
      lines:
        - "Весёлым шагом, будто танцуя, обходит %YOU% и входит в комнату отдыха"
        - "Выглядывает из неплотно закрытой двери, чуть замирает, будто думает"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「После Winner's Stage пойдём вместе, да?」"
    - if: era.get('love:64') >= 50
      lines:
        - "Весёлым шагом, будто танцуя, подходит к %YOU% и берёт за руку"
        - "Стоит ноги вместе, чуть замирает, по лицу будто жар"
        - "Отступает на шаг, скользит в комнату отдыха и говорит %YOU% так, чтобы лица не было видно"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Мы же договорились потом вместе… тут погулять」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「После Winner's Stage пойдём вместе」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Хотя бы до возвращения… побудь со мной」"

#函馆纪念赛前赛后均触发之后，同回合任意外出触发
hometown:
  title: "Родные места"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как будто очень давно не была дома」"
    - "После Winner's Stage Палмер весело тащит %YOU% гулять по улицам"
    - "Жаль, уже поздновато: часть лавок закрыта"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Блин, после подиума и правда поздновато」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Прости, тренер! Надо было в другой раз…」"
    - "Радость победы чуть смывает тёмными улицами, уши смущённо опадают"
    - acc: 1
      content: "「Мне нормально」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Правда?」"
    - "Опавшие уши резко встают, в глазах вспышка"
    - "Вокруг уже темно, но светло-голубые зрачки Палмер особенно яркие"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м, должно ещё быть!」"
    - "Палмер бормочет себе перед %YOU% пару фраз и берёт телефон"
    - "Отбегает на два шага и тихо, легко говорит в трубку"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага-ага! Прошу!」"
    - "Звонок, кажется, кончился: Палмер подпрыгивая снова у %YOU%"
    - "Хватает %YOU% обеими руками и тащит прямо в одну сторону"
    - "Несколько минут рысцы — перед вами обычная лавка, странно одинокая в темноте"
    - "Но когда Палмер толкает дверь, всё ясно"
    - "Внутри только добрый дядька и уже готовые закуски"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сэнкью, дядь! Всё как раньше!」"
    - "Палмер сажает %YOU% и сама спокойно садится рядом"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Раньше я очень любила сюда ходить」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Дома хорошо, но… как сказать」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Когда жила тут, всегда чувствовала себя не в своей тарелке」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Поэтому люблю такие маленькие лавки」"
    - "У Палмер светлая улыбка без тени — будто только что сказанное к ней не относится"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но! Это уже прошлое!」"
    - acc: 1
      content: "「Сейчас этого чувства уже нет, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Уже нет」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, на самом деле чуть-чуть есть」"
    - "Палмер доедает редьку во рту и с улыбкой отвечает %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но я уже решила」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не только свою посадку выбежать…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ещё и свой способ жить!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, так звучит странно?」"
    - "С чуть смущённым лицом откусывает ещё горячей белой редьки"

summer_start_1:
  title: "Летний сбор (Classic) начинается"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Фухя~! Мои каникулы!!」"
    - "Каникулы — то есть летний сбор"
    - "Для скаковых %UMA% это важное усиление, однако—"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「%65_CALL%! Это лето гуляем на полную и с сейчас ищем новую себя~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Точно! Рестарт жизни — на тебя, Хелиос!」"
    - "Для Палмер это лето начала заново"
    - "Стать новым %TEEN%, который не боится проигрыша и лезет в риск"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Но %65_CALL%, из-за семьи Мэдзиро с малых лет надо было бежать, да?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Но правда только бег? Должна же быть мечта кроме бега?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мечта кроме бега~ если так… м-м…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Даже среди %UMA% многие не ходят на скачки」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Честно? Не знаю」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, можно начать заново вот отсюда?」"
    - acc: 1
      content: "「Конечно」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если, ну если」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я захочу мечту не про скачки — можно?」"
    - "На вопрос Палмер у %YOU% ответ, понятно, один"
    - acc: 1
      content: "「Делай, что хочешь」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ладно, поняла! Этим летом наделаю кучу всего и найду, чего хочу!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хелиос! На тебя тоже!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сделаем это лето супер-шумным пати!」"
    - "Искать не только как %UMA% семьи Мэдзиро, но и как Мэдзиро Палмер"

#跟随合宿时进入8月2周，同队有大拓太阳神时，太阳神/善信好感相互增加30
summer_middle_1:
  title: "Летний сбор (Classic), по пути"
  lines:
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Кемпинг на Хоккайдо! Йе!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Уху! Меня прёт!」"
    - "В паузе летнего сбора трое едут на Хоккайдо и какое-то время наслаждаются жизнью с кучей занятий на улице"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「%65_CALL%, смотри! Чувствую, сейчас клюнет здоровяк!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м, точно клюнет」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Дальше просто ждать, без лишних движений…」"
    - "У реки Дайтаку Хелиос держит удочку и сверлит воду"
    - "Палмер стоит рядом и смотрит со странным лицом"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「FuFu~ милая рыбка идёт~ ойе-йе~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А~ если так орать…」"
    - "Голос Дайтаку Хелиос, кажется, слишком громкий: рыбка с крючка сразу срывается"
    - "Трое смотрят на пустой крючок и дружно падают лицом"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Ува, сбежала~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ахаха… ну это рыбалка」"
    - "Убирают удочки и возвращаются в лагерь"
    - "Смывают пустой крючок и снова зажигаются обедом"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「BBQ~ BBQ~ и дальше — жареная лапша Fu~!」"
    - "Лапша шипит, пахнет на всю округу"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Вкусно~ %65_CALL%, что туда клала?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「В гарнир лук-порей и картошка, приправы тоже на глаз」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но вкусно же?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Как сказать? Просто вкусно? По-домашнему?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Три раза в день — и не надоест!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вот как, хорошо~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, ешь тоже, пока горячее」"
    - acc: 1
      content: "「Ага!」"
    - "Тэппан-лапша Палмер — самый обычный вкус, ни капли полевой кухни"
    - "Если описать — то, что %YOU% ест и в обычные дни"
    - "И именно эта простая вкуснятина успокаивает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда попробую кофе, который заварила Хелиос!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м!? А это шарики?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Жемчужный кофе~」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Сейчас хит продаж!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, тапиока?! Ахахаха, Хелиос, ты гений!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как сказать, кемпинг у нас каша, но прёт!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Блин, я могу так жить всегда!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「О-о-о! Норм, %65_CALL%!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Тогда забить на бег и стать натур-блогером UMATUBE?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Заголовок… Заводимся, пати-кемпинг! Как?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Цель — взорваться и выйти в прайм-тайм!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Блогер UMATUBE! Звучит круто!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Может, и правда ничего!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хоккайдо как сцена, снимать приколы! Планов навалом!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, какие ролики, по-твоему, залетят?」"
    - acc: 1
      key: select
      content: "「Деревня…」(сила+10)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Деревня! Строить деревню в стиле пати?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тяжко будет, но тоже звучит ничего!」"
        - "Предложение %YOU% вылетело без мысли — и его вдруг берут как серьёзный маршрут"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「Йе-йе!」"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「Вспахать землю от края до края~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Дружище~ скоро обед, да?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сегодня из свежей сёмги — лососёвое пати!」"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「…Руки так бах — и лопнут~」"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「Это уже не кто быстрее, а кто сильнее руками!~」"
        - "Слушая Дайтаку Хелиос, %YOU% уже чувствует, как мышцы гудят"
    - acc: 2
      content: "「Соревнование на мороз…」(упорство+10)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「О! Соревнование на мороз!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Кто дольше стерпит? Зимы тут лютые, ещё и снег」"
        - "Из рта %YOU% вылетает фантазия, но Палмер явно слушает: щурится и представляет зиму"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「М-м— %65_CALL%, не слишком холодно? Поддай запала?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ууу, запал~ упорство~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Блин, в голове снежные кролики уже встречают Рождество…」"
        - "Через пару секунд Палмер открывает глаза"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Чу, чувствую, будет жесть…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но в воле я уверена, стерплю!」"
        - "Палмер говорит уверенно, но %YOU% понимает"
        - "Холод тут не того класса, что в Трейсене, — упорство и правда прокачает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Но природа чудная~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「В детстве казалось, снаружи пусто…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…А вообще не так! Захочешь — что угодно получится!」"
    - "Пока внимание Дайтаку Хелиос уходит в сторону, Палмер одна смотрит на природу перед собой"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Точно. Что тут делать — решаю я)"
    - divider: true
      content: "Несколько дней спустя"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ха-а~ уже утро」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Всё так весело: рыбалка, сбор, готовка, ролики)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Я свободна, что угодно можно! Чем угодно проживёшь!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Но тогда…)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что — я правда хочу делать?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Закрыть… глаза… спросить себя…)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Чего я хочу? Что я правда думаю?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Голос изнутри, крик от корня…)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Если я свободна — тогда что делать…?)"
    - "Тонет в своих мыслях и слушает себя"
    - "В темноте понемногу слышен знакомый звук"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Этот звук…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「— ветер?」"
    - "Уши Палмер ловко дёргаются, ловят голос ветра"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как ветер!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Ветер кайф! Воздух моет лёгкие, и рассвет… по коже…!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Не думать про соперниц и финиш, просто так бежать!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Бежать как душа просит! Ха-а-а-а-а-а!」"
    - "Сонными глазами %YOU% видит Палмер: на рассвете бежит с улыбкой"
    - "В заре %SEX% бежит без себя: естественно, бодро и — очень красиво"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Фух, фух… тренер, я поняла」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Я люблю бежать」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Быстро или нет — неважно, лишь бы бежать с пустой головой!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я только что бежала не ради цели… увидела пейзаж — и ноги, и сердце сами пошли!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Значит, я точно — люблю бежать!」"
    - acc: 1
      content: "「Вот как」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага, вот так!」"
    - "Палмер и %YOU% улыбаются друг другу, больше ничего не надо"
    - "Нашедшая, чего хочет, Палмер смеётся совсем свободно"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, тренер, видишь сзади Mount Yotei?」"
    - "По слову Палмер %YOU% оборачивается и видит ту гору"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "Гора родины"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Раньше, глядя на неё, мне было чуть страшно」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Будто она велит бежать как надо, всерьёз」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Как давление」"
    - acc: 1
      content: "「А сейчас?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хехе, сейчас~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё ещё страшно!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Но уже не как раньше」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Потому что… я не сильная, но сегодня выбежала без прикрас, самую настоящую посадку」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сегодня я бежала, потому что хотела бежать!」"
    - "Палмер с улыбкой делает вид, что шутит"

summer_end_1:
  title: "Летний сбор (Classic) кончается"
  lines:
    - "Летний сбор кончился: из-за Дайтаку Хелиос это лето Палмер вышло очень полным"
    - "За это время она нашла, чего правда хочет, — бежать"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Точно. Я люблю бежать!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Дальше тоже хочу бежать всегда!」"
    - "На лице Палмер полная уверенность, но есть и тревога"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но, тренер~ этого хватит?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Глядя на %THEY%, чувствую: одного этого мало~」"
    - "По взгляду Палмер %YOU% тоже смотрит туда с недоумением"
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - "「Наконец… Kikuka Sho」"
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - "「Мой конёк, длинная G1…」"
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - "「Победить любой ценой!」"
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - "「И к Tenno Sho (Spring) в следующем году…」"
    - "Маккуин стоит у моря, опёршись на перила, молча смотрит на сжатые руки"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Видишь, решимость Маккуин совсем другого калибра, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ещё до силы мысли про скачки уже другие」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…А %SEX% — другое дело; я-то просто люблю бежать」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И ещё неясно… люблю ли я сами скачки」"
    - "С каждым словом голос Палмер тише"
    - "Тихо закрывает лицо и тревожно смотрит на %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「С таким лицом «мы все одинаковые~» мне ещё выходить…?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Надумывать лишнее — моя плохая привычка~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Это уже выше моего мозга, эх-эх…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, прости」"
    - acc: 1
      content: "「М? За что?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Просто стыдно」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Стоит такое заметить — и я уже не вылезаю」"
    - "Нет решимости как у Мэдзиро Маккуин, нет и одержимости скачками"
    - "Такая себя Палмер теряет первую уверенность"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хочу бежать — значит бегу」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Этого бы хватило, но…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я, наверное, из ранимых. Прости」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что я замороченная…」"
    - "Взгляд падает, садится на беспокойные пальцы"
    - "Может, Палмер и правда из ранимых"
    - acc: 1
      content: "「Ранимость — тоже нормально」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ой, не надо меня так баловать~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Из-за тебя я и начинаю к тебе льнуть, знаешь?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Но раз ты так сказал(а)… ещё чуть побуду на тебе」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И ещё…」"
    - "На лице ещё грусть, но тело уже честно ложится на плечо %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「За это время найду…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Найду свою дорогу!」"
    - "Опавшие уши понемногу встают, в глазах появляется искра"

kiku_sho:
  title: "Навстречу Kikuka Sho"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Длинная дистанция… первый раз…」"
    - "Палмер сидит в комнате отдыха и смотрит на мелко дрожащие ноги"
    - "Длинная G1, финиш тройной короны, для каждой %UMA% это крайне важно"
    - "Глядя на нынешнюю Палмер, %YOU% просто подходит и протягивает руку"
    - acc: 1
      content: "「Нервы, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Конечно нервы! Но нервов меньше, чем возбуждения!」"
    - "Резко поднимает голову на %YOU% и возбуждённо машет предплечьями"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Эти скачки будет смотреть и вся семья Мэдзиро…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Своим способом докажу, что я супер сильная!」"
    - "Палмер сжимает кулаки и бьёт %YOU% в плечо"
    - acc: 1
      content: "「Понял(а). Буду смотреть с трибун!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага! Смотри посадку %SELF_CALL%!」"

# 已取两冠
kiku_sho_2crown:
  title: "Навстречу Kikuka Sho"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Kikuka Sho… блин, сердце не останавливается!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Длинная дистанция, первый раз!」"
    - "Палмер сидит в комнате отдыха и смотрит на мелко дрожащие ноги"
    - "Длинная G1, финиш тройной короны, для каждой %UMA% это крайне важно"
    - "Глядя на нынешнюю Палмер, %YOU% просто подходит и протягивает руку"
    - acc: 1
      content: "「Нервы, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Конечно нервы! Но нервов меньше, чем возбуждения!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сначала тройная корона пугала, а сейчас почти в руках!」"
    - "Резко поднимает голову на %YOU% и возбуждённо машет предплечьями"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Эти скачки будет смотреть и вся семья Мэдзиро…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Своим способом докажу, что я супер сильная!」"
    - "Палмер сжимает кулаки и бьёт %YOU% в плечо"
    - acc: 1
      content: "「Понял(а). Буду смотреть с трибун!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага! Смотри посадку %SELF_CALL%…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И миг, когда тройная корона закроется!」"

kiku_sho_win:
  title: "Беглянка вернулась!"
  lines:
    # 菊花赏胜利
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йаху! Выиграла!」"
    - "Палмер, взявшая первое своей посадкой, не останавливается сразу"
    - "Бежит и ищет на трибунах знакомого человека"
    - "Бежит вдоль края трибун, пока у тоннеля не видит, как машет напарник"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер! Видел(а)!」"
    - "Скорости не сбавляет и прёт на %YOU%"
    - acc: 1
      content: "「Палмер бежала круто!」"
    - acc: 2
      content: "「Палмер! Стой!」"
    - "Кажется, не дослушала: держит первую скорость и врезается"
    - "Силу сдержала, %YOU% не сносит, но всё равно несколько шагов назад"
    - "Жар тела идёт сквозь и без того тонкий скаковой костюм Палмер, почему-то жарко"
    - "Запах пота после скачек, пока сама не замечает, из объятий ползёт в нос"
    - "Честно… стоит"
    - acc: 1
      content: "「Палмер, тут как-то…」"
    - acc: 2
      content: "「Палмер, аккуратнее, аккуратнее!」"
    - "Заметив странный воздух вокруг, на лице Палмер, до того глухом, вспыхивает румянец"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Прости-прости, э… я чуть перебрала」"
    - "Отпускает руки, что крепко держали %YOU%, и неловко отступает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Короче, я сначала на сцену!」"
    - if: era.get('love:64') >= 50
      lines:
        - "Прячась от всех глаз, ныряет в комнату отдыха, закрывает всё ещё потную грудь"
        - "Скаковой костюм как раз лёгкий и прохладный, но сейчас… почему так жарко"
        - "Сердце колотит, будто ещё на трассе, тук-тук без остановки"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Что я творю…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это же… обычные объятия…」"

# 菊花赏失败
kiku_sho_lose:
  title: "Тихий шёпот…"
  lines:
    - "Скачки кончились, в комнате отдыха тишина до тошноты"
    - "Выложилась — и пришёл проигрыш. Вот реальность"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "Палмер сидит молча, голова вниз, лица не видно"
    - "Шевелится, только когда дверь комнаты отдыха открывается"
    - "%YOU% входит и смотрит на нынешнюю Палмер — слов не находится"
    - "Пока не подходишь вплотную, Палмер не двигается"
    - "Ничего не говорит: встаёт, поворачивается и тихо кладёт лоб на плечо %YOU%"
    - acc: 1
      content: "「Палмер?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер…」"
    - "Голос тихий, но в этом пространстве очень слышный"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я пахала, тренер, правда пахала, усиливала своё, бежала своим стилем… я всё пахала!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я тоже хотела результат, не стыдный для имени семьи Мэдзиро」"
    - "Голос тихий, но всё слышно"
    - "Но сейчас лучше дать Палмер так поплакать"

# 获得三冠称号后休息
triple_crown:
  title: "Тройная корона закрыта!"
  lines:
    - "Satsuki, Derby, Kikuka"
    - "Вся тройная корона Classic-года — в руках"
    - "Палмер и %YOU% стоят рядом в кабинете и смотрят на кубки"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как сказать, как-то нереально」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сначала думала: будет настроение — пойду, а вышел такой результат」"
    - "Палмер смотрит на кубок и чуть плывёт"
    - acc: 1
      content: "「Всё-таки ты сильная, Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э? Да? Ахаха…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но это и тебе спасибо, тренер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Без твоего доверия с самого начала я бы, наверное, не пошла」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И ещё…」"
    - "Голос чуть стопорится, взгляд ходит между кубком и тем, кто рядом"
    - "В углу, куда %YOU% не видит, пальцы сплетены"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ну, про свою посадку」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Без тебя я бы, наверное, бежала иначе」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Так что я всегда тебе благодарна」"
    - "Хвост не перестаёт мести, кончик сам касается икры %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Слушай, э… тренер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Когда-нибудь, ну, как будет время, вместе в семью Мэдзиро…」"
    - acc: 1
      content: "「Если есть время — хоть сейчас」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, сейчас?」"
    - "Палмер резко оборачивается, лицо тупеет"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если сейчас — бабушка точно устроит огромный банкет」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тройная корона же, народу полно, может, на несколько дней…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ой… я такое не очень умею」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Когда будет время, вдвоём просто вернёмся」"
    - "Палмер легонько чешет затылок, пряча тревогу"
    - "Лёгкая улыбка и виноватый взгляд украдкой в сторону"
    - acc: 1
      content: "「Только мы?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага. Нас двое」"
    - "Сильно кивает и подпрыгивает на шаг ближе"
    - "Пальцы на подоконнике, лицом к окну, бормочет"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вдвоём к бабушке, и потом」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Арэ, что-то не так…」"

# 经典年有马纪念
classical_arim_kin:
  title: "Навстречу Arima Kinen"
  lines:
    - "Последний праздник года, Arima Kinen"
    - "2500 м, длинная дистанция, и бой с самым вниманием"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё-таки сейчас нервы… хехе」"
    - "Тело дрожит от возбуждения, настроение тоже на взводе"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сначала даже не думала, что дойду сюда, до Arima Kinen」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не париться про Мэдзиро, верить своей посадке」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё это ты мне сказал(а), тренер」"
    - "Надевает верх скакового костюма и гордо расправляет грудь"
    - acc: 1
      content: "「Пошла, Палмер」"
    - "Слыша %YOU%, Палмер лицом к трассе сжимает кулаки"
    - "На лице уверенная улыбка, назад — большой палец"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「На мне! Эхе」"

# 经典年有马胜利
# 习得技能「大逃」
c_arim_kin_win:
  title: "Супер-беглянка Arima Kinen!"
  lines:
    - "Даже 2500 м не съели выносливость Палмер: за финишем она всё ещё бежит"
    - "Расслабленным шагом машет зрителям"
    - "Когда бежать уже нечем, сбавляет вдоль трибун и останавливается у тоннеля"
    - "Медленно входит в комнату отдыха, опирается о дверь и смотрит на дрожащее тело"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда уже не балласт Мэдзиро, а Мэдзиро Палмер…」"
    - acc: 1
      content: "「Всё ещё об этом думаешь?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ува! Тренер! Ты слышал(а)!?」"
    - "Палмер вздрагивает от внезапного голоса %YOU% и с преувеличенной позой отпрыгивает назад"
    - "Голос слишком громкий, будто рвёт барабан %YOU%"
    - "Но Палмер рада — и ладно"
    - acc: 1
      content: "「Честно… даже без Мэдзиро мне всё равно」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что без Мэдзиро всё равно — сама знаю, но иногда так думается」"
    - acc: 1
      content: "「Надо увереннее. Оставь имя Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага-ага, поняла! Тогда…」"
    - "Глубоко вдыхает и надевает лицо, больше похожее на саму Палмер"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Точно… это моя победа」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сегодня победа %SELF_CALL%! Ну как?」"

# 经典年有马失败
c_arim_kin_lose:
  title: "Чуть жалький побег"
  lines:
    - "Выиграть Arima Kinen своей посадкой, чтобы все на трассе запомнили имя Палмер"
    - "Не Мэдзиро Палмер из семьи Мэдзиро, а победительница Arima Kinen, Мэдзиро Палмер"
    - "Так думалось, но реальность не дала Палмер победить"
    - "Смотрит, как %UMA% на первом радуется, и всё равно не отпускает"
    - "Взгляд с табло уходит на трибуны"
    - "Напарник, который всегда верил, точно смотрит"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер…」"
    - "На другом конце взгляда %YOU% стоит в самом переднем ряду и ловит глаза Палмер"
    - "Голова вниз, идёт по тоннелю, толкает дверь комнаты отдыха"
    - "Увидев %YOU%, быстрым шагом прижимается впереди с опущенной головой"
    - "Тихий плач в тихой комнате отдыха вместе со слезами Палмер"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё-таки не вышло, выиграть Arima Kinen… хотя когда говорила, была такой…」"
    - acc: 1
      content: "「Палмер…」"
    - "Услышав %YOU%, плач останавливается"
    - "Руку %YOU% сжимает сильнее и вовсе не отпускает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Дай мне тут… чуть сбежать…」"

#进入资深年1月1周
new_year_2:
  title: "Новогоднее хацумодэ"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「С новым годом~ тренер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хацумодэ! Сейчас же к супер-богу и прямо сказать: новый год зажигаем вместе!」"
    - acc: 1
      content: "「Незаметно уже привыкла к гяру-сленгу」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Конечно! Столько времени с Хелиос」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И с этого года я скаковая %UMA% Senior, пора показать толпе шарм пати-стиля!」"
    - "До сих пор Палмер пахала, накопила результаты и опыт, да ещё видела, как Огури Кэп бежит на полную…"
    - "Разный опыт станет силой роста %SEX% и фактором большого года"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А точно, тренер, в голову пришло~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если загадывать желание в гяру-стиле, лучше не к обычному богу, а к профи, да?」"
    - acc: 1
      content: "「Э, такие бывают?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага, в мире полно скаковых %UMA%, как богиня гяру, богиня пати」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Можно сходить к %THEY%? Прямо сейчас попробуем?」"
    - acc: 1
      content: "「Ясно… может, будет забавно」"
    - "Чем кланяться традиционным богам в храме, у %THEY%, может, возьмём современную силу"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда пойдём к %THEY%!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Но таких богов тоже много видов」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Кто умеет тусить, кто красивая… к кому идти?」"
    - "Целевых богов больше одного, тогда…"
    - acc: 1
      key: select
      content: "「Богиня Дайтаку Хелиос」(выносливость+200)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Богиня солнца…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А, точно, %SEX% говорила, знает скаковую %UMA%, что сияет как небожитель!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Недавно %SEX% её отшила, а она орала『Холодная барышня~!』, имя %SEX% я помню…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Вроде Дайнити-нёрай? Короче, сначала сходим」"
        # CFLAGNAME:66 = 招募状态
        - if: era.get('cflag:85:66') === 0
          content: "Дайнити-нёрай… имя совсем как у бога, какая она будет"
        - if: era.get('cflag:85:66') === 1
          content: "Дайнити-нёрай… имя совсем как у бога…"
        - if: era.get('cflag:85:66') === 1
          content: "Это звучание… будто знакомо?"
        - divider: true
          content: "Торговый центр"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А, нашла-нашла! Не она?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ува, это совсем не нёрай! Супер милая! Как кукла!」"
        - if: era.get('cflag:85:66') === 0
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Пойти поговорить — %SEX% ведь тут… не, ладно」"
        - if: era.get('cflag:85:66') === 1
          lines:
            - acc: 1
              content: "「На самом деле… я %SEX% знаю」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Э? Так вообще идеально!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Тогда пойти поговорить — %SEX% ведь тут… не, ладно」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%SEX% милая за шкалу! Лучше просто смотреть」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ува~ эта девчонка правда милая」"
        - if: era.get('cflag:85:66') === 1
          acc: 1
          content: "「Милая — да」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Стоит %SEX% появиться — и внутри сразу лечится~」"
        - if: era.get('cflag:85:66') === 0
          content: "Палмер и %YOU% стоят вдалеке и лечатся этой милотой"
        - if: era.get('cflag:85:66') === 1
          content: "Палмер и %YOU% стоят вдалеке, только у %YOU% внутри странное чувство без слов"
    - acc: 2
      content: "「Прародитель богини пати!」(все статы+8)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Богиня пати… точно!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Пати-девочки были ещё давным-давно!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Из них прародительница — это…」"
        - divider: true
          content: "Танцзал"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「Хай, Палмер-тян~」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「Потанцуем, хм, хм~」"
        - divider: true
          content: "%MARU%, скаковая %UMA%, влюблённая в ретро Сёва и эпоху пузыря"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「Хм-хм, чего хотите от меня get~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сестрица Мару, научи оригинальному гяру-сленгу」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「Оригинальный гяру? Дай подумать…」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「Прямые без слоёв, боди, Shonan lover!」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「go~ go~ шу~ шу~ блеск!」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「Счёт в игротеке, кардиган на плечи!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Вау, смысла не поняла, но напор огонь」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Вот он, оригинальный гяру-сленг…!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер, меня тоже прёт!」"
        - "Поклонившись Марудзэнски, богине эпохи пузыря, настроение Палмер взлетает"
        - "Хотя %YOU% ничего не понял(а)…"
    - acc: 3
      content: "「Бог бильярда?」(очки навыков+35)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Бог бильярда… точно, есть ещё холодные и крутые!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Пойдём по местам, где есть бильярд」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Выход~」"
        - divider: true
          content: "Бильярдная"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「Хо~ так это ты хочешь, чтобы я учила бильярду? Палмер」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Д-да! Э-это уже другой вид гяру-стиля…」"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「Бильярд, коротко, — ждать момент」"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「Пусть противник бьёт как хочет, в конце сам кладёшь шар, но…」"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「Мне такое не нравится」"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「Тебе тоже по душе стиль без передышки, не давать ударить в ответ?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э? То есть как? Мне просто повторять?」"
        - "Неприступный король бильярда, Сириус Символи"
        - "У этого бога бильярда Палмер набралась техник… правда?"

# 日经新春杯
nikk_hai:
  title: "Сменить настроение!"
  lines:
    - "Новый год, новое настроение!"
    - "Каким ни был прошлый год и каким ни станет этот — сначала войти в свой ритм!"
    - "Так думая, Палмер без колебаний выходит на дорожку"
    - "Липнешь к самому переднему ряду и смотришь на Палмер, полную жизни"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йо! Сегодняшние скачки тоже зажигаем!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Обычные скачки будут скучные, да? Так что %SELF_CALL% сделает из сегодня супер~ большое пати!」"
    - "Фанаты на трибунах на миг тупеют от слов Палмер, но быстро отвечают"
    - "Сначала её держали за хвост семьи Мэдзиро, а теперь уже известная скаковая %UMA%"
    - "Спрятавшись среди горячих фанатов, тихо шлёшь поддержку пылкой Палмер на сцене"
    - acc: 1
      content: "(…Только с этого угла у Палмер в скаковом костюме виден весь живот)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Все! Смотрите! Мой полный побег!」"
    - "На сцене Палмер держит простое лицо и весело болтает с фанатами внизу"
    - "Это же Палмер: супер умеет читать воздух вокруг"
    - "…Лишь бы не прочла атмосферу ниже пояса"
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Тренер! Ты тоже смотри!」"
        - "Почему-то Палмер вдруг орёт это спрятанному(ой) среди трибун %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сегодня %SELF_CALL% в супер форме!」"
        - "Фраза обычная, но в том взгляде почему-то ещё что-то есть"
        - acc: 1
          content: "(Точно спалили…)"
        - "Наверное, прочла взгляд %YOU%, но только когда другие не смотрят чуть машет %YOU%"
        - "…Другого смысла нет, да?"

# 日经新春杯胜利
nikk_hai_win:
  title: "Новый каждый день!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Намного легче! Зажигаться — вот мой стиль!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не читать воздух, не париться про остальное — просто бежать!」"
    - "Не смотрит на взгляды вокруг и заканчивает скачки своей посадкой"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ну как, тренер? Сегодня круто, да?」"
    - acc: 1
      content: "「Ещё спрашиваешь!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Точно? Хехе!」"
    - "Палмер чуть смущённо чешет почему-то красное лицо и плывёт кругами по комнате отдыха"
    - if: era.get('love:64') >= 50
      lines:
        - "Пот течёт по краю бледно-жёлтой подкладки и чертит изгиб тела"
        - "Тело Палмер и так хорошее, особенно в этом довольно открытом скаковом костюме %SEX%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Что, тренер? Лицо странное?」"
        - "Машет рукой перед %YOU%, будто не замечает, куда смотрит взгляд"
        - acc: 1
          content: 「……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, тренер?」"
        - "Когда голос Палмер снова у уха, сознание возвращается с потного живота перед глазами обратно в тело"
        - "Поднятый взгляд ловит не спокойное лицо Палмер, а чуть игривое"
        - "Лицо к лицу, дыхание легко гладит щёку"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Если так нравится… смотри ещё」"

# 天春
tenn_spr:
  title: "Не только Мэдзиро!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Tenno Sho, да…」"
    - "Tenno Sho (Spring) для семьи Мэдзиро — не просто G1, это оба знают"
    - "Но для нынешней Палмер этого слоя уже нет"
    - "Двое спинами к стене тоннеля, плечо к плечу"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Слушай, тренер, на этой трассе правда можно всю дистанцию лидировать?」"
    - "Слова Палмер как сомнение, но на лице ни капли тревоги"
    - "С уверенным лицом смотрит на %YOU%, уши дёргаются в ожидании ответа"
    - acc: 1
      content: "「Конечно, я в тебя верю!」"
    - acc: 2
      content: "「Ты и сама ясно знаешь, что сможешь, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Принято! %SELF_CALL% одним духом дотянет до конца!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Посадкой, которая Мэдзиро не к лицу, — своей! Всех заведу!」"
    - "Высоко поднимает руку и орёт на %YOU%"
    - "Оборачивается, выходит из тоннеля на трассу"

# 天春胜利
tenn_spr_win:
  title: "Победа беглянки!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йаху! Супер кайф! Супер радость!」"
    - "Палмер вовсе не смотрит на чужие глаза и голоса на трассе и прёт к %YOU%, кто сейчас ждёт в тоннеле"
    - "Лицо, что сначала хотело праздник, медленно уходит в другое"
    - "Это лицо… будто уже видел(а)"
    - acc: 1
      content: "「Палмер!?」"
    - "Совсем не сбавляет и целенаправленно летит на %YOU%"
    - "Едва стоишь, и только тогда взгляд на потную Палмер рядом"
    - "Сладкий запах пота бьёт в нос и гонит уже частое сердце"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер! Tenno Sho (Spring) я выиграла!」"
    - acc: 1
      content: "「Эй-эй! Палмер!」"
    - "Голос %YOU% громкий, но Палмер будто не слышит и всё так же тихо держит"
    - "Крепкие объятия отпускает с опозданием, когда дыхание %YOU% уже давят"
    - "Отпустила из-за этого, но на лице ни капли «ой»"
    - "Если сказать — нарочно"
    - "…Но раз выиграла, пусть %SEX% ещё чуть подержит — ладно"
    - if: era.get('love:64') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Слушай, тренер!」"
        - "Голос Палмер вовсе не парит про только что"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Не хочешь со мной в семью Мэдзиро… попробовать?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сейчас… уже как напарник Мэдзиро Палмер」"
        - acc: 1
          key: select
          content: "「Сейчас…?」"
        - acc: 2
          content: "「Тогда… я жду!」(расположение+10)"
        - "Руки, что только что крепко держали %YOU%, сейчас чуть стыдливо за спиной"
        - "Палмер краснеет и наклоняется ближе"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тогда я сначала на Winner's Stage… %YOURNAME%, ты тут жди!」"
        - "Взгляд не встречается прямо, но на чуть красном лице чистая улыбка"

# 天春失败
tenn_spr_lose:
  title: "Не быть главной — тоже нормально!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, проиграла!」"
    - "Потная с ног до головы, Палмер лёгким шагом входит в комнату отдыха"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Н-н— а, всё-таки так ещё тяжеловато!」"
    - "Сильно потягивается и по силе садится на стул"
    - "Снимает верх скакового костюма и легонько обмахивает лицо"
    - acc: 1
      content: "Протягиваешь воду"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Спасибо! Как раз вовремя!」"
        - "Палмер спокойно берёт стакан, залпом большой глоток — капля даже бежит с угла губ"
        - "Натянутое тело разом отпускает, будто выходит пар"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Давно так весело не бежала… только жарко」"
        - "Руки легко на стуле, поднимает корпус и дует вверх"
        - "Пот капает с прядей на бледно-жёлтую подкладку и даёт струйку пара"
        - "Когда такая Палмер целиком в глазах, первая мысль в голове —"
        - "Сегодня правда жарко, со всех сторон"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но нагрузки как будто нет」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер верит мне, и проиграла я тоже своим способом」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Жалко, да, но не бесит… это тоже тебе спасибо, тренер!」"
        - "Улыбка Палмер лёгкая, совсем как слова %SEX%"
    - if: era.get('love:64') >= 90
      acc: 2
      content: "Садишься рядом с Палмер"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Давно так весело не бежала… только жарко」"
        - "Руки легко на стуле, поднимает корпус и дует вверх"
        - "Пот капает с прядей на бледно-жёлтую подкладку и даёт струйку пара"
        - "Сегодня правда жарко, со всех сторон"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но нагрузки как будто нет」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер верит мне, и проиграла я тоже своим способом」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Жалко, да, но не бесит… это тоже тебе спасибо, тренер!」"
        - "Улыбка Палмер лёгкая, совсем как слова %SEX%"
        - "После звонкого смеха тонкая тишина, Палмер тихо убирает руки за спину"
        - "По скамье чуть-чуть двигается вбок и липнет к бедру %YOU%"
        - acc: 1
          content: "「Палмер?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Пить хочется, во рту сухо」"
        - "Пальцы ползут по ноге и легонько щиплют два раза"
        - "Лицо, красное от жары или стыда, медленно ближе, сухие губы медленно открываются"
        - acc: 1
          content: "「Можно」"
        - "Уши Палмер легко дёргаются, глаза закрывает"
        - "Легко садится на губы, язык лезет сквозь зубы и берёт тёплую слюну"
        - "Мягко и жёстко, без спроса лезет внутрь, будто ищет своё"
        - "Ловкий язык забирает влагу изо рта %YOU% и тянет белую нитку"
        - "Отпускает чужой язык, слизывает влагу с края губ и легко дышит"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Спасибо за угощение…」"
        - "Рука с бедра возвращается и гладит лицо %YOU%"
        - "Встаёт, руки за спину, прячет сердце, которое уже не остановить"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Позже вместе со мной в семью Мэдзиро… можно?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Может, и остальное тоже можно?」"

# 资深年宝冢
takz_kin:
  title: "Сначала просто верь!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Верить своей посадке, верить своим силам… я поняла!」"
    - "Палмер стоит у стартовых ворот, сжатый кулак на груди"
    - "Слегка закрытые глаза открывает и смотрит на трассу перед собой"
    - acc: 1
      content: "「Палмер! Давай!」"
    - "Голос %YOU% с трибун входит в уши Палмер"
    - "Уши Палмер мелко дёргаются, только потом к трибунам"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер… м, я слышу!」"
    - "Думает, голос, может, не дойдёт, и только высоко поднимает сжатую руку"
    - "Напарнику на той стороне показывает жест победы"

# 宝冢胜利
takz_kin_win:
  title: "Чуть жалко, но пофиг!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йе! Я выиграла!」"
    - "Бодрый голос в миг победы, и с ним Палмер бежит сюда"
    - "Сильно машет зрителям на трибунах, что кричат за неё, пока сил не кончится"
    - "Когда вокруг стихает, Палмер только тогда в комнату отдыха"
    - "Не как только что: теперь молча закрывает дверь"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Слушай, тренер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Можно погладить?」"
    - "На лице ещё победа, только в глазах чуть не одной радости"
    - acc: 1
      content: "「Что случилось?」"
    - acc: 2
      content: "Гладишь Палмер по голове"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А… спасибо, тренер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「На трибунах сейчас… семьи Мэдзиро никого не было」"
    - "Глядя, как Палмер в объятиях %YOU% чуть качается настроением, рука сама гладит"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Но твои слова, тренер, меня успокоили」"
    - "Хвост не держится и метёт в стороны, носки тоже тревожно стучат по полу"
    - acc: 1
      content: "「Все точно смотрели твои скачки」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я тоже так думаю, просто чуть жалко」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я понимаю, но…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ладно! Думать столько — супер усталость!」"
    - "Громко рвёт свои мысли и выпрямляется"
    - acc: 1
      content: "「Ты же уже всё поняла」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага, уже пофиг!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И главное — я уже сделала!」"

summer_start_2:
  title: "Летний сбор (Senior) начинается"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йаху~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Лето! Море! Сезон пати пришёл!~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Кстати, в прошлом году мы тоже так шумели~」"
    - "Палмер только сошла с автобуса и уже не держит возбуждение внутри — орёт"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "Вместе с Дайтаку Хелиос к грядущему Tenno Sho (Autumn) решают на этом сборе пахать по полной"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но Tenno Sho (Autumn)~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Маккуин точно пойдёт, и ещё…」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Ага! Но в этом году ещё, ещё~ горячее!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Всё-таки к Tenno Sho (Autumn) все заряжены!」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「В этом году, кажется, куча крутых %UMA% соберутся вместе」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「А, это же Икуно! Привет~ есть запал~ и очки как всегда~」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Да, я почти весь день в очках, кроме сна」"
    - "Икуно Диктус врывается в разговор без шва, очень естественно"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Икуно, про Tenno Sho (Autumn) в этом году… что знаешь?」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Да, у меня есть часть данных」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Сначала Найс Нейчер сказала, что идёт, и я тоже пойду」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「А~ Нейчер и Икуно!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Это же своё Halloween-пати!」"
    - "Пока откладываешь подколы Дайтаку Хелиос и возвращаешься к скачкам"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Разумеется, Маккуин-сан тоже пойдёт, и ещё…」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Та Токай Тэйо тоже выйдет」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Токай Тэйо… главная соперница Маккуин」"
    - "Мэдзиро Маккуин, Токай Тэйо… стоит этим двум звёздам выйти — почти всё внимание заберут %THEY% двое"
    - "Tenno Sho (Autumn) полный звёзд, а кадра на Палмер нет — это, может, ударит по форме %SEX%…"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тэйо идёт, Маккуин тоже! Это же супер!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Кто угодно — все вместе!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я! А, мы не боимся! Да, Хелиос~」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Ойе~ вообще не боимся!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Какая ни придёт соперница… самое яркое точно~」"
    - "%CHARA%&%HELIOS%「Наша дружба! Ойе-йе-йе-йе!~」"
    - "Перед скачками, где должно давить, на лице Палмер ни капли напряжения"
    - "Старая тень вокруг неё больше не кружит; %SEX% сейчас……"
    - "Ждёт только лето, которое зажигает до потолка!"

# 爱慕＞74
summer_middle_2:
  title: "Маленькая летняя случайность"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%! Поднимешь солнцезащитный крем?」"
    - "「Можно, но почему не Хелиос %THEY% поможет?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хелиос %THEY% уже внизу, вдруг звать %THEY% обратно тоже неловко」"
    - color: %COLOR%
      content: "Палмер лежит на коврике, хвост возбуждённо метёт в стороны"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И потом, %CALLNAME% не первый раз так ко мне прикасается, да? Вот в прошлый раз на свободных скачках тоже %CALLNAME% пот мне вытирал(а)」"
    - "「Но тогда не купальник был, как сравнить」"
    - color: %COLOR%
      content: "В голосе %CALLNAME% чуть злости, но для ушей Палмер это обычный подкол"
    - color: %COLOR%
      content: "Палмер ясно знает, какой у неё напарник: особых мыслей не будет"
    - color: %COLOR%
      content: "По крайней мере на неё… наверное"
    - acc: 1
      content: "「М, спина почти, Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Окей」"
    - color: %COLOR%
      content: "Встаёт с коврика, только перевернулась — и видит лицо %CALLNAME%, что уводит взгляд"
    - color: %COLOR%
      content: "Неужели… стесняется? Такое редко"
    - color: %COLOR%
      content: "Палмер чуть злобно улыбается, но странную мысль сразу давит"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Спереди сама, %CALLNAME%… %CALLNAME%?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Это… неужели?)"
    - color: %COLOR%
      content: "Глядя, как %CALLNAME% молча ставит крем и отворачивается, на лице Палмер чуть румянца"
    - color: %COLOR%
      content: "Летняя одежда ничего не прячет, тем более на %CALLNAME% сейчас одна рубашка"
    - color: %COLOR%
      content: "Красные уши, чуть глянь — уже видно"
    - color: %COLOR%
      content: "Стесняется, да? Точно стесняется?"
    - color: %COLOR%
      content: "Чуть хочется подразнить…"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Может, тренер… и спереди тоже тебе?」"
    - color: %COLOR%
      content: "Слова уже вышли, с опозданием понимает, что сказала лишнее"
    - color: %COLOR%
      content: "То есть спереди %CALLNAME% можно трогать как угодно"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Арэ, не перебрала?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(%CALLNAME%… примет?)"
    - color: %COLOR%
      content: "Сердце всё быстрее, уже как на скачках…"
    - color: %COLOR%
      content: "Лицо Палмер с игривой улыбки уходит в красную неловкость, остаётся молиться, что %CALLNAME% откажется от стыда"
    - color: %COLOR%
      content: "Но обычно: о чём молишь — то наоборот и будет"
    - acc: 1
      content: "「Ла, ладно…」"
    - color: %COLOR%
      content: "Голос %CALLNAME% чуть дрожит, но крем уже готов"
    - color: %COLOR%
      content: "Когда оборачивается — глаза в глаза"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё, всё-таки сама! Если подумать, я щекотки боюсь…」"
    - color: %COLOR%
      content: "В глазах Палмер мелкие спирали, в панике хочет отобрать крем из рук %CALLNAME%"
    - color: %COLOR%
      content: "Неясно: ветер на пляже сильный или движение Палмер слишком большое"
    - color: %COLOR%
      content: "Низ зонта чуть отпускает и падает на вас двоих"
    - "「Палмер!」"
    - color: %COLOR%
      content: "%CALLNAME% лежит сверху Палмер, локтями едва держит чуть пространства"
    - color: %COLOR%
      content: "Палмер лежит внизу, растерянно прячет руки на груди и смотрит на такое же чуть красное лицо %CALLNAME%"
    - color: %COLOR%
      content: "Зонт большой, места полно, никого, конечно, не задело"
    - "「Прости! Сейчас вста…」"
    - color: %COLOR%
      content: "Когда %CALLNAME% хочет встать, Палмер быстро ловит руку"
    - color: %COLOR%
      content: "Бутылка крема падает рядом, Палмер подхватывает и льёт на руку %CALLNAME%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%… спереди тоже можно тебе?」"
    - color: %COLOR%
      content: "Краснея, говорит то, чего сама не думала сказать"
    - color: %COLOR%
      content: "Сейчас вас двоих накрыл зонт, снаружи если не смотреть — ничего не видно"
    - color: %COLOR%
      content: "Держит руку %CALLNAME% и тянет на своё тело"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Возьми ответственность… за то, что сердце завела…」"
    - color: %COLOR%
      content: "Палмер бормочет себе, будто уговаривает себя"
    - color: %COLOR%
      content: "%CALLNAME% будто ничего не слышит, только дрожащей рукой легко скользит по телу Палмер"
    - color: %COLOR%
      content: "Холодный крем и тепло ладони вместе скользят вверх-вниз по гладкому животу Палмер"
    - color: %COLOR%
      content: "Румянец уже на корне шеи, но ноги, что всегда уносили в побег, без сил"
    - color: %COLOR%
      content: "Хочет сбежать, но…"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Если это тренер — не сбегать тоже можно, да)"
    - "「Палмер, уже всё」"
    - color: %COLOR%
      content: "Убирает руку и уходит с глаз Палмер"
    - color: %COLOR%
      content: "Оборачивается, берётся за зонт и понемногу поднимает"
    - color: %COLOR%
      content: "Глядя на спину %CALLNAME%, Палмер молчит"
    - color: %COLOR%
      content: "Сейчас нас двоих никто не увидит"
    - color: %COLOR%
      content: "Сейчас что ни сделай — не заметят, да"
    - color: %COLOR%
      content: "Сейчас…"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Слушай, %CALLNAME%」"
    - color: %COLOR%
      content: "%CALLNAME% ставит зонт и оборачивается на Палмер"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тут… ещё нет」"
    - color: %COLOR%
      content: "Показывает на свою грудь, краснея"
    - color: %COLOR%
      content: "Неясно, что сделает %YOURSEX%"
    - color: %COLOR%
      content: "Может…"
    - acc: 1
      content: "「Палмер, тут…」"
    - color: %COLOR%
      content: "Рука в креме дрожит"
    - color: %COLOR%
      content: "Даже схваченную, стянутую к телу Палмер"
    # CFLAGNAME:0 = 性别
    - if: era.get('cflag:64:0') !== 1 && era.get('cflag:0:0') === 1
      color: %COLOR%
      content: "Говорят, мужчинам грудь не против, но…"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если %CALLNAME% не нравится…」"
    - color: %COLOR%
      content: "Ладонь дрожит в воздухе, пока Палмер сама не подаёт грудь — тогда дрожь стопорится"
    - color: %COLOR%
      content: "Палмер крепко закрывает глаза, напряжённое тело мелко дрожит"
    - color: %COLOR%
      content: "Тёплая жидкость скользит по груди и течёт в купальник"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content: "Крепко закрытые глаза Палмер медленно открывает и смотрит на растерянное лицо %CALLNAME%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Нравится?」"
    - color: %COLOR%
      content: "Палмер тянет тонкую руку, легко держит лицо %CALLNAME% и тянет к своему"
    - color: %COLOR%
      content: "Губы сходятся, меняетесь теплом"
    - color: %COLOR%
      content: "Язык сам лезет сквозь зубы и сплетается"
    - color: %COLOR%
      content: "Пока дыхания уже нет, неохотно отпускает кончик языка с ниткой слюны"
    - acc: 1
      key: sex
      content: "「Но сейчас ещё нельзя」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Эх…」"
        - color: %COLOR%
          content: "Будто горячую голову облили холодной водой, остывает и мысль возвращается"
        - color: %COLOR%
          content: "Палмер садится, чуть паникой глядит за зонт"
        - color: %COLOR%
          content: "…Никто тут не заметил"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Если я всё не пойду, все заподозрят」"
        - color: %COLOR%
          content: "Палмер легко ловит хвост, который давно не держит возбуждение, и встаёт из тени как ни в чём"
        - color: %COLOR%
          content: "Глубоко вдыхает и протягивает руку к %CALLNAME%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Когда вернёмся… вместе с %CALLNAME%…」"
    - acc: 2
      content: "「Я люблю тебя, Палмер」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я тоже, %YOURNAME%」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я люблю %YOURNAME%…」"
        - color: %COLOR%
          content: "Отпускает руки, что держали %CALLNAME%, пальцами легко тянет завязку купальника"
        - if: era.get('cflag:64:0') !== 1
          color: %COLOR%
          content: "Маленькие соски уже стоят, ждут"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Прошу…」"
      # 马跳

summer_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「А… вот теперь плохо」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Все точно заметили, что нас нет, плохо」"
  - color: %COLOR%
    content: "Легко отталкивает такое же потное тело %CALLNAME% и стирает следы на себе"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Э, когда вернёмся, ещё можно продолжить, да」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Не, не то что ты думаешь! Просто…」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「С %CALLNAME% весело, вот это」"
  - color: %COLOR%
    content: "Палмер краснеет и чуть мстительно ещё щиплет %CALLNAME%"

# 爱慕＞74，8月第四周开始
walk:
  title: "Прогулка у моря"
  lines:
    - "Конец летнего сбора, тренировок мало, свободного времени полно"
    - "Палмер одна смотрит на волны на песке и то и дело крадёт взгляд на %YOU% сзади"
    - "Полдень быстро уходит, на пляже уже не видно других %UMA% на тренировке"
    - acc: 1
      content: "「Ладно, нам тоже пора…」"
    - "Как раз уходить — Палмер легко ловит руку %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, тренер, можно чуть…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Совсем чуть, погуляй со мной тут, можно?」"
    - "Взгляд Палмер в другую сторону, но то и дело на %YOU%"
    - acc: 1
      content: "「Можно」"
    - acc: 2
      content: "「Но уже поздно…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м… мы давно так не гуляли, да」"
    - "Руки Палмер за спиной, голень тревожно легко стучит по полу"
    - "Взгляд ходит между своим купальником и телом %YOU%, только в лицо не смотрит"
    - "%YOU%, собрав тренировочный скарб, не замечает тревожных мелочей и подходит к Палмер"
    - "Закат на пляже красит ваши профили, тихо идёте"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Обычно тут всегда куча народа вместе」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Все вместе тренируются, вместе играют…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Весело, да, но всё равно чего-то не хватает」"
    - "Палмер медленным шагом липнет к %YOU%, плечо к плечу"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Когда с тобой, тренер, вдвоём, чувство…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Поняла, чего не хватало」"
    - acc: 1
      content: "「Чего?」"
    - "Услышав голос %YOU%, Палмер сама улыбается"
    - "В незащищённый бок рядом без силы чуть тыкает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Это ты, тренер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не тренировка, не все вместе… только мы двое」"
    - "Золотой закат на лице Палмер прячет румянец на всю щёку"
    - "Тихо стоите у края пляжа, волны на берегу закрывают щиколотки"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Слушай, тренер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Дальше тоже всегда будешь со мной?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как ты раньше сказал(а) — всегда смотреть на меня」"
    - "Палмер спиной к яркому солнцу сияюще улыбается %YOU%"

summer_end_2:
  title: "Летний сбор (Senior) кончается"
  lines:
    - "С концом лета начинается фестиваль"
    - "И %UMA%, что любят пати, этот шанс, конечно, не упускают"
    - "%CHARA%&%HELIOS%「Йе~ сначала деревенский фестиваль, потом~」"
    - "Весёлый голос едва вспыхивает — и в небо летят яркие звёзды"
    - "Ночное небо рвёт огромный фейерверк, светит все лица, поднятые вверх"
    - "%CHARA%&%HELIOS%「Супер-хай фейерверк, бах~ пах!」"
    - divider: true
      content: "На следующий день"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хорошо—! Сегодня тоже вместе бежим, напарница!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Давай, %65_CALL%!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Бежать с теми, кто нравится, — усталость ноль~」"
    - "%CHARA%&%HELIOS%「На старт~ пошли!!」"
    - "Палмер и Дайтаку Хелиос бегут оставшееся время душа в душу, явно счастливы"
    - "Останавливаются, только когда кончается последний кусок сбора"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「А-а~ серьёзно~ сбор сегодня кончается~?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Наше лето всё~~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тоже~ я ещё хотела побегать」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но я всё хотела бежать с тобой, Хелиос, к одной цели, прожить лето вместе」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「О-о, вместе в закат и всё такое~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но~ дальше же настоящие скачки?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Там ещё сильнее прёт! Да?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Точно! Tenno Sho (Autumn)!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Вдвоём снесём крышу~ ойе-ойе~!」"
    - "Обе орёт на высоких, один(одна) %YOU% стоит сбоку неловко и смотрит на ещё одного человека, кто тоже смотрит на %THEY%"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「……」
    - acc: 1
      content: "「Икуно Диктус-сан…?」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「…Ничего. Просто задело, что %THEY% бежали и говорили…」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「— теория усталости ноль」"
    - acc: 1
      content: "「…Вот это?!」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Да. Если б теория была правдой — ладно… но это невозможно」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Гнать сердце или тело — рано или поздно ударит по бегу」"
    - acc: 1
      content: "「Ты за %THEY% переживаешь?」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Нет, %SEX% бежит всё лучше, тревожиться не о чем」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「Верно… за Палмер-сан тревожиться не надо」"
    - "Слыша уверенность %DICTUS%, %YOU% снова смотрит на возящихся Палмер и Дайтаку Хелиос"

# 资深年天秋
tenn_sho:
  title: "Своей посадкой!"
  lines:
    - "В день Tenno Sho (Autumn) погоды не повезло"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ува, грунт мокрый」"
    - "Дорожка ещё не до «не бежать», но грязи много, вид жёсткий"
    - "Если так пробежать эти скачки — может, вся будет в грязи"
    - "Но %SEX% точно побежит. %YOU% в это верит"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Так после скачек будет жесть」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но! Нормально!」"
    - "Палмер сжимает кулаки и сильно машет"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Это скачки, о которых договорились с Хелиос, я не испугаюсь」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Какая бы ни была трасса — мою посадку не собьёт!」"

#持有依存心时天秋
tenn_sho_yandere:
  title: "Моя посадка и моё…"
  lines:
    - color: %COLOR%
      content: "В день Tenno Sho (Autumn) %CHARA% смотрит на небо, которое не назовёшь ясным"
    - color: %COLOR%
      content: "Желание завестись настоящее, желание вместе с Дайтаку Хелиос нестись по трассе — тоже"
    - color: %COLOR%
      content: "…Но чего-то не хватает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не прёт…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер… нет?」"
    - color: %COLOR%
      content: "Стоит на трассе без запала"
    - color: %COLOR%
      content: "Подруги рядом уже бросают короткие угрозы и идут к створкам"
    - color: %COLOR%
      content: "Делает вид, что всё нормально, отвечает всем, кто подошёл, и входит в створки ждать старта"
    - color: %COLOR%
      content: "Время здесь замедляется"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…Э?」"
    - color: %COLOR%
      content: "В углу взгляда — опоздавший(ая) %CALLNAME%: болеет за неё, пока %SEX% бежит"
    - color: %COLOR%
      content: "Ветер трассы несёт крик %CALLNAME% в уже оживающие уши Палмер и зажигает тусклый взгляд %SEX%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Тренер)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Тренер всё это время… смотрит на меня)"
    - color: %COLOR%
      content: "Шум вокруг стихает: все %UMA% ждут миг, когда рванут створки"
    - color: %COLOR%
      content: "%CHARA% тоже смотрит вперёд и снова сжимает кулаки"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Тренер %YOURSEX%… всё время здесь!)"

# 天秋胜利
tenn_sho_win:
  title: "Йаху! Хоть вся в грязи — плевать!"
  lines:
    - "Побег удался! На полной через финиш!"
    - "Вся в грязи от ударов по грунту, но на грязном лице весёлая улыбка"
    - "Только потому, что выиграла? Не только"
    - "Сначала стереть грязь, иначе будет морока"
    - "Видя полотенце в руках %YOU%, Палмер спокойно снимает грязный верх скакового костюма"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Видел(а), тренер? Супер— кайф!」"
    - acc: 1
      content: "「Да, видно, что рада」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хехе, только, кажется, перебрала」"
    - "Одной рукой Палмер неловко чешет затылок, будто только сейчас дошло"
    - "Сегодня и правда перебор: белое полотенце уже почти сплошь в грязи"
    - acc: 1
      content: "「Ничего. После скачек это уже моя работа」"
    - acc: 2
      content: "「Плевать. Лишний раз тронуть тело Палмер — тоже ничего」"
    - "Услышав это, Палмер невольно вздрагивает, полотенце, что гладило бок, съезжает в сторону"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ахаха, тогда тебе, тренер」"
    - "На словах благодарит, рукой берёт полотенце сбоку и делает вид, что ей всё равно"
    - "Поднятые руки в воздухе кое-как вытирают и не знают, куда их деть"
    - acc: 1
      content: "「Э, Палмер?」"
    - "Пробный вопрос %YOU% возвращает улетевшие мысли Палмер"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ничего-ничего! Просто щекотно, испугалась!」"
    - "Силой крутит лицо в сторону, вниз не смотрит"
    - "Полотенце тонкое: сквозь ворс ясно чувствуются сильные пальцы по телу"
    - "Пыль с ног уже стерта, полотенце ползёт вверх"
    - "Тёплые кончики пальцев липнут к голому боку и ходят вверх-вниз"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Это просто грязь стереть, просто грязь…)"
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Да. Просто грязь…)"
        - "Полотенце понемногу едет по дрожащему телу к пупку"
        - "Пыль стерта, виден живот Палмер"
        - "Сквозь полотенце пальцы ловят мелкую дрожь, пот ползёт из-под подкладки"
        - "Глядя, как она краснеет, уже трудно терпеть"
        - "Язык по милому пупку ведёт прямую линию"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ва!」"
        - "Испуганный голос Палмер срывает мысли %YOU% с живота, ты панически делает вид, что уже всё"
        - acc: 1
          content: "「Уже чисто. Потом ещё сцена, переодевайся скорее」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, то…」"
        - "Не слушая Палмер, сразу уходишь из комнаты отдыха"
        - "Чуть не сорвалось"
        - "Продолжишь только что — и, может, повалишь Палмер"

# 天秋失败
tenn_sho_lose:
  title: "Аха, чуть обидно"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Проиграла… форма чуть съехала」"
    - "Палмер входит в комнату отдыха со всё той же светлой улыбкой, но внутри странно злит"
    - acc: 1
      content: "「Сегодня форма не та」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Точно! Ускорение не удержала, тормоза сорвало — и сразу потеряла ход!」"
    - "Говорит про себя, но будто не про свою вину"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, но бежалось весело, хоть и проиграла」"
    - "Высовывает розовый язычок, жмурит один глаз, строит милую морду"
    - "Чуть кренится вбок и украдкой трётся всей грязью"
    - acc: 1
      content: "「Но… ладно. Лишь бы тебе было кайф」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хехе, потом Winner's Stage, сначала переоденусь」"
    - "Палмер бросает милую позу, поворачивается за полотенцем стереть грязь"
    - "Только уже берёт полотенце и чёрт дёрнул глянуть назад на %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тре~не~р~」"
    - acc: 1
      content: "「Что?」"
    - "Услышав голос сзади, оборачиваешься — и видишь, как Палмер прёт на полной"
    - "Вся в пыли кидается в объятия и мажет одежду %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хехе, шутка, шутка!」"
    - "На лице Палмер рожа проказницы, высовывает ловкий язычок"

# 资深年有马
senior_arim_kin:
  title: "Готова? Начинаем побег!"
  lines:
    - "Последняя G1 года"
    - "Обычным днём сейчас были бы сплошные нервы"
    - "Но на лице Палмер у выхода из тоннеля ни капли тревоги"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Arima Kinen, да…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Нереальности… нет」"
    - acc: 1
      content: "「Да. Arima Kinen」"
    - "Разговор без логики, а доверие — до дна"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Эй, тренер, не знаю, помнишь ли」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Раньше ты говорил(а), хочешь видеть мой стиль, да?」"
    - acc: 1
      content: "「И сейчас так же」"
    - "Услышав %YOU%, на лице Палмер уверенная улыбка"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда смотри. Полная сила Палмер…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё за спину, только вперёд」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мой побег на полной взрывной!」"
    - "Поднимает руку, оставляет за спиной тень большого пальца и твёрдым взглядом шагает на трассу к подруге, что машет"

# 原版决胜服
s_arim_kin_win_clothe1:
  title: "Вот она, моя горящая посадка!"
  lines:
    - "Комментатор「Догонят! Догонят!」"
    - "Вторая половина Arima Kinen уже в пике"
    - "Комментатор「Не ускорится — не догонишь! Мэдзиро Палмер!」"
    - "Подруга Хелиос уже потеряла ход, в лидировании осталась одна"
    - "Но договорились: этой посадкой взять победу"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Дальше на тебе!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мы подруги на всю жизнь!」"
    - "С последним ускорением и последним воздухом из лёгких Палмер никого не пускает и рвёт финиш первой"
    - "Крики победы в ушах Палмер чуть нереальны, пока на экране не она — тогда орёт и машет %YOU% на трибунах"
    - divider: true
      content: "Комната отдыха"
    - "Крики на трассе стихают, Палмер ещё не остывшим телом возбуждённо толкает дверь"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер! То, о чём договорились, — я сделала!」"
    - "Слышат её или нет — настроение уже без тормозов"
    - "Раз остановиться нельзя — двигайся по настроению!"
    - "По ветру, что ворвался в комнату, одним махом прыжок на стоящего %YOU%!"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йаху!」"
    - acc: 1
      content: "「Ува!」"
    - "По воплю %YOU% вы едва не падаете вместе на пол"
    - "Чуть не повален(а) Палмер, еле стоишь — и сначала панически машешь за её спину"
    - acc: 1
      content: "「Э, Палмер, может, сначала отпустишь?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э? Почему?」"
    - "Жалко, но слушается и отпускает"
    - "Непонимающий взгляд Палмер идёт за пальцем %YOU% к двери"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「О-о! Весна %65_CALL%?!」"
    - "За дверью подруги смотрят на нежную сцену"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А… ахаха, чуть вышла из себя!」"
    - "Закрыв голову, отступает на два шага и только тогда смущённо ищет отговорку"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Короче, э… потом!」"
    - "Палмер прощается и выскальзывает из комнаты отдыха, один(одна) %YOU% стоит растерянно и думает о другом"
    - "Из-за только что кончившихся скачек или почему"
    - "Когда обнимались, сердце Палмер… страшно частое"
    - "「Короче, сначала приберу комнату отдыха」"
    - "Бормоча, поднимаешь упавший стул и заодно чистишь кашу в голове"
    - "「Всё-таки Палмер, это нормально…」"
    - if: era.get('love:64') >= 75
      lines:
        - "Разбирая разгромленную комнату отдыха, на полу находишь ещё кое-что"
        - "Белый верх скакового костюма почему-то лежит тут"
        - "「А…」"
        - acc: 1
          content: "Поднять верх"
        - acc: 2
          content: "Положить верх аккуратно"
        - "Без колебаний берёшь верх в руки и рассматриваешь"
        - "Это Палмер только что носила…"
        - "Верх, полный её запаха"
        - "Почему-то рука с верхом понемногу ближе к лицу %YOU%"
        - "Запах Палмер бьёт в нос, пьянит"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э…」"
        - "Палмер в дверях смущённо смотрит, как %YOU% близок с верхом"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Если нюхать… мне вообще всё равно」"
        - "Смущается, но всё равно закрывает дверь комнаты отдыха и запирает"
        - "Весь мир сразу сжимается до вас двоих глаза в глаза"
        - "В глазах %YOU% уже только Палмер"
        - "Перед любовником Палмер просто раскрывает руки"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%SELF_CALL% здесь… руками сколько хочешь」"
        - acc: 1
          key: sex
          content: "Кинуться на Палмер"
          lines:
            - "Хоть на улице холодно, дыхание Палмер сейчас такое горячее, что сожжёт весь разум"
            - "Тонкие плечи, что обычно прячет белый верх, сейчас вовсе голые, в воздухе"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「…Можно」"
            - "Палмер закрывает глаза и отпускает руки, что ещё жались к груди"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Я Палмер, которая твоя, тренер」"
          # 进入马跳
        - acc: 2
          content: "「Спокойно… спокойно…」"
          lines:
            - "Кладя верх скакового костюма, легонько берёшь голые плечи Палмер"
            - "%SEX% удивлённо смотрит, а %YOU% накидывает на неё свой верх"
            - acc: 1
              content: "「Нельзя простудиться」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Тренер… м-м!」"
            - "В глазах ещё жаль, но проступает слеза умиления"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Не простужусь, э…」"
            - "Чуть туже тянет верх и прячет тело внутрь"
            - "Копируя того дурака только что, глубоко вдыхает"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「То, что дальше… потом можно?」"

# 圣诞决胜服
s_arim_kin_win_clothe46:
  title: "Финиш побега — здесь"
  lines:
    - "Комментатор「Догонят! Догонят!」"
    - "Вторая половина Arima Kinen уже в пике"
    - "Комментатор「Не ускорится — не догонишь! Мэдзиро Палмер!」"
    - "Подруга Хелиос уже потеряла ход, в лидировании осталась одна"
    - "Но договорились: этой посадкой взять победу"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Дальше на тебе!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мы подруги на всю жизнь!」"
    - "С последним ускорением и последним воздухом из лёгких Палмер никого не пускает и рвёт финиш первой"
    - "Крики победы в ушах Палмер чуть нереальны, пока на экране не она — тогда орёт и машет %YOU% на трибунах"
    - divider: true
      content: "Комната отдыха"
    - "Вся в поту возвращается в комнату отдыха и легко обмахивается ладонью"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Всё-таки после скачек жарко…」"
    - "Хочет сесть — и в лицо уже только что открытый медовый напиток"
    - acc: 1
      content: "「С Arima Kinen. Поздравляю」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Честно… всё ещё чуть не верится」"
    - "Пьёт мёд и садится"
    - "С трассы возбуждение почему-то само улеглось"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но выиграла я, да, тренер?」"
    - "В глазах тревога и ожидание"
    - acc: 1
      content: "「Да. Выиграла Палмер」"
    - "Получив ответ, Палмер смеётся и тихо кладёт голову на плечо %YOU%"
    - "Голое плечо нового скакового костюма липнет рядом, лёгкий запах плывёт"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, тот уговор — я сделала」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я выиграла Arima Kinen своей посадкой, теперь все придут поздравлять, да?」"
    - acc: 1
      content: "「Все точно признают твою силу, Палмер. Без вопросов」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но чуть нечестно」"
    - "Впервые Палмер сама отказывается от похвалы"
    - "Уходит с плеча и всерьёз смотрит на %YOU% рядом"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Из-за тебя у меня сейчас этот результат」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А твоё имя не называют. Так не должно, да?」"
    - "Взгляд Палмер серьёзный: обычные добрые голубые зрачки сейчас без шутки"
    - acc: 1
      content: "「Ну да」"
    - acc: 2
      content: "「Я просто тебя поддерживал(а), Палмер」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ну да… вообще нет!」"
    - "Ворчит и стукает %YOU% по голове, потом убирает улыбку"
    - "С серьёзным лицом выпрямляется, ладонь легко ложится на тыл руки %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Без тебя точно бы не вышло」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Только из-за твоего доверия я смогла бежать свободно…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Без тебя… я ничего не могу!」"
    - "Голос идёт вместе с чувствами, будто орёт"
    - "Пальцы крепко впиваются в плечо %YOU%, кончики уже в мясо"
    - acc: 1
      content: "「Палмер…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Прости, чуть завелась」"
    - "Палмер поднимает руку и смахивает влагу с угла глаза"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но то, что сказала, — всерьёз」"
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я всё равно хочу, чтобы ты был(а) со мной всегда, в любой момент」"
        - "Тело на плече чуть качается, будто от лёгкого толчка ляжет"
        - "Опущенная ладонь легко ложится на бедро %YOU% и ждёт ответа"
        - acc: 1
          key: hug
          content: "Обнять Палмер"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Будешь всегда рядом, да?」"
            - "Лицо Палмер в объятиях %YOU%, слушает, как сердце разгоняется"
            - "Закрывает глаза и пьёт запах в объятиях"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Да ведь…」"
            - "%YOU% поднимает руку, легонько ерошит голову Палмер и расстёгивает пуговицы нового костюма"
            - "Белую шапочку Палмер снимает сама и ждёт с нежным взглядом"
            - acc: 1
              content: "「Палмер, я тебя люблю」"
            # 马跳
        - acc: 2
          content: "Поцеловать Палмер"
          lines:
            - "Как в ответ, %SEX% чувствует движение рядом: %YOU% сам(а) встаёт и глубоко целует Палмер"
            - "И без того слабое тело внезапным натиском валит на стул комнаты отдыха, мысли дать сдачи нет вовсе"
            - "Белая шапочка падает на пол, никому нет дела: в зрачках только лица друг друга"
            - "Неизвестно, сколько целовались, пока серебряная нить не развела губы"
            - "Сейчас четыре глаза смотрят сверху вниз"
            - "Палмер медленно закрывает глаза, кладёт руки на шею %YOU% и тихо тянет к себе"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Прошу. Это рождественская %SELF_CALL%」"
            # 进入马跳

ak_c46_hug_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Эхехе, как будто ещё одни скачки」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Но сейчас могу спокойно сказать—」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Я тренера… я первое %YOURNAME%!」"
  - "Улыбка Палмер совсем свободная, прежней тревоги нет"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Дальше, нет… на эту жизнь тоже прошу, %YOURNAME%!」"

ak_c46_kiss_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「А… промах」"
  - "Палмер закрывает лицо, будто очень злится на себя"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Теперь на сцену с твоим запахом! Идиот!」"
  - "Слова как жалоба, злости нет"
  - "Наоборот, будто рада"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「…Но такого тренера я не ненавижу」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Что сам(а) полез(ла) kiss — %SELF_CALL% тоже любит, но хочу, чтобы ты многое сказал(а) прямо」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Например, про меня… какие мысли?」"
  - "Пальцем легко чешет лицо, взгляд прямо в %YOU%"
  - "Что спрашивает эта фраза — слышно сразу"
  - acc: 1
    content: "「Нравишься… нет」"
  - "Что гонит %YOU% делать это, обнимать Палмер самому, брать её за руку"
  - "Эти вопросы уже без слов"
  - "「…Наверное, любовь」"
  - "Простая и слащавая фраза изо рта %YOU% останавливает пальцы Палмер на лице"
  - "Всё красное лицо тупо смотрит на %YOU% рядом, губы мелко дрожат, будто хочет сказать"
  - "Долгий взгляд, пока звук за дверью не возвращает мысль, и спокойное лицо вдруг смеётся"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Тренер, у меня уже есть ответ…」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Мы одинаковые」"

# 资深年12月4周
christmas_party:
  title: "Рождественский вечер Мэдзиро"
  lines:
    - "Рождественская ночь — вечеринка семьи Мэдзиро в ответ на помощь со всех сторон"
    - "Палмер в белом скаковом костюме по открытой площадке всюду поднимает настроение"
    - "Когда вокруг теплеет и шумно, у Палмер находится время найти праздно гуляющего %YOU%"
    - "Уходит от своей кучи и обходит сюда"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, сегодня весело?」"
    - "Палмер протягивает напиток и просто остаётся рядом с %YOU%, вместе сбавляя шаг"
    - acc: 1
      content: "「Ага. Весело」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хехе, лишь бы весело」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Изящные банкеты мне не к лицу, но сегодня просто тусовка」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И бабушке спасибо!」"
    - "В голосе Палмер веселье, шаг тоже легче"
    - "Шум вокруг негромкий и вовсе не лезет в ваше пространство"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вечер вместе с тобой почему-то очень кайф」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Раньше вечеринки я чуть отталкивала」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда я себя ставила на роль разогрева, весёлая часть со мной как-то не стыковалась」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А после Хелиос %THEY%」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Уже естественно веселюсь со всеми!」"
    - "Палмер чуть наклоняется вперёд и косит взгляд на лицо %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И это тоже тебе, тренер, хехе」"
    - "На лице свободная улыбка, плечо легко стукается о %YOU%"
    - "В конце года не жарко, одежда Палмер тоже не греет"
    - "Голые плечи в глазах %YOU% — сплошной риск"
    - acc: 1
      key: sex
      content: "(Простудится…)"
      lines:
        - "На голые плечи накидываешь верх, закрывая тело Палмер"
        - "Ещё тёплая одежда липнет к телу и несёт чуть запаха %YOU%"
        - "Чуть тупеет, потом Палмер смущённо смотрит в сторону"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, в этом наряде на самом деле не очень холодно」"
        - "Не то чтобы радостно принимает, но всё равно тянет полы на себя"
        - "Нос полный запаха одежды, лицо краснеет"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но… всё равно спасибо, %CALLNAME%」"
        - "Голос уже не тот бодрый, совсем ровный"
        - "Громкостью только для %YOU% дует в ухо"
    - if: era.get('love:64') >= 75
      acc: 2
      content: "(Сейчас накроет…)"
      lines:
        - "Голая рука сама ложится за голову, видна белая подмышка"
        - "Под короткой юбкой чулки на подтяжках высоко, на обычно голом бедре маленькая вмятина"
        - "Тёмно-синяя лента собирает волосы в высокий хвост сбоку, виден затылок"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%? Плохо?」"
        - "Голос Палмер вовремя возвращает мысль в реальность"
        - "Странное лицо она тоже заметила"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, пойду с тобой чуть отдохнуть, не простудись」"
        - "Голосом как раз слышным остальным находит вам двоим повод уйти"
        - "Минуя весь зал, минуя старика-дворецкого, минуя всех"
        - "Там, где никто не найдёт, Палмер оборачивается к %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME% ты…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Совсем не даёшь покоя」"
        - "Ладонь легко ложится на штаны и нежно жмёт"
        - "Пока не поднимается жар, Палмер медленно тянет молнию"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Звуков не издавай」"
        - "Нежный голос звенит в голове %YOU%, следом — кайф, как Палмер играет с низом"
        - "Пальцы как в танце ходят по чувствительным точкам, каждая дразнилка трясёт тело в зимней ночи"
        - "По инстинкту руки %YOU% хватают плечи Палмер, липнете вместе"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Можно выходить」"
        - "Когда не видно, касание промежности ещё острее"
        - "Трение кончиков пальцев сильнее, манит к оргазму"
        - acc: 1
          content: "「Палмер, я…!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А…」"
        - "После горячего потока Палмер смотрит на свою руку и молчит"
        - "Достаёт платок, вытирает руку и только тогда снова выходит из угла"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер, если не вернёмся, все заподозрят」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ладно, пошли」"
        - "Палмер протягивает прямую руку уже одетому %YOU%"
        - acc: 1
          content: "「Взять Палмер за руку」"
        - acc: 2
          content: "「Тянуть Палмер за руку」"
          # 马跳

party_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Ну вот, так точно заподозрят…」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Ладно-ладно, нормально」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Ну, %SELF_CALL% тоже вообще не парит」"
  - "Рядом с чуть поникшим %YOU% Палмер светлая"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Если парит — сходим погулять как компенсацию?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Шутка. Когда угодно можно снова!」"
  - "Улыбка Палмер как всегда, с теплом"

#资深年宝塚纪念优胜，有马纪念连霸后出现。已育成后（第4年）进入1月4周
winner:
  title: "Голову слишком задрала!"
  lines:
    - "Редкий отдых: %YOU% отпускает мысли — и сам(а) думает о Палмер"
    - "Почему-то всплывают воспоминания побед"
    - "Точно: Мэдзиро Палмер очень сильна на скачках-фестивалях"
    - "Победы подряд в 「Arima Kinen」 и 「Takarazuka Kinen」, и ещё раз 「Arima Kinen」…"
    - "Мысль уже улетает в небо, когда голос Палмер рвёт нить %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Боже-боже-боже… я трёхкратная чемпионка Grand Prix!」"
    - acc: 1
      content: "「Ага. Точно!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ахаха, даже сама думаю, что круто сделала!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Это рекорд, но в скачках с голосованием публики — как раз в моём стиле」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Такие шумные фестивальные скачки со всеми вместе, может, мне больше всех идут!」"
    - acc: 1
      content: "「Раз фестиваль — вроде ещё и церемония」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, за три подряд? Вот как, тоже весело!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но на скачках уже оторвалась на полную, на церемонии потише, по-обычному」"
    - divider: true
      content: "Церемония"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「М-м~ ничего плохого нет, но твоя манера на сцене…」"
    - "Президент студсовета чуть кривит голову, глядя на репетицию"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Президент? В том, как я беру кубок, большая проблема?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сегодня я не гяру, странного вроде нет…」"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「Не странно」"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「Наоборот, обычная ты слишком скромная」"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「Можно ещё выше голову и грудь, без оглядки」"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「Прошлая %UMA% с тройным Grand Prix — та скаковая %UMA%, которую я чту」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Выше голову… даже если так~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но обычная скромность, сказать, с детства」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м~ как быть」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「Можно слово?」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「Думаю, величественности мало из-за угла наклона головы」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「Попробовать поднять угол? Где-то… примерно 2.85 градуса」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Положение головы… вот как」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я обычно невольно делаю『привет-привет~』, поэтому и не величественно」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「OK, Бурбон! Поняла! Попробую выше голову!」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「Прошу. Если будешь держаться уверенно и твёрдо, мне тоже будет радостно」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「Потому что твой результат, Палмер, — мечта скаковых %UMA%-беглянок」"
    - "Общими силами церемония как-то спокойно кончается"
    - "Только после—"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「О-о-о-о-о!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, тренер! Ритм только что был огонь, да!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Бежалось супер легко, какое время?」"
    - acc: 1
      content: "「Прогресс явный」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как так…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Это только от бесконечных тренировок? Или…」"
    - acc: 1
      content: "「Неужели… из-за поднятой головы?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Голова… а, та церемония」"
    - "Лицо Палмер вдруг светлеет как вспышка"
    - "Поза с поднятой головой, может, поправила и нутро"
    - "То есть после этого в Палмер уже сидит гордость скаковой %UMA% с тройным Grand Prix"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вот как… сменился настрой — сменилась посадка, значит голову выше!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хорошо~ подбородок вверх, грудь вперёд, за четвёртой, пятой подряд!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йаху!」"
    - "Переполненные чувства и жар бегут из Палмер"
    - "Гордость тройного Grand Prix высечена в сердце, и дальше Палмер полезет на новые пиры"

#达成称号条件后，进入2月1周
sports_car:
  title: "Шок! Подарок — спорткар!"
  lines:
    - "Спокойный день: в кабинете %YOU% вдруг получает весть от %MINORU%"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「Это надо было сразу Палмер-сан, но сегодня %SEX% отдыхает」"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「Это не то, что школа может временно хранить」"
    - acc: 1
      content: "「Настолько важно?」"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「Подробности объяснит председатель」"
    - divider: true
      content: "Кабинет председателя"
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - "「Почёт! Ты ярко вёл(а) Мэдзиро Палмер!」"
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - "「Награда! Спонсор Twinkle Series прислал большой подарок!」"
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - "「Неси как тренер этот подарок Мэдзиро Палмер!」"
    - acc: 1
      content: "「Э-э?! Этот подарок что за…」"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「Ну, сначала на парковку」"
    - "Зелёная управляющая протягивает %YOU% новенький ключ и указывает на парковку"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「Найдёшь быстро, остальное на тебе」"
    - "Сказав, Хаякава Тадзуна возвращается к работе"
    - "В тумане %YOU% с ключом входит на парковку"
    - "Перед глазами новая машина, бьющая блеском, — подарок довольно жёсткий"
    - acc: 1
      content: "「Жёсткий подарок…」"
    - "Новенькая машина и правда жёсткий подарок, но есть большая проблема"
    - "Палмер ведь не за рулём"
    - "Как тогда отдать этот подарок Палмер…"
    - if: era.get('love:64') >= 50
      acc: 1
      content: "「Позвонить Палмер…」"
      lines:
        - "Телефон Палмер сразу берёт, сразу соглашается увидеться"
        - divider: true
          content: "Улица"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А, блин, точно опоздаю…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М-м… странно, не найти」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Неужели тренер тоже опоздал(а)?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Не, этого быть не должно, по пути что-то случилось…」"
        - "Палмер рысцой по улице ищет %YOU% влево-вправо"
        - "Ищет уже нервно, когда сзади гудок"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ой, а, прости-прости! Сейчас отойду…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Стой… арэ? Тренер?」"
        - acc: 1
          content: "「Йо, Палмер, садись」"
        - "%SEX% тупит на месте, а %YOU% в спорткаре кивает и тормозит рядом"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Какая крутая тачка… нет, почему ты?」"
        - acc: 1
          content: "「Подарок спонсора серии — тебе」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это мне!?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это супер! Но я вроде не за рулём」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Прав нет ещё, а подарок такой дорогой」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Точно! Тогда руль тебе, тренер!」"
        - "Не договорив, Палмер уже на пассажирском"
        - "Машина по улицам к морю и спокойно едет вдоль берега"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер, кайф!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Дальше-дальше! Йаху!」"
        - "Морской ветер в окно по Палмер, и и без того радостная %SEX% сама начинает играть"
        - "Пока машина не останавливается на пустом пляже, смех не кончается"
        - "Волны бьют в песок, мягкий шорох"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Фух, далеко заехали~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Бесцельный прохват тоже ничего」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Иногда надо взорваться из будней и ловить своё удовольствие как душа просит」"
        - acc: 1
          content: "「Ты же такая, Палмер」"
        - "Слыша подтверждение %YOU%, Палмер не держится и тихо смеётся"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ахаха, точно!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「От мелкой себя, от дороги, которую мне назначили другие」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Бежать, бежать, всё бежать и бежать…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…И под твоим ведением с уверенностью дошла сюда!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Потому—」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М-м~ ветер кайф~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Меня уже ничто не напугает!」"
        - "На светлой улыбке Палмер свобода, широко раскрывает руки и потягивается"
        - "Только в улыбке чуть неловко, брови чуть сходятся"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ну, до тебя я всё топталась на старте, поэтому старт чуть поздний」"
        - acc: 1
          content: "「Но ты догнала своими ногами」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ага, юность на круг позже~ но—」"
        - "Отпускает сведённые брови и спокойно смотрит в лицо %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Нет ничего, что нельзя вернуть!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Может, сейчас ещё не в руках, но когда-нибудь заберу!」"
        - acc: 1
          content: "「И эта штука тоже. Ещё и юбилейная」"
        - "Улыбаясь, %YOU% указывает на машину, что привезла вас двоих, легко"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Подарок спонсора…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Как сказать, всё ещё чуть нереально」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Слушай, тренер」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「С этой машиной можно что угодно как я хочу, да? Что бы я ни задумала?」"
        - acc: 1
          content: "「Конечно」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это же, так, так, так…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Классно! Это просто супер!!!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тогда когда угодно можно кататься」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Давай гонять в кайф, %YOURNAME%!」"
        - acc: 1
          content: "「Мы? Я тоже?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ага! Это же не одной моей силой, так что хочу делить с тобой」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А точно, ещё одно…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Если можно, дадим ей имя?」"
        - acc: 1
          content: "「Имя?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ага! Я собираюсь гонять до старости, так что имя, которое не надоест и которое беречь」"
        - "Имя машине Палмер, под заслуги %SEX% и такое, что беречь…"
        - "В голове %YOU% ответ уже один"
        - acc: 1
          content: "「Палмер!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э? Я тут…」"
        - acc: 1
          content: "「Пусть будет Палмер-го」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э-э!?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Моим именем?!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Если так назвать, ты будешь её беречь всегда?」"
        - acc: 1
          content: "「Ага. И твои заслуги тоже запомнит」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ахаха, вот как? Тогда так, простое имя тоже ничего」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М-м, Палмер-го! Всё-таки нет ничего, чего я не достану!」"
        - "Улыбка Палмер как чистое небо, довольно кивает"
        - acc: 1
          content: "「Ты изначально хотела машину?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Машину… ну, может, да」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но кроме этого я хочу ещё кучу всего!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Пошли, дальше гонять!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер, быстрее!」"
        - "Мэдзиро Палмер опоздала, но в миг %SEX% рвёт вперёд и тащит %YOU% бежать—"
        - "Машина заводится и снова едет"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Быстрее, ещё быстрее, тренер!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「До предела!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「FuFu~! Свобода — самое то!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Беги, беги, Палмер-го!」"
        - "Палмер-го всё быстрее: когда-то безвестная опоздавшая беглянка, а сейчас"
        - "%SEX% бежит быстрее всех"
        - "%SEX% — первопроходец в стороне от столбовой дороги, рисует в семье Мэдзиро самый свободный след"
    - acc: 2
      content: "「Позвонить дворецкому…」"
      lines:
        - "Подумав, %YOU% звонит господину дворецкому"
        - "Всё-таки этот подарок для Палмер чуть тяжеловат"
        - acc: 1
          content: "「Отдать господину дворецкому…」"
        - "Отдав ключ приехавшему дворецкому, зажатые плечи %YOU% разом отпускает"

rain_notify:
  - color: %COLOR%
    content: "【В дождливый день, когда идёшь один(одна), может случиться неожиданная встреча】"

################################
# 触发事件
################################

# 出道赛后，任意G1比赛出走后，单独出行商店街出现
# 提醒：单独出行时的某个雨天，说不定会有意想不到的相遇
rain:
  title: "Даже под проливным дождём"
  lines:
    - "Как-то %YOU% в пути сбивает внезапный ливень"
    - "Раз уж дождь запер в торговом центре, бродишь тут же"
    - "И когда дождь стихает—"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Фух, фух, фух…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Арэ, это же тренер!」"
    - "Вдруг Палмер в скаковом костюме вся мокрая прибегает"
    - acc: 1
      content: "「Палмер, ты это…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А~ про одежду спрашиваешь?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ничего-ничего, пробегусь — высохнет!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…А, так не объяснишь, э—」"
    - "На лице Палмер кривая улыбка, медленно рассказывает, с чего всё"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「— так всю семью Мэдзиро позвали на банкет~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И эти говорят, машина обратно тоже готова—」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я уже не стерпела, извинилась перед всеми и сбежала!」"
    - "Мысль сбежать слишком в стиле %SEX%, сам(а) невольно смеёшься"
    - "Но скаковой костюм всё равно не даёт покоя: весь насквозь мокрый"
    - "Подкладка липнет к Палмер, через мокрое намертво тянет взгляд %YOU%"
    - "Только бельё чуть закрыто тканью, которую поднимает грудь, — тогда взгляд забираешь назад"
    - acc: 1
      content: "「…Скаковому костюму так нормально?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А~ так и подумается」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но нормально, я так и заказывала」"
    - acc: 1
      content: "「Так заказывала?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как сказать」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Этот крой почти как повседневка, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Без понтов: и бежать удобно, и сбегать удобно」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И главное — если хочешь бежать одна, сразу можно рвать!!」"
    - "Услышав это, %YOU% снимает взгляд с Палмер и чуть тупит"
    - "Это её «одна» чуть странно садится %YOU% внутри"
    - "Обычная Палмер всегда с кем-то, так должно быть"
    - acc: 1
      content: "「Одна?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мне конечно кайф со всеми, но—」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「На скачках впереди может бежать только одна, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Может, поэтому иногда хочется ничего не думать и просто бежать」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「К горизонту, одна, свободно, только бежать и бежать!」"
    - "Взгляд Палмер вдаль: там точно нет несвободы и оков"
    - "Только в глазах Палмер отражаются новые капли"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ува, опять…」"
    - acc: 1
      content: "「Быстрее назад!」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тоже, если бежать — почти не промокнешь!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тогда быстрее—」"
        - acc: 1
          content: "「Стой」"
        - "Палмер стопорит шаг и недоумённо оборачивается"
        - "%YOU% раскрывает только что купленный зонт над головой %SEX%"
        - "Зонт один, может, тесно"
        - acc: 1
          content: "「Не хочу, чтобы ты простудилась」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「О-о, тренер надёжный!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Класс, в следующий раз я тоже так кому-то сделаю」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Как тренер, вжик — зонт!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но~ не знаю, получится ли у меня так же хорошо, хаха」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер всё-таки взрослый и надёжный…」"
    - acc: 2
      content: "「Может, куда спрятаться от дождя и заодно попить?」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Идея! Я за!」"
        - "Уходите из ливня и находите кафе"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Держи, горячий кофе, да?」"
        - "Палмер ставит чашку перед %YOU% и сама тихо садится напротив"
        - acc: 1
          content: "「Спасибо」"
        - "Хоть кафе, вид Палмер совсем естественный"
        - "Скаковой костюм ничуть не выбивается, целиком в атмосфере заведения"
        - "Будто ловит взгляд %YOU%, Палмер ставит чашку и чуть недоумённо смотрит"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М-м, что?」"
        - acc: 1
          content: "「Этот скаковой костюм всё-таки огонь」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, чего, так серьёзно?!」"
        - acc: 1
          content: "「Нет, просто вдруг так подумал(а)」"
        - "В глазах Палмер чуть удивление, быстро прячет и спешно уводит взгляд"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ну ты…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Пока ты такое говоришь, кофе стынет~ ладно, пей скорее」"

important_place_notify:
  - color: %COLOR%
    content: "【%CHARA% здесь уже бежала фри-рейс… снова привести %SEX% посмотреть?】"

#（要来自由赛吗？）触发后，经典年商店街出现
important_place:
  title: "Потому что место важное"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йохоу~ сегодня все тоже в запале!」"
    - "%UMA% с фри-рейса「О, это ж Палмер?」"
    - "%UMA% с фри-рейса「Эй, слушай~」"
    - "%YOU% с Палмер на прогулке чуть свободен(на) по дороге и заодно заходите на трассу фри-рейса"
    - "Подбегает %UMA%, вроде подруга Палмер, и %YOU% сам(а) выходит из середины их разговора"
    - "Когда Палмер договорила, вместе с %YOU% уже собирались уходить"
    - "%UMA% Трейсена A「Ува, реально по дороге трасса」"
    - "%UMA% Трейсена A「Чуть бугристо, да? Тут вообще бегают?」"
    - "%UMA% Трейсена B「Не, я так не смогу, ноги побьёшь~」"
    - "%UMA% с фри-рейса「…Вы вообще зачем пришли?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…А~ сорян, тренер! Можно я вернусь на минутку?」"
    - acc: 1
      content: "「Ага, конечно」"
    - "Получив добро, Палмер рысцой к тем %UMA% и сама влезает в разговор"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хай~ вы студентки Трейсена, да? Первый раз?」"
    - "%UMA% Трейсена A「…Ты чего вдруг подбежала?」"
    - "%UMA% Трейсена A「Ты ж из семьи Мэдзиро? С такими мелочами вместе ослабеешь」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мелочи… потому что %THEY% бегут фри-рейс, сразу считать %THEY% слабыми — это не так」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「На деле я как раз здесь бегала — и стала сильнее」"
    - "%UMA% Трейсена A「Не-не-не, нормально же в школе тренироваться лучше!」"
    - "%UMA% Трейсена B「И с любителями сравнивать — это даже не тренировка!」"
    - "%UMA% с фри-рейса「Эй, вы—!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「—Ладно, раз уже так сказали — давайте скачки!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Так и разберём, кто кого, да?」"
    - "Палмер в щель вставляет скачки, и обе стороны стопорят спор"
    - "Две скаковые %UMA% уже сказали своё, дуются и принимают вызов"
    - "Само собой, судить падает на %YOU%"
    - acc: 1
      content: "「Тогда… старт!」"
    - "Со старта Палмер без колебаний ведёт всю дорогу впереди"
    - "Но те двое — всё же студентки академии Трейсен: ритма не боятся и липнут"
    - "Атмосфера скачек всё жёстче, а Палмер на полной в голове—"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ха-а-а-а-а-а—!」"
    - "%UMA% с фри-рейса「—Да! Палмер, ты супер!!」"
    - "%UMA% Трейсена A「Фух, фух, что это за посадка беглянки, слишком жёстко…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хахаха, такую посадку в школе вряд ли кто учит, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но это и есть посадка, которой научило меня это место」"
    - "После победы Палмер ловит долгие хлопки и крики вокруг"
    - "А две %UMA% из Трейсена, глядя на это, смущённо уходят"
    - "Едва выбравшись из шумных криков, идёте вдвоём по вечерней набережной"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ой, прости-прости!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Кажется, втянула тебя в разборки」"
    - acc: 1
      key: select
      content: "「Лидирование тоже разное」(скорость+10)"
      lines:
        - "Вид, как она на полной рвётся защитить друзей, очень крут, так %YOU% и говорит %SEX%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, про только что?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Не-не-не, я не такая крутая」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Просто жалко: есть место, где можно свободно бежать, а его тратят на ссору」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Да и подумай, я просто бежала впереди!」"
        - "Лицо Палмер в смущённой улыбке, но гордости больше, чем обычно"
    - acc: 2
      content: "「Ты настоящий друг」(интеллект+10)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ахаха, как-то стыдно」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но да. Из-за %THEY% есть нынешняя я」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Где расти, где брать урожай—」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я не хочу, чтобы это кто-то отрицал!」"
        - "После этого Палмер долго рассказывает %YOU% истории про друзей %SEX%"

golf_notify:
  - color: %COLOR%
    content: "【В последнее время %CHARA% после тренировок всегда спешит на торговую улицу】"

#爱慕＞49，资深年圣诞节 商店街 触发
golf:
  title: "Hole-in-one в обход"
  lines:
    - "Обычный полдень: только кончилась тренировка, Палмер сама находит %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сегодня тоже спасибо!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда у меня ещё дела, я побежала, тренер!」"
    - acc: 1
      content: "「Можно, но не надо так спешить, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м, есть кое-что」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Эти дни, наверное, так и будет, прости!」"
    - "С этих её слов несколько дней %SEX% рано уходит с Тренировочного поля"
    - "Пока однажды %YOU% выходит в город: привычные улицы в рождественских гирляндах, всюду шумно"
    - "Бродя, %YOU% останавливается у спортмагазина и смотрит витрину"
    - acc: 1
      content: "「Перчатки для гольфа…」"
    - "Глядя на перчатки в витрине, мысль сама уходит к недавнему разговору"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, ты зимой в гольф не играл(а)?」"
    - acc: 1
      content: "「Холодно」"
    - acc: 2
      content: "「Руки деревенеют」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Жалко! Зимой народу мало, можно не спеша, супер легко!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Может, в следующий раз вместе?」"
    - "Когда болтали в тренировочной, такое точно было"
    - "Как раз к Рождеству: можно как подарок и заодно спасибо за приглашение Палмер"
    - "Хотя неизвестно, когда %SEX% это получит…"
    - acc: 1
      content: "「Короче, сначала купить」"
      lines:
        - "С подарком наготове %YOU% уходит с торговой улицы"
        - divider: true
          content: "На следующий день, Тренировочное поле"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Фух~ пробежалась в кайф!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Спасибо за разбор, тренер!」"
        - acc: 1
          content: "「На сегодня всё, пока, осторожно」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А, подожди, тренер!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, потом есть время?」"
        - "Внезапная фраза Палмер сбивает шаг %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я сейчас на подработке в парке, там акции забавные」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Огни красивые, и лавки внутри очень мило украшены!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Как думаешь?」"
        - acc: 1
          content: "「Если не против — конечно да」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ага-ага! Конечно не против!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Дорогу на мне!」"
        - "Палмер возбуждённо переодевается в зимнее и только тогда ведёт %YOU% в парк"
        - divider: true
          content: "Парк аттракционов"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Как тебе этот глинтвейн?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Безалкогольный, так что и взрослым, и детям нравится」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Хотя некоторые корицу в середине не любят」"
        - acc: 1
          content: "「Вкусно, всё тело согрелось!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Мне тоже нравится, хехе… похоже, мы совпадаем~」"
        - "Сказав это, Палмер тут же уносится видами вокруг и тащит %YOU% гулять по улицам"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер! Давай в этой позе снимемся!」"
        - acc: 1
          content: "「Т-так? Не ошибся(ась)?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Точно! Давай, смотри в тот телефон~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「3, 2, 1… есть!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Хм-хм~ гляну кадр… а!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Время смены! Тренер, я тебя досюда, не забудь зайти туда, где я работаю!」"
        - "Палмер убирает телефон и бежит в ресторан в углу"
        - "Под рождественские песни официанты лёгким шагом разносят блюда"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Не заждался~ это твоя ножка индейки и зимний напиток」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я сказала шефу, что ты мой тренер, %SEX% чуть добавил(а)… никому, ладно?」"
        - acc: 1
          content: "「Не скажу. И шефу спасибо передай」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Хаха, передам %SEX%~ тогда приятного」"
        - "Как раз %YOU% доел(а) и собирается чуть отдохнуть"
        - "Палмер, кажется, следила за %YOU% и ловит момент"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Тренер, у меня сейчас перерыв, отойдём на слово?」"
        - acc: 1
          content: "「?」"
        - "Выйдя за Палмер, %SEX% достаёт из-за пазухи маленькую коробку и кладёт в руки %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это тебе от оленя Палмер~ открывай」"
        - "Приняв и открыв, %YOU% видит перчатки известного гольф-бренда"
        - acc: 1
          content: "「Это…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Помнишь, я говорила вместе в гольф?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это зимние перчатки, чтоб руки не деревенели」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…С Рождеством」"
        - "Под подарком Палмер всё сходится"
        - "Почему после тренировок спешила и всё была занята—"
        - acc: 1
          content: "「«Кое-что» — это подработка」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Эй-эй, слишком прямо — уже неинтересно」"
        - "Глядя на гордую Палмер, %YOU% замолкает и шарит в своей сумке"
        - "Подарок, который не знал(а), когда отдать, спал тут"
        - acc: 1
          content: "「На самом деле я тоже вот…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Пакет? Э, это же…」"
        - "Палмер берёт пакет, протянутый %SEX%, и смотрит на перчатки внутри"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Да это перчатки…!」"
        - acc: 1
          content: "「Потому что ты хотела в гольф」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「То есть?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Хаха, мысли сошлись」"
        - acc: 1
          content: "「Друг другу сюрприз」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Точно! Раз оба наготовили перчатки — уже нельзя не идти~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Этот олень тебя и довезёт~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Санту, что принёс такой красивый подарок, — до места~」"
        - acc: 1
          content: "「Тогда на тебе」"
        - divider: true
        - random: true
          lines:
            - divider: true
              content: "На днях"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ого, погода супер!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Начинаем, тренер!」"
            - "Хоть холодно, руки Палмер и %YOU% не деревенеют"
            - "В этот день вы вдвоём в кайф гоняете гольф"
        - random: true
          lines:
            - "Продавец A「Как хорошо, Палмер-тян!」"
            - "Продавец A「Столько пахала — стоило~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ва! Стой, ты чего следом!?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Такое уже не надо рассказывать!」"
            - "Чтобы отдать этот подарок, Палмер по-своему, видно, немало пахала"
            - "Так думая, %YOU% решает эти перчатки беречь"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ладно! Решено! А, точно」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Давай в перчатках снимемся на память」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ты тоже надень, и ту позу как тогда… идеально!」"
            - "Скоро приходит фото от Палмер"
            - "На нём по руке %YOU% и Палмер; каждый раз, глядя, внутри тепло"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Эхехе, тогда договорились」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Точно, не тянуть — сейчас надену!」"
            - acc: 1
              content: "「Тогда и я」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「О, размер в самый раз!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「…Может, мы правда на одной волне?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Круче Санты и оленя!」"
        - random: true
          lines:
            - "Продавец A「Спасибо за работу, Палмер-тян!」"
            - "Продавец A「А, вышло? Поздравляю!」"
            - "Продавец B「Ты же ради этого и подрабатывала!」"
            - "Продавец B「Ой, правда стоило пахать~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ахаха… только никому」"
            - acc: 1
              content: "「Правда, огромное спасибо」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「…Э, м-м… не за что」"
    - acc: 2
      content: "「Потом…」"

lottery_notify:
  - color: %COLOR%
    content: "【Пойти с %CHARA% на лотерею!】"

# 爱慕＞49，资深年1月期间 商店街抽奖触发
lottery:
  title: "Лотерея!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Кстати, когда гуляли, дали купон, попробовать?」"
    - "Глядя на горящую Палмер, %YOU% тоже надевает весёлое лицо и находит лоток с розыгрышем"
    - if: d.dice === 1
      lines:
        - "2-й приз: всего одна морковь…"
        - "Хозяин лотка「Поздравляю! Приз — одна морковь!」"
        - "Глядя на морковь в руке, можно только чуть вздохнуть"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Одна морковь тоже ничего, запечь дома — тоже ок」"
        - "Палмер держит морковь и всё равно рада"
        # 体力+200
    - if: d.dice === 2
      lines:
        - "1-й приз: корзина моркови"
        - "Хозяин лотка「Поздравляю! Приз — корзина моркови!」"
        - "Корзина здоровенная, блюд навалом"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「О-о, сколько моркови! Всем хватит!」"
        - "Палмер одним махом обнимает всю корзину и свободно улыбается тебе"
        # 属性+5
    - if: d.dice === 3
      lines:
        - "Особый приз: котлета с морковью!"
        - "Хозяин лотка「Поздравляю! Особый приз — котлета с морковью!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Котлета с морковью! Это же первый приз! Супер!」"
        - "Глядя на котлету, глаза Палмер будто сверкают"
        - "Сначала взгляд полный сюрприза, быстро садится и поворачивается к %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, съесть вместе?」"
        - "Палмер опускает голову, чешет лицо и сквозь чёлку подглядывает"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ну, это же ты вытянул(а), так что…」"
        # 全属性+10
        - acc: 1
          content: "「Давай, домой вместе!」(расположение+20)"
          lines:
            - "Кажется, угадала ответ: Палмер с улыбкой хватает руку %YOU% и бежит к дому %YOU%"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Быстрее-быстрее, я тоже голодная, скорее домой!」"
            - "В голосе Палмер каприз, но сейчас очень мило"
            - "Милое, конечно, и то, как на рысце грудь прыгает…"
        - acc: 2
          content: "「Ешь ты, Палмер, это твой купон」(влюблённость+4)"
          lines:
            - "Услышав ответ, лицо Палмер чуть дёргается: такого, видно, не ждала"
            - "Возбуждённо прыгавшие уши опадают, и лицо темнеет."
            - "Глядя на такую поникшую Палмер, то, что хотел(а) сказать, забираешь назад"
            - acc: 1
              content: "「Кстати, есть чуть захотелось…」"
            - "Только что опавшие уши вдруг снова встают, будто ждёт следующую фразу"
            - "Видя милую Палмер, %YOU% чешет затылок и делает вид, что правда голоден(на)"
            - "Только притворяешься — Палмер щиплет край одежды"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「У меня тут вкусная котлета, вместе?」"
    - if: d.dice === 4
      lines:
        - "Особый: путёвка в онсэн"
        - "Хозяин лотка「Ото! Это же!」"
        - "Хозяин лотка「Путёвка в онсэн! Поздравляю!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Пу, путёвка в онсэн! Тренер, смотри!」"
        - "Палмер возбуждённо смотрит на путёвку в руке и оборачивается к %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Правда вытянули… чуть нереально…」"
        - "На приз вы оба стоите возбуждённые, пока окружающие не напомнят"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Что делать, путёвка на двоих… а, тренер, пойдёшь со мной?」"
        - "Голос Палмер чуть эфемерный, будто не всерьёз"
        - "Но стоит взглянуть — и %SEX% выдаёт себя: в голубых глазах чуть ожидания"
        - "Чуть хочется подразнить такую Палмер: правда милая"

hot_spring_notify:
  - color: %COLOR%
    content: "【Пойти с %CHARA% в онсэн!】"

# 抽奖当年12月
# 有券 or 90 爱慕
hot_spring:
  title: "Поездка в онсэн"
  lines:
    - "Как-то после победы вместе с Палмер—"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Уже~ пора, да?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(А, но если %YOURSEX% скажет, настроения нет…)"
    # CFLAGNAME:52 = 育成用变量
    - if: era.get('cflag:64:52')?.hot_spring !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Редко же приготовила путёвку на двоих…)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Ладно… главное запал! Одним махом позвать %YOURSEX%!)"
    - "С запалом неизвестно откуда Палмер одним махом толкает дверь кабинета"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер! Время онсэна~ FuFu~!」"
    - acc: 1
      content: "「С чего вдруг… что случилось?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ничего, мы же вытянули путёвку?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Смотри… сейчас как раз её использовать!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Себя наградить важно~ сесть на местную электричку и в онсэн-зону~ FuFu~」"
    - "Палмер сжимает кулаки перед собой и рубит как топором"
    - acc: 1
      key: select
      content: "「Ага. Тогда пошли」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Правда? OK?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Аха~ хорошо…)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Хорошо, что не послал(а) одну)"
        - "Палмер выдыхает и довольно щиплет плечо %YOU%"
        - "Под чуть недоумённым взглядом %YOU% Палмер находит маршрут к онсэн-гостинице"
        - divider: true
          content: "Онсэн-гостиница"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ой~ онсэн всё-таки самое то!」"
        - "Уже после купели Палмер расслабленно сидит в комнате, верх легко качается влево-вправо"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「На скачках я часто врезаюсь, онсэн лечит отлично」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Хорошо, что пахала до сегодня~」"
        - "Так говоря, Палмер снова лениво потягивается и длинно выдыхает"
        - acc: 1
          content: "「Правда, ты пахала」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М-м, и ты, тренер」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ты всё время рядом меня тренируешь, тоже устал(а), да?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сегодня мы двое остальное забьём и лениво отдохнём~」"
        - "Гяру-Палмер с Хелиос %THEY% классная, но и обычная %SEX% — отличный собеседник"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А точно, мокрые после онсэна полотенца я повесила, высохнут — бери」"
        - acc: 1
          content: "「Ага, спасибо」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「О, точно! Чаю, тренер?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Заварю и чуть остужу」"
        - acc: 1
          content: "「М-м, прошу」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ага, на мне」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - acc: 1
          content: 「……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это ощущение разговора…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Как дома…!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Онсэн-поездка, а как дома!?」"
        - "Как дома: без понтов, расслабиться — очень уютно…"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А-а~ тьфу~ если так затихнуть, совсем всосёт в эту атмосферу」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это уже совсем не поездка!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М-м, отпускного мало!」"
        - "Палмер резко выпрямляется и вдруг серьёзнеет"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Надо ещё, ещё заводиться~」"
        - "В глазах %YOU% Палмер просто достала совсем ненужный запал"
        - "После этого момента атмосфера сразу становится странной"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер, ужин…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А, нет, ва-ужин на подходе!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「О-о, смотри-смотри, сашими! Такое сашимишное~」"
        - acc: 1
          content: "「Ну это и есть сашими」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「И~ набэ супер~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Коллаб: рис и удон вместе кинуть~」"
        - acc: 1
          content: "「А, ладно, на догонку…」"
        - "Ва-гостиницу Палмер своими силами делает пати-залом, и потом—"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А, тренер! Там массажное кресло!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Выглядит супер-хай~!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Попробовать силу на взрывную и сесть~」"
        - acc: 1
          content: "「Сначала ты?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ок~ тогда я сяду!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「На такое у кого душа пати — первым наслаждаться!」"
        - "Палмер лёгким шагом к креслу и ловко устраивается"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Одного раза мало, кидай всю мелочь, что я разменяла!」"
        - "Горсть монет падает в панель, слышен ход механизма"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Дальше… взрывной массаж!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Старт!!」"
        - "По голосу Палмер кресло орёт на полную"
        - "Под дикой вибрацией лицо Палмер сразу кривится"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Больно, тренер, это жесть!!」"
        - "Кресло продолжает, Палмер тоже издаёт странные звуки"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А! Сдохну! Сдохну!!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Бежать… взрывной побег а-а!!」"
        - "Голос Палмер с напором, но удача чуть мимо"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ва-а-а, бант на одежде! Намотало на кресло!! Крышка!!」"
        - "Короткая тишина — и снова дым коромыслом"
        - "Так ночь понемногу густеет"
        - "Едва вырвавшись из лап кресла, Палмер мягко повисает на %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Блин, чуть перебрали, хаха…」"
        - "Улыбка Палмер чуть натянутая, даже лёжа в комнате сил нет"
    - if: era.get('cflag:65:66') === 1 && era.get('relation:65:0') >= 0
      acc: 2
      content: "「Хелиос тоже позвать?」"
      lines:
        - "Втроём садитесь на поезд к онсэн-гостинице"
        - "Только после тепла купели выходишь один(одна)"
        - "Не купель плохая — соседний шум слишком орёт"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「Щекотать буду~!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Не надо, Хелиос! Утону!」"
        - "На соседний ор %YOU% остаётся только делать вид, что не слышит"
        - "По привычке сначала молоко: %THEY% тоже скоро выйдут"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М? Тренер тоже вышел(ла)?」"
        - "Как раз %YOU% берёт молоко — сзади голос Палмер"
        - acc: 1
          content: "「Я давно, только что…」"
        - "Долго терпевший(ая) %YOU% смотрит на Палмер и забирает уже готовые слова"
        - "Обычный чуть крутой хвост сейчас в каплях по плечу ломает развязный образ и бьёт %YOU% куда-то внутрь"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер? Онсэном ударило?」"
        - "Палмер не знает, о чём %YOU% думает, просто как всегда подходит и спокойно касается лба %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М? Не горячо… э? Почему всё горячее?」"
        - "Поймав странный жар на руке, Палмер тупо смотрит на свою ладонь и чувствует, как она греется"
        - "Чуть тупящий %YOU% стоит на месте, лицо набирает жар"
        - acc: 1
          content: "「Одевайся скорее, не простудись, быстрее-быстрее」"
        - "Панически отталкиваешь Палмер, хочешь обернуться отдышаться — она ловит руку"
        - "Всё ещё думая, что тебе плохо, Палмер жёстко сжимает пальцы"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Нельзя, тебе сейчас плохо, да?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Раньше ты меня выручал(а), теперь я тебя!」"
        - "Хватает руку %YOU% и дёргает назад — видит сплошь красное лицо"
        - "В тихой комнате только вы двое, от этого ещё неловче"
        - "Палмер этого не ловит и всё тянет %YOU% сесть на скамью рядом"
        - "Видя, как дело едет в странное, мысль %YOU% несётся"
        - acc: 1
          content: "「Кстати, Хелиос? Что-то %SEX% не видно」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Хелиос ещё внутри, сказала ещё поплавать…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Не, тренер, ты опять тему сворачиваешь」"
        - "Свернуть не вышло: Палмер спокойно липнет к телу %YOU% и лбом меряет температуру"
        - "Только %SEX% так наклоняется — и как раз видит, что стоит"
        - "Между вами сейчас кроме сердца нет звуков"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ва, ва-ва…」"
        - acc: 1
          content: "「Э… не то, что ты думаешь…」"
        - "Краснота перекидывается на лицо Палмер, панически чуть отступает"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Тренер это… ко мне… нет-нет, просто физиология, точно не нарочно, тренер честный, точно так)"
        - "Давит странное чувство внутри и смотрит в сторону"
        - "%YOU% сидит там, взгляд тоже на Палмер"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э, всё нормально?」"
        - "Покрутив в голове, Палмер делает вид, что ничего"
        - "Тихая и чуть жуткая атмосфера держится между вами"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Что ты думаешь, Палмер, сейчас как раз бить, смелости!)"
        - "Неизвестно сколько думает, потом легонько хлопает себя по щекам и снова смотрит на %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э! Тренер это… из-за меня так?」"
        - "На вопрос ответ — молчание %YOU%, просто смотрит"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Молчание — да, Сити так говорила)"
        - "Решившись, Палмер подходит к %YOU%, пальцами всё ещё тревожно убирает упавшие волосы"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тогда тренер… что у тебя внутри?」"
        - acc: 1
          content: "「Ну конечно… нравишься」"
        - "Услышав ответ, Палмер чуть радостно поднимает голову к %YOU%"
        - "Лица так близко: ещё чуть вперёд — и губы друг у друга"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「Way! Онсэн супер кайф!」"
        - "Хелиос в дверях смотрит, как вы двое без конца кашляете"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「Э!? Простыли?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Нет, просто э… кофе-молоко! Подавились!」"
        - "Отмазавшись, Палмер смотрит, как Дайтаку Хелиос идёт за своим напитком, и едва выдыхает"
        - "Делает вид, что ничего, чуть неловко проверяет, что Хелиос не слышит, и липнет к уху %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Говорят, тут есть смешанный онсэн」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Так что потом… позже вместе」"
      # 爱慕+6

################################
# 随机事件
################################

lunch_break:
  title: "Прозевать обед"
  lines:
    - "Только войдя в столовую, %YOU% первым делом видит почему-то суетящуюся Палмер"
    - "С чуть любопытством спокойно садишься и крадёшь взгляд"
    - "Скаковая %UMA% A「Палмер~ слушай~ моя мама она~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что-что? Как? Всё мне!～」"
    - divider: true
      content: "Спустя время"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ладно, больше ни у кого нет проблем? Тогда дальше мой давно жданный обед~」"
    - "Палмер весело срывается за своим обедом"
    - "Как раз тогда звенит звонок на урок"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Стой, обед слишком короткий!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мой обед—!」"
      # 干劲down，体力-50

#经典年后外出时随机出现
dis_talent:
  title: "Гений дистанции"
  lines:
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「…Сюда, да?」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「Не, как раз нет」"
    - "Палмер и %YOU% по дороге с улицы заходите в торговый и как раз ловите эту редкую пару в затыке"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хай~ что делаете?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Зона подарков… значит, кому-то подарок?」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「Ва! Т-ты чего вдруг полезла」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Потому что вы такие застрявшие~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не смотри, что я такая: в нынешних трендах я шарю, может, помогу!」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「…Тогда прошу. Я уже думал до упаду」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Понятно: Акэбоно-сан обновила личный рекорд, так что хотите подарок %SEX%」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И двое с одной мыслью как раз тут столкнулись!」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「…Если подарки совпадут — плохо, так что решили купить вместе」"
    - acc: 1
      content: "「А из-за разных мнений выбрать не можем」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м, тогда сначала посмотрим, что каждый считает классным подарком?」"
    - "Палмер горячо хлопает обоих по плечам и идёт по торговому"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「…%SEX% любит бананы, дарить — бананы」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А~ то, что любит, лучше дарить!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「По-моему, нормально. Что не так?」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「…Сейчас вроде не время」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м~ сейчас не время… из-за веса?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Форма такая, что личный рекорд обновила: если из-за сладостей вес и форма съедут — плохо!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вот она, нежность Тайсин~」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「Н-не то!」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「Я просто не хочу, чтобы труд Акэбоно зря!」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「Так ясно!?」"
    - "Разобрав Нарита Брайан, все идут в магазин, где подарок Нарита Тайсин"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「По-моему, та чёрная одежда ничего…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м! Взрослая, Акэбоно пойдёт, да?」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「…Это же поздравление」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А~ раз поздравление, одежду поярче лучше?」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「…Но」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но~ отторжения к другому варианту нет, так что и жёстко отвергнуть нельзя」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「Думала, вкусы разные… вот оно」"
    - "Палмер как переводчица тянет обоих влево-вправо и шлифует мнения"
    - "Продавец「Спасибо за покупку!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ой, что выбрали — хорошо, Акэбоно точно будет рада!」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「М-м… хоть это Акэбоно поможет…」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「…Но всё равно слишком обычное」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но нормально, да? Вы же всерьёз думали~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX% всегда говорит, что такие средства для укладки работают и скачкам не мешают!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И… забота дойдёт до другого через подарок!」"
    - "Глядя, как Нарита Брайан и Нарита Тайсин уходят, Палмер только тогда с %YOU% идёт обратно"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ой~ дело гладко село! Хорошо-хорошо」"
    - acc: 1
      content: "「Ты идеально сыграла посредника」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ахаха, я ничего особо не сделала」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「У %THEY% с самого начала сердце за Акэбоно было одно」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я только ясно сказала, что %THEY% думают!」"
    - acc: 1
      key: select
      content: "「Это не так просто сделать」(расположение+10)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э~ ты так хвалишь, %SELF_CALL% уже краснеет」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но ты, тренер, тоже крутой!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Чтобы я не плыла, ты всегда меня ведёшь!」"
        - acc: 1
          content: "「Тогда мы квиты」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Точно~」"
        - "Так в весёлой болтовне %YOU% и Палмер идёте домой"
    - acc: 2
      content: "「Ты меня кое-чему научил(а)」(влюблённость+2)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ахаха, даже возбуждает: обычно это ты, тренер, меня учишь」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но… раз ты так сказал(а)… с этих пор звать меня учительница Палмер?」"
        - acc: 1
          content: "「Хорошо, учительница Палмер~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сорян, всё-таки не надо!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Мне это звание не по силам, слишком стыдно」"
        - acc: 1
          content: "「Ничего такого, учительница Палмер」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Хватит уже~」"
        - "Палмер дует щёки и хочет сбить шутку %YOU%"
        - "В вашей возне идёте домой"

#进入资深年后外出时随机出现
choice:
  title: "Ультимативный выбор!"
  lines:
    - "В самый обычный выходной Палмер и %YOU% вместе за покупками—"
    - "Телефон Палмер вдруг орёт, будто сообщение"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, Добер написала, что-то случилось?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Хм-хм, гляну…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сегодня на ТВ программу снимать, но я так нервничаю, что нормально говорить не смогу」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「О, Добер сегодня на съёмку!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Надо было раньше просить, %SEX% слишком пашет~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сорян, тренер! Мне надо туда!」"
    - "Может, время совпало, может, там правда горит"
    - "Палмер только убрала телефон — и снова пиликает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, опять, Добер %SEX% так спешит…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м? Не. Сейчас Брайт?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…В электричке уснула, проснулась — чужая станция」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Именно сейчас!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А~ что делать? Брайта бросить — тревожно…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но и Добер бросить нельзя…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ува, как быть…」"
    - "Обычная Палмер, что в людях всегда на коне, наоборот плывёт и тревожно ходит туда-сюда"
    - "Может, сейчас лучше, чтобы решал(а) %YOU%, а не %SEX%"
    # 任意选择速度+15
    # 在队内时速度+25，好感+25
    - acc: 1
      key: select
      content: "「Пойдём к Добер」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Добер… но Брайт…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Точно! Ардан сегодня должна быть свободна!」"
        - "Лицо Палмер вдруг светлеет, открывает телефон и звонит Мэдзиро Ардан"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「—А, алё? Ардан?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Про Брайта хочу попросить помочь!」"
        - "Ардан на той стороне соглашается, и Палмер с %YOU% спринтом на ТВ, где Мэдзиро Добер"
        - if: era.get('cflag:59:66') !== 1
          lines:
            - "Однако—"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Красный! Аха…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「На таком красном человек спешит~」"
            - "Еле пережили один красный — следующий снова стопорит"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ой, опять красный? Сегодня удача дно…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Э, там тоже красный!?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「А… так можем не успеть?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ничего не попишешь, сорян, тренер! Я на дорожку для %UMA%!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Спасибо, что был(а) со мной!」"
            - "Палмер без колебаний встаёт на дорожку для %UMA%, смущённо машет %YOU% и бежит к ТВ"
        - if: era.get('cflag:59:66') === 1
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Фух, похоже, к съёмке успела」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Гляну, где Добер~」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「Палмер! Сорян, что примчалась… но спасибо」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「Думала, одна справлюсь, но когда уже снимать, я…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ахаха, понимаю-понимаю!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Я тоже легко нервничаю~」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「Э, Палмер тоже?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Конечно!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Боишься, нормально ли говоришь, не сказала ли чего странного」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Но в конце само как-то ложится~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Репортёр в этом профи, да и не прямой эфир~」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「Вот как… м-м, да, если успокоиться…」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「Спасибо… чувствую, смогу…!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Вот как! …М-м, хорошо~」"
    - acc: 2
      content: "「Пойдём за Брайтом」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Брайт… но Добер там…」"
        - acc: 1
          content: "「Можно Райан попросить」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А, точно! Ахаха, я забыла!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Для Добер Райан тоже своя, может, хорошая идея」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ага, телефон Райан…」"
        - "Закрыв сторону Мэдзиро Добер, Палмер с %YOU% спринтом на станцию, где Мэдзиро Брайт!"
        - if: era.get('cflag:74:66') !== 1
          lines:
            - "Однако—"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Помню, пересадка через две, чуть отдохнём」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Э? Там народа куча, что случилось」"
            - "Объявление на станции「—Пассажирам: из-за происшествия в вагоне прибытие задерживается」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「…О, похоже, ждать долго」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Как быть, такси тоже можно…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Но на такое расстояние остаток можно бежать」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「М-м, тогда я пошла!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Тренер, спасибо, что был(а) со мной досюда!」"
        - if: era.get('cflag:74:66') === 1
          lines:
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - "「Палмер~ ты пришла~!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Хорошо, что с тобой всё в порядке~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Брайт ты как всегда такая ленивая»"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Но слава богу, не дальше, чем тогда!」"
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - "「Тогда?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Раньше ты же доезжала до Аомори」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ты звонила Ардан… потом все несколько часов бежали тебя встречать」"
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - "「Ара… хохо, было такое~」"
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - "「Но дальше так далеко не поеду, я же уже выросла~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Да… от этого мне даже чуть одиноко」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Потому что тогда будто все вместе в поездку, было весело!」"

# 爱慕低于74，太阳神爱慕低于49，随机触发
confused:
  title: "Плывущее любовное сердце"
  lines:
    - "У дамбы у Трейсена по утрам всегда разные %UMA% на пробежке"
    - "Палмер одна сидит у реки, смотрит и тихо вздыхает"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А…」"
    - "В глазах отражаются полные сил %UMA% на бегу, и сидящая здесь в затыке она сама не в ряд"
    - "Когда затык Палмер уже душит внутри, встаёт солнце, что может зажечь настроение"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Доброе утро! %65_CALL%!」"
    - "Дайтаку Хелиос внезапно обнимает сзади и голосом без тени пасмурности подсвечивает настроение Палмер"
    - "С утра обнимает изо всех сил долго, потом отпускает чуть задыхающуюся Палмер и садится рядом"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Что такое? С самого утра такое лицо～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Доброе утро…… а, лицо странное?」"
    - "Палмер с пунцовым лицом улыбается лучшей подруге рядом"
    - "Только улыбка не держится: быстро снова всплывает странное выражение, смотрит вниз на свои руки"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Плохо, лицо %65_CALL% — супер плохо—」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Ладно-ладно, что случилось?」"
    - "Сидящая рядом Дайтаку Хелиос бестолково машет руками и наконец искренне хватает Палмер за руку"
    - "Синие и чёрные волосы колышутся в поле зрения и цепляют упавшее настроение Палмер"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「На самом деле…… на самом деле ничего……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Нет, всё-таки большое」"
    - "Палмер, что чуть сжалась, чуть приваливается к Дайтаку Хелиос рядом и медленно открывает рот"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я… люблю своего тренера. И это такое……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Такое, от которого уже не вернуться」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Арэ?」"
    - "Услышав беду Палмер, Дайтаку Хелиос наоборот неловко застывает"
    - "Глядя на дрожащую подругу рядом, панически мечется мыслями"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Это… %65_CALL% тоже не надо так, а……」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「На самом деле %65_CALL% просто…… это……」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Просто сказать %CALLNAME_65% — и всё!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Правда?」"
    - "Когда Дайтаку Хелиос бросает думать и отвечает с ходу, погасшее лицо Палмер снова загорается"
    - "В тусклом взгляде яркая вспышка: смотрит на подругу, будто хочет сказать — и не говорит"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Д-да! %65_CALL% и крутая, и милая, тренера точно сразу возьмёшь!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Крутая…… милая……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ага, тренер тоже говорил」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что хочет видеть настоящую меня… м?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Свой бег, свой выбор……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(То есть…… такая я?)"
    - "Бессильные руки вдруг наливаются силой, вялость всего тела мигом сходит"
    - "Палмер встаёт, смотрит на сжатые кулаки — и настроение тоже взвинчивается"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что-то кажется, получится……!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Правда!? Тогда можно отрываться……」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「%65_CALL%, лицо! Супер красное!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, есть?」"
    - "Палмер слегка чешет красное лицо, поворачивается к %UMA%, что бегут по дамбе"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Раз тренер хочет видеть — тогда вот так……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(Тренер… полюбит, да?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Это… я побегу немного」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Спасибо, Хелиос!」"
    - "Поблагодарив подругу, что её подтолкнула, Палмер начинает утреннюю тренировку"
    - "Пока с румянцем на лице — стыд, азарт или бег — не врезается в %YOU% на прогулке"

#爱慕＞74，满足睡奸条件
a_step:
  title: "Шаг вперёд"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「В последнее время тренер как-то холоден」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Неужели тренер ко мне уже……!」"
    - "Дрожащими руками берёт телефон, листает до номера %YOU%"
    - "Только перед вызовом снова колеблется"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если сразу звонить — не слишком прямо……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Аа…… что делать!」"
    - "Палмер одна держится за голову и мерит шагами туда-сюда"
    - "Крутится на месте неизвестно сколько — и будто что-то поняв, останавливается"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Есть……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сбежать!」"
    - "После мук приходит вывод, какой бывает у Мэдзиро Палмер"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не то, сбегать сейчас бесполезно……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Что делать-то!」"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「Арэ, Палмер?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э, Ардан? А-а, что-то случилось?」"
    - "Палмер, разглядев кто пришёл, в панике делает вид, что ничего не было"
    - "Жаль, Мэдзиро Ардан уже всё видела"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「Сейчас, по-моему, лучше сказать прямо тому человеку」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э?」"
    - "Притворно-лёгкое движение обрывается: смотрит только на улыбку Мэдзиро Ардан"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Прямо……」"
    - "Хвост уныло качается, руки беспокойно складываются"
    - "Мэдзиро Ардан легко хлопает Палмер по плечу и делает ободряющее лицо"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「Не сделать — точно не выйдет, но」"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「Если ты, Палмер, сделаешь — ответ точно будет」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ответ……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Поняла…… попробую!」"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「М-м～」"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「Кстати, а о чём ты мучилась?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Э? Аааа! Ничего!」"
    - "Палмер со всей пунцовостью на лице сбегает от Мэдзиро Ардан"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「Э?」"

# 粉丝袭击（爱慕＞74）
crazy_fan_end:
  title: "Бессильный побег"
  lines:
    - "Уже неясно, сколько прошло, но ничего не изменилось"
    - "Сколько прошло? Давно не знает"
    - "Что именно произошло? Совершенно неясно"
    - "Единственное, что осталось: в тот день несколько фанатов бежали к %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, проснулся(ась)?」"
    - "Палмер сидит рядом, смотрит на лицо %YOU% — спокойно, мирно"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, нам пора идти」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Когда-нибудь успокоится, вот бы」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но если можно быть вместе — этого хватит」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Эй… когда ещё поговоришь со мной?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Мой тренер」"
    - "Гладит холодную рамку — и всё равно улыбается"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Лишь бы ты был(а)… я что угодно сделаю……」"