# @file 无声铃鹿 - 育成
# @author 牛蛙煲
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯，%CALLNAME%，尽快开始吧。」
  - %CHARA% 向%YOU%点点头，示意自己一切正常，随时可以开始训练。

train_success:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天的状况也是极佳呢。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我的成绩有进步吗？」
        - %YOU%向 %CHARA% 竖起了大拇指。
        - %CHARA% 颇为开心地笑了一下。

train_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哎呀！」
  - 远处的%YOU%看到铃鹿突然摔倒，急忙跑过去将%SEX%搀扶起来。
  - acc: 1
    content: 「铃鹿你感觉怎么样？有没有哪里特别疼？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「倒没有特别疼，只是感觉身体有点僵硬，腿也有些沉……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是绝对没有受伤！我还可以接着训练……嘶！」
  - %YOU%看了看铃鹿坚定的表情和已经快要站不稳的身形，叹了口气。
  - acc: 1
    content: 「对不起铃鹿，我不该勉强你的。我们去医务室吧。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%没关系的，我没问题的，还能接着……」
  - acc: 1
    content: 「如果你真的出了什么问题，我会内疚一辈子的。」
  - 见状，铃鹿不再坚持，低着头顺从地被%YOU%搀扶着去了医务室。

train_additional:
  - acc: 1
    content: 「铃鹿，可以休息了哦。」
  - %YOU%抛了抛手中的秒表，向刚刚跑完一轮的铃鹿说道。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「诶，原来已经这么晚了吗？」
  - %YOU%看着有些意外的铃鹿，有些无奈。
  - acc: 1
    content: 「是的，已经这么晚了，就请你回去好好休息吧？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那个，%CALLNAME%？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我还没有跑够呢，请问能让我再跑一圈吗？就一圈！」
  - 看着眼巴巴望着%YOU%的 %CHARA%，%YOU%决定——
  - acc: 1
    key: train
    content: 「好吧，就一圈。」
    lines:
      - 得到了%YOU%的许可之后，铃鹿小小地欢呼了一声。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「谢谢%CALLNAME%！那么我要开始了哦～」
      - %YOU%看着铃鹿如同流星一样疾驰的背影，有些出神。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜，还没感受到就跑完了，请再允许我跑一圈……」
      - ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「太阳还没有完全落下，还有时间再来一圈……」
      - ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「真的是最后一圈了，%CALLNAME%……」
      - ……
      - 如此多次，当铃鹿再一次向%YOU%提出请求的时候，%YOU%指了指天上的月亮。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶诶诶？完……完全没有注意到呢……」
      - %YOU%盯着铃鹿笑而不语。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那……那个，拜托不要再盯着我了，我这就回去休息，所以请不要这样子……」
      - 铃鹿被%YOU%盯得有些不好意思，不过总算没有了再跑一圈的想法。
  - acc: 2
    content: 「寝室长会生气的哦。」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜……可是我还没跑够……」
      - %YOU%看着铃鹿的耳朵一会儿耷拉下来一会儿又挺立起来，煞是可爱。
      - acc: 1
        content: 「今天的休息是为了明天能更加精力充沛地训练哦。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好吧，%CALLNAME%，我会去好好休息的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「可是还想跑……跑步回宿舍吧，虽然距离很短……」

race_start:
  - random: true
    lines:
      - 比赛开始前，%YOU%来到铃鹿的休息室，为%SEX%加油打气。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「状态相当不错，比赛能不能早些开始呢，呵呵。」
  - random: true
    lines:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「请期待着吧，%CALLNAME%，我会比任何一个对手都更早地冲线的。」

race_end:
  - if: d.rank === 1
    lines:
      - 竞赛获胜的铃鹿双臂张开，似乎是在享受胜利的喜悦。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「又一次，看到了那独特的风景……」
  - if: d.rank > 1 && d.rank <= 5
    lines:
      - %YOU%发现铃鹿有些心不在焉，有些出神的样子。
      - 「果然还是因为成绩吧……但是在那么多强敌里面拿到这样的名次，也不是很容易啊。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但是%CALLNAME%，我更希望独享先头的风景……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下次，一定不能让出去……」
      - 铃鹿双手握在一起，喃喃低语。
      - 「嗯，我相信铃鹿，下次一定会大幅领先的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯，一定会的！」
      - 铃鹿朝%YOU%挥了挥拳头，坚定地保证道。
  - if: d.rank > 5
    lines:
      - 铃鹿呆呆地盯着比赛揭示板，而上面并没有%SEX%的名字。
      - 这也就意味着，惨败。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「为什么……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「果然还是不够执着吗……」
      - acc: 1
        content: 「铃鹿，请记住这种感觉。」
      - 听到%YOU%的声音，铃鹿浑身一震。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……」
      - acc: 1
        content: 「下次，你会做得更好的。」
      - 听到这句话的铃鹿的心情似乎已经平复了。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯，下次……一定要赢。」

begin_race_win:
  title: 领放
  lines:
    - 在%YOU%的悉心教导之下，%CHARA% 毫无悬念地拿下了出道战的胜利。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%您看到了吗？我一直将前方的风景牢牢地把握在手里哦。」
    - acc: 1
      content: 「嗯，太棒了铃鹿，简直就像流星一样呢。」
    - 面对得胜归来的 %CHARA%，%YOU%真心地夸赞着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过在跑步的时候，我总感觉前方还有更美丽的风景在等着我……」
    - %CHARA% 有些专注地盯着比赛结束后的赛场，有些期待地说着。
    - acc: 1
      content: 「那就让我们以这次出道战为起点，一起向着极限前进吧！」
    - %CHARA% 似乎愣了一下，随后转向%YOU%，微笑起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，一起努力吧，%CALLNAME%！」

begin_race_lose:
  title: 后追
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「哎呀，非常可惜呢%CHARA%选手，最后与胜利失之交臂了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - %CHARA% 看起来很不甘心。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起，%CALLNAME%，我辜负了您的信任……」
    - %YOU%心情有些复杂地拍了拍 %CHARA% 的肩膀。
    - acc: 1
      content: 「铃鹿，一次失败算不得什么，后面还有数不清的风景在等着你呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「您说得对，不能就此停下脚步……」
    - %YOU%看到重新燃起斗志的 %CHARA%，欣慰地笑了。

begin_race_miss:
  title: 缺席
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，%CALLNAME%，我还是有点想不明白，明明计划好的……」
    - 出于某种未知的考虑，%YOU%没有让 %CHARA% 参与上周的出道战。
    - 「那个，铃鹿，我总感觉好像还差点什么，为了能给你带来一个完美的起跑线，所以只能……」
    - %YOU%擦了擦脑门上的汗，费尽口舌向 %CHARA% 解释道。
    - %CHARA% 蹙眉点了点头，看样子是勉强接受了这个说法。

new_year_classical:
  - %YOU%在训练员室里百无聊赖地坐着，时不时抬头看一眼墙上挂着的钟表。
  - acc: 1
    content: 「已经过去好久了……不会是出了什么意外吧？」
  - 今天将会是%YOU%与 %CHARA% 一起度过的第一个新年，所以%YOU%与%SEX%相约在训练员室碰头一起庆祝。
  - 但是已经过了约定的时间，%CHARA% 还没有出现……
  - %YOU%穿上了外衣，准备去找一下 %CHARA%。
  - 突然，训练员室的门被拉开了，一股冷风趁机灌了进来。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「实在是……抱歉，%CALLNAME%……我……刚刚跑步来着，跑起来就忘记时间了……」
  - %YOU%协助气喘吁吁的 %CHARA% 脱掉外套，听到%SEX%的解释后有些哭笑不得。
  - acc: 1
    content: 「铃鹿，有干劲是好事，但是现在是新年假期，还是好好休息一下比较好。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呜……我会好好休息的，%CALLNAME%。」
  - %YOU%悄悄松了一口气。
  - acc: 1
    content: 「好啦，铃鹿，现在就来庆祝一下我们认识之后的第一个新年吧。」
  - divider: true
  - 庆祝活动接近尾声时，%YOU%想到了一件事情。
  - acc: 1
    content: 「铃鹿，今天是经典年的第一天哎，原来不知不觉已经过去一年了呢。」
  - 经典年，是%UMA%生涯历程中至关重要的一年。那含金量十分之高的「经典三冠」与诸多著名的G1比赛，便是从经典年开始逐渐向%UMA%们开放。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是的呢，过去的一年也是辛苦%CALLNAME%了。」
  - 「经典年啊……我们一起向着经典年进军吧，铃鹿！一起横扫闪耀系列赛，独享前方的风景！」
  - %YOU%豪情万丈地向 %CHARA% 宣布了新一年的愿景。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯，我会与%CALLNAME%一起努力的！」
  - acc: 1
    content: 「那么经典年的第一个目标……」
  - %YOU%有些急不可耐地站起身来，跑到了办公桌前，开始翻找着什么。
  - acc: 1
    content: 「啊，找到了！铃鹿，经典年的前哨战，就决定是弥生赏了，怎么样？」
  - 弥生赏作为中距离G2比赛，向来被看作是「经典三冠」第一战「皋月赏」的前哨战。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「都可以的哦，%CALLNAME%，弥生赏……正好是我擅长的距离呢。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那么%CALLNAME%再见，为了迎接弥生赏，我想先去跑两圈……」
  - acc: 1
    content: 「哎呀铃鹿，今天可能还是休息一下比较好……」
  - 看到斗志满满甚至有些过于兴奋的 %CHARA%，%YOU%眨了眨眼，感觉有点头疼。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嘿嘿，对不起，还是有点太激动了……」
  - 就这样，%YOU%与 %CHARA% 找到了经典年的第一个目标——弥生赏。

# 第一次G1前
race_clothe:
  title: 决胜服
  lines:
    - if: era.get('cflag:2:48') === 47 + 4
      content: 在经典年的第一个月底，%CHARA% 收到了定制的决胜服。
    - if: era.get('cflag:2:48') !== 47 + 4
      content: 在第一次 G1 赛事前，%CHARA% 收到了定制的决胜服。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我的决胜服到了呢，能来帮我看看合不合适吗？」
    - acc: 1
      content: 「很可爱的决胜服呢，非常适合铃鹿。」
    - %YOU%看着穿着白绿相间的决胜服转个不停的 %CHARA%，微微一笑。
    - 看来 %CHARA% 很喜欢自己的新决胜服。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「穿上决胜服后感觉整个人都不一样了呢，%CALLNAME%，我现在去跑两圈体验一下！」
    - 说完，%CHARA% 就要跑出训练员室去了。
    - acc: 1
      content: 「可是铃鹿，现在已经是晚上了哦。」
    - %YOU%无奈地指了指墙上的表。
    - %CHARA% 讪笑着退了回来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可能是穿上新衣服后太兴奋了吧……」
    - divider: true
    - 次日清晨，%YOU%特意起得很早，来到了学园的主干道上。
    - 果然，%YOU%没有等很久，就远远地看到了一抹鲜艳的色彩。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼……呼……诶？%CALLNAME%？您不会是特地在这里等我的吧……」
    - 「确实是这样的哦，我早就猜到铃鹿会忍不住起得很早来跑步，所以也起得很早。」
    - %YOU%成功「逮」到了穿着决胜服晨跑的 %CHARA%，为此有些得意。
    - acc: 1
      content: 「铃鹿，穿着决胜服跑步的感觉怎么样？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感觉棒极了！尤其是决胜服的颜色，很符合我的喜好呢。」
    - %CHARA% 捏了捏衣服的布料，一副爱不释手的样子。
    - %YOU%又细细打量了一下 %CHARA% 的白绿色的决胜服。
    - acc: 1
      key: attr
      content: 「原来你喜欢白色啊。」（力量+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……因为白色很容易让人联想到雪，大雪过后的世界总是静谧而美好的。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我在跑步的时候，也很享受这种美好的静谧呢。」
    - acc: 2
      content: 「原来你喜欢绿色啊。」（根性+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「绿色有种万物复苏的感觉，跑起来就像有风在推着我向前。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「所以，跑步的时光总是不知不觉就过去了呢。」
    - %YOU%若有所思地点点头。
    - acc: 1
      content: 「原来是这样子啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以%CALLNAME%请允许我再去跑一会……」
    - %CHARA% 有些意犹未尽的样子。
    - acc: 1
      content: 「可是，快要上课了哦，铃鹿不去提前做些准备吗？」
    - %CHARA% 这才注意到时间不早了，跟%YOU%告别后匆忙离开了。

# 弥生赏参赛后
# 干劲+1
secret_base:
  title: 秘密基地
  lines:
    - 弥生赏后的某一天，%CHARA% 敲开了训练员室的门。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%在吗？」
    - acc: 1
      content: 「怎么了，铃鹿？」
    - %CHARA% 小心翼翼地把门开得大了一些，钻了进来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，请问您有空吗？我想邀请您一起去爬山。」
    - acc: 1
      content: 「爬山？好新奇的请求啊，会很远吗？」
    - %CHARA% 突然到来并邀请%YOU%同去爬山，这使得一直在处理文件的%YOU%有些感兴趣了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔，不会很远的。」
    - acc: 1
      content: 「那请等我几分钟，我稍做准备……」
    - divider: true
    - 之后，%YOU%跟着%CHARA%来到了学园附近的某座山的山脚。
    - acc: 1
      content: 「铃鹿，为什么会突然邀请我来爬山呢？」
    - %CHARA% 微微一笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等我们爬到上面，您就明白了。」
    - 于是，%YOU%跟在 %CHARA% 身后，手脚并用地开始攀爬这座并不算矮的山。
    - acc: 1
      content: 「呼……呼……比想象中要累呢，果然还是有些缺乏锻炼了……」
    - %YOU%与 %CHARA% 爬了许久的山，尽管现在乃是春天，但%YOU%早已汗流浃背。
    - 反观一直走在你前面的 %CHARA%，仅仅是出了一层薄汗。
    - 果然，普通人类还是远远比不上%UMA%的身体素质……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，要不我们休息一下吧？」
    - %CHARA% 退回到%YOU%的身边，关切地询问道。
    - acc: 1
      content: 「铃鹿不用等我的，你先去山顶上吧，我慢慢地爬也是可以爬上去的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行哦，%CALLNAME%？至少这一次，请允许我与您一起到达终点……」
    - %YOU%被 %CHARA% 不由分说地按住休息了一会。
    - 休息得差不多后，%YOU%与 %CHARA% 一起，一鼓作气爬上了山顶。
    - acc: 1
      content: 「好美……」
    - 在这座山的山顶刚好可以把周边的美丽春光收入眼中，来的路上受的累似乎也算不得什么了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，这里的风景怎么样？」
    - acc: 1
      content: 「太美丽了，铃鹿你是怎么找到这么神奇的地方的啊？」
    - %CHARA% 轻轻地靠着%YOU%坐了下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「之前某次晨跑路过这座山的时候，直觉告诉我这座山的山顶会非常美丽，于是我就来到了这里。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「后来，每次压力大的时候，我都会来这里。看着山下的景色，我便会由衷地感到轻松与喜悦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这里是我的『秘密基地』，%CALLNAME%您可是除了我之外第一个知道这个地方的人哦。」
    - acc: 1
      content: 「那可真是太荣幸了。不过话说回来，铃鹿为什么要第一个带我来到这里呢？」
    - %CHARA% 似乎坐得更靠近%YOU%了一点。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%让我能看到远方的风景，但自己却没办法看到。所以我希望能带您上来，让您也看一看我所热爱的『远方的风景』。」
    - %YOU%歪头看了看一旁的 %CHARA%，只见%SEX%脸上挂着一副满足的微笑。
    - %YOU%心中一动，感觉似乎有什么无形的隔阂被打破了。

