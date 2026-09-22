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
          - 「嘿嘿～训练员讲课太辛苦了～要不要休息会啊？」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，相信我吧，我的计策，有你相信就够了……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「无论采取什么战术，都要具备跑步所需的体力。让我来快速结束战斗吧！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「作战名称是『全心全意，适当摸鱼』。让其他选手放松警惕，趁机获得胜利吧～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我早就做好准备了。那么，准备钓一杆大鱼啦！」
  - random: true
    lines:
      - color: %COLOR%
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
              - 「训练员～我去躺会儿，有紧急情况的话……睡醒再说～」
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
              - 「费用是什么？嘿嘿～到时候再告诉你～」
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
          - 「呜欸……里面又黑又窄，一看就不适合睡觉……」
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


o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～今天小青训练的很努力了哦～」
      - 「嗯嗯……的确，今天效率很高呢，说吧，想去哪玩？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那当然是——钓鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还有，什么叫玩！我那是去拯救那些在水底受苦的生物～罚你今天和我一起去！」
      - 「好好好～那咱今天去哪拯救它们呢？伟大的青云圣女……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……让我想想」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～～想我了吗～～」
      - 「嗯？你今天不是休息吗，怎么没出去放松放松？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶呀，这不是看训练员太辛苦了，特意来陪陪你啦～」
      - 「那正好，陪我整理数据吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「才不要！训练员你也是，大周末的就别卷了！要劳逸结合——」
      - 「也是……那咱俩——去钓会儿鱼？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？好主意！走，去哪钓？」
  - random: true
    lines:
      - 「小青！走！出发吧！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊！训练员，你这一身什么打扮，你今天中邪了？」
      - 「说什么呢，你上次说的，比赛赢了带你去钓鱼。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「额……那也不用这么激动吧，这样的训练员……我有点不习惯……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过训练员都这么热情了，那咱们出发！」
      - 「好嘞！今天路费我包，你想去哪钓都可以。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿～既然训练员今天这么大方，那我可得好好想想……」


orf_loc:
  - acc: 1
    content: 小溪（影响体力、精力、干劲、技能点数）
  - if: era.get('cflag:20:育成回合计时') < 3 * 48
    acc: 2
    content: 河口（影响基础属性）
  - acc: 3
    content: 湖泊（影响马币）
  - acc: 4
    content: 近海（影响声望）


