训练:
  - if: era.get('base:64:体力') < era.get('maxbase:64:体力') * 0.45
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「呀，就算是善信%小姐%也有极限的啦……」
      - %善信% 有点无奈的苦笑，却没有停下准备的动作。
  - if: era.get('base:64:体力') >= era.get('maxbase:64:体力') * 0.45
    lines:
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「怎么样，训练员？今天的善信%小姐%可是火力全开哦！」
          - 微微俯身在起点，眼睛透出认真的目光。
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「我现在超兴奋的……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「如果用高尔夫来比喻的话，就是绝对能打出超高分！」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「现在的我仿佛可以一直跑下去。」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「我要用爆速……不对，是用神速一直领跑下去！」
      - random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「嗯～大家都在努力呢～」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「看见这样的情况，连我都嗨起来了……很好！」
      - if: era.get('cflag:64:干劲') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「哼哼～精神状态绝佳！」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「开始今天的训练吧！」
      - if: era.get('cflag:64:干劲') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「哦呀，训练时间了吗？」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「那就全力的加油跑吧！」
      - if: era.get('cflag:64:干劲') < 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「偶尔……会想着干脆放空脑袋埋头挖地洞呢～」
          - 有点微妙的发出了轻飘飘的声音，一晃一晃的
      - if: era.get('cflag:64:育成回合计时') > 47 + 24
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「感觉嗨的不行了……」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: %善信%
              - 「为了更加的嗨起来，拜托你了，%称呼%！」

加练:
  - 训练时间结束，周围却还有其他的%马娘%在准备加练的声音。
  - %善信% 的耳朵听着周边的动静，饶有兴趣的抖了抖。
  - 虽然因为训练计划这个时候就应该休息了，但既然 %善信% 那么想去的话……
  - acc: 1
    content: 「想去的话就去吧。」
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「收到！那我就过去啦！」
      - %善信% 带着笑容跑回了训练场，毫无违和的加入了训练当中。
      - 这下不得不加班了呢。
  - acc: 2
    content: 「下次我们也这样吧。」
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: %善信%
          - 「了解！那今天我就尽情休息咯。」
      - %善信% 抱着后脑，顺便用手肘稍微敲打了一下身边的搭档。

训练失败:
  - 训练出了一点点小小的意外……
  - 紧急送往保健室之后让 %善信% 躺平在床上，这才放下心来。
  - %善信% 看着身旁正在担心的 %T%，不自觉的轻笑了起来。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「啊哈哈，不用担心啦，善信%小姐%身体还是很结实的啦。」
  - acc: 1
    content: 「这可不行，你给我好好休息」
  - acc: 2
    content: 「你自己愿意相信自己的身体比什么都重要」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「嗯，说的是呢。」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: %善信%
      - 「别担心，很快就可以下来的啦。」
  - 抬起手，轻轻的往 %T% 的胸口敲了一下。

通用赛前:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「准备完全！随时都可以上哦！」
  - 完全没有犹豫，在休息室里左右活动着肩膀，随时预备好了出赛的样子
  - 对于这样的目白善信，完全不必再多说什么担心的话
  - acc: 1
    content: 「开心地去跑吧！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「哦！收到！」
  - 朝着 %T% 比起一个大拇指，放松的走出了休息室

通用胜利:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「果然放开了跑最棒了！」
  - 善信大大方方的站在 %T% 的面前，擦着洁白的脖子上流动的汗珠
  - 双手在放松的伸过一个懒腰之后，自然的放在后脑抱着
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嘿嘿，也多亏了训练员呢～」

通用失败:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……输掉了啊」
  - 善信叉着腰，低落的看着地面
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真是的，我在做什么啊……」
赛事开场:
  # 出道战
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「果然，出道的比赛就是会紧张啊」
  - 善信看着站在身边的 %T%，紧张的贴在墙边
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「怎么办啊训练员，万一出道赛没有跑好的话……」
  - acc: 1
    content: 「没关系的，用善信你自己的方式来就好」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「用我自己的……嗯，我明白了」
  - 还在颤抖的身子已经逐渐停下，重新调整好了自己的身体状态
  - 摆正自己的呼吸之后，握紧了双手
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，用我自己的跑法……我明白了！」

目白善信登场！:
  #招募后休息
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员！我准备好了！」
  - 善信站在场上向着 %T% 招手，身体的状态也早就调整好了
  - 小小的跳动几步，证明已经准备万全
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「虽然只是这种程度的热身，不过也足够了吧」
  - 虽然热身的动作在周围所有人之中已经相当完整，但善信还是有点在意的看着自己
  - acc: 1
    content: 「我倒是觉得已经够了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉，是吗？啊哈哈……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「一直以来我都会觉得这样做还不够！之类的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「果然有人帮忙看着会好很多嘛！」
  - 看着这样的善信，%T% 的心里有些微妙的不安
  - 过去在训练场上的记录很多，只要有点心就能找到
  - 看过善信的记录之后 %T% 可以肯定%她%并没有%她%所说过的弱小，只是缺少了什么决定性的东西
  - 比如，那一天在比赛里用过的跑法？
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那，今天的训练是什么？」
  - acc: 1
    content: 「定训练计划之前先随便跑一跑吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉，随便跑吗？」
  - 善信的声音里透出意外的感觉
  - acc: 1
    content: 「当然，要用你自己喜欢的方式」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我自己喜欢的？但是那样的方式会被当成目白家里有一个特立独行的奇怪%马娘%吧，这可有点不妙呢」
  - acc: 1
    content: 「我签约的可是目白善信你啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉？什么意思？」
  - acc: 1
    content: 「我想要让善信跑出自己的风格……而不是被目白的名字限制」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「哈哈！是这样的啊！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真不愧是我的训练员！」
  - 善信的笑声很清脆，或许是真的很开心
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那，我就用我自己的方式去跑了哦？」
  - acc: 1
    content: 「嗯，我会一直看着你的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「一直看着什么的，这个说法感觉怪怪的呢……不过我很开心哦！」
  - 笑容是最美好的表情，而现在的善信脸上，是目前看来笑的最灿烂的一次

小小的流言:
  #进入新秀年5月1周
  - 训练结束之后，%T% 单独在自己的办公室里整理着资料
  - 善信很配合训练方案，所以才更需要去把方案的做的完美
  - 在工作进行到一半的时候，办公室的门被推开了
  - 前辈训练员「啊，你在啊」
  - 前辈训练员「你的搭档是那个目白善信对吧？」
  - 前辈训练员「怎么说呢……和那孩子搭档并不算是什么很好的选择」
  - 前辈训练员「按照我的经验来看的话，%她%不算很厉害的%马娘%，训练起来会很累吧」
  - 即便话不好听，但却听不出什么恶意
  - 也许并没有说错，但是这对 %T% 来说就是另一回事了
  - acc: 1
    content: 「就算这样我也没关系」
  - acc: 2
    content: 「但%她%是我的搭档」
  - 前辈训练员「不过我也只是随便说说，具体怎么样还是看你自己的想法」
  - 前辈训练员「加油吧」
  - 看着门被顺手关上，%T% 也只是笑一笑，继续做着手头的工作
  - divider: true
    content: 办公室外
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「原来还有这种事情吗……辛苦训练员了」
  - color: %代表色%
    content: 恰巧在门外听完了全程对话，又赶在被发现之前选择逃避
  - color: %代表色%
    content: 毕竟，逃跑才是目白善信擅长的领域嘛
  - color: %代表色%
    content: 这才是目白善信擅长的领域……
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我……逃跑了啊」
  - color: %代表色%
    content: 对着墙壁，无力地对自己说着

微妙的空间:
  #新秀年5月2周
  - 正在训练中的时候，即便不是专业训练员也能看出来了
  - 善信最近的奔跑有些微妙的变差了
  - 对于作为训练员的 %T% 来说，必须做点什么了
  - divider: true
    content: 训练结束
  - 训练时间结束的时候，善信单独留了下来，似乎有点郁闷的样子
  - acc: 1
    content: 「有什么事吗？」
  - acc: 2
    content: 「心情不好吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，嘛……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「也算是吧，大概」
  - 善信有点心不在焉的踢着脚下的草皮，眼神也在避开 %T% 的方向
  - 说不定……这是对 %T% 有意见？
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「怎么说呢～就是……」
  - 似乎和猜测完全不一样，善信苦恼的思考着想说的话，却又卡在嘴边说不出来
  - 直到似乎下定某种决心，这才把视线重新聚焦在 %T% 的脸上
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「前几天，我去找训练员的时候啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「听到了一些……关于我的事情啦，虽然没有听的太清楚」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员你有想过……其实我不算是什么很厉害的%马娘%之类的吗？」
  - acc: 1
    content: 「完全没有」
  - acc: 2
    content: 「怎么可能呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是吗……」
  - 善信有点落下的耳朵在收到%T%的话之后，立刻又立了起来
  - 心情不好的问题，大概已经是解决了吧
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呀～我还担心训练员你也那么想的话怎么办呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「结果只是我想多了啊～」
  - 仿佛是顺应耳朵反应出来的心情一样，语气也自然了起来
  - 原本有点绷紧的肌肉，也肉眼可见的放松下来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「谢谢你，训练员，这样相信我」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「本来我都做好准备重新开始了！什么的～」
  - 看着面前自然的笑脸，%T% 也跟着笑了起来
  - 毕竟发自内心的笑容是会传染的呢

要来自由赛吗？:
  #进入新秀年6月第一周
  - 平日的训练稍微枯燥了点，就连善信也有点无精打采的
  - 为了让善信散散心，两个人一起来到街上随便走走
  - 路过的%马娘%「那边有自由赛哦！」
  - 路过的%马娘%「要开始了吗？我要去看！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「自由赛？」
  - acc: 1
    content: 「好像是由业余%马娘%组建的街头比赛，不过我也是听说的」
  - 听完 %T% 的解释，善信有些兴趣的往刚刚跑过去的%马娘%们看去
  - （如果闪耀系列赛还是会紧张的话，要不要去自由竞赛看看呢）
  - 稍作思考过后，两个人默契的选择了向刚才的方向跑过去
  - divider: true
    content: 自由竞赛 赛场
  - 场地能够和URA的竞马场对比……做不到的
  - 虽然只是一个小小的临时场地，周围的观众热情却完全不输重赏比赛
  - 两个人站在观众的位置看着选手入场，心情也随着周围的声音高涨起来
  - 还没出道的%马娘%，已经毕业的%马娘%，甚至还有带着伤退役的前辈，都在起点做着热身动作
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好热闹啊……」
  - 整个场地的安排虽然不正规，但没有任何一个人是在意这件事的
  - 观众们都在仔细的看着比赛本身，为每一个奔跑的%马娘%送上欢呼声
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「如果我的比赛也能让大家这样就好了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「大家为我加油什么的……」
  - 主持的%马娘%「那边的%马娘%！你好像也很想参加嘛！」
  - 突然间插进 %T% 和善信之间的是刚刚还在主持比赛的%马娘%，此时此刻正在指着有些不知所措的善信
  - 主持的%马娘%「我们自由赛是不会过问出身的，只要有名字就好哦！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉！真的吗？！」
  - 善信的脸上浮出一阵平时的欢快笑容，有些兴趣的接过话
  - 对于拘谨于目白这个名字的善信来说，这应该是一次全新的体验吧
  - acc: 1
    content: 「那就去试试吧！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「了解！」
  - 收到鼓励的善信立刻握紧了拳头，跟着对方走下场
  - 只是在介绍自己的时候，稍微有点乌龙
  - 主持的%马娘%「那么，参赛的名字是！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （名字吗……）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （如果用目白的名字，肯定会吸引太多人的目光，而且奶奶还会说些什么的……）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （嗯，决定了！）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「叫我 善信 就好了！」
  - 主持的%马娘%「嗯，好像有点耳熟？不过无所谓！」
  - 主持的%马娘%「欢迎善信选手加入！」
  - 比起在学校的时候，善信上场的动作要自然的多
  - 虽然是有点紧张的样子，但是保持了淡定的姿态
  - 观众「善信？好像是那个家族的？」
  - 观众「有什么关系嘛，这里又不在意这些！」
  - 观众席上没有人在意善信的身份，只有对新参赛者的期待
  - 似乎感受到了周围纯粹的期待，善信也一点点的把心思都放到了赛道上
  - 跑在业余的跑道上，身边的其他选手也不是特雷森的顶尖选手
  - 对着这样的环境，善信毫不保留的笑了起来
  - 目白家的事情，闪耀系列赛的事情，特雷森的事情，全部都抛之脑后
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「果然，奔跑的时候……超开心的！」
  - 领先于全场，毫无悬念的成为了比赛的第一名
  - 主持的%马娘%「一着是！今天的新人，善信！」
  - 观众「善信！善信！善信！」
  - acc: 1
    content: （果然你就应该是这样跑的嘛）
  - 是听见了 %T% 的心声呢，还是听见周围在高呼善信的名字呢
  - 善信站在终点，向着观众席比起了两根手指，自然的笑了起来

逃亡者的开幕！:
  # 出道战胜利
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「超级畅快啊，训练员！果然用我自己的跑法才是我的方式啊！」
  - 下场的时候，善信站在 %T% 的面前兴奋的一蹦一跳的，号码牌下的身体也同样一蹦一蹦的
  - 直到稍微冷静下来一点，才紧紧的抓着 %T% 的手，认真的说出声
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「谢谢你训练员！没有训练员你的信任的话肯定做不到现在这样的！」
  - 看着现在兴奋的善信，%T% 也只是尴尬的挠了挠头，为现在正在开心的善信递过去一条毛巾
  - 相信%她%才是现在应该做的事情

