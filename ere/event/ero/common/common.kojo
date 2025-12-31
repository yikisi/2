join_3p:
  - %CHARA% 面色绯红地想要加入……接受吗？
  - acc: 1
    key: accept
    content: 「你来的正是时候」
  - acc: 2
    content: 还是别了……

join_3p_accept:
  - %CHARA% 扑入 %YOU% 怀中……

join_3p_force:
  - %CHARA% 征得 %LOVER% 的同意后，华丽地无视了 %YOU% 的抗议……

join_3p_reject:
  - %CHARA% 掩面而去……

# 孕袋睡奸惊醒
child_raping_start:
  - 半夜，%YOU%惊醒过来
  - 身为孕袋，哪怕睡眠时间也不能忘记自己的职责
  - 只是今天来使用自己的客人比较特殊而已
  -
  - %YOU%感受着身前身后不同频率的冲击
  - %CHILD%一边低声喊着%CALLNAME%一边晃动着腰，每一下都能顶到%YOU%的最深处
  - %YOU%跪伏在床上，害羞的感受着被自己的孩子用野兽一般的姿势侵犯的感觉
  - 身为人母的尊严——假如真的有过那种东西的话——在此刻彻底消失殆尽
  - 像母狗一样摇晃着屁股，渴望被欺负的模样也惹得正在被%YOU%用嘴服侍的%FATHER%一阵取笑
  - %YOU%只能将口中的肉棒含的更深，将自己的脸埋进那浓厚的腥臭味中来逃避现实
  -
  - 没过一会，%FATHER%与%CHILD%便射出了浓浓的精液
  - %YOU%将口中的精液吐出，涂满手后，再将手指插入自己的小穴内，缓缓搅拌，溢出的白浆也被%YOU%用另一只手沾起吞下
  - if: era.get('cflag:0:81') === 1 << 1
    content: %FATHER%的精液与%CHILD%的精液混合在一起，究竟谁会先让自己怀孕呢？%YOU%畅想着，却没注意到眼前的%FATHER%与%CHILD%的肉棒因%YOU%的举动已经再度翘起
  - if: era.get('cflag:0:81') !== 1 << 1
    content: 看到%YOU%的举动，%FATHER%与%CHILD%的肉棒已经再度翘起
  - 夜晚还在继续……

# 孕袋反抗
preg_slave_resist:
  - if: d.success
    lines:
      - 明明是孕袋，却想要占据主动
      - 这样大逆不道的行为却得到了主人的默认
      - 是对这淫乱母畜的恩赐吗？
      - 还是……只是想再多欣赏些%YOU%主动沉溺欲望的表演？
  - if: '!d.success'
    lines:
      - 身为孕袋，明明臣服与顺从是被刻在精神底层的烙印
      - 为什么却还是尝试反抗了呢？
      - 是内心还有一丝丝不想堕落的念头
      - 还是……只是想要更深的感受，被迫服从的快感？

# 反抗孕袋
resist_preg_slave:
  - if: d.success
    lines:
      - 无论怎么努力，也无法抗拒内心臣服的诱惑
      - %UMA%主人的一个动作，就能让%YOU%彻底放弃抵抗
      - 会容忍自己的主导，其实也只是想让孕袋认清自己服从的天性而已吧
  - if: '!d.success'
    lines:
      - color: %COLOR%
        content: %CALLNAME%摇晃着身体，沉溺于欲望及肉体的模样
      - color: %COLOR%
        content: 根本难以看出原来身为训练员的矜持
      - color: %COLOR%
        content: 再看一会吧，就一会
      - color: %COLOR%
        content: 看看本应身为指导者的%CALLNAME%究竟还能堕落到什么地步