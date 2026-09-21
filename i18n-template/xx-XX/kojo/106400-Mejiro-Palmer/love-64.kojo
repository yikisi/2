# @file 目白善信 - 爱慕
# @author Bottle
# @author KUN
distance:
  # 爱慕24，外出河坝散步时触发
  title: 距离感
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊呜！」
    -
    - 黄昏，%YOU%瘫坐在河堤边的长椅上，发散着一天的疲劳，一旁是抱着面包大吃特吃的善信
    - %TEEN%栗色的马尾辫之下，雪白的后颈隐约可见，在夕阳的映衬下散发着青春的味道……
    - 回过神时，%YOU%已经伸出右手拨开了善信的辫子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？」
    -
    - 善信鼓着嘴微微侧头，用碧蓝的眼眸好奇地盯着%YOU%
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要动啦，很痒的」
    -
    - 然而，在罪恶感追上%YOU%之前，%SEX%只是摆摆头挣脱开，发束扫来一阵芳香
    -
    - 「啊……抱歉」
    -
    - %YOU%方才发现自己与善信的距离如此之近，和公园里的初恋情侣一般
    - %YOU%能感受到%SEX%周围的温度在慢慢升高，能看到夕阳的颜色悄然爬上%SEX%的耳根……
    - 果然%SEX%也发现了吗？
    -
    - acc: 1
      content: 「差不多该回去了，善信」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……好的」
        -
        - 善信顺了顺头发就跟上了%YOU%的步伐
    - acc: 2
      content: 「刚刚才发现，善信的头发真的很漂亮呢」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是……是吗，可能这就是目白家特制香波的威力吧，诶嘿嘿～」
        -
        - 善信笑着挠挠头，擅长于应对夸奖的%SEX%，声音却在此时发生了微妙变化
        - 那是%TEEN%的声音，含羞而焦躁
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「时间不早了，%CALLNAME%，一起回去吧？」
        -
        - 捕捉到这一变化的%YOU%，将它像蜜糖一般咽了下去，迈着轻快的步伐跟上了善信的脚步

pre-happy:
  - color: %COLOR%
    content: 【假如有一天，%CHARA% 或 %YOU% 睡着了……】

happy:
  title: 喜悦
  lines:
    # 爱慕39，一方沉睡状态时进入下周触发
    - 夜晚，训练室内
    - 早已醒来的%YOU%却不愿离去，因为眼前的玻璃窗上映着画一般的景象
    - 睡着的善信将半边脸埋在%YOU%的右肩，衬着窗后的满天繁星
    -
    - 均匀的呼吸声，平静的面容，是令人不忍打扰的深度睡眠
    - 然而训练室是个糟糕的留宿地点，而且——宿舍马上要关门了
    -
    - acc: 1
      content: 将善信抱到宿舍
    -
    - if: era.get('cflag:71:性别') !== 1
      content: 两手环绕着善信的肩膀和大腿，%YOU%掂量着男子高生那不可告人的秘密
    - 最近有在好好减肥呢
    - 大腿内侧的柔软触感，婴孩般洁白的双臂，还有那一如既往的、只属于善信的体香味
    - %YOU%无论如何都无法将怀里的萌物和赛场上的矫健身姿联系在一起
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「至少……请把我在宿舍门外放下来好吗……%CALLNAME%？」
    -
    - %YOU%被惊了一跳，不是因为善信的突然醒来，而是因为%SEX%那从未被%YOU%听到过的、娇嗔般的声音
    -
    - 「现在不想自己走吗？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……嗯」
    -
    - 善信将脸埋在%YOU%的肩膀里，一只手紧紧抓着%YOU%的衣衫，和心跳一起加速的，还有%SEX%那不规则的喘息声
    - 在善信眼里，自己会是什么味道呢？%YOU%不禁这样想到
    - divider: true
    - 宿舍门口几米外的树影里，终于落地的善信刚走出两步便折返回来
    - 在%YOU%还未来的及反应前，%SEX%搭上%YOU%的双肩，将唇的形状印在了%YOU%的脸上
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不、不要误会了哦，这是感谢的kiss……嘿嘿～」
    -
    - %YOU%呆在原地，看着善信跑回去的背影，飘扬的发丝在路灯下泛着银光

49:
  title: 温度
  lines:
    # 爱慕49升级，进入下回合触发
    - 某个晴朗的午后
    - 只是和善信并跑了四十分钟，就已经累到虚脱的%YOU%，将身体彻底托付给了训练员室的沙发
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈哈，%CALLNAME%太弱了啦，%UMA%的四十分钟才刚刚开始喔」
    -
    - 那根本不是人类并跑的速度啊……%YOU%本想这样这样反驳，却因劳累而没有吐出一个字
    - 眼前的善信大方地敞开着外套，咕咚咚地灌着水
    - 微微浸湿的运动内衣之下，是挂着汗珠的健康腹肌，此时正随着呼吸前后鼓动着
    - 看着眼前的善信，尽管四肢疲乏且酸痛无比，%YOU%身体里的某种渴望却在此时缓缓上升……
    -
    - acc: 1
      content: 「善信，我要渴死了……」（暂不升级）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊哈哈哈～」
        -
        - 看着%YOU%这副衰样，善信爽朗地笑出声来，便将手里喝掉一半的水丢给%YOU%
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么下次再一起锻炼吧，期待你的进步哦，%CALLNAME%～」
    - acc: 2
      content: 「善信，能帮我按摩吗？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「诶？可以是可以啦，但我从来没有给人类按摩过……可能会弄疼你哦」
        -
        - %YOU%摆摆手表示无所谓，又拍拍腿表示从这里开始
        - 善信顺从地跪坐在%YOU%面前，熟练地锤捏着%YOU%的大腿肌肉，腿部的快感逐渐蔓延……
        - 不知是害羞还是其他原因，善信此时也沉默起来，看似是在专心于按摩，实际内心肯定是一团乱麻吧
        - 听着%SEX%逐渐加粗的喘息声，看着%SEX%蜜桃般潮红的面颊，%YOU%体内深处灼热的欲求正源源不断地涌上来
        - divider: true
        - 燥热的气氛持续了些许，善信的动作停了下来，目光落在%YOU%的双腿之间
        - 这里的变化已经无法忽视了呢
        - acc: 1
          key: update
          content: 「差不多了，善信……该停下来了」（暂不升级）
        - acc: 2
          content: 「可以哦……这里也拜托你了」（升级关系）
          lines:
            - 善信猛地抬头，眼神却在与%YOU%对视的瞬间融化得粘稠不堪
            - %YOU%将手掌按在%SEX%的头顶，顺着侧发拂到脸颊，抹去了%SEX%眼中最后一点理智
            - 四周汗气蒸腾，善信小心翼翼地用手指捏住%YOU%裤缝上的拉链……
            -
            - 这时，门外响起了「哒、哒、哒」的脚步声
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「Hi！在聊些什么呢？带我一个带我一个！」
            -
            - 门外那位元气的%UMA%比想象中进来得还要早，所幸善信已经站起身挡在%YOU%身前
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「没……没有什么啦，对了，太阳神，比起这个……」
            -
            - 在这种情况冷静下来是不可能的，%YOU%索性坐在原处从背后欣赏着善信的身姿
            - %SEX%的大腿肌肉矫健而曲线玲珑，此时正紧张地并在一起互相摩擦着，想必是残留的兴奋还未驱散吧
            - 贴身的运动短裤完美地勾勒出了%SEX%那硕大圆润的臀部，不愧是目白家的身材管理
            - ……刚刚如果继续下去的话，里面会是什么样的情景呢？
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「抱歉啦，现在要把%65_CALL%从你身边借走一会——快点跟上啦%65_CALL%——byebye！」
            -
            - 还未等%YOU%回应，太阳神便哒哒哒地跑了出去，对之前在这里发生的事浑然不觉
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「那么……下次找个合适的地方继续聊吧，%CALLNAME%？」
            -
            - 走到门口的善信回过头来，将三指比圆放在张开的嘴边，做了一个伸缩的动作，随后快步跟上了太阳神
            -
            - 走廊里传出两人嬉闹的声音
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「善……%65_CALL%？你脸怎么红成这样？」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「别看别看，快点走啦～」

74:
  title: 承诺
  lines:
    # 爱慕74升级，进入下一周
    - 和过去的每个黄昏一样，工作结束的%YOU%领着善信在校园里散步
    - 今天的善信却有些异样，以往健谈的%SEX%现在却迈着小步跟在%YOU%身后，就算被搭话也只是敷衍应和着
    -
    - 而在%YOU%发出疑问之前，善信却先开口了
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，关于我们之间的关系……能和我好好谈谈吗？」
    - # EXPNAME:25 = 性爱次数
    # EXPNAME:26 = 睡奸次数
    - if: era.get('exp:64:25') > era.get('exp:64:26')
      lines:
        - 「……也是时候了，毕竟都做过了呢，这样那样的事」
        -
        - %YOU%转过身，面前是低着头的善信，刘海遮掩着双目，令%YOU%无法辨别%SEX%现在的情绪
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯，就像炮……炮友一样，最近，这样的关系让我感到了厌恶……对不起」
        -
        - 「用不着道歉，如果讨厌了的话，我会——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不是的！」
        -
        - 善信抬起头，一双碧蓝的眼睛坚定地看着%YOU%，那表情令%YOU%似曾相识——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「如果不是%CALLNAME%，我无法想象当初的自己如何才能成长至今，讨厌什么的……怎么可能」
        -
        - %YOU%回想起来，那是选拔赛当日，%SEX%在抹去自己脸上的泪水后，抬起头来时的表情——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只是……这种身体上的关系，对我来说已经无法维持了……%CALLNAME%也是这样想的吧？」
        -
        - 这是笃定内心所想的表情，这是迫切地想要向对方传达心意的表情，过去是担当的允诺，而现在——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「如果……这样的关系可以更进一步的话？」
    - if: era.get('exp:64:25') === era.get('exp:64:26')
      lines:
        - 「嗯……关于那天在训练室的事——」
        -
        - 和预料的一样，善信的脸在一瞬间红透了，随后用双手捂脸娇声请求着：
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「请……请忘掉那天的事！」
        -
        - acc: 1
          content: 「啊啊，我没在意的……反倒是想向你道歉，当时有些太得意忘形了呢」
          lines:
            - 善信没说什么，只是双手抱胸看着地面，虽然脸颊依然潮红，但看表情似乎作出了某个决定
        - acc: 2
          content: 「从那天之后就很好奇，那个动作……善信到底是从哪里学的呢？」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不要再说了！」
            -
            - 善信焦急地锤向%YOU%的胸口，在%YOU%发出吃痛的叫声之后又慌忙道歉，像只想一心讨好主人的大型犬
            - ……还是力气特别大那种
            -
            - 稍稍冷静下来的善信将手背在身后，摩擦着鞋尖，缓缓开口说道：
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%自那之后也没有对我做任何事，我很感激，只是……」
        -
        - 善信看向一旁的喷泉，水如思绪般喷涌着连成一片
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「每次想到%CALLNAME%的事，都会变得无法思考，脑子里只剩下怎么让%CALLNAME%注意到我……就像是——」
        -
        - %SEX%顿了一下，夕阳将%SEX%的侧颜映得俊秀如画
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「就像是在跑一条无限延长最终直线，明明终点近在眼前却怎么也无法触及」
        -
        - 善信伸出手抓住%YOU%的衣摆，用手指揉捏着，像是在索求着触碰的实感
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「而身后，是不知何时会追上来的……其他孩子」
    - 善信在等待着%YOU%的答复
    -
    - acc: 1
      key: update
      content: 「对不起……我现在无法回应你」（暂不升级）
    - acc: 2
      content: 「嗯，那就从这里开始吧……只属于我们两人的道路」（升级关系）
      lines:
        - %YOU%牵起善信的手将%SEX%拉到身前，%TEEN%的脸庞上现出一丝惊讶，很快便会意地轻闭双眼，踮起脚尖……
        - 那是个青涩的吻，唇与唇间相触仅几秒，便互相签下了恋情的契约
        -
        - 善信很快恢复了往日的开朗，和往常一样，有说有笑地与%YOU%一起在石子路上散着步
        - 唯有不同的是那仅剩半尺的距离，还有夕阳下相叉的十指……

