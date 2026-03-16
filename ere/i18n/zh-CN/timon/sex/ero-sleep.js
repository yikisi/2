/**
 * @file 调教地文 - 睡奸
 * @author O口口口口口
 * @author 黑奴队长
 */
module.exports = {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('吻下去了。');
      await attacker.print_and_wait([
        '因为 ',
        a_call_d,
        ' 在睡梦中无意识微微分开的双唇看上去很好吻的样子。',
      ]);
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '把倏地想要弹起的右手摁了回去，只要侧着身更多地将身子俯下的话就能完全占有这份唇间的温度。',
      );
      await attacker.print_and_wait('只是……一个人的话果然还是有点寂寞。');
    } else {
      await defender.say_and_wait('唔——');
      await attacker.print_and_wait(
        '脑袋开始无意识地摇晃起来了，脸色也带上了些潮红，是呼吸有些急促了吧。',
      );
      await attacker.print_and_wait('差不多该停下来……或者做些其他事了吗。');
      await defender.say_and_wait('啾……');
      await attacker.print_and_wait('那就最后一次……？');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '明明捧着脸吻到了更深的地方，但是反而有些空虚……',
      );
      await attacker.print_and_wait([
        '确保面前 ',
        a_call_d,
        ' 的唇齿之间落满了自己的气味，以偷偷摸摸的角度来说应当算是大胜利了……',
      ]);
      await attacker.print_and_wait([
        '哈……但是反倒会希望 ',
        a_call_d,
        ' 能就这么醒来，然后惊慌失措地看过来……会很有趣吧ww',
      ]);
    } else {
      await defender.say_and_wait('哈……哈……');
      await attacker.print_and_wait('绷紧，挣扎，然后放弃。');
      await attacker.print_and_wait([
        '被捧着脸用舌头欺负到脸红的 ',
        a_call_d,
        ' 身体意外的很好懂。',
      ]);
    }
  },
};
