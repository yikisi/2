# @file 青云天空 - 日常
# @author Wolke

good_morning:
  sync: true
  lines:
    - if: era.get('cflag:20:育成用变量')?.jess > 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早，训练员，今天的任务是什么……」
    - if: "!(era.get('cflag:20:育成用变量')?.jess)"
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「早上好～今天也悠闲适度，且随意地度过一天吧 (^ ･ ω ･ ^ =) ~」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「训练员！一大早就发生奇迹了！小青居然早起来学校了！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「训练员早——我出来了——我醒了——我可以回去了吗？」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「早啊～训练员，我今天没睡懒觉哦——好吧～但只睡了十分钟。」
        - if: era.get('status:20:熬夜') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「好困……昨晚夜钓的太晚了？」
        - if: era.get('status:20:熬夜') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「哈啊……看来白天要补补觉了……」

select:
  sync: true
  lines:
    - if: era.get('cflag:20:育成用变量')?.jess > 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一步的安排是什么……」
    - if: "!(era.get('cflag:20:育成用变量')?.jess)"
      lines:
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「不要急，不要急～按自己的节奏慢慢来吧。」
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「差不多的人生才是最好的——」
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「训练员，我们去钓鱼吧，钓鱼～ (/ = ^ ･ ω ･ ^ =)/ 」
        - if: era.get('status:20:沉睡') > 0 || era.get('status:20:马跳S') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「(= ˘ ω ˘ =) ~ Z—Z—Z——」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你讲慢一点……小青的脑袋要过载了～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「醒了醒了，刚才讲到哪了？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……看来只能麻烦训练员从头讲一遍了，欸嘿～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿～训练员讲课太辛苦了～要不要休息会？」

office_prepare:
  - random: true
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员，相信我吧，我的计策，有你相信就够了……」
  - random: true
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「无论采取什么战术，都要具备跑步所需的体力。让我来快速结束战斗吧！」
  - random: true
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「作战名称是『全心全意，适当摸鱼』。让其他选手放松警惕，趁机获得胜利吧～」
  - random: true
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我早就做好准备了。那么，准备钓一杆大鱼啦！」
  - random: true
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不是都说太逞强了不好嘛。所以要保持平常心啦，平常心～喵哈哈～」

talk:
  # 上一步进行过「一起打游戏」
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_game) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唉，游戏就是这样，总感觉有点意犹未尽呢。」
      - if: era.get('love:20') >= 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「光玩游戏有点无聊呢，要不要玩点更刺激的～」
  # 上一步进行过「一起加餐」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼啊～好饱好饱～」
      - if: era.get('love:20') >= 90
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼哼～训练员，今天的汤怎么样，小青可是加料了哦～」
          - （生蚝、枸杞、鸡腰……）
  # 上一步进行过「一起小憩」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_rest) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「啊哈～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「晕晕乎乎——晕晕乎乎——」
      - if: era.get('love:20') >= 50
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「再抱一会吧……再抱一会……小青的训练员能量还没充满呢」
  # 上一步进行过「训练」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - if: era.get('cflag:20:干劲') < 2 && era.get('cflag:20:干劲') > -2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天的训练量明显比昨天多！我抗议！这是虐马！！！」
      - if: era.get('cflag:20:干劲') === 2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼啊～今天状态真好～感觉发挥了平时120%的动力！」
      - if: era.get('cflag:20:干劲') === -2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，这次没偷懒哦——这次是真的不舒服啦——」
  - if: t[0]
    lines:
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员，今天太阳这么好，不出去钓鱼太浪费了——」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「诶呀～工作明天再做嘛，鱼可不等人。」
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员——后巷那窝小猫崽刚学会晒太阳，跟现在的我一样，完全不想动。」
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「要不比赛那天我跟着感觉跑？开玩笑的……大概三分之一开玩笑，喵哈哈～」
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员～我去躺会儿，有紧急情况的话……等我睡醒再说～」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员～陪我去钓鱼呗，有你在小青会有好运的，真的……」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员好会撸猫呢，它都惬意的发出呼噜呼噜了，训练员要不要也摸摸我试试？说不定也会得到呼噜呼噜声哦～」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「下次作战计划？训练员～陪我一起想吧，你坐旁边的话，我脑子会灵活一点……大概？」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「一起睡一会儿好不好？就一会儿，和训练员睡午觉的话小青能充满电哦……」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员，今天去钓鱼呗～不许逃跑！你已经上小青的钩了，这辈子别想跑——」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「睡醒的时候你要在，我睁开眼第一个看到的必须是你——不然我就闭着眼睛一直等，等你回来亲我一下才肯醒。」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「它刚才一直舔你的手，我看到了！我竟然有点嫉妒一只猫——你要不要也摸摸我，我平衡一下？」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「那些计策不用写出来，你念头刚动我就知道了。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「猜猜为什么？因为我现在满脑子都是你。」

office_gift:
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哦呀～哦呀～这是送给小青的礼物？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「难道说！你就是小青的圣诞老人!」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那么——叮铃叮铃……噗噗！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「恭喜你！小青的好感度加一哟～ 喵哈哈～」
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哎哟?训练员终于开窍了？我还以为你只会盯着训练数据看呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那我打开看看……嗯哼，眼光不错嘛～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过突然送我东西，训练员是不是——偷偷暗恋小青？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「开玩笑的啦～ 喵哈哈～」
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！这是什么？给我的？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「让我猜猜，是不是我最近训练太认真了，你心疼我，想哄我开心？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「或者……是你自己偷偷想哄我开心？没想到小青我还挺受欢迎的嘛～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「开玩笑的啦，谢谢，真的喜欢，今天的训练员，格外的体贴呢～」
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！藏什么呢藏什么呢——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「给我的？诶嘿嘿，我可以打开吗？现在可以吗？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哇！训练员！你怎么知道我喜欢这个的？你是不是偷偷在我身上装雷达了？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯～这个礼物我要抱着不撒手了。」
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你太过分了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「送这么用心的东西，我今天肯定舍不得欺负你了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不对……我好像亏了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那这样——今天你归我，礼物也归我。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你有意见吗？有意见也驳回，哼哼～训练员一定会惯着小青的，对吧～」
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哇，这个！送我的？！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「怎么办怎么办，要越来越喜欢训练员了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这可不是好事，以后你送我礼物我都这么开心的话——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「岂不是每次都要被你拿捏得死死的？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （不过……这样好像也不错～）
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咦？这是——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿，训练员，我跟你说——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「前两天跑完训练后，我路过一家店，看到橱窗里摆着这个。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当时我就在想，如果是你，会选那个颜色吧。至于结果嘛——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员……我好像……越来越懂你了。」
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员……你知道吗，我现在收到你送的东西，反而不急着拆了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就好像，拥有了你以后，一切等待都变成了甜的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿～我是不是变贪心了？以前收到礼物就够开心了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「现在不仅礼物，得连你一起收到才行。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过你放心，我也会把自己送给你，而且——我会让你更赚的～」
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这个礼物，是你特意给我挑的？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那你要想清楚——收了它，我可就要赖上你了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这东西陪我多久，你就得陪我多久。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你身上只能有我的味道。你心里只能装我的事。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你以后送的每一个礼物，都只能给我一个人……」

