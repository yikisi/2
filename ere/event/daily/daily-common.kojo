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
        - %角色名% 似乎在和其他马娘谈论恋爱八卦，%玩家名% 看见 %角色名% 不停的追问正在恋爱的%马娘%问题，直到对方面红耳赤逃跑才罢休。
    - if: era.get(`talent:${d.id}:自信程度`) === 1
      random: true
      lines:
        - 在走进训练室的时候，%玩家名% 听到 %角色名% 日常说出了贬低自己的发言。
    - if: era.get(`talent:${d.id}:自信程度`) === 1
      random: true
      lines:
        - %玩家名% 和 %角色名% 打招呼的时候，莫名其妙的被 %角色名% 安慰了。
    - if: era.get(`talent:${d.id}:自信程度`) === -1
      random: true
      lines:
        - %角色名% 站在训练场的正中央，高傲的态度仿佛自己是世界之王一般。
    - if: era.get(`talent:${d.id}:自信程度`) === -1
      random: true
      lines:
        - %角色名% 站在看台上，对训练场上其他%马娘%的跑法指指点点，做出带着个人看法的评价。