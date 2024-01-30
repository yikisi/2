const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { item_names, tequip_parts } = require('#/data/ero/item-const');
const {
  part_enum,
  part_names,
  part_names4item,
} = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} chara
 * @returns {Promise<{item:number,part:number,user:number}>}
 */
async function take_off_ero_item(chara) {
  era.printMultiColumns([
    { content: '要撤除谁身上的性玩具？', type: 'text' },
    {
      accelerator: 0,
      config: { align: 'center', width: 8 },
      content: CharaTalk.me.name,
      type: 'button',
    },
    {
      accelerator: chara.id,
      config: { align: 'center', width: 8 },
      content: chara.name,
      type: 'button',
    },
    {
      accelerator: 999,
      config: { align: 'center', width: 8 },
      content: '容我想想',
      type: 'button',
    },
  ]);
  const aim_id = await era.input();
  if (aim_id === 999) {
    era.print([CharaTalk.me.get_colored_name(), ' 放弃了撤除性玩具……']);
    return undefined;
  }
  const aim_chara = aim_id ? chara : CharaTalk.me;
  let item_list = tequip_parts.map((p) => {
    const item = era.get(`tequip:${aim_id}:${part_names[p] || p}`);
    return {
      item,
      part: p,
      user: aim_id,
    };
  });
  item_list.push({
    item: era.get('tflag:全身镜') - 1,
    part: '全身镜',
  });
  item_list = item_list.filter((e) => e.item !== -1);
  if (!item_list.length) {
    era.print([aim_chara.get_colored_name(), ' 身上没有性玩具……']);
    return undefined;
  }
  era.printMultiColumns(
    [
      { content: '要撤除什么性玩具？', type: 'text' },
      ...item_list.map((e, i) => {
        return {
          accelerator: i,
          config: { align: 'center', width: 4 },
          content:
            typeof e.part === 'string'
              ? e.part
              : `${item_names[e.item]} (${
                  part_names4item[e.part] || part_names[e.part]
                })`,
          type: 'button',
        };
      }),
    ],
    { horizontalAlign: 'space-evenly' },
  );
  const used_item = item_list[await era.input()];
  era.printMultiColumns([
    used_item.part === '全身镜'
      ? { content: '确定要撤除全身镜吗？', type: 'text' }
      : {
          content: [
            '确定要从 ',
            aim_chara.get_colored_name(),
            ' 的 ',
            {
              color: buff_colors[2],
              content:
                part_names4item[used_item.part] ||
                part_names[used_item.part] ||
                '身上',
            },
            ' 撤除 ',
            {
              color: buff_colors[2],
              content: item_names[used_item.item],
            },
            ' 吗？',
          ],
          type: 'text',
        },
    {
      accelerator: 0,
      config: { align: 'center', width: 12 },
      content: '确定',
      type: 'button',
    },
    {
      accelerator: 100,
      config: {
        align: 'center',
        width: 12,
      },
      content: '容我想想',
      type: 'button',
    },
  ]);
  const tmp = await era.input();
  if (tmp) {
    era.print([
      get_chara_talk(0).get_colored_name(),
      ' 放弃了撤除 ',
      { color: buff_colors[2], content: item_names[used_item.item] },
      '……',
    ]);
    return undefined;
  }
  return used_item;
}

module.exports = take_off_ero_item;
