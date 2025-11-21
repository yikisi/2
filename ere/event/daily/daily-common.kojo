回合开始:
  sync: true
  lines:
    # @author 雞雞
    - random: true
      lines:
        - %CHARA% 竖起了大拇指。
    - random: true
      lines:
        - %CHARA% 看起来吃撑了，肚子变得圆鼓鼓的。
    - random: true
      lines:
        - %CHARA% 正在专心地阅读着什么。
    - if: era.get(`cflag:${d.id}:成长阶段`) < 5
      random: true
      lines:
        - %CHARA% 正在与同学们愉快地聊天。
    - if: "!(era.get('cflag:301:育成回合计时') < 3 * 48)"
      random: true
      lines:
        - %CHARA% 正在接待处向 %骏川% 查询着什么。
    # @author 幽白書
    - if: era.get(`talent:${d.id}:情感活动`) === 1
      random: true
      lines:
        - %CHARA% 兴奋地和 %YOU% 说着周末从电视上看到的笑话，说到一半自己却先忍不住笑了出来。
    - if: era.get(`talent:${d.id}:情感活动`) === 1
      random: true
      lines:
        - %CHARA% 说着周末看的电视剧剧情，说着说着又忍不住哭了起来。
    - if: era.get(`talent:${d.id}:情感活动`) === 1
      random: true
      lines:
        - %YOU% 看到 %CHARA% 正和几名%UMA%围在一起，似乎在说恐怖故事的样子，不一会 %CHARA% 就被吓的脸色发白。
    - if: era.get(`talent:${d.id}:情感活动`) === -1
      random: true
      lines:
        - %YOU% 看到 %CHARA% 的头发里插着一根小树枝，直到 %YOU% 拿下来 %CHARA% 才发觉自己头上有异物。
    - if: era.get(`talent:${d.id}:情感活动`) === -1
      random: true
      lines:
        - %YOU% 数落着 %CHARA% 直接在训练室里换衣服的行为，却得到了对方不解自己为何不能这么做的神情作为回复。
    - if: era.get(`talent:${d.id}:情感活动`) === -1
      random: true
      lines:
        - %CHARA% 似乎在和其他%UMA%谈论恋爱八卦，%YOU% 看见 %CHARA% 不停的追问正在恋爱的%UMA%问题，直到对方面红耳赤逃跑才罢休。
    - if: era.get(`talent:${d.id}:自信程度`) === 1
      random: true
      lines:
        - 在走进训练室的时候，%YOU% 听到 %CHARA% 日常说出了贬低自己的发言。
    - if: era.get(`talent:${d.id}:自信程度`) === 1
      random: true
      lines:
        - %YOU% 和 %CHARA% 打招呼的时候，莫名其妙的被 %CHARA% 安慰了。
    - if: era.get(`talent:${d.id}:自信程度`) === 1
      random: true
      lines:
        - %YOU% 摸了摸 %CHARA% 的头，不知为何 %CHARA% 却误会成了 %YOU% 要责罚 %CHARA%，战战兢兢的闭上了眼睛。
    - if: era.get(`talent:${d.id}:自信程度`) === -1
      random: true
      lines:
        - %CHARA% 站在训练场的正中央，高傲的态度仿佛自己是世界之王一般。
    - if: era.get(`talent:${d.id}:自信程度`) === -1
      random: true
      lines:
        - %CHARA% 站在看台上，对训练场上其他%UMA%的跑法指指点点，做出带着个人看法的评价。
    - if: era.get(`cflag:${d.id}:种族`) > 0 && era.get(`talent:${d.id}:自信程度`) === -1
      random: true
      lines:
        - %CHARA% 发出叹息，感叹学园中没有能与其一较高下的对手。
    - if: era.get(`talent:${d.id}:痛苦感受`) === 1
      random: true
      lines:
        - %CHARA% 摔了一跤，抬起头时 %YOU% 看见%SEX%眼眶中含着泪水。
    - if: era.get(`talent:${d.id}:痛苦感受`) === 1
      random: true
      lines:
        - %CHARA% 在和朋友玩耍，惩罚游戏是弹额头一下，%YOU% 看到输了的 %CHARA% 露出了害怕的神情。
    - if: era.get(`talent:${d.id}:痛苦感受`) === 1
      random: true
      lines:
        - %CHARA% 在和朋友们聊电影，听见电影中血腥的剧情，%CHARA% 的双耳不由得盖了下来。
    - if: era.get(`talent:${d.id}:痛苦感受`) === -1
      random: true
      lines:
        - %CHARA% 重重摔了一跤，正当 %YOU% 在担心 %CHARA% 时，%CHARA% 好像什么也没发生一样，拍了拍身子就爬起来了。
    - if: era.get(`talent:${d.id}:痛苦感受`) === -1
      random: true
      lines:
        - %CHARA% 跌倒了，%YOU% 帮 %CHARA% 处理着伤口，处理好抬头一看，%CHARA% 竟然不知不觉睡着了。
    - if: era.get(`talent:${d.id}:痛苦感受`) === -1
      random: true
      lines:
        - %CHARA% 在分享着忍耐疼痛的诀窍……虽然是让人感到意义不明的主题，但似乎有蛮多人正认真的倾听并做着笔记。
    - if: era.get(`talent:${d.id}:恐惧感受`) === 1
      random: true
      lines:
        - %CHARA% 躲在操场的角落，似乎不想与周围那些太过阳光的人有所接触。
    - if: era.get(`talent:${d.id}:恐惧感受`) === 1
      random: true
      lines:
        - %CHARA% 独自蜷缩在训练场阴影处，用树枝在地面画着重复的螺旋图案。
    - if: era.get(`talent:${d.id}:恐惧感受`) === 1
      random: true
      lines:
        - %YOU% 发现 %CHARA% 正对着自动贩卖机的反光玻璃低声自言自语。
    - if: era.get(`talent:${d.id}:恐惧感受`) === -1
      random: true
      lines:
        - %YOU% 发现 %CHARA% 偷偷把蒲公英种子吹向天空，转头露出恶作剧成功的灿烂笑容。
    - if: era.get(`talent:${d.id}:恐惧感受`) === -1
      random: true
      lines:
        - %CHARA% 把训练用轮胎滚成巨大圆环，哼着走调的Live曲在草坪上推着轮胎奔跑。
    - if: era.get(`talent:${d.id}:恐惧感受`) === -1
      random: true
      lines:
        - %CHARA% 抱着运动饮料边走边跳，头髮随风飞舞飘动。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === 1
      random: true
      lines:
        - %CHARA% 躲在训练员室窗帘后翻阅图书，听到脚步声立即将书合拢抱在胸前。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === 1
      random: true
      lines:
        - %CHARA% 反复调整自动贩卖机投币口的角度，确保硬币垂直落入时不会发出声响。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === 1
      random: true
      lines:
        - 训练员室的柜子后面微微晃动，%CHARA% 正躲在后面换衣服，被 %YOU% 发现后满脸通红。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === -1
      random: true
      lines:
        - %YOU% 被 %CHARA% 突然背起冲向训练场，说要让 %YOU% 体验风速的快感。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === -1
      random: true
      lines:
        - %CHARA% 将跳马拼在一起，召集训练场上的%UMA%们比赛谁能一次跳过最多的跳马。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === -1
      random: true
      lines:
        - %CHARA% 坐在训练场的入口，让所有路过的%UMA%都要说一个冷笑话才准过。
    - if: era.get(`talent:${d.id}:反感获取`) === 1
      random: true
      lines:
        - %CHARA% 瞪着路过的%UMA%，被%SEX%瞪到的孩子都发出了害怕的悲鸣。
    - if: era.get(`talent:${d.id}:反感获取`) === 1
      random: true
      lines:
        - %CHARA% 用喷漆在障碍栏涂鸦，发现 %YOU% 后挑衅地把沾到指尖的颜料涂在墙上。
    - if: era.get(`talent:${d.id}:反感获取`) === 1
      random: true
      lines:
        - 更衣室传来刺啦声响，%CHARA% 正将制服袖口剪的坑坑洞洞，线头散落满地。
    - if: era.get(`talent:${d.id}:反感获取`) === -1
      random: true
      lines:
        - 器材室透出暖黄灯光，%CHARA% 正用绷带给老旧杠铃片缠绕防撞缓冲带。
    - if: era.get(`talent:${d.id}:反感获取`) === -1
      random: true
      lines:
        - %CHARA% 拿着许多瓶运动饮料站在训练场旁，看到训练得满头大汗的%UMA%就会向前递上。
    - if: era.get(`talent:${d.id}:反感获取`) === -1
      random: true
      lines:
        - %CHARA% 清理着训练场上的碎石，以免有人跌倒时被尖锐的石头二次伤害。
    - if: era.get(`talent:${d.id}:反抗意愿`) === 1
      random: true
      lines:
        - %YOU% 的日程表被 %CHARA% 用马克笔划掉，改成了 %CHARA% 安排的事情。
    - if: era.get(`talent:${d.id}:反抗意愿`) === 1
      random: true
      lines:
        - %YOU% 的训练员室中被塞满了 %CHARA% 不由分说摆放在房间里的各式东西。
    - if: era.get(`talent:${d.id}:反抗意愿`) === 1
      random: true
      lines:
        - 明明没有事先说好，%CHARA% 却一副理所当然的让 %YOU% 今天放学后陪 %CHARA% 去买东西。
    - if: era.get(`talent:${d.id}:反抗意愿`) === -1
      random: true
      lines:
        - %YOU% 发现 %CHARA% 站在训练员室门前反复抬手，却始终不敢敲响训练员室的门。
    - if: era.get(`talent:${d.id}:反抗意愿`) === -1
      random: true
      lines:
        - %CHARA% 被突然启动的洒水器吓得跌坐在地，满脸错愕。
    - if: era.get(`talent:${d.id}:反抗意愿`) === -1
      random: true
      lines:
        - 训练员室里的储物柜轻微晃动着，%CHARA% 正蜷缩在里面躲避突如其来的并跑邀请。

