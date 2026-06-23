# @file %CHARA% - 育成
# @author KUN
train:
  # BASENAME:0 = 体力
  - if: era.get('base:64:0') < era.get('maxbase:64:0') * 0.45
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呀，就算是%SELF_CALL%也有极限的啦……」
      - %CHARA% 有点无奈的苦笑，却没有停下准备的动作。
  - if: era.get('base:64:0') >= era.get('maxbase:64:0') * 0.45
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「怎么样，训练员？今天的%SELF_CALL%可是火力全开哦！」
          - 微微俯身在起点，眼睛透出认真的目光。
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我现在超兴奋的……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「如果用高尔夫来比喻的话，就是绝对能打出超高分！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「现在的我仿佛可以一直跑下去。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我要用爆速……不对，是用神速一直领跑下去！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「嗯～大家都在努力呢～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「看见这样的情况，连我都嗨起来了……很好！」
      # CFLAGNAME:40 = 干劲
      - if: era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼哼～精神状态绝佳！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「开始今天的训练吧！」
      - if: era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哦呀，训练时间了吗？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「那就全力的加油跑吧！」
      - if: era.get('cflag:64:40') < 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「偶尔……会想着干脆放空脑袋埋头挖地洞呢～」
          - 有点微妙的发出了轻飘飘的声音，一晃一晃的
      # CFLAGNAME:48 = 育成回合计时
      - if: era.get('cflag:64:48') > 47 + 24
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「感觉嗨的不行了……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「为了更加的嗨起来，拜托你了，%CALLNAME%！」

ts_add:
  title: 加练
  lines:
    - 训练时间结束，周围却还有其他的%UMA%在准备加练的声音。
    - %CHARA% 的耳朵听着周边的动静，饶有兴趣的抖了抖。
    - 虽然因为训练计划这个时候就应该休息了，但既然 %CHARA% 那么想去的话……
    - acc: 1
      key: select
      content: 「想去的话就去吧。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「收到！那我就过去啦！」
        - %CHARA% 带着笑容跑回了训练场，毫无违和的加入了训练当中。
        - 这下不得不加班了呢。
    - acc: 2
      content: 「下次我们也这样吧。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「了解！那今天我就尽情休息咯。」
        - %CHARA% 抱着后脑，顺便用手肘稍微敲打了一下身边的搭档。

train_fail:
  title: 在保健室
  lines:
    - 训练出了一点点小小的意外……
    - 紧急送往保健室之后让 %CHARA% 躺平在床上，这才放下心来。
    - %CHARA% 看着身旁正在担心的 %YOU%，不自觉的轻笑了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈，不用担心啦，%SELF_CALL%身体还是很结实的啦。」
    - acc: 1
      content: 「这可不行，你给我好好休息」
    - acc: 2
      content: 「你自己愿意相信自己的身体比什么都重要」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，说的是呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「别担心，很快就可以下来的啦。」
    - 抬起手，轻轻的往 %YOU% 的胸口敲了一下。

race_start:
  title: 竞赛之前
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「准备完全！随时都可以上哦！」
    - 完全没有犹豫，在休息室里左右活动着肩膀，随时预备好了出赛的样子
    - 对于这样的目白善信，完全不必再多说什么担心的话
    - acc: 1
      content: 「开心地去跑吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦！收到！」
    - 朝着 %YOU% 比起一个大拇指，放松的走出了休息室

race_end_win:
  title: 竞赛获胜
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然放开了跑最棒了！」
    - 善信大大方方的站在 %YOU% 的面前，擦着洁白的脖子上流动的汗珠
    - 双手在放松的伸过一个懒腰之后，自然的放在后脑抱着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿，也多亏了训练员呢～」

race_end_lose:
  title: 竞赛败北
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……输掉了啊」
    - 善信叉着腰，低落的看着地面
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是的，我在做什么啊……」

#招募后休息
beginning:
  title: 目白善信登场！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！我准备好了！」
    - 善信站在场上向着 %YOU% 招手，身体的状态也早就调整好了
    - 小小的跳动几步，证明已经准备万全
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然只是这种程度的热身，不过也足够了吧」
    - 虽然热身的动作在周围所有人之中已经相当完整，但善信还是有点在意的看着自己
    - acc: 1
      content: 「我倒是觉得已经够了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉，是吗？啊哈哈……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一直以来我都会觉得这样做还不够！之类的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然有人帮忙看着会好很多嘛！」
    - 看着这样的善信，%YOU% 的心里有些微妙的不安
    - 过去在训练场上的记录很多，只要有点心就能找到
    - 看过善信的记录之后 %YOU% 可以肯定%SEX%并没有%SEX%所说过的弱小，只是缺少了什么决定性的东西
    - 比如，那一天在比赛里用过的跑法？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那，今天的训练是什么？」
    - acc: 1
      content: 「定训练计划之前先随便跑一跑吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉，随便跑吗？」
    - 善信的声音里透出意外的感觉
    - acc: 1
      content: 「当然，要用你自己喜欢的方式」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我自己喜欢的？但是那样的方式会被当成目白家里有一个特立独行的奇怪%UMA%吧，这可有点不妙呢」
    - acc: 1
      content: 「我签约的可是目白善信你啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？什么意思？」
    - acc: 1
      content: 「我想要让善信跑出自己的风格……而不是被目白的名字限制」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈哈！是这样的啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真不愧是我的训练员！」
    - 善信的笑声很清脆，或许是真的很开心
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那，我就用我自己的方式去跑了哦？」
    - acc: 1
      content: 「嗯，我会一直看着你的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一直看着什么的，这个说法感觉怪怪的呢……不过我很开心哦！」
    - 笑容是最美好的表情，而现在的善信脸上，是目前看来笑的最灿烂的一次

#进入新秀年5月1周
rumor:
  title: 小小的流言
  lines:
    - 训练结束之后，%YOU% 单独在自己的办公室里整理着资料
    - 善信很配合训练方案，所以才更需要去把方案的做的完美
    - 在工作进行到一半的时候，办公室的门被推开了
    - 前辈训练员「啊，你在啊」
    - 前辈训练员「你的搭档是那个目白善信对吧？」
    - 前辈训练员「怎么说呢……和那孩子搭档并不算是什么很好的选择」
    - 前辈训练员「按照我的经验来看的话，%SEX%不算很厉害的%UMA%，训练起来会很累吧」
    - 即便话不好听，但却听不出什么恶意
    - 也许并没有说错，但是这对 %YOU% 来说就是另一回事了
    - acc: 1
      content: 「就算这样我也没关系」
    - acc: 2
      content: 「但%SEX%是我的搭档」
    - 前辈训练员「不过我也只是随便说说，具体怎么样还是看你自己的想法」
    - 前辈训练员「加油吧」
    - 看着门被顺手关上，%YOU% 也只是笑一笑，继续做着手头的工作
    - divider: true
      content: 办公室外
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「原来还有这种事情吗……辛苦训练员了」
    - color: %COLOR%
      content: 恰巧在门外听完了全程对话，又赶在被发现之前选择逃避
    - color: %COLOR%
      content: 毕竟，逃跑才是目白善信擅长的领域嘛
    - color: %COLOR%
      content: 这才是目白善信擅长的领域……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……逃跑了啊」
    - color: %COLOR%
      content: 对着墙壁，无力地对自己说着

#新秀年5月2周
strange:
  title: 微妙的空间
  lines:
    - 正在训练中的时候，即便不是专业训练员也能看出来了
    - 善信最近的奔跑有些微妙的变差了
    - 对于作为训练员的 %YOU% 来说，必须做点什么了
    - divider: true
      content: 训练结束
    - 训练时间结束的时候，善信单独留了下来，似乎有点郁闷的样子
    - acc: 1
      content: 「有什么事吗？」
    - acc: 2
      content: 「心情不好吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，嘛……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也算是吧，大概」
    - 善信有点心不在焉的踢着脚下的草皮，眼神也在避开 %YOU% 的方向
    - 说不定……这是对 %YOU% 有意见？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么说呢～就是……」
    - 似乎和猜测完全不一样，善信苦恼的思考着想说的话，却又卡在嘴边说不出来
    - 直到似乎下定某种决心，这才把视线重新聚焦在 %YOU% 的脸上
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前几天，我去找训练员的时候啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「听到了一些……关于我的事情啦，虽然没有听的太清楚」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员你有想过……其实我不算是什么很厉害的%UMA%之类的吗？」
    - acc: 1
      content: 「完全没有」
    - acc: 2
      content: 「怎么可能呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是吗……」
    - 善信有点落下的耳朵在收到%YOU%的话之后，立刻又立了起来
    - 心情不好的问题，大概已经是解决了吧
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀～我还担心训练员你也那么想的话怎么办呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「结果只是我想多了啊～」
    - 仿佛是顺应耳朵反应出来的心情一样，语气也自然了起来
    - 原本有点绷紧的肌肉，也肉眼可见的放松下来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你，训练员，这样相信我」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本来我都做好准备重新开始了！什么的～」
    - 看着面前自然的笑脸，%YOU% 也跟着笑了起来
    - 毕竟发自内心的笑容是会传染的呢

#进入新秀年6月第一周
free_race:
  title: 要来自由赛吗？
  lines:
    - 平日的训练稍微枯燥了点，就连善信也有点无精打采的
    - 为了让善信散散心，两个人一起来到街上随便走走
    - 路过的%UMA%「那边有自由赛哦！」
    - 路过的%UMA%「要开始了吗？我要去看！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自由赛？」
    - acc: 1
      content: 「好像是由业余%UMA%组建的街头比赛，不过我也是听说的」
    - 听完 %YOU% 的解释，善信有些兴趣的往刚刚跑过去的%UMA%们看去
    - （如果闪耀系列赛还是会紧张的话，要不要去自由竞赛看看呢）
    - 稍作思考过后，两个人默契的选择了向刚才的方向跑过去
    - divider: true
      content: 自由竞赛 赛场
    - 场地能够和URA的竞马场对比……做不到的
    - 虽然只是一个小小的临时场地，周围的观众热情却完全不输重赏比赛
    - 两个人站在观众的位置看着选手入场，心情也随着周围的声音高涨起来
    - 还没出道的%UMA%，已经毕业的%UMA%，甚至还有带着伤退役的前辈，都在起点做着热身动作
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好热闹啊……」
    - 整个场地的安排虽然不正规，但没有任何一个人是在意这件事的
    - 观众们都在仔细的看着比赛本身，为每一个奔跑的%UMA%送上欢呼声
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果我的比赛也能让大家这样就好了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家为我加油什么的……」
    - 主持的%UMA%「那边的%UMA%！你好像也很想参加嘛！」
    - 突然间插进 %YOU% 和善信之间的是刚刚还在主持比赛的%UMA%，此时此刻正在指着有些不知所措的善信
    - 主持的%UMA%「我们自由赛是不会过问出身的，只要有名字就好哦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉！真的吗？！」
    - 善信的脸上浮出一阵平时的欢快笑容，有些兴趣的接过话
    - 对于拘谨于目白这个名字的善信来说，这应该是一次全新的体验吧
    - acc: 1
      content: 「那就去试试吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「了解！」
    - 收到鼓励的善信立刻握紧了拳头，跟着对方走下场
    - 只是在介绍自己的时候，稍微有点乌龙
    - 主持的%UMA%「那么，参赛的名字是！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （名字吗……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （如果用目白的名字，肯定会吸引太多人的目光，而且奶奶还会说些什么的……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （嗯，决定了！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「叫我 善信 就好了！」
    - 主持的%UMA%「嗯，好像有点耳熟？不过无所谓！」
    - 主持的%UMA%「欢迎善信选手加入！」
    - 比起在学校的时候，善信上场的动作要自然的多
    - 虽然是有点紧张的样子，但是保持了淡定的姿态
    - 观众「善信？好像是那个家族的？」
    - 观众「有什么关系嘛，这里又不在意这些！」
    - 观众席上没有人在意善信的身份，只有对新参赛者的期待
    - 似乎感受到了周围纯粹的期待，善信也一点点的把心思都放到了赛道上
    - 跑在业余的跑道上，身边的其他选手也不是特雷森的顶尖选手
    - 对着这样的环境，善信毫不保留的笑了起来
    - 目白家的事情，闪耀系列赛的事情，特雷森的事情，全部都抛之脑后
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然，奔跑的时候……超开心的！」
    - 领先于全场，毫无悬念的成为了比赛的第一名
    - 主持的%UMA%「一着是！今天的新人，善信！」
    - 观众「善信！善信！善信！」
    - acc: 1
      content: （果然你就应该是这样跑的嘛）
    - 是听见了 %YOU% 的心声呢，还是听见周围在高呼善信的名字呢
    - 善信站在终点，向着观众席比起了两根手指，自然的笑了起来

# 出道战
begin_race:
  title: 赛事开场
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然，出道的比赛就是会紧张啊」
    - 善信看着站在身边的 %YOU%，紧张的贴在墙边
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么办啊训练员，万一出道赛没有跑好的话……」
    - acc: 1
      content: 「没关系的，用善信你自己的方式来就好」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「用我自己的……嗯，我明白了」
    - 还在颤抖的身子已经逐渐停下，重新调整好了自己的身体状态
    - 摆正自己的呼吸之后，握紧了双手
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，用我自己的跑法……我明白了！」

# 出道战胜利
begin_race_win:
  title: 逃亡者的开幕！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「超级畅快啊，训练员！果然用我自己的跑法才是我的方式啊！」
    - 下场的时候，善信站在 %YOU% 的面前兴奋的一蹦一跳的，号码牌下的身体也同样一蹦一蹦的
    - 直到稍微冷静下来一点，才紧紧的抓着 %YOU% 的手，认真的说出声
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你训练员！没有训练员你的信任的话肯定做不到现在这样的！」
    - 看着现在兴奋的善信，%YOU% 也只是尴尬的挠了挠头，为现在正在开心的善信递过去一条毛巾
    - 相信%SEX%才是现在应该做的事情

#进入新秀年7月
mejiro:
  title: 名为目白的重压
  lines:
    - 目白家，几乎没有训练员能够忽略的名门
    - 自然对于现在和目白善信已经签约的 %YOU% 来说，也是一座大山
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，那个……其实你不必说一定要跟过来的」
    - 善信有点不安的行走在特雷森的步道上，时不时回头看向身边的 %YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且也不是要回去本家，只是去和大家打个招呼，没必要那么紧张的啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「麦昆和莱恩%THEY%肯定不会说训练员你有什么问题的，真的」
    - acc: 1
      content: 「不，紧张的不是我吧」
    - 轻而易举的戳穿了善信的话，两个人之间的交流突然就停了下来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……被发现啦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，确实是有点紧张啦」
    - 善信轻轻的用手指撩动两侧的头发，有些尴尬
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟麦昆和莱恩都是被大家寄予厚望的新星嘛，和%THEY%站在一起的时候总是感觉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同样是目白家的%UMA%，还是同一届……只有我稍微，有点太弱了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且我这样欢脱的%UMA%也没法跑出%THEY%那种优雅的感觉，稍微有点……」
    - 虽然没有说出来，但是善信想说的话已经和说出来没什么区别了
    - acc: 1
      content: 「目白的名字，真的很重要吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？」
    - acc: 1
      content: 「善信就是善信啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不，这我知道，但……」
    - 善信的脸上挂上了一阵低落，连带着耳朵也一点点趴了下来
    - acc: 1
      content: 「就算没有目白的名字，我也认为善信你不是弱小的%UMA%」
    - 虽然很缓慢，但善信的耳朵确实是悄悄的立了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢……总感觉又有信心了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「之前训练员你说过，适合我的跑法对吧？」
    - 善信有些唐突的岔开话题，但 %YOU% 很清楚这是什么意思
    - 暂时从这个话题里逃离吧
    - acc: 1
      content: 「是啊，那才是适合你的跑法」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那，做个约定吧，训练员」
    - 突然停下脚步，微风吹过脸庞带动了善信轻飘飘的头发
    - 被突然停止的动作打断，停在善信身前回过头
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「用这样的跑法去赢下比赛……作为训练员相信我的回报怎么样？」
    - acc: 1
      content: 「那我会一直期待那一天到来的，善信」
    - acc: 2
      content: 「那一天我一定会在你的身边的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过现在才刚刚出道呢，也不用那么急对吧，啊哈哈……」
    - 带着放松的笑声，善信小跑了起来
    - 越过 %YOU% 的位置，朝着校外跑去
    - 毕竟今天还有聚会呢，要加快脚步了

#进入经典年1月1周
new_year_1:
  title: 新年抱负
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「新年快乐，训练员！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「终于到了呢，新年～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊咧，太阳神呢？」
    - acc: 1
      content: 「%SEX%今天不会过来吧」
    - 善信的表情有点发愣，但很快又淡定了下来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的话，今天的新年会就只有我们俩了呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总感觉有点怪怪的呢，毕竟平时我们都是三个人一起吵吵闹闹的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，只要照平时那样子过就好了对吧？一年之计在于始～什么的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总之要来做点什么吗？要来一场年菜BBQ，还是给舞狮画睫毛什么的！」
    - acc: 1
      content: 「年菜BBQ！？」
    - acc: 2
      content: 「唉，我们这里有舞狮吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有啦～只是突然想到的东西啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么可能会把年菜拿去烤的嘛，啊哈哈」
    - 在 %YOU% 的惊讶中，善信很快又收回了自己的提案
    - 果然只有两个人在一起的话，善信就没法放开自己变成平时派对咖的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，对了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然说今天不用训练啦，但我还是想决定一下新年的目标呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「像是今年要跑的比赛之类的！嗯，今年的大活动有什么呢……」
    - 不知为何，善信的表情变得有点阴郁了起来，像是陷入了什么思考之中
    - 这个时候就该轮到作为训练员的 %YOU% 登场了
    - acc: 1
      content: 「那就是经典三冠了吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……经典三冠啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「超～级有压力的名字啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不过也是呢，我终于到了这个年度了啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「时间真是残酷呢，不管有没有才能，只要在同一年就会被绑在一起」
    - 原本有点放松的脸上浮出一点低落，就算只是看着也能感觉到压力
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本年度最强的选手，大概是莱恩吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目白家最受期待的速度之星……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要和%SEX%同台竞技什么都，就算只是玩笑我也不想去想象啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然我也很努力啦，但实力的差距还是有点……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「超不妙的现实啊！不过，我能做的事情也只有一个！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们逃跑吧，训练员！」
    - acc: 1
      content: 「逃跑？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，逃离现实！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有抱负是很好啦，但新年一开始就这样的话，我又会变回过去那个样子了吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有没有什么开心的事情……能让人感觉到解放感的事情呢～」
    - 把脸上低落的样子收起来，重新回到一开始的样子，认真的思考起来
    - 逃避现实的方法，感觉到解放感，开心的事情……
    - acc: 1
      key: select
      content: 「务农！」（速度+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「务农！没错，只能将这爆发出来的青春情感发泄到田地上了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么我们换好衣服就出发！全速出发！」
        - 虽然学校里有田地，但是善信的干劲还是让 %YOU% 有点没想到
        - 看着善信喊着不知在哪听见过的句子，换上运动服向着外面跑了出去
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊啊啊啊啊！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼，呼，怎么样训练员，这片景色！」
        - acc: 1
          content: 「好厉害，一下就全部做好了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这是我的特技之一，挖洞！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我从小就很擅长这个哦，要论耕田的速度我可是不会输的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么，这就开始逃避吧！热情冷却下来再见咯，训练员！」
        - acc: 1
          content: 「啊，善信！」
        - 汗流浃背的 %YOU% 试图拉住善信，但是已经展现过特级的善信没几秒就没了影
        - 新年的开始，是善信的令人意外的特技表演
    - acc: 2
      content: 「去商店大买特买！」（体力+100）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大买特买！好主意！我们现在就过去吧！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这个时期也差不多要开始降价促销了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「其实我早就有想要买的东西了呢，就去买下来释放压力吧！」
        - divider: true
          content: 商店街
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员你看，这件高尔夫球衫，超棒的吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「既然都来了，那买下这件之后一起去悠哉地打场高尔夫怎么样？这样也能散散步」
        - 沉迷进眼前的高尔夫用品，善信一时间忘记了即将到来的比赛，悠闲的享受了起来
    - acc: 3
      content: 「去咖啡厅喝点什么？」（技能点数+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「咖啡厅！也是呢，聊天和甜品肯定能让头脑充满电！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「走吧训练员！我也久违的想要喝那个了！」
        - divider: true
          content: 咖啡厅
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我看看，想这样把冰红茶和柠檬水调和在一起……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「完成！这就是我最爱的原创特饮！」
        - acc: 1
          content: 「你经常这样做吗」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯！不过在家的时候经常被说这样很没规矩啦，但我还是无法罢手」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过这个只是我个人喜欢的搭配啦，还有其他组合的，训练员想喝吗？」
        - acc: 1
          content: 「既然有这个机会，当然要！」（好感+10）
        - acc: 2
          content: 「可以要善信你手上那杯吗？」（爱慕+2）
        - 苏打水和牛奶，可乐和柠檬茶
        - 每个组合都意外的美味
        - 善信和 %YOU% 一起享受了各种特调饮料