office_cook:
  # 上一步进行过「一起小憩」
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_rest) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊哈～嗯——呼——」
      - 青云天空像只小猫一样伸了个懒腰。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～几点了？」
      - %YOU%迷迷糊糊的睁开眼。
      - 「不着急，才六点…………」
      - 「！？六点了？咱们睡了一下午？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼哼～训练员真是个大懒虫……」
      - 「看来今晚要加练喽。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶呀，不着急～先去吃点东西吧～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我记得西街有一个关东煮小摊，就去那了！」
  # 上一步进行过「指导学习」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？时间到了！吃饭吃饭！！！」
      - 青云天空像一只脱缰的野猫夺门而出……
      - （为什么这家伙只有在学习后食欲这么旺盛……）
      - 「喂，慢点，等等我！」
  # 上一步进行过「训练」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊～不行了……小青已经没有力气了……」
      - 青云天空像只小猫一样趴在桌子上一动不动……
      - 「想吃什么，我去给你带。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你怎么这么好啊～小青真是太感动了，嘤嘤嘤～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「汉堡肉海鲜炒饭外加一瓶冰可乐谢谢。」
  - if: t[0]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我带了亚马逊做的鲑鱼饭团，很好吃哦～，里面用料可扎实了」
          - 「你又偷拿人家冰箱里的存粮了？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「诶呀别在意～我拿老家带来的甘露煮补上了，不会亏待%SEX%的～」
          - 「下次还是跟人家说一声……」
      - random: true
        lines:
          - 「嗯？这个是什么？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「啊，那罐子里的东西是我爷爷从老家寄来的腌黄瓜。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「来点尝尝？很好吃的。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员，来帮帮忙吧～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「小特送给了我一大箱萝卜，小青可消灭不了。」
          - 「这可能就是%SEX%一顿的饭量吧……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「每次看到小特的饭量，都感觉很吓人呢……」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「嗯……嗯！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「果然这个季节的秋刀鱼果然最好吃了！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「下回去钓鱼就奔着它！我要吃个够！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今天的便当是小花做的哦，怎么样，不错吧～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%SEX%还会做各种各样的菜，尤其是蛋糕，特别好吃！」

office_rest:
  # 上一步进行过「一起加餐」
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼啊～吃的饱饱的，再美美睡上一觉。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「感觉人生也不过如此了……」
  # 上一步进行过「打会游戏」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_game) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「打完游戏就睡觉，训练员，你已经有变成废宅的趋势喽～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我？我当然不是，我休息那可是以逸待劳，是小青的独家锻炼方式哦～」
  # 上一步进行过「指导学习」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊——枕头！小青可想死你了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员这个大坏蛋！讲的这么难！给小青电量都耗光了！」
  # 上一步进行过「训练」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊～～～不行了不行了～～～累死了～～～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，小青要冬眠了，下周再把我叫起来吧……」
  - if: t[0]
    lines:
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哦！？训练员竟然主动要求休息！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没想训练员也学会偷懒了——是不是被小青带坏了？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「喵哈哈～开玩笑的啦，训练员最——好了！」
          - 青云天空轻快的跳过来，自然地靠上%YOU%的肩膀，轻轻地闭上眼睛。
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员，来来来，就是这里——」
          - 青云天空带%YOU%来到%SEX%的一个秘密睡点。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「睡觉可是件很严肃的事情！一点怠慢都不能有！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「温度适宜，草坪柔软，微风拂面……完美！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「来吧～试试午睡专家的选择～」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - 听到要小憩一会，青云天空开心地小跑过来。
          - 刚准备躺下，脸微微一红。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员……那个……能不能……抱着睡？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「如果是训练员抱着睡，小青肯定能休息的更好。」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - %YOU%刚在沙发上躺下，青云天空便扑了上来。
          - 脑袋枕着%YOU%肩膀，四肢紧紧缠在%YOU%身上。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不许乱动！今天的训练员就是小青的抱枕～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「做好心理准备吧～以后这会是你的日常任务～」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「想休息会儿啦？要不要来一套青酱的膝枕服务？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「或者把我当抱枕，不过抱太紧的话……我会报复的哦～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「来吧来吧～免费招待仅限这次～下次可要收费了。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「费用是什么？嘿嘿～下回再告诉你～」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - 小憩时间结束了，青云天空还是紧紧搂着%YOU%不愿放手。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「再抱一会嘛……再抱一会……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「小青好想和训练员近一些，再近一些……」

office_game:
  # 上一步进行过「一起加餐」
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼——饱了饱了～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，离下午开练还早，来下两盘棋吧～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你要是赢了我下午就加练，怎么样？」
  # 上一步进行过「指导学习」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哈哈！看招看招！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「怎么样，厉害吧～这可是我刚刚学习时悟出来的哦～」
  # 上一步进行过「训练」
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊，升级了——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唉，要是训练也像打游戏一样升级这么快该多好……」
  - if: t[0]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「打游戏啊，小青可不太擅长呢，所以——」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「如果赢了就奖励小青睡一天吧～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「但要是输了的话，小青可是会很伤心的……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「大概需要钓一整天的鱼缓解这悲伤的情绪。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「身为一名策士，就是要掌控全局！看招！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼哼哼～训练员已经完全掉入小青的陷阱啦！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「轻轻松松～没想到训练员只有这种程度，杂鱼～杂鱼～」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「居然敢挑战我的将棋？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哼哼哼～训练员！今天就让你见识一下！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我谋略之星的大名是怎么来的！」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，下场比赛你猜我和小特谁会来这大喊？ 反正我是不会啦～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊……里面又黑又窄，一看就不适合睡觉……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当你凝视深渊时，深渊也在凝视你……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我这么说是不是显得更像个策士？喵哈哈～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「每天都有人来这里倾诉呢……树洞也不容易啊……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「上次有只猫从里面跳了出来，吓我一大跳。」

s_a_dating:
  - if: era.get('love:20') < 50
    lines:
      - %YOU%和青云天空在学校里散步。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （不要看我，不要看我……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （自然……要更自然一点……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （要不要躲开点……不不不，躲开的话反应更奇怪吧……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （呜～好紧张……明明只是走在一起而已……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （啊……心跳声大得我都能听见了……）
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    lines:
      - %YOU%和青云天空在学校里散步。
      - %SEX%轻轻的牵住%YOU%的手。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （牵手了!牵手了!是我先牵的!唔啊……训练员握紧了……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （刚才亲训练员脸颊的时候……他愣住的表情好好笑……嘿嘿～)
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （但我跑太快了没看清……啊啊啊……下次要慢一点……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （好想再多走一会儿……走到宿舍关门也没关系……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （明天也这样就好了……后天也这样就好了……每天都这样就好了……）
  - if: era.get('love:20') >= 90
    lines:
      - %YOU%和青云天空在学校里散步。
      - %SEX%牢牢的抓住%YOU%的手。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （训练员是我这辈子唯一不想偷懒的事……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （每次看向训练员……心脏会突然抽疼一下……太喜欢了……喜欢到疼……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （不是离不开……是不想离开……也许……就是离不开……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （他是我的训练员……我的恋人……我一个人的……谁都不能把他从我身边抢走……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （牵手不够……拥抱不够……亲吻不够……都不够……我想把训练员揉进我骨头里……这样他就永远是我的了……）

