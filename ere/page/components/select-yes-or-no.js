const era = require('#/era-electron');

const { i18n } = require('#/i18n/selector');

/**
 * @param {string|array} content
 * @param {string} [yes_button]
 * @param {string} [no_button]
 */
async function select_yes_or_no(
  content,
  yes_button = i18n().ui_yes,
  no_button = i18n().ui_no,
) {
  era.printMultiColumns([
    { content, type: 'text' },
    {
      accelerator: 0,
      config: { align: 'center', width: 12 },
      content: yes_button,
      type: 'button',
    },
    {
      accelerator: 100,
      config: { align: 'center', width: 12 },
      content: no_button,
      type: 'button',
    },
  ]);
  return (await era.input()) === 0;
}

module.exports = select_yes_or_no;
