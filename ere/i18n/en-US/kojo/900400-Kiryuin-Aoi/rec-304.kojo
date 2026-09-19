# @file Kiryuin Aoi - Recruitment
# @author 黑奴队长（临时）
# @author Katze (translator)
intro:
  # H_NAME = Happy Meek
  - %CHARA% told %YOU% that she was responsible for a gifted %H_UMA% named %H_NAME%, whose training career was about to begin.
  - If %YOU% was interested, helping with %H_SEX% training for a while could provide some valuable experience.

recruit:
  title: Results
  lines:
    - After %H_NAME% won a G1 race, %CHARA% found %YOU% and praised %YOU%'s outstanding results.
    - She hoped to keep working alongside %YOU%, helping not only %H_NAME%, but many more %H_UMA% claim victory and fulfill their dreams.

recruit_hentai:
  title: 「Results」
  lines:
    - After %H_NAME%'s training career ended, %CHARA% came to see %YOU%.
    - if: d.meek_pregnant
      lines:
        - %CHARA% was furious that %YOU% had violated %H_NAME%.
        - But for %H_NAME%'s sake, she had no choice but to accept what had happened.
        - Even so, she would never forgive you.
    - if: '!d.meek_pregnant && d.meek_love'
      lines:
        - She condemned %YOU% for deceiving the %H_TEEN%'s heart.
        - But if %H_NAME% wanted to stay with %YOU%, there was nothing more she could say.
        - She would keep a close eye on %YOU% to ensure %YOU% never betrayed %H_NAME%.
    - if: '!d.meek_pregnant && !d.meek_love'
      lines:
        - With a solemn expression, %CHARA% said that although %YOU% had achieved little of note, the past three years had still helped %YOU% grow.
        - So %CHARA% would continue helping %YOU% until %YOU% became a capable trainer.
        - With no one else around, %CHARA% finished by planting a soft kiss on %YOU%'s cheek.
