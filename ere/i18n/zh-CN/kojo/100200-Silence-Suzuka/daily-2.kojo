# @file 无声铃鹿 - 日常
# @author 牛蛙煲
select:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%，准备活动我有在好好地做哦，随时都可以开始的。」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%，需要我先去跑两圈吗？」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%，您看起来心情不错，希望您能一直拥有这样的好心情。」
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - 「那个，铃鹿？……」
        - %YOU%试图轻柔地唤醒铃鹿，但对方看起来睡得很熟的样子。

good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「如果%CALLNAME%相信我的跑法，我便会满怀自信地贯彻到底。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「不擅长的事情……如果有%CALLNAME%在的话，一定可以克服的。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「最前面的景色……不会让给任何人。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「清晨的风还是一如既往的舒适呢……%CALLNAME%，我们尽快开始吧？」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「我已经吃过早饭了哦，不好好摄入能量可是没办法训练的。」
    # STATUSNAME:1 = 熬夜
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALLNAME%非常抱歉……昨天训练完后，因为晚上的风太舒服了，所以就稍微多跑了一会……」
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALL_1%送给了我一份雪景拼图，因为觉得很有意思所以一直玩到了早上，实在是抱歉……」
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「虽然昨天是准时上床了，但是一直在想今天的训练内容，有些兴奋所以没睡着……」

good_night:
  sync: true
  lines:
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - if: era.get('status:2:39') === 0
          content: 「那个，铃鹿？……」
        - %YOU%试图轻柔地唤醒铃鹿，但对方看起来睡得很熟的样子。
        - 所以%YOU%只得亲自把铃鹿抱到宿舍楼下。
        - acc: 1
          content: 「这次也麻烦您了……」
        - %YOU%把铃鹿交付给%SEX%的寝室长，并目送对方回到寝室。
        - %YOU%叹了口气，看来下次要注意控制训练强度了。
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「谢谢您送我到这里，%CALLNAME%！明天见！」
        - %YOU%将铃鹿送到了宿舍楼下，%CHARA% 微笑着向%YOU%道谢。
        - %YOU%也向着铃鹿挥手致意。
        - %YOU%目送铃鹿消失在宿舍楼的深处，才转身离开。

good_night_sex:
  - 训练结束后，%YOU%像往常一样准备把铃鹿送到宿舍楼下。
  - 不曾想，铃鹿并没有直接跟着%YOU%离开，而是张开双臂紧紧抱住了%YOU%。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: 无声铃鹿
      - 「%CALLNAME%，我还有很多话想跟您说呢，不想这么早就再见……」
  - 铃鹿把脸颊整个地埋进了%YOU%的怀里，一向安分文静的尾巴也悄悄缠住了%YOU%的小腿。
  - %YOU%摸了摸铃鹿的背脊，想了一会。
  - acc: 1
    key: sex
    content: 「好吧，那就多陪陪你。」
    lines:
      - %YOU%轻轻挑起铃鹿的下巴，在铃鹿略微动情的眼眸中吻住了%她%。
      - 不知道过了多久之后，%YOU%与铃鹿的唇才依依不舍地分开。
      - 「铃鹿，我们换个地方吧，这里不太合适。」
      - 铃鹿依旧紧紧地抱着%YOU%，轻轻地点了点头。
  - acc: 2
    content: 「时间不早了哦，为了明天的训练，铃鹿要注意休息。」
    lines:
      - if: d.check !== 2
        lines:
          - 听到%YOU%拒绝的话语，铃鹿马上松开了%YOU%，并且轻轻地捶了%YOU%的胸口一拳。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: 无声铃鹿
              - 「%CALLNAME%真是不解风情……」
          - 说完后，铃鹿轻哼一声，转身离开了。
          - %YOU%挠了挠后脑勺，赶紧追了上去。
      - if: d.check === 2
        lines:
          - 听到%YOU%拒绝的话语，铃鹿反而抱得更紧了。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: 无声铃鹿
              - 「今天可没那么容易让%CALLNAME%逃走呢……」

