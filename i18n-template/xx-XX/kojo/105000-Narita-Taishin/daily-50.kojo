# @file 成田大进 - 日常
# @author 卡特曼
select_after_recruit:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「虽然签署了担当契约，但可别以为这样就行了。」
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「毕竟，你说过的吧，会找到让我赢的方法。」
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「究竟是真心话还是空话，就用接下来的三年证明吧。」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「『理论知识也是比赛的一部分。』虽然老师是这么说的，但历史课真的会对比赛有什么帮助吗……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「虽然我的成绩不算差，但也不出色。不像晨光那家伙，%SEX%从测验到考试都是名列前茅的……你问奖券？%SEX%的成绩可能比我还要差哦。」

office_prepare:
  - if: era.get('cflag:50:干劲') >= 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「还没开始吗？嗯，不是紧张，现在的状态非常好，我不想错过它。」
  - if: era.get('cflag:50:干劲') <= -1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「马上就要开始了吗……没时间调整状态了，我会尽我所能地上的！」
  - if: era.get('cflag:50:干劲') === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「状态？还好吧，按照规划好的方法来跑就行了。」

talk:
  - if: era.get('base:50:体力') < era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「都说了我没事，不需要休息。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「只是这种程度而已，怎么能停下脚步。」
  - if: era.get('base:50:体力') >= era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「状态姑且还算不错，今天有什么安排？」
      - random: true
        if: era.get('love:50') >= 100 && era.get('cflag:50:育成回合计时') >= 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「问我最近有什么感想？」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「嗯……过去的三年，真的经历了很多很多。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「胜利也好，失败也好，对我来说都是宝贵的回忆。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「虽然未来是怎样的尚未可知，但一想到有你在我的身边，就会很安心……」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「喂！你那表情是要怎样啦！」
          - 一瞬间，大进脸上的幸福笑容变成了害羞的怒目。
      - random: true
        if: era.get('love:50') >= 90 && era.get('status:0:熬夜') > 0
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「打起精神来啊。昨天又熬夜了吗？」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「真是的，要我叮嘱你多少次注意身体。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「别总是让我担心啊……」
      - random: true
        if: era.get('love:50') >= 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「喏，这瓶是给你带的。」
          - 大进递给 %YOU% 一个易拉罐
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「你说什么？含糖饮料喝多了会长胖？」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「不想喝的话还给我也可以。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「别那么看着我，我有在好好控制体重的哦。」
      - random: true
        if: era.get('love:50') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「手游新活动的内容好多啊，如果不熬夜的话恐怕没法全收集啊。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「不行，不能因为这种事情去耽误训练。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「但这次的限定道具错过的话又要等好久。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「可恶，好难抉择……」
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「这样保持下去的话，能行！」
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「我已经准备好了，快点开始吧，%CALLNAME%！」
      - random: true
        if: era.get('cflag:50:干劲') === 1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「状态？还算可以。按照计划进行就好。」
      - random: true
        if: era.get('cflag:50:干劲') === 0 && era.get('cflag:50:育成回合计时') < 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「今天的训练内容是什么，和往常一样？」
      - random: true
        if: era.get('cflag:50:干劲') === -1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「虽然身体有些疲惫，不过还能坚持一下。」
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「可恶，为什么脚上感觉这么沉重……」
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「不，我没事，继续训练就好。」
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「天气渐渐暖和起来了啊，中午去哪里小睡一会吧。」
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「春天……樱花是不是要开了呢？有时间的话去公园里散散步好了。」
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「啊——好热……还没开始训练就已经出汗了。而且训练场上的家伙都好吵，让人感觉更热了。」
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「一到夏天，蝉鸣的声音就到处都是呢。虽然很有夏日的感觉，不过有时候也会觉得有点吵呢。」
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「看着路两边堆满的落叶，就有秋天的感觉了，得注意保暖才行啊。」
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「秋天的午后总是让人昏昏欲睡呢，今天在课上又被老师批评了……什么？我昨天晚上可没有熬夜哦！」
      - random: true
        if: era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「虽然到了冬天，家里的花店也还是在忙，因为要收拾过去一年留下的杂务，也要为来年做准备，可不能天天窝在被炉里剥橘子。」
      - random: true
        if: era.get('love:50') >= 50 && (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2)
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「下雪了啊，一提到下雪天就会让人想呆在屋里呢，再煮上一顿丰盛的火锅……嗯？你也想吃？当然会有你的份了，笨蛋。」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「呼……有时候也需要这样休息一天呢，你偶尔也给自己放个假吧。%CALLNAME%？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「适当的休息能让训练事半功倍，你和晨光都说过类似的话呢。」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「要一起打游戏？没问题，输了的话可别不服气哦。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「比起对战类的我还是更喜欢单人游戏，不过是和你一起玩，所以也挺开心的。喂，你在傻笑什么！」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「下次比赛绝对要赢！」
  - if: era.get('cflag:50:育成回合计时') >= 48 && era.get('cflag:50:育成回合计时') < 144
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「一定要让那些家伙们好好地见识一下现在的我！」
  - if: era.get('love:50') >= 50 && era.get('love:50') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「为什么我满脑子都是那家伙的事啊！」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今天要带我去哪里？别指望我出主意哦，我经常去的地方都很僻静，不适合约会……和我在一起就好？……随你便！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「呐，%CALLNAME%？那边有家花店挺不错的，陪我去看看吧？」

