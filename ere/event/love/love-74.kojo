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
    - acc: 0
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
    - acc: 0
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
    - acc: 0
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
    - acc: 0
      content: 「……已经约定过了啊。」
    - acc: 1
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
    - 假期的%CHARA%呆呆的坐在自己的房间里，看着窗户外的夜空。
    - 少女风格的房间里，摆放着成对的人偶。
    - 不知道从什么时候开始，房间里零零散散的人偶都有了伴。
    - 每一个小小的人偶旁边，都坐着成对的另一个人偶。
    - 此时此刻，房间里孤身一人的就只剩下%CHARA%自己……
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
    - 抱住最爱的两个玩偶，轻轻摇摆着够不到地面的小腿。
    - 摇晃着上半身看着身旁——看着身旁留出的另一个位置。。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - 缓缓的弯下腰，抱紧了怀里的人偶，遮住了半张脸。
    - 瞳孔里反射出的房间里，有%YOU%的身影。
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
    - 拥抱着%YOU%的%CHARA%，轻轻的哼起了小曲。
    - acc: 0
      content: 「那个，%CHARA%小姐？」
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