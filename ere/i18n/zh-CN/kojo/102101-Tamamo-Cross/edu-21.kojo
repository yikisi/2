# @file 玉藻十字 - 育成
# @author 雞雞
begin_race:
  title: 被卖进火坑了！
  lines:
    - 玉藻十字紧张的心情在出道战胜利后转化成了绝大的放松，就像泄了气的气球一样瘫软在休息室的沙发上。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱的手还在抖……这就是比赛吗……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，咱还赢了？」
    -
    - acc: 1
      content: 「辛苦你了。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱说，咱们以后还要这样继续下去？」
    - 玉藻十字躺在沙发上，%SEX%仍在微微发抖的手甚是扎眼。
    -
    - acc: 1
      content: 「是啊。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是感觉像是被卖进火坑了一样……不。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我确实把自己给卖了……」
    -
    - %SEX%那疲累的双眼从%YOU%移开看向头上的假天花板，讥笑道。
    - 一年，%SEX%还需要一年时间。
    - %SEX%的身体比一般%UMA%都来得瘦弱。假如不好好锻炼一番就强行挑战更高级别的比赛，那么很可能不仅没法得到理想的赛果，还可能落下伤病。
    - 不仅如此，由于%SEX%在一段时间前才开始接触这项运动，因此在根基上就比众多从小时候就以赛%UMA%为目标的人要薄弱……
    - 这是%YOU%在与%SEX%共同制定方针时就提到过的两个致命弱点。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谷底翻身之路可没有那么好走啊……」

misfortune:
  title: 晴天霹雳
  lines:
    #新秀级 8月第1周 训练员室
    - 训练室大门被猛地打开，轰隆的碰撞声让正在处理文书的%YOU%吓得一个激灵。
    - 回头看去，是气喘吁吁的玉藻十字。%SEX%苍白的脸上、眼里写满了慌张，显然是遭到了什么事情……
    -
    - acc: 1
      content: 「小玉？发生什么了？」
    -
    - %YOU%从座位站起身，准备帮助这位看来随时都有可能昏倒的%UMA%。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱……咱妈进医院了……」
    -
    - %SEX%结结巴巴地对%YOU%诉说母亲在家突然昏倒，然后被送往医院治理的经过。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然让小不点他们报警了……但……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱、咱好怕……！为什么咱偏偏不在他们身边！」
    - acc: 1
      content: 「……明白了，先把训练放一边。我们去给你妈妈探病吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起……训练员。让你费心了……」
    -
    - 玉藻十字一向都无比珍视家人，也只有家人才会让这平常开朗活泼的孩子露出如此垂头丧气的模样。
    -
    - acc: 1
      content: 「没这回事。家人永远是排在第一位的。……而且，小玉也是为了家人才来到这里训练的吧？」
    -
    - 要是在这时候对家人不管不顾，那就是本末倒置。
    -
    - %SEX%紧锁的眉头稍微舒展了一些，向眼前的人露出了浅浅的、强行的微笑。
    - 在那之后，%YOU%连忙叫了的士心急火燎地前往玉藻母亲所在的医院。在那里，%YOU%第一次见到了玉藻十字的父母。
    - 首先映入眼帘的是坐在病房里侧，小不点们消沉的模样。
    - 玉藻父亲脸上也绷得紧紧的，也难怪病房内气氛沉重得让人喘不过气。
    - 母亲本人正安稳地躺在床上，尚未从昏迷中苏醒。
    - 父亲则从床边座椅上站起来迎接%SEX%的训练员。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爹，这是咱训练员……」
    - 中年男人的头发已经花白了些许，眉宇之间挤满了深深的纹路。
    # CFLAGNAME:0 = 性别
    - if: era.get('cflag:21:0') === 1
      content:
        - fontWeight: bold
          content: 玉藻父
        - 「您好，犬子平常受您照顾了。」
    - if: era.get('cflag:21:0') !== 1
      content:
        - fontWeight: bold
          content: 玉藻父
        - 「您好，小女平常受您照顾了。」
    - acc: 1
      content: 「希望尊夫人平安无事。」
    -
    - %YOU%以不会打扰病人的音量说道。中年男人微微点头，满布眉间的皱纹因担忧而更深。
    - 所幸，玉藻母亲的病况只是疲劳过度，只需休息数天即可出院。
    - 一人一%UMA%在医院看护病人数小时后，便乘车回到特雷森学园。
    -
    - acc: 1
      content: 「今天不早了，回宿舍休息吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - acc: 1
      content: 「怎么了吗？」
    - if: era.get('relation:21:0') > 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「咱……睡不着。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「刚才在车上咱就想过要睡了，但是……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一想到老妈的事……」
        - acc: 1
          key: select
          content: 「那……今天晚上由我来陪你吧。」（爱慕+2，获得一级疲惫）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「能不能别若无其事地说出这种会让人误会的话啊……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不过，陪睡吗……好像也不是不行……」
            - if: era.get('love:21') >= 50
              content:
                - 二人在床上相依而睡，自对方身上散发的温暖气息让渴求肌肤相触的本能得到了满足。
        - acc: 2
          content: 「我有安眠药……分你一点吧。」（好感+10）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呜哇——变态萝莉控展露本色——」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不过为什么是安眠药？不是褪黑素？」
            - acc: 1
              content: 「训练员也是很辛苦的。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……」
    - if: era.get('relation:21:0') <= 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没什么……」
        - 在把玉藻十字送回宿舍后，%YOU%们就互相告别了。
#（获得状态【雷殛】：电流衰弱，*注：沿用帝王【腿伤】）

cloudy1:
  title: 阴云密布之一
  lines:
    #新秀级 9月 第1周 训练员室
    - 自玉藻母亲因故住院后已经过去一个月。
    - 尽管并非什么严重的健康问题，但出于谨慎，%SEX%出院后仍被强制要求暂时静养。
    - 家中的经济支柱只剩下了玉藻父亲。
    - 家中砸锅卖铁供自己前来特雷森接受最好的教育……假如自己无法在马上就要开始的经典年中取得好成绩的话，可没有脸面去见家人了啊。
    - 不论如何，既然自己的负责%UMA%正在面对艰难的状况，得想办法让玉藻十字走上正轨！
    - acc: 1
      content: 「这里就用正攻法，加强训练量！」（三回合内训练效果+20%、体力消耗+5%）
      lines:
        - content: 「尝试用斯巴达人一般的训练量来麻醉玉藻十字的思考……」
    - acc: 2
      content: 「让小玉高兴起来，从心情下手！」（三回合内干劲持续提高、体力消耗-10%）
      lines:
        - content: 「生活大于赛跑，多让小玉撒撒娇吧……」

