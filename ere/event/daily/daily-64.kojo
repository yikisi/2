地下室逃脱:
  sync: true
  lines:
    - if: d.half_life === 1
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: %善信%
            - 「我在这里很奇怪吗，%称呼%？」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: %善信%
            - 「除了%称呼%的身边……我已经不知道能去哪里了……」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: %善信%
            - 「只要能在%称呼%身边……」
    - if: d.half_life === 0
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: %善信%
            - 「呀，%称呼%。」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: %善信%
            - 「……抱歉呢，做了那样的事情，就算不被原谅也是正常的吧……」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: %善信%
            - 「但我还是……想要在你的身边。」

指导学习:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「哎，是这样的吗？不愧是%称呼%。」
      - %善信% 很开心地把答案写好，也没忘向着身边的 %T% 比起了大拇指。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「OKOK，我了解了！」
      - %善信% 似乎是理解了什么，流畅地解决了剩下的问题。

加餐:
  - if: d.half_life === 0 && era.get('love:64') < 50
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「安心吧，善信%小姐%还是很擅长做饭的哦！」
      - %善信% 似乎很熟练的样子，朝 %T% 摆了摆手。
  - if: d.half_life === 0 && era.get('love:64') >= 50 && era.get('love:64') < 90
    lines:
      - 两个人不知不觉中搭配着做好了午饭，似乎自己也没有察觉到这天衣无缝的配合。
      - 直到都坐下准备开始享用的时候，两个人才想起来刚才的事情。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - （总感觉……像是夫妇一样……错觉吗？）
  - if: d.half_life === 1
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「先抓住%称呼%的胃，就能继续……」
      - 用 %T% 听不见的声音，喃喃自语着。

赛前准备:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「好嘞，就这样全力逃跑吧！」
      - %善信% 捏紧了拳头，带着气势大喊了出来。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「蹄铁全都钉好了啊，谢谢你，%称呼%！」
      - %善信% 有些惊讶，但脸上浮现出的是温暖的笑容。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「哎呀～不至于这样紧张吧，训练员？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「不过我会做好所有事的，因为我不想让胜利从手里逃走嘛！」

小憩:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「偶尔，一起逃离外面的世界也不错呢……」
  - random: true
    lines:
      - 安静的躺在一起，默默享受属于两个人的幽静空间
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「嘶呀……」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「和%称呼%在一起的时光……真是令人安心呢」
  - if: era.get('love:64') === 100
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「嘶哈嘶哈……训练员的味道……啊！什么都没有！」

