# @file 目白光明 - 育成
# @author KUN
train:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是～已经准备好啦～」
      - 依旧是不紧不慢的语调，但准备得却很快。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「和%CALLNAME%一起的话，什么训练都没问题～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，一起加油吧～」
  - if: era.get('love:74') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～我们慢悠悠地来吧～」

# --------------------------------
# 主线
# --------------------------------
# 招募后
at_my_side:
  title: 你在我的身边
  lines:
    - 清风吹过中庭，带来一丝凉意。
    - %CHARA% 轻轻撩开贴在脸上的发丝，对着无人的树洞看的有些出神。
    - acc: 1
      content: 「在想什么呢？」
    - 被 %YOU% 的声音打断了回想，%CHARA% 转头过来，却没有看见平日的笑脸。
    - 再次转向那个树洞时，%CHARA% 开口了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这里是%UMA%们用来倾诉心声的地方，%CALLNAME% 您是知道的吧？」
    - 这件事 %YOU% 自然是知道的，倒不如说这是整个学院都知道的常识。
    - 但 %CHARA% 的眼神里，却看见了其他的东西。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前，我在家的时候听管家先生说过。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有时候会在这里，看见很难过的%ELDER_SISTER%在这里，一直喊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「听说，经常会这样呢……」
    - 随着 %CHARA% 的声音，%YOU% 回忆起了那个年纪很大的，目白家的管家先生。
    - 这样说来，%SEX%说的想必是某一位目白家的大前辈吧。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……所以，有时候我会在这里看见哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明我没有直接看见过，但总是能看见。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%，%CALL_64%，%CALL_13%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%在这里，哭泣的样子，总是能看见呢。」
    - 视线从树洞转向 %YOU%，轻巧的眨眨眼，
    - 短暂的对视之后，%CHARA%的脸色轻松了不少。
    - 如同从某个妄想中解放出来一样，又挂上了软绵绵的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有您在的话，我就不会在这里哭泣了吧？」
    - 看着 %YOU% 的那张呆呆的脸，浮出了纯粹的笑容。

# 新秀年6月3周，暧昧以上，同队无目白
mejiro_tea:
  title: 目白家的茶会时间
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，要来目白家吗？」
    - 平平无奇的一天，%CHARA% 突然间找到了 %YOU%。
    - 听着 %CHARA% 的邀请，刚刚结束书面工作的 %YOU% 有点不真实的感觉。
    - acc: 1
      content: 「……啊？我？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是的～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我想要把%CALLNAME%介绍给%ELDER_SISTER%们呢～」
    - 看着 %CHARA% 脸上明亮的笑容，没有一点说谎或者玩笑的样子。
    - acc: 1
      key: relation
      content: 「可以是可以……」（好感+8）
    - acc: 2
      content: 「请务必带上我！」（好感+4，爱慕+1）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好的～」
    - 没有过去多少等待的时间，门外就传来了轿车的声音。
    - 本就没有什么工作的日子里，空出了一段时间跟着 %CHARA% 坐上了后座。
    - 来到目白家的庭院里，看着已经坐在桌边等待的%UMA%，%YOU% 的心里还是咯噔了一下。
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「哦呀，是光明的训练员%SIR%吗？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「欢迎来到我们的茶会～」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「啊，不用那么拘谨的，随意一点就好了。」
    - 两位%YOUNG_LADY%在圆桌的另一边，示意着对面的两张空椅子。
    - 对着面前桌上的点心和茶水，%YOU% 的动作有点不自然的僵硬起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦～%CALLNAME%，请坐在这边～」
    - 小跑到桌旁的 %CHARA%，拉开了靠外的椅子。
    - 与平时慢悠悠的样子不一样，活泼的拉着 %YOU% 坐了下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，要来一杯红茶吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「搭配上这边的蜜饯，会很好喝哦～」
    - acc: 1
      content: 「啊，确实……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对吧～喝下去之后会感觉身体暖暖的～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，顺带一提这是多伯教我的哦～」
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「……你们关系很好呢。」
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「不过身为目白家的一员，还请不要在外面这样做哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在外面？」
    - 坐在 %YOU% 身旁的 %CHARA% 愣了一下，完全没有反应过来的样子。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「麦昆，就算你这样说光明也不懂啦……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「总而言之，不要贴的太近就好。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊～是这样啊～」
    - 一副恍然大悟的样子之后，%CHARA% 才把贴在 %YOU% 身上的手拿开。
    - 规规矩矩的坐下之后，这才有了%YOUNG_LADY%的样子。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「好啦，不是要说说比赛的事情吗？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「光明你也是，不要总是缠着人家～」
    - 一说起来，%YOU% 就反应过来了，出道赛将近的事情。
    - 虽然对于 %CHARA% 的实力 %YOU% 并没有太作担心，但不由得还是会有些动摇。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊对了，说到比赛——」
    - 睁开有些睡意的双眼，有点认真的说了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我呢，很喜欢%CALL_13%的奔跑哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跑步的身姿非常的优美……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「优雅，华丽又理想，简直能看到出神呢～」
    - 没有一点恭维的感觉，像是发自内心的感叹。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「啊，这个我懂！」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「麦昆跑步的样子确实很漂亮呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼呼，%CALL_27%的奔跑方式我也很喜欢哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「强而有力，步伐像是能踏穿地面一样……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就像是%ELDER_SISTER%想赢的心情一样强烈呢！」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「太夸张了啦……」
    - 两位长辈在圆桌的另一边有点害羞的端起茶杯，遮住了脸。
    - 只有 %CHARA% 放下了手上的杯子，认真的抬起脸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，一直以来我都因为慢吞吞的样子，一直都没有什么表现……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有很多人对这样的我失望了呢，但是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……我也想要跑出像%ELDER_SISTER%们这样的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「令人心潮澎湃的比赛。」
    - acc: 1
      content: 「心情澎湃的比赛吗……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为了证明自己，同时……」
    - 接到了前方两位的眼神之后，%CHARA% 慢悠悠的转过来看向 %YOU%，正坐着开口
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我也想为了目白家的名誉……」
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「好了，先停一下。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「麦昆？」
    - 突然开口打断了 %CHARA% 之后，%M_NAME%放下了手里的红茶
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「光明……你先跑出自己的风格就好了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「想的事情太多可是会影响状态的。」
    - acc: 1
      content: 「就是啊，先做好你自己吧？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「两位说的也没错啦，光明。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「还是好好准备眼下的比赛吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%ELDER_SISTER%……%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，我明白了！」
    - 收起了认真又严肃的表情，重新换出了懒洋洋的笑脸。
    - 只是在放松下来之后，手又不自觉的抓住了 %YOU% 的衣角。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……接下来的时间就拜托了，%CALLNAME%～」
    - 对上了 %CHARA% 的眼神，%YOU% 也不自觉的笑了起来。
    - acc: 1
      content: 「好，交给我了！」
    - 顺带一提，剩下的茶点，就在轻飘飘的气氛里由%M_NAME%享用了。

