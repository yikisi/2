# @file 青云天空 - 育成
# @author Wolke

ts_add:
  title: 自主的额外训练
  lines:
    - 在一天的训练结束后，青云天空十分难得的要求加练。
    - %SEX%边调整气息边自言自语道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……昨天那条大鱼……啊啊啊！好可惜！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要再多练！下次……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次一定不会失手！」
    - 难得看到闷着一股劲的青云天空，%YOU%决定：
    - acc: 1
      content: 难得的干劲呢，让我来帮帮你吧
    - acc: 2
      content: 训练还是适度好一点

race_start:
  title: 赛前
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「要上场了呢——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员～话说——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我要是一不小心赢了……你会惊讶吗？喵哈哈～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好嘞——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这次就采用『自由自在』的策略，随随便便跑吧～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嘿嘿，逗逗你啦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不过……无论我用怎样的跑法，训练员都会支持我的，对吧～」

race_end_win:
  title: 比赛获胜
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「耶！！！计策大成功！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我要吃大餐！睡懒觉！钓大鱼！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这可不是偷懒哦～这是在观察别的对手哦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「你会相信的，对吧，喵哈哈～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呼啊～没想到我还挺厉害的嘛～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「果然多和猫猫睡午觉有好处。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「决定了！接下来的一星期我要天天和猫猫睡午觉！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「猫猫这么可爱，训练员肯定不舍得打扰我们，对吧，喵哈哈～」

race_end_5:
  title: 比赛上榜
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这回表现还行呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过好可惜啊……就差一点……」
    - 「这次的计策还不坏哦，可能只是差了点时机。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀哈哈～谢谢你，训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次我会用更精彩的策略的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「到时候让你也吓一跳！」

race_end_lose:
  title: 比赛败北
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈哈～大家还真是厉害呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看来光靠策略完全不够用呢——不论是圈套还是时机……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好！接下来我要好好反省，然后回去加倍训练！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……你以为我会这么说？怎么可能啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要靠策略取胜！这才是小青的风格～」


#招募后下回合开始
ws_find_you:
  title: 抓到你喽？
  lines:
    - 清晨的训练场，已经有勤奋的赛%UMA%在加倍努力。
    - %YOU%也早早的就来到了训练室，拿出精心写好的的训练计划，准备和青云天空一起完成这充实的一天。
    - 太阳渐渐升起，门外训练场上的操练声音也越来越多。
    - 但属于%YOU%搭档的那一份却迟迟不来。
    - 又过了许久，%YOU%看了看表，早已经过了约定好的时间，给%SEX%发消息也不回复。
    - 「这家伙……又偷懒去了……」
    - 于是%YOU%无奈的开始全校大搜查。
    - acc: 1
      content: 中庭的大树树干
      lines:
        - 不见踪影
    - acc: 2
      content: 宿舍旁边的草坪
      lines:
        - 不见踪影
    - acc: 3
      content: 天台的秘密基地
      lines:
        - 不见踪影
    - acc: 4
      content: 食堂后方的猫舍
      lines:
        - 不见踪影
    - acc: 5
      content: 训练场里的看台
      lines:
        - 不见踪影
    -
    - 一上午的寻找无果后，%YOU%失落的回到了训练室。
    - 下午临近晚饭，青云天空才懒洋洋的来到了训练室。
    - 先是道歉然后保证明天一定准时。
    - %YOU%也只能无奈的点点头，然后苦口婆心的劝几句，祈祷%SEX%真的能听进去。


# 招募后第二周，回合结束时触发
we_free_cloud:
  title: 自由的云
  lines:
    - 签约后的半个月，%YOU%终于理解了当初周围人对%SEX%的评价毫不夸张。
    - 自打招募后的几周里，训练场上三天两头就会看不见%SEX%的身影。
    - 每天早晨%YOU%到训练室时，都在祈祷今天青云天空一定要在训练室里。
    - 但终归是期待，知道了%SEX%今天又逃训练后，于是%YOU%的一天又开始了漫长的寻找。
    - 运气好的时候，能在某个犄角旮旯里抓住正蜷着身子睡觉的%SEX%。
    - %SEX%被发现时也不慌张，只是揉揉眼睛，懒洋洋地打个哈欠，然后慢吞吞地跟着%YOU%走回训练场。
    - 但更多的时候，%YOU%找遍了所有可能的地方都一无所获。
    - 只能等到第二天，%SEX%才会像什么都没发生过一样，晃晃悠悠地出现在训练室门口，脸上满是对昨天「消失」的不在意。
    - 每次和%SEX%说起这方面的问题，%SEX%总是一脸狡猾的说%SEX%错了，下次一定改。
    - 但过两天又会玩失踪。
    - %YOU%意识到这样下去不太行，需要和%SEX%谈谈。
    -
    - 在一天难得的训练结束后，%YOU%热情的邀请%SEX%吃甜点。
    - 买完蛋糕后，两人坐在训练场的边缘品尝美味，夕阳把影子拉得很长，%YOU%慢慢和%SEX%聊起来。
    - 「天空，我想和你商量个事。」
    - 「嗯？」
    - %SEX%歪着头，尾巴慢悠悠地晃着。
    - 「你看哈，咱最近的逃练……是不是有点多了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘛……好像是有点……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你放心，训练员！明天我肯定不迟到！」
    - 熟悉的浑水摸鱼又开始上演，%YOU%及时打断道
    - 「咳咳……今天不是这个事……」
    - 「我做了一个计划，每天的训练，我不要求你全天都泡在场地上。」
    - 「咱们可以每天固定一个时间段，比如上午两小时，和下午两小时，你来训练场。」
    - 「剩下的时间你可以自由安排，想睡就睡，想钓鱼就钓鱼。周末也给你放假，一天还是两天你说了算。」
    - %YOU%顿了顿，觉得这个条件已经足够宽松了。
    - 「只要每天能开始规律的训练，不像现在这样毫无规律地到处跑就行。」
    - %YOU%还在期待只要规律下来，后面的事都可以慢慢调整时。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要。」
    - 一声干脆利落的回答回应了%YOU%，连犹豫都没有。
    - %YOU%愣了一下。
    - 「为什么？那就每天只用下午来，就两小时——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不要就是不要。」
    - 青云天空的语气没了平日那种和稀泥的感觉，态度意外地强硬。
    - %SEX%双手抱胸，眼睛一闭，头往旁边一撇，用全身上下来表达对计划的抗议。
    - %YOU%试图换个角度劝说
    - 「如果你觉得两小时太多，我们可以从一小时开始。或者训练时间你来定，你选一个你方便的时间段——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我说了，不要！」
    - %SEX%打断%YOU%的话，转过头，眼神倔强的直直地看着%YOU%。
    - %YOU%张了张嘴，想再说些什么，但看到%SEX%脸上那副不容商量的表情，到嘴边的话又咽了回去。
    - 气氛变得有些僵。
    - 青云天空站起来，拍了拍裤子上的草屑，声音又回到了那种懒洋洋的调子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦——训练员——明天我会来的，肯定会！」
    - 说完便挥挥手，尾巴拖在身后，慢悠悠地消失在训练场的出口。
    - %YOU%坐在原地，看着%SEX%的背影发了一会儿呆，感到无比的迷茫……

# 招募后一个月 回合开始时触发（未招募西野花且好感度小于75）
ws_cloud_wind_no_flw:
  title: 为云领航的风
  lines:
    - 青云天空在上次谈话后的确收敛了一些，但依然会时不时地我行我素。
    - 又是一次消失。
    - %YOU%沿着%SEX%常去的几个地方一路找过去，最后在小花园边发现了%SEX%的身影。
    - %SEX%正和一个身材娇小的%UMA%说着什么。
    - 两人看起来聊得很愉快，青云天空的双手背在脑后，脸上带着那种少见的、毫无防备的笑容。
    - 那个娇小的%UMA%转过身来，%YOU%认出了%SEX%——正是当初招募青云天空时，给%YOU%指路的那位，%SEX%当时说自己是青云天空的朋友。
    - %YOU%刚想上去把青云天空拉回去，但%YOU%突然想到了什么，于是停下脚步，没有立刻上前打断%THEY%
    - 等到那位%UMA%挥手道别、沿着河岸走远后，%YOU%才快步跟上去，目的不是青云天空，是%SEX%的那位朋友。
    - 「你好，打扰一下。」
    - 娇小的%UMA%转过头，看见%YOU%，眼睛亮了一下。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: 娇小的%UMA%
        - 「啊，您好，您是当时的训练员吧？您已经和青云天空签约了，%SEX%跟我说了。」
    - 「是的，当时废了不少劲呢。」
    - %YOU%笑了笑
    - 「啊对，我还没好好感谢你呢，谢谢当时你为我指路。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: 娇小的%UMA%
        - 「不不不，是我该感谢您，谢谢您愿意帮助青云天空。」
    - %SEX%连忙摆手，反过来鞠躬感谢道。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「啊对了，我叫西野花。」
    - 「幸会幸会。」
    - %YOU%点点头，犹豫了一下，但还是求助道
    - 「说到这个，我还想向你请教一下。青云天空这孩子……我有点应付不来。」
    - 西野花听完，轻轻歪了歪头。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「您说应付不来……具体是哪方面呢？」
    - %YOU%把这段时间的情况大致说了一遍——约定的训练时间%SEX%总是做不到，说好了固定时间段%SEX%却依然我行我素等等。
    - 还有上次谈话明明已经做出了很大的让步，但%SEX%连商量的余地都不给。
    - 「身为%SEX%的训练员，我非常想找一个适合%SEX%的方法，或者说，适合我们两个的方法。」
    - 「但是吧……唉……」
    - 西野花安静地听完，想了想，然后开口道
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「嗯……其实，天空同学%SEX%，并不是一个喜欢违约的人。」
    - 「嗯？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「可能只是针对一些……禁锢%SEX%的东西。」
    - 「禁锢？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「对，天空同学喜欢自由自在的感觉，很不喜欢那种『你必须怎么怎么样』的事。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「对%SEX%来说，一切顺其自然就好。」
    - 「但我毕竟是%SEX%的训练员，我要对%SEX%负责，如果一切都是随心所欲，那最后肯定是一直沉溺在欲望里。」
    - 西野花没有立刻回答，低头想了一会儿，然后抬起头。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「嗯……要不您试试顺着%SEX%的步伐呢？」
    - 「顺着%SEX%的步伐？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「对——让%SEX%明白，您不是%SEX%的枷锁，是%SEX%的朋友。」
    - %YOU%站在原地，看着西野花认真的表情，若有所思。
    - 「我试试看吧。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「嗯！」
    - 西野花用力点了点头。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「我相信您，同时也很感谢您对天空同学这么负责。」
    - 道别之后，%YOU%沿着河岸往回走。
    - 回去的路上，%YOU%若有所思。
    -
    - 第二天。
    - 青云天空磨磨唧唧地完成了上午的训练。
    - %SEX%坐在训练场边的长椅上，一边喝水一边偷偷瞄着%YOU%，准备提点要求。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～」
    - 「嗯？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「吃完午饭后小憩一会儿啊～」
    - %SEX%说这话的时候语气轻飘飘的，眼神却在小心翼翼地观察%YOU%的反应。
    - %YOU%几乎能猜到%SEX%在想什么——等着%YOU%拒绝，然后琢磨下午怎么偷偷溜走。
    - 「好啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （唉，果然，到时候怎么溜走呢～等等！）
    - 青云天空的动作顿住,好像在怀疑自己听错了。
    - 「正好我也想休息会儿。」
    - %YOU%站起来，伸了个懒腰。
    - 「天空同学有没有推荐的睡点啊？」
    - 青云天空一愣，身体不自觉地往后仰了仰，像是看到了什么不得了的东西。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……真的假的？」
    - %SEX%的声音里带着明显的试探，耳朵竖得笔直，尾巴悬在半空中一动不动。
    - 「当然是真的。」
    - 「走吧，据说今天中午食堂有汉堡肉排哦。」
    - 说完%YOU%转身朝食堂方向走去，随手挥了挥，示意%SEX%跟上。
    - 青云天空愣在原地，眨了眨眼睛，又眨了眨。
    - 然后%SEX%回过神来，小跑着跟了上来，小声嘟囔了一句。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天的训练员……开窍了？」
    -
    - 从那以后，青云天空逃训练的次数越来越少。
    - 不是因为%SEX%突然变乖了，而是%YOU%越来越跟得上%SEX%的节奏。
    - 自那以后，慢慢的，每当%SEX%玩失踪，%YOU%都能找到%SEX%——在树下、在河边、在屋顶的角落里。
    - 但和以往不一样的是，找到%SEX%之后，%YOU%不再急着把%SEX%拉回训练场。
    - 有时候%YOU%会坐下来，陪%SEX%看一会儿水面上的浮漂。
    - 有时候%YOU%会摆正棋子，跟%SEX%来一盘将棋——虽然每次都输得很快。
    - 有时候%YOU%什么也不做，就靠在%SEX%旁边的树干上，闭上眼睛，听风吹过树叶的声音。
    - %SEX%在体验自由，%YOU%在陪%SEX%体验自由。
    - 在体验完后，再悄悄将%SEX%拉回正轨……
    - %YOU%在尽量满足%SEX%的同时，也在小心地把握着分寸。
    - %YOU%也开始明白了身为如此独特的赛%UMA%的训练员，自己的职责所在——不是强行掰正，而是引导。
    - 就像一阵风——过强会把云吹散，过弱会追不上云。
    - 而刚刚好时，云会跟着风的步伐，翱翔于天际。


# 招募后一个月 回合开始时触发 （已招募西野花或好感度大于75）
ws_cloud_wind_flw:
  title: 为云领航的风
  lines:
    - 青云天空在上次谈话后的确收敛了一些，但依然会时不时地我行我素。
    - 又是一次消失。
    - %YOU%沿着%SEX%常去的几个地方一路找过去，最后在小河边发现了%SEX%的身影。
    - %SEX%正站在岸边，和西野花说着什么。
    - 两人看起来聊得很愉快，青云天空的脸上带着那种少见的、毫无防备的笑容。
    - %YOU%刚想上去把青云天空拉回去，但%YOU%突然想到了什么，于是停下脚步，没有立刻上前打断%THEY%。
    - 等到%SEX%和西野花挥手道别、沿着河岸走远后，%YOU%才快步跟上去，目的不是青云天空，而是西野花。
    - 「西野花！等一下。」
    - 西野花转过头，看见%YOU%，眼睛亮了一下。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「啊，训练员，是您啊！青云天空跟我说您已经和%SEX%签约了。」
    - 「是的，当时废了不少劲呢。」
    - %YOU%笑了笑
    - 「啊对，我还没好好感谢你呢，谢谢当时你为我指路。」
    - %SEX%连忙摆手，反过来鞠躬感谢道。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「不不不，是我该感谢您，谢谢您愿意帮助青云天空。」
    - %YOU%不好意思的挠挠头，犹豫了一下，但还是求助道。
    - 「说到这个，我还想向你请教一下。青云天空这孩子……我有点应付不来。」
    - 西野花听完，轻轻歪了歪头。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「您说应付不来……具体是哪方面呢？」
    - %YOU%把这段时间的情况大致说了一遍——约定的训练时间%SEX%总是做不到，说好了固定时间段%SEX%却依然我行我素等等。
    - 还有上次谈话明明已经做出了很大的让步，但%SEX%连商量的余地都不给。
    - 「身为%SEX%的训练员，我非常想找一个适合%SEX%的方法，或者说，适合我们两个的方法。」
    - 「但是吧……唉……」
    - 西野花安静地听完，想了想，然后开口道
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「天空同学%SEX%，并不是一个喜欢违约的人。」
    - 「嗯？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「可能只是针对一些……禁锢%SEX%的东西。」
    - 「禁锢？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「对，天空同学喜欢自由自在的感觉，很不喜欢那种『你必须怎么怎么样』的事。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「对%SEX%来说，一切顺其自然就好。」
    - 「但我毕竟是%SEX%的训练员，我要对%SEX%负责。」
    - 西野花没有立刻回答，低头想了一会儿，然后抬起头。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「嗯……要不您试试顺着%SEX%的步伐呢？」
    - 「顺着%SEX%的步伐？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「对——让%SEX%明白，您不是%SEX%的枷锁，是%SEX%的朋友。」
    - %YOU%站在原地，看着西野花认真的表情，若有所思。
    - 「我试试看吧。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「嗯！」
    - 西野花用力点了点头。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「我相信您，同时也很感谢您对天空同学这么负责。」
    - 道别之后，%YOU%沿着河岸往回走。
    - 回去的路上，%YOU%若有所思。
    -
    - 第二天。
    - 青云天空磨磨唧唧地完成了上午的训练。
    - %SEX%坐在训练场边的长椅上，一边喝水一边偷偷瞄着%YOU%，准备提点要求。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～」
    - 「嗯？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「吃完午饭后小憩一会儿啊～」
    - %SEX%说这话的时候语气轻飘飘的，眼神却在小心翼翼地观察%YOU%的反应。
    - %YOU%几乎能猜到%SEX%在想什么——等着%YOU%拒绝，然后琢磨下午怎么偷偷溜走。
    - 「好啊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （唉，果然，到时候怎么溜走呢～等等！）
    - 青云天空的动作顿住,好像在怀疑自己听错了。
    - 「正好我也想休息会儿。」
    - %YOU%站起来，伸了个懒腰。
    - 「天空同学有没有推荐的睡点啊？」
    - 青云天空一愣，身体不自觉地往后仰了仰，像是看到了什么不得了的东西。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……真的假的？」
    - %SEX%的声音里带着明显的试探，耳朵竖得笔直，尾巴悬在半空中一动不动。
    - 「当然是真的。」
    - 「走吧，据说今天中午食堂有汉堡肉排哦。」
    - 说完%YOU%转身朝食堂方向走去，随手挥了挥，示意%SEX%跟上。
    - 青云天空愣在原地，眨了眨眼睛，又眨了眨。
    - 然后%SEX%回过神来，小跑着跟了上来，小声嘟囔了一句。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天的训练员……开窍了？」
    -
    - 从那以后，青云天空逃训练的次数越来越少。
    - 不是因为%SEX%突然变乖了，而是%YOU%越来越跟得上%SEX%的节奏。
    - 自那以后，慢慢的，每当%SEX%玩失踪，%YOU%都能找到%SEX%——在树下、在河边、在屋顶的角落里。
    - 但和以往不一样的是，找到%SEX%之后，%YOU%不再急着把%SEX%拉回训练场。
    - 有时候%YOU%会坐下来，陪%SEX%看一会儿水面上的浮漂。
    - 有时候%YOU%会摆正棋子，跟%SEX%来一盘将棋——虽然每次都输得很快。
    - 有时候%YOU%什么也不做，就靠在%SEX%旁边的树干上，闭上眼睛，听风吹过树叶的声音。
    - %SEX%在体验自由，%YOU%在陪%SEX%体验自由。
    - 在体验完后，再悄悄将%SEX%拉回正轨……
    - %YOU%在尽量满足%SEX%的同时，也在小心地把握着分寸。
    - %YOU%也开始明白了身为如此独特的赛%UMA%的训练员，自己的职责所在——不是强行掰正，而是引导。
    - 就像一阵风——过强会把云吹散，过弱会追不上云。
    - 而刚刚好时，云会跟着风的步伐，翱翔于天际。


# 出道战（前）
before_begin_race:
  title: 首钓
  lines:
    - 上场前的休息室中，%YOU%和青云天空在等待上场提醒。
    - 青云天空坐在长凳最边缘，手指烦躁的卷着衣服的下摆。
    - %YOU%拿着水在%SEX%旁边坐下。
    - 「第一次上场都会有点紧张。」
    - 「不用想太多，就像平时训练一样。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不是紧张。」
    - %SEX%瞥了一眼出发点的闸门。
    - 此时准备入场的广播响起，青云天空起身伸了个懒腰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼啊～欢呼声比想象的还热烈呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果我不小心赢了，你会感到惊讶吗？」
    - 青云天空贱贱的说道。
    - 「当然，所以打起精神加油吧。」
    - %SEX%眨眨眼，像是得到了想要的答案。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果赢了的话～下午要陪我一起偷懒吧～」
    - 青云天空伴随着轻快的语气，双手背在后脑慢慢走向赛场。


# 出道战（胜）
begin_race_win:
  title: 开竿
  lines:
    - 冲线时青云天空正处于绝对领跑位置。
    - %SEX%以绝对的实力领跑完整场比赛。
    - %YOU%带着水和毛巾在场边等%SEX%。
    - 青云天空向%YOU%慢悠悠走来
    - acc: 1
      content: 「赢得漂亮！」
    - %YOU%毫不吝啬的赞美道。
    - 突然，青云天空发出了一声哀嚎。
    - 紧接着软绵绵地朝%YOU%倒了下来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊——不行了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小青一步也走不动了～」
    - 青云天空向%YOU%撒娇的喊道。
    - 以为%SEX%受伤的%YOU%吓了一跳，立刻上前把%SEX%扶住。
    - 「怎么了？脚受伤了吗？要不要叫担架？」
    - 青云天空不满的抬起头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是的——这种时候的训练员应该是先温柔的抱起小青。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后暖心的夸夸我居然能走到这里吧……」
    - 看到还有闲心耍宝的青云天空，%YOU%悬着的心也放了下来。
    - 「没事就好，不过走不动是怎么回事，第一次比赛体力没分配好？」
    - 青云天空竖起一根手指，脸上的笑容坏坏的。
    - 然后踮起脚，凑到%YOU%耳边。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为我在想事情嘛……想得太认真，腿就自己跑完了全程。」
    - 「在想事情？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在想——训练员现在是用什么表情在看我呢？」
    - %SEX%退后半步，观察着%YOU%的反应，然后满意地点点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，嗯，就是这个表情，和我想的差不多嘛。」
    - %YOU%无奈的笑了笑，想起来了赛前%SEX%的烦躁感。
    - 「你啊——这不挺游刃有余的。」
    - %YOU%把毛巾递给%SEX%。
    - 「赛前在休息室，你可不是这副样子。」
    - 青云天空愣了下，叹口气说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎～我最讨厌狭窄的地方了」
    - 「狭窄的地方？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是闸门啦，闸门！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不觉得进闸门的过程，很浪费时间吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且那里又封闭又窄……唉……。」
    - 青云天空自顾自的吐槽着。
    - 就这样，在%SEX%有一搭没一搭的抱怨里，出道战顺利拿下。
    - 至于训练……先让%SEX%好好放松几天吧。


# 出道战（胜）经典年2月/1周回合开始时触发
ws_47_5:
  title: 风起云如马
  lines:
    - 出道战的胜利像片羽毛，轻轻落下，没在青云天空心里激起多少涟漪。
    - %SEX%依旧每天钓鱼、喂猫、在学院各个角落找到最舒服的睡点。
    - 对训练安排不抗拒，却也谈不上积极。
    - 至于参赛的方向全权丢给%YOU%，自己乐得清闲。
    - %YOU%相信%SEX%的才华和天赋。
    - 那双能看透水流与风的眼睛和古灵精怪的想法本应成为赛场上一抹亮丽的青色。
    - 可现在，%SEX%只是把这天赋用在计算哪片树荫下午晒不到太阳。
    - %YOU%看着这样的%SEX%，觉得太浪费了。
    - 在%SEX%被这份悠闲彻底「泡软」之前，%YOU%认为得做点什么。
    - 于是%YOU%递出了弥生赏的报名表。
    - 这不仅是经典三冠中皋月赏的前哨战，而且……
    - 「弥生赏，下个月。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，好～」
    - 青云天空看都没看就回应道。
    - 「哦，还有……」
    - 「特别周和圣王光环也报了这场，%THEY%最近的状态都很不错。」
    - 「这回的比赛可不轻松……」
    - 青云天空停下了翻杂志的手，耳朵立了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯～小特和光辉啊……%THEY%两个，可是很厉害的。」
    - 说罢便继续读起了杂志，
    - 「怕了？现在后悔还来得及」
    - 青云天空合上杂志，指尖在报名表上轻轻点了两下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，我知道自己还有很多不足啦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是啊——我也没打算，就这么让猎物跑了。」
    - 之后的一个月，%SEX%看起来还是老样子。
    - 偷懒的次数没减少，午睡地点照常更新。
    - 喂猫时甚至能说出每只猫这周心情如何。
    - 但%YOU%能感觉到%SEX%的变化——
    - 在偷懒的间隙，%SEX%的视线总会飘向训练场的另一边，那里是特别周和圣王光环训练的地方。
    - 就像一只看似慵懒的小猫，静静递等待猎物的靠近……。


before_hoch_sho:
  title: 弥生赏（前）
  lines:
    - 赛场前的休息室里，%YOU%和青云天空看着休息室内的电视屏幕。
    - 主持人正眉飞色舞地分析着本次比赛的热门选手，声音透过扬声器填满整个房间。
    - 屏幕上不断切换着赛前采访的画面，各个媒体都在预测本次比赛的结果。
    - 观众席上传来的嘈杂声即便隔着墙壁也能隐约听见——那些狂热的粉丝们正交流着自己的独到见解。
    - 在这场热烈的讨论中，呼声最高的，必然是特别周和圣王光环。
    - 两人的名字被反复提及，分析%THEY%近况的文章被做成醒目的标题。
    - 而青云天空的名字，就像是印刷时不小心漏掉的一行，在铺天盖地的讨论中几乎没有立足之地。
    - %YOU%看了看旁边的青云天空，%SEX%正在悠然的瘫在椅子上，看不出半点紧迫。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……看来，我的关注度很低呢。」
    - 青云天空两根手指放在下巴上，意味深长的说道
    - %YOU%看着青云天空的状态，想起上个月的交谈。
    - %SEX%总是这么从容，像只小猫一样，看似慵懒，只为猎物懈怠的那一瞬。
    - 但此刻%YOU%隐约察觉到，一只猎手已然悄悄苏醒。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「挺好的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小特和帝王被盯得那么紧，动一下都有几十双眼睛盯着。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%真厉害啊，被那么多人期待还能跑得那么好。」
    - %YOU%看着%SEX%，忽然觉得这话里有点别的味道。是羡慕？是失落？还是两者都有？
    - 「你也很厉害，我的搭档可不会输给%THEY%。」
    - 听到%YOU%的激励，青云天空饶有趣味的回应道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿，看来训练员还挺信任我的嘛～」
    - 广播响起第一次召集。
    - 青云天空站起身，活动活动筋骨。
    - 准备出发时，青云天空回头向%YOU%喊道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还记得一个月前我说的话吗？」
    - %YOU%看向%SEX%，青色眼眸在通道灯光下亮得透彻。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这次……」
    - %SEX%停顿半秒，嘴角扬起一个跃跃欲试的微笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也许你可以稍微期待一下哦？」
    - 说完便转身朝闸门走去。
    - 强敌的压力并没影响到%SEX%。
    - 步伐依旧带着%SEX%特有的慵懒节奏。