#进入经典年3月1周
how:
  title: 三冠要怎么办啊！？
  lines:
    - 偶然一次遇见善信的时候，少见的没有带着开朗的笑脸，也没有和其他人打招呼
    - 直到低着头走路撞到了 %YOU% 的胸口才反应过来，像是吓到了一样抬起头下意识的道歉，这才看见撞到的人是谁
    - acc: 1
      content: 「发生什么事了？」
    - 听着没有指责之意的提问，善信又低下了头看着自己手指的小动作
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没什么事啦，那个……」
    - 低着头看着依旧在乱动的手指，但却被前方伸过来的手抓住了
    - 对比起自己正在发寒的手，抓住自己的那双手却是相当温暖
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （和训练员说的话……也没有关系吧？因为是，训练员嘛）
    - 停止手上的动作，抬起头看着自己的搭档
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是有关三冠的事情啦」
    - 松开了紧紧抓着的手，稍微思考了一下自己的措辞
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你看，距离三冠……皋月赏很近了吧？」
    - acc: 1
      content: 「确实很快了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以啊，你看三冠怎么说都是很重要的比赛对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然我也很在意！但是啊……我还是很担心啊，毕竟目白家会很看中这个的对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要是输掉了的话，会被说成是目白家的耻辱对吧？所以，正在犹豫要不要参加」
    - 虽然开口了，但是善信的声音越来越小，失去了平时自信的样子
    - acc: 1
      content: 「那善信你呢？你是怎么想的」
    - 善信的身体稍微抖了一下，看着 %YOU% 的眼睛也逐渐移开
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「像我这样子实力不济的赛%UMA%，就算参赛也没什么意义吧？也学习不到什么，这样想的话……」
    - acc: 1
      content: 「那就逃跑吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「逃跑……吗？」
    - 善信的表情转向了疑惑，但很快又笑了起来
    - acc: 1
      content: 「没错，逃跑，然后去寻找你的答案！」
    - 短暂的沉默之后，善信带着欢快的笑声擦掉了眼角的泪水
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说的是啊，果然先逃跑才适合我嘛！」
    - 善信似乎已经完全没有再因为三冠的事情而难受，只是重重的吸了口气，切换好了心情
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「答案，我找到了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个时候如果心情好的话，我就会参加的！」
    - 不管周围的其他人，精神的和 %YOU% 对上了眼神
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个时候你会陪我的吧，训练员？」
    - acc: 1
      key: select
      content: 「没错，我会一直看着你的」（好感+10）
    - acc: 2
      content: 「我会一直等着你的，善信」（爱慕+2）
    - 善信脸上的表情微微改变了一点，抬起的手臂在 %YOU% 的胸口轻敲了一下
    - 原先笑容里的阴郁感已经消失不见，只有属于%SEX%的，自信的笑脸

sats_sho:
  title: 迎向皋月赏！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么办啊训练员……头脑一热就一口气到这了，要是对不上目白家的名字的话要怎么办啊！」
    - 善信很是激动的样子，虽然正在说的话充满了不安
    - 看着外面的赛道，即使善信不说也能感觉到此刻%SEX%的身体正在微微颤抖
    - acc: 1
      content: 「害怕吗？」
    - acc: 2
      content: 「激动吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……也许是吧，不过已经决定好要上了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就一定不会退缩的，绝对」
    - 听见 %YOU% 的声音，善信颤抖的身体停了下来
    - 抬起手轻轻抓着 %YOU%，轻轻的深呼吸
    - 再抬起头的时候，已经换回了自信的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，谢谢」
    - 满是笑容的松开手，走出选手通道

# 皋月赏胜利
sats_sho_win:
  title: 总之先拿一冠！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的赢了耶，训练员！」
    - 休息室的空间里，因为胜利者的归来而吵闹起来
    - 欢快的声音在两个人的空间里响起，不见一点停息
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也多亏了训练员你呢」
    - acc: 1
      content: 「嗯？什么？」
    - 善信看着 %YOU% 的脸，心里有些复杂的情绪卡在喉咙里说不出口
    - 短暂的闭嘴之后，没有再继续沉默
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有训练员的话，我肯定不会站在这里吧」
    - 房间里热闹的声音消失了
    - acc: 1
      content: 「但这是你的胜利啊」
    - 善信的表情再次回到了一开始的笑容，紧紧抓住了 %YOU% 的手
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是我们两个人的胜利啊，训练员！」

# 皋月赏失败
sats_sho_lose:
  title: 输了也没关系！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「失败了呢……哈哈，果然我不是什么很厉害的赛%UMA%呢」
    - 靠着休息室的墙，眼神在看着 %YOU% 和看着地板之间循环
    - 汗水在脸上一点点流下，像是眼泪一样
    - acc: 1
      content: 「但是你努力了对吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是努力了，但是……」
    - acc: 1
      content: 「重要的是善信你自己努力过了，而且比赛不只有这一次啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是这样吗？」
    - 善信还在躲闪的眼神锁定在眼前的 %YOU% 身上，不再有一开始的悲伤
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但下次，我就能赢吗」
    - acc: 1
      content: 「那就以下一场比赛必须胜利作为目标吧」
    - 一开始难过的表情已经消失，取而代之的是坚毅的模样
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是啊，不是难过的时候了啊」
    - 站直身的善信吐了口气，擦去了脸上的汗水
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次也拜托你了，训练员！」

#进入经典年5月1日，同队目白莱恩且不在同一年时不会触发
sisters:
  title: %SISTERS%亦是对手
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦，日本德比快到了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今年的德比，说不定会很惊喜呢……」
    - 善信躺在办公室的沙发上，有点无聊的刷着手机
    - acc: 1
      content: 「惊喜？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟啊，今年可是有莱恩在哦」
    - 善信关闭手机，蹦跶着走到了 %YOU% 的身边
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然三冠的事情我没什么想法啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过莱恩%SEX%不一样哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%可是从一开始就在为了三冠路线努力的，德比的时候肯定会大放异彩的！」
    - 虽然声音十分明亮，但是却感觉少了一点什么
    - acc: 1
      content: 「那善信你呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？我？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「德比的话……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我去德比什么的，没关系吗」
    - 原本就没有多少的信心在善信的自言自语中一点点消散，有点失落的后退了两步
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……如果那个时候，有心情……自信的话」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就去和莱恩，试试看吧」

#进入经典年5月1日，皋月胜利，同队目白莱恩且不在同一年时不会触发
sisters_1crown:
  title: %SISTERS%亦是对手
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦，日本德比快到了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今年的德比，嗯～要不要试试看呢」
    - 善信躺在办公室的沙发上，一边刷着手机一边把视线向着一旁扫过去
    - acc: 1
      content: 「有心情了吗」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈……只是说说啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟啊，今年可是有莱恩在哦」
    - 善信关闭手机，蹦跶着走到了 %YOU% 的身边
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然三冠的事情什么的，我是没什么想法啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过莱恩%SEX%不一样哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%可是从一开始就在为了三冠路线努力的，德比的时候肯定会大放异彩的！」
    - 虽然声音十分明亮，但是却感觉少了一点什么
    - acc: 1
      content: 「那你不准备去吗」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？我？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行不行，虽然皋月的时候随着感觉上了，但是德比就」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我去德比什么的，还是有点……」
    - 原本就没有多少的信心在善信的自言自语中一点点消散，有点失落的后退了两步
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……如果那个时候，有心情……自信的话」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就去试试看吧……经典路线什么的」

toky_yus:
  title: 迎向日本德比！
  lines:
    - 日本德比，三冠的第二站
    - 对于能够参赛的任何%UMA%来说，都是一场无法忽视的盛会
    - 自然，现在在这里的善信也是一样的
    - 承载着身后的目光，一扫之前对这场比赛的恐惧，光明正大的站在场上看着前方
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「仅此一次的参赛机会……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「心情澎湃啊，训练员！马上就要出场了！」
    - 身体不再像之前那样因为不安而颤抖，而是因为激动的心情而兴奋
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「安心吧训练员，现在的%SELF_CALL%啊，肯定不会输的！」
    - acc: 1
      content: 「那我就等着好消息了」
    - acc: 2
      content: 「嗯，我相信善信」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯！我会用我自己的方式，一口气把胜利紧握的！」
    - if: d.sats_sho === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「皋月赏也成功了，德比肯定也没问题……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「全力逃跑啊，我！」
        - 背对着 %YOU%，猛的抬起头，带着自信的表情走向赛场

# 日本德比胜利
toky_yus_win:
  title: 幸运的逃跑者
  lines:
    - 一直以来，传闻日本德比会由最幸运的赛%UMA%夺得桂冠
    - 而今天，目白善信就是最幸运的
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「赢啦！果然自信的时候，就会变得幸运起来啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SELF_CALL%的努力，全都实现了啊……」
    - 看着自己颤抖的双手，善信有些不相信的抬起头看着眼前同样心情澎湃的 %YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的超开心的啊！自信的跑完比赛的感觉」
    - acc: 1
      content: 「没错，这就是善信你的实力啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是这样吗？嘿嘿……谢谢！」
    - 抬起激动的双手，轻轻与训练员的手掌拍在一起

# 日本德比失败
toky_yus_lose:
  title: 运气稍微……
  lines:
    - 一直以来，传闻日本德比会由最幸运的赛%UMA%夺得桂冠
    - 换句话说，今天的善信并没有那么幸运
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈……%SELF_CALL%今天的运气不是很好呢」
    - 垂头丧气的回到休息室，看着自己
    - acc: 1
      content: 「善信，没关系的」
    - 听见 %YOU% 的声音，善信轻轻向着声音的来源转过去
    - 随着视线一点点往前，直到看见前方的另一个人
    - 伸出手抓着 %YOU% 的手，传来了冰冷的触感
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我明白的，所以……至少让我先这样，休息一下」

hako_kin:
  title: 前往函馆纪念！
  lines:
    - 站在函馆赛场的休息室里，等着目白善信
    - 不知为何今天的善信来的特别晚，来到了休息室也有些扭扭捏捏的样子
    - acc: 1
      content: 「善信？」
    - 听见 %YOU% 的声音，善信有点不自然的坐下，视线也左右乱飘着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，怎么说呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「函馆这边的话，我还是很熟悉的，就是那个……」
    - 眼神在空中飘动了半天，但始终没有落在 %YOU% 的身上
    - if: era.get('love:64') < 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是，比赛结束之后，训练员你要和我一起去玩吗？」
    - if: era.get('love:64') >= 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「结束之后，能和我约会吗？」
    - 善信的眼神偷偷的往一旁飘动，想要偷看 %YOU% 的反应
    - 看着这样的善信，%YOU% 只是为没有异样的%SEX%松了口气
    - acc: 1
      content: 「当然可以」
    - 听见答复的善信脸上挂上了笑容，自然地推开了门
    - if: era.get('love:64') < 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我很期待哦！」
    - if: era.get('love:64') >= 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我会全力回应你的，训练员！」

# 函馆纪念胜利
hako_kin_win:
  title: 观光准备
  lines:
    - 胜利归来的善信看着早就已经在门口等着的 %YOU% 差点没忍住一把拥抱上去，不过还是介意自己刚刚结束比赛的一身汗水
    - 站稳脚步之后，对着已经等在这里的 %YOU% 比起了胜利的手势
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「久等了！%SELF_CALL%帅气的奔跑，看见了吗？」
    - acc: 1
      content: 「嗯，很帅哦！」
    - 听着搭档的赞美，善信的笑容更是灿烂
    - if: era.get('love:64') < 50
      lines:
        - 踏着欢快的脚步像跳舞一样绕过 %YOU%，走进了休息室
        - 从没关好的门里探出头，稍微顿了一下，似乎思考着什么
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「等到胜者舞台结束，就一起走吧？」
    - if: era.get('love:64') >= 50
      lines:
        - 踏着欢快的脚步像跳舞一样靠近到 %YOU% 的身前，拉起了手
        - 维持着双腿合并的站姿稍微顿了一下，脸上似乎浮上了一阵高温
        - 往后退了一步拉开距离，溜进了休息室，用一个看不见脸的姿势朝着 %YOU% 开口了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不是已经约好了，等会要一起……在这边走走嘛」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「胜者舞台之后，我们一起走吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「至少回去之前……要陪我哦」

#函馆纪念赛前赛后均触发之后，同回合任意外出触发
hometown:
  title: 故乡时光
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总感觉，好像很久都没有回来了啊」
    - 胜者舞台结束之后，善信欢快的拉着 %YOU% 漫步在街道上
    - 可惜的是时间有些晚了，有些店面已经关门了
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不妙，果然等到胜者结束还是有点晚了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱歉啊训练员！果然应该其他时候来的……」
    - 刚刚胜利的喜悦被有点阴暗的街道稍微冲散，耳朵也尴尬的拉了下来
    - acc: 1
      content: 「我不介意哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的？」
    - 拉下来的耳朵猛然弹起来，眼神也带上了一阵闪光
    - 虽然周围已经暗了下来，但善信淡蓝色的瞳孔显得格外明亮
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的话……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，应该还有吧！」
    - 善信在 %YOU% 的面前自言自语了两句之后，拿起了手机
    - 小跑两步拉开距离，轻飘飘的对着话筒小声说了几句
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯嗯！拜托了！」
    - 似乎已经结束了通话，善信一蹦一跳的又走到了 %YOU% 的身边
    - 双手捉住了 %YOU%，向着一个方向直直的走去
    - 被拉着慢跑了几分钟，出现在两个人眼前的是一间普普通通的小店，在一片黯淡里显得有些奇怪
    - 不过在善信推开门的时候，就已经说明了全部
    - 店里只有一位友善的大叔在这里，端出了早就准备好的小吃
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「3Q啦大叔！果然还是和以前一样嘛！」
    - 善信把 %YOU% 推上座位，自己也自然的在一旁坐下
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前我很喜欢来这里哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「家里虽然很好啦，但……要怎么说呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前在这里的时候啊，总有一种格格不入的感觉呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我还挺喜欢找这些小店的哦」
    - 善信带着明亮的笑脸，没有一点阴郁的感觉，和刚才说的话仿佛完全不相干
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是！那已经是过去的事情啦！」
    - acc: 1
      content: 「你现在已经没有那种感觉了吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……已经没有」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，其实还有一点啦」
    - 善信吃下嘴里的萝卜，笑着回应了 %YOU% 的话
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，我已经决定了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我不止要跑出自己的跑法……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还有属于我的活法！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，这样说是不是有点怪怪的？」
    - 带着一幅有点害羞的表情，再咬下一口热热白萝卜

summer_start_1:
  title: 夏季合宿（经典年）开始
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼呀～！我的暑假到啦！！」
    - 暑假——也就是夏季合宿
    - 对赛%UMA%来说，这是用来强化实力的重要活动，然而——
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%65_CALL%！这个夏天就跟我大玩特玩，然后从现在开始寻找全新的自己～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没错！我的重启生涯，就拜托太阳神你啦！」
    - 对于善信来说，是重新开始的夏天
    - 蜕变成不再害怕失败，勇于冒险的全新%TEEN%
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「不过%65_CALL%，因为目白家的缘故，所以从小就必须要跑对吧？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「但真的就只有跑步吗？你应该还有跑步以外的梦想吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跑步以外的梦想啊～这么一说的话，嗯……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「即使是%UMA%，也有很多人没去比赛呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「老实说，我不知道」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，我可以从这部分开始重新开始吗？」
    - acc: 1
      content: 「当然」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「假如，我是说假如啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我想追寻比赛以外的梦想，也可以吗？」
    - 对于善信的提问，%YOU% 的回答自然也只有一个
    - acc: 1
      content: 「去做你想做的事情吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好，我明白了！我会在这个夏天做很多事情，去找到想做的事情的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「太阳神！也拜托你了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「让这个夏天变成超热闹的派对吧！」
    - 不仅仅是作为目白家的%UMA%，也作为目白善信去寻找

#跟随合宿时进入8月2周，同队有大拓太阳神时，太阳神/善信好感相互增加30
summer_middle_1:
  title: 夏季合宿（经典年）途中
  lines:
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「北海道露营！噢耶！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜呼！超嗨的！」
    - 三个人在夏季合宿的空档期里，造访了北海道，享受了一段时间充满户外活动的生活
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%65_CALL%你看！我感觉我要钓到大家伙了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，一定会的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「剩下的就是慢慢的等待，不要有额外的动作……」
    - 河流边，大拓太阳神拿着鱼竿紧紧的盯着水面
    - 善信就站在一旁，表情有点微妙的看着
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「FuFu～可爱的小鱼来啦～哦耶耶～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊～要是那么大声的话……」
    - 似乎是大拓太阳神的声音有些大，钓钩上的小鱼立刻就被吓跑了
    - 三个人一同看着眼前的空钩，表情显得十分失落
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「呜哇，被逃掉了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈……毕竟是钓鱼嘛」
    - 收好鱼竿，重新回到了营地
    - 一扫没有上钩的心情，重新对着面前的午饭燃起了热情
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「BBQ～BBQ～然后再来是——炒面Fu～！」
    - 炒面发出滋滋响声，香气四溢
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「好好吃～%65_CALL%，这里面放了什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「配菜里有韭菜和马铃薯之类的，调味料也是随便放的啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过味道挺不错的吧？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「该怎么说？纯朴好吃？家常感？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「三餐都吃这个也不会腻啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样啊，太好了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员你也吃吧，趁热哦」
    - acc: 1
      content: 「嗯！」
    - 善信做的铁板炒面是非常常见的口味，一点露营野炊的感觉都没有
    - 如果要形容，可能是平时 %YOU% 能吃到的口味吧
    - 也正因如此，这平凡的美味才能令人安心
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那我就喝喝看，太阳泡的咖啡味道如何！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯嗯！？这一颗一颗的是？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「珍珠咖啡～」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「现在热卖中哦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉，是珍珠吗！啊哈哈哈，太阳神你是天才嘛！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「该怎么说，我们的露营虽然乱七八糟的啦，但还是挺嗨的呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不妙，我可能会考虑一直这样生活下去哦！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「哦哦哦！不错嘛，%65_CALL%！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「那就干脆不跑了，直接做自然系的UMATUBE网红怎么样？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「标题就用……嗨起来，派对式露营！怎么样？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「就以爆红后登上黄金时段节目为目标之类的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「UMATUBE网红！感觉很棒呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这或许也很不错呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以北海道为舞台，拍趣味影片！说不定能拍很多企划呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员你觉得那种影片会火起来？」
    - acc: 1
      key: select
      content: 「农村……」（力量+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「农村！要用派对的方式建农村嘛？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然会很辛苦啦，不过这种应该也很不错呢！」
        - 虽然只是 %YOU% 没经过考虑就出了口的提案，却出乎意料的被当成了正经路线
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「噢耶噢耶！」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「把地从头到尾都耕一遍～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我的好亲友～差不多该吃午饭了吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天用刚抓到的鲑鱼，来开个鲑鱼派对吧！」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「……感觉这样的话手臂会啪的一下爆掉耶～」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「这样子就不是比快，而是比臂力了耶！～」
        - 只是听着大拓太阳神的讲述，%YOU% 就已经感觉自己的肌肉鼓动起来了
    - acc: 2
      content: 「耐寒比赛……」（根性+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦！耐寒比赛！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「比谁更能忍耐吗？这附近的冬天超冷的呢，而且还会下雪哦」
        - 在 %YOU% 嘴里钻出了异想天开的想法，但善信很明显是听进去了，眯着眼想象着冬天的样子
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「嗯——%65_CALL%，这会不会太冷啦？来点干劲吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜呜呜，干劲～根性～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不妙，感觉脑子里的雪兔正在过圣诞夜……」
        - 没过几秒，善信就睁开了眼睛
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「感，感觉会很艰苦……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过我对自己的意志力很有自信哦，我能忍！」
        - 虽然善信说的时候很自信，但 %YOU% 是意识到了的
        - 这里的冷和特雷森的时候完全不是一个等级，说不定真的能锻炼根性的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不过大自然真不可思议呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我还是小孩子的时候，只觉得空无一物的户外……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……结果根本不是这么回事嘛！只要想做，什么事都能做得到！」
    - 在大拓太阳神的注意力转去其他地方的时候，善信才独自看向面前的自然环境
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （没错，要在这里做什么，是由我来决定的）
    - divider: true
      content: 数日后
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈啊～已经早上了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （这一切都好快乐，不管是钓鱼，采集，做饭还是拍短片）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （我是自由的，做什么都可以！做什么都能生活下去！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （但，这样的话……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我——真正想要做的事情是什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （闭上……眼睛……问问我自己……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （我想做什么？我真正的想法是什么？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （内心的声音，从根源传来的呐喊……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （如果我是自由的，那，我要做什么……？）
    - 沉在自己的思绪里，聆听着自己的内心
    - 在黑暗中，逐渐传出了一丝熟悉的声音
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这声音是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——风？」
    - 善信的耳朵灵巧的跳动了几下，感受着风的声音
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就和风一样！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （风好舒服！空气洗净了肺部，日出的阳光也……拂过肌肤……！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （不需要思考对手和终点，只要这样子跑下去就好！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「随心所欲的跑下去！喝啊啊啊啊啊啊啊！」
    - 在睡眼朦胧的 %YOU% 眼里，是日出下带着笑容奔跑的善信
    - 在朝霞中，%SEX%忘我的奔跑着，自然又朝气蓬勃，而且——十分美丽
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼，呼……训练员，我知道了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……我喜欢奔跑」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跑的快慢都无所谓，只要放空内心奔跑就好！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我刚才之所以在跑步，并不是有什么目的……而是看到眼前的景色，我的双腿，我的内心就自己动起来了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我一定——是喜欢奔跑的！」
    - acc: 1
      content: 「是这样啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，就是这样的！」
    - 善信和 %YOU% 对着彼此笑着，已经不需要多说什么
    - 已经找到了内心想法的善信，笑的无比自然
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，训练员，你能看到后面的羊蹄山吗？」
    - 听善信这一说，%YOU% 转头一看便看见了那座山
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 故乡的山
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前看到那座山，我就会有点害怕」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总感觉它再叫我好好的，认真跑」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……像是被压迫一样」
    - acc: 1
      content: 「那现在呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿，现在啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还是很怕！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不过，没有以前那样害怕了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为……虽然不是很厉害啦，但我今天跑出了毫无掩饰的，最真实的跑法」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天的我之所以跑，是因为我想要跑！」
    - 善信带着笑脸，故作开玩笑的样子

