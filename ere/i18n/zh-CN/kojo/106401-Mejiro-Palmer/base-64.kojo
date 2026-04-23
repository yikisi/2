# @file 目白善信 - 地下室
# @author KUN
welcome:
  sync: true
  lines:
    - random: true
      lines:
        - %YOU% 睡醒的时候，却发现自己处在一个冰冷的封闭空间里。
        - 左右看着周围，结果看见了一个熟悉的笑脸。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%～过得怎么样～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这可是为了你特别准备的哦，惊喜吧？」
    - random: true
      lines:
        - 阴暗的小房间里，没有睡好的 %YOU% 捂着头坐了起来。
        - 空无一人的空间里，除了 %YOU% 自己以外似乎再没有其他人。
        - 正当 %YOU% 准备下床走两步的时候，却听见了一个熟悉的声音。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%～我回来啦～」
        - 从转角探出脸的 %CHARA%，微笑着看向 %YOU%。

flatter:
  - if: (t = era.get('relation:64:0')) < 0
    lines:
      - 自己的搭档是一个阳光的孩子，只要好好地言语交流，乖巧地请求的话……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就算是我，也能听出 %CALLNAME% 的谎言哦。」
      - %CHARA% 没有一点犹豫地打断了 %YOU% 的声音，露出了一个平静的笑容。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「对于这样的 %CALLNAME%，或许需要一点小小的惩罚呢。」
      - 在 %YOU% 还想说什么之前，%CHARA% 就止住了嘴唇的动作。
      - 没有一点犹豫的将 %YOU% 带回那张床上，平静地坐在 %YOU% 的身边。
      - 安静得令人无法再发出言语。
  - if: t >= 0 && (t = (t < era.get('love:64') * (era.get('flag:极端行为限制') || 1)))
    lines:
      - 试图用言语来和 %CHARA% 和解，却被嘴唇强行堵住了声音。
      - 直到 %YOU% 的呼吸已经跟不上的时候，%CHARA% 才满意的松开了嘴唇，拉出一道长长的银丝。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不行哦。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME% 可不能说那些事情呢。」
      - 已经无力的 %YOU% 又一次被推倒在小床上，看着居高临下的 %CHARA%。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我可不喜欢 %CALLNAME% 你说这些呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「现在，全都是 %CALLNAME% 的错哦。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「和我一起，一直在这里吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～」
  - if: '!t'
    lines:
      - 暗无天日的房间里，%YOU% 依旧在尝试以嘴上功夫突破什么。
      - 只是这一次，%CHARA% 仅仅是坐在 %YOU% 的身旁安静的听着。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……就算 %CALLNAME% 你不说，我也很清楚的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我只是个胆小的家伙……对不起。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME% 你其实，并没有什么错的。」
      - 低垂着头，缓缓往 %YOU% 的身边贴过去，靠在肩膀上。
      - 双手不安地往身旁伸去，轻轻抱住了 %YOU% 垂下的手掌。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「至少……让我再任性一会。」
      - 手指钻进掌心，十指相扣。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「再任性一小会，就好。」

battle_escape:
  - 短暂的吵闹声之后，小房间里又恢复了平静。
  - %CHARA% 安静地躺倒在 %YOU% 的面前，一动不动。
  - 接下来只要打开眼前的锁，就可以回去了。
  - （……这样真的好吗，就这样把 %CHARA% 留在这里……）
  - 如此质问了自己之后，心里有些不忍地 %YOU% 还是选择了回头。
  - 既然是一同选择了逃跑的搭档，那就应该一起走才是。
  - 强撑着力气直起身的 %YOU% 抱起了昏迷中的 %CHARA%，拿起了早就翻出来的钥匙。
  - 该一起回去了。

battle_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这可不行呢，%CALLNAME%。」
  - 毫无压力地抓住了 %YOU% 图谋不轨的手，反而将 %YOU% 推倒了墙边。
  - %CHARA% 居高临下地看着 %YOU% 精彩的表情，浮出了一个暧昧的表情。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我喜欢的 %CALLNAME% 啊，可不会对我做这种事情呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「让我们回去再好～好地再聊聊吧。」
  - 昏暗的灯光下，蓝色的瞳孔散着微微荧光。