orf_creek:
  - %YOU%和青云天空来到了附近的一条小溪。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「就这里了！训练员，要加油哦。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今晚的晚饭全看咱俩的技术了！」
  - %YOU%和青云天空开始了悠闲的钓鱼时光。
  - ………
  - ……
  - …
  - 一段时间后
  -
  - if: d.fish === 1
    lines: # 空军 20% 干劲-1
      - 青云看着空荡荡的桶。
      - 「……看来今天适合放生。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！去超市买一条！」
      - 青云天空拎起桶就往回走，步伐坚毅，果断，一往无前。
      - ——资深钓鱼佬，永不空军！
  - if: d.fish === 2
    lines: # 小杂鱼 8% 体力精力恢复5% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （看着桶里一群不到五厘米长的小鱼，陷入沉思）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……面拖油炸吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「撒点海苔粉，应该也挺香。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「或者炖鱼汤，再不济做成猫饭……」
      - 「额……不如放了吧……」
  - if: d.fish === 3
    lines: # 雅罗鱼 8% 体力精力恢复10% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天的是雅罗鱼啊，训练员，想不想吃烧烤？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「小青我烤这种鱼可是一把好手哦～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「先用盐搓洗去掉土腥味，再将鱼串好撒盐用炭火烤制，外皮香脆，鱼肉鲜嫩——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯～～光想想我口水都要流下来了，就这么定了，盐烤！」
  - if: d.fish === 4
    lines: # 白条鱼 8% 体力精力恢复15% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「全是小白条呢，这回就简单点做吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「处理完后，先调味去腥，然后裹上面粉炸一下就行。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，今天就交给你来做吧——」
  - if: d.fish === 5
    lines: # 马口鱼 8% 干劲+1 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大丰收欸！全是马口鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种鱼抢食抢的可凶了，亮片一扔就咬，数量还多。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这么多一回可吃不完，拿回去给大家分分吧，剩下的做成甘露煮。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「马口鱼的肉质紧实，做成甘露煮一定很下饭！」
  - if: d.fish === 6
    lines: # 虾虎鱼 8% 干劲+1 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔啊！这么全是小虾虎鱼！我说今天的空勾怎么这么多！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这群小家伙，看着个头不大，饵料却都被偷走了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不能白白便宜了它们，训练员！我今天要吃炸鱼！」
  - if: d.fish === 7
    lines: # 宽鳍鱲 8% 减少一层疲劳 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天都是宽鳍鱲欸，还不少呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你知道吗，宽鳍鱲在我们老家叫溪哥，它们在繁殖期颜色很漂亮哦。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼的口感跟马口鱼很像，要不也做成甘露煮吧。」
  - if: d.fish === 8
    lines: # 石斑鱼（溪流种） 8% 减少一层疲劳 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼哼～怎么样，小青我厉害吧，这种小溪里的石斑鱼都喜欢躲石缝里，一般来说可不好钓。」
      - 「我记得海里的石斑鱼挺大的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……确实。淡水里的石斑鱼很小呢，跟海里的没法比」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种鱼肉质紧实，风味清甜，但刺比较多，做成刺身太麻烦了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还是做成佃煮吧，回头慢慢吃。」
  - if: d.fish === 9
    lines: # 香鱼 7% 感到神清气爽（清除药物残留） 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，看！这就是淡水鱼之王——香鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「果然今天的这片水域很好，香鱼对水质要求可是极高的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一定要盐烤！这是原则性问题！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「整条鱼不去内脏直接串起，只撒盐用炭火烤制。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「鱼皮焦香酥脆，鱼肉细嫩多汁，内脏的微苦回甘与鱼肉的清甜形成绝妙平衡，这才是香鱼料理的最高境界！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「悄悄告诉你，小青我可是香鱼的铁粉哦～」
  - if: d.fish === 10
    lines: # 虹鳟 7% 干劲恢复到最佳 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「虹鳟！野生的虹鳟！训练员你看！这么大一条！今晚加餐了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「盐烤！不对——油煎！不行——刺身！等等——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔啊～我都不知道怎么选了～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不！小孩子才做选择，我全都要！」
  - if: d.fish === 11
    lines: # 花羔红点鲑 7% 体力精力恢复20% 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「难道说！难道说！是传说中的冷水鱼之王——花羔红点鲑！」
      - 「这么厉害？我看看。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「欸欸欸！等等！那这种鱼可娇贵了！轻点捧。」
      - 「好小气哦……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当然了！这可是溪流钓的终极目标之一！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「也是最高级的食材之一。」
      - 「这个要怎么吃？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当然是最高级的享用方式——寿司。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这顿大餐一定要给大家尝尝。」
  - if: d.fish === 12
    lines: # 山女鱼 3% 感到精神焕发（消除偏头疼以及药物残留） 干劲恢复到最佳 技能点数+20
      - 青云天空的鱼漂轻轻点了一下，又点了一下，然后猛地沉了下去。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？！来勾了！」
      - 青云天空手腕一抖，开始和水下的生物较劲。
      - 鱼线被一点一点地拉出去，那家伙不急不躁，就是闷头往水底钻。
      - 一阵拉扯过后，鱼慢慢被拉到了上游。
      - 这时水面翻了一个不大的水花，一抹黄褐色的影子在水下一闪而过——
      - 那鱼的身形流畅而优雅，身上的斑纹整齐有序，侧线泛着一条淡淡的粉红色光泽，像涂了一层极薄的胭脂，背部是素雅的黄褐色，腹部雪白点名了它的身份。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「山女鱼……」
      - 青云天空呆愣了起来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「山女鱼！山女鱼！训练员！是山女鱼！」
      - %SEX%突然惊叫起来，嗓子都劈了，尾巴在身后疯狂地甩，把旁白的水桶都掀翻，水花溅了%YOU%一身。
      - 「轻点轻点！别把竿子弄断了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我知道我知道我知道——」
      - %SEX%深吸一口气，拼命让自己冷静下来，但握着竿子的手在发抖，嘴唇也在发抖。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「山女鱼啊，训练员……你知道山女鱼是什么概念吗……」
      - 青云天空跟着它的节奏，放一点线，收一点线，顺着溪岸来回走了十几步，鞋里全是水，裤腿湿到大腿根，但%SEX%浑然不觉。
      - 终于，鱼开始松劲了，那个溪流中的贵族慢慢被拉向岸边，青云天空蹲下身，用抄网轻轻一舀。
      - 夕阳的光从树缝间漏下来，落在山女鱼的身上。
      - 它大约三十厘米出头，体型修长流畅，身上一排暗青色的大斑如同一个个暗纹勋章，侧身那条淡淡的粉红色带子在光线下若隐若现。
      - 它的鳞片细小而紧密，排列得整整齐齐，每一片都在夕阳下折射出柔和的光晕。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这就是，溪流女王……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好美……」
      - 泪水不自觉的从两侧滑落。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员……我都不敢呼吸了……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……我想就这样看一辈子。」
      - %YOU%用手机拍照留做纪念，然后问道
      - 「所以……」
      - 「这个你打算怎么吃？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「吃你个头！」
      - 青云天空翻了个白眼。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼比我都金贵！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当然要放生。」
      - 在训完%YOU%后，青云天空有如痴如醉的看着桶里的山女鱼。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「再看一会吧，再看一会再放……」