cloudy2:
  title: 阴云密布之二
  lines:
    #新秀级 10月 第1周 训练员室
    - %YOU%为玉藻十字安排了一场泥地模拟赛作为一个月以来努力训练的总结，同时累积比赛经验。
    - 随着发令员对天鸣枪后闸门猛地开启，各位%UMA%从中鱼贯而出。
    - 但一直到开赛之前都显得游刃有余的玉藻十字则罕有地出现了晚出闸的失误。
    - 也许只是偶然？%YOU%眯起眼睛如此想道。
    - 玉藻十字紧咬在%UMA%群身后，然而由于一时无法抢得身位，%SEX%不得不开始焦急地扭头观察。
    - acc: 1
      content: 「不要急……要慢慢移动……」
    - 而当模拟赛来到最后弯道之时，异变突生。
    - 只见前方的%UMA%不知何故突然滑倒在地，身后马群中的一部份躲闪不及，一个接一个地卷入其中。
    - 在漫天的沙尘里，你看到瞪大双眼的小玉也即将被那人堆吞噬……
    - acc: 1
      key: select
      content: 「小玉——！！」（获得二层疲惫）
      lines:
        - 据说人的意识会比身体的反应慢上0.5秒。
        - 没有注意身前事故的玉藻十字最终仍然勉强地以极为扭曲的姿势避免了直接碰撞，但仍然因为势能的关系失去平衡，在泥地上如落坑的保龄球一样不住翻滚直到停止下来。
        - 与此同时，%YOU%几乎是在事故发生当下就越过了栏杆拔足狂奔向玉藻十字的方向。
        - %YOU%焦急地检查变成栗毛%UMA%的玉藻十字。所幸，除了擦伤外并未留下伤患。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「疼疼疼……抱歉哪，训练员……」
    # FLAGNAME:15 = 当前声望
    - if: era.get('flag:15') >= 1000
      acc: 2
      content: 「跳起来——！！」（获得一层疲惫）
      lines:
        - ……
        - 玉藻十字借助势能猛地自赛道跳起，径直越过了数名还在地上滚动的赛%UMA%。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「别小瞧了咱！看我的五点着地法——！！」
        - 双腿并拢，在落地瞬间顺序以双脚、小腿、膝部、臀部、腰部各五点将冲击力尽数分散。
        - 与此同时，%YOU%几乎是在事故发生当下就越过了栏杆拔足狂奔向玉藻十字的方向。
        - acc: 1
          content: 「小玉——！！」
        - %YOU%焦急地检查变成栗毛%UMA%的玉藻十字，尽管全身蒙尘，但%SEX%几乎毫发未损。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊——别摸了别摸了！大家都在看呢！」
    - 当天的模拟赛最终在一片混乱当中终止了。

cloudy3:
  title: 阴云密布之三
  lines:
    #新秀级 10月 第2周 训练员室
    - 随着喀嗒一声，%YOU%看到了玉藻十字推开训练员室的大门。
    - 上周的意外在%SEX%身上留下了不同程度的皮外伤。也多亏了是皮外伤，玉藻十字才不需要像粽子一样被绷带包得严严实实。
    - 不过，在%UMA%惊人的速度下碰撞导致的瘀伤与撞伤绝不能轻视。%YOU%也不得不把训练的强度降低，集中在锻炼身体上。
    -
    - acc: 1
      content: 「嗯呣，看来恢复得不错啊。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哟，训练员。」
    -
    - 玉藻十字笑着点点头，表示自己已经准备好进行今天的训练了。
    - 二人来到了热闹的训练赛道，这里在训练或在准备训练的学生们似乎并没有因为上周的大规模落马意外而产生什么微妙的情绪。
    - 毕竟悲剧并不发生在自己身上，也不会发生在自己身上。
    -
    - acc: 1
      content: 「今天是你一周以来第一次正式跑圈，别勉强了。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「噢！」
    -
    - 玉藻十字便站到了一旁开始热身、拉伸。%YOU%则尽着训练员的责任，细心地观察着%SEX%的步态与姿势。
    - 注意到炽热视线的玉藻十字嘴角勾起了微笑。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你最近好像越来越明目张胆了啊，萝莉控。」
    -
    - acc: 1
      key: select
      content: 「才、才没有！这是正规流程、流程！」（好感+10）
    - acc: 2
      content: 「又不会少块肉。」（爱慕+5）
    -
    - %SEX%哈哈一笑便站到赛道上，随着%YOU%的号令开始了今天的训练。

classical_new_year:
  title: 新年的抱负
  lines:
    #1月 第一周 训练员室内 新年（经典年）
    #事件名：新年的抱负
    - 新年来临，随着年末年始，玉藻十字也晋升到了经典级。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，新年快乐啊。」
    - 来到训练员室的%SEX%笑着向%YOU%打了个招呼。
    - acc: 1
      content: 「新年快乐，小玉。」
    - 玉藻十字扑通一声地坐到沙发上，翻阅起了当天的训练计划。
    - acc: 1
      content: 「难得的新年不放松一下吗，回家过个年什么的？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说得也是，不过在实现《白色闪电》前还不能闲下来啊……」
    - %SEX%抬起头向%YOU%投向热切的目光，不自信的神情下埋藏实现梦想的志向。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在我还没有……值得带回老家的东西。」
    - acc: 1
      content: 「这样啊。」
    - %YOU%强行让自己重新投入到了工作当中，但为了让房间里的气氛不至于陷入死气沉沉般的尴尬，还是随口问出了一句：
    - acc: 1
      content: 「说起来，小玉今年在比赛之外有什么想做的吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……实在要说的话……」
    - %SEX%滚了滚圆圆的蓝眼睛，思考道。
    - acc: 1
      key: select
      content: 「锻炼吐槽力如何？」（耐力+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「关西人就一定要吐槽吗——！啊，中计了！」
        - 二人哈哈大笑，欢乐的气氛降临到本应无比沉重的房间中。
        - 但%YOU%没有注意到的是，%SEX%之后真的到处寻找校园里的%UMA%天天吐槽去了。
    - acc: 2
      content: 「来举办章鱼烧派对！」（体力+10%）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那就来吃这个『小玉特制没有章鱼的烧』吧！」
        - 虽然章鱼烧里没有章鱼，但酱汁和汤汁都是一绝。
        - 小玉以后一定能成为好妻子吧。
    - acc: 3
      content: 「学习一下东京风情！」（技能点数+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么我们就来一场东京观光旅行好了！」
        - 在众多景点中，玉藻十字似乎对美术馆情有独钟。
        - 而且让人意外的是从文森特・马高到欧仁・马克罗瓦都如数家珍……

seems:
  title: 似乎能行？
  lines:
    #3月 第1周 竞马场休息室内
    - 不急于求成，先于低级别比赛试探自己的实力——这是%YOU%对玉藻十字定下的短期方针。
    - 而%SEX%也很漂亮地完成了被交托的任务。
    - acc: 1
      content: 「干得很好呢，小玉。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「托您的福，托您的福。」
    -
    - %SEX%正襟危坐地坐在%YOU%对面，以毛巾擦拭剧烈运动后脸上的汗痕。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样一来，咱也是……小有所成了呐。」
    -
    - acc: 1
      content: 「小玉将来肯定能发光发热的，我相信你。」
    -
    - 玉藻十字闭起了双眼，%SEX%想要想像自己穿着决胜服站到名为G1的最高舞台之上。
    - %SEX%拼命地幻想着，但从参赛%UMA%到赛道的轮廓都模糊不清。
    - 不如说，自己到底能参与什么比赛？
    - 日本杯？天皇赏？有马纪念？
    - 在场的二人心知肚明玉藻十字还在怀疑自己，像这样的赛%UMA%是无法更上一层楼的。
    -
    - acc: 1
      content: 「小玉，你要知道能赢下公开赛的赛%UMA%已经能被称作精英了。」
    -
    - 在URA，每年投身绿茵场上的数千名新人赛%UMA%中，最终只有约一成能成为公开赛%UMA%。
    -
    - acc: 1
      content: 「把和你一样怀揣梦想的赛%UMA%踩在脚下的同时自怨自艾，你不觉得这样有点傲慢吗？」
    -
    - 玉藻十字心里一沉，知道事实是不容辩驳的。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是这样吗，似乎能行啊……」
    - 到了最后，连脑海中的自己都似乎快要消失了。
    - 于是只能违心地说出欺骗的话。


