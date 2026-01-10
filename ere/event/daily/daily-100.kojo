选中互动角色:
  sync: true
  lines:
    # 奴役
    - if: d.rape === 1
      random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「呼呼呼～今天也要去散步吗？那样的话，要带上其他的孩子吗？」
        - 赤身全裸的奇锐骏安静地趴伏在地面之上，直到%你%靠近，%她%才一面左右摇晃着耳朵，一面将项圈叼在嘴里递往%你%的手边。
    # 强奸
    - if: d.rape === 2
      random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「唔姆姆……败者就是要服从胜者，这是自然界的必然呢。」
        - 如此说着，奇锐骏平静地为自己戴上了今日份的项圈。
    # 被奴役
    - if: d.rape === 3
      random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「阿拉拉……要忍耐住哦？%称呼%～」
        - 按着%你%燥热的小腹并不时往下探索，奇锐骏的脸上是意味深长的笑容。
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「哎呀哎呀……%称呼%～不去跟其他年轻可爱的好孩子们聊天了吗？」
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「早上好哦，早饭已经吃了吗？不可以不吃早饭的哦。」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「如果还没有吃的话，我推荐纳豆拌饭，或者是稀饭配嘎吱嘎吱干哦～对身体可好了。」

回合开始:
  sync: true
  lines:
    # 奴役
    - if: d.rape === 1
      random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「室内、天台、车站，还是训练场，不管是哪里都可以的哦？」
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「如果是需要其他孩子的话，我也可以来帮忙的。虽然对其他人来说，第一次可能会有一点点痛，但只要能温柔一些的话，%女孩%子也会因为本能而理解%称呼%的魅力所在呢。」
    # 强奸
    - if: d.rape === 2
      random: true
      lines:
        - color: %代表色%
        - content:
            - fontWeight: bold
              content: 奇锐骏
            - 「呼呼～这次可不会这么轻易得被%你%推到在身下了哦？我对自己的拳法可是蛮有自信的呢。」
    # 被奴役
    - if: d.rape === 3
      random: true
      lines:
        - color: %代表色%
        - content:
            - fontWeight: bold
              content: 奇锐骏
            - 「今天的嘎吱嘎吱干我已经做好了，放在了冰箱里。要记得按时吃哦？要是又因为营养不良导致脱水而昏过去了可不行呢，%称呼%❤️～」
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「哎呀呀……看来是有在认真的工作呢～要吃一点刚腌好的糖拌红西柿吗？补充了足够的糖分，下午的训练也能够打起精神哦。」
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「%称呼%穿的衣服很单薄呢……到秋天的话，要多穿一点衣服哦。要是穿的太少了感冒了的话，可是会很难受的哦。」
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「等训练结束了之后啊，我想要去腌些嘎吱嘎吱干呢。这样等到了明天，%称呼%就可以拿这些嘎吱嘎吱干分享给其他好孩子，跟他们搞好关系了吧？」
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「哎呀呀……看起来很精神呢，%称呼%，是发生了什么好事了吗？呼吼吼……看来要帮你准备红豆饭了呢～」
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「哎呀呀……看起来很精神呢，%称呼%，是发生了什么好事了吗？呼吼吼……看来要帮你准备嘎吱嘎吱干了呢～」
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「哎呀呀……看起来很精神呢，%称呼%，是发生了什么好事了吗？呼吼吼……看来要帮你准备糖拌红西柿了呢～」
    - random: true
      lines:
        - color: %代表色%
          content:
            - fontWeight: bold
              content: 奇锐骏
            - 「哎呀呀……看起来很精神呢，%称呼%，是发生了什么好事了吗？呼吼吼……看来要帮你准备红烧鲤鱼了呢～」

