# @file 荒漠英雄 - 招募
# @author 某不思议的大嘴鸥
rec1:
  - 那一闪的光芒，像是要把地平线切开。明明只是远远地望了一眼，%YOU%却能感受到那崇高又狂野的跑法，那拼尽一切的气息，那一往无前的姿势。
  - 毫无疑问，那是……
  - acc: 1
    content: （英雄……）
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: （……值得调教的雌性……）
  - 算了别想那么多了，那么厉害的%UMA%应该早就被签约了。
  # FLAGNAME:15 = 当前声望
  - if: era.get('flag:15') < 500
    content: 赶紧整理好出道战的资料，然后找一个看起来会接受新人训练员的担当吧。
  - acc: 1
    content: （可我仍想再看到一次那样的奔跑）
  - 在整理了一个上午的资料后，%YOU%仍没寻找到有潜力的%UMA%。
  - if: era.get('flag:15') < 500
    content: 也是，有潜力的%UMA%更寄望于签约经验丰富的训练员，毕竟训练员可以带很多届%UMA%，但%UMA%只有一次机会。
  - acc: 1
    content: 「该把从%Y_CALL_301%借给我的资料还回去了，%SEX%说直接还到图书馆就行来着？」
  - %YOU%来到图书馆，虽然刚入职时听%Y_CALL_301%介绍过特雷森的各种豪华设施，但仍不禁被占地一层楼的图书馆惊叹到，这就是中央吗？
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: ？？？
      - 「那，那个，我……我是今天值班的图书管理员，请问您有什么困扰吗」
  - %YOU%回头一看，一名小个子%UMA%坐在柜台旁边，书本堆成小山高过了%SEX%的头，要不是%SEX%出声询问，%YOU%可能不会发现这里还有一个%UMA%。
  - %SEX%站起身来，%YOU%才看清这个穿着特雷森校服的小小%UMA%的面相。
  - 一头偏灰的秀发用俩根白色的发带扎成发带编发，在左额变成麻花垂下。钴蓝宝石般的瞳孔露出一丝热情和知性。一圈蓝色点缀的兰花花环作为耳饰戴在右耳上，再加上大大的眼镜透露出一分可爱和一分沉稳。再加上这圆鼓鼓的一张小脸，煞是可爱。大大的耳朵和灵活的尾巴轻轻摇晃着，让%YOU%觉得是不是图书馆难得来了人能陪%SEX%解闷才如此开心。
  - acc: 1
    key: relation
    content: 「我是来还书的」（好感+5）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「还书的是吗，把想还的书交给我就行……」
      - 图书管理员接过了%YOU%手里的书，用柜台上了机器扫了扫后
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「原来是骏川小姐借的书啊，差一点就要超过还书期限呢」
      - %SEX%又随便翻了几页
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「保护的很好呢，一点污损也没有……你也很喜欢书吗？如果是新手训练员想找一些关于%UMA%训练的书的话我也可以推荐哦……毕竟我经常坐在图书馆里看书呢」
      - acc: 1
        content: 「可以吗？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「可以的哦……不过作为回报到时候能让我看看你和你担当的故事吧」
  - acc: 2
    content: 「我是来寻找英雄的」（爱慕+1）
    lines:
      - 图书管理员一个激灵
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「您……您也喜欢英雄谭传记之类的吗！我也很喜欢英雄史诗之类的书本，历史上的丰功伟绩再加上后人编纂时的添油加醋，虚与实混合在一起的史诗，才能称得上是拥有神话色彩的英雄！」
      - %YOU%看着图书管理员突然打开的话匣子和微微颤抖的耳朵，想着这个小姑娘对神话传说，民俗史诗肯定有着不小的兴趣吧
      - 「看来你很喜欢英雄的话题啊」
      - %YOU%本想着鼓励%SEX%一下，可是%SEX%的耳朵却突然垂了下来，脸上也爬满了紧张。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「啊……对不起……突……突然自顾自地说了这么一堆话。民俗故事的话在这边，我带您过去」
      - %YOU%悄悄地把%Y_CALL_301%借给%YOU%的书放在归还区的书堆上，跟上了%SEX%。
  - 图书管理员站起身来，打算带%YOU%去对应的书架。%SEX%突然想起还没有告诉%YOU%%SEX%的名字。连忙转身向%YOU%说道
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: ？？？
      - 「不好意思……忘记向您自我介绍了，我是中等部的%CHARA%，住在美浦宿舍。如果……你有英雄史诗之类的问题……可以找我帮你解答」
  - if: era.get('cflag:47:0') !== 1
    lines:
      - 或许是因为转身的时候太过心急，又或许是因为不符合身高的发育。%TEEN%胸前的玉兔随着转身一起荡漾了起来。
      - 这时候%YOU%才发现，这名名叫%CHARA%的%UMA%，不仅拥有着不符合年龄的身高，更有着不符合年龄的丰乳肥臀
      - acc: 1
        content: （这小妮子把长高的养分拿去发育身材了？）
      - acc: 2
        content: （好胸好臀好腿，妥妥的安产型幼妻）
      - %TEEN%似乎察觉到了%YOU%奇妙的想法和四处乱瞟的目光，轻咳一声。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「能问%CALLNAME%您为什么想寻找英雄谭之类的书本吗？」
  - %YOU%向%SEX%描述那天所看到的，撼动%YOU%心的光景。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「像光芒一样将地平线切开的英雄一样吗……哪怕只是远远的看见了一眼就寻找好几个月？%CALLNAME%你可真浪漫啊……」
  - 走到书架前，%CHARA%转过身来
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这里就是民俗文化分区了……虽然有些难以启齿……但是能不能让我和你一起在学园里寻找那位英雄一般的%UMA%？」
  - %YOU%发现%CHARA%似乎有点兴奋？眼睛都开始放光。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我……对英雄故事十分了解……也在学园里认识不少人……我也想找到那名英雄」
  - acc: 1
    content: 「可是特雷森学生的任务就是跑步，你这样帮我不会打扰到你训练吗?」
  - %CHARA%在听到这个问题后有些语无伦次
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不……不碍事的，虽然我还有训练和图书管理员的任务在身，但是我……我也想看到那位被%CALLNAME%称为『英雄』的%UMA%，想看看%SEX%为什么能被认为是英雄……我……我也……」
  - acc: 1
    content: 「也？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不……没什么，总之请多指教了%CALLNAME%……明天我就会去开始收集情报……一周后还是我值日，那个时候我们来交换一下情报吧……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （我也想……成为英雄啊）