orf_river:
  - %YOU%和青云天空来到了近海的一处河口。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员快点！晚了就没好位置了！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「河口的鱼可是很考验技术的！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「所以小青平时来钓鱼可不是为了偷懒，是在训练呢，喵哈哈～」
  - %YOU%和青云天空开始了悠闲的钓鱼时光。
  - ………
  - ……
  - …
  - 一段时间后
  -
  - if: d.fish === 1
    lines: # 空军 20% 全属性-1
      - 青云看着空荡荡的桶。
      - 「……看来今天适合放生。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！去超市买一条！」
      - 青云天空拎起桶就往回走，步伐坚毅，果断，一往无前。
      - ——资深钓鱼佬，永不空军！
  - if: d.fish === 2
    lines: # 小杂鱼 7% 全属性+1
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （看着桶里一群不到五厘米长的小鱼，陷入沉思）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天不少钓呢，就是没有大鱼……」
      - 「至少今天咱们钓的很开心……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员没想到你还挺豁达的嘛～」
  - if: d.fish === 3
    lines: # 梭子魚 7% 全属性+1~2
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「早上的梭鱼就是多。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「钓这种鱼小青我可是有独家秘方的……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看！又来了，看我一抽！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当当！厉害吧～训练员你要学的还很多呢～」
  - if: d.fish === 4
    lines: # 鲈鱼 7% 全属性+2
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鲈鱼好大一条，比我宿舍楼下那只橘猫还肥！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这我可得想想怎么解决……」
      - 「可以用煮付，然后多叫几个人来一起解决。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好主意！就让小花来吧，%SEX%做菜有一手！」
  - if: d.fish === 5
    lines: # 鲭鱼 6% 速度+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哇，今天好多鲭鱼。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你别看他小，肉质很紧实的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种鱼最新鲜的时候就要用最新鲜的吃法——刺身」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一般搁店里吃可贵了，属于高级货。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过今天小青这里大促销，管够！」
  - if: d.fish === 6
    lines: # 竹荚鱼 6% 耐力+5
      - 刚开始钓没多久，%YOU%的浮漂就有了反应。
      - 「这不是竹荚鱼吗，我在超市买过。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你还挺厉害，这么快就有口了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看来今天运气不错啊，多钓几条，晚上请你吃寿司～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼肉质紧实、风味清爽，做寿司最是一绝！」
  - if: d.fish === 7
    lines: # 河豚 6% 力量+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊！，是河豚，这必须要小心。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你看它气鼓鼓的样子，想不想小特～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过这个可不是咱们能料理的，野生的谁也不好说，还是放了吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「想吃咱们过会找个专业的饭店。」
  - if: d.fish === 8
    lines: # 多春鱼 6% 根性+5
      - %YOU%钓上来一条银色的小鱼。
      - 「这是——多春鱼？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这是公鱼，确实是咱平常见的多春鱼，但是是引进的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还有种比较稀少的柳叶鱼，这才是我们本土的多春鱼。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种小鱼一钓一个准。」
  - if: d.fish === 9
    lines: # 鲻鱼 6% 智力+5
      - %YOU%费尽九牛二虎之力钓上一条体长一米二的鲻鱼。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「竟然这么大……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜……好不甘心……这为什么不是我钓的……」
      - 「小青，这么大的鱼该怎么吃啊～」
      - 青云天空瞥了你一眼。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼，自己解决！你等着，我要钓个比你还大的！」
  - if: d.fish === 10
    lines: # 黑鲷 5% 速度+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好大一条黑鲷，看来咱俩的福气很旺呢～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼可狡猾了，还被称为「水中的狐狸」」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要有精细的钓组，准确的潮水判断和持续的诱饵策略。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「等你也钓上来一条时，就算出师啦～」
  - if: d.fish === 11
    lines: # 香鱼 5% 耐力+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，我钓到香鱼了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「它们出现在河口，说明它们的产卵期到了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「亲鱼死亡，幼鱼入海，产卵后，大部分亲鱼会力竭而死。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「所有香鱼除了淡水女王，还被称为「年鱼」」
      - 「听起来好悲伤……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但这也是它们生命的起点啊。」
  - if: d.fish === 12
    lines: # 河鳗 5% 力量+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是河鳗！训练员！是河鳗！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种鱼尤其喜欢泥沙底质的缓水域、石缝和洞穴里」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「而且野生的河鳗数量已经很少了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天竟然能钓到一条，算是圆满了～」
  - if: d.fish === 13
    lines: # 柳叶鱼 5% 根性+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这是——柳叶鱼！好久没有见到了。」
      - 「和公鱼很像呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「的确，但这是这是濒危物种，公鱼是引进的平民鱼种。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就这一条也不够咱俩分，还是放了吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「想吃可以回头买几条公鱼，味道也差不多～」
  - if: d.fish === 14
    lines: # 石狗公 5% 智力+10
      - %YOU%钓上来一条体色呈红褐色，头部宽大，布满棘刺的鱼，刚想取下鱼钩。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，取的时候小心点，石狗公身上的棘刺上有毒腺！」
      - 青云天空从包里翻出个手套和剪刀。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唉～关键时刻还是得靠小青～不然你手被扎一下就得肿一片……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过河口竟然有石狗公？偶入的吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「作为差点刺伤训练员的罪魁祸首，赐你盐烤之刑！由小青亲自执行！」
  - if: d.fish === 15
    lines: # 天竺鲷 4% 全属性+10
      - 钓了一整天，浮漂一动不动。
      - 从清晨到日暮，%YOU%和青云天空坐在河口的堤岸上，换了三个钓点，换了四种饵料，鱼桶里的水始终是空的。
      - 青云天空从一开始的兴致勃勃，到中午的昏昏欲睡，再到下午的沉默不语——
      - %SEX%的耳朵从竖着变成耷拉着，尾巴也从悠闲地摇晃变成了拖在地上。
      - 天色一点一点暗下来，河面上的金光被灰蓝色吞没，远处的路灯次第亮起。
      - %YOU%看了一眼手机，又看了一眼眼睛直直盯着水面的青云天空。
      - 「天空，要不今天先这样？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要！」
      - 「明天还有训练呢，而且大晚上你也看不清。」
      - 青云天空转身从包里翻出两个夜钓灯。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，再夜钓会，行吗……」
      - %YOU%看着奋斗一天却毫无收获的青云天空，%SEX%的眼神楚楚可怜，充满了祈求。
      - 「唉，好吧，就今天一次哦～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿，最喜欢训练员了～」
      -
      - 夜钓的河岸很安静。
      - 青云天空的侧脸被夜钓灯的光晕染成暖橘色，眼睛死死盯着那颗绿光，像猫盯着老鼠洞。
      - 就在%YOU%快要打瞌睡的时候，青云天空突然动了。
      - 「有了！」
      - 收线很轻松，没有怎么发力，看来鱼不大。
      - 青云天空的眉头微微皱了一下，%SEX%加快收线的速度，鱼线在水面上划出一道细长的波纹。
      - 夜光漂已经被拉到了水下的某个深度，只能隐约看见一点微弱的绿光在黑暗中晃动。
      - 几秒钟后，那道银光破水而出。
      - 青云天空伸手接住落在堤岸上的鱼，托在掌心里。
      - 「是条小鱼呢，不过今天也算圆满了。」
      - 青云天空没有回应。
      - 「天空？」
      - %YOU%又喊了一声，但青云天空还是没有回应。
      - %YOU%走到%SEX%身旁，发现%SEX%在喃喃自语。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……天竺鲷。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我钓到天竺鲷了……」
      - %YOU%好奇的看了看青云天空手里的小鱼。
      - 那条鱼还没有%SEX%手掌宽，身体呈灰白色半透明，一条贯穿眼睛和身体的黑色纵带，就像毛笔从吻部到尾巴画了一道流畅的墨线，干脆利落，尾柄还有个黑色圆点，干净，精致。
      - 「这是……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我钓到天竺鲷了，是弓线天竺鲷！！！」
      - 青云天空突然的大叫吓了%YOU%一大跳。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你知道吗，这是弓线天竺鲷！特别稀有！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「技术和运气缺一不可！我钓到了！」
      - 在短暂的兴奋爆发后，青云天空慢慢冷静了下来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你看，它真美……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我感觉……好幸福……」
      - 青云天空轻轻把那条珍贵的弓线天竺鲷放进鱼桶，然后转身抱住了%YOU%。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，谢谢你……谢谢你陪我夜钓……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我今天……实在是……太幸福了！」


