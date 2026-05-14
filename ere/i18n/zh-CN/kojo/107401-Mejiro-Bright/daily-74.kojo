# @file 目白光明 - 日常
# @author KUN
select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今天，要进行怎么样的训练呢～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼～哼哼～啊，%CALLNAME%您听见了吗？」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只要%CALLNAME%在身边的话，感觉无论多久都可以等待下去呢～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「只要维持好自己的步调就好了哦～不论是我，还是%CALLNAME%～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「身体和心里都在和我说，快点跑～之类的」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽然我不喜欢焦躁的样子，但随时都可以开始哦～」
    # STATUSNAME:1 = 熬夜
    - if: era.get('status:74:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，已经到训练时间了吗？非常抱歉，昨天没有睡好……」
    - if: era.get('love:74') >= 49
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「无论什么时候，我都希望能悠哉悠哉的散步哦～当然，那个时候希望%CALLNAME%也在呢～」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%好厉害！一下就明白了呢～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不愧是%CALLNAME%～」
      - 一口气写好了作业的%CHARA%，不自觉地往 %YOU% 身边靠了一下。

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我不太擅长料理呢……毕竟我总是慢悠悠的嘛～」
      - 看着眼前卖相不错的美食，%CHARA%的脸上浮出了一片轻飘飘的绯红色
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「谢谢，%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「难得那么悠闲的话，来开个茶会吧～」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「比赛准备……我会努力的！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「其实，蹄铁可以我自己来打的」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「毕竟我很擅长慢悠悠～的敲打呢」
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我会赢的哟，%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「为了目白的名字，也为了您～」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一起睡觉吗？好的～」
      - 没有一点顾虑的%CHARA%，像是一块棉花糖一样粘到了%YOU%的身边
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一起休息一下吧，%CALLNAME%～」
      - 抱着%YOU%的手，以%YOU%无法拒绝的柔软感打断了工作
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？要休息了吗？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还是说……休息只是一个借口呢～」
      - 带着有些其他意味的眼神，轻抓住了%YOU%的手，十指交错在一起
      - 「别开玩笑啦」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好～」

talk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「没问题的哦，%CALLNAME%」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我还是很擅长持续训练的～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「准备完毕～%CALLNAME%，今天要怎么做呢？」
  # STATUSNAME:1 = 熬夜
  - if: era.get('status:74:1') > 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼啊……感觉今天急急忙忙的起来，有点困呢」
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:74:40') > 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「状态很好呢～随时都可以开始哦～」
  - if: era.get('cflag:74:40') < 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「感觉有点毛躁躁的……」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「在游戏里和%CALLNAME%在一起，也不错呢～」
      - 看着屏幕上的超时，%CHARA%呆愣的笑了起来
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我不是很擅长游戏呢……」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是给我的礼物吗？非常感谢！%CALLNAME%～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是礼物啊～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这下必须给%CALLNAME%回礼了呢～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「谢谢%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「总有一天我会好～好给%CALLNAME%回礼的哦～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好耶～是给我的礼物～」

s_a_tree_hollow:
  # CFLAGNAME:48 = 育成回合计时
  # 95 + 16: 天春对应的育成回合数
  - if: era.get('cflag:74:48') < 95 + 16
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……我没有什么想要在这里说的事情呢……毕竟天皇赏的事情，已经决定了啊」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼哇～树洞先生今天也辛苦了呢～」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大家都会看见我们的哟，%CALLNAME%？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过，我并不讨厌呢～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「和%CALLNAME%约会……呼呼」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这样的话，今天也能悠哉悠哉的过去了呢」
  - if: era.get('love:74') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「约会……呼唉……？」

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～是午饭哦～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「有些可以慢悠悠的做好的料理，我还是能做到的哦～」

o_r_walk:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「一起在这里慢悠悠的散步～呼呼～」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「和 %CALLNAME% 一起悠哉的钓鱼～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「钓鱼～钓鱼～」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「街……机？我不是很擅长这个呢～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼啊～%CALLNAME% 好厉害！」

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是抽奖啊～以前每次抽奖都会被大家围起来呢，有点怀念～」
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME% 要抽奖吗？明明想要的礼物我都可以送给您的……」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唱歌的话，我会的不多呢～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼呼，是属于 %CALLNAME% 一个人的 Live 吗？」
  - if: era.get('love:74') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME% 听到情歌的话，会不会主动说什么呢？」

o_s_cinema:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「以前看恐怖电影的时候，姐姐们都说我喊的最慢呢」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「会不会有节奏很慢的电影呢～」
  - if: era.get('love:74') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「恋爱电影……怎么样？」

out_church:
  - 漫无目的的两个人一起散步在路上，却正好走到了特雷森后山的小道前。
  - 看着上方的神社，%CHARA%和 %YOU% 本着顺路也是缘分转向了山顶。
  - acc: 1
    content: 「你来抽吧。」
  - 随着铃铛的响声回荡在空旷的神社里，%CHARA%从签筒里随意的拿出了一张。
  - if: d.dice
    lines:
      - 看见小小的吉字出现在纸上，%CHARA%有点兴奋的转过身来，把手上的纸签递给 %YOU%。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天的运势很不错呢，%CALLNAME%！」
  - if: "!d.dice"
    lines:
      - 翻开纸张却看见了不吉的字句，%CHARA%立刻停下了继续翻开的动作。
      - 在 %YOU% 没看见的角度里，轻轻折起了纸，收进口袋里。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……是吉哦，%CALLNAME%～」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要吃点什么呢～%CALLNAME% 有喜欢的吗～」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「在这里约会的话，特雷森的大家都不会发现我们的吧？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「有人在看着我们呢，%CALLNAME%～」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要买点什么吗？我也可以送%CALLNAME%一点小礼物哦～」

good_night:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:0:10') === 0 && era.get('status:74:10') === 0 && era.get('status:74:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，也请好好休息哦～」
        - 陪着%CHARA%一路回到门前之后，%CHARA%转身背朝着宿舍门口对着%YOU%乖巧地鞠躬，这才慢慢走进了宿舍。
    - if: era.get('status:0:10') === 0 && (era.get('status:74:10') > 0 || era.get('status:74:39') > 0)
      lines:
        - 沉睡的%CHARA%没有察觉到被%YOU%背回宿舍的感觉，只是在%YOU%的气味下小小地微笑起来。
    - if: era.get('status:0:10') > 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……啊咧？睡着了吗？」
        - 在睡梦之中，依稀听见了%CHARA%的声音。

good_night_sex:
  - 与%CHARA%分开的时候，却被轻轻拉住了手。
  - 原本的话，就应该在这里看着%CHARA%回到宿舍了。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今天，我还不想结束……」
  - acc: 1
    key: select
    content: 「那就一起回去吧～」
    lines:
      - 随着 %YOU% 的话语，%CHARA%欢快的抱住了 %YOU% 的手臂，跑到了身边。
      - 软乎乎的脸贴在 %YOU% 的胸口，感受着逐渐加快的心跳声。
  - acc: 2
    content: 「今天只能到这里了。」
    lines:
      - if: d.check === 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「只是到这里……」
          - 握住的手突然用力，没有一点要放开的意思。
          - 一阵被抓紧的疼痛感顺着 %YOU% 的手臂，爬上了 %YOU% 的身体。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「现在结束的话……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「稍微，不太尽兴呢。」
          - 与往日的不同的%CHARA%，抓住 %YOU% 的手一点一点的靠近——
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%……失礼了！」
      - if: d.check !== 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……好的」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不能太过麻烦 %CALLNAME% 呢～」
          - 松开手的%CHARA%脸上带着遗憾的笑容，向后退了一步。
          - 向着 %YOU% 鞠躬之后，低落的走向了宿舍。