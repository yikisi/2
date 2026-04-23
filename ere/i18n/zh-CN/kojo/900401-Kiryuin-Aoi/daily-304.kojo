# @file 桐生院葵 - 日常
# @author 黑奴队长（临时）
npc_talk_about_meek_in_edu:
  - if: d.debuff > 0
    content: %YOU% 与 %CHARA% 讨论了一会，增进了对 %H_NAME% 的理解。
  - if: '!d.debuff'
    content: %CHARA% 表示已经没有什么新情报可以和 %YOU% 分享了。

npc_talk_about_meek:
  - %CHARA% 表示没什么特别。
  - 但她同时表示，如果 %YOU% 找到了让%H_UMA%获得第二次机会的方法，请一定要帮 %H_NAME% 挽回遗憾。