summer_end_1:
  title: 夏季合宿（经典年）结束
  lines:
    - 夏季合宿结束了，因为大拓太阳神的存在，善信的这个夏天可以说是过的十分充实
    - 在这段时间里，发现到自己真正想要的东西就是——想要跑步
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没错，我喜欢奔跑！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「从今往后，我都想要一直奔跑下去！」
    - 善信的脸上带着无比的自信，但却有点担忧感
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是啊训练员～只是这样就好了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看着%THEY%的样子，总感觉只是这样的话不太行呢～」
    - 顺着善信的视线，%YOU% 也有些疑惑的看过去
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「终于要到了……菊花赏」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「我最擅长的，长距离G1比赛……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「无论如何都要取得胜利！」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「然后，向着明年的天皇赏春……」
    - 麦昆站在海边，倚着护栏默默看着自己紧握的双手
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你看，麦昆的决心非比寻常不是吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在比较实力强弱之前，对比赛的想法就不一样了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……跟%SEX%相比，我就只是喜欢跑步而已」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，我还不太清楚……我是不是真的喜欢比赛这件事」
    - 随着善信一字一句的叙述，声音也逐渐小了下去
    - 轻轻的捂着自己的脸，有点担忧的看着 %YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样子，我还可以摆出一副，我们都一样～的表情去参赛吗……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……容易想的太多是我的坏习惯啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这好像超越我的思考能力了，唉唉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，抱歉」
    - acc: 1
      content: 「嗯？为什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总觉得很抱歉啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我只要注意到这些事情，就没法脱离出来了」
    - 因为自己没有像目白麦昆那样子的决心，也没有对比赛的执着
    - 这样子的自己，令善信失去了最开始的自信
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为我想要跑，所以去跑」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明只要这样就够了，可是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我或许是那种多愁善感的类型吧，抱歉」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是个麻烦的人什么的……」
    - 眼神有些低落，逐渐落到自己不安的手指上
    - 或许善信真的是那种多愁善感的类型吧
    - acc: 1
      content: 「我觉得多愁善感也没什么不好」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎呀，用不着这样宠我的啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都是因为你这样，我才会忍不住和你撒娇哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不过，既然都这样说了……那就先继续依赖你一阵子吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还有啊……」
    - 虽然脸上还有点失落感，身体却已经诚实的靠到了 %YOU% 的肩膀上
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在这段时间里，我会找到的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「找到我的道路！」
    - 原本落下的耳朵逐渐立起，眼神里也带上了精气神

kiku_sho:
  title: 迎向菊花赏
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「长距离的比赛，还是第一次……」
    - 善信坐在休息室里，看着自己微微发抖的双腿
    - 长距离G1比赛，也是三冠的终点，对于每一个%UMA%都是极其重要的
    - 对比此时此刻的善信，%YOU% 只是走到了身前伸出了手
    - acc: 1
      content: 「很紧张对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然紧张！但是啊，比起紧张更加多的是激动啊！」
    - 快速抬起头看着 %YOU%，激动的上下挥舞着小臂
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这场比赛的话，目白家的大家也会看着吧……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我会用我自己的方法，证明我超厉害的！」
    - 善信握紧双手，朝 %YOU% 的肩膀击出一拳
    - acc: 1
      content: 「明白，我会在观众席看着的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯！看好属于%SELF_CALL%的跑法吧！」

# 已取两冠
kiku_sho_2crown:
  title: 迎向菊花赏
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「菊花赏……不妙，心里的鼓动停不下来！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「长距离的比赛，还是第一次啊！」
    - 善信坐在休息室里，看着自己微微发抖的双腿
    - 长距离G1比赛，也是三冠的终点，对于每一个%UMA%都是极其重要的
    - 对比此时此刻的善信，%YOU% 只是走到了身前伸出了手
    - acc: 1
      content: 「很紧张对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然紧张！但是啊，比起紧张更加多的是激动啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一开始还有点害怕的三冠路线，现在就快拿下了啊！」
    - 快速抬起头看着 %YOU%，激动的上下挥舞着小臂
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这场比赛的话，目白家的大家也会看着吧……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我会用我自己的方法，证明我超厉害的！」
    - 善信握紧双手，朝 %YOU% 的肩膀击出一拳
    - acc: 1
      content: 「明白，我会在观众席看着的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯！看好属于%SELF_CALL%的跑法……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以及三冠达成的那一刻吧！」

kiku_sho_win:
  title: 逃跑者归来！
  lines:
    # 菊花赏胜利
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀呼！赢啦！」
    - 以自己的跑法成功获得第一的善信，并没有干脆的停下脚步
    - 一边奔跑，一边寻找着现在应该在观众席上熟悉的人
    - 顺着观众席的边缘跑过，直到选手通道前看见了搭档正在挥手的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！你看见了吗！」
    - 完全没有在意速度的样子，朝着 %YOU% 的方向冲刺了过来
    - acc: 1
      content: 「善信跑的很帅哦！」
    - acc: 2
      content: 「善信！先停一下！」
    - 大概是没听全，善信维持一开始的速度就这样撞了过来
    - 虽然有控制力道不至于撞飞 %YOU%，但还是猛朝后退了几步
    - 体温透过善信本就单薄的决胜服传过来，不知为何令人有些燥热
    - 刚刚结束比赛的汗味，在本人没有注意到的时候因为拥抱的缘故一点点飘进了鼻子
    - 说实话……就是有反应了
    - acc: 1
      content: 「善信，在这里有点……」
    - acc: 2
      content: 「善信，注意一下，注意一下！」
    - 似乎是注意到了周围的异常气氛，善信原先没有反应的脸上浮现了一点绯红色
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱歉抱歉，那个……是我有点过度反应了」
    - 松开了紧紧抱着 %YOU% 的手，有点尴尬的往后退了几步
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总之，我先去准备舞台了！」
    - if: era.get('love:64') >= 50
      lines:
        - 躲开所有人的视线躲进休息室，捂着自己仍在流汗的胸口
        - 明明决胜服的设计相当清爽，但是现在……为什么会如此燥热
        - 心脏跳动的感觉仿佛是还在赛场上一样，咚咚个不停
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「在做什么啊，我……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明明是……普通的拥抱……」

# 菊花赏失败
kiku_sho_lose:
  title: 一点悄悄话……
  lines:
    - 比赛结束，休息室里的气氛也安静的令人不快
    - 努力之后却迎来了失败，这样的现实
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 一言不发的善信坐在休息室里，低着头完全看不到脸
    - 等到了休息室的门打开，才有了动作
    - %YOU% 推开门走进来看着现在的善信，却难以找到说话的空间
    - 直到贴近身边的时候，善信才有了动作
    - 什么都没有说，只是站起来转过身，轻轻的把额头靠在 %YOU% 的肩膀上
    - acc: 1
      content: 「善信？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - 声音很轻，但是在这个空间里显得格外明显
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「很努力了啊，训练员，我真的很努力了啊，强化自己的长处什么的，跑出自己的风格之类的……我都努力了啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我也想，跑出不负目白家之名的成绩啊」
    - 声音虽然小，但是听的很清楚
    - 不过，现在就让善信这样哭一会，比较好

# 获得三冠称号后休息
triple_crown:
  title: 三冠达成！
  lines:
    - 皋月，德比，菊花
    - 经典年的三冠，全部入手
    - 善信和 %YOU% 并排站在办公室里，看着眼前的奖杯
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么说呢，总感觉有点不真实呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一开始还在想心情好了就参加什么的，结果变成了这样了不得的成绩啊」
    - 善信看着奖杯，有点飘飘然
    - acc: 1
      content: 「果然善信你很厉害啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？是吗？啊哈哈……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过这也多亏训练员你啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果没有训练员你一开始的信任，那我大概不会参加的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且……」
    - 声音有点停顿，眼神在奖杯和身旁来回切换
    - 在 %YOU% 看不见的角落里，手指正交错在一起
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，就是说我自己的跑法啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有训练员的话我应该会用其他的方法吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我一直都很感谢你哦」
    - 尾巴在不停的摇摆，末梢不知不觉中已经碰到了 %YOU% 的小腿
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我说啊，那个……训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么时候，就是，有空了的时候，和我一起回目白家……」
    - acc: 1
      content: 「有空的话，现在就可以」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉，现在吗？」
    - 善信猛的转头，表情有点愣
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在回去的话，奶奶一定会办超大的宴会的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟是三冠，肯定超级多人来的，搞不好会有好几天……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀……我不是很擅长那样的场景呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么时候有空了，就我们俩一起回去啦」
    - 善信轻轻的抬手摸着后脑，掩饰着心里的一点不安感
    - 脸上轻飘飘的笑容带着心虚的眼神，偷偷瞄向身旁
    - acc: 1
      content: 「只有我们吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，我们两个人」
    - 用力的点点头，随后往身边小跳一步
    - 手指扶着窗台朝向窗外，嘴里嘟囔着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「两个人一起去找奶奶，然后」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊咧，是不是有哪里不对劲……」

# 经典年有马纪念
classical_arim_kin:
  title: 迎向有马纪念
  lines:
    - 年末最后的盛会，有马纪念
    - 2,500m 的长距离比赛，也是关注度最高的一战
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然这个时候还是会紧张啊……嘿嘿」
    - 因为兴奋而颤抖的身体，因为兴奋而激动不已的心情
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最开始的时候还没有想过会来到这里呢，有马纪念」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不在意目白的事情，相信自己的跑法」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这些全部都是训练员你告诉我的呢」
    - 穿上决胜服的外套，堂堂正正的挺起胸
    - acc: 1
      content: 「要上咯，善信」
    - 听着 %YOU% 的声音，善信面对赛场的方向握紧了拳头
    - 脸上勾起自信的笑容，向着身后比起了大拇指
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「交给我！哎嘿」

# 经典年有马胜利
# 习得技能「大逃」
c_arim_kin_win:
  title: 有马纪念的超级逃亡者！
  lines:
    - 即便是2500m的赛道也没有消耗完善信的体力，超过终点之后还在继续奔跑着
    - 迈着放松的步伐挥着手和观众席的人群打着招呼
    - 直到没力继续奔跑之后，才减速沿着观众席慢下来，停在了选手通道
    - 慢步走进休息室，靠在门板上看着自己正在发抖的身体
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的话，就不会被当成什么目白的累赘，而是目白善信了……」
    - acc: 1
      content: 「还在想这些事情吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜哇！训练员！你听见了！？」
    - 善信被 %YOU% 唐突的声音吓了一跳，摆着夸张的姿势往身后大跳一步
    - 有些夸张的声音，像是要击破 %YOU% 的耳膜
    - 但善信很开心的样子，就无所谓了吧
    - acc: 1
      content: 「说实话……就算不是目白也无所谓的啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不是目白也无所谓什么的我自己也知道啦，不过偶尔还是会这样想的」
    - acc: 1
      content: 「你应该自信点，留下善信这个名字」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯嗯，我知道了！那么……」
    - 深吸一口气，换上了一幅更加符合善信自己的表情
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没错……是属于我的胜利啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天是是%SELF_CALL%的胜利！怎么样？」

# 经典年有马失败
c_arim_kin_lose:
  title: 稍显遗憾的逃亡表演
  lines:
    - 用自己的跑法赢下有马纪念，让场上的所有观众记住善信的名字
    - 不是目白家的目白善信，而是有马纪念的胜者，目白善信
    - 本来是这样想的，但现实并没有让善信就这样胜利
    - 看着一着的%UMA%开心的庆祝，心里还是无法就这样释怀
    - 视线从记分板上移开，转向观众席
    - 一直信任着自己的搭档一定会看着的吧
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - 视线的另一头，%YOU% 就站在观众席的最前方，和善信对上了眼神
    - 垂着头走过选手通道，推开休息室的门
    - 看见 %YOU% 的一瞬间，快步的靠了过来低着头贴在身前
    - 轻微的哭泣声在安静的休息室里响起，随着善信的泪水一起
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然不行呢，我想要赢下有马纪念什么的……明明说的时候是那个样子……」
    - acc: 1
      content: 「善信……」
    - 听见 %YOU% 的声音，哭泣的声音停止了
    - 抓着 %YOU% 的手更加用力，完全不愿松开
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就这样让我在这里……逃跑一会吧……」

#进入资深年1月1周
new_year_2:
  title: 新年参拜
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「新年快乐～训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「新年参拜！立刻去参拜超神的神明，大方的和它说新年一起嗨起来吧！」
    - acc: 1
      content: 「不知不觉间已经很习惯辣妹语了呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然！毕竟距离我和太阳在一起的时间也那么长了嘛」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且今年起我就是资深级的赛%UMA%了，也是时候在众多的观众面前展现排队风格的魅力了！」
    - 至今为止的善信一直都在努力，也累计下来了不少的成绩和经验，而且还看见了哪位小栗帽全力奔跑的姿态……
    - 各种各样的的经历将会化作%SEX%成长的力量，变成今年大展身手的因子吧
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊对了，训练员，我突然想到～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果要许愿辣妹风格的愿望的话，比起一般的神明还是去拜专门的神明大人比较好吧？」
    - acc: 1
      content: 「唉，真的会有吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没错，这个世界上有很多，感觉就像辣妹之神，派对之神一样的赛%UMA%哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可以试着去参拜%THEY%吧？现在就去试试看怎么样？」
    - acc: 1
      content: 「原来如此……说不定很有意思」
    - 比起在神社参拜传统的神明，或许去找%THEY%能赋予我们现代风格的力量
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那我们就去找%THEY%看看吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不过话是这么说，这样的神也有很多种呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「像是很会玩的啦，长的很美的啦……要去参拜谁呢？」
    - 作为目标的神明大人不止一位，这个时候……
    - acc: 1
      key: select
      content: 「大拓太阳神的女神」（体力+200）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「太阳的女神啊……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，对了，之前听%SEX%说，%SEX%有认知一位宛如天神般闪耀的赛%UMA%呢！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「前阵子被%SEX%冷待对待之后，还在大喊『大小姐好冷淡～！』呢，我还记得%SEX%的名字……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好像是，大日如来？来着？总之我们先去参拜一下吧」
        # CFLAGNAME:66 = 招募状态
        - if: era.get('cflag:85:66') === 0
          content: 大日如来……这个名字完全就像是神明一样的感觉，会是什么样子呢
        - if: era.get('cflag:85:66') === 1
          content: 大日如来……这个名字完全就像是神明一样的……
        - if: era.get('cflag:85:66') === 1
          content: 这个发音，有点熟悉的感觉？
        - divider: true
          content: 商场
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，找到了找到了！难不成是那个人？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜哇，什么嘛，一点都不像是如来嘛！超可爱！像个洋娃娃一样！」
        - if: era.get('cflag:85:66') === 0
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「去跟%SEX%说说话……不，还是算了」
        - if: era.get('cflag:85:66') === 1
          lines:
            - acc: 1
              content: 「其实……我认识%SEX%来着」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「唉？那不就正好吗！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「那就去跟%SEX%说说话……不，还是算了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SEX%简直是可爱到爆表嘛！还是就这样看着就好啦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜哇～那孩子真可爱」
        - if: era.get('cflag:85:66') === 1
          acc: 1
          content: 「可爱的话，确实」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「感觉光是看着%SEX%，心里就受到治愈了～」
        - if: era.get('cflag:85:66') === 0
          content: 善信和 %YOU% 远远的站在一旁看着，感觉被那份可爱治愈了内心
        - if: era.get('cflag:85:66') === 1
          content: 善信和 %YOU% 远远的站在一旁看着，只是 %YOU% 的心里浮上了一点说不出来的微妙感
    - acc: 2
      content: 「派对之神的始祖！」（全属性+8）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「派对的神明大人……对了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好像很久以前就有所谓的派对咖了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「其中算得上的始祖的就是……」
        - divider: true
          content: 舞厅
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「嗨，小善信～」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「来一起跳舞吧，哼，哼～」
        - divider: true
          content: %MARU%，深爱昭和怀旧风格和泡沫时期文化的赛%UMA%
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「嗯哼，你们想要从我这里get什么事情呢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「丸善姐，我想请你教我元祖的辣妹语」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「元祖辣妹语？让我想想……」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「无层次直发，紧身衣，湘南lover！」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「go～go～咻～咻～闪亮亮！」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「电玩中心付账，开襟衫当披肩！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哇哦，虽然搞不懂意思，但真是气势十足」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「原来这就是元祖辣妹语……！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员，我好像也情绪高涨了！」
        - 拜见丸善斯基这位泡沫世代的神明之后，善信的情绪也欢快了起来
        - 虽然 %YOU% 并没有听明白……
    - acc: 3
      content: 「台球的神？」（技能点数+35）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「台球之神……对哦，冷酷帅气系的也有啊！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我们就去有台球场的地方到处看看吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「出发～」
        - divider: true
          content: 台球厅
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「吼～想请教我台球的人，就是你吗？善信」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是，是的！这，这又是另一种类的辣妹风格呢……」
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「所谓的台球，简单了说就是伺机而动」
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「先让对方随便打，最后再由自己将球打进球袋，不过……」
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「我不喜欢那样」
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「你也喜欢那种不断攻击，不让对方有机会出手的风格吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉？所以是怎样？我只要照着做就好了吗？」
        - 不可一世的台球高手，天狼星象征
        - 善信从这位台球之神的身上，学到了各种各样的技巧……真的吗？

