# @file 目白麦昆 - 育成
# @author 伊兰
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「要上了哦！」
  - 随着麦昆那充满斗志的话语，训练紧锣密鼓地进行起来。

train_success:
  sync: true
  lines:
    - random: true
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵%CALLNAME%又离胜利更近一步了呢。」
    - random: true
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么样呢，今天的%CALLNAME%也有没有被我的跑姿迷到呢？」
        - 结果被%YOU%滔滔不绝地说了好几分钟，在麦昆的轻踢下得以结束。
    -

train_fail:
  title: 训练失败
  lines:
    - %YOU%搀扶着在训练场上受伤的麦昆来到了保健室，将%SEX%放到了床上。
    - 麦昆看起来非常地懊悔。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「居然在训练场上受伤了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还给%CALLNAME%添麻烦了，真是非常抱歉。」
    - acc: 1
      content: 「今天休息比较好。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「什么？明明只是一个小伤而已……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这点程度就担心的话，你的内心就没法放松起来了哦。」
        - acc: 1
          content: 「为了你的平安，我不休息也无妨。」
          lines:
            - 似乎被%YOU%的坚定堵得哑口无言，麦昆愣了一下，便露出无奈的笑。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「真拿你没办法。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「那么，我今天就乖乖休息好了。」
            - 医生将麦昆治疗好了之后，%YOU%将%SEX%送回了宿舍。
    - acc: 2
      content: 「之后训练要注意点啊。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「确实呢。犯那么低级的错误，果然还是太粗心了。」
        - 麦昆又回想起来当时的场景，于是又重重地叹了一口气。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哎……再一次感受到愧疚。」
        - 经过医生的治疗之后，%YOU%让麦昆回到宿舍休息了。

train_add:
  title: 不想落后
  lines:
    - 本来已经离开的麦昆却意外地又回到了收拾训练道具的%YOU%身边。
    - %SEX%面露难色，支支吾吾地一小段时间才鼓起勇气一般说出来一句话。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，我想请求追加一些训练！」
    - acc: 1
      content: 「发生什么事了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刚刚走的时候遇到了莱恩，%SEX%好像要去训练了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明%SEX%还在更加的努力，所以我也不能休息了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「无论在谁的眼中都优美地，每时每刻都奔走于最前头，那才是我目标中的姿势。」
    - 看着双手作十字恳求的麦昆，于是%YOU%决定……
    - acc: 1
      key: select
      content: 「那可要彻底地追上了！」
      lines:
        - 得到了%YOU%的答应之后，麦昆喜笑颜开。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「非常感谢%CALLNAME%，我就知道你会理解我的心愿的。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只要有你看着的话，训练就不会过度了。彻底的训练，拜托了！」
        - 于是在可接受范围内，与麦昆进行了一次追加训练。
    - acc: 2
      content: 「不要焦躁。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我知道可能有些过度训练了，但……」
        - 麦昆有些急躁地说着，但是在那一瞬反应过来之后深吸了一口气，沉默了一下。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「或许我自己真的有点着急了。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不约束自己一下的话就难以有未来了。『堂堂正正』才是目白家的风格呢。」
        - 麦昆说服了自己，与你低头致歉后，便离开了训练场。

train_success_sex:
  - 训练员满意地点点头，对着手里的计划书打了个记号。
  - 但是眼睛余光内的麦昆%SEX%那小跑过来的身影无限放大，直到拥向了训练员。
  - 训练员想要下意识地推开面前做出意外举动的%TEEN%。
  - 但是看到了%SEX%面色潮红，勾人的眼神。以及经过剧烈运动后，衣服完全被汗水浸透，在湿润的布料下，皮肤透出朦胧的肉色。
  - 再其次，%SEX%散发出来的气味令训练员产生了一股冲动。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那个，适度地发泄一下，你会答应的吧？」
  - 靠在训练员怀里的麦昆问着%YOU%。
  - 抿紧了嘴的%YOU%决定……
  - acc: 1
    key: sex
    content: 「待会到地方等我。」
    lines:
      - %YOU%以压抑着着声音对着麦昆的耳朵说着。
      - 听到了令自己满意的话语后，麦昆欢快地从 %YOU% 身边走开，等待着 %YOU% 的「教训」。
  - acc: 2
    content: 「抱歉，今天不行。」
    lines:
      - 听到了令自己扫兴的话语后，麦昆只好耷拉着耳朵，幽怨地离开。

race_start:
  title: 竞赛之前
  lines:
    - 麦昆双手放在胸前，调整了一下呼吸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作为目白家的马娘，我一定会夺得胜利的。」
    - acc: 1
      content: 「保持这个势头去拿下第一！」
    - 麦昆对着%YOU%，点点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以请%CALLNAME%，见证着我又一次胜利吧。」
    - %YOU%与麦昆一同打气之后，走向了赛场

race_win:
  title: 竞赛获胜
  lines:
    - 从赛场上回来的麦昆有些兴奋地说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「居然赢下了…太好了呢。」
    - %SEX%似乎意识到自己正偏离着一贯优雅作风，于是又摆正回严肃的表情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，刚才那个请忘掉吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「夺得第一名可是作为目白家马娘的前提条件啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「即使是第一名……第一名…嘿嘿。」
    - 结果刚回到平常状态的麦昆又开始偏离下去了…
    - acc: 1
      content: 「想着更高的目标迈进吧！」
    - 听到这句话的麦昆愉悦地说着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯…嗯，看来你的醒悟依旧相当高啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「更加华丽，更加优雅，更加优美…想着更高的目标进发吧。」

race_5:
  title: 竞赛上榜
  lines:
    - 这次比赛只得到了入着的名次，回来后的麦昆脸上挂满了忧愁。
    - acc: 1
      content: 「得到了入着也很努力了吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「很努力？不，只是入着的话，我可安心不起来。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我想要的…是完美的胜利。」
    - 麦昆单手握拳，眉毛紧皱。
    - acc: 1
      content: 「但是如果是麦昆的话，总会没问题的。」
    - 听到了%YOU%的话，麦昆的神色才恢复了一点微笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢…我一定要展现自己的进步给你看。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟我可是目白家的马娘啊，完美的胜利是被赋予的使命。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为此，我也要变得更强才行。」

race_lose:
  title: 竞赛败北
  lines:
    - 取得了未入着的名次，也意味着在这场比赛上败北。
    - 满脸悔恨的麦昆强憋着眼泪，躲闪着%YOU%的身影，说着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有什么好说的，完全是我实力不足的问题。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不能回应你的期待，真是万分抱歉…」
    - acc: 1
      content: 「化悲愤为食粮！」
    - 听%YOU%如此说着，麦昆才勉强提起笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「品尝悔恨这种苦涩情感吗…哎呀，我已经不想再品尝了呢。」
    - acc: 1
      content: 「那我们下次就要品尝胜利的甜美啊。」
    - 听到这句话的麦昆稍稍燃起了一些斗志。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「甜美…对，胜利的甜美，那理应是目白家马娘适合的味道。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，请%CALLNAME%，让我变得更强吧！」