名为目白的重压:
  #进入新秀年7月
  - 目白家，几乎没有训练员能够忽略的名门
  - 自然对于现在和目白善信已经签约的 %T% 来说，也是一座大山
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，那个……其实你不必说一定要跟过来的」
  - 善信有点不安的行走在特雷森的步道上，时不时回头看向身边的 %T%
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「而且也不是要回去本家，只是去和大家打个招呼，没必要那么紧张的啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「麦昆和莱恩%她%们肯定不会说训练员你有什么问题的，真的」
  - acc: 1
    content: 「不，紧张的不是我吧」
  - 轻而易举的戳穿了善信的话，两个人之间的交流突然就停了下来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……被发现啦？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过，确实是有点紧张啦」
  - 善信轻轻的用手指撩动两侧的头发，有些尴尬
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「毕竟麦昆和莱恩都是被大家寄予厚望的新星嘛，和%她%们站在一起的时候总是感觉……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「同样是目白家的%马娘%，还是同一届……只有我稍微，有点太弱了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「而且我这样欢脱的%马娘%也没法跑出%她%们那种优雅的感觉，稍微有点……」
  - 虽然没有说出来，但是善信想说的话已经和说出来没什么区别了
  - acc: 1
    content: 「目白的名字，真的很重要吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉？」
  - acc: 1
    content: 「善信就是善信啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不，这我知道，但……」
  - 善信的脸上挂上了一阵低落，连带着耳朵也一点点趴了下来
  - acc: 1
    content: 「就算没有目白的名字，我也认为善信你不是弱小的%马娘%」
  - 虽然很缓慢，但善信的耳朵确实是悄悄的立了起来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「谢谢……总感觉又有信心了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「之前训练员你说过，适合我的跑法对吧？」
  - 善信有些唐突的岔开话题，但 %T% 很清楚这是什么意思
  - 暂时从这个话题里逃离吧
  - acc: 1
    content: 「是啊，那才是适合你的跑法」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那，做个约定吧，训练员」
  - 突然停下脚步，微风吹过脸庞带动了善信轻飘飘的头发
  - 被突然停止的动作打断，停在善信身前回过头
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「用这样的跑法去赢下比赛……作为训练员相信我的回报怎么样？」
  - acc: 1
    content: 「那我会一直期待那一天到来的，善信」
  - acc: 2
    content: 「那一天我一定会在你的身边的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过现在才刚刚出道呢，也不用那么急对吧，啊哈哈……」
  - 带着放松的笑声，善信小跑了起来
  - 越过 %T% 的位置，朝着校外跑去
  - 毕竟今天还有聚会呢，要加快脚步了

新年抱负:
  #进入经典年1月1周
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「新年快乐，训练员！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「终于到了呢，新年～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊咧，太阳神呢？」
  - acc: 1
    content: 「%她%今天不会过来吧」
  - 善信的表情有点发愣，但很快又淡定了下来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真的？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这样的话，今天的新年会就只有我们俩了呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总感觉有点怪怪的呢，毕竟平时我们都是三个人一起吵吵闹闹的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过，只要照平时那样子过就好了对吧？一年之计在于始～什么的！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总之要来做点什么吗？要来一场年菜BBQ，还是给舞狮画睫毛什么的！」
  - acc: 1
    content: 「年菜BBD！？」
  - acc: 2
    content: 「唉，我们这里有舞狮吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没有啦～只是突然想到的东西啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「怎么可能会把年菜拿去烤的嘛，啊哈哈」
  - 在 %T% 的惊讶中，善信很快又收回了自己的提案
  - 果然只有两个人在一起的话，善信就没法放开自己变成平时派对咖的样子
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，对了！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「虽然说今天不用训练啦，但我还是想决定一下新年的目标呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「像是今年要跑的比赛之类的！嗯，今年的大活动有什么呢……」
  - 不知为何，善信的表情变得有点阴郁了起来，像是陷入了什么思考之中
  - 这个时候就该轮到作为训练员的 %T% 登场了
  - acc: 1
    content: 「那就是经典三冠了吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……经典三冠啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「超～级有压力的名字啊！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……不过也是呢，我终于到了这个年度了啊～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「时间真是残酷呢，不管有没有才能，只要在同一年就会被绑在一起」
  - 原本有点放松的脸上浮出一点低落，就算只是看着也能感觉到压力
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「本年度最强的选手，大概是莱恩吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「目白家最受期待的速度之星……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「要和%她%同台竞技什么都，就算只是玩笑我也不想去想象啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「虽然我也很努力啦，但实力的差距还是有点……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「超不妙的现实啊！不过，我能做的事情也只有一个！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我们逃跑吧，训练员！」
  - acc: 1
    content: 「逃跑？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，逃离现实！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「有抱负是很好啦，但新年一开始就这样的话，我又会变回过去那个样子了吧！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「有没有什么开心的事情……能让人感觉到解放感的事情呢～」
  - 把脸上低落的样子收起来，重新回到一开始的样子，认真的思考起来
  - 逃避现实的方法，感觉到解放感，开心的事情……
  - acc: 1
    content: 「务农！」（速度+20）
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「务农！没错，只能将这爆发出来的青春情感发泄到田地上了！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那么我们换好衣服就出发！全速出发！」
      - 虽然学校里有田地，但是善信的干劲还是让 %T% 有点没想到
      - 看着善信喊着不知在哪听见过的句子，换上运动服向着外面跑了出去
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊啊啊啊啊！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呼，呼，怎么样训练员，这片景色！」
      - acc: 1
        content: 「好厉害，一下就全部做好了」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「这是我的特技之一，挖洞！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我从小就很擅长这个哦，要论耕田的速度我可是不会输的」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那么，这就开始逃避吧！热情冷却下来再见咯，训练员！」
      - acc: 1
        content: 「啊，善信！」
      - 汗流浃背的 %T% 试图拉住善信，但是已经展现过特级的善信没几秒就没了影
      - 新年的开始，是善信的令人意外的特技表演
  - acc: 2
    content: 「去商店大买特买！」（体力+100）
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「大买特买！好主意！我们现在就过去吧！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「这个时期也差不多要开始降价促销了！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「其实我早就有想要买的东西了呢，就去买下来释放压力吧！」
      - divider: true
        content: 商店街
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「训练员你看，这件高尔夫球衫，超棒的吧？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「既然都来了，那买下这件之后一起去悠哉地打场高尔夫怎么样？这样也能散散步」
      - 沉迷进眼前的高尔夫用品，善信一时间忘记了即将到来的比赛，悠闲的享受了起来
  - acc: 3
    content: 「去咖啡厅喝点什么？」（技能点数+20）
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「咖啡厅！也是呢，聊天和甜品肯定能让头脑充满电！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「走吧训练员！我也久违的想要喝那个了！」
      - divider: true
        content: 咖啡厅
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我看看，想这样把冰红茶和柠檬水调和在一起……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「完成！这就是我最爱的原创特饮！」
      - acc: 1
        content: 「你经常这样做吗」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「嗯！不过在家的时候经常被说这样很没规矩啦，但我还是无法罢手」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不过这个只是我个人喜欢的搭配啦，还有其他组合的，训练员想喝吗？」
      - acc: 1
        content: 「既然有这个机会，当然要！」（好感+10）
      - acc: 2
        content: 「可以要善信你手上那杯吗？」（爱慕+2）
      - 苏打水和牛奶，可乐和柠檬茶
      - 每个组合都意外的美味
      - 善信和 %T% 一起享受了各种特调饮料

三冠要怎么办啊！？:
  #进入经典年3月1周
  - 偶然一次遇见善信的时候，少见的没有带着开朗的笑脸，也没有和其他人打招呼
  - 直到低着头走路撞到了 %T% 的胸口才反应过来，像是吓到了一样抬起头下意识的道歉，这才看见撞到的人是谁
  - acc: 1
    content: 「发生什么事了？」
  - 听着没有指责之意的提问，善信又低下了头看着自己手指的小动作
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没什么事啦，那个……」
  - 低着头看着依旧在乱动的手指，但却被前方伸过来的手抓住了
  - 对比起自己正在发寒的手，抓住自己的那双手却是相当温暖
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （和训练员说的话……也没有关系吧？因为是，训练员嘛）
  - 停止手上的动作，抬起头看着自己的搭档
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「就是有关三冠的事情啦」
  - 松开了紧紧抓着的手，稍微思考了一下自己的措辞
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，你看，距离三冠……皋月赏很近了吧？」
  - acc: 1
    content: 「确实很快了……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「所以啊，你看三冠怎么说都是很重要的比赛对吧？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「当然我也很在意！但是啊……我还是很担心啊，毕竟目白家会很看中这个的对吧？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「要是输掉了的话，会被说成是目白家的耻辱对吧？所以，正在犹豫要不要参加」
  - 虽然开口了，但是善信的声音越来越小，失去了平时自信的样子
  - acc: 1
    content: 「那善信你呢？你是怎么想的」
  - 善信的身体稍微抖了一下，看着 %T% 的眼睛也逐渐移开
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「像我这样子实力不济的赛%马娘%，就算参赛也没什么意义吧？也学习不到什么，这样想的话……」
  - acc: 1
    content: 「那就逃跑吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「逃跑……吗？」
  - 善信的表情转向了疑惑，但很快又笑了起来
  - acc: 1
    content: 「没错，逃跑，然后去寻找你的答案！」
  - 短暂的沉默之后，善信带着欢快的笑声擦掉了眼角的泪水
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「说的是啊，果然先逃跑才适合我嘛！」
  - 善信似乎已经完全没有再因为三冠的事情而难受，只是重重的吸了口气，切换好了心情
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「答案，我找到了！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那个时候如果心情好的话，我就会参加的！」
  - 不管周围的其他人，精神的和 %T% 对上了眼神
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那个时候你会陪我的吧，训练员？」
  - acc: 1
    content: 「没错，我会一直看着你的」（好感+10）
  - acc: 2
    content: 「我会一直等着你的，善信」（爱慕+2）
  - 善信脸上的表情微微改变了一点，抬起的手臂在 %T% 的胸口轻敲了一下
  - 原先笑容里的阴郁感已经消失不见，只有属于%她%的，自信的笑脸

迎向皋月赏！:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「怎么办啊训练员……头脑一热就一口气到这了，要是对不上目白家的名字的话要怎么办啊！」
  - 善信很是激动的样子，虽然正在说的话充满了不安
  - 看着外面的赛道，即使善信不说也能感觉到此刻%她%的身体正在微微颤抖
  - acc: 1
    content: 「害怕吗？」
  - acc: 2
    content: 「激动吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯……也许是吧，不过已经决定好要上了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我就一定不会退缩的，绝对」
  - 听见 %T% 的声音，善信颤抖的身体停了下来
  - 抬起手轻轻抓着 %T%，轻轻的深呼吸
  - 再抬起头的时候，已经换回了自信的样子
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，谢谢」
  - 满是笑容的松开手，走出选手通道

总之先拿一冠！:
  # 皋月赏胜利
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真的赢了耶，训练员！」
  - 休息室的空间里，因为胜利者的归来而吵闹起来
  - 欢快的声音在两个人的空间里响起，不见一点停息
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「也多亏了训练员你呢」
  - acc: 1
    content: 「嗯？什么？」
  - 善信看着 %T% 的脸，心里有些复杂的情绪卡在喉咙里说不出口
  - 短暂的闭嘴之后，没有再继续沉默
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没有训练员的话，我肯定不会站在这里吧」
  - 房间里热闹的声音消失了
  - acc: 1
    content: 「但这是你的胜利啊」
  - 善信的表情再次回到了一开始的笑容，紧紧抓住了 %T% 的手
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是我们两个人的胜利啊，训练员！」

输了也没关系！:
  # 皋月赏失败
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「失败了呢……哈哈，果然我不是什么很厉害的赛%马娘%呢」
  - 靠着休息室的墙，眼神在看着 %T% 和看着地板之间循环
  - 汗水在脸上一点点流下，像是眼泪一样
  - acc: 1
    content: 「但是你努力了对吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是努力了，但是……」
  - acc: 1
    content: 「重要的是善信你自己努力过了，而且比赛不只有这一次啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是这样吗？」
  - 善信还在躲闪的眼神锁定在眼前的 %T% 身上，不再有一开始的悲伤
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但下次，我就能赢吗」
  - acc: 1
    content: 「那就以下一场比赛必须胜利作为目标吧」
  - 一开始难过的表情已经消失，取而代之的是坚毅的模样
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是啊，不是难过的时候了啊」
  - 站直身的善信吐了口气，擦去了脸上的汗水
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「下次也拜托你了，训练员！」

姐妹亦是对手1:
  #进入经典年5月1日，同队目白莱恩且不在同一年时不会触发
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「哦，日本德比快到了啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「今年的德比，说不定会很惊喜呢……」
  - 善信躺在办公室的沙发上，有点无聊的刷着手机
  - acc: 1
    content: 「惊喜？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「毕竟啊，今年可是有莱恩在哦」
  - 善信关闭手机，蹦跶着走到了 %T% 的身边
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「虽然三冠的事情我没什么想法啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过莱恩%她%不一样哦？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%她%可是从一开始就在为了三冠路线努力的，德比的时候肯定会大放异彩的！」
  - 虽然声音十分明亮，但是却感觉少了一点什么
  - acc: 1
    content: 「那善信你呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉？我？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「德比的话……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我去德比什么的，没关系吗」
  - 原本就没有多少的信心在善信的自言自语中一点点消散，有点失落的后退了两步
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……如果那个时候，有心情……自信的话」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我就去和莱恩，试试看吧」

姐妹亦是对手2:
  #进入经典年5月1日，皋月胜利，同队目白莱恩且不在同一年时不会触发
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「哦，日本德比快到了啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「今年的德比，嗯～要不要试试看呢」
  - 善信躺在办公室的沙发上，一边刷着手机一边把视线向着一旁扫过去
  - acc: 1
    content: 「有心情了吗」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊哈哈……只是说说啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「毕竟啊，今年可是有莱恩在哦」
  - 善信关闭手机，蹦跶着走到了 %T% 的身边
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「虽然三冠的事情什么的，我是没什么想法啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过莱恩%她%不一样哦？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%她%可是从一开始就在为了三冠路线努力的，德比的时候肯定会大放异彩的！」
  - 虽然声音十分明亮，但是却感觉少了一点什么
  - acc: 1
    content: 「那你不准备去吗」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉？我？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不行不行，虽然皋月的时候随着感觉上了，但是德比就」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我去德比什么的，还是有点……」
  - 原本就没有多少的信心在善信的自言自语中一点点消散，有点失落的后退了两步
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……如果那个时候，有心情……自信的话」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我就去试试看吧……经典路线什么的」