school_rooftop:
  - random: true
    lines:
      - 青云天空拉着%YOU%上天台，熟练地走向水箱后面的阴影处。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看，我的特等席！」
      - %SEX%指了指铺着旧软垫的角落
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「上星期发现的，下午太阳刚好被水箱挡住，而且——」
      - %SEX%竖起手指，嘘了一声
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「能听到隔壁花园的喷泉声呢，这白噪音很助眠的。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员也喜欢来这里吹风啊。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我猜猜……是因为这里离天空最近？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还是因为从这里看下去能看到别的%UMA%的实力然后针对计策？」
  - random: true
    lines:
      - %YOU%和青云天空在天台吃午饭
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员的便当……煎蛋卷看起来比我的厚呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「作为交换——」
      - 青云天空快速从%YOU%饭盒里夹一块，「啊呜」一口吃掉。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯～果然训练员那边的比较好吃。」
      - 把自己的玉子烧拨到你那边。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这是回礼。不准剩哦。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （……反正我也吃不完）

o_r_walking:
  - random: true
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哇～训练员～河里好多小鱼呢～咱们光散步是不是有点浪费时间？」
  - random: true
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员的体力不错啊，下次要不要一起跑跑？」
  - random: true
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「河边有小猫诶，呐～训练员你知道吗？小青我可是会猫语的哦～」

o_s_arcade:
  - 商业街周末集市，喧闹的人声中
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员，看那边！」
  - 棚子上挂着夸张的手绘海报：【胡萝卜自助餐厅新开业抽幸运抽奖！神秘大奖降临！】
  - 不等%YOU%回答，%SEX%已经快步跑到了摊位前。
  - 摊位前，%YOU%看着抽奖说明——一次 30 马币，抽随机大奖！
  - （好贵！）
  - %YOU%摇摇头，示意该走了。
  - 青云天空可怜巴巴的看着你。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员，就抽一次，好不好？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……拜托了嘛～～～」
  - 青云天空竖起手指指向天空发誓道。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「下周！下周我肯定不偷懒！」
  - acc: 1
    key: arcade
    content: 「咳咳——最近手头有点紧……」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好吧……」
      - 青云天空依依不舍的离开。
  - if: era.get('flag:当前马币') >= 30
    acc: 2
    content: 「那好吧，就抽一次哦。」（马币-30）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「耶！最喜欢训练员了！」
      - 青云天空在抽奖箱里一通摸索，拿出来了一个球，打开后抽到了——
      - if: d.dice === 4
        lines:
          - 谢谢参与 # 30% 无奖励
          - 青云天空看着空白的奖券，沉默了几秒。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……没事没事～就当挡灾了～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员，我们去隔壁买真的胡萝卜吧，至少能吃。」
      - if: d.dice === 3
        lines:
          - 三等奖 一根「大」胡萝卜 # 30% 全属性+8
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呜啊！好大的胡萝卜！」
          - 虽然只有一根，但比一般的胡萝卜大了一圈。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「嗯……够喂学院后院那只兔子了。」
      - if: d.dice === 2
        lines:
          - 二等奖 一堆大萝卜 # 20% 全属性+15 技能点数+15
          - 青云天空抱着一大箱萝卜。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「好多啊……这得吃多久……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员，你家有泡菜坛子吗？」
      - if: d.dice === 1
        lines:
          - 一等奖 胡萝卜汉堡肉排套餐周券 # 15% 全属性+25 技能点数+25 干劲+2
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「哇！一等奖！是——萝卜汉堡肉自助，一周免费……」
          - 青云天空眼睛亮了起来。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「等等……一周免费……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员！我们把小花、小特、光辉、小草还有神鹰%SEX%们都叫来吧！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「正好七天的券，一天去一个！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这种『幸运』要分给大家才有趣嘛～」
      - if: d.dice === 0
        lines:
          - 特等奖金萝卜 # %5 全属性+30 技能点数+50 干劲+4 耐力&智力额外+20（仅触发一次）
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「特等奖！训练员！特等奖欸！」
          - 青云天空激动的朝%YOU%蹦过来。
          - 店员拿出了一个神秘礼盒。
          - 青云天空打开一看——
          - 一根金萝卜！
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「额……金萝卜？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「嗯……？真的……是金子做的？」
          - 青云天空犹豫地凑近嗅了嗅，张口轻轻咬了一下边缘。
          - %SEX%突然愣住了，眼睛缓缓睁大，随即一大口咬了下去。
          - 「！？」
          - 「你直接给吃了？没事吧！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……训练员！这个……！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「这个……！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「是甜的！」
          - 「……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「感觉……好奇妙。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「像刚睡饱了三天，又像……钓到了这辈子最大的一条鱼。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「我感觉——浑身充满了力量！」
          - 「你这么说我反而更担心了……」

o_s_movie:
  - %YOU%和青云天空拿着爆米花去看电影
  - 「有没有什么想看的？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯……我挑挑哦……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「就这个了！」
  - acc: 1
    content: 「恐怖片」
    lines:
      - 青云天空开场十分钟就把爆米花桶捏扁了。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……训练员～～～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这个鬼……走路没声音的……」
      - 影片正到高潮部分，青云天空突然抓住你胳膊把脸埋进去。
      - %YOU%没有被鬼吓到，倒是被青云天空惊得一身冷汗……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员……我忽然想起今天……适合钓鱼。」
  - acc: 2
    content: 「爱情片」
    lines:
      - 当青云天空看到男女主初遇时，%SEX%无聊的吃着爆米花。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……刻意……」
      - 看到雨中告白时，把爆米花桶往你那边推了推，眼睛一刻不离的盯着屏幕。
      - 看到误会分手时，青云天空紧紧握住%YOU%的手，手心出了很多汗。
      - 看到最终和好时，%SEX%轻轻呼了口气，肩膀放松下来。
      - 电影结束后，青云天空有点意犹未尽。
      - 过了一会，脸红红的跟%YOU%说
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员……回去时挽着我走呗～」
  - acc: 3
    content: 「动画片」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你知道吗——看动画片能学到很多哦～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你看这个猫猫的扑击动作……可以改良成起跑技巧」
      - 看到猫优雅落地时，青云天空若有所思的点点头
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯嗯……落地缓冲做得比我还好」
      - 散场后，青云天空意犹未尽的复盘
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～我明天想试试那种弓背冲刺……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「开玩笑的啦……大概，喵哈哈～」
  - acc: 4
    content: 「动作片」
    lines:
      - 青云天空把爆米花递了过来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，吃慢点，要留到激烈的地方。」
      - 主角从爆炸中跃出时，青云天空眼睛亮起来
      - 飙车戏时%SEX%身子微微前倾，手指在扶手上轻轻敲节奏。
      - 主角反杀反派那刻，%SEX%把最后几颗爆米花塞进你手里。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼～训练员，太精彩了！下次我也要跑那种——让观众忘记呼吸的节奏！」
      - 「那咱们开始针对训练？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这个嘛……今天先回去睡觉，明天再说吧，喵哈哈～」
  - acc: 5
    content: 「悬疑片」
    lines:
      - 前半小时青云天空一直捧着爆米花，看的十分入迷都忘了吃。
      - 每次新线索出现，%SEX%耳朵就轻轻动一下。
      - 反转时%SEX%把眉头紧锁，小声嘀咕。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……早该想到的。」
      - 结局揭晓凶手时，%SEX%长出一口气靠进椅背，然后得意的偏过头看%YOU%。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「怎么样训练员，我猜的准不准～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「如果是训练员，会在第几分钟发现线索？」
      - 「我啊……可能要在凶手被抓之后。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那也挺好的，还是笨笨的训练员比较可爱。」