orf_lake:
  - %YOU%和青云天空来到了一片天然湖泊。
  - 「哇哦，这片湖真漂亮啊」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是欸，跟我老家后山的那片湖一样，大鱼绝对少不了！」
  - 「如果收获不错咱还可以支个小摊卖一卖～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那咱俩加油！把下个的零食费赚出来！」
  - %YOU%和青云天空开始了悠闲的钓鱼时光。
  - ………
  - ……
  - …
  - 一段时间后
  -
  - if: d.fish === 1
    lines: # 空军 20% 马币-5
      - 青云看着空荡荡的桶。
      - 「……看来今天适合放生。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！去超市买一条！」
      - 青云天空拎起桶就往回走，步伐坚毅，果断，一往无前。
      - ——资深钓鱼佬，永不空军！
  - if: d.fish === 2
    lines: # 小杂鱼 7% +1马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （看着桶里一群不到五厘米长的小鱼，陷入沉思）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「额……这些应该卖不了吧……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唉……没办法，小鱼啊小鱼，今天算你们运气好。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走吧……等长大了别忘了回来报恩哦——」
      - 回去的路上，一阵风吹过，一张马币奇迹般随风飘到你们手中。
  - if: d.fish === 3
    lines: # 鲫鱼 7% +2马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔啊！这条鲫鱼好肥！感觉至少有1斤！」
      - 「我这里也上来条大的！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看来今天口正！赶紧继续！」
  - if: d.fish === 4
    lines: # 鲤鱼 7% +3马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「欸，是鲤鱼啊……」
      - 「怎么了，觉得太普通？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那不可能，我钓到什么鱼都很开心啦……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「感觉卖不太出去呢，毕竟咱这边吃的并不多……」
  - if: d.fish === 5
    lines: # 鲶鱼 7% +4马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……滑溜溜的，抓都抓不住。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿～每次看鲶鱼都觉得它长得好喜感～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看这大嘴唇，还有这胡须，还有这呆呆的眼神～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「长这么肥，一看就很贪吃。」
      - 「它听到会伤心的……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「它温暖的泪水会化为冰冷的马币～」
  - if: d.fish === 6
    lines: # 黄颡鱼 7% +5马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼啊！大丰收！满满一桶的昂刺！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！找个有缘人收了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「赚到的给咱晚上加个餐！」
  - if: d.fish === 7
    lines: # 乌鳢 7% +6马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好大一条黑鱼！起码有两斤！」
      - 「这鱼也太凶了，捞上来的时候还给了我一尾巴……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「没事吧！疼不疼？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「黑鱼就这样，攻击性很强。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你今天辛苦了，回头请你吃冰淇淋～」
  - if: d.fish === 8
    lines: # 公鱼 7% +7马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好多公鱼！一条接着一条的来！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看来咱们今天的运气不错啊～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你也加加油，多钓点。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「上次收鱼的大叔说就好这口～」
  - if: d.fish === 9
    lines: # 雅罗鱼 7% +8马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是雅罗鱼啊，最近还挺常见的。」
      - 「咱们前两天还在天妇罗店吃过呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？你说这个我想个好主意。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咱再多钓几条直接去店里吧，让他们帮忙加工～」
  - if: d.fish === 10
    lines: # 香鱼 6% +15马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！快看我钓到什么了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「溪流之王——香鱼！」
      - 「品相好好，这么新鲜的香鱼，要不要做成刺身？」
      - 青云天空一把将鱼拉回来，放回鱼桶里。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「才不要呢！学校附近新开的高级自助餐我馋好久了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这条鱼可是承载了我自助餐的重担！才不给你吃～」
  - if: d.fish === 11
    lines: # 青鱼 6% +16马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！救命！快来帮帮我！！！」
      - 「来了来了！撑住！小青！」
      - %YOU%和青云天空废了好大的劲拉上来一条10公斤的巨物。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊哈～我的天哪，好恐怖，这么大的淡水鱼一看就是青鱼……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这片湖还真是不养咸鱼……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这么重，按市场最低价咱也不少赚了～喵哈哈～」
  - if: d.fish === 12
    lines: # 河鳗 6% +17马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一条黑色的河鳗在桶里不断翻腾。」
      - %YOU%和青云天空蹲在桶边看着它不断折腾。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，竟然是河鳗，而且这玩意儿还是野生的，可贵了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「鳗鱼饭………………」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，这个不吃了，回去的时候拿到市场那边去问问吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「鳗鱼饭………………」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「品相好的野生河鳗，一条能卖一万多円呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「鳗鱼饭………………」
      - 「要不……晚上我请你吃鳗鱼饭？」
  - if: d.fish === 13
    lines: # 锦鲤 4% 马币获取+1%
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呀！是锦鲤呢……」
      - 「附近锦鲤好像挺多，毕竟有很多的放生的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「确实，但还是放回去吧，据说会有好运呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「说不定回去买彩排就能抽到大奖，从此过上美妙的躺平生活呢，喵哈哈～」
  - if: d.fish === 14
    lines: # 远东哲罗鱼 2% 马币+30 马币获取+1%
      - 从清晨到日暮，%YOU%和青云天空在湖边上坐了整整一天。
      - 浮漂纹丝不动，就像钉在水面上一样。旁边的水桶空空荡荡，连条小杂鱼都没混上。
      - 青云天空打了个哈欠，丢下鱼竿，慢悠悠地走到%YOU%身边蹲下来。
      - %SEX%探头往%YOU%的鱼桶里看了一眼，和%SEX%的一样，清澈见底。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看来咱俩今天又得去超市买鱼了，喵哈哈～」
      - %SEX%自嘲地笑了笑，下巴搁在膝盖上，呆呆的看着桶里平静的水面。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你说咱俩今天是不是犯冲啊，坐一起一天都没口。」
      - 「可能是天气的事。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「得了吧，早上你说气压低，中午你说水温高，下午你说太阳太晒——」
      - %SEX%掰着手指数，尾巴在身后慢悠悠地晃着，开始有一句没一句地聊起来。
      - 说昨天在运气好抢到了限量的布丁，说西野花最近在养新品种的花，说神鹰前段时间抽奖赢了五千円……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……所以说啊，训练员，运气这东西，我感觉像守恒的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就像你玩游戏抽卡总是吃井，那是因为你太过幸运遇到了小青我～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「所以啊……」
      - 「等一下。」
      - %YOU%忽然打断%SEX%，身体不自觉地绷紧，感受着手中钓竿异样的震动。
      - 「我好像……上钩了。来了！」
      - %YOU%下意识地提起鱼竿，竿梢瞬间弯成了一张满弓。
      - 一股蛮横的力量从水下传来，直直地往下拽，鱼线紧绷着，发出令人紧张的吱吱声。
      - %YOU%双手死死握住竿柄，整个人被拽得往前踉跄了半步。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「等等等等——真的假的？！」
      - 青云天空愣住了，然后猛地站起来，迅速抓起旁边的抄网。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你稳住！别把线绷断！」
      - 「我知道！」
      - 鱼竿轮座的卸力声尖锐地响着，%YOU%感觉自己的手臂在发抖。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是什么鱼啊——这力气也太大了吧——」
      - 青云天空抱着抄网站在%YOU%旁边，不断摇晃的尾巴带着掩饰不住的兴奋。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你中午是不是偷吃了能量棒，怎么还没被拽下去——」
      - 「闭嘴——帮忙——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我在帮啊！网都准备好了！」
      - 卸力声渐渐变小，%YOU%趁机开始收线，一圈一圈地往回摇，水下那个东西似乎也累了，挣扎的幅度小了一些。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「感觉今天咱俩的运气全集中在这条大鱼上了啊——」
      - 青云天空兴奋地念叨着，身体跟着鱼线的移动左右晃动，尾巴摇得像螺旋桨。
      - 鱼终于被拖到了浅水区，水下一道暗色的影子缓缓浮上来，轮廓越来越大，越来越清晰。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来了来了来了——」
      - 青云天空把抄网探进水里，眼睛死死盯着水下那道影子。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看到头了！好大——」
      - %SEX%的话忽然卡住了，网兜停在水里，一动不动。
      - %YOU%还在兴奋地喊「捞啊！快捞啊！」
      - 那条鱼被拖到网口上方，一个甩尾，几乎要从网口滑出去。
      - 「青云天空！」
      - %YOU%大喊了一声。
      - 青云天空猛地回过神来，抄网猛地往上一兜，把整条鱼兜进了网里，迅速往回收。
      - 岸边，%SEX%双手抱着网柄踉跄了两步，差点一屁股坐到地上。
      - 鱼在网里剧烈地翻腾，溅了两人一身的水。
      - 青云天空抓着网，低头看着网里的鱼，眼睛瞪得浑圆，嘴巴一张一合，就是发不出声音。
      - 然后%SEX%突然尖叫起来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊啊啊啊啊啊——！训练员训练员训练员——！」
      - 「你冷静——一条大鱼而已——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「冷静不了！！！」
      - 把网放到地上蹲下来，眼睛死死盯着网里那条还在扑腾的鱼，声音都在发颤。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「对不起对不起——我刚才看呆了，还以为自己看错了——」
      - %SEX%深吸一口气，扭头看向%YOU%，眼眶居然有点泛红。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你知道这是什么鱼吗……」
      - %YOU%仔细观察起网里的巨物。
      - 网里的鱼大概有七十多厘米长，鱼身粗壮浑圆，背部是银灰带棕褐色的，上面散布着橘红色的小斑点。
      - 它的吻部比较钝圆，嘴巴很大，微微上翘的嘴角让它看起来像是带着一丝傲慢的表情。
      - 「不太了解，力气倒是真的大……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这可是远东哲罗鱼啊，训练员。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼现在在日本的野生种群已经很少了，是『极危』物种！」
      - 「所以说这条鱼……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「——不是值不值钱的问题，这鱼可是严禁捕获与交易的！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但能钓到一次，真的是此生有幸……」
      - 青云天空擦了擦眼角的泪光，稳定了下情绪。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过话说回来——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咱俩今天的时运还真全集中在这一条上面了。」
      - %SEX%低头看了一眼空荡荡的鱼桶，又看了一眼网里那条还在喘气的大家伙   。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「空军一整天，换来一条远东哲罗鱼……训练员，这买卖其实也不亏？」


