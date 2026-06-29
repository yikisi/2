# @file 目白光明 - 招募
# @author KUN
rec0:
  - %CHARA%似乎不在训练场……或许可以一个人去外面看看？

rec1:
  title: 慢悠悠的公园之旅
  lines:
    #任意外出
    - 特雷森的招募季，独自一人出门散步的%YOU%漫无目的走在公园里散步着。
    - 公园里的风景如同往常一样，平静，祥和。
    - 周围的路人行走在路上，一切都慢悠悠的进行着。
    - 无所事事的%YOU%找到了一旁的长凳，为行走了一路的，疲劳的双腿稍微留下了一点休息的空间。
    # FLAGNAME:2 = 当前月
    - if: era.get('flag:2') === 1
      content: 初雪还未融化，几片枯黄的树叶缓缓的落下。
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼哇～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「呼哇～」
    - 身旁的另一张长椅上，坐着一位年纪不大的%UMA%。
    - 蓬松的长发下是一张有点呆呆的小脸，身形稍微往后倾斜，如果没有看见%SEX%半睁的眼睛，大概会以为是睡着了吧。
    - if: d.mejiro
      lines:
        - acc: 1
          content: 「不愧是光明，真是悠哉啊……」
    - if: "!d.mejiro"
      lines:
        - acc: 1
          content: 「真是悠哉啊……」
        - acc: 2
          content: 「这孩子不会已经睡着了吧……」
    - 没有在意太多的%YOU%选择了暂时忽视，继续着平凡的一天……
    -
    - 随意的在公园里走过几圈之后，今日并没有什么杂事的%YOU%干脆的就坐在长椅上，享受起了悠哉悠哉的时光。
    - 时间不知不觉间，在两个人之间流动着。
    - 直到云层遮住了阳光，日光浴的时间结束了，%YOU%才慵懒的从长椅上直起身。
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼哇～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「呼哇～」
    - acc: 1
      content: 「嗯？」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊拉？」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「啊拉？」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，早上好～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「啊，你好～」
    - 身旁的%UMA%似乎这才注意到了%YOU%的存在，慢悠悠的看过来。
    - 灵巧的耳朵弹跳了几下，脸上也露出了软软的笑脸。
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，您是在看上面吗？」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「那个，您也在看着上面吗？」
    - 就坐在一旁的%YOU%跟随着自己的好奇心，缓缓的抬起头看向上方。
    - 那是一颗不算太高的枯树，而最上方则是几片已经枯萎的落叶，但唯独有那么一片在树枝的顶端，不管风有多大都没有落下来。
    - acc: 1
      content: 「你是在看那片树叶吗？」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「是的～」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那边的最顶端，是一片孤零零的枯叶对吧？」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「那边的最顶端，是一片孤零零的枯叶对吧？」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然看上去很快就会被吹下来的样子，不过它完全没有掉下来哦。」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「虽然看上去很快就会被吹下来的样子，不过它完全没有掉下来哦。」
    - 随意的开口之后，眼前的%UMA%再一次的抬起脸看向上方。
    - 在%YOU%的眼里出现的那一片枯叶，莫名的令人在意起来。
    - acc: 1
      content: （留下来一起看看）（继续招募）
      key: rec
      lines:
        - 本来想要起身的%YOU%转念一想，随即又坐回了椅子上。
        - 眼神一点点的移向那棵枯树的顶端，盯着那片叶子。
        - 时间，再一次的从两个人的身旁流过……
        -
        - 不知道过去了多长的时间，那位%UMA%突然间开口了。
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真是坚强的孩子呢～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「真是坚强的孩子呢～」
        - acc: 1
          content: 「是啊」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉？有回应……」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「啊咧？有回应……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哇啊，您还在这里啊～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「哇啊，您还在这里啊～」
        - acc: 1
          content: 「有点在意那片叶子，所以就……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「所以就，一直……？」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「所以就，一直……？」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呵呵～不愧是您呢～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「呵呵～您说不定和我很像呢～」
        - 眼前的%UMA%，轻飘飘的笑了起来。
        - 正在笑声持续的时候，不远处就传来了另一个声音。
        -
        - if: d.mejiro
          color: %COLOR59%
          content:
            - fontWeight: bold
              content: 目白多伯
            - 「光明！终于找到你了！」
        - if: "!d.mejiro"
          color: %COLOR59%
          content:
            - fontWeight: bold
              content: ？？？
            - 「光明！终于找到你了！」
        - if: d.mejiro
          lines:
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 目白多伯
                - 「唉，你也在啊？」
            - 目白多伯慌张地小跑过来，轻轻的拉住了%CHARA%的手，如释重负一般的吐了口气。
            - 但很快，又有些埋怨地看向身旁站在的%YOU%。
        - if: "!d.mejiro"
          lines:
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: ？？？
                - 「唉，这位是？」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: ？？？
                - 「难道，是什么奇怪的人……」
            - 小跑过来的%UMA%轻轻的拉住了%CHARA%的手，如释重负一般的吐了口气。
            - 但很快，又警觉的看向身旁站在的%YOU%。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没事哦，多伯～」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「就是因为有人陪我在这里，我才一直待在这里哦。」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这位%SIR%一直陪我待在这里，是个好人哦。」
        - color: %COLOR59%
          content:
            - fontWeight: bold
              content: 目白多伯
            - 「但是……」
        - if: d.mejiro
          lines:
            - acc: 1
              content: 「那个，我就先走了哦？」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 目白多伯
                - 「唉？嗯……随你啦。」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 目白多伯
                - 「刚才吓我一跳……第一眼还以为是什么奇怪的人呢。」
        - if: "!d.mejiro"
          lines:
            - acc: 1
              content: 「那个，我是特雷森的训练员，徽章我都戴着呢。」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 目白多伯
                - 「唉？真的，有训练员徽章……」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 目白多伯
                - 「吓我一跳……还以为是什么奇怪的人呢。」
        - 看着已经有了同伴的%CHARA%，深知自己的出场时间结束的%YOU%自然的转过身离开了。
        - divider: true
        - color: %COLOR%
          content: 远远地看着%YOU%离开的背影，%CHARA%稍稍的歪了歪头。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯哼～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……？」
    - acc: 2
      content: （不过是一片枯叶）（放弃招募）
      lines:
        - 只是一片枯叶的话……也没什么大不了的。
        - 这样想着的%YOU%站起身，离开了公园。

