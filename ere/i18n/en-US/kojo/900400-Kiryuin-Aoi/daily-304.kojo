# @file Kiryuin Aoi - Daily
# @author 黑奴队长（临时）
# @author Katze (translator)
npc_talk_about_meek_in_edu:
  - if: d.debuff > 0
    content: %YOU% spoke with %CHARA% for a while and gained a deeper understanding of %H_NAME%.
  - if: '!d.debuff'
    content: %CHARA% had no new information to share with %YOU%.

npc_talk_about_meek:
  - %CHARA% said there was nothing in particular to report.
  - However, she asked %YOU% to help %H_NAME% make up for the past if there was any way to give the %H_UMA% a second chance.