talk:
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「那个，我有点忍不住想去跑两圈了，我们可以开始了吗？」
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，现在训练可是能有事半功倍的效果哦。」
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，我现在感觉不错哦，请问今天要做些什么训练呢？」
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今天会在怎样的赛道上奔跑呢？好期待……」
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「那个，今天的计划是什么呢？」
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今天也要像往常一样努力呢。」
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「呜，提不起力气来，是不是昨天跑太久了……」
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「有点难受……但是还不能放弃！」
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「完全提不起精神来……」
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「身体好沉重……应该没事吧，大概？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「昨天 %CALL_56% 送了我那么大的金色鲷鱼当护身符，可是我应该放在哪里呢……呜……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我向 %CALL_10% 请教短距离比赛的诀窍，%SEX%说什么『Enjoy spirit desu⭐』……完全没有听懂。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「其实 %CALL_18% 是个很有趣的人哦，尤其是当昨天我模仿 %CALL_1% 叫%SEX%前辈的时候……呵呵……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「城市里到处都是高大的建筑物，偶尔也很想像小时候那样，在空旷的原野上奔跑呢。」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「随着回忆的增加，眼中的景色也变得丰富起来……现在 %CALLNAME% 也在其中了。」
  # FLAGNAME:2 = 当前月
  - if: era.get('flag:2') >= 3 && era.get('flag:2') <= 5
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今天晨跑的时候有看到路边的小花和嫩芽哦，感觉心情都好了很多。」
  - if: era.get('flag:2') >= 6 && era.get('flag:2') <= 8
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「夏天的早上虽然不那么热，但是每次晨跑完头上都有小虫子，好难受……」
  - if: era.get('flag:2') >= 9 && era.get('flag:2') <= 11
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「秋天的风，真的很凉爽呢。在这样的风里跑步，真的很不错。」
  - if: era.get('flag:2') >= 12 || era.get('flag:2') <= 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「在来的路上看到了结冰的湖面，竟然有些忍不住想上去跑跑……我知道很危险的啦，所以只是想想嘛。」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「送给我的礼物吗？真是太感谢您了，%CALLNAME%！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「谢谢您的礼物，我会好好珍藏的。」

out_church:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「意外的很热闹呢，看来大家都有非常想要实现的愿望。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「只要认认真真地祈福，就一定可以实现愿望！」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「钓鱼需要静静等待，感觉跟跑步是完全相反但是又都非常需要耐心的事情呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，快看快看，好大的一条鱼呢。」

o_r_walk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「这种感觉……真的很不错呢，希望%CALLNAME%下一次也能陪我一起来散步。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「那个，%CALLNAME%，我想稍微跑一会步，可以请您在这里稍微等一下我吗？」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「与%CALLNAME%一起散步，真是一种幸福的体验呢。」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「意外地很有意思呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「听说很多前辈都喜欢用这个来做胜者舞台的训练呢。」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，我想要那个玩偶，帮我夹一下好不好嘛～」

o_s_drawing:
  - 商店街在举办抽奖活动，%YOU%看到铃鹿似乎有些感兴趣的样子，便将之前得到的一张抽奖券递给%SEX%。
  - 铃鹿小声谢过%YOU%，之后便有些兴奋地凑上前去。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 无声铃鹿
          - 「呵呵，奖品是好多胡萝卜呢。」
      - 铃鹿笑眯眯地把手中的签展开给%YOU%看。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 无声铃鹿
          - 「给%CALLNAME%一点，给小特一点……」
      - 铃鹿的心情似乎很好的样子。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 无声铃鹿
          - 「……呜，抽到了安慰奖，是一包纸巾……」
      - 铃鹿略显失落地收好了奖品。

