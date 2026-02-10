# @file 梦之旅 - 地下室
# @author 幽白書
welcome:
  sync: true
  lines:
    - %YOU% 悠悠醒转……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「睡得还舒服吗，%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果舒服的话那就太好了……神经大条？不，不是的。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这说明，哪怕只是浅意识，您也已经将这里视作能安心的地方……视作『家』了，不是吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不是啊……但，对我来说，就是这样的哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「只有有您在的地方，才是我的归处。」

flatter:
  - random: true
    lines:
      - 「对不起，%Y_CALL_119%，一定是我做了什么惹 %Y_CALL_119%不开心的事吧，我会改的……」
      -
      - 总而言之，先道歉吧。
      - %CHARA% 听完之后靠近了 %YOU%。
      - 然后………用手指抵住了 %YOU% 的嘴。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘘……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「请不要用我最喜欢的那张嘴，吐出这样的谎言……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「其实，您根本不觉得自己有什么做错吧？」
      -
      - %YOU% 犹豫再三，还是点了点头。
      - %CHARA% 露出责备的表情，将身体俯了过来。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「您的唇舌，不是为了谎言而存在的……不过没有关系，就让我来教育它，它的存在意义为何吧……啾……嗯……咕啾……」
  - random: true
    lines:
      - 「对不起，%Y_CALL_119%，我仔细想了想，果然还是不知道……是我不小心在什么时候惹你不高兴了吗？才让你把我关在这里……」
      -
      - 不管三七二十一的道歉来取得 %CHARA% 的原谅固然容易……
      - 但这样欺骗 %CHARA% 果然还是不太好的吧……
      - 最起码，要在知道错在哪里之后才道歉。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……您的诚实，还是一如既往的令人欣喜……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过……没有，您没有做错任何事，只是，我的心因无法独占您的爱而感到焦虑而已……」
      -
      - 「可是……」
      -
      - %YOU% 想再说些什么，然而嘴唇却被堵住。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……嗯，我改变想法了……%CALLNAME%，您确实错了……你的唇，太过聒噪了……请您好好的发挥它唯一的用途……用来倾诉对我的爱意❤️」

strike_success:
  # EXPNAME:25 - 26 = 性爱次数 - 睡奸次数
  - if: t = (era.get('exp:119:25') - era.get('exp:119:26')) >= 10
    lines:
      # @author 黑奴队长
      - %YOU% 对梦旅的身体太熟悉了
      - 毕竟 %YOU% 那么多次探索过%SEX%的每一寸肌肤，每一个角落
      - 所以像现在这样，只是在某个地方轻轻一点，就让%SEX%面色潮红呼吸急促地瘫软在地，也是很正常的吧？
      - %YOU% 抬起头，眼前是缝隙透着名为自由的微光的铁门；低头，面前躺着 %YOU% 的功绩、骄傲、挚爱与罪孽
      - %YOU% 抱起因高潮余韵无法行动的娇小身体，慢慢走出爱巢与牢房
      - 至少，不应该让%SEX%躺在这里
  - if: t < 10
    lines:
      # @author 幽白書
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「到最后……我也还是无法获得您的信任吗？」
      # CFLAGNAME:1 = 种族
      - if: "!era.get('cflag:0:1')"
        content: 虽然是人类的力气，但对 %CHARA% 这样娇小的%UMA%却也已经足够
      - %CHARA% 露出了悲伤的表情，缓缓倒地……
      - %YOU% 逃离了地下室……

strike_fail:
  - 失败了……
  - %CHARA% 转过头来，要生气了吗？
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……很努力了哦……」
  -
  - %CHARA% 轻轻地抱住了 %YOU%。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「努力学习了自己不擅长的技术……真的，要是稍微再用力一些，就能让我陷入短暂眩晕了……」
  - %CHARA% 娇小的身躯，更紧地钻入怀中。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「但除此之外，人体也还是有着其他可以利用的弱点……比如……」
  -
  - %CHARA% 环抱的手，以不轻不重的力道敲中了腰上的某个地方。
  - 瞬间，身体变得动弹不得……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那么，请和我回去好好学习吧……关于人体的知识❤️」
  -
  - %YOU% 陷入了黑暗……

battle_escape:
  - 解开了。
  - 最后一层锁……看着熟悉的钥匙孔形状，%YOU% 回到晕倒在地的 %CHARA% 身旁。
  - 那熟悉的形状，不正是 %CHARA% 的耳饰吗？
  -
  - %YOU% 将 %CHARA% 的头饰在不惊醒对方的情况下轻柔取下，将最后一层机关打开。
  -
  - 随着机关的打开，一捲被卷起的信纸落到了 %YOU% 的手上。
  - 信纸中书写着对 %YOU% 的爱意及歉意。
  -
  - ……这是真情流露写下的告白吗？
  - 又或者，是又一层的算计？
  - 看着依旧躺在地上的 %CHARA%，%YOU% 犹豫了一会。
  - %YOU% 回到 %CHARA% 身边，将那瘫软的身体背起。
  - 最起码，这个地下室绝对不是适合%SEX%待的地方……

