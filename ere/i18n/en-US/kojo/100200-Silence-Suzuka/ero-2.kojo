# @file Silence Suzuka - Erotic
# @author 牛蛙煲
# @author Katze (translator)
ero_start:
  - if: era.get('tflag:9') === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「N-Not yet... Was %CALLNAME% always this kind of person...?」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Ah!」
  - if: era.get('tflag:9') === -1
    lines:
      - if: era.get('love:2') >= 50 && era.get('love:2') < 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「U-Um, if it's %CALLNAME%... ngh... it's a little embarrassing...」
          - Suzuka blushes softly, but %SEX% makes no move to pull away.
      - if: era.get('love:2') >= 75 && era.get('love:2') < 90
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「Okay... I love %CALLNAME% the most, too. Still, hearing it put so bluntly catches me off guard...」
      - if: era.get('love:2') >= 90
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「I didn't expect %CALLNAME% to be so forward. What a coincidence... I was thinking the exact same thing.」
