# @file 目白光明 - 爱慕
# @author KUN
# 49爱慕，结束回合触发
49:
  title: 我们二人的可可树
  lines:
    - 平凡的一个休息日，%CHARA%却突然间把无所事事的%YOU%邀请来了目白家的庄园。
    - 如同两个人第一次见面那时候一样，她静静的坐在树荫下等待着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天突然找到您，没有打扰到什么吧？」
    - 依旧慢悠悠的声音有些怯怯的询问着，但却已经自然的为面前的茶杯添上了红茶。
    - 对于接受了邀请的的%YOU%来说，%CHARA%的询问不过只是问候罢了。
    - 自然的坐下，拿起茶杯小小喝了一口之后，却看见面前出现了一盒稍微有点粗糙的巧克力。
    - acc: 1
      content: 「这个是？」
    - 目白家的话，应该是不会拿出这样的巧克力的。
    - 那么，应该就是其他的含义吧。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是我做的哦～」
    - 看着有些疑惑的%YOU%，%CHARA%不自觉的笑了起来。
    - 轻轻的将面前的盒子向前推去，有点期待的看着%YOU%下一个动作。
    - 对着面前形状有些随意的巧克力，%YOU%有点疑惑的拿起了一块。
    - 直到轻轻咬下一口，这才理解了看似粗糙的原因。
    - acc: 1
      content: 「做的时候也是慢悠悠的，对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「正确～%CALLNAME%很擅长猜中原因呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那……%CALLNAME%知道原材料是什么嘛？」
    - 从巧克力上去猜原材料，稍微有点困难呢。
    - acc: 1
      content: 「融化了高档礼品店的巧克力吗？」
    - acc: 2
      content: 「是专门去买的可可豆吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵……不是哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「答案是——这个庄园里的可可树哦～」
    - 原本撑着脸的双手放了下来，轻轻指向一旁——
    -
    - 那是一棵有些年份的可可树，似乎已经在这个庄园里存在了很久。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我想和你一起，在这里也种下一棵可可树。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的话，每年结果的时候我就能为%CALLNAME%做一份独属于我们的巧克力了～」
    - acc: 1
      key: update
      content: 「好啊，一起来吧！」（升级关系）
      lines:
        - 听见了%YOU%的回应之后，%CHARA%脸上的笑容变的更加灿烂。
        - 没有等待多久，庄园的工作人员就在仓库里找到了一棵小小的可可树树苗。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「来，我们一起种下去吧～」
        - 看着眼前的可可树，%YOU%也拉起了袖子。
        -
        - divider: true
          position: left
          content: 满怀热情的劳动之后
        -
        - 不知道忙碌了多久，顶着头顶的阳光将可可树种好了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好了～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「总有一天，我们能一起在这里乘凉的吧。」
        - 带着明亮的笑容，轻轻的往%YOU%的胸口贴了一下。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你说对吧？%CALLNAME%～」
    - acc: 2
      content: 「如果那天有机会的话……」（暂不升级）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好～」
        - 声音里稍显落寞，但却没有一点表现在脸上。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我会等待着哦，直到那一天～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「因为，我就是那样的慢性子嘛～」

# 74爱慕，开始回合触发
74:
  title: 自然相依
  lines:
    - 一日，二人一起度过。
    - 再一日，二人一起度过。
    - 不知多少日，二人依旧一起度过。
    - 最开始，仅仅只是训练时间会待在一起。
    - 逐渐的，休息时间也不知不觉间坐在一起。
    - 而现在，只要能在一起的时候，%CHARA%就会出现在%YOU%的身边。
    - 没有约定也没有契约，只是很自然的出现在一起。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼哇～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，差不多到训练员休息的时间啦～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「……唉？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「今天也要过去？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是～」
    - 和%D_NAME%怪怪的表情不一样，%CHARA%的脸上只是有点疑惑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「和%CALLNAME%一起慢悠悠～的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感觉很自然呢～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「很自然……你知道你这是什么意思吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还有什么意思？」
    - 坐在教室里的%CHARA%看着自己的妹妹，有点呆愣的歪歪头。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「真是的，你这样……」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「简直，简直就像是……」
    - 原本有点硬气的%D_NAME%红着脸，犹豫着要不要把剩下的话说出口。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「多伯？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「……像是，情侣什么的」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「情，侣？」
    - 听见有些意外的答案，即使是%CHARA%也愣住了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （情侣……？）
    - 没等过去多久，脸上稍微带上一点微红的%CHARA%站了起来。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「喂，喂？光明？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……该去找%CALLNAME%了呢。」
    - 轻飘飘的语气里带上了一点坚定，站起身没有犹豫的走出门。
    -
    - 如同往日一般，自然的走进门，自然的呆在%YOU%的身边。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - 虽然现在的%CHARA%脸上依旧是微红色，但是没有一点异常。
    - 轻轻地抱着%YOU%的手臂，把逐渐躁动的心又放了下去。
    - 喜欢这件事，就悄悄～的，放在心底。
    - 悠哉悠哉的，慢悠悠的，等着那一天……

