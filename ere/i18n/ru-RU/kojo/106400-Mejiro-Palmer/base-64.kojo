# @file 目白善信 - 地下室
# @author KUN
welcome:
  sync: true
  lines:
    - random: true
      lines:
        - "%YOU% просыпается в холодном замкнутом пространстве."
        - "Оглядывается — и видит знакомое улыбающееся лицо."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%～ как дела～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Это я специально для тебя приготовила. Сюрприз?」"
    - random: true
      lines:
        - "В тёмной каморке невыспавшийся %YOU% держится за голову и садится."
        - "Пустое пространство: кроме %YOU% вроде никого."
        - "Собираешься встать с кровати — и слышишь знакомый голос."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%～ я вернулась～」"
        - "Из-за угла выглядывает %CHARA% и с улыбкой смотрит на %YOU%."

flatter:
  - if: (t = era.get('relation:64:0')) < 0
    lines:
      - "Напарница — солнечный ребёнок. Если спокойно поговорить, вежливо попросить…"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Даже я слышу ложь %CALLNAME%.」"
      - "%CHARA% без колебаний перебивает %YOU% и спокойно улыбается."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Такому %CALLNAME% нужна маленькая кара, да?」"
      - "Пока %YOU% ещё хочет сказать, %CHARA% останавливает губы."
      - "Без колебаний кладёт %YOU% обратно на кровать и спокойно садится рядом."
      - "Тишина такая, что слова уже не лезут."
  - if: t >= 0 && (t = (t < era.get('love:64') * (era.get('flag:极端行为限制') || 1)))
    lines:
      - "Пытаешься словом помириться с %CHARA% — рот затыкают губами."
      - "Лишь когда дыхание %YOU% уже не поспевает, %CHARA% довольно отпускает губы — длинная серебряная нить."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Нельзя.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME% такое говорить нельзя.」"
      - "Обессиленного %YOU% снова валят на узкую кровать: сверху %CHARA%."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Мне не нравится, когда %CALLNAME% такое говоришь.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Сейчас во всём виноват(а) %CALLNAME%.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Будь со мной. Всегда здесь.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～」
  - if: '!t'
    lines:
      - "В комнате без дня %YOU% всё ещё пытается языком что-то пробить."
      - "На этот раз %CHARA% просто сидит рядом и тихо слушает."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「…Даже если %CALLNAME% не скажешь, я и так знаю.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Я просто трусиха… прости.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「У %CALLNAME% на деле нет никакой вины.」"
      - "Голова опущена, медленно прижимается к %YOU%, к плечу."
      - "Руки неуверенно тянутся вбок, легко обхватывают опущенную ладонь %YOU%."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Хотя бы… дай ещё чуть поблажки.」"
      - "Пальцы в ладонь, переплетаются."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「Ещё чуть-чуть каприза. Хватит.」"

battle_escape:
  - "После короткого шума в каморке снова тихо."
  - "%CHARA% спокойно лежит перед %YOU%, не шевелится."
  - "Дальше открыть замок перед глазами — и можно назад."
  - "(…Так нормально? Оставить %CHARA% здесь…)"
  - "Спросив себя так, %YOU% всё же не выдерживает и оборачивается."
  - "Раз вместе выбрали бежать — идти тоже вместе."
  - "Силой поднимаешься, берёшь без сознания %CHARA%, ключ уже найден."
  - "Пора вместе назад."

battle_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Так нельзя, %CALLNAME%.」"
  - "Без труда ловит руку %YOU% с умыслом и наоборот сажает %YOU% к стене."
  - "%CHARA% сверху смотрит на лицо %YOU% и улыбается двусмысленно."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, который мне нравится, такого со мной не сделает.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Вернёмся и ещё хорошенько～ поговорим.」"
  - "В тусклом свете голубые зрачки чуть светятся."

battle_prison:
  - "Холодный замок щёлкает чисто."
  - "Дрожащие плечи %YOU% сзади мягко сжимают сильные руки — неожиданное тепло."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%～ ты что делаешь～」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Извинишься — я сделаю вид, что ничего не видела～」"
  - "Сказано легко, а %YOU% ничего не выдавливает — только тупо даёт %CHARA% отвести к кровати."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME% просто будь здесь и жди меня.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Остальное не важно.」"

find_escape:
  sync: true
  lines:
    - "Замок под усилиями %YOU% наконец поддаётся, ещё чуть — и…"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「А, специально ждал(а), пока я вернусь?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Не зря мой %CALLNAME%!」"
    - "С улыбкой забирает инструмент из рук %YOU% и снова закрывает дверь."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Встречать — здесь и хватит.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Если %CALLNAME% откроешь замок, мне будет очень трудно.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「Ты понимаешь, да, %CALLNAME%?」"

back_basement:
  sync: true
  lines:
    - if: d.start
      lines:
        - if: era.get('base:0:体力') < 100
          lines:
            - "Открываешь усталые глаза — и ловишь те самые голубые, что когда-то всегда светились."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「М-м～」"
        - if: era.get('base:0:体力') >= 100
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「О, проснулся(ась).」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「Сонного лица %CALLNAME% мне ещё мало, ну тебя…」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「А здесь сколько угодно можно видеть улыбку %CALLNAME%… да?」"
    - if: '!d.start'
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Я вернулась～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「О, %CALLNAME%～ сегодня тоже умница～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Не бойся, я всегда буду рядом.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「Ведь здесь… конец моего побега」"

start_fixing:
  - "Отдыхающий %YOU% как будто слышит у двери падение металла."
  - "Что-то поняв, %YOU% идёт глянуть — и лоб в лоб с %CHARA%."
  - "Дверь цела, ловушки и замок ещё идеальнее."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%? Ты чего пришёл(ла)?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「А, меня искал(а), да?」"
  - "Как будто нарочно %CHARA% почти силой толкает %YOU% обратно в комнату."
  - "Жест «тише» %YOU% и улыбка."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Прости, разбудила.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Позже зайду к тебе, %CALLNAME%.」"

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「…Да.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Всё-таки %CALLNAME% тоже не любишь сидеть здесь вечно, да.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Прости, что так долго держала %CALLNAME% здесь.」"
  - "Стоит неподвижно перед %YOU%, голова опущена, шатается — вот-вот упадёт."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Но хотя бы… хотя бы сейчас дай ещё чуть поблажки.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Совсем чуть-чуть. Чуть-чуть.」"
  - "Шатаясь идёт и падает %YOU% на грудь; сквозь одежду угадывается тёплая струйка."
  - "Руки за талию, обнимает крепко."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Так хорошо…」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Лишь так, ещё чуть-чуть…」"
  - "Неизвестно сколько прошло — руки наконец разжимаются."
  - "Уже красная до ушей %CHARA% натягивает улыбку, смахивает капли с лица."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Слушай, %CALLNAME%.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Когда выйдем… мы всё ещё будем парой, да.」"
  - "%CHARA% открывает замок — яркий щелчок."
  - "Спиной к двери, протягивает руку %YOU%."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Пойдём… %CALLNAME%.」"

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Ещё нельзя.」"
  - "На просьбу %YOU% %CHARA% лишь тихо улыбается и гладит %YOU% по лицу."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Если %CALLNAME% не будет здесь.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Мне будет очень одиноко.」"
  - "Приподнимается к уху %YOU% и медленно лижет раковину."
  - "Чувствуя, как %YOU% весь(а) в мурашках, %CHARA% сладко смеётся."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Останься рядом…」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」

ask_time:
  - "%YOU% осторожно спрашивает %CHARA% про время — в ответ только ровная улыбка."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Времени ещё полно.」"