# 出道战前
begin_race:
  - 出道赛到来的时刻，%CHARA% 站在入口对着前方的赛道，轻轻闭上了双眼。
  - 稍稍深呼吸一口，再次睁开眼睛，扫开了平时有些慵懒的样子。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「出道战……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「终于，来了啊。」
  - acc: 1
    content: 「没必要那么紧张啊」
  - acc: 2
    content: 「用你自己的跑法上就好」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯嗯，我明白了！」
  - 一改平时的慢节奏的样子，向着赛场踏步。
  - 名为 %CHARA% 的全新明星，在赛场上前行。

# 出道战后
begin_race_end:
  - 最后一名冲过终点的时候，%CHARA% 才反应过来。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「第一……呼哇～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我，成功啦！」
  - 看着眼前显示屏上大大的一着，%CHARA% 抬起手自顾自的欢呼起来。
  - 属于%SEX%的道路，已经开始了——
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_27%……%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我，会加油的！」

# 新秀年8月1周，莱恩未处于育成中
inherit:
  title: 继承这份意志
  lines:
    - 出道赛结束之后，%CHARA% 和 %YOU% 一起回到了原本训练的日常。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%今天也辛苦了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，要一起回去吗？」
    - 训练时间结束，%YOU% 正在离开训练场时候，却被一个声音喊住了。
    - 在 %YOU% 回头的时候，%R_NAME% 慢步来到了面前。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「啊，打扰到你们了吗？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「抱歉打扰到你们了，不过……有些事情我还是觉得，要说出来呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%？」
    - acc: 1
      content: 「有些事情？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「嗯，确实是……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「抱歉啊光明，我能和你的训练员%SIR%单独说几句话吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？只要 %CALLNAME% 不介意的话……」
    - 得到了 %CHARA% 有点犹豫的许可之后，%R_NAME% 立刻拉着 %YOU% 退开了几步。
    - 看了一眼站在原地歪着头的 %CHARA%，靠到了 %YOU% 的身旁小声的说了起来。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「其实是关于光明的事情啦……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「之前光明说过喜欢我的跑步风格吧？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「以前，我自认为我不是一个令人憧憬的人啦。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「不如麦昆优雅，也不如善信那么豁达……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「比赛也是，拼尽全力但是总是差一点。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「不过，光明总是告诉我%SEX%的想法，一直支持我，我才对自己有了自信的。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「既然%SEX%会选择你，那肯定是有什么很正当的理由吧。」
    - acc: 1
      content: 「正当的理由……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「所以呢，光明%SEX%就请你多关照了！」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「……还有，只是一个小小的愿望啦，真的……」
    - 话语停止的 %R_NAME% 探头看向 %CHARA%，确定没有听见才继续说下去
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「请你让光明%SEX%，赢下来好吗？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「虽然那时我没有做到……但我希望%SEX%能做到。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「毕竟，%SEX%是我骄傲的%YOUNGER_SISTER%呢，哎嘿嘿～」
    - acc: 1
      content: 「……会有点难哦？」
    - acc: 2
      content: 「我明白了，交给我。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「谢谢……好啦，别让光明等太久啦。」
    - 收起笑容的 %R_NAME% 拍了拍 %YOU% 的肩膀，推推搡搡着又把 %YOU% 送回了 %CHARA% 身旁。
    - 看着 %R_NAME% 放松离开的背影，%YOU% 只是缓了口气，却不好开口。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - acc: 1
      content: 「嗯……要怎么说呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……是有关比赛的事情？」
    - 就像是读懂了 %YOU% 的想法一样，笑眯眯地开口了
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然是这样啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果是%CALL_27%的话……是想要我参加某场比赛之类的事情吧？」
    - acc: 1
      content: 「你很了解%SEX%啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%的比赛，每一场我都记得哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟%CALL_27%是……我最喜欢的家人啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不管是为了%ELDER_SISTER%，还是为了我自己……我想赢下来。」
    - acc: 1
      content: 「是这样吗。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是的～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，以后也麻烦您了，%CALLNAME%～」
    - 带着轻柔的笑容，%CHARA% 牵住了 %YOU% 的手。
    # 好感+20

# 新秀年11月1周
my_way:
  title: 自己选择的道路
  lines:
    - 训练结束的时候，%CHARA% 没有像以往一样离开，而是安静的站在训练场的边上，静静地看着其他人训练的步伐。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……今天也，很努力了啊。」
    - 看着眼前日复一日训练的%UMA%们，%CHARA% 的尾巴轻飘飘的晃荡了起来。
    - acc: 1
      content: 「怎么了，心情不好吗？」
    - 站在 %CHARA% 面前的 %YOU% 没有直接接触%SEX%，只是在面前挥了挥手。
    - 耳朵轻巧的跳动了一下后，%SEX%才慢慢转过来看向 %YOU% 的脸，脸上浮出了平时的表情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是，还想再跑一会呢。」
    - acc: 1
      content: 「你不太会说谎啊，一看就明白了。」
    - acc: 2
      content: 「有什么需要撒谎的呢？」
    - 站在在 %YOU% 面前的 %CHARA% 稍微愣了一下，随后有些不好意思的轻刮了一下脸。
    - acc: 1
      content: 「到底在想什么呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「被发现了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……最近，感觉缺少动力了呢。」
    - 明明完全没有出现怠慢训练的情况出现，但是 %CHARA% 还是说自己没有足够认真。
    - 夕阳落下的很快，训练场上其他%UMA%也结束了训练时间，正在准备离开。
    - acc: 1
      content: 「是累了吗？」
    - 视线从已经没什么人的训练场上移开，转而看着自己的双腿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大概是吧，啊哈哈……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是稍微有点累了……」
    - 看着 %CHARA% 脸上不太自在的表情，%YOU% 回想着前段时间看见的东西，以及在几位前辈口中听说过的事情。
    - 目白家的历史，说不定给 %CHARA% 带来了不小的压力。
    - acc: 1
      content: 「是家里的压力很大吗？」
    - acc: 2
      content: 「顶着这样的压力，辛苦了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不是哦。」
    - 出乎意料的否定。
    - 慢悠悠的眼神缓缓凝聚起来，抬起头和 %YOU% 对视。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%ELDER_SISTER%们以前努力所留下的，目白家的一切。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我呢，非常喜欢家里的大家，所以也想努力让大家的历史继续下去。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以必须努力才行……！」
    - acc: 1
      content: 「那我也要努力了啊。」
    - 听着 %YOU% 的回应，%CHARA% 的脸上浮出了软软的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好的！%CALLNAME%！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一起努力吧！」
    # 好感+15