# 89爱慕，一起小憩触发
89:
  title: 无自觉间，已然深爱
  lines:
    - 暂时放下了工作，稍微有些疲劳的%YOU%和%CHARA%一同选择了休息。
    - 办公室里的气温很舒服，很快就已经进入了适合午睡的状态。
    - 就像是以往那样子，忽略了时间，慢悠悠的享受了这段时光。
    - 只是今天，有些不同。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼哇～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%还没有睡醒吗？」
    - 有点没睡醒的%CHARA%，轻轻的抱住了%YOU%的身体。
    - 眼睛再一次眯起，全身沉浸在熟悉的气息里。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%的气味～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是，令人安心呢～」
    - 身体紧贴在一起，软乎乎的脸在%YOU%的头发上轻轻的擦动了几下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「轻飘飘～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼呼～」
    - 双臂逐渐无意识的抱紧，几乎要把自己融进去一样。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……哈啊」
    - 没有像想象中的一样睡到和%YOU%一起醒来，而是单独睁开了眼睛。
    - 下意识用力的手缓缓松开，把贴在一起的身体分开来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎呀，我这是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「暖呼呼的……」
    - 有些呆呆的，在依旧睡着的%YOU%身旁站了起来。
    - 手指贴着自己喉咙，缓缓的向下滑去。
    - 顺着深蓝色的校服，跳过蝴蝶结，越过裙子……
    - 直到接触到洁白的的布块时，才察觉到了原因。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为什么呢？」
    - 微微侧头的%CHARA%，看着有点湿润的指尖。
    - 还在升温的身体，逐渐的洗去了运动带来的困意。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个感觉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总感觉……」
    - 逐渐动起来的腰，渐渐靠近%YOU%的身边……
    - 眼中反射出%YOU%沉睡的样子，不禁加快了大腿摩擦的动作。
    - 默默的靠近到椅子后方，手指伸向了下身。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为什么……感觉那么好呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感觉，感觉要……」
    - 安静的房间里，响起了异样的声音。
    - 看着眼前发生的事情，慢悠悠的%CHARA%也难得慌张了起来。
    - 好不容易处理好了面前的事情，也到了平时应该醒来的时间。
    - acc: 1
      content: 「啊，光明？」
    - 看着眼前脸上还微微留着红晕的%CHARA%，刚刚睡醒的%YOU%也只觉得这是睡醒的原因而已。
    -
    - 到了离开的时间，%CHARA%和%YOU%在校门口分开。
    - 因为疲劳而什么都没有发现的%YOU%随意打了个招呼之后，打着哈欠离开了。
    - 远远看着%YOU%的%CHARA%，回想起自己做的事情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！」
    - 慢性子的%CHARA%，却是有些急躁的跑过去抱住了%YOU%的腰
    - acc: 1
      content: 「怎，怎么了？光明？」
    - 虽然动作很快，但却没有直接说出口。
    - 直到落日的光芒洒下，%CHARA%才缓缓的开口出声。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「会一直在一起的吧……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一起在那棵可可树下，一起乘凉……」
    - acc: 1
      content: 「……已经约定过了啊。」
    - acc: 2
      content: 「……那不是当然的吗。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……是吗～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你，%CALLNAME%～」
    - 紧紧抱住的双手失去了力气，缓缓松开。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说起来，明天%CALLNAME%和我都有假期吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……机会难得，要去看看我们的可可树吗？」
    - acc: 1
      key: update
      content: 「好啊。」（升级关系）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是～～」
        - 喜笑颜开的%CHARA%牵住了%YOU%的手，拿起电话通知了司机。
        - 只是车向，似乎有些异常……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「在可可树之前……」
        - 同样坐在后座的%CHARA%，靠到了%YOU%的耳边。
        - 静悄悄的，咬住了耳垂。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我想让%CALLNAME%……看一看其他的东西呢」
        # 马儿跳
    - acc: 2
      content: 「今天有点累……」（暂不升级）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那就没办法了呢……」
        - 微红的脸上浮出了一点点遗憾，只是轻笑了一下。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明天，再一起去看吧，%CALLNAME%～」

89_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「对不起，%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今天稍微有点冲动了……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是，%CALLNAME%也很舒服吧？呵呵～」

99_1:
  title: 不论你我，早已深陷其中
  lines:
    # 99爱慕，回合结束
    - color: %COLOR%
      content: 假期的%CHARA%呆呆的坐在自己的房间里，看着窗户外的夜空。
    - color: %COLOR%
      content: 少女风格的房间里，摆放着成对的人偶。
    - color: %COLOR%
      content: 不知道从什么时候开始，房间里零零散散的人偶都有了伴。
    - color: %COLOR%
      content: 每一个小小的人偶旁边，都坐着成对的另一个人偶。
    - color: %COLOR%
      content: 此时此刻，房间里孤身一人的就只剩下%CHARA%自己……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%要是在这里……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果%CALLNAME%在这里就好了……」
    - color: %COLOR%
      content: 抱住最爱的两个玩偶，轻轻摇摆着够不到地面的小腿。
    - color: %COLOR%
      content: 摇晃着上半身看着身旁——看着身旁留出的另一个位置。。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content: 缓缓的弯下腰，抱紧了怀里的人偶，遮住了半张脸。
    - color: %COLOR%
      content: 瞳孔里反射出的房间里，有%YOU%的身影。
    - if: era.get('cflag:0:0') === 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……想您了……我亲爱的，夫君大人……」
    - if: era.get('cflag:0:0') !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……想您了……我亲爱的，训练员大人……」

