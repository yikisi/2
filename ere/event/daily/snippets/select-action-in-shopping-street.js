const era = require('#/era-electron');

const { i18n } = require('#/i18n/selector');

/** @returns {Promise<number>} */
function select_action_in_shopping_street() {
  era.printInColRows(
    { columns: [{ content: i18n().ui_select_action_shopping, type: 'text' }] },
    {
      columns: [
        i18n().ui_action_shopping_arcade,
        i18n().ui_action_shopping_drawing,
        i18n().ui_action_shopping_ktv,
        i18n().ui_action_shopping_movie,
        era.get('flag:当前互动角色') === 0 &&
          i18n().ui_action_shopping_ero_item,
      ]
        .filter((e) => e)
        .map((action, i, l) => ({
          accelerator: i,
          config: { align: 'center', width: Math.floor(24 / l.length) },
          content: action,
          type: 'button',
        })),
      config: { horizontalAlign: 'space-evenly' },
    },
  );
  return era.input();
}

module.exports = select_action_in_shopping_street;
