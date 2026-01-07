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

school_rooftop:
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