const era = require('#/era-electron');

/**
 * @param {number} cid
 * @returns {Promise<number>}
 */
function select_action_in_station(cid = 0) {
  era.printInColRows(
    { columns: [{ content: '前往车站做什么呢？', type: 'text' }] },
    {
      columns: ['吃饭', '约会', '逛商场']
        .map((action, i) => ({
          accelerator: i,
          content: `去${action}吧`,
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