#初次育成：
#（失去状态：【雷殛】：电流衰弱，*注：沿用帝王【腿伤】）
#（获得状态：【先导】：雷光初成，目前只能参与OP-G3级比赛。）
#
#重复育成：
#（失去状态：【雷殛】：电流衰弱，*注：沿用帝王【腿伤】）
#（获得状态：【闪光】：白色闪电，开放参与所有比赛。）

lightning_heart1:
  title: 闪电之心之一
  lines:
    #（隐藏）4月 第3周 皐月赏前 训练员室
    #触发条件：重复育成时获得【闪光】状态，选择出战皋月赏
    - 在似乎无什特别的一天，%YOU%提着一袋子来到了训练员室，又朝先行来到，正在沙发上躺着的玉藻十字招了招手。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？咋嘞？」
    -
    - 玉藻十字一眼就看到了%YOU%手上的袋子，用湛蓝双眸狐疑地往%YOU%笑咪咪的脸上打量。
    -
    - acc: 1
      content: 「这是给小玉的礼物哦。」
    -
    - %YOU%将袋子递给了玉藻十字，着%SEX%打开察看。
    - 袋子大小适中，内容物扁平且柔软……
    - 玉藻十字以丰富的家务经验，只消上手一摸捏就察觉到了里头装着了什么。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是衣服？……情趣的？」
    -
    - 玉藻十字露出尖鋭的眼神，无比刺人！
    -
    - acc: 1
      key: select
      content: 「那种下次再买。」（爱慕+2）
      lines:
        - 玉藻十字的眼神从尖锐变成了担忧，左右眉毛一上一下地形成了一段坡道。
        - %SEX%先是抿了抿嘴，像是下定了什么决心一样再向%YOU%伸出小手。
        - 似是防范又似是恳求，%SEX%以指尖掂紧了%YOU%的袖子。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「有病去看医生吧，好吗？」
        - acc: 1
          content: 「我没病——怎么能当训练员呢？」
    - acc: 2
      content: 「才不是——！」（好感+10）
      lines:
        - 啪的一声，有点焦急的%YOU%轻轻以手刀敲打了一下玉藻十字胸口。
        - acc: 1
          content: 「不是——什么人才会想到是情趣用的衣服啊！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊啊——？萝莉控还好意思说哦？」
        - acc: 1
          content: 「你才萝莉控，你全家都萝莉控！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这就不对了，咱个萝莉要怎么控萝莉呢？」
        - 玉藻十字讪笑着抱起双臂，手指上还勾着装有衣服的袋子，一晃一晃。
        - acc: 1
          content: 「你分明是萝莉控，不然为什么老跟稻荷一鬼混在一起？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那只是同学间的情谊，不作数啊。」
        - acc: 1
          content: 「整天盯着人家胸部看。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这叫缺啥补啥——坑娘呢你！」
        - 这次轮到%YOU%遭到手刀打击，但不知是否错觉，总觉得敲打在胸上的力道有点凶狠。（玩家体力-10%）
    - 在闹剧之后，%YOU%与玉藻十字打开了袋子……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咦？」
    - 放在里头的是——

lightning_heart2:
  title: 闪电之心之二
  lines:
    #（隐藏）4月 第3周  （G1） 皐月赏 1着 中山 芝 2000m（中距离）右·内
    #事件名：闪电之心之二
    - 浑身的战栗尚未消退，紧张至极的身体仍然绷紧。
    - 就连想要擦拭脸上的汗液都需要身旁的%YOU%代劳。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈啊——呼啊——哈啊——」
    - acc: 1
      content: 「……你还好吧？」
    - %YOU%以湿毛巾轻轻拭去玉藻十字如雨般的汗水。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈啊——呼啊——哈啊——」
    - 此刻的玉藻十字总算缓过气息，扭头向%YOU%不可置信地问道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为啥……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为啥……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为啥老娘出赛皋月赏了啊啊啊啊啊——！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不是说好了在我发育成熟之前不能跑G1比赛的吗？！」
    - acc: 1
      content: 「那个嘛……」
    - 诚然，下达G1禁止令的，是%YOU%。
    - 但公然打破禁令的，也是%YOU%。
    - 而玉藻十字更是拼尽了全力，拿下了经典首冠——皋月赏。
    - 玉藻十字捏捏脸颊，确保自己不是活在梦里。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过咱竟然赢了……经典G1。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以……是为什么？」
    - acc: 1
      content: 「当然是因为小玉已经成器了啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「成……器？」
    - 当初的玉藻十字确实长得一副风吹就倒、瘦骨嶙峋的样子。
    - 但在与%YOU%卖力地特训的过程中，已经逐渐长成了足以应对G1赛程的体格。
    - 其进步之快可谓让人惊掉下巴。
    - acc: 1
      content: 「就是这样，小玉的天赋比我想像中的来得更厉害啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「原来是这样啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢哪……让咱也打起信心来了！」
    - 玉藻十字露齿大笑，握拳击打胸前的闪电徽记道。
    - 那是一件蓝色的背心，配搭用上品帆布料的白色牛仔裤，在上身还披着一件同以蓝白为主题的外套。
    - 这正是由玉藻十字起草设计，%YOU%亲自监修，由URA聘请专人缝製而成的决胜服。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那这天赋的白色闪电，可不能浪费了哪！」
    - 新穿上决胜服就顺利拿下一冠，让二人都感到无比振奋。
    - 接下来挑战三冠王也不再是梦了！

uma_girl1:
  title: 优骏%TEEN%之一
  lines:
    #（隐藏）经典级 5月 第4周  日本德比 赛前 休息室内
    #事件名：优骏少女之一
    #触发条件：重复育成时获得【闪光】状态，选择出战日本德比
    - 继皋月赏后，%YOU%又为玉藻十字安排出战经典三冠中的第二冠——日本德比。
    - 与皋月赏时相比，玉藻十字已经更上一层楼了，但……
    - 在赛%UMA%圈子中广泛流传着一种说法：「最快的%UMA%赢皋月赏，最幸运的%UMA%赢得德比，最强的%UMA%赢菊花赏。」
    - 而被称为《德比魔咒》的传说更是让人莫名地感到不安——德比%UMA%里有为数不少无以为继，泯然众人。
    - 而若采百家之言，则「因为挑战三冠导致消耗过度」的说法最为可信。
    # CFLAGNAME:57 = 扩展变量
    - if: era.get('cflag:301:57').who_am_i > 0
      lines:
        - 比方说……丰收时刻——
        - 在东京优骏后患上伤病而被迫退役的传说赛%UMA%……
    - 不过，玉藻十字不一样。
    - 这家伙的话连三冠都能触及。
    - 想到这里，%YOU%看向玉藻十字的眼神又炽热了几分。
    - acc: 1
      content: 「怎么样？第二次的话就习惯多了对吧？」（爱慕+2、干劲+1）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你是故意开黄腔的吧？」
        - 玉藻十字没好气地拍打了%YOU%的小臂，然后跟随在%YOU%身后步向亮相圈。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%UMA%经上的评论家似乎把咱叫成『迟来的大人物』来着。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那就让他们见识见识咱这个小巨人的厉害！」
    - acc: 2
      content: 「怎么样？很紧张吗？」（好感+10、体力精力+20%）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一生一度的德比，谁能不紧张呢……」
        - 玉藻十字深吸了一口气，然后跟随在%YOU%身后步向亮相圈。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%UMA%经上的评论家似乎把咱叫成『关西的秘密兵器』来着。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那咱们就来……征服东京吧！」