# 经典年庙会
turn_overcast:
  title: 晴转阴
  lines:
    - 紧张充实的夏季集训已经过去了一半，此时正是人困马乏的节点。
    - 于是，为了放松一下集训开始以来紧绷的精神，%YOU%打算邀请铃鹿去参加庙会。
    - %YOU%来到在休息区等待铃鹿，但铃鹿一直没有出现。
    - 此时%YOU%大概猜到铃鹿在哪里了，于是有些无奈地站起身来。
    - acc: 1
      content: 「喂，铃鹿，训练早就结束了，休息一下吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「诶？%CALLNAME%您怎么在这里？」
    - 果然，铃鹿已经换好了跑步穿的衣服，正准备再去多跑一会。
    - acc: 1
      content: 「铃鹿，今天可是有庙会哦？作为一年一度的活动，如果错过了岂不是很可惜吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「庙会……可是我还想先跑一会，要不%CALLNAME%先去吧，我跑够了会去找您的。」
    - acc: 1
      content: 「等到铃鹿跑够了，说不定明年的庙会都结束了呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么可能那么夸张！%CALLNAME%骗人的吧……」
    - 最终还是说服了铃鹿与%YOU%同行。
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「庙会，好热闹啊，大家都很享受呢。快看，%CALLNAME%，那里有人在卖刨冰哎！」
    - 原本%YOU%还在担心铃鹿无法融入庙会的气氛中去，不过现在看来不必为此担心了。
    - 看到铃鹿似乎对刨冰很感兴趣，%YOU%便带着铃鹿来到了卖刨冰的小摊，买了两杯刨冰。
    - acc: 1
      content: 「来，铃鹿，这是你集训期间努力训练的奖励～」
    - %YOU%把其中一杯刨冰递给铃鹿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的吗？谢谢%CALLNAME%！嗯，好甜！」
    - acc: 1
      content: 「铃鹿，坐下来慢慢吃吧。」
    - 铃鹿乖巧地靠着你坐了下来。
    - if: d.hoch_sho === 1
      lines:
        - content:
            - fontWeight: bold
              content: 实况
            - 「%CHARA%一马当先，已经是压倒性的胜利了！」
        - 突然听到了实况的声音，%YOU%与铃鹿同时转过头来寻找声源。
        - 原来是小摊摊主的电视机，正在播放着铃鹿弥生赏胜利的视频。
        - acc: 1
          content: 「那时的铃鹿，真的是又帅气又厉害呢。」
        - %YOU%由衷地夸奖着铃鹿。
        - 可是铃鹿没有回应%YOU%，%SEX%似乎在专心观看比赛。
        - %YOU%顺着%SEX%的目光看过去，发现导播恰好给了被铃鹿落得很远的第二名一个镜头。
        - 第二名的%UMA%脸上满是汗水，也在非常拼命地奔跑着，但是却被铃鹿落得越来越远。
        - acc: 1
          content: 「也是很有实力的孩子呢，可惜还是铃鹿更有实力一点。那个，铃鹿？」
        - %YOU%发现铃鹿的心情好像变得有些低落。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我、我没事，%CALLNAME%，我们赶紧吃完回去休息吧，好像有点累的样子……」
        - 铃鹿向%YOU%勉强挤出一个微笑。
        - %YOU%有点搞不明白状况，但还是尽快把铃鹿送回了休息的地方。 # +失意
    - if: d.hoch_sho > 1
      lines:
        - content:
            - fontWeight: bold
              content: 实况
            - 「人气选手%CHARA%，究竟能否得到胜利……哎呀有些可惜，%CHARA%选手出现了一个关键的失误！」
        - 突然听到了实况的声音，%YOU%转过头来寻找声源。
        - 原来是小摊摊主的电视机，正在播放着弥生赏的视频。
        - acc: 1
          content: 「铃鹿……？」
        - %YOU%不无担心地看向铃鹿。
        - 铃鹿没有回应%YOU%，%SEX%正在紧紧盯着自己失误的那个瞬间。
        - 直到比赛回放结束了，铃鹿才回过神来。
        - %YOU%发现铃鹿的心情好像变得有些低落。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我们、我们回去吧。」
        - 铃鹿向%YOU%勉强挤出一个微笑。
        - %YOU%不知道该怎么安慰铃鹿，只能尽快把铃鹿送回了休息的地方。 # 干劲-1
    - if: "!d.hoch_sho"
      lines:
        - content:
            - fontWeight: bold
              content: 实况
            - 「各位参赛选手一起冲出了闸门，非常漂亮的起跑！」
        - 突然听到了实况的声音，%YOU%与 %CHARA% 同时转过头来寻找声源。
        - 原来是小摊摊主的电视机，正在播放着弥生赏的视频。
        - acc: 1
          content: 「铃鹿……？」
        - %YOU%不无担心地看向 %CHARA%，因为%SEX%缺席了这场理应参加的比赛。
        - %CHARA% 没有回应%YOU%，%SEX%的目光有些发散，但是始终在看着全力奔跑的%UMA%们。
        - 直到比赛回放结束了，%CHARA% 也没有回过神来。
        - acc: 1
          content: 「铃鹿，我们走吧，今天晚上早点休息，好吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……」
        - %CHARA% 像梦呓一样答应了，有些心不在焉地跟着%YOU%回到了休息的地方。 # 干劲-2

# 夏合宿结束
turn_cloudy:
  title: 阴转多云
  lines:
    - 一年一度的夏季集训结束了，来集训的大家正在兴高采烈地收拾个人物品，准备返回学园。
    - 而%YOU%此刻有些不解，因为%YOU%的担当 %CHARA% 并不在那群叽叽喳喳的%UMA%当中，而%SEX%的个人物品也没有收拾。
    - 在问过几位%UMA%得到铃鹿今天早上出去晨跑还没有回来的消息后，%YOU%有些坐不住了，决定去找一下铃鹿。
    - acc: 1
      content: 「铃鹿！铃鹿你在哪，铃——」
    - 有些出乎%YOU%意料的是，%YOU%很快便找到了独自一人坐在海边的铃鹿。
    - %SEX%坐在沙滩上，出神地望着大海，对%YOU%的呼唤充耳不闻。
    - %YOU%没有继续呼唤%SEX%，而是轻轻坐在了%SEX%的身边。
    - acc: 1
      content: 「有什么不高兴的事情吗，铃鹿？如果有的话可以跟我说一下哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我感觉有些不太对劲……」
    - 铃鹿轻飘飘地说道。
    - 闻言，%YOU%愣了一下。
    - 确实，铃鹿在整个集训的后半段一直有种失魂落魄的感觉，好像变成了一台机器那样，只是机械地执行%YOU%的指令罢了。
    - acc: 1
      content: 「可以请铃鹿具体描述一下吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我这几天一直在思考奔跑的意义……」
    - if: d.hoch_sho === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我可以在比赛中独享前方的风景，就像晨跑时一样。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但是比赛时的大家，却因为我而完全失去了前方的风景……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我只是在享受比赛本身罢了，但是大家说不定有必须获胜的理由，这样一来，是不是对大家不太公平呢？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「或者说，我亲手毁掉了%THEY%的梦想……」
        - %YOU%听到了铃鹿的这一番话，才想起来，%SEX%正是从庙会上的那个第二名特写镜头开始，变得如此无精打采的。
        - acc: 1
          content: 「既然是比赛，那么各有胜负是很正常的，完全不必为此担心。」
        - 铃鹿转过头来看向%YOU%，正好对上了%YOU%的坚定的眼神。
        - acc: 1
          content: 「这样吧，铃鹿，假如你在比赛中发现一位劲敌，每次都会抢走你的风景，你会怎么做呢？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我，我会……我会把%SEX%当成新的目标，直到有一天能够正面超过%SEX%，夺回属于我的风景……」
        - %YOU%满意地点了点头，因为%YOU%从铃鹿的眼中看到了对强敌的渴望。
        - acc: 1
          content: 「所以铃鹿，你在追逐前方的风景的时候，同时也成为了其他对手的梦想啊。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大家……真的是这么想的吗，%CALLNAME%？」
        - %YOU%没有回答铃鹿的问题，而是静静地看着铃鹿的侧脸。
        - 许久之后，铃鹿站起身来，拍了拍身上的沙子。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「谢谢您，%CALLNAME%，我不知道我是不是想明白了，但是至少比刚才好受多了。」
        - %YOU%同样站起身来，看了看远处的宿营地。
        - acc: 1
          content: 「走吧，铃鹿，我们回学园。或许在下一场比赛中，你会找到真正的答案。」 # 失意 -> 难过
    - if: d.hoch_sho > 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明明在晨跑时，不会在意这些的……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但是比赛时的大家，是那么拼尽全力，那么闪闪发亮……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%THEY%似乎有什么非赢不可的理由，我……我不知不觉就被%THEY%吓到了……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我感觉我对于胜利的执着，可能远远比不上比赛时的大家，可是我明明也很想要赢……」
        - %YOU%听到了铃鹿的这一番话，才想起来，%SEX%正是从庙会上的那个失误的镜头开始，变得如此无精打采的。
        - acc: 1
          content: 「铃鹿，偶尔的失误再正常不过了。而且，不肯让出前方无人的风景，难道不也是对胜利的执着吗？」
        - 铃鹿转过头来看向%YOU%，正好对上了%YOU%的坚定的眼神。
        - acc: 1
          content: 「这一次没能独占先头的风景，那就在下一次把它夺回来！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我，我明白了，%CALLNAME%，谢谢您的点拨……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「下一场比赛，我会将胜利带回来的，不只是为了我，也是为了您……」
        - %YOU%满意地点了点头，因为%YOU%从铃鹿的眼中看到了对胜利的渴望。
        - 铃鹿站起身来，拍了拍身上的沙子。
        - %YOU%同样站起身来，看了看远处的宿营地。
        - acc: 1
          content: 「走吧，我们回学园。」 # 干劲+1
    - if: "!d.hoch_sho"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「先头的风景，明明在晨跑的时候，已经看过无数次了……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但是一看到比赛时的大家，我的心里就像是缺了一块一样，似乎……我也应该站在那里……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「然后肆意奔跑，再一次独享美景……」
        - %YOU%听到了铃鹿的这一番话，才想起来，%SEX%正是从庙会上的弥生赏重播开始，变得如此无精打采的。
        - acc: 1
          content: 「下一次，铃鹿，下一次你将会是%THEY%之中最亮眼的一个。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「下一次……吗……希望如此吧。」
        - %CHARA% 站起身来，拍了拍身上的沙子。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「谢谢您的鼓励，%CALLNAME%，下次我会努力的。」
        - %YOU%同样站起身来，看了看远处的宿营地。
        - acc: 1
          content: 「走吧，该收拾东西了。」
        - %YOU%走在 %CHARA% 身后，突然有种说不上来的窒息感。

# 神户新闻杯入着
kobe_hai_end:
  title: 多云转晴
  lines:
    - if: d.rank === 1
      lines:
        - content:
            - fontWeight: bold
              content: 实况
            - 「%CHARA%以绝对的优势——冲线！」
        - 站在观众席最前面的%YOU%看到铃鹿开心的样子，悄悄松了一口气。
        - acc: 1
          content: 「看来参加这次比赛是正确的决定。」
        - 之后，%YOU%有些惊讶地发现铃鹿向你跑了过来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我，我彻底想明白了！谢谢您！」
        - %YOU%看着明显是有些激动的铃鹿，微笑着让%SEX%放轻松。
        - acc: 1
          content: 「希望这次，铃鹿你能找到属于自己的答案。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，我已经找到了。不过，我更希望通过下一场比赛来进一步检验它的正确性。」
        - %YOU%点了点头，很高兴能再次看到那个内心纯粹的铃鹿。
        - acc: 1
          content: 「去吧，铃鹿，享受独属于你的胜利吧！」 # -失意/难过，干劲+1
    - if: d.rank > 1
      lines:
        - content:
            - fontWeight: bold
              content: 实况
            - 「%CHARA%正在拼命追赶，但是还是差了一点吗……比赛结束了，%CHARA%与胜利失之交臂！」
        - %YOU%紧紧盯着揭示板，上面虽然有铃鹿的名字，但不是第一个——
        - %YOU%低下头一言不发，双手插在口袋里，看起来风平浪静，实则双手已经紧紧地攥成了拳。
        - 夏季集训结束的时候%YOU%曾经开导过铃鹿，那时%SEX%看起来已经有了再次尝试的勇气，但是这次……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我回来了哦。」
        - %YOU%听到了熟悉的声音，猛然抬起头来，才发现铃鹿已经走到了%YOU%的面前。
        - acc: 1
          content: 「铃鹿，你……」
        - %YOU%本来想说些什么来安慰一下铃鹿，结果发现竟不知道该说些什么。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没有关系的哦，%CALLNAME%。」
        - %CHARA% 认真地看着%YOU%。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然这次没能坚持到最后，但是我在比赛中有好好思考过的。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然还是没有想明白，但是我觉得……下一场比赛，或者下下场，我一定会找到属于我的答案的。」
        - %YOU%不知道该说些什么，最后只得憋出来一句不是很通顺的话。
        - acc: 1
          content: 「那就好，铃鹿，至少是有解决的希望的……」 # -失意/难过

# 输或者未出走
kobe_hai_lose:
  title: 多云再转阴
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我……」
    - 神户新闻杯后的某一天，%YOU%与铃鹿在训练员室内观看比赛录像时，铃鹿有些难过地欲言又止。
    - %YOU%同样有些垂头丧气，因为这场比赛看起来对铃鹿的问题一点用处都没有。甚至……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起，%CALLNAME%，我……我感觉我的问题更严重了。」
    - %YOU%一时间不知道该说些什么，只得关掉了比赛的录像，试图转移自己与铃鹿的注意力。

# 经典年10月1周
first_step:
  title: 命定的第一步
  lines:
    - 十月的某一天，%YOU%请铃鹿来到训练员室，共同商讨下一步的目标。
    - acc: 1
      content: 「铃鹿，经典年已经过了大半了，在我眼里你已经是一位非常有实力的%UMA%了呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢您的赞美，%CALLNAME%！」
    - 「所以我认为，我们下一步的目标，可以试着去设置成一些更有含金量的比赛了。」
    - %YOU%向铃鹿说明了自己的打算，而铃鹿似乎也在思考着这项计划的可行性。
    - acc: 1
      content: 「那么，铃鹿有什么想法吗？」
    - %YOU%顺手将桌边的比赛日历递给%SEX%。
    - 铃鹿接了过来，开始认真地翻阅。
    - 过了一会，铃鹿把比赛日历还给了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我决定了，我打算参加『秋季天皇赏』！」
    - acc: 1
      content: 「很好，铃鹿，既然有了明确的目标，就要开始不懈努力了哦。」
    - 对于铃鹿选择的目标，%YOU%并没有感到很意外。
    - 秋季天皇赏，作为秋三冠之一，是中距离赛事中知名度颇高的顶级G1赛事。
    - 而且，这项比赛并没有限制参赛选手的资历，经典年的新秀们可以与资深年的精英们同台竞技，也是非常激动人心的一场竞赛。
    - %YOU%并没有询问铃鹿是哪一年的秋季天皇赏，因为经典年的秋季天皇赏还有不到一个月，是无论如何也来不及的。
    - 不过，资深年的秋季天皇赏是在足足一年多以后，这之间的空窗期是无论如何也不能浪费的。
    - 于是，%YOU%将比赛日历向前翻了几页，手指划动间找到了下一个合适的小目标。
    - acc: 1
      content: 「在那之前……铃鹿，先挑战金鯱赏吧。」
    - 金鯱赏作为标准的中距离G2赛事，其知名度要略高于弥生赏与神户新闻杯，刚好当作铃鹿挑战秋季天皇赏路上的第一块垫脚石。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，那就参加金鯱赏，请相信我吧，%CALLNAME%！我一定会拿到最终的胜利，向远方的风景再次迈出一步……」
    - 就这样，%YOU%与铃鹿确定了未来的头等目标秋季天皇赏，以及在这之前的小目标金鯱赏。

