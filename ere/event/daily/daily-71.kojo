选中互动对象:
  sync: true
  lines:
    - if: era.get('status:71:沉睡') === 0 && era.get('status:71:马跳S') === 0
      random: true
      lines:
        - if: era.get('love:71') < 75
          random: true
          lines:
            - if: era.get('cflag:71:育成回合计时') < 3 * 48
              random: true
              lines:
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「贵安，%称呼%，今天也一起加油吧。」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「%称呼%，今天商店街新开了一个咖啡厅，等训练结束后一起去品尝下吧。」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「前几天找到了我和姐姐小时候的照片，真是令人怀念呢。」
            - if: era.get('cflag:71:育成回合计时') >= 3 * 48
              random: true
              lines:
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「早上好，%称呼%，最近过得如何？」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「%称呼%，有段时间没见了呢，不过看起来您那边一切安好。」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「%称呼%，好久不见，真的非常感谢您那时候对我的支持和帮助。」
        - if: era.get('love:71') >= 75
          random: true
          lines:
            - if: era.get('cflag:71:育成回合计时') < 3 * 48
              random: true
              lines:
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「早上好，%称呼%，要我为您准备一杯提神醒脑的红茶吗？」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「%称呼%，下次休假的话要不要和我一起去目白家的避暑胜地呢？」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「%称呼%，看起来很疲劳呢，让我来为你按摩下，好好放松下身体吧。」
            - if: era.get('cflag:71:育成回合计时') >= 3 * 48
              random: true
              lines:
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「亲爱的，今天早饭想吃什么呢？就让我为亲爱的准备好吧🎵」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「亲爱的最近看起来有些疲惫呢，来～这是给亲爱的膝枕哦，就躺在我的怀里好好休息下吧🎵」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「呵呵，和亲爱的你在一起的每一天都是这么的幸福，和你相遇才是三女神对我最大的祝福呢🎵」
                - random: true
                  lines:
                    - color: %代表色%
                      content:
                        - fontSize: bold
                          content: 目白阿尔丹
                        - 「亲爱的这样逞强可不行哦，嘿🎵看我专属的劝阻亲爱的熬夜法。」
    - if: era.get('status:71:沉睡') > 0 || era.get('status:71:马跳S') > 0
      random: true
      lines:
        - if: era.get('love:71') < 75
          random: true
          lines:
            - if: era.get('cflag:71:育成回合计时') < 3 * 48
              random: true
              lines:
                - 坐在沙发上睡着的阿尔丹，就像是一副瑰丽又静谧的画，让%你%的动作都轻柔了起来。
            - if: era.get('cflag:71:育成回合计时') >= 3 * 48
              random: true
              lines:
                - 疲惫的目白阿尔丹打了一个小哈欠。
        - if: era.get('love:71') >= 75
          random: true
          lines:
            - if: era.get('cflag:71:育成回合计时') < 3 * 48
              random: true
              lines:
                - 过于疲惫而依靠在%你%身上睡着的阿尔丹，就像是找到了归宿地的小鸟一样。
            - if: era.get('cflag:71:育成回合计时') >= 3 * 48
              random: true
              lines:
                - 阿尔丹在休息室里的床上安心地睡着。

生日选中互动:
  #当前日期为训练员生日
  sync: true
  lines:
    - if: era.get('love:71') < 75
      random: true
      lines:
        - color: %代表色%
          content:
            - fontSize: bold
              content: 目白阿尔丹
            - 「生日快乐～%称呼%，我已经为你准备好了生日派对呢。」
    - if: era.get('love:71') >= 75
      random: true
      lines:
        - color: %代表色%
          content:
            - fontSize: bold
              content: 目白阿尔丹
            - 「生日快乐～%称呼%🎵我已经为你准备好了生日派对呢，在派对结束后还有只属于我们两人的庆祝会哟🎵」