battle_prison:
  - 冰冷的门锁发出清脆的声音。
  - %YOU% 颤抖的双肩被身后有力的手轻轻握住了肩膀，传来了一丝令人意外的暖意。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%～你在做什么呢～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「道歉的话，我可以装作什么都没看见哦～」
  - 轻描淡写的几句话，但 %YOU% 什么都说不出口，只是茫然的让 %CHARA% 带回到了床边。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME% 只要在这里，等着我就好了哦。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「其他的事情，并不重要呢。」

find_escape:
  sync: true
  lines:
    - 门锁在 %YOU% 的努力下终于有了松动的迹象，正当 %YOU% 准备加把劲的时候……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，是专门在这里等着我回来吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不愧是我的 %CALLNAME%！」
    - 微笑着接过了 %YOU% 手上的工具，又转身关上了门。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要欢迎的话，只要在这里就好了哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果 %CALLNAME% 打开锁的话，我会很苦恼的呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你明白的吧，%CALLNAME%？」

back_basement:
  sync: true
  lines:
    - if: d.start
      lines:
        - if: era.get('base:0:体力') < 100
          lines:
            - 睁开疲劳的双眼，却对上了那双曾经无论何时都明亮的，动人的蓝色瞳孔。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「嗯哼～」
        - if: era.get('base:0:体力') >= 100
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哦，你醒了啊。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME% 的睡颜我还没看够呢，真是的……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不过只要在这里的话，无论多少次我都能看见 %CALLNAME% 的笑容……对吧？」
    - if: '!d.start'
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我回来啦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦，%CALLNAME%～今天也是乖孩子呢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「安心吧，我会一直陪在你身边的哦。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「毕竟这里可是……我逃跑的终点呢」

start_fixing:
  - 正在休息中的 %YOU% 似乎听见了门口的方向传来了金属掉落在地上的声音。
  - 察觉到了什么的 %YOU% 正想着前来看看，却是正好与 %CHARA% 碰了个正着。
  - 大门依旧完好如初，甚至陷阱和门锁更加的完美。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%？你来做什么呢？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊，是来找我的对吧？」
  - 明知故问一般，%CHARA% 半强迫地把 %YOU% 又推回了房间里。
  - 对着 %YOU% 做出了一个安静的手势，笑了笑。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「抱歉呢，吵到你了。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「晚点我就回去找你啦，%CALLNAME%。」

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……是呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「果然，%CALLNAME% 也不喜欢一直待在这里，对吧。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「对不起，一直将 %CALLNAME% 留在这里。」
  - 一动不动站在 %YOU% 的身前，低着头摇摇晃晃的，似乎下一刻就会倒地一样。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但至少……至少现在再让我任性一下。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只要一小会就好了，一小会。」
  - 跌跌撞撞地向前走过来倒在了 %YOU% 的胸口上，隔着衣服依稀能够感受到一丝热流。
  - 双手伸过腰间，紧紧拥抱着。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这样就好……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只要这样，再一小会就好……」
  - 不知度过了多久，终于还是松开了抱紧的手。
  - 已经满脸通红的 %CHARA% 撑起了笑容，抹去了脸上的水珠。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那个啊，%CALLNAME%。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「出去之后……我们还可以是搭档对吧。」
  - 门锁被 %CHARA% 打开，发出明亮的响声。
  - 背对着门，向着 %YOU% 伸出手。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我们走吧……%CALLNAME%。」

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「还不行哦。」
  - 对着正在请求的 %YOU%，%CHARA% 只是淡淡地笑了起来，轻手抚摸着 %YOU% 的脸。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME% 不在这里的话。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我会很寂寞的呐。」
  - 起身靠在 %YOU% 的耳边，缓缓地往耳廓上添上一口。
  - 感受到 %YOU% 全身发毛的动态，%CHARA% 甜蜜地笑了起来。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「留在我身边就好哦……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」

ask_time:
  - %YOU% 试探性向 %CHARA% 询问时间，却只得到了一个平淡的笑容。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「时间还有很多哦。」
