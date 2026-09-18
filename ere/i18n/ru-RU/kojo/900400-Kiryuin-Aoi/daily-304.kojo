# @file 桐生院葵 - 日常
# @author 黑奴队长（临时）
npc_talk_about_meek_in_edu:
  - if: d.debuff > 0
    content: "%YOU% и %CHARA% немного обсудили дело, и понимание %H_NAME% стало глубже."
  - if: '!d.debuff'
    content: "%CHARA% говорит, что новых сведений для %YOU% у неё больше нет."

npc_talk_about_meek:
  - "%CHARA% говорит, что ничего особенного."
  - "Но при этом добавляет: если %YOU% найдёт способ дать %H_UMA% второй шанс, обязательно помоги %H_NAME% забрать упущенное."