# 日经新春杯
nikk_hai:
  title: 转换心情！
  lines:
    - 新的一年，新的心情！
    - 不管去年的状态是怎么样，也不管今年会变成什么样，总之先进入属于自己的节奏！
    - 这样想着的善信，毫无迷茫的走上了赛道
    - 贴在观众席的最前方，看着浑身上下充满元气的善信
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哟！今天的比赛也要嗨起来哦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果只是一场普普通通的比赛肯定会无聊的吧？所以就由%SELF_CALL%来让今天的比赛变成超～大的派对！」
    - 观众席上的粉丝对着善信的发言稍微愣了一下，但是很快就有了反应
    - 虽然一开始只是被当成目白家的吊车尾，但现在也是有名的赛%UMA%了
    - 藏在热情的粉丝中间，对着台上热情的善信悄悄的送上了应援
    - acc: 1
      content: （……不过，善信的决胜服在这个角度的时候能看到整个小腹啊）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「各位！请看好了！我的全力逃跑！」
    - 善信在台上保持着单纯的样子，欢快的和场下的粉丝互动着
    - 毕竟是善信呢，超擅长读懂周围气氛的
    - ……希望不会读懂下半身的气氛
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……训练员！你也要看着哦！」
        - 不知为何，善信的突然对着藏在观众席中间的 %YOU% 喊了一句话
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天的%SELF_CALL%可是状态绝佳！」
        - 虽然说只是很普通的说法，但不知为何那个眼神里有其他的东西
        - acc: 1
          content: （肯定被发现了吧……）
        - 大概是读懂了 %YOU% 的眼神，不过只是在其他人没有在意的时候稍微对着 %YOU% 摆了摆手
        - ……应该没有其他意思吧

# 日经新春杯胜利
nikk_hai_win:
  title: 全新的每一天！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爽快多了！果然嗨起来才是我的风格！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不去读气氛，不去在意其他的事情，只是跑起来就好！」
    - 不在意周围的目光，用自己的跑法结束比赛
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么样训练员？今天很帅气吧！」
    - acc: 1
      content: 「那还用说！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然？嘿嘿！」
    - 善信有点不好意思的刮着不知为何发红的脸，有些飘飘然的在休息室里转着圈
    - if: era.get('love:64') >= 50
      lines:
        - 汗水在淡黄色的内衬边上流动，勾勒出曼妙的曲线
        - 善信的身材本身就很好，特别是在%SEX%这身可以算是暴露的决胜服衬托之下
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「怎么了训练员？表情很奇怪哦？」
        - 在 %YOU% 的面前挥了挥手，似乎没有察觉到视线的方向
        - acc: 1
          content: 「……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，训练员？」
        - 随着善信的声音在耳边再次响起，意识才从眼前汗淋淋的小腹上回到身体里
        - 只是抬起来的视线并没有看见善信平静的脸，而是看见了善信有些玩味的表情
        - 脸贴着脸，呼吸在脸上轻轻拂过
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么喜欢的话……可以再多看看哦」

# 天春
tenn_spr:
  title: 不只是目白！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇赏了啊……」
    - 天皇赏春对于目白家的意义不仅是一场G1，这件事两个人都很清楚
    - 但是对于现在的善信来说，并没有那一层意义
    - 两个人背靠在选手通道的墙壁上，肩膀贴着肩膀
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我说啊训练员，这个赛道真的能够全程领跑吗？」
    - 善信的意思是在疑惑，不过脸上的表情可没有一点不安
    - 带着自信的表情看着 %YOU%，耳朵一抖一抖的等着回应
    - acc: 1
      content: 「当然，我相信你！」
    - acc: 2
      content: 「你也很清楚能做到的，对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「收到了！就让%SELF_CALL%一口气冲到底吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「用和目白不相称的，属于我的跑法！让大家都嗨起来！」
    - 高高抬起手，对着 %YOU% 喊了出来
    - 转过身，离开选手通道走向赛场

# 天春胜利
tenn_spr_win:
  title: 是领放的胜利！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜呼！超级爽快！超级开心的！」
    - 善信完全没有在意场上其他人的眼神和声音，朝着此时此刻站在选手通道等着的 %YOU% 一路跑过来
    - 原本兴奋的想着庆祝的表情，慢慢的转向了其他的表情
    - 这个样子，似乎曾经见过
    - acc: 1
      content: 「善信！？」
    - 完全没有减速，目标明确的朝着 %YOU% 飞扑了过来
    - 勉强站稳，才有空闲把视线移向身旁大汗淋漓的善信
    - 甘甜的汗味冲进鼻腔，催动着高度跳动的心脏
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！天皇赏春我赢下来了！」
    - acc: 1
      content: 「喂喂！善信！」
    - %YOU% 的声音很大，但善信就像没听见一样，依旧静静地抱着
    - 紧紧拥抱的双臂直到 %YOU% 的呼吸声已经开始被压住了，才后知后觉的松开
    - 虽然是因此而松开，但是脸上不见一点意外的感觉
    - 要说的话，就是故意的
    - ……不过既然是赢了，其实让%SEX%再抱一会也无妨吧
    - if: era.get('love:64') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我说啊，训练员！」
        - 善信的声音完全没有在意刚才的事情
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要不要和我回目白家……试试看？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「现在的话……就是以目白善信的搭档的身份了哦」
        - acc: 1
          key: select
          content: 「现在的话……？」
        - acc: 2
          content: 「那……我等你！」（好感+10）
        - 刚刚还用力抱着 %YOU% 的双手，现在有点羞涩的收在背后
        - 善信红着脸，弯腰贴近
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那，我就先去胜者舞台了……%YOURNAME%你要在这里等着哦！」
        - 虽然没有直接对上视线，但是能够看见微红的脸上是清澈的笑脸

# 天春失败
tenn_spr_lose:
  title: 不是主角也无所谓！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，输掉了！」
    - 善信带着满身的汗水，脚步轻盈的走进了休息室
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯——啊，果然这样还是有点难的啊！」
    - 用力伸了个懒腰，顺着力坐到了椅子上
    - 脱下决胜服的外套，轻轻往脸上扇着风
    - acc: 1
      content: 递水
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「谢谢！来得正好！」
        - 善信自然的接过水杯，一口气灌下一大口，甚至还有水珠在嘴角跑了出来
        - 紧绷的身体一口气放开，似乎冒出了一阵蒸汽
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「很久没有跑的那么开心了啊……不过好热」
        - 双手轻轻撑在椅子上支起上半身，往上方吐着气
        - 汗水沿着发丝低落在淡黄的内衬上，冒出一丝蒸汽
        - 将这样的善信尽收眼底之后，脑子里浮现出的第一个想法
        - 今天真的是很热啊，各方各面都是
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过呢，没有什么负担呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员相信我，而且输的时候也是用我自己的的方式输的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然难过啦，但并没有不爽什么的……这也多亏了训练员你呢！」
        - 善信的笑容很轻松，就和%SEX%所说的话完全一样
    - if: era.get('love:64') >= 90
      acc: 2
      content: 坐在善信身边
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「很久没有跑的那么开心了啊……不过好热」
        - 双手轻轻撑在椅子上支起上半身，往上方吐着气
        - 汗水沿着发丝低落在淡黄的内衬上，冒出一丝蒸汽
        - 今天真的是很热啊，各方各面都是
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过呢，没有什么负担呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员相信我，而且输的时候也是用我自己的的方式输的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然难过啦，但并没有不爽什么的……这也多亏了训练员你呢！」
        - 善信的笑容很轻松，就和%SEX%所说的话完全一样
        - 清脆的笑声之后是一阵微妙的沉默，善信也悄悄收回了身后的双手
        - 顺着长凳一点点往一旁移过去，贴在 %YOU% 的大腿上
        - acc: 1
          content: 「善信？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「有点渴了，嘴里很干呢」
        - 手指顺着爬上腿，轻轻捏了两下
        - 不知是因为温度还是害羞而红透的脸慢慢贴近，干燥的嘴唇缓缓张开
        - acc: 1
          content: 「可以哦」
        - 善信的耳朵轻轻的抖了一下，闭上了双眼
        - 轻轻的贴上嘴唇，舌头跨越牙齿的防线索取温热的唾液
        - 柔软却又强硬，不由分说的入侵，仿佛是在寻找本就属于自己的东西
        - 灵巧的舌头夺取了 %YOU% 口中的水分，拉出一根莹白的丝线
        - 离开对方的舌头舔干净了嘴唇边上残留的水分，轻轻喘着气
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「多谢款待……」
        - 放在大腿上的手收了回来，顺着 %YOU% 的脸摸过一下
        - 站起身把双手背在身后，藏起此刻已经停不下来的心动
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「晚点和我一起回去目白家……可以吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「说不定，剩下的部分也可以哦？」

# 资深年宝冢
takz_kin:
  title: 总之先相信！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「相信自己的跑法，相信自己的能力……我明白的！」
    - 善信站在闸门前，握紧成拳的手放在胸口
    - 轻闭的双眼睁开，看向眼前的赛道
    - acc: 1
      content: 「善信！加油！」
    - %YOU% 的声音从观众席传进善信的耳朵里
    - 善信的耳朵小幅度的抖了抖，才转向观众席
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……嗯，我听见了哦！」
    - 想着自己的声音或许传不过去，只是高高举起了握拳的手
    - 向着那一边的搭档，比起了胜利的手势

# 宝冢胜利
takz_kin_win:
  title: 虽然有点难过但无所谓！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「耶！我赢了！」
    - 元气的声音在胜利的时刻响起，伴随声音的是顺势跑过来的善信
    - 向着观众席上为自己欢呼的观众用力挥着手，直到没力才放下来
    - 周围的声音结束之后，善信才回到了休息室里
    - 对比刚才的善信，现在只是一言不发的关上了门
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个啊，训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「能摸摸我吗？」
    - 善信的表情还有胜利的余韵，只是眼神中浮出了一点喜悦之外的情感
    - acc: 1
      content: 「发生什么事了？」
    - acc: 2
      content: 摸摸善信的头
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……谢谢你，训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刚才的观众席……目白家的大家都不在啊」
    - 看着善信在 %YOU% 的怀里心情有些波动的样子，没忍住抬起手轻轻的抚摸起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不过，是训练员你的话让我放下心的哦」
    - 尾巴压不住的左右乱晃，脚尖也有些不安的敲打着地面
    - acc: 1
      content: 「大家一定都在看着你的比赛」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我也是这样想的啦，只是稍微有点难过而已」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我明白的哦，不过……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「算啦！想那么多超累的啦！」
    - 大声打断了自己的思绪，站直了身
    - acc: 1
      content: 「你不是已经很明白了吗」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，已经无所谓了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，重点是我已经做到了啊！」

summer_start_2:
  title: 夏季合宿（资深年）开始
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀呼～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「夏天！海边！派对的季节到啦！～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说起来，去年我们也是这样大闹了一番呢～」
    - 善信刚刚从大巴车上下来，就已经压不住心里的兴奋感喊了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 和大拓太阳神的组合为了即将到来的天皇赏秋，决定在这次合宿做足准备
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，天皇赏秋啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「麦昆肯定会参加的，还有……」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「是哦！不过今年会更加，更加～热血的吧！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「毕竟为了天皇赏秋，大家都干劲十足耶！」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「今年似乎会有很多厉害的%UMA%齐聚一堂呢」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「啊，这不是生野嘛！你好嘛～有干劲嘛～还是老样子带着眼镜呢～」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「是的，我基本上全天都带着眼镜，除了睡觉以外」
    - 突然插进对话中的生野狄杜斯完全没有突兀，很自然的加入其中
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「生野，关于今年的天皇赏秋……你知道什么吗？」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「是的，我知道一些情报」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「首先是内恰说要参加，同时我也会参加」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「啊～内恰和生野！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「根本就是自家人的万圣节派对嘛！」
    - 暂时忽略了大拓太阳神打趣的动静，继续回到比赛这边
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「自然，麦昆同学也会参加，还有就是……」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「那个东海帝王，也会出场」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「东海帝王……麦昆的劲敌啊」
    - 目白麦昆，东海帝王……只要这两位明星登场，绝大部分的话题焦点都会被%THEY%俩抢走吧
    - 众星云集的天皇赏秋，却没有给善信的镜头，这说不定会影响%SEX%的发挥……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「帝王要参赛，麦昆也要参赛！这不是超棒的嘛！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不管是谁，全都一起来吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我！啊，是我们不会害怕的！没错吧，太阳神～」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「喔耶～完全不会害怕哦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不管来的是怎么样的对手……最闪闪发光的肯定是～」
    - %CHARA%&%HELIOS%「我们的友情！喔耶耶耶耶！～」
    - 面对本应充满压力的比赛，善信的脸上却没有一点紧张感
    - 过去的阴霾已经不再围绕在%SEX%的身边，此时此刻……
    - 只剩下嗨翻天的夏天在等着了！

# 爱慕＞74
summer_middle_2:
  title: 夏日的小小意外
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！能帮我提一下防晒油吗？」
    - 「可以是可以，但为什么不让太阳神%THEY%来帮你？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「太阳神%THEY%已经下去了啦，突然叫%THEY%回来也不太好」
    - color: %COLOR%
      content: 善信趴在垫子上，尾巴有些兴奋的左右扫动着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「再说了，%CALLNAME%也不是第一次这样接触我了吧？你看上次自由赛的时候也是%CALLNAME%你帮我擦汗的啊」
    - 「但那次可不是泳装啊，怎么能一样」
    - color: %COLOR%
      content: %CALLNAME%的声音里带着一点恼火，但在善信的耳朵里只是很平常的吐槽罢了
    - color: %COLOR%
      content: 毕竟善信很清楚自己的搭档为人是什么样的，不会有什么比较特殊的想法
    - color: %COLOR%
      content: 至少对于自己……大概吧
    - acc: 1
      content: 「嗯，背后差不多了，善信」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好嘞」
    - color: %COLOR%
      content: 从垫子上起身，刚刚翻过来却看见了%CALLNAME%转移视线的脸
    - color: %COLOR%
      content: 莫不成……这是害羞了吗？这样的情况倒是少见呢
    - color: %COLOR%
      content: 善信有点不怀好意的笑了笑，但很快就把心里的奇怪想法压了下去
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前面我自己来就好了，%CALLNAME%……%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （这个……难道？）
    - color: %COLOR%
      content: 看着 %CALLNAME% 一言不发的放下手里的防晒油转过身去，善信脸上浮出一点微红
    - color: %COLOR%
      content: 夏天的衣服可没有遮挡什么的能力，更何况现在 %CALLNAME% 身上只是一件衬衫呢
    - color: %COLOR%
      content: 一片红的耳朵只要稍微留意一点就能看见了
    - color: %COLOR%
      content: 是害羞了吧？这一定是害羞了吧？
    - color: %COLOR%
      content: 稍微有点想捉弄一下呢……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯哼？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要不训练员……前面的部分也交给你吧？」
    - color: %COLOR%
      content: 话已出口，后知后觉的发现说了什么不该说的话
    - color: %COLOR%
      content: 也就是说前面的部分可以让 %CALLNAME% 随便摸了
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （啊咧，是不是过了点）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME%……会接受吗？）
    - color: %COLOR%
      content: 心脏跳动的速度还在加快，感觉已经堪比比赛的时候……
    - color: %COLOR%
      content: 善信的脸从一开始有些玩味的笑脸变成了一片红的尴尬样，只能祈祷 %CALLNAME% 害羞的拒绝
    - color: %COLOR%
      content: 但一般情况下，祈祷什么就会反过来发生什么
    - acc: 1
      content: 「好，好吧……」
    - color: %COLOR%
      content: %CALLNAME% 的声音有些颤抖，但是防晒油已经准备好了
    - color: %COLOR%
      content: 转过身来的时候，四目相对
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果，果然还是我自己来好了！仔细一想我这边很怕痒……」
    - color: %COLOR%
      content: 善信的双眼转起了小小的螺旋，慌张的想要把 %CALLNAME% 手上的防晒油抢走
    - color: %COLOR%
      content: 不知道是海滩上的风大呢，还是善信的动作太大
    - color: %COLOR%
      content: 遮阳伞的下方稍微松动了一下，便朝着两个人的方向砸了下来
    - 「善信！」
    - color: %COLOR%
      content: %CALLNAME% 趴在善信的上方，用手肘勉强撑起来一点空间
    - color: %COLOR%
      content: 善信躺在下方，不知所措的把双手缩在胸前，看着 %CALLNAME% 同样有些红的脸
    - color: %COLOR%
      content: 遮阳伞很大，留出了一片相当大的空间，自然也没有砸到人
    - 「抱歉！我立刻起……」
    - color: %COLOR%
      content: 在 %CALLNAME% 想要起身的时候，善信眼疾手快捉住了他的手
    - color: %COLOR%
      content: 防晒油的瓶子落在一旁，被善信顺手拿了过来，倒在 %CALLNAME% 的手上
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……前面也可以交给你吗？」
    - color: %COLOR%
      content: 羞红着脸，说出了自己未曾设想过的话
    - color: %COLOR%
      content: 现在两个人都被遮阳伞盖在下方，外面的人不注意的话什么都看不见
    - color: %COLOR%
      content: 抓着 %CALLNAME% 的手，往自己的身上拉了一下
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「麻烦负起责任啊……让我心动的责任……」
    - color: %COLOR%
      content: 善信自言自语着，仿佛是在说服自己
    - color: %COLOR%
      content: %CALLNAME%好像什么都没有听见，只是战战兢兢的伸手在善信的身上轻轻的滑过
    - color: %COLOR%
      content: 清凉的防晒油和手掌的温热合在一起，在善信光滑的小腹上上下滑动
    - color: %COLOR%
      content: 脸上的绯红已经爬到了脖子根，但以往带动自己逃跑的双腿却没有一点力气
    - color: %COLOR%
      content: 想要逃跑，但是……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （训练员的话，不逃跑也可以吧）
    - 「善信，已经好了」
    - color: %COLOR%
      content: 收起手，从善信的眼前移开
    - color: %COLOR%
      content: 转过身伸手抓着遮阳伞，一点点抬了起来
    - color: %COLOR%
      content: 看着 %CALLNAME% 的背影，善信沉默着
    - color: %COLOR%
      content: 现在的话，谁都不会看见我们两个人
    - color: %COLOR%
      content: 现在的话，做什么都不会被发现的吧
    - color: %COLOR%
      content: 现在的话……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，%CALLNAME%」
    - color: %COLOR%
      content: %CALLNAME%放下手里的遮阳伞，转身看着善信
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这里……还没有」
    - color: %COLOR%
      content: 指着自己的胸口，红着脸
    - color: %COLOR%
      content: 不知道%YOURSEX%会怎么做呢
    - color: %COLOR%
      content: 或许……
    - acc: 1
      content: 「善信，这里是……」
    - color: %COLOR%
      content: 沾着防晒油的手在抖
    - color: %COLOR%
      content: 即使被抓着，被拉倒了善信的身前
    # CFLAGNAME:0 = 性别
    - if: era.get('cflag:64:0') !== 1 && era.get('cflag:0:0') === 1
      color: %COLOR%
      content: 都说男人是不会对女性的胸有意见的，但是……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果%CALLNAME%不喜欢的话……」
    - color: %COLOR%
      content: 悬停在半空颤抖的手掌直到善信自己挺起胸膛，才停下了抖动
    - color: %COLOR%
      content: 善信紧紧闭着双眼，紧张的身体在微微发抖
    - color: %COLOR%
      content: 温热的液体在胸脯上滑过，流进泳衣
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content: 善信紧闭的双眼缓缓睁开，看着 %CALLNAME% 有点不知所措的脸
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喜欢吗？」
    - color: %COLOR%
      content: 善信伸出纤细的手，轻轻的扶着 %CALLNAME% 的脸，朝自己的脸上拉过来
    - color: %COLOR%
      content: 嘴唇碰在一起，交换着两个人的温度
    - color: %COLOR%
      content: 舌头自然的钻过牙齿的屏障，交缠在一起
    - color: %COLOR%
      content: 直到呼吸已经无法支撑，这才不舍的带着舌尖拉出一丝唾沫的连线
    - acc: 1
      key: sex
      content: 「但是，现在还不行」 # 性欲+5%
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉……」
        - color: %COLOR%
          content: 仿佛发热的头脑被冷水淋下，冷却下来回归了正常的思考
        - color: %COLOR%
          content: 善信坐起身，有点慌张的看了一眼遮阳伞外的世界
        - color: %COLOR%
          content: ……没有人发现这里
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我一直不去的话，大家会起疑心的」
        - color: %COLOR%
          content: 善信轻轻抓住自己早就压不住激动的尾巴，装作无事发生的从阴影里站起来
        - color: %COLOR%
          content: 深呼吸一口，把手伸向%CALLNAME%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「回去之后……就和%CALLNAME%你一起……」
    - acc: 2
      content: 「我喜欢你，善信」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我也是，%YOURNAME%」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我喜欢%YOURNAME%……」
        - color: %COLOR%
          content: 放开抓住 %CALLNAME% 的双手，手指轻轻的拉开泳衣的系带
        - if: era.get('cflag:64:0') !== 1
          color: %COLOR%
          content: 小小的樱桃已经挺立，等待着
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「请吧……」
      # 马跳