hoch_sho_win:
  title: 弥生赏（胜）
  lines:
    - 比赛进入最终直道时，局势开始清晰。
    - 特别周在外道蓄力，脚步声越来越沉，越来越响，像一颗逼近的流星。
    - 圣王光环则占据中轴，每一步都散发着不容置疑的王者气息。
    - 而青云天空，依然领跑在最前。
    - 风声、蹄声、呼吸声、观众的呐喊——所有声音混在一起，涌向那道青色的背影。。
    - 三人的差距越来越小。
    - 突然，青云天空的眼中骤然闪过锐利的光。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （机会来了…就是现在！）
    - 青云天空的身体向前轻轻一探。
    - 不是爆发的冲刺，而是将原本的领跑节奏顺势抬了一个台阶。
    - 步幅舒展，步频未乱，却与身后紧紧咬住的两道身影拉开了半个马身的差距。
    - 最终，一道亮丽的青色冲过了终点线，一切发生的好像理所应当。
    -
    - 青云天空走回来时，脸上难掩激动的神色。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么样，训练员，有没有对小青感到惊讶呀？」
    - 语气里藏着压不住的得意，却又故意装作只是在随口问问。
    - 「太精彩了，完全超出了我的预期！」
    - %SEX%接过%YOU%递去的水，仰头喝了几口，呼吸还有些急促。
    - 水珠顺着下巴滑落，%SEX%随手一抹，便迫不及待地开口。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刚才最后弯道，小特呼吸的节奏变了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「光辉也是，为了维持最标准的跑姿，后劲却没能保持住。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%平时的练习中就会有这样的弱点。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只要我抓住%THEY%破绽出现的那一秒——」
    - 看着%SEX%眉飞色舞的介绍自己的杰作，%YOU%想起%SEX%这个月以来的日常活动。
    - 看似别人在艰苦训练时%SEX%在睡觉，
    - 实则在偷偷观察所有对手的弱点。
    - 「看来你平时偷懒的时候也没闲着啊。」
    - 「这种战略一般人可学不来——」
    - 青云天空听到%YOU%的感慨，眨眨眼，嘴角慢慢勾起一个狡黠的弧度。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿～谁知道呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小青我真的只是在休息哟～」
    - ——但那语气，分明在说「这可是秘密」。
    -
    - 这时，远处传来工作人员的呼唤声，%SEX%扭头看了一眼，又转回来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！比赛方要我去采访呢，等一下再聊，训练员！」
    - %SEX%站起身，顺手把水瓶塞回你手里，正要转身离开——
    - 「天空——」
    - %YOU%叫住%SEX%。
    - 青云天空回过头，疑惑地眨眨眼。
    - %YOU%指了指依然喧嚣的看台。
    - 欢呼声像潮水一样，一波接一波涌来，分不清是为谁而起，但此刻确实有一部分，是属于%SEX%的。
    - 「这欢呼声……感觉怎么样？」
    - %SEX%顺着%YOU%的手看向看台，目光在那些挥舞的应援物上停留片刻。
    - 「想不想要更多的？」
    - %SEX%歪了歪头，像在认真思考这个问题。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你是不是以为……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「经历了出道战，赢下弥生赏，见识过小特和光辉那样的对手……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我就已经到『极限』了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刚才冲线的时候我在想……『经典三冠』的赛场」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那里的鱼，肯定更大！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「至于报名和训练嘛……就交给训练员啦～」


hoch_sho_lose:
  title: 弥生赏（败）
  lines:
    - 比赛进入最终直道时，局势开始清晰。
    - 特别周在外道蓄力，强大末脚的步伐越来越沉，越来越响，像璀璨的流星。
    - 圣王光环则占据中轴，每一步都散发着不容置疑的王者气息。
    - 而青云天空，依然领跑在最前。
    - 身后的两人如同洪流涌来，三人的差距越来越小。
    - 风声、蹄声、呼吸声、观众的呐喊，各种嘈杂的声音此起彼伏。
    - 突然，青云天空的眼中骤然闪过锐利的光，%SEX%嘴唇微动。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「机会来了…就是现在！」
    - 青云天空的身体向前轻轻一探。
    - 不是爆发的冲刺，而是将原本的领跑节奏顺势抬了一个台阶。
    - 但这一次，身后的「洪流」比%SEX%预想的更猛烈。
    - 特别周的末脚在最后二百米彻底爆发，直接奠定了比赛的结果。
    -
    - 青云天空转身走回来时，脸上很平静，只是抬手擦了擦快要流进眼里的汗。
    - %SEX%接过%YOU%递去的水，仰头喝了几口，呼吸还有些急促。
    - %YOU%刚想安慰%SEX%一下，%SEX%突然开口道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刚才最后弯道，小特呼吸的节奏变了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「光辉也是。为了维持最标准的跑姿，后劲却没能保持住。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我已经抓住这两个破绽了，但还是不够。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以你看，能看见鱼咬钩，和能把它拉上来……是两回事，对吧？」
    - 青云天空自嘲的笑了笑。
    - 之后青云天空就低着头一言不发。
    - 这时，%YOU%轻轻唤了%SEX%一声。
    - 「小青。」
    - 「这声音……下次我会让你听到。」
    - %YOU%指了指依然喧嚣的看台，欢呼声正献给胜利者。
    - 青云天空沉默了几秒。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你是不是以为……输掉这场，我就会『认命』了？」
    - %SEX%抬起头，目光越过%YOU%，望向远处空旷的赛道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刚才冲线后我就在想……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「经典三冠的赛场，水一定比这里更深，鱼也更大。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一次——我不会失手。」


# 弥生赏胜
before_sats_sho_hw:
  title: 皋月赏（前）
  lines:
    - fontSize: 1.2rem
      content: 赛前观众席——
    - content:
        - fontWeight: bold
          content: 观众A
        - 「哎，老哥，你觉得谁能赢？」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「肯定是特别周，这次我可是买了2000马币在%SEX%身上，%SEX%的末脚绝对稳。」
    - content:
        - fontWeight: bold
          content: 观众C
        - 「我也觉得是特别周吧，不过圣王光环也很有威胁」
    - content:
        - fontWeight: bold
          content: 观众A
        - 「嗯嗯，确实。」
    - content:
        - fontWeight: bold
          content: 观众A
        - 「欸？那位是叫青云天空吧，上次我记得弥生赏%SEX%还赢了。」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「哼，%SEX%啊，不用在意，不是那种大家族出身，还听说%SEX%经常逃训练，哪有参赛者的样子。」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「上次%SEX%能赢，估计是老天开眼，让%SEX%爆冷一次。」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「这回可是皋月赏，经典三冠的第一战，可不会让%SEX%混过去。」
    - content:
        - fontWeight: bold
          content: 观众C
        - 「别这么说，能来到这里的，都是实力达标的。」
    - content:
        - fontWeight: bold
          content: 观众C
        - 「不过从以往的数据来看，%SEX%的支持率确实一直都不咋高。」
    -
    - fontSize: 1.2rem
      content: 比赛准备区——
    - %YOU%正在检查设备。
    - 青云天空则百无聊赖的趴在桌子上，脸埋在臂弯里，那股松弛感一点也不像即将上场的样子。
    - %SEX%把脸颊压在手臂上，挤得腮帮子鼓起来一块，眼皮耷拉着，像是随时要睡过去。
    - %YOU%静静的陪在%SEX%身边，等待即将到来的号召。
    - 突然，青云天空开口道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，训练员，你有没有过那种……觉得自己明白了什么的瞬间？」
    - acc: 1
      content: 「额——比如？」
    - %SEX%翻了个身，从趴着变成侧躺，脑袋枕在手臂上，眼睛盯着战略板。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是啊，嗯……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是你看，我就算都拿下弥生赏了，可这回的支持度还是不高。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在外人眼里，我上次的成绩估计也只是爆冷拿到的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我来的时候听到了，他们对我的成绩不屑一顾。」
    - 「不要在意他们的目光」
    - 「你的评价会被你的实力扭转的。」
    - 青云天空的手指开始在桌面上无意识地划着圈圈。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你想多了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我倒是没那么在意这个啦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在他们眼中，我大概就是个毫无目标的懒虫吧。翘训练，睡懒觉，整天只想着吃喝玩乐。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「从事实结果来看——他们说的很对～」
    - 「所以你觉得你的成绩只是靠运气吗？」
    - 「我觉得从来都不是。」
    - 「那只是你的风格，不是吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……谁知道呢～」
    - 青云天空起身靠在椅子上，双手背在脑后，望向天花板。
    - 世间的舆论并未在%SEX%轻松的语气里留下痕迹。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过啊——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要是从这么一滩浑水里，真的钓出点什么东西来……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那场面，应该挺好玩的对吧？」
    - %SEX%歪歪头看向%YOU%
    - 嘴角慢慢勾起来，露出一脸狡黠的笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那时%THEY%惊讶的表情一定很有意思～」
    - acc: 1
      content: 「听起来，你要开始给所有人一个惊喜了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「惊喜？」
    - 青云天空轻轻抬眉，歪头想了想。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也许吧……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我没有小特那种远大的理想，没有神鹰那股满身的热血」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也学不来光辉与生俱来的骄傲，还有小草那种温柔中藏着的杀机。我都没有。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%有的抱负和热血，我都没有。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是呢，我想要的——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我感受到了！」
    - %SEX%突然坐直，双手撑在膝盖上，整个人往前倾了倾。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「上次弥生赏，听道为我响起的欢呼像潮水一样涌过去的时候。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当所有人都没看好我，我却惊艳所有人的时候。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……感受到了。」
    - %SEX%站起身，拍了拍衣服下摆，慢慢走向赛场。
    - %SEX%的步子不快，背对着你，马尾随着步伐一晃一晃。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！」
    - 青云天空突然转身向我喊来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以……皋月赏这条『大鱼』」
    - %SEX%深吸一口气，像是鼓足了勇气，眼神里除了自由，还有斗志。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们一起，去把它钓上来，吓所有人一跳吧！」
    - 说罢便走向赛场，步子比刚才快了一些。
    - 走出几步后，抬手朝身后挥了挥，没有回头。
    -
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「哦——哦！小青竟然这么有斗志，真难得。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「看来小特和光辉有危险了呢，不过，好像这回入闸也有点难呢」
    - 旁边过道探出两个脑袋。
    - %YOU%记得%THEY%是青云天空的朋友神鹰和草上飞。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「哼哼～小草，这可不一定哦。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「那边小特也在喊得震天响呢，跟小青有得一拼。」
    - （嘶～）
    - （貌似青云天空激情的发言被隔壁听的一清二楚。）
    - （…………）


# 弥生赏败
before_sats_sho_hl:
  title: 皋月赏（前）
  lines:
    - fontSize: 1.2rem
      content: 赛前观众席——
    - content:
        - fontWeight: bold
          content: 观众A
        - 「哎，老哥，你觉得谁能赢？」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「肯定是特别周啊，弥生赏的冠军！这次我可是买了3000马币在%SEX%身上。」
    - content:
        - fontWeight: bold
          content: 观众C
        - 「我也觉得是特别周吧，不过圣王光环也很有威胁」
    - content:
        - fontWeight: bold
          content: 观众A
        - 「嗯嗯，确实。」
    - content:
        - fontWeight: bold
          content: 观众A
        - 「欸？那位是叫青云天空吧，上次我记得成绩也不错。」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「哼，%SEX%啊，不用在意，不是那种大家族出身，还听说%SEX%经常逃训练，哪有参赛者的样子。」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「上次%SEX%能有那成绩，都只是%SEX%运气好。」
    - content:
        - fontWeight: bold
          content: 观众B
        - 「这回可是皋月赏，经典三冠的第一战！可不混混就能过去的。」
    - content:
        - fontWeight: bold
          content: 观众C
        - 「别这么说，能来到这里的，都是实力达标的。」
    - content:
        - fontWeight: bold
          content: 观众C
        - 「不过从以往的数据来看，%SEX%的支持率确实一直都不咋高。」
    -
    - fontSize: 1.2rem
      content: 比赛准备区——
    - %YOU%正在检查设备。
    - 青云天空则百无聊赖的趴在桌子上，脸埋在臂弯里，那股松弛感一点也不像即将上场的样子。
    - %SEX%把脸颊压在手臂上，挤得腮帮子鼓起来一块，眼皮耷拉着，像是随时要睡过去。
    - %YOU%静静的陪在%SEX%身边，等待即将到来的号召。
    - 突然，青云天空开口道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，训练员，你有没有过那种……觉得自己明白了什么的瞬间？」
    - acc: 1
      content: 「额——比如？」
    - %SEX%翻了个身，从趴着变成侧躺，脑袋枕在手臂上，眼睛盯着战略板。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是啊，嗯……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是你看，我就算在上一次比赛展现过实力了，这回的支持度还是不高。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在外人眼里，我上次的成绩估计也只是运气好。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我来的时候都听到了，他们对我的成绩不屑一顾。」
    - 青云天空的手指开始在桌面上无意识地划着圈圈。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我倒是没那么在意这个啦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在他们眼中，我大概就是个毫无目标的懒虫吧。翘训练，睡懒觉，整天只想着吃喝玩乐。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「从事实结果来看——他们说的很对～」
    - 「所以你觉得你的成绩只是靠运气吗？」
    - 「我觉得从来都不是。」
    - 「那只是你的风格，不是吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谁知道呢～」
    - 青云天空起身靠在椅子上，双手背在脑后，望向天花板。
    - 世间的舆论并未在%SEX%轻松的语气里留下痕迹。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过啊——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要是从这么一滩浑水里，真的钓出点什么东西来……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那场面，应该挺好玩的对吧？」
    - %SEX%歪歪头看向%YOU%
    - 嘴角慢慢勾起来，露出一脸狡黠的笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那时%THEY%惊讶的表情一定很有意思～」
    - acc: 1
      content: 「听起来，你要开始给所有人一个惊喜了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「惊喜？」
    - 青云天空轻轻抬眉，歪头想了想。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也许吧……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我没有小特那种远大的理想，没有神鹰那股满身的热血，也学不来光辉与生俱来的骄傲，还有小草那种温柔中藏着的杀机，我都没有。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是呢——」
    - %SEX%顿了顿，眼神微微飘远。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「上次弥生赏，我站在场边，看着小特被记者围住，听着那些掌声和欢呼像潮水一样涌过去的时候……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我在想，那是什么感觉呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「站在最中间，被所有人看着，被所有人喊着名字……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「应该……挺不错的吧？」
    - 青云天空突然坐直，双手撑在膝盖上，整个人往前倾了倾。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以啊，我也想尝尝，被那样欢呼的滋味！」
    - %SEX%站起身，拍了拍衣服下摆，慢慢走向赛场。
    - %SEX%的步子不快，背对着你，马尾随着步伐一晃一晃。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！」
    - 青云天空突然转身向我喊来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以……皋月赏这条『大鱼』」
    - %SEX%深吸一口气，像是鼓足了勇气，眼神里除了自由，还有斗志。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我们一起，去把它钓上来，吓所有人一跳吧！」
    - 说罢便走向赛场。
    - %SEX%转身时步子比刚才快了一些，走出几步后，抬手朝身后挥了挥，没有回头。
    -
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「哦——哦！小青竟然这么有斗志，真难得。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「看来小特和光辉有危险了呢，不过，好像这回入闸也有点难呢」
    - 旁边过道探出两个脑袋。
    - %YOU%记得%THEY%是青云天空的朋友神鹰和草上飞。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「哼哼～小草，这可不一定哦。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「那边小特也在喊得震天响呢，跟小青有得一拼。」
    - （嘶～）
    - （貌似青云天空激情的发言被听的一清二楚。）
    - （%SEX%应该没注意吧……）


sats_sho_win:
  title: 皋月赏（胜）
  lines:
    - 当青云天空以两个马身的绝对优势冲过终点线时，看台上本就热闹的欢呼声更上一层。
    - 那些赛前对青云天空的轻蔑和质疑，被彻底淹没在这片沸腾的海洋里。
    - 特别周和圣王光环在第三弯道就已被迫提前启动末脚追赶。
    - 但无论%THEY%如何加速，前方那道青色身影始终保持着可怕的节奏。
    - 一种恰到好处——快到你追不上，又慢到让你觉得只差一点就能追上的节奏。
    - %YOU%站在原地，看着那道身影减速、停下、转身。
    - %SEX%抬起头，阳光从侧面打在%SEX%的脸上，%SEX%微微眯起眼睛，朝%YOU%比了个大大的耶。
    - 皋月赏被青云天空顺利收入囊中。
    -
    - %YOU%刚走进休息室，就看见青云天空正对着墙上一面装饰镜
    - 双手叉腰，脑袋微微扬起，像是彰显自己的战果。
    - %SEX%透过镜子看见你，整个人僵住。
    - 然后猛地转身，双手「嗖」地背到身后，满脸涨得通红。
    - 尾巴像受惊的猫一样炸开，直直地竖在身后。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训、训练员！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你怎么进来这么早！」
    - 话音刚落，门外传来一阵嘈杂的脚步声。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「哦哦！成功钓到大鱼了呢，小青！」
    - 神鹰推开门，爽朗的笑声先人一步冲进房间。
    - %SEX%三步并作两步扑过来，一把抱住青云天空。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「恭喜你呢，小青。」
    - 草上飞跟在后面，微笑着点头致意，不紧不慢地走进来。
    - 青云天空瞬间僵住，耳朵「唰」地竖得笔直，脸上红得几乎要冒烟。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哪……哪有什么大鱼……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只是……普通的比赛……」
    - %SEX%小声嘟囔着，眼神四处乱飘，就是不敢看任何人。
    - 话没说完，%SEX%突然想起什么，猛地扭头瞪向%YOU%。
    - 眼神里带着「你竟然感乱说！」那种恶狠狠的控诉。
    - %YOU%无辜的把头扭向一边，假装在研究墙上的挂画。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「诶～？可我们刚刚看了哦？」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「小青最后那个的冲刺，超——帅的！」
    - 神鹰把青云天空举得更高了些，像是炫耀战利品一样转了个圈。
    - 青云天空的脸更红了，%SEX%嘴唇动了动，想说什么，却只发出几个含糊不清的气音。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「咳咳——」
    - 草上飞轻咳两声，温和地提醒道。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「神鹰，天空同学好像害羞了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我、我才没有害羞！」
    - 青云天空突然大声反驳。
    - %SEX%猛地挣开神鹰的手臂，一把抓过你手里的毛巾盖在头上，把整张脸埋了进去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊——记者来采访了，我先去了」
    - 话音未落，%SEX%已经像一阵风一样冲出休息室。
    - 只留下毛巾的一角在门框边飘了一下。
    - 「不好意思让你们见笑了」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「没事没事，那我们也先走了，小特和光辉应该很不甘吧，我们也要去安慰一下。」
    - 神鹰挥挥手，跟着草上飞离开了休息室。
    - %YOU%站在原地，看着空荡荡的门框，又看了看手里被%SEX%抓走毛巾后剩下的包装袋，忍不住笑了一声。
    - （赢了皋月赏，然后一溜烟跑了。）
    - （——很符合%SEX%的作风。）
    - 那天晚上%YOU%以为%SEX%只是害羞躲记者，过两天就会晃悠着出现在训练场。
    - 但接下来的一周，%YOU%发现%SEX%整整一周都没来训练场。


sats_sho_lose:
  title: 皋月赏（败）
  lines:
    - 通道里的光线有些暗。
    - 青云天空靠在墙边，微微低着头，额前汗湿的发丝垂落，遮住了眼睛。
    - 手里无意识地拧着一瓶没打开的矿泉水，塑料瓶身发出细碎的声响。
    - %SEX%输了。
    - 不是惜败，是在最后两百米的直道上，被特别周从身后生生碾过。
    - 那道栗色的身影从外道强行突破，末脚像是突然爆发的急流，一瞬间就超过了所有人。
    - %YOU%走到%SEX%身边，没说话。
    - 青云天空把脸扭向一边。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我算错了……」
    - %SEX%先开口，声音闷闷的。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小特的末脚，在那种风阻下反而更有利。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我选错了策略。」
    - %SEX%顿了顿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐……训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是不是……太自以为是了？」
    - 没等%YOU%回答，通道那头传来急促的脚步声。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「小青！」
    - 神鹰的声音先到，人跟着扑了过来，一把抱住青云天空。
    - 草上飞跟在%SEX%身后，慢慢走了过来。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「小青，你知道吗？刚才最后弯道，你那个变线超帅的！」
    - 神鹰松开手，退后一步，认真地看着青云天空的眼睛。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「我和小草在看台差点跳起来了！」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「确实非常精彩。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「在那种风速下临时改变行进路线，需要极大的勇气和判断力。」
    - 草上飞点点头，语气温和而笃定。
    - 青云天空没抬头，声音闷闷的。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但还是输了……」
    - 神鹰双手抓住青云天空的肩膀。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「输赢很正常呀。我上次模拟赛不也输给了小特了嘛！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「重要的是，小青你跑得超——开心的，对吧？」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「我在看台都感觉到了哦，那种一往无前的气场！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「再不济——你去枯树洞喊两嗓子。」
    - 青云天空终于抬起了头。
    - 眼眶有点红，但眼神里那种空洞的东西已经不见了。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「下次一起训练吧。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「你的策略很强呢，我得多学习预防一下。」
    - %SEX%朝%YOU%微微欠身，又看向神鹰。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「好了，不打扰你和训练员复盘了，神鹰，我们也该撤了。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「好嘞！小青加油！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯，谢谢你们。」
    - 青云天空轻轻的道谢道。
    - 「谢谢你们了。」
    - 神鹰挥挥手，跟着草上飞一起消失在通道尽头。
    -
    - 脚步声渐渐远去，通道里又安静下来，只剩下远处偶尔传来的工作人员说话声。
    - %YOU%沉默了一会儿，开口道
    - 「你刚才问我」
    - 「你是不是太自以为是了？」
    - %YOU%顿了顿。
    - 「也许吧。」
    - 「但正如刚刚神鹰说的，最后弯道，你那个变线，真的很精彩。」
    - 「钓鱼的时候，遇上大风大浪，就是要有一往无前的勇气才能把竿甩出去。」
    - 「你所说的自以为是，就是那种勇气。」
    - 「有时候这种勇气可能会走向未知的道路。」
    - 「但这次输，不是因为你的策略不对，是因为力量上的差距。」
    - 「小特的末脚，就是比现在的你强一点。」
    - 「这次没钓到，没关系。」
    - %YOU%轻轻摸摸%SEX%的头，理了理%SEX%凌乱的头发。
    - 你看着%SEX%，%SEX%依然低着头，耳朵丧气般达拉着。
    - 「大鱼又不是只有一条。」
    - 「所以——咳咳——」
    - 「我这周发工资了哦～有没有什么想吃的？」
    - 「今天带你吃顿好的！西区那家高档寿司店怎么样？」
    - 青云天空耳朵动了动，盯着手里的矿泉水瓶，沉默了几秒。
    - 然后%SEX%抬起头，眼眶还有点红，但眼神已经不一样——
    - 那种涣散的东西消失了。
    - %SEX%盯着墙角的某个点，一动不动，像钓鱼时盯着浮漂的样子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下次，我会把风阻系数算得更准一点。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还有，神鹰说得对，我跑的很开心——」
    - 最后几个字越说越小声，%SEX%把脸扭向一边，停顿了两秒。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……那个。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「刚刚说的寿司，可别忘了……」


before_toky_yus:
  title: 日本德比（前）
  lines:
    - 离比赛开始还有段时间，青云天空靠在场边的栏杆上，手指间捻着一朵小小的黄色野花。
    - 阳光从侧面打过来，把%SEX%整个人镀上一层暖洋洋的边。
    - %SEX%盯着那朵花看了会儿，忽然开口。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐，训练员～」
    - 「嗯？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「过来过来～把眼睛闭上～」
    - 青云天空忽然开口，神秘兮兮的向%YOU%喊道。
    - %YOU%乖乖的走过去闭上眼，好奇%SEX%在整什么花活。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦～睁开看看～」
    - %YOU%睁开眼，看到一个由白色小花组成的花环戴在%SEX%头上
    - 风偶尔吹过，带起几缕碎发，衬得%SEX%整个人像一幅刚画好的水彩。
    - 「真美……」
    - %YOU%脱口而出。
    - 青云天空愣了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「诶？！」
    - 「咳咳——」
    - %YOU%移开视线，清了清嗓子。
    - 「我是说——」
    - 「花环——对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊……嗯。」
    - 面对%YOU%突如其来的赞美，青云天空显得有些不知所措。
    - 脸颊微微泛红，但很快又调整过来。
    - %SEX%眨眨眼，很快又扬起那个淘气的笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「叮铃叮铃～答对了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奖励你一朵哦～」
    - 青云天空笑着摘下一朵野花举到%YOU%面前。
    - 轻轻的别到%YOU%的头上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～这是雏菊哦～我最喜欢的花～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小花和我说过，雏菊的花语，是『纯洁的爱』呦～」
    - %SEX%退后一步，歪着头打量%YOU%，嘴角的笑意越来越深。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以说——接受了我送出去的雏菊的训练员，哼哼～」
    - 面对青云天空突如其来的挑逗，%YOU%——
    - acc: 1
      content: 「啊！？天空——你——」
      lines:
        - %YOU%手足无措地站在原地，手抬起来想摘下那朵花，又觉得摘了好像更奇怪。
        - 青云天空看着%YOU%的样子，笑意更深了。
        - %SEX%往前凑了凑，脸离%YOU%越来越近，近到%YOU%能看清%SEX%睫毛的弧度。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员该不会在想什么奇奇怪怪的——」
        - %SEX%的鼻尖几乎要碰到%YOU%的鼻尖。
        - 然后%SEX%突然后退一步，双手背在身后，恢复了那副懒洋洋的笑脸。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「噗噗——骗你的啦！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「雏菊还有『幸运』和『吉祥』的含义哦。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「看你刚才那个表情，哈哈哈哈——」
        - %SEX%笑得弯下腰，尾巴在身后愉快地晃来晃去。
        - 你深吸一口气，又缓缓吐出来。
        - 「……你这家伙。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「喵哈哈——抱歉抱歉，不过训练员那个样子真的好好笑。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「小青的反击计划——大成功！」
    - acc: 2
      content: 「纯洁的爱？那送花的人，是不是该负责解释得更清楚一点？」
      lines:
        - %YOU%稍稍低头，让那朵别在耳侧的雏菊更贴近%SEX%的视线。
        - 青云天空没想到%YOU%会这样反击。
        - %SEX%整个人愣住，眼睛眨了眨，像是没反应过来刚才那句话是什么意思。
        - 然后脸「唰」地红了。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「等、等等！我不是那个意思……」
        - %SEX%慌乱地后退半步，眼神四处乱飘，刚才那股游刃有余的劲儿消失得干干净净。
        - 「不是哪个意思？」
        - %YOU%紧跟上前一步。
        - 语气里带着点认真的困惑——虽然嘴角已经快压不住了。
        - 「这份纯洁的爱，来，让我们一起分享。」
        - 「我绝对不会辜负你的这份期待。」
        - 「所以——青云天空！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: 「呜啊！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: 「停！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: 「停停停！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……雏、雏菊还有『幸运』的意思啦！是幸运！」
        - 青云天空身体僵住。
        - 红晕从脸颊一路烧到脖子根。
        - %SEX%的尾巴直直地竖在身后，像一只被踩了尾巴的猫。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「真的是——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员一天到晚都在想什么啊！！」
        - 青云天空的声音慌乱至极，把手里的矿泉水瓶举起来挡在脸前，只露出一双眼睛，气鼓鼓地瞪着%YOU%。
        - %YOU%终于没忍住，笑出声来。
        - 「哈哈哈，我知道，我知道，逗逗你的。」
        - %YOU%摸了摸青云天空的头。
        - 青云天空满眼都是那种「你给我等着」的控诉。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员真的是——太过分了～」
        - 「都跟你学的哦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哼——」
        - 青云天空哼了一声，把脸扭向一边，但脖子还红着。
    -
    - 小闹剧结束后，两人靠在栏杆上安静了一会儿。
    - 远处传来观众席的嘈杂声，广播里正播报着即将开始的比赛信息。
    - 青云天空忽然抬起手，指了指远处。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你看那个。」
    - %YOU%顺着%SEX%手指的方向看去——赛道内侧的空地上，立着一座石碑。
    - 阳光正好打在碑身上，把上面的字照得清晰可见。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「号称只有最幸运的赛%UMA%才能赢的日本德比……」
    - %SEX%收回手，指尖轻轻摩挲着别在衣领上的那朵雏菊。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「用象征『吉祥』的花来当护身符，是不是挺合适的？」
    - %SEX%转过头看%YOU%，阳光在%SEX%眼睛里碎成一片。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以啊，不管怎样，我想贡献一场能让所有人惊讶又开心的比赛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喵哈哈……这样说会不会太贪心了？」
    - %SEX%收回手，背在脑后，恢复了那副懒洋洋的模样。
    - 尾巴尖却轻轻晃着，暴露了%SEX%心里那点小期待。
    - 「打起精神加油吧！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯！打起精神加油吧——」
    - 说罢，青云天空哼着歌转身走向赛场。
    - 步子不紧不慢，像是要去散步而不是参加一场十几万人瞩目的比赛。
    - %YOU%站在原地，看着%SEX%渐渐走远的背影。
    - 阳光很暖，风很轻。
    - 那朵小小的雏菊不知何时别在了%SEX%的决胜服上，随着%SEX%的步伐轻轻晃动。


