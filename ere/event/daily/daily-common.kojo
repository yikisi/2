回合开始:
  sync: true
  lines:
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
    - if: !(era.get('cflag:301:育成回合计时') < 3 * 48)
      random: true
      lines:
        - %角色名% 正在接待处向 %骏川% 查询着什么。
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