rec2:
  title: 慢悠悠的登场～
  lines:
    # 中庭触发
    - 在公园度过了悠哉悠哉的时光后没过多久，那个风格独特的%UMA%在%YOU%的面前再一次出现了。
    - 正好站在窗边的%CHARA%发现了%YOU%后，不紧不慢的走了过来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「贵安，训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一段时间没见了呢～」
    - acc: 1
      content: 「……唉？是在说我吗？」
    - 比起%YOU%发愣的样子，%SEX%的表情则是阳光的笑脸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是的哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「之前在公园的时候，多有麻烦你了呢。」
    - 如此说着的%CHARA%，朝%YOU%轻轻的鞠躬致谢。
    - 再次抬起脸的时候，依旧带着似乎有些没睡醒的表情，轻飘飘的和%YOU%对视着。
    - acc: 1 # 结束招募
      content: 「……那只是我作为训练员的义务而已。」（放弃招募）
      key: rec
    - acc: 2
      content: 「不，我也有好好的享受那段时间……」（继续招募）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好好享受？」
        - 有些呆呆的歪了歪头，迷惑的看着%YOU%。
        - 长长的呆毛在空中跳了跳，随着窗户吹进来的风摆动。
        - acc: 1
          content: 「我也很享受这样静下来的感觉。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦～是这样啊～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员和我很合得来呢～」
        - 下垂的双手轻轻抬起，遮住了%CHARA%翘起来的嘴角。
        - 一阵轻笑声过后，如同回想到了什么一样，呆呆的表情里突然间又闪出了正经的样子。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，对了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然现在说不太合适……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「能麻烦训练员帮我测试吗？」
        - 虽然是有些尴尬的转移了话题，声音却依旧平稳。
        - acc: 1
          content: 「测试？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是的～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我报名了下一场的校内比赛呢，所以希望您能用专业的视角帮我看一看。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「当然，您不愿意的话我也没关系的呢。」
        - 原本还有点睡眼惺忪的脸在自己提及比赛的时候，一下就明亮了。
        - 表情认真的看着面的%YOU%，露出的是符合「目白」这个名字的眼神。
        - acc: 1
          content: 「可以啊。」
        - divider: true
        - 转移到训练场之后，看着换上运动服的%CHARA%。
        - 站在跑道旁的%YOU%，不自觉的抓紧了手上了秒表。
        - 这位可是那个目白家的%CHARA%，不知道会跑出什么样的表现……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 路人训练员A
            - 「%CHARA%啊，令人期待%SEX%的表现呢！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 路人训练员B
            - 「听说%SEX%还没有专属训练员吧？说不定这是个机会……」
        - 在周围的窃窃私语中，%CHARA%迈出了脚步——
        -
        - 出乎意料的是，并没有和所有人想象的一样，充满魄力的加速，仅仅只是维持一个不算快的速度而已。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 路人训练员A
            - 「完全，不加速吗？真的假的？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 路人训练员B
            - 「看样子并没有想象的那么厉害……」
        - acc: 1
          content: 「……但是完全没有降速的感觉啊。」
        - 与周围唱衰速度的人不同，%YOU%看着%CHARA%的脚步慢慢的有了想法。
        -
        - 在%CHARA%结束测试的时候，周围的人已经散的差不多了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊咧，原来我已经跑过终点了吗？」
        - 全程维持不变的速度跑完之后，维持着有节奏的呼吸声走到了%YOU%的面前。
        - acc: 1
          content: 「嗯，已经结束了哦。」
        - 看着眼前纯真的笑脸，%YOU%默默的收起了手上的秒表。
        - 已经见识到了这样充满可能性的一幕，作为%TITLE%训练员的%YOU%已经有了足够的兴趣了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉，已经够了吗？」
        - acc: 1
          content: 「嗯，完全够了。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那，训练员对我的成绩怎么看呢？」
        - acc: 1
          content: 「总感觉，不能就这样放着你这样跑啊。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「放着这样跑……？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「请问是什么意思呢？」
        - 站在%YOU%面前的%CHARA%完全没有新人%UMA%那样子因为体力不足而喘气的模样，依旧是像开始测试之前一样平静。
        - 表情上也没有什么疲劳感，还能看见轻飘飘的笑容。
        - acc: 1
          content: 「首先就是，稍微改变一点慢悠悠的样子吧……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「首先是，慢悠悠的样子？」
        - 看着%CHARA%有点呆的眼神，%YOU%也坚定了想法。
        - acc: 1
          content: 「虽然时候不太对……不过，我想和你搭档。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「搭档……啊，是指专任训练员的事情吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……但是我还没有参加过校内的比赛呢，训练员要就这样下定结论吗？」
        - 明明还没看过自己的比赛就这样提议，令%CHARA%也变成了一幅不解的神情。
        - 但对现在的%YOU%来说，这已经是确定事件了。
        - acc: 1
          content: 「是啊，我确定了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……呵呵～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那，稍微让我再考虑一下，可以吗？」
        - 稍微愣了一下的%CHARA%，很快又恢复了像刚才一样稍微没睡醒的眼神。
        - 并不急于一时的%YOU%轻轻点头，和%CHARA%挥手暂时分开了。
        - divider: true
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呵呵……果然，拜托您是正确的呢～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，现在应该改口叫做%CALLNAME%了呢。」
        - color: %COLOR%
          content: 在确定%YOU%不会听见最后的一句话之后，%CHARA%又按捺不住地轻笑了起来。

