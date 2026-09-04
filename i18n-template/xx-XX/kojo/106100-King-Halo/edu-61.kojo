# @file 圣王光环 - 育成
# @author 牛蛙煲

# 对“自暴自弃”状态的说明：
# 该状态与育成结束前参加的短英距离比赛有关，胜一场则轻度转消失，中度转轻度，重度转中度，
# 败一场则反之，重度转扫地出门be。
# 如果育成结束后仍保留着任意等级的“自暴自弃”状态，则转扫地出门be。
# 在具有“自暴自弃”状态时，无法触发育成类特殊口上事件。
# 轻度/中度/重度自暴自弃的效果为干劲上限保持在一般/较差/极差。

# 训练
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「一流的%UMA%就该进行一流的训练！」
  - %CHARA% 气势昂扬地投入了训练。

# 训练成功
ts_content:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼……我还可以继续！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「又向一流迈出了一步！」

ts_add:
  title: 额外训练
  lines:
    - acc: 1
      content: 「今天的训练到此为止吧，辛苦你了，圣王。」
    - %YOU%抛了抛手中的秒表，向气喘吁吁跑过来的圣王光环说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「终于结束了……请把毛巾给我好吗？」
    - 圣王光环正擦着汗，突然停了下来，盯着训练场上的某处。
    - %YOU%顺着%SEX%的视线看过去，发现那里还有几位%UMA%正在进行额外训练。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，圣王赐予你为圣王组织额外训练的权利！」
    - %YOU%转过头来，对上了圣王光环坚定的视线。
    - 面对追求一流的圣王光环，%YOU%决定——
    - acc: 1
      key: train
      content: 「那就一起来进行一流的额外训练！」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦呵呵呵！那就来吧！」
        - %YOU%与圣圣王光环一起训练到最后一刻。
    - acc: 2
      content: 「一流的%UMA%更要注意劳逸结合。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「劳逸结合吗……」
        - 「的确，如果因为太勉强而受伤，就不能称之为一流了。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「永远保持最佳状态，这才是一流%UMA%该做到的，%CALLNAME%说得没错。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为了保持一流的身份，那今天就好好休息吧！」

train_fail:
  title: 训练失败
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎呀！」
    - %YOU%看到远处的圣王光环突然摔倒，急忙跑过去将%SEX%搀扶起来。
    - acc: 1
      content: 「圣王你怎么样？是不是太累了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不，我没事……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流的%UMA%怎么会因为一点小伤而倒下……」
    - 尽管圣王光环表现得云淡风轻，但是时不时出现的抽冷气的声音出卖了%SEX%。
    - acc: 1
      content: 「对不起圣王，是我给你安排的任务太多了。我们赶紧去医务室吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我没事，真的……嘶……」
    - acc: 1
      content: 「如果你真的出了什么问题，我会内疚一辈子的。」
    - 见状，圣王光环不再坚持，低着头顺从地被%YOU%搀扶着去了医务室。

race_start:
  title: 赛前
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这只会是圣王一流之路上的又一个微不足道的胜利罢了！」

race_end_win:
  title: 比赛获胜
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦呵呵呵，理所当然的胜利！」

race_end_5:
  title: 比赛上榜
  lines:
    - %YOU%发现圣王光环的情绪不太对劲。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么会……不该这样的……」
    - 「圣王，其实这个名次已经很优秀了哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不，%CALLNAME%，只有第一名，完全的胜利，才是圣王应该拥有的水平！」
    - 圣王光环攥紧了拳头。
    - 「那么，我们来总结一下这次比赛的失误之处吧。」

race_end_lose:
  title: 比赛败北
  lines:
    - 比赛结果出来了，圣王光环甚至没能入着。
    - 虽然%YOU%的心情也并不很好，但比起这个来，%YOU%更担心圣王光环的心情。
    - 「没关系的，圣王，下次……」
    - 没想到圣王光环用轻快的语调打断了%YOU%的发言。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，不要把圣王想得那么脆弱啊，一流的圣王的承受能力同样是一流的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次，我一定会，用光荣的胜利再次证明，我还是那个一流的我！」

# 招募后第一周
ws_cloudy:
  title: 阴云
  lines:
    - 距离%YOU%成为圣王光环的训练员，已经过去了一周。
    - 不得不说，尽管圣王光环的性格略显张扬，但是%SEX%对于%YOU%布置下去的任务，却是抱着120%的决心去完成的。
    - 因此，%YOU%对于圣王光环的第一印象颇为不错。
    - %YOU%这么向着，赶到了训练场上，却发现圣王光环早就已经在等候了。
    - 不过%SEX%没有看到%YOU%，而是在给谁打电话。
    - %YOU%没有喊%SEX%，而是悄悄凑了过去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「妈妈？我找到合适的训练员了哦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「绝对是最适合圣王的一流的训练员！」
    - %YOU%看着圣王光环兴奋的脸庞，听着%SEX%对%YOU%的褒扬，心中十分高兴。
    - 没想到又过了一会，圣王光环的脸色开始变得难看。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么叫『给人家添麻烦』？在你眼中我就是如此不堪吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我与%CALLNAME%是互相选择共同成长的关系，怎么被你说成是我单方面在制造麻烦了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂？喂！」
    - 看来圣王光环的母亲挂掉了电话，只留下圣王光环在原地呆呆地立着。
    - %YOU%赶紧装作刚刚赶到的样子。
    - acc: 1
      content: 「圣王已经到了吗？那我们赶快开始训练吧！」
    - 圣王光环把手机收好，装作什么都没有发生的样子，朝%YOU%挥了挥手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那就开始吧！向着圣王的一流之路再迈一步！」

# 招募后第二周
ws_golden_gen:
  title: 黄金世代亮相
  lines:
    - 近日，外面的报纸上似乎在宣传一个叫做「黄金世代」的概念。
    - 而这所谓的黄金世代，其中一人便是%YOU%的担当圣王光环。
    - 因此便有记者得到了学园的许可，想要来采访一下「黄金世代」的%UMA%们。
    - 这天，%YOU%来到训练场，发现圣王光环还没有来到，于是便四处张望着。
    - 之后便发现了同为「黄金世代」的其他几位%UMA%。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「呜哇哇哇！采……采访我吗？我……我什么都不知道哦？」
    - content:
        - fontWeight: bold
          content: 记者
        - 「请您冷静一下，我只是想问一下您最近的训练感觉怎么样？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「训练很好的说？就是训练完了肚子会很饿，每天都要……呜，我怎么说到吃饭上去了！」
    - 一旁看戏的草上飞、神鹰和青云天空不厚道地偷笑了起来。
    - %YOU%也差点被特别周逗乐了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！」
    - %YOU%不用回头也知道你的担当，圣王光环，驾到了。
    - 而以圣王光环的心性，下一步想必是……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所有采访都冲着我来吧！」
    - 果然，刚刚还在长枪短跑对着特别周的记者马上转向了圣王光环。
    - 圣王光环向着镜头摆出了「采访专用的一流姿势」。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「谢谢你，圣王同学……真是帮大忙了……」
    - 随后，青云天空走了上来，拉住了特别周。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「快走吧快走吧，好不容易有圣王同学为我们吸引火力，我们赶快悄悄地去训练吧！」
    - 青云天空故意说得很大声，被圣王光环听到了。
    - %YOU%暗道不妙。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你们这些家伙！给我等一下！不要想抛开圣王去尽情训练啊！」
    - 果然，圣王光环立刻忘记了正在进行的采访，追着同伴们训练去了。
    - content:
        - fontWeight: bold
          content: 记者
        - 「%CHARA_FULL%！请等一下！我们的采访……还没开始呢？」
    - 记者无力地向圣王光环的背影呐喊着。
    - 随后，他便满脸怨念地转过头来看着%YOU%。
    - %YOU%心中顿感不妙。
    - acc: 1
      content: 「那么，就请采访我吧？我好歹也是圣王的训练员呢。」
    - %YOU%试探着说道，没想到对面的记者一下子就兴奋了起来。
    - content:
        - fontWeight: bold
          content: 记者
        - 「那么，我想问一下，圣王光环的训练还顺利吗？」
    - content:
        - fontWeight: bold
          content: 记者
        - 「%SEX%是否拥有着像%SEX%母亲那样的卓越才能？」
    - content:
        - fontWeight: bold
          content: 记者
        - 「而%SEX%离开了母亲规划的职业道路，只身来到特雷森，是不是等同于离家出走呢？」
    - ……
    - 只能说不愧是专业的记者，一连串问题下来%YOU%只感到头晕目眩。
    - %YOU%勉强把这些问题糊弄了过去，好不容易才送走了这位记者。
    - %YOU%擦了擦脑门上的汗，看了看远处竞跑跑得不亦乐乎的圣王光环，随后找了个地方坐下等%SEX%跑完。
    - 又过了一会，圣王光环终于跑尽兴了，于是向%YOU%走了过来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「辛苦你了，%CALLNAME%，记者都问了些什么呀？」
    - %YOU%随便提了一下记者的那些几乎是刁难的问题。
    - 没想到，圣王光环的脸色开始变得难看。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就知道！这些记者总是喜欢把我跟我的母亲放在一起！搞得就像我完全是我母亲的附属品一样。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总有一天，人们提到我的时候会说『一流的圣王』，而不是什么『那位的孩子』！」
    - 为此，圣王光环心情不好了一整天。

before_begin_race:
  title: 出道战前
  lines:
    - acc: 1
      content: 「就要正式出道了，感觉怎么样？」
    - 圣王光环的出道赛前，%YOU%来到休息室里为%SEX%打气。
    - 圣王光环充耳不闻，而是眼睛失焦地盯着某处。
    - 又过了一会，%SEX%才如梦初醒地回过头来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感觉好极了！圣王一流之路的第一步，无论如何都要迈好！」
    - acc: 1
      content: 「那么面对比赛，会赶到紧张吗？」
    - 圣王光环扯出一个僵硬的笑容来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流的圣王可不会紧张哦？」
    - 但%YOU%发现圣王光环的手臂在轻微颤抖。
    - %YOU%叹了口气，决定装作没有看到。
    - acc: 1
      content: 「那就去吧，圣王！把第一名收入囊中！」

begin_race_win:
  title: 出道战后·一流伊始
  lines:
    - %YOU%在观众席上亲眼见证了圣王光环比赛的全过程。
    - 从起跑，到冲刺，每一步都几乎是完美无缺的。
    - 因此，%YOU%怀着捡到宝了的激动的心情，为圣王光环准备好了运动饮料，前往休息室。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊啊啊！好累！%CALLNAME%快点把饮料递给我！」
    - 在赛场上威风凛凛的圣王光环，一来到这没有旁人的休息室，瞬间就换了一副样子。
    - 只见%SEX%瘫在椅子上，不住地扇着风，都几乎无暇顾及额头上的汗液了。
    - 于是%YOU%把饮料和毛巾递给了%SEX%。
    - 圣王光环举起瓶子猛灌了一大口，又狠狠地擦了擦汗，这才像活过来一样长出了一口气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽说圣王很漂亮地拿下了，但是还是好累……」
    - 圣王光环刚想说些什么，便被一阵突兀的电话铃声打断了。
    - 圣王光环皱了皱眉，拿起手机，手机屏幕上赫然显示着「一定要超越的那个人」。
    - %YOU%想要回避一下，但是圣王光环用眼神示意%YOU%留下，并毫不客气地打开了免提。
    - 见状，%YOU%只好留下。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「圣王？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，是我，请问有什么事吗？」
    - 圣王光环的语气听起来并没有多少感情。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「听说你在出道赛上获胜了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对的，我赢了，你看到了吗，我最后的冲……」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「你为什么会选择这个时间点出道呢？」
    - 圣王光环的母亲突如其来的诘问，将圣王光环的后半句激动的话语堵了回去。
    - %YOU%看到圣王光环一下子愣住了。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「最近强者辈出，我看了很多同时期的选手的出道赛，真是优秀啊。」
    - 圣王光环嘴唇嗫嚅，似乎是想说些什么。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「你真是太莽撞了，这个时候出道，一定会被击溃的。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「想想自己的未来吧，不要做傻事了。」
    - 圣王光环的母亲挂掉了电话。
    - %YOU%与圣王光环同时呆在了原地。
    - 说实话，自从偷听到那次通话之后，%YOU%便已经猜到了圣王光环与母亲之间的关系会有些紧张。
    - 但是，这已经远远超过有些紧张的范畴了吧？
    - 随后，圣王光环也清醒了过来。
    - %SEX%右手握成拳头，许久之后才松开。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总有一天，我会超过她，到时候……一定要她好看！」
    - acc: 1
      content: 「我相信一流的圣王一定行的！那么，我们来商量一下下一步的计划吧？」
    - %YOU%为了转移圣王光环的注意力，赶忙想出了一个新话题。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一步？哦——呵呵呵！一流的圣王早有打算！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那就是——经典三冠！」
    - %YOU%听到圣王光环的话语之后两眼一黑。
    - acc: 1
      content: 「那毕竟是经典年的比赛，圣王要不还是找点别的目标？」
    - 其实经典三冠并不算什么出格的目标，但圣王光环显然打算从生涯第二战开始就要挑战三冠……
    - 所以非常有必要在新秀年多拿下几场比赛树立信心，同时作为进军经典年的踏板。
    - 既然是刚刚出道的新秀%UMA%，那么完全可以从OP赛事开始挑战，之后开始进军G3，乃至G2……
    - 鉴于圣王光环是颇为有潜力的后起之秀，%YOU%认为G2是一个很好的起点。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「确实！新秀年是让广大粉丝认识圣王的大好时机，可不能错过了！」
    - acc: 1
      content: 「是呀，所以我们以哪场G2拉开序幕比较合适呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「G2？」
    - 圣王光环有些不解地反问道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「G2的意思不是二流比赛吗？」
    - %YOU%再次感到头晕目眩。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就这么决定了！圣王的一流之路，必须以一场G1的胜利为开场号！」
    - 圣王光环似乎认准了所谓G1的意思是一流比赛。既然如此，就完全没有改变目标的可能了。
    - %YOU%垂头丧气之余，居然开始认真思考起了这样做的可行性。
    - 如果出道战后的第一胜就是G1，那圣王光环将会无可辩驳地成为同辈当中的先行者。
    - 只是如果失败……
    - %YOU%想到了圣王光环的母亲。
    - 但是圣王光环的优秀%YOU%是看在眼里的，那么陪%SEX%赌上一把又如何？
    - %YOU%这样想着，愈发坚定了决心。
    - acc: 1
      content: 「那么，『希望锦标』看起来怎么样？」

# 11月第2周
ws_first_class_day:
  title: 超一流之日
  lines:
    - %YOU%正在训练员室的桌子后面埋头制定训练计划，被巨大的开门声吓了一跳。
    - %YOU%一抬头，看到了分外激动的圣王光环。
    - 圣王光环凑到了桌子前面，拿起了日历，找到了今天。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！超一流！」
    - 见%YOU%仍旧疑惑不解，圣王光环把日历递过来，指着上面的「11.11」。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看到了吗？一个1就是一流，今天是11.11，毫无疑问的超一流之日！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可谓是最适合我圣王的纪念日了啊！」
    - if: era.get('love:61') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%！今天是毫无疑问的圣王作为主角的一天哦。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我赐予你尽情赞颂超一流的圣王的权利！」
        - acc: 1
          content: 「嗯……今天的圣王也很光彩夺目呢。虽然昨天也是，但是今天要更好一点呢。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼，听起来还不错嘛！圣王很满意！」
        - acc: 1
          content: 「那么超一流的圣王，我们去进行超一流的训练吧。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那就去训练吧，接下来就让你见识一下，比昨天，前天以及任何一天都要更棒的圣王！」
    - if: era.get('love:61') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「正好有四个1，圣王就大发慈悲地分给%CALLNAME%两个吧。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「现在%CALLNAME%和圣王都有两个1，都是『有点超一流』了哦。」
        - acc: 1
          content: 「诶？哦好的，谢谢你，虽然我也不是很需要就是了……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我可不允许%CALLNAME%只是跟在圣王身后。%CALLNAME%可是有着时刻与圣王并肩同行的义务哦。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明白了吗？我的有点超一流训练员？」
        - acc: 1
          content: 「无上荣幸！另外请允许我抱您去训练场！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「恩准了！就这样让大家都见识到圣王的有点超一流之力吧！」

ws_race_clothe:
  title: 决胜服
  lines:
    - 比赛前夕，圣王光环定制的决胜服终于到了。
    - %YOU%盯着在训练员室里摆了三个小时各种「决胜姿势」的圣王光环，有些无语。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！你快看看这个姿势是不是比前两个更能凸显圣王的气质！」
    - %YOU%敷衍地应着。
    - 下一刻，圣王光环又陷入了新的犹豫之中。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我还是觉得我一个小时之前那个动作更合适一些。」
    - acc: 1
      content: 「喂，圣王，再穿下去决胜服就要皱了！穿着皱了的决胜服算什么一流？」
    - 果然，圣王光环乖乖地停下了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说得也是……那么我去把决胜服换下来！」
    - %YOU%舒了一口气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请%CALLNAME%不要离开这里哦？圣王一会要穿着训练服继续决胜姿势的练习！」
    - %YOU%又倒吸一口气。

before_hope_sta:
  title: 希望锦标前
  lines:
    - %YOU%来到圣王光环的休息室，为%SEX%加油。
    - 结果圣王光环看起来并不是很紧张的样子。
    - %YOU%敲开门进去的时候，%SEX%正在对着镜子打量自己穿着决胜服的样子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……你说如果圣王漂亮干脆地拿下了这场比赛，是不是就成为真正的一流了？」
    - %YOU%想了想，准备开口肯定圣王光环的观点，却被圣王光环打断了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵，其实我知道的，单独一场比赛无法让圣王永远一流，更何况这只是新秀年的一场比赛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我所想的其实是，要以这次比赛，作为圣王一流之路上的真正的出道赛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那样，圣王的未来，就会毫无疑问地变得一流起来。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你来看我，%CALLNAME%，请看着吧，我会将这次胜利也收入囊中……」
    - 说完，圣王光环便开始整理衣物，昂首挺胸地向着赛场走去。

