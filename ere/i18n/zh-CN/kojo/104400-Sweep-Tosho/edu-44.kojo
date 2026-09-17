# @file 东商变革 - 育成
# @author 阿格尼斯数码公司
train:
  # 低体力
  - if: t = [false, false, false], t[0] = (era.get('base:44:体力') / era.get('maxbase:44:体力') < 0.4)
    lines:
      # 魔法之梦（资深年7月第1周回合开始事件）之前
      - if: era.get('cflag:44:育成回合计时') < 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「唔唔……为什么动不了了……不要不要！%CALLNAME%，我们今天该回去休息了！！」
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「唔唔……好累！不要不要！！%CALLNAME%，我不许你继续这样使唤主人又不让休息了！！！」
  # 大魔法师的约定
  - if: t[1] = era.get('cflag:44:育成用变量')?.agreement > 0, !t[0] && t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还愣在那里干什么！？下一个练习是什么，赶快告诉我！！！」
  # 低干劲
  - if: t[2] = era.get('cflag:44:干劲') < 0, !t[0] && !t[1] && t[2]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！使魔对主人这么不好，我今天就是不想练……不对！总之我今天才不想练习啦！！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么要成为大魔法师的我要在这种状态下做这种练习啊！」
  - if: '!t[0] && !t[1] && !t[2]'
    lines:
      # 新生的Asphodel（经典年11月第2周回合结束事件）之后
      - if: (t = era.get('cflag:44:育成回合计时')) > 47 + 42
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「快点快点！练习完之后我还得去研究新的魔法呢！！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「快点快点！像%CALLNAME%这样子，才没办法让那些人更好看到天才%MOHOSHOJO%sweepy的独创魔法吧！」
          # 魔法之梦（资深年7月第1周回合开始事件）之后
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「要成为大魔法师就得有弟子……想要弟子就得让%SEX%们看到我的魔法。」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「%CALLNAME%，今天的练习是什么？」
          # 魔法之梦（资深年7月第1周回合开始事件）之后
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「使唤主人的权利可不是每个%CALLNAME%都有的！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「在达到那个目标之前……这可是%CALLNAME%的特权！」
      - if: t <= 47 + 42
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「快点快点！不赶在太阳下山前做完练习的话，我怎么钻研魔法啊！？」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「快点快点！利用清晨魔力进行练习的机会可是很珍贵的！！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「今天练习之后要跟我一起去找『治愈草』和『水之花』，知道了吗，%CALLNAME%！？」


ts_add:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「喂！使魔！刚才练习的时候……我想到了一个新的魔法！！」
  - 训练即将结束的时候，东商变革突然跑了过来
  - 而后，用充满自信的眼睛看向%YOU%
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只要再努力一下……说不定就可以施展了！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「虽然太阳要落山了！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是！在主人掌握之前，使魔当然会一直陪着的，对吧?！」
  - 这样子询问着
  -
  - 对此，%YOU%的回答是——
  - acc: 1
    content: 「我会陪着变革的。」（同意）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼哼～不愧是我的使魔！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「直到太阳落山，%MAJO%的时间来到之前，都不许走哦！」
      - 在这之后，陪着东商变革进行了额外的训练
  - acc: 2
    content: 「变革……终于愿意加训了？」
    lines:
      - 「终于」两个字从%YOU%的口中脱离的那一刻
      - 东商变革，微微扬起的嘴角不知为何垮了下去
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……啊。哦。嗯。主人。嗯。没错，『终于』有了兴致。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……不过，现在又没有了。」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「别问为什么！自己想去吧使魔！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人，现在要求你，马上把主人背回去！！！」
      - 临时更改主意的东商变革，最终是骑着%YOU%回到了不远处的宿舍门口……


rs_common:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - 和%CHARA%一起来到了准备室
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！好累！好累啊！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人是来了这里没错，但是好累也是真的啊！！」
      - 这样抱怨着
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「虽然主人会参加的！但是，如果使魔敢比赛后不给我买甜品的话——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人就把你变成小狗，明白了吗！？」
      -
      - 在那之后，%CHARA%离开了准备室，下到了赛场
      - 闭着眼睛不知是在冥想还是发呆了一会后，%CHARA%从队伍的末尾缓缓进了闸
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - 和%CHARA%一起来到了准备室
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！虽然我知道报名了但我还是好不想来啊！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人的精力是有限的，这种事使魔应该明白的吧！」
          - 即使到场了，还是这样抱怨着
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼！算了，主人会好好跑的！毕竟是为了『魔法』！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「但使魔，如果比赛后忘了买甜品的话，主人还是会生气的哦！？」
          -
          - 在那之后，%CHARA%离开了准备室，下到了赛场
          - 站在那里一动不动地看了一会观众后，%CHARA%从队伍的末尾缓缓进了闸
      # 魔法之梦（资深年7月第1周回合开始事件）之前、新生的Asphodel（经典年11月第2周回合结束事件）之后
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - 和%CHARA%一起来到了准备室
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么呀什么呀！为什么要我参加这样的魔法竞赛啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我是说，这样的竞赛，万一他们不能好好的看清我的魔法怎么办？！」
          - 即使到场了，还是这样抱怨着
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼！算了！反正，只要是竞赛，sweepy大人我，都能施展自己的魔法」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「以防万一叮嘱一下，使魔，你可要好好地看好了哦！」
          -
          - 在那之后，%CHARA%离开了准备室，下到了赛场
          - 闭着眼睛自顾自挥舞了一会魔杖后，%CHARA%从队伍的末尾缓缓进了闸
      # 新生的Asphodel（经典年11月第2周回合结束事件）之前
      - if: t <= 47 + 42
        lines:
          - 和%CHARA%一起来到了准备室
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么呀什么呀！这种没有意义的竞赛，到底是为什么报名的啦！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「有这样的时间，我早就能多学会几个书上讲的魔法了！」
          - 即使到场了，还是这样抱怨着
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼！算了！反正，天才%MOHOSHOJO%sweepy，不管什么都可以做到」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使魔，只需要好好看着，等主人回来就可以了！」
          -
          - 在那之后，%CHARA%离开了准备室，下到了赛场
          - 默念了许久咒语后，%CHARA%从队伍的末尾缓缓进了闸


re_win:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - 走完赛后的流程，和%CHARA%并排走在回去的路上
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯嗯……这个甜品，口味还算不错。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「作为使魔过分压榨主人的一点点回报，还算合理。」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但是！这不意味着，不讲道理地压榨主人就是合理的！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下次再这样，主人就不参加比赛了！！」
      -
      - 在这之后，%YOU%和%CHARA%一起返回了特雷森学院
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - 走完赛后的流程，和%CHARA%并排走在回去的路上
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「嗯嗯……这个甜品，口味还算不错。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使魔，居然没有因为怕主人长胖就不给主人买。」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……为什么那么担心地看着我？当然不会胖的啦！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「要是胖了，就是使魔训练没安排好的问题！」
          -
          - 在这之后，%YOU%和%CHARA%一起返回了特雷森学院
      # 魔法之梦（资深年7月第1周回合开始事件）之前、新生的Asphodel（经典年11月第2周回合结束事件）之后
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - 走完赛后的流程，和%CHARA%并排走在回去的路上
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼！我就说吧，天才%MOHOSHOJO%，就没有赢不了的竞赛！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「无论什么样的对手，sweepy大人都能一扫而空的」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使魔，无论什么样的比赛都可以」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「下次，还是挑一点更能让天才%MOHOSHOJO%sweepy施展魔法的竞赛来吧！」
          -
          - 在这之后，%YOU%和%CHARA%一起返回了特雷森学院
      # 新生的Asphodel（经典年11月第2周回合结束事件）之前
      - if: t <= 47 + 42
        lines:
          - 走完赛后的流程，和%CHARA%并排走在回去的路上
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼！我就说吧，天才%MOHOSHOJO%，就没有赢不了的竞赛！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「无论什么样的对手，sweepy大人都能一扫而空的」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使魔，我不是说不可以让主人参赛」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「但是，下次，挑一点更厉害的竞赛来吧！」
          -
          - 在这之后，%YOU%和%CHARA%一起返回了特雷森学院


re_lose:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - 走完赛后的流程，和%CHARA%并排走在回去的路上
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯嗯……这个甜品，口味还算不错。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「作为使魔过分压榨主人的一点点回报，还算合理。」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯嗯？主人把比赛输掉了？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那种事情才不重要！……我是说，这是使魔压榨主人导致的吧！？」
      -
      - 在这之后，%YOU%和%CHARA%一起返回了特雷森学院
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - 走完赛后的流程，和%CHARA%并排走在回去的路上
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「嗯嗯……这个甜品，口味还算不错。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使魔，居然没有因为主人输了就不给主人买了。」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……知道了知道了！吃完了这个甜品，主人会努力的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「下一次，一定会在他们面前证明『魔法』的意义！」
          -
          - 在这之后，%YOU%和%CHARA%一起返回了特雷森学院
      # 魔法之梦（资深年7月第1周回合开始事件）之前、新生的Asphodel（经典年11月第2周回合结束事件）之后
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - 走完赛后的流程，和%CHARA%并排走在回去的路上
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！不可能，这种事情怎么可能！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我的魔法，怎么可能会失误！！」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼！算了！反正，是新研发的魔法嘛」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这次失误了……下次就能调整过来的，肯定是这样的！」
          -
          - 在这之后，%YOU%和%CHARA%一起返回了特雷森学院
      # 新生的Asphodel（经典年11月第2周回合结束事件）之前
      - if: t <= 47 + 42
        lines:
          - 走完赛后的流程，和%CHARA%并排走在回去的路上
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么，为什么会输啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不可能不可能，肯定不会是主人的问题！！」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不过是，使魔选的这个赛事太没趣了而已。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人，这次才用了不到百分之十的力气呢！」
          -
          - 在这之后，%YOU%和%CHARA%一起返回了特雷森学院


# 招募成功后的当周回合结束
# 耐力&智力+5
we_blue_enchan_tress:
  title: 难解的 Blue Enchantress
  lines:
    - 在特雷森学院里，很多%UMA%其实都有着自己的个性
    -
    - 有的喜欢在休息时看童话故事，有的会收集可爱的小物件
    - 有的偶尔画点小画，有的会在学校的花圃里种很多花
    - 这些，还算是平平无奇的个性
    -
    - 有的，据说会用跑步声来创作摇滚乐；有的，据说会用不同语言给自己起一百个昵称
    - 有的，据说会在炒面里加芥末酱；有的，据说一顿饭就能吃空整个学校食堂
    - 比起那些，喜欢魔法，应该算不上什么特别难办的个性吧
    -
    - 但是……
    - %CHARA% 显然不是%YOU%想象中那种平凡的，喜欢魔法的%UMA%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要！这种事情我才不想做！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你不是我的%CALLNAME%吗？！这种事情明明%CALLNAME%替主人做就好了吧！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要！我才不想看这些书！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使——魔——！！！为什么不能帮主人完成这些课题啊！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！乱七八糟的练习，全部好无聊啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐！%CALLNAME%，你就不能帮我做完这些练习吗？」
    -
    - 仅仅几日相处，%YOU%就从%CHARA%的口中听到了各种各样未曾设想的要求
    - 即使做好了一定的心理准备，%YOU%也总是应接不暇，疲于应对
    -
    - 最重要的是，%CHARA% 的要求并非嘴皮子功夫——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！这么没用的使魔，我才不会要呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「再这样下去，我就要和%CALLNAME%解除契约，再去找下一个使魔了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我看，那边的小猫就不错！」
    -
    - 只要处理方式不当，就会受到%CHARA%简单直白的威胁
    - 也难怪 %CHARA% 之前一直没能和任何训练员成功签约过……
    -
    - 那是一个普通的周末
    - %CHARA%突然找到在训练员室里坐着的%YOU%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂。%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跟我走。」
    - 用理所当然的语气下了不明不白的命令，然后，双手环抱在胸前，站在那里一动不动
    -
    - ……又是这样
    - 虽然对各种任性的要求已经习以为常，但终归还是有十足的无奈感
    -
    - 并不被告知要去哪里，也不被告知到底要去做什么
    - 此时的%YOU%，只是默默地跟在%CHARA%身后
    -
    - 穿过学院的后门，%YOU%在%CHARA%的带领下缓缓走进学院的后山
    -
    - acc: 1
      content: 「那个……我们今天到底要去干什么呢？」
    - 小心翼翼地问道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！%CALLNAME%不要一个个问这问那的！」
    - 完全没有回答的意思
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跟着主人走就对了！」
    -
    - 「但是……至少告诉我要去哪里……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笨蛋%CALLNAME%！天才%MOHOSHOJO%sweepy要去哪里，%CALLNAME%也一定要跟着去哪里！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这么简单的道理都不懂吗！」
    -
    - 「……」
    - 看着%CHARA%气鼓鼓的样子，%YOU%只好继续默默跟随
    -
    - 只是，一丛荆棘突然挡住了%YOU%和%CHARA%的去路
    -
    - 「这样，可怎么办好呢……」
    - 至少这条路是不能走了的样子，%YOU%打起了退堂鼓
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！%CALLNAME%果然只是%CALLNAME%，遇到这种困难就想不出办法了」
    - 对%YOU%的退缩感到有几分不满
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这种时候，就应该是伟大的『魔法』派上用场的时候了！」
    -
    - acc: 1
      content: 「变革的『魔法』……可以做到这种事吗？」
    - %YOU%只是轻轻质疑
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笨蛋%CALLNAME%！不过是自己不会用魔法罢了！」
    - 马上回应道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy，可是大魔法师奶奶的徒弟，无论什么魔法都手到擒来！」
    -
    - acc: 1
      content: 「那么，可以拜托你吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～，既然%CALLNAME%这么说了，那就瞧着吧～」
    - 很急切地想展示，%CHARA%从腰间拿出先前别上去的魔杖，对着荆棘挥动起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Rosa★Gladiolus！」
    -
    - 荆棘没有任何反应。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……Rosa★Gladiolus！！！」
    -
    - 即使有风，荆棘也并不跟着摇晃。
    -
    - 马上陷入了苦恼，面前的小%UMA%不甘地想着为什么
    - 只是，接下来的言行却出乎意料——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……喂。%CALLNAME%。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「背我。」
    - %CHARA%指了指前面绵延数米的荆棘丛，示意%YOU%背%SEX%过去
    -
    - 荆棘丛密不透风，纵横交错的枝条在阳光下投落斑驳阴影，尖锐的刺如同守卫一般遍布其间
    - 这样危险的路径，别说是背着 %CHARA%，就算是独自一人……
    - acc: 1
      content: 「我们……换条路怎么样？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就要从这里过去。」
    - %CHARA%毫不犹豫地回答，语气中饱含不容商量的任性
    -
    - 就这样，%YOU%只好背着小%UMA%，站在密密麻麻的荆棘道前边
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走。」
    - 感受到那双小脚轻轻踢动的力量
    -
    - 咬了咬牙，%YOU%想象着自己回去之后手脚都要缠上绷带的样子，迈出了脚步——
    -
    - 但是，并没有预想之中的疼痛袭来
    - 也许是%YOU%的脚步意外轻巧，也许是%YOU%的动作恰到好处
    - 从那密密麻麻的荆棘丛中穿过时，竟没有一根藤条剐蹭到%YOU%的四肢
    - 难不成，真的是——
    - 「魔法」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哇——」
    - 看着眼前孤零零生长在石缝中的蓝色妖姬
    - 下到地面的 %CHARA% 眼睛闪闪发光
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～终于找到了！传说中的魔女之花！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要让它每天每晚都陪着我，一直看着我成为最伟大的大魔法师！」
    -
    - acc: 1
      content: 「好美丽啊」
    - 就连%YOU%也不由自主地感叹道
    -
    - 「但是，这里就是它的家吧」
    - 不知怎地讲出了这句话
    - 「如果摘回去的话，它会不会想家呢？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不要了。」
    - 将头扭向一旁
    -
    - 「……？」
    - 惊讶于%CHARA%突然的发言
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我说不要就是不！要！了！」
    - %CHARA%生气地剁着脚
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我们回去了！！！」
    -
    - 就这样，经过了半天跋涉的%YOU%和%CHARA%，两手空空地返回了特雷森学院


# 下一回合结束
# 耐力&根性+5
ws_yellow_orchid:
  title: 启程的Yellow Orchid
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%！我听说……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐！%CALLNAME%！我最近了解到……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！%CALLNAME%！我突然想起来……！」
    -
    - 不知为何，在上次冒险之后，训练之余，%YOU%开始越来越多地被 %CHARA% 强行拉到各种地方去寻找魔法物品
    - 明明听起来十分荒诞不经，但又不知为何总能找到算是符合描述的东西
    -
    - 虽然路上会遇到各种各样奇妙的麻烦
    - 却总是会莫名其妙地解决掉——
    -
    - 难不成，真的是「魔法」吗？
    - %YOU%有时候会想
    -
    - 但是，比起这些想法，更重要的是……
    - %CHARA%，是%YOU%的担当赛%UMA%
    - %YOU%本应是%SEX%的担当训练员
    -
    - 这也意味着……
    - %CHARA% 该为出道战做准备了。
    -
    - 又一个周末，在训练外的时间，%YOU%主动把 %CHARA% 约到训练场
    - acc: 1
      content: 盯
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「？怎么了%CALLNAME%，为什么那样子看着我？」
        - 疑惑地回看回来，鹿毛小%UMA%，似乎在思考着什么
        -
        - 想一想到底怎么劝%SEX%训练吧，如果是平常的%CHARA%，一定会——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊！我知道了！%CALLNAME%，一定是想看看主人练习时候的样子了！」
        - 结果，还没说任何话，就听到了和预期不同的事情
    -
    - 「变革，突然想练习了？」
    - 算是某种程度的惊讶，总之是脱口而出了这句话
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么了？就算是再天才的魔法师，也是有需要多加练习的时候吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～就让%CALLNAME%看看吧，天才%MOHOSHOJO%sweepy的实力！」
    -
    - 只是，十几分钟以后——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！我才不要做这种练习啦～！！」
    - ……%CHARA%就开始抗拒训练了
    -
    - 「变革不是……要试试追寻那个我说的『赛跑的魔法』吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然是这样！但是，只是做这些无聊的练习的话，又哪里能学到『魔法』啊！？」
    -
    - 又回到「魔法」上了……
    - 想起来也确实如此，从一开始招募 %CHARA%，到后来的各种奇妙探险
    - 这孩子的行事动机，基本全部围绕着「魔法」
    - 或许，了解%SEX%的动机，就能明白「魔法」的含义——
    -
    - 「变革，到底为什么那么喜欢魔法呢？」
    - 轻轻地问道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……什么啊，居然连这种事情都不明白。」
    - 不满地瞥了一眼%YOU%
    - 而后，故意咳嗽一下，清了清嗓子，讲起了什么——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为魔法让人很开心啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「能够嗖一下地变出一束花，两下把人的病治好，让人一下子笑起来什么的，不是很厉害吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且！学会别人学不会的东西，不是本来就很让人羡慕嘛！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～只要像奶奶一样学会天底下的一切魔法——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy我，就会被人尊崇为伟大的大%MAJO%了！」
    -
    - 理由，似乎并没有想象中那么复杂
    - 「那么……我……」
    - 稍微思考了一下
    -
    - 「……听说七月份开始有几场比赛」
    - 「只要跑赢那几张比赛中的任意一场，获胜者就会获得魔法等级的评定」
    - 「如果是变革的话，说不定……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - 耳朵一下子竖起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的吗%CALLNAME%！这么重要的事情怎么不早点告诉我！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～什么都不用说了！作为天才%MOHOSHOJO%sweepy，这种程度的考验当然要参加了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还愣着干什么%CALLNAME%！为了在当天使用出最好的魔法，主人现在就要练习！」
    -
    - 不管怎样，终于将眼前小%UMA%的训练意愿成功激发了出来
    - 至少，在出道战完成之前，%YOU%不用每天为%CHARA%的训练发愁了……


rs_begin_race:
  title: 出道战前·魔法的准备
  lines:
    - 为了好好给出道战做准备，%YOU%在比赛开始前和%CHARA%一起来到了准备室
    -
    - 原本还想多叮嘱几句有关比赛过程的事情，但是……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「吵死了吵死了！你这样的%CALLNAME%又在担心什么啊！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐！%CALLNAME%！有那闲工夫不如帮我拿一下东西吧？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看着我干什么，我不是和你说了要好好地拿着我的魔杖和帽子的吗！」
    - 不知从何时起又变成了这样
    -
    - 讲话的尝试大多数变成了徒劳
    - 任何多嘴都会被反驳回来，几乎没有任何叮嘱的机会
    - 最后只能呆呆地站在一旁，按照%CHARA%的指示拿着东西
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「准备完全，万事俱备～！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！把帽子和魔杖给我！」
    -
    - 一声令下，%YOU%马上把魔法帽和魔杖一齐递了过去
    - %CHARA%接过帽子，把它端正地戴在头上，把魔杖别在腰间
    -
    - 「你……真的要戴着这顶帽子跑步吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笨蛋%CALLNAME%！这么简单的道理都不懂！」
    - 遭到了%CHARA%的斥责
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个帽子是奶奶亲手给我的魔法道具！不戴它，我怎么更好地用出魔法啊？！」
    -
    - 即使劝说也没有作用
    - %YOU%只得远远看着戴帽子的小%UMA%缓缓走进闸内……


re_begin_race_win:
  title: 出道战后·魔法等级评定仪式
  lines:
    - 终于让 %CHARA% 顺利完成了出道战……
    - 按照和%SEX%的约定，%YOU%提前请来人手，准备好给 %CHARA% 举行魔法等级评定仪式
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「那么，从今以后，你就是被认可的魔法学徒了！」
    - %CHARA%站在临时搭建的授勋台上，一旁，是用端正的礼仪向大家介绍着的%FUJI%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要！为什么只是魔法学徒啊！」
    - %CHARA%似乎并不完全满意的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我明明还想着直接被评为魔法大师的！」
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「那么，就请再接再厉吧」
    - %FUJI%微笑着回应
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的赛%UMA%
        - 「喂喂，为了证明自己的魔法实力而跑步什么的也太荒谬了吧」
    - 台下的赛%UMA%带着鄙夷的表情
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的赛%UMA%
        - 「说到底，『魔法』这种东西，只有『小孩子』信吧？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你刚才说什么！！？」
    - 马上起了反应，直勾勾地看向那名赛%UMA%
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的赛%UMA%
        - 「呵。实在不服气的话，就在 阪神皇冠大赛 上和我比一比好了」
    - 路过的赛%UMA%只留下这句话就转头离去
    -
    - 看着在台上被气得直跺脚的%CHARA%，%YOU%不禁汗颜
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「为了『魔法』而奔跑么……」
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「呵呵，听起来也挺不错的呢」
    -
    - 至少，下次的比赛到底怎么让 %CHARA% 好好参加，是不用担心的事情了……
    - 希望到 阪神皇冠大赛 之前，%SEX%的训练欲望能够切实地提高一些吧……