uma_girl2:
  title: 优骏少女之二
  lines:
    #（隐藏）经典级 5月 第4周 （G1） 日本德比 1着 东京 芝 2400m（中距离）左·内
    #事件名：优骏少女之二
    - 东京被来自关西的赛%UMA%征服了。
    - 骄傲的小个子以无以伦比的表现点燃了全场。
    - 绿茵场上如闪电般掠过的玉藻十字再一次斩获一冠。
    - 如今只差回到京都拿下菊花赏，登基为王。
    - acc: 1
      content: 「干得好，小玉！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊啊！」
    - 二人以拳相碰，%YOU%从微微发麻的指节感到了玉藻十字激动的心情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「得给家人说一声哪——接下来就是菊花赏了？」
    - %YOU%点点头。
    - 事到如今，已经荣获双冠的玉藻十字没有理由不挑战菊花赏。
    - 只要再赢下菊花赏，%SEX%就能与那些强大的%UMA%齐名，位列殿堂！

classical_summer:
  title: 夏季合宿（经典年）
  lines:
    #8月 第一周 海边 夏季合宿
    #事件名：夏季合宿
    - 不论全球暖化是人为抑或自然变迁，在经过热得能煎鸡蛋的柏油路时总会让人无比地想念室内空调的舒适凉风。
    - 哪怕当下浑身只着寸缕，在烈日曝晒下连迎面而来的海风都略带温度。
    - %YOU%眯着眼睛蜷缩在遮阳伞下，承受这个年纪不该承受的高温——虽然按理说谁都不该承受。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「热死了——怎么能这么热——」
    - 在%YOU%身旁以体育课式姿势坐在防沙布上的就是玉藻十字，如瀑布般的银色长发之下，则是如瀑布般涌出的汗珠。
    - %UMA%的体温本就比常人要高一点，在高温下自然也更难受一点。
    - %YOU%贴心地给玉藻十字的脖子上套上了冰镇湿毛巾，被冰凉所刺激的玉藻十字不禁娇叫一声。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊❤️！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你这是干嘛啊！」
    - %YOU%哈哈一笑，用手臂轻轻阻挡来自身边人的粉拳攻势。
    - acc: 1
      content: 「这还不是看你浑身大汗的嘛——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱的意思是你别冷不丁的就把冰的贴过来！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是的……」
    - 玉藻十字无奈地把脖子上的湿毛巾挽起用来擦脸，但旋即皱起眉头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等下，这毛巾的味道怪怪的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你自己先用过了吗？」
    - acc: 1
      content: 「啊……」
    - %YOU%这才想起来，自己在递过毛巾前无意识地使用它擦了擦脸，甚至还贪婪地大口吸入了冰凉的水汽。
    - 但%YOU%看向%SEX%时，却没有看到预想中的嫌弃表情，仅仅只有两颊通红，将脸半埋进毛巾里的玉藻十字。

become_legend1:
  title: 成为传说之一
  lines:
    #（隐藏）经典级 10月 第4周 （G1） 菊花赏 赛前 休息室内
    #事件名：成为传说之一
    #触发条件：重复育成时获得【闪光】状态，选择出战菊花赏
    - 经典三冠的最后一冠，菊花赏。
    - 以皇室徽记命名的这场比赛，也许能与天皇赏一较其地位。
    - 当然，对二人而言，更重要的是只要玉藻十字拿下菊花赏便能尽数问鼎经典三冠。
    - 从无人看好的瘦小%UMA%到被称作《迟来的大人物》、《关西的秘密武器》，只有你们知道当中的艰辛。
    - acc: 1
      content: 「小玉，不用废话了……发挥全力赢下来！」
    - %YOU%轻拍玉藻十字的背脊，%SEX%眼里燃烧着熊熊烈火——这场菊花赏，势在必得。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「噢！！」
    - %YOU%忐忑地目送着玉藻十字高举双拳走出选手专用通道，迎接观众们的呼声。
    - 三冠王，会在今天诞生吗？

become_legend2:
  title: 成为传说之二
  lines:
    #（隐藏）经典级 10月 第4周 （G1） 菊花赏 1着 京都 芝 3000ｍ(长距离) 右・外
    #事件名：成为传说之二
    - 从中山到京都，突破千难万阻，称霸经典三冠的最强赛%UMA%诞生了。
    - 见证这个历史一刻的%YOU%简直无法置信，只能连连为新王献上欢呼喝采之声。
    - 但胜者的应酬总是无聊且烦人的，在比赛后，%YOU%与玉藻十字再一次地陷入了前来采访的记者堆中。
    - 在接连接受好几个访问后好不容易脱身的二人终于能回到选手休息室，好好消化今日的遭遇。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「经典三冠……」
    - acc: 1
      content: 「经典三冠……」
    - 激动得嘴唇颤抖尚未消退的玉藻十字直接扑到%YOU%身上紧紧抱住。
    - 尽管玉藻十字有所收敛，但%UMA%的力量还是让%YOU%感到了一丝难以呼吸。（玩家体力-10%）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「经典三冠！」
    - acc: 1
      content: 「经典三冠！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「经典三冠！！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱从被人瞧不起，差点就要退学的可怜虫……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「变成了……经典三冠王？！」
    - %SEX%激动地叫嚷着，让人担心隔墙有耳。
    - 但在此刻，%YOU%也只好顺着玉藻十字的意思，任由其宣泄情绪。
    - 毕竟这是%SEX%应得的。
    - acc: 1
      content: 「是啊，你哪怕现在就当场退役，都能保证入选殿堂。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿……殿堂赛%UMA%玉藻十字，又称白色闪电……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但还不够，接下来就是让你也当上殿堂训练员了哪。」
    - 玉藻十字总算松开了手，然后摸摸鼻子意气高昂地宣言道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要是只有一个三冠不够的话，那咱就为你再拿几个三冠！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就用冠军奖杯来填满咱们的简历吧！」
    - 就是这样，玉藻十字就该如此。
    - 闪电一旦形成，就会带着轰隆作响的雷声朝目标奔去，直到电力耗尽消散于大地之上……
    - %YOU%的责任就是让这束电光导向正确的目标。
    - acc: 1
      content: 「殿堂赛%UMA%和殿堂训练员……好！那就全靠你了哦！」
    - 经典三冠还只是个开端，二人的旅途还远远没有到画下句点的时候……

spring_thunder:
  title: 一声春雷
  lines:
    #资深级 1月 第1周 训练员室内 一声春雷
    - 玉藻十字漂亮地拿下了数次重赏。对她而言，这在一年前简直不可想像。如今的她已经完全具备了向更高的舞台发起挑战的能力！
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员啊……咱的身子……」
    - 在总结一年来的成果时，%SEX%深深地吸了一口气然后激动地说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「已经可以挑战资深级的……G1比赛了吧！」
    - acc: 1
      content: 「是啊，完全足够了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那，春季天皇赏也完全可以触及，对吧？」
    - 玉藻十字抛出了一个名词，那是春季资深%UMA%三冠中的第二冠。这场比赛不仅历史悠久，而且从名字就能看出它的重要性。
    - acc: 1
      content: 「我记得你说过，是令尊的意愿呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱……想出赛春季天皇赏，作为一种孝顺的方式……可以吗？」
    - %SEX%紧张地说，像生怕%YOU%会否决一样。
    - acc: 1
      content: 「当然可以！」
    - 不过春季天皇赏并不轻松。它是八大竞走当中距离最长的比赛，严酷的赛程长达3200米。
    - 万幸的是玉藻十字身体虽小但拥有惊人的耐力，足以应付。然而……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱还没挑战过那么长的距离啊……」
    - acc: 1
      content: 「你的距离适应性没有问题，但经验不足。」
    - 长距离比赛特别考验一位赛%UMA%分配体能的功力，训练员能把方法塞进赛%UMA%的脑袋里，但临场作战中要如何实现则只能依靠赛%UMA%自身的判断力以及运气了。
    - acc: 1
      content: 「在那之前，先出战G2的阪神大赏典吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，我会……赢下来的。」
    - 与当初相遇的模样相比，玉藻十字的眼神越来越炽热了。
    - %YOU%不禁露出了一丝笑容。

