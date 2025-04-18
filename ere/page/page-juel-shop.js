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

const {
  attr_change_colors,
  buff_colors,
  palam_colors,
} = require('#/data/color-const');
const { part_abbr } = require('#/data/ero/ero-alias.json');
const {
  shop_result_type_enum,
  talent_button_names_and_check_dict,
} = require('#/data/ero/juel-const');
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
  let display_name = chara.name;
  if (chara.name !== chara.actual_name) {
    display_name += ` (${chara.actual_name})`;
  }
  const page_pointer = {
    flag: true,
    tab: 0,
  };
  while (page_pointer.flag) {
    await era.clear();
    era.printInColRows({
      columns: [
        {
          config: { width: 9 },
          content: `${era.get('flag:当前年')} 年 ${era.get(
            'flag:当前月',
          )} 月 第 ${era.get('flag:当前周')} 周`,
          type: 'text',
        },
      ],
      config: { width: 16 },
    });
    era.drawLine({
      content: `${display_name} 的 因子`,
    });
    let buffer = [];
    const juel_dict = {},
      origin_dict = {};
    pleasure_list.forEach((part) => {
      const juel_name = part_names[part];
      const key = `${juel_name}快感`;
      const palam_num = era.get(`juel:${chara_id}:${key}`);
      juel_dict[key] = origin_dict[key] = palam_num;
      if (chara_id) {
        juel_dict[key] += Math.floor(era.get(`juel:0:${key}`) / 2);
      }
      buffer.push({
        config: { align: 'left', width: 2 },
        content: [
          part_abbr[juel_name],
          '：',
          {
            content: palam_num.toLocaleString(),
            color: juel_dict[key] ? palam_colors.notifications[1] : '',
          },
        ],
        type: 'text',
      });
    });
    if (chara_id > 0) {
      era.printMultiColumns(buffer, { horizontalAlign: 'space-between' });
      buffer = [];
      new Array(4).fill(0).forEach((_, i) => {
        const juel_name = era.get(`palamname:${i + 10}`);
        juel_dict[juel_name] = origin_dict[juel_name] = era.get(
          `juel:${chara_id}:${i + 10}`,
        );
        buffer.push({
          config: { align: 'left', width: 2 },
          content: [
            juel_name.substring(0, 1),
            '：',
            {
              content: juel_dict[juel_name].toLocaleString(),
              color: juel_dict[juel_name] ? palam_colors.notifications[1] : '',
            },
          ],
          type: 'text',
        });
      });
      new Array(5).fill(0).forEach(() =>
        buffer.push({
          config: { align: 'center', width: 2 },
          content: ' ',
          type: 'text',
        }),
      );
    } else {
      const key = '顺从';
      const palam_num = era.get(`juel:${chara_id}:${key}`);
      juel_dict[key] = origin_dict[key] = palam_num;
      buffer.push({
        config: { align: 'left', width: 2 },
        content: [
          '顺',
          '：',
          {
            content: juel_dict[key].toLocaleString(),
            color: juel_dict[key] ? palam_colors.notifications[1] : '',
          },
        ],
        type: 'text',
      });
    }
    era.printMultiColumns(buffer, { horizontalAlign: 'space-between' });
    if (page_pointer.tab === 0) {
      era.drawLine({
        content: `${display_name} 的 能力`,
      });
      buffer = [];
      const skill_dict = {};
      ['甜言蜜语', '接吻技巧', '口交技巧', '口腔耐性', '口腔掌握'].forEach(
        (e, i) =>
          buffer.push(
            ...get_skill_buttons(chara_id, i, e, skill_dict, juel_dict),
          ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(chara_id, 5, '乳交技巧', skill_dict, juel_dict),
        );
      }
      ['胸部耐性', '胸部掌握'].forEach((e, i) =>
        buffer.push(
          ...get_skill_buttons(chara_id, i + 6, e, skill_dict, juel_dict),
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['手交技巧', '足交技巧', '身体技巧', '身体耐性', '身体掌握'].forEach(
        (e, i) =>
          buffer.push(
            ...get_skill_buttons(chara_id, i + 8, e, skill_dict, juel_dict),
          ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex) {
        buffer.push(
          ...get_skill_buttons(chara_id, 13, '插入技巧', skill_dict, juel_dict),
        );
        buffer.push(
          ...get_skill_buttons(chara_id, 14, '阴茎耐性', skill_dict, juel_dict),
        );
      }
      buffer.push(
        ...get_skill_buttons(chara_id, 15, '阴茎掌握', skill_dict, juel_dict),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(chara_id, 16, '性交技巧', skill_dict, juel_dict),
        );
      }
      if (!chara_sex) {
        buffer.push(
          ...get_skill_buttons(chara_id, 17, '外阴耐性', skill_dict, juel_dict),
        );
      }
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(chara_id, 18, '阴道耐性', skill_dict, juel_dict),
        );
      }
      ['外阴掌握', '阴道掌握'].forEach((e, i) =>
        buffer.push(
          ...get_skill_buttons(chara_id, i + 19, e, skill_dict, juel_dict),
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['肛交技巧', '肛门耐性', '肛门掌握'].forEach((e, i) =>
        buffer.push(
          ...get_skill_buttons(chara_id, i + 21, e, skill_dict, juel_dict),
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['施虐技巧', '受虐耐性', '受虐掌握'].forEach((e, i) =>
        buffer.push(
          ...get_skill_buttons(chara_id, i + 24, e, skill_dict, juel_dict),
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
        content: `${display_name} 的 特性`,
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
          juel_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          1,
          '淫乳',
          era.get(`exp:${chara_id}:胸部高潮次数`),
          talent_dict,
          juel_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          2,
          '淫身',
          era.get(`exp:${chara_id}:身体高潮次数`),
          talent_dict,
          juel_dict,
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
            juel_dict,
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
            juel_dict,
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
            juel_dict,
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
          juel_dict,
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
          juel_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          8,
          '喜欢责骂',
          era.get(`exp:${chara_id}:受虐高潮次数`),
          talent_dict,
          juel_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          chara_id,
          9,
          '喜欢痛苦',
          era.get(`exp:${chara_id}:受虐高潮次数`),
          talent_dict,
          juel_dict,
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
            juel_dict,
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
              juel_dict,
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
            juel_dict,
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
            juel_dict,
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
                  ).findIndex((e) => e[1] > juel_dict[e[0]]) !== -1,
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
                  ).findIndex((e) => e[1] > juel_dict[e[0]]) !== -1,
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
                  ).findIndex((e) => e[1] > juel_dict[e[0]]) !== -1,
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
                  ).findIndex((e) => e[1] > juel_dict[e[0]]) !== -1,
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

      era.print(
        '\n* 点击特性名显示说明，或者点击之后的按钮升降感度/获取或消除特性\n' +
          `** 角色身体部位的调教因子不足所需时，${me.name} 可以以两倍的因子补足差额`,
      );
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
      await print_mark_tab(
        chara_id,
        chara,
        display_name,
        juel_dict,
        total_delta,
        page_pointer,
      );
    } else {
      era.drawLine({ content: '采补之术' });
      era.printMultiColumns(
        Object.keys(juel_dict).map((e, i) => {
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
        const src_juel_name = Object.keys(juel_dict)[ret],
          dst_juel_name = ret < 10 ? src_juel_name : '顺从',
          dst_juel_num = ret < 10 ? 10 : 1;
        if (
          await select_yes_or_no(
            [
              '将 ',
              chara.get_colored_name(),
              ' 的',
              {
                content: ` ${src_juel_name.substring(0, 2)}因子 × 10,000`,
                color: buff_colors[2],
              },
              '（总共 ',
              {
                content: origin_dict[src_juel_name].toLocaleString(),
                color: buff_colors[2],
              },
              `）转换为 ${me.name} 的`,
              {
                content: ` ${dst_juel_name.substring(0, 2)}因子 × ${dst_juel_num} `,
                color: buff_colors[2],
              },
              '吗？',
            ],
            '确定',
            '还是算了',
          )
        ) {
          era.add(`juel:${chara_id}:${src_juel_name}`, -10000);
          era.add(`juel:0:${dst_juel_name}`, dst_juel_num);
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