# 99爱慕，【不论你我，早已深陷其中】触发后下一回合
99_2:
  title: 你是我的光明
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「亲爱的～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「终于又见到你了～」
    - 在办公室里再次见面的时候，%CHARA%带着一定会被听见的人误解的话飞扑到了%YOU%的身上，圆滑的脸用力的往胸口蹭去。
    - 就像是一只可爱的大狗狗一样，一直埋在这里。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼～哼～」
    - 拥抱着%YOU%的%CHARA%，轻轻地哼起了小曲。
    - acc: 1
      content: 「那个，%CHARA_FULL%？」
    - 被拥抱的开始出汗的%YOU%，有点无奈的提起了她的名字。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼哇？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - 似乎反应过来了的%CHARA%，终于愿意松开手。
    - 带着羞红的脸向后退了两步，和%YOU%稍微拉开了一点距离。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「非常抱歉，%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「几日未见，稍微有些过于想念了呢～」
    - 难得一见的在%YOU%面前低下耳朵的%CHARA%，有点不安刮了刮自己的脸。
    - 尾巴和不敢多说的本人不同，正在兴奋的摇摆着。
    - 或许是因为熟悉的味道，%CHARA%看上去有些扭捏的样子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为，我真的很喜欢%CALLNAME%的气味嘛！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的非常抱歉……」
    - 道歉之后，安静的向后又退了一步。
    - 看着眼前%CHARA%与往常不一样的行为，%YOU%也疑惑了起来。
    - acc: 1
      key: sex
      content: 「亲爱的？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是的呢～」
        - 听见%YOU%的疑问，%CHARA%的脸上没有一点的疑惑和害羞，只是在保持着微笑。
        - 身体微微前倾，扎在前方的辫子带着香味在%YOU%的鼻子上轻抚了一下。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，难道说%CALLNAME%很喜欢吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼呼，以后我也可以这样称呼您的哦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「还是说，%CALLNAME%更想要更～加深入的称呼呢？」
        - 说着令人浮想翩翩的话，缓慢的靠到了%YOU%的胸口。
        - 双手轻轻的扒在衣服上，手指灵动的在皮肤上跳动了几下。
        - 有点呆的眼神在看着%YOU%的时候，逐渐变的恍惚起来。
        - acc: 1
          content: 「光明的话，我不介意的。」
        - 在眼神里的神情变的更加奇怪之前，%CHARA%合上了眼。
        - 从%YOU%的身前退开，重新站好。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要去可可树哪里看一看吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我们一辈子的，见证……」
    - acc: 2
      content: 「气味？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「气味吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼呼～%CALLNAME%真是怪呢～」
        - 站在%YOU%眼前的%CHARA%立刻向前，双手环过腰再次拥抱住。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「喜欢就是喜欢嘛～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「亲爱的%CALLNAME%，有着令我离不开的味道呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯哼～」
        - 比起刚才似乎有些没睡醒的样子，现在的%CHARA%以清醒的意识抱了上来。
        - 即使想要推开，%CHARA%那属于马娘的力气也完全可以无视。
        - acc: 1
          content: 「光明你这样很奇怪……」
        - 斟酌用词的%YOU%选择了一个柔和的说法，但%CHARA%依旧用力的抱着。
        - 甚至在这之后，双手继续用力的抱紧双手。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「并不奇怪哦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「听说，夫妇之间会逐～渐喜欢上对方的味道呢……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，对了！」
        - 恍然大悟一般的%CHARA%抬起脸，向上看着%YOU%疑惑的脸。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「现在不应该叫%CALLNAME%了呢……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「亲爱的～」
        - 喊着暧昧称呼的%CHARA%，轻轻的捏了一下%YOU%的腰。
        - 趁着%YOU%的腰软了下来，毫不费力的往前推过去。
        - 看着被自己推倒地上的心上人，%CHARA%的眼神里粘上了一点阴影。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「几天没有和亲爱的见面，感觉少了什么呢。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我想，可能就是这个气味吧～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「毕竟，我虽然不擅长起步加速之类的……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但找到出手的时机，亲爱的可是好好的～教会我了哦～」
        - 深蓝色的校服掉落在地上，露出了对比自家姐妹毫不逊色的身材。
        - 手指拉开了%YOU%本就被抱的凌乱的衣服，露出藏在下面的皮肤。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呐，亲爱的……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「可以了吧？」

99_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「果然，没有%CALLNAME%……没有亲爱的，我就受不了呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不知不觉间，就一直想着您了……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「从今往后……在哪里都要带着我哦～」