# 希望锦标前
hope_sta:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……呼哇。」
  - 如同往常一样在比赛开始之前，调整着自己的气息
  - 模仿着自己平时轻飘飘的感觉，却没法就这样冷静下来
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯……身体的颤抖停不下来呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「明明平时都不会这样子的……」
  - acc: 1
    content: 「在紧张对吗？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊，%CALLNAME%～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……或许确实是在紧张呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「毕竟，这可是新秀年组最后的G1比赛了啊。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「紧张什么的……很正常啦～」
  - acc: 1
    content: 「不用那么急躁的想着那些事情的。」
  - %CHARA% 的耳朵灵巧的跳动了几下，认真的听着 %YOU% 的声音。
  - 尾巴有些不安的左右扫动着，连带着双手也在不断的翻动着手指。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这些事情……？」
  - acc: 1
    content: 「你只要想平时的自己会怎么做就好了。」
  - 就和 %YOU% 所说的一样，现在只是缺失了平日缓慢的节奏。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「平时的话……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「应该会准备一杯红茶吧～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「比赛之后，和多伯%THEY%一起……」
  - acc: 1
    content: 「那现在感觉如何？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「感觉如何？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「确实，平静下来了……」
  - 看着自己停下颤抖的双手，%CHARA% 稍微愣了一下。
  - 但很快，又重新笑了起来。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「的确是像往常一样呢～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「谢谢你，%CALLNAME%～」
  - 就像平时一样站起身，平静的走向赛场。

# 希望锦标胜利
hope_sta_win:
  - 维持着平常心，有惊无险的拿下了年末最后一战的胜利。
  - 虽然已经被汗水打湿了全身，但脸上依旧维持着轻飘飘的笑容。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%～我赢了哦～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「平常心果然很棒呢～」
  - 维持着平常心胜利的%CHARA%，慢悠悠的回到了 %YOU% 的身旁。
  - acc: 1
    content: 「像平时一样，对吧？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是的呢～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊，说到和平时一样……」
  - 蹑手蹑脚的穿过 %YOU% 的身边，钻进休息室里。
  - 脱下已经沾满汗水的衣服，轻笑着看向 %YOU%。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「等到舞台结束之后，一起去茶会吧～」

# 希望锦标失败
hope_sta_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呼哇……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「大家都很厉害呢……」
  - 有点失落的站在赛道看着天空，任由汗水滑落。
  - 擦去脸上的的水珠，看向选手通道。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊……」
  - 远远站在入口的 %YOU%，和平时一样看着。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%，还在看着吗？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……还要更努力呢，维持平常心。」

# 经典年3月3周
light:
  title: 点亮心底的信心
  lines:
    - 日期接近经典三冠的第一战，%CHARA% 却没有直接出现在训练场，而是呆在办公室等着 %YOU%。
    - 等到 %YOU% 带着刚刚准备好的文件出来时，立刻就被 %CHARA% 推着向校外的方向走出去。
    - acc: 1
      content: 「那个，%CHARA_FULL%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是我，%CALLNAME%～」
    - 虽然回应了 %YOU% 的声音，但手上还在继续推着往前走。
    - 穿过校门走向后山的时候，这才明白了目的地在哪里。
    - acc: 1
      content: 「神社吗……说的也是。」
    - acc: 2
      content: 「想不到你也会在意这些呢。」
    - 看着眼前经常被%UMA%们当作心里安慰的神社，%YOU% 的心里也大概明白了此行的原因。
    - 直到穿过鸟居之后，%CHARA% 才怯怯的开口。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不好意思呢，%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是我想要有人陪我过来看看，毕竟……还是有些紧张的呢。」
    - 平时稳定的表情此时却有些微小变化，不断偷看 %YOU% 的态度。
    - acc: 1
      content: 「安心，就算不是大吉我也觉得你会赢的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好的！」
    - 原本并不自信的表情被脸上的绯红色覆盖过去，连带尾巴也兴奋的左右甩了起来。
    - 稍稍深呼吸过后，%CHARA% 转身抬头看着面前的神龛，轻手轻脚地抛出一枚硬币。
    - 叮——
    - 随着铃铛清脆的声音响起，%CHARA% 慢悠悠的抽出一根签。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个，是不是借了%CALLNAME%的幸运呢～」
    - 双手捏着那一根细细的木签，在 %YOU% 的面前炫耀起来。
    - acc: 1
      content: 「真好呢，大吉」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是的～也要谢谢%CALLNAME%呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那，我们准备回去吧～」
    - 看着 %CHARA% 轻快的步伐，%YOU% 也自然的笑了起来。
    - acc: 1
      content: 「这就回去了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯嗯～毕竟不能只靠这一支签嘛～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我也要继续努力训练才行！」
    - 看着那个表情，%YOU% 跟着 %CHARA% 一起笑了起来，开始返回特雷森学院。
    # 好感+20

# 皋月赏
sats_sho:
  - 三冠的首战，皋月赏。
  - 平日呆呆的 %CHARA% 看着眼前的赛场，一改平时的风格。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「三冠……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%ELDER_SISTER%们努力的目标，现在，由我来……」
  - acc: 1
    content: 「准备好了吗？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是的，%CALLNAME%～」
  - 认真的看着前方，握紧了双手再放松开。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我已经准备好了……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「目白的名号，我一定会好好继承下去的！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「请好好的看着我吧，%CALLNAME%～」
  - 站在通道口，回头看向 %YOU% 的方向。
  - 认真的脸上，浮出了奔赴前方的笑容。

# 皋月赏胜利
sats_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「赢了……我赢了哟！%CALLNAME%！」
  - 站在显示屏下的 %CHARA%，夸张的挥舞着双臂，欢快的蹦跶起来。
  - 欢呼着向在观众席的 %YOU% 喊着，直到身后有其他人过来提醒已经到退场时间了。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「第一战，赢了～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哎嘿嘿……不愧是%CALLNAME%呢～」

# 皋月赏失败
sats_sho_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呼哇……」
  - 耳朵一下塌倒在两边，表情呆呆的看着巨大的显示屏
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我，输掉了……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「明明%CALLNAME%已经那么努力了。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「也和%ELDER_SISTER%大人学习了那么多。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我，还需要努力啊……」

# 日本德比
toky_yus:
  - 一生一次的赛场，日本德比。
  - 穿好决胜服的 %CHARA% 靠在 %YOU% 的身边，轻轻的哼着歌。
  - 周围的观众席早就已经站满了人，所有人都在期待着这场比赛。
  - 但与这场紧张的比赛不同的是，即将开始比赛却依旧安静的%CHARA%。
  - acc: 1
    content: 「差不多要开始了哦。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我也，早就准备好了哟～」
  - 从 %YOU% 的身边离开，慢步走到了通道口。
  - 缓缓的转过身来朝着正准备前往观众席的 %YOU%，用着只有自己能听见的声音——
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我会加油的，%CALLNAME%～」
  - 右手轻轻抬起，食指与拇指交错在一起，比出了一个小小的爱心。

# 日本德比胜利
toky_yus_win:
  - 最长的 2400 米中距离赛事，由 %CHARA% 夺下了第一。
  - 背负着目白家的名字，在历史上留下了自己的的脚步。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「日本德比，我赢了哦～」
  - 和其他人的画风不太一样，胜利的%CHARA%站在原地，向着前方的观众席软软的挥着手。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我赢了哦～」

# 日本德比失败
toky_yus_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呼哇……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「果然中距离……还是需要继续训练呢。」
  - 缓缓减速停在观众席前，一步步朝着 %YOU% 走了过来。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我，这样算是努力了吗？」
  - 虽然失落，却依旧保持着属于%SEX%的从容微笑。

