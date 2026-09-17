# @file 东商变革 - 日常
# @author 阿格尼斯数码公司

# 关键节点：
# 难解的 Blue Enchantress：招募后当回合结束，因招募时间不定，简化为新秀年4月（育成回合计时>=12）及之后
# 新生的 Asphodel：伊丽莎白二世女皇杯当回合，即经典年11月第2周（育成回合计时=47+42）回合结束，之前为<=，之后为>
# 魔法之梦：宝冢纪念下一回合，即资深年7月第1周（育成回合计时=95+25）回合开始，之前为<，之后为>=

select:
  sync: true
  lines:
    - if: era.get('status:44:生日') > 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「听好了听好了！今天，是天才%MOHOSHOJO%sweepy大人的生日！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然从没想过废柴%CALLNAME%能做些什么，但如果有甜品的话就赶快拿出来吧～！」
    - if: t = era.get('cflag:44:育成用变量')?.agreement > 0 # 大魔法师的约定状态
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「『魔女之夜』当然和平常不一样了！就算说了你也不会明白的！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「为了『魔女之夜』，不论是主人还是 %CALLNAME% 都得尽心尽力」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「你要是敢偷懒……魔法饼干以后就不给你了！！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「只要，能在那一天…………」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「…才没有说什么！不许这样盯着主人看！我现在就要开始练习…！！」
    - if: "!era.get('status:44:生日') && !t && era.get('status:44:熬夜') > 0"
      lines:
        # 新生的Asphodel（经典年11月第2周回合结束事件）之前
        - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呼……唔……唔……嗯嗯……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「唔……！没错！！那个%MOHOSHOJO%，后来……！！！」
            - %CHARA% 昨晚熬夜读书了的样子
        # 新生的Asphodel（经典年11月第2周回合结束事件）之后，魔法之梦（资深年7月第1周回合开始事件）之前
        - if: t > 47 + 42 && t < 95 + 25
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呼……唔……唔……嗯嗯……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「唔……！不对不对！%CALLNAME%，快来看看这个魔法怎么样！！」
            - %CHARA% 昨晚熬夜研究了些什么的样子
        # 魔法之梦（资深年7月第1周回合开始事件）之后
        - if: t >= 95 + 25
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呼……唔……唔……嗯嗯……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「唔……！不要不要！我今天不要训练了啦～！！」
            - 不管%CHARA%昨晚到底做了什么……总之熬夜了的样子
    - if: "!era.get('status:44:生日') && !t && !era.get('status:44:熬夜')"
      lines:
        # 魔法之梦（资深年7月第1周回合开始事件）之后
        - if: era.get('cflag:44:育成回合计时') >= 95 + 25
          lines:
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「呐！%CALLNAME%，你说，『治愈草』和『火焰花』，在市场里能不能买得到？」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「我到外面看了好久的魔杖，结果还是只有奶奶的这一根最好。」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「……才不是舍不得！！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%，我找了新的%CALLNAME%来陪你！玩具店里买的。是小狗。不会动。毛茸茸的。」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%！最近书店里有什么新的魔法习作？！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「『马里伯特』更新了……？不要不要！那种魔法我才不要学啦～！！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「前几天……跟着往昔……同学一起去喝了猩红的液体！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「明明都是茶但是好苦！！完全没有奶奶泡的好喝！！！」
        - if: era.get('cflag:44:育成回合计时') < 95 + 25
          lines:
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「快看快看！%CALLNAME%，那个是不是传说中的风之精灵？！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「『早上好』『中午好』和『下午好』全部都是错的！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「正确说法，当然是『sweepy大人好』啦！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%的职责就是一直一～直地服侍主人！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「所以说，每一天的忠诚都是很重要的哦！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「不要不要！不要一见面就开始讲计划什么的！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%！我命令你，先讲个故事给主人听再开始谈计划！！」
            - if: era.get('cflag:97:招募状态') !== 1
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「你听说了吗%CALLNAME%！？在特雷森学园里——其实有一名%UMA%吸血鬼！」
            - if: era.get('cflag:97:招募状态') === 1
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%！你到底是怎么认识%UMA%吸——不对不对！往昔女爵的？赶快告诉我！！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「炼金术？那种东西不过是我力量的二成八分六厘！才不是什么最近学会的！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「为什么啊！？%CALL_68%喝了也就去了趟保健室的药水，为什么不能给%CALLNAME%喝啊！」
            # 新生的Asphodel（经典年11月第2周回合结束事件）之后
            - if: era.get('cflag:44:育成回合计时') > 47 + 42
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「你到底在想什么啊%CALLNAME%！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「就算没有帽子，我也当然是天才%MOHOSHOJO%sweepy啊！！」
            - if: era.get('cflag:44:育成回合计时') > 47 + 42
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%！不要再拿什么讲魔法的书过来了！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「天才%MOHOSHOJO%sweepy，现在只需要自己就可以创造出独创的魔法了！」


office_study:
  # 大魔法师的约定期间
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「喂！%CALLNAME%！有没有什么更好施展赛跑魔法的秘诀！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那些杂务？我早就做完了啊。」
      - 给出了意料之外的答复
  # 魔法之梦（资深年7月第1周回合开始事件）之前
  - if: "!t && era.get('cflag:44:育成回合计时') < 95+25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！这些书我才不要读！！」
          - 结果，情况演变成%YOU%在这头朗诵，%CHARA%在那头一动不动听着……
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepy，居然还要亲自处理这些事务！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呐！%CALLNAME%！为什么你就不能替主人完成这些杂务啦～～！」
          - 辅导一下倒是能行……指导着%CHARA%完成%SEX%只是懒得做的学科作业
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么这些杂务一天比一天多啊！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『不是只剩下英语了吗』……？我都会了为什么还要处理它啊！」
          - 总之，在%YOU%的鼓励下，%CHARA%只花了不到十分钟就做完了英语作业
  # 魔法之梦（资深年7月第1周回合开始事件）之后
  - if: "!t && era.get('cflag:44:育成回合计时') >= 95+25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepy，居然还要亲自做完这些作业！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呐！%CALLNAME%！为什么你就不能替主人完成这些作业啦～～！」
          - 为什么还是不愿意做作业呢……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！写作业的时间我要是拿去钻研魔法的话，肯定一下子能钻研好几个出来！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呐！%CALLNAME%！总之一切都交给你了！！！」
          - 还请不要逃跑……