# -失意/难过
new_year_senior:
  - 今天是资深年的第一天，也是%YOU%与 %CHARA% 相遇的第三个年头的开始。
  - 在过去的一年，铃鹿在%YOU%的悉心教导下，转战于各类中距离赛事，并因此成为了颇具名气的领放%UMA%。
  - %YOU%一边这么想着，一边坐在自己的办公桌前无聊地转着手中的笔，时不时还会抬头看一眼墙上的表。
  - 明明是在训练员室内，%YOU%却穿上了厚重的外出衣物。
  - 又过了一会，突然有轻柔的敲门声响起。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「请问%CALLNAME%在吗？」
  - %YOU%立刻站起身来，打开了训练员室的门。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「新年快乐，%CALLNAME%～」
  - 门外是被厚厚的羽绒服裹起来的铃鹿。%SEX%见到%YOU%打开了门，便微笑着为你送上了第一句祝福。
  - %SEX%围着长长的围巾，由于是刚从室外进来的缘故，小脸被冻得红扑扑的，煞是可爱。
  - 被自己的担当盯着，%YOU%反而有些害羞。
  - acc: 1
    content: 「也祝你新年快乐，铃鹿！」
  - %YOU%竟有些不敢直视自己的担当了。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呵呵，既然%CALLNAME%已经准备好了，那我们就出发吧？」
  - 似乎是看出了%YOU%的窘迫，铃鹿微笑着转移了话题。
  - 由于确定了资深年的目标乃是重量级赛事「秋季天皇赏」，%YOU%便与铃鹿相约同去神社祈福。
  - divider: true
  - %YOU%与铃鹿在冬季特有的寂寥气氛中，不紧不慢地行走着。
  - 可能是因为新年的缘故吧，路上鲜少见到成群的行人。就算有独行者，也多半是将大半张脸藏在围巾里，匆匆地行走着。
  - 这样看来，%YOU%与铃鹿倒像是这天地间唯二的生灵。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呵呵……」
  - %YOU%正在享受这种独特而美好的感觉，却听到一旁的铃鹿轻轻笑了起来。
  - acc: 1
    content: 「发生了什么吗，铃鹿？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「没有哦，我只是觉得，这次居然能与%CALLNAME%共享无人的风景，不管是对于我还是对于您来讲，都算是一次新奇的体验吧？」
  - %YOU%下意识地放慢了脚步，希望到神社的路能再长一些。
  - 可惜，神社本就离学园不远，很快也就到达了。
  - 对此，%YOU%只得轻叹一口气，带着铃鹿按照预定计划开始祈福。
  - acc: 1
    content: 「……希望我与铃鹿在新的一年里能够一路向前，顺利将天皇赏的盾徽拿下……」
  - 因为并没有什么其他需要祈福的事情，%YOU%很快就为铃鹿的天皇赏送上了虔诚的祝福。
  - 之后，%YOU%向一旁瞟了一眼，有些惊讶地发现铃鹿依旧保持双手合十正在祈福的姿势。
  - 又过了一会，铃鹿才睁开双眼，察觉到了%YOU%的目光，并报之以微笑。
  - %YOU%突然有些好奇铃鹿祈福的内容。
  - acc: 1
    content: 「那个，铃鹿，请问我能问一下你祈福的内容吗？」
  - 问出这句话后，%YOU%突然感到有一种莫名其妙的羞意。
  - 明明是正常地向自己的担当问问题，怎么会……
  - if: (t=era.get('love:2')) < 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是『要赢下天皇赏』哦？」
      - 铃鹿似乎是没有注意到%YOU%的窘迫，微笑着说出了自己祈福的内容。
      - 倒也是意料之中，但是%YOU%却意外地对提出这个问题有点害羞。
      - acc: 1
        content: 「那个……既然已经祈福完毕，那我们就往回走吧？」
      - %YOU%没有对铃鹿的回答作出任何评价，而是试着转移话题。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯，%CALLNAME%新的一年也要加油哦。」
      - 铃鹿并没有过问什么，只是自始至终微笑着跟着%YOU%回到了学园。
  - if: t >= 50 && t < 90
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是『要与%CALLNAME%一起，赢下天皇赏』哦？」
      - 铃鹿微笑着说出了自己祈福的内容，居然与%YOU%心中所想一模一样。
      - acc: 1
        content: 「哇，铃鹿，我们祈福的内容简直是一模一样哎。」
      - %YOU%有些兴奋地说道。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这说明我与%CALLNAME%已经建立起很强大的羁绊关系了！您看，我们连想法都是一样的呢。」
      - 铃鹿似乎比%YOU%更加高兴的样子。
      - acc: 1
        content: 「那真是再好不过了，我们回去吧，新年的第一天还有很多事情需要做呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯，走吧！我也很期待与%CALLNAME%的新的一年呢，呵呵～」
  - if: t >= 90
    lines:
      - 可是，出乎%YOU%意料的是，一旁的铃鹿竟直接将脸转了过去。
      - acc: 1
        content: 「铃鹿？没事吧？」
      - %YOU%关心地问道，反而忘记了自己的羞意。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「没、没事，我没事，%CALLNAME%……」
      - 铃鹿的声音细如蚊蚋，怎么听都不像是没事的样子。
      - acc: 1
        content: 「铃鹿？」
      - %YOU%轻轻地捧起铃鹿的脸蛋，把%SEX%的脸向%YOU%的方向转动了些许。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊，%CALLNAME%，您在干什么，这附近说不定还有人呢……」
      - 铃鹿被%YOU%的举动吓了一跳，声音更小更细了。
      - 而%YOU%也趁机观察到了铃鹿的状态：%SEX%的脸红红的，就像熟透的水蜜桃那样。
      - %YOU%不由得愣了一下。
      - 铃鹿绿宝石色的瞳孔也偏向了一边，似乎在躲避着与%YOU%的对视。
      - acc: 1
        content: 「铃鹿真的没事吗？可是你这样怎么都不像是没事的样子哦？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我真的没事的，%CALLNAME%！」
      - 下一刻，铃鹿竟挣脱了%YOU%的手，捂着脸便向神社外冲出去。
      - acc: 1
        content: 「哎，铃鹿！要注意脚下啊！」
      - 见到铃鹿的所作所为，%YOU%内心更加疑惑了，但%YOU%已经来不及思考那么多了，只得跟着铃鹿一起离开神社。

# 金鯱赏前三
kink_sho_3:
  title: 再起
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，今天我跑得很高兴哦！」
    - %YOU%看着刚刚跑完步却又十分兴奋的铃鹿，心里也高兴起来。
    - 既然已经确定好了目标，那就应该有个向着目标努力的样子。
    - 而铃鹿在刚刚结束的金鯱赏中的亮眼表现，便充分证明了%SEX%的实力以及决心。
    - acc: 1
      content: 「铃鹿好厉害呢，这样我们就更有信心挑战天皇赏了！」
    - %YOU%由衷地夸奖着铃鹿。

# 金鯱赏第四以后
kink_sho_4:
  title: 蛰伏
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「哎呀，非常可惜呢%CHARA%选手，离胜利明明就差一点呢。」
    - 坦白来说，%YOU%是有些失望的。
    - 其实铃鹿一开始还是有一定的优势的，直到后面一次决策失误，便一发不可收拾。
    - 不过%YOU%总感觉，哪怕是把%YOU%放到铃鹿的位置上去，%YOU%也不会做出更加合适的决定了。
    - 这样的话，天皇赏……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起，%CALLNAME%，我也没有想到我居然会犯下那样的错误……」
    - %YOU%看着面前耷拉着双耳的铃鹿，根本提不起一点批评或者指责的想法来。
    - 许久之后，%YOU%叹了口气。
    - acc: 1
      content: 「没关系的，铃鹿。好好分析一下这次比赛的失误，下次比赛就不要再犯了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我会的，%CALLNAME%。那个，虽然现在说可能不太合适，但是我这次比赛也有在好好享受哦。」
    - %YOU%点了点头，至少铃鹿的心态还是很不错的。那么，现在开始积蓄力量，找到机会一飞冲天，也不是不可能……

kink_sho_miss:
  title: 缺席
  lines:
    - 今天的天气正好，本来应该抓住机会好好训练的，但是……
    - 但是铃鹿还没有出现。
    - %YOU%有些疑惑地看了一眼天上的太阳，现在正是阳光明媚的上午，铃鹿怎么也没有可能错过训练吧……
    - 于是%YOU%只得动身去寻找铃鹿。
    - divider: true
    - acc: 1
      content: 「铃鹿？你……你怎么在这里？」
    - %YOU%转遍了大半个学园都没有找到铃鹿，本来垂头丧气地打算回到训练员室给%T_NAME%打电话，却意外发现了铃鹿。
    - 此时，铃鹿正沉默地坐在训练员室的电视机前，看着电视机播放的金鯱赏录像。
    - 看到这一幕，%YOU%竟一同沉默了，不知道该说什么好。
    - 铃鹿听到%YOU%开门的声音，便默默地站起身来，关掉了电视机。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们走吧，%CALLNAME%。」
    - 随后%SEX%便与%YOU%擦肩而过，自顾自地向训练员室外面走去，而%YOU%恰好有机会能看到%SEX%的侧脸。
    - %YOU%有些惊讶，因为%SEX%的表情平静至极，看不出一丝一毫的情感波动。
    - 这使得%YOU%莫名有些恐惧。
    - 铃鹿已经离开了训练员室，于是%YOU%无暇多想，只得一言不发地跟了上去。
    - 还好，铃鹿并没有做出什么出格的举动，只是像往常一样来到了训练场，开始了一天的训练，一切正常。
    - 真的，一切正常吗……？
    - %YOU%赶紧摇了摇头，把这个想法从脑中驱赶出去。

# 资深年3月3周
second_step:
  title: 命定的第二步
  lines:
    - acc: 1
      content: 「是这样的，铃鹿……」
    - %YOU%看了一眼对面正襟危坐的铃鹿，把玩了一下手中的比赛日历。
    - acc: 1
      content: 「秋季天皇赏还有足足大半年，为了填补这一段空窗期，我觉得你可以再去跑一场比赛……」
    - %CHARA% 乖巧地点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%请随便吩咐。」
    - acc: 1
      content: 「鉴于铃鹿已经在各大G2级别比赛中崭露头角，我认为铃鹿可以试着挑战一下G1了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好的，%CALLNAME%。」
    - acc: 1
      content: 「那么，大阪杯怎么样？维多利亚英里赛也不错的样子，还是说安田纪念会更好一点？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都可以的哦，%CALLNAME%。」
    - %YOU%像是突然噎住了一样。许久，%YOU%才颇有些无奈地开口。
    - acc: 1
      content: 「铃鹿啊，这次我可是在征求你的意见哦？你可以更有主动性一点的嘛。」
    - 说完，%YOU%便将手中的比赛日历递给铃鹿。
    - 没想到，铃鹿很快便给出了选择。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，那就选『宝冢纪念』吧。」
    - 作为粉丝投票选出参赛选手的比赛，同样也是春三冠的最后一冠，宝冢纪念的含金量甚至可以与铃鹿的终极目标秋季天皇赏一较高下。
    - 不过，铃鹿似乎完全没有考虑粉丝的问题。
    - 这就是强势%UMA%的自信吧。
    - %YOU%收回发散的思绪，向铃鹿比了个大拇指。
    - acc: 1
      content: 「很棒的选择，铃鹿。我相信你一定会跑出好成绩来的。」

takz_kin:
  title: 宣战
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，要上了。」
    - color: %A_COLOR%
      content: %CHARA% 看着已经分外熟悉的闸门，暗自给自己打气。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「%CHARA%同学，请留步。」
    - color: %A_COLOR%
      content: %CHARA% 听到有%UMA%在喊自己的名字，有些疑惑地回过头来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，原来是 %CALL_18%，这次比赛也请你手下留情哦。」
    - color: %A_COLOR%
      content: 来者是 %CHARA% 的同学 %A_NAME%，同样也是资深的中距离%UMA%，比赛经验一点也不比 %CHARA% 少。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「呵呵，请手下留情什么的，应该是我对你说才对吧。」
    - color: %A_COLOR%
      content: %A_NAME%也笑了笑，同样可以从%SEX%眼中看到对胜利与强敌的渴望。
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「啊啦，这里这么热闹的吗？」
    - color: %A_COLOR%
      content: %CHARA% 与%A_NAME%一起回头，看到了另一位很有实力的同学%G_NAME%。
    - color: %A_COLOR%
      content: %G_NAME%是 %CHARA% 与%A_NAME%的后辈，但是实力却不容小觑，其在经典年的竞赛中也是接连斩获殊荣。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「啊，你也来参加宝冢纪念了啊，那这场比赛我可得全力以赴了哦，一定不会轻易把胜利让给你们的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，我也会比你们任何一位都更早地到达终点线。」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「既然二位前辈战意昂扬，那我也得好好应对了呢。这次比赛我也同样会拿下，就像之前一样哦。」
    - color: %A_COLOR%
      content: 三位%UMA%彼此对视，都从对方的眼中看到了战意。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「时间不早了，各位，我们开始吧！」

takz_kin_win:
  title: 争先
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼，呼……」
    - color: %A_COLOR%
      content: %CHARA% 在巨大的揭示板下喘息着，时不时抬头看一眼揭示板最上面自己的名字。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「赢下了呢。」
    - color: %COLOR%
      content: 在刚刚结束的宝冢纪念中，%CHARA% 与两位强敌正面交锋，并最终胜出，夺得了冠军。
    - color: %COLOR%
      content: 想到这里，哪怕是恬淡如 %CHARA%，也开始有些自豪地微笑起来。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「果然，铃鹿你的实力果然像传闻中的那么强。」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「%11_CALL%的超级领放可着实是难以招架呢，如果没有在一开始就拦住%11_CALL%，那么后面就再也没有机会了。」
    - color: %COLOR%
      content: 两位强敌%UMA%慢慢走了过来与 %CHARA% 并肩站立，有些感慨地说道。
    - color: %COLOR%
      content: %CHARA% 并没有从%THEY%二人的眼中看到懊悔，只有羡慕与对强敌的憧憬。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「两位的实力也是不容小觑呢，呵呵。其实就在刚刚比赛的时候，两位还给了我不小的压力呢。」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「那么，请允许我提前向你宣战——铃鹿，下一次在赛场上遇到你的时候，我可就要给你更大的压力了哦。」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「或者，我们会直接超过%11_CALL%，亲自感受一下%11_CALL%所说的压力……」
    - color: %COLOR%
      content: 两位%UMA%轻描淡写间便向 %CHARA% 下达了下一次的宣战书。
    - color: %COLOR%
      content: %CHARA% 看了看两位对手，轻笑起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，我也很期待与两位的下一次比赛呢。还有，最前头的风景，我是绝对不会轻易让出来的！」
    - color: %COLOR%
      content: 三位%UMA%都从彼此的眼中看到了如火的热情。

takz_kin_3:
  title: 并肩
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「输了……」
    - color: %COLOR%
      content: 巨大的揭示板上面，第一名赫然是%G_NAME%。
    - color: %COLOR%
      content: 比赛刚开始，%CHARA% 就按照预定计划一马当先抢占了第一名的位置。
    - color: %COLOR%
      content: 直到终盘，%G_NAME%以常人难以想象的根性渐渐逼近了 %CHARA%，并一举超过。
    - color: %COLOR%
      content: 而大逃跑法对于%UMA%耐力的消耗是极其恐怖的，于是 %CHARA% 只得看着%G_NAME%慢慢超过自己，而根本没办法再次提速。
    - color: %COLOR%
      content: 最终惜败于%G_NAME%之手。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「我的同期对手说你就是赛场上的『怪物』，如今看来，这个称呼还真是适合你。」
    - color: %COLOR%
      content: 同样被%G_NAME%拉开差距的%A_NAME%也走了过来，一副心有余悸的样子。
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「二位前辈，承让！」
    - color: %COLOR%
      content: %G_NAME%也走了过来，看起来似乎并不是很累的样子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是非常强大的末脚呢，慢慢地就把我领放的优势抢走了。当我在余光里看到你的时候，可真是吓了一跳呢。」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「哈哈，我也看到了，铃鹿被超过的时候脸上可是挂着一副不敢置信的表情哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「诶真的吗？不会吧……」
    - color: %COLOR%
      content: %G_NAME%看到二位前辈并没有因为被后辈超过而不快，心情也是轻松了很多。
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「不过说到最后，前辈们的实力也是很强的呢。如果可以，我还想感谢前辈们共同为我带来了一场如此精彩的比赛呢。」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「既然这样，那说不定下次就是我感谢你们为我带来了一场精彩的比赛了哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是的，还没开始比赛就已经在想着胜利了吗？」
    - color: %COLOR%
      content: 三位%UMA%一起笑了起来。
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「那么下一次比赛也请二位前辈指教了哦？」
    - color: %COLOR%
      content: %CHARA% 与%A_NAME%一起点了点头，三位%UMA%都从对方的眼中看到了对胜利的渴望。

takz_kin_lose:
  title: 落后
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好、好累……」
    - color: %COLOR%
      content: 尽管一次中距离赛事不太可能将 %CHARA% 的体力透支得十分严重，但 %CHARA% 总感觉自己已经提不起半分力气。
    - color: %COLOR%
      content: 其实%SEX%一直有在好好积蓄耐力，直到……
    - color: %COLOR%
      content: 直到%A_NAME%与%G_NAME%，以及后续的其他%UMA%相继将%SEX%超过。
    - color: %COLOR%
      content: %CHARA% 甚至都不太想去关心自己是否入着。
    - color: %COLOR%
      content: %SEX%用尽最后的力气把头转向%A_NAME%与%G_NAME%，却发现%THEY%聊得正欢。
    - color: %COLOR%
      content: 是啊，胜利者的心境……
    - color: %COLOR%
      content: %CHARA% 自嘲地笑了笑。

