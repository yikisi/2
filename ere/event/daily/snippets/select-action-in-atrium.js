const era = require('#/era-electron');

function select_action_in_atrium() {
  era.printInColRows(
    { columns: [{ content: '一起前往中庭做什么呢？', type: 'text' }] },
    {
      columns: ['看看枯树洞', '约会'].map((e, i) => {
        return {
          accelerator: i * 100,
          config: { align: 'center', width: 12 },
          content: `去${e}吧`,
          type: 'button',
        };
      }),
    },
  );
  return era.input();
}

module.exports = select_action_in_atrium;
