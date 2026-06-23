# @file 高尚骏逸 - 地下室
# @author 無奈
first_time:
  sync: true
  lines:
    - 拍门声与求救声在狭小的空间中回响，得到冰冷的触感与沉默作为回应。
    - 在这暗室中待得越久，时间概念愈发模糊，只留无数疑问盘旋于脑海。
    -
    - 「咳咳……咳咳咳……」
    -
    - 抑制住用嗓过度的咳嗽声，%YOU% 希望尽量保持冷静。
    - 假设是受人绑架，正面冲突恐怕无法避免。
    - 或许现在需要整理思绪，稍作休息。

welcome:
  sync: true
  lines:
    - if: era.get('exp:89:监禁次数') === 1
      lines:
        - 冰冷的环境唤醒了沉睡的意识，%YOU% 的眼中模糊的映出了陌生的天花板。
        - 为寻找一丝熟悉感而游移的目光，捕捉到了一个小小的白色身影。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊……！太好了，%CALLNAME%！你醒了！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……身体……有什么不舒服的地方吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「因、因为不知道要用多少力气……被打晕过去，一定很痛吧……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……这里是？」
        -
        - 片刻的沉默。
        - 在茫然无措间，%YOU% 的目光与 %CHARA% 相撞。
        - 粘稠无光的蓝眸中，渗透出深深的歉意。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对不起……我不能告诉 %CALLNAME%。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……但、但是！我只是想和 %CALLNAME% 说说话，不会伤害你的……！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「所以说……%CALLNAME%，请你待在这里，哪里都不要去。」
    - if: era.get('exp:89:监禁次数') !== 1
      lines:
        - %YOU% 猛地睁开眼，熟悉的天花板意味着担心的事情已经成为现实。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「啊，%CALLNAME%，你醒了。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为什么……一副做错了事情的表情呢？」
        -
        - 沉重，浑浊，灰色的沉默。
        - 视线陷入那双蓝眸中的 %YOU%，在其中看到了因心虚而动摇的自己。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我并不是想要责怪 %CALLNAME%，会变成这样……全都是我的错。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一直以来，是我太依赖 %CALLNAME% 了……总是向你撒娇……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「因为不忍心看到最喜欢的 %CALLNAME% 伤心的模样……一直在逃避。」
        -
        - 将这一切尽收眼底的 %CHARA% 轻轻摩挲 %YOU% 的脸颊，重新开口。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「但这一次……无论内心多么痛苦，我都要努力，都要加油。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不再依赖别人，不再哭泣，不再逃避。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你的身体，气味，你的体温，我也一样喜欢。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，我爱你。」

flatter_after_strike:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……包、包扎好了，柜子……没想到会倒下。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呐，%CALLNAME%……为什么要保护我呢？明明什么都不做就好了……」
  -
  - 无法说出真相的 %YOU%，谎称这是训练员的职责。
  - 从 %CHARA% 满是愧疚的表情来看，%YOU% 的行为似乎很大程度动摇了%SEX%的决心。

flatter_after_battle:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……要、要休息一下吗，最近……好像很疲惫的样子。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我、我来给你做膝、膝枕……」
  -
  - 顺从 %CHARA% 害羞的要求，%YOU% 缓缓枕上了%TEEN%温暖、柔软、饱满的大腿。
  - 然而问到原因时，却得到了「吃饭时总是睡着」作为答案，这让 %YOU% 有些摸不着头脑。

flatter_no_escape_first:
  - 对于 %YOU% 强打精神的讨好，%CHARA% 似乎很是受用，小%UMA%乖巧的坐在床边，像往常一样腼腆的笑着。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「只有我们两个人的房间…不知道为什么，总觉得……好怀念啊。」
  -
  - 穿透了时间的语调，蕴含的是不容忽视的寂寞。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「以前我一直以为，我们两人之间的日常会一直持续下去。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是从什么时候开始呢……%CALLNAME% 的身边……出现了除我以外的人。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「因为嫉妒……我对你做出了无法原谅的事情……我们的关系，已经无论如何都回不到过去了吧……」

flatter_no_escape_second:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「其实……我也后悔过，如果不把 %CALLNAME% 监禁起来就好了。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……但是……无论如何都不想离开你。」
  -
  - %CHARA% 默默低下头，帽檐挡住了表情，但无法掩盖颤抖的指尖。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「剥夺你的自由，把你关在这里。我知道你肯定会讨厌这样的我……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是，我也知道……如果什么都不做，你可能永远都不会回来看我了……！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「求你了……%CALLNAME%……让我留在你的身边……」

