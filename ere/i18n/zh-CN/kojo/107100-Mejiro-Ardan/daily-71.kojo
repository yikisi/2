# @file 目白阿尔丹 - 日常
# @author 洛洛
good_morning:
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「看着大家为梦想拼搏的身姿，真的是非常耀眼呢。」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今天商店街好像有什么活动，%CALLNAME%，要一起去看看吗？」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呵呵，%CALLNAME%，看到你就让我很是安心呢。」
        # STATUSNAME:1 = 熬夜
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「竟然因为熬夜而差点迟到了，让%CALLNAME%担心了，对不起。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「对不起，%CALLNAME%，昨晚因为看历史书过于沉迷，不小心睡的有点晚了。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「非常抱歉，虽然昨天是准时躺下了，但是却因为身体不适而没有睡好。」
    - if: era.get('love:71') >= 75
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今天也一起努力描绘属于我们的光辉吧，亲爱的🎵」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「这样宁静的夜晚会想要散步呢，亲爱的可以陪我一起吗？」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「亲爱的早上做的浓汤，非常的温暖，喝完后感觉身体的每一个细胞都在欢呼呢。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「竟然因为熬夜而迟到了，亲爱的，对不起。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「亲爱的对不起，昨晚看历史书又沉迷进去了，不小心睡的有点晚了。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「昨晚身体不适让亲爱的辛苦了，午休的时候，要一起补会觉吗？」

select:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:71:10') === 0 && era.get('status:71:39') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            # CFLAGNAME:48 = 育成回合计时
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「贵安，%CALLNAME%，今天也一起加油吧。」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%，今天商店街新开了一个咖啡厅，等训练结束后一起去品尝下吧。」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「前几天找到了我和姐姐小时候的照片，真是令人怀念呢。」
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「早上好，%CALLNAME%，最近过得如何？」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%，有段时间没见了呢，不过看起来您那边一切安好。」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%，好久不见，真的非常感谢您那时候对我的支持和帮助。」
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「早上好，%CALLNAME%，要我为您准备一杯提神醒脑的红茶吗？」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%，下次休假的话要不要和我一起去目白家的避暑胜地呢？」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%，看起来很疲劳呢，让我来为你按摩下，好好放松下身体吧。」
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「亲爱的，今天早饭想吃什么呢？就让我为亲爱的准备好吧🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「亲爱的最近看起来有些疲惫呢，来～这是给亲爱的膝枕哦，就躺在我的怀里好好休息下吧🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「呵呵，和亲爱的你在一起的每一天都是这么的幸福，和你相遇才是三女神对我最大的祝福呢🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「亲爱的这样逞强可不行哦，嘿🎵看我专属的劝阻亲爱的熬夜法。」
    - if: era.get('status:71:10') > 0 || era.get('status:71:39') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - 坐在沙发上睡着的阿尔丹，就像是一副瑰丽又静谧的画，让%YOU%的动作都轻柔了起来。
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - 疲惫的目白阿尔丹打了一个小哈欠。
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - 过于疲惫而依靠在%YOU%身上睡着的阿尔丹，就像是找到了归宿地的小鸟一样。
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - 阿尔丹在休息室里的床上安心地睡着。

select_in_birthday:
  #当前日期为训练员生日
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「生日快乐～%CALLNAME%，我已经为你准备好了生日派对呢。」
    - if: era.get('love:71') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「生日快乐～%CALLNAME%🎵我已经为你准备好了生日派对呢，在派对结束后还有只属于我们两人的庆祝会哟🎵」

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不愧是%CALLNAME%，居然这么简单的就可以讲明白，一定也付出过很多努力了吧。」

