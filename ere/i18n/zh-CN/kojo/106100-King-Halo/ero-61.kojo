# @file 圣王光环 - 调教
# @author 牛蛙煲
ero_start:
  - if: era.get('tflag:强奸') === 0 && era.get('love:61') < 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「你、你在说什么呢！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「呀啊啊啊啊啊！」
  - if: era.get('love:61') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「喂！你、你是不是有点大胆了？」
      - 圣王光环声音高了几度，但%SEX%的身体却没有反对的意图。
  - if: era.get('love:61') >= 75
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%不要说得这么大声啊！」
  - if: era.get('love:61') >= 90
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「那就来吧，一流的%UMA%无论在哪都是一流的！」
