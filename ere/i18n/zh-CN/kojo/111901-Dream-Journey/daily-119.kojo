# @file 梦之旅 - 日常
# @author 幽白書
select_after_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？%CALLNAME%……难道您一点都不怕吗？比如，之前的事再度重演。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……呵呵，您，真是个温柔的人呢。」

good_morning:
  sync: true
  lines:
    # 体力值低
    # BASENAME:0 = 体力
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……虽然工作很忙，但也请不要忘记休息。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「请别忘了，我们的『旅途』还有很漫长的时光。」
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，今天看上去精神不太好呢……如果有需要的话，工作上也请让我帮些忙吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……那么，至少让我为您泡杯咖啡吧？」
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - %CHARA% 没有说话，只是温柔地为 %YOU% 按摩着。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「您的辛苦，虽然我无法完全分担……但请至少，给我治愈您的机会。」
    # 体力值高
    - random: true
      if: era.get('base:0:0') >= era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME% 今天精神也很好呢。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天的『旅途』，想必也是无风无雨。」
    - random: true
      if: era.get('base:0:0') >= era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「久等了，%CALLNAME%……呵呵。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「笑容……很可爱？……如果 %CALLNAME% 喜欢的话，那么我会尝试多笑一些的。」

good_morning_after_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么了，%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「脸色，不是很好呢……难道说，太久没接触到外界，对环境反而感到害怕了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不怕，不怕……只要依偎在我身旁……就没什么好怕的了……」

end_talk:
  # FLAGNAME:36 = 变态行为
  - if: era.get('flag:36') === 0
    lines:
      - if: era.get('love:119') < 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，您明白了吗？这就是盲信的结果……请好好歇息吧，我会处理好一切等您回来的。」
      - if: era.get('love:119') >= 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，您明白了吗？这就是盲信的结果……不过，您必然不会就此放弃的吧？我已经准备好接风宴了，随时欢迎您的归来。」
