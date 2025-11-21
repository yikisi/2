回合开始:
  sync: true
  lines:
    # @author 雞雞
    - random: true
      lines:
        - %角色名% 竖起了大拇指。
    - random: true
      lines:
        - %角色名% 看起来吃撑了，肚子变得圆鼓鼓的。
    - random: true
      lines:
        - %角色名% 正在专心地阅读着什么。
    - if: era.get(`cflag:${d.id}:成长阶段`) < 5
      random: true
      lines:
        - %角色名% 正在与同学们愉快地聊天。
    - if: "!(era.get('cflag:301:育成回合计时') < 3 * 48)"
      random: true
      lines:
        - %角色名% 正在接待处向 %骏川% 查询着什么。
    # @author 幽白書
    - if: era.get(`talent:${d.id}:情感活动`) === 1
      random: true
      lines:
        - %角色名% 兴奋地和 %玩家名% 说着周末从电视上看到的笑话，说到一半自己却先忍不住笑了出来。
    - if: era.get(`talent:${d.id}:情感活动`) === 1
      random: true
      lines:
        - %角色名% 说着周末看的电视剧剧情，说着说着又忍不住哭了起来。
    - if: era.get(`talent:${d.id}:情感活动`) === 1
      random: true
      lines:
        - %玩家名% 看到 %角色名% 正和几名%马娘%围在一起，似乎在说恐怖故事的样子，不一会 %角色名% 就被吓的脸色发白。
    - if: era.get(`talent:${d.id}:情感活动`) === -1
      random: true
      lines:
        - %玩家名% 看到 %角色名% 的头发里插着一根小树枝，直到 %玩家名% 拿下来 %角色名% 才发觉自己头上有异物。
    - if: era.get(`talent:${d.id}:情感活动`) === -1
      random: true
      lines:
        - %玩家名% 数落着 %角色名% 直接在训练室里换衣服的行为，却得到了对方不解自己为何不能这么做的神情作为回复。
    - if: era.get(`talent:${d.id}:情感活动`) === -1
      random: true
      lines:
        - %角色名% 似乎在和其他%马娘%谈论恋爱八卦，%玩家名% 看见 %角色名% 不停的追问正在恋爱的%马娘%问题，直到对方面红耳赤逃跑才罢休。
    - if: era.get(`talent:${d.id}:自信程度`) === 1
      random: true
      lines:
        - 在走进训练室的时候，%玩家名% 听到 %角色名% 日常说出了贬低自己的发言。
    - if: era.get(`talent:${d.id}:自信程度`) === 1
      random: true
      lines:
        - %玩家名% 和 %角色名% 打招呼的时候，莫名其妙的被 %角色名% 安慰了。
    - if: era.get(`talent:${d.id}:自信程度`) === 1
      random: true
      lines:
        - %玩家名% 摸了摸 %角色名% 的头，不知为何 %角色名% 却误会成了 %玩家名% 要责罚 %角色名%，战战兢兢的闭上了眼睛。
    - if: era.get(`talent:${d.id}:自信程度`) === -1
      random: true
      lines:
        - %角色名% 站在训练场的正中央，高傲的态度仿佛自己是世界之王一般。
    - if: era.get(`talent:${d.id}:自信程度`) === -1
      random: true
      lines:
        - %角色名% 站在看台上，对训练场上其他%马娘%的跑法指指点点，做出带着个人看法的评价。
    - if: era.get(`cflag:${d.id}:种族`) > 0 && era.get(`talent:${d.id}:自信程度`) === -1
      random: true
      lines:
        - %角色名% 发出叹息，感叹学园中没有能与其一较高下的对手。
    - if: era.get(`talent:${d.id}:痛苦感受`) === 1
      random: true
      lines:
        - %角色名% 摔了一跤，抬起头时 %玩家名% 看见%她%眼眶中含着泪水。
    - if: era.get(`talent:${d.id}:痛苦感受`) === 1
      random: true
      lines:
        - %角色名% 在和朋友玩耍，惩罚游戏是弹额头一下，%玩家名% 看到输了的 %角色名% 露出了害怕的神情。
    - if: era.get(`talent:${d.id}:痛苦感受`) === 1
      random: true
      lines:
        - %角色名% 在和朋友们聊电影，听见电影中血腥的剧情，%角色名% 的双耳不由得盖了下来。
    - if: era.get(`talent:${d.id}:痛苦感受`) === -1
      random: true
      lines:
        - %角色名% 重重摔了一跤，正当 %玩家名% 在担心 %角色名% 时，%角色名% 好像什么也没发生一样，拍了拍身子就爬起来了。
    - if: era.get(`talent:${d.id}:痛苦感受`) === -1
      random: true
      lines:
        - %角色名% 跌倒了，%玩家名% 帮 %角色名% 处理着伤口，处理好抬头一看，%角色名% 竟然不知不觉睡着了。
    - if: era.get(`talent:${d.id}:痛苦感受`) === -1
      random: true
      lines:
        - %角色名% 在分享着忍耐疼痛的诀窍……虽然是让人感到意义不明的主题，但似乎有蛮多人正认真的倾听并做着笔记。
    - if: era.get(`talent:${d.id}:恐惧感受`) === 1
      random: true
      lines:
        - %角色名% 躲在操场的角落，似乎不想与周围那些太过阳光的人有所接触。
    - if: era.get(`talent:${d.id}:恐惧感受`) === 1
      random: true
      lines:
        - %角色名% 独自蜷缩在训练场阴影处，用树枝在地面画着重复的螺旋图案。
    - if: era.get(`talent:${d.id}:恐惧感受`) === 1
      random: true
      lines:
        - %玩家名% 发现 %角色名% 正对着自动贩卖机的反光玻璃低声自言自语。
    - if: era.get(`talent:${d.id}:恐惧感受`) === -1
      random: true
      lines:
        - %玩家名% 发现 %角色名% 偷偷把蒲公英种子吹向天空，转头露出恶作剧成功的灿烂笑容。
    - if: era.get(`talent:${d.id}:恐惧感受`) === -1
      random: true
      lines:
        - %角色名% 把训练用轮胎滚成巨大圆环，哼着走调的Live曲在草坪上推着轮胎奔跑。
    - if: era.get(`talent:${d.id}:恐惧感受`) === -1
      random: true
      lines:
        - %角色名% 抱着运动饮料边走边跳，头髮随风飞舞飘动。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === 1
      random: true
      lines:
        - %角色名% 躲在训练员室窗帘后翻阅图书，听到脚步声立即将书合拢抱在胸前。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === 1
      random: true
      lines:
        - %角色名% 反复调整自动贩卖机投币口的角度，确保硬币垂直落入时不会发出声响。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === 1
      random: true
      lines:
        - 训练员室的柜子后面微微晃动，%角色名% 正躲在后面换衣服，被 %玩家名% 发现后满脸通红。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === -1
      random: true
      lines:
        - %玩家名% 被 %角色名% 突然背起冲向训练场，说要让 %玩家名% 体验风速的快感。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === -1
      random: true
      lines:
        - %角色名% 将跳马拼在一起，召集训练场上的%马娘%们比赛谁能一次跳过最多的跳马。
    - if: era.get(`talent:${d.id}:羞耻忍耐`) === -1
      random: true
      lines:
        - %角色名% 坐在训练场的入口，让所有路过的%马娘%都要说一个冷笑话才准过。
    - if: era.get(`talent:${d.id}:反感获取`) === 1
      random: true
      lines:
        - %角色名% 瞪着路过的%马娘%，被%她%瞪到的孩子都发出了害怕的悲鸣。
    - if: era.get(`talent:${d.id}:反感获取`) === 1
      random: true
      lines:
        - %角色名% 用喷漆在障碍栏涂鸦，发现 %玩家名% 后挑衅地把沾到指尖的颜料涂在墙上。
    - if: era.get(`talent:${d.id}:反感获取`) === 1
      random: true
      lines:
        - 更衣室传来刺啦声响，%角色名% 正将制服袖口剪的坑坑洞洞，线头散落满地。
    - if: era.get(`talent:${d.id}:反感获取`) === -1
      random: true
      lines:
        - 器材室透出暖黄灯光，%角色名% 正用绷带给老旧杠铃片缠绕防撞缓冲带。
    - if: era.get(`talent:${d.id}:反感获取`) === -1
      random: true
      lines:
        - %角色名% 拿着许多瓶运动饮料站在训练场旁，看到训练得满头大汗的%马娘%就会向前递上。
    - if: era.get(`talent:${d.id}:反感获取`) === -1
      random: true
      lines:
        - %角色名% 清理着训练场上的碎石，以免有人跌倒时被尖锐的石头二次伤害。
    - if: era.get(`talent:${d.id}:反抗意愿`) === 1
      random: true
      lines:
        - %玩家名% 的日程表被 %角色名% 用马克笔划掉，改成了 %角色名% 安排的事情。
    - if: era.get(`talent:${d.id}:反抗意愿`) === 1
      random: true
      lines:
        - %玩家名% 的训练员室中被塞满了 %角色名% 不由分说摆放在房间里的各式东西。
    - if: era.get(`talent:${d.id}:反抗意愿`) === 1
      random: true
      lines:
        - 明明没有事先说好，%角色名% 却一副理所当然的让 %玩家名% 今天放学后陪 %角色名% 去买东西。
    - if: era.get(`talent:${d.id}:反抗意愿`) === -1
      random: true
      lines:
        - %玩家名% 发现 %角色名% 站在训练员室门前反复抬手，却始终不敢敲响训练员室的门。
    - if: era.get(`talent:${d.id}:反抗意愿`) === -1
      random: true
      lines:
        - %角色名% 被突然启动的洒水器吓得跌坐在地，满脸错愕。
    - if: era.get(`talent:${d.id}:反抗意愿`) === -1
      random: true
      lines:
        - 训练员室里的储物柜轻微晃动着，%角色名% 正蜷缩在里面躲避突如其来的并跑邀请。