#获得状态：【闪光】：白色闪电，开放参与所有比赛。

hans_dai:
  title: 前哨战
  lines:
    #资深级 3月 4周 （G2）阪神大赏典 3着以内 阪神 芝 3000m（长距离）右・内
    #事件名：前哨战
    #效果：（全能力+3 技能点数+45）
    - 阪神大赏典，3000米长的绿茵赛道。
    - 作为春季天皇赏的前哨战，不但能为正赛预热，胜者更是能获得优先出赛权。
    - 如今，沐浴在观众欢呼下的正是%YOU%亲爱又骄傲的负责赛%UMA%——玉藻十字。
    - 回到休息室内，脸上始终挂着微笑，蒸气腾腾的芦毛少女便抖动着耳朵主动向%YOU%凑了过去。
    - acc: 1
      content: 「恭喜，小玉！距离天皇赏又更近一步了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦哦！接下来就是正主啦！」
    - 说罢，玉藻十字便安静了下来，%SEX%紧握粉拳以期待的目光投去%YOU%。
    - 也对，仅仅口头上的奖赏是不足够的。
    - acc: 1
      key: select
      content: 奖励摸摸头（好感+10）
      lines:
        - %YOU%笑着把手掌放到玉藻十字的头顶轻轻揉搓。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嘿嘿……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「接下来也要一起努力呢。」
    - acc: 2
      content: 直接抱上去（爱慕+2）
      lines:
        - 出乎玉藻十字意料，%YOU%直接张开双臂把自己拥入怀中。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嘿嘿……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「接下来也要一起努力呢。」

threaten:
  title: 露出獠牙的家伙
  lines:
    #资深级 4月 2周 训练员室内
    #事件名：露出獠牙的家伙
    - 今天，玉藻十字来到训练员室后故作神秘地靠近了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱说，训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱能不能提前把存在银行户头的奖金提出来啊？」
    - 原来是这个话题。
    - 俗语说「谈钱伤感情。」
    - 对尚是学生却依靠奖金一夕暴富的玉藻十字而言，这种事可不是能糊弄过去的小事。
    - acc: 1
      content: 「可以是可以，但为什么？」
    - 实际上在问的当下，%YOU%就猜得八九不离十了——不是来自亲族就是来自朋友的压力。
    - 赛%UMA%运动极其兴盛，其奖池之大，以至于哪怕仅仅是出道战胜利都能赚取为数不菲的马币。
    - 更不用说像玉藻十字这样连连拿下重赏的公开级赛%UMA%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是以前照顾过咱的阿姨儿，说是儿子想要出国留学但缺钱来着……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后嘛，以前小学玩得很好的朋友说是想要买一台游戏机——」
    - 幸哉，为了保护未成年学生的财政收入，特雷森会在银行为学生强制设立直到成年前都不能任意取出所得奖金的储蓄户。
    - 实在万不得已，也需要%UMA%本人与训练员双方同意方可提前预支。
    - 如今玉藻十字便是来找%YOU%商量此事的。
    - 只是很显然亲戚留学与买游戏机怎么想都不在所谓的「万不得已」之列。
    - acc: 1
      content: 「不行，我不会允许的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然啊——」
    - 看来玉藻十字自己也有这些请求十分荒谬的自觉，那为何要特地抱着碰碰运气的心态来问呢？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实就是自从咱家跑出名头了之后，就开始不断有亲戚啊朋友之类的人来串门。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后串门的同时总会提出一些钱银上的请求……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「推得多，来得更多。」
    - 实在是过于经典的一人得道，旁人妄图鸡犬升天的故事。
    - 如今，玉藻十字已经在公开赛出人头地，身价暴涨。
    - 尽管不是不能理解那些人的心态，但玉藻十字可是自己的爱马啊。
    - acc: 1
      content: 「听好了，今时不同往日。」
    - 「现在的玉藻十字可是公开赛%UMA%，人中之凤。」
    - 「再用以前的人情思维思考的话，一定会吃大亏。」
    - %YOU%打开了眼前的浏览器，在搜寻引擎上输入了一些少年得志的运动选手名字。
    - 原来，世上有近八成运动选手仅仅在生涯退役后三年就破产了。
    - 这些选手大多像玉藻十字一样来自贫穷的邻里。
    - 当天降巨款时他们丝毫不懂如何理财，也容易遭到亲朋的道德绑架。
    - 而在这些选手千金散尽后，簇拥身边的食客就会自动消失。
    - 人情冷暖，莫过于此。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱也懂这个道理啦……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是真的有点受不了天天来电话……」
    - 玉藻十字怂拉着双耳，微弱地说道。
    - acc: 1
      content: 「把电话号码换掉，只让身边最最亲近的人知道就好。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「连、连号码都要换掉？」
    - %YOU%点点头，哪怕无法六根清净，至少也让耳根清静。
    - 不通知就换电话号码虽然颇不近人情，不过同时是一个让玉藻十字加强「把寄生虫驱除掉」这个概念的机会。
    - 这种时候可不能心慈口软。
    - 因为对方可是打着亲情、友情的旗号向自己的爱马出手的「敌人」啊。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……知道了。」
    - 玉藻十字明显脸露难色，这确实不容易。
    - 身为训练员，总不能把难题全丢给玉藻十字……
    - acc: 1
      content: 「好啦，训练结束之后我们一起研究吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦、训练员也一起吗？！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢哪，咱一个人的话真没头绪呢！」
    - 一听到%YOU%也会跟自己一起面对困难，玉藻十字的耳朵便一激灵地竖起来，脸上也随之挂上了以往的笑容。
    - 在当天训练结束之后，二人便一起前往电信公司的线下店。
    - if: era.get('love:21') >= 75
      content: 穿着休闲的玉藻十字甚至被不明就里的职员当成了%YOU%的爱人，为这个小插曲谱上了一段欢快的和音。
    - if: era.get('love:21') < 75 && era.get('cflag:21:0') === 1
      content: 穿着休闲的玉藻十字甚至被不明就里的职员当成了%YOU%的弟弟，为这个小插曲谱上了一段欢快的和音。
    - if: era.get('love:21') < 75 && era.get('cflag:21:0') !== 1
      content: 穿着休闲的玉藻十字甚至被不明就里的职员当成了%YOU%的妹妹，为这个小插曲谱上了一段欢快的和音。