# 胜利
hope_sta_win:
  title: 希望锦标后·踏上征程
  lines:
    - 圣王光环顺利率先冲过终点线，正如%YOU%与%SEX%的预期。
    - 可惜，只有不算热烈的掌声与一些实习记者见证了这一刻。
    - 作为新秀年比赛，哪怕是关注度最高的G1，其人气也并不算很高。
    - 尽管%YOU%早就料到了这一切，但当%YOU%看到圣王光环的目光由期待转为失望的时候，心还是抽痛了一下。
    - 因此，%YOU%去了圣王光环的休息室，想转移一下%SEX%的注意力。
    - 刚好赶上气喘吁吁的圣王来到休息室门前。
    - 看着连开门都在颤抖的圣王光环，%YOU%赶快替%SEX%打开了门。
    - 圣王光环摸到椅子坐了下来，这才轻松了一点。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么，%CALLNAME%看过我的比赛了吧？」
    - %YOU%点了点头。
    - acc: 1
      content: 「很完美哦，圣王。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！圣王出手，怎么可能会输呢？」
    - 哪怕是已经很累了，圣王光环也没有忘记%SEX%的招牌大笑。
    - %YOU%本打算等%SEX%笑个痛快，然后就转移话题。没想到，圣王光环比%YOU%想象得要坦荡许多。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天的气氛似乎不是很热烈呢，想必是因为参加比赛的各位都是没有什么经验的小辈吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么等圣王征服了经典年、资深年的比赛，是不是这个场面就会彻底改观呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果能在经典年与资深年也保持这样的胜利，那时的圣王才真正称得上一流吧？」
    - 看起来圣王光环并没有太在意这回事，于是%YOU%也放下了心。
    - acc: 1
      content: 「那么，圣王，我们的下一个目标是？」
    - 其实%YOU%的心中已经有答案了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毫无疑问，是『皋月赏』！一流的圣王要正式开始进军三冠路线了！」
    - 与%YOU%想的完全一致。既然拿下了这个G1，那么圣王光环的实力想必也是可以开始挑战经典三冠了。
    - acc: 1
      content: 「那就一起向着皋月赏努力吧！」

# 入着
hope_sta_5:
  title: 希望锦标后·再接再厉
  lines:
    - 圣王光环拼尽全力，却在最终的冲刺阶段体力不支，与一着失之交臂。
    - 尽管圣王光环没有拿到胜利，但是作为经验体能均在成长中的新秀年%UMA%，这个结果也不算很差了。
    - %YOU%将心中所想告诉圣王光环，却被%SEX%跺着脚打断了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行！只有完全胜利才算符合圣王身份的结果！」
    - 看样子圣王光环非常在意这次失败。
    - 看来在新秀年出名的愿景是无法实现了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是！我还是那个一流的我！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这次比赛的策略有失误……一流的圣王会吸取教训，下一次比赛绝对不会再出现这样的失误！」
    - 圣王光环紧紧地拽住了%YOU%的衣角。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！请立刻为圣王安排附加训练吧，圣王要在皋月赏上重新证明自己的实力！」
    - %YOU%看着已经为自己打好气的圣王光环，心中稍感安心。

# 未入着
hope_sta_lose:
  title: 希望锦标后·重整旗鼓
  lines:
    - 事实证明，哪怕是一流的圣王光环，在面对G1这样的大型比赛的时候也免不了紧张。
    - 而这一紧张导致了一系列致命的失误决策。
    - 最终，圣王光环甚至无法挤入那块名次板。
    - %YOU%目睹了圣王光环从决策失误一直到比赛结束的全过程。
    - 只要下一步继续加强冲刺的训练，一定就会好很多的吧？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？比赛已经结束了哦，你还在这里愣着干什么？」
    - %YOU%回过神来，发现圣王光环已经来到了%YOU%的面前，正有些担心地看着%YOU%。
    - %YOU%摇了摇头，证明自己没事。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呵呵，那就回去吧。」
    - 圣王光环像是完全不在意比赛结果那样拉着%YOU%向外走去。
    - acc: 1
      content: 「可是……真的没关系吗？」
    - 圣王光环停下了脚步，转过身来，认真地看着%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这只是一次失败罢了，如果我一定要对这次失败较真，那么下一次也会失败的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「相比起来，还是化悲愤为动力，在下一次比赛证明自己比较合适。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「更何况，这场比赛观众和记者都不算太多，说明大家都不是很关注。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么，大家就不会知道圣王输掉了。这样我就可以继续悄悄努力，在下一次比赛上惊艳所有人。」
    - 圣王光环转过身去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「回去吧，%CALLNAME%，继续我们的训练！」

ws_new_year_c:
  title: 经典年新年
  lines:
    - 新年快到了，学园里洋溢着浓厚的新年气息。
    - %YOU%从堆积如山的文件中抬起头来，才意识到已经快要新年了。
    - 但是那与%YOU%又有什么关系呢？
    - %YOU%并没有找到什么值得让%YOU%停下手头的工作的理由。
    - 毕竟年可以不过，但是理事长安排的任务……
    - %YOU%想起了求学时期花光生活费啃泡面的日子。
    - 感觉自己就要成为，或者说已经成长为典型的社畜了呢。
    - %YOU%自嘲地笑笑，准备继续工作。
    - 就在此时，训练员室的门传来了受击的声音，似乎不像是敲门声。
    - %YOU%叹了口气，站起身来，拉开了训练员室的门。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「敢让圣王在门外等着？亏圣王还这么好心过来看你！」
    - 圣王光环，%YOU%的担当，正一手拎着一个袋子挤进门来。
    - %YOU%目瞪口呆地盯着%SEX%，一时没反应过来%SEX%的用意。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「盯着圣王干什么？赶快关门呀！冻死了！」
    - %YOU%赶忙去关上了门。
    - 圣王光环毫不客气地把%YOU%的文件挪到地上，然后把袋子放在桌子上。
    - 下一刻，年菜的香气开始在并不算空旷的训练员室内扩散。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啧，所以我是该夸你勤劳敬业呢还是说你没有年味呢？」
    - 圣王光环抱起双臂，略显嫌弃地打量着训练员室。
    - acc: 1
      content: 「可是……圣王为什么会出现在这里？」
    - %YOU%终于有机会提出了一直以来的疑问。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「关心自己的训练员也是一流的表现！」
    - 圣王光环撂下这么一句话后就不再理会%YOU%，而是自顾自地开始布置年菜。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦，来吃饭吧！虽然不是圣王做的，但却是圣王亲自点的！」
    - 于是%YOU%被圣王光环拉到桌子旁边开始享用起了这顿不明所以的年菜。
    - 尽管%YOU%仍旧没有搞清楚现状，但美味的年菜还是很好地抚慰了%YOU%的心灵。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「新年的抱负？唔，我想想……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然还是继续追求一流吧？然后还要拿下经典三冠，让那个人看看圣王的实力！」
    - 圣王光环毫不在意地从%YOU%的盘中抢走一块肉，随口回答道。
    - 紧接着，%SEX%皱了皱眉。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么，%CALLNAME%的新年抱负又是什么呢？」
    - 面对圣王光环抛回来的问题，%YOU%暂时忘记了被圣王光环抢走的那块肉，思考了一下。
    - acc: 1
      key: select
      content: 「大概是把你培育成受人景仰的%UMA%吧。」（好感+10，技能点数+30）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「受人景仰？听起来确实是一流%UMA%该做到的呢。」
        - 圣王光环看起来很感兴趣的样子。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么%CALLNAME%有什么计划吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不如我们一会儿就开始练习吧？」
        - divider: true
          content: ⏰
          position: left
        - 圣王光环缠着%YOU%问了许久。
        - 不过托圣王光环的福，这个新年还是过得很开心的。
    - acc: 2
      content: 「大概是把你培育成新年不发胖的%UMA%吧。」（爱慕+2，速度+20）
      lines:
        - 听到了%YOU%的回答，圣王光环就像突然被呛到了一般咳嗽了起来。
        - 好不容易平息下来，%SEX%开始用一种更加嫌弃的目光看着%YOU%。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%还说我呢？你自己的饭量都快赶上成长期的%UMA%了好吧！」
        - %YOU%低头看了看自己眼前的骨头堆，再看看圣王光环面前的，似乎确实差不多大小。
        - 圣王光环好整以暇地看着%YOU%，等待着%YOU%的回答。
        - %YOU%选择用行动作出回答——%YOU%一边吹着口哨一边把骨头堆推到了圣王光环的面前。
        - acc: 1
          content: 「其实圣王才是吃得最多的那个吧？圣王的饭量都要赶上两个成长期%UMA%了！」
        - 圣王光环眨了眨眼睛，看了看%YOU%，又看了看自己眼前。
        - 然后%SEX%站了起来，绕到%YOU%的身后，抓住了%YOU%的耳朵。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%——给我适可而止啊！」
        - divider: true
          content: ⏰
          position: left
        - 圣王光环缠着%YOU%闹了许久。
        - 不过托圣王光环的福，这个新年还是过得很开心的。

before_sats_sho:
  title: 皋月赏前
  lines:
    - 终于要开始了，这「经典三冠」的第一战，皋月赏。
    - 圣王光环坐在休息室里，微微颤抖着。
    - 这次比赛的重要程度非同小可，观众的狂热程度以及记者的密度所化作的海啸，足以打翻任何一位信心不足的选手的信心。
    - 但是，这次比赛所带来的粉丝量却也是极为恐怖的。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么作为经典年第一场重量级比赛，一定要跑出圣王的气势来！」
    - 圣王光环开始为自己打气。
    - 很快，%SEX%就调整好了心态，昂首挺胸地走上了赛场，在观众席前站定。
    - 观众们开始嘁嘁喳喳地讨论圣王光环的过往战绩，很是热闹。
    - 一次完美的亮相，前提是……
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「嗯～～啊！哦？圣王同学也在呢，真是好巧啊。」
    - 圣王光环的同期同学、「黄金世代」的一员，青云天空，正慵懒地从圣王光环身后走过。
    - %SEX%伸了个懒腰，仿佛根本不是来参加比赛的样子。
    - 观众们的注意力很快就被青云天空吸引走了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天空！你——」
    - 圣王光环好不容易维持的氛围感一瞬间就被打破了。
    - 于是圣王光环索性不再矜持，而是跑去追赶青云天空了。

# 皋月赏一着
sats_sho_win:
  title: 皋月赏后·凯旋
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「%UMA%们起跑了！各位选手的起跑姿势都很完美呢！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「最前方的是青云天空选手，作为领放型%UMA%，%SEX%的选择中规中矩呢。」
    - content:
        - fontWeight: bold
          content: 实况
        - 「后面的是圣王光环选手，与青云天空同为夺冠热门选手呢。」
    - content:
        - fontWeight: bold
          content: 实况
        - 「青云天空选手似乎有什么打算，并没有跑得太快，而是仅仅领先了第二名半个身位……」
    - content:
        - fontWeight: bold
          content: 实况
        - 「而每当第二名想要超过的时候，青云天空就会加速保持领先……这样第二名的体力消耗就会变大许多……」
    - 很不巧，这个第二名便是圣王光环。
    - %YOU%看到这一幕，不禁为圣王光环捏了把汗。
    - 不愧是以谋士身份出名的青云天空，在刚起跑的时候就已经开始施展谋略了。
    - 不过，圣王光环也未必只会被牵着鼻子走……
    - content:
        - fontWeight: bold
          content: 实况
        - 「圣王光环选手似乎不甘心于第二名的位置，%SEX%开始加速了！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「青云天空也开始加速了，似乎是不想让出第一名的位置！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「但是圣王光环的加速显然更强劲！超过去了！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「但是圣王光环没有减速！明明还没有到终盘呢？」
    - %YOU%浑身一震，想起来了圣王光环的选拔赛。
    - 看起来，圣王光环为了抵御青云天空的谋略，被迫选择了这种剑走偏锋的策略。
    - 不过结果看起来貌似还不错，青云天空为了夺回领先地位只得强行加速，后面的大部队也被迫提速。
    - content:
        - fontWeight: bold
          content: 实况
        - 「进入终盘了！圣王光环还在冲刺，青云天空能追上吗？」
    - content:
        - fontWeight: bold
          content: 实况
        - 「圣王光环出现了明显的减速！看来是体力消耗殆尽了！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「青云天空要追上了吗？啊，圣王光环又开始加速了！原来先前的疲惫是伪装出来的！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「马上就要到终点了，选手们看起来非常疲惫的样子！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「终究还是圣王光环实力更为强大！皋月赏的胜利，属于圣王光环！」
    - 尽管青云天空的谋略很大程度上消耗了圣王光环的体力，但平时的刻苦训练却让圣王光环有更多的体力可以随意挥霍。
    - %YOU%看着圣王光环虽然疲惫却开心地冲过终点线，内心也激动起来。
    - 很快，到了赛后记者采访的时间。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！赐予你们尽情采访圣王的权利！」
    - 尽管圣王光环的气息还有些起伏，但%SEX%仍然非常高调地接受了采访。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，这只是第一步哦？一流的圣王可是要将经典三冠全部收入囊中的！」
    - 记者们议论纷纷。
    - content:
        - fontWeight: bold
          content: 记者A
        - 「首先恭喜您获得胜利，之后，作为『名宿之后』，您会向令堂当年的路线靠拢吗？」
    - content:
        - fontWeight: bold
          content: 记者B
        - 「您今天的胜利，是不是得益于令堂的教导？」
    - %YOU%明显看到圣王光环的脸色黯淡了下来，便开始为这些记者祈祷。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果你们执意要称呼我为『名宿之后』，那么今天的采访到此结束。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「另外，我能拿下这场比赛的胜利，百分之百依赖于我自己的努力，与%CALLNAME%的指导。」
    - 说完，圣王光环就径直离开了。
    - %YOU%向着鸦雀无声的记者们拱了拱手，跟着圣王光环一起离开了。

# 皋月赏非一着
sats_sho_lose:
  title: 皋月赏后·奋进
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「%UMA%们起跑了！各位选手的起跑姿势都很完美呢！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「最前方的是青云天空选手，作为领放型%UMA%，%SEX%的选择中规中矩呢。」
    - content:
        - fontWeight: bold
          content: 实况
        - 「后面的是圣王光环选手，与青云天空同为夺冠热门选手呢。」
    - content:
        - fontWeight: bold
          content: 实况
        - 「青云天空选手似乎有什么打算，并没有跑得太快，而是仅仅领先了第二名半个身位……」
    - content:
        - fontWeight: bold
          content: 实况
        - 「而每当第二名想要超过的时候，青云天空就会加速保持领先……这样第二名的体力消耗就会变大许多……」
    - 很不巧，这个第二名便是圣王光环。
    - %YOU%看到这一幕，不禁为圣王光环捏了把汗。
    - 不愧是以谋士身份出名的青云天空，在刚起跑的时候就已经开始施展谋略了。
    - %YOU%很想大声告诉圣王光环一定要冷静，但却做不到。
    - 很快，圣王光环便已在青云天空的谋略之下显露疲态了。
    - 而此时，%SEX%好像才意识到中计了。
    - 但为时已晚，圣王光环剩余的体力已经不足以支持%SEX%高速冲刺了。
    - 结果很显然，圣王光环与一着失之交臂。
    - 而没有拿到胜利的圣王光环，也没有参加新闻发布会，而是拉着%YOU%悄悄地离开了。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……所以，请务必为我增加耐力的训练。」
    - 当天晚上，训练员室内。
    - 圣王光环仿佛是下了很大的决心一样，向%YOU%请求道。
    - %YOU%犹豫了一会，因为圣王光环本就不是耐力特别出众的类型，投资耐力训练也不容易产生质变……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「拜托了，皋月赏的赛道只有2000米，就已经如此艰难；那么后面2400米的日本德比，只会更加艰难。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「圣王需要德比的胜利，来洗刷今天的屈辱。所以%CALLNAME%，请增加耐力的训练吧。」
    - %YOU%望着圣王光环有些泪光的眼睛，冲着%SEX%点了点头。

before_toky_yus:
  title: 日本德比前
  lines:
    - 圣王光环无比期待的日本德比就要开始了，%YOU%陪着%SEX%在休息室里进行最后的准备。
    - %YOU%看到圣王光环目光呆滞地盯着镜子里的自己，于是想说些什么缓解一下气氛。
    - acc: 1
      content: 「圣王一定很紧张吧，其实不需要那么……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么紧张？圣王怎么会紧张？我只是在……只是在发呆！」
    - 圣王光环立刻便进入了「一流的圣王」的状态，对紧张这一回事矢口否认。
    - %YOU%看着圣王光环仿佛活过来了一样，暗自松了口气。
    - acc: 1
      content: 「安心去吧，圣王，我们的准备工作已经很充分了，不是吗？」
    - 自从皋月赏后，%YOU%便按照备战德比的目标为圣王光环加训了很多耐力项目。
    - 如今，尽管不好直接断言最后的成败，但是圣王光环的实力已经足以冲击德比一着。
    - 作为「一流的%UMA%」，圣王光环自然对此非常清楚。
    - 而%SEX%之所以紧张，很大程度上不是因为自身的实力，而是因为比赛的对手。
    - 在隔壁的休息室里，便是圣王光环的同期，「黄金世代」的一员，在中长距离比赛中极具天分的特别周。
    - 尽管圣王光环的中距离适性也不错，但日本德比的赛场足足有2400米，几乎是在中长距离比赛的界限上。
    - 圣王光环如果想在这样的距离上打败擅长中长距离的特别周，就一定需要无与伦比的耐力与意志力。
    - 而这也是圣王光环比皋月赏、希望锦标那时要紧张得多的原因。
    - acc: 1
      content: 「未来的德比%UMA%，现在的一流圣王，请为大家献上一场完美的比赛吧？」
    - 圣王光环下定了决心，离开了休息室。
    - 没想到恰好遇到了隔壁的特别周。
    - 只见%SEX%貌似比圣王光环还要紧张，心事重重的样子。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「日本第一……日本第一……日本……啊！」
    - 特别周一边小声说着什么一边撞在了圣王光环的身上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂，专注一点好吗！」
    - 圣王光环颇为无奈地抓住特别周的肩膀，轻轻晃了晃。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「呜，对不起……我只是一直在想比赛的事情，有点太紧张了所以才撞到圣王同学的……」
    - 结果这样一来，圣王光环反而有些好奇了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么你为什么会紧张呢？你明明很擅长这个距离的啊。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「因为圣王同学太强了，所以我很紧张……」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「呜哇，明明还向妈妈保证要赢下德比的……」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「不如这样吧，我们一起冲线，一起赢下德比！」
    - 圣王光环没忍住笑出了声。
    - 不过不得不说，这一段小插曲也是很好地消解了圣王光环的紧张。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么一起加油吧。」