meet_mejiro:
  title: 初识目白家%SIBLINGS%
  lines:
    # 新秀年四月一周
    - 随着%YOU%和麦昆的担当关系达成已经过了一段时间，%SEX%的训练也在稳步推进着。
    - 此时的%YOU%和%SEX%正例行地在学院的自助食堂里吃早餐。
    - %YOU%刚刚挑选完自己想吃的东西之后回到自家担当%UMA%坐的地方，却发现了%SEX%的身边多出了其他六位%UMA%，与麦昆有说有笑地聊着天。
    - 但是%THEY%散发出来的气质与举止行为却不输于麦昆，令%YOU%下意识地拘束起来。
    - acc: 1
      content: 「麦昆。」
    -
    - %YOU%坐在了麦昆旁边，以尽量不打扰聊天的方式与麦昆打了声招呼。
    - 而麦昆听到了之后转向了%YOU%，和颜悦色地向着与%SEX%一起的%UMA%介绍起%YOU%来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家，这位就是我的训练员噢。」
    - 麦昆话音刚落，在%SEX%旁边的目白莱恩最发起反应。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「啊，麦昆的训练员，你好！我叫目白莱恩！」
    - acc: 1
      content: 「你好。」
    - %YOU%微笑着与面前带有栗色中带有白色挑染的超短发%UMA%点头回应。
    - 然后环视了一圈与麦昆坐着的%UMA%，饶有兴趣地说。
    - acc: 1
      content: 「大家都是目白家的%UMA%吗？」
    -
    - 目白麦昆点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「初次见面，就让我来给%CALLNAME%认识一下吧。」
    - 于是在麦昆的逐一介绍下，%YOU%才终于认识了在场的每一个%UMA%。
    - 而经过%YOU%打招呼的%UMA%也分别表现出了不同的反应。
    - 目白高峰只是淡淡地回应了一下，观察着%YOU%。
    - 目白阿尔丹双手合十，热情地回应着，从中带有一丝恬静的温柔感。
    - 目白善信对着%YOU%wink了一下，展现带有着不符优雅印象的随性感。
    - 目白光明慵懒地用甜美声音拉着长调回应着，真是可爱。
    # CFLAGNAME:0 = 性别
    - if: era.get('cflag:0:0') === 1
      content: 目白多伯眼神躲闪着%YOU%的身影，也只是淡淡地回应起来，细若蚊声，看起来很难相处。
    - if: era.get('cflag:0:0') !== 1
      content: 而目白多伯也同样以微笑来回应训练员的招呼。
    - acc: 1
      content: 「感觉你们每个真是有个性呢。」
    - %YOU%微笑着点点头，然后不经意间看到了麦昆桌上的笔记本。
    - 那是%YOU%与麦昆初次见面时交给%SEX%的食谱之一。
    - 看起来向着目标前进的%SEX%依然保持着不变的努力。
    - acc: 1
      content: 「还在努力呢，麦昆。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「是啊是啊！」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「之前看着麦昆无精打采，训练状态很差。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「而过了一段时间后，麦昆的表现简直令人刮目相看！」
    - 得到了赞扬的麦昆露出一点悦色。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这其实都是%CALLNAME%的功劳呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为了赢得春季天皇赏，努力都是理所当然的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「更不用说出道战了，现在应该严于律己才对。」
    - acc: 1
      content: 「拼尽全力上吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是！所以也请%CALLNAME%抱着这个觉悟吧。」
    - 听到了「春季天皇赏」之后，莱恩思考了一下。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「不过春季天皇赏还有挺长时间的吧。」
    - acc: 1
      content: 「那我们就要在新秀年和经典年打好基础。」
    -
    - 麦昆点点头，赞同%YOU%的话。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「既然如此，那我们可能会在同一场比赛碰面呢。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「话先说在前头，我可不会输的哦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我也会拼尽全力的！」
    - 就在三人聊天的间隙，目白多伯从别处端过来的甜品吸引了两人的注意。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「好厉害，可丽饼上面真的有巧克力布丁。谢谢你多伯，把我的份也端过来了。」
    - 目白多伯以微笑回应着目白莱恩。
    - %YOU%转头看着麦昆，此时的麦昆紧紧盯着可丽饼。
    - acc: 1
      content: 「果然还是很想吃的吧？」
    -
    - 被戳穿心思的麦昆惊讶了一下，然后赌气一般转过头去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「绝对不是在忍耐着什么，没有这回事！」
    - %YOU%呵呵笑了起来，开始品尝起面前的饭菜。

begin_race:
  title: 出道战前
  lines:
    - 出道战前。
    - 作为着赛%UMA%生涯中最为重要的一天，%YOU%与 目白麦昆 按照比赛时间早早地来到了比赛场地。
    - acc: 1
      content: 「先来整备室调理一下情绪吧。」
    - 毕竟是第一次上赛场，不紧张肯定是不合情理的。
    - %YOU%看着自从进入整备室后一言不发，双手放在胸前不断地深呼吸的 目白麦昆，关心地问道：
    - acc: 1
      content: 「没问题吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「欸？」
    - 目白麦昆 将视线投向了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没事，没问题的，只是稍微有点紧张而已。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，相比于紧张，发现自己终于站在制霸春季天皇赏的起点处，心也在热血沸腾呢。」
    - 看到 目白麦昆 那努力的样子，%YOU%的心也放了下来。
    - acc: 1
      content: 「就一直保持着这股干劲吧。」
    - 时间过得飞快，外面的观众席传过来的声音甚至在这里也可以听到。
    - 无需多想，%YOU%都知道，这声音都集中在了这位目白家新世代赛马娘——目白麦昆 的身上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感觉从来没有被这么关注过呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，不用担心。」
    - 目白麦昆 推开了门，回头看向了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我一定会给你带来胜利的！」
    - acc: 1
      content: 「一路顺风！」
    - %YOU%也予以一笑，向着走上赛场的 目白麦昆 目视而别。

begin_race_win:
  title: 向着目标迈进
  lines:
    # 出道战后
    - 终于迎来赛后相遇的时候，怀着同样兴奋心情的 目白麦昆 与%YOU%对视之后便双双绽开笑容。
    - acc: 1
      content: 「为赢下出道战庆祝一下！」
    - %YOU%激动地对着 目白麦昆 说。
    - 而 目白麦昆 花了好一会儿平复了一下内心激动之后说道：
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「终于是赢得了完成那个目标的入场门票了呢。」
    - acc: 1
      content: 「目标吗？」
    - 啊啊，说的就是完成那个名为春季天皇赏的比赛吗。
    - 以出道赛如此优秀的成绩，也足够证明 目白麦昆，这具由目白家诞生的身体。
    - 在远距离方面强大到可以在那选拔赛落败中一雪前耻。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为天皇赏是我们目白家成名的顶梁柱。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同时也是我们先祖们的美好回忆。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，无论如何，我都非常想要赢下那春季天皇赏。」
    - acc: 1
      content: 「好啦好啦。」
    - %YOU%将手轻轻搭在了 目白麦昆 肩头，及时打断了这位险些进入历史追忆的%YOUNG_LADY%。
    - acc: 1
      content: 「春季天皇赏也还远着呢，现在的我们就应该为赢下天皇赏之前做好训练，积累经验。」
    - 目白麦昆，一名社会上都认可的长距离%UMA%。
    - %SEX%的能力足以去赢下这个比赛。
    - acc: 1
      content: 「你要知道你会赢的。」
    - %YOU%对着 目白麦昆 扬起了自信的笑容，而笑容像暖阳一般融化了 目白麦昆 眉间的凝重。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那就请多多指教喽，%CALLNAME%。」

