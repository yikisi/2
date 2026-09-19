# @file 目白善信 - 日常
# @author KUN
select:
  sync: true
  lines:
    - if: era.get('status:64:10') === 0 && era.get('status:64:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Сегодняшняя %SELF_CALL% тоже полна сил! Тренировку разберём за один заход!」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Это %CALLNAME% дал(а) мне понять, как важно бежать своим бегом, спасибо за всё!」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Что угодно можно сказать %SELF_CALL%! А, просто мне самой хочется с тобой болтать~」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「В последнее время все часто ко мне болтать. Мне без разницы… точнее, очень даже рада!」"
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「В последнее время %CALL_65%%SEX%… эй, %CALLNAME%, ты меня слушаешь?」"
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Всё-таки побег — кайф… сегодня тоже вместе сбежим, %CALLNAME%?」"
        - if: era.get('love:64') >= 50
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「%CALLNAME%, когда ты свободен(на)? Хочу с тобой выйти… ну это…」"
        - if: era.get('love:64') === 100
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「%CALLNAME% всегда будешь со мной… правда?」"
    - if: era.get('status:64:10') > 0 || era.get('status:64:39') > 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Фу… фу…」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Уже не лезет… эхехе…」"

select_escape:
  sync: true
  lines:
    - if: d.half_life === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я здесь странно смотрюсь, %CALLNAME%?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Кроме как к %CALLNAME%… я уже не знаю, куда идти…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Лишь бы быть рядом с %CALLNAME%…」"
    - if: d.half_life === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「О, %CALLNAME%」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Прости, за такое даже если не простят — нормально…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но я всё равно… хочу быть рядом с тобой」"

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Э, вот как? Не зря ты %CALLNAME%」"
      - "%CHARA% радостно пишет ответ и не забывает показать большой палец %YOU% рядом"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「OKOK, поняла!」"
      - "%CHARA% будто что-то щёлкнуло — остальное решает гладко"

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ну! Вот так и валим в побег на полную!」"
      - "%CHARA% сжимает кулак и орёт с напором"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Подковы все прибиты, спасибо, %CALLNAME%!」"
      - "%CHARA% чуть удивлена, но на лице тёплая улыбка"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ай-я~ не стоит так напрягаться, тренер?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Но я всё сделаю как надо: не хочу, чтобы победа удрала из рук!」"

talk:
  # STATUSNAME:10 = 沉睡
  # STATUSNAME:39 = 马跳S
  - if: era.get('status:64:10') > 0 || era.get('status:64:39') > 0
    lines:
      - if: d.half_life === 1
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Запах %CALLNAME%… ещё… где…」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Не… отпущу тебя… фуфу~」"
      - if: d.half_life === 0
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「Фу… уже не лезет…」"
          - if: era.get('love:64') >= 50
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「Фуаа… запах %CALLNAME%… хехе…」"
  - if: era.get('status:64:10') === 0 && era.get('status:64:39') === 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Иногда попробовать вместе сбежать ещё дальше — как тебе?」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Гольф не попробовать? %SELF_CALL% научу!」"
      # CFLAGNAME:48 = 育成回合计时
      # BASENAME:0 = 体力
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('base:64:0') < era.get('maxbase:64:0') * 0.45
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Э… от усталости не удрать… даже отпроситься охота…」"
      # CFLAGNAME:40 = 干劲
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:40') < 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Странно… ноги такие тяжёлые…」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Готова полностью! Любую тренировку вытяну, так что давай без тормозов, %CALLNAME%!」"
      # STATUSNAME:3 = 发胖
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('status:64:3') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Блин, кажется переела…」"
      # CFLAGNAME:58 = 照看
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Метод %CALL_71% всё равно легковат~ может, в следующий раз попросить, чтобы %SEX% была построже?」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:71') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Всё чуется, %CALL_71% не особо всерьёз. Показалось?」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「В последнее время %CALL_71%… вечно витает…」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Слушай, %CALLNAME%, можешь всё взять на себя?」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:64') >= 50 && era.get('love:71') >= 50 && era.get('relation:64:71') > 225
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Слушай, когда дашь мне пробежать с %CALL_71%?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「После тренировки вместе домой… ну это…」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 86
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Блин, тренировки %CALL_86% зверски жёсткие…!」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('love:64') >= 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Чую, в последнее время сразу как-то простаиваю…」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%~ возьми меня в академию~」"
      # CFLAGNAME:0 = 性别
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 59 && era.get('cflag:0:0') === 1 && era.get('cflag:59:0') !== 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_59% как всегда: перед мужиками робеет」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Но не парься, нужную тренировку оставь мне!」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 65
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「От %CALL_65% и правда сверх— жар! Уже не я %SEX% опекаю, кажется」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 65 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Точно, %CALL_65%%SEX% — солнце, слепит…」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「М? Неужели… %CALLNAME% ревнуешь?」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_74%%SEX% и правда… пашет」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Совсем не то, что её обычная сонность」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_74% всё-таки чистая… хоть и в просонье перебегает лишнее」"
      - if: d.half_life === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME% меня не бросит, да?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Даже если, даже если появится кто-то ещё…」"
      - if: era.get('love:64') >= 50 && era.get('love:64') < 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Иногда думаю: без %CALLNAME% я бы так не улыбалась… нет-нет! Не слышал(а)!」"
      - if: era.get('love:64') >= 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Слушай, %CALLNAME%, когда вместе в семью Мэдзиро заглянем?」"
      - if: era.get('love:64') === 100
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME% всегда будешь моим 『тренером』, да?」"
      # CFLAGNAME:81 = 妊娠阶段
      - if: (era.get('cflag:64:81') >> 2) > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Аппетит в последнее время так себе… а, с животом точно всё ок!」"
      # CFLAGNAME:66 = 招募状态
      - if: d.half_life === 0 && era.get('cflag:59:66') === 1 && era.get('cflag:0:0') === 1 && era.get('cflag:59:0') !== 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_59% с мужиками вечно не справляется, тебе хлопот…」"
      - if: d.half_life === 0 && era.get('cflag:65:66') === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_65% опять несёт то, чего я не понимаю… но я всё разберу!」"
      - if: d.half_life === 0 && era.get('cflag:74:66') === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Раньше я часто %CALL_74% волосы приводила~ теперь уж побеспокою %CALLNAME%」"