flatter_no_escape_third:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呐、%CALLNAME%……笑一笑啊……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「像这样……看着你一天比一天憔悴……我会受不了的……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「再像以前那样、摸摸我的头……告诉我你喜欢我的优点啊……」
  -
  - %YOU% 强行挤出一个笑容，然而 %CHARA% 看到后却露出了崩溃的表情。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不是的……不是这样的……我想要的……不是这样的你……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……早知道……事情、会变成这样……呜……呜呜……呜呜……」

flatter:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……%CALLNAME%，没必要勉强自己和我说话也可以的……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「现在……到底该怎么做……才能留下你呢……？」
  -
  - 曾经努力维系的大人的尊严，与身体一同被轻易地推倒。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……能被你喜欢的话……只有身体也好。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……我……会好好珍惜你的❤️」

strike_success:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%，我回……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「诶——唔唔！」
  -
  - 打开门后却没有看到 %YOU%，%CHARA% 一时愣在了原地。
  - 而躲在门后的 %YOU% 看准时机，用被安眠药粉浸湿的布片捂住了 %CHARA% 的口鼻。
  - 怀中的%CHILD%没挣扎几下，很快就安静了下来。
  -
  - 「唉……」
  -
  - 计划得逞的 %YOU% 看了一眼自己撕下大半的衣袖，调整呼吸，叹了口气。
  - 虽然风险很大，但这的确是唯一一个不会对%CHILD%的身体不会造成伤害的办法。
  -
  - 「好好休息一下吧。」
  -
  - 留意到怀中的%CHILD%脸上用淡妆遮掩的黑眼圈，是时候将%SEX%从罪恶感中解放出来了。
  - 将 %CHARA% 瘫软的身体安置在床上，%YOU% 写下一张字条，希望能够向她当面道歉。
  - 做完这一切后，%YOU% 用 %CHARA% 口袋中的钥匙打开门，逃离了这所由爱铸造的监狱。

strike_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嘿咻……嘿咻……」
  -
  - 紧盯毫无防备地整理着房间的 %CHARA% 的背影，%YOU% 万分紧张，瞄了一眼布下的陷阱。
  - 如果有人在餐桌边的椅子坐下，椅子散架的同时，其身后的衣柜将会倒下。
  - 这样一来，想必%UMA%也会暂时失去行动能力吧。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「为 %CALLNAME% 铺床，总觉得……像那个……家、家人一样……诶嘿嘿。」
  -
  - 只需要往前一点——
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我经常一个人想象……自己和 %CALLNAME% 成为家人的样子。」
  -
  - 在那把凳子上坐下——
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不过从监禁 %CALLNAME% 的那一刻起，想象已经不可能成为现实了吧……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那个，%CALLNAME%……我准备了料理——」
  -
  - 「——喂！！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「——啊、%CALLNAME%！」
  -
  - 骨节的脆响与%TEEN%的呼喊声组成尖锐的合鸣。
  - 推开了 %CHARA%，代替%SEX%被砸在衣柜下面的 %YOU%，却莫名松了一口气。

battle_fail:
  - if: d.time <= 3
    content: %YOU% 用铁丝划开自己的袖口，从衬衣的夹层中取出满满一包药粉。
  - if: d.time > 3
    content: %YOU% 把手伸进莫名多出一个大洞的袖口，从衬衣的夹层中取出一小包药粉。
  - 在训练员会议上发放的「对%UMA%用安眠药」样品，没想到真的有用到的一天。
  - 讲师说这个药可以让%UMA%失去施暴时的记忆，以便回到正常的搭档关系。
  - 一边啧啧感叹「真是个伟大的发明」，一边确认 %CHARA% 寻找餐具的背影，
  - if: (t = Math.random() < 0.1)
    lines:
      - 「啊……啊嚏！！」
      -
      - 然而就在 %YOU% 拿出药粉的同时，一根 %CHARA% 的毛发飘过你的鼻尖。
      - 刚刚不小心吸进去了一点……但还好这是「对……%UMA%用……安……眠……」
  - if: "!t && era.get('relation:89:0') >= 100"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那个……我、我来喂 %CALLNAME% 吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊——啊～」
      -
      - 将食物递到 %YOU% 嘴边的 %CHARA%，虽然是意料之外的事态，但无伤大雅。
      - 一想到这是「对%UMA%用」的特效药，%YOU% 没有拒绝。
  - if: "!t && era.get('relation:89:0') < 100"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我、我开动了……」
      - 「我开动了。」
      -
      - %YOU% 一边构思着让 %CHARA% 失去行动能力后的计划，一边将一勺料理送入口中。
  -
  - 「……？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「诶……？%CALLNAME%……？」
  -
  - 被吸入般的睡意袭来，思绪一步坠入深海。
  - 开什么玩笑……难道「对%UMA%用」指的是「药效强到对%UMA%也能生效」吗……？
  - 在内心问候着发明这种药品的人，%YOU% 瘫软的倒在 %CHARA% 的怀中，无法抵抗地沉入了梦乡。

