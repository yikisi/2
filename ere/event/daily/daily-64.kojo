地下室逃脱:
  sync: true
  lines:
    - if: d.half_life === 1
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 目白善信
            - 「我在这里很奇怪吗，%称呼%？」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 目白善信
            - 「除了%称呼%的身边……我已经不知道能去哪里了……」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 目白善信
            - 「只要能在%称呼%身边……」
    - if: d.half_life === 0
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 目白善信
            - 「呀，%称呼%。」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 目白善信
            - 「……抱歉呢，做了那样的事情，就算不被原谅也是正常的吧……」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 目白善信
            - 「但我还是……想要在你的身边。」

指导学习:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哎，是这样的吗？不愧是%称呼%。」
      - 目白善信 很开心地把答案写好，也没忘向着身边的 %T% 比起了大拇指。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「OKOK，我了解了！」
      - 目白善信 似乎是理解了什么，流畅地解决了剩下的问题。

加餐:
  - if: d.half_life === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「安心吧，善信%小姐%还是很擅长做饭的哦！」
      - 目白善信 似乎很熟练的样子，朝 %T% 摆了摆手。
  - if: d.half_life === 0 && era.get('love:64') >= 50 && era.get('love:64') < 90
    random: true
    lines:
      - 两个人不知不觉中搭配着做好了午饭，似乎自己也没有察觉到这天衣无缝的配合。
      - 直到都坐下准备开始享用的时候，两个人才想起来刚才的事情。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （总感觉……像是夫妇一样……错觉吗？）
  - if: d.half_life === 0 && era.get('love:64') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「善信%小姐%的手艺，%称呼%你就瞧好了吧～」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （不知道合不合%称呼%的口味呢～）
  - if: d.half_life === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「先抓住%称呼%的胃，就能继续……」
      - 用 %T% 听不见的声音，喃喃自语着。

赛前准备:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「好嘞，就这样全力逃跑吧！」
      - 目白善信 捏紧了拳头，带着气势大喊了出来。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「蹄铁全都钉好了啊，谢谢你，%称呼%！」
      - 目白善信 有些惊讶，但脸上浮现出的是温暖的笑容。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哎呀～不至于这样紧张吧，训练员？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不过我会做好所有事的，因为我不想让胜利从手里逃走嘛！」

小憩:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「偶尔，一起逃离外面的世界也不错呢……」
  - random: true
    lines:
      - 安静的躺在一起，默默享受属于两个人的幽静空间
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「嘶呀……」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「和%称呼%在一起的时光……真是令人安心呢」
  - if: era.get('love:64') === 100
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「嘶哈嘶哈……训练员的味道……啊！什么都没有！」

聊天:
  - if: era.get('status:64:沉睡') > 0 || era.get('status:64:马跳S') > 0
    lines:
      - if: d.half_life === 1
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%称呼% 的味道……还要……在哪里……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「不会……让你走的哦……呼呼～」
      - if: d.half_life === 0
        lines:
          - random: true
            lines:
              - color: %代表色%
                content:
                  - fontWeight: bold
                    content: 目白善信
                  - 「呼……已经吃不下了……」
          - if: era.get('love:64') >= 50
            random: true
            lines:
              - color: %代表色%
                content:
                  - fontWeight: bold
                    content: 目白善信
                  - 「呼啊……%称呼% 的味道……嘿嘿……」
  - if: era.get('status:64:沉睡') === 0 && era.get('status:64:马跳S') === 0
    lines:
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「偶尔也试试看一起逃去更远的地方怎么样？」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「要试试看打高尔夫吗？善信%小姐%可以教你哦！」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('base:64:体力') < era.get('maxbase:64:体力') * 0.45
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「呃……疲劳的感觉没法逃掉啊……甚至想请假了啊……」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:干劲') < 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「好奇怪啊……脚好重……」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:干劲') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「准备完全！无论什么样的训练我都可以做好哦，所以就放开来吧，%称呼%！」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('status:64:发胖') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「不妙，好像吃的有点多了耶……」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 71
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%善信称呼阿尔丹%的方法感觉还是轻了点呢～要不要下次请%她%更严格点？」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 71 && era.get('love:71') >= 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「总感觉%善信称呼阿尔丹%不是很认真的样子，错觉吗？」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 71 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「最近%善信称呼阿尔丹%……总是心不在焉呢……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「那个，%称呼%，能不能由你全部接下来呢？」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 71 && era.get('love:64') >= 50 && era.get('love:71') >= 50 && era.get('relation:64:71') > 225
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「我说啊，什么时候让我和%善信称呼阿尔丹%一起跑一次？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「等到训练结束完之后，就一起回去什么的……」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 86
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「不妙，%善信称呼高峰%的训练超级严格……！」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('love:64') >= 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「总感觉，最近一下就闲下来了唉……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%称呼%～带我一起去学园嘛～」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 59 && era.get('cflag:0:性别') === 1 && era.get('cflag:59:性别') !== 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%善信称呼多伯%还是老样子呢，对男性怯怯的。」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「但是安心吧，必要的训练就交给我！」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 65
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%善信称呼太阳神%给人的感觉果然超——热情！感觉都不像我在照顾%她%了呢。」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 65 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「果然，%善信称呼太阳神%%她%是太阳啊，好耀眼……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「嗯？难道说……%称呼%你吃醋了？」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 74
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%善信称呼光明%%她%果然……很努力呢。」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「和平时慢悠悠的样子，完全不一样呢」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 74
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「果然%善信称呼光明%还是很纯粹呢……虽然还是会迷迷糊糊就跑过头啦。」
      - if: d.half_life === 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%称呼%是，不会抛弃我的对吧？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「就算是，就算是有了其他人……」
      - if: era.get('love:64') >= 50 && era.get('love:64') < 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「偶尔会觉得，没有%称呼%你在的话我肯定没法像现在这样笑吧……没有没有！当我没说过啦！」
      - if: era.get('love:64') >= 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「呐，%称呼%什么时候和我一起回目白家试试呢？」
      - if: era.get('love:64') === 100
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%称呼%会一直是我的『训练员』的，对吧？」
      - if: (era.get('cflag:64:妊娠阶段') >> 2) > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「最近食欲不是很好呢……啊，肚子肯定没关系的！」
      - if: d.half_life === 0 && era.get('cflag:59:招募状态') === 1 && era.get('cflag:0:性别') === 1 && era.get('cflag:59:性别') !== 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%善信称呼多伯%对男性一直都应付不了，给你添麻烦了……」
      - if: d.half_life === 0 && era.get('cflag:65:招募状态') === 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「%善信称呼太阳神%又在说我听不懂的话了……不过我会全部搞懂的！」
      - if: d.half_life === 0 && era.get('cflag:74:招募状态') === 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「以前我经常帮%善信称呼光明%打理头发呢～不过现在要麻烦%称呼%了呢。」

