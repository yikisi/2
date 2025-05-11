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
  pay_juels,
  print_footer,
  print_price_and_confirm,
} = require('#/page/juel-shop/snippets');

const { get_custom_ero } = require('#/event/ero/ero-factory');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const {
  attr_change_colors,
  buff_colors,
  palam_colors,
} = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { part_abbr } = require('#/data/ero/ero-alias.json');
const {
  shop_result_type_enum,
  talent_button_names_and_check_dict,
} = require('#/data/ero/juel-const');
const { slavery_enum } = require('#/data/ero/mark-const');
const { part_names, pleasure_list } = require('#/data/ero/part-const');
const { skill_desc, talent_desc } = require('#/data/ero/shop-desc.json');
const { trained_talent_names } = require('#/data/ero/status-const');

async function shop_result(chara_id, change, result_type) {
  switch (result_type) {
    case shop_result_type_enum.hate:
      sys_like_chara(
        chara_id,
        0,
        -10 * change * (1 + era.get(`mark:${chara_id}:反抗`)),
      );
      await add_juel_out_of_train(chara_id, '反感', 100 * change);
      break;
    case shop_result_type_enum.pleasure:
      sys_like_chara(
        chara_id,
        0,
        10 *
          change *
          (1 +
            era.get(`mark:${chara_id}:淫纹`) +
            era.get(`mark:${chara_id}:欢愉`)),
      );
      await add_juel_out_of_train(chara_id, '顺从', 100 * change);
      sys_change_lust(chara_id, 100);
      break;
    case shop_result_type_enum.slave:
      sys_like_chara(
        chara_id,
        0,
        (-10 * change) / (era.get(`mark:${chara_id}:同心`) - 1),
      );
      await add_juel_out_of_train(chara_id, '羞耻', 100 * change);
      sys_change_lust(chara_id, 50);
      sys_like_chara(chara_id, 0, -50);
      break;
    case shop_result_type_enum.lover:
      sys_like_chara(chara_id, 0, -50);
      await add_juel_out_of_train(
        chara_id,
        ['羞耻', '反感'],
        new Array(2).fill(100 * change),
      );
  }
  result_type > 0 && (await era.waitAnyKey());
}