battle_prison:
  - 前面的机关都解开了。
  - 最后一层锁……看着熟悉的钥匙孔形状，%YOU% 却怎么也想不起，到底在哪里看过这样的东西。
  -
  - 时间缓缓流逝，%YOU% 无助的用力拉扯门锁，却毫无帮助……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「打不开吗，%CALLNAME%？」
  -
  - 终于，身后的声音响起。
  - 徒劳的挣扎已经结束。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……果然，还是无法取得您的信任啊，令人难过……」
  -
  - 明明说着难过，但却看不出有任何沮丧的表现。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不过……据我所知，信赖是可以培养的，我相信，只要 %CALLNAME% 对我了解的更多，一定会更加信任我的吧？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「所以请，更加了解我的身体，我的一切吧……」
  -
  - 连抵抗的机会都没有，%YOU% 便被 %CHARA% 按倒在地……
  - 只余 %CHARA% 的头饰在地下室昏暗的灯光下闪烁着银色的光芒……

find_escape:
  sync: true
  lines:
    - if: d.is_back
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「哎呀……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……您尝试打开这个锁了吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「打不开？……呵呵，那真是令人高兴的消息。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「像您一样正直的人，是绝对打不开这样的锁的……这是，为了我这种心思扭曲之人而准备的锁……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「所以，对于您无法将这锁打开这件事，我感到由衷的庆幸及欢喜。」
    - if: "!d.is_back"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「无法解开吗？」
        -
        - 听见 %CHARA% 的声音，%YOU% 下意识投降般地将手举起。
        - %CHARA% 不慌不忙的走到 %YOU% 身旁，只用一根铁丝，快速两下，连 %YOU% 都看不清对方到底做了什么。
        - 困了 %YOU% 许久的锁就在眼前轻而易举的被解开了。
        - 随后，锁又被关了回去。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呵呵……作为余兴表演，还满意吗？%CALLNAME%？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「不必感到灰心……适才适所，由于父亲是金匠的关系，在这些机关上我也略有心得而已。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%，不是也有自己更擅长的事吗？比如……床第之事❤️」
    -
    - %YOU% 被 %CHARA% 带回了床边……

get_up:
  sync: true
  lines:
    - %CHARA% 醒了过来……
    - if: d.b_start
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯……%CALLNAME%，睡得还好吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「为什么会在这里……比起这个，抱起来的手感如何呢？这正符合某人兴趣的娇小身躯。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……很舒服……吗？呵呵，您的诚实还是一如既往的令人心喜。」

back_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%，我回来了。」
    - if: d.b_start
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……啊，%CALLNAME% 醒了吗？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「总之，我回来了。嗯……啾……咕啾……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「我在做什么？只是回家时的仪式而已。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「地下室？不，家指的，当然是您了……我最亲爱的，肉体与灵魂的归属❤️」

start_fixing:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊，%CALLNAME%，可以帮我个忙吗？」
    # CFLAGNAME:6 = 身高
    - if: era.get('cflag:0:6') > era.get('cflag:119:6')
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是的，请扶我一下……这个梯子，稍微有点抖呢……真是惭愧，由于身高不够，让您看见了这样的丑态。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呼……好了，谢谢您。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「在做什么？只是在给门上新的锁而已……感谢您的帮助。」
    -
    - ……早知道就不帮%SEX%了……

out:
  sync: true
  lines:
    - %CHARA% 还有其他的事要做，即将离开……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「对不起，%CALLNAME%……我必须先离开了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「如果有什么烦恼的话可以为我分忧……？明明我是将您监禁在这里的人，您却依然希望能够帮上我的忙吗？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真是个烂好人呐……不过，不用了，因为您只需要待在这里，作为我唯一的『归处』，就已经是帮我最大的忙了。」

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我怎么会拦着您离开呢？」
  -
  - 太好了，%SEX%同意了。
  - 欣喜若狂的 %YOU% 深怕%SEX%反悔般的朝着出口离开。
  - 然而……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「啊，%CALLNAME%，请稍等一下。」
  -
  - 想要离开。
  - 想要快点看见外面的阳光。
  - 所有的愿望………却因忽然僵硬的双腿而化为空想。
  -
  - %CHARA% 走到身旁，为 %YOU% 将衣领整好，将衣服上每一折自己弄皱的衣角理顺，为 %YOU% 拍去这几天被困于室内沾染的尘埃。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「外面的虫子很多，%CALLNAME% 出去一定要当心……千万小心，不要再被虫子们缠上了。」
  -
  - 「再」被缠上的后果，是什么？
  - 看着%SEX%淡笑的嘴角和毫无笑意的眼神，答案不言自明。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「整理好了，%CALLNAME%……请继续吧。」
  -
  - 在允许的话语说出口后，自己的身体又恢复了动弹。
  - %YOU% 再度朝着出口离去……这次却变得不慌不忙。
  - 哪怕离开了地下室，%YOU% 的心也无法从 %CHARA% 的掌控中逃出。
  - 彷佛这样的印痕，深深烙印在 %YOU% 的心中。

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「我怎么会拦着您离开呢？」
  -
  - 太好了，%SEX%同意了。
  - 然而，越是靠近门，平常总围绕在自己身旁的香气就越发淡薄，身体也越加难受。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哎呀，您怎么回来了？看来……还是我的身边更适合您吧？」
  -
  - %YOU% 已经离不开 %CHARA% 了———仿佛只是为了证明这点，才放任 %YOU% 离去。
  - 地下室的支配者，露出了从容的笑容

ask_time:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「现在的 %CALLNAME%，身上的味道我很满意。」
  - 答非所问的 %CHARA% 嗅了嗅 %YOU% 的手腕，那里挥发着最为浓郁的香味。
  - ——只属于 %CHARA% 的香味。
