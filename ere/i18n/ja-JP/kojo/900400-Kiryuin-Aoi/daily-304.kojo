# @file 桐生院葵 - 日常
# @author 黑奴队长（临时）
# @author Claude (翻訳)
npc_talk_about_meek_in_edu:
  - if: d.debuff > 0
    content: %YOU% は %CHARA% としばらく話し合い、%H_NAME% への理解を深めた。
  - if: '!d.debuff'
    content: %CHARA% は、もう %YOU% に伝える新しい情報はないと言う。

npc_talk_about_meek:
  - %CHARA% は、特に変わったことはないと言う。
  - ただ、もし %YOU% が%H_UMA%に二度目の機会を与える方法を見つけたら、どうか %H_NAME% の悔いを晴らしてほしい、と付け加えた。
