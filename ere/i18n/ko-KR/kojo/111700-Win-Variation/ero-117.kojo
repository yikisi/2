# @file ウインバリアシオン - 調教
# @author ALEX
# @author Claude (翻訳)
rape_standing:
  - "유연성과 균형감각이 뛰어난 무용수가 눈앞에서 몸을 드러내고 있다."
  - "역시 %UMA%는 유연성도 균형감각도 뛰어나다."
  - "발끝만 바닥에 댄 채 허벅지 안쪽을 쭉 펴고, 오른쪽 다리를 천천히 수평까지 들어 올린다."
  - "옆으로 다리를 들어 올리는 자세를 힘겹게 유지하는 %CALL_117%는 가느다란 허리와 유혹적인 옆엉덩이를 그대로 드러내고 있다."
  - if: era.get('cflag:117:阴毛') >= 1
    content: "음모에 가려진 음부가 팽팽하게 힘을 준 움직임에 맞춰 벌어졌다 오므라들기를 반복한다."
  - if: era.get('cflag:117:阴毛') === 0
    content: "매끄럽고 사랑스러운 음부가 팽팽하게 힘을 준 움직임에 맞춰 벌어졌다 오므라들기를 반복한다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이제 만족하지……쓰레기!」"
  - "아직 한계는 아닌 모양이다. 손을 뻗어 자세를 바로잡고, 수평으로 뻗은 오른쪽 다리를 천천히 더 들어 올린다. 수직으로, 왼쪽 다리와 일직선이 될 때까지."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「마, 만지지 마……」"
  - "육경이 곧장 파고들어 좁고 부드러운 안쪽을 억지로 벌린다. 뜨거운 귀두가 여러 겹으로 꿈틀거리며 조여 오는 살을 무시하고 꽃술에 부딪혔다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……어흑❤️!!」"