tenn_spr:
  title: 春三冠的鬼门关
  lines:
    #资深级 5月 第1周 （G1）天皇赏（春） 1着 京都 芝 3200m（长距离）右・外
    #事件名：春三冠的鬼门关
    - 做到了。
    - 那个曾经被瞧不起的小不点做到了。
    - 春三冠的鬼门关，3200米长的春季天皇赏，最终以玉藻十字的胜利落下帷幕。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「做到了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱赢了！」
    - 只见玉藻十字振臂一呼，如雷的掌声与欢呼化作无比的热量与劲风便向玉藻十字扑去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「老爸！看见了吗！」
    - if: era.get('cflag:21:性别') === 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你的儿子赢了啊啊啊！」
    - if: era.get('cflag:21:性别') !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你的女儿赢了啊啊啊！」
    - 玉藻十字向怼在脸上的转播镜头雀跃地叫道，让负责报导的记者也不禁有点尴尬。
    - acc: 1
      content: 「好了好了，麻烦借过……」
    - %YOU%连忙连推带拉地把%SEX%拉开，用湿透的毛巾为今天的英雄的脑袋降温。
    - acc: 1
      content: 「小玉……做得好！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦、哦！」
    - 因为激动而脸带红潮的玉藻十字在%YOU%的协助下也稍稍冷静了下来。
    - 二人在应酬式的访谈之后便回到了休息室享受一刻闲余时光。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但，咱真的赢了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难以置信……但多亏你，感觉也不是很不可思议。」
    - acc: 1
      content: 「过奖了，上场跑的终究还是你——」
    - 在这句话说完之前，玉藻十字就伸出食指按住了%YOU%的双唇。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有你的话咱连上场的资格都大概……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不，是肯定不可能有。」
    - 玉藻十字与%YOU%的相遇，完全属于偶然。
    - 但就是这份偶然让二人凑到了一起，然后共同努力至今。
    - 最终，连春季天皇赏都纳入囊中。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱也不知道要怎么回报训练员的恩情。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但，白色闪电——」
    - %SEX%露出前所未见的严肃神情，如箭一样的目光直钉进%YOU%的心灵。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「由你创造的白色闪电，会好好努力继续奔驰下去！」
    - acc: 1
      content: 「这样啊……那么接下来的目标设置成宝塚记念，没问题吧？」
    - 大阪杯、春季天皇赏、宝冢纪念，这三项重大G1赛事合称《春三冠》。
    - 与《经典三冠》、《秋三冠》相比，《春三冠》有一项从未被打破的记录——从来没有%UMA%达成过包揽春三冠赛事冠军的伟业！
    - if: d.sank_hai === 1
      content:
        - 如今，对夺得大阪杯、跨过春季天皇赏的玉藻十字而言，鲤跃龙门成为缔造记录的第一人就只差最后一步了……
    - if: d.sank_hai === 0
      content:
        - 尽管没有拿下大阪杯，但对跨过春季天皇赏的玉藻十字而言，挑战宝冢也是理所当然的下一步……
    - 玉藻十字先是一呆，似乎是被%YOU%对自己的信心惊到了一样，又旋即咧嘴露出贝齿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「管它是宝塚还是有马，都给我放%UMA%过来吧！」

white_lightning1:
  title: 白色闪电之一
  lines:
    #资深级 6月 第4周 宝冢纪念前 休息室
    #事件：白色闪电之一
    - 穿戴好决胜服，安坐在休息室板凳上的玉藻十字正在作最后的作战准备。
    - 身经百战的玉藻十字已经不是当初那稚嫩且缺乏自信的少女，但面对重大比赛还是难掩紧张。
    - 而且……这次的宝塚记念上，还有着%SEX%前所未见的强敌——秋津帝王。
    - 在一场决胜负的竞马比赛中，不存在所谓的绝对。
    - 但秋津帝王……这个赛%UMA%已经连续十四场比赛没有掉出过前三名了。
    - 英里赛的帝王无愧帝王之名，称霸了近两年的英里赛事，哪怕参与更长的中距离赛事也常见佳绩。
    - 由此可见长2200米的宝冢纪念赛道对%SEX%而言恐怕不是难事。
    - 加上这一次的宝塚记念将会是%SEX%的最后一舞，为生涯画下完美句号的执念想必更是会让秋津帝王发挥出水准以上的实力吧。
    - 不过，若是那浪速的白色闪电——不，若是%YOU%所信任、疼爱的玉藻十字的话……
    - 这里就用那一招吧，%YOU%如此想到。
    - acc: 1
      content: 「小玉，我看媒体都不看好你哪。」
    - %YOU%故意地在玉藻十字眼前晃了晃载有媒体评论的手机。
    - 《玉藻十字寝食难安！秋津帝王必胜无疑？！》等字句出现在%SEX%眼里，让%SEX%不悦地皱了皱眉头。
    #（本场比赛强制锁定第二人气。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……哼。」
    - acc: 1
      content: 「怎么样？不服气吧？」
    - 玉藻十字呸的一声把口水吐在地板上，%SEX%拍打着胸脯，嘴角勾起了自信又爽朗的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「秋津帝王已经败了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有你在背后的咱，可是无敌的！」
    - 只消一眼，%YOU%就从%SEX%的表情中看出了：玉藻十字的状态绝佳。
    - 愈战愈勇，遇强越强，正是那份从谷底翻身的执念才能成就今天的玉藻十字。
    - 那么，接下来便是堂堂正正地决胜负了！

white_lightning2:
  title: 白色闪电之二
  lines:
    #资深级 6月 第4周 （G1）宝冢纪念 1着 阪神 芝 2200m（中距离） 右・内
    #事件：白色闪电之二
    - 解说「玉藻十字从外道追上！」
    - 解说「玉藻十字与秋津帝王！」
    - 解说「玉藻十字彻底超越秋津帝王！」
    - 解说「这就是春季天皇赏%UMA%的强大！！！」
    - 胜了。
    - 连使出全力的那位英里赛帝王也败得心悦诚服。
    - 看见两位惺惺相惜的赛%UMA%握手拥抱，%YOU%不禁眼眶一热。
    - 短短一年间，玉藻十字这位赛%UMA%到底创造了多少次奇迹？
    - 观众「噢噢噢哦哦哦哦哦哦哦！！！」
    - 观众「玉・藻！」「玉・藻！」「玉・藻！」
    - 如山呼海啸的欢声自看台发出，但此刻%YOU%丝毫不想加入庆祝的行列，而只想冲上前去好好紧抱那让自己无比骄傲，既可爱又帅气、既俐落又坏心眼的玉藻十字。

senior_summer:
  title: 夏季合宿（资深年）
  lines:
    #8月 第一周 海边 夏季合宿（资深年）
    #效果：（随机三种能力+5）
    - 风和日丽的海滩之上，瘫着一人一%UMA%。
    - 与其他散发着青春激情、在海边玩水嬉闹的%UMA%们相比，%YOU%与玉藻十字就像上岸的死鱼一样一起无力地躺在遮阳伞下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊——好热。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为啥集训要选在海边啊——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「选在什么雪山上不好吗？」
    - acc: 1
      content: 「这是校园规定……而且大夏天的搞雪山集训也太奇怪了吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为啥？不就是夏天才该去乘凉的吗？」
    - %SEX%抬起了墨镜，无奈地瞟向%YOU%。
    - acc: 1
      content: 「……那冬天你会出来游泳吗？」
    - 想像了一下大冬天穿泳装来到海边被冰冷的寒风刺骨得直哆嗦的自己，玉藻十字登时连连摇头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那还是算了，但天气也是真的热啊。咱要喝冷的……」
    - 玉藻十字以眼神暗示，该是%YOU%伺候自己的时候了。
    - %YOU%只好夸张地叹了口气，反正自己也得来点喝的。
    - acc: 1
      content: 「好好，我去去就来……」
    - %YOU%以肘撑地抬起身，朝附近的海之家走去。
    - 气象预报里说今天的天气只有38摄氏度——一定是骗人的……
    - 顶着炎炎大太阳，尝试从偶尔吹拂到脸上的柔和海风中获得安慰，%YOU%总算在海之家的冰柜里捞到了两大罐无糖可乐。
    - 按理说，假如这是一个虚构的浪漫爱情故事，那么在回程的时候%YOU%就该看到玉藻十字或是被流氓纠缠、或是不知所踪了。
    - %YOU%如此想着，不自觉地加快了脚步。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「噢噢，你回来了。」
    - 让人安心的是玉藻十字身上并没有发生什么让人不安的事情。
    - %SEX%笑着，坐在防沙布上向%YOU%挥了挥手。
    - acc: 1
      content: 「啊，我回来了。」
    - 玉藻十字嘿嘿一笑接过了冰冷的可乐，只听二氧化碳自罐口噗滋一声溢出铝罐，里头的液体便被贪婪的小嘴咕咚咕咚地吞下。
    - 在那之后，二人有一搭没一搭地在遮阳伞下闲聊着打发时间，直到自由活动时间结束为止。