# 菊花赏
kiku_sho:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「3000 米……第一次长距离G1比赛。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「感觉大家很热闹呢，都在期待的样子。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「小maki……我，可以吗？」
  - 坐在休息室里的 %CHARA% 抱着小小的人偶，朝着自己提问。
  - 软乎乎的脸上带着平日的笑容，金色的瞳孔反射着人偶的小脸。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_13%，那时候也是在这样子的环境下出场的啊。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「真的，很厉害呢。」
  - 外面已经被观众期待的讨论声笼罩，每一位选手上场想必都在承受不小的压力。
  - 即便如此，%CHARA% 也没有脱离慢悠悠的节奏。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是呢，小maki。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我也是目白家的一员，而且我很擅长这种……这种距离呢。」
  - acc: 1
    content: 「看这样是准备好了呢」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是的！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「所以，我是不会退步的……%CALLNAME%。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我可是%CHARA%啊。」
  - 轻笑着回应了 %YOU% 之后，%CHARA% 带着坚定的眼神，开始三冠最后的一战。

# 菊花赏胜利
kiku_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呼，呼……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我……做到了哦？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「像%CALL_13%那样，漂亮的胜利了哦？」
  - color: %COLOR%
    content: 站在终点，无处安放的手按在胸口随着喘气上下浮动着
  - color: %COLOR%
    content: 有些疲惫的眼神向着观众席飘去，寻找着 %CALLNAME% 的身影
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「多亏了%CALLNAME%啊……」
  - color: %COLOR%
    content: 胸口的跳动停不下来，不断的推动着。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「心里……停不下来呢……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那回去之后，就和%CALLNAME%，还有%ELDER_SISTER%们一起开个茶会好了～」
  - color: %COLOR%
    content: 脸上带着微红，远远的看着观众席上的 %CALLNAME%。
  - if: era.get('love:74') >= 50
    lines:
      - color: %COLOR%
        content: 即便比赛已经结束了许久，心里的鼓动也没有停止。
      - color: %COLOR%
        content: 心里的鼓动，还在持续。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊啦……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这个感觉是？」
      - color: %COLOR%
        content: 疲劳的身体浮出了一点微妙的急躁感，但很快又消去了
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「为什么呢？」
      - color: %COLOR%
        content: 疑惑轻轻歪头，看着自己的胸口。
      - color: %COLOR%
        content: 自然，只是看着是什么都看不出来的。

# 菊花赏失败
kiku_sho_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……输掉了。」
  - color: %COLOR%
    content: 站在终点，看着自己的名次。
  - color: %COLOR%
    content: 即便是不会太过在意的 %CHARA%，也会忍不住的难过。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只是耐力，完全不够呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「明明，我也是目白家的一员，却这样失态……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「抱歉……%CALLNAME%。」

# 长途锦标
stay_sta:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「长距离锦标……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「3600米的长距离，我……」
  - 一个人站在门边的 %CHARA%，靠着墙壁调整着呼吸
  - 直到 %YOU% 从门口进来，拍了拍 %CHARA% 的肩膀才反应过来
  - acc: 1
    content: 「这才是你擅长的距离啊。」
  - 虽然只是G2，但却有着不输给G1的体力硬要求。
  - 对于擅长长距离比赛的 %CHARA% 来说，这才是属于%SEX%的舞台。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「说的是呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「毕竟，目白家的强项就是这个呢～」
  - 稍微活动一下肩膀之后，转身推开了休息室的门。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只要是比赛，我就会全力上的。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「请%CALLNAME%，看好了哦？」

# 资深年4月2周
for_tenn_spr:
  title: 天皇赏的执着
  lines:
    - 天皇赏即将开始，%CHARA% 的训练时间又加长了一截。
    - 直到某一天的额外训练时间结束的时候，%CHARA% 没有直接离开，只是站在原地。
    - 训练场上的人并不多，最外圈的训练跑道上只剩下 %YOU% 和 %CHARA% 两个人。
    - acc: 1
      content: 「会很累吗？」
    - acc: 2
      content: 「这几天辛苦了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是～%CALLNAME%也辛苦了～」
    - 虽然有些气喘吁吁的，但仍旧能保持笑容。
    - 对着已经有点落日的天空，金色的瞳孔里反射着 %YOU% 的身影。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……今天能陪我走走吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我，想和%CALLNAME%说说话。」
    - 看着%CHARA%低垂的眼眸，%YOU% 没有异议的走到了%SEX%的身边。
    - 两个人同步离开了训练场，并排走在道路上。
    - acc: 1
      content: 「身体怎么样，没事吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有问题哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，很温柔呢……不过，直接说也没问题哦。」
    - 原本想要换个话题的 %YOU% 愣了一下，但很快又换回了原来的表情
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「春季天皇赏……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我，一定会赢下来的。」
    - acc: 1
      content: 「不害怕吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不，并没有哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这场比赛，是目白家的夙愿。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我一直都明白的，所以我也不会害怕……」
    - 这样说着的%CHARA%，轻飘飘的转过脸来。
    - 两个人对上表情，自然的笑了起来。
    - if: era.get('love:74') >= 50
      lines:
        - 只是笑声之后，%CHARA%的手悄咪咪的往一旁伸去。
        - 手与手轻握在一起，此时此刻%CHARA%微微的颤抖才传到了 %YOU% 的心里。
        - acc: 1
          content: 「果然还是会的嘛。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哎嘿嘿～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，不也有点吗？」
        - 被指出了不安的 %YOU% 有点不高兴，但也只是笑了笑。
        - acc: 1
          key: 'relation'
          content: 「毕竟是你的大赛啊。」（好感+15）
        - acc: 2
          content: 「我可爱的担当可是要出征了啊？怎么会不担心呢。」（爱慕+2）
        - %CHARA%的娃娃脸上的表情呆愣了一下，又重新凑到了 %YOU% 的身旁。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好的～我不会辜负%CALLNAME%的～」

# 春季天皇赏
tenn_spr:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……来了呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天皇赏。」
  - 看着自己发抖的身体，%CHARA% 逐渐不安起来。
  - 即使早就做好了出场的准备，压力也已经实打实的压在了肩膀上。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「春季天皇赏的荣耀，我一定会……」
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - 「不用那么紧张哦？」
  - 在 %CHARA% 还没发现的时候，门已经被打开了。
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - 「你一直都很努力，这次比赛一定会回应你的～」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「就是啊，只要按照平时的风格来就好了！」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「急躁的样子可不像你啊！」
  - 两位%ELDER_SISTER%走进休息室，温柔的轻拍了几下 %CHARA% 的肩膀。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_13%……%CALL_27%……」
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「啊哈哈，看样子能说的话已经被抢走了啊～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「不过，我们都很信任你哦，随意跑就好了啦～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_64%……嗯，我知道了！」
  - 在三个人的注视下，%CHARA% 重新握紧了双手。
  - 带着对比赛的战意，看向目视了全程的 %YOU%，轻巧的点头。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - acc: 1
    content: 「看这样我没什么能补充的了。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不，有您的这句话就足够了。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我会全力以赴……为了目白之名！」
  - acc: 1
    content: 「那就上吧。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯！」

