/**
 * @file 地下室教学
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} you */
  get_intro: (you) => [
    you.get_colored_name(),
    ' 看来是被',
    { content: '【什么人】', fontWeight: 'bold' },
    '绑架到这个地下室来了。',
    { isBr: true },
    '在这个不见天日的地方甚至',
    { content: '【无法精确感受到时间】', fontWeight: 'bold' },
    '，接下来的日子恐怕会很难熬。',
    { isBr: true },
    '有什么需要帮助的？',
  ],
  /** @param {CharaTalk} you */
  async unlock(you) {
    await you.say_as_passer_by_and_wait('兵法有言', '兵贵胜，不贵久。');
    await era.printAndWait([
      you.get_colored_name(),
      ' 可以尝试以现有手段直接脱困，但当《地下室主人》回来的时候只能暂且作罢，要是时运不佳被那个人撞见的话恐怕甚至会遭到报复……',
    ]);
  },
  /** @param {CharaTalk} you */
  async relax(you) {
    await you.say_as_passer_by_and_wait('兵法有言', '胜可知，而不可为。');
    await era.printAndWait([
      '在没有逃脱之机时，',
      you.get_colored_name(),
      ' 可以尝试静坐养神、思考对策。',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '这样还能防止错过《地下室主人》刚回来和醒来的时机。',
    );
  },
  /** @param {CharaTalk} you */
  async sleep(you) {
    await you.say_as_passer_by_and_wait('兵法有言', '谨养而勿劳，并气积力。');
    await era.printAndWait([
      '在疲劳之时，',
      you.get_colored_name(),
      ' 最好直接睡下补充体力与精力。',
    ]);
  },
  /** @param {CharaTalk} you */
  async eat(you) {
    await you.say_as_passer_by_and_wait('兵法有言', '军无粮食则亡。');
    await era.printAndWait([
      '为了应付长期战，',
      you.get_colored_name(),
      ' 需要进食来维持身体的消耗。一次进食可带来长时间内的体力恢复效果。',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '但是要小心主人在里面加一些料……如果TA太警惕的话。',
    );
  },
  /** @param {CharaTalk} you */
  async flatter(you) {
    await you.say_as_passer_by_and_wait('兵法有言', '上兵伐谋，其次伐交。');
    await era.printAndWait([
      '与地下室主人打好关系，对 ',
      you.get_colored_name(),
      ' 绝无坏处。',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '这样也许能让地下室主人降低警惕。',
    );
  },
  /** @param {CharaTalk} you */
  async sex(you) {
    await you.say_as_passer_by_and_wait(
      '兵法有言',
      '善动敌者，予之，敌必取之。',
    );
    await era.printAndWait(
      '向地下室主人献上肉体，说不定就能从中寻得逆转之机。',
    );
  },
  /** @param {CharaTalk} you */
  async strike(you) {
    await you.say_as_passer_by_and_wait(
      '兵法有言',
      '善出奇者，无穷如天地，不竭如江海。',
    );
    await era.printAndWait([
      '假如 ',
      you.get_colored_name(),
      ' 对自己的力量与智力足够自信，不妨尝试奇袭地下室主人，寻觅出路。只是一旦失败，下场可以想像。',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '如果交合的次数足够多，也许可以提高击中弱点的概率。',
    );
  },
  /** @param {CharaTalk} you */
  async battle(you) {
    await you.say_as_passer_by_and_wait('兵法有言', '凡战者，以正合，以奇胜。');
    await era.printAndWait(
      '如果对力量足够自信，正面反抗总是有效的手段，特别是在机关被解除殆尽的时候。',
    );
    await era.printAndWait(
      '但是一旦没能解除机关，让主人有机会回过神来，下场也是可以想象的……',
    );
    await you.say_as_passer_by_and_wait(
      '？？？',
      '如果交合的次数足够多，也许可以提高击中弱点的概率。',
    );
  },
  /** @param {CharaTalk} you */
  async release(you) {
    await you.say_as_passer_by_and_wait('兵法有言', '上兵伐谋，其次伐交。');
    await era.printAndWait([
      '若然地下室主人已然在 ',
      you.get_colored_name(),
      ' 身上索取所需，说不定就会同意释放的请求。',
    ]);
  },
};
