# @file 东商变革 - 调教
# @author 阿格尼斯数码公司

# 和奸
ero_start_normal:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「满……『满足需求』……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呣～真是的…… %CALLNAME% 到底是什么时候在这方面赖上主人的啊！？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……不过也是！满足%CALLNAME%的需求……也算是主人的义务！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只是义务！%CALLNAME%，不许多讲！也不许多问哦！！」
  - 东商变革，踏着不知到底是期待还是一如既往的脚步，带着%YOU%进了休息室


# 强奸
es_rape:
  - if: era.get('love:44') < 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！ %CALLNAME% 反抗主人是不被允许的……！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「特别还是……被强迫做这种事情……就像某些书里的……魔法少女一样！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔呜——好疼……！主人才不会认输！！但是好疼……」
      - 在东商变革自相矛盾的言辞中，%SEX%最终是带着泪花被%YOU%扑倒了
      - 在对方反抗成功之前，还是尽量压制%SEX%吧
  - if: era.get('love:44') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要不要！%CALLNAME% 反抗主人是不被允许的……！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就算我们已经是什么关系……不不对我们只是主人和 %CALLNAME% 而已！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔呜……敢让主人疼个不停的话……我还是会生气的，绝对！！！」
      - 在 %CHARA% 接受又不接受的言辞中，%SEX%最终是带着泪花被%YOU%扑倒了
      - 在对方改变主意之前，还是尽量压制%SEX%吧


# 首次强奸 Play
# 根据合意计算公式，70 爱慕以上算做强奸 Play（可以和奸但是强奸值有效的情况）
es_rape_play_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「其实这种类型的玩法……主人就算在魔法少女书籍里都没有见过！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……才不是才没有！主人没有看过那种书！不许多想！！！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……不管怎么样，只要这么做 %CALLNAME% 就觉得没问题吧？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哼哼～就算现在是在扮演， %CALLNAME% 最终也一定是战胜不了sweepy大人的~！」


# 之后的强奸
es_rape_play:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只要这么做 %CALLNAME% ，就觉得没问题吧？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哼哼～天才%MOHOSHOJO%sweepy，当然什么都会了！才不是从 %CALLNAME% 那里学的！！」


# 下药迷奸
es_drug:
  - %YOU%等待着%CHARA%的药效发作


# 下药迷奸 - 马跳S - 初次
es_drug_umz_s_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「唔……呜……%CALLNAME%，你居然会……」
  - 话还没有说完的%CHARA%，慢慢地倒在了%YOU%的怀里


# 下药迷奸 - 马跳S - 再次
es_drug_umz_s:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「唔……呜……%CALLNAME%，你怎么总是……」
  - 话还没有说完的%CHARA%，慢慢地倒在了%YOU%的怀里


# 下药迷奸 - 超马跳Z - 初次
es_drug_super_z_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……唔……主人，为什么会好想要……」
  - 即使是看似十分清纯的小%UMA%也会扭捏着身子，双腿不自觉地夹紧一些
  - 某种意义上，也是药物的魅力之一
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……！不对，是……%CALLNAME%！！！」
  - 不过，残存的理智还是让这家伙明白了什么
  - 一副双脸通红却又努力龇牙咧嘴的表情，不知是药效影响，还是愤怒所致
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
      - 「……唔…为什么会好想要……那个……」
  - 随着双脸的逐渐发红，%CHARA% 双腿不自觉地夹紧，表情也发生了微妙的变化
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……不不对！使——魔——你又！！！」
  -
  - 已经讲不清到底是愤怒，惊惧还是害羞
  - 至少，明白一切的 %CHARA%，不久就放弃了挣扎，任由身体本能发起行动