# 一着
toky_yus_win:
  title: 日本德比后·向着一流
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「今年的德比%UMA%是——圣王光环！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「这位选手以无可辩驳的强大实力与完美表现力压全场，拿下了第一！」
    - %YOU%看着圣王光环冲过终点线，心中激动万分。
    - 于是%YOU%急忙提前去了休息室，为圣王光环做好赛后的休息准备。
    - 很快，圣王光环就喘着粗气推开了休息室的门，瘫坐在休息室的沙发上。
    - acc: 1
      content: 「辛苦了，真是一场很完美的胜利呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼，呼，那还用说？有圣王出手，一定会……」
    - 刺耳的电话铃声突兀地响了起来，打断了%YOU%与圣王光环的小小的庆功会。
    - 圣王光环意识到是自己的手机，赶忙掏了出来。
    - %YOU%发现又是圣王光环的母亲的电话，于是递上毛巾准备溜走。
    - 结果又被圣王光环示意留了下来。、
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「日本德比，我也拿下了哦？」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「嗯，嗯，我看到了。」
    - 圣王光环脸色一喜。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你也看到我的表现了吗？我的起跑，我的加速，我的冲刺和……」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「那位叫『特别周』的%UMA%，跑得很好呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……诶？」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「%SEX%的起跑，%SEX%的加速，%SEX%的冲刺，都很完美呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是赢下比赛的是我才对啊？」
    - 圣王光环的脸色有些苍白。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「可是你并不会每次比赛都有这么好的运气。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「在你出洋相，原形毕露之前，赶快回来吧。」
    - 说完，圣王光环的母亲就挂掉了电话。
    - %YOU%与圣王光环面面相觑，相视无言。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难道……连德比也入不得你的眼吗？」
    - 圣王光环越说越气愤。
    - acc: 1
      content: 「没关系的，圣王，我们只需要继续进步就好了，迟早会证明给她看的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%说得好，既然德比没法让她正眼看我，那就用菊花赏的胜利，让我成为经典年当之无愧的主角吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「到那时候，我就不信她还会对我的成就视而不见！」
    - %YOU%本来想像往常一样应和圣王光环，但突然意识到了什么，没有开口。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的一流%CALLNAME%，你怎么看？」
    - %YOU%没有立刻给出回答，而是想起了圣王光环平日里训练耐力时的吃力程度，以及日本德比最后圣王光环堪称精疲力竭的冲刺。
    - 日本德比2400米的场地尚且如此吃力，那菊花赏的3000米赛道又会如何呢？
    - acc: 1
      content: 「圣王，贸然尝试长距离比赛……真的合适吗？」
    - %YOU%忧心忡忡地向圣王光环说出了自己的疑虑。
    - 圣王光环一本正经地按住了%YOU%的肩膀。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我知道的，毕竟是我自己的身体嘛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，我必须赢下菊花赏。这是那个人走过的路，如果我想证明我比她更加优秀，那么我就必须拿下菊花赏。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请继续为我增加耐力训练吧，一流的圣王是绝对不会轻言放弃的。」
    - %YOU%看着圣王光环坚定的眼神，深吸了一口气。
    - acc: 1
      content: 「如你所愿，圣王。」

# 非一着
toky_yus_lose:
  title: 日本德比后·再度前行
  lines:
    - 很遗憾，尽管圣王光环已经拿出了非赢不可的气势，但最终还是被其他选手抢走了一着。
    - 虽然很可惜，但结果已然注定，于是%YOU%来到了圣王光环的休息室。
    - 圣王光环此刻正瘫坐在沙发上喘着粗气，目光中满是不甘。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「德比没有拿下……这样一来，要想证明一流，就只能靠菊花赏了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流的圣王应该拥有的爱戴与赞赏，都必须通过菊花赏拿下……」
    - 圣王光环向半空中伸出手，虚握了一下。
    - %YOU%想说些什么，却被一阵突如其来的电话铃声堵了回去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，又是她呢。%CALLNAME%请不要走，好吗？」
    - 圣王光环掏出手机看了一眼，随即请求%YOU%不要离开。
    - %YOU%点了点头，坐了下来。
    - 圣王光环犹豫了一会，才接通了电话。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「日本德比输了啊。」
    - 圣王光环一下子泄了气。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「既然碰了钉子，就赶紧回来吧。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「不要继续丢人了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是……」
    - 电话挂断了。
    - 圣王光环紧紧地捏着手机，%YOU%甚至觉得手机快要爆掉了。
    - 之后，圣王光环向着%YOU%转过身来，%YOU%惊讶地发现圣王光环眼中已是泪光粼粼。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我一定，要拿下菊花赏。」
    - %YOU%想起了圣王光环在进行耐力跑训练时表现出的疲惫不堪来，觉得圣王光环在长距离比赛方面的适性可能不是很好。
    - 但是，看着%SEX%如此的神情，%YOU%反倒没办法轻松地说出这个事实。
    - 于是%YOU%郑重地点了点头。
    - acc: 1
      content: 「那我就继续追加耐力训练了。」

ws_summer_start_c:
  title: 经典年集训开始
  lines:
    - 按照学园的传统，%YOU%与圣王光环来到了集训地，开始一年一度的夏季集训。
    - 大巴车刚刚到达集训地宿舍区，圣王光环便急不可待地冲下了车。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这么拥挤的狭小空间，跟圣王的一流气质完全不搭边嘛！」
    - %YOU%默默点了点头，毕竟长途大巴绝对不是什么美好的体验。
    - 一旁的圣王光环颇为夸张地伸了个懒腰，之后便转过身来打量着这归属于特雷森学园的宿舍楼。
    - 只能说，可以感受到历史的厚重感扑面而来。
    - %YOU%偏了偏头，看着圣王光环的表情由慵懒到震惊再到不忿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这楼怎么这么破旧啊！我们真的要在这里住着吗？」
    - %YOU%看着圣王光环有些着急的脸庞，突然有了一种想要捉弄%SEX%的想法。
    - acc: 1
      content: 「其实吧，圣王，我们看待事物的时候要从内外两个方面共同评判。」
    - %YOU%背起双手，装出了一副很高深的样子。
    - 果然，%YOU%这副样子震慑住了圣王光环，%SEX%再度把目光投向了这座宿舍楼。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「难道说里面其实很豪华？哦——呵呵呵！那圣王就要不客气了！」
    - 圣王光环不疑有诈，立刻高高兴兴地拎着行李冲了进去。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以……里面居然也这么陈旧吗？」
    - 圣王光环盯着斑驳的墙面愣了一会，才后知后觉地过来抓住了%YOU%的肩膀。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%不是说这里面很豪华吗？怎么……」
    - %YOU%微笑着制止了圣王光环的动作。
    - acc: 1
      content: 「我可没说过里面很豪华呀。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那%CALLNAME%说的那句话的意思是……」
    - acc: 1
      content: 「我的意思是，经过两个方面的共同评判，你就会发现这座楼真是表里如一呀。」
    - 见到圣王光环疑似有暴走的倾向，%YOU%赶快拉着%SEX%坐下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「虽然这里看起来一点都不一流，但圣王的字典里可没有放弃二字！」
    - 圣王光环又环视了一周宿舍楼内部陈旧的景象。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要证明，哪怕是在这样的条件下，圣王也要……」
    - %YOU%本来已经做好了听圣王光环长篇大论演讲的准备，此刻听到%SEX%突然停下了，有些疑惑。
    - 只见圣王光环气急败坏地跺了跺脚，顺手擦了一下额头上渗出的汗液。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等圣王出了名，一定要给这里装上空调……热死啦！」
    - %YOU%极力压住了上翘的嘴角，带着已经开始冒蒸汽的圣王光环去海边消暑。

ws_temple_fair_c:
  title: 经典年庙会
  lines:
    - 为了缓解连日训练的疲惫，%YOU%邀请圣王光环一起去逛庙会放松一下。
    - 集训地当地的庙会人气很旺，%YOU%与圣王光环差点就被参加庙会的人群冲散了。
    - if: era.get('love:61') >= 50
      lines:
        - 于是圣王光环紧紧地抓住了%YOU%的手。
        - 到后来，%SEX%更是得寸进尺地将%YOU%的整条胳膊抱在怀里。
        - %YOU%试着挣扎了一下，结果反而被圣王光环抱得更紧。
        - 最终%YOU%放弃了，就这样任圣王光环拖着%YOU%在会场里穿梭。
    - if: era.get('love:61') < 50
      lines:
        - 于是圣王光环紧紧地抓住了%YOU%的衣袖。
        - %YOU%试着甩了甩胳膊，还好，行动不太受影响。
    - 在做好不被冲散的准备后，%YOU%与圣王光环才开始享受起庙会的氛围来。
    - acc: 1
      content: 「说起来，很久没有这么放松地出来玩了呢。」
    - 旁边的圣王光环轻哼了一声。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都怪%CALLNAME%，这几天全都是耐力训练，训练结束后一点力气都没有了，只想要回去睡觉。」
    - %YOU%略显尴尬地挠了挠后脑勺。
    - acc: 1
      content: 「那么需要减轻一下训练强度吗？」
    - 没想到，圣王光环摇了摇头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这可不行，圣王的一流之路离不开耐力的训练。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%忘记了吗？我必须要在菊花赏上继续取得胜利，才能让大家都真正认可圣王。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「尤其是……那个人。」
    - 圣王光环的语气突然低沉了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我还没给%CALLNAME%说过我为什么会来到特雷森学园吧？」
    - %YOU%点了点头。
    - acc: 1
      content: 「如果圣王不介意，那么我很乐意了解你的过往。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作为圣王的训练员，你也有义务充分了解圣王的一切呢。那我就慢慢说吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你应该早有耳闻吧，我的母亲，曾经作为赛马娘，在赛场上取得了堪称传奇的战绩。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而退役后，她又一手创办了自己的服装设计公司，再次大获成功。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，她因为事业繁忙的原因，很少有空亲自照料陪伴我，我对她的感情也就一直很淡薄。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但她总是给我设置一些几乎不切实际的目标，而不管我是不是有能力完成。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而我就是在这样的阴影之下成长起来的。」
    - 说完，圣王光环无奈地叹了口气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而在我可以向着闪耀系列赛的职业赛道冲刺之时，她却打算让我学习经商，将来继承她的设计公司……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在之前，我对她的严苛要求不敢造次，但是那次，我实在无法理解。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我向她询问缘由，她却说我『很难出人头地』，除此之外没有别的理由。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因此，我与她大吵了一架，从家里逃了出来。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还好学园收留了我，我才得以作为选手正式踏上闪耀系列赛的赛场。」
    - 圣王光环想起了什么，看了%YOU%一眼。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而多亏了%CALLNAME%，我才能取得一些称得上一流的成绩。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而在那之后，我的母亲也与我打过很多次电话，言里言外都充满了想要我回到她身边的意思。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但以她的身份，自然是说不出来恳求的话，于是只能用这样多言语来打击圣王的自信了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，最近的几次通话里我有听到明显的缓和意味哦，肯定是因为圣王已经越来越有足以谈判的资本了。」
    - 说到这里，圣王光环有些骄傲地笑了起来。
    - 而%YOU%莫名其妙有些担心。
    - acc: 1
      content: 「那么，圣王要回到母亲身边去了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%开什么玩笑？她可是都没认可圣王诶？而且，难道圣王就没有什么想要实现的梦想了吗？」
    - 圣王光环反应很惊讶的样子。
    - if: era.get('love:61') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「更何况……圣王也舍不得%CALLNAME%啊。」
        - 圣王光环抱得更紧了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总之，等她正式认可我之前，我是不会回去的！」
    - 圣王光环抬起头来望向天空。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「与此同时，记者们还是喜欢把我当作『名宿之后』来看待，而这是一流的圣王绝不能接受的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等我拿下更多比赛，收获更多爱戴与赞赏，真正成为了一流的圣王之后，再考虑回不回去吧！」
    - acc: 1
      content: 「既然如此，那就一定要拿下菊花赏了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！这是肯定的！%CALLNAME%，就请继续为圣王安排耐力训练吧！」

# 经典年集训结束
ws_summer_end_c:
  title: 阴霾
  lines:
    - 很快，夏季集训就要结束了。
    - 其他的%UMA%们已经结束了全部的训练，开始在海边肆意游玩放松，而圣王光环仍旧在进行追加训练。
    - %YOU%看了看一望无际的沙滩与大海，无奈地叹了口气。
    - 其实%YOU%也想好好放松一下，但圣王光环颇为强硬地要求%YOU%为其安排追加训练。
    - 所以最终还是只能看着圣王光环进行一轮轮的耐力跑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼……呼……我的成绩怎么样？」
    - %YOU%拿起一边的秒表看了一眼，貌似并没有什么太大的进步。
    - 于是%YOU%悄悄地按了一下复位键。
    - acc: 1
      content: 「还不错！加油吧，圣王！」
    - 圣王光环蹙着眉上前抢走了秒表，%YOU%则装出一副无辜的样子来。
    - acc: 1
      content: 「真的啦，请你赶快去休息吧！」
    - 圣王光环又按了几下秒表，这才有些不满地将之抛回给%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我还撑得住，还可以再来一轮……」
    - 可是急促的喘息已经出卖了%SEX%。
    - %YOU%叹了口气，站起身来，扶住了圣王光环的肩膀。
    - acc: 1
      content: 「请休息一下吧，跑坏了身体可不是一流的表现哦。」
    - 闻言，圣王光环才不情愿地坐了下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明圣王完全不累的，在这里休息简直就是浪费时间嘛……」
    - %YOU%的注意力很快就从圣王光环不满的嘟囔声中转向了%SEX%的腿。
    - 圣王光环的腿显然无法胜任长期高负荷的运转，此刻正在微微颤抖着。
    - 圣王光环显然是更适合冲刺的类型，如果贸然挑战长距离的耐力比拼，无疑相当于完全将自己的弱点暴露出来……
    - 如此一来，菊花赏真的是一个合理的选择吗？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「圣王跟你说话呢！你在看哪里啊！」
    - %YOU%急忙抬起头，却对上了圣王光环有些恼怒的眼神。
    - 为了避免误会，%YOU%只得将自己脑海中的想法吐了出来。
    - acc: 1
      content: 「圣王，我在想，你可能……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「圣王收回你发表意见的权利。」
    - 圣王光环非常干脆地打断了%YOU%的话。
    - acc: 1
      content: 「……诶？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实刚刚训练的时候我已经感觉到了，那种吃力沉重的感觉。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，我必须通过正统的经典三冠路线证明自己，才能让那个人认可我！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只有这样，我才能彻底摆脱她带给我的阴影，才能成为受人景仰的圣王。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因此，请不要说那样的话了。菊花赏我是一定要参加的，而且一定要拿下。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%现在懂了吗？」
    - 圣王光环殷切地看着%YOU%。
    - %YOU%沉默了许久，最终下定了决心。
    - acc: 1
      content: 「知道了，我会继续安排耐力训练的。」
    - 圣王光环一喜，就要站起身来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「很好，那么圣王的一流训练要继续了……呃……」
    - 看起来是训练强度太大导致的肌肉酸痛，而且已经严重到无法行走的地步了。
    - if: era.get('love:61') >= 75
      lines:
        - 于是圣王光环理所应当地向%YOU%伸出了手。
        - %YOU%面对如此场景，只得弯下腰去，把自家担当抱了起来。
        - 理所应当地在返回宿舍的路上被大家指指点点了。
    - if: era.get('love:61') < 75
      lines:
        - 于是%YOU%搀扶着圣王光环勉强站了起来。
        - %YOU%与圣王光环就这样以龟速慢慢挪回了宿舍。

before_kiku_sho:
  title: 菊花赏前
  lines:
    - %YOU%像往常一样在休息室内陪着将要进行比赛的圣王光环。
    - 不过，这次完全不同于以往。
    - 之前的比赛，尽管同样充满了不确定性，但至少%YOU%完全相信圣王光环的实力与意志。
    - 而这次，无论是%YOU%还是圣王光环自己，都非常清楚圣王光环并不适合长距离比赛这一事实。
    - 尽管在这之前已经进行过了堪称地狱的耐力训练，但这无非只是稍微缩小了与其他选手的差距而已。
    - %YOU%担心地看了圣王光环一眼，发现%SEX%的脸色十分苍白。
    - 而%SEX%整个身体都在因为紧张而颤抖。
    - %YOU%默默地握住了%SEX%冰凉的手，用自己的体温为%SEX%加油打气。
    - acc: 1
      content: 「圣王，身体还好吧？没有哪里不舒服吧？」
    - 圣王光环勉强笑了笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「完全没有，圣王现在可是很强的呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「区区3000米的菊花赏，怎么可能是我圣王光环的对手？」
    - 圣王光环强撑着摆出一副无所畏惧的样子。
    - acc: 1
      content: 「嗯，我相信你，只要尽全力就好了。」