battle_escape:
  - 抱起%CHILD%的身体放在床上，%YOU% 看着 %CHARA% 天使般的睡脸，叹了口气。
  - 曾几何时，%SEX%总是带着天使般的笑容，而改变这一切的人正是 %YOU% 自己。
  - 厚重的铁门已经被推开，%TEEN%的一切努力即将付之一炬。
  -
  - 「抱歉，%CALL_89%。」
  -
  - 向 %CHARA% 道歉后，%YOU% 转身准备离开，却被扯住了袖口。
  - 从被抓住的袖子那里，能感受到%CHILD%的小手正不安地颤抖着。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不要走……%CALLNAME%……」
  -
  - 本应熟睡的小%UMA%在梦中喊出了 %YOU% 的名字。
  - %SEX%在做一个什么样的梦呢？
  - 梦里的 %YOU%，同样也会选择弃%SEX%而去吗？
  -
  - 「……」
  -
  - 没有时间在此停留了。
  - 如果再被 %CHARA% 哭着挽留，%YOU% 不知道自己会做出什么样的决定。
  - %YOU% 轻轻为熟睡的 %CHARA% 盖好被子，转身离开了地下室。

battle_prison:
  - 看着在床上安睡的 %CHARA%，%YOU% 暗自庆幸准备了对%UMA%用的安眠药。
  - 尽管称之为安眠药，但持续时间其实很短，效果在五分钟左右就会消失。
  -
  - %YOU% 连忙凑近锁孔，然而直到手中的铁丝弯曲到极限，铁门依旧不为所动。
  -
  - 「啧，这该怎——」
  -
  - 无端地，后颈传来巨大的冲击。
  - 整个人直直摔向地面，却像是趴上羽绒被一般，意识朦胧地远去。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……%CALLNAME%，对不起……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我也不喜欢这样……我也想做个好孩子，让你喜欢上我。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「看到你痛苦的表情……我也会很难过，就像现在这样。」
  -
  - 模糊中，%YOU% 对上了那双满载愧疚的眼眸。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「一定是因为%CALLNAME% 有很多事情……想要负起责任……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「让我……帮你忘掉那些痛苦的事情吧————」
  -
  - %YOU% 的意识不断下沉，而 %CHARA% 的声音越来越远……越来越近。

find_escape_out:
  sync: true
  lines:
    - 在一次不经意的尝试中，铁丝似乎触动了锁内的某个部分。
    - %YOU% 握紧铁丝，用力一转，只感觉锁体内部传来了一阵顺畅的转动感。
    - %YOU% 在心中欢呼着推开铁门，来到一条狭窄的通道，只要穿过这——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%YOU%，你要去哪里？」
    -
    - 肌肤发泡般的恶寒传遍全身，从脖子到后背都被冷汗打湿。
    - 从通道另一端传来的声音微弱的几乎听不到，其中的意思却强烈地传递过来。
    - 步步逼近的%UMA%并非在问 %YOU%，只是在了解一切的基础上进行『确认』而已。
    -
    - 「这、这也是为了 %CALL_89%……」
    -
    - if: (t = era.get('exp:89:监禁次数')) === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「如果你是真心为了我好……就不要用这句话来回答我啊。」
        -
        - 被逼退回门内的 %YOU%，近在咫尺的爱马，不好的预感在心中弥漫开来。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对我来说，%CALLNAME% 才是最重要的，是我的一切……」
    - if: t !== 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……你打算用这种话来糊弄我吗……」
        -
        - 被逼退回门内的 %YOU%，近在咫尺的爱马，不好的预感在心中弥漫开来。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我……虽然不像 CALL_91 那样聪明，但也不是会被轻易欺骗的傻瓜。」
    -
    - 咔哒——锁芯转动的冰冷声音在寂静的房间里回荡。
    - 在这个不会再与外界产生任何接触的地方，%YOU% 认命般闭上了眼睛。