o_s_ktv:
  - %YOU%带着 %CHARA% 来到了卡拉OK。
  - 在随便唱了几句后，%YOU%颇有些不好意思地把麦克风递给一旁微笑等待的铃鹿 。
  - content:
      - fontWeight: bold
        content: %CHARA%
      - 「ひとり 見上げた夜空，ただ 静かな世界～」
  - %YOU%不由得沉浸了进去。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「很精彩的电影，希望下次也能与%CALLNAME%一起来看。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「呵呵，%CALLNAME%居然会挑一部恐怖片来看，虽然%CALLNAME%看到鬼后的反应也很有趣就是了……」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「要问我喜欢什么样的电影吗？嗯……%CALLNAME%喜欢的我都喜欢～」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「以前小特带我来过这里，不得不说%SEX%还是很擅长发现美食的。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「这家店的饭菜太美味了，一不小心就吃多了……%CALLNAME%，我们慢慢走回学园吧？」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「诶？问我为什么不开动吗？因为看%CALLNAME%看得入迷了哦，呵呵……」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「果然还是有些不太习惯吗……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%有什么特别想去的地方吗？我们一起去吧。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「下次也像这次一样一起出来吧。」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，可以握住我的手吗？就像这样……唔，感觉好安心……」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%请就这样与我一起前行吧，以后的日子也要陪着我哦？」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「看起来都很不错，很难做决定呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「之前都是专门为了买什么东西才来这里的，还没有像今天这样仔细地逛过呢。」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「那片景色，一定不能让出去，一定。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「下次，一定要跑得更快，比先前的我还要领先，为了那片景色，也为了……%CALLNAME%……」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「感觉好奇怪……%CALLNAME%，我的脸一定很红吧，感觉像烧起来了一样……」
  - random: true
    lines:
      - 铃鹿紧紧地抱住了%YOU%的一条胳膊不肯松开，并把脸藏在%YOU%的肩后。

s_r_lunch:
  - %YOU%与 %CHARA% 约定在天台上交换便当。
  - 拿到铃鹿的便当后，%YOU%立刻便被那色香味俱全的饭菜吸引住了，不由得狼吞虎咽了起来。
  - 而铃鹿慢条斯理地享用着%YOU%的便当，时不时微笑着看一眼%YOU%的吃相。
  - 吃完后，%YOU%有些不好意思地将便当盒还给了铃鹿。

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%的手艺，感觉很不错嘛。」
      - 铃鹿对%YOU%的手艺大加赞赏。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%说把我加进去是什么意思……啊，我可不是胡萝卜！」
      - 铃鹿对于%YOU%调侃%SEX%的绿色耳套和橙色长发搭配起来像胡萝卜这件事提出了抗议。
  - if: era.get('love:2') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「与%CALLNAME%一起做饭，感觉好温馨，就像夫妻那样呢……」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，这个地方我还不太明白，请问能再讲一遍吗？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「那么接下来就拜托%CALLNAME%了。」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: 无声铃鹿
          - 「嗯，这次也会顺利拿下胜利的。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: 无声铃鹿
          - 「请放心吧，我会把胜利带回来给%CALLNAME%的。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: 无声铃鹿
          - 「最前面的景色……不会让给任何人。」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「唔，我昨天有好好睡觉啦，午休什么的……嗯，既然%CALLNAME%坚持，那我就稍微睡一会吧……」
      - 被%YOU%劝说而勉强躺下的铃鹿，不出五分钟便睡着了。
      - %YOU%看了看铃鹿平静的睡颜，把自己的衣服轻轻披在了%SEX%身上。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今天确实有些疲惫呢……谢谢%CALLNAME%提供的午休环境。」
      - 铃鹿谢过%YOU%之后便闭上双眼。
      - 但很快%SEX%便双颊羞红地睁开了眼。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「那个，%CALLNAME%也需要午休的吧……不不，绝对不是因为被%CALLNAME%看着午休会感到害羞……」
  - if: era.get('love:2') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「还是在%CALLNAME%这里午休舒服一些……」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%辛苦了，要一起休息吗？我的大腿可以借给%CALLNAME%用哦。」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，可以抱一下我吗？」
      - %YOU%面对伸出双臂要求拥抱的铃鹿提不起任何拒绝的想法，于是向前一步轻轻抱住了%SEX%。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%好舒服……今天也一起休息吧。」
      - 于是，%YOU%与铃鹿相拥在一起度过了午休时间。

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「唔，有点难……但是如果是我与%CALLNAME%齐心协力的话一定可以的……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「通关啦，%CALLNAME%真是太厉害了。」
      - 面对铃鹿真诚的夸奖，%YOU%反而有些不好意思。

