const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {CharaTalk} chara
 * @returns {Promise<{user:number,item:number}>}
 */
async function use_ero_medicine(chara) {
  const uma_z = era.get(`item:${medicine_enum.uma_z}`);
  const uma_s = era.get(`item:${medicine_enum.uma_s}`);
  const super_z = era.get(`item:${medicine_enum.super_z}`);
  const anti_p_s = era.get(`item:${medicine_enum.anti_p_s}`);
  const anti_p_l = era.get(`item:${medicine_enum.anti_p_l}`);
  const drug_p = era.get(`item:${medicine_enum.drug_p}`);
  const drug_m = era.get(`item:${medicine_enum.drug_m}`);
  const fron_k = era.get(`item:${medicine_enum.fron_k}`);
  const fron_p = era.get(`item:${medicine_enum.fron_p}`);
  const milk_h = era.get(`item:${medicine_enum.milk_h}`);
  const milk_u = era.get(`item:${medicine_enum.milk_u}`);
  const stop_o = era.get(`item:${medicine_enum.stop_o}`);
  if (
    !uma_z &&
    !uma_s &&
    !super_z &&
    !anti_p_s &&
    !anti_p_l &&
    !drug_p &&
    !drug_m &&
    !fron_k &&
    !fron_p &&
    !milk_h &&
    !milk_u &&
    !stop_o
  ) {
    await era.printAndWait(i18n().timon.ero_sys.med_no_medicines);
    return void 0;
  }
  const me = get_chara_talk(0);
  era.printMultiColumns([
    { content: i18n().timon.ero_sys.med_select_target, type: 'text' },
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
    await era.printAndWait(i18n().timon.ero_sys.get_med_give_up(me));
    return void 0;
  }
  const aim_chara = aim_id ? chara : me;
  const fron_status =
    era.get(`status:${aim_id}:弗隆K`) ||
    era.get(`status:${aim_id}:弗隆P`) ||
    era.get(`tequip:${aim_id}:外阴`) !== -1;
  const p_status =
    era.get(`cflag:${aim_id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
    era.get(`status:${aim_id}:短效避孕药`) ||
    era.get(`status:${aim_id}:长效避孕药`) ||
    era.get(`status:${aim_id}:促排卵药`) ||
    era.get(`status:${aim_id}:经期`);
  const sex_check = aim_chara.sex_code !== 1;
  const item_list = [
    { a: medicine_enum.milk_h, c: milk_h },
    { a: medicine_enum.milk_u, c: milk_u },
    {
      a: medicine_enum.uma_z,
      c: uma_z,
    },
    {
      a: medicine_enum.uma_s,
      c: uma_s,
      e: aim_id && sys_check_awake(aim_id),
    },
    {
      a: medicine_enum.super_z,
      c: super_z,
      e:
        aim_id &&
        !era.get(`status:${aim_id}:超马跳Z`) &&
        era.get(`base:${aim_id}:性欲`) < lust_border.absent_mind,
    },
    {
      a: medicine_enum.fron_k,
      c: fron_k,
      e: !fron_status,
    },
    {
      a: medicine_enum.fron_p,
      c: fron_p,
      e: !fron_status,
    },
    {
      a: medicine_enum.drug_m,
      c: drug_m,
      e: sex_check && !era.get(`talent:${aim_id}:泌乳`),
    },
    {
      a: medicine_enum.drug_p,
      c: drug_p,
      e: sex_check && !p_status && !era.get(`status:${aim_id}:排卵期`),
    },
    {
      a: medicine_enum.anti_p_s,
      c: anti_p_s,
      e: sex_check && !p_status,
    },
    {
      a: medicine_enum.anti_p_l,
      c: anti_p_l,
      e: sex_check && !p_status,
    },
    {
      a: medicine_enum.stop_o,
      c: stop_o,
    },
  ]
    .filter((e) => e.c > 0)
    .map((e) => ({ ...e, e: e.e ?? true }));
  if (item_list.every((e) => !e.e)) {
    await era.printAndWait(
      aim_id > 0
        ? i18n().timon.ero_sys.get_med_no_medicines_for_chara(aim_chara)
        : i18n().timon.ero_sys.med_no_medicines_for_you,
    );
    return void 0;
  }
  era.printMultiColumns(
    [
      {
        content:
          aim_id > 0
            ? i18n().timon.ero_sys.get_med_select_medicine(aim_chara)
            : i18n().timon.ero_sys.med_select_medicine_for_you,
        type: 'text',
      },
      ...item_list.map((e, i) => ({
        accelerator: i + 1,
        config: { align: 'center', disabled: !e.e, width: 4 },
        content: i18n()
          .timon.ero_sys.select_entry_template.replace(
            '%ITEM%',
            i18n().tb_item[e.a],
          )
          .replace('%COUNT%', e.c.toString()),
        type: 'button',
      })),
    ],
    { horizontalAlign: 'space-evenly' },
  );
  const iid = item_list[(await era.input()) - 1].a;
  if (
    !(await select_yes_or_no(
      aim_id > 0
        ? i18n().timon.ero_sys.get_med_confirm_for_chara(aim_chara, {
            color: buff_colors[2],
            content: di18n.tb_item.get_name(iid),
          })
        : i18n().timon.ero_sys.get_med_confirm_for_you({
            color: buff_colors[2],
            content: di18n.tb_item.get_name(iid),
          }),
      i18n().ui_yes,
      i18n().ui_cancel,
    ))
  ) {
    await era.printAndWait(
      i18n().timon.ero_sys.get_med_give_up_medicine({
        color: buff_colors[2],
        content: di18n.tb_item.get_name(iid),
      }),
    );
    return void 0;
  }
  return { item: iid, user: aim_id };
}

module.exports = use_ero_medicine;