find_escape:
  sync: true
  lines:
    - 咔嚓，咔嚓——
    -
    - 「啧……」
    -
    - 好不容易找到的一根铁丝断在了锁芯。
    - 无次数尝试中 %YOU% 早已尝惯失败，但留下的碎片无疑将成为试图逃离的证据。
    -
    - 「这个……拔不出来……！」
    -
    - 是什么时候开始出错了呢？
    - 到底为什么会走到这一步呢？
    - 脑海中，小%UMA%那天使般的笑容如幻影般浮现。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%？」
    -
    - 微弱的声音定住了 %YOU% 的动作，宣告一时兴起的越狱游戏到此结束。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起，%CALLNAME%……」
    -
    - %YOU% 甚至不敢回头确认%CHILD%的神情，只是任凭自己被拖回床笫之上。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都是我的错…没有照顾好 %CALLNAME%，让你产生了离开的想法。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……必须让 %CALLNAME% 感受到我的心意…」

get_up:
  sync: true
  lines:
    - %CHARA% 呼喊着 %YOU% 的名字于梦中惊醒，徬徨失措地搜寻着 %YOU% 的身影。

back_basement:
  sync: true
  lines:
    - if: d.start
      lines:
        - 正当 %YOU% 寻找反抗手段时，门锁处突然传来『咔哒』一声。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……你醒了……」
        -
        - 然而出现在门口的身影，远非想象中的凶恶歹徒。
        - 小%UMA%背过手，锁芯伴随一声脆响，向反方向再次转动。
        - 耳罩下的小巧耳朵随之一抖，与它的主人步步逼近，止步于 %YOU% 的身前。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那里……很痛吧……」
        -
        - %TEEN%向 %YOU% 的后脑伸出颤颤巍巍的小手，悬停片刻，却转而压下帽檐。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……对不起……我会解释清楚的……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「如果可以的话……我也不想这样做……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为了避免伤害 %CALLNAME%……这一次……可以不要再离开我身边吗……」
    - if: '!d.start'
      lines:
        - if: true
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「那个……%CALLNAME%，我回来了。」
            -
            - 推开铁门现身的小%UMA%手中提着一个纸袋，包装表明里面是『光朝』的肉包。
            - 面对 %YOU% 一起享用的邀请，%TEEN%只是微微摇头。
            - 是吃过了吗？猜测原因的 %YOU%，没来得及咬下第一口，%TEEN%的肚子却先传出了咕咕声。
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……%CALLNAME% 被监禁在这里，我却一个人享用肉包……什么的。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「想到这里……总觉得……什么都吃不下去。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「不用在意我也可以的……只要 %CALLNAME% 开心……我就满足了……」
        - if: true
          random: true
          lines:
            - 隐约听到外面的雨声，%YOU% 深吸周围湿冷的空气，呼出夹杂焦虑的叹息。
            - 厚重的门突然被推动，紧随其后的是水珠不断落在地上的啪嗒声。
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我回来了……%CALLNAME%。」
            -
            - 湿透的校服，有一块没一块的贴着小%UMA%的身体。
            - 海军帽被雨水染成深色，原本蓬松帅气的短发粘在冻红的脸颊。
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……这样的天气……这里一定很潮湿吧……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「我……来给 %CALLNAME%……掏掏耳朵吧……诶嘿嘿……」
            -
            - 脚边已经积攒出水坑的高尚骏逸，却是一副事不关己的态度。
            - %YOU% 强硬地将宛如傀偶的%TEEN%拉到床边，为%SEX%披上被褥。

out:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔嗯……？好像……要到上课的时间了……」
    -
    - 昏昏沉沉地抬起头，手机屏幕的荧光映出了%TEEN%疲惫而苍白的面容。
    - 对%SEX%来说，想必无论心理还是生理上，都承受着相当大的压力吧。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……谢谢你……还愿意关心我……%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过……如果能让 %CALLNAME% 回心转意，这种程度……没关系的……」

