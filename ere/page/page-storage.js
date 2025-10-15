const era = require('#/era-electron');

const shop_desc = require('#/data/desc/items.json');

const handlers = {};

const current = new Date().getTime();

[
  require('#/page/storage/item-handlers-vehicle'),
  require('#/page/storage/item-handlers-mind-reader'),
  require('#/page/storage/item-handlers-ero-items'),
  require('#/page/storage/item-handlers-medicine'),
  require('#/page/storage/item-handlers-mechanism'),
].forEach((f) => f(handlers));

console.log(
  '道具使用函数注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

function get_item_list() {
  const buffer = [];
  era
    .get('itemkeys')
    .map((e) => {
      return { has: era.get(`item:${e}`), id: e };
    })
    .filter((e) => e.has > 0)
    .forEach((item, i) => {
      buffer.push(
        {
          accelerator: item.id,
          config: { offset: i % 4 > 0, width: 3 },
          content: era.get(`itemname:${item.id}`).toUpperCase(),
          type: 'button',
        },
        {
          config: { align: 'right', width: 2 },
          content: `× ${item.has}`,
          type: 'text',
        },
      );
    });
  return buffer;
}

module.exports = async () => {
  let buffer = get_item_list();
  let s_flag = true;
  const curr = era.getLineCount();
  while (s_flag) {
    era.printMultiColumns([
      {
        content:
          buffer.length > 0
            ? '目前拥有以下道具：（点击道具按钮可以使用或查看说明）'
            : '没有持有任何道具',
        type: 'text',
      },
      ...buffer,
      {
        accelerator: 999,
        content: '返回',
        type: 'button',
      },
    ]);
    const ret = await era.input();
    if (ret === 999) {
      s_flag = false;
    } else {
      const name = era.get(`itemname:${ret}`).toUpperCase();
      era.print(name);
      const desc = shop_desc[shop_desc[name]] || shop_desc[name];
      if (desc) {
        era.println();
        era.print(desc);
      } else {
        era.println();
      }
      if (handlers[ret]) {
        if (await handlers[ret](ret)) {
          buffer = get_item_list();
        }
      } else {
        await era.waitAnyKey();
      }
      await era.clear(era.getLineCount() - curr);
    }
  }
};