rec2:
  # 中庭
  - %YOU%来到图书馆与%CHARA%赴约。
  - 你们经常一起在学园里寻找英雄的行为已经传开了，全学园的人都知道有一个戴着黑框眼镜的小个子%UMA%和一个新人训练员在寻找英雄。你们时而一起调查，时而分头行动。不得不承认这个名叫%CHARA%的%UMA%知识面如此之广以至于在某些方面上超越了已经读完大学的%YOU%。
  - 熟练地进入大门，跨过书堆看到小个子%UMA%又在晃动耳朵不知道在看什么东西。
  - acc: 1
    content: 「hi，我来赴约啦图书馆的英雄」
    lines:
      - 在%YOU%打完招呼后，%CHARA%仍然在看书，好像没有注意到%YOU%。
      - acc: 1
        content: （上去拍拍%SEX%）
      - %YOU%打算拍拍%SEX%的背，但是%YOU%够不到。%YOU%又想拍拍肩，但也够不到。索性拍了拍那个沉浸在书本里的小脑瓜。怎么说呢，这妮子发质还挺好的。
      - %CHARA%疑惑地抬了抬头，发现是%YOU%拍的头。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶……是%CALLNAME%，何时来的？我又读的太专心了不好意思」
  - acc: 2
    content: 上手 RUA 俩下晃晃悠悠的大耳朵
    lines:
      - 手感真好啊，不愧是荒漠。
      - %CHARA%颤了一下，随即抬起头一脸凶相地看向手伸来的方向，发现是%YOU%后又柔和了起来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗼，%CALLNAME%……手册上没有教过你不能随意触碰%UMA%的耳朵和尾巴吗？如果是其他人我可就要叫保安来把你拖出去了」
  -
  - acc: 1
    content: 「这次又在读什么民俗故事？」
  - %CHARA%摇了摇头，举起并晃了晃了手里的书本
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这是我收集的，关于那位『英雄』的情报啦。首先，%CALLNAME%看到那位%UMA%的时间应该是自主训练的时间。所以有很多%UMA%在那个时间段出入训练场，即使向工作人员申请到查看借用训练场的记录也很难找到那位%UMA%……」
  - %CHARA%一边展示笔记本上收集的情报一边说着
  - acc: 1
    content: 「难道真的没有办法了吗」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「还有机会，%CALLNAME%你对那位%UMA%印象足够深刻的话应该看一眼就能在场上看出来」
  - acc: 1
    content: 「可是我之前都在训练场上坐了好多天了，每天都从白天坐到晚上，还是没有再看到过一次那样的%UMA%」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「噗……原来同学之前的『训练场的观众席上有个郁郁不得志而化为幽魂的训练员』的都市传闻的源头是您啊……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那我们换个方法，我觉得我认识的%UMA%里能被称为『英雄』的就有好几个，我们一个一个找过去吧。比如看起来就很不可思议的的，像是来自宇宙的，名字跟某知名tcg场地魔法重名的……」
  - acc: 1
    content: 「荒漠认识这么多英雄吗？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不是啦！我三句话描述的是同一个%UMA%，是我的同班同学兼好友——新宇宙。%CALLNAME%不会跟鲁道夫会长学坏了吧？」
  - %CHARA%气鼓鼓地看着%YOU%打断%SEX%说话并且玩了个苏联+名字笑话
  - （气鼓鼓的样子好可爱）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「还有一位即使无论如何都差一步，但仍然保持全身全灵的姿态去超越前排的%UMA%……还有我最最最最最敬仰的——%C_NAME%前辈。我非常憧憬拥有与生俱来的体格又刻苦锻炼的%SEX%……哦对了今天%C_NAME%前辈应该也在训练场上训练，要不要我们去看一看？」
  - 放学后，%YOU%和%CHARA%来到训练场，纵使训练场的学生很多，纵使%YOU%也只是在训练场入口远远望去，那个疾驰的绿色身影仍在夺走了在场大部分人的注意力。
  - acc: 1
    content: 「那个就是你口中的前辈是吗？跑的好快。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是啊是啊，%CALLNAME%我们走进点观摩%C_NAME%前辈的训练吧」
  - %CHARA%拿出笔记本和笔，耳朵和尾巴又摇晃了起来。
  - acc: 1
    content: （%SEX%的跑法……压迫力好强！）
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: （但是%SEX%不是我想要找的雌性）
  - %YOU%打算告诉%CHARA%%YOU%那天所看到的并不是%SEX%
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯……步伐八字，很稳健。应该是巡航速度？可是%C_NAME%前辈已经跑了俩千四百米左右了……是在为长距离比赛做准备吗？呼吸方法也仍保持在吸吸呼，还有体力存余，%C_NAME%前辈在备战长距离重赏吗……」
  - %SEX%正在认认真真地分析%C_NAME%的跑步姿势，体力残余和总计时。耳朵和尾巴晃动的幅度也越来越大。
  - acc: 1
    content: 「你也想上去跑俩圈吗？」
  - %CHARA%似乎被吓了一跳
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不……那个……我今天自主训练请假了……就不上去跑了……」
  - acc: 1
    content: 「诶，为了陪我调查『英雄』？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不……不是……我……额……今天先到这里吧……既然%C_NAME%前辈也不是训练员寻找的『英雄』的话下次我们去拜访新宇宙吧……我，我先失陪rua（咬到舌头）……」
  - （怎么突然语无伦次成这样，是怕我抓%SEX%去训练吗？）
  - （这是……）
  - %YOU%发现地上有一本很可爱的笔记本？
  - （是荒漠的吗？打开看看确认一下主人吧）
  - 笔记本里写满了每次%CHARA%和其他人并跑后的总结还有自主训练得出的经验，作为一个未出道%UMA%就总结成这样无疑是优秀的。
  - （这么热爱赛跑的%UMA%为什么会特地请假来陪我调查？）
  - content:
      - fontWeight: bold
        content: 教官
      - 「啊，那边的训练员，请问你是%CHARA%的专属训练员吗？」
  - 「诶，那倒不是」
  - content:
      - fontWeight: bold
        content: 教官
      - 「这样啊，荒漠同学之前有好几次因为伤病错过了模拟赛。临近下次模拟赛，%SEX%又开始焦虑了，平时训练的成绩都比以往差了好多。所以我建议%SEX%在校运会上好好活跃一番说不定也能找到训练员，但是%SEX%最近又干劲不足，还常常请假。我都以为%SEX%要放弃了。所以看到你和%SEX%坐在一起聊跑步还以为%SEX%找到了训练员就擅自为%SEX%高兴了，真的不好意思」
  - acc: 1
    content: 「%SEX%最近的表现可不像是打算放弃跑步啊」