迎向日本德比！:
  - 日本德比，三冠的第二站
  - 对于能够参赛的任何%马娘%来说，都是一场无法忽视的盛会
  - 自然，现在在这里的善信也是一样的
  - 承载着身后的目光，一扫之前对这场比赛的恐惧，光明正大的站在场上看着前方
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「仅此一次的参赛机会……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「心情澎湃啊，训练员！马上就要出场了！」
  - 身体不再像之前那样因为不安而颤抖，而是因为激动的心情而兴奋
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「安心吧训练员，现在的%自称%啊，肯定不会输的！」
  - acc: 1
    content: 「那我就等着好消息了」
  - acc: 2
    content: 「嗯，我相信善信」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯！我会用我自己的方式，一口气把胜利紧握的！」
  - if: d.sats_sho === 1
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「皋月赏也成功了，德比肯定也没问题……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「全力逃跑啊，我！」
      - 背对着 %T%，猛的抬起头，带着自信的表情走向赛场

幸运的逃跑者:
  # 日本德比胜利
  - 一直以来，传闻日本德比会由最幸运的赛%马娘%夺得桂冠
  - 而今天，目白善信就是最幸运的
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「赢啦！果然自信的时候，就会变得幸运起来啊！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%自称%的努力，全都实现了啊……」
  - 看着自己颤抖的双手，善信有些不相信的抬起头看着眼前同样心情澎湃的 %T%
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真的超开心的啊！自信的跑完比赛的感觉」
  - acc: 1
    content: 「没错，这就是善信你的实力啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是这样吗？嘿嘿……谢谢！」
  - 抬起激动的双手，轻轻与训练员的手掌拍在一起

运气稍微……:
  # 日本德比失败
  - 一直以来，传闻日本德比会由最幸运的赛%马娘%夺得桂冠
  - 换句话说，今天的善信并没有那么幸运
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊哈哈……%自称%今天的运气不是很好呢」
  - 垂头丧气的回到休息室，看着自己
  - acc: 1
    content: 「善信，没关系的」
  - 听见 %T% 的声音，善信轻轻向着声音的来源转过去
  - 随着视线一点点往前，直到看见前方的另一个人
  - 伸出手抓着 %T% 的手，传来了冰冷的触感
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我明白的，所以……至少让我先这样，休息一下」

前往函馆纪念！:
  - 站在函馆赛场的休息室里，等着目白善信
  - 不知为何今天的善信来的特别晚，来到了休息室也有些扭扭捏捏的样子
  - acc: 1
    content: 「善信？」
  - 听见 %T% 的声音，善信有点不自然的坐下，视线也左右乱飘着
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，怎么说呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「函馆这边的话，我还是很熟悉的，就是那个……」
  - 眼神在空中飘动了半天，但始终没有落在 %T% 的身上
  - if: era.get('love:64') < 50
    color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「就是，比赛结束之后，训练员你要和我一起去玩吗？」
  - if: era.get('love:64') >= 50
    color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「结束之后，能和我约会吗？」
  - 善信的眼神偷偷的往一旁飘动，想要偷看 %T% 的反应
  - 看着这样的善信，%T% 只是为没有异样的%她%松了口气
  - acc: 1
    content: 「当然可以」
  - 听见答复的善信脸上挂上了笑容，自然地推开了门
  - if: era.get('love:64') < 50
    color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我很期待哦！」
  - if: era.get('love:64') >= 50
    color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我会全力回应你的，训练员！」

观光准备:
  # 函馆纪念胜利
  - 胜利归来的善信看着早就已经在门口等着的 %T% 差点没忍住一把拥抱上去，不过还是介意自己刚刚结束比赛的一身汗水
  - 站稳脚步之后，对着已经等在这里的 %T% 比起了胜利的手势
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「久等了！%自称%帅气的奔跑，看见了吗？」
  - acc: 1
    content: 「嗯，很帅哦！」
  - 听着搭档的赞美，善信的笑容更是灿烂
  - if: era.get('love:64') < 50
    lines:
      - 踏着欢快的脚步像跳舞一样绕过 %T%，走进了休息室
      - 从没关好的门里探出头，稍微顿了一下，似乎思考着什么
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「等到胜者舞台结束，就一起走吧？」
  - if: era.get('love:64') >= 50
    lines:
      - 踏着欢快的脚步像跳舞一样靠近到 %T% 的身前，拉起了手
      - 维持着双腿合并的站姿稍微顿了一下，脸上似乎浮上了一阵高温
      - 往后退了一步拉开距离，溜进了休息室，用一个看不见脸的姿势朝着 %T% 开口了
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不是已经约好了，等会要一起……在这边走走嘛」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「胜者舞台之后，我们一起走吧」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「至少回去之前……要陪我哦」

故乡时光:
  #函馆纪念赛前赛后均触发之后，同回合任意外出触发
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总感觉，好像很久都没有回来了啊」
  - 胜者舞台结束之后，善信欢快的拉着 %T% 漫步在街道上
  - 可惜的是时间有些晚了，有些店面已经关门了
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不妙，果然等到胜者结束还是有点晚了啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「抱歉啊训练员！果然应该其他时候来的……」
  - 刚刚胜利的喜悦被有点阴暗的街道稍微冲散，耳朵也尴尬的拉了下来
  - acc: 1
    content: 「我不介意哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真的？」
  - 拉下来的耳朵猛然弹起来，眼神也带上了一阵闪光
  - 虽然周围已经暗了下来，但善信淡蓝色的瞳孔显得格外明亮
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这样的话……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，应该还有吧！」
  - 善信在 %T% 的面前自言自语了两句之后，拿起了手机
  - 小跑两步拉开距离，轻飘飘的对着话筒小声说了几句
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯嗯！拜托了！」
  - 似乎已经结束了通话，善信一蹦一跳的又走到了 %T% 的身边
  - 双手捉住了 %T%，向着一个方向直直的走去
  - 被拉着慢跑了几分钟，出现在两个人眼前的是一间普普通通的小店，在一片黯淡里显得有些奇怪
  - 不过在善信推开门的时候，就已经说明了全部
  - 店里只有一位友善的大叔在这里，端出了早就准备好的小吃
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「3Q啦大叔！果然还是和以前一样嘛！」
  - 善信把 %T% 推上座位，自己也自然的在一旁坐下
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「以前我很喜欢来这里哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「家里虽然很好啦，但……要怎么说呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「以前在这里的时候啊，总有一种格格不入的感觉呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「所以我还挺喜欢找这些小店的哦」
  - 善信带着明亮的笑脸，没有一点阴郁的感觉，和刚才说的话仿佛完全不相干
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但是！那已经是过去的事情啦！」
  - acc: 1
    content: 「你现在已经没有那种感觉了吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……已经没有」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，其实还有一点啦」
  - 善信吃下嘴里的萝卜，笑着回应了 %T% 的话
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过，我已经决定了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我不止要跑出自己的跑法……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「还有属于我的活法！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，这样说是不是有点怪怪的？」
  - 带着一幅有点害羞的表情，再咬下一口热热白萝卜

夏季合宿（经典年）开始:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呼呀～！我的暑假到啦！！」
  - 暑假——也就是夏季合宿
  - 对赛%马娘%来说，这是用来强化实力的重要活动，然而——
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「%太阳神称呼善信%！这个夏天就跟我大玩特玩，然后从现在开始寻找全新的自己～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没错！我的重启生涯，就拜托太阳神你啦！」
  - 对于善信来说，是重新开始的夏天
  - 蜕变成不再害怕失败，勇于冒险的全新%少女%
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「不过%太阳神称呼善信%，因为目白家的缘故，所以从小就必须要跑对吧？」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「但真的就只有跑步吗？你应该还有跑步以外的梦想吧？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「跑步以外的梦想啊～这么一说的话，嗯……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「即使是%马娘%，也有很多人没去比赛呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「老实说，我不知道」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，我可以从这部分开始重新开始吗？」
  - acc: 1
    content: 「当然」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「假如，我是说假如啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我想追寻比赛以外的梦想，也可以吗？」
  - 对于善信的提问，%T% 的回答自然也只有一个
  - acc: 1
    content: 「去做你想做的事情吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好，我明白了！我会在这个夏天做很多事情，去找到想做的事情的！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「太阳神！也拜托你了！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「让这个夏天变成超热闹的派对吧！」
  - 不仅仅是作为目白家的%马娘%，也作为目白善信去寻找

夏季合宿（经典年）途中:
  #跟随合宿时进入8月2周，同队有大拓太阳神时，太阳神/善信好感相互增加30
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「北海道露营！噢耶！！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呜呼！超嗨的！」
  - 三个人在夏季合宿的空档期里，造访了北海道，享受了一段时间充满户外活动的生活
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「%太阳神称呼善信%你看！我感觉我要钓到大家伙了！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，一定会的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「剩下的就是慢慢的等待，不要有额外的动作……」
  - 河流边，大拓太阳神拿着鱼竿紧紧的盯着水面
  - 善信就站在一旁，表情有点微妙的看着
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「FuFu～可爱的小鱼来啦～哦耶耶～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊～要是那么大声的话……」
  - 似乎是大拓太阳神的声音有些大，钓钩上的小鱼立刻就被吓跑了
  - 三个人一同看着眼前的空钩，表情显得十分失落
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「呜哇，被逃掉了～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊哈哈……毕竟是钓鱼嘛」
  - 收好鱼竿，重新回到了营地
  - 一扫没有上钩的心情，重新对着面前的午饭燃起了热情
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「BBQ～BBQ～然后再来是——炒面Fu～！」
  - 炒面发出滋滋响声，香气四溢
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「好好吃～%太阳神称呼善信%，这里面放了什么？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「配菜里有韭菜和马铃薯之类的，调味料也是随便放的啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过味道挺不错的吧？」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「该怎么说？纯朴好吃？家常感？」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「三餐都吃这个也不会腻啦！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这样啊，太好了～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员你也吃吧，趁热哦」
  - acc: 1
    content: 「嗯！」
  - 善信做的铁板炒面是非常常见的口味，一点露营野炊的感觉都没有
  - 如果要形容，可能是平时 %T% 能吃到的口味吧
  - 也正因如此，这平凡的美味才能令人安心
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那我就喝喝看，太阳泡的咖啡味道如何！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯嗯！？这一颗一颗的是？」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「珍珠咖啡～」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「现在热卖中哦！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉，是珍珠吗！啊哈哈哈，太阳神你是天才嘛！？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「该怎么说，我们的露营虽然乱七八糟的啦，但还是挺嗨的呢！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不妙，我可能会考虑一直这样生活下去哦！」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「哦哦哦！不错嘛，%太阳神称呼善信%！」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「那就干脆不跑了，直接做自然系的UMATUBE网红怎么样？」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「标题就用……嗨起来，派对式露营！怎么样？」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「就以爆红后登上黄金时段节目为目标之类的！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「UMATUBE网红！感觉很棒呢！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这或许也很不错呢！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「以北海道为舞台，拍趣味影片！说不定能拍很多企划呢！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员你觉得那种影片会火起来？」
  - acc: 1
    content: 「农村……」（力量+10）
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「农村！要用派对的方式建农村嘛？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「虽然会很辛苦啦，不过这种应该也很不错呢！」
      - 虽然只是 %T% 没经过考虑就出了口的提案，却出乎意料的被当成了正经路线
      - color: %太阳神色%
        content:
          - fontWeight: bold
            content: 大拓太阳神
          - 「噢耶噢耶！」
      - color: %太阳神色%
        content:
          - fontWeight: bold
            content: 大拓太阳神
          - 「把地从头到尾都耕一遍～」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我的好亲友～差不多该吃午饭了吧？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「今天用刚抓到的鲑鱼，来开个鲑鱼派对吧！」
      - color: %太阳神色%
        content:
          - fontWeight: bold
            content: 大拓太阳神
          - 「……感觉这样的话手臂会啪的一下爆掉耶～」
      - color: %太阳神色%
        content:
          - fontWeight: bold
            content: 大拓太阳神
          - 「这样子就不是比快，而是比臂力了耶！～」
      - 只是听着大拓太阳神的讲述，%T% 就已经感觉自己的肌肉鼓动起来了
  - acc: 2
    content: 「耐寒比赛……」（根性+10）
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哦！耐寒比赛！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「比谁更能忍耐吗？这附近的冬天超冷的呢，而且还会下雪哦」
      - 在 %T% 嘴里钻出了异想天开的想法，但善信很明显是听进去了，眯着眼想象着冬天的样子
      - color: %太阳神色%
        content:
          - fontWeight: bold
            content: 大拓太阳神
          - 「嗯——%太阳神称呼善信%，这会不会太冷啦？来点干劲吧？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呜呜呜，干劲～根性～」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不妙，感觉脑子里的雪兔正在过圣诞夜……」
      - 没过几秒，善信就睁开了眼睛
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「感，感觉会很艰苦……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不过我对自己的意志力很有自信哦，我能忍！」
      - 虽然善信说的时候很自信，但 %T% 是意识到了的
      - 这里的冷和特雷森的时候完全不是一个等级，说不定真的能锻炼根性的样子
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……不过大自然真不可思议呢～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我还是小孩子的时候，只觉得空无一物的户外……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……结果根本不是这么回事嘛！只要想做，什么事都能做得到！」
  - 在大拓太阳神的注意力转去其他地方的时候，善信才独自看向面前的自然环境
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （没错，要在这里做什么，是由我来决定的）
  - divider: true
    content: 数日后
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「哈啊～已经早上了啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （这一切都好快乐，不管是钓鱼，采集，做饭还是拍短片）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （我是自由的，做什么都可以！做什么都能生活下去！）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （但，这样的话……）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我——真正想要做的事情是什么？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （闭上……眼睛……问问我自己……）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （我想做什么？我真正的想法是什么？）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （内心的声音，从根源传来的呐喊……）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （如果我是自由的，那，我要做什么……？）
  - 沉在自己的思绪里，聆听着自己的内心
  - 在黑暗中，逐渐传出了一丝熟悉的声音
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这声音是……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「——风？」
  - 善信的耳朵灵巧的跳动了几下，感受着风的声音
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「就和风一样！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （风好舒服！空气洗净了肺部，日出的阳光也……拂过肌肤……！）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （不需要思考对手和终点，只要这样子跑下去就好！）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「随心所欲的跑下去！喝啊啊啊啊啊啊啊！」
  - 在睡眼朦胧的 %T% 眼里，是日出下带着笑容奔跑的善信
  - 在朝霞中，%她%忘我的奔跑着，自然又朝气蓬勃，而且——十分美丽
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呼，呼……训练员，我知道了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……我喜欢奔跑」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「跑的快慢都无所谓，只要放空内心奔跑就好！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我刚才之所以在跑步，并不是有什么目的……而是看到眼前的景色，我的双腿，我的内心就自己动起来了！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「所以我一定——是喜欢奔跑的！」
  - acc: 1
    content: 「是这样啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，就是这样的！」
  - 善信和 %T% 对着彼此笑着，已经不需要多说什么
  - 已经找到了内心想法的善信，笑的无比自然
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，训练员，你能看到后面的羊蹄山吗？」
  - 听善信这一说，%T% 转头一看便看见了那座山
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 故乡的山
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「以前看到那座山，我就会有点害怕」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总感觉它再叫我好好的，认真跑」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……像是被压迫一样」
  - acc: 1
    content: 「那现在呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嘿嘿，现在啊～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「还是很怕！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……不过，没有以前那样害怕了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「因为……虽然不是很厉害啦，但我今天跑出了毫无掩饰的，最真实的跑法」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「今天的我之所以跑，是因为我想要跑！」
  - 善信带着笑脸，故作开玩笑的样子