# 一着
kiku_sho_win:
  title: 菊花赏后·真正的一流？
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「比赛进入最后的冲刺阶段了！各位%UMA%一起加速，场面很壮观啊。」
    - content:
        - fontWeight: bold
          content: 实况
        - 「排在最前方的是圣王光环选手呢。」
    - content:
        - fontWeight: bold
          content: 解说
        - 「真是奇怪，按理来说圣王光环选手更适合中短距离的比赛，菊花赏可是标准的长距离比赛呢。」
    - content:
        - fontWeight: bold
          content: 实况
        - 「是啊，而且%SEX%整场比赛的表现也很拼命，似乎并不只是想在长距离试水，而是真真切切地想要胜利呢。」
    - content:
        - fontWeight: bold
          content: 解说
        - 「会不会是因为圣王光环的母亲呢？想要通过经典三冠的最后一冠向着那位靠拢什么的？」
    - 尽管看不到圣王光环的表情，但%YOU%猜测圣王光环听到解说的话后心里很可能会有些不舒服。
    - content:
        - fontWeight: bold
          content: 实况
        - 「不过似乎拼命拼得有些过头了呢？」
    - %YOU%赶紧将目光投向赛场，尽管圣王光环仍旧牢牢把控着第一名的位置，但%SEX%的步伐已经开始紊乱。
    - 而后面的%UMA%们尽管距离圣王光环还有一段距离，但大都步伐稳健，像是还留有余力。
    - %YOU%默默为圣王光环祈祷着。
    - 很快，后面的%UMA%加快了速度，拉近了与圣王光环的距离，眼看着就要超越了。
    - content:
        - fontWeight: bold
          content: 实况
        - 「圣王光环终究还是不适合长距离比赛！难道败局就要注定了吗？」
    - %YOU%闭上了眼睛，不忍心看到圣王光环被超越的瞬间。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀啊啊啊啊啊啊——」
    - %YOU%听到了圣王光环的呐喊声，那是如此的清晰，仿佛是在%YOU%心里响起。
    - %YOU%试探着睁开眼，惊惧地发现圣王光环的脸色已经由苍白转为一种病态的红润。
    - 而%SEX%也得以再次加速，最终狠狠甩开了第二名，踏过了终点线。
    - %YOU%下意识推开了身边的观众，翻过了观众席的护栏。
    - content:
        - fontWeight: bold
          content: 实况
        - 「这位观众，请不要进入场地！比赛还没结束呢！」
    - %YOU%充耳不闻，只是一路跑到圣王光环身边，在圣王光环涣散的目光中搀扶住了%SEX%。
    - acc: 1
      content: 「我是圣王光环的训练员，圣王光环现在不接受任何采访，请谅解。」
    - %YOU%快速向目瞪口呆的观众们做了一个解释，随即搀扶着圣王光环向休息室走去。
    - divider: true
      content: ⏰
      position: left
    - %YOU%带着圣王光环来到了休息室，随后赶快扶着圣王光环坐在了沙发上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……我做到了……」
    - 圣王光环艰难而又有些兴奋地说着。
    - acc: 1
      content: 「很棒哦，现在可以好好休息了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行……圣王还有一件事要做……」
    - 圣王光环示意%YOU%拿来了%SEX%的手机，然后费力起身，拨通了一个电话号码。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「圣王？找我有事吗？」
    - 意料之外地，圣王光环的母亲貌似并没有关注这场比赛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「菊花赏，我拿下了哦？我……」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「嗯嗯，我现在认可你了。还有别的事吗？」
    - 随后，电话就挂断了。
    - %YOU%与圣王光环捧着手机，面面相觑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我早该猜到的……」
    - 圣王光环苦笑着向%YOU%摇了摇头。
    - 随后，圣王光环再也支撑不住意识，昏倒在了%YOU%的怀里。
    - acc: 1
      content: 「圣王？圣王？」
    - %YOU%赶快找来了为比赛提供应急医疗服务的救援队。
    - 还好，只是用力过度导致的昏迷，只需要一段时间的静养就好了。
    - 但是，心理上受到的创伤，可能就不那么好处理了……

# 非一着
kiku_sho_lose:
  title: 菊花赏后·无名之辈
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「比赛进入最后的冲刺阶段了！各位%UMA%一起加速，场面很壮观啊。」
    - content:
        - fontWeight: bold
          content: 实况
        - 「排在最前方的是圣王光环选手呢。」
    - content:
        - fontWeight: bold
          content: 解说
        - 「真是奇怪，按理来说圣王光环选手更适合中短距离的比赛，菊花赏可是标准的长距离比赛呢。」
    - content:
        - fontWeight: bold
          content: 实况
        - 「是啊，而且%SEX%整场比赛的表现也很拼命，似乎并不只是想在长距离试水，而是真真切切地想要胜利呢。」
    - content:
        - fontWeight: bold
          content: 解说
        - 「会不会是因为圣王光环的母亲呢？想要通过经典三冠的最后一冠向着那位靠拢什么的？」
    - 尽管看不到圣王光环的表情，但%YOU%猜测圣王光环听到解说的话后心里很可能会有些不舒服。
    - content:
        - fontWeight: bold
          content: 实况
        - 「不过似乎拼命拼得有些过头了呢？」
    - %YOU%赶紧将目光投向赛场，尽管圣王光环仍旧牢牢把控着第一名的位置，但%SEX%的步伐已经开始紊乱。
    - 而后面的%UMA%们尽管距离圣王光环还有一段距离，但大都步伐稳健，像是还留有余力。
    - %YOU%默默为圣王光环祈祷着。
    - 很快，后面的%UMA%加快了速度，拉近了与圣王光环的距离，眼看着就要超越了。
    - content:
        - fontWeight: bold
          content: 实况
        - 「圣王光环终究还是不适合长距离比赛！难道败局就要注定了吗？」
    - 尽管圣王光环已经拼尽了全力，但长距离特化的其他%UMA%还是轻松超过了圣王光环。
    - 比赛结束了。
    - %YOU%看着赛场上目光怔怔的圣王光环，内心也同样难受起来。
    - 但圣王光环拼了命的冲刺%YOU%是看到了的，因此必须要为圣王光环做好赛后的准备工作。
    - 于是%YOU%提前来到了圣王光环的休息室。
    - 很快，圣王光环拖着极度疲惫的步伐进入了休息室。
    - acc: 1
      content: 「圣王，赶快来休息吧。」
    - 圣王光环疲惫地看了%YOU%一眼，随后便昏倒在地。
    - %YOU%赶快找来了为比赛提供应急医疗服务的救援队。
    - 还好，只是用力过度导致的昏迷，只需要一段时间的静养就好了。
    - 似乎是因为有什么很深的执念的缘故，圣王光环很快就醒了过来。
    - %YOU%赶快凑了过去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的母亲，有打过电话来吗？」
    - %YOU%愣了一下，没想到圣王光环醒来后的第一句话居然是这个。
    - 但同时，圣王光环的手机就在休息室，似乎一直都没有响起过。
    - 所以%YOU%对着圣王光环摇了摇头。
    - acc: 1
      content: 「那么，现在就给她打过去吗？」
    - 圣王光环沉默了许久，最终还是苦笑着对%YOU%摇了摇头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不必了，谢谢%CALLNAME%。」

# 经典年11月第一周
ws_determination:
  title: 一流的决心
  lines:
    - 菊花赏赛后的某一天，圣王光环来到了训练员室。
    - acc: 1
      content: 「圣王？有事吗？」
    - %YOU%停下了手中的工作。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，圣王这次来可是打算商量大事的。」
    - 圣王光环毫不客气地坐在了%YOU%的沙发上，大有一副%SEX%才是这里的主人的景象。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%大概也看到了吧，圣王在菊花赏最后冲刺中的表现。」
    - %YOU%点了点头。
    - acc: 1
      content: 「很有决心的冲刺哦。」
    - 圣王光环听到%YOU%的回答后反而愣了一会。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！我不是说这个啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是说，%CALLNAME%应该能看出来，我最后阶段的体力已经所剩无几了吧。」
    - %YOU%想起了圣王光环拼尽全力的冲刺，与那时%SEX%苍白得吓人的脸色。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，长距离并不是适合圣王的一流的道路。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我曾经以为只要做了足够多的耐力练习，就可以克服适性上的不足。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「结果%CALLNAME%也看到了，只有3000米的菊花赏就足以让我脱力，陷入昏迷。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「按照所谓的正统路线，下一场比赛就该是年末的有马纪念和资深年的春季天皇赏了吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有马纪念还好说，但是那3200米的春季天皇赏，就连圣王也没有取胜的信心。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因此，是时候严肃地讨论一下，做出这个艰难的决定来了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「圣王要抛弃所谓的正统路线，挑战短距离比赛。」
    - 说实话，%YOU%对于圣王光环的决定并不感到稀奇。
    - 因为自从招募之时开始，%YOU%就敏锐地注意到，堪称凌厉的冲刺乃是圣王光环独特而足以致胜的武器。
    - 而经典年的圣王光环并没有太多施展这项天分的机会，这也使得%SEX%在「黄金世代」中，成为了最没有存在感的一位。
    - 如今，圣王光环提出要转战短距离赛事，这正是将%SEX%的冲刺天分发挥到极致的大好时机。
    - 因此，%YOU%对于圣王光环的决定十分支持。
    - 但接踵而来的还有一系列问题。
    - 首当其冲的便是如何让外界知道这一决定。
    - 但圣王光环却摆了摆手，一副风轻云淡的样子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「放心啦，一流的圣王自有应对的办法！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，对啦！%CALLNAME%，最近有什么比赛吗？要知名度高的那种！」
    - 虽然不知道圣王光环用意何在，但%YOU%还是拿起了赛事日历，发现最近有一场名为「伊丽莎白女王杯」的G1比赛要举办。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！就请%CALLNAME%在比赛当天陪我去一趟赛场吧！」
    - %YOU%摸了摸后脑勺，更加疑惑了。
    - acc: 1
      content: 「首先现在可来不及报名了哦，其次这场比赛可是中距离比赛的呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「圣王可不是想参加这场比赛！总之就请%CALLNAME%到时候陪我一起吧！」
    - 说完，圣王光环就自顾自离开了训练员室。

# 经典年11月第二周
ws_the_way:
  title: 宣告一流决心的方式
  lines:
    - 伊丽莎白女王杯举行的日子就要到了，%YOU%在训练员室里静静等待着圣王光环。
    - 终于，圣王光环敲开了训练员室的门。
    - %YOU%有点惊讶，因为圣王光环是穿着决胜服来的。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么我们走吧。」
    - 圣王光环并没有给%YOU%询问缘由的机会，就拉着%YOU%出门了。
    - divider: true
      content: ⏰
      position: left
    - 伊丽莎白女王杯，尽管知名度不如经典三冠等热门比赛，但作为中距离G1比赛，还是吸引了很多观众与记者的。
    - %YOU%被圣王光环要求呆在原地，看着%SEX%昂首挺胸地走向正在调试设备的记者们。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「记者朋友们！」
    - 记者们被吓了一跳，抬起头来发现居然是圣王光环，疑惑之余也有些好奇。
    - content:
        - fontWeight: bold
          content: 记者A
        - 「如果我没有记错的话，您没有报名参加这场比赛吧？」
    - 圣王光环略微点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我今天并不是为了比赛而来，而是想借助你们向外界传达我的一个重要的决定！」
    - 记者们见到圣王光环一本正经的样子，赶快架设好设备。
    - content:
        - fontWeight: bold
          content: 记者B
        - 「请吧，不过您选择这样的方式而不是召开新闻发布会，倒显得有些奇特呢。」
    - 圣王光环清了清嗓子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一直以来关注着我的粉丝朋友们！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是圣王光环，今天我要向各位宣布我的一流决心！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在经典年，我参加了经典三冠的比赛，这可能会让大家以为我要在正统的中长距离赛道上深耕，就像我的母亲一样；」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，菊花赏的经验告诉我，最适合圣王的道路并不是中长距离比赛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因此，我与训练员经过慎重讨论后一致决定，在资深年，我要向着短距离赛道进军。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的下一场比赛，将会是资深年举行的『高松宫纪念』！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「另外，我并不会太在意所谓『母亲的粉丝』的看法。请大家明白，我是圣王光环，一流的圣王，而不是我母亲的什么附属品！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请大家继续关注我的比赛，见证圣王成就一流的瞬间！」
    - 说完，圣王光环鞠了个躬，向%YOU%走过来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走吧，%CALLNAME%！」
    - %YOU%看了看圣王光环身后呆若木鸡的记者们。
    - acc: 1
      content: 「不留下来回答问题吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那样反而会让圣王的宣告显得太拖沓了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，圣王可不是今天的主角哦，可不能抢了参赛选手们的风头！」
    - 圣王光环看到已经有几个记者反应过来想要追赶，便急忙拉着%YOU%离开了。

# 经典年11月第三周，事件结束后干劲-2
ws_break:
  title: 决裂
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「果然还是要多加一些速度训练吧。」
    - 圣王光环扒着%YOU%的办公桌，百无聊赖地看着正在为%SEX%制定训练计划的%YOU%。
    - 自从圣王光环高调宣布要转战短距离赛道，%YOU%就开始忙着为%SEX%准备短距离的训练计划。
    - 而自从削减了耐力训练之后，圣王光环的精神状态明显比以前好了很多。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「话说%CALLNAME%知道天空%THEY%的动向吗？」
    - acc: 1
      content: 「大概是按部就班准备有马纪念和天皇赏吧。」
    - %YOU%暂时放下了手中的工作，想了想。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！这就意味着在短距离赛道，圣王就是唯一的强者！」
    - %YOU%看了一眼沉浸在幻想中的圣王光环，对方此时可能已经开始想象获胜的瞬间了。
    - 就在%YOU%打算不理会圣王光环而继续先前的工作之时，圣王光环的手机突然响了起来。
    - 圣王光环手忙脚乱地把手机掏了出来，犹豫了一下。
    - 但最终还是接通了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂……？」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「你到底在做什么？」
    - 不同于前几次冷漠的声音，圣王光环的母亲这次看来是十分愤怒。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「你知道你做了些什么吗？从经典三冠一下子跳到短距离，你是怎么敢做出这样离谱的决定的？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「首先，我……」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「这已经不仅仅是你自己的问题了，更会让我也颜面扫地！」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「难道这几年你一点都没有反省吗？」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「圣王光环，我简直对你失望到家了！」
    - 圣王光环的母亲以极快的语速和极强的气势压得圣王光环几乎无法插嘴。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「请你赶快回家来吧，你去参加短距离比赛只会出丑的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行。我是绝对不会回去的。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「你说什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我说，我要留在特雷森，参加高松宫纪念，然后在短距离称霸！」
    - 看样子圣王光环再也无法忍耐。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你总是以一副高高在上的样子训斥我，而从不关心我取得的成就！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自始至终都不关心我的成长，只会干涉我的决定，扰乱我的心情！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「既然如此，就请你从此消失在我的生活里吧！」
    - 话音未落，圣王光环主动挂断了电话。
    - 而后，圣王光环茫然地跌坐在了地上。
    - %YOU%急忙起身，要把圣王光环扶起来。
    - if: era.get('love:61') >= 75
      lines:
        - 没等%YOU%走到圣王光环身边，%SEX%便跳起来抱住了%YOU%，将脸埋在了%YOU%的肩胛处。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……我的身边只剩下您了，请无论如何也不要离开我……」
        - %YOU%抱着圣王光环，不住地抚摸着%SEX%的后背。
        - acc: 1
          content: 「我不会离开你的，我保证。」
        - 圣王光环的身体开始颤抖，%YOU%突然感觉到肩膀上传来一阵湿意。
        - 那个坚强乐观，开朗自信的圣王光环，居然哭了出来。
        - 很快，%YOU%左肩部位的衣物被完全洇湿了。
        - acc: 1
          content: 「圣王，我会一直与你走到最后的，请赶快振作起来吧。」
        - 圣王光环这才依依不舍地松开了%YOU%。
        - 而此时%SEX%的眼睛已经由于哭泣而变得红肿异常。
        - %YOU%颇为怜惜地摸了摸%SEX%的头。
        - acc: 1
          content: 「今天就请你回去好好休息吧，我会继续为你制定短距离的训练计划的。」
        - 圣王光环用力点了点头。
    - if: era.get('love:61') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……请你继续为圣王制定训练计划吧。」
        - acc: 1
          content: 「圣王，真的没事吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……请继续吧，我……我没事的。」
        - %YOU%默默坐下，继续为圣王光环制定着以冲刺训练为主的训练计划。
        - 而圣王光环默默地站起身来，离开了训练员室。
        - %SEX%用%SEX%落寞的背影告诉%YOU%，不必追上去了。

oc_new_year_s:
  title: 资深年新年
  lines:
    - 时光飞快，转眼间%YOU%已经与圣王光环来到了第三个年头。
    - 资深年对%UMA%的重要性不言而喻，强敌如林，但同样也是扬名的最好时机。
    - 而对于圣王光环来说，资深年尤其重要。
    - %SEX%已经决定了转向短距离赛道，而资深年的一众短距离比赛，便是验证圣王光环短距离适性的最终考验。
    - 不过，在那之前，还是很有必要好好放松一下的。
    - 于是%YOU%带着圣王光环来到了学院附近的神社，进行新年祭拜活动。
    - 但果然最受期待的还是抽签活动啊。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我说，%CALLNAME%从出门开始就抱着的那个箱子是什么呀？」
    - 圣王光环忍了一路，终于在快要到达神社的时候忍不住向%YOU%提问道。
    - %YOU%狡黠地眨了眨眼。
    - acc: 1
      content: 「很快你就知道了哦。」
    - 圣王光环见无法得到想要的答案，只得气鼓鼓地走在前面，把%YOU%落在后边。
    - divider: true
      content: ⏰
      position: left
    - 很快，祭拜活动就结束了，圣王光环也开始摩拳擦掌地准备抽签活动了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！圣王已经有十足的一流预感了哦！这次一定可以抽到大吉哦！」
    - 圣王光环结束了抽签前的演讲，于是表情严肃地将手伸入了抽签箱中。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一定是大吉……诶？」
    - 是「凶」。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行，再试一次！」
    - 圣王光环又抽了一签。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「开玩笑的吧？」
    - 这次是「大凶」。
    - 圣王光环气急败坏地抽了一次又一次，可惜始终没有抽到「大吉」。
    - 见到圣王光环有失控的前兆，%YOU%赶快拿出来了那个箱子。
    - acc: 1
      content: 「圣王，为什么不来试试『一流的抽签』呢？」
    - 不得不说，那两个字仿佛有一种魔力，硬生生打断了圣王光环再次抽签的动作。
    - %SEX%几乎是一瞬间就凑到了%YOU%准备好的「一流抽奖箱」前面。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的抽签活动简直就是小孩子的游戏嘛！真是有够无聊的！」
    - 圣王光环一边发着牢骚，一边乖巧地将手伸进了抽奖箱。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总不会又是凶吧？」
    - 圣王光环谨慎地看了%YOU%一眼，才慢慢看向了手中的签。
    - 那根签上写着「一流」。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！一流！果然只有我才是一流的%UMA%呢！」
    - 圣王光环瞬间就忘记了前面抽到的所有不好的签，兴高采烈地举着手中的签跑出了神社。
    - %YOU%叹了口气，抱着抽奖箱追了过去。
    - 箱子里的签，全都写着「一流」二字。
    - 其实按照平时圣王光环的智商，是完全猜得到其中奥秘的。
    - 但是今天的圣王光环貌似有些智商不太够用的样子……
    - 总而言之，也是一个非常有纪念意义的新年呢。