# week_end
# 爱欲以上，多伯暧昧，5月1周，男T
small_party:
  title: 小小的聚会
  lines:
    - 一个没有训练计划的日子里，无所事事的 %YOU% 在街上平静的散着步。
    - 没什么工作的平静时间，原本意气风发的在散心。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，是 %CALLNAME% 啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～要来喝点红茶吗～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「等，光明！？」
    - 软乎乎的声音勾动了 %YOU% 的注意力，在回头的时候就被跑过来的 %CHARA% 抓住了手臂。
    - 同样是没有训练计划的两个人，此时正好在这里。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「呜……光明你明明知道我不喜欢这样的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「担当%UMA%要和训练员打好关系嘛～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「多伯？你不过来吗？」
    - 抱在 %YOU% 的手臂上，%CHARA% 回头朝还在原地抱着双手的%D_NAME%说着。
    - 金色的瞳孔盯了好一会之后，%D_NAME% 才像是泄气一样朝着 %YOU% 走了过来。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「你，你听好了啊，我是因为光明才过来的！」
    - acc: 1
      content: 「唉？啊，哦……」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「真是的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦～多伯你也坦诚点嘛～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「我坦诚什么啊！？」
    - 虽然脸上写满了不情愿，但却没有要走的意思。
    - 与 %YOU% 隔着三步距离的%D_NAME%，和 %CHARA% 闹起了小脾气。
    - acc: 1
      content: 「两位，麻烦先不要……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME% 说得对呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天没有计划的话……要开茶会吗？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「光明……你真是很喜欢茶会呢。」
    - 没有一点掩饰的%CHARA%拉着 %YOU%，走向另一头。
    - 无视了%D_NAME%满是怨言的眼神，两个人在桌子的一边坐了下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，请吧～」
    - 将桌上摆着的第三杯红茶推倒了 %YOU% 的面前，轻笑了一下。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「原来多点一杯是因为这个吗？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「光明你啊……」
    - acc: 1
      content: 「多一杯？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为，%CALLNAME% 一定会来的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不准备好的话，有点失礼呢～」
    - 看着桌面上的茶杯，%YOU% 只是犹豫了一下就放下了别的想法。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME% 今天应该是休息吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼呼……您也喜欢这样散步呢～」
    - acc: 1
      content: 「感觉这样和光明很像呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵，您说的也对呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「你们什么时候……关系那么好了？」
    - 看着 %YOU% 和 %CHARA% 坐在同一侧有说有笑的样子，%D_NAME%的脸上浮出了一点不快。
    - 撑着脸，稍有生气的鼓起脸盯着面前的两个人。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「关系好……那也不能像这样吧？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「哪有训练员和%UMA%这么贴近的……」
    - 虽然是在小声嘟囔，但是 %CHARA% 还是轻轻抖了抖耳朵。
    - 软乎乎的双手轻轻的抱住了 %YOU% 的手臂，依靠在肩膀上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是你看，%CALLNAME% 也没有反对吧？」
    - acc: 1
      content: 「啊，额……是这样的。」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「咕……」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「我才不会这样做，哼！」
    - 盯着 %YOU% 和 %CHARA% 的眼神一下移开，把脸撇开摆出了一幅生气的样子。
    - 但仔细看的话，还能看见%D_NAME%偷偷眯成一条缝的眼神。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……嗯哼～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「多伯，红茶洒了哦～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「啊！」
    - 被 %CHARA% 的一句话惊倒，慌慌张张的看向桌面。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「那，哪里洒了啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你看，确实洒了嘛～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过啊，多伯你刚才是在看什么呢？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「什，什么啊，我什么都没有看……」
    - 虽然还想说什么，但是让 %CHARA% 听着肯定能知道是什么意思。
    - 原本硬气的声音逐渐变小，最后只是缩在自己的位置上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「多伯也在看着的对吧？」
    - acc: 1
      content: （好微妙……）
    - 被两个人的眼神锁定在座位上的%D_NAME%，不安的扭动起来。
    - 扭扭捏捏的眼神在两个人之间循环几轮，如同自暴自弃一样松开了口。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「啊啊……！」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「好啦，我也想打好关系啦，可以了吧！」
    - acc: 1
      content: 「多，多伯！？」
    - 被突如其来的声音打断了思考的 %YOU%，下意识往后靠了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼呼～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实啊，在 %CALLNAME% 来之前啊……」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「光明！不要说啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……多伯在和我说，想和 %CALLNAME% 打好关系哦～」
    - acc: 1
      content: 「啊？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「呜……」
    - 坐在一边的%D_NAME%拉低了帽沿，遮住了红透的脸。
    - 在 %CHARA% 轻飘飘的主导下，有些微妙的度过了这个温暖的茶会。
    # 好感+50，多伯好感+50

# office_rest
# 佳偶以上
all_along:
  title: 你的气息总在我的身边
  lines:
    - 躲着中午的太阳，两个人一同呆在办公室里。
    - 安静的房间里，只有偶尔响起的键盘声和纸笔摩擦声，交织成了催眠的旋律。
    - %CHARA% 坐在一旁的沙发上，眼神逐渐黯淡下去，摇摇欲坠。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……好困……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘶呀～」
    - 安静的房间里，加上了 %CHARA% 轻飘飘的呼噜声。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……嗯嗯……？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好香的味道……」
    - 嘀咕声在整个房间里格外明显，打断了工作中的 %YOU%。
    - 悄悄的瞄了一眼 %CHARA% 躺在一旁睡觉的样子，学着%SEX%的样子吸了吸鼻子。
    - acc: 1
      content: 「真是的，那有什么味道……」
    - acc: 2
      content: 「房间里哪里有味道……」
    - 因为突如其来的打断，疲劳感爬上了 %YOU% 的肩膀。
    - 既然已经累了，那就休息一下好了。
    - 这样想着的 %YOU% 站起身，走到沙发旁坐下，摊在沙发上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼～哇～」
    - 似乎是感应到了身旁坐下的人，%CHARA% 明明已经睡着了但还是向着一旁稍微挪动了一点。
    - 空调呼呼的吹在房间里，解放了 %YOU% 肩头的高温。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼唉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「姆姆……？」
    - 顺着闻到的味道，%CHARA%向着身旁稍微挪动了一点。
    - 圆乎乎的小脸蹭在 %YOU% 的手臂上，耳朵轻拍在腰间。
    - 原本凉快的房间里，莫名出现了异常的温度。
    - 在身旁奇怪的温度下，%YOU% 也没办法直接睡下去。
    - acc: 1
      content: 「换一个地方坐吧……」
      lines:
        - 将手从 %CHARA% 的脸旁移走，站起来重新坐回了办公桌前。
        - 虽然不如沙发舒服，但放下椅背也不是不能休息。
        - 只是刚才，为什么会突然感觉那么热呢？
    - acc: 2
      content: 「稍微热点也没关系吧。」
      lines:
        - 稍微热一点也没关系，反正有空调。
        - 一边这样想着，%YOU% 继续躺在沙发上，闭上了疲劳的眼睛准备休息一会。
        - 原本这样的午休应该是一觉睡到下午，被闹钟或者来这里的谁叫醒。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「嗯，嗯嗯」
        - 体感温度不断提升，饶是 %YOU% 的忍耐力再好，也忍不住睁开眼睛。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……午安，%CALLNAME%❤️」
        - 一幅没睡醒样子的 %CHARA% 趴在 %YOU% 的大腿上，抬起脸向上看着。
        - 即使没睡醒，生理的部分还是正常的来了反应。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，%CALLNAME%……喜欢这样吗？」
        - 在 %YOU% 的视线下，%CHARA% 缓缓张嘴叼住了拉链，向下拉开。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%的气温……呼呼～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我还挺喜欢这个味道呢❤️」
        - 单薄的布料被揭开，露出皮肤。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「来吧，%CALLNAME%～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我们的时间很多哦～」
        - acc: 1
          key: sex
          content: （按住%SEX%！）
        - acc: 2
          content: （让%SEX%继续。）