ask_release_agree_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……嗯。」
  - 在听到 %YOU% 离开这里的请求后，%CHARA% 迟疑许久，最后缓缓点头。
  -
  - if: d.another > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「最近……CALL_OTHER 对我说……要把 %CALLNAME% 带去国外。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%SEX%说只要到了那里……就可以永远占有 %CALLNAME% 了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『永远』什么的……真的非常……非常有魅力。」
      -
      - %CHARA% 苦笑着。
      - 印象中，自从来到这地下室后，%TEEN%总是在苦笑着。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过……我还是不舍得离开这个充满回忆的地方。」
  - if: '!(d.another > 0)'
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「最近……CALL_90 和 CALL_91 似乎察觉到了什么，一直在劝我放弃。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我知道%THEY%是为了我好，但也说明……这里已经不安全了……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「再过不久，救援队……应该会发现这里吧。」
      -
      - %CHARA% 苦笑着。
      - 印象中，自从来到这地下室后，%TEEN%总是在苦笑着。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但是……我……并不是因为这个才放 %CALLNAME% 离开的。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「本来想着……就算只能得到一点点爱，哪怕要抛弃一切……都不会再放开你的手。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「就算要亲手弄坏 %CALLNAME%，也不想离开你的身边。」
  -
  - 说到这里，%CHARA% 不自觉的握紧了小小的拳头。
  - 但是与 %YOU% 目光接触后，%CHILD%渐渐松开了手。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……但是……这段时间，我总是回忆起和 %CALLNAME% 一起经历过的……各种各样的事情。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「原来……比起把 %CALLNAME% 绑在我的视线内——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我最喜欢的，是 %CALLNAME% 的笑容。」
  -
  - 说着，%CHARA% 从口袋中拿出了一串钥匙，那是见证你们相遇的信物。
  - %SEX%用颤抖的小手挑出其中一把，插入锁中。
  - 随着『咔哒』一声，那道沉重、压抑的锁，终于被解开了。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「如果这样做，还给你自由……你还会重新喜欢上我吗……？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……什么的，明明知道，这种事情是不可能的，却忍不住抱有期待……」
  -
  - %YOU% 注意到，%CHARA% 的双手正紧紧地抓着自己的裙摆。
  -
  - if: d.another > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「快走吧，%CALLNAME%……趁其他人没有回来。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不用担心我也可以……我……我不会有事的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「而且我这种人，根本不值得你担心……」
      -
      - 即便如此，%CHARA% 依旧为你推开了沉重的大门，催促 %YOU% 离开。
  - if: '!(d.another > 0)'
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我知道自己做出的事情……并不是道歉能够解决的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但是……对不起，%CALLNAME%。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「然后，再见了……%CALLNAME%。」
      -
      - 即便如此，%CHARA% 依然挤出了一个笑容，目送 %YOU% 离开。
  - acc: 1
    key: select
    content: 独自离开
    lines:
      - 「……！」
      -
      - 想要说些什么，但干渴的喉咙只允许嘴巴一张一合。
      - 即便再放心不下面前的 %CHARA%，身体和精神却已经到了崩溃的边缘。
      - 或许这次的行为只是一时冲动……但看到%CHILD%就下意识感到恐惧的内心，毫无疑问是破镜难圆的证明。
      - 或许重见天日后帮%CHILD%瞒下这次暴行，就是 %YOU% 唯一能为%SEX%做的事情了。
      -

      - （该死……）
      -
      - 咒骂着不争气的自己，%YOU% 扶着墙壁，艰难地走出了地下室。
  - if: d.leave_together
    acc: 2
    content: 邀请%SEX%一起离开
    lines:
      - 视线在铁门与%CHILD%之间来回移动，%YOU% 在心中默默有了决定。
      -
      - 「%CALL_89%……还记得你的梦想吗？」
      -
      - 从 %CHARA% 的态度看来，这次的过激行为只是一时冲动所致。
      - 犯错是人之常情，身为大人，需要给%SEX%一个重新来过的机会。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶……？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我、我的梦想……」
      -
      - %CHARA% 吞吞吐吐地迟迟说不出口，和刚与%SEX%相遇时如出一辙。
      - 当时实现%CHILD%梦想的约定，可不能仅是这样就轻易放弃。
      -
      - 「让我们继续实现那个梦想吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……诶？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那是说……我、我还可以继续留在 %CALLNAME% 身边吗？」
      - 「当然了，%CALL_89% 是我的爱马。」
      -
      - 听到这番话，%CHARA% 先是震惊，转而露出了一副耿耿于怀的表情。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但是……但是我、我可是做了伤害 %CALLNAME% 的事情啊！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「而且 %CALLNAME% 消失了这么久……大家一定已经——」
      -
      - %CHARA% 的话说到一半就被吸气声吞掉了。
      - 因为 %YOU% 从正面握住了%CHILD%的双手，举在胸口。
      -
      - 「你什么都没做，我来做证。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……！」
      - 「既然是本人说的，没有什么比这更有说服力的了吧？」
      -
      - %YOU% 像之前做过的那样，将 %CHARA% 的脸埋在自己的胸口，避免%SEX%思考那些不愉快的事情。
      -
      - 「谁都做过噩梦，只是 %CALL_89% 的睡相有点差。」
      - 「梦醒之后，一切都结束了，就这样而已。」
      - 「说到底，逼迫 %CALL_89% 做出这种事情的我才是罪魁祸首……你愿意原谅我吗？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……%CALLNAME%……！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜呜呜……呜呜呜啊啊啊……」
      -
      - %CHARA% 在 %YOU% 的怀中，不断地重复着「我愿意」，哭了很长一段时间。
      - 冷静下来后，%YOU% 牵起%CHILD%的手，走出了地下室。

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯……我会放 %CALLNAME% 离开的。」
  -
  - 在 %YOU% 的不懈恳求下，%CHARA% 沉默良久后，终于松了口。
  - 但很快，那双帽沿下的眼睛紧盯着 %YOU%，说出了自己的要求。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但是……这一次，%CALLNAME% 一定要认真看着我哦。」
  -
  - 没有任何犹豫，对于%TEEN%提出的条件，%YOU%再三保证，绝对不会再犯相同的错误。
  - 尽管是毫无意义的誓言，%CHARA% 却依旧十分受用，微微点了点头。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嗯……我相信 %CALLNAME%。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但这一次……我不会再让 %CALLNAME% 离开我的视线了。」
  -
  - 如获大赦的 %YOU% 在听到这句话后，知道事情还远没有结束。
  - 带着对未来的担忧……以及身后的视线，%YOU% 走出了地下室。