school_rooftop:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「唔……平常在这里午睡的事看来是瞒不住了，算了，反正奖券那家伙早晚也会说出去的。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「好舒服的风啊。真想在这里多呆一会。」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「钓鱼最重要的是沉住气，耐心等待才能抓住机会，就像在中盘寻找突破机会一样。」
      - %CHARA% 利落地起杆收线，拽起一条鱼来。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「钓鱼的时候就像和自然环境融为一体了一样，周围的人都不会注意到，我喜欢这感觉。」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「你说什么？没人注意是因为没有鱼上钩？」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「呼啊，这里的空气真清新啊，感觉心情都变好了」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「在那边的长椅上坐一会吧，什么，想要我给你膝枕？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「又想被踢飞了是吗。」

o_s_arcade:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「要一起玩音游吗？好吧，那就选个简单点的曲子……」
  - 事实证明，哪怕是简单点的曲子，完全没接触过这类游戏的 %YOU% 也有点招架不来。
  - 另一边，大进的屏幕上是大大的 FULL COMBO。

o_s_drawing:
  - 结清账单后，店主叫住了准备离开的 %YOU%。
  - 店主「稍等一下，客人。」
  - 店主从旁边的桌子上抽出一张小纸片递给你。
  - 店主「这是赠送的奖券，在那边可以抽奖，祝您好运。」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「抽奖券啊，我最近在游戏里抽奖的运气不太好来着，你来抽吧，%CALLNAME%。」
  - 递上奖券后，%YOU% 缓缓摇动抽奖机的把手……
  -
  - if: d.dice === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「头，头等奖吗？！真少见啊。」
      - 店主「恭喜恭喜，您运气真不错，来，这是两人份的温泉旅行券，收好。」
      - %YOU% 伸手接过了店主递出的旅行券。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「双人的温泉旅行啊，想好了要和谁一起去吗？」
      - 「……」
      - 「既然是和大进一起抽到的，当然和大进一起去！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「诶？啊，等一下啊喂！」
      - 「不想去吗？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「倒也不是，只不过……啊，你这家伙真是的！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我得先和家里人商量一下……」
      - 「那就是愿意一起去咯？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「啰嗦！」
      - %YOU% 灵活地躲过了 %CHARA% 踢过来的脚。
  - if: d.dice === 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「好大的汉堡肉，我自己的话吃不完诶……一起吃吧，%CALLNAME%。」
      - 和 %CHARA% 一起享受了汉堡肉。
  - if: d.dice === 2
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「这么多萝卜要怎么处理……回去找晨光和奖券%THEY%分一下吧。」
  - if: d.dice === 3
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「胡萝卜吗？正好肚子有点饿了。」
  - if: d.dice === 4
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「啧……好过没有吧。」
      - 话虽如此，捞到末等奖只能用倒霉来形容。

o_s_ktv:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「唱歌吗？其实我不是很擅长，胜者舞台那种程度就已经是极限了。下一首你来唱吧？%CALLNAME%。」

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「《熙熙攘攘，我们的赛场》，以地方赛%UMA%作为主角的故事，听起来还可以啊，就看这个吧。」
      - divider: true
        content: ⏰电影结束后⏰
        position: left
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「虽然是电影，但艺术加工的地方未免太多了吧……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「《直到宇宙尽头》，好久没有看科幻电影了，试试这个吧。」
      - divider: true
        content: ⏰电影结束后⏰
        position: left
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「……为什么一大半的时间都在讲爱情啊，啧，被电影名给骗了。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「《最后的白骑士》，在黑暗的时代，一位金发的%UMA%挺身而出，用%SEX%手中的长枪刺破黑暗……呐%CALLNAME%，%SEX%为什么被称为骑士呢，明明什么都没有骑……」
      - %YOU% 突然感觉不妙，拉着 %CHARA% 换了一部电影看。

# 50 爱慕以上
o_s_restaurant:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「我开动了。」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「诶？为什么只点了这些菜？」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「我们俩的话，这些完全足够的吧，而且我已经不会再暴饮暴食了。」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「毕竟之前你都特地跟我说过了，当然要好好注意。」