89:
  title: 暖阳
  lines:
    # 爱慕89升级，任意外出
    - 某个晴朗的休日，善信领着%YOU%来到目白家的庭院
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「午休time！%CALLNAME%过来过来～」
    -
    - %YOU%穿过宽敞的卧室，便看见善信半躺在靠近阳台的圆形沙发上，正笑着向%YOU%招手
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这里是我亲自设计的休息地点，既有天台的阳光和风，也能享受到床上的舒适，很厉害吧？」
    -
    - 刚刚将身体埋入柔软的羽绒，房间里的香氛味道便伴着微风缓缓飘来
    - 善信默契地靠在%YOU%身边，贴近手臂的温柔触感甚于羽绒，肩膀边扑面而来的%TEEN%气息更甚于香氛
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好温暖……感觉能在这里躺一辈子～」
    -
    - 善信伸展着身体，脸颊在%YOU%的肩膀上来回摩擦，随后便放缓呼吸，和%YOU%一同享受着片刻宁静
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……如果和我结婚的话，想要多少个孩子呢？」
    -
    - 忽然开口的善信将%YOU%从半梦半醒的朦胧中拉了出来
    -
    - acc: 1
      key: update
      content: 「说什么傻话呢，现在讨论这个还早啦」（暂不升级）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哈哈，说的也是呢」
        -
        - 善信抱紧%YOU%的手臂，将脸埋在其中，没过多久便沉沉睡去……
    - acc: 2
      content: 「不知道呢，不过就算再多，这里也能容纳得下吧？」（升级关系）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……奶奶大人说过，如果我们愿意，可以把孩子们全部养在这里，让目白家永无衰败之日」
        -
        - %YOU%看向善信，%SEX%的目光正越过%YOU%的前胸望向窗外，目白家的草场上，孩子们正迎着阳光奔跑
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过……让孩子们和%CALLNAME%一起，去外面更广阔的世界生活或许也不错呢」
        -
        - %SEX%将眺望的目光收回，从靠枕上滑落下来，%YOU%也顺势侧身躺下与%SEX%四目相对
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「抱歉，现在好像不是考虑这事的时候呢……嘻嘻～」
        -
        - %YOU%看着善信的脸，抚摸着%SEX%的发梢，然后扶住%SEX%的脖颈，微微侧头与%SEX%相吻
        - 刚开始还只是唇的触碰轻咬，随着舌尖的挑逗，变成了互相索取和吸吮，积极探索着深处……
        -
        - 片刻后，经过一轮唾液的交换，善信的眼神已是迷离不堪
        - %SEX%伸出舌头喘着粗气，温热的吐息混杂着淫靡的味道，似乎仍沉浸在余韵中
        - if: era.get('cflag:64:0') !== 1
          content: 善信穿着一件白色衬衫，丰腴的胸脯挤在一起，在敞开的衣领之下显出沟壑
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……可以哦，如果想做的话，要小声一点……被%SIBLINGS%们听到就麻烦了呢」
        -
        - acc: 1
          key: sex
          content: %YOU%一颗颗解开了善信前胸的纽扣……
        - acc: 2
          content: 「被发现会很麻烦吧……现在不行哦」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「这样啊，那握住我的手忍耐一下吧～」
            -
            - 善信将手与%YOU%十指相扣，随后又徐徐念叨着婚后的展望……

99:
  title: 锁
  lines:
    #爱慕99，一周未发生性关系
    - color: %COLOR%
      content: 陷入黏腻恋爱的特雷森%UMA%们，总会有无法与恋人相遇的时间
    - color: %COLOR%
      content: 每当这时，%THEY%的室友便会默契地在合适的时候离开寝室，留给%THEY%一些私人时间——就连葛城也不例外
    -
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「喂，%104_CALL%，我去跑两圈，关门前几分钟会回来……别太久哦」
    -
    - color: %COLOR%
      content: 未与%CALLNAME%亲热已经过去了几天呢？
    - color: %COLOR%
      content: 听到关门声的善信，便焦急地解开睡衣，将上半身裸露在灯光下
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈❤️……哈❤️……哈❤️……」
    -
    - color: %COLOR%
      content: 和往常一样，善信从上到下抚摸着自己的肌肤，腰部跟随动作苦闷地扭动着
    - color: %COLOR%
      content: 在内裤被弄脏前将其褪去，手指划过大腿内侧，沿着人鱼线再到花瓣……
    - color: %COLOR%
      content: 但是……这种不甘心感是什么呢？善信停下了动作
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    -
    - color: %COLOR%
      content: 善信意识到，自己的身体已不愿在%CALLNAME%远离时感受欢愉，只需要哪怕一点……
    - color: %COLOR%
      content: 哪怕是%CALLNAME%的一个吻，在脖颈上的触碰，一阵耳边的吐息
    - color: %COLOR%
      content: 或是衣物上的味道，发丝的香味，睡前的轻声细语……什么都行
    - color: %COLOR%
      content: 无法忍耐的善信按住私处封存兴奋，另一只手拨通了%CALLNAME%的电话……
    -
    - acc: 1
      key: update
      content: 「您拨打的电话暂时无法接通，请稍后再拨」（暂不升级）
    - acc: 2
      content: 「喂？善信，怎么了？」（升级关系）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没……没事，只是想听听%CALLNAME%的声音」
        -
        - color: %COLOR%
          content: 在得到%CALLNAME%回应的一刻，善信便开始了手指的动作，按在湿濡膨胀的豆豆上画着圈……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只要有……%CALLNAME%的声音，总感觉……能安心下来呢……哈～」
        -
        - color: %COLOR%
          content: 已然被拨开开关的善信忘记了羞耻心，张开双腿想象着将%CALLNAME%迎入怀中，用腰迎合着手指……
        -
        - acc: 1
          content: 「善信真是个坏孩子呢……用我的声音做这种事情」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「抱歉……嗯❤️……%CALLNAME%的声音……太温柔了，忍不住就……哈❤️」
        - acc: 2
          content: 「善信，哪里有不舒服吗？听起来气息很慌乱呢」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「别……别欺负我了啦，%CALLNAME%……嗯❤️」
            -
            - color: %COLOR%
              content: 善信模仿着%CALLNAME%的动作，翻弄着自己那对硕大的奶子，被想象中的那双大手掂动、揉捏、撕扯……
            - color: %COLOR%
              content: 如果是%CALLNAME%的话，会用指尖在乳轮画圈，然后挑逗乳头直至勃起，最后用力吮吸……
            - color: %COLOR%
              content: 之后差不多就该……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哈❤️、哈❤️……%CALLNAME%……最喜欢什么姿势呢？……sex的时候」
        -
        - acc: 1
          content: 「能看到善信脸的姿势最好了」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「只能……看一会哦，一直盯着的话……会害羞的」
            -
            - color: %COLOR%
              content: 尽管这样说，善信还是将膝盖抬到胸前，用最容易抵入的姿势暴露着垂涎的肉穴
            - color: %COLOR%
              content: 就像%CALLNAME%做的那样，善信一手抱着双腿，另一只用手指伸入秘处翻搅，任由涌出的汁水弄脏尾巴
        - acc: 2
          content: 「想从背后占有善信的身体」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「可以哦……无论几次都可以」
            -
            - color: %COLOR%
              content: 善信翻过身，将臀部高高抬起，尾巴撩在一边，蜜汁从双腿间滴垂而下
            - color: %COLOR%
              content: 手指探入秘处，学着%CALLNAME%喜欢的节奏进出、进出，腰背随着爱液搅动的声音下沉为诱人的弧形
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊❤️、啊❤️、啊❤️～」
        -
        - color: %COLOR%
          content: 被侵入小穴的善信终于无法抑制声音，从喉咙里漏出的娇声此起彼伏
        - color: %COLOR%
          content: 一边想象着与%CALLNAME%的交合，一边兴奋于因发情而像动物一样索取快感的自己
        - color: %COLOR%
          content: 在即将到达顶点时，善信忽然将速度放慢，尽管身体已经在抽动着索求高潮，但是——
        -
        - color: %COLOR%
          content: 无论如何……也要听到%CALLNAME%的允许
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，快要……我可以……去吗？」
        -
        - acc: 1
          key: orgasm
          content: 「可以」（性欲下降，干劲+1）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……唔哦❤️」
            -
            - color: %COLOR%
              content: 在获得允许的一刻，善信只是轻轻一动便条件反射般地弓起身体，瞳孔几乎浮离眼眶
            - color: %COLOR%
              content: 一束水花随着手指离开小穴喷涌而出，随后便是善信那无法捕捉呼吸的下流喘息声
            - color: %COLOR%
              content: 片刻后，善信简单收拾下现场便钻入被窝，伴着余韵和%CALLNAME%叙着晚安的蜜言
        - acc: 2
          content: 「不行」（性欲上升，干劲-1）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「诶？我……我知道了……别让我等太久哦」
            -
            - color: %COLOR%
              content: 善信翻身将自己埋入被窝，尽管身体燥热不堪，%SEX%还是双腿夹住抱枕，和%CALLNAME%道着晚安
        -
        - color: %COLOR%
          content: 善信浑然不觉，自己那一向硬气的室友此时却在靠近门口的卫生间里冒着蒸汽
        - color: %COLOR%
          content: %SEX%所确信的是，无论是自己的身体还是心灵，都被牢牢锁在了那个人身边
        - color: %COLOR%
          content: 那是%TEEN%永远也无法挣脱开的、由泪水刻出形状、由蜜汁浇筑而成的爱之锁

here:
  title: 在这里也可以哦
  lines:
    #条件为热恋及以上，2周未进行性行为时过周触发
    - 电影院，%YOU%和善信百无聊赖地坐在后排，比起电影，%YOU%们更愿意把注意力集中于对方
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都说过不用特地跟上来啦，太阳神总是喜欢拉我看一些无聊的片子，这次还自己跑了……」
    -
    - 尽管这样说，此时的善信靠在%YOU%的肩旁，显然庆幸于获得了这段共处时光
    - 荧幕光的映照下，善信昏昏欲睡的侧颜显得格外动人，那对裙下的白皙大腿紧挨着%YOU%，触手可及……
    - 话说，上一次抱%SEX%是什么时候来着？
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%？」
    -
    - 回过神时，%YOU%的手已搭在了%TEEN%的腿上，指尖探入裙摆，善信按住%YOU%的手背，却并没有推开
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这种事，我们可以……回去再做，这里的话……」
    -
    - acc: 1
      content: 「可是我已经到极限了……拜托你了，善信」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……既然你都这么说了」
    -
    - 善信瞄一眼两边，确认无人后，便将手伸向%YOU%的股间，耳边传来的轻喘愈发急促
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈……%CALLNAME%……好厉害」
    -
    - %SEX%的手隔着衣料确认片刻，便将%YOU%那已经充血胀硬的性器释放出来，用三指缓缓撸动着
    - 快感在下半身涌动，善信唇间吐出的热气侵入耳中，如电流般酥麻全身
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈……哈……%CALLNAME%……好像很舒服的样子……」
    -
    - 上下、上下，善信似乎知道%YOU%喜欢的节奏，一边专心用手服侍着%YOU%，一边温柔地亲吻%YOU%的耳廓
    - %SEX%用食指抹去尖端溢出的液体，随着动作发出淫靡的水声，逐渐加快速度……
    - 臂膀被善信的酥胸紧紧贴住，耳内被舌尖来回舔舐着，%SEX%那难掩欲情的声音在脑中回荡……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈、哈、哈……可以哦，射出来吧……之后就交给我了……哈」
    -
    - 已经无法顾及周围，%YOU%在善信怀抱下迎来了射精，肉棒却在喷涌的前一秒被温热包覆
    - 善信俯身将肉棒吞入口中直至根部，用喉管迎接着涌出的精子，放任被%YOU%按住后脑，当做器具一样使用着
    - divider: true
    - 走出影院时，放映室里只剩下寥寥几人，%YOU%和善信边打着哈欠，边聊着刚刚电影的内容
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈呜——虽然很无聊，但是这样的电影，偶尔看看也不错呢……嘿嘿」
    -
    - 善信一脸满足地挽着%YOU%的手，而%YOU%却在想另一件事情，紧盯着%SEX%的脸庞
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么了……%CALLNAME%？」
    -
    - 那是一根卷曲的黑色毛发，印记般黏在%TEEN%的嘴边
    - ……要不要告诉%SEX%呢？