kiku_sho:
  title: 切磋
  lines:
    # 菊花赏前
    # 强敌：莱恩
    - 作为 目白麦昆 下定的G1赛事，又是三冠之一的比赛，观看的人数本来就多。
    - 这场赛事非常适合%SEX%去验证训练成果。
    - 不仅如此，比赛名单中名为 %RYAN% 的%UMA%得到了%YOU%的注意。
    - 叩叩叩……
    - 突然的敲门声引得正在准备室商讨战术的 目白麦昆 和%YOU%同时抬头看向门外。
    - 目白麦昆 转动门把的一瞬间，一抹白绿相间的服装配色映入眼帘，那正是拥有着与 目白麦昆 同色系决胜服的赛%UMA%。
    - %YOU%定睛一看，居然是 目白莱恩。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「莱恩！」
    - 目白麦昆 惊喜地与 目白莱恩 拥抱了一下。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「今天外面可真热闹呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为这次是我和莱恩的比赛啊。」
    - 这对自幼相伴成长的%SIBLINGS%们相视一笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「时间过得真快呢，以前我跟你赛跑的时候，可没有什么观众。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而今天，我们将在无数观众面前，切磋一下。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「即便对手是你，我也不会让步哦。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「嗯，我们一起努力吧。」
    - 话音刚落，通道内响起了提醒比赛%UMA%入场的广播。
    - 目白麦昆 转头寻求确认，发现%YOU%对着%SEX%竖起了拇指，给予自信笑容。
    - acc: 1
      content: 「上吧，我相信你。」
    - 目白麦昆 对着%YOU%点了一下头，便与 目白莱恩 从准备室出去。

kiku_sho_win:
  title: 精彩的对局
  lines:
    # 菊花赏后
    - content:
        - fontWeight: bold
          content: 解说
        - 「目白麦昆，冲线！」
    - 而在 目白麦昆 冲线的那一刻，观众席上爆发出来前所未有的欢呼声。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！」
    - 目白麦昆 走到了站在观众席最前方的%YOU%面前。
    - 首次赢下了G1比赛的 目白麦昆 纵使想要保持优雅姿态，但在汗水浸湿的刘海下，那双紫罗兰色眼睛早已闪闪发光。
    - acc: 1
      content: 「恭喜你啊！」
    - %YOU%欣慰地笑了起来，也向 目白麦昆 送上了祝贺。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「那个……真不甘心呢，麦昆……」
    - 目白麦昆 耳朵微颤，看向了正扶着膝盖平复呼吸的 目白莱恩。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……莱恩。」
    - 面对着被超越而失去胜利的 目白莱恩，目白麦昆 皱着眉头，心生怜悯。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「呵呵，现在再说什么也没有什么意义了呢。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「恭喜你，麦昆，你很强呢，跟从刚开始入学特雷森的时候大不一样。」
    - 目白莱恩 上前为 目白麦昆 扫下决胜服上的草屑。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「不用担心我，下次的切磋你也拼尽全力吧。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「但我不会再掉以轻心了哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯。」
    - 心里终于放松了一些的 目白麦昆 点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我很期待下次与你的切磋呢。」

tenn_spr:
  title: 制霸前夕
  lines:
    # 春季天皇赏前
    # 强敌：莱恩
    - 准备室内
    - 与前几场比赛不同，今天的比赛的准备室内弥漫着一股紧张的沉默。
    - 穿好了决胜服的 目白麦昆 两手放在胸前，做了好几次深呼吸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「祖父大人，祖母大人……我终于来到了这一天了呢。」
    - 目白麦昆 闭着眼睛呢喃着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请你们看着我的奔跑，看着我夺取胜利的一瞬间吧。」
    - %YOU%来到了 目白麦昆 的面前，将双手放在%SEX%的肩头，察觉到掌下的微颤，双臂收紧将%SEX%拥入怀中。
    - acc: 1
      content: 「去取得第一吧，为了你，也为了目白家的荣誉。」
    - 怀里的 目白麦昆 再深吸一口气，微颤的身体终于平静下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也请 %CALLNAME% 见证着我的比赛吧。」
    -
    - 此时的 目白麦昆 正走在通向赛场的通道，迎面吹来的风将%SEX%外衣下摆变得猎猎作响。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「麦昆！」
    - 而再次参与到到同一场赛事的 目白莱恩 小跑一步与 目白麦昆 并排走着。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「今天也要加油哦。」
    - 目白麦昆 听后也点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「让我们拼尽全力吧！」

tenn_spr_win:
  title: 继承目白家者
  lines:
    # 春季天皇赏后
    - content:
        - fontWeight: bold
          content: 解说
        - 「目白麦昆！冲线！」
    - 赛场上没有往日的喧嚣，观众席上的大部分人都在期待着他们心目中的胜者。
    - 而冲线之后慢慢减速至停下的 目白麦昆 喘着气，有些恍惚地看着观众席，然后看着计分板。
    - 将欢呼声取而代之地，即是贯穿整个观众席的鼓掌。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「麦昆！」
    - 目白麦昆 循声转头，看到了目白家的%SIBLINGS%们款款走来的身影。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目白家的大家，有在看吗？」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「那是当然的啦。」
    - 目白麦昆 深吸了一口气，平复了一下自己的心情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我想让一直以来支持着我们的大家说几句话。」
    - 从工作人员那边得到了话筒之后，%SEX%转向了自己的观众。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家，谢谢你们的支持，能够赢下来都是靠着一路上大家的支持。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以及，目白家的大家。为了不辜负你们的期待，竭尽全力地去跑了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作为目白家的%UMA%，终于完成了家族的愿望。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以真的，很感谢大家，以及感谢%CALLNAME%给予我的教导！」
    - 话音刚落，观众席上爆发出来了长久不息的欢呼声。

takz_kin:
  title: 沉稳迎战
  lines:
    # 宝冢纪念前
    # 强敌：莱恩
    - 外面的赛马场上，发出着不亚于菊花赏的欢呼声。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好厉害……比菊花赏的气氛还要激烈。」
    -
    - acc: 1
      content: 「因为麦昆已经受到了很多人的注目了啊。」
    -
    - 这个由粉丝投票出场的宝冢纪念，尝试着报名之后果不其然地因为先前的几场重大的赛事取得了极高的瞩目，而理所当然地得到了出场机会。
    - 但是由粉丝投票的比赛，也会出现强力的%UMA%在场上。
    - 特别是 目白莱恩。
    - acc: 1
      content: 「看起来 目白莱恩 还是不愿意输呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「莱恩……」
    - 目白麦昆 听到了这个名字之后，平静地思考了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%一直在追赶我呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，无论如何。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我今天……也会着实地拿下胜利。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且也一定让莱恩知道，我对胜利的觉悟。」

