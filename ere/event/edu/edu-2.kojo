# @file 无声铃鹿 - 育成
# @author 牛蛙煲
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯，%CALLNAME%，尽快开始吧。」
  - %CHARA% 向%YOU%点点头，示意自己一切正常，随时可以开始训练。

train_success:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天的状况也是极佳呢。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我的成绩有进步吗？」
        - %YOU%向 %CHARA% 竖起了大拇指。
        - %CHARA% 颇为开心地笑了一下。

train_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哎呀！」
  - 远处的%YOU%看到铃鹿突然摔倒，急忙跑过去将%SEX%搀扶起来。
  - acc: 1
    content: 「铃鹿你感觉怎么样？有没有哪里特别疼？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「倒没有特别疼，只是感觉身体有点僵硬，腿也有些沉……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是绝对没有受伤！我还可以接着训练……嘶！」
  - %YOU%看了看铃鹿坚定的表情和已经快要站不稳的身形，叹了口气。
  - acc: 1
    content: 「对不起铃鹿，我不该勉强你的。我们去医务室吧。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%没关系的，我没问题的，还能接着……」
  - acc: 1
    content: 「如果你真的出了什么问题，我会内疚一辈子的。」
  - 见状，铃鹿不再坚持，低着头顺从地被%YOU%搀扶着去了医务室。

train_additional:
  - acc: 1
    content: 「铃鹿，可以休息了哦。」
  - %YOU%抛了抛手中的秒表，向刚刚跑完一轮的铃鹿说道。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「诶，原来已经这么晚了吗？」
  - %YOU%看着有些意外的铃鹿，有些无奈。
  - acc: 1
    content: 「是的，已经这么晚了，就请你回去好好休息吧？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那个，%CALLNAME%？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我还没有跑够呢，请问能让我再跑一圈吗？就一圈！」
  - 看着眼巴巴望着%YOU%的 %CHARA%，%YOU%决定——
  - acc: 1
    key: train
    content: 「好吧，就一圈。」
    lines:
      - 得到了%YOU%的许可之后，铃鹿小小地欢呼了一声。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「谢谢%CALLNAME%！那么我要开始了哦~」
      - %YOU%看着铃鹿如同流星一样疾驰的背影，有些出神。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜，还没感受到就跑完了，请再允许我跑一圈……」
      - ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「太阳还没有完全落下，还有时间再来一圈……」
      - ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「真的是最后一圈了，%CALLNAME%……」
      - ……
      - 如此多次，当铃鹿再一次向%YOU%提出请求的时候，%YOU%指了指天上的月亮。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶诶诶？完……完全没有注意到呢……」
      - %YOU%盯着铃鹿笑而不语。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那……那个，拜托不要再盯着我了，我这就回去休息，所以请不要这样子……」
      - 铃鹿被%YOU%盯得有些不好意思，不过总算没有了再跑一圈的想法。
  - acc: 2
    content: 「寝室长会生气的哦。」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜……可是我还没跑够……」
      - %YOU%看着铃鹿的耳朵一会儿耷拉下来一会儿又挺立起来，煞是可爱。
      - acc: 1
        content: 「今天的休息是为了明天能更加精力充沛地训练哦。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好吧，%CALLNAME%，我会去好好休息的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「可是还想跑……跑步回宿舍吧，虽然距离很短……」

race_start:
  - 比赛开始前，%YOU%来到铃鹿的休息室，为%SEX%加油打气。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「状态相当不错，比赛能不能早些开始呢，呵呵。」