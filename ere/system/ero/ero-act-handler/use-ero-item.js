const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { get_slang_part_name_key, part_enum } = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { location_enum } = require('#/data/locations');

const { i18n } = require('#/i18n/selector');

/**
 * @param {CharaTalk} chara
 * @returns {Promise<{item: number, part: number}>}
 */
async function use_ero_item(chara) {
  const cur_loc = era.get('flag:当前位置');
  const lover = chara.id;
  const penis_size = get_penis_size(lover);
  const virgin_size = era.get(`cflag:${lover}:阴道尺寸`);
  const item_list = [
    {
      a: item_enum.gag,
      e: era.get(`tequip:${lover}:口腔`) === -1,
    },
    { a: item_enum.clamps },
    {
      a: item_enum.electric_stunner,
      e: era.get('item:电击器'),
    },
    {
      a: item_enum.milk_pump,
      e:
        era.get(`tequip:${lover}:胸部`) === -1 &&
        (era.get(`talent:${lover}:乳头类型`) !== 2 ||
          era.get(`tcvar:${lover}:乳突`)),
    },
    { a: item_enum.love_eggs },
    { a: item_enum.dildo },
    {
      a: item_enum.artificial_virgin,
      e: penis_size && era.get(`tequip:${lover}:阴茎`) === -1,
    },
    {
      a: item_enum.butt_plug,
      e: era.get(`tequip:${lover}:肛门`) === -1,
    },
    {
      a: item_enum.anal_beads,
      e: era.get(`tequip:${lover}:肛门`) === -1,
    },
    {
      a: item_enum.blindfold,
      e: era.get(`tequip:${lover}:眼罩`) === -1,
    },
    {
      a: item_enum.collar,
      e: era.get(`tequip:${lover}:项圈`) === -1,
    },
    {
      a: item_enum.mirror,
      e:
        !era.get('tflag:全身镜') &&
        (cur_loc === location_enum.restroom ||
          cur_loc === location_enum.basement ||
          cur_loc === location_enum.home ||
          cur_loc === location_enum.hotel ||
          cur_loc === location_enum.love_hotel ||
          cur_loc === location_enum.summer_home),
    },
  ]
    .map((e) => ({ ...e, n: i18n().tb_item[e.a], c: era.get(`item:${e.a}`) }))
    .filter((e) => e.c > 0)
    .map((e) => ({ ...e, e: e.e ?? true }));
  if (item_list.every((e) => !e.e)) {
    await era.printAndWait(i18n().timon.ero_sys.itm_no_items);
    return void 0;
  }
  era.printInColRows(
    {
      columns: [
        { content: i18n().timon.ero_sys.itm_select_item, type: 'text' },
      ],
    },
    {
      columns: item_list.map((e, i) => ({
        accelerator: i,
        config: { align: 'center', disabled: !e.e, width: 4 },
        content: i18n()
          .timon.ero_sys.select_entry_template.replace(
            '%ITEM%',
            i18n().tb_item[e.a],
          )
          .replace('%COUNT%', e.c.toString()),
        type: 'button',
      })),
      config: { horizontalAlign: 'space-evenly' },
    },
  );
  const iid = item_list[await era.input()].a;
  let part = 100;
  let part_list = void 0;
  switch (iid) {
    case item_enum.gag:
      part = part_enum.mouth;
      break;
    case item_enum.clamps:
      part_list = [
        {
          a: part_enum.breast,
          d:
            era.get('item:夹子') < 2 ||
            era.get(`tequip:${lover}:胸部`) !== -1 ||
            (era.get(`talent:${lover}:乳头类型`) === 2 &&
              !era.get(`tcvar:${lover}:乳突`)),
          n: 's_nipple',
        },
        {
          a: part_enum.clitoris,
          d:
            !virgin_size ||
            penis_size ||
            era.get(`tequip:${lover}:外阴`) !== -1,
          n: 's_clitoris',
        },
      ];
      break;
    case item_enum.electric_stunner:
      part_list = [
        {
          a: part_enum.breast,
          d:
            era.get(`talent:${lover}:乳头类型`) === 2 &&
            !era.get(`tcvar:${lover}:乳突`),
          n: 's_nipple',
        },
        {
          a: part_enum.penis,
          d: !penis_size || era.get(`tequip:${lover}:阴茎`) !== -1,
          n: 's_penis',
        },
        {
          a: part_enum.clitoris,
          d: !virgin_size || penis_size,
          n: 's_clitoris',
        },
      ];
      break;
    case item_enum.milk_pump:
      part = part_enum.breast;
      break;
    case item_enum.love_eggs:
      part_list = [
        {
          a: part_enum.breast,
          d:
            era.get('item:跳蛋') < 2 ||
            era.get(`tequip:${lover}:胸部`) !== -1 ||
            (era.get(`talent:${lover}:乳头类型`) === 2 &&
              !era.get(`tcvar:${lover}:乳突`)),
          n: 's_nipple',
        },
        {
          a: part_enum.clitoris,
          d:
            !virgin_size ||
            penis_size ||
            era.get(`tequip:${lover}:外阴`) !== -1,
          n: 's_clitoris',
        },
        {
          a: part_enum.virgin,
          d: !virgin_size || era.get(`tequip:${lover}:阴道`) !== -1,
          n: 's_virgin',
        },
        {
          a: part_enum.anal,
          d: era.get(`tequip:${lover}:肛门`) !== -1,
          n: 's_anal',
        },
      ];
      break;
    case item_enum.dildo:
      part_list = [
        {
          a: part_enum.virgin,
          d:
            !virgin_size ||
            era.get(`tequip:${lover}:阴道`) !== -1 ||
            // TALENTNAME:31 = 处女
            era.get(`talent:${lover}:31`) > vp_status_enum.no ||
            era.get(`talent:${lover}:31`) === vp_status_enum.i_think,
          n: 's_virgin',
        },
        {
          a: part_enum.anal,
          d: era.get(`tequip:${lover}:肛门`) !== -1,
          n: 's_anal',
        },
      ];
      break;
    case item_enum.butt_plug:
    case item_enum.anal_beads:
      part = part_enum.anal;
      break;
    case item_enum.blindfold:
    case item_enum.collar:
    case item_enum.mirror:
      part = 99;
      break;
    case item_enum.artificial_virgin:
      part = part_enum.penis;
  }
  if (part_list) {
    part_list = part_list.filter((e) => !e.d);
    const part_count = part_list.length;
    if (part_count > 0) {
      era.printInColRows(
        {
          columns: [
            {
              content: i18n().timon.ero_sys.get_itm_select_part(chara, {
                color: buff_colors[2],
                content: i18n().tb_item[iid],
              }),
              type: 'text',
            },
          ],
        },
        {
          columns: part_list.map((e, i) => ({
            accelerator: i,
            config: { align: 'center', width: 24 / part_count },
            content: i18n().body_part[e.n],
            type: 'button',
          })),
        },
      );
      part = await era.input();
      part = part_list[part].a;
    } else {
      await era.printAndWait(i18n().timon.ero_sys.itm_no_parts);
    }
  }
  if (part !== 100) {
    era.printInColRows(
      {
        columns: [
          {
            content: (part !== 99
              ? i18n().timon.ero_sys.get_itm_confirm_with_part
              : i18n().timon.ero_sys.get_itm_confirm_without_part)(
              chara,
              { color: buff_colors[2], content: i18n().tb_item[iid] },
              {
                color: buff_colors[2],
                content: i18n().body_part[get_slang_part_name_key(part)],
              },
            ),
            type: 'text',
          },
        ],
      },
      {
        columns: [
          {
            accelerator: 0,
            config: { align: 'center', width: 12 },
            content: i18n().ui_yes,
            type: 'button',
          },
          {
            accelerator: 100,
            config: { align: 'center', width: 12 },
            content: i18n().ui_cancel,
            type: 'button',
          },
        ],
      },
    );
    part = (await era.input()) || part;
  }
  if (part === 100) {
    await era.printAndWait(
      i18n().timon.ero_sys.get_itm_give_up_item(get_chara_talk(0), {
        color: buff_colors[2],
        content: i18n().tb_item[iid],
      }),
    );
    return void 0;
  }
  return { item: iid, part };
}

module.exports = use_ero_item;
