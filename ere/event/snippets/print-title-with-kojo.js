const print_event_name = require('#/event/snippets/print-event-name');

const { buff_colors } = require('#/data/color-const');

/**
 * @param kojo
 * @param {string} key
 * @param {CharaTalk} chara
 * @param args
 * @returns {Promise<number[]>}
 */
async function print_title_with_kojo(kojo, key, chara, ...args) {
  if ('title' in kojo[key]) {
    await print_event_name(kojo[key].title ?? 'TITLE LOST!', chara);
  }
  return args.length === 1 && args[0]._g
    ? await kojo[key](args[0])
    : await kojo[key](chara, ...args);
}

/**
 * @param kojo
 * @param {string} key
 * @param {CharaTalk} chara
 * @param args
 * @returns {Promise<number[]>}
 */
print_title_with_kojo.ending = async (kojo, key, chara, ...args) => {
  const ret =
    args.length === 1 && args[0]._g
      ? await kojo[key](args[0])
      : await kojo[key](chara, ...args);
  if ('title' in kojo[key]) {
    await print_event_name(
      [{ content: kojo[key].title, color: buff_colors[3] }],
      chara,
      void 0,
      6,
    );
  }
  return ret;
};

module.exports = print_title_with_kojo;