orf_sea:
  - 在青云天空的强烈要求下，你们来到了海边，一路上青云天空一脸烦躁的翻着手机。
  - 「怎么了？小脸皱着一路了。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员！你看！」
  - 青云天空把手机举到%YOU%面前，上面是一个钓鱼爱好者的群聊，一群钓鱼佬在炫耀在近海钓到的大鱼。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呜……很不服气！对不对？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今天咱俩也要钓条大的好好涨涨威望！！！」
  - （斗志这么强的青酱真少见……）
  - %YOU%和青云天空开始了悠闲的钓鱼时光。
  - ………
  - ……
  - …
  - 一段时间后
  -
  - if: d.fish === 1
    lines: # 空军 20% -3声望
      - 青云看着空荡荡的桶。
      - 「……看来今天适合放生。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！去超市买一条！」
      - 青云天空拎起桶就往回走，步伐坚毅，果断，一往无前。
      - ——资深钓鱼佬，永不空军！
  - if: d.fish === 2
    lines: # 小杂鱼 7% +2声望
      - 青云天空一脸不爽的望着桶里的各种小杂鱼
      - 「不拍照炫耀一下吗？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不！这绝对不是我的实力！绝对！」
      - 「所以……把它们放了？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「放了？哼哼～小鱼们～最好觉悟吧！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你们将成为我钓上超级大鱼的饵料！加入光荣的进化吧！荣耀会记录你们每一条鱼！」
      - 「…………」
  - if: d.fish === 3
    lines: # 沙丁鱼 7% +2声望
      - 「小青！我钓上来好多沙丁鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「挺厉害的嘛～训练员。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过……发照片还是算了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「他们大概率会回『这玩意儿海边一网兜的事』的吧～」
      - 「还真是不留情呢……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「没办法……钓鱼的世界……就是这么残酷……」
  - if: d.fish === 4
    lines: # 竹荚鱼 7% +2声望
      - 「小青！你看——竹荚鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哇，恭喜恭喜，啪唧啪唧～」
      - 「好敷衍哦～哭哭～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……那给你来点激情的——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！恭喜你！钓鱼水平达到小孩了呢～」
      - 「更伤心了，嘤嘤嘤……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「开玩笑的啦～喵哈哈～」
  - if: d.fish === 5
    lines: # 鲭鱼 7% +2声望
      - 「小青，收获怎么样？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一般般吧。」
      - 青云天空用着满不在乎的语气踢了踢旁边沉甸甸的鱼桶。
      - 「好家伙，这也叫一般般？都满满一桶的鲭鱼了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种简单的对我来说小意思～我的目标可是海里的巨物！」
  - if: d.fish === 6
    lines: # 白姑鱼 7% +2声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「身白鳃黑，一看就是白姑鱼」
      - 「还挺漂亮，放水里都不容易看见。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还不错，趁热打铁！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过比起炫耀，这鱼被关注的点更多在吃上吧～」
  - if: d.fish === 7
    lines: # 海鲈鱼 7% +2声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这花鲈力气还挺大，差点脱钩！」
      - 「这个应该挺稀有吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……还凑合……拍照留个纪念吧～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来训练员，我捧着它，你帮我拍。」
      - 钓友评价：「可以啊，这么大的海鲈鱼。」
  - if: d.fish === 8
    lines: # 黑鲷 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哦！是黑鲷！我说怎么这么难钓」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，来来来，这个角度。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……拍的不错～标题就写，小小黑鲷，拿下拿下～」
      - 钓友评价：「钓手技术不错」
  - if: d.fish === 9
    lines: # 隆头鱼 6% +4声望
      - 「小青，你来看，我钓了条长得很像你的鱼。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「像我？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这不是隆头鱼嘛，等等……哪里像我了！！！」
      - 「你上次搁树上睡觉结果一个翻身滚了下来，脑袋磕个大包时跟这鱼一模一样～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔……你等着！我这就掉条石狗公给你照照镜子！」
      - 钓友评价：「好漂亮的隆头鱼，在哪钓的？」
  - if: d.fish === 10
    lines: # 真鲷 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哦！出大货了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！看！真鲷！」
      - 「好漂亮的鱼，红白色的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「钓到真鲷可是个，感觉跟过春节一样～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这我肯定要在论坛上炫耀一番～」
      - 钓友评价：「接接接！」
  - if: d.fish === 11
    lines: # 海鳗 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊啊！！！训练员！快拿网！！！」
      - 「来了来了！这条海鳗也太凶了」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼——真不容易，训练员，看在你这么及时的份上，这条海鳗归你了～」
      - 「你把钩摘下来再给我……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这是你的海鳗了，当然你来摘……」
      - 「不不不，这份荣誉当然要由钓上来的幸运儿来了～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「可是……可是……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「可是小青怕被咬嘛……小青可是很崇拜训练员的呢～训练员这——么厉害，就帮帮……」
      - 「装可怜不管用哦～还是把线剪了吧……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼——小气鬼——」
      - 钓友评价：「狠人，这玩意也敢摘钩」
  - if: d.fish === 12
    lines: # 海鞘 6% +4声望
      - 「水草？珊瑚？这是什么玩意？扔了扔了……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？训练员，等等！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这可不是珊瑚，这是海鞘，你是怎么钓上来的！？」
      - 「大概感觉很沉，一使劲就上来了？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「太离谱了，我拍照要发推特上～」
      - 钓友评价：「不信……」
  - if: d.fish === 13
    lines: # 龙虾 6% +1%声望获取率
      - 「是龙虾啊，好像是被勾上来的？扔了扔了～」
      - 被仍在一旁的龙虾对岸上新奇的环境感到陌生，开始漫无目的的游走。
      - 走着走着，它看见一束青色的东西在晃来晃去。
      - 也许是出于对新事物的好奇，也许的对这来历不明的物体感到害怕。
      - 它的本能告诉它，夹住这青色的物体！
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！！！尾、尾巴！！！夹、夹住啦——！！！」
      - %YOU%闻讯赶了过来，只见青云天空拼命甩着尾巴，那只龙虾跟荡秋千似的前后晃荡，钳子纹丝不动。
      - %YOU%赶紧上前帮忙解围。
      - 回去的路上……
      - 「小青～我真的错了，别生气了呗～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼——」
      - 青云天空抱着尾巴脸扭向一边。
      - 「回去我请你吃龙虾刺身！咱一定把这个仇报了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这还差不多～」
  - if: d.fish === 14
    lines: # 横带石鲷 2% +10声望 +1%声望获取率
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，我跟你说，今天感觉超级好。」
      - 「嗯？指的是？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就像赢下比赛那种感觉，超级棒的感觉～」
      - %YOU%笑了一声，表示加油。
      - 接下来的4个小时，青云天空的表现让%YOU%开始怀疑%SEX%是不是真的能预判什么。
      - 各种鱼一杆接着一杆，甚至有条幼狮鱼。
      - 而%YOU%的鱼桶里始终空空如也，偶尔浮漂一沉，拉上来的也只有孤零零的鱼钩，鱼饵已然不见……
      - 青云天空每钓上来一条，都要举起来朝%YOU%晃一晃，脸上写满了「快看快看快看」。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员——你那边怎么样啊——」
      - %SEX%的声音从堤防那头飘过来，带着明显的得意。
      - 「……在等着」
      - %YOU%没平静地回了一句。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那就是没口咯？」
      - 青云天空重新挂好饵，把竿抛了出去，眯起眼睛，尾巴在身后悠闲地画着圈。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～要是实在钓不到，用不用我匀你几条啊～喵哈哈～」
      - 就在青云天空跟%YOU%得意的炫耀时，%SEX%的竿梢猛地一沉。
      - 鱼竿的尾部从栏杆上弹了起来，几乎要飞出去。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶——！」
      - 青云天空的反应比%SEX%的脑子快。%SEX%整个人扑过去，双手死死抓住竿柄，身体被那股突如其来的力量拽得往前一踉跄。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员——！救命！！」
      - 没等青云天空喊完，%YOU%已经丢了手里的竿子跑了过来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「稳杆！先稳杆！」
      - %YOU%蹲到%SEX%身边，一手按住竿尾，一手托住竿身的中段。
      - 两个人的力量加上去，鱼竿才勉强稳住，但竿梢依然弯成了一张满弓，在水面上剧烈地颤动。
      - 泄力器发出尖锐的嘶鸣声，鱼线被疯狂地往外拉。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么东西……这什么东西……」
      - 青云天空的声音带着一丝慌乱，但更多的是兴奋。
      - 泄力器叫了十几秒，终于停了。
      - 青云天空开始收线，一圈一圈，速度不快但是很稳。
      - 收到一半的时候，那股力量又爆发了，这次是横向冲刺，鱼线在水面上划出一道长长的水花。
      - 「换边！跟着它走！」
      - 青云天空侧过身，把竿往鱼冲刺的反方向压，整个人跟着在堤防上移动了几步。
      - 这时鱼线的方向变了，水下那个东西被迫转了个弯，但还是在拼命地往下钻。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是不是挂到礁石了？」
      - 青云天空的声音带着一丝紧张。
      - 「没有，还在动——收线，别停。」
      - %SEX%咬着嘴唇，继续摇轮。每摇一圈都要付出很大的力气，手臂上的肌肉绷得紧紧的，额头上的汗水顺着鬓角往下流。
      - 鱼被慢慢拖到了浅层，这时它又挣扎了一次，但已经是强弩之末，侧着身子被拖到堤防边缘，背鳍的硬棘在水面上划出一排细小的波纹。
      - %YOU%拿起抄网，对准鱼头的方向，等青云天空把鱼带进网口，手腕一翻，兜住了整条鱼。
      - 汗水朦胧了青云天空的双眼，待%SEX%擦去时，%SEX%看清了这条鱼的全貌。
      - 这条鱼大概只有四十多厘米。身体侧扁得像一块厚钢板，背部银灰带棕色，腹部偏白。
      - 最显眼的是那十来条暗色的横带，从背部延伸到腹部，像穿着一件条纹外套。
      - 突然，%SEX%丢下鱼竿，一屁股坐在了水泥地上。
      - 「才不到半米，力气怎么这么大。」
      - 「嗯？小青？你怎么了？」
      - 抄网里的鱼还在拼命翻腾，拍打着网兜，溅了%SEX%一脸的海水。
      - 但%SEX%没有躲，就那么跪在地上，爬了过去，眼睛瞪得溜圆。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「横带石鲷。」
      - 青云天空的声音发飘，像是从很远的地方传来的。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这就是……矶钓之王……」
      - %SEX%伸出手，小心翼翼地碰了碰鱼的背鳍，被硬棘扎了一下，立刻缩了回去……。
      - 「训练员……」
      - 青云天空的声音带着压不住的颤抖。
      - %SEX%盯着网里那条还在喘气的鱼，沉默了两秒，然后突然发出一声尖叫。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「钓到啦————！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「横带石鲷！横带石鲷！我钓到横带石鲷了啊啊啊！」
      - 青云天空双手举过头顶，朝着大海疯狂的大喊。
      - 旁边几个钓友都看了过来，有人已经掏出手机在拍了。
      - %YOU%蹲在旁边，看着%SEX%这副彻底放飞自我的样子，忍不住笑了。
      - 「看来你今天的感觉真的没错～」
      - %SEX%慢慢抬起头，脸上的表情从狂喜变成心虚，又从心虚变成理直气壮。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这条也在预料之中～」
      - 钓友评价：「太幸运了！回去把这跟杆子供起来！」