回合开始:
  sync: true
  lines:
    - if: era.get('love:71') < 75
      random: true
      lines:
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「看着大家为梦想拼搏的身姿，真的是非常耀眼呢。」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「今天商店街好像有什么活动，%称呼%，要一起去看看吗？」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「呵呵，%称呼%，看到你就让我很是安心呢。」
        - if: era.get('status:71:熬夜') > 0
          random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「竟然因为熬夜而差点迟到了，让%称呼%担心了，对不起。」
        - if: era.get('status:71:熬夜') > 0
          random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「对不起，%称呼%，昨晚因为看历史书过于沉迷，不小心睡的有点晚了。」
        - if: era.get('status:71:熬夜') > 0
          random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「非常抱歉，虽然昨天是准时躺下了，但是却因为身体不适而没有睡好。」
    - if: era.get('love:71') >= 75
      random: true
      lines:
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「今天也一起努力描绘属于我们的光辉吧，亲爱的🎵」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「这样宁静的夜晚会想要散步呢，亲爱的可以陪我一起吗？」
        - random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「亲爱的早上做的浓汤，非常的温暖，喝完后感觉身体的每一个细胞都在欢呼呢。」
        - if: era.get('status:71:熬夜') > 0
          random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「竟然因为熬夜而迟到了，亲爱的，对不起。」
        - if: era.get('status:71:熬夜') > 0
          random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「亲爱的对不起，昨晚看历史书又沉迷进去了，不小心睡的有点晚了。」
        - if: era.get('status:71:熬夜') > 0
          random: true
          lines:
            - color: %代表色%
              content:
                - fontSize: bold
                  content: 目白阿尔丹
                - 「昨晚身体不适让亲爱的辛苦了，午休的时候，要一起补会觉吗？」

回合结束:
  - if: era.get('status:71:沉睡') === 0 && era.get('status:71:马跳S') === 0
    random: true
    lines:
      - if: era.get('love:71') < 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontSize: bold
                content: 目白阿尔丹
              - 「今天也辛苦你了，%称呼%，明天见！」
          - 和 目白阿尔丹 一天的训练结束后%你%站在宿舍楼门口外面，目送着阿尔丹回到宿舍。
          - %你%看着微笑着挥手告别的的目白阿尔丹，也微笑着回以同样的动作。
      - if: era.get('love:71') >= 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontSize: bold
                content: 目白阿尔丹
              - 「今天也辛苦你了，亲爱的🎵 让我来给你做个按摩放松下吧？」
          - 和 目白阿尔丹 一天的辛苦结束后，目白阿尔丹 来到了%你%的身后力度合适地按摩起来%你%的肩膀。
          - 「多谢了，阿尔丹，你今天也很辛苦，等会换我来帮你按摩吧。」
          - color: %代表色%
            content:
              - fontSize: bold
                content: 目白阿尔丹
              - 「那就拜托你咯，亲爱的🎵」
  - if: era.get('status:71:沉睡') > 0 || era.get('status:71:马跳S') > 0
    random: true
    lines:
      - if: era.get('love:71') < 75
        random: true
        lines:
          - if: era.get('status:71:马跳S') === 0
            content: 「看来今天让%她%有点努力过头了呢。」
          - %你%轻轻拍了拍%她%的肩膀。
          - color: %代表色%
            content:
              - fontSize: bold
                content: 目白阿尔丹
              - 「呜……～唉？我怎么不小心睡着了！」
          - 「今天的训练结束了哦，辛苦了，我送你回去。」
          - color: %代表色%
            content:
              - fontSize: bold
                content: 目白阿尔丹
              - 「谢谢您，%称呼%，麻烦你了。」
          - %你%陪着偶尔打着哈欠的 目白阿尔丹 回到了%她%的宿舍楼，看到 樱花千代王 接手后才放心回去。
      - if: era.get('love:71') >= 75
        random: true
        lines:
          - if: era.get('status:71:马跳S') === 0
            content: 「今天也辛苦你了呢，阿尔丹」
          - 望着在%你%身旁安心熟睡的目白阿尔丹，%你%小声说道。
          - 「愿你有一个好梦，晚安」
          - %你%在%她%早就留好的位置旁躺下，目白阿尔丹感知到%你%躺下后很快就抱住了%你%。
          - color: %代表色%
            content:
              - fontSize: bold
                content: 目白阿尔丹
              - 「晚安，女神们送给我的珍宝。」