escape:
  title: 和你一同逃去天涯海角
  lines:
    #爱慕＞49后，进入情人节触发
    - 情人节当天，整个特雷森里到处都是桃色的气息
    - 在正值青春时期的学生眼里这可是一个重要的日子，大部分的%UMA%都会在意义重大的这一天送出代表心意的礼物
    - 比如现在学生会门前，已经排满了想送出巧克力的学生
    - 不过相对的，正在办公室的 %YOU% 这边就有点安静了
    - 毕竟大部分对教职工来说，收礼物可是很少见的
    - 嗯，是大部分
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哟！训练员！」
    - acc: 1
      content: 「善信？」
    - 善信从门口探出头，尾巴有些不安的左右晃动，钻进了 %YOU% 的视野
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可以稍微陪我出来一下吗？」
    - acc: 1
      key: out
      content: 「好啊」
      lines:
        - 情人节的气氛很浓，从办公室里出来之后周围就一直有巧克力的气息
        - 至于巧克力的内容和含义么，就先忽略好了
        - 躲开周围的其他学生之后，两个人安心的漫步在小道上
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「情人节啊……大家都很热闹呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「跑道上也很少有训练的同学，和平时区别真大」
        - 善信的眼神在周围左右来回了几圈，有点漫不经心
        - acc: 1
          content: 「大概是都在享受情人节吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过这都没关系啦～」
        - acc: 1
          content: 「心情很好嘛」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那不是当然的嘛！大家都很高兴，而且我也有收到巧克力哦？」
        - 善信小跑两步，在 %YOU% 的面前转了个身
        - 双手背在身后，身体微微前倾，脚步也是慢慢倒退的样子
        - 视线平静的看着 %YOU% 的眼睛，脸上微微的发红
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过……叫训练员你出来不是因为这些啦」
        - 唐突的停下脚步，抬起一直藏在背后的双手带着一个黑盒子放在胸前
        - 稍作停顿之后，朝着 %YOU% 递了过来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「情人节快乐！……以及，这和回礼的巧克力不太一样哦？」
        - 路人%UMA%「啊！是善信前辈！」
        - 路人%UMA%「善信前辈！请收下我的巧克力」
        - 善信的耳朵一下就跳了起来，有些惊慌的转头
        - 毕竟在学校里善信的人气因为经常帮助别人而高的吓人
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，那个，总之先过来！」
        - 善信把巧克力推进 %YOU% 的怀里，拉起手就跑了起来
        - 跑出学校再绕过好几个小道之后，才心有余悸的转头看向后方
        - 不知不觉间，已经跑上学校的后山了
        - 确定没有人跟上之后，才全身无力的松开了手
        - acc: 1
          content: 「善信，没事吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没事没事，只是有点累了……」
        - 善信撑着膝盖，有些不自然的喘气
        - 唯独尾巴一直在左右摇摆，轻轻扫到 %YOU% 的腿上
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这里应该没问题，只有我们俩了呢，哈哈……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼……深呼吸……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「果然送特别的巧克力被别人看见了还是有点害羞的，哎嘿」
        - 重新平缓气息之后，善信把刚才的巧克力又拿了出来
        - acc: 1
          key: special
          content: 「特别的？」
          lines:
            - 接过了巧克力的 %YOU%，下意识的问出了一句
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「嗯，是特别的哦」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不是价格也不是外壳，而是……」
            - 善信的话语在口中打转，思考着最后的用词
            - 已经递出巧克力的双手在自己的胸口有些不安的交错，像是投影出心里杂乱的情绪一样
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哈啊」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「是%SELF_CALL%……是我自己做的」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「就是，本……」
            - 虽然一开始的气势很足，但善信现在涨红的脸说明剩下的话已经说不出来了
            - 不过，之后的话对两方都已经心知肚明了
        - if: era.get('love:64') >= 75
          acc: 2
          content: 「是本命的对吧？」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「嗯，是本命哦」
            - 对于 %YOU% 的疑惑，一刻也没有疑惑的回答了
            - 看着巧克力从自己手上被拿走，善信才解放了的双手收回身后
            - 身体微微前倾，侧过脸看着身旁的风景
            - 说是看风景，其实也没有在认真看
            - 耳朵一跳一跳的，在等待接收%SEX%所期待的声音
            - acc: 1
              content: 「谢谢你，善信」
            - 耳朵轻轻跳动，随后稍微往下落了一点
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「只是谢谢嘛……」
            - acc: 1
              content: 「以及，我也喜欢你，善信」
            - 重新把脸再转回来的善信，已经是布满了害羞的绯红色
            - 一点点挪动身体贴在 %YOU% 的身边，抱住了手臂
            - 只是这个唯美的时刻，隆起的小帐篷不是很合适
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……要做吗？」
            - 善信的眼神有点退缩，双手却已经爬上了腰，悄悄的掐了一下 %YOU% 腰上的软肉
            - acc: 1
              key: location
              content: 「就在这里？」
            - acc: 2
              content: 「还是去旅馆……」
          # 马跳
    - acc: 2
      content: 「今天还有工作……」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没关系没关系！我可以等你的……那个，可以进来吗？」
        - 虽然是在请求同意，但是已经人走进来了
        - 走进办公室左右看了两眼，靠在办公桌的一旁
        - 干净的桌子上除了私人物品以外，还放着有几块零散的巧克力
        - 善信的眼神愣了一下，有点心虚
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个……这个巧克力是？」
        - acc: 1
          content: 「是骏川小姐发的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，是骏川小姐啊……」
        - 善信捂着头，脸上浮出了一个微妙的笑脸
        - 只是笑的时候，另一只手有点不安的在背后晃动
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「就是说，训练员还没有情人节礼物吗？」
        - 身后的手有点颤抖的拿出来，拿着一盒精致的巧克力
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这个是……总之就是那个啦，情人节的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要说的话就是本……本……」
        - 善信的声音的有些发抖，原本要说的话卡在喉咙里说不出来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「本来就是要给训练员的，所以……总之请收下！」
        - 有些尴尬的接上自己的话之后，才把巧克力递向 %YOU% 的方向
        - 而善信本人，则是转向其他方向，把脸藏了起来
        - acc: 1
          key: special
          content: 接过巧克力
        - if: era.get('love:64') >= 75
          acc: 2
          content: 「是本命吗？」
          lines:
            - 听见 %YOU% 的声音，善信重新把脸转了回来
            - 原本清爽的脸现在却是大片的绯红色，耳朵不自然的一跳一跳着
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「本命什么的……意识到了再说出口很难为情的……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我喜欢训练员……所以不知不觉就做好了」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「刚才看见其他巧克力的时候，真的吓到了哦」
            - 善信的声音很轻，但是却非常清晰
            - 在只有两个人的办公室里，善信却显得有那么一点孤单
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「那个，训练员，情人节……能不能陪我呢？」
            - acc: 1
              content: 「当然可以啊」
          # 马跳

valentine_out_after_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「真大胆呢，训练员」
  - 小心翼翼的整理好自己的衣服，善信才站起身
  - 探出头左右看了两眼确定周围并没有其他人，这才敢放心走出来
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「真是的……明明今天只是准备送巧克力的」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嘛，是训练员的话也不意外啦」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「毕竟是情人节呢，对吧？」

valentine_office_after_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我说啊训练员，那个巧克力」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那可是我一点一点的做出来的哦……所以一定要吃完哦？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊，还有」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「情人节快乐！」

# 依存心系列事件

trust:
  title: 你所信任的我……
  lines:
    # 爱慕＞80且不论有无接受爱慕事件，G1比赛败北场次大于3，总胜场小于4，进入资深年后善信进行自主训练，资深年进行比赛后不会触发
    - divider: true
      content: 宿舍
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天，训练员没有来」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然……是失望了吧」
    - color: %COLOR%
      content: 善信躺在床上，小声的自言自语
    - color: %COLOR%
      content: 隔壁的葛城早就进入了梦乡，但是今夜的善信只能看着窗外的月色，完全找不到睡觉的想法
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为什么，今天训练员会不在我的身边呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为什么，训练员没有在我的身边呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果，继续让训练员失望的话……」
    - （「善信，我已经厌倦你了」）
    - （「善信，我们就到这里了」）
    - （「再见了」）
    - color: %COLOR%
      content: 善信猛的起身推开被子，嘴里正在重重的喘气
    - color: %COLOR%
      content: 明明自己根本就没有睡着，但却看见了噩梦
    - color: %COLOR%
      content: 但是在脑海里的画面中，%YOURNAME% 的声音是如此的真实，仿佛这就是本人站在面前
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content: 不知何时，眼睛里已经布满了泪水
    - color: %COLOR%
      content: 从已经红透的眼眶抹去泪水，才理解了自己的内心此时此刻想法
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，是这样的吗」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我对训练员，我对训练员是……」
    - color: %COLOR%
      content: 眼神不自觉的扫向身旁，确定了没有打搅到舍友之后才重新拉起被子缩回去
    - color: %COLOR%
      content: 抓着被子盖住自己，卷缩在自己的被窝里
    - color: %COLOR%
      content: 双手缓缓的抬起，压在胸口
    - color: %COLOR%
      content: 心跳还在加速，感觉就像是在比赛的时候一样
    - color: %COLOR%
      content: 但这份心动只是在想着一个人
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content: 汗水渗透睡衣，喘气声也越来越大
    - color: %COLOR%
      content: 不知过去了多久，善信才从已经湿透的被窝里探出头
    - color: %COLOR%
      content: 脸上带着陶醉的笑脸，缓缓的闭上眼
    - color: %COLOR%
      content: 时间已经到了后半夜，已经逐渐染上了困意
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好想见你」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有你的话……没有你的话就……」
    - color: %COLOR%
      content: 善信躺在床上，嘴里发出了轻轻的笑声
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有训练员的话，我会永远停止吧……」
    - color: %COLOR%
      content: 发热的身体逐渐沉入了梦乡，直到没过多久就被好心的舍友摇醒了
    - color: %COLOR%
      content: 太阳高高挂起，已经到了起床的时间
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「善信，该起床了哦！不像你啊，居然睡的那么沉唉」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉，有吗？」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「不过你睡觉的时候还在笑哦，做了好梦吗？」
    - color: %COLOR%
      content: 善信捂着胸口，脸上自然的浮上笑容
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，做了好梦哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是一个非常好的梦哦……」
  # 依存心

is_you:
  title: 正因为是你……
  lines:
    # 获得依存心后下一回合
    - color: %COLOR%
      content: 早晨到来的时候，善信早早的来到了训练场，等着一个人的到来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content: 背靠着清晨冰凉的墙壁，眼神紧盯着前方
    - color: %COLOR%
      content: 而对此浑然不知的 %YOURNAME%，出现在善信的视线角落里
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……来了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这次，不能逃跑了」
    - color: %COLOR%
      content: 善信站直身，脸上浮出了一阵笑容
    - color: %COLOR%
      content: 梦与现实是相反的，但人不会只听这一句就停下
    - color: %COLOR%
      content: 没有一点犹豫，立刻小跑来到了 %YOURNAME% 的身边
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早上好，训练员！」
    - color: %COLOR%
      content: 熟悉的嗓音带着热情，点亮了早晨
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （不对……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （目白善信……不对，善信是不会做那些事情的）
    - color: %COLOR%
      content: 带着明亮的笑容，就像往常一样在 %YOURNAME% 的身边并肩前行
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （但是啊）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （总有一天，%YOURNAME% 会一直看着我的）

nega_dis:
  title: 负距离的我们
  lines:
    # 依存心持有，爱慕＞95，状态情动或以上时在回合结束随机触发
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员？现在有时间吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不是这一会……而是今天一整天」
    - 在一个没有其他人的时间，善信单独找到了正要下班的 %YOU%
    - 背对着窗户，背光的眼神里带着平静的闪光在注视着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SELF_CALL%，偶尔也是会想做点很厉害的事情的哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员你会和我一起的，对吧？」
    - acc: 1
      content: 「那是当然」
      lines:
        - 听见 %YOU% 的回答之后，善信闪着光的眼睛才缓缓移开
        - 动作迅捷的帮 %YOU% 收好了文件，又自然的拉住了手
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天是有空的，对吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那就麻烦训练员，今天稍微辛苦一点了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……说不定明天也是呢」
        - acc: 1
          content: 「唉？明天？」
        - acc: 2
          content: 「看样子会是很疯狂的晚上呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼哼～和训练员说的一样呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是能够疯狂到明天的……事情呢」
        - 善信的声音还是一如既往的欢快洒脱
        - 只是在 %YOU% 的眼里，在前方的善信似乎出现了看不清的部分
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这里，怎么样？」
        - 随着一蹦一跳的脚步停下，善信没有回头的站在原地
        - 在旅馆前，不着痕迹的往后退了几步
        - 有点冰凉的手指钻进 %YOU% 的手心，轻轻的抓住
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天，准备了很多哦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是足够惊喜的事情呢……」
        - 以几乎无法反击的力气，抓着 %YOU% 走进了大门
        - 直到粉红色的房间，已经被捏的有点发痛的手才被松开
        - 门板发出上锁的声音，预示着今夜即将无眠
        - acc: 1
          content: 「善信，这……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「～」
        - 在疑问或者说教出口之前，嘴唇就被堵上了
        - 柔软的舌头强硬的钻过唇齿，与对方交汇在一起，夺取着所及之处所有的味道
        - 直到呼吸已经断开，即将失去意识的时候，新鲜的空气才回到身体里
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哈啊，哈啊」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「属于训练员的味道……」
        - 淡蓝色的眼眸里，反射出昏暗的微光
        - 当着 %YOU% 的面，拿出了药瓶
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我说啊，%YOURNAME%」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你来选择怎么样？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……是我，还是你？」
        - 视线模糊的 %YOU% 在冥冥中猜到了药的大概，惊慌的压下脸上的恐惧
        - 而现在，选择权就在 %YOU% 的下一句话
        # 药物为弗隆K，爱慕100时替换为弗隆P
        - acc: 1
          content: 「给我」
          lines:
            - 说出来了
            - 被压在身下的 %YOU%，自暴自弃般的说出来了
            - 接过了善信手上的东西，毫不犹豫的吞下
            - 身体极速发热起来，渐渐感受到身下传来的强大冲劲
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「啊……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「很宏伟呢……」
            - 善信的手指在最敏感的前端轻轻的摩擦着，轻巧的夹住了裤子的拉链
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「训练员……很舒服吧？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「让我也，舒服起来吧」
          # 进入马儿跳
        - acc: 2
          content: 「交给你了」
          lines:
            - if: era.get('cflag:0:0') === 1
              lines:
                - 在 %YOU% 的面前，善信一口气喝尽了手里的液体
                - 下半身传来一阵炽热的触感，紧紧的贴在小腹上
                - 膨胀起来的肉棒，在善信的身下微微颤抖着
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「啊……」
                - 这份刺激对于善信来说，足够新鲜
                - 充血的前端微微发抖，在 %YOU% 的面前如同呼吸一般起伏
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「训练员……你会接受的吗？」
                - 虽然话语还在请求 %YOU% 的同意，但身体足够诚实
                - 将此刻善信癫狂的表情尽收眼底，但 %YOU% 却什么都做不到
                - %UMA%的力量，不是 %YOU% 能抗衡的……
              # 进入马儿跳（强奸事件发生）
            - if: era.get('cflag:0:0') !== 1
              lines:
                - 在 %YOU% 的面前，善信一口气喝尽了手里的液体
                - 下半身传来一阵炽热的触感，紧紧的贴在小腹上
                - 膨胀起来的肉棒，在善信的身下微微颤抖着
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「啊……」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「真厉害啊，这个……咕」
                - 这份刺激对于善信来说，足够新鲜
                - 充血的前端微微发抖，在 %YOU% 的面前如同呼吸一般起伏
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「训练员……你会接受的吗？」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「我已经，忍不住了」
                - 虽然话语还在请求 %YOU% 的同意，但身体足够诚实
                - 硬起来的肉棒，轻轻的顶在小穴口
                - 只要稍微用力向前，两个人就会连接在一起
                - acc: 1
                  content: 「不要……」
                - acc: 2
                  content: 「请吧……」
                - %YOU% 的声音微乎其微，一点都没有传进善信的耳朵里
                - 将此刻善信癫狂的表情尽收眼底，但 %YOU% 却什么都做不到
                - %UMA%的力量，不是 %YOU% 能抗衡的……
              # 进入马儿跳（强奸事件发生）
        - acc: 3
          content: 「不需要」
          lines:
            - 在 %YOU% 的回应之后，善信的手停了下来
            - 即将向前扑倒的身体，缓缓的又向后退去
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……不行，吗？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我就不行是吗？」
            - 强势的带着 %YOU% 来到这里
            - 强势的压倒 %YOU%
            - 强势的想要做到底
            - 但，在你的一句话下，停止了动作
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「果然，我……」
            - 在善信即将乖巧的起身的时候，%YOU% 伸出手抓住了%SEX%
            - 未被使用的药物落在地上，宣告了善信此刻已经失去主动权
            - acc: 1
              content: 「不用这些，我也可以的」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……」
            - acc: 1
              content: 「只要善信想要，我一直都在」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「训练员……」
            - acc: 1
              content: 「所以，温柔的来吧」
            - 原本漆黑的眼神，再一次闪起了明亮的闪光
            - 善信原本发抖的双手，用力的抱住了 %YOU% 的脖子
            - 嘴唇紧紧的亲在一起，不知过去了多久
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哈啊……」
            - 善信的眼角泛着泪光，轻飘飘的看着 %YOU%
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「请吧，训练员……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我的身体，交给你了」
          # 进入马儿跳
    - acc: 2
      content: 「今天不行」

