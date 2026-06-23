# @file 玉藻十字 - 调教
# @author 雞雞
tied_heart:
  title: 紧缚的心
  lines:
    #训练员室内
    #事件名：紧缚的心
    #触发条件：爱慕状态后随机触发
    - 什么都看不清……只有光线从半掩的眼皮外进入瞳孔的感觉。
    - 眼睛好干，%CHARA%接连眨着眼，让双眼获得泪水的滋润。
    - %TEEN%缓缓地回神过来，发现自己就瘫坐在比老家还熟悉的训练员室的沙发之上。
    - %CHARA%看向自己的双手：一左一右，各被一个牢固的铁圈连接在一起，无法自由地伸展双臂。
    - 但自己并非被绑到陌生地方的事实让%SEX%稍微安心了下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是什么鬼啊——！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你就是想听这种吐槽吧？好啦，快给咱解开手铐——」
    - %SEX%的目光飘向坐在旁边正在饶有兴致地欣赏自己窘态的%YOU%。
    - acc: 1
      content: 「这可不行啊，因为最近小玉不是很听话……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哪有啦，你不要乱说！」
    - %YOU%挪了挪位置，把脸孔凑到%CHARA%眼前。
    - %YOU%炽热的气息打在少女的肌肤之上，让%SEX%不禁地也加重了呼吸的力道。
    - acc: 1
      content: 「毕竟小玉总在摆出一副勾引我的样子嘛……」
    -
    - acc: 1
      content: 「跑步的时候一直努力地向我摇晃屁股，运动过后还会贴在我的身上展示自己的雌性臭味……你知道我忍耐得多辛苦吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这跟我有什么关系……不就是你自己的恶趣味吗，臭萝莉控！」
    - %SEX%涨红了脸回嘴道，但藏在运动胸罩下的可爱乳头却不自觉地勃起，连下身小腹处也炙热了起来。
    - %YOU%舔舔上唇一下将%CHARA%按倒在沙发上，又把自己的脑袋从对方双臂中穿过。
    - acc: 1
      content: 「既然是这样的话，就把我推开吧。」
    - 现在的%CHARA%只被铐住了双手，以%UMA%的身体素质，实际上不论是要以双腿攻击抵抗，还是溜之大吉都可谓轻而易举……
    - if: era.get('relation:21:0') > 225
      content:
        - %CHARA%想要张口说话却无法搜索到合适的词汇，于是索性以双臂环抱住%YOU%的脖子，二人就此迷失在深情的亲吻当中。
    - if: era.get('relation:21:0') <= 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真是过分的大人啊……」
        - %CHARA%咂吧了一下，不情不愿地以双臂环抱住%YOU%的脖子迎接了深情的亲吻。

mark_pleasure:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「等、等一下，身……身体好热……感觉好奇怪……」
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……哈……那个……可以……再来一次吗？」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「小不点们对不起呐，咱好像已经离不开这个人了……」
      - %CHARA% 的身体彻底的沦陷了。

mark_meek:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哈啊……哈啊……」
      - %CHARA% 泛上红潮的脸贴近了过来、能感到背后有数股愉悦感在游走……
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「如果能让 %CALLNAME% 开心的话、咱也会很开心的……」
      - %CHARA% 以贫瘠的身体贴上来后慢慢地往下移动，
      - 胸前、侧腹、大腿、以及各种能让人感受到愉悦的的部位来回摩挲着。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「所以……%CALLNAME% 喜欢的部位，能再多告诉咱一些吗……？」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咱说，接下来要咱怎么做、做什么呢？」
      - %CHARA% 柔软的腿，像生物一般缠上了 %YOU% 的腰。
      - %SEX%的两腿以缓慢地、不慌不忙，但是猎物恰好无法逃走的力度不断摩擦着 %YOU% 的下身……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「现在的话，想对咱做什么都可以噢❤️」

mark_pain:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「没事的……咱会为了小不点忍下来的……」
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「对、对不起……咱什么都……都会做的……求……求求你……温柔一点点就好……」
  - if: d.level === 3
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「妈妈……！」

mark_shame:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不……不要看啦……！」

mark_hate:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「干啥子呢！就算是咱也会生气哦！」
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要是以为用了钱就能把咱当玩具一样为所欲为哦！」
      - 从 %CHARA% 那冰冷的眼神里能感受到一丝背后的怒意。
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「人渣……」
      - %CHARA% 冰冷的眼神中空无一物，%YOU% 的身影在 %CHARA% 的眼中完全没有映现出来。
      - 已经彻底封闭的内心恐怕再也不会向任何人敞开了吧。