valentine:
  - 一日，%YOU%正在自己的办公桌前写着什么，突然听到训练员室的门被敲响了。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%，您在吗？」
  - 是铃鹿的声音。
  - %YOU%站起身来，为铃鹿打开了门。
  - acc: 1
    content: 「铃鹿，有什么事吗？」
  - 铃鹿双手背在身后，看到%YOU%迷惑不解的样子，嘴角微微上抬。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%，情人节快乐哦～」
  - 紧接着，铃鹿从身后拿出来了一个便当盒。
  - 铃鹿慢慢地打开包装，两个制作精美的草莓大福就出现在了%YOU% 的眼前。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「因为不知道%CALLNAME%喜欢什么样子的甜品，于是最后做了我最喜欢的草莓大福，希望%CALLNAME%喜欢！」
  - %YOU%过了好一会才意识到今天乃是情人节。
  - 铃鹿看到%YOU%愣神的样子，笑得更开心了。%SEX%强行把草莓大福塞到了%YOU%的手里。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%请就在这里享用吧，我也想听听您对我手艺的评价呢。」
  - 说完，铃鹿便自顾自地搬了把椅子过来坐下，歪着头看着%YOU%。
  - acc: 1
    content: 「那么，谢谢铃鹿啦。」
  - 被自己的担当%UMA%盯着，似乎感觉不是很妙，因此%YOU%决定顺从地吃掉铃鹿带来的甜品。
  - 结果，在连自己都没注意到的情况下，迅速解决了其中一个草莓大福。
  - %YOU%下意识想要伸手去拿第二个的时候才意识到。
  - 没想到自家担当擅长奔跑，在甜品制作方面也有相当不错的实力。
  - %YOU%看了看旁边撑着下巴看着%YOU%出神的铃鹿，又看了看眼前的另外一个草莓大福，决定——
  - acc: 1
    content: 「铃鹿也来尝一下自己的手艺吧？」
    lines:
      - 果然甜品还是分享着吃好一点。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶？不用担心我的啦，我做出来就是送给%CALLNAME%的啦。」
      - 铃鹿有些急切地推辞着。
      - acc: 1
        content: 「来，铃鹿，张嘴～」
      - %YOU%没有多说什么，而是拿起草莓大福，慢慢向着铃鹿靠了过去。
      - 铃鹿见躲不开，只得微微张嘴，在%YOU%递过去的草莓大福上咬了一口。
      - acc: 1
        content: 「怎么样，铃鹿？自己的手艺果然棒极了吧。」
      - 铃鹿把头扭到一边去故意不理%YOU%。
      - 见状，%YOU%拿着草莓大福绕了个弯，仍旧递到了铃鹿身前。
      - 就这样，%YOU%与铃鹿嬉闹许久，最终还是让%SEX%吃掉了一整个草莓大福。
  - acc: 2
    content: 太好吃了，再吃一口。
    lines:
      - 铃鹿的甜品让%YOU%有些欲罢不能，因此%YOU%决定将铃鹿送给%YOU%的第二个草莓大福也吃掉。
      - 果然，第一口便让%YOU%感觉棒极了。
      - 于是，第二个草莓大福也没有存活太久，干净利落地进了%YOU%的肚子。
      - 哪怕是连续吃掉了两个草莓大福，%YOU%仍旧有些没吃够，便随意地将目光投向一旁的铃鹿。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呵呵，%CALLNAME%的吃相也是很可爱呢。」
      - 铃鹿察觉到了%YOU%的目光，于是微笑着说道。
      - %YOU%有些不好意思地笑着，明明自己平时不会露出这种吃相来的。
  - %YOU%收拾好便当盒，把它还给铃鹿。
  - acc: 1
    content: 「铃鹿的手艺真是太棒了，之前还不知道呢。」
  - %YOU%意犹未尽地看着铃鹿。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%不要用那种饥饿的眼神盯着我啦，我可不是草莓大福！」
  - 铃鹿佯装生气，鼓了鼓腮帮。
  - 「我的意思是说，铃鹿这么好的手艺，如果谁能有幸跟铃鹿生活在一起，肯定会很幸福吧。」
  - %YOU%与铃鹿开着玩笑，却发现铃鹿的脸越来越红。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%不许开这种玩笑！再这样我可真的要生气了！」
  - 又一次见到了铃鹿娇羞的样子，不过代价是%YOU%哄了铃鹿好久才哄好了%SEX%。

