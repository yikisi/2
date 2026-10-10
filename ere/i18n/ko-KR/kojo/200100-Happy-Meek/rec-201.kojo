# @file ハッピーミーク - 募集
# @author 黒奴隊長（仮）
# @author Claude (翻訳)
rec:
  # CFLAGNAME:49 = 育成回数
  # K_NAME = 桐生院葵
  - if: era.get('cflag:201:49') === 0
    content: "%K_NAME%의 소개로 %YOU%와 %CHARA%는 알게 되었고, 앞으로의 소중한 3년을 함께할 파트너로서 첫걸음을 내디뎠다."
  - if: era.get('cflag:201:49') > 0
    content: "%YOU%와 %CHARA%는 다시 나란히 섰다. 앞으로의 3년 동안 다가올 도전을 하나씩 마주해 나갈 것이다."
  - "（%CHARA%와 함께 G1에서 최대한 많이 우승하자……）"
