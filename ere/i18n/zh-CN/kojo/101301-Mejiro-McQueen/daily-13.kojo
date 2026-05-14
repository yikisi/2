# @file 目白麦昆 - 日常
# @author 伊兰
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「早安，%CALLNAME%，我们一起去食堂吃份早餐，再一起训练吧。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「贵安！今天也要保持着我们之间的契约刚开始的热情哦。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「贵安，今天也要度过一个优雅的一天哦。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为了目白家的夙愿，无论需要做什么我都在所不辞。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「仪容是一天的基本，为了不将睡相留到白天，我每天早上都会用心整理仪容。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「早上好，为了度过美好的一天，就让我们打起精神来吧。」
    # STATUSNAME:1 = 熬夜
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「作为目白家的%UMA%，竟然熬夜而差点迟到了，真是羞愧啊。」
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哈欠～说来昨天那个棒球比赛可真是精彩啊……我什么都没有说哦！真的没有！」
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「非常抱歉，虽然昨天是准时睡觉了，但是梦到了有关于黄金船的噩梦……只要仔细想想就会感到恶寒……」

select:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天的我，也为了延续目白家的荣光而在努力着。」
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天的训练也请你多多关照，%CALLNAME%。」
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你在找我吗，%CALLNAME%？」
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      random: true
      lines:
        - 「睡着了……」
        - 看着在训练员室内沉睡的麦昆，%YOU%的心情有些复杂。

good_night:
  sync: true
  lines:
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      lines:
        - if: era.get('status:13:39') === 0
          content: 「真是喜欢勉强自己……」
        - %YOU%稍有些辛苦地把精力耗光的麦昆以公主抱的形式抱到了宿舍楼下。
        - 「总之就拜托你送%SEX%回去了。」
        - 宿舍长点了点头，小心地将麦昆接过去。
        - 放下担子的%YOU%深吸了一口气，看了看灯火通明的学生宿舍，便转头回到自己的宿舍。
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「辛苦你了，%CALLNAME%，明天见！」
        - 终于结束的一天%YOU%站在宿舍楼门口外面，目送着麦昆回到宿舍。
        - %YOU%看着挥手的 目白麦昆，也微笑着回以同样的动作。
        - 直到 目白麦昆 上楼，自己看不到%SEX%后，%YOU%才回头，回到自己的宿舍。