o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哇～训练员～河里好多小鱼呢～咱们光散步是不是有点浪费时间？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员的体力不错啊，下次要不要一起跑跑？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「河边有小猫诶，呐～训练员你知道吗？小青我可是会猫语的哦～」

o_s_drawing:
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
          - 什么也没有！！！ # 30% 无奖励
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
          - 一根「大」胡萝卜！！！ # 30% 全属性+8
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「呜啊！好大的胡萝卜！」
          - 虽然只有一根，但比一般的胡萝卜大了一大圈。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「嗯……明天不用去食堂了～」
      - if: d.dice === 2
        lines:
          - 一箱大萝卜！！！ # 20% 全属性+15 技能点数+15
          - 青云天空抱着一大箱萝卜。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「好多啊……而且还这么大……这得吃多久……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「训练员，你家有泡菜坛子吗？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「没有的话，咱俩下个月的菜单可就只有胡萝卜了……」
      - if: d.dice === 1
        lines:
          - 胡萝卜汉堡肉排套餐周券！！！ # 15% 全属性+25 技能点数+25 干劲+2
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
              - 「训练员！我们把小花、小特、光辉、小草还有神鹰%THEY%都叫来吧！」
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
          - 金胡萝卜！！！ # %5 全属性+30 技能点数+50 干劲+4 耐力&智力额外+20（仅触发一次）
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
              - 「等等……感觉……好奇妙！」
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