rec3:
  # 中庭
  - %YOU%和%CHARA%又一次来到图书馆交换情报，但是仍然没有进展，新宇宙也不像是%YOU%那天所看到的「英雄」。%YOU%突然想起模拟赛的事情
  - acc: 1
    content: 「模拟赛的事考虑的怎么样？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「诶？哦……啊……为什么%CALLNAME%你会知道？」
  - 「你的教练跟我说了，我当天也会去支持你的，加油啊%CHARA%！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊为什么……啊不对我不是很讨厌……不对，我没有不希望%CALLNAME%来支持我的意思……只是我存在感比较弱，而且跑步成绩也不好……所……所以……即使你来看也不一定找得到我……我常常会这么想。教练也跟你说了吧，最近我的状态也真的不好……」
  - %CHARA%低下了%SEX%的头，看不到%SEX%的表情
  - 「啊抱歉，我不想给你增加压力」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不不不没事的，倒不如说有人为了我来看比赛，我还挺开心的……哎嘿嘿……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我从小到大都没有什么特长，也没有什么朋友。伤病也多……能陪伴我的也只有书了……
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我一直都是……很不起眼的类型。我也早已习惯了不起眼的自己……如果是谁专门来看我……我反而会觉得不好意思……想着既然背负了他人的期望，那就做好点去努力吧……然后优惠陷入焦虑……焦虑过度又会受伤……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「故事里的英雄，只要出场就能吸引到所有人的视线。而我距离英雄一直很远很远……太可耻的，完全……完全对不起『%CHARA%』这个名字啊……」
  - 说到最后，%CHARA%的言语带上了哭腔。即使木头如%YOU%，也察觉到%CHARA%要因为压力过大而崩溃了
  - 「呜……对不起……（吸气）让你听我抱怨了……（吸气）这么多……今天……我就先回去了」
  - 话音刚落，%CHARA%就冲出了图书室。
  - %YOU%想追出去，但是已经跟不上赛%UMA%的脚力，%CHARA%的背影已经消失在走廊尽头了。
  - （果然，人和赛%UMA%不能一概而论啊）
  - %CHARA%现在会去哪呢？
  - divider: true
    content: 训练场
  - acc: 1
    content: 「果然，你在这里！」
  - 「诶，%CALLNAME%为什么会找得到我，通常这个桥段我不是应该回家了吗？」
  - acc: 1
    content: 「可是你不像通常%UMA%那样容易放弃吧」
  -
  - acc: 1
    content: 「你的心底，仍有不屈的烈焰在燃烧啊」(拿出之前捡到的笔记本)
  -
  - acc: 1
    content: 「你的笔记，恰好是你不服输的证明啊！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「诶，难道你……看了笔记本的内容吗？偷偷翻女孩子的笔记本可不是好行为啊%CALLNAME%……」
  - 「因为想确认持有者所以打开了十分抱歉！」
  - %CHARA%却因为%YOU%过于正式的态度笑了起来
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊……啊哈哈……你的话没关系的……那评价如何……像个傻瓜一样是吧，表面上放弃了，暗地里在笔记里总结了每一次的并走和训练……明明我……什么都做不到啊……」
  - %CHARA%苦笑一声
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「抱歉让你看到好笑的东西了，就算把那个扔掉也是可以的。不，还是交给我自己去扔吧，我自己的梦想就该由我自己……」
  - acc: 1
    content: 「交给你没问题，但是我有一项东西想要确认」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「什么？」
  - acc: 1
    content: 「%CHARA%，你的梦想，是什么？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我……我要是说出来……你真的不会笑我吗？我……我一直一直，都梦想着，能看到自己成为英雄的模样」
  - %CHARA%深吸了一口气，像是下定了什么决心。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「就算我满身伤病，错过了很多次模拟赛。就算我没有跑出任何成果。就算我没有得到任何人的关注。我……我也想——抓住成为英雄的机会，然后成为英雄」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「一开始寻找『英雄』也好，记录总结下所有的训练也好，现在逃到比赛场也好。都是因为我想成为英雄……但是……现实的我只是做着个丢人现眼又冰冷的梦……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「无论是前辈，同学，亦或是后辈。都有远远能超过我的存在。大家都背负着各自异曲同工的梦想，想守护家族的荣耀，想给支持自己的人带来幸福，想鼓励他人跨越不幸。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「可是……那种东西我没有啊！我……我只是想要收获更多人的关注，想让自己更显眼一点，想让自己的朋友再更多一点！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我没有%THEY%那样深刻的梦想和精彩的故事，所以……所以我才变成%THEY%的背景板!」
  - acc: 1
    content: 「那你，仍想成为英雄吗？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……是的，我仍不想放弃我成为英雄的梦……」
  - 「那把你的笔记借我一下」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「诶，%CALLNAME%你要干什么？？」
  - %YOU%掏出油性笔，在笔记本的封面上写下五个大字「荒漠英雄谭」
  - acc: 1
    content: 「荒漠老师，我要看这个」
  - acc: 2
    content: 「在你手里，你的故事，应该由你自己谱写！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「真的吗？纵使我伤病满身，没有成绩，又不显眼……可能会让你对我幻灭哦……？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「真的……可以阅读我的故事吗……？」
  - 「若是你所期望，那必定会得到强烈的回应。别像小孩子一样婆婆妈妈哭哭啼啼，你可是打算成为英雄的%UMA%啊，英雄的眼泪可不是会这么轻而易举的落下的。」
  - %CHARA%擦了擦眼镜
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「明明是大人的%CALLNAME%还用奥特曼的台词才像小孩子吧」
  - 寻找「英雄」的计划，暂时中止。
  - 因为%YOU%看到了——更精彩的故事