re_begin_race_lose:
  title: 出道战后·未成真的仪式
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐～%CALLNAME%，说好的魔法评定仪式，到底在哪里呢？」
    - 回来之后，不知为何和%CHARA%微妙地面面相觑着
    -
    - 「啊，那个啊……」
    - 「只有赢下比赛才会有来着……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是，主人已经冲线了，也勉强能算是『赢』下比赛了吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为什么，还是不能参加魔法评定仪式呢？」
    -
    - 「或许是冲线了」
    - 「但是，冲线的时候，你的前面，好像还有其他%UMA%」
    - 「这些魔法评定仪式，或许已经由%SEX%们参加了……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！！凭什么，凭什么啊！！！」
    - 突然开始大发脾气
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%——这一定是你的失误！！！！！」
    -
    - 「或许是我的失误，但还请冷静一点……」
    - 「机会还有很多，只要继续参赛的话——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你说过，是七月之后的『几场比赛』对吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一场是什么时候，赶快告诉我！！！」
    -
    - 虽然有着能让「魔法评定仪式」延后的好消息，但这样下去，%CHARA%恐怕也不会开心的……
    - 总之，先向着突破未胜利的目标前进吧


rs_hans_fil:
  title: 阪神皇冠大赛前·宣战的Bird's-footTrefoil
  lines:
    - 从早上见到%CHARA%起，就感受到了一种截然不同的氛围
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    -
    - 不知为何总是盯着%YOU%，却又什么都不做，只是沉默着
    - 没有听到往常的抱怨，也没有任何催促
    -
    - 非常自觉，以及不容置疑地带着%YOU%上了地铁，来到了阪神赛马场
    - 一直到现在进入准备室，都一言不发
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 「……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 「……」
    - 陷入了度秒如年的沉默……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一直站在那里一动不动的，你知道今天是什么日子吗，%CALLNAME%？」
    - 盘着手臂，站在准备室另一头的%CHARA%突然开了口
    -
    - 终于开口说话了……
    - 这时候，应该回答——
    - acc: 1
      content: 「复仇的日子」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不对！才不是复仇！！天才%MOHOSHOJO%sweepy什么时候那么小心眼过了！！！」
    - acc: 2
      content: 「比赛的日子」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为什么说得那么没有仪式感啊%CALLNAME%！」
    - acc: 3
      content: 「沉默的日子」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「什么沉默之日啊%CALLNAME%！今天离沉默之日还早得很呢！！」
        - 原来真的有沉默之日吗……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天……明明应该是——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy，作为魔法师去讨伐宿敌的日子！！」
    - 咬牙切齿地说道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「竟然敢小看将来的大魔法师，今后，一定要让那个家伙一句话都说不出来！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所！以！说！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你是完全不知道要把主人的帽子和魔杖拿过来吗，%CALLNAME%！！！」
    -
    - 果然，还是为了这个啊……
    - acc: 1
      content: 递过去
    - acc: 2
      content: 总之还是递过去吧
    - %YOU%把手上拿着的帽子和魔杖递给了%CHARA%
    -
    - %CHARA%把帽子端正地戴好，魔杖别在腰间
    -
    - 下到赛场的%CHARA%，几乎一直呆在队伍的尾端
    - 直到正式入闸前，都盯着那名和%SEX%有过争执的赛%UMA%……


re_hans_fil_win:
  title: 阪神皇冠大赛后·赛后的新大赛
  lines:
    - %CHARA%，漂亮地赢下了这场不管%YOU%原先有没有计划应该都会闹着参加的比赛
    - 不久，就到了赛后的颁奖环节
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！我早就说过，我的魔法你这家伙肯定理解不了！」
    - 站在领奖台上，%CHARA%轻蔑地盯着那名在台下因不服气而龇牙咧嘴的赛%UMA%
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 输掉的赛%UMA%
        - 「……」
    - 只是使劲盯着台上的%CHARA%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 用更加不屑而笃定的目光死死地盯了回去
    -
    - 为了避免赛后的宝贵时间变成激烈的眼神交流大赛
    - %YOU%急忙把%CHARA%带离了现场……


re_hans_fil_lose:
  title: 阪神皇冠大赛后·赛后的新大赛
  lines:
    - 虽然%CHARA%斗志昂扬地参加了这场比赛
    - 可惜的是，并没有如%SEX%自己所说的那样，完成了对宿敌的讨伐
    -
    - 不过，幸运的是，那名之前和%SEX%有争执的赛%UMA%同样没能夺得冠军
    - 此刻，%CHARA%和那名赛%UMA%不知为何在台下刚好凑到了一起
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的赛%UMA%
        - 「……」
    - 虽然主要看着看台上获胜的%UMA%，但也不忘看两眼身旁的%CHARA%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 双臂环抱在胸前，装作不在乎的样子，但又不忘用锐利的目光侧视回去
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的赛%UMA%
        - 「……」
    - 转过头去看向%CHARA%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 同样转过头去报以直视
    -
    - 为了避免赛后的宝贵时间变成激烈的眼神交流大赛
    - %YOU%急忙把%CHARA%带离了现场……


# 经典年第一周开始
ws_new_year_c:
  title: 新年的计划
  lines:
    - 在%YOU%的指导下，%CHARA% 终于是平安度过了新秀年
    -
    - 而进入经典年，也意味着 %CHARA% 能参与更高水准的赛事，遇见更强大的对手
    - 尽管相信%CHARA%的能力，但到底如何让%SEX%稳定地发挥出来依然让%YOU%头疼
    - acc: 1
      content: （总之，先过好新年吧——）
    - 纵使是清晨，神社门口也已经排起了长长的队伍，尾端几乎要站到登上神社的楼梯
    - %YOU%与戴着帽子的小%UMA%，一齐随着队伍缓缓移动着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么啊什么啊！把我带到这种地方来又只是为了许愿吗？」
    - 在排队的时候，谈起了天
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「许愿这种虚无缥缈的东西有什么好的啊？有什么事情用魔法一下子实现不就好了吗？」
    - 看来，许愿并不在%SEX%的魔法范畴内……
    -
    - 但是，既然来了，还是让%SEX%好好地许个愿吧
    - 想着眼前有些不耐烦地排着队的小%UMA%背影，说着话
    -
    - 「许愿，毕竟是大家眼里的传统嘛……」
    - 「一直以来，人们都是这么做的」
    -
    - 「在新年这天，只要是有愿望的人『都』会来到神社」
    - 「我们现在也是这样——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……等一下！你是说，只要有愿望的人『都』会来神社？」
    - 突然重复了%YOU%话语中的一些片段
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……这么说……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你有愿望喽！？？」
    - 不知道为什么关注点发生了微妙的变化，%CHARA%转过身，直直地看了过来
    -
    - 「啊，那个——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不用说了！实现%CALLNAME%的愿望可是魔法师的责任！」
    - 被突发奇想的%CHARA%用魔杖指着，急切地打断了
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Freesia★Dogwood，说出来吧～！」
    -
    - 明明原本是打算让%CHARA%通过许愿安静一会
    - 结果，许愿的人完全不对，%CHARA%也没能安静下来，甚至用有几分期待的眼神期待着这边回答
    - 这，到底是什么样的发展呢
    -
    - 这种时候，应该——


ws_ny_sub_select:
  - acc: 1
    key: select
    content: 说出来
    # ws_ny_sub_option
  - if: d.reject < 3
    acc: 2
    content: 摇摇头
    # ws_ny_sub_reject
  - if: d.reject < 3
    acc: 3
    content: 「许愿的话，说出来就不灵了……」
    # ws_ny_sub_reject


ws_ny_sub_option:
  - 在这个场合，%YOU%最想要实现的愿望是——
  - acc: 1
    key: select
    content: 「希望变革比赛获胜吧」（全属性+20）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「？这个愿望是？」
      - 有些惊讶的样子
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊！为什么会许这样的愿望啊！？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要不要！做起来好累！不对，听起来好无聊！！你说的事情我才不想干！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，重新许一个和主人没有关系的的愿望！！！」
      -
      - 为什么这种%YOU%认为对%CHARA%有利的愿望，反而那么不吸引人呢……
      - 至少，以少量夸奖为代价，%YOU%还是好好地让%CHARA%以%SEX%能接受的方式加强练习了一段时间
  - acc: 2
    content: 「希望变革学习进步吧」（技能点数+100）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「？这个愿望是？」
      - 有些惊讶的样子
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊！为什么会许这样的愿望啊！？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要不要！做起来好累！不对，听起来好无聊！！你说的事情我才不想干！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，重新许一个和主人没有关系的的愿望！！！」
      -
      - 为什么这种%YOU%认为对%CHARA%有利的愿望，反而那么不吸引人呢……
      - 至少，陪着%CHARA%读了图书馆新到的童话书之后，%SEX%确实没有那么抗拒了的样子
  - acc: 3
    content: 「希望变革身体健康吧」（体力+400）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「？这个愿望是？」
      - 有些惊讶的样子
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊！为什么会许这样的愿望啊！？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要不要！做起来好累！不对，听起来好无聊！！你说的事情我才不想干！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，重新许一个和主人没有关系的的愿望！！！」
      -
      - 为什么这种%YOU%认为对%CHARA%有利的愿望，反而那么不吸引人呢……
      - 至少，把%CHARA%带到甜品店后，%SEX%确实好好地安静了下来


ws_ny_sub_reject:
  - if: d.reject === 0
    lines:
      - %CHARA%的眉头皱了一下，而后，再次挥动魔法杖
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Freesia★Dogwood，说出来吧～！」
  - if: d.reject === 1
    lines:
      - %CHARA%拿着魔杖的手明显地颤抖了一下
      - 皱了皱眉，装作咳了两下，%CHARA%再次挥动魔法杖
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Freesia★Dogwood，说出来吧～！」
  - if: d.reject === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我叫你说你就得说！！！」
      - 声音马上提高了一个量级
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%！！！把愿望给主人说出来！！！！！」


# 经典年第一周结束
we_new_turn:
  title: 新一轮的Thistle
  lines:
    - 新年之后，也该为 %CHARA% 制定经典年的比赛计划了
    -
    - 综合身体素质，脚质和脚程来看的话……
    - 最适合 %CHARA% 的路线，或许是——
    - acc: 1
      content: 「后三冠。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「后三冠……？那是什么？」
    - 训练员室里，眼前的小%UMA%露出了疑惑的表情
    -
    - 「是以多种魔法素材为命名的，三场赛事的总称。」
    - 缓缓讲出，然后戛然而止
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！%CALLNAME%，别不讲话，快说出来听听！」
    - %CHARA%一下被勾起了兴趣
    -
    - 「『樱花赏』，『日本橡树大赛』，『秋华赏』」
    - 「分别对应着春天的染井吉野樱、夏天的英国橡树，以及秋天的百花」
    - 「如果把这些象征不同季节的魔法之力集齐的话——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「很好，很好，非常好，%CALLNAME%！就这么决定了！」
    - 还没等%YOU%说完就打断了话语
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy，要以后三冠为目标，夺取『魔法三冠』！」
    -
    - 虽然说辞有些怪异，而且也完全不知道 %CHARA% 有没有意识到这三场比赛的难度和价值
    - 但不管怎样，至少是让 %CHARA% 有了明确的目标……


# 好感+20，爱慕+1，干劲+1，技能点数+50
ws_valentine_c:
  title: 心跳不止Chocolate？！
  lines:
    - 今天是一年一度的情人节，按照特雷森学院的校园传统，%YOU%准备了一盒巧克力
    - acc: 1
      content: 「巧克力的话……是每个人送一个，还是送给一个人好呢……」
    -
    - 按照特雷森学院的惯例，%YOU%思考着今年的做法
    - 在路上走着的时候，突然看到了 %CHARA%
    -
    - acc: 1
      content: （打个招呼吧。）
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%！我正好要找你呢。」
    - 结果，被 %CHARA% 先打了招呼
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那些人真是的！一天到晚只会说魔法不存在什么的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明，只是自己没有能够学会魔法的天赋罢了！」
    - 马上发起了牢骚
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈啊……！害得我一晚上都没睡好觉，也没能好好练习魔法！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐！%CALLNAME%，我现在就想吃甜品！赶快给我找一家甜品店啦～！！」
    - 结果，绕回了任性的话题上……
    -
    - 在%YOU%一大早就有点汗颜的时候，%CHARA%突然注意到了些什么
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……等一下，%CALLNAME%，你手里拿着的，是甜品对吧？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一直拿在手里，也不吃什么的，难不成……是私藏的魔法甜点？！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「正好，清早是%MAJO%补充魔力的时刻！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐！%CALLNAME%，这些甜品，就算给主人吃掉也没有问题吧？」
    - %CHARA%，用闪亮亮的双眼看着%YOU%
    -
    - acc: 1
      content: 「这个……不太好吧……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！我就知道%CALLNAME%不会那么轻易让出来的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要！我就要吃这个甜点啦！！」
    - %CHARA%在%YOU%面前不断撒着娇
    -
    - acc: 1
      content: 「那……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！果然还是同意了对吧！不愧是我的%CALLNAME%！」
    -
    - ……其实并不是这个意思，但%CHARA%在%YOU%解释清楚前就一把抢走%YOU%手中的巧克力
    - 而后，毫无顾忌地拆开了%YOU%准备的精致礼盒……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～甜品，美味的甜品～」
    - %CHARA%，哼着小曲打开巧克力的包装……
    -
    - acc: 1
      content: 「今天，是情人节来着……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没错！今天，就是传说中一年里爱之魔力最充沛的时刻！」
    - %CHARA%把一颗巧克力随手丢入嘴中
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奶奶说过，只要在这个时候让对方吃下『充满魔力的食物』，就能施展出爱情的强大魔法，让两个人永远都不再分开！」
    - %CHARA%，大口大口嚼着%YOU%的巧克力
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只要能借到厨房，我肯定也能做出那样的食物！」
    - %CHARA%，不一会就把%YOU%的巧克力吃了个精光
    - acc: 1
      content: 「那么，变革到底想要做什么食物呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～那还用说，当然是——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使……%CALLNAME%！！！！！」
    - 像是突然想到了什么东西，双脸变的通红
    -
    - %CHARA% 龇牙咧嘴地看向%YOU%
    - 而后，慌慌张张地拿出魔杖，向着%YOU%舞动起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Poppy★Asphodel，忘掉一切吧！！」
    -
    - acc: 1
      content: 「额！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么样，刚才发生了什么，都忘掉了吧，%CALLNAME%！」
    - %CHARA%紧张而关切地盯着%YOU%
    -
    - acc: 1
      content: 「是……是的……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈——哈啊！真是的！」
    - 稍稍松了一口气的样子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次，不许再在情人节给主人带一大堆巧克力，明白了吗！！」
    -
    - acc: 1
      content: 「好的？？？」
    - 看着 %CHARA% 那不知为何通红依旧的双脸，%YOU%只是顺承着讲话
    -
    - 这样，%YOU%的情人节礼物一大早就全部被%CHARA%吃光了……


rs_oka_sho:
  title: 樱花赏前·温和的 Cherry Blossom
  lines:
    - 「樱花赏」，后三冠的第一棒，在樱花盛开季节举办的G1级英里赛事
    - 同时，也是 %CHARA% 进入经典年以后，第一场算是真正认真对待的赛事
    -
    - 带着希望 %CHARA% 不要突然改变主意的想法，尽早带着%SEX%来到了准备室
    -
    - %CHARA%把帽子放在准备室的桌子上，挥舞着魔杖，口中振振有词
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「CherryBlossom★Azalea，被樱花抚慰吧！」
    - 这样说完后，%CHARA%将魔杖径直指向放在桌上的魔法帽
    -
    - 「真的要……这样对待帽子吗？」
    - %YOU%小声地问道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然了，奶奶送的帽子也是会不高兴的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要是闹起脾气来，只有奶奶才能搞定可就不好了！」
    -
    - 「……」
    - %YOU%于是沉默地站在一旁，等待下一步指示
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%，干嘛那么一副死气沉沉的样子？」
    - 结果，还是被点了名
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难不成——」
    - 不知道又想到了什么
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，也缺少附魔了！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「CherryBlossom★CrownImperial，被樱花抚慰吧！」
    - 突然转变目标，%CHARA%挥舞起魔杖，径直指向了%YOU%
    -
    - 「啊啊……感觉……充满了力量……！」
    - 像被施了魔法一样回应着
    - 「冲线的时候，一定可以喊得更大声了！！」
    -
    - 虽然总感觉有点过分的轻松感
    - 但不管怎么样，%CHARA%有参赛意愿比什么都好
    -
    - %YOU%看着戴好帽子的 %CHARA% 自队伍末尾缓缓走入闸内
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '获得了状态 '
        - content: '[温柔的樱花魔法]'
          title: 变得冷静了！……或许？智力大概有所增加……？
          # 智力+5%


re_oka_sho_win:
  title: 樱花赏后·樱花的魔力
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……这里是哪里？」
    - fontStyle: italic
      content: 不知不觉中，比赛悄然结束了
    - fontStyle: italic
      content: %CHARA%反应过来时，已然到了一个%SEX%未曾来过的地方
    - fontStyle: italic
      content: 四周弥漫着樱花的香气，环绕着一颗颗樱花树
    -
    - fontStyle: italic
      content: %CHARA%好奇而疑惑地看向不远处的天空
    - fontStyle: italic
      content: 就在那一刻——
    -
    - fontStyle: italic
      content: %SEX%所凝视的天空，突然花瓣阵阵，出现一个魔法师——
    - fontStyle: italic
      content: 她，身着樱花色的服装，缓缓从空中飘落
    - fontStyle: italic
      content: 一出现，就给人一种温婉的印象
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: 「！你是！？」
    - fontStyle: italic
      content: %CHARA%惊喜地看着眼前的魔法师
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「我是……樱花魔法之力的持有者……」
    - fontStyle: italic
      color: rgba(213, 126, 206, 1)
      content: 落地之后，用温柔的语气和%CHARA%说着话
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「因为您击败了邪恶的魔法师们，樱花魔法之力，才得以保存……」
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「这份荣耀和力量，无疑是属于您的」
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「现在，我就要将那传说中的樱花魔法之力传递给您」
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「啊啊，小魔法师呦，您就是，『魔法』的未来——」
    -
    - fontStyle: italic
      content: 未来——
    - fontStyle: italic
      content: 祝福的声音似乎回荡在耳旁——
    -
    - divider: true
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼～哼～！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy！从今天开始！就是！！『樱花魔法之力』！！的持有者了！！！」
    -
    - 漂亮地在樱花赏中拿下冠军的%CHARA%，突然得意洋洋地朝着观众们举着魔杖，喊叫着什么
    - 丝毫不在意一旁因为%SEX%不愿意拿而帮忙拿着得胜锦旗，汗颜的工作人员……


re_oka_sho_lose:
  title: 樱花赏后·魔法的另一面
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: 「……这里是哪里？」
    - fontStyle: italic
      content: 不知不觉中，比赛悄然结束了
    - fontStyle: italic
      content: %CHARA%反应过来时，已然到了一个%SEX%未曾来过的地方
    - fontStyle: italic
      content: 四周散落着落花的花瓣，环绕着一颗颗樱花树
    -
    - fontStyle: italic
      content: 不远处，趴着一名看起来温和而平静的，以樱花色为主要着装颜色的魔法师
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「小魔法师啊……您终于来了……」
    - fontStyle: italic
      content: 察觉到%CHARA%的到来，魔法师缓缓地，竭力地抬起头来，看向%CHARA%
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: 「你……是？」
    - fontStyle: italic
      content: %CHARA%小心翼翼地看向眼前这名虚弱的魔法师
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「我是……樱花魔法之力的原持有者……」
    - fontStyle: italic
      content: 温和的魔法师，一边轻轻喘着气一边慢慢叙述着
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「现在，因为被邪恶的魔法师击败，失去了有关的力量……」
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「啊啊……我的生命……也将要像这樱花一样短暂了……」
    - fontStyle: italic
      content: 奄奄一息的魔法师，用温柔而怅惋的语气继续说着
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「或许，这就是接受樱花之力，却没能守护的代价吧……」
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「小魔法师啊，不知，如果是您接受了这份力量，又会如何呢……」
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「您施的，短暂的樱花魔法，如果消散而失去了守护的话——」
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 樱花般的魔法师
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「又会，对您的%CALLNAME%——」
    -
    - divider: true
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    - 不知道到底想到了什么，眼前的小%UMA%脸色一下子变得铁青
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不！要！了！」
    - 突然说着奇怪的话语
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不管是什么樱花魔法还是素材，主人现在都不要了！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我得赶快给你安排解咒魔法！！！」
    - 不知为何，输掉比赛的%CHARA%，非常焦急地把%YOU%拉回了特雷森学院
    - 在这之后，一直对%YOU%念着各自奇怪的咒语……


rs_yush_him:
  title: 日本橡树大赛前·无惧的OakLeaf
  lines:
    - 日本橡树大赛，在生机勃勃的日子里举办的中距离G1赛事
    - 同时，也是后三冠中最引人注目，最重量级的赛事
    -
    - 面对这样的赛事，比起一直被%CHARA%搞不明白的心情弄得团团转
    - 不如，主动出击吧——
    -
    - 帮%CHARA%暂时保管魔法帽的%YOU%，把那顶帽子端正地放在准备室的桌子上