before_takm_kin:
  title: 高松宫纪念前
  lines:
    - 在略显紧张的训练中，高松宫纪念如期来到了。
    - 尽管在比赛之前已经做足了速度与冲刺的训练，但%YOU%对于圣王光环贸然转变赛道的冒险行为还是有些担忧的。
    - 而圣王光环也没有了往日的自信与决心。
    - 在专用休息室里，圣王光环正坐在椅子上，近乎癫狂地梳理着自己的头发。
    - %YOU%看着圣王光环的动作愈发粗鲁，甚至已经将缕缕秀发生生拽了下来，无奈地走上前去。
    - %YOU%抓住了圣王光环的手，强行把%SEX%的手合在%YOU%的双手中间。
    - 圣王光环被%YOU%吓了一跳，也渐渐冷静了下来。
    - %SEX%困惑地看了看手中的发丝，这才慢慢意识到自己的手正在被%YOU%紧紧握着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……」
    - %YOU%看了看圣王光环布满血丝的眼睛，再次叹了口气。
    - 自从做出转战短距离的决定来之后，圣王光环所承受的心理压力便来到了峰值。
    - 哪怕是充满自信的圣王光环，在面对如此豪赌之时，也免不了寝食难安。
    - 对于圣王光环来说，如果不能借助高松宫纪念奠定短距离的基础，那%SEX%的职业生涯便基本上相当于结束了。
    - 但是尽管承受了巨大的压力，圣王光环依旧高质量地完成了%YOU%交给%SEX%的每一项任务。
    - 可以说，%YOU%认为圣王光环完全有实力夺下一着。
    - 可心理上的紧张感却是无法轻易消解的……
    - %YOU%紧紧地握着圣王光环的手，直到%SEX%因为紧张而冰凉的手被%YOU%的体温捂热了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起……在这么重要的时刻，我居然……这可一点都不一流！」
    - 圣王光环狠狠地攥起拳来，眼眶已经泛红。
    - acc: 1
      content: 「尽最大努力就好，如果是一流的圣王，那一定没问题的！」
    - 圣王光环也用力地握住了%YOU%的手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请放心吧，圣王一定会将一着拿下！」
    - 圣王光环深吸一口气，站了起来，向着赛场离开了。
    - %YOU%凝视着圣王光环背影消失的地方，久久没有动作。

# 一着
takm_kin_win:
  title: 高松宫纪念后·何谓一流
  lines:
    - 比赛结束了，全场寂静。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼……呼……」
    - 圣王光环抬起头来，炫目的阳光刺得%SEX%有些睁不开眼。
    - 但名次板上的一着不会作假。
    - 背负着不能输的理由，圣王光环顺利夺得了高松宫纪念的一着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……我做到了！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「高松宫纪念的胜者是——圣王光环！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「这位一流的%UMA%毅然抛弃了经典年熟悉的中距离赛道而挑战短距离，最终大获成功！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「不愧是『一流的圣王』」
    - 出乎%YOU%与圣王光环的意料地，实况第一次没有将圣王光环与「名宿之后」的身份绑定在一起。
    - content:
        - fontWeight: bold
          content: 实况
        - 「我们见证了一场关于前程与名声的豪赌！而毫无疑问，圣王光环得到了最后的胜利！」
    - 观众席上这才传来了海啸般的欢呼声。
    - content:
        - fontWeight: bold
          content: 观众A
        - 「圣王好样的！」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「在短距离也能如此出色，这就是一流啊！」
    - content:
        - fontWeight: bold
          content: 观众C
        - 「圣王请看这里！我是你的忠实粉丝啊！」
    - %YOU%置身在欢呼的浪潮中央，已经是热泪盈眶。
    - 而台下的圣王光环同样如此。
    - 一向极为注重公众形象的%SEX%竟然哭了出来。
    - 圣王光环哽咽得几乎无法言语，因此只是向观众席上深深鞠了一躬。

# 非一着，圣王光环离队，爱慕小于75且好感低于225时直接进入扫地出门结局
takm_kin_lose:
  title: 高松宫纪念后·危在旦夕
  lines:
    - 当圣王光环被追上并赶超的时候，%YOU%如堕冰窖。
    - content:
        - fontWeight: bold
          content: 实况
        - 「圣王光环被反超了！这位赌上一切的前中距离选手还有机会反败为胜吗？」
    - content:
        - fontWeight: bold
          content: 实况
        - 「希望渺茫！终点线已在眼前，而差距还在拉大！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「非常可惜，看来圣王光环选手的短距离之梦就要破裂了！」
    - 败局已然注定，周围的观众们开始为胜者而欢呼。
    - %YOU%瘫坐在椅子上，对周边嘈杂的噪音充耳不闻。
    - 直到周围的欢呼声变成迟疑的讨论声。
    - content:
        - fontWeight: bold
          content: 实况
        - 「圣王光环选手？请问您要去哪里！请您回来好吗！」
    - %YOU%猛地站起身来，却刚好看到圣王光环翻过围栏向场外跑去的背影。
    - acc: 1
      content: 「圣王——」
    - %YOU%几乎是没有片刻迟疑地想要追上去，但周边拥挤的人群阻碍了%YOU%的行动。
    - 等%YOU%好不容易挤出人群，圣王光环的身影已经彻底消失了。

# 资深年四月第一周，高松宫纪念一着才可触发
ws_special_letter:
  title: 特别的感谢信
  lines:
    - 在上班的路上遇到了%MINORU%。
    - %SEX%提到有一封寄给圣王光环和%SEX%的训练员的粉丝感谢信，已经送到了%YOU%的训练员室里。
    - %YOU%愣了一下，随后兴奋地向%MINORU%道谢。
    - 分别后，%YOU%赶快来到了训练员室，推开了门。
    - 果然，桌子上有一个洁白的信封。
    - %YOU%将其拿起来看了看寄件地址，却又脸色怪异地把它放下了。
    - 随后%YOU%开始为圣王光环安排接下来的训练项目，同时也在等候着%SEX%。
    - 很快，圣王光环来了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！一流的圣王光环驾到！」
    - %YOU%看着一如既往高调的圣王光环，憋着笑向%SEX%展示了一下手中的信封。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是什么？」
    - acc: 1
      content: 「粉丝感谢信哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么？快拿过来让圣王看看！」
    - 果然，圣王光环一听到感谢信就兴奋起来，%SEX%来到桌子前一把就抢走了那封信。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「让我看看是谁寄的……啊嘞？大阪市拘留所？」
    - 圣王光环兴奋的表情凝固在了脸上。
    - %YOU%看着圣王光环的样子，不由得笑出声来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为什么是拘留所啊，难不成我的粉丝都不是什么好人吗？」
    - 圣王光环一下子泄了气。
    - %YOU%止住笑，示意%SEX%打开看看。
    - 圣王光环一边嘟囔着一边打开了信封。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「特雷森学园，%CHARA_FULL%与%SEX%的训练员收。」
    - 圣王光环抬起头来看了%YOU%一眼，随后继续读着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是一名来自大阪市拘留所的您的粉丝，前些日子看到了您参加高松宫纪念的比赛视频。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在这之前，我以为您会继续在中距离赛道上奔跑。」
    - ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……之后我经常想，圣王光环在资深年毅然转向短距离赛道，并且通过自己的努力顺利夺冠，这是何等令人钦佩啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这场比赛真的让我非常感动，我也要早日改过自新，回归社会，再次为圣王光环声援。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真挚的，被救赎者。」
    - 随着圣王光环读完了这封特别的粉丝感谢信，训练员室内陷入了沉默。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的粉丝……还真是特别呢？」
    - 圣王光环也不知道该怎么评价了。
    - acc: 1
      content: 「这说明，圣王依靠自己的实力，成为别人世界里的光了哦。」
    - 圣王光环听到%YOU%的话后愣了一会。
    - 随即便开始笑逐颜开地将手里的信挥来挥去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！果然是一流的我才能做到的呢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么接下来，就让%CALLNAME%对我进行更加一流的训练，让我成为更一流的我吧！」

# 高松宫纪念非一着，资深年四月第一周，爱慕大于等于75或好感大于等于225
ws_crisis:
  title: 危局与转机
  lines:
    - 高松宫纪念的失利使得圣王光环不辞而别，而这也将外界的狂风骤雨毫无保留地倾泻到了%YOU%的头上。
    - %YOU%对于这件事自然是十分头疼的。
    - 为了寻找圣王光环的踪迹，%YOU%甚至不曾回到学园。
    - 而且 %TASTE% 与 %MINORU% 也提到过，圣王光环的母亲已经多次向学园表达过不满，意欲使学园强行辞退%YOU%。
    - 为此，学园方面不惜以多年以来的声望为担保，向圣王光环的母亲保证%YOU%一定可以顺利找到圣王光环。
    - 如此一来，%YOU%的压力便又大了几分，连日的搜寻工作更是让%YOU%精疲力竭。
    - 然而%YOU%手中的线索仅仅只有圣王光环离去的大致方向，除此之外一无所有。
    - 所以%YOU%最终还是回到了熟悉的训练员室以稍微休息，顺便思考一下未来的道路。
    - %YOU%的精神极度疲惫，直到%YOU%突然看到了桌子上的一张纸。
    - %YOU%的心脏几乎停止了跳动。
    - 尽管不曾翻看，但直觉告诉%YOU%，这张纸便是%YOU%找到圣王光环的最后机会。
    - %YOU%几乎是扑到了桌子前面，拿到了那张纸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，非常抱歉。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我在高松宫纪念结束后的动作，一定为您带来了不小的烦恼。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请原谅我的贸然行动，其实我本意并非如此。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我只是……不敢面对接下来的指责与嘲笑。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的母亲一定也去过学园了吧，希望她不会对您做出什么过激的举动来……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请将这封信转交给她，告诉她一切都是我的责任，与您无关。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「另外，请您不要挂念我了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我很快就要离开这里了，请您就此忘记我，去寻找更优秀的孩子吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「并不一流的 %CHARA% 留」
    - %YOU%已无暇继续思考，抓起那张纸就冲出了训练员室。

# 接上一个事件，地点为车站
os_give_up:
  title: 自暴自弃
  lines:
    - 根据圣王光环提到过的将要离开，%YOU%下意识来到了车站。
    - acc: 1
      content: 「请问您有没有见到过一位棕色头发的%UMA%？」
    - content:
        - fontWeight: bold
          content: 售票员
        - 「确实见到过！%SEX%大概是往那边的公交车站去了。」
    - 没想到一下子就找到了线索。
    - %YOU%千恩万谢地感谢过售票员后，按照售票员的指示向那个公交车站走去。
    - 路上空无一人，天空之上厚重的、铅黑色的云层正在迅速聚集。
    - 时间明明还是正午，但天气却像是已经来到了夜晚一样。
    - 突然，云层之上传来了隆隆的雷声。
    - 瓢泼大雨瞬间将%YOU%的全身上下淋湿了。
    - %YOU%仿佛完全没有察觉一般继续向前，直到模糊的视线中出现了一道身影。
    - acc: 1
      content: 「圣——王——！」
    - %YOU%竭尽了全力，将数日内遭受的压力尽数喊了出来。
    - 那道身影剧烈地颤抖了一下，却没有回过头来。
    - %YOU%顶着愈发厚重的雨幕，快步跑到圣王光环身旁。
    - acc: 1
      content: 「圣王……我终于找到你了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请……请回吧，没必要在并不一流的我身上浪费时间的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我辜负了%CALLNAME%的信任，辜负了粉丝们的信任，我已经……我已经……」
    - 圣王光环的身体开始剧烈地颤抖，似乎已经开始哭泣。
    - if: era.get('love:61') >= 75
      lines:
        - acc: 1
          content: 「就让我再任性一次吧……回来吧，圣王！」
        - %YOU%像是突然想到了什么一样，从衣兜内掏出来了一张皱皱巴巴的小纸片。
        - 这张纸片上面写着「可以让圣王做任何事情，解释权归圣王所有」。
        - acc: 1
          content: 「请圣王回到我的身边！」
        - 圣王光环看到那张纸片，愣住了。
        - 片刻之后，%SEX%的眼泪便已决堤。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「解释权归我，%CALLNAME%……请回吧，就这样……忘记我吧……」
        - 圣王光环狠心背过了身去，就要离开。
        - 恍惚间，%YOU%看到了与圣王光环再也无法相见的悲惨的未来。
        - 于是%YOU%上前一步，抓住了圣王光环的手。
        - acc: 1
          content: 「圣王，我无法想象没有你的日子……」
        - %YOU%鼻子一酸，也哭了出来。
        - 圣王光环用了点力气，但终究是没舍得把手抽走。
        - acc: 1
          content: 「这次失败没关系的，跟我回去，我们重整旗鼓再接再厉！」
        - 圣王光环猛然转过身，抱住了%YOU%。
        - %YOU%下意识想要后退以免圣王光环被%YOU%身上的雨水弄湿，但圣王光环抱得很紧。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那就说好了！%CALLNAME%必须陪着我，直到我再次找回自信！」
        - %YOU%没有说什么，只是同样用力地抱紧了圣王光环。
        - 尽管雨越下越大，但%YOU%与圣王光环丝毫没有放开对方的意愿。
        # 获得轻度自暴自弃，干劲上限保持在一般
    - if: era.get('love:61') < 75
      lines:
        - acc: 1
          content: 「我发自内心相信圣王的。」
        - %YOU%回想起遥远的那场选拔赛。
        - acc: 1
          content: 「圣王，请相信我作为专业训练员的眼光。」
        - 圣王光环泪眼婆娑地看着%YOU%。
        - 片刻之后，%SEX%的眼泪便已决堤。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你真的信任我吗？哪怕我已经一无所有？」
        - %YOU%郑重地点了点头。
        - 圣王光环用手背擦了擦眼泪。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那就……回去吧。%CALLNAME%这样淋雨可是会感冒的。」
        # 获得中度自暴自弃，干劲上限保持在较差

# 资深年四月第二周，高松宫纪念一着才可触发
ws_legend:
  title: 传奇伊始
  lines:
    - 高松宫纪念早已过去，但是这场比赛对圣王光环的职业生涯的重要性不言而喻。
    - 首先是可以通过这场比赛证明圣王光环的短英距离适性。
    - 其次也可以为圣王光环培养「只属于圣王的一流的粉丝们」。
    - 既然如此，那么为圣王光环考虑下一步比赛的工作，也就要提上日程了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！一流的圣王驾到！」
    - 圣王光环依旧非常自然地推开了训练员室的门，大笑着走了进来。
    - 之后也是非常没有距离感地凑了过来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在干什么呢，我的一流训练员？」
    - %YOU%把手里的比赛日历递给圣王光环。
    - acc: 1
      content: 「圣王有没有什么想要参加的比赛呢？」
    - 圣王光环接过比赛日历看了看。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%说说，这个安田纪念怎么样呢？」
    - %YOU%想了一下，安田纪念是 1600 米的 G1 级英里比赛。
    - 作为圣王光环承上启下的下一步目标，是十分合适的。
    - 于是%YOU%点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看来圣王很有眼光呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过话说回来，不太清楚天空%THEY%现在怎么样了呢。」
    - %YOU%想了想，「黄金世代」的几人中，貌似只有圣王光环是不太擅长中长距离的。
    - acc: 1
      content: 「可能正在准备春季天皇赏吧？」
    - 的确，春季天皇赏作为知名度极高的长距离比赛之一，几乎是每一位长距离选手的必经之路。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那样看来……哦——呵呵呵！」
    - 圣王光环突然开始在%YOU%耳边大笑。
    - %YOU%捂住了有些嗡嗡作响的耳朵，不解地看着圣王光环。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天空%THEY%的注意力都在春季天皇赏上，那么在短英距离赛道上不就只剩下圣王了嘛！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有强敌制约，那么圣王可要横扫今年的短英距离比赛了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样一来，圣王就会成为当之无愧的主角！」
    - %YOU%思考了一下，圣王光环在高松宫纪念上的表现堪称强势，这样一来完全有可能制霸今年的短英距离比赛，成就真正的一流。
    - acc: 1
      content: 「我很期待哦，请继续努力吧！」
    - 圣王光环大笑着离开了训练员室。

# 安田纪念一着，高松宫纪念一着才可触发
yasu_kin_win_s:
  title: 安田纪念后·属于圣王的路
  lines:
    - 尽管圣王光环从未接触过英里级比赛，但犀利的加速与冲刺还是将圣王光环捧上了一着的宝座。
    - content:
        - fontWeight: bold
          content: 实况
        - 「圣王光环！胜利者是圣王光环！%SEX%裹挟着高松宫纪念胜利之势，再度取得英里比赛的胜利！」
    - 圣王光环冲过终点线的同时，观众席上爆发出了空前绝后的欢呼声。
    - 大家欢呼着，雀跃着，为见证了又一位短英距离王者的诞生而兴奋着。
    - 圣王光环显然也听到了这堪称宏伟的欢呼声，耳朵笔直地向上竖着，而其微微的颤动也表明了此时的圣王光环内心并不平静。
    - 但%SEX%只是表情淡然地向观众席鞠了一躬，便离开了。
    - %YOU%看着圣王光环的所作所为，有些嫌弃的同时却由衷地高兴着。
    - 于是%YOU%提前赶到了休息室等候着圣王光环。
    - 很快，圣王光环推开了休息室的门，接过了%YOU%递上的毛巾与饮料。
    - acc: 1
      content: 「感觉如何？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「简直是超一流的体验呢！」
    - 圣王光环开始手舞足蹈地向%YOU%描述起比赛的全过程。
    - 看样子%SEX%很享受这次比赛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……到了最后啊，我奋起直追……」
    - 突然，休息室的门被敲响了。
    - content:
        - fontWeight: bold
          content: 工作人员
        - 「请问圣王光环选手方便吗？这边有几位自称是您的狂热粉丝的观众想要找您，我们……几乎拦不住……非常抱歉。」
    - %YOU%与圣王光环对视一眼，皆从对方眼中看到了喜色。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请进请进！」
    - 几位粉丝满脸激动地打开了门，却在门口开始谦让。
    - 圣王光环不禁扶额，随后%SEX%起身，来到了房门口。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那我们出去说吧。」
    - content:
        - fontWeight: bold
          content: 粉丝A
        - 「圣王和圣王的训练员%SIR%，我们是您的忠诚粉丝啊！恭喜夺得了这次比赛的胜利！」
    - content:
        - fontWeight: bold
          content: 粉丝B
        - 「对啊，我们几个都是从高松宫纪念开始关注圣王的，一直以来辛苦了！」
    - 圣王光环听到这句话后却愣了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你们是说……你们从高松宫纪念才开始关注我？」
    - 闻言，几位粉丝有些不好意思地低下了头。
    - content:
        - fontWeight: bold
          content: 粉丝C
        - 「我们都是被圣王帅气的终盘冲刺吸引的……不过请您放心，您的所有比赛的视频我们都反复观赏过了呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！不必感到不好意思！因为只有高松宫纪念之后的圣王，才是真正的圣王！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「经典年的比赛我也有过很多粉丝，但是他们都曾是我母亲的粉丝，认为我会像我的母亲一样走传统的路线。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因此，当我提出要转战短距离来之后，他们便生气地说着什么『离经叛道』，离开了我。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实我并不很想把这些因为我母亲名声而来的人称为我的粉丝。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，像你们这样因为圣王的短距离比赛而认可圣王的，才是我真正想要的粉丝啊。」
    - 圣王光环颇为感动地陈述着缘由。
    - content:
        - fontWeight: bold
          content: 粉丝A
        - 「无上荣幸！我们也会继续追随圣王，一直追随下去！」
    - content:
        - fontWeight: bold
          content: 粉丝B
        - 「希望圣王能够一直奔跑下去，为大家带来一流的精彩的比赛。」
    - content:
        - fontWeight: bold
          content: 粉丝C
        - 「对了，圣王，训练员%SIR%，不知道您的下一步是……？」
    - 圣王光环貌似也有同样的疑问，%SEX%与粉丝们一起将目光投到了%YOU%的身上。
    - acc: 1
      content: 「既然圣王已经充分证明了短距离的统治力，那为什么不继续将其扩大呢？」
    - content:
        - fontWeight: bold
          content: 粉丝A
        - 「您是说，下半年举行的『短途者锦标』吗？」
    - 几位粉丝看来十分了解相关的比赛，一下子便猜到了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没错！这场比赛的胜利将会彻底确保圣王在短距离赛道的一流地位！」
    - content:
        - fontWeight: bold
          content: 粉丝B
        - 「既然如此，那么我们一定会来为圣王声援的！」
    - content:
        - fontWeight: bold
          content: 粉丝C
        - 「就请圣王与训练员%SIR%接着加油吧！」
    - divider: true
      content: ⏰
      position: left
    - 粉丝们离开了，但是%YOU%与圣王光环的心情却激动久久不能平息。