toky_yus_win:
  title: 日本德比（胜）
  lines:
    - 混合采访区的喧闹被厚重门扉隔在身后。
    - 通道里异常安静，只有远处偶尔传来的脚步声。
    - 青云天空靠在墙边，胸口剧烈起伏着，大口喘着粗气。
    - 汗水顺着脸颊滑落，发丝湿漉漉地贴在额头上。
    - %SEX%赢了.
    - 以鼻尖般的微妙差距。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼——好险好险～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小特最后的末脚，太可怕了，差点就把我吞了。」
    - 青云天空一脸劫后余生的表情看向%YOU%
    - %SEX%拿起毛巾擦了擦后颈，又胡乱抹了把脸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你看到了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在前半段抢位置的时候，光辉兴奋过头了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%的步频比最佳节奏快了整整5%，差点把我的节奏也带乱。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我让了，让%SEX%过去，让%SEX%领跑，让%SEX%消耗。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「到了比赛后半程，%SEX%果然体力开始不足。」
    - %SEX%说着，手指在空中比划了一下，复盘刚才的比赛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后是小特。」
    - %SEX%把毛巾搭在肩上，目光微微抬起，看向赛道的最后一段。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最后四百米，我听到%SEX%呼吸的节奏变了——那是%SEX%要全力启动末脚的信号。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我提前了0.5秒加速，就为了抢出那一点点先机。」
    - %SEX%顿了顿，声音低了下去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但还是不够……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小特的末脚……太强了，如果没有最后那个——」
    - %SEX%没说完，但%YOU%知道%SEX%指的是什么。
    - 最后十米，特别周的势头几乎要将%SEX%吞没，但终点线先到了。
    - acc: 1
      content: 「幸运？」
    - %YOU%轻声说。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯。」
    - 青云天空点点头，拿起别再决胜服上的雏菊。
    - 经过激烈的比赛，花瓣有些皱了，但还顽强地挂在衣领上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「雏菊的『吉祥』～今天好像真的生效了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿～训练员，看来我今天是最幸运的赛%UMA%呢～」
    - 看着满脸傲娇的青云天空，摸了摸%SEX%的头。
    - 「是啊，今天的你，是最幸运的赛%UMA%——」
    - %YOU%顿了顿，接着说道
    - 「因为你——我也是最幸运的训练员哦～」
    - 青云天空愣了一下，别过脸去，脸颊微微发红。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……训练员今天真的怪怪的。」
    - %SEX%小声嘟囔，但嘴角兴奋感压不下去。
    - %YOU%往前走了一步，认真地看着%SEX%的眼睛。
    - 「不过，今天的胜利，可不只是幸运哦。」
    - 「还有你自己敏锐的直觉——没有被光辉打乱节奏。」
    - 「你的决心——最后直道上，哪怕被追到鼻尖前，也没有放弃。」
    - 「幸运会眷顾准备好的人。」
    - 「而你——准备好了。」
    - 青云天空眨眨眼，然后%SEX%低下头，盯着手里的雏菊看了两秒，嘴角慢慢弯起来——
    - 不是平时那种狡黠的笑，是更轻、更软的那种。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……训练员今天真的是……怎么这么会说话……嘿嘿～」
    - 青云天空痴痴的笑着，像只小奶猫呼呼的一样开心。
    - 但很快%SEX%就抬起头，恢复那副懒洋洋的模样，把雏菊重新别回决胜服上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过你说得对～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以下一场——菊花赏。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那是据说是最强的赛%UMA%才能拿下的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小特的实力……令人感到害怕。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以——光有幸运是远远不够的，我要靠自己的策略拿下！」
    - 看到充满干劲的青云天空，%YOU%开口道。
    - 「我会一直在你身边，助你前行——」
    - 「对了——雏菊的幸运，可不止今天这一种用法哦～」
    - 青云天空疑惑的歪了歪头。
    - 「来吧！许个愿。」
    - 「今天的你，就是世界上最幸运的赛%UMA%。」
    - 「而最幸运的赛%UMA%的愿望，就由我这位最幸运的赛%UMA%的训练员来实现！」
    - 青云天空眼睛微微睁大，然后眯起来，嘴角慢慢勾起一个弧度。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的吗，训练员？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～那我得好好想想……今天可不能这么轻易地放过你。」
    - %SEX%背着手，微微摇着头，尾巴在身后愉快地晃来晃去。
    - 片刻之后，%SEX%竖起一根手指，像只小恶魔一样命令道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「首先——愿望要延期兑现！」
    - acc: 1
      content: 「啊？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不是现在，是在……嗯，下次我觉得自己还需要一点点『幸运』的时候。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「至于什么时候才算『需要』……那就是我的秘密啦～」
    - 青云天空朝满脸疑惑的%YOU%眨了眨眼。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员就怀着期待等着吧～」
    - 说完，%SEX%便笑着转身，朝庆祝的人群走去。
    - 走了几步，好像又想起什么，回头喊道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过利息还是要收的！比如晚上的庆功宴！」
    - %SEX%举起两根手指。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要双倍！」


toky_yus_lose:
  title: 日本德比（败）
  lines:
    - 赛后通道里的空气有些滞重。
    - 青云天空背靠着墙，微微低着头，%YOU%上前给%SEX%递水和毛巾。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎呀，失败了呢……啊哈哈——」
    - 青云天空故作轻松的说道，然后低下了头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……我急了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「光辉抢跑的时候，节奏比预想中乱了太多」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我不该跟着%SEX%的节奏较劲，更不该在%SEX%明显失速后，还固执地想立刻把位置抢回来。」
    - %SEX%抬起头，脸上没什么表情，只有眼却充满了不甘。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「结果就是，自己的呼吸乱了，步频也碎了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「给了小特最好的机会……%SEX%怎么可能放过。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「幸运女神今天……没站在我这边呢……」
    - 「幸运？」
    - %YOU%看着%SEX%的眼睛，没有接那个话。
    - 「你刚才说的那些——节奏乱了、步频碎了、不该跟着较劲——」
    - 「这些，和幸运有关系吗？」
    - %YOU%顿了顿，继续说道。
    - 「如果今天风向突然变了，那阵风是幸运吗？」
    - 「如果特别周最后一步恰好没踩稳，那是幸运吗？」
    - 「青云，你比谁都清楚，赛场上的『幸运』，从来不是凭空掉下来的礼物。」
    - 「它只会在你计算了所有风向、丈量了每寸草皮、预判了对手每一个呼吸节奏之后——」
    - 「——在你为那万分之一的『偶然』做好了万全准备的『必然』时刻，才会轻轻落在你这边。」
    - 「所以，幸运是你实力的一部分，是你用智慧和准备为自己创造的『可能性』。」
    - 「但它不是全部，更不是借口。」
    - 青云天空沉默地听着，攥着毛巾的手指慢慢松开
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「…没错。」
    - %SEX%站直身体，声音也恢复了平日的冷静。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「把一切都推给『运气不够』，未免也太自欺欺人了。」
    - %SEX%看向我，湛蓝色眼眸里没有了刚才的迷茫或懊丧
    - 只剩下沉淀下来的、近乎冷冽的决意。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是我自己没沉住气。策略执行不到位，临场判断也出了错。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，菊花赏……还有多久？」
    - 「五个月。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好。」
    - %SEX%点了点头，脸上浮现出一丝属于策士的冷静弧度。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下一次，在京都的赛场上……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要靠我自己的策略，一雪前耻。」
    - 说完，%SEX%将毛巾搭在肩上，迈步朝通道深处走去。
    - 脚步不再有丝毫犹豫或沉重，反而比来时更加沉稳、坚定。
    - 那朵雏菊在%SEX%发间微微一闪。
    - 像一枚沉默的誓言，祝福着%SEX%。


before_kiku_sho:
  title: 菊花赏（前）
  lines:
    - fontSize: 1.2rem
      content: 比赛的三天前，训练室内——
    - 青云天空站在门口，背着光，看不清表情。
    - 但%SEX%站得很直，比以往任何时候都要直，那枚菊花发卡在%SEX%鬓边别得端端正正。
    - 青云天空走进来，反手关上门，将门外遥远的喧闹隔成模糊的背景音。
    - %SEX%没有立刻说话，而是在房间里慢慢走了一圈。
    - 指尖依次划过摆放整齐的装备、战术板（上面画着打败小特）、还有窗台。
    - 最后，%SEX%在窗前停下，背对着%YOU%，望向窗外那片辽阔的赛道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - acc: 1
      content: 「嗯？紧张了？」
    - %YOU%停下整理手中早已烂熟于心的战术表，看向%SEX%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不……一点也不……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「反倒是我现在，很『激动』呢」
    - %SEX%转过身。晨光从%SEX%身后漫进来，给%SEX%周身轮廓镀上一层淡金色的光边。
    - 脸上没有平时的慵懒，也没有刻意的紧绷，只有一种极致的、冷静的清醒。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐——训练员。」
    - 青云天空又叫了%YOU%一声，%SEX%向前走了一步，目光笔直地看向我。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明天的比赛，从第一米到最后一米。」
    - %SEX%停顿了一拍，青色眼眸里像有青色的火焰在燃烧。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要用我的策略——统治全场！」
    - 突如其来的一句豪言壮语，比任何呐喊都更具分量。
    - %SEX%走到桌边，拿起一叠厚厚的文件——全是密密麻麻的手写笔记和复杂图表，纸张边缘因反复翻动而微微卷曲。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我看了过去三十年的所有菊花赏录像，计算了京都赛道每一天、每一个时段的风向、湿度、光照角度对草地状态的影响。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我分析了所有可能参赛对手最近三个月每一场训练赛的数据，甚至包括%THEY%赛后采访时的微表情和疲劳指标。」
    - %YOU%翻着那些笔记，手指在某页停下——
    - 那是一张手绘的赛道图，标注着每一处坡道的角度、每一段草皮的状态，甚至还有不同时段阳光投射的阴影边界。
    - 旁边还密密麻麻写满了数字和箭头。
    - 「这些……做了多久？」
    - 青云天空歪了歪头，像是在算。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯——从德比之后吧。」
    - 「五个月？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「差不多。」
    - 「所以这五个月，你那些『偷懒』——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喵哈哈～」
    - %SEX%笑了，把那份路线示意图往%YOU%面前又推了推。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你知道吗，有时候坐在那儿发呆，反而能想明白很多事。」
    - 「比如？」
    - %SEX%笑了，把那份路线示意图往%YOU%面前又推了推。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「比如——这些。」
    - 青云天空走到战术板前，将一张计划表拍在板面的特别周上。
    - %SEX%转过头，脸上是%YOU%从没见过的，带着狂气与冷静的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我有了一个计划。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可能是菊花赏有史以来……最『疯狂』的计划」
    - 面对%SEX%此刻燃烧着锐利自信的眼神，%YOU%心中没有任何疑虑，只有被这份决意点燃的共鸣与无条件的信任。
    - %YOU%的目光扫过那些详实到可怕的数据。
    - 「看来除了我们准备的，你自己的准备……更加的充分。」
    - 「这么说……你把我们都骗过去了。原来你那些『偷懒』的时间，都用在了这里。」
    - 青云天空嘴角微微扬起。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我早就做好准备了，这次，让那些质疑的声音，那些说『不过是运气好』、『逃马不可能赢长距离』、『懒散成不了大器』的声音全部——」
    - %SEX%的眼神骤然变得锐利如刀
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——全部，安静下来。」
    - 「计划的风险系数，计算过了吗？」
    - %YOU%问出了最后一个，也是唯一一个需要确认的问题。
    - 青云天空轻轻笑了，那笑声里充满了掌控感。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「风险？训练员，当我们决定要钓的是一条能载入史册的『大鱼』时，讨论风险就像在风暴天担心鱼线会不会被太阳晒褪色一样。」
    - %SEX%将一份最终的路线示意图推到%YOU%面前
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你就不要多想，登上这艘大船吧。掌舵的任务会交给你的。」
    - 青云天空停顿一秒，声音低了些，带着罕见的、近乎依赖的认真。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……我相信你的判断。就像你一直相信我的『任性』一样。」
    - %YOU%看着图上那条违背所有常规认知的激进路线，却没有丝毫质疑。
    - 「明白了」
    - %YOU%收好那份示意图，对%SEX%点了点头，语气平静却坚定。
    - 「你的『疯狂』，我们一起来实现。我会确保所有的支援、所有的应对方案，都跟上你的节奏。」
    - 「你只需要专注前方，按照你描绘的这幅『青云之图』，跑下去。」
    - 嘴角的弧度扩大，那笑容既像算尽一切的策士，又像个即将恶作剧得逞的孩子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那么——」
    -
    - fontSize: 1.2rem
      content: 比赛当天，京都赛马场赛前休息室——
    - %SEX%拉开门，门外赛场的声浪、光芒与热风轰然涌入，将%SEX%青色的发丝吹起。
    - %SEX%逆着光，侧脸的轮廓在喧腾的背景中异常清晰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「既然要钓鱼，不仅要以大鱼为目标——」
    - %SEX%迈出脚步，声音清晰地穿透嘈杂。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还要钓得足够漂亮，足够精彩，足够让所有人就算看不懂，也会张大嘴巴忘记合上！」
    - 在完全融入那片光海前，%SEX%回头，留下最后一句。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样……才比较有趣嘛。」
    - 门缓缓合上。
    - 没有过多的祝福，因为%YOU%知道。
    - （今天的%SEX%……所向披靡！）


kiku_sho_win:
  title: 菊花赏（胜）
  lines:
    - 当青云天空率先冲过终点线时，接踵而至，山呼海啸般的欢呼轰然炸开。
    - 解说声嘶力竭的呐喊通过扩音器响彻全场
    - content:
        - fontWeight: bold
          content: 解说员
        - fontSize: 1.2rem
          content: 「青云天空！青云天空冲线了！不可思议的大逃！%SEX%成功了！青云天空！%SEX%的名字正如今天的京都赛马场一样，万里无云的晴空！」
    -
    - 在全场的欢呼中，青云天空走进来，反手关上门
    - 厚重门扉将外面沸腾到近乎疯狂的喧嚣瞬间隔绝。
    - %YOU%并没有说话，只是静静的看着%SEX%，等待胜利的欢呼。
    - 但迎接你的不是青云天空激动的大叫。
    - %SEX%背靠着冰凉的门板，静静站了两秒，仿佛在确认这份突如其来的寂静是否真实。
    - 然后将长长地、缓缓地、像是将积压了整场比赛乃至更久时间的一切紧绷，都随着一口气彻底吐了出来。
    - %SEX%的决胜服几乎被汗水浸透，紧贴在身上，勾勒出剧烈运动后尚未平复的起伏曲线。
    - 发丝湿漉漉地黏在额角和颈侧，脸颊因兴奋和缺氧泛着动人的红晕。
    - 胸口还在剧烈地起伏，每一次呼吸都沉重而满足，像刚刚拉动了一座山的风箱。
    - 青云天空抬头看向%YOU%。
    - 先是眼睛对焦，然后，嘴角开始控制不住地上扬。
    - 那笑容像滴入清水中的墨，迅速晕染开来，从一个小小的弧度，蔓延至整张脸庞，最后变成一朵毫无阴霾、带着纯粹孩子气得意的灿烂笑容，明亮得几乎要驱散休息室里所有的昏暗。
    - %SEX%吸了一口气，声音因激动和疲惫而微哑，却异常清晰、有力，仿佛每个字都带着胜利的重量。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「策略——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - fontSize: 1.2rem
          content: 「——大！成！功！」
    - 话音未落，%SEX%整个人像一颗被快乐发射出去的青色炮弹，一下子蹦到我怀里，双臂紧紧环住我的脖子，把汗湿的脸颊和发烫的呼吸一股脑埋进我的颈窝。
    - 但这份爆发只维持了一瞬，狂喜的力道迅速褪去，%SEX%像一只终于捕猎成功、耗尽力气的小猫，软绵绵地挂在我身上，只剩下细微的颤抖和满足的叹息。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……你看到了吗！」
    - %SEX%的声音闷在我衣服里，却掩不住里面的雀跃
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「第一个一千米，我用超快的速度冲出去的时候，后面那些人的表情……尤其是特别周！%SEX%眼睛瞪得——有这么圆！」
    - %SEX%稍微退开一点，用手在自己脸上比划了一个夸张的圆眼表情，自己先「噗嗤」一声笑了出来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%都以为我疯了，开局就敢这么跑三千米，但没人敢放开我。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谁让我之前『大逃』的名声，太吓人了呢？%THEY%怕一放我出去，就再也追不上了。」
    - 青云天空眯起眼，露出一抹狡黠的、属于策士的得意。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「第二个一千米，我故意把速度『掉』下来。」
    - %SEX%的手指划出一道清晰向下的抛物线。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「掉到一个看起来马上就会崩盘、随时要掉队的程度。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「后面肯定有人在偷偷乐吧？心里想着『看，%SEX%果然不行了，装不下去了』，然后开始美滋滋地算计，在死亡斜坡前用什么姿势、从哪边超过我最省力。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「死亡斜坡……哼。」
    - %SEX%轻轻哼了一声，带着点小小的傲慢。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「「我研究过那里每一寸草皮的湿度数据、逆风角度和历年选手的蹄铁痕迹。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的最佳加速点，根本不是常人以为的坡顶或坡中，而是坡前那段被主看台阴影覆盖、地面被踩踏得最紧实、日照影响最小的——十五米。」
    - 青云天空的身体微微前倾，压低声音。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我在那里开始加速的时候，后面肯定都懵了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「脑子里大概在疯狂的想『这疯子要在上坡前把最后一点力气用完？肯定是陷阱！想骗我们提前发力！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就这么一犹豫——啪！机会，没了。」
    - %SEX%猛地直起身，打了个清脆无比的响指。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小特最后冲得很猛，真的猛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我都能听到%SEX%蹄铁刮地、拼尽全力的声音，就在我身后不远。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是%SEX%之前的节奏已经被我带乱了。为了跟上我第一段那不讲道理的冲刺，%SEX%的消耗比%SEX%自己预想的要大很多。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最后那段斜坡，%SEX%已经是被我搅乱的水流中上钩的鱼了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最后的直线，即使%SEX%的末脚再强，也已经追不上拉开了很多马身的我啦～」
    - 在%SEX%眉飞色舞、激情四射地介绍完自己这场堪称艺术品的伟大计策后，那股支撑着%SEX%的亢奋似乎终于找到了出口。
    - %SEX%再次松懈下来，重新瘫软在我怀里，把全身的重量都安心地交付过来。
    - %YOU%稳稳接住%SEX%，手指轻轻理了理%SEX%汗湿的鬓发
    - 「累坏了吧？今天，你可以肆无忌惮地偷懒，睡到天荒地老也没关系。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……」
    - 青云天空像只慵懒的猫，用鼻音轻轻地、模糊地应了一声。然后，%SEX%把头更深地埋进我怀里，一动不动。
    - 休息室里彻底安静下来，只有%SEX%逐渐变得平缓悠长的呼吸声，以及窗外隐约传来的、永不停歇的胜利欢呼，就像遥远的潮汐。
    - 过了好一会儿，久到仿佛时间都在这里变慢。
    - %SEX%再次开口，声音很轻。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……赢了。」
    - %SEX%抬起头，额前的碎发还沾着湿意，青色眼眸一眨不眨地看着我，里面映着休息室顶灯的光，也映着我的影子。
    - 那里面没有了刚才复盘战术时的锐利与狡黠，只剩下一种纯净般的喜悦，和一点点……不敢置信的恍惚。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - 「我在……」
    - %YOU%温柔的回应道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我做到了。」
    - 这不是疑问，不是寻求确认。
    - 是一个清晰、平静、却蕴含着千钧之重的宣告。%SEX%向自己，也向%YOU%，宣布了这个事实。
    - 「嗯，你做到了。」
    - 「你甚至破了菊花赏多年以来的记录，跑法还是所有人都不看好的大逃，有史以来第一位赢得菊花赏的逃马，就是你。」
    - 「窗外的欢呼，不仅是为了你的胜利，更是献给你那精彩绝伦、足以载入史册的战略。所有质疑，从今天起，都烟消云散了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿～」
    - 像小孩子一样，青云天空发出了一个憨憨的笑声。然后，%SEX%重新把脸靠回我胸前，蹭了蹭，找到一个最舒服的位置。
    - 窗外，属于胜利者的欢呼依旧经久不息，如同献给这片晴空的礼赞。
    - 而在这方静谧的斗室里，青云天空静静依偎着，%SEX%脸上的笑容干净、明亮，褪去了所有算计与锋芒，只剩下纯粹的快乐与疲惫后的安宁。
    - 正如今天京都赛马场上空万里无云的辽阔晴空……


# 赢得三冠 菊花赏回合结束后下回合开始时触发 全属性+5
ws_triple_crown:
  title: 庆功宴！！！
  lines:
    - 菊花赏结束后隔天中午，庆功宴选在特雷森的一间活动室里。
    - 长桌拼成的大台面上摆满了菜，西野花系着围裙进进出出，端上来的东西一样比一样夸张。
    - 整条的炭烤鲷鱼，鱼身弓起，表面烤出漂亮的焦色，旁边配着萝卜泥和柠檬；蟹肉奶油可乐饼码成小山，金黄酥脆的壳上还滋滋冒油；
    - 一大锅蛤蜊清汤，盖子掀开的时候白雾裹着鲜味往上冲，汤面上浮着薄薄的柚皮片；还有鲑鱼刺身切得厚薄一致，在盘子里闪闪发光。
    - 正中间还有个大大的胡萝卜蛋糕，上面的配料豪华至极。
    - 特别周和圣王光环从进门起就趴在桌上，脸颊贴着桌面，双臂软软的耷拉下来，尾巴垂在地上拖出两道阴影。
    - 草上飞在旁边轻声细语地劝。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小特！光环！今天毕竟是好友庆祝的日子呀，打起精神来。」
    - %URARA%也蹦蹦跳跳的跑过来安慰道。
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「小特！环环！别伤心啦！你们看，我还没赢过呢！不也好好的！」
    - 草上飞把手搭在%URARA%肩上吐槽道。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「乌拉拉你这句话不算安慰。」
    - 过了一会儿圣王光环忽然直起身，朝天花板喊道。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「下次！下次绝对要赢！！！」
    - 特别周也跟着抬起头来，双手拍了一下自己的脸。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「没错！下次绝对赢要赢！！！」
    - 青云天空靠在门框边看完这一幕，尾巴在身后慢悠悠摇了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （这两个家伙～）
    - 西野花端出最后一盘菜的时候，青云天空凑过去，鼻子抽了抽
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜啊——小花，你这次是不是把训练员下个月工资都花光了？也太豪华了吧！」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「因为回不一样嘛，嘿嘿。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「现在的小青，可是三冠赛%UMA%哦！」
    - 西野花温柔的说道，然后拿出了一个庆祝帽带到了青云天空头上。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「恭喜！」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「恭喜！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「恭喜！」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「恭喜！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「恭喜！」
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「恭喜！」
    - acc: 1
      content: 「恭喜你！小青！」
    - 祝贺声从四面八方涌过来，青云天空挠了挠头，脸颊微红。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿，没想到还有人记得这个啊——」
    - 神鹰从背后拍了青云天空一巴掌，拍得%SEX%往前一倾。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「别装了！好好收下这份荣誉和祝福，这是你应得的！」
    - 然后%SEX%目光一转，看向你，压低了声音，一脸坏笑道。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「你训练员的嘴角，都翘了一个晚上了哦？」
    - %YOU%端着饮料的杯子一顿，轻轻咳了一声，抬手摸了摸嘴角——确实绷不住，一直在往上翘。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你也太不矜持了吧？」
    - 「你也差不多哦，今晚尾巴一直不停晃呢。」
    - %SEX%愣了一下，耳朵唰地竖起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈？你说什么——？」
    - %YOU%没再接话，把杯子抬了抬，隔空敬了%SEX%一下，青云天空微微眯了眯眼，然后噗的一声笑了出来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦好啦——菜要凉了，大家伙！开动开动！」
    - 之后的几个小时，杯碟碰撞的声音没断过，神鹰不知道从哪摸出来一瓶气泡酒，乌拉拉一杯下去就开始说胡话，草上飞一边笑一边给%SEX%擦嘴角。
    - 西野花从头到尾没怎么吃，一直笑眯眯地照顾看着大家。
    - 等热闹的宴会结束，%YOU%和青云天空揽下了收拾房间的活。
    - 等到收拾完，已是傍晚，夕阳把屋里照成淡淡的橘色，青云天空靠在椅背上伸了个懒腰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼啊——终于收拾完了！训练员——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——啊不，三冠训练员——」
    - 青云天空贱贱的改口道。
    - 「嗯？」
    - %YOU%从后厨探出头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「竟然这么心安理得的接受了这个称号吗，真不要脸啊～」
    - 青云天空贱兮兮的调侃道。
    - 「嘿嘿～这不是沾了小青的光嘛，你太令我骄傲了！」
    - 「对了！说吧，要什么奖励！」
    - %SEX%眨了眨眼，像是早就等着这句话，%SEX%伸出一根食指，在%YOU%面前晃了晃，嘴角一点一点地翘起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘿嘿——到时候再告诉你～」

# 触发事件【庆功宴！！！】 后回合结束时触发
we_old_money:
  title: Old Memory
  lines:
    - 庆功宴结束后当天晚上。
    - %YOU%洗漱完换上睡衣，设好闹铃，躺在床上开始入睡。
    - 叮铃——叮铃——
    - 朦胧中，%YOU%好像听到了一阵急促的门铃。
    - 叮铃——叮铃——叮铃——
    - （等会……真有人在按门铃！）
    - 「谁啊，大半夜的……」
    - %YOU%坐起来，揉了揉头发，看了眼手机——凌晨两点。
    - 能这个时间按门铃的，是有酒鬼认错家门了？
    - 叮铃叮铃叮铃叮铃——
    - 「……来了来了。」
    - %YOU%打着哈欠走到门口，拉开门……
    - 门外，青云天空站在那里。
    - 穿着一件宽松的卡其色马甲，下身是一条深灰色的工装短裤，头顶扣着一顶宽檐渔夫帽。
    - 背上扛着两个巨大的包裹。一个竖着，看形状应该是鱼竿包；另一个横着，鼓鼓囊囊的，大概是乱七八糟的小装备。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！早上好啊！走！出发！！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈～小青啊……下次要夜钓早点说啊……这大半夜的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「才不是夜钓呢！出发！咱们的目标可是——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「澳大利亚——蜥蜴岛！目标——黑马林鱼！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「现在出发，到那边正好早上！」
    - %YOU%张了张嘴，脑子的转速明显没跟上。
    - 「……你睡傻了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「两周前的同一时间！」
    - 青云天空把包往旁边一扔，一手叉腰，一手试着%YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你答应我的！可别想抵赖哦！」
    - %SEX%说完直接弯腰拎起包，往前迈了一步，准备直接拉着%YOU%出门。
    - 「等等等等——」
    - %YOU%赶紧伸手按住门框。
    - 「太突然了吧！请假条怎么办？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早帮咱俩就申请好了！」
    - 「先不说你咋帮我申请的，攻略呢？澳大利亚那边钓鱼不办许可的吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「跟着我你还用担心攻略？」
    - （就是跟着你我才担心攻略啊……）
    - 「资金呢？咱俩的花销怎么办？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「放心……我请客！训练员就老老实实吃软饭吧～」
    - （这句话听起来咋这么别扭……）
    - 「……那最起码让我准备个衣服吧。」
    - 青云天空的动作停了一下，上下打量着%YOU%，目光扫了扫%YOU%身上皱巴巴的睡衣。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯…………」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「确实，穿睡衣不太合适。」
    - %SEX%从口袋里摸出了一个计时器。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「去吧！赛马！计时五分钟！」
    - 「是～是～传奇训练家青云天空小姐～」
    - %YOU%稀里糊涂的收拾完就被拉着奔向机场……