come_for_you:
  title: 入夜，我为你而来
  lines:
    #依存心持有，状态不安或以上时在回合结束随机触发，马娘男T
    - 夜晚，早已进入梦中的 %YOU% 被一阵莫名的吵闹声惊醒
    - 房间依旧是 %YOU% 熟悉的房间，而且 %YOU% 也想不到什么会发出声音的理由
    - 但在睁开眼的一刻，所有的疑问都有了解答
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - 不知为何，全身赤裸的善信，此刻正趴伏在 %YOU% 的身上
    - 平日隐藏起来的乳房此刻悬停在空中，乳尖几乎下一刻就能碰到关键部位
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你醒了啊，训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱歉呢，本来是不想打搅你睡觉的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是不这样子做的话，我……没法安心睡着呢」
    - 阴暗中，善信缓缓的压下身，用丰满的山峰包裹住了因为气味而雄起的部位
    - 粉嫩的舌头绕着充血的前端缓缓绕圈，湿润之后毫不犹豫地向下一口吞下
    - 温柔的触感，柔和的动作，刺激这本就敏感的神经，挑动着理性的开关
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜……咕……❤️」
    - 双峰和舌技的循环之下，即使没有那个想法，也无法控制身体的本能
    - 白灼的液体喷涌而出，涌进了善信的口腔
    - 舌头贪婪的在表面上滑动，直到不在沾有一点腥臭的液体，这才缓缓松开口，朝上方轻轻的吻下去
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，真是个好孩子」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在也还很精神呢❤️」
    - 温热的手掌抓住了刚刚射出的阴茎，轻缓的上下撸动起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在，想做什么呢～」
    - 缓缓的从床上爬起身，在 %YOU% 的视线里露出了早就已经湿润的下身
    - 小小的开口一张一合的，不断流下粘稠的液体
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今夜……要做什么呢？」
    - acc: 1
      key: select
      content: 起身推倒善信
    - acc: 2
      content: 放弃抵抗

come_fy_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「真是精神呢，训练员」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「已经做到这样的话……就请你负起责任吧～」
  - 手指对着 %YOU% 的胸前，用力的画着圈
  - 俏脸向前，往 %YOU% 的脖子上重重的留下痕迹
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这样……就不会再有其他人了❤️」

endless_escape:
  title: 无终的逃亡
  lines:
    #（持有依存心时替换其他BE）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近总感觉提不起精神呢……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是感觉又没有缺少什么啊……真奇怪」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「去和太阳神……嗯，好像不对」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「麦昆和莱恩%THEY%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个时候好像不太适合找其他人吧，在干什么呢，我」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「必须要训练员呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然已经失踪三天了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在到底在哪里呢，训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「碍事的人，不见了呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「终于……可以回去了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好想你啊……我的训练员」

pre-rooftop:
  - color: %COLOR%
    content: 【%CHARA% 在天台等待】

# 定义事件标题用
rooftop:
  title: 等待，或是……
  lines:
    -

# 定义事件标题用
rooftop_3:
  title: 等待，或是……期待
  lines:
    -

rooftop_event:
  # 得到依存心后，参加天皇赏春未胜利，天台触发
  # 触发事件9次以下：等待，或是……
  # 触发事件超过9次：等待，或是……期待
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「输了」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我，又输了啊」
  - color: %COLOR%
    content: 独自坐在天台，享受着风吹过的触感
  - color: %COLOR%
    content: 耳朵习惯性的跟着风摇摆起来，但却没有让心情也一同明亮起来
  - color: %COLOR%
    content: 安静的感受着心跳声，看着碧蓝色的天空
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员，会来吗」
  - color: %COLOR%
    content: 在两个人第一次相遇的天台上看着天空，胡思乱想着
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊，什么嘛」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我已经输掉了啊……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「比赛什么的……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这样的话，训练员，肯定不会再来了」
  - color: %COLOR%
    content: 躺在以往午睡的位置，抱着一点莫须有的期待
  - color: %COLOR%
    content: 风还在吹过天台，善信合上了双眼，等待着熟悉的声音
  # CFLAGNAME:52 = 育成用变量
  - if: era.get('cflag:64:52')?.only_you <= 3
    lines:
      - divider: true
      - 此时此刻，%YOU% 仅仅是带着复杂的表情隔着墙壁，听着自言自语却无法前进一步走到%SEX%的身边
      - 现在应该用什么样的表情，对 %YOU% 来说或许太过深奥了
  - if: era.get('cflag:64:52')?.only_you > 3
    lines:
      - color: %COLOR%
        content: 门开了
      - divider: true
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哎？」
      - 天台的入口传来了开门的声响，是 %YOU% 走上来了
      - acc: 1
        content: 「善信！」
      - acc: 2
        content: 「果然在这里啊」
      - 在两个人四目相对的瞬间，%YOU% 的声音自然的跑了出来
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员？！」
      - 善信就像是往常那样，开朗的回应了 %YOU%
      - 只是笑容之后，表情又稍显落寞的暗淡下来
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那个，为什么训练员会来这里？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是来找我的……」
      - 声音逐渐变小，直到最后把眼神也移开
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （我在想什么呢，我已经输掉了啊）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （我这样的%UMA%怎么会值得训练员这样上心照顾呢）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊……训练员你要休息的话我就先走了」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「反正%SELF_CALL%也不需要……」
      - 在脸上挤出勉强的笑脸，随意找了一个借口正要离开的时候
      - 前方温柔的手掌按在肩膀上，把善信想要起身的动作打断了
      - acc: 1
        content: 「在说什么呢」
      - 一直没有立起来的耳朵，慢慢的撑起来了
      - 善信抬起脸，看着 %YOU% 现在的表情微微发愣
      - 「你是我的搭档啊，怎么可能放下你不管呢」
      - 仅此而已的一句话，却重新点亮了瞳孔
      - 「输掉也无所谓」
      - 「善信你可是我的搭档啊」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员……」
      - 抬起手遮住微微发红的眼眶，用毫无力气的拳头敲在 %YOU% 的身上
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……谢谢你，训练员」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「只要，只要训练员你还在看着我的话」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我，一定还能站起来的！」
      - 唤回过去的自己，善信重新露出了明亮的表情
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （正因为有你啊，训练员）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （因为是你，所以……）

s_feeling:
  title: 异样感
  lines:
    #获得依存心并在任意比赛胜利后，任意地点约会触发
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「很突然呢，今天」
    - 善信亲昵地抱着 %YOU% 的手臂，完全没有理会周围的眼神，维持着轻飘飘的力道
    - 肩膀碰在一起，平行的走在一起
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然%SELF_CALL%完～全不在意的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （我的训练员，主动和我出来了耶～）
    - if: era.get('cflag:64:0') !== 1
      content: 脸上带着淡淡的绯红，把心脏……胸部压在 %YOU% 的手臂上，逐渐用力的抱紧
    - 尾巴不自觉的向着身旁滑过去，悄咪咪的绑在腰上
    - 小小的耳朵灵巧的一抖一抖，往身旁的 %YOU% 不停的轻拍着
    - acc: 1
      key: select
      content: 「那个，善信，这个很痒的……」
      lines:
        - 听见 %YOU% 的声音，抖动的耳朵停了下来
        - 往常的话，善信应该就会停下动作，带着尴尬的笑拉开一点距离
        - 今天，却是更加的抓紧了手臂
        - 直到被抓紧的有点发痛的时候，善信才松开了手
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……嗯嗯」
        - 善信低着头，松开的手轻轻戳了几下 %YOU% 的身体
        - 在 %YOU% 看不见的角度，浮出了一幅不自然的笑脸
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我明白了，训练员……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「会很痒的呢……」
    - acc: 2
      content: 「那个，善信，在外面这样不太好吧？」
      lines:
        - 抖动的耳朵没有停下，还在继续拍打着
        - 亲密的动作惹得周围的人逐渐开始注意到这边，善信却没有一点点退缩的样子
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「有什么关系嘛」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我们就是这样的关系对吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「还是说……」
        - 脸上带着笑容，侧过脸看向 %YOU%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只是在外面不行？」
        - 一瞬间的恍惚过后，善信又正经的站直了身
        - 和 %YOU% 一同并肩行走在街道上，唯有尾巴在不停的向着屁股的方向扫去
        - 在役%UMA%的力气，不是一般人能够媲美的
        - 方向从一开始普通的约会，走向了其他的方向
        - 在周围的人都没有在意之后，善信才带着 %YOU% 停下脚步
        - 眼前的环境，无论是谁都能明白即将发生什么了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「在这里的话，训练员就不会说不行了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对吧？」
        - 没有等到 %YOU% 的回复，善信推开了酒店的门
        # 强奸

s_feeling_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这样的，你喜欢吗？」
  - 善信紧紧的抱紧了 %YOU%，带着黯淡的眼神轻飘飘的笑了起来
  - 灵巧的手指还在对着下半身随意的滑动，如同宣示主权一般

pre-nap:
  - color: %COLOR%
    content: 【想和 %CHARA% 在天台吃午饭吗】