office_gift:
  - if: d.half_life === 0
    lines:
      - if: era.get('love:64') < 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Подарок? Мне? Это… я рада! Правда!」"
          - "%CHARA% будто очень удивлена"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Спасибо! Буду беречь очень! Суперспасибо, %CALLNAME%!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Спасибо, подарок супер! Когда-нибудь и я тебе отвечу!」"
      - if: era.get('love:64') >= 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Этот подарок — то, что я хотела?… нет! Ничего! Я рада!」"
          - "%CHARA% чуть мнётся; что %SEX% только что сказала — не разобрать"
  - if: d.half_life === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Это мне подарок…」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Буду беречь…」"
      - "%CHARA% крепко жмёт подарок к груди, в уголках глаз туман"

office_cook:
  - if: d.half_life === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Не парься, %SELF_CALL% ещё как умеет готовить!」"
      - "%CHARA% выглядит уверенно и машет %YOU% рукой"
  - if: d.half_life === 0 && era.get('love:64') >= 50 && era.get('love:64') < 90
    random: true
    lines:
      - "Вдвоём сами не заметили, как собрали обед — стык без шва, и этого тоже не видят"
      - "Сели есть — и только тогда вспоминают, что только что было"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(Чувствуется… как муж и жена… показалось?)"
  - if: d.half_life === 0 && era.get('love:64') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Готовка %SELF_CALL% — смотри и запоминай, %CALLNAME%~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(Интересно, зайдёт ли %CALLNAME%~)"
  - if: d.half_life === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Сначала желудок %CALLNAME% — и можно дальше…」"
      - "Бормочет так, что %YOU% не слышит"

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Иногда вместе сбежать от внешнего мира — тоже ничего……」"
  - random: true
    lines:
      - "Тихо лежите рядом и просто наслаждаетесь тишиной на двоих"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ньи……」"
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Время с %CALLNAME%…… так спокойно」"
  - if: era.get('love:64') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Хых-хых…… запах тренера…… а! Ничего не было!」"

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「В игры я ещё как умею, хм-хм～」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%SELF_CALL% так сразу не проиграет, смотри, %CALLNAME%!」"
      - "%CHARA% серьёзно смотрит в экран, всё лицо — жажда победы."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「С %CALLNAME% можно играть во что угодно, эхе～」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ого, эта игра! Дома раньше часто с %CALL_27% рубились!」"
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Эх, а сейчас как раз есть свободное……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, просто хочешь поиграть с %SELF_CALL%?」"

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Всё-таки сбегать — кайф!! Только не останавливайся!!」"
      - "Смотришь на свежую улыбку %CHARA% после крика в дупло и про себя решаешь: %SEX% всегда будет с твоей поддержкой."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Обязательно! Победить! И в скачке, и вообще во всём!」"
      - "%YOU% слушает слегка в тумане, но улыбка %CHARA% — и думать бросает."

s_a_dating:
  - if: d.half_life === 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Это… свидание тут всё-таки немного…… да?」"
      - "%CHARA% будто очень это занимает, но руку не отпускает ни на миг."
  - if: d.half_life === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Свидание……」"
      - "%CHARA% крепко обхватывает руку %YOU% и, не глядя на чужие взгляды, жмётся щекой к плечу."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「М-м～」"

s_r_lunch:
  - if: d.check > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「На крыше в обычный день никого. Это тоже вроде свидание…… хехе.»"
      - "Смотришь, как %CHARA% чешет щёку и бормочет непонятное, и, пока %SEX% бормочет, кладёшь ей в бенто октососиску."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Эй! Ты слышал(а)!」"
      - acc: 1
        content: "「Не слышал(а)」"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Эй! Это… правда?」"
          - "%CHARA% вся красная, молча ест своё бенто, глядя вниз."
      - acc: 2
        content: "「……」(влюблённость+1)"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「С-скажи что-нибудь, %CALLNAME%!」"
          - "%CHARA% дует пунцовые щёки и мелким кулаком лупит %YOU% по плечу."
  - if: '!d.check'
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Всё-таки с крыши вид класс!」"
          - "На крыше смотрите пейзаж и делитесь бенто."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Как вкусно! %CALLNAME%, у тебя руки золотые!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「С крыши правда красиво, да? Я иногда поднимаюсь проветрить голову!」"

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Оставь на меня……! Раньше %SELF_CALL% в этом была ого-го!」"
      - "%CHARA% закатывает длинный рукав и смотрит на удочку так, будто сейчас рванёт."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ностальгия～ раньше тоже так ходили～」"
      - "%CHARA% забрасывает удочку и, глядя на спокойный поплавок, болтает ни о чём."

o_r_walking:
  - random: true
    lines:
      - "Вы вдвоём идёте по дамбе, выключив головы."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Иногда сбавить тоже ничего……」"
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - "Глядя на пустую дамбу вокруг, %CHARA% молча прижимается к %YOU%."
      - "「Это… %SELF_CALL%?」"
      - "Смотришь на %CHARA%, прилипшую к руке, и внутри чуть ёкает."
      - "%CHARA% будто не слышит: молча берёт руку %YOU% и жмётся всем телом."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Вот так…… можно?」"

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ого, моя игрушка! %CALLNAME%%CALLNAME%, хочу попробовать!」"
      - "%CHARA% тычет в игрушку в автомате и тащит %YOU% бегом."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Раньше я часто в это с %SIBLINGS% рубилась, %CALLNAME%, тебе лучше поберечься, ясно?」"
      - "Перед автоматом у %CHARA% даже глаза искрятся."