夏季合宿（经典年）结束:
  - 夏季合宿结束了，因为大拓太阳神的存在，善信的这个夏天可以说是过的十分充实
  - 在这段时间里，发现到自己真正想要的东西就是——想要跑步
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没错，我喜欢奔跑！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「从今往后，我都想要一直奔跑下去！」
  - 善信的脸上带着无比的自信，但却有点担忧感
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「可是啊训练员～只是这样就好了吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「看着%她%们的样子，总感觉只是这样的话不太行呢～」
  - 顺着善信的视线，%T% 也有些疑惑的看过去
  - color: %麦昆色%
    content:
      - fontWeight: bold
        content: 目白麦昆
      - 「终于要到了……菊花赏」
  - color: %麦昆色%
    content:
      - fontWeight: bold
        content: 目白麦昆
      - 「我最擅长的，长距离G1比赛……」
  - color: %麦昆色%
    content:
      - fontWeight: bold
        content: 目白麦昆
      - 「无论如何都要取得胜利！」
  - color: %麦昆色%
    content:
      - fontWeight: bold
        content: 目白麦昆
      - 「然后，向着明年的天皇赏春……」
  - 麦昆站在海边，倚着护栏默默看着自己紧握的双手
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「你看，麦昆的决心非比寻常不是吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「在比较实力强弱之前，对比赛的想法就不一样了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……跟%她%相比，我就只是喜欢跑步而已」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「而且，我还不太清楚……我是不是真的喜欢比赛这件事」
  - 随着善信一字一句的叙述，声音也逐渐小了下去
  - 轻轻的捂着自己的脸，有点担忧的看着 %T%
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这样子，我还可以摆出一副，我们都一样～的表情去参赛吗……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……容易想的太多是我的坏习惯啊～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这好像超越我的思考能力了，唉唉……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，抱歉」
  - acc: 1
    content: 「嗯？为什么？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总觉得很抱歉啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我只要注意到这些事情，就没法脱离出来了」
  - 因为自己没有像目白麦昆那样子的决心，也没有对比赛的执着
  - 这样子的自己，令善信失去了最开始的自信
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「因为我想要跑，所以去跑」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「明明只要这样就够了，可是……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我或许是那种多愁善感的类型吧，抱歉」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我是个麻烦的人什么的……」
  - 眼神有些低落，逐渐落到自己不安的手指上
  - 或许善信真的是那种多愁善感的类型吧
  - acc: 1
    content: 「我觉得多愁善感也没什么不好」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「哎呀，用不着这样宠我的啦～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「都是因为你这样，我才会忍不住和你撒娇哦？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……不过，既然都这样说了……那就先继续依赖你一阵子吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「还有啊……」
  - 虽然脸上还有点失落感，身体却已经诚实的靠到了 %T% 的肩膀上
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「在这段时间里，我会找到的……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「找到我的道路！」
  - 原本落下的耳朵逐渐立起，眼神里也带上了精气神

迎向菊花赏1:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「长距离的比赛，还是第一次……」
  - 善信坐在休息室里，看着自己微微发抖的双腿
  - 长距离G1比赛，也是三冠的终点，对于每一个%马娘%都是极其重要的
  - 对比此时此刻的善信，%T% 只是走到了身前伸出了手
  - acc: 1
    content: 「很紧张对吧？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「当然紧张！但是啊，比起紧张更加多的是激动啊！」
  - 快速抬起头看着 %T%，激动的上下挥舞着小臂
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这场比赛的话，目白家的大家也会看着吧……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我会用我自己的方法，证明我超厉害的！」
  - 善信握紧双手，朝 %T% 的肩膀击出一拳
  - acc: 1
    content: 「明白，我会在观众席看着的！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯！看好属于%自称%的跑法吧！」

迎向菊花赏2:
  # 已取两冠
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「菊花赏……不妙，心里的鼓动停不下来！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「长距离的比赛，还是第一次啊！」
  - 善信坐在休息室里，看着自己微微发抖的双腿
  - 长距离G1比赛，也是三冠的终点，对于每一个%马娘%都是极其重要的
  - 对比此时此刻的善信，%T% 只是走到了身前伸出了手
  - acc: 1
    content: 「很紧张对吧？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「当然紧张！但是啊，比起紧张更加多的是激动啊！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「一开始还有点害怕的三冠路线，现在就快拿下了啊！」
  - 快速抬起头看着 %T%，激动的上下挥舞着小臂
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这场比赛的话，目白家的大家也会看着吧……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我会用我自己的方法，证明我超厉害的！」
  - 善信握紧双手，朝 %T% 的肩膀击出一拳
  - acc: 1
    content: 「明白，我会在观众席看着的！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯！看好属于%自称%的跑法……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「以及三冠达成的那一刻吧！」

逃跑者归来！:
  # 菊花赏胜利
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呀呼！赢啦！」
  - 以自己的跑法成功获得第一的善信，并没有干脆的停下脚步
  - 一边奔跑，一边寻找着现在应该在观众席上熟悉的人
  - 顺着观众席的边缘跑过，直到选手通道前看见了搭档正在挥手的样子
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员！你看见了吗！」
  - 完全没有在意速度的样子，朝着 %T% 的方向冲刺了过来
  - acc: 1
    content: 「善信跑的很帅哦！」
  - acc: 2
    content: 「善信！先停一下！」
  - 大概是没听全，善信维持一开始的速度就这样撞了过来
  - 虽然有控制力道不至于撞飞 %T%，但还是猛朝后退了几步
  - 体温透过善信本就单薄的决胜服传过来，不知为何令人有些燥热
  - 刚刚结束比赛的汗味，在本人没有注意到的时候因为拥抱的缘故一点点飘进了鼻子
  - 说实话……就是有反应了
  - acc: 1
    content: 「善信，在这里有点……」
  - acc: 2
    content: 「善信，注意一下，注意一下！」
  - 似乎是注意到了周围的异常气氛，善信原先没有反应的脸上浮现了一点绯红色
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「抱歉抱歉，那个……是我有点过度反应了」
  - 松开了紧紧抱着 %T% 的手，有点尴尬的往后退了几步
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总之，我先去准备舞台了！」
  - if: era.get('love:64') >= 50
    lines:
      - 躲开所有人的视线躲进休息室，捂着自己仍在流汗的胸口
      - 明明决胜服的设计相当清爽，但是现在……为什么会如此燥热
      - 心脏跳动的感觉仿佛是还在赛场上一样，咚咚个不停
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「在做什么啊，我……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「明明是……普通的拥抱……」

一点悄悄话……:
  # 菊花赏失败
  - 比赛结束，休息室里的气氛也安静的令人不快
  - 努力之后却迎来了失败，这样的现实
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……」
  - 一言不发的善信坐在休息室里，低着头完全看不到脸
  - 等到了休息室的门打开，才有了动作
  - %T% 推开门走进来看着现在的善信，却难以找到说话的空间
  - 直到贴近身边的时候，善信才有了动作
  - 什么都没有说，只是站起来转过身，轻轻的把额头靠在 %T% 的肩膀上
  - acc: 1
    content: 「善信？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员……」
  - 声音很轻，但是在这个空间里显得格外明显
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「很努力了啊，训练员，我真的很努力了啊，强化自己的长处什么的，跑出自己的风格之类的……我都努力了啊！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我也想，跑出不负目白家之名的成绩啊」
  - 声音虽然小，但是听的很清楚
  - 不过，现在就让善信这样哭一会，比较好
三冠达成！:
  #获得三冠称号后休息
  - 皋月，德比，菊花
  - 经典年的三冠，全部入手
  - 善信和 %T% 并排站在办公室里，看着眼前的奖杯
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「怎么说呢，总感觉有点不真实呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「一开始还在想心情好了就参加什么的，结果变成了这样了不得的成绩啊」
  - 善信看着奖杯，有点飘飘然
  - acc: 1
    content: 「果然善信你很厉害啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉？是吗？啊哈哈……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过这也多亏训练员你啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「如果没有训练员你一开始的信任，那我大概不会参加的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「而且……」
  - 声音有点停顿，眼神在奖杯和身旁来回切换
  - 在 %T% 看不见的角落里，手指正交错在一起
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那个，就是说我自己的跑法啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没有训练员的话我应该会用其他的方法吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「所以我一直都很感谢你哦」
  - 尾巴在不停的摇摆，末梢不知不觉中已经碰到了 %T% 的小腿
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我说啊，那个……训练员」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「什么时候，就是，有空了的时候，和我一起回目白家……」
  - acc: 1
    content: 「有空的话，现在就可以」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉，现在吗？」
  - 善信猛的转头，表情有点愣
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「现在回去的话，奶奶一定会办超大的宴会的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「毕竟是三冠，肯定超级多人来的，搞不好会有好几天……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呀……我不是很擅长那样的场景呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「什么时候有空了，就我们俩一起回去啦」
  - 善信轻轻的抬手摸着后脑，掩饰着心里的一点不安感
  - 脸上轻飘飘的笑容带着心虚的眼神，偷偷瞄向身旁
  - acc: 1
    content: 「只有我们吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，我们两个人」
  - 用力的点点头，随后往身边小跳一步
  - 手指扶着窗台朝向窗外，嘴里嘟囔着
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「两个人一起去找奶奶，然后」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊咧，是不是有哪里不对劲……」

迎向有马纪念:
  # 经典年有马纪念
  - 年末最后的盛会，有马纪念
  - 2,500m 的长距离比赛，也是关注度最高的一战
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「果然这个时候还是会紧张啊……嘿嘿」
  - 因为兴奋而颤抖的身体，因为兴奋而激动不已的心情
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「最开始的时候还没有想过会来到这里呢，有马纪念」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不在意目白的事情，相信自己的跑法」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这些全部都是训练员你告诉我的呢」
  - 穿上决胜服的外套，堂堂正正的挺起胸
  - acc: 1
    content: 「要上咯，善信」
  - 听着 %T% 的声音，善信面对赛场的方向握紧了拳头
  - 脸上勾起自信的笑容，向着身后比起了大拇指
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「交给我！哎嘿」

有马纪念的超级逃亡者！:
  # 经典年有马胜利
  # 习得技能「大逃」
  - 即便是2500m的赛道也没有消耗完善信的体力，超过终点之后还在继续奔跑着
  - 迈着放松的步伐挥着手和观众席的人群打着招呼
  - 直到没力继续奔跑之后，才减速沿着观众席慢下来，停在了选手通道
  - 慢步走进休息室，靠在门板上看着自己正在发抖的身体
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这样的话，就不会被当成什么目白的累赘，而是目白善信了……」
  - acc: 1
    content: 「还在想这些事情吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呜哇！训练员！你听见了！？」
  - 善信被 %T% 唐突的声音吓了一跳，摆着夸张的姿势往身后大跳一步
  - 有些夸张的声音，像是要击破 %T% 的耳膜
  - 但善信很开心的样子，就无所谓了吧
  - acc: 1
    content: 「说实话……就算不是目白也无所谓的啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不是目白也无所谓什么的我自己也知道啦，不过偶尔还是会这样想的」
  - acc: 1
    content: 「你应该自信点，留下善信这个名字」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯嗯，我知道了！那么……」
  - 深吸一口气，换上了一幅更加符合善信自己的表情
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没错……是属于我的胜利啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「今天是是%自称%的胜利！怎么样？」