takz_kin_win:
  title: 目白家的强大
  lines:
    # 宝冢纪念后
    - 今天 目白麦昆 也一如既往地以第一名的势头冲线。
    - 对于手到擒来的胜利，G1赛事的第一名已经对%SEX%没有多大的波动了。
    - 目白麦昆 减速着停了下来，对着观众席挥着手，而上面的观众也回应着欢呼起来。
    - content:
        - fontWeight: bold
          content: 观众
        - 「恭喜你呀！麦昆！」
    - content:
        - fontWeight: bold
          content: 观众
        - 「麦昆这次也很强大呢！」
    - 当 目白莱恩 看到欢呼都面向 目白麦昆 的时候，耳朵微微下垂，有些黯淡地低头。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「又一次，输掉了呢，原来一直都是……」
    - content:
        - fontWeight: bold
          content: 观众
        - 「意气我们都见识到了哦！莱恩！」
    - content:
        - fontWeight: bold
          content: 观众
        - 「明明坚持不懈到了最后也没有胆怯……呜呜，好棒……」
    - 当第一声「目白莱恩」刺破声浪时，目白莱恩 发现观众席上的呼声正为%SEX%编织着新的旋律。
    - content:
        - fontWeight: bold
          content: 观众
        - 「目白家，最棒啦！两个人都很努力呢！！」
    - content:
        - fontWeight: bold
          content: 观众
        - 「这次令人难忘的比赛，我不会忘记的！！」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「我……我也……？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是呢……」
    - 目白莱恩 转过头来，看到了 目白麦昆 那从容的身影。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「直到最后也很努力，依然在直线奔跑着。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「倒不如说很像是你的风格呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「若不是你在后面追赶着，恐怕我也达到不了如此的境地。」
    - 目白麦昆 对着 目白莱恩 伸出手。
    - 目白莱恩 看着手愣了一下，然后带着释怀的笑，便握住 目白麦昆 伸过来的手。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「哦伊！今天也很感谢大家的应援！」
    - divider: true
    - 宝冢纪念最后是平安无事地结束了，%YOU%也在旁边见证着两人共同分享着观众席上的应援。
    - 与 目白莱恩 的切磋结束后，和 目白麦昆 回到了校园。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说来春季天皇赏之后该做的事情，感觉已经考虑得差不多了呢。」
    -
    - acc: 1
      content: 「真的吗？是什么呢？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「接下来就是……秋季天皇赏了呢。」
    - 目白麦昆 淡淡地说出来了这一句话。
    - acc: 1
      content: 「是吗？」
    - 目白麦昆 却因为%YOU%的有些平淡的反应而皱眉。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难道你一点都不惊讶吗？」
    -
    - acc: 1
      content: 「没有啦，我只是相信无论如何什么比赛，麦昆 都能以一着去结束那个比赛呢。」
    - 目白麦昆 则是微微惊讶地看了%YOU%一下，摩挲着自己的下巴。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自从赢下了天皇赏之后，确实有对未来感到迷茫的时候。」
    - 目白麦昆 无意地看着夕阳下的特雷森学院教学楼，深吸了一口气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「已经完成了被祖母大人托付了未来的我，也要尝试着新的道路。」
    - 右手握拳放在胸口上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以——秋季天皇赏，也就是『春秋连霸』，不管有多么困难，我也要赢下来。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想要展示给目白家，给支持我的粉丝们看……」
    - %YOU%在旁边看着 目白麦昆 的坚定的眼神，没有出声。
    - 现在的 目白麦昆，显然已经无所不能。
    - %YOU%拍了拍 目白麦昆 的背。
    - 「只要想做的话，我一直都会支持你啊。」
    - 毕竟这个就是%YOU%的本职工作。
    - 目白麦昆 愣了愣，于是微微用力点了头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是……！」
    - 就这样——秋季天皇赏，即是下一个目标。

tenn_sho:
  title: 闪光至最后一刻
  lines:
    # 天秋前
    - 秋季天皇赏开赛的今天，天空下起了雨，从早上到现在都尚未停歇过，仿佛之后会带来了什么不妙的预感一般，也使得充满无数的人的赛场气氛变得凝重起来。
    - 而地下通道内，除了至始至终都陪伴着走了三年的%YOU%之外，还有其他目白家的姐妹们随行着。
    - 在场的所有人，都在期待见证着这份由 目白麦昆 开拓的奇迹。
    - 背对着众人的 目白麦昆 双手放在胸上，不断地深呼吸几下。
    - 最后紧闭的眼睛睁开来，面向了众人。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「赛道的泥泞也好，观众的视线也罢，对我来说已经一切都不会再让我紧张了。」
    - 目白麦昆 走到了%YOU%的面前，用双手握住了%YOU%的手，感受着手上%YOU%的粗糙皮肤，脑海中闪过了种种与珍贵回忆，让 目白麦昆 微笑了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「与达到了一心同体的%YOU%为了取得胜利做出种种努力，以及与莱恩一决胜负的回忆……光是回想起来就已经充满了力量。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「直到最后，我也会为大家夺得胜利的。」
    - acc: 1
      content: 「不要有太大压力，你已经做得很好了。」
    - 目白麦昆 点了点头。
    - 接着%SEX%头也不回地从地下通道出来，望着观众席和对手，一言不发，只是稍微整理了自己手臂上的印有目白家的袖章。
    - 大步走到了闸门后场，做好着热身活动。

tenn_sho_win:
  title: 谢幕
  lines:
    # 天秋后
    - 在 目白麦昆 冲线的一瞬间，观众席上面紧张期待的呼声一下子提高了一个档次。
    - content:
        - fontWeight: bold
          content: 观众
        - 「目白麦昆！！！目白麦昆！！！目白麦昆！！！」
    - 观众席上的欢呼直接响彻了整个竞马场。
    - acc: 1
      content: 「目白麦昆！」
    - 目白麦昆 的耳朵敏锐地捕捉到了%YOU%的声音，遂向着那熟悉身影看去，却惊讶地发现%YOU%竟跨过了观众席的护栏，跑向了 目白麦昆。
    - 随后发现自己的视野正向上急速拉高——%SEX%正在被%YOU%拦腿抱起，正稳稳当当地坐在了肩膀上。
    - 充满着兴奋的%YOU%用空闲的手对观众席比了个「耶」的手势，但才刚反应过来的 目白麦昆 则是带了点羞涩地对着观众席挥手。
    - divider: true
    - acc: 1
      content: 「看来比赛生涯到现在就已经差不多结束了啊。」
    - 赢下比赛之后的胜者舞台后，无论是%YOU%跟 目白麦昆 都有些疲惫地在回去的路上走着。
    - 以一着的形式连霸一年一度的春秋天皇赏。
    - 放眼到整个短短的三年，都是毫无遗憾的存在。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是的呢。」
    - acc: 1
      content: 「麦昆，让我抱一下吧。」
    - 目白麦昆 虽然有些惊讶，但还是接受了%YOU%那紧紧的拥抱。
    - acc: 1
      content: 「感谢你带给我的光辉……」
    - 虽然只是在背后指导着赛%UMA%的%YOU%而已。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……我才应该感谢你才对。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果没有因为你带领着我，我可能还会因此重蹈覆辙，我根本就无法想象没有你的时候是否能继承目白家的荣光。」
    - %YOU%与 目白麦昆 以极近的距离看着彼此。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个……失礼一下……」
    - 目白麦昆 以很快的速度将亲了一下%YOU%的脸颊。
    - %YOU%下意识捂住了被亲到的地方，等到反应过来之后便微笑了起来。
    - acc: 1
      content: 「我们走吧。」