o_s_drawing:
  - random: true
    lines:
      - "Вроде в последнее время лотереи не было……"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ничего, как будет шанс — обязательно ещё зайдём!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Эх, сегодня тоже без лотереи……」"

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Я то и дело сюда с друзьями. Тут как раз можно расслабиться.»"
      - "На лице %CHARA% привычная лёгкая улыбка — и %YOU% тоже отпускает."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Музыка и правда поднимает, %CALLNAME%!」"
      - "%CHARA% явно в кайфе и прыгает в такт."

o_s_movie:
  - if: era.get('cflag:71:66') !== 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「А, это же кино, что %CALL_71% советовала!」"
  - if: era.get('cflag:71:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「А, это кино, что советовала %CALL_71%!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Жалко, что не с %CALL_71%… в следующий раз втроём как?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Кино давно не смотрела, что бы глянуть……」"
      - "%CHARA% разглядывает постеры у кинотеатра сверху вниз."
  - if: era.get('love:64') >= 25 && era.get('love:64') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Слушай, %CALLNAME%…… тебе романтика заходит?」"
      - "%CHARA% чуть скованная, будто чего-то ждёт."
  - if: era.get('love:64') >= 50 && era.get('love:64') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Вдвоём в кино… как будто это уже о другом……」"
      - "%CHARA% бормочет сбоку, но руку %YOU% сжимает крепче."

o_c_pray:
  - "Храм у Трейсен невелик, но среди %UMA% на него слава."
  - "Многие %UMA% перед скачкой специально заходят сюда — с крохой надежды вытянуть жребий."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Иногда попытать удачу — тоже ничего.»"
  - "%CHARA% — убегающая натура: когда хочется сбежать, по настроению тащит %YOU% сюда попытать удачу."
  - "Здесь всегда отпускает. Для неё это, может, тоже кусок побега."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Что-то…… тут многое забывается.»"
  - "%CHARA% держится за голову и расслабленно, вразвалку идёт рядом с %YOU%."
  - "В храме почти никого; ветер гладит ветки, по лицу — приятно."
  - "Глядя на тубу с палочками, %CHARA% молча тычет %YOU% в бок и делает вид, что ей всё равно."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Тренер, вытянешь? Вдруг великая удача.」"
  - "Говорит вроде шутя и кивает вперёд."
  - acc: 1
    content: "「Это же твоя удача, Палмер. Как мне лезть.»"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Моя удача…… тогда я тяну!」"
  - "%CHARA% кивает %YOU%, поворачивается к храму и складывает ладони."
  - "Закрывает глаза, потом берёт жребий."
  - if: d.dice <= 0.8
    lines:
      - "На бумаге чёткое «удача», будто объявляет сегодняшний фартовый день."
      - acc: 1
        content: "「Твоя удача пришла~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「М-м, сегодня и правда фартит.」"
      - "Кладёт бумажку и поворачивается, хватает руку %YOU%."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「И %CALLNAME% тоже спасибо… это же наша удача.」"
      - "Глядя на это радостное лицо, %YOU% сам(а) не замечает, как смеётся вместе с %CHARA%."
  - if: d.dice > 0.8
    lines:
      - "Разворачиваешь бумажку — великой удачи нет."
      - "Глядя на «неудачу» на бумаге, %CHARA% смущённо прячет взгляд от %YOU%."
      - acc: 1
        content: "「Удача же сохраняется, завтра станет фартом.」"
      - "%CHARA% чуть потерянно поворачивается к %YOU% и отводит глаза."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Что делать, сегодняшнее это…」"
      - "Кажется нервничает: пальцы без остановки ёрзают."
      - "Глядя на тревожную %CHARA%, %YOU% только поднимает руку и мягко мнёт мягкие волосы %SEX%."
      - acc: 1
        content: "「Ничего.」"
      - "%CHARA% ничего не говорит: только дёргающиеся уши выдают настроение."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Спасибо…」"
      - "Голос крошечный, но в пустом храме звучит очень ясно."

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Пойдём что-нибудь съедим? Я кучу офигенно вкусных мест знаю!」"
      - "%CHARA% горячо тащит %YOU% и всю дорогу семенит рысцой."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Хыхы~ мисс Палмер как раз умеет находить вкуснятину」"
      - "%CHARA% упирается в бока и гордо смотрит на дымящийся сет перед вами."
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - "Сидите в заведении, смотрите друг другу в лица — и оба прыскаете."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Нам двоим такое всё-таки не очень идёт.」"
      - "Оба давите смех и берёте приборы."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Свидание и всё такое — зря сюда пошли…」"
      - acc: 1
        content: "「Что такое?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ничего! Просто…」"
      - "Глядя на лицо %YOU%, чуть взведённая %CHARA% снова оседает."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「После еды ещё побудешь со мной, %CALLNAME%?」"

o_s_dating:
  - if: d.half_life === 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Я… я говорю, %CALLNAME%, свидание вот здесь…」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Когда с %CALLNAME%, стесняться как-то не стесняюсь…」"
          - "%CHARA% липнет к %YOU% и чуть склоняет голову на плечо %YOU%."
      - if: era.get('cflag:64:0') !== 1
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「В чужих глазах мы обычная парочка, да?」"
          - "Липнет и шепчет так, что слышит только %YOU%, слегка кусает ухо."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Чуть перебрать… никто же не заметит?」"
          - "Обе руки крепко вцепились в руку, прижатую к мягкой груди %CHARA%."
  - if: d.half_life === 1
    lines:
      - "Почему-то %CHARA% так и держит руку %YOU% и вовсе не думает отпускать."
      - "Мягкость всё это время только в кайф, никакой неловкости."
      - "Только когда прохожих вокруг сильно поубавилось, хватка чуть слабеет."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Хотя… не знаю почему… чуется, если отпущу, %CALLNAME% уйдёт от меня…」"
      - "Голосом, который другим не слышен, шепчет, прислонясь к плечу %YOU%."

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Эхехе, это тебе очень идёт, %CALLNAME%!」"
      - "%CHARA% долго примеривает на %YOU% и с озорной улыбкой вешает что-то."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, смотри, офигенно вкусно!」"
      - "Почему-то первое дело у торгового центра — найти уличную еду."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, что хочешь купить? Я тоже могу тебе что-то подарить!」"
      - "%CHARA% чуть возбуждённо прыгает перед %YOU% и смотрит."
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Кстати, %CALLNAME%, у тебя дома этого нет, да? Могу купить.」"
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, если у тебя дома это будет, я могу прийти поиграть?」"
      - "В глазах %CHARA% блеск: про комендантский час будто вовсе забыла."

good_night_normal:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    - if: era.get('status:0:10') === 0 && era.get('status:64:10') === 0 && era.get('status:64:39') === 0
      lines:
        - random: true
          lines:
            - "%CHARA% бодрым шагом здоровается с %YOU%, что провожает её в общежитие."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Завтра же ещё увидимся, да? Пока!」"
        - random: true
          lines:
            - "После забитого дня отводишь в общежитие %CHARA%, которая тоже уже почти падает."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Нн… кажется, чуть перестаралась, хехе~」"
    - if: era.get('status:0:10') === 0 && (era.get('status:64:10') > 0 || era.get('status:64:39') > 0)
      lines:
        - "Глядя на спящую Мэдзиро Палмер, будить никак не выходит: пусть %SEX% поспит. Остаётся попотеть и отнести её в общежитие — всю дорогу %SEX% так и не просыпается."
        - "Если сейчас сыграть гадость, %SEX% проснётся?"
    - if: era.get('status:0:10') > 0
      lines:
        - "Погружённый в сон %YOU% в дымке будто видит, как %CHARA% хочет тронуть и мнётся; в конце остаётся только тёплое, ласковое прощание."

good_night_sex:
  - "Проводив %CHARA% в общежитие, чувствуешь, как легонько тянут за рукав."
  - "%CHARA% за спиной %YOU% чуть шамкает, но последнее слышно ясно."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Ночёвку и всё такое я улажу, так что…」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Я… могу сбежать к %CALLNAME%?」"
  - acc: 1
    content: "「Можно.」"
    lines:
      - "Заявка на ночёвку уже побоку: сейчас есть дело важнее…"
      - "А именно — тащить домой %CHARA%, что липнет к руке и не отцепляется."
  - acc: 2
    content: "「Не капризничай.」"
    lines:
      - if: d.check === 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Но…」"
          - "Объективно сила %UMA% куда больше обычной…"
          - "Так что и нынешнего %YOU% схватить ей легко."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「Если не делать — какое это каприз?」"
      - if: d.check !== 2
        lines:
          - "Лицо %CHARA% с ожидания уходит в тень; потерю прячет в свисшую чёлку."
          - "Поворачивается и послушно идёт в общежитие, но в дверях ещё раз украдкой глядит на силуэт %YOU% — и уже с опущенной головой пропадает за углом."

load_talk:
  # CFLAGNAME:81 = 妊娠阶段
  # CFLAGNAME:57 = 扩展变量
  # EXPNAME:117 = 生产次数
  - if: (era.get('cflag:64:81') !== 2 && !era.get('cflag:64:57').report) || era.get('exp:64:117') > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Вот как… ничего… %SELF_CALL% всё понимает.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Точно я виновата… ахаха…」"
      - color: %COLOR%
        fontSize: 0.75rem
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Я понимаю…」"

tree_hollow_snails:
  title: "Сейчас в улитку свернусь///"
  lines:
    #条件为爱欲及以上，物品里有肛塞，肛门内射之后，前往中庭触发
    - "Вечер, %YOU% ведёт Палмер за руку по кампусу; шаг %SEX% скованный донельзя, и только под ведением %YOU% она кое-как ступает"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%? Пора уже… нн」"
    -
    - "%YOU% средним пальцем щёлкает по металлической штуке под юбкой %TEEN%; слова %SEX% сразу сбивает лёгкий стон, сжатые плечи мелко дёргаются"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вот извращённый вкус %CALLNAME%… блин, сзади… странно」"
    -
    - "Убедившись, что вокруг никого, %YOU% сзади задирает юбку Палмер: между белыми толстыми ягодицами торчит металлический хвост анальной пробки"
    - "Всего парой фраз уговорил(а) Палмер выйти со спермой, запечатанной в прямой кишке — %SEX% уже жалеет?"
    - "Палмер с заткнутой жопой как растерянный щенок, хвост между ног; %SEX% не может сопротивляться и только слушается %YOU%…"
    -
    - acc: 1
      content: "Схватить пробку и дразнить"
      lines:
        - "Тянет Палмер под тень дерева, %YOU% хватает конец пробки и двигает вперёд-назад, мешает сперму в прямой кишке — «хлюп-хлюп»"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%… не надо, услышат… нн」"
        -
        - "Палмер зажимает рот, другой рукой вцепилась в одежду %YOU%: не скажет, сопротивляется или в стыде принимает кайф"
        - "Хвост %SEX% будто сам отгоняет, хлопает руку %YOU% до зуда, но кроме этого только жмётся к %YOU%, пряча секрет сзади"
        - "Таз и зад Палмер сами крутятся; с ускорением %YOU% слышит, как %SEX% уже не прячет тяжёлое дыхание носом и тихие стоны"
        -
        - "「Нн… нн…」"
    - if: era.get('cflag:64:0') !== 1
      acc: 2
      content: "Гладить между ног"
      lines:
        - "Идёте с Палмер в тени у стены, %YOU% суёт руку под юбку и мнёт гладкий упругий зад %SEX%"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Не трогай… увидят」"
        -
        - "На жалобы Палмер плевать: %YOU% медленно лезет вдоль ложбинки %SEX%, пока палец не упирается во влажную тёплую щель снизу"
        - "По смазке между ног %YOU% скользит средним пальцем в киску %TEEN% и дразнит стенки"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ах… нн-нн…」"
        -
        - "С сорвавшимся стоном Палмер бросает шаг, виснет на %YOU% и дёргается без остановки, сок каплями ползёт по бёдрам"
        - "Совсем сдавшаяся кайфу Палмер уже не осматривается: то ли некогда, то ли ушла в возбуждение от того, что могут увидеть"
    - divider: true
    - "Чувствуя, как меняется тело %TEEN%, %YOU% останавливается у самого оргазма %SEX%; таз Палмер мучительно крутится"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Нмм… %CALLNAME%?」"
    -
    - "Глядя в мокрые глаза Палмер, %YOU% щиплет хвост пробки и резко дёргает наружу —"
    - "「Чпоньк!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ннх!…」"
    -
    - "Зрачки Палмер резко раскрываются; прорвавшийся кайф заставляет %SEX% вцепиться в %YOU%, чтобы не упасть, из горла сыплются уже без всякой сдержанности стоны"
    -
    - "А вместе со стонами наружу идёт ещё и…"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не надо… %CALLNAME%… прошу」"
    -
    - "Чуть позже %YOU% хочет оттолкнуть чуть остывшую Палмер — и слышит почти плачущую мольбу %SEX%, голова мотается без остановки"
    - "Ведёт её вдоль стены — %SEX% идёт, а %YOU% чуть отходит и смотрит сзади"
    - "%TEEN% волочит обессиленные ноги, между качающейся юбкой тянется молочный столбик и оставляет след на земле…"

#育成中版本
cl_palace:
  title: "Неделя зала славы"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Быстрее! Тренер!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сегодня же неделя зала славы! Опоздаем — мест не будет!」"
    - "Палмер рысцой к залу и то и дело оборачивается на %YOU%, чуть спеша сбавляет шаг"
    - "После неизвестно скольких колебаний Палмер всё-таки хватает руку %YOU% и одним махом бежит к залу"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, успели!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как раз есть места, офигенно фартит!」"
    - "Сажает запыхавшегося %YOU% и полными ожидания глазами смотрит на сцену, на сэмпаев"
    - "Слушает, как сэмпаи рассказывают прошлое и путь, и сама не замечает, как улыбка ползёт от предвкушения"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Как же хорошо… скачки」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, мы тоже так сможем, да?」"
    - acc: 1
      content: "「Ещё бы」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда надо ещё сильнее— сильнее пахать! Серьёзно!」"
    - "Палмер снова смотрит на сцену, в глазах звёзды тоски"

# 育成中版本
cl_fans_in_edu:
  title: "Фан-фестиваль"
  lines:
    - "На программу фан-фестиваля Палмер как действующая скакунья, конечно, тоже получила приглашение выйти"
    - "В этот день трибуны забиты фанатами, пришедшими за своими, и они орут каждой выходящей %UMA%"
    - "Хоть это и показательные, но… на дорожке мало кто собрался бежать «понарошку»"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Блин, тут так просто не побежишь」"
    - "Только выйдя на дорожку, доходит: воздух вокруг какой-то не тот"
    - "Соседние %UMA% уже готовятся у временного старта, а Палмер чуть вдогонку"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Неужели все всерьёз…?」"
    - "Вслух не сказано, но вокруг примерно то, что думала"
    - "Палмер рвёт вперёд, как всегда держит свою позицию побега"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Так вот!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Почему я тоже включилась!!」"
    - divider: true
      content: "После показательных"
    - "После показательных Палмер, внезапно включившаяся без подготовки, сидит у дорожки и обмахивается"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Устала, кажется жёстче, чем тренировка к Tenno Sho」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, ты видел(а) только что? Как тебе?」"
    - acc: 1
      content: "「Очень в твоём стиле」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Правда?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда и фанатам, наверное, было в кайф смотреть, хехе…」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「Палмер-сан, очень красивый побег спереди」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, Бурбон-сан!」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「Не думала, что бывает и такой побег. Действительно взяла на заметку」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Честно, это просто обычный мой бег… и так бежать тяжело, кстати」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「Вот как? Поняла, запомню」"
    - "Бурбон чуть кланяется и идёт к сцене фан-фестиваля"
    - "С другой стороны всё громче: похоже, уже началось общение с фанатами"
    - "Палмер отряхивает траву с себя и протягивает руку стоящему рядом %YOU%"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Маккуин%THEY% может ещё ждут меня… нет, ждут нас」"
    - "Палмер протягивает руку и улыбается без тени сожаления"

# 已育成版本
cl_fans:
  title: "Фан-фестиваль"
  lines:
    - "В день фан-фестиваля Палмер вместе с %YOU% возвращается в Трейсен"
    - "Хоть по разным причинам она и раньше заглядывала в Трейсен, день фан-фестиваля — другое"
    - "Даже %UMA%, ушедшие в Dream Cup или уже снявшиеся, фанаты ждут именно сегодня"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「И правда столько фанатов…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Я же уже вышла из Twinkle Series, эхехе」"
    - "Глядя на таких горячих фанатов, Палмер чуть смущённо чешет лицо"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Кстати, меня ещё звали выйти пробежать」"
    - if: (era.get('cflag:64:81') >> 4) === 0
      acc: 1
      content: "「Раз пришла — попробовать?」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Да…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Раз выходить — то побегом, который принадлежит %SELF_CALL%!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А, я сначала переоденусь в скаковой костюм」"
        - "Палмер рысцой в другую сторону и сразу пропадает из виду"
        - "%YOU% смотрит в сторону, куда Палмер унесло струёй, и с доверием идёт на трибуну"
        - divider: true
          content: "Временная дорожка"
        - color: %COLOR%
          content: "На временно собранной дорожке впервые за долгое снова несколько старых знакомых"
        - color: %COLOR%
          content: "Палмер в знакомом скаковом костюме разминается на старте"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Давно не бежала скачки…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но свой бег я ни разу не забывала!」"
        - color: %COLOR%
          content: "Как и раньше на скачках, лидирует впереди"
        - color: %COLOR%
          content: "Хоть выносливость уже не как в классике, и скорость по чуть-чуть падает"
        - color: %COLOR%
          content: "В скачке нет острого драйва: всё-таки маленькая гонка для фанатов"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Фух… спереди и правда кайф」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Как тренер и говорил(а): свобода бежать, когда хочешь — самое то!」"
        - "Фанаты: 「Пал·мер! Пал·мер!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ооо, народ!」"
        - color: %COLOR%
          content: "Уши чуть дёргаются, выхватывают своё имя из шума вокруг — и она машет трибуне"
        - color: %COLOR%
          content: "И %YOU% на трибуне, который тоже орёт, конечно, тоже"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер… и правда тут」"
        - color: %COLOR%
          content: "Взгляд Палмер на трибуну в прежнем настроении чуть светлеет"
        - if: era.get('love:64') >= 50
          lines:
            - color: %COLOR%
              content: "Стоя на дорожке, показывает далёкому тренеру жест победы, в глазах едва заметная странность"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Всё-таки…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Всё-таки мой 『тренер』 — только ты」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ты, кто в любой момент поддерживает」"
            - color: %COLOR%
              content: "Законченная шуточная скачка уже не держит бегунов; соседние %UMA% уже болтают со своими"
            - color: %COLOR%
              content: "Палмер подходит к краю трибуны и протягивает руку тренеру"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Тренер, пойдём обратно?」"
    - acc: 2
      content: "「Раз уже вышла — посмотрим на младших」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Нн… тоже так」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Мой побег спереди легко сыпется в развал темпа, да」"
        - "Палмер хохочет и шутит своим коронным бегом"
        - divider: true
          content: "Временная дорожка"
        - "Сама бежать не собирается, но глянуть на осанку сэмпаев тоже ничего"
        - "Шуточная скачка стартует, вокруг фанаты уже орют за тех, кого давно не видели"
        - "%YOU% стоит с Палмер и смотрите на фигуры на дорожке"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Круто, форма до сих пор такая」"
        - acc: 1
          content: "「Ты тоже не хуже」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Не шути, я же уже ушла с дорожки」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Но если ты, тренер, хочешь смотреть, я могу попробовать?」"
        - if: era.get('love:64') >= 75
          lines:
            - "Лицо Палмер чуть краснеет, плечо опирается о %YOU%"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Если хочешь смотреть — хоть где」"
            - "Все вокруг смотрят на дорожку, в сторону %YOU% никто не глядит"
            - "Свободная рука по чутью мягко переплетается с пальцами Палмер"
            - "Мягкие пальцы от удивления деревенеют и теряются, но, узнав хозяина другой руки, потихоньку расслабляются"
            - "Скачка входит в последний поворот, волна рёва рядом растёт и будто перекрывает любой звук"
            - acc: 1
              content: "Лизнуть ухо Палмер"
            - acc: 2
              content: "Зарыться в волосы Палмер и дышать"
            - acc: 3
              content: "Украдкой потрогать Палмер за задницу"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ай!」"
            - "От проказы %YOU% Палмер вскрикивает, но вокруг слишком громко — никто не слышит"
            - "Палмер смотрит чуть зло, но ничего не делает"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ну тебя…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Хочешь так — давай уже дома」"

# 育成中限定
cl_temple_fair:
  title: "Мацури"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「В последнее время тренер всё со мной…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Так у тренера совсем нет своего времени!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Нн…」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, как раз мацури скоро!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тогда я и свожу тренера расслабиться」"
    - divider: true
      content: "День мацури"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, сегодня вроде мацури」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Вроде куча лавок, пойдём вместе?」"
    - "Палмер делает вид, что ничего не знает, и протягивает руку %YOU%"
    - "За спиной под чуть тусклым небом загораются праздничные огни, доносится шум"
    - acc: 1
      content: "「Давай, пойдём」(расположение+10, влюблённость+2)"
      lines:
        - "%YOU% берёт протянутую руку Палмер и вместе шагаете в мацури"
        - "Палмер не шатается по сторонам как обычно, а всё время держится рядом с %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер, что любишь?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сегодня %SELF_CALL% будет с тобой всё время!」"
        - acc: 1
          content: "「Вон там закуски ничего」(выносливость+100)"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Закуски? Ок, пошли глянем, тренер!」"
            - "Палмер без колебаний тащит %YOU% к лотку и смотрит на еду"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Тренер, что хочешь? Я угощу!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Хыхы, я специально кучу карманных отложила」"
            - acc: 1
              content: "「Палмер, ты тоже ешь」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Не-не, это я тренера угощаю」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Если самой захочется — куплю ещё…」"
            - "Говорит без особого интереса, только смотрит вперёд"
            - "Глядит по сторонам на лотки, ищет, куда дальше"
            - acc: 1
              content: "Поднять закуску"
            - "%YOU% поднимает закуску в руке и суёт Палмер под нос"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ам!… нн?」"
            - "Палмер рефлексом раскрывает рот, откусывает, и уже на сытом лице догоняет румянец"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ну тебя! Тренер!」"
            - "Делает вид, что злится, и легонько стукает %YOU% кулачком"
        - acc: 2
          content: "「Вон та стрельба вроде клёвая」(очки навыков+35)"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Э, стрельба!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ок, пусть %SELF_CALL% одним выстрелом в душу…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Хозяин! Мы играем!」"
            - "Палмер чуть возбуждённо берёт пневматику, и вы с %YOU% берёте по ружью"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Хыхы, тренер, ты вон ту хочешь?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Сшибу — подарю тебе」"
            - "Говорит уверенно и поднимает пневматику"
            - "Уши ловко дёргаются два раза, и уверенно жмёт спуск"
            - divider: true
              content: "После очереди"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Прости, не попала…」"
            - "Уши Палмер сразу обвисают, глаза разочарованно щурятся"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Не думала, что вообще не попаду…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Прости, тренер…」"
            - "Глядя на убитое лицо Палмер, %YOU% берёт свою пневматику"
            - "Звонкий удар — пуля рвёт воздушный шар приза"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ооо! Тренер, круто!」"
            - "В глазах Палмер свет, смотрит на игрушку, которую протягивает хозяин"
            - acc: 1
              content: "「Бери」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Э! Это же твой приз, тренер」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Как я могу брать…」"
            - acc: 1
              content: "「Мне уже в кайф」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Э?」"
            - acc: 1
              content: "「Поэтому хочу, чтобы и Палмер была в кайфе」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Вот как?」"
            - "На чуть растерянном лице Палмер долго поднимается румянец и быстро сходит"
            - "Неловко принимает игрушку обеими руками и медленно обнимает"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Это… спасибо」"
            - "Лицо тонет в пушистой игрушке, только яркие глаза смотрят на %YOU% впереди"
            - "Голосом, который другим не слышен, ещё раз тихо"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Спасибо, тренер」"
        - divider: true
          content: "После мацури"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Как же в кайф, ещё и наелась до отвала, сыто!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но в конце всё равно меня прикрыли」"
        - "Палмер обнимает добычу и идёт вдоль моря"
        - "На ходу легонько задевает плечом стоящего рядом %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сначала хотела вести тебя, тренер」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Кажется, переборщила и всё в кашу, эхе」"
        - acc: 1
          content: "「За прошлое ещё держишься?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「М? Нет, к прошлому не привязано, просто…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Поддерживать подопечную %UMA% — работа тренера, да?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я тоже хотела попробовать, каково поддерживать тренера. Вот и всё」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ты же, тренер, всегда так пашешь!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Или так странно?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ай, стыдно…」"
        - "На лице Палмер неловкая улыбка, и ничего не прячет"
        - acc: 1
          content: "「Можешь не париться так」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Но это же нагрузка на тренера?」"
        - acc: 1
          content: "「Поддерживать Палмер мне в кайф」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Арэ」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Секунду…」"
        - "Палмер останавливается и закрывает лицо добычей в охапке"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Тренер ради работы тренера всерьёз пашет)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Потому что есть подопечная %UMA%, поэтому можно пахать…)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Значит, как тренер…)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Как… мой тренер?)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Э?)"
        - "「Что стал тренером Палмер — очень хорошо」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Э-э!?)"
        - "После этой мысли взгляд Палмер потихоньку плывёт"
        - "Чуть панически жмёт к себе вещи, закрывает уже красное лицо и слегка мотает головой, чтоб сбить жар"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер делает работу тренера, но радуется не только потому, что тренер」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「А потому что… радуется как мой тренер?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Радуется именно как мой тренер, да?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Увааа…」"
        - "Пока давит охоту сбежать, поднимает лицо и смотрит вперёд по-нормальному"
        - "На повернувшегося %YOU% Палмер чуть вдыхает"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「…Тренер」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я буду пахать, пахать бежать, пахать побеждать, правда」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Своим… нашим бегом, чтобы все узнали!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Когда-нибудь ты, тренер, подумаешь: с Мэдзиро Палмер в паре — как же хорошо!」"
        - acc: 1
          content: "「Я тоже」(расположение+10)"
        - acc: 2
          content: "「Я жду тот день」(влюблённость+2)"
        - acc: 3
          content: "「Я всегда так думал(а), Палмер」"
          # 增加性欲
        - "Лицо Палмер чуть тупеет, но быстро снова прячется за прикрытие"
        - "Там, где %YOU% не видит, Палмер закрывает глаза и по-настоящему жуёт услышанное"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Уваааааа…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Мой тренер и правда… что-то с чем-то…」"
        - "Снова опускает пакет в руках, с красной смущённой улыбкой"
    - acc: 2
      content: "「Не, я не пойду」"