rs_yh_select:
  - if: d.decorate < 3
    acc: 1
    content: 加一些装饰
    lines:
      - 找来了一些新鲜的橡树叶，为%CHARA%的帽子做着装饰
      # 重放
  - acc: 2
    content: （已经够了吧）
    lines:
      - if: d.decorate < 3
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……？这到底是什么情况，%CALLNAME%？」
          - 看着眼前被树叶点缀的魔法帽，%CHARA%显得有些迷惑
          - acc: 1
            content: 「这个……是我为主人准备的附魔……」
          - %YOU%小心翼翼地回应道
          - acc: 1
            content: 「运用橡树魔法素材的力量，说不定，能够增进变革的力量——」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……什么呀！哪有这么用魔法素材的啦？」
          - 有几分惊讶地打断了%YOU%的解释
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「Oak★Heliotrope！不用说了！」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人会亲自把这些素材收集起来，全部放好的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「回去之后，给%CALLNAME%一瓶用它们制作的魔药，作为%CALLNAME%算是在关心主人的奖励！」
          -
          - 似乎事情结果的方向完全偏移了……
          -
          - 之后，%YOU%来到看台上，看着戴好帽子的 %CHARA% 自队伍末尾缓缓走入闸内

      - if: d.decorate === 3
        lines:
          - 结果，变成了现在这个样子
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「…… 」
          - 看着眼前几乎变成树叶帽的魔法帽，东商变革，不知为何陷入了沉默
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「…… 到底是怎么回事，使魔？」
          - 语气，似乎变得格外沉重……
          -
          - acc: 1
            content: 「啊，那个…… 」
          - 稍微有些语塞了
          - 「一时兴起就变成这样了…… 」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「Oak★Vervain！赶快把帽子给主人整理干净，使魔！！」
          - 强硬地下着命令
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不然——」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我就把这些叶子，全部变成魔药给使魔喝下去！！！」
          -
          - 在%CHARA%的威胁下，%YOU%马上开始了清理活动……
          -
          - 之后，%YOU%来到看台上，看着戴好帽子的 %CHARA% 自队伍末尾缓缓走入闸内
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - '获得了状态 '
          - content: '[勇敢的橡树魔法]'
            title: 变得大胆了！…… 或许？力量大概有所增加……？
            # 力量+5%


re_yush_him_win:
  title: 日本橡树大赛后·任性的OakLeaf
  lines:
    - %CHARA%，漂亮地在日本橡树大赛中夺得了冠军
    - 意味着，%SEX%证明了自己拥有后三冠选手中拔尖的实力，夺得了所谓的「橡树魔法之力」
    -
    - 这样的%UMA%，面对采访时候的表现是——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『跑法为什么是那个』？哼哼～要向你们展示的话，当然得用那个魔法才对！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『赢了开心吗』？当然了！天才%MOHOSHOJO%sweepy可是为了这次魔法竞赛，准备了很久的！」
    - 兴致勃勃地回应着
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『跑法对你有什么意义』？……因为天才%MOHOSHOJO%我，觉得那个魔法很酷炫嘛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『能够站在这个地方开心吗』？……还是很开心的，天才%MOHOSHOJO%我做了好多练习呢。」
    - 面对相似的问题，尽量用同样的说法回复着
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『用那个跑法你觉得有什么好处』……？……我觉得好看。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……『用这个跑法开心吗』……？……也许吧。我，毕竟还是为此准备了很久。」
    - 又是一些几乎相同的问题，不过，语气似乎逐渐变得冷淡下来
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不要。」
    - 采访到了一半，突然说起了奇怪的词语
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要，绝对不要！你们问的问题，为什么没有一个和『魔法』有关系啊！？」
    - 刻意表现出有些生气的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明，获胜的%UMA%就那么戴着魔法帽，拿着魔杖吧？！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「普通的，重复个不停的问题，我才不要一个一个像复读机一样全部回答个遍！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！再这样无聊下去，还不如让我回去给%CALLNAME%做魔药呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想要问问题就给我简单！直接！不要弯弯绕绕个不停！！」
    - 在%CHARA%的直接要求下，有些记者确实收敛了一些
    -
    - 在那之后，%CHARA%切实好好地以%SEX%的方式完成了赛后流程
    - 以及，回去之后，惦记着给%YOU%做了（虽然不是用那些橡树叶做的）浓稠的「魔药」……


re_yush_him_lose:
  title: 日本橡树大赛后·不必饮用的良药苦口
  lines:
    - %CHARA%，遗憾地在日本橡树大赛中落败
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要！凭什么，凭什么啊！」
    - 从地下通道离开的时候，直截了当地表明着自己输掉比赛的不满
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「才不对才不对！天才%MOHOSHOJO%sweepy，怎么可能就这么输了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！你说，到底是怎么回事！？？」
    -
    - 面对这种焦躁的情绪，%YOU%应该答复——
    - acc: 1
      content: 「对不起……是我的问题」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你说！%CALLNAME%，既然是你的错的话，你得怎么赔偿我？！！」
        - 走在%YOU%旁边的%CHARA%，凑上来，用迫切的眼神盯着%YOU%
        -
        - acc: 1
          content: 「无论是什么样的魔药，我都会喝的……」
          lines:
            - %YOU%只是这么道歉着
            -
            - 不过，在%YOU%说完这番话后，%CHARA%，不知为何突然停下走路
            - 随后，完全转过身来，继续看着%YOU%
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……」
            - 就这么，对视着，莫名陷入了短暂的寂静
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……哦。原来如此。没想到。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「原来，%CALLNAME%真的很想喝啊。」
            - 眼神中，似乎饱含看怪异生物的意味……
            -
            - 原来……原本并没有「想让%YOU%喝魔药」那个意思吗……！？
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「那就好办了。主人，回去之后就给%CALLNAME%做魔药。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不许逃走！！」
            -
            - 回去之后，%YOU%努力不流眼泪地喝着（虽然不是用那些橡树叶做的）浓稠的「魔药」……


# 速度&智力+5
ws_summer_start_c:
  title: 夏季合宿开始·麻烦
  lines:
    - 夏日，悄然到来了
    - 从早晨开始，太阳开始逐步撒播她的光辉，让世间充满越来越多的温度
    -
    - 在这样的日子里，无论是苦夏还是被称为『夏之女』的赛%UMA%
    - 所有特雷森学院的学生，都有机会享受学院建造的最高水平设施
    -
    - 只需要参加——夏季合宿。
    -
    - 以让%CHARA%也能够利用学院建造的良好设施进行练习为目标
    - 安排着同%SEX%一起乘坐交通工具，去往夏季合宿的现场的计划——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「坐大巴？我才不要！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「开车？电动车？那种东西有什么好的啊！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为什么不能骑扫帚啊！！？？」
    - 结果，集训还没开始，就遇到了难题……
    -
    - acc: 1
      content: 「太过张扬的话，可能会引起骚动的……」
      lines:
        - %YOU%只是尝试劝说
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那要怎么办啊！%CALLNAME%——！！就没有其他方法了吗！？？？」
    - 在训练员室里，%CHARA%眼睛四处打转，焦急地寻找着什么
    - 折叠起来的自行车，一个运动用滑板，到一个小狗玩偶——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！等一下！」
    - 目光突然转向，回归到%YOU%身上
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法师最好的坐骑，不是就在眼前么？」
    - %CHARA%的眼睛闪着光
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「驾，驾！」
    - 骑在%YOU%背上，用两只脚轻轻踢着背
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快点快点再快点——！！！」
    -
    - 忽略掉那些路边投来的微妙目光
    - 不管怎么样，至少是带着%CHARA%好好地到了集训现场……


# 夏季合宿结束的对应扳机时间，假如没有参加夏季合宿，同样以该节点或者对应回合结束为节点触发
# 力量&根性+5
we_summer_end_c:
  title: 魔法之夜的预告
  lines:
    - if: era.get('cflag:0:位置') === era.get('cflag:44:位置')
      lines:
        - 不知不觉中，已经到了返回特雷森的日子
        - 从夏日合宿的忙碌中脱离出来，%YOU%整理好行囊，带着自己的赛%UMA%们返回了特雷森学院
        - 之后，打开了尘封已久的，自己训练员室的门——
    - if: era.get('cflag:0:位置') !== era.get('cflag:44:位置')
      lines:
        - 不知不觉中，参加夏季合宿的赛%UMA%们已经返回了学园
        - 又结束了忙碌的一天，从训练场返回的%YOU%，像往日一样向办公室的地方走去
        - 之后，轻轻打开了训练员室的门——

    - 一切都像往常一样几乎没有变化，熟悉而令人安心
    - 夕阳的光照透过窗帘的缝隙从窗户照进来，照在训练员室的椅子上，桌子上
    -
    - 照在，桌面上一封十分朴素，却不知为何格外吸引%YOU%目光的信上。
    -
    - 是魔法怪盗的预告信，还是魔法学院的邀请函？
    - 总之，这封信不知怎样进入了训练员室，静静地躺在了%YOU%的桌上
    -
    - 拿起来看一看吧
    - 这么想着的时候，%CHARA%跟着走进了训练员室
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂，%CALLNAME%——」
    - %YOU%稍微整理了一下桌面，把信拿在手中
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……那是什么？信？」
    - %YOU%举起信封，将有字的一面转向%CHARA%
    -
    - 上面写着：
    - 致，我最亲爱的孙女
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！奶奶！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！写了什么，%CALLNAME%！赶快念给我听听！」
    -
    - 为什么一定要让别人念出来而不能只是自己看呢……
    - 这样想着，在凑上来的小脑袋面前缓缓打开信封——
    -
    - 念出了，信上简短而清秀的文字：
    -
    - content: 亲爱的孙女，最近还好吗？
      fontStyle: italic
      align: center
    - content: 不知不觉中，已经到了百花盛开的季节，奶奶的花园中，花儿似乎也长得更盛了呢
      fontStyle: italic
      align: center
    - content: 这让奶奶想起了，几个月之前，和孙女你的一次闲聊
      fontStyle: italic
      align: center
    - content: 你说，你不仅拥有了自己的%CALLNAME%，还掌握了名为『赛跑的魔法』的厉害魔法
      fontStyle: italic
      align: center
    - content: 虽然已经过去一段时间了，但是，如果可以的话
      fontStyle: italic
      align: center
    - content: 还请记住，那次谈话中，我和你说的，『魔女之夜』的约定
      fontStyle: italic
      align: center
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！！」
    - 耳朵嗖地一下树立起来，瞳孔明显地收缩
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！！下一场比赛是什么时候！？赶快告诉我！！」
    - 焦急的问着%YOU%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「至少……要在『魔女之夜』之前先……！」
    - 自言自语着什么
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '获得了状态 '
        - content: '[大魔法师的约定]'
          title: 似乎是某个重要的约定。为了遵守约定而干劲高亢。


rs_shuk_sho:
  title: 秋华赏前·期望的Anemone
  lines:
    - 秋华赏，在百花盛开的日子里举办的英里G1赛事
    - 同时，也是原定计划中，%CHARA%要在经典年参加的最后一场G1赛事
    -
    - 不知为何，前一天就接到了 %CHARA% 让%YOU%自己早点到比赛现场的命令
    - 进入准备室的%YOU%，一下就看见了站在那里的%CHARA%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『魔法三冠』的最后一场……『秋华赏』……」
    - 眼前的鹿毛小%UMA%，不知思考着什么，开始了自言自语
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「能把这份魔法也纳入囊中的话……『魔女之夜』，就有更大的希望……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后，天才%MOHOSHOJO%sweepy会漂亮地在『魔女之夜』施展魔法……」
    - 越说越激动的样子，逐渐露出笑容
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后，奶奶就会亲口承认天才%MOHOSHOJO%我，是独当一面的大——！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！干什么偷听主人的自言自语！」
    - 看到%YOU%就在跟前的%CHARA%，明显吓了一跳
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你……你没有自己的事情要干吗%CALLNAME%！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『主人的事情也是%CALLNAME%的事情所以要搞明白』……？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要！在魔法竞赛前打扰主人是不可饶恕的罪名！Anemone★Juniper！%CALLNAME%退散！！」
    -
    - 并不用力地把%YOU%慢慢推出了准备室
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一次，不许%CALLNAME%不打招呼就站在主人面前！！！」
    -
    - 虽然还是没能搞明白『魔女之夜』的完整含义，但%CHARA%参赛的意愿高涨是无比确定的
    - 此刻，%YOU%站在看台上，看着戴好魔法帽的%CHARA%，在队伍末尾默念三分钟咒语后缓缓走进闸门
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '获得了状态 '
        - content: '[期望的秋日魔法]'
          title: 百花的盛开与相对应的收获……？速度似乎增加了。
        # 速度+5%


re_shuk_sho_win:
  title: 秋华赏后·期望未来的魔法
  lines:
    - 凭借着高亢的干劲和许久以来的努力，%CHARA%，顺利在『魔法三冠』的最后一冠中取得冠军
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样一来……『魔女之夜』也就……」
    - 此刻，走出赛场的%CHARA%低下头想着什么，似乎露出了一丝笑容
    -
    - 但是，马上又用余光不屑地瞟了呆在一旁的%YOU%一眼，抬起了头
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！才没有在讲什么！这一次，不会再让%CALLNAME%听到了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想要学秋日魔法什么的，%CALLNAME%还早得很呢！！」
    -
    - 不管怎样，一路哼着小曲的%CHARA%，在赢下『魔法三冠』的最后一冠后确实很高兴的样子
    - 应该是，离『魔女之夜』更近了一步吧——


re_shuk_sho_lose:
  title: 秋华赏后·走向未知的魔法
  lines:
    - 即使有着高亢的干劲和许久的努力，%CHARA%，也还是阴差阳错地没能在『魔法三冠』的最后一冠中取得冠军
    - 不甘地想着为什么的小%UMA%，此刻正和%YOU%并排走着，用两根手指分别怼着太阳穴
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……唔！到底是为什么……为什么……！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我都这样子了，居然，还是不能够……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难不成，我，真的不过是……」
    - 不知为何说话突然停顿了一下，眼神有些失落的样子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不！不对！那是不可能的！」
    - 突然打断了自己，马上振作起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！反正……还没有到『魔女之夜』……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就算这次没能成功……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只要，在那天能够……就……」
    - %CHARA%微妙地自言自语着什么
    -
    - 即使输了，似乎『魔女之夜』也在不断迫近着——
    - %YOU%看着身旁不知为何有些沉默寡言，只是和%YOU%一同默默回到校园的小%UMA%


# 触发条件:秋华赏后下一周
# 根性&耐力+5
ws_truth:
  title: 魔法之夜的真相
  lines:
    - 自从收到来自奶奶的那封信，%CHARA%的训练积极性和参赛热情，都明显地有所增长
    - 明显，是有所意图的样子
    -
    - 而%CHARA%一直在提及的，有关意图的，最核心的那个词——
    - 果然还是『魔女之夜』吧
    -
    - 在这之前就通过各种方式尝试推测『魔女之夜』的真实含义
    - 但是，侧面的信息收集，尤其是针对%CHARA%的信息收集果然还是太过困难
    -
    - 或许……还是直接问，更容易搞明白一些
    - acc: 1
      content: 「『魔女之夜』，到底是什么呢……？」
    - 在%CHARA%因为练习取得成效而稍显放松的时候，小心翼翼地问出了这个问题
    -
    - 原本以为是不可言说的秘密，只是打算稍微收集些其他的线索，但是——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么啊%CALLNAME%，这个不知道那个不知道的。怪不得那么喜欢偷听主人的魔法施展过程。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～！既然%CALLNAME%这么不明白的话，主人我就好心告诉你吧！」
    - 出乎意料得顺利
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『魔女之夜』，就是所谓大魔法师之间相见的夜晚」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在那一天，世界上所有的魔法师都会聚在一起……」
    - 娓娓道来着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也就是说——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在那一天，奶奶，要亲自到『伊丽莎白二世女皇杯』的现场，看我施展魔法！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么样？是不是很让%CALLNAME%震惊的消息！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是向奶奶展示我已经参透你所说的『赛跑的魔法』，能够成为独当一面的大%MAJO%的大好时机！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，奶奶说，只要我赢了比赛，她晚上就会在校门口等我！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～等到我被奶奶说不愧是天才%MOHOSHOJO%sweepy的时候……」
    - 说着说着，鹿毛小%UMA%又沉浸在对未来的想象之中
    -
    - 这样一来，%CHARA%的目标倒是非常明了
    - 在经典年赢下 伊丽莎白二世女皇杯……
    -
    - 虽然有着各种各样的顾虑，但%CHARA%愿意的话，就一定能做到的吧
    - %YOU%只是这样想着


rs_eliz_cup_c:
  title: 伊丽莎白二世女皇杯前·渴求的魔法
  lines:
    - 漫长的时光已然过去，或许是魔法的指引，又或者是冥冥之中的必然
    - %YOU%和%CHARA%在闪光系列赛中的旅途，已然不知不觉即将踏入资深级的领域
    - 而踏入资深级的领域，到底意味着什么呢——
    -
    - 伊丽莎白二世女皇杯，资深级的中距离G1级赛事
    -
    - 相比于『后三冠』……抑或『魔法三冠』，伊丽莎白二世女皇杯，远非『绝对公平的赛事』
    - 也就是说，这场赛事，有远比%CHARA%资历丰厚，甚至拿下过全部后三冠，在资深年参加过众多激烈争斗的前辈参加
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没关系的，没关系的，只要是天才%MOHOSHOJO%sweepy，什么都可以做得到。」
    - 和%YOU%一齐来到现场的%CHARA%，只是在休息室内来回踱步
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%！」
    - 突然叫了%YOU%一声
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……你说，如果主人输了，到底要怎么办？」
    -
    - 或许心里确实有着和%SEX%一样的忐忑
    - 但不管怎么样，果然还是要回答——
    - - acc: 1
        content: 「变革不会输给别人的」
    - 只是简明而坚定地回复。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……哼。那样就好。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这一次，一定要……」
    - 自言自语着
    -
    - 不久，%YOU%来到了看台上
    - 不远处，%CHARA%戴好魔法帽，别上魔杖，一直呆在队伍末尾默念着咒语
    - 直到有人催促，%CHARA%才顿了一会，缓缓向闸门走去
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '获得了状态 '
        - content: '[渴求的奇迹魔法]'
          title: 渴望用奇迹获得认可。也许增加了根性。
          # 根性+5%


re_eliz_cup_win_c:
  title: 伊丽莎白女皇杯后·魔法之夜的真相？
  lines:
    - %CHARA%在伊丽莎白二世女皇杯中漂亮地取得了胜利
    - 原本，对于这样出色的新秀，应该会有相当长时间的采访
    -
    - 但%CHARA%，显然对那些东西一点兴趣都没有
    -
    - 按照约定，一离开比赛现场，就陪着%CHARA%来到了校门口
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等着瞧吧%CALLNAME%！第一次见到大魔女的感受，可是会让你终身难忘的！」
    - 从路上开始，就不停激动地发表着各种宣言
    -
    - 最终，你们停在了校门口一个路灯下，默默等待着奶奶的到来
    -
    - 只是，静静等待着
    -
    - 下午
    - ……并没有人来
    -
    - 黄昏
    - ……并没有人来
    -
    - 薄暮
    - ……并没有人来
    -
    - 傍晚
    - ……
    -
    - 直至入夜
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 耳朵垂落下去，帽子边沿随着风而上下摇摆着，似乎要被吹走
    -
    - 昏暗的灯光下，在不远的角落，%YOU%似乎看到探出的一顶洋帽，和一张从洋帽处抛出的纸——
    - 顺着风儿，那张纸突然遮蔽了%YOU%的视野
    - - acc: 1
        content: 「……！！」
    - 将纸张取下，放在手中，上面有着清秀的字迹
    -
    - content: 非常抱歉，奶奶今天有事不能来，害你在门口等着辛苦了
      fontStyle: italic
      align: center
    - content: 『赛跑的魔法』非常厉害，但是，可能并不仅仅只是那么简单的事情
      fontStyle: italic
      align: center
    - content: 今后，还请继续追寻『赛跑的魔法』
      fontStyle: italic
      align: center
    - content: 带着你的%CALLNAME%，不断前进吧——
      fontStyle: italic
      align: center
    -
    - 在%CHARA%焦急的关注下，%YOU%一字一句地把上面的话念了出来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呣呣……！到底是什么意思啊！！」
    - 马上变得焦虑了起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『赛跑的魔法』……难道不就是这个意思吗！？？」
    - 低下头去，用两根手指怼着太阳穴
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不对不对不对！！！」
    - 突然抬起头，拿出魔杖，指向%YOU%的方向
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都是你的错，%CALLNAME%！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果不是你随便乱说的话……我就一定能参透奶奶眼中『赛跑的魔法』的真谛的！！！」
    -
    - content: 还请稍安勿躁
      fontStyle: italic
      align: center
    - content: 只要有 %CALLNAME% 在身边，无论怎么样
      fontStyle: italic
      align: center
    - content: 你都一定，会找到属于自己的
      fontStyle: italic
      align: center
    - content: 『赛跑的魔法』
      fontStyle: italic
      align: center
    -
    - 在纸上，还有这样的，%YOU%没来得及读出的话语


