const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const CharaTalk = require('#/utils/chara-talk');

const { buff_colors } = require('#/data/color-const');
const { item_enum, item_names } = require('#/data/ero/item-const');
const {
  part_enum,
  part_names,
  part_names4item,
} = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { location_enum } = require('#/data/locations');

/**
 * @param {CharaTalk} chara
 * @returns {Promise<{item: number, part: number}>}
 */
async function use_ero_item(chara) {
  const cur_location = era.get('flag:当前位置'),
    cur_lover = chara.id,
    penis_size = get_penis_size(cur_lover),
    virgin_size = era.get(`cflag:${cur_lover}:阴道尺寸`);
  const item_list = [
    {
      a: item_enum.gag,
      e: () => era.get(`tequip:${cur_lover}:口腔`) === -1,
    },
    { a: item_enum.clamps },
    {
      a: item_enum.electric_stunner,
      e: () => era.get('item:电击器'),
    },
    {
      a: item_enum.milk_pump,
      e: () =>
        era.get(`tequip:${cur_lover}:胸部`) === -1 &&
        (era.get(`talent:${cur_lover}:乳头类型`) !== 2 ||
          era.get(`tcvar:${cur_lover}:乳突`)),
    },
    { a: item_enum.love_eggs },
    { a: item_enum.dildo },
    {
      a: item_enum.artificial_virgin,
      e: () => penis_size && era.get(`tequip:${cur_lover}:阴茎`) === -1,
    },
    {
      a: item_enum.butt_plug,
      e: () => era.get(`tequip:${cur_lover}:肛门`) === -1,
    },
    {
      a: item_enum.anal_beads,
      e: () => era.get(`tequip:${cur_lover}:肛门`) === -1,
    },
    {
      a: item_enum.blindfold,
      e: () => era.get(`tequip:${cur_lover}:眼罩`) === -1,
    },
    {
      a: item_enum.collar,
      e: () => era.get(`tequip:${cur_lover}:项圈`) === -1,
    },
    {
      a: item_enum.mirror,
      e: () =>
        !era.get('tflag:全身镜') &&
        (cur_location === location_enum.restroom ||
          cur_location === location_enum.basement ||
          cur_location === location_enum.home ||
          cur_location === location_enum.hotel ||
          cur_location === location_enum.love_hotel ||
          cur_location === location_enum.summer_home),
    },
  ]
    .map((e) => {
      e.n = item_names[e.a];
      e.c = era.get(`item:${e.n}`);
      return e;
    })
    .filter((e) => e.c > 0)
    .map((e) => {
      e.e = e.e ? e.e() : true;
      return e;
    });
  if (!item_list.filter((e) => e.e).length) {
    await era.printAndWait('暂时没有可用的性玩具……');
    return undefined;
  }
  era.printInColRows(
    { columns: [{ content: '要使用什么性玩具？', type: 'text' }] },
    {
      columns: item_list.map((e, i) => {
        return {
          accelerator: i,
          config: { align: 'center', disabled: !e.e, width: 4 },
          content: `${item_names[e.a]} (${e.c})`,
          type: 'button',
        };
      }),
      config: { horizontalAlign: 'space-evenly' },
    },
  );
  const item = item_list[await era.input()].a;
  let part = 100,
    part_list = undefined;
  switch (item) {
    case item_enum.gag:
      part = part_enum.mouth;
      break;
    case item_enum.clamps:
      part_list = [
        {
          a: part_enum.breast,
          d:
            era.get('item:夹子') < 2 ||
            era.get(`tequip:${cur_lover}:胸部`) !== -1 ||
            (era.get(`talent:${cur_lover}:乳头类型`) === 2 &&
              !era.get(`tcvar:${cur_lover}:乳突`)),
          n: '乳头',
        },
        {
          a: part_enum.clitoris,
          d:
            !virgin_size ||
            penis_size ||
            era.get(`tequip:${cur_lover}:外阴`) !== -1,
          n: '阴蒂',
        },
      ];
      break;
    case item_enum.electric_stunner:
      part_list = [
        {
          a: part_enum.breast,
          d:
            era.get(`talent:${cur_lover}:乳头类型`) === 2 &&
            !era.get(`tcvar:${cur_lover}:乳突`),
          n: '乳头',
        },
        {
          a: part_enum.penis,
          d: !penis_size || era.get(`tequip:${cur_lover}:阴茎`) !== -1,
          n: '肉棒',
        },
        {
          a: part_enum.clitoris,
          d: !virgin_size || penis_size,
          n: '阴蒂',
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
            era.get(`tequip:${cur_lover}:胸部`) !== -1 ||
            (era.get(`talent:${cur_lover}:乳头类型`) === 2 &&
              !era.get(`tcvar:${cur_lover}:乳突`)),
          n: '乳头',
        },
        {
          a: part_enum.clitoris,
          d:
            !virgin_size ||
            penis_size ||
            era.get(`tequip:${cur_lover}:外阴`) !== -1,
          n: '阴蒂',
        },
        {
          a: part_enum.virgin,
          d: !virgin_size || era.get(`tequip:${cur_lover}:阴道`) !== -1,
          n: '阴道',
        },
        {
          a: part_enum.anal,
          d: era.get(`tequip:${cur_lover}:肛门`) !== -1,
          n: '菊花',
        },
      ];
      break;
    case item_enum.dildo:
      part_list = [
        {
          a: part_enum.virgin,
          d:
            !virgin_size ||
            era.get(`tequip:${cur_lover}:阴道`) !== -1 ||
            era.get(`talent:${cur_lover}:处女`) > vp_status_enum.no ||
            era.get(`talent:${cur_lover}:处女`) === vp_status_enum.i_think,
          n: '阴道',
        },
        {
          a: part_enum.anal,
          d: era.get(`tequip:${cur_lover}:肛门`) !== -1,
          n: '菊花',
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
    if (part_list.length) {
      era.printInColRows(
        {
          columns: [
            {
              content: [
                '要对 ',
                chara.get_colored_name(),
                ' 的什么部位使用 ',
                { color: buff_colors[2], content: item_names[item] },
                '？',
              ],
              type: 'text',
            },
          ],
        },
        {
          columns: part_list.map((e, i, l) => {
            return {
              accelerator: i,
              config: { align: 'center', width: 24 / l.length },
              content: e.n,
              type: 'button',
            };
          }),
        },
      );
      part = await era.input();
      part = part_list[part].a;
    } else {
      await era.printAndWait('没有可以使用该性玩具的部位……');
    }
  }
  if (part !== 100) {
    era.printInColRows(
      {
        columns: [
          {
            content: [
              '确定要对 ',
              chara.get_colored_name(),
              ...(part !== 99
                ? [
                    ' 的 ',
                    {
                      color: buff_colors[2],
                      content: part_names4item[part] || part_names[part],
                    },
                  ]
                : ['']),
              ' 使用 ',
              { color: buff_colors[2], content: item_names[item] },
              ' 吗？',
            ],
            type: 'text',
          },
        ],
      },
      {
        columns: [
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
        ],
      },
    );
    part = (await era.input()) || part;
  }
  if (part === 100) {
    await era.printAndWait([
      CharaTalk.me.get_colored_name(),
      ' 放弃了使用 ',
      { color: buff_colors[2], content: item_names[item] },
      '……',
    ]);
    return undefined;
  }
  return { item, part };
}

module.exports = use_ero_item;
