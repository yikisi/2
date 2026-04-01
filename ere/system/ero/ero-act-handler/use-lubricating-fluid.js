const era = require('#/era-electron');

const {
  check_lubrication,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { part_enum } = require('#/data/ero/part-const');

const { __, i18n } = require('#/i18n/selector');

/**
 * @param {CharaTalk} chara
 */
async function use_lubricating_fluid(chara) {
  const me = get_chara_talk(0);
  era.printMultiColumns([
    {
      content: i18n().timon.ero_sys.lub_select_target,
      type: 'text',
    },
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
    await era.printAndWait(i18n().timon.ero_sys.get_lub_give_up(me));
    return void 0;
  }
  const aim_chara = aim_id ? chara : me,
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
      .map((e) => ({ ...e, e: !check_lubrication(aim_id, e.p) }));
  if (buffer.every((e) => !e.e)) {
    await era.printAndWait(i18n().timon.ero_sys.lub_no_parts);
    return void 0;
  }
  era.printMultiColumns(
    [
      {
        content: i18n().timon.ero_sys.get_lub_select_part(aim_chara),
        type: 'text',
      },
      ...buffer.map((e) => ({
        accelerator: e.p,
        config: { align: 'center', disabled: !e.e, width: 4 },
        content: __(`body_part.s_${part_enum.keys[e.p]}`),
        type: 'button',
      })),
    ],
    { horizontalAlign: 'space-evenly' },
  );
  const part = await era.input();
  if (
    !(await select_yes_or_no(
      i18n().timon.ero_sys.get_lub_confirm(aim_chara, {
        color: buff_colors[2],
        content: __(`body_part.s_${part_enum.keys[part]}`),
      }),
      i18n().ui_yes,
      i18n().ui_cancel,
    ))
  ) {
    await era.printAndWait(i18n().timon.ero_sys.get_lub_give_up(me));
    return void 0;
  }
  return { part, user: aim_id };
}

module.exports = use_lubricating_fluid;