聊天:
  # 奴役
  - if: d.rape === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「阿拉拉……今天也要在特雷森里散步吗？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「赤身裸体的被脖子上项圈与缰绳牵着被带到公共场所里散步什么的，总会感觉到心脏在砰砰直跳呢，果然这就是年轻人经常会说的『浪漫』吧？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「不仅能锻炼根性，还能感觉到浪漫和快乐什么的；这样优秀的训练方法得传播出去才行呢。」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「像是%奇锐骏称呼骏川%，还有理事长%她%们呐，感觉很容易就会沉沦在其中呢。」
  # 强奸
  - if: d.rape === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「阿拉……今天的太阳真舒服呢，是吧积攒下来的家务一口气做完的好时机呢。」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「洗衣服、晒被子、还有做嘎吱嘎吱干……唔噜噜，今天要做的事情意外地多啊。」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「所以呢，%称呼%；今天可不许你强奸我了哦？」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「无论是在大家训练的时候被带到中庭的枯树洞里，还是午休的时候被带到天台上，还是下午外出的时候在车站的小巷子里什么的，今天都是不可以的哦？」
  # 被奴役
  - if: d.rape === 3
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「今天我感觉自己的状态特别好呢，所以晚上我会去宠幸你。」
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「所以呢，%称呼%，要记得把身上的各个地方都好好地洗干净等着我哦。」
      - 明明是一如既往的笑容，却有一种不容拒绝的魄力。
      - 今天晚上，%你%到底会变成什么样子呢……
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:100:40') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「……唏唷唷……完全使不上劲呢～」
  - if: era.get('cflag:100:40') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「唔……话说，接下来要做什么来着呢？今天迷迷糊糊的，不小心给忘了啊。」
  - if: era.get('cflag:100:40') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「库呼呼……差点睡过去了呢。这样可不行呢，得在鼻子下面稍微抹点清凉膏……」
  - if: era.get('cflag:100:40') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「扑通……啊，差点踩到青蛙了（摔了一跤）呢～」
  - if: era.get('cflag:100:40') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「嗯……回去还要腌卡擦咔嚓干呢，不打起精神来可不行呢～」
  - if: era.get('cflag:100:40') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「呼……坚持就是力量呢～所以不要紧的哦。」
  - if: era.get('cflag:100:40') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「哎嘿嘿……稍微有点使不上劲了呢。」
  - if: era.get('cflag:100:40') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「呼呼呼，要像同龄人一样努力才行呢。」
  - if: era.get('cflag:100:40') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「深呼吸——呼、呼～得继续绷紧神经才行呢。」
  - if: era.get('cflag:100:40') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「注意力……被眼前呼呼飞的小苍蝇给打乱了呢——」
  # CFLAGNAME:48 = 育成回合计时
  - if: (era.get('cflag:100:48') < 3 * 48) && era.get('cflag:100:40') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「争口气～好，靠着墙边拍了一下背，精神了呢。」
  - if: (era.get('cflag:100:48') < 3 * 48) && era.get('cflag:100:40') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「%称呼%，我们开始训练吧～」
  - if: (era.get('cflag:100:48') < 3 * 48) && era.get('cflag:100:40') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「扩胸运动——已经做完了哦～」
  - if: (era.get('cflag:100:48') < 3 * 48) && era.get('cflag:100:40') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「今天也踏踏实实、一步一个脚印的努力吧～」
  - if: (era.get('cflag:100:48') < 3 * 48) && era.get('cflag:100:40') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「该走了哦，%称呼%。」
  - if: era.get('cflag:100:40') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「嗯～那么，%称呼%，今天的训练是什么呢～？」
  - if: era.get('cflag:100:40') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「不管是什么训练，我都会认～真～对待的哦。」
  - if: era.get('cflag:100:40') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「盐分补给也很重要，来吃一点嘎吱嘎吱干吧～」
  - if: era.get('cflag:100:40') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「哼、哼～拉伸运动准备到位～接下来要认真上了哦。」
  - if: era.get('cflag:100:40') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「啊～%称呼%，刚刚你说了什么啊？」
  - if: era.get('cflag:100:40') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「呼呼呼～更加严格的训练也是可以的哦。」
  - if: era.get('cflag:100:40') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「阿拉啦……已经到训练的时间了啊～」
  - if: era.get('cflag:100:40') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「今天天气很好呢～看着太阳公公啊，总感觉干劲十足了～」
  - if: era.get('cflag:100:40') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「哎呀呀……看到了赛道啊，总感觉心里痒呼呼的呢～」
  - if: era.get('cflag:100:40') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontWeight: bold
            content: 奇锐骏
          - 「训练结束了之后啊，我想要把被子拿出来晒呢～%称呼%一会儿能来陪我吗？」
  - if: "!(era.get('cflag:100:48') < 3 * 48)"
    random: true
    lines:
      - 奇锐骏一直保持着轻松的表情。

情爱囹圄:
  - 逃脱的大门被封印了。
  - 并非是靠门锁，而是纯粹的腕力。
  - 从把手为原点，整个大门都向内扭曲着，如漩涡般形变。
  - 而更为可怕的是，门并未被卸下——门与墙壁之间那脆弱的连接处竟然依旧完好。而与门一同形变的，竟然是整个墙面。
  - 是的……那个经由钢筋定型的水泥墙面，竟然整体都如面点一般发生了柔软的形变！
  - 仅仅只是针对水泥的破坏是做不到这种程度的。如此程度的形变，就只有在不破坏凝固水泥的结构下，利用某种力量将墙面赋予韧性，然后用自己绝对的力量将连带着钢筋与水泥的整个墙面用向捏弹簧一般，将其漩涡式的形变……
  - 然而，这甚至不是捏弹簧——因为她根本就没有抱住整个墙面！而仅仅只是握住了门把手而已！
  - 这是物理学的奇迹……不，奇迹已经不足于形容了，在这里，这个密闭的房间之中，物理学已经不存在了！
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「呐，%称呼%，你知道吗？我已经受够那些繁文缛节了。」
  - 然而，即便自己仍在惊慌与恐惧之中。在奇迹的大门之前，灰色的身影如平常一般，平静的声音在密闭的房间内回转。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「其实呐，%称呼%，我一直有在好好的忍耐哦？因为不想要伤害到你，所以其实我一直有在约束自己的次数与频率呢。」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「但即便如此，%称呼%还是在想着跟其他孩子们卿卿我我呢……」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「既然%称呼%说，要遵从自己内心真实的想法的话…… 」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「那我稍微认真一点……也是可以的吧？」
  - 说罢，奇锐骏从口袋中，取出了堆叠在一起约有一根拇指这么长的拆卸好了的小雨伞。
  - 然后，她那纤细的双手伸在了%你%的眼前，拿一指厚的小雨伞，就这样经由她的拇指跟食指递在了%你%的面前。
  - 「滋啦滋啦…… 」
  - 橡胶制品，发出了绝对不会是橡胶所发出的声音。
  - 那一指厚的橡胶雨伞，竟然在%你%的面前被撕成了两半，如同碎屑般随意的摔落在地面之上。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「……今天，在我尽兴之前，是绝对不会让你休息的哦。 」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「
      - color: pink
        content: %称呼%❤️～
      - 」
  - …………
  - ………
  - ……
  - 那深色的眼眸中，闪烁着粉红的光圈。
  - 很快，密闭的房间内，到处都将流下纯白之血……