halloween:
  - 今天是万圣节，妖魔鬼怪的节日。
  - 在来训练员室的路上，%YOU%见到了许多奇形怪状的生物，其中有些还差点吓了%YOU%一跳。
  - 不过最终%YOU%还是平安来到了训练员室，开始制定下一步的训练计划。
  - 说是制定计划，其实%YOU%早就开始心不在焉了。
  - 在%YOU%的抽屉中，有一袋特意为某位%UMA%准备的精装糖果。现在只需要等%SEX%送货上门……
  - 突然，训练员室的门被敲响了。%YOU%吓了一跳，差点把笔掉到地上。
  - %YOU%调整了一下呼吸，颇为期待地走上前去，大力拉开了训练员室的门——
  - acc: 1
    content: 「请进，铃……」
  - 但门外不是铃鹿。
  - content:
      - fontWeight: bold
        content: %UMA%A
      - 「不给糖，就捣蛋！」
  - 是一位可爱的扮成某种怪物的%UMA%。
  - %YOU%愣了一下，随后如梦初醒地换上了一副微笑，从自己的抽屉中取了一些早就准备好的散装糖果。
  - %YOU%把为数不少的糖果装进%UMA%的篮子里，看着%SEX%非常惊喜地向%YOU%鞠躬然后跑去敲另一位训练员的门。
  - %YOU%长长地吐了一口气，回到了自己的座位上去。
  - 很快，敲门声再次响起。
  - content:
      - fontWeight: bold
        content: %UMA%B
      - 「不给糖，就捣蛋！」
  - 依旧不是铃鹿，%YOU%在将糖果送给%UMA%的时候颇有些失望地想着。
  - 慢慢地，万圣节之夜就要过去了，%YOU%的办公室早被数拨%UMA%造访过了，但%YOU%最期待的那位却还没有出现。
  - %YOU%看着墙上的表时针逐渐接近12，叹了口气，准备收拾一下离开训练员室。
  - 而就在这个时候，训练员室的门再次被敲响了。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%，您在……呜，不应该直接喊的……」
  - %YOU%心中一喜，赶紧去打开了门。
  - 门外赫然便是扮成魔法师的铃鹿。
  - 看到铃鹿的脸色有些红润，呼吸有些粗重，%YOU%无奈地摇了摇头。
  - acc: 1
    content: 「让我猜猜，铃鹿你又去跑步了吧？」
  - 铃鹿愣了一下，脸色更红了。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%对不起，我本来是想直接跑过来的，但是不知不觉就跑过头了……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊对了，那个，不给糖就捣蛋……？」
  - %CHARA% 这才想起了主要目的。
  - %YOU%有些哭笑不得地打开抽屉，把那一袋精装糖果拿了出来，递给铃鹿。
  - 今年的万圣节也在一种奇异的氛围内度过了。

