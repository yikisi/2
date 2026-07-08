# @file 圣王光环 - 日常
# @author 牛蛙煲
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「不要多说闲话了，赶快开始吧。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「圣王的字典里，可没有困难两个字哦？」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「赶快行动起来吧，什么都不做的话可没法称之为一流。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「为了向那个人证明自己……」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「早饭？好好地吃过了呢，所以快些开始吧？」
    - if: era.get('status:61:熬夜') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「同宿舍的乌拉拉，不知道为什么突然要抱着我睡觉……」
    - if: era.get('status:61:熬夜') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「哈欠……什么？我才没有熬夜！」

select:
  sync: true
  lines:
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「今天就赐予你观看圣王训练的权利！」
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALLNAME%，请抬头挺胸，与我一起担负起一流的责任来！」
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「快把今天的安排告诉圣王！」
    - if: era.get('status:61:沉睡') > 0 || era.get('status:61:马跳S') > 0
      random: true
      lines:
        - 「圣王？」
        - 睡着了的圣王光环正以一种霸道的姿势霸占着训练员室的沙发。
        - 看样子短时间是没办法叫醒%SEX%了。

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「原来是这样……哦呵呵呵，看来圣王连理解力都是一流的！」
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
          - fontWeight: bold
            content: %CHARA%
          - 「胜利，只会属于一流的圣王！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今天的比赛，比任何人都要快，比所有人都要强，一定会赢的一流的%UMA%是谁？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「说什么呢？肯定会赢的啦！交给我吧！」