kiku_sho_lose:
  title: 菊花赏（败）
  lines:
    - 菊花赏当天，京都赛马场。
    - 青云天空以第%RANK%名的成绩冲过终点。
    - %YOU%挤过人群找到%SEX%时，%SEX%正站在赛道边，低着头，双手撑在膝盖上。
    - 周围人来人往，有人欢呼，有人抱怨，有人被记者团团围住。
    - %YOU%走到%SEX%身边，还没开口，%SEX%先抬起头。
    - 脸上挂着笑。
    - 嘴角扬着，眼睛里却没有光。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「第%RANK%名诶。」
    - if: Number(d.RANK) <= 5
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还不错吧？」
    - %SEX%的声音有点哑，抬手打断了要安慰%SEX%的%YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不要聊了……什么……都不要……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走吧。」
    - %SEX%站直身子，拍了拍身上的草屑，动作很慢。
    - 休息室里很安静，%SEX%收拾东西，%YOU%也收拾东西，没有人说话。
    - %YOU%每次试图去安慰，都会被%SEX%大声喝止。
    - %SEX%收拾得很慢，把每件东西都叠好，放好，像是在做一件很重要的事。
    - 然后你们走出赛马场，坐上回程的车。
    - 一路上，%SEX%靠着车窗，看着窗外掠过的风景。
    - 一句话也没有说。


# BE 触发：菊花赏落败或未出走后下一周回合结束 此后禁参赛 禁训练（不会强制结束游戏 但此后青云天空无法训练和参赛。）
soft_be:
  title: 永恒的自由
  lines:
    - 菊花赏结束后，青云天空一言不发……
    -
    - 第二天，训练场没有%SEX%的影子。
    - %YOU%等了一上午，%SEX%没有来。
    - %YOU%知道%SEX%会去哪。
    - 钓鱼台在河边，离训练场不远，是%YOU%和%SEX%第一次见面的地方。
    - %YOU%沿着河岸走过去，远远就看见那道熟悉的身影。
    - %SEX%坐在钓鱼台上，握着鱼竿，两条腿悬在水面上方晃来晃去。
    - 听见脚步声，%SEX%回过头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀，训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你怎么知道我在这儿？」
    - %SEX%笑着冲%YOU%挥挥手，语调懒洋洋的，和平时一模一样。
    - %YOU%走上钓鱼台，在%SEX%旁边坐下。
    - 「你说呢？」
    - %SEX%嘿嘿笑了两声，继续盯着水面。
    - 「有鱼吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没呢，今天鱼都精了，不上钩。」
    - 「那你钓什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等呗」
    - %YOU%们就这么坐着。
    - 阳光照在水面上，泛着一层细碎的光。偶尔有风吹过，河边的芦苇沙沙响。
    - 过了很久。
    - 「青云……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？」
    - 「那个，心情恢复的怎么样？」
    - %SEX%没说话。
    - 「菊花赏已经过去了。」
    - %SEX%还是没说话。
    - %YOU%侧过头看%SEX%。
    - %SEX%盯着水面，脸上的表情很平静。
    - 「青云？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - %SEX%开口了，声音很轻。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我不想去。」
    - 「心情还是不好吗？」
    - 「那咱休息一个月，我带你出去旅游吧。」
    - 「咱们可以去马尔代夫！那里最适合钓鱼，或者去马来西亚的猫城！还有——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！」
    - 青云天空打断了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员能想和我去旅游，我非常开心。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但训练的话……还是算了吧。」
    - 「为什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是不想去。」
    - %YOU%把这句话嚼了嚼，咽下去。
    - 「那今后比赛呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不跑。」
    - %SEX%打断%YOU%，语气很干脆。
    - 「青云——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不跑。」
    - %SEX%又说了一遍。
    - 这次%SEX%没有笑，也没有看%YOU%，只是盯着水面上的鱼漂。
    - %YOU%看着%SEX%，看了很久。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你回去吧。我在这儿待会儿。」
    - %YOU%没有动。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真的，回去吧，我又丢不了。」
    - %YOU%站起来，看着%SEX%。
    - %SEX%冲%YOU%摆摆手，脸上挂着笑。
    - 「明天见啊。」
    - %YOU%转身往回走。走出几步，回头看了一眼。
    - %SEX%坐在钓鱼台上，握着鱼竿，两条腿晃来晃去，和平时一模一样。
    -
    - 第三天，%SEX%还是没有来训练场。
    - 第四天，也没有。
    - 第五天，%YOU%再去河边。
    - %SEX%还在那儿。
    - 看见%YOU%，%SEX%又是那副懒洋洋的笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你又来啦？这么喜欢小青呢～」
    - %YOU%走过去，在%SEX%旁边坐下。
    - 「鱼呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没口。」
    - 「钓多久了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不知道。」
    - %YOU%跟%SEX%静静的坐在河边。
    - 直到傍晚时刻。
    - 「你真的不打算训练了？」
    - %SEX%没说话。
    - 「青云——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员。」
    - %SEX%打断%YOU%，把鱼竿放在一边，站起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我想回去睡觉了。」
    - %SEX%走了。
    - %YOU%坐在钓鱼台上，看着%SEX%的背影越走越远。
    - 风吹过河面，鱼漂在水上轻轻晃动。
    - %YOU%一个人坐了很长时间。


# 经典年12月/1周，回合开始时触发
ws_47_48:
  title: 没有惊喜的比赛
  lines:
    - fontSize: 1.2rem
      content: 有马纪念赛前一个月——
    - 「小青——参赛赛%UMA%的海报出来了——」
    - 青云天空正蜷在窗边的沙发上，一本摊开的《钓鱼科学》盖在脸上，发出均匀的呼吸声。
    - 听到声音，书册滑落，露出一双还带着惺忪睡意的青色眼眸。
    - %YOU%和青云天空并肩坐下，一页页翻看。
    - 女帝—气槽；不死鸟—草上飞；世代王者—圣王光环；悠闲长途泡者—目白光明 …………
    - 「这次的有马真的是明星璀璨啊。」
    - %YOU%和青云天空边看边感叹道。
    - 然后，你们翻到了%SEX%的那一页。。
    - 海报上的%SEX%，眼神锐利，嘴角带着标志性的、游刃有余的浅笑。
    - 上面赫然写着「谋略之星」几个大字，下方则是更详细的注解：「将赛场化为棋盘的战术艺术家，黄金世代的智慧之光」。
    - 青云天空的目光在那行注解上停留了数秒。
    -
    - 自从那场菊花赏的大胜后，青云天空名声大噪，还和神鹰，特别周，草上飞，圣王光环并称黄金世代。
    - 青云天空的粉丝量也自然的水涨船高，粉丝的来信也如雪片般飞向学院，%YOU%的桌上经常堆满了各式信件。
    - 有各种粉丝来表达喜爱和慰问。
    - 以及越来越多的、来自各路「评论家」和「资深马迷」的战术建议与期待分析。
    - 每天，训练部的电话都会接到数不清的采访预约，问题翻来覆去总是那几个：
    - 「青云天空选手，下一场比赛准备了怎样令人惊讶的战术」
    - 「在你看来，其他对手的数据是否早已被你完全解析？」
    - 「是不是对你来说，只要略施小计，赢得胜利就是随随便便？」
    - …………
    - %YOU%的压力也跟着青云天空名声大噪与日俱增。
    - 桌上也堆满了粉丝来信和所谓的「专家建议」。
    - %YOU%每天都需要筛选信息，平衡外界关注与训练节奏
    - 更需要在无数声音中，牢牢锚定%YOU%们最初的方向。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉……」
    - %YOU%时不时就能听见青云天空在那发牢骚。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近，粉丝的期待好像越来越高了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「高到……好像我下一场比赛如果不是以某种『精彩绝伦』的方式赢下来，就会让很多人失望似的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一个个的甚至还在猜我各种各样的计策，像做题一样。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「无论我怎么去跑，总有一批人会跳出来说『我就知道是这样！』」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一点那种『震撼全场』的惊喜感都没有了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这样的比赛，好无聊……」


before_arim_kin_c:
  title: 有马纪念（前）
  lines:
    - fontSize: 1.2rem
      content: 参赛当日，选手准备室——
    - 阳光透过百叶窗，在木地板上切出明暗相间的条纹。
    - 青云天空已经换好了决胜服，正对着镜子调整头上菊花发卡。动作一丝不苟，甚至比菊花赏那天更仔细。
    - 电视里，早间赛事预热节目正以极高的音量播放着：
    - 「……而最大的焦点，无疑是我们的『谋略之星』青云天空！在菊花赏创造了历史性大逃后，%SEX%将如何面对气槽女帝的经验压制、草上飞的精密计算、以及圣王光环王者归来的雪耻斗志？我们有理由相信，%SEX%早已成竹在胸！」
    - 主持人转向嘉宾：「您认为%SEX%今天会采用什么战术？」
    - 嘉宾笑着摊手：「这就像问魔术师下次变什么戏法——但既然是青云天空，那一定是经过严密计算的戏法，所以我猜%SEX%——」
    - 哔……
    - 青云天空关掉了电视。
    - 室内瞬间安静，只能听见空调在轻轻低鸣。
    - %SEX%走到窗边，看着看着那些为%SEX%挥舞的旗帜和标语牌。
    - 有些写着「青酱用智慧闪耀！」，有些画着抽象的棋盘和棋子，还有的干脆写着「下一个奇迹是什么？我们等着！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都在等啊……唉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等我的『谋略』，等我的『计算』，等我又一次『理所当然』的精彩胜利。」
    - 「不要在意他们，做你自己就好。」
    - 青云天空轻轻叹了口气，朝%YOU%说道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「话是这么说啦，唉……不说了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我出发了，训练员……」
    - 走廊墙壁上，%SEX%的巨幅海报在灯光下格外醒目。「谋略之星」四个字闪闪发光。
    - %SEX%经过时，并不在意。


# 获得特质【无形的枷锁】
arim_kin_win_c:
  title: 有马纪念（胜）
  lines:
    - 当青云天空率先冲过终点线，以无可争议的优势赢得胜利时，整个中山竞马场陷入了沸腾的狂欢。
    - 解说嘶吼着
    - content:
        - fontWeight: bold
          content: 解说员
        - 「毫无悬念！谋略之星的完胜！从起跑的大逃到终盘的二次加速，一切尽在掌控！%SEX%再一次向我们展示了何为『智慧的统治力』！」
    - 青云天空缓步走回，脸上带着完美的、属于胜利者的笑容，向四周的看台挥手致意。
    - 粉丝的尖叫几乎要掀翻屋顶，无数摄像头对准%SEX%，捕捉「谋略之星」从容凯旋的每一帧。
    -
    - fontSize: 1.2rem
      content: 休息室内——
    - 门关上的瞬间，外界的喧嚣被隔绝开来。
    - 青云天空直接趴向沙发，脸上的笑容如同退潮般迅速消失。
    - 趴了几分钟后，%SEX%站起身，没有兴奋的蹦跳，没有孩子气的炫耀。
    - %SEX%只是走到椅子边坐下，接过我递过去的水，小口喝着。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「赢了呢。」
    - 声音平淡得像在陈述天气。
    - 「很漂亮的胜利。节奏控制比预想中还要精准。」
    - 青云天空扯了扯嘴角，那笑容有点无力。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是吧。从开局加速的时机，到中段控制差距的心理施压，再到最后直线二次加速的节点……全部，都在计划内。」
    - %SEX%抬起头，眼里没有胜利的光彩，只有一片深不见底的平静，甚至可以说是……空洞。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……我刚才冲线的时候……心里什么感觉都没有。」
    - acc: 1
      content: 「赢了不开心吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯——也不是吧，赢了还是很开心的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是——」
    - 青云天空顿了顿。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是没有菊花赏那种『做到了！』的激动，没有以前算计成功时的窃喜。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有感觉……什么都没有……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就像……就像完成了一道早流程复杂数学题，写下最后一个数字时，只觉得『哦，解完了』。」
    - 青云天空靠向椅背，闭上眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外面那么明明多欢呼，可我心里好安静。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「安静得……有点可怕。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我是不是……哪里不对劲了？」
    - %YOU%看着%SEX%，顿了一下。
    - 「你的平静也许是消耗过大了。但你刚才说的——心里什么都没有——这个，我不太确定该怎么接。」
    - 「先休息吧。不过……等你想聊的时候，我听着。」
    - %YOU%安慰青云天空，并给%SEX%递去毛巾。
    - 青云天空接过毛巾，盖在脸上，轻轻「嗯」了一声。
    - 「我先出去应付一下记者和粉丝，你在这里好好缓一缓。庆功宴……等你觉得可以了再说。」
    - %SEX%点点头，整个人倒躺在椅子上，毛巾下的脸看不清表情。
    - %YOU%轻轻带上门，将外界的喧嚣与%SEX%暂时隔绝。
    -
    - 独自一人的休息室——
    - 毛巾下的呼吸声逐渐平稳。
    - 过了很久，青云天空才把毛巾拉下来，露出有些失神的脸，呆呆的看向天花板。
    - 房间里很安静，只有远处隐约传来为%SEX%而响的欢呼声浪，像潮水般一阵阵拍打着门扉。
    - 青云天空的目光没有焦点，在这一方小间内，思绪飘越飘越远。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （赢了……又赢了……用最『青云天空』的方式。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （大家……都很开心吧？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （我也应该开心的吧？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （可是为什么……）
    - 青云天空脑海里忽然闪过一个很久远的画面。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （是我小时候啊……话说最近有段时间没回老家了呢……）
    -
    - 夏天，老家的缘侧，爷爷摇着蒲扇，%SEX%躺在凉席上，看着天上一朵慢悠悠的云。
    - 青云天空枕着爷爷的腿，爷爷慈祥的摸着%SEX%的头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷——云朵先生都飞的好高，是不是想去哪里就去哪里？」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「哈哈～当然了，小青以后也可以像云朵先生一样飞的高高的哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「欸？！真的吗？」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「当然了～小青啊，你知道你的名字是什么意思吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……是『青色的云』？」
    - 爷爷笑了笑。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「哈哈，还有更深层的意义哦。」
    - 青云天空疑惑的歪了歪头。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「是『青云之志』哦。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「意思是希望小青能像青云一样，志向高远，不断向上，将来能做出一番事业，成为一个了不起的人。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「像云朵先生一样飞的高高的～」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「小青有没有青云之志啊～」
    - …………
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （爷爷现在在干嘛呢……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （当时自己是怎么回答的？不太记得了……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （不过小时候家里人好像很少跟我提到过志向，爸爸妈妈也只是总说『小青健康快乐就好』）
    - 青云天空听着门外那属于「谋略之星」的、山呼海啸般的期待之声，那个遥远的关于「青云之志」的解释，突然无比清晰地撞回%SEX%的脑海。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「青云之志……远大的抱负……」
    - 青云天空喃喃自语道。
    - %SEX%忽然坐直了身体，眼神从迷茫渐渐凝聚成一种冰冷的清明。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「粉丝们那么喜欢我，期待我，为我欢呼；记者们追问我下一次的『谋略』；我被称作『黄金世代』，是『谋略之星』。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷当初给我取这个名字，一定也是希望我……能成为一个配得上这份期待和名声的人吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行！不能再这样随性下去了。既然被赋予了这样的名字，既然承载了这么多期待……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好……！从明天开始，要认真起来！不能再偷懒了，要更努力训练，要制定更远大的目标……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要配得上『青云』这个名字才行！」
    - %SEX%暗暗攥紧了拳头，指节微微发白。
    - 但那股劲儿撑在身体里，反而让%SEX%站得更直了——直得有点僵硬。
    -
    - 晚上的庆功宴，%YOU%看着眼神坚定的青云天空，感到些许陌生。
    - %SEX%知道这很难，很不「青云天空」。
    - 但此刻，那份因胜利而来的虚无感，以及对「辜负期望」的隐约不安，让%SEX%觉得——或许，这才是%SEX%应该走上的「正确」的道路。
    - %YOU%尝试询问青云天空。
    - 得到的回复只有「不用担心，训练员，我只是……想通了些事……」


# 获得特质【无形的枷锁】
arim_kin_lose_c:
  title: 有马纪念（败）
  lines:
    - 通道里弥漫着一种压抑的气氛，青云天空低着头快步走过，身后传来零星的、难以忽视的议论。
    - content:
        - fontWeight: bold
          content: 路人A
        - 「什么『谋略之星』啊……今天完全被草上飞压制了。」
    - content:
        - fontWeight: bold
          content: 路人B
        - 「就是，还以为能有什么新花样，结果就这？」
    - content:
        - fontWeight: bold
          content: 路人C
        - 「喂，小声点……」
    - 更刺耳的声音从另一端传来，几个情绪激动的粉丝正围着我的方向，声音拔得很高。
    - content:
        - fontWeight: bold
          content: 粉丝A
        - 「这训练员到底在安排什么战术？！那种情况明显应该提前变速！」
    - content:
        - fontWeight: bold
          content: 粉丝B
        - 「就是啊！白白浪费了青酱的才能！」
    - content:
        - fontWeight: bold
          content: 粉丝C
        - 「之前赢了几场就飘了吧？能不能专业点！」
    - %YOU%深吸一口气，将那些毫无根据的指责与烦躁一同压下，快步跟上青云天空，走进相对安静的准备室。
    - 门一关，%SEX%立刻靠在了墙上，胸口微微起伏，不是疲惫，而是一种压抑着的什么。
    - %SEX%没有像往常失利后那样立刻开始复盘，只是沉默地站着。
    - %YOU%整理了一下思绪，试图让语气听起来更理性，更像一个「应对了舆论压力后」的训练员该有的样子。
    - 「今天的情况……舆论对我们不太有利。」
    - 「不要怕，我永远在你身前。」
    - 「…………」
    - 「但很多人认为，我们之前的战术风格过于……『冒险』和『个人化』了。」
    - 青云天空抬起眼看向%YOU%，没说话。
    - 「我在想，也许我们需要调整一下思路呢？」
    - 「不是放弃你的特点，而是……稍微收敛一些，更稳妥一些。」
    - 「比如，可以参考气槽前辈那种更稳定、更符合大众预期的跑法框架，至少在关键比赛——」
    - 青云天空瞳孔微微收缩，难以置信的看着%YOU%
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「框架？稳定？」
    - 青云天空直接打断%YOU%，声音不高，却带着冰碴。
    - %SEX%站直身体，眼神里是%YOU%从未见过的锐利抗拒。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你是在说，让我以后都按照别人觉得『对』的方式去跑？你是在建议我，以后都按照一本标准赛%UMA%手册来跑，对吗？」
    - %YOU%尝试耐心解释，但语气里带着被外界压力催生出的焦躁。
    - 「这不是标准答案，这是更成熟的策略！」
    - 「你也看到了，太依赖临场的『奇策』风险有多大！我们需要更系统、更可控的方案来回应大家的期待——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家的期待？」
    - 青云天空重复了一遍，然后冷笑一声，耳朵背了过去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼——训练员你是不是……害怕了？」
    - %YOU%感到一丝焦躁爬上心头，语气不自觉地带上了一点说服的强硬，说话声音越来越高。
    - 「我不是怕，我是要对你的职业生涯负责！」
    - 「任由你完全按性子来，赢了是奇策，输了就是训练员无能、战术儿戏！你知不知道外面现在都在怎么说？！」
    - 话一出口，%YOU%就后悔了。
    - 这不是%YOU%想说的，至少不全是。但连日积累的压力和那些无端指责，让这句话带着火药味冲了出来。
    - 青云天空的瞳孔微微收缩。
    - %SEX%看着我，像在看一个陌生人。那股萦绕在%SEX%周身的抗拒，渐渐凝固成了更深的失望和受伤。
    - 一股懊悔瞬间冲上%YOU%的心头。
    - 「等等，小青，我不是那个意思。」
    - 「我刚才……话说得不对。」
    - 「我道歉……」
    - 青云天空静静地看着%YOU%，没说话，等待下文。
    - 「我的意思是……下周开始的训练，我们或许可以先尝试一下更系统化的方法。」
    - 「就当是……多一种准备，多一个选择。好吗？」
    - 「你放心！我每天都会给你留出足够放松的时间，只是把以前不规律的时间安排整理下。」
    - %YOU%严肃的看着%SEX%，希望%SEX%能理解这背后的混乱和压力，以及%YOU%并非想束缚%SEX%，只是想在一片指责声中，找到一条看似更「安全」的路。
    - 青云天空沉默了几秒，最终，很轻地点了一下头。
    - 没有争吵，没有反驳，却比任何激烈的言语都更清晰地划下了一道界限。
    - 剩下的时间在无声中流逝。
    - 收拾行装，离开赛场，坐上回程的车。
    - 回去的路上，青云天空一直侧头望着窗外流动的夜色，睫毛在偶尔掠过的路灯下投出安静的阴影。
    - %YOU%看不出%SEX%脸上的心情，但垂下的耳朵掩饰不住%SEX%的失落。
    - %YOU%几次想开口，打破这令人窒息的沉默，却发现自己找不到合适的词句。
    - 只有车辆行驶的平稳噪音，填充着这漫长而寂静的归途。
    - 两人之间，第一次，被一种沉重而无言的隔阂所笼罩。


# （有马纪念获胜） 资深年2月/1周回合开始触发
ws_cloud_mot_aw:
  title: 青云之志？（1）
  lines:
    - 清晨的阳光透过窗户，落在桌上一份字迹工整到近乎刻板的训练计划上。
    - 青云天空已经换好了训练服，正对着计划表核对秒表，表情是前所未有的严肃。
    -
    - 过去几周，%SEX%彻底变了个人。
    - 严格遵循着自创的「青云之志训练法」
    - 凌晨五点耐力跑，下午战术分析课精确到秒，甚至晚上还加练核心力量。
    - 笑容少了，闲话没了，连最爱的钓鱼时间都被压缩没了。
    -
    - 看着青云天空疲惫的面容，%YOU%关心道。
    - 「小青，你脸色不太好，昨晚又没睡够？」
    - 「最近的训练量有些大了，要不要今天休息会？」
    - 青云天空快速收起一个哈欠，用力甩了甩头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没事，想要匹配大家的期待，付出这些是应该的。」
    - 说完便去热身。
    - %YOU%看着如此自律的青云天空，满眼的心疼，但最终还是选择的尊重……
    -
    - 训练场上，%SEX%像一台设定好程序的机器。
    - 以往灵动的步伐变得略显僵硬，总是轻松调整的呼吸节奏也时常出现紊乱。
    - 一次常规的弯道练习后，%SEX%撑着膝盖喘气，额发被汗水浸湿。
    - 青云天空自言自语道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行……这个数据还不够……离『青云之志』还差得远……」
    - %YOU%发现青云天空的状态很不对劲，在给%SEX%递水壶时提醒道。
    - 「先休息会。你的状态不太好，这不是你习惯的节奏。」
    - 青云天空接过水壶，强硬的说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不，我以前的习惯太散漫了……得改。」


# 事件「青云之志？（1）」后，去天台触发
sr_cloud_mot_aw:
  title: 青云之志？（2）
  lines:
    - 几天后的傍晚——
    - 青云天空十分意外却像以前一样消失了……
    - %YOU%找到青云天空时，%SEX%正独自坐在空荡的天台最高处，抱着膝盖，望着远处被夕阳染红的云霞发呆。
    - 往常这时候，%SEX%大概率躲在哪睡觉。
    - %YOU%上前坐到%SEX%旁边，像第一次见到%SEX%时，和%SEX%聊了起来。
    - 「在找新的战术灵感？」
    - 青云天空缓缓摇头，声音很轻。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……我最近，有点睡不着。」
    - %SEX%停顿了很久后，继续说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一闭上眼睛，好像就能听到好多声音。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那些——越来越多的期待……越来越多的责任……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我认为我要努力，就像爷爷给我取的名字一样——青云之志」
    - 青云天空望向天空，眼里充满的迷茫。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可我好像……跑得越来越重了。以前像云朵一样，好像能飘起来的感觉……找不到了。」
    - %SEX%转过头，眼神里充满了迷茫，像个迷路的孩子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员——你说，我是不是……理解错了？爷爷说的『青云之志』，难道就是让自己这么累吗？」
    - %YOU%看着疲惫的青云天空满眼心疼。
    - 「或许我们可以换个途径——」
    - 「现在的你或许还不适应这种方式。」
    - 青云天空呆呆的望向天空，许久的沉默过后，%SEX%眼神又变得倔强起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不！训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我早晚要成为这样，我必须更早的适应……我必须要加倍的努力……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……请你相信我好吗，你一直以来都是这样的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「让我保留这份决心吧，就像你一直以来义无反顾的相信我的每一次策略一样……」
    - 话已至此，%YOU%也不好在说什么。
    - %YOU%能做的，只有静静的陪%SEX%看完着一抹夕阳。


