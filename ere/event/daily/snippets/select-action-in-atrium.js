const era = require('#/era-electron');

const { i18n } = require('#/i18n/selector');

/** @returns {Promise<number>} */
function select_action_in_atrium() {
  era.printInColRows(
    { columns: [{ content: i18n().ui_select_action_atrium, type: 'text' }] },
    {
      columns: [
        i18n().ui_action_atrium_tree_hollow,
        i18n().ui_action_atrium_date,
      ].map((action, i) => ({
        accelerator: i * 100,
        config: { align: 'center', width: 12 },
        content: action,
        type: 'button',
      })),
    },
  );
  return era.input();
}

module.exports = select_action_in_atrium;