summer_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊……这下坏了」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「大家一定发现我们不在了吧，不妙」
  - color: %COLOR%
    content: 轻轻地推开 %CALLNAME% 同样沾满汗水的身体，擦掉身上的痕迹
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那个，回去我们还能继续对吧」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不，不是你想的那个意思啦！只是……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「和%CALLNAME%在一起很开心，什么的」
  - color: %COLOR%
    content: 善信红着脸，有点报复意味的往 %CALLNAME% 身上又捏了一下

# 爱慕＞74，8月第四周开始
walk:
  title: 海边的散步时光
  lines:
    - 夏日合宿的末尾，没有留下多少训练任务，剩下了相当多的自由时间
    - 善信独自看着沙滩上的海浪，时不时朝身后的 %YOU% 偷瞄几眼
    - 下午的时间很快就过去，沙滩上已经看不见其他的%UMA%还在训练了
    - acc: 1
      content: 「好了，我们也该回去了……」
    - 正要离开的时候，善信轻轻地拉住了 %YOU% 的手
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个啊，训练员，能稍微……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……稍微一点就好，陪我在这里走走，可以吗？」
    - 善信的眼神看着其他方向，却时不时向 %YOU% 的方向看过来
    - acc: 1
      content: 「可以哦」
    - acc: 2
      content: 「但时间很晚了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯哼……我们好像很久没有这样散步了吧」
    - 善信的双手背在身后，小腿不安的轻敲着地板
    - 眼神在自己身上的泳衣和 %YOU% 的身上来回循环着，却唯独没有看向脸
    - 收起训练用具的 %YOU% 没有注意到不太安稳的小动作，动身走到了善信的身旁
    - 海滩上的夕阳照亮了两个人的侧脸，安静的漫步着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「平时在这里的时候，都是很多人在一起呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家一起训练，一起玩什么的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然玩的很开心啦，但是总觉得缺少了什么」
    - 善信缓步贴在 %YOU% 的身边，肩膀贴着肩膀
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「和训练员你单独在一起的时候，感觉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……感觉明白了，缺少的是什么」
    - acc: 1
      content: 「是什么？」
    - 听见了 %YOU% 的声音，善信不由自主的笑了起来
    - 对着身边毫无防备的侧腹，不用力的小小戳了一下
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是训练员你哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不是训练，不是大家在一起……只是我们两个」
    - 夕阳的金色余晖照在善信的脸上，遮住了满脸的绯红色
    - 安静的站在海滩边，感受着海浪冲上岸时没过脚踝的触感
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我说啊，训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以后都能一直陪我一起吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就像是以前你说的那样，一直看着我」
    - 善信背对着明亮的太阳，对着 %YOU% 灿烂的笑着

summer_end_2:
  title: 夏季合宿（资深年）结束
  lines:
    - 伴随即将结束的夏天，祭典开始了
    - 而热爱派对的各位%UMA%，自然也没有放过这个机会
    - %CHARA%&%HELIOS%「喔耶～首先是村子的祭典，然后是～」
    - 欢快的话音刚刚响起，天空就升上了几颗明亮的星星
    - 夜空中亮起了巨大的烟花，照亮了所有人望向天空的脸
    - %CHARA%&%HELIOS%「超嗨烟火，碰～啪！」
    - divider: true
      content: 次日
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好——！今天也一起跑吧，搭档！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「好啊，%65_CALL%！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「和喜欢的人一起跑，疲劳就等于零～」
    - %CHARA%&%HELIOS%「预备～出发！！」
    - 善信和大拓太阳神相亲相爱的一起奔跑着度过了剩下的时间，看起来非常开心
    - 直到合宿最后一点时间结束，两个人才停下来
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「啊啊～真的假的～合宿到今天就结束了嘛～？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「我们的夏天没了哇～～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同感～我还想多跑一点的说」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过呢，我一直想跟太阳神你朝着同样的目标奔跑，一起度过夏天」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「哦哦，一起往夕阳冲去之类的～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过啊～这之后不是有正式比赛吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在那边才更是嗨的不行！对吧？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「没错！天皇赏秋！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「两个人一起嗨翻天～喔耶喔耶～！」
    - 两个人一同高亢的欢呼着，唯独站在一旁看着的 %YOU% 有点尴尬，把视线移向同样在注视着%THEY%的另一个人
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「……」
    - acc: 1
      content: 「生野狄杜斯同学……？」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「……没什么，我只是有点在意，%THEY%刚边跑边说的……」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「——疲倦等于零理论」
    - acc: 1
      content: 「……居然是这件事？！」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「是啊，如果那理论是真的就没问题了……但这是不可能的」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「勉强自己的心或者身体，总有一天会影响到自己奔跑的」
    - acc: 1
      content: 「你在担心%THEY%吗」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「不是，%SEX%已经越跑越好了，我不觉得有什么担心的地方」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「没错……善信同学是不需要担心的」
    - 听着 %DICTUS% 确信的说法，%YOU% 也把视线再一次转向正在打闹中的善信和大拓太阳神

# 资深年天秋
tenn_sho:
  title: 就用属于我的跑法！
  lines:
    - 天皇赏秋当天，并没有很好运的碰上一个好天气
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜哇，这个地面，湿答答的耶」
    - 虽然说马场不至于到跑不了的水平，但是一大片的泥泞看着还是有点夸张
    - 如果就这样跑完这场比赛的话，说不定全身都会沾满吧
    - 但是%SEX%一定会去跑的，%YOU% 是这样相信的
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的话，跑完比赛之后一定很不妙吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是！没有关系！」
    - 善信握紧拳头，用力挥了挥
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是和太阳神约好了的比赛，我是不会害怕的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「无论什么样的场地，都不会影响我的跑法！」

#持有依存心时天秋
tenn_sho_yandere:
  title: 属于我的跑法和属于我的……
  lines:
    - color: %COLOR%
      content: 天皇赏秋的当天，%CHARA% 看着并不算是明朗的天空
    - color: %COLOR%
      content: 嗨起来的想法是真的，想要大拓太阳神一起在赛场上驰聘的心情也是真的
    - color: %COLOR%
      content: ……但是却少了什么
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗨不起来啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……不在吗？」
    - color: %COLOR%
      content: 站在赛场，却没有干劲
    - color: %COLOR%
      content: 身旁的好友们已经开始简单的放下狠话，走向闸门
    - color: %COLOR%
      content: 装作没有异常的样子，回应了前来问候的所有人之后走进了闸门，等待着开始比赛
    - color: %COLOR%
      content: 时间，在此刻缓慢了下来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……唉？」
    - color: %COLOR%
      content: 视线的角落里，是姗姗来迟的 %CALLNAME% 在为%SEX%加油的样子
    - color: %COLOR%
      content: 赛场的风带着 %CALLNAME% 加油助威的声音钻进了善信打起精神的耳朵里，点亮了%SEX%原本黯淡的眼神
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （是训练员）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （训练员一直……都看着我啊）
    - color: %COLOR%
      content: 周围的声音停了下来，所有的%UMA%都在等待着闸门打开的一瞬间
    - color: %COLOR%
      content: %CHARA% 也紧紧看着前方，重新握紧了双手
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （训练员%YOURSEX%……一直都在啊！）

# 天秋胜利
tenn_sho_win:
  title: 呀呼！全身泥泞也完全无所谓啦！
  lines:
    - 逃跑成功！全速通过！
    - 全身沾满了步伐冲击地面溅起的泥水，但是沾满了泥土的脸上却是欢乐的笑容
    - 只是因为赢了吗？不止于此
    - 这个时候得先把身上的污渍先擦干净，不然会很麻烦的
    - 看着 %YOU% 手上的毛巾，善信也放心的抬起手把沾上土的决胜服外套脱了下来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员看见了吧，超——级痛快的！」
    - acc: 1
      content: 「确实，看得出来你很开心」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿，不过好像有点嗨过头了」
    - 善信一只手有些尴尬的轻轻挠着后脑，的确是一幅有些反应过来了的样子
    - 毕竟今天的是有点过头了，洁白的毛巾已经沾满泥土快了
    - acc: 1
      content: 「没关系，赛后这些就是我的工作了」
    - acc: 2
      content: 「无所谓，能多接触一下善信的身体也不错」
    - 听见这一句话，善信不自觉的抖了一下，原本还在轻轻擦着侧腰的毛巾也滑倒了一旁
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈，那就麻烦训练员啦」
    - 嘴上在说道谢的话语，手上抓起了一边的毛巾装作随意的样子
    - 抬起来的双手悬停在半空胡乱擦拭，不知道该往哪里放下
    - acc: 1
      content: 「那个，善信？」
    - %YOU% 试探性的提问，拉回了善信飘飞的思绪
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没事没事！就是有点痒吓到了而已！」
    - 尽力把脸转向其他方向，不去直视下方
    - 毛巾很薄，隔着毛毛的触感下能清楚的感觉到有力的手指正在身上游走
    - 双腿上的尘土已经擦的干干净净，毛巾顺着往上
    - 温暖的指尖紧紧贴着露出的侧腹，顺着上下滑动
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （这只是在擦泥，只是在擦泥……）
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （对，只是擦泥……）
        - 毛巾在微微颤抖的躯体上一点点移动，转向肚脐
        - 尘土被擦落，露出了善信的小肚子
        - 手指隔着毛巾也能感觉到传过来的微微抖动，汗水也一点点的从内衬里冒出
        - 看着逐渐红润的样子，实在是难以忍耐
        - 舌头在可爱的小肚脐上，直直的滑过一道线
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哇！」
        - 善信惊恐的声音把 %YOU% 的思绪从小腹拉走，慌张的装作已经擦好的样子
        - acc: 1
          content: 「已经擦好了，等会还有舞台，你快点换衣服」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉，那个……」
        - 无视善信的话，立刻离开了休息室
        - 好险啊
        - 如果继续刚才的事情，说不定会把善信推倒吧

# 天秋失败
tenn_sho_lose:
  title: 啊哈，好像是稍微有点不甘呢
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「输掉了啊……发挥有点失常呢」
    - 走进休息室的善信依旧是爽朗的笑脸，但是却异常的有点不爽的感觉
    - acc: 1
      content: 「今天的发挥不太好呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是啊！没拉住加速突然间就没刹住车，突然就失速了！」
    - 虽然是在说自己的的事情，却不像在说自己的问题
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，不过这次跑的很开心哦，虽然是输了」
    - 轻轻吐出粉嫩的小舌头，闭上一边眼睛装作可爱的样子
    - 身体稍微往一边歪过去一点，带着满身的泥土悄悄蹭了一下
    - acc: 1
      content: 「但是……算了，你开心就好」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿，等会还有胜者舞台，我要先换衣服啦」
    - 善信放下装可爱的样子，转过身去找毛巾想擦掉身上的污渍
    - 只是即将拿到毛巾的时候，神差鬼使看了一眼身后的 %YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训～练～员～」
    - acc: 1
      content: 「什么事？」
    - 听见来自身后的声音之后顺着转过身，却看见了善信高速冲过来的样子
    - 满身尘土的抱过来，沾满了 %YOU% 的衣服
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿，玩笑啦，玩笑！」
    - 善信的脸上带着恶作剧的表情，吐出灵巧的小舌头

# 资深年有马
senior_arim_kin:
  title: 准备就绪？开始逃跑！
  lines:
    - 年末最后的G1赛事
    - 换做往常的话，现在应该是无比紧张的吧
    - 但现在站在选手通道出口的善信脸上，没有一点点的不安
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有马纪念了啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不现实的感觉……没有呢」
    - acc: 1
      content: 「是啊，有马纪念」
    - 毫无逻辑的对话之下，互相知根知底的信任
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，训练员，虽然不知道你还记不记得」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前啊，你说过想要看我自己的风格对吧？」
    - acc: 1
      content: 「直到现在也一样」
    - 听见 %YOU% 的声音，善信的脸上勾起一抹自信的笑容
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那就看好了，善信我的全力……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「把所有事情抛到脑后，只看着前方的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的全力爆逃！」
    - 抬起手向着身后留下了大拇指的影子，带着坚毅的眼神朝着赛场踏出了步伐，向着场上正在招手的好友走去

# 原版决胜服
s_arim_kin_win_clothe1:
  title: 这就是我热血沸腾的跑法啊！
  lines:
    - 实况「能追上吗！能追上吗！」
    - 有马纪念的后半，已经进入了高潮时刻
    - 实况「再不加速就追不上了！目白善信！」
    - 身为好友的太阳神已经失速，一直领放的只剩自己
    - 但已经约定过，用这个跑法去取得胜利
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「之后就交给你啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们是一辈子的亲友！」
    - 伴随着最后的加速和肺部最后挤出的空气，善信没有让任何人追上来，第一名冲线了
    - 胜利的欢呼声，在善信的耳边显得有些不真实，直到屏幕上显示出自己的时候才放声大喊，向着观众席上的 %YOU% 招手
    - divider: true
      content: 休息室
    - 场上的呼声结束，善信带着还没冷静下来的身体，兴奋的推开了休息室的门
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！约好的那个，我做到了！」
    - 不管自己的话有没有被听见，但心情此时此刻已经刹不住车了
    - 既然做不到停止，那就顺着心情去动吧！
    - 顺着冲进休息室的风，一口气向着站在其中的 %YOU% 跳跃！
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀呼！」
    - acc: 1
      content: 「呜哇！」
    - 随着 %YOU% 的悲鸣声，两个人差点就变成了一起倒在地板上的局面
    - 在避免差点被善信扑倒在地上的情况并勉强站稳身形之后，先对着善信的身后慌张的招了招手
    - acc: 1
      content: 「那个，善信，要不还是先松开吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？为什么？」
    - 虽然有些不舍，但还是听话的松开了手
    - 善信不解的眼神随着 %YOU% 的手指往门口的方向看过去
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「噢噢！%65_CALL%的春天？！」
    - 门外的朋友们，正在看着亲热的场景呢
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……啊哈哈，有点失态了啊！」
    - 捂着头往后退了两步之后，善信才有点尴尬的找了个借口
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总之，那个……等会见！」
    - 善信打着招呼退出了休息室，只有 %YOU% 还在休息室里不知所措想着其他的事情
    - 到底是因为刚刚结束比赛的原因呢，还是为什么呢
    - 刚才拥抱的时候，善信的心跳……快得吓人
    - 「总之，还是先把休息室收拾一下吧」
    - 自言自语的把倒在地上的椅子扶起来，顺带把脑子里杂乱的思绪清理了一下
    - 「毕竟是善信嘛，这也正常……」
    - if: era.get('love:64') >= 75
      lines:
        - 正在处理被冲乱的休息室的时候，却在地上找到了其他的东西
        - 决胜服的白色外套，不知为何掉在这里
        - 「啊……」
        - acc: 1
          content: 把外套捡起来
        - acc: 2
          content: 把外套放好
        - 没有一丝犹豫的把外套拿起来，抓在手里端详起来
        - 这是善信刚刚穿过的……
        - 充满善信的味道的，外套
        - 不知为何，拿着外套的手一点点的靠近了 %YOU% 的脸
        - 善信的气味冲进了鼻腔，令人陶醉
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个……」
        - 善信站在门口，有些尴尬的看着 %YOU% 和外套的亲密接触
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要闻的话……我其实完全无所谓的哟」
        - 虽然尴尬，但还是关上了休息室的门，带上了锁
        - 整个世界顿时就只剩下了正在对视的两个人
        - 在 %YOU% 眼中，已经只有善信的存在了
        - 对着眼前的恋人，善信只是张开了双手
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SELF_CALL%就在这里……尽情的动手吧」
        - acc: 1
          key: sex
          content: 扑向善信
          lines:
            - 即使天气很冷，现在善信吐出的气息也热的仿佛能烧尽所有的所有理性
            - 往日里白色的外套遮住的纤细肩膀现在完全没有遮盖，暴露在空气中
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……可以的哦」
            - 善信闭上了双眼，放开原先还缩在身前的双手
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我是属于训练员你的善信哦」
          # 进入马跳
        - acc: 2
          content: 「冷静……冷静……」
          lines:
            - 放下决胜服的外套，轻轻的抓住了善信裸露的肩膀
            - 在善信惊讶的眼神中，%YOU% 把自己的外套盖到了%SEX%的身上
            - acc: 1
              content: 「可不能感冒了」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「训练员……嗯！」
            - 眼神中虽然还是带着遗憾，但却浮出了一点感动的泪水
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不会感冒的啦，那个……」
            - 稍微拉紧了一点外套，把身体缩进中间
            - 学着刚才某个笨蛋的样子，深深吸了一口
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「后面的事情，之后能做吗？」

# 圣诞决胜服
s_arim_kin_win_clothe46:
  title: 逃跑的终点，就在这里
  lines:
    - 实况「能追上吗！能追上吗！」
    - 有马纪念的后半，已经进入了高潮时刻
    - 实况「再不加速就追不上了！目白善信！」
    - 身为好友的太阳神已经失速，一直领放的只剩自己
    - 但已经约定过，用这个跑法去取得胜利
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「之后就交给你啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们是一辈子的亲友！」
    - 伴随着最后的加速和肺部最后挤出的空气，善信没有让任何人追上来，第一名冲线了
    - 胜利的欢呼声，在善信的耳边显得有些不真实，直到屏幕上显示出自己的时候才放声大喊，向着观众席上的 %YOU% 招手
    - divider: true
      content: 休息室
    - 大汗淋漓的回到休息室，轻轻的用手掌扇着风
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然跑完比赛会很热呢……」
    - 刚想坐下的时候，迎面而来的却是一杯刚刚打开的蜂蜜特饮
    - acc: 1
      content: 「有马纪念，恭喜」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说实话……还是有点不相信呢」
    - 一边喝着蜂蜜，一边坐下
    - 从赛场上下来的时候，不知为何激动的心情自然的平静下来了
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，是我赢了吧，训练员？」
    - 眼神里有不安，也有期待
    - acc: 1
      content: 「是啊，是善信赢了哦」
    - 得到回应的善信笑了起来，轻轻把头靠在 %YOU% 的肩膀上
    - 新决胜服带来的裸露肩膀贴在身旁，散发出一阵轻轻地飘香
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，那个约定，我做到了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是用自己的跑法赢下有马纪念的，这下大家都会来恭喜我们了吧」
    - acc: 1
      content: 「大家肯定会承认善信你的实力的，毋庸置疑」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，稍微有点不公平呢」
    - 破天荒的，善信主动拒绝了表扬的话语
    - 从肩膀上移开，认真的看向身旁的 %YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是因为训练员，现在我才能有这个成绩的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是却没有提到训练员的名字，这不对吧？」
    - 善信的眼神很认真，往日和善的蓝色瞳孔此时却没有玩笑的意思
    - acc: 1
      content: 「说的是呢」
    - acc: 2
      content: 「但我只是在支持善信你而已啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说的是呢……才不对吧！」
    - 一边吐槽一边敲打了一下 %YOU% 的头，随后收起了笑容
    - 带着认真的脸色坐直了身，手掌轻轻盖在 %YOU% 的手背上
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果没有训练员你的话，肯定是做不到的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是因为有了训练员你的信任，我才能自由的奔跑……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有训练员在的话……我什么都做不到！」
    - 声音随着情绪一起波动起来，仿佛在呐喊一样
    - 手指紧紧的抓着 %YOU% 的肩膀，前端已经掐进肉里
    - acc: 1
      content: 「善信……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱歉，稍微激动了一点」
    - 善信抬起手，轻轻抹掉眼角溢出的水花
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是啊，刚才说的话都是认真的哦」
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我还是希望训练员，能一直和我在一起，无论何时」
        - 依靠在肩膀上的身体有些摇晃，仿佛随意的一碰就会躺倒
        - 放下来的手掌轻轻的放在 %YOU% 的大腿上，等待着回应
        - acc: 1
          key: hug
          content: 抱住善信
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「会一直在我身边的吧？」
            - 善信的脸贴在 %YOU% 的怀里，听着逐渐加速的心跳声
            - 闭上眼，享受着怀里的气息
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「是的吧……」
            - %YOU% 抬起手轻轻的揉了揉善信的头，解开了新衣服的扣子
            - 雪白的小帽子被善信亲手摘下，含情脉脉的等待着
            - acc: 1
              content: 「善信，我喜欢你」
            # 马跳
        - acc: 2
          content: 亲吻善信
          lines:
            - 像是为了回应一般，坐在%SEX%身旁的 %YOU% 主动起身，深深的吻住了善信
            - 本就有些无力的身体被突然袭击压倒在休息室的椅子上，却完全没有反击的想法
            - 洁白的小帽子落到地上，但两个人都没有在意的意思，瞳孔之中仅仅能映射出彼此的脸庞
            - 不知亲吻过了多久，两个人才拉着银色的丝线把嘴唇分开
            - 此时此刻，两双眼睛上下对视着
            - 善信缓缓的闭上眼，把手放在 %YOU% 的脖子上，轻轻的拉到自己的面前
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「请吧，是圣诞节的%SELF_CALL%哦」
            # 进入马跳

