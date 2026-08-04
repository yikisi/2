# @file Kiryuin Aoi - Training
# @author 黑奴队长（临时）
# @author Katze (translator)
meek_fail:
  title: Failure
  lines:
    - %H_NAME%'s training career came to an end.
    - %YOU% and %H_SEX% failed to achieve any notable results.
    - In the trainer's office, %YOU% and %CHARA% sat across from each other in silence.
    - Although %CHARA% did not raise her voice at %YOU%, the silence made %YOU% feel even more ashamed.
    - if: era.get('cflag:201:育成次数') === 1
      lines:
        - At last, %CHARA% broke the silence. She had heard a rumor that praying earnestly before the Three Goddesses could grant someone a second chance.
        - If %YOU% discovered anything, she hoped %YOU% would give %H_NAME% another chance to set things right.
    - if: era.get('cflag:201:育成次数') !== 1
      content: At last, %CHARA% broke the silence and asked %YOU% to try harder next time, so %H_NAME% would have no more regrets.