o_c_pray:
  - random: true
    lines:
      - 青云天空站在神社的石灯笼边，抬头看飘动的绘马。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～你说这些愿望里……有多少是关于赢比赛的？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我的签说『自由自在』……听起来像在鼓励我继续睡懒觉呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过既然神明都这么说了，如果下次比赛要是赢的话，把功劳分祂一半？」
  - random: true
    lines:
      - 青云天空盯着香火钱箱的缝隙看了会儿
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你说如果我们投五千马币……」
      - 「大概率会被骏川小姐教训说浪费训练经费。」
      - %YOU%从口袋摸出五马币，轻轻抛进钱箱。
      - 「这样就够啦。许愿嘛……心诚比钱多重要。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「说的也是～」
  - random: true
    lines:
      - 青云天空站在神社拜殿旁，目光落在巫女摇铃祈福的背影上，看了好一会儿。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，巫女跳的祈福舞蹈，感觉好神圣。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你说……要我是也穿身巫女服，会不会也有这种神圣的感觉？」
      - %YOU%认真想了想，脑海里浮现青云天空身着巫女服的画面。
      - 「估计会很可爱吧。」
      - %YOU%不由自主的说道
      - 青云天空的耳朵倏地竖起来，又迅速趴下去。
      - %SEX%别过脸，盯着旁边挂绘马的地方，声音低下去。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员真是的……在乱说什么啊……」

o_s_restaurant:
  - 青云天空站在美食街路口，目光扫过各个小吃的摊位
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「从左边开始吃，还是右边？怎么办～好难选啊～」
  - 「要不要抽签决定？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「好！」
  - random: true
    lines:
      - 拉面
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好烫好烫！呼——呼——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯——这个汤底……至少得熬了十二个小时以上。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你的叉烧好像很好吃，给我咬一口呗～」
      - %YOU%宠溺的把自己碗里的叉烧夹给%SEX%。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就知道训练员最宠我了，来，我的溏心蛋分给你～」
      - %SEX%低头吃了几口面，忽然又抬起眼睛看你。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，以后如果我们点不一样的，就每次都这样换着吃好不好？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这样每次都能尝到两种味道。」
  - random: true
    lines:
      - 章鱼烧
      - 青云天空用竹签戳起一个，举到嘴边呼呼吹气，然后递到%YOU%面前。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来——啊——」
      - 看到%YOU%细细品味自己送出的章鱼烧，%SEX%痴痴的笑道
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿～训练员，你有没有发现，章鱼烧这种东西，第一个永远是最好吃的。」
      - %YOU%一边品尝一边连连点头称赞
      - 青云天空看着剩下的章鱼烧若有所思。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，最好吃的第一口给你了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那剩下的，就由我来勉为其难的消灭吧～」
  - random: true
    lines:
      - 可丽饼
      - 青云天空接过店员递来的草莓奶油可丽饼，左右端详了一下
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你说这种……要怎么吃才不会弄得到处都是？」
      - %SEX%试着咬了一口，奶油从另一侧挤出来，沾在鼻尖上。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「失败了～」
      - %YOU%伸手帮%SEX%擦掉鼻尖的奶油，很自然地放进嘴里。
      - 青云天空耳朵倏地竖起来，又软趴趴地垂下去
      - %SEX%别过脸，脸颊通红，半天才憋出一句很小声的「谢谢」
      - 接下来一路%SEX%都低着头，专心对付手里那个可丽饼，小口小口咬得格外仔细，奶油再也没漏出来过。
  - random: true
    lines:
      - 关东煮
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯——老板！我要这个，这个，还有这个！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来——训练员，这个是你最爱的。」
      - 青云天空把魔芋丝夹到你碗里，又夹出来一块白萝卜。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要不要尝尝白萝卜，这可是关东煮最好吃的！」
      - %SEX%夹起自己碗里的白萝卜，很自然地递到你嘴边。
      - 然后突然想起什么，手僵在半空，脖子瞬间红透。
      - %SEX%飞快地把萝卜放回你碗里，低下头，声音越来越小。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那个……你自己夹……我、我喂你的话会害羞的……」

