const era = require('#/era-electron');

const { __, i18n } = require('#/i18n/selector');

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
          content: __(`tb_item.${item.id}`),
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
            ? i18n().ui_storage_have_items
            : i18n().ui_storage_no_items,
        type: 'text',
      },
      ...buffer,
      {
        accelerator: 999,
        content: i18n().ui_back,
        type: 'button',
      },
    ]);
    const selected = await era.input();
    if (selected === 999) {
      s_flag = false;
    } else {
      era.print(__(`tb_item.${selected}`));
      era.println();
      era.print(__(`item_desc.${selected}`));
      if (handlers[selected]) {
        if (await handlers[selected](selected)) {
          buffer = get_item_list();
        }
      } else {
        await era.waitAnyKey();
      }
      await era.clear(era.getLineCount() - curr);
    }
  }
};
