# @file 青云天空 - 育成
# @author Wolke

ts_add:
  title: 自主的额外训练
  lines:
    - 在一天的训练结束后，青云天空十分难得的要求加练。
    - %SEX%边调整气息边自言自语道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……昨天那条大鱼……啊啊啊！好可惜！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要再多练！下次……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次一定不会失手！」
    - 难得看到闷着一股劲的青云天空，%YOU%决定：
    - acc: 1
      content: 难得的干劲呢，让我来帮帮你吧
    - acc: 2
      content: 训练还是适度好一点

race_start:
  title: 赛前
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要上场了呢——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员～话说——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我要是一不小心赢了……你会惊讶吗？喵哈哈～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好嘞——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这次就采用『自由自在』的策略，随随便便跑吧～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嘿嘿，逗逗你啦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过……无论我用怎样的跑法，训练员都会支持我的，对吧～」

race_end_win:
  title: 比赛获胜
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「耶！！！计策大成功！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我要吃大餐！睡懒觉！钓大鱼！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这可不是偷懒哦～这是在观察别的对手哦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你会相信的，对吧，喵哈哈～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼啊～没想到我还挺厉害的嘛～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「果然多和猫猫睡午觉有好处。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「决定了！接下来的一星期我要天天和猫猫睡午觉！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「猫猫这么可爱，训练员肯定不舍得打扰我们，对吧，喵哈哈～」

race_end_5:
  title: 比赛上榜
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这回表现还行呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过好可惜啊……就差一点……」
    - 「这次的计策还不坏哦，可能只是差了点时机。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀哈哈～谢谢你，训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次我会用更精彩的策略的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「到时候让你也吓一跳！」

race_end_lose:
  title: 比赛败北
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈～大家还真是厉害呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看来光靠策略完全不够用呢——不论是圈套还是时机……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好！接下来我要好好反省，然后回去加倍训练！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……你以为我会这么说？怎么可能啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要靠策略取胜！这才是小青的风格～」