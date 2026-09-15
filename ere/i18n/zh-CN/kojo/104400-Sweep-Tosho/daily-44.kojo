# @file 东商变革 - 日常
# @author 阿格尼斯数码公司

good_night_sex:
  - 一天，训练结束之后，%CHARA%突然凑了上来，扯了扯%YOU%的衣角
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……喂。%CALLNAME%。跟我走吧。去休息室。做你喜欢做的那种事。」
  - 直截了当地提出了请求
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……为什么一副惊讶的表情？走，还是不走？」
  - %CHARA%只是用紫色的眼眸看着%YOU%
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
          - 「走。」
      - 就这样，%YOU%跟在%CHARA%的身后，一起进了休息室
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
                  - 「不要不要！我才不接受！%CALLNAME%你之前对我……干那种事情的时候，才不是这样子的！！」
              - 突然叫起来
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「%CALLNAME%！我命令你，今天就跟我进休息室啦！！！」
              -
              - （%CHARA%发起了意志力判定！）
              - 【意志正在经受磨练……】
              - 【通过检定了！】
              - -
              - 纵使%CHARA%满地打滚……某些事情也不是说做就能随时去做的
              - 在承诺给%SEX%一份甜品后，至少是搪塞了过去
      - if: d.check === 2 # 大成功转强奸
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要不要！我才不接受！%CALLNAME%你之前对我……干那种事情的时候，才不是这样子的！！」
          - 突然叫起来
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！我命令你，今天就跟我进休息室啦！！！」
          -
          - （%CHARA%发起了意志力判定！）
          -
          - 【意志正在经受磨练……】
          - 【检定……失败了！】
          -
          - 即使提出了甜品的建议，对方依然不接受的样子
          - 在和%SEX%以「意志力」互相僵持了许久后，%YOU%终究是拗不过满地打滚的%CHARA%
          -
          - 最终，%YOU%只是跟在%CHARA%身后进了休息室


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