talk:
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「现在状态极佳，这才是目白家的%UMA%的我该有的姿态！」
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天感觉活力满满，来吧，%CALLNAME%，无论多大的训练强度我都会接受的！」
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，今天有什么训练吗？看我用比平常更快的速度来完成。」
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「感觉状态要比平常好哦。」
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来吧，%CALLNAME%，要从什么开始做起呢？」
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天我也会努力进行训练哦，%CALLNAME%。」
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不好意思，%CALLNAME%，今天注意力不太集中……」
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜呜，感觉今天好像提不起劲头来……」
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「虽然知道要积极一点，但是身体好像不允许……」
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「目白家的%UMA%，岂会因此而倒下……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「因为目白家很大，我小时候认路需要玩偶来标记呢。」
  # CFLAGNAME:66 = 招募状态
  - if: era.get('cflag:7:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_7%……不知道为什么自从偶然的认识之后就一直缠着我。」
  - if: era.get('cflag:63:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「别看 %CALL_63% 表面那样子严肃，其实是个很温柔的人。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下次偶尔过来喝一杯下午茶怎么样，我会用目白家的做法来款待你的。」
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下次要不要一起去看棒球比赛呢，如果你能包容我那失态行为的话……」
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「因为我们目白家的%UMA%私底下都有不同的爱好，所以没什么大不了的。」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这是送给我的礼物？真是非常感谢，必须要做些彰显目白家的大方的回礼才行……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%送给我的礼物，我会好好珍惜的。」

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「为了能实现愿望，让我们一同把整个流程都做完吧。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一想到特雷森的历史有许多马娘因为伤病退役，还是会感到害怕。」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看着池塘那边的浮标，要时时刻刻为得到鱼而全神贯注来锻炼自己，也许是钓鱼的精髓所在呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好大的一条鱼呢，要不要拿着鱼一起拍照呢。」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「只要在晚上的凉爽天气下的河边散步的话，心情就会舒畅很多呢，把那些烦恼都暂时地忘记掉了」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「河边的风真是舒服啊，下次来这里要不要一起跑个步呢？」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要是抽不出来的话，我们买下来怎么样。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊啦，帝王同学很喜欢玩这个跳舞机呢。」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「想要抽到我的玩偶吗？真是的，明明本人就已经在身边了。」

o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「如果只要想象到自己有强运在身的话，应该也会抽到很好的东西吧。」
  - 从%YOU%手中接过了抽奖券，麦昆满怀期待地转了起来。
  - 咕噜噜噜……
  - 直到转盘里面的小球掉了下来，麦昆的动作才停止。
  - if: d.hot_spring === 1
    random: true
    lines:
      - 两眼放光的麦昆，走到了%YOU%面前。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，我抽到了温泉旅行券了哦！」
      -
      - acc: 1
        content: 「恭喜！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「虽然目白家名下也有优质的温泉店在那边，不过是%CALLNAME%在的话，还是倾向于过普通人的生活吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「所以，我们什么时候用掉这张券？看起来这张券是不限期的样子？」
      -
      - acc: 1
        content: 「麦昆毕业后的放松方法怎么样？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「说来也是，所以%CALLNAME%要好好保存好这张券呢。」
      - 说完，麦昆递过来温泉旅行券，而%YOU%摩挲了几下后，便仔细地放在了钱包里。

o_s_ktv:
  - random: true
    lines:
      - 因为要做胜者舞台的练习，于是%YOU%与麦昆来到了卡拉OK。
      - 「果然麦昆的嗓音就是那天籁之音啊。」
      - %YOU%听完了麦昆的歌唱之后，不自觉地露出老父亲一般的笑容。
  # CFLAGNAME:57 = 扩展变量
  - if: era.get('cflag:13:57')?.love_40 === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「轰出去——YATAKA！！」
      - %YOU%在背后看着忍耐了很久的麦昆，仿佛用尽了全力去唱她喜欢的棒球队加油曲。
      - 嗯……不过能少见地看到麦昆小孩子般的样子，也算值得了。
  - if: era.get('love:13') > 75
    random: true
    lines:
      - 「風走らせたあの子に～♫」
      - 「やや熱い視線～♫」
      - 不知为何，与麦昆步入那层关系之后，这两句歌词在%YOU%演唱之后总会激昂地唱出来。
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Waiting for Tomorrow～♫」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「少しずつ進めばいいよ～♫」
      - 轻快的伴奏与麦昆那温柔的声音融合在一起。
      - 真是无比享受。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「身……身为目白家的%YOUNG_LADY%，怎能被这个东西吓到……！」
      - %YOU%看着流出着冷汗的麦昆的双腿颤抖着，无奈只好牵着%SEX%的手让%SEX%得以保持站立。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「恋爱电影嘛……看起来%CALLNAME%意外地挺少女心的呢，说来很想知道%CALLNAME%对于恋爱的看法是怎么样的。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要我说喜欢的电影的话，大概就是悬疑片了吧，好的电影里面，尘埃落定之后出现的大反转绝对是最让人意外且惊喜的！」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，待会吃完饭可以稍微点一份饭后甜点吗，绝对不会多吃的！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这家火锅店的肉真是优等，下次要不要常来这里呢？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「因为之前做了体重管理所以可以让我吃一份？那么我就开动了哦！」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不好意思～因为要化了点妆，所以让你久等了，我们今天要去哪里呢？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「作为对%CALLNAME%一直以来教育的报答，今天就由我来买单吧。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「过马路的时候还是一起牵着手才安心呢～」
  - if: era.get('love:13') >= 51
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要不要我们做做看这样子……对，牵着手，总感觉有点紧张呢，如果被粉丝认出来的话。」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%走累了吗？那要不要找个人少的地方享受一下膝枕呢？」
      - 于是在树荫下的长椅，%YOU%在麦昆那轻微抚摸下闭着眼睛，逐渐地放松起来。

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「衣服，怎么样呢？」
      - 麦昆打开更衣室的门，在%YOU%的面前转了一圈。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「有的商场的一楼通常专门为高档品牌入驻，而卖的商品也通常会昂贵得多，我带你见识一下吧，%CALLNAME%？」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「家族的前辈们，也一定在看着担当重任的我吧。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「有时候，被寄予厚望的我有时候也会感受到被束缚着的窒息感。」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「竟然在校园里面牵着手？万一被同学们发现了怎么办啊……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「感觉有好多人看着着我们啊，要冷静，冷静……」

s_r_lunch:
  - random: true
    lines:
      - 今天与麦昆一起上了天台，麦昆带来了便当过来与%YOU%一同共享。
      - 疲于许多事情的%YOU%如同救命稻草一般狼吞虎咽起来。
  - random: true
    lines:
      - 明明只是一起刚吃完了午饭，麦昆却靠在了%YOU%的肩上一动不动，那么快就犯困了吗？
      - 稍微有点脱不开身的%YOU%之后愣愣地保持着姿势，希望不要吵醒麦昆。
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，啊——」
      - 自从跨越那道关系之后,不知不觉连吃饭的时间都慢了下来。
      - 想来应该是麦昆一勺一勺地喂给%YOU%的关系。
      - 不过逐渐习惯了的%YOU%也微笑着接受着麦昆的投喂。

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔，人家想吃芭菲嘛。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「因为常年独居所以会嫌做饭麻烦？只要有我在的话，%CALLNAME%还会那样想吗？」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「因为先前向佣人请教了一些烹饪的技巧，所以今天带来了我自己做的便当，要不要试试？」

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「即使是目白家的%UMA%，也不是什么都懂哦。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「所以%CALLNAME%，还请指导我。」

office_rest:
  - random: true
    lines:
      - 明明只是因为稍微有些困而闭目休息了一下，结果却不小心睡着了。
      - 察觉到肩膀的异样的%YOU%看了一下旁边，竟然是睡着的 目白麦昆。
      - 于是%YOU%不禁又保持了这个模样几分钟。
  - random: true
    lines:
      - 「小心……别动，对……」
      - %YOU%没有在意膝上麦昆变红的脸颊，用棉签为%SEX%掏耳朵。
      - 只不过相比人类的耳朵，马耳带来的触感显得有些奇特……
  - if: era.get('love:13') >= 41
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我带来了棒球比赛的录像带，要不要看一下棒球比赛呢？」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「喜欢我的膝枕吗？只要%CALLNAME%喜欢的话，我都愿意这样子做哦。」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - 「麦昆，来，抱一下。」
      - 得到麦昆同意后，%YOU%紧紧地抱住了麦昆的身体，贪婪地吸着%SEX%头发上的香味。
      - 没有什么比和亲密的担当腻在一起更美好的事情了。

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「居然把怪物的招式都摸透了，像是将它把玩弄在手掌心一样，真是太厉害了。」
      - %YOU%娴熟的操作技巧将身旁的麦昆震撼到捂嘴。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种考验着我们一心同体的游戏，我一定要通关它。」
      - 不熟练的麦昆努力适应着手柄，与%YOU%玩着面前的双人游戏。

# 新秀年
birthday1:
  title: 初见时的生日
  lines:
    - 麦昆生日当天的训练员室内中，在场的目白家%UMA%密谋了一般安静地在各自的座位上，眼睛齐刷刷地看向了同一个地方。
    - 而%THEY%看向的地方，自然是今天的主角。
    - 而 %YOU% 双手放在带了眼罩的麦昆肩上，慢慢带领着%SEX%来到了大桌子跟前。
    - acc: 1
      content: 「好了。」
    - 随着 %YOU% 将眼罩摘下，随后大桌子旁坐着的目白家的%UMA%便齐声喊着
    - content:
        - fontWeight: bold
          content: 众人
        - 「麦昆生日快乐！！！！！！」
    - 映入眼帘的是自己最熟悉的目白家的姐妹们之外，还有被盛装打扮过的墙，墙上挂着横幅的名字赫然是「目白麦昆生日快乐！」的字样。
    - 麦昆略微惊讶了一下，然后甜甜地笑了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢大家。」
    - 麦昆坐下来之后，面带微微笑容的高峰则是递给了麦昆一封信。
    - color: %COLOR_86%
      content:
        - fontWeight: bold
          content: %RAMONU%
        - 「祖母大人给你的一封信。」
    - 听到这句话的麦昆立刻认真地竖起了耳朵，接过信件之后拆开，仔细的阅读起来。
    - 庆祝麦昆入学以来的第一次生日、重新阐述了一遍目白家的夙愿、最后嘱咐麦昆在学院内要好好锻炼……
    - 许久，%SEX%整齐地将信件折叠好来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我会将目白的荣光延续下去的。」
    - acc: 1
      content: 「总之先开开心心地过一下生日吧。」
    - 麦昆略微惊讶地看向了身后的%YOU%，本能地盖住了信的内容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说的也是。」
    - %SEX%将信件放好，随后神情一下变成了热情。
    - 随着共唱生日歌，许愿，一起吃蛋糕的流程做完，今天也以庆祝麦昆的生日而结束。

birthday2:
  title: 第二年生日
  lines:
    - 这周的麦昆生日期间，%YOU% 将麦昆带到了自己的公寓里。
    - acc: 1
      content: 「坐在这里，看看书看看电视也好，总之就是不要动哦。」
    - %YOU% 这样子对麦昆这样说着，但麦昆只是小声嘀咕了几句也就答应了你的请求。
    - 过了几分钟，一杯蜜瓜芭菲由%YOU%用双手从厨房里端出来，端端正正地放在麦昆的面前。
    - %YOU%一边玩味地看着麦昆那紧盯着芭菲的眼睛，一边笑着坐在%SEX%的面前。
    - 「为了庆祝今天的小寿星生日，自己特别地做出来这个芭菲的哦。」
    - 好像%YOU%的那一句话给麦昆打了定心针一样，%SEX%拿起了长勺子，迟迟没有下嘴。
    - %SEX%的神色也开始抉择起来。
    - acc: 1
      content: 「害怕吃胖了吗？这芭菲的原材料都是以低热量为基础的哦。」
    - %YOU% 歪着头看着麦昆。
    - 麦昆却摇了摇头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是，%CALLNAME%亲自做的芭菲，有点舍不得这么吃完。」
    - acc: 1
      content: 「虽然平常也不是不给你做，但是如果再犹豫的话，芭菲可就融化掉了哦。」
    - 听完%YOU%说的话，麦昆只好一手拿起芭菲，一手拿起勺子，小心地挖起一点冰淇淋，放在嘴里细细品味着。
    - 随后便抚着脸颊，摆出那品尝到极致美味时露出的甜蜜表情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%的芭菲，果然还是比任何甜品店的要好吃。」
    - 即使如此，%SEX%也依然一小勺一小勺地细细品尝。
    - 而%YOU%也看着%SEX%享受的表情，一同消磨时间着。

birthday3:
  title: 第三年生日
  lines:
    - 麦昆生日当天的晚上时分。
    - 麦昆蒙着眼被 %YOU% 引导着走向了训练员室。
    - 揭开遮眼布的一瞬间，训练员室中麦昆的朋友一同齐喊起来。
    - content:
        - fontWeight: bold
          content: 众人
        - 「麦昆生日快乐！！！！！！」
    - 除此之外，还有两个礼炮分别在麦昆的左右两边打响。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家……」
    - 看到如此盛大的场面，麦昆捂着嘴企图掩盖自己的感动。
    - acc: 1
      content: 「今晚就别绷紧神经了，尽情放松一下。」
    - %YOU%拉着麦昆的手，与%SEX%一同坐到了蛋糕面前。
    - 之后，就是经典的共唱生日歌，许愿环节。
    - 而在送礼物环节中，每个人都送给了麦昆一件礼物，但%YOU%却迟迟没有送上。
    - %YOU%从办公桌上打开了柜子，拿起了一件东西。
    - 「虽然可能对现在有点不太合时宜。」
    - %YOU%向着麦昆展示了礼物
    - ——用纸做的春季天皇赏盾徽。
    - 「这个月就是春季天皇赏开始了，总之祝你胜利。」
    - 面前的麦昆双手拿着盾徽，停顿了一会才开口。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是笨蛋呢，%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「期待着吧——我会把真正的天皇赏盾徽带回来的。」
    - 麦昆露出决心的表情，抚摸着%YOU%送给%SEX%的「盾徽」。
    - acc: 1
      content: 「总之，我们还是先享受一下生日吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说的也是。」
    - 将那盾徽放在了办公桌之后，%YOU%与麦昆又立刻回到了庆祝生日的人群中去