玩游戏:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我还是很擅长玩游戏的哦，哼哼～」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「善信%小姐%可不会一下就输了哦，你就看好吧%称呼%！」
      - 目白善信 很认真地看着游戏画面，满脸充满求胜心的样子。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「和%称呼%一起玩什么都可以哦，哎嘿～」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哦哦，这个游戏！以前在家里的时候经常和%善信称呼莱恩%一起玩呢！」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「唉，明明现在有空闲的……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「%称呼%，只是想和善信%小姐%玩游戏吗？」

送礼物:
  - if: d.half_life === 0
    lines:
      - if: era.get('love:64') < 25
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「礼物？给我的吗？那个……我高兴哦！真的！」
          - 目白善信 似乎很惊讶的样子。
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「谢谢！我会万般珍重的！超级谢谢你，%称呼%！」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「多谢，这礼物超棒的唉！总有一天我也会给你回礼的哟！」
      - if: era.get('love:64') >= 74
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「这个礼物会是我想要的那种吗……不是！没有！我很高兴的！」
          - 目白善信 有点扭扭捏捏的样子，只是没听见%她%刚才说的是什么。
  - if: d.half_life === 1
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「这是给我的礼物吗……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我会好好珍惜的……」
      - 目白善信 用力地抱着怀里的礼物，眼角涌上了一阵水雾。

主界面:
  sync: true
  lines:
    - if: era.get('status:64:沉睡') === 0 && era.get('status:64:马跳S') === 0
      lines:
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「今天的善信%小姐%也是元气满满哦！训练的事情就一口气解决吧！」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「是%称呼%你让我意识到了跑出自己的跑法有多重要哦，一直以来多谢啦！」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「有什么事情都可以和善信%小姐%说哦！啊，虽然只是我想和你说话啦～」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「最近大家都经常找我聊天呢，虽然我也无所谓啦……到不如说很欢迎！」
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「最近，%善信称呼太阳神%%她%啊……我说啊，%称呼%，你有听我说话吗？」
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「果然逃跑的感觉最棒了啊……今天也要一起逃跑吗，%称呼%？」
        - if: era.get('love:64') >= 50
          random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「%称呼%什么时候有空呢？我想和你一起出门……什么的……」
        - if: era.get('love:64') === 100
          random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「%称呼%你会一直陪我的……对吧？」
    - if: era.get('status:64:沉睡') > 0 || era.get('status:64:马跳S') > 0
      lines:
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「呼……呼……」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「已经吃不下了啦……哎嘿嘿……」

枯树洞:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「果然逃跑的感觉最棒了！！绝对不要停下了啊！！」
      - 看着 目白善信 朝着树洞喊完之后清爽的笑脸，%T% 心里暗自决定了一定要一直支持%她%。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「绝对！要赢啊！比赛也好，什么都好！」
      - 虽然 %T% 听的有点云里雾里，但是看见 目白善信 的笑脸之后也没再想太多。

中庭约会:
  - if: d.half_life === 0
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那个，约会的事情在这里还是有点……对吧？」
      - 目白善信 似乎很在意的样子，不过拉着的手一点也没有松开的样子。
  - if: d.half_life === 1
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「约会呢……」
      - 目白善信 紧紧抱着 %T% 的手臂，不管周围视线亲近的将脸贴在肩头。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「嗯哼～」

天台:
  - if: d.check > 0
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「平时的天台没什么人呢，这算不算也是一种约会呢……嘿嘿。」
      - 看着 目白善信 挠着脸不知道在碎碎念什么的样子，%T% 只是给%她%的便当盒夹去了一块章鱼香肠。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「唉！你听见了吗！」
      - acc: 1
        content: 「没听见哦」
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「唉！那个……是真的吗？」
          - 目白善信 满脸绯红，低着头无言地吃着自己的便当。
      - acc: 2
        content: 「……」（爱慕+1）
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「你，你说话呀，%称呼%！」
          - 目白善信 鼓起红透的脸，小拳头猛砸着 %T% 的肩膀。
  - if: !d.check
    lines:
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「果然天台上的风景很好呢！」
          - 在天台上一边看着风景，一边分享着自己的便当。
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「真好吃！%称呼%的手艺超厉害！」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「天台的风景很好对吧？我时不时就会上来散心哦！」

钓鱼:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「交给我吧……！以前的善信%小姐%很擅长这些事情哦！」
      - 目白善信 卷起长袖，对着面前的鱼竿跃跃欲试的样子。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「令人怀念～以前也经常这样远足呢～」
      - 目白善信 抛出鱼竿，看着水面上平静的浮标随意地聊了起来。

散步:
  - random: true
    lines:
      - 两个人放空思绪慢慢走在河堤边上。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「偶尔慢下来好像也不错嘛……」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - 看着周围空无一人的河堤，目白善信 默默的贴近了 %T% 的身边。
      - 「那个，%T称呼善信%？」
      - 看着贴在自己手臂上的 目白善信，心里稍微有些激动。
      - 目白善信 像是没听见一样，一言不发的伸手抱住了 %T% 的手臂，把自己贴了上来。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「就这样……可以吗？」