# 75 爱慕以上
gn_sex:
  title: 叫春
  lines:
    - 在一天忙碌的工作结束后，%YOU%回到了公寓。
    - 刚打开门，%YOU%就听到一股奇怪的声音从卧室内传来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「嗅哧～～嗅哧～～」
    - %YOU%瞬间警惕起来，蹑手蹑脚的走近，那奇怪的声音也愈发清晰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「嗅哈～～嗅哈～～」
    - 这时，%YOU%听到了一个熟悉的声音。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔——呼——嗯哼～～～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员的气味，喜欢～～嘿嘿～～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喜欢～喜欢～喜欢～喜欢～喜欢～」
    - （小青吗……）
    - %YOU%走进卧室，啪一下把灯打开。
    - if: d.check === 2
      lines:
        - 但%YOU%的目光所及只有凌乱的床单，却不见目标人物。
        - 砰！
        - 身后的门被突然关上，%YOU%心头一紧，一双手从背后紧紧的抱住了%YOU%。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员好过分哦～这么长时间都没有跟小青亲热……」
        - 说完便抱着%YOU%扑到了床上。
        - 「小青——唔——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嘘——今天——谁也跑不掉哦～～」
    - if: d.check < 2
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜啊！！」
        - 只见青云天空光着身子，身上披着%YOU%未洗的衬衫，床上被她搅的十分凌乱。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员……那个……」
        - 她抱着你的枕头害羞的蜷缩着。
        - 看到自己搭档可爱的模样，这时%YOU%——
        - acc: 1
          content: 忍不了了！
        - acc: 2
          content: 默默关上门……（拒绝）


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