nap:
  title: 宁静的午睡时光
  lines:
    #爱慕＞49，同心刻印lv1，天台出现
    - 劳累的一个上午之后，身心俱疲的 %YOU% 带着便当走上了天台
    - 刚刚推开门，善信就出现在视野的角落里朝着 %YOU% 用力的挥手
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这边这边，训练员！」
    - 挥手之后，善信从自己的包里拿出了有点夸张的便当盒
    - 等到 %YOU% 坐下，满满当当的一整盒午饭就放到了面前
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员你试试看？味道应该不错的哦！」
    - 善信热情的夹起手里的小香肠，放在 %YOU% 的便当里
    - 感受到身旁的热情，连带 %YOU% 身上的劳累感也一扫而空
    - acc: 1
      content: 「不愧是目白家，便当也那么好吃」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好吃吗？嘿嘿……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，训练员，味道真的很不错对吧？」
    - 善信脸上带着一点羞涩的微红，眼神在自己的便当和 %YOU% 的脸之间左右跳动着
    - acc: 1
      content: 「很不错哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是吗？嗯嗯……」
    - 善信脸上原本的不安感一下消失，变得欢快起来
    - 直到吃完便当之后，两个人才在阴凉的地方躺下，享受起午休安静的时光
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼——」
    - 善信躺在 %YOU% 的身旁，发出平稳而悠长的呼吸声
    - 毫无防备的样子，似乎完全不在乎会发生什么一样
    - 在这个两个人初次见面的天台，%SEX%就这样安静的睡着了
    - 安详，不设防，不做任何抵触，就这样安静的躺在这里
    - 午休的时间很长，长到可以做很多的事情
    - acc: 1
      key: select
      content: 就这样看着善信的睡脸（好感+10）
      lines:
        - 微风带着温柔的触感吹过
        - 看着善信有一点呆呆的睡脸，%YOU% 自然的笑了起来
        - 不知不觉间，午休的时间已经快到了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……」
        - 似乎是知道了现在的时间，善信浅浅的扭动了一下肩膀
        - 原本平静的睡脸上稍微有点小小的不适感，或许很快就会醒过来
        - 对着这样可爱的睡脸，%YOU% 没忍住悄悄的伸出了手指
        - acc: 1
          content: 「该醒醒啦」
        - acc: 2
          content: 安静的戳戳脸
        - 在睡梦中感受到外界的动静，有点不安的睁开了有些没睡醒的眼睛
        - 只是在抬起头的时候，脸颊撞上了什么
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……啊咧？」
        - 从午睡中醒过来的善信把眼神微微向下看去，这才发现了戳在自己脸上的手指
        - 视线短暂的对上之后，善信才把自己的脸从 %YOU% 的手旁边移走
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊哈哈……睡着的时候不会在意这些呢，那个……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……好啦好啦！要上课了啦！」
        - 从交谈中逃跑的善信一口气跑到了天台的门口，只是在这里稍微停留了一会
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……啊！我到底在想什么啊！」
        - 推开门，只留下 %YOU% 在天台上
    - acc: 2
      content: 稍微恶作剧一下吧（爱慕+2）
      lines:
        - 就这样恶作剧一下吧
        - 善信已经睡着了，只要不做什么过分的事情
        - 只要不去做很过分的事，稍微恶作剧一下
        - 思考过后，%YOU% 在衣服里翻到了一支崭新的中性笔
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼……」
        - 善信睡的很香，直到 %YOU% 已经画好了自己的大作
        - 现在的话，还可以趁着善信没有睡醒，把痕迹擦掉也没问题的哦
        - 只要把中性笔的字迹擦掉，赶在午休结束之前……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……」
        - 只是，留给 %YOU% 的时间已经结束了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员，你没睡着吗……啊咧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为什么拿着笔……」
        - 这样说着的善信，习惯性的摸了摸自己的脸
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这个感觉……训练员？」
        - 善信的眼神里带着不信赖的感觉，看着手上的墨水
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「都那么大的人了，还要做这样的恶作剧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员你也长不大呢～」
        - 对着有点慌乱的 %YOU%，开玩笑的伸手戳了几下
        - 只是下午的时候，带着口罩上课的善信无比后悔没有给 %YOU% 也画上几笔
    - if: era.get('love:64') >= 75
      acc: 3
      content: KISS一下不会被发现吧
      lines:
        - 平日的天台没有嘈杂的声音，在这里的只有风声和善信平稳的呼吸声
        - 现在只有两个人在这里，做什么都不会被发现
        - 善信已经睡着了，稍微……
        - acc: 1
          content: 「只是稍微碰那么两下的话……」
        - 轻轻的靠近了善信的身前，遮住了照在%SEX%身上的稀疏阳光
        - 善信的呼吸声依旧平稳，完全没有对身边的 %YOU% 设防的样子
        - 带着脸上的绯红色，%YOU% 有点犹豫的慢慢伏下身
        - 对着眼前平静的睡颜，以及红润的嘴唇
        - 张开双手撑起有点颤抖的身体，两张脸逐渐贴近，嘴唇之间即将贴在一起
        - acc: 1
          content: 就这样亲下去吧
        - acc: 2
          content: 就这样亲下去真的好吗
        - acc: 3
          content: 就这样亲下去能收住手吗
        - 思考着接下来的动作，但 %YOU% 的身体并没有等待
        - 嘴唇贴在一起，短暂的止住了呼吸
        - 大脑的思考暂时断线了，再次连接的时候却已经结束了
        - %YOU% 的脸上挂着红润，快速的呼吸着空气冷却着发红的身体
        - 再次看向身边的善信，稍微咽下一口水
        - 嘴唇上的气息依旧在勾动思绪，眼神死死的看着刚才亲密接触的位置
        - 不受控制的再一次贴近善信的面前，尽力的压着呼吸
        - acc: 1
          content: 就这样亲下去吧
        - acc: 2
          content: 就这样亲下去吧
        - acc: 3
          content: 就这样亲下去吧
        - 嘴唇第二次贴在一起，却没有轻微的鼻息扫在脸上
        - 察觉到异常的 %YOU%，正要时起身却被一双手抱着脸，起不来身
        - 舌头钻进嘴唇，穿过门牙，灵巧的勾动着
        - 直到呼吸已经无法支撑身体的时候，压着后脑的双手才舍得松开
        - 张着嘴分开贴在一起的两张脸，咽下嘴里的口水
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……这样子，根本没法睡觉啦」
        - 善信的脸上带着羞涩的笑脸，轻轻的抓着 %YOU% 的肩膀
        - 两个人的眼神对在一起，，尴尬的笑了起来
        - 因为突发情况而松开的嘴唇再一次贴在一起，交换着味道
        - 午休结束的铃声在天台上响了起来，却没有让贴在一起的两个人分开
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「时间，到了呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然有点……嗯，没事」
        - 善信的眼神不舍的离开了 %YOU%，站起身整理了一下有点乱的衣服
        - 走到天台门口，回过头却不敢直视 %YOU% 的眼睛，有点微妙的刮着脸
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……训练员，我们走吧？」
        - acc: 1
          key: sex
          content: 「嗯，走吧」
          # 性欲+10%
        - acc: 2
          content: 「稍等一下，善信」
          lines:
            - 善信刚刚想要开门的手悬停下来，带着期待回过头
            - 即使不说话，两方也清楚对方心里的事情
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……会迟到的耶」
            - 半晌，善信才找到一句借口
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「那个时候，训练员你能帮我解释吗？」
            - acc: 1
              content: 「可以啊」 # 合奸
            - acc: 2
              content: 「不行哦」 # 被强奸
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「这样啊……」
            - 背着手悄悄的锁上了身后的门，快步走到了 %YOU% 的面前
            - 不带一点犹豫的扑进了 %YOU% 的胸口，压倒在地上
            - 善信抬起已经红透的脸，用力的亲在 %YOU% 的脸上
            # 马跳

nap_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊……这下要被老师抓去补习了啊」
  - 善信坐在 %YOU% 的身边，对着天空念叨
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「突然翘课什么的，家里不知道会不会来问我呢」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……不过到时候，训练员你会陪我的对吧？」
  - 没等到回应，善信就站了起来
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「该走啦，训练员」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……继续在这里会被发现的啦」
  - 善信依旧带着笑脸，拉着 %YOU% 的手离开了天台

pre-leisure:
  - color: %COLOR%
    content: 【和 %CHARA% 去唱卡拉OK吧！】

leisure:
  title: 休闲时光
  lines:
    # 爱慕＞49，同心刻印lv1，商店街 卡拉OK触发
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「突然就来唱歌了，发生什么了吗训练员？」
    - 善信的双手背在身后，有点疑惑的歪头看着身边的 %YOU%
    - acc: 1
      content: 「只是突然间就想来了」
    - acc: 2
      content: 「偶尔也想和善信一起唱歌呢」
    - 似乎是接受了这个解释，善信也没有多问
    - 两个人推开包间的门，有点不安的坐下
    - 在单独的包间里只有两个人……这个是不是有点，有点那个的倾向啊？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，训练员要点什么？我帮你先点上吧！」
    - 仿佛是为了掩盖自己的坐立不安，善信主动走到了点歌机面前
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难得是我们俩来唱歌，训练员你也要尽兴哦！」
    - acc: 1
      key: sex
      content: 「点善信你喜欢的歌吧」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是这样啊，那%SELF_CALL%可要随便点了哦！」
        - 不知为何，善信刚才还有点不安的样子消失不见了，取而代之的是热情的歌声
    - acc: 2
      content: 「重点是善信你觉得开心就好」
      lines:
        - 善信的动作稍微顿了一下，随后平静下来才缓缓的拿起了桌上的麦克风，朝着训练员伸出手
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「既然如此的话，那就和我一起唱！」
        - 不知为何，善信虽然是笑着的但却有一点生气的样子
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这样我就会很开心哦」
    - acc: 3
      content: 「不只是唱歌哦……」
      lines:
        - 听见 %YOU% 的话，善信的动作停下来了
        - %SEX%一直是很聪明的，也一直很擅长听出来别人话里的深层含义
        - 仅有两个人在一个隔音的包间里，这个意思已经足够明显了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员……真是色鬼」
        - KTV 的自动播放已经开始传出音乐，但是并没有人跟着开始歌唱
        - 坐在包间的沙发上，朝着眼前的搭档伸出了双手
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SELF_CALL%就在这里哦……」
        - acc: 1
          key: sex2
          content: 抱住善信
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「哈啊，训练员的味道……」
            - 把脸埋在 %YOU% 的怀里，享受着体温和气味
            - 从拥抱的缝隙中间，传出了属于善信的声音
            - 像是虚弱，像是脱力
            - 分开拥抱的时候，慢慢的伏下身，轻轻拉开的面前的衣服
            - 抓起眼前气息浓厚的麦克风，轻轻吹出一口气
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「训练员的味道……」
          # 马跳
        - acc: 2
          content: 捏善信的脸
          lines:
            - 对着张开双手的善信，%YOU% 无情的捏了一下%SEX%红润的脸
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呜哇！」
            - 惊讶的声音从善信的嘴里飘了出来，睁大眼睛看着 %YOU%
            - acc: 1
              content: 「想什么呢，色鬼」
            - 看着对方的反应，善信鼓起脸，抬起了拳头
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「真是的……不要这样子开玩笑啊」
            - 今天的歌声是用 %YOU% 被锤打的惨叫声交织的

pre-cinema:
  - color: %COLOR%
    content: 【在 %ARDAN% 也在的时候，和 %CHARA% 去看电影吧！】

cinema:
  title: 电影院怪谈！？
  lines:
    #爱慕≥74，同队目白阿尔丹且爱慕≥74，无依存心，外出选择商店街 电影院
    - 在商店街上漫步的时候，正好走到了电影院的门前
    - 同时在门口，也正好撞上了另一个人
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「啊，这不是善信吗？」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「你也来看……训练员也在啊」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「那我就不打搅你们俩啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉！等等，阿尔丹！不是你想的那样！」
    - 看着目白阿尔丹自顾自的后退一步，善信急急忙忙的跑上前去拉住了即将离开的脚步
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们只是刚刚好路过啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，阿尔丹你是来做什么的？」
    - 半强行的拉住目白阿尔丹之后，善信才反应过来
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「呵呵～最近有不少的新电影上线了」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「我来提前看一看有没有合适训练员看的」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「新电影吗……」
    - 稍作思考过后，善信也抬起头看向电影院上方的屏幕
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，接下来也没什么事」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「阿尔丹有找到什么好看的吗？」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「倒是找到了一些啦，不过排片很少呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，来都来了！训练员你想看吗？」
    - acc: 1
      key: movie
      content: 「恐怖电影怎么样？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦哦，恐怖电影吗！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「总感觉会很刺激呢！」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「恐怖电影……训练员你也真是坏心眼呢～」
        - 隔着正在贩票机前有点小激动的善信，目白阿尔丹对着 %YOU% 做出了一个稍微有点苦恼的表情
        - 毕竟现在再选择恐怖电影的话，两个人都能明白这是在迫害谁了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「两位～三张票准备好了哦」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「嗯哼，我们走吧，训练员」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「这可是善信为你买的票哦～」
        - 三个人一同走进了放映汀，在逐渐变暗的氛围里坐了下来
        - 被善信和目白阿尔丹夹在中间的 %YOU%，不知为何感受到了一阵尴尬
        - 直到周围完全变黑，幕布上浮现画面的时候
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「……感觉没有之前的道具精妙呢」
        - acc: 1
          content: 「是啊」
        - acc: 2
          content: 「感觉还是你的变装更吓人一点」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「训练员的话术越来越好了呢，呼呼」
        - 虽然目白阿尔丹脸上还是一幅平平无奇的模样，但另一边的完全不一样了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……啊……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜哇！」
        - 自从屏幕上的鬼怪开始频繁登场，善信抓着 %YOU% 的手指就没有松开过
        - 即使想要说点什么，但是电影院你也不好开口
        - acc: 1
          content: （出去再说吧）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不妙啊啊！」
        - divider: true
          content: 电影结束
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不妙……真的不妙」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜哇，感觉脚上都没力气了……」
        - 刚刚出来的善信和大多数人一样，脚软的扶着 %YOU% 的肩膀，颤颤巍巍的勉强站稳
        - 跟随着两人的脚步一同出门的目白阿尔丹看着善信的样子，自然的笑了起来
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「没想到善信也有这个样子的时候呢～」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「今天看见了难得一见的画面呢，谢谢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真是的！阿尔丹！」
        - 三个人一边走出电影院，一边说笑着
        - 只是在踏出门口的一瞬间，看着夜空的善信默默的回退了一步
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「夜晚……原来那么吓人吗？」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「善信？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，训练员？」
        - 后退两步之后，善信一把抱住了 %YOU% 的手臂，带着泪水还没消去的眼神
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「能不能……送我回去呢？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只，只要送一程就好了啦，真的……」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「阿拉？」
        - 看着面前水汪汪的眼神，目白阿尔丹和 %YOU% 只能微妙的交换了一下眼神
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「不过时间确实也很晚了……」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「交给我也没问题的哦？」
        - acc: 1
          content: 「我送你们回去吧」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「那就麻烦你啦」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「……嗯，或者说」
        - 缓缓绕过抱紧了手臂的善信，用一个一模一样的姿势抱紧了另一边
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「训练员会喜欢这样吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「快，快点回去啦……」
        - 一边，是正在瑟瑟发抖的善信
        - 一边，是毫无忌惮的把身体贴在 %YOU% 手臂上的目白阿尔丹
        - acc: 1
          key: sex
          content: 「……回去吧」
        - acc: 2
          content: 「去旅馆吧」
          # 3P
    - acc: 2
      content: 「恋爱电影怎么样？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「恋爱电影？训练员喜欢这样的吗？」
        - 听到答案的善信稍微歪头，但很快就转过身走到了贩票机前
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「恋爱啊……有点稀奇呢」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「总感觉不太像是训练员会选的呢」
        - 相比没做太多思考的善信，目白阿尔丹考虑的就不一样了
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - （居然是恋爱电影什么的）
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - （明明是三个人……）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「阿尔丹？要开始了哦」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「了解～」
        - 两位%UMA%一左一右坐在 %YOU% 的两边，莫名认真的看着电影
        - 电影「你也是一样喜欢他的，没错吧」
        - 电影「但是我不会输」
        - acc: 1
          content: 「很普通的剧情啊……」
        - 黑暗中 %YOU% 的小声嘀咕，被两边听的清清楚楚
        - 电影「我会抢在你之前……得到他的心！」
        - 听着并不优质的台词，%YOU% 默默尬笑起来
        - 只是笑声还没出来，就被人从身旁抓住了手
        - 也许是因为影片的质量不高，影院里的人不算多
        - 换言之，现在就只有善信和目白阿尔丹坐在周围
        - 柔软的触感顺着手一点点往中间摸过去，接触到了有点敏感的部位
        - acc: 1
          content: 「！？」
        - 两边的手在身上上下游走，挑起了一阵异样感
        - %YOU% 的注意力已经无法放在电影上，只能咬紧牙忍耐着即将出口的声音
        - 如此的酷刑不知道持续了多久，终于等到了电影结束的时刻
        - 在座位上勉强抬起已经红透的脸，喘着粗气看着左右两边
        - 而作为一切的始作俑者，目白阿尔丹和善信只是各自抢占了一边的手臂，把 %YOU% 从座位上抬了起来
        - 在没有人注意到的时候，两个人同时贴到了耳边
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「训练员，居然喜欢这样的故事呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「看了这些的话……我不就会变的想要了嘛」
        - 没有等到 %YOU% 的回答，善信和目白阿尔丹就已经一左一右的夹住 %YOU% 走出了影院
        - 看着道路前方闪着霓虹灯的旅馆，%YOU% 的脸上挂上了哭笑不得的表情
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「外宿的请求，已经准备好了哦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「姆……我也准备好了……」
        - 坐在床上的两个人对过眼神，齐齐看向坐在床上被扒光衣物的 %YOU%
      # 进入3P，阿尔丹上位，善信助手