o_s_dating: # 按顺序触发
  - if: d.dating === 0
    lines:
      - （假装迷路，然后趁训练员慌忙找路时带他脱离险境，从此让训练员依靠小青）
      - %YOU%和青云天空走在中庭新建的小路上
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （哼哼～我已经提前踩好点了，故意往岔路走）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哎呀，训练员，这边好像不是回去的路呢，这附近还在开发欸。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呐，训练员～你知道怎么走吗？要不要求求小青帮帮你啊～」
      - 青云天空一脸贱贱的表情，等待%YOU%向%SEX%求助。
      - 你则若无其事的拿出手机点亮GPS。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要怕，导航显示这条巷子穿过去就是便利店。你饿吗？」
      - 青云天空愣住了，脸颊微微发红。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……训练员你什么时候下载的地图？！」
  - if: d.dating === 1
    lines:
      - （利用猫猫引向亲热话题，让训练员对小青更加坦率）
      - %YOU%和青云天空在喂校外的野猫
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看那只猫多黏人～训练员要是也这么黏人就好了。」
      - %YOU%蹲下挠了挠猫下巴
      - 「它上个月绝育了，绝育的小猫特别温顺哦。」
      - 青云天空被过于科学的回答噎住，脸迅速涨红。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……这种知识不用记得那么清楚啦！」
  - if: d.dating === 2
    lines:
      - （和训练员看鬼片，等他被吓到就顺势搂住，让小青给训练员提供安全感。）
      - 青云天空叫%YOU%一起看一个鬼片
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员怕鬼的话，可以躲到我这边哦。」
      - 边说边充满自信的挺起胸膛
      - %YOU%点头答应
      - 电影进入高能片段，苍白的鬼影猛然弹出——
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜哇！！！」
      - O(≧口≦)O
      - 青云天空死死抱住训练员的脖子。
      - （要喘不过气了……）
  - if: d.dating === 3
    lines:
      - （假装睡着靠肩膀，让训练员感到害羞）
      - 回去的电车上，青云天空坐在靠窗的位置，你坐在%SEX%旁边。
      - 青云天空突然靠向你的肩膀。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （哼哼～看我假装睡觉，有女孩子靠在肩上，训练员一定会脸红心跳～）
      - 一站过后……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Z～Z～Z～」
      -
      - 「小青，快到站了哦～该起床了～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - ！！！
      - 青云天空猛地睁开眼，发现自己正枕在你肩上，嘴角还挂着一丝若有若无的水痕。
      - %SEX%蹭地坐直，抬手去擦嘴角，脸以肉眼可见的速度红透。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训、训练员你让我枕了一路？！」
      - 「看你睡得太香，没舍得打扰。」
      - 青云天空低下头轻声答道
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「谢、谢谢……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （这剧本不对啊～）
  - if: d.dating === 4
    lines:
      - （用强力胶粘死的瓶盖，在训练员打不开的时候自己轻松帮训练员打开～ PS：%UMA%力气非常大）
      - 你们走在大街上。
      - 青云天空突然要去买两瓶饮料——偷偷把其中一瓶的瓶盖被%SEX%用强力胶粘死。
      - 青云天空回来时，顺势拿起另一瓶。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，喝水～」
      - %SEX%把那瓶处理过的推到%YOU%面前。
      - %YOU%拿起瓶子，随手一拧……
      - 没开……
      - 「嗯？」
      - %YOU%加大了力气……
      - 还是没开……
      - 青云天空眼睛一亮，挑了挑眉，贱贱的笑道。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「打不开吗？要不要小青帮帮训练员呀～」
      - 「奇怪……好像这瓶水有问题……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「明明是训练员太杂鱼了～让小青来——」
      - 青云天空顺势拿过瓶子，用力一拧——
      - 没开……
      - 训练室里陷入沉寂……
      - 再用力一拧——
      - 还是没开……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （呜啊！这胶水这么这么厉害！）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （不行！青云天空！赌上你身为%UMA%的荣誉！）
      - 青云天空全力一拧——
      - 「砰！」
      - 瓶身拦腰炸开，饮料溅了两人一身。
      - %YOU%立刻拿了包纸巾帮%SEX%擦掉。
      - %SEX%低着头，耳朵耷拉着，声音闷闷的
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「对不起……」
      - 「没事，是我力气太小了，我还要谢谢你帮我开饮料呢。」
      - %SEX%猛地抬头，脸还红着，眼睛里有点惊讶
      - 嘴唇动了动，最后只嘟囔出一句。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔……训练员太温柔了……好犯规啊……」
  # 触发事件「优雅的茶会」后解锁
  - if: d.dating === 6
    lines:
      - （带训练员去喝下午茶，然后教训练员正确的喝茶方式来凸显小青的知识渊博。）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，就是这家店，小草推荐的，我可是特意邀请你来尝尝呢～」
      - 「那我可要好好期待下喽～」
      - 不一会，服务员端着一壶茶和一个点心塔放到了桌子上。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来了来了～训练员，你先吃吧～」
      - 青云天空一脸坏笑的看着%YOU%，%YOU%虽然有点怀疑，但还是拿起了茶杯。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「噗噗！失败！」
      - 青云天空突然的叫声吓了%YOU%一跳。
      - 青云天空挑了挑眉，得意的说道。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「拿杯子的姿势——失败！要用拇指和食指捏住杯耳，中指轻托，端起茶杯和托碟一起喝。」
      - 「呃……好……」
      - %YOU%按照小青教的方法别扭的喝着茶。
      - 放下茶杯，%YOU%又拿起了顶层的点心。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「噗噗！失败！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「点心要从底层咸味三明治开始，依次吃中层司康、顶层甜点。」
      - 「好好好……」
      - 看着满脸得意的青云天空，%YOU%大概也明白了%SEX%今天的目的。
      - 「小青，你好厉害啊，这些下午茶的礼仪你全知道。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼哼～那当然～我可是被小草特训了一下午呢！」
      - 「那么请优雅的青云天空小姐来为我演示下正确的品下午茶吧～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好吧好吧～真那你没办法～」
      - 说罢，青云天空便拿起茶杯有模有样的喝了起来。
      - %YOU%看着和平时判若两人的青云天空，忍不住夸赞道。
      - 「今天的青云天空，真有气质呢～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咳咳！！」
      - 青云天空听了%YOU%的话后脑袋瞬间宕机，茶水呛的%SEX%直咳嗽。
      - 「这也是下午茶的餐桌礼仪吗～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咳咳……明明是训练员你乱说！」
      - 「哈哈～抱歉抱歉～来，赶紧擦擦……」
      - %YOU%一边安抚青云天空一边给%SEX%递纸巾，青云天空一把夺过。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼——算你识相……」
      - 「今天谢谢你让我体验了一把优雅的下午茶呢」
      - 「那么接下来，贵族的礼仪该下场了，现在出现的是大众吃法」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯——说的也是～训练员！我要那个马卡龙！」

good_night_normal:
  sync: true
  lines:
    - if: era.get('status:20:沉睡') > 0 || era.get('status:20:马跳S') > 0
      lines:
        - if: era.get('status:20:马跳S') === 0
          content: 「Z Z Z～（青云天空像只小猫一样沉沉的睡去……）」
        - %YOU%看着沉睡的青云天空，感觉跟%SEX%平时午休一样……
        - 于是%YOU%轻轻的把%SEX%背回了宿舍楼下。
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「噢噢，能看到星星了……」
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「也就是说……该准备去夜钓了！」
        - 青云天空感受到来自%YOU%锐利的目光——
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「哦呀，不对吗？好吧，好吧……」
        - ～ (= ^ - ω - ^ =) ～
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「到宿舍了，训练员，那我回去啦。」
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「明天早上训练场见——我会准时的……」
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「嗯……大概，也许，你还是别抱太大希望了，喵哈哈～」
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「总之——晚安啦～」
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「呐～训练员，你知道吗？我刚想到一个哲学问题——」
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%UMA%为什么要下午训练呢？猫猫都不训练的……却还能跑的飞起。」
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「我发现这个问题很关键啊！我要去思考人生啦～下午的训练？那就交给明天的我吧～」
        - ฅ (^ ω ^ ฅ) ～ ﾉｼ
        - 「可是现在才刚吃完午饭！」
        - 无能的训练员只能看着搭档消失在午后的阳光下。

