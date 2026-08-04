# @file Otonashi Etsuko - Recruitment
# @author 黑奴队长（临时）
# @author Katze (translator)

# @author 黑奴队长（临时）
# @author Katze (translator)
rec_0:
  title: The Interview Begins
  lines:
    - While leaving %TRACK%, %YOU% ran into a %PHY% dressed like a reporter.
    - if: era.get('flag:初见URA颁奖') > 0
      content: %YOU% recognized the reporter as %CHARA%, who presented the awards each year.
    - The reporter told %YOU% that the name was %CHARA_ACTUAL%.
    - After a brief greeting, she said she looked forward to seeing how %YOU%'s team would perform.

# @author 黑奴队长（临时）
# @author Katze (translator)
rec_1:
  title: Dedicated Reporter
  lines:
    - %YOU% unexpectedly ran into %CHARA% at the academy gates.
    - %CHARA% called out a greeting, and %YOU% walked over.
    - %CHARA% explained that, thanks to %YOU%'s recent exploits, %CHARA% had become the dedicated reporter for %YOU%'s team.
    - With greater access from %YOU%, she could publicize more of %YOU%'s achievements and help contain any bad press.
    - As she said this, %CHARA% broke into a broad smile.
    - (I should be able to find her in the reception room from now on.)

rec_2:
  - Smiling, %CHARA% promised to promote %YOU%'s good deeds and soften the impact of any notoriety from now on.
  - if: era.get('love:303') >= 75
    content: In exchange... she gently caressed %YOU%'s hand and gave a wink.
  - if: era.get('love:303') < 75
    lines:
      - In exchange... she asked for closer access to %YOU%'s team, provided she did not interfere with training.
      - if: era.get('love:303') >= 50
        content: After sealing the deal with a handshake, %CHARA% slowly rubbed her palm, lost in thought.
      - if: era.get('love:303') < 50
        content: After sealing the deal with a handshake, %CHARA% flashed a sly, self-satisfied grin.
