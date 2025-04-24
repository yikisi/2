选中互动对象:
  sync: true
  lines:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「今天的我，也为了延续目白家的荣光而在努力着。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「今天的训练也请你多多关照，%称呼%。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「你在找我吗，%称呼%？」
  - random: true
    lines:
      - 「睡着了……」
      - 看着在训练员室内沉睡的麦昆，%你%的心情有些复杂。

回合开始互动对话:
  sync: true
  lines:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「早安，%称呼%，我们一起去食堂吃份早餐，再一起训练吧。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「贵安！今天也要保持着我们之间的契约刚开始的热情哦。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「贵安，今天也要度过一个优雅的一天哦。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「为了目白家的夙愿，无论需要做什么我都在所不辞。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「仪容是一天的基本，为了不将睡相留到白天，我每天早上都会用心整理仪容。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「早上好，为了度过美好的一天，就让我们打起精神来吧。」
  - if: era.get('status:13:熬夜')
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「作为目白家的%马娘%，竟然熬夜而差点迟到了，真是羞愧啊。」
  - if: era.get('status:13:熬夜')
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「哈欠～说来昨天那个棒球比赛可真是精彩啊……我什么都没有说哦！真的没有！」
  - if: era.get('status:13:熬夜')
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「非常抱歉，虽然昨天是准时睡觉了，但是梦到了有关于黄金船的噩梦……只要仔细想想就会感到恶寒……」

回合结束互动对话:
  sync: true
  lines:
  - if: era.get('status:13:沉睡')
    random: true
    lines:
      - 「真是喜欢勉强自己……」
      - %你%稍有些辛苦地把精力耗光的麦昆以公主抱的形式抱到了宿舍楼下。
      - 「总之就拜托你送%她%回去了。」
      - 宿舍长点了点头，小心地将麦昆接过去。
      - 放下担子的%你%深吸了一口气，看了看灯火通明的学生宿舍，便转头回到自己的宿舍。
  - else:
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「辛苦你了，训练员先生，明天见！」
      - 终于结束的一天%你%站在宿舍楼门口外面，目送着麦昆回到宿舍。
      - %你%看着挥手的麦昆，也微笑着回以同样的动作。
      - 直到麦昆上楼，自己看不到%她%后， %你%才回头，回到自己的宿舍。


闲聊:
  - if: era.get('cflag:13:干劲') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「现在状态极佳，这才是目白家的%马娘%的我该有的姿态！」
  - if: era.get('cflag:13:干劲') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「今天感觉活力满满，来吧，%称呼%，无论多大的训练强度我都会接受的！」
  - if: era.get('cflag:13:干劲') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「%称呼%，今天有什么训练吗？看我用比平常更快的速度来完成。」
  - if: era.get('cflag:13:干劲') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「感觉状态要比平常好哦。」
  - if: era.get('cflag:13:干劲') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「来吧，%称呼%，要从什么开始做起呢？」
  - if: era.get('cflag:13:干劲') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「今天我也会努力进行训练哦，%称呼%。」
  - if: era.get('cflag:13:干劲') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「不好意思，%称呼%，今天注意力不太集中……」
  - if: era.get('cflag:13:干劲') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「呜呜，感觉今天好像提不起劲头来……」
  - if: era.get('cflag:13:干劲') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「虽然知道要积极一点，但是身体好像不允许……」
  - if: era.get('cflag:13:干劲') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「目白家的%马娘%，岂会因此而倒下……」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「因为目白家很大，我小时候认路需要玩偶来标记呢。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「黄金船同学……不知道为什么自从偶然的认识之后就一直缠着我。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「别看狄杜斯同学表面那样子严肃，其实是个很温柔的人。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「下次偶尔过来喝一杯下午茶怎么样，我会用目白家的做法来款待你的。」
  - if: era.get('love:13') >= 41
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「下次要不要一起去看棒球比赛呢，如果你能包容我那失态行为的话……」
  - if: era.get('love:13') >= 41
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「因为我们目白家的%马娘%私底下都有不同的爱好，所以没什么大不了的。」

送礼:
  sync: true
  lines:
  - random: true
    lines:
    - color: %代表色%
      content:
        - fontSize: bold
          content: 目白麦昆
        - 「这是送给我的礼物？真是非常感谢，必须要做些彰显目白家的大方的回礼才行……」
  - random: true
    lines:
    - color: %代表色%
      content:
        - fontSize: bold
          content: 目白麦昆
        - 「%称呼%送给我的礼物，我会好好珍惜的。」