new_year:
  title: 新年
  lines:
    # 经典年
    - 今天正值新年，%YOU%照常进入训练员室，除了%YOU%桌上摆满了前几天为新年做活动而摆满的道具，还有 目白麦昆 也在场。
    - 目白麦昆 注意到%YOU%的到来后，便高兴地行了一礼。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「新年快乐，%CALLNAME%。」
    - acc: 1
      content: 「新年好啊，目白麦昆。」
    - 目白麦昆 从身上拿了个好像是一张纸的东西，递给了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自己思考了一下今年的目标之后，写了年贺卡就过来了，请收下吧。」
    - 从 目白麦昆 手里手下了年贺卡，上面写着新年招呼和目标。
    - 而其中，目标那里写着——菊花赏制霸。
    - acc: 1
      content: 「目标固定了呢。」
    - acc: 2
      content: 「真像是目白家%UMA%的风格呢。」
    - 现在只有春季天皇赏制霸才是%SEX%的目标，在此之前必须参加一下赛事才能更轻易地拿到春季天皇赏的资格。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作为赛%UMA%，果然还是对三冠比赛抱有憧憬。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且如果在菊花赏赢的话，就能见证春季天皇赏的胜利哦。」
    - acc: 1
      content: 「是啊，我们一定要赢下菊花赏。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么，新的一年还请%YOU%多多指教。」


valentine:
  title: 情人节
  lines:
    # 经典年
    - 在训练员室内正在工作的时候……
    - %YOU%听到了来自外面的敲门声，便让外面的人进来。
    - 来的人正是一如既往的担当——目白麦昆。
    - 目白麦昆 因为看到了%YOU%在室内，尾巴开心地摇起来，背上也藏了一些东西。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%。」
    - 目白麦昆 边走近边将自己藏在背上的东西拿了出来，不必多说，是一个包装精美的巧克力。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「情人节快乐，为了报答一直以来%CALLNAME%的教育之恩，我想把这盒巧克力送给你。」
    - acc: 1
      content: 「谢谢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是一款很受欢迎的巧克力哦，要得到它的话就需要半年前预订才行。」
    - 半年前，那岂不是去年就要……
    - 看着手上的这盒巧克力，仅仅一句话就足以让 目白麦昆 准备这个礼物的心意如此贵重。
    - %YOU%看着手上的巧克力，于是打算——
    - acc: 1
      key: select
      content: 收起来。（获得【情人节巧克力】）
      lines:
        - 「嘶……麦昆送的情人节礼物也太贵重了啊，果然还是收起来好吧。」
        - 思考到这个地步的%YOU%于是就把巧克力放在自己的包里。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「欸？」
        - 反而 目白麦昆 那边诧异了一下，随后%SEX%皱起不悦的眉头说道。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「当初准备的时候可是想要执意让%CALLNAME%也要尝一尝这款限量版巧克力的啊。」
        - 啊，貌似%YOU%做的行为并不是 目白麦昆 期望那样。
        - 看着 目白麦昆 那不悦神情的%YOU%脑袋思考了一下，便说道。
        - acc: 1
          content: 「就因为是麦昆送的东西，才想摆在家里当作纪念嘛不是？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唔……那样也不错吧。」
        - 被%YOU%的话语回心转意的 目白麦昆 脸上又显出悦色，于是普普通通的情人节就这么结束了。
    - acc: 2
      content: 当面品尝起巧克力。（体力+200）
      lines:
        - 这么想的%YOU%拆开了巧克力盒，将一块巧克力放入了口中，细细嚼咽。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「怎么样……？」
        - 也许被感受到了限定版巧克力的独特之处，两眼放光的%YOU%竖了个大拇指，将一块巧克力完全吃完之后，便说。
        - acc: 1
          content: 「很不错呢，只能说不愧是麦昆说的限量版巧克力。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呵呵！因为想着一定要给%CALLNAME%尝一尝。」
        - 目白麦昆 喜笑颜开。
        - 「嗯，感觉有麦昆在的话，什么不错的东西都能品尝到呢。」
        - 然后%YOU%看了看面前的 目白麦昆 ，又看了看自己面前的巧克力。
        - 「麦昆你也吃一点吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「欸，我吗？」
        - 目白麦昆 虽然因为即将吃到了巧克力而加快了摇尾巴的速度，但一想到自己的易胖体质却又退却了。
        - 然而看穿了 目白麦昆 的心思的%YOU%又跟进了一步。
        - acc: 1
          content: 「没关系的，吃一颗解解馋吧？」
        - %YOU%露出了微笑，将一颗巧克力拿在 目白麦昆 的脸前。
        - 好像看到了逗猫棒的猫一样，一旦巧克力放在面前，目白麦昆 的眼睛就会牢牢锁住着它。
        - 最后 目白麦昆 没忍住，将巧克力一口吃掉。
        - 接着甜美地回味一番后，便反应到了什么，转而变成说教一般生气的表情。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真是的，%CALLNAME%，你这是在放纵我吗？」
        - 接着鼓起了脸别过头来，但是后边的尾巴却在开心的摇着。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但是……尝到了限量版的巧克力，就算一口也满足了。」
        - %YOU%看着这般情景，边笑着边安慰着 目白麦昆。独有于情人节的别样日常就这么结束了。

