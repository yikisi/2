const era = require('#/era-electron');

const { i18n } = require('#/i18n/selector');

/** @returns {Promise<number>} */
function select_action_around_river() {
  era.printInColRows(
    { columns: [{ content: i18n().ui_select_action_river, type: 'text' }] },
    {
      columns: [i18n().ui_action_river_fish, i18n().ui_action_river_walk].map(
        (action, i) => ({
          accelerator: i * 100,
          config: { align: 'center', width: 12 },
          content: action,
          type: 'button',
        }),
      ),
    },
  );
  return era.input();
}

module.exports = select_action_around_river;
