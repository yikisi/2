# @file 青云天空 - 日常
# @author Wolke

good_morning:
  sync: true
  lines:
    - if: era.get('cflag:20:育成用变量')?.jess > 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早，训练员，今天的任务是什么……」
    - if: "!(era.get('cflag:20:育成用变量')?.jess)"
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「早上好～今天也悠闲适度，且随意地度过一天吧 (^ ･ ω ･ ^ =) ~」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「训练员！一大早就发生奇迹了！小青居然早起来学校了！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「训练员早——我出来了——我醒了——我可以回去了吗？」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「早啊～训练员，我今天没睡懒觉哦——好吧～但只睡了十分钟。」
        - if: era.get('status:20:熬夜') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「好困……昨晚夜钓的太晚了？」
        - if: era.get('status:20:熬夜') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「哈啊……看来白天要补补觉了……」

select:
  sync: true
  lines:
    - if: era.get('cflag:20:育成用变量')?.jess > 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一步的安排是什么……」
    - if: "!(era.get('cflag:20:育成用变量')?.jess)"
      lines:
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「不要急，不要急～按自己的节奏慢慢来吧。」
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「差不多的人生才是最好的——」
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「训练员，我们去钓鱼吧，钓鱼～ (/ = ^ ･ ω ･ ^ =)/ 」
        - if: era.get('status:20:沉睡') > 0 || era.get('status:20:马跳S') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「(= ˘ ω ˘ =) ~ Z—Z—Z——」