office_prepare:
  # 大魔法师的约定期间
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……所以说，这个要这样子……那个要那样子……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……还有什么情报要讲的？……以及别想骗走主人的魔杖和帽子！！」
          - 结果，还是不愿意答应在比赛的时候脱下来
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……知道了知道了！这种事情天才%MOHOSHOJO%sweepy怎么可能不明白！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……为什么突然不讲了？……继续啊。」
          - 不管怎样，%CHARA%愿意听就好
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！我才不许%CALLNAME%乱动我的魔杖！！」
          - 总之，为%CHARA%指导了帽子和魔杖之外的东西如何整理……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！作为未来的大魔法师，帽子怎么是%CALLNAME%能乱动的！！！」
          - 总之，为%CHARA%指导了帽子和魔杖之外的东西如何整理……
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『这样子做的话，能在赛跑时更好地施展魔法』……？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哦。知道了知道了。」
          - %CHARA%只是默默学着%YOU%的样子做赛前准备
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「听说『魔法蹄铁』……能够让人无论从多高的地方跳下来都毫发无伤！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呐！%CALLNAME%！我命令你找到这样的蹄铁！」
          - 先把眼前处理蹄铁的事情做好吧……
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这样子做的话……我的跑鞋也可以成为魔法鞋！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……『魔法鞋有什么用』？总之很有用就对了！」
          - 似乎在增加魔法物品的数量……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我承认%CALLNAME%说的很有道理，但是，主人觉得可以略做修改……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「就像这样——还有那样，最后，还有这个样子！」
          - 乍一听很不靠谱，但是实践时候，%CHARA%的准备方案效果意外地好
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『这样子做的话，能在赛跑时更好地施展魔法』……？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不～要——！！主人的耳朵快听得长～茧～啦——！！！」
          - 总之，在%YOU%头疼于想新的说辞时，%CHARA%很自觉地进行起了赛前准备
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「听说『魔法蹄铁』……能够让人无论从多高的地方跳下来都毫发无伤！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呐！%CALLNAME%！我们能不能想办法造一个这样的蹄铁？」
          - 手工活什么的请不要太过分……


talk:
  # 大魔法师的约定期间
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「为了『魔女之夜』，%CALLNAME%必须更加尽力尽力地服侍主人才可以！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「要随时随地都能给主人拿来甜品才可以哦♪」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「为了『魔女之夜』，%CALLNAME%必须更加尽力尽力地服侍主人才可以！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「在主人在评为大魔法师之前，一～步也不能离开！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「像这样……再那样……到了『魔女之夜』那一天，就能够……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「喂！还愣着干什么%CALLNAME%！还不快帮主人看看这种方法到底对不对！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人一直以来珍藏的魔法甜品，到这个时候终于有用了！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「只要努力工作，sweepy大人的魔法饼干，在『魔女之夜』后分给%CALLNAME%几块也不是不行！」
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么什么！？哪里有新的魔法的线索？？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「为什么突然停下来不讲了？！继续啊%CALLNAME%！！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么什么！？%CALLNAME%抓到什么暗夜的精灵了？？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「老鼠。哦。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「工作足够努力的话，就能获得主人的奖励！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「奖励就是——让%CALLNAME%出去给主人买甜品！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「只要用了这瓶魔药，%CALLNAME%就能为主人二十四小时鞠躬尽瘁了～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……为什么看起来那么不高兴啊！！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不是魔法的练习我绝对不做！不合我心意的练习我也绝对不做！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不过如果是%CALLNAME%推荐的练习，主人就勉强考虑一下好了！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「看到没有我优秀的人要先夸我，看到比我优秀的人也要先夸我！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「作为%CALLNAME%，永远只有说主人好在哪里的权利～！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！又在讲什么和魔法没关系的话了啊！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不听不听！想要我听，%CALLNAME%，就先给主人讲个和魔法有关的故事吧～！」
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「看到没有我优秀的人要先夸我，看到比我优秀的人也要先夸我！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没错没错，就像这样，多夸奖夸奖伟大的天才%MOHOSHOJO%sweepy大人！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么什么！？%CALLNAME%又打听到了什么魔法的线索？！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼哼～那么决定了！今晚，就带着%CALLNAME%去那里好了！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「想要魔法的话，魔力就是必须的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「也就是说，甜品是不可或缺的～♪」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「魔法线索的收集是不能松懈的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不然，主人到底带%CALLNAME%到哪里去转才好啊！？」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这本书也好，那本书也罢」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「总之！天才%MOHOSHOJO%sweepy大人将来要写的书，%CALLNAME%一定要记牢了！」
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「工作足够努力的话，就能获得主人的奖励！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「奖励就是——%CALLNAME%给主人买甜品的时候，可以多买一份给自己！」
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「只要用了这瓶魔药，%CALLNAME%就能在上班的时候打起十二分精神了～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……会打起一百分精神？没有那么难喝吧！」
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！你说的这个，还有那个，都好无聊啊！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『因为是编的』……？那也编有趣一点吧！？？」
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「无论奶奶的想法怎么样，%CALLNAME%怎么看我……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我今天，都一定要抢到那家甜品店新出的芭菲！！」


office_gift:
  - if: era.get('relation:44:0') < 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊什么啊！%CALLNAME%的谢罪礼，就只有这一点吗！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下次还这样的话，我才不会理%CALLNAME%啦！」
      - 不管怎样，%CHARA%还是变开心了的样子
  # 大魔法师的约定期间
  - if: (t = (era.get('cflag:44:育成用变量')?.agreement > 0)) && era.get('relation:44:0') >= 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊什么啊！这种时候，又想讨主人什么欢心啊！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『对练习有帮助』……？那还不快点拿过来？！」
      - 不管怎样，%CHARA%好好地收下了%YOU%送的礼物
  # 魔法之梦（资深年7月第1周回合开始事件）之后
  - if: "!t && era.get('relation:44:0') >= 0 && era.get('cflag:44:育成回合计时') >= 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没错没错！甜品什么的无论多少都没有问题～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呣～！为什么那么愁眉苦脸的啊！明明是在送我礼物吧！？」
          - 在%CHARA%担保%SEX%不会吃胖后，%YOU%才放心地把甜点交给了%SEX%
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「做得好做得好！天才%MOHOSHOJO%sweepy，从今天起就要开始藏书！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「一定，要在今年之内有比奶奶还多的书～！」
          - %CHARA%很高兴地收下了%YOU%送的故事书
  # 魔法之梦（资深年7月第1周回合开始事件）之前
  - if: "!t && era.get('relation:44:0') >= 0 && era.get('cflag:44:育成回合计时') < 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没错没错！甜品什么的无论多少都没有问题～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「作为%CALLNAME%，要在主人变胖之前尽可能地多送一些过来！」
          - 虽然有点担心……但收到甜点的%CHARA%非常开心的样子
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「做得好做得好！只要收集更多的%CALLNAME%」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「到那一天，成为大%MAJO%的天才%MOHOSHOJO%sweepy就能够统治世界了！」
          - 收到玩偶的%CHARA%，非常开心的样子
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么是奇怪的书啊！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……！这一本是？！」
          - %CHARA%对新收到的童话书非常喜欢的样子
      # 新生的Asphodel（经典年11月第2周回合结束事件）之后
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没错没错！甜品什么的无论多少都没有问题～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「作为%CALLNAME%，要在主人变胖之前尽可能地多送一些过来！」
          - 虽然有点担心……但收到甜点的%CHARA%非常开心的样子
      # 新生的Asphodel（经典年11月第2周回合结束事件）之后
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「做得好做得好！只要收集更多的魔法书籍」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepy，早日成为大魔法师也完全不是问题～！」
          - %CHARA%很高兴地收下了%YOU%送的故事书