稍显遗憾的逃亡表演:
  # 经典年有马失败
  - 用自己的跑法赢下有马纪念，让场上的所有观众记住善信的名字
  - 不是目白家的目白善信，而是有马纪念的胜者，目白善信
  - 本来是这样想的，但现实并没有让善信就这样胜利
  - 看着一着的%马娘%开心的庆祝，心里还是无法就这样释怀
  - 视线从记分板上移开，转向观众席
  - 一直信任着自己的搭档一定会看着的吧
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员……」
  - 视线的另一头，%T% 就站在观众席的最前方，和善信对上了眼神
  - 垂着头走过选手通道，推开休息室的门
  - 看见 %T% 的一瞬间，快步的靠了过来低着头贴在身前
  - 轻微的哭泣声在安静的休息室里响起，随着善信的泪水一起
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「果然不行呢，我想要赢下有马纪念什么的……明明说的时候是那个样子……」
  - acc: 1
    content: 「善信……」
  - 听见 %T% 的声音，哭泣的声音停止了
  - 抓着 %T% 的手更加用力，完全不愿松开
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「就这样让我在这里……逃跑一会吧……」

新年参拜:
  #进入资深年1月1周
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「新年快乐～训练员」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「新年参拜！立刻去参拜超神的神明，大方的和它说新年一起嗨起来吧！」
  - acc: 1
    content: 「不知不觉间已经很习惯辣妹语了呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「当然！毕竟距离我和太阳在一起的时间也那么长了嘛」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「而且今年起我就是资深级的赛%马娘%了，也是时候在众多的观众面前展现排队风格的魅力了！」
  - 至今为止的善信一直都在努力，也累计下来了不少的成绩和经验，而且还看见了哪位小栗帽全力奔跑的姿态……
  - 各种各样的的经历将会化作%她%成长的力量，变成今年大展身手的因子吧
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊对了，训练员，我突然想到～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「如果要许愿辣妹风格的愿望的话，比起一般的神明还是去拜专门的神明大人比较好吧？」
  - acc: 1
    content: 「唉，真的会有吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没错，这个世界上有很多，感觉就像辣妹之神，派对之神一样的赛%马娘%哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「可以试着去参拜%她%们吧？现在就去试试看怎么样？」
  - acc: 1
    content: 「原来如此……说不定很有意思」
  - 比起在神社参拜传统的神明，或许去找%她%们能赋予我们现代风格的力量
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那我们就去找%她%们看看吧！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……不过话是这么说，这样的神也有很多种呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「像是很会玩的啦，长的很美的啦……要去参拜谁呢？」
  - 作为目标的神明大人不止一位，这个时候……
  - acc: 1
    content: 「大拓太阳神的女神」（体力+200）
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「太阳的女神啊……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊，对了，之前听%她%说，%她%有认知一位宛如天神般闪耀的赛%马娘%呢！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「前阵子被%她%冷待对待之后，还在大喊『大小姐好冷淡～！』呢，我还记得%她%的名字……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「好像是，大日如来？来着？总之我们先去参拜一下吧」
      - if: era.get('cflag:85:招募状态') === 0
        content: 大日如来……这个名字完全就像是神明一样的感觉，会是什么样子呢
      - if: era.get('cflag:85:招募状态') === 1
        content: 大日如来……这个名字完全就像是神明一样的……
      - if: era.get('cflag:85:招募状态') === 1
        content: 这个发音，有点熟悉的感觉？
      - divider: true
        content: 商场
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「啊，找到了找到了！难不成是那个人？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呜哇，什么嘛，一点都不像是如来嘛！超可爱！像个洋娃娃一样！」
      - if: era.get('cflag:85:招募状态') === 0
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「去跟%她%说说话……不，还是算了」
      - if: era.get('cflag:85:招募状态') === 1
        lines:
          - acc: 1
            content: 「其实……我认识%她%来着」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「唉？那不就正好吗！」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「那就去跟%她%说说话……不，还是算了」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「%她%简直是可爱到爆表嘛！还是就这样看着就好啦」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「呜哇～那孩子真可爱」
      - if: era.get('cflag:85:招募状态') === 1
        acc: 1
        content: 「可爱的话，确实」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「感觉光是看着%她%，心里就受到治愈了～」
      - if: era.get('cflag:85:招募状态') === 0
        content: 善信和 %T% 远远的站在一旁看着，感觉被那份可爱治愈了内心
      - if: era.get('cflag:85:招募状态') === 1
        content: 善信和 %T% 远远的站在一旁看着，只是 %T% 的心里浮上了一点说不出来的微妙感
  - acc: 2
    content: 「派对之神的始祖！」（全属性+8）
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「派对的神明大人……对了！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「好像很久以前就有所谓的派对咖了！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「其中算得上的始祖的就是……」
      - divider: true
        content: 舞厅
      - color: %丸善色%
        content:
          - fontWeight: bold
            content: 丸善斯基
          - 「嗨，小善信～」
      - color: %丸善色%
        content:
          - fontWeight: bold
            content: 丸善斯基
          - 「来一起跳舞吧，哼，哼～」
      - divider: true
        content: 丸善斯基，深爱昭和怀旧风格和泡沫时期文化的赛%马娘%
      - color: %丸善色%
        content:
          - fontWeight: bold
            content: 丸善斯基
          - 「嗯哼，你们想要从我这里get什么事情呢～」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「丸善姐，我想请你教我元祖的辣妹语」
      - color: %丸善色%
        content:
          - fontWeight: bold
            content: 丸善斯基
          - 「元祖辣妹语？让我想想……」
      - color: %丸善色%
        content:
          - fontWeight: bold
            content: 丸善斯基
          - 「无层次直发，紧身衣，湘南lover！」
      - color: %丸善色%
        content:
          - fontWeight: bold
            content: 丸善斯基
          - 「go～go～咻～咻～闪亮亮！」
      - color: %丸善色%
        content:
          - fontWeight: bold
            content: 丸善斯基
          - 「电玩中心付账，开襟衫当披肩！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哇哦，虽然搞不懂意思，但真是气势十足」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「原来这就是元祖辣妹语……！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「训练员，我好像也情绪高涨了！」
      - 拜见丸善斯基这位泡沫世代的神明之后，善信的情绪也欢快了起来
      - 虽然 %T% 并没有听明白……
  - acc: 3
    content: 「台球的神？」（技能点数+35）
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「台球之神……对哦，冷酷帅气系的也有啊！」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我们就去有台球场的地方到处看看吧」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「出发～」
      - divider: true
        content: 台球厅
      - color: %天狼星色%
        content:
          - fontWeight: bold
            content: 天狼星象征
          - 「吼～想请教我台球的人，就是你吗？善信」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「是，是的！这，这又是另一种类的辣妹风格呢……」
      - color: %天狼星色%
        content:
          - fontWeight: bold
            content: 天狼星象征
          - 「所谓的台球，简单了说就是伺机而动」
      - color: %天狼星色%
        content:
          - fontWeight: bold
            content: 天狼星象征
          - 「先让对方随便打，最后再由自己将球打进球袋，不过……」
      - color: %天狼星色%
        content:
          - fontWeight: bold
            content: 天狼星象征
          - 「我不喜欢那样」
      - color: %天狼星色%
        content:
          - fontWeight: bold
            content: 天狼星象征
          - 「你也喜欢那种不断攻击，不让对方有机会出手的风格吧？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「唉？所以是怎样？我只要照着做就好了吗？」
      - 不可一世的台球高手，天狼星象征
      - 善信从这位台球之神的身上，学到了各种各样的技巧……真的吗？

转换心情！:
  # 日经新春杯
  - 新的一年，新的心情！
  - 不管去年的状态是怎么样，也不管今年会变成什么样，总之先进入属于自己的节奏！
  - 这样想着的善信，毫无迷茫的走上了赛道
  - 贴在观众席的最前方，看着浑身上下充满元气的善信
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「哟！今天的比赛也要嗨起来哦！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「如果只是一场普普通通的比赛肯定会无聊的吧？所以就由%自称%来让今天的比赛变成超～大的派对！」
  - 观众席上的粉丝对着善信的发言稍微愣了一下，但是很快就有了反应
  - 虽然一开始只是被当成目白家的吊车尾，但现在也是有名的赛%马娘%了
  - 藏在热情的粉丝中间，对着台上热情的善信悄悄的送上了应援
  - acc: 1
    content: （……不过，善信的决胜服在这个角度的时候能看到整个小腹啊）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「各位！请看好了！我的全力逃跑！」
  - 善信在台上保持着单纯的样子，欢快的和场下的粉丝互动着
  - 毕竟是善信呢，超擅长读懂周围气氛的
  - ……希望不会读懂下半身的气氛
  - if: era.get('love:64') >= 50
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「……训练员！你也要看着哦！」
      - 不知为何，善信的突然对着藏在观众席中间的 %T% 喊了一句话
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「今天的%自称%可是状态绝佳！」
      - 虽然说只是很普通的说法，但不知为何那个眼神里有其他的东西
      - acc: 1
        content: （肯定被发现了吧……）
      - 大概是读懂了 %T% 的眼神，不过只是在其他人没有在意的时候稍微对着 %T% 摆了摆手
      - ……应该没有其他意思吧

全新的每一天！:
  # 日经新春杯胜利
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「爽快多了！果然嗨起来才是我的风格！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不去读气氛，不去在意其他的事情，只是跑起来就好！」
  - 不在意周围的目光，用自己的跑法结束比赛
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「怎么样训练员？今天很帅气吧！」
  - acc: 1
    content: 「那还用说！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「果然？嘿嘿！」
  - 善信有点不好意思的刮着不知为何发红的脸，有些飘飘然的在休息室里转着圈
  - if: era.get('love:64') >= 50
    lines:
      - 汗水在淡黄色的内衬边上流动，勾勒出曼妙的曲线
      - 善信的身材本身就很好，特别是在%她%这身可以算是暴露的决胜服衬托之下
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「怎么了训练员？表情很奇怪哦？」
      - 在 %T% 的面前挥了挥手，似乎没有察觉到视线的方向
      - acc: 1
        content: 「……」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那个，训练员？」
      - 随着善信的声音在耳边再次响起，意识才从眼前汗淋淋的小腹上回到身体里
      - 只是抬起来的视线并没有看见善信平静的脸，而是看见了善信有些玩味的表情
      - 脸贴着脸，呼吸在脸上轻轻拂过
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那么喜欢的话……可以再多看看哦」

不只是目白！:
  # 天春
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「天皇赏了啊……」
  - 天皇赏春对于目白家的意义不仅是一场G1，这件事两个人都很清楚
  - 但是对于现在的善信来说，并没有那一层意义
  - 两个人背靠在选手通道的墙壁上，肩膀贴着肩膀
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我说啊训练员，这个赛道真的能够全程领跑吗？」
  - 善信的意思是在疑惑，不过脸上的表情可没有一点不安
  - 带着自信的表情看着 %T%，耳朵一抖一抖的等着回应
  - acc: 1
    content: 「当然，我相信你！」
  - acc: 2
    content: 「你也很清楚能做到的，对吧？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「收到了！就让%自称%一口气冲到底吧！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「用和目白不相称的，属于我的跑法！让大家都嗨起来！」
  - 高高抬起手，对着 %T% 喊了出来
  - 转过身，离开选手通道走向赛场

是领放的胜利！:
  # 天春胜利
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呜呼！超级爽快！超级开心的！」
  - 善信完全没有在意场上其他人的眼神和声音，朝着此时此刻站在选手通道等着的 %T% 一路跑过来
  - 原本兴奋的想着庆祝的表情，慢慢的转向了其他的表情
  - 这个样子，似乎曾经见过
  - acc: 1
    content: 「善信！？」
  - 完全没有减速，目标明确的朝着 %T% 飞扑了过来
  - 勉强站稳，才有空闲把视线移向身旁大汗淋漓的善信
  - 甘甜的汗味冲进鼻腔，催动着高度跳动的心脏
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员！天皇赏春我赢下来了！」
  - acc: 1
    content: 「喂喂！善信！」
  - %T% 的声音很大，但善信就像没听见一样，依旧静静地抱着
  - 紧紧拥抱的双臂直到 %T% 的呼吸声已经开始被压住了，才后知后觉的松开
  - 虽然是因此而松开，但是脸上不见一点意外的感觉
  - 要说的话，就是故意的
  - ……不过既然是赢了，其实让%她%再抱一会也无妨吧
  - if: era.get('love:64') >= 75
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「我说啊，训练员！」
      - 善信的声音完全没有在意刚才的事情
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「要不要和我回目白家……试试看？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「现在的话……就是以目白善信的搭档的身份了哦」
      - acc: 1
        content: 「现在的话……？」
      - acc: 2
        content: 「那……我等你！」（好感+10）
      - 刚刚还用力抱着 %T% 的双手，现在有点羞涩的收在背后
      - 善信红着脸，弯腰贴近
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那，我就先去胜者舞台了……%玩家名%你要在这里等着哦！」
      - 虽然没有直接对上视线，但是能够看见微红的脸上是清澈的笑脸