re_eliz_cup_lose_c:
  title: 伊丽莎白女皇杯后·魔法之夜的自相矛盾
  lines:
    - %CHARA%，最终是没能赢过资历深厚的前辈们，在伊丽莎白二世女皇杯中落败
    - 比赛结束后，%YOU%在赛场出口默默等待着%CHARA%
    -
    - 不久，就和缓缓走着，挪出赛场的 %CHARA% 相遇了
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - %CHARA%，远远看见了%YOU%
    - %YOU%也看见了%SEX%那有几分恍惚的神情
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使——魔——！！！！！」
    - 突然身体颤抖起来，竭力咬着牙
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！！！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜呜……呜呜呜呜呜……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我，再也不要%CALLNAME%了！！！！！」
    - %CHARA%用手臂掩住双眼，奔跑着，与%YOU%擦肩而过——
    -
    - %YOU%看着%SEX%那在隧道尽头缩小的背影
    -
    - 当天下午，在训练员室等待的%YOU%，收到了特雷森方面有关 %CHARA% 主动要求解约的通知
    -
    - 晚上，只是尝试到%SEX%最有可能出现地方散心的%YOU%，在特雷森学院的门口看见了 %CHARA% 和%SEX%的奶奶
    -
    - acc: 1
      key: be
      content: （如果能，再看几眼的话……）
      lines:
        - 就算终究无法让 %CHARA% 纯朴的想法实现，就算%YOU%终究无法陪伴 %CHARA% 走完这三年
        - 这个纯粹而任性的身影，终究还是想要多看几眼啊
        -
        - 这样想着，%YOU%从校门里悄悄探出脑袋，借着昏暗的灯光，望向不远处的马娘老人和小%UMA%
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜呜……呜呜呜……」
        - %CHARA%，紧紧依偎在马娘老人的怀抱中
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对不起，奶奶……我……没能够……」
        - %CHARA%泛红的眼眶中，几滴液体缓缓流淌出来
        -
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「没关系的，没关系」
        - 奶奶，摸了摸怀里 %CHARA% 的头
        -
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「当然，『赛跑的魔法』是很厉害的魔法」
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「但身为大魔法师，只会『赛跑的魔法』，不是太没趣了吗？」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「可是……连『赛跑的魔法』都不能掌握的话……我……又怎么能……」
        - %CHARA%，断断续续地说着话
        -
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「只是一个人的话，或许确实很难做到吧……」
        - 只是微笑着
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「但天才%MOHOSHOJO%，不是一直有着属于自己的 %CALLNAME% 吗？」
        -
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「看呐，你的 %CALLNAME%」
        -
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「现在，也还陪在你身边呢」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……！！」
        - 顺着奶奶温柔的目光，%CHARA%看向%YOU%所在的角落
        -
        - 突然从奶奶怀抱里挣脱出来，抹去通红双眼旁的泪滴
        - %CHARA%，马上扭头看向一边，双手环抱在胸前
        -
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「呵呵……还是和以前一样呢」
        - color: #对应角色颜色
          content:
            - fontWeight: bold
              content: 奶奶
            - 「那么，还请拜托你关照这孩子了」
        -
        - %CHARA%的奶奶和%YOU%简单地互相擺手告别
        - 站在一旁的%CHARA%不时偷瞄着这一切
        -
        - 一直，到奶奶的身影看不见为止
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Rainflower★Lotus！！！%CALLNAME%，刚才的一切，通通给我忘记！！！！！」
        - 跑过来，用魔杖径直指着%YOU%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「天才%MOHOSHOJO%sweepy，一定会找到魔法的真谛，成为最伟大的大魔法师！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「在那之前，%CALLNAME%都要像现在一样呆在主人身边，明白了吗！！！」
        -
        - 不管怎样，%CHARA%似乎放弃了原本的决定
        - 意外很有斗志的样子，应该是好事吧
    - acc: 2
      content: （或许……挽留也没有用吧）
      lines:
        - %CHARA%如此直率的想法，%YOU%没也能帮%SEX%实现
        - 事到如今，再做挽留也没什么意义吧
        - 带着这样的念头，%YOU%拖着沉重步伐走回自己的训练员室，静静地坐着，坐着
        -
        - 但是，似乎凡事都绝非定数
        -
        - 就好比现在这名不知为何突然反悔，回到%YOU%训练员室里的小%UMA%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……哼！」
        -
        - 坐在角落中的小椅子上，扭头看向墙壁，摆出一副倔强样子，却又时不时偷看几眼%YOU%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……为什么那样子看着我？」
        -
        - acc: 1
          content: 「明天的练习安排……怎么讲？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不要不要不要！我现在不想讨论这个！！」
        - 依然是那副样子
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你是%CALLNAME%！%CALLNAME%就该好好听主人的命令！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我命令你，现在不许和我讨论练习的事！！」
        -
        - acc: 1
          content: 「那……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……为什么又那么可怜巴巴地看着我？」
        -
        - acc: 1
          content: 「……明天一定会好好练习的，对吧？」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……知道了知道了！说话不算话的人是小狗！」
        - %CHARA%起身，拼尽全力把%YOU%推到门外，利索地把门锁上
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明天%CALLNAME%不来找我……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我就把%CALLNAME%变成小狗！！！」
        - 房间里传出了这样有几分呜咽的声音
    - acc: 3
      content: （不对，从一开始只有一名——）
      comment:
        - fontWeight: bold
          fontSize: 0.8rem
          color: red
          content: 【这是来自「假如」世界线的恶劣可能性！会导致游戏直接进入结局！】
      lines:
        - 揉了揉眼睛，%YOU%确认自己刚才确实看错了
        - 灯光下，分明只有一名马娘老人孤独地站着，等待着谁的到来
        -
        - 那名鹿毛的小%UMA%，果然还是沉浸于悲伤之中，不可能在此刻想到来校门口，和%SEX%的奶奶相见吧
        - 在这里看见%CHARA%和%SEX%的奶奶谈话什么的，或许，只是%YOU%多想了吧——


be_dream_end:
  title: 梦之终焉
  lines:
    - 尽管和%CHARA%的分别让%YOU%有几分恍惚，但不久以后，一切也都回归了正轨
    - %YOU%依然作为特雷森的训练员，发掘并教导着赛%UMA%们在赛场上发光发热
    -
    - 在此之余，偶尔，会在路边听到这样的发言
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过是一群不懂魔法的凡人罢了！凭什么就敢说我的魔法一点意义都没有啊！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都是邪恶魔法师的阴谋！想着我只要放弃了魔法，自己就能用魔法打败我了！！我才不那么干！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一定……一定是黑暗魔法的干扰！！！不然，我的魔法怎么可能……」
    -
    - 那是很久之后的事情了。距离%CHARA%决定和%YOU%解约已经过去了不知几个月
    -
    - 在离开训练室的路上，%YOU%在操场长椅上看到了坐着的%CHARA%
    - 并没有戴着魔法帽，而是将帽子和魔杖都好端端地放在一旁
    - 总是低着头，偶尔抬起头看看周围
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……。是你这家伙。」
    - 终于，在一次抬头时，看到了停下来的%YOU%
    - 不过，还是缓缓将头扭到一边去，不愿意看向%YOU%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么了？你也是来嘲笑我的吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……想笑就笑吧」
    - 只是喃喃道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「反正，一切都是假的，假的，都是假的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你是假的，我是假的，大家都是假的，那个什么从一开始就是假的……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……你还站在这里看我干什么？没有自己的事情要去做吗？」
    - %CHARA%看了一眼%YOU%
    -
    - ……倒也确实有想做的事情
    - acc: 1
      content: 「不要，那么想吧」
    -
    - 「或许，我早已不再是你的训练员，你的%CALLNAME%了」
    -
    - 「但是」
    -
    - 「你，一直都会是那个天才魔——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊啊啊啊啊啊烦死了烦死了烦！死！了！！！！！！」
    - 打断了话语，不知道到底为什么突然性情大作，歇斯底里地吼着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 东商变？
        - 「你信关我什么事啊！你信关别人什么事啊！！你信又有什么用啊！！！！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 东商变？
        - 「还在说什么%CALLNAME%啊%CALLNAME%，这世上明明根本就没有%CALLNAME%！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 东商？？
        - 「天……才……那，什么……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 东商？？
        - 「你才是那什么啊！你的爸爸妈妈爷爷奶奶弟弟妹妹哥哥姐姐全都是啊！！！！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 东？？？
        - 「我，我是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 东？？？
        - 「我……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？？
        - 「呜呜呜……呜呜呜呜呜呜呜呜呜……」
    - 拥有%CHARA%名字的鹿毛小%UMA%，在长椅上缩成一团
    -
    - acc: 1
      content: 「……」
    -
    - 不管怎样，%YOU%仍然是一名训练员，仍然有着自己的担当赛%UMA%需要教导
    - 或许，这种小小的插曲明天就会忘掉吧
    -
    - 或许吧
    - 人，总是要向前走的。


# 参加伊丽莎白女王杯后回合结束
# 速度&力量+5，日常口上变化
we_asphodel:
  title: 新生的Asphodel
  lines:
    - 过去伊丽莎白二世女皇杯已有一段时间，%YOU%被%CHARA%拉着，一起来到了图书馆
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这本……不是。那本……也不是。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂，%CALLNAME%！帮我把那本书拿下来。」
    - 骑着%YOU%，%CHARA% 从高高的图书馆书架上拿下一本芬兰语古典草药书
    -
    - 从拿到的那一刻起马上开始焦急地翻动着
    - 但是，并没有什么收获的样子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呣呣！看不懂，完全看不懂啊！！」
    - 用双手食指不停揉摁着太阳穴
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然……魔法还是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不对不对不对！那种事情是不可能的！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，给我把这间图书馆里所有的魔法书都拿过来！！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「能够马上学会的新魔法，一定会有的！」
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「那个……」
    - 作为图书管理员，%CHARA%的前辈，一旁，%ZOB_ZOY%缓缓讲着话
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「变革同学，为什么一直那么想着去学书上的魔法呢？」
    -
    - %ZOB_ZOY%看向这边的目光，还是引起了%CHARA%的注意
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～当然是因为，我已经穷极了我所能掌握的一切魔法」
    - 转过头去，刻意摆出自信的样子回应道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「到了不得不从可怜的书上，寻找一些自己原本看不上眼的魔法的时候了～」
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「那……」
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「像变革同学那么厉害的话，
        - fontWeight: bold
          content: 『创造属于自己的魔法』
        - ，不就好了吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    -
    - %YOU%被这名突发奇想的小%UMA%又硬生生地拉回到了训练场
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奶奶眼中的『赛跑的魔法』怎么样都好」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「从今天起，天才%MOHOSHOJO%sweepy，就要『创造』属于自己的魔法！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～奶奶一定是看到了我这份『创造魔法』的潜力，才对我说出那番话的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看好了%CALLNAME%！接下来的这个魔法，我只用一次！」
    -
    - %CHARA%戴好帽子站在训练场的跑道上，摆好起跑姿势——
    -
    - 那份奇迹般的速度，无论看上几次，都只会让人确定一个事实：
    - 「这就是，『魔法』——」
    -
    - 不是追寻%YOU%，也不是追寻别人所学来的魔法
    - 而是%CHARA%，「自己的魔法」


# 资深年第一周回合开始
ws_new_year_s:
  title: 初诣
  lines:
    - 时光如梭，三女神过隙
    - 从今天开始，%CHARA%正式成为了一名步入资深级的赛%UMA%
    -
    - 而能在资深年的赛事中踞有一席之地的，必然是经过千锤百炼，层层筛选的强者们
    - 「会遇见，越来越多难缠的对手吧——」
    -
    - 不过，只要 %CHARA% 想要取胜，%SEX%便有丝毫不弱于任何一名在经典三冠中名声显赫选手的意志和能力
    - 无论遇见怎样的对手，无论%SEX%入闸前的自言自语吸引了多少人的目光
    - 在赛场上，想要取胜的%SEX%，一定能将一切一扫而空——
    -
    - ……首先，%SEX%还是得想要取胜
    - 总之，以让%SEX%过好新年，找到新的切实目标为首要目的吧
    -
    - 像经典年一样，带着 %CHARA% 来到了神社
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么呀什么呀什么呀！%CALLNAME%，你怎么就那么喜欢跑来许愿啊！」
    - 排队的时候，%CHARA%像往常一样不耐烦了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「主人，不来神社明明马上就可以钻研出一个新的独创魔法的！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，倒也没有关系。」
    - 似乎有了不同的发展
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy，这次早就自己制作好了『许愿魔法』，能够一下子实现%CALLNAME%的愿望！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Cornflower★WhiteHeather，不管是什么愿望，实现吧～！！」
    - %CHARA%举起魔杖，带着自信的表情挥舞了一下，径直指向%YOU%
    -
    - acc: 1
      content: 「真的……不管是什么愿望都可以实现吗？」
    - %YOU%轻轻地问道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「干什么%CALLNAME%！你竟然敢质疑主人新创立的魔法！！」
    - 气鼓鼓地看着%YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只要把愿望大声讲出来就好了，不许多说别的话！！！」
    -
    - 「……那我要许愿——」
    - 接下来，要接着的话是——
    - acc: 1
      key: select
      content: 「希望变革比赛获胜吧」（全属性+30）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - 突然陷入了微妙的沉默
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Moonwort★Adder's tongue，不管是什么愿望，现在，立刻，马上消失吧——！！！！！」
        - %CHARA%举起魔杖，用各种方式总之慌乱地挥舞了一下，又径直指向%YOU%
        -
        - 许愿魔法的效果似乎还是强过了消失魔法
        -
        - 即使一直叫着不要，回去之后，%CHARA%还是在%YOU%的愿望下乖乖多做了练习
        - 虽然，开始练习前在训练场边不甘地干站了好久
    - acc: 2
      content: 「希望变革学习进步吧」（技能点数+200）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - 突然陷入了微妙的沉默
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Moonwort★Adder's tongue，不管是什么愿望，现在，立刻，马上消失吧——！！！！！」
        - %CHARA%举起魔杖，用各种方式总之慌乱地挥舞了一下，又径直指向%YOU%
        -
        - 许愿魔法的效果似乎还是强过了消失魔法
        - %CHARA%非常不甘地在训练员室里看起了%YOU%塞给%SEX%的『赛跑魔法改良理论』
        - 虽然对能够改进自己的魔法有几分高兴，但还是一直叫着不要
    - acc: 3
      content: 「希望变革身体健康吧」（体力+800）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - 突然陷入了微妙的沉默
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Moonwort★Adder's tongue，不管是什么愿望，现在，立刻，马上消失吧——！！！！！」
        - %CHARA%举起魔杖，用各种方式总之慌乱地挥舞了一下，又径直指向%YOU%
        -
        - 许愿魔法的效果似乎还是强过了消失魔法
        - 于是，伟大的天才%MOHOSHOJO%也需要开始烦恼于凡人的饮食问题
        - 对连续几日吃营养餐叫苦连天的%CHARA%，最后终于在%YOU%的允许下吃到了冰激凌


# 资深年第一周回合结束时
we_magic_stage:
  title: 魔法的舞台
  lines:
    - 新年之后，也该和 %CHARA% 一同制定资深年的比赛计划了
    -
    - 「因为变革的魔法是如此如此这样的……所以说，要那般那般才好，也就是说，要这样那样——」
    - 试图向眼前的鹿毛小%UMA%解释%SEX%在资深年可能的赛事选择
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦。嗯。明白了。原来如此。」
    - 听起来就很应付的样子……
    -
    - 「既然如此……」
    - %YOU%小心地说道
    - 「变革，对接下来怎么参加魔法竞赛，展示『赛跑的魔法』有想法吗……？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……那主人参加这些竞赛不就好了？」
    - 非常干脆利落地回答了
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个叫什么『安田纪念』的，那个叫什么『宝冢纪念』的，还有什么秋天的『天皇赏』，都有很多人看对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要参加这些。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还有还有！那个『伊丽莎白二世女皇杯』！%CALLNAME%，你要是敢给主人忘了办这场比赛的参赛手续！！！」
    -
    - 结果，%CHARA%在赛事选择上意料之外地积极——
    - 或许，不久之后，%SEX%真的能在其中的某些赛事中展现『魔法』，向大家证明些什么吧


rs_yasu_kin_s:
  title: 安田纪念前·积极的RedClover
  lines:
    - 安田纪念，资深级的G1英里赛事，英里%UMA%的最高证明之一
    - 每年的安田纪念，总会吸引各种各样的强者前来挑战
    -
    - 这次比赛，不仅有众多资深的日本赛%UMA%参赛，更有顶级的香港赛%UMA%前来
    - 竞争的烈度，不容小觑
    -
    - 按着%CHARA%的邀约，早早地就赶到了比赛场地的休息室
    - 结果，%CHARA%比%YOU%还要早地就到了休息室里
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么来的那么晚啊%CALLNAME%！我不是说过了，这次要早点到的吗！」
    - 一看到%YOU%，%CHARA%就马上斥责了起来
    -
    - 「变革……这次觉得像秋天一样……有必要早一点到吗？」
    - %YOU%看了看时间
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然有必要！不早一点到的话，大家怎么多看几眼我的魔法啊！」
    - 只是这么回应道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂。%CALLNAME%！帮我把帽子和魔杖整理一下！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这一次，我要让所有人都好好看一看，天才%MOHOSHOJO%sweepy的独创魔法！」
    -
    - 不久，%YOU%来到站台上，远远看着下到赛场的鹿毛小赛%UMA%
    - %CHARA%出乎意料地没有呆在队伍的末尾，只是按照号码的顺序入了闸


re_yasu_kin_win_s:
  title: 安田纪念后·任性的大言不惭
  lines:
    - %CHARA%，成功在甚至有香港顶级赛%UMA%在内众多强者参赛的安田纪念中取得了冠军
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看吧看吧！天才%MOHOSHOJO%sweepy的魔法，就是这样的东西～！！」
    - 站在领奖台上的%CHARA%，非常激动地用魔杖指着台下的观众，难得好好地穿上了得胜锦旗
    - 而后，面对采访，不停说着各种有关魔法的发言。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「或许，『魔法』的话，不同的家伙是会有不同的想法」
    - 不知为何，回答采访问题的间隙，突然开启了新的话题
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是。我是要说。」
    - 用魔杖指了指某些因为刚才有关魔法而不是赛跑的发言而议论个不停的观众
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「即使这样，还是不相信天才%MOHOSHOJO%sweepy所展现魔法的某些家伙们——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你们，会在『宝冢纪念』上」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「见证更加独属于我的，魔法的『奇迹』。」
    -
    - 小%UMA%，大言不惭地说出了夸张的话语
    - 但是，有着这样的状态和积极性的话
    - 说不定，真的能在接下来的比赛中——
    - %YOU%确乎对%SEX%有一种，或许比%SEX%本人更加偏执的信心


re_yasu_kin_lose_s:
  title: 安田纪念后·任性的执意向前
  lines:
    - 强者云集的安田纪念最终还是没有那么容易取胜
    - %CHARA%，遗憾地在众多强者逐鹿的安田纪念中落败
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔唔……到底是哪里出了问题！？」
    - 用两根手指怼着太阳穴的%CHARA%，一边自言自语着一边和%YOU%一同走出赛场
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！没关系，新改良的魔法没那么快出效果也正常！」
    - 一下子将头抬起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一次，在『宝冢纪念』上，他们那群家伙就没那么好运了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一定要让他们见识一下，天才%MOHOSHOJO%，魔法的『奇迹』。」
    -
    - 不仅没有斥责%YOU%，更没有沉浸于任何自责或者悲伤的情绪
    - 即使这次输了，依然有着这样的状态和积极性的话
    - 说不定，真的能在接下来的比赛中——
    - %YOU%确乎对%SEX%有一种，或许比%SEX%本人更加偏执的信心


rs_takz_kin_s:
  title: 宝冢纪念前·笃定的Protea
  lines:
    - 宝冢纪念，资深级的重量级中距离G1赛事
    - 除去热衷于参加后三冠的选手们，众多曾参加过经典三冠的选手也会积极参与这场赛事
    -
    - 真心呼唤，林可，跳舞之城，每一名都是经典赛事中的佼佼者
    - 除此之外，最引人期待的选手，非上个秋季崛起的%ZOB_ZOY%——罗布罗伊莫属
    -
    - 那份与外表不完全相称的精湛实力，或许正可以称作——
    - acc: 1
      content: 「罗布学士，拿起了属于自己的剑」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「学士？拿剑？……什么呀！那是什么啊！？」
    - 在地下通道中，与赛场的紧张氛围相比，用困惑表情听%YOU%讲着话的%CHARA%显得十分不合群
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要！%CALLNAME%你这么一说，我感觉我好像施展魔法的动力都快没有了！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「且不说能不能拿出来……我是说」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那种魔法，怎么能够和我的魔法相提并论嘛！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「反正，%CALLNAME%你只要知道一件事——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「无论什么家伙——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在天才%MOHOSHOJO%sweepy的独创魔法面前，都会，一扫而空的。」
    - 只是给出这样的答复
    -
    - 去到赛场的%CHARA%，在闸门前稍作停留
    - 看了一会周边的对手，又略带不屑地念了一会奇怪的咒语，缓缓进了闸
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '获得了状态 '
        - content: '[激昂的对决魔法！]'
          title: 相信自己绝对能赢！至少根性是提升了！
          # 全属性+5%，根性额外+10%


re_takz_kin_win_s:
  title: 宝冢纪念后·新的约定
  lines:
    - 电光石火的激烈比赛转眼间就结束了
    -
    - 比赛的庆祝流程结束后，和%CHARA%一起来到了场边
    - 突然，看到不远处等着的，一名带着洋帽的马娘老人——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！奶奶！」
    - 眼睛一下子就亮了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～果然，奶奶也被天才%MOHOSHOJO%sweepy的独特魔法打动，就是用魔法也要过来看看呢！」
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「呵呵，果然，还是这个样子呢……」
    - 奶奶只是微笑地看着%CHARA%
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「……如果可以的话」
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「下周，可以找时间到奶奶家里坐一坐吗？」
    - 然后，改变了话题，不知为何提出了一个请求
    -
    - 和%CHARA%一齐果断地答应了奶奶，不久，同小%UMA%一齐返回了特雷森学园


re_takz_kin_lose_s:
  title: 宝冢纪念后·新的期许
  lines:
    - 电光石火的激烈比赛转眼间就结束了
    -
    - 比赛的庆祝流程结束后，和%CHARA%一起来到了场边
    - 突然，看到不远处等着的，一名带着洋帽的马娘老人——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！奶奶！」
    - 眼睛一下子就亮了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～连招呼都不打突然就来找天才%MOHOSHOJO%sweepy什么的，果然是认可了我的实力吧！」
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「呵呵，果然，还是这个样子呢……」
    - 奶奶只是微笑地看着%CHARA%
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「或许，就算一直这样，天才%MOHOSHOJO%也会找到属于自己的道路吧」
    - 不知为何，喃喃自语着什么
    -
    - 在和奶奶谈了一会了完全不旧的往事之后，和%CHARA%一齐返回了特雷森学园