halloween:
  title: 万圣节
  lines:
    # 经典年
    - 今天即是一年一度的万圣节，为了迎合尚在青春的%UMA%的爱好，于是学院就在万圣节期间装饰成了万圣节风格的装饰。
    - 并且还在特雷森的中庭举办了乔装扮演的活动，只不过看着中庭里面形形色色的打扮的%UMA%，对比着仍然穿着工作服的%YOU%来看有点格格不入。
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「Trick or Treat！」
    - 即使在场外，%YOU%还是会被那些学院%UMA%注意到，然后就是积极地向着%YOU%伸出南瓜造型的篮子索要糖果了。
    - acc: 1
      content: 「来。」
    - 幸好%YOU%准备了糖果来应付这些%UMA%，%THEY%向%YOU%道谢之后便欢笑着跑开了。
    - 真青春啊。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「Trick or Treat！！」
    - 紧接着别的方向又出现了，而且还是非常有气势的请求！
    - %YOU%猛地转过头来，却发现面前竟然是 目白麦昆。
    - 而且还是打扮成魔女一般的 目白麦昆。
    - 此时的 目白麦昆 一只手叉着腰，一只手拿着「魔杖」微微挥舞着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不给糖的话我就要捣蛋了哦。」
    - %YOU%看着面前的打扮成魔女的担当%UMA%，微微笑起来，将手上为%SEX%准备的一小包糖果拿了出来。
    - 果不其然地， 目白麦昆 的眼睛正直勾勾地看着那糖果，拇指虎口架着那根魔杖，双手并一起作捧的动作，%YOU%将那包糖果放在了 目白麦昆 的手上。
    - 「万圣节前几天我在家里自己尝试做的，不知道你喜不喜欢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%自己做的……？」
    - 目白麦昆 先是惊讶地看了一眼%YOU%，然后想到刚才%YOU%给其他%UMA%的糖果。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那%CALLNAME%刚才给的其他同学的是……？」
    - acc: 1
      content: 「那个是随便在一个店里面买的糖果。」
    - 因为，自己对于自己的担当%UMA%但是会有些偏袒的。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「原来如此……」
    - 从包里拿出一颗糖果，将那颗糖果的外包装剥开，而剥开后的糖果的表面还有一层用来保护糖果的糯米纸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好吃～」
    - 于是 目白麦昆 在享用糖果的同时与%YOU%就这么在中庭外面看着万圣节的活动。
    - acc: 1
      content: 「没想到麦昆%YOUNG_LADY%会参加万圣节活动呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是什么话啦，毕竟我也只是个孩子吧。」
    - 说来也是。
    - 因为作为学生的 目白麦昆 跟别的同学过着没有什么不一样的生活，如果什么都不参与的话就显得有些与众不同了。
    - acc: 1
      content: 「魔女服很适合你呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢。」
    - 于是 目白麦昆 学着动画片里面的魔女挥舞着魔杖，对着%YOU%wink了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，这个打扮有没有俘获你的心呢？」
    - acc: 1
      content: 「能够被 目白麦昆 俘获我的心的话，大概一生也值得了吧。」
    - %YOU%像是被尊到了一般捂住自己的心。
    - 而 目白麦昆 好像是被%YOU%的话语而逗笑起来。
    - acc: 1
      content: 「总之，万圣节快乐，麦昆！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，万圣节快乐。」

mejiro_family:
  title: 来自目白家的邀请
  lines:
    # 春季天皇赏赢下的剧情结束后
    - 在 目白麦昆 赢下春季天皇赏之后，正在训练室办公的%YOU%突然接到了一个电话。
    - acc: 1
      content: 「你好？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「%CALLNAME%，你好。」
    - %YOU%一听，就立刻辨认出来这是 目白麦昆 的声音。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为我赢下了春季天皇赏，所以目白家想要办一场宴会来庆祝。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我想过来想邀请你，能不能参与一下呢？」
    - acc: 1
      content: 「当然，目白家的宴会我可是很感兴趣。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「太好了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我托管家给你送来西装。然后目白家的宴会预定在下周，所以下周过后请穿上西装，到时候管家会过来接你。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我很期待哦。」