# 事件「青云之志？（2）」后，回合结束时触发 消除特质【无形的枷锁】 好感+50 爱慕+2
we_cloud_mot_aw:
  title: 青云之志？（3）
  lines:
    - 天台那晚片刻的宁静并未将自己的怀疑消散。
    - 相反，青云天空像是要用加倍的努力去驱散那份不确定。
    - %SEX%更加严格地执行那份刻板的计划，仿佛只要数据足够漂亮，就能证明「青云之志」的正确路径。
    - 在一天的奔跑时，青云天空肩膀带着不自然的紧绷，呼吸声重而乱，完全不见昔日那种举重若轻的韵律感。
    - 「小青，够了！今天就到这里！」
    - %YOU%察觉不对，大声喝止。
    - 但%SEX%仿佛没听见，或者说，听见了却选择用更快的步伐去回应。就在一个需要急速变向的弯道练习中——
    - fontSize: 1.2rem
      content: 砰！
    - 青云天空身体一僵，左脚踝以一个不自然的角度崴了一下，整个人失去平衡，重重摔倒在草地上。
    - %YOU%的心跳几乎骤停，瞬间冲到%SEX%身边。
    - 青云天空脸色苍白，试图自己撑起来，却疼得倒吸一口凉气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没……没事，只是滑了一下……」
    - 你二话不说，小心地检查了%SEX%的脚踝，确认没有严重变形后，一把将%SEX%背起，冲向医务室。
    -
    - 医务室内——
    - 校医仔细检查后，给出了诊断。
    - content:
        - fontWeight: bold
          content: 校医
        - 「脚踝扭伤，不算严重，静养一周左右就能恢复。但是……」
    - 「但是什么？」
    - %YOU%焦急的询问道
    - content:
        - fontWeight: bold
          content: 校医
        - 「%SEX%的精神过度紧张，有明显的神经衰弱迹象。身体在报警了，孩子。你需要的是彻底的休息和放松，不仅仅是身体上的。」
    - 医生开了些舒缓神经和消炎镇痛的药，最后叮嘱道。
    - content:
        - fontWeight: bold
          content: 校医
        - 「换个环境吧，别待在有训练场的地方。回趟家，或者去个能让你完全不想比赛的地方，睡到自然醒，做些纯粹让你开心的事。」
    -
    - 次日，前往老家的新干线——
    - 车厢内，青云天空的脚踝裹着敷料，倚在窗边。昨日的惊惶和疼痛褪去后，留下的是更深的沉默和一丝无措。
    - %YOU%拿来两杯热饮，把其中一个给青云天空。
    - 「医生的话，听清楚了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……对不起，训练员，又给你添麻烦了。」
    - 青云天空接过，轻轻点头。
    - 「麻烦的不是你受伤，而是看到你把自己逼到受伤。」
    - %YOU%叹了口气，语气缓和下来。
    - 温柔的摸了摸%SEX%的头。
    - 「这不是惩罚，也不是放假。是必要的『修复』。爷爷那里，大概是最好的修复站了。」
    - 听到「爷爷」，青云天空消沉眼睛闪出了光，话匣子意外地打开了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，你知道吗？爷爷家后院有棵老梅树，开花的时候特别香，爷爷还会做梅子酱；训练员，看那条河，爷爷以前总带我在那段河湾钓鱼；家里的院子夏天傍晚蜻蜓会特别多，低低地飞，爷爷说那是要下雨的兆头……」
    - 青云天空絮絮叨叨地说着，语气渐渐轻快，脸上也浮现出许久未见的柔和神色。
    - 那紧绷了一个月的肩线，在关于爷爷的记忆里，不知不觉松缓了下来。
    -
    - 青云天空的老家——
    - 在正午时分，你们来到了青云天空的老家。
    - 是一个传统的日式院落，阳光洒在缘侧。
    - 见到爷爷的第一时间，青云天空就激动的挥手喊道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷——想我了吗！」
    - 爷爷则是一位笑容爽朗、精神矍铄的老人，见到你们，眼睛立刻弯成了月牙。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「哦呀！我们的大明星回来啦！这位就是训练员吧？快请进，茶刚泡好！」
    - 随即目光落在青云天空微跛的脚步上。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「哎呀，小青，你脚这是……」
    - %YOU%立刻解释道
    - 「训练时不小心扭到了，已经看过医生，说静养一周就好，没什么大问题。」
    - 爷爷明显松了口气，笑容重新漾开。
    - - content:
      - fontWeight: bold
        content: 爷爷
      - 「还好还好！快进来快进来，别在门口站着了。」
    - 他热情地帮%YOU%扶着青云天空，眼里满是关切。
    - 简单的寒暄后，你们跟着青云天空的爷爷进屋。
    - 落座后，%YOU%注意到屋子角落的腌菜罐。
    - 「您上次给小青寄的腌黄瓜，%SEX%也给我分享了，非常好吃，小青特别喜欢，吃到最后连罐子都擦干净了」
    - 青云天空脸微微泛红，轻轻的拉拉%YOU%的衣角。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「哈哈哈！喜欢吃就好！今年做的更入味，回去的时候多带几罐！」
    - 爷爷爽朗的笑道。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「正好，屋里我刚泡了茶，还有新做的柏饼。进来坐着慢慢说，脚要垫高些才恢复得快。」
    - 热茶氤氲，柏饼的香气混着院子里草木的味道。
    - 茶续到第二杯，话题从初识青云天空的趣事，自然地聊到了赛场。
    - 「第一次见%SEX%时，还以为是个会偷懒的料。没想到，%SEX%比谁都懂得观察时机。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「这孩子从小就这样。看着心不在焉，其实溪里哪块石头下藏着鱼，%SEX%比谁都清楚。」
    - 谈及菊花赏那场惊为天人的大逃，爷爷听得格外专注。
    - 说到最近的有马纪念，%YOU%顿了顿。
    - 「%SEX%赢得更聪明了，战术无可挑剔。但在比赛后……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷……」
    - 青云天空忽然轻声打断你们的闲谈。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的名字里『青云』，是取自『青云之志』，对吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是您，还有爸爸妈妈……好像从来没拿这四个字要求过我。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「从小到大，除了基本的教育，家里很少要求我达到某些额外目标。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「妈妈总说『小青健康快乐就好』，爸爸也只会摸着我的头问『今天玩得开心吗？」
    - 青云天空抬起眼，眸子里映着渐暗的天光，有种孩子般的困惑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果名字里承载着您和爸爸妈妈的期待……那为什么不告诉我呢？」
    - 爷爷放下茶杯，望着孙女，眼里漾着回忆的光，慢慢说道。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「你小时候啊，我也问过你类似的问题。你还记得你怎么说的吗？」
    - 青云天空摇摇头。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「你当时啊，鼓着脸颊，头摇得像拨浪鼓，『我才不要！那些远大的志向太复杂了！我要跑，就要跑得自由！』」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「然后你就挣脱我的手，跑到院子里，绕着那棵老梅树一圈又一圈地跑，边跑边喊：『像风一样——！像云一样——！』」
    - 爷爷收回目光，重新看向眼前已经长大、却陷入迷茫的孙女，声音柔和下来。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「你看，答案你很久以前就给自己了。不是要成为什么，而是要怎么跑。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「现在，你跑得比风还快，比云还高了。可最重要的东西，有没有不小心落在后面呢？」
    - 暮色渐沉，最后一缕金光掠过青云天空骤然怔住的脸庞。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「脚受伤了，就好好养。心里若是有了负担，更要学会放下。记住啊，天空。家永远是你放松歇脚的地方。」
    - 爷爷轻轻摸了摸青云天空的头。
    - 晚餐是热腾腾的鲭鱼煮和家常菜。
    - 爷爷谈笑风生，说着田间趣事，绝口不提比赛。
    - 青云天空最初有些沉默，后来渐渐被爷爷的话带出了笑意，回到了平时自由自在的样子。
    -
    - 晨光熹微，%YOU%迷迷糊糊地从睡梦中醒来。
    - 意识尚未完全清醒，感官却先一步捕捉到异常——
    - 怀里有温暖的重量，鼻尖萦绕着熟悉的洗发水清香，还有均匀轻柔的呼吸声拂过颈侧。
    - %YOU%猛地睁开眼。
    - 青云天空正蜷缩在%YOU%怀里，青色的长发铺散在枕头上，几缕发丝调皮地蹭着%YOU%的下巴。
    - %SEX%睡得很熟，脸颊压着我的手臂，平日里那副慵懒狡黠的神情被全然放松的睡颜取代。
    - 微微噘着嘴，像是在做什么好梦。
    - （这是什么情况？！）
    - 由于突发状况，%YOU%本能的身体一颤，但身体被青云天空紧紧抱着，动弹不得。
    - 这一下剧烈的动作还是惊动了%SEX%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……」
    - 青云天空含糊地哼了一声，伸了个懒腰，慢悠悠地睁开眼。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早啊……训练员……」
    - 声音带着浓重的睡意，沙哑又柔软。
    - 「青云天空？」
    - 「你怎么……在这里？」
    - 青云天空揉着眼睛，脸上浮现出一股淘气的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为昨晚小青睡不着嘛～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一个人躺着好无聊，数羊数到第一千零一只时突然想到——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——每次和训练员一起睡的话，好像每次都能很快睡着呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我就溜过来啦～」
    - 青云天空趴在你胸口，说得轻描淡写，仿佛这只是再自然不过的事。
    - %YOU%看着%SEX%理直气壮的小表情，只能无奈的笑笑，脑袋一松枕回枕头上。
    - 「你也不怕你爷爷看到……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没事啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷很喜欢你呢。」
    - 「嗯……不行！我要找补回来！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哈？」
    - 「这次被你偷偷当抱枕用，我该怎么找补呢？」
    - 「有了！下次午休小青给我膝枕吧，感觉很不错呢～」
    - 话音刚落，青云天空脸上游刃有余的笑容瞬间冻结。
    - 红晕像滴入清水的墨汁，迅速占领了整个脸颊。
    - %SEX%睁大眼睛，嘴唇微张，似乎想反驳什么，却只发出一个短促的气音。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「膝……膝枕？！！！训练员这个大色狼……」
    - 「欸——我昨天可是被邪恶的%UMA%夜袭了都，这么看色狼更像是——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那，那是因为昨天睡不着嘛！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且以前在医务室午休的时候，训练员在旁边……确实睡得比较……」
    - 青云天空小声嘟囔着。
    - %YOU%看着青云天空害羞的样子，摸摸%SEX%的头。
    - 「好啦好啦——」
    - 「下次再睡不着，记得提前申请。突然袭击对训练员的心脏不太好。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「知、知道了啦！」
    - 青云天空慌张的坐起，红红的脸往旁边一扭，用极小的声音嘟囔道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「膝枕也不是不行……」
    - 「嗯？你刚刚说什么，我没听太清……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呃——我刚刚说——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷的早饭！对！该吃早饭了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷的早饭！该吃早饭了！」
    - 青云天空慌慌张张地跳下床，连鞋子都穿反了。
    - 说完几乎是逃似的冲出了房间，关门时还差点被自己的脚绊倒。
    - 「哎！慢点！小心扭伤的脚！」
    - （话说不应该是午饭吗……）
    - %YOU%坐在床边，还能感觉到%SEX%残留的体温。
    - 低头看了看自己身上被%SEX%压出褶皱的睡衣，又想起%SEX%刚才那副从理直气壮到全面溃败的有趣模样，最终只是笑着叹了口气。
    -
    - 待到中午，在道别了爷爷后，你们坐上了归途的车。
    - 这一路，青云天空滔滔不绝的和%YOU%讲%SEX%小时候的事。
    - 傍晚时刻，你们回到了特雷森。
    - 刚踏上熟悉的小径，青云天空就轻轻拽住了%YOU%的袖子，撒娇道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～你看我这脚，要修养一周呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果没有人陪的话，小青可是会很孤独、很寂寞的哦？」
    - %YOU%看着%SEX%那眼底重新漾起的、轻松灵动的光，那微微扬起的嘴角。
    - 还有这久违的、带着点撒娇意味的语调——仿佛过去一个月的紧绷和迷茫，都被老家的风和爷爷的话轻轻吹散了。
    - %YOU%忍俊不禁，故意板起脸，眼里却满是藏不住的温和与纵容。
    - 「哦？那请问这位『很孤独、很寂寞』的小姐，需要我为您做什么呢？」
    - 青云天空眨了眨眼，像是早就想好了答案，声音里带着得逞般的轻快。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个嘛……训练员明天下午，有没有空陪小青去个『特别安静、特别适合思考人生』的地方呀？」
    - 「直接点——去哪睡懒觉。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「叮铃叮铃～恭喜你答对了！送你一次小青的秘密睡觉地点呦～喵哈哈～」
    - 一阵晚风吹过，%YOU%看着%SEX%眼底那片恢复晴朗的的天空，笑着点了点头。
    - 「以后还要不要追求到『青云之志』了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个嘛……顺其自然吧～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「反正我以后可不会那种拼死拼活的练了……」
    - 「是吗？这么一说我还有点怀念那个奋发图强的小青了……要不要隔一段时间来一次？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抗议！这是虐待%UMA%！」
    - 「哈哈哈…………」
    - ………
    - ……
    - …
    -
    - 远处，最后一抹霞光温柔地沉入天际线。
    - 来自家的风轻轻吹过，将两个被压住的自由灵魂包裹，带着他们飞向更加广阔的天空……


# （有马纪念落败） 资深年2月/2周，回合开始时触发 消除特质【无形的枷锁】好感+50 爱慕+5
ws_lost_al:
  title: 迷失的掌舵人
  lines:
    - 车厢内，气氛如同窗外的阴天般沉闷。
    - 青云天空望着飞速倒退的田野，手指无意识地划着窗玻璃上的薄雾。
    - %YOU%坐在对面，几次想开口，话到嘴边又咽了回去。
    - 就像一个月前一样，空气中弥漫着冰冷的气氛。
    -
    - 距离有马纪念那场争吵已经过去一个月。
    - 在那之后，青云天空的训练计划变得精确而刻板——几点起床、几点训练、练什么内容、休息几分钟，全部白纸黑字写在计划表上。
    - 总时长确实和从前一样，甚至休息时间也留有充分余裕，但那种被框住的感觉，让青云天空每次训练都像在完成一套规定动作。
    - %SEX%没再公开抗议，只是眼神里的光一点点暗了下去。
    - 直到三天前，%SEX%把自己关在房间写了一下午信，寄给了爷爷。
    -
    - 昨天，爷爷的电话直接打到了%YOU%这里，电话那头声音爽朗的说道。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「您好，是青云天空的训练员先生吧，最近有空吗？带着小青回来住一晚吧，院子里的梅树熟了，我这把老骨头还得靠%SEX%帮忙呢。」
    - 面对爷爷的盛情邀请，%YOU%和青云天空申请了一周假期，踏上了返乡的列车。
    -
    - 下午5点，到了青云天空的老家。
    - 爷爷早已等在门口，见到你们便笑着招手。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「来了啊，路上辛苦。快进来，刚烤了年糕。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「正好，也到晚饭时间了，咱先开饭，啥事吃完再说。」
    - 青云天空则在旁边跟只小猫一样，话很少，只是静静的看着爷爷和训练员。
    - 夜色已深，庭院里只余一盏石灯笼晕开暖光。
    - 晚餐的温馨气氛尚未散去，爷爷将你单独叫到缘侧，沏了一壶茶。
    - 茶香在缘侧弥漫开。简单的寒暄后，爷爷为你添了茶，目光温和地落在你身上。
    - 你接过茶杯，指尖感受到温热的瓷壁。
    - 向爷爷道谢后，他开始说道。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「训练员先生，小青那孩子……给您添了不少麻烦吧？」
    - 「不不不，天空很优秀……是我的问题。」
    - 「外界的声音让我忘了最初为什么选择%SEX%。」
    - 爷爷轻轻摇摇头，望向夜色中的庭院。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「不，是你太重视%YOURSEX%了。重视到……害怕%YOURSEX%因为『不够标准』而受到外界的压力，从而想尽力的——保护%SEX%。」
    - 爷爷的话让%YOU%微微一怔，好像心里的迷雾渐渐散去。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「天空这孩子啊，从来不是标准答案能框住的。%SEX%三岁那年……」
    - 爷爷讲述起青云天空的很多往事
    - 讲起青云天空小时候如何因为好奇雨季的蜗牛而逃掉文化课；
    - 如何因为不肯戴护具被父亲训斥后，闷头研究出更灵活的奔跑姿势来证明不戴也能安全；
    - 如何因为想睡懒觉，便偷偷不去幼儿园跑去树洞睡觉…………
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「%SEX%母亲常说%SEX%像山间的风，你越想抓住，%SEX%溜得越快。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「但如果你成为%SEX%愿意绕过的山脉，%SEX%反而会为你停留。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「训练员先生，你不是%SEX%的缰绳。你是%SEX%选择相信的人——这就够了。」
    - %YOU%握紧茶杯，长久以来紧绷的某处悄然松动。
    - 「……我明白了。谢谢您。」
    - 爷爷笑着说道
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「明天早晨，陪%SEX%去溪边走走吧。那孩子思考重要事情时，总是需要水声。」
    -
    - 当夜，客房中——
    - 纸门被轻轻拉开。青云天空抱着枕头站在门外。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……睡不着。」
    - acc: 1
      content: 「嗯……来吧……」
    - %YOU%语气温柔的招呼青云天空进来。
    - %SEX%在你铺好的被褥旁屈膝坐下，双手抱着双腿，沉默许久。
    - 月光透过窗格，在%SEX%侧脸投下淡影。
    - 许久之后，青云天空开口，声音很轻，几乎融进夜色里。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - 「嗯。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我讨厌每天规定好的训练……」
    - 「我明白……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我讨厌每天固定的休息时间……」
    - 「我明白……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我更讨厌的是，你开始像其他人一样看我。」
    - 月光斜斜照进房间，落在%SEX%低垂的侧脸上。
    - %YOU%看见%SEX%咬着下唇，眼眶迅速泛红，一层薄薄的水光在月光下清晰可见。
    - 青云天空声音哽咽起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「他们说我该更稳重、该按『正确』的方式跑……我都可以不在乎。可是连你也……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「连你也用那种眼神看我……好像我只是一件……需要调整到『完美』的作品。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那我之前赢的那些……都算什么啊……」
    - 泪水顺着脸颊滑落，滴在怀中的枕头上，晕开深色的小点。
    - %SEX%没有哭出声，只是肩膀微微发抖，像只被雨淋湿却倔强不躲的小猫。
    - %YOU%张开双手，把%SEX%轻轻拉进怀里。
    - 青云天空在%YOU%怀里整个人松懈下来，额头抵在%YOU%的肩头，泪水很快浸湿了衣料。%YOU%没有说话，只是环住%SEX%颤抖的肩膀，手掌一下下轻抚%SEX%的后背。
    - 「是我错了。」
    - 青云天空摇摇头，脸埋在你肩上，闷闷的声音带着湿意。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……我也有错……我也在赌气……」
    - 「我从来没觉得你不够好……」
    - 「我只是害怕——」
    - 「我害怕你被那些言论伤害，害怕你因为『自由』而失去支持……结果……我自己先成了束缚你的那个人」
    - 「是我把外界的声音，当成了训练你的准则……对不起。」
    - 青云天空哭得更厉害了，手指紧紧攥住%YOU%背后的衣服，布料被揪成一团。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个框……是我自己先钻进去的……我觉得我必须证明自由地跑也能赢，反而把它变成了一个必须完成的任务……连你的计划表都成了我的压力……」
    - %YOU%等%SEX%哭得缓了些，用拇指擦掉%SEX%脸上的泪，看着%SEX%的眼睛
    - 「听着，天空。」
    - 「我签约时看中的，就是那个不按常理出牌、自由到让我头疼的青云天空。」
    - 「外界的压力，无论怎么样，我都会站在你身前」
    - 「你不需要『收敛』，不需要符合任何人的『正确』。你只需要做你自己的、问我的、独一无二的赛%UMA%。」
    - 青云天空睁着湿漉漉的眼睛望着你，小声说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……真的？就算我下次比赛又乱来？」
    - 「真的……但有个条件。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什……什么……」
    - 青云天空警惕地往后缩了缩。
    - 「下次再有什么想法，不管是想用多离谱的战术，还是觉得我给你的框架太难受——」
    - %YOU%屈指轻轻弹了下%SEX%的额头。
    - 「直接告诉我，别憋着，也别光写信给爷爷告状。」
    - 「我是你的训练员，又不是什么外人。」
    - 青云天空愣了两秒，随即低下头，轻轻哼了一声，脸上还挂着泪痕，但来时的阴霾早已消散。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……知道啦。啰嗦。」
    - %SEX%抱着枕头在你旁边躺下，很快就传来均匀的呼吸声。
    - 月光移过%SEX%的睡颜，你看见%SEX%唇角微微扬起，像是卸下了什么重担。
    -
    - 次日清晨，天刚蒙蒙亮
    - 青云天空难得地早早爬了起来。%SEX%轻手轻脚拉开纸门，却看见爷爷已经在院子里了。
    - 爷爷正仔细地修剪着一株松树的盆栽。晨雾尚未散尽，他的动作缓慢而专注。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「醒啦？昨晚……咋样？」
    - 青云天空走到缘侧边坐下，晃了晃悬空的小腿。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……说开了。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「你这小丫头啊，从小到大都一个样。有什么委屈都先自己憋着，憋不住了，再偷偷摸摸写跟给我打小报告」
    - 爷爷放下剪子，转过身，目光温和又了然。
    - 青云天空脸微微一红，拖长声音撒娇道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「诶呀——爷爷最——好——了——」
    - 爷爷笑着摇摇头，在旁边的木凳上坐下，用毛巾擦了擦手。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「从小就这样，懒懒散散没个正形。不过……」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「小青啊，你知道你名字里『青云』两个字，是什么意思吗？」
    - 青云天空愣了一下，随即诚实地摇摇头。爷爷缓缓说道。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「是『青云之志』」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「原本的寓意，是希望人有高远的志向，远大的抱负。」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「你小时候，我也这么问过你。还问你有没有青云之志呀？」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「你当时啊，鼓着脸颊，头摇得像拨浪鼓——『我才不要！那些远大的志向太复杂了！我要跑，就要跑得自由！」
    - 爷爷说完，自己先轻声笑了起来，眼角的皱纹堆叠着温暖的回忆。
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「所以啊，从那时候起，无论是我，还是你爸爸妈妈，都没再拿『远大抱负』要求过你。对我们来说——」
    - content:
        - fontWeight: bold
          content: 爷爷
        - 「你能按照自己喜欢的方式，健康、快乐地长大，就是我们最大的愿望。」
    - 晨光终于穿过雾气，斜斜地照进庭院，在青石板上投下斑驳的光影。
    - 青云天空静静地坐在那里，看着爷爷被晨光照亮的侧脸。
    - %SEX%没有说话，只是那双总是带着些许慵懒或狡黠的眼睛里，此刻盛满了怔然的、缓缓流动的思绪。
    - 风轻轻吹过，院子里的树叶沙沙作响。
    - 青云天空低下头，看着自己并拢的脚尖，许久才轻极轻地「嗯」了一声。
    -
    - 午前的阳光明晃晃地透过纸窗，将榻榻米晒得暖融融的。意识回笼的瞬间，%YOU%察觉到一道安静的目光在盯着%YOU%。
    - 睁开眼，就看见青云天空正蹲坐在%YOU%铺位旁。
    - %SEX%双手托着腮，胳膊肘支在膝盖上，就这么歪着头，一眨不眨地看着%YOU%。
    - 见%YOU%醒来，青云天空声音拉得长长的，带着十足的戏谑喊道
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呀～训练员终于醒啦？太阳晒屁股喽～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「睡得可真沉呢。我都听完爷爷修剪完整个院子的盆栽，喂了猫，还去后山散了趟步回来了哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉～某人昨天抱着人家，说那么帅气的话，什么『你不需要符合任何人的期待』、『做你自己就好』，感动得人差点又要哭出来……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——结果自己倒好，一觉睡到日上三竿！按照我爷爷的话说就是『只许训练员睡到自然醒，不许%UMA%打个盹』」
    - %YOU%揉了揉眉心，问道
    - 「……几点了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「十一点了，爷爷的午饭都要做好了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员睡懒觉的样子，我可都拍照留念了哦？以后要是再给我定那种死板的计划表，我就——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——把照片印出来贴训练场门口！」
    - %SEX%朝你做了个鬼脸，随即「噗嗤」一声笑出来。
    - 那笑容毫无阴霾，灿烂得耀眼，昨天的一切沉重仿佛真的被一场酣睡和满室的阳光蒸发得无影无踪。
    -
    - 在吃过简单的却丰盛的午餐后，爷爷将你们送到车站。
    - 他往青云天空怀里塞满点心，又拍了拍你的肩膀，什么都没多说，只是那双慈祥的眼睛里写满了「交给你了」的信任。
    - 回到了特雷森学院，傍晚的风带着青草和跑道的气息拂面而来。
    - 青云天空跳下列车，深深吸了一口气，伸了个大大的懒腰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「回来啦——！」
    - %SEX%转过身，背着手，倒退着走在前面，笑眯眯的看着你。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～明天，我想去河边『训练』！」
    - 「钓鱼？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「噗噗！很可惜，错啦！是『观察流体力学与自然环境对生物节奏的潜在影响』」
    - 「说人话。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是去钓鱼嘛！不过这次，我会好好观察的，说不定能悟出新的战术哦～」
    - %YOU%摸摸%SEX%的脑袋，宠溺的点了点头。
    - 「我也去，没想到先被压力压垮的是我，看来我也得向你学学那没心没肺的生活方式了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「噗噗——好感度减一喽～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么叫没心没肺，我那叫乐天派！」
    - 青云天空鼓起腮帮不断用手指戳%YOU%
    - 两人欢快的交谈不断，曾经的压力对他们来说轻如鸿毛。
    - 昨日的泪水与争执，仿佛真的只是一场短暂的雨。
    - 雨过天晴，为云领航的风，又找回了自己的节奏……


before_nikk_sho:
  title: 日经赏（前）
  lines:
    - 日经赏当天，赛场上空的云层压得很低。
    - 观众席上照例坐满了人，看台上方的电子屏滚动播放着赛前预测，解说员正在分析各选手的近期状态。
    - 休息室里，青云天空坐在角落的折叠椅上，翘着腿，轻松自在的翻着杂志。
    - 门被推开，%YOU%走进来。
    - 「小青，该准备了，状态怎么样？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外面很吵呢……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过无所谓啦～」
    - %SEX%把杂志合上，丢到旁边的椅子上，站起来伸了个懒腰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「反正他们喜欢的也不是我，喜欢的是『赢』这个字而已。」
    - 「也别太极端了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没关系的啦～走了～」


nikk_sho_win:
  title: 日经赏（胜）
  lines:
    - 冲线。
    - 青云天空——！第一名——！
    - 解说员激动的喊着，看台上所有的掌声、欢呼、尖叫混在一起。
    - 青云天空减速，慢慢停下来，%SEX%抬起头。
    - 看台上，印着%SEX%头像的应援旗在风中翻卷，有人举着牌子，上面写着「谋略之星」。有人在高喊%SEX%的名字，声音嘶哑但满含热忱。
    - 镜头从%SEX%面前扫过时，%SEX%下意识地眯了眯眼，想避开那道光，。
    - 但下一秒，%SEX%的视线停住了。
    - 在观众席的前排，一个抱着青云天空玩偶的小%UMA%正在拼命跳着。
    - 小%UMA%的个子不高，站在座位上才勉强露出半个身子。%SEX%怀里紧紧抱着那个玩偶，另一只手拼命挥舞着，嘴里喊着什么。
    - 那声音混杂在数万人同时发出的喧嚣里，微弱得像一滴水落入海中，但青云天空的耳朵却精准地捕捉到它——那么干净、那么直接、那么单纯。
    - 不带任何附加条件的喜欢，不是因为赢了才喊，不是因为周围的人在喊所以才跟着喊。
    - %SEX%只是喜欢自己，仅此而已。
    - 青云天空热情的挥着手，也回应着这份喜欢。
    - 休息室内，青云天空趴在桌子上，若有所思的和%YOU%说。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也许……我的自由，不应该拒绝所有的声音。」
    - 「有新的感悟了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……那个孩子，%SEX%什么也没想，就是喜欢我跑的样子，那种声音……不吵。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我应该怎么办呢，是努力回应这份期待还是我行我素？」
    - 看到青云天空苦恼的样子，%YOU%轻轻摸了摸%SEX%的头。
    - 「无论何时，你都在回应我的期待哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以啊，训练员，我应该怎么办呢，是努力回应这份期待还是继续我行我素？」
    - 「我的回答是——无」
    - 「如今路都在你的脚下，这个答案，只能有你自己去找。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉……顺其自然吧……」


nikk_sho_lose:
  title: 日经赏（败）
  lines:
    - 青云天空——第三名——
    - 青云天空减速，慢慢停下来，%SEX%抬起头。
    - 看台上，那熟悉的抱怨声又响了起来，青云天空选择全部无视，以此表达自己的自由，不需要外人指使。
    - 但下一秒，%SEX%的视线停住了。
    - 在观众席的前排，一个抱着青云天空玩偶的小%UMA%正在拼命跳着。
    - 小%UMA%的个子不高，站在座位上才勉强露出半个身子。%SEX%怀里紧紧抱着那个玩偶，另一只手拼命挥舞着，嘴里喊着什么。
    - 那声音混杂在数万人同时发出的喧嚣里，微弱得像一滴水落入海中，但青云天空的耳朵却精准地捕捉到它——那么干净、那么直接、那么单纯。
    - 不带任何附加条件的喜欢，不是因为赢了才喊，不是因为周围的人在喊所以才跟着喊。
    - %SEX%只是喜欢自己，为自己加油，仅此而已。
    - 青云天空看着小%UMA%纯真的眼神，默默回到了休息室。
    - 休息室内，青云天空趴在桌子上，若有所思的和%YOU%说。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「也许……我的自由，不应该拒绝所有的声音。」
    - 「有新的感悟了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……那个孩子，%SEX%什么也没想，就是喜欢我跑的样子，那种声音……不吵。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我应该怎么办呢，是努力回应这份期待还是我行我素？」
    - 看到青云天空苦恼的样子，%YOU%轻轻摸了摸%SEX%的头。
    - 「无论何时，你都在回应我的期待哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以啊，训练员，我应该怎么办呢，是努力回应这份期待还是继续我行我素？」
    - 「我的回答是——无」
    - 「如今路都在你的脚下，这个答案，只能有你自己去找。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……算了……先顺其自然吧……」