ak_c46_hug_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哎嘿嘿，总感觉又跑了一场比赛一样呢」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是这次我可以放心的说了——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我是训练员……我是 %YOURNAME% 的一着！」
  - 善信的笑脸是如此自然，不见一点刚才的不安感
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「以后，不……今生也请多指教了，%YOURNAME%！」

ak_c46_kiss_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊……失策了」
  - 善信捂着脸，像是非常懊恼的样子
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这下不就要带着训练员的味道去舞台了嘛！笨蛋！」
  - 虽然说的话是在抱怨，但是没有生气
  - 相反，似乎有些高兴
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……不过呢，我并不讨厌哦，这样的训练员」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「主动 kiss 上来什么的，%SELF_CALL%也很喜欢啦，但还是希望训练员你能说清楚很多事情哦」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「比如说呢，对于我的事情……是什么样的想法？」
  - 手指在脸上轻轻刮动，眼神直直的向 %YOU% 的方向看过来
  - 这句话在问的事情，只要一听就能明白
  - acc: 1
    content: 「是喜欢……不」
  - 是什么驱使 %YOU% 去做这些事情，去主动拥抱善信，去主动拉起善信的手呢
  - 这些问题已经不言而喻了
  - 「……大概是爱吧」
  - 简单又肉麻的话从 %YOU% 的嘴里说了出来，却是让善信放在脸上的手指停了下来
  - 充满绯红的脸有些发愣的看着身边的 %YOU%，嘴唇微微颤抖着似乎想要说些什么
  - 深情的对视直到门外传来其他声音才把思绪带了回来，平静的表情唐突的笑了出来
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员，我已经有答案了……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我们是一样的呢」

# 资深年12月4周
christmas_party:
  title: 目白的圣诞晚会
  lines:
    - 圣诞节的夜晚，是目白家为了回应平时各界的帮助而举办的聚会
    - 善信穿着白色的决胜服，在露天的会场里四处带动情绪
    - 直到周围的气氛开始升温，会场变得吵闹起来之后，善信才有空找到了正在随意漫步的 %YOU%
    - 离开周边的群体，绕了过来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，今天过的开心吗？」
    - 善信递过来一杯饮料，干脆就呆在 %YOU% 的身边一同慢下来
    - acc: 1
      content: 「嗯，很开心」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿，开心就好啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然说高雅的晚宴什么的不太适合我啦，但今天只是普通的聚会」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还要谢谢奶奶呢！」
    - 善信的声音里带着欢快，连带脚步也轻快起来
    - 周围声音不大，也完全钻不进两个人的空间里
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「和训练员一起参加的晚会，莫名的很开心呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前，我对聚会这件事还是有点抗拒的啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟那时候我会把自己当成调节担当之类的，总感觉开心的部分和我不太搭配」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是和太阳神%THEY%接触之后啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「已经很自然的和大家一起开心起来了！」
    - 善信的身体稍稍往前倾斜，眼神看向旁边偷瞄着 %YOU% 的脸
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这部分也多亏了训练员呢，嘿嘿」
    - 脸上浮出自然的笑容，肩膀轻轻的和 %YOU% 碰撞在一起
    - 年末的气温不高，善信的衣服也不算暖和
    - 裸露的肩膀在 %YOU% 的眼里，怎么看都是隐患
    - acc: 1
      key: sex
      content: （会感冒吧……）
      lines:
        - 裸露的双肩上套上一件外套，盖住了善信的身体
        - 还带着体温的衣服贴在身上还带着一点属于 %YOU% 的味道
        - 稍微愣了一下之后，善信有点尴尬的看向身边
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，这一身其实不怎么冷的啦」
        - 虽然不是高兴的接受，但还是抓着衣襟用力往自己身上拉了拉
        - 鼻腔里充斥着衣服里的味道，脸上浮出一阵红润
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过……还是谢谢你，%CALLNAME%」
        - 声音没有刚才的精神，无比的平缓
        - 用只有 %YOU% 能听见的音量，吹在耳边
    - if: era.get('love:64') >= 75
      acc: 2
      content: （会被袭击……）
      lines:
        - 裸露的手臂无自觉的抬起来抱着后脑，露出洁白的腋下
        - 短裙下的吊带袜高高挂着，在以往没有装饰的大腿上勒出小小的凹陷
        - 深蓝色的丝带把头发束在侧面立起高马尾，露出了后颈
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%？不舒服吗？」
        - 善信的声音适时的出现，把思想拉回现实
        - 早已出现异常的脸色，善信也注意到了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，我陪你去休息一会吧，不要感冒了」
        - 用刚好能让其他人听见的声音，为两个人找到了暂时离开的理由
        - 绕过整个会场，绕过管家的老爷子，绕过所有人
        - 在所有人都不会找到的地方，善信才转过身来看着 %YOU%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%你啊……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真是不让人省心呢」
        - 手掌轻轻的盖在裤子上，温柔的按压着
        - 直到温度升起，善信才慢慢拉开拉链
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不要发出声音哦」
        - 温柔的嗓音回响在 %YOU% 的脑海中，随即传来的是下半身被善信玩弄的快感
        - 手指就像是跳舞一般，在敏感点上来回游动，每一次的挑逗都令身体在冬夜里不住的颤抖
        - 任由本能驱使下，%YOU% 的双手抓住了善信的肩膀，贴在一起
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「可以出来了哦」
        - 看不见的情况下，私处的触觉更加的敏感
        - 指尖的摩擦逐渐施力，引诱着高潮的快感
        - acc: 1
          content: 「善信，我……！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……」
        - 热流涌出之后，善信看着自己的手，有些沉默
        - 掏出手帕擦干净手，这才重新走出了死角
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员，我们再不回去的话大家会起疑心的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好啦，回去啦」
        - 善信向着穿好衣服的 %YOU%，伸直了手
        - acc: 1
          content: 「牵起善信的手」
        - acc: 2
          content: 「拉过善信的手」
          # 马跳

party_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「真是的，这样肯定会被怀疑了吧……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「好啦好啦，没关系的啦」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嘛，%SELF_CALL%也完全不会在意的」
  - 对比有点颓废感的 %YOU%，善信却是开朗的样子
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「如果在意的话，不如一起出去玩当作补偿怎么样？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「玩笑啦，什么时候都还原哦！」
  - 善信的笑容一如既往，带着一阵温暖

#资深年宝塚纪念优胜，有马纪念连霸后出现。已育成后（第4年）进入1月4周
winner:
  title: 头抬得太高了啦！
  lines:
    - 难得休息的时光，%YOU% 在放开思考的时候自然的想到了善信的事情
    - 不知为何，各项胜利的回忆浮现在脑海之中
    - 没错，目白善信非常擅长跑祭典型的竞赛
    - 在「有马纪念」和「宝塚纪念」上接连获胜，甚至又赢了一次「有马纪念」……
    - 正在思考要飘上天际的时候，善信的声音打断了 %YOU% 的思绪
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天啊天啊天啊……我居然在大奖赛三连霸耶！」
    - acc: 1
      content: 「嗯，没错！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈，连我自己都觉得做的超厉害呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然是创举，但是在有人气投票的比赛里达成这点，还真是有我的风格啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这种和大家一起热闹参加的祭典型比赛，说不定是最符合我的类型呢！」
    - acc: 1
      content: 「说道祭典，好像还有庆祝仪式哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉，三连霸的吗？这样啊，那也挺开心的呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，在比赛上已经大嗨特嗨过了，庆祝仪式就老实一点，普普通通的参加吧」
    - divider: true
      content: 庆祝仪式
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「嗯～虽然并不是有什么不好的地方，但你在台上的举止……」
    - 学生会长微妙的歪着头，看着彩排现场
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「会长？是我领奖杯的方式有什么大问题吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我今天没有表现的像个辣妹啦，应该没什么奇怪的地方……」
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「并不是奇怪」
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「反而是原本的你，态度好像过于谦虚了」
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「你可以更加的抬头挺胸，无需顾虑哦」
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「上一个达成大奖赛三连冠的%UMA%，可是我敬爱的哪位赛%UMA%啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抬头挺胸……就算那么说啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，平时那种谦卑的态度，该说是从小养成的嘛」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯～该怎么办呢」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「可以让我说句话吗？」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「我认为你的举止之所以不够有威严，是头部倾斜角度的问题」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「要不要试着抬高头部的角度呢？我想想……大概是2.85度左右」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「头部位置嘛……这样啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我平时会忍不住表现出『你好你好～』的感觉，所以看起来才不太有威严吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「OK，波旁！我明白了！我会试着把头抬高的！」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「拜托了。要是你能保持自信坚定的举止，我也会高兴的」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「因为善信你的成就，是逃马赛%UMA%们梦寐以求的」
    - 在大伙的齐心协力商议之后，庆祝仪式算是平安结束了
    - 只是在这之后——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦哦哦哦哦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，训练员！我刚才的步调很棒吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感觉跑的超轻松的，时间怎么样？」
    - acc: 1
      content: 「进步明显哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么回事呢……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这只是因为不停训练得到的成果吗？还是说……」
    - acc: 1
      content: 「难道是……抬头的缘故？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抬头……啊，是庆祝仪式那个时候」
    - 善信的表情豁然开朗一般明亮起来
    - 抬起头部的姿势，或许也把内心一起纠正了吧
    - 也就是说这么做之后，善信的身上已经得到了身为大奖赛三连霸赛%UMA%的自豪
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样啊……心态改变之后跑法也会改变，所以要把头抬高点啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好～扬起下巴，抬头挺胸，去争取四连霸，五连霸吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀呼！」
    - 溢满而出的情绪和热情，从善信的身上跑了出来
    - 将大奖赛三连霸的自豪铭刻在心中，善信今后也将挑战新的盛宴

#达成称号条件后，进入2月1周
sports_car:
  title: 震惊！跑车是礼物！
  lines:
    - 一个平静的日子，正在办公室的%YOU%突然收到了%MINORU%的通知
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「本来这个应该直接通知善信同学的，不过今天%SEX%放假呢」
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「毕竟这不是能够让学校暂时保管的东西呢」
    - acc: 1
      content: 「有那么重要吗？」
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「详细的部分就由理事长说明吧」
    - divider: true
      content: 理事长室
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - 「表 彰！你带领目白善信同学的表现相当的亮眼！」
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - 「奖 励！闪光系列赛的赞助商送过来了一份大礼哦！」
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - 「请你负起作为训练员的责任，把这份礼物带给目白善信吧！」
    - acc: 1
      content: 「唉唉？！这份礼物到底是……」
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「那个，总之先去停车场吧」
    - 绿色的管理人小姐把崭新的车钥匙递给 %YOU%，指向停车场的方向
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「应该很快就能找到的，剩下的事情就交给你了」
    - 说完之后，骏川小姐就回头处理工作去了
    - 一头雾水的 %YOU% 带着手上的钥匙，走进停车场里
    - 眼前的是一俩反射着亮光的新车，可以说是相当夸张的礼物
    - acc: 1
      content: 「好夸张的礼物……」
    - 眼前崭新出场的车子虽然是相当夸张的礼物没错，但是有一个很大的问题
    - 善信，没办法开吧
    - 那这个礼物要怎么交给善信呢……
    - if: era.get('love:64') >= 50
      acc: 1
      content: 「给善信打个电话吧……」
      lines:
        - 善信的电话很快就接通了，一下就答应了在见一面
        - divider: true
          content: 街道
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，不妙，这下肯定迟到了……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……真奇怪啊，怎么找不到」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「难不成训练员也迟到了吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不对，这应该不会发生啦，应该是中途发生了什么吧……」
        - 善信一路小跑在街道上，左右寻找着 %YOU% 的身影
        - 在寻找的有些焦急的时候，身后传来了车辆鸣笛的声音
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呀，啊，抱歉抱歉！我这就让开……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「等等……啊咧？训练员？」
        - acc: 1
          content: 「哟，善信，上车」
        - 坐在跑车里的 %YOU% 朝着正在愣神的善信打了个招呼，把车停在%SEX%的身边
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好帅气的车……啊不对，为什么训练员会？」
        - acc: 1
          content: 「是系列赛的赞助商送给你的礼物哦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这是给我的礼物吗！？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这个超厉害的！不过，我好像没法开唉」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我还没有驾驶证呢，明明是那么贵重的礼物」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对了！就交给训练员你来开吧！」
        - 话说到一半的时候，善信已经坐上了副驾驶的位置
        - 车子顺着街道开向海边，沿着海岸线一路安稳的行驶
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员，好舒服啊！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「继续继续！呀吼！」
        - 海风顺着车窗吹在善信身上，让本就开心的%SEX%不自觉的玩了起来
        - 直到车子缓缓停在无人的沙滩上，才停下了刚才收不住的笑声
        - 海浪拍打沙滩，发出一阵令人舒适的沙沙声
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼，来了个挺远的地方呢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「感觉毫无目的的兜兜风也不错呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「偶尔也要从日常里爆逃出来，随心所欲的享受自己的快乐呢」
        - acc: 1
          content: 「善信你就是这样的吧」
        - 听见 %YOU% 的肯定，善信有点没忍住，轻笑出声
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊哈哈，确实！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「从微不足道的自己，从别人给我定好的道路上逃出来」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「逃出来，逃出来，不断不断的逃出来……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……然后在你的带领下，带着自信来到这一步！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「正因如此——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯～这风真舒服呢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「已经没有什么东西能吓到我了！」
        - 善信爽朗的笑脸上带着解放感，大大的张开双手伸了个懒腰
        - 只是笑脸上带着少许的尴尬，微微皱眉
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嘛，虽然在遇到训练员之前，我一直都在起跑线上犹豫不决，所以起跑就晚了点」
        - acc: 1
          content: 「但是，你用自己的双腿追上来了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是啊，这是慢了一圈的青春呢～但是啊——」
        - 放开原先皱起来的眉头，表情自然的看着 %YOU% 的脸
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没有什么是没法拿回来的！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「也许现在还没到手，但是总有一天我会将其收入囊中！」
        - acc: 1
          content: 「这家伙也是呢，而且是纪念车」
        - 正笑着的 %YOU% 指向那辆载着两个人一起过来的车，轻描淡写的说着
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「赞助商的礼物啊……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「怎么说呢，还是有点不现实的感觉啦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我说啊，训练员」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这辆车可以按我喜欢的做什么都可以对吧？不论我打算用来做什么？」
        - acc: 1
          content: 「那当然」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这可，太，太，太……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「太好了！这真是太棒了！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这样的话无论什么时候都能到处跑了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「让我们尽情去兜风吧，%YOURNAME%！」
        - acc: 1
          content: 「我们？也包括我吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯！毕竟这不是只靠我一个人的力量得到的嘛，所以我想和你一起分享」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊对了，还有一件事……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「如果可以的话，给这车起个名字吧？」
        - acc: 1
          content: 「名字？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯！因为我打算一直开到老啦，所以一定要起一个听不厌，值得珍视的名字哦」
        - 给善信的车子取名，而且要符合%SEX%的功绩，而且是值得珍视的名字……
        - 在 %YOU% 的思考里，答案已经只有一个了
        - acc: 1
          content: 「善信！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉？我就在这里……」
        - acc: 1
          content: 「就叫善信号吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉唉！？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「就用我的名字吗？！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……如果起这个名字的话，你会一直珍视它的吗？」
        - acc: 1
          content: 「嗯，同时也能纪念你的功绩」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊哈哈，是这样吗？那就这样吧，简简单单的名字也挺好的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，善信号！果然没有什么是我得不到的呢！」
        - 善信脸上的笑容如同万里晴空，满意的点着头
        - acc: 1
          content: 「你是本来就想要一辆车吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「车……是呢，也许是吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但是呢，除此之外我还有很多想要的！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「走吧，该继续兜风啰！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员，快点！」
        - 虽然目白善信迟到了，但是眨眼间%SEX%就会冲到最前方去，拉着 %YOU% 跑——
        - 车辆发出启动的声音，再一次行驶起来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「快点，再快点，训练员！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要快到极限！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「FuFu～！自由真是最棒了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「快跑，快跑，善信号！」
        - 不断加速的善信号，虽然曾经是不为人知的的，迟到的逃亡者，但是现在
        - %SEX%，比谁都要跑的快
        - %SEX%是偏离王道的先驱，描绘出一道目白家里最自由的轨迹
    - acc: 2
      content: 「给管家打个电话吧……」
      lines:
        - 在一阵思考过后，%YOU% 选择了和管家先生打一个电话
        - 毕竟这份礼物对于善信来说，还是有点贵重的
        - acc: 1
          content: 「交给管家先生吧……」
        - 将钥匙交给赶来的管家之后，%YOU% 有点僵硬的肩膀一口气松开了

rain_notify:
  - color: %COLOR%
    content: 【单独出行时的某个雨天，说不定会有意想不到的相遇】

################################
# 触发事件
################################

# 出道赛后，任意G1比赛出走后，单独出行商店街出现
# 提醒：单独出行时的某个雨天，说不定会有意想不到的相遇
rain:
  title: 即使被大雨淋湿
  lines:
    - 某天，正在外出途中的 %YOU% 被突如其来的大雨打断了原本的行程
    - 既然被大雨困在商场里，便顺路在这里逛了起来
    - 然后，在雨停下的时候——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼，呼，呼……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊咧，这不是训练员嘛！」
    - 突然间，善信穿着决胜服浑身湿透的跑了过来
    - acc: 1
      content: 「善信，你这是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊～是在问我的衣服吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没问题没问题，跑一跑就会干的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……啊，这样子解释不清楚吧，呃——」
    - 善信的脸上浮上苦笑，缓缓的说出了事情的前因后果
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——所以，目白家全员都被叫去参加宴会了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后听到那些人说什么，回程的车也准备好了——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就再也忍不住了，向大家说了声抱歉，然后就逃跑了！」
    - 逃跑的想法太过有%SEX%的风格，让人不由自主的笑了出来
    - 但是决胜服还是很令人在意，毕竟已经全部打湿了呢
    - 内衬紧贴在善信身上，透过全湿的部分已经死死地吸住了 %YOU% 的目光
    - 只是内衣的部分被胸部撑起来的一点布料遮住了，这才把眼神重新收了起来
    - acc: 1
      content: 「……决胜服这样没关系吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊～确实是会这样想的呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过没关系哦，我订制的时候就是这样打算的」
    - acc: 1
      content: 「这样打算？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「该怎么说呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个设计跟便装没什么差别对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有装模作样的感觉，既方便跑步，也方便逃跑」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「更重要的是，如果想一个人跑步，立刻就可以开跑！！」
    - 听见善信这句话的 %YOU% 把注意力从善信的身上移开，有些发愣
    - 善信所说的一个人，让 %YOU% 的心里浮出了一点异样感
    - 平时的善信，应该总是和别人在一起才对
    - acc: 1
      content: 「一个人？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我当然喜欢跟大家在一起，可是——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在比赛的时候，能跑在最前头的只有一个人吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「或许是因为这样，有时候我会想要什么都不思考地跑起来」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「朝着地平线，一个人自由地，只管一直跑下去！」
    - 善信的眼神看向遥远的另一方，在哪里一定不存在任何的不自由和枷锁吧
    - 只是在善信的眼神里，反射出了新的雨滴
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜哇，又开始下了……」
    - acc: 1
      content: 「快点回去吧！」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「也是，只要用跑的，就不太会淋湿了吧！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那我们就尽快——」
        - acc: 1
          content: 「等一下」
        - 善信停下了脚步，疑惑的回头看着
        - %YOU% 打开刚买的雨伞，撑在%SEX%的头上
        - 因为只有这一把伞，或许会显得很挤吧
        - acc: 1
          content: 「我不希望你感冒」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「噢噢，训练员真是可靠！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真好，下次我也对别人这样做吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「就跟训练员一样，刷——的撑起伞！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过啊～不知道我能不能做的那么好就是啦，哈哈」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员果然是个成熟可靠的人呢……」
    - acc: 2
      content: 「要不要找个地方躲雨，顺便喝点东西？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好主意！我赞成！」
        - 从大雨中撤离，找到了一间咖啡店
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「给你，是热咖啡对吧」
        - 善信把手上的咖啡杯递到 %YOU% 的面前，自己缓缓的坐在对面
        - acc: 1
          content: 「谢谢」
        - 虽然是在咖啡店里，但善信的模样却显得十分自然
        - 身上的决胜服完全没有显得特别，完全的融入了店里的气氛
        - 似乎是察觉到了 %YOU% 的眼神，善信放下手里的杯子有点疑惑的看着
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，怎么了吗？」
        - acc: 1
          content: 「这件决胜服果然很棒呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「咦，怎么啦，这么正经？！」
        - acc: 1
          content: 「没有，我只是突然这样觉得」
        - 善信的眼神里带着一点惊讶，很快又收了起来，急急忙忙的移开了眼神
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真是的……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「在你说这种话的时候，咖啡就要凉掉了哦～好啦，快点喝啦」