生日:
  # @author 阿格尼斯数码公司
  - 为 %CHARA% 筹备了一场盛大的生日派对！
  - random: true
    lines:
      - %CHARA% 作为生日的主角，非常高兴的样子
  - random: true
    lines:
      - %CHARA% 在摇曳的烛光中闭上眼睛，许下了今年的生日愿望
  - random: true
    lines:
      - %CHARA% 被大家的快乐所感染，脸上一直带着笑容
  - if: era.get(`talent:${d.id}:社交态度`) === -1 && era.get(`exp:${d.id}:过生日次数`) === 0
    random: true
    lines:
      - 经常客串各种各样聚会场景的 %CHARA%，完全没有意料到%YOU%会为%SEX%策划一个生日派对，只是在惊喜中和你们度过了欢快的一天
  - if: era.get(`talent:${d.id}:社交态度`) === -1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - 话虽如此，%CHARA% 在得知你的热情后，成功把%YOU%为%SEX%筹划的生日派对变成了从未预料过的全校性生日庆典……！
  - if: era.get(`talent:${d.id}:社交态度`) === -1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - 话虽如此，%CHARA% 似乎自己为自己筹办了另外一半的生日派对，两场生日派对融合在一起，产生了巨大的规模拓展……！
  - if: era.get(`talent:${d.id}:社交态度`) === 1 && era.get(`exp:${d.id}:过生日次数`) === 0
    random: true
    lines:
      - %CHARA% 似乎未曾预料会有这样一个派对，看到派对上出现的众人显得有些战战兢兢
      - if: era.get(`cflag:${d.id}:种族`) > 0
        content: 不过，尾巴摇得很快的样子
      - if: era.get(`cflag:${d.id}:种族`) === 0
        content: 不过，很高兴的样子
  - if: era.get(`talent:${d.id}:社交态度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - 这次 %CHARA% 意料之外地在每一个环节都没有生怯，一起和大家唱着生日歌
  - if: era.get(`talent:${d.id}:社交态度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - %CHARA% 依然显得有些怯生生的，但在收到礼物时，还是非常高兴的样子
  - if: era.get(`talent:${d.id}:社交态度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - if: era.get(`cflag:${d.id}:种族`) > 0
        content: %CHARA% 默默吃着生日蛋糕，抖动着耳朵，听着身边他人谈论有关%SEX%的种种往事
      - if: era.get(`cflag:${d.id}:种族`) === 0
        content: %CHARA% 默默吃着生日蛋糕，微笑着，听着身边他人谈论有关%SEX%的种种往事
  - if: era.get(`talent:${d.id}:坦率程度`) === 1 && era.get(`exp:${d.id}:过生日次数`) === 0
    random: true
    lines:
      - %CHARA% 显然没意料到会有这样一个活动，但还是用「早就注意到」之类的说辞搪塞了问及是否惊喜的问题
  - if: era.get(`talent:${d.id}:坦率程度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - if: era.get(`cflag:${d.id}:种族`) > 0
        content: %CHARA% 一边抱怨着生日派对让%SEX%不满意的地方，一边摇着尾巴吃着生日蛋糕
      - if: era.get(`cflag:${d.id}:种族`) === 0
        content: %CHARA% 一边抱怨着生日派对让%SEX%不满意的地方，一边大口地吃着生日蛋糕
  - if: era.get(`talent:${d.id}:坦率程度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - %CHARA% 之前所总结一百个%YOU%办事不力的说辞此刻终于派上了用场
      - 不过，意料之外地称赞了这次生日活动办得很好

读档对话:
  - if: era.get(`cflag:${d.id}:妊娠阶段`) > 2 && !era.get(`cflag:${d.id}:扩展变量`)?.report
    content: %CHARA% 抚着肚子，绝望地看着 %YOU% 远去。
  - if: era.get(`cflag:${d.id}:妊娠阶段`) <= 2 && era.get(`exp:${d.id}:生产次数`) > 0
    content: %CHARA% 拿着一只奶瓶，绝望地看着 %YOU% 远去。

指导学习:
  # @author 雞雞
  - random: true
    lines:
      - %YOU% 在训练员室里指导 %CHARA% 学习，成功指导%SEX%解开了不会的题目。
  # @author 幽白書
  - if: era.get('flag:惩戒力度') >= 2
    random: true
    lines:
      - 在指导了 %CHARA% 课业方面的知识后，%CHARA% 红着脸颊望着 %YOU%，接下来，该轮到性教育的时间了。
      - 明明 %YOU% 才是指导者，但 %CHARA% 却比 %YOU% 自己都了解自己的身体，在 %CHARA% 的手中，%YOU% 被迫理解了自己身体的每个敏感点，以及它们被触碰时自己会做出的羞人反应。

中庭枯树洞:
  # @author 雞雞
  - random: true
    lines:
      - %YOU% 与 %CHARA% 一起来到中庭枯树洞。
      - 看着%SEX%朝枯树洞里咆哮的样子，%YOU% 也坚定了要帮助 %CHARA% 成为最强的决心。
  # @author 幽白書
  - if: era.get('flag:惩戒力度') >= 2
    random: true
    lines:
      - %CHARA% 带着 %YOU% 到枯树洞旁，
      - 正当 %YOU% 以为%SEX%是最近有压力想宣泄时，却被措不及防的推倒在树桩上。
      - 随后 %YOU% 下半身的衣装被缓缓脱下，温热的肉柱抵住了自己的穴口。
      - 如果发出声音的话，树洞的回音效果一定会让 %YOU% 的声音响彻校园吧。
      - 要是被自己的负责%UMA%按在枯树洞上干的事情传出去的话，%YOU% 身为训练员的声名就完蛋了吧……
      - 不过，本来那种东西也早就没有了。
      - if: era.get('flag:惩戒力度') === 2
        content: %YOU% 在枯树洞旁浪叫着，但对身为性奴的 %YOU% 而言，这也不过是平常的一天罢了。
      - if: era.get('flag:惩戒力度') === 3
        content: %YOU% 在枯树洞旁浪叫着，但对身为孕袋的 %YOU% 而言，这也不过是平常的一天罢了。

中庭约会:
  # @author 雞雞
  - random: true
    lines:
      - %YOU% 与 %CHARA% 一起来到中庭约会，你们的组合让周围的学生忍不住议论纷纷。
  # @author 幽白書
  - if: era.get('flag:惩戒力度') >= 2
    random: true
    lines:
      - %CHARA% 牵着 %YOU% 的手，一起到中庭约会。
      - %YOU% 夹着双腿，大腿两侧白色的液体缓缓流下，脸上的口罩仿佛被什么液体浸润过，湿漉漉的贴着 %YOU% 的口鼻，身上那股发情的气味连路过的%UMA%都不禁红着脸捏起鼻子。

天台:
  # @author 雞雞
  - if: "!d.sex"
    content:
      - %YOU% 与 %CHARA% 一起来到天台吃便当，你们互相交换了便当盒里的美食。
  # @author 幽白書
  - if: "d.sex === true"
    lines:
      - 在天台上的公开露出……如果有人在此时抬起头的话，%YOU% 绝对会忍不住的。
      - 天台下方，训练场上奔跑着的%UMA%们。
      - 要是被看到的话，一定会忍不住高潮的，喷出的潮水会如雨水一样落在下面的人身上……
      - 然而，被 %CHARA% 抬起一条腿，维持着无从施力的姿势的 %YOU% 只能依靠着天台上保护用的栅栏网，任凭铁丝在乳房上压出红色的印痕。
      - if: era.get('talent:0:泌乳') > 0
        lines:
          - 啊啊，居然被挤出来了……
          - 在私处的潮水涌出前，先一步落在下面%UMA%头上的是从 %YOU% 的乳头细流涌出的乳汁。