const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {string} name
 * @param {CharaTalk} chara
 * @param kojo
 * @param dict
 * @returns {Promise<number[]>}
 */
async function print_name_and_show_kojo(name, chara, kojo, dict) {
  await print_event_name(name, chara);
  return await kojo[name](dict);
}

module.exports = print_name_and_show_kojo;