tenn_sho:
  title: 天皇赏（秋）前
  lines:
    #资深级 10月 第5周 天皇赏（秋）前 休息室
    - 秋，介于冬与夏之间，既无蒸腾炎热亦无刺骨严寒。
    - 但不论如何，至少有一个地方始终炙热无比。
    - 那就是%YOU%身处的府中竞马场。
    - 整整十余万名观众摩肩擦踵，正待当天的压轴好戏——玉藻十字将要出战的秋季天皇赏上演。
    - 休息室内，%YOU%与玉藻十字正在进行最后动员。
    - acc: 1
      content: 「小玉，想要打破记录吗？」
    - 近期状态大勇的玉藻十字，已经拿下了春季天皇赏，假如能把秋季天皇赏收入囊中……
    - 那%SEX%将会成为同时称霸春秋天皇赏的第一人。
    - 不仅%YOU%二人正在面临历史的转折点。
    - 连到场的观众几乎都是为了亲眼见证历史一刻而购票的。
    - acc: 1
      content: 「怎么不回答呢，难不成你其实想要让观众们失望吗？」
    - 被恶狠狠地盯了一眼的%YOU%并未慌张，反倒是露出了些许狡诈的微笑。
    - 这场比赛很重要，玉藻十字也清楚这一点。
    - 赛%UMA%的本能即是奔跑、即是争胜——既然来到了这个舞台，那就非胜不可！
    - 那小小的胸口不断上下起伏着，试图从深呼吸中取得平静。
    - 最终，%SEX%舒出了一口气，猛地一喝。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过是天皇赏而已，看我用闪电一样的速度给它碾过去！」
    - 果然，哪怕到了现在也很难想像这位名震天下的赛%UMA%当初竟然是在特雷森连连碰壁的差生啊……

tenn_sho_win:
  title: 天皇赏（秋）胜利
  lines:
    #资深级 10月 第5周 （G1）天皇赏（秋） 1着 东京 芝 2000m（中距离） 左
    #效果：（全能力+3 技能点数+45）
    - 在漫天的欢呼声中，玉藻十字张开双臂尽情享受着热情轰炸。
    - 此刻，历史上首位称霸同年度春秋季天皇赏的赛%UMA%诞生了。
    - 赛后，二人如常地接受着媒体采访。
    - 坐在讲台后面对七嘴八舌的记者群永远让人不习惯。
    - 这些记者总是喜欢争先恐后，丝毫不讲礼貌。
    - 仿佛不把受访对象的金口撬开来便是从他们身上把肉削下来了似的。
    - 不过从他们的职业特性来看，这恐怕不是虚辞……
    - 在这些喧闹的人堆里，还是先卖乙名史记者一个面子吧。
    - acc: 1
      content: 「啊——请一个一个来……乙名史记者先请。」（乙名史记者+10）
    - color: %COLOR_303%
      content:
        - fontWeight: bold
          content: %ETSUKO%
        - 「谢谢，训练员。」
    - color: %COLOR_303%
      content:
        - fontWeight: bold
          content: %ETSUKO%
        - 「请问两位是如何达成同时称霸春秋天皇赏这个成就的呢？」
    - acc: 1
      content: 「都是多亏了团队的通力合作以及诸位的支持。」
    - acc: 2
      content: 「因为玉藻十字是一个很棒的赛%UMA%。」
    - 在%YOU%能把话说完之前，玉藻十字就一把将麦克风夺了过来，又用掌把%YOU%轻轻推开。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呃啊——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都是这家伙的功劳啦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少听%YOURSEX%的谦虚套话。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%YOU%可是发掘了咱的大恩人，可以说没有%YOURSEX%就没有今天的咱。」
    - %YOU%张了张嘴想要抗辩，但还是耸耸肩作罢。
    - 闪电既出就无法回头，随%SEX%去吧。
    - 玉藻十字以眼角瞟了一下%YOU%无奈的模样，更是得意了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过硬要说的话，咱可是把%YOURSEX%当成可信的家人看待的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「既然是一家子了，那也不用讲究是谁的功劳咯！呵呵呵！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一位～」
    - %SEX%贴心地结束了这条问答，然后又把麦克风递还给%YOU%。
    - 这个自信满满、阳光可爱的玉藻十字，把自己当作家人啊。
    - 既然如此，那可不能辜负了%SEX%的信任。
    - 抱着这样的想法，%YOU%心不在焉地接着应对记者连珠炮发的问题。
    - 果不其然，话题因为玉藻十字的节外生枝而从原本的春秋连霸迅速转变成了娱乐八卦……

arim_kin:
  title: 有马纪念
  lines:
    #资深级 12月 第四周 （G1）有马纪念 1着 中山 芝 2500m（长距离） 右・内
    #效果：（全能力+3 技能点数+45）
    - 年末最重要的盛事有马纪念，同样由%YOU%的爱马玉藻十字夺得头筹。
    - 漫长的三年，由%YOU%与玉藻十字以一场胜利画下了句号。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好险哪，差点就要败给那家伙了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有马纪念，不愧是全明星级别的大赛……」
    - 玉藻十字瘫在休息室的沙发上，张开双臂像是在邀请%YOU%。
    - %YOU%便直接坐到了%SEX%身边，容%SEX%直接扑进自己怀里。
    - 在明亮的光线下，玉藻十字脸庞上的红晕是如此清晰，以至于%YOU%在揉搓着玉藻十字脑袋时也能隐约看见。
    - acc: 1
      content: 「辛苦啦，小玉。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯呣，再多说点。」
    - acc: 1
      content: 「小玉很厉害哦，和以前完全判若两人了呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同感，小不点和老妈也这么说。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说起来……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然都是多亏了你啊，训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢了。」
    - acc: 1
      key: sex
      content: 「这都是小玉努力的成果，我嘛，顶多只能占一半。」（爱慕+2、好感+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哈！咱就是要听这种话！」
        - 透过胸前的布料，%YOU%感到了玉藻十字摩擦得更激烈，甚至想要钻得更深入的意志。
        - 可惜，人生来便是要被禁锢在这具以骨肉构成、由名为大脑的寄生虫所操纵的身体。
        - %YOU%苦笑一声，只好调整自己的坐姿让玉藻十字更方便地攀到自己身上。
        - 如此，于一场刺骨大雨中相遇的二人的故事，便在温暖且阳光明媚的一天告一段落。
    - if: era.get('love:21') >= 50
      acc: 2
      content: 「那要小玉怎么回报呢？」（开始性爱）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「臭萝莉控还是狗改不了吃屎哪……」
        - 透过胸前的布料，%YOU%感到了玉藻十字摩擦得更激烈，甚至想要钻得更深入的意志。
        - 可惜，人生来便是要被禁锢在这具以骨肉构成、由名为大脑的寄生虫所操纵的身体。
        - %YOU%苦笑一声，只好调整自己的坐姿让玉藻十字更方便地攀到自己身上。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「接下来，可不会让你好过的哦……」
        - %YOU%看到了玉藻十字瞟向自己脸部的眼神，里头带点戏谑，也可能有些情欲。
        - %SEX%以舌舔唇，开始宽衣解带……
        - 如此，于一场刺骨大雨中相遇的二人的故事，便在温暖且湿溜溜的一天告一段落。