# 高松宫纪念获胜才可触发
ws_temple_fair_s:
  title: 资深年庙会
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快走嘛！」
    - 训练结束后，圣王光环迫不及待地拉着%YOU%去参加庙会。
    - 今年的圣王光环的精神气质看起来比去年好了很多，可能是因为训练内容调整过了吧？
    - 毕竟圣王光环并不是很适合耐力训练，而去年的集训期间几乎全都是耐力训练。
    - 如今圣王光环的训练计划以速度冲刺类为主，这也就使得圣王光环在训练后能够保留不少的体力。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%在想些什么？一定是在想跟训练有关的事情吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是今天圣王要收回你胡思乱想的权利！尽情陪圣王游玩吧。」
    - 思绪被圣王光环拉回了现实。
    - 如今圣王光环已经取得了很不错的成绩，完全可以好好休息一下了。
    - 抱着这样的想法，%YOU%被圣王光环半拉半拽地来到了庙会的现场。
    - 今年的节日气氛貌似比去年浓厚许多呢，是因为今年没有太过急切的目标吗？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%快看！那边有人在看圣王的比赛录像诶！」
    - %YOU%顺着圣王光环的手指看去，顿时有些无语。
    - 只见那边的摊子挂着一块「黄金世代」的牌子，却什么也没有售卖。
    - 而是摆出五台屏幕来，分别播放着黄金世代五位%UMA%的资深年比赛录像。
    - 不过，由于圣王光环参加的高松宫纪念是短距离比赛，所以圣王光环的比赛录像第一个放完。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！我比%THEY%更早冲线哦！不愧是一流的圣王！」
    - %YOU%决定不去搭理身边这家伙。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过嘛，貌似很久都没有……再见到%THEY%了。」
    - 鉴于黄金世代的其他人都以中长距离为主，那么大家在赛场上就很难相见了。
    - 而大家又都在紧锣密鼓地准备接下来的比赛，所以在场外大概也是见不到的。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「某些时候，圣王也是很怀念出道前与%THEY%一起并跑训练的时候呢。」
    - 在%YOU%与圣王光环没有注意到的地方，一位芦毛%UMA%的耳朵微微抖了几下。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: 神秘%UMA%
        - 「哦～～圣王居然偶尔也会这么想呢，那就去跟%SEX%商量一下吧～」

# 高松宫纪念一着才可触发
ws_summer_end_s:
  title: 资深年集训结束
  lines:
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「那么就这么定了哦？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「嗯！我也很期待这样的结局呢！」
    - 两位%UMA%早早收拾好了行李，正在偷偷观看圣王光环训练。
    - 而%THEY%似乎也在考虑落实什么大计划。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流的训练完美结束！」
    - acc: 1
      content: 「好啦，既然训练结束，那我们去收拾行李吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「时间还来得及，赐予你为圣王进行追加训练的权利哦？」
    - 圣王光环貌似没有收拾行李回学园的想法。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「圣王——圣王！」
    - 就在%YOU%思考该用什么理由说服圣王光环的时候，同为黄金世代的特别周和青云天空从不知道哪个角落里钻了出来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「特别周？天空？你们这是？」
    - 看来圣王光环也很诧异。
    - 不过这样就不用担心圣王光环闹着要追加训练了。
    - %YOU%似乎看到青云天空对%YOU%狡黠一笑。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「喂，圣王，你有没有觉得，黄金世代的黄金时刻就要过去了呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说什么呢！圣王可是要一直一流下去的！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「哎呀，倒也不是那个意思啦。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「是这样的！我与天空同学商量了一下，我们可以通过一场比赛来纪念我们的时代！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「对哦，圣王不觉得这样很有意义吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么突然说起这个来了啊！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「诶嘿嘿，只是告诉圣王同学一下嘛。另外，我们选择的比赛是『秋季天皇赏』哦！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「圣王到时候记得要过来为我们声援哦？那样我第一个冲过终点线的时候一定会大喊圣王的名字的～」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「比赛还没开始呢！天空同学不要那么得意啦！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「跑得慢的是胡萝卜蛋糕！」
    - 于是特别周张牙舞爪地追着青云天空离开了。
    - %YOU%与圣王光环有些无语地看着%THEY%越跑越远。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是一群难缠的同期！简直是胡闹嘛！」
    - 圣王光环这么说着，却一直出神地盯着两位同期离开的方向。
    - 作为圣王光环两年多的训练员，%YOU%大概已经能够猜到圣王光环的想法了。
    - acc: 1
      content: 「圣王，不如我们也……？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！不愧是圣王的一流训练员！我也是正想跟%THEY%一起较量一下呢。」
    - 圣王光环也默契地猜到了%YOU%的想法。
    - 不过秋季天皇赏是中距离比赛，那么……
    - acc: 1
      content: 「那么我们回去之后就要追加耐力训练了哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「回去？不准！就在此地为圣王安排一轮耐力训练吧！哦——呵呵呵！」
    - 结果还是没有逃过追加训练。

# 高松宫纪念一着才可触发
before_sprt_sta_s:
  title: 短途者锦标前
  lines:
    - 虽然决定了要参加天皇赏，但短途者锦标的训练也不能落下。
    - 不过，有高松宫纪念珠玉在前，这次的赛前就不必那么紧张了。
    - 圣王光环甚至没有像往常一样坐在休息室椅子上如临大敌。
    - acc: 1
      content: 「圣王一点也不紧张吗？这可是G1哦。」
    - 圣王光环像是被按到了什么开关一样大笑起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！完全不紧张哦！这只是属于圣王的又一个胜利罢了。」
    - 看起来圣王光环非常自信。
    - 如此，%YOU%也就放下心来，提前向圣王光环告别了。
    - 由于前几次比赛之前都要陪着紧张的圣王好久，%YOU%几乎没有机会看到完整的比赛过程。
    - 毕竟从休息室必须绕很远的路才能来到观众席上去。
    - 不过这一次倒是有机会看看完整的比赛过程了。

# 短途者锦标一着，高松宫纪念胜利后才可触发
sprt_sta_win_s:
  title: 短途者锦标后·必然的结局
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「已经彻底奠定短距离王者的地位了！」
    - 圣王光环就像预期一样赢下了比赛。
    - 而观众们也开始欢呼起来。
    - %YOU%看了看周围的观众，有些欣喜地发现比高松宫纪念那时多了不少。
    - 而且大家貌似都是为了看圣王光环而来的。
    - content:
        - fontWeight: bold
          content: 粉丝A
        - 「太感动了，圣王完全实现了从中长距离向短距离的转变呢！」
    - content:
        - fontWeight: bold
          content: 粉丝B
        - 「恭喜圣王再次获胜！」
    - content:
        - fontWeight: bold
          content: 粉丝C
        - 「圣王，你的下一场胜利会是什么？」
    - 圣王光环敏锐地捕捉到了这位粉丝的问题。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！请大家安静一下！」、
    - 场内顿时安静了下来。
    - 圣王光环满意地点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「接下来，我要向大家宣布我的又一个一流决定！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「尽管我已经连续赢下了两次短距离比赛，但我的下一个目标却是——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「秋季天皇赏！」
    - 这一决定仿佛是向平静的海面投下了一枚重型炸弹一样，激起了观众们的讨论。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请大家到时候也要去支持我哦！」
    - 圣王光环郑重向观众席鞠了一躬，随后便留下仍然在窃窃私语的观众们，溜走了。

# 短途者锦标非一着，高松宫纪念获胜后才可触发
sprt_sta_lose_s:
  title: 短途者锦标后·不可言弃
  lines:
    - 尽管所有人都认为圣王光环会强势夺得第一，但意外还是发生了。
    - 圣王光环在从观众到实况与解说再到%YOU%震惊的眼神中被反超了。
    - 实况差点忘记播报比赛结果。
    - 与第一失之交臂的圣王光环，自然失去了与粉丝们互动的兴趣。
    - %SEX%耷拉着耳朵想要从无数或质疑或可惜的目光中溜走。
    - content:
        - fontWeight: bold
          content: 粉丝A
        - 「圣王！下次会更好的！」
    - 突然，一名粉丝开始向着圣王光环的背影呐喊道。
    - content:
        - fontWeight: bold
          content: 粉丝B
        - 「没错！一流的圣王可不能就此倒下！」
    - content:
        - fontWeight: bold
          content: 粉丝C
        - 「一定要继续加油啊！」
    - 粉丝们开始自发为圣王光环打气。
    - 圣王光环眼中波光粼粼地转过身来，看着观众席上越来越热闹。
    - %SEX%向着支持自己的大家深深鞠了一躬。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「尽管我的适性可能不是很好，但是我下一次会去秋季天皇赏的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请大家到时候也要去支持我哦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢大家！」
    - 圣王光环再次郑重向观众席鞠了一躬，随后便留下仍然在窃窃私语的观众们，溜走了。

# 消除自暴自弃状态时触发
race_end_rise_again:
  title: 再起
  lines:
    - %YOU%坐在观众席里，紧张地盯着赛场中正在疾驰的圣王光环。
    - 自从高松宫纪念失利以来，%YOU%不知道陪圣王光环进行了多少训练与谈心，才换来这一次逆袭的机会。
    - 圣王光环的精神状态相比以往已经好了很多，根据%YOU%的预测，如果这次比赛获得了胜利，那么圣王光环将会完全恢复以往的状态。
    - 而根据比赛的情况看来，圣王光环已经获得了极大的优势。
    - content:
        - fontWeight: bold
          content: 实况
        - 「圣王光环来了！这位曾经转变赛道失利，如今重整旗鼓的%UMA%，会拿下最后的胜利，洗刷曾经的耻辱吗？」
    - content:
        - fontWeight: bold
          content: 实况
        - 「最后的胜者是圣王光环！」
    - %YOU%失去了所有力气，瘫在了椅子上。
    - 直到圣王光环不顾周围观众与实况的惊呼，跨过护栏，来到了观众席上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！一流的圣王光环，回来了哦！」
    - %YOU%抬起头来，看到了圣王光环洋溢着自信的笑容，不禁跟着笑了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走吧，我们回学园！」
    - 圣王光环在周围观众惊诧的目光中将%YOU%扶了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我能找回自信，也要非常感谢%CALLNAME%呢，就请让我扶你回去吧！」

# 资深年十月第一周，没有自暴自弃状态
ws_breaking_dawn:
  title: 破晓
  lines:
    - %YOU%正在训练员室内为圣王光环设计下一步的训练计划，突然听到了训练员室的门遭受重击的声音。
    - 圣王光环十分着急地闯了进来，而并没有像往常一样敲门。
    - %SEX%手里还拿着自己的手机，此刻%SEX%的手机正显示有人呼叫。
    - 是圣王光环的母亲。
    - %YOU%颇疑惑地看着圣王光环凑到了%YOU%的身边，按下了接听按钮。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请问有何贵干？」
    - 圣王光环的语气十分冷淡。
    - 而电话另一头的%SEX%的母亲沉默了一会，才开口说话。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「我听说你在短距离比赛上拿到了几场胜利？」
    - 尽管话语还是有些生硬，但声音却比以往缓和了一些。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，是赢下了几场。」
    - 圣王光环谨慎地说道，没有像以往一样急切地开始解释自己获胜的过程。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「居然能在短距离赛道上取得优势，真是离经叛道！」
    - 说完，圣王光环的母亲就挂断了电话。
    - 圣王光环拿着手机愣了一会，突然开始大笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！看来最终还是我赢了哦！」
    - %YOU%有些不解。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「她可不是轻易会服软的人，既然能够说出这样的话来，说明她已经初步认可我的成绩了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而这便是她在照顾自己面子情况下做出的最大让步了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看来最后还是一流的圣王凭借过硬的实力压倒了她的质疑呢。」
    - 圣王光环又趾高气昂地离开了训练员室。
    - 看来，埋藏在%SEX%内心深处的一件心事得到了圆满解决。

# 没有自暴自弃状态
before_tenn_sho_s:
  title: 秋季天皇赏前
  lines:
    - 当圣王光环、特别周与青云天空一起出现在亮相圈的时候，整个赛场瞬间被欢呼声淹没了。
    - 而身处浪潮核心的三位%UMA%倒是早已习惯了这种情形。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「特别周，天空，虽然我不是特别擅长中距离比赛，但是就请瞧好吧，我第一个冲线的瞬间！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「大家看起来很有精神的样子嘛，那青酱可要被吓得让出第一名来了哦？开玩笑的～」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「这次的胜利，我是一定不会让给你们的！」
    - 三位%UMA%几乎是同时向对方下了战书。
    - 随后，%THEY%愣了一会，一起大笑起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这次的比赛，我很期待哦，请尽全力去奔跑吧！」

# 没有自暴自弃状态
tenn_sho_end_s:
  title: 秋季天皇赏后·友谊是魔法
  lines:
    - 比赛结束了。
    - 三位「黄金世代」的%UMA%站在终点线外喘着粗气，平复着激动的心情。
    - 任何一位观众都看得出来，%THEY%都为了这一场比赛竭尽了全力。
    - 而%THEY%自己仿佛并不很在意输赢的样子。
    - 不过，最为疲惫的还是中距离适性算不得优秀的圣王光环了吧。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「大家都拼尽全力了呢。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「青酱本来想要用计策赢下的，但是大家都很厉害呢，这样一来青酱也只得使出全力了。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「诶嘿嘿，全力以赴的天空同学看起来也很吓人呢。」
    - 特别周吐了吐舌头。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「话说圣王怎么不说话呢？难道是被我们的气势吓到了吗？」
    - 青云天空眼珠一转，开始向一边还在调整气息的圣王光环搭话。
    - 圣王光环闻言转过身来，面无表情地向特别周与青云天空走来。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「圣王同学这是要干什么？好可怕……」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「喂喂，比赛已经结束了哦，请圣王去好好休息一下吧？」
    - 圣王光环在两位%UMA%略显紧张的目光中走到了%THEY%跟前。
    - 随后，圣王光环伸出双臂抱住了特别周与青云天空。
    - 两位%UMA%的身体瞬间僵住了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你们，作为我的对手。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「那个，我们也很感谢圣王哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天空的皋月赏，特别周的日本德比，都是令我记忆犹新的比赛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果这几次比赛没有你们，我可能就不会想要转战短距离了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你们给予了我下定决心的勇气，也帮助我找到了真正适合我的道路。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我很荣幸能够与你们一同出道，一起奔跑。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就请你们与我一起跑下去吧，之后的日子，也要请多指教了。」
    - 说完，圣王光环松开了特别周与青云天空，郑重地向%THEY%鞠了一躬。
    - 观众席上突然爆发出激烈而持久的欢呼声。

# 资深年十一月第一周，没有自暴自弃状态&天皇赏秋一着才可触发
ws_until_end:
  title: 坚持到最后一刻
  lines:
    - 随着圣王光环重返中距离并夺得天皇赏盾徽，%SEX%的声望便与日俱增。
    - %YOU%靠在椅背上伸了个懒腰，看了眼一旁丝毫不注意形象霸占了%YOU%的沙发的圣王光环，若有所思。
    - acc: 1
      content: 「圣王，既然天皇赏已经拿下，那是不是就可以稍微放松一下了？」
    - 实话说，%YOU%觉得圣王光环的成绩已经很耀眼了，是时候把比赛抛到脑后，好好享受一下生活了。
    - 没想到，圣王光环一下子从沙发上蹦到了%YOU%的面前。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%说什么呢？资深年可是还有两个月才结束啊，可不能就这样让大家将圣王遗忘！」
    - 看来圣王光环还不想放松。
    - acc: 1
      content: 「那么，圣王是想参加英里冠军赛吗？」
    - 这场比赛刚好在十一月的后半部分进行，没有什么需要注意的强大对手，刚好适合圣王光环。
    - 没想到圣王光环摇了摇头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这场比赛的曝光度太有限了，很多人说不定都不知道这场比赛呢。」
    - %YOU%又深入地想了想。
    - acc: 1
      content: 「圣王总不会是想参加日本杯吧？」
    - 作为十分经典的中距离G1比赛，日本杯全程2400米，也是非常受海内外关注的知名比赛。
    - 不过，圣王光环参加日本德比的样子犹在眼前，%YOU%有些怀疑圣王光环能不能应付得来这样距离的比赛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「日本杯确实是一个不错的选择呢，而且特别周也说过要参加这次的日本杯。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，这场比赛并不在圣王的考虑之中。」
    - %YOU%有些泄气了。
    - acc: 1
      content: 「那就只剩下沙土，长距离和不太知名的比赛了。」
    - 没想到，圣王光环眼睛一亮。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没错！%CALLNAME%猜对了！果然不愧是我的训练员呢。」
    - acc: 1
      content: 「沙土？难道圣王又坏掉了吗？」
    - %YOU%伸出手去摸了摸圣王光环的额头，发现%SEX%并没有发烧。
    - 圣王光环有些气急败坏地躲过了%YOU%的手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么沙土！我看%CALLNAME%才是坏掉的那个吧！」
    - 圣王光环稍微平复了一下心情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「圣王说的是长距离啦！」
    - %YOU%略作思考，符合年末、长距离、知名这三项条件的比赛，貌似只有……
    - acc: 1
      content: 「有马纪念？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没错！就是有马纪念！圣王要参加有马纪念！」
    - %YOU%愈发觉得圣王光环坏掉了。
    - acc: 1
      content: 「那可是长距离诶，圣王难道忘记去年的菊花赏了吗？」
    - 那场让圣王光环受了半年耐力训练之苦，最终还让圣王光环脱力昏迷的比赛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么可能忘记！不过，菊花赏是3000米，而有马纪念是2500米，况且圣王已经不是一年前那个圣王了！」
    - 这些理由并没有太大的说服力。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，有马纪念极其出名，如果圣王能够赢下比赛，就可以让大家一直记住圣王！」
    - 听起来不太像圣王光环的真正目的。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最重要的是，特别周，天空，草上飞和神鹰都要参加这场比赛！」
    - %YOU%一下子愣住了。
    - 如果圣王光环最为珍重的四位对手在有马纪念的赛场上激烈角逐，而圣王光环只能作为观众为%THEY%声援……
    - 那样确实会很难受。
    - 于是%YOU%思虑许久后，下定了决心。
    - acc: 1
      content: 「那么，我可是要把耐力训练加到你的日程里去了哦。」
    - 听到耐力训练四个字，圣王光环下意识后退了半步。
    - 可最后与同期对手同台竞技的吸引力盖过了圣王光环对耐力训练的畏惧。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「请吧，我要向全世界证明，我圣王光环才是当之无愧的黄金世代第一%UMA%！」