# 春季天皇赏胜利
tenn_spr_win:
  - 胜利的瞬间，属于 %CHARA% 的欢呼声席卷了整个观众席，也笼罩了整个赛场。
  - 缓慢减速下来的 %CHARA% 看着显示屏，又听了听周围的声音，这才开始了欢呼。
  - 春季天皇赏的盾徽，再一次落到了目白家的手里。
  - 不愧是 %CHARA%……站在观众席的 %YOU% 不自觉的浮出了这个想法，与身边同样激动的几位目白家成员一同为搭档鼓掌。
  - 此时此刻，如同感应到了 %YOU% 的想法一样，%CHARA% 回过头看向观众席。
  - 身为搭档的两人对上眼神，默契的一同笑了起来。
  - if: era.get('love:74') >= 50
    lines:
      - 带着明亮的笑脸，一路小跑到了 %YOU% 的跟前。
      - 有些刻意的无视了 %YOU% 身边的几位%SIBLINGS%，轻声喊着。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我们，成功了哦～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……回去之后，一起去吃巧克力吧～」
      - 突然出现的字词让 %YOU% 愣了一下，但很快就理解了用意——
      - 毕竟是有点坏心眼的 %CHARA% 啊。

# 资深年5月1周，天春一着
mejiro_name:
  title: 其名为目白
  lines:
    - 胜利之后，无名的压力一点点的消散。
    - 两个人的办公室里，%CHARA% 安心地躺在沙发上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼哇～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总感觉，很放松呢～」
    - 因为胜利的奖励，今天应该是 %CHARA% 的假日才对。
    - 但还是乖乖的呆在办公室里，安静的看着 %YOU% 的动作。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，不休息吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总是工作的话，身体会吃不消的哦？」
    - 从沙发上起身，站在 %YOU% 的背后呆呆的看着。
    - 空闲出来的双手搭在椅背上，歪着头。
    - 轻柔的鼻息吹在 %YOU% 的后颈，汗毛有些不自然的立了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？是工作结束了吗？」
    - 看见 %YOU% 的手指停下，%CHARA% 单纯的问着。
    - acc: 1
      content: 「不，没事哦……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我说啊，%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「春季天皇赏，已经结束了呢。」
    - acc: 1
      content: 「是啊。」
    - 虽然 %CHARA% 转移话题有些生硬，但 %YOU% 还是接上了话。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在，目标要放在哪里呢……」
    - acc: 1
      content: 「比起比赛，你不休息吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不会，休息自然是会做的哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是……不确定目标的话，感觉时间会呼哇～一下就过去了呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，这也是为了目白家哦。」
    - acc: 1
      content: 「光明你真是很在意这个呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那是当然啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟，和%ELDER_SISTER%们约定过了呢。」
    - 原本软乎乎地趴在椅背上的 %CHARA% 缓缓抬起脸，看着空无一物的前方，仿佛能看见未来一样。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且我也是这样希望的呢……将目白家的名字一直延续。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「比赛也好，其他的事情也是。」
    - 原本看着前方的眼神缓缓往下，看着 %YOU% 转过来的脸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，你会陪在我的身边吗？」
    - acc: 1
      key: relation
      content: 「我可是你的训练员，这点事情不是当然的吗？」（好感+20）
    - acc: 2
      content: 「我会一直在你身边的，光明！」（爱慕+3）
    - 听见了 %YOU% 的回答，%CHARA% 愣愣的睁大了双眼。
    - 但很快，又被脸上的微笑压了下去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……好的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们两个人一起，将目白的名字延续下去吧～」

# 宝冢纪念
# 有多伯出战
takz_kin:
  - 说到宝塚的话，目白的名字也一样能够有一席之地。
  - 带着这样的想法，如今的 %CHARA% 站在赛场上看着眼前热浪吹过的赛道。
  - 不知为何，在这个赛场上有些不安的感觉。
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「那个，光明？你的样子有点奇怪啊……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「没有，我没什么事哦？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「多伯你又怎么样呢？宝塚纪念的选手都是很厉害的%UMA%哦。」
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「我是没什么特别在意的……」
  - 两个人站在闸门前，看着热风吹过草皮。
  - 莫名焦躁的 %CHARA% 活动着肩膀，发出了碰撞声。
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「那个，光明？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯？怎么了吗？」
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「好啦，那个……不要再碰闸门啦。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「唉——有吗？」
  - 停下胡思乱想的 %CHARA% 看着从隔壁探头过来的%D_NAME%，呆呆的歪着脸。
  - 至于被 %CHARA% 不知不觉中碰出来的小小凹痕，就没人注意到了。

# 秋季天皇赏
tenn_sho:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「秋季天皇赏，啊。」
  - 看着休息室墙上的海报，%CHARA% 呆呆的朝着身旁的 %YOU% 靠了过来。
  - 尾巴轻轻的甩了几下，轻柔的毛发落在 %YOU% 的手臂上，挠的稍微有些发痒。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我说，%CALLNAME%。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「中距离的比赛……我能赢吗？」
  - 对于擅长长距离赛场的 %CHARA% 来说，中距离的秋季天皇赏算是一场对自己的挑战了。
  - acc: 1
    content: 「会赢的。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯，我也是这样相信的哦。」
  - 在 %YOU% 的声音下，%CHARA% 的耳朵轻巧的弹跳了两下。
  - if: era.get('love:64') >= 50
    lines:
      - 视线从海报上移开，稍稍往上移动，看着 %YOU% 的侧脸。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「谢谢你，%CALLNAME%……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「目白家的名字，我会继续传承下去的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那个时候，%CALLNAME%请和我一起……」
      - 话语短暂的暂停过后，金色瞳孔里只留下了 %YOU% 的身影——
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「请和我一起在目白家……」
  - 比赛预备的声音，已经开始了。
  - 从椅子上起身，拍打了几下洋娃娃般的长裙。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我，会全力上的！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「秋季天皇赏！」

# 秋季天皇赏胜利
tenn_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哈啊，哈啊……」
  - 和习惯的长距离不同，中距离更快的节奏，令体力充足的 %CHARA% 也停不下喘气的动作。
  - 但是周围传来的欢呼声，证明了此刻身体的疲劳是有意义的。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「大家……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这样的话……%ELDER_SISTER%们，奶奶也会很高兴吧。」
  - 清笑着的 %CHARA% 对着欢呼的观众，轻飘飘的挥舞起手臂打起招呼来。