cl_halloween:
  title: "Хэллоуин"
  lines:
    - "В Трейсене с расставленными декорациями уже давно пахнет Хэллоуином"
    - "Без всякого предупреждения стучат в дверь"
    - "Из чувства долга тренера %YOU% открывает дверь"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не дашь сладость — будет пакость, тренер!」"
    - "Палмер стоит за дверью, прикидываясь мелким демоном"
    - "Рожки-ободок слабо светятся и в тёмном коридоре очень заметны"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Нравится, тренер? Это мы с Хелиос вместе выбирали」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, хотя у меня ещё есть комплект в стиле ангела」"
    - "Палмер убирает проказливый тон и чуть зло ухмыляется, глядя, как %YOU% делает вид, что испугался(ась)"
    - "Хэллоуин с улицы уже залез в кабинет: работать или делать что-то ещё сейчас — просто не чувствовать воздух"
    - "А Палмер воздух читать умеет, так что сразу поняла, что к чему"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Снаружи куча движухи, пойдём глянем?」"
    - acc: 1
      content: "「Давай」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Есть! Пошли!」"
    - "Сама хватает руку %YOU% и одним махом несётся наружу"
    - "День прошёл в кайфе, но итог: %YOU%, у кого выносливости меньше, чем у Палмер, назавтра честно лежит пластом"

