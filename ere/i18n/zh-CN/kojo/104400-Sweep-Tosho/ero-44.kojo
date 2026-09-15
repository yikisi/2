# @file 东商变革 - 调教
# @author 阿格尼斯数码公司

# 和奸
ero_start_normal:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「『满足需求』……？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……什么啊%CALLNAME%？什么时候在这方面赖上主人的啊！？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……算了！满足%CALLNAME%的需求……也算是主人的义务！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只是义务！%CALLNAME%，不许多想！也不许多问！！」
  - 在%YOU%看清%CHARA%到底有没有脸红之前，%SEX%就领着%YOU%进了休息室


# 强奸
es_rape:
  - if: era.get('love:44') < 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『满足需求』……？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！为什么主人要帮%CALLNAME%满足这种奇怪的需求啊！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Dill★Dogbane！需求退散吧！！」
      - 不管怎样，%CHARA%拒绝了%YOU%的请求
  - if: era.get('love:44') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『满足需求』……？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……为什么%CALLNAME%天天有那么多奇怪的需求啊？！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！%CALLNAME%的奇怪想法，自己想办法满足吧！！」
      - 不管怎样，%CHARA%拒绝了%YOU%的请求
  - ……但是，%YOU% 的力量总能支持 %YOU% 无耻的行径……


# 首次强奸 Play
# 根据合意计算公式，70 爱慕以上算做强奸 Play（可以和奸但是强奸值有效的情况）
es_rape_play_first:
  - 向%CHARA%道明了自己的『需求』之后，%SEX%突然呆住了一会
  - 而后，缓缓地，慢慢地伸出一根手指，向%YOU%示意
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%，这是几？」
  -
  - 「一。」
  -
  - %CHARA%缓缓地把另一根手指伸出来
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%，这两个加起来是几？」
  -
  - 「二。」
  -
  - %CHARA%低下头，把刚才伸出来的两根手指头自己又掰了一遍
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「什么啊！这不是脑袋没有完全坏掉嘛！？」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「虽然搞不明白%CALLNAME%到底在想什么——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是，配合一下也不是不行！」
  - 在%YOU%看清%CHARA%更多的反应之前，%SEX%就领着%YOU%进了休息室


# 之后的强奸
es_rape_play:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「什么啊什么啊！虽然搞不明白%CALLNAME%到底在想什么——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是，配合一下也不是不行！」
  - 在%YOU%看清%CHARA%更多的反应之前，%SEX%就领着%YOU%进了休息室


# 下药迷奸
es_drug:
  - %YOU%将%DRUG_NAME%加入甜品中，递给了%CHARA%
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哼哼～在这种事情上做的还不错嘛，%CALLNAME%！」
  - %CHARA%，马上就接过了甜品
  - if: Math.random() < 0.25 # 低概率触发失败重试事件
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……不对！%CALLNAME%，这个……到底是……？」
      - 刚刚拿起勺子，又突然怀疑了起来
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……这个甜品，为什么感觉加了好多水的样子。」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人明白了。」
      - 自言自语着
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，一定是从河边上捡了甜品回来给主人吃。」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要不要！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来历不明的甜品，我绝对不吃！！！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下次，再从路边捡东西给主人吃，我就不要你了，%CALLNAME%！！！」
      - 不管怎样，%CHARA% 最终是没有吃下%YOU%精心准备的甜品……
      - divider: true
      - 但很快，%YOU% 就找到了又一次机会
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%。这次的甜品里，不会加什么奇怪的魔法药吧？」
      - 非常难得地从 %CHARA% 那里看到如此警惕的表情……
      - acc: 1
        content: 「还请相信我」
      - %YOU%只是这么说着


# 下药迷奸 - 马跳S - 初次
# TODO 所以再次的差分呢？
es_drug_umz_s:
  - 吃下一半甜品的%CHARA%，似乎有些晕眩
  - 而后，好像意识到了什么
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「唔……唔……%CALLNAME%，你居然……」
  - 话还没有说完的%CHARA%，只是慢慢地倒在了%YOU%的怀里


# 下药迷奸 - 超马跳Z - 初次
es_drug_super_z_first:
  - 吃下一半甜品的%CHARA%，似乎有些怪异的感受
  - 而后，好像意识到了什么
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……！使……%CALLNAME%！！！」
  - 龇牙咧嘴，双脸通红，不知是药效影响，还是愤怒所致
  -
  - 至少，随着%YOU%逐步走近
  - %CHARA% 脸上慢慢显露出几分惊惧的神色
  -
  - 即使嘴中念叨着各种魔法也没有用
  - 逐渐无法克制的 %CHARA%，最终是泛着泪花自己扑倒了%YOU%


# 下药迷奸 - 超马跳Z - 再次
es_drug_super_z:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哼！%CALLNAME%肯定不会害自己的主人，sweepy大人我还是知道的！」
  - %CHARA%解开心头的疑虑，放心地吃起%YOU%为%SEX%特别准备的甜品
  -
  - 随着双脸的逐渐发红，%CHARA% 的表情也发生了微妙的变化
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……使——魔——！！！」
  -
  - 已经讲不清到底是愤怒，惊惧还是害羞
  - 至少，明白一切的 %CHARA%，不久就放弃了挣扎，任由身体本能发起行动