important_place_notify:
  - color: %COLOR%
    content: 【%CHARA% 之前在这里参加过自由赛……要再带%SEX%来看看吗】

#（要来自由赛吗？）触发后，经典年商店街出现
important_place:
  title: 因为是重要的地方
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀吼～今天大家也很有精神呢！」
    - 参加自由赛的%UMA%「哦，这不是善信嘛？」
    - 参加自由赛的%UMA%「唉，你听我说嘛～」
    - 和善信一同外出的 %YOU% 在路上有些空闲，就顺便去了一趟自由赛的赛场
    - 有一位似乎是善信朋友的%UMA%跑了过来，而 %YOU% 也自觉的退出了两个人的谈话中间
    - 在善信聊完之后，和 %YOU% 一起正准备离开时
    - 特雷森的%UMA%A「呜哇，真的时在路上有赛道唉」
    - 特雷森的%UMA%A「是不是有点凹凸不平的感觉啊？在这种地方也能跑吗？」
    - 特雷森的%UMA%B「不行，这我可做不到，会伤到脚的吧～」
    - 参加自由赛的%UMA%「……你们是来做什么的啊？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……啊～抱歉，训练员！我可以回去一下吗？」
    - acc: 1
      content: 「嗯，当然可以」
    - 善信得到许可之后，小跑着回到了刚才的%UMA%身边，自然的搭上话
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗨～你们是特雷森的学生吧？是第一次来吗？」
    - 特雷森的%UMA%A「……你突然跑过来要干嘛？」
    - 特雷森的%UMA%A「话说你是目白家的人吧？跟这种小角色在一起会变弱的哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小角色……因为%THEY%在跑自由赛，所以就觉得%THEY%很弱，这是不对的吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「事实上我就是因为在这里跑过，才能变强的哦」
    - 特雷森的%UMA%A「不不不，当然是正常的在学校里训练比较好吧！」
    - 特雷森的%UMA%B「而且和业余的人比，根本不能算是训练吧！」
    - 参加自由赛的%UMA%「喂，我说你们啊——！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——好，既然都说到这个程度了，那就来比赛吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样子就能够分出高下了，对吧？」
    - 善信见缝插针的把比赛的事情插进对话之中，让两方都停下了争论
    - 两名赛%UMA%话已至此，气鼓鼓的接受了对决的要求
    - 自然而然的，裁判的责任就到了 %YOU% 的身上
    - acc: 1
      content: 「那就……开始！」
    - 起跑的同时，善信毫不犹豫地一路领跑在最前方
    - 但那两人不愧是特雷森学院的学生，毫不畏惧快节奏跟了上来
    - 比赛的气氛越来越激烈，而善信则全力领头——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈啊啊啊啊啊啊——！」
    - 参加自由赛的%UMA%「——好啊！善信，你最棒了！！」
    - 特雷森的%UMA%A「呼，呼，那种逃马的跑法是怎么样啦，太乱来了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈哈哈，这种跑法在学校里不太会与人教的吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过这就是，这里教给我的跑法哦」
    - 在分出胜负之后，善信收到了周围久久不停歇的拍手和喝彩声
    - 而两位来自特雷森的%UMA%看着眼前的景象，尴尬的离去了
    - 好不容易脱离了热闹的欢呼之后，两个人一起走在傍晚的河畔边
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎呀，抱歉抱歉！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好像把你卷进纠纷里了啊」
    - acc: 1
      key: select
      content: 「领放也是各种各样的呢」（速度+10）
      lines:
        - 为了守护朋友而全力奔跑的姿态非常帅气，%YOU% 这样想着和%SEX%说了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「咦，你说刚才那个吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不不不，我才没有那么了不起啦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我只是觉得，难得有可以自由跑步的地方，拿来吵架太可惜了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「而且你想啊，我也只是跑在前头而已嘛！」
        - 善信的脸上布满了羞涩的笑容，却比以往都更加自豪
    - acc: 2
      content: 「你真够朋友呢」（智力+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊哈哈，感觉真难为情」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过也是呢，因为有%THEY%，才有了现在的我」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「在哪里可以成长，可以得到收获——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我不想让任何人否定这件事！」
        - 在这之后，善信和 %YOU% 说了许许多多的，关于%SEX%的朋友们的故事

golf_notify:
  - color: %COLOR%
    content: 【最近 %CHARA% 训练后总是急着来商店街】

#爱慕＞49，资深年圣诞节 商店街 触发
golf:
  title: 绕远路的一杆进洞
  lines:
    - 一个普普通通的下午，在刚刚结束训练之后善信主动找到了 %YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天也辛苦你了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么，我还有事就先走啦，训练员！」
    - acc: 1
      content: 「可以是可以，但不用那么急的吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，是有点事啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这段时间可能都会这样的啦，抱歉！」
    - 以善信说过的这句话开始的几天，%SEX%都是早早的离开了训练场
    - 直到某一天，%YOU% 来到了街上，习以为常的街道到处挂满了象征圣诞节的灯饰，到处都充满了热闹的景象
    - 正在街道上四处闲逛的 %YOU% 在一间体育用品店前停下了脚步，看着橱柜里的商品
    - acc: 1
      content: 「高尔夫手套……」
    - 看着橱柜里的手套，思绪自然的飘向了前阵时间的对话
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉，你没在冬天打过高尔夫吗？」
    - acc: 1
      content: 「因为会很冷」
    - acc: 2
      content: 「会冻僵的嘛」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那多可惜啊！冬天的人很少，可以慢慢玩，可轻松了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要不下次我们一起去吧？」
    - 之前在训练室闲聊的时候，确实说过这样的话
    - 正好现在临近圣诞节，可以拿来当圣诞节礼物，顺便也能感谢善信的邀请
    - 虽然并不知道要什么时候送给%SEX%……
    - acc: 1
      content: 「总之，先买下来吧」
      lines:
        - 带着准备送出去的礼物，%YOU% 离开了商店街
        - divider: true
          content: 次日的训练场
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼～跑舒服了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「谢谢指导啦，训练员！」
        - acc: 1
          content: 「今天就到这里了，回见，要注意安全啊」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，等下啦训练员！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，等会你有时间吗？」
        - 善信突然的说了这么一句话，打断了 %YOU% 离开的步伐
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「其实我正在游乐场打短期工，哪里的活动还挺有意思的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「灯彩都很漂亮，而且里面的店铺都装饰的很可爱！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……你觉得怎么样？」
        - acc: 1
          content: 「如果你不介意的话，我肯定答应」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯嗯！当然不介意！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「带路的事情就交给我吧！」
        - 善信有点兴奋的去换好了自己的冬装，这才带着 %YOU% 一起前往了游乐园
        - divider: true
          content: 游乐园
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你觉得这香料酒怎么样？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「因为这是无酒精饮料，所以大人小孩都很喜欢哦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然有些人会讨厌中间有肉桂的味道啦」
        - acc: 1
          content: 「很好喝啊，整个身子都暖和起来了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我也很喜欢哦，呵呵……看样子我们很合得来呢～」
        - 这样说着的善信，很快又被周围的景象吸走了注意，带着 %YOU% 在街道上漫步起来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员！一起来摆这个姿势拍照吧！」
        - acc: 1
          content: 「是，是这样吗？没做错吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没错！来来，看那边的手机～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「3，2，1……好！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯哼～让我看看照片的效果……啊！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「打工的时间到了！训练员，我就先带你到这里啦，要记得来我打工的地方看看哦！」
        - 善信收起手机，跑向了一角的餐厅
        - 在店内演奏着的圣诞节歌曲里，服务员们带着轻快的脚步给顾客们上菜
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「久等了～这是你的火鸡腿和冬日假期饮品」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我跟店长说你是我的训练员，%SEX%就稍微给你多加了点东西……不要说出去哦？」
        - acc: 1
          content: 「我不会说出去的，也帮我谢谢店长」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哈哈，我会把你的话传达给%SEX%的～那么，请慢用」
        - 正当 %YOU% 享受了食物，打算休息一会的时候
        - 似乎有在观察 %YOU% 的善信抓住时机走了过来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……训练员，我现在可以休息了，方便借一步说话嘛？」
        - acc: 1
          content: 「？」
        - 跟着善信走出门之后，%SEX%才从怀里拿出了一个小小的礼盒，送到了 %YOU% 的手里
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这是驯鹿善信给你送来的礼物哦～打开看看吧」
        - 收下礼物打开之后，%YOU% 才发现里面是一双由著名高尔夫品牌生产的手套
        - acc: 1
          content: 「这是……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「还记得我之前跟你说要一起去打高尔夫吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这是能保护手不被冻僵的冬季手套哦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……圣诞节快乐」
        - 在善信送出的礼物下，所有的事情都连起来了
        - 训练之后急着离开，而且一直都很忙的原因是——
        - acc: 1
          content: 「有点事是指打工啊」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「喂喂，把话说的太直白了就没意思了哦？」
        - 看着善信骄傲的模样，%YOU% 闭上嘴在自己的包里摸索起来
        - 之前不知道要什么时候送出去的礼物，正沉睡在这里
        - acc: 1
          content: 「其实，我也准备了这个……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「袋子？唉，这难道……」
        - 善信接过递给%SEX%的袋子，看着放在其中的手套
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这不是手套嘛……！」
        - acc: 1
          content: 「因为我看你想去打高尔夫」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「也就是说？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哈哈，我们想到一起去了」
        - acc: 1
          content: 「互相准备了惊喜呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没错！既然我们彼此都给对方准备了手套，那不去都不行了呢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「就让本驯鹿来带你过去吧～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「将你这位送来了如此精美的礼物的圣诞老人，送到目的地～」
        - acc: 1
          content: 「那就拜托你了」
        - divider: true
        - random: true
          lines:
            - divider: true
              content: 后日
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哦呀，这个天气超棒！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我们开始吧，训练员！」
            - 纵使天气寒冷，善信和 %YOU% 的手也没有被冻僵
            - 这一天，两个人一起尽情享受了高尔夫的乐趣
        - random: true
          lines:
            - 店员A「太好了呢，小善信！」
            - 店员A「那么辛苦都值得了呢～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哇！等下，你怎么跟过来了！？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「这种事情就没必要再说了啦！」
            - 为了送出这份礼物，想必善信以自己的方式，做出了不少努力吧
            - 如此想着的 %YOU% 下定决心，一定要好好的珍惜这副手套
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「好！那就这么决定了！啊，对了」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不如戴上手套拍张照纪念一下吧」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「训练员你也要戴哦，然后我们再摆上之前那个姿势……完美！」
            - 不久之后，就收到了善信发过来的照片
            - 上面是 %YOU% 和善信的各一只手，每当看见这张照片的时候，心里都感觉暖暖的
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哎嘿嘿，那就说好了」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「对了，事不宜迟，我这就带上手套吧！」
            - acc: 1
              content: 「那我也戴上吧」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哦，大小刚刚好！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……说不定我们真的是心有灵犀哦？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「比圣诞老人和麋鹿更厉害！」
        - random: true
          lines:
            - 店员A「辛苦了，小善信！」
            - 店员A「啊，看来事情成了？恭喜恭喜！」
            - 店员B「毕竟你是为此才来店里打工的呢！」
            - 店员B「哎呀，真是有辛苦的价值啊～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「啊哈哈……还请各位保密哦」
            - acc: 1
              content: 「真的是，太谢谢你了」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……这，嗯……不客气」
    - acc: 2
      content: 「到时候再说吧……」

lottery_notify:
  - color: %COLOR%
    content: 【和 %CHARA% 去抽奖吧！】

# 爱慕＞49，资深年1月期间 商店街抽奖触发
lottery:
  title: 抽奖活动！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说起来刚才玩的时候有领到抽奖券唉，要不要试试看？」
    - 看着满脸热情的善信，%YOU% 也带上了满是开心的表情，找到了抽奖的店面
    - if: d.dice === 1
      lines:
        - 二等奖：只是一根胡萝卜……
        - 小摊老板「恭喜！奖品是 一根胡萝卜 哦！」
        - 看着手上的一根胡萝卜，只能稍微叹了口气
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「有一根胡萝卜也不错啦，回去做个烤胡萝卜什么的也不错啊」
        - 善信拿着手上的胡萝卜，依旧很开心的样子
        # 体力+200
    - if: d.dice === 2
      lines:
        - 一等奖：一篮胡萝卜
        - 小摊老板「恭喜！奖品是 一篮胡萝卜 哦！」
        - 相当大的一篮呢，应该能做很多料理吧
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦哦，好多胡萝卜！这下大家都有份了！」
        - 善信一口气抱起整篮胡萝卜，朝着你露出了自然的笑容
        # 属性+5
    - if: d.dice === 3
      lines:
        - 特等奖：胡萝卜汉堡肉！
        - 小摊老板「恭喜！是特等奖的胡萝卜汉堡肉！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「居然是胡萝卜汉堡肉！这可是一等奖唉！超棒！」
        - 看着面前的胡萝卜汉堡肉，善信的眼睛里似乎是在闪闪发光的样子
        - 虽然一开始的眼神满是惊喜，不过很快就缩了下去，转过来看向 %YOU%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，要一起吃吗？」
        - 善信一边低下头轻轻刮着脸，一边隔着下垂的刘海偷看过来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，毕竟这是训练员抽到的嘛，所以……」
        # 全属性+10
        - acc: 1
          content: 「好啊，一起回去吧！」（好感+20）
          lines:
            - 似乎是猜到了回应，善信笑着拉住了 %YOU% 的手，向着 %YOU% 的家跑了起来
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「快点快点，我的肚子也饿了啦，快点回去啦！」
            - 善信的声音里带着一阵撒娇的气息，但此时却显得相当可爱
            - 自然，可爱的部分也包括小跑的时候，胸口一跳一跳的部分……
        - acc: 2
          content: 「善信你吃吧，这是你的抽奖卷嘛」（爱慕+4）
          lines:
            - 听见回答的时候，善信的脸稍微抽了一下，或许是完全没猜到这个回答
            - 原本有些兴奋的一跳一跳的耳朵也落了下来，连带着表情也阴暗了下去。
            - 对着这样低落的善信，原本想说的话也收了回去
            - acc: 1
              content: 「说起来，稍微有点饿了……」
            - 刚才落下的耳朵突然间又立了起来，似乎还想听下一句话的样子
            - 看见善信可爱的样子，%YOU% 挠了挠头，装作真的肚子饿了一样
            - 只是装作肚子饿的时候，被善信捏住了衣角
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我这里有好吃的汉堡肉哦，要一起吗？」
    - if: d.dice === 4
      lines:
        - 特等：温泉旅行卷
        - 小摊老板「哦多！居然是！」
        - 小摊老板「是温泉旅行卷！恭喜你！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「温，温泉旅行卷！训练员你快看！」
        - 善信兴奋的看着手上的旅行卷，转过头来看向 %YOU%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「居然真的抽到了这个……有点不真实的感觉……」
        - 对着手上的奖品，，两个人都激动的在原地站了一阵，直到周围的其他人提醒了一声
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「怎么办呢，双人份的温泉旅行卷……啊，训练员你会和我一起去的吗？」
        - 善信的声音里带着一点轻飘飘的感觉，像是没有认真的问着
        - 但看向%SEX%的时候，却能看见那双蓝色的眼睛里带着些许的期待
        - 稍微有点想要欺负这样的善信呢，毕竟真的很可爱

hot_spring_notify:
  - color: %COLOR%
    content: 【和 %CHARA% 去泡温泉吧！】

