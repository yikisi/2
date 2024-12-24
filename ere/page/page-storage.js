const era = require('#/era-electron');

const shop_desc = require('#/data/desc/shop-desc.json');

const handlers = {};

const current = new Date().getTime();

[
  require('#/page/storage/item-handlers-vehicle'),
  require('#/page/storage/item-handlers-mind-reader'),
  require('#/page/storage/item-handlers-ero-items'),
  require('#/page/storage/item-handlers-medicine'),
].forEach((f) => f(handlers));

console.log(
  '[page-storage.js] storage handlers init done!',
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
  let buffer = get_item_list(),
    flag_storage = true;
  const cur_lines = era.getLineCount();
  while (flag_storage) {
    era.printMultiColumns([
      {
        content:
          buffer.length > 0
            ? '目前拥有以下道具：（点击道具按钮可以使用或查看说明）'
            : '没有持有任何道具……',
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
      flag_storage = false;
    } else {
      const name = era.get(`itemname:${ret}`).toUpperCase();
      era.print(name);
      const desc = shop_desc[shop_desc[name]] || shop_desc[name];
      if (desc) {
        era.print(`\n${desc}\n`);
      } else {
        era.println();
      }
      if (handlers[ret]) {
        (await handlers[ret](ret)) && (buffer = get_item_list());
      } else {
        await era.waitAnyKey();
      }
      const line_count = era.getLineCount() - cur_lines;
      if (line_count > 0) {
        await era.clear(line_count);
      }
    }
  }
};