不是主角也无所谓！:
  # 天春失败
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，输掉了！」
  - 善信带着满身的汗水，脚步轻盈的走进了休息室
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯——啊，果然这样还是有点难的啊！」
  - 用力伸了个懒腰，顺着力坐到了椅子上
  - 脱下决胜服的外套，轻轻往脸上扇着风
  - acc: 1
    content: 递水
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「谢谢！来得正好！」
      - 善信自然的接过水杯，一口气灌下一大口，甚至还有水珠在嘴角跑了出来
      - 紧绷的身体一口气放开，似乎冒出了一阵蒸汽
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「很久没有跑的那么开心了啊……不过好热」
      - 双手轻轻撑在椅子上支起上半身，往上方吐着气
      - 汗水沿着发丝低落在淡黄的内衬上，冒出一丝蒸汽
      - 将这样的善信尽收眼底之后，脑子里浮现出的第一个想法
      - 今天真的是很热啊，各方各面都是
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不过呢，没有什么负担呢」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「训练员相信我，而且输的时候也是用我自己的的方式输的」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「虽然难过啦，但并没有不爽什么的……这也多亏了训练员你呢！」
      - 善信的笑容很轻松，就和%她%所说的话完全一样
  - if: era.get('love:64') >= 90
    acc: 2
    content: 坐在善信身边
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「很久没有跑的那么开心了啊……不过好热」
      - 双手轻轻撑在椅子上支起上半身，往上方吐着气
      - 汗水沿着发丝低落在淡黄的内衬上，冒出一丝蒸汽
      - 今天真的是很热啊，各方各面都是
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「不过呢，没有什么负担呢」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「训练员相信我，而且输的时候也是用我自己的的方式输的」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「虽然难过啦，但并没有不爽什么的……这也多亏了训练员你呢！」
      - 善信的笑容很轻松，就和%她%所说的话完全一样
      - 清脆的笑声之后是一阵微妙的沉默，善信也悄悄收回了身后的双手
      - 顺着长凳一点点往一旁移过去，贴在 %T% 的大腿上
      - acc: 1
        content: 「善信？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「有点渴了，嘴里很干呢」
      - 手指顺着爬上腿，轻轻捏了两下
      - 不知是因为温度还是害羞而红透的脸慢慢贴近，干燥的嘴唇缓缓张开
      - acc: 1
        content: 「可以哦」
      - 善信的耳朵轻轻的抖了一下，闭上了双眼
      - 轻轻的贴上嘴唇，舌头跨越牙齿的防线索取温热的唾液
      - 柔软却又强硬，不由分说的入侵，仿佛是在寻找本就属于自己的东西
      - 灵巧的舌头夺取了 %T% 口中的水分，拉出一根莹白的丝线
      - 离开对方的舌头舔干净了嘴唇边上残留的水分，轻轻喘着气
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「多谢款待……」
      - 放在大腿上的手收了回来，顺着 %T% 的脸摸过一下
      - 站起身把双手背在身后，藏起此刻已经停不下来的心动
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「晚点和我一起回去目白家……可以吗？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「说不定，剩下的部分也可以哦？」

总之先相信！:
  # 资深年宝冢
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「相信自己的跑法，相信自己的能力……我明白的！」
  - 善信站在闸门前，握紧成拳的手放在胸口
  - 轻闭的双眼睁开，看向眼前的赛道
  - acc: 1
    content: 「善信！加油！」
  - %T% 的声音从观众席传进善信的耳朵里
  - 善信的耳朵小幅度的抖了抖，才转向观众席
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员……嗯，我听见了哦！」
  - 想着自己的声音或许传不过去，只是高高举起了握拳的手
  - 向着那一边的搭档，比起了胜利的手势

虽然有点难过但无所谓！:
  # 宝冢胜利
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「耶！我赢了！」
  - 元气的声音在胜利的时刻响起，伴随声音的是顺势跑过来的善信
  - 向着观众席上为自己欢呼的观众用力挥着手，直到没力才放下来
  - 周围的声音结束之后，善信才回到了休息室里
  - 对比刚才的善信，现在只是一言不发的关上了门
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那个啊，训练员」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「能摸摸我吗？」
  - 善信的表情还有胜利的余韵，只是眼神中浮出了一点喜悦之外的情感
  - acc: 1
    content: 「发生什么事了？」
  - acc: 2
    content: 摸摸善信的头
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……谢谢你，训练员」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「刚才的观众席……目白家的大家都不在啊」
  - 看着善信在 %T% 的怀里心情有些波动的样子，没忍住抬起手轻轻的抚摸起来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……不过，是训练员你的话让我放下心的哦」
  - 尾巴压不住的左右乱晃，脚尖也有些不安的敲打着地面
  - acc: 1
    content: 「大家一定都在看着你的比赛」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我也是这样想的啦，只是稍微有点难过而已」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我明白的哦，不过……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「算啦！想那么多超累的啦！」
  - 大声打断了自己的思绪，站直了身
  - acc: 1
    content: 「你不是已经很明白了吗」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，已经无所谓了！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「而且，重点是我已经做到了啊！」

夏季合宿（资深年）开始:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呀呼～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「夏天！海边！派对的季节到啦！～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「说起来，去年我们也是这样大闹了一番呢～」
  - 善信刚刚从大巴车上下来，就已经压不住心里的兴奋感喊了起来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 和大拓太阳神的组合为了即将到来的天皇赏秋，决定在这次合宿做足准备
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过，天皇赏秋啊～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「麦昆肯定会参加的，还有……」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「是哦！不过今年会更加，更加～热血的吧！」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「毕竟为了天皇赏秋，大家都干劲十足耶！」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「今年似乎会有很多厉害的%马娘%齐聚一堂呢」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「啊，这不是生野嘛！你好嘛～有干劲嘛～还是老样子带着眼镜呢～」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「是的，我基本上全天都带着眼镜，除了睡觉以外」
  - 突然插进对话中的生野狄杜斯完全没有突兀，很自然的加入其中
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「生野，关于今年的天皇赏秋……你知道什么吗？」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「是的，我知道一些情报」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「首先是内恰说要参加，同时我也会参加」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「啊～内恰和生野！」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「根本就是自家人的万圣节派对嘛！」
  - 暂时忽略了大拓太阳神打趣的动静，继续回到比赛这边
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「自然，麦昆同学也会参加，还有就是……」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「那个东海帝王，也会出场」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「东海帝王……麦昆的劲敌啊」
  - 目白麦昆，东海帝王……只要这两位明星登场，绝大部分的话题焦点都会被%她%们俩抢走吧
  - 众星云集的天皇赏秋，却没有给善信的镜头，这说不定会影响%她%的发挥……
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「帝王要参赛，麦昆也要参赛！这不是超棒的嘛！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不管是谁，全都一起来吧！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我！啊，是我们不会害怕的！没错吧，太阳神～」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「喔耶～完全不会害怕哦！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不管来的是怎么样的对手……最闪闪发光的肯定是～」
  - 目白善信&大拓太阳神「我们的友情！喔耶耶耶耶！～」
  - 面对本应充满压力的比赛，善信的脸上却没有一点紧张感
  - 过去的阴霾已经不再围绕在%她%的身边，此时此刻……
  - 只剩下嗨翻天的夏天在等着了！

夏季合宿（资深年）结束:
  - 伴随即将结束的夏天，祭典开始了
  - 而热爱派对的各位%马娘%，自然也没有放过这个机会
  - 目白善信&大拓太阳神「喔耶～首先是村子的祭典，然后是～」
  - 欢快的话音刚刚响起，天空就升上了几颗明亮的星星
  - 夜空中亮起了巨大的烟花，照亮了所有人望向天空的脸
  - 目白善信&大拓太阳神「超嗨烟火，碰～啪！」
  - divider: true
    content: 次日
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好——！今天也一起跑吧，搭档！」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「好啊，%太阳神称呼善信%！」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「和喜欢的人一起跑，疲劳就等于零～」
  - 目白善信&大拓太阳神「预备～出发！！」
  - 善信和大拓太阳神相亲相爱的一起奔跑着度过了剩下的时间，看起来非常开心
  - 直到合宿最后一点时间结束，两个人才停下来
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「啊啊～真的假的～合宿到今天就结束了嘛～？」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「我们的夏天没了哇～～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「同感～我还想多跑一点的说」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过呢，我一直想跟太阳神你朝着同样的目标奔跑，一起度过夏天」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「哦哦，一起往夕阳冲去之类的～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过啊～这之后不是有正式比赛吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「在那边才更是嗨的不行！对吧？」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「没错！天皇赏秋！」
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「两个人一起嗨翻天～喔耶喔耶～！」
  - 两个人一同高亢的欢呼着，唯独站在一旁看着的 %T% 有点尴尬，把视线移向同样在注视着%她%们的另一个人
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「……」
  - acc: 1
    content: 「生野狄杜斯同学……？」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「……没什么，我只是有点在意，%她%们刚边跑边说的……」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「——疲倦等于零理论」
  - acc: 1
    content: 「……居然是这件事？！」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「是啊，如果那理论是真的就没问题了……但这是不可能的」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「勉强自己的心或者身体，总有一天会影响到自己奔跑的」
  - acc: 1
    content: 「你在担心%她%们吗」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「不是，%她%已经越跑越好了，我不觉得有什么担心的地方」
  - color: %狄杜斯色%
    content:
      - fontWeight: bold
        content: 生野狄杜斯
      - 「没错……善信同学是不需要担心的」
  - 听着生野狄杜斯确信的说法，%T% 也把视线再一次转向正在打闹中的善信和大拓太阳神

就用属于我的跑法！:
  # 资深年天秋
  - 天皇赏秋当天，并没有很好运的碰上一个好天气
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呜哇，这个地面，湿答答的耶」
  - 虽然说马场不至于到跑不了的水平，但是一大片的泥泞看着还是有点夸张
  - 如果就这样跑完这场比赛的话，说不定全身都会沾满吧
  - 但是%她%一定会去跑的，%T% 是这样相信的
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这样的话，跑完比赛之后一定很不妙吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但是！没有关系！」
  - 善信握紧拳头，用力挥了挥
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这是和太阳神约好了的比赛，我是不会害怕的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「无论什么样的场地，都不会影响我的跑法！」

属于我的跑法和属于我的……:
  #持有依存心时天秋
  - 天皇赏秋的当天，善信看着并不算是明朗的天空
  - 嗨起来的想法是真的，想要大拓太阳神一起在赛场上驰聘的心情也是真的
  - ……但是却少了什么
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗨不起来啊……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员……不在吗？」
  - 站在赛场，却没有干劲
  - 身旁的好友们已经开始简单的放下狠话，走向闸门
  - 装作没有异常的样子，回应了前来问候的所有人之后走进了闸门，等待着开始比赛
  - 时间，在此刻缓慢了下来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……唉？」
  - 视线的角落里，是姗姗来迟的 %T% 在为%她%加油的样子
  - 赛场的风带着 %T% 加油助威的声音钻进了善信打起精神的耳朵里，点亮了%她%原本黯淡的眼神
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （是训练员）
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （训练员一直……都看着我啊）
  - 周围的声音停了下来，所有的%马娘%都在等待着闸门打开的一瞬间
  - 善信也紧紧看着前方，重新握紧了双手
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （训练员%他%……一直都在啊！）

呀呼！全身泥泞也完全无所谓啦！:
  # 天秋胜利
  - 逃跑成功！全速通过！
  - 全身沾满了步伐冲击地面溅起的泥水，但是沾满了泥土的脸上却是欢乐的笑容
  - 只是因为赢了吗？不止于此
  - 这个时候得先把身上的污渍先擦干净，不然会很麻烦的
  - 看着 %T% 手上的毛巾，善信也放心的抬起手把沾上土的决胜服外套脱了下来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员看见了吧，超——级痛快的！」
  - acc: 1
    content: 「确实，看得出来你很开心」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嘿嘿，不过好像有点嗨过头了」
  - 善信一只手有些尴尬的轻轻挠着后脑，的确是一幅有些反应过来了的样子
  - 毕竟今天的是有点过头了，洁白的毛巾已经沾满泥土快了
  - acc: 1
    content: 「没关系，赛后这些就是我的工作了」
  - acc: 2
    content: 「无所谓，能多接触一下善信的身体也不错」
  - 听见这一句话，善信不自觉的抖了一下，原本还在轻轻擦着侧腰的毛巾也滑倒了一旁
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊哈哈，那就麻烦训练员啦」
  - 嘴上在说道谢的话语，手上抓起了一边的毛巾装作随意的样子
  - 抬起来的双手悬停在半空胡乱擦拭，不知道该往哪里放下
  - acc: 1
    content: 「那个，善信？」
  - %T% 试探性的提问，拉回了善信飘飞的思绪
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没事没事！就是有点痒吓到了而已！」
  - 尽力把脸转向其他方向，不去直视下方
  - 毛巾很薄，隔着毛毛的触感下能清楚的感觉到有力的手指正在身上游走
  - 双腿上的尘土已经擦的干干净净，毛巾顺着往上
  - 温暖的指尖紧紧贴着露出的侧腹，顺着上下滑动
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - （这只是在擦泥，只是在擦泥……）
  - if: era.get('love:64') >= 50
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - （对，只是擦泥……）
      - 毛巾在微微颤抖的躯体上一点点移动，转向肚脐
      - 尘土被擦落，露出了善信的小肚子
      - 手指隔着毛巾也能感觉到传过来的微微抖动，汗水也一点点的从内衬里冒出
      - 看着逐渐红润的样子，实在是难以忍耐
      - 舌头在可爱的小肚脐上，直直的滑过一道线
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「哇！」
      - 善信惊恐的声音把 %T% 的思绪从小腹拉走，慌张的装作已经擦好的样子
      - acc: 1
        content: 「已经擦好了，等会还有舞台，你快点换衣服」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「唉，那个……」
      - 无视善信的话，立刻离开了休息室
      - 好险啊
      - 如果继续刚才的事情，说不定会把善信推倒吧

啊哈，好像是稍微有点不甘呢:
  # 天秋失败
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「输掉了啊……发挥有点失常呢」
  - 走进休息室的善信依旧是爽朗的笑脸，但是却异常的有点不爽的感觉
  - acc: 1
    content: 「今天的发挥不太好呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「就是啊！没拉住加速突然间就没刹住车，突然就失速了！」
  - 虽然是在说自己的的事情，却不像在说自己的问题
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，不过这次跑的很开心哦，虽然是输了」
  - 轻轻吐出粉嫩的小舌头，闭上一边眼睛装作可爱的样子
  - 身体稍微往一边歪过去一点，带着满身的泥土悄悄蹭了一下
  - acc: 1
    content: 「但是……算了，你开心就好」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嘿嘿，等会还有胜者舞台，我要先换衣服啦」
  - 善信放下装可爱的样子，转过身去找毛巾想擦掉身上的污渍
  - 只是即将拿到毛巾的时候，神差鬼使看了一眼身后的 %T%
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训～练～员～」
  - acc: 1
    content: 「什么事？」
  - 听见来自身后的声音之后顺着转过身，却看见了善信高速冲过来的样子
  - 满身尘土的抱过来，沾满了 %T% 的衣服
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嘿嘿，玩笑啦，玩笑！」
  - 善信的脸上带着恶作剧的表情，吐出灵巧的小舌头

