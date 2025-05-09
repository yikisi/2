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