cl_christmas:
  title: "Рождество"
  lines:
    - "В Рождество в дверь кабинета %YOU% без предупреждения стучат"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Йохо! Тренер!」"
    - "Палмер внезапно входит и подходит к тебе, пока ты работаешь"
    - "Праздник с улицы вместе с голосом Палмер залез в кабинет, а с порога вкатилась ещё и маленькая звезда"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, время вышло!」"
    - "Хелиос с ёлкой в охапке впрыгивает в кабинет"
    - "Звонкий колокольчик, и в серьёзном кабинете расползается рождественский… точнее, пати-воздух"
    - "Хелиос, мастер пати, тащит друзей и превращает кабинет в площадку вечеринки"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「Йху! Рождественское пати, старт!」"
    - color: %COLOR_66%
      content:
        - fontWeight: bold
          content: %TURBO%
        - "「Уху!」"
    - color: %COLOR_60%
      content:
        - fontWeight: bold
          content: %NATURE%
        - "「Эхе, с заходом~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, ты тоже давай!」"
    - "В шуме вокруг рука Палмер тянется к %YOU%"
    - acc: 1
      content: "「Ладно-ладно」"
    - "Тон чуть отмахивается, берёшь руку Палмер и встаёшь"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Сегодня же Рождество, давай вместе тусить」"
    - "Тащит ещё уставшего %YOU% встать и ведёт к ёлке"
    - color: %COLOR_62%
      content:
        - fontWeight: bold
          content: %TANNHAUSER%
        - "「Как шумно~」"
    - divider: true
      content: "Время идёт"
    - "Неизвестно, сколько прошло: взрослому %YOU% уже нечем крыть движуху мелких"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, выйдем воздуха глотнуть?」"
    - "Будто заранее прочитала мысль %YOU%, вовремя хлопает по плечу сзади"
    - "Выходите из Трейсена, идёте по улице, набитой Рождеством"
    - "На лавках вокруг звёзды, колокольчики и красно-белая лента"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ну, я и так знала, что так будет」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Но тренеру тоже было в кайф, да?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Иногда вместе со всеми поиграть и всё такое」"
    - "Палмер легонько чешет лицо, в зимнем ветру чуть розовеет"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, тебе сегодняшнее пати зашло?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Все очень готовились」"
    - acc: 1
      content: "「Ага, было в кайф」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「М-м! Лишь бы тренеру было в кайф!」"
    - "Услышав ответ, Палмер сама улыбается, и шаг сразу легче"
    - if: era.get('love:64') >= 75
      lines:
        - acc: 1
          content: "「А ты, Палмер? В кайфе?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Э?」"
        - "Шаг сам сбивается, на лице чуть удивление; спохватившись, что застыла, рысцой догоняет %YOU%"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ай, как сказать」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Когда вижу, что тебе, тренер, в кайф, мне тоже… в кайф」"
        - "В словах чуть пауза, но без колебания"
        - "Взгляд на %YOU% тоже чуть сложнее"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Всё ещё переживает за меня… всё-таки тренер…)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Всё-таки я… к тренеру уже…)"
        - acc: 1
          content: "「Палмер?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я в порядке, тренер, просто думаю」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Если сказать… что тренер подумает)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(Не то, Палмер! Не скажешь — как тогда шаг вперёд!!)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Тренер, я вот…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Кажется, когда тебе в кайф, и мне самой поднимается」"
        - acc: 1
          content: "「В-вот как?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ага…」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ну тебя, времени с тобой, тренер, тоже всё больше」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Сегодня же пати, а в итоге опять мы двое」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「С тобой, тренер, уже больше времени, чем со всеми」"
        - "Палмер поднимает голову в небо и то и дело косится вбок"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Так и дальше… глядишь, и от тренера уже не оторвусь」"
        - acc: 1
          content: "「Э? Я?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Да……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это… не слишком ли…… странно?」"
        - acc: 1
          content: "「Даже так — ничего」"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Ничего?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「То есть……」"
            - "В глазах вспыхивает радость: смотрит на такое же смущённое лицо %YOU%"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Тогда… тогда я воспользуюсь!」"
          # 马跳
        - acc: 2
          content: "「Да, странно」"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Всё-таки странно?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Если тренеру не нравится…… считай, я не говорила, ахаха……」"
            - "Палмер чешет затылок, делая вид, что всё равно"
            - "Только маска не закрывает до конца — лишь чтобы не выглядеть странно"
            - "Тоска %UMA% уже вся на лице, едва уши падают"
            - acc: 1
              content: "「Сама же улыбалась так радостно」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Сама тоже рада……」"
            - "Чуть красные глаза останавливаются, с удивлением оборачивается к %YOU% рядом"
            - "Горло незаметно дёргается дважды: хочет сказать — и не говорит"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "(Я тоже улыбалась так радостно…… э?)"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "(Это значит…… э-э?)"
            - acc: 1
              content: "「Мне тоже радостно, когда ты рада, Палмер」"
            - "Услышав это, лицо Палмер снова расправляется"
            - "Уголки рта снова едут вверх, и взгляд светлеет"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "(Значит, это не странно……)"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Спасибо, тренер」"
            - "Пока %YOU% ещё думает, что сказать, Палмер сама прижимается"
            - "У щеки оставляет лёгкий маленький отпечаток губ"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Рождественский подарок…… это тоже считается, хехе」"
            - "Легко поднимает палец и прижимает к губам"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Другим не говори, и ещё」"
            - "Опускает руку, снова встаёт прямо и смотрит в глаза %YOU%"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「С Рождеством, тренер」"