# 有马纪念
arim_kin:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - acc: 1
    content: 「……」
  - 年末最后的一场比赛，有马纪念。
  - 换好决胜服的 %CHARA% 紧张的站在通道口，深深的吸一口气。
  - 直到背后，响起了熟悉的声音，这才打断了 %CHARA% 僵硬的动作。
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「令人怀念呢～有马纪念！」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「不用那么紧张的哦，光明，长距离比赛是你擅长的吧？」
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - 「明明莱恩你才是紧张的哪一个呢～」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「怎么会，我只是在为光明应援啦！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是～我确实接受到了哦～」
  - 在%ELDER_SISTER%们的玩笑声里，原本因为紧张感抖个不停的身体逐渐平静了下来
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「那个，光明。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯？怎么了？」
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「……加油啊。」
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「我们会一直为你加油的！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「好的～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我会跑出，符合目白之名的跑法的～」
  - 在 %D_NAME% 红着脸的应援之后，%CHARA% 轻笑了起来。
  - 转过身去，只要再踏出一步就会进入赛场。
  - acc: 1
    content: 「要加油啊！」
  - 背靠着墙壁的 %YOU%，对 %CHARA% 说着。
  - acc: 1
    content: 「不只是因为目白家的名字，也为了光明你自己——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呼呼，%CALLNAME% 会这样说让人有点意外呢～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我明白了，就让我跑出符合 %CALLNAME% 想象中的——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那个 %CHARA% 的样子吧！」
  - 向前踏出步伐，走进有马纪念的赛场。

# 有马纪念胜利
arim_kin_win:
  - content:
      - fontWeight: bold
        content: 解说
      - 「有马纪念的胜者是——%CHARA%！」
  - 欢呼的声音，奔涌到了 %CHARA% 的身边。
  - 不负目白之名，跑出了属于%SEX%的胜利。
  - 因为家族而为自己带上枷锁的 %CHARA%，此刻已经完全脱下了这份责任。
  - 重新回到休息室里 %CHARA%，规矩的坐下，尾巴开心的左右扫着。
  - 长长的呆毛像是有灵魂一样上下弹跳了几下，随着哼着的小曲蹦跶起来。
  - 柔顺的长发被 %YOU% 轻轻的梳直，恢复了平时顺滑的样子。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不愧是 %CALLNAME% 呢～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「感觉很舒服呢～」
  - if: era.get('love:74') >= 90
    lines:
      - 虽然为了迎合 %YOU% 的动作，上半身不能随意活动，但是尾巴却已经开始了不老实的动作。
      - 棕色的毛发轻轻缠上了 %YOU% 的小腿，往前小拉了几下。
      - acc: 1
        content: 「比赛跑得很漂亮哦」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼呼～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「毕竟是%CALLNAME%教的嘛～」
      - acc: 1
        content: 「嘿，真会说。」
      - acc: 2
        content: 「只是因为这个吗？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼～哇～」
      - 如果不是凳子比较矮，现在 %CHARA% 的小腿应该已经荡起来了。
      - 直到长发被打理好了，这才松开了摇晃的小脑袋。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……真是舒服呢～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「果然，%CALLNAME%很擅长做这种事呢～」
      - 坐在椅子上的 %CHARA% 转过脸，看着 %YOU% 的样子。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「现在，比赛结束了呢……」
      - acc: 1
        content: 「是啊，可以休息一段时间了呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「之后……%CALLNAME%会和我一起回去吗？」
      - 轻微起伏的胸口，逐渐加快了动作，在安静的空间里仿佛能够听见心跳的声音。
      - 早已前往会场为胜利的 %CHARA% 准备晚宴的各位姐妹，现在一定不会出现——
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我……难得的，想要着急一点了呢～」
      - acc: 1
        key: sex
        content: 「这不像你啊，回去再说吧？」（爱慕+5）
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这不像我吗……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呼呼～%CALLNAME%，您也很喜欢这样慢悠悠的呢～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……那么，我会一直等待%CALLNAME%的。」
          - 带着和平时别无二致的笑容，端庄的站起身，慢步走到了 %YOU% 的面前。
          - 轻轻的在 %YOU% 的脸上，留下了带着清香的印记——
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「请您，把这件事提上日程呢～」
      - acc: 2
        content: 「既然难得的话，我会陪你的……」
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「是的呢～」
          - 带着轻飘飘的声音，轻手轻脚的站起身。
          - 肉肉的脸蛋埋进了 %YOU% 的胸口，享受着属于 %YOU% 的感觉。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「事不宜迟……」
          - 纤细的手指勾动决胜服的领口，露出洁白的内衣；
          - 空出来的另一只手，把 %YOU% 的手掌慢慢的放到了自己的胸口。
          - 温热又柔软的肉体，正被 %YOU% 的手紧紧的抓住。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「请你……着急～的来做吧～」
          # 马儿跳

arim_kin_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊……沉甸甸的呢～」
  - 双手抱着被疲劳感袭击的小肚子，脸上却是呆萌的笑脸.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是不是稍微有点过于着急了呢？哼哼～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是，我不会讨厌 %CALLNAME% 的哦？」
  - 赶在休息时间快结束之前，%YOU% 帮 %CHARA% 换好了衣服。
  - 虽然差点赶不上的原因，是因为 %YOU% 呢。

# week_end
# 结束后1月4周，主线事件触发数>4
accel_era:
  title: 逐渐加速的时代
  lines:
    - 三年的时间已经结束，%CHARA% 和 %YOU% 在一个平静的休息日，就像是初次相遇时一样坐在公园的长椅上。
    - 在享受着两个人之间一点点溜走的时间，却也将眼前晨练的%UMA%们尽收眼底。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在的感觉，很熟悉呢～」
    - 虽然声音里还是带着轻飘飘的感觉，却能感受到并不自然的部分。
    - 对于习惯了慢节奏了 %CHARA% 而言，看着眼前的新人%UMA%们加速的样子是什么样的想法呢？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但愿意陪着我等待那片落叶的，只有%CALLNAME%呢～」
    - acc: 1
      content: 「是这样吗……」
    - 搭档的时间为 %YOU% 解答了此时此刻的 %CHARA% 想说的话，但却没有挑明。
    - 比起耐力更加需要速度的比赛，并不是 %CHARA% 的舞台。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是绿叶呢……」
    - acc: 1
      content: 「今年的绿叶出来的很早呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天，应该看不见枯叶了呢。」
    - 声音里带着一丝不舍，但却没有多明显。
    - acc: 1
      content: 「到处都在变快呢……」
    - 和 %CHARA% 并排作者的 %YOU% 顺着视线看向上方，树枝上已经没有像初遇时那样的枯叶了。
    - 如%SEX%所言，一点小小的新绿出现在枝头。
    - acc: 1
      content: 「现在就连植物也在变快啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，不用说的那么委婉的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就算是我，也会准时去看现在的比赛的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家，都在转去关注英里赛道的孩子们了对吧？」
    - 不知何时开始，身边的那双金色的瞳孔，已经转向了 %YOU%。
    - 不舍，哀伤，却坚定。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总有一天，目白家也会有孩子在那些赛道登场吧……」
    - acc: 1
      content: 「嗯，会有的。」
    - acc: 2
      content: 「一定会有的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢……」
    # 好感+50