聊天:
  - if: era.get('status:64:沉睡') > 0 || era.get('status:64:马跳S') > 0
    lines:
      - if: d.half_life === 1
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%称呼% 的味道……还要……在哪里……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「不会……让你走的哦……呼呼～」
      - if: d.half_life === 0
        lines:
          - random: true
            lines:
              - color: %代表色%
                content:
                  - fontWeight: bold
                    content: %善信%
                  - 「呼……已经吃不下了……」
          - if: era.get('love:64') >= 50
            random: true
            lines:
              - color: %代表色%
                content:
                  - fontWeight: bold
                    content: %善信%
                  - 「呼啊……%称呼% 的味道……嘿嘿……」
  - if: era.get('status:64:沉睡') === 0 && era.get('status:64:马跳S') === 0
    lines:
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「偶尔也试试看一起逃去更远的地方怎么样？」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「要试试看打高尔夫吗？善信%小姐%可以教你哦！」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('base:64:体力') < era.get('maxbase:64:体力') * 0.45
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「呃……疲劳的感觉没法逃掉啊……甚至想请假了啊……」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:干劲') < 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「好奇怪啊……脚好重……」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:干劲') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「准备完全！无论什么样的训练我都可以做好哦，所以就放开来吧，%称呼%！」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('status:64:发胖') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「不妙，好像吃的有点多了耶……」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 71
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%善信称呼阿尔丹%的方法感觉还是轻了点呢～要不要下次请%她%更严格点？」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 71 && era.get('love:71') >= 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「总感觉%善信称呼阿尔丹%不是很认真的样子，错觉吗？」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 71 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「最近%善信称呼阿尔丹%……总是心不在焉呢……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「那个，%称呼%，能不能由你全部接下来呢？」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 71 && era.get('love:64') >= 50 && era.get('love:71') >= 50 && era.get('relation:64:71') > 225
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「我说啊，什么时候让我和%善信称呼阿尔丹%一起跑一次？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「等到训练结束完之后，就一起回去什么的……」
      - if: era.get('cflag:64:育成回合计时') < 3 * 48 && era.get('cflag:64:照看') === 86
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「不妙，%善信称呼高峰%的训练超级严格……！」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('love:64') >= 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「总感觉，最近一下就闲下来了唉……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%称呼%～带我一起去学园嘛～」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 59 && era.get('cflag:0:性别') === 1 && era.get('cflag:59:性别') !== 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%善信称呼多伯%还是老样子呢，对男性怯怯的。」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「但是安心吧，必要的训练就交给我！」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 65
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%善信称呼太阳神%给人的感觉果然超——热情！感觉都不像我在照顾%她%了呢。」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 65 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「果然，%善信称呼太阳神%%她%是太阳啊，好耀眼……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「嗯？难道说……%称呼%你吃醋了？」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 74
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%善信称呼光明%%她%果然……很努力呢。」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「和平时慢悠悠的样子，完全不一样呢」
      - if: era.get('cflag:64:育成回合计时') >= 3 * 48 && era.get('cflag:64:照看') === 74
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「果然%善信称呼光明%还是很纯粹呢……虽然还是会迷迷糊糊就跑过头啦。」
      - if: d.half_life === 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%称呼%是，不会抛弃我的对吧？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「就算是，就算是有了其他人……」
      - if: era.get('love:64') >= 50 && era.get('love:64') < 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「偶尔会觉得，没有%称呼%你在的话我肯定没法像现在这样笑吧……没有没有！当我没说过啦！」
      - if: era.get('love:64') >= 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「呐，%称呼%什么时候和我一起回目白家试试呢？」
      - if: era.get('love:64') === 100
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%称呼%会一直是我的『训练员』的，对吧？」
      - if: (era.get('cflag:64:妊娠阶段') >> 2) > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「最近食欲不是很好呢……啊，肚子肯定没关系的！」
      - if: d.half_life === 0 && era.get('cflag:59:招募状态') === 1 && era.get('cflag:0:性别') === 1 && era.get('cflag:59:性别') !== 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%善信称呼多伯%对男性一直都应付不了，给你添麻烦了……」
      - if: d.half_life === 0 && era.get('cflag:65:招募状态') === 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「%善信称呼太阳神%又在说我听不懂的话了……不过我会全部搞懂的！」
      - if: d.half_life === 0 && era.get('cflag:74:招募状态') === 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「以前我经常帮%善信称呼光明%打理头发呢～不过现在要麻烦%称呼%了呢。」

玩游戏:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「我还是很擅长玩游戏的哦，哼哼～」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「善信%小姐%可不会一下就输了哦，你就看好吧%称呼%！」
      - %善信% 很认真地看着游戏画面，满脸充满求胜心的样子。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「和%称呼%一起玩什么都可以哦，哎嘿～」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「哦哦，这个游戏！以前在家里的时候经常和%善信称呼莱恩%一起玩呢！」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「唉，明明现在有空闲的……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
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
                content: %善信%
              - 「礼物？给我的吗？那个……我高兴哦！真的！」
          - %善信% 似乎很惊讶的样子。
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「谢谢！我会万般珍重的！超级谢谢你，%称呼%！」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「多谢，这礼物超棒的唉！总有一天我也会给你回礼的哟！」
      - if: era.get('love:64') >= 74
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「这个礼物会是我想要的那种吗……不是！没有！我很高兴的！」
          - %善信% 有点扭扭捏捏的样子，只是没听见%她%刚才说的是什么。
  - if: d.half_life === 1
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「这是给我的礼物吗……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「我会好好珍惜的……」
      - %善信% 用力地抱着怀里的礼物，眼角涌上了一阵水雾。

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
                  content: %善信%
                - 「今天的善信%小姐%也是元气满满哦！训练的事情就一口气解决吧！」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「是%称呼%你让我意识到了跑出自己的跑法有多重要哦，一直以来多谢啦！」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「有什么事情都可以和善信%小姐%说哦！啊，虽然只是我想和你说话啦～」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「最近大家都经常找我聊天呢，虽然我也无所谓啦……到不如说很欢迎！」
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「最近，%善信称呼太阳神%%她%啊……我说啊，%称呼%，你有听我说话吗？」
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「果然逃跑的感觉最棒了啊……今天也要一起逃跑吗，%称呼%？」
        - if: era.get('love:64') >= 50
          random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「%称呼%什么时候有空呢？我想和你一起出门……什么的……」
        - if: era.get('love:64') === 100
          random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「%称呼%你会一直陪我的……对吧？」
    - if: era.get('status:64:沉睡') > 0 || era.get('status:64:马跳S') > 0
      lines:
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「呼……呼……」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontWeight: bold
                  content: %善信%
                - 「已经吃不下了啦……哎嘿嘿……」