# 赢下宝冢纪念的场合，宝冢纪念对应回合下一周开始
ws_magic_dream_w:
  title: 魔法之梦
  lines:
    - 夏季清晨的阳光并不燥热，即使照射在身上，却意外只觉得温暖
    -
    - 被%CHARA%催促着一大早就出发，前往奶奶的家中
    - 不久，%YOU%就看到了浮在七彩花海上的小屋
    - 一名马娘老人，站在花海中
    - 花茶的清香，即使混合着鲜花的芬芳，也能在百米外闻到
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「呵呵，果然来了呢……」
    - 看到几乎是扑过去的%CHARA%，奶奶浅浅地笑了一笑
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「我今天叫你过来，是有重要的事情要告诉你」
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「或许，并不是那么令人激动的事情，但一定是重要的事情」
    -
    - 奶奶抬起头看了一眼天空，然后低下头看着%CHARA%，继续讲着
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「……关于我之前一直以来所说魔法的事情」
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「……其实奶奶我一直在骗你」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……骗我？骗什么？」
    - 小%UMA%露出了疑惑的表情
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「让我一定要在比赛之后特地到这里来什么的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！我知道了！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奶奶一定是要说，自己其实不仅仅是一名大%MAJO%，更是世界上所有魔法的创始人吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～我早就知道——」
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「不，我是要说……」
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「魔法」
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「一直都不存在。」
    -
    - 奶奶，轻盈地拿下戴在 %CHARA% 头顶上的帽子
    -
    - 拿出一个发条，插入帽子上一处细小的缝隙，旋转起来
    -
    - 帽子顶部被拆卸下来
    - 里面有着的——
    - 缓缓旋转的机械齿轮
    - 精密的传感器
    - 随之运动的传动轴
    - 一切的机械结构，一览无余。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    - 瞳孔不自觉地缩小，身体像是触电了一样呆立在原地一动不动
    -
    - 时间一瞬间似乎停滞下来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！魔法不存在什么的，我才不承认！！！」
    - 爆发出很大的反应，%CHARA%，拼命否定着什么
    -
    - 然后，将头转到一边，露出不屑一顾的表情
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！说着魔法不存在的奶奶，说到底也不过是小孩子罢了！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说到底，魔法不存在的话——」
    # setToBottom，continue
    # ws_md_w_1


# 童年回忆
ws_md_w_1:
  sync: true
  lines:
    - content:
        - color: #对应角色颜色
          fontWeight: bold
          content: 父亲
        - fontStyle: italic
          content: 「变革……这本英文的童话故事书……会有兴趣吗……？」
    - fontStyle: italic
      content: 父亲，小心翼翼地问道
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「不要。」
    - fontStyle: italic
      content: 结果，自然收到了不留余地的回答
    -
    - content:
        - color: #对应角色颜色
          fontWeight: bold
          content: 母亲
        - fontStyle: italic
          content: 「变革，这个玩偶的话，会想要吗？」
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……」
    - fontStyle: italic
      content: 只是站着一动不动
    -
    - content:
        - color: #对应角色颜色
          fontWeight: bold
          content: 奶奶
        - fontStyle: italic
          content: 「呵呵……小孩子，果然总是那么有活力呢……」
    - content:
        - color: #对应角色颜色
          fontWeight: bold
          content: 奶奶
        - fontStyle: italic
          content: 「奶奶这边，也有个好东西想给你看一看」
    -
    - fontStyle: italic
      content: 奶奶故作神秘地在%CHARA%有几分不耐烦的眼神中，将手伸进袖口
    -
    - fontStyle: italic
      content: 从袖口中，只是那么一抽——
    -
    - fontStyle: italic
      content: 赫然出现在眼前的，是许多许多支鲜艳的玫瑰
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……！！！」
    - fontStyle: italic
      content: 眼睛一下子亮堂起来
    # setToBottom，continue
    # ws_md_w_1_end


ws_md_w_1_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我看到奶奶在我面前变出花朵的那种激动……」
  - # ws_md_w_2


  # 荆棘回忆
ws_md_w_2:
  sync: true
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……喂。%CALLNAME%。」
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「背我。」
    - fontStyle: italic
      content: %CHARA%指了指前面绵延数米的荆棘丛，示意%YOU%背%SEX%过去
    -
    - fontStyle: italic
      content: 荆棘丛密不透风，纵横交错的枝条在阳光下投落斑驳阴影，尖锐的刺如同守卫一般遍布其间
    - fontStyle: italic
      content: 这样危险的路径，别说是背着 %CHARA%，就算是独自一人……
    - fontStyle: italic
      content: 「我们……换条路怎么样？」
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「不要。」
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「我就要从这里过去。」
    - fontStyle: italic
      content: %CHARA%毫不犹豫地回答，语气中饱含不容商量的任性
    -
    - fontStyle: italic
      content: 就这样，%YOU%只好背着小%UMA%，站在密密麻麻的荆棘道前边
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「走。」
    - fontStyle: italic
      content: 感受到那双小脚轻轻踢动的力量
    -
    - fontStyle: italic
      content: 咬了咬牙，%YOU%想象着自己回去之后手脚都要缠上绷带的样子，迈出了脚步——
    # setToBottom，continue
    # ws_md_w_2_end


ws_md_w_2_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「一直以来%CALLNAME%对我这样那样的言听计从……」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「又怎么能搞得懂啊……！！」
  - %CHARA%生气地剁着脚
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不要不要！我绝对不接受！！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「既然奶奶说魔法不存在的话……」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那天才%MOHOSHOJO%sweepy我……」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「就要自己——」
  # ws_md_w_3


# 宣言回忆
ws_md_w_3:
  sync: true
  lines:
    - content:
        - color: %COLOR_47%
          fontWeight: bold
          content: %ZOB_ZOY%
        - fontStyle: italic
          content: 「像变革同学那么厉害的话，
        - fontWeight: bold
          fontStyle: italic
          content: 『创造属于自己的魔法』
        - fontStyle: italic
          content: ，不就好了吗？」
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……！」
    -
    - fontStyle: italic
      content: %YOU%被这名突发奇想的小%UMA%又硬生生地拉回到了训练场
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「奶奶眼中的『赛跑的魔法』怎么样都好」
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「从今天起，天才%MOHOSHOJO%sweepy，就要『创造』属于自己的魔法！」
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「哼哼～奶奶一定是看到了我这份『创造魔法』的潜力，才对我说出那番话的！」
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「看好了%CALLNAME%！接下来的这个魔法，我只用一次！」
    -
    - fontStyle: italic
      content: %CHARA%戴好帽子站在训练场的跑道上，摆好起跑姿势——
    -
    - fontStyle: italic
      content: 那份奇迹般的速度，无论看上几次，都只会让人确定一个事实：
    - fontStyle: italic
      content: 「这就是，『魔法』——」
    -
    - fontStyle: italic
      content: 不是追寻%YOU%，或者追寻别人所学来的魔法
    - fontStyle: italic
      content: 而是%CHARA%，「自己的魔法」
  # setToBottom，continue
  # ws_md_w_3_end


ws_md_w_3_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「『创造魔法』！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哼哼～这样一来，奶奶就再也不能说魔法不存在了！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天才%MOHOSHOJO%sweepy，也能作为伟大的大魔法师，被大家一直称赞很多很多年！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呐，%CALLNAME%。」
  - %CHARA% 从因为明白了什么而微笑着的奶奶手里拿回完好如初的帽子
  - 而后，缓慢而端正地戴在头上
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「作为%CALLNAME%，不论主人作出什么样的决定都会一直陪着，对吧？」
  - 眼前的小赛%UMA%，向%YOU%投来信任的目光，其中好像有着魔法
  -
  - acc: 1
    content: 「当然」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼哼，不愧是我的%CALLNAME%！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「无论是一年，十年还是一百年……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「终有一天，我会以大%MAJO%的样子回到奶奶身边，让奶奶也为之震惊的！」
  - acc: 2
    content: 「就算很想，事到如今也没办法拒绝了吧」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呣！这是什么态度啊%CALLNAME%～！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下次，就算对主人有不满也不许说出来，知道了吗！！」
  -
  - 在这之后，像什么都没有发生一样和奶奶一起平静地喝着茶
  - %CHARA%，只是叫着想要听童话故事，而奶奶也笑着讲了一组给%SEX%
  -
  - 不久，你们依依不舍地和奶奶告别
  # 全属性+5，PT+100


# 输去资深年宝冢纪念或未参加该比赛的场合，宝冢纪念对应回合下一周开始
ws_magic_dream_l:
  title: 魔法之梦
  lines:
    - 夏季清晨的阳光并不燥热，即使照射在身上，却意外只觉得温暖
    - 在这样的日子里，%YOU%只是和%CHARA%继续着日常的练习
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快点快点！不马上做完练习的话，我还怎么研究魔法啊！！」
    -
    - 突然，魔法帽似乎出了些问题
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    -
    - 它的耳朵部分，吱吱嘎嘎地发出声响，不断旋转着
    - 最终，扭曲，变形成一个诡异的角度——
    -
    - 据%CHARA%所说，这是只有奶奶能够治好的『魔法紊乱』
    -
    - 给奶奶打了电话之后，被%CHARA%带领着，来到了奶奶的家里
    - 一名马娘老人，站在花海中
    - 花茶的清香，即使混合着鲜花的芬芳，也能在百米外闻到
    -
    - 但是，按照要求，奶奶并不希望%CHARA%也来到现场
    - 于是，让%CHARA%在远处等着，%YOU%独自带着帽子去见%CHARA%的奶奶
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「这样啊……确实，偶尔也会有这样的情况」
    - 不知为何，奶奶了解具体情况之后，意料之外地有些认真
    -
    - 马娘老人走进屋里，搬出一个工具箱，从中拿出一个发条
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「接下来的事情，还请不要让那孩子知道」
    -
    - 奶奶将那发条插入帽子上一处细小的缝隙，旋转起来
    -
    - 帽子顶部被拆卸下来，里面有着的
    - 缓缓旋转的机械齿轮
    - 精密的传感器
    - 随之运动的传动轴
    - 一览无余。
    -
    - 奶奶从工具箱里继续拿出工具，聚精会神，叮叮当当地拆解，又组装着
    - 专注的样子，好像丝毫不在意周围的一切
    - 不久，那顶帽子就恢复如初，如同从未被打开过一样
    -
    - 带着修好的帽子走出那片花海时，看到了出口处一对慌慌张张缩回去的马耳
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……%CALLNAME%。」
    - 在看见%YOU%的一瞬间就显得有点想要把目光移到其他地方
    - 将帽子递给%SEX%，只是慌慌张张地接下
    -
    - 一路上，更是一反常态，几乎不敢直视%YOU%的脸
    - 或许，%CHARA% 已经……
    -
    - 在沉默中，回到了特雷森学院
    -
    - acc: 1
      content: 「……对不起」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……？为什么要对不起……？」
    - 意料之外，温和地回应着
    -
    - acc: 1
      content: 「魔法，不是真实存在的……」
    -
    - 按往常来讲，听见这句话的%CHARA%，应该要狠狠地骂%YOU%一顿了吧
    - 但是，此时的%CHARA%，并没有这么做
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 只是沉默着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笨蛋%CALLNAME%。」
    - 突然说出了这句话
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法当然是存在的啊。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不论过去，现在，还是很久很久的以后」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法，当然都是一直真实存在着的。」
    # setToBottom，continue
    # ws_md_w_1
    # ws_md_l


ws_md_l:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「就像，那时候一样。」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「而且，如果魔法真的不存在的话……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那这顶帽子戴在头上时的安心感……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「和%CALLNAME%被我莫名其妙乱发脾气却啥也不说时心里的温暖感……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「又怎么能搞得明白啊！！」
  - %CHARA%，生气地剁着脚
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「听好了！%CALLNAME%！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「从今往后，绝不许你再说什么『魔法不存在』！」
  - 拿出魔杖，径直指向%YOU%
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「奶奶的魔法就是世界上最伟大的魔法！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「就算我已经学会了『创造魔法』，也依然是这样的！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是，既然奶奶不愿意向大家展示自己的魔法……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哼哼～那就只有我天才%MOHOSHOJO%sweepy，能够用『自己的魔法』告诉大家，『魔法是存在』的了！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「到时候，说不定奶奶还会羡慕，被大家认为是世界上最伟大的大魔法师的我呢！」
  -
  - 在这之后，和%CHARA%回到了校园，回归了正常的练习计划
  - 只是，继续着在闪光系列赛中珍贵的每一天——
  # 全属性+5，PT+100


ws_summer_start_s:
  title: 夏季合宿前·同样的麻烦
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「驾，驾！吁——」
    -
    - 转眼之间，又到了新的一年的夏季合宿之日
    - 为了让%CHARA%足够满意地开始夏季合宿，尽可能满足着%SEX%的要求
    - 此时的%CHARA%，不知怎么又已经在%YOU%的背上轻轻踢着腿
    -
    - 虽然明显要迟到了，但是希望迟到的时间能短一点——
    - %YOU%尽快地背着%CHARA%跑到夏季合宿的现场
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「听好了！你们这些最后都会变成败者的魔法师！」
    - 一从%YOU%的背上下来，就自信地对着面前的所有人挥舞着魔杖，大声地讲道
    - 参加夏季合宿的%UMA%们，面面相觑，只是疑惑地对着%CHARA%眨眼睛
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不论你们会什么乱七八糟的骗术，会什么自以为良好的魔法」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我！天才%MOHOSHOJO%sweepy，在接下来的魔法竞赛中，一定会——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔——晤晤——干森摸什魔——！！！补药补药补药～窝害霉把化嗦完～～～！！！」
    - 总之，为了不打扰正常的秩序，%YOU%迅速捂住%SEX%的嘴，把%CHARA%推去了自己的训练场地……


rs_tenn_sho_s:
  title: 秋季天皇赏·无言的Arborvitae
  lines:
    - 秋季天皇赏，强者云集的中距离G1，众多资深级选手争夺的秋季赛事
    - 同时，也是秋季资深赛%UMA%三冠的第一冠
    -
    - 在这样的赛事中，除去%ZOB_ZOY%，真心呼唤，随心起舞等知名强者
    - 众多隐藏实力的赛%UMA%们，也都觊觎着这份冠军的荣耀
    -
    - 面对如此大的压力——
    - 「还需要，帮变革做些什么吗？」
    - 虽然和%SEX%一起提前到场了，%YOU%依然只是为%CHARA%担心着
    -
    - 「帽子和魔杖，要我先帮你拿着吗？」
    -
    - 「——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊啊烦死了烦死了烦死了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「EveningPrimrose★Phlox，快快闭嘴吧！」
    - 提早到场，却一直在准备室里站着一动不动的%CHARA%突然舞动魔杖，指向%YOU%
    -
    - 「啊……！」
    - 不知为何真的一时语塞，像被施了魔法一样讲不出话
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～这下子，就讲不出话了吧～天才%MOHOSHOJO%sweepy的魔法果然很有用！」
    - 一下子露出了自满的笑容
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「听好了%CALLNAME%！虽然，我搞不明白你为什么那么着急」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，天才%MOHOSHOJO%sweepy，永远不会为这样小小的魔法试炼感到害怕的！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笨蛋%CALLNAME%，只要好好看着我展示『什么是魔法』就好了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后，哼哼～想好在面对那些人对大魔法师sweepy的夸赞的时候，要摆出什么样的表情吧～！」
    -
    - 在休息室里做好准备的%CHARA%，下到赛场之后一直呆在队伍的末尾
    - 等到其他赛%UMA%都进去后，%SEX%又对观众挥舞了一下魔杖，宣言了些什么，随后缓缓入了闸


re_tenn_sho_win_s:
  title: 秋季天皇赏后·向前的魔法
  lines:
    - %CHARA%，如%SEX%所说一般漂亮地赢下了秋季天皇赏
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看吧看吧！这就是『魔法』的力量！」
    - 即使戴好了得胜锦旗，依然在领奖台上那么闹着
    -
    - 在那之后，一如既往在记者会上宣扬着「魔法」的感受
    - 不客气地对吵吵闹闹的记者们发脾气
    - 一个一个地完成了所有的赛后流程
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐！%CALLNAME%，你说，主人今天的表现怎么样？」
    - 并排走在回去的路上，用期待的眼神等着%YOU%的回复
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「话先说好了！因为主人赢了竞赛，所以绝～对不能批评哦！」
    -
    - 面对这样的请求，应该回答——
    - acc: 1
      content: 「做得非常棒了」
      lines:
        - 「接下来，就算想吃甜品，随便吃都没有问题了吧——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……什么啊！随便吃什么的，为什么好像一副『结束了』的样子啊！」
        - 似乎对%YOU%的回答有些不高兴的样子，停下来不再走动
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「作为我的%CALLNAME%，这种态度才不允许！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「因为，在这之后……还有更重要的一个『魔法』要施展」
        - 与%YOU%四目相对
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%！我命令你，即使这次主人赢了比赛」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「接下来，也要更加好好的看着主人！」
        - %CHARA%那似乎有着『魔法』的眼神，只是坚定地看着%YOU%
    -
    - 下一场比赛，「伊丽莎白二世女皇杯」
    - 时至资深年的现在，再次参加这场赛事，会发生什么呢——
    - 无论接下来会如何，%YOU%只是愿意『相信』


re_tenn_sho_lose_s:
  title: 秋季天皇赏后·约定的魔法
  lines:
    - %CHARA%，非常遗憾地在秋季天皇赏中落败
    - 作为败者，走完赛事结束的流程，%YOU%和%CHARA%只是走在回去的路上
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐～%CALLNAME%，主人今天的表现怎么样？」
    - 只是平静地走在身旁，用期待的眼神等着%YOU%的回复
    -
    - 按往常的话，只要安慰就可以了
    - acc: 1
      content: 「变革，今天的表现已经很棒了」
      lines:
        - 听见安慰之后，%CHARA%的耳朵马上就竖起来了
        -
        - 不过，只是说好话的话，又太过纵容了
        - acc: 1
          content: 「但，%CALLNAME%还是要说一件事」
          lines:
            - %YOU%补充道
            - 「因为这次比赛输了，为了下次的比赛，得少吃甜点。」
            -
            - %CHARA%竖起来的耳朵，稍微有点垂落了
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呣～！主人求安慰，为什么求来的是这种话啊？？」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哼！算了！既然是%CALLNAME%的提醒，主人就姑且听一下吧！」
            -
            - %CHARA%停下来，拿出魔杖，自顾自地挥舞起来
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「Boxwood★Fern，欲望消失吧！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「好了！这样子，主人就绝～对不会多吃甜品了！」
            -
            - 而后，鹿毛的小%UMA%，用那双紫色的瞳孔，同%YOU%四目相对
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「作为交换……下一次，在『那场』比赛上，%CALLNAME%可得看好了！」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%，得把施展魔法，冲刺，第一个冲线的画面」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「一个一个地，全部记在脑子里。」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「这样子，才对得起主人放弃『甜品』的付出！」
    -
    - 不知为何，虽然输了比赛，氛围却意外地有些轻松
    - 但轻松的氛围中，%CHARA%那似乎有着『魔法』的眼神，一如既往的坚定
    - 无论接下来的比赛会如何，%YOU%只是愿意『相信』


rs_eliz_cup_s:
  title: 伊丽莎白二世女皇杯·奇迹的StargazerLily
  lines:
    - 不知不觉中，『魔女之夜』已经过去了将要一年
    - %CHARA%，已然在资深级的阶段经历了许许多多的比赛
    - 再次迎来这个『资深的象征』，到底会怎么样呢
    -
    - 无论是怎样的准备，到了这一刻，都不值得再过多言语了
    - acc: 1
      content: 「去创造，『属于自己的魔法』吧。」
    - 在地下通道，只是和%CHARA%这么说着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……为什么突然这么煽情啊！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明刚才还在批评主人，能不能早点入闸的吧？？！」
    - 不管怎样，和有点小生气的%CHARA%简单告了别，来到了看台上
    -
    - 亮相圈中，缓缓走着的%CHARA%，不时看上几眼观众
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！奶奶！？」
    - %CHARA%突然惊叫着什么，目光明显聚焦向一处
    -
    - 在不远处的另一边看台上，一名马娘老人只是微笑地站着
    - 似乎是察觉到了%CHARA%投去的目光，轻轻挥了挥手
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……哼！」
    - 看到奶奶挥手的那一瞬间，马上把头扭向一边
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是的，什么大魔法师！不过就是自己多会一点魔法罢了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「居然，还想要这样瞒着天才%MOHOSHOJO%sweepy做些偷看的小动作！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可惜，只会这样搞小动作的话——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家以后知道的魔法的创始者，可能就，只会是天才%MOHOSHOJO%sweepy了呢～」
    -
    - %CHARA%转回头，拿出魔杖，只是带着自信的笑容，径直指向%YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%。」
    -
    - 然后，是马娘老人
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奶奶。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还有在座的所有人。」
    - 用魔杖扫过在场的观众们
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全部都给我看好了。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「接下来的这个魔法，绝对绝对——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「会让你们刻骨铭心。」
    -
    - 在所有人的注视下喃喃自语的%CHARA%，在队伍的末尾缓缓入了闸
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '获得了状态 '
        - content: '[相信的奇迹魔法]'
          title: 创造出来的「奇迹」，即是魔法
        # 全属性+20%


re_eliz_cup_win_s:
  title: 伊丽莎白女皇杯后·奇迹与当下
  lines:
    - 或许真的是『魔法』，又或者是『奇迹』，无论如何，%CHARA%赢下了伊丽莎白二世女皇杯
    - 即使再多的质疑声，在这份无可置疑的发挥面前，也只能留下惊讶的赞赏
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「呵呵……果然，天才%MOHOSHOJO%，就是什么都能做到呢……」
    - 远处的马娘老人，微笑地望着这边点头，自言自语着什么
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼……呼……哈……果然……果然是这样……」
    - 刚结束比赛，在赛道上喘息着的%CHARA%，听着四周的欢呼声
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『我的魔法』……当然会让，你们所有人明白。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『魔法』的价值。『魔法』的存在。证明我有资格成为……『大魔法师』。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%！你说……主人今天的表现怎么样？」
    - 没有休息太多，%CHARA%，看到%YOU%之后，马上跑到已经下到场边的%YOU%这里
    - 用紫色的瞳孔，就那么看着%YOU%的眼睛，等待着%YOU%的答复
    -
    - acc: 1
      content: （思考一下，这一次，应该怎么回答呢——）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼！不用说了！主人已经知道了！」
        - 看着%YOU%还在酝酿的嘴唇，%CHARA%只是打断了%YOU%的思考
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「毕竟，%CALLNAME%一天到晚就那么几句夸人的话嘛！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「既然如此……等主人回来之后……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一定要记得！给主人买一份甜品吃！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不然——不然主人就——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「罚%CALLNAME%吃掉主人买的甜品！略略略！」
        - 突然对着%YOU%做了奇怪的鬼脸后，%CHARA%转身就离开了
    -
    - 在这之后，%CHARA%好好地完成了赛后流程，同%YOU%一同回到了学院
    - 只是一同继续着，在闪光系列赛中珍贵的每一天——


