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


# 沟通系 - 交谈
talk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……为什么那样子看着我……不许一直看着！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……也不许眼神挪到别的地方去！……我是说，还是看回来好了……嗯。」
      - 即使脸红，也请不要同时发出互相矛盾的指令……
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人的身体，不用问就知道，肯定很好看吧？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「所以……这是特许给%CALLNAME%的奖赏！……不许外提……」
      - 似乎对直勾勾的视线还是轻微地感到了羞耻，这么说着
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「理所当然的！主人……又不是第一次这么做！……在这之前就很熟练的！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『下次可以说得更顺畅一些』……？……你个练习对象闭嘴！！」
      - %CHARA%嘟嘟囔囔地继续练习挑弄的话语


# 性虐系 - 侮辱
abuse:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「和小狗比起来，%CALLNAME%的情绪到底像是哪种才对——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「想证明自己不是小狗的话就努力好了！不然，就要像小狗一样叫个不停了～！」
      - %CHARA%故意辱骂着%YOU%
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「笨蛋，变态，色情狂！明明是%CALLNAME%，却对主人有那种想法！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「才不会理你，最不喜欢你了，最讨厌你了！！」
      - %CHARA%故意辱骂着%YOU%


#欢愉刻印
mark_pleasure:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （呜呜……天才%MOHOSHOJO%是不是变得越来越奇怪了？为什么……会在想这种东西？）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （绝对会，哪一天被写进书里当故事的……）
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （一天一天变得越来越奇怪的天才%MOHOSHOJO%……真的没问题吗？）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （但是，变得奇怪的感觉真的好好……虽然知道不该这样想，但还是会……）
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （总有一天会习惯的。或者说已经习惯了？）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （……会变成触手%MOHOSHOJO%之类的吗……不对不要乱想！）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （就这样，继续变得奇怪就好了……）


#同心刻印
mark_meek:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （……就算知道自己哪里不太对，也说不出口……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （没事不重要！只要，顺着感觉继续……）
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （不愿意承认……不管是不是真实的想法什么的。嗯。没错。我不愿意承认。）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （……啊啊不要想这种事情！只要继续就好了……嗯。继续下去就好……）
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （就算知道也不想承认！！）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （只要这样子继续下去，什么都不承认也没问题对吧！！）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （但是，好想继续……就算真的被看出来也没关系。不……如果能被看出来的话……）

#苦痛刻印
mark_pain:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好痛！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……没什么……我才没有说什么！」
      - 东商变革，不愿意承认什么的样子
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好痛！！没……没有哭！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「再痛我也不会让你看到哭的！想都别想！……」
      - 说着这样话语的东商变革，眼角已然挂着泪花
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要……不要再继续了！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……主人才不会怕！……呜呜……呜呜呜……」
      - 眼泪从东商变革的眼角那里滴下来

#羞耻刻印
mark_shame:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （……做这种事什么的……果然还是……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （……sweepy大人不会害羞的！……但是做起来还是……呜呜……）

#反抗刻印
mark_hate:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要！我不想继续了！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「没错，就是不想继续了！！不要不要！！」
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要！！马上停下来，立刻停下来！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不然我、我也会……咬你！踢你！……认真的。」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……你……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……我明白了。」
      - 东商变革似乎想明白了什么，突然停止了进一步的话语
      - 稍稍地，只是安静了一些，一动不动了几刻。