office_cook:
  # 大魔法师的约定期间
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……『吃这个的话，就能补充魔力』？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……哼。姑且信%CALLNAME%一回。」
      - %CHARA%只是默默吃着%YOU%带来的便当
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「干什么啊%CALLNAME%！我们来这里有什么意义啊！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……！那个是，新出的魔法甜品……？！」
          - 总之，请%CHARA%吃了甜品
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「喂，%CALLNAME%。你说，青菜能不能做成甜的？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「还有那个肉，那块鱼什么的，能不能都做得像糖果一样？」
          - 脑海里自然冒出了吃太多糖会蛀牙和发胖的双重问题，总之以各种说辞搪塞了%CHARA%的请求……
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%——！为什么里面有彩椒啊！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要，好苦，好难吃！！」
          - 结果，%CHARA%把便当里的彩椒一块一块剔除出来，其他的吃了个精光……
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呐～%CALLNAME%，主人真的好想吃甜品！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「下次在便当里盖一层冰激凌！怎么样？」
          - 那是不可能的……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呐～%CALLNAME%，我听说彩椒不是拿去水煮的话，会好吃很多」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「既然那么想要主人吃彩椒的话，好歹换个做法吧～！」
          - %CHARA%开始为不吃彩椒找到了合理的理由……
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么这次的便当全是青菜沙拉啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「肉在哪里？鱼在哪里？甜品在哪里～～？！！」
          - 如果不加上最后一个请求的话倒是合理的……


office_rest:
  # 大魔法师的约定期间
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……『劳逸结合的话，更有利于魔法的进步』？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……%CALLNAME%先睡。」
      - 总之，装睡的%YOU%，看见%CHARA%真正入睡之后才安心下来
  # 魔法之梦（资深年7月第1周回合开始事件）之前
  - if: "!t && era.get('cflag:44:育成回合计时') < 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！%CALLNAME%那么关心主人干什么！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「Poppy★Juniper，%CALLNAME%睡着吧！！」
          - 结果，%CHARA%自己等得有点打瞌睡，被%YOU%陪着睡了回笼觉
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！%CALLNAME%困的话，自己睡不就好了吗！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepy，不论白天还是夜晚都不会被睡眠精灵所战胜！」
          - 就是晚上完全没有好好睡觉的意思吧……让%CHARA%闭上眼思索魔法，不久，%SEX%还是打起了瞌睡
  # 魔法之梦（资深年7月第1周回合开始事件）之后
  - if: "!t && era.get('cflag:44:育成回合计时') >= 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要不要！就算很困我也不要睡觉啦～～！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『要不然就喝咖啡』……？不要不要！好苦，我睡我睡！！！」
          - %CHARA%只是好好地在休息室睡了个回笼觉
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么呀什么呀！为什么%CALLNAME%觉得我该休息我就该停下来啦～！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『看在%CALLNAME%的面子上』……？%CALLNAME%怎么又有面子了啊～～！！！」
          - 虽然面带不甘，但%CHARA%还是好好地在休息室睡了个回笼觉


office_game:
  # 大魔法师的约定期间
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……『打游戏』？这种时候还有心情打游戏吗%CALLNAME%——！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！%CALLNAME%你喜欢玩的话，主人要自己去练习了！！！」
      - %CHARA%完全没那个心情的样子……
  # 新秀年4月之前
  - if: "!t && era.get('cflag:44:育成回合计时') < 12"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要不要！凭什么主人要听%CALLNAME%的话啊！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%想玩游戏的话，自己玩不就好了吗！？」
      - 结果，%CHARA%在一旁一动不动地看着%YOU%玩游戏……
  # 新秀年4月之后
  - if: "!t && era.get('cflag:44:育成回合计时') >= 12"
    lines:
      # 第一次
      - if: "!d.game"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%，就那么喜欢打游戏？」
          - 打游戏的时候，一旁一动不动站着的%CHARA%突然说起了话
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……怎么总感觉，游戏技术还没有主人好的样子。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么啊！为什么那么一副不服气的样子啊！既然在别人面前打游戏，被评价也是很正常的吧！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『……有种我也上？』『……玩啥都行？』那有什么不行的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼哼～就让%CALLNAME%稍微见识一下吧，天才%MOHOSHOJO%sweepy的『游戏魔法』！」
      - if: d.game > 0
        lines:
          - random: true
            lines:
              - 和%CHARA%一起玩着角色扮演类游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不是不是，为什么打着打着突然就哭起来了啊！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「我还有最强的一招魔法没有用啊！！！」
          - random: true
            lines:
              - 和%CHARA%一起玩着角色扮演类游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不要不要不要！又是在讲什么了啊！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「就不能趁讲话的时候直接对他用魔法吗？！」
          - random: true
            lines:
              - 和%CHARA%一起玩着角色扮演类游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「笨蛋%CALLNAME%！这里当然要这样子才对啊！吃我一击——！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「为什么不吃火属性伤害啊！！」
          - random: true
            lines:
              - 和%CHARA%一起玩着角色扮演类游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「呜呜……呜呜……呜呜呜呜呜呜呜呜」
              - 看来还是有剧情能戳到%SEX%的……
          - random: true
            lines:
              - 和%CHARA%一起玩着魔法学院经营类的游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「看啊%CALLNAME%！这个%MOHOSHOJO%的魔杖，和我的是不是很像！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「哼哼～这个魔法咒语我已经背下来了！」
          - random: true
            lines:
              - 和%CHARA%一起玩着商店经营类游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「这样那样就——调和好了！哼哼～这样的魔法药水一定能卖个好价钱～！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「为什么，为什么不满意就不付我钱啊！！」
          - random: true
            lines:
              - 和%CHARA%一起玩着角色扮演类游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「只要用这个魔法……还有这个魔法，肯定马上就能打败魔王了！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「这一次，一定要成为最强魔法师！！！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「！这个%MOHOSHOJO%，那个魔法使，都是可以获得的吗！？」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「……要钱？那就是可以获得的意思是吧！我要我要！！」
              - 好不容易阻止了%CHARA%向内购游戏充值……
          # 经典年
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - 看%CHARA%玩着弹幕游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不要不要！这个弹幕为什么这么难啊！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「怎么就没有炸弹了啊！不～～～要～～～！！！」
          # 经典年
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - 和%CHARA%一起玩难度比较高的动作类游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不要不要！为什么老是被击中两下就倒下了啊！！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不行！总之先把血量点到40……！」
          # 经典年
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - 「为什么不先击败这个怪物，去商店买防御力呢……」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「？还能这么打？」
              - 玩不擅长的魔塔类游戏时候，意外地谦逊下来
          # 经典年
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「这样子……那样子……这个魔法就搭配好了！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「就叫……sweepy流怪物召唤术！」
              - 说到底在TRPG游戏中只会召唤怪物没有用的吧……
          # 魔法之梦（资深年7月第1周回合开始事件）之后
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - 和%CHARA%一起玩着格斗游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「太弱了太弱了！我的黑白魔法使，肯定是要强于你的红白女巫的！！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「Tosho★Spark！！！」
          # 魔法之梦（资深年7月第1周回合开始事件）之后
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - 和%CHARA%一起玩着卡牌游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不要不要不要！为什么你带了那么多手牌发动的陷阱卡啊！！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「为什么我就一张都没抽到啊！！！」
          # 魔法之梦（资深年7月第1周回合开始事件）之后
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - 和%CHARA%一起玩着角色扮演类游戏
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不要不要不要！为什么要花时间去上学啊！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不呆在殿堂里的话，我怎么去获得更强的人格啊！」


