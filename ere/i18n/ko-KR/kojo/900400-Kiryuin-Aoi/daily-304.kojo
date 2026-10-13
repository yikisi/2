# @file 桐生院葵 - 日常
# @author 黑奴队长（临时）
# @author Claude (翻訳)
npc_talk_about_meek_in_edu:
  - if: d.debuff > 0
    content: "%YOU%는 %CHARA%와 한동안 이야기를 나누며 %H_NAME%에 대한 이해를 넓혔다."
  - if: '!d.debuff'
    content: "%CHARA%는 이제 %YOU%에게 알려 줄 새로운 정보가 없다고 말했다."

npc_talk_about_meek:
  - "%CHARA%는 특별히 달라진 일은 없다고 말했다."
  - "다만 %YOU%가 %H_UMA%에게 두 번째 기회를 줄 방법을 찾는다면, 부디 %H_NAME%의 아쉬움을 풀어 달라고 덧붙였다."