rec4:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哈啊……哈啊……为什么会这样……怎么……计时……时比上次还要久……」
  - 「稍微歇一下吧荒漠，记住我之前跟你说的话，有我在支持你。你不必焦虑和紧张。自然而然地跑步就行。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「好，那我再练习几圈，计时就交给%CALLNAME%你了」
  - 虽然现在%CHARA%仍没有对自己的能力有清楚的认知，但是先把自信提升起来也行。
  - divider: true
  - color: %COLOR%
    content: %CHARA%在独自收集情报
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （嗯，%CALLNAME%想寻找的『英雄』应该是%C_NAME%前辈，虽然%YOURSEX%觉得不像，但是时间地点跑法都对上了……）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （可是……%CALLNAME%要是找到了%YOURSEX%的『英雄』……那我们之间的关系也应该要结束了……虽然说我们交换情报都是对双方诚实，%CALLNAME%也帮助我摆脱了焦虑……但是唯独这件事……我不想……说出来啊）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （但是……说出来……会结束后告诉%YOURSEX%……告诉%YOURSEX%关于『英雄』的一切……在那之前……一定要让%YOURSEX%记住我）
  - divider: true
    content: 模拟赛当天
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （失败了失败了失败了失败了，为什么我又因为紧张出迟了！！！）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （%C_NAME%前辈已经到后半圈快到最终直线了，再这样下去我又要输掉了）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （果然……赢不了吗……明明我已经训练了那么多次……）
  - acc: 1
    content: 「物语的主人翁，加油啊！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （是%CALLNAME%！%YOURSEX%找到我了……可是在%C_NAME%前辈夺下胜利，%CALLNAME%发现%SEX%才是%YOURSEX%的「英雄」后，还会再来找我吗？）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （不行，就算会失败，我也……我也不想让我唯一的读者失望。即使没有掌声，呐喊和目光……我也……我也要——成为%YOURSEX%一个人的英雄！）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哦哦哦哦哦哦哦哦哦！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （心脏啊，给我点火吧。大脑啊，给我燃烧吧。腿给动起来啊。我不想……不想就输的这么狼狈啊！！！）
  - content:
      - fontWeight: bold
        content: 解说
      - 「最终直线，最终直线！%CHARA%居然在最终直线跟上来了！」
  - acc: 1
    content: （那个跑法！那个姿态！）
  - （毫无疑问，那个就是我那天所看到的——像是要把地平线切开般的……）
  - content:
      - fontWeight: bold
        content: 解说
      - 「%C_NAME%冲线了冲线了，%CHARA%即使爆发了不亚于现役%UMA%的末脚也没超越%C_NAME%！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （果然……输掉了啊……马生果然不可能那么顺利的……接下来，就是找%CALLNAME%说明那天的『英雄』是%C_NAME%前辈了）
  - 「荒漠！我找到那天我看到的『英雄』了！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「果然是%C_NAME%前辈吧……」
  - 「是你啊！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊？」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「荒漠，刚才你的末脚很出色……你们是不是有事在谈？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊，%C_NAME%前辈你来的正好，请问一下那天下午4点半左右的草场，是你在使用吧」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「是啊，我在和你并跑，具体时间记不清了」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「对吧对吧，『英雄』果然是%C_NAME%前辈吧！」
  - acc: 1
    content: 「意思是你也参加了%C_NAME%的并跑，也在那个时候使用了草场对吧」
  - 「你那天是不是把头发放下来了？」
  - acc: 1
    content: 「要摔倒的时候还摇摇晃晃的」（好感+5 爱慕+1）
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: 「要摔倒的时候胸部还大大的乳摇了一次」（爱慕+2 声望-5）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「诶诶那么细节的地方都看到了！？不对……那%CALLNAME%看到的岂不是……」
  - acc: 1
    content: 「荒漠，你就是我的英雄啊！请和我签约吧！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「？？？？？？？？？为什么这个时候还在玩特摄梗啊？？？？」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「果然，你们有事在谈」
  -
  - %CHARA%，招募完成