生日:
  # @author 阿格尼斯数码公司
  - 为 %角色名% 筹备了一场盛大的生日派对！
  - random: true
    lines:
      - %角色名% 作为生日的主角，非常高兴的样子
  - random: true
    lines:
      - %角色名% 在摇曳的烛光中闭上眼睛，许下了今年的生日愿望
  - random: true
    lines:
      - %角色名% 被大家的快乐所感染，脸上一直带着笑容
  - if: era.get(`talent:${d.id}:社交态度`) === -1 && era.get(`exp:${d.id}:过生日次数`) === 0
    random: true
    lines:
      - 经常客串各种各样聚会场景的 %角色名%，完全没有意料到%玩家名%会为%她%策划一个生日派对，只是在惊喜中和你们度过了欢快的一天
  - if: era.get(`talent:${d.id}:社交态度`) === -1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - 话虽如此，%角色名% 在得知你的热情后，成功把%玩家名%为%她%筹划的生日派对变成了从未预料过的全校性生日庆典……！
  - if: era.get(`talent:${d.id}:社交态度`) === -1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - 话虽如此，%角色名% 似乎自己为自己筹办了另外一半的生日派对，两场生日派对融合在一起，产生了巨大的规模拓展……！
  - if: era.get(`talent:${d.id}:社交态度`) === 1 && era.get(`exp:${d.id}:过生日次数`) === 0
    random: true
    lines:
      - %角色名% 似乎未曾预料会有这样一个派对，看到派对上出现的众人显得有些战战兢兢
      - if: era.get(`cflag:${d.id}:种族`) > 0
        content: 不过，尾巴摇得很快的样子
      - if: era.get(`cflag:${d.id}:种族`) === 0
        content: 不过，很高兴的样子
  - if: era.get(`talent:${d.id}:社交态度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - 这次 %角色名% 意料之外地在每一个环节都没有生怯，一起和大家唱着生日歌
  - if: era.get(`talent:${d.id}:社交态度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - %角色名% 依然显得有些怯生生的，但在收到礼物时，还是非常高兴的样子
  - if: era.get(`talent:${d.id}:社交态度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - if: era.get(`cflag:${d.id}:种族`) > 0
        content: %角色名% 默默吃着生日蛋糕，抖动着耳朵，听着身边他人谈论有关%她%的种种往事
      - if: era.get(`cflag:${d.id}:种族`) === 0
        content: %角色名% 默默吃着生日蛋糕，微笑着，听着身边他人谈论有关%她%的种种往事
  - if: era.get(`talent:${d.id}:坦率程度`) === 1 && era.get(`exp:${d.id}:过生日次数`) === 0
    random: true
    lines:
      - %角色名% 显然没意料到会有这样一个活动，但还是用「早就注意到」之类的说辞搪塞了问及是否惊喜的问题
  - if: era.get(`talent:${d.id}:坦率程度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - if: era.get(`cflag:${d.id}:种族`) > 0
        content: %角色名% 一边抱怨着生日派对让%她%不满意的地方，一边摇着尾巴吃着生日蛋糕
      - if: era.get(`cflag:${d.id}:种族`) === 0
        content: %角色名% 一边抱怨着生日派对让%她%不满意的地方，一边大口地吃着生日蛋糕
  - if: era.get(`talent:${d.id}:坦率程度`) === 1 && era.get(`exp:${d.id}:过生日次数`) > 0
    random: true
    lines:
      - %角色名% 之前所总结一百个%玩家名%办事不力的说辞此刻终于派上了用场
      - 不过，意料之外地称赞了这次生日活动办得很好

读档对话:
  - if: era.get(`cflag:${d.id}:妊娠阶段`) > 2 && !era.get(`cflag:${d.id}:扩展变量`)?.report
    content: %角色名% 抚着肚子，绝望地看着 %玩家名% 远去。
  - if: era.get(`cflag:${d.id}:妊娠阶段`) <= 2 && era.get(`exp:${d.id}:生产次数`) > 0
    content: %角色名% 拿着一只奶瓶，绝望地看着 %玩家名% 远去。

指导学习:
  # @author 雞雞
  - random: true
    lines:
      - %玩家名% 在训练员室里指导 %角色名% 学习，成功指导%她%解开了不会的题目。
  # @author 幽白書
  - if: era.get('flag:惩戒力度') >= 2
    random: true
    lines:
      - 在指导了 %角色名% 课业方面的知识后，%角色名% 红着脸颊望着 %玩家名%，接下来，该轮到性教育的时间了。
      - 明明 %玩家名% 才是指导者，但 %角色名% 却比 %玩家名% 自己都了解自己的身体，在 %角色名% 的手中，%玩家名% 被迫理解了自己身体的每个敏感点，以及它们被触碰时自己会做出的羞人反应。

中庭枯树洞:
  # @author 雞雞
  - random: true
    lines:
      - %玩家名% 与 %角色名% 一起来到中庭枯树洞。
      - 看着%她%朝枯树洞里咆哮的样子，%玩家名% 也坚定了要帮助 %角色名% 成为最强的决心。
  # @author 幽白書
  - if: era.get('flag:惩戒力度') >= 2
    random: true
    lines:
      - %角色名% 带着 %玩家名% 到枯树洞旁，
      - 正当 %玩家名% 以为%她%是最近有压力想宣泄时，却被措不及防的推倒在树桩上。
      - 随后 %玩家名% 下半身的衣装被缓缓脱下，温热的肉柱抵住了自己的穴口。
      - 如果发出声音的话，树洞的回音效果一定会让 %玩家名% 的声音响彻校园吧。
      - 要是被自己的负责%马娘%按在枯树洞上干的事情传出去的话，%玩家名% 身为训练员的声名就完蛋了吧……
      - 不过，本来那种东西也早就没有了。
      - if: era.get('flag:惩戒力度') === 2
        content: %玩家名% 在枯树洞旁浪叫着，但对身为性奴的 %玩家名% 而言，这也不过是平常的一天罢了。
      - if: era.get('flag:惩戒力度') === 3
        content: %玩家名% 在枯树洞旁浪叫着，但对身为孕袋的 %玩家名% 而言，这也不过是平常的一天罢了。

中庭约会:
  # @author 雞雞
  - random: true
    lines:
      - %玩家名% 与 %角色名% 一起来到中庭约会，你们的组合让周围的学生忍不住议论纷纷。
  # @author 幽白書
  - if: era.get('flag:惩戒力度') >= 2
    random: true
    lines:
      - %角色名% 牵着 %玩家名% 的手，一起到中庭约会。
      - %玩家名% 夹着双腿，大腿两侧白色的液体缓缓流下，脸上的口罩仿佛被什么液体浸润过，湿漉漉的贴着 %玩家名% 的口鼻，身上那股发情的气味连路过的%马娘%都不禁红着脸捏起鼻子。

天台:
  # @author 雞雞
  - if: "!d.sex"
    content:
      - %玩家名% 与 %角色名% 一起来到天台吃便当，你们互相交换了便当盒里的美食。
  # @author 幽白書
  - if: "d.sex === true"
    lines:
      - 在天台上的公开露出……如果有人在此时抬起头的话，%玩家名% 绝对会忍不住的。
      - 天台下方，训练场上奔跑着的%马娘%们。
      - 要是被看到的话，一定会忍不住高潮的，喷出的潮水会如雨水一样落在下面的人身上……
      - 然而，被 %角色名% 抬起一条腿，维持着无从施力的姿势的 %玩家名% 只能依靠着天台上保护用的栅栏网，任凭铁丝在乳房上压出红色的印痕。
      - if: era.get('talent:0:泌乳') > 0
        lines:
          - 啊啊，居然被挤出来了……
          - 在私处的潮水涌出前，先一步落在下面%马娘%头上的是从 %玩家名% 的乳头细流涌出的乳汁。