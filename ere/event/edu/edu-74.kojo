train:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是～已经准备好啦～」
      - 依旧是不紧不慢的语调，但准备得却很快。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「和%CALLNAME%一起的话，什么训练都没问题～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，一起加油吧～」
  - if: era.get('love:74') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%%称呼～我们慢悠悠的来吧～」