borrow_money:
  # 新秀年4月以前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - 向%CHARA%说明了自己要借钱的想法
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「借……钱……？」
      - %CHARA%，一时有些疑惑
      - 不过，马上变回了平常的样子
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼！%CALLNAME%没钱当然是%CALLNAME%自己的事情了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「无论是被扣工资了，买零食买多了，还是有想买的玩具了——」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这样的愿望，主人才不会随便满足！」
      - 不管怎样，%CHARA%拒绝了借钱……
  - if: era.get('cflag:44:育成回合计时') >= 12 && !d.borrow
    lines:
      - 向%CHARA%说明了自己要借钱的想法
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「借……钱……？」
      - %CHARA%，一时有些疑惑的样子
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，居然缺钱了？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「让我猜猜……」
      - 马上开始了猜测
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，被扣工资了？买零食买多了？有想买的玩具了？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「果然！没有主人管着，连花钱这种事都没法让人安心嘛！」
      - 直接导向了结论
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「算了！主人这次大度一点，就不怪罪%CALLNAME%了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%你等着！明天，主人就来解决你的问题！」
      -
      - 第二天，%CHARA%来到%YOU%的办公室，在桌上放了一大堆从宿舍各个角落搜刮出来的或新或旧的货币
  - if: era.get('cflag:44:育成回合计时') >= 12 && d.borrow > 0
    lines:
      - 向%CHARA%说明了自己要借钱的想法
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - 不知为何，听完%YOU%要借的钱的说辞，%CHARA%陷入了沉默
      -
      - 而后，突然把帽子脱下来，魔杖从腰间卸下来，放在桌子上
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……%CALLNAME%。你去外面试试看，把它们卖掉，说不定还有的救」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「或者……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「至少……不要让主人知道——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你，真的变成了其他家伙的『那种%CALLNAME%』……什么的。」
      -
      - 在%CHARA%的误解永无止境地发展下去之前，%YOU%用开玩笑的说辞停止了向%CHARA%借钱的行为


s_a_tree_hollow:
  # 新秀年4月之前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊什么啊！学院附近，怎么会有这么邪恶的东西啊！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不行不行！NandinaDomestica★Garmala，被天才%MOHOSHOJO%sweepy净化吧！！」
      - 听完%YOU%解释的%CHARA%，只是对着枯树洞挥舞着魔杖
  - if: era.get('cflag:44:育成回合计时') >= 12 && !d.tree_hollow
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「怨念深重的地方是%MOHOSHOJO%的大敌！这种地方，天才%MOHOSHOJO%sweepy下次再也不会来了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……%CALLNAME%，帮主人看一下附近有没有人。只是试一下，试一下而已。」
      - 在确定周围没有人之后，%CHARA%开始学着别人向枯树洞里面喊叫着
  - if: era.get('cflag:44:育成回合计时') >= 12 && d.tree_hollow > 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「笨——蛋——使——魔——→」
          - 请不要在当事人还在的时候依然喊这种话……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「给——我——冰——激——凌——→」
          - 在确定周围没有人之后，%CHARA%对枯树洞喊着这样的话语
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「彩——椒——好——难——吃——→」
          - 在确定周围没有人之后，%CHARA%对枯树洞喊着这样的话语
      # 新生的Asphodel（经典年11月第2周回合结束事件）之后
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我——会——证——明——→」
          - 在确定周围没有人之后，%CHARA%对枯树洞喊着这样的话语
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「好——好——看——着——吧——→」
          - 在确定周围没有人之后，%CHARA%对枯树洞喊着这样的话语
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「魔——法——是——真——的——↑」
          - 在确定周围没有人之后，%CHARA%对枯树洞喊着这样的话语
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使——魔——不——许——走——→」
          - 在确定周围没有人之后，%CHARA%对枯树洞喊着这样的话语


s_a_dating:
  # 大魔法师的约定期间
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……『出去玩』？这种时候还有心情出去玩吗%CALLNAME%——！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！%CALLNAME%你自己喜欢出去乱逛的话，主人也要自己去练习了！！！」
      - %CHARA%完全没那个心情的样子……
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「怎么了怎么了？%CALLNAME%，难不成在校园里发现新的魔法了！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……『暂时还没有』？是马上就要找到的意思对吧？！」
          - 总之，和%CHARA%一起在中庭散着步
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么啊什么啊！为什么找不到竹子啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不论是麻雀做的饮料还是月球掉下来的小孩，没有竹子的话怎么能找得到啊？！」
          - 总之，和%CHARA%一起在中庭散着步
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「加油找到魔法线索的话，回去之后，就给%CALLNAME%吃好吃的～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……才没有！！主人哪里有『每次』都自己把要给%CALLNAME%的奖励吃光！！！」
          - %CHARA%生气地反驳%YOU%的说辞
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这样的，还有那样的传说，一定都是有依据的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼哼～瞧着吧%CALLNAME%，我就说学院里一定有新来的%CALLNAME%！」
          - 在鬼怪传闻的引导下，%YOU%和%CHARA%真的找到了一只小猫
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「学校的花园，说到底也就那样子嘛！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「你说说看，%CALLNAME%，让学院给天才%MOHOSHOJO%sweepy划一块地种素材怎么样！？」
          - 和%CHARA%一起在中庭缓缓散着步
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么呀什么呀！这种事情那么急着拉主人出来干什么啦！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「下次，除了%CALLNAME%你要被拐走之类的事情，一律不许加急通告！！」
          - 和%CHARA%一起在中庭缓缓散着步
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「完成这次魔法线索的探索，回去之后，就给%CALLNAME%吃好吃的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「张开嘴的时候要说『啊——』，吃完以后最好能回应主人说『好吃』！」
          - 和%CHARA%一起在中庭缓缓散着步
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么啊什么啊！%CALLNAME%的这个理由，连小孩子都会嫌弃吧？！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「要主人说，我们今天跑到这个『魔法森林』里，是为了——」
          - 和%CHARA%一起在中庭缓缓散着步


out_disabled_in_agreement:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……『出去玩』？这种时候还有心情出去玩吗%CALLNAME%——！！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不要不要！%CALLNAME%你自己喜欢出去乱逛的话，主人也要自己去练习了！！！」
  - %CHARA%完全没那个心情的样子……


o_r_fishing:
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - 和%CHARA%一起去到河堤，独自钓着鱼
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么啊什么啊！钓鱼有什么好坐着干等的啦！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「Honeysuckle★PeruvianLily，鱼儿上钩吧～！」
          - 虽然不知道为什么，但在%CHARA%的吵吵闹闹中，鱼上钩的速度好像快了一些
      - random: true
        lines:
          - 和%CHARA%一起去到河堤，独自钓着鱼
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么突然就开始要钓鱼了啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！我命令你，钓鱼的时候必须多和主人说话！！」
          - 虽然不知道为什么，但和%CHARA%聊天的时候，鱼上钩的速度好像快了一些
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - 和%CHARA%一起去到河堤，独自钓着鱼
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么啊什么啊！%CALLNAME%，怎么就那么喜欢钓鱼啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我要诅咒%CALLNAME%钓上大鱼！Nasturtium★Alstroemeria，大鱼上钩吧～！」
          - 虽然不知道为什么，但在%CHARA%的吵吵闹闹中，上钩的鱼大小似乎是比往常略大了一些
      - random: true
        lines:
          - 和%CHARA%一起去到河堤，和%SEX%一起钓着鱼
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不过是区区钓鱼，天才%MOHOSHOJO%sweepy，肯定做得比%CALLNAME%好！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「看吧看吧！主人钓上来的鱼，果然比%CALLNAME%的更大～！」
          - 和%CHARA%一边钓着鱼一边聊天，逐渐忘了一开始两个人是在比赛着什么


