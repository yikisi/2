const era = require('#/era-electron');

const update_marks = require('#/system/ero/calc-sex/update-marks');
const { get_mark_price } = require('#/system/ero/sys-get-juel-price');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const {
  default_handler,
  get_mark_cols,
  print_footer,
  print_price_and_confirm,
} = require('#/page/juel-shop/snippets');

const { get_custom_ero } = require('#/event/ero/ero-factory');

const get_gradient_color = require('#/utils/gradient-color');

const { attr_change_colors, buff_colors } = require('#/data/color-const');
const { mark_colors } = require('#/data/const.json');
const { trainer_salary } = require('#/data/const.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const InmonPlugin = require('#/data/ero/inmon-plugin');
const {
  inmon_limit,
  mark_enum,
  slavery_descriptions,
  slavery_enum,
  slavery_options,
  slavery_titles,
} = require('#/data/ero/mark-const');
const { inmon_plugin_dict } = require('#/data/ero/plugin/plugin-const');
const { get_trainer_title } = require('#/data/info-generator');

/**
 * @param {{a:number,m:number,p:InmonPlugin}} plugin_with_acc
 * @param {CharaInmon} inmon
 * @param {number} money
 * @param {number} size
 * @param {number} limit
 * @param {Record<string,1>} group_dict
 */
function plugin_to_button(
  plugin_with_acc,
  inmon,
  money,
  size,
  limit,
  group_dict,
) {
  return [
    {
      accelerator: plugin_with_acc.a,
      config: {
        color: plugin_with_acc.p.color,
        disabled:
          (!inmon.on(plugin_with_acc.p.id) &&
            (plugin_with_acc.p.size + size > limit ||
              group_dict[plugin_with_acc.p.group] > 0)) ||
          (!inmon.has(plugin_with_acc.p.id) && money < plugin_with_acc.m),
        disableWarning: true,
        title: plugin_with_acc.p.title,
        width: 4,
      },
      content: plugin_with_acc.p.name,
      type: 'button',
    },
    {
      type: 'text',
      content: `Lv. ${plugin_with_acc.p.level}`,
      config: { width: 2 },
    },
    {
      type: 'text',
      content: `${plugin_with_acc.p.size} 插槽`,
      config: { align: 'right', width: 2 },
    },
    {
      type: 'text',
      ...(inmon.has(plugin_with_acc.p.id)
        ? {
            config: {
              align: 'right',
              color: attr_change_colors.up,
              width: 3,
            },
            content: '已解锁',
          }
        : {
            config: { align: 'right', color: buff_colors[2], width: 3 },
            content: `${plugin_with_acc.m.toLocaleString()} 顺从`,
          }),
    },
  ];
}

/**
 * @param {CharaTalk} chara
 * @param {Record<string,number>} juel_dict
 * @param {Record<string,number>} total_delta
 * @param {{tab:number,flag:boolean,sub:number}} pointer
 */
module.exports = async (chara, juel_dict, total_delta, pointer) => {
  let buffer = [];
  let sex_level = era.get(`mark:${chara.id}:淫纹`);
  const pleasure_level = era.get(`mark:${chara.id}:欢愉`),
    meek_level = era.get(`mark:${chara.id}:同心`),
    pain_level = era.get(`mark:${chara.id}:苦痛`),
    shame_level = era.get(`mark:${chara.id}:羞耻`),
    hate_level = era.get(`mark:${chara.id}:反抗`);
  let sex_mark_price = 0;
  const price_dict = [];
  if (chara.id > 0) {
    era.drawLine({
      content: `${chara.get_full_name()} 的 刻印`,
    });
    if (!sex_level) {
      buffer.push(get_mark_cols(chara.id, '欢愉', pleasure_level));
    }
    buffer.push(get_mark_cols(chara.id, '同心', meek_level));
    buffer.push(get_mark_cols(chara.id, '苦痛', pain_level));
    buffer.push(get_mark_cols(chara.id, '羞耻', shame_level));
    buffer.push(get_mark_cols(chara.id, '反抗', hate_level));
    if (hate_level) {
      price_dict[0] = get_mark_price(chara.id, hate_level, meek_level / 2);
      price_dict[1] = price_dict[2] = get_mark_price(
        chara.id,
        hate_level,
        pain_level + 0.75,
      );
      price_dict[3] = get_mark_price(chara.id, hate_level, shame_level + 0.75);
      buffer.push(
        ...[
          {
            config: {
              disabled: juel_dict['顺从'] < price_dict[0] || !meek_level,
            },
            content: '使用顺从因子消除反抗刻印',
          },
          {
            config: {
              disabled: juel_dict['痛苦'] < price_dict[1] || !pain_level,
            },
            content: '使用痛苦因子消除反抗刻印',
          },
          {
            config: {
              disabled: juel_dict['恐惧'] < price_dict[2] || !pain_level,
            },
            content: '使用恐惧因子消除反抗刻印',
          },
          {
            config: {
              disabled: juel_dict['羞耻'] < price_dict[3] || !shame_level,
            },
            content: '使用羞耻因子消除反抗刻印',
          },
        ].map((e, i) => {
          e.type = 'button';
          e.config.width = 6;
          e.accelerator = i;
          return e;
        }),
        {
          content:
            '* 在获得刻印的情况下，可以使用相应因子消除反抗刻印\n** 在刻印等级相同的情况下，使用痛苦、恐惧、羞耻三种因子消除反抗刻印的价格比顺从更低，但是可能存在副作用',
          type: 'text',
        },
      );
    }
    if (pain_level) {
      price_dict[4] = get_mark_price(chara.id, pain_level, meek_level);
      buffer.push({
        accelerator: 4,
        config: {
          disabled: juel_dict['顺从'] < price_dict[4],
          width: 6,
        },
        content: '使用顺从因子消除苦痛刻印',
        type: 'button',
      });
    }
    if (shame_level) {
      price_dict[5] = get_mark_price(chara.id, shame_level, meek_level);
      buffer.push({
        accelerator: 5,
        config: {
          disabled: juel_dict['顺从'] < price_dict[5],
          width: 6,
        },
        content: '使用顺从因子消除羞耻刻印',
        type: 'button',
      });
    }
    if (pain_level + shame_level) {
      buffer.push({
        content:
          '* 要消除的刻印等级越低，同心刻印的等级越高，消耗的顺从因子越低',
        type: 'text',
      });
    }
  }
  era.printMultiColumns(buffer, { horizontalAlign: 'space-around' });

  const inmon = CharaInmon.get(chara.id);
  const p_filter_param = {
    id: chara.id,
    chara:
      era.get(`cflag:${chara.id}:种族`) > 0
        ? era.get(`cflag:${chara.id}:气性`)
        : undefined,
    sex: chara.sex_code,
  };
  const plugins = Object.values(inmon_plugin_dict)
    .filter((e) => e.level <= sex_level && e.condition(p_filter_param))
    .map((e, i) => ({
      a: i + 10,
      p: e,
      m: Math.floor(
        (e.price *
          (100 +
            era.get('flag:宝珠消耗量') +
            era.get(`talent:${chara.id}:工口好奇`) * 10)) /
          100,
      ),
    }));
  const groups = plugins.reduce((p, c) => {
    (p[c.p.group] ||= []).push(c);
    return p;
  }, {});
  const money = price_dict['顺从'];
  const slave = inmon.slave;
  if (sex_level > 0 || (pleasure_level > 0 && meek_level > 0)) {
    era.drawLine({
      content: chara.get_full_name() + ' 的 淫纹',
    });
    if (sex_level > 0) {
      const limit = inmon_limit[sex_level];
      const size = inmon.size;
      const group_dict = {};
      sex_mark_price = get_mark_price(chara.id, sex_level + 1, meek_level);
      const sex_mark_col = get_mark_cols(chara.id, '淫纹', sex_level);
      delete sex_mark_col.config.width;
      sex_mark_col.content.unshift({ isBr: true });
      const p_buffer = inmon.to_list.map((e) => {
        const p = inmon_plugin_dict[e];
        group_dict[p.group] = 1;
        const name = p.colored_name;
        name.content += ` (${p.size})`;
        return {
          accelerator: plugins.find((e) => e.p.id === p.id).a,
          config: {
            align: 'center',
            color: name.color,
            title: name.title,
          },
          content: name.content,
          type: 'button',
        };
      });
      const buffer = [];
      const keys = Object.keys(groups).slice(pointer.sub, pointer.sub + 2);
      buffer.push({
        config: {
          content: InmonPlugin.group_names[keys[0]],
          position: 'left',
          width: 11,
        },
        type: 'divider',
      });
      if (keys[1] !== undefined) {
        buffer.push({
          config: {
            content: InmonPlugin.group_names[keys[1]],
            position: 'left',
            width: 11,
            offset: 1,
          },
          type: 'divider',
        });
      } else {
        buffer.push({ content: [], type: 'text' });
      }
      const p_buttons = keys.map((e) => groups[e]);
      if (p_buttons.length < 2) {
        p_buttons.push([]);
      }
      for (let i = 0; i < Math.max(...p_buttons.map((e) => e.length)); ++i) {
        const left = p_buttons[0][i];
        const right = p_buttons[1][i];
        if (left === undefined) {
          const temp = plugin_to_button(
            right,
            inmon,
            money,
            size,
            limit,
            group_dict,
          );
          temp[0].config.offset = 13;
          buffer.push(...temp);
        } else if (right === undefined) {
          buffer.push(
            ...plugin_to_button(left, inmon, money, size, limit, group_dict),
            { content: [], type: 'text' },
          );
        } else {
          buffer.push(
            ...plugin_to_button(left, inmon, money, size, limit, group_dict),
          );
          const temp = plugin_to_button(
            right,
            inmon,
            money,
            size,
            limit,
            group_dict,
          );
          temp[0].config.offset = 1;
          buffer.push(...temp);
        }
      }
      era.setVerticalAlign('middle');
      era.printInColRows(
        {
          columns: [
            ...p_buffer,
            { content: size > 0 ? [{ isBr: true }] : [], type: 'text' },
            {
              content: [
                ...new Array(size)
                  .fill('[·]')
                  .map((e) => ({ content: e, display: 'inline-block' })),
                ...new Array(limit - size)
                  .fill('[ ]')
                  .map((e) => ({ content: e, display: 'inline-block' })),
              ].reduce((p, c, i) => {
                p.push(c);
                if (i % 6 === 5) {
                  p.push({ isBr: true });
                }
                return p;
              }, []),
              config: {
                align: 'center',
                color: mark_colors['淫纹'],
              },
              type: 'text',
            },
            sex_mark_col,
            {
              config: {
                align: 'center',
                color: mark_colors['淫纹'],
              },
              content: `插槽：${size}/${limit}`,
              type: 'text',
            },
          ],
          config: { width: 5 },
        },
        {
          columns: [
            ...(sex_level < 3
              ? [
                  {
                    accelerator: 7,
                    config: {
                      disabled:
                        !meek_level || juel_dict['顺从'] < sex_mark_price,
                      width: 6,
                    },
                    content: '提升淫纹等级',
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content:
                      '* 一心同体的程度（同心刻印的等级）越高，淫纹的升级费用越低',
                    type: 'text',
                  },
                ]
              : [
                  chara.id > 0
                    ? {
                        accelerator: 9,
                        config: { width: 6 },
                        content: `当前词条：${slavery_options[slave]}`,
                        type: 'button',
                      }
                    : {
                        config: { width: 6 },
                        content: `当前词条：${slavery_options[slave]}`,
                        type: 'text',
                      },
                  {
                    config: { width: 18 },
                    content: `效果：${slavery_descriptions[slave]}`,
                    type: 'text',
                  },
                ]),
            { config: { content: '可用插件', width: 15 }, type: 'divider' },
            {
              accelerator: 200,
              config: {
                align: 'right',
                width: 4,
                disabled: pointer.sub === 0,
              },
              content: '前一页',
              type: 'button',
            },
            {
              accelerator: 201,
              config: {
                align: 'right',
                width: 4,
                disabled: pointer.sub + 2 > Object.keys(groups).length,
              },
              content: '后一页',
              type: 'button',
            },
            ...buffer,
            { content: '\n* 插件通过购买解锁后不再花费顺从因子', type: 'text' },
            { content: '** 同类效果的插件一次只能装载一个', type: 'text' },
          ],
          config: { verticalAlign: 'middle', width: 19 },
        },
      );
      era.setVerticalAlign('top');
    } else {
      sex_mark_price = get_mark_price(chara.id, pleasure_level, meek_level);
      era.printButton('将欢愉刻印转换为淫纹', 6, {
        disabled: juel_dict['顺从'] < sex_mark_price,
      });
      era.print('* 一心同体的程度（同心刻印的等级）越高，淫纹的升级费用越低');
    }
  }

  print_footer(chara.id, pointer.tab);
  const ret = await era.input();
  if (ret < 4) {
    const palam_name = era.get(`palamname:${ret + 10}`);
    era.print([
      '要用 ',
      chara.get_colored_name(),
      ` 的 ${palam_name}因子 消除一级`,
      {
        content: ' 反抗刻印 ',
        color: mark_colors['反抗'],
      },
      '吗？花费：',
    ]);
    const is_confirmed = await print_price_and_confirm(
      chara.id,
      JSON.parse(`{"${palam_name}":${price_dict[ret]}}`),
      juel_dict,
    );
    if (is_confirmed) {
      total_delta.hate_clear = (total_delta.hate_clear || 0) + 1;
      era.add(`mark:${chara.id}:反抗`, -1);
      era.add(`juel:${chara.id}:${palam_name}`, -price_dict[ret]);
      begin_and_init_ero(chara.id);
      if (
        (ret === 1 || ret === 2) &&
        pain_level < 3 &&
        Math.random() < 1 - 0.15 * (3 - hate_level) - 0.2 * (pain_level - 1)
      ) {
        era.set(`nowex:${chara.id}:苦痛获取`, 1);
      } else if (
        ret === 3 &&
        shame_level < 3 &&
        Math.random() < 1 - 0.15 * (3 - hate_level) - 0.2 * (shame_level - 1)
      ) {
        era.set(`nowex:${chara.id}:羞耻获取`, 1);
      }
      (await update_marks(true, chara.id)) && (await era.waitAnyKey());
      end_ero_and_train();
    }
  } else if (ret <= 5) {
    const mark_name = era.get(`markname:${ret - 1}`);
    era.print([
      '要用 ',
      chara.get_colored_name(),
      ` 的 顺从因子 消除一级`,
      {
        content: ` ${mark_name}刻印 `,
        color: mark_colors[mark_name],
      },
      '吗？花费：',
    ]);
    const is_confirmed = await print_price_and_confirm(
      chara.id,
      JSON.parse(`{"顺从":${price_dict[ret]}}`),
      juel_dict,
    );
    if (is_confirmed) {
      total_delta.mark_clear = (total_delta.mark_clear || 0) + 1;
      era.add(`mark:${chara.id}:${mark_name}`, -1);
      era.add(`juel:${chara.id}:顺从`, -price_dict[ret]);
    }
  } else if (ret <= 7) {
    if (ret === 6) {
      era.print([
        '将 ',
        chara.get_colored_name(),
        ' 的 ',
        {
          content: `欢愉刻印 Lv.${pleasure_level}`,
          color: get_gradient_color(
            undefined,
            mark_colors['欢愉'],
            pleasure_level / 3,
          ),
        },
        ` 转换为 `,
        {
          content: `淫纹 Lv.${pleasure_level}`,
          color: get_gradient_color(
            undefined,
            mark_colors['淫纹'],
            pleasure_level / 3,
          ),
        },
        ` 吗？花费：`,
      ]);
    } else {
      era.print([
        '将 ',
        chara.get_colored_name(),
        ' 的 ',
        {
          content: `淫纹 Lv.${sex_level}`,
          color: get_gradient_color(
            undefined,
            mark_colors['淫纹'],
            sex_level / 3,
          ),
        },
        ` 升级为 `,
        {
          content: `Lv.${sex_level + 1}`,
          color: get_gradient_color(
            undefined,
            mark_colors['淫纹'],
            (sex_level + 1) / 3,
          ),
        },
        ` 吗？花费：`,
      ]);
    }
    const is_confirmed = await print_price_and_confirm(
      chara.id,
      JSON.parse(`{"顺从":${sex_mark_price}}`),
      juel_dict,
    );
    if (is_confirmed) {
      if (
        await select_yes_or_no(
          '刻印淫纹以奴役对方是一种极不道德的行为，对社会评价极为不利！请确认是否继续？',
          '确定',
          '溜了溜了',
        )
      ) {
        if (ret === 6) {
          era.set(`mark:${chara.id}:欢愉`, 0);
          sex_level = era.set(`mark:${chara.id}:淫纹`, pleasure_level);
          total_delta.pleasure_delta = pleasure_level;
          total_delta.sex_delta = pleasure_level;
          sys_change_fame(-100 * [1, 3, 6][sex_level - 1]);
        } else {
          sex_level = era.add(`mark:${chara.id}:淫纹`, 1);
          total_delta.sex_delta = (total_delta.sex_delta || 0) + 1;
          sys_change_fame(-100 * sex_level);
        }
        await get_custom_ero(chara.id).get_mark(
          sex_level,
          mark_enum.ero,
          ret === 6,
        );
        era.add(`juel:${chara.id}:顺从`, -sex_mark_price);
      }
    }
  } else if (ret === 9) {
    era.drawLine({ content: '选择新淫纹词条' });
    era.printMultiColumns([
      { config: { width: 3 }, content: '词条', type: 'text' },
      { config: { width: 3 }, content: '别称', type: 'text' },
      { config: { width: 18 }, content: '效果', type: 'text' },
    ]);
    const disabled = juel_dict['顺从'] < 1000;
    const columns = slavery_options.map((e, i) => [
      {
        accelerator: i,
        config: { disabled: slave === i || (i > 0 && disabled), width: 3 },
        content: slavery_options[i],
        type: 'button',
      },
      {
        config: { width: 3 },
        content: slavery_titles[i],
        type: 'text',
      },
      {
        config: { width: 18 },
        content: slavery_descriptions[i],
        type: 'text',
      },
    ]);
    if (chara.sex_code === 1) {
      columns[slavery_enum.milk][0].config.disabled = true;
      columns[slavery_enum.milk][0].title = '男性不能上贡乳汁……';
      columns[slavery_enum.pregnant][0].config.disabled = true;
      columns[slavery_enum.pregnant][0].title = '男性不能怀孕……';
    } else if (era.get(`talent:${chara.id}:泌乳`) !== 3) {
      columns[slavery_enum.milk][0].config.disabled = true;
      columns[slavery_enum.milk][0].config.title =
        '只有 [母乳体质] 才能上贡乳汁……';
    }
    if (era.get(`cflag:${chara.id}:种族`) === 0) {
      columns[slavery_enum.inherit][0].config.disabled = true;
      columns[slavery_enum.inherit][0].config.title =
        '只有' + chara.get_uma_sex_title() + '能上贡因子……';
    }
    if (era.get('flag:助手') > 0) {
      columns[slavery_enum.assistant][0].config.disabled = true;
      columns[slavery_enum.assistant][0].config.title =
        '已经有了一名' + slavery_options[slavery_enum.assistant] + '……';
    }
    columns.forEach((e) => era.printMultiColumns(e));
    era.printButton('取消切换', 99);
    era.print([
      '* 切换词条需要 1,000 顺从因子',
      { isBr: true },
      '** 取消词条无任何花销',
    ]);
    let ret = await era.input();
    if (ret < 99) {
      if (ret === 0) {
        if (!(await select_yes_or_no('确定要取消词条吗？'))) {
          ret = -1;
        }
      } else {
        era.print([
          '将 ',
          chara.get_colored_name(),
          ' 的淫纹词条切换为 ',
          {
            color: buff_colors[2],
            content: slavery_options[ret],
          },
          ' 吗？花费：',
        ]);
        if (
          await print_price_and_confirm(
            chara.id,
            JSON.parse('{"顺从":1000}'),
            juel_dict,
          )
        ) {
          era.add(`juel:${chara.id}:顺从`, -1000);
        } else {
          ret = -1;
        }
      }
      if (ret >= 0) {
        switch (slave) {
          case slavery_enum.worker:
            era.set(
              'flag:账单',
              sys_get_billings().filter(
                (e) => e.creditor === chara.id && e.timer === -1,
              ),
            );
            break;
          case slavery_enum.assistant:
            era.set('flag:助手', 0);
        }
        switch (ret) {
          case slavery_enum.worker:
            sys_get_billings().push({
              creditor: chara.id,
              repay: trainer_salary[get_trainer_title().substring(0, 2)] / 4,
              timer: -1,
            });
            break;
          case slavery_enum.assistant:
            era.set('flag:助手', chara.id);
        }
        inmon.slave = ret;
      }
    }
  } else if (ret < 100) {
    const { p, m: cost } = plugins[ret - 10];
    if (!inmon.has(p.id)) {
      era.print([
        '要为 ',
        chara.get_colored_name(),
        ' 解锁并装载 ',
        p.colored_name,
        ' 吗？花费：',
      ]);
      if (
        await print_price_and_confirm(
          chara.id,
          JSON.parse(`{"顺从":${cost}}`),
          juel_dict,
        )
      ) {
        era.add(`juel:${chara.id}:顺从`, -cost);
        inmon.set(p.id, 1 - inmon.on(p.id));
      }
    } else {
      inmon.set(p.id, 1 - inmon.on(p.id));
    }
  } else if (ret === 200) {
    pointer.sub -= 2;
  } else if (ret === 201) {
    pointer.sub += 2;
  } else {
    default_handler(ret, pointer);
  }
};