mejiro_party:
  title: 目白家的宴会
  lines:
    # 在天皇赏春赢下的回合数休息一回合后自动触发
    # 作为89爱慕前的爱慕锁
    - 一段不短的旅程之后，由管家专程接送的车终于是到达了郊外的目白邸。
    - 管家下车为%YOU%打开车门，%YOU%小心翼翼地从车上下来，与管家道谢之后，便挺起了胸膛。
    - %YOU%看着面前庞大的府邸感到吃惊，但还是踏入了这座庞大的目白邸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%。」
    - 大门的那边 目白麦昆 发出了声音，显然 目白麦昆 早已在这里等待着%YOU%。
    - 因为初次进入这上流社会的场所，本就一生大部分时间都是毫无拘束的%YOU%显得有些僵硬地转过头来，但是被 目白麦昆 此时的打扮给看入迷了。
    - 左耳的原本普通的蝴蝶结耳饰此时换成了昂贵的耳饰套在了 目白麦昆 的耳上，而平常的常服则是换成与%SEX%发色相同的浅紫色的礼服，与平常简直判若两人。
    - %YOU%嘴唇微张，愣着的同时脸上逐渐出现着惊喜的神色。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「晚上好。」
    -
    - acc: 1
      content: 「晚上好！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个……我的这身衣装如何。」
    - 目白麦昆 微微脸红，眼神有些躲闪着问%YOU%问题。
    -
    - acc: 1
      content: 「好看，很好看！」
    -
    - %YOU%连续点了两次头，夸赞着 目白麦昆 的衣装。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵……」
    - 目白麦昆 有些喜悦一般地微微咯咯笑了一下，耳朵也不禁颤动了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「倒是%YOU%你，穿西装的时候倒是很帅气呢，」
    - 目白麦昆 的双手很正式地放在胸前，与%YOU%并肩走在前往宴会场的路上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%倒也不需要那么僵硬的啦，毕竟可是在一周前就与我立了大功，理应上也应该是宴会场的主角才对。」
    - %YOU%显得有些不好意思地笑了笑，随即解释着。
    - acc: 1
      content: 「毕竟我可是身为你的%YOU%嘛，目白麦昆 能做到的，我也应该做到。」
    - 两人在为在这偌大的府邸里行走的中间稍微地聊了一下而消解中间的沉默。
    - 而进入到了宴会场之后，%YOU%便被盛大的布置而愣在了原地。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么，请%CALLNAME%享受宴会吧。」
    - 目白麦昆 的话音刚落，刚才接送了%YOU%的管家突然出现在 目白麦昆 与%YOU%的身边。
    - content:
        - fontWeight: bold
          content: 管家
        - 「%CALLNAME%，家主大人想要找你聊一聊。」
    - 而 目白麦昆 那平静的神情却出现了一丝惊讶，有些担心地看着%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - acc: 1
      content: 「我自己一个人去吧。」
    - 得到了答应的管家便带领着%YOU%前往着一个房间。
    - content:
        - fontWeight: bold
          content: 管家
        - 「家主大人就在里面等您了，祝你们聊的愉快。」
    - %YOU%点了点头之后，往门那边看去。
    - 即使门是为了%YOU%而留了一条缝，但是出于教养，还是用手敲了敲门。
    - 里面没有回应，应该是默许了%YOU%的进入。
    - %YOU%进入之后，被豪华的典型欧式房间风格所吸引。
    - 而管家所说的「家主大人」就正在%YOU%的正前方的桌子前坐着，她背靠充满夜色的落地窗，头上带着贵妇帽，让%YOU%有些看不清她的长相，但是她的威严不禁让%YOU%挺直了自己的腰，心中确信这位就是目白家的家主。
    - acc: 1
      content: 「您好……？」
    - 两人之间沉默了一下，面前的目白家家主便开口道。
    - content:
        - fontWeight: bold
          content: 目白家主
        - 「初次见面，麦昆的%CALLNAME%。」
    # FLAGNAME:15 = 当前声望
    - if: era.get('flag:15') < 500
      content:
        - fontWeight: bold
          content: 目白家主
        - 「看您的样子，感觉以前没有见过呢，是刚刚才进入%YOU%生涯的吗？」
    - if: era.get('flag:15') >= 500 && era.get('flag:15') < 2000
      content:
        - fontWeight: bold
          content: 目白家主
        - 「我认得您，从报纸和电视上看到关于你的事情，训练出来的赛%UMA%都有不错的成绩。」
    - if: era.get('flag:15') >= 2000
      content:
        - fontWeight: bold
          content: 目白家主
        - 「您就是那位特雷森中无人不知的训练员吧？经过你手的赛%UMA%就没有一个会落下一个落魄成绩。」
    -
    - %YOU%有些暗暗感叹面前的目白家家主的眼光，便肯定地点点头说。
    -
    - acc: 1
      content: 「是的，很高兴认识您。」
    -
    - 接着，面前的目白家家主拄着拐杖，走到了旁边墙上的柜子面前。
    - 而%YOU%也好奇心驱使下，小步来到了目白家家主的身边。
    - 而面前正是 目白麦昆 赢下的春季天皇赏之后赢得的盾徽。
    - 不仅如此，还有其他的两个盾徽，看着上面的两个名字。
    - 目白浅间，目白泰坦……
    - content:
        - fontWeight: bold
          content: 目白家主
        - 「这些都是先辈们为家族赢下的荣耀。」
    - 最后，则是「目白麦昆」与前面两位放在了一排。
    - content:
        - fontWeight: bold
          content: 目白家主
        - 「这次的比赛，我很满意。」
    - content:
        - fontWeight: bold
          content: 目白家主
        - 「麦昆这次证明了自己的优秀，%SEX%也是目白家的骄傲了。」
    - 目白家家主看向了你，%SEX%的脸上尽是苍老。
    - if: era.get('flag:15') < 500
      content:
        - fontWeight: bold
          content: 目白家主
        - 「当然，赢下春季天皇赏也证明了您的天赋异禀。」
    - if: era.get('flag:15') >= 500 && era.get('flag:15') < 2000
      content:
        - fontWeight: bold
          content: 目白家主
        - 「当然，赢下春季天皇赏也证明了您不愧是一位优秀的训练员。」
    - if: era.get('flag:15') >= 2000
      content:
        - fontWeight: bold
          content: 目白家主
        - 「当然，赢下春季天皇赏也证明了这场优秀的比赛配得上您的声望。」
    -
    - acc: 1
      content: 「家主大人您过奖了，我只是履行了成就赛%UMA%的梦想的训练员本职工作而已。」
    - %YOU%笑了笑，说。
    - content:
        - fontWeight: bold
          content: 目白家主
        - 「谦虚这块倒是挺好。」
    - content:
        - fontWeight: bold
          content: 目白家主
        - 「之后您也是目白家认可的训练员了，请您在外不管对人对事，都要注意行为。像酗酒和赌博这些不良嗜好……」
    - if: era.get('love:13') >= 75
      lines:
        - content:
            - fontWeight: bold
              content: 目白家主
            - 「尤其是与麦昆走得很近的时候……」
        - content:
            - fontWeight: bold
              content: 目白家主
            - 「春季天皇赏赢下来了，我也不好干涉你们之间的关系。可以让你们这段关系继续下去，如果对麦昆做出什么伤害性的事情。」
        - content:
            - fontWeight: bold
              content: 目白家主
            - 「倘若让我知道了的话，我可以随时让你离开麦昆。」
    - 强大的寒意冲刷着%YOU%的脊梁，每个字都像刀一样刻进了%YOU%的心里。
    - acc: 1
      content: 「我一定注意……家主大人。」
    - %YOU%紧张地答应下来。
    - 听到了满意回答之后，目白家的家主这时才收回了气场。
    - 目白家的家主拍了拍%YOU%的肩膀，慈祥地说道。
    - content:
        - fontWeight: bold
          content: 目白家主
        - 「时间不早了，有机会我们再慢慢去聊，别忘了今天的主角可是你和麦昆。」
    -
    - acc: 1
      content: 「那就……先告辞了。」
    -
    - %YOU%微微鞠躬了一下，便来到门前看着目白家的家主一眼后，离去了。
    -
    - 回到宴会场的%YOU%，环视着周围的场地。
    - 宴会早已开始，场上有优美的音乐播放着，而场上有着身穿华丽礼服的男士女士，%THEY%三三两两的聚在一起，谈笑风生，尽显达官贵人风格，相比于他们，自己的训练员身份也有些渺小了。
    - （内心不知为何有些复杂）
    - %YOU%这样想着下去到了宴会场上。
    - 目白麦昆 作为宴会场上唯一的依靠，%YOU%的脑袋里满是「必须找到 目白麦昆」的想法。
    - %YOU%穿过着众多人群，寻找着 目白麦昆 的身影。
    - 而%YOU%作为着本次宴会的焦点之一，%YOU%自然少不了被其他人上前邀请，但都被%YOU%一一回避。
    - acc: 1
      content: 「抱歉！我还要找一下麦昆！」
    - %YOU%从室内扫过一眼之后，并没有发现那醒目的浅紫色身影。
    - 无意间从阳台看去，竟找到了 目白麦昆，但是不知为何%SEX%正看着远处。
    - %YOU%快步走向%SEX%所在的地方。
    - acc: 1
      content: 「麦昆。」
    - 目白麦昆 听到了%YOU%的呼唤之后，看向了%YOU%。
    - acc: 1
      content: 「你在这里啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跟祖母大人聊完了吗？」
    - %YOU%点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个……她有说什么吗？」
    - %YOU%若有所思地想了一下。
    - acc: 1
      content: 「夸你很优秀。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是吗……？」
    - %YOU%微微点了一下头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……从小到大的努力，一切都没有白费呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是除了努力之外，出道战前的时候我也没有看错人。」
    - 目白麦昆 微微露出喜悦的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「从进入特雷森开始到现在能在连霸春季天皇赏的庆功会上，都要多亏了你。」
    - acc: 1
      content: 「亲自面对她之前，我还以为她是位很严肃的人呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就说吧，其实祖母大人是很近人情的那位，绝对不是外人所想的那样。」
    - 但是事实真是如此吗？
    - 或许家主的温柔只是给家族的%UMA%们吧。
    - 等到话题聊完了之后，两人站在一起。
    - acc: 1
      content: 「不过，为什么麦昆一直待在阳台呢。」
    - 好像被问到痛处的 目白麦昆 颤了一下，然后满脸堆笑着说。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「原因说起来就很不符合目白家的风格了吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总是被里面的大人们邀请着，很烦。所以才过来阳台那边吹风。」
    - 被夜风吹起了头发，眉梢低垂的 目白麦昆 有些令人着迷。
    - acc: 1
      content: 「看来我们是同病相怜呢。」
    - 同样也是遭到了很多邀请。
    - %YOU%向着 目白麦昆 伸出了一只手。
    - acc: 1
      content: 「那麦昆能与我一同参与宴会吗，这样子就不会被旁人邀请了。」
    - 被%YOU%请求着的 目白麦昆 看着手，又看了眼%YOU%那真诚的眼神，果断地接受了%YOU%的请求，从阳台回到了室内。
    - 才刚刚回到室内的，穿着礼服的熟悉%UMA%来到了两人的面前。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: ？？？
        - 「麦昆，以及%CALLNAME%！」
    - 「莱恩？」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「是我哦，怎么，不记得我了吗？」
    - 「不不不，只是说，莱恩穿着礼服的话是真不适应呢。」
    - 反而收到了这样的评价的 目白莱恩，却不好意思地笑了起来。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「是吧，果然只有运动服才更适合我呢，不过这是宴会的话这么穿也正常吧。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「倒不如说的话，你们两个怎么还在这里，不活动一下尝试宴会的氛围吗？」
    - %YOU%微微点了点头。
    - acc: 1
      content: 「正有此意！」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「OK！你们在这里好好逛逛，那么我就不打扰你们了。」
    - 两人看着莱恩离去的身影，%YOU%这么说着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么，我们要去哪里呢。」
    - acc: 1
      content: 「品尝美食」
    - 当%YOU%提议出来的时候，目白麦昆 也很快地同意了这样的决定。
    - 走向了跳舞圈外放有美食的桌子旁，寻找着感兴趣的美食。
    - 然后%YOU%停下了脚步，看向身旁的巧克力喷泉。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - %YOU%微笑了一下。
    - 「我还小的时候接触到了这个东西。」
    - 「当时年少无知上嘴舔了一下，结果没舔到巧克力，反而头发沾上了巧克力酱。」
    - %YOU%看到了旁边有棉花糖和签子之后，用签子插上了棉花糖，放在巧克力喷泉那里。
    - 「那个时候我才知道，要放棉花糖之类的东西浇上去才是正确用法。」
    - 目白麦昆 听完之后，捂嘴笑了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%竟然还有这样的经历。」
    - 两人边欢快地聊起趣事边品尝美食。
    - acc: 1
      content: 「尝试跳舞」
    - 目白麦昆 一听到%YOU%的提议，显得有些惊喜。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要跳舞？」
    - 「但是，我不会跳。」
    - %YOU%有些不好意思地这样说着。
    - 但是即使%YOU%这样子说着，目白麦昆 依然不善罢甘休，拉着%YOU%的手，走进了跳舞圈里。
    - 目白麦昆 与%YOU%面对面站着抓着一边的手一同向外伸出，而 目白麦昆 另一边的手顺着%YOU%的手臂抓到了前臂，而%YOU%的手在 目白麦昆 的提醒下，因为体型差异就只能微微碰到了%SEX%的背部。
    -
    - 「很像是网络视频上出现的动作呢。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就应该是这样子的。」
    - 目白麦昆 得意地这样子说着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这只是刚刚开始呢。」
    - 于是在 目白麦昆 微微提醒下，模仿着%SEX%的舞步。
    - 让 目白麦昆 在握着%YOU%的手臂下如抛竿一般向外转身，让空余的手臂向外展开，然后两人又聚拢起来。
    - 两人交错着行走，然后又伸出手臂将彼此拉回来。
    - 目白麦昆 在转了一圈的同时，%YOU%托住了%SEX%的腰，目白麦昆 就这么顺势躺在%YOU%的怀里。
    - 最后 目白麦昆 的脸上微微惊讶了一下，%YOU%才如梦初醒，又看向了看向了周边。
    - 原来沉浸在舞蹈中的两人尚未注意灯光给到了%THEY%，而周围也围满了人。
    - 灯光恢复到了原样。
    - 然后逐渐地，周围的人群中响起了鼓掌声。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笨蛋。」
    - 目白麦昆 虽然暗骂着，但是也很欣慰地看着%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还说你不会跳舞吗？」
    -
    - acc: 1
      content: 「只是多多少少地在网络上看到罢了。」
    -
    - 两人分开，还微微沉浸在跳舞后的余韵里。
    - 「感觉还有更多的技巧等着麦昆教我呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次有空的时候我再教你吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为我的关系，以后还需要你参加一些宴会的一些技巧呢。」
    - divider: true
    - 在两人参加了很久宴会的活动之后，宴会也终于到了收尾阶段。
    - 两人来到了宴会的阳台上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「宴会怎么样？」
    -
    - acc: 1
      content: 「虽然谈不上喜欢，但是至少有你在场啊。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%你可真的是……」
    - 目白麦昆 笑着看着%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我以前参加目白家的各种活动，也都是只有我一个人。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为只有我一个人，能够陪伴我的只有我的%SIBLINGS%们。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以今天能够与%CALLNAME%一同享受宴会，拥有非常的新鲜的感觉呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你，%CALLNAME%，今天的宴会我很高兴呢。」
    - 目白麦昆 害羞地在旁边说着。
    - acc: 1
      content: 「不客气。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今晚我托管家爷爷帮你安排了一间客房，请你好好享用。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「顺带一提，春季天皇赏的重担终于平安地落下去了。所以今后我们的互动，我很期待哦。」
    - （这么说，是可以和麦昆更进一步的意思吗？）
    - acc: 1
      content: 「我明白了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么，%CALLNAME%，晚安。」
    - 之后，%YOU%在管家带领下，来到了整理好的客房，清洗了一下身体，穿上了睡衣，躺在了床上，沉沉睡去。

want_dessert:
  title: 想吃甜品
  lines:
    # 商店街
    - 与麦昆外出时偶然路过了甜品店，它的存在紧紧锁住了麦昆的眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，那个……」
    - 虽然没有看到%SEX%的正脸，但是相信%SEX%的眼睛已经充满了小星星。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……」
    - 也许%SEX%知道会给%YOU%造成困扰以及影响外界形象，所以也在强行忍住甜品的诱惑。
    - acc: 1
      key: select
      content: 「我们去吃一顿吧？」（干劲+1，好感度+10）
      lines:
        - 听到令人惊讶的话语，麦昆好似震惊一般看向了 %YOU%。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真的吗？%CALLNAME%？」
        - 已经下定决心的%YOU%点了点头。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那我就不客气了。」
        - 于是麦昆与%YOU%美美地在甜品店度过了休闲时间。
    - acc: 2
      content: 「要走了哦。」（根性+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……哦。」
        - 麦昆看向了你，没有说什么，答应起来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为了比赛，还需要再忍忍呢……」
        - 回去路上，麦昆淡淡地自言自语着。