外出神社祈福:
  - random: true
    lines:
    - color: %代表色%
      content:
        - fontSize: bold
          content: 目白麦昆
        - 「为了能实现愿望，让我们一同把整个流程都做完吧。」
  - random: true
    lines:
    - color: %代表色%
      content:
        - fontSize: bold
          content: 目白麦昆
        - 「一想到特雷森的历史有许多马娘因为伤病退役，还是会感到害怕。」

河边钓鱼:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「看着池塘那边的浮标，要时时刻刻为得到鱼而全神贯注来锻炼自己，也许是钓鱼的精髓所在呢。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「好大的一条鱼呢，要不要拿着鱼一起拍照呢。」

散步:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「只要在晚上的凉爽天气下的河边散步的话，心情就会舒畅很多呢，把那些烦恼都暂时地忘记掉了」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「河边的风真是舒服啊，下次来这里要不要一起跑个步呢？」

街机厅:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「要是抽不出来的话，我们买下来怎么样。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「啊啦，帝王同学很喜欢玩这个跳舞机呢。」
  - if: era.get('love:13') > 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「想要我的玩偶吗？真是的，明明本人就已经在身边了。」

抽奖:
  - color: %代表色%
    content:
      - fontSize: bold
        content: 目白麦昆
      - 「如果只要想象到自己有强运在身的话，应该也会抽到很好的东西吧。」
  - 从%你%手中接过了抽奖券，麦昆满怀期待地转了起来。
  - 咕噜噜噜……
  - 直到转盘里面的小球掉了下来，麦昆的动作才停止。
  - if: d.hot_spring
    random: true
    lines:
        - 两眼放光的麦昆，走到了%你%面前。
        - color: %代表色%
          content:
            - fontSize: bold
              content: 目白麦昆
            - 「%称呼%，我抽到了温泉旅行券了哦！」
        -
        - acc: 1
          content: 「恭喜！」
        -
        - color: %代表色%
          content:
            - fontSize: bold
              content: 目白麦昆
            - 「虽然目白家名下也有优质的温泉店在那边，不过是%称呼%在的话，还是倾向于过普通人的生活吧。」
            - 「所以，我们什么用掉这张券？看起来这张券是不限期的样子？」
        -
        - acc: 1
          content: 「麦昆毕业后的放松方法怎么样？」
        -
        - color: %代表色%
          content:
            - fontSize: bold
              content: 目白麦昆
            - 「说来也是呢～所以%称呼%要好好保存好这张券呢。」
        - 说完，麦昆递过来温泉旅行券，而%你%只是摩挲几下后，便仔细地放在了钱包里。

卡拉OK:
  - random: true
    lines:
      - 因为要做胜者舞台的练习，于是%你%与麦昆来到了卡拉OK。
      - 「果然麦昆的嗓音就是那天籁之音啊。」
      - %你%听完了麦昆的歌唱之后，不自觉地露出老%父亲%一般的笑容。
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「我们是勇敢的步兵队，大步向前又满腔热血的敢死队～♪」
  - if: era.get('love:13') > 41
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「轰出去——YATAKA！！」
      - %你%在背后看着忍耐了很久的麦昆，仿佛用尽了全力去唱她喜欢的棒球队加油曲。
      - 嗯……不过能少见地看到麦昆小孩子般的样子，也算值得了。
  - if: era.get('love:13') > 75
    random: true
    lines:
      - 「風走らせたあの子に～♫」
      - 「やや熱い視線～♫」
      - 不知为何，与麦昆步入那层关系之后，这两句歌词总会激昂地唱出来。

看电影:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「身……身为目白家的大小姐，怎能被这个东西吓到……！」
      - %你%看着流出着冷汗的麦昆的双腿颤抖着，无奈只好牵着%她%的手让她得以保持站立。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「恋爱电影嘛……看起来%称呼%意外地挺少女心的呢，说来还是很想知道%称呼%对于恋爱的看法是怎么样的。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「要我说喜欢的电影的话，大概就是悬疑片了吧，好的电影里面，尘埃落定之后出现的大反转绝对是最让人意外且惊喜的！」