# 玩家生日 回合开始时触发 好感大于200
ws_happy_birthday:
  title: 生日快乐！！！
  lines:
    - 近期繁忙的工作让%YOU%感到心力憔悴。
    - 「哈……改完这一摞，还有……十摞……」
    - 「最近的工作怎么这么多……下午还有青云天空的训练……」
    - 「午饭的话……就随便买个三明治吧……」
    -
    - 下午——
    - %YOU%准时来到的训练室的门前，心里边祈祷着青云天空不要迟到边拉开门。
    - 砰！！！
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「生日快乐！训练员！！！」
    - 「呜！」
    - %YOU%推开门的同时一场礼花雨也落了下来，突然的爆破声让%YOU%呆愣在原地。
    - %YOU%用目光扫了下房间，并没有什么华丽的装饰，在桌子上立了一个大大的生日快乐牌子，旁边还有有一个不算好看但堆料满满的蛋糕。
    - （生日？）
    - （哦对，今天是我的生日……）
    - （天空这家伙……竟然还记得……）
    - （这蛋糕的造型真别致……）
    - （上面的都是……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？喂——训练员——摩西摩西？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奇怪，怎么没反应？难道是礼花崩到头了！！！训练员！！！」
    - 以为闯祸的青云天空连忙摇晃着%YOU%的肩膀。
    - 「停停停——天空天空，好啦我没事，只是没反应过来……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……真是的，没事就给点反应啊……」
    - 青云天空不满的揉揉%YOU%的脸
    - 「哈哈，抱歉抱歉，最近有点忙……」
    - 「小青，谢谢你，我很开心……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……的确……看你这重重的黑眼圈，最近应该很辛苦吧……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快来尝尝蛋糕！我亲手做的哦～不过造型嘛，可能差了点，但料我可是没少放哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天就好好放松下吧～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那最后再来一遍——生日快乐！训练员！」