talk:
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:71:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不知为何，觉得现在可以跑去任何地方……不，我想要奔跑。试着超越自己的极限……！」
  - if: era.get('cflag:71:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一分、一秒、一瞬间……觉得自己能在细微的时间集中精神。这样的话，一定就……」
  - if: era.get('cflag:71:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一、二、三……呼。体温、心跳、肌肉狀況都很好。那么，今天要做些什么呢？」
  - if: era.get('cflag:71:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「腿部的狀況绝佳。可以全力以赴进行训练……光是这样就让人感到很痛快呢。」
  - if: era.get('cflag:71:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「平凡无奇的一天对我来说是最棒的一天……不过『现在』要往更高的境界迈进才行呢。」
  - if: era.get('cflag:71:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「珍惜眼前的每一刻……仔细且用心地进行训练吧。」
  - if: era.get('cflag:71:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「脚步很沉重……但不能因為这样就心灰意冷。要相信自己……累计下来的修炼。」
  - if: era.get('cflag:71:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼……也是会有这种时候呢。先不要着急……要不要喝杯茶放松一下？」
  - if: era.get('cflag:71:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……考率到今天的整体性……可能需要调整一下……训练项目……」
  - if: era.get('cflag:71:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「現在的我是否能留下活过的证据……不，千万不可以着急。深呼吸……冷静下来，深呼吸……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我做了管家婆婆亲自传授的手工点心給你。希望能让你感受那个温暖的滋味。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「住院时梦想的那套服裝……如今像这样穿在身上……真想让那天的我看看呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「胸口的胸针是参考父亲送给我的项链设计的……只要摸着它就会感到安心。」
  # CFLAGNAME:66 = 招募状态
  - if: era.get('cflag:69:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「每天早上叫醒%CALL_69%这样平凡的日常生活……对我来说也是幸福的时刻。」
  - if: era.get('cflag:64:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「刚才遇见抱着向日葵花束的🎵%CALL_64%……%SEX%的笑容就像向日葵一样🎵」
  - if: era.get('cflag:86:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「前几天找到%CALL_86%小时候的照片。小小年纪就这么出色美丽……实在是非常耀眼。」
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你知道吗？%CALL_21%交涉的方式……能从中窥见人情世故。简直就像在看落语一样。」
  - if: era.get('cflag:69:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「每天早上叫醒%CALL_69%这样平凡的日常生活……对我来说也是幸福的时刻。」
  - if: era.get('cflag:72:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_72%很美呢，话是这么说……呵呵，有两位同学的脸颊已经染上了樱花般的红晕呢。」
  - if: era.get('cflag:6:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_6%吃东西的样子总是让我忍不住看入迷。我也因为这样有多吃一点。」
  - if: era.get('cflag:32:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我有和%CALL_32%一起举办夜晚茶会，不过红茶却会发光……呵呵，是个让人惊讶的体验🎵」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「谢谢你的礼物，过几天我会为你准备好对应的回礼的，请敬请期待哦🎵。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「送给我的礼物？谢谢，我会好好珍惜的。」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呵呵，这样一起做饭感觉非常奇妙呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%居然会中系菜吗？之后可以教教我吗？」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊啦～没想到我和亲爱的已经这么有默契了，就像是几十年的老夫老妻了呢，呵呵🎵」

office_rest:
  - random: true
    lines:
      - 因为稍微有些困倦而休息了一下，结果却不小心睡着了。
      - 抬起头发现阿尔丹也躺在沙发上睡着了。
      - %YOU%将外衣轻轻盖在%SEX%的身上防止%SEX%着凉。
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「怎么样？亲爱的舒服吗？」
      - %YOU%躺在阿尔丹的膝上，%SEX%正在用棉签为%YOU%掏耳朵。
      - 头部感受到的柔软和%SEX%身上传来的幽香刺激着%YOU%的神经。
      - %SEX%感受到了%YOU%的窘迫，坏笑了一声拿开棉签对着%YOU%的耳朵轻轻吹了口气。

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「居然还有这样的方法吗？好厉害。」
      - %YOU%突发奇想的想法取得了不错的效果，让身旁的阿尔丹赞叹不已。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「总觉得和%CALLNAME%很配合的来呢，这种感觉真的很不错呢。」
      - 很少接触电子游戏的阿尔丹和%YOU%一起在打一款合作游戏，却意外的很有默契。

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……我……我想要证明……证明我自己不会输给我姐姐！我想要证明给所有人看，我不只是那位的妹妹！而是我自己-目白阿尔丹！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我要突破自己的极限，去看到我未曾看到的景象，我想要绽放出属于我自己的光芒！」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呵呵，在校园里面牵着手，让大家都看到，这种感觉很奇妙呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%？感觉紧张过头了哦，来～跟我一起做深呼吸，放松下吧。」

s_r_lunch:
  - random: true
    lines:
      - 今天与阿尔丹一起吃起了便当，阿尔丹特意也为%YOU%准备了一份。
      - 看着丰盛且精致的便当，%YOU%不禁感叹道阿尔丹以后一定能成为一名贤内助。
      - 因为%YOU%的话语阿尔丹微微侧过身子不让%YOU%注意到%SEX%羞红的脸颊。
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「亲爱的，啊——」
      - 自从跨越那道关系之后，你们之间就开始了互相喂饭。
      - 虽然吃饭的时间和以前比长了一些。
      - 但是你们彼此都无比珍惜着这段时光。

o_r_fishing:
  - random: true
    lines:
      - %YOU%拿出钓竿扔向河里，等着鱼儿上钩，%CHARA% 坐在一旁安静地陪着%YOU%。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哇哦，恭喜%CALLNAME%，钓到了这么大一条鱼。」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「像这样在河边散步，这样平静且普通的日常也让我愉悦呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「河边的微风吹拂着我，真是让人心情舒畅呢，下次来这里一起慢跑吧，%CALLNAME%。」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「加油哦，%CALLNAME%，如果代币不够了的话我这里还有哦。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「想要我的玩偶吗？我也很想要呢，让我们一起来努力吧，只要有你在我身边，我感觉什么都可以做的到呢。」

o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呵呵，不知道能抽到什么奖项呢🎵」

o_s_ktv:
  - 因为要做胜者舞台的练习，于是%YOU%与阿尔丹来到了卡拉OK。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「高越苍穹，梦扬于手，犹如生命燃烧灿烂闪耀～🎵」
  - %SEX%动听且轻柔的声音让%YOU%不自觉的沉浸在其中，逐渐忘记了时间。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呵呵，这些演员的表现很有趣呢，而且鬼先生也很有想法呢。」
      - %YOU%因为这部恐怖片突然出现的惊吓不自觉的绷紧了身体，而一旁的阿尔丹却看得津津有味。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「悬疑类电影嘛？看到里面的斗智斗勇，真是让人愉悦，我偶尔也会代入进主角的身份去推理出凶手呢。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「爱情电影吗？哼哼🎵和你一起看的话，我可是很期待呢，这样也可以更好的了解亲爱的对爱情的一些看法呢。」
      - 阿尔丹伸手挽住%YOU%的胳膊露出幸福的笑容。

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呵呵，和%CALLNAME%一起来神社祈福，这样的感觉和家里人来完全不同呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一想到特雷森的历史有许多马娘因为伤病退役，就感到害怕，但是还是想要在有限的时间里刻下我自己的色彩呢。」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呵呵，%CALLNAME%推荐的地方很不错呢，不自觉的吃的有点多了呢」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯嗯～这家店的炖胡萝卜汤真是别有一番风味，谢谢你的招待，%CALLNAME%。」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不好意思～让你久等了，%CALLNAME%，今天我们要去哪里呢？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%一直以来帮了我很多，这次请让我也帮%CALLNAME%做些什么吧。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「像这样和不是家里人一起在街上闲逛还是第一次，这种感觉很奇特呢。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - 阿尔丹挽着%YOU%的胳膊走在街上，四周投来的各种各样的目光，让%YOU%有些不自然，但是阿尔丹反而笑的十分开心。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呵呵～亲爱的🎵 紧张了？」
      - 像是发觉到了你的紧张，阿尔丹坏笑的问完后反而搂的更紧了。

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你看看我这一身怎么样？%CALLNAME%。」
      - 阿尔丹换好衣服后走到你的面前保持着优雅地站姿向你问到。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那边的点好像有在做打折活动哦？一起去看看吧。」

good_night_normal:
  sync: true
  lines:
    - if: era.get('status:71:10') === 0 && era.get('status:71:39') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今天也辛苦你了，%CALLNAME%，明天见！」
            - 和 目白阿尔丹 一天的训练结束后%YOU%站在宿舍楼门口外面，目送着阿尔丹回到宿舍。
            - %YOU%看着微笑着挥手告别的的目白阿尔丹，也微笑着回以同样的动作。
        - if: era.get('love:71') >= 75
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今天也辛苦你了，亲爱的🎵 让我来给你做个按摩放松下吧？」
            - 和 目白阿尔丹 一天的辛苦结束后，目白阿尔丹 来到了%YOU%的身后力度合适地按摩起来%YOU%的肩膀。
            - 「多谢了，阿尔丹，你今天也很辛苦，等会换我来帮你按摩吧。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「那就拜托你咯，亲爱的🎵」
    - if: era.get('status:71:10') > 0 || era.get('status:71:39') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('status:71:39') === 0
              content: 「看来今天让%SEX%有点努力过头了呢。」
            - %YOU%轻轻拍了拍%SEX%的肩膀。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「呜……～唉？我怎么不小心睡着了！」
            - 「今天的训练结束了哦，辛苦了，我送你回去。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「谢谢您，%CALLNAME%，麻烦你了。」
            - %YOU%陪着偶尔打着哈欠的 目白阿尔丹 回到了%SEX%的宿舍楼，看到 樱花千代王 接手后才放心回去。
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('status:71:39') === 0
              content: 「今天也辛苦你了呢，阿尔丹」
            - 望着在%YOU%身旁安心熟睡的目白阿尔丹，%YOU%小声说道。
            - 「愿你有一个好梦，晚安」
            - %YOU%在%SEX%早就留好的位置旁躺下，目白阿尔丹感知到%YOU%躺下后很快就抱住了%YOU%。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「晚安，女神们送给我的珍宝。」

cl_new_year:
  title: 新年
  lines:
    - 新年到的一天，四处洋溢着节日的欢乐。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，新年快乐～」
    - acc: 1
      content: 「新年快乐，阿尔丹。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，要一起去神社进行新年参拜吗？」
    - acc: 1
      content: 「当然～」
    - %YOU%接受了阿尔丹的邀请一起去拜访了神社，在互相许下了为对方着想的心愿后，又一起回去游玩了各种新年小游戏。

cl_valentine:
  title: 情人节
  lines:
    - 今天是情人节，怀揣恋心的少女们向自己心爱的人送上本命巧克力，当然还有普通好友的义理巧克力。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「猜猜我是谁🎵」
    - acc: 1
      content: 「阿尔丹。」
    - 当%YOU%准确地喊出了身后之人的名字后，遮挡%YOU%视野的手便移开了。
    - 阿尔丹来到了%YOU%面前，脸上挂着幸福的笑容，向%YOU%递出了一份包装精美的巧克力。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「情人节快乐，%CALLNAME%。这是我自己亲手做的，所以可能有不尽如人意的地方，请您品尝后好好休息一下吧。」
    - acc: 1
      content: 「谢谢你，阿尔丹。」

cl_fans:
  title: 粉丝感谢祭
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天是粉丝感谢祭，唔……我该怎么去欢迎我的粉丝们呢？%CALLNAME%」
    - 阿尔丹有些忐忑地询问着%YOU%该用什么方式来感谢粉丝比较好。
    - acc: 1
      content: 「用阿尔丹你自己的风格去捕获粉丝们的心吧！」
    - 听到%YOU%的回答后，阿尔丹露出了笑容，恢复起了自信。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……呵呵，%CALLNAME%的表达方式，一如既往地有趣……且激励着我呢。」
    - 之后的粉丝感谢祭顺利的结束了。

cl_temple_fair:
  title: 庙会
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天好像有庙会举办，听说深夜还有试胆大会，%CALLNAME%，一起去吧？」
    - 阿尔丹用期待地目光看着%YOU%，%YOU%实在无法拒绝。
    - 在一起逛过庙会，度过了一段快乐的时光后，%YOU%和%SEX%一起来到了试胆大会。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵，试胆大会，一定很有趣呢。」
    - acc: 1
      content: 「你看起来不害怕，并且很兴奋呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是的，因为身体原因我很少参与这些活动，但是现在，托%CALLNAME%您的福，我终于可以做到以前想做的事了呢。」
    - %YOU%牵着阿尔丹的手一起参与了试胆大会，阿尔丹在%YOU%身旁一直幸福地笑着，目光也时不时地放在%YOU%身上。

cl_halloween:
  title: 万圣节
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不给糖就捣蛋🎵」
    - 万圣节当天，%YOU%在办公室里听到了敲门声，打开一看原来是打扮成吸血鬼的阿尔丹。
    - 她穿着的衣服凸显出一丝诱惑与高贵，装成吓唬人的样子更是可爱。
    - acc: 1
      content: 「万圣节快乐，阿尔丹。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵，万圣节快乐，%CALLNAME%，怎么样？我这身打扮？」
    - 「很棒哦，我看的很入迷呢，完全被你俘获了呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵，那就让我来初拥你吧，%CALLNAME%🎵」

cl_christmas:
  title: 圣诞节
  lines:
    - %YOU%因收到了阿尔丹的邀请参加了在目白家举办的圣诞晚会。
    - 当夜晚来临时，%SEX%的朋友们都各自回家去了——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，和我一起进行『二次会』吧。」
    - acc: 1
      content: 「好的。」
    - %YOU%接受了阿尔丹的邀请和%SEX%一起在晚上的街道上散步，见识到了只有今天才能看到的景色。
    - %YOU%和阿尔丹一起来到了天文馆，并且一起观察了星星。
    - 在临近分别时互相约定了明年的圣诞节也要一起过的约定后，结束了这幸福美好的一天。

birthday:
  title: 生日
  lines:
    - 今天是目白阿尔丹的生日。
    - acc: 1
      content: 「生日快乐，阿尔丹。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你，%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今晚邀请大家一起举办一个快乐的派对吧。」
    - %YOU%同意了阿尔丹的想法并且去做好准备。
    - 晚上在家里举办一场盛大的生日派对，一直玩到了很晚。

#爱慕为依存
#限一次
birthday_dependence:
  title: 生日
  lines:
    - acc: 1
      content: 「生日快乐，阿尔丹。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你，亲爱的。」
    - 今天是阿尔丹的生日，%YOU%送上了生日礼物，并与阿尔丹的亲友们一起为%SEX%举办了一场生日聚会。
    - 看着阿尔丹幸福的笑容，%YOU%觉得%YOU%的辛劳都是值得的。
    - ………………
    - 聚会结束后，阿尔丹开始逐渐挥手告别参加的亲友们，当最后一个亲友离开后，阿尔丹走到%YOU%的身边握住了%YOU%的手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……亲爱的，我想要和你更多更多的创造『现在』的我们，可以……和我再陪我一会吗？只有我们两人。」
    - 之后目白阿尔丹牵着%YOU%的手来到了目白家的后山上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「亲爱的，这里是我晚上最喜欢待的地方哦，站在这里望向天空，可以看到非常璀璨的星空呢。」
    - 听到阿尔丹的话后，%YOU%抬起头望向夜空，远离了灯光的影响，夜空中的星星们清晰可见。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，宇宙就像是%UMA%们的历史，每一个闪烁的星星都像是一位在历史上留下璀璨光辉的%UMA%们，%THEY%是如此的闪耀而又美丽。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这也是我喜欢晚上来这里看星空的原因呢，好像沐浴在历史长河中每一位前辈们闪耀的光辉。」
    - acc: 1
      content: 「你已经有了属于你自己的光辉了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵，亲爱的说的不完全对呢，我认为我有的是属于你和我，我们两个人一起描绘出的光辉呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「互相映射的彼此，绽放出了属于我们……共同的……独一无二的光辉🎵」
    - 目白阿尔丹依靠在%YOU%的身上，与%YOU%一同仰望着这片星空，感受着彼此同步的心跳。
    - 在星空的画卷下是彼此依偎的两人。