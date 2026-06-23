# @file 快乐米可 - 招募
# @author 黑奴队长（临时）
rec:
  # CFLAGNAME:49 = 育成次数
  # K_NAME = 桐生院葵
  - if: era.get('cflag:201:49') === 0
    content: 在 %K_NAME% 的引荐下，%YOU% 和 %CHARA% 相互认识了，并将作为搭档开始重要的三年。
  - if: era.get('cflag:201:49') > 0
    content: %YOU% 和 %CHARA% 又一次站在了一起，迎接接下来三年中的每个挑战。
  - （带领 %CHARA% 多多地取得G1比赛的胜利吧……）