forbid_running:
  title: 禁止跑步！
  lines:
    - acc: 1
      content: 「太晚了！已经到了无法原谅的地步了！」
    - %YOU%十分气愤地数落着眼前低着头的铃鹿。
    - 此时已经是深夜，而铃鹿额头上还带有薄汗，显然是刚刚跑完步回来。
    - acc: 1
      content: 「是谁跟我说要去一趟便利店结果几个小时才回家的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起……明明是今晚月色太美了，我忍不住才……」
    - acc: 1
      content: 「不行！罪大恶极，无法原谅！罚你三天不许跑步，你就在家里好好反省吧！」
    - 铃鹿如同被雷劈中一般无力跌坐在地。
    - 紧接着，%SEX%突然扑过来抱住%YOU%的大腿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要哇，那样我会活不下去的——」
    - %YOU%没有理会悲痛欲绝的铃鹿，而是任由%SEX%抱着%YOU%的腿，一步一步地挪向卧室。
    - 铃鹿乖巧地松开了%YOU%，简单洗漱后换好了睡衣，等%YOU%躺好之后，挤到了%YOU%的身侧。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个……」
    - acc: 1
      content: 「不行。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我还什么都没说呢！」
    - acc: 1
      content: 「不行就是不行，铃鹿，我是真的很担心诶。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好吧，我会乖乖听话的，%CALLNAME%不要生气了……」
    - 自知理亏的铃鹿侧过身来抱住了%YOU%，与%YOU%一起进入了梦乡。
    - divider: true
      content: 翌日
      position: left
    - %YOU%刚走进家门，便吓了一跳。
    - 眼前赫然便是一座胡萝卜汉堡肉山。
    - acc: 1
      content: 「铃鹿？这些都是你做的吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是的哦？因为太无聊了所以一不小心就做了很多出来……」
    - divider: true
      content: 又翌日
      position: left
    - %YOU%发现铃鹿捧着手机在逆时针转圈圈。
    - %YOU%观察到手机上是训练场的图片。
    - acc: 1
      content: 「铃鹿这是在？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我一边看着训练场的图片一边不停走路，就可以想象是在跑步哦？」
    - %YOU%挠了挠头，不知道该不该称赞铃鹿的想象力。
    - divider: true
      content: 再翌日
      position: left
    - %YOU%回到家，却没有发现铃鹿的身影。
    - %YOU%差点以为铃鹿按捺不住偷着去跑步了，最后却在卧室里发现了还在睡觉的铃鹿。
    - acc: 1
      content: 「……所以铃鹿是睡了一天吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毕竟睡觉可以让一天过得很快嘛……」
    - %YOU%有些无言以对。
    - divider: true
    - 很快，三天就要结束了。%YOU%站在卧室门口有些疑惑地看着铃鹿，而铃鹿正守在钟表前面。
    - acc: 1
      content: 「喂，铃鹿，这么晚了还不睡觉吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一分五十八，一分五十七……」
    - 当表针指向了某个时间点，铃鹿猛地转过头来看着%YOU%，眼中洋溢着激动，同时悄悄向大门的方向移动着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「已经三天整了哦，我可以出去跑一会了吗？」
    - acc: 1
      content: 「……需要我再延长三天吗？」
    - 话音刚落，铃鹿便麻利地从大门旁边跑开了。
    - 随后，%SEX%轻轻抱住了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我可是为了%CALLNAME%足足忍耐了三天哦？%CALLNAME%是不是应该奖励我点什么？」
    - 铃鹿依偎在%YOU%的怀中，有些脸红地看着%YOU%。
    - acc: 1
      key: sex
      content: 「好吧，那就表扬一下你的忍耐力。」
      lines:
        - 之后，%YOU%便抱着铃鹿走进了卧室。
    - acc: 2
      content: 「不行，明明是给你的惩罚，怎么还想要奖励呢？」
      lines:
        - 闻言，铃鹿立刻挣脱了%YOU%的怀抱。
        - 然后，铃鹿把挣扎中的%YOU%扛了起来，进入了卧室。