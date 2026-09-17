/**
 * @file Player - Daily
 * @author 雞雞
 * @author 黑奴队长（adapted）
 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} you player */
  async office_cook(you) {
    await printAndWait([
      you.get_colored_name(),
      " cooks alone in the trainer's office, treating yourself to some fried food for a change.",
    ]);
  },
  /** @param {CharaTalk} you player */
  async office_rest(you) {
    await printAndWait([
      you.get_colored_name(),
      " rests alone in the trainer's office, zoning out for a while.",
    ]);
  },
  /** @param {CharaTalk} you player */
  async office_game(you) {
    await printAndWait([
      you.get_colored_name(),
      " games alone in the trainer's office, hoping the boss doesn't notice.",
    ]);
  },
  /** @param {CharaTalk} you player */
  async school_atrium(you) {
    await printAndWait([
      you.get_colored_name(),
      ' heads to the atrium alone and kills some time doing nothing in particular.',
    ]);
  },
  /** @param {CharaTalk} you player */
  async school_rooftop(you) {
    await printAndWait([
      you.get_colored_name(),
      ' heads up to the rooftop alone, weighing whether to ignore the "Smoke-Free Campus" sign and light one up.',
    ]);
  },
  /** @param {CharaTalk} you player */
  async o_r_fishing(you) {
    await printAndWait([
      you.get_colored_name(),
      " goes fishing alone by the river, hoping it won't be a total bust.",
    ]);
  },
  /** @param {CharaTalk} you player */
  async o_r_walking(you) {
    await printAndWait([
      you.get_colored_name(),
      ' takes a walk alone by the river and idles the time away.',
    ]);
  },
  /** @param {CharaTalk} you player */
  async o_s_arcade(you) {
    await printAndWait([
      you.get_colored_name(),
      ' drops by the shopping district arcade alone. What to play to kill time?',
    ]);
  },
  /** @param {CharaTalk} you player */
  async o_s_drawing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' stops by the shopping district lottery alone. Time to draw something good!',
    ]);
  },
  /** @param {CharaTalk} you player */
  async o_s_ktv(you) {
    await printAndWait([
      you.get_colored_name(),
      ' ends up at the shopping district karaoke alone. Why bother with something this dull…',
    ]);
  },
  /** @param {CharaTalk} you player */
  async o_s_movie(you) {
    await printAndWait([
      you.get_colored_name(),
      ' goes to see a movie alone in the shopping district, that odd feeling of not fitting in among the crowd still hanging on.',
    ]);
  },
  /** @param {CharaTalk} you player */
  async o_s_ero_item(you) {
    await printAndWait([
      you.get_colored_name(),
      ' heads into the shopping district alone and makes a beeline for that discreet little pink shop…',
    ]);
  },
  /**
   * @param {CharaTalk} you player
   * @param {number} dice prayer roll result, decimal between 0-1; lower is better
   */
  async o_c_pray(you, dice) {
    await printAndWait([
      you.get_colored_name(),
      ' visits the shrine alone to pray.',
    ]);
    if (dice < 0.5) {
      await printAndWait('Drew a lucky fortune slip! The trip was worth it.');
    } else {
      await printAndWait(
        'Drew an unlucky fortune slip! Better keep a low profile for the next few days…',
      );
    }
  },
  /** @param {CharaTalk} you player */
  async o_s_restaurant(you) {
    await printAndWait([
      you.get_colored_name(),
      ' grabs a meal alone near the station. The usual favorite still tastes just right.',
    ]);
  },
  /** @param {CharaTalk} you player */
  async o_s_shopping(you) {
    await printAndWait([
      you.get_colored_name(),
      ' browses the mall alone near the station. Time to check that shopping list.',
    ]);
  },
};
