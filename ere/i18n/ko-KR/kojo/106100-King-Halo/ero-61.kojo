# @file キングヘイロー - 調教
# @author 牛蛙煲
# @author Claude (翻訳)
ero_start:
  - if: era.get('tflag:强奸') === 0 && era.get('love:61') < 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「무, 무슨 소리를 하는 거야!」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「꺄아아아아악!」"
  - if: era.get('love:61') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「잠깐! 너, 너무 대담한 거 아니야?」"
      - "킹 헤일로의 목소리는 한층 높아졌지만 %SEX%의 몸은 거부할 기색이 없었다."
  - if: era.get('love:61') >= 75
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 그렇게 큰 소리로 말하지 마!」"
  - if: era.get('love:61') >= 90
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「좋아, 시작하자. 일류 %UMA%는 어디서든 일류니까!」"