movie_end:
  - color: %COLOR_71%
    content:
      - fontWeight: bold
        content: %ARDAN%
      - 「居，居然……」
  - color: %COLOR_71%
    content:
      - fontWeight: bold
        content: %ARDAN%
      - 「训练员……真是过分呢」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「唉……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「真厉害啊……训练员」
  - 两个人摊到在床上，一起抱着夹在中间的 %YOU%，甜蜜的贴在胸口上
  - 汗水沾满的身体带着色情的气味，但一点都没有移开的意思

delicious:
  title: 突然美食时间？
  lines:
    #爱慕＞49时，一起加餐触发
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，训练员，又在偷偷吃零食了！」
    - 突然走进门的善信大声的打断了 %YOU% 正在掏薯片的动作，顺手拿走了放在桌子上的包装
    - 虽然严格来说，休息的时候吃一包薯片并不是什么偷吃
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「吃薯片的时候也分我一点嘛」
    - 拿着包装迅速的吃了两口，自然的坐到了 %YOU% 的身边
    - acc: 1
      content: 「那我呢？」
    - acc: 2
      content: 「我的薯片……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊」
    - 反应过来的善信这才发现不对，尴尬的拿起了提过来的袋子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈，也不是没想到训练员的份啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「反正今天下午没有什么事情对吧」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我特意拜托麦昆帮我找了一些茶点～」
    - 一边说着，一边把袋子里的小盒子都拿了出来
    - 看着眼前摊开的几盒点心，似乎被抢走薯片的事情没发生过一样
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来来，茶也准备好了哦～」
    - 不知为何，原本准备摆烂度过的下午成为了两个人的茶会
    - ……如果无视掉没过多久就突然变成派对的氛围的话
# 两人体力+200，体重+10～20（x10）

rest:
  title: 休息……？
  lines:
    #爱慕＞74，马娘，非处女时，小憩触发
    - 一个天气不好的日子，%YOU% 站在办公室里看着窗外感叹着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么了训练员？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过只是一天的训练取消嘛，没关系啦～」
    - 身后传来的是善信懒洋洋的声音
    - 逃离了今天的环境，正开心的躺在办公室里刷着手机
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然，训练员的房间特别舒服呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总感觉今天身体格外的重哎～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员你也来嘛～」
    - 在办公室配备的沙发上左右横滚了两圈后，留出了容下一个人的空间
    - 侧躺的善信睁开原本快要困的快要闭上的眼睛，朝 %YOU% 招呼着
    - acc: 1
      content: 「今天……算了」
    - acc: 2
      content: 「这也太……咳咳」
    - 原本想要说些什么的 %YOU% 只是吐了口气，顺着善信的意思坐到了沙发上
    - 并不算大的沙发上，两个人放松的躺了下来
    - 门外是无法训练的天气，门内是慵懒的气氛
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……偶尔这样，其实也不错嘛」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样，两个人待在一起，什么都不想」
    - 躺在沙发上的善信闭着眼，双手顺着 %YOU% 的手臂爬上来轻轻的抱了过来
    - 独属于善信的气息在 %YOU% 的身边围绕着，挑动着内心的欲望
    - 平稳的像是睡着了一样的鼻息，缓缓的吹在脖子上，带出一阵酥麻感
    - acc: 1
      content: 好想涩涩
    - acc: 2
      content: 好想操%SEX%
    - acc: 3
      content: 我要操%SEX%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼啊……训练员的味道～哎嘿嘿」
    - 在身旁满是困意的善信迷迷糊糊的说着，脸上浮出了一片潮红
    - 今天的天气，并不适合出门，更适合室内运动
    - 身下早已躁动不安的感觉，冲散了理智
    - acc: 1
      content: 「都是善信的错……」
    - acc: 2
      content: 「已经忍不住了……」
    - 善信迷迷糊糊的睁开眼，却看见了贴近到面前的脸
    - 正要发出声音的嘴，被强硬的吻住，夺走了呼吸
    - 长久的压制后，善信无力的躺倒在沙发上，看着上方轻轻的喘着气
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……？」
    - %YOU% 把善信整个人压在下方，腾出的一只手毫不犹豫地向下伸去
    - 手指穿过布料，钻进了已经湿润的小穴里不断的搅动
    - 看着身下善信一点点清醒的面庞，手指的动作也加快了几分
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咕……呜啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……不要这样」
    - 用力的捂着脸，胡乱的挣扎着
    - 这又如何呢，这是善信先勾引的，怎么会就这样停下来
    - if: era.get('cflag:0:0') > 0
      content: 早已充血的小伙伴此刻已经高高扬起，此刻已经紧紧的贴在拉开了布料的湿润小穴边上，只要再微微向前推动一点，快感的浪潮就会轻而易举的破坏掉善信的思考吧
    - if: era.get('cflag:0:0') === 0
      content: 早已同样湿润的身体不等善信的拒绝，两朵花瓣紧紧的贴在一起，不断的摩擦着，只要再用力一点，身下的身体就会因为高潮而无法停止颤抖吧
    - acc: 1
      content: 「就这样去吧」
    - 轻轻的咬一口早就已经因为敏感的身体而发抖的耳朵，轻吹一口气
    - 小穴在不停的颤抖着，却还在色情的不断开合着
    - 已经无法再忍耐的 %YOU% 一口气撞向正在发抖的小穴，享受着身下传来的快感充斥在两个人之间
    - 被冲击吹飞了思考能力的善信躺在 %YOU% 的面前，带着不成体统的表情伸出双手
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……我的训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「更多的，都可以哦」
    - 纤细的双手环过 %YOU% 的脖子，与 %YOU% 用力的相拥在一起
    - 对着眼前挑起了欲望的善信，此刻已经不再有任何冷静下去的理由
    - 剩下的时间，将是美美享用的时间
  # 马跳

pre-travel:
  - color: %COLOR%
    content: 【乘坐善信号和 %CHARA% 去兜风吧！】

travel:
  title: 短暂旅程
  lines:
    #爱慕＞74，事件「震惊！跑车是礼物！」后，使用小汽车/跑车外出
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜呼～！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然坐车出门的感觉超级爽快的啊！」
    - 两个人坐在车上，强风顺着窗户吹在善信脸上
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然，坐车的感觉完全不一样呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的感觉，和赛场……和平时跑步都完全不一样啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜～训练员，还能再快点吗？」
    - acc: 1
      content: 「再快点就要失控了啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，这样啊……」
    - 坐在一旁享受着风吹过的感觉，自然的摇晃着上半身
    - 抬起手撩开在眼前飞舞的头发，看着窗外飞快流动的景色
    - 车子沿着海边开了一路，慢悠悠的停在一个无人的停车场
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉～今天意外的没什么人呢」
    - 虽然车子已经停了下来，但是善信还坐在车上
    - 扫视着窗外几乎看不见人的海滩，默默的解开了安全带
    - acc: 1
      content: 「不下去吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……虽然训练员今天带我出来我很高兴啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过呢，只有我们两个人的话……」
    - 坐在车里穿着私服的善信，带着一点微红看着 %YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个算约会，对吧？」
    - acc: 1
      content: 「是啊，这是约会呢」
    - 善信的上半身微微倾斜，向着另一边倒过去
    - 软软的肩膀倾倒在 %YOU% 的身上，面带微红的拉开了领口的蝴蝶结
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 但动作就僵在了这里，原本拉开蝴蝶结的手指，现在正夹着领口避免放开
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样是不是稍微，太过了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员不喜欢的话我就，不这样了」
    - 身体缓慢的从 %YOU% 的怀里移开，双手慌乱的想要重新把衣服整理好
    - acc: 1
      content: 「我并不讨厌这样……」
    - acc: 2
      content: 「想做就直接做」
    - 整理领结的手指停在空中，原本已经拉起来的衣服又缓缓向下滑去
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也就是说……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样做，的话，训练员也？」
    - 原本还有些犹豫和逃避的眼神，此刻已经明亮起来
    - 深绿色的上衣落在座椅上，露出了为了今天而准备的新内衣
    - 双手抱住了 %YOU% 的脸，轻轻的往自己的方向拉过来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就在这里……对吧？」
    - acc: 1
      content: 「随你开心吧」
    - acc: 2
      content: 「想好了就自己动」
    - 来自 %YOU% 的许可，放开了善信内心理性的枷锁
    - 吵闹的车内，逐渐只剩下了不断重复的喘气声，和水声
    - 直到日落返程的时候，才开始手忙脚乱的收起车内散落的纸巾和作案工具
  # 马跳

pre-joke:
  - color: %COLOR%
    content: 【在 %CHARA% 睡着的时候……】

joke:
  title: 一场小故事的开始
  lines:
    # 爱慕＞85，善信沉睡状态时结束回合
    - color: %COLOR%
      content: 不知过去了多久，已经失去了赛场的 %CHARA% 被带回了本家
    - color: %COLOR%
      content: 而 %YOURNAME% 也失去了 %CHARA% 的搭档这一身份
    - color: %COLOR%
      content: 似乎两个人之间的联系就在此切断，往后就不再有交集
    - color: %COLOR%
      content: 直到 %CHARA% 和 %YOURNAME% 再一次相遇的时候，似乎又联系上了
    - color: %COLOR%
      content: 没有任何的犹豫，一言不发的扑进了 %YOURNAME% 的怀里，却不再像在役时期一样紧紧地抱紧
    - color: %COLOR%
      content: 仅仅是在胸口贴着，想要感受这份心跳
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起啊……」
    - color: %COLOR%
      content: 再一次从 %YOURNAME% 的怀里起身，颤抖着抬起手
    - color: %COLOR%
      content: 明亮的戒指在手指上，格外的显眼
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我，已经结婚了啊……」
    - color: %COLOR%
      content: 泪水滑过脸庞，却是无力的微笑起来
    - color: %COLOR%
      content: 长久的拥抱在一起，直到再次睁眼
    - divider: true
    - color: %COLOR%
      content: 善信猛的推开盖在身上的被子，重重的为不能呼吸的身体充气
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「梦？」
    - color: %COLOR%
      content: 在宿舍里呆坐的善信，看着自己仍旧发抖的双手
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「怎么了？一脸做噩梦的表情」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没什么……不过确实是噩梦啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「和训练员以外的人结婚什么的……」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「嗯，训练员怎么了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没什么事！真的！」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「有什么事情的话，还是早点和搭档说比较好哦」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「直率一点的话，说不定效果更好」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「直率……」
    - color: %COLOR%
      content: 下垂的手指轻轻的按在胸口，感受着仍然没有冷静的心脏
    - color: %COLOR%
      content: 再次睁开眼的善信，带着坚定的眼神起身
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我明白了……直率的呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （直接说结婚的事情，一定会被当成什么玩笑吧）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （不过，玩笑的话……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「稍微和训练员开个玩笑的话，会不会生气呢……」