before_tenn_spr:
  title: 天皇赏春（前）
  lines:
    - 家的温暖将%YOU%和青云天空与外界的压力隔开。
    - 一切又像回到了从前——
    - 青云天空会向%YOU%的撒娇偷懒，插科打诨……
    - 你会悄悄将%SEX%拉回正轨，偶尔也会融入其中……
    - 在偷懒时，%YOU%发现青云天空有时会呆呆的望向远方。
    - 好像在思考当初的那个问题——青云之志。
    - 当%YOU%问起%SEX%时，%SEX%总会一脸无所谓的回应「无所谓啦～走一步看一步～桥到船头自然直～」
    - 日子一天天过去，时间也来到了下一场大赛。
    -
    - 春日午后的阳光将草坪晒得蓬松温暖。
    - 大赛即将开始，各个选手都在出发点做着准备工作。
    - 青云天空独自站在稍远些的草坪边缘，像只慵懒的猫一样拉伸着身体。
    - %SEX%慢悠悠地转动脚踝，舒展腰背，目光却有些飘忽，并未聚焦在近处的对手或赛道上，只是远远的看向天边，突然又想起了当初的那个问题。
    - 就在这时，一声格外清晰、温柔的呼唤，越过嘈杂的声浪，从观众台的方向传来
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「天空同学——！」
    - 青云天空的耳朵瞬间立起，转向声音的来处。
    - 循声望去，在靠近前排的观众席护栏边，看到了那个熟悉的身影。
    - 西野花正微微探出身，双手拢在嘴边，紫色的短发在春风中轻轻飘动。
    - 两人的目光穿过人群与距离，在空中交汇。
    - 西野花没有喊出什么激昂的助威词，只是将双手在胸前合拢，比了一个简单的手势——代表「加油」和「祝福」的手势。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「要加油哦！自由自在的跑吧！」
    - 像一阵最轻柔的风，吹散了青云天空了心底最后一丝残留的薄雾。
    - 青云天空怔怔地看着那个笑容，看着那熟悉的，总是能让%SEX%感到平静的身影。
    - 西野花那句「内心跟青天一样明亮广阔，性格像云朵一样悠闲安适……只要在天空身旁就很平静」的评价。
    - 此刻带着温度，回到青云天空自己身上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （爷爷……我好像找到了……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （训练员，西野花，还有大家……我想明白了……）
    - 瞬间的顿悟像一颗投入静湖的石子，漾开圈圈涟漪。
    - 迷茫、挣扎、试图改变自己的笨拙……那些沉甸甸的东西，在这温柔注视下，忽然变得很轻，很淡。
    - 青云天空眨了眨眼，一直有些飘忽的目光，瞬间聚焦，变得无比清亮。
    - %SEX%猛地转过头，不再看天际的流云，而是将视线投向选手通道出口——%SEX%知道，训练员一定在那里。
    - 几乎没有犹豫，青云天空迈开脚步，朝着通道口小跑而去，带着一种豁然开朗的急切。
    - 在通道口的阴影与赛场阳光的交界处，%SEX%看到了%YOU%的身影。
    - 你以为青云天空又害怕入闸，刚想开口安慰。
    - 青云天空扑过来抓住%YOU%的胳膊，%SEX%语速很快，带着压抑不住的兴奋。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我看到了！小花在那边！%SEX%在为我加油！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%跟我说……不对，%SEX%让我想明白了……」
    - 青云天空松开手，退后一步，双手叉腰，脸上绽放出一个无比灿烂的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总之！这场比赛——！我会证明的！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「青云之志！用『青云天空的方式』证明给你看，给小花看！」
    - 广播再次响起，决赛召集的提示音回荡在赛场。
    - %SEX%不再多说，只是朝你用力一点头，随即转身，步伐坚定地朝着起跑线跑去。
    - 那背影，不再有丝毫迷茫的飘忽，
    - 它松只有弛和轻快，带着一种终于找到重心的从容，就像一朵认准了风向的云，悠然却无可阻挡地飘向属于它的天空。
    - %YOU%和看台上的西野花，隔着遥远的距离，目光不约而同地追随着那个身影。


tenn_spr_end:
  title: 天皇赏春（后）
  lines:
    - 冲过终点线后，青云天空没有像往常那样惯性减速后便走向休息区。
    - %SEX%径直朝着选手通道出口跑去，
    - 脚步甚至比比赛时更急促，马尾在脑后飞扬，脸上是毫不掩饰的、几乎要满溢出来的兴奋。
    - %SEX%一眼就在通道口看到了%YOU%和西野花。西野花已经从观众席下来，正和你站在一起。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！小花！」
    - %SEX%几乎是扑到你们面前的，胸膛还在因为比赛和此刻的激动而起伏。
    - 刘海被汗水浸湿贴在额角，但那双眼睛亮得惊人，仿佛有星辰在里面燃烧。
    - 气息还没喘匀，话语却已经迫不及待地涌出。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我……我跑的时候，突然全明白了！就像……就像一道光『唰』地照进来！」
    - %SEX%抓住%YOU%的胳膊，又转头看向西野花，急切地需要他们理解这份汹涌的感悟。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我的『青云之志』——它根本不是什么要飞到最高、变成最了不起的那片云！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「它是……就算我是最懒散、最慢悠悠的那朵云，我也能按照自己的节奏，飘到我想去的地方。」
    - 青云天空松开手，比划着，试图描绘脑海中那自由的图景。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我以前跑，是想吓大家一跳，让他人看：『啊？青云天空这么懒散的赛%UMA%也能赢！？』」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「后来我以为我是想自由自在，不想被任何东西绑住。但现在我懂了——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自由不是什么都不管，而是我可以自己选择，我要为什么而跑，我要承担什么。」
    - %SEX%顿了顿，眼神灼热切坚定。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我可以选择为那些期待我『必须怎样？应该用什么计策？』的眼光去跑，但我觉得那是枷锁。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但我也可以选择——为证明『另一种可能』去跑。为所有相信我，却从不要求我必须成为什么样子的人去跑！」
    - %SEX%后退一步，展开双臂，仿佛要拥抱整个赛场，拥抱所有带动%SEX%这片「云」的风。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我想让你们看到——训练员，小花，爷爷，还有那些那些千千万万真心祝福我的粉丝们——你们的信任没有错付！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我青云天空的自由，不是轻飘飘的、不负责任的——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「它能承载你们的祝福！你们给我的，从来不是『必须赢』的锁链，而是希望我能自由自在地跑的祝福！」」
    - 青云天空的声音有些颤抖，不是因为疲惫，而是因为喷薄而出的情感。
    - 握紧拳头，眼中燃起深青色的火焰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以这场比赛我向所有人证明了！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「属于我青云天空的『青云之志』究竟是什么样子！不是被定义的样子，而是我自己选择、自己承担、自己闪耀的样子！」
    - 看着眉飞色舞的青云天空，%YOU%和西野花不约而同的相视一笑。
    - 西野花走上前，从背后拿出了一个由黄白雏菊编织成的花环，戴在了青云天空头上。
    - 黄白色的小雏菊在%SEX%深色的发间格外醒目，西野花声音轻柔的说道
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「天空，你刚才说话的样子……比任何一次冲过终点线时，都要耀眼。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「恭喜你——」
    - %YOU%满眼都是毫无保留的信任与骄傲。
    - 「两年前，我签下你的时候，看中的不是你以后能成为什么。」
    - 「我当初的想法只是想带你看看更远的天空。」
    - 「而你——不仅看到了我想带给你的，你也带给了我从未见识过的景色。」
    - 「你早就拥有自己的天空了。」
    - %YOU%宠溺的摸摸青云天空的头，青云天空脸微微一红，嘿嘿的傻笑着。
    - 「而我，还有西野花，还有爷爷……我们都会默默陪在你边。」
    - 「陪你自由自在的钓鱼，陪你自由自在的偷懒，陪着你自由自在……」
    - 通道外的喧嚣隐约传来，但这一刻，此地却异常宁静。
    - 有春风，雏菊的淡香，和三个人之间无需言明的方向。


before_sapp_kin_s:
  title: 札幌纪念（前）
  lines:
    - 札幌纪念，赛前一个月前——
    - 青云天空正靠着树干翻看秋季赛程表，指尖在天皇赏秋的日期上点了点。
    - 忽然，%SEX%像是想起什么，迅速往前翻了翻。
    - 青云天空眼睛一亮，抬起头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，下个月……是不是有场G2重赏，札幌纪念？」
    - 「嗯，在八月下旬。怎么，有兴趣？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那可是在我老家比的赛。爷爷念叨了好几次，说还没在现场看过我跑重赏呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且，在天皇赏秋之前……我想用一场比赛热热身，顺便……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……给秋天的大目标，做个小小的预告。」
    - 青云天空眼神里透露出一丝狡黠。
    -
    - 札幌纪念，赛前两周——
    - 训练之余，青云天空翻看着体育报纸。
    - 头条赫然是《主场优势！札幌纪念前瞻：青云天空的领跑艺术将如何主宰北海道的天空？》
    - 文章里详细分析了%SEX%过往的比赛数据，尤其强调了%SEX%在中长距离赛事中「通过独特节奏领跑掌控比赛」的极高胜率
    - 并预测在这次比赛，领跑几乎是%SEX%最明智的选择。
    - 青云天空放下报纸，喃喃自语道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大家都这么想啊……好像我已经被『设定』好了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼哼～那这回，就让他们见识下我的青云之志。」
    - 「看来，你有好的想法了？说来听听——」
    -
    - 几天后，在战术会议（更像是%SEX%吃着点心随口聊天），%SEX%向你提起了这个想法。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，关于札幌纪念……媒体好像都帮我决定好战术了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你说，如果我偏不按他们写的剧本来呢？」
    - %YOU%放下手里的资料。
    - 「比如？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「比如……后追？」
    - 青云天空嘴角扬起一个狡黠的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在最开始，就稳稳地留在后方。不争不抢，就像平时在河边发呆那样，看着前面的人跑。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等到他们因为争夺位置开始消耗，等到节奏出现第一道裂缝……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「再从那道缝隙里，用他们最意想不到的速度和路线，超过去。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要让所有人知道，青云天空的『青云之志』，可不在于怎么跑，而在于可以选择任何方式去赢，并且赢得让人心服口服。」
    - 听完青云天空那番「后追奇袭」的大胆构想，%YOU%并未流露出丝毫惊讶或担忧。
    - 相反，%YOU%放下手中的资料，身体微微前倾，眼底掠过一丝被点燃的光芒。
    - 「后追，是吗？有意思——」
    - 「媒体和对手都盯着你的领跑，那我们就给他们一个惊喜！」
    - 「但天空，后追可不是留在后面看着就行，这比领跑更考验耐心、观察力和爆发时机。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我知道！所以才要好好计划！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这方面就交给训练员啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自由的船可不是那么好开的哦～」
    -
    - 比赛当天——
    - 阳光清澈透亮，洒在翠绿的草坪上。
    - 青云天空做着最后的热身，目光却不由自主地飘向观众席，急切地搜寻着那个熟悉的身影。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「找到了！」
    - 在看台前排，爷爷戴着那顶有些年头的旧草帽，正乐呵呵地朝%SEX%这边张望。
    - 见到孙女看过来，他立刻用力挥了挥胳膊。
    - 青云天空激动的举起手臂，朝着爷爷的方向使劲挥了挥，用力之大，连尾巴都跟着甩动起来。
    - 然后，%SEX%放下了手，脸上的笑容没有消退，反而一点点转变。
    - 慢慢变的深藏不露，眼中存着恶作剧般的亮光，像一只即将把所有人耍得团团转的猫。
    - %SEX%深吸了一口故乡的气息，转过身，步伐带着隐秘的兴奋，走向自己的闸位。


sapp_kin_win_s:
  title: 札幌纪念（胜）
  lines:
    - 冲过终点线的瞬间，青云天空没有立刻停下。%SEX%顺着惯性又跑了一段，直到确认胜利无误，才缓缓减速。
    - 胸膛剧烈起伏，汗水顺着下巴滴落，但%SEX%脸上的笑容却无比灿烂，混合着狂喜与得意。
    - %SEX%第一时间转过头，目光急切地搜寻着
    - 在赛道边缘的训练员区域，瞬间捕捉到了%YOU%的身影。
    - %YOU%朝%SEX%用力点了下头，抬起手，竖起了一个大拇指。
    -
    - 回想起比赛中段，当%SEX%依旧稳稳留在中后段，丝毫没有上前领跑的意图时，整个赛场的气氛是何等诡异。
    - 解说员的疑惑，观众席上传来的阵阵不解的骚动。
    - 甚至有人开始交头接耳：「青云天空是不是出闸迟了？」，「状态不对吗？」，「这不像%SEX%的风格啊！」
    - 那些困惑、怀疑、甚至略带失望的表情，此刻都成了胜利最好的佐料。
    - 青云天空快步跑到你面前，甚至来不及平复呼吸，声音因激动而有些发颤，语速飞快。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员！看到了吗！那个弯道！我就知道那里会有空隙！跟计划的一模一样！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不对，比计划还要顺利！他们完全没想到我会从那个角度钻出来！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷肯定也吓一跳吧！他是不是站起来了？我好像瞥到他站起来了！」
    - %YOU%笑着点头，还没来得及详细回应，%SEX%已经像想起了什么更重要的事，猛地刹住话匣。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！爷爷！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我先去找爷爷！他肯定等急了！回头再说！」
    - 青云天空脸上闪过一丝焦急，匆忙地对你摆摆手。
    - 说完，%SEX%甚至没等工作人员的完全引导，就迫不及待地上后方寻找那道熟悉的身影。
    - 背影很快消失在通道拐角，只留下一连串轻快而焦急的脚步声。
    - 和空气中尚未平息的、属于胜利的激动余韵。


before_tenn_sho_s:
  title: 天皇赏秋（前）
  lines:
    - 清晨6点半，训练室内——
    - 银杏叶开始黄了。
    - %YOU%推开训练室的门，青云天空十分难得的已经到位。
    - 但%SEX%没在训练，而是站在窗边，踮着脚尖去够窗外枝头那片最黄的银杏叶。
    - 听见开门声，%SEX%回过头，手里捏着刚摘到的叶子，眼睛在晨光里弯起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊——训练员！早啊～很惊讶吧～小青竟然起这么早。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你看，像不像小鱼？」
    - %SEX%走过来，把叶子递到%YOU%眼前。
    - 叶柄在%SEX%指尖微微颤动，边缘卷曲的轮廓在光下确实像一尾安静的鱼。
    - 「像。」
    - 青云天空满意地笑笑，把叶子夹进摊开的训练日志里。
    - %YOU%望向窗外的一片金黄和朗朗晴天。
    - 「真快啊……转眼就秋天了……」
    - %YOU%走到青云天空身边，%SEX%顺势靠过来，肩膀轻轻贴着%YOU%的手臂。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天天气真好。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「很适合睡午觉哦～」
    - 「也适合比赛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……那比完训练员得给我补回来～」
    - 「这回打算在哪儿睡？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「老地方呀，那棵大树下面，跟上次一样，你当枕头。」
    - 「上次你还吐槽我肩膀太硬。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那是你没调整好姿势。」
    - 青云天空理直气壮地说，手指戳了戳%YOU%的肩膀。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这次要这样……稍微斜一点，我才好靠。」
    - %YOU%照着%SEX%说的调整姿势。%SEX%靠上来试了试，满意地点点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔姆～合格啦——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以后你就是小青的专用枕头啦～」
    - 青云天空把脸埋在%YOU%肩前，像只撒娇的猫一样来回轻轻蹭了蹭。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐——训练员……」
    - 「嗯？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果我今天跑得很好……特别好那种……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你会不会……稍微觉得骄傲？」
    - %YOU%侧过头看%SEX%。
    - 青云天空睫毛垂着，在脸颊上投下淡淡的影子。
    - 「不是稍微。」
    - 「是一直很骄傲。」
    - 「从你第一次比赛，到现在，一直都是。」
    - 「小青一直都是我的骄傲哦～」
    - 青云天空怔住了。
    - %SEX%张了张嘴，想说什么，却没发出声音。
    - 耳朵尖瞬间立了起来，一抹红色迅速蔓延到脸颊。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等、等等……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这种话……这种话要提前预告一下啊……」
    - 「一直如此的事，为什么还要预告呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为……因为会来不及做心理准备……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「心跳太快了……等会儿跑步会岔气的……」
    - 「那就不说了。」
    - 看到青云天空可爱的反应，%YOU%忍不住逗逗%SEX%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哎！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不是不让你说。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「起……起码选个好点的时机……」
    - 「比如？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「比如……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等我冲线之后，你跑过来抱住我的时候……」
    - 青云天空想了想，轻轻的说道。
    - %YOU%笑了笑，温柔的回复%SEX%
    - 「好。」
    - 青云天空这才抬起头，脸上还残留着红晕，却努力做出严肃的表情。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「约好了哦。」
    - 「约好了。」
    -
    - 更衣室内——
    - 更衣室里的光线柔和。
    - 青云天空换决胜服时，%YOU%背对着%SEX%跟%SEX%复述这回的战术。身后传来布料窸窣的声音，还有%SEX%偶尔的嘟囔。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这个扣子怎么又松了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员——帮我系一下背后的扣子——我够不到。」
    - %YOU%转过身，青云天空白皙光滑的后背毫无保留的呈现在你面前。
    - %YOU%走过去，手指碰到%SEX%背时，%SEX%轻轻颤了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「咳咳——你手指有点凉呢……」
    - 「不好意思哈，很快就好了。」
    - %YOU%系得仔细，确保每处都平整贴合。
    - 「好了。」
    - 青云天空转过身，脸上有点红，但眼睛很亮。
    - %SEX%走到镜子前整理衣领，%YOU%从%SEX%身后经过时，顺手帮%SEX%抚平肩上一处细微的褶皱。
    - 青云天空从镜子里看着%YOU%，幸福的笑了笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你还记得我们第一次见面吗？」
    - 「记得。你在河边钓鱼，我问你浮漂颤动时在想什么。」
    - 青云天空双手背到身后，转过身脑袋向%YOU%凑来 。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那时候我觉得你肯定跟之前那些人一样，说两句就会走。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可是你竟然坐下来了，还真的在听我说那些关于鱼的事。」
    - 「因为很有意思。」
    - 「你说鱼试饵的时候，浮漂会轻点，等它真正下决心咬钩，浮漂会平稳地沉下去。」
    - 「我还向你说有个地方有更大的钓点，更大的鱼。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你居然记得这么清楚……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那时候我还在想，这个训练员会不会又是个只会说大话的人。」
    - 「结果呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「结果……」
    - 青云天空轻步上前，双手捧起%YOU%的脸。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「结果你带我去看了训练场，让我看特别周%THEY%跑步。然后你说——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想不想试试？就像钓鱼，找你觉得对的时机，用你觉得对的方式。」
    - %SEX%模仿着%YOU%当时的语气。
    - 「你当场就签了约。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「因为你说会帮我抓住那些『缺口』，让我钓上『大鱼』。」
    - 青云天空松开手，后退半步，笑容变得更加明亮。
    - 广播声隐约从远处传来，提醒着时间。
    - 青云天空深深吸了一口气，又缓缓吐出，肩膀微微沉下，再抬起时，脸上慵懒怀念的神色已收敛，取而代之的是一种沉静的专注。
    - %SEX%从背包侧袋抽出一张对折的纸，递给了%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「爷爷今早又来信了，上面只有一句话……」
    - 「跑得开心。爷爷等你们回来。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员——」
    - 「嗯？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「等比赛结束……我们早点回去，好不好？我想吃爷爷做的饭了。」
    - 「好啊，给爷爷一个惊喜？」
    - 「到时候想吃什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么都行，只要是和训练员一起吃的……」
    - 广播在这时响起，最后一次催促选手入场。
    - 那点羞赧瞬间被压了下去。
    - %SEX%再次深吸一口气，再抬起头时，眼神已经恢复了清明和专注。%SEX%最后检查了一遍鞋带和衣摆，然后朝我伸出手。
    - 掌心相贴的瞬间，%SEX%用力回握了一下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来吧，钓大鱼喽！」
    - acc: 1
      content: 「为你领航！」


tenn_sho_win_s:
  title: 天皇赏秋（后）
  lines:
    - 选手陆陆续续入闸。
    - 闸门还是那个闸门。
    - 金属的触感、空间的宽度、视野被框住的范围——都和往常一样。
    - 但今天的青云天空不一样。
    - 一种细微的、却无法忽视的不适感，像水底的暗流，悄无声息地漫了上来。
    - 青云天空轻轻皱了皱眉。
    - %SEX%动了动肩膀，调整站姿，试图找到往常那个让%SEX%觉得还行的位置。
    - 但今天，无论怎么调整，那种被框住，被限制的感觉都挥之不去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （……有点闷。）
    - 时间一秒一秒地流过，不适感让等待出闸的时间被拉长。
    - 那股烦躁感开始滋长、蔓延。
    - 它顺着脊椎爬上来，让呼吸不自觉地变浅，让指尖微微发麻。
    - 闸门内壁冰冷的触感，前方被框成一条缝的视野，身体两侧无法舒展的空间……
    - 所有这些细微的感知，都在此刻被无限放大。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （怎么还不开……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （好窄……）
    - 青云天空甚至能清晰地听到自己越来越快的心跳，在狭窄的空间里回响。
    - 十秒……也许十五秒。
    - 烦躁感积累到了顶点，像蓄满的水库，在闸门边缘微微震颤。
    - 然后——
    - fontSize: 1.5rem
      content: 「哐——！！！」
    - 金属闸门猛地弹开的巨响，像一道惊雷劈进这片被烦躁填满的狭小空间。
    - 就在那决定性的瞬间，在身体应该本能地冲出去的零点几秒里——
    - 青云天空的反应慢了半拍。
    - 积蓄到顶点的烦躁，让青云天空出现了一瞬间不同步的凝滞。
    - 就这半步之差。
    - 意图封堵的外侧对手已经如离弦之箭冲出，完美占据了外侧路线。
    - 青云天空立刻惊醒，左脚猛力蹬地，身体如弹簧般向内线那道狭窄缝隙射去——
    - 却迎面撞上了一堵最沉稳的墙。
    - 特别周宽厚的背影，如同经过最精密设计般，恰好横亘在%SEX%计划中的理想线路上。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （糟了……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （被算计了。）
    - 这个念头像冰针，瞬间刺穿%SEX%的脑海。
    - 围猎，已经开始……
    -
    - 不到四百米，青云天空已经被彻底包裹。
    - 特别周在前方稳稳压制着节奏，不快不慢，恰好是让青云天空最难受的临界速度。
    - 左右两侧的对手如同训练有素的影子，同步着%SEX%的每一次呼吸、每一次步伐的微小调整，后方还有紧咬不放的追兵。
    - 青云天空尝试变速——包围圈默契地同步收紧。
    - 在第一个弯道时，空隙在%SEX%眼前出现，又在下一秒被立刻填满。
    - 青云天空最擅长的「阅读比赛」正在失效。
    - 所有的「气流」——对手的呼吸、肌肉的疲惫、节奏的裂痕——都被这堵密不透风的墙隔绝。
    - 此刻的青云天空就像一只被关在玻璃箱中的鸟，能看见辽阔的天空，翅膀却只能拍打在无形的屏障上。
    - 青云天空的呼吸开始紊乱。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （不对……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （这不是战术博弈的劣势……这是无处可逃的窒息！）
    - 计划彻底崩坏的恐慌，混合着身体被紧紧束缚的压抑感，像冰冷的沥青，从脚底漫上来，黏稠、沉重，拖拽着%SEX%的步伐。
    - 青云天空的脚步第一次出现了犹豫。
    - 那总是从容不迫、带着慵懒弹性的「策士的步伐」，被一种陌生的僵硬所取代。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （突破不了……找不到路……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （怎么办……）
    - 每一次尝试都失败，每一次思考都被现实狠狠驳回。
    - 那个总能在混乱棋局中找到唯一生路的策士，此刻握着满手死棋。
    - 即将过完第二个直线。
    - 特别周在前方维持着精确的节奏，左右是沉默而坚固的墙壁。
    - 青云天空的呼吸变得越来越重，越来越急——就像溺水者徒劳的挣扎。
    - 周围的马蹄声、风声、观众的呐喊……
    - 所有声音都开始模糊，远去，像隔着一层厚厚的水幕。
    - 视野的边缘开始发暗。
    - 一个清晰的、冰冷的念头，浮现在%SEX%意识的表层……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （看来这次……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （就要这样……结束了……）
    -
    - 看台上，%YOU%握紧了栏杆。
    - （不对劲。）
    - （从一开始就不对劲。）
    - （青云天空出闸时那半步的凝滞——我见过。）
    - 那是%SEX%讨厌狭窄空间的毛病，偶尔会在状态不佳时出现，但今天不一样。
    - 在%SEX%出闸失误后，特别周精准封堵的同时，左右两侧的对手几乎不约而同地向内收拢，后方也有赛%UMA%立刻补位。
    - %THEY%抓住了青云天空的失误，不约而同的组成包围网，目的明确——
    - 不给青云天空任何观察、调整和施展策略的空间，从物理和心理上将%SEX%彻底锁死。
    - 最初的几百米，我还能在%SEX%眼中看到熟悉的「策士之光」在艰难闪烁。
    - 但%SEX%每一次试图抬头观察，每一次细微的节奏试探，换来的都是包围圈同步的收紧和压迫。
    - %THEY%在用身体语言告诉%SEX%：「今天，没有空隙给你观察，没有时间给你思考。」
    - 到了第二个弯道，情况急转直下，青云天空的脚步出现了明显的迟滞，目光死死锁定在特别周的背影上，瞳孔涣散。
    - %THEY%即将进入第二直线。
    - content: 不能再等了！
      fontSize: 1.2rem
      fontWeight: bold
    - %YOU%转身狂奔，冲过拐角，挤过拥挤的人群。
    - 不顾后方的抱怨，扑到第二直线末端的前排，此时赛%UMA%的大部队正好临近。
    - %YOU%半个身子探出看台，目光死死锁住赛道中央那道仿佛正在褪去颜色的青色身影。
    - 吸气——
    - 用尽胸腔里所有的空气，用上喉咙里全部的力气，将所有的焦虑、信任与不容置疑的信念，嘶吼道：
    - acc: 1
      content: 「天空——！！」
    -
    - acc: 1
      content: 「抬头——！！」
    - 声音撕裂空气，压过一切喧嚣。
    - 赛道中央，那道青色的身影猛地一颤，像是被电流击中。
    - acc: 1
      content: 「鱼还在呢——！！」
    -
    - acc: 1
      content: 「抓住它——！！」
    - 最后一个字吼出时，喉咙里涌上铁锈般的血腥味。
    - %SEX%看着我。
    - 就那么看着。
    - 时间仿佛凝固。
    - 青云天空脸上麻木的茫然，与%YOU%嘶吼中的灼热信念，在空气中激烈碰撞。
    - 眼前蒙着水雾的光，像被一阵狂风吹散。
    - 湛蓝色火焰那冷静、锐利、独属于策士的火光被重新点燃。
    - 如同破晓的晨光在青云天空眼中燃烧。
    - 青云天空深吸了一口气——缓慢，深长，平稳得可怕。
    - 不顾周围人异样的目光，%YOU%瘫坐下来轻轻说道。
    - 「别认输啊……天空……」
    -
    - 比赛快要进入第三弯道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （好累，好难受……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （看来……已经要不行了……）
    - 「天空——抬头！！」
    - 一道嘶吼穿透层层声浪。
    - 青云天空猛地一颤，涣散的瞳孔本能地朝向声音来源。
    - 「鱼还在呢——！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （鱼……？）
    - 「抓住它——！！」
    - 最后一个字炸开的瞬间——
    - 涣散的瞳孔骤然收缩成锐利的针尖。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （对了……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （我可不是被困在鱼池里的鱼。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （我是钓手！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （特别周不是山，是鱼。一个强大、沉稳、正在前方领游的大鱼。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （左右不是墙，是水流。是包围着鱼、也包围着我的水流。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （而水流……是有缝隙的。）
    - 冰冷清澈的理性轰然灌满全身，所有迷茫被瞬间蒸发，策士的头脑在绝境中彻底苏醒，运转速度甚至远超平时。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （进入第三弯道了……）
    - 青云天空的目光如精准的探针，锁定了左侧对手。
    - 捕捉着对方每一次呼吸的深度、每一步落地的轻重、肌肉绷紧时那微妙的节奏变化。
    - 信息如流水汇入脑海：
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （对方在硬撑。为了维持同步压制，%SEX%正在透支弯道中本该保留的体力。）
    - 青云天空脑海中的计划慢慢浮现。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （不在这个弯道动手。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （按照这个节奏，当队伍进入最终弯道的刹那——）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （所有人都会为应对下一个弯道而微调重心与步伐，那是节奏转换的节点，也是注意力与身体控制最短暂的缝隙。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （机会——就在那里！）
    - 目标、时机、方法，在脑中凝结成冰冷清晰的模型。
    - 青云天空收回目光，调整呼吸，开始为那个即将到来的瞬间积蓄力量。
    - 最终弯道近在眼前。
    - 离心力随着弧度急剧增强。
    - 在第三弯道与最终弯道衔接的临界点——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （就是现在！）
    - 左侧对手因连续弯道的消耗和重心调整，出现了计划中的那一瞬迟缓。
    - 没有碰撞，没有挤压。
    - 青云天空只是将身体重心如流水般自然导向外侧。
    - 同时凭借精准的步频控制，在对手因疲惫而稍显滞重的步伐旁，踏出更流畅、更经济的一步。
    - 如同溪流绕过顽石，微风穿过林隙。
    - 从那个因对手瞬间迟缓而出现的的缺口中滑了出去。
    - 脱困——完成！
    - 脱困的惯性尚未完全消散，前方，特别周的身影已领先两个半马身。
    - 没有喘息的时间。青云天空将最后的力量压入脚底，开始追赶。
    -
    - 进入最终直线——
    - 特别周察觉到了迫近的气息。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「哈——啊——啊————！！」
    - 嘹亮的战吼刺破空气。特别周像一道撕裂夜幕的璀璨流星，以纯粹的力量碾过赛道，将身后所有试图追赶的身影狠狠甩开。
    - 距离，再次被无情地拉开。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「开什么玩笑！」
    - 肺部在燃烧，腿部肌肉发出悲鸣。但比身体更先沸腾的，是不甘。
    - 好不容易才挣脱的牢笼。
    - 好不容易才看清的道路。
    - 好不容易……才回到这片能够自由奔跑的天空。
    - content: 怎么能在这里结束！！
      fontSize: 1.2rem
      fontWeight: bold
    - 把肺里所有的空气挤压而出。
    - 把最后一丝理智也燃作燃料。
    - 把所有的计策抛掷脑后
    - 把步幅拉到极限。
    - 把步频突破临界。
    - content: 追上去！
      fontSize: 1.2rem
      fontWeight: bold
    - 像一道逆飞的青色流星，咬紧前方那道势不可挡的光。
    - 距离一点点，一寸寸，开始缩短。
    - 最后一百米——
    - 半个马身。
    - 两人眼中燃烧着火焰，汗水从额角挥洒。
    - 没有多余的思考。
    - 只有并排轰鸣的蹄声，和同样灼热的呼吸。
    - 最后五十米——
    - 并排
    - 交错
    - 再并排——
    - 身体前倾到极限，手臂摆动到近乎撕裂。
    - 将「青云天空」这个名字一路走来的懒散、狡黠、计算、骄傲、以及此刻毫无保留的渴望——全部灌注于最后一步。
    -
    - 冲线！
    -
    - …………
    - 风停了。
    - 世界在瞬间失去声音，只有心脏在耳膜上疯狂擂动。
    - 慢慢减速，停下，双手撑住颤抖的膝盖，汗水如雨砸在草皮上。
    - 抬起头时，看见特别周也在不远处停下，胸膛剧烈起伏。
    - 特别周转过头，我们对上视线。
    - %SEX%抬起手，比了一个赞许的手势。
    - 我愣了一下，随即也抬起手，回了同样的手势。
    - 随后，我们同时笑了。
    - 大屏幕上，成绩刷新。
    - 1位——青云天空。
    - 以鼻尖的差距。
    - 「赢了——！！！」
    - 「是青云天空！以微弱的鼻差！」
    - 随着解说员的呐喊，全场的欢呼与呐喊的声浪轰然爆炸。
    - 看台在震动，空气在沸腾。无数彩带与欢呼汇成金色的洪流，涌向赛道中央。
    - 周围的对手们陆续冲过终点，%THEY%放缓脚步，调整着呼吸，目光不约而同地落在青云天空身上。
    - 没有不甘，没有怨怼——
    - 一道道目光里映出的是惊叹，是认可。
    - 然后是掌声！
    - 在赛场尚未平息的轰鸣中，这份属于竞技者之间的掌声，清澈而有力。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「天空同学！你最后那一下太厉害了！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「我还以为领先很多了呢，结果你『唰』地一下就追上来了！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「不过这次你竟然选择居中的跑法呢！这也是你精心策划的计谋吗？」
    - 特别周跑到青云天空面前，兴奋地握住%SEX%的肩膀晃晃，眼中闪着星星的问道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （……小特这个笨蛋，果然完全没发现啊。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （在%SEX%后面被围得差点窒息这种事，%SEX%肯定想都没想过吧。）
    - 青云天空无奈的笑了笑，喘着粗气回道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （你的末脚才吓人，我都以为追不上了。）
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「嘿嘿，我可是拼尽全力了！」
    - 特别周松开手，双手叉腰，挺起胸膛，尾巴在身后欢快地甩动。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「不过最后还是你赢了！太好了！」
    - 特别周的喜悦直白而热烈，像秋日毫无遮挡的阳光。
    - 青云天空望向天空，汗水不断的落下。
    - 朝看台的观众挥了挥手。
    - 放下手时，青云天空的目光穿过喧嚣的赛场，精准地找到了那个正从看台栏杆边直起身，也朝%SEX%用力挥手的身影。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「该去收『尾款』了～」


