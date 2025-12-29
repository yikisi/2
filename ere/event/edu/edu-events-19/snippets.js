const era = require('#/era-electron');

const { i18n } = require('#/i18n/selector');

const dia_color = '#cdaa7d';

function get_dia_name() {
  return {
    content: i18n().name.digital_npc,
    color: dia_color,
    fontWeight: 'bold',
  };
}

module.exports = {
  dia_color,
  get_dia_name,
  say_by_diamond_lord(content) {
    return era.printAndWait(
      [
        get_dia_name(),
        '「',
        ...(Array.isArray(content) ? content : [content]),
        '」',
      ],
      { color: dia_color },
    );
  },
};