街机厅:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哦哦，有我的人偶！%称呼%%称呼%，我想要试试看！」
      - 目白善信 指着娃娃机的人偶，拉着 %T% 一路小跑过去了。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「以前我还经常和%姐妹%们玩这个哦，%称呼% 你可要小心了哟？」
      - 对着眼前的街机，目白善信 似乎连眼神都在闪光。

抽奖:
  - random: true
    lines:
      - 好像最近没有抽奖的活动呢……
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「没关系哟，有机会的话一定会再来的！」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呀，今天也没有抽奖呢……」

卡拉OK:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我时不时就会和朋友们来这里呢，毕竟这里很适合放松嘛。」
      - 目白善信 的脸上是一如既往的轻松笑容，连带着 %T% 也放松了下来。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「音乐果然能令人高兴起来呢，%称呼%！」
      - 目白善信 似乎是很开心的样子，随着音乐跳动着。

电影:
  - if: era.get('cflag:71:招募状态') !== 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊，那是%善信称呼阿尔丹%推荐过的电影唉！」
  - if: era.get('cflag:71:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊，那是%善信称呼阿尔丹%推荐的电影！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「没有和%善信称呼阿尔丹%一起来真是可惜呢……下次三个人一起来怎么样？」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「很久没看电影了耶，要看点什么呢……」
      - 目白善信 对着电影院的海报，上下端详了一阵。
  - if: era.get('love:64') >= 25 && era.get('love:64') < 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那个，%称呼% 啊……你喜欢看恋爱系的电影吗？」
      - 目白善信 有些拘谨的样子，似乎是在期待什么。
  - if: era.get('love:64') >= 50 && era.get('love:64') < 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「两个人一起来看电影什么的，总感觉有其他的意思呢……」
      - 目白善信 在一旁碎碎念了一阵，不过牵着 %T% 的手却是握的更紧。

神社:
  - 特雷森附近的神社虽然规模不大，但是在%马娘%之间却相当有名气。
  - 不少%马娘%在出赛之前都会专门来到这里，带着一点期望去试试看抽签。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「偶尔来试试运气什么的，感觉也不错呢。」
  - 目白善信 是擅长逃跑的性子，想逃离什么的时候会随着心情拉着 %T% 来试试看运气。
  - 来到这里的时候总会有一种放松的感觉，对于她而言这或许也是逃跑的一环吧。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总感觉……在这里的时候会忘记掉很多事情呢。」
  - 目白善信 抱着头，一幅放松的模样大大咧咧的走在 %T% 的身边。
  - 神社里没什么人，微风扫过周围的树枝，吹在脸上的感觉相当舒适。
  - 看着眼前的签筒，目白善信 默默的戳了一下身边的 %T%，摆出一幅无所谓的姿态。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员要抽吗？说不定会是大吉哦。」
  - 一边有些开玩笑的说着，一边指向前方。
  - acc: 1
    content: 「这可是%T称呼善信%你的好运哦，我怎么能随便插手呢。」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我的好运嘛……那我要抽了哟！」
  - 目白善信 对着 %T% 点点头，转身对着神社合起了手。
  - 闭眼一阵后，拿起了签。
  - if: d.dice === 1
    lines:
      - 纸上字迹清晰的吉，像是在宣告今天的好运。
      - acc: 1
        content: 「你的好运来了哦～」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「嗯嗯，今天确实是运气不错呢。」
      - 放下手里的签纸，转过来抓住了 %T% 的手。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「也要谢谢%称呼%呢……毕竟这应该是我们的好运嘛。」
      - 看着这张高兴的脸，不知不觉中 %T% 也跟着 目白善信 一起笑了起来。
  - if: d.dice === 0
    lines:
      - 翻开签纸，却没有看见大吉。
      - 看着纸上的凶，目白善信 有点尴尬的避开了 %T% 的眼神。
      - acc: 1
        content: 「运气是守恒的嘛，明天就会变成好运了。」
      - 目白善信 有些失落地转过来面向 %T%，移开了视线。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「怎么办啊，今天这个……」
      - 似乎有些紧张的样子，手指不住地乱动着。
      - 看着不安的 目白善信，%T% 只能抬起手轻轻的揉着%她%轻柔的头发。
      - acc: 1
        content: 「没关系的。」
      - 目白善信 什么都没说，只有一跳一跳的耳朵在表示心情。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「谢谢……」
      - 声音很小，但是在空旷的神社里却显得相当清晰。

车站吃饭:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「要一起去吃点什么吗？我知道很多超好吃的店哦！」
      - 目白善信 很热情的拉着 %T%，一路小跑着。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哼哼～善信小姐可是很擅长发现美食的哦」
      - 目白善信 撑着腰，很骄傲的对着两人面前正在散发香味的套餐。
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - 坐在店里看着对方的脸，两个人噗哧一声笑了起来。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「果然不太适合这样啊，我们俩。」
      - 两个人压着笑声，拿起了餐具。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「约会什么的，真不该选这里呢……」
      - acc: 1
        content: 「怎么了？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「没事！只是……」
      - 看着 %T% 的表情，目白善信 有点激动的心情又平静了下来。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「吃完了能再陪我一会吗，%称呼%？」

车站约会:
  - if: d.half_life === 0
    lines:
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「我，我说%称呼%，在这里约会什么的……」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「和%称呼%在一起的时候，不会感觉到害羞什么的呢……」
          - 目白善信贴在 %T% 的身边，稍微朝着身旁歪头靠着 %T% 的肩膀。
      - if: era.get('cflag:64:性别') !== 1
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「在其他人的眼里，我们应该是普通的情侣对吧。」
          - 贴在身边用只有 %T% 能听见的声音，轻轻咬着耳朵。
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「稍微过分一点……也不会有人发现的吧？」
          - 双手紧紧抓着手臂，压在 目白善信 软乎乎的胸脯上。
  - if: d.half_life === 1
    lines:
      - 不知为何，目白善信 一直紧紧抓着 %T% 的手，完全没有松开的意思。
      - 虽然一直享受着柔软的体感，完全没有难过的感觉。
      - 直到周围的路人少了很多之后，抓紧的手才松开了一点。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「虽然，不知道为什么……感觉松开的话，%称呼%就会从我的身边离开了……」
      - 用着其他人听不见的声音，靠着 %T% 的肩膀悄悄说着。

商店:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哎嘿，这个和%称呼%你很配耶！」
      - 目白善信 往 %T% 身上对照了半天，带着有些恶作剧的笑脸挂上了什么。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「%称呼%你看这个，超好吃的！」
      - 不知为何，来到商场附近的第一件事情就是找到了小吃。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「%称呼%你想要买什么？我也可以送你点东西哦！」
      - 目白善信 有点兴奋在 %T% 的面前一蹦一跳的看着。
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「说起来，%称呼%你家里缺了这个吧？我可以买给你的哟。」
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「%称呼%你家里有这个的话，我能过来玩吗？」
      - 目白善信 的眼睛里闪着光，似乎是完全没在意门禁的事情。

晚安:
  sync: true
  lines:
    - if: era.get('status:0:沉睡') === 0 && era.get('status:64:沉睡') === 0 && era.get('status:64:马跳S') === 0
      lines:
        - random: true
          lines:
            - 目白善信 迈着欢快的步伐，向着送自己回到宿舍 %T% 打着招呼。
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「明天还会再见的对吧？再会啦！」
        - random: true
          lines:
            - 繁忙的一天过去之后，把同样累的快要趴下的 目白善信 送回了宿舍。
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: 目白善信
                - 「嗯……好像稍微努力过度了点啊，嘿嘿～」
    - if: era.get('status:0:沉睡') === 0 && (era.get('status:64:沉睡') > 0 || era.get('status:64:马跳S') > 0)
      lines:
        - 看着正在沉睡的目白善信，完全做不到主动去叫醒%她%，只能辛苦一下把%她%送回宿舍了。
        - 这个时候耍坏的话，%她%会不会醒过来呢？
    - if: era.get('status:0:沉睡') > 0
      lines:
        - 陷入沉睡中的 %T% 在朦胧中似乎看见了目白善信想要动手却又犹豫不决的样子，最后留下的只有一声亲切又温柔的道别声。

晚安求爱:
  - 将 目白善信 送回宿舍之后，却被轻轻拉了一下袖子。
  - 站在 %T% 身后的 目白善信 有些口齿不清，但却能听见清楚的最后的声音。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「外宿之类的事情，我会处理的，所以……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我……可以逃到%称呼%的身边吗？」
  - acc: 1
    content: 「可以哦。」
    lines:
      - 外宿的申请已经无所谓了，现在已经有了更加重要的事情……
      - 就是带着粘在手臂上不肯松手的 目白善信 回家。
  - acc: 2
    content: 「别那么任性。」
    lines:
      - if: d.check === 2
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「但是……」
          - 客观来看，%马娘%的力气比一般人要大得多……
          - 自然也能轻松的抓住现在的 %T%。
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「不去做的话，怎么叫做任性呢？」
      - if: d.check !== 2
        lines:
          - 目白善信 的表情从期待变成了阴暗，把失落收进了下垂的刘海里。
          - 转过身乖巧的走进了宿舍，却在门口又偷偷看了一眼 %T% 的身影，这才低着头消失在拐角里。

读档对话:
  - if: (era.get('cflag:64:妊娠阶段') !== 2 && !era.get('cflag:64:扩展变量').report) || era.get('exp:64:生产次数') > 0
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「是这样吗……没关系哦……善信%小姐%什么都懂的。」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「肯定是我的问题吧……啊哈哈……」
      - color: %代表色%
        fontSize: 0.75rem
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我明白的啊……」

要变成蜗牛了///:
  #条件为爱欲及以上，物品里有肛塞，肛门内射之后，前往中庭触发
  - 傍晚，%T%牵着善信的手在校园里散步，%她%的步伐格外拘谨，在%T%的引导下才能勉强迈步
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%称呼%？差不多该……嗯」
  -
  - %T%用中指弹了一下%少女%裙里的某个金属物体，%她%的话语立刻被轻喘打断，缩在一起的肩膀微微抽动着
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%称呼%的恶趣味……真是的，后面感觉……好奇怪」
  -
  - 确认周遭无人后，%T%从后面掀开善信的裙子，白皙肥厚的臀间，肛塞尾部的金属凸起赫然可见
  - 仅仅几句话就说服了善信，将精液封存在直肠里出门，现在%她%有没有在后悔呢？
  - 屁穴被塞住的善信就像一只无所适从的小狗，尾巴夹在腿间，反抗不得的%她%只能听从%T%的摆布……
  -
  - acc: 1
    content: 抓住肛塞玩弄
    lines:
      - 把善信拉到树影下，%T%抓住肛塞的一头前后抽动，搅拌着直肠里的精液发出「咕叽咕叽」的响声
      -
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「%称呼%……不要，会被听见的……嗯」
      -
      - 善信捂着嘴，另一只手紧紧抓住%T%的衣衫，很难说是在反抗还是在羞耻中接受着快感
      - %她%的尾巴像是下意识地驱赶，将%T%的手臂拍得瘙痒，但除此之外只是紧靠着%T%，隐藏着身后的秘密
      - 善信的腰臀不自觉地扭动着，随着速度加快，%T%能听到%她%那难以隐藏的粗重鼻息和轻喘
      -
      - 「嗯……嗯……」
  - if: era.get('cflag:64:性别') !== 1
    acc: 2
    content: 抚摸股间
    lines:
      - 和善信在墙根下的阴影里并排走着，%T%将手探进善信裙下，抓弄着%她%柔滑紧致的臀部
      -
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不要摸啦……会被看见的」
      -
      - 对善信的抱怨充耳不闻，%T%沿着%她%的股间慢慢深入，直至手指触到温热湿润的秘缝下方
      - 伴着股下沾满的蜜液，%T%将中指滑入%少女%的秘穴，挑弄着肉壁
      -
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊……嗯嗯……」
      -
      - 随着漏出的娇声，善信终于放弃了行走，扶在%T%身上不住地抽动着，汁液沿着大腿一滴滴滑落
      - 彻底屈从于快感的善信不再防备地环顾周围，或许是无暇顾及，又或是沉浸在了暴露的兴奋之中
  - divider: true
  - 感受着%少女%身体的变化，%T%在%她%临近高潮时停下了动作，善信的腰部苦闷地扭动着
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯姆……%称呼%？」
  -
  - 看着善信水灵灵的眼眸，%T%捏住肛塞的尾部，猛地往外一拉——
  - 「啵！」
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唔哦！……」
  -
  - 善信的眼瞳忽然睁大，决堤的快感让%她%不得不紧抱住%T%维持平衡，失去矜持的喘声从喉咙里漏了出来
  -
  - 跟着漏出来的还有什么呢？
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不要……%称呼%……求求你」
  -
  - 片刻后，%T%想将稍稍冷静下来的善信推开，却听见了%她%似乎带着泣声的哀求，脑袋不住地摇着
  - 引导着%她%扶墙行进，%T%稍拉开距离欣赏后面的景象
  - %少女%拖着脱力的双腿挪着步子，摇曳的裙摆间，乳白色的液柱连绵而下，在地上印出轨迹……

殿堂周:
  #育成中版本
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「快点！训练员！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「今天可是殿堂周哦！晚了就没有座位啦！」
  - 善信一路小跑向会场，又时不时的往回看向 %T%，有点着急的放缓脚步
  - 在不知道多少次犹豫之后，善信才决定抓住 %T% 的手臂一口气跑去会场
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，赶上啦！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「刚刚好还有位置，超幸运的！」
  - 拉着大喘气的 %T% 坐下，满眼带着期待看向台上的前辈
  - 听着前辈讲述着过去的故事和经历，善信认真的听着，不自觉的勾起了期待的笑容
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真好呢……比赛」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，我们也能这样对吧？」
  - acc: 1
    content: 「那是当然」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那，我得更加更——加努力了呢！认真的！」
  - 善信再次看向台上，眼睛里带着憧憬的星星

育成中粉丝感谢祭:
  #育成中版本
  - 为了粉丝感谢祭当天的节目，作为现役选手的善信自然也有收到出场的邀请
  - 当天的观众席上坐满了因为各位选手而到场的粉丝，为每一位登场的%马娘%欢呼
  - 虽然只是一次表演赛，不过……场上的各位可没有几个准备真当成表演赛的
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不妙，这好像不能随便跑了啊」
  - 站在场上的时候这才反应过来，身边的气息好像有点不对
  - 周围的%马娘%已经在临时准备的起点前预备了，善信才有点后知后觉
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「难不成大家都很认真……吗？」
  - 话没有出口，但周围的样子和想的是差不多的
  - 善信冲刺在最前方，一如既往的维持自己的领放位置
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「所以！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「为什么我也认真起来啦！」
  - divider: true
    content: 表演赛结束后
  - 表演赛结束之后，因为突然认真却没有准备的善信坐在赛道旁扇着风
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好累，感觉比天皇赏的训练都夸张了唉」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，刚才的比赛你有看吗？感觉怎么样？」
  - acc: 1
    content: 「很符合你的风格哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那，粉丝们应该也看的很开心吧，嘿嘿……」
  - color: %波旁色%
    content:
      - fontWeight: bold
        content: 美浦波旁
      - 「善信同学，非常漂亮的领跑」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，波旁同学！」
  - color: %波旁色%
    content:
      - fontWeight: bold
        content: 美浦波旁
      - 「没想到还有这样的领跑方式，确实是学习了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「老实说只是平时的跑法啦……而且这样跑很累的哦」
  - color: %波旁色%
    content:
      - fontWeight: bold
        content: 美浦波旁
      - 「是这样的吗？了解了，我会记住的」
  - 波旁微微鞠躬，随后走向感谢祭的舞台
  - 另一边的声音越来越大，感觉已经开始粉丝互动的环节了
  - 善信拍了拍粘在身上的杂草，向着身旁的 %T% 伸出手
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「麦昆%她%们说不定还在等我……不，在等我们哦」
  - 伸出手的善信，不带一丝遗憾的笑了

已育成粉丝感谢祭:
  #已育成版本
  - 粉丝感谢祭的当天，善信也跟着 %T% 回到了特雷森
  - 虽然平时因为各种各样的原因也会回来特雷森，但是粉丝感谢祭当天是不一样的
  - 就算是已经转战梦之杯或者已经退役的%马娘%，粉丝也会在这一天等着
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「居然还有那么多粉丝……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「明明我已经脱离闪耀系列赛了，哎嘿嘿」
  - 看着面前相当热情的粉丝，善信有点不好意思的挠着脸
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「说起来，还有邀请我上去跑一场的哦」
  - if: (era.get('cflag:64:妊娠阶段') >> 4) === 0
    acc: 1
    content: 「既然来了，那就去试试看怎么样？」
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「是呢……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「既然要上，那就用属于%自称%的逃跑方式！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊，我先去换决胜服了」
      - 善信小跑着走向其他方向，一下就没了影子
      - %T% 看着一溜烟跑没影的善信刚刚跑过的方向，抱着信任走向了观众席
      - divider: true
        content: 临时赛场
      - color: %代表色%
        content: 临时安排的赛场上，久违的迎来了几位老朋友
      - color: %代表色%
        content: 善信穿着熟悉的决胜服，在起点做着热身动作
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「有段时间没有跑过比赛了啊……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不过，我可从来没有忘记过我的跑法哦！」
      - color: %代表色%
        content: 依旧维持着过去比赛时的风格，领跑在最前方
      - color: %代表色%
        content: 虽然体力不如本格化的时候，已经开始一点点降速就是了
      - color: %代表色%
        content: 比赛的过程并没有刺激的过程，毕竟只是满足粉丝的一场小比赛
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呼……果然领跑的时候很开心啊」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「果然就和训练员说的一样，想跑就跑的自由感最棒了！」
      - 粉丝「善·信！善·信！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哦哦，大家！」
      - color: %代表色%
        content: 轻轻抖动的耳朵从周围的声音中分辨出自己的名字，向着观众席挥起手
      - color: %代表色%
        content: 自然也包括在观众席里同样在呐喊的 %T%
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「训练员……果然也在呢」
      - color: %代表色%
        content: 善信看着观众席的眼神，在原本的心情里带上了一点欢快
      - if: era.get('love:64') >= 50
        lines:
          - color: %代表色%
            content: 站在场上对着远方的训练员比出了胜利的手势，带着不易发现的异常眼神
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「果然……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「果然我的『训练员』只能是你呢」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「无论何时都会支援的的你」
          - color: %代表色%
            content: 已经结束的娱乐比赛不会管着选手，周围的其他%马娘%已经和认识的人聊了起来
          - color: %代表色%
            content: 善信走到观众席的旁边，朝着训练员伸出手
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「训练员，一起回去怎么样？」
  - acc: 2
    content: 「已经退出了那就观赏一下后辈吧」
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「嗯……也是呢」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「毕竟我的领放很容易变成崩坏节奏的原因呢」
      - 善信打着哈哈用自己的招牌跑法开着玩笑
      - divider: true
        content: 临时赛场
      - 虽然不打算参加，但是能够观赏一下前辈的姿态也不错
      - 娱乐比赛开始，周围的粉丝们已经开始为许久未见的选手应援了
      - %T% 和善信站在一起，看着比赛场上的身影
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「真厉害，状态居然那么好」
      - acc: 1
        content: 「你应该也不差」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「别开玩笑啦，我都已经离开赛场了耶」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「……不过训练员你想看的话，我也可以试试看哦？」
      - if: era.get('love:64') >= 75
        lines:
          - 善信的脸上有一点发红，肩膀靠在 %T% 的身上
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「只要你想看的话，在哪里都可以的」
          - 周围的观众都在看着赛场上的选手，没有人在看着 %T% 的方向
          - 空置的手凭借直觉，轻柔的和善信的手指交错在一起
          - 柔软的手指有些惊讶感的紧张起来有些不知所措，却在看见另一只手的主人后渐渐放松下来
          - 比赛即将进入最后的弯道，身边的音浪逐渐放大，似乎能盖过所有的声音
          - acc: 1
            content: 对着善信的耳朵添一下
          - acc: 2
            content: 埋进善信的头发里呼吸
          - acc: 3
            content: 偷偷摸一下善信的屁股
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「呀！」
          - 随着 %T% 的恶作剧，善信惊呼了一声，只是周围的声音太大并没有被发现
          - 善信有点生气的眼神看过来，但什么都没做
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「真是的……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「想这样做回去再做嘛」

庙会:
  #育成中限定
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「最近的训练员一直都陪着我啊……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这不是完全没有训练员自己的时间了嘛！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，差不多到庙会了啊！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「到时候，我就去陪训练员放松一下吧」
  - divider: true
    content: 庙会当天
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，今天好像是庙会哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好像有很多店铺的样子，要一起去吗？」
  - 善信装作完全不知情的样子，朝 %T% 伸手
  - 身后有点黯淡的天空下亮起祭典般的灯光，传来了吵闹的声音
  - acc: 1
    content: 「好啊，那就去吧」（好感+10，爱慕+2）
    lines:
      - %T% 接过善信伸过来的手，随着脚步一同走进了庙会中
      - 善信不像平时那样四处走动，而是一直呆在 %T% 身旁一直跟着
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「训练员有什么喜欢的吗？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「今天%自称%会一直陪着你哦！」
      - acc: 1
        content: 「那边的小吃不错啊」（体力+100）
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「小吃吗？好，我们去看看吧训练员！」
          - 善信没有犹豫的拉着 %T% 走向小摊，看着眼前的小吃
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「训练员想吃什么？我可以请你吃哦！」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「哼哼，我可是专门留了很多零花钱哦」
          - acc: 1
            content: 「善信你也吃点吧」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「不用不用，这是我请训练员你吃的」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「我想要吃的话可以去再买啦……」
          - 善信说话的时候没见有多少兴趣，只是向前看着
          - 左右看着四处的小摊，寻找下一个想去的地方
          - acc: 1
            content: 举起小吃
          - %T% 把手上的小吃拿了起来，放在善信的面前
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「啊嗯！……嗯？」
          - 善信条件反射般张口咬住，吃下一口，随后满足的脸上才反应过来浮出了一阵微红
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「真是的！训练员！」
          - 带着装作生气的表情，对着 %T% 轻轻的敲了一拳
      - acc: 2
        content: 「那边的射击好像很好玩」（技能点数+35）
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「唉，射击吗！」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「好咧，就让%自称%来一枪入魂……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「老板！我们要玩！」
          - 善信有点兴奋的接过气枪，和 %T% 一人拿了一支
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「哼哼，训练员你想要那个？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「打下来之后可以送给你哦」
          - 一边自信的说着，一边架起了手上的气枪
          - 耳朵灵巧的跳动两下，自信的扣动扳机
          - divider: true
            content: 一轮射击过后
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「抱歉，没打中……」
          - 善信的耳朵一下瘫软下来，失落的眯上眼
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「没想到完全打不中……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「对不起训练员……」
          - 看着善信难过的模样，%T% 拿起了手上的气枪
          - 随着清脆的撞击声，子弹击穿了奖品的气球
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「哦哦！好厉害啊训练员！」
          - 善信的眼睛里冒着光，看着老板递过来的玩偶
          - acc: 1
            content: 「你拿着吧」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「唉！这是训练员的奖品吧」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「我怎么能拿呢……」
          - acc: 1
            content: 「我已经很开心了」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「唉？」
          - acc: 1
            content: 「所以我想善信你也开心一点啊」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「是这样吗？」
          - 善信有点疑惑的脸上良久才浮出一阵微红，但很快又消散了
          - 双手有些尴尬的接过玩偶，缓缓的抱住
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「那个……谢谢」
          - 脸埋在毛茸茸的玩偶里，只露出明亮的眼睛看着前方的 %T%
          - 用其他人听不见的音量，小声的再说了一次
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「谢谢，训练员」
      - divider: true
        content: 庙会结束后
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「真是开心呢，还吃的饱饱的，满足！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不过，最后还是反过来被照顾了啊」
      - 善信抱着手上的收获，漫步在海边
      - 走路的时候，顺带朝身边的 %T% 用肩膀轻轻靠了一下
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「一开始是想着让随训练员你啦」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「好像做过头了，还做的乱七八糟的，哎嘿」
      - acc: 1
        content: 「对以前的事情耿耿于怀吗？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「嗯？没有啦，和以前的事情没有关系，只不过……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「支援担当%马娘%是训练员的工作对吧？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我也想试试看支援训练员的感觉，就是这样」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「毕竟训练员你一直都很努力了嘛！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「……还是说，这样子很奇怪？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呀，好害羞……」
      - 善信的脸上虽然带着尴尬的笑容，却也毫无遮掩
      - acc: 1
        content: 「你不用在意那么多的」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「但是啊，这是训练员的负担吧？」
      - acc: 1
        content: 「支持善信我很开心哦」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊咧」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「稍微等一下……」
      - 善信停下了脚步，用怀里的战利品遮住了脸
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （训练员为了训练员的工作，认真，努力的去做了）
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （因为有了担当%马娘%，所以可以去努力完成工作……）
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （所以，作为训练员……）
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （作为，我的训练员？）
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （唉？）
      - 「能成为善信的训练员太好了」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （唉唉！？）
      - 思考之后，善信的眼神逐渐混乱了起来
      - 有点慌乱的抓紧怀里的东西遮住已经发红的脸，轻轻摇头头好散去发烫的气息
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「训练员做了训练员的工作，但不只是因为作为训练员而高兴」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「而是……作为我的训练员而高兴？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「是作为我的训练员而高兴吧？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呜哇哇……」
      - 暂时忍住逃跑的想法，把脸抬起来正经的看着前方
      - 对着转身看着自己的 %T%，善信稍稍吸了口气
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「……训练员」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我会努力，努力去跑，努力去赢，真的」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「用我自己的……我们的跑法，让大家都知道！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「总有一天要让训练员你觉得，和目白善信成为搭档，真是太好了！」
      - acc: 1
        content: 「我也是」（好感+10）
      - acc: 2
        content: 「我等着那一天」（爱慕+2）
      - acc: 3
        content: 「我一直是这样想的，善信」
        # 增加性欲
      - 善信的表情变的有点微微的发愣，但很快又缩回了掩护后面
      - 在 %T% 看不见的地方，善信闭着眼发自内心咀嚼着听到的话
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呜哇啊啊啊啊……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我家的训练员真是……不得了……」
      - 再一次放下手里的袋子，带着羞红的笑脸
  - acc: 2
    content: 「不，我就不去了」

万圣节:
  - 四处放好布景的特雷森里，已经早早的进入了满是万圣节气息的时期
  - 在毫无前兆的情况下，传来了敲门的声音
  - 本着作为训练员的指责，%T% 打开了门
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不给糖就捣乱哟，训练员！」
  - 善信站在门外，装作小恶魔的样子
  - 作为头饰的犄角闪着淡淡的荧光，在阴暗的过道里显得相当明显
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「喜欢吗训练员？这是我和太阳神一起选的哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，虽然我还有选另一套天使风格的衣服哦」
  - 善信收起原先恶作剧的动作，有点坏笑的看着 %T% 装作被吓到的样子
  - 窗外的万圣节气息已经钻进了办公室里，想要工作或者做点其他事情可就不识风趣了
  - 自然对于擅长读懂空气的善信来说，一下就理解了现状
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「外面还有很多活动哦，要一起去看看吗？」
  - acc: 1
    content: 「好哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好耶，我们走！」
  - 自然的抓着 %T% 的手，一口气向着外面跑了出去
  - 虽然这一天过的很开心，但结局就是体力不如善信的 %T% 次日该老老实实的躺平了

圣诞节:
  - 圣诞节当天，%T% 的办公室门口毫无征兆的被敲响了
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呀吼！训练员！」
  - 善信很突然的走进门，走到了正在工作的你面前
  - 窗外的节日气氛已经随着善信的声音钻进了办公室，同时也从门外钻进来一个小小的星星
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，时间到了哟！」
  - 太阳神抱着圣诞树，蹦进了办公室里
  - 清脆的铃铛声响起，在正经的办公室里漫出属于圣诞节……或者说属于派对的气息
  - 擅长营造派对气氛的太阳神带着朋友们走进来，把办公室变成了派对的现场
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「呀呼！圣诞派对开始啦！」
  - color: %双涡轮色%
    content:
      - fontWeight: bold
        content: 双涡轮
      - 「呜呼！」
  - color: %内恰色%
    content:
      - fontWeight: bold
        content: 优秀素质
      - 「哎嘿，打扰了～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，你也一起嘛！」
  - 在周围的吵闹中，善信的手朝着 %T% 伸了过来
  - acc: 1
    content: 「好好」
  - 语气有些敷衍，接过善信的手站了起来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「今天可是圣诞节哦，一起玩嘛」
  - 拉着还有点劳累的 %T% 起身，走到圣诞树旁
  - color: %诗歌剧色%
    content:
      - fontWeight: bold
        content: 待兼诗歌剧
      - 「真是热闹呢～」
  - divider: true
    content: 时间流逝
  - 不知道过去了多长时间，作为成年人的 %T% 已经没有继续陪着小年轻活动的资本了
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，要一起出去透透气吗？」
  - 仿佛提前预读了 %T% 的想法，时机正好的从背后拍了拍肩膀
  - 离开了特雷森，走在溢满圣诞气息的街道上
  - 周围的商铺上挂满了星星和铃铛，以及红白两色的彩带
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嘛，也早就知道会是这样了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过训练员也很开心吧？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「偶尔和大家一起玩游戏什么的」
  - 善信轻轻刮着脸，在冬季的微风里浮出一点小小的红晕
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，喜欢今天的派对吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「大家都很努力准备了哦」
  - acc: 1
    content: 「嗯，很开心哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯嗯！训练员开心就好！」
  - 收到回复的善信脸上自然的笑了起来，连带着行走的步伐都轻快了起来
  - if: era.get('love:64') >= 75
    lines:
      - acc: 1
        content: 「那，善信你呢？开心吗？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「唉？」
      - 动作不自觉的停顿，表情带着一点惊讶，直到发现自己已经愣住了才小跑起来跟上了 %T% 的脚步
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呀，怎么说呢」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「看见训练员你开心的样子，我也……挺开心的」
      - 虽然话里带着一点停顿，但没有犹豫
      - 看着 %T% 的眼神里也带上了一点复杂的部分
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （还在关心我……果然训练员……）
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （果然我……对训练员已经是……）
      - acc: 1
        content: 「善信？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我没事哦，训练员，只是在想点事情」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （说出来的话……训练员会怎么想呢）
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （不对啊善信！要是不说的话，怎么更进一步啊！）
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「训练员啊，我呢……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「好像看见你开心，我也会开心起来的样子」
      - acc: 1
        content: 「是，是这样吗？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「是啊……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「真是的，和训练员你在一起的时间也越来越多了呢」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「明明今天是派对的，结果又是我们两个人」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「和训练员在一起的时间已经比跟大家在一起的时间要多了啊」
      - 善信抬起头望着天空，眼神时不时的偷瞄身旁
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「这样下去的话……说不定会变的离不开训练员哦」
      - acc: 1
        content: 「唉？我？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「是啊……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那个，是不是稍微有点……奇怪？」
      - acc: 1
        content: 「就算这样也没关系哦」
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「没关系？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「也就是说……」
          - 眼神带着惊喜，看着 %T% 同样有些羞涩的脸
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「那就，那就打扰了！」
        # 马跳
      - acc: 2
        content: 「是啊，很奇怪哦」
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「果然很奇怪？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「训练员你不喜欢的话……就当我没说过吧，啊哈哈……」
          - 善信挠着头，装作不在意的模样
          - 只是掩饰的姿势并做不到完全遮掩，只能做到不会显得奇怪
          - %马娘%的失落在耳朵下垂的一刻，就已经全都表达出来了
          - acc: 1
            content: 「明明你自己笑的也很开心啊」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「我自己也很开心……」
          - 稍微有点发红的眼睛停了下来，有点惊讶的回头看向身边的 %T%
          - 喉咙不留痕迹的抖动了两下，想说什么却没有说出来
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - （我也笑的很开心……唉？）
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - （这个意思是……唉唉？）
          - acc: 1
            content: 「我也会因为善信你开心的样子而感觉到开心的」
          - 听见这句话的时候，善信脸上的表情又舒展开
          - 嘴角又一次向上咧起，连带眼神也清澈了不少
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - （就是说，这不奇怪嘛……）
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「谢谢，训练员」
          - 正当 %T% 还在思考想说什么的时候，身旁的善信主动的靠了过来
          - 贴在脸旁，轻飘飘的留下一个小小的唇印
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「圣诞礼物……这也算一个吧，嘿嘿」
          - 轻轻的立起一只手指，抵在嘴唇上
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「不要和其他人说哦，还有」
          - 放下手，再一次站直身，对视着 %T% 的双眼
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「圣诞节快乐，训练员」

圣诞节马跳结束:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好像……还是太急躁了耶……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我们就这样做下去了……是不是有一点过？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「虽然，虽然我并不会觉得，是训练员不好……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊！在做什么啊，我！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总之！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我！喜欢！%玩家名%！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……还有，虽然有点迟」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「圣诞节快乐！训练员」

明日再会:
  # 情爱囹圄（爱慕＞74，常规）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员？今天感觉怎么样？」
  - 周围的风景已经再看不见，只能看着漆黑的墙壁
  - 躺在柔软的大床上，看着熟悉的天花板
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，训练员现在不能说话呢」
  - 黯淡的环境下，不再有任何人会来到这里
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「明天我一定会再来找你的哦，训练员……」
  - 善信站起身，看着躺在床上的 %T%，露出了灿烂的笑脸
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「现在就先睡觉吧……我的训练员」

迷途终点:
  # 金钱奴隶（爱慕＞74）
  - 目白善信站在门口，看着一片阴暗中的 %T%
  - 整个房间里，只有两个人对视着
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，一开始我也不想这样，是你这样选择的」
  - 门被关上，房间里陷入了漆黑
  - 阳光从窗帘里钻进一丝，照在 %T% 脸上
  - 善信蹲下身，拉开塞在 %T% 嘴里的口塞，慢慢抚摸着脸
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没钱的话，只要找我就好了啊，训练员」
  - 拿着钱，拍打着 %T% 的脸
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「只可以找我哦」