all_along_sex:
  - 结束的时候，午休时间早就过了。
  - %CHARA% 蹑手蹑脚的收拾起身上的体液，脸上带着平淡的笑容。

# out_station
# 佳偶以上，善信热恋，非处，马娘
miss_tram:
  title: 过站的电车
  lines:
    - 休假的下午，却接到了一通来自 %CHARA% 的电话。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%，非常抱歉今天打扰你。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我想坐电车出门玩的，但好像过站了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，能帮帮我吗？」
    - 几乎没经过思考，立刻前往了车站。
    - 急匆匆站上车站的时候，打开手机开始查看 %CHARA% 发过来的路线。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「我看看……是这边吗？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「哦？%CALLNAME_64%！你也在啊！」
    - 不知道是因为 %CHARA% 的信息还是正好 %P_NAME% 也想着坐电车出门，在这里相遇了。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「难道说，光明也找%CALLNAME_64%了吗？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「这样啊……」
    - 对着 %YOU% 稍作沉思过后，%P_NAME% 轻轻点头，转而打开手机开始帮着查看 %CHARA% 所在的车站。
    - 在两个人的努力下好不容易确定了电车的路线，毫不犹豫的一同坐上了电车向着 %CHARA% 的位置出发了。
    - 看着窗外的风景从城市变成田野，%YOU% 也不得不感叹一句 %CHARA% 的厉害。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「光明%SEX%很厉害吧？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「总是不知不觉间就跑那么远了，呆呆的感觉超可爱的～」
    - acc: 1
      content: 「这样好吗？这可是在背后说坏话哦？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「怎么会呢，我可没有这样想哦。」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「光明%SEX%可是我骄傲的%YOUNGER_SISTER%，我可是超喜欢%SEX%的！」
    - 一边夸张的挥手一边向后退，背后却撞到了结实的椅背，在空旷的车厢里发出了清脆的响声。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「啊疼疼……」
    - acc: 1
      content: 「只是玩笑而已，别这样。」
    - 两个人带着轻快的笑声，享受着窗外的景色。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，来了啊～」
    - 坐在车站长椅上的%CHARA%站起身，看着开到面前的电车。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「光明 ！」
    - 从车门蹦下来，一口气扑到%CHARA%的身上。
    - 紧随着 %P_NAME% 走下电车的 %YOU% 看着眼前的这一幕，嘴角不由自主地上扬翘起一个小角。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_64%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「很痒的啦，这样子～」
    - 原本温馨的无人车站，却突然间安静了下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_64%，有味道哦？」
    - 原本兴奋的胡乱扫动的尾巴，突然间拉直了一瞬。
    - 在 %YOU% 看不见的角度，%CHARA%的脸上露出了一阵淡然的笑容。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「味道？什么味道……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_64% 身上，有很多～%CALLNAME%的味道哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难道说 %CALL_64%，你也在想那些事情吗？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「！」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「难道说，光明你是故意的吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「临时起意啦～」
    - 在 %YOU% 疑惑的眼神前，%P_NAME%松开了双手，呆站在 %CHARA% 的身旁轻刮着自己的侧脸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「既然已经来了，那就一起在这里玩玩吧～」
    - 和站在一旁有些羞涩的 %P_NAME% 不同，%CHARA% 半强硬的拉住 %YOU% 的手臂。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「晚一点再回去也完全没问题哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对吧？%CALL_64%～」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「是，是呢，啊哈哈……」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「那就……一起去玩吧？」
    - 无人的车站前，两位%UMA%一同轻巧的拉开了一点上衣，露出无暇的肌肤。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来做吧，%CALLNAME%～」
    - acc: 1
      key: sex
      content: 「那，那我的意见呢？！」
    - acc: 2
      content: 「真是受不了你们两个啊～」

miss_tram_sex:
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「结果到那么晚了啊……会被骂的啊。」
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「真是的，这样子明天会腰酸背痛的啊～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_64%，不要这样说嘛～」
  - 坐在电车上的两姐妹互相打趣着，顺便戳着被两个人夹在中间的 %YOU%。
  - 只是已经昏昏欲睡的 %YOU%，并没有回应%THEY%的打闹。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%也很累了呢～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「回家吧，%CALL_64%～」

