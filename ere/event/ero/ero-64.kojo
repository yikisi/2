调教开始:
  - if: era.get('tflag:强奸') === 0
    random: true
    lines:
      - if: era.get('love:64') < 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「唉？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「和我做那种事情？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「不可以这样啊%称呼%，那个……我，我先走了……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「啊！」
      - if: era.get('love:64') >= 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「不行，这样的话……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「不要过来……%称呼%❤」
  - if: era.get('tflag:强奸') === -1
    random: true
    lines:
      - if: era.get('love:64') < 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「那个，做这种事情的话，就算是%称呼%……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「……不过我会听的啦，如果是命令的话……」
      - if: era.get('love:64') >= 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「要做吗？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「那个，会害羞……不，没关系！」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「只要是%称呼%的话……」

加入房事:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「为什么，%称呼%……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「明明我也是……也是想要的……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「……还是说，我来的不是时候吗？」
  - acc: 1
    content: 「你来的正是时候」
  - acc: 2
    content: 「这可不行……」

加入房事接受:
  - %善信% 红着眼眶，扑倒在 %T% 的怀里陶醉的呼吸着。
  - 再次抬起脸的时候，眼神早已带着模糊的热气……

加入房事拒绝:
  - %善信% 的表情从期待变成了阴暗，把失落收进了下垂的刘海里。
  - 对着 %T% 勉强挤出笑脸，尴尬又落寞的离去了。

加入房事强上:
  - 无视了 %T% 想要拒绝的声音，一口气抓住了衣领。
  - 用力的拉倒自己的面前，强硬的亲吻着。
  - 松开口的时候，%善信% 已经脱下了衣服，在上位无情地看着……

夜袭:
  - 睡梦之中，被身下传来的猛烈刺激唤回了意识。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「哈啊，%称呼%，%称呼%……」
  - if: d.half_life === 1
    random: true
    lines:
      - %善信% 伏在 %T% 的身上，身体随着本能在左右摆动着。
      - 手指轻轻的捏住 %T% 的脸，强硬的向着自己的方向拉住。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「%称呼%，快点……满足我吧……❤」
  - if: d.half_life === 0
    random: true
    lines:
      - %善信% 伏在 %T% 的身上，随着自己的感情和本能不断的摆动着身体。