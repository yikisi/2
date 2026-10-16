# @file サイレンススズカ - 調教
# @author 牛蛙煲
ero_start:
  - if: era.get('tflag:9') === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「안, 안 돼요, %CALLNAME%은(는) 원래 이런 사람이셨나요……」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「꺅!」"
  - if: era.get('tflag:9') === -1
    lines:
      - if: era.get('love:2') >= 50 && era.get('love:2') < 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「그, 그, 만약 %CALLNAME%이라면, 으… 좀 부끄러워……」"
          - "스즈카는 얼굴이 붉어졌지만, %SEX%의 몸은 거부할 기색이 없었다."
      - if: era.get('love:2') >= 75 && era.get('love:2') < 90
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「그래요, 저도 %CALLNAME%이(가) 제일 좋아요. 하지만 그렇게 직접적으로 말씀하시니 저도 좀 당황스럽네요……」"
      - if: era.get('love:2') >= 90
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「%CALLNAME%이(가) 이렇게 적극적으로 나오실 줄이야, 마침 저랑 생각이 딱 맞네요.」"
