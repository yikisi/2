good_morning:
  sync: true
  lines:
    # 体力值低
    - random: true
      if: era.get('base:0:体力') < era.get('maxbase:0:体力') * 0.45
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「%称呼%……虽然工作很忙，但也请不要忘记休息。」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「请别忘了，我们的『旅途』还有很漫长的时光。」
    - random: true
      if: era.get('base:0:体力') < era.get('maxbase:0:体力') * 0.45
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「%称呼%，今天看上去精神不太好呢……如果有需要的话，工作上也请让我帮些忙吧？」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「……那么，至少让我为您泡杯咖啡吧？」
    - random: true
      if: era.get('base:0:体力') < era.get('maxbase:0:体力') * 0.45
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「%称呼%……」
        - content:
            - color: %代表色%
              fontWeight: bold
              content: 梦之旅
            - ' 没有说话，只是温柔地为 %你% 按摩着。'
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「您的辛苦，虽然我无法完全分担……但请至少，给我治愈您的机会。」
    # 体力值高
    - random: true
      if: era.get('base:0:体力') >= era.get('maxbase:0:体力') * 0.45
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「%称呼% 今天精神也很好呢。」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「今天的『旅途』，想必也是无风无雨。」
    - random: true
      if: era.get('base:0:体力') >= era.get('maxbase:0:体力') * 0.45
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「久等了，%称呼%……呵呵。」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 梦之旅
            - 「笑容……很可爱？……如果 %称呼% 喜欢的话，那么我会尝试多笑一些的。」