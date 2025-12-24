end_talk:
  # FLAGNAME:36 = 变态行为
  - if: era.get('flag:36') === 0
    lines:
      # STATUSNAME:100 = 腿伤
      - if: era.get('status:3:100') === 0 && era.get('love:3') < 75
        color: %代表色%
        content:
          - fontWeight: bold
            content: 东海帝王
          - 「是从什么时候开始，眼神错开了呢……」
      - if: era.get('status:3:100') > 0 && era.get('love:3') < 75
        content: 没有说话，东海帝王只是最后看了%你%一眼，蓝黑的瞳孔污秽不堪——就连泪水也无法洗净。
      - if: era.get('status:3:100') === 0 && era.get('love:3') >= 75
        color: %代表色%
        content:
          - fontWeight: bold
            content: 东海帝王
          - 「训练员……不，不管怎样，我永远都会这么叫你的。」
      - if: era.get('status:3:100') > 0 && era.get('love:3') >= 75
        color: %代表色%
        content:
          - fontWeight: bold
            content: 东海帝王
          - 「看来我们一起退场的时候还是到了……终归还是，有点不甘心啊。」
  - if: era.get('flag:36') > 0
    lines:
      - if: era.get('status:3:100') === 0 && era.get('love:3') < 50
        color: %代表色%
        content:
          - fontWeight: bold
            content: 东海帝王
          - 「……同意解约。」
      - if: era.get('status:3:100') === 0 && !d.check && era.get('love:3') >= 50
        color: %代表色%
        content:
          - fontWeight: bold
            content: 东海帝王
          - 「噫欸——被，被发现了吗，那，那么，以后我们就偷偷的……」
      - if: era.get('status:3:100') > 0 && !d.check && era.get('love:3') >= 50
        color: %代表色%
        content:
          - fontWeight: bold
            content: 东海帝王
          - 「不，不可以。我是不会让你这么离开的，你要永远在我的生活和梦想中……」
      - if: d.check === 1 && era.get('love:3') >= 50
        color: %代表色%
        content:
          - fontWeight: bold
            content: 东海帝王
          - 「竟然……竟然是这种结局……不行不行！你以后也得一直待在我身边，不管别人怎么看，你永远都是我的训练员！」