summer_end:
  - 光阴如梭，很快资深年的夏季集训也要结束了。
  - 因为经典年的前车之鉴，%YOU%在集训过程中时刻关注着铃鹿的精神状况。
  - 不过并没有发生什么，铃鹿高质量地完成了%YOU%交给%SEX%的每一项训练计划。
  - 如今已经来到了集训的最后一天，%YOU%与铃鹿正在打包收拾行李。
  - %YOU%看着铃鹿将「一定要拿下天皇赏」的标语收进包里，突然想到了什么。
  - acc: 1
    content: 「铃鹿，我突然想到一个问题……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯？」
  - 「天皇赏，是在东京的场地举办的吧？你好像还没有在东京的场地跑过比赛哦？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那么%CALLNAME%看好哪场比赛了呢，应该是同样在东京竞马场举办的每日王冠吧。」
  - 铃鹿手上的动作没有一点停顿，仿佛早就猜到%YOU%要这么问了。
  - %YOU%挠了挠头，面对如此聪明的担当，似乎也没什么好说的了。
  - acc: 1
    content: 「聪明，铃鹿，不愧是被我看上的%UMA%，居然一下子就猜到我想说什么了！」
  - %YOU%只得向铃鹿比了个大拇指。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%怎么能这么说呢，这也太难为情了……」
  - 铃鹿的整理工作停顿了一下，%SEX%举起来一只锻炼用的沙滩排球做出向%YOU%投掷的动作来。
  - %YOU%装作非常惊恐的样子躲到了一边。
  - 很快，大家全部整理完毕，坐上了回到学园的车。
  - acc: 1
    content: 「那么铃鹿，下一个目标就是每日王冠了哦。首先是熟悉东京竞马场的跑道，输赢倒在其次……」
  - 话音未落，%YOU%便看到铃鹿摇了摇头。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不会的，%CALLNAME%。我会听从您的指示熟悉跑道，但是胜利我也是一定要拿下的。」
  - %YOU%愣了一下，随即呵呵笑了一声。
  - acc: 1
    content: 「嗯，我相信铃鹿，一定会圆满完成任务的。」

# 资深年10月2周结束
curse:
  title: 魔咒
  lines:
    - 一阵秋风吹来，%YOU%把大衣裹得更紧了一些，加快了回学园的步伐。
    - 此时，%YOU%正走在离学园有些许距离的一条大道上，右手提着一袋「皇家秘制蜂蜜胡萝卜饼」。
    - 重量级赛事秋季天皇赏即将到来，%YOU%的担当 %CHARA% 的训练也愈发刻苦起来。
    - 不论%YOU%几点赶到训练场，总是能发现正在做自主训练的铃鹿。
    - 因此，为了给铃鹿提升干劲，%YOU%今天又起了个大早，来为%SEX%购买%UMA%们十分喜爱的「皇家秘制蜂蜜胡萝卜饼」。
    - 尽管起得很早，但是%YOU%仍旧被迫排了好久的队才买到。等%YOU%准备返回学园的时候，天已大亮。
    - 还好早就将训练计划告诉了铃鹿，%YOU%一边这样想着，一边心不在焉地扫了一眼一旁高楼上正在播放早间新闻的巨型屏幕。
    - 恰好在这个时机，早间新闻结束了，屏幕上突然出现了几位%UMA%的照片。
    - %YOU%不由得停下了脚步，因为屏幕最中央的赫然便是铃鹿的照片。
    - content:
        - fontWeight: bold
          content: 主持
        - 「当之无愧的人气第一，果然还得是这位%UMA%呢！炉火纯青的超级领放，鲜少遇到对手，从开始到结束始终是头马的%CHARA%！」
    - %YOU%心中有种微微的自豪感，自家担当被挂在了大屏幕上大肆赞扬，这种事可不是每天都能有的。
    - 而且还是即将到来的秋季天皇赏的人气第一名——尽管这是%YOU%意料之中的结果。
    - %YOU%不由得加快了脚步，想要尽快回到学园去，将「皇家秘制蜂蜜胡萝卜饼」带给铃鹿。
    - content:
        - fontWeight: bold
          content: 路人A
        - 「%CHARA%啊，我之前看过%SEX%的比赛，简直是太霸气了。」
    - content:
        - fontWeight: bold
          content: 路人B
        - 「是啊，从出闸开始就强势领放，后面的选手整场比赛甚至都没能进入%SEX%三马身之内！」
    - content:
        - fontWeight: bold
          content: 路人A
        - 「%SEX%能拿到人气第一，只能说是理所应当的吧。」
    - %YOU%听着路人的对话，更自豪了几分，于是悄悄放慢了脚步，希望能听到更多关于铃鹿的赞扬。
    - content:
        - fontWeight: bold
          content: 路人B
        - 「对啊，希望%SEX%这次也能来一个完美的大逃，将所有对手远远地甩开，一举拿下天皇赏盾徽。」
    - 路人B有些感慨地说着，却见路人A神情有些不太对劲。
    - content:
        - fontWeight: bold
          content: 路人A
        - 「别的不好说，唯独获胜这块，我不太看好%CHARA%……」
    - 听到这句话，%YOU%和路人B同时吃了一惊。
    - content:
        - fontWeight: bold
          content: 路人B
        - 「为什么会这么说呢？%CHARA%的实力难道不是你我共同见证的吗？」
    - 路人A阴沉着脸摇了摇头。
    - content:
        - fontWeight: bold
          content: 路人A
        - 「实力是一方面，而获胜仅仅有实力是不够的，还需要有运气的加持。」
    - content:
        - fontWeight: bold
          content: 路人A
        - 「你可能不知道吧，秋季天皇赏，一直以来都有『人气第一的选手无法获胜』这样的魔咒呢。」
    - 听到这里，%YOU%再也忍不住了。
    - acc: 1
      content: 「那个，两位，请问这么个说法是从何而来的呢？」
    - 两位路人有些惊讶地回头看了你一眼。
    - content:
        - fontWeight: bold
          content: 路人B
        - 「这位朋友，看您手里拿的东西，您不会是特雷森的训练员吧？」
    - %YOU%轻轻地点一点头，「皇家秘制蜂蜜胡萝卜饼」确实大部分时候都是%UMA%在买。
    - content:
        - fontWeight: bold
          content: 路人A
        - 「怎么说呢，这个魔咒是口口声声流传在东京竞马场观众中的，算是比较灵验的魔咒之一。」
    - content:
        - fontWeight: bold
          content: 路人A
        - 「我观看了好几年的秋季天皇赏，只能说，这个魔咒的灵验程度简直超出我的想象。」
    - content:
        - fontWeight: bold
          content: 路人A
        - 「我见过好多人气第一的选手，%THEY%在出场见面的时候是那么的风光，仿佛已经胜券在握。」
    - content:
        - fontWeight: bold
          content: 路人A
        - 「但是比赛正式开始的时候，%THEY%便像是受到了诅咒一样，出迟、斜行、焦躁……」
    - content:
        - fontWeight: bold
          content: 路人A
        - 「别说第一名了，哪怕是能够入着的%UMA%，都没有几个。」
    - content:
        - fontWeight: bold
          content: 路人A
        - 「而且我听说……在许久之前，有一位领放%UMA%，更是在秋季天皇赏中失误摔倒并骨折，自此告别赛场，终生郁郁寡欢……」
    - %YOU%感觉有些天旋地转，手中的「皇家秘制蜂蜜胡萝卜饼」差点没有抓稳。
    - acc: 1
      content: 「魔咒这么个说法，可信度还是有待商榷的吧……？」
    - %YOU%勉强挤出一个比哭还难看的笑容来。
    - content:
        - fontWeight: bold
          content: 路人A
        - 「朋友，我一开始也是不太相信的。但是我的眼睛不会欺骗我，您也可以去查询一下，最近几年秋季天皇赏的人气第一名……」
    - %YOU%有些失魂落魄地站在原地，目送两名路人渐渐远去。
    - %YOU%想起了之前搜集过的秋季天皇赏的资料，想起了几乎没有重复的「人气第一」与「一着」的名单……
    - 许久之后，%YOU%才回过神来，此时大屏幕上的秋季天皇赏专访早已结束。
    - acc: 1
      content: 「不行，我可是铃鹿的训练员……如果连我都不能相信%SEX%，那么就没人相信%SEX%了！」
    - %YOU%看了看手里的「皇家秘制蜂蜜胡萝卜饼」，想到了与铃鹿相处的一点一滴，最终决定还是尽快回到学园。
    - divider: true
    - %YOU%赶回了学园，看着在训练场上坚持训练的铃鹿，一时心情有些复杂。
    - acc: 1
      content: 「铃鹿，铃鹿！请过来一下！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼，呼……%CALLNAME%您回来了啊。」
    - 铃鹿听到%YOU%的呼唤，便走了过来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，%CALLNAME%您没事吧？您现在的脸色非常难看呢……」
    - 铃鹿看到了%YOU%的状况，有些焦急。
    - %YOU%愣了一下，随即一股暖意涌上心头。
    - acc: 1
      content: 「谢谢铃鹿的关心，我没事的。其实，我更想给你看看这个——」
    - %YOU%向着铃鹿眨了眨眼，然后将背在身后的右手伸了出来。
    - acc: 1
      content: 「看吧，皇家秘制蜂蜜胡萝卜饼！我排队排了好久才买到的呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哇，原来%CALLNAME%是去为我买这个去了，真的是……太感谢您了……」
    - %YOU%微笑着将纸袋递给欢呼雀跃的铃鹿。
    - acc: 1
      content: 「为了奖励你这几天的辛苦训练，请不要客气，尽管享用吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，请%CALLNAME%放心吧，我会用秋季天皇赏的胜利来报答您的。」
    - %YOU%看着迫不及待打开纸袋的铃鹿，突然想起了路人关于秋季天皇赏魔咒的对话。
    - 思虑许久后，%YOU%还是决定将这件事情告诉铃鹿。
    - acc: 1
      content: 「那个，铃鹿，我在回来的路上……」
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔，魔咒，倒是很有意思呢。」
    - 在把从路人那里听到的消息告诉铃鹿后，%YOU%有些惊讶地发现铃鹿捂着嘴开始小声地笑了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没想到%CALLNAME%脸色苍白是因为这个呢。虽然我也是第一次听说这么个魔咒，但是我并不害怕哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「相反，我会用自己的力量打破这个魔咒，将秋季天皇赏的盾徽带回来送给您。」
    - 铃鹿看到%YOU%的脸色依旧有些不太好看，便打开了手中的纸袋。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，来吃一块蜂蜜胡萝卜饼吧，希望会让您好受一点～」
    - 话音刚落，铃鹿已经将一块散发着诱人香气的蜂蜜胡萝卜饼递到了%YOU%的嘴边。
    - %YOU%下意识咬住了它，开始咀嚼。
    - 果然非常好吃，看来早上排了那么久的队是值得的……
    - 铃鹿看到%YOU%已经不那么难过了，脸上的笑意更盛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请%CALLNAME%看着吧，我会以绝对的速度击垮这个魔咒的，一定会的！」

# 资深年10月3周开始
bad_omen:
  title: 不祥之兆
  lines:
    - content:
        - fontWeight: bold
          content: 「实况」
        - 「各位选手一齐出闸，起跑良好，人气第一的%CHARA%选手一马当先！」
    - 这……这是哪里？
    - %YOU%置身在一处熟悉又陌生的竞马场的观众席上，依稀可以分辨出「东京竞马场」的字样。
    - 东京竞马场么……也就是说，这是在秋季天皇赏的现场……
    - %YOU%环顾四周，发现身边的观众虽然也在竭力呼喊，但是他们的身边却仿佛有一层层的雾气，使得%YOU%无法看清他们的脸。
    - %YOU%急忙将视线投向远方的赛道，果然找到了一个遥遥领先的身影。
    - 铃鹿……
    - 既然找到了铃鹿，%YOU%便略微有些放心了，准备专心观看比赛。
    - 很快，%YOU%便忘却了所有，只顾一心为铃鹿加油。
    - content:
        - fontWeight: bold
          content: 「实况」
        - 「以%CHARA%为首的领放队伍进入了中盘，%SEX%依然牢牢把持着领头的位置！多么强硬的领放！」
    - %YOU%远远地看到，「铃鹿」在中盘再次加速，就像无数次预演的那样。
    - 接下来只要……
    - %YOU%的心提了起来，马上就要过弯了，在这个几乎必定要降低速度的时刻……
    - content:
        - fontWeight: bold
          content: 「实况」
        - 「%CHARA%选手在几乎没有减速的情况下就通过了弯道，这是何等强大的掌控程度！不仅是对于赛道的，更是对于物理规律的！」
    - 在%YOU%的眼中，「铃鹿」以一种几乎是反常识的方法通过了弯道，反而进一步拉大了与后方的差距。
    - %YOU%看着「铃鹿」行云流水一般的操作，竟有些口干舌燥。
    - content:
        - fontWeight: bold
          content: 「实况」
        - 「前方是东京竞马场著名的大榉树，通过大榉树后我们就可以欣赏到诸位%UMA%再次加速的景致了！」
    - %YOU%看着「铃鹿」的身影率先冲入大榉树的背面。
    - 啊，想来一定又会是一场轻松的胜利吧。
    - %YOU%悠闲地双手合握，靠在后面的椅背上。
    - 突然，%YOU%的心脏像是被狠狠地捏了一下一样开始急速跳动，一股无与伦比的剧痛袭击了%YOU%。
    - %YOU%一下子脸色惨白，大汗淋漓，双手狠狠揪住左胸部位的衣服，再也说不出一句完整的话来。
    - %YOU%挣扎着想向周围的观众求助，但是……
    - content:
        - fontWeight: bold
          content: 「实况」
        - 「发生了什么？第一个冲出大榉树的居然不是%CHARA%选手！」
    - content:
        - fontWeight: bold
          content: 「实况」
        - 「%CHARA%选手依旧没有出现！」
    - content:
        - fontWeight: bold
          content: 「实况」
        - 「%CHARA%选手发生了紧急状况！」
    - content:
        - fontWeight: bold
          content: 「实况」
        - 「%CHARA%选手在第三个弯道前退出了比赛！」
    - %YOU%无暇思考，再也听不进半个字去。心脏的剧痛已经完全剥夺了%YOU%的思考能力。
    - 而在全场观众的惊呼声中，%YOU%的痛感达到了巅峰，直到眼前无边的黑色潮水涌了上来。
    - %YOU%失去了意识。
    - divider: true
    - 眼前突然闪过一片光明，%YOU%竟恢复了意识，左胸的剧痛也仿佛没有出现过一般。
    - %YOU%环顾四周，惊讶地发现自己此刻正站在东京竞马场的赛道之上。
    - 奇怪，为什么会在赛道之上……
    - %YOU%看到了一些穿着白大褂神情紧张的人在向着大榉树跑过去。
    - 瞳孔渐渐聚焦，%YOU%似乎意识到了什么。
    - %YOU%急忙跟着他们一起向前跑去，之后便看到了%YOU%一生中所能想象到的最残酷的画面：
    - %YOU%的担当，「%CHARA%」，正静静地躺在赛道的草皮上。
    - %SEX%的左腿此刻已呈现一种怪异的扭曲状，森白尖利的骨茬刺穿了皮肤与肌肉，刺穿了那平日里让%YOU%移不开视线的黑色裤袜。
    - %SEX%的脸惨白得如同一张白纸，而与之对应的，%SEX%的腿下有着大片的还在逐渐扩大的鲜红。
    - %SEX%的胸腔似乎不再起伏，而刚刚结束奔跑的%UMA%本该大口呼吸。
    - %YOU%希望%SEX%的脸上还会有着狰狞的表情，这至少说明%SEX%能感受到这一切。
    - 但%SEX%的脸上只有平静，死亡一样的平静……
    - 看到了这一切的%YOU%，仿佛所有力量都被抽空，一下子坐在了地上。
    - 紧接着，%YOU%的心脏再次开始作痛，甚至更甚于以往。
    - %YOU%的眼前天旋地转，「铃鹿」鲜血的红色与急救人员衣着的白色逐渐占据了%YOU%的视野。
    - 而在%YOU%再次失去意识的前一刻，%YOU%仿佛听到了急救人员的交谈声，不过只有一个词汇——
    - 粉碎性骨折。
    - %YOU%再次堕入虚空。
    - divider: true
    - acc: 1
      content: 「铃鹿！铃鹿！铃……」
    - %YOU%猛地从床上坐了起来，呼吸急促，浑身上下就像是从水里捞出来一般，原来早已汗流浃背。
    - acc: 1
      content: 「原来是梦吗……」
    - %YOU%摸了摸自己的左胸，那仿佛将%YOU%撕裂一般的剧痛完全消失了，一如其来的时候。
    - 但是这个梦境却又分外真实，尤其是当%YOU%看到「铃鹿」倒在血泊中生死不知的时候，那种仿佛行尸走肉一般的感觉……
    - %YOU%大力摇了摇头，试图把这个可怕的片段忘记。
    - acc: 1
      content: 「现在是凌晨两点钟，继续睡觉吧，明天还要指导铃鹿训练……」
    - %YOU%更换了被冷汗浸透的床单与枕巾，试图再次入睡。
    - 但%YOU%在床上辗转反侧许久，只要一阖目便会看到那惨烈的梦境……
    - 如此直到天亮。

