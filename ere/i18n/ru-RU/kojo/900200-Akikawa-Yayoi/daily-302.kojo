# @file 秋川弥生 - 日常
# @author 黑奴队长（临时）

npc_talk:
  # 失望
  - if: (t = era.get('relation:302:0')) <= -100
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Холод! Есть время ко мне ходить — лучше б работу свою сделал!」"
  # 怀疑
  - if: t > -100 && t <= 0
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Недовольство! Не очень хочу тебя видеть!」"
  # 冷淡
  - if: t > 0 && t <= 75
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Странно! Тренер, тебе что-то от меня нужно?」"
  # 融洽
  - if: t > 75 && t <= 150
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Привет! Как день?」"
  # 热忱
  - if: t > 150 && t <= 225
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Хвала! И ты войдёшь в легенды!」"
  # 喜爱
  - if: t > 225 && t <= 375
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Добро пожаловать! Беда — ко мне!」"
  # 亲密
  - if: t > 375 && t <= 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Радость! Есть время — заходи поболтать!」"
  # 不渝
  - if: t > 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Если это ты…… Галлюцинация! Ты ничего не слышал(а)!」"

npc_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Стыд! Тогда вечером у тебя дома!」"

npc_bye:
  - if: d.nothing
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Недовольство! Не разыгрывай меня!」"
  - if: '!d.nothing'
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「Пока! Работай на совесть!」"