cl_christmas_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Кажется…… всё равно слишком спешила……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Мы вот так это сделали…… не перебор?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Хотя… хотя я не думаю, что это тренер виноват……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「А! Что я делаю!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Короче!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Я! Люблю! %YOURNAME%!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……И ещё, хоть и поздновато」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「С Рождеством! Тренер」"

# 情爱囹圄（爱慕＞74，常规）
basement_end:
  title: "До завтра"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер? Как сегодня?」"
    - "Пейзаж вокруг уже не виден: только чёрные стены"
    - "Лежишь на мягкой широкой кровати, смотришь в знакомый потолок"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, тренер сейчас говорить не может」"
    - "В тусклом свете сюда уже никто не придёт"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Завтра я обязательно снова тебя найду, тренер……」"
    - "Палмер встаёт, смотрит на %YOU% на кровати и сияет улыбкой"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А сейчас спи…… мой тренер」"

# 金钱奴隶（爱慕＞74）
slave_end:
  title: "Конец блуждания"
  lines:
    - "%CHARA% стоит в дверях и смотрит на %YOU% в темноте"
    - "Во всей комнате только вы двое смотрите друг на друга"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Тренер, сначала я тоже не хотела. Это ты так выбрал(а)」"
    - "Дверь закрывается, в комнате становится черно"
    - "Сквозь шторы пролезает нитка солнца и ложится на лицо %YOU%"
    - "Палмер садится на корточки, вытаскивает кляп изо рта %YOU% и медленно гладит лицо"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если нет денег — просто иди ко мне, тренер」"
    - "Деньгами шлёпает %YOU% по щеке"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Только ко мне, ясно」"