闲聊:
  - if: era.get('cflag:71:干劲') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「不知为何，觉得现在可以跑去任何地方……不，我想要奔跑。试着超越自己的极限……！」
  - if: era.get('cflag:71:干劲') === 2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「一分、一秒、一瞬间……觉得自己能在细微的时间集中精神。这样的话，一定就……」
  - if: era.get('cflag:71:干劲') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「一、二、三……呼。体温、心跳、肌肉狀況都很好。那么，今天要做些什么呢？」
  - if: era.get('cflag:71:干劲') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「腿部的狀況绝佳。可以全力以赴进行训练……光是这样就让人感到很痛快呢。」
  - if: era.get('cflag:71:干劲') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「平凡无奇的一天对我来说是最棒的一天……不过「现在」要往更高的境界迈进才行呢。」
  - if: era.get('cflag:71:干劲') === 0
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「珍惜眼前的每一刻……仔细且用心地进行训练吧。」
  - if: era.get('cflag:71:干劲') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「脚步很沉重……但不能因為这样就心灰意冷。要相信自己……累计下来的修炼。」
  - if: era.get('cflag:71:干劲') === -1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「呼……也是会有这种时候呢。先不要着急……要不要喝杯茶放松一下？」
  - if: era.get('cflag:71:干劲') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「%称呼%……考率到今天的整体性……可能需要调整一下……训练项目……」
  - if: era.get('cflag:71:干劲') === -2
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「現在的我是否能留下活过的证据……不，千万不可以着急。深呼吸……冷静下来，深呼吸……」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「我做了管家婆婆亲自传授的手工点心給你。希望能让你感受那个温暖的滋味。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「住院时梦想的那套服裝……如今像这样穿在身上。……真想让那天的我看看呢。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「胸口的胸针是参考父亲送给我的项链设计的……只要摸着它就会感到安心。」
  - if: era.get('cflag:69:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「每天早上叫醒%阿尔丹称呼千代王%这样平凡的日常生活……对我来说也是幸福的时刻。」
  - if: era.get('cflag:64:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「刚才遇见抱着向日葵花束的🎵%阿尔丹称呼善信%……%她%的笑容就像向日葵一样🎵」
  - if: era.get('cflag:86:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「前几天找到%阿尔丹称呼高峰%小時候的照片。小小年纪就这么出色美丽……实在是非常耀眼。」
  - if: era.get('cflag:21:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「你知道吗？%阿尔丹称呼玉藻十字%交涉的方式……能从中窥见人情世故。简直就像在看落语一样。」
  - if: era.get('cflag:69:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「每天早上叫醒%阿尔丹称呼千代王%这样平凡的日常生活……对我来说也是幸福的时刻。」
  - if: era.get('cflag:72:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「%阿尔丹称呼八重无敌%很美呢，话是这么说……呵呵，有两位同学的脸颊已经染上了樱花般的红晕呢。」
  - if: era.get('cflag:6:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「%阿尔丹称呼小栗帽%吃东西的样子总是让我忍不住看入迷。我也因为这样有多吃一点。」
  - if: era.get('cflag:32:招募状态') === 1
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「我有和%阿尔丹称呼速子%一起举办夜晚茶会，不过红茶却会发光……呵呵，是个让人惊讶的体验🎵」

送礼:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「谢谢你的礼物，过几天我会为你准备好对应的回礼的，请敬请期待哦🎵。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「送给我的礼物？谢谢，我会好好珍惜的。」

外出神社祈福:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「呵呵，和%称呼%一起来神社祈福，这样的感觉和家里人来完全不同呢。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「一想到特雷森的历史有许多马娘因为伤病退役，就感到害怕，但是还是想要在有限的时间里刻下我自己的色彩呢。」

河边钓鱼:
  - random: true
    lines:
      - %你%拿出钓竿扔向河里，等着鱼儿上钩，目白阿尔丹 坐在一旁安静地陪着%你%。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「哇哦，恭喜%称呼%，钓到了这么大一条鱼。」

散步:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「像这样在河边散步，这样平静且普通的日常也让我愉悦呢。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「河边的微风吹拂着我，真是让人心情舒畅呢，下次来这里一起慢跑吧，%称呼%。」

街机厅:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「加油哦，%称呼%，如果代币不够了的话我这里还有哦。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「想要我的玩偶吗？我也很想要呢，让我们一起来努力吧，只要有你在我身边，我感觉什么都可以做的到呢。」

抽奖:
  - color: %代表色%
    content:
      - fontSize: bold
        content: 目白阿尔丹
      - 「呵呵，不知道能抽到什么奖项呢🎵」

卡拉OK:
  - 因为要做胜者舞台的练习，于是%你%与阿尔丹来到了卡拉OK。
  - color: %代表色%
    content:
      - fontSize: bold
        content: 目白阿尔丹
      - 「高越苍穹，梦扬于手，犹如生命燃烧灿烂闪耀～🎵」
  - %她%动听且轻柔的声音让%你%不自觉的沉浸在其中，逐渐忘记了时间。

看电影:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「呵呵，这些演员的表现很有趣呢，而且鬼先生也很有想法呢。」
      - %你%因为这部恐怖片突然出现的惊吓不自觉的绷紧了身体，而一旁的阿尔丹却看得津津有味。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「悬疑类电影嘛？看到里面的斗智斗勇，真是让人愉悦，我偶尔也会代入进主角的身份去推理出凶手呢。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「爱情电影吗？哼哼🎵和你一起看的话，我可是很期待呢，这样也可以更好的了解亲爱的对爱情的一些看法呢。」
      - 阿尔丹伸手挽住%你%的胳膊露出幸福的笑容。

吃饭:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「呵呵，%称呼%推荐的地方很不错呢，不自觉的吃的有点多了呢」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「嗯嗯～这家店的炖胡萝卜汤真是别有一番风味，谢谢你的招待，%称呼%。」

约会:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「不好意思～让你久等了，%称呼%，今天我们要去哪里呢？」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「%称呼%一直以来帮了我很多，这次请让我也帮%称呼%做些什么吧。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「像这样和不是家里人一起在街上闲逛还是第一次，这种感觉很奇特呢。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - 阿尔丹挽着%你%的胳膊走在街上，四周投来的各种各样的目光，让%你%有些不自然，但是阿尔丹反而笑的十分开心。
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「呵呵～亲爱的🎵 紧张了？」
      - 像是发觉到了你的紧张，阿尔丹坏笑的问完后反而搂的更紧了。

逛商场:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「你看看我这一身怎么样？%称呼%。」
      - 阿尔丹换好衣服后走到你的面前保持着优雅地站姿向你问到。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「那边的点好像有在做打折活动哦？一起去看看吧。」

枯树洞:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「……我……我想要证明……证明我自己不会输给我姐姐！我想要证明给所有人看，我不只是那位的妹妹！而是我自己-目白阿尔丹！」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「我要突破自己的极限，去看到我未曾看到的景象，我想要绽放出属于我自己的光芒！」

中庭约会:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「呵呵，在校园里面牵着手，让大家都看到，这种感觉很奇妙呢。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「%称呼%？感觉紧张过头了哦，来～跟我一起做深呼吸，放松下吧。」

吃便当:
  - random: true
    lines:
      - 今天与阿尔丹一起吃起了便当，阿尔丹特意也为%你%准备了一份。
      - 看着丰盛且精致的便当，%你%不禁感叹道阿尔丹以后一定能成为一名贤内助。
      - 因为%你%的话语阿尔丹微微侧过身子不让%你%注意到%她%羞红的脸颊。
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「亲爱的，啊——」
      - 自从跨越那道关系之后，%你们%之间就开始了互相喂饭。
      - 虽然吃饭的时间和以前比长了一些。
      - 但是%你们%彼此都无比珍惜着这段时光。

一起做饭:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「呵呵，这样一起做饭感觉非常奇妙呢。」
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「%称呼%居然会中系菜吗？之后可以教教我吗？」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「啊啦～没想到我和亲爱的已经这么有默契了，就像是几十年的老夫老妻了呢，呵呵🎵」

指导学习:
  - color: %代表色%
    content:
      - fontSize: bold
        content: 目白阿尔丹
      - 「不愧是%称呼%，居然这么简单的就可以讲明白，一定也付出过很多努力了吧。」

一起休息:
  - random: true
    lines:
      - 因为稍微有些困倦而休息了一下，结果却不小心睡着了。
      - 抬起头发现阿尔丹也躺在沙发上睡着了。
      - %你%将外衣轻轻盖在%她%的身上防止%她%着凉。
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「怎么样？亲爱的舒服吗？」
      - %你%躺在阿尔丹的膝上，%她%正在用棉签为%你%掏耳朵。
      - 头部感受到的柔软和%她%身上传来的幽香刺激着%你%的神经。
      - %她%感受到了%你%的窘迫，坏笑了一声拿开棉签对着%你%的耳朵轻轻吹了口气。

一起打游戏机:
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「居然还有这样的方法吗？好厉害。」
      - %你%突发奇想的想法取得了不错的效果，让身旁的阿尔丹赞叹不已。
  - random: true
    lines:
      - color: %代表色%
        content:
          - fontSize: bold
            content: 目白阿尔丹
          - 「总觉得和%称呼%很配合的来呢，这种感觉真的很不错呢。」
      - 很少接触电子游戏的阿尔丹和%你%一起在打一款合作游戏，却意外的很有默契。