o_r_walking:
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「怎么了怎么了？%CALLNAME%，难不成在河边上发现新的魔法了！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……『暂时还没有』？是马上就要找到的意思对吧？！」
          - 总之，和%CHARA%一起在河堤边散着步
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「听说夜黑风高之时……『不幸的黑猫』，会来到河边找魔法鱼！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！我们今天就要在这里蹲守，直到找到那只魔法黑猫和魔法鱼！！」
          - 用各种理由想办法改变了%CHARA%的想法……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「即使是河边的水草也是不能忽视的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「说不定，其中就有着非常适合作为素材的草药——」
          - 总之，和%CHARA%一起在河堤边散着步
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「说『河中水怪』不存在的人不过是笨蛋罢了！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「快看快看！%CALLNAME%，那边那个不就很大只，是个黑影吗！？」
          - 顺着%CHARA%的目光看去，水中居然真的有一条大鱼
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没错没错！只要这样……再那样的话，就能把好多鱼聚在一起了～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『说得就像猫想办法看到鱼一样』……？我才不是猫！！！」
          - %CHARA%生气地反驳%YOU%的说辞
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我听说！今天河边上的小摊贩，会贩卖一些自制的『魔法糕点』」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今天，主人一定要赶在别人前面！！」
          - 和%CHARA%一起在河堤边散着步
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我听说！今天河边上的小摊贩，会贩卖一些他们小时候读过的『魔法书籍』」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「居然不懂那些『魔法书籍』中蕴含的力量！天才%MOHOSHOJO%sweepy，一定要拯救那些书籍！」
          - 和%CHARA%一起在河堤边散着步
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「人类惧怕水的力量……而魔法师，则能够掌握水的力量……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这也正是，天才%MOHOSHOJO%sweepy每天都会到河边来散步的理由～！」
          - 和%CHARA%一起在河堤边散着步
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不论人类是否惧怕水的力量……魔法师到底能否掌握水……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「都不影响，天才%MOHOSHOJO%sweepy每天到河边来散步～！」
          - 和%CHARA%一起在河堤边散着步


o_s_arcade:
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「怎么回事怎么回事！%CALLNAME%，怎么就那么喜欢抓娃娃啊！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「！%CALLNAME%，我要那个，就是那个！！现在，立刻，不许失误！！！」
          - 在%CHARA%的指挥下，%YOU%顺利拿到了%SEX%想要的玩偶
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不论什么样的游戏，天才%MOHOSHOJO%sweepy都不会输的～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要不要！%CALLNAME%！！下把游戏，你不许动按钮！！！」
          - 赢了%CHARA%几次后，%SEX%稍微有些生气了的样子
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「打鼓这种东西，天才%MOHOSHOJO%sweepy大人还不是手到擒来～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么难度这么高啊！？？」
          - %CHARA%苦恼于过难的游戏内容
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这样——然后再那样，就能把人救出来了～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「为什么为什么啊！救人为什么不给我战利品啊！」
          - %CHARA%似乎对游戏的奖励机制感到不满
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「躲过这个技能，然后再挡住那个技能，就可以——」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「看招，sweepy大人的绝对魔法——！！」
          - %CHARA%似乎对在游戏里使用了绝招而感到满意
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95+25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「无论是什么样的怪谈，天才%MOHOSHOJO%都能够用这把枪打败！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「绝对！没……有！害……怕……」
          - %CHARA%似乎还是被街机游戏的恐怖氛围吓到了
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95+25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不论是什么样的车，天才%MOHOSHOJO%sweepy都能够驾驭！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不对不对！为什么被撞了还能往反方向开的啊！？」
          - %CHARA%花了好长时间才把车的行驶方向调转过来


o_s_drawing:
  - if: "!d.drawing"
    lines:
      - 带着%CHARA%去到了（特供的）抽奖屋内！
      -
      - 应有尽有的胡萝卜，胡萝卜汉堡肉，以及有可能能抽到的最高大奖——温泉旅行券！
      - 丰厚的奖品，正可谓是赛%UMA%的天堂——
      -
      - 在一旁，%CHARA%，用魔杖轻轻戳了戳架子上的胡萝卜汉堡肉
      - 汉堡肉，稍微后退了一点点，露出了一点点侧面
      -
      - 果然对胡萝卜感起了兴趣，%CHARA%，抽走柜台上用画板架住的一根胡萝卜
      - 翻来翻去，似乎在试图通过观察努力理解着什么
      - 最后，不知为何，从半空中松开手，让胡萝卜自由落体
      -
      - 哗——
      - 哗——
      -
      - （软纸做的）一根胡萝卜
      -
      - 只是摇曳着
      -
      - 缓缓
      -
      - 飘落到地上。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - 小%UMA%盯着那和地面合二为一的胡萝卜，不知为何陷入了沉默
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『纸之%CALLNAME%』。」
      - 抬起头来，用魔杖轻轻指了指％你％
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这些东西对你来说应该挺有营养的。主人就不吃了，你先吃吧。」
      -
      - 至少请不要取这么奇怪的绰号……
      - 不管怎样，让%CHARA%来到了这个精心准备的设施
  - if: d.drawing > 0
    lines:
      - 带着%CHARA%去到了（特供的）抽奖屋内！
      - 应有尽有的胡萝卜，胡萝卜汉堡肉，以及有可能能抽到的最高大奖——温泉旅行券！
      - 丰厚的奖品，正可谓是赛%UMA%的天堂——

osd_loop:
  -
  - acc: 1
    content: （抽奖！）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊什么啊！这又是要抽什么了啊！？」
      -
      - 在%CHARA%面前，%YOU%缓缓展开抽奖券（纸团），暴露出里面写着的奖品名称
      -
      - 抽到了——
      - random: true
        lines:
          - 「抽纸」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哦。」
          - 明明是最实用的物品，却连评论都懒得发表了……
      - random: true
        lines:
          - 「一根（平面硬纸板）胡萝卜」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！完全不能吃的胡萝卜有什么用啊！！」
          - 总之，%CHARA%把那一根小小的硬纸板胡萝卜叼在嘴边上下摆动
      - random: true
        lines:
          - 「一堆（平面硬纸板）胡萝卜」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「三个拼在一起的话——就是一根真正的胡萝卜了～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么施了魔法看上去还是不能吃啊！！」
      - random: true
        lines:
          - 「（纸板）胡萝卜汉堡」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……为什么背面就没有图案了啊！！！」
          - %CHARA%开始在纸板背面绘制独属于自己的胡萝卜汉堡……
      - random: true
        lines:
          - 「（手绘的）温泉旅行券」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……%CALLNAME%泡不起温泉的话，主人也可以满足你愿望的。」
          - %CHARA%开始通过手绘量产温泉旅行券……
  - acc: 2
    content: （是回去的时候了）
    lines:
      - 虽然仍然在用奇怪甚至带有几分鄙夷的眼神看着%YOU%
      - 但离开抽奖店的%CHARA%，确实心情变好了的样子