# --------------------------------
# 触发事件
# --------------------------------
# out_shopping
# 热恋以上，资深年新年
hot_spring_ticket:
  title: 温泉旅行卷……？
  lines:
    - 新年的商店街四处热热闹闹的，连带平日软绵绵的 %CHARA% 也兴奋了起来，拉着 %YOU% 不自觉地加快了脚步。
    - 从小摊上捧起刚刚烧好的章鱼丸子，轻轻的吹去飘起的热气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%，您也吃一口吧？」
    - 年初的天气有些寒冷，%CHARA% 嘴里不断冒出温热的白色气息。
    - 手上的竹签戳着热腾腾的丸子，送到了 %YOU% 的面前。
    - 事已至此，%YOU% 也自然的拉下围巾张嘴吃下一颗……
    - 毫无疑问的，很快就被被烫到，只能半哭着吐出舌头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，来，是饮料哦～」
    - 在 %YOU% 悲伤的想着怎么处理舌头的时候，%CHARA%递 出了一杯冰凉的果汁。
    - 酸甜的味道压下烫伤的痛，把 %YOU% 脸上的悲伤按了下去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%，你看那边」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好像是抽奖哦？」
    - 被%SEX%指着的，是放在入口附近的摊位。
    - 算上刚才的饮料的话，应该足够抽奖了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抽奖卷，已经兑换好了哦～」
    - 没等到 %YOU% 说什么，%CHARA% 已经开始拉着 %YOU% 往抽奖的队伍走过去。
    - acc: 1
      content: （到底什么时候……）
    - %CHARA% 的耳朵一跳一跳的，时不时回头偷看 %YOU% 的脸。
    - 安静跟着队伍往前，不知不觉间已经到了。
    - 看着眼前满眼星光的 %CHARA%，%YOU% 自然的伸出了手，一起抓住了抽奖机的手柄，缓慢地转动起来。
    - 伴随着滚动的声音，%CHARA% 摇晃的耳朵突然立了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 商店街的工作人员
        - 「哦哦，恭喜！是温泉旅行卷哦！」
    - acc: 1
      content: 「唉？真的？」
    - 反应过来的 %YOU% 低头看向托盘，是一颗金色的小球正在中间滚动。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，温泉旅行卷耶～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是现在还要备战呢，应该是没时间去啦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不过，%CALLNAME%，会陪我去的吧？」
    - 带着丝毫没有打算让 %YOU% 拒绝的意思，将那张旅行卷推倒了 %YOU% 的面前。
    - 这下不得不收下了。

# out_start
# 第四年2月2周，有温泉卷
hot_spring:
  title: 温泉～轻飘飘的～
  lines:
    - 竞赛的日子已经告一段落，而退役相关的事情也处理的差不多了。
    - 忙碌结束的 %YOU% 和 %CHARA% 松了口气，来到了商店街附近准备好好的休息一阵。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，说起来……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个时候，就是在这里拿到的吧？」
    - 走到那个熟悉的摊位时，%CHARA% 冷不丁的冒出了这一句话。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，您现在有带着吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们的温泉旅行卷～」
    - 仿佛今天的行程就是为了提起这件事一样，专门来到了这里。
    - 自然，这张旅行卷此刻正在 %YOU% 的钱包里等待着时机到来。
    - acc: 1
      content: 「当然，难道你现在就想去吗？」
      lines:
        - 看着你从钱包里取出那张旅行卷，%CHARA%半睁的眼睛稍微瞪大了一点。
        - 盯着卷面上的时间，稍微有点夸张的拉住了 %YOU% 的手。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，好像快要过期了耶……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不如我们，今天就去吧？」
        - 有些疑惑的 %YOU% 将旅行卷翻过来看了一眼，发现正好只剩几天了。
        - 既然如此，索性就出发吧。
    - acc: 2
      content: 「啊咧，没带呢（捧读）」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「怎么这样～」
        - %CHARA% 可爱的声音拉的很长，但只要认真听就能知道是故意的。
        - 既然是故意的，那就有后续。
        - 小跑两步过来的 %CHARA% 拉着 %YOU% 的袖子扯了几下，像个小女孩一样露出了撒娇的眼神。
        - 即使知道这是装出来的，但那双平日见不到的泪眼汪汪的大眼睛还是让 %YOU% 本来想逗逗%SEX%的心感到了罪恶感。
        - 收起其他的心思，重新打开钱包装作查看的样子，把旅行卷拿了出来
        - acc: 1
          content: 「啊，找到了（捧读）」
        - 看着拿出来的旅行卷，%YOU% 却感觉到了一点点不太对。
        - 在 %CHARA% 满是期待的表情下，%YOU% 拿起旅行卷认真的看了一眼时间——
        - acc: 1
          content: 「这不是只剩三天了吗？！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊啦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为了不浪费，我们一起去吧？」
        - 圆圆的小脸微微歪过去一点，靠在 %YOU% 的肩膀上。
        - 事已至此，怎么可能拒绝呢。
    - 来到这间在马推上人气相当高的旅馆，%CHARA% 也不自觉的抓紧了 %YOU% 的手。
    - 感受到手上的力气侧脸过去的时候，正好对上了 %CHARA% 充满精神的眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我们一起进去吧～」
    - 说着，%CHARA% 便拉着 %YOU% 往大门走去，有些轻车熟路的在前台定好了房间。
    - 在身后看着这一切的 %YOU%，嘴角也自然的向上翘了起来。
    - divider: true
    - 躺进浴池的时候，%YOU% 还是不自觉的发出了舒适的声音。
    - 果然能在马推上有高人气果然是有原因的。
    - 浸泡在浴池里顺着水流滑下去，享受着水温……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜哇～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「暖呼呼的～」
    - 听着耳边传来 %CHARA% 轻飘飘的声音，也给这场度假增添了一点安心感。
    - 只是这安心感随着时间流动，慢慢变成了不安。
    - acc: 1
      content: 「嗯？光明呢？」
    - 有些晕乎乎的 %YOU% 从热水里站起身，正准备离开的时候，意识到了什么。
    - 似乎没有看见 %CHARA% 出去的样子。
    - 为了不省心的担当，%YOU% 随手抓起浴巾就想往其他浴池走去，结果却看见熟悉的长发就在身边。
    - 这个距离的话，约等于什么都看到了吧。
    - acc: 1
      content: 就当%SEX%只是天然呆吧，嗯。
    - acc: 1
      content: 肯定是故意的吧……
    - 放弃做过多的思考，蹲下来查看一下%CHARA%的状态怎么样。
    - 对于 %CHARA% 来说，这是很自然的现状。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼哇哇……」
    - 随着温泉的暖意很自然的就泡晕过去了呢。
    - 稍微用力将泡在水里的身体扶起来，尽力移开视线，再披上浴巾……
    - acc: 1
      content: 「真是的，不让人省心」
    - 嘴上低声抱怨了一句后，%YOU% 还是乖乖的抱着 %CHARA% 离开了睡眠，两个人一起坐在温泉边上。
    - 随着 %YOU% 轻手轻脚擦干净身上的水滴，%CHARA% 也缓慢睁开了双眼。
    - 确定身边人的瞬间，毫不犹豫的向着身边蹭了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「晕晕的～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，幸好%CALLNAME%在我的身边呢～」
    - 毫不犹豫的钻进 %YOU% 的怀里，圆圆的脸贴 %YOU% 的小肚子上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……啊咧？」
    - 趴在 %YOU% 怀里的 %CHARA% 突然间颤抖了一下，缓缓的抬起脸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感觉，热热的呢？」
    - 仿佛明知故问般的 %CHARA%，轻手轻脚的抓住 %YOU% 的浴巾。
    - 白色的浴巾被拉下时，%CHARA% 的脸上沾满了绯红。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……很兴奋的样子……」
    - 或许是因为温泉的温度，%CHARA% 的脸沾满了绯红色，有些羞涩的将视线转移。
    - acc: 1
      content: 「明明是因为你呢」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「因为我……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但是%CALLNAME%，并没有那么讨厌的吧？」
        - 自觉的后退了一点，发出了不符合人设侥幸心理发言。
        - 为了惩罚不自觉间做错了事情的%CHARA%，%YOU% 甩下浴巾向前——
        - 强行堵住了试图说谎的嘴唇。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唔唔！」
    - acc: 2
      content: 「没关系哦，光明」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但是，%CALLNAME%，好像很难受的样子……」
        - 就像 %CHARA% 所说的一样，虽然 %YOU% 还带着笑容，但身体没有说谎。
        - 红润的样子，不像是温泉的原因。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这是因为我的话，我要负起责任才行！」
        - 这次的反应意外的很快，立刻扑倒了身形不稳的 %YOU%。
        - 听着耳边粗重的呼吸声，%YOU% 决定了——
        - acc: 1
          content: 「不忍了！」

