const {
  add,
  clear,
  drawLine,
  get,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  printMultiColumns,
  println,
  replaceInColRows,
  set,
  setHorizontalAlign,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const { adaptability_colors } = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_adaptability_rank } = require('#/data/info-generator');
const { gene_juel_names } = require('#/data/other-const');
const { gene_dict } = require('#/data/race/gene/gene-const');
const {
  gene_type_colors,
  gene_type_enum,
} = require('#/data/race/model/uma-gene');
const { adaptability_names } = require('#/data/train-const');

/**
 * @param {CharaGenes} genes
 * @param {CharaAvailableGenes} available_genes
 * @param {number} discount
 * @param {number[]} juels
 * @param {number} all_juels
 * @param {number} chara_id
 */
function generate_gene_buttons(
  genes,
  available_genes,
  discount,
  juels,
  all_juels,
  chara_id,
) {
  return [
    [
      { type: 'divider', config: { content: '因子能力列表' } },
      { config: { width: 6 }, content: '名称', type: 'text' },
      {
        config: { align: 'right', width: 1 },
        content: '习得',
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: '数量',
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: '价格',
        type: 'text',
      },
      { config: { offset: 3, width: 6 }, content: '名称', type: 'text' },
      {
        config: { align: 'right', width: 1 },
        content: '习得',
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: '数量',
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: '价格',
        type: 'text',
      },
    ],
    ...available_genes
      .get_values()
      .filter((e) => gene_dict[e.id] !== undefined)
      .map((e, i) => {
        const gene = gene_dict[e.id];
        const price =
          Math.floor((gene.cost * (100 + discount)) / 100) * (1 + !chara_id);
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
                    get(`cflag:${chara_id}:${gene.type_value}适性`) === 7) ||
                  (gene.type === gene_type_enum.base &&
                    get(`maxbase:${chara_id}:${gene.type_value}`) === 2000) ||
                  (gene.type === gene_type_enum.skill &&
                    genes.get_count(e.id) > 0) ||
                  (!chara_id && genes.count() > 15),
                width: 6,
              },
              content: '学习',
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
                (1 + !chara_id) >
              juels[2],
            width: 6,
          },
          content: '学习',
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
          content: '将剩余因子转换为技能点数',
          type: 'button',
        },
      ],
      config: { width: 12 },
    },
  ];
}