枯树洞:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「果然逃跑的感觉最棒了！！绝对不要停下了啊！！」
      - 看着 %善信% 朝着树洞喊完之后清爽的笑脸，%T% 心里暗自决定了一定要一直支持%她%。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「绝对！要赢啊！比赛也好，什么都好！」
      - 虽然 %T% 听的有点云里雾里，但是看见 %善信% 的笑脸之后也没再想太多。

中庭约会:
  - if: d.half_life === 0
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「那个，约会的事情在这里还是有点……对吧？」
      - %善信% 似乎很在意的样子，不过拉着的手一点也没有松开的样子。
  - if: d.half_life === 1
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「约会呢……」
      - %善信% 紧紧抱着 %T% 的手臂，不管周围视线亲近的将脸贴在肩头。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「嗯哼～」

天台:
  - if: d.check > 0
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「平时的天台没什么人呢，这算不算也是一种约会呢……嘿嘿。」
      - 看着 %善信% 挠着脸不知道在碎碎念什么的样子，%T% 只是给%她%的便当盒夹去了一块章鱼香肠。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「唉！你听见了吗！」
      - acc: 1
        content: 「没听见哦」
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「唉！那个……是真的吗？」
          - %善信% 满脸绯红，低着头无言地吃着自己的便当。
      - acc: 2
        content: 「……」（爱慕+1）
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「你，你说话呀，%称呼%！」
          - %善信% 鼓起红透的脸，小拳头猛砸着 %T% 的肩膀。
  - if: !d.check
    lines:
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「果然天台上的风景很好呢！」
          - 在天台上一边看着风景，一边分享着自己的便当。
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「真好吃！%称呼%的手艺超厉害！」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「天台的风景很好对吧？我时不时就会上来散心哦！」

钓鱼:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「交给我吧……！以前的善信%小姐%很擅长这些事情哦！」
      - %善信% 卷起长袖，对着面前的鱼竿跃跃欲试的样子。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「令人怀念～以前也经常这样远足呢～」
      - %善信% 抛出鱼竿，看着水面上平静的浮标随意地聊了起来。

散步:
  - random: true
    lines:
      - 两个人放空思绪慢慢走在河堤边上。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「偶尔慢下来好像也不错嘛……」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - 看着周围空无一人的河堤，%善信% 默默的贴近了 %T% 的身边。
      - 「那个，%T称呼善信%？」
      - 看着贴在自己手臂上的 %善信%，心里稍微有些激动。
      - %善信% 像是没听见一样，一言不发的伸手抱住了 %T% 的手臂，把自己贴了上来。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「就这样……可以吗？」

街机厅:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「哦哦，有我的人偶！%称呼%%称呼%，我想要试试看！」
      - %善信% 指着娃娃机的人偶，拉着 %T% 一路小跑过去了。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「以前我还经常和%姐妹%们玩这个哦，%称呼% 你可要小心了哟？」
      - 对着眼前的街机，%善信% 似乎连眼神都在闪光。

抽奖:
  - random: true
    lines:
      - 好像最近没有抽奖的活动呢……
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「没关系哟，有机会的话一定会再来的！」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「呀，今天也没有抽奖呢……」

卡拉OK:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「我时不时就会和朋友们来这里呢，毕竟这里很适合放松嘛。」
      - %善信% 的脸上是一如既往的轻松笑容，连带着 %T% 也放松了下来。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「音乐果然能令人高兴起来呢，%称呼%！」
      - %善信% 似乎是很开心的样子，随着音乐跳动着。

