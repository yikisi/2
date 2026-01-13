const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param kojo
 * @param {string} key
 * @param {CharaTalk} chara
 * @param {Record} dict
 * @returns {Promise<number[]>}
 */
async function print_title_with_kojo(kojo, key, chara, dict) {
  if (kojo[key].title !== void 0) {
    await print_event_name(kojo[key].title, chara);
  }
  return await kojo[key](dict);
}

module.exports = print_title_with_kojo;