birthday:
  title: 生日
  lines:
    - 青云天空推开门，看见桌上摆着的蛋糕，愣了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没想到还有人记得我的生日呢，喵哈哈！」
    - %YOU%从门后出来，放了一个礼花。
    - 「砰！生日快乐！今天就好好放松吧～」
    - 青云天空惊喜的心情溢于言表，兴奋的冲过来抱住了%YOU%
    - %YOU%笑着摸摸%SEX%的头，从口袋里掏出打火机，一根根点燃蜡烛。
    - 「来吧！过生日第一个环节是——许愿」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯嗯！」
    - 青云天空双手合十，闭上眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「希望明年能钓到比训练员还大的鱼！」
    - %SEX%睁开一只眼瞄了%YOU%一下，自己先笑起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「开玩笑啦～愿望说出来可就不灵了。」
    - %SEX%重新闭上眼睛，嘴角还带着笑，这次沉默得久了一些。
    - 等%SEX%再睁眼，一口气吹灭蜡烛。
    - 「许的什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这回保密哦～」
    - 青云天空调皮的闭上一只眼睛，竖起一根手指回应道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那今天——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员先陪我去买新出的限定款鱼饵！然后帮我提一整天购物袋！然后请我吃超大份的芭菲！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后先存着，等吃完蛋糕再说！」

cl_new_year:
  title: 新年
  lines:
    - 参道两旁挤满了人，青云天空拉着%YOU%的袖子在人流里穿行，另一只手还握着刚买的烤鱿鱼。
    - 「慢点吃。」
    - %YOU%看着%SEX%嘴角沾着的酱汁，从口袋里掏出纸巾。
    - 青云天空仰起头等着。
    - %YOU%无奈地笑了笑，替%SEX%擦掉。
    - 「好了，继续走吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯！」
    - %SEX%咬了一口鱿鱼，脚步突然停住。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，训练员！抽签的地方人好少，快去快去！」
    -
    - （抽签处）
    - 青云天空摇出签筒里那根签，低头一看，眉毛挑了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！大吉欸！」
    - %SEX%举到%YOU%面前晃了晃，嘴角得以的翘的老高。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看来今年运气不错呢～喵哈哈！」
    - %YOU%也摇出一根，低头看了一眼，笑容凝固在脸上。
    - 青云天空凑过来看，脑袋几乎贴到%YOU%肩膀上。
    - 等看清签上的字，%SEX%「嗖」地往后跳了一大步。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哇——！！！大大大大大凶？！你怎么抽到的啊？！」
    - %SEX%双手抱在胸前，一脸惊恐地盯着%YOU%，像看什么不祥之物。
    - 「……哪有那么多『大』」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你、你离我远点！霉运要传染过来了！」
    - %YOU%盯着手里的签，故作镇定。
    - 「……咳咳，据说绑到树上就能消灾。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那你快绑！」
    - %YOU%走向挂满白纸条的老树，踮起脚，把签条系在一根低处的枝条上
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「高点！高点！绑得越高越灵！」
    - %YOU%无语地看着%SEX%，踮起脚，把签挂到了更高的地方。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦好啦，系那儿也行……不过你得离我远点嗷，霉运还有三米的安全距离你知道吗！」
    - %YOU%系好签，走回%SEX%身边，青云天空立刻往后跳了一步。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三米！警告你！要和小青保持三米的安全距离！」
    - %YOU%看着%SEX%那副如临大敌的样子，忍不住笑了。
    - 「你不是还有个大吉嘛～怕什么，走啦～」
    - %YOU%转身往正殿方向走，青云天空站在原地，歪着头看了%YOU%几秒，小跑着跟上去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你……真不难受啊？」
    - 「签而已啦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是大凶诶！最差的那种！我听说有人抽到大凶当场就哭了！」
    - 「那我也哭一个？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这还是算了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实也没那么邪门啦。我爷爷说，签只是签，信则有不信则无」
    - 「那你刚才躲那么远？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我、我那是替你着急嘛！」
    - %SEX%脸有点红，加快脚步走到前面去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快点快点，去拜拜，帮你驱驱邪！」

cl_valentine:
  title: 情人节
  lines:
    - 「今天是情人节呢。」
    - %YOU%走在去训练员室的路上，看着随处可见的粉色氛围，忍不住嘀咕了一句：
    - 「%UMA%们还真是——热火朝天啊。」
    - 抱着资料的手紧了紧，%YOU%想起某个整天钓鱼睡觉的身影
    - 「青云天空会不会——」
    - 话说到一半%YOU%自己先摇了摇头。
    - 「算了算了，不太可能。」
    -
    - 推开训练员室的门，%YOU%刚把资料放在桌上坐下，门突然被拉开。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！」
    - 青云天空跑进来，气息还有点喘。
    - %SEX%抱着一个精致的礼盒，藏在身后，但盒子太大，根本藏不住。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿嘿——」
    - %SEX%走到你面前，把盒子往桌上一放。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这可是小青倾注全部心意做的哦！小青很努力的！」
    - %SEX%双手撑在桌上，身体微微前倾，眼睛亮晶晶地看着你。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，训练员，你愿意品尝我的心意吗？」
    - %SEX%表情认真，脸上还带着一点跑步后的红晕。
    - %YOU%看着%SEX%，愣住了。
    - 「你竟然会准备这个？」
    - 青云天空眉头一皱。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员你真是的——就算是开玩笑，也要看看时间和场合吧？」
    - %YOU%反应过来，连忙道歉。
    - 「抱歉抱歉，按照惯例，你应该准备的是一个猫罐头，然后让我去喂猫。」
    - 青云天空不满地哼了一声。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你也太冷静了！可爱的%UMA%在情人节给你送巧克力欸！」
    - 「是是是，我的错。」
    - %YOU%一边道歉，一边满怀期待地打开礼盒。
    - 里面躺着一个猫罐头。
    - ……
    - %YOU%盯着那个猫罐头看了三秒，又抬头看了看青云天空。
    - %SEX%憋着笑，眼睛弯成月牙。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喵哈哈——！」
    - %SEX%终于忍不住笑出声来，笑得前仰后合。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「整蛊计划大成功！」
    - %YOU%一脸无语地看着%SEX%，又低头看看那个猫罐头。
    - （……应该说，本该如此？白期待一场……）
    - 青云天空笑够了，伸手拍了拍%YOU%的肩膀。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「别放弃嘛——打开看看？」
    - %YOU%愣了一下，伸手把猫罐头拿出来打开。
    - 罐头里面，整整齐齐摆着几块手工巧克力。形状不算完美，但能看出来做得很用心。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「人家……真的认真做了哦。」
    - %SEX%头微微低下，脸慢慢红了，声音比刚才小了很多。
    - %YOU%看着手里的巧克力，又看看%SEX%。
    - 「谢谢，我会认真品尝的。」
    - 「这个情人节，我很开心……」