re_eliz_cup_lose_s:
  title: 伊丽莎白女皇杯后·每一刻的奇迹
  lines:
    - 尽管做出了如此多的努力和准备
    - %CHARA%，仍然非常遗憾地在资深年的伊丽莎白二世女皇杯中落败
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奶奶！」
    - 赛事结束后，%CHARA%只是冲到了下到场边的马娘老人身旁
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐！我今天的表现……怎么样？」
    - 只是向奶奶这么问着，期待地看着
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「呵呵……天才%MOHOSHOJO%的表现，无论如何，当然都是最好的了」
    - 平静地，面带微笑地回应着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是……我把比赛输了……」
    - 耳朵稍微垂落下去一点，虽然有点气馁的样子，却并没有过分的其他动作
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「或许，这次的竞赛是输了……」
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「但，天才%MOHOSHOJO%的目标，一定远远不止于此吧？」
    - 马娘老人，只是微笑地看着眼前的小%UMA%，不再言语
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……哼！那还用说！」
    - 突然把头撇到一边去，似是而非地闭上一下眼睛
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy，当然不会就此停下的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奶奶，一定要直到我成为『大魔法师』之前，都一直看着我才行！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%！」
    - 转头看向站在一旁的%YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不论刚才的发挥怎么样……又或者你其实觉得，就是『差劲』……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都得，给主人打起精神来了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你是我的%CALLNAME%，直到我成为世界第一的『大魔法师』为止，哪里都不许去！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「接下来，要继续给我想尽办法，把我的状态调整到最好！听到了吗！！」
    -
    - 虽然输掉了比赛，但%CHARA%的魔法并没有因此消散。
    - 好好地完成了赛后流程，同%YOU%一同回到了学院
    - 只是一同继续着，在闪光系列赛中珍贵的每一天——


rs_arim_kin_s:
  title: 有马纪念前·最后的魔法？
  lines:
    - 有马纪念，处于全日本关注度顶峰的，资深级的长距离G1赛事
    - 在这样充满关注度的，应该是%CHARA%梦寐以求的比赛中——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！！！到底是什么时候报名的长距离比赛啊！！！」
    - 中山赛马场的闸机旁，出现了难得一见训练员和%UMA%共同出场的场景
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 工作人员
        - 「东商小姐，再不入闸的话，会影响其他赛%UMA%的！」
    - 工作人员撇撇头，似乎在暗示不远处的一名娇小的鹿毛赛%UMA%
    -
    - 「如果是天才%MOHOSHOJO%sweepy的话，就算是临时上场，也完全没问题的吧」
    - 继续劝说着%CHARA%
    - 「而且，如果想要让大家都知道『魔法的存在』——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - 果然，还是这一招好用，耳朵一下就直直地竖了起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～%CALLNAME%有时候也挺可靠的嘛～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「既然这样，作为大魔法师，天才%MOHOSHOJO%，sweepy我，就有必要向大家展示『自己的魔法』了！」
    -
    - %CHARA%，在全场观众的注视中进入了闸机


# 好感+30，干劲+1，技能点数+50
ws_christmas_s:
  title: 天才圣诞老人
  lines:
    - 圣诞夜之际，%CHARA%突然跑进%YOU%的训练员室里
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%，跟我走吧！」
    -
    - acc: 1
      content: 「去收礼物吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你在说什么啊%CALLNAME%。是那个啊，当然是那个啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说到圣诞夜果然就是圣诞老人吧！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一直以来，圣诞老人都是『不明真身』的存在」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作为天才%MOHOSHOJO%sweepy，当然要在这一天找到圣诞老人！」
    -
    - 刚勉强来得及带了些圣诞夜出行的物资，%YOU%就被%CHARA%一直拉到了学院外
    -
    - 虽然在十二月的后半，却并没有遇上大雪纷飞的日子
    - 有着白雪皑皑，树影幢幢，人海漫漫，街灯点点
    -
    - 或许，在这样重要的日子里换换方式，到外面来走走也不错
    - 不知为何有了这样的想法
    -
    - 但是……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy肯定！你们家里，一定有圣诞老人——！」
    - 这样说着，经过主人同意的%SEX%，马上闯进了别人的家里……
    -
    - acc: 1
      content: 「啊啊……」
    - 看着闯入别人家中开始乱逛，和第一次见面的人自然聊天，以及像万圣节讨要糖果一样撒娇要圣诞蛋糕的%CHARA%
    - %YOU%感到一阵想揉太阳穴的冲动
    -
    - 「非常抱歉打扰了……」
    -
    - 「那个……如果不介意的话，请收下这个作为歉意……」
    - 虽然被打扰的对方很开心的样子，但临走之际，为了礼节，还是将算是提前准备的礼物递给了房子的主人
    -
    - 看着眼前自顾自带路的小小女巫
    - 到底是圣诞节还是万圣节什么的已经不重要了，总之先好好地度过再说吧……
    -
    - 在这之后，%CHARA%一直执拗地要到各种地方去找圣诞老人，结果也理所当然地打扰了不少人家
    -
    - 或许并没有对别人造成什么实际的影响
    - 但%YOU%确实感到阵阵不知去向何方的晕眩……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是的真是的真是的！区区圣诞老人，怎么敢让我找不到的啊！！」
    - 逛了许久，还是找不到想要的答案
    -
    - 不管对%CHARA%还是对%YOU%而言，这样下去或许都不是办法……
    - 揉了揉太阳穴想了想
    - 「其实……可能不是找不到……」
    -
    - 「因为……」
    -
    - 「我可能也算是一名圣诞老人？？」
    -
    - 到底是以什么心情说出这句话的呢
    - 但至今为止已经送出了无数礼物，不得不说确实算是某种程度的验证
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……什么？你？%CALLNAME%？」
    - 一时有点疑惑和惊讶
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……啊，原来是这样啊。结果，圣诞老人是这样的家伙啊」
    - 然后，马上露出了鄙夷的表情
    -
    - 也没必要那么露骨地厌弃这样的圣诞老人吧……
    - 「毕竟，圣诞老人就是在圣诞夜给别人派发礼物的存在嘛……」
    - 「而且，听说，圣诞老人虽然一开始只有一个」
    - 「但后来发展成为一个团体，在不断增加新的成员……」
    - 「我的话，应该算是新成员吧」
    - 自认的成员也是成员，总之是没问题的
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么嘛！圣诞老人一直就在身边，而且还是我的%CALLNAME%什么的，真是无聊嘛！！」
    - 看上去很失望的样子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……等一下，圣诞老人是我的%CALLNAME%……我是圣诞老人的主人……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也就是说——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难不成，我也可以是圣诞老人！？？」
    - 眼睛突然闪闪发光
    -
    - 到底是怎么联想到的……
    - acc: 1
      content: 「会不会太年轻了点……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「才不重要呢！%CALLNAME%，你知道这意味着什么吗！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这意味着，天才%MOHOSHOJO%sweepy，一到圣诞夜就可以施展『圣诞魔法』，变身成万人敬仰的圣诞老人！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦好啦！快点和我一起去派发礼物啦！圣诞老人二号！！！」
    -
    - 也没必要刻意强调二号……
    -
    - 不管怎样，在那之后，一起给许多人派发了礼物，收到了众多感谢
    - 身边的小%UMA%看上去很高兴的样子


# 结局，未赢下3G1（即仅赢下2G1或更少）的场合
ending_majo_journey:
  title: %MAJO%之旅
  lines:
    - 和%CHARA%在闪光系列赛中奋斗的三年转眼间就过去了
    - 这三年来，你们好像一同经历了很多事情
    - 从一个微妙的契约开始，逐步走向成为一名真正赛%UMA%的旅途
    - 不断成长，遇见对手，挑战强者，经历各种各样奇妙的事件
    - 甚至，好像知道了一些不得了的事情——
    -
    - 在这之后，继续奔跑着，奔跑着……
    - 最后，又不知过了多久以后，%CHARA%，终于愿意停下，平凡又完全不平凡地完成了退役仪式。
    -
    - 在这之后——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂。%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跟我走。」
    - 退役后的某一天，突然闯进训练员室，用理所当然的语气下了不明不白的命令
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「去哪？问那么多干什么？！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笨蛋%CALLNAME%！天才%MOHOSHOJO%sweepy要去哪里，%CALLNAME%当然也要跟着去哪里啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「才不是还没想好要去哪里！」
    -
    - 这个理所当然的态度，总感觉，时间好像回到了很久以前，就好像%YOU%和%CHARA%刚刚相遇一样……
    - 不过，既然是所谓的「主人」的命令，在有空的时候，姑且一起小小地随心出行一下，也不是不行
    - 就这样，偶尔和%CHARA%坐着地铁，断断续续地，前往日本的各个地方——
    -
    - 很久以前的某一个周末——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么什么？这个玩偶的头发……是有名%UMA%的头发做的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不要不要？！%CALLNAME%，我们赶快去下一个地方！！」
    -
    - 很久之前的另一个周末——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的%CALLNAME%怎么能这都不懂！这个地方，当然就是传说中的『飞岛之国』了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『根本就没有飞岛』……？那种事情才不重要！」
    -
    - 在那之后，难得又凑出的一个有空的周末——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来到了这个地方，不管是%CALLNAME%还是什么凡人，就都得说真话！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在主人改变主意之前，这就是这个地方的规矩了！」
    -
    - ……以及，奇怪的相遇
    - color: %COLOR_135%
      content:
        - fontWeight: bold
          content: %STAY%
        - 「啊……你们……也到这里来了吗……？」
    - color: %COLOR_135%
      content:
        - fontWeight: bold
          content: %STAY%
        - 「这里，虽然还是在日本国内，但风景也很不错……」
    - 其实并不是因为风景而来的……
    -
    - 就这样，在接下来的日子里，偶尔抽空，被%CHARA%带去各种奇怪的地方四处乱跑着，不为工作，也不为名利
    - 只是慢慢地，用%SEX%的话来说，叫作——「旅行」
    - 而非要说一个目的的话，只是为了——「魔法」
    -
    - 这被各种幻想浸染的，毫无意义的，明明就在家门口的旅行，也许会在将来的某一天被记录下来吧
    - 不是一名特雷森%UMA%的退役日常，也不是一个平凡%UMA%的随笔游记
    -
    - 说不定，会是这样的一部幻想作品
    -
    - ——「%MAJO%之旅」


# 结局，赢下3G1及以上的场合
ending_forever_eyebright:
  title: 永恒的Eyebright
  lines:
    - 「那个——」
    -
    - 「如果可以的话，请参加——」
    - 拨打着电话
    - 「嗯嗯，是这样的」
    -
    - 「如果可以的话，请参加——」
    - 给路过的赛%UMA%发着宣传单
    - 「拜托了……」
    -
    - 「如果可以的话，请参加——」
    - 尝试着邀请认识的赛%UMA%
    -
    - 和%CHARA%在闪光系列赛中奋斗的三年转眼间就过去了
    - 这三年来，你们好像一同经历了很多事情
    - 从一个微妙的契约开始，逐步走向成为一名真正赛%UMA%的旅途
    - 不断成长，遇见对手，挑战强者，经历各种各样奇妙的事件
    - 甚至，好像知道了一些不得了的事情——
    -
    - 在这之后，继续奔跑着，奔跑着……
    - 最后，又不知过了多久以后，%CHARA%，终于愿意停下，平凡又完全不平凡地完成了退役仪式。
    -
    - 原本以为应该告一段落了
    - 结果，还是听到了出乎意料的请求——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！我一定要当大魔法师啦！！！」
    -
    - %SEX%想当大魔法师。
    - 看着满地打滚一定要当大魔法师的%CHARA%，%YOU%只是汗颜
    -
    - 大魔法师，大魔法师……到底怎么当好呢？
    -
    - 或许，可以这样做——
    -
    - 特雷森学院里阳光明媚的一天
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「那么，你就是被认可的魔法大师了！」
    - %CHARA%站在精心搭建的授勋台上，一旁，是用端正的礼仪向大家介绍着的%FUJI%
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的%UMA%A
        - 「听说了吗，那个%UMA%，就是传说中赛跑魔法的持有者之一……」
    - 并没有受到邀请而偶然路过的%UMA%们，互相讨论着
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的%UMA%B
        - 「欸！？真的吗？！怪不得能被评为大魔法师！」
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的%UMA%B
        - 「真好啊！有一天，我一定也要学会赛跑的魔法……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～我早就知道，天才%MOHOSHOJO%sweepy的魔法，一定会被认可的！」
    -
    - %ZOB_ZOY%，在台下同他人讨论着%CHARA%手写的魔法宣传册
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「虽然和经典的文学作品风格不同……但也有着独到的见解呢」
    - content:
        - fontWeight: bold
          content: 娇小的鹿毛赛%UMA%
        - （半疑惑半好奇地翻看传阅的魔法小册子，但似乎因为看不懂显得有些迷茫）
    -
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的%UMA%C
        - 「那个……%ZOB_ZOY%前辈……」
    - 也面露难色的样子
    - color: #对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的%UMA%C
        - 「听说您对魔法著作也有一定的研究，可以帮我讲一讲它里面说的到底是什么吗？」
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「虽然表面上看有点复杂……但联系起其他书籍中的内容，就完全没有那么难理解了！」
    - 兴致勃勃的样子
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「也就是说……这部著作虽然沿用了《马里伯特》的魔法体系，但是却完全没有顺着原有的思路进行阐述——！」
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「如此如此这般这般——」
    -
    - %ZOB_ZOY%滔滔不绝的旁征博引中，包括台上小%UMA%在内，整个会场陷入了微妙的静寂……
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「所以说，这段话，应该要——！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！所以说，本来应该是我的主场吧！」
    - 终于打断了发言
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使——魔——！！赶快给我上来！！！」
    - 在%CHARA%的呼唤下，%YOU%只得快步赶到台上
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「把手拿过来。握住魔杖。」
    - 面对所有人的瞩目，%YOU%不得不把手搭在%CHARA%的魔杖上
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跟我一起喊——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为了——魔法！！！」
    -
    - acc: 1
      content: 「为了……魔法！！」
    - acc: 2
      content: 「为了……魔法？？」
    - 在场的所有人，一齐喊出了这句话语
    -
    - 说到底，这个世界到底是如何在这个小%UMA%的胡闹下渐渐变得充满魔法的呢……
    - %YOU%百思不得其解
    -
    - 既然想不明白，要不，还是接受好了
    -
    - 这个，充满「魔法」的世界。


be_dull_dream:
  title: 平淡之梦
  lines:
    - 或许，这就是其中一个结局了。
    - 一个职业，终究还是会有尽头的。
    -
    - %YOU%曾庆幸自己作为中央训练员，不必迎合上司的脸色
    - 职场的诸多弊端，或许在特雷森这个理想之地是不必担忧的
    - 然而，这种情况，终究不过是%YOU%的想象
    -
    - 危机。
    - 到底是如何而发的？%YOU%不知道。
    - %YOU%唯一知道的是，某一天起床后，「能力越大，责任也应该越大」的话语突然就充斥了媒体
    - 网上对%YOU%的种种进行着激烈的讨论，甚至辱骂
    -
    - if: era.get('flag:当前声望') > 500
      content: 纵使%YOU%之前的名声已经潜移默化地抵消了相当一部分的谩骂
    - if: d.team_count > 1
      content: 纵使%YOU%队伍里的赛%UMA%极力为%YOU%进行辩护
    - 被引导的粉丝们，仍然认为%YOU%名下的赛%UMA%本应获得更好的资源，取得更好的成就
    - 也就是认为——
    - %YOU%，失职了。
    -
    - 不论这一指控是否真实，特雷森方面都对此表现出了十足的棘手态度
    - 董事会内部争论不休，但是，有一派明显占据上风
    - 他们只是固执地提出一个要求
    - ——将%YOU%，一名「%TITLE%训练员」，除名中央训练员的名单
    -
    - 秋川理事长，始终不愿在那份除名通知上签下自己的名字
    - 但是，那份除名通知上，反而因此不知怎么出现了比秋川理事长更有分量的名字——学院的前任理事长。
    -
    - 不论到底是谁签的，如何做到的
    - 就结论而言，果然还是到了和担当%UMA%们告别的时候吧。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……为什么？」
    - 得知这件事后，%CHARA%意外地只是冷冷问出一个问题
    -
    - acc: 1
      content: 「按解释，应该是『失职』吧。就像%CALLNAME%没能——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我不是问你这个。」
    - 打断了你的解释
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是说——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……谁干的。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「老头子？一群凡人？还是——」
    - 说出了意想不到的话语
    -
    - acc: 1
      content: 「不……不……」
    - %CHARA%直接说出的话语令%YOU%一刹那无比震惊，只是下意识地否定
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……主人明白了。」
    - 不知为何得出了一个结论
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%你等着。主人马上就回来。」
    -
    - 没等%YOU%说更多话，%CHARA%就转身抬起腿来，用%UMA%的速度跑向了远方
    - 那个方向，分明是学院高层的会议室——
    -
    - 在事情可能变得更糟之前，%YOU%跟着拼尽全力跑到了学院会议室门口
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「凭什么——？！我的%CALLNAME%——你们凭什么可以这样——！！」
    - 被几名%UMA%合力制止的%CHARA%，依然在声嘶力竭地吼叫着
    -
    - 不如说，如果不是被几名%UMA%一齐拉住
    - %CHARA%，恐怕真的会冲进去大闹一通吧
    -
    - 不久，还是到了正式离职的前一天——
    -
    - 打算离开训练场，走向校门口，与特雷森学园告别的%YOU%，身后一直跟着一名小%UMA%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜呜……呜呜呜……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜呜呜……呜呜呜呜……」
    - 一直发出着不可忽视的声音
    -
    - acc: 1
      content: 「……」
    - %YOU%停下脚步，转头看向这名小%UMA%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……干嘛那么盯着我。才没有哭！」
    - 察觉到%YOU%的转身，马上努力停下了某些行为
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是眼睛里进沙子了才这样的！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜呜……呜呜呜呜呜呜……」
    - 只是，没过多久，又开始不停揉着眼睛
    -
    - 「如果可以的话……」
    - %YOU%还是讲起了话
    - 「……答应%CALLNAME%一件事，可以吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……又有什么要求了……%CALLNAME%。」
    - 一边揉着泛红的眼睛一边回应着
    - # 【魔法之梦】前的差分
      # 魔法之梦在宝冢之后，宝冢是每年第24周，第25周开始触发魔法之梦
    # 实际上粉丝袭击可能是强制BE或者育成结束，强制BE已有专属结局，所以只可能在育成结束触发该结局，即差分永远在魔法之梦之后
    - if: era.get('cflag:44:育成回合计时') <= 95 + 25
      content: 「有机会的话……让我再在电视上看一次」
    # 【魔法之梦】后的差分
    - if: era.get('cflag:44:育成回合计时') > 95 + 25
      content: 「有机会的话……向大家证明」
    -
    - 「你的『魔法』——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……知道了知道了！」
    - 强行把眼泪擦干，%CHARA%抬起头来看向%YOU%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……你会看的对吧。一定会。」
    - 没有等%YOU%回应，%CHARA%就伸出了左手的小指
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「拉钩。」
    -
    - acc: 1
      content: 伸出小指
    - %YOU%和%CHARA%，拉钩立誓，谁也不想变成小狗。
    -
    - 至于后来——
    - 那都是，后来的事情了
    -
    - 无论在那之后的人生如何辉煌或惨淡，%CHARA%又是否到达了那个可能性的彼端
    - %YOU%只记得，这就是%YOU%作为中央特雷森训练员的生涯结尾。


######## 随机事件 ########
# 新秀年4月及以后，回合结束
# 好感+30~50，速度&耐力+5
we_slave_and_master:
  title: 使魔与主人
  lines:
    - 又是一次莫名其妙的探险，在训练的空余时间，%YOU%被%CHARA%强行拉到了森林里
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%！快点跟上来！」
    - 被%CHARA%拼命使唤着，此刻的%YOU%与%CHARA%，正走在森林中的小道上
    -
    - 说是要找什么「自然魔法」的线索，结果两个人都没什么头绪
    - 只好在森林里走着，努力搜寻周围的一切蛛丝马迹
    -
    - 走着走着，树林渐渐变得茂密起来
    - 阳光透过树叶的缝隙，在地上投下斑驳的光影
    -
    - 在阳光斑驳的树影下，灌木丛后有什么沙沙的声响
    - 然后，突然扑出一个黑影——！
    -
    - 是一只小狐狸。
    - 晃了晃身子，看向了这边
    -
    - acc: 1
      content: 「是狐狸呢……」
    - 至少不是什么猛兽，%YOU%松了一口气
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「狐狸什么的不是很好吗？」
    - %CHARA%想的东西完全不一样的样子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刻意跑到面前什么的，肯定是对天才%MOHOSHOJO%sweepy感兴趣，想要成为我的%CALLNAME%！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼！作为天才%MOHOSHOJO%，肯定不能只有一个%CALLNAME%，这种千载难逢的机会可不能错过！」
    -
    - %CHARA%拿出魔法杖，挥舞起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Iris★Ipomoea，成为我的%CALLNAME%吧！」
    -
    - 狐狸只是静静看着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Iris★Ipomoea，成为我的%CALLNAME%吧！！！」
    -
    - 狐狸挠了挠痒
    - acc: 1
      content: 「好像，它不是特别想当你的%CALLNAME%的样子……」
    - 看着狐狸不为所动的样子，%YOU%有几分无奈地说着
    -
    - 就在%YOU%这么说的时候，原本好好站着的狐狸，莫名对%YOU%感起了兴趣
    - 蹲踞一下，向%YOU%扑来……！
    -
    - 「……！」
    - 但是，不知为何，只是扑到%YOU%因紧张而伸出的双臂上
    - 最终，静静待在%YOU%双手抱着的怀里，像是睡着了一样
    - acc: 1
      content: 「说不定，这狐狸也会点魔法……」
    - 感受着怀里狐狸轻轻的剐蹭，%YOU%莫名感觉有些惬意
    -
    - 不知道为什么，听了这句话后，原本只是不屑看着的%CHARA%，瞳孔突然缩小，耳朵树立起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！不要不要不要！你本来应该只是我的%CALLNAME%的！！！」
    -
    - %CHARA%扑到%YOU%面前，同%YOU%争抢起怀里的狐狸
    - 结果，狐狸理所当然惊得挣脱开来，没两下就消失在树林中了……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐！%CALLNAME%，看着我，回答我！我是你的什么！」
    - %CHARA%急切地问道
    -
    - acc: 1
      content: 「主人。」
    - acc: 2
      content: 「担当……主人」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼……吓死我了……」
    - 松了一口气
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「听好了，%CALLNAME%，从今以后，不许再被动物驯服，明白了吗！」
    - 说到底人为什么会被动物驯服呢……不解的%YOU%，总之答应了%CHARA%的请求