# week_end
# 佳偶以上，多伯热恋，均非处，马娘
dear_sister:
  title: 是我亲爱的妹妹哦～
  lines:
    - 【想要和多伯更进一步打好关系的话，请在休息日来一趟目白家～】
    - 看着手机上这一条没头没尾的信息 %YOU% 却认真的思考了起来。
    - acc: 1
      key: sex
      content: 回信息接受邀请吧
      lines:
        - 看着 %CHARA% 发来的消息，%YOU% 有些莫名其妙，但休息日到来的时候还是非常老实的来到了目白庄园门前。
        - 当 %YOU% 在门口准备打电话的时候，%CHARA% 小跑着来到了面前，轻快的拉开了门。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，等您很久了呢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「当然，多伯也是，很早就在等着了哦～」
        - 明明只有一个人过来开门，但是却说都准备好了？
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊啦？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，您也很期待吗？」
        - 小跳两步来到 %YOU% 的身旁，双手挽住手臂，夹在胸口。
        - acc: 1
          content: 「那个，%CHARA_FULL%？」
        - acc: 2
          content: 「好软啊……」
        - 听着 %YOU% 的声音，%CHARA% 的双手更加用力往胸口夹住。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「也就是说，%CALLNAME%也觉得很舒服呢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，不能让 %CALL_59% 等太久呢，我们走吧。」
        - 穿过前院进入目白家，进入 %YOU% 视野的是宽阔的大厅，以及地上反光的一道水渍。
        - 正在 %YOU% 思考这道水渍的来历时，就被 %CHARA% 半强迫的拖着手臂往前走过去。
        - 在保持着神秘感的气氛中，两个人一同站在一个有些偏僻的房间外。
        - 明明是白天却一直拉着窗帘，导致整个房间里看不见一点光亮。
        - 仔细去看的话，还能看见房间里似乎有什么正在蠕动的样子。
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「呜……嗯……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊啦，%CALL_59%，不能这样哦？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%难得来了，要好好的打招呼啊～」
        - 松开一直拉着 %YOU% 的手，%CHARA% 轻快的走进房间，点亮电灯。
        - 淡黄色的灯光照亮了房间，也照亮了房间中央的大床。
        - 躺在中间全裸的可爱%UMA%，正是 %D_NAME% 本人。
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - 「嗯……嗯❤️」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，%CALL_59% 也很欢迎你呢！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「接下来，嘿咻～」
        - 取下堵在 %D_NAME% 嘴里的口球，解开限制行动和视野的皮带。
        - %D_NAME% 的声音有点沙哑，但依旧表现出了喜悦，轻声呼唤着 %YOU% 的名字。
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - 「很，很抱歉，让你看见不成体统的样子……」
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - 「这都，这都是因为光明才，这样的。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊啦？%CALL_59% 还是不坦率呢～」
        - 在 %YOU% 惊愕的目光中，%CHARA% 伸手轻轻的拉开了 %D_NAME% 修长的双腿，露出早就淫水泛滥的入口。
        - 即使被这样对待，%D_NAME% 的眼神也没有一丝反抗，反而是迷离的眼神。
        - 仿佛在对眼前的人说，请你做下去吧。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「请吧，%CALLNAME%～」
        - 轻飘飘的落地声响起，站在一旁的%CHARA%也解开了衣物。
        - 意外的，下面并没有任何的布料，健康的身体一丝不挂的出现在 %YOU% 的面前。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「因为 %CALL_59% 已经等很久了，请您先安慰%SEX%吧～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「当然，也请不要忘了我哦～」
        - 身后的房门随着风关上，似乎也宣告了 %CHARA% 的邀请成功。
        - 两位名门%UMA%一丝不挂，一上一下的抱在一起，露出完全湿润的下身，期待着。
      # 马儿跳
    - acc: 2
      content: 没时间啊，回绝好了

# week_start
# 佳偶以上，情人节
the_fruit:
  title: 是我们的努力结晶哦～
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「能稍微来帮我一下子吗～」
    - 在 %YOU% 没什么工作的空闲时间，%CHARA% 很突然的找到了 %YOU%。
    - %CHARA% 主动握住 %YOU% 的手，撒娇般的拉了几下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我自己做的话，效果稍微有点差呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，稍微帮我一下啦～」
    - 环绕在耳边的声音仿佛有魔力一般，让 %YOU% 决定了今天的去处
    - acc: 1
      content: 「那我就打扰一下了。」
    - 轻巧的抓起 %CHARA% 的小手，直到圆圆的脸上露出笑容。
    - 目白家的厨房还是一如既往的干净，桌面上已经提早放好了整个流程要用的材料。
    - acc: 1
      content: 「不愧是%CHARA%啊……」
    - 感叹于 %CHARA% 夸张的行动力，%YOU% 摩拳擦掌就准备开始制作.
    - 翻出放在材料旁的制作步骤，和 %CHARA% 一起开始一步一步的跟着做起来。
    - 在 %YOU% 对着面前软乎乎的巧克力思考的时候，却正好看见了%CHARA%身旁还在慢悠悠擦拭模具的动作。
    - 按照这个速度来看的话，那巧克力会被 %CHARA% 做成不太好看的样子就很合理了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊咧，%CALLNAME%，为什么要一直看着我呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是我哪里做错了吗？」
    - 对上 %CHARA% 满是疑惑的目光，%YOU% 莫名的笑出了声。
    - 双手轻轻抓住了 %CHARA% 的手背，默默的加快了%SEX%的动作，终于是赶上了巧克力融化的时间。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，原来是这样～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「之前我在做的时候，不知道为什么，巧克力一下～就凝固了呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你，%CALLNAME%～」
    - 在 %CHARA% 的轻笑中，一个装满了融化巧克力的容器就放到了桌面上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉？是要我来吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，我……」
    - 看着 %CHARA% 低落的表情，%YOU% 当即把巧克力塞进了%SEX%的手里。
    - acc: 1
      content: 「安心吧，没关系的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「做坏了……没关系吗？」
    - acc: 1
      content: 「无论成品如何，光明的作品我都会开心的品尝的。」
    - 在 %CHARA% 呆愣的眼神中，带着微笑的 %YOU% 轻轻的拍了一下肩膀。
    - 慢悠悠的瞳孔里有了精神，认真的面对着眼前的模具。
    - acc: 1
      content: 「加油，光明，这次一定会做好的！」
    - 沾满果仁的巧克力在 %CHARA% 的手中缓慢进入模具里，形成了形状……
    - 接着毫无意外的，因为动作太慢了，巧克力凝固了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊拉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱歉呢，%CALLNAME%，明明邀请您来帮忙了……」
    - 一刻没有为 %CHARA% 的失误感到遗憾，即刻继续进行作业
    - 直到在 %CHARA% 面前把造型有点奇怪的巧克力做好时，%CHARA% 才奇怪的看着 %YOU%。
    - acc: 1
      content: 「总之这样就做好了，光明。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个样子，真的可以吗？」
    - 在疑问声中，%YOU% 伸手摸了摸 %CHARA% 圆润的脑袋。
    - acc: 1
      content: 「光明做给我的，怎么样我都不会嫌弃哦.」
    - acc: 2
      content: 「因为光明也很努力了啊。」
    - 看着 %YOU% 的%CHARA%睁大了双眼，品尝着超乎意料的喜悦。
    - 好不容易安静下来之后，轻巧的拿起了一块巧克力，送到了 %YOU% 的嘴边。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是我们一起，努力做的巧克力哦～」
    - 巧克力的甜味在唇齿间游走，正如现在的心情一样，是甜的。
  # 好感+30

