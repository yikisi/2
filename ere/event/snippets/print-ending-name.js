const print_event_name = require('#/event/snippets/print-event-name');

const { buff_colors } = require('#/data/color-const');

/**
 * @param {string} name
 * @param {CharaTalk} chara
 */
async function print_ending_name(name, chara) {
  await print_event_name(
    [{ content: name, color: buff_colors[3] }],
    chara,
    undefined,
    6,
  );
}

module.exports = print_ending_name;