# 【不祥之兆】之后
choice:
  title: 抉择
  lines:
    - 由于那个堪称恐怖的噩梦，%YOU%并没有睡着。
    - %YOU%想到了两年前第一次遇到铃鹿的那个凌晨，不过那时的自己，可不像现在这样失魂落魄。
    - %YOU%看了看墙上挂着的铃鹿写下的「一定要赢下天皇赏」的标语，心头又开始隐隐作痛。
    - 梦境中的那一幕又一次出现在了%YOU%的脑海中，不过这次，%YOU%的心中逐渐有了一个堪称反常的想法。
    - %YOU%已经与铃鹿相处了两年半之久，已经完全熟悉了%SEX%的音容笑貌，如果真的会因为一场比赛而失去%SEX%……
    - 那这比赛，不跑也罢。哪怕是赌上自己作为训练员的声望，也一定不要让噩梦成真。
    - 最终，%YOU%平复了一下激荡的心情，准备出发去训练场上与铃鹿碰头。
    - divider: true
    - %YOU%来到了训练场，尽管此时比通常意义上的早起还要早，但%YOU%还是意料之中地发现了正在训练的铃鹿。
    - 看着那流动的身影，%YOU%一时间有些迟疑了。
    - 这些天铃鹿为了秋季天皇赏所作出的努力，%YOU%全部看在眼里。
    - 如果真的只是因为自己的一个不知所谓的梦，就将%SEX%的努力全盘否决的话……
    - 那么%YOU%与%SEX%的仇人，又有什么区别？
    - %YOU%陷入了激烈的天人交战中。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%，您来啦！」
    - %CHARA% 率先发现了正在愣神的%YOU%，于是跑了过来。
    - 而%SEX%的问好也将%YOU%从沉滞的思绪中拯救了出来。
    - %YOU%并没有向铃鹿问好，而是开始细细地打量%SEX%。
    - 从头顶的绿色耳套，到橙色长发，绿宝石色瞳孔，纤细有力的双腿……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%您在干什么！这样我会害羞的……」
    - %YOU%的目光让铃鹿感觉有些不自在。
    - 不过很快，铃鹿就发现了不对劲之处。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，您……您现在可能更需要去医务室一趟……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - 可能是%YOU%惨白的脸色吓到了铃鹿，%SEX%下意识后退了两步。但是随后，%SEX%就非常紧张地翻过了赛道的围栏。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……我陪您去医务室好吗，您现在的状况，已经不能用可怕来形容了！」
    - 铃鹿不由分说地抓住了%YOU%的手，要带着%YOU%向运动场外走去。
    - %YOU%因为彻夜噩梦而变得冰凉的手被铃鹿温暖的小手一握，顿时有种劫后余生的感觉。
    - 而%YOU%也借此回过神来，并坚定了自己的想法。
    - %YOU%没有跟铃鹿离开训练场，而是手腕一翻，反而握住了铃鹿的手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……？」
    - 铃鹿因为%YOU%突如其来的举动而有些疑惑不解，而%YOU%顺势抓住了%SEX%的另一只手。
    - acc: 1
      content: 「铃鹿……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我在……」
    - 尽管有些疑惑，可能还有些害怕，但铃鹿还是紧紧反握住了%YOU%的手。
    - acc: 1
      content: 「铃鹿，请……请放弃天皇赏吧……」
    - %YOU%仿佛梦呓一般挤出了这么一句话，随后便感觉像是浑身的力气被掏空一样。
    - 铃鹿听到了%YOU%的话，小嘴微张，眼神失焦，竟一时没有反应过来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，您……请您不要开这样的玩笑好吗，我……我这就带您去医务室……」
    - 看来铃鹿认为%YOU%处于糟糕的精神状况而不分场合地说了句玩笑话。
    - 紧接着，%SEX%就想强硬地把%YOU%带去医务室。
    - %YOU%看着一贯冷静的铃鹿为了%YOU%的状况而变得慌乱的样子，惨然一笑。
    - acc: 1
      content: 「不，铃鹿，我是认真的。」
    - 铃鹿听到%YOU%以绝对不想是玩笑的口气说出自己的决定后，再次愣在了原地。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，能跟我说一下发生了什么吗？我知道您平时是不喜欢开这样大的玩笑的……」
    - %YOU%深吸一口气，稍微平息了一下自己翻腾不休的思绪，将自己昨晚的梦境向铃鹿和盘托出。
    - acc: 1
      content: 「铃鹿啊，昨天晚上……」
    - divider: true
    - %YOU%将那个有些过于真实的梦境重新描述了一遍，并看着对面的铃鹿逐渐变得惊讶起来。
    - 对于%YOU%而言，将噩梦复述给铃鹿，无异于重新经历一遍。
    - 「就是这样的，铃鹿。我知道可能有些荒谬，但是……但是这个梦境太过于真实了，我不得不重视它。」
    - %YOU%的双手感受到了小小的、细微的颤抖，这时%YOU%才发现原来从刚才到现在，%YOU%与铃鹿一直没有松开握在一起的双手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……尽管您都这么说了，可我还是想去试一下……」
    - %YOU%抬起头来，直视铃鹿的双眼，却在%SEX%的眼中看到了一抹晶莹，以及，无边的坚定。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们为了天皇赏做过多少准备，吃了多少苦，这些您都是知道的……如果就此放弃，想必您也会感到不甘心的吧……」
    - 铃鹿的身体开始颤抖，并通过交握在一起的双手传递给了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请您相信我，哪怕只有一次也好……相信我，能带着盾徽，或者没有盾徽——这些已经不重要了，总之我会平安回到您的身边的！」
    - %YOU%似乎听到了%SEX%最后的细细的啜泣声。
    - %YOU%的心头已经是乱麻一团，直觉带来的不祥征兆，以及担当%UMA%的决心，两股力量裹挟着%YOU%的意志，使得%YOU%头晕目眩。
    - %YOU%看了看泫然欲泣的铃鹿，又想了想那个无比真实的噩梦，看了看，又想了想……
    - 最终，%YOU%心一狠，做出了最后的决定。
    - acc: 1
      key: choice
      content: 「那就去吧，铃鹿。」
      comment:
        - color: red
          content: （警告：此选项不可逆，请保证与铃鹿的羁绊足够强大再考虑该选项）
      lines:
        - %YOU%深吸一口气。
        - acc: 1
          content: 「不过拜托了，在你冲过终点线之后，请务必第一个回到我的身边……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……请相信我吧，我一定会，一定会平安归来的！」
        - 最终还是输给了铃鹿的执念。
        - %YOU%松开了握着铃鹿双手的手，双眼无神地倚着训练场的围栏。
        - acc: 1
          content: 「去……去训练吧，铃鹿，请让我一个人呆一会……」
        - %YOU%用尽全身的力气向着铃鹿挥了挥手。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - 铃鹿在%YOU%旁边侍立许久，才心事重重地回到跑道上去。
        - acc: 1
          content: 「铃鹿，请务必……」
        - %YOU%呆呆地看着铃鹿远去的背影，喃喃道。
    - acc: 2
      content: 「不，铃鹿。」（动之以理） # 好感度-100
      lines:
        - 思虑许久之后，%YOU%还是决定拒绝铃鹿的请求。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - 铃鹿一副不敢置信的样子。
        - %YOU%紧了紧握着铃鹿双手的手，目光坚定地盯着%SEX%。
        - 铃鹿象征性地试着挣脱%YOU%的双手，但是失败了。
        - acc: 1
          content: 「铃鹿，之前就有人气第一无法获胜的魔咒在，现在又有噩梦来预警……」
        - %YOU%没有继续说下去，但是%YOU%的意思已经很明确了。
        - 不管参加秋季天皇赏是不是真的会发生意外，上天已经通过各种方式给予了%YOU%暗示。
        - 信也罢，不信也罢，当两个巧合同时发生的时候，它们便不再是巧合。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我……我明白了，如果您一定坚持这样的话……」
        - 铃鹿猛地将手从%YOU%的手中抽走，转身跑开了。
        - acc: 1
          content: 「铃鹿……」
        - %YOU%呆呆地看着铃鹿远去的背影，似乎能听到%SEX%绝望的啜泣声。
        - %YOU%明白，自己强硬的作为已经伤透了%SEX%的心。
        - 但至少这样，%SEX%不会有任何危险……
    - if: era.get('love:2') >= 90
      acc: 3
      content: 抱住%SEX%。（晓之以情） # 好感度-50
      lines:
        - %YOU%什么也没说，而是上前一步，将眼前的铃鹿拥入怀中。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%？」
        - 铃鹿一下子瞪大了双眼。
        - acc: 1
          content: 「铃鹿，你是我的爱人。我，我……」
        - %YOU%想到了曾经与铃鹿度过的美好时光，深夜的交心，略显青涩的吻……
        - 眼前的%UMA%，不仅仅是%YOU%的担当，更是%YOU%的爱人，%YOU%的全部。
        - %YOU%并不想冒着失去%SEX%的风险，哪怕只有一点。
        - 于是%YOU%哽咽了，后面的话再也没能说出口。
        - %YOU%只是将怀中的铃鹿抱得更紧，哪怕早已热泪长流，模糊了视线。
        - 铃鹿彻底愣住了，因为%SEX%还是第一次看到%SEX%的训练员，那个顶天立地、占据了自己全部的心的人，哭得那么真切。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - 铃鹿想到了这些天十倍甚至百倍于平常的努力所为的目标，如今即将化作虚无，一时间也有些情绪激荡。
        - 随后，%SEX%也轻轻地抱住了%YOU%，靠在了%YOU%的肩膀上开始啜泣。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我、我会一直在您身边的……天皇赏我……我会放弃的，请您不、不要哭了……」
        - acc: 1
          content: 「嗯，那铃、铃鹿也不要哭了……」
        - %YOU%与铃鹿互相安慰着，但最终谁也没能止住泪水。
        - 就这样紧紧拥抱在一起，过了许久……

# 资深年10月4周开始
# 不避战，好感低于喜爱
# 之后移出队伍，资深年结束回归，陈旧腿伤
wing_clipped:
  title: 折翼
  lines:
    - 在发生了诸多插曲之后，秋季天皇赏终于来临了。
    - 不同于以往，这次%YOU%亲自陪着铃鹿进入了赛场内部，直到被工作人员礼貌拦住。
    - content:
        - fontWeight: bold
          content: 工作人员
        - 「接下来请您去观众席上等待，如果您不知道观众席怎么走可以跟我来哦……」
    - %YOU%对工作人员的话充耳不闻，只是直直地盯着铃鹿的背影。
    - %SEX%的背影离%YOU%越来越远，越来越小，几乎要消失在通道的另一头。
    - %YOU%希望铃鹿能够回头向%YOU%微笑一下，再次保证平安，哪怕只是回一个坚定的眼神……
    - 可是并没有，%SEX%头也不回地消失在了%YOU%的视线中。
    - %YOU%长叹一口气，跟随着工作人员的指示向观众席上去。
    - divider: true
    - 尽管参赛选手还没有开始入场，但现场的氛围已经分外热烈了。
    - 观众们兴奋地争论着，叽叽喳喳的声音不绝于耳，几乎要将%YOU%逼疯了。
    - %YOU%再次环顾四周，却有些惊悚地发现，自己的位置，跟梦中的位置一模一样。
    - 周围的观众也是，与那个梦中唯一的区别就是%YOU%现在可以看清他们的脸了……
    - %YOU%心中的不安感翻了一倍。
    - 就在%YOU%试图冷静下来并强行压制不安感的时候，开场小号响起了。
    - %CHARA%，以及其他的十七名摩拳擦掌的%UMA%开始逐一进入闸门。
    - %YOU%紧紧地盯着似乎与平时没什么两样的铃鹿，暗自为%SEX%祈祷着。
    - 很快，闸门打开，十八位%UMA%冲出了闸门。
    - %CHARA% 一马当先，迅速占据了领头的位置。
    - content:
        - fontWeight: bold
          content: 实况
        - 「各位选手一齐出闸，起跑良好，人气第一的%CHARA%选手一马当先！」
    - %YOU%猛地颤抖了一下。
    - 连实况解说的声音和内容都一模一样……
    - 远处铃鹿跑步的姿势，开始加速的时机，以及与后面大部队的距离……
    - 完全一模一样！
    - %YOU%无心观看比赛了，因为%YOU%的双手在止不住地颤抖，脑海里全是那天所做的噩梦。
    - 而现实中所发生的一切，至少到目前为止，全部都是%YOU%的梦境的重演。
    - 很快，铃鹿就像%YOU%预想的那样，漂亮而高效地过了一个弯，这使得%YOU%旁边的观众开始有些癫狂地欢呼起来。
    - 不能再等了！
    - %YOU%这样告诉自己，颤颤巍巍地站了起来。
    - 后排的观众顿时不乐意了，已经有人按住%YOU%的肩膀，试图强行迫使%YOU%坐下。
    - %YOU%恍若未闻，而是开始向前挤去。
    - content:
        - fontWeight: bold
          content: 实况
        - 「前方是东京竞马场著名的大榉树，通过大榉树后我们就可以欣赏到诸位%UMA%再次加速的景致了！」
    - 紧接着，则是熟悉的抽痛——不过还好，并不像梦里那样一度让%YOU%疼到昏迷！
    - %YOU%拼命向前挪动，用双手分开了一层层狂热的观众，来到了赛场围栏前。
    - 然后，%YOU%毫无迟疑地，翻了过去。
    - content:
        - fontWeight: bold
          content: 实况
        - 「这位观众，请您回到座位上去！等等，刚刚发生了什么？第一个冲出大榉树的居然不是%CHARA%选手！」
    - 此刻，%YOU%已经什么也听不到了。
    - acc: 1
      content: 「铃鹿！铃鹿！」
    - %YOU%冲上了跑道，在仍在奔跑的%UMA%们震惊的目光中绕过了%THEY%，径直冲向大榉树的后面。
    - 求你了求你了不要——
    - %YOU%下意识想到了梦中铃鹿躺在草皮上的样子，于是加快了步伐。
    - 终于，%YOU%来到了大榉树的后面。
    - 该发生的，还是发生了。
    - 不过，这次%YOU%来得很及时。
    - 铃鹿此刻已经发生了意外，好在%SEX%残存的意识使得%SEX%还没有彻底倒下——
    - acc: 1
      content: 「铃鹿！」
    - %YOU%冲了过去，一把扶住了%SEX%的腰，抬起了%SEX%已经骨折的左腿。
    - 紧接着，%YOU%试图唤醒铃鹿残存的意识。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……对，对不起……」
    - 铃鹿仿佛用尽全身力气一样艰难睁开双眼，在看到%YOU%之后，便再也支撑不住，软倒在了%YOU%的怀里。
    - acc: 1
      content: 「铃鹿，醒一醒铃鹿！」
    - %YOU%万念俱灰，只剩下扶好铃鹿一个念头。
    - 不知道过了多久，赛场的急救人员到达了现场。%YOU%机械地将铃鹿交给他们，看着他们匆匆忙忙将铃鹿抬上了救护车。
    - 救护车很快便开走了，比赛也早已结束，甚至观众们也已经开始退场，同时还在讨论着今天发生的惨剧。
    - %YOU%一概不知，只是失魂落魄地站在原地，看着救护车开走的方向。

