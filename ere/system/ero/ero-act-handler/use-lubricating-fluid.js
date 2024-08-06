const era = require('#/era-electron');

const {
  check_lubrication,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');

const CharaTalk = require('#/utils/chara-talk');

const { buff_colors } = require('#/data/color-const');
const { part_enum, part_names } = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} chara
 */
async function use_lubricating_fluid(chara) {
  era.printMultiColumns([
    { content: '要给谁使用润滑液？', type: 'text' },
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
    era.print([CharaTalk.me.get_colored_name(), ' 放弃了使用润滑液……']);
    return undefined;
  }
  const aim_chara = aim_id ? chara : CharaTalk.me,
    buffer = [
      {
        p: part_enum.breast,
      },
      {
        p: part_enum.penis,
        c: get_penis_size(aim_id) > 0,
      },
      {
        p: part_enum.virgin,
        c: era.get(`cflag:${aim_id}:性别`) !== 1,
      },
      {
        p: part_enum.anal,
      },
    ]
      .filter((e) => e.c !== false)
      .map((e) => {
        e.e = !check_lubrication(aim_id, e.p);
        return e;
      });
  if (!buffer.filter((e) => e.e).length) {
    era.print('没有需要润滑的部位……');
    return undefined;
  }
  era.printMultiColumns(
    [
      {
        content: ['要润滑 ', aim_chara.get_colored_name(), ' 的哪个部位？'],
        type: 'text',
      },
      ...buffer.map((e) => {
        return {
          accelerator: e.p,
          config: { align: 'center', disabled: !e.e, width: 4 },
          content: part_names[e.p],
          type: 'button',
        };
      }),
    ],
    { horizontalAlign: 'space-evenly' },
  );
  const part = await era.input();
  era.printMultiColumns([
    {
      content: [
        '要润滑 ',
        aim_chara.get_colored_name(),
        ' 的 ',
        {
          color: buff_colors[2],
          content: part_names[part],
        },
        ' 吗？',
      ],
      type: 'text',
    },
    ...['确定', '容我想想'].map((e, i) => {
      return {
        accelerator: 100 * i,
        config: { align: 'center', width: 12 },
        content: e,
        type: 'button',
      };
    }),
  ]);
  if (await era.input()) {
    era.print([
      CharaTalk.me.get_colored_name(),
      ' 放弃了使用 ',
      { color: buff_colors[2], content: '润滑液' },
      '……',
    ]);
    return undefined;
  }
  return { part, user: aim_id };
}

module.exports = use_lubricating_fluid;