talk:
  - if: era.get('cflag:61:干劲') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「哦——呵呵呵！今天也是一流的一天呢！」
  - if: era.get('cflag:61:干劲') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今天圣王很高兴！就赐予%CALLNAME%陪着圣王的权利吧！」
  - if: era.get('cflag:61:干劲') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「感觉不错，%CALLNAME%，我们尽快开始吧。」
  - if: era.get('cflag:61:干劲') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我已经准备好了，%CALLNAME%还在等什么呢？」
  - if: era.get('cflag:61:干劲') === 0 && era.get('cflag:61:育成回合计时') < 3 * 48
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我要证明我足以超过那个人……」
  - if: era.get('cflag:61:干劲') === 0 && era.get('cflag:61:育成回合计时') < 3 * 48
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「打起精神来，毕竟%CALLNAME%可是要与我一同追求一流的啊。」
  - if: era.get('cflag:61:干劲') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「所以呢，我该做些什么？」
  - if: era.get('cflag:61:干劲') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「感觉心情不太好，是因为什么呢？」
  - if: era.get('cflag:61:干劲') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「完全提不起精神来……」
  - if: era.get('cflag:61:干劲') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我可是一流的圣王啊，怎么会这样没有干劲……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「虽然乌拉拉在宿舍里有时会比较吵闹，但是我并不排斥那种家里有人的感觉哦。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「特别周一看就是那种需要被人好好照顾的%UMA%呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「昨天川上来请教我关于礼仪的问题，呵呵，%SEX%算是找对人了。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「身为一流%UMA%的训练员，你也得打起精神来啊。」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「圣王决定赐予%CALLNAME%直视圣王的特别权利！就这样一直看着圣王吧！」
  - if: era.get('flag:当前月') === 12 || era.get('flag:当前月') <= 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「好冷啊……喂，%CALLNAME%，没看到圣王都冻得走不动了吗？快把你的外套借我！」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「送给我的礼物吗？哦呵呵呵！圣王很满意！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「圣王可不能白要%CALLNAME%的礼物，我会准备回礼的。」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「快点快点，圣王要饿坏啦！」
      - 在%YOU%第七次拒绝圣王光环先尝一口的要求后，圣王光环总算安静下来了。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%是不是不知道，所谓一流，就是任何方面都是一流，包括厨艺方面？」
      - 某天，圣王光环拦住了要去做饭的%YOU%，主动提出要代替%YOU%去做饭。
      - 尽管%YOU%对圣王光环所谓的「一流厨艺」十分不信任，但%YOU%毕竟是争不过%UMA%的。
      - %YOU%被圣王光环请到了一旁静候，而圣王光环趁机溜进了厨房并锁上了门。
      - ……
      - 厨房内，圣王光环一边盘点着要用到的食材，一边哼着小曲。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%居然不信任一流的圣王……算了，圣王心胸宽广，原谅%CALLNAME%了！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「先试着做道汤吧？」
      - 圣王光环努力回想着%YOU%做饭时的情形，居然摸到了门道，像模像样地开始操作着。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「一点也不难嘛！」
      - 圣王光环舀了一勺汤到一旁的小碗里，尝了一下。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「味道太淡，加点盐好了。」
      - 圣王光环抛开了勺子，向锅里加了点盐，并再次尝了尝碗里的汤。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「不对啊，明明加了那么多盐，怎么还是没有味道？」
      - 圣王光环开始手忙脚乱地往汤里倒盐。
      - 在又一次尝了碗里的汤之后，%SEX%泄气了。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「好了，请品尝一流的养生汤！圣王考虑到%CALLNAME%的健康，特意做得淡了一些！」
      - %YOU%看了看圣王光环有些躲闪的眼神，试探着尝了一口。
      - 很快，%YOU%就在圣王光环殷切的目光中败下阵来。
      - 「圣王，你是不是把盐罐打翻了！」
      - 圣王光环先是愣了一会，随即恍然大悟，低下头不再言语。
      - %YOU%想了一会，大概也明白事情经过了。
      - %YOU%尽全力克制住笑出声来的冲动，重新做了一道汤。
      - 这顿饭在一个颇为诡异的氛围中结束了。

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我才没有累！圣王是不会累的！」
      - 「注意劳逸结合是成为一流的必要条件哦？」
      - 闻言，圣王光环便一声不吭地躺下了。而经历过上午高强度训练的%SEX%，不出五分钟便睡着了。
      - %YOU%看了看圣王光环平静的睡颜，把自己的衣服轻轻披在了%SEX%身上。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「好累啊——%CALLNAME%快点为圣王准备好枕头和毯子，圣王要好好休息一下！」
      - 圣王光环进了门便一头栽倒在沙发上，仿佛是在自己家一样。
      - %YOU%无奈地摇摇头，但还是为圣王光环准备好了枕头和毯子。
      - 不过等%YOU%拿来东西的时候，圣王光环早就抱着沙发的靠背睡着了。
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「来，%CALLNAME%，靠边坐下～」
      - 圣王光环让%YOU%坐在了沙发靠边的位置，%YOU%有些不解。
      - 紧接着，圣王光环就舒舒服服地躺在了%YOU%的大腿上。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「嗯啊——果然还是%CALLNAME%的腿比较适合当枕头呢。」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「就赐予你当圣王的枕头看着圣王睡觉的权……」
      - 话音未落，圣王光环的呼吸声就平稳了下来，看来是睡着了。
      - %YOU%欣赏着圣王光环安详的睡颜，却因为害怕把%SEX%吵醒而不敢动。
      - 就这样过去了一个旖旎的中午。
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，圣王累了，不想走路了。」
      - %YOU%偏过头来看了一眼紧紧抱着%YOU%的胳膊的圣王光环，其实早就猜到%SEX%意欲何为了。
      - 于是%YOU%弯下腰，把圣王光环抱了起来。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「赐予你与圣王一起午休的权利！就这样抱着我去训练员室吧。」
      - 于是，%YOU%抱着圣王光环回到了训练员室，与圣王光环相拥在一起度过了午休时间。

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%不会以为圣王会在这些东西上浪费时间吧？」
      - 结果圣王光环一口气玩了两个小时。
      - 「好啦，到此为止吧，圣王？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「明明差点就能赢了……」
      - 圣王光环一副不甘心的样子。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「区区游戏，圣王自然是轻而易举就能拿下……」

school_rooftop:
  - 应圣王光环的要求，%YOU%带着两份便当与%SEX%一起来到了天台上。
  - %YOU%把其中一份递给了圣王光环，看着%SEX%把便当盒换了个方向又递了回来。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「好，这就算是圣王做的了！拿去饱含感激之情地吃掉吧！」
  - %YOU%无奈地笑笑，接过了圣王光环递给%YOU%的「圣王出品」的便当，并把第二份便当递给%SEX%。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「交换完成！现在开始开动吧！」
  - 尽管%YOU%手里的便当是出自%YOU%自己之手，但%YOU%还是被圣王光环要求着「赞颂一流的圣王」了。

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我圣王光环，是一流的%UMA%！为了成为一流，为了超越那个人，我会全力以赴的！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「下次，一定要跑得更快，比任何一个对手都要更快，这样才能成为一流……」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「简直是浪费时间嘛！」
      - 圣王光环有些嫌弃地说着，但是却怎么也不肯松开%YOU%的胳膊。
  - random: true
    lines:
      - %YOU%牵着圣王光环的手走在学园里，平时能说会道的圣王光环此刻却一言不发。

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「天空教过我一点钓鱼技巧，等我回想一下……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「上钩啦，果然圣王在钓鱼领域也是无可辩驳的一流呢！」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「就这么走着感觉真不错啊，就赐予%CALLNAME%下一次继续陪圣王散步的权利吧！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「路边的小店，应季的风景……每次散步都会有特别的收获呢。」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，圣王累了，快想个办法把圣王送回去～」
      - 圣王光环紧紧地倚在%YOU%的身上，装作很累的样子。
      - %YOU%没有办法，只得将圣王光环拦腰抱起。

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
          - 「看我拿个一流的分数出来……」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，有我还不够吗？不要盯着那些玩偶看了！」

