训练:
  - if: era.get('base:64:体力') < era.get('maxbase:64:体力') * 0.45
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「呀，就算是善信%小姐%也有极限的啦……」
      - %善信% 有点无奈的苦笑，却没有停下准备的动作。
  - if: era.get('base:64:体力') >= era.get('maxbase:64:体力') * 0.45
    random: true
    lines:
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「怎么样，训练员？今天的善信%小姐%可是火力全开哦！」
          - 微微俯身在起点，眼睛透出认真的目光。
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「我现在超兴奋的……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「如果用高尔夫来比喻的话，就是绝对能打出超高分！」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「现在的我仿佛可以一直跑下去。」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「我要用爆速……不对，是用神速一直领跑下去！」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「嗯～大家都在努力呢～」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「看见这样的情况，连我都嗨起来了……很好！」
      - if: era.get('cflag:64:干劲') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「哼哼～精神状态绝佳！」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「开始今天的训练吧！」
      - if: era.get('cflag:64:干劲') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「哦呀，训练时间了吗？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「那就全力的加油跑吧！」
      - if: era.get('cflag:64:干劲') < 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「偶尔……会想着干脆放空脑袋埋头挖地洞呢～」
          - 有点微妙的发出了轻飘飘的声音，一晃一晃的
      - if: era.get('cflag:64:育成回合计时') > 47 + 24
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「感觉嗨的不行了……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「为了更加的嗨起来，拜托你了，%称呼%！」

加练:
  - 训练时间结束，周围却还有其他的%马娘%在准备加练的声音。
  - %善信% 的耳朵听着周边的动静，饶有兴趣的抖了抖。
  - 虽然因为训练计划这个时候就应该休息了，但既然 %善信% 那么想去的话……
  - acc: 1
    content: 「想去的话就去吧。」
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「收到！那我就过去啦！」
      - %善信% 带着笑容跑回了训练场，毫无违和的加入了训练当中。
      - 这下不得不加班了呢。
  - acc: 2
    content: 「下次我们也这样吧。」
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「了解！那今天我就尽情休息咯。」
      - %善信% 抱着后脑，顺便用手肘稍微敲打了一下身边的搭档。

训练失败:
  - 训练出了一点点小小的意外……
  - 紧急送往保健室之后让 %善信% 躺平在床上，这才放下心来。
  - %善信% 看着身旁正在担心的 %T%，不自觉的轻笑了起来。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「啊哈哈，不用担心啦，善信%小姐%身体还是很结实的啦。」
  - acc: 1
    content: 「这可不行，你给我好好休息」
  - acc: 2
    content: 「你自己愿意相信自己的身体比什么都重要」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「嗯，说的是呢。」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「别担心，很快就可以下来的啦。」
  - 抬起手，轻轻的往 %T% 的胸口敲了一下。