# 结局
# 完美结局 生涯目标全胜
perfect_ending:
  title: 万里远航，征帆归岸
  lines:
    - 水面铺满橙红色的霞光，碎金般晃动着。
    - 短信上写着「速来」，外加一个地址。
    - 青云天空坐在那截伸出水面的老旧栈桥尽头——你们初次相遇的地方。
    - 钓竿斜插在身旁，浮漂许久未动。
    - %SEX%的姿态看起来和当年没什么不同：背带裤一边肩带滑落，头发被晚风吹得有些乱，双脚泡在水里轻轻晃荡。
    - 但当%YOU%走近时，%SEX%睁开眼看向%YOU%，但和当初的眼神，已经不一样了。
    - 那里面依然有慵懒和轻松，却多了些别的东西——像水面下的暗流，沉静而深邃。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～今天鱼群全体罢工哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我听见它们在秘密会议，商量怎么对付小青这个钓得太准的「青色恶魔」哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是不是你昨晚偷偷来给它们特训了？」
    - 「我要是能叫它们让你空军。」
    - 「这三年你得补上多少训练。」
    - %YOU%边调侃边在%SEX%身旁坐下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「骗你的啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实是午睡时一翻身，把整罐饵料都打翻进水里了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉～马失前蹄咯～」
    - 晚风拂过水面，带起层层细密的涟漪。
    - 青云天空的笑声渐渐歇了，目光投向远处泛起橙金波纹的水面，忽然安静下来。
    - 浮漂在暮色中一动不动，完美的融入沉默中。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……三年了呢。」
    - 「是啊，好快。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐——训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「记得吗？三年前坐在这里，我说『比赛就是让鱼觉得是它自己想咬钩』。」
    - 青云天空看向水面，好像看见了当年的自己。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那时候的我，真的只把比赛当成一场……大一点的钓鱼游戏。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「赢了开心，输了也无所谓，反正还有明天的鱼可以钓。」
    - 青云天空转头看向%YOU%，霞光给%SEX%侧脸镀上温柔的轮廓，睫毛在眼下投出浅浅的阴影。
    - 「然后你成功了。」
    - 「把它们用在了最精彩的赛场上。」
    - 青云天空点点头，嘴角扬起一个淡淡的、带着怀念的笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但我变贪心了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不再只想「赢」，而是想赢得……像一片云飘过天空那么自然。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让对手一脸惊讶的看到，作为策士也能赢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让所有人明白，我自由自在的奔跑——也能赢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让所有人记住，有个叫青云天空的赛%UMA%，是用最懒散的样子，跑出了最聪明，最自由的比赛。」
    - 暮色渐沉，池边的路灯一盏盏亮起，在水面投下长长的、摇晃的光柱。
    - %SEX%转过头看%YOU%，霞光映在%SEX%眼底。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而这一切——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都是因为三年前，有个训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没对我说「你要努力」，而是问我——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想不想钓更大的鱼……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有像拷上枷锁一样，要求我应该怎样跑，而是问我——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你想怎么赢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你一直陪在小青身边呢，一直都在。」
    - 水面平静如镜，倒映着逐渐暗下来的天空，和岸边越来越亮的灯火。
    - 青云天空看了%YOU%很久，然后忽然笑起来——
    - 一个干净、明亮、毫无保留的笑容。
    - 青云天空转身在旁边的手提箱里翻出一个精致的——相册？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这可是我最珍贵的东西哦～」
    - 青云天空向%YOU%怀里靠了靠，开始翻开那本相册一页页的介绍了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看，这是训练员第一次钓到鱼的照片，你都没发现吧，嘿嘿～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！这是咱俩赢得三冠后一起去澳大利亚的照片」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这张是咱俩回老家，咱俩在后山的湖边拍的。」
    - ……
    - …
    - 相册翻到最后一页，照片也定格在了青云天空生涯最后一场比赛的领奖台。
    - 合上相册，就像合上了你们这三年的点点滴滴……
    - 这三年很长，足够%YOU%与%SEX%相识到相伴
    - 这三年又很短，短到一本相册被%YOU%捧在手心。
    - 「这三年好快呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「合上相册的时候，莫名有些伤感呢……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我准备了这个！」
    - 青云天空不知从哪掏出来一本更大更厚的相册，啪的一下扔到%YOU%怀里。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「将将！还早着呢！我都标好了！下次是亚马逊，再下次是佛罗里达……」
    - 在%YOU%震惊的说道
    - 「真是条贼船～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～已经来不及条船了哦～」
    - 「那我要当船长！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行！船长是我的……」
    - ……
    - %YOU%和青云天空在金黄色的夕阳下开心的讨论着。
    - 从坎坷的过去到辉煌的现在，再到你们一起期待的未来……


normal_ending:
  title: 万里远航，征帆归岸
  lines:
    - 水面铺满橙红色的霞光，碎金般晃动着。
    - 短信上写着「速来」，外加一个地址。
    - 青云天空坐在那截伸出水面的老旧栈桥尽头——你们初次相遇的地方。
    - 钓竿斜插在身旁，浮漂许久未动。
    - %SEX%的姿态看起来和当年没什么不同：背带裤一边肩带滑落，头发被晚风吹得有些乱，双脚泡在水里轻轻晃荡。
    - 但当%YOU%走近时，%SEX%睁开眼看向%YOU%，但和当初的眼神，已经不一样了。
    - 那里面依然有慵懒和轻松，却多了些别的东西——像水面下的暗流，沉静而深邃。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～今天鱼群全体罢工哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我听见它们在秘密会议，商量怎么对付小青这个钓得太准的『青色恶魔』哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是不是你昨晚偷偷来给它们特训了？」
    - 「我要是能叫它们让你空军。」
    - 「这三年你得补上多少训练。」
    - %YOU%边调侃边在%SEX%身旁坐下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「欸——训练员好坏……骗你的啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实是午睡时一翻身，把整罐饵料都打翻进水里了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉～马失前蹄咯～」
    - 晚风拂过水面，带起层层细密的涟漪。
    - 青云天空的笑声渐渐歇了，目光投向远处泛起橙金波纹的水面，忽然安静下来。
    - 浮漂在暮色中一动不动，完美的融入沉默中。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……三年了呢。」
    - 「是啊，好快。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐——训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「记得吗？三年前坐在这里，我说『比赛就是让鱼觉得是它自己想咬钩』。」
    - 青云天空看向水面，好像看见了当年的自己。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那时候的我，真的只把比赛当成一场……大一点的钓鱼游戏。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「赢了开心，输了也无所谓，反正还有明天的鱼可以钓。」
    - 青云天空转头看向%YOU%，霞光给%SEX%侧脸镀上温柔的轮廓，睫毛在眼下投出浅浅的阴影。
    - 「然后你成功了。」
    - 「把它们用在了最精彩的赛场上。」
    - 青云天空点点头，嘴角扬起一个淡淡的、带着怀念的笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但我变贪心了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不再只想『赢』，而是想赢得……像一片云飘过天空那么自然。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让对手一脸惊讶的看到，作为策士也能赢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让所有人明白，我自由自在的奔跑——也能赢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让所有人记住，有个叫青云天空的赛%UMA%，是用最懒散的样子，跑出了最聪明，最自由的比赛。」
    - 暮色渐沉，池边的路灯一盏盏亮起，在水面投下长长的、摇晃的光柱。
    - %SEX%转过头看%YOU%，霞光映在%SEX%眼底。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而这一切——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都是因为三年前，有个训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没对我说『你要努力』，而是问我——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想不想钓更大的鱼……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有像拷上枷锁一样，要求我应该怎样跑，而是问我——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你想怎么赢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你一直陪在小青身边呢，一直都在。」
    - 水面平静如镜，倒映着逐渐暗下来的天空，和岸边越来越亮的灯火。
    - 青云天空看了%YOU%很久，然后忽然笑起来——
    - 一个干净、明亮、毫无保留的笑容。
    - %SEX%伸了个懒腰，把手枕在脑后，重新变回那副懒洋洋的模样。
    - 仿佛刚才那些认真的话只是随口一提。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「居然能把我培养得这么强～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看不出来嘛，训练员你也是个深藏不露的策略家啊～喵哈哈～」
    - 笑声在暮色中散开，但很快，%SEX%又安静下来，望向平静的水面。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但是啊——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这池子里的鱼，我还没钓完呢。」
    - 然后，青云天空转过头，向%YOU%伸出了手。
    - 掌心向上，手指舒展，在渐浓的暮色中像一个温柔的邀请。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你愿意……一直陪我钓下去吗？」
    - %SEX%的眼睛在昏暗的光线里炯炯有神。
    - 那里有你们共同经历的三年，有无数个一起看过的日出日落，有胜利的欢呼和失败的泪水，有所有说不出口却彼此懂得的时光。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「从这个小池塘……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……到更大、更大的海。」
    - %SEX%的手悬在空中，等待着一个答案。
    - 晚风又起，吹动%SEX%额前的碎发，远处传来归鸟的啼鸣，夜幕正缓缓降临。
    - 而在这片你们故事开始的水边，一个新的问题，正等待着一个关于未来的回答。


# 50%（事件『风起云如马』后变为80%）全数值+3 好感+10 -摸鱼
ws_lazy_find_you:
  title: 抓到你咯～
  lines:
    - 午饭过后，青云天空表示要去例行午睡，%YOU%提醒%SEX%别睡过了。
    - 在下午的训练开始时，却不见青云天空的身影。
    - 「这家伙……又睡过头了吧……」
    - 面对青云天空这时不时的松弛感%YOU%早已习惯。
    - 「嗯……来吧，猜猜看%SEX%这回会在哪偷懒——」
    - acc: 1
      content: 中庭的大树树干
      lines:
        - %YOU%来到了中庭最粗的一棵大树旁。
        - 抬头望去，一个青色的身影正瘫在树干上，和周围的树叶融为一体。
        - （虽然不是第一次看见了，但还是感觉很神奇……）
    - acc: 2
      content: 宿舍旁边的草坪
      lines:
        - %YOU%来到了青云天空宿舍楼旁的草地上。
        - 青云天空正双手背在脑后悠闲的躺在草坪上。
        - （明明旁边就是宿舍，却还是躺在这里，对偷懒的环境还挺严格……）
    - acc: 3
      content: 天台的秘密基地
      lines:
        - %YOU%来到了学校天台的一个角落，那里支着一个海边用的太阳椅。
        - 青云天空带着个太阳镜，旁边放着吃一半的水果，伴随着微风沉沉睡去。
        - （不说我还以为在海边呢，真会享受啊这家伙……）
    - acc: 4
      content: 食堂后方的猫舍
      lines:
        - %YOU%来到了学校食堂后方，那里有爱猫人士支起来的一个小猫舍。
        - 青云天空正躺在旁边一个拉起来的吊床上，怀里还有只三花陪%SEX%一起打盹。
        - （虽然每次都得给%SEX%处理一身猫毛，但这个画面还挺温馨的嘛……）
    - acc: 5
      content: 训练场里的看台
      lines:
        - %YOU%来到了训练场上的看台，场上的%UMA%正在卖力的训练。
        - 青云天空正躺在座位上，看上去像是在睡觉。
        - （又在偷偷观察对手吗？不过这次怎么看都像是在睡觉……）
    - 「小青——起床喽——」


# 50% （事件『风起云如马』后变为20%）青云天空技能点数+10 训练员体力-200
ws_cannot_find:
  title: 抓不到哦～
  lines:
    - 清晨的训练场，已经有勤奋的%UMA%在加倍努力。
    - %YOU%也早早的就来到了训练室，拿出精心写好的的训练计划，准备和青云天空一起完成这充实的一天。
    - 太阳渐渐升起，门外训练场上的操练声音也越来越多。
    - 但属于%YOU%搭档的那一份却迟迟不来。
    - 又过了许久，%YOU%看了看表，早已经过了约定好的时间，给%SEX%发消息也不回复。
    - 「这家伙……又偷懒去了……」
    - 于是%YOU%无奈的开始全校大搜查。
    - acc: 1
      content: 中庭的大树树干
      lines:
        - 不见踪影
    - acc: 2
      content: 宿舍旁边的草坪
      lines:
        - 不见踪影
    - acc: 3
      content: 天台的秘密基地
      lines:
        - 不见踪影
    - acc: 4
      content: 食堂后方的猫舍
      lines:
        - 不见踪影
    - acc: 5
      content: 训练场里的看台
      lines:
        - 不见踪影
    - 下午临近晚饭，青云天空才懒洋洋的来到了训练室。


# 新秀年5月以后 技能点数+40
ws_next_time:
  title: 下次一定
  lines:
    - 训练室靠窗的位置，阳光铺成一方暖黄色的棋盘。
    - 青云天空悠闲的单手托腮，%SEX%对面的圣王光环腰背挺直，视线紧锁棋盘，表情严肃。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈……你想了多久了？」
    - 青云天空打了个小小的哈欠。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「别吵！这是战术思考！」
    - 圣王光环瞪青云天空一眼，随后走出深思熟虑的一步。
    - 看到落子，青云天空耳朵动了动。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好厉害的一步啊～那我走这边。」
    - 圣王光环低头看了一眼，瞳孔微缩。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「等、等等……你刚才那步是故意的？把我引到这边然后——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯哼～」
    - 青云天空端起旁边的麦茶喝了一口，语气平淡的回复道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三手前就在算了。」
    - 圣王光环咬着嘴唇，盯着棋盘看了足足三十秒。然后深吸一口气，把手中的桂马重重放下。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「……是我输了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喵哈哈～圣王今天也很认真呢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那今天的甜点就交给你啦～」
    - 青云天空贱贱的说到。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「哼——本小姐可不会赖账！」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「下次！下次我一定会赢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯嗯，下次一定。」
    - 圣王光环猛地站起来，双手撑住桌沿，红红的脸颊透露出一股子不服气。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「……明天这个时间，你还会在吧？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大概在？」
    - 青云天空调皮的故意看向别处。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「什么叫大概在！算了，我提前来看！不许放我鸽子——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那每天赌点什么呢～膝枕怎么样！」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「！！！」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「唔……赌就赌！每天我一定会赢！」
    - 圣王光环傲娇的瞪了一眼，正好对上青云天空笑眯眯的眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （明明很开心嘛～）


# 新秀年8月之后 耐力+30 根性+30
ws_hidden_menu:
  title: 传说中的隐藏菜单
  lines:
    - 走廊里，特别周突然一把抓住青云天空的手臂。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「小青！小青！我发现了一个惊天大秘密！」
    - 青云天空的耳朵动了动，本来还困得眼皮打架，被这一拽差点摔倒。
    - %SEX%眯着眼睛看向特别周——后者两眼放光，尾巴兴奋的不停摇晃。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「食堂有传说中的隐藏菜单！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「需要特定时间、特定窗口、对阿姨说特定暗号才能买到！而且——」
    - 特别周压低声音说道。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「暗号和猫有关！」
    - 青云天空眨了眨眼睛，困意突然散了。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「陪我去蹲点吧！」
    - 青云天空看着特别周那张写满「快来陪我」的脸，自己的好奇心也被一点点勾了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「隐藏菜单？听起来好像很有意思……」
    -
    - 第一天。
    - 中午十一点五十分，食堂三号窗口。
    - 特别周拉着青云天空鬼鬼祟祟地排在队伍里，时不时探头往前看，紧张得耳朵都在抖。
    - 青云天空站在%SEX%旁边，难得地没有犯困，目光炯炯地盯着窗口阿姨。
    - 轮到%SEX%们，特别周深吸一口气，凑到窗口前。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「阿、阿姨……喵喵？」
    - 阿姨拿起勺子，一阵沉默。
    - content:
        - fontWeight: bold
          content: 阿姨3
        - 「……啥？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「就是那个！喵喵！」
    - 阿姨的眼神逐渐变得复杂。
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「孩子，你饿出幻觉了？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「没，没有！」
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「孩子，人是铁饭是钢，来，姨多给你盛点饭！」
    - 豪爽的食堂阿姨给青云天空和特别周盛了慢慢一盘炒饭。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「不是这个——」
    - 两人被人流挤开了队伍。
    - 特别周回头看向青云天空。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「我……我说错了吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……大概吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不过现在的问题是……饭太多了啊！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「没事小青！我吃得完！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我吃不完啊～！」
    -
    - 第二天，中午两点五十五分，食堂即将关门。
    - 特别周拉着青云天空冲进食堂，直奔三号窗口。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「阿姨！喵喵！」
    - 阿姨正在收拾东西，头也不回的说道。
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「孩子，卖完了，明天早点来。」
    - 特别周愣住了。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「可、可是我们是卡着关门时间来的啊……」
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「那你卡晚了。最后一份两分钟前刚被人买走。」
    - 特别周端着空盘子，整个人像被雷劈了一样站在原地。
    - 青云天空走到窗口边往里看了一眼。
    - 确实空了。
    - %SEX%叹了口气，拍了拍特别周的肩膀。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走吧。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「可是——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走了，咱先去蹭训练员的饭吧～」
    - 走出食堂，特别周还在喃喃自语。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「为什么……为什么会这样……」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「明天，明天再试一次！」
    - 看着两人的背影，食堂阿姨喃喃道。
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「咱家的炒饭啥时候这么受欢迎了……」
    -
    - 第三天，中午两点半，两人提前在食堂候着。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「就是这里！这次绝对不会错！」
    - 正好窗口前空无一人。
    - 阿姨看见%SEX%们，脸上露出笑容。
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「哎呀，你们来啦！」
    - 特别周愣了一下。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「阿、阿姨认识我们？」
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「可不嘛，这两天来对着我喵喵叫的丫头，整个食堂都认识了。」
    - 特别周的脸一下子就红了。
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「不过今天特意给你们多做了点——」
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「来，趁热吃。」
    - 两人瞬间两眼放光。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「传说中的隐藏菜单！」
    - %SEX%一把接过饭盒，颤抖着手打开——
    - 炒饭……
    - 普通的蛋炒饭。加了点青豆，胡萝卜丁，虾仁。卖相不错，味道也是一绝，但怎么看都只是一碗普通的蛋炒饭。
    - 特别周的笑容凝固了。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「阿、阿姨……这不是……」
    - content:
        - fontWeight: bold
          content: 阿姨A
        - 「嗯？不喜欢吃这个？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「不是……很喜欢……但我要的不是这个……」
    - 特别周急得耳朵直抖，双手在空中比划着
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「就是那个！需要说暗号的那个！传说中的那个！我听乌拉拉说理事长曾经领过的那个！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「就是那个那个！喵喵！那个喵喵！理事长领过的喵喵！」
    - 青云天空站在旁边，看着特别周那副快要急哭的样子，尾巴轻轻晃了晃。
    - %SEX%上前一步，把特别周拉到一边安慰道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小特，没事的。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「呜……小青……他们都说有的……乌拉拉亲口说的……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「乌拉拉？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那个，你的消息从谁那听的？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「乌拉拉！%SEX%说%SEX%亲眼看见理事长在这个窗口领过！还听见理事长说了什么！」
    - 青云天空低头深思起来
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （每次食堂关门前的时间……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （猫叫一样的暗语……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （固定的窗口……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （理事长来领过……）
    - 青云天空眨了眨眼睛，好像猜到了什么。
    - %SEX%闭上眼睛，深深吸了一口气，然后走到隔壁窗口前。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「阿姨，请给我一份给『那个』。」
    - 阿姨看了%SEX%一眼，笑了。
    - content:
        - fontWeight: bold
          content: 阿姨B
        - 「啊，是小青啊，今天的在这呢。」
    - %SEX%转身从柜台下面端出一个饭盒，推到窗口上。
    - 不是炒饭，是另一个饭盒。
    - 特别周噌地冲过来。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「就是这个！就是这个！传说中的隐藏菜单！」
    - 青云天空把饭盒打开。
    - 里面就些是切成小块的鱼肉和拌了汤汁的米饭。
    - 特别周愣住了。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「这是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「每次我跟食堂阿姨要的喂猫的剩饭。」
    - 青云天空一脸无奈地看着%SEX%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「阿姨专门留给我们爱猫人士的。」
    - 特别周张着嘴，半天没说出话，整个人像一尊石像。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「我……我蹲了三天……原来就……」
    - 青云天空端起饭盒，看着耳朵耷拉着的特别周，安慰道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那小特，咱走吧～」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「欸，去哪？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「去跟猫猫一起吃饭啊～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你不是蹲了三天吗？不想看看它们长什么样？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且跟猫猫一起吃饭别有一番风味呢～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这也算是隐藏菜单了，不是吗～」
    - 听到青云天空的建议，失望的特别周打起了精神，跑到窗口前。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「阿姨，剩下的全打包！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （这饭量，不愧是小特……）