准备就绪？开始逃跑！:
  # 资深年有马
  - 年末最后的G1赛事
  - 换做往常的话，现在应该是无比紧张的吧
  - 但现在站在选手通道出口的善信脸上，没有一点点的不安
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「有马纪念了啊……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不现实的感觉……没有呢」
  - acc: 1
    content: 「是啊，有马纪念」
  - 毫无逻辑的对话之下，互相知根知底的信任
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呐，训练员，虽然不知道你还记不记得」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「以前啊，你说过想要看我自己的风格对吧？」
  - acc: 1
    content: 「直到现在也一样」
  - 听见 %T% 的声音，善信的脸上勾起一抹自信的笑容
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那就看好了，善信我的全力……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「把所有事情抛到脑后，只看着前方的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我的全力爆逃！」
  - 抬起手向着身后留下了大拇指的影子，带着坚毅的眼神朝着赛场踏出了步伐，向着场上正在招手的好友走去

这就是我热血沸腾的跑法啊！:
  # 原版决胜服
  - 实况「能追上吗！能追上吗！」
  - 有马纪念的后半，已经进入了高潮时刻
  - 实况「再不加速就追不上了！目白善信！」
  - 身为好友的太阳神已经失速，一直领放的只剩自己
  - 但已经约定过，用这个跑法去取得胜利
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「之后就交给你啦！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我们是一辈子的亲友！」
  - 伴随着最后的加速和肺部最后挤出的空气，善信没有让任何人追上来，第一名冲线了
  - 胜利的欢呼声，在善信的耳边显得有些不真实，直到屏幕上显示出自己的时候才放声大喊，向着观众席上的 %T% 招手
  - divider: true
    content: 休息室
  - 场上的呼声结束，善信带着还没冷静下来的身体，兴奋的推开了休息室的门
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员！约好的那个，我做到了！」
  - 不管自己的话有没有被听见，但心情此时此刻已经刹不住车了
  - 既然做不到停止，那就顺着心情去动吧！
  - 顺着冲进休息室的风，一口气向着站在其中的 %T% 跳跃！
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呀呼！」
  - acc: 1
    content: 「呜哇！」
  - 随着 %T% 的悲鸣声，两个人差点就变成了一起倒在地板上的局面
  - 在避免差点被善信扑倒在地上的情况并勉强站稳身形之后，先对着善信的身后慌张的招了招手
  - acc: 1
    content: 「那个，善信，要不还是先松开吧？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉？为什么？」
  - 虽然有些不舍，但还是听话的松开了手
  - 善信不解的眼神随着 %T% 的手指往门口的方向看过去
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「噢噢！%太阳神称呼善信%的春天？！」
  - 门外的朋友们，正在看着亲热的场景呢
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……啊哈哈，有点失态了啊！」
  - 捂着头往后退了两步之后，善信才有点尴尬的找了个借口
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「总之，那个……等会见！」
  - 善信打着招呼退出了休息室，只有 %T% 还在休息室里不知所措想着其他的事情
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
      - 不知为何，拿着外套的手一点点的靠近了 %T% 的脸
      - 善信的气味冲进了鼻腔，令人陶醉
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「那个……」
      - 善信站在门口，有些尴尬的看着 %T% 和外套的亲密接触
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「要闻的话……我其实完全无所谓的哟」
      - 虽然尴尬，但还是关上了休息室的门，带上了锁
      - 整个世界顿时就只剩下了正在对视的两个人
      - 在 %T% 眼中，已经只有善信的存在了
      - 对着眼前的恋人，善信只是张开了双手
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「%自称%就在这里……尽情的动手吧」
      - acc: 1
        content: 扑向善信
        lines:
          - 即使天气很冷，现在善信吐出的气息也热的仿佛能烧尽所有的所有理性
          - 往日里白色的外套遮住的纤细肩膀现在完全没有遮盖，暴露在空气中
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「……可以的哦」
          - 善信闭上了双眼，放开原先还缩在身前的双手
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「我是属于训练员你的善信哦」
        # 进入马跳
      - acc: 2
        content: 「冷静……冷静……」
        lines:
          - 放下决胜服的外套，轻轻的抓住了善信裸露的肩膀
          - 在善信惊讶的眼神中，%T% 把自己的外套盖到了%她%的身上
          - acc: 1
            content: 「可不能感冒了」
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「训练员……嗯！」
          - 眼神中虽然还是带着遗憾，但却浮出了一点感动的泪水
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「不会感冒的啦，那个……」
          - 稍微拉紧了一点外套，把身体缩进中间
          - 学着刚才某个笨蛋的样子，深深吸了一口
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 目白善信
              - 「后面的事情，之后能做吗？」

逃跑的终点，就在这里:
  # 圣诞决胜服
  - 实况「能追上吗！能追上吗！」
  - 有马纪念的后半，已经进入了高潮时刻
  - 实况「再不加速就追不上了！目白善信！」
  - 身为好友的太阳神已经失速，一直领放的只剩自己
  - 但已经约定过，用这个跑法去取得胜利
  - color: %太阳神色%
    content:
      - fontWeight: bold
        content: 大拓太阳神
      - 「之后就交给你啦！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我们是一辈子的亲友！」
  - 伴随着最后的加速和肺部最后挤出的空气，善信没有让任何人追上来，第一名冲线了
  - 胜利的欢呼声，在善信的耳边显得有些不真实，直到屏幕上显示出自己的时候才放声大喊，向着观众席上的 %T% 招手
  - divider: true
    content: 休息室
  - 大汗淋漓的回到休息室，轻轻的用手掌扇着风
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「果然跑完比赛会很热呢……」
  - 刚想坐下的时候，迎面而来的却是一杯刚刚打开的蜂蜜特饮
  - acc: 1
    content: 「有马纪念，恭喜」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「说实话……还是有点不相信呢」
  - 一边喝着蜂蜜，一边坐下
  - 从赛场上下来的时候，不知为何激动的心情自然的平静下来了
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但是，是我赢了吧，训练员？」
  - 眼神里有不安，也有期待
  - acc: 1
    content: 「是啊，是善信赢了哦」
  - 得到回应的善信笑了起来，轻轻把头靠在 %T% 的肩膀上
  - 新决胜服带来的裸露肩膀贴在身旁，散发出一阵轻轻地飘香
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，那个约定，我做到了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我是用自己的跑法赢下有马纪念的，这下大家都会来恭喜我们了吧」
  - acc: 1
    content: 「大家肯定会承认善信你的实力的，毋庸置疑」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但是，稍微有点不公平呢」
  - 破天荒的，善信主动拒绝了表扬的话语
  - 从肩膀上移开，认真的看向身旁的 %T%
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是因为训练员，现在我才能有这个成绩的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但是却没有提到训练员的名字，这不对吧？」
  - 善信的眼神很认真，往日和善的蓝色瞳孔此时却没有玩笑的意思
  - acc: 1
    content: 「说的是呢」
  - acc: 2
    content: 「但我只是在支持善信你而已啊」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「说的是呢……才不对吧！」
  - 一边吐槽一边敲打了一下 %T% 的头，随后收起了笑容
  - 带着认真的脸色坐直了身，手掌轻轻盖在 %T% 的手背上
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「如果没有训练员你的话，肯定是做不到的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我是因为有了训练员你的信任，我才能自由的奔跑……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没有训练员在的话……我什么都做不到！」
  - 声音随着情绪一起波动起来，仿佛在呐喊一样
  - 手指紧紧的抓着 %T% 的肩膀，前端已经掐进肉里
  - acc: 1
    content: 「善信……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「抱歉，稍微激动了一点」
  - 善信抬起手，轻轻抹掉眼角溢出的水花
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但是啊，刚才说的话都是认真的哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我还是希望训练员，能一直和我在一起，无论何时」
  - 依靠在肩膀上的身体有些摇晃，仿佛随意的一碰就会躺倒
  - 放下来的手掌轻轻的放在 %T% 的大腿上，等待着回应
  - acc: 1
    content: 抱住善信
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「会一直在我身边的吧？」
      - 善信的脸贴在 %T% 的怀里，听着逐渐加速的心跳声
      - 闭上眼，享受着怀里的气息
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「是的吧……」
      - %T% 抬起手轻轻的揉了揉善信的头，解开了新衣服的扣子
      - 雪白的小帽子被%太阳神称呼善信%手摘下，含情脉脉的等待着
      - acc: 1
        content: 「善信，我喜欢你」
        # 马跳
  - acc: 2
    content: 亲吻善信
    lines:
      - 像是为了回应一般，坐在%她%身旁的 %T% 主动起身，深深的吻住了善信
      - 本就有些无力的身体被突然袭击压倒在休息室的椅子上，却完全没有反击的想法
      - 洁白的小帽子落到地上，但两个人都没有在意的意思，瞳孔之中仅仅能映射出彼此的脸庞
      - 不知亲吻过了多久，两个人才拉着银色的丝线把嘴唇分开
      - 此时此刻，两双眼睛上下对视着
      - 善信缓缓的闭上眼，把手放在 %T% 的脖子上，轻轻的拉到自己的面前
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 目白善信
          - 「请吧，是圣诞节的%自称%哦」
    # 进入马跳

圣诞有马拥抱马跳后续:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「哎嘿嘿，总感觉又跑了一场比赛一样呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但是这次我可以放心的说了——」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我是训练员……我是%玩家名%的一着！」
  - 善信的笑脸是如此自然，不见一点刚才的不安感
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「以后，不……今生也请多指教了，%玩家名%！」

圣诞有马接吻马跳后续:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……失策了」
  - 善信捂着脸，像是非常懊恼的样子
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这下不就要带着训练员的味道去舞台了嘛！笨蛋！」
  - 虽然说的话是在抱怨，但是没有生气
  - 相反，似乎有些高兴
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……不过呢，我并不讨厌哦，这样的训练员」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「主动kiss上来什么的，%自称%也很喜欢啦，但还是希望训练员你能说清楚很多事情哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「比如说呢，对于我的事情……是什么样的想法？」
  - 手指在脸上轻轻刮动，眼神直直的向 %T% 的方向看过来
  - 这句话在问的事情，只要一听就能明白
  - acc: 1
    content: 「是喜欢……不」
  - 是什么驱使 %T% 去做这些事情，去主动拥抱善信，去主动拉起善信的手呢
  - 这些问题已经不言而喻了
  - 「……大概是爱吧」
  - 简单又肉麻的话从 %T% 的嘴里说了出来，却是让善信放在脸上的手指停了下来
  - 充满绯红的脸有些发愣的看着身边的 %T%，嘴唇微微颤抖着似乎想要说些什么
  - 深情的对视直到门外传来其他声音才把思绪带了回来，平静的表情唐突的笑了出来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，我已经有答案了……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我们是一样的呢」

目白的圣诞晚会:
# 资深年12月4周
- 圣诞节的夜晚，是目白家为了回应平时各界的帮助而举办的聚会
- 善信穿着白色的决胜服，在露天的会场里四处带动情绪
- 直到周围的气氛开始升温，会场变得吵闹起来之后，善信才有空找到了正在随意漫步的 %T%
- 离开周边的群体，绕了过来
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「训练员，今天过的开心吗？」
- 善信递过来一杯饮料，干脆就呆在 %T% 的身边一同慢下来
- acc: 1
  content: 「嗯，很开心」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「嘿嘿，开心就好啦」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「虽然说高雅的晚宴什么的不太适合我啦，但今天只是普通的聚会」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「还要谢谢奶奶呢！」
- 善信的声音里带着欢快，连带脚步也轻快起来
- 周围声音不大，也完全钻不进两个人的空间里
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「和训练员一起参加的晚会，莫名的很开心呢」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「以前，我对聚会这件事还是有点抗拒的啦」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「毕竟那时候我会把自己当成调节担当之类的，总感觉开心的部分和我不太搭配」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「但是和太阳神%她%们接触之后啊」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「已经很自然的和大家一起开心起来了！」
- 善信的身体稍稍往前倾斜，眼神看向旁边偷瞄着 %T% 的脸
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「这部分也多亏了训练员呢，嘿嘿」
- 脸上浮出自然的笑容，肩膀轻轻的和 %T% 碰撞在一起
- 年末的气温不高，善信的衣服也不算暖和
- 裸露的肩膀在 %T% 的眼里，怎么看都是隐患
- acc: 1
  content: （会感冒吧……）
  lines:
  - 裸露的双肩上套上一件外套，盖住了善信的身体
  - 还带着体温的衣服贴在身上还带着一点属于 %T% 的味道
  - 稍微愣了一下之后，善信有点尴尬的看向身边
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那个，这一身其实不怎么冷的啦」
  - 虽然不是高兴的接受，但还是抓着衣襟用力往自己身上拉了拉
  - 鼻腔里充斥着衣服里的味道，脸上浮出一阵红润
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不过……还是谢谢你，%称呼%」
  - 声音没有刚才的精神，无比的平缓
  - 用只有 %T% 能听见的音量，吹在耳边
- if: era.get('love:64') >= 75
  acc: 2
  content: （会被袭击……）
  lines:
  - 裸露的手臂无自觉的抬起来抱着后脑，露出洁白的腋下
  - 短裙下的吊带袜高高挂着，在以往没有装饰的大腿上勒出小小的凹陷
  - 深蓝色的丝带把头发束在侧面立起高马尾，露出了后颈
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%称呼%？不舒服吗？」
  - 善信的声音适时的出现，把思想拉回现实
  - 早已出现异常的脸色，善信也注意到了
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「那个，我陪你去休息一会吧，不要感冒了」
  - 用刚好能让其他人听见的声音，为两个人找到了暂时离开的理由
  - 绕过整个会场，绕过管家的老爷子，绕过所有人
  - 在所有人都不会找到的地方，善信才转过身来看着 %T%
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%称呼%你啊……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真是不让人省心呢」
  - 手掌轻轻的盖在裤子上，温柔的按压着
  - 直到温度升起，善信才慢慢拉开拉链
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不要发出声音哦」
  - 温柔的嗓音回响在 %T% 的脑海中，随即传来的是下半身被善信玩弄的快感
  - 手指就像是跳舞一般，在敏感点上来回游动，每一次的挑逗都令身体在冬夜里不住的颤抖
  - 任由本能驱使下，%T% 的双手抓住了善信的肩膀，贴在一起
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「%称呼%……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「可以出来了哦」
  - 看不见的情况下，私处的触觉更加的敏感
  - 指尖的摩擦逐渐施力，引诱着高潮的快感
  - acc: 1
    content: 「善信，我……！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊……」
  - 热流涌出之后，善信看着自己的手，有些沉默
  - 掏出手帕擦干净手，这才重新走出了死角
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，我们再不回去的话大家会起疑心的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好啦，回去啦」
  - 善信向着穿好衣服的 %T%，伸直了手
  - acc: 1
    content: 「牵起善信的手」
  - acc: 2
    content: 「拉过善信的手」
    # 马跳