# 没有自暴自弃状态&天皇赏秋一着才可触发
before_arim_kin_s:
  title: 有马纪念前
  lines:
    - 「黄金世代」要集体参加有马纪念的消息不胫而走，于是大量粉丝开始挤来观看这一场「最后的盛宴」。
    - 五位%UMA%均拥有不俗的实力与相当耀眼的战绩，也各拥有庞大的粉丝团体。
    - 这就导致了整个观众席上人满为患。
    - 幸亏作为训练员，%YOU%拥有优先入场权，不然%YOU%是绝对无法在狂热的粉丝们手下抢到前排座位的。
    - 很快，赛前亮相开始了，「黄金世代」的五位%UMA%出现在了亮相圈。
    - 场内气氛瞬间被点燃了，绝大部分观众都兴奋得站了起来，大声呐喊着。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「啊啦，真是热闹呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看来圣王的魅力非同小可呢！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「呜哇哇哇，好多人！看来大家都很受欢迎呢。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「毕竟是我们的落幕仪式啊，在这之后可就没有那么好的机会了呢。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「不要说那么伤感的话啦desu！」
    - 五位%UMA%笑了起来。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「话说大家好久都没有像现在这样一起跑过了呢。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「这样就更要抓住这次机会喽。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「那么就来好好地比试一场吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵！我已经看到了圣王获胜的未来了！」
    - 五位%UMA%在海啸般的欢呼声中离开了亮相圈，逐一进入了闸门。

# 有马纪念一着，天皇赏秋一着，没有自暴自弃状态
arim_kin_win_s:
  title: 有马纪念后·永远的一流
  lines:
    - content:
        - fontWeight: bold
          content: 实况
        - 「最后的胜者是圣王光环！黄金世代中的至强者已经出现了！」
    - 实况的声音听起来有种歇斯底里的味道。
    - 远比比赛开始前热烈得多的欢呼声席卷了赛场。
    - 不过，如果仔细一些，就可以听到，不同于赛前的——
    - 「一流！一流！一流！」
    - content:
        - fontWeight: bold
          content: 实况
        - 「场内开始齐声欢呼一流！圣王光环选手也是实至名归地表现出了一流的实力呢！」
    - 场内，圣王光环刚刚平复了急促的呼吸，听到实况的这句话后才注意到，场内的观众居然在齐声呼喊一流。
    - 慢慢地，一流的长距离选手圣王光环咧开了嘴，开始傻笑。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「呜哇！圣王要坏掉了！」
    - 神鹰颇为夸张地大喊道。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小鹰？要注意保持礼貌哦？」
    - 神鹰动用了末脚之力逃离了，然而草上飞似乎也留有余力，两位%UMA%就这样越跑越远。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「喂喂喂，小草和小鹰冷静一下啊！」
    - 特别周看了看还在傻笑的圣王光环，又看了看跑远的草上飞和神鹰，跺了跺脚，追了上去。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「果然还得是青酱最冷静呢～」
    - 青云天空吹着口哨向着几位%UMA%离开的方向慢慢走去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天空。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「诶，一流的圣王醒了吗？诶？你干什么……等等！」
    - 圣王光环清醒了过来，随后便以短距离选手的冲刺速度冲向了青云天空，趁青云天空躲避不及抱住了%SEX%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谢谢你们，谢谢你们能够作为我的对手，送给我这样一场盛大而光荣的演出。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「呜哇哇，青酱知道了啦，请你先放开我好不好……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「放开你？」
    - 圣王光环反问了一句。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要太着急哦。」
    - 说完，圣王光环向着远方的三个背影点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，%THEY%都跑那么远了，我就只好来抱住你了。」
    - 圣王光环看着怀中青云天空僵硬的表情，忍不住大笑起来。
    - 随后，%SEX%用力地抱了青云天空一下，便松开了对方。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你知道的，我不擅长长距离比赛，所以我现在已经精疲力竭了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，我将我对你们的感谢都寄托在你身上了哦，请你带着我的感谢，去追上%THEY%吧？记得要像我对你那样热情哦。」
    - 青云天空无奈地耸了耸肩。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「真是没想到，青酱有一天居然会作为信使被使唤……不过今天就依你吧，谁让你是一流的圣王呢～」
    - 青云天空调侃了圣王光环两句，随后便躲过圣王光环恼羞成怒的追击，一溜烟跑远了。
    - 圣王光环看着同期的四位对手的背影，再次不受控制地大笑起来。

# 有马纪念非一着，天皇赏秋一着，没有自暴自弃状态
arim_kin_lose_s:
  title: 有马纪念后·上下而求索
  lines:
    - 果然，圣王光环对长距离比赛的适应性并没有想象中的那样不拖后腿。
    - 尽管%SEX%已经尽全力冲刺，但几位深耕长距离比赛许久的同期还是轻松超过了%SEX%。
    - 比赛结束了，圣王光环没有拿到一着。
    - 而观众们自然是为胜者而欢呼。
    - 不过，%YOU%并没有在圣王光环的脸上看到挫败与不甘。
    - 相反，%SEX%看起来十分满足。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是没想到呢，大家都这么强了。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「那是当然！小鹰现在可是能够从阿草的魔掌下逃离了哦？」
    - 神鹰以极快的手速拉住一旁草上飞的尾巴，分为两股，打了个结。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小……鹰？」
    - 在神鹰有机会把结系紧之前，草上飞就转过身来了。
    - 于是神鹰当机立断，窜了出去。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「请看好哦，小鹰的速度desu！」
    - 草上飞裹挟着恐怖的气势追了过去，两位%UMA%的背影越来越远。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「喂喂喂，小草和小鹰冷静一下啊！」
    - 特别周看了看跑远的草上飞和神鹰，跺了跺脚，追了上去。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「诶？这么快就只剩青酱和圣王了吗？」
    - 青云天空与圣王光环都有些无语。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「话说圣王看起来并没有太在意失败呢？」
    - 圣王光环笑了笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实这次比赛只是想再与大家一起赛跑一次，输赢倒是没那么重要。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「更何况，圣王的主战场是短距离哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘛，不过结局也注定了，就没什么好难过的了。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「圣王还真是豁达呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过，我没能以完美的比赛作为一个完美的句号，那就以完美的谢幕演出作为一个完美的句号！走吧，天空！」
    - 圣王光环收敛了笑容，郑重整理了一下决胜服，向着几位对手离开的方向走去。

# 有马纪念一着，天皇赏秋一着，没有自暴自弃状态，有马纪念后一周触发
ws_dawn:
  title: 黎明
  lines:
    - 那场万众瞩目的有马纪念落幕后的某一天，圣王光环来到了训练员室。
    - %YOU%抬起头，有些疑惑地盯着%SEX%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，过来一下。」
    - %YOU%起身来到圣王光环身边，看着%SEX%打开手机，选择了标着「母亲」的联系人，开始拨号。
    - 没想到，对方瞬间就接了起来。
    - 这打乱了圣王光环的阵脚，%SEX%一下子将想好的话全忘记了。
    - 而圣王光环的母亲也同样保持着沉默。
    - 又过了一会，圣王光环总算开口了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「母亲，我赢下有马纪念了哦。现在的我是真正适合全距离的天才！」
    - 圣王光环停顿了一下，紧接着继续炫耀起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实我转向短距离赛道并不是离经叛道，而只是想在你面前证明我自己。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而现在，我已经不需要你的认可了，我已经成长为新一代的翘楚了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦，我想说的都说完啦，再见！」
    - 圣王光环没有给母亲说话的机会，径直挂断了电话。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这次总算是在她面前炫耀成功了！」
    - 圣王光环看起来很开心。
    - 直到圣王光环的手机再次响起。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？又是谁……」
    - 圣王光环拿起手机来，惊讶地发现母亲再次打来电话。
    - %SEX%踌躇了一会，还是选择接起了电话。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「嗯，那天其实我在现场，我看到了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么？」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「有马纪念的那天我在现场，跑得很好哦。」
    - %CHARA% 沉默了。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「一直以来对你都是那样严苛，现在想来实在是抱歉。」、
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「我不应该把事业与名誉看得比自己的孩子重要，更不应该在孩子离家出走后不想办法挽回而是继续斥责%SEX%。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「请原谅我吧，圣王。」
    - 圣王光环依旧保持沉默，但%YOU%能从%SEX%眼中看到闪烁的泪花。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「所以现在我以你的母亲的身份，请求你回到我的身边，可以吗？」
    - %YOU%颇为担忧地看着圣王光环。
    - 尽管%YOU%已经与圣王光环相处了三年，但是毫无疑问%SEX%的母亲与%SEX%在一起的时间要长得多。
    - 又过了一会，圣王光环开口了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「母亲，我很高兴您能认识到这一点。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是请恕我拒绝。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我完全可以原谅您之前对我的轻视，斥责与傲慢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是，在特雷森，我遇到了志同道合的对手，与和谐友爱的氛围。」
    - if: era.get('love:61') >= 75
      lines:
        - 圣王光环瞟了%YOU%一眼，拉住了%YOU%的手。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「以及，最重要的是，这里有我的%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，我不会再回去了。」
    - 圣王光环的母亲沉默了许久。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「好吧，那请你一定要照顾好自己。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我会的，再见吧，母亲。」
    - 圣王光环挂断了电话。
    - 之后%SEX%发现了%YOU%脸上残留的担忧之色，不禁笑了出来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%不会以为我要回去了吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「尽管放心，圣王是绝对不会离开特雷森的！」
    - 如此一来，%YOU%才稍感安慰。

# 随机事件
os_ramen:
  title: 圣王光环与拉面
  lines:
    - %YOU%与圣王光环商量着要出去吃饭。
    - 圣王光环就像突然想起了什么事情似的抓住%YOU%的手。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！我们去吃拉面吧！」
    - %YOU%盯着圣王光环的眼睛看了好一会。
    - acc: 1
      content: 「真的吗？我还以为圣王会选择一些更一流的食物呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「说来奇怪，圣王好像从来没有吃过拉面……但是特别周不止一次向我推荐拉面，所以我也有些想试试了。」
    - acc: 1
      content: 「那就一起吧。不过圣王居然没有吃过拉面，确实有些出人意料呢。」
    - 之后，%YOU%带着圣王光环找到了特别周推荐的拉面店。
    - 不得不说，作为「传奇大胃王」，特别周的眼光还是相当不错的。
    - %YOU%与圣王都沉浸在美食中无法自拔。
    - 很快，面就见了底。圣王光环擦了擦嘴，站了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我去结账！这顿饭圣王请客哦！」
    - 说完，圣王光环就挤到前台去了。
    - %YOU%赶紧将剩下的拉面解决，跟在圣王光环身后。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%快看，我有银行的贵宾卡！这张卡在任何一个奢侈品店都是可以直接使用的哦。」
    - 圣王光环炫耀似的朝%YOU%挥了挥手中的黑卡，没等%YOU%反应过来就冲到了收银员面前。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么叫你们不认这张卡？」
    - 拉面店的店员擦了擦冷汗，重复了一遍。
    - content:
        - fontWeight: bold
          content: 店员
        - 「非常抱歉，尊敬的客人，但是我们店目前只收现金，暂时不支持银行卡……」
    - %YOU%赶紧凑上前去，用现金为圣王光环解了围。
    - 不过在回学园的路上，圣王光环一直一言不发。
    - acc: 1
      content: 「那个，至少拉面很美味吧？」
    - %YOU%本来想随便找个话题，没想到开口就牵扯到了拉面这回事。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「非常好吃！下次%CALLNAME%再带圣王去吧。」
    - 没想到圣王光环完全没在意那个不和谐的插曲。
    - %YOU%悄悄松了口气。

# 在圣王光环与拉面事件发生后才可触发，满足条件后同样为随机触发
os_for_king:
  title: 专为 King 准备的菜单
  lines:
    - 最近圣王光环不知道中了什么邪，闹着要吃拉面。
    - 于是，%YOU%带着%SEX%再次来到了那家拉面店。
    - %YOU%带着圣王光环坐下，很快便点好了单。
    - 而圣王光环还在犹豫。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，麻烦您过来一下！」
    - 看样子圣王光环实在做不出选择，于是%SEX%向着一旁的店员招了招手。
    - content:
        - fontWeight: bold
          content: 店员
        - 「您是想问我有什么可以推荐的吗？」
    - content:
        - fontWeight: bold
          content: 店员
        - 「我看您是%UMA%，那就为您推荐隐藏款的、只为一流的客人准备的『King特供版特大超豪华拉面』！」
    - 店员一边说着，一边大致比了一下拉面碗的大小。
    - %YOU%听到这个名字便下意识觉得大事不妙。
    - 果然，圣王光环听到「一流」和「King」两个字眼后，开始双眼放光。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，怎么样，这款拉面是不是很符合圣王的气质？」
    - %YOU%看了看圣王光环期待的眼神，又想了想所谓的特大拉面到底有多少。
    - acc: 1
      key: select
      content: 「吃撑可不是一流的表现哦。」（体力+10%，体重增加）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「倒也是呢。」
        - 圣王光环想了想那个拉面碗的大小，冷静了下来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「那么请为我点一份与%CALLNAME%相同的拉面吧。」
        - 很快，两碗色香味俱全的拉面端了上来。
    - acc: 2
      content: 「努力证明自己吧！」（体力+30%，体重大幅增加）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哦——呵呵呵！请为我准备『King特供版特大超豪华拉面』！」
        - 店员依命而去，此时圣王光环才有些冷静了下来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「虽说圣王是一流%UMA%不假，但那个拉面碗怎么看都是很恐怖的大小吧！」
        - 没等圣王光环犹豫太久，特大超豪华拉面便呈了上来。
        - %YOU%与圣王光环看着那堪称为盆的拉面碗，与其上如同小山一般的拉面与配菜，有些震惊。
        - content:
            - fontWeight: bold
              content: 店员
            - 「这碗拉面看起来很多，但曾经也是有三位客人轻松地吃完了呢。顺带一提，这三位客人也都是%UMA%呢。」
        - 圣王光环一听到已经有人在自己之前征服了特大超豪华拉面，有些心急，便把之前的疑虑抛到了一边。
        - %YOU%更加震惊地看着圣王光环义无反顾投入了征服拉面之旅中。
        - 结果很显然，圣王光环吃撑了。
        - %SEX%面前的拉面碗已经被清空，只剩下小半碗的面汤。
        - 圣王光环正在试着把这最后的面汤也干掉，可惜已经到了极限。
        - 在店员答应把圣王光环加入「征服特大拉面成功名单」后，圣王光环才放心地跟着%YOU%离开了拉面店。
        - %YOU%看着一旁肚子鼓鼓的圣王光环，不禁开始叹息。
        - 看来有必要追加一些减重类的训练了。

# 随机
ws_fc_train:
  title: 一流的训练项目
  lines:
    - %YOU%站在训练场上，看了看时间。
    - 已经比约定的时间过去五分钟了，圣王光环却还没有出现。
    - 就在%YOU%快要等不及的时候，圣王光环终于出现了。
    - 不过出乎%YOU%意料的是，圣王光环居然没有穿着训练服，而是穿着普通的校服。
    - acc: 1
      content: 「圣王，你怎么……」
    - 圣王光环有些匆忙地打断了%YOU%的话。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，圣王觉得跑步在今天算不上一流项目，所以请为我安排除了跑步之外的项目！」
    - %YOU%听到圣王光环的要求，一时有些疑惑。
    - acc: 1
      content: 「圣王是不舒服吗？今天休息也是可以的哦。」
    - 圣王光环有些脸红。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「圣王没事！圣王好得很！」
    - 看到圣王光环这副模样，%YOU%愈发摸不着头脑了。
    - 这时，圣王光环的舍友春乌拉拉悠哉游哉地走了过来。
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「小圣王还有%CALLNAME_52%，早上好啊～哦，小圣王为什么穿着校服呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等一下，乌拉拉同学——」
    - 圣王光环意识到大事不妙，于是急忙扑了上去想要捂住春乌拉拉的嘴。
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「乌拉拉想起来了～小圣王昨天把所～有的训练服都洗了哦？」
    - 圣王光环晚了一步，%SEX%的秘辛早就被春乌拉拉底朝天地倒了出来。
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「诶嘿嘿，那么我就不打扰小圣王训练了～再见！」
    - 然后春乌拉拉飞快地逃掉了，留下了石化的圣王光环和不知所措的%YOU%呆在原地。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好了，现在%CALLNAME%也知道发生什么了，那么下一步该怎么安排？」
    - 圣王光环无语地盯着春乌拉拉的背影好一会，转过身来认命地看着%YOU%。
    - %YOU%看了看穿着校服的圣王光环，想了想。
    - acc: 1
      key: select
      content: 「那就来进行耐力的训练吧。」（耐力+15）
      lines:
        - %YOU%为圣王光环安排了拖轮胎折返的训练。
        - 而穿着校服的圣王光环也是成功吸引到了很多目光。
    - acc: 2
      content: 「那就来进行力量的训练吧。」（力量+15）
      lines:
        - %YOU%为圣王光环安排了举重的训练。
        - 而穿着校服的圣王光环也是成功吸引到了很多目光。
    - acc: 3
      content: 「那就来进行根性的训练吧。」（根性+15）
      lines:
        - %YOU%为圣王光环安排了跳楼梯的训练。
        - 而穿着校服的圣王光环也是成功吸引到了很多目光。
    - acc: 4
      content: 「那就来进行智力的训练吧。」（智力+15）
      lines:
        - %YOU%带着圣王光环回到了训练员室，为%SEX%安排了观看比赛录像的训练。
    - acc: 5
      content: 「可我就是想看圣王跑步嘛。」（速度+15，好感-5）
      lines:
        - 圣王光环嫌弃地看了%YOU%一眼。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「等着！」
        - 圣王光环溜走了。
        - 很快，圣王光环再次出现在了%YOU%的面前。不过这一次，%SEX%是穿着决胜服来的。
        - %YOU%为圣王安排了冲刺跑的训练，而穿着决胜服的圣王光环也是成功吸引到了很多目光。