# 新秀年11月之后 好感+50 技能点数+30 智力+30
ws_punish:
  title: 青云天空の公开处刑
  lines:
    - 第三节课的预备铃刚响，%YOU%正在训练室整理青云天空上个月的训练数据，手机突然响了。
    - 是教务主任，语气急得像热锅上的蚂蚁：有个老师临时请假，其他老师都排不开课，问%YOU%能不能去顶一节。
    -
    - 等%YOU%拿着教材走到教室门口的时候，透过门上的玻璃窗，一眼就看见了靠窗的那个位置。
    - 青云天空趴在桌上，脸埋在手臂里，两只耳朵软软地耷拉着，尾巴有一搭没一搭地垂在椅子外面——睡得正香。
    - %YOU%推开门。
    - 唰——
    - 交谈中的%UMA%们眼睛同时转过来，齐刷刷地盯住%YOU%。
    - %YOU%走上讲台，清了清嗓子。
    - 「那个，今天老师临时有事，其他老师也排不开时间，所以我来代一节课。」
    - 教室里安静了两秒，然后后排有个声音响起「诶？你不是青云天空的训练员吗？」
    - 「诶诶诶诶——！」
    - 话音刚落——教室里瞬间炸开了锅。
    - 「真的假的！青云天空的训练员来代课！」
    - 「听说%YOURSEX%可厉害了，青云天空每次偷懒%YOURSEX%都能找到！」
    - 「还有还有，听说%YOURSEX%每次都能在青云天空跑完的第一时间递上毛巾和水，就跟算好了一样！」
    - 「呜哇——好羡慕——」
    - 「看上去好稳重啊……」
    - 靠窗的位置，一个毛茸茸的脑袋动了动。
    - 青云天空迷迷糊糊地抬起头，耳朵晃了两晃，眼睛还没完全睁开，嘴里嘟囔着什么。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔……好像听到训练员的声音了……」
    - %SEX%揉了揉眼睛，打了个小小的哈欠。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……做噩梦了？」
    - 然后%SEX%看清了讲台上站着的人。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——！」
    - 尾巴「唰」地竖得笔直，%SEX%整个人从椅子上弹起来，差点把桌子掀翻。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜啊！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训、训练员！你来干什么！」
    - %SEX%指了指教室，又指了指%YOU%，再指了指自己，手指在空中绕了好几圈，愣是没说出完整的一句话。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这里不是训练场啊！」
    - 「唉……刚刚说过了啊。」
    - 「你们老师临时有事，我来代课。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「代课——？！搭档来代课什么的，感、感觉好奇怪啊！」
    - 「正好想看看青云天空在上课时的样子嘛。」
    - %YOU%一脸无所谓的回应道。
    - 「呀——！」
    - 整个教室瞬间沸腾。
    - 特别周双手捧着脸，眼睛闪闪发光，看看青云天空又看看%YOU%，来回转了好几个回合。
    - 草上飞捂着嘴偷偷笑，肩膀一抖一抖的。
    - 圣王光环单手扶额，深深地叹了口气。
    - 神鹰正举起双手——
    - 青云天空的脸「腾」一下子红了，从脸一直红到脖子根。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「神鹰你也别起哄！」
    - 青云天空抢先一步喊道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「别多想啊！只是这人说话太直白了而已！」
    - 说完%SEX%整个人往桌上一瘫，闷闷地哼了一声，把脸埋得更深。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小青要休息一下……」
    - 「哦对了。」
    - 「你们老师跟我说了，说你经常打瞌睡，让我今天来调研一下。」
    - 「所以今天要精神一点哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「欸！还不让睡觉！好过分啊！」
    - 「正好把你落的课补补，今天别想偷懒哦～」
    - 教室里响起一阵低低的笑声。
    - 「那么，开始上课吧。」
    -
    - 傍晚，休息室。
    - 青云天空趴在沙发上一动不动，像一条放弃挣扎的鱼。
    - 这姿势%YOU%很熟悉——%SEX%的「抗议模式」。
    - 一般出现在训练量超出%SEX%预期的时候，意思是「我累了我懒了我不要动了你自己看着办吧」。
    - %YOU%把水杯放在茶几上，在%SEX%旁边坐下。
    - 「该消消气了吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不可能。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今天我就赖在这了。」
    - 「诶呀，不都对上课叫你五次的事都道歉了嘛。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明是六次！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最后你都想不出理由了，还说『今天天不错啊，那下面这题，就由天空同学来答吧～』——这种离谱的理由！」
    - %SEX%的尾巴谁啊来甩去，来表示不满，
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且——」
    - %SEX%猛地坐起来，满脸通红的瞪着%YOU%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而且——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就因为你乱说我今天被议论了一天！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「什么『青云天空和训练员的关系好好啊』，什么『嘴上说来代课其实就是想多看看搭档吧』——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「还有人说『青云天空他们俩是不是在恋爱啊』——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哇！小青的清白啊！」
    - %SEX%双手捂住脸，往沙发上一倒。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你要怎么负责——」
    - 「好好好。」
    - %YOU%忍着笑。
    - 抗议的尾巴停住了。
    - 青云天空的手指微微分开一条缝，露出一只眼睛，偷偷瞄了%YOU%一眼。
    - 然后%SEX%飞快地把手指合上。
    - 装作还在思考的样子，但嘴角已经忍不住往上翘了。
    - 「那想要什么补偿？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯……让我想想啊……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「先去吃寿司。要那家贵的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「然后——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以后……你给我多补点课吧。」
    - 「补课？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对，小青的清白可不能白丢！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我要偷偷学，然后吓%SEX%们所有人一跳！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你说，这是不是也算是种策略？喵哈哈～」


# 经典年9月之后 根性+20 技能点数+40
ws_party:
  title: 优雅的茶会
  lines:
    - 训练室门口，青云天空被草上飞叫住。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小青，明天下午我办了个茶会，要不要一起来，正好带你看看茶道文化。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「茶道文化啊……」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「我新到了一批茶和点心哦～」
    - 青云天空眨了眨眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「点心！？我去！」
    - 草上飞微笑的回应道
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「那明天下午3点的茶道室，光环也来呢，别迟到。」
    -
    - 第二天下午，茶道室。
    - 圣王光环已经坐在榻榻米上，腰背挺得笔直，面前摆着一套精致的茶具。
    - 草上飞跪坐在主位，朝%SEX%招手。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小青，你来了，这边坐。」
    - 青云天空随意的盘腿一座，这时%SEX%注意到对面两位。
    - 对面两位都在跪坐——圣王光环跪得费力但很标准，草上飞跪得云淡风轻。
    - %SEX%默默把腿收起来，试着跪坐。
    - 3分钟后，腿开始发麻。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「首先——」
    - 草上飞捧起茶杯，慢慢的给两位演示起来。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「拿茶杯的时候，要用右手端起，左手托底。拇指不能碰到杯口，也不能发出声音。」
    - 青云天空看着自己手里的茶杯，想起自己平时喝茶都是直接拎起来灌的。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「像这样，要保持优雅。」
    - 圣王光环示范了一遍，动作行云流水，赏心悦目。
    - 青云天空试着模仿——茶杯在碟子上磕出一声脆响。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱歉抱歉。」
    - 草上飞微笑着点头
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「没关系，慢慢来。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「接下来是点心的吃法。」
    - 草上飞指着盘子里精致的小点心，上面还雕着花，但每一块都小得可怜。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「要从左边开始吃，用怀纸接着，不能直接用手拿。一口吃完，不能咬断，也不能有碎渣掉下来哦。」
    - 圣王光环拿起一块，动作优雅地送进嘴里，全程没发出一点声音，连嚼都没看见%SEX%嚼。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （欸～%SEX%这是直接吞下去的？）
    - 青云天空也有样学样的拿起一块。
    - 然后僵住了。
    - 点心卡在喉咙里，上不来下不去。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔——！」
    - 青云天空的耳朵竖得笔直，两只手在空中胡乱比划。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「噎到了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔唔！」
    - 青云天空疯狂点头。
    - 圣王光环立刻把桌上的水杯推到%SEX%面前。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「快喝！真是的，慢点吃啊……」
    - 青云天空一把抓过杯子灌下去，然后长叹一口气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼啊……得救了……」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小青，点心要细嚼慢咽，不能直接吞。」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「哈？你怎么想的，直接吞？」
    - 青云天空抬起头，幽怨地看着%SEX%。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你刚才明明也没嚼。」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「我嚼了啊，这叫优雅——」
    - 圣王光环慢条斯理的拿起茶杯，品了一口。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「嗯，今年的新茶真好，入口清爽，回甘也很柔和——」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「而且茶汤的色泽也很漂亮，透亮得能看见杯底的花纹呢。」
    - 草上飞附和道，随后倒了一杯给青云天空。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小青也试试？」
    - 青云天空端起茶杯，学着圣王光环的样子抿了一小口。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「感觉怎么样？」
    - 青云天空沉默了两秒。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……有点烫。」
    - 草上飞温柔的笑了笑。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小青的意思是，热茶更能品出香气吧。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯！嗯！嗯！」
    - 青云天空用力点头。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有一说一，比训练员泡的好喝多了～」
    -
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「说到茶具……」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「还有在茶会上的话题……」
    - 草上飞热情的介绍的茶道文化。
    - 青云天空费劲地跟着学。
    -
    - 一个小时后，茶会结束。
    - 青云天空一头趴在桌子上。
    - 草上飞收拾着茶具，笑着问。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「小青，今天感觉怎么样？」
    - 青云天空无精打采的回答道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「比跑三千还累。」
    - 草上飞愣了一下，然后捂嘴笑起来。
    - 圣王光环轻轻叹了口气，傲娇的说。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「那是因为你平时太懒散了，身为淑女，这些都要勤加练习……」
    - 青云天空偷偷看了一眼圣王光环。
    - 后者依旧跪得笔直，表情优雅，动作从容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「光环，茶话会都结束了哦～不用这么严肃了……」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「身为大小姐，保持优雅是基本修养。」
    - 青云天空一脸坏笑的说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你腿不麻吗？」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「……不麻。」
    - 草上飞收拾完茶具，回到桌子旁。
    - 青云天空站起来伸了个懒腰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小草！我知道有一家甜品店的布丁可好吃了！我带你们尝尝去。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「好啊，小青推荐的一定不错～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「光环，起来吧，小草都收拾完了。」
    - 圣王光环仍坐在那一动不动。
    - 一阵沉默后，%SEX%缓缓开口。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「……再坐一会儿。」
    - 青云天空看着一动不动的圣王光环，一脸坏笑的向草上飞喊道。
    - 草上飞心领神会的表示同意。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小草，光环好像不想去呢，咱们走吧——」
    - 两人走到门口，身后突然传来急促的声音。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「等、等一下！等一下！」
    - %SEX%们回过头，圣王光环还跪在原地，脸微微发红，一只手举在半空中。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「我……我也去啦……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那快点走啊——」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「腿……腿太麻了起不来了……」
    - 青云天空和草上飞捂着肚子笑了起来。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「别笑了！快来帮帮我啦！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好啦好啦～来了来了～」


# 资深年5月之后 根性+30 技能点数+30
ws_ramen:
  title: 魔女的拉面
  lines:
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「重大发现！」
    - 神鹰风风火火地冲进教师，一把抓住正在打盹的青云天空，又一把捞起旁边看书的特别周。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「商店街新开了一家拉面馆，有随机拉面大挑战！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「完成挑战还有神秘大奖！」
    - 青云天空打了个哈欠，揉了揉眼睛问道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「随机拉面？」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「就是——」
    - 神鹰两眼放光。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「进去先抽签，抽到什么面就得吃什么面！有爆辣的、超大碗的、还有传说中的魔女拉面！」
    - 特别周眼睛亮了。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「听起来好有意思！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「我要去我要去！上次的拉面挑战赛我可是冠军！」
    - 两人同时激动的看向青云天空。
    - 青云天空一脸平静的回应道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……那我就吃正常的……」
    - fontSize: 1.4rem
      content: 「不行！！！」
    - 两人异口同声。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「既然是挑战，当然要一起！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「对啊对啊！三个人就要整整齐齐！」
    - 青云天空看着两张写满期待的脸，叹了口气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……行吧。」
    -
    - 拉面馆。
    - 店面不大，但装修得很热闹，墙上贴满了各种挑战成功的照片。
    - 老板是个光头大汉，嗓门很大，笑起来十分热情。
    - content:
        - fontWeight: bold
          content: 老板
        - 「欢迎光临！三位想来点什么？」
    - 神鹰低着头冷笑道。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「哼哼哼～那当然是——随机拉面大挑战！」
    - 此话一出，老板热情的脸立刻严肃下来，阴沉的说道
    - content:
        - fontWeight: bold
          content: 老板
        - 「你们……想好了吗……」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「对！」
    - 神鹰拍着胸脯。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「不论多辣的拉面，我都不怕！」
    - 特别周跟着点头。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「不论多少面，我都吃得下！」
    - 青云天空张了张嘴，还没来得及说话，神鹰一把搂住%SEX%的肩膀。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「这个挑战！今天我们拿下了！」
    - 老板哈哈大笑道。
    - content:
        - fontWeight: bold
          content: 老板
        - 「好！有气势！来——抽签！」
    - 柜台上的木盒里摆着一排竹签。
    - 特别周第一个伸手，抽出一根，上面写着——爆辣拉面。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「呜啊！神鹰！这应该是你的！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「不要畏惧！小特！挑战者要有挑战者的气魄！」
    - 神鹰第二个，抽出一根——超大碗拉面。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「……小特……咱俩换换？」
    - 老板轻轻咳了两声。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「哼！不就是超大碗，我才不怕！」
    - 两人看向青云天空。
    - 青云天空伸手进去，摸出一根。
    - 上面写着——魔女拉面。
    - 神鹰眼睛亮了。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「哦哦哦！魔女！听起来就很厉害！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「魔女拉面是什么？」
    - 特别周好奇的问老板。
    - content:
        - fontWeight: bold
          content: 老板
        - 「这个嘛……是我们店的隐藏款，怎么做的不能透露，反正——」
    - 老板挠了挠头，看向青云天空，意味深长的说
    - content:
        - fontWeight: bold
          content: 老板
        - 「小姑娘，祝你好运。」
    - 青云天空握着那根竹签，一脸的怀疑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「额……搞这么神秘……」
    -
    - 三碗面上桌。
    - 特别周面前——红得发亮的一碗。连面的颜色都是红的，光是看着就让人鼻子发痒。
    - 神鹰面前——一个盆。直径快赶上%SEX%脸长，小料堆得像座小山。
    - 青云天空面前——
    - 一碗普通的拉面。
    - 普通的汤，普通的面，普通的叉烧，普通的葱花，量比平时的多，汤可能更浓一些，但和神鹰小特的比差得远。
    - 三人愣住了……
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「……就这？」
    - 老板嘿嘿一笑
    - content:
        - fontWeight: bold
          content: 老板
        - 「魔女嘛，外表普通才叫魔女。吃吧吃吧！」
    - 神鹰将信将疑地看了那碗面一眼，然后把自己的盆往面前拉了拉。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「不管了！开战！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「开战！」
    -
    - 十分钟后……
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「水、水——！」
    - 特别周第一个败下阵来，脸涨得通红，眼泪哗哗地流，抱着水壶猛灌。
    -
    - 又过了十分钟……
    - 神鹰的脸也开始发白。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「不行了……我真的吃不下了……」
    - %SEX%面前的盆才下去一半，人却不受控的向后倒去。
    - 肚子像球一样高高鼓起。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「唔……我、我认输……」
    -
    - 再过了十分钟……
    - 青云天空放下筷子。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼啊～饱了饱了～味道真不错～」
    - %SEX%拿起旁边的纸巾擦了擦嘴，看向旁边两位。
    - 特别周趴在桌上，还没缓过劲。
    - 神鹰仰面靠在椅子上，双手摸着高高隆起的肚子，眼神空洞。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喂——两位——我吃完了哦——」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「吃完了！？」
    - 神鹰艰难地转过头，看着%SEX%那只剩汤的空碗，眼睛瞪得老大。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「有没有什么特别的感觉？或者奇特的味道？」
    - 青云天空歪着头想了想。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嘛……好像没什么太特殊的，最多就是——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「面硬加咸蔬菜加倍蒜末和油多多！」
    - 青云天空愣了下，好像刚才的话自己脱出口。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「没了？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奇怪……不过好像确实是这样……」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「那为什么叫魔女？！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不知道。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「可能吃完会实现愿望？倒流时空？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我瞎说的，喵哈哈～」
    - 特别周从手臂里艰难的抬起头，脸上还挂着泪痕。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「小青……你是不是又套路我们了……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有啦……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「老板不是说了嘛——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外表普通才叫魔女啦……」


# 外出-去约会 3次后 下回合结束时触发
we_sword_vs_shield_1:
  title: 最利的剑？VS 最硬的盾！
  lines:
    - %YOU%最近有点不对劲。
    - 每次和青云天空出门都会遇到点小麻烦，但都不是什么大事，%YOU%顺手就解决了。
    - 但青云天空心里门清——这都是计策。
    - 为了让训练员更迷恋%SEX%，更依赖%SEX%的计策。
    - 然而不管%SEX%怎么制造机会，%YOU%永远都是一副理所当然的样子。
    -
    - 这天外出回来，青云天空终于忍不住了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员。」
    - 「嗯？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你真的是……太坦率了。」
    - %YOU%愣了一下
    - 「额……哈？」
    - 青云天空停下脚步，尾巴在身后不满的甩了甩。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就是你平常都不会害羞的吗？一直这么冷静？」
    - 「……所以呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我这么一个美少女欸！」
    - %YOU%被%SEX%一本正经的控诉逗乐了。
    - 「笑什么！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没什么。」
    - %YOU%看着%SEX%气鼓鼓的样子，打趣道
    - 「那你要不要好好准备，试试让我害羞？」
    - 青云天空眨了眨眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……正面让你害羞？」
    - 「嗯，正面。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行。」
    - %SEX%尾巴一甩，用手一指。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三天后，你等着。」
    -
    - 三天后。
    - 训练结束后的走廊，夕阳从窗户斜斜地照进来。
    - 青云天空把%YOU%叫到一旁，表情十分严肃。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，我有话跟你说。」
    - %YOU%靠在墙上，双手叉腰，做好了战斗姿态。
    - 「来吧。」
    - 青云天空深吸一口气。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （三天……我准备了三天。台词背了十几遍，表情练了无数次……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （现在，就是现在。）
    - %SEX%抬起头，脸微微泛红的看着%YOU%的眼睛。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员，其实我一直——」
    - %YOU%看着%SEX%，眼神平静，嘴角带着一点笑意。
    - 青云天空的耳朵抖了抖。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我、我是说……从第一次见面的时候……」
    - 青云天空的声音开始发飘。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就、就觉得你这个人……那个……挺、挺……」
    - %YOU%歪了歪头，脸凑近一点。
    - 「挺什么？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「挺——」
    - %SEX%张了张嘴，卡住了，脸开始发烫。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「就、就是……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行！」
    - %SEX%猛地双手捂住脸，转过身去蹲下，尾巴死死夹在两腿之间。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……不行了……我说不出口……」
    - %YOU%愣了一下，然后笑出声。
    - 「这就是你准备了三天的大招？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呜——别说了——」
    - %SEX%的耳朵红得快要滴血，整个人缩成一团。
    - %YOU%走到%SEX%面前，蹲下来摸摸%SEX%的头。
    - 「小青。」
    - 「下次继续努力。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……什么嘛！」
    - 青云天空猛地起身，满脸通红的指着%YOU%说道。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你等着！下次……下次我一定会说完的！」
    - 说完便立刻逃离现场。
    - %YOU%看着%SEX%落荒而逃的背影，那只炸毛的尾巴在走廊拐角一晃就消失了。
    - 「我等你啊——」
    - %YOU%冲那个方向喊道。
    - 走廊尽头传来一声不知道是「知道啦」还是「笨蛋」的嘟囔，脚步声哒哒哒地跑远了。


# 外出-去约会 5次后 下回合结束时触发
we_sword_vs_shield_2:
  title: 最利的剑！VS 最硬的盾？
  lines:
    - 在一个轻松惬意的下午，%YOU%和青云天空走在校园里，前方有为%UMA%正卖力的吆喝，周围围了一圈抢着购买的%UMA%。
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「特雷森日报！特雷森日报来了！」
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「今日超级头条是『当你喜欢的人对你壁咚时，你会怎么做？』」
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「采访者的反应你肯定意想不到！我们采访了皇帝社长在内的众多著名%UMA%！详情请看特雷森日报！欢迎各位购买！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「诶……？好多人啊……」
    - 「谁不想知道大名鼎鼎的皇帝被壁咚时的反应呢？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「估计是%SEX%壁咚%SEX%的训练员吧，喵哈哈～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你这么一说我都有点感兴趣了～我去买一份！」
    - 青云天空扎进热闹的人群，过了一小会，青云天空费劲的挤了出来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈……抢……抢到了……真疯狂啊%SEX%们……」
    - 你们在附近的长椅上坐下，看起了头版头条。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「嗯？光环也被采访了，先看这个！」
    -
    - （采访）
    - if: era.get('cflag:61:招募状态') > 0 && era.get('love:61') >= 50
      lines:
        - content:
            - fontWeight: bold
              content: 记者
            - 「光环小姐！身为一名一流的赛%UMA%，您无时无刻向我们展示着身为帝王的优雅与强大，今天趁这个机会，我能对您进行一些采访吗？」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「啊——哈哈！当然，随便问吧～」
        - content:
            - fontWeight: bold
              content: 记者
            - 「好的，今天我想向您提问的是『当你喜欢的人对你壁咚时，你会怎么做？』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - （！！！）
        - 圣王光环听到问题后身体瞬间一僵，标志性的手势停在半空，一动不动。
        - content:
            - fontWeight: bold
              content: 记者
            - 「那个……光环小姐？」
        - 圣王光环回过神来，立刻轻咳两声找回状态。
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「啊……咳咳……额……刚刚有点被你的问题吓到了……我们继续……」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「如果我的训练员突然对我壁咚的话——」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「身为一名一流的赛%UMA%，面对这种突发事件，一定是临危不乱，然后落落大方的回应。」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「我嘛，肯定会先从容的反问回去，比如『突然凑这么近……是打算说什么正经话吗？』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「然后会说：『没准备好台词的话，可是不够优雅的哦～』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「怎么样，这就是一流的回答～」
        - content:
            - fontWeight: bold
              content: 记者
            - 「太精彩了，非常感谢您。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「这个记者还真是笨呢……」
        - 「为什么这么说？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明明有『训练员是%SEX%喜欢的人』这个更大的新闻，他们竟然没关注！」
        - 「哈哈，可能光环讲的太好了吧，关注点全在那。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「怎么可能！训练员，我跟你打赌，你如果真壁咚这家伙肯定直接害羞的说不出话！」
    - if: era.get('cflag:61:招募状态') <= 0 || era.get('love:61') < 50
      lines:
        - content:
            - fontWeight: bold
              content: 记者
            - 「光环小姐！身为一名一流的赛%UMA%，您无时无刻向我们展示着身为帝王的优雅与强大，今天趁这个机会，我能对您进行一些采访吗？」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「啊——哈哈！当然，随便问吧～」
        - content:
            - fontWeight: bold
              content: 记者
            - 「好的，今天我想向您提问的是『当你喜欢的人对你壁咚时，你会怎么做？』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - （！！！）
        - 圣王光环听到问题后身体瞬间一僵，标志性的手势停在半空，一动不动。
        - content:
            - fontWeight: bold
              content: 记者
            - 「那个……光环小姐？」
        - 圣王光环回过神来，立刻轻咳两声找回状态。
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「啊……咳咳……额……刚刚有点被你的问题吓到了……我们继续……」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「虽然本小姐喜欢的人目前还是空位，但我可以假设一下来回答你。」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「身为一名一流的赛%UMA%，面对这种突发事件，一定是临危不乱，然后落落大方的回应。」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「我嘛，肯定会先从容的反问回去，比如『突然凑这么近……是打算说什么正经话吗？』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「然后会说：『没准备好台词的话，可是不够优雅的哦～』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「怎么样，这就是一流的回答～」
        - content:
            - fontWeight: bold
              content: 记者
            - 「太精彩了，非常感谢您。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「没准备好台词的话，可是不够优雅的哦～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「噗——哈哈哈！我不行了！哈哈哈！」
        - 青云天空学着圣王光环的标志性手势，然后模仿起%SEX%采访的样子，最后自己先绷不住大笑起来。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员，我跟你打赌，真被壁咚这家伙肯定直接害羞的说不出话！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来吧，看看下一个——这次的头条鲁道夫社长！」
    -
    - （采访）
    - if: era.get('cflag:61:招募状态') > 0 && era.get('love:61') >= 50
      lines:
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「被壁咚时的反应，真是大胆的问题啊。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「我嘛，估计先会被震惊一下，然后迅速分析形势。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「最后我估计会往前更凑近一点，捧住他的后脑勺。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「说『用这种方式讨我欢心吗，真是老套呢，不过看在你如此努力的份上，我也你一点奖励吧～』」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「至于奖励，那只能由我的有心上人知道了～」
        - content:
            - fontWeight: bold
              content: 记者
            - 「特雷森社长的心上人！请问他是谁！或者您能聊一下他吗？」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「哈哈，这个话题回头再说吧。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……你还挺受欢迎的嘛……」
        - 「你怎么肯定是我？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「废话！都在一个队伍里啊！」
        - 「吃醋了？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「才没有！哼——接着往下看吧——」
    - if: era.get('cflag:61:招募状态') <= 0 || era.get('love:61') < 50
      lines:
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「被壁咚时的反应，真是大胆的问题啊。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「我嘛，估计先会被震惊一下，然后迅速分析形势。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「最后我估计会往前更凑近一点，捧住他的后脑勺。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「说『用这种方式讨我欢心吗，真是老套呢，不过看在你如此努力的份上，我也你一点奖励吧～』」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「至于奖励，那得等我有心上人的时候再说了～」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「怎么样，是不是有点太普通了……」
        - 鲁道夫象征皱着眉头说道。
        - content:
            - fontWeight: bold
              content: 记者
            - 「一点也不！太精彩了！这就是传说中『皇帝』的霸气吗，今天算是感受到了！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……感觉一点也不意外呢……」
        - 「反击的好干脆，估计学生会的管理层都这么强势呢。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……司机前辈和千明前辈估计会直接反过来挑逗吧，喵哈哈～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「来吧，来吧，接着往下看……」
    - %YOU%和青云天空有说有笑的看着报纸……
    - ………
    - ……
    - …
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊哈～看完了～真有意思～」
    - 青云天空站起身伸了个懒腰。
    - 「开眼界了，对了，如果小青被壁咚会怎么样，直接害羞到不敢说话？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「怎么可能！你忘了上次我跟你的对决！我可是给你挑逗的脸红脖子粗！」
    - 「我怎么记着你当时直接红着脸跑了，跑的可快了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那是你最后犯规！我没准备好才……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「总之有了上次的经验我才不会害羞呢！应付你肯定随随便便！」
    - 「嗯嗯嗯～小青最厉害了～走吧，差不多到饭点了～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊对！今天有鳗鱼饭！出发！」
    -
    - %YOU%和青云天空走在通往食堂的路上。
    - （随随便便应付我吗，要不……）
    - 砰！
    - %YOU%趁青云天空不注意，左手放在胸口，闭着眼低着头，右手一个壁咚给%SEX%撑到了旁边的墙上。
    - %YOU%然后缓缓张开眼，抬起头，说出了刚刚准备好的词。
    - 「美丽的%CHARA_FULL%，你是否……」
    - 结果面前只有一堵墙……
    - （嗯？青云天空呢？应该成功了啊？%SEX%又跑了？）
    - 原以为壁咚成功的%YOU%呆愣在原地，环顾四周也看不到青云天空的身影。
    - 「奇怪……不应该啊……」
    - %YOU%低下头思考起来，结果看见——
    - 青云天空满脸通红脑袋冒烟的晕倒在地……
    - 「小青！！！」
