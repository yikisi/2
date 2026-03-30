const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const { adaptability_colors, attr_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_adaptability_rank } = require('#/data/info-generator');
const { gene_dict } = require('#/data/race/gene/gene-const');
const {
  gene_type_colors,
  gene_type_enum,
} = require('#/data/race/model/uma-gene');

const di18n = require('#/i18n/extended-def');
const { __, i18n, lan } = require('#/i18n/selector');

const gene_limit = 27;

/**
 * @param {CharaGenes} genes
 * @param {CharaAvailableGenes} available_genes
 * @param {number} discount
 * @param {number[]} juels
 * @param {number} all_juels
 * @param {number} cid
 */
function generate_gene_buttons(
  genes,
  available_genes,
  discount,
  juels,
  all_juels,
  cid,
) {
  return [
    [
      { type: 'divider', config: { content: i18n().inherit_shop.list_header } },
      {
        config: { width: 6 },
        content: i18n().inherit_shop.hd_name,
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: i18n().inherit_shop.hd_learnt,
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: i18n().inherit_shop.hd_count,
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: i18n().inherit_shop.hd_price,
        type: 'text',
      },
      {
        config: { offset: 3, width: 6 },
        content: i18n().inherit_shop.hd_name,
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: i18n().inherit_shop.hd_learnt,
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: i18n().inherit_shop.hd_count,
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: i18n().inherit_shop.hd_price,
        type: 'text',
      },
    ],
    ...available_genes
      .get_values()
      .filter((e) => gene_dict[e.id] !== undefined)
      .map((e, i) => {
        const gene = gene_dict[e.id];
        const price =
          Math.floor((gene.cost * (100 + discount)) / 100) * (1 + !cid);
        return {
          columns: [
            {
              config: { width: 12 },
              content: gene.get_colored_name(),
              type: 'text',
            },
            {
              config: { align: 'right', width: 2 },
              content: genes.get_count(e.id) || 0,
              type: 'text',
            },
            {
              config: { align: 'right', width: 2 },
              content: e.count.toString(),
              type: 'text',
            },
            {
              config: {
                align: 'right',
                color: gene_type_colors[gene_dict[e.id].type],
                width: 2,
              },
              content: price.toString(),
              type: 'text',
            },
            {
              accelerator: i + 1,
              config: {
                align: 'center',
                disabled:
                  e.count === genes.get_count(e.id) ||
                  price > juels[gene.type] ||
                  (gene.type === gene_type_enum.adapt &&
                    // CFLAGNAME:30 - 39 = 草地适性 - 追马适性
                    era.get(`cflag:${cid}:${30 + gene.type_value}`) === 7) ||
                  (gene.type === gene_type_enum.base &&
                    // BASENAME:5 - 9 = 速度 - 智力
                    era.get(`maxbase:${cid}:${5 + gene.type_value}`) >= 2000) ||
                  (gene.type === gene_type_enum.skill &&
                    genes.get_count(e.id) > 0) ||
                  (!cid && genes.count() > gene_limit),
                width: 6,
              },
              content: i18n().inherit_shop.bt_learn,
              type: 'button',
            },
          ],
          config: { width: 12 },
        };
      }),
    {
      columns: [
        {
          config: { width: 12 },
          content: gene_dict[300000].get_colored_name(),
          type: 'text',
        },
        {
          config: {
            align: 'right',
            width: 2,
          },
          content: '-',
          type: 'text',
        },
        {
          config: {
            align: 'right',
            width: 2,
          },
          content: '-',
          type: 'text',
        },
        {
          config: {
            align: 'right',
            color: gene_type_colors[2],
            width: 2,
          },
          content: Math.floor(
            (gene_dict[300000].cost * (100 + discount)) / 100,
          ).toString(),
          type: 'text',
        },
        {
          accelerator: available_genes.get_values().length + 1,
          config: {
            align: 'center',
            disabled:
              Math.floor((gene_dict[300000].cost * (100 + discount)) / 100) *
                (1 + !cid) >
              juels[2],
            width: 6,
          },
          content: i18n().inherit_shop.bt_learn,
          type: 'button',
        },
      ],
      config: { width: 12 },
    },
    {
      columns: [
        {
          accelerator: available_genes.get_values().length + 2,
          config: {
            disabled: all_juels === 0,
            width: 12,
          },
          content: i18n().inherit_shop.bt_convert,
          type: 'button',
        },
      ],
      config: { width: 12 },
    },
  ];
}

