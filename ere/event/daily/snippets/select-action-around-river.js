const era = require('#/era-electron');

/** @returns {Promise<number>} */
function select_action_around_river() {
  era.printInColRows(
    { columns: [{ content: '前往河边做什么呢？', type: 'text' }] },
    {
      columns: ['钓鱼', '散步'].map((action, i) => ({
        accelerator: i * 100,
        config: { align: 'center', width: 12 },
        content: `去${action}吧`,
        type: 'button',
      })),
    },
  );
  return era.input();
}

module.exports = select_action_around_river;
