# @file Satake Mei - Recruitment
# @author 黑奴队长（临时）
# @author Katze (translator)

# @author 黑奴队长
# @author Katze (translator)
welcome:
  title: Project L'Arc
  lines:
    # A_NAME = Yayoi Akikawa
    - On the first workday of the week, %YOU% encountered %A_NAME% at the academy. %SEX% was accompanying a %PHY% in a yellow hat.
    - if: d.who_am_i > 0
      lines:
        - %YOU% recognized %SEX% as %CHARA%, an earlier acquaintance.
        - As %YOU% knew, %CHARA% primarily supported overseas expeditions.
    - if: d.who_am_i === 0
      content: When %YOU% approached to say hello, %A_NAME% introduced the %PHY% to %YOU% as %CHARA_ACTUAL%, a longtime supporter of overseas expeditions.
    - %A_NAME% encouraged %YOU% to look beyond racing in Japan toward the world's elite events and lead Japanese %UMA% onto the global stage.

# @author 黑奴队长
# @author Katze (translator)
visit:
  title: Dream of the Arc
  lines:
    - %YOU%'s results overseas deeply inspired %CHARA%.
    - To support %SEX% more directly, speak with %SEX% in the reception room.
