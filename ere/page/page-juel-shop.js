const era = require('#/era-electron');

const {
  get_skill_price,
  get_talent_price,
} = require('#/system/ero/sys-get-juel-price');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const print_mark_tab = require('#/page/juel-shop/mark-tab');
const {
  default_handler,
  get_skill_buttons,
  get_talent_buttons,
  pay_jewels,
  print_footer,
  print_price_and_confirm,
} = require('#/page/juel-shop/snippets');

const { get_custom_ero } = require('#/event/ero/ero-factory');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const {
  attr_change_colors,
  buff_colors,
  palam_colors,
} = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const CharaInmon = require('#/data/ero/chara-inmon');
const {
  shop_result_type_enum,
  talent_button_names_and_check_dict,
} = require('#/data/ero/juel-const');
const { slavery_enum } = require('#/data/ero/mark-const');
const { get_skill_group_list } = require('#/data/ero/part-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n, lan } = require('#/i18n/selector');

async function shop_result(cid, change, result_type) {
  switch (result_type) {
    case shop_result_type_enum.hate:
      sys_like_chara(cid, 0, -10 * change * (1 + era.get(`mark:${cid}:反抗`)));
      add_jewel_reward(cid, 14, 100 * change);
      break;
    case shop_result_type_enum.pleasure:
      sys_like_chara(
        cid,
        0,
        10 *
          change *
          (1 + era.get(`mark:${cid}:淫纹`) + era.get(`mark:${cid}:欢愉`)),
      );
      add_jewel_reward(cid, 10, 100 * change);
      sys_change_lust(cid, 100);
      break;
    case shop_result_type_enum.slave:
      sys_like_chara(
        cid,
        0,
        (-10 * change) / (era.get(`mark:${cid}:同心`) - 1),
      );
      add_jewel_reward(cid, 13, 100 * change);
      sys_change_lust(cid, 50);
      sys_like_chara(cid, 0, -50);
      break;
    case shop_result_type_enum.lover:
      sys_like_chara(cid, 0, -50);
      add_jewel_reward(cid, [13, 14], new Array(2).fill(100 * change));
  }
  result_type > 0 && (await era.waitAnyKey());
}

module.exports = async (cid = era.get('flag:当前互动角色')) => {
  const total_delta = {};
  await get_custom_ero(cid).shop_start();
  const chara = get_chara_talk(cid);
  const me = get_chara_talk(0);
  const page_pointer = {
    flag: true,
    sub: 0,
    tab: 0,
  };
  while (page_pointer.flag) {
    await era.clear();
    era.drawLine();
    era.print(date_indicator());
    era.drawLine({
      content: i18n().jewel_shop.jewel_header_template.replace(
        '%NAME%',
        chara.full_name,
      ),
    });
    let buffer = [];
    // computed jewel dictionary
    const cj_dict = {};
    // jewel dictionary
    const jewel_dict = {};
    // JEWELNAME:0 - 8 = 口腔 - 受虐
    for (let jid = 0; jid <= 8; ++jid) {
      const j_count =
        (cj_dict[jid] =
        jewel_dict[jid] =
          era.get(`jewel:${cid}:${jid}`));
      if (cid > 0) {
        cj_dict[jid] += Math.floor(era.get(`jewel:0:${jid}`) / 2);
      }
      buffer.push({
        config: { align: 'left', width: 3 },
        content: i18n().tb_param.get_jewel_count(__(`tb_param.abbr${jid}`), {
          ...get_abbr_number(j_count),
          color: j_count > 0 ? palam_colors.notifications[1] : void 0,
        }),
        type: 'text',
      });
    }
    if (cid > 0) {
      // JEWELNAME:10 - 13 = 顺从 - 羞耻
      for (let jid = 10; jid <= 13; ++jid) {
        const j_count =
          (cj_dict[jid] =
          jewel_dict[jid] =
            era.get(`jewel:${cid}:${jid}`));
        buffer.push({
          config: { align: 'left', width: 3 },
          content: i18n().tb_param.get_jewel_count(__(`tb_param.abbr${jid}`), {
            ...get_abbr_number(j_count),
            color: j_count > 0 ? palam_colors.notifications[1] : void 0,
          }),
          type: 'text',
        });
      }
    } else {
      // JEWELNAME:10 = 顺从
      const j_count =
        (cj_dict[10] =
        jewel_dict[10] =
          era.get(`jewel:${cid}:10`));
      buffer.push({
        config: { align: 'left', width: 3 },
        content: i18n().tb_param.get_jewel_count(__(`tb_param.abbr10`), {
          ...get_abbr_number(j_count),
          color: j_count > 0 ? palam_colors.notifications[1] : void 0,
        }),
        type: 'text',
      });
    }
    era.printMultiColumns(buffer);
    if (page_pointer.tab === 0) {
      era.drawLine({
        content: i18n().jewel_shop.abl_header_template.replace(
          '%NAME%',
          chara.full_name,
        ),
      });
      buffer = [];
      // abl dictionary
      const a_dict = {};
      const skill_groups = get_skill_group_list(chara.sex_code);
      skill_groups.forEach((g, i) => {
        era.printMultiColumns(
          g.reduce(
            (p, aid, j) => [
              ...p,
              ...get_skill_buttons(cid, i * 10 + j, aid, a_dict, cj_dict),
            ],
            [],
          ),
        );
      });
      era.println();
      era.print(i18n().jewel_shop.abl_tab_tooltip);

      print_footer(cid, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const aid = skill_groups[((ret % 100) - (ret % 10)) / 10][ret % 10];
        const action = ret - (ret % 100);
        if (action === 0) {
          era.print(i18n().tb_abl[aid]);
          era.println();
          await era.printAndWait(i18n().abl_desc[aid]);
        } else {
          era.print(
            i18n().jewel_shop.get_abl_upgrade_confirm(
              chara.get_colored_name(),
              {
                content: di18n.tb_abl.get_leveled_ability(aid, a_dict[aid]),
                color: buff_colors[2],
              },
              action === 100
                ? {
                    content: i18n().jewel_shop.cf_upgrade,
                    color: attr_change_colors.up,
                  }
                : {
                    content: i18n().jewel_shop.cf_downgrade,
                    color: attr_change_colors.down,
                  },
              {
                content: i18n().tb_abl.lv_template.replace(
                  '%LEVEL%',
                  a_dict[aid] + (action === 100 ? 1 : -1),
                ),
                color: buff_colors[2],
              },
            ),
          );
          const price_dict = get_skill_price(
            cid,
            aid,
            a_dict[aid] + (action === 100 ? 1 : 0),
          );
          const is_confirmed = await print_price_and_confirm(
            chara,
            price_dict,
            jewel_dict,
          );
          if (is_confirmed) {
            era.add(`abl:${cid}:${aid}`, action === 100 ? 1 : -1);
            pay_jewels(cid, price_dict, jewel_dict);
            total_delta.skill =
              (total_delta.skill || 0) + (action === 100) * 2 - 1;
          }
        }
      } else {
        default_handler(ret, page_pointer);
      }
    } else if (page_pointer.tab === 1) {
      era.drawLine({
        content: i18n().jewel_shop.talent_header_template.replace(
          '%NAME%',
          chara.full_name,
        ),
      });
      const t_dict = { slave_run: 0 };
      // TALENTNAME:60 - 66 = 淫口 - 早泄
      for (let tid = 60; tid <= 66; ++tid) {
        t_dict.slave_run +=
          (t_dict[tid] = era.get(`talent:${cid}:${tid}`)) === 2;
      }
      /** @type {{tid:number,[ceids]:number[]}[][]}*/
      const talent_groups = [
        [
          // EXPNAME:33 = 口腔高潮次数
          { tid: 60, ceids: [33] },
          // EXPNAME:43 = 胸部高潮次数
          { tid: 61, ceids: [43] },
          // EXPNAME:72 = 身体高潮次数
          { tid: 62, ceids: [72] },
        ],
      ];
      if (chara.sex_code > 0) {
        // EXPNAME:103 = 阴茎高潮次数
        talent_groups[0].push({ tid: 66, ceids: [103] });
      }
      if (chara.sex_code === 0) {
        // EXPNAME:112 = 外阴高潮次数
        talent_groups[0].push({ tid: 63, ceids: [112] });
      }
      if (chara.sex_code !== 1) {
        // EXPNAME:113 = 阴道高潮次数
        talent_groups[0].push({ tid: 64, ceids: [113] });
      }
      // EXPNAME:81 = 肛门高潮次数
      talent_groups[0].push({ tid: 65, ceids: [81] });

      // TALENTNAME:40 - 42 = 抖S - 喜欢痛苦
      talent_groups[1] = [
        // EXPNAME:92 = 施虐高潮次数
        { tid: 40, ceids: [92] },
        // EXPNAME:95 = 受虐高潮次数
        { tid: 41, ceids: [95] },
        { tid: 42, ceids: [95] },
      ];

      talent_groups[2] = [];
      // TALENTNAME:77/73 = 喉咙敏感/饮精成瘾
      [74, 70].forEach((tid) =>
        // EXPNAME:36 = 饮精量
        talent_groups[2].push({ tid, ceids: [36] }),
      );
      if (chara.sex_code !== 1) {
        // TALENTNAME:77/73 = 子宫敏感/榨精成瘾
        [75, 71].forEach((tid) =>
          // EXPNAME:116 = 膣内精液量
          talent_groups[2].push({ tid, ceids: [116] }),
        );
      }
      // TALENTNAME:77/73 = 肠道敏感/精液灌肠
      [76, 72].forEach((tid) =>
        // EXPNAME:83 = 肠内精液量
        talent_groups[2].push({ tid, ceids: [83] }),
      );
      // TALENTNAME:77/73 = 气味敏感/浴精成瘾
      [77, 73].forEach((tid) =>
        // EXPNAME:35/42/71 = 被颜射精液量/胸部沾染精液量/身体沾染精液量
        talent_groups[2].push({ tid, ceids: [35, 42, 71] }),
      );
      let acc = 0;
      talent_groups.forEach((groups) => {
        buffer = [];
        groups.forEach(({ tid, ceids }) =>
          buffer.push(
            ...get_talent_buttons(cid, acc++, tid, ceids, t_dict, cj_dict),
          ),
        );
        era.printMultiColumns(buffer);
      });
      if (chara.sex_code !== 1) {
        buffer = [];
        talent_groups[2].push({ tid: 32 }, { tid: 33 });
        // TALENTNAME:32 = 泌乳
        const milk_talent = era.get(`talent:${cid}:32`);
        const mu_dict =
          milk_talent === 3 ? void 0 : get_talent_price(cid, 32, 2);
        const mu_title =
          milk_talent === 3
            ? void 0
            : di18n.jewel_shop.get_price_title_with_other_tip(
                mu_dict,
                i18n().jewel_shop.milk_other_condition,
                [
                  [
                    'STATUS',
                    milk_talent === 2 ? i18n().ui_yes2 : i18n().ui_no2,
                  ],
                ],
              );
        const md_dict =
          milk_talent !== 3 ? void 0 : get_talent_price(cid, 32, 1);
        buffer.push(
          ...[
            {
              accelerator: acc,
              content: i18n()
                .tb_talent.shop_template.replace(
                  '%NAME%',
                  i18n().tb_talent.milk,
                )
                .replace(
                  '%STATUS%',
                  milk_talent === 3 ? i18n().ui_yes2 : i18n().ui_no2,
                ),
            },
            {
              accelerator: 100 + acc,
              config: {
                disabled:
                  milk_talent !== 2 ||
                  mu_dict === void 0 ||
                  Object.entries(mu_dict).some((e) => e[1] > cj_dict[e[0]]),
                title: mu_title,
              },
              content: i18n().jewel_shop.bt_add,
            },
            {
              accelerator: 200 + acc,
              config: {
                disabled:
                  md_dict === void 0 ||
                  Object.entries(md_dict).some((e) => e[1] > cj_dict[e[0]]),
                title:
                  md_dict !== void 0
                    ? di18n.jewel_shop.get_price_title(md_dict)
                    : void 0,
              },
              content: i18n().jewel_shop.bt_remove,
            },
          ].map((b) => {
            b.config = { ...(b.config ?? {}), width: 4 };
            b.type = 'button';
            return b;
          }),
        );
        // TALENTNAME:33 = 乳头类型
        const nipple_size = era.get(`talent:${cid}:33`);
        const nu_dict =
          nipple_size === 2 ? void 0 : get_talent_price(cid, 33, 2);
        const nd_dict =
          nipple_size !== 2 ? void 0 : get_talent_price(cid, 33, 1);
        buffer.push(
          ...[
            {
              accelerator: acc + 1,
              content: i18n()
                .tb_talent.shop_template.replace(
                  '%NAME%',
                  i18n().tb_talent.nipple,
                )
                .replace(
                  '%STATUS%',
                  nipple_size === 2 ? i18n().ui_yes2 : i18n().ui_no2,
                ),
            },
            {
              accelerator: 100 + acc + 1,
              config: {
                disabled:
                  nu_dict === void 0 ||
                  Object.entries(nu_dict).some((e) => e[1] > cj_dict[e[0]]),
                title:
                  nu_dict !== void 0
                    ? di18n.jewel_shop.get_price_title(nu_dict)
                    : void 0,
              },
              content: i18n().jewel_shop.bt_add,
            },
            {
              accelerator: 200 + acc + 1,
              config: {
                disabled:
                  nd_dict === void 0 ||
                  Object.entries(nd_dict).some((e) => e[1] > cj_dict[e[0]]),
                title:
                  nd_dict !== void 0
                    ? di18n.jewel_shop.get_price_title(nd_dict)
                    : void 0,
              },
              content: i18n().jewel_shop.bt_remove,
            },
          ].map((b) => {
            b.config = { ...(b.config ?? {}), width: 4 };
            b.type = 'button';
            return b;
          }),
        );
        era.printMultiColumns(buffer);
      }

      era.println();
      era.print(
        i18n().jewel_shop.get_talent_tab_tooltip(
          era.get(`talent:${cid}:调教度`),
        ),
      );
      print_footer(cid, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const bt_index = ret % 100;
        let tid;
        if (bt_index < talent_groups[0].length) {
          tid = talent_groups[0][bt_index].tid;
        } else if (
          bt_index <
          talent_groups[0].length + talent_groups[1].length
        ) {
          tid = talent_groups[1][bt_index - talent_groups[0].length].tid;
        } else {
          tid =
            talent_groups[2][
              bt_index - talent_groups[0].length - talent_groups[1].length
            ].tid;
        }
        const action = ret - bt_index;
        if (action === 0) {
          era.print(__(`tb_talent.s${tid}`, i18n().tb_talent[tid]));
          era.println();
          await era.printAndWait(
            __(`talent_desc.s${tid}`, i18n().talent_desc[tid]),
          );
        } else {
          if (tid <= 33) {
            const inmon = CharaInmon.get(cid);
            era.print(
              i18n().jewel_shop.get_talent_change_confirm(
                chara.get_colored_name(),
                {
                  color: buff_colors[2],
                  content: i18n().tb_talent.template.replace(
                    '%NAME%',
                    __(`tb_talent.s${tid}`, i18n().tb_talent[tid]),
                  ),
                },
                action === 100
                  ? {
                      color: attr_change_colors.up,
                      content: i18n().jewel_shop.cf_add,
                    }
                  : {
                      color: attr_change_colors.down,
                      content: i18n().jewel_shop.cf_remove,
                    },
              ),
            );
            if (
              action === 200 &&
              tid === 32 &&
              inmon.slave === slavery_enum.milk
            ) {
              era.print(i18n().jewel_shop.milk_slave_warning);
            }
            const price_dict = get_talent_price(
              cid,
              tid,
              action === 100 ? 2 : 1,
            );
            const is_confirmed = await print_price_and_confirm(
              chara,
              price_dict,
              jewel_dict,
            );
            if (is_confirmed) {
              if (tid === 32) {
                era.set(`talent:${cid}:泌乳`, action === 100 ? 3 : 0);
                if (action === 200 && inmon.slave === slavery_enum.milk) {
                  inmon.slave = 0;
                }
              } else {
                era.set(`talent:${cid}:乳头类型`, action === 100 ? 2 : 0);
              }
              pay_jewels(cid, price_dict, jewel_dict);
              total_delta.talent =
                (total_delta.talent || 0) + (action === 100 ? 1 : -1);
            }
          } else {
            let delta_dict;
            if (tid >= 60 && tid <= 66) {
              era.print(
                i18n().jewel_shop.get_sens_change_confirm(
                  chara.get_colored_name(),
                  {
                    color: buff_colors[2],
                    content: __(`tb_talent.sens${tid}`),
                  },
                  action === 100
                    ? {
                        color: attr_change_colors.up,
                        content: i18n().jewel_shop.cf_s_up,
                      }
                    : {
                        color: attr_change_colors.down,
                        content: i18n().jewel_shop.cf_s_down,
                      },
                ),
              );
              delta_dict = talent_button_names_and_check_dict.trained;
            } else {
              era.print(
                i18n().jewel_shop.get_talent_change_confirm(
                  chara.get_colored_name(),
                  {
                    color: buff_colors[2],
                    content: i18n().tb_talent.template.replace(
                      '%NAME%',
                      __(`tb_talent.s${tid}`, i18n().tb_talent[tid]),
                    ),
                  },
                  action === 100
                    ? {
                        color: attr_change_colors.up,
                        content: i18n().jewel_shop.cf_add,
                      }
                    : {
                        color: attr_change_colors.down,
                        content: i18n().jewel_shop.cf_remove,
                      },
                ),
              );
              if (tid >= 70) {
                delta_dict = talent_button_names_and_check_dict.poisoned;
              } else {
                delta_dict = talent_button_names_and_check_dict.sm;
              }
            }
            const delta = (
              action === 100 ? delta_dict.up_delta : delta_dict.down_delta
            )[t_dict[tid]];
            const price_dict = get_talent_price(cid, tid, delta);
            const is_confirmed = await print_price_and_confirm(
              chara,
              price_dict,
              jewel_dict,
            );
            if (is_confirmed) {
              era.add(`talent:${cid}:${tid}`, delta);
              pay_jewels(cid, price_dict, jewel_dict);
              total_delta.talent = (total_delta.talent || 0) + delta;
            }
          }
        }
      } else {
        default_handler(ret, page_pointer);
      }
    } else if (page_pointer.tab === 2) {
      await print_mark_tab(chara, cj_dict, total_delta, page_pointer);
    } else {
      era.drawLine({ content: i18n().jewel_shop.transfer_header });
      era.printMultiColumns(
        Object.keys(jewel_dict).map((jid, i) => ({
          accelerator: i,
          config: { width: 12, disabled: jewel_dict[jid] < 10000 },
          content: di18n.jewel_shop.get_transfer_button(
            chara.name,
            jid,
            me.name,
          ),
          type: 'button',
        })),
      );
      era.println();
      era.print(
        i18n().jewel_shop.transfer_tab_tooltip.replaceAll('%YOU%', me.name),
      );
      print_footer(cid, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const src_jid = Object.keys(cj_dict)[ret];
        // 情感因子全部转换成顺从
        const dst_jid = src_jid <= 10 ? src_jid : 10;
        // 部位因子和顺从 10,000:10，情感因子 10,000:1
        const dst_j_count = src_jid <= 10 ? 10 : 1;
        if (
          await select_yes_or_no(
            i18n().jewel_shop.get_transfer_confirm(
              chara.get_colored_name(),
              {
                content: i18n()
                  .tb_param.jewel_with_count.replace(
                    '%JEWEL%',
                    __(`tb_param.jewel${src_jid}`),
                  )
                  .replace('%COUNT%', Object(10000).toLocaleString(lan())),
                color: buff_colors[2],
              },
              {
                ...get_abbr_number(jewel_dict[src_jid]),
                color: buff_colors[2],
              },
              me.get_colored_name(),
              {
                content: i18n()
                  .tb_param.jewel_with_count.replace(
                    '%JEWEL%',
                    __(`tb_param.jewel${dst_jid}`),
                  )
                  .replace('%COUNT%', dst_j_count.toString()),
                color: buff_colors[2],
              },
            ),
          )
        ) {
          era.add(`jewel:${cid}:${src_jid}`, -10000);
          era.add(`jewel:0:${dst_jid}`, dst_j_count);
        }
      } else {
        default_handler(ret, page_pointer);
      }
    }
  }
  if (cid > 0) {
    await shop_result(
      cid,
      (total_delta.skill || 0) + (total_delta.talent || 0),
      await get_custom_ero(cid).shop_end(total_delta),
    );
  }
};
