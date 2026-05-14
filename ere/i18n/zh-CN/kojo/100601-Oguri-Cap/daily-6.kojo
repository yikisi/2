# @file 小栗帽 - 日常
# @author 雞雞
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 小栗帽
            - 「我刚来到学园的时候，真是什么都不懂……有你在真是帮大忙了。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 小栗帽
            - 「为了让故乡的各位高兴……我也得努力。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 小栗帽
            - 「一想到还有很多比我跑得还快的马娘在，我就心跳加速起来了……！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 小栗帽
            - 「我们一起去吃饭吧。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 小栗帽
            - 「比赛的时候总有一种训练员在跟我一起跑的感觉。……实在是让我心头为之一振。」

select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 小栗帽
            - 「我是小栗帽，请多多指教了。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 小栗帽
            - 「训练员……拜托你了。」

talk:
  # BASENAME:0 = 体力
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「呣……看来我有点累了。」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「不好意思，让我稍微休息一下。」
  # CFLAGNAME:66 = 招募状态
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「刚才跟小玉吵架了……但你听我说啊，说到乌贼烧的话就会想到原只乌贼烧，很正常吧……？」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「嗯……刚才在走廊被小海湾摸头了……我发型睡坏了吗……？」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:34:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「刚才跟稻荷去吃午饭了，她吃饭的速度是真的快啊。我感觉那样对身体实在不好吧……」
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「嗬！嗬！呜噫呼！你说这个？我状态很好的时候就会这样。所以你就尽情期待吧！」
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「这个感觉……嗯。真是期待训练啊！」
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「吃了好多，今天的状态也很好！」
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「嗯呣……今天心情不错。来进行大量训练吧！」
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「好了，今天要怎么训练？」
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「好，今天也要加油。」
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「无论如何状态都还是很差。是不是因为睡不够呢……」
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「呜……使不出力气。是不是该多吃点的……」
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「呣呣……啊，抱歉。我不管怎么样都提不起劲……」
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「最近感觉身体很重……这种事情最好还是不要做吧……」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「只有这点真的够吃吗？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「噢噢，这难道是传说中的黯然销魂饭吗！」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「训练员……帮我加点料吧❤️当然是白色的那种酱汁❤️」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「训练员……这个手柄到底该怎么操作啊？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「呜，又输了……要是在现实比赛的话我肯定会赢！」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「训练员❤️要是我输了的话，你得好好惩罚我哦❤️」

office_gift:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 小栗帽
      - 「是礼物吗。不知道是不是吃的……总之可不能让吃的变质，让我打开看看吧，训练员。」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「把大家的心愿化作我的力量……！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「谢谢，我确实感觉到了成长。」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「……可以让我喝一下训练员特制的牛奶精力饮料吗❤️？」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「最近真是发生了好多事啊……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「我来帮你剪指甲吧。别看我这样，我可是很擅长的哦。」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「训练员的指甲剪好了哦，接下来你的手指就该派上用场了❤️」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「……呣。这次考试也是在答完题目之前就结束了。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「我以前的梦想是成为土手煮……不要岔开话题？呜……」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「训练员，我这次考试的成绩是69分呢……❤️」

out_church:
  - 这天，%YOU%被小栗帽带到特雷森附近的神社……%YOU%好奇地问道：
  -
  - acc: 1
    content: 「为什么要来神社？」
  -
  - %SEX%皱起了眉头看向地上，耳朵也消沉地折起。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 小栗帽
      - 「其实我最近身体有点不舒服……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 小栗帽
      - 「不论做什么都会失准，总之就是不在状态上……但我想起来乡下的阿政叔叔说过『有麻烦的时候就拜个神吧』。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 小栗帽
      - 「而且我在乡下的时候也会在赛场里的某个小神社祈福，然后赢下比赛。」
  -
  - acc: 1
    content: 「于是就把我叫来了啊……那我们一起祈个福吧。」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 小栗帽
      - 「可以吗？真是谢谢你了，%YOURNAME%。」

  - 你们熟练地往赛钱箱放进香火钱，诚心地祈求神佑……
  - 在那之后，小栗帽似乎感觉到了什么异样……
  -
  - if: d.dice > 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「这是……拉面店的免费加面券！没想到福报马上就来了！」
      -
      - 小栗帽惊讶地从口袋里掏出一张纸，但%YOU%觉得这只是%SEX%之前就把这玩意忘在口袋里面了而已。
      - 不过不论如何，看着%SEX%的笑脸，你也没必要破坏这个气氛了。
  - if: d.dice < 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「这是……拉面店的免费加面券！没想到福报马上就来了！呜……竟然是过期的……」
      -
      - 小栗帽惊讶地从口袋里掏出一张纸，但免费加面券上的有效日期早就过去了。
      - 看着比之前更消沉的小栗帽，%YOU%只好决定自掏腰包请%SEX%去吃一顿拉面……也许甚至更多。

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「钓起来的鱼要怎么料理好呢？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「噢噢！真是好多鱼！……为什么用那种眼神看我？」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「嗯……不错的空气。我果然还是喜欢户外啊，总觉得有种很清新的感觉。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「训练员，我想跑起来了！你能跟上我的速度吗？」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「夹娃娃机里的那个是……怪兽版的我吗？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「为什么爪子的力道那么弱啊……！」
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「我想夹到那个小玉呢，送给小海湾她一定会很高兴。」

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「抽奖吗……要是能抽到吃的就好了。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「哪怕是在城市里也是用这种滚筒抽奖的呢。」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「我们是勇敢的步兵队，大步向前又满腔热血的敢死队～♪」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「唱歌和比赛一样都让人热血沸腾啊。」
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「小海湾经常给小玉唱儿歌来着呢……」

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「海报上的那个人好像是重炮同学的父亲……你说他已经年过六十了？！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「呜呜，八公……呜哇啊啊啊——」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「不论何时都不能忘了说『我开动了』哦。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「真是很好吃呢——谢谢请客。」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「衣服很漂亮吗……？谢谢……❤️」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「嗯……真是热闹的地方啊，跟乡下完全不一样。」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「什么都不要说，就让我们好好享受现在的时光吧。」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「训练员，帮我拍个照吧。我想把照片发给家人……而且我不懂怎么拍……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「这是……有人被困在箱子里了？！……这个笑话还是太老了吗？」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「想把我的老蹄铁做成装饰品？那找小光辉帮忙就好了吧？『有些事情还是不要让身边的人知道……』？」

s_a_tree_hollow:
  - %YOU% 与 小栗帽 一起来到中庭枯树洞，看着%SEX%朝枯树洞里咆哮的样子，%YOU% 也坚定了要帮助 小栗帽 成为最强的决心。

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「在校内约会吗……总觉得有点害羞呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「能感受到%THEY%的视线，一直在盯着我们看啊……」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「我说……要来亲亲吗？」

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「肉包子还是得趁热着吃啊！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「训练员做的饭真是好吃啊，你将来一定会成为一个好妻子的。」
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 小栗帽
          - 「那个，我向小玉学了怎么做章鱼烧……你可以尝尝吗？」
