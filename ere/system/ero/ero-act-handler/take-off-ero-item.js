const era = require('#/era-electron');

const { get_tequip_info } = require('#/system/ero/sys-calc-ero-item');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { get_slang_part_name_key, part_enum } = require('#/data/ero/part-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {CharaTalk} chara
 * @returns {Promise<{item:number,part:number,user:number}>}
 */
async function take_off_ero_item(chara) {
  const me = get_chara_talk(0);
  era.printMultiColumns([
    { content: i18n().timon.ero_sys.itm_take_off_select_target, type: 'text' },
    {
      accelerator: 0,
      config: { align: 'center', width: 8 },
      content: me.name,
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
      content: i18n().ui_cancel,
      type: 'button',
    },
  ]);
  const aim_id = await era.input();
  if (aim_id === 999) {
    await era.printAndWait(i18n().timon.ero_sys.get_itm_give_up_take_off(me));
    return void 0;
  }
  const aim_chara = aim_id > 0 ? chara : me;
  let item_list = get_tequip_info(aim_id).filter(({ item }) => item !== -1);
  if (!item_list.length) {
    await era.printAndWait(
      i18n().timon.ero_sys.get_itm_no_item_to_take_off(aim_chara),
    );
    return void 0;
  }
  era.printMultiColumns(
    [
      { content: i18n().timon.ero_sys.itm_take_off_select_item, type: 'text' },
      ...item_list.map(({ part, item }, i) => ({
        accelerator: i,
        config: { align: 'center', width: 4 },
        content:
          typeof part === 'number'
            ? i18n()
                .timon.ero_sys.itm_take_off_select_entry_template.replace(
                  '%ITEM%',
                  i18n().tb_item[item],
                )
                .replace('%PART%', i18n().body_part[part_enum.keys[part]])
            : i18n().tb_item[part],
        type: 'button',
      })),
    ],
    { horizontalAlign: 'space-evenly' },
  );
  const used_item = item_list[await era.input()];
  if (
    !(await select_yes_or_no(
      +used_item.part === item_enum.mirror
        ? i18n().timon.ero_sys.itm_take_off_mirror_confirm
        : i18n().timon.ero_sys.get_itm_take_off_confirm(
            aim_chara,
            {
              color: buff_colors[2],
              content:
                i18n().body_part[get_slang_part_name_key(used_item.part)],
            },
            {
              color: buff_colors[2],
              content: i18n().tb_item[used_item.item],
            },
          ),
      i18n().ui_yes,
      i18n().ui_cancel,
    ))
  ) {
    era.print(
      i18n().timon.ero_sys.get_itm_take_off_give_up(me, {
        color: buff_colors[2],
        content: i18n().tb_item[used_item.item],
      }),
    );
    return void 0;
  }
  return used_item;
}

module.exports = take_off_ero_item;
