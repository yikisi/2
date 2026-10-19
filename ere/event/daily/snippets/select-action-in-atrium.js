const era = require('#/era-electron');

const { i18n } = require('#/i18n/selector');

/**
 * @param {boolean} evil_enabled 是否启用恶堕
 * @returns {Promise<number>}
 */
function select_action_in_atrium(evil_enabled = false) {
  era.printInColRows(
    { columns: [{ content: i18n().ui_select_action_atrium, type: 'text' }] },
    {
      columns: [
        i18n().ui_action_atrium_tree_hollow,
        i18n().ui_action_atrium_date,
        evil_enabled &&
          (era.get('flag:恶堕') === 2
            ? i18n().ui_action_atrium_uevil
            : i18n().ui_action_atrium_devil),
      ]
        .filter((e) => e)
        .map((action, i, l) => ({
          accelerator: i + 1,
          config: { align: 'center', width: 24 / l.length },
          content: action,
          type: 'button',
        })),
    },
  );
  return era.input();
}

module.exports = select_action_in_atrium;