rec3:
  title: 好久不见～
  lines:
    - 又一次经过中庭时，一阵不知何处来的清风吹过%YOU%的眼前，把视线转向一旁。
    - 一根长长的呆毛……
    - 一位鹿毛长发的%UMA%，呆呆的坐在中庭的长凳上。
    - %YOU%记得这个%UMA%的名字，出于个人兴趣和训练员的身份还去看过%SEX%的几次模拟赛。
    - 正好这次准备去训练场也是为了招募%UMA%加入队伍，那么眼前这位，不就正好吗？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊啦？是哪位呢？」
    - 似乎察觉到了身后的视线，%CHARA%缓缓回头看过来，在看见%YOU%的时候立刻展现了一个灿烂的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「很久不见～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请问今天是来做什么呢？」
    - 可爱的呆毛在问的时候弹跳了一下，也稍稍在%YOU%的心里敲了一下。
    - %YOU%的内心在反复告诫自己冷静下来，将想要揉揉%SEX%脸蛋的想法压回去。
    - 为什么之前没有发现那么软乎乎的呢？
    - 重新取回理智，轻咳了一声将思维拉回正轨。
    - acc: 1
      content: 「我是来招募你的。」（继续招募）
      key: rec
      lines:
        - （太过直球了！）
        - %YOU%的心里狠狠吐槽了一下自己，但考虑到确实是这个想法又放弃了吐槽。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「唉……？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，是的！」
        - 慢了半拍的%CHARA%这才站起身来，正经的看着%YOU%。
        - %YOU%和%CHARA%两个人对视了一小会，反而是%YOU%先没忍住笑了出来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那个，训练员先生？」
        - 「没事，不用在意。」
        - 收起脸上的笑容，%YOU%向前踏出了一步。
        - 之前的%CHARA%参与过的几次比赛，%YOU%在现场看过。
        - 虽然是模拟赛，但%CHARA%的跑法是没有问题的，只是需要稍加指点而已。
        - 「%CHARA%同学，你的比赛我是看过的。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是？」
        - %CHARA%带着脸上呆呆的表情，稍稍倾斜了一些。
        - 既然是招募的话，先展现一下自己的技术吧。
        - 「虽然有点怪怪的，但应该不介意我稍微指点两句吧。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，当然没问题，请说～」
        - 看着%CHARA%的脸，%YOU%提起了那些在心底压了很久的建议。
        - 不够精准的加速时机，缓慢的节奏，以及步伐上的小问题。
        - 听完了%YOU%的话，%CHARA%只是乖巧的点了点头。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦哦……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「感觉，想去试试看了～」
        - 面对这幅打起精神来的样子，%YOU%的嘴角自然的往上翘了起来。
        - 只要能证实提议的可行性，%CHARA%就会考虑签约了吧。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那，%CALLNAME%，今天要陪我训练吗？」
        - 当然可以，%YOU%是想这样回答的。
        - 但回想到这个称呼的时候，%YOU%也愣了。
        - 「唉？刚才的称呼是？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「是的～%CALLNAME%～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「因为～我已经决定了哦～」
    - acc: 2
      content: 「我……我就是路过。」（放弃招募）