# out_start
# 佳偶以上，同队至少三位目白热恋且有性经历
know_us:
  title: 您已经，很了解我们了呢
  lines:
    - 三年时光已经结束的现在，训练员和%UMA%本来不应该有更多的交集才对……但 %YOU% 显然并非如此。
    - 和 %CHARA% 一同慢步行走在道路上，身旁还有晨练中的%UMA%跑过。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%，您有时间吗？」
    - 突兀的提问。
    - 还没等到 %YOU% 的回复，%CHARA% 就已经停下了步伐，看着 %YOU% 有点疑惑的脸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可以的话，我希望您能够来目白家一趟呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是，很重要的事情。」
    - acc: 1
      content: 「如果光明这样说的话，那就必须去了。」
    - 圆圆的脸上浮出了温柔的微笑，抱住了 %YOU% 的手掌。
    - 不知何时准备好的轿车，从后方开了过来。
    - 目白家的庄园和 %YOU% 印象里的还是一样，但却没有了往常一直等待着的众人。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天稍微有点安静呢……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「原本我是想热闹一点来欢迎 %CALLNAME% 的呢。」
    - 金色的瞳孔反射出有些低落的光线，有些不安的朝着 %YOU% 看过去。
    - acc: 1
      content: 「没关系啊，偶尔安静一点也不差。」
    - acc: 2
      content: 「安静点也无所谓啊，和光明在一起就好了。」
    - %YOU% 的手在%CHARA%圆圆的脑瓜上揉了几下，这才把低落的耳朵立了起来。
    - 两个人在安静的庭院里缓步行走，停在往常一起喝下午茶的圆桌边上。
    - 心有灵犀的对视一眼，一同去拿出了茶具。
    - 温热的红茶后，两个人面对面的坐着，却都没有拿起杯子的意思。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……嗯哼～」
    - acc: 1
      content: （难得光明什么都没有准备就邀请我了呢）
    - acc: 2
      content: （不过，%SEX%喜欢的话这样也好）
    - %YOU% 看着%CHARA%精神的金色瞳孔，不自觉的也笑起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，总是愿意和我一起这样呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明我这样经常消磨掉您的时间……您也愿意一直看着我。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实和%ELDER_SISTER%%THEY%在一起，我也……」
    - acc: 1
      content: 「不会哦。」
    - 打断了%CHARA%有点低落的话，笑脸依旧。
    - acc: 1
      content: 「我喜欢光明啊，所以从来没有难受过。」
    -
    - acc: 1
      content: 「包括光明你每次都提前计划的事情，我都很喜欢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「每一次……唉？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，您的意思是？」
    - acc: 1
      content: 「就是字面意思哦。」
    -
    - acc: 1
      content: 「虽然我不太喜欢在我们的关系之间牵连其他人……但如果是光明就没关系。」
    -
    - acc: 1
      content: 「虽然大家应该都是无所谓的吧～」
    - 牵连其他人的意思，自然是指这个时候应该在这里的其他人了。
    - 原本有些安静的庭院里，却是出现了新的声音。
    - %YOU% 听着身后慌张的脚步声，脸上释怀的笑了起来。
    - acc: 1
      content: 「你看，大家都听见咯。」
    - 在 %CHARA% 反应过来之前，绿植的另一头出现了熟悉的身影。
    - 其实大家一直都在看着 %CHARA% 没反应过来的样子呢。

