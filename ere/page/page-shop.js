const crypto = require('crypto');

const era = require('#/era-electron');

const date_indicator = require('#/page/components/date-indicator');

const { money_color, attr_change_colors } = require('#/data/color-const');
const { location_name } = require('#/data/locations');
const shop_desc = require('#/data/shop-desc.json');

/**
 * @param {({id:number,[limit]:boolean}|number)[]} item_list
 */
module.exports = async (item_list) => {
  const hash = crypto.createHash('md5');
  hash.update(era.get('callname:0:-1') + era.get('flag:当前回合数'));
  const item_keys = era.get('itemkeys'),
    off_index = Number(`0x${hash.digest('hex').substring(0, 2)}`),
    off = item_keys[off_index % item_keys.length],
    price_cache = era.get(`itemprice:${off}`),
    in_list = item_list.filter((e) => e === off || e.id === off).length > 0;
  era.set(
    `itemprice:${off}`,
    Math.max(Math.ceil(price_cache * ((off_index & 0x80) > 0 ? 0.5 : 0.7)), 1),
  );
  let flag_shop = true;
  const to_buy = {},
    price = {},
    limit = {},
    cur_location = era.get('flag:当前位置');
  const price_ratio =
    (100 + era.get('flag:道具价格') + (era.get('flag:当前年') - 2000) * 4) /
    100;
  item_list.forEach((e) => {
    let id = e;
    if (typeof e !== 'number') {
      id = e.id;
      limit[id] = e.limit;
    }
    to_buy[id] = 1;
    price[id] = Math.ceil(era.get(`itemprice:${id}`) * price_ratio);
  });
  let on_sell_list,
    cur_coin,
    cur_page = 1,
    max_page,
    flag_hide_acc = era.get('flag:隐藏快捷键');
  while (flag_shop) {
    cur_coin = era.get('flag:当前马币');
    on_sell_list = item_list
      .map((e) => e.id || e)
      .filter((e) => !limit[e] || !era.get(`item:${e}`));
    max_page = Math.ceil(on_sell_list.length / 10);
    if (cur_page > max_page) {
      cur_page = max_page;
    }
    const cur_list = on_sell_list.slice(cur_page * 10 - 10, cur_page * 10);
    /** @type {*[]} */
    const buffer = [{ type: 'divider' }];
    cur_list.forEach((id) => {
      const name = era.get(`itemname:${id}`).toUpperCase();
      const max_count = Math.floor(cur_coin / price[id]);
      buffer.push(
        {
          accelerator: id,
          config: {
            buttonType: id === off ? 'danger' : 'warning',
            width: 4,
          },
          content: `${name}${limit[id] ? '(限)' : ''}`,
          type: 'button',
        },
        {
          type: 'text',
          config: {
            align: 'center',
            width: 1,
          },
          content: '持有',
        },
        {
          type: 'text',
          config: { width: 1 },
          content:
            name === '避孕套（5只装）'
              ? era.get('item:避孕套')
              : era.get(`item:${id}`),
        },
        {
          accelerator: id + 1000,
          config: {
            align: 'center',
            disabled: to_buy[id] === 1 || limit[id],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '-10',
          type: 'button',
        },
        {
          accelerator: id + 2000,
          config: {
            align: 'center',
            disabled: to_buy[id] === 1 || limit[id],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '-1',
          type: 'button',
        },
        {
          type: 'text',
          config: { align: 'center', width: 1 },
          content: `× ${to_buy[id]}`,
        },
        {
          accelerator: id + 3000,
          config: {
            align: 'center',
            disabled: to_buy[id] === 99 || to_buy[id] >= max_count || limit[id],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '+1',
          type: 'button',
        },
        {
          accelerator: id + 4000,
          config: {
            align: 'center',
            disabled: to_buy[id] === 99 || to_buy[id] >= max_count || limit[id],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '+10',
          type: 'button',
        },
        {
          accelerator: id + 5000,
          config: {
            align: 'center',
            disabled:
              to_buy[id] === 99 ||
              max_count === 0 ||
              to_buy[id] === max_count ||
              limit[id],
            showAcc: !flag_hide_acc,
            width: 4,
          },
          content: '最大',
          type: 'button',
        },
        {
          accelerator: id + 6000,
          config: {
            align: 'right',
            disabled: price[id] * to_buy[id] > cur_coin,
            showAcc: !flag_hide_acc,
            width: 5,
          },
          content: `购买 (${price[id] * to_buy[id]} 马币)`,
          type: 'button',
        },
      );
    });
    buffer.push({
      type: 'text',
      content: '\n* 点击道具查看说明\n** 带“限”字样的商品只能拥有一件',
    });
    if (in_list) {
      buffer.push({
        type: 'text',
        content: [
          '*** 本周特惠！',
          {
            content: era.get(`itemname:${off}`).toUpperCase(),
            color: money_color,
            fontWeight: 'bold',
          },
          ' ',
          {
            content: (off_index & 0x80) > 0 ? '50%off' : '30%off',
            color: attr_change_colors.up,
          },
          '！',
        ],
      });
    }
    buffer.push({ type: 'divider' });
    const buffer_2 = [];
    if (max_page > 1) {
      buffer_2.push(
        {
          accelerator: 996,
          config: { align: 'center', disabled: cur_page === 1, width: 3 },
          content: '上一页',
          type: 'button',
        },
        {
          config: { align: 'center', width: 6 },
          content: `第 ${cur_page} 页 / 共 ${max_page} 页`,
          type: 'text',
        },
        {
          accelerator: 997,
          config: {
            align: 'center',
            disabled: cur_page === max_page,
            width: 3,
          },
          content: '下一页',
          type: 'button',
        },
      );
    }
    buffer_2.push(
      {
        accelerator: 998,
        config: {
          align: 'right',
          buttonType: flag_hide_acc ? 'warning' : 'info',
          width: 6,
        },
        content: `隐藏快捷键 [${flag_hide_acc ? '开' : '关'}]`,
        type: 'button',
      },
      {
        accelerator: 999,
        config: { align: 'right', width: 6 },
        content: `离开 ${location_name[cur_location]}`,
        type: 'button',
      },
    );
    await era.clear();
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          {
            config: { width: 9 },
            content: date_indicator(),
            type: 'text',
          },
          {
            config: {
              width: 5,
            },
            content: [
              {
                color: money_color,
                content: cur_coin.toLocaleString(),
                fontWeight: 'bold',
              },
              ' 马币',
            ],
            type: 'text',
          },
          {
            config: { width: 10 },
            content: `位于 ${location_name[cur_location]}`,
            type: 'text',
          },
        ],
        config: { width: 16 },
      },
      buffer,
      {
        columns: buffer_2,
        config: { horizontalAlign: 'end' },
      },
    );
    const ret = await era.input();
    era.drawLine();
    if (ret === 996) {
      cur_page--;
    } else if (ret === 997) {
      cur_page++;
    } else if (ret === 998) {
      flag_hide_acc = era.set('flag:隐藏快捷键', !flag_hide_acc);
    } else if (ret === 999) {
      flag_shop = false;
    } else {
      const selected_item = ret % 1000;
      const sub_code = (ret - selected_item) / 1000;
      let name;
      switch (sub_code) {
        case 0:
          name = era.get(`itemname:${selected_item}`).toUpperCase();
          await era.printAndWait(
            shop_desc[shop_desc[name]] || shop_desc[name] || name,
          );
          break;
        case 1:
          to_buy[selected_item] = Math.max(to_buy[selected_item] - 10, 1);
          break;
        case 2:
          to_buy[selected_item]--;
          break;
        case 3:
          to_buy[selected_item]++;
          break;
        case 4:
          to_buy[selected_item] = Math.min(to_buy[selected_item] + 10, 99);
          break;
        case 5:
          to_buy[selected_item] = Math.max(
            Math.min(Math.floor(cur_coin / price[selected_item]), 99),
            1,
          );
          break;
        case 6:
          cur_coin = era.add(
            'flag:当前马币',
            -price[selected_item] * to_buy[selected_item],
          );
          era.add(`item:${selected_item}`, to_buy[selected_item]);
          await era.printAndWait(
            `购买了 ${to_buy[selected_item]} 个 ${era
              .get(`itemname:${selected_item}`)
              .toUpperCase()} `,
          );
          to_buy[selected_item] = Math.max(
            Math.min(
              Math.floor(cur_coin / price[selected_item]),
              to_buy[selected_item],
            ),
            1,
          );
          era.add('item:避孕套', 5 * era.get('item:避孕套（5只装）'));
          era.set('item:避孕套（5只装）', 0);
      }
    }
  }
  era.set(`itemprice:${off}`, price_cache);
};