ask_release_reject_first:
  - if: d.ask_time <= 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不行——」
      -
      - 拒绝过后，欲言又止的%TEEN%低下了头。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「再给我一点时间……拜托了……%CALLNAME%……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「给我一个……让你重新喜欢上我的机会……」
      -
      - %CHARA% 说着抱住了 %YOU%
      - 比起撒娇，力量更多传达着束缚的意味。
      - 不知道该作何反应的 %YOU%，静静地等待着小%UMA%心满意足的那一刻。
  - if: d.ask_time > 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不行——」
      -
      - 拒绝过后，%TEEN%的眼眶渐渐泛红。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「像这样把%CALLNAME%监禁在这里…你一定很恨我吧……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但是，如果放你离开，我可能就再也见不到 %CALLNAME% 了啊……！」
      -
      - %CHARA% 说着抱住了 %YOU%，将脸埋在 %YOU% 的胸口。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那样不行…如果连远远看着都不被允许，我不知道自己会变成什么样子……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……求你了，%CALLNAME%……不要丢下我……」
      -
      - 被 %CHARA% 哭着挽留，但 %YOU% 知道事情从来就没有过商量的余地。
      - 于是 %YOU% 回抱着%SEX%，直到%SEX%恢复冷静。

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不行。」
  -
  - 离开的请求换来了斩钉截铁的拒绝。
  - 看到%TEEN%不容争辩的表情，%YOU% 知道，能做的事情已经非常有限了。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我知道，%CALLNAME% 之后肯定会提高警惕……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「离开这里后……就很难再找到你了。」
  -
  - %CHARA% 说着抱住了 %YOU%
  - 比起撒娇，力量更多传达着束缚的意味。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这一次，不会让你离开我的视线了。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……为了独占你，我不知道自己会做出什么事情。」

ask_time:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……！我……我现在就看……那、那个……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「现在是%TIME%……打乱了 %CALLNAME% 的计划吧……对不起……」