tenn_sho:
  title: 平安的约定
  lines:
    - 在发生了诸多插曲之后，秋季天皇赏终于来临了。
    - 不同于以往，这次%YOU%亲自陪着铃鹿进入了赛场内部，直到被工作人员礼貌拦住。
    - content:
        - fontWeight: bold
          content: 工作人员
        - 「接下来请您去观众席上等待，如果您不知道观众席怎么走可以跟我来哦……」
    - %YOU%对工作人员的话充耳不闻，只是直直地盯着铃鹿的背影。
    - %SEX%的背影离%YOU%越来越远，越来越小，几乎要消失在通道的另一头。
    - 突然，%SEX%的身形停顿了一下，回过头来。
    - 紧接着，%SEX%开始向%YOU%跑来。
    - if: era.get('love:2') < 75
      lines:
        - 最后，%SEX%停在了%YOU%的身前。
        - acc: 1
          content: 「铃鹿，请你一定，一定要平安回来。」
        - %YOU%并没有像其他比赛一样希望铃鹿拿下一着，而是心事重重地叮嘱%SEX%一定要平安归来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，我会的，%CALLNAME%。我不仅要平安回到您身边，还要带着天皇赏的盾徽一起，请您看着吧！」
        - 铃鹿捧住了%YOU%的一只手，轻轻地把%YOU%的手贴在了脸上。
        - 尽管%YOU%与%SEX%同样享受这个过程，但铃鹿最终还是把%YOU%的手放了下来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我……我走了。」
        - 话音刚落，铃鹿便毫不犹疑地转身离去。
        - %YOU%凝视着%SEX%的背影，久久不语。
    - if: era.get('love:2') >= 75
      lines:
        - 最后，%SEX%一头扎进了%YOU%的怀里。
        - %YOU%不住地抚摸%SEX%的秀发，思绪万千。
        - acc: 1
          content: 「铃鹿，请你一定，一定要平安回来。」
        - %YOU%并没有像其他比赛一样希望铃鹿拿下一着，而是心事重重地叮嘱%SEX%一定要平安归来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，我会的，%CALLNAME%。我不仅要平安回到您身边，还要带着天皇赏的盾徽一起，请您看着吧！」
        - 铃鹿蜻蜓点水一般在%YOU%的侧脸上落下了一个吻。
        - %YOU%与铃鹿紧紧相拥，直到一旁的工作人员实在忍不住了，咳嗽了一声。
        - %YOU%与铃鹿这才红着脸分开。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我……我走了。」
        - 铃鹿一步三回头地向着赛场走去，身影越来越小，直到彻底消失。
        - %YOU%凝视着%SEX%的背影，久久不语。

tenn_sho_win:
  title: 腾飞
  lines:
    - 尽管参赛选手还没有开始入场，但现场的氛围已经分外热烈了。
    - 观众们兴奋地争论着，叽叽喳喳的声音不绝于耳，吵得%YOU%有些头疼。
    - %YOU%再次环顾四周，却有些惊悚地发现，自己的位置，跟梦中的位置一模一样。
    - 周围的观众也是，与那个梦中唯一的区别就是%YOU%现在可以看清他们的脸了……
    - %YOU%心中的不安感翻了一倍。
    - 就在%YOU%试图冷静下来并强行压制不安感的时候，开场小号响起了。
    - %CHARA%，以及其他的十七名摩拳擦掌的%UMA%开始逐一进入闸门。
    - %YOU%紧紧地盯着似乎与平时没什么两样的铃鹿，暗自为%SEX%祈祷着。
    - 很快，闸门打开，十八位%UMA%冲出了闸门。
    - %CHARA% 一马当先，迅速占据了领头的位置。
    - content:
        - fontWeight: bold
          content: 实况
        - 「各位选手一齐出闸，起跑良好，人气第一的%CHARA%选手一马当先！」
    - %YOU%猛地颤抖了一下。
    - 连实况解说的声音和内容都一模一样……
    - 远处铃鹿跑步的姿势，开始加速的时机，以及与后面大部队的距离……
    - 完全一模一样！
    - %YOU%无心观看比赛了，因为%YOU%的双手在止不住地颤抖，脑海里全是那天所做的噩梦。
    - 而现实中所发生的一切，至少到目前为止，全部都是%YOU%的梦境的重演。
    - 很快，铃鹿就像%YOU%预想的那样，漂亮而高效地过了一个弯，这使得%YOU%旁边的观众开始有些癫狂地欢呼起来。
    - %YOU%几乎是下意识地想要站起来，但最终还是没有这样做。
    - 这次，%YOU%选择相信铃鹿。
    - 很快，领先的铃鹿就带着大部队冲到了大榉树前，%YOU%的心脏也开始逐渐作痛。
    - content:
        - fontWeight: bold
          content: 实况
        - 「前方是东京竞马场著名的大榉树，通过大榉树后我们就可以欣赏到诸位%UMA%再次加速的景致了！」
    - 突如其来的冲动使%YOU%站了起来，%YOU%盯着那黝黑的树丛——
    - acc: 1
      content: 「铃鹿，你答应过我的！%CHARA%！」
    - 哪怕是置身在成千上万疯狂的观众当中，%YOU%依旧以%YOU%全身的力气拼命呐喊着。
    - 而这一声让%YOU%有种燃烧生命感觉的呐喊，也是奇迹般地短暂盖过了周边观众的呼喝声，使得他们有些怪异地看了你一眼。
    - %YOU%颓然坐下，双眼无神地看着大榉树出口的方向。
    - 而就在%YOU%拼命呐喊之前——
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前面就是大榉树了啊……」
    - color: %COLOR%
      content: 是%CALLNAME%特意提到的地方，就是在那里……
    - color: %COLOR%
      content: %CHARA% 看着前方的弯道，心情愈发平静。
    - color: %COLOR%
      content: 并没有想象中的紧张焦躁，反而是有些诡异的平静……
    - color: %COLOR%
      content: %UMA%的速度无与伦比，因此瞬息之间 %CHARA% 便踏入了大榉树的阴影之中。
    - color: %COLOR%
      content: 就在完全被大榉树盖住的那一刻，%CHARA% 心中一凉。
    - color: %COLOR%
      content: %SEX%赖以奔跑的左腿，突然间失去了知觉。
    - color: %COLOR%
      content: 而前方的弯道，在如此高的速度之下，如果失去了平衡……
    - color: %COLOR%
      content: %CHARA% 似乎看到了%CALLNAME%梦境中重伤倒地生死不知的%SEX%。
    - color: %COLOR%
      content: %SEX%试着对左腿发力，借此摆脱困境，可惜完全没有作用。%SEX%的左腿就像一块木头一般，僵硬地挺立着。
    - color: %COLOR%
      content: 难道我真的会像%CALLNAME%梦到的那样，就在这里……
    - color: %COLOR%
      content: 无边无际的绝望感淹没了 %CHARA%，%SEX%有些不甘心地闭上了双眼。
    - color: %COLOR%
      content: 突然——
    - acc: 1
      content: 「铃鹿，你答应过我的！%CHARA%！」
    - color: %COLOR%
      content: %CHARA% 豁然睁开了双眼。
    - color: %COLOR%
      content: 那是……%CALLNAME%的声音……
    - color: %COLOR%
      content: 那个撕心裂肺的声音盖过了观众席上嘈杂的欢呼声，坚强地掠过了大半个赛场，最终来到了 %CHARA% 的耳旁。
    - color: %COLOR%
      content: 观众席离这里好远，%CALLNAME%得是多么拼命，才能将声音传达到这里……
    - color: %COLOR%
      content: 这一切，都是，为了我……
    - color: %COLOR%
      content: 是啊，我答应过，要回到%YOUR_SEX%身边去的……
    - color: %COLOR%
      content: %CALLNAME%……%CALLNAME%……%CALLNAME%……！
    - color: %COLOR%
      content: %CHARA% 的眼前仿佛出现了%CALLNAME%的身影，%YOUR_SEX%微笑着，向 %CHARA% 伸出双手……
    - color: %COLOR%
      content: %CHARA% 视野有些模糊，但还是坚定地握住了%CALLNAME%的手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！」
    - color: %COLOR%
      content: %CHARA% 突然置身于无边的光明中。
    - color: %COLOR%
      content: %SEX%回头看了一下，才讶异地发现自己已经跑出了大榉树的范围。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这……」
    - color: %COLOR%
      content: %CHARA% 又低头看了一眼左腿，惊喜地发现左腿竟不知道什么时候恢复了知觉，如今正像以往一样，推着 %CHARA% 向终点线冲去。
    - content:
        - fontWeight: bold
          content: 实况
        - 「果然，第一个冲出大榉树的是%CHARA%选手！」
    - divider: true
    - 观众席上，%YOU%在看到铃鹿冲出大榉树的一刹那，便已经被无边的欢喜冲击得瘫软在椅子上。
    - %YOU%仰面朝天，呼吸急促，不过好在最终慢慢平复了激动的心情。
    - %YOU%低下头来，却刚好看到铃鹿冲线的瞬间。
    - content:
        - fontWeight: bold
          content: 实况
        - 「%CHARA%选手，何等强劲的末脚！就仿佛是流星一般的速度！」
    - 看到越过了终点线而依旧稳稳站立的铃鹿，%YOU%再也忍不住心中激荡的情感。
    - if: era.get('love:2') >= 75
      lines:
        - %YOU%迅速翻出了赛场围栏，来到了跑道上。
        - 随后，%YOU%向着远方还在调整呼吸的铃鹿跑了过去。
        - 而直到%YOU%来到%SEX%身边的时候，%SEX%才注意到%YOU%。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%？您为什么在这里？」
        - %YOU%并没有多做解释，而是干脆利落地箍住了%SEX%，把%SEX%拥入自己的怀中。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊！」
        - 铃鹿的脸迅速变得通红，于是%SEX%把自己的脸贴在%YOU%的胸膛之上不肯松开。
        - %YOU%贪婪地嗅着铃鹿，%SEX%长发的芳香，汗水的味道，被%YOU%一并深深吸入。
        - 此刻的铃鹿连耳朵尖都在微微颤抖着，似乎也是非常激动。
        - acc: 1
          content: 「铃鹿，我的铃鹿，你回来就好……」
        - %SEX%在听到了%YOU%的话之后似乎愣了一下，随后便挣扎着在%YOU%的怀中抬起头来。
        - 甜蜜的微笑，以及如水一般的动情眼眸。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，你的铃鹿，平安回来了呢。」
        - %YOU%抱着自己的担当%UMA%，仿佛抱住了全世界。
        - 许久之后，%YOU%才渐渐松开铃鹿。
        - acc: 1
          content: 「铃鹿，你现在一定很累吧？走，我送你去休息……」
        - 随后，%YOU%在铃鹿反应过来之前就将%SEX%拦腰抱起。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呀！」
        - 铃鹿惊呼一声，但仿佛已经无力抗拒%YOU%的肆意妄为。
        - 对铃鹿而言，哪怕与%YOU%的关系已经亲密到无可复加，但在大庭广众面前拥抱已是极限。
        - 而%YOU%直接以一个羞耻的姿势将%SEX%抱起，这显然已经开始让%SEX%有些惊慌。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，这不太好吧，大家都看着呢……」
        - acc: 1
          content: 「不太好？在那么多人的注视下，怀里抱着刚赢下天皇赏的爱马，他们羡慕都还来不及呢。」
        - 仿佛是要印证%YOU%的话那样，场内顿时爆发出空前的掌声与欢呼声。
        - 对于观众们来讲，每一年的秋季天皇赏都会有一个一着，这已经算是平平无奇了。
        - 但是训练员翻过围栏入场拥抱自己的担当，可是从来没有过的。
        - 因此，此刻的观众们比铃鹿获胜时更加兴奋。甚至还有不在少数的轻佻者，在向%YOU%与铃鹿吹着口哨。
        - 但是%YOU%恍若未闻，在%YOU%耳中，胸前铃鹿的心跳声要远远比观众们的声音更热烈。
        - 铃鹿见无法挣脱，便拼命仰着头亲吻%YOU%的脸颊。
        - content:
            - fontWeight: bold
              content: 实况
            - 「请这位兴奋的训练员把您的担当%UMA%放下好吗，我们的流程还没有进行完呢……」
        - 实况有些无奈地说道，其实%SEX%也是第一次遇到这种情况。
        - 本来%SEX%对于%YOU%与铃鹿之间的恋情是颇为羡慕的，但如果再不加以制止%YOU%就要把铃鹿抱出赛场去了……
        - %YOU%与铃鹿听到实况的播报才如梦初醒。
        - %YOU%轻轻地将铃鹿放下，而铃鹿则小脸通红地拉着%YOU%的衣角。
        - 不过最终还是分开了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我……我很快就回来！」
        - %YOU%向着铃鹿挥一挥手，心中仿佛有千斤重的石头落下了。
        - 秋季天皇赏，拿下了啊。
    - if: era.get('love:2') < 75
      lines:
        - %YOU%的视野迅速模糊，随后热泪长流。
        - 这就是 %CHARA% 啊，%YOU%的既帅气又强大的担当。
        - 不仅将命运的枷锁狠狠挣开，甚至还能更上一步，直接斩获秋季天皇赏一着的殊荣。
        - 能遇到这样的担当，实在是太好了……
        - 于是，%YOU%在周边欢乐的海洋中，无声哭泣起来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，%CALLNAME%？您……在哭吗？」
        - %YOU%猛地抬起头，发现铃鹿已经不知道什么时候来到了%YOU%的面前，关切地看着%YOU%。
        - %YOU%赶紧胡乱把脸上的泪水抹掉。
        - acc: 1
          content: 「不不不，这不是流泪，只是自豪的流露……」
        - 铃鹿仿佛被%YOU%的幽默感逗笑了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么，我把胜利平安地带回来了，您都不打算夸奖我一下的吗？」
        - 铃鹿突然拉下脸，做出一副伤心的表情。但是，%SEX%的欢快的语气出卖了%SEX%。
        - %YOU%一时间竟不知道该怎么夸奖%SEX%，下意识向%SEX%比了个大拇指。
        - 铃鹿见到%YOU%的窘态，没忍住笑出了声。
        - 之后也没有再与%YOU%攀谈，而是转了个身跑远了。
        - %YOU%向着铃鹿挥一挥手，心中仿佛有千斤重的石头落下了。
        - 秋季天皇赏，拿下了啊。