cl_palace:
  title: 殿堂周
  lines:
    - 殿堂周将整个特雷森学园都笼罩在一种肃穆的气氛里。
    - %YOU%和青云天空走在校园里，到达学院中央的三女神像时，周围已经围了不少人。
    - %UMA%们排着队，依次走到雕像前，双手合十，闭眼祈愿。
    - %YOU%放慢脚步，看着那些虔诚的身影，轻声说
    - 「感觉好神圣啊。」
    - 「对赛%UMA%来说，这是最重要的节日了吧？」
    - 青云天空点点头，目光落在远处的雕像上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是啊，传说赛%UMA%就是被女神祝福的精灵呢～」
    - %SEX%的声音轻轻的，连平日里那股慵懒的调子都收了起来，显得格外庄严。
    - 「那我们也去拜拜吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯——」
    - 两个人走到队伍末尾，跟着前面的%UMA%一点一点往前挪。
    - 青云天空难得安静，没有抱怨排队无聊，也没有找地方瘫着，%SEX%只是站在%YOU%身边，看着前面的雕像一点点变近。
    - 终于轮到你们。
    - 青云天空走上前，站在三女神像前，%YOU%则站在%SEX%身侧稍后的位置，双手合十，闭上眼睛。
    - 周围很安静，只有风吹过树叶的沙沙声。
    - %YOU%在心里默默许愿——
    - 睁开眼时，青云天空已经许完，正侧着头看着%YOU%，嘴角挂着浅浅的笑意。
    - 祈愿完后，在回去的路上，%YOU%问道
    - 「许了什么愿？」
    - 青云天空眨眨眼，没有回答，反问道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你呢？许了这么久——」
    - 「希望你能一直这样跑下去，自由自在地跑下去。」
    - 青云天空尾巴轻轻晃了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是感谢哦。」
    - %SEX%回头望向三女神像的方向。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （感谢您，让我们相遇……）

cl_fans:
  title: 粉丝感谢祭
  lines:
    - 一年一度的粉丝感谢祭又开始了。
    - 整个特雷森学院今天格外热闹，到处是人。
    - 操场上支起了临时舞台，走廊里挤满了举着应援棒的粉丝，记者们扛着摄像机在各个角落穿梭，寻找可以采访的目标。
    - 入口处的签名台前排着长队。
    - 有的%UMA%端端正正坐在桌前，认真的给粉丝签名；有的被记者围住，对着镜头笑着讲述最近训练的趣事；还有的把粉丝拉到自己开设的主题店里，一边吃一边聊。
    - %YOU%在这片喧嚣中慢慢走着，耳边充斥着快门声和欢呼声。
    - （如果是青云天空的话，多半会拉着%SEX%的粉丝找个树荫最浓的地方，然后——大家一起睡午觉。）
    - （嗯，这很符合%SEX%的作风。）
    - %YOU%笑了笑，继续往前走。
    - 转过一个拐角，%YOU%看到一间教室改成的咖啡厅。门口用花体字写着招牌——【黄金世咖】。
    - （黄金世咖？听起来怎么有点像……）
    - %YOU%心中有了个猜测，推开门走了进去。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「欢迎！」
    - 神鹰穿着黑白相间的女仆装站在门口，单手托着一个空托盘，笑容灿烂得像刚从杂志封面上走下来。
    - （果然……）
    - 神鹰看见%YOU%，先是一愣，然后脸上的笑意变得更浓了些，带着点不怀好意的味道。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「小青——！」
    - %SEX%朝里间喊了一声，故意把尾音拖得很长。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「带这位客人入座哦——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好——」
    - 一个%YOU%熟悉的、懒洋洋的声音从里面传过来，然后%YOU%看到了——
    - 青云天空穿着一件蓝白相间的女仆装，头上戴着一条蕾丝发带，白色的围裙系在腰间，打了个不太对称的蝴蝶结。
    - 可能是因为平时太少见这种打扮的缘故，%SEX%整个人看起来像是被谁从被窝里拽出来、硬塞进这套衣服里的。
    - %SEX%端着托盘走出来，眯着眼睛，虽然平时慵懒，但%SEX%还是在尽力工作。
    - 然后%SEX%看清了站在门口的人。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜啊！！！ Σ(っ °Д °;)っ」
    - %SEX%整个人往后一缩，退了半步，托盘上的茶杯晃了晃，发出一声清脆的碰撞。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你、你、你——训练员！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你怎么在这里！」
    - 「粉丝感谢祭啊。」
    - %YOU%走进来，假装没注意到%SEX%的反应，往旁边的一张空桌走去。
    - 「我看看嗷，先来杯咖啡吧。」
    - 青云天空站在原地愣了两秒，然后猛地扭头看向神鹰。
    - 神鹰正在门口给别的客人引路，感受到%SEX%的目光，回过头冲%SEX%挤了挤眼睛，比了个大拇指。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……叛徒。」
    - 青云天空小声嘟囔了一句，然后向%YOU%挤出一个极其不自然的微笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好的，咖啡马上来……」
    - 说完便像逃跑一样去取餐。
    - %YOU%观察了一下周围，只有神鹰，特别周，和青云天空在服务。
    - （看来圣王光环和草上飞应该是厨师……）
    - 这时特别周端着咖啡放到桌子上。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「您好，咖啡来了。」
    - 「谢谢，对了刚刚那个青色头发的服务员呢？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「额……小青刚刚强烈要求我来给您送餐……」
    - 特别周苦笑道。
    - 「哦……欸对，你们这里的招牌是什么？」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「当然是蛋包饭啦～还有美味魔法哦～」
    - 「我要一份！然后——指定青云天空来释放魔法」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「没问题！」
    - 神鹰从在旁边抢先答应到。
    - 说完便跑向后厨，只听一通激烈的交流过后，青云天空阴沉着脸走了过来，手里还端着一盘蛋包饭。
    - 金黄色的蛋皮包裹着米饭，上面用番茄酱画了一个歪歪扭扭的笑脸，笑得有点歪嘴，像被人揍了一拳。
    - 盘子边上还放了一小撮西蓝花和两片番茄，摆盘说不上精致，但能看出来是认真摆过的。
    - 青云天空把盘子放在%YOU%面前，手还在微微发抖。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「蛋包饭。请慢用。」
    - 说完就要跑。
    - 「等一下。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「…………又怎么了。」
    - 「是不是忘了什么？」
    - 青云天空脸的脸「唰」地又红了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不要。」
    - 「顾客就是上帝哦」
    - %YOU%指了指门口贴着的海报，上面写着「本店提供全套女仆服务」。
    - 青云天空顺着%YOU%的手指看过去，脸上的表情从抗拒变成了绝望。
    - %SEX%深吸一口气，闭着眼睛，飞快地说了一句
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「美味しくな～れ！萌え、萌え、キューン……」
    - 声音小得像是蚊子叫。
    - 「没听清啊，这样蛋包饭可不会好吃哦。」
    - %SEX%恶狠狠的瞪了%YOU%一眼，脸已经红得快要冒烟，手指僵硬的比了一个心。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「变得美味哦～！萌、萌、啾！」
    - %YOU%尝了一口。
    - 「嗯——味道真不错！不亏是小情的魔法！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那真是太好了，客人您如果没什么事的话……」
    - 话没说完，青云天空就又跑后厨去了。
    - 等%YOU%心满意足的吃完饭后，看见特别周正在和%SEX%粉丝合影，%YOU%突然有了给好主意。
    - 「服务员！你过来一下！」
    - %YOU%突如其来的呵斥让青云天空吓了一跳，小心翼翼的凑了过去。
    - 「咔！」
    - %YOU%突然抽出手机给你俩拍了张照。
    - 屏幕里，%YOU%笑着，青云天空一脸惊慌，耳朵竖得笔直，嘴巴张开像是想说什么，手伸到一半还没来得及挡住镜头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行！这张不好看——删掉删掉——」
    - 青云天空扑过来要抢手机，但被%YOU%灵巧的躲过。
    - 「我觉得挺好的啊，而且你们不是允许合影留念吗。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你是例外！」
    - %SEX%咬着嘴唇盯着%YOU%，眼睛里全是水汽，尾巴炸得像一把刷子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那你不许发出去！」
    - 「不发。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你发誓？」
    - 「我发誓。」
    - 说完便付钱朝外面走去，走前说了一句。
    - 「嗯，挂训练室确实挺好的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！」