not_joke:
  title: 并不好笑的玩笑
  lines:
    #「这只是一个玩笑……」触发后结束回合
    - 工作结束的 %YOU% 刚刚从椅子上起身，就听见了门口传来的一阵熟悉的脚步声
    - 出现在门口的是今天原本是在假期中的善信，不知为何出现在了这里
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……现在，有时间吗」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在，稍微有点事情想和你说呢」
    - 用没有底气声音说完之后，背着手关上了门
    - 在安静的空间里，善信缓缓的走近到 %YOU% 的身前
    - 不由分说的，把全身埋进了 %YOU% 的胸口，轻声抽泣着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起啊……」
    - 从 %YOU% 的怀里起身，颤抖着抬起手
    - 明亮的戒指在手指上，反射着纯白的灯光
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，虽然，很难说出口……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我，说不定要结婚了」
    - acc: 1
      content: 「结婚！？」
    - 不知何时，善信已经没有再呆在 %YOU% 的面前
    - 重新意识到现状的 %YOU%，嘴里还在喘着气，手臂上传来了一阵酸痛
    - 脸上挂满的惊吓的善信，捂着手愣愣的看着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……？」
    - 后退了几步的善信脸上的表情带着一丝喜悦，缓缓的握紧了手
    - 白色的戒指掉落在地面上，发出塑料的声音
    - 「塑料？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……是的哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是，塑料」
    - 握紧的手缓缓放开，依旧是原先洁白的模样，看不见戒指的痕迹
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，因为我的事情，生气啦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个只是玩笑啦，只是……从漫画里看到的，啊哈哈」
    - 对着 %YOU% 的脸，有些尴尬的挠着后脑
    - 从带上这个玩具开始，就完全没想到会导致如此暴怒的现状
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是玩笑，只是玩笑……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，训练员？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员？」
    - 原本脸上惊恐和喜悦的表情一下消失，慌乱的向前走了几步
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，对不起……」
    - acc: 1
      content: 「这个笑话可不好笑」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「噫！」
    - 原本还有点侥幸心理的善信颤抖了一下，深吸了一口气
    - 张开口默默的开合几下，又闭上了
    - 现在的 %YOU% 很生气，这是一眼就能看出来的
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个……」
    - acc: 1
      key: sex
      content: 用行动
      lines:
        - 房间里除了善信越来越慌的呼吸声，安静的可怕
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我知道我错了，所以就……」
        - 还在辩解着什么的善信，突然停止了话语
        - 嘴唇被无情的夺走了自由，被 %YOU% 全力抓紧在怀里
        - 心脏猛烈跳动着，却没有把这份力气用在推开 %YOU% 上
        - 已经认错的善信默默的抱紧了拥抱自己的人，闭上了眼睛
        - 再次松口的时候，明亮的蓝色瞳孔已经被水雾盖上
        - 眼前还在生气的那张脸，现在显得格外可爱
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「如果，如果这样」
        - 善信开口的时候，轻轻往前贴去
        - 已经充满潮红的脸微微向前，咬着 %YOU% 的耳朵
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这样你能消气的话……我就不会拒绝哦」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SELF_CALL%，一直是你的哦」
        # 马跳
    - acc: 2
      content: 用语言
      lines:
        - 安静的房间被 %YOU% 的声音打破了宁静
        - 善信愣愣的看着 %YOU%，眼神里带着一丝害怕
        - acc: 1
          content: 「……我可不能接受这样的玩笑」
        - 如此说完的 %YOU% 恼火的坐回了座位，拿起了自己的包
        - 自知玩笑过火的善信安静的抓着自己的手，双腿不安的乱动着
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，训练员……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要走了吗？」
        - 站在一旁的善信声音很小，轻轻的抓住了 %YOU% 的衣角
        - 眼里带着泪水，低着头
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员不喜欢这样的话……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我，我不会再这样了……」
        - 话语里带着一丝哭腔，颤抖着
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只要训练员消气的话，我做什么都可以！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「所以别这样啊……」
        - 深知玩笑开的严重，善信也体会到了恐惧感
        - acc: 1
          content: 「好了，以后这种玩笑禁止」
        - acc: 2
          content: 直接离开
        - 站在原地看着 %YOU% 离开的背影，善信蹲下身捡起了玩具戒指
        - 紧握了没过几秒，生气的丢进了一旁的垃圾桶里
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「什么恋爱漫画啊……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这样的玩笑，有什么用啊……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我真是……笨蛋！」

not_joke_end:
  - 落在 %YOU% 的身边一动不动的善信，仅仅是微笑着
  - 轻轻的依靠着 %YOU% 的身体，依偎在其中
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「果然，强硬的训练员，很帅呢」

end_joke:
  title: 玩笑已经结束了
  lines:
    #「并不好笑的玩笑」选择分支2，下回合开始时
    - 这是一个不好笑的玩笑
    - 独自一人的善信在脑海里反复品尝着这一句话，看着塑料的玩具戒指
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这种玩笑，禁止」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……如果不是玩笑的话，训练员会怎么样呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果，如果是……」
    - 有些无神的双眼缓缓的又明亮起来，瞳孔里反射出来的玩具已经不再是一个玩具
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果戒指是给训练员的话」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果是，如果是……」
    - 自言自语的声音逐渐加快，连同身体也莫名的兴奋起来
    - 心脏猛烈的跳动，鼻息也不自然的加快
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「必须」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「准备好我们两人的戒指呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「令人期待呢……训练员～」
  # 爱慕+4

concern:
  title: 过度关心啦！
  lines:
    # 男/FUTA，马娘，爱慕≥74，同队目白莱恩且爱慕≥74，无依存心
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总感觉，最近都很平静呢～」
    - 在 %YOU% 和善信两个人独处的一个下午，突然间嘀咕了一句
    - acc: 1
      content: 「确实是呢」
    - 听见 %YOU% 随口的回应之后，善信轻笑着走了过来
    - 双手搭在椅背上，漫不经心的看着桌面的文件
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明是这种日子，还要这样努力工作啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「偶尔休息一下不好吗？」
    - acc: 1
      content: 「这可不兴休息啊」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉～是这样吗？」
    - 趁着办公室里没有人，悄咪咪的伸手捏了捏 %YOU% 的脸
    - 手指轻轻的在脸上捏了几下之后，善信自己先笑了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，偶尔也放轻松点嘛」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就那么热爱工作吗？」
    - 善信的声音回响在耳边，打消了 %YOU% 工作的想法，放下思考向着身后躺下去
    - 感受着后脑传来的柔软触感，花了几秒才反应过来
    - acc: 1
      content: 伸手摸摸
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉？」
        - 一开始还什么都没有发现的善信，看着 %YOU% 的手指碰到了自己的胸部
        - 气氛突然间安静了下来，只有还在确认情况的 %YOU% 还在对着抓住的部位轻轻捏了几下
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个……」
        - 虽然还正坐着的 %YOU% 没法看见善信现在的表情，但已经明白自己做了什么了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员你，很喜欢这个吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真是的……」
    - acc: 2
      content: 什么都不做
      lines:
        - 享受着后脑的温柔触感，%YOU% 选择了什么都不做
        - 平日里能看见却不好主动去触碰的部位，此时此刻正紧紧贴在自己身上
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，是困了吗？」
        - 「也，也许是吧」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，那今天要早点下班吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「反正今天没什么事情，我来送训练员你回家吧」
        - 善信笑着松开手，却没有离开椅子的背面
        - 虽然还正坐着的 %YOU% 没法看见善信现在的表情，但已经明白发生了什么
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员真是坏心眼呢，明明知道的」
    - 善信对着 %YOU% 的头顶轻敲了一下，却没有生气的样子
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （就那么喜欢这里嘛……）
    - 从 %YOU% 的身边离开，有点在意的推了推自己校服下的胸部
    - 眼神悄悄的看了一眼 %YOU% 的方向，却看见了带着一点期待的眼神
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （其实被训练员……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （也不是，不行啦）
    - 宛如下定决心一般，善信轻轻的拉起了 %YOU% 的手
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果想要的话……可以的哦」
    - 善信把 %YOU% 的手掌按在胸口，稍微用力捏了几下
    - 脸上带着止不住的潮红，却还在尽力的抑制想要逃跑的想法
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感觉……很奇怪呢……」
    - 在脸上挤出笑脸，却不像是勉强的样子
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: ？？？
        - 「善信！%CALLNAME_27%在里面吗？」
    - 门外突然传来了一阵熟悉的开朗嗓音，打断了善信和 %YOU% 的动作
    - 回归到两个人之间的理智，同时指挥视线看向门口
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「我拿了我平时用的……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「……唉？唉唉？」
    - 没有顾虑的打开门的时候，莱恩看见的是两个人黏在一起的样子
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「唉……难道，我……%CALLNAME_27%你……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - acc: 1
      content: 「……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「呜哇啊啊啊！」
    - 目白莱恩抱着怀里的背包，立刻准备回过头逃跑
    - 但是在逃跑这一方面，善信要熟练的多
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等一下！」
    - 善信一手抓住了逃跑的目白莱恩，一口气推倒在墙壁上
    - 看着目白莱恩脸上被背包遮挡却完全没遮住的绯红色，善信也尴尬的愣住了
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「啊！对对、对不起……唔。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「我，是不是有点不解风情了？」
    - 已经塌下去的耳朵无精打采的弹跳了一下
    - 眼睛里带着一点水花，弱气的向上看着
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「莱恩……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你也是，因为训练员的事情吗？」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「……嗯」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「我看训练员好像最近都很累的样子……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「所以我就把平时躺着特别舒服的枕头拿过来了……」
    - 抱着背包的目白莱恩慢慢的向下缩去，只有眼神还在看着善信
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样啊」
    - 善信松开手，缓缓的蹲下身
    - 轻轻的拉开遮住脸的背包，轻笑着和目白莱恩对上了眼神
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实我们，都一样的啊」
    - 轻手轻脚的关上了门，顺手带上了锁
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「那个……善信？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦好啦，不要在意了啦」
    - 善信在目白莱恩的身后，推着%SEX%的肩膀向一无所知的 %YOU% 走了过来
    - 手快的拿开了遮住脸的背包，顺手推了推目白莱恩胸口跳动的部位
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「善，善信！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没事的哟～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你也喜欢这个的对吧～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我现在可帮你抓住了哦」
    - 善信推着目白莱恩站在 %YOU% 的面前，藏在后方
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「呜呜，不要这样啦善信……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是莱恩你也在期待对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那，训练员，你要怎么做呢？」
    - 善信在目白莱恩的背后探出早就布满绯红色的脸，偷看 %YOU% 的表情
    - acc: 1
      key: sex
      content: 「欺负目白莱恩」 # 3P，对手莱恩
      lines:
        - 目白莱恩身前的硕果令人移不开眼神
        - 在 %YOU% 还在思考的时候，手已经跟着本能抓了上去
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「呜！」
        - 手掌传来了猛烈的颤抖
        - 目白莱恩紧闭着眼睛，僵硬的站在原地
        - 没等到%SEX%有勇气睁开眼的时候，善信就已经轻轻的向前推了一把
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「不，不要这样……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没关系的哦训练员」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「莱恩%SEX%啊，一定可以的」
        - 坐在一旁的善信轻轻压住了目白莱恩的双手，看着 %YOU% 的表情
    - acc: 2
      content: 「欺负目白善信」 # 3P，对手善信
      lines:
        - 看着躲在莱恩身后的善信，心底生出了一点新的想法
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「来吧，莱恩肯定不会介意……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉，唉？」
        - 原本还在善信脸上的笑容一点点消失，逐渐僵住
        - 站起身的 %YOU% 伸手越过目白莱恩的肩膀，抓住了善信一口气拉了过来
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉！不是我啦！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是莱恩%SEX%……」
        - 还想要说些什么的善信逐渐停下了动作，有点害怕的缩了起来
        - 带着满脸的潮红，压着鼓动的胸口
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……我，我也想要」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「善信……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「我们，确实一样呢」
    - acc: 3
      content: 「把两个人一起推倒」 # 3P，善信主导
      lines:
        - 看着眼前紧紧贴在一起的两只爱马，%YOU% 的眼里早就已经失去了理智
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「咿呀！」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「哇！」
        - 刚才还在欢快的互相开着玩笑的两姐妹，此刻一同躺在地面上
        - 喘着粗气的声音回响在三个人中间，似乎下一刻就会变成更加粗旷的声音
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「两个人一起……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「诶！？两个人？……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这可有点过分了！」
        - 即使是在上位，力气也是下方的两个人更大
        - %YOU% 被垫在背包上，眼睁睁看着自己的裤子被无情的夺走
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「唔，没想到训练员居然喜欢这样……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「真是过分呢……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不惩罚一下的话，可不行呢」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对吧？训练员？」
        - 善信骑在 %YOU% 的腰上，把目白莱恩招呼过来一同压住
        - 衣服落在地上，两幅美妙的身躯碾压在 %YOU% 的身上
        - 下方的小训练员，早就已经准备好了，欲求不满的暴露在空气中微微颤抖着