# week_end
# 佳偶以上，莱恩佳偶或热恋（know_us 后），男T马娘
dear_elder_sister:
  title: 我最喜欢的姐姐
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，午安，%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「百忙之中打扰你非常抱歉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，能陪我去一趟健身房吗？」
    - 突然推开门的%CHARA%，没头没脑的说着 %YOU% 听不懂的话。
    - 健身房的话，力量训练吗？
    - acc: 1
      content: 「要注意休息啊，别太累了。」
    - 听着 %YOU% 婉拒的说法，%CHARA%像是没反应一样，继续拉着 %YOU% 的手臂。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不是训练哦，只是看看而已。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「稍微看看没关系吧～」
    - 伴随着轻微摇晃手臂的动作，%YOU% 妥协了。
    - 但是，不训练为什么是去健身房？
    - divider: true
    - 一如既往，四处都是训练中的%UMA%。
    - 不过，训练区域的边缘有一个很眼熟的人。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，在这边哦～」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「唉，光明？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「难道%CALLNAME_27%也……哇啊！」
    - 似乎是刚好看过来，%R_NAME%的脸上浮出了一阵惊慌的神色。
    - 双手遮住胸口，下意识的朝着后方退了一点。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「啊！……疼疼疼……」
    - 从座位上掉下来的%R_NAME%发出了一声惊呼，自然的伸手去捂着摔了一下的屁股。
    - 代价就是，胸口露出来了。
    - 上半身宽大的U形开口，将胸口的部分全部暴露出来了。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「不，不要看啦，%CALLNAME_27%！」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「光明也是！不是说过要等我习惯先嘛！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是%CALL_27%，如果不然%CALLNAME%看见的话……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不就没有效果了嘛～」
    - 小跳几步站在%R_NAME%的身后，扶着她站了起来。
    - 出现在 %YOU% 眼前的，是%R_NAME%平时不会被注意到的丰满胸部。
    - 即使%R_NAME%已经第一时间遮住了，但是被看见这一点已经是事实了。
    - 从背后看着红透的耳根，%CHARA%自然没有留下多少空间。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿咻～」
    - 突然抬起了原本遮住胸部的双手，将本就很难遮住的乳沟露出来。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「哇啊啊啊！」
    - 在%R_NAME%慌乱的声音吸引到周围的视线前，%YOU% 下意识的向前拦在了她的身前。
    - 这幅美景，可不能被其他人注意到了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，你看～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那边是·休·息·室·哦～」
    - acc: 1
      content: 「总之我们先进去！」
    - 在周围其他人的怪异的眼神下，%YOU% 带着两只%UMA%走进了休息室。
    - 平时不少人的房间，今天意外的没什么人。
    - （怎么今天那么安静？）
    - 正当 %YOU% 思考原因的时候，%CHARA%从 %YOU% 的身后过来轻捏了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不愿意……再看看吗？」
    - 顺着视线，看着若隐若现的肌肉线条，以及那对巨乳。
    - 好看啊，很好看啊！
    - 身体早就蠢蠢欲动了！
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - （好奇怪，身体有点发热……不对，应该是刚刚训练完的缘故！）
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - （如果穿着这样的衣服还对着%CALLNAME_27%发情的话，哇啊啊……）
    - 对着那红透的小脸，性欲上头的 %YOU% 也找回了一点作为训练员的自觉。
    - acc: 1
      key: sex
      content: 「光明，你先帮一下莱恩吧。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉～是要我做什么呢？」
        - 本想让 %CHARA% 去给 %R_NAME% 先穿上衣服，但%CHARA%的眼神却一直锁在 %YOU% 身上，一幅明知故问的装傻样。
        - 在 %YOU% 思考原因的时候，%CHARA%缓缓踏步走了过来。
        - 俯身，贴到了 %YOU% 的面前。
        - 伴随一声故意很响的呼吸声，%YOU% 的脸立刻红了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯～%CALLNAME%的味道～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这个味道，或许比%CALL_27%更需要帮忙呢～」
        - acc: 1
          content: 「唉？什么？」
        - 软乎乎的小脸，贴在 %YOU% 的裤子上，双眸缓缓向上偷瞄。
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「光明……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALL_27%……你也想做了吧？」
        - 同样浑身散发热气的%R_NAME%，不知何时已经站在%CHARA%的身后了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「请%CALLNAME%……不要反抗为好哦～」
        - 强而有力的双手，将 %YOU% 压倒了沙发上。
    - acc: 2
      content: 「%YOU_CALL_27%你先冷静一下，喝点水。」
      lines:
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「唉？好，好的！」
        - 愣神中的%R_NAME%回过神来，看着 %YOU% 的双眼立刻又移开了。
        - 拜这一眼所赐，脸上的红晕比起刚才更明亮了，似乎还能看见额头在冒出蒸汽。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALL_27%～水～」
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「谢谢……」
        - 呆呆地接过%CHARA%递过来的纸杯，将温水送进嘴里。
        - 似乎，冷静了不少。
        - %YOU% 也走到%R_NAME%的身旁，特意站在侧后方不去看正面。
        - acc: 1
          content: 「莱恩，你的包呢？我去帮你拿毛巾过来吧。」
        - 普通情况下，这就是正常的关心。
        - 但现在并不是普通情况。
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - （今天……唯独今天不能让%CALLNAME_27%看见！）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是门口第四个哦～」
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「光明！为什么那么清楚！」
        - 没等到%R_NAME%阻止，%YOU% 已经充满行动力把包拿进来了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「来，%CALL_27%，多喝点水补充水分～」
        - 正当 %R_NAME% 想要挡住 %YOU% 打开挎包的时候，%CHARA% 刚刚好递上了一杯水。
        - 毫无疑问的，撞到了。
        - 水洒在仅有一件的运动内衣上，正好打湿了关键的部分。
        - 同样，翻找毛巾的 %YOU% 也找到了关键的部分。
        - 一条相当大胆的运动短裤。
        - 大腿根的位置已经和起点齐平了呢。
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「哇，哇哇……」
        - acc: 1
          content: 「%YOU_CALL_27%，能稍微说明一下为什么这条裤子的长度是什么情况吗？」
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「那，那个是……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是%CALL_27%专门买的哦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我之前回家的时候看到了～」
        - 似乎是因为害羞，或者是因为恼怒。
        - 打湿的运动内衣下，随着动作突起了两点。
        - （这种情况下居然兴奋了。）
        - （不做点什么不行了呢。）
        - （%YOU_CALL_27%的指责？先放一边吧。）
        - acc: 1
          content: 「光明，来帮我～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好的～」
        - 两个人带着一模一样的笑脸，朝着%R_NAME%伸出了魔爪。

dear_elder_sister_sex:
  - 结果到了最后，被神神秘秘保留的短裤也没用上。
  - 三个人走出休息室的时候，已经没多少人在训练了。
  - 借此机会，趁着没人发现才溜了出来。
  - 湿透的内衣已经塞进了挎包，自然这些也是 %YOU% 亲手塞进去的。
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「哈啊……本来想先习惯一点的。」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「结果一下就被%CALLNAME_27%看光了……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是，%CALLNAME%会更喜欢这样吧？」
  - acc: 1
    content: 「算是吧。」
  - acc: 2
    content: 「都喜欢哦。」
  - %R_NAME%的头上似乎发出了彭的一声，脸上又红了不少。
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「真是的……你们两个不要欺负我啦。」