end_talk:
  # FLAGNAME:36 = 变态行为
  - if: era.get('flag:36') === 0
    lines:
      # CFLAGNAME:52 = 育成用变量
      - if: "!era.get('cflag:32:52')?.plan_b && era.get('love:25') < 75"
        color: %代表色%
        content:
          - fontWeight: bold
            content: 曼城茶座
          - 「就这么远离我、远离它们……对你而言也是一件好事吧……」
      - if: era.get('cflag:32:52')?.plan_b > 0 && era.get('love:25') < 75
        color: %代表色%
        content:
          - fontWeight: bold
            content: 曼城茶座
          - 「忽视我们的约定，把视线投向麻烦的人……结局就是如此……」
      - if: era.get('love:25') >= 75
        color: %代表色%
        content:
          - fontWeight: bold
            content: 曼城茶座
          - 「去开一家咖啡店如何……？等一切结束后，我会去找你的。」
  - if: era.get('flag:36') > 0
    lines:
      - if: "!era.get('cflag:32:52')?.plan_b && era.get('love:25') < 75"
        color: %代表色%
        content:
          - fontWeight: bold
            content: 曼城茶座
          - 「之后也请务必小心……它们，还在你身边……」
      - if: era.get('cflag:32:52')?.plan_b > 0 && era.get('love:25') < 75
        color: %代表色%
        content:
          - fontWeight: bold
            content: 曼城茶座
          - 「想要以此摆脱我们的约定吗……？……你逃不掉的，不论是我，还是%她%……」
      - if: era.get('love:25') >= 75
        color: %代表色%
        content:
          - fontWeight: bold
            content: 曼城茶座
          - 「频率上，果然还是太多了吧……朋友也是这么认为的……」
