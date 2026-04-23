# @file 无声铃鹿 - 调教
# @author 牛蛙煲
ero_start:
  - if: era.get('tflag:9') === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「还、还不行，%CALLNAME%原来是这样的人吗……」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「啊！」
  - if: era.get('tflag:9') === -1
    lines:
      - if: era.get('love:2') >= 50 && era.get('love:2') < 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「那、那个，如果是%CALLNAME%的话，呜……有点害羞……」
          - 铃鹿有些脸红，但%SEX%的身体却没有反对的意图。
      - if: era.get('love:2') >= 75 && era.get('love:2') < 90
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「好啊，我也最喜欢%CALLNAME%了，不过说得这么直接我也是有些困扰的……」
      - if: era.get('love:2') >= 90
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「%CALLNAME%居然这么主动吗，正巧跟我想到一起了呢。」