tenn_sho_lose:
  title: 无过
  lines:
    - 尽管参赛选手还没有开始入场，但现场的氛围已经分外热烈了。
    - 观众们兴奋地争论着，叽叽喳喳的声音不绝于耳，吵得%YOU%有些头疼。
    - %YOU%再次环顾四周，却有些惊悚地发现，自己的位置，跟梦中的位置一模一样。
    - 周围的观众也是，与那个梦中唯一的区别就是%YOU%现在可以看清他们的脸了……
    - %YOU%心中的不安感翻了一倍。
    - 就在%YOU%试图冷静下来并强行压制不安感的时候，开场小号响起了。
    - %CHARA%，以及其他的十七名摩拳擦掌的%UMA%开始逐一进入闸门。
    - %YOU%紧紧地盯着似乎与平时没什么两样的铃鹿，暗自为%SEX%祈祷着。
    - 很快，闸门打开，十八位%UMA%冲出了闸门。
    - %CHARA% 一马当先，迅速占据了领头的位置。
    - content:
        - fontWeight: bold
          content: 实况
        - 「各位选手一齐出闸，起跑良好，人气第一的%CHARA%选手一马当先！」
    - %YOU%猛地颤抖了一下。
    - 连实况解说的声音和内容都一模一样……
    - 远处铃鹿跑步的姿势，开始加速的时机，以及与后面大部队的距离……
    - 完全一模一样！
    - %YOU%无心观看比赛了，因为%YOU%的双手在止不住地颤抖，脑海里全是那天所做的噩梦。
    - 而现实中所发生的一切，至少到目前为止，全部都是%YOU%的梦境的重演。
    - 很快，铃鹿就像%YOU%预想的那样，漂亮而高效地过了一个弯，这使得%YOU%旁边的观众开始有些癫狂地欢呼起来。
    - %YOU%几乎是下意识地想要站起来，但最终还是没有这样做。
    - 这次，%YOU%选择相信铃鹿。
    - 很快，领先的铃鹿就带着大部队冲到了大榉树前，%YOU%的心脏也开始逐渐作痛。
    - content:
        - fontWeight: bold
          content: 实况
        - 「前方是东京竞马场著名的大榉树，通过大榉树后我们就可以欣赏到诸位%UMA%再次加速的景致了！」
    - 突如其来的冲动使%YOU%站了起来，%YOU%盯着那黝黑的树丛——
    - acc: 1
      content: 「铃鹿！铃鹿！」
    - %YOU%拼尽全力呐喊着，可惜与周围的欢呼声比起来还是过于形单影只，难以冲破声浪的束缚。
    - %YOU%颓然坐下，双眼无神地看着大榉树出口的方向。
    - 而就在%YOU%拼命呐喊之前——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前面就是大榉树了啊……」
    - 是%CALLNAME%特意提到的地方，就是在那里……
    - %CHARA% 看着前方的弯道，心情愈发平静。
    - 并没有想象中的紧张焦躁，反而是有些诡异的平静……
    - %UMA%的速度无与伦比，因此瞬息之间 %CHARA% 便踏入了大榉树的阴影之中。
    - 就在完全被大榉树盖住的那一刻，%CHARA% 心中一凉。
    - %SEX%赖以奔跑的左腿，突然间失去了知觉。
    - 而前方的弯道，在如此高的速度之下，如果失去了平衡……
    - %CHARA% 似乎看到了%CALLNAME%梦境中重伤倒地生死不知的%SEX%。
    - %SEX%试着对左腿发力，借此摆脱困境，可惜完全没有作用。%SEX%的左腿就像一块木头一般，僵硬地挺立着。
    - 难道我真的会像%CALLNAME%梦到的那样，就在这里……
    - 无边无际的绝望感淹没了 %CHARA%，%SEX%有些不甘心地闭上了双眼。
    - 突然，%CHARA% 的耳朵捕捉到了什么。
    - %SEX%下意识地竖起了耳朵，仔细分辨着。
    - 似乎是%CALLNAME%的声音，但是已经小到几乎分辨不清了……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……我说过，要将胜利带给您……」
    - %CHARA% 刹那间燃起了斗志，%SEX%开始专注于与沉重的左腿对抗。
    - %SEX%重重地一踏地，那巨大的反震力使得%SEX%感受到了非常明显的疼痛。
    - 但，能感受到疼痛，就代表还有知觉！
    - %CHARA% 又一步踏出，再次感受到了那有些尖锐的痛觉。但是相对地，%SEX%的左腿也恢复了一点点知觉。
    - 一步又一步，%CHARA% 忍受着疼痛的身躯在不断颤抖，但同时%SEX%也在逐渐掌握对左腿的控制权……
    - 终于，在 %CHARA% 冲出大榉树的同时，%SEX%的左腿完全恢复了知觉。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，不妙！」
    - %CHARA% 还没有来得及高兴，便开始有些沮丧了。
    - 因为就在刚刚，排名第二的%UMA%趁机超过了%SEX%。
    - content:
        - fontWeight: bold
          content: 实况
        - 「哎呀有些可惜，对于大榉树后面发生了什么我们无从得知，但是显然%CHARA%选手失去了领先的优势！」
    - %CHARA% 试着加速追赶前方的%UMA%，但无济于事。
    - %SEX%的耐力，几乎在那场与命运的对决中消耗殆尽，只能勉强支撑着%SEX%以当前速度完赛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还是……差一点……」
    - content:
        - fontWeight: bold
          content: 实况
        - 「人气第一的%CHARA%选手最终还是没办法继续领先吗？看来秋季天皇赏的魔咒又一次应验了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起，让您失望了……」
    - divider: true
    - 但其实，%YOU%在见到铃鹿以正常的奔跑姿势离开大榉树的时候，就已经什么都听不到了。
    - %YOU%并没有关心铃鹿前面的%UMA%，也没有关心实况的解说，只是紧紧盯着仍在奔跑的铃鹿。
    - 对%YOU%而言，%SEX%还在奔跑，便已经赢下了%YOU%心中的秋季天皇赏。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - 一切结束后，铃鹿有些怯怯地扯了扯%YOU%的衣角。
    - %YOU%则笑着摸了摸%SEX%的头。
    - acc: 1
      content: 「真是一场精彩的比赛呢，我们走吧，铃鹿！偶尔来东京一趟，不好好玩玩多可惜啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯！」
    - %YOU%就像是胜利者一样，带着铃鹿离开了东京竞马场。

tenn_sho_miss:
  title: 缺席
  lines:
    - 尽管最终%YOU%劝说铃鹿放弃了出走秋季天皇赏，但%SEX%还是一如既往地为天皇赏做着倒计时准备。
    - 很快，万众瞩目的天皇赏要开赛了，而就在比赛的当天，铃鹿敲开了训练员室的门。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我希望能与您一起，观看天皇赏的直播。」
    - 说完，%SEX%便不由分说地坐在了%YOU%的身旁。
    - %YOU%只得停下手上的工作，打开秋季天皇赏的现场直播。
    - 因为自己的一个梦和路人的言论就迫使担当%UMA%放弃努力了一年多的比赛，%YOU%对此还是颇为愧疚的。
    - 因此，%YOU%没有拒绝铃鹿的请求。
    - 很快，开场小号响起，十七位%UMA%有序进入了闸门。
    - %YOU%观察到就在开场小号响起的瞬间，身旁的铃鹿剧烈颤抖起来。
    - acc: 1
      content: 「铃鹿？没事吧……」
    - 铃鹿似乎没有听到%YOU%的问候，而是专心致志地观看着比赛。
    - %UMA%们冲出了闸门，绕过了第一个弯道。
    - 尽管这次比赛不出意外地有领放%UMA%参与，但是%SEX%的领放仅仅领先第二名一个身位而已，比起铃鹿的梦幻大逃来简直不像是领放……
    - 紧接着，大家开始加速，原本的领放%UMA%力竭退到了第二梯队，第二名短暂领先却又被后面的几位%UMA%依次超过。
    - 这绝对是一场紧张刺激的比赛，不到终点线前五十米，谁也说不准哪位%UMA%会胜出。
    - 但%YOU%心里很清楚，如果铃鹿能够参赛，那么%SEX%此刻已经领先第二名五马身以上了……
    - 想到这里，%YOU%不无担心地看了一眼旁边的铃鹿。
    - 铃鹿此刻仿佛是失去了灵魂一样，双眼空洞，脸色苍白更甚于先前请求%SEX%放弃参赛的%YOU%。
    - acc: 1
      content: 「铃鹿？铃鹿！」
    - %YOU%有点害怕，忍不住伸出手去拍了一下铃鹿的肩膀。
    - 但是铃鹿毫无反应。
    - 此时，秋季天皇赏已经来到了终盘，那仿佛天边阴云一般的大榉树。
    - %UMA%们鱼贯进入了大榉树的阴影之中，又依次跑了出来。甚至连队列顺序都未曾改变。
    - 而大榉树之后不远，便是终点线。很快，原本的人气第二的选手第一个冲线，夺得了此次天皇赏的一着。
    - 突然，%YOU%感到有什么东西砸在了%YOU%的肩膀上。
    - 原来是铃鹿，%SEX%此刻好像已经失去了意识，双眼紧闭，一动不动地躺在%YOU%的怀里，任%YOU%如何呼唤也没有反应。
    - %YOU%心急如焚，站起来就要抱着铃鹿去医务室。
    - 还好，铃鹿在%YOU%即将出门的时候悠悠醒转。
    - acc: 1
      content: 「啊，铃鹿你醒了！你感觉怎么样，有没有异常？」
    - %YOU%有些惊喜地问着铃鹿，但铃鹿并没有回答。
    - if: era.get('love:2') < 75
      lines:
        - 铃鹿甚至没有对于被%YOU%抱着的事实有所表示，而是干净利落地从%YOU%怀中离开了。
        - %SEX%整理了一下自己的衣服，便头也不回地离开了训练员室。
        - acc: 1
          content: 「铃鹿？」
        - %YOU%出声呼唤%SEX%，但是%SEX%连脚步都未曾停顿，径直离开了。
        - 只留下%YOU%在训练员室中久久伫立。
    - if: era.get('love:2') >= 75
      lines:
        - %SEX%并没有说话，而是用一只手勾住了%YOU%的脖子。
        - %YOU%吃了一惊，下意识后退了一步，却恰好撞到了身后的沙发。
        - 于是，%YOU%连着怀中的铃鹿一起摔在了沙发上。
        - %YOU%挣扎着起身，有些惊恐地发现铃鹿的脸已经由白转红，鲜艳欲滴。
        - %SEX%坐在%YOU%的身上，轻轻俯下身子，靠近了%YOU%的耳朵。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，既然让我放弃了天皇赏，是不是……得给我一点什么补偿呢？」
        - 铃鹿在%YOU%耳旁吐气如兰，末了更是含住了%YOU%的耳垂，轻轻啮咬着。
        - 一股热流自%YOU%的耳垂扩散到了全身，%YOU%下意识抱住了身上的铃鹿。
        - 残存的意识指挥着%YOU%颤抖地剥掉了%YOU%与铃鹿的衣物，而当铃鹿赤裸的身躯出现在%YOU%眼前的时候，%YOU%彻底失去了理智。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对，就是这样……」 # 铃鹿主导的马跳

# 资深年11月1周
third_step_win:
  title: 命定的第三步·新的起点
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%在吗？」
    - 在那场堪称史诗的秋季天皇赏过去后的某一天，训练员室的门被铃鹿敲响了。
    - %YOU%赶紧起身，为铃鹿打开了门。
    - 门外的铃鹿脸上有些红晕，%SEX%看到了%YOU%，便朝着%YOU%微微一笑，拿出了一件物品。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我觉得，这个东西，还是放在%CALLNAME%的办公室里比较好哦。」
    - %YOU%有些两眼发直，因为铃鹿拿出来的，赫然便是%SEX%的天皇赏盾徽。
    - acc: 1
      content: 「这盾徽是你的奖品，放在我这里不太合适吧，铃鹿还是先拿回去……」
    - %YOU%摆了摆手想制止铃鹿。
    - 但是铃鹿已经把天皇赏盾徽正正当当地摆在了%YOU%的墙边。
    - 看到铃鹿根本没有把盾徽收走的想法，%YOU%只得将已经到嘴边的拒绝收了回去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说真的，%CALLNAME%，我真的认为您比我更适合拥有它。」
    - 铃鹿抓住%YOU%的肩膀，认真地看着你。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我其实差一点就要像%CALLNAME%梦中的那样发生悲剧了，还好%CALLNAME%及时唤醒了我……」
    - %YOU%想起了那次大喊后哑了许久的嗓子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，%CALLNAME%，请允许我用这个天皇赏盾徽感谢您一直以来都支持与鼓励，以及您对于我的关心。」
    - %YOU%看到铃鹿非常认真的表情，只得无奈地收下%SEX%的盾徽。

third_step_lose:
  title: 命定的第三步·虽败犹荣
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%在吗？」
    - 在那场堪称史诗的秋季天皇赏过去后的某一天，训练员室的门被铃鹿敲响了。
    - %YOU%赶紧起身，为铃鹿打开了门。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%看起来不是很忙的样子嘛，可以跟我一起聊聊天吗？」
    - %YOU%敏锐地察觉到了什么，于是请铃鹿跟%YOU%一起坐下。
    - 果然，话题很快就转到铃鹿在秋季天皇赏的失利上去了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么想都好可惜啊，%CALLNAME%……」
    - %YOU%看着有些垂头丧气的铃鹿，也是有些无奈。
    - 毕竟%SEX%为了秋季天皇赏所付出的努力%YOU%全都看在眼里，而如果不是最后的意外，%YOU%相信铃鹿是绝对可以拿下天皇赏的。
    - 不过，对于%YOU%来说，铃鹿能够在那么凶险的状态下克服困难，就已经比什么天皇赏一着要厉害得多了。
    - acc: 1
      content: 「没关系的，铃鹿，对我而言，你的平安比什么都重要……」

third_step_miss:
  title: 命定的第三步·殊途同归
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%在吗？」
    - 在秋季天皇赏过去后的某一天，训练员室的门被铃鹿敲响了。
    - %YOU%赶紧起身，为铃鹿打开了门。
    - 门外的铃鹿脸色苍白，黑眼圈很重，像是做了什么噩梦。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我……我想要向您道歉。」
    - 铃鹿说的话吓到了%YOU%，%YOU%一时间没有反应过来。
    - acc: 1
      content: 「不管发生了什么，总之……先进来说吧。」
    - %YOU%擦了擦脑门上渗出来的冷汗，让铃鹿先找地方坐下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，昨天晚上，我……」
    - 铃鹿自顾自地说着，而%YOU%的表情越来越震惊。
    - 因为%SEX%昨晚居然做了个跟%YOU%的梦一模一样的噩梦。
    - 唯一不同的是，%SEX%的梦是以%SEX%自己为视角的。而看着自己失误摔倒，乃至重伤退出比赛，绝对不是什么很好的体验。
    - %YOU%不知道该说什么安慰铃鹿，只得安静地听着%SEX%的讲述。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我想要向您道歉，之前对您的误解实在是……」
    - %YOU%看到铃鹿有些颤抖地站起来向%YOU%鞠了一躬。
    - 「其实铃鹿不需要向我道歉的，如果我是当时的铃鹿，训练员想要因为一个梦就让我放弃天皇赏，那我可不干。」
    - 铃鹿被%YOU%逗笑了，但%SEX%依旧非常坚定地想让%YOU%接受%SEX%的道歉。
    - 最终%YOU%没有办法，还是接受了。

# 资深年11月1周
# 折翼后
ending:
  title: 命定的终点
  lines:
    - 自从重伤的铃鹿被救护车接走后，%SEX%就一直处于昏迷状态。
    - %YOU%试图去医院探望%SEX%，却每一次都被%SEX%的主治医生阻止。
    - 直到今天，%YOU%接到主治医生的电话得知铃鹿恢复了意识，便立刻准备起来要去看望%SEX%。
    - divider: true
    - 医院里满是行色匆匆的医生，空气中弥漫着浓郁的消毒水的味道，使%YOU%有些头晕目眩。
    - %YOU%尽快找到了铃鹿的主治医生，并试图了解一下铃鹿的具体状况。
    - content:
        - fontWeight: bold
          content: 主治医生
        - 「%SEX%的情况非常严重，高速奔跑时发生了骨折，还伤到了腿部的动脉。」
    - content:
        - fontWeight: bold
          content: 主治医生
        - 「不过还好训练员你及时扶住了%SEX%，没有让%SEX%因为倒地受到二次伤害，否则%SEX%最好的结局也只能是被迫截肢。」
    - 听到这里，%YOU%打了个寒战。
    - content:
        - fontWeight: bold
          content: 主治医生
        - 「如果当时的情况更危急一些，你去得再慢一些，%SEX%很有可能会因为失血过多而永远离开你。」
    - %YOU%想到了那晚的梦境中，仿佛躺在红色地毯之上的铃鹿。
    - 还好，上天给予了%YOU%充分的预警，使得%YOU%能够及时救下自己的担当。
    - content:
        - fontWeight: bold
          content: 主治医生
        - 「可惜，哪怕你去得很及时，%SEX%的术后恢复情况也很好，但……恐怕%SEX%这辈子都不能剧烈运动了。」
    - 虽然这是意料之中的结果，但%YOU%还是心头一沉。
    - 如果一位%UMA%后半辈子再也不能奔跑了，那%SEX%作为%UMA%的生命似乎也就结束了……
    - 主治医生没有再继续说什么，而是带着%YOU%来到了铃鹿的病房。
    - %YOU%透过病房门上的窗户看到铃鹿正双眼无神地坐在床上，时不时抚摸一下自己的左腿，感觉心都要碎了。
    - 于是%YOU%轻轻敲了敲门，走了进去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%！」
    - 铃鹿发现来者是%YOU%，仿佛突然活过来了一样，变得稍微有些活泼了。
    - 但紧接着%SEX%又黯然低下了头，轻轻抚摸着自己的左腿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，对不起，因为我的任性，现在造成了这么大的麻烦……」
    - 铃鹿越说越伤心，到最后竟然开始小声啜泣。
    - %YOU%握住铃鹿冰冷的右手，神色复杂。
    - acc: 1
      content: 「如果我能更坚定一点阻止铃鹿，那铃鹿说不定就不会这样了……」
    - %YOU%也有些懊悔，当时自己应该更坚定一些的，说不定铃鹿就不会出现如今的伤痛了……
    - 之后许久，%YOU%与铃鹿都没有说话，直到%YOU%被主治医生请出病房。

