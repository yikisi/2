/**
 * @file 调教地文 - 其他
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @author 幽白書
   * @param {CharaTalk} chara 孩子的父亲
   * @param {CharaTalk} child 孩子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} child_call_y 孩子对玩家的称呼
   */
  async be_awake_as_slave(chara, child, you, child_call_y) {
    await era.printAndWait(['半夜，', you.get_colored_name(), ' 惊醒过来']);
    await era.printAndWait('身为孕袋，哪怕睡眠时间也不能忘记自己的职责');
    await era.printAndWait('只是今天来使用自己的客人比较特殊而已');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 感受着身前身后不同频率的冲击',
    ]);
    await era.printAndWait([
      child.get_colored_name(),
      ' 一边低声喊着 ',
      child_call_y,
      ' 一边晃动着腰，每一下都能顶到 ',
      you.get_colored_name(),
      ' 的最深处',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 跪伏在床上，害羞的感受着被自己的孩子用野兽一般的姿势侵犯的感觉',
    ]);
    await era.printAndWait(
      '身为人母的尊严——假如真的有过那种东西的话——在此刻彻底消失殆尽',
    );
    await era.printAndWait([
      '像母狗一样摇晃着屁股，渴望被欺负的模样也惹得正在被 ',
      you.get_colored_name(),
      ' 用嘴服侍的 ',
      chara.get_colored_name(),
      ' 一阵取笑',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 只能将口中的肉棒含的更深，将自己的脸埋进那浓厚的腥臭味中来逃避现实',
    ]);
    era.println();
    await era.printAndWait([
      '没过一会，',
      chara.get_colored_name(),
      ' 与 ',
      child.get_colored_name(),
      ' 便射出了浓浓的精液',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 将口中的精液吐出，涂满手后，再将手指插入自己的小穴内，缓缓搅拌，溢出的白浆也被 ',
      you.get_colored_name(),
      ' 用另一只手沾起吞下',
    ]);
    if (era.get('cflag:0:妊娠阶段') === 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 的精液与 ',
        child.get_colored_name(),
        ' 的精液混合在一起，究竟谁会先让自己怀孕呢？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 畅想着，却没注意到眼前的 ',
        chara.get_colored_name(),
        ' 与 ',
        child.get_colored_name(),
        ' 的肉棒因 ',
        you.get_colored_name(),
        ' 的举动已经再度翘起',
      ]);
    } else {
      await era.printAndWait([
        '看到%玩家名%的举动，',
        chara.get_colored_name(),
        ' 与 ',
        child.get_colored_name(),
        ' 的肉棒已经再度翘起',
      ]);
    }
    await era.printAndWait('夜晚还在继续……');
  },
};
