/**
 * @file Basement tutorial
 * @author 雞雞
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} you */
  get_intro: (you) => [
    you.get_colored_name(),
    ' seems to have been kidnapped into this basement by ',
    { content: '[Someone]', fontWeight: 'bold' },
    '.',
    { isBr: true },
    "In this sunless place, you can't even ",
    { content: '[sense time accurately]', fontWeight: 'bold' },
    '. The days ahead are going to be rough.',
    { isBr: true },
    'Need any help?',
  ],
  /** @param {CharaTalk} you */
  async unlock(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'In war, prize victory—not a long campaign.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' can try breaking out with whatever tools are on hand. But when the Basement Master returns, that plan has to wait. Get unlucky and run into them, and payback could be brutal…',
    ]);
  },
  /** @param {CharaTalk} you */
  async relax(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'Victory can be known, but not forced.',
    );
    await era.printAndWait([
      "When there's no opening to escape, ",
      you.get_colored_name(),
      ' can sit still, recover focus, and work the problem.',
    ]);
    await you.say_as_passer_by_and_wait(
      '???',
      'That also keeps you from missing the moment the Basement Master comes back—or just wakes up.',
    );
  },
  /** @param {CharaTalk} you */
  async sleep(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'Rest carefully; do not exhaust yourself. Conserve spirit and gather strength.',
    );
    await era.printAndWait([
      'When fatigue hits, ',
      you.get_colored_name(),
      ' should just sleep and restore stamina and energy.',
    ]);
  },
  /** @param {CharaTalk} you */
  async eat(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'An army without grain is doomed.',
    );
    await era.printAndWait([
      'For a long war of attrition, ',
      you.get_colored_name(),
      ' needs food to keep the body going. One meal grants a long stretch of stamina recovery.',
    ]);
    await you.say_as_passer_by_and_wait(
      '???',
      "But watch for extras the Master might mix in… if they're wary enough.",
    );
  },
  /** @param {CharaTalk} you */
  async flatter(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'Best is to break plans; next is to break alliances.',
    );
    await era.printAndWait([
      "Getting on the Basement Master's good side never hurts ",
      you.get_colored_name(),
      '.',
    ]);
    await you.say_as_passer_by_and_wait(
      '???',
      'It might even make the Basement Master drop their guard.',
    );
  },
  /** @param {CharaTalk} you */
  async sex(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'One skilled at moving the enemy offers bait they cannot refuse.',
    );
    await era.printAndWait(
      'Offer the Basement Master your body, and you might find a chance to turn the tables.',
    );
  },
  /** @param {CharaTalk} you */
  async strike(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'One skilled at surprise is as endless as heaven and earth, as inexhaustible as rivers and seas.',
    );
    await era.printAndWait([
      'If ',
      you.get_colored_name(),
      ' trusts in strength and wits enough, try ambushing the Basement Master and finding a way out. Fail, and the outcome is easy to imagine.',
    ]);
    await you.say_as_passer_by_and_wait(
      '???',
      "If you've coupled enough times, the odds of hitting a weak spot might go up.",
    );
  },
  /** @param {CharaTalk} you */
  async battle(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'In battle, engage with the orthodox and win with the unorthodox.',
    );
    await era.printAndWait(
      'If you trust your strength, open rebellion is a real option—especially once most traps are disabled.',
    );
    await era.printAndWait(
      'But if the traps stay live and the Master gets a chance to recover, the outcome is easy to imagine…',
    );
    await you.say_as_passer_by_and_wait(
      '???',
      "If you've coupled enough times, the odds of hitting a weak spot might go up.",
    );
  },
  /** @param {CharaTalk} you */
  async release(you) {
    await you.say_as_passer_by_and_wait(
      'The Art of War says',
      'Best is to break plans; next is to break alliances.',
    );
    await era.printAndWait([
      'If the Basement Master has already taken what they want from ',
      you.get_colored_name(),
      ', they might even agree to let you go.',
    ]);
  },
};