o_s_ktv:
  # 新秀年4月以前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「卡拉……OK……？去那种地方干什么啊！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！凭什么我要和%CALLNAME%一起唱歌啊！」
      - 不管怎样，%CHARA%点歌之后，坐在一旁一边听一边要求%YOU%唱了好几遍那首歌……
  # 新秀年4月以后
  - if: era.get('cflag:44:育成回合计时') >= 12
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『做舞台的准备』『马儿跳传说』？不要不要！我才不要干！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepy，要唱的当然是这个——」
          - 在拒绝%YOU%原本的计划之后，%CHARA%理所当然地点播了魔法少女动画的片头曲
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『做舞台的准备』『彩phantasia』？不要不要！我才不要唱！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepy，今天只听这个——」
          - %CHARA%出乎意料地点了一首有歌词的管弦乐曲，跟着哼起来

o_s_movie:
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么啊什么啊！这又是什么电影啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使——魔——！我的爆米花呢？！」
          - 不管怎么样，和%CHARA%坐在一起看了电影
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - 和%CHARA%一起看了一部主要面向孩子的电影
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么换了世界就没有所谓的魔力了啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「说好的『友谊就是魔法』呢！？？」
      # 新秀年4月以后
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - 和%CHARA%一起去看了一部有关导盲犬的电影
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「从今以后，主人也要好好对待身边的宠物了」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「首先，从好好对待%CALLNAME%开始好了！」
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - 和%CHARA%一起去看了一部有关移动城堡的电影
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「为什么，为什么被诅咒了就要变老啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『不是所有人都像你一样不想长大』……？我才不是小孩子！！」
      - random: true
        lines:
          - 和%CHARA%一起看了一部有关驾驶机器人的电影
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！为什么爸爸让我驾驶机器人我就一定要去做啊！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「就算世界要毁灭了……也一定会有其他的办法拯救……！」

o_c_pray:
  # 新秀年4月之前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊什么啊！为什么要去神社啊！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「神明？神明什么的就用魔法替代吧！！！」
      -
      - 对着神龛念咒大概也算是一种参拜吧……
  # 新秀年4月之后
  - if: era.get('cflag:44:育成回合计时') >= 12
    lines:
      # 新生的Asphodel（经典年11月第2周回合结束事件）之前
      - if: era.get('cflag:44:育成回合计时') <= 47 + 42
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不论什么样的神明，说到底都是比不过魔法的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……所以说，%CALLNAME%，这次抽到的是什么……？」
      # 新生的Asphodel（经典年11月第2周回合结束事件）之后，魔法之梦（资深年7月第1周回合开始事件）之前
      - if: era.get('cflag:44:育成回合计时') > 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不论什么样的神明，说到底都是比不过魔法的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「下次，对着天才%MOHOSHOJO%sweepy大人直接许愿不就好了嘛！」
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不论什么样的神明，说到底都是比不过魔法的！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「下次，必须用天才%MOHOSHOJO%sweepy自制的签来抽才可以！」
      - if: d.dice < 0.05
        content: 抽到了[大吉]！
      - if: d.dice >= 0.05 && d.dice < 0.5
        content: 抽到了[吉]！
      - if: d.dice >= 0.5 && d.dice < 0.95
        content: 抽到了[凶]！
      - if: d.dice >= 0.95
        content: 抽到了[大凶]！
      -
      - if: era.get('cflag:44:育成回合计时') < 47 + 42 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没错吧没错吧！我就说，成为天才%MOHOSHOJO%的%CALLNAME%肯定能带来好运气～！」
          -
          - 大概和这种事没有关系……
      - if: era.get('cflag:44:育成回合计时') < 47 + 42 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不是要被别人捡走了之类的问题，不要跑回来找主人。」
          -
          - 相比于突然开始信抽签的%CHARA%，%YOU%突然开始不想相信抽签的效力了……
      - if: era.get('cflag:44:育成回合计时') >= 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「说吧说吧！想要实现什么愿望，%CALLNAME%？」
          -
          - %YOU%不太认为自己所祭拜的神明是%CHARA%……
      - if: era.get('cflag:44:育成回合计时') >= 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「既然这样，那就没有愿望能为%CALLNAME%实现了！」
          -
          - %YOU%不太认为自己所祭拜的神明是%CHARA%……
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没错吧没错吧？跟主人在一起，果然运气会更好一点～！」
          -
          - 说不定会有着这样的效果呢
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！我要往里面塞更多的[大吉]啦～！！！」
          -
          - 不管怎样，%CHARA%最后是没有这样做


o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「为什么为什么啊！为什么蛋包饭能不加番茄酱的啊！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%——！把那边的番茄酱给我递过来！！」
      - %CHARA%几乎要把蛋包饭变成番茄酱泡饭……
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊什么啊！给主人买鲷鱼烧是什么意思啊？！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「凭什么只给主人买了一个，自己却买了两个啊！！？」
      - 在%CHARA%的强烈要求下，%YOU%把自己多买的那一份给了%CHARA%
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大阪烧果然还是加甜的酱料比较好吃！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下一次，主人要试试往上面加点蜂蜜会怎么样——」
      - 符合自己口味的话也算不错吧……
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！为什么%CALLNAME%的这份可丽饼水果比我多啊！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「明明是一起买回来的吧！？」
      - %YOU%在%CHARA%略显嫉妒的目光中吃着可丽饼

o_s_dating:
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我知道了我知道了！%CALLNAME%，一定是在城市里发现了真正的『大魔法师』！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼哼～不用说了！马上给主人带路吧！」
          - 总之，和%CHARA%一起在车站边的街上散步
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！我听说，最近城市里正有着『八尺的怪人』……！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「作为天才%MOHOSHOJO%，sweepy大人我，一定要探明她的真身！」
          - 和%CHARA%一边聊天，一边在车站附近的街道散着步
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！我听说，最近有一种新型%CALLNAME%正在出没！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我们现在，立刻，马上就要赶到有那种%CALLNAME%的地方去！」
          - 总之，听从%CHARA%的建议一起逛了玩偶店
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不论是什么样的怪谈，天才%MOHOSHOJO%sweepy，都能够探寻真相！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不过！%CALLNAME%你得打头阵！绝对不是因为害怕！！」
          - 和%CHARA%一边聊天，一边在车站附近的街道散着步
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！我完全搞明白『玛丽小姐的电话』是怎么回事了！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「像这样接电话，然后——喂喂——我现在就在你身后——！！」
          - 发现没能吓到%YOU%之后，%CHARA%开始努力表现得有些生气
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！我听说，附近有一家蛋糕店正在贩卖『魔法糕点』！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人以前绝对没去过那家店，绝～对没有！」
          - 总之，听从%CHARA%的建议一起逛了蛋糕店
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「什么啊什么啊！%CALLNAME%编的这种怪谈，就连小孩子也不会信吧！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「要天才%MOHOSHOJO%sweepy说，就该这样才好——」
          - 和%CHARA%一边聊天，一边在车站附近的街道散着步
      # 魔法之梦（资深年7月第1周回合开始事件）之后
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「才不对才不对！这么结束才不对呢！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「要主人说，那个人既没有选红斗篷也没有选蓝斗篷，而是自己拿出了……」
          - 和%CHARA%一边聊天，一边在车站附近的街道散着步