async function print_inherit_page() {
  const palace_list = [],
    edu_list = [],
    discount = get('flag:因子消耗量');
  sys_filter_chara('cflag', '招募状态', recruit_flags.yes).forEach((e) => {
    if (e > 0 && get(`cflag:${e}:育成回合计时`) < 3 * 48) {
      edu_list.push(e);
    } else if (get(`cflag:${e}:殿堂`) > 0) {
      palace_list.push(e);
    }
  });
  if (get('cflag:0:种族')) {
    edu_list.unshift(0);
  }
  let selected_id = get('flag:当前互动角色'),
    flag_inherit = true,
    chara_genes,
    available_genes,
    chara,
    juels = [0, 0, 0],
    used_juels = [0, 0, 0];
  if (selected_id === 0 && edu_list[0] !== 0) {
    selected_id = undefined;
  } else {
    available_genes = new CharaAvailableGenes(selected_id);
    chara_genes = new CharaGenes(selected_id);
    chara = get_chara_talk(selected_id);
  }
  while (flag_inherit) {
    await clear();
    if (selected_id > 0) {
      const chara = get_chara_talk(selected_id);
      juels = gene_juel_names.map((e) => get(`juel:${selected_id}:${e}`));
      used_juels = juels.map(
        (e, i) => e + get(`juel:0:${gene_juel_names[i]}`) / 2,
      );
      let gene_a = get(`cflag:${selected_id}:继承方1`),
        gene_b = get(`cflag:${selected_id}:继承方2`);
      drawLine({ content: `为 ${chara.actual_name} 继承因子` });
      if (gene_a) {
        printInColRows(
          {
            columns: [
              { config: { content: '因子' }, type: 'divider' },
              ...gene_juel_names.map((e, i) => {
                const my_juel = get(`juel:0:${e}`);
                return {
                  config: { color: gene_type_colors[i], offset: 1, width: 23 },
                  content: `${e}因子：${get(`juel:${chara.id}:${e}`)}${my_juel ? ` (+${my_juel})` : ''}`,
                  type: 'text',
                };
              }),
            ],
            config: { width: 4 },
          },
          {
            columns: [
              {
                names: get_image(selected_id)
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
                content: [
                  '因子能力：',
                  ...new CharaAvailableGenes(gene_a).get_summary(),
                ],
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
                content: [
                  '因子能力：',
                  ...new CharaAvailableGenes(gene_b).get_summary(),
                ],
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
            used_juels,
            juels.reduce((p, c) => p + c),
            selected_id,
          ),
          [
            {
              content:
                '* 马娘的因子不足以继承因子能力时，训练员可以支付双倍差额帮助马娘继承因子能力',
              type: 'text',
            },
          ],
        );
      } else if (palace_list.length > 0) {
        printButton('选择继承角色', 200, { align: 'center' });
      } else {
        print('需要有两名以上可以继承的角色……', { align: 'center' });
      }
    } else if (selected_id === 0) {
      used_juels = juels = gene_juel_names.map((e) =>
        get(`juel:${selected_id}:${e}`),
      );
      printInColRows(
        [
          {
            type: 'divider',
            config: { content: `为 ${chara.get_full_name()} 继承因子` },
          },
        ],
        gene_juel_names.map((e, i) => ({
          config: { color: gene_type_colors[i], width: 6 },
          content: `${e}因子：${get(`juel:${selected_id}:${e}`)}`,
          type: 'text',
        })),
        ...generate_gene_buttons(
          chara_genes,
          available_genes,
          discount,
          used_juels,
          juels.reduce((p, c) => p + c),
          selected_id,
        ),
        [
          {
            accelerator: available_genes.get_values().length + 3,
            config: { disabled: chara_genes.count() !== 15 },
            content: '遗忘所有因子能力',
            type: 'button',
          },
          { content: '* 马娘训练员最多继承15个因子能力', type: 'text' },
        ],
      );
    }
    printMultiColumns([
      { type: 'divider', config: { content: '可继承因子的角色' } },
      ...(edu_list.length > 0
        ? edu_list.map((e) => ({
            accelerator: 1000 + e,
            config: {
              buttonType: e === selected_id ? 'warning' : 'info',
              disabled: selected_id === e,
              width: 4,
            },
            content: get(`callname:${e}:-1`),
            type: 'button',
          }))
        : [{ content: '无', type: 'text' }]),
      { accelerator: 999, content: '离开', type: 'button' },
    ]);
    const ret = await input({});
    drawLine();
    if (ret === 999) {
      flag_inherit = false;
    } else if (ret === 200) {
      let flag_select_inherit = true,
        flag_print = true;
      const inherit_selected = {};
      while (flag_select_inherit) {
        setHorizontalAlign('space-evenly');
        (flag_print ? printInColRows : replaceInColRows)(
          ...palace_list.map((e) => ({
            columns: [
              {
                accelerator: e,
                config: {
                  align: 'center',
                  buttonType: inherit_selected[e] ? 'warning' : 'info',
                  disabled: get(`cflag:${e}:被继承`) > 0,
                },
                content: get(`callname:${e}:-1`),
                type: 'button',
              },
              {
                config: { align: 'center' },
                content: [
                  ...(get(`cflag:${e}:被继承`) > 0
                    ? ['已被继承', { isBr: true }]
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
              content: [
                '* 必须同时选中两个角色才能开始因子继承',
                { isBr: true },
                '** 被继承的角色在继承角色结束育成前无法重新育成！',
              ],
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
              content: '确定',
              type: 'button',
            },
            {
              accelerator: 1001,
              config: { align: 'center', width: 12 },
              content: '取消',
              type: 'button',
            },
          ],
        );
        setHorizontalAlign('start');
        flag_print = false;
        const ret1 = await input({ hideInput: true });
        if (ret1 === 1000) {
          const gene_owner_list = [];
          Object.entries(inherit_selected)
            .filter((e) => e[1])
            .forEach((e, i) => {
              gene_owner_list.push(Number(e[0]));
              set(`cflag:${selected_id}:继承方${i + 1}`, Number(e[0]));
              set(`cflag:${e[0]}:被继承`, selected_id);
            });
          const juel_list = gene_juel_names.map(
            (e) =>
              get(`juel:${gene_owner_list[0]}:${e}`) +
              get(`juel:${gene_owner_list[1]}:${e}`),
          );
          switch (Math.floor(get(`cflag:${selected_id}:育成回合计时`) / 48)) {
            case 0:
              juel_list.forEach((e, i) =>
                set(
                  `juel:${selected_id}:${gene_juel_names[i]}`,
                  Math.floor(e * 0.3),
                ),
              );
              break;
            case 1:
              juel_list.forEach((e, i) =>
                set(
                  `juel:${selected_id}:${gene_juel_names[i]}`,
                  Math.floor(e * 0.3) + Math.floor(e * 0.4),
                ),
              );
              break;
            case 2:
              juel_list.forEach((e, i) =>
                set(`juel:${selected_id}:${gene_juel_names[i]}`, e),
              );
          }
          available_genes.merge(
            ...gene_owner_list.map((e) => new CharaAvailableGenes(e)),
          );
          flag_select_inherit = false;
          drawLine();
          await printAndWait([
            '继承成功！',
            chara.get_colored_name(),
            ' 获得了：',
            { isBr: true },
            {
              content: `粉因子 × ${get(`juel:${selected_id}:粉`)}`,
              color: gene_type_colors[0],
            },
            ' ',
            {
              content: `蓝因子 × ${get(`juel:${selected_id}:蓝`)}`,
              color: gene_type_colors[1],
            },
            ' ',
            {
              content: `白因子 × ${get(`juel:${selected_id}:白`)}`,
              color: gene_type_colors[2],
            },
          ]);
          println();
          let wait_flag = sys_like_chara(selected_id, gene_owner_list[0], 100);
          wait_flag =
            sys_like_chara(selected_id, gene_owner_list[1], 100) || wait_flag;
          wait_flag =
            sys_like_chara(gene_owner_list[0], selected_id, 50) || wait_flag;
          wait_flag =
            sys_like_chara(gene_owner_list[1], selected_id, 50) || wait_flag;
          wait_flag && (await waitAnyKey());
        } else if (ret1 === 1001) {
          flag_select_inherit = false;
        } else {
          inherit_selected[ret1] = !inherit_selected[ret1];
        }
      }
    } else if (ret >= 1000) {
      selected_id = ret - 1000;
      available_genes = new CharaAvailableGenes(selected_id);
      chara_genes = new CharaGenes(selected_id);
      chara = get_chara_talk(selected_id);
    } else if (ret === available_genes.get_values().length + 3) {
      if (
        await select_yes_or_no('遗忘所有因子能力吗？已提高的属性上限不会消失')
      ) {
        CharaSkills.get(0).remove(
          ...chara_genes
            .get_values()
            .filter((e) => gene_dict[e.id].type === gene_type_enum.skill)
            .map((e) => gene_dict[e.id].value),
        );
        let _src = get('cflag:0:模版角色');
        if (_src <= 0) {
          _src = 0;
        }
        adaptability_names.forEach((e) =>
          set(`cflag:0:${e}适性`, get(`cflag:${_src}:${e}适性`)),
        );
        chara_genes.get_values().forEach((e) => {
          if (e.type === gene_type_enum.base) {
            add(`base:0:${gene_dict[e.id].type_value}`, -gene_dict[e.id].value);
          }
        });
        chara_genes.clear();
        await printAndWait([
          chara.get_colored_name(),
          ' 遗忘了所有因子能力……所有适性、继承属性与继承技能都消失了……',
        ]);
      }
    } else if (ret === available_genes.get_values().length + 2) {
      const pt = 2 * juels.reduce((p, c) => p + c, 0);
      if (await select_yes_or_no(`将剩余因子转换成 ${pt} 点技能点数吗？`)) {
        add(`exp:${selected_id}:技能点数`, pt);
        gene_juel_names.forEach((e) => set(`juel:${selected_id}:${e}`, 0));
        await printAndWait([
          chara.get_colored_name(),
          ' 获得了 ',
          pt.toString(),
          ' 点技能点数',
        ]);
      }
    } else if (ret < 200) {
      const gene =
          ret > available_genes.get_values().length
            ? gene_dict[300000]
            : gene_dict[available_genes.get_values()[ret - 1].id],
        cost =
          Math.floor((gene.cost * (100 + discount)) / 100) * (1 + !selected_id),
        delta = cost - juels[gene.type],
        available_count =
          available_genes.get_count(gene.id) - chara_genes.get_count(gene.id);
      if (
        await select_yes_or_no([
          '使用 ',
          ...(delta <= 0
            ? [
                {
                  color: gene_type_colors[gene.type],
                  content: `${gene_juel_names[gene.type]}因子 × ${cost}/${juels[gene.type]}`,
                },
                ' ',
              ]
            : [
                {
                  color: gene_type_colors[gene.type],
                  content: `${gene_juel_names[gene.type]}因子 × ${juels[gene.type]}`,
                },
                '（与 ',
                get_chara_talk(0).get_colored_name(),
                ' 的 ',
                {
                  color: gene_type_colors[gene.type],
                  content: `${gene_juel_names[gene.type]}因子 × ${delta * 2}/${(used_juels[gene.type] - juels[gene.type]) * 2}`,
                },
                '）',
              ]),
          '为 ',
          chara.get_colored_name(),
          ' 继承',
          ...gene.get_colored_name(),
          '吗？',
          ...(available_count > 0 ? [`还可以继承 ${available_count} 次`] : []),
        ])
      ) {
        let temp;
        switch (gene.type) {
          case gene_type_enum.adapt:
            temp = get(`cflag:${selected_id}:${gene.type_value}适性`);
            if (temp < 4) {
              temp = set(`cflag:${selected_id}:${gene.type_value}适性`, 4);
            } else if (temp < 6) {
              temp = set(`cflag:${selected_id}:${gene.type_value}适性`, 6);
            } else {
              temp = set(`cflag:${selected_id}:${gene.type_value}适性`, 7);
            }
            await printAndWait([
              chara.get_colored_name(),
              ` 的 ${gene.type_value}适性 现在是 `,
              {
                color: adaptability_colors[temp],
                content: get_adaptability_rank(temp),
                fontWeight: 'bold',
              },
            ]);
            break;
          case gene_type_enum.base:
            set(
              `maxbase:${selected_id}:${gene.type_value}`,
              Math.min(
                get(`maxbase:${selected_id}:${gene.type_value}`) + gene.value,
                2000,
              ),
            );
            add(`base:${selected_id}:${gene.type_value}`, gene.value);
            await printAndWait([
              chara.get_colored_name(),
              ' 的 ',
              { content: gene.type_value, color: attr_colors[gene.type_value] },
              ' 现在是 ',
              {
                content: `${Math.floor(get(`base:${selected_id}:${gene.type_value}`))}/${get(`maxbase:${selected_id}:${gene.type_value}`)}`,
                color: attr_colors[gene.type_value],
              },
            ]);
            break;
          case gene_type_enum.skill:
            if (gene.value < 100000) {
              add(`exp:${selected_id}:技能点数`, gene.value);
              await printAndWait([
                chara.get_colored_name(),
                ' 获得了 ',
                gene.value.toString(),
                ' 点技能点数',
              ]);
            } else {
              get_skills_and_print_in_event(selected_id, [gene.value]) &&
                (await waitAnyKey());
            }
        }
        chara_genes.add(gene.id);
        if (delta <= 0) {
          add(`juel:${selected_id}:${gene_juel_names[gene.type]}`, -cost);
        } else {
          set(`juel:${selected_id}:${gene_juel_names[gene.type]}`, 0);
          add(`juel:0:${gene_juel_names[gene.type]}`, delta * -2);
        }
      }
    }
  }
}

module.exports = print_inherit_page;