# 好感+10，智力+10，随机
os_auto_graph:
  title: 圣王的签名会？
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快走啦！磨磨蹭蹭可不是一流的表现！」
    - %YOU%被圣王光环一路拖到了游乐园门口。
    - acc: 1
      content: 「喂，圣王，日程表里可没有这一项啊！算了，偶尔放松一下似乎也——」
    - %YOU%抱怨了几句，不过还是乖乖地认清了现实。但就在%YOU%放下担子打算好好游玩一下的时候，圣王光环从后面拉住了%YOU%的衣角。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们今天来可不是为了玩的！明明有正事的说。」
    - 经圣王光环这么一讲，%YOU%顿时陷入了迷惑之中。
    - %YOU%仔细想了想，没想到今天的诸项日程跟游乐园有什么关系。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%记起来了吗？那么重要的事情，不可能忘记吧？」
    - 圣王光环用殷切的目光看着%YOU%，使得%YOU%有些不自在。
    - 于是%YOU%假装深度思考了一会，做出了一个恍然大悟的表情。
    - acc: 1
      content: 「我懂了！原来是圣王坏掉了！记忆错乱了！」
    - 圣王光环见%YOU%冥思苦想得到了这么个结论，气得踢了%YOU%一脚。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是的！看那边！」
    - %YOU%顺着圣王光环的手指看过去，发现了一张「圣王光环的一流签名会」的海报。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「记起来了吗？今天是圣王的签名会诶！这么重要的事都能忘记，圣王很生气！」
    - %YOU%再次陷入了迷惘。
    - %YOU%没有理会一旁气鼓鼓的圣王光环，打开了日程表。
    - 结果日程表上标着「重要」字样的「圣王签名会」事项的时间是明天。
    - %YOU%看了看日程表，又看了看扭过头去生闷气的圣王光环，笑了出来。
    - acc: 1
      content: 「好好好，对不起，那我们就过去吧？」
    - %YOU%存心逗弄一下圣王光环，于是%YOU%忍住笑带着圣王光环走到了预设的会场。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼，这还差不多！」
    - 圣王光环一屁股坐在签名桌后的椅子上，摆出一副高傲的姿势来，等待着来签名的粉丝。
    - 如此过去了一个小时，尽管没有遇到一个粉丝，圣王光环居然依旧保持着那个姿势。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「为什么没有人来？一流的圣王就那么没有人气吗？」
    - 圣王光环终于发现不对劲了。
    - 这时%YOU%凑上前去，把日程表展示给%SEX%看。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这是什……等等，明天？」
    - %YOU%明明已经笑得差不多了，但是看到圣王光环错愕的表情，还是没忍住，再次笑了出来。
    - 圣王光环黑着脸看着狂笑不止的%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不许笑了！其实圣王今天是来考察签名会现场布置的，圣王对这个会场很满意！」
    - %YOU%没想到圣王光环已经为自己找好了退路，有些惊讶。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「考虑到%CALLNAME%陪圣王考察了那么久，圣王就不追究%CALLNAME%嘲笑圣王的责任了！回学园去吧！」
    - 闻言，%YOU%赶紧带着圣王光环离开了这处伤心之地。

# 根性+20，智力-10，随机
ws_laugh:
  title: 放声大笑
  lines:
    - 圣王光环一如既往推开了训练员室的门，然而%YOU%察觉到有些不对劲。
    - 圣王光环显然不像平常那么有精神。
    - acc: 1
      content: 「怎么了，圣王？哪里不舒服吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流的圣王居然感冒了……我的嗓子也哑了！」
    - 圣王光环的声音比以往低沉了许多。
    - 闻言，%YOU%赶紧为圣王光环倒了一杯热水。
    - acc: 1
      content: 「那今天先休息一下吧，早日康复才是正道。」
    - 圣王光环感激地看了%YOU%一眼，接过了热水。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过最重要的是，圣王没办法像以前那样放声大笑了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵……咳咳……」
    - 圣王光环的眼神黯淡了几分。
    - 不过还没等%YOU%说什么，圣王光环便重振了精神。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哪怕是感冒了我也要发出一流的大笑声！」
    - %YOU%还没来得及阻止，圣王光环就开始大笑了。
    - %YOU%抬到一半的手又无力地垂下了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵……咳咳……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦……咳咳……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哦——呵呵呵呵！咳咳……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈哈，圣王成功了！咳咳……」
    - %YOU%看着欣喜异常的圣王光环，决定找个机会为%SEX%追加智力训练。

# 好感+20，智力+5，随机
os_art_exhibit:
  title: 一流的美术展
  lines:
    - %YOU%被圣王光环拉着去看附近美术馆的美术展。
    - 尽管%YOU%不觉得%YOU%能理解那些艺术品的真正内涵，但圣王光环还是强硬地带着%YOU%来了。
    - %YOU%扫了一眼周边的画作，打了个哈欠。
    - 圣王光环看到了无精打采的%YOU%，有些不悦。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂！打起精神来啊！」
    - acc: 1
      content: 「我请求一流的圣王为我讲解一下这些画作！」
    - %YOU%想到了一个绝妙的点子。
    - 圣王光环想了想，矜持地点了点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那圣王就给你讲解一下！你可要听好了！」
    - divider: true
      content: ⏰
      position: left
    - 不得不说，圣王光环对这些画作还是很有见解的，一路上为%YOU%讲解得十分透彻。
    - 最后，圣王光环在一幅色彩鲜艳的画作前停下了脚步。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%看好了！这幅画采用了抽象派的画风，偏重于色彩和线条的组合，可以说是很有意蕴的。」
    - %YOU%听了圣王光环的讲解，凑上前去端详了一下这幅画。
    - 色彩鲜艳，线条比较粗犷随意……
    - acc: 1
      content: 「那么这幅画画的是什么呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所谓抽象，肯定是没有具体的意象啦。」
    - 圣王光环有些无奈地解释道。
    - %YOU%又看了看画作一旁的注释。
    - acc: 1
      content: 「作者是幼儿园小朋友？画的是亲爱的爸爸妈妈？」
    - %YOU%瞪大了眼睛，看了看还在滔滔不绝讲解的圣王光环，又看了看这幅画。
    - 这样看来这些线条确实像是两个大人拉着一位小朋友的手。
    - %YOU%悄悄戳了戳圣王光环。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不许随意打断圣王！」
    - %YOU%指了指这幅画的注释。
    - 圣王光环陷入了沉默。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看来这小朋友年纪轻轻却早已掌握抽象画派的精髓！真是厉害呀。」
    - %YOU%为圣王光环的找补能力竖了个大拇指。

# 爱慕90及以上的结局
ge_love:
  title: 自有真情在
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂，训练员，过来一下好吗。」
    - 在一切都结束之后的平常的某一天，圣王光环突然闯进了训练员室。
    - %YOU%有些摸不到头脑地站起身来，凑到圣王光环身边。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「靠太近了啦！我命令你离圣王远一些！」
    - 在这位%UMA%彻底发飙之前，%YOU%赶紧稍微离开了一点。
    - 圣王光环有些嫌弃地看了%YOU%一眼，自顾自地掏出手机来。
    - acc: 1
      content: 「所以，这就是你想要的吗？一通电话？」
    - %YOU%更加疑惑了，圣王光环这是专门来到训练员室……打一通电话？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要着急嘛，圣王这么做肯定是有圣王的考虑的，你就先好好听着啦。」
    - 圣王光环有些狡黠地向%YOU%眨眨眼，拨通了电话。
    - 嘟……嘟……
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「是圣王啊，我没记得你最近有比赛，为什么突然给我打电话？」
    - 电话对面是圣王的母亲，而%YOU%也是不知圣王光环为什么突然来到训练员室打这么一通有些私密性质的电话。
    - 更别提%SEX%还炫耀似的在%YOU%面前打开了免提。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，母亲，我这次来可不是因为比赛。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「那么是因为什么呢？在学园过得不如意，想要回家？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「完全不是这样的。我这次打电话来，是想要告诉母亲一件事。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「请快些吧，我的时间很紧张。」
    - 圣王光环深吸一口气，转过头来看了%YOU%一眼，仿佛下定了某种决心。
    - %YOU%则是更加疑惑了，圣王光环会宣布什么呢，比赛的事情吗？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「母亲，我……我已经要与我的训练员结婚了。我不是来征求意见的，只是来宣布这个事实的。」
    - 电话对面陷入了沉默，训练员室里同样如此。
    - %YOU%十分震惊地瞪大了眼睛，千算万算没想到圣王光环会直接向母亲宣告与%YOU%的关系。
    - 而且结婚这种事情，圣王光环居然会直接对素来不太对付的母亲提出来。
    - 饶是外向活泼如圣王光环，在说出这么句话后也有些萎靡了下来。
    - %SEX%脸色通红，慌乱的眼神在%YOU%的脸颊与手机屏幕之间不停逡巡。
    - 最终，还是圣王的母亲率先打破了沉默。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「我想，训练员%SIR%应该在你身边吧？请你把手机给训练员%SIR%好吗，我想要跟%YOURSEX%聊一下。」
    - 圣王光环小声嘟囔着什么，但还是把手机递给了%YOU%。
    - %SEX%十分担忧地看着%YOU%，似乎是在担心%SEX%的母亲会对%YOU%加以责难。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「圣王，请你先出去吧。我要跟训练员%SIR%单独聊聊。」
    - 圣王光环没有动作，只是有些焦急地注视着%YOU%。
    - %YOU%拍了拍%SEX%的背，示意完全没问题，圣王光环这才有些不安地走出训练员室。
    - 随着关门声的响起，圣王的母亲开口了。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「你一定便是圣王的训练员了吧？」
    - acc: 1
      content: 「是的。」
    - %YOU%想了想，深吸了一口气，鼓起勇气来，又补充了一句：
    - acc: 1
      content: 「同时也是……%SEX%的爱人。」
    - 这算是对圣王光环先前有些大胆的宣告的一个表态，旗帜鲜明地说明了%YOU%的立场。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「啊，带着圣王取得了那么多耀眼的成绩，也是辛苦你了呢。」
    - 出乎%YOU%意料地，圣王的母亲并没有对%YOU%的小小的顶撞作出评论。
    - acc: 1
      content: 「所以，您是一点意见也没有吗？」
    - %YOU%有些惊讶，下意识将心中所想随口说了出来。
    - %YOU%本来以为圣王的母亲会非常强硬地反对%YOU%与圣王的关系，甚至一度想过要不要带着圣王私奔……
    - 但圣王的母亲听到后似乎甚至都没有太大的情绪波动。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「这孩子已经越来越不在乎我了，就连这种大事都不来跟我商量，而就像下通知一样直接宣布……」
    - 圣王的母亲突然开口，语气有些感慨地说道。
    - %YOU%张了张口，想说些什么，但最终还是没说出口。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「训练员%SIR%，我其实可以猜到你想说什么。我真是一个失败的母亲，不是么？」
    - 听到圣王的母亲如此直白地承认了自己的过错，%YOU%有些讶异。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「本来我才应该是%SEX%最亲近的人，我会养育%SEX%长大成年，带领%SEX%走上赛场，%SEX%将视我为偶像……」
    - 圣王的母亲没有停顿，只是自顾自地继续说下去。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「但是我却没有给%SEX%应有的关注，反而更加强硬地要用我的想法去套住%SEX%。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「这也就导致，%SEX%就像离家出走一样去了特雷森。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「本来我还有挽救的机会，可惜那时的我仍旧执迷不悟，当%SEX%取得一个个胜利的时候，我没有为%SEX%的进步而高兴，而是……」
    - 电话的对面沉默了几秒。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「而是对%SEX%的成绩进行了可以说是蛮不讲理的批评与讥讽。」
    - %YOU%默默地听着，因为这些时候%YOU%也在场。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「当时还没觉得有什么，如今回过头来想想，真是愧疚至极啊。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「%SEX%一次次给我机会，而我却把这些机会逐一打了回去，甚至一次比一次绝情。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「所以最终，%SEX%已经不肯再给我任何机会了。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「在这之后，我也不是没有试过改善关系，不过很可惜，已经没有任何可能了。」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「呵呵，可惜吗，如果说是罪有应得，会不会更合适一些呢？」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「本来应该是最亲密无间的亲人，结果现在却形同陌路……」
    - 圣王的母亲梦呓一般诉说着。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「所以，圣王的训练员。」
    - 突然，她语气一肃，%YOU%下意识竖起耳朵，集中注意力听着。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「请你，一定要好好照顾%SEX%。我自知是没有这个机会了，所以希望你能替我好好爱着%SEX%……」
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「这是我唯一的要求了，或者说是，请求。」
    - acc: 1
      content: 「放心吧，我一定会照顾好%SEX%的，毕竟%SEX%对我来讲同样是极为重要的存在……」
    - %YOU%认真地说道。
    - 电话对面传来了微不可闻的轻笑声。
    - content:
        - fontWeight: bold
          content: %CHARA%的母亲
        - 「嗯，那我就放心了。祝你们幸福，我还有点事，就先走一步了。」
    - 说完，圣王的母亲便挂断了电话。
    - 虽然说着后悔愧疚之类的话，但骨子里还是一位高傲的人呢。
    - %YOU%这样想着，轻轻地把圣王光环的手机放下。
    - acc: 1
      content: 「圣王，可以进来了哦。」
    - 很快，圣王光环便推开训练员室的门，走了进来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，母亲跟你说了些什么啊？」
    - 圣王光环靠着%YOU%坐下，抱住了%YOU%的手臂。
    - acc: 1
      content: 「机密哦。」
    - %YOU%想了想圣王的母亲对%YOU%说的那些话，狡黠地对着圣王光环眨了眨眼。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「竟敢瞒着圣王？看我惩罚你——」
    - 圣王光环勃然大怒，毫不客气地坐在了%YOU%的腿上，伸手就要来扯%YOU%的耳朵。
    - %YOU%有些狼狈地躲避着，直到两个人都精疲力竭。
    - %YOU%看了看一旁对%YOU%怒目而视的圣王光环，突然又想起了圣王母亲的嘱托。
    - %YOU%突然伸出手去，抱住了圣王光环。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜？」
    - 圣王光环还没有反应过来，便被%YOU%拥入怀中。
    - 紧接着，%YOU%有些霸道地堵住了%SEX%的唇。
    - %SEX%有些惊慌地试着反抗，但%YOU%就这样牢牢地抱着%SEX%，不允许%SEX%离开。
    - 不过说起来，如果%UMA%真的想挣扎逃离，单凭训练员的力气是万万无法制止的。
    - 很快，圣王光环就放弃了挣扎，同样抱住了%YOU%，以更甚于%YOU%的热情亲吻着%YOU%。
    - 过了不知道多久，%YOU%才渐渐松开圣王光环，让%SEX%自然地靠着%YOU%的肩膀。
    - acc: 1
      content: 「圣王。」
    - %YOU%突然呼唤起爱侣的名字，打破了训练员室里暧昧的宁静。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？」
    - 圣王光环慵懒地应着。
    - acc: 1
      content: 「爱你哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……我也是。」
    - 圣王光环仿佛愣了一下，又过了一会才非常小声地这样回答%YOU%。
    - %YOU%微微侧身，嗅着%SEX%长发的芳香。
    - 仿佛一直以来就该如此啊。

normal_end:
  title: 相得益彰
  lines:
    - 在度过三年一千多个日夜后，%YOU%与圣王光环迎来了一流的故事结尾。
    - 圣王光环连续赢下了不少比赛，而这完全足以让%SEX%成为一直以来想要成为的一流%UMA%。
    - 可惜，哪怕是一代传奇，也终究是要落幕的。
    - 圣王光环已经或强硬或不很强硬地请求%YOU%带%SEX%去继续参加比赛，但%YOU%知道这已经不太可能了。
    - 曾经的风流人物退居二线，后来的新生代则接过接力棒继续发光发热。
    - 这或许就是所谓世代的含义吧。

# be结局，高松宫纪念非一着&爱慕小于75且好感小于225，或重度自暴自弃进一步加重，或保留任意自暴自弃状态至育成结束
be_force:
  title: 扫地出门
  lines:
    - %CHARA% 从此消失在了%YOU%的生活中，仿佛从未出现过一样。
    - 而%YOU%对此无可奈何。
    - 像这样把自己的担当%UMA%弄丢的训练员，毫无疑问要被扫地出门，被世人所唾弃吧。
    - 刺耳的手机提示音突然响起，吓得%YOU%几乎跳了起来。
    - %YOU%稍微定了定心神，打开手机。
    - divider: true
      content: 秋川理事长(6)
      position: left
    - 「%YOURNAME%训练员，鉴于您工作期间的严重失职行为，学园理事会一致同意将您开除。」
    - 「即日起，您可以前往理事长室领取书面的辞退通知。」
    - 「请您在三个工作日内收拾好随身物品，与骏川秘书做好工作交接。」
    - 「我们并不希望您将学园内的任何事情向外界公布，特雷森学园将保留追责的权利。」
    - 「由于您的失职行为造成了严重的后果，因此我们将不再接受您的其他工作申请。」
    - 「特雷森学园理事长，秋川弥生。」
    - divider: true
    - %YOU%紧紧地捏着手机，直到指节发白。
    - 尽管早就料到了如今的落寞，但当一切真正发生的时候，还是有些太突然了。
    - %YOU%最后环顾了一周这曾经熟悉如今却显得分外冷清的训练员室，长叹一口气，随即带上并不很多的行李离开了。
    - 或许，就此离去，才是最好的选择吧。