金钱奴隶:
  - 金钱是一把万能钥匙，失去了这把钥匙，所有的大门都将为你关闭。
  - 作为成年人，%你%毫无疑问是深知此间的道理。
  - 然而即便如此，%你%依旧迈出了身为教育者所绝不应当迈出的这一步。
  - 那便是不仅将所有金钱，全部投入到新发行的集换式少女卡牌游戏【暗黑特雷森】之中；甚至为了获得其中编号 100 的全球限量 100 张的 UR 镜碎黄金稀有卡【灰眼画女】，在一家竞拍网站上与竞价方竞价时一时上头，最后以 103 亿 2000 万元的价格拍下了这件稀有藏品。
  - 但是，毫无疑问。%你%根本没有这 103 亿 2000 万元。
  - 原本以为，这只是一场普通的竞拍游戏而已。即便拍下来了，只要自己之后告知竞拍方自己没有那么多的钱，交付少量的违约金进行重新拍卖就好了……
  - 但今天早上，当律师函与法院传票一起被送达时，%你%才意识到问题的严重性。
  - 如果不能在限期内缴纳 103 亿的尾款，那么竞拍网站就会以「扰乱竞拍秩序罪」将自己送上法庭，最高判处三年以上有期徒刑。
  - 虽然这场审判未必会以自己有罪的形式发展。但作为教职人员，自己被送上法庭本身就已经是一种社会性的死亡。因此，哪怕自己根本没有这么多钱，%你%也要想尽办法去凑够这103亿2000万元。
  - 但是，该怎么去凑呢？
  - 银行那边毕竟已经达到了借贷的最大额度。
  - 而就在%你%为难之际，一想能看穿自己心事的奇锐骏，悄悄地凑了过来。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「%称呼%，在烦恼什么呢？……阿拉，是金钱的问题吗？」
  - 法院的催债文书，就这样不小心被出现在自己身后的奇锐骏看到了。
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「没有写清楚数额，但似乎是很大的一笔数字呢。」
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「如果是钱的话，我这里有些盈余的哦……要我再给你一些吗？」
  - 虽然此前也找奇锐骏借过钱，但从没有过这么庞大的数值。
  - 理智正在告诫着自己，作为教职人员，不能再跟自己的担当马娘发生如此腐败的金钱关系了。
  - 但是，这笔债务……
  - color: %代表色%
    content:
      - fontWeight: bold
        content: 奇锐骏
      - 「不要紧的哦，%称呼%；就像以往一样，用家务来还债吧～」
  - 那一刻，奇锐骏的脸上浮现了轻松却又令%你%无法拒绝的笑容……
  - …………
  - ………
  - ……
  - 金钱是一把万能钥匙，获得了这把钥匙，所有的大门都将为你打开。
  - 这是奇锐骏最近才明白的道理。
  - 真没想到，一次普普通通抽卡抽到的一张好像很稀有的卡牌，在竞拍网站上竟然卖出了103亿2000万元的高价。
  - 而也正是凭借着这次竞拍，奇锐骏获得了大量财富，得以偿还了%你%所欠下的债务。
  - 现在，奇锐骏已经成为了%你%金钱上的主人。
  - 而根据奇锐骏制定的家务工资表，%你%每完成一项工作，奇锐骏就会免除%你%一部分的债务。
  - 比如做饭、洗碗、一起锻炼、牵着手散步。
  - 还有讲故事、摸摸头、背部按摩、咬舌头……当然是奇锐骏自发去给%你%去做。
  # CFLAGNAME:0 = 性别
  - if: era.get('cflag:100:0') * era.get('cflag:0:0') !== 1
    content: 以及接吻、爱抚、生育、育儿、二胎、三胎之类的额外津贴……虽然这些现在还没有明着写在家务工资表上，但要不了多久就会写上的吧。
  - 按照这个家务工资表，如果%你%能每天十次，那只要再过三十年，%你%就能还清所有债务吧。
  - 在那之前%你%也得修习拳法，这样在退役后奇锐骏带%你%回到老家时才能得到父亲的认可呢。
  - 对于奇锐骏来说，这未尝不是一个美好结局的开始。但对于%你%而言，当你欠下如此巨额的债务时，或许结局就已经注定。
  - 因被金钱关系所囚，%你%迎来了结局……