cl_halloween:
  title: 万圣节
  lines:
    - 门被推开一条缝。
    - %YOU%抬头，看见一只橘色的什么东西挤进来
    - %SEX%穿着橙白相间的条纹袜，同色系的小裙子，头上顶着猫耳朵发箍，脸上还用眼线笔歪歪扭扭画了三根胡须。
    - 身上裹着一张橘色的毛毯当披风，尾巴从后面特意留出的洞里钻出来，末端系着一个小铃铛，一动就叮当响
    - 「……你这是。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Trick or treat！！！」
    - %SEX%高举双手（爪？），尾巴在身后晃来晃去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快交出零食，不然就捣蛋喵！」
    - %YOU%抬头看%SEX%，愣了两秒。
    - 「……你这是扮什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～猫妖！」
    - 青云天空一脸傲娇的仰起头叉着腰，%YOU%仔细打量一番。
    - 脸上胡须画歪了，猫耳朵发卡是超市买的那种，一个耳朵塌下来一半。嗯……尾巴上的铃铛倒是挺响。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「先别管别的！交出糖果喵！」
    - %YOU%从抽屉里拿出一袋小鱼饼干。
    - %SEX%低头看了看，又抬头看%YOU%，眼神里写着「就这？」。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你这里也太穷了喵……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还是让让本猫妖施舍你点吧～」
    - %SEX%从包里掏出一个手工做的纸袋塞给%YOU%。
    - 里面是形状歪歪扭扭的糖果——还有一个怎么看都像鱿鱼的东西。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～厉害吧～」
    - 在%YOU%翻看%SEX%的战利品时，%SEX%一个箭步凑了上来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作为没给糖的惩罚，我要开始捣蛋喽～做好觉悟喵！」
    - 还没等%YOU%反应过来，%SEX%已经从包里翻出一支化妆笔，另一只手按住你的肩膀。
    - 「等等——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不等！」
    - 笔尖落在你脸上的瞬间，%SEX%笑出了声。
    - 冰冰凉凉的触感从额头滑到鼻尖，又从鼻尖画到脸颊。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这里再加一笔……嗯……这边也……」
    - %YOU%闭着眼，能感觉到%SEX%在你脸上尽情发挥，偶尔停下来端详一下，然后继续下笔。
    - 「好了没有？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「别急嘛，大师作画都需要时间～」
    - 又过了好一会儿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来吧，睁开眼，看看本喵的杰作～」
    - %SEX%收起笔，语气里满是得意。
    - %YOU%睁开眼，看见%SEX%举着镜子，屏幕里映出%YOU%的脸——
    - 额头上写着歪歪扭扭的「笨蛋」，鼻尖被涂成黑色，两边脸颊各画了三根胡须，下巴上还有一个猫爪印。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈哈哈哈哈哈——训练员变成猫了！大笨猫！」
    - %YOU%盯着屏幕里的自己，又看看%SEX%笑得发红的脸。
    - 「你着品味真够奇特，」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「惩罚还没完呢喵～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「接下来走，一起跟我去要糖！」
    - %YOU%愣了一下。
    - 「我？现在？顶着这张脸？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对啊！」
    - %SEX%理直气壮地点头，尾巴在身后晃来晃去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你这装扮多棒啊，一定惊座四方喵！」
    - 说着%SEX%已经把你拉到门口，推开门，夜风灌进来，带着外面隐约的欢闹声。
    - %SEX%回头看%YOU%，猫耳朵发箍在走廊灯光下晃了晃。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走啦走啦，让那群小鬼看看，什么叫真正的猫妖组合～」

cl_christmas:
  title: 圣诞节
  lines:
    - 圣诞节的商业街到处挂着彩灯，空气里飘着烤栗子和热红酒的香气。
    - %YOU%被青云天空拽着手腕，在人流里艰难穿行。
    - %SEX%今天穿了件奶白色的厚外套，围巾松松垮垮地绕在脖子上，一只手拎着你，另一只手举着刚买的苹果糖。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！那边那边！」
    - %YOU%顺着%SEX%指的方向看过去——是一家挤满小女孩的饰品店，橱窗里挂着驯鹿发箍和圣诞老人帽子。
    - 十分钟后，%YOU%顶着一对会发光的驯鹿角走出店门。
    - 青云天空跟在后头，头上戴着一顶迷你圣诞帽，帽尖的小绒球随着%SEX%的步伐一颠一颠。
    - 往前走没几步，%SEX%又停在一个卖热红酒的摊位前。摊主正往杯子里插肉桂棒，香气飘得老远。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯～好香！但好多人排队呢……」
    - %SEX%歪着脑袋看了看那条长龙，然后扭头一脸坏笑的看向%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你帮我排，我去前面看看别的。回来正好喝。」
    - 不等%YOU%答应，%SEX%已经钻进人群里，只留下那圣诞帽在灯火里晃了一下。
    - %YOU%排了20分钟的队，端着两杯热红酒找到%SEX%的时候，%SEX%正蹲在一个卖毛线帽的小摊前
    - 手里拿着两顶毛线帽子——一顶是粉色有猫耳朵的，一顶是普通的红色圣诞帽。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？回来了？辛苦了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作为奖励，来挑吧，我送你一个！」
    - %SEX%接过红酒先放到地上，然后举起那两顶帽子。
    - 「这不是已经买了个鹿角？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个作为圣诞礼物太敷衍了，再补一个。我觉得这个猫耳朵适的合你。」
    - %YOU%看着那对可爱猫耳，有点害羞。
    - 「嗯……红色的吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「诶——」
    - %SEX%拖长了声音，但还是把红色的那顶塞进你手里。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好吧——听你的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我还觉得你戴猫耳朵会很可爱呢～」
    - 然后站起来，拍了拍蹲麻的腿
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快点，前面还有好多店没逛呢。」
    - %SEX%握住%YOU%的手，跟着%SEX%的脚步。
    - 彩灯在头顶一闪一闪的，%SEX%的手指在你掌心里，温温的，软软的。
    - %YOU%突然想一件事
    - 红酒没拿！