concern_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「总感觉，做了什么很不得了的事情……」
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「是，是呢」
  - 浑身沾满了各种液体的两只雌性，张开的大腿中间还流淌着白灼的液体
  - 两双迷离的眼睛，模糊不清的看着 %YOU% 正贴在两个人的脸前，沾满了爱液的凶器
  - %YOU% 轻轻抚摸着爱马的头发，催促着%THEY%
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「真是过分呢～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我们的训练员，真是不得了的变态呢……」
  - 柔软的舌头滑过敏感的表面，留下唾液的痕迹
  - 嘴唇轻轻的在搅动身体的罪魁祸首上，亲吻下去
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「还要的话……」
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「请和我们说哦❤️」

dessert:
  title: 甜品……好像不对？
  lines:
    # 男/FUTA，马娘，爱慕≥74，同队目白麦昆且爱慕≥74，无依存心，在目白麦昆菊花赏后随机出现
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……最近蜜瓜芭菲好像人气很高呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是水果派好像也不错，怎么办呢」
    - 善信抱着手机，烦恼的前后翻动着
    - acc: 1
      content: 「想吃甜品了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？不是啊」
    - 听见 %YOU% 的声音，善信自然从沙发上坐了起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近，麦昆不是一直都很努力嘛？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就想啦，要不要买点甜品送给%SEX%呢……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过最近的甜品太多了，不太好选」
    - acc: 1
      content: 「那就直接去找麦昆本人怎么样？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「直接找本人吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……也不是不行啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过感觉很快就会变成阻止麦昆吃的太多呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟麦昆%SEX%很容易忍不住就放开吃呢～」
    - acc: 1
      content: 「这话可不能让%SEX%本人听见啊」
    - acc: 2
      content: 「真过分呢，这个说法」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但这是真的嘛～」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「我可在门口都听见了哦，两位」
    - 在两个人的和谐讨论中，插入了另一个声音
    - 带着惊吓，善信和 %YOU% 一起回头看向门口的方向
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「虽然我知道我不擅长控制体重……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「但是这样说人家是不是有点过分了？」
    - 随着门被关上的声音，目白麦昆不满的走进办公室里
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「真是的……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「虽然我不反对开玩笑就是了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈，那个……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你看，一开始我们也是想买甜品送给你对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就饶了我们这次啦～」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「不～行～」
    - 鼓着脸的目白麦昆走到 %YOU% 和善信的面前，装作不满的抱起手臂
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那……那要怎么办才可以原谅我们啦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「无论做什么都可以啦，只要我们能做到！」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「嗯哼，让我想想」
    - 带着玩味的笑脸，看着慌张的善信
    - 但很快，原本看着善信的眼神就看向了一旁不知所措的 %YOU%
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「既然是无论什么都可以的话……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「那就稍微麻烦一下训练员啦～」
    - 如此说着的目白麦昆，当着善信的面坐到了 %YOU% 的身上
    - acc: 1
      content: 「那个，我的意见呢？」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「%CALLNAME_13%麻烦不要说话」
    - 被目白麦昆用上正式称呼制止之后，坐在下方的 %YOU% 只能尴尬的闭上了嘴
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，这样的话训练员会很困扰的啦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有什么事情可以找我来……比如说去甜品店跑腿什么的！」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「这样的话就不算是惩罚了嘛」
    - 说着，坐在 %YOU% 大腿上的屁股稍微往上移了一点
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，这是不是太过……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「训练员没意见吧？」
    - 不敢说话的 %YOU% 即使想说什么，也只能对着前方的善信眼神示意
    - 可惜的是慌张的善信根本没有发现这个眼神
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「你看，训练员没意见哦」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是……」
    - 善信的眼神在目白麦昆和 %YOU% 之间循环了一圈，不安的摆动着手指
    - 似乎想说点什么，却又碍于自己说过的话不好开口
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （……好像玩过头了）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （本来只是想稍微和善信开个玩笑……）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （现在怎么办，道歉的话善信好像不会接受唉）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「呃，嗯，我也消气了，就……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「太过分了……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「唉？」
    - 仿佛没有听见一样，善信自顾自的红着脸
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我也想这样和训练员待在一起！」
    - 没有等到目白麦昆和 %YOU% 反应过来，善信已经扑了上来
    - 一张普通的办公椅并接不住三个人的重量和冲击，被这一击推倒在地上
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「好疼……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，抱，抱歉！」
    - 随着椅子落地的撞击声，善信似乎取回了理智，慌张的站起身来
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「没，没有，我才应该道歉……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「我不应该这样……善信？」
    - 正在自责的目白麦昆向着站起身的善信道歉，却没有收到回应
    - 在发现善信的眼神有点异常的时候，也同时顺着看向视线的落点
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「啊……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「训练员，难不成……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「因为，我们吗？」
    - 如此察觉的目白麦昆缓缓起身，转而看向身后的 %YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这，这样的……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「那个，善信……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「训练员就，还给你啦……」
    - 一边弱气的说着，一边从 %YOU% 的腰上起身
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 带着一点做错事的自知，不安的想要把 %YOU% 拉起来
    - 双手在抓住的时候，却慌乱的碰到了什么部位
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「麦昆你……」
    - 停下了动作的目白麦昆，怯怯的看着上方眼神凶狠的善信
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「对不起！」
    - 大声道歉之后，目白麦昆向着门口跑了过去
    - 但没等到跑出门口，善信便已经一口气抓住了目白麦昆的肩膀
    - 随着门被反锁的声音，两位%UMA%再一次回到了 %YOU% 的面前
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「善信！？你这是？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 似乎没有听见目白麦昆的声音一样，善信拉着%SEX%一起来到了 %YOU% 的身边
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「道歉的话……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就和训练员说啊！」
    - acc: 1
      content: 「那我的意见……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员给我闭嘴！」
    - 声音里带着强势，把 %YOU% 想说的话又压了回去
    - 善信抓着目白麦昆不知所措的手，轻轻的贴到了 %YOU% 的身上
    - 重叠在一起的手顺着胸口，一点点向下滑去
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「对不起，对不起！」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「善信，我错了，不要这样……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那就问问训练员」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有没有意见吧」
    - acc: 1
      key: sex
      content: 「我没意见！」 # 玩家主导
      lines:
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「你，你看，训练员也没意见……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那我就可以继续啦」
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「唉？」
        - 如此说的善信，用力的抓住了目白麦昆的手
        - 一点点钻进 %YOU% 的下半身，沾满了温热的液体
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「麦昆你也喜欢这样的……对吧？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么，没有意见的训练员」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是软乎乎的麦昆哦～」
    - acc: 2
      content: 「我有意见！」 # 麦昆主导
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真的有意见吗？」
        - 善信的眼神里，带着些许质问
        - 手已经半强制的抓着目白麦昆，游走在敏感部位了
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「善信……」
        - 被抓到面前的目白麦昆，红着脸还试图和善信说什么
        - 双腿蠢蠢欲动的摩擦着，眼神在不断的左右飘动
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「差不多，能放开我了吧？」
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「你看训练员也很困扰……」
        - 虽然说的很弱气，但逐渐变粗的鼻息已经说明了一切
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但麦昆你已经这样了」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员也是哦？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一开始可是你不许训练员有意见的呢，对吧？」
        - 松开抓住目白麦昆的手，善信自然的解开了两人的衣服
        - 随着布料落在地上，令人垂延三尺的肉体出现在 %YOU% 的面前
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「主动点，怎么样？」
        - 轻轻向前推了一下，把目白麦昆夹在自己和 %YOU% 的中间
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「那，那就……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「稍微放开一点吧，麦昆」
        - 如同理智断线一般
        - 麦昆和善信一同压到了 %YOU% 的身上

dessert_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不愧是训练员……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我的训练员超级厉害的～」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「啊……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「对吧？」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「是，是的」
  - 坐在 %YOU% 身下的目白麦昆，扣动着身体的同时，眼神迷离的向上看着 %YOU% 的脸
  - 看着这样的姐妹，善信默默的往 %YOU% 的怀里又用力的钻了钻
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「毕竟是，我的训练员呢」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「……那个」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「什～么～」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「甜品……还有吗？」

party:
  title: 派对时间
  lines:
    #爱慕≥74，同队大拓太阳神且爱慕≥74，无依存心，商店街触发
    - 一个平平无奇的假期，%YOU% 被善信一个电话从家里拉了出来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀吼！%CALLNAME%！这边这边！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「哦哦，%CALLNAME_65%也来啦！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「这下该开始派对啦，呀呼！」
    - 在接到 %YOU% 之后，大拓太阳神和目白善信一同欢快的跑了起来。
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「首先是，唱歌的时间啦，我们走！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦哦，首先是音乐！」
    - 派对的开场，就这样定在了卡拉OK。
    - 走进熟悉的店家和已经打成一片的老板打过招呼之后，三个人一同走进了包间。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！要唱点什么吗？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「嗯哼？%CALLNAME_65%要先来吗！？」
    - 拿着话筒的大拓太阳神回过头，满眼都是兴奋的小星星。
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「善信亲～让我先来嘛～」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「最近我好不容易才学会的新歌唉，让我来嘛～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好好～我就等着啦～」
    - 从点歌面板上离开的善信，自然的坐到了 %YOU% 的身边。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「和太阳神一起的时候确实很开心呢。」
    - acc: 1
      content: 「不知不觉间就心情高涨起来了」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦，好像要开始了！」
    - 善信的耳朵轻轻抖了一下，转而看向大拓太阳神的方向。
    - 双手自动的拿起了桌面的沙锤，跟着响起的音乐挥舞起来。
    - 清脆的沙沙声随着大拓太阳神超快节奏的音乐，让三个人的包间发出了比肩十几人的热闹声音。
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈～有点太热闹了啊～」
    - 再次坐下的目白善信把身体直接瘫软在沙发上，即使在空调房里也腾腾冒出热气。
    - 大拓太阳神倒是还在开心的唱着，但是肉眼可见的气势不足了。
    - acc: 1
      content: 「累了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，稍微有点累了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个时候就很羡慕太阳神了啊……超级持久的！」
    - 摊在沙发上的目白善信看着大拓太阳神闹腾地抓着麦克风，脸色红润的小声笑着。
    - 绚烂的灯球将七彩的灯光照在三人身上，让气氛稍微变得微妙起来了。
    - 并不明亮的空间里，目白善信轻拉衬衣散热的动作，大拓太阳神跳动时的声音……
    - 在 %YOU% 的眼中，不知为何将注意力集中到了那些私密的位置。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？脸红了哦？很热吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，那我点杯饮料吧！」
    - 一直心系着 %YOU% 的目白善信。
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「呜唉？！%CALLNAME_65%累了嘛！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「那暂时休息！」
    - 完全没发现异常的大拓太阳神。
    - 以及此时此刻，在灯光的掩护下把敏感部位遮住的 %YOU%。
    - acc: 1
      content: （这很不妙啊……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，你要喝什么？」
    - 从沙发上坐起来，朝着 %YOU% 的方向挪动过来的目白善信。
    - 放下了麦克风，一屁股坐到了 %YOU% 身边的大拓太阳神。
    - 即使不是直接接触，体温也随着呼吸从两边飘了过来。
    - 某个部位，硬起来了。
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%CALLNAME_65%？」
    - 人倒霉的时候，凉水也塞牙。
    - 原本应该跟着音乐转动的灯球因为马儿跳传说的前奏，将打光集中到了沙发上。
    - 一瞬间，两边的马娘都看清楚了。
    - 衣物上，不自然的小突起。
    - 目白善信准备点饮料的手机落在沙发上，发出了沉闷的声音。
    - 本应闹腾的大拓太阳神，这时也红着脸移开了视线。
    - content:
        - fontWeight: bold
          content: 音乐
        - 「马儿跳～马儿跳～」
    - 不知是谁先发出了一声明显的吞咽声，打破了沉默。
    - 无论是谁，都已经红透了脸。
    - acc: 1
      key: sex
      content: 「来做吧。」
      lines:
        # 玩家主导，太阳神助手
        - 一锤定音。
        - 目白善信闭上双眼，轻轻往 %YOU% 的身前探过去。
        - 已经被蒸汽湿透的衣服，被甩到了沙发的一角。
        - 深蓝色的挑染拂过 %YOU% 的小腹，发烫的小脸贴着下方。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……轻一点哦……」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「嗯……%CALLNAME_65%的味道……」
    - acc: 2
      content: 「要做吗。」
      lines:
        # 善信主导，太阳神助手
        - %YOU% 问出来了，最不该问的事情。
        - 这个问题也并不需要口述的答案。
        - 手指顺着 %YOU% 的肌肉从两个方向游进衣服里，抓住了兴奋的部位。
        - 在 %YOU% 即将忍不住叫出声的时刻，小嘴也被堵住了。
        - 躺下之前，最后在视野里的是白色的月牙挑染。

party_end:
  - 抽出纸巾将沙发擦了个大概，去卫生间把身上的痕迹清理一下。
  - 三个人红着脸都不说话，默默的整理好了身上的衣服。
  - content:
      - fontWeight: bold
        content: 音乐
      - 「君の爱马が！」
  - 扎马尾的双手顿了一下，向着屏幕看过去。
  - 两双眼睛看了半天，不约而同的看向 %YOU%。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「盯——」
  - color: %COLOR_65%
    content:
      - fontWeight: bold
        content: %HELIOS%
      - 「盯——」
  - acc: 1
    content: 「好，好啦……」
  - 在两边的视线下，%YOU% 深吸了一口气。
  - 张开双手，用力抱住了两位马娘。
  - 「你们都是我的爱马！」