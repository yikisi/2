const era = require('#/era-electron');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @returns {Promise<number>}
 */
function select_action_in_station(cid = 0) {
  era.printInColRows(
    { columns: [{ content: i18n().ui_select_action_station, type: 'text' }] },
    {
      columns: [
        i18n().ui_action_station_restaurant,
        i18n().ui_action_station_date,
        i18n().ui_action_station_shopping,
      ]
        .map((action, i) => ({
          accelerator: i,
          content: action,
          type: 'button',
        }))
        .filter((_, i) => i !== 1 || cid > 0)
        .map((b, i, l) => ({
          config: {
            align: 'center',
            disabled: l.length === 3 && i === 1 && era.get(`love:${cid}`) < 50,
            width: 24 / l.length,
          },
          ...b,
        })),
    },
  );
  return era.input();
}

module.exports = select_action_in_station;