o_s_shopping:
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「天才%MOHOSHOJO%，绝对要有最好的扫帚当座驾！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「既然来了这里，%CALLNAME%，我命令你，马上找来这里最好的扫帚！」
      - 和%CHARA%一起逛起了商场
  # 新生的Asphodel（经典年11月第2周回合结束事件）之后，魔法之梦（资深年7月第1周回合开始事件）之前
  - if: t > 47 + 42 && t < 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么啊什么啊！为什么走得那么慢吞吞的啊！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我们今天，可是有好多好多魔法物件要买呢！」
      - %CHARA%马上就拉着%YOU%在商场里逛来逛去
  # 魔法之梦（资深年7月第1周回合开始事件）之后
  - if: t >= 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天的购物计划主人早就准备好了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「首先是魔法道具，然后是魔法书，最后，当然是甜品！」
      - %CHARA%马上就拉着%YOU%在商场里逛来逛去


gn_normal_sleep:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……帮我……拿着……魔……不……乱动……」
        - %CHARA%在长椅上躺着睡着了，似乎在自言自语着什么
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼呼……天才%MOHOSHOJO%swee……魔法……厉害……」
        - %CHARA%在长椅上躺着睡着了，似乎在自言自语着什么
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……呼……嗯……呆在……主……身边……一步……不要离……」
        - %CHARA%在长椅上躺着睡着了，似乎在自言自语着什么
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼……呼……奶奶……果……认……我的……魔法……最……」
        - %CHARA%在长椅上躺着睡着了，似乎在自言自语着什么
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼呼……天才%MOHOSHOJO%swee……果然……大魔法师……」
        - %CHARA%在长椅上躺着睡着了，似乎在自言自语着什么


# 新秀年4月及之后，晚安，玩家沉睡，仅一次
# 玩家体力+100，精力+200
gn_rest:
  title: 使魔的意外小憩
  lines:
    - if: era.get('love:44') < 50
      lines:
        - 像往常一样，在训练员室里工作
        - 但是，或许是前段时间没睡好，又或者是有些劳累过度，也许是药物的影响
        - 工作的时候，%YOU%似乎就那么倒在了座位上，不知道后来发生了什么
        -
        - ……
        -
        - 朦胧之中，听到了稀稀簌簌的移动声，倒水声，还有富有顿挫感的话语声
        -
        - 慢慢地睁开了眼睛，发现自己已然仰卧在了训练员室的沙发上，被好好地盖上了毯子
        - 转头，看见了在沙发边用夹杂着好奇，紧张和焦虑的眼神看着%YOU%的%CHARA%——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「咿呀！！！僵，僵尸啊！！！」
        -
        - 但是，为什么一张口就是奇怪的话语……
        - acc: 1
          content: 「我还活着……」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊。原……原来是活着的%CALLNAME%啊……！」
        - %CHARA%松了一口气
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「还以为，我的『死灵法术』真的生效了……」
        -
        - 又是一句奇怪的话语……
        - %YOU%好歹是 %CHARA% 的训练员吧……怎么能用「死灵法术」呢……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但，既然『死灵法术』没有生效……」
        - 就在%YOU%汗颜的时候，%CHARA%接着说了起来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「也就代表着，我的『治愈魔法』，在精进后，有了巨大的提升！」
        -
        - acc: 1
          content: 「『治愈魔法……？』」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对！就是奶奶亲手教我的，能够让生病的我都重新变得充满活力的药水！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「经过天才%MOHOSHOJO%sweepy的彻底改良，现在对%CALLNAME%也有治愈的作用！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼哼～既然%CALLNAME%那么感兴趣的话」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「从今天起，我就要为%CALLNAME%一直制作sweepy特制魔法药！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这样子，%CALLNAME%再怎么加班也不会晕倒了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼哼，不愧是天才%MOHOSHOJO%sweepy！」
        -
        - 在那以后，%CHARA%几乎每天都会带着一瓶秘制的鱼腥草茶来找%YOU%
        - 并且，一定要亲眼看到喝完才肯放过%YOU%……
    - if: era.get('love:44') >= 50
      lines:
        - 像往常一样，在训练员室里工作
        - 但是，或许是前段时间没睡好，又或者是有些劳累过度，也许是药物的影响
        - 工作的时候，%YOU%似乎就那么倒在了座位上，不知道后来发生了什么
        -
        - ……
        -
        - 朦胧之中，听到了稀稀簌簌的移动声，倒水声，以及细微的呜咽声
        - ？？？？「呜呜……呜呜呜……」
        -
        - 慢慢地睁开了眼睛——
        - 发现自己已然仰卧在了训练员室的沙发上，被好好地盖上了毯子
        - 转头，看见了沙发边站着的，四周东西堆得乱七八糟，一边手忙脚乱一边哭着的鹿毛小%UMA%
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「咿呀！！僵，僵尸啊！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不对……是%CALLNAME%？！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……呜……呜呜……醒，醒了啊——！！！！」
        - 突然感受到一股冲击力，回过神来时，%CHARA% 已经紧紧地抱在了%YOU%身上
        - 而且，因为抱得有点紧，脊柱稍微有点嘎吱作响的感觉
        -
        - acc: 1
          content: 「那个……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不要！我不会动的！！疼什么的我才不知道！！！疼就给我忍住，笨蛋%CALLNAME%！！！！！」
        - 隐隐有种被抱得更紧的感觉……%YOU%马上闭上了嘴
        -
        - 许久之后，%CHARA% 才缓缓松开%YOU%，退到床边，眼角还带着泪花
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真是的！既然好端端的，就给我早点起来啊！！！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜呜……才没有哭！%CALLNAME%让主人哭什么的，才不可能发生呢！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「而且，说到底都是%CALLNAME%的错吧！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明明只是%CALLNAME%，却突然倒下，让我吓了一跳，也不回答我！」
        -
        - acc: 1
          content: 「难不成，是在关心——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「才没有关心！%CALLNAME%要让主人困扰什么的，还早了一百年呢！！」
        - 马上打断了%YOU%的话语
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……鱼腥草水，我用很大的宝特瓶装满了三瓶，把冰箱装满了」
        - 自言自语着什么
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「才不管你怎么想！给我喝完！几周，几个月，我才不管！我会盯着的！！不许反悔！！」
        -
        - 在这之后，%CHARA%几乎每天都会带把秘制的鱼腥草茶热完倒给%YOU%喝
        - 并且，一定要亲眼看到喝完才肯放过%YOU%