圣诞晚会马跳后续:
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「真是的，这样肯定会被怀疑了吧……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好啦好啦，没关系的啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嘛，%自称%也完全不会在意的」
  - 对比有点颓废感的 %T%，善信却是开朗的样子
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「如果在意的话，不如一起出去玩当作补偿怎么样？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「玩笑啦，什么时候都还原哦！」
  - 善信的笑容一如既往，带着一阵温暖

头抬得太高了啦！:
#资深年宝塚纪念优胜，有马纪念连霸后出现。已育成后（第4年）进入1月4周
- 难得休息的时光，%T% 在放开思考的时候自然的想到了善信的事情
- 不知为何，各项胜利的回忆浮现在脑海之中
- 没错，目白善信非常擅长跑祭典型的竞赛
- 在「有马纪念」和「宝塚纪念」上接连获胜，甚至又赢了一次「有马纪念」……
- 正在思考要飘上天际的时候，善信的声音打断了 %T% 的思绪
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「天啊天啊天啊……我居然在大奖赛三连霸耶！」
- acc: 1
  content: 「嗯，没错！」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「啊哈哈，连我自己都觉得做的超厉害呢！」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「不过……」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「虽然是创举，但是在有人气投票的比赛里达成这点，还真是有我的风格啊」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「这种和大家一起热闹参加的祭典型比赛，说不定是最符合我的类型呢！」
- acc: 1
  content: 「说道祭典，好像还有庆祝仪式哦」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「唉，三连霸的吗？这样啊，那也挺开心的呢！」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「不过，在比赛上已经大嗨特嗨过了，庆祝仪式就老实一点，普普通通的参加吧」
- divider: true
  content: 庆祝仪式
- color: %露娜色%
  content:
    - fontWeight: bold
      content: 鲁铎象征
    - 「嗯～虽然并不是有什么不好的地方，但你在台上的举止……」
- 学生会长微妙的歪着头，看着彩排现场
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「会长？是我领奖杯的方式有什么大问题吗？」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「我今天没有表现的像个辣妹啦，应该没什么奇怪的地方……」
- color: %露娜色%
  content:
    - fontWeight: bold
      content: 鲁铎象征
    - 「并不是奇怪」
- color: %露娜色%
  content:
    - fontWeight: bold
      content: 鲁铎象征
    - 「反而是原本的你，态度好像过于谦虚了」
- color: %露娜色%
  content:
    - fontWeight: bold
      content: 鲁铎象征
    - 「你可以更加的抬头挺胸，无需顾虑哦」
- color: %露娜色%
  content:
    - fontWeight: bold
      content: 鲁铎象征
    - 「上一个达成大奖赛三连冠的%马娘%，可是我敬爱的哪位赛%马娘%啊」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「抬头挺胸……就算那么说啦～」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「不过，平时那种谦卑的态度，该说是从小养成的嘛」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「嗯～该怎么办呢」
- color: %波旁色%
  content:
    - fontWeight: bold
      content: 美浦波旁
    - 「可以让我说句话吗？」
- color: %波旁色%
  content:
    - fontWeight: bold
      content: 美浦波旁
    - 「我认为你的举止之所以不够有威严，是头部倾斜角度的问题」
- color: %波旁色%
  content:
    - fontWeight: bold
      content: 美浦波旁
    - 「要不要试着抬高头部的角度呢？我想想……大概是2.85度左右」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「头部位置嘛……这样啊」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「我平时会忍不住表现出『你好你好～』的感觉，所以看起来才不太有威严吧」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「OK，波旁！我明白了！我会试着把头抬高的！」
- color: %波旁色%
  content:
    - fontWeight: bold
      content: 美浦波旁
    - 「拜托了。要是你能保持自信坚定的举止，我也会高兴的」
- color: %波旁色%
  content:
    - fontWeight: bold
      content: 美浦波旁
    - 「因为善信你的成就，是逃马赛%马娘%们梦寐以求的」
- 在大伙的齐心协力商议之后，庆祝仪式算是平安结束了
- 只是在这之后——
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「哦哦哦哦哦！」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「啊，训练员！我刚才的步调很棒吧！」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「感觉跑的超轻松的，时间怎么样？」
- acc: 1
  content: 「进步明显哦」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「怎么回事呢……」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「这只是因为不停训练得到的成果吗？还是说……」
- acc: 1
  content: 「难道是……抬头的缘故？」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「抬头……啊，是庆祝仪式那个时候」
- 善信的表情豁然开朗一般明亮起来
- 抬起头部的姿势，或许也把内心一起纠正了吧
- 也就是说这么做之后，善信的身上已经得到了身为大奖赛三连霸赛%马娘%的自豪
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「这样啊……心态改变之后跑法也会改变，所以要把头抬高点啊！」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「好～扬起下巴，抬头挺胸，去争取四连霸，五连霸吧！」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「呀呼！」
- 溢满而出的情绪和热情，从善信的身上跑了出来
- 将大奖赛三连霸的自豪铭刻在心中，善信今后也将挑战新的盛宴

震惊！跑车是礼物！:
#达成称号条件后，进入2月1周
- 一个平静的日子，正在办公室的你突然收到了骏川小姐的通知
- color: %绿帽色%
  content:
    - fontWeight: bold
      content: %骏川缰绳%
    - 「本来这个应该直接通知善信同学的，不过今天%她%放假呢」
- color: %绿帽色%
  content:
    - fontWeight: bold
      content: %骏川缰绳%
    - 「毕竟这不是能够让学校暂时保管的东西呢」
- acc: 1
  content: 「有那么重要吗？」
- color: %绿帽色%
  content:
    - fontWeight: bold
      content: %骏川缰绳%
    - 「详细的部分就由理事长说明吧」
- divider: true
  content: 理事长室
- color: %理事长色%
  content:
    - fontWeight: bold
      content: %秋川弥生%
    - 「表 彰！你带领目白善信同学的表现相当的亮眼！」
- color: %理事长色%
  content:
    - fontWeight: bold
      content: %秋川弥生%
    - 「奖 励！闪光系列赛的赞助商送过来了一份大礼哦！」
- color: %理事长色%
  content:
    - fontWeight: bold
      content: %秋川弥生%
    - 「请你负起作为训练员的责任，把这份礼物带给目白善信吧！」
- acc: 1
  content: 「唉唉？！这份礼物到底是……」
- color: %绿帽色%
  content:
    - fontWeight: bold
      content: %骏川缰绳%
    - 「那个，总之先去停车场吧」
- 绿色的管理人小姐把崭新的车钥匙递给 %T%，指向停车场的方向
- color: %绿帽色%
  content:
    - fontWeight: bold
      content: %骏川缰绳%
    - 「应该很快就能找到的，剩下的事情就交给你了」
- 说完之后，骏川小姐就回头处理工作去了
- 一头雾水的 %T% 带着手上的钥匙，走进停车场里
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
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊，不妙，这下肯定迟到了……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯……真奇怪啊，怎么找不到」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「难不成训练员也迟到了吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「不对，这应该不会发生啦，应该是中途发生了什么吧……」
  - 善信一路小跑在街道上，左右寻找着 %T% 的身影
  - 在寻找的有些焦急的时候，身后传来了车辆鸣笛的声音
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呀，啊，抱歉抱歉！我这就让开……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「等等……啊咧？训练员？」
  - acc: 1
    content: 「哟，善信，上车」
  - 坐在跑车里的 %T% 朝着正在愣神的善信打了个招呼，把车停在%她%的身边
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「好帅气的车……啊不对，为什么训练员会？」
  - acc: 1
    content: 「是系列赛的赞助商送给你的礼物哦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这是给我的礼物吗！？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这个超厉害的！不过，我好像没法开唉」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我还没有驾驶证呢，明明是那么贵重的礼物」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「对了！就交给训练员你来开吧！」
  - 话说到一半的时候，善信已经坐上了副驾驶的位置
  - 车子顺着街道开向海边，沿着海岸线一路安稳的行驶
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，好舒服啊！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「继续继续！呀吼！」
  - 海风顺着车窗吹在善信身上，让本就开心的%她%不自觉的玩了起来
  - 直到车子缓缓停在无人的沙滩上，才停下了刚才收不住的笑声
  - 海浪拍打沙滩，发出一阵令人舒适的沙沙声
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「呼，来了个挺远的地方呢～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「感觉毫无目的的兜兜风也不错呢」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「偶尔也要从日常里爆逃出来，随心所欲的享受自己的快乐呢」
  - acc: 1
    content: 「善信你就是这样的吧」
  - 听见 %T% 的肯定，善信有点没忍住，轻笑出声
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊哈哈，确实！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「从微不足道的自己，从别人给我定好的道路上逃出来」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「逃出来，逃出来，不断不断的逃出来……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……然后在你的带领下，带着自信来到这一步！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「正因如此——」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯～这风真舒服呢～」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「已经没有什么东西能吓到我了！」
  - 善信爽朗的笑脸上带着解放感，大大的张开双手伸了个懒腰
  - 只是笑脸上带着少许的尴尬，微微皱眉
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嘛，虽然在遇到训练员之前，我一直都在起跑线上犹豫不决，所以起跑就晚了点」
  - acc: 1
    content: 「但是，你用自己的双腿追上来了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「是啊，这是慢了一圈的青春呢～但是啊——」
  - 放开原先皱起来的眉头，表情自然的看着 %T% 的脸
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「没有什么是没法拿回来的！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「也许现在还没到手，但是总有一天我会将其收入囊中！」
  - acc: 1
    content: 「这家伙也是呢，而且是纪念车」
  - 正笑着的 %T% 指向那辆载着两个人一起过来的车，轻描淡写的说着
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「赞助商的礼物啊……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「怎么说呢，还是有点不现实的感觉啦」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「我说啊，训练员」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这辆车可以按我喜欢的做什么都可以对吧？不论我打算用来做什么？」
  - acc: 1
    content: 「那当然」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这可，太，太，太……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「太好了！这真是太棒了！！！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「这样的话无论什么时候都能到处跑了」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「让我们尽情去兜风吧，%玩家名%！」
  - acc: 1
    content: 「我们？也包括我吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯！毕竟这不是只靠我一个人的力量得到的嘛，所以我想和你一起分享」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊对了，还有一件事……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「如果可以的话，给这车起个名字吧？」
  - acc: 1
    content: 「名字？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯！因为我打算一直开到老啦，所以一定要起一个听不厌，值得珍视的名字哦」
  - 给善信的车子取名，而且要符合%她%的功绩，而且是值得珍视的名字……
  - 在 %T% 的思考里，答案已经只有一个了
  - acc: 1
    content: 「目白善信！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉？我就在这里……」
  - acc: 1
    content: 「就叫目白善信号吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「唉唉！？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「就用我的名字吗？！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「……如果起这个名字的话，你会一直珍视它的吗？」
  - acc: 1
    content: 「嗯，同时也能纪念你的功绩」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「啊哈哈，是这样吗？那就这样吧，简简单单的名字也挺好的」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「嗯，目白善信号！果然没有什么是我得不到的呢！」
  - 善信脸上的笑容如同万里晴空，满意的点着头
  - acc: 1
    content: 「你是本来就想要一辆车吗？」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「车……是呢，也许是吧」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「但是呢，除此之外我还有很多想要的！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「走吧，该继续兜风啰！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「训练员，快点！」
  - 虽然目白善信迟到了，但是眨眼间%她%就会冲到最前方去，拉着 %T% 跑——
  - 车辆发出启动的声音，再一次行驶起来
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「快点，再快点，训练员！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「要快到极限！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「FuFu～！自由真是最棒了！」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 目白善信
      - 「快跑，快跑，目白善信号！」
  - 不断加速的目白善信号，虽然曾经是不为人知的的，迟到的逃亡者，但是现在
  - %她%，比谁都要跑的快
  - %她%是偏离王道的先驱，描绘出一道目白家里最自由的轨迹
  # 获得小汽车
- acc: 2
  content: 「给管家打个电话吧……」
  lines:
  - 在一阵思考过后，%T% 选择了和管家先生打一个电话
  - 毕竟这份礼物对于善信来说，还是有点贵重的
  - acc: 1
    content: 「交给管家先生吧……」
  - 将钥匙交给赶来的管家之后，%T% 有点僵硬的肩膀一口气松开了

无力逃亡:
# 粉丝袭击（爱慕＞74）
- 已经不知道过去了多久，但是没有改变什么
- 究竟过去了多久？早就不知道了
- 到底是做过了什么？根本不清楚
- 唯一的印象，就是在那一天看见那几位粉丝向着 %T% 跑过来的样子
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「训练员，醒了吗？」
- 善信坐在一旁，看着 %T% 的脸，平静祥和
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「啊，我们该走了呢」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「什么时候能安定下来就好了呢」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「不过只要能够在一起，那就好了」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「呐，什么时候能和我再说说话呢」
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「我的训练员啊」
- 摸着冰冷的相框，却是笑了起来
- color: %代表色%
  content:
    - fontWeight: bold
      content: 目白善信
    - 「只要你在啊，我做什么都可以啊……」