# 抽奖当年12月
# 有券 or 90 爱慕
hot_spring:
  title: 温泉旅行
  lines:
    - 在与善信一起取得胜利之后的某一天——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （也差不多～是时候了吧？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （啊，可是，要是%YOURSEX%说没心情去该怎么办呢……）
    # CFLAGNAME:52 = 育成用变量
    - if: era.get('cflag:64:52')?.hot_spring !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （难得准备了多一人份的温泉旅行卷……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （好……总之气势最重要！先一口气去邀请%YOURSEX%试试吧！）
    - 带着不知从何而来的气势，善信一口气推开了办公室的门
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！温泉时间到啦～FuFu～！」
    - acc: 1
      content: 「怎么突然这样了……发生什么了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有啦，之前不是抽到了温泉卷吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你看……现在就是拿出来用的时候了吧！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奖励一下自己是很重要的啦～坐地方线列车，踏入温泉区吧～FuFu～」
    - 善信紧握着拳放在身前，斩钉截铁的说着
    - acc: 1
      key: select
      content: 「嗯，那我们就去吧」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真的？OK？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （啊哈～太好了……）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （幸好他没有无视我，叫我一个人去之类的）
        - 善信松了口气，有些开心的捏了捏 %YOU% 的肩膀
        - 在 %YOU% 有些疑惑的视线里，善信找好了前往温泉旅馆的路线
        - divider: true
          content: 温泉旅馆
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哎呀～果然温泉真是最棒的了！」
        - 已经享受过了温泉之后，善信放松的坐在房间里，上半身轻飘飘的左右晃动着
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我在比赛的时候还挺容易撞伤的，泡温泉的治疗效果相当好哦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「努力到今天真是太好了～」
        - 这样说着的善信又轻轻的伸个懒腰，长长的舒了一口气
        - acc: 1
          content: 「真的是辛苦你了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，训练员也是呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你一直陪在我的身边训练我，一定很累了吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天我们两个就不要管其他的事情，悠哉悠哉地休息吧～」
        - 和太阳神%THEY%在一起的辣妹风善信很棒，但原本的%SEX%也是很棒的谈话对象
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊对了，刚才泡温泉弄湿的毛巾我拿去晾了，晾干之后你拿去用吧」
        - acc: 1
          content: 「嗯，谢谢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦，对了！训练员你要喝茶吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我先泡好，再把它放凉一点吧」
        - acc: 1
          content: 「嗯，拜托你了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，交给我吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - acc: 1
          content: 「……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这个对话的感觉……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「感觉好像在家里……！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明明正在温泉旅行，却像是在家里一样！？」
        - 像是在家里一样，完全不用装模作样，而是放松下来让人感觉非常舒适……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊啊～讨厌啊～就这样安静下来的话就会完全融入这个氛围的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这不是和旅行一点都不像了嘛！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，度假感不够！」
        - 善信用力的直起身，突然间正经了起来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「就是要更加更加地嗨起来才行嘛～」
        - 虽然在 %YOU% 的眼里，善信只是拿出了其实完全没必要的干劲
        - 在这个时间之后，气氛立刻就变的微妙了起来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员，晚饭……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，不对，是和风晚餐来咯！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦哦，快看快看，这个生鱼片！感觉好有生鱼片的感觉哦～」
        - acc: 1
          content: 「毕竟就是生鱼片嘛」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「然后～火锅的味道超棒～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「来个合作节目，把米饭和乌龙面一起放进去怎么样～」
        - acc: 1
          content: 「啊，好，等收尾的时候……」
        - 和风的旅馆在善信的努力下变成了派对会场，然后——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，训练员！那边有按摩椅耶！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「看起来超嗨的～！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要试试看把按摩强度调到爆强之后在坐上去试试看吗～」
        - acc: 1
          content: 「你先请？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好～那我去坐坐看！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「碰到这种东西，有派对之魂的人就是要率先享受才行嘛！」
        - 善信用轻快的脚步跑到了按摩椅前，轻巧的调整好了姿势
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只坐一次可不够，把我换的一堆零钱全都投进去！」
        - 一大把硬币落进面板里，响起了机械运动的声音
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「接下来……爆强按摩！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「开始！！」
        - 随着善信的声音落下，按摩椅也开始了超大的运作声
        - 超大的震动声下，连同善信的表情也立刻扭曲了起来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好痛啊，训练员，这个太不妙了！！」
        - 按摩椅的声音还在继续，善信也发出了奇妙的声音
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊！要死！要死了啦！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「逃跑……我要爆逃了啊啊！！」
        - 虽然善信的声音很有气势，但是运气似乎有点不妙
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哇啊啊啊，衣服上的蝴蝶结！缠在椅子上了！！这下完啦！！」
        - 一阵沉静之后，又闹的天翻地覆
        - 就这样，夜色逐渐加深了
        - 好不容易脱离了按摩椅的魔掌的善信，软乎乎的趴在 %YOU% 的身上
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不妙，好像玩的有点太过了啊，哈哈……」
        - 善信脸上的笑容有点勉强，直到躺回房间里也没什么力气的样子
    - if: era.get('cflag:65:66') === 1 && era.get('relation:65:0') >= 0
      acc: 2
      content: 「也叫上太阳神怎么样？」
      lines:
        - 三个人一同搭上列车，前往了温泉旅馆
        - 只是在享受过温泉的温暖之后，确是一个人泡完温泉出来了
        - 不是温泉不舒服，是隔壁的动静实在有点吵闹
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「我要来挠痒痒咯～！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不要啊太阳神！要沉下去啦！」
        - 对于隔壁的吵闹声，%YOU% 也只能无奈的当作没听见
        - 还是惯例的先去拿杯牛奶好了，反正%THEY%应该也要出来了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯？训练员也出来了吗？」
        - 正当 %YOU% 把牛奶拿起来的时候，背后正好传来了善信的声音
        - acc: 1
          content: 「我早就出来了，刚才……」
        - 忍耐许久的 %YOU% 看向善信的方向，却把即将出口的话收了回去
        - 平时有些帅气的单马尾此时沾着水珠垂在肩上，破坏了平时大大咧咧的形象，重重触动了 %YOU% 内心的某个部位
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员？泡晕了吗？」
        - 善信可不知道 %YOU% 在想什么，只是像平时一样自然的走了过来，自然的往 %YOU% 头上伸手碰了碰
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯？没有很烫……唉？怎么越来越烫了？」
        - 察觉到手上不自然的温度，善信才呆呆的看着自己的手，感受着手上逐渐升温的感觉
        - 有些发愣的 %YOU% 站在原地，脸上逐渐发起高温
        - acc: 1
          content: 「还是快点把衣服穿好吧，别着凉了，快点快点」
        - 慌慌张张的推开善信，刚刚想要回头缓缓的时候，却反而被善信抓住了手
        - 仍旧认为只是身体不适的善信，有些强硬的握紧了手指
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不行，现在训练员你不舒服吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「以前都是训练员你来帮我，现在就让我来照顾你！」
        - 抓着 %YOU% 的手一把拉了回来，却看见了满是绯红色的脸
        - 安静的房间里只有两个人，更显得气氛有点尴尬
        - 虽然善信并没有意识到这一点，还想拉着 %YOU% 往一旁的长凳坐下
        - 看着事态逐渐奇怪，%YOU% 的思考飞速转动起来
        - acc: 1
          content: 「话说，太阳神呢，怎么没看见%SEX%」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「太阳神还在里面泡呢，说是想在游一会……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……不对啦，训练员你又在岔开话题了」
        - 岔开话题失败，只能任由善信自然的和 %YOU% 的身体贴在一起，用额头贴上去试着温度
        - 只是%SEX%那么一低头，却正好看见了什么高昂的存在
        - 两个人之间此刻除了心跳以外，再没有其他的声音
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哇，哇哇……」
        - acc: 1
          content: 「那个……不是善信你想的那样的……」
        - 绯红色传染到善信的脸上，慌张的往旁边退了一点
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （训练员是……对我……不对不对，这只是生理现象，一定不是训练员的主观意识，嗯，训练员是很正直的人，一定是这样的）
        - 压下心里异样的感情，往身旁看过去
        - %YOU% 坐在哪里，眼神同样在往善信这边看过来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，没问题吗？」
        - 胡思乱想之后，善信选择了装作没有异常的样子
        - 安静又有点诡异的气氛维持在两个人之间
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （你在想什么啊善信，现在不就是出击的时候吗，鼓起勇气啊！）
        - 不知道思考了多久后，善信才用手轻轻拍了拍自己的脸，再次看向 %YOU%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个！训练员是……因为我才变成这样吗？」
        - 在提问之后迎来的回应确实 %YOU% 的一言不发，仅仅是在沉默的看着
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （沉默就是确定，阿城那么说过）
        - 下定决心的善信朝着 %YOU% 的位置靠了过去，手上却还是有点不安的撩起落下的头发
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那训练员你……心里是怎么样的呢？」
        - acc: 1
          content: 「那自然是……喜欢的啊」
        - 听见答案的善信有点惊喜的抬起头，转向 %YOU% 的方向
        - 两个人的脸此时此刻是那么的接近，只要在往前一点，就会夺走互相的嘴唇
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「way！温泉真是超舒服的耶！」
        - 太阳神站在门口，看着两个人不停咳嗽的样子
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「唉！？着凉了吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没有，只是那个……咖啡牛奶！呛到了而已！」
        - 敷衍过去的善信看着大拓太阳神去拿自己的饮料，好不容易松了口气
        - 装作无事发生的样子，有点尴尬的确认了一下大拓太阳神听不见之后才靠到了 %YOU% 的耳边
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我听说，这里有混浴的温泉」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「所以之后……晚点再一起吧」
      # 爱慕+6

################################
# 随机事件
################################

lunch_break:
  title: 错过午休时间
  lines:
    - 刚刚来到食堂的 %YOU%，第一眼便看见了不知为何正在忙碌的善信
    - 带着一点好奇心，淡定的坐了下来偷偷看着
    - 赛%UMA%A「善信～你听我说～我妈妈她啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么什么？怎么了？全部和我说吧！～」
    - divider: true
      content: 一段时间后
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦，没有其他有烦恼的人了吧？那接下来是我期待已久的午餐时光啦～」
    - 善信很欢快的动了起来，准备去拿自己的午餐的时候
    - 上课的钟声很是时候的响了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等等，午休也太短了吧！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的午餐——！」
      # 干劲down，体力-50

#经典年后外出时随机出现
dis_talent:
  title: 距离感的天才
  lines:
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……选这边才对吧？」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「不对，才不是咧」
    - 善信和 %YOU% 在外出后回程的路上，顺路去了购物中心，正巧遇到了这对罕见的组合在烦恼的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗨～你们在做什么呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「礼物区……所以是要送给某人的礼物？」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「哇！你，你怎么突然凑过来」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为你们看起来很烦恼的样子啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「别看我这样，我对现在的潮流很了解的哦，说不定能帮上你们的忙！」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……那就拜托你了，我已经想到累了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「原来如此，因为晨光同学刷新了个人最佳记录，所以想要送礼物给%SEX%」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「结果两个想法一致的人就在这时候刚好碰上了！」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「……要是礼物重复就糟了，所以我们就想着一起买比较好」
    - acc: 1
      content: 「结果因为意见不合选不出来」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，那我们先去看看，你们各自认为不错的礼物怎么样？」
    - 善信热情的拍了拍两人的肩膀，在商场里走了起来
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……%SEX%喜欢香蕉，要送就送香蕉吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊～送喜欢的东西比较好呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我觉得就不错啊，是哪里不好呢？」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……好像是现在不合适」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯～现在不合适是……因为体重的事情吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「状态好到能刷新个人最佳纪录，要是因为点心造成体重增加导致状态变差就不好了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这就是大进温柔的地方吧～」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「才，才不是！」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「我只是不想让晨光的努力白费！」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「这样说够明白了吧！」
    - 解答了成田白仁的问题之后，一行人走向成田大进想买的礼物所在的店里
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「我觉得，那件黑色衣服不错……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯嗯！看起来很成熟，很适合晨光吧？」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……这是贺礼吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊～毕竟是贺礼，所以买颜色更亮一点的衣服更好吗？」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……可是」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是～没有替代反感，所以也无法强烈否定」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「我以为是因为我们的品味不同……原来是这样啊」
    - 善信就像是翻译一样，在两个人中间左右拉扯，帮双方磨合意见
    - 店员「谢谢光临！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎呀，能顺利决定真是太好了，晨光一定也会很开心的！」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「嗯……虽然这个能帮到晨光……」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……但感觉还是太普通了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是没问题的吧？因为这是你们认真考虑之后选的～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%总是说这种美发造型品很有效，也不会妨碍比赛！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且……体贴对方的心，一定能透过礼物传达给对方的！」
    - 看着成田白仁和成田大进离去的身影，善信才和 %YOU% 一起走上回程的路
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎呀～事情顺利解决了呢！太好了太好了」
    - acc: 1
      content: 「你扮演了完美的中间人呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈，其实我没做什么啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%从一开始，为晨光着想的心都是一样的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我只是把%THEY%的意见清楚表达出来而已！」
    - acc: 1
      key: select
      content: 「这可不是简简单单就能做到的事情」（好感+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「咦～你真会夸人呢，%SELF_CALL%都要害羞了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过训练员你也很厉害啊！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你为了不让我迷茫，一直都引导着我！」
        - acc: 1
          content: 「那我们是彼此彼此咯」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没错～」
        - 就这样，在 %YOU% 和善信充满欢乐的谈笑中，踏上了归途
    - acc: 2
      content: 「你让我学到了一课哦」（爱慕+2）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊哈哈，还挺令人兴奋的呢，毕竟平时都是训练员在指导我」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过……既然你都说成这样了……从今以后，要叫我善信老师吗？」
        - acc: 1
          content: 「好的，善信老师～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「抱歉，还是算了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我的能力配不上这个称呼啦，太难为情了」
        - acc: 1
          content: 「没这回事哦，善信老师」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「别再说了啦～」
        - 善信鼓着脸，想要打断 %YOU% 的玩笑
        - 在两个人的玩闹中，踏上了归途

#进入资深年后外出时随机出现
choice:
  title: 终极选择！
  lines:
    - 在某个平平无奇的假日，善信和 %YOU% 一同出门采购的时候——
    - 善信的手机突然响了起来，似乎是有什么信息的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咦，多伯传了信息给我，是发生什么事了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯哼，让我看看……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天要去电视台录节目，但是我太紧张了，感觉自己没法好好说话」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦，多伯是今天要去录制节目啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要是早点来拜托我就好了，%SEX%就是太过努力了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱歉，训练员！我要过去一下！」
    - 可能是时间凑巧，也可能是那边真的很急
    - 善信刚刚收起手机，就再一次响起了提示音
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咦，又来了，多伯%SEX%很着急吗……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？不是耶，这次是光明的？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……我在电车上睡着了，醒来发现到了陌生的车站」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「偏偏是在这个时候！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊～该怎么办？要是放着光明不管的话让人很担心啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是，我也不能放着多伯不管……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜哇，要怎么办……」
    - 平时总是在对待人际关系上游刃有余的善信一反常态的陷入了混乱中，不安的左右踱步
    - 或许这个时候由 %YOU% 来代替%SEX%作出决定比较好
    # 任意选择速度+15
    # 在队内时速度+25，好感+25
    - acc: 1
      key: select
      content: 「我们去帮多伯吧」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「多伯……可是光明……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对了！阿尔丹今天应该有空！」
        - 善信脸上突然开朗起来，打开手机给目白阿尔丹打去了电话
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「——啊，喂？阿尔丹？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「有件关于光明的事情想请你帮忙！」
        - 在电话另一头的阿尔丹答应之后，善信和 %YOU% 一起火速前往了目白多伯所在的电视台
        - if: era.get('cflag:59:66') !== 1
          lines:
            - 然而——
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「红灯！啊哈……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「在这种时候碰到红灯会让人着急呢～」
            - 好不容易越过一个红灯，却被下一个红灯拦住了
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「啊呀，又是红灯？今天运气真差啊……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「唉，那边也是红灯！？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「啊……这样下去，可能会来不及吧？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「没办法了，抱歉，训练员！我去%UMA%专用的跑道！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「谢谢你陪我！」
            - 善信毫不犹豫的走上%UMA%专用的道路，朝着 %YOU% 摆出不好意思的手势之后，朝电视台的方向跑去
        - if: era.get('cflag:59:66') === 1
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呼，看来是赶上了录影时间了」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我看看，多伯在哪呢～」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「善信！抱歉，麻烦你赶过来……不过，谢谢你」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「我本来以为自己一个人没问题，但到了真要摄影的时候，我……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「啊哈哈，我懂我懂！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「其实我也很容易紧张呢～」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「唉，善信也是吗？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「当然的啦！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「会担心能不能好好说话，有没有说什么奇怪的话之类的」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不过，最后都能顺其自然的啦～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「采访的记者是这方面的专家，而且这又不是直播～」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「这样啊……嗯，也是呢，只要冷静下来的话……」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「谢谢……我感觉自己能做到了……！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「这样啊！……嗯嗯，太好了～」
    - acc: 2
      content: 「我们去接光明吧」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「光明……可是多伯那边……」
        - acc: 1
          content: 「可以拜托莱恩吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，对啊！啊哈哈，我都忘了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「莱恩对多伯来说也是很熟悉的对像，这或许是个好主意呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，莱恩的电话是……」
        - 解决了目白多伯这边的问题之后，善信和 %YOU% 一起火速前往了目白光明所在的车站！
        - if: era.get('cflag:74:66') !== 1
          lines:
            - 然而——
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我记得是要在下下站转车来着，稍微休息一下吧」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「咦？那边人超多唉，发生什么事了」
            - 站内广播「——向各位乘客通告，目前因为电车内发生事故，电车抵达时间将有所延迟」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……喔，看来要等很久呢」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「怎么办，虽然叫车也可以……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不过这个距离的话，剩下的路可以用跑的吧」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「嗯，那我出发了！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「训练员，谢谢你陪我到这里！」
        - if: era.get('cflag:74:66') === 1
          lines:
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - 「善信～你来了啊～！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「幸好你平安无事～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「光明你还是一如既往的悠哉悠哉的呢」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不过，幸好没有比那时候还要远！」
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - 「那时候？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「以前你不是曾经做到青森去过吗？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「你打电话给阿尔丹……之后，大家花了好几个小时跑去接你」
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - 「阿拉……呵呵，是有过这种事呢～」
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - 「不过，我不会再坐到那么远的地方了，毕竟我也长大了呢～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「是吗……这样我也挺寂寞的呢」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「因为那时就像大家一起去旅行一样，感觉还挺开心的呢！」

# 爱慕低于74，太阳神爱慕低于49，随机触发
confused:
  title: 迷茫的恋爱心
  lines:
    - 特雷森附近的河堤边，总是有各位%UMA%在晨练中
    - 善信独自一人坐在河边看着，轻轻的叹着气
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - 眼神里反射着元气满满的%UMA%们在跑步的姿态，显得坐在这里烦恼的自己格格不入
    - 在善信的烦恼即将闷在心里的时候，能够照亮心情的太阳升起了
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「早上好！%65_CALL%！」
    - 从身后突然抱上来的大拓太阳神，用完全不带阴暗的语调照亮了善信的心情
    - 在大早上就全力拥抱许久之后，这才松开了有点上不来气的善信，在旁边坐下来
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「怎么啦？一早上就是这样的表情～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早上好……啊，表情很奇怪吗？」
    - 善信带着绯红的脸色，笑着看向身边的挚友
    - 只是笑容没有持续多久，很快就重新浮上了微妙的表情，低落的看着自己的双手
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「不妙，%65_CALL%的表情超不妙——」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「好啦好啦，发生什么事情了啦？」
    - 坐在一旁的大拓太阳神胡乱的摆动着双手，最后才真诚的抓住了善信的手臂
    - 蓝色与黑色交错的头发飘动在视野里，勾动了善信低落的心情
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实……其实也没有什么事情……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不，还是很大的事情啦」
    - 善信原本有点缩起来的身体微微的往身旁的大拓太阳神身上靠了靠，缓缓开口
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我啊，喜欢我的训练员，而且是那种……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那种完全没法回头的喜欢」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「啊咧？」
    - 听见了善信的烦恼之后，大拓太阳神反而尴尬的僵住了
    - 对着身边正在发抖的挚友，有点慌张的胡思乱想着
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「那个，%65_CALL%也不要那么，啊……」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「其实%65_CALL%直接……那个……」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「直接和%CALLNAME_65%说应该就行啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的？」
    - 在大拓太阳神选择放弃思考的时候，随口说出了答案，但却把善信原本低落的表情又点亮了
    - 黯淡的眼神里带着明亮的闪光，看着身边的挚友，似乎想要说什么又没有直接说出来
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「是，是的呀！%65_CALL%又帅气又可爱，肯定一下就能攻略训练员的啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「帅气……可爱……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是啊，训练员也说过的啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「他想要看真正的我之类的话……嗯？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （属于我自己的跑法，我自己的选择……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （就是……那样的我？）
    - 原本无力的手臂突然间有力起来，全身的疲软感也立刻消失了
    - 善信站起身，看着自己紧握的双手，连带着心情也激动起来了不少
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总感觉能行……！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「真的！？那就可以嗨起来……」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%65_CALL%，你的脸！超红的耶！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，有吗？」
    - 善信伸手轻轻挠了挠发红的脸，转过身去，看向河堤上奔跑的%UMA%们
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （既然训练员想看的话，那用那个样子……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （训练员，会喜欢的吧？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，我先去跑一跑啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢，太阳神！」
    - 在与激励自己的挚友道谢之后，善信开始了今天的晨练
    - 直到带着脸上不知道是害羞还是兴奋还是运动导致的红晕，和散步的 %YOU% 撞到一起为止

#爱慕＞74，满足睡奸条件
a_step:
  title: 向前迈出的一步
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近，训练员是不是有点冷淡了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难不成，训练员对我已经……！」
    - 双手有点颤抖的拿起自己的手机，翻到了 %YOU% 的电话
    - 只是在按下通话之前，又犹豫了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「直接打电话的话，会不会太过直接了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊啊……要怎么办啊！」
    - 善信独自抱着头，烦恼的左右踱步
    - 在不知道原地打转多久之后，似乎明白了什么一样停下了动作
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「逃跑吧！」
    - 在烦恼过后，得出了一个目白善信会有的结论
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不对，逃跑这种时候没用啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么办了啦！」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「啊咧，善信？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉，阿尔丹？啊啊有什么事吗？」
    - 善信在看清来人之后，惊慌失措的装作无事发生的样子
    - 可惜在这之前，目白阿尔丹就已经看见了
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「这个时候我觉得直接去和本人说会比较好哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？」
    - 装作轻描淡写的动作戛然而止，只是看着目白阿尔丹的笑容
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「直接去……」
    - 尾巴失落的轻轻摇摆着，双手不安的叠在一起
    - 目白阿尔丹轻轻的在善信的肩膀上拍了一下，做出了一个鼓励的表情
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「不去做的话，就一定不行，但是」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「只要善信你去做了，肯定会有回应的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「回应……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我知道了……我会去试试的！」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「嗯嗯～」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「话说回来，这是在烦恼什么呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？啊啊啊！没什么事！」
    - 善信带着满脸的绯红色，从目白阿尔丹的面前逃跑了
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「唉？」

# 粉丝袭击（爱慕＞74）
crazy_fan_end:
  title: 无力逃亡
  lines:
    - 已经不知道过去了多久，但是没有改变什么
    - 究竟过去了多久？早就不知道了
    - 到底是做过了什么？根本不清楚
    - 唯一的印象，就是在那一天看见那几位粉丝向着 %YOU% 跑过来的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，醒了吗？」
    - 善信坐在一旁，看着 %YOU% 的脸，平静祥和
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，我们该走了呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么时候能安定下来就好了呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过只要能够在一起，那就好了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，什么时候能和我再说说话呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的训练员啊」
    - 摸着冰冷的相框，却是笑了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只要你在啊，我做什么都可以啊……」