async function print_inherit_page() {
  const palace_list = [];
  const edu_list = [];
  const discount = era.get('flag:因子消耗量');
  sys_filter_chara('cflag', '招募状态', recruit_flags.yes).forEach((e) => {
    if (e > 0 && era.get(`cflag:${e}:育成回合计时`) < 3 * 48) {
      edu_list.push(e);
    } else if (era.get(`cflag:${e}:殿堂`) > 0) {
      palace_list.push(e);
    }
  });
  if (era.get('cflag:0:种族') > 0) {
    edu_list.unshift(0);
  }
  let selected = era.get('flag:当前互动角色');
  let flag_inherit = true;
  let chara_genes;
  let available_genes;
  let chara;
  let jewels = [0, 0, 0];
  let used_jewels = [0, 0, 0];
  if (selected === 0 && edu_list[0] !== 0) {
    selected = undefined;
  } else {
    available_genes = new CharaAvailableGenes(selected);
    chara_genes = new CharaGenes(selected);
    chara = get_chara_talk(selected);
  }
  while (flag_inherit) {
    await era.clear();
    if (selected > 0) {
      const chara = get_chara_talk(selected);
      // PARAMNAME:20 - 22 = 粉 - 白
      jewels = new Array(3)
        .fill(0)
        .map((_, i) => era.get(`jewel:${selected}:${20 + i}`));
      used_jewels = jewels.map((j, i) => j + era.get(`jewel:0:${20 + i}`) / 2);
      let gene_a = era.get(`cflag:${selected}:继承方1`);
      let gene_b = era.get(`cflag:${selected}:继承方2`);
      era.drawLine({
        content: i18n().inherit_shop.header_template.replace(
          '%NAME%',
          chara.full_name,
        ),
      });
      if (gene_a > 0) {
        era.printInColRows(
          {
            columns: [
              { config: { content: i18n().tb_param.n_jewel }, type: 'divider' },
              ...jewels.map((e, i) => {
                const jid = 20 + i;
                const my_jewel = era.get(`jewel:0:${jid}`);
                return {
                  config: { color: gene_type_colors[i], offset: 1, width: 23 },
                  content: i18n().tb_param.get_jewel_count(
                    __(`tb_param.jewel${jid}`),
                    era.get(`jewel:${chara.id}:${jid}`) +
                      (my_jewel > 0
                        ? i18n().inherit_shop.addition_jewel.replace(
                            '%COUNT%',
                            my_jewel.toString(),
                          )
                        : ''),
                  ),
                  type: 'text',
                };
              }),
            ],
            config: { width: 4 },
          },
          {
            columns: [
              {
                names: get_image(selected)
                  .map((_i) => `${_i}_半身`)
                  .join('\t'),
                type: 'image.whole',
              },
              {
                config: { align: 'center', fontSize: '1.25rem' },
                content: [chara.get_colored_name()],
                type: 'text',
              },
            ],
            config: { width: 5 },
          },
          {
            columns: [
              {
                config: { offset: 1, width: 3 },
                names: get_image(gene_a).join('\t'),
                type: 'image.whole',
              },
              {
                config: { offset: 1, width: 18 },
                content: i18n().inherit_shop.get_gene_list(
                  new CharaAvailableGenes(gene_a).get_summary(),
                ),
                type: 'text',
              },
              {
                config: { align: 'center', offset: 1, width: 3 },
                content: [get_chara_talk(gene_a).get_colored_name()],
                type: 'text',
              },
              { content: [], type: 'text' },
              {
                config: { offset: 1, width: 3 },
                names: get_image(gene_b).join('\t'),
                type: 'image.whole',
              },
              {
                config: { offset: 1, width: 18 },
                content: i18n().inherit_shop.get_gene_list(
                  new CharaAvailableGenes(gene_b).get_summary(),
                ),
                type: 'text',
              },
              {
                config: { align: 'center', offset: 1, width: 3 },
                content: [get_chara_talk(gene_b).get_colored_name()],
                type: 'text',
              },
            ],
            config: { verticalAlign: 'middle', width: 15 },
          },
          ...generate_gene_buttons(
            chara_genes,
            available_genes,
            discount,
            used_jewels,
            jewels.reduce((p, c) => p + c),
            selected,
          ),
          [
            {
              content: i18n().inherit_shop.inherit_tip,
              type: 'text',
            },
          ],
        );
      } else if (palace_list.length > 0) {
        era.printButton(i18n().inherit_shop.bt_select_chara, 200, {
          align: 'center',
        });
      } else {
        era.print(i18n().inherit_shop.not_enough_chara_tip, {
          align: 'center',
        });
      }
    } else if (selected === 0) {
      used_jewels = jewels = new Array(3)
        .fill(0)
        .map((_, i) => era.get(`jewel:${selected}:${20 + i}`));
      era.printInColRows(
        [
          {
            type: 'divider',
            config: {
              content: i18n().inherit_shop.header_template.replace(
                '%NAME%',
                chara.full_name,
              ),
            },
          },
        ],
        used_jewels.map((e, i) => ({
          config: { color: gene_type_colors[i], width: 6 },
          content: i18n().tb_param.get_jewel_count(
            __(`tb_param.jewel${20 + i}`),
            era.get(`jewel:${selected}:${20 + i}`).toString(),
          ),
          type: 'text',
        })),
        ...generate_gene_buttons(
          chara_genes,
          available_genes,
          discount,
          used_jewels,
          jewels.reduce((p, c) => p + c),
          selected,
        ),
        [
          {
            accelerator: available_genes.get_values().length + 3,
            config: { disabled: chara_genes.count() < gene_limit },
            content: i18n().inherit_shop.bt_remove_genes,
            type: 'button',
          },
          {
            content:
              i18n().inherit_shop.player_genes_limit_tip_template.replace(
                '%COUNT%',
                gene_limit.toString(),
              ),
            type: 'text',
          },
        ],
      );
    }
    era.printMultiColumns([
      {
        config: { content: i18n().inherit_shop.inherit_chara_header },
        type: 'divider',
      },
      ...(edu_list.length > 0
        ? edu_list.map((e) => ({
            accelerator: 1000 + e,
            config: {
              buttonType: e === selected ? 'warning' : 'info',
              disabled: selected === e,
              width: 4,
            },
            content: get_display_name(era.get(`callname:${e}:-1`)),
            type: 'button',
          }))
        : [{ content: i18n().ui_nothing, type: 'text' }]),
      { accelerator: 999, content: i18n().ui_back, type: 'button' },
    ]);
    const ret = await era.input({});
    era.drawLine();
    if (ret === 999) {
      flag_inherit = false;
    } else if (ret === 200) {
      let flag_select_inherit = true,
        flag_print = true;
      const inherit_selected = {};
      while (flag_select_inherit) {
        era.setHorizontalAlign('space-evenly');
        (flag_print ? era.printInColRows : era.replaceInColRows)(
          ...palace_list.map((e) => ({
            columns: [
              {
                accelerator: e,
                config: {
                  align: 'center',
                  buttonType: inherit_selected[e] ? 'warning' : 'info',
                  disabled: era.get(`cflag:${e}:被继承`) > 0,
                },
                content: get_display_name(era.get(`callname:${e}:-1`)),
                type: 'button',
              },
              {
                config: { align: 'center' },
                content: [
                  ...(era.get(`cflag:${e}:被继承`) > 0
                    ? [i18n().inherit_shop.have_inherited, { isBr: true }]
                    : []),
                  ...new CharaAvailableGenes(e).get_summary(),
                ],
                type: 'text',
              },
            ],
            config: { width: 8 },
          })),
          [
            {
              content: i18n().inherit_shop.select_chara_tip,
              type: 'text',
            },
            {
              accelerator: 1000,
              config: {
                align: 'center',
                disabled:
                  Object.values(inherit_selected).filter((e) => e).length !== 2,
                width: 12,
              },
              content: i18n().ui_yes,
              type: 'button',
            },
            {
              accelerator: 1001,
              config: { align: 'center', width: 12 },
              content: i18n().ui_no,
              type: 'button',
            },
          ],
        );
        era.setHorizontalAlign('start');
        flag_print = false;
        const ret1 = await era.input({ hideInput: true });
        if (ret1 === 1000) {
          const gene_owner_list = [];
          Object.entries(inherit_selected)
            .filter((e) => e[1])
            .forEach((e, i) => {
              gene_owner_list.push(Number(e[0]));
              era.set(`cflag:${selected}:继承方${i + 1}`, Number(e[0]));
              era.set(`cflag:${e[0]}:被继承`, selected);
            });
          const jewel_list = new Array(3)
            .fill(0)
            .map(
              (_, i) =>
                era.get(`jewel:${gene_owner_list[0]}:${20 + i}`) +
                era.get(`jewel:${gene_owner_list[1]}:${20 + i}`),
            );
          switch (Math.floor(era.get(`cflag:${selected}:育成回合计时`) / 48)) {
            case 0:
              jewel_list.forEach((e, i) =>
                era.set(`jewel:${selected}:${20 + i}`, Math.floor(e * 0.3)),
              );
              break;
            case 1:
              jewel_list.forEach((e, i) =>
                era.set(
                  `jewel:${selected}:${20 + i}`,
                  Math.floor(e * 0.3) + Math.floor(e * 0.4),
                ),
              );
              break;
            case 2:
              jewel_list.forEach((e, i) =>
                era.set(`jewel:${selected}:${20 + i}`, e),
              );
          }
          available_genes.merge(
            ...gene_owner_list.map((e) => new CharaAvailableGenes(e)),
          );
          flag_select_inherit = false;
          era.drawLine();
          await era.printAndWait(
            i18n().inherit_shop.get_inherit_success(chara.get_colored_name(), [
              {
                content: i18n()
                  .tb_param.jewel_with_count.replace(
                    '%JEWEL%',
                    __('tb_param.jewel20'),
                  )
                  .replace(
                    '%COUNT%',
                    era.get(`jewel:${selected}:粉`).toString(),
                  ),
                color: gene_type_colors[0],
              },
              i18n().ui_comma,
              {
                content: i18n()
                  .tb_param.jewel_with_count.replace(
                    '%JEWEL%',
                    __('tb_param.jewel21'),
                  )
                  .replace(
                    '%COUNT%',
                    era.get(`jewel:${selected}:蓝`).toString(),
                  ),
                color: gene_type_colors[1],
              },
              i18n().ui_comma,
              {
                content: i18n()
                  .tb_param.jewel_with_count.replace(
                    '%JEWEL%',
                    __('tb_param.jewel22'),
                  )
                  .replace(
                    '%COUNT%',
                    era.get(`jewel:${selected}:白`).toString(),
                  ),
                color: gene_type_colors[2],
              },
            ]),
          );
          era.println();
          let wait_flag = sys_like_chara(selected, gene_owner_list[0], 100);
          wait_flag =
            sys_like_chara(selected, gene_owner_list[1], 100) || wait_flag;
          wait_flag =
            sys_like_chara(gene_owner_list[0], selected, 50) || wait_flag;
          wait_flag =
            sys_like_chara(gene_owner_list[1], selected, 50) || wait_flag;
          wait_flag && (await era.waitAnyKey());
        } else if (ret1 === 1001) {
          flag_select_inherit = false;
        } else {
          inherit_selected[ret1] = !inherit_selected[ret1];
        }
      }
    } else if (ret >= 1000) {
      selected = ret - 1000;
      available_genes = new CharaAvailableGenes(selected);
      chara_genes = new CharaGenes(selected);
      chara = get_chara_talk(selected);
    } else if (ret === available_genes.get_values().length + 3) {
      if (await select_yes_or_no(i18n().inherit_shop.remove_genes_confirm)) {
        CharaSkills.get(0).remove(
          ...chara_genes
            .get_values()
            .filter((e) => gene_dict[e.id].type === gene_type_enum.skill)
            .map((e) => gene_dict[e.id].value),
        );
        let _src = era.get('cflag:0:模版角色');
        if (_src <= 0) {
          _src = 0;
        }
        new Array(10).fill(0).forEach((_, i) =>
          // CFLAGNAME:30 - 39 = 草地适性 - 追马适性
          era.set(`cflag:0:${30 + i}`, era.get(`cflag:${_src}:${30 + i}`)),
        );
        chara_genes.get_values().forEach((e) => {
          if (e.type === gene_type_enum.base) {
            era.add(
              // BASENAME:5 - 9 = 速度 - 智力
              `base:0:${5 + gene_dict[e.id].type_value}`,
              -gene_dict[e.id].value,
            );
          }
        });
        chara_genes.clear();
        await era.printAndWait(
          i18n().inherit_shop.get_remove_genes_result(chara.get_colored_name()),
        );
      }
    } else if (ret === available_genes.get_values().length + 2) {
      const pt = 2 * jewels.reduce((p, c) => p + c, 0);
      if (
        await select_yes_or_no(
          i18n().inherit_shop.convert_jewels_confirm_template.replace(
            '%PT%',
            pt.toString(),
          ),
        )
      ) {
        era.add(`exp:${selected}:技能点数`, pt);
        for (let jid = 20; jid <= 22; ++jid) {
          era.set(`jewel:${selected}:${jid}`, 0);
        }
        await era.printAndWait([
          chara.get_colored_name(),
          ' ',
          i18n().ui_get_pt_template.replace(
            '%PT%',
            Object(pt).toLocaleString(lan()),
          ),
        ]);
      }
    } else if (ret < 200) {
      const gene =
          ret > available_genes.get_values().length
            ? gene_dict[300000]
            : gene_dict[available_genes.get_values()[ret - 1].id],
        cost =
          Math.floor((gene.cost * (100 + discount)) / 100) * (1 + !selected),
        delta = cost - jewels[gene.type],
        available_count =
          available_genes.get_count(gene.id) - chara_genes.get_count(gene.id);
      if (
        await select_yes_or_no(
          i18n().inherit_shop.get_inherit_confirm(
            delta <= 0
              ? di18n.inherit_shop.get_price_info(
                  gene.type + 20,
                  get_abbr_number(cost),
                  get_abbr_number(jewels[gene.type]),
                )
              : di18n.inherit_shop.get_price_info_additional(
                  gene.type + 20,
                  get_abbr_number(jewels[gene.type]),
                  get_chara_talk(0).get_colored_name(),
                  get_abbr_number(delta * 2),
                  get_abbr_number(used_jewels[gene.type] - jewels[gene.type]) *
                    2,
                ),
            chara.get_colored_name(),
            gene.get_colored_name(),
            available_count > 0
              ? i18n().inherit_shop.gene_available_template.replace(
                  '%COUNT%',
                  available_count.toString(),
                )
              : '',
          ),
        )
      ) {
        let temp;
        switch (gene.type) {
          case gene_type_enum.adapt:
            // CFLAGNAME:30 - 39 = 草地适性 - 追马适性
            temp = era.get(`cflag:${selected}:${30 + gene.type_value}`);
            if (temp < 4) {
              temp = era.set(`cflag:${selected}:${30 + gene.type_value}`, 4);
            } else if (temp < 6) {
              temp = era.set(`cflag:${selected}:${30 + gene.type_value}`, 6);
            } else {
              temp = era.set(`cflag:${selected}:${30 + gene.type_value}`, 7);
            }
            await era.printAndWait(
              i18n().inherit_shop.get_inherit_result(
                chara.get_colored_name(),
                i18n().adapt_template.replace(
                  '%ADAPT%',
                  di18n.n_adapt[gene.type_value],
                ),
                {
                  color: adaptability_colors[temp],
                  content: get_adaptability_rank(temp),
                  fontWeight: 'bold',
                },
              ),
            );
            break;
          case gene_type_enum.base:
            era.set(
              `maxbase:${selected}:${5 + gene.type_value}`,
              Math.min(
                era.get(`maxbase:${selected}:${5 + gene.type_value}`) +
                  gene.value,
                2000,
              ),
            );
            era.add(`base:${selected}:${5 + gene.type_value}`, gene.value);
            await era.printAndWait(
              i18n().inherit_shop.get_inherit_result(
                chara.get_colored_name(),
                {
                  content: di18n.n_attr[gene.type_value],
                  color: attr_colors[gene.type_value],
                },
                {
                  content: `${Math.floor(era.get(`base:${selected}:${5 + gene.type_value}`)).toLocaleString(lan())}/${era.get(`maxbase:${selected}:${5 + gene.type_value}`).toLocaleString()}`,
                  color: attr_colors[gene.type_value],
                },
              ),
            );
            break;
          case gene_type_enum.skill:
            if (gene.value < 100000) {
              era.add(`exp:${selected}:技能点数`, gene.value);
              await era.printAndWait([
                chara.get_colored_name(),
                ' ',
                i18n().ui_get_pt_template.replace(
                  '%PT%',
                  Object(gene.value).toLocaleString(lan()),
                ),
              ]);
            } else {
              get_skills_and_print_in_event(selected, [gene.value]) &&
                (await era.waitAnyKey());
            }
        }
        chara_genes.add(gene.id);
        const jid = 20 + gene.type;
        if (delta <= 0) {
          era.add(`jewel:${selected}:${jid}`, -cost);
        } else {
          era.set(`jewel:${selected}:${jid}`, 0);
          era.add(`jewel:0:${jid}`, delta * -2);
        }
      }
    }
  }
}

module.exports = print_inherit_page;
