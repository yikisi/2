const era = require('#/era-electron');

/** @param {number} [chara_id] */
function select_action_in_station(chara_id) {
  era.printInColRows(
    { columns: [{ content: '前往车站做什么呢？', type: 'text' }] },
    {
      columns: ['吃饭', '约会', '逛商场']
        .map((e, i) => {
          return {
            accelerator: i,
            content: `去${e}吧`,
            type: 'button',
          };
        })
        .filter((_, i) => i !== 1 || chara_id)
        .map((e, i, l) => {
          e.config = {
            align: 'center',
            disabled:
              l.length === 3 && i === 1 && era.get(`love:${chara_id}`) < 50,
            width: 24 / l.length,
          };
          return e;
        }),
    },
  );
  return era.input();
}

module.exports = select_action_in_station;
