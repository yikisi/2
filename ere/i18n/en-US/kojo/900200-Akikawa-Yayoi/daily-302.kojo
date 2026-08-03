# @file Akikawa Yayoi - Daily
# @author 黑奴队长（临时）
# @author Katze (translator)

npc_talk:
  # Disappointed
  - if: (t = era.get('relation:302:0')) <= -100
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「DISMISSAL! If you have time to visit me, get your own work done first!」
  # Suspicious
  - if: t > -100 && t <= 0
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「DISPLEASURE! I would rather not see you!」
  # Aloof
  - if: t > 0 && t <= 75
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「CURIOSITY! What brings you here to speak with me, Trainer?」
  # Friendly
  - if: t > 75 && t <= 150
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「GREETINGS! Is your day going well?」
  # Enthusiastic
  - if: t > 150 && t <= 225
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ACCLAIM! You, too, shall join the ranks of legends!」
  # Fond
  - if: t > 225 && t <= 375
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「WELCOME! Come to me whenever you need help!」
  # Intimate
  - if: t > 375 && t <= 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「DELIGHT! Come chat whenever you have time!」
  # Devoted
  - if: t > 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「If it is you... IMAGINATION! You heard nothing!」

npc_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「SHYNESS! Then I shall see you at your place tonight!」

npc_bye:
  - if: d.nothing
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「DISPLEASURE! Do not waste my time!」
  - if: '!d.nothing'
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「FAREWELL! Keep up the good work!」
