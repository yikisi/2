# @file セイウンスカイ - 調教
# @author Wolke
# @author Claude (翻訳)

# 招待して泊まったあと、ターン終了時に確率で発動
with_you:
  title: "당신 곁에서"
  lines:
    - "아침 햇살이 얇은 커튼을 통과해 방 안으로 부드럽게 내려앉는다."
    - "귓가에서 고른 숨소리가 나직이 오르내린다. 따뜻한 아침 햇살 속에서 %YOU%의 흐릿한 의식이 서서히 또렷해진다."
    - "지난밤 %YOU%와(과) 함께한 상대는 느긋하게 %YOU%의 품에 얼굴을 묻고 빈틈없이 붙어 있다."
    - "무방비한 세이운 스카이를 보자 %YOU%의 머릿속에 장난스러운 생각이 떠오른다."
    - acc: 1
      key: sex
      content: "입을 맞춘다"
    - acc: 2
      content: "그만둔다"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으음~~ 좋은 아침이에요~~ 트레이너 쌤~~」"
        - "그러고는 어리광을 부리듯 몸을 비틀며 다시 %YOU%의 품으로 파고든다."
