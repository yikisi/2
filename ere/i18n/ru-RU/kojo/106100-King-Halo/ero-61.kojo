# @file 圣王光环 - 调教
# @author 牛蛙煲
ero_start:
  - if: era.get('tflag:强奸') === 0 && era.get('love:61') < 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「Ч-что ты такое говоришь!»"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「Аааааа!»"
  - if: era.get('love:61') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「Эй! Ты… ты что, совсем осмелела?»"
      - "Голос Кинг Хало взлетает на тон выше, но тело %SEX% возражать не собирается."
  - if: era.get('love:61') >= 75
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME% не ори так громко!»"
  - if: era.get('love:61') >= 90
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「Тогда давай. Первоклассная %UMA% первоклассна везде!»"