# 新秀年4月及以后，回合开始
# 好感+30~50，耐力&根性+5
ws_phalaenopsis:
  title: 独一份的Phalaenopsis
  lines:
    - 想着%CHARA%可能会对花感兴趣，带着%CHARA%来到了花店
    -
    - 对花店里一朵朵的红色玫瑰，%CHARA%的目光没有停留一下
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么了%CALLNAME%？为什么要带我看这些到处都有的花？」
    -
    - 无数盛开的风信子出现在面前，%CHARA%只是漠然
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我才不要！这些说到底都是没有魔力的花吧？」
    -
    - 看着出现在眼前一丛丛的蓝色妖姬，%CHARA%不为所动
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这些才不是什么魔女之花呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只有那一朵才是。」
    -
    - 结果，还是一点兴趣都没有的样子……
    -
    - 不管怎么样，既然来了就不能白来吧
    - 虽然被%CHARA%用很微妙的眼神看着，但%YOU%还是坚持买了一盆蝴蝶兰
    -
    - acc: 1
      content: 「和它聊聊天的话，说不定它也会懂点你说给它的魔法？」
    - 这样说着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼。」
    - 虽然满脸不屑，但%CHARA%还是接过了%YOU%所买的盆栽
    -
    - 回去的路上不时和花讲着莫名其妙话语的%CHARA%
    - 之后，难得好好地把蝴蝶兰放在宿舍里照顾着……


# 新秀年4月及以后，回合开始
# 好感+20~30
# 玩家体力+100，精力+200
ws_witch_potion:
  title: 女巫的魔药
  lines:
    - 普通的一天，%YOU%正走在特雷森学院的操场上
    - 远远地，一名小%UMA%飞快地朝%YOU%跑了过来
    - %SEX%的手上，拿着一瓶内含绿色的，脉动的，却又有着微妙流动性的物质的玻璃瓶
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～！快喝快喝——！」
    - 一凑到跟前就开门见山，讲着奇怪无比的话
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喝下这个天才%MOHOSHOJO%sweepy发明的药水……森林就会与你同在！」
    -
    - %CHARA%晃了晃玻璃瓶，极力对%YOU%推销着眼前的浓稠可疑绿色药水
    - 明明看上去并不灼热，却不知为何好像内部仍在翻滚
    -
    - acc: 1
      content: 「你是……在哪里做……的……？」
      lines:
        - %YOU%只是断断续续地说出这句话
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「当然是宿舍里了。」
    - acc: 2
      content: 「这是……哪里……搞……来的……？」
      lines:
        - %YOU%只是断断续续地说出这句话
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我自己发明的啊。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在给 %CALL_5% 不知道哪里搞来的，看起来就是在应付我的旧铁锅施上魔法之后」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就算在宿舍的厨房里，主人也能够做出上好的药剂了！」
    -
    - 居然还能得到宿舍长的许可……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「话不多说！%CALLNAME%，先来试试这个到底怎么样！？」
    - %CHARA%，把那瓶药水继续推到%YOU%的面前——
    -
    - 在那之后，%YOU%让那瓶浓稠的绿色液体缓缓流入喉咙
    - 好像，马上在特雷森校园的操场上，看见了广袤的森林和无尽的精灵


# 新秀年4月及以后，回合结束
# 好感+20~30，智力+10
we_sweet_carrot:
  title: 最甜的胡萝卜
  lines:
    - 「很久很久以前，有一只兔子
    - 兔子有一名兔子奶奶，兔子奶奶每天出去回来，总会带来几个很甜的胡萝卜给%SEX%吃
    - 久而久之，兔子想道，既然奶奶可以找得到这么甜的胡萝卜，那我也能找得到
    - 于是，它走出了家门
    -
    - 兔子在路上碰到了一只狐狸
    - 狐狸说，你跑得那么快，为什么一定要去找天底下最甜的胡萝卜呢？
    - 兔子说，因为胡萝卜就是那么甜啊，你试试就知道了
    - 狐狸说，我不吃胡萝卜
    - 兔子把带着的胡萝卜塞到狐狸嘴里，狐狸只得说甜
    -
    - 兔子于是带着狐狸一起继续找着天底下最甜的胡萝卜
    - 兔子总是跑得太快，回过头去责骂气喘吁吁跟上来的狐狸
    - 终于，它们在一个山头找到了传说中最好吃的胡萝卜
    - 兔子开心地把它带回家里，要给兔子奶奶看看
    - 兔子奶奶笑了笑，带着它走进了厨房，要给兔子和狐狸做一桌盛宴
    -
    - 兔子等了又等，心急如焚
    - 它悄悄走近厨房，发现兔子奶奶悄悄把胡萝卜换了一根
    - 而那根它带回来的胡萝卜，则悄悄地种进了奶奶的菜园子里
    -
    - 原来，最甜的胡萝卜，一直都在，兔子奶奶的菜园里
    - 兔子奶奶，总是在天不亮时就悄悄出门，给胡萝卜浇最新鲜的露水
    - 兔子奶奶，总是在天不亮时就悄悄出门，给胡萝卜找最好的肥料
    - 兔子奶奶，拜托了狐狸，让它带着兔子出去冒险，不要发现这里的秘密
    -
    - 兔子做了个决定
    - 它要自己种一片胡萝卜田
    - 每天用最新鲜的露水浇灌，用最好的肥料滋养
    - 它使唤狐狸，天不亮就要准时叫醒兔子，然后拉着狐狸一起到外面寻找能种出最甜胡萝卜的方法
    - 但是，它还是天天和兔子奶奶叫着要吃最甜的胡萝卜
    - 最后，当它的田地收获时，每个小动物，包括狐狸，都认可了
    - 兔子种出的胡萝卜，就是最甜的胡萝卜——」
    -
    - acc: 1
      content: 「大概，就是这样子了」
    - 总算是满足了%CHARA%突发奇想，想听故事的要求
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……这样子就结束了？」
    - 结果，好像很不满意的样子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么啊……不要，好无聊！就算换成什么猫魔法师找魔法鱼的故事也能讲得通吧！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使——魔——！！！就没有其他故事了吗？！！！」
    -
    - 在%CHARA%的要求下，%YOU%只得在故事书上重新找了一个故事讲给%CHARA%听……


# 经典年及之后，回合结束
# +放学后的专家
we_in_school:
  title: 上学时的快乐
  lines:
    - 一个普通的工作日，%YOU%正像平常的任何一天一样走在路上
    -
    - 迎面而来的，是一个熟悉的鹿毛小%UMA%——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%，我正好要找你呢。」
    -
    - 是%CHARA%。今天的训练计划正好要和%SEX%谈谈呢
    - %YOU%抬起头，看了看头顶的太阳，再看了看一旁坐满%UMA%们的教学楼


wis_loop:
  -
  - acc: 1
    content: （来的好早啊）
    lines:
      - 按%CHARA%平常的脾气，能这么早来真是谢天谢地
      - 但是，好像有哪里不对？？
  - acc: 2
    content: （%UMA%们的课业也挺重的呢）
    lines:
      - 不知道%CHARA%在课堂上会不会好好听讲，也许意外有着乖巧的一面
      - 但是，好像有哪里不对？？
  - acc: 3
    content: 「现在不是在上课时间——？？」
    lines:
      - 发觉问题的%YOU%，马上叫了起来
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘘——！！！」
      - %CHARA%连忙赶上来，用双手捂住了%YOU%的嘴巴
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%！为什么那么大声的喊出来啊！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要是把老师引过来了，我不是就得回去了吗！？」
      -
      - 原来知道自己是在逃课么！？
      -
      - acc: 1
        content: 「你……不上课了？？」
        lines:
          - %YOU%用稍微小声一些的话语问道
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「才没有不上课！」
      - acc: 2
        content: 「你……终于逃课了？？」
        lines:
          - %YOU%用稍微小声一些的话语问道
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么逃课啊！只是换个地方学习魔法而已！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我是说，英语课有什么好呆在教室里的啊？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「讲的东西我全都会，又老是干巴巴的谈些和魔法没什么关系的东西」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「有那个时间，我早就能掌握一门新的魔法了！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，今天的练习到底是什么？赶快告诉我！」
      -
      - 虽然对训练来说是好事，但是%CHARA%的老师到底会怎么想呢……
      - 后来，得知%CHARA%每次英语考试都能拿到传说中的满分后，稍微对%SEX%有了点改观


# 经典年及之后，一起打游戏
# 好感+20～30，智力增加10，Pt+50
og_phantom_thief:
  title: 天才怪盗Sweep
  lines:
    - 和%CHARA%一起玩着角色扮演类游戏
    - 屏幕上正播放着酷炫的特写动画，%CHARA%似乎对那个核心设定产生了浓厚的兴趣
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「取走扭曲的欲望，让人悔改……什么呀什么呀！这不就是魔法嘛！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这么厉害的魔法，居然被说成是只能在游戏里发生的事情，太浪费了吧？！」
    - %SEX%放下手柄，有些不满地嘟囔着
    -
    - acc: 1
      content: 「毕竟现实中很难像游戏里那样潜入人心嘛……」
    - %YOU%试图用常识回应%SEX%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笨蛋%CALLNAME%！那是你做不到，不代表天才%MOHOSHOJO%sweepy做不到！」
    - 似乎反而激起了奇怪的胜负欲
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只要是魔法，那在现实中就肯定有办法复现！」
    - %CHARA%盯着屏幕思考了一会，而后，缓缓将目光移向了%YOU%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%，听好了！主人想到了一个绝妙的魔法仪式！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「既然你是我的%CALLNAME%，那配合主人也是理所当然的吧？我们，就这样做——」
    -
    - 新的一天，以带着面具的样子堂而皇之地出现在特雷森学院内
    - ……两个人，正一同在 %KITA% 的面前做着提前排练好的Pose
    -
    - acc: 1
      content: 「我是……Joker。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是……Sweep。」
    -
    - color: %COLOR_68%
      content:
        - fontWeight: bold
          content: %KITA%
        - 「？我，我是……Black！？？」
    - 不明所以地回应着
    -
    - 给%KITA%分发了提前准备好的面具
    -
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三，二，一——」
    - acc: 1
      content: 「我们，乃传说中的『怪盗团』」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为了取走世人因『凡俗』而扭曲的欲望——」
    - color: %COLOR_68%
      content:
        - fontWeight: bold
          content: %KITA%
        - 「为了人们以自己的意志开拓和选择的未来——」
    -
    - acc: 1
      content: 「纯净而果敢的『Maya』呦，我们，需要你的帮助！」
    -
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - 「？？？？？？」
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - 「这……这是什么成为大人的新方式么！？？」
    - 用两根手指拼命怼着太阳穴，思考着
    -
    - 给%MAYA%分发了提前准备好的面具
    -
    - ……
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「听起来似乎挺不错的呢」
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「如果需要的话，也请允许我加入吧」
    - 给%FUJI%分发了提前准备好的面具
    -
    - ……
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「那个……」
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「就算是设定集，我也还没看过……」
    - 还是给%ZOB_ZOY%发了面具
    -
    - ……
    -
    - 临近黄昏的时候，「怪盗团」已经发展到了一个相当巨大的规模
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的%UMA%A
        - 「最……最近到了百鬼日行的季节了么！？」
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: 路过的%UMA%B
        - 「百鬼日行是什么啊？！」
    -
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可惜，一到夜晚，天才怪盗Sweep还是需要回归%SEX%的本职」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作为天才%MOHOSHOJO%sweepy，去研究魔法！！」
    - %CHARA%在%YOU%的训练员室里自顾自写着日记
    -
    - 这样无休止的角色扮演，到底到什么时候才会停下来呢
    - 至少这次，应该过两天就会玩腻的吧……


# 经典年11月2周后，回合开始
# 好感度+20~30，技能点数+20
ws_magic_origin:
  title: 魔法的起源
  lines:
    - 风和日丽的一天，%CHARA%，又突然闯进%YOU%的训练员室
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂。%CALLNAME%。跟我走。」
    -
    - 带领着%YOU%上了地铁，可以看出，地铁的目标，似乎是%CHARA%的奶奶家
    -
    - acc: 1
      content: 「我们……是要去干什么呢？」
    - 轻轻地问道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～当然是——要给奶奶一个惊喜了！」
    - 非常直白地回答了
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奶奶那家伙，虽然是大魔法师，但是却老是出尔反尔！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这一次，一定要在她知道之前，来个措手不及！！」
    -
    - color: # TODO:对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「呵呵，来了呢，茶已经泡好了哦」
    - 在花园的圆桌上，摆放着精致的茶具
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要，到底是怎么知道我要来的啊！！」
    - 似乎因为意外之外的迎接，表现出生气的样子
    -
    - 奶奶微笑着悄悄看了一眼%YOU%
    -
    - 在那之后，和%CHARA%还有奶奶一起围坐在圆桌旁，在花香中一边喝着茶，一边聊着天
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂，奶奶，我们是不是还没有那什么来着？那什么。」
    - 突然挑起一个话题
    -
    - 虽然语气都表情都刻意显得冷峻，但似乎在目标明确地暗示着什么
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「啊，是那个啊」
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「呵呵……果然一回来最想要还是那个呢」
    - 马上就明白了%CHARA%的意图，奶奶，意味深长地笑了笑
    -
    - 奶奶缓缓走进屋内，打开一个抽屉，从抽屉里拿出一本积满灰尘的书，走了出来
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「那么，就开始吧」
    -
    - 但是，并没有打开书，只是拂了拂书上的灰尘
    - 而后，滔滔不绝地讲了起来——
    -
    - 仿佛她并不是正在讲一个故事，而是在回忆一段若有若无的经历
    -
    - 一段书上有着的，有关魔法师之间的浪漫相遇
    - 一段一直以来流传的孩童如何求得魔药治好母亲的故事
    - 一段，关于魔法的纯真幻想——
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: 奶奶
        - 「果然，一直就像，奶奶小时候一样呢」
    - 不知为何笑着喃喃自语，讲故事的环节，不知不觉中就结束了
    -
    - 将要同%CHARA%回去的时候，悄悄转头看了看屋内的马娘老人
    -
    - 她，拿着书本缓缓走到书桌旁，打开了抽屉
    - 但是，却没有马上把书放回去，而是默默凝视着书的封面
    -
    - 最终，拂了拂书上的尘埃，而后，将它小心翼翼地放回抽屉
    - 在抽屉里，似乎还有许许多多积满灰尘的书


# 经典年11月2周后，回合开始
# 技能Pt+50，耐力+5，智力+5
ws_paper_plane:
  title: 魔法的纸飞机
  lines:
    - 新的一天，有着新的工作
    - 因为一些特殊的情况，学院高层需要%YOU%处理一些%UMA%们的建议
    - 却又没讲清楚，到底处理到什么地步
    -
    - acc: 1
      content: 「或许，这就是『现实』吧……」
    - 怀着对高层和%UMA%们各自的谅解，%YOU%开始阅览这些文件
    -
    - 就在这时，训练员室的门被打开了——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%，跟我走——」
    - 是%CHARA%。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂——！」
    - %YOU%没有马上理%SEX%
    -
    - acc: 1
      content: 「虽然很对不起，但是我得先处理这些文件……」
    - %YOU%缓缓抬起头，指了指虽然不厚但依然有一定量的建议
    - 算是，拒绝了%CHARA%的提议
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……『文件』？……是凡人的『魔法建议』？」
    - 稍微有些惊讶
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy的%CALLNAME%，居然会被这种事情烦扰？？」
    -
    - acc: 1
      content: 「这个……是『上级』的安排……」
    - %YOU%只是这样告知
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「上级？理事长？是大魔法师吗？比天才%MOHOSHOJO%sweepy厉害吗？」
    - %CHARA%用富有压迫感的眼神盯了过来……
    -
    - 比起惹%SEX%生气，或许，还是让%SEX%安分一点好……
    - acc: 1
      content: 「没有变革厉害啦……」
    - 违心地讲着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那就对了，%CALLNAME%！」
    - 眼神温和下来，马上恢复了平和的状态
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「和天才%MOHOSHOJO%sweepy在一起，就不该被这些杂务所烦扰！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这些乱七八糟的魔法提议，就应该这样——」
    - %CHARA%突然凑到桌前，揽过那些文件，飞快地翻阅起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『花圃里种胡萝卜等等等等』『校园墙涂鸦等等等等』『食堂新菜品等等等等』……」
    - %CHARA%拿出一张白纸，飞快地在上面写下文字
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「把这些无聊的凡人的建议，全部总结完。」
    - 那张纸上，井井有条地写满了一个个建议的不漏细节的缩略版
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后——」
    -
    - %CHARA%，把那张%SEX%刚刚总结的各种建议的大纲折成了纸飞机
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Anemone★Wallflower，去到那里吧！」
    - 哈了一口气，%CHARA%，将纸飞机从训练员室窗户用力地向外丢出——
    -
    - 那只纸飞机，受风的影响，飘飘忽忽，混乱地转来转去
    - 但是，不知怎么，似乎又稳定地向着一个地方前进
    - 最终，不偏不倚，飞进了理事长办公室打开的窗户，落在了桌子上
    -
    - acc: 1
      content: 「这是……？」
    - %YOU%只是惊讶
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么啊笨蛋%CALLNAME%！你不会真的想自己替那些家伙做全部决定吧！？」
    - 马上回应道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不会魔法的%CALLNAME%，怎么可能造福凡人嘛！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跟我走，%CALLNAME%！」
    - 不容置疑地推动了话题
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「既然你这么想学魔法，那主人就教你一些吧！」
    -
    - 在这之后，被%CHARA%拉去了一个活动现场
    - 在那里，和%CHARA%一起配合，给别人表演了魔术


# 资深年7月1周后，回合结束
# 好感度+20~30，速度+5，耐力+5
we_buttercup:
  title: 永远的Buttercup
  lines:
    - 一个普通的下午，%YOU%和%CHARA%，只是在校园里面一起走着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂。%CALLNAME%，帮我拿着。」
    - %CHARA%不知为何突然脱下头上的帽子，向%YOU%传递过来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「干什么？天才%MOHOSHOJO%sweepy在休息，现在是%SEX%的里人格%CHARA%在和你说话！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……怎么了？%CHARA%，也不过只是个小%UMA%吧？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼。你不愿意拿着的话，我自己拿着，略略略」
    - %CHARA%一下子把帽子抢回去，拉下一只眼睛的眼皮，对着%YOU%做起了鬼脸
    -
    - %CHARA%坐在花坛边上，轻轻闭上眼睛，慢悠悠地前后晃着两条小腿
    - 阳光照在%SEX%的面庞上
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！你这家伙！让我躺一下。」
    - 突然下了命令
    -
    - 就这样，%CHARA%把头枕在%YOU%的大腿上，默默地闭着眼睛，静静地躺着
    - 两只棕色的耳朵不时微微转动
    -
    - 不知为何缓缓睁开了眼睛，和%YOU%对视起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……你不说些什么吗？我这样子什么的。」
    - 虽然冷冰冰的，但也意外地有几分轻柔
    -
    - acc: 1
      content: 「也没什么好说的吧」
      lines:
        - 「确实就像小孩子一样……」
        - 不经意间露出了无奈的表情
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼。大人就是这样，老是看不起小孩子。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但凡自己当过一次小孩子就明白了。」
        -
        - 得到了冷冷的回复，%CHARA%又默默闭上眼睛，静静躺在%YOU%的腿上
        - 阳光洒落在%YOU%和%CHARA%身上
        -
        - 直到黄昏，%CHARA%才起身戴上帽子，领着%YOU%回到了训练室
    - acc: 2
      content: 「反正……从一开始，不论哪个%CHARA%就都是这个样子……」
      lines:
        - 不经意间露出了无奈的表情
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……！什，什么意思！？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「喂！讲清楚啊%CALLNAME%！我怎么就一直都是这个样！子！了！！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼！」
        - 一下子起了身，%CHARA%有几分生气地把放在一边的帽子戴上
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不休息了！叫%CHARA%的小%UMA%已经回去了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「现在，是
            - fontWeight: bold
              content: 一开始
            - 的天才%MOHOSHOJO%sweepy在和你说话！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「还想跟%SEX%聊天的话，%CALLNAME%下次自己珍惜点吧！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要不然，以后可能都没法再见到了！」
        -
        - 就这样，%YOU%又被%CHARA%硬生生地推回了训练室……