# 非断腿线
christmas:
  lines:
    - 坐在办公桌前的%YOU%下意识抬起了头，看了看窗外。
    - 不知不觉中，学园里下起了大雪。鹅毛一样的雪花在空中飘飘荡荡，使本就宁静的世界更加静谧了。
    - %YOU%看着窗外的景色，不由得叹了口气。
    - 今天是圣诞节，而且是铃鹿资深年的圣诞节。这也就意味着，%YOU%与铃鹿已经携手度过了将近三年的时光。
    - 而这三年，不管成绩如何，铃鹿的身影已经深深烙印在了%YOU%的记忆中。
    - %YOU%站起身来，突然有种邀请铃鹿出门散步的冲动。
    - 而就在下一秒，训练员室的门被敲响了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，请问您在吗？」
    - 铃鹿话音未落，%YOU%便一把拉开了门，吓了%SEX%一跳。
    - 门外的铃鹿穿着厚厚的衣服，看样子是为出门做好了准备。
    - acc: 1
      content: 「铃鹿，我们出门散散步吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我们出门散散步吧？」
    - %YOU%与铃鹿同时开口邀请对方出门散步，听到之后不由得愣了一下，随后同时笑了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真巧呢，%CALLNAME%，那我们就一起去吧。」
    - divider: true
    - 很快，%YOU%与铃鹿便来到了室外。不过，肆意的大雪已经结束了。
    - %YOU%感到有些可惜，但铃鹿似乎不那么想。
    - %SEX%踏在厚厚的积雪上，时不时在上面慢跑几步，似乎很喜欢这种氛围。
    - acc: 1
      content: 「看起来铃鹿很喜欢雪后的环境啊。」
    - 铃鹿站在积雪上回头笑吟吟地看着%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔，貌似我还没有给%CALLNAME%讲过我小时候的事吧？我当初可就是因为雪后的寂静才爱上奔跑的哦。」
    - 听到铃鹿很有兴致地开始讲述%SEX%小时候的故事，%YOU%很感兴趣，于是竖起耳朵来仔细地听着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个时候我很小，第一次见到那么大的雪……雪后的世界非常安静，大地也是白茫茫一片……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我试着走了几步，除了踩雪时咯吱咯吱的声音外，再没有半点其他的声音。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「于是我慢慢地开始跑了起来，越来越快，白茫茫的世界在围着我旋转，好像整个天地间只有我自己一样。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我深深地爱上了那种独享整个世界的感觉，而在之后的各种赛跑中我开始发现，原来第一名的前方也是无人的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，前方那种无人的风景，如果真的亲自感受过，就不会想再把它让给别人。」
    - %YOU%还沉浸在铃鹿小时候的故事当中，而铃鹿不知道什么时候已经挽起了%YOU%的手臂。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们回去吧，%CALLNAME%？圣诞节可是还有很多事要做呢。」
    - 于是，%YOU%与铃鹿开始为铃鹿生涯中最后一个圣诞节准备起来。

# 断腿线
hope:
  title: 希望
  lines:
    - 坐在办公桌前的%YOU%下意识抬起了头，看了看窗外。
    - 不知不觉中，学园里下起了大雪。鹅毛一样的雪花在空中飘飘荡荡，使本就宁静的世界更加静谧了。
    - %YOU%看着窗外的景色，不由得叹了口气。
    - 今天是圣诞节，而且是铃鹿资深年的圣诞节。这也就意味着，%YOU%与铃鹿已经携手度过了将近三年的时光。
    - 而就在功德圆满的前夕，铃鹿因为一场意外，断送了自己的运动员生涯……
    - %YOU%有些难过，于是打算再去看望一下铃鹿。
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下雪了呢，%CALLNAME%。」
    - 铃鹿正坐在床上，有些痴迷地看着窗外的景色。哪怕是听到%YOU%来到了%SEX%的床边，也没有回过头来。
    - 接着，%SEX%开始自顾自地说起%SEX%的过往。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔，貌似我还没有给%CALLNAME%讲过我小时候的事吧？我当初可就是因为雪后的寂静才爱上奔跑的哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个时候我很小，第一次见到那么大的雪……雪后的世界非常安静，大地也是白茫茫一片……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我试着走了几步，除了踩雪时咯吱咯吱的声音外，再没有半点其他的声音。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「于是我慢慢地开始跑了起来，越来越快，白茫茫的世界在围着我旋转，好像整个天地间只有我自己一样。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我深深地爱上了那种独享整个世界的感觉，而在之后的各种赛跑中我开始发现，原来第一名的前方也是无人的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，前方那种无人的风景，如果真的亲自感受过，就不会想再把它让给别人。」
    - 铃鹿貌似轻松的一席话反而让%YOU%心里更难过了。
    - 紧接着，铃鹿回过头来认真地看着%YOU%，而%YOU%发现%SEX%的眼睛红红的，好像刚哭过一样。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，请带我出去看看吧，我想更仔细地感受一下这样的大雪，我想再去看一眼我热爱的赛场……」
    - 铃鹿的声音有些哽咽，听得%YOU%也有种想要流泪的感觉。
    - 于是%YOU%找到铃鹿的主治医生，希望能够实现铃鹿的这么一个小小的愿望。
    - 得到主治医生首肯后，%YOU%用轮椅推着有些兴奋的铃鹿离开了医院。
    - content:
        - fontWeight: bold
          content: 主治医生
        - 「嗯，%SEX%非常配合术后的治疗，而且正是得益于这个，%SEX%的恢复状况远超我的预期。」
    - content:
        - fontWeight: bold
          content: 主治医生
        - 「如果%SEX%一直像这样积极治疗，那%SEX%最后说不定可以正常地行走慢跑——但是再次参加训练与比赛是完全不可能的了。」
    - 主治医生是这么对你说的，对于%YOU%与铃鹿来说，算是十足的意外之喜。
    - 因为按照原来的情况来看，铃鹿可能再也无法奔跑了，连行走都需要借助双拐。
    - 因此，哪怕疗程还没有结束，但铃鹿完全可以坐上轮椅来到外面透透风。
    - %YOU%推着铃鹿在大雪纷飞的世界里慢慢前行着，铃鹿似乎比平时要兴奋得多，甚至差点就要站起来了。
    - %YOU%看着兴高采烈仿佛小孩子一般追逐雪花的铃鹿，心中五味杂陈。

# 全胜结局
invincible:
  title: 全战全胜
  lines:
    - 在过去的三年，一千多个日夜中，%YOU%与铃鹿共同努力，斩获一项又一项殊荣。
    - 现在，是收获祝福与景仰的时候了。
    - 随着一家家赛%UMA%界知名的媒体打出「%YOURNAME%训练员与%CHARA%的时代」这样的标题，%YOU%与铃鹿的生活也大大地被改变了。
    - 铃鹿成为了活着的传奇，领放%UMA%中无可辩驳的第一人。
    - 而你，也顺理成章地成为了指导领放%UMA%界的权威。
    - 许多刚入学的%UMA%都会以铃鹿为榜样，偏爱领放甚至是大逃跑法。
    - 先不论效果如何，至少在%THEY%的训练员看来，如果想要跑好领放跑法，最终还是要来请教%YOU%与铃鹿。
    - 在工作的闲暇，%YOU%也时常会盯着铃鹿认真的侧脸出神。
    - 如果不是遇到了铃鹿，自己的生活又怎会如此多彩呢？

# 无断腿，非一着比赛不超过2
better_ending:
  title: 功成名就
  lines:
    - 在过去的三年，一千多个日夜中，%YOU%与铃鹿共同努力，斩获一项又一项殊荣。
    - 尽管也曾有过失利，但铃鹿仍然以极高的胜率成为了人们口中的「传奇%UMA%」。
    - 可惜自此之后，%YOU%与铃鹿的生活与以往大不相同。
    - 尽管铃鹿不再以现役%UMA%的身份活动在赛场上，但%SEX%出门的时候总会遇到讨要签名的粉丝。
    - 而铃鹿总是认真细致地为粉丝们签名。
    - 每遇到这种情况，%YOU%就会感觉到，%YOU%作为一名训练员的职业生涯，已经近乎完美。

# 断腿，非一着比赛不超过1
good_ending:
  title: 折翼天使
  lines:
    - 在过去的三年，一千多个日夜中，%YOU%与铃鹿共同努力，斩获一项又一项殊荣。
    - %YOU%与铃鹿本该成为最受瞩目的组合。
    - 如果没有最后的不完美的句号的话。
    - 因此，各大媒体一致认为，如果不是运气不好，那么铃鹿是绝对可以拿下秋季天皇赏的。
    - 对此，铃鹿只是微微一笑。
    - 之后的日子一如既往，平淡而不值得被铭记。
    - 不过，当%YOU%与铃鹿遇到还在期待铃鹿重返赛场的粉丝之时，似乎日子也就不是那么平淡了。
    - 每当遇到这种粉丝，%YOU%与铃鹿只得沉默以对。

normal_ending:
  title: 相得益彰
  lines:
    - %YOU%与无声铃鹿的三年终于过去了。
    - 尽管三年里%YOU%带领着无声铃鹿取得了不错的成绩，但是在强者如林的特雷森学园里仍旧显得有些乏力。
    - 很快，新一代的%UMA%们将会以更加耀眼的成绩占据舞台的中央。
    - 而到了那时候，或许就不会再有太多人记得曾经的大逃型选手，无声铃鹿了吧？
    - 不过，平平淡淡的生活，或许正是无声铃鹿所喜欢的。
    - 从某种意义上来讲，相得益彰，无功无过，倒也还不错？

# 当铃鹿翘掉了宝冢纪念/金鯱赏的情况下得了腿伤
crazy_fan:
  title: 正打歪着
  lines:
    - %YOU%看着天空之上堆积的乌云，加快了步伐。
    - 今天是铃鹿去医院复检的日子，%YOU%正打算去接铃鹿回学园。
    - 虽然只是平常的外出罢了，但%YOU%总有一种不祥的预感。
    - %YOU%一直以错觉为由说服自己，直到来到了一条小巷之中。
    - %YOU%打算借这条小巷更快些到达医院，结果发现小巷出口处停着一辆破旧的汽车。
    - %YOU%没有办法，只得原路返回。
    - 就在%YOU%将要转身的时候，%YOU%的眼前突然一黑。
    - 呛人的土腥气弥漫在鼻腔中，%YOU%竟是被人用麻袋套住了。
    - %YOU%想挣扎呼救，结果后脑勺上突然挨了重重的一击。
    - %YOU%失去了意识。
    - 等%YOU%清醒过来的时候，%YOU%发现自己已经躺在了不知道哪里的一处田埂之上。
    - 一旁还停着%YOU%见过的那辆堵着小巷出口的破旧汽车。
    - content:
        - fontWeight: bold
          content: ？？？
        - 「哟，醒了啊，%YOURNAME%？」
    - %YOU%急忙回头，有些惊恐地发现了一个肌肉虬结，赤裸的上半身满是纹身的壮汉。
    - 他见到%YOU%惊恐的样子，掂了掂手里的棒球棍，对着%YOU%露齿一笑。
    - content:
        - fontWeight: bold
          content: 粉丝
        - 「自我介绍一下，我是%CHARA%的狂热粉丝。」
    - %YOU%盯着他的笑容，心中恐惧感更盛。
    - content:
        - fontWeight: bold
          content: 粉丝
        - 「现在，%YOURNAME%，我有一个问题。」
    - content:
        - fontWeight: bold
          content: 粉丝
        - 「你既然敢让铃鹿翘掉比赛，那为什么天皇赏还要执着地让%SEX%出走呢？」
    - content:
        - fontWeight: bold
          content: 粉丝
        - 「在你的英明指导下，铃鹿%SEX%不仅错过了一场必得的胜利，还永远地失去了再次站上赛场的权利……」
    - %YOU%看着眼前这位粉丝的样子，心中突然警铃大作。
    - content:
        - fontWeight: bold
          content: 粉丝
        - 「那么，就请你，亲自感受一下铃鹿的绝望吧。」
    - 啊！
    - 左腿处传来一阵剧痛，%YOU%甚至可以听到自己腿骨断裂的刺耳声音。
    - 很快，右腿也被如法炮制。
    - 狂热粉丝意犹未尽地收起了棒球棍，吹了声口哨。
    - content:
        - fontWeight: bold
          content: 粉丝
        - 「希望你会喜欢，我特地挑的这处偏僻场所。祝你好运，%YOURNAME%！」
    - 说完，他便径直开车离去了。
    - 而%YOU%因为双腿骨折，只得忍着剧痛在地面上缓缓爬行。
    - 很快，%YOU%便因为失血过多渐渐失去了意志。
    - 而陷入黑暗的前一刻，%YOU%还在想：
    - 早知如此，何必当初……

# 熬夜之后触发
# 速度+5，根性+15
run_together:
  title: 并跑
  lines:
    - acc: 1
      content: 「铃鹿，铃鹿？」
    - 某天早上，训练开始前，%YOU%发现铃鹿有些无精打采的样子。
    - acc: 1
      content: 「铃鹿你是不是又偷着去跑步啦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哪有！我……我有好好睡觉的啦！」
    - 铃鹿像是被吓了一跳一样，下意识开始反驳。
    - %YOU%看着铃鹿明显熬过夜的样子，并不打算相信铃鹿的说辞。
    - 于是%YOU%眼珠一转，想到了办法。
    - acc: 1
      content: 「好吧，那我们就开始训练吧？」
    - divider: true
    - 一天的训练很快结束了，%YOU%把铃鹿送到了宿舍门口并互道晚安。
    - 然后%YOU%快步走到了宿舍楼的阴影里，静静地等待着。
    - %YOU%没等多久，就发现穿着全套运动服的铃鹿出现在了宿舍门口。
    - 铃鹿谨慎地左右看了看，之后便略得意地开始向运动场的方向走去。
    - %YOU%悄悄地跟了上去，并伸出双手捂住了铃鹿的眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜哇！」
    - acc: 1
      content: 「猜～猜～我～是～谁～？」
    - 尽管%YOU%特地用了尖利的假嗓音，但铃鹿还是瞬间就安定了下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜，对不起，%CALLNAME%……」
    - acc: 1
      content: 「现在人赃俱获，铃鹿你还有什么要解释的吗？」
    - %YOU%开始欣赏起面前%UMA%紧张难堪的样子来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我，我不会再这样了，%CALLNAME%，请放心……」
    - %YOU%突然又想到了一个更有意思的主意。
    - acc: 1
      content: 「既然你已经穿好衣服了，那就去跑吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「诶？」
    - 铃鹿颇为不敢置信地抬头看着%YOU%，%YOU%只得重新宣布了自己的决定。
    - 不过没等铃鹿欢呼出声，%YOU%又坏笑着追加了两条规矩。
    - acc: 1
      content: 「但是，由于铃鹿你敢不跟我商量就偷着自主训练，我要追加两条规则：」
    - 「第一，我要跟你一起去跑；第二，你不许超过我。」
    - 铃鹿显然不太理解%YOU%的用意。不过最终，对于跑步的向往还是战胜了%SEX%内心的狐疑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那就……请吧？」
    - 于是，%YOU%带着铃鹿来到了空无一人的训练场。
    - %YOU%以标准的慢跑速度开始跑着，铃鹿也乖巧地跟在%YOU%身后慢慢跑着。
    - 但是很快，铃鹿就开始感觉不对劲。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME%跑得好慢！我明明是领放类型的%UMA%，现在却要跟在%CALLNAME%的后面……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （好难受，好想超过去然后尽情奔跑！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （呜，不能再胡思乱想了，乱想也是会消耗体力的！已经有点累了是怎么回事……）
    - acc: 1
      content: 「铃鹿，跑太快了哦？」
    - %YOU%一偏头看到明显心不在焉的铃鹿不知不觉加快了脚步，便出声提醒。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对、对不起！」
    - %YOU%听到铃鹿的声音已经略显疲惫了，心中有些高兴。
    - 于是%YOU%带着铃鹿在训练场上跑了一圈又一圈，直到铃鹿大汗淋漓为止。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼呼……好累……明明%CALLNAME%那么轻松的样子……我怎么会这么累呢……」
    - %YOU%带着铃鹿来到一旁坐下，让铃鹿稍微休息了一会。
    - acc: 1
      content: 「那么，铃鹿，下次还敢背着我偷偷跑步吗？」
    - %YOU%故意板起脸来指责着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜，不敢了，对不起！」
    - 铃鹿捂住了脸不敢面对%YOU%的目光。
    - acc: 1
      content: 「很好，既然你已经知道了错误，那么你现在可以自己去跑两圈了。」
    - 铃鹿的耳朵立了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的吗？好耶！」
    - 铃鹿原地跳了起来，下一刻已经是在跑道上了。
    - %YOU%看着铃鹿飞一般消失在夜色里的背影，暗自盘算着。
    - 这样大概就能暂时遏制住%SEX%偷偷跑步的念头了吧。