o_s_drawing:
  - 来到商店街恰巧看到了抽奖活动。
  - %YOU%突然想起来上次来商店街的时候有得到过一张抽奖券，于是拿了出来。
  - acc: 1
    content: 「圣王，要去检验一下运气吗？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「根本不需要检验！一流的圣王当然连运气也是一流的！」
  - 之后%YOU%手里的抽奖券就被圣王光环抢走了。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哦——呵呵呵！请把一等奖为圣王准备好哦！」
  - %YOU%看着圣王光环凑上前去，摇动了抽奖机的把手。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「答案是——一流！」
      - 抽奖机显示的结果毫无疑问符合圣王光环的心理预期。一等奖，一大箱的胡萝卜，被圣王光环收入囊中。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那么今天晚上就做胡萝卜汉堡肉吧～这些胡萝卜可都是圣王的，那饭当然得是%CALLNAME%做了！」
      - 圣王光环的心情似乎很好的样子。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要停，不要停……」
      - 抽奖机慢慢地停了下来，停在了距离「一等奖」只有毫厘之差的「安慰奖」上。
      - acc: 1
        content: 「奖品是卫生纸哦。」
      - %YOU%看着眼前呆若木鸡的圣王光环，出声提醒道。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「都怪%CALLNAME%！一定是%CALLNAME%吸走了我的一流运气！」
      - 面对圣王光环的无理取闹，%YOU%无奈地笑了笑。
      - acc: 1
        content: 「那么圣王想要我怎么赔罪呢？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那么就罚你今晚为圣王献上美味的胡萝卜汉堡肉吧！」

o_s_ktv:
  - %YOU%带着圣王光环来到了卡拉OK。
  - 在随便唱了几句后，%YOU%便默默把麦克风递给了一旁怨念都要溢出来的圣王光环。
  - content:
      - fontWeight: bold
        content: %CHARA%
      - 「唱得什么嘛，%CALLNAME%还是乖乖地欣赏圣王优美的歌喉吧！」
  - 圣王光环又瞪了%YOU%一眼，才放声歌唱。
  - 你不由得沉浸了进去。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「很精彩的电影，很符合圣王的品味呢。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「不得不说，%CALLNAME%的品味还是挺不错的呢。」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「居然是恐怖片吗？哦呵呵呵，一流的圣王是无所畏惧的！」
      - 在发表了对恐怖片的蔑视演讲十分钟之后，圣王光环就紧紧地粘在了%YOU%的身上。
      - %YOU%无奈地摸了摸%SEX%颤抖的后背。
      - 「好啦，不要害怕啦，那个鬼已经消失啦！」
      - 原本耷拉着双耳不敢抬头的圣王光环一下子精神了起来。
      - %SEX%再次确认恐怖情节已经过去之后，又假装毫不在意地躺在了%YOU%的身上。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「圣王根本没被吓到！明明是这里太冷了，而%CALLNAME%身上比较暖和而已！」
      - %YOU%微微一笑，没有揭穿圣王光环的嘴硬，只是低头吻了一下%SEX%的前额。
      - 电影情节似乎也没有那么重要了。