# 资深年7月1周后，持有淫纹，回合开始
ws_night_shade:
  title: 不可言说的Nightshade！
  lines:
    - 新的一天，%YOU%在办公室里工作的时候，一名小%UMA%拿着一本厚厚的书走了进来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，这本书，你帮我拿走吧。」
    - 开门见山地提出了请求
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前段时间，不知道为什么有人把它给了我，好像非常想要我看这本书。但是我不想看。」
    -
    - 看了一眼书的封面，名为《魔法的本质及其实践》
    -
    - acc: 1
      content: 「不是挺好的吗，为什么不看呢？」
    - %YOU%这样回应道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要。这本书感觉阴森森的，我才不要看这种阴森森的书。」
    - 似乎有某种直觉似地，%CHARA%给出了拒绝的理由
    -
    - ……其实，这本书，作为训练员的%YOU%曾经看过
    - 或许之前给%CHARA%看稍微有些太早了，但现在的话，或许让%SEX%知道一下也不错——
    -
    - 「不看的话，拿来就没有意义了吧」
    - 继续这样说着
    - 「毕竟，了解魔法的本质，不是对天才%MOHOSHOJO%sweepy很有帮助的东西么？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……什么啊！怎么你也是这个态度啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！既然%CALLNAME%这么说，我就姑且看两眼到底是什么书好了。」
    - 在%YOU%的鼓励下，%CHARA%装作勉为其难地打开书本，从目录那页翻读起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目录，第一章，关系魔法。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「第一节，淫纹的zhong……lei……ji……」
    -
    - 不知道为什么，%CHARA%阅读的声音越来越小，眼睛里的光芒也逐渐黯淡下去
    - 就这样，在难以形容的静寂中，一直看到了第一节的结尾
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……呐～！%CALLNAME%！我突然想到——！」
    - 不知为何突然开始卖可爱的 %CHARA%，用%UMA%的力量把%YOU%硬生生拉去探险了……
    -
    - 据%FUJI%宿舍长说，那之后的一周，一向熬夜研究魔法的%CHARA%开始每晚仰面朝天，好好睡起了觉
    - 看起来安详无比……
  # we_gypsonphila


# ws_night_shade 同回合，回合结束
# +炽热视线
we_gypsonphila:
  title: 应当追求的Gypsophila！
  lines:
    - 平凡的一天，热热闹闹的，下课的教室里
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐。听好了，大家。」
    - 一名小%UMA%突然从座位上跑到讲台桌那里去，发起了宣言
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「关于魔法的本质，我有着不得不告诉大家的消息……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「台下的某些人，或许已经知道了传说中『魔法』的真谛」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也许，一些人正尝试使用这种『魔法』从中受益……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是！」
    - %CHARA%突然爬上讲台桌
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的『魔法』，终究不过是『黑魔法』罢了！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「根据天才%MOHOSHOJO%sweepy的研究，魔法，其实有着更好的一面！」
    - %CHARA%跳下讲台，抓起粉笔，在黑板上不断书写着一连串令人不明所以的咒语
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的，那样的，还有这个——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所有的这些，才是——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！让我说完～！！！」
    - 结果，自顾自胡闹的%CHARA%，被老师当场逮住，只得在课上继续偷偷向旁桌传播%SEX%的魔法理论


# 好感+20~30，技能点数+50，体力&精力+600
ws_strange_day:
  title: 可笑しい日
  lines:
    - 一日早上，%YOU%感觉有些不太对劲，但仍然打算迎接美满的一天。
    - 「(ง •̀_•́)ง」
    - %YOU%没有在意那么多，在洗漱完毕后出门了
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「Y(^_^)Y」
    - %SEX%还是一如既往在校门口欢迎每一个人
    - ……？
    - 「눈_눈」
    - %YOU%感觉有点怪异，却无法说出来
    - color: %COLOR_58%
      content:
        - fontWeight: bold
          content: %DOTOU%
        - 「(๑•́ωก̀๑)」
    - %SEX%怎么又哭了
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - 「(～0～)」
    - 这位小祖宗又熬夜了吧
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「<(★ΦωΦ★)>」
    - ……这都是什么表情。
    - ……！
    - 「(#ﾟДﾟ)」
    - %YOU%终于注意到，%YOU%这一路上都没听到一句话，反而是一些颜文字浮现在脑中。
    -
    - 这可怎么办呢……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(｢･ω･)｢嘿」
    - 在路上碰见了%CHARA%
    -
    - acc: 1
      content: ｢(｢･ω･)｢嘿」
    - acc: 2
      content: ｢ヾ(＾。^★)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(〇_ｏ)」
    - 看样子好像没有理解%YOU%在干什么。
    -
    - acc: 1
      content: 向%SEX%解释现在的状态
      lines:
        - (「(´ﾟωﾟ｀)」)
        - (「⁽⁽◝( •௰• )◜⁾⁾，₍₍◞( •௰• )◟₎₎（手舞足蹈中）」)
        -
        - (「╮（╯＿╰）╭」)
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(┯_┯)」
    - 过了一时半会，终于理解了意思
    - 但是，却被带着去了训练员室
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(★^ω^★)/♪∪」
    - 用魔杖指着一瓶黏糊糊的草药汁液
    -
    - acc: 1
      content: 「(●—●)」
    - %YOU%只是感到一阵踌躇……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(┯_┯)/ ∪」
    - 用魔杖明确地示意了那瓶未知物
    -
    - acc: 1
      content: 「(๑˙ー˙๑)」
    -
    - 在不到一个小时的时间里不断试着药
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(★^ω^★)/
        - color: rgba(72, 217, 70, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( ^ _ ^ )/
        - color: rgba(191, 8, 173, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( ｰ̀ д ｰ́ )/
        - color: rgba(28, 8, 204, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( 눈 _ 눈 )/
        - color: rgba(239, 223, 6, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(  ◣д◢ )/
        - color: rgba(225, 32, 2, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    - 完全没有效果
    -
    - 明明是在尝试解除不明所以的诅咒
    - 不知为何却有了一种成为实验小白鼠的感觉……
    -
    - if: era.get('cflag:32:招募状态') === 1
      lines:
        - ……等一下，或许并不是诅咒
        - 说到「小白鼠」——
        -
        - 想起了名为%TACHYON%的%UMA%
        - 也许，又是不打招呼的实验……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「(◣д◢)」
        - 而这份气没有消的样子，或许利用一下也不错
        -
        - 来到了%TACHYON%的实验室，穿着白大褂的%UMA%果然就在那里
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「╰（‵□′）╯」
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「( ^ω^ )」
        -
        - acc: 1
          content: (「╭( ′• o •′ )╭☞( ^ω^ )」)
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「(눈_눈)」
        -
        - acc: 1
          content: (「(～￣▽￣)→(눈_눈)」)
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「（╯‵□′）╯︵┴─┴(눈_눈)」
        -
        - 咚咚啪！轰轰轰——！！
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷」
        - （感谢汤姆老师的配音）
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「( ✘_✘ )」
        -
        - 在%YOU%与%CHARA%的共同压制下，眼前的栗毛%UMA%不久就答应交出这一次的解药
        - 之后，虽然不多，但%YOU%的生活恢复了某种程度的正常
    - if: era.get('cflag:32:招募状态') !== 1
      lines:
        - ……等一下，或许并不是诅咒
        - 想起之前在学校的小卖部领取了免费的饮品——
        -
        - acc: 1
          content: (「(◣д◢)」)
        -
        - 带着还在生气的%CHARA%来到小卖部，身穿白大褂的栗毛%UMA%就在那里
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「╰（‵□′）╯」
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「(★∩ω∩)」
        -
        - acc: 1
          content: (「╭( ′• o •′ )╭☞(★∩ω∩)」)
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「(눈_눈)」
        -
        - acc: 1
          content: (「(～￣▽￣)→(눈_눈)」)
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「（╯‵□′）╯︵┴─┴(눈_눈)」
        -
        - 咚咚啪！轰轰轰——！！
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷」
        - （感谢汤姆老师的配音）
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「( ✘_✘ )」
        -
        - 在%YOU%与%CHARA%的共同压制下，眼前的栗毛%UMA%不久就交出了解药
        - 之后，%YOU%的生活恢复了正常


# 招募东商变革，黄金巨匠，杜兰达尔，真机伶，梦之旅五名马娘后，过回合随机触发
# +干劲
ws_branches:
  title: 树枝
  lines:
    - 日子一天天地过去，随着时间的推移，%YOU%名下的%UMA%逐渐变得越来越多
    - %CHARA%，%ORFEVRE%，%DURANDAL%，%CURREN%，%JOURNEY%
    -
    - 转眼之间，%YOU%的名下，已经有了这么多出色的赛%UMA%们
    -
    - 为了不辜负赛%UMA%们的天赋，新的一天，像往常一样来到了操场上，集结赛%UMA%们，对%THEY%的训练进行指导——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「凭什么啊！凭什么我要和别人一起练习啊！」
    - 安抚的事情等下再做，总之先让%SEX%待在现场……
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「臣希望，余同此等子民共事？有什么有趣的地方？」
    - 马上说出了令人担心的话语
    - 但是，不是抗拒的话应该真的更多是好奇吧……
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「主君！今天，我会使用这根利剑来守护你！」
    - 似乎因为找到了趁手的树枝，非常激动的样子
    - 希望训练的时候可以暂时放在一旁……
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「%CALLNAME_38%，无论说什么机伶都会听的哦～♪」
    - 只是说着直白而可靠的话语
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「纵使旅途中有众多风景，我相信，您的归处，仍然会是唯一且幸福的……」
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「……呵呵，只是些许希冀而已，不必在意……」
    - 只是说着令人迷糊的话
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「欸～～，梦旅前辈，居然会这么说么～」
    - 不知为何对%JOURNEY%的话马上起了反应
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「会不会有点，太没有『分享心』了呢——」
    -
    - %CURREN%和%JOURNEY%，开始了微妙的眼神对决……
    - 开始训练的时候应该会停下来所以先放心吧……
    -
    - 向%CURREN%和%JOURNEY%先说了有关训练事宜的安排
    - 回头望去，%DURANDAL%，%ORFEVRE%，还有%CHARA%居然在各自拿着树枝进行决斗……！
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%——！为什么不过来帮主人战斗啊！！」
    - 似乎是察觉到了这边看向那里的目光，一边奋战一边呼喊道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Rosa★Thistle，倒在天才%MOHOSHOJO%sweepy的剑刃之下吧！！！」
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「呃啊……！」
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「对不起，主君……今后，臣可能没法再侍奉您了……」
    - %DURANDAL%被魔法剑和王之刃一齐击中，HP归零了……
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「如此，最强大的反叛者已经消灭——暂时同盟的条件，便已破裂」
    - %ORFEVRE%将树枝别在腰间一条不知从哪里要来的腰带上
    - %SEX%对举着树枝的%CHARA%，冷静而不失威严地说道
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「除掉你，亦是成王道路上，必然的选择」
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「臣，将被余之子民所铭记——」
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「以反叛者之姿。」
    -
    - %CHARA%和%ORFEVRE%拿好树枝，互相向着对方冲锋
    - 刹那间的交锋——
    -
    - %CHARA%手中的树枝，清脆地断成了两截
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    -
    - 失去了武器的（剑客）魔法师，面对王的逼近，不自觉地后退……！
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「欸～～～这样子就结束了吗～」
    - %CURREN%，不知何时出现在了%CHARA%旁边
    -
    - 给%CHARA%，递上了一根全新的树枝
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「如果是想成为『威严的王』——」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「『可爱的机伶』，说什么也不会让出王位的哦？」
    - if: era.get('cflag:38:性别') === 1
      content: 轻巧地用树枝指向对方，王和他的（剑客）魔法师，整装待发……！
    - if: era.get('cflag:38:性别') !== 1
      content: 轻巧地用树枝指向对方，女王和她的（剑客）魔法师，整装待发……！
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「……那么，也请准许我加入战斗——」
    - %JOURNEY%带着%SEX%的树枝站到%ORFEVRE%身边
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「此刻，我即是……王的骑士。」
    - 王和%SEX%的骑士，严阵以待……！
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （可恶，乱臣贼子居然也能成为骑士！）
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （但是，此刻复活的话，可能还是会被围攻……！！）
    - %DURANDAL%的眼神中，透露出焦急……
    -
    - 「所以，这……」
    -
    - 「就是特雷森学院……」
    -
    - 也许，大概，一定，只是%YOU%手下的赛%UMA%恰好都太奇特了吧……
    - 一定是这样的……


# 触发条件为东商变革+真机伶入队，杜兰达尔+黄金巨匠+梦之旅入学后，过回合随机触发
# 东商变革和真机伶互相之间的好感+50，对玩家角色的好感均+50，干劲均提升
ws_mother:
  title: 妈妈
  lines:
    - 一个普通的早晨，训练员室的桌子上，多了一封写着「致sweepy酱」，画着可爱简笔画的信
    -
    - 打开信封，发现信纸上面写着很多嘘寒问暖的话语，夹杂着一些可爱的图片
    -
    - 信的结尾，则写着：
    - 「——你的妈妈
    - Curren（可爱）的机伶♥」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要！我什么时候多了个妈妈啊？！！！」
    - 看到这封信的%CHARA%，几乎是马上就跑到了%CURREN%面前
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「欸～～，sweepy酱，有哪里不满意吗？机伶，觉得挺好的哦～？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哪里有这样随便就变成别人妈妈的家伙啊？！」
    - %CHARA%马上反驳着
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「因为，机伶，之前跟着sweepy酱完成了%MOHOSHOJO%的修行……」
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「所以——现在要实现sweepy酱的愿望，成为%SEX%的妈妈！」
    - 笃定地回答着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是什么理由啊！？」
    - 吐槽个不停
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要！绝对不要！我才没有许过这种愿望！而且也没有那么需要照顾吧！？」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「呜呜……sweepy酱，真的不想要机伶当妈妈吗？」
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - （眼泪汪汪）
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以说不要突然开始哭啊！？？」
    - 在%CHARA%有些不知道如何是好的时候
    - %CURREN%，揉干了眼泪
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「这样吧！sweepy酱……如果真的找到了能够替代机伶的妈妈」
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「机伶，就愿意把妈妈的名额让出去！」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「不过，有一个条件——」
    - %CURREN%把一张写着三个名字的纸递给%CHARA%
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「记得，不要弄丢哦♪」
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么啊什么啊！凭什么我要被安排找这几个人啊！」
    - 被%CURREN%安排完一切，走在路上的时候，这样自言自语着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼！算了！不就是让%THEY%中的随便一个当我一天『妈妈』吗！天才%MOHOSHOJO%，肯定做得到！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！那边那个！……我是说『杜兰达』，你是这个名单上的第一个。」
    - %CHARA%，在%YOU%的带领下来到了%DURANDAL%附近
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……虽然说起来很奇怪。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你。可以当我的『妈妈』吗？」
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （妈？！妈妈！？？为什么是我！？）
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （我……我真的有什么妈妈的……特质吗……？）
    - 不知为何，%DURANDAL%脸上似乎有些半尴尬半羞涩的红晕……
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （不行！这种情况绝对不行！被后辈当作妈妈什么的！）
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （再怎么样……也得是『骑士』才行……！）
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「没问题的！如果是后辈的请求的话，当然没问题！」
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （不对！我为什么接受了啊！？？）
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「既然你同意了……那就来试试……让我骑一下走好了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果成了就去芦毛那家伙那里！不许有问题！」
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （呜……得找个办法补救……！）
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「是！明白了！今天的……『主君』！」
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「我，现在就带主君前往您的目的地！！」
    -
    - %DURANDAL%说完，背起%CHARA%，像风一样向前跑去——
    - 只是，且不论奔跑的方向是否正确，速度，首先就有些太快了
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！？？？？？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不——要～～～～～！！！」
    - 在%CHARA%的惊叫结束之前，%DURANDAL%，已经不小心绊到了一块石头，两个人一齐倒在了柔软的草地上
    - %CHARA%，在那之后狠狠地把%DURANDAL%的名字从那张纸上划掉了
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……『奥鲁菲』……啊。」
    - 走在路上的时候，对着那张名单上的下一个名字面露难色
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「居然要，让『奥鲁菲』当我的妈妈。」
    -
    - 不管怎样，带着%CHARA%去见了%ORFEVRE%
    - 高大的金鹿毛%UMA%就站在那里，即使想要相视，也只得抬头才能做到
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 而后，是无尽的沉默
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「既然觐见，余同臣问好。」
    - %ORFEVRE%打破沉默，向%CHARA%伸出了一只手
    - %CHARA%，只是看着那只手，脸上的表情就变得复杂起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%，如果主人回不来了，记得照顾好爸爸妈妈。」
    - 而后，抱着视死如归的眼神，将自己的手同%ORFEVRE%的手搭上去——
    -
    - %ORFEVRE%，只是好好地和%CHARA%握了握手
    - 不过，几乎要吓哭出来的%CHARA%，拉着%YOU%转头就跑走了
    - %CHARA%，还没和%ORFEVRE%说上话，就把%ORFEVRE%的名字从那张纸上划掉了
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊。接下来是……这位……啊……嗯……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只要，能让%SEX%做我的……所谓的『妈妈』……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「首先……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「先从，『接触』开始……」
    -
    - %CHARA%把魔杖从腰间拿出来，拿在手里
    - 重心努力向着拿着魔杖的手倾斜，一只脚平踏在地上作为支撑，另一只脚，则只有脚尖点地
    - 小心翼翼地把身体凑过去，把魔杖伸过去——
    -
    - 戳。戳。
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「没关系的哦……？」
    - 对这种小心翼翼的「试探」，%JOURNEY%没有什么反感的样子
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「如果是和别人有赌约……或者单纯赌气的话……」
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「我……可以在能力范围里适当陪同一下。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要！为什么和芦毛那家伙一样好像我想什么你都能知道啊！？？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的『妈妈』，我才不要！！」
    - %CHARA%，毅然决然地把%JOURNEY%的名字从那张纸上划掉了
    -
    -
    - 总之，返回了%CURREN%那里
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要不要不要！为什么会这么夸张啊——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说到底，你给我安排的人选，就没有一个真的懂照顾人的吧！？？」
    - 直截了当地给出了%SEX%自己的感受
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「才～没有那回事！杜兰达酱，奥鲁菲，梦旅酱，在竞赛上都『很靠谱』，不是吗？」
    - 只是这样答复着
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「如果，%THEY%都不能让sweepy酱满意的话——」
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「这不正说明，机伶，是这个世界上最好的妈妈吗！？」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「机伶，不管是全力撒娇，还是求摸摸，都完全没有问题哦♪」
    - 说着完全不像妈妈的话的%CURREN%，一副计谋得逞的样子
    - 而%CHARA%，只是用两根手指顶着太阳穴，拼命思考着
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不对。还有说法。」
    - 突然笃定地下了结论
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「？」
    - 似乎对预料之外的发展有些惊讶
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……我也在那张纸上，签了自己的名字。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为你说『不要弄丢』。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看。」
    - %CHARA%把那张纸拿起来，在纸的右下角，有着一个小小的用作记号的名字
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我在你讲清楚之前写的。也就是说，你说『纸上都可以选』的时候，它已经在那里了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以！『%CHARA%』，
        - fontWeight: bold
          content: 也是可以选的对象——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也就是说——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「从今天起，我，就是我自己的妈妈！！」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「？？？」
    -
    - acc: 1
      content: 「其实你自己也是一个『麻烦』……」
    - %YOU%只是就这么对%CHARA%补充道。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「才不许你说这种事！%CALLNAME%——！！！」
    - 马上反驳过来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总之，我才不要什么奇怪的芦毛%UMA%当我的妈妈！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！『妈妈』今天要给『孩子』加餐冰激凌，明白了吗？！」
    - 所以说为什么是%YOU%来承担……
    -
    - 事后，%CURREN%带%YOU%和%CHARA%一起吃了一顿甜品作为补偿


# 爱如往昔入队，新秀年4月及之后
# 东商变革和爱如往昔互相之间的好感+75，对玩家角色的好感同时+75，干劲均提升
ws_tea_party:
  title: 女巫与吸血鬼的茶会
  lines:
    - 一个平静的下午，和%SIL%一起坐在茶桌边
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「说起来，训练员先生为什么会突然想要和我一起喝下午茶呢？」
    -
    - acc: 1
      content: 「因为有空……稍微想找几个人一起聚一下」
    - 这样回答着，和%SIL%一起等待着
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「啊……！这位……是……」
    - %SIL%看向不远处走来的一名小%UMA%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！%CALLNAME%！为什么突然叫我来喝下午茶啊！」
    - 一如既往的样子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……『还有人』？那是什么意思？」
    - 向桌旁张望的%CHARA%，偶然间和%SIL%深红的眼眸在一刹那相视
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「吸……」
    - 脸色一下子变得不对起来
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐～%CALLNAME%～今天的下午茶，要不主人暂时就不参加了吧？」
    - 突然开始撒娇了——
    -
    - 不管怎样，还是和%SIL%，%CHARA%，一同坐在了茶桌旁
    - 除去%YOU%在勤勤恳恳地泡茶之外，在场的另外两人，不知为何陷入了微妙的沉默
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「……」
    - 原本就不高的存在感，似乎因为克制显得更加稀薄
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 即使喝着有点苦的花茶，都没有什么反应了
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「那个……」
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「东商同学……要试试这一款茶水吗？」
    - 还是打破了沉默
    -
    - %SIL%将泡有自己爱喝红茶的茶壶拿起来，为%CHARA%倒了一杯茶水
    - 鲜红的液体，赫然摆在%CHARA%面前
    -
    - 有些犹豫的%CHARA%，稍微看了一眼%YOU%，又看了一眼%SIL%
    - 只是端起茶杯，稍稍喝了一口
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……呜……」
    - 虽然没有多说什么，但表情，明显对这味道十分抗拒的样子
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「啊……！」
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「我居然忘了，东商同学不是很喜欢苦的东西……」
    - 有些愧疚的样子
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「说起来……有一种搭配，之前也给训练员先生介绍过……」
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「或许，对东商同学会好一点……」
    -
    - %SIL%从桌子的茶盒边拿起一瓶饮料，稍稍倾倒了一些，掺入了那杯茶水
    - 最终，勾兑出来的液体，更加猩红——
    -
    - 看到这猩红的液体，%CHARA%的脸色，稍稍有一点发白
    - 但在察觉%SIL%有些发怯和失落的眼神后，小%UMA%还是接过了那杯茶
    - 慢慢地，慢慢地，抿了一口
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「会……好一点吗？」
    - %SIL%轻声地问道
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……嗯。还可以……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然会苦，但甜了好多……」
    - %CHARA%一边说着，一边轻轻地又抿了一口
    -
    - 慢慢地和两位%UMA%一起度过了平和的下午茶时光
    - 在这之后，特雷森学院里流传开了「%MAJO%」，「妖精小姐」和 「故事家」的茶会传说