hot_spring_sex:
  - 回到房间的时候，%YOU% 和 %CHARA% 红透了脸，两边都没有开口。
  - 当 %YOU% 伸手擦掉脸上的水滴时，%CHARA% 已经坐在坐垫上大口喘气了。
  - acc: 1
    content: 「温泉里做这些事情还是太勉强了呢～」
  - 一旁的 %CHARA% 擦擦汗水，退去脸上的红色后才笑着回应了 %YOU%。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「说的是呢～」
  # 爱慕+2

# week_end
# hot_spring 后，佳偶以上
wish:
  title: 愿望
  lines:
    - 坐回自己的座位时，%YOU% 长长的松了口气。
    - 温泉旅行的经历虽然很开心，但无论怎么想都太……有计划性了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～您有时间吗？」
    - 门外传来软绵绵的嗓音，在 %YOU% 的回应下才响起转动把手的声音。
    - 走进办公室的%CHARA%毫不犹豫的走到 %YOU% 的身边，随手拉过来一张小凳子坐下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……我觉得有些事情还是要说出来呢。」
    - 一反常态的，没有平时呆呆的样子，而是认真的看着 %YOU%。
    - acc: 1
      content: 「是温泉旅行的事情吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不愧是%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然，您很了解呢！」
    - 倒不如说很难猜不到。
    - 布局有点太过明显了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个旅馆，其实不是第一次去了哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在我小时候，目白家偶尔会家族旅行，就会选择温泉旅馆。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，我之前就一直想要和%CALLNAME%一起去一次……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过有点太急躁了～」
    - 虽然嘴上是轻飘飘的感觉，但 %YOU% 能感觉到话语中有一丝失落感。
    - acc: 1
      content: 「是还有话想说，对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不愧是您呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对我来说，只有家人才会一起去温泉。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，%CALLNAME%……」
    - 话语再次停止，金色的瞳孔和 %YOU% 对视着。
    - 随着 %CHARA% 的脸浮出红色，才继续没说完的话。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「原本这句话应该在旅馆说的呢……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%YOUR_NAME%，您会成为我的家人吗？」
    - acc: 1
      content: 「如你所愿哦，光明。」
    - 红润更加明显，衬托着表情更加兴奋。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好的……好的！%CALLNAME%！」
  # 好感+50

# week_start
# 爱欲以上，疏于训练
where_is_time:
  title: 时间……哪里去了？
  lines:
    - 中庭的长凳上，%CHARA% 单独一个人享受着安静的时光
    - 不知道时间过去多久，%YOU% 才找到了中庭这里。
    - acc: 1
      content: 「……光明？」
    - 听见了 %YOU% 的声音，%CHARA% 有点呆愣的回过头来，看向身后。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么时候来到这里的？」
    - acc: 1
      content: 「刚刚才找到。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刚刚……的意思是？」
    - 察觉到了什么的 %CHARA% 缓慢的抬起视线，稍微扫视了一下周围。
    - 阳光的方向已经从正上方转向了西方，说明下午的时间已经溜走了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起，%CALLNAME%，我居然……」
    - acc: 1
      content: 「没关系的哦。」
    - 与 %CHARA% 落下去的耳朵相比，%YOU% 只是笑着伸手在圆圆的脑袋上揉动了几下。
    - acc: 1
      content: 「我也有没找到你的责任.」
    -
    - acc: 1
      content: 「今天就这样度过，也不错。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好的！」
    - 柔软的耳朵轻巧的弹起，夹住了 %YOU% 放在%CHARA%头上的手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一起悠哉悠哉的度过这段时间吧，%CALLNAME%～」
    # 耐力+10，智力+10

# week_start
# 爱欲以上，熬夜
sleep:
  title: 来好好地睡一觉吧
  lines:
    - 昏昏欲睡的一个工作日之后，%YOU% 终于来到了下班的时间
    - 昨日的熬夜成功的攻击到了 %YOU% 现在的精神状态，在椅子上差点睡着，只能强撑着身体在继续看着面前的训练方案，
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼哇……%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……啊啦？」
    - 疲劳的 %YOU% 甚至没有发现 %CHARA% 走进了房间里，只是在继续自己的工作。
    - 虽然 %CHARA% 的反应比较慢，但现在的状况还是一眼就能看明白这是发生了什么事情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，又熬夜工作了吧……」
    - 缓慢的走到 %YOU% 的身后，随意的扫视一下桌面，嘴角自然的翘起来一点。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，您辛苦了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，你不需要这样伤害自己的哦……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「休息一会……不对，一直休息也可以的哦。」
    - 双手环过 %YOU% 的脖子，往自己的胸口压下去
    - 感受着 %YOU% 的后发在胸口的感觉，%CHARA% 不由得笑了起来，把脸蛋贴在头顶轻轻蹭了两下。
    - acc: 1
      content: 「光明……」
    - 迷迷糊糊的 %YOU% 享受着身后的柔软，一阵强烈的困倦感涌上眼前。
    - 眼皮逐渐的沉重起来，渐渐地睁不开来……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「睡一觉吧，%CALLNAME%～」
    - 再次睁开眼的时候，%YOU% 的眼前不再是满是杂乱的桌面，而是深蓝色的特雷森校服。
    - 在 %YOU% 还没想明白为什么会出现这样的画面时，眼前的深蓝色却先动了起来，摇摇晃晃的。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「您睡的舒服吗？这还是我第一次给别人膝枕呢～」
    - %CHARA%的脸从上方探出来，温柔的笑着。