o_c_pray:
  - if: d.dice > 0.5
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「哼，一流的我可不信这个！」
      - 圣王光环风轻云淡地说着，但却把签狠狠地攥在手里，完全不像说起来的那么轻松。
  - if: d.dice < 0.5
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「果然，一流的我哪怕是抽到的签都是一流的！」
      - 圣王光环高兴地捏着签，把上面的内容展示给%YOU%。

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「特别周给我推荐过这里，不得不说%SEX%在寻觅美食方面还是很有见解的。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「吃了这么多，一点也不符合圣王的形象……都怪这家店做得那么好吃！」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%怎么还不吃？是要等圣王喂你才肯吃吗？」
      - %YOU%本来正在构思工作上的事情，突然听到圣王光环的声音，才回过神来，看到对面的圣王光环已经是一脸不悦。
      - %YOU%打算用「一流的道歉」让圣王光环原谅自己，但是转念一想，为何不呢？
      - 「那就恭敬不如从命了！啊——」
      - %YOU%成功让圣王光环心神大乱起来。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%这是在干什么！大家都在看着咱们呢！」
      - %YOU%不为所动。
      - 最终，圣王光环缴械投降了。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「好啦好啦，真是的，圣王喂你就是了，跟小朋友一样，真幼稚！」
      - %YOU%眯起眼睛，享受着有些脸红的圣王光环提供的「一流服务」来。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我说，既然圣王已经作出行动了，%CALLNAME%是不是也该礼尚往来？」
      - 享受完之后，%YOU%也被圣王光环狠狠报复了。
      - 餐厅里弥漫着一股名为爱情的酸味。

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「抬头挺胸大胆地与我同行吧，毕竟你可是圣王亲自认准的训练员哦？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「所以%CALLNAME%不去为圣王的一流之路做准备，却来拉着圣王一起浪费时间？」
      - 「怎么，圣王不喜欢？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「倒也没有，就这样静静地在一起也不错……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「我赐予你陪着圣王的权利！」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%，来，把手伸出来。」
      - %YOU%不知道圣王光环的用意，但还是把手伸了出来。
      - 圣王光环轻轻地展开了%YOU%的五指，与%YOU%十指相扣。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「好啦，我们走吧。」
      - 尽管路人对%YOU%与圣王牵在一起的手议论纷纷，圣王光环的脸越来越红，%SEX%却始终没有松开%YOU%的手。
  - if: era.get('love:61') >= 75
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
          - 「%CALLNAME%一看就是不经常来商场的人，来，跟着圣王，圣王带着你逛几圈。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「逛累了？不行，这才逛了多久？快打起精神来跟上圣王的步伐！」
      - 最后收获了酸痛的肌肉和圣王光环的笑容。

good_night_normal:
  sync: true
  lines:
    - if: '!d.awake'
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「今天的训练也很一……」
        - 结束训练后，圣王光环霸占了%YOU%的办公椅开始发表总结演讲，可是刚起了个头就中止了。
        - %YOU%一抬头，发现圣王光环已经累得睡着了。
        - %YOU%试图轻柔地唤醒圣王光环，但失败了。
        - 所以%YOU%只得亲自把圣王光环抱到宿舍楼下。
        - acc: 1
          content: 「这次也麻烦您了……」
        - %YOU%把圣王光环交付给%SEX%的寝室长，并目送对方回到寝室。
        - %YOU%叹了口气，看来下次要注意控制训练强度了。
    - if: d.awake
      lines:
        - if: era.get('love:61') < 75
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「圣王对于今天的训练很满意！就赐予你为圣王制定明天的训练计划的权利吧！」
            - %YOU%看着站在宿舍楼门前哪怕已经十分疲惫，却仍旧强撑精神发表演讲的圣王光环，有些哭笑不得。
            - %YOU%向圣王光环挥手告别，并嘱托%SEX%好好休息。
        - if: era.get('love:61') >= 75
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「圣王的腿有些酸痛！」
            - %YOU%看着坐在训练场边上正襟危坐却又十分精神的圣王光环，有些不解。
            - acc: 1
              content: 「那我们赶紧回去休息吧？」
            - 因为不清楚具体情况，%YOU%提议今日的训练到此为止。
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「所以你是打算让我自己走回去吗？」
            - 圣王光环终于暴露了真实目的。
            - 于是，%YOU%只得上前一步，抱起了略微脸红的圣王光环。
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「哦——呵呵呵！就赐予你抱圣王回到宿舍的权利吧！」

good_night_sex:
  - 训练结束后，%YOU%像往常一样把圣王光环抱到宿舍楼下。
  - 没想到，到了宿舍楼下，圣王光环并没有松开抱着%YOU%脖子的手。
  - acc: 1
    content: 「圣王，我们到了哦？」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「%CALLNAME%，你还不懂吗？」
  - 圣王光环用一副有些害羞的表情看着%YOU%。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「我赋予你让圣王欢愉的权利哦？」
  - 说完，圣王光环就低下头更紧地抱住了%YOU%，不再言语。
  - acc: 1
    key: sex
    content: 「无上荣幸。」
    lines:
      - %YOU%抱着圣王光环转了个身远离了宿舍楼。
  - acc: 2
    content: 「可是我们已经到宿舍了哦。」
    lines:
      - if: d.check ===2
        lines:
          - 听到%YOU%拒绝的话语，圣王光环马上从%YOU%身上跳了下来。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「哼，没意思。」
          - 说完后，圣王光环竟然是把%YOU%扛了起来。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「居然敢拒绝圣王的请求，真是不可饶恕！」
          - %YOU%在路人奇异的眼神中被圣王光环带走了。
      - if: d.check < 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「啊，等等——」
          - %YOU%没有理会圣王光环的话语，径直走向了宿舍楼。
          - 然后把怀里的圣王光环递给了刚刚听到风声走出门来的宿舍长。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「喂！」
          - %YOU%笑着对被宿舍长带走的圣王光环挥了挥手。