module.exports = async (_id) => {
  const total_delta = {};
  const chara_id = _id || era.get('flag:当前互动角色');
  await get_custom_ero(chara_id).shop_start();
  const chara_sex = era.get(`cflag:${chara_id}:性别`),
    chara = get_chara_talk(chara_id),
    me = get_chara_talk(0);
  const page_pointer = {
    flag: true,
    sub: 0,
    tab: 0,
  };
  while (page_pointer.flag) {
    await era.clear();
    era.drawLine();
    era.print(
      `${era.get('flag:当前年')} 年 ${era.get(
        'flag:当前月',
      )} 月 第 ${era.get('flag:当前周')} 周`,
    );
    era.drawLine({
      content: `${chara.get_full_name()} 的 因子`,
    });
    let buffer = [];
    const j_dict = {},
      origin_dict = {};
    pleasure_list.forEach((part) => {
      const j_name = part_names[part];
      const key = `${j_name}快感`;
      const j_count =
        (j_dict[key] =
        origin_dict[key] =
          era.get(`jewel:${chara_id}:${key}`));
      if (chara_id) {
        j_dict[key] += Math.floor(era.get(`jewel:0:${key}`) / 2);
      }
      buffer.push({
        config: { align: 'left', width: 2 },
        content: [
          part_abbr[j_name],
          '：',
          {
            color: j_count > 0 ? palam_colors.notifications[1] : undefined,
            content:
              j_count >= 10000
                ? `${Math.floor(j_count / 1000).toLocaleString()}K`
                : j_count.toLocaleString(),
            title: j_count >= 10000 ? j_count.toLocaleString() : undefined,
          },
        ],
        type: 'text',
      });
    });
    if (chara_id > 0) {
      era.printMultiColumns(buffer, { horizontalAlign: 'space-between' });
      buffer = [];
      new Array(4).fill(0).forEach((_, i) => {
        const j_name = era.get(`palamname:${i + 10}`);
        const j_count =
          (j_dict[j_name] =
          origin_dict[j_name] =
            era.get(`jewel:${chara_id}:${i + 10}`));
        buffer.push({
          config: { align: 'left', width: 2 },
          content: [
            j_name.substring(0, 1),
            '：',
            {
              color: j_count > 0 ? palam_colors.notifications[1] : undefined,
              ...get_abbr_number(j_count),
            },
          ],
          type: 'text',
        });
      });
      buffer.push({ config: { width: 13 }, content: [], type: 'text' });
    } else {
      const key = '顺从';
      const j_count =
        (j_dict[key] =
        origin_dict[key] =
          era.get(`jewel:${chara_id}:${key}`));
      buffer.push({
        config: { align: 'left', width: 2 },
        content: [
          '顺',
          '：',
          {
            color: j_count > 0 ? palam_colors.notifications[1] : undefined,
            content:
              j_count >= 10000
                ? `${Math.floor(j_count / 1000).toLocaleString()}K`
                : j_count.toLocaleString(),
            title: j_count >= 10000 ? j_count.toLocaleString() : undefined,
          },
        ],
        type: 'text',
      });
    }
    era.printMultiColumns(buffer, { horizontalAlign: 'space-between' });
    if (page_pointer.tab === 0) {
      era.drawLine({
        content: `${chara.get_full_name()} 的 能力`,
      });
      buffer = [];
      const skill_dict = {};
      ['甜言蜜语', '接吻技巧', '口交技巧', '口腔耐性', '口腔掌握'].forEach(
        (e, i) =>
          buffer.push(...get_skill_buttons(chara_id, i, e, skill_dict, j_dict)),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(chara_id, 5, '乳交技巧', skill_dict, j_dict),
        );
      }
      ['胸部耐性', '胸部掌握'].forEach((e, i) =>
        buffer.push(
          ...get_skill_buttons(chara_id, i + 6, e, skill_dict, j_dict),
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['手交技巧', '足交技巧', '身体技巧', '身体耐性', '身体掌握'].forEach(
        (e, i) =>
          buffer.push(
            ...get_skill_buttons(chara_id, i + 8, e, skill_dict, j_dict),
          ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex) {
        buffer.push(
          ...get_skill_buttons(chara_id, 13, '插入技巧', skill_dict, j_dict),
        );
        buffer.push(
          ...get_skill_buttons(chara_id, 14, '阴茎耐性', skill_dict, j_dict),
        );
      }
      buffer.push(
        ...get_skill_buttons(chara_id, 15, '阴茎掌握', skill_dict, j_dict),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(chara_id, 16, '性交技巧', skill_dict, j_dict),
        );
      }
      if (!chara_sex) {
        buffer.push(
          ...get_skill_buttons(chara_id, 17, '外阴耐性', skill_dict, j_dict),
        );
      }
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(chara_id, 18, '阴道耐性', skill_dict, j_dict),
        );
      }
      ['外阴掌握', '阴道掌握'].forEach((e, i) =>
        buffer.push(
          ...get_skill_buttons(chara_id, i + 19, e, skill_dict, j_dict),
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['肛交技巧', '肛门耐性', '肛门掌握'].forEach((e, i) =>
        buffer.push(
          ...get_skill_buttons(chara_id, i + 21, e, skill_dict, j_dict),
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['施虐技巧', '受虐耐性', '受虐掌握'].forEach((e, i) =>
        buffer.push(
          ...get_skill_buttons(chara_id, i + 24, e, skill_dict, j_dict),
        ),
      );
      era.printMultiColumns(buffer);

      era.print(
        '\n* 点击能力名显示说明，或者点击↑/↓升级或降级能力\n' +
          `** 角色身体部位的调教因子不足所需时，${me.name} 可以以两倍的因子补足差额`,
      );
      print_footer(chara_id, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const skill_index = ret % 100;
        const action = ret - skill_index;
        const skill_name = skill_desc[skill_index].substring(0, 4);
        if (action === 0) {
          await era.printAndWait(skill_desc[skill_index]);
        } else {
          era.print([
            '要将 ',
            chara.get_colored_name(),
            ' 的',
            {
              content: ` ${skill_name} Lv.${skill_dict[skill_name]}`,
              color: buff_colors[2],
            },
            action === 100
              ? { content: ' 升级 ', color: attr_change_colors.up }
              : { content: ' 降级 ', color: attr_change_colors.down },
            '至',
            {
              content: ` Lv.${
                skill_dict[skill_name] + (action === 100 ? 1 : -1)
              } `,
              color: buff_colors[2],
            },
            '吗？花费：',
          ]);
          const price_dict = get_skill_price(
            chara_id,
            skill_name,
            skill_dict[skill_name] + (action === 100 ? 1 : 0),
          );
          const is_confirmed = await print_price_and_confirm(
            chara_id,
            price_dict,
            origin_dict,
          );
          if (is_confirmed) {
            era.add(`abl:${chara_id}:${skill_name}`, action === 100 ? 1 : -1);
            pay_juels(chara_id, price_dict, origin_dict);
            total_delta.skill =
              (total_delta.skill || 0) + (action === 100) * 2 - 1;
          }
        }
      } else {
        default_handler(ret, page_pointer);
      }
    } else if (page_pointer.tab === 1) {
      era.drawLine({
        content: `${chara.get_full_name()} 的 特性`,
      });
      const talent_dict = { slave_run: 0 };
      new Array(7).fill(0).forEach((_, i) => {
        talent_dict.slave_run +=
          (talent_dict[era.get(`talentname:${i + 60}`)] = era.get(
            `talent:${chara_id}:${i + 60}`,
          )) === 2;
      });

      buffer = [];
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          0,
          '淫口',
          era.get(`exp:${chara_id}:口腔高潮次数`),
          talent_dict,
          j_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          1,
          '淫乳',
          era.get(`exp:${chara_id}:胸部高潮次数`),
          talent_dict,
          j_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          2,
          '淫身',
          era.get(`exp:${chara_id}:身体高潮次数`),
          talent_dict,
          j_dict,
        ),
      );
      if (chara_sex) {
        buffer.push(
          ...get_talent_buttons(
            chara_id,
            3,
            '早泄',
            era.get(`exp:${chara_id}:阴茎高潮次数`),
            talent_dict,
            j_dict,
          ),
        );
      }
      if (chara_sex === 0) {
        buffer.push(
          ...get_talent_buttons(
            chara_id,
            4,
            '淫核',
            era.get(`exp:${chara_id}:外阴高潮次数`),
            talent_dict,
            j_dict,
          ),
        );
      }
      if (chara_sex - 1) {
        buffer.push(
          ...get_talent_buttons(
            chara_id,
            5,
            '淫壶',
            era.get(`exp:${chara_id}:阴道高潮次数`),
            talent_dict,
            j_dict,
          ),
        );
      }
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          6,
          '淫臀',
          era.get(`exp:${chara_id}:肛门高潮次数`),
          talent_dict,
          j_dict,
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          7,
          '抖S',
          era.get(`exp:${chara_id}:施虐高潮次数`),
          talent_dict,
          j_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          8,
          '喜欢责骂',
          era.get(`exp:${chara_id}:受虐高潮次数`),
          talent_dict,
          j_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          9,
          '喜欢痛苦',
          era.get(`exp:${chara_id}:受虐高潮次数`),
          talent_dict,
          j_dict,
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['喉咙敏感', '饮精成瘾'].forEach((e, i) =>
        buffer.push(
          ...get_talent_buttons(
            chara_id,
            i + 10,
            e,
            era.get(`exp:${chara_id}:饮精量`),
            talent_dict,
            j_dict,
          ),
        ),
      );
      if (chara_sex - 1) {
        ['子宫敏感', '榨精成瘾'].forEach((e, i) =>
          buffer.push(
            ...get_talent_buttons(
              chara_id,
              i + 12,
              e,
              era.get(`exp:${chara_id}:膣内精液量`),
              talent_dict,
              j_dict,
            ),
          ),
        );
      }
      ['肠道敏感', '精液灌肠'].forEach((e, i) =>
        buffer.push(
          ...get_talent_buttons(
            chara_id,
            i + 14,
            e,
            era.get(`exp:${chara_id}:肠内精液量`),
            talent_dict,
            j_dict,
          ),
        ),
      );
      const metric =
        era.get(`exp:${chara_id}:颜射精液量`) +
        era.get(`exp:${chara_id}:胸部沾染精液量`) +
        era.get(`exp:${chara_id}:身体沾染精液量`);
      ['气味敏感', '浴精成瘾'].forEach((e, i) =>
        buffer.push(
          ...get_talent_buttons(
            chara_id,
            i + 16,
            e,
            metric,
            talent_dict,
            j_dict,
          ),
        ),
      );
      if (chara_sex - 1) {
        const milk_talent = era.get(`talent:${chara_id}:泌乳`);
        buffer.push(
          ...[
            {
              accelerator: 18,
              config: {},
              content: `母乳体质 [${milk_talent === 3 ? '是' : '否'}]`,
              type: 'button',
            },
            {
              accelerator: 118,
              config: {
                disabled:
                  milk_talent !== 2 ||
                  Object.entries(
                    get_talent_price(chara_id, '母乳体质', 2),
                  ).findIndex((e) => e[1] > j_dict[e[0]]) !== -1,
              },
              content: '获取特性',
              type: 'button',
            },
            {
              accelerator: 218,
              config: {
                disabled:
                  milk_talent !== 3 ||
                  Object.entries(
                    get_talent_price(chara_id, '母乳体质', 1),
                  ).findIndex((e) => e[1] > j_dict[e[0]]) !== -1,
              },
              content: '消除特性',
              type: 'button',
            },
          ].map((e) => {
            e.config.width = 4;
            return e;
          }),
        );
        const nipple_size = era.get(`talent:${chara_id}:乳头类型`);
        buffer.push(
          ...[
            {
              accelerator: 19,
              config: {},
              content: `凹陷乳头 [${nipple_size === 2 ? '是' : '否'}]`,
              type: 'button',
            },
            {
              accelerator: 119,
              config: {
                disabled:
                  nipple_size === 2 ||
                  Object.entries(
                    get_talent_price(chara_id, '凹陷乳头', 2),
                  ).findIndex((e) => e[1] > j_dict[e[0]]) !== -1,
              },
              content: '获取特性',
              type: 'button',
            },
            {
              accelerator: 219,
              config: {
                disabled:
                  nipple_size !== 2 ||
                  Object.entries(
                    get_talent_price(chara_id, '凹陷乳头', 1),
                  ).findIndex((e) => e[1] > j_dict[e[0]]) !== -1,
              },
              content: '消除特性',
              type: 'button',
            },
          ].map((e) => {
            e.config.width = 4;
            return e;
          }),
        );
      }
      era.printMultiColumns(buffer);

      era.println();
      era.print([
        '* 点击特性名显示说明，或者点击之后的按钮升降感度/获取或消除特性',
        { isBr: true },
        `** 角色身体部位的调教因子不足所需时，${me.name} 可以以两倍的因子补足差额`,
        { isBr: true },
        `*** 可获取最高级敏感度的部位数量：${era.get(`talent:${chara_id}:调教度`) + 1}`,
      ]);
      print_footer(chara_id, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const talent_index = ret % 100;
        const action = ret - talent_index;
        const talent_name = talent_desc[talent_index].replace(
          /[/\n](.|\n)*$/,
          '',
        );
        if (action === 0) {
          await era.printAndWait(talent_desc[talent_index]);
        } else {
          if (talent_index >= 18) {
            const inmon = CharaInmon.get(chara_id);
            era.print([
              '要',
              action === 100
                ? { content: ' 获取 ', color: attr_change_colors.up }
                : { content: ' 消除 ', color: attr_change_colors.down },
              chara.get_colored_name(),
              ' 的',
              {
                content: ` [${talent_name}] `,
                color: buff_colors[2],
              },
              '特性吗？',
              action === 200 &&
              talent_index === 18 &&
              inmon.slave === slavery_enum.milk
                ? '会取消淫纹词条 [乳奴]！'
                : '',
              '花费：',
            ]);
            const price_dict = get_talent_price(
              chara_id,
              talent_name,
              action === 100 ? 2 : 1,
            );
            const is_confirmed = await print_price_and_confirm(
              chara_id,
              price_dict,
              origin_dict,
            );
            if (is_confirmed) {
              if (talent_index === 18) {
                era.set(`talent:${chara_id}:泌乳`, action === 100 ? 3 : 0);
                if (
                  action === 200 &&
                  talent_index === 18 &&
                  inmon.slave === slavery_enum.milk
                ) {
                  inmon.slave = 0;
                }
              } else {
                era.set(`talent:${chara_id}:乳头类型`, action === 100 ? 2 : 0);
              }
              pay_juels(chara_id, price_dict, origin_dict);
              total_delta.talent =
                (total_delta.talent || 0) + (action === 100 ? 1 : -1);
            }
          } else {
            if (talent_index < 7) {
              era.print([
                '要',
                action === 100
                  ? { content: ' 提升 ', color: attr_change_colors.up }
                  : { content: ' 降低 ', color: attr_change_colors.down },
                chara.get_colored_name(),
                ' 的',
                {
                  content: ` ${trained_talent_names[talent_name][0].substring(
                    0,
                    2,
                  )}敏感度 `,
                  color: buff_colors[2],
                },
                '吗？花费：',
              ]);
            } else if (talent_index < 18) {
              era.print([
                '要',
                action === 100
                  ? { content: ' 获取 ', color: attr_change_colors.up }
                  : { content: ' 消除 ', color: attr_change_colors.down },
                chara.get_colored_name(),
                ' 的',
                {
                  content: ` [${talent_name}] `,
                  color: buff_colors[2],
                },
                '特性吗？花费：',
              ]);
            }
            const delta =
              talent_button_names_and_check_dict[
                talent_index < 7 ? 'trained' : 'poisoned'
              ][action === 100 ? 'up_delta' : 'down_delta'][
                talent_dict[talent_name]
              ];
            const price_dict = get_talent_price(chara_id, talent_name, delta);
            const is_confirmed = await print_price_and_confirm(
              chara_id,
              price_dict,
              origin_dict,
            );
            if (is_confirmed) {
              era.add(`talent:${chara_id}:${talent_name}`, delta);
              pay_juels(chara_id, price_dict, origin_dict);
              total_delta.talent = (total_delta.talent || 0) + delta;
            }
          }
        }
      } else {
        default_handler(ret, page_pointer);
      }
    } else if (page_pointer.tab === 2) {
      await print_mark_tab(chara, j_dict, total_delta, page_pointer);
    } else {
      era.drawLine({ content: '采补之术' });
      era.printMultiColumns(
        Object.keys(j_dict).map((e, i) => {
          return {
            accelerator: i,
            config: { width: 12, disabled: origin_dict[e] < 10000 },
            content: `将 ${chara.name} 的 ${e.substring(
              0,
              2,
            )}因子 转换给 ${me.name}`,
            type: 'button',
          };
        }),
      );
      era.print([
        { isBr: true },
        '* ',
        chara.get_colored_name(),
        ' 的',
        { content: ' 10,000 ', color: buff_colors[2] },
        '个部位因子与顺从因子，可以转换为 ',
        me.get_colored_name(),
        ' 的',
        { content: ' 10 ', color: buff_colors[2] },
        '个因子',
        { isBr: true },
        '* ',
        chara.get_colored_name(),
        ' 的',
        { content: ' 10,000 ', color: buff_colors[2] },
        '个痛苦、恐惧、羞耻因子，可以转换为 ',
        me.get_colored_name(),
        ' 的',
        { content: ' 1 ', color: buff_colors[2] },
        '个顺从因子',
      ]);
      print_footer(chara_id, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const src_j_name = Object.keys(j_dict)[ret],
          dst_j_name = ret < 10 ? src_j_name : '顺从',
          dst_j_count = ret < 10 ? 10 : 1;
        if (
          await select_yes_or_no(
            [
              '将 ',
              chara.get_colored_name(),
              ' 的',
              {
                content: ` ${src_j_name.substring(0, 2)}因子 × 10,000`,
                color: buff_colors[2],
              },
              '（总共 ',
              {
                content: origin_dict[src_j_name].toLocaleString(),
                color: buff_colors[2],
              },
              `）转换为 ${me.name} 的`,
              {
                content: ` ${dst_j_name.substring(0, 2)}因子 × ${dst_j_count} `,
                color: buff_colors[2],
              },
              '吗？',
            ],
            '确定',
            '还是算了',
          )
        ) {
          era.add(`jewel:${chara_id}:${src_j_name}`, -10000);
          era.add(`jewel:0:${dst_j_name}`, dst_j_count);
        }
      } else {
        default_handler(ret, page_pointer);
      }
    }
  }
  if (chara_id > 0) {
    await shop_result(
      chara_id,
      (total_delta.skill || 0) + (total_delta.talent || 0),
      await get_custom_ero(chara_id).shop_end(total_delta),
    );
  }
};
