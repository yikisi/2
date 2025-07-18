const era = require('#/era-electron');

function select_action_in_shopping_street() {
  era.printInColRows(
    { columns: [{ content: '前往商店街做什么呢？', type: 'text' }] },
    {
      columns: [
        '街机厅',
        '抽奖',
        '卡拉OK',
        '看电影',
        era.get('flag:当前互动角色') > 0 ? '' : '粉红色的小店',
      ]
        .filter((e) => e)
        .map((e, i, l) => {
          return {
            accelerator: i,
            config: { align: 'center', width: Math.floor(24 / l.length) },
            content: `去${e}吧`,
            type: 'button',
          };
        }),
      config: { horizontalAlign: 'space-evenly' },
    },
  );
  return era.input();
}

module.exports = select_action_in_shopping_street;