#外出事件
whats_adult:
  title: 到底怎样才算大人？
  lines:
    #训练员室内
    #事件名：到底怎样才算大人？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱问你啊，大人到底是什么？」
    - 某天，玉藻十字唐突地问道。
    - 接下没头没脑的问题的%YOU%，也只能没头没脑地反问玉藻十字到底在没头没脑地问什么。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「老娘啊，老娘……跟稻荷那家伙去看杀人鲸表演的时候……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「被接待员……」
    - %YOU%看着血贯瞳仁、牙关紧咬的玉藻十字，悄悄地把旋转椅后移了一小段距离。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「被接待员说了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『两张小童票盛惠五马币哦～』！！！」
    - acc: 1
      content: 「您先小声一点……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咱可是被叫小童了，小童，知道吗？！」
    - if: era.get('cflag:21:0') === 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行吧，反正老子就是长得矮了……」
    - if: era.get('cflag:21:0') !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行吧，反正老娘就是长得矮了……」
    - 玉藻十字五味杂陈、瞬息万变，从暴怒到泄气的表情不可谓不精彩，%YOU%甚至觉得会有人愿意付钱欣赏这场变脸大戏。
    - acc: 1
      content: 「所以小玉你想知道该怎么让人把自己看成大人……吗？」
    - 玉藻十字点点头，乏力地瘫在沙发上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员有什么方法吗？」
    - 是啊，到底怎么样才算是合格的大人呢？
    - acc: 1
      content: 「懂得自律！」（速度+5 力量+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「自律，也就是能够独立生活吗？有道理哎。」
        - 在那之后，玉藻十字过了一天早睡早起、适当运动、饮食均衡的生活……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这不是跟我平常一模一样吗！！！」
    - acc: 2
      content: 「有存款！」（技能点+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「存款……真是充满铜臭味的回答啊。」
        - 在那之后，玉藻十字过了一天努力节约、省食俭用的生活……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这不是跟我平常一模一样吗！！！」
    - if: era.get('cflag:21:0') !== 1
      acc: 3
      content: 「性感？」（爱慕+5）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「臭萝莉控又出现了……」
        - 玉藻十字从沙发上站起身，歪着头朝%YOU%走去，然后一屁股坐到了%YOU%大腿上。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……像这样，对吗？」
        - %YOU%闻着少女后颈的汗香，不禁以双臂环抱了上去……

gymnastics:
  title: 能长个子的体操
  lines:
    #训练员室内
    #事件名：能长个子的体操
    - 某天阳光明媚的午后，玉藻十字懒洋洋地在沙发上划拉着手机。
    - 这台手机是%YOU%为了让小玉不至于与社会和同窗脱节而忍痛出钱购买的。（失去100马币。)
    - 不过有失必有得，现在回想玉藻十字收到礼物时高兴的样子也不禁让%YOU%心头一暖。（干劲+1)
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦，这是『能长个子的体操』？！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一天做30秒就能长高？！」
    - 玉藻十字兴奋地向%YOU%展示一段可疑的UMATok短视频。
    - acc: 1
      content: 「总觉得不是很现实啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总不能什么都不尝试吧！」
    - 于是，%SEX%便模仿视频里的动作，开始努力伸展起来。
    - 哪怕是那贫瘠的身躯，也不禁通过舒展的体操自然地展露出让人产生冲动的美丽姿态。
    - acc: 1
      content: 「你的姿势错啦。」
      lines:
        - %YOU%主动地凑近，用双手引导玉藻十字的肢体，甚至有意无意地触碰到了胸前双乳或是大腿之间。
        - 玉藻十字两颊微红，却没有抗拒更进一步的「指导」。
        - 在那之后，%SEX%每天到达训练室后，总会在%YOU%面前做起伸展体操。

my_clothe:
  title: 适合我的衣服
  lines:
    #训练员室内
    #事件名：适合我的衣服
    - 某天下午，也是一个合适晒太阳的好天气。
    - 来到训练员室的玉藻十字把脑袋搭上%YOU%的椅背，%SEX%的气息微微打在耳朵上，让%YOU%直感脸红耳赤。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，训练员。我问你点事啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你是萝莉控吧？」
    - acc: 1
      key: select1
      content: 「这是污蔑。」（好感+10）
    - acc: 2
      content: 「Then?」（爱慕+2）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「反正都没什么所谓……我想问问你对萝莉穿着的口味。」
    - acc: 1
      content: 「为啥啊？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实是这样的……」
    - 原来，玉藻十字在班上听到了——
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: ？？？
        - 「玛雅我都知道的，大人都喜欢成熟的模样哦！」
    - color: %COLOR_3%
      content:
        - fontWeight: bold
          content: ？？？
        - 「确实呢，会长那种成熟自如的模样好让人羡慕……」
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: ？？？
        - 「诚！然！我能理解你们的想法，但是……」
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: ？？？
        - 「武！器！服装要符合自己性格和体型，活用自身的优势！」
    - 如此这般的对话，着实让人感觉到了青春的味道。
    - 只是通过小玉唯肖唯妙的口技表演，%YOU%听出来了一个比较熟悉的语气。
    - acc: 1
      content: 「理事长，你在干什么啊——！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总之，你是成熟派的，还是幼嫩派的？」
    - 玉藻十字带着狡黠的表情轻舔上唇逐步欺近，%SEX%以指尖轻点%YOU%的胸前等待回答。
    - 啊，被将死了。
    - acc: 1
      key: select2
      content: 「成熟派。」（速度+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「原来如此……所以你比较喜欢茶座或者梦之旅那种穿搭咯？」
        - 虽然是这么说，但很难想像小玉穿着一身黑露出似笑非笑、极度危险的表情。
        - 玉藻十字似乎也看出了%YOU%为难的心态，以掌轻拍了%YOU%的心口。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「开玩笑的啦，咱知道你不是以貌取人的类型。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……不然你也不会那么努力说服我签下『卖身契』吧？」
        - 玉藻十字讪笑道，但%YOU%之后还是在不经意间看到了她开始在手机上搜寻「帅气」、「成熟」、「洋服」等关键词。
    #此后G1默认穿着雷神小玉决胜服
    - acc: 2
      content: 「幼嫩派……」（力量&根性+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「原来如此……所以你比较喜欢帝王或者重炮那种穿搭咯？」
        - 虽然是这么说，但小玉平常也很可爱了。
        - 玉藻十字似乎也看出了%YOU%为难的心态，以掌轻拍了%YOU%的心口。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「也就是说，咱平常的样子就很足够了呢。」
        - 面对无比正确的结论，%YOU%也只能点点头。
        - 获得满意答覆的%SEX%讪笑着，潇洒地回到了自己的位置上。
  #此后G1默认穿着水手服小玉决胜服