电影:
  - if: era.get('cflag:71:招募状态') !== 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「啊，那是%善信称呼阿尔丹%推荐过的电影唉！」
  - if: era.get('cflag:71:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「啊，那是%善信称呼阿尔丹%推荐的电影！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「没有和%善信称呼阿尔丹%一起来真是可惜呢……下次三个人一起来怎么样？」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「很久没看电影了耶，要看点什么呢……」
      - %善信% 对着电影院的海报，上下端详了一阵。
  - if: era.get('love:64') >= 25 && era.get('love:64') < 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「那个，%称呼% 啊……你喜欢看恋爱系的电影吗？」
      - %善信% 有些拘谨的样子，似乎是在期待什么。
  - if: era.get('love:64') >= 50 && era.get('love:64') < 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「两个人一起来看电影什么的，总感觉有其他的意思呢……」
      - %善信% 在一旁碎碎念了一阵，不过牵着 %T% 的手却是握的更紧。

神社:
  - 特雷森附近的神社虽然规模不大，但是在%马娘%之间却相当有名气。
  - 不少%马娘%在出赛之前都会专门来到这里，带着一点期望去试试看抽签。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「偶尔来试试运气什么的，感觉也不错呢。」
  - %善信% 是擅长逃跑的性子，想逃离什么的时候会随着心情拉着 %T% 来试试看运气。
  - 来到这里的时候总会有一种放松的感觉，对于她而言这或许也是逃跑的一环吧。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「总感觉……在这里的时候会忘记掉很多事情呢。」
  - %善信% 抱着头，一幅放松的模样大大咧咧的走在 %T% 的身边。
  - 神社里没什么人，微风扫过周围的树枝，吹在脸上的感觉相当舒适。
  - 看着眼前的签筒，%善信% 默默的戳了一下身边的 %T%，摆出一幅无所谓的姿态。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「训练员要抽吗？说不定会是大吉哦。」
  - 一边有些开玩笑的说着，一边指向前方。
  - acc: 1
    content: 「这可是%T称呼善信%你的好运哦，我怎么能随便插手呢。」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「我的好运嘛……那我要抽了哟！」
  - %善信% 对着 %T% 点点头，转身对着神社合起了手。
  - 闭眼一阵后，拿起了签。
  - if: d.dice === 1
    lines:
      - 纸上字迹清晰的吉，像是在宣告今天的好运。
      - acc: 1
        content: 「你的好运来了哦～」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「嗯嗯，今天确实是运气不错呢。」
      - 放下手里的签纸，转过来抓住了 %T% 的手。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「也要谢谢%称呼%呢……毕竟这应该是我们的好运嘛。」
      - 看着这张高兴的脸，不知不觉中 %T% 也跟着 %善信% 一起笑了起来。
  - if: d.dice === 0
    lines:
      - 翻开签纸，却没有看见大吉。
      - 看着纸上的凶，%善信% 有点尴尬的避开了 %T% 的眼神。
      - acc: 1
        content: 「运气是守恒的嘛，明天就会变成好运了。」
      - %善信% 有些失落地转过来面向 %T%，移开了视线。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「怎么办啊，今天这个……」
      - 似乎有些紧张的样子，手指不住地乱动着。
      - 看着不安的 %善信%，%T% 只能抬起手轻轻的揉着%她%轻柔的头发。
      - acc: 1
        content: 「没关系的。」
      - %善信% 什么都没说，只有一跳一跳的耳朵在表示心情。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「谢谢……」
      - 声音很小，但是在空旷的神社里却显得相当清晰。

车站吃饭:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「要一起去吃点什么吗？我知道很多超好吃的店哦！」
      - %善信% 很热情的拉着 %T%，一路小跑着。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「哼哼～善信小姐可是很擅长发现美食的哦」
      - %善信% 撑着腰，很骄傲的对着两人面前正在散发香味的套餐。
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - 坐在店里看着对方的脸，两个人噗哧一声笑了起来。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「果然不太适合这样啊，我们俩。」
      - 两个人压着笑声，拿起了餐具。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「约会什么的，真不该选这里呢……」
      - acc: 1
        content: 「怎么了？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「没事！只是……」
      - 看着 %T% 的表情，%善信% 有点激动的心情又平静了下来。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「吃完了能再陪我一会吗，%称呼%？」

车站约会:
  - if: d.half_life === 0
    lines:
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「我，我说%称呼%，在这里约会什么的……」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「和%称呼%在一起的时候，不会感觉到害羞什么的呢……」
          - %善信%贴在 %T% 的身边，稍微朝着身旁歪头靠着 %T% 的肩膀。
      - if: era.get('cflag:64:性别') !== 1
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「在其他人的眼里，我们应该是普通的情侣对吧。」
          - 贴在身边用只有 %T% 能听见的声音，轻轻咬着耳朵。
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「稍微过分一点……也不会有人发现的吧？」
          - 双手紧紧抓着手臂，压在 %善信% 软乎乎的胸脯上。
  - if: d.half_life === 1
    lines:
      - 不知为何，%善信% 一直紧紧抓着 %T% 的手，完全没有松开的意思。
      - 虽然一直享受着柔软的体感，完全没有难过的感觉。
      - 直到周围的路人少了很多之后，抓紧的手才松开了一点。
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「虽然，不知道为什么……感觉松开的话，%称呼%就会从我的身边离开了……」
      - 用着其他人听不见的声音，靠着 %T% 的肩膀悄悄说着。

商店:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「哎嘿，这个和%称呼%你很配耶！」
      - %善信% 往 %T% 身上对照了半天，带着有些恶作剧的笑脸挂上了什么。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「%称呼%你看这个，超好吃的！」
      - 不知为何，来到商场附近的第一件事情就是找到了小吃。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「%称呼%你想要买什么？我也可以送你点东西哦！」
      - %善信% 有点兴奋在 %T% 的面前一蹦一跳的看着。
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「说起来，%称呼%你家里缺了这个吧？我可以买给你的哟。」
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「%称呼%你家里有这个的话，我能过来玩吗？」
      - %善信% 的眼睛里闪着光，似乎是完全没在意门禁的事情。

晚安:
  - if: era.get('status:0:沉睡') === 0 && era.get('status:64:沉睡') === 0 && era.get('status:64:马跳S') === 0
    lines:
      - if: d.check > 0
        random: true
        lines:
          - 将 %善信% 送回宿舍之后，却被轻轻拉了一下袖子。
          - 站在 %T% 身后的 %善信% 有些口齿不清，但却能听见清楚的最后的声音。
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「外宿之类的事情，我会处理的，所以……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「我……可以逃到%称呼%的身边吗？」
          - acc: 1
            content: 「可以哦。」
            lines:
              - 外宿的申请已经无所谓了，现在已经有了更加重要的事情……
              - 就是带着粘在手臂上不肯松手的 %善信% 回家。
          - acc: 2
            content: 「别那么任性。」
            lines:
              - if: d.check === 2
                lines:
                  - color: %代表色%
                    content:
                      - fontWeight: bold
                        content: %善信%
                      - 「但是……」
                  - 客观来看，%马娘%的力气比一般人要大得多……
                  - 自然也能轻松的抓住现在的 %T%。
                  - color: %代表色%
                    content:
                      - fontWeight: bold
                        content: %善信%
                      - 「不去做的话，怎么叫做任性呢？」
              - if: d.check !== 2
                lines:
                  - %善信% 的表情从期待变成了阴暗，把失落收进了下垂的刘海里。
                  - 转过身乖巧的走进了宿舍，却在门口又偷偷看了一眼 %T% 的身影，这才低着头消失在拐角里。
      - if: d.check === 0
        random: true
        lines:
          - %善信% 迈着欢快的步伐，向着送自己回到宿舍 %T% 打着招呼。
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「明天还会再见的对吧？再会啦！」
      - if: d.check === 0
        random: true
        lines:
          - 繁忙的一天过去之后，把同样累的快要趴下的 %善信% 送回了宿舍。
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「嗯……好像稍微努力过度了点啊，嘿嘿～」
  - if: era.get('status:0:沉睡') === 0 && (era.get('status:64:沉睡') > 0 || era.get('status:64:马跳S') > 0)
    lines:
      - 陷入沉睡中的 %T% 在朦胧中似乎看见了 %善信% 想要动手却又犹豫不决的样子，最后留下的只有一声亲切又温柔的道别声。
  - if: era.get('status:0:沉睡') > 0
    lines:
      - 看着正在沉睡的 %善信%，完全做不到主动去叫醒%她%，只能辛苦一下把%她%送回宿舍了。
      - 这个时候耍坏的话，%她%会不会醒过来呢？

读档对话:
  - if: (era.get('cflag:64:妊娠阶段') !== 2 && !era.get('cflag:64:扩展变量').report) || era.get('exp:64:生产次数') > 0
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「是这样吗……没关系哦……善信%小姐%什么都懂的。」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「肯定是我的问题吧……啊哈哈……」
      - color: %代表色%
        fontSize: 0.75rem
        content:
          - fontWeight: bold
            content: %善信%
          - 「我明白的啊……」

要变成蜗牛了///:
  #条件为爱欲及以上，物品里有肛塞，肛门内射之后，前往中庭触发
  - 傍晚，%你%牵着善信的手在校园里散步，%她%的步伐格外拘谨，在%你%的引导下才能勉强迈步
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%称呼%？差不多该……嗯」
  -
  - %你%用中指弹了一下%少女%裙里的某个金属物体，%她%的话语立刻被轻喘打断，缩在一起的肩膀微微抽动着
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%称呼%的恶趣味……真是的，后面感觉……好奇怪」
  -
  - 确认周遭无人后，%你%从后面掀开善信的裙子，白皙肥厚的臀间，肛塞尾部的金属凸起赫然可见
  - 仅仅几句话就说服了善信，将精液封存在直肠里出门，现在%她%有没有在后悔呢？
  - 屁穴被塞住的善信就像一只无所适从的小狗，尾巴夹在腿间，反抗不得的%她%只能听从%你%的摆布……
  -
  - acc: 1
    content: 抓住肛塞玩弄
    lines:
      - 把善信拉到树影下，%你%抓住肛塞的一头前后抽动，搅拌着直肠里的精液发出「咕叽咕叽」的响声
      -
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「%称呼%……不要，会被听见的……嗯」
      -
      - 善信捂着嘴，另一只手紧紧抓住%你%的衣衫，很难说是在反抗还是在羞耻中接受着快感
      - %她%的尾巴像是下意识地驱赶，将%你%的手臂拍得瘙痒，但除此之外只是紧靠着%你%，隐藏着身后的秘密
      - 善信的腰臀不自觉地扭动着，随着速度加快，%你%能听到%她%那难以隐藏的粗重鼻息和轻喘
      -
      - 「嗯……嗯……」
  - acc: 2
    content: 抚摸股间
    lines:
      - 和善信在墙根下的阴影里并排走着，%你%将手探进善信裙下，抓弄着%她%柔滑紧致的臀部
      -
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不要摸啦……会被看见的」
      -
      - 对善信的抱怨充耳不闻，%你%沿着%她%的股间慢慢深入，直至手指触到温热湿润的秘缝下方
      - 伴着股下沾满的蜜液，%你%将中指滑入%少女%的秘穴，挑弄着肉壁
      -
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊……嗯嗯……」
      -
      - 随着漏出的娇声，善信终于放弃了行走，扶在%你%身上不住地抽动着，汁液沿着大腿一滴滴滑落
      - 彻底屈从于快感的善信不再防备地环顾周围，或许是无暇顾及，又或是沉浸在了暴露的兴奋之中
  - divider: true
  - 感受着%少女%身体的变化，%你%在%她%临近高潮时停下了动作，善信的腰部苦闷地扭动着
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯姆……%称呼%？」
  -
  - 看着善信水灵灵的眼眸，%你%捏住肛塞的尾部，猛地往外一拉——
  - 「啵！」
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唔哦！……」
  -
  - 善信的眼瞳忽然睁大，决堤的快感让%她%不得不紧抱住%你%维持平衡，失去矜持的喘声从喉咙里漏了出来
  -
  - 跟着漏出来的还有什么呢？
  -
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不要……%称呼%……求求你」
  -
  - 片刻后，%你%想将稍稍冷静下来的善信推开，却听见了%她%似乎带着泣声的哀求，脑袋不住地摇着
  - 引导着%她%扶墙行进，%你%稍拉开距离欣赏后面的景象
  - %少女%拖着脱力的双腿挪着步子，摇曳的裙摆间，乳白色的液柱连绵而下，在地上印出轨迹……