吃饭:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「%称呼%，待会吃完饭可以稍微点一份饭后甜点吗，绝对不会多吃的！」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「这家火锅店的肉真是优等，下次要不要常来这里呢？」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「因为之前做了体重管理所以可以让我吃一份？那么我就开动了哦！」

约会:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「不好意思～因为要化了点妆，所以让你久等了，我们今天要去哪里呢？」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「作为对%称呼%的报答，今天就由我来买单吧。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「过马路的时候还是一起牵着手才安心呢～」
  - if: era.get('love:13') >= 51
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「要不要我们做做看这样子……对，牵着手，总感觉有点紧张呢，如果在路上牵着手被粉丝认出来的话。」
  - if: era.get('love:13') >= 75
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「%称呼%走累了吗？那要不要找个人少的地方享受一下膝枕呢？」
      - 于是在树荫下的长椅，%你%在麦昆那轻微抚摸下闭着眼睛，逐渐地放松起来。

逛商场:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「衣服，怎么样呢？」
      - 麦昆打开更衣室的门，在%你%的面前转了一圈。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「有的商场的一楼通常专门为高档品牌入驻，而卖的商品也通常会昂贵得多，我带你见识一下吧，%称呼%？」

枯树洞:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「家族的前辈们，也一定在看着担当重任的我吧。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「有时候，被寄予厚望的我有时候也会感受到被束缚着的窒息感。」

中庭约会:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「竟然在校园里面牵着手？万一被同学们发现了怎么办啊……」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「感觉有好多人看着着我们啊，要冷静，冷静……」

吃便当:
  - random: true
    lines:
      - 今天与麦昆一起上了天台，麦昆带来了便当过来与%你%一同共享。
      - 疲于许多事情的%你%如同救命稻草一般狼吞虎咽起来。
  - random: true
    lines:
      - 明明只是一起刚吃完了午饭，麦昆却靠在了%你%的肩上一动不动，那么快就犯困了吗？
      - 稍微有点脱不开身的%你%之后愣愣地保持着姿势，希望不要吵醒麦昆。
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「%称呼%，啊——」
      - 自从跨越那道关系之后,不知不觉连吃饭的时间都慢了下来。
      - 想来应该是麦昆一勺一勺地喂给%你%的关系。
      - 不过逐渐习惯了的%你%也微笑着接受着麦昆的投喂。

一起做饭:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「唔，人家想吃芭菲嘛。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「因为常年独居所以会嫌做饭麻烦？只要有我在的话，%称呼%还会那样想吗？」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「因为先前向佣人请教了一些烹饪的技巧，所以今天带来了我自己做的便当，要不要试试？」

指导学习:
  - color: %代表色%
    content:
      - fontSize: bold
        content: 目白麦昆
      - 「即使是目白家的%马娘%，也不是什么都懂哦。」
  - color: %代表色%
    content:
      - fontSize: bold
        content: 目白麦昆
      - 「所以%称呼%，还请指导我。」

一起休息:
  - random: true
    lines:
      - 明明只是因为稍微有些困而休息了一下，结果却不小心睡着了。
      - 察觉到肩膀的异样的%你%看了一下旁边，竟然是睡着的麦昆。
      - 于是%你%不禁又保持了这个模样几分钟。
  - random: true
    lines:
      - 「小心……别动，对……」
      - %你%没有在意膝上麦昆变红的脸颊，用棉签为%她%掏耳朵。
      - 只不过相比人类的耳朵，马耳带来的触感显得有些奇特……
  - if: era.get('love:13') >= 41
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「我带来了棒球比赛的录像带，要不要看一下棒球比赛呢？」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「喜欢我的膝枕吗？只要%称呼%喜欢的话，我都愿意这样子做哦。」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - 「麦昆，来，抱一下。」
      - 得到麦昆同意后，%你%紧紧地抱住了麦昆的身体，贪婪地吸着%她%头发上的香味。
      - 没有什么比和亲密的担当腻在一起更美好的事情了。


一起打游戏机:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「居然把怪物的招式都摸透了，像是将它把玩弄在手掌心一样，真是太厉害了。」
      - %你%娴熟的操作技巧将身旁的麦昆震撼到忘记合不拢嘴。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白麦昆
          - 「这种考验着我们一心同体的游戏，我一定要通关它。」
      - 不熟练的麦昆努力适应着手柄，玩着面前的双人游戏。