good_night_sex:
  - 一天，训练结束之后，%CHARA%突然凑了上来，扯了扯%YOU%的衣角
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……%CALLNAME%。跟我走吧。去休息室。做你喜欢做的那种事。」
  - 直截了当地提出了请求
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……不许一副惊讶的表情……走，还是不走？」
  - %CHARA%似乎在尽力克制着脸上的红晕，只是用紫色的眼眸看着%YOU%
  -
  - 对于%CHARA%的请求，%YOU%的回应是
  -
  - acc: 1
    key: sex
    content: 「同意」
    lines:
      - 同意了%CHARA%的请求
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……哼。%CALLNAME%果然是这样的家伙。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不许反悔哦。」
      - 就这样，%YOU%跟在不知迈着轻松还是一如既往脚步的%CHARA%身后，一起进了休息室
  - acc: 2
    content: 「拒绝」
    lines:
      - 不管怎么样，拒绝了%CHARA%的请求
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……哦。」
      - 似乎很平静地回应着
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……那我就——」
      - if: d.check < 2 # 普通情况，停止
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「命令使魔，给主人买吃的！！」
              - 突然这么转移话题道
              -
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「因为，既然使魔不愿意做这种事——那就必须从其他地方补偿主人才行！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「虽然即使买再多甜品主人也不会原谅的……但还是得买才可以！！」
              -
              - 不论怎样，给%CHARA%带回来一个胡萝卜蛋糕后，%SEX%确实没有多做些什么
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「不要不要！我才不接受！%CALLNAME%你……应该像是魔法少女书里的反派一样才对…！！」
              - 突然叫起来
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「……不不对我才没有说什么书！总之，%CALLNAME%！主人命令你，今天就跟我进休息室啦！！！」
              -
              - （满地打滚的%CHARA%发起了意志力判定！）
              - 【意志正在经受磨练……】
              - 【通过检定了！】
              - 
              - 纵使%CHARA%满地打滚……某些事情也不是说做就能随时去做的
              - 在承诺给%SEX%一份甜品后，至少是搪塞了过去
      - if: d.check === 2 # 大成功转强奸
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！我才不接受！%CALLNAME%你……应该像是魔法少女书里的反派一样才对…！！」
          - 突然叫起来
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……不不对我才没有说什么书！总之，%CALLNAME%！主人命令你，今天就跟我进休息室啦！！」
          -
          - （满地打滚的%CHARA%发起了意志力判定！）
          -
          - 【意志正在经受磨练……】
          - 【检定……失败了！】
          -
          - 即使提出了甜品的建议，对方依然不接受的样子
          - 在和%SEX%以「意志力」互相僵持了许久后，%YOU%终究是拗不过满地打滚的%CHARA%
          -
          - 最终，%YOU%只是跟在踏着不知是轻松还是一如既往脚步的%CHARA%身后进了休息室


birthday:
  title: 生日
  lines:
    - if: "!d.birthday"
      lines:
        - %CHARA%生日当天，%YOU%并没有直接送%SEX%礼物，也没有带%SEX%去外面的哪个地方玩
        - 而是，拉着%SEX%神神秘秘地在学院里走着
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「什么呀什么呀使魔，又不送礼物的又不说话的是要干什么啦——」
        - 鹿毛小%UMA%一边叫着一边被%YOU%拉进了房间
        - 而后，看见了巨大的生日横幅，可口的奶油蛋糕，还有许许多多应邀而来的朋友们
        -
        - color: #无
          content:
            - fontWeight: bold
              content: 熟识的%UMA%A
            - 「变革，生日快乐！」
        - color: #无
          content:
            - fontWeight: bold
              content: 熟识的%UMA%B
            - 「生日快乐呀，变革酱！」
        - 一进门，就听到了熟悉的祝福
        -
        - color: %COLOR_47%
          content:
            - fontWeight: bold
              content: %ZOB_ZOY%
            - 「那个……生……生日快乐！」
        - 努力祝愿着
        -
        - acc: 1
          content: 「下一步是——」
        -
        - color: %COLOR_24%
          content:
            - fontWeight: bold
              content: %MAYA%
            - 「I Copy！」
        - %MAYA%听到%YOU%的声音，马上敬了一个标准的军礼
        - 随后，按下了旁边的控制按钮——
        -
        - 啪嗒！
        - 房间里的灯熄灭了
        -
        - 有人拿出打火机，将蛋糕上的蜡烛一个个点燃——
        - 细微却恒定的火光，逐渐成为全屋人目光的焦点
        -
        - color: %COLOR_5%
          content:
            - fontWeight: bold
              content: %FUJI%
            - 「那么，接下来就轮到我们今天的主角了呢」
        - 大家将目光投向仍旧站在门口那边的%CHARA%——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……什么呀使魔。还有你们这群人。」
        - %CHARA%轻轻说着，嘴角似乎有些微微地上扬
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%MOHOSHOJO%sweepy，早就见过不少这样的把戏了。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「看在你们可怜的份上，配合一下，倒也不是不行！」
        -
        - %CHARA%大步流星地走到蛋糕前
        - 从腰间拿出魔杖，对着冒着火光的蜡烛轻轻挥舞起来——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「WhiteHeather★PinkTulip，愿望成真！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我的愿望是——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「使魔还有在场的这些人——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「每年——都给我办这样的生日派对！！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼——！！！！」
        - %CHARA%吹灭了蜡烛
        -
        - 就这样，在%CHARA%的愿望声中，%YOU%为%SEX%特意筹备的生日派对正式开始了！
    - if: d.birthday > 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「没错没错！生日果然就是要吃甜的东西才对！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今天的聚会上……不给甜食就捣蛋～！」
            - %CHARA%仗着自己是派对的主角，大肆索要甜食
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不要不要！为什么只给我留了三块蛋糕啊！！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我要四块！……不对是五块！」
            - %CHARA%在生日聚会上叫着要吃更多的蛋糕
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我要礼物！更多的礼物！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「使魔！要求不是很高，一次性把将来几十年生日的礼物都送给我就行了！」
            - %CHARA%在生日聚会上叫着礼物的事情


# 连续2周没有互动后，回合结束时触发【未互动状态每2周都会！】
ws_no_action_2_weeks:
  # 新生的Asphodel（经典年11月第2周回合结束事件）之前
  - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！%CALLNAME%，你又迷路到哪里去了啊！？？」
      - 在路边偶然看到%CHARA%后，%SEX%马上冲过来焦急地朝%YOU%大喊道
      - %YOU%只是向%CHARA%解释了自己最近的忙碌
  # 魔法之梦（资深年7月第1周回合开始事件）之前、新生的Asphodel（经典年11月第2周回合结束事件）之后
  - if: t > 47 + 42 && t < 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！%CALLNAME%，你又跑到哪里去玩了啊！？？」
      - 在路边偶然看到%CHARA%后，%SEX%马上冲过来焦急朝%YOU%大喊道
      - %YOU%只是向%CHARA%解释了自己最近的忙碌
  # 魔法之梦（资深年7月第1周回合开始事件）之后
  - if: t >= 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！%CALLNAME%，你又跑去和谁一起玩了啊？！！」
      - 在路边偶然看到%CHARA%后，%SEX%马上冲过来焦急朝%YOU%大喊道
      - %YOU%只是向%CHARA%解释了自己最近的忙碌


load_talk:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「听好了听好了！天才%MOHOSHOJO%sweepy，突然学会了预知魔法！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哼哼～有时候梦也是很重要的呢！」


end_talk:
  - if: "!d.hentai"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……大人就是这样。明明说好了……不会离开的……」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……不许忘，不管你还是我。拉钩……」
  - if: d.hentai
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……